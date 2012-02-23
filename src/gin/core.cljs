(ns gin.core
  (:require
   [gin.localgame :as local]
   [gin.dom-helpers :as dom]
   [goog.net.Jsonp :as jsonp]
   [goog.events :as events]
   [goog.fx.Dragger :as fxdrag]
   [goog.net.ImageLoader :as gnet-image-loader]
   [clojure.browser.repl :as repl]))

(def game (atom {}))

(defn set-msg [text]
  (dom/set-text "msg" text))

(defn add-msg-watcher []
  (add-watch game :msg-watcher
             (fn [key ref old new]
               (let [state (:state new)]
                 (-> (condp = state
                         :our-pick-move "Your turn. Draw a card or pickup a discard."
                         :our-discard-move "Drag a card from your hand to discard."
                         :opponent-move "Opponent to move."
                         :pat-tie "Game over: Both dealt gin for a tie."
                         :pat-our-win "Game over: You win, dealt gin."
                         :pat-opp-win "Game over: Opponent wins, dealt gin."
                         :our-win "Game over: You win!"
                         :opp-win "Game over: Opponent wins."
                         "Ginrummy.")
                     set-msg)))))

(defn in-rect [rect [x y]]
  (and (>= x (. rect -left))
       (<= x (+ (. rect -left) (. rect -width)))
       (>= y (. rect -top))
       (<= y (+ (. rect -top) (. rect -height)))))

(def our-region (dom/get-element "our_region"))
(def discard-pile (dom/get-element "discard_pile"))
(def pile-position [209 181])
(def discard-position [358 181])

(def container-wrap
  (let [r (goog.style.getBounds (dom/get-element "container"))] 
       (goog.math.Rect. (. r -left) (. r -top) (- (. r -width) 71 -2) (- (. r -height) 96 37))))

(def in-our-region
  (let [our-region-bounds (goog.style.getBounds our-region)]
    (fn [x y]
      (in-rect our-region-bounds [x y]))))

(def in-discard-pile
  (let [discard-bounds (goog.style.getBounds discard-pile)]
    (fn [x y] (in-rect discard-bounds [x y]))))

(defn set-card-back [card-el]
  (set! (. card-el -card) nil)
  (dom/set-card-class card-el "card_back"))

(defn set-card [card-el card]
  (let [{suit :suit rank :rank} card
        card-class (str (name suit) "_" (name rank))]
    (set! (. card-el -card) card)
    (dom/set-card-class card-el card-class)))

(defn set-drag-handler [card-el handler]
  (let [cursor (:cursor handler)]
    (if (= cursor :hand)
      (dom/add-class card-el "cursor_hand")
      (dom/remove-class card-el "cursor_hand"))
    (set! (. card-el -drag-handler) handler)))

(defn enable-pile-card []
  (set-drag-handler (dom/get-element (peek (:pile-cards @game))) pile-drag-handler))
(defn enable-discard []
  (set-drag-handler (dom/get-element (peek (:discards @game))) discard-drag-handler))

(defn disable-pile-card []
  (set-drag-handler (dom/get-element (peek (:pile-cards @game))) undraggable-handler))
(defn disable-discard []
  (set-drag-handler (dom/get-element (peek (:discards @game))) undraggable-handler))

(defn restock-pile []
  ;; taken a card from the pile, which may be exhausted now
  (let [new-game (swap! game
                    (fn [g]
                      (if (empty? (:pile-cards g))
                        (let [discards (:discards g)]
                          (-> g
                              (assoc :discards [(peek discards)])
                              (assoc :pile-cards (vec (pop discards)))
                              (assoc :last (pop discards))))
                        (assoc g :last nil))))]
    (when (:last new-game)
      (doseq [card-id (:pile-cards new-game)]
        (let [card-el (dom/get-element card-id)]
          (set-card-back card-el)
          (apply dom/set-position card-el pile-position))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; transitions
(declare restart-app)
(defn finish-game [finish-state opp-cards]
  (swap! game assoc :state finish-state)
  (dom/schedule [100 #(doall (map set-card (map dom/get-element (:opp-cards @game)) opp-cards))])
  (let [msg-area (dom/get-element "msg")
        restart-button (dom/element :span {:id "restart_button" :class "restart_button"} "New game")]
    (events/listenOnce restart-button events/EventType.CLICK
                   restart-app)
    (dom/append msg-area restart-button)))

(defn start-game [table-state]
  (condp = (:result table-state)
      :tie (finish-game :pat-tie (:opp-cards table-state))
      :our-win (finish-game :pat-our-win (:opp-cards table-state))
      :opp-win (finish-game :pat-opp-win (:opp-cards table-state))
      (to-our-pick-move)))

(defn to-our-pick-move []
  (enable-pile-card)
  (enable-discard)
  (swap! game assoc :state :our-pick-move))

(defn to-our-discard-move-from-pile [pile-card-id]
  (disable-discard)
  (local/get-pile-card (fn [new-card]
                         (set-card (dom/get-element pile-card-id) new-card)
                         (swap! game #(-> %
                                          (update-in [:pile-cards] pop)
                                          (update-in [:our-cards] conj pile-card-id)
                                          (assoc :state :our-discard-move)
                                          ))
                         (restock-pile))))

(defn to-our-discard-move-from-discard [discard-card-id]
  (disable-pile-card)
  (local/get-discard  (fn []
                        (swap! game #(-> %
                                         (update-in [:discards] pop)
                                         (update-in [:our-cards] conj discard-card-id)
                                         (assoc :state :our-discard-move))))))
(declare wait-on-opponent-move)
(defn our-move-drop-discard [our-discard-id]
  (let [our-discard-el (dom/get-element our-discard-id)
        card (. our-discard-el -card)]
    (swap! game #(-> %
                    (update-in [:our-cards] disj our-discard-id)
                    (update-in [:discards] conj our-discard-id)))
    (disable-discard)
    (local/set-our-discard card
                           (fn [table-state]
                             (if (= (:result table-state) :continue)
                               (wait-on-opponent-move) 
                               (finish-game (:result table-state) (:opp-cards table-state)))))))

(declare switch-opp-cards)
(defn wait-on-opponent-move []
  (swap! game assoc :state :opponent-move)
  (local/get-opponent-move
   (fn [from return-card table-state]
     (let [new-discard-id (rand-nth (:opp-cards @game))
           new-discard-el (dom/get-element new-discard-id)
           callback #(do
                       (set-card new-discard-el return-card)
                       (swap! game (fn [g]
                                     (-> g
                                         (update-in [:opp-cards] (comp vec (partial remove #{new-discard-id})))
                                         (update-in [:discards] conj new-discard-id))))
                       (if (= (:result table-state) :continue)
                         (to-our-pick-move)
                         (finish-game (:result table-state) (:opp-cards table-state))))]
       (cond
        (= from :pile)
        (dom/schedule (concat
                       (switch-opp-cards (dom/get-element (peek (:pile-cards @game))) new-discard-el)
                       [#(swap! game (fn [g] 
                                       (-> g
                                           (update-in [:opp-cards] conj (peek (:pile-cards g)))
                                           (update-in [:pile-cards] pop))))
                        restock-pile
                        callback]))
        (= from :discard)
        (let [discard-el (dom/get-element (peek (:discards @game)))]
          (dom/schedule (concat
                         (switch-opp-cards discard-el new-discard-el)
                         [#(set-card-back discard-el)]
                         [#(swap! game (fn [g] 
                                         (-> g
                                             (update-in [:opp-cards] conj (peek (:discards g)))
                                             (update-in [:discards] pop))))
                          callback]))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Drag handlers  
(declare pile-drag-handler discard-drag-handler)  
(def undraggable-handler
    {:cursor :none
     :drag-start (fn [card-id event]
                   (. event (preventDefault)))
     :drag (fn [card-id event])
     :drag-end (fn [card-id event])})

(def basic-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (dom/show-on-top (dom/get-element card-id)))
   :drag (fn [card-id event])
   :drag-end (fn [card-id event])})

(def snap-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (let [card-el (dom/get-element card-id)]
                   (set! (. card-el -drag-origin) (dom/get-position card-el))
                   (dom/show-on-top card-el)))
   :drag (fn [card-id event])
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/fly-card card-el (. card-el -drag-origin))))})
(declare pile-drag-handler)
(declare home-region-handler)
(def pile-pick-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event]
           (when-not (in-our-region (. event -clientX) (. event -clientY))
             (set-drag-handler (dom/get-element card-id) pile-drag-handler)
             (dom/remove-class our-region "region_hover")
             ))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/remove-class our-region "region_hover")
                 (set-drag-handler card-el home-region-handler)
                 (to-our-discard-move-from-pile card-id)))})

(def pile-drag-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (if-not (= (:state @game) :our-pick-move)
                   (. event (preventDefault))
                   (do
                     (dom/add-remove-class (dom/get-element card-id) "cursor_drag" "cursor_hand")
                     (dom/show-on-top (dom/get-element card-id)))))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 pos (dom/get-position card-el)]
             (when (in-our-region (. pos -x) (. pos -y))
               (set-drag-handler card-el pile-pick-handler)
               (dom/add-class our-region "region_hover")
              )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/schedule (dom/slide-from card-el pile-position))))})

(declare discard-drag-handler)
(def discard-pick-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 pos (dom/get-position card-el)]
             (when-not (in-our-region (. pos -x) (. pos -y))
               (set-drag-handler card-el discard-drag-handler)
               (dom/remove-class our-region "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/remove-class our-region "region_hover")
                 (set-drag-handler card-el home-region-handler)
                 (to-our-discard-move-from-discard card-id)))})

(def discard-drag-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (if-not (= (:state @game) :our-pick-move)
                   (. event (preventDefault))
                   (do
                     (dom/add-remove-class (dom/get-element card-id) "cursor_drag" "cursor_hand")
                     (dom/show-on-top (dom/get-element card-id)))))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)
                 pos (dom/get-position card-el)]
             (when (in-our-region (. pos -x) (. pos -y))
               (set-drag-handler card-el discard-pick-handler)
               (dom/add-class our-region "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/schedule (dom/slide-from card-el discard-position))))})


(def snap-to-discard-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (. event (preventDefault)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)]
             (when-not (in-discard-pile (. event -clientX) (. event -clientY))
               (set-drag-handler card-el home-region-handler)
               (dom/remove-class discard-pile "region_hover")
               )))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (dom/remove-class discard-pile "region_hover")
                 (dom/schedule (concat (dom/slide-from card-el discard-position)
                                       [#(our-move-drop-discard card-id)]))))})

(def home-region-handler
  {:cursor :hand
   :drag-start (fn [card-id event]
                 (let [card-el (dom/get-element card-id)]
                   (dom/add-remove-class (dom/get-element card-id) "cursor_drag" "cursor_hand")
                   (set! (. card-el -drag-origin) (dom/get-position card-el))
                   (dom/show-on-top card-el)))
   :drag (fn [card-id event]
           (let [card-el (dom/get-element card-id)]
             (when (and (= (:state @game) :our-discard-move)
                        (in-discard-pile (. event -clientX) (. event -clientY)))
               (dom/add-class discard-pile "region_hover")
               (set-drag-handler card-el snap-to-discard-handler))))
   :drag-end (fn [card-id event]
               (let [card-el (dom/get-element card-id)
                     pos (dom/get-position card-el)]
                 (dom/add-remove-class card-el "cursor_hand" "cursor_drag")
                 (when-not (in-our-region (. pos -x) (. pos -y))
                   (dom/fly-card card-el (. card-el -drag-origin)))))})


(def our-cards-handler home-region-handler)

(defn make-card [card-id]
  (let [card-el (dom/element :div {:class (str "card " "card_back") :id card-id})
        table-cards (dom/get-element :cards)
        dragger (goog.fx.Dragger. card-el)]
    (. dragger (setLimits container-wrap))
    (set! (. card-el -dispose) #(. dragger (dispose)))
    (set-drag-handler card-el undraggable-handler)
    (events/listen dragger
                   fxdrag/EventType.START
                   (fn [event]
                     ((:drag-start (. card-el -drag-handler)) card-id event)))
    (events/listen dragger
                   fxdrag/EventType.DRAG
                   (fn [event]
                     ((:drag (. card-el -drag-handler)) card-id event)))
    (events/listen dragger
                   fxdrag/EventType.END
                   (fn [event]
                     ((:drag-end (. card-el -drag-handler)) card-id event)))
    (dom/show-element card-el false)
    (dom/append table-cards card-el)

    (apply dom/set-position card-el pile-position)
    (dom/show-element card-el true)
    card-el))

(defn make-game []
  (let [opp-cards (map #(str "card-" %) (range 10))
        our-cards (map #(str "card-" %) (range 10 20))
        discard "card-20"
        pile-cards (reverse (map #(str "card-" %) (range 21 52)))]
    (dom/append (dom/get-element "table") (dom/element :div {:id "cards"}))
    (doseq [card pile-cards]
      (make-card card))
    (make-card discard)
    (doseq [card our-cards]
      ;; using result from make-card for setting drag handler fails
      (make-card card)
      (set-drag-handler (dom/get-element card) our-cards-handler))
    (doseq [card opp-cards]
      (make-card card))
    (reset! game
            {:state :init
             :opp-cards (vec opp-cards)
                    :our-cards (set our-cards)
                    :pile-cards (vec pile-cards)
                    :discards [discard]})))

;; Should use goog.fx.AnimationSerialQueue but it
;; randomly doesn't play the last couple of anims
(defn switch-opp-cards [take-el opp-card-el]
  (let [opp-card-pos (dom/get-position opp-card-el)
        opp-card-x (. opp-card-pos -x)
        opp-card-y (. opp-card-pos -y)
        opp-card-z (.. opp-card-el -style -zIndex)]
    (concat [#(set-drag-handler take-el undraggable-handler)
             #(dom/show-on-top opp-card-el)]
            (dom/slide-from opp-card-el [(- opp-card-x 35) (+ opp-card-y 5)])
            (dom/slide-from take-el [opp-card-x opp-card-y])
            [#(set! (.. take-el -style -zIndex) opp-card-z)]
            (dom/slide opp-card-el [(- opp-card-x 35) (+ opp-card-y 5)] discard-position))))

(defn deal-deck [game table callback]
  (let [opp-cards-el (map dom/get-element (:opp-cards game))
        our-cards-el (map dom/get-element (:our-cards game))
        discard-el (dom/get-element (peek (:discards game)))
        our-cards (:our-cards table)
        discard (peek (:discards table))]
    (dom/schedule  (concat (mapcat #(concat
                                     [(fn [] (dom/show-on-top %2))]
                                     (dom/slide-from %2 [(+ 44 (* %1 53)) (+ 16 (* %1 4))]))
                                   (range)
                                   opp-cards-el)
                           (mapcat #(concat
                                     [(fn [] (dom/show-on-top %2))]
                                     (dom/slide-from %2 [(+ 44 (* %1 53)) (+ 306 (* %1 4))])
                                     [(fn [] (set-card %2 %3))])
                                   (range)
                                   our-cards-el
                                   our-cards)
                           (concat [(fn [] (dom/show-on-top discard-el))]
                                   (dom/slide-from discard-el discard-position)
                                   [(fn [] (set-card discard-el discard))])
                           [callback]))))

(defn load-images [callback]
  ;; addImage id src
  (let [image-loader (goog.net.ImageLoader.)]
    (. image-loader (addImage "images/b.png" "images/b.png"))
    (doseq [img-loc (for [suit ["diamond" "club" "heart" "spade"]
                          rank "AKQJT98765432"]
                      (str "images/" suit "_" rank ".png"))]
      (. image-loader (addImage img-loc img-loc)))
    (events/listenOnce image-loader
                   goog.net.EventType.COMPLETE
                   callback)
    (. image-loader (start))))

(defn restart-app []
  ;; could reuse the cards?
  ;; cards are pimped HTMLDivElements, should use goog.ui.Component
  ;; this unregisters the draggers and listeners
  (doseq [card-id (map #(str "card-" %) (range 52))]
    (. (dom/get-element card-id) (dispose)))
  (dom/remove-children (dom/get-element "cards"))
  (make-game)
  (local/get-init-shuffle (fn [table table-state]
                            (deal-deck @game table #(start-game table-state)))))

(defn ^:export start-app []
  (add-msg-watcher)
  (load-images
   (fn []
     (make-game)
     (local/get-init-shuffle (fn [table table-state]
                               (deal-deck @game table #(start-game table-state)))))))

;;;;;;;;;;;;;;;;;;;;;;;;; Debug tools
(defn connect []
    (repl/connect "http://localhost:9000/repl"))

(defn build-watch-table []
  (dom/build
   (apply vector :div.watch_table
          (concat
           [[:div.watch_table_gin_size 
             "Opponent gin size:" [:span {:id "watch_table_opp_ginsize"}]]]
           (for [s ["heart" "club" "diamond" "spade"]]
             (apply vector :div.watch_table_card_row
                    (for [r "23456789TJQKA"]
                      [:div.watch_table_card {:id (str r "_" s)} (str r (first s))])))
           [[:div.watch_table_gin_size
             "Our gin size:" [:span {:id "watch_table_our_ginsize"}]]]))))

(defn watch-table []
  (dom/append (aget (goog.dom/getElementsByTagNameAndClass "body") 0) (dom/element :div {:id "watch_table"}))
  (def old-table nil)
  (let [watch-table-el (dom/get-element "watch_table")]
    (dom/append watch-table-el (build-watch-table))
    (add-watch local/table :watch-table
               (fn [key ref old new]
                 (set! old-table old)
                 (doseq [[cards c] [[(:our-cards new) "watch_table_our_card"]
                                    [(:opp-cards new) "watch_table_opp_card"]
                                    [(and
                                      (peek (:discards new))
                                      (pop (:discards new))) "watch_table_discards"]
                                    [(:pile-cards new) "watch_table_gone_card"]]]
                   (doseq [card cards]
                    (->
                     (dom/get-element (str (name (:rank card)) "_" (name (:suit card))))
                     (goog.dom.classes.set c))))
                 (when-let [card (peek (:discards new))]
                   (->
                    (dom/get-element (str (name (:rank card)) "_" (name (:suit card))))
                    (goog.dom.classes.set  "watch_table_discard")))
                 (dom/set-text "watch_table_opp_ginsize" (:opp-gin-size new))
                 (dom/set-text "watch_table_our_ginsize" (:our-gin-size new))
                 ))))

(defn view-game [game]
  (let [state {:our-cards (doall (map #(vector % (. (dom/get-element %) -card)) (:our-cards game)))
               :opp-cards (doall (map #(vector % (. (dom/get-element %) -card)) (:opp-cards game)))
               :discards (doall (map #(vector % (. (dom/get-element %) -card)) (:discards game)))}]
    (str "GAME state: " (pr-str state))))

(comment
  (doseq [card-id (apply concat (vals (dissoc @game :state)))]
    (dom/set-text (dom/get-element card-id) (str "__" card-id)))
  (doseq [card-id (apply concat (vals (dissoc @game :state)))]
    (dom/set-text (dom/get-element card-id) ""))
  (dom/schedule [1000 (fn [] (doall (map #(dom/set-position (dom/get-element %1) %2 (second discard-position))
                                         (:discards @game)
                                         (iterate #(+ 40 %) (first discard-position)))))])
  (dom/schedule [1000 (fn [] (doall (map #(dom/set-position (dom/get-element %1) %2 (second discard-position))
                                         (:discards @game)
                                         (repeat (first discard-position)))))])
  
  (console.log (view-game @game))
  (console.log (pr-str @local/table))
  (= (set (for [suit [:heart :diamond :club :spade]
                rank [:A :K :Q :J :T :9 :8 :7 :6 :5 :4 :3 :2]]
            {:suit suit :rank rank}))
     (into #{} (apply concat (vals (select-keys @local/table [:our-cards :discards :pile-cards :opp-cards])))))

  )

