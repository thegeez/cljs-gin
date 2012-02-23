(ns gin.localgame
  (:require [gin.game :as game]))

(def table (atom {}))

(defn table-state [table]
  (let [opp-gin-size (:opp-gin-size table)
        our-gin-size (:our-gin-size table)]
    (cond
     (and (= opp-gin-size 10)
          (= our-gin-size 10))
     {:result :tie
      :opp-cards (:opp-cards table)} ;; only possible when both dealt gin
     (= opp-gin-size 10)
     {:result :opp-win
      :opp-cards (:opp-cards table)}
     (= our-gin-size 10)
     {:result :our-win
      :opp-cards (:opp-cards table)}
     :else {:result :continue})))

(defn shuffle-set [s n]
  "shuffles the n first items in set s"
  (if (and (seq s)
           (< 0 n))
    (let [pick (rand-nth s)]
      (cons pick (shuffle-set (disj s pick) (dec n))))
    s))

(defn get-init-shuffle [callback]
  (let [deck (shuffle-set (set (for [suit [:heart :club :spade :diamond]
                                     rank [:A :K :Q :J :T :9 :8 :7 :6 :5 :4 :3 :2]]
                                 {:suit suit
                                  :rank rank}))
                          21)
        [opp-cards others] (split-at 10 deck)
        [our-cards [discard & pile]] (split-at 10 others)]
    (swap! table merge {:our-cards (set our-cards)
                        :our-gin-size (game/gin-size our-cards)
                        :discards [discard]
                        :pile-cards (set pile)
                        :opp-cards (set opp-cards)
                        :opp-gin-size (game/gin-size opp-cards)})
    (-> (select-keys @table [:our-cards :discards])
        (callback (table-state @table)))))

(defn restock-pile []
  (swap! table (fn [t]
                 (if (empty? (:pile-cards t))
                   (let [discards (:discards t)]
                     (-> t
                         (assoc :discards [(peek discards)])
                         (assoc :pile-cards (set (pop discards)))))
                   t))))

(defn get-pile-card [callback]
  (let [new-card (:last (swap! table (fn [old-table]
                                       (let [card (rand-nth (:pile-cards old-table))]
                                         (-> old-table
                                             (update-in [:pile-cards] disj card)
                                             (update-in [:our-cards] conj card)
                                             (assoc :last card))))))]
    (restock-pile)
    (callback new-card)))

(defn get-discard [callback]
  (swap! table (fn [old-table]
                 (let [card (peek (:discards old-table))]
                   (-> old-table
                       (update-in [:discards] pop)
                       (update-in [:our-cards] conj card)
                       (assoc :last card)))))
  (callback))

(defn set-our-discard [discard callback]
  (swap! table
         #(-> %
              (update-in [:our-cards] disj discard)
              (update-in [:discards] conj discard)))
  (swap! table (fn [t]
                 (assoc t :our-gin-size (game/gin-size (:our-cards t)))))
  (callback (table-state @table)))


(defn get-opponent-move [callback]
  (let [[new-card from] (:last (swap! table
                                      (fn [t]
                                        (let [from #_:pile (game/decide-move t)
                                              take-card (cond
                                                         (= from :pile)
                                                         (rand-nth (:pile-cards t))
                                                         (= from :discard)
                                                         (peek (:discards t)))
                                              t (-> (cond
                                                     (= from :pile)
                                                     (update-in t [:pile-cards] disj take-card)
                                                     (= from :discard)
                                                     (update-in t [:discards] pop))
                                                    (update-in [:opp-cards] conj take-card))
                                              trade-card #_(rand-nth (:opp-cards t))
                                              (game/choosediscard (:opp-cards t) (:discards t))]
                                          (-> t
                                              (update-in [:opp-cards] disj trade-card)
                                              (update-in [:discards] conj trade-card)
                                              (assoc :last [trade-card from]))))))]
    (when (= from :pile)
      (restock-pile))
    (swap! table (fn [t]
                   (assoc t :opp-gin-size (game/gin-size (:opp-cards t)))))
    (callback from new-card (table-state @table))))
