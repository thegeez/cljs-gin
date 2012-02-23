goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2903 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2903))
{return or__3548__auto____2903;
} else
{var or__3548__auto____2904 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2904))
{return or__3548__auto____2904;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2905 = coll;

if(cljs.core.truth_(and__3546__auto____2905))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2905;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2906 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2906))
{return or__3548__auto____2906;
} else
{var or__3548__auto____2907 = (_count["_"]);

if(cljs.core.truth_(or__3548__auto____2907))
{return or__3548__auto____2907;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2908 = coll;

if(cljs.core.truth_(and__3546__auto____2908))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2908;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2909 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2909))
{return or__3548__auto____2909;
} else
{var or__3548__auto____2910 = (_empty["_"]);

if(cljs.core.truth_(or__3548__auto____2910))
{return or__3548__auto____2910;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2911 = coll;

if(cljs.core.truth_(and__3546__auto____2911))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2911;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2912 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2912))
{return or__3548__auto____2912;
} else
{var or__3548__auto____2913 = (_conj["_"]);

if(cljs.core.truth_(or__3548__auto____2913))
{return or__3548__auto____2913;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2920 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2914 = coll;

if(cljs.core.truth_(and__3546__auto____2914))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2914;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2915 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2915))
{return or__3548__auto____2915;
} else
{var or__3548__auto____2916 = (_nth["_"]);

if(cljs.core.truth_(or__3548__auto____2916))
{return or__3548__auto____2916;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2921 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2917 = coll;

if(cljs.core.truth_(and__3546__auto____2917))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2917;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2918 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2918))
{return or__3548__auto____2918;
} else
{var or__3548__auto____2919 = (_nth["_"]);

if(cljs.core.truth_(or__3548__auto____2919))
{return or__3548__auto____2919;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2920.call(this,coll,n);
case  3 :
return _nth__2921.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2923 = coll;

if(cljs.core.truth_(and__3546__auto____2923))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2923;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2924 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2924))
{return or__3548__auto____2924;
} else
{var or__3548__auto____2925 = (_first["_"]);

if(cljs.core.truth_(or__3548__auto____2925))
{return or__3548__auto____2925;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2926 = coll;

if(cljs.core.truth_(and__3546__auto____2926))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2926;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2927 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2927))
{return or__3548__auto____2927;
} else
{var or__3548__auto____2928 = (_rest["_"]);

if(cljs.core.truth_(or__3548__auto____2928))
{return or__3548__auto____2928;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2935 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2929 = o;

if(cljs.core.truth_(and__3546__auto____2929))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2929;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2930 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2930))
{return or__3548__auto____2930;
} else
{var or__3548__auto____2931 = (_lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2931))
{return or__3548__auto____2931;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2936 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2932 = o;

if(cljs.core.truth_(and__3546__auto____2932))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2932;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2933 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2933))
{return or__3548__auto____2933;
} else
{var or__3548__auto____2934 = (_lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2934))
{return or__3548__auto____2934;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2935.call(this,o,k);
case  3 :
return _lookup__2936.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2938 = coll;

if(cljs.core.truth_(and__3546__auto____2938))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2938;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2939 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2939))
{return or__3548__auto____2939;
} else
{var or__3548__auto____2940 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2940))
{return or__3548__auto____2940;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2941 = coll;

if(cljs.core.truth_(and__3546__auto____2941))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2941;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2942 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2942))
{return or__3548__auto____2942;
} else
{var or__3548__auto____2943 = (_assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2943))
{return or__3548__auto____2943;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2944 = coll;

if(cljs.core.truth_(and__3546__auto____2944))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2944;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2945 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2945))
{return or__3548__auto____2945;
} else
{var or__3548__auto____2946 = (_dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2946))
{return or__3548__auto____2946;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2947 = coll;

if(cljs.core.truth_(and__3546__auto____2947))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2947;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2948 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2948))
{return or__3548__auto____2948;
} else
{var or__3548__auto____2949 = (_disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2949))
{return or__3548__auto____2949;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2950 = coll;

if(cljs.core.truth_(and__3546__auto____2950))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2950;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2951 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2951))
{return or__3548__auto____2951;
} else
{var or__3548__auto____2952 = (_peek["_"]);

if(cljs.core.truth_(or__3548__auto____2952))
{return or__3548__auto____2952;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2953 = coll;

if(cljs.core.truth_(and__3546__auto____2953))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2953;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2954 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2954))
{return or__3548__auto____2954;
} else
{var or__3548__auto____2955 = (_pop["_"]);

if(cljs.core.truth_(or__3548__auto____2955))
{return or__3548__auto____2955;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2956 = coll;

if(cljs.core.truth_(and__3546__auto____2956))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2956;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2957 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2957))
{return or__3548__auto____2957;
} else
{var or__3548__auto____2958 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2958))
{return or__3548__auto____2958;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2959 = o;

if(cljs.core.truth_(and__3546__auto____2959))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2959;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2960 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2960))
{return or__3548__auto____2960;
} else
{var or__3548__auto____2961 = (_deref["_"]);

if(cljs.core.truth_(or__3548__auto____2961))
{return or__3548__auto____2961;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2962 = o;

if(cljs.core.truth_(and__3546__auto____2962))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2962;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2963 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2963))
{return or__3548__auto____2963;
} else
{var or__3548__auto____2964 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2964))
{return or__3548__auto____2964;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2965 = o;

if(cljs.core.truth_(and__3546__auto____2965))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2965;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2966 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2966))
{return or__3548__auto____2966;
} else
{var or__3548__auto____2967 = (_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2967))
{return or__3548__auto____2967;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2968 = o;

if(cljs.core.truth_(and__3546__auto____2968))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2968;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2969 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2969))
{return or__3548__auto____2969;
} else
{var or__3548__auto____2970 = (_with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2970))
{return or__3548__auto____2970;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2977 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2971 = coll;

if(cljs.core.truth_(and__3546__auto____2971))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2971;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2972 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2972))
{return or__3548__auto____2972;
} else
{var or__3548__auto____2973 = (_reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2973))
{return or__3548__auto____2973;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2978 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2974 = coll;

if(cljs.core.truth_(and__3546__auto____2974))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2974;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2975 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2975))
{return or__3548__auto____2975;
} else
{var or__3548__auto____2976 = (_reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2976))
{return or__3548__auto____2976;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2977.call(this,coll,f);
case  3 :
return _reduce__2978.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2980 = o;

if(cljs.core.truth_(and__3546__auto____2980))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2980;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2981 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2981))
{return or__3548__auto____2981;
} else
{var or__3548__auto____2982 = (_equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2982))
{return or__3548__auto____2982;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2983 = o;

if(cljs.core.truth_(and__3546__auto____2983))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2983;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2984 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2984))
{return or__3548__auto____2984;
} else
{var or__3548__auto____2985 = (_hash["_"]);

if(cljs.core.truth_(or__3548__auto____2985))
{return or__3548__auto____2985;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2986 = o;

if(cljs.core.truth_(and__3546__auto____2986))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2986;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2987 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2987))
{return or__3548__auto____2987;
} else
{var or__3548__auto____2988 = (_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2988))
{return or__3548__auto____2988;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2989 = o;

if(cljs.core.truth_(and__3546__auto____2989))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2989;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2990 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2990))
{return or__3548__auto____2990;
} else
{var or__3548__auto____2991 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2991))
{return or__3548__auto____2991;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2992 = d;

if(cljs.core.truth_(and__3546__auto____2992))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2992;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2993 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2993))
{return or__3548__auto____2993;
} else
{var or__3548__auto____2994 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2994))
{return or__3548__auto____2994;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2995 = null;
var G__2995__2996 = (function (_,n){
return null;
});
var G__2995__2997 = (function (_,n,not_found){
return not_found;
});
G__2995 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2995__2996.call(this,_,n);
case  3 :
return G__2995__2997.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2995;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2999 = null;
var G__2999__3000 = (function (_,f){
return f.call(null);
});
var G__2999__3001 = (function (_,f,start){
return start;
});
G__2999 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2999__3000.call(this,_,f);
case  3 :
return G__2999__3001.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2999;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3003 = null;
var G__3003__3004 = (function (o,k){
return null;
});
var G__3003__3005 = (function (o,k,not_found){
return not_found;
});
G__3003 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3003__3004.call(this,o,k);
case  3 :
return G__3003__3005.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3003;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3013 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3007 = cljs.core._nth.call(null,cicoll,0);
var n__3008 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__3008,cljs.core._count.call(null,cicoll))))
{{
var G__3017 = f.call(null,val__3007,cljs.core._nth.call(null,cicoll,n__3008));
var G__3018 = cljs.core.inc.call(null,n__3008);
val__3007 = G__3017;
n__3008 = G__3018;
continue;
}
} else
{return val__3007;
}
break;
}
}
});
var ci_reduce__3014 = (function (cicoll,f,val){
var val__3009 = val;
var n__3010 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__3010,cljs.core._count.call(null,cicoll))))
{{
var G__3019 = f.call(null,val__3009,cljs.core._nth.call(null,cicoll,n__3010));
var G__3020 = cljs.core.inc.call(null,n__3010);
val__3009 = G__3019;
n__3010 = G__3020;
continue;
}
} else
{return val__3009;
}
break;
}
});
var ci_reduce__3015 = (function (cicoll,f,val,idx){
var val__3011 = val;
var n__3012 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__3012,cljs.core._count.call(null,cicoll))))
{{
var G__3021 = f.call(null,val__3011,cljs.core._nth.call(null,cicoll,n__3012));
var G__3022 = cljs.core.inc.call(null,n__3012);
val__3011 = G__3021;
n__3012 = G__3022;
continue;
}
} else
{return val__3011;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3013.call(this,cicoll,f);
case  3 :
return ci_reduce__3014.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3015.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3030 = null;
var G__3030__3031 = (function (coll,f){
var this__3023 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__3023.a[this__3023.i]),cljs.core.inc.call(null,this__3023.i));
});
var G__3030__3032 = (function (coll,f,start){
var this__3024 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__3024.i);
});
G__3030 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3030__3031.call(this,coll,f);
case  3 :
return G__3030__3032.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3030;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3025 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3026 = this;
return this__3026.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3027 = this;
return (this__3027.a[this__3027.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3028 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__3028.i),this__3028.a.length)))
{return (new cljs.core.IndexedSeq(this__3028.a,cljs.core.inc.call(null,this__3028.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3029 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3034 = null;
var G__3034__3035 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3034__3036 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3034 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3034__3035.call(this,array,f);
case  3 :
return G__3034__3036.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3034;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3038 = null;
var G__3038__3039 = (function (array,k){
return (array[k]);
});
var G__3038__3040 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3038 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3038__3039.call(this,array,k);
case  3 :
return G__3038__3040.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3038;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3042 = null;
var G__3042__3043 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3042__3044 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3042 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3042__3043.call(this,array,n);
case  3 :
return G__3042__3044.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3042;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3046 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3046))
{var s__3047 = temp__3698__auto____3046;

return cljs.core._first.call(null,s__3047);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3048 = cljs.core.next.call(null,s);
s = G__3048;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3049 = cljs.core.seq.call(null,x);
var n__3050 = 0;

while(true){
if(cljs.core.truth_(s__3049))
{{
var G__3051 = cljs.core.next.call(null,s__3049);
var G__3052 = cljs.core.inc.call(null,n__3050);
s__3049 = G__3051;
n__3050 = G__3052;
continue;
}
} else
{return n__3050;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3053 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3054 = (function() { 
var G__3056__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3057 = conj.call(null,coll,x);
var G__3058 = cljs.core.first.call(null,xs);
var G__3059 = cljs.core.next.call(null,xs);
coll = G__3057;
x = G__3058;
xs = G__3059;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3056 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3056__delegate.call(this, coll, x, xs);
};
G__3056.cljs$lang$maxFixedArity = 2;
G__3056.cljs$lang$applyTo = (function (arglist__3060){
var coll = cljs.core.first(arglist__3060);
var x = cljs.core.first(cljs.core.next(arglist__3060));
var xs = cljs.core.rest(cljs.core.next(arglist__3060));
return G__3056__delegate.call(this, coll, x, xs);
});
return G__3056;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3053.call(this,coll,x);
default:
return conj__3054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3054.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3061 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__3062 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3061.call(this,coll,n);
case  3 :
return nth__3062.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3064 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3065 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3064.call(this,o,k);
case  3 :
return get__3065.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3068 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3069 = (function() { 
var G__3071__delegate = function (coll,k,v,kvs){
while(true){
var ret__3067 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3072 = ret__3067;
var G__3073 = cljs.core.first.call(null,kvs);
var G__3074 = cljs.core.second.call(null,kvs);
var G__3075 = cljs.core.nnext.call(null,kvs);
coll = G__3072;
k = G__3073;
v = G__3074;
kvs = G__3075;
continue;
}
} else
{return ret__3067;
}
break;
}
};
var G__3071 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3071__delegate.call(this, coll, k, v, kvs);
};
G__3071.cljs$lang$maxFixedArity = 3;
G__3071.cljs$lang$applyTo = (function (arglist__3076){
var coll = cljs.core.first(arglist__3076);
var k = cljs.core.first(cljs.core.next(arglist__3076));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3076)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3076)));
return G__3071__delegate.call(this, coll, k, v, kvs);
});
return G__3071;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3068.call(this,coll,k,v);
default:
return assoc__3069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3069.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3078 = (function (coll){
return coll;
});
var dissoc__3079 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3080 = (function() { 
var G__3082__delegate = function (coll,k,ks){
while(true){
var ret__3077 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3083 = ret__3077;
var G__3084 = cljs.core.first.call(null,ks);
var G__3085 = cljs.core.next.call(null,ks);
coll = G__3083;
k = G__3084;
ks = G__3085;
continue;
}
} else
{return ret__3077;
}
break;
}
};
var G__3082 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3082__delegate.call(this, coll, k, ks);
};
G__3082.cljs$lang$maxFixedArity = 2;
G__3082.cljs$lang$applyTo = (function (arglist__3086){
var coll = cljs.core.first(arglist__3086);
var k = cljs.core.first(cljs.core.next(arglist__3086));
var ks = cljs.core.rest(cljs.core.next(arglist__3086));
return G__3082__delegate.call(this, coll, k, ks);
});
return G__3082;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3078.call(this,coll);
case  2 :
return dissoc__3079.call(this,coll,k);
default:
return dissoc__3080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3080.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__110__auto____3087 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3088 = x__110__auto____3087;

if(cljs.core.truth_(and__3546__auto____3088))
{return x__110__auto____3087.cljs$core$IMeta$;
} else
{return and__3546__auto____3088;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__110__auto____3087);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3090 = (function (coll){
return coll;
});
var disj__3091 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3092 = (function() { 
var G__3094__delegate = function (coll,k,ks){
while(true){
var ret__3089 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3095 = ret__3089;
var G__3096 = cljs.core.first.call(null,ks);
var G__3097 = cljs.core.next.call(null,ks);
coll = G__3095;
k = G__3096;
ks = G__3097;
continue;
}
} else
{return ret__3089;
}
break;
}
};
var G__3094 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3094__delegate.call(this, coll, k, ks);
};
G__3094.cljs$lang$maxFixedArity = 2;
G__3094.cljs$lang$applyTo = (function (arglist__3098){
var coll = cljs.core.first(arglist__3098);
var k = cljs.core.first(cljs.core.next(arglist__3098));
var ks = cljs.core.rest(cljs.core.next(arglist__3098));
return G__3094__delegate.call(this, coll, k, ks);
});
return G__3094;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3090.call(this,coll);
case  2 :
return disj__3091.call(this,coll,k);
default:
return disj__3092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3092.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__110__auto____3099 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3100 = x__110__auto____3099;

if(cljs.core.truth_(and__3546__auto____3100))
{return x__110__auto____3099.cljs$core$ICollection$;
} else
{return and__3546__auto____3100;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__110__auto____3099);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__110__auto____3101 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3102 = x__110__auto____3101;

if(cljs.core.truth_(and__3546__auto____3102))
{return x__110__auto____3101.cljs$core$ISet$;
} else
{return and__3546__auto____3102;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__110__auto____3101);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__110__auto____3103 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3104 = x__110__auto____3103;

if(cljs.core.truth_(and__3546__auto____3104))
{return x__110__auto____3103.cljs$core$IAssociative$;
} else
{return and__3546__auto____3104;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__110__auto____3103);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__110__auto____3105 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3106 = x__110__auto____3105;

if(cljs.core.truth_(and__3546__auto____3106))
{return x__110__auto____3105.cljs$core$ISequential$;
} else
{return and__3546__auto____3106;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__110__auto____3105);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__110__auto____3107 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3108 = x__110__auto____3107;

if(cljs.core.truth_(and__3546__auto____3108))
{return x__110__auto____3107.cljs$core$ICounted$;
} else
{return and__3546__auto____3108;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__110__auto____3107);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__110__auto____3109 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3110 = x__110__auto____3109;

if(cljs.core.truth_(and__3546__auto____3110))
{return x__110__auto____3109.cljs$core$IMap$;
} else
{return and__3546__auto____3110;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__110__auto____3109);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__110__auto____3111 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3112 = x__110__auto____3111;

if(cljs.core.truth_(and__3546__auto____3112))
{return x__110__auto____3111.cljs$core$IVector$;
} else
{return and__3546__auto____3112;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__110__auto____3111);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3113 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3113.push(key);
}));
return keys__3113;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__110__auto____3114 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3115 = x__110__auto____3114;

if(cljs.core.truth_(and__3546__auto____3115))
{return x__110__auto____3114.cljs$core$ISeq$;
} else
{return and__3546__auto____3115;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__110__auto____3114);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3116 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3116))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3117 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3117))
{return or__3548__auto____3117;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3116;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3118 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3118))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3118;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3119 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3119))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3119;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3120 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3120))
{return (n == n.toFixed());
} else
{return and__3546__auto____3120;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3121 = coll;

if(cljs.core.truth_(and__3546__auto____3121))
{var and__3546__auto____3122 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3122))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3122;
}
} else
{return and__3546__auto____3121;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3127 = (function (x){
return true;
});
var distinct_QMARK___3128 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3129 = (function() { 
var G__3131__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3123 = cljs.core.set([y,x]);
var xs__3124 = more;

while(true){
var x__3125 = cljs.core.first.call(null,xs__3124);
var etc__3126 = cljs.core.next.call(null,xs__3124);

if(cljs.core.truth_(xs__3124))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3123,x__3125)))
{return false;
} else
{{
var G__3132 = cljs.core.conj.call(null,s__3123,x__3125);
var G__3133 = etc__3126;
s__3123 = G__3132;
xs__3124 = G__3133;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3131 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3131__delegate.call(this, x, y, more);
};
G__3131.cljs$lang$maxFixedArity = 2;
G__3131.cljs$lang$applyTo = (function (arglist__3134){
var x = cljs.core.first(arglist__3134);
var y = cljs.core.first(cljs.core.next(arglist__3134));
var more = cljs.core.rest(cljs.core.next(arglist__3134));
return G__3131__delegate.call(this, x, y, more);
});
return G__3131;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3127.call(this,x);
case  2 :
return distinct_QMARK___3128.call(this,x,y);
default:
return distinct_QMARK___3129.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3129.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3135 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3135)))
{return r__3135;
} else
{if(cljs.core.truth_(r__3135))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3137 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3138 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3136 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3136,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3136);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3137.call(this,comp);
case  2 :
return sort__3138.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3140 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3141 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3140.call(this,keyfn,comp);
case  3 :
return sort_by__3141.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3143 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3144 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3143.call(this,f,val);
case  3 :
return reduce__3144.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3150 = (function (f,coll){
var temp__3695__auto____3146 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3146))
{var s__3147 = temp__3695__auto____3146;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3147),cljs.core.next.call(null,s__3147));
} else
{return f.call(null);
}
});
var seq_reduce__3151 = (function (f,val,coll){
var val__3148 = val;
var coll__3149 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3149))
{{
var G__3153 = f.call(null,val__3148,cljs.core.first.call(null,coll__3149));
var G__3154 = cljs.core.next.call(null,coll__3149);
val__3148 = G__3153;
coll__3149 = G__3154;
continue;
}
} else
{return val__3148;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3150.call(this,f,val);
case  3 :
return seq_reduce__3151.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3155 = null;
var G__3155__3156 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3155__3157 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3155 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3155__3156.call(this,coll,f);
case  3 :
return G__3155__3157.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3155;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3159 = (function (){
return 0;
});
var _PLUS___3160 = (function (x){
return x;
});
var _PLUS___3161 = (function (x,y){
return (x + y);
});
var _PLUS___3162 = (function() { 
var G__3164__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__3164 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3164__delegate.call(this, x, y, more);
};
G__3164.cljs$lang$maxFixedArity = 2;
G__3164.cljs$lang$applyTo = (function (arglist__3165){
var x = cljs.core.first(arglist__3165);
var y = cljs.core.first(cljs.core.next(arglist__3165));
var more = cljs.core.rest(cljs.core.next(arglist__3165));
return G__3164__delegate.call(this, x, y, more);
});
return G__3164;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3159.call(this);
case  1 :
return _PLUS___3160.call(this,x);
case  2 :
return _PLUS___3161.call(this,x,y);
default:
return _PLUS___3162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3162.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3166 = (function (x){
return (- x);
});
var ___3167 = (function (x,y){
return (x - y);
});
var ___3168 = (function() { 
var G__3170__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__3170 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3170__delegate.call(this, x, y, more);
};
G__3170.cljs$lang$maxFixedArity = 2;
G__3170.cljs$lang$applyTo = (function (arglist__3171){
var x = cljs.core.first(arglist__3171);
var y = cljs.core.first(cljs.core.next(arglist__3171));
var more = cljs.core.rest(cljs.core.next(arglist__3171));
return G__3170__delegate.call(this, x, y, more);
});
return G__3170;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3166.call(this,x);
case  2 :
return ___3167.call(this,x,y);
default:
return ___3168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3168.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3172 = (function (){
return 1;
});
var _STAR___3173 = (function (x){
return x;
});
var _STAR___3174 = (function (x,y){
return (x * y);
});
var _STAR___3175 = (function() { 
var G__3177__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__3177 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3177__delegate.call(this, x, y, more);
};
G__3177.cljs$lang$maxFixedArity = 2;
G__3177.cljs$lang$applyTo = (function (arglist__3178){
var x = cljs.core.first(arglist__3178);
var y = cljs.core.first(cljs.core.next(arglist__3178));
var more = cljs.core.rest(cljs.core.next(arglist__3178));
return G__3177__delegate.call(this, x, y, more);
});
return G__3177;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3172.call(this);
case  1 :
return _STAR___3173.call(this,x);
case  2 :
return _STAR___3174.call(this,x,y);
default:
return _STAR___3175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3175.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3179 = (function (x){
return (1 / x);
});
var _SLASH___3180 = (function (x,y){
return (x / y);
});
var _SLASH___3181 = (function() { 
var G__3183__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3183 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3183__delegate.call(this, x, y, more);
};
G__3183.cljs$lang$maxFixedArity = 2;
G__3183.cljs$lang$applyTo = (function (arglist__3184){
var x = cljs.core.first(arglist__3184);
var y = cljs.core.first(cljs.core.next(arglist__3184));
var more = cljs.core.rest(cljs.core.next(arglist__3184));
return G__3183__delegate.call(this, x, y, more);
});
return G__3183;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3179.call(this,x);
case  2 :
return _SLASH___3180.call(this,x,y);
default:
return _SLASH___3181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3181.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3185 = (function (x){
return true;
});
var _LT___3186 = (function (x,y){
return (x < y);
});
var _LT___3187 = (function() { 
var G__3189__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3190 = y;
var G__3191 = cljs.core.first.call(null,more);
var G__3192 = cljs.core.next.call(null,more);
x = G__3190;
y = G__3191;
more = G__3192;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3189 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3189__delegate.call(this, x, y, more);
};
G__3189.cljs$lang$maxFixedArity = 2;
G__3189.cljs$lang$applyTo = (function (arglist__3193){
var x = cljs.core.first(arglist__3193);
var y = cljs.core.first(cljs.core.next(arglist__3193));
var more = cljs.core.rest(cljs.core.next(arglist__3193));
return G__3189__delegate.call(this, x, y, more);
});
return G__3189;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3185.call(this,x);
case  2 :
return _LT___3186.call(this,x,y);
default:
return _LT___3187.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3187.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3194 = (function (x){
return true;
});
var _LT__EQ___3195 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3196 = (function() { 
var G__3198__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3199 = y;
var G__3200 = cljs.core.first.call(null,more);
var G__3201 = cljs.core.next.call(null,more);
x = G__3199;
y = G__3200;
more = G__3201;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3198 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3198__delegate.call(this, x, y, more);
};
G__3198.cljs$lang$maxFixedArity = 2;
G__3198.cljs$lang$applyTo = (function (arglist__3202){
var x = cljs.core.first(arglist__3202);
var y = cljs.core.first(cljs.core.next(arglist__3202));
var more = cljs.core.rest(cljs.core.next(arglist__3202));
return G__3198__delegate.call(this, x, y, more);
});
return G__3198;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3194.call(this,x);
case  2 :
return _LT__EQ___3195.call(this,x,y);
default:
return _LT__EQ___3196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3196.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3203 = (function (x){
return true;
});
var _GT___3204 = (function (x,y){
return (x > y);
});
var _GT___3205 = (function() { 
var G__3207__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3208 = y;
var G__3209 = cljs.core.first.call(null,more);
var G__3210 = cljs.core.next.call(null,more);
x = G__3208;
y = G__3209;
more = G__3210;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3207 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3207__delegate.call(this, x, y, more);
};
G__3207.cljs$lang$maxFixedArity = 2;
G__3207.cljs$lang$applyTo = (function (arglist__3211){
var x = cljs.core.first(arglist__3211);
var y = cljs.core.first(cljs.core.next(arglist__3211));
var more = cljs.core.rest(cljs.core.next(arglist__3211));
return G__3207__delegate.call(this, x, y, more);
});
return G__3207;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3203.call(this,x);
case  2 :
return _GT___3204.call(this,x,y);
default:
return _GT___3205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3205.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3212 = (function (x){
return true;
});
var _GT__EQ___3213 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3214 = (function() { 
var G__3216__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3217 = y;
var G__3218 = cljs.core.first.call(null,more);
var G__3219 = cljs.core.next.call(null,more);
x = G__3217;
y = G__3218;
more = G__3219;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3216 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3216__delegate.call(this, x, y, more);
};
G__3216.cljs$lang$maxFixedArity = 2;
G__3216.cljs$lang$applyTo = (function (arglist__3220){
var x = cljs.core.first(arglist__3220);
var y = cljs.core.first(cljs.core.next(arglist__3220));
var more = cljs.core.rest(cljs.core.next(arglist__3220));
return G__3216__delegate.call(this, x, y, more);
});
return G__3216;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3212.call(this,x);
case  2 :
return _GT__EQ___3213.call(this,x,y);
default:
return _GT__EQ___3214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3214.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3221 = (function (x){
return x;
});
var max__3222 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3223 = (function() { 
var G__3225__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__3225 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3225__delegate.call(this, x, y, more);
};
G__3225.cljs$lang$maxFixedArity = 2;
G__3225.cljs$lang$applyTo = (function (arglist__3226){
var x = cljs.core.first(arglist__3226);
var y = cljs.core.first(cljs.core.next(arglist__3226));
var more = cljs.core.rest(cljs.core.next(arglist__3226));
return G__3225__delegate.call(this, x, y, more);
});
return G__3225;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3221.call(this,x);
case  2 :
return max__3222.call(this,x,y);
default:
return max__3223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3223.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3227 = (function (x){
return x;
});
var min__3228 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3229 = (function() { 
var G__3231__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__3231 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3231__delegate.call(this, x, y, more);
};
G__3231.cljs$lang$maxFixedArity = 2;
G__3231.cljs$lang$applyTo = (function (arglist__3232){
var x = cljs.core.first(arglist__3232);
var y = cljs.core.first(cljs.core.next(arglist__3232));
var more = cljs.core.rest(cljs.core.next(arglist__3232));
return G__3231__delegate.call(this, x, y, more);
});
return G__3231;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3227.call(this,x);
case  2 :
return min__3228.call(this,x,y);
default:
return min__3229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3229.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3233 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__3233) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3234 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3234));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3235 = (function (){
return Math.random.call(null);
});
var rand__3236 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3235.call(this);
case  1 :
return rand__3236.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3238 = (function (x){
return true;
});
var _EQ__EQ___3239 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3240 = (function() { 
var G__3242__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3243 = y;
var G__3244 = cljs.core.first.call(null,more);
var G__3245 = cljs.core.next.call(null,more);
x = G__3243;
y = G__3244;
more = G__3245;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3242 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3242__delegate.call(this, x, y, more);
};
G__3242.cljs$lang$maxFixedArity = 2;
G__3242.cljs$lang$applyTo = (function (arglist__3246){
var x = cljs.core.first(arglist__3246);
var y = cljs.core.first(cljs.core.next(arglist__3246));
var more = cljs.core.rest(cljs.core.next(arglist__3246));
return G__3242__delegate.call(this, x, y, more);
});
return G__3242;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3238.call(this,x);
case  2 :
return _EQ__EQ___3239.call(this,x,y);
default:
return _EQ__EQ___3240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3240.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3247 = n;
var xs__3248 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3249 = xs__3248;

if(cljs.core.truth_(and__3546__auto____3249))
{return cljs.core.pos_QMARK_.call(null,n__3247);
} else
{return and__3546__auto____3249;
}
})()))
{{
var G__3250 = cljs.core.dec.call(null,n__3247);
var G__3251 = cljs.core.next.call(null,xs__3248);
n__3247 = G__3250;
xs__3248 = G__3251;
continue;
}
} else
{return xs__3248;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3256 = null;
var G__3256__3257 = (function (coll,n){
var temp__3695__auto____3252 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3252))
{var xs__3253 = temp__3695__auto____3252;

return cljs.core.first.call(null,xs__3253);
} else
{throw "Index out of bounds";
}
});
var G__3256__3258 = (function (coll,n,not_found){
var temp__3695__auto____3254 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3254))
{var xs__3255 = temp__3695__auto____3254;

return cljs.core.first.call(null,xs__3255);
} else
{return not_found;
}
});
G__3256 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3256__3257.call(this,coll,n);
case  3 :
return G__3256__3258.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3256;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3260 = (function (){
return "";
});
var str__3261 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__3262 = (function() { 
var G__3264__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3265 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3266 = cljs.core.next.call(null,more);
sb = G__3265;
more = G__3266;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3264 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3264__delegate.call(this, x, ys);
};
G__3264.cljs$lang$maxFixedArity = 1;
G__3264.cljs$lang$applyTo = (function (arglist__3267){
var x = cljs.core.first(arglist__3267);
var ys = cljs.core.rest(arglist__3267);
return G__3264__delegate.call(this, x, ys);
});
return G__3264;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3260.call(this);
case  1 :
return str__3261.call(this,x);
default:
return str__3262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3262.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3268 = (function (s,start){
return s.substring(start);
});
var subs__3269 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3268.call(this,s,start);
case  3 :
return subs__3269.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3271 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__3272 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3271.call(this,ns);
case  2 :
return symbol__3272.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3274 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__3275 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3274.call(this,ns);
case  2 :
return keyword__3275.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3277 = cljs.core.seq.call(null,x);
var ys__3278 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3277)))
{return cljs.core.nil_QMARK_.call(null,ys__3278);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3278)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3277),cljs.core.first.call(null,ys__3278))))
{{
var G__3279 = cljs.core.next.call(null,xs__3277);
var G__3280 = cljs.core.next.call(null,ys__3278);
xs__3277 = G__3279;
ys__3278 = G__3280;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3281_SHARP_,p2__3282_SHARP_){
return cljs.core.hash_combine.call(null,p1__3281_SHARP_,cljs.core.hash.call(null,p2__3282_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3283 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3284 = this;
return (new cljs.core.List(this__3284.meta,o,coll,cljs.core.inc.call(null,this__3284.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3285 = this;
return this__3285.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3286 = this;
return this__3286.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3287 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3288 = this;
return this__3288.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3289 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3290 = this;
return (new cljs.core.List(meta,this__3290.first,this__3290.rest,this__3290.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3291 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3292 = this;
return this__3292.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3293 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3294 = this;
return this__3294.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3295 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3296 = this;
return (new cljs.core.List(this__3296.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3297 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3298 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3299 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3300 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3301 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3302 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3303 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3304 = this;
return this__3304.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3305 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3306 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3307){
var items = cljs.core.seq( arglist__3307 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3308 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3309 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3310 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3311 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3311.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3312 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3313 = this;
return this__3313.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3314 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3314.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3314.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3315 = this;
return this__3315.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3316 = this;
return (new cljs.core.Cons(meta,this__3316.first,this__3316.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3317 = null;
var G__3317__3318 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3317__3319 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3317 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3317__3318.call(this,string,f);
case  3 :
return G__3317__3319.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3317;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3321 = null;
var G__3321__3322 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3321__3323 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3321 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3321__3322.call(this,string,k);
case  3 :
return G__3321__3323.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3321;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3325 = null;
var G__3325__3326 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3325__3327 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3325 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3325__3326.call(this,string,n);
case  3 :
return G__3325__3327.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3325;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__3329 = null;
var G__3329__3330 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__3329__3331 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__3329 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__3329__3330.call(this,_,coll);
case  3 :
return G__3329__3331.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3329;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3333 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3333;
} else
{lazy_seq.x = x__3333.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3334 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3335 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3336 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3337 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3337.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3338 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3339 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3340 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3341 = this;
return this__3341.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3342 = this;
return (new cljs.core.LazySeq(meta,this__3342.realized,this__3342.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3343 = cljs.core.array.call(null);

var s__3344 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3344)))
{ary__3343.push(cljs.core.first.call(null,s__3344));
{
var G__3345 = cljs.core.next.call(null,s__3344);
s__3344 = G__3345;
continue;
}
} else
{return ary__3343;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3346 = s;
var i__3347 = n;
var sum__3348 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3349 = cljs.core.pos_QMARK_.call(null,i__3347);

if(cljs.core.truth_(and__3546__auto____3349))
{return cljs.core.seq.call(null,s__3346);
} else
{return and__3546__auto____3349;
}
})()))
{{
var G__3350 = cljs.core.next.call(null,s__3346);
var G__3351 = cljs.core.dec.call(null,i__3347);
var G__3352 = cljs.core.inc.call(null,sum__3348);
s__3346 = G__3350;
i__3347 = G__3351;
sum__3348 = G__3352;
continue;
}
} else
{return sum__3348;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3356 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3357 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3358 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3353 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3353))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3353),concat.call(null,cljs.core.rest.call(null,s__3353),y));
} else
{return y;
}
})));
});
var concat__3359 = (function() { 
var G__3361__delegate = function (x,y,zs){
var cat__3355 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3354 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3354))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3354),cat.call(null,cljs.core.rest.call(null,xys__3354),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3355.call(null,concat.call(null,x,y),zs);
};
var G__3361 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3361__delegate.call(this, x, y, zs);
};
G__3361.cljs$lang$maxFixedArity = 2;
G__3361.cljs$lang$applyTo = (function (arglist__3362){
var x = cljs.core.first(arglist__3362);
var y = cljs.core.first(cljs.core.next(arglist__3362));
var zs = cljs.core.rest(cljs.core.next(arglist__3362));
return G__3361__delegate.call(this, x, y, zs);
});
return G__3361;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3356.call(this);
case  1 :
return concat__3357.call(this,x);
case  2 :
return concat__3358.call(this,x,y);
default:
return concat__3359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3359.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3363 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3364 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3365 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3366 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3367 = (function() { 
var G__3369__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3369 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3369__delegate.call(this, a, b, c, d, more);
};
G__3369.cljs$lang$maxFixedArity = 4;
G__3369.cljs$lang$applyTo = (function (arglist__3370){
var a = cljs.core.first(arglist__3370);
var b = cljs.core.first(cljs.core.next(arglist__3370));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3370)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3370))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3370))));
return G__3369__delegate.call(this, a, b, c, d, more);
});
return G__3369;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3363.call(this,a);
case  2 :
return list_STAR___3364.call(this,a,b);
case  3 :
return list_STAR___3365.call(this,a,b,c);
case  4 :
return list_STAR___3366.call(this,a,b,c,d);
default:
return list_STAR___3367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3367.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3380 = (function (f,args){
var fixed_arity__3371 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__3371)),fixed_arity__3371)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3381 = (function (f,x,args){
var arglist__3372 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3373 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__3372,fixed_arity__3373),fixed_arity__3373)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3372));
} else
{return f.cljs$lang$applyTo(arglist__3372);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3372));
}
});
var apply__3382 = (function (f,x,y,args){
var arglist__3374 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3375 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__3374,fixed_arity__3375),fixed_arity__3375)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3374));
} else
{return f.cljs$lang$applyTo(arglist__3374);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3374));
}
});
var apply__3383 = (function (f,x,y,z,args){
var arglist__3376 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3377 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__3376,fixed_arity__3377),fixed_arity__3377)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3376));
} else
{return f.cljs$lang$applyTo(arglist__3376);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3376));
}
});
var apply__3384 = (function() { 
var G__3386__delegate = function (f,a,b,c,d,args){
var arglist__3378 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3379 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__3378,fixed_arity__3379),fixed_arity__3379)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3378));
} else
{return f.cljs$lang$applyTo(arglist__3378);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3378));
}
};
var G__3386 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3386__delegate.call(this, f, a, b, c, d, args);
};
G__3386.cljs$lang$maxFixedArity = 5;
G__3386.cljs$lang$applyTo = (function (arglist__3387){
var f = cljs.core.first(arglist__3387);
var a = cljs.core.first(cljs.core.next(arglist__3387));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3387)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3387))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3387)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3387)))));
return G__3386__delegate.call(this, f, a, b, c, d, args);
});
return G__3386;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3380.call(this,f,a);
case  3 :
return apply__3381.call(this,f,a,b);
case  4 :
return apply__3382.call(this,f,a,b,c);
case  5 :
return apply__3383.call(this,f,a,b,c,d);
default:
return apply__3384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3384.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3388){
var obj = cljs.core.first(arglist__3388);
var f = cljs.core.first(cljs.core.next(arglist__3388));
var args = cljs.core.rest(cljs.core.next(arglist__3388));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3389 = (function (x){
return false;
});
var not_EQ___3390 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3391 = (function() { 
var G__3393__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3393__delegate.call(this, x, y, more);
};
G__3393.cljs$lang$maxFixedArity = 2;
G__3393.cljs$lang$applyTo = (function (arglist__3394){
var x = cljs.core.first(arglist__3394);
var y = cljs.core.first(cljs.core.next(arglist__3394));
var more = cljs.core.rest(cljs.core.next(arglist__3394));
return G__3393__delegate.call(this, x, y, more);
});
return G__3393;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3389.call(this,x);
case  2 :
return not_EQ___3390.call(this,x,y);
default:
return not_EQ___3391.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3391.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3395 = pred;
var G__3396 = cljs.core.next.call(null,coll);
pred = G__3395;
coll = G__3396;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3397 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3397))
{return or__3548__auto____3397;
} else
{{
var G__3398 = pred;
var G__3399 = cljs.core.next.call(null,coll);
pred = G__3398;
coll = G__3399;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3400 = null;
var G__3400__3401 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3400__3402 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3400__3403 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3400__3404 = (function() { 
var G__3406__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3406 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3406__delegate.call(this, x, y, zs);
};
G__3406.cljs$lang$maxFixedArity = 2;
G__3406.cljs$lang$applyTo = (function (arglist__3407){
var x = cljs.core.first(arglist__3407);
var y = cljs.core.first(cljs.core.next(arglist__3407));
var zs = cljs.core.rest(cljs.core.next(arglist__3407));
return G__3406__delegate.call(this, x, y, zs);
});
return G__3406;
})()
;
G__3400 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3400__3401.call(this);
case  1 :
return G__3400__3402.call(this,x);
case  2 :
return G__3400__3403.call(this,x,y);
default:
return G__3400__3404.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3400.cljs$lang$maxFixedArity = 2;
G__3400.cljs$lang$applyTo = G__3400__3404.cljs$lang$applyTo;
return G__3400;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3408__delegate = function (args){
return x;
};
var G__3408 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3408__delegate.call(this, args);
};
G__3408.cljs$lang$maxFixedArity = 0;
G__3408.cljs$lang$applyTo = (function (arglist__3409){
var args = cljs.core.seq( arglist__3409 );;
return G__3408__delegate.call(this, args);
});
return G__3408;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3413 = (function (){
return cljs.core.identity;
});
var comp__3414 = (function (f){
return f;
});
var comp__3415 = (function (f,g){
return (function() {
var G__3419 = null;
var G__3419__3420 = (function (){
return f.call(null,g.call(null));
});
var G__3419__3421 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3419__3422 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3419__3423 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3419__3424 = (function() { 
var G__3426__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3426 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3426__delegate.call(this, x, y, z, args);
};
G__3426.cljs$lang$maxFixedArity = 3;
G__3426.cljs$lang$applyTo = (function (arglist__3427){
var x = cljs.core.first(arglist__3427);
var y = cljs.core.first(cljs.core.next(arglist__3427));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3427)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3427)));
return G__3426__delegate.call(this, x, y, z, args);
});
return G__3426;
})()
;
G__3419 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3419__3420.call(this);
case  1 :
return G__3419__3421.call(this,x);
case  2 :
return G__3419__3422.call(this,x,y);
case  3 :
return G__3419__3423.call(this,x,y,z);
default:
return G__3419__3424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3419.cljs$lang$maxFixedArity = 3;
G__3419.cljs$lang$applyTo = G__3419__3424.cljs$lang$applyTo;
return G__3419;
})()
});
var comp__3416 = (function (f,g,h){
return (function() {
var G__3428 = null;
var G__3428__3429 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3428__3430 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3428__3431 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3428__3432 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3428__3433 = (function() { 
var G__3435__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3435 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3435__delegate.call(this, x, y, z, args);
};
G__3435.cljs$lang$maxFixedArity = 3;
G__3435.cljs$lang$applyTo = (function (arglist__3436){
var x = cljs.core.first(arglist__3436);
var y = cljs.core.first(cljs.core.next(arglist__3436));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3436)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3436)));
return G__3435__delegate.call(this, x, y, z, args);
});
return G__3435;
})()
;
G__3428 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3428__3429.call(this);
case  1 :
return G__3428__3430.call(this,x);
case  2 :
return G__3428__3431.call(this,x,y);
case  3 :
return G__3428__3432.call(this,x,y,z);
default:
return G__3428__3433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3428.cljs$lang$maxFixedArity = 3;
G__3428.cljs$lang$applyTo = G__3428__3433.cljs$lang$applyTo;
return G__3428;
})()
});
var comp__3417 = (function() { 
var G__3437__delegate = function (f1,f2,f3,fs){
var fs__3410 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3438__delegate = function (args){
var ret__3411 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3410),args);
var fs__3412 = cljs.core.next.call(null,fs__3410);

while(true){
if(cljs.core.truth_(fs__3412))
{{
var G__3439 = cljs.core.first.call(null,fs__3412).call(null,ret__3411);
var G__3440 = cljs.core.next.call(null,fs__3412);
ret__3411 = G__3439;
fs__3412 = G__3440;
continue;
}
} else
{return ret__3411;
}
break;
}
};
var G__3438 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3438__delegate.call(this, args);
};
G__3438.cljs$lang$maxFixedArity = 0;
G__3438.cljs$lang$applyTo = (function (arglist__3441){
var args = cljs.core.seq( arglist__3441 );;
return G__3438__delegate.call(this, args);
});
return G__3438;
})()
;
};
var G__3437 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3437__delegate.call(this, f1, f2, f3, fs);
};
G__3437.cljs$lang$maxFixedArity = 3;
G__3437.cljs$lang$applyTo = (function (arglist__3442){
var f1 = cljs.core.first(arglist__3442);
var f2 = cljs.core.first(cljs.core.next(arglist__3442));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3442)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3442)));
return G__3437__delegate.call(this, f1, f2, f3, fs);
});
return G__3437;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3413.call(this);
case  1 :
return comp__3414.call(this,f1);
case  2 :
return comp__3415.call(this,f1,f2);
case  3 :
return comp__3416.call(this,f1,f2,f3);
default:
return comp__3417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3417.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3443 = (function (f,arg1){
return (function() { 
var G__3448__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3448 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3448__delegate.call(this, args);
};
G__3448.cljs$lang$maxFixedArity = 0;
G__3448.cljs$lang$applyTo = (function (arglist__3449){
var args = cljs.core.seq( arglist__3449 );;
return G__3448__delegate.call(this, args);
});
return G__3448;
})()
;
});
var partial__3444 = (function (f,arg1,arg2){
return (function() { 
var G__3450__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3450 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3450__delegate.call(this, args);
};
G__3450.cljs$lang$maxFixedArity = 0;
G__3450.cljs$lang$applyTo = (function (arglist__3451){
var args = cljs.core.seq( arglist__3451 );;
return G__3450__delegate.call(this, args);
});
return G__3450;
})()
;
});
var partial__3445 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3452__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3452 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3452__delegate.call(this, args);
};
G__3452.cljs$lang$maxFixedArity = 0;
G__3452.cljs$lang$applyTo = (function (arglist__3453){
var args = cljs.core.seq( arglist__3453 );;
return G__3452__delegate.call(this, args);
});
return G__3452;
})()
;
});
var partial__3446 = (function() { 
var G__3454__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3455__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3455 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3455__delegate.call(this, args);
};
G__3455.cljs$lang$maxFixedArity = 0;
G__3455.cljs$lang$applyTo = (function (arglist__3456){
var args = cljs.core.seq( arglist__3456 );;
return G__3455__delegate.call(this, args);
});
return G__3455;
})()
;
};
var G__3454 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3454__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3454.cljs$lang$maxFixedArity = 4;
G__3454.cljs$lang$applyTo = (function (arglist__3457){
var f = cljs.core.first(arglist__3457);
var arg1 = cljs.core.first(cljs.core.next(arglist__3457));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3457)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3457))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3457))));
return G__3454__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3454;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3443.call(this,f,arg1);
case  3 :
return partial__3444.call(this,f,arg1,arg2);
case  4 :
return partial__3445.call(this,f,arg1,arg2,arg3);
default:
return partial__3446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3446.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3458 = (function (f,x){
return (function() {
var G__3462 = null;
var G__3462__3463 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3462__3464 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3462__3465 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3462__3466 = (function() { 
var G__3468__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3468 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3468__delegate.call(this, a, b, c, ds);
};
G__3468.cljs$lang$maxFixedArity = 3;
G__3468.cljs$lang$applyTo = (function (arglist__3469){
var a = cljs.core.first(arglist__3469);
var b = cljs.core.first(cljs.core.next(arglist__3469));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3469)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3469)));
return G__3468__delegate.call(this, a, b, c, ds);
});
return G__3468;
})()
;
G__3462 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3462__3463.call(this,a);
case  2 :
return G__3462__3464.call(this,a,b);
case  3 :
return G__3462__3465.call(this,a,b,c);
default:
return G__3462__3466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3462.cljs$lang$maxFixedArity = 3;
G__3462.cljs$lang$applyTo = G__3462__3466.cljs$lang$applyTo;
return G__3462;
})()
});
var fnil__3459 = (function (f,x,y){
return (function() {
var G__3470 = null;
var G__3470__3471 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3470__3472 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3470__3473 = (function() { 
var G__3475__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3475 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3475__delegate.call(this, a, b, c, ds);
};
G__3475.cljs$lang$maxFixedArity = 3;
G__3475.cljs$lang$applyTo = (function (arglist__3476){
var a = cljs.core.first(arglist__3476);
var b = cljs.core.first(cljs.core.next(arglist__3476));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3476)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3476)));
return G__3475__delegate.call(this, a, b, c, ds);
});
return G__3475;
})()
;
G__3470 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3470__3471.call(this,a,b);
case  3 :
return G__3470__3472.call(this,a,b,c);
default:
return G__3470__3473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3470.cljs$lang$maxFixedArity = 3;
G__3470.cljs$lang$applyTo = G__3470__3473.cljs$lang$applyTo;
return G__3470;
})()
});
var fnil__3460 = (function (f,x,y,z){
return (function() {
var G__3477 = null;
var G__3477__3478 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3477__3479 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3477__3480 = (function() { 
var G__3482__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3482 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3482__delegate.call(this, a, b, c, ds);
};
G__3482.cljs$lang$maxFixedArity = 3;
G__3482.cljs$lang$applyTo = (function (arglist__3483){
var a = cljs.core.first(arglist__3483);
var b = cljs.core.first(cljs.core.next(arglist__3483));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3483)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3483)));
return G__3482__delegate.call(this, a, b, c, ds);
});
return G__3482;
})()
;
G__3477 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3477__3478.call(this,a,b);
case  3 :
return G__3477__3479.call(this,a,b,c);
default:
return G__3477__3480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3477.cljs$lang$maxFixedArity = 3;
G__3477.cljs$lang$applyTo = G__3477__3480.cljs$lang$applyTo;
return G__3477;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3458.call(this,f,x);
case  3 :
return fnil__3459.call(this,f,x,y);
case  4 :
return fnil__3460.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3486 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3484 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3484))
{var s__3485 = temp__3698__auto____3484;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3485)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__3485)));
} else
{return null;
}
})));
});

return mapi__3486.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3487 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3487))
{var s__3488 = temp__3698__auto____3487;

var x__3489 = f.call(null,cljs.core.first.call(null,s__3488));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3489)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3488));
} else
{return cljs.core.cons.call(null,x__3489,keep.call(null,f,cljs.core.rest.call(null,s__3488)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3499 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3496 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3496))
{var s__3497 = temp__3698__auto____3496;

var x__3498 = f.call(null,idx,cljs.core.first.call(null,s__3497));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3498)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__3497));
} else
{return cljs.core.cons.call(null,x__3498,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__3497)));
}
} else
{return null;
}
})));
});

return keepi__3499.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3544 = (function (p){
return (function() {
var ep1 = null;
var ep1__3549 = (function (){
return true;
});
var ep1__3550 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3551 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3506 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3506))
{return p.call(null,y);
} else
{return and__3546__auto____3506;
}
})());
});
var ep1__3552 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3507 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3507))
{var and__3546__auto____3508 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3508))
{return p.call(null,z);
} else
{return and__3546__auto____3508;
}
} else
{return and__3546__auto____3507;
}
})());
});
var ep1__3553 = (function() { 
var G__3555__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3509 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3509))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3509;
}
})());
};
var G__3555 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3555__delegate.call(this, x, y, z, args);
};
G__3555.cljs$lang$maxFixedArity = 3;
G__3555.cljs$lang$applyTo = (function (arglist__3556){
var x = cljs.core.first(arglist__3556);
var y = cljs.core.first(cljs.core.next(arglist__3556));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3556)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3556)));
return G__3555__delegate.call(this, x, y, z, args);
});
return G__3555;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3549.call(this);
case  1 :
return ep1__3550.call(this,x);
case  2 :
return ep1__3551.call(this,x,y);
case  3 :
return ep1__3552.call(this,x,y,z);
default:
return ep1__3553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3553.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3545 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3557 = (function (){
return true;
});
var ep2__3558 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3510 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3510))
{return p2.call(null,x);
} else
{return and__3546__auto____3510;
}
})());
});
var ep2__3559 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3511 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3511))
{var and__3546__auto____3512 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3512))
{var and__3546__auto____3513 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3513))
{return p2.call(null,y);
} else
{return and__3546__auto____3513;
}
} else
{return and__3546__auto____3512;
}
} else
{return and__3546__auto____3511;
}
})());
});
var ep2__3560 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3514 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3514))
{var and__3546__auto____3515 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3515))
{var and__3546__auto____3516 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3516))
{var and__3546__auto____3517 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3517))
{var and__3546__auto____3518 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3518))
{return p2.call(null,z);
} else
{return and__3546__auto____3518;
}
} else
{return and__3546__auto____3517;
}
} else
{return and__3546__auto____3516;
}
} else
{return and__3546__auto____3515;
}
} else
{return and__3546__auto____3514;
}
})());
});
var ep2__3561 = (function() { 
var G__3563__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3519 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3519))
{return cljs.core.every_QMARK_.call(null,(function (p1__3490_SHARP_){
var and__3546__auto____3520 = p1.call(null,p1__3490_SHARP_);

if(cljs.core.truth_(and__3546__auto____3520))
{return p2.call(null,p1__3490_SHARP_);
} else
{return and__3546__auto____3520;
}
}),args);
} else
{return and__3546__auto____3519;
}
})());
};
var G__3563 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3563__delegate.call(this, x, y, z, args);
};
G__3563.cljs$lang$maxFixedArity = 3;
G__3563.cljs$lang$applyTo = (function (arglist__3564){
var x = cljs.core.first(arglist__3564);
var y = cljs.core.first(cljs.core.next(arglist__3564));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3564)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3564)));
return G__3563__delegate.call(this, x, y, z, args);
});
return G__3563;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3557.call(this);
case  1 :
return ep2__3558.call(this,x);
case  2 :
return ep2__3559.call(this,x,y);
case  3 :
return ep2__3560.call(this,x,y,z);
default:
return ep2__3561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3561.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3546 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3565 = (function (){
return true;
});
var ep3__3566 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3521 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3521))
{var and__3546__auto____3522 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3522))
{return p3.call(null,x);
} else
{return and__3546__auto____3522;
}
} else
{return and__3546__auto____3521;
}
})());
});
var ep3__3567 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3523 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3523))
{var and__3546__auto____3524 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3524))
{var and__3546__auto____3525 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3525))
{var and__3546__auto____3526 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3526))
{var and__3546__auto____3527 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3527))
{return p3.call(null,y);
} else
{return and__3546__auto____3527;
}
} else
{return and__3546__auto____3526;
}
} else
{return and__3546__auto____3525;
}
} else
{return and__3546__auto____3524;
}
} else
{return and__3546__auto____3523;
}
})());
});
var ep3__3568 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3528 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3528))
{var and__3546__auto____3529 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3529))
{var and__3546__auto____3530 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3530))
{var and__3546__auto____3531 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3531))
{var and__3546__auto____3532 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3532))
{var and__3546__auto____3533 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3533))
{var and__3546__auto____3534 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3534))
{var and__3546__auto____3535 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3535))
{return p3.call(null,z);
} else
{return and__3546__auto____3535;
}
} else
{return and__3546__auto____3534;
}
} else
{return and__3546__auto____3533;
}
} else
{return and__3546__auto____3532;
}
} else
{return and__3546__auto____3531;
}
} else
{return and__3546__auto____3530;
}
} else
{return and__3546__auto____3529;
}
} else
{return and__3546__auto____3528;
}
})());
});
var ep3__3569 = (function() { 
var G__3571__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3536 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3536))
{return cljs.core.every_QMARK_.call(null,(function (p1__3491_SHARP_){
var and__3546__auto____3537 = p1.call(null,p1__3491_SHARP_);

if(cljs.core.truth_(and__3546__auto____3537))
{var and__3546__auto____3538 = p2.call(null,p1__3491_SHARP_);

if(cljs.core.truth_(and__3546__auto____3538))
{return p3.call(null,p1__3491_SHARP_);
} else
{return and__3546__auto____3538;
}
} else
{return and__3546__auto____3537;
}
}),args);
} else
{return and__3546__auto____3536;
}
})());
};
var G__3571 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3571__delegate.call(this, x, y, z, args);
};
G__3571.cljs$lang$maxFixedArity = 3;
G__3571.cljs$lang$applyTo = (function (arglist__3572){
var x = cljs.core.first(arglist__3572);
var y = cljs.core.first(cljs.core.next(arglist__3572));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3572)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3572)));
return G__3571__delegate.call(this, x, y, z, args);
});
return G__3571;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3565.call(this);
case  1 :
return ep3__3566.call(this,x);
case  2 :
return ep3__3567.call(this,x,y);
case  3 :
return ep3__3568.call(this,x,y,z);
default:
return ep3__3569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3569.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3547 = (function() { 
var G__3573__delegate = function (p1,p2,p3,ps){
var ps__3539 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3574 = (function (){
return true;
});
var epn__3575 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3492_SHARP_){
return p1__3492_SHARP_.call(null,x);
}),ps__3539);
});
var epn__3576 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3493_SHARP_){
var and__3546__auto____3540 = p1__3493_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3540))
{return p1__3493_SHARP_.call(null,y);
} else
{return and__3546__auto____3540;
}
}),ps__3539);
});
var epn__3577 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3494_SHARP_){
var and__3546__auto____3541 = p1__3494_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3541))
{var and__3546__auto____3542 = p1__3494_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3542))
{return p1__3494_SHARP_.call(null,z);
} else
{return and__3546__auto____3542;
}
} else
{return and__3546__auto____3541;
}
}),ps__3539);
});
var epn__3578 = (function() { 
var G__3580__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3543 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3543))
{return cljs.core.every_QMARK_.call(null,(function (p1__3495_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3495_SHARP_,args);
}),ps__3539);
} else
{return and__3546__auto____3543;
}
})());
};
var G__3580 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3580__delegate.call(this, x, y, z, args);
};
G__3580.cljs$lang$maxFixedArity = 3;
G__3580.cljs$lang$applyTo = (function (arglist__3581){
var x = cljs.core.first(arglist__3581);
var y = cljs.core.first(cljs.core.next(arglist__3581));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3581)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3581)));
return G__3580__delegate.call(this, x, y, z, args);
});
return G__3580;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3574.call(this);
case  1 :
return epn__3575.call(this,x);
case  2 :
return epn__3576.call(this,x,y);
case  3 :
return epn__3577.call(this,x,y,z);
default:
return epn__3578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3578.cljs$lang$applyTo;
return epn;
})()
};
var G__3573 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3573__delegate.call(this, p1, p2, p3, ps);
};
G__3573.cljs$lang$maxFixedArity = 3;
G__3573.cljs$lang$applyTo = (function (arglist__3582){
var p1 = cljs.core.first(arglist__3582);
var p2 = cljs.core.first(cljs.core.next(arglist__3582));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3582)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3582)));
return G__3573__delegate.call(this, p1, p2, p3, ps);
});
return G__3573;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3544.call(this,p1);
case  2 :
return every_pred__3545.call(this,p1,p2);
case  3 :
return every_pred__3546.call(this,p1,p2,p3);
default:
return every_pred__3547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3547.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3622 = (function (p){
return (function() {
var sp1 = null;
var sp1__3627 = (function (){
return null;
});
var sp1__3628 = (function (x){
return p.call(null,x);
});
var sp1__3629 = (function (x,y){
var or__3548__auto____3584 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3584))
{return or__3548__auto____3584;
} else
{return p.call(null,y);
}
});
var sp1__3630 = (function (x,y,z){
var or__3548__auto____3585 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3585))
{return or__3548__auto____3585;
} else
{var or__3548__auto____3586 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3586))
{return or__3548__auto____3586;
} else
{return p.call(null,z);
}
}
});
var sp1__3631 = (function() { 
var G__3633__delegate = function (x,y,z,args){
var or__3548__auto____3587 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3587))
{return or__3548__auto____3587;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3633 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3633__delegate.call(this, x, y, z, args);
};
G__3633.cljs$lang$maxFixedArity = 3;
G__3633.cljs$lang$applyTo = (function (arglist__3634){
var x = cljs.core.first(arglist__3634);
var y = cljs.core.first(cljs.core.next(arglist__3634));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3634)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3634)));
return G__3633__delegate.call(this, x, y, z, args);
});
return G__3633;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3627.call(this);
case  1 :
return sp1__3628.call(this,x);
case  2 :
return sp1__3629.call(this,x,y);
case  3 :
return sp1__3630.call(this,x,y,z);
default:
return sp1__3631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3631.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3623 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3635 = (function (){
return null;
});
var sp2__3636 = (function (x){
var or__3548__auto____3588 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3588))
{return or__3548__auto____3588;
} else
{return p2.call(null,x);
}
});
var sp2__3637 = (function (x,y){
var or__3548__auto____3589 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3589))
{return or__3548__auto____3589;
} else
{var or__3548__auto____3590 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3590))
{return or__3548__auto____3590;
} else
{var or__3548__auto____3591 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3591))
{return or__3548__auto____3591;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3638 = (function (x,y,z){
var or__3548__auto____3592 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3592))
{return or__3548__auto____3592;
} else
{var or__3548__auto____3593 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3593))
{return or__3548__auto____3593;
} else
{var or__3548__auto____3594 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3594))
{return or__3548__auto____3594;
} else
{var or__3548__auto____3595 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3595))
{return or__3548__auto____3595;
} else
{var or__3548__auto____3596 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3596))
{return or__3548__auto____3596;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3639 = (function() { 
var G__3641__delegate = function (x,y,z,args){
var or__3548__auto____3597 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3597))
{return or__3548__auto____3597;
} else
{return cljs.core.some.call(null,(function (p1__3500_SHARP_){
var or__3548__auto____3598 = p1.call(null,p1__3500_SHARP_);

if(cljs.core.truth_(or__3548__auto____3598))
{return or__3548__auto____3598;
} else
{return p2.call(null,p1__3500_SHARP_);
}
}),args);
}
};
var G__3641 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3641__delegate.call(this, x, y, z, args);
};
G__3641.cljs$lang$maxFixedArity = 3;
G__3641.cljs$lang$applyTo = (function (arglist__3642){
var x = cljs.core.first(arglist__3642);
var y = cljs.core.first(cljs.core.next(arglist__3642));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3642)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3642)));
return G__3641__delegate.call(this, x, y, z, args);
});
return G__3641;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3635.call(this);
case  1 :
return sp2__3636.call(this,x);
case  2 :
return sp2__3637.call(this,x,y);
case  3 :
return sp2__3638.call(this,x,y,z);
default:
return sp2__3639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3639.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3624 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3643 = (function (){
return null;
});
var sp3__3644 = (function (x){
var or__3548__auto____3599 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3599))
{return or__3548__auto____3599;
} else
{var or__3548__auto____3600 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3600))
{return or__3548__auto____3600;
} else
{return p3.call(null,x);
}
}
});
var sp3__3645 = (function (x,y){
var or__3548__auto____3601 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3601))
{return or__3548__auto____3601;
} else
{var or__3548__auto____3602 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3602))
{return or__3548__auto____3602;
} else
{var or__3548__auto____3603 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3603))
{return or__3548__auto____3603;
} else
{var or__3548__auto____3604 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3604))
{return or__3548__auto____3604;
} else
{var or__3548__auto____3605 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3605))
{return or__3548__auto____3605;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3646 = (function (x,y,z){
var or__3548__auto____3606 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3606))
{return or__3548__auto____3606;
} else
{var or__3548__auto____3607 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3607))
{return or__3548__auto____3607;
} else
{var or__3548__auto____3608 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3608))
{return or__3548__auto____3608;
} else
{var or__3548__auto____3609 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3609))
{return or__3548__auto____3609;
} else
{var or__3548__auto____3610 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3610))
{return or__3548__auto____3610;
} else
{var or__3548__auto____3611 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3611))
{return or__3548__auto____3611;
} else
{var or__3548__auto____3612 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3612))
{return or__3548__auto____3612;
} else
{var or__3548__auto____3613 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3613))
{return or__3548__auto____3613;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3647 = (function() { 
var G__3649__delegate = function (x,y,z,args){
var or__3548__auto____3614 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3614))
{return or__3548__auto____3614;
} else
{return cljs.core.some.call(null,(function (p1__3501_SHARP_){
var or__3548__auto____3615 = p1.call(null,p1__3501_SHARP_);

if(cljs.core.truth_(or__3548__auto____3615))
{return or__3548__auto____3615;
} else
{var or__3548__auto____3616 = p2.call(null,p1__3501_SHARP_);

if(cljs.core.truth_(or__3548__auto____3616))
{return or__3548__auto____3616;
} else
{return p3.call(null,p1__3501_SHARP_);
}
}
}),args);
}
};
var G__3649 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3649__delegate.call(this, x, y, z, args);
};
G__3649.cljs$lang$maxFixedArity = 3;
G__3649.cljs$lang$applyTo = (function (arglist__3650){
var x = cljs.core.first(arglist__3650);
var y = cljs.core.first(cljs.core.next(arglist__3650));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3650)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3650)));
return G__3649__delegate.call(this, x, y, z, args);
});
return G__3649;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3643.call(this);
case  1 :
return sp3__3644.call(this,x);
case  2 :
return sp3__3645.call(this,x,y);
case  3 :
return sp3__3646.call(this,x,y,z);
default:
return sp3__3647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3647.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3625 = (function() { 
var G__3651__delegate = function (p1,p2,p3,ps){
var ps__3617 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3652 = (function (){
return null;
});
var spn__3653 = (function (x){
return cljs.core.some.call(null,(function (p1__3502_SHARP_){
return p1__3502_SHARP_.call(null,x);
}),ps__3617);
});
var spn__3654 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3503_SHARP_){
var or__3548__auto____3618 = p1__3503_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3618))
{return or__3548__auto____3618;
} else
{return p1__3503_SHARP_.call(null,y);
}
}),ps__3617);
});
var spn__3655 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3504_SHARP_){
var or__3548__auto____3619 = p1__3504_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3619))
{return or__3548__auto____3619;
} else
{var or__3548__auto____3620 = p1__3504_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3620))
{return or__3548__auto____3620;
} else
{return p1__3504_SHARP_.call(null,z);
}
}
}),ps__3617);
});
var spn__3656 = (function() { 
var G__3658__delegate = function (x,y,z,args){
var or__3548__auto____3621 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3621))
{return or__3548__auto____3621;
} else
{return cljs.core.some.call(null,(function (p1__3505_SHARP_){
return cljs.core.some.call(null,p1__3505_SHARP_,args);
}),ps__3617);
}
};
var G__3658 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3658__delegate.call(this, x, y, z, args);
};
G__3658.cljs$lang$maxFixedArity = 3;
G__3658.cljs$lang$applyTo = (function (arglist__3659){
var x = cljs.core.first(arglist__3659);
var y = cljs.core.first(cljs.core.next(arglist__3659));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3659)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3659)));
return G__3658__delegate.call(this, x, y, z, args);
});
return G__3658;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3652.call(this);
case  1 :
return spn__3653.call(this,x);
case  2 :
return spn__3654.call(this,x,y);
case  3 :
return spn__3655.call(this,x,y,z);
default:
return spn__3656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3656.cljs$lang$applyTo;
return spn;
})()
};
var G__3651 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3651__delegate.call(this, p1, p2, p3, ps);
};
G__3651.cljs$lang$maxFixedArity = 3;
G__3651.cljs$lang$applyTo = (function (arglist__3660){
var p1 = cljs.core.first(arglist__3660);
var p2 = cljs.core.first(cljs.core.next(arglist__3660));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3660)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3660)));
return G__3651__delegate.call(this, p1, p2, p3, ps);
});
return G__3651;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3622.call(this,p1);
case  2 :
return some_fn__3623.call(this,p1,p2);
case  3 :
return some_fn__3624.call(this,p1,p2,p3);
default:
return some_fn__3625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3625.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3673 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3661))
{var s__3662 = temp__3698__auto____3661;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3662)),map.call(null,f,cljs.core.rest.call(null,s__3662)));
} else
{return null;
}
})));
});
var map__3674 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3663 = cljs.core.seq.call(null,c1);
var s2__3664 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3665 = s1__3663;

if(cljs.core.truth_(and__3546__auto____3665))
{return s2__3664;
} else
{return and__3546__auto____3665;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3663),cljs.core.first.call(null,s2__3664)),map.call(null,f,cljs.core.rest.call(null,s1__3663),cljs.core.rest.call(null,s2__3664)));
} else
{return null;
}
})));
});
var map__3675 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3666 = cljs.core.seq.call(null,c1);
var s2__3667 = cljs.core.seq.call(null,c2);
var s3__3668 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3669 = s1__3666;

if(cljs.core.truth_(and__3546__auto____3669))
{var and__3546__auto____3670 = s2__3667;

if(cljs.core.truth_(and__3546__auto____3670))
{return s3__3668;
} else
{return and__3546__auto____3670;
}
} else
{return and__3546__auto____3669;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3666),cljs.core.first.call(null,s2__3667),cljs.core.first.call(null,s3__3668)),map.call(null,f,cljs.core.rest.call(null,s1__3666),cljs.core.rest.call(null,s2__3667),cljs.core.rest.call(null,s3__3668)));
} else
{return null;
}
})));
});
var map__3676 = (function() { 
var G__3678__delegate = function (f,c1,c2,c3,colls){
var step__3672 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3671 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3671)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3671),step.call(null,map.call(null,cljs.core.rest,ss__3671)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3583_SHARP_){
return cljs.core.apply.call(null,f,p1__3583_SHARP_);
}),step__3672.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3678 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3678__delegate.call(this, f, c1, c2, c3, colls);
};
G__3678.cljs$lang$maxFixedArity = 4;
G__3678.cljs$lang$applyTo = (function (arglist__3679){
var f = cljs.core.first(arglist__3679);
var c1 = cljs.core.first(cljs.core.next(arglist__3679));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3679)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3679))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3679))));
return G__3678__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3678;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3673.call(this,f,c1);
case  3 :
return map__3674.call(this,f,c1,c2);
case  4 :
return map__3675.call(this,f,c1,c2,c3);
default:
return map__3676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3676.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3698__auto____3680 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3680))
{var s__3681 = temp__3698__auto____3680;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3681),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__3681)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3684 = (function (n,coll){
while(true){
var s__3682 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3683 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3683))
{return s__3682;
} else
{return and__3546__auto____3683;
}
})()))
{{
var G__3685 = cljs.core.dec.call(null,n);
var G__3686 = cljs.core.rest.call(null,s__3682);
n = G__3685;
coll = G__3686;
continue;
}
} else
{return s__3682;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3684.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3687 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3688 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3687.call(this,n);
case  2 :
return drop_last__3688.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3690 = cljs.core.seq.call(null,coll);
var lead__3691 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3691))
{{
var G__3692 = cljs.core.next.call(null,s__3690);
var G__3693 = cljs.core.next.call(null,lead__3691);
s__3690 = G__3692;
lead__3691 = G__3693;
continue;
}
} else
{return s__3690;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3696 = (function (pred,coll){
while(true){
var s__3694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3695 = s__3694;

if(cljs.core.truth_(and__3546__auto____3695))
{return pred.call(null,cljs.core.first.call(null,s__3694));
} else
{return and__3546__auto____3695;
}
})()))
{{
var G__3697 = pred;
var G__3698 = cljs.core.rest.call(null,s__3694);
pred = G__3697;
coll = G__3698;
continue;
}
} else
{return s__3694;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3696.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3699 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3699))
{var s__3700 = temp__3698__auto____3699;

return cljs.core.concat.call(null,s__3700,cycle.call(null,s__3700));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3701 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3702 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3701.call(this,n);
case  2 :
return repeat__3702.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3704 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3705 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3704.call(this,n);
case  2 :
return repeatedly__3705.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3711 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3707 = cljs.core.seq.call(null,c1);
var s2__3708 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3709 = s1__3707;

if(cljs.core.truth_(and__3546__auto____3709))
{return s2__3708;
} else
{return and__3546__auto____3709;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3707),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3708),interleave.call(null,cljs.core.rest.call(null,s1__3707),cljs.core.rest.call(null,s2__3708))));
} else
{return null;
}
})));
});
var interleave__3712 = (function() { 
var G__3714__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3710 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3710)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3710),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3710)));
} else
{return null;
}
})));
};
var G__3714 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3714__delegate.call(this, c1, c2, colls);
};
G__3714.cljs$lang$maxFixedArity = 2;
G__3714.cljs$lang$applyTo = (function (arglist__3715){
var c1 = cljs.core.first(arglist__3715);
var c2 = cljs.core.first(cljs.core.next(arglist__3715));
var colls = cljs.core.rest(cljs.core.next(arglist__3715));
return G__3714__delegate.call(this, c1, c2, colls);
});
return G__3714;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3711.call(this,c1,c2);
default:
return interleave__3712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3712.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3718 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3716 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3716))
{var coll__3717 = temp__3695__auto____3716;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3717),cat.call(null,cljs.core.rest.call(null,coll__3717),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3718.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3719 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3720 = (function() { 
var G__3722__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3722 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3722__delegate.call(this, f, coll, colls);
};
G__3722.cljs$lang$maxFixedArity = 2;
G__3722.cljs$lang$applyTo = (function (arglist__3723){
var f = cljs.core.first(arglist__3723);
var coll = cljs.core.first(cljs.core.next(arglist__3723));
var colls = cljs.core.rest(cljs.core.next(arglist__3723));
return G__3722__delegate.call(this, f, coll, colls);
});
return G__3722;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3719.call(this,f,coll);
default:
return mapcat__3720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3720.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3724 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3724))
{var s__3725 = temp__3698__auto____3724;

var f__3726 = cljs.core.first.call(null,s__3725);
var r__3727 = cljs.core.rest.call(null,s__3725);

if(cljs.core.truth_(pred.call(null,f__3726)))
{return cljs.core.cons.call(null,f__3726,filter.call(null,pred,r__3727));
} else
{return filter.call(null,pred,r__3727);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3729 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3729.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3728_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3728_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3736 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3737 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3730 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3730))
{var s__3731 = temp__3698__auto____3730;

var p__3732 = cljs.core.take.call(null,n,s__3731);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3732))))
{return cljs.core.cons.call(null,p__3732,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3731)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3738 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3733 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3733))
{var s__3734 = temp__3698__auto____3733;

var p__3735 = cljs.core.take.call(null,n,s__3734);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3735))))
{return cljs.core.cons.call(null,p__3735,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3734)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3735,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3736.call(this,n,step);
case  3 :
return partition__3737.call(this,n,step,pad);
case  4 :
return partition__3738.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3744 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3745 = (function (m,ks,not_found){
var sentinel__3740 = cljs.core.lookup_sentinel;
var m__3741 = m;
var ks__3742 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3742))
{var m__3743 = cljs.core.get.call(null,m__3741,cljs.core.first.call(null,ks__3742),sentinel__3740);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3740,m__3743)))
{return not_found;
} else
{{
var G__3747 = sentinel__3740;
var G__3748 = m__3743;
var G__3749 = cljs.core.next.call(null,ks__3742);
sentinel__3740 = G__3747;
m__3741 = G__3748;
ks__3742 = G__3749;
continue;
}
}
} else
{return m__3741;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3744.call(this,m,ks);
case  3 :
return get_in__3745.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3750,v){
var vec__3751__3752 = p__3750;
var k__3753 = cljs.core.nth.call(null,vec__3751__3752,0,null);
var ks__3754 = cljs.core.nthnext.call(null,vec__3751__3752,1);

if(cljs.core.truth_(ks__3754))
{return cljs.core.assoc.call(null,m,k__3753,assoc_in.call(null,cljs.core.get.call(null,m,k__3753),ks__3754,v));
} else
{return cljs.core.assoc.call(null,m,k__3753,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3755,f,args){
var vec__3756__3757 = p__3755;
var k__3758 = cljs.core.nth.call(null,vec__3756__3757,0,null);
var ks__3759 = cljs.core.nthnext.call(null,vec__3756__3757,1);

if(cljs.core.truth_(ks__3759))
{return cljs.core.assoc.call(null,m,k__3758,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3758),ks__3759,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3758,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3758),args));
}
};
var update_in = function (m,p__3755,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3755, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3760){
var m = cljs.core.first(arglist__3760);
var p__3755 = cljs.core.first(cljs.core.next(arglist__3760));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3760)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3760)));
return update_in__delegate.call(this, m, p__3755, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3761 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3762 = this;
var new_array__3763 = cljs.core.aclone.call(null,this__3762.array);

new_array__3763.push(o);
return (new cljs.core.Vector(this__3762.meta,new_array__3763));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3764 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3764.array.length,0)))
{var vector_seq__3765 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__3764.array.length)))
{return cljs.core.cons.call(null,(this__3764.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__3765.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3766 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3767 = this;
var count__3768 = this__3767.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__3768,0)))
{return (this__3767.array[cljs.core.dec.call(null,count__3768)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3769 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3769.array.length,0)))
{var new_array__3770 = cljs.core.aclone.call(null,this__3769.array);

new_array__3770.pop();
return (new cljs.core.Vector(this__3769.meta,new_array__3770));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3771 = this;
return (new cljs.core.Vector(meta,this__3771.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3772 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3772.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3786 = null;
var G__3786__3787 = (function (coll,n){
var this__3773 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3774 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3546__auto____3774))
{return cljs.core._LT_.call(null,n,this__3773.array.length);
} else
{return and__3546__auto____3774;
}
})()))
{return (this__3773.array[n]);
} else
{return null;
}
});
var G__3786__3788 = (function (coll,n,not_found){
var this__3775 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3776 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3546__auto____3776))
{return cljs.core._LT_.call(null,n,this__3775.array.length);
} else
{return and__3546__auto____3776;
}
})()))
{return (this__3775.array[n]);
} else
{return not_found;
}
});
G__3786 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3786__3787.call(this,coll,n);
case  3 :
return G__3786__3788.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3786;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3777 = this;
return this__3777.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3790 = null;
var G__3790__3791 = (function (v,f){
var this__3778 = this;
return cljs.core.ci_reduce.call(null,this__3778.array,f);
});
var G__3790__3792 = (function (v,f,start){
var this__3779 = this;
return cljs.core.ci_reduce.call(null,this__3779.array,f,start);
});
G__3790 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3790__3791.call(this,v,f);
case  3 :
return G__3790__3792.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3790;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3780 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3781 = this;
return this__3781.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3782 = this;
var new_array__3783 = cljs.core.aclone.call(null,this__3782.array);

(new_array__3783[k] = v);
return (new cljs.core.Vector(this__3782.meta,new_array__3783));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3794 = null;
var G__3794__3795 = (function (coll,k){
var this__3784 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3794__3796 = (function (coll,k,not_found){
var this__3785 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3794 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3794__3795.call(this,coll,k);
case  3 :
return G__3794__3796.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3794;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3798 = null;
var G__3798__3799 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3798__3800 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3798 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3798__3799.call(this,_,k);
case  3 :
return G__3798__3800.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3798;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3802){
var args = cljs.core.seq( arglist__3802 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3803 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3804 = array.length;

var i__3805 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3805,len__3804)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3805]))))
{return i__3805;
} else
{{
var G__3806 = cljs.core._PLUS_.call(null,i__3805,incr);
i__3805 = G__3806;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3808 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3809 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3807 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3807))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3807;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3808.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3809.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3812 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3813 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3814 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3814.keys.length)))
{return cljs.core.map.call(null,(function (p1__3811_SHARP_){
return cljs.core.vector.call(null,p1__3811_SHARP_,(this__3814.strobj[p1__3811_SHARP_]));
}),this__3814.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3815 = this;
return (new cljs.core.ObjMap(meta,this__3815.keys,this__3815.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3816 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3817 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3817))
{return this__3816.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3817;
}
})()))
{var new_keys__3818 = cljs.core.aclone.call(null,this__3816.keys);
var new_strobj__3819 = goog.object.clone.call(null,this__3816.strobj);

new_keys__3818.splice(cljs.core.scan_array.call(null,1,k,new_keys__3818),1);
cljs.core.js_delete.call(null,new_strobj__3819,k);
return (new cljs.core.ObjMap(this__3816.meta,new_keys__3818,new_strobj__3819));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3820 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3820.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3821 = this;
return this__3821.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3822 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3823 = this;
return this__3823.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3824 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3825 = goog.object.clone.call(null,this__3824.strobj);
var overwrite_QMARK___3826 = new_strobj__3825.hasOwnProperty(k);

(new_strobj__3825[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3826))
{return (new cljs.core.ObjMap(this__3824.meta,this__3824.keys,new_strobj__3825));
} else
{var new_keys__3827 = cljs.core.aclone.call(null,this__3824.keys);

new_keys__3827.push(k);
return (new cljs.core.ObjMap(this__3824.meta,new_keys__3827,new_strobj__3825));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3824.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3828 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3828.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3831 = null;
var G__3831__3832 = (function (coll,k){
var this__3829 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3831__3833 = (function (coll,k,not_found){
var this__3830 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3830.strobj,(this__3830.strobj[k]),not_found);
});
G__3831 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3831__3832.call(this,coll,k);
case  3 :
return G__3831__3833.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3831;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3836 = null;
var G__3836__3837 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3836__3838 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3836 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3836__3837.call(this,_,k);
case  3 :
return G__3836__3838.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3836;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3840 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3841 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3842 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3842.count)))
{var hashes__3843 = cljs.core.js_keys.call(null,this__3842.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3835_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3842.hashobj[p1__3835_SHARP_])));
}),hashes__3843);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3844 = this;
return (new cljs.core.HashMap(meta,this__3844.count,this__3844.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3845 = this;
var h__3846 = cljs.core.hash.call(null,k);
var bucket__3847 = (this__3845.hashobj[h__3846]);
var i__3848 = (cljs.core.truth_(bucket__3847)?cljs.core.scan_array.call(null,2,k,bucket__3847):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3848)))
{return coll;
} else
{var new_hashobj__3849 = goog.object.clone.call(null,this__3845.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3847.length)))
{cljs.core.js_delete.call(null,new_hashobj__3849,h__3846);
} else
{var new_bucket__3850 = cljs.core.aclone.call(null,bucket__3847);

new_bucket__3850.splice(i__3848,2);
(new_hashobj__3849[h__3846] = new_bucket__3850);
}
return (new cljs.core.HashMap(this__3845.meta,cljs.core.dec.call(null,this__3845.count),new_hashobj__3849));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3851 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3851.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3852 = this;
return this__3852.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3853 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3854 = this;
return this__3854.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3855 = this;
var h__3856 = cljs.core.hash.call(null,k);
var bucket__3857 = (this__3855.hashobj[h__3856]);

if(cljs.core.truth_(bucket__3857))
{var new_bucket__3858 = cljs.core.aclone.call(null,bucket__3857);
var new_hashobj__3859 = goog.object.clone.call(null,this__3855.hashobj);

(new_hashobj__3859[h__3856] = new_bucket__3858);
var temp__3695__auto____3860 = cljs.core.scan_array.call(null,2,k,new_bucket__3858);

if(cljs.core.truth_(temp__3695__auto____3860))
{var i__3861 = temp__3695__auto____3860;

(new_bucket__3858[cljs.core.inc.call(null,i__3861)] = v);
return (new cljs.core.HashMap(this__3855.meta,this__3855.count,new_hashobj__3859));
} else
{new_bucket__3858.push(k,v);
return (new cljs.core.HashMap(this__3855.meta,cljs.core.inc.call(null,this__3855.count),new_hashobj__3859));
}
} else
{var new_hashobj__3862 = goog.object.clone.call(null,this__3855.hashobj);

(new_hashobj__3862[h__3856] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3855.meta,cljs.core.inc.call(null,this__3855.count),new_hashobj__3862));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3863 = this;
var bucket__3864 = (this__3863.hashobj[cljs.core.hash.call(null,k)]);
var i__3865 = (cljs.core.truth_(bucket__3864)?cljs.core.scan_array.call(null,2,k,bucket__3864):null);

if(cljs.core.truth_(i__3865))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3870 = null;
var G__3870__3871 = (function (coll,k){
var this__3866 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3870__3872 = (function (coll,k,not_found){
var this__3867 = this;
var bucket__3868 = (this__3867.hashobj[cljs.core.hash.call(null,k)]);
var i__3869 = (cljs.core.truth_(bucket__3868)?cljs.core.scan_array.call(null,2,k,bucket__3868):null);

if(cljs.core.truth_(i__3869))
{return (bucket__3868[cljs.core.inc.call(null,i__3869)]);
} else
{return not_found;
}
});
G__3870 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3870__3871.call(this,coll,k);
case  3 :
return G__3870__3872.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3870;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3874 = ks.length;

var i__3875 = 0;
var out__3876 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3875,len__3874)))
{{
var G__3877 = cljs.core.inc.call(null,i__3875);
var G__3878 = cljs.core.assoc.call(null,out__3876,(ks[i__3875]),(vs[i__3875]));
i__3875 = G__3877;
out__3876 = G__3878;
continue;
}
} else
{return out__3876;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3879 = null;
var G__3879__3880 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3879__3881 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3879 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3879__3880.call(this,_,k);
case  3 :
return G__3879__3881.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3879;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3883 = cljs.core.seq.call(null,keyvals);
var out__3884 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3883))
{{
var G__3885 = cljs.core.nnext.call(null,in$__3883);
var G__3886 = cljs.core.assoc.call(null,out__3884,cljs.core.first.call(null,in$__3883),cljs.core.second.call(null,in$__3883));
in$__3883 = G__3885;
out__3884 = G__3886;
continue;
}
} else
{return out__3884;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3887){
var keyvals = cljs.core.seq( arglist__3887 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3888_SHARP_,p2__3889_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3890 = p1__3888_SHARP_;

if(cljs.core.truth_(or__3548__auto____3890))
{return or__3548__auto____3890;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3889_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3891){
var maps = cljs.core.seq( arglist__3891 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3894 = (function (m,e){
var k__3892 = cljs.core.first.call(null,e);
var v__3893 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3892)))
{return cljs.core.assoc.call(null,m,k__3892,f.call(null,cljs.core.get.call(null,m,k__3892),v__3893));
} else
{return cljs.core.assoc.call(null,m,k__3892,v__3893);
}
});
var merge2__3896 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3894,(function (){var or__3548__auto____3895 = m1;

if(cljs.core.truth_(or__3548__auto____3895))
{return or__3548__auto____3895;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3896,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3897){
var f = cljs.core.first(arglist__3897);
var maps = cljs.core.rest(arglist__3897);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3899 = cljs.core.ObjMap.fromObject([],{});
var keys__3900 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3900))
{var key__3901 = cljs.core.first.call(null,keys__3900);
var entry__3902 = cljs.core.get.call(null,map,key__3901);

{
var G__3903 = (cljs.core.truth_(entry__3902)?cljs.core.assoc.call(null,ret__3899,key__3901,entry__3902):ret__3899);
var G__3904 = cljs.core.next.call(null,keys__3900);
ret__3899 = G__3903;
keys__3900 = G__3904;
continue;
}
} else
{return ret__3899;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3905 = this;
return (new cljs.core.Set(this__3905.meta,cljs.core.dissoc.call(null,this__3905.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3906 = this;
var and__3546__auto____3907 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3907))
{var and__3546__auto____3908 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3908))
{return cljs.core.every_QMARK_.call(null,(function (p1__3898_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3898_SHARP_);
}),other);
} else
{return and__3546__auto____3908;
}
} else
{return and__3546__auto____3907;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3909 = this;
return (new cljs.core.Set(this__3909.meta,cljs.core.assoc.call(null,this__3909.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3910 = this;
return cljs.core.keys.call(null,this__3910.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3911 = this;
return (new cljs.core.Set(meta,this__3911.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3912 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3912.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3913 = this;
return this__3913.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3914 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3915 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3918 = null;
var G__3918__3919 = (function (coll,v){
var this__3916 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3918__3920 = (function (coll,v,not_found){
var this__3917 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3917.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3918 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3918__3919.call(this,coll,v);
case  3 :
return G__3918__3920.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3918;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3922 = null;
var G__3922__3923 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3922__3924 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3922 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3922__3923.call(this,_,k);
case  3 :
return G__3922__3924.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3922;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3927 = cljs.core.seq.call(null,coll);
var out__3928 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3927))))
{{
var G__3929 = cljs.core.rest.call(null,in$__3927);
var G__3930 = cljs.core.conj.call(null,out__3928,cljs.core.first.call(null,in$__3927));
in$__3927 = G__3929;
out__3928 = G__3930;
continue;
}
} else
{return out__3928;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3931 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3932 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3932))
{var e__3933 = temp__3695__auto____3932;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3933));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3931,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3926_SHARP_){
var temp__3695__auto____3934 = cljs.core.find.call(null,smap,p1__3926_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3934))
{var e__3935 = temp__3695__auto____3934;

return cljs.core.second.call(null,e__3935);
} else
{return p1__3926_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3943 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3936,seen){
while(true){
var vec__3937__3938 = p__3936;
var f__3939 = cljs.core.nth.call(null,vec__3937__3938,0,null);
var xs__3940 = vec__3937__3938;

var temp__3698__auto____3941 = cljs.core.seq.call(null,xs__3940);

if(cljs.core.truth_(temp__3698__auto____3941))
{var s__3942 = temp__3698__auto____3941;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3939)))
{{
var G__3944 = cljs.core.rest.call(null,s__3942);
var G__3945 = seen;
p__3936 = G__3944;
seen = G__3945;
continue;
}
} else
{return cljs.core.cons.call(null,f__3939,step.call(null,cljs.core.rest.call(null,s__3942),cljs.core.conj.call(null,seen,f__3939)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3943.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3946 = cljs.core.Vector.fromArray([]);
var s__3947 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3947)))
{{
var G__3948 = cljs.core.conj.call(null,ret__3946,cljs.core.first.call(null,s__3947));
var G__3949 = cljs.core.next.call(null,s__3947);
ret__3946 = G__3948;
s__3947 = G__3949;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3946);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3950 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3951 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3951,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3951));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3952 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3952))
{return or__3548__auto____3952;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3953 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3953,-1)))
{return cljs.core.subs.call(null,x,2,i__3953);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3956 = cljs.core.ObjMap.fromObject([],{});
var ks__3957 = cljs.core.seq.call(null,keys);
var vs__3958 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3959 = ks__3957;

if(cljs.core.truth_(and__3546__auto____3959))
{return vs__3958;
} else
{return and__3546__auto____3959;
}
})()))
{{
var G__3960 = cljs.core.assoc.call(null,map__3956,cljs.core.first.call(null,ks__3957),cljs.core.first.call(null,vs__3958));
var G__3961 = cljs.core.next.call(null,ks__3957);
var G__3962 = cljs.core.next.call(null,vs__3958);
map__3956 = G__3960;
ks__3957 = G__3961;
vs__3958 = G__3962;
continue;
}
} else
{return map__3956;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3965 = (function (k,x){
return x;
});
var max_key__3966 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3967 = (function() { 
var G__3969__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3954_SHARP_,p2__3955_SHARP_){
return max_key.call(null,k,p1__3954_SHARP_,p2__3955_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3969 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3969__delegate.call(this, k, x, y, more);
};
G__3969.cljs$lang$maxFixedArity = 3;
G__3969.cljs$lang$applyTo = (function (arglist__3970){
var k = cljs.core.first(arglist__3970);
var x = cljs.core.first(cljs.core.next(arglist__3970));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3970)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3970)));
return G__3969__delegate.call(this, k, x, y, more);
});
return G__3969;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3965.call(this,k,x);
case  3 :
return max_key__3966.call(this,k,x,y);
default:
return max_key__3967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3967.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3971 = (function (k,x){
return x;
});
var min_key__3972 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3973 = (function() { 
var G__3975__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3963_SHARP_,p2__3964_SHARP_){
return min_key.call(null,k,p1__3963_SHARP_,p2__3964_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3975 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3975__delegate.call(this, k, x, y, more);
};
G__3975.cljs$lang$maxFixedArity = 3;
G__3975.cljs$lang$applyTo = (function (arglist__3976){
var k = cljs.core.first(arglist__3976);
var x = cljs.core.first(cljs.core.next(arglist__3976));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3976)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3976)));
return G__3975__delegate.call(this, k, x, y, more);
});
return G__3975;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3971.call(this,k,x);
case  3 :
return min_key__3972.call(this,k,x,y);
default:
return min_key__3973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3973.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3979 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3980 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3977 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3977))
{var s__3978 = temp__3698__auto____3977;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3978),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3978)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3979.call(this,n,step);
case  3 :
return partition_all__3980.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3982))
{var s__3983 = temp__3698__auto____3982;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3983))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3983),take_while.call(null,pred,cljs.core.rest.call(null,s__3983)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3984 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3985 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3986 = this;
return this__3986.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3987 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3987.meta,cljs.core._PLUS_.call(null,this__3987.start,this__3987.step),this__3987.end,this__3987.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3988 = this;
var comp__3989 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3988.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3989.call(null,this__3988.start,this__3988.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3990 = this;
return (new cljs.core.Range(meta,this__3990.start,this__3990.end,this__3990.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3991 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3991.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4001 = null;
var G__4001__4002 = (function (rng,n){
var this__3992 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3992.start,cljs.core._STAR_.call(null,n,this__3992.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3993 = cljs.core._GT_.call(null,this__3992.start,this__3992.end);

if(cljs.core.truth_(and__3546__auto____3993))
{return cljs.core._EQ_.call(null,this__3992.step,0);
} else
{return and__3546__auto____3993;
}
})()))
{return this__3992.start;
} else
{throw "Index out of bounds";
}
}
});
var G__4001__4003 = (function (rng,n,not_found){
var this__3994 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3994.start,cljs.core._STAR_.call(null,n,this__3994.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3995 = cljs.core._GT_.call(null,this__3994.start,this__3994.end);

if(cljs.core.truth_(and__3546__auto____3995))
{return cljs.core._EQ_.call(null,this__3994.step,0);
} else
{return and__3546__auto____3995;
}
})()))
{return this__3994.start;
} else
{return not_found;
}
}
});
G__4001 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4001__4002.call(this,rng,n);
case  3 :
return G__4001__4003.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4001;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3996 = this;
return this__3996.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4005 = null;
var G__4005__4006 = (function (rng,f){
var this__3997 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4005__4007 = (function (rng,f,s){
var this__3998 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4005 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4005__4006.call(this,rng,f);
case  3 :
return G__4005__4007.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4005;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3999 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4000 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__4000.end,this__4000.start),this__4000.step));
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4009 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4010 = (function (end){
return range.call(null,0,end,1);
});
var range__4011 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4012 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4009.call(this);
case  1 :
return range__4010.call(this,start);
case  2 :
return range__4011.call(this,start,end);
case  3 :
return range__4012.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4014 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4014))
{var s__4015 = temp__3698__auto____4014;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4015),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4015)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4017))
{var s__4018 = temp__3698__auto____4017;

var fst__4019 = cljs.core.first.call(null,s__4018);
var fv__4020 = f.call(null,fst__4019);
var run__4021 = cljs.core.cons.call(null,fst__4019,cljs.core.take_while.call(null,(function (p1__4016_SHARP_){
return cljs.core._EQ_.call(null,fv__4020,f.call(null,p1__4016_SHARP_));
}),cljs.core.next.call(null,s__4018)));

return cljs.core.cons.call(null,run__4021,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4021),s__4018))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4036 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4032 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4032))
{var s__4033 = temp__3695__auto____4032;

return reductions.call(null,f,cljs.core.first.call(null,s__4033),cljs.core.rest.call(null,s__4033));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4037 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4034 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4034))
{var s__4035 = temp__3698__auto____4034;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4035)),cljs.core.rest.call(null,s__4035));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4036.call(this,f,init);
case  3 :
return reductions__4037.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4040 = (function (f){
return (function() {
var G__4045 = null;
var G__4045__4046 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4045__4047 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4045__4048 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4045__4049 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4045__4050 = (function() { 
var G__4052__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4052 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4052__delegate.call(this, x, y, z, args);
};
G__4052.cljs$lang$maxFixedArity = 3;
G__4052.cljs$lang$applyTo = (function (arglist__4053){
var x = cljs.core.first(arglist__4053);
var y = cljs.core.first(cljs.core.next(arglist__4053));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4053)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4053)));
return G__4052__delegate.call(this, x, y, z, args);
});
return G__4052;
})()
;
G__4045 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4045__4046.call(this);
case  1 :
return G__4045__4047.call(this,x);
case  2 :
return G__4045__4048.call(this,x,y);
case  3 :
return G__4045__4049.call(this,x,y,z);
default:
return G__4045__4050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4045.cljs$lang$maxFixedArity = 3;
G__4045.cljs$lang$applyTo = G__4045__4050.cljs$lang$applyTo;
return G__4045;
})()
});
var juxt__4041 = (function (f,g){
return (function() {
var G__4054 = null;
var G__4054__4055 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4054__4056 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4054__4057 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4054__4058 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4054__4059 = (function() { 
var G__4061__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4061 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4061__delegate.call(this, x, y, z, args);
};
G__4061.cljs$lang$maxFixedArity = 3;
G__4061.cljs$lang$applyTo = (function (arglist__4062){
var x = cljs.core.first(arglist__4062);
var y = cljs.core.first(cljs.core.next(arglist__4062));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4062)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4062)));
return G__4061__delegate.call(this, x, y, z, args);
});
return G__4061;
})()
;
G__4054 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4054__4055.call(this);
case  1 :
return G__4054__4056.call(this,x);
case  2 :
return G__4054__4057.call(this,x,y);
case  3 :
return G__4054__4058.call(this,x,y,z);
default:
return G__4054__4059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4054.cljs$lang$maxFixedArity = 3;
G__4054.cljs$lang$applyTo = G__4054__4059.cljs$lang$applyTo;
return G__4054;
})()
});
var juxt__4042 = (function (f,g,h){
return (function() {
var G__4063 = null;
var G__4063__4064 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4063__4065 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4063__4066 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4063__4067 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4063__4068 = (function() { 
var G__4070__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4070 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4070__delegate.call(this, x, y, z, args);
};
G__4070.cljs$lang$maxFixedArity = 3;
G__4070.cljs$lang$applyTo = (function (arglist__4071){
var x = cljs.core.first(arglist__4071);
var y = cljs.core.first(cljs.core.next(arglist__4071));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4071)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4071)));
return G__4070__delegate.call(this, x, y, z, args);
});
return G__4070;
})()
;
G__4063 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4063__4064.call(this);
case  1 :
return G__4063__4065.call(this,x);
case  2 :
return G__4063__4066.call(this,x,y);
case  3 :
return G__4063__4067.call(this,x,y,z);
default:
return G__4063__4068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4063.cljs$lang$maxFixedArity = 3;
G__4063.cljs$lang$applyTo = G__4063__4068.cljs$lang$applyTo;
return G__4063;
})()
});
var juxt__4043 = (function() { 
var G__4072__delegate = function (f,g,h,fs){
var fs__4039 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4073 = null;
var G__4073__4074 = (function (){
return cljs.core.reduce.call(null,(function (p1__4022_SHARP_,p2__4023_SHARP_){
return cljs.core.conj.call(null,p1__4022_SHARP_,p2__4023_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4039);
});
var G__4073__4075 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4024_SHARP_,p2__4025_SHARP_){
return cljs.core.conj.call(null,p1__4024_SHARP_,p2__4025_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4039);
});
var G__4073__4076 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4026_SHARP_,p2__4027_SHARP_){
return cljs.core.conj.call(null,p1__4026_SHARP_,p2__4027_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4039);
});
var G__4073__4077 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4028_SHARP_,p2__4029_SHARP_){
return cljs.core.conj.call(null,p1__4028_SHARP_,p2__4029_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4039);
});
var G__4073__4078 = (function() { 
var G__4080__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4030_SHARP_,p2__4031_SHARP_){
return cljs.core.conj.call(null,p1__4030_SHARP_,cljs.core.apply.call(null,p2__4031_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4039);
};
var G__4080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4080__delegate.call(this, x, y, z, args);
};
G__4080.cljs$lang$maxFixedArity = 3;
G__4080.cljs$lang$applyTo = (function (arglist__4081){
var x = cljs.core.first(arglist__4081);
var y = cljs.core.first(cljs.core.next(arglist__4081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4081)));
return G__4080__delegate.call(this, x, y, z, args);
});
return G__4080;
})()
;
G__4073 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4073__4074.call(this);
case  1 :
return G__4073__4075.call(this,x);
case  2 :
return G__4073__4076.call(this,x,y);
case  3 :
return G__4073__4077.call(this,x,y,z);
default:
return G__4073__4078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4073.cljs$lang$maxFixedArity = 3;
G__4073.cljs$lang$applyTo = G__4073__4078.cljs$lang$applyTo;
return G__4073;
})()
};
var G__4072 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4072__delegate.call(this, f, g, h, fs);
};
G__4072.cljs$lang$maxFixedArity = 3;
G__4072.cljs$lang$applyTo = (function (arglist__4082){
var f = cljs.core.first(arglist__4082);
var g = cljs.core.first(cljs.core.next(arglist__4082));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4082)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4082)));
return G__4072__delegate.call(this, f, g, h, fs);
});
return G__4072;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4040.call(this,f);
case  2 :
return juxt__4041.call(this,f,g);
case  3 :
return juxt__4042.call(this,f,g,h);
default:
return juxt__4043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4043.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4084 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4087 = cljs.core.next.call(null,coll);
coll = G__4087;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4085 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4083 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4083))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3546__auto____4083;
}
})()))
{{
var G__4088 = cljs.core.dec.call(null,n);
var G__4089 = cljs.core.next.call(null,coll);
n = G__4088;
coll = G__4089;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4084.call(this,n);
case  2 :
return dorun__4085.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4090 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4091 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4090.call(this,n);
case  2 :
return doall__4091.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4093 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4093),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4093),1)))
{return cljs.core.first.call(null,matches__4093);
} else
{return cljs.core.vec.call(null,matches__4093);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4094 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4094)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4094),1)))
{return cljs.core.first.call(null,matches__4094);
} else
{return cljs.core.vec.call(null,matches__4094);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4095 = cljs.core.re_find.call(null,re,s);
var match_idx__4096 = s.search(re);
var match_str__4097 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4095))?cljs.core.first.call(null,match_data__4095):match_data__4095);
var post_match__4098 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__4096,cljs.core.count.call(null,match_str__4097)));

if(cljs.core.truth_(match_data__4095))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4095,re_seq.call(null,re,post_match__4098));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4099_SHARP_){
return print_one.call(null,p1__4099_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4100 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4100))
{var and__3546__auto____4103 = (function (){var x__110__auto____4101 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4102 = x__110__auto____4101;

if(cljs.core.truth_(and__3546__auto____4102))
{return x__110__auto____4101.cljs$core$IMeta$;
} else
{return and__3546__auto____4102;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__110__auto____4101);
}
})();

if(cljs.core.truth_(and__3546__auto____4103))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4103;
}
} else
{return and__3546__auto____4100;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__110__auto____4104 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4105 = x__110__auto____4104;

if(cljs.core.truth_(and__3546__auto____4105))
{return x__110__auto____4104.cljs$core$IPrintable$;
} else
{return and__3546__auto____4105;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__110__auto____4104);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__4106 = cljs.core.first.call(null,objs);
var sb__4107 = (new goog.string.StringBuffer());

var G__4108__4109 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__4108__4109))
{var obj__4110 = cljs.core.first.call(null,G__4108__4109);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__4110,first_obj__4106)))
{} else
{sb__4107.append(" ");
}
var G__4111__4112 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4110,opts));

while(true){
if(cljs.core.truth_(G__4111__4112))
{var string__4113 = cljs.core.first.call(null,G__4111__4112);

sb__4107.append(string__4113);
{
var G__4114 = cljs.core.next.call(null,G__4111__4112);
G__4111__4112 = G__4114;
continue;
}
} else
{}
break;
}
{
var G__4115 = cljs.core.next.call(null,G__4108__4109);
G__4108__4109 = G__4115;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__4107);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4116 = cljs.core.first.call(null,objs);

var G__4117__4118 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__4117__4118))
{var obj__4119 = cljs.core.first.call(null,G__4117__4118);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__4119,first_obj__4116)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4120__4121 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4119,opts));

while(true){
if(cljs.core.truth_(G__4120__4121))
{var string__4122 = cljs.core.first.call(null,G__4120__4121);

cljs.core.string_print.call(null,string__4122);
{
var G__4123 = cljs.core.next.call(null,G__4120__4121);
G__4120__4121 = G__4123;
continue;
}
} else
{}
break;
}
{
var G__4124 = cljs.core.next.call(null,G__4117__4118);
G__4117__4118 = G__4124;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4125){
var objs = cljs.core.seq( arglist__4125 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4126){
var objs = cljs.core.seq( arglist__4126 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4127){
var objs = cljs.core.seq( arglist__4127 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4128){
var objs = cljs.core.seq( arglist__4128 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4129){
var objs = cljs.core.seq( arglist__4129 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4130 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4130,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4131 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4131))
{var nspc__4132 = temp__3698__auto____4131;

return cljs.core.str.call(null,nspc__4132,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4133 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4133))
{var nspc__4134 = temp__3698__auto____4133;

return cljs.core.str.call(null,nspc__4134,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4135 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4135,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4136 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4136.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4137 = this;
return this__4137.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4138 = this;
return this__4138.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4139 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4146 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__4147 = (function() { 
var G__4149__delegate = function (x,p__4140){
var map__4141__4142 = p__4140;
var map__4141__4143 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4141__4142))?cljs.core.apply.call(null,cljs.core.hash_map,map__4141__4142):map__4141__4142);
var validator__4144 = cljs.core.get.call(null,map__4141__4143,"﷐'validator");
var meta__4145 = cljs.core.get.call(null,map__4141__4143,"﷐'meta");

return (new cljs.core.Atom(x,meta__4145,validator__4144));
};
var G__4149 = function (x,var_args){
var p__4140 = null;
if (goog.isDef(var_args)) {
  p__4140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4149__delegate.call(this, x, p__4140);
};
G__4149.cljs$lang$maxFixedArity = 1;
G__4149.cljs$lang$applyTo = (function (arglist__4150){
var x = cljs.core.first(arglist__4150);
var p__4140 = cljs.core.rest(arglist__4150);
return G__4149__delegate.call(this, x, p__4140);
});
return G__4149;
})()
;
atom = function(x,var_args){
var p__4140 = var_args;
switch(arguments.length){
case  1 :
return atom__4146.call(this,x);
default:
return atom__4147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4147.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3698__auto____4151 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4151))
{var v__4152 = temp__3698__auto____4151;

if(cljs.core.truth_(v__4152.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4153 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4154 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4155 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4156 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4157 = (function() { 
var G__4159__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4159 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4159__delegate.call(this, a, f, x, y, z, more);
};
G__4159.cljs$lang$maxFixedArity = 5;
G__4159.cljs$lang$applyTo = (function (arglist__4160){
var a = cljs.core.first(arglist__4160);
var f = cljs.core.first(cljs.core.next(arglist__4160));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4160)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4160))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4160)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4160)))));
return G__4159__delegate.call(this, a, f, x, y, z, more);
});
return G__4159;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4153.call(this,a,f);
case  3 :
return swap_BANG___4154.call(this,a,f,x);
case  4 :
return swap_BANG___4155.call(this,a,f,x,y);
case  5 :
return swap_BANG___4156.call(this,a,f,x,y,z);
default:
return swap_BANG___4157.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4157.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4161){
var iref = cljs.core.first(arglist__4161);
var f = cljs.core.first(cljs.core.next(arglist__4161));
var args = cljs.core.rest(cljs.core.next(arglist__4161));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4162 = (function (){
return gensym.call(null,"G__");
});
var gensym__4163 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4162.call(this);
case  1 :
return gensym__4163.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4165 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4165.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4166 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4166.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4166.state,this__4166.f);
}
return cljs.core.deref.call(null,this__4166.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__4167){
var body = cljs.core.seq( arglist__4167 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4168__4169 = options;
var map__4168__4170 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4168__4169))?cljs.core.apply.call(null,cljs.core.hash_map,map__4168__4169):map__4168__4169);
var keywordize_keys__4171 = cljs.core.get.call(null,map__4168__4170,"﷐'keywordize-keys");
var keyfn__4172 = (cljs.core.truth_(keywordize_keys__4171)?cljs.core.keyword:cljs.core.str);
var f__4178 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__164__auto____4177 = (function iter__4173(s__4174){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4174__4175 = s__4174;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4174__4175)))
{var k__4176 = cljs.core.first.call(null,s__4174__4175);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4172.call(null,k__4176),thisfn.call(null,(x[k__4176]))]),iter__4173.call(null,cljs.core.rest.call(null,s__4174__4175)));
} else
{return null;
}
break;
}
})));
});

return iter__164__auto____4177.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4178.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4179){
var x = cljs.core.first(arglist__4179);
var options = cljs.core.rest(arglist__4179);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4180 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4184__delegate = function (args){
var temp__3695__auto____4181 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4180),args);

if(cljs.core.truth_(temp__3695__auto____4181))
{var v__4182 = temp__3695__auto____4181;

return v__4182;
} else
{var ret__4183 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4180,cljs.core.assoc,args,ret__4183);
return ret__4183;
}
};
var G__4184 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4184__delegate.call(this, args);
};
G__4184.cljs$lang$maxFixedArity = 0;
G__4184.cljs$lang$applyTo = (function (arglist__4185){
var args = cljs.core.seq( arglist__4185 );;
return G__4184__delegate.call(this, args);
});
return G__4184;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4187 = (function (f){
while(true){
var ret__4186 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4186)))
{{
var G__4190 = ret__4186;
f = G__4190;
continue;
}
} else
{return ret__4186;
}
break;
}
});
var trampoline__4188 = (function() { 
var G__4191__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4191 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4191__delegate.call(this, f, args);
};
G__4191.cljs$lang$maxFixedArity = 1;
G__4191.cljs$lang$applyTo = (function (arglist__4192){
var f = cljs.core.first(arglist__4192);
var args = cljs.core.rest(arglist__4192);
return G__4191__delegate.call(this, f, args);
});
return G__4191;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4187.call(this,f);
default:
return trampoline__4188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4188.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4193 = (function (){
return rand.call(null,1);
});
var rand__4194 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4193.call(this);
case  1 :
return rand__4194.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4196 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4196,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4196,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4205 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4206 = (function (h,child,parent){
var or__3548__auto____4197 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4197))
{return or__3548__auto____4197;
} else
{var or__3548__auto____4198 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4198))
{return or__3548__auto____4198;
} else
{var and__3546__auto____4199 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4199))
{var and__3546__auto____4200 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4200))
{var and__3546__auto____4201 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4201))
{var ret__4202 = true;
var i__4203 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4204 = cljs.core.not.call(null,ret__4202);

if(cljs.core.truth_(or__3548__auto____4204))
{return or__3548__auto____4204;
} else
{return cljs.core._EQ_.call(null,i__4203,cljs.core.count.call(null,parent));
}
})()))
{return ret__4202;
} else
{{
var G__4208 = isa_QMARK_.call(null,h,child.call(null,i__4203),parent.call(null,i__4203));
var G__4209 = cljs.core.inc.call(null,i__4203);
ret__4202 = G__4208;
i__4203 = G__4209;
continue;
}
}
break;
}
} else
{return and__3546__auto____4201;
}
} else
{return and__3546__auto____4200;
}
} else
{return and__3546__auto____4199;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4205.call(this,h,child);
case  3 :
return isa_QMARK___4206.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4210 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4211 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4210.call(this,h);
case  2 :
return parents__4211.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4213 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4214 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4213.call(this,h);
case  2 :
return ancestors__4214.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4216 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4217 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4216.call(this,h);
case  2 :
return descendants__4217.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4227 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4228 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__4222 = "﷐'parents".call(null,h);
var td__4223 = "﷐'descendants".call(null,h);
var ta__4224 = "﷐'ancestors".call(null,h);
var tf__4225 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4226 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4222.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4224.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4224.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4222,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4225.call(null,"﷐'ancestors".call(null,h),tag,td__4223,parent,ta__4224),"﷐'descendants":tf__4225.call(null,"﷐'descendants".call(null,h),parent,ta__4224,tag,td__4223)});
})());

if(cljs.core.truth_(or__3548__auto____4226))
{return or__3548__auto____4226;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4227.call(this,h,tag);
case  3 :
return derive__4228.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4234 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4235 = (function (h,tag,parent){
var parentMap__4230 = "﷐'parents".call(null,h);
var childsParents__4231 = (cljs.core.truth_(parentMap__4230.call(null,tag))?cljs.core.disj.call(null,parentMap__4230.call(null,tag),parent):cljs.core.set([]));
var newParents__4232 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4231))?cljs.core.assoc.call(null,parentMap__4230,tag,childsParents__4231):cljs.core.dissoc.call(null,parentMap__4230,tag));
var deriv_seq__4233 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4219_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4219_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4219_SHARP_),cljs.core.second.call(null,p1__4219_SHARP_)));
}),cljs.core.seq.call(null,newParents__4232)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4230.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4220_SHARP_,p2__4221_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4220_SHARP_,p2__4221_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4233));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4234.call(this,h,tag);
case  3 :
return underive__4235.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4237 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4239 = (cljs.core.truth_((function (){var and__3546__auto____4238 = xprefs__4237;

if(cljs.core.truth_(and__3546__auto____4238))
{return xprefs__4237.call(null,y);
} else
{return and__3546__auto____4238;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4239))
{return or__3548__auto____4239;
} else
{var or__3548__auto____4241 = (function (){var ps__4240 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__4240))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4240),prefer_table)))
{} else
{}
{
var G__4244 = cljs.core.rest.call(null,ps__4240);
ps__4240 = G__4244;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4241))
{return or__3548__auto____4241;
} else
{var or__3548__auto____4243 = (function (){var ps__4242 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__4242))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4242),y,prefer_table)))
{} else
{}
{
var G__4245 = cljs.core.rest.call(null,ps__4242);
ps__4242 = G__4245;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4243))
{return or__3548__auto____4243;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4246 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4246))
{return or__3548__auto____4246;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4255 = cljs.core.reduce.call(null,(function (be,p__4247){
var vec__4248__4249 = p__4247;
var k__4250 = cljs.core.nth.call(null,vec__4248__4249,0,null);
var ___4251 = cljs.core.nth.call(null,vec__4248__4249,1,null);
var e__4252 = vec__4248__4249;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4250)))
{var be2__4254 = (cljs.core.truth_((function (){var or__3548__auto____4253 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4253))
{return or__3548__auto____4253;
} else
{return cljs.core.dominates.call(null,k__4250,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4252:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4254),k__4250,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4250," and ",cljs.core.first.call(null,be2__4254),", and neither is preferred");
}
return be2__4254;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4255))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4255));
return cljs.core.second.call(null,best_entry__4255);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4256 = mf;

if(cljs.core.truth_(and__3546__auto____4256))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4256;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4257 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4257))
{return or__3548__auto____4257;
} else
{var or__3548__auto____4258 = (_reset["_"]);

if(cljs.core.truth_(or__3548__auto____4258))
{return or__3548__auto____4258;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4259 = mf;

if(cljs.core.truth_(and__3546__auto____4259))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4259;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4260 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4260))
{return or__3548__auto____4260;
} else
{var or__3548__auto____4261 = (_add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4261))
{return or__3548__auto____4261;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4262 = mf;

if(cljs.core.truth_(and__3546__auto____4262))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4262;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4263 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4263))
{return or__3548__auto____4263;
} else
{var or__3548__auto____4264 = (_remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4264))
{return or__3548__auto____4264;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4265 = mf;

if(cljs.core.truth_(and__3546__auto____4265))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4265;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4266 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4266))
{return or__3548__auto____4266;
} else
{var or__3548__auto____4267 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4267))
{return or__3548__auto____4267;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4268 = mf;

if(cljs.core.truth_(and__3546__auto____4268))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4268;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4269 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4269))
{return or__3548__auto____4269;
} else
{var or__3548__auto____4270 = (_get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4270))
{return or__3548__auto____4270;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4271 = mf;

if(cljs.core.truth_(and__3546__auto____4271))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4271;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4272 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4272))
{return or__3548__auto____4272;
} else
{var or__3548__auto____4273 = (_methods["_"]);

if(cljs.core.truth_(or__3548__auto____4273))
{return or__3548__auto____4273;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4274 = mf;

if(cljs.core.truth_(and__3546__auto____4274))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4274;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4275 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4275))
{return or__3548__auto____4275;
} else
{var or__3548__auto____4276 = (_prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4276))
{return or__3548__auto____4276;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4277 = mf;

if(cljs.core.truth_(and__3546__auto____4277))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____4277;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____4278 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4278))
{return or__3548__auto____4278;
} else
{var or__3548__auto____4279 = (_invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4279))
{return or__3548__auto____4279;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__4280 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4281 = cljs.core._get_method.call(null,mf,dispatch_val__4280);

if(cljs.core.truth_(target_fn__4281))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4280);
}
return cljs.core.apply.call(null,target_fn__4281,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4282 = this;
cljs.core.swap_BANG_.call(null,this__4282.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4282.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4282.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4282.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4283 = this;
cljs.core.swap_BANG_.call(null,this__4283.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4283.method_cache,this__4283.method_table,this__4283.cached_hierarchy,this__4283.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4284 = this;
cljs.core.swap_BANG_.call(null,this__4284.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4284.method_cache,this__4284.method_table,this__4284.cached_hierarchy,this__4284.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4285 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4285.cached_hierarchy),cljs.core.deref.call(null,this__4285.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4285.method_cache,this__4285.method_table,this__4285.cached_hierarchy,this__4285.hierarchy);
}
var temp__3695__auto____4286 = cljs.core.deref.call(null,this__4285.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4286))
{var target_fn__4287 = temp__3695__auto____4286;

return target_fn__4287;
} else
{var temp__3695__auto____4288 = cljs.core.find_and_cache_best_method.call(null,this__4285.name,dispatch_val,this__4285.hierarchy,this__4285.method_table,this__4285.prefer_table,this__4285.method_cache,this__4285.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4288))
{var target_fn__4289 = temp__3695__auto____4288;

return target_fn__4289;
} else
{return cljs.core.deref.call(null,this__4285.method_table).call(null,this__4285.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4290 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4290.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__4290.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__4290.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4290.method_cache,this__4290.method_table,this__4290.cached_hierarchy,this__4290.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4291 = this;
return cljs.core.deref.call(null,this__4291.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4292 = this;
return cljs.core.deref.call(null,this__4292.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__4293 = this;
return cljs.core.do_invoke.call(null,mf,this__4293.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__4294__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__4294 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4294__delegate.call(this, _, args);
};
G__4294.cljs$lang$maxFixedArity = 1;
G__4294.cljs$lang$applyTo = (function (arglist__4295){
var _ = cljs.core.first(arglist__4295);
var args = cljs.core.rest(arglist__4295);
return G__4294__delegate.call(this, _, args);
});
return G__4294;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
