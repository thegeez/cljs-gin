goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4325){
var vec__4326__4327 = p__4325;
var k__4328 = cljs.core.nth.call(null,vec__4326__4327,0,null);
var v__4329 = cljs.core.nth.call(null,vec__4326__4327,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4328.toLowerCase()),v__4329]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4360 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4330 = this$;

if(cljs.core.truth_(and__3546__auto____4330))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4330;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4331 = (connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4331))
{return or__3548__auto____4331;
} else
{var or__3548__auto____4332 = (connect["_"]);

if(cljs.core.truth_(or__3548__auto____4332))
{return or__3548__auto____4332;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4361 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4333 = this$;

if(cljs.core.truth_(and__3546__auto____4333))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4333;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4334 = (connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4334))
{return or__3548__auto____4334;
} else
{var or__3548__auto____4335 = (connect["_"]);

if(cljs.core.truth_(or__3548__auto____4335))
{return or__3548__auto____4335;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4362 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4336 = this$;

if(cljs.core.truth_(and__3546__auto____4336))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4336;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4337 = (connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4337))
{return or__3548__auto____4337;
} else
{var or__3548__auto____4338 = (connect["_"]);

if(cljs.core.truth_(or__3548__auto____4338))
{return or__3548__auto____4338;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4363 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4339 = this$;

if(cljs.core.truth_(and__3546__auto____4339))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4339;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4340 = (connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4340))
{return or__3548__auto____4340;
} else
{var or__3548__auto____4341 = (connect["_"]);

if(cljs.core.truth_(or__3548__auto____4341))
{return or__3548__auto____4341;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__4360.call(this,this$);
case  2 :
return connect__4361.call(this,this$,opt1);
case  3 :
return connect__4362.call(this,this$,opt1,opt2);
case  4 :
return connect__4363.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4365 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4342 = this$;

if(cljs.core.truth_(and__3546__auto____4342))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4342;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4343 = (transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4343))
{return or__3548__auto____4343;
} else
{var or__3548__auto____4344 = (transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4344))
{return or__3548__auto____4344;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4366 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4345 = this$;

if(cljs.core.truth_(and__3546__auto____4345))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4345;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4346 = (transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4346))
{return or__3548__auto____4346;
} else
{var or__3548__auto____4347 = (transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4347))
{return or__3548__auto____4347;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4367 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4348 = this$;

if(cljs.core.truth_(and__3546__auto____4348))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4348;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4349 = (transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4349))
{return or__3548__auto____4349;
} else
{var or__3548__auto____4350 = (transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4350))
{return or__3548__auto____4350;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4368 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4351 = this$;

if(cljs.core.truth_(and__3546__auto____4351))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4351;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4352 = (transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4352))
{return or__3548__auto____4352;
} else
{var or__3548__auto____4353 = (transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4353))
{return or__3548__auto____4353;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4369 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4354 = this$;

if(cljs.core.truth_(and__3546__auto____4354))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4354;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4355 = (transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4355))
{return or__3548__auto____4355;
} else
{var or__3548__auto____4356 = (transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4356))
{return or__3548__auto____4356;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__4365.call(this,this$,opt);
case  3 :
return transmit__4366.call(this,this$,opt,opt2);
case  4 :
return transmit__4367.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4368.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4369.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4357 = this$;

if(cljs.core.truth_(and__3546__auto____4357))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4357;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4358 = (close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4358))
{return or__3548__auto____4358;
} else
{var or__3548__auto____4359 = (close["_"]);

if(cljs.core.truth_(or__3548__auto____4359))
{return or__3548__auto____4359;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4371){
var vec__4372__4373 = p__4371;
var k__4374 = cljs.core.nth.call(null,vec__4372__4373,0,null);
var v__4375 = cljs.core.nth.call(null,vec__4372__4373,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4374.toLowerCase()),v__4375]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4376 = null;
var G__4376__4377 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4376__4378 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4376__4379 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4376__4380 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4376__4381 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4376 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4376__4377.call(this,this$,uri);
case  3 :
return G__4376__4378.call(this,this$,uri,method);
case  4 :
return G__4376__4379.call(this,this$,uri,method,content);
case  5 :
return G__4376__4380.call(this,this$,uri,method,content,headers);
case  6 :
return G__4376__4381.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4376;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4383){
var vec__4384__4385 = p__4383;
var k__4386 = cljs.core.nth.call(null,vec__4384__4385,0,null);
var v__4387 = cljs.core.nth.call(null,vec__4384__4385,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4386.toLowerCase()),v__4387]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__4394 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4388 = this$;

if(cljs.core.truth_(and__3546__auto____4388))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4388;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4389 = (register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4389))
{return or__3548__auto____4389;
} else
{var or__3548__auto____4390 = (register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4390))
{return or__3548__auto____4390;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4395 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4391 = this$;

if(cljs.core.truth_(and__3546__auto____4391))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4391;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4392 = (register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4392))
{return or__3548__auto____4392;
} else
{var or__3548__auto____4393 = (register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4393))
{return or__3548__auto____4393;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__4394.call(this,this$,service_name,fn);
case  4 :
return register_service__4395.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4397 = null;
var G__4397__4398 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4397__4399 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4397__4400 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4397__4401 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4397 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4397__4398.call(this,this$);
case  2 :
return G__4397__4399.call(this,this$,on_connect_fn);
case  3 :
return G__4397__4400.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4397__4401.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4397;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__4403 = null;
var G__4403__4404 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4403__4405 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4403 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4403__4404.call(this,this$,service_name,fn);
case  4 :
return G__4403__4405.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4403;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__4416 = (function (){
var temp__3698__auto____4407 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4407))
{var config__4408 = temp__3698__auto____4407;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4408)));
} else
{return null;
}
});
var xpc_connection__4417 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4409){
var vec__4410__4411 = p__4409;
var k__4412 = cljs.core.nth.call(null,vec__4410__4411,0,null);
var v__4413 = cljs.core.nth.call(null,vec__4410__4411,1,null);

var temp__3698__auto____4414 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4412);

if(cljs.core.truth_(temp__3698__auto____4414))
{var field__4415 = temp__3698__auto____4414;

return cljs.core.assoc.call(null,sum,field__4415,v__4413);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4416.call(this);
case  1 :
return xpc_connection__4417.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
