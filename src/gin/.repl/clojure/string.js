goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
if(cljs.core.truth_(cljs.core._EQ_.call(null,s.length,0)))
{return "";
} else
{var sb__2204 = (new goog.string.StringBuffer());

var coll__2205 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__2205))
{sb__2204.append(cljs.core.first.call(null,coll__2205));
{
var G__2206 = cljs.core.next.call(null,coll__2205);
coll__2205 = G__2206;
continue;
}
} else
{}
break;
}
return sb__2204.toString();
}
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__2207 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2208 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__2207.call(this,separator);
case  2 :
return join__2208.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s),2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2216 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__2217 = (function (s,re,limit){
if(cljs.core.truth_(cljs.core._LT_.call(null,limit,1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__2210 = s;
var limit__2211 = limit;
var parts__2212 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__2211,1)))
{return cljs.core.conj.call(null,parts__2212,s__2210);
} else
{var temp__3695__auto____2213 = cljs.core.re_find.call(null,re,s__2210);

if(cljs.core.truth_(temp__3695__auto____2213))
{var m__2214 = temp__3695__auto____2213;

var index__2215 = s__2210.indexOf(m__2214);

{
var G__2219 = s__2210.substring(cljs.core._PLUS_.call(null,index__2215,cljs.core.count.call(null,m__2214)));
var G__2220 = cljs.core.dec.call(null,limit__2211);
var G__2221 = cljs.core.conj.call(null,parts__2212,s__2210.substring(0,index__2215));
s__2210 = G__2219;
limit__2211 = G__2220;
parts__2212 = G__2221;
continue;
}
} else
{return cljs.core.conj.call(null,parts__2212,s__2210);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__2216.call(this,s,re);
case  3 :
return split__2217.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__2222 = s.length;

while(true){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,index__2222)))
{return "";
} else
{var ch__2223 = cljs.core.get.call(null,s,cljs.core.dec.call(null,index__2222));

if(cljs.core.truth_((function (){var or__3548__auto____2224 = cljs.core._EQ_.call(null,ch__2223,"\n");

if(cljs.core.truth_(or__3548__auto____2224))
{return or__3548__auto____2224;
} else
{return cljs.core._EQ_.call(null,ch__2223,"\r");
}
})()))
{{
var G__2225 = cljs.core.dec.call(null,index__2222);
index__2222 = G__2225;
continue;
}
} else
{return s.substring(0,index__2222);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__2226 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____2227 = cljs.core.not.call(null,s__2226);

if(cljs.core.truth_(or__3548__auto____2227))
{return or__3548__auto____2227;
} else
{var or__3548__auto____2228 = cljs.core._EQ_.call(null,"",s__2226);

if(cljs.core.truth_(or__3548__auto____2228))
{return or__3548__auto____2228;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__2226);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__2229 = (new goog.string.StringBuffer());
var length__2230 = s.length;

var index__2231 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__2230,index__2231)))
{return buffer__2229.toString();
} else
{var ch__2232 = s.charAt(index__2231);

var temp__3695__auto____2233 = cljs.core.get.call(null,cmap,ch__2232);

if(cljs.core.truth_(temp__3695__auto____2233))
{var replacement__2234 = temp__3695__auto____2233;

buffer__2229.append(cljs.core.str.call(null,replacement__2234));
} else
{buffer__2229.append(ch__2232);
}
{
var G__2235 = cljs.core.inc.call(null,index__2231);
index__2231 = G__2235;
continue;
}
}
break;
}
});
