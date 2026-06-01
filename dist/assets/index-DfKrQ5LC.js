function Mx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Lx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $w={exports:{}},Lc={},zw={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),Vx=Symbol.for("react.portal"),Fx=Symbol.for("react.fragment"),Ux=Symbol.for("react.strict_mode"),jx=Symbol.for("react.profiler"),Bx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),zx=Symbol.for("react.forward_ref"),Wx=Symbol.for("react.suspense"),Hx=Symbol.for("react.memo"),qx=Symbol.for("react.lazy"),sy=Symbol.iterator;function Gx(t){return t===null||typeof t!="object"?null:(t=sy&&t[sy]||t["@@iterator"],typeof t=="function"?t:null)}var Ww={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hw=Object.assign,qw={};function io(t,e,n){this.props=t,this.context=e,this.refs=qw,this.updater=n||Ww}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gw(){}Gw.prototype=io.prototype;function Lp(t,e,n){this.props=t,this.context=e,this.refs=qw,this.updater=n||Ww}var Vp=Lp.prototype=new Gw;Vp.constructor=Lp;Hw(Vp,io.prototype);Vp.isPureReactComponent=!0;var oy=Array.isArray,Kw=Object.prototype.hasOwnProperty,Fp={current:null},Qw={key:!0,ref:!0,__self:!0,__source:!0};function Yw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kw.call(e,r)&&!Qw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:nl,type:t,key:s,ref:o,props:i,_owner:Fp.current}}function Kx(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function Qx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ay=/\/+/g;function nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qx(""+t.key):e.toString(36)}function lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case Vx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nd(o,0):r,oy(i)?(n="",t!=null&&(n=t.replace(ay,"$&/")+"/"),lu(i,e,n,"",function(c){return c})):i!=null&&(Up(i)&&(i=Kx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ay,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",oy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+nd(s,a);o+=lu(s,e,n,u,i)}else if(u=Gx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+nd(s,a++),o+=lu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Yx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},uu={transition:null},Xx={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Fp};function Xw(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=io;ie.Fragment=Fx;ie.Profiler=jx;ie.PureComponent=Lp;ie.StrictMode=Ux;ie.Suspense=Wx;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xx;ie.act=Xw;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Kw.call(e,u)&&!Qw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:nl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bx,_context:t},t.Consumer=t};ie.createElement=Yw;ie.createFactory=function(t){var e=Yw.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:zx,render:t}};ie.isValidElement=Up;ie.lazy=function(t){return{$$typeof:qx,_payload:{_status:-1,_result:t},_init:Yx}};ie.memo=function(t,e){return{$$typeof:Hx,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ie.unstable_act=Xw;ie.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ie.useContext=function(t){return Tt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ie.useId=function(){return Tt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ie.useRef=function(t){return Tt.current.useRef(t)};ie.useState=function(t){return Tt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Tt.current.useTransition()};ie.version="18.3.1";zw.exports=ie;var M=zw.exports;const Jw=Lx(M),Jx=Mx({__proto__:null,default:Jw},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=M,eR=Symbol.for("react.element"),tR=Symbol.for("react.fragment"),nR=Object.prototype.hasOwnProperty,rR=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iR={key:!0,ref:!0,__self:!0,__source:!0};function Zw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nR.call(e,r)&&!iR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eR,type:t,key:s,ref:o,props:i,_owner:rR.current}}Lc.Fragment=tR;Lc.jsx=Zw;Lc.jsxs=Zw;$w.exports=Lc;var w=$w.exports,eE={exports:{}},jt={},tE={exports:{}},nE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var G=$.length;$.push(Y);e:for(;0<G;){var ce=G-1>>>1,ye=$[ce];if(0<i(ye,Y))$[ce]=Y,$[G]=ye,G=ce;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],G=$.pop();if(G!==Y){$[0]=G;e:for(var ce=0,ye=$.length,Zt=ye>>>1;ce<Zt;){var St=2*(ce+1)-1,_i=$[St],en=St+1,pr=$[en];if(0>i(_i,G))en<ye&&0>i(pr,_i)?($[ce]=pr,$[en]=G,ce=en):($[ce]=_i,$[St]=G,ce=St);else if(en<ye&&0>i(pr,G))$[ce]=pr,$[en]=G,ce=en;else break e}}return Y}function i($,Y){var G=$.sortIndex-Y.sortIndex;return G!==0?G:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,E=!1,k=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function N($){if(A=!1,_($),!k)if(n(u)!==null)k=!0,mi(L);else{var Y=n(c);Y!==null&&gi(N,Y.startTime-$)}}function L($,Y){k=!1,A&&(A=!1,S(y),y=-1),E=!0;var G=m;try{for(_(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||$&&!R());){var ce=f.callback;if(typeof ce=="function"){f.callback=null,m=f.priorityLevel;var ye=ce(f.expirationTime<=Y);Y=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(u)&&r(u),_(Y)}else r(u);f=n(u)}if(f!==null)var Zt=!0;else{var St=n(c);St!==null&&gi(N,St.startTime-Y),Zt=!1}return Zt}finally{f=null,m=G,E=!1}}var U=!1,T=null,y=-1,I=5,x=-1;function R(){return!(t.unstable_now()-x<I)}function b(){if(T!==null){var $=t.unstable_now();x=$;var Y=!0;try{Y=T(!0,$)}finally{Y?C():(U=!1,T=null)}}else U=!1}var C;if(typeof v=="function")C=function(){v(b)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Dt=Ve.port2;Ve.port1.onmessage=b,C=function(){Dt.postMessage(null)}}else C=function(){P(b,0)};function mi($){T=$,U||(U=!0,C())}function gi($,Y){y=P(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){k||E||(k=!0,mi(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var G=m;m=Y;try{return $()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var G=m;m=$;try{return Y()}finally{m=G}},t.unstable_scheduleCallback=function($,Y,G){var ce=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ce+G:ce):G=ce,$){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=G+ye,$={id:d++,callback:Y,priorityLevel:$,startTime:G,expirationTime:ye,sortIndex:-1},G>ce?($.sortIndex=G,e(c,$),n(u)===null&&$===n(c)&&(A?(S(y),y=-1):A=!0,gi(N,G-ce))):($.sortIndex=ye,e(u,$),k||E||(k=!0,mi(L))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Y=m;return function(){var G=m;m=Y;try{return $.apply(this,arguments)}finally{m=G}}}})(nE);tE.exports=nE;var sR=tE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oR=M,Ut=sR;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rE=new Set,Sa={};function Yi(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Sa[t]=e,t=0;t<e.length;t++)rE.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,aR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ly={},uy={};function lR(t){return Jd.call(uy,t)?!0:Jd.call(ly,t)?!1:aR.test(t)?uy[t]=!0:(ly[t]=!0,!1)}function uR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cR(t,e,n,r){if(e===null||typeof e>"u"||uR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function Bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jp,Bp);st[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jp,Bp);st[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jp,Bp);st[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function $p(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cR(e,n,i,r)&&(n=null),r||i===null?lR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=oR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),gs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),oE=Symbol.for("react.offscreen"),cy=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=cy&&t[cy]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,rd;function Jo(t){if(rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rd=e&&e[1]||""}return`
`+rd+t}var id=!1;function sd(t,e){if(!t||id)return"";id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Jo(t):""}function hR(t){switch(t.tag){case 5:return Jo(t.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return t=sd(t.type,!1),t;case 11:return t=sd(t.type.render,!1),t;case 1:return t=sd(t.type,!0),t;default:return""}}function nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case gs:return"Portal";case Zd:return"Profiler";case zp:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sE:return(t.displayName||"Context")+".Consumer";case iE:return(t._context.displayName||"Context")+".Provider";case Wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hp:return e=t.displayName||null,e!==null?e:nf(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return nf(t(e))}catch{}}return null}function dR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fR(t){var e=aE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=fR(t))}function lE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rf(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uE(t,e){e=e.checked,e!=null&&$p(t,"checked",e,!1)}function sf(t,e){uE(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?of(t,e.type,n):e.hasOwnProperty("defaultValue")&&of(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function of(t,e,n){(e!=="number"||bu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zo=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Zo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function cE(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function py(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vl,dE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vl=Vl||document.createElement("div"),Vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pR=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){pR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function fE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function pE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mR=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uf(t,e){if(e){if(mR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var df=null,Ps=null,bs=null;function my(t){if(t=sl(t)){if(typeof df!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Bc(e),df(t.stateNode,t.type,e))}}function mE(t){Ps?bs?bs.push(t):bs=[t]:Ps=t}function gE(){if(Ps){var t=Ps,e=bs;if(bs=Ps=null,my(t),e)for(t=0;t<e.length;t++)my(e[t])}}function _E(t,e){return t(e)}function yE(){}var od=!1;function vE(t,e,n){if(od)return t(e,n);od=!0;try{return _E(t,e,n)}finally{od=!1,(Ps!==null||bs!==null)&&(yE(),gE())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ff=!1;if(Jn)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){ff=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{ff=!1}function gR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var aa=!1,Du=null,Ou=!1,pf=null,_R={onError:function(t){aa=!0,Du=t}};function yR(t,e,n,r,i,s,o,a,u){aa=!1,Du=null,gR.apply(_R,arguments)}function vR(t,e,n,r,i,s,o,a,u){if(yR.apply(this,arguments),aa){if(aa){var c=Du;aa=!1,Du=null}else throw Error(j(198));Ou||(Ou=!0,pf=c)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gy(t){if(Xi(t)!==t)throw Error(j(188))}function wR(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gy(i),t;if(s===r)return gy(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function EE(t){return t=wR(t),t!==null?TE(t):null}function TE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=TE(t);if(e!==null)return e;t=t.sibling}return null}var IE=Ut.unstable_scheduleCallback,_y=Ut.unstable_cancelCallback,ER=Ut.unstable_shouldYield,TR=Ut.unstable_requestPaint,Oe=Ut.unstable_now,IR=Ut.unstable_getCurrentPriorityLevel,Gp=Ut.unstable_ImmediatePriority,SE=Ut.unstable_UserBlockingPriority,Mu=Ut.unstable_NormalPriority,SR=Ut.unstable_LowPriority,CE=Ut.unstable_IdlePriority,Vc=null,xn=null;function CR(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:RR,kR=Math.log,xR=Math.LN2;function RR(t){return t>>>=0,t===0?32:31-(kR(t)/xR|0)|0}var Fl=64,Ul=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ea(a):(s&=o,s!==0&&(r=ea(s)))}else o=n&~i,o!==0?r=ea(o):s!==0&&(r=ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-hn(e),i=1<<n,r|=t[n],e&=~i;return r}function AR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-hn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=AR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kE(){var t=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),t}function ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hn(e),t[e]=n}function PR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function xE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var RE,Qp,AE,NE,PE,gf=!1,jl=[],Or=null,Mr=null,Lr=null,xa=new Map,Ra=new Map,Cr=[],bR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yy(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sl(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DR(t,e,n,r,i){switch(e){case"focusin":return Or=jo(Or,t,e,n,r,i),!0;case"dragenter":return Mr=jo(Mr,t,e,n,r,i),!0;case"mouseover":return Lr=jo(Lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xa.set(s,jo(xa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ra.set(s,jo(Ra.get(s)||null,t,e,n,r,i)),!0}return!1}function bE(t){var e=Ri(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=wE(n),e!==null){t.blockedOn=e,PE(t.priority,function(){AE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hf=r,n.target.dispatchEvent(r),hf=null}else return e=sl(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function vy(t,e,n){cu(t)&&n.delete(e)}function OR(){gf=!1,Or!==null&&cu(Or)&&(Or=null),Mr!==null&&cu(Mr)&&(Mr=null),Lr!==null&&cu(Lr)&&(Lr=null),xa.forEach(vy),Ra.forEach(vy)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,gf||(gf=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,OR)))}function Aa(t){function e(i){return Bo(i,t)}if(0<jl.length){Bo(jl[0],t);for(var n=1;n<jl.length;n++){var r=jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&Bo(Or,t),Mr!==null&&Bo(Mr,t),Lr!==null&&Bo(Lr,t),xa.forEach(e),Ra.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)bE(n),n.blockedOn===null&&Cr.shift()}var Ds=cr.ReactCurrentBatchConfig,Vu=!0;function MR(t,e,n,r){var i=fe,s=Ds.transition;Ds.transition=null;try{fe=1,Yp(t,e,n,r)}finally{fe=i,Ds.transition=s}}function LR(t,e,n,r){var i=fe,s=Ds.transition;Ds.transition=null;try{fe=4,Yp(t,e,n,r)}finally{fe=i,Ds.transition=s}}function Yp(t,e,n,r){if(Vu){var i=_f(t,e,n,r);if(i===null)_d(t,e,r,Fu,n),yy(t,r);else if(DR(i,t,e,n,r))r.stopPropagation();else if(yy(t,r),e&4&&-1<bR.indexOf(t)){for(;i!==null;){var s=sl(i);if(s!==null&&RE(s),s=_f(t,e,n,r),s===null&&_d(t,e,r,Fu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _d(t,e,r,null,n)}}var Fu=null;function _f(t,e,n,r){if(Fu=null,t=qp(r),t=Ri(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fu=t,null}function DE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IR()){case Gp:return 1;case SE:return 4;case Mu:case SR:return 16;case CE:return 536870912;default:return 16}default:return 16}}var Pr=null,Xp=null,hu=null;function OE(){if(hu)return hu;var t,e=Xp,n=e.length,r,i="value"in Pr?Pr.value:Pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function wy(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bl:wy,this.isPropagationStopped=wy,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Bt(so),il=Ne({},so,{view:0,detail:0}),VR=Bt(il),ld,ud,$o,Fc=Ne({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$o&&($o&&t.type==="mousemove"?(ld=t.screenX-$o.screenX,ud=t.screenY-$o.screenY):ud=ld=0,$o=t),ld)},movementY:function(t){return"movementY"in t?t.movementY:ud}}),Ey=Bt(Fc),FR=Ne({},Fc,{dataTransfer:0}),UR=Bt(FR),jR=Ne({},il,{relatedTarget:0}),cd=Bt(jR),BR=Ne({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),$R=Bt(BR),zR=Ne({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WR=Bt(zR),HR=Ne({},so,{data:0}),Ty=Bt(HR),qR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KR[t])?!!e[t]:!1}function Zp(){return QR}var YR=Ne({},il,{key:function(t){if(t.key){var e=qR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XR=Bt(YR),JR=Ne({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iy=Bt(JR),ZR=Ne({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),eA=Bt(ZR),tA=Ne({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),nA=Bt(tA),rA=Ne({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iA=Bt(rA),sA=[9,13,27,32],em=Jn&&"CompositionEvent"in window,la=null;Jn&&"documentMode"in document&&(la=document.documentMode);var oA=Jn&&"TextEvent"in window&&!la,ME=Jn&&(!em||la&&8<la&&11>=la),Sy=" ",Cy=!1;function LE(t,e){switch(t){case"keyup":return sA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function VE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function aA(t,e){switch(t){case"compositionend":return VE(e);case"keypress":return e.which!==32?null:(Cy=!0,Sy);case"textInput":return t=e.data,t===Sy&&Cy?null:t;default:return null}}function lA(t,e){if(ys)return t==="compositionend"||!em&&LE(t,e)?(t=OE(),hu=Xp=Pr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ME&&e.locale!=="ko"?null:e.data;default:return null}}var uA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ky(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uA[t.type]:e==="textarea"}function FE(t,e,n,r){mE(r),e=Uu(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,Na=null;function cA(t){QE(t,0)}function Uc(t){var e=Es(t);if(lE(e))return t}function hA(t,e){if(t==="change")return e}var UE=!1;if(Jn){var hd;if(Jn){var dd="oninput"in document;if(!dd){var xy=document.createElement("div");xy.setAttribute("oninput","return;"),dd=typeof xy.oninput=="function"}hd=dd}else hd=!1;UE=hd&&(!document.documentMode||9<document.documentMode)}function Ry(){ua&&(ua.detachEvent("onpropertychange",jE),Na=ua=null)}function jE(t){if(t.propertyName==="value"&&Uc(Na)){var e=[];FE(e,Na,t,qp(t)),vE(cA,e)}}function dA(t,e,n){t==="focusin"?(Ry(),ua=e,Na=n,ua.attachEvent("onpropertychange",jE)):t==="focusout"&&Ry()}function fA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(Na)}function pA(t,e){if(t==="click")return Uc(e)}function mA(t,e){if(t==="input"||t==="change")return Uc(e)}function gA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:gA;function Pa(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jd.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function Ay(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ny(t,e){var n=Ay(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ay(n)}}function BE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?BE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $E(){for(var t=window,e=bu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bu(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _A(t){var e=$E(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&BE(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ny(n,s);var o=Ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yA=Jn&&"documentMode"in document&&11>=document.documentMode,vs=null,yf=null,ca=null,vf=!1;function Py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||vs==null||vs!==bu(r)||(r=vs,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Pa(ca,r)||(ca=r,r=Uu(yf,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function $l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},fd={},zE={};Jn&&(zE=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function jc(t){if(fd[t])return fd[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zE)return fd[t]=e[n];return t}var WE=jc("animationend"),HE=jc("animationiteration"),qE=jc("animationstart"),GE=jc("transitionend"),KE=new Map,by="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(t,e){KE.set(t,e),Yi(e,[t])}for(var pd=0;pd<by.length;pd++){var md=by[pd],vA=md.toLowerCase(),wA=md[0].toUpperCase()+md.slice(1);ui(vA,"on"+wA)}ui(WE,"onAnimationEnd");ui(HE,"onAnimationIteration");ui(qE,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(GE,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Dy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vR(r,e,void 0,t),t.currentTarget=null}function QE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Dy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Dy(i,a,c),s=u}}}if(Ou)throw t=pf,Ou=!1,pf=null,t}function we(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var r=t+"__bubble";n.has(r)||(YE(e,t,2,!1),n.add(r))}function gd(t,e,n){var r=0;e&&(r|=4),YE(n,t,r,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[zl]){t[zl]=!0,rE.forEach(function(n){n!=="selectionchange"&&(EA.has(n)||gd(n,!1,t),gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,gd("selectionchange",!1,e))}}function YE(t,e,n,r){switch(DE(e)){case 1:var i=MR;break;case 4:i=LR;break;default:i=Yp}n=i.bind(null,e,n,t),i=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _d(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ri(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vE(function(){var c=s,d=qp(n),f=[];e:{var m=KE.get(t);if(m!==void 0){var E=Jp,k=t;switch(t){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":E=XR;break;case"focusin":k="focus",E=cd;break;case"focusout":k="blur",E=cd;break;case"beforeblur":case"afterblur":E=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Ey;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=UR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=eA;break;case WE:case HE:case qE:E=$R;break;case GE:E=nA;break;case"scroll":E=VR;break;case"wheel":E=iA;break;case"copy":case"cut":case"paste":E=WR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Iy}var A=(e&4)!==0,P=!A&&t==="scroll",S=A?m!==null?m+"Capture":null:m;A=[];for(var v=c,_;v!==null;){_=v;var N=_.stateNode;if(_.tag===5&&N!==null&&(_=N,S!==null&&(N=ka(v,S),N!=null&&A.push(Da(v,N,_)))),P)break;v=v.return}0<A.length&&(m=new E(m,k,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==hf&&(k=n.relatedTarget||n.fromElement)&&(Ri(k)||k[Zn]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(k=n.relatedTarget||n.toElement,E=c,k=k?Ri(k):null,k!==null&&(P=Xi(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(E=null,k=c),E!==k)){if(A=Ey,N="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=Iy,N="onPointerLeave",S="onPointerEnter",v="pointer"),P=E==null?m:Es(E),_=k==null?m:Es(k),m=new A(N,v+"leave",E,n,d),m.target=P,m.relatedTarget=_,N=null,Ri(d)===c&&(A=new A(S,v+"enter",k,n,d),A.target=_,A.relatedTarget=P,N=A),P=N,E&&k)t:{for(A=E,S=k,v=0,_=A;_;_=ls(_))v++;for(_=0,N=S;N;N=ls(N))_++;for(;0<v-_;)A=ls(A),v--;for(;0<_-v;)S=ls(S),_--;for(;v--;){if(A===S||S!==null&&A===S.alternate)break t;A=ls(A),S=ls(S)}A=null}else A=null;E!==null&&Oy(f,m,E,A,!1),k!==null&&P!==null&&Oy(f,P,k,A,!0)}}e:{if(m=c?Es(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var L=hA;else if(ky(m))if(UE)L=mA;else{L=fA;var U=dA}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=pA);if(L&&(L=L(t,c))){FE(f,L,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&of(m,"number",m.value)}switch(U=c?Es(c):window,t){case"focusin":(ky(U)||U.contentEditable==="true")&&(vs=U,yf=c,ca=null);break;case"focusout":ca=yf=vs=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,Py(f,n,d);break;case"selectionchange":if(yA)break;case"keydown":case"keyup":Py(f,n,d)}var T;if(em)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ys?LE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(ME&&n.locale!=="ko"&&(ys||y!=="onCompositionStart"?y==="onCompositionEnd"&&ys&&(T=OE()):(Pr=d,Xp="value"in Pr?Pr.value:Pr.textContent,ys=!0)),U=Uu(c,y),0<U.length&&(y=new Ty(y,t,null,n,d),f.push({event:y,listeners:U}),T?y.data=T:(T=VE(n),T!==null&&(y.data=T)))),(T=oA?aA(t,n):lA(t,n))&&(c=Uu(c,"onBeforeInput"),0<c.length&&(d=new Ty("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}QE(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ka(t,n),s!=null&&r.unshift(Da(t,s,i)),s=ka(t,e),s!=null&&r.push(Da(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ka(n,s),u!=null&&o.unshift(Da(n,u,a))):i||(u=ka(n,s),u!=null&&o.push(Da(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function My(t){return(typeof t=="string"?t:""+t).replace(TA,`
`).replace(IA,"")}function Wl(t,e,n){if(e=My(e),My(t)!==e&&n)throw Error(j(425))}function ju(){}var wf=null,Ef=null;function Tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,SA=typeof clearTimeout=="function"?clearTimeout:void 0,Ly=typeof Promise=="function"?Promise:void 0,CA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ly<"u"?function(t){return Ly.resolve(null).then(t).catch(kA)}:If;function kA(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),Sn="__reactFiber$"+oo,Oa="__reactProps$"+oo,Zn="__reactContainer$"+oo,Sf="__reactEvents$"+oo,xA="__reactListeners$"+oo,RA="__reactHandles$"+oo;function Ri(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vy(t);t!==null;){if(n=t[Sn])return n;t=Vy(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[Sn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Bc(t){return t[Oa]||null}var Cf=[],Ts=-1;function ci(t){return{current:t}}function Se(t){0>Ts||(t.current=Cf[Ts],Cf[Ts]=null,Ts--)}function _e(t,e){Ts++,Cf[Ts]=t.current,t.current=e}var Xr={},gt=ci(Xr),At=ci(!1),Fi=Xr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function Bu(){Se(At),Se(gt)}function Fy(t,e,n){if(gt.current!==Xr)throw Error(j(168));_e(gt,e),_e(At,n)}function XE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,dR(t)||"Unknown",i));return Ne({},n,r)}function $u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,Fi=gt.current,_e(gt,t),_e(At,At.current),!0}function Uy(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=XE(t,e,Fi),r.__reactInternalMemoizedMergedChildContext=t,Se(At),Se(gt),_e(gt,t)):Se(At),_e(At,n)}var $n=null,$c=!1,vd=!1;function JE(t){$n===null?$n=[t]:$n.push(t)}function AA(t){$c=!0,JE(t)}function hi(){if(!vd&&$n!==null){vd=!0;var t=0,e=fe;try{var n=$n;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,$c=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),IE(Gp,hi),i}finally{fe=e,vd=!1}}return null}var Is=[],Ss=0,zu=null,Wu=0,$t=[],zt=0,Ui=null,zn=1,Wn="";function Ii(t,e){Is[Ss++]=Wu,Is[Ss++]=zu,zu=t,Wu=e}function ZE(t,e,n){$t[zt++]=zn,$t[zt++]=Wn,$t[zt++]=Ui,Ui=t;var r=zn;t=Wn;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-hn(e)+i|n<<i|r,Wn=s+t}else zn=1<<s|n<<i|r,Wn=t}function nm(t){t.return!==null&&(Ii(t,1),ZE(t,1,0))}function rm(t){for(;t===zu;)zu=Is[--Ss],Is[Ss]=null,Wu=Is[--Ss],Is[Ss]=null;for(;t===Ui;)Ui=$t[--zt],$t[zt]=null,Wn=$t[--zt],$t[zt]=null,zn=$t[--zt],$t[zt]=null}var Ft=null,Vt=null,ke=!1,sn=null;function eT(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Vt=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ui!==null?{id:zn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Vt=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xf(t){if(ke){var e=Vt;if(e){var n=e;if(!jy(t,e)){if(kf(t))throw Error(j(418));e=Vr(n.nextSibling);var r=Ft;e&&jy(t,e)?eT(r,n):(t.flags=t.flags&-4097|2,ke=!1,Ft=t)}}else{if(kf(t))throw Error(j(418));t.flags=t.flags&-4097|2,ke=!1,Ft=t}}}function By(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function Hl(t){if(t!==Ft)return!1;if(!ke)return By(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tf(t.type,t.memoizedProps)),e&&(e=Vt)){if(kf(t))throw tT(),Error(j(418));for(;e;)eT(t,e),e=Vr(e.nextSibling)}if(By(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ft?Vr(t.stateNode.nextSibling):null;return!0}function tT(){for(var t=Vt;t;)t=Vr(t.nextSibling)}function Hs(){Vt=Ft=null,ke=!1}function im(t){sn===null?sn=[t]:sn.push(t)}var NA=cr.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $y(t){var e=t._init;return e(t._payload)}function nT(t){function e(S,v){if(t){var _=S.deletions;_===null?(S.deletions=[v],S.flags|=16):_.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=Br(S,v),S.index=0,S.sibling=null,S}function s(S,v,_){return S.index=_,t?(_=S.alternate,_!==null?(_=_.index,_<v?(S.flags|=2,v):_):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,v,_,N){return v===null||v.tag!==6?(v=kd(_,S.mode,N),v.return=S,v):(v=i(v,_),v.return=S,v)}function u(S,v,_,N){var L=_.type;return L===_s?d(S,v,_.props.children,N,_.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ir&&$y(L)===v.type)?(N=i(v,_.props),N.ref=zo(S,v,_),N.return=S,N):(N=vu(_.type,_.key,_.props,null,S.mode,N),N.ref=zo(S,v,_),N.return=S,N)}function c(S,v,_,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=xd(_,S.mode,N),v.return=S,v):(v=i(v,_.children||[]),v.return=S,v)}function d(S,v,_,N,L){return v===null||v.tag!==7?(v=Mi(_,S.mode,N,L),v.return=S,v):(v=i(v,_),v.return=S,v)}function f(S,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kd(""+v,S.mode,_),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ml:return _=vu(v.type,v.key,v.props,null,S.mode,_),_.ref=zo(S,null,v),_.return=S,_;case gs:return v=xd(v,S.mode,_),v.return=S,v;case Ir:var N=v._init;return f(S,N(v._payload),_)}if(Zo(v)||Fo(v))return v=Mi(v,S.mode,_,null),v.return=S,v;ql(S,v)}return null}function m(S,v,_,N){var L=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:a(S,v,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return _.key===L?u(S,v,_,N):null;case gs:return _.key===L?c(S,v,_,N):null;case Ir:return L=_._init,m(S,v,L(_._payload),N)}if(Zo(_)||Fo(_))return L!==null?null:d(S,v,_,N,null);ql(S,_)}return null}function E(S,v,_,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(_)||null,a(v,S,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ml:return S=S.get(N.key===null?_:N.key)||null,u(v,S,N,L);case gs:return S=S.get(N.key===null?_:N.key)||null,c(v,S,N,L);case Ir:var U=N._init;return E(S,v,_,U(N._payload),L)}if(Zo(N)||Fo(N))return S=S.get(_)||null,d(v,S,N,L,null);ql(v,N)}return null}function k(S,v,_,N){for(var L=null,U=null,T=v,y=v=0,I=null;T!==null&&y<_.length;y++){T.index>y?(I=T,T=null):I=T.sibling;var x=m(S,T,_[y],N);if(x===null){T===null&&(T=I);break}t&&T&&x.alternate===null&&e(S,T),v=s(x,v,y),U===null?L=x:U.sibling=x,U=x,T=I}if(y===_.length)return n(S,T),ke&&Ii(S,y),L;if(T===null){for(;y<_.length;y++)T=f(S,_[y],N),T!==null&&(v=s(T,v,y),U===null?L=T:U.sibling=T,U=T);return ke&&Ii(S,y),L}for(T=r(S,T);y<_.length;y++)I=E(T,S,y,_[y],N),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?y:I.key),v=s(I,v,y),U===null?L=I:U.sibling=I,U=I);return t&&T.forEach(function(R){return e(S,R)}),ke&&Ii(S,y),L}function A(S,v,_,N){var L=Fo(_);if(typeof L!="function")throw Error(j(150));if(_=L.call(_),_==null)throw Error(j(151));for(var U=L=null,T=v,y=v=0,I=null,x=_.next();T!==null&&!x.done;y++,x=_.next()){T.index>y?(I=T,T=null):I=T.sibling;var R=m(S,T,x.value,N);if(R===null){T===null&&(T=I);break}t&&T&&R.alternate===null&&e(S,T),v=s(R,v,y),U===null?L=R:U.sibling=R,U=R,T=I}if(x.done)return n(S,T),ke&&Ii(S,y),L;if(T===null){for(;!x.done;y++,x=_.next())x=f(S,x.value,N),x!==null&&(v=s(x,v,y),U===null?L=x:U.sibling=x,U=x);return ke&&Ii(S,y),L}for(T=r(S,T);!x.done;y++,x=_.next())x=E(T,S,y,x.value,N),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?y:x.key),v=s(x,v,y),U===null?L=x:U.sibling=x,U=x);return t&&T.forEach(function(b){return e(S,b)}),ke&&Ii(S,y),L}function P(S,v,_,N){if(typeof _=="object"&&_!==null&&_.type===_s&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:e:{for(var L=_.key,U=v;U!==null;){if(U.key===L){if(L=_.type,L===_s){if(U.tag===7){n(S,U.sibling),v=i(U,_.props.children),v.return=S,S=v;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ir&&$y(L)===U.type){n(S,U.sibling),v=i(U,_.props),v.ref=zo(S,U,_),v.return=S,S=v;break e}n(S,U);break}else e(S,U);U=U.sibling}_.type===_s?(v=Mi(_.props.children,S.mode,N,_.key),v.return=S,S=v):(N=vu(_.type,_.key,_.props,null,S.mode,N),N.ref=zo(S,v,_),N.return=S,S=N)}return o(S);case gs:e:{for(U=_.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(S,v.sibling),v=i(v,_.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else e(S,v);v=v.sibling}v=xd(_,S.mode,N),v.return=S,S=v}return o(S);case Ir:return U=_._init,P(S,v,U(_._payload),N)}if(Zo(_))return k(S,v,_,N);if(Fo(_))return A(S,v,_,N);ql(S,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,_),v.return=S,S=v):(n(S,v),v=kd(_,S.mode,N),v.return=S,S=v),o(S)):n(S,v)}return P}var qs=nT(!0),rT=nT(!1),Hu=ci(null),qu=null,Cs=null,sm=null;function om(){sm=Cs=qu=null}function am(t){var e=Hu.current;Se(Hu),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){qu=t,sm=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(qu===null)throw Error(j(308));Cs=t,qu.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Ai=null;function lm(t){Ai===null?Ai=[t]:Ai.push(t)}function iT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function zy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gu(t,e,n,r){var i=t.updateQueue;Sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,E=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=t,A=a;switch(m=e,E=n,A.tag){case 1:if(k=A.payload,typeof k=="function"){f=k.call(E,f,m);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=A.payload,m=typeof k=="function"?k.call(E,f,m):k,m==null)break e;f=Ne({},f,m);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else E={eventTime:E,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bi|=o,t.lanes=o,t.memoizedState=f}}function Wy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ol={},Rn=ci(ol),Ma=ci(ol),La=ci(ol);function Ni(t){if(t===ol)throw Error(j(174));return t}function cm(t,e){switch(_e(La,e),_e(Ma,t),_e(Rn,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lf(e,t)}Se(Rn),_e(Rn,e)}function Gs(){Se(Rn),Se(Ma),Se(La)}function oT(t){Ni(La.current);var e=Ni(Rn.current),n=lf(e,t.type);e!==n&&(_e(Ma,t),_e(Rn,n))}function hm(t){Ma.current===t&&(Se(Rn),Se(Ma))}var xe=ci(0);function Ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function dm(){for(var t=0;t<wd.length;t++)wd[t]._workInProgressVersionPrimary=null;wd.length=0}var pu=cr.ReactCurrentDispatcher,Ed=cr.ReactCurrentBatchConfig,ji=0,Re=null,ze=null,Xe=null,Qu=!1,ha=!1,Va=0,PA=0;function lt(){throw Error(j(321))}function fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,s){if(ji=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?MA:LA,t=n(r,i),ha){s=0;do{if(ha=!1,Va=0,25<=s)throw Error(j(301));s+=1,Xe=ze=null,e.updateQueue=null,pu.current=VA,t=n(r,i)}while(ha)}if(pu.current=Yu,e=ze!==null&&ze.next!==null,ji=0,Xe=ze=Re=null,Qu=!1,e)throw Error(j(300));return t}function mm(){var t=Va!==0;return Va=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Xt(){if(ze===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Xe===null?Re.memoizedState:Xe.next;if(e!==null)Xe=e,ze=t;else{if(t===null)throw Error(j(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Fa(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((ji&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Re.lanes|=d,Bi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,gn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Id(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aT(){}function lT(t,e){var n=Re,r=Xt(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,gm(hT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Ua(9,cT.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(j(349));ji&30||uT(n,e,i)}return i}function uT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cT(t,e,n,r){e.value=n,e.getSnapshot=r,dT(e)&&fT(t)}function hT(t,e,n){return n(function(){dT(e)&&fT(t)})}function dT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function fT(t){var e=er(t,1);e!==null&&dn(e,t,1,-1)}function Hy(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=OA.bind(null,Re,t),[e.memoizedState,t]}function Ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pT(){return Xt().memoizedState}function mu(t,e,n,r){var i=En();Re.flags|=t,i.memoizedState=Ua(1|e,n,void 0,r===void 0?null:r)}function zc(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&fm(r,o.deps)){i.memoizedState=Ua(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Ua(1|e,n,s,r)}function qy(t,e){return mu(8390656,8,t,e)}function gm(t,e){return zc(2048,8,t,e)}function mT(t,e){return zc(4,2,t,e)}function gT(t,e){return zc(4,4,t,e)}function _T(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yT(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,_T.bind(null,e,t),n)}function _m(){}function vT(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wT(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ET(t,e,n){return ji&21?(gn(n,e)||(n=kE(),Re.lanes|=n,Bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function bA(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Ed.transition;Ed.transition={};try{t(!1),e()}finally{fe=n,Ed.transition=r}}function TT(){return Xt().memoizedState}function DA(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},IT(t))ST(e,n);else if(n=iT(t,e,n,r),n!==null){var i=Et();dn(n,t,r,i),CT(n,e,r)}}function OA(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(IT(t))ST(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var u=e.interleaved;u===null?(i.next=i,lm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=iT(t,e,i,r),n!==null&&(i=Et(),dn(n,t,r,i),CT(n,e,r))}}function IT(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function ST(t,e){ha=Qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function CT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var Yu={readContext:Yt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},MA={readContext:Yt,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:qy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,_T.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DA.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Hy,useDebugValue:_m,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Hy(!1),e=t[0];return t=bA.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=En();if(ke){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ze===null)throw Error(j(349));ji&30||uT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qy(hT.bind(null,r,s,t),[t]),r.flags|=2048,Ua(9,cT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Ze.identifierPrefix;if(ke){var n=Wn,r=zn;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LA={readContext:Yt,useCallback:vT,useContext:Yt,useEffect:gm,useImperativeHandle:yT,useInsertionEffect:mT,useLayoutEffect:gT,useMemo:wT,useReducer:Td,useRef:pT,useState:function(){return Td(Fa)},useDebugValue:_m,useDeferredValue:function(t){var e=Xt();return ET(e,ze.memoizedState,t)},useTransition:function(){var t=Td(Fa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:aT,useSyncExternalStore:lT,useId:TT,unstable_isNewReconciler:!1},VA={readContext:Yt,useCallback:vT,useContext:Yt,useEffect:gm,useImperativeHandle:yT,useInsertionEffect:mT,useLayoutEffect:gT,useMemo:wT,useReducer:Id,useRef:pT,useState:function(){return Id(Fa)},useDebugValue:_m,useDeferredValue:function(t){var e=Xt();return ze===null?e.memoizedState=t:ET(e,ze.memoizedState,t)},useTransition:function(){var t=Id(Fa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:aT,useSyncExternalStore:lT,useId:TT,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Af(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=jr(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(dn(e,t,i,r),fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=jr(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(dn(e,t,i,r),fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=jr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(dn(e,t,r,n),fu(e,t,r))}};function Gy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,r)||!Pa(i,s):!0}function kT(t,e,n){var r=!1,i=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Nt(e)?Fi:gt.current,r=e.contextTypes,s=(r=r!=null)?Ws(t,i):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ky(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Nt(e)?Fi:gt.current,i.context=Ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Af(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wc.enqueueReplaceState(i,i.state,null),Gu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e){try{var n="",r=e;do n+=hR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FA=typeof WeakMap=="function"?WeakMap:Map;function xT(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ju||(Ju=!0,Bf=r),Pf(t,e)},n}function RT(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pf(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JA.bind(null,t,e,n),e.then(t,t))}function Yy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var UA=cr.ReactCurrentOwner,xt=!1;function wt(t,e,n,r){e.child=t===null?rT(e,null,n,r):qs(e,t.child,n,r)}function Jy(t,e,n,r,i){n=n.render;var s=e.ref;return Os(e,i),r=pm(t,e,n,r,s,i),n=mm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(ke&&n&&nm(e),e.flags|=1,wt(t,e,r,i),e.child)}function Zy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,AT(t,e,s,r,i)):(t=vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function AT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pa(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return bf(t,e,n,r,i)}function NT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(xs,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(xs,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(xs,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(xs,Mt),Mt|=r;return wt(t,e,i,n),e.child}function PT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bf(t,e,n,r,i){var s=Nt(n)?Fi:gt.current;return s=Ws(e,s),Os(e,i),n=pm(t,e,n,r,s,i),r=mm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(ke&&r&&nm(e),e.flags|=1,wt(t,e,n,i),e.child)}function ev(t,e,n,r,i){if(Nt(n)){var s=!0;$u(e)}else s=!1;if(Os(e,i),e.stateNode===null)gu(t,e),kT(e,n,r),Nf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=Nt(n)?Fi:gt.current,c=Ws(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ky(e,o,r,c),Sr=!1;var m=e.memoizedState;o.state=m,Gu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||At.current||Sr?(typeof d=="function"&&(Af(e,n,d,r),u=e.memoizedState),(a=Sr||Gy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:nn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=Nt(n)?Fi:gt.current,u=Ws(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Ky(e,o,r,u),Sr=!1,m=e.memoizedState,o.state=m,Gu(e,r,o,i);var k=e.memoizedState;a!==f||m!==k||At.current||Sr?(typeof E=="function"&&(Af(e,n,E,r),k=e.memoizedState),(c=Sr||Gy(e,n,c,r,m,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,s,i)}function Df(t,e,n,r,i,s){PT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uy(e,n,!1),tr(t,e,s);r=e.stateNode,UA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&Uy(e,n,!0),e.child}function bT(t){var e=t.stateNode;e.pendingContext?Fy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fy(t,e.context,!1),cm(t,e.containerInfo)}function tv(t,e,n,r,i){return Hs(),im(i),e.flags|=256,wt(t,e,n,r),e.child}var Of={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function DT(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(xe,i&1),t===null)return xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=Mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mf(n),e.memoizedState=Of,t):ym(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Of,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ym(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gl(t,e,n,r){return r!==null&&im(r),qs(e,t.child,null,n),t=ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sd(Error(j(422))),Gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=Mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Mf(o),e.memoizedState=Of,s);if(!(e.mode&1))return Gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Sd(s,r,void 0),Gl(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),dn(r,t,i,-1))}return Sm(),r=Sd(Error(j(421))),Gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Vr(i.nextSibling),Ft=e,ke=!0,sn=null,t!==null&&($t[zt++]=zn,$t[zt++]=Wn,$t[zt++]=Ui,zn=t.id,Wn=t.overflow,Ui=e),e=ym(e,r.children),e.flags|=4096,e)}function nv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rf(t.return,e,n)}function Cd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function OT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nv(t,n,e);else if(t.tag===19)nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ku(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ku(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cd(e,!0,n,null,s);break;case"together":Cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BA(t,e,n){switch(e.tag){case 3:bT(e),Hs();break;case 5:oT(e);break;case 1:Nt(e.type)&&$u(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?DT(t,e,n):(_e(xe,xe.current&1),t=tr(t,e,n),t!==null?t.sibling:null);_e(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return OT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,NT(t,e,n)}return tr(t,e,n)}var MT,Lf,LT,VT;MT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};LT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ni(Rn.current);var s=null;switch(n){case"input":i=rf(t,i),r=rf(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=af(t,i),r=af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ju)}uf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};VT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wo(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $A(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Nt(e.type)&&Bu(),ut(e),null;case 3:return r=e.stateNode,Gs(),Se(At),Se(gt),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Wf(sn),sn=null))),Lf(t,e),ut(e),null;case 5:hm(e);var i=Ni(La.current);if(n=e.type,t!==null&&e.stateNode!=null)LT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ut(e),null}if(t=Ni(Rn.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ta.length;i++)we(ta[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":hy(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":fy(r,s),we("invalid",r)}uf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(r.textContent,a,t),i=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ll(r),dy(r,s,!0);break;case"textarea":Ll(r),py(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ju)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Oa]=r,MT(t,e,!1,!1),e.stateNode=t;e:{switch(o=cf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<ta.length;i++)we(ta[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":hy(t,r),i=rf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),we("invalid",t);break;case"textarea":fy(t,r),i=af(t,r),we("invalid",t);break;default:i=r}uf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?pE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ca(t,u):typeof u=="number"&&Ca(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&$p(t,s,u,o))}switch(n){case"input":Ll(t),dy(t,r,!1);break;case"textarea":Ll(t),py(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)VT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Ni(La.current),Ni(Rn.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:Wl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return ut(e),null;case 13:if(Se(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Vt!==null&&e.mode&1&&!(e.flags&128))tT(),Hs(),e.flags|=98560,s=!1;else if(s=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Sn]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else sn!==null&&(Wf(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?He===0&&(He=3):Sm())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Gs(),Lf(t,e),t===null&&ba(e.stateNode.containerInfo),ut(e),null;case 10:return am(e.type._context),ut(e),null;case 17:return Nt(e.type)&&Bu(),ut(e),null;case 19:if(Se(xe),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wo(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ku(t),o!==null){for(e.flags|=128,Wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>Qs&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ku(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return ut(e),null}else 2*Oe()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=xe.current,_e(xe,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function zA(t,e){switch(rm(e),e.tag){case 1:return Nt(e.type)&&Bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Se(At),Se(gt),dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(Se(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(xe),null;case 4:return Gs(),null;case 10:return am(e.type._context),null;case 22:case 23:return Im(),null;case 24:return null;default:return null}}var Kl=!1,dt=!1,WA=typeof WeakSet=="function"?WeakSet:Set,q=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Vf(t,e,n){try{n()}catch(r){be(t,e,r)}}var rv=!1;function HA(t,e){if(wf=Vu,t=$E(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ef={focusedElem:t,selectionRange:n},Vu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var A=k.memoizedProps,P=k.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?A:nn(e.type,A),P);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){be(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return k=rv,rv=!1,k}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vf(e,n,s)}i=i.next}while(i!==r)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function FT(t){var e=t.alternate;e!==null&&(t.alternate=null,FT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Oa],delete e[Sf],delete e[xA],delete e[RA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UT(t){return t.tag===5||t.tag===3||t.tag===4}function iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ju));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}var et=null,rn=!1;function Er(t,e,n){for(n=n.child;n!==null;)jT(t,e,n),n=n.sibling}function jT(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:dt||ks(n,e);case 6:var r=et,i=rn;et=null,Er(t,e,n),et=r,rn=i,et!==null&&(rn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(rn?(t=et,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),Aa(t)):yd(et,n.stateNode));break;case 4:r=et,i=rn,et=n.stateNode.containerInfo,rn=!0,Er(t,e,n),et=r,rn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vf(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!dt&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Er(t,e,n),dt=r):Er(t,e,n);break;default:Er(t,e,n)}}function sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WA),e.forEach(function(r){var i=e1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,rn=!1;break e;case 3:et=a.stateNode.containerInfo,rn=!0;break e;case 4:et=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(et===null)throw Error(j(160));jT(s,o,i),et=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BT(e,t),e=e.sibling}function BT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),wn(t),r&4){try{da(3,t,t.return),Hc(3,t)}catch(A){be(t,t.return,A)}try{da(5,t,t.return)}catch(A){be(t,t.return,A)}}break;case 1:tn(e,t),wn(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(tn(e,t),wn(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var i=t.stateNode;try{Ca(i,"")}catch(A){be(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uE(i,s),cf(a,o);var c=cf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?pE(i,f):d==="dangerouslySetInnerHTML"?dE(i,f):d==="children"?Ca(i,f):$p(i,d,f,c)}switch(a){case"input":sf(i,s);break;case"textarea":cE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Ns(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ns(i,!!s.multiple,s.defaultValue,!0):Ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oa]=s}catch(A){be(t,t.return,A)}}break;case 6:if(tn(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){be(t,t.return,A)}}break;case 3:if(tn(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(A){be(t,t.return,A)}break;case 4:tn(e,t),wn(t);break;case 13:tn(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Em=Oe())),r&4&&sv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(c=dt)||d,tn(e,t),dt=c):tn(e,t),wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,E=m.child,m.tag){case 0:case 11:case 14:case 15:da(4,m,m.return);break;case 1:ks(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(A){be(r,n,A)}}break;case 5:ks(m,m.return);break;case 22:if(m.memoizedState!==null){av(f);continue}}E!==null?(E.return=m,q=E):av(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=fE("display",o))}catch(A){be(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){be(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(e,t),wn(t),r&4&&sv(t);break;case 21:break;default:tn(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UT(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ca(i,""),r.flags&=-33);var s=iv(t);jf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iv(t);Uf(t,a,o);break;default:throw Error(j(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qA(t,e,n){q=t,$T(t)}function $T(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Kl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||dt;a=Kl;var c=dt;if(Kl=o,(dt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?lv(i):u!==null?(u.return=o,q=u):lv(i);for(;s!==null;)q=s,$T(s),s=s.sibling;q=i,Kl=a,dt=c}ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):ov(t)}}function ov(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}dt||e.flags&512&&Ff(e)}catch(m){be(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function av(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function lv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{Ff(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{Ff(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var GA=Math.ceil,Xu=cr.ReactCurrentDispatcher,vm=cr.ReactCurrentOwner,Kt=cr.ReactCurrentBatchConfig,ue=0,Ze=null,Ue=null,it=0,Mt=0,xs=ci(0),He=0,ja=null,Bi=0,qc=0,wm=0,fa=null,kt=null,Em=0,Qs=1/0,Bn=null,Ju=!1,Bf=null,Ur=null,Ql=!1,br=null,Zu=0,pa=0,$f=null,_u=-1,yu=0;function Et(){return ue&6?Oe():_u!==-1?_u:_u=Oe()}function jr(t){return t.mode&1?ue&2&&it!==0?it&-it:NA.transition!==null?(yu===0&&(yu=kE()),yu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:DE(t.type)),t):1}function dn(t,e,n,r){if(50<pa)throw pa=0,$f=null,Error(j(185));rl(t,n,r),(!(ue&2)||t!==Ze)&&(t===Ze&&(!(ue&2)&&(qc|=n),He===4&&kr(t,it)),Pt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Qs=Oe()+500,$c&&hi()))}function Pt(t,e){var n=t.callbackNode;NR(t,e);var r=Lu(t,t===Ze?it:0);if(r===0)n!==null&&_y(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_y(n),e===1)t.tag===0?AA(uv.bind(null,t)):JE(uv.bind(null,t)),CA(function(){!(ue&6)&&hi()}),n=null;else{switch(xE(r)){case 1:n=Gp;break;case 4:n=SE;break;case 16:n=Mu;break;case 536870912:n=CE;break;default:n=Mu}n=YT(n,zT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zT(t,e){if(_u=-1,yu=0,ue&6)throw Error(j(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var r=Lu(t,t===Ze?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=ue;ue|=2;var s=HT();(Ze!==t||it!==e)&&(Bn=null,Qs=Oe()+500,Oi(t,e));do try{YA();break}catch(a){WT(t,a)}while(!0);om(),Xu.current=s,ue=i,Ue!==null?e=0:(Ze=null,it=0,e=He)}if(e!==0){if(e===2&&(i=mf(t),i!==0&&(r=i,e=zf(t,i))),e===1)throw n=ja,Oi(t,0),kr(t,r),Pt(t,Oe()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!KA(i)&&(e=ec(t,r),e===2&&(s=mf(t),s!==0&&(r=s,e=zf(t,s))),e===1))throw n=ja,Oi(t,0),kr(t,r),Pt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Si(t,kt,Bn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=Em+500-Oe(),10<e)){if(Lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=If(Si.bind(null,t,kt,Bn),e);break}Si(t,kt,Bn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GA(r/1960))-r,10<r){t.timeoutHandle=If(Si.bind(null,t,kt,Bn),r);break}Si(t,kt,Bn);break;case 5:Si(t,kt,Bn);break;default:throw Error(j(329))}}}return Pt(t,Oe()),t.callbackNode===n?zT.bind(null,t):null}function zf(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Oi(t,e).flags|=256),t=ec(t,e),t!==2&&(e=kt,kt=n,e!==null&&Wf(e)),t}function Wf(t){kt===null?kt=t:kt.push.apply(kt,t)}function KA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~wm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hn(e),r=1<<n;t[n]=-1,e&=~r}}function uv(t){if(ue&6)throw Error(j(327));Ms();var e=Lu(t,0);if(!(e&1))return Pt(t,Oe()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=mf(t);r!==0&&(e=r,n=zf(t,r))}if(n===1)throw n=ja,Oi(t,0),kr(t,e),Pt(t,Oe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,kt,Bn),Pt(t,Oe()),null}function Tm(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Qs=Oe()+500,$c&&hi())}}function $i(t){br!==null&&br.tag===0&&!(ue&6)&&Ms();var e=ue;ue|=1;var n=Kt.transition,r=fe;try{if(Kt.transition=null,fe=1,t)return t()}finally{fe=r,Kt.transition=n,ue=e,!(ue&6)&&hi()}}function Im(){Mt=xs.current,Se(xs)}function Oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SA(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bu();break;case 3:Gs(),Se(At),Se(gt),dm();break;case 5:hm(r);break;case 4:Gs();break;case 13:Se(xe);break;case 19:Se(xe);break;case 10:am(r.type._context);break;case 22:case 23:Im()}n=n.return}if(Ze=t,Ue=t=Br(t.current,null),it=Mt=e,He=0,ja=null,wm=qc=Bi=0,kt=fa=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function WT(t,e){do{var n=Ue;try{if(om(),pu.current=Yu,Qu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qu=!1}if(ji=0,Xe=ze=Re=null,ha=!1,Va=0,vm.current=null,n===null||n.return===null){He=1,ja=e,Ue=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=it,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Yy(o);if(E!==null){E.flags&=-257,Xy(E,o,a,s,e),E.mode&1&&Qy(s,c,e),e=E,u=c;var k=e.updateQueue;if(k===null){var A=new Set;A.add(u),e.updateQueue=A}else k.add(u);break e}else{if(!(e&1)){Qy(s,c,e),Sm();break e}u=Error(j(426))}}else if(ke&&a.mode&1){var P=Yy(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Xy(P,o,a,s,e),im(Ks(u,a));break e}}s=u=Ks(u,a),He!==4&&(He=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=xT(s,u,e);zy(s,S);break e;case 1:a=u;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ur===null||!Ur.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=RT(s,a,e);zy(s,N);break e}}s=s.return}while(s!==null)}GT(n)}catch(L){e=L,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function HT(){var t=Xu.current;return Xu.current=Yu,t===null?Yu:t}function Sm(){(He===0||He===3||He===2)&&(He=4),Ze===null||!(Bi&268435455)&&!(qc&268435455)||kr(Ze,it)}function ec(t,e){var n=ue;ue|=2;var r=HT();(Ze!==t||it!==e)&&(Bn=null,Oi(t,e));do try{QA();break}catch(i){WT(t,i)}while(!0);if(om(),ue=n,Xu.current=r,Ue!==null)throw Error(j(261));return Ze=null,it=0,He}function QA(){for(;Ue!==null;)qT(Ue)}function YA(){for(;Ue!==null&&!ER();)qT(Ue)}function qT(t){var e=QT(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?GT(t):Ue=e,vm.current=null}function GT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zA(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Ue=null;return}}else if(n=$A(n,e,Mt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);He===0&&(He=5)}function Si(t,e,n){var r=fe,i=Kt.transition;try{Kt.transition=null,fe=1,XA(t,e,n,r)}finally{Kt.transition=i,fe=r}return null}function XA(t,e,n,r){do Ms();while(br!==null);if(ue&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PR(t,s),t===Ze&&(Ue=Ze=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,YT(Mu,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=fe;fe=1;var a=ue;ue|=4,vm.current=null,HA(t,n),BT(n,t),_A(Ef),Vu=!!wf,Ef=wf=null,t.current=n,qA(n),TR(),ue=a,fe=o,Kt.transition=s}else t.current=n;if(Ql&&(Ql=!1,br=t,Zu=i),s=t.pendingLanes,s===0&&(Ur=null),CR(n.stateNode),Pt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ju)throw Ju=!1,t=Bf,Bf=null,t;return Zu&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===$f?pa++:(pa=0,$f=t):pa=0,hi(),null}function Ms(){if(br!==null){var t=xE(Zu),e=Kt.transition,n=fe;try{if(Kt.transition=null,fe=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,Zu=0,ue&6)throw Error(j(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:da(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,E=d.return;if(FT(d),d===c){q=null;break}if(m!==null){m.return=E,q=m;break}q=E}}}var k=s.alternate;if(k!==null){var A=k.child;if(A!==null){k.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,q=_;else e:for(o=v;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(L){be(a,a.return,L)}if(a===o){q=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,q=N;break e}q=a.return}}if(ue=i,hi(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Vc,t)}catch{}r=!0}return r}finally{fe=n,Kt.transition=e}}return!1}function cv(t,e,n){e=Ks(n,e),e=xT(t,e,1),t=Fr(t,e,1),e=Et(),t!==null&&(rl(t,1,e),Pt(t,e))}function be(t,e,n){if(t.tag===3)cv(t,t,n);else for(;e!==null;){if(e.tag===3){cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Ks(n,t),t=RT(e,t,1),e=Fr(e,t,1),t=Et(),e!==null&&(rl(e,1,t),Pt(e,t));break}}e=e.return}}function JA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(it&n)===n&&(He===4||He===3&&(it&130023424)===it&&500>Oe()-Em?Oi(t,0):wm|=n),Pt(t,e)}function KT(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=Et();t=er(t,e),t!==null&&(rl(t,e,n),Pt(t,n))}function ZA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KT(t,n)}function e1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),KT(t,n)}var QT;QT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,BA(t,e,n);xt=!!(t.flags&131072)}else xt=!1,ke&&e.flags&1048576&&ZE(e,Wu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=Ws(e,gt.current);Os(e,n),i=pm(null,e,r,t,i,n);var s=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,$u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Wc,e.stateNode=i,i._reactInternals=e,Nf(e,r,t,n),e=Df(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&nm(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=n1(r),t=nn(r,t),i){case 0:e=bf(null,e,r,t,n);break e;case 1:e=ev(null,e,r,t,n);break e;case 11:e=Jy(null,e,r,t,n);break e;case 14:e=Zy(null,e,r,nn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),ev(t,e,r,i,n);case 3:e:{if(bT(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sT(t,e),Gu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ks(Error(j(423)),e),e=tv(t,e,r,n,i);break e}else if(r!==i){i=Ks(Error(j(424)),e),e=tv(t,e,r,n,i);break e}else for(Vt=Vr(e.stateNode.containerInfo.firstChild),Ft=e,ke=!0,sn=null,n=rT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),r===i){e=tr(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return oT(e),t===null&&xf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tf(r,i)?o=null:s!==null&&Tf(r,s)&&(e.flags|=32),PT(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&xf(e),null;case 13:return DT(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Jy(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Hu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!At.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Qn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Rf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Os(e,n),i=Yt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),Zy(t,e,r,i,n);case 15:return AT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),gu(t,e),e.tag=1,Nt(r)?(t=!0,$u(e)):t=!1,Os(e,n),kT(e,r,i),Nf(e,r,i,n),Df(null,e,r,!0,t,n);case 19:return OT(t,e,n);case 22:return NT(t,e,n)}throw Error(j(156,e.tag))};function YT(t,e){return IE(t,e)}function t1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new t1(t,e,n,r)}function Cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n1(t){if(typeof t=="function")return Cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wp)return 11;if(t===Hp)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Mi(n.children,i,s,e);case zp:o=8,i|=8;break;case Zd:return t=qt(12,n,e,i|2),t.elementType=Zd,t.lanes=s,t;case ef:return t=qt(13,n,e,i),t.elementType=ef,t.lanes=s,t;case tf:return t=qt(19,n,e,i),t.elementType=tf,t.lanes=s,t;case oE:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iE:o=10;break e;case sE:o=9;break e;case Wp:o=11;break e;case Hp:o=14;break e;case Ir:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mi(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=qt(22,t,r,e),t.elementType=oE,t.lanes=n,t.stateNode={isHidden:!1},t}function kd(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function r1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ad(0),this.expirationTimes=ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(t,e,n,r,i,s,o,a,u){return t=new r1(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function i1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function XT(t){if(!t)return Xr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Nt(n))return XE(t,n,e)}return e}function JT(t,e,n,r,i,s,o,a,u){return t=km(n,r,!0,t,i,s,o,a,u),t.context=XT(null),n=t.current,r=Et(),i=jr(n),s=Qn(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,rl(t,i,r),Pt(t,r),t}function Kc(t,e,n,r){var i=e.current,s=Et(),o=jr(i);return n=XT(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(dn(t,i,o,s),fu(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xm(t,e){hv(t,e),(t=t.alternate)&&hv(t,e)}function s1(){return null}var ZT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rm(t){this._internalRoot=t}Qc.prototype.render=Rm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Kc(t,e,null,null)};Qc.prototype.unmount=Rm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$i(function(){Kc(null,t,null,null)}),e[Zn]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=NE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&bE(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function o1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=tc(o);s.call(c)}}var o=JT(e,r,t,0,null,!1,!1,"",dv);return t._reactRootContainer=o,t[Zn]=o.current,ba(t.nodeType===8?t.parentNode:t),$i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=tc(u);a.call(c)}}var u=km(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=u,t[Zn]=u.current,ba(t.nodeType===8?t.parentNode:t),$i(function(){Kc(e,u,n,r)}),u}function Xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=tc(o);a.call(u)}}Kc(e,o,t,i)}else o=o1(n,e,t,i,r);return tc(o)}RE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(Kp(e,n|1),Pt(e,Oe()),!(ue&6)&&(Qs=Oe()+500,hi()))}break;case 13:$i(function(){var r=er(t,1);if(r!==null){var i=Et();dn(r,t,1,i)}}),xm(t,1)}};Qp=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=Et();dn(e,t,134217728,n)}xm(t,134217728)}};AE=function(t){if(t.tag===13){var e=jr(t),n=er(t,e);if(n!==null){var r=Et();dn(n,t,e,r)}xm(t,e)}};NE=function(){return fe};PE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};df=function(t,e,n){switch(e){case"input":if(sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bc(r);if(!i)throw Error(j(90));lE(r),sf(r,i)}}}break;case"textarea":cE(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};_E=Tm;yE=$i;var a1={usingClientEntryPoint:!1,Events:[sl,Es,Bc,mE,gE,Tm]},Ho={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l1={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=EE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||s1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Vc=Yl.inject(l1),xn=Yl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(j(200));return i1(t,e,null,n)};jt.createRoot=function(t,e){if(!Am(t))throw Error(j(299));var n=!1,r="",i=ZT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=km(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,ba(t.nodeType===8?t.parentNode:t),new Rm(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=EE(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return $i(t)};jt.hydrate=function(t,e,n){if(!Yc(e))throw Error(j(200));return Xc(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JT(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qc(e)};jt.render=function(t,e,n){if(!Yc(e))throw Error(j(200));return Xc(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(j(40));return t._reactRootContainer?($i(function(){Xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};jt.unstable_batchedUpdates=Tm;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Xc(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function eI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eI)}catch(t){console.error(t)}}eI(),eE.exports=jt;var u1=eE.exports,tI,fv=u1;tI=fv.createRoot,fv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}var Dr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Dr||(Dr={}));const pv="popstate";function c1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Hf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nc(i)}return d1(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Nm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h1(){return Math.random().toString(36).substr(2,8)}function mv(t,e){return{usr:t.state,key:t.key,idx:e}}function Hf(t,e,n,r){return n===void 0&&(n=null),Ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ao(e):e,{state:n,key:e&&e.key||r||h1()})}function nc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function d1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Dr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ba({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Dr.Pop;let P=d(),S=P==null?null:P-c;c=P,u&&u({action:a,location:A.location,delta:S})}function m(P,S){a=Dr.Push;let v=Hf(A.location,P,S);c=d()+1;let _=mv(v,c),N=A.createHref(v);try{o.pushState(_,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(N)}s&&u&&u({action:a,location:A.location,delta:1})}function E(P,S){a=Dr.Replace;let v=Hf(A.location,P,S);c=d();let _=mv(v,c),N=A.createHref(v);o.replaceState(_,"",N),s&&u&&u({action:a,location:A.location,delta:0})}function k(P){let S=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:nc(P);return v=v.replace(/ $/,"%20"),Ae(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let A={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(pv,f),u=P,()=>{i.removeEventListener(pv,f),u=null}},createHref(P){return e(i,P)},createURL:k,encodeLocation(P){let S=k(P);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:E,go(P){return o.go(P)}};return A}var gv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gv||(gv={}));function f1(t,e,n){return n===void 0&&(n="/"),p1(t,e,n)}function p1(t,e,n,r){let i=typeof e=="string"?ao(e):e,s=Ys(i.pathname||"/",n);if(s==null)return null;let o=nI(t);m1(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=k1(s);a=S1(o[u],c)}return a}function nI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=$r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:T1(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of rI(s.path))i(s,o,u)}),e}function rI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function m1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:I1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const g1=/^:[\w-]+$/,_1=3,y1=2,v1=1,w1=10,E1=-2,_v=t=>t==="*";function T1(t,e){let n=t.split("/"),r=n.length;return n.some(_v)&&(r+=E1),e&&(r+=y1),n.filter(i=>!_v(i)).reduce((i,s)=>i+(g1.test(s)?_1:s===""?v1:w1),r)}function I1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function S1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=qf({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:$r([s,f.pathname]),pathnameBase:P1($r([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=$r([s,f.pathnameBase]))}return o}function qf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=C1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const k=a[f];return E&&!k?c[m]=void 0:c[m]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function C1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Nm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function k1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Nm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ys(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const x1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R1=t=>x1.test(t);function A1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ao(t):t,s;if(n)if(R1(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Nm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=yv(n.substring(1),"/"):s=yv(n,e)}else s=e;return{pathname:s,search:b1(r),hash:D1(i)}}function yv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pm(t,e){let n=N1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ao(t):(i=Ba({},t),Ae(!i.pathname||!i.pathname.includes("?"),Rd("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Rd("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Rd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=A1(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const $r=t=>t.join("/").replace(/\/\/+/g,"/"),P1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),b1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,D1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function O1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iI=["post","put","patch","delete"];new Set(iI);const M1=["get",...iI];new Set(M1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$a.apply(this,arguments)}const Jc=M.createContext(null),sI=M.createContext(null),hr=M.createContext(null),Zc=M.createContext(null),di=M.createContext({outlet:null,matches:[],isDataRoute:!1}),oI=M.createContext(null);function L1(t,e){let{relative:n}=e===void 0?{}:e;lo()||Ae(!1);let{basename:r,navigator:i}=M.useContext(hr),{hash:s,pathname:o,search:a}=eh(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:$r([r,o])),i.createHref({pathname:u,search:a,hash:s})}function lo(){return M.useContext(Zc)!=null}function Ji(){return lo()||Ae(!1),M.useContext(Zc).location}function aI(t){M.useContext(hr).static||M.useLayoutEffect(t)}function lI(){let{isDataRoute:t}=M.useContext(di);return t?Q1():V1()}function V1(){lo()||Ae(!1);let t=M.useContext(Jc),{basename:e,future:n,navigator:r}=M.useContext(hr),{matches:i}=M.useContext(di),{pathname:s}=Ji(),o=JSON.stringify(Pm(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return aI(()=>{a.current=!0}),M.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=bm(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:$r([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function eh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(hr),{matches:i}=M.useContext(di),{pathname:s}=Ji(),o=JSON.stringify(Pm(i,r.v7_relativeSplatPath));return M.useMemo(()=>bm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function F1(t,e){return U1(t,e)}function U1(t,e,n,r){lo()||Ae(!1);let{navigator:i}=M.useContext(hr),{matches:s}=M.useContext(di),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ji(),d;if(e){var f;let P=typeof e=="string"?ao(e):e;u==="/"||(f=P.pathname)!=null&&f.startsWith(u)||Ae(!1),d=P}else d=c;let m=d.pathname||"/",E=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let k=f1(t,{pathname:E}),A=W1(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:$r([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:$r([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&A?M.createElement(Zc.Provider,{value:{location:$a({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Dr.Pop}},A):A}function j1(){let t=K1(),e=O1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const B1=M.createElement(j1,null);class $1 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(di.Provider,{value:this.props.routeContext},M.createElement(oI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z1(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Jc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(di.Provider,{value:e},r)}function W1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ae(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,k=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||k){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,k=!1,A=null,P=null;n&&(E=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||B1,u&&(c<0&&m===0?(Y1("route-fallback"),k=!0,P=null):c===m&&(k=!0,P=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),v=()=>{let _;return E?_=A:k?_=P:f.route.Component?_=M.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=d,M.createElement(z1,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?M.createElement($1,{location:n.location,revalidation:n.revalidation,component:A,error:E,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}var uI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uI||{}),cI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cI||{});function H1(t){let e=M.useContext(Jc);return e||Ae(!1),e}function q1(t){let e=M.useContext(sI);return e||Ae(!1),e}function G1(t){let e=M.useContext(di);return e||Ae(!1),e}function hI(t){let e=G1(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function K1(){var t;let e=M.useContext(oI),n=q1(),r=hI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Q1(){let{router:t}=H1(uI.UseNavigateStable),e=hI(cI.UseNavigateStable),n=M.useRef(!1);return aI(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,$a({fromRouteId:e},s)))},[t,e])}const vv={};function Y1(t,e,n){vv[t]||(vv[t]=!0)}function X1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function J1(t){let{to:e,replace:n,state:r,relative:i}=t;lo()||Ae(!1);let{future:s,static:o}=M.useContext(hr),{matches:a}=M.useContext(di),{pathname:u}=Ji(),c=lI(),d=bm(e,Pm(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return M.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function hs(t){Ae(!1)}function Z1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Dr.Pop,navigator:s,static:o=!1,future:a}=t;lo()&&Ae(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:$a({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=ao(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:k="default"}=r,A=M.useMemo(()=>{let P=Ys(d,u);return P==null?null:{location:{pathname:P,search:f,hash:m,state:E,key:k},navigationType:i}},[u,d,f,m,E,k,i]);return A==null?null:M.createElement(hr.Provider,{value:c},M.createElement(Zc.Provider,{children:n,value:A}))}function eN(t){let{children:e,location:n}=t;return F1(Gf(e),n)}new Promise(()=>{});function Gf(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Gf(r.props.children,s));return}r.type!==hs&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rc.apply(this,arguments)}function dI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nN(t,e){return t.button===0&&(!e||e==="_self")&&!tN(t)}const rN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iN=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],sN="6";try{window.__reactRouterVersion=sN}catch{}const oN=M.createContext({isTransitioning:!1}),aN="startTransition",wv=Jx[aN];function lN(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=c1({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=M.useCallback(f=>{c&&wv?wv(()=>u(f)):u(f)},[u,c]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.useEffect(()=>X1(r),[r]),M.createElement(Z1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const uN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hN=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=dI(e,rN),{basename:E}=M.useContext(hr),k,A=!1;if(typeof c=="string"&&cN.test(c)&&(k=c,uN))try{let _=new URL(window.location.href),N=c.startsWith("//")?new URL(_.protocol+c):new URL(c),L=Ys(N.pathname,E);N.origin===_.origin&&L!=null?c=L+N.search+N.hash:A=!0}catch{}let P=L1(c,{relative:i}),S=pN(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(_){r&&r(_),_.defaultPrevented||S(_)}return M.createElement("a",rc({},m,{href:k||P,onClick:A||s?r:v,ref:n,target:u}))}),dN=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:c,children:d}=e,f=dI(e,iN),m=eh(u,{relative:f.relative}),E=Ji(),k=M.useContext(sI),{navigator:A,basename:P}=M.useContext(hr),S=k!=null&&mN(m)&&c===!0,v=A.encodeLocation?A.encodeLocation(m).pathname:m.pathname,_=E.pathname,N=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;i||(_=_.toLowerCase(),N=N?N.toLowerCase():null,v=v.toLowerCase()),N&&P&&(N=Ys(N,P)||N);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let U=_===v||!o&&_.startsWith(v)&&_.charAt(L)==="/",T=N!=null&&(N===v||!o&&N.startsWith(v)&&N.charAt(v.length)==="/"),y={isActive:U,isPending:T,isTransitioning:S},I=U?r:void 0,x;typeof s=="function"?x=s(y):x=[s,U?"active":null,T?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(y):a;return M.createElement(hN,rc({},f,{"aria-current":I,className:x,ref:n,style:R,to:u,viewTransition:c}),typeof d=="function"?d(y):d)});var Kf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Kf||(Kf={}));var Ev;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ev||(Ev={}));function fN(t){let e=M.useContext(Jc);return e||Ae(!1),e}function pN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=lI(),c=Ji(),d=eh(t,{relative:o});return M.useCallback(f=>{if(nN(f,n)){f.preventDefault();let m=r!==void 0?r:nc(c)===nc(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function mN(t,e){e===void 0&&(e={});let n=M.useContext(oN);n==null&&Ae(!1);let{basename:r}=fN(Kf.useViewTransitionState),i=eh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ys(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ys(n.nextLocation.pathname,r)||n.nextLocation.pathname;return qf(i.pathname,o)!=null||qf(i.pathname,s)!=null}function gN({isOpen:t,onClose:e}){return w.jsxs("aside",{className:["fixed inset-y-0 left-0 z-40 w-[min(18rem,86vw)] shrink-0 border-r border-slate-200/70 bg-white/95 px-5 py-5 shadow-2xl shadow-slate-950/10 backdrop-blur-2xl transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-950/95 lg:static lg:z-auto lg:flex lg:w-80 lg:flex-col lg:translate-x-0 lg:px-6 lg:py-8 lg:shadow-none",t?"translate-x-0 opacity-100":"-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100"].join(" "),children:[w.jsxs("div",{className:"mb-6 flex items-center justify-between gap-3 lg:mb-8 lg:justify-start",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl shadow-glow shadow-cyan-500/25 overflow-hidden",children:w.jsx("img",{src:"/images/Mistora.png",alt:"Mistora logo",className:"h-full w-full object-cover"})}),w.jsxs("div",{children:[w.jsx("div",{className:"font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white",children:"Mistora"}),w.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400",children:"Ultraponics control"})]})]}),w.jsx("button",{type:"button","aria-label":"Close navigation menu",onClick:e,className:"inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500/40 dark:hover:text-sky-300 lg:hidden",children:w.jsx(_N,{})})]}),w.jsx("nav",{className:"space-y-1.5 sm:space-y-2",children:[{to:"/overview",label:"Overview"},{to:"/trends",label:"Trends"},{to:"/controls",label:"Controls"},{to:"/about",label:"About"}].map(n=>w.jsx(dN,{to:n.to,onClick:e,className:({isActive:r})=>["flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 motion-safe:hover:-translate-y-0.5",r?"bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-800 ring-1 ring-cyan-500/15 shadow-sm dark:from-cyan-400/10 dark:to-blue-400/10 dark:text-cyan-200 dark:ring-cyan-400/10":"text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white"].join(" "),children:n.label},n.to))})]})}function _N(){return w.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-5 w-5 fill-none stroke-current stroke-[2]",children:w.jsx("path",{d:"M6 6l12 12M18 6 6 18",strokeLinecap:"round"})})}function yN(t){if(!(t instanceof Date)||Number.isNaN(t.getTime()))return"No transmission yet";const e=Date.now()-t.getTime(),n=Math.max(0,Math.floor(e/6e4));if(n<1)return"transmitted data just now";if(n<60)return`transmitted data ${n}m ago`;const r=Math.floor(n/60);return r<24?`transmitted data ${r}h ago`:`transmitted data ${Math.floor(r/24)}d ago`}function vN({theme:t,onToggleTheme:e,onOpenSidebar:n,lastTransmissionAt:r=null}){const[i,s]=M.useState(()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}));M.useEffect(()=>{const u=window.setInterval(()=>{s(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}))},1e3);return()=>window.clearInterval(u)},[]);const o=yN(r),a=r instanceof Date&&Number.isFinite(r.getTime())&&Date.now()-r.getTime()<5*60*1e3;return w.jsx("header",{className:"sticky top-0 z-30 border-b border-slate-200/70 bg-white/65 px-4 py-3 backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-950/65 sm:px-6 sm:py-4 lg:px-8",children:w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("button",{type:"button",onClick:n,"aria-label":"Open navigation menu",className:"inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-sky-300 lg:hidden",children:w.jsx(wN,{})}),w.jsx("div",{children:w.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400",children:"Mistora Dashboard"})})]}),w.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-2 sm:gap-3",children:[w.jsxs("div",{className:`flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-medium sm:text-sm ${a?"border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300":"border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"}`,children:[w.jsx("span",{className:`h-2.5 w-2.5 rounded-full ${a?"bg-emerald-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)]":"bg-slate-400"}`}),"ESP32 ",o]}),w.jsx("div",{className:"hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 sm:block",children:i}),w.jsx("button",{type:"button",onClick:e,"aria-label":t==="dark"?"Switch to light mode":"Switch to dark mode",title:t==="dark"?"Switch to light mode":"Switch to dark mode",className:"inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-sky-300",children:t==="dark"?w.jsx(TN,{}):w.jsx(EN,{})})]})]})})}function wN(){return w.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-5 w-5 fill-none stroke-current stroke-[2]",children:w.jsx("path",{d:"M4 6h16M4 12h16M4 18h16",strokeLinecap:"round"})})}function EN(){return w.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-5 w-5 fill-current",children:w.jsx("path",{d:"M21 12.7A9 9 0 1 1 11.3 3a7.5 7.5 0 0 0 9.7 9.7Z"})})}function TN(){return w.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-5 w-5 fill-current",children:w.jsx("path",{d:"M12 18a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V19a1 1 0 0 1 1-1Zm0-14a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm8 8a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H20Zm-14 0a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4.5a1 1 0 1 1 0-2H6Zm11.657 5.657a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 0 1-1.414 1.415l-1.06-1.06a1 1 0 0 1 0-1.415ZM6.28 6.28a1 1 0 0 1 1.415 0l1.06 1.06A1 1 0 0 1 7.34 8.755L6.28 7.694a1 1 0 0 1 0-1.414Zm11.79 1.06a1 1 0 0 1 0-1.414l1.06-1.06a1 1 0 1 1 1.415 1.414l-1.06 1.06a1 1 0 0 1-1.415 0ZM6.28 17.72a1 1 0 0 1 0-1.415l1.06-1.06a1 1 0 0 1 1.415 1.415l-1.06 1.06a1 1 0 0 1-1.414 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"})})}const IN=()=>{};var Tv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw uo(e)},uo=function(t){return new Error("Firebase Database ("+fI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new CN;const m=s<<2|a>>4;if(r.push(m),c!==64){const E=a<<4&240|c>>2;if(r.push(E),f!==64){const k=c<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(t){const e=pI(t);return Dm.encodeByteArray(e,!0)},ic=function(t){return mI(t).replace(/\./g,"")},sc=function(t){try{return Dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){return gI(void 0,t)}function gI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xN(n)||(t[n]=gI(t[n],e[n]));return t}function xN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=()=>RN().__FIREBASE_DEFAULTS__,NN=()=>{if(typeof process>"u"||typeof Tv>"u")return;const t=Tv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},th=()=>{try{return IN()||AN()||NN()||PN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_I=t=>{var e,n;return(n=(e=th())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Om=t=>{const e=_I(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yI=()=>{var t;return(t=th())==null?void 0:t.config},vI=t=>{var e;return(e=th())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function bN(){var e;const t=(e=th())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ON(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MN(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LN(){return fI.NODE_ADMIN===!0}function VN(){return!bN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FN(){try{return typeof indexedDB=="object"}catch{return!1}}function UN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jN,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}}function BN(t,e){return t.replace($N,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $N=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=za(sc(s[0])||""),n=za(sc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zN=function(t){const e=EI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},WN=function(t){const e=EI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Iv(s)&&Iv(o)){if(!Jr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function qN(t,e){const n=new GN(t,e);return n.subscribe.bind(n)}class GN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ad),i.error===void 0&&(i.error=Ad),i.complete===void 0&&(i.complete=Ad);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ad(){}function Vm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ih(t){return(await fetch(t,{credentials:"include"})).ok}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JN(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XN(t){return t===Ci?void 0:t}function JN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const eP={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},tP=te.INFO,nP={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},rP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sh{constructor(e){this.name=e,this._logLevel=tP,this._logHandler=rP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const iP=(t,e)=>e.some(n=>t instanceof n);let Sv,Cv;function sP(){return Sv||(Sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oP(){return Cv||(Cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TI=new WeakMap,Yf=new WeakMap,II=new WeakMap,Nd=new WeakMap,Fm=new WeakMap;function aP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TI.set(n,t)}).catch(()=>{}),Fm.set(e,t),e}function lP(t){if(Yf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yf.set(t,e)}let Xf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||II.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uP(t){Xf=t(Xf)}function cP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return II.set(r,e.sort?e.sort():[e]),zr(r)}:oP().includes(t)?function(...e){return t.apply(Pd(this),e),zr(TI.get(this))}:function(...e){return zr(t.apply(Pd(this),e))}}function hP(t){return typeof t=="function"?cP(t):(t instanceof IDBTransaction&&lP(t),iP(t,sP())?new Proxy(t,Xf):t)}function zr(t){if(t instanceof IDBRequest)return aP(t);if(Nd.has(t))return Nd.get(t);const e=hP(t);return e!==t&&(Nd.set(t,e),Fm.set(e,t)),e}const Pd=t=>Fm.get(t);function dP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zr(o.result),u.oldVersion,u.newVersion,zr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fP=["get","getKey","getAll","getAllKeys","count"],pP=["put","add","delete","clear"],bd=new Map;function kv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return bd.set(e,s),s}uP(t=>({...t,get:(e,n,r)=>kv(e,n)||t.get(e,n,r),has:(e,n)=>!!kv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jf="@firebase/app",xv="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new sh("@firebase/app"),_P="@firebase/app-compat",yP="@firebase/analytics-compat",vP="@firebase/analytics",wP="@firebase/app-check-compat",EP="@firebase/app-check",TP="@firebase/auth",IP="@firebase/auth-compat",SP="@firebase/database",CP="@firebase/data-connect",kP="@firebase/database-compat",xP="@firebase/functions",RP="@firebase/functions-compat",AP="@firebase/installations",NP="@firebase/installations-compat",PP="@firebase/messaging",bP="@firebase/messaging-compat",DP="@firebase/performance",OP="@firebase/performance-compat",MP="@firebase/remote-config",LP="@firebase/remote-config-compat",VP="@firebase/storage",FP="@firebase/storage-compat",UP="@firebase/firestore",jP="@firebase/ai",BP="@firebase/firestore-compat",$P="firebase",zP="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="[DEFAULT]",WP={[Jf]:"fire-core",[_P]:"fire-core-compat",[vP]:"fire-analytics",[yP]:"fire-analytics-compat",[EP]:"fire-app-check",[wP]:"fire-app-check-compat",[TP]:"fire-auth",[IP]:"fire-auth-compat",[SP]:"fire-rtdb",[CP]:"fire-data-connect",[kP]:"fire-rtdb-compat",[xP]:"fire-fn",[RP]:"fire-fn-compat",[AP]:"fire-iid",[NP]:"fire-iid-compat",[PP]:"fire-fcm",[bP]:"fire-fcm-compat",[DP]:"fire-perf",[OP]:"fire-perf-compat",[MP]:"fire-rc",[LP]:"fire-rc-compat",[VP]:"fire-gcs",[FP]:"fire-gcs-compat",[UP]:"fire-fst",[BP]:"fire-fst-compat",[jP]:"fire-vertex","fire-js":"fire-js",[$P]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map,HP=new Map,ep=new Map;function Rv(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(ep.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;ep.set(e,t);for(const n of ac.values())Rv(n,t);for(const n of HP.values())Rv(n,t);return!0}function ll(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new al("app","Firebase",qP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=zP;function SI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Zf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=yI()),!n)throw Wr.create("no-options");const s=ac.get(i);if(s){if(Jr(n,s.options)&&Jr(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new ZN(i);for(const u of ep.values())o.addComponent(u);const a=new GP(n,r,o);return ac.set(i,a),a}function oh(t=Zf){const e=ac.get(t);if(!e&&t===Zf&&yI())return SI();if(!e)throw Wr.create("no-app",{appName:t});return e}function Qt(t,e,n){let r=WP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(o.join(" "));return}Zr(new nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="firebase-heartbeat-database",QP=1,Wa="firebase-heartbeat-store";let Dd=null;function CI(){return Dd||(Dd=dP(KP,QP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),Dd}async function YP(t){try{const n=(await CI()).transaction(Wa),r=await n.objectStore(Wa).get(kI(t));return await n.done,r}catch(e){if(e instanceof Fn)rr.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Av(t,e){try{const r=(await CI()).transaction(Wa,"readwrite");await r.objectStore(Wa).put(e,kI(t)),await r.done}catch(n){if(n instanceof Fn)rr.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function kI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=1024,JP=30;class ZP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>JP){const o=nb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nv(),{heartbeatsToSend:r,unsentEntries:i}=eb(this._heartbeatsCache.heartbeats),s=ic(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function Nv(){return new Date().toISOString().substring(0,10)}function eb(t,e=XP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FN()?UN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Av(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Av(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pv(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}function nb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){Zr(new nr("platform-logger",e=>new mP(e),"PRIVATE")),Zr(new nr("heartbeat",e=>new ZP(e),"PRIVATE")),Qt(Jf,xv,t),Qt(Jf,xv,"esm2020"),Qt("fire-js","")}rb("");var bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,xI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function I(){}I.prototype=y.prototype,T.F=y.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(x,R,b){for(var C=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)C[Ve-2]=arguments[Ve];return y.prototype[R].apply(x,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,I){I||(I=0);const x=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)x[R]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(R=0;R<16;++R)x[R]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=T.g[0],I=T.g[1],R=T.g[2];let b=T.g[3],C;C=y+(b^I&(R^b))+x[0]+3614090360&4294967295,y=I+(C<<7&4294967295|C>>>25),C=b+(R^y&(I^R))+x[1]+3905402710&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(I^b&(y^I))+x[2]+606105819&4294967295,R=b+(C<<17&4294967295|C>>>15),C=I+(y^R&(b^y))+x[3]+3250441966&4294967295,I=R+(C<<22&4294967295|C>>>10),C=y+(b^I&(R^b))+x[4]+4118548399&4294967295,y=I+(C<<7&4294967295|C>>>25),C=b+(R^y&(I^R))+x[5]+1200080426&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(I^b&(y^I))+x[6]+2821735955&4294967295,R=b+(C<<17&4294967295|C>>>15),C=I+(y^R&(b^y))+x[7]+4249261313&4294967295,I=R+(C<<22&4294967295|C>>>10),C=y+(b^I&(R^b))+x[8]+1770035416&4294967295,y=I+(C<<7&4294967295|C>>>25),C=b+(R^y&(I^R))+x[9]+2336552879&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(I^b&(y^I))+x[10]+4294925233&4294967295,R=b+(C<<17&4294967295|C>>>15),C=I+(y^R&(b^y))+x[11]+2304563134&4294967295,I=R+(C<<22&4294967295|C>>>10),C=y+(b^I&(R^b))+x[12]+1804603682&4294967295,y=I+(C<<7&4294967295|C>>>25),C=b+(R^y&(I^R))+x[13]+4254626195&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(I^b&(y^I))+x[14]+2792965006&4294967295,R=b+(C<<17&4294967295|C>>>15),C=I+(y^R&(b^y))+x[15]+1236535329&4294967295,I=R+(C<<22&4294967295|C>>>10),C=y+(R^b&(I^R))+x[1]+4129170786&4294967295,y=I+(C<<5&4294967295|C>>>27),C=b+(I^R&(y^I))+x[6]+3225465664&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^I&(b^y))+x[11]+643717713&4294967295,R=b+(C<<14&4294967295|C>>>18),C=I+(b^y&(R^b))+x[0]+3921069994&4294967295,I=R+(C<<20&4294967295|C>>>12),C=y+(R^b&(I^R))+x[5]+3593408605&4294967295,y=I+(C<<5&4294967295|C>>>27),C=b+(I^R&(y^I))+x[10]+38016083&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^I&(b^y))+x[15]+3634488961&4294967295,R=b+(C<<14&4294967295|C>>>18),C=I+(b^y&(R^b))+x[4]+3889429448&4294967295,I=R+(C<<20&4294967295|C>>>12),C=y+(R^b&(I^R))+x[9]+568446438&4294967295,y=I+(C<<5&4294967295|C>>>27),C=b+(I^R&(y^I))+x[14]+3275163606&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^I&(b^y))+x[3]+4107603335&4294967295,R=b+(C<<14&4294967295|C>>>18),C=I+(b^y&(R^b))+x[8]+1163531501&4294967295,I=R+(C<<20&4294967295|C>>>12),C=y+(R^b&(I^R))+x[13]+2850285829&4294967295,y=I+(C<<5&4294967295|C>>>27),C=b+(I^R&(y^I))+x[2]+4243563512&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^I&(b^y))+x[7]+1735328473&4294967295,R=b+(C<<14&4294967295|C>>>18),C=I+(b^y&(R^b))+x[12]+2368359562&4294967295,I=R+(C<<20&4294967295|C>>>12),C=y+(I^R^b)+x[5]+4294588738&4294967295,y=I+(C<<4&4294967295|C>>>28),C=b+(y^I^R)+x[8]+2272392833&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^I)+x[11]+1839030562&4294967295,R=b+(C<<16&4294967295|C>>>16),C=I+(R^b^y)+x[14]+4259657740&4294967295,I=R+(C<<23&4294967295|C>>>9),C=y+(I^R^b)+x[1]+2763975236&4294967295,y=I+(C<<4&4294967295|C>>>28),C=b+(y^I^R)+x[4]+1272893353&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^I)+x[7]+4139469664&4294967295,R=b+(C<<16&4294967295|C>>>16),C=I+(R^b^y)+x[10]+3200236656&4294967295,I=R+(C<<23&4294967295|C>>>9),C=y+(I^R^b)+x[13]+681279174&4294967295,y=I+(C<<4&4294967295|C>>>28),C=b+(y^I^R)+x[0]+3936430074&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^I)+x[3]+3572445317&4294967295,R=b+(C<<16&4294967295|C>>>16),C=I+(R^b^y)+x[6]+76029189&4294967295,I=R+(C<<23&4294967295|C>>>9),C=y+(I^R^b)+x[9]+3654602809&4294967295,y=I+(C<<4&4294967295|C>>>28),C=b+(y^I^R)+x[12]+3873151461&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^I)+x[15]+530742520&4294967295,R=b+(C<<16&4294967295|C>>>16),C=I+(R^b^y)+x[2]+3299628645&4294967295,I=R+(C<<23&4294967295|C>>>9),C=y+(R^(I|~b))+x[0]+4096336452&4294967295,y=I+(C<<6&4294967295|C>>>26),C=b+(I^(y|~R))+x[7]+1126891415&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~I))+x[14]+2878612391&4294967295,R=b+(C<<15&4294967295|C>>>17),C=I+(b^(R|~y))+x[5]+4237533241&4294967295,I=R+(C<<21&4294967295|C>>>11),C=y+(R^(I|~b))+x[12]+1700485571&4294967295,y=I+(C<<6&4294967295|C>>>26),C=b+(I^(y|~R))+x[3]+2399980690&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~I))+x[10]+4293915773&4294967295,R=b+(C<<15&4294967295|C>>>17),C=I+(b^(R|~y))+x[1]+2240044497&4294967295,I=R+(C<<21&4294967295|C>>>11),C=y+(R^(I|~b))+x[8]+1873313359&4294967295,y=I+(C<<6&4294967295|C>>>26),C=b+(I^(y|~R))+x[15]+4264355552&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~I))+x[6]+2734768916&4294967295,R=b+(C<<15&4294967295|C>>>17),C=I+(b^(R|~y))+x[13]+1309151649&4294967295,I=R+(C<<21&4294967295|C>>>11),C=y+(R^(I|~b))+x[4]+4149444226&4294967295,y=I+(C<<6&4294967295|C>>>26),C=b+(I^(y|~R))+x[11]+3174756917&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~I))+x[2]+718787259&4294967295,R=b+(C<<15&4294967295|C>>>17),C=I+(b^(R|~y))+x[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const I=y-this.blockSize,x=this.C;let R=this.h,b=0;for(;b<y;){if(R==0)for(;b<=I;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<y;)if(x[R++]=T.charCodeAt(b++),R==this.blockSize){i(this,x),R=0;break}}else for(;b<y;)if(x[R++]=T[b++],R==this.blockSize){i(this,x),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,I=0;I<4;++I)for(let x=0;x<32;x+=8)T[y++]=this.g[I]>>>x&255;return T};function s(T,y){var I=a;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=y(T)}function o(T,y){this.h=y;const I=[];let x=!0;for(let R=T.length-1;R>=0;R--){const b=T[R]|0;x&&b==y||(I[R]=b,x=!1)}this.g=I}var a={};function u(T){return-128<=T&&T<128?s(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return P(c(-T));const y=[];let I=1;for(let x=0;T>=I;x++)y[x]=T/I|0,I*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return P(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(y,8));let x=f;for(let b=0;b<T.length;b+=8){var R=Math.min(8,T.length-b);const C=parseInt(T.substring(b,b+R),y);R<8?(R=c(Math.pow(y,R)),x=x.j(R).add(c(C))):(x=x.j(I),x=x.add(c(C)))}return x}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();let T=0,y=1;for(let I=0;I<this.g.length;I++){const x=this.i(I);T+=(x>=0?x:4294967296+x)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(A(this))return"-"+P(this).toString(T);const y=c(Math.pow(T,6));var I=this;let x="";for(;;){const R=N(I,y).g;I=S(I,R.j(y));let b=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=R,k(I))return b+x;for(;b.length<6;)b="0"+b;x=b+x}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function A(T){return T.h==-1}t.l=function(T){return T=S(this,T),A(T)?-1:k(T)?0:1};function P(T){const y=T.g.length,I=[];for(let x=0;x<y;x++)I[x]=~T.g[x];return new o(I,~T.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(T){const y=Math.max(this.g.length,T.g.length),I=[];let x=0;for(let R=0;R<=y;R++){let b=x+(this.i(R)&65535)+(T.i(R)&65535),C=(b>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);x=C>>>16,b&=65535,C&=65535,I[R]=C<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(T,y){return T.add(P(y))}t.j=function(T){if(k(this)||k(T))return f;if(A(this))return A(T)?P(this).j(P(T)):P(P(this).j(T));if(A(T))return P(this.j(P(T)));if(this.l(E)<0&&T.l(E)<0)return c(this.m()*T.m());const y=this.g.length+T.g.length,I=[];for(var x=0;x<2*y;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(let R=0;R<T.g.length;R++){const b=this.i(x)>>>16,C=this.i(x)&65535,Ve=T.i(R)>>>16,Dt=T.i(R)&65535;I[2*x+2*R]+=C*Dt,v(I,2*x+2*R),I[2*x+2*R+1]+=b*Dt,v(I,2*x+2*R+1),I[2*x+2*R+1]+=C*Ve,v(I,2*x+2*R+1),I[2*x+2*R+2]+=b*Ve,v(I,2*x+2*R+2)}for(T=0;T<y;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=y;T<2*y;T++)I[T]=0;return new o(I,0)};function v(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function _(T,y){this.g=T,this.h=y}function N(T,y){if(k(y))throw Error("division by zero");if(k(T))return new _(f,f);if(A(T))return y=N(P(T),y),new _(P(y.g),P(y.h));if(A(y))return y=N(T,P(y)),new _(P(y.g),y.h);if(T.g.length>30){if(A(T)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,x=y;x.l(T)<=0;)I=L(I),x=L(x);var R=U(I,1),b=U(x,1);for(x=U(x,2),I=U(I,2);!k(x);){var C=b.add(x);C.l(T)<=0&&(R=R.add(I),b=C),x=U(x,1),I=U(I,1)}return y=S(T,R.j(y)),new _(R,y)}for(R=f;T.l(y)>=0;){for(I=Math.max(1,Math.floor(T.m()/y.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),b=c(I),C=b.j(y);A(C)||C.l(T)>0;)I-=x,b=c(I),C=b.j(y);k(b)&&(b=m),R=R.add(b),T=S(T,C)}return new _(R,T)}t.B=function(T){return N(this,T).h},t.and=function(T){const y=Math.max(this.g.length,T.g.length),I=[];for(let x=0;x<y;x++)I[x]=this.i(x)&T.i(x);return new o(I,this.h&T.h)},t.or=function(T){const y=Math.max(this.g.length,T.g.length),I=[];for(let x=0;x<y;x++)I[x]=this.i(x)|T.i(x);return new o(I,this.h|T.h)},t.xor=function(T){const y=Math.max(this.g.length,T.g.length),I=[];for(let x=0;x<y;x++)I[x]=this.i(x)^T.i(x);return new o(I,this.h^T.h)};function L(T){const y=T.g.length+1,I=[];for(let x=0;x<y;x++)I[x]=T.i(x)<<1|T.i(x-1)>>>31;return new o(I,T.h)}function U(T,y){const I=y>>5;y%=32;const x=T.g.length-I,R=[];for(let b=0;b<x;b++)R[b]=y>0?T.i(b+I)>>>y|T.i(b+I+1)<<32-y:T.i(b+I);return new o(R,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,xI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Hr=o}).apply(typeof bv<"u"?bv:typeof self<"u"?self:typeof window<"u"?window:{});var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var RI,na,AI,wu,tp,NI,PI,bI;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xl=="object"&&Xl];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var D=l[g];if(!(D in p))break e;p=p[D]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(l){return l||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function u(l,h,p){return l.call.apply(l.bind,arguments)}function c(l,h,p){return c=u,c.apply(null,arguments)}function d(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function f(l,h){function p(){}p.prototype=h.prototype,l.Z=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Ob=function(g,D,O){for(var B=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)B[ee-2]=arguments[ee];return h.prototype[D].apply(g,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function E(l){const h=l.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function k(l,h){for(let g=1;g<arguments.length;g++){const D=arguments[g];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=l.length||0;const O=D.length||0;l.length=p+O;for(let B=0;B<O;B++)l[p+B]=D[B]}else l.push(D)}}class A{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(l){o.setTimeout(()=>{throw l},0)}function S(){var l=T;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const g=_.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var _=new A(()=>new N,l=>l.reset());class N{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let L,U=!1,T=new v,y=()=>{const l=Promise.resolve(void 0);L=()=>{l.then(I)}};function I(){for(var l;l=S();){try{l.h.call(l.g)}catch(p){P(p)}var h=_;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}U=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return l}();function C(l){return/^[\s\xa0]*$/.test(l)}function Ve(l,h){R.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}f(Ve,R),Ve.prototype.init=function(l,h){const p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Ve.Z.h.call(this)},Ve.prototype.h=function(){Ve.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Dt="closure_listenable_"+(Math.random()*1e6|0),mi=0;function gi(l,h,p,g,D){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=D,this.key=++mi,this.da=this.fa=!1}function $(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Y(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function G(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function ce(l){const h={};for(const p in l)h[p]=l[p];return h}const ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zt(l,h){let p,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(p in g)l[p]=g[p];for(let O=0;O<ye.length;O++)p=ye[O],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function St(l){this.src=l,this.g={},this.h=0}St.prototype.add=function(l,h,p,g,D){const O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);const B=en(l,h,g,D);return B>-1?(h=l[B],p||(h.fa=!1)):(h=new gi(h,this.src,O,!!g,D),h.fa=p,l.push(h)),h};function _i(l,h){const p=h.type;if(p in l.g){var g=l.g[p],D=Array.prototype.indexOf.call(g,h,void 0),O;(O=D>=0)&&Array.prototype.splice.call(g,D,1),O&&($(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function en(l,h,p,g){for(let D=0;D<l.length;++D){const O=l[D];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==g)return D}return-1}var pr="closure_lm_"+(Math.random()*1e6|0),Mh={};function a_(l,h,p,g,D){if(Array.isArray(h)){for(let O=0;O<h.length;O++)a_(l,h[O],p,g,D);return null}return p=c_(p),l&&l[Dt]?l.J(h,p,a(g)?!!g.capture:!1,D):ox(l,h,p,!1,g,D)}function ox(l,h,p,g,D,O){if(!h)throw Error("Invalid event type");const B=a(D)?!!D.capture:!!D;let ee=Vh(l);if(ee||(l[pr]=ee=new St(l)),p=ee.add(h,p,g,B,O),p.proxy)return p;if(g=ax(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)b||(D=B),D===void 0&&(D=!1),l.addEventListener(h.toString(),g,D);else if(l.attachEvent)l.attachEvent(u_(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ax(){function l(p){return h.call(l.src,l.listener,p)}const h=lx;return l}function l_(l,h,p,g,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)l_(l,h[O],p,g,D);else g=a(g)?!!g.capture:!!g,p=c_(p),l&&l[Dt]?(l=l.i,O=String(h).toString(),O in l.g&&(h=l.g[O],p=en(h,p,g,D),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete l.g[O],l.h--)))):l&&(l=Vh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=en(h,p,g,D)),(p=l>-1?h[l]:null)&&Lh(p))}function Lh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Dt])_i(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(u_(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Vh(h))?(_i(p,l),p.h==0&&(p.src=null,h[pr]=null)):$(l)}}}function u_(l){return l in Mh?Mh[l]:Mh[l]="on"+l}function lx(l,h){if(l.da)l=!0;else{h=new Ve(h,this);const p=l.listener,g=l.ha||l.src;l.fa&&Lh(l),l=p.call(g,h)}return l}function Vh(l){return l=l[pr],l instanceof St?l:null}var Fh="__closure_events_fn_"+(Math.random()*1e9>>>0);function c_(l){return typeof l=="function"?l:(l[Fh]||(l[Fh]=function(h){return l.handleEvent(h)}),l[Fh])}function at(){x.call(this),this.i=new St(this),this.M=this,this.G=null}f(at,x),at.prototype[Dt]=!0,at.prototype.removeEventListener=function(l,h,p,g){l_(this,l,h,p,g)};function yt(l,h){var p,g=l.G;if(g)for(p=[];g;g=g.G)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new R(h,l);else if(h instanceof R)h.target=h.target||l;else{var D=h;h=new R(g,l),Zt(h,D)}D=!0;let O,B;if(p)for(B=p.length-1;B>=0;B--)O=h.g=p[B],D=Tl(O,g,!0,h)&&D;if(O=h.g=l,D=Tl(O,g,!0,h)&&D,D=Tl(O,g,!1,h)&&D,p)for(B=0;B<p.length;B++)O=h.g=p[B],D=Tl(O,g,!1,h)&&D}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const p=l.g[h];for(let g=0;g<p.length;g++)$(p[g]);delete l.g[h],l.h--}}this.G=null},at.prototype.J=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},at.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function Tl(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==p){const ee=B.listener,$e=B.ha||B.src;B.fa&&_i(l.i,B),D=ee.call($e,g)!==!1&&D}}return D&&!g.defaultPrevented}function ux(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=c(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(l,h||0)}function h_(l){l.g=ux(()=>{l.g=null,l.i&&(l.i=!1,h_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class cx extends x{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:h_(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function To(l){x.call(this),this.h=l,this.g={}}f(To,x);var d_=[];function f_(l){Y(l.g,function(h,p){this.g.hasOwnProperty(p)&&Lh(h)},l),l.g={}}To.prototype.N=function(){To.Z.N.call(this),f_(this)},To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Uh=o.JSON.stringify,hx=o.JSON.parse,dx=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function p_(){}function m_(){}var Io={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jh(){R.call(this,"d")}f(jh,R);function Bh(){R.call(this,"c")}f(Bh,R);var yi={},g_=null;function Il(){return g_=g_||new at}yi.Ia="serverreachability";function __(l){R.call(this,yi.Ia,l)}f(__,R);function So(l){const h=Il();yt(h,new __(h))}yi.STAT_EVENT="statevent";function y_(l,h){R.call(this,yi.STAT_EVENT,l),this.stat=h}f(y_,R);function vt(l){const h=Il();yt(h,new y_(h,l))}yi.Ja="timingevent";function v_(l,h){R.call(this,yi.Ja,l),this.size=h}f(v_,R);function Co(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},h)}function ko(){this.g=!0}ko.prototype.ua=function(){this.g=!1};function fx(l,h,p,g,D,O){l.info(function(){if(l.g)if(O){var B="",ee=O.split("&");for(let me=0;me<ee.length;me++){var $e=ee[me].split("=");if($e.length>1){const Ke=$e[0];$e=$e[1];const vn=Ke.split("_");B=vn.length>=2&&vn[1]=="type"?B+(Ke+"="+$e+"&"):B+(Ke+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+p+`
`+B})}function px(l,h,p,g,D,O,B){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+p+`
`+O+" "+B})}function ss(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+gx(l,p)+(g?" "+g:"")})}function mx(l,h){l.info(function(){return"TIMEOUT: "+h})}ko.prototype.info=function(){};function gx(l,h){if(!l.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(l=0;l<O.length;l++)if(Array.isArray(O[l])){var p=O[l];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var D=g[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return Uh(O)}catch{return h}}var Sl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},w_={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},E_;function $h(){}f($h,p_),$h.prototype.g=function(){return new XMLHttpRequest},E_=new $h;function xo(l){return encodeURIComponent(String(l))}function _x(l){var h=1;l=l.split(":");const p=[];for(;h>0&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function mr(l,h,p,g){this.j=l,this.i=h,this.l=p,this.S=g||1,this.V=new To(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new T_}function T_(){this.i=null,this.g="",this.h=!1}var I_={},zh={};function Wh(l,h,p){l.M=1,l.A=kl(yn(h)),l.u=p,l.R=!0,S_(l,null)}function S_(l,h){l.F=Date.now(),Cl(l),l.B=yn(l.A);var p=l.B,g=l.S;Array.isArray(g)||(g=[String(g)]),V_(p.i,"t",g),l.C=0,p=l.j.L,l.h=new T_,l.g=ty(l.j,p?h:null,!l.u),l.P>0&&(l.O=new cx(c(l.Y,l,l.g),l.P)),h=l.V,p=l.g,g=l.ba;var D="readystatechange";Array.isArray(D)||(D&&(d_[0]=D.toString()),D=d_);for(let O=0;O<D.length;O++){const B=a_(p,D[O],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.J?ce(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),So(),fx(l.i,l.v,l.B,l.l,l.S,l.u)}mr.prototype.ba=function(l){l=l.target;const h=this.O;h&&yr(l)==3?h.j():this.Y(l)},mr.prototype.Y=function(l){try{if(l==this.g)e:{const ee=yr(this.g),$e=this.g.ya(),me=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||W_(this.g)))){this.K||ee!=4||$e==7||($e==8||me<=0?So(3):So(2)),Hh(this);var h=this.g.ca();this.X=h;var p=yx(this);if(this.o=h==200,px(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,D=this.g;if((g=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(g)){var O=g;break t}}O=null}if(l=O)ss(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qh(this,l);else{this.o=!1,this.m=3,vt(12),vi(this),Ro(this);break e}}if(this.R){l=!0;let Ke;for(;!this.K&&this.C<p.length;)if(Ke=vx(this,p),Ke==zh){ee==4&&(this.m=4,vt(14),l=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==I_){this.m=4,vt(15),ss(this.i,this.l,p,"[Invalid Chunk]"),l=!1;break}else ss(this.i,this.l,Ke,null),qh(this,Ke);if(C_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,vt(16),l=!1),this.o=this.o&&l,!l)ss(this.i,this.l,p,"[Invalid Chunked Response]"),vi(this),Ro(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ed(B),B.P=!0,vt(11))}}else ss(this.i,this.l,p,null),qh(this,p);ee==4&&vi(this),this.o&&!this.K&&(ee==4?X_(this.j,this):(this.o=!1,Cl(this)))}else Dx(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),vi(this),Ro(this)}}}catch{}finally{}};function yx(l){if(!C_(l))return l.g.la();const h=W_(l.g);if(h==="")return"";let p="";const g=h.length,D=yr(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return vi(l),Ro(l),"";l.h.i=new o.TextDecoder}for(let O=0;O<g;O++)l.h.h=!0,p+=l.h.i.decode(h[O],{stream:!(D&&O==g-1)});return h.length=0,l.h.g+=p,l.C=0,l.h.g}function C_(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function vx(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?zh:(p=Number(h.substring(p,g)),isNaN(p)?I_:(g+=1,g+p>h.length?zh:(h=h.slice(g,g+p),l.C=g+p,h)))}mr.prototype.cancel=function(){this.K=!0,vi(this)};function Cl(l){l.T=Date.now()+l.H,k_(l,l.H)}function k_(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Co(c(l.aa,l),h)}function Hh(l){l.D&&(o.clearTimeout(l.D),l.D=null)}mr.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(mx(this.i,this.B),this.M!=2&&(So(),vt(17)),vi(this),this.m=2,Ro(this)):k_(this,this.T-l)};function Ro(l){l.j.I==0||l.K||X_(l.j,l)}function vi(l){Hh(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,f_(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function qh(l,h){try{var p=l.j;if(p.I!=0&&(p.g==l||Gh(p.h,l))){if(!l.L&&Gh(p.h,l)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<l.F)Pl(p),Al(p);else break e;Zh(p),vt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Co(c(p.Va,p),6e3));A_(p.h)<=1&&p.ta&&(p.ta=void 0)}else Ei(p,11)}else if((l.L||p.g==l)&&Pl(p),!C(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let me=D[h];const Ke=me[0];if(!(Ke<=p.K))if(p.K=Ke,me=me[1],p.I==2)if(me[0]=="c"){p.M=me[1],p.ba=me[2];const vn=me[3];vn!=null&&(p.ka=vn,p.j.info("VER="+p.ka));const Ti=me[4];Ti!=null&&(p.za=Ti,p.j.info("SVER="+p.za));const vr=me[5];vr!=null&&typeof vr=="number"&&vr>0&&(g=1.5*vr,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const wr=l.g;if(wr){const Dl=wr.g?wr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dl){var O=g.h;O.g||Dl.indexOf("spdy")==-1&&Dl.indexOf("quic")==-1&&Dl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Kh(O,O.h),O.h=null))}if(g.G){const td=wr.g?wr.g.getResponseHeader("X-HTTP-Session-Id"):null;td&&(g.wa=td,ve(g.J,g.G,td))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-l.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var B=l;if(g.na=ey(g,g.L?g.ba:null,g.W),B.L){N_(g.h,B);var ee=B,$e=g.O;$e&&(ee.H=$e),ee.D&&(Hh(ee),Cl(ee)),g.g=B}else Q_(g);p.i.length>0&&Nl(p)}else me[0]!="stop"&&me[0]!="close"||Ei(p,7);else p.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Ei(p,7):Jh(p):me[0]!="noop"&&p.l&&p.l.qa(me),p.A=0)}}So(4)}catch{}}var wx=class{constructor(l,h){this.g=l,this.map=h}};function x_(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function R_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function A_(l){return l.h?1:l.g?l.g.size:0}function Gh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Kh(l,h){l.g?l.g.add(h):l.h=h}function N_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}x_.prototype.cancel=function(){if(this.i=P_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function P_(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.G);return h}return E(l.i)}var b_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ex(l,h){if(l){l=l.split("&");for(let p=0;p<l.length;p++){const g=l[p].indexOf("=");let D,O=null;g>=0?(D=l[p].substring(0,g),O=l[p].substring(g+1)):D=l[p],h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function gr(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof gr?(this.l=l.l,Ao(this,l.j),this.o=l.o,this.g=l.g,No(this,l.u),this.h=l.h,Qh(this,F_(l.i)),this.m=l.m):l&&(h=String(l).match(b_))?(this.l=!1,Ao(this,h[1]||"",!0),this.o=Po(h[2]||""),this.g=Po(h[3]||"",!0),No(this,h[4]),this.h=Po(h[5]||"",!0),Qh(this,h[6]||"",!0),this.m=Po(h[7]||"")):(this.l=!1,this.i=new Do(null,this.l))}gr.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(bo(h,D_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(bo(h,D_,!0),"@"),l.push(xo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&l.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(bo(p,p.charAt(0)=="/"?Sx:Ix,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",bo(p,kx)),l.join("")},gr.prototype.resolve=function(l){const h=yn(this);let p=!!l.j;p?Ao(h,l.j):p=!!l.o,p?h.o=l.o:p=!!l.g,p?h.g=l.g:p=l.u!=null;var g=l.h;if(p)No(h,l.u);else if(p=!!l.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var D=h.h.lastIndexOf("/");D!=-1&&(g=h.h.slice(0,D+1)+g)}if(D=g,D==".."||D==".")g="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){g=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let B=0;B<D.length;){const ee=D[B++];ee=="."?g&&B==D.length&&O.push(""):ee==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),g&&B==D.length&&O.push("")):(O.push(ee),g=!0)}g=O.join("/")}else g=D}return p?h.h=g:p=l.i.toString()!=="",p?Qh(h,F_(l.i)):p=!!l.m,p&&(h.m=l.m),h};function yn(l){return new gr(l)}function Ao(l,h,p){l.j=p?Po(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function No(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function Qh(l,h,p){h instanceof Do?(l.i=h,xx(l.i,l.l)):(p||(h=bo(h,Cx)),l.i=new Do(h,l.l))}function ve(l,h,p){l.i.set(h,p)}function kl(l){return ve(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Po(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function bo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,Tx),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Tx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var D_=/[#\/\?@]/g,Ix=/[#\?:]/g,Sx=/[#\?]/g,Cx=/[#\?@]/g,kx=/#/g;function Do(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function wi(l){l.g||(l.g=new Map,l.h=0,l.i&&Ex(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Do.prototype,t.add=function(l,h){wi(this),this.i=null,l=os(this,l);let p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function O_(l,h){wi(l),h=os(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function M_(l,h){return wi(l),h=os(l,h),l.g.has(h)}t.forEach=function(l,h){wi(this),this.g.forEach(function(p,g){p.forEach(function(D){l.call(h,D,g,this)},this)},this)};function L_(l,h){wi(l);let p=[];if(typeof h=="string")M_(l,h)&&(p=p.concat(l.g.get(os(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)p=p.concat(l[h]);return p}t.set=function(l,h){return wi(this),this.i=null,l=os(this,l),M_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=L_(this,l),l.length>0?String(l[0]):h):h};function V_(l,h,p){O_(l,h),p.length>0&&(l.i=null,l.g.set(os(l,h),E(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const D=xo(p);p=L_(this,p);for(let O=0;O<p.length;O++){let B=D;p[O]!==""&&(B+="="+xo(p[O])),l.push(B)}}return this.i=l.join("&")};function F_(l){const h=new Do;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function os(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function xx(l,h){h&&!l.j&&(wi(l),l.i=null,l.g.forEach(function(p,g){const D=g.toLowerCase();g!=D&&(O_(this,g),V_(this,D,p))},l)),l.j=h}function Rx(l,h){const p=new ko;if(o.Image){const g=new Image;g.onload=d(_r,p,"TestLoadImage: loaded",!0,h,g),g.onerror=d(_r,p,"TestLoadImage: error",!1,h,g),g.onabort=d(_r,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(_r,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function Ax(l,h){const p=new ko,g=new AbortController,D=setTimeout(()=>{g.abort(),_r(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(O=>{clearTimeout(D),O.ok?_r(p,"TestPingServer: ok",!0,h):_r(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),_r(p,"TestPingServer: error",!1,h)})}function _r(l,h,p,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(p)}catch{}}function Nx(){this.g=new dx}function Yh(l){this.i=l.Sb||null,this.h=l.ab||!1}f(Yh,p_),Yh.prototype.g=function(){return new xl(this.i,this.h)};function xl(l,h){at.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(xl,at),t=xl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,Mo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Oo(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Mo(this)),this.g&&(this.readyState=3,Mo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;U_(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function U_(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Oo(this):Mo(this),this.readyState==3&&U_(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Oo(this))},t.Na=function(l){this.g&&(this.response=l,Oo(this))},t.ga=function(){this.g&&Oo(this)};function Oo(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Mo(l)}t.setRequestHeader=function(l,h){this.A.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Mo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function j_(l){let h="";return Y(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Xh(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=j_(p),typeof l=="string"?p!=null&&xo(p):ve(l,h,p))}function Pe(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Pe,at);var Px=/^https?$/i,bx=["POST","PUT"];t=Pe.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():E_.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){B_(this,O);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)p.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())p.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(bx,h,void 0)>=0)||g||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of p)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(O){B_(this,O)}};function B_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,$_(l),Rl(l)}function $_(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,yt(this,"complete"),yt(this,"abort"),Rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rl(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?z_(this):this.Xa())},t.Xa=function(){z_(this)};function z_(l){if(l.h&&typeof s<"u"){if(l.v&&yr(l)==4)setTimeout(l.Ca.bind(l),0);else if(yt(l,"readystatechange"),yr(l)==4){l.h=!1;try{const O=l.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=O===0){let B=String(l.D).match(b_)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!Px.test(B?B.toLowerCase():"")}p=g}if(p)yt(l,"complete"),yt(l,"success");else{l.o=6;try{var D=yr(l)>2?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.ca()+"]",$_(l)}}finally{Rl(l)}}}}function Rl(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const p=l.g;l.g=null,h||yt(l,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function yr(l){return l.g?l.g.readyState:0}t.ca=function(){try{return yr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),hx(h)}};function W_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Dx(l){const h={};l=(l.g&&yr(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(C(l[g]))continue;var p=_x(l[g]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[D]||[];h[D]=O,O.push(p)}G(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function H_(l){this.za=0,this.i=[],this.j=new ko,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Lo("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Lo("baseRetryDelayMs",5e3,l),this.Za=Lo("retryDelaySeedMs",1e4,l),this.Ta=Lo("forwardChannelMaxRetries",2,l),this.va=Lo("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new x_(l&&l.concurrentRequestLimit),this.Ba=new Nx,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=H_.prototype,t.ka=8,t.I=1,t.connect=function(l,h,p,g){vt(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=ey(this,null,this.W),Nl(this)};function Jh(l){if(q_(l),l.I==3){var h=l.V++,p=yn(l.J);if(ve(p,"SID",l.M),ve(p,"RID",h),ve(p,"TYPE","terminate"),Vo(l,p),h=new mr(l,l.j,h),h.M=2,h.A=kl(yn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=ty(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Cl(h)}Z_(l)}function Al(l){l.g&&(ed(l),l.g.cancel(),l.g=null)}function q_(l){Al(l),l.v&&(o.clearTimeout(l.v),l.v=null),Pl(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Nl(l){if(!R_(l.h)&&!l.m){l.m=!0;var h=l.Ea;L||y(),U||(L(),U=!0),T.add(h,l),l.D=0}}function Ox(l,h){return A_(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Co(c(l.Ea,l,h),J_(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const D=new mr(this,this.j,l);let O=this.o;if(this.U&&(O?(O=ce(O),Zt(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=K_(this,D,h),p=yn(this.J),ve(p,"RID",l),ve(p,"CVER",22),this.G&&ve(p,"X-HTTP-Session-Id",this.G),Vo(this,p),O&&(this.R?h="headers="+xo(j_(O))+"&"+h:this.u&&Xh(p,this.u,O)),Kh(this.h,D),this.Ra&&ve(p,"TYPE","init"),this.S?(ve(p,"$req",h),ve(p,"SID","null"),D.U=!0,Wh(D,p,null)):Wh(D,p,h),this.I=2}}else this.I==3&&(l?G_(this,l):this.i.length==0||R_(this.h)||G_(this))};function G_(l,h){var p;h?p=h.l:p=l.V++;const g=yn(l.J);ve(g,"SID",l.M),ve(g,"RID",p),ve(g,"AID",l.K),Vo(l,g),l.u&&l.o&&Xh(g,l.u,l.o),p=new mr(l,l.j,p,l.D+1),l.u===null&&(p.J=l.o),h&&(l.i=h.G.concat(l.i)),h=K_(l,p,1e3),p.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Kh(l.h,p),Wh(p,g,h)}function Vo(l,h){l.H&&Y(l.H,function(p,g){ve(h,g,p)}),l.l&&Y({},function(p,g){ve(h,g,p)})}function K_(l,h,p){p=Math.min(l.i.length,p);const g=l.l?c(l.l.Ka,l.l,l):null;e:{var D=l.i;let ee=-1;for(;;){const $e=["count="+p];ee==-1?p>0?(ee=D[0].g,$e.push("ofs="+ee)):ee=0:$e.push("ofs="+ee);let me=!0;for(let Ke=0;Ke<p;Ke++){var O=D[Ke].g;const vn=D[Ke].map;if(O-=ee,O<0)ee=Math.max(0,D[Ke].g-100),me=!1;else try{O="req"+O+"_"||"";try{var B=vn instanceof Map?vn:Object.entries(vn);for(const[Ti,vr]of B){let wr=vr;a(vr)&&(wr=Uh(vr)),$e.push(O+Ti+"="+encodeURIComponent(wr))}}catch(Ti){throw $e.push(O+"type="+encodeURIComponent("_badmap")),Ti}}catch{g&&g(vn)}}if(me){B=$e.join("&");break e}}B=void 0}return l=l.i.splice(0,p),h.G=l,B}function Q_(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;L||y(),U||(L(),U=!0),T.add(h,l),l.A=0}}function Zh(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Co(c(l.Da,l),J_(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,Y_(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Co(c(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Al(this),Y_(this))};function ed(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function Y_(l){l.g=new mr(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=yn(l.na);ve(h,"RID","rpc"),ve(h,"SID",l.M),ve(h,"AID",l.K),ve(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&ve(h,"TO",l.ia),ve(h,"TYPE","xmlhttp"),Vo(l,h),l.u&&l.o&&Xh(h,l.u,l.o),l.O&&(l.g.H=l.O);var p=l.g;l=l.ba,p.M=1,p.A=kl(yn(h)),p.u=null,p.R=!0,S_(p,l)}t.Va=function(){this.C!=null&&(this.C=null,Al(this),Zh(this),vt(19))};function Pl(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function X_(l,h){var p=null;if(l.g==h){Pl(l),ed(l),l.g=null;var g=2}else if(Gh(l.h,h))p=h.G,N_(l.h,h),g=1;else return;if(l.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=l.D;g=Il(),yt(g,new v_(g,p)),Nl(l)}else Q_(l);else if(D=h.m,D==3||D==0&&h.X>0||!(g==1&&Ox(l,h)||g==2&&Zh(l)))switch(p&&p.length>0&&(h=l.h,h.i=h.i.concat(p)),D){case 1:Ei(l,5);break;case 4:Ei(l,10);break;case 3:Ei(l,6);break;default:Ei(l,2)}}}function J_(l,h){let p=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(p*=2),p*h}function Ei(l,h){if(l.j.info("Error code "+h),h==2){var p=c(l.bb,l),g=l.Ua;const D=!g;g=new gr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ao(g,"https"),kl(g),D?Rx(g.toString(),p):Ax(g.toString(),p)}else vt(2);l.I=0,l.l&&l.l.pa(h),Z_(l),q_(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Z_(l){if(l.I=0,l.ja=[],l.l){const h=P_(l.h);(h.length!=0||l.i.length!=0)&&(k(l.ja,h),k(l.ja,l.i),l.h.i.length=0,E(l.i),l.i.length=0),l.l.oa()}}function ey(l,h,p){var g=p instanceof gr?yn(p):new gr(p);if(g.g!="")h&&(g.g=h+"."+g.g),No(g,g.u);else{var D=o.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const O=new gr(null);g&&Ao(O,g),h&&(O.g=h),D&&No(O,D),p&&(O.h=p),g=O}return p=l.G,h=l.wa,p&&h&&ve(g,p,h),ve(g,"VER",l.ka),Vo(l,g),g}function ty(l,h,p){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new Pe(new Yh({ab:p})):new Pe(l.ma),h.Fa(l.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ny(){}t=ny.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function bl(){}bl.prototype.g=function(l,h){return new Ot(l,h)};function Ot(l,h){at.call(this),this.g=new H_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!C(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new as(this)}f(Ot,at),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Jh(this.g)},Ot.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.v&&(p={},p.__data__=Uh(l),l=p);h.i.push(new wx(h.Ya++,l)),h.I==3&&Nl(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Jh(this.g),delete this.g,Ot.Z.N.call(this)};function ry(l){jh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}f(ry,jh);function iy(){Bh.call(this),this.status=1}f(iy,Bh);function as(l){this.g=l}f(as,ny),as.prototype.ra=function(){yt(this.g,"a")},as.prototype.qa=function(l){yt(this.g,new ry(l))},as.prototype.pa=function(l){yt(this.g,new iy)},as.prototype.oa=function(){yt(this.g,"b")},bl.prototype.createWebChannel=bl.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,bI=function(){return new bl},PI=function(){return Il()},NI=yi,tp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Sl.NO_ERROR=0,Sl.TIMEOUT=8,Sl.HTTP_ERROR=6,wu=Sl,w_.COMPLETE="complete",AI=w_,m_.EventType=Io,Io.OPEN="a",Io.CLOSE="b",Io.ERROR="c",Io.MESSAGE="d",at.prototype.listen=at.prototype.J,na=m_,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,RI=Pe}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="12.13.0";function ib(t){ho=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new sh("@firebase/firestore");function ds(){return zi.logLevel}function H(t,...e){if(zi.logLevel<=te.DEBUG){const n=e.map(Um);zi.debug(`Firestore (${ho}): ${t}`,...n)}}function ir(t,...e){if(zi.logLevel<=te.ERROR){const n=e.map(Um);zi.error(`Firestore (${ho}): ${t}`,...n)}}function Wi(t,...e){if(zi.logLevel<=te.WARN){const n=e.map(Um);zi.warn(`Firestore (${ho}): ${t}`,...n)}}function Um(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,DI(t,r,n)}function DI(t,e,n){let r=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ir(r),new Error(r)}function de(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||DI(e,i,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ab{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new OI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class lb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ub{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function np(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Od(i)===Od(s)?ne(i,s):Od(i)?1:-1}return ne(t.length,e.length)}const db=55296,fb=57343;function Od(t){const e=t.charCodeAt(0);return e>=db&&e<=fb}function Js(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="__name__";class Tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Tn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Tn.isNumericId(e),i=Tn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Tn.extractNumericId(e).compare(Tn.extractNumericId(n)):np(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class ge extends Tn{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Tn{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ov}static keyField(){return new rt([Ov])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ge.fromString(e))}static fromName(e){return new K(ge.fromString(e).popFirst(5))}static empty(){return new K(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mb(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mv(t){if(!K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lv(t){if(K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function LI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ah(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gb(t,e){if(e<=0)throw new W(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function ul(t,e){if(!LI(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=-62135596800,Fv=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Fv);return new Ie(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vv)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fv}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ul(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Be("string",Ie._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new Ie(0,0))}static max(){return new J(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=-1;function _b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new ei(i,K.empty(),e)}function yb(t){return new ei(t.readTime,t.key,Ha)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(J.min(),K.empty(),Ha)}static max(){return new ei(J.max(),K.empty(),Ha)}}function vb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Eb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==wb)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Tb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=-1;function uh(t){return t==null}function lc(t){return t===0&&1/t==-1/0}function Ib(t){return typeof t=="number"&&Number.isInteger(t)&&!lc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="";function Sb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Uv(e)),e=Cb(t.get(n),e);return Uv(e)}function Cb(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case VI:n+="";break;default:n+=s}}return n}function Uv(t){return t+VI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le=class rp{constructor(e,n){this.comparator=e,this.root=n||qr.EMPTY}insert(e,n){return new rp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qr.BLACK,null,null))}remove(e){return new rp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jl(this.root,e,this.comparator,!0)}},Jl=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},qr=class jn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??jn.RED,this.left=i??jn.EMPTY,this.right=s??jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new jn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return jn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}};qr.EMPTY=null,qr.RED=!0,qr.BLACK=!1;qr.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bv(this.data.getIterator())}getIteratorFrom(e){return new Bv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Bv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new an([])}unionWith(e){let n=new qe(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new UI("Invalid base64 string: "+s):s}}(e);return new ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=kb.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ni(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="server_timestamp",BI="__type__",$I="__previous_value__",zI="__local_write_time__";function $m(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[BI])==null?void 0:r.stringValue)===jI}function ch(t){const e=t.mapValue.fields[$I];return $m(e)?ch(e):e}function qa(t){const e=ti(t.mapValue.fields[zI].timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,i,s,o,a,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const uc="(default)";class Ga{constructor(e,n){this.projectId=e,this.database=n||uc}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===uc}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}function Rb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="__type__",Ab="__max__",Zl={mapValue:{}},HI="__vector__",cc="value";function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$m(t)?4:Pb(t)?9007199254740991:Nb(t)?10:11:Q(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qa(t).isEqual(qa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),a=ti(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ni(i.bytesValue).isEqual(ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),a=De(s.doubleValue);return o===a?lc(o)===lc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(jv(o)!==jv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Mn(o[u],a[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Ka(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return $v(t.timestampValue,e.timestampValue);case 4:return $v(qa(t),qa(e));case 5:return np(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ni(s),u=ni(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ne(a[c],u[c]);if(d!==0)return d}return ne(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(De(s.latitude),De(o.latitude));return a!==0?a:ne(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,k,A;const a=s.fields||{},u=o.fields||{},c=(m=a[cc])==null?void 0:m.arrayValue,d=(E=u[cc])==null?void 0:E.arrayValue,f=ne(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((A=d==null?void 0:d.values)==null?void 0:A.length)||0);return f!==0?f:zv(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Zl.mapValue&&o===Zl.mapValue)return 0;if(s===Zl.mapValue)return 1;if(o===Zl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=np(u[f],d[f]);if(m!==0)return m;const E=Zs(a[u[f]],c[d[f]]);if(E!==0)return E}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function $v(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=ti(t),r=ti(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function zv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Zs(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function eo(t){return ip(t)}function ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ip(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Eu(t){switch(ri(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ch(t);return e?16+Eu(e):16;case 5:return 2*t.stringValue.length;case 6:return ni(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Eu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Zi(r.fields,(s,o)=>{i+=s.length+Eu(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function Wv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sp(t){return!!t&&"integerValue"in t}function zm(t){return!!t&&"arrayValue"in t}function Hv(t){return!!t&&"nullValue"in t}function qv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tu(t){return!!t&&"mapValue"in t}function Nb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[WI])==null?void 0:r.stringValue)===HI}function ma(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return{...t}}function Pb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ab}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Tu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Wt(ma(this.value))}}function qI(t){const e=[];return Zi(t.fields,(n,r)=>{const i=new rt([n]);if(Tu(r)){const s=qI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,J.min(),J.min(),J.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new ft(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ft(e,2,n,J.min(),J.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,J.min(),J.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.position=e,this.inclusive=n}}function Gv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Zs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{}class je extends GI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ob(e,n,r):n==="array-contains"?new Vb(e,r):n==="in"?new Fb(e,r):n==="not-in"?new Ub(e,r):n==="array-contains-any"?new jb(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mb(e,r):new Lb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zs(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends GI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new _n(e,n)}matches(e){return KI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function KI(t){return t.op==="and"}function QI(t){return Db(t)&&KI(t)}function Db(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function op(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+eo(t.value);if(QI(t))return t.filters.map(e=>op(e)).join(",");{const e=t.filters.map(n=>op(n)).join(",");return`${t.op}(${e})`}}function YI(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof _n?function(r,i){return i instanceof _n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&YI(o,i.filters[a]),!0):!1}(t,e):void Q(19439)}function XI(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(XI).join(" ,")+"}"}(t):"Filter"}class Ob extends je{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mb extends je{constructor(e,n){super(e,"in",n),this.keys=JI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lb extends je{constructor(e,n){super(e,"not-in",n),this.keys=JI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function JI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Vb extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zm(n)&&Ka(n.arrayValue,this.value)}}class Fb extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class Ub extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ka(this.value.arrayValue,n)}}class jb extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function Qv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Bb(t,e,n,r,i,s,o)}function Wm(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>op(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>eo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>eo(r)).join(",")),e.Te=n}return e.Te}function Hm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!YI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kv(t.startAt,e.startAt)&&Kv(t.endAt,e.endAt)}function ap(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function $b(t,e,n,r,i,s,o,a){return new mo(t,e,n,r,i,s,o,a)}function hh(t){return new mo(t)}function Yv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zb(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ZI(t){return t.collectionGroup!==null}function ga(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qe(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Qa(s,r))}),n.has(rt.keyField().canonicalString())||e.Ie.push(new Qa(rt.keyField(),r))}return e.Ie}function An(t){const e=Z(t);return e.Ee||(e.Ee=Wb(e,ga(t))),e.Ee}function Wb(t,e){if(t.limitType==="F")return Qv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qa(i.field,s)});const n=t.endAt?new hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hc(t.startAt.position,t.startAt.inclusive):null;return Qv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lp(t,e){const n=t.filters.concat([e]);return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hb(t,e){const n=t.explicitOrderBy.concat([e]);return new mo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function dc(t,e,n){return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dh(t,e){return Hm(An(t),An(e))&&t.limitType===e.limitType}function eS(t){return`${Wm(An(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>XI(i)).join(", ")}]`),uh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>eo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>eo(i)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function fh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ga(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Gv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ga(r),i)||r.endAt&&!function(o,a,u){const c=Gv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ga(r),i))}(t,e)}function qb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tS(t){return(e,n)=>{let r=!1;for(const i of ga(t)){const s=Gb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Gb(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Zs(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new Le(K.comparator);function sr(){return Kb}const nS=new Le(K.comparator);function ra(...t){let e=nS;for(const n of t)e=e.insert(n.key,n);return e}function rS(t){let e=nS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pi(){return _a()}function iS(){return _a()}function _a(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qb=new Le(K.comparator),Yb=new qe(K.comparator);function re(...t){let e=Yb;for(const n of t)e=e.add(n);return e}const Xb=new qe(ne);function Jb(){return Xb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lc(e)?"-0":e}}function sS(t){return{integerValue:""+t}}function Zb(t,e){return Ib(e)?sS(e):qm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this._=void 0}}function eD(t,e,n){return t instanceof Ya?function(i,s){const o={fields:{[BI]:{stringValue:jI},[zI]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$m(s)&&(s=ch(s)),s&&(o.fields[$I]=s),{mapValue:o}}(n,e):t instanceof Xa?aS(t,e):t instanceof Ja?lS(t,e):function(i,s){const o=oS(i,s),a=Xv(o)+Xv(i.Ae);return sp(o)&&sp(i.Ae)?sS(a):qm(i.serializer,a)}(t,e)}function tD(t,e,n){return t instanceof Xa?aS(t,e):t instanceof Ja?lS(t,e):n}function oS(t,e){return t instanceof fc?function(r){return sp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ya extends ph{}class Xa extends ph{constructor(e){super(),this.elements=e}}function aS(t,e){const n=uS(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ja extends ph{constructor(e){super(),this.elements=e}}function lS(t,e){let n=uS(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class fc extends ph{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Xv(t){return De(t.integerValue||t.doubleValue)}function uS(t){return zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this.field=e,this.transform=n}}function rD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xa&&i instanceof Xa||r instanceof Ja&&i instanceof Ja?Js(r.elements,i.elements,Mn):r instanceof fc&&i instanceof fc?Mn(r.Ae,i.Ae):r instanceof Ya&&i instanceof Ya}(t.transform,e.transform)}class iD{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mh{}function cS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dS(t.key,Nn.none()):new cl(t.key,t.data,Nn.none());{const n=t.data,r=Wt.empty();let i=new qe(rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ts(t.key,r,new an(i.toArray()),Nn.none())}}function sD(t,e,n){t instanceof cl?function(i,s,o){const a=i.value.clone(),u=Zv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ts?function(i,s,o){if(!Iu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Zv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(hS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ya(t,e,n,r){return t instanceof cl?function(s,o,a,u){if(!Iu(s.precondition,o))return a;const c=s.value.clone(),d=e0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ts?function(s,o,a,u){if(!Iu(s.precondition,o))return a;const c=e0(s.fieldTransforms,u,o),d=o.data;return d.setAll(hS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Iu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=oS(r.transform,i||null);s!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,s))}return n||null}function Jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Js(r,i,(s,o)=>rD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cl extends mh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ts extends mh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function hS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zv(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tD(o,a,n[i]))}return r}function e0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eD(s,o,e))}return r}class dS extends mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aD extends mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=cS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,r)=>Jv(n,r))&&Js(this.baseMutations,e.baseMutations,(n,r)=>Jv(n,r))}}class Gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Qb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ae;function hD(t){switch(t){case V.OK:return Q(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function fS(t){if(t===void 0)return ir("GRPC error has no .code"),V.UNKNOWN;switch(t){case Fe.OK:return V.OK;case Fe.CANCELLED:return V.CANCELLED;case Fe.UNKNOWN:return V.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return V.INTERNAL;case Fe.UNAVAILABLE:return V.UNAVAILABLE;case Fe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Fe.NOT_FOUND:return V.NOT_FOUND;case Fe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Fe.ABORTED:return V.ABORTED;case Fe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Fe.DATA_LOSS:return V.DATA_LOSS;default:return Q(39323,{code:t})}}(ae=Fe||(Fe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=new Hr([4294967295,4294967295],0);function t0(t){const e=dD().encode(t),n=new xI;return n.update(e),new Uint8Array(n.digest())}function n0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class Km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ia(`Invalid padding: ${n}`);if(r<0)throw new ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ia(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Hr.fromNumber(r)));return i.compare(fD)===1&&(i=new Hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=t0(e),[r,i]=n0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Km(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=t0(e),[r,i]=n0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hl(J.min(),i,new Le(ne),sr(),re())}}class dl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dl(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class pS{constructor(e,n){this.targetId=e,this.Ce=n}}class mS{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class r0{constructor(){this.ve=0,this.Fe=i0(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new dl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=i0()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class pD{constructor(e){this.Ge=e,this.ze=new Map,this.je=sr(),this.Je=eu(),this.He=eu(),this.Ze=new Le(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ap(s))if(r===0){const o=new K(s.path);this.et(n,o,ft.newNoDocument(o,J.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ni(r).toUint8Array()}catch(u){if(u instanceof UI)return Wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Km(o,i,s)}catch(u){return Wi(u instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&ap(a.target)){const u=new K(a.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ft.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=re();this.He.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new hl(e,n,this.Ze,this.je,r);return this.je=sr(),this.Je=eu(),this.He=eu(),this.Ze=new Le(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new r0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new qe(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new qe(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new r0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function eu(){return new Le(K.comparator)}function i0(){return new Le(K.comparator)}const mD={asc:"ASCENDING",desc:"DESCENDING"},gD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_D={and:"AND",or:"OR"};class yD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function up(t,e){return t.useProto3Json||uh(e)?e:{value:e}}function pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vD(t,e){return pc(t,e.toTimestamp())}function Pn(t){return de(!!t,49232),J.fromTimestamp(function(n){const r=ti(n);return new Ie(r.seconds,r.nanos)}(t))}function Qm(t,e){return cp(t,e).canonicalString()}function cp(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _S(t){const e=ge.fromString(t);return de(TS(e),10190,{key:e.toString()}),e}function hp(t,e){return Qm(t.databaseId,e.path)}function Md(t,e){const n=_S(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(vS(n))}function yS(t,e){return Qm(t.databaseId,e)}function wD(t){const e=_S(t);return e.length===4?ge.emptyPath():vS(e)}function dp(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vS(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function s0(t,e,n){return{name:hp(t,e),fields:n.value.mapValue.fields}}function ED(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(de(d===void 0||typeof d=="string",58123),ot.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ot.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:fS(c.code);return new W(d,c.message||"")}(o);n=new mS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Md(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):J.min(),a=new Wt({mapValue:{fields:r.document.fields}}),u=ft.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Su(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Md(t,r.document),s=r.readTime?Pn(r.readTime):J.min(),o=ft.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Md(t,r.document),s=r.removedTargetIds||[];n=new Su([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cD(i,s),a=r.targetId;n=new pS(a,o)}}return n}function TD(t,e){let n;if(e instanceof cl)n={update:s0(t,e.key,e.value)};else if(e instanceof dS)n={delete:hp(t,e.key)};else if(e instanceof ts)n={update:s0(t,e.key,e.data),updateMask:PD(e.fieldMask)};else{if(!(e instanceof aD))return Q(16599,{dt:e.type});n={verify:hp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function ID(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(J.min())&&(o=Pn(s)),new iD(o,i.transformResults||[])}(n,e))):[]}function SD(t,e){return{documents:[yS(t,e.path)]}}function CD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=yS(t,i);const s=function(c){if(c.length!==0)return ES(_n.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ps(m.field),direction:RD(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=up(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function kD(t){let e=wD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=wS(f);return m instanceof _n&&QI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(k){return new Qa(ms(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,uh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new hc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new hc(E,m)}(n.endAt)),$b(e,i,o,s,a,"F",u,c)}function xD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ms(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>wS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function RD(t){return mD[t]}function AD(t){return gD[t]}function ND(t){return _D[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return rt.fromServerFormat(t.fieldPath)}function ES(t){return t instanceof je?function(n){if(n.op==="=="){if(qv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(Hv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(Hv(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:AD(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(i=>ES(i));return r.length===1?r[0]:{compositeFilter:{op:ND(n.op),filters:r}}}(t):Q(54877,{filter:t})}function PD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function IS(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,i,s=J.min(),o=J.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.yt=e}}function DD(t){const e=kD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.bn=new MD}addToCollectionParentIndex(e,n){return this.bn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ei.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class MD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},SS=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(SS,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ii(0)}static ar(){return new ii(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="LruGarbageCollector",LD=1048576;function l0([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class VD{constructor(e){this.Pr=e,this.buffer=new qe(l0),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();l0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class FD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(a0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){po(n)?H(a0,"Ignoring IndexedDB error during garbage collection: ",n):await fo(n)}await this.Ar(3e5)})}}class UD{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(lh.ce);const r=new VD(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(o0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),o0):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ds()<=te.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function jD(t,e){return new UD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ya(r.mutation,i,an.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ra();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=sr();const o=_a(),a=function(){return _a()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ts)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ya(d.mutation,c,d.mutation.getFieldMask(),Ie.now())):o.set(c.key,an.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>a.set(c,new $D(d,o.get(c)??null))),a))}recalculateAndSaveOverlays(e,n){const r=_a();let i=new Le((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||an.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||re()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=iS();d.forEach(m=>{if(!s.has(m)){const E=cS(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return zb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Pi());let a=Ha,u=s;return o.next(c=>F.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:a,changes:rS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ra();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,m){return new mo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ft.newInvalidDocument(d)))});let a=ra();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ya(d.mutation,c,an.empty(),Ie.now()),fh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:DD(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.overlays=new Le(K.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Pi(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Pi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Pi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uD(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.kr=new qe(Ye.Kr),this.qr=new qe(Ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ye(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new ge([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new ge([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=re();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new qe(Ye.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Hr=this.Hr.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Bm:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const a=this.Zr(o.Jr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ne);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],a=>{r=r.add(a.Jr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new K(s),0);let a=new qe(ne);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Jr)),!0)},o),F.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return F.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ye(n,0),i=this.Hr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.ti=e,this.docs=function(){return new Le(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=sr();const o=n.path,a=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vb(yb(d),r)<=0||(i.has(d.key)||fh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QD(this)}getSize(e){return F.resolve(this.size)}}class QD extends BD{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.persistence=e,this.ri=new es(n=>Wm(n),Hm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Ym,this.targetCount=0,this.oi=ii._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ii(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n){this._i={},this.overlays={},this.ai=new lh(0),this.ui=!1,this.ui=!0,this.ci=new qD,this.referenceDelegate=e(this),this.li=new YD(this),this.indexManager=new OD,this.remoteDocumentCache=function(i){return new KD(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new bD(n),this.Pi=new WD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new GD(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new XD(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class XD extends Eb{constructor(e){super(),this.currentSequenceNumber=e}}class Xm{constructor(e){this.persistence=e,this.Ri=new Ym,this.Ai=null}static Vi(e){return new Xm(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class mc{constructor(e,n){this.persistence=e,this.fi=new es(r=>Sb(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=jD(this,n)}static Vi(e,n){return new mc(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Eu(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return VN()?8:Tb(_t())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JD;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ds()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(ds()<=te.DEBUG&&H("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ds()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):F.resolve())}gs(e,n){if(Yv(n))return F.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dc(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,a);return this.bs(n,c,o,u.readTime)?this.gs(e,dc(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Yv(n)||i.isEqual(J.min())?F.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?F.resolve(null):(ds()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fs(n)),this.Ds(e,o,n,_b(i,Ha)).next(a=>a))})}Ss(e,n){let r=new qe(tS(e));return n.forEach((i,s)=>{fh(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ds()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",fs(n)),this.fs.getDocumentsMatchingQuery(e,n,ei.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="LocalStore",e2=3e8;class t2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Le(ne),this.Fs=new es(s=>Wm(s),Hm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zD(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function n2(t,e,n,r){return new t2(t,e,n,r)}async function kS(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:a}))})})}function r2(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let E=F.resolve();return m.forEach(k=>{E=E.next(()=>d.getEntry(u,k)).next(A=>{const P=c.docVersions.get(k);de(P!==null,48541),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function xS(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function i2(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(ot.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(A,P,S){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=e2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,E,d)&&a.push(n.li.updateTargetData(s,E))});let u=sr(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(s2(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(J.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function s2(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=sr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H(Zm,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function o2(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function a2(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function fp(t,e,n){const r=Z(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!po(o))throw o;H(Zm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function u0(t,e,n){const r=Z(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=Z(u),m=f.Fs.get(d);return m!==void 0?F.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,An(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(a=>(l2(r,qb(e),a),{documents:a,ks:s})))}function l2(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class c0{constructor(){this.activeTargetIds=Jb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u2{constructor(){this.vo=new c0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new c0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="ConnectivityMonitor";class d0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(h0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(h0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu=null;function pp(){return tu===null?tu=function(){return 268435456+Math.round(2147483648*Math.random())}():tu++,"0x"+tu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="RestConnection",h2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class d2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===uc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=pp(),a=this.Qo(e,n.toUriEncodedString());H(Ld,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(a),d=fi(c);return this.zo(e,a,u,r,d).then(f=>(H(Ld,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Wi(Ld,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ho}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=h2[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection",qo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ls extends d2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ls.c_){const e=PI();qo(e,NI.STAT_EVENT,n=>{n.stat===tp.PROXY?H(ct,"STAT_EVENT: detected buffering proxy"):n.stat===tp.NOPROXY&&H(ct,"STAT_EVENT: detected no buffering proxy")}),Ls.c_=!0}}zo(e,n,r,i,s){const o=pp();return new Promise((a,u)=>{const c=new RI;c.setWithCredentials(!0),c.listenOnce(AI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case wu.NO_ERROR:const f=c.getResponseJson();H(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case wu.TIMEOUT:H(ct,`RPC '${e}' ${o} timed out`),u(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case wu.HTTP_ERROR:const m=c.getStatus();if(H(ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const k=E==null?void 0:E.error;if(k&&k.status&&k.message){const A=function(S){const v=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(k.status);u(new W(A,k.message))}else u(new W(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(V.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(ct,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(ct,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=pp(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");H(ct,`Creating RPC '${e}' stream ${i}: ${c}`,a);const d=o.createWebChannel(c,a);this.I_(d);let f=!1,m=!1;const E=new f2({Jo:k=>{m?H(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(f||(H(ct,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),H(ct,`RPC '${e}' stream ${i} sending:`,k),d.send(k))},Ho:()=>d.close()});return qo(d,na.EventType.OPEN,()=>{m||(H(ct,`RPC '${e}' stream ${i} transport opened.`),E.i_())}),qo(d,na.EventType.CLOSE,()=>{m||(m=!0,H(ct,`RPC '${e}' stream ${i} transport closed`),E.o_(),this.E_(d))}),qo(d,na.EventType.ERROR,k=>{m||(m=!0,Wi(ct,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),E.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),qo(d,na.EventType.MESSAGE,k=>{var A;if(!m){const P=k.data[0];de(!!P,16349);const S=P,v=(S==null?void 0:S.error)||((A=S[0])==null?void 0:A.error);if(v){H(ct,`RPC '${e}' stream ${i} received error:`,v);const _=v.status;let N=function(T){const y=Fe[T];if(y!==void 0)return fS(y)}(_),L=v.message;_==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&Wi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=V.INTERNAL,L="Unknown error status: "+_+" with message "+v.message),m=!0,E.o_(new W(N,L)),d.close()}else H(ct,`RPC '${e}' stream ${i} received:`,P),E.__(P)}}),Ls.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return bI()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){return new Ls(t)}function Vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t){return new yD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ls.c_=!1;class RS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="PersistentStream";class AS{constructor(e,n,r,i,s,o,a,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new RS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(f0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(f0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m2 extends AS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ED(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Pn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=dp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=ap(u)?{documents:SD(s,u)}:{query:CD(s,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gS(s,o.resumeToken);const c=up(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=pc(s,o.snapshotVersion.toTimestamp());const c=up(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=xD(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=dp(this.serializer),n.removeTarget=e,this.K_(n)}}class g2 extends AS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ID(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=dp(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TD(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{}class y2 extends _2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,cp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,cp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function v2(t,e,n,r){return new y2(t,e,n,r)}class w2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ir(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="RemoteStore";class E2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new ii(1e3),this.Va=new ii(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ns(this)&&(H(Ln,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.da.add(4),await fl(c),c.ga.set("Unknown"),c.da.delete(4),await _h(c)}(this))})}),this.ga=new w2(r,i)}}async function _h(t){if(ns(t))for(const e of t.ma)await e(!0)}async function fl(t){for(const e of t.ma)await e(!1)}function mp(t,e){return t.Ea.get(e)||void 0}function NS(t,e){const n=Z(t),r=mp(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(a,u){const c=mp(a,u);c!==void 0&&a.Ra.delete(c);const d=function(m,E){return E%2!=0?m.Va.next():m.Aa.next()}(a,u);return a.Ea.set(u,d),a.Ra.set(d,u),d}(n,e.targetId);H(Ln,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Hn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),rg(n)?ng(n):go(n).O_()&&tg(n,s)}function eg(t,e){const n=Z(t),r=go(n),i=mp(n,e);H(Ln,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&PS(n,i),n.Ia.size===0&&(r.O_()?r.L_():ns(n)&&n.ga.set("Unknown"))}function tg(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void H(Ln,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}go(t).Z_(e)}function PS(t,e){t.pa.$e(e),go(t).X_(e)}function ng(t){t.pa=new pD({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):re()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),go(t).start(),t.ga.ua()}function rg(t){return ns(t)&&!go(t).x_()&&t.Ia.size>0}function ns(t){return Z(t).da.size===0}function bS(t){t.pa=void 0}async function T2(t){t.ga.set("Online")}async function I2(t){t.Ia.forEach((e,n)=>{tg(t,e)})}async function S2(t,e){bS(t),rg(t)?(t.ga.ha(e),ng(t)):t.ga.set("Unknown")}async function C2(t,e,n){if(t.ga.set("Online"),e instanceof mS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds){if(i.Ia.has(a)){const u=i.Ra.get(a);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(a)),i.Ia.delete(a)}i.pa.removeTarget(a)}}(t,e)}catch(r){H(Ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gc(t,r)}else if(e instanceof Su?t.pa.Xe(e):e instanceof pS?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await xS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.pa.Tt(o);a.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ia.get(d);f&&s.Ia.set(d,f.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,d)=>{const f=s.Ia.get(c);if(!f)return;s.Ia.set(c,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),PS(s,c);const m=new Hn(f.target,c,d,f.sequenceNumber);tg(s,m)});const u=function(d,f){const m=new Map;f.targetChanges.forEach((k,A)=>{const P=d.Ra.get(A);P!==void 0&&m.set(P,k)});let E=new Le(ne);return f.targetMismatches.forEach((k,A)=>{const P=d.Ra.get(k);P!==void 0&&(E=E.insert(P,A))}),new hl(f.snapshotVersion,m,E,f.documentUpdates,f.resolvedLimboDocuments)}(s,a);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){H(Ln,"Failed to raise snapshot:",r),await gc(t,r)}}async function gc(t,e,n){if(!po(e))throw e;t.da.add(1),await fl(t),t.ga.set("Offline"),n||(n=()=>xS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Ln,"Retrying IndexedDB access"),await n(),t.da.delete(1),await _h(t)})}function DS(t,e){return e().catch(n=>gc(t,n,e))}async function yh(t){const e=Z(t),n=si(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bm;for(;k2(e);)try{const i=await o2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,x2(e,i)}catch(i){await gc(e,i)}OS(e)&&MS(e)}function k2(t){return ns(t)&&t.Ta.length<10}function x2(t,e){t.Ta.push(e);const n=si(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function OS(t){return ns(t)&&!si(t).x_()&&t.Ta.length>0}function MS(t){si(t).start()}async function R2(t){si(t).ra()}async function A2(t){const e=si(t);for(const n of t.Ta)e.ea(n.mutations)}async function N2(t,e,n){const r=t.Ta.shift(),i=Gm.from(r,e,n);await DS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yh(t)}async function P2(t,e){e&&si(t).Y_&&await async function(r,i){if(function(o){return hD(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();si(r).B_(),await DS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yh(r)}}(t,e),OS(t)&&MS(t)}async function p0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H(Ln,"RemoteStore received new credentials");const r=ns(n);n.da.add(3),await fl(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await _h(n)}async function b2(t,e){const n=Z(t);e?(n.da.delete(2),await _h(n)):e||(n.da.add(2),await fl(n),n.ga.set("Unknown"))}function go(t){return t.ya||(t.ya=function(n,r,i){const s=Z(n);return s.sa(),new m2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:T2.bind(null,t),Yo:I2.bind(null,t),t_:S2.bind(null,t),H_:C2.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),rg(t)?ng(t):t.ga.set("Unknown")):(await t.ya.stop(),bS(t))})),t.ya}function si(t){return t.wa||(t.wa=function(n,r,i){const s=Z(n);return s.sa(),new g2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:R2.bind(null,t),t_:P2.bind(null,t),ta:A2.bind(null,t),na:N2.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await yh(t)):(await t.wa.stop(),t.Ta.length>0&&(H(Ln,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ig(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sg(t,e){if(ir("AsyncQueue",`${e}: ${t}`),po(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ra(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.Sa=new Le(K.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class to{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new to(e,n,Vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class O2{constructor(){this.queries=g0(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=g0(),s.forEach((o,a)=>{for(const u of a.va)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function g0(){return new es(t=>eS(t),dh)}async function og(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new D2,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=sg(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&lg(n)}async function ag(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function M2(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.va)a.Na(i)&&(r=!0);o.Ca=i}}r&&lg(n)}function L2(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function lg(t){t.xa.forEach(e=>{e.next()})}var gp,_0;(_0=gp||(gp={})).Ba="default",_0.Cache="cache";class ug{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new to(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==gp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.key=e}}class VS{constructor(e){this.key=e}}class V2{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=re(),this.mutatedKeys=re(),this.iu=tS(e),this.su=new Vs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new m0,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=fh(this.query,f)?f:null,k=!!m&&this.mutatedKeys.has(m.key),A=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let P=!1;m&&E?m.data.isEqual(E.data)?k!==A&&(r.track({type:3,doc:E}),P=!0):this.uu(m,E)||(r.track({type:2,doc:E}),P=!0,(u&&this.iu(E,u)>0||c&&this.iu(E,c)<0)&&(a=!0)):!m&&E?(r.track({type:0,doc:E}),P=!0):m&&!E&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(a=!0)),P&&(E?(o=o.add(E),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{su:o,au:r,bs:a,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((d,f)=>function(E,k){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:P})}};return A(E)-A(k)}(d.type,f.type)||this.iu(d.doc,f.doc)),this.cu(r),i=i??!1;const a=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new to(this.query,e.su,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:a}:{hu:a}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new m0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=re(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new VS(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new LS(r))}),n}Tu(e){this.tu=e.ks,this.ru=re();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return to.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const cg="SyncEngine";class F2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class U2{constructor(e){this.key=e,this.Eu=!1}}class j2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new es(a=>eS(a),dh),this.Vu=new Map,this.du=new Set,this.mu=new Le(K.comparator),this.fu=new Map,this.gu=new Ym,this.pu={},this.yu=new Map,this.wu=ii.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function B2(t,e,n=!0){const r=zS(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await FS(r,e,n,!0),i}async function $2(t,e){const n=zS(t);await FS(n,e,!0,!1)}async function FS(t,e,n,r){const i=await a2(t.localStore,An(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await z2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&NS(t.remoteStore,i),a}async function z2(t,e,n,r,i){t.bu=(f,m,E)=>async function(A,P,S,v){let _=P.view._u(S);_.bs&&(_=await u0(A.localStore,P.query,!1).then(({documents:T})=>P.view._u(T,_)));const N=v&&v.targetChanges.get(P.targetId),L=v&&v.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(_,A.isPrimaryClient,N,L);return v0(A,P.targetId,U.hu),U.snapshot}(t,f,m,E);const s=await u0(t.localStore,e,!0),o=new V2(e,s.ks),a=o._u(s.documents),u=dl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);v0(t,n,c.hu);const d=new F2(e,n,o);return t.Au.set(e,d),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function W2(t,e,n){const r=Z(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!dh(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await fp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&eg(r.remoteStore,i.targetId),_p(r,i.targetId)}).catch(fo)):(_p(r,i.targetId),await fp(r.localStore,i.targetId,!0))}async function H2(t,e){const n=Z(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),eg(n.remoteStore,r.targetId))}async function q2(t,e,n){const r=Z2(t);try{const i=await function(o,a){const u=Z(o),c=Ie.now(),d=a.reduce((E,k)=>E.add(k.key),re());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=sr(),A=re();return u.xs.getEntries(E,d).next(P=>{k=P,k.forEach((S,v)=>{v.isValidDocument()||(A=A.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,k)).next(P=>{f=P;const S=[];for(const v of a){const _=oD(v,f.get(v.key).overlayedDocument);_!=null&&S.push(new ts(v.key,_,qI(_.value.mapValue),Nn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,a)}).next(P=>{m=P;const S=P.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(E,P.batchId,S)})}).then(()=>({batchId:m.batchId,changes:rS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.pu[o.currentUser.toKey()];c||(c=new Le(ne)),c=c.insert(a,u),o.pu[o.currentUser.toKey()]=c}(r,i.batchId,n),await pl(r,i.changes),await yh(r.remoteStore)}catch(i){const s=sg(i,"Failed to persist write");n.reject(s)}}async function US(t,e){const n=Z(t);try{const r=await i2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?de(o.Eu,14607):i.removedDocuments.size>0&&(de(o.Eu,42227),o.Eu=!1))}),await pl(n,r,e)}catch(r){await fo(r)}}function y0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const a=o.view.Oa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Z(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.va)m.Oa(a)&&(c=!0)}),c&&lg(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function G2(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new Le(K.comparator);o=o.insert(s,ft.newNoDocument(s,J.min()));const a=re().add(s),u=new hl(J.min(),new Map,new Le(ne),o,a);await US(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),hg(r)}else await fp(r.localStore,e,!1).then(()=>_p(r,e,n)).catch(fo)}async function K2(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await r2(n.localStore,e);BS(n,r,null),jS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pl(n,i)}catch(i){await fo(i)}}async function Q2(t,e,n){const r=Z(t);try{const i=await function(o,a){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(de(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);BS(r,e,n),jS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pl(r,i)}catch(i){await fo(i)}}function jS(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function BS(t,e,n){const r=Z(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function _p(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||$S(t,r)})}function $S(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(eg(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),hg(t))}function v0(t,e,n){for(const r of n)r instanceof LS?(t.gu.addReference(r.key,e),Y2(t,r)):r instanceof VS?(H(cg,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||$S(t,r.key)):Q(19791,{Cu:r})}function Y2(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(H(cg,"New document in limbo: "+n),t.du.add(r),hg(t))}function hg(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new K(ge.fromString(e)),r=t.wu.next();t.fu.set(r,new U2(n)),t.mu=t.mu.insert(n,r),NS(t.remoteStore,new Hn(An(hh(n.path)),r,"TargetPurposeLimboResolution",lh.ce))}}async function pl(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((a,u)=>{o.push(r.bu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Jm.Es(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.Ts,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>F.forEach(m.Is,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!po(f))throw f;H(Zm,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.vs.get(m),k=E.snapshotVersion,A=E.withLastLimboFreeSnapshotVersion(k);d.vs=d.vs.insert(m,A)}}}(r.localStore,s))}async function X2(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H(cg,"User change. New user:",e.toKey());const r=await kS(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(a=>{a.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pl(n,r.Ns)}}function J2(t,e){const n=Z(t),r=n.fu.get(e);if(r&&r.Eu)return re().add(r.key);{let i=re();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const a=n.Au.get(o);i=i.unionWith(a.view.ou)}return i}}function zS(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=US.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=G2.bind(null,e),e.Ru.H_=M2.bind(null,e.eventManager),e.Ru.Du=L2.bind(null,e.eventManager),e}function Z2(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=K2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q2.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gh(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return n2(this.persistence,new ZD,e.initialUser,this.serializer)}xu(e){return new CS(Xm.Vi,this.serializer)}Mu(e){return new u2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class eO extends _c{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){de(this.persistence.referenceDelegate instanceof mc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new FD(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new CS(r=>mc.Vi(r,n),this.serializer)}}class yp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>y0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X2.bind(null,this.syncEngine),await b2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new O2}()}createDatastore(e){const n=gh(e.databaseInfo.databaseId),r=p2(e.databaseInfo);return v2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new E2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>y0(this.syncEngine,n,0),function(){return d0.v()?new d0:new c2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new j2(i,s,o,a,u,c);return d&&(f.Su=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H(Ln,"RemoteStore shutting down."),s.da.add(5),await fl(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}yp.provider={build:()=>new yp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="FirestoreClient";class tO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=jm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(oi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(oi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fd(t,e){t.asyncQueue.verifyOperationInProgress(),H(oi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function w0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nO(t);H(oi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>p0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>p0(e.remoteStore,i)),t._onlineComponents=e}async function nO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(oi,"Using user provided OfflineComponentProvider");try{await Fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await Fd(t,new _c)}}else H(oi,"Using default OfflineComponentProvider"),await Fd(t,new eO(void 0));return t._offlineComponents}async function WS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(oi,"Using user provided OnlineComponentProvider"),await w0(t,t._uninitializedComponentsProvider._online)):(H(oi,"Using default OnlineComponentProvider"),await w0(t,new yp))),t._onlineComponents}function rO(t){return WS(t).then(e=>e.syncEngine)}async function yc(t){const e=await WS(t),n=e.eventManager;return n.onListen=B2.bind(null,e.syncEngine),n.onUnlisten=W2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=H2.bind(null,e.syncEngine),n}function iO(t,e,n,r){const i=new dg(r),s=new ug(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>og(await yc(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>ag(await yc(t),s))}}function sO(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new dg({next:m=>{d.Ku(),o.enqueueAndForget(()=>ag(s,f));const E=m.docs.has(a);!E&&m.fromCache?c.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new ug(hh(a.path),d,{includeMetadataChanges:!0,Wa:!0});return og(s,f)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}function oO(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new dg({next:m=>{d.Ku(),o.enqueueAndForget(()=>ag(s,f)),m.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new ug(a,d,{includeMetadataChanges:!0,Wa:!0});return og(s,f)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}function aO(t,e){const n=new Yn;return t.asyncQueue.enqueueAndForget(async()=>q2(await rO(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="ComponentProvider",E0=new Map;function uO(t,e,n,r,i){return new xb(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,HS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="firestore.googleapis.com",T0=!0;class I0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qS,this.ssl=T0}else this.host=e.host,this.ssl=e.ssl??T0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=SS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LD)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new I0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new I0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sb;switch(r.type){case"firstParty":return new ub(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=E0.get(n);r&&(H(lO,"Removing Datastore"),E0.delete(n),r.terminate())}(this),Promise.resolve()}}function cO(t,e,n,r={}){var c;t=fn(t,vh);const i=fi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&ih(`https://${a}`),s.host!==qS&&s.host!==a&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:a,ssl:i,emulatorOptions:r};if(!Jr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=ht.MOCK_USER;else{d=Mm(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ht(m)}t._authCredentials=new ob(new OI(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fr(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ul(n,Me._jsonSchema))return new Me(e,r||null,new K(ge.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Be("string",Me._jsonSchemaVersion),referencePath:Be("string")};class Gr extends fr{constructor(e,n,r){super(e,n,hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new K(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function wh(t,e,...n){if(t=Ge(t),MI("collection","path",e),t instanceof vh){const r=ge.fromString(e,...n);return Lv(r),new Gr(t,null,r)}{if(!(t instanceof Me||t instanceof Gr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Lv(r),new Gr(t.firestore,null,r)}}function fg(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=jm.newId()),MI("doc","path",e),t instanceof vh){const r=ge.fromString(e,...n);return Mv(r),new Me(t,null,new K(r))}{if(!(t instanceof Me||t instanceof Gr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Mv(r),new Me(t.firestore,t instanceof Gr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="AsyncQueue";class C0{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new RS(this,"async_queue_retry"),this.lc=()=>{const r=Vd();r&&H(S0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Vd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Vd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Yn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!po(e))throw e;H(S0,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,ir("INTERNAL UNHANDLED ERROR: ",k0(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=ig.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&Q(47125,{Rc:k0(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function k0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Hi extends vh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new C0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new C0(e),this._firestoreClient=void 0,await e}}}function hO(t,e){const n=typeof t=="object"?t:oh(),r=typeof t=="string"?t:uc,i=ll(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Om("firestore");s&&cO(i,...s)}return i}function Eh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dO(t),t._firestoreClient}function dO(t){var r,i,s,o;const e=t._freezeSettings(),n=uO(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tO(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ht(ot.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ht(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ul(e,Ht._jsonSchema))return Ht.fromBase64String(e.bytes)}}Ht._jsonSchemaVersion="firestore/bytes/1.0",Ht._jsonSchema={type:Be("string",Ht._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(ul(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:Be("string",bn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ul(e,pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new pn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pn._jsonSchemaVersion="firestore/vectorValue/1.0",pn._jsonSchema={type:Be("string",pn._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=/^__.*__$/;class pO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new cl(e,this.data,n,this.fieldTransforms)}}function KS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class mg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new mg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return vc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(KS(this.dataSource)&&fO.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class mO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gh(e)}V(e,n,r,i=!1){return new mg({dataSource:e,methodName:n,targetDoc:r,path:rt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gg(t){const e=t._freezeSettings(),n=gh(t._databaseId);return new mO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QS(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);JS("Data must be an object, but it was:",o,r);const a=YS(r,o);let u,c;if(s.merge)u=new an(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Th(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vO(d,m)||d.push(m)}u=new an(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new pO(new Wt(a),u,c)}class _g extends pg{_toFieldTransform(e){return new nD(e.path,new Ya)}isEqual(e){return e instanceof _g}}function gO(t,e,n,r=!1){return yg(n,t.V(r?4:3,e))}function yg(t,e){if(XS(t=Ge(t)))return JS("Unsupported field value:",e,t),YS(t,e);if(t instanceof pg)return function(r,i){if(!KS(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=yg(a,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:pc(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pc(i.serializer,s)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ht)return{bytesValue:gS(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pn)return function(o,a){const u=o instanceof pn?o.toArray():o;return{mapValue:{fields:{[WI]:{stringValue:HI},[cc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw a.Dc("VectorValues must only contain numeric values.");return qm(a.serializer,d)})}}}}}}(r,i);if(IS(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${ah(r)}`)}(t,e)}function YS(t,e){const n={};return FI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(t,(r,i)=>{const s=yg(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function XS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof bn||t instanceof Ht||t instanceof Me||t instanceof pg||t instanceof pn||IS(t))}function JS(t,e,n){if(!XS(n)||!LI(n)){const r=ah(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Th(t,e,n){if((e=Ge(e))instanceof GS)return e._internalPath;if(typeof e=="string")return yO(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _O=new RegExp("[~\\*/\\[\\]]");function yO(t,e,n){if(e.search(_O)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new GS(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,a+t+u)}function vO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[cc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>De(o.doubleValue));return new pn(n)}convertGeoPoint(e){return new bn(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ch(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const n=ti(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);de(TS(r),9688,{name:e});const i=new Ga(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends wO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ht(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function vp(){return new _g("serverTimestamp")}const x0="@firebase/firestore",R0="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Th("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EO extends ZS{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wg{}class Eg extends wg{}function Tg(t,e,...n){let r=[];e instanceof wg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Sg).length,a=s.filter(u=>u instanceof Ig).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ig extends Eg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ig(e,n,r)}_apply(e){const n=this._parse(e);return tC(e._query,n),new fr(e.firestore,e.converter,lp(e._query,n))}_parse(e){const n=gg(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){P0(f,d);const k=[];for(const A of f)k.push(N0(u,s,A));m={arrayValue:{values:k}}}else m=N0(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||P0(f,d),m=gO(a,o,f,d==="in"||d==="not-in");return je.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Sg extends wg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)tC(o,u),o=lp(o,u)}(e._query,n),new fr(e.firestore,e.converter,lp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cg extends Eg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(s,o)}(e._query,this._field,this._direction);return new fr(e.firestore,e.converter,Hb(e._query,n))}}function kg(t,e="asc"){const n=e,r=Th("orderBy",t);return Cg._create(r,n)}class xg extends Eg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new xg(e,n,r)}_apply(e){return new fr(e.firestore,e.converter,dc(e._query,this._limit,this._limitType))}}function Rg(t){return gb("limit",t),xg._create("limit",t,"F")}function N0(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ZI(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!K.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wv(t,new K(r))}if(n instanceof Me)return Wv(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ah(n)}.`)}function P0(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function nC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Li extends ZS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Th("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Li._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Li._jsonSchemaVersion="firestore/documentSnapshot/1.0",Li._jsonSchema={type:Be("string",Li._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Cu extends Li{data(e={}){return super.data(e)}}class Vi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:TO(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi._jsonSchemaVersion="firestore/querySnapshot/1.0",Vi._jsonSchema={type:Be("string",Vi._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){t=fn(t,Me);const e=fn(t.firestore,Hi),n=Eh(e);return sO(n,t._key).then(r=>sC(e,t,r))}function rC(t){t=fn(t,fr);const e=fn(t.firestore,Hi),n=Eh(e),r=new vg(e);return eC(t._query),oO(n,t._query).then(i=>new Vi(e,r,t,i))}function b0(t,e,n){t=fn(t,Me);const r=fn(t.firestore,Hi),i=nC(t.converter,e,n),s=gg(r);return iC(r,[QS(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nn.none())])}function SO(t,e){const n=fn(t.firestore,Hi),r=fg(t),i=nC(t.converter,e),s=gg(t.firestore);return iC(n,[QS(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nn.exists(!1))]).then(()=>r)}function wp(t,...e){var c,d,f;t=Ge(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||A0(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(A0(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,a;if(t instanceof Me)o=fn(t.firestore,Hi),a=hh(t._key.path),s={next:m=>{e[r]&&e[r](sC(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=fn(t,fr);o=fn(m.firestore,Hi),a=m._query;const E=new vg(o);s={next:k=>{e[r]&&e[r](new Vi(o,E,m,k))},error:e[r+1],complete:e[r+2]},eC(t._query)}const u=Eh(o);return iO(u,a,i,s)}function iC(t,e){const n=Eh(t);return aO(n,e)}function sC(t,e,n){const r=n.docs.get(e._key),i=new vg(t);return new Li(t,i,e._key,r,new sa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){ib(pi),Zr(new nr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Hi(new ab(r.getProvider("auth-internal")),new cb(o,r.getProvider("app-check-internal")),Rb(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Qt(x0,R0,e),Qt(x0,R0,"esm2020")})();function CO(t,e){if(!Number.isFinite(t))return"—";const n=e==="%"?0:1;return Number(t.toFixed(n))}function kO({label:t,value:e,unit:n,min:r=0,max:i=100}){const s=Math.max(0,Math.min(100,(e-r)/(i-r||1)*100)),o=s>66?"High":s<33?"Low":"Stable",a=s>66?"from-amber-500 to-orange-500":s<33?"from-cyan-500 to-sky-500":"from-emerald-500 to-teal-500",u=s>66?"text-amber-500":s<33?"text-cyan-500":"text-emerald-500",c=s>66?"dark:text-amber-200":s<33?"dark:text-cyan-200":"dark:text-emerald-200",d=o==="High"?"Above target":o==="Low"?"Below target":"Within target",f=o==="High"?"Above":o==="Low"?"Below":"Within",m={"Air Temperature":{Below:"Too cold: Slow growth, poor uptake",Within:"Optimal: Good O₂, healthy roots",Above:"Too warm: Root rot, low O₂"},"Water Temperature":{Below:"Too cold: Slower nutrient uptake in solution",Within:"Optimal: Stable root environment",Above:"Too warm: Reduced dissolved O₂, root stress"},Humidity:{Below:"Too dry: Roots desiccate fast",Within:"Optimal: Moist, active roots",Above:"Too humid: Mold, bacterial growth"},TDS:{Below:"Too dilute: Nutrient deficiencies may appear",Within:"Optimal: Balanced nutrients",Above:"Too strong: Nutrient burn, stress"},Temperature:{Below:"Too cold: Slow growth, poor uptake",Within:"Optimal: Good O₂, healthy roots",Above:"Too warm: Root rot, low O₂"}},E=m[t]&&m[t][f]||"";return w.jsxs("article",{className:"dashboard-card group flex h-full flex-col rounded-2xl p-4 backdrop-blur sm:p-5",children:[w.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4",children:[w.jsxs("div",{className:"min-w-0",children:[w.jsx("p",{className:"surface-label transition group-hover:text-slate-700 dark:group-hover:text-slate-200",children:t}),w.jsxs("div",{className:"mt-2 flex items-end gap-x-2 sm:mt-3",children:[w.jsx("span",{className:"surface-title text-[1.75rem] font-bold tracking-tight leading-none sm:text-[2rem] xl:text-[2.15rem]",children:CO(e,n)}),w.jsx("span",{className:"pb-0.5 text-sm font-medium text-slate-500 dark:text-slate-400 sm:pb-1 sm:text-[0.95rem]",children:n})]})]}),w.jsx("span",{className:`dashboard-chip shrink-0 self-start ${u} ${c}`,children:o})]}),w.jsxs("div",{className:"mt-4 flex flex-1 flex-col",children:[w.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",children:w.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${a} transition-all duration-300`,style:{width:`${s}%`}})}),w.jsxs("div",{className:"mt-2 flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between",children:[w.jsx("span",{children:d}),w.jsxs("span",{children:[r," - ",i]})]}),E?w.jsx("div",{className:"mt-3 min-h-[3.5rem] rounded-2xl border border-slate-200/70 bg-slate-50/80 px-3 py-2 text-sm text-slate-600 dark:border-slate-800/70 dark:bg-slate-950/35 dark:text-slate-300",children:w.jsx("span",{className:"text-sm font-normal",children:E})}):null]})]})}function Ih({label:t,title:e,subtitle:n}){return w.jsxs("div",{className:"mb-5 space-y-2 sm:mb-6",children:[w.jsx("p",{className:"surface-label",children:t}),w.jsx("h2",{className:"surface-title text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl",children:e}),n?w.jsx("p",{className:"max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-[0.95rem]",children:n}):null]})}var xO="firebase",RO="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(xO,RO,"app");function oC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AO=oC,aC=new al("auth","Firebase",oC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new sh("@firebase/auth");function NO(t,...e){wc.logLevel<=te.WARN&&wc.warn(`Auth (${pi}): ${t}`,...e)}function ku(t,...e){wc.logLevel<=te.ERROR&&wc.error(`Auth (${pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,...e){throw Ag(t,...e)}function Dn(t,...e){return Ag(t,...e)}function lC(t,e,n){const r={...AO(),[e]:n};return new al("auth","Firebase",r).create(e,{appName:t.name})}function Kr(t){return lC(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ag(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aC.create(t,...e)}function X(t,e,...n){if(!t)throw Ag(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ku(e),new Error(e)}function ar(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function PO(){return D0()==="http:"||D0()==="https:"}function D0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PO()||ON()||"connection"in navigator)?navigator.onLine:!0}function DO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=Lm()||wI()}get(){return bO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LO=new ml(3e4,6e4);function Sh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _o(t,e,n,r,i={}){return cC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=co({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return DN()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&fi(t.emulatorConfig.host)&&(c.credentials="include"),uC.fetch()(await dC(t,t.config.apiHost,n,a),c)})}async function cC(t,e,n){t._canInitEmulator=!1;const r={...OO,...e};try{const i=new VO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw nu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw nu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw nu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lC(t,d,c);or(t,d)}}catch(i){if(i instanceof Fn)throw i;or(t,"network-request-failed",{message:String(i)})}}async function hC(t,e,n,r,i={}){const s=await _o(t,e,n,r,i);return"mfaPendingCredential"in s&&or(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function dC(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ng(t.config,i):`${t.config.apiScheme}://${i}`;return MO.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class VO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),LO.get())})}}function nu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){return _o(t,"POST","/v1/accounts:delete",e)}async function Ec(t,e){return _o(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UO(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=Pg(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:va(Ud(i.auth_time)),issuedAtTime:va(Ud(i.iat)),expirationTime:va(Ud(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ud(t){return Number(t)*1e3}function Pg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=sc(n);return i?JSON.parse(i):(ku("Failed to decode base64 JWT payload"),null)}catch(i){return ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function O0(t){const e=Pg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&jO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Za(t,Ec(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?fC(i.providerUserInfo):[],o=zO(t.providerData,s),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Tp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function $O(t){const e=Ge(t);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fC(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t,e){const n=await cC(t,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await dC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&fi(t.emulatorConfig.host)&&(u.credentials="include"),uC.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HO(t,e){return _o(t,"POST","/v2/accounts:revokeToken",Sh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):O0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=O0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new BO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Za(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UO(this,e)}reload(){return $O(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Kr(this.auth));const e=await this.getIdToken();return await Za(this,FO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:k,stsTokenManager:A}=n;X(f&&A,e,"internal-error");const P=Fs.fromJSON(this.name,A);X(typeof f=="string",e,"internal-error"),Tr(r,e.name),Tr(i,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof E=="boolean",e,"internal-error"),Tr(s,e.name),Tr(o,e.name),Tr(a,e.name),Tr(u,e.name),Tr(c,e.name),Tr(d,e.name);const S=new ln({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:P,createdAt:c,lastLoginAt:d});return k&&Array.isArray(k)&&(S.providerData=k.map(v=>({...v}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fs;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Fs;a.updateFromIdToken(r);const u=new ln({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Map;function Gn(t){ar(t instanceof Function,"Expected a class definition");let e=M0.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pC.type="NONE";const L0=pC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xu(this.userKey,i.apiKey,s),this.fullPersistenceKey=xu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ec(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Us(Gn(L0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gn(L0);const o=xu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await Ec(e,{idToken:d}).catch(()=>{});if(!m)break;f=await ln._fromGetAccountInfoResponse(e,m,d)}else f=ln._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Us(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Us(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wC(e))return"Blackberry";if(EC(e))return"Webos";if(gC(e))return"Safari";if((e.includes("chrome/")||_C(e))&&!e.includes("edge/"))return"Chrome";if(vC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mC(t=_t()){return/firefox\//i.test(t)}function gC(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _C(t=_t()){return/crios\//i.test(t)}function yC(t=_t()){return/iemobile/i.test(t)}function vC(t=_t()){return/android/i.test(t)}function wC(t=_t()){return/blackberry/i.test(t)}function EC(t=_t()){return/webos/i.test(t)}function bg(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qO(t=_t()){var e;return bg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function GO(){return MN()&&document.documentMode===10}function TC(t=_t()){return bg(t)||vC(t)||EC(t)||wC(t)||/windows phone/i.test(t)||yC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e=[]){let n;switch(t){case"Browser":n=V0(_t());break;case"Worker":n=`${V0(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t,e={}){return _o(t,"GET","/v2/passwordPolicy",Sh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=6;class XO{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??YO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new F0(this),this.idTokenSubscription=new F0(this),this.beforeStateQueue=new KO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ec(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Kr(this));const n=e?Ge(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QO(this),n=new XO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new al("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&NO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ch(t){return Ge(t)}class F0{constructor(e){this.auth=e,this.observer=null,this.addObserver=qN(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZO(t){Dg=t}function eM(t){return Dg.loadJS(t)}function tM(){return Dg.gapiScript}function nM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(t,e){const n=ll(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jr(s,e??{}))return i;or(i,"already-initialized")}return n.initialize({options:e})}function iM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sM(t,e,n){const r=Ch(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=SC(e),{host:o,port:a}=oM(e),u=a===null?"":`:${a}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Jr(c,r.config.emulator)&&Jr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,fi(o)?ih(`${s}//${o}${u}`):aM()}function SC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oM(t){const e=SC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:U0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:U0(o)}}}function U0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return hC(t,"POST","/v1/accounts:signInWithIdp",Sh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM="http://localhost";class qi extends CC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:lM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends kC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends gl{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends gl{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends gl{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e){return hC(t,"POST","/v1/accounts:signUp",Sh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=j0(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=j0(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function j0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(t){var i;if(Lt(t.app))return Promise.reject(Kr(t));const e=Ch(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new ai({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await uM(e,{returnSecureToken:!0}),r=await ai._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ic.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ic(e,n,r,i)}}function xC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(t,s,e,r):s})}async function hM(t,e,n=!1){const r=await Za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(Kr(r));const i="reauthenticate";try{const s=await Za(t,xC(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Pg(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&or(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(t,e,n=!1){if(Lt(t.app))return Promise.reject(Kr(t));const r="signIn",i=await xC(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function pM(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function mM(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}const Sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM=1e3,_M=10;class AC extends RC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_M):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AC.type="LOCAL";const yM=AC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends RC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NC.type="SESSION";const PC=NC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await vM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Og("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function EM(t){On().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function TM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function SM(){return bC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="firebaseLocalStorageDb",CM=1,Cc="firebaseLocalStorage",OC="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xh(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function kM(){const t=indexedDB.deleteDatabase(DC);return new _l(t).toPromise()}function Ip(){const t=indexedDB.open(DC,CM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:OC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await kM(),e(await Ip()))})})}async function B0(t,e,n){const r=xh(t,!0).put({[OC]:e,value:n});return new _l(r).toPromise()}async function xM(t,e){const n=xh(t,!1).get(e),r=await new _l(n).toPromise();return r===void 0?null:r.value}function $0(t,e){const n=xh(t,!0).delete(e);return new _l(n).toPromise()}const RM=800,AM=3;class MC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ip(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kh._getInstance(SM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await TM(),!this.activeServiceWorker)return;this.sender=new wM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ip();return await B0(e,Sc,"1"),await $0(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>B0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xh(i,!1).getAll();return new _l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MC.type="LOCAL";const NM=MC;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t,e){return e?Gn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends CC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bM(t){return fM(t.auth,new Mg(t),t.bypassAuthState)}function DM(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),dM(n,new Mg(t),t.bypassAuthState)}async function OM(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),hM(n,new Mg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bM;case"linkViaPopup":case"linkViaRedirect":return OM;case"reauthViaPopup":case"reauthViaRedirect":return DM;default:or(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=new ml(2e3,1e4);class Rs extends LC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=Og();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MM.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM="pendingRedirect",Ru=new Map;class VM extends LC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const r=await FM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FM(t,e){const n=BM(e),r=jM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UM(t,e){Ru.set(t._key(),e)}function jM(t){return Gn(t._redirectPersistence)}function BM(t){return xu(LM,t.config.apiKey,t.name)}async function $M(t,e,n=!1){if(Lt(t.app))return Promise.reject(Kr(t));const r=Ch(t),i=PM(r,e),o=await new VM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=10*60*1e3;class WM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!VC(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zM&&this.cachedEventUids.clear(),this.cachedEventUids.has(z0(e))}saveEventToCache(e){this.cachedEventUids.add(z0(e)),this.lastProcessedEventTime=Date.now()}}function z0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function VC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(t,e={}){return _o(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KM=/^https?/;async function QM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qM(t);for(const n of e)try{if(YM(n))return}catch{}or(t,"unauthorized-domain")}function YM(t){const e=Ep(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KM.test(n))return!1;if(GM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=new ml(3e4,6e4);function W0(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JM(t){return new Promise((e,n)=>{var i,s,o;function r(){W0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W0(),n(Dn(t,"network-request-failed"))},timeout:XM.get()})}if((s=(i=On().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=On().gapi)!=null&&o.load)r();else{const a=nM("iframefcb");return On()[a]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},eM(`${tM()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Au=null,e})}let Au=null;function ZM(t){return Au=Au||JM(t),Au}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=new ml(5e3,15e3),tL="__/auth/iframe",nL="emulator/auth/iframe",rL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sL(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ng(e,nL):`https://${t.config.authDomain}/${tL}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=iL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${co(r).slice(1)}`}async function oL(t){const e=await ZM(t),n=On().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:sL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),a=On().setTimeout(()=>{s(o)},eL.get());function u(){On().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lL=500,uL=600,cL="_blank",hL="http://localhost";class H0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dL(t,e,n,r=lL,i=uL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...aL,width:r.toString(),height:i.toString(),top:s,left:o},c=_t().toLowerCase();n&&(a=_C(c)?cL:n),mC(c)&&(e=e||hL,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,k])=>`${m}${E}=${k},`,"");if(qO(c)&&a!=="_self")return fL(e||"",a),new H0(null);const f=window.open(e||"",a,d);X(f,t,"popup-blocked");try{f.focus()}catch{}return new H0(f)}function fL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL="__/auth/handler",mL="emulator/auth/handler",gL=encodeURIComponent("fac");async function q0(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof kC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof gl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${gL}=${encodeURIComponent(u)}`:"";return`${_L(t)}?${co(a).slice(1)}${c}`}function _L({config:t}){return t.emulator?Ng(t,mL):`https://${t.authDomain}/${pL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="webStorageSupport";class yL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=PC,this._completeRedirectFn=$M,this._overrideRedirectResult=UM}async _openPopup(e,n,r,i){var o;ar((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await q0(e,n,r,Ep(),i);return dL(e,s,Og())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await q0(e,n,r,Ep(),i);return EM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oL(e),r=new WM(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jd,{type:jd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[jd];s!==void 0&&n(!!s),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TC()||gC()||bg()}}const vL=yL;var G0="@firebase/auth",K0="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TL(t){Zr(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IC(t)},c=new JO(r,i,s,u);return iM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new nr("auth-internal",e=>{const n=Ch(e.getProvider("auth").getImmediate());return(r=>new wL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(G0,K0,EL(t)),Qt(G0,K0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=5*60,SL=vI("authIdTokenMaxAge")||IL;let Q0=null;const CL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SL)return;const i=n==null?void 0:n.token;Q0!==i&&(Q0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kL(t=oh()){const e=ll(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rM(t,{popupRedirectResolver:vL,persistence:[NM,yM,PC]}),r=vI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=CL(s.toString());mM(n,o,()=>o(n.currentUser)),pM(n,a=>o(a))}}const i=_I("auth");return i&&sM(n,`http://${i}`),n}function xL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ZO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TL("Browser");var Y0={};const X0="@firebase/database",J0="1.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FC="";function RL(t){FC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:za(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AL(e)}}catch{}return new NL},bi=UC("localStorage"),PL=UC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new sh("@firebase/database"),bL=function(){let t=1;return function(){return t++}}(),jC=function(t){const e=QN(t),n=new HN;n.update(e);const r=n.digest();return Dm.encodeByteArray(r)},yl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=yl.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let wa=null,Z0=!0;const DL=function(t,e){z(!0,"Can't turn on custom loggers persistently."),Bs.logLevel=te.VERBOSE,wa=Bs.log.bind(Bs)},pt=function(...t){if(Z0===!0&&(Z0=!1,wa===null&&PL.get("logging_enabled")===!0&&DL()),wa){const e=yl.apply(null,t);wa(e)}},vl=function(t){return function(...e){pt(t,...e)}},Sp=function(...t){const e="FIREBASE INTERNAL ERROR: "+yl(...t);Bs.error(e)},lr=function(...t){const e=`FIREBASE FATAL ERROR: ${yl(...t)}`;throw Bs.error(e),new Error(e)},bt=function(...t){const e="FIREBASE WARNING: "+yl(...t);Bs.warn(e)},OL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},BC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ML=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},no="[MIN_NAME]",Gi="[MAX_NAME]",yo=function(t,e){if(t===e)return 0;if(t===no||e===Gi)return-1;if(e===no||t===Gi)return 1;{const n=ew(t),r=ew(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},LL=function(t,e){return t===e?0:t<e?-1:1},Go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Lg=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=Lg(t[e[r]]);return n+="}",n},$C=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zC=function(t){z(!BC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},VL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},UL=new RegExp("^-?(0*)\\d{1,10}$"),jL=-2147483648,BL=2147483647,ew=function(t){if(UL.test(t)){const e=Number(t);if(e>=jL&&e<=BL)return e}return null},vo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},$L=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ea=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Lt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class Nu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="5",WC="v",HC="s",qC="r",GC="f",KC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,QC="ls",YC="p",Cp="ac",XC="websocket",JC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ek(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===XC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===JC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HL(t)&&(n.ns=t.namespace);const i=[];return Jt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(){this.counters_={}}incrementCounter(e,n=1){dr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd={},$d={};function Fg(t){const e=t.toString();return Bd[e]||(Bd[e]=new qL),Bd[e]}function GL(t,e){const n=t.toString();return $d[n]||($d[n]=e()),$d[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="start",QL="close",YL="pLPCommand",XL="pRTLPCB",tk="id",nk="pw",rk="ser",JL="cb",ZL="seg",eV="ts",tV="d",nV="dframe",ik=1870,sk=30,rV=ik-sk,iV=25e3,sV=3e4;class As{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vl(e),this.stats_=Fg(n),this.urlFn=u=>(this.appCheckToken&&(u[Cp]=this.appCheckToken),ek(n,JC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new KL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sV)),ML(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ug((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===tw)this.id=a,this.password=u;else if(o===QL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[tw]="t",r[rk]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[JL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[WC]=Vg,this.transportSessionId&&(r[HC]=this.transportSessionId),this.lastSessionId&&(r[QC]=this.lastSessionId),this.applicationId&&(r[YC]=this.applicationId),this.appCheckToken&&(r[Cp]=this.appCheckToken),typeof location<"u"&&location.hostname&&KC.test(location.hostname)&&(r[qC]=GC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){As.forceAllow_=!0}static forceDisallow(){As.forceDisallow_=!0}static isAvailable(){return As.forceAllow_?!0:!As.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VL()&&!FL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mI(n),i=$C(r,rV);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nV]="t",r[tk]=e,r[nk]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ug{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bL(),window[YL+this.uniqueCallbackIdentifier]=e,window[XL+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ug.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tk]=this.myID,e[nk]=this.myPW,e[rk]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sk+r.length<=ik;){const o=this.pendingSegs.shift();r=r+"&"+ZL+i+"="+o.seg+"&"+eV+i+"="+o.ts+"&"+tV+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iV)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=16384,aV=45e3;let kc=null;typeof MozWebSocket<"u"?kc=MozWebSocket:typeof WebSocket<"u"&&(kc=WebSocket);class on{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vl(this.connId),this.stats_=Fg(n),this.connURL=on.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[WC]=Vg,typeof location<"u"&&location.hostname&&KC.test(location.hostname)&&(o[qC]=GC),n&&(o[HC]=n),r&&(o[QC]=r),i&&(o[Cp]=i),s&&(o[YC]=s),ek(e,XC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bi.set("previous_websocket_failure",!0);try{let r;LN(),this.mySock=new kc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&kc!==null&&!on.forceDisallow_}static previouslyFailed(){return bi.isInMemoryStorage||bi.get("previous_websocket_failure")===!0}markConnectionHealthy(){bi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=za(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$C(n,oV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}on.responsesRequiredToBeHealthy=2;on.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{static get ALL_TRANSPORTS(){return[As,on]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=on&&on.isAvailable();let r=n&&!on.previouslyFailed();if(e.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[on];else{const i=this.transports_=[];for(const s of el.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);el.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}el.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=6e4,uV=5e3,cV=10*1024,hV=100*1024,zd="t",nw="d",dV="s",rw="r",fV="e",iw="o",sw="a",ow="n",aw="p",pV="h";class mV{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vl("c:"+this.id+":"),this.transportManager_=new el(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ea(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zd in e){const n=e[zd];n===sw?this.upgradeIfSecondaryHealthy_():n===rw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===iw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Go("t",e),r=Go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:aw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ow,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Go("t",e),r=Go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Go(zd,e);if(nw in e){const r=e[nw];if(n===pV){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ow){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dV?this.onConnectionShutdown_(r):n===rw?this.onReset_(r):n===fV?Sp("Server Error: "+r):n===iw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vg!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ea(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ea(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:aw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends ak{static getInstance(){return new xc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=32,uw=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new Ce("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function li(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function lk(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uk(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ck(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ce(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return Gt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hk(t,e){if(li(t)!==li(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function un(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(li(t)>li(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _V{constructor(e,n){this.errorPrefix_=n,this.parts_=uk(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rh(this.parts_[r]);dk(this)}}function yV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rh(e),dk(t)}function vV(t){const e=t.parts_.pop();t.byteLength_-=rh(e),t.parts_.length>0&&(t.byteLength_-=1)}function dk(t){if(t.byteLength_>uw)throw new Error(t.errorPrefix_+"has a key path longer than "+uw+" bytes ("+t.byteLength_+").");if(t.parts_.length>lw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lw+") or object contains a cycle "+ki(t))}function ki(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends ak{static getInstance(){return new jg}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=1e3,wV=60*5*1e3,cw=30*1e3,EV=1.3,TV=3e4,IV="server_kill",hw=3;class Xn extends ok{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Xn.nextPersistentConnectionId_++,this.log_=vl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ko,this.maxReconnectDelay_=wV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new nh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Xn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dr(e,"w")){const r=Xs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||WN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sp("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ko,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ko,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TV&&(this.reconnectDelay_=Ko),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new mV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,E=>{bt(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(IV)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&bt(f),u())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qf(this.interruptReasons_)&&(this.reconnectDelay_=Ko,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Lg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hw&&(this.reconnectDelay_=cw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+FC.replace(/\./g,"-")]=1,Lm()?e["framework.cordova"]=1:wI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xc.getInstance().currentlyOnline();return Qf(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(no,e),i=new le(no,n);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;class fk extends Rh{static get __EMPTY_NODE(){return ru}static set __EMPTY_NODE(e){ru=e}compare(e,n){return yo(e.name,n.name)}isDefinedOn(e){throw uo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(Gi,ru)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,ru)}toString(){return".key"}}const $s=new fk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Rt.EMPTY_NODE,this.right=s??Rt.EMPTY_NODE}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class SV{copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,n=Rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new iu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new iu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new iu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new iu(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new SV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t,e){return yo(t.name,e.name)}function Bg(t,e){return yo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp;function kV(t){kp=t}const pk=function(t){return typeof t=="number"?"number:"+zC(t):"string:"+t},mk=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dr(e,".sv"),"Priority must be a string or number.")}else z(t===kp||t.isEmpty(),"priority of unexpected type.");z(t===kp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dw;class Qe{static set __childrenNodeConstructor(e){dw=e}static get __childrenNodeConstructor(){return dw}constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mk(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:se(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||li(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pk(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zC(this.value_):e+=this.value_,this.lazyHash_=jC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(n),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gk,_k;function xV(t){gk=t}function RV(t){_k=t}class AV extends Rh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?yo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Gi,new Qe("[PRIORITY-POST]",_k))}makePost(e,n){const r=gk(e);return new le(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const mt=new AV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV=Math.log(2);class PV{constructor(e){const n=s=>parseInt(Math.log(s)/NV,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new Je(m,f.node,Je.BLACK,null,null);{const E=parseInt(d/2,10)+u,k=i(u,E),A=i(E+1,c);return f=t[E],m=n?n(f):f,new Je(m,f.node,Je.BLACK,k,A)}},s=function(u){let c=null,d=null,f=t.length;const m=function(k,A){const P=f-k,S=f;f-=k;const v=i(P+1,S),_=t[P],N=n?n(_):_;E(new Je(N,_.node,A,null,v))},E=function(k){c?(c.left=k,c=k):(d=k,c=k)};for(let k=0;k<u.count;++k){const A=u.nextBitIsOne(),P=Math.pow(2,u.count-(k+1));A?m(P,Je.BLACK):(m(P,Je.BLACK),m(P,Je.RED))}return d},o=new PV(t.length),a=s(o);return new Rt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wd;const us={};class Kn{static get Default(){return z(us&&mt,"ChildrenNode.ts has not been loaded"),Wd=Wd||new Kn({".priority":us},{".priority":mt}),Wd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Rt?n:null}hasIndex(e){return dr(this.indexSet_,e.toString())}addIndex(e,n){z(e!==$s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Rc(r,e.getCompare()):a=us;const u=e.toString(),c={...this.indexSet_};c[u]=e;const d={...this.indexes_};return d[u]=a,new Kn(d,c)}addToIndexes(e,n){const r=oc(this.indexes_,(i,s)=>{const o=Xs(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===us)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(le.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Rc(a,o.getCompare())}else return us;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new le(e.name,a))),u.insert(e,e.node)}});return new Kn(r,this.indexSet_)}removeFromIndexes(e,n){const r=oc(this.indexes_,i=>{if(i===us)return i;{const s=n.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new Kn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;class he{static get EMPTY_NODE(){return Qo||(Qo=new he(new Rt(Bg),null,Kn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&mk(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qo}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qo:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Qo:this.priorityNode_;return new he(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{z(se(e)!==".priority"||li(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Te(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(mt,(o,a)=>{n[o]=a.val(e),r++,s&&he.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pk(this.getPriority().val())+":"),this.forEachChild(mt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wl?-1:0}withIndex(e){if(e===$s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(mt),i=n.getIterator(mt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$s?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bV extends he{constructor(){super(new Rt(Bg),he.EMPTY_NODE,Kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const wl=new bV;Object.defineProperties(le,{MIN:{value:new le(no,he.EMPTY_NODE)},MAX:{value:new le(Gi,wl)}});fk.__EMPTY_NODE=he.EMPTY_NODE;Qe.__childrenNodeConstructor=he;kV(wl);RV(wl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV=!0;function tt(t,e=null){if(t===null)return he.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,tt(e))}if(!(t instanceof Array)&&DV){const n=[];let r=!1;if(Jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=tt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new le(o,u)))}}),n.length===0)return he.EMPTY_NODE;const s=Rc(n,CV,o=>o.name,Bg);if(r){const o=Rc(n,mt.getCompare());return new he(s,tt(e),new Kn({".priority":o},{".priority":mt}))}else return new he(s,tt(e),Kn.Default)}else{let n=he.EMPTY_NODE;return Jt(t,(r,i)=>{if(dr(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}xV(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV extends Rh{constructor(e){super(),this.indexPath_=e,z(!oe(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?yo(e.name,n.name):s}makePost(e,n){const r=tt(e),i=he.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,i)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,wl);return new le(Gi,e)}toString(){return uk(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV extends Rh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?yo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=tt(e);return new le(n,r)}toString(){return".value"}}const LV=new MV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(t){return{type:"value",snapshotNode:t}}function FV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function UV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:no}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new $g;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===mt?n="$priority":t.index_===LV?n="$value":t.index_===$s?n="$key":(z(t.index_ instanceof OV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function mw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==mt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends ok{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=vl("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ac.getListenId_(e,r),a={};this.listens_[o]=a;const u=pw(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Xs(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Ac.getListenId_(e,n);delete this.listens_[r]}get(e){const n=pw(e._queryParams),r=e._path.toString(),i=new nh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+co(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=za(a.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){return{value:null,children:new Map}}function yk(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Nc());const i=t.children.get(r);e=Te(e),yk(i,e,n)}}function xp(t,e,n){t.value!==null?n(e,t.value):$V(t,(r,i)=>{const s=new Ce(e.toString()+"/"+r);xp(i,s,n)})}function $V(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Jt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=10*1e3,WV=30*1e3,HV=5*60*1e3;class qV{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zV(e);const r=gw+(WV-gw)*Math.random();Ea(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Jt(e,(i,s)=>{s>0&&dr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ea(this.reportStats_.bind(this),Math.floor(Math.random()*2*HV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function vk(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wk(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ek(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Cn.ACK_USER_WRITE,this.source=vk()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new Pc(pe(),n,this.revert)}}else return z(se(this.path)===e,"operationForChild called for unrelated child."),new Pc(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Cn.OVERWRITE}operationForChild(e){return oe(this.path)?new Ki(this.source,pe(),this.snap.getImmediateChild(e)):new Ki(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Cn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Ki(this.source,pe(),n.value):new tl(this.source,pe(),n)}else return z(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tl(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function GV(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(jV(o.childName,o.snapshotNode))}),Yo(t,i,"child_removed",e,r,n),Yo(t,i,"child_added",e,r,n),Yo(t,i,"child_moved",s,r,n),Yo(t,i,"child_changed",e,r,n),Yo(t,i,"value",e,r,n),i}function Yo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>QV(t,a,u)),o.forEach(a=>{const u=KV(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function KV(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QV(t,e,n){if(e.childName==null||n.childName==null)throw uo("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e){return{eventCache:t,serverCache:e}}function Ta(t,e,n,r){return Tk(new zg(e,n,r),t.serverCache)}function Ik(t,e,n,r){return Tk(t.eventCache,new zg(e,n,r))}function Rp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd;const YV=()=>(Hd||(Hd=new Rt(LL)),Hd);class Ee{static fromObject(e){let n=new Ee(null);return Jt(e,(r,i)=>{n=n.set(new Ce(r),i)}),n}constructor(e,n=YV()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(oe(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Te(e),n);return s!=null?{path:We(new Ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Te(e)):new Ee(null)}}set(e,n){if(oe(e))return new Ee(n,this.children);{const r=se(e),s=(this.children.get(r)||new Ee(null)).set(Te(e),n),o=this.children.insert(r,s);return new Ee(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Te(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ee(null):new Ee(this.value,s)}else return this}}get(e){if(oe(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Te(e)):null}}setTree(e,n){if(oe(e))return n;{const r=se(e),s=(this.children.get(r)||new Ee(null)).setTree(Te(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ee(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(We(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(oe(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Te(e),We(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Te(e),We(n,i),r):new Ee(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new Ee(null))}}function Ia(t,e,n){if(oe(e))return new mn(new Ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Gt(i,e);return s=s.updateChild(o,n),new mn(t.writeTree_.set(i,s))}else{const i=new Ee(n),s=t.writeTree_.setTree(e,i);return new mn(s)}}}function _w(t,e,n){let r=t;return Jt(n,(i,s)=>{r=Ia(r,We(e,i),s)}),r}function yw(t,e){if(oe(e))return mn.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new mn(n)}}function Ap(t,e){return rs(t,e)!=null}function rs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Gt(n.path,e)):null}function vw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(mt,(r,i)=>{e.push(new le(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function Qr(t,e){if(oe(e))return t;{const n=rs(t,e);return n!=null?new mn(new Ee(n)):new mn(t.writeTree_.subtree(e))}}function Np(t){return t.writeTree_.isEmpty()}function ro(t,e){return Sk(pe(),t.writeTree_,e)}function Sk(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Sk(We(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t,e){return Nk(e,t)}function XV(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ia(t.visibleWrites,e,n)),t.lastWriteId=r}function JV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ZV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&e4(a,r.path)?i=!1:un(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return t4(t),!0;if(r.snap)t.visibleWrites=yw(t.visibleWrites,r.path);else{const a=r.children;Jt(a,u=>{t.visibleWrites=yw(t.visibleWrites,We(r.path,u))})}return!0}else return!1}function e4(t,e){if(t.snap)return un(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&un(We(t.path,n),e))return!0;return!1}function t4(t){t.visibleWrites=kk(t.allWrites,n4,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function n4(t){return t.visible}function kk(t,e,n){let r=mn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)un(n,o)?(a=Gt(n,o),r=Ia(r,a,s.snap)):un(o,n)&&(a=Gt(o,n),r=Ia(r,pe(),s.snap.getChild(a)));else if(s.children){if(un(n,o))a=Gt(n,o),r=_w(r,a,s.children);else if(un(o,n))if(a=Gt(o,n),oe(a))r=_w(r,pe(),s.children);else{const u=Xs(s.children,se(a));if(u){const c=u.getChild(Te(a));r=Ia(r,pe(),c)}}}else throw uo("WriteRecord should have .snap or .children")}}return r}function xk(t,e,n,r,i){if(!r&&!i){const s=rs(t.visibleWrites,e);if(s!=null)return s;{const o=Qr(t.visibleWrites,e);if(Np(o))return n;if(n==null&&!Ap(o,pe()))return null;{const a=n||he.EMPTY_NODE;return ro(o,a)}}}else{const s=Qr(t.visibleWrites,e);if(!i&&Np(s))return n;if(!i&&n==null&&!Ap(s,pe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(un(c.path,e)||un(e,c.path))},a=kk(t.allWrites,o,e),u=n||he.EMPTY_NODE;return ro(a,u)}}}function r4(t,e,n){let r=he.EMPTY_NODE;const i=rs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(mt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Qr(t.visibleWrites,e);return n.forEachChild(mt,(o,a)=>{const u=ro(Qr(s,new Ce(o)),a);r=r.updateImmediateChild(o,u)}),vw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Qr(t.visibleWrites,e);return vw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function i4(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=We(e,n);if(Ap(t.visibleWrites,s))return null;{const o=Qr(t.visibleWrites,s);return Np(o)?i.getChild(n):ro(o,i.getChild(n))}}function s4(t,e,n,r){const i=We(e,n),s=rs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Qr(t.visibleWrites,i);return ro(o,r.getNode().getImmediateChild(n))}else return null}function o4(t,e){return rs(t.visibleWrites,e)}function a4(t,e,n,r,i,s,o){let a;const u=Qr(t.visibleWrites,e),c=rs(u,pe());if(c!=null)a=c;else if(n!=null)a=ro(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let E=m.getNext();for(;E&&d.length<i;)f(E,r)!==0&&d.push(E),E=m.getNext();return d}else return[]}function l4(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function Pp(t,e,n,r){return xk(t.writeTree,t.treePath,e,n,r)}function Rk(t,e){return r4(t.writeTree,t.treePath,e)}function ww(t,e,n,r){return i4(t.writeTree,t.treePath,e,n,r)}function bc(t,e){return o4(t.writeTree,We(t.treePath,e))}function u4(t,e,n,r,i,s){return a4(t.writeTree,t.treePath,e,n,r,i,s)}function Wg(t,e,n){return s4(t.writeTree,t.treePath,e,n)}function Ak(t,e){return Nk(We(t.treePath,e),t.writeTree)}function Nk(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fw(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,UV(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,FV(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fw(r,e.snapshotNode,i.oldSnap));else throw uo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Pk=new h4;class Hg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qi(this.viewCache_),s=u4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function d4(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function f4(t,e,n,r,i){const s=new c4;let o,a;if(n.type===Cn.OVERWRITE){const c=n;c.source.fromUser?o=bp(t,e,c.path,c.snap,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=Dc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Cn.MERGE){const c=n;c.source.fromUser?o=m4(t,e,c.path,c.children,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Dp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Cn.ACK_USER_WRITE){const c=n;c.revert?o=y4(t,e,c.path,r,i,s):o=g4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Cn.LISTEN_COMPLETE)o=_4(t,e,n.path,r,s);else throw uo("Unknown operation type: "+n.type);const u=s.getChanges();return p4(e,o,u),{viewCache:o,changes:u}}function p4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Rp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(VV(Rp(e)))}}function bk(t,e,n,r,i,s){const o=e.eventCache;if(bc(r,n)!=null)return e;{let a,u;if(oe(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Qi(e),d=c instanceof he?c:he.EMPTY_NODE,f=Rk(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Pp(r,Qi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){z(li(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=ww(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Te(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=ww(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=Wg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return Ta(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Dc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const E=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),E,null)}else{const E=se(n);if(!u.isCompleteForPath(n)&&li(n)>1)return e;const k=Te(n),P=u.getNode().getImmediateChild(E).updateChild(k,r);E===".priority"?c=d.updatePriority(u.getNode(),P):c=d.updateChild(u.getNode(),E,P,k,Pk,null)}const f=Ik(e,c,u.isFullyInitialized()||oe(n),d.filtersNodes()),m=new Hg(i,f,s);return bk(t,f,n,i,m,a)}function bp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new Hg(i,e,s);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ta(e,c,!0,t.filter.filtersNodes());else{const f=se(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ta(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Te(n),E=a.getNode().getImmediateChild(f);let k;if(oe(m))k=r;else{const A=d.getCompleteChild(f);A!=null?lk(m)===".priority"&&A.getChild(ck(m)).isEmpty()?k=A:k=A.updateChild(m,r):k=he.EMPTY_NODE}if(E.equals(k))u=e;else{const A=t.filter.updateChild(a.getNode(),f,k,m,d,o);u=Ta(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Ew(t,e){return t.eventCache.isCompleteForChild(e)}function m4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=We(n,u);Ew(e,se(d))&&(a=bp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=We(n,u);Ew(e,se(d))||(a=bp(t,a,d,c,i,s,o))}),a}function Tw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Dp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;oe(n)?c=r:c=new Ee(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const E=e.serverCache.getNode().getImmediateChild(f),k=Tw(t,E,m);u=Dc(t,u,new Ce(f),k,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const E=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!E){const k=e.serverCache.getNode().getImmediateChild(f),A=Tw(t,k,m);u=Dc(t,u,new Ce(f),A,i,s,o,a)}}),u}function g4(t,e,n,r,i,s,o){if(bc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(oe(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Dc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(oe(n)){let c=new Ee(null);return u.getNode().forEachChild($s,(d,f)=>{c=c.set(new Ce(d),f)}),Dp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ee(null);return r.foreach((d,f)=>{const m=We(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),Dp(t,e,n,c,i,s,a,o)}}function _4(t,e,n,r,i){const s=e.serverCache,o=Ik(e,s.getNode(),s.isFullyInitialized()||oe(n),s.isFiltered());return bk(t,o,n,r,Pk,i)}function y4(t,e,n,r,i,s){let o;if(bc(r,n)!=null)return e;{const a=new Hg(r,e,i),u=e.eventCache.getNode();let c;if(oe(n)||se(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Pp(r,Qi(e));else{const f=e.serverCache.getNode();z(f instanceof he,"serverChildren would be complete if leaf node"),d=Rk(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=se(n);let f=Wg(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Te(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,he.EMPTY_NODE,Te(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pp(r,Qi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||bc(r,pe())!=null,Ta(e,c,o,t.filter.filtersNodes())}}function v4(t,e){const n=Qi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Iw(t,e,n,r){e.type===Cn.MERGE&&e.source.queryId!==null&&(z(Qi(t.viewCache_),"We should always have a full cache before handling merges"),z(Rp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=f4(t.processor_,i,e,n,r);return d4(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,w4(t,s.changes,s.viewCache.eventCache.getNode())}function w4(t,e,n,r){const i=t.eventRegistrations_;return GV(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sw;function E4(t){z(!Sw,"__referenceConstructor has already been defined"),Sw=t}function qg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),Iw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Iw(o,e,n,r));return s}}function Gg(t,e){let n=null;for(const r of t.views.values())n=n||v4(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cw;function T4(t){z(!Cw,"__referenceConstructor has already been defined"),Cw=t}class kw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=l4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dk(t,e,n,r,i){return XV(t.pendingWriteTree_,e,n,r,i),i?Nh(t,new Ki(vk(),e,n)):[]}function Di(t,e,n=!1){const r=JV(t.pendingWriteTree_,e);if(ZV(t.pendingWriteTree_,e)){let s=new Ee(null);return r.snap!=null?s=s.set(pe(),!0):Jt(r.children,o=>{s=s.set(new Ce(o),!0)}),Nh(t,new Pc(r.path,s,n))}else return[]}function Ah(t,e,n){return Nh(t,new Ki(wk(),e,n))}function I4(t,e,n){const r=Ee.fromObject(n);return Nh(t,new tl(wk(),e,r))}function S4(t,e,n,r){const i=Lk(t,r);if(i!=null){const s=Vk(i),o=s.path,a=s.queryId,u=Gt(o,e),c=new Ki(Ek(a),u,n);return Fk(t,o,c)}else return[]}function C4(t,e,n,r){const i=Lk(t,r);if(i){const s=Vk(i),o=s.path,a=s.queryId,u=Gt(o,e),c=Ee.fromObject(n),d=new tl(Ek(a),u,c);return Fk(t,o,d)}else return[]}function Kg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Gt(o,e),c=Gg(a,u);if(c)return c});return xk(i,e,s,n,!0)}function Nh(t,e){return Ok(e,t.syncPointTree_,null,Ck(t.pendingWriteTree_,pe()))}function Ok(t,e,n,r){if(oe(t.path))return Mk(t,e,n,r);{const i=e.get(pe());n==null&&i!=null&&(n=Gg(i,pe()));let s=[];const o=se(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=Ak(r,o);s=s.concat(Ok(a,u,c,d))}return i&&(s=s.concat(qg(i,t,r,n))),s}}function Mk(t,e,n,r){const i=e.get(pe());n==null&&i!=null&&(n=Gg(i,pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=Ak(r,o),d=t.operationForChild(o);d&&(s=s.concat(Mk(d,a,u,c)))}),i&&(s=s.concat(qg(i,t,r,n))),s}function Lk(t,e){return t.tagToQueryMap.get(e)}function Vk(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function Fk(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=Ck(t.pendingWriteTree_,e);return qg(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qg(n)}node(){return this.node_}}class Yg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new Yg(this.syncTree_,n)}node(){return Kg(this.syncTree_,this.path_)}}const k4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xw=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return x4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return R4(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},x4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},R4=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},A4=function(t,e,n,r){return Xg(e,new Yg(n,t),r)},Uk=function(t,e,n){return Xg(t,new Qg(e),n)};function Xg(t,e,n){const r=t.getPriority().val(),i=xw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=xw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(mt,(a,u)=>{const c=Xg(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zg(t,e){let n=e instanceof Ce?e:new Ce(e),r=t,i=se(n);for(;i!==null;){const s=Xs(r.node.children,i)||{children:{},childCount:0};r=new Jg(i,r,s),n=Te(n),i=se(n)}return r}function wo(t){return t.node.value}function jk(t,e){t.node.value=e,Op(t)}function Bk(t){return t.node.childCount>0}function N4(t){return wo(t)===void 0&&!Bk(t)}function Ph(t,e){Jt(t.node.children,(n,r)=>{e(new Jg(n,t,r))})}function $k(t,e,n,r){n&&e(t),Ph(t,i=>{$k(i,e,!0)})}function P4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function El(t){return new Ce(t.parent===null?t.name:El(t.parent)+"/"+t.name)}function Op(t){t.parent!==null&&b4(t.parent,t.name,t)}function b4(t,e,n){const r=N4(n),i=dr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Op(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Op(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4=/[\[\].#$\/\u0000-\u001F\u007F]/,O4=/[\[\].#$\u0000-\u001F\u007F]/,qd=10*1024*1024,zk=function(t){return typeof t=="string"&&t.length!==0&&!D4.test(t)},Wk=function(t){return typeof t=="string"&&t.length!==0&&!O4.test(t)},M4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wk(t)},L4=function(t,e,n,r){e_(Vm(t,"value"),e,n)},e_=function(t,e,n){const r=n instanceof Ce?new _V(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ki(r));if(typeof e=="function")throw new Error(t+"contains a function "+ki(r)+" with contents = "+e.toString());if(BC(e))throw new Error(t+"contains "+e.toString()+" "+ki(r));if(typeof e=="string"&&e.length>qd/3&&rh(e)>qd)throw new Error(t+"contains a string greater than "+qd+" utf8 bytes "+ki(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Jt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zk(o)))throw new Error(t+" contains an invalid key ("+o+") "+ki(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yV(r,o),e_(t,a,r),vV(r)}),i&&s)throw new Error(t+' contains ".value" child '+ki(r)+" in addition to actual children.")}},Hk=function(t,e,n,r){if(!Wk(n))throw new Error(Vm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},V4=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hk(t,e,n)},F4=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},U4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zk(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!M4(n))throw new Error(Vm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qk(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hk(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ur(t,e,n){qk(t,n),B4(t,r=>un(r,e)||un(e,r))}function B4(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?($4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();wa&&pt("event: "+n.toString()),vo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4="repo_interrupt",W4=25;class H4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new j4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nc(),this.transactionQueueTree_=new Jg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function q4(t,e,n){if(t.stats_=Fg(t.repoInfo_),t.forceRestClient_||$L())t.server_=new Ac(t.repoInfo_,(r,i,s,o)=>{Rw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Aw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Xn(t.repoInfo_,e,(r,i,s,o)=>{Rw(t,r,i,s,o)},r=>{Aw(t,r)},r=>{K4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=GL(t.repoInfo_,()=>new qV(t.stats_,t.server_)),t.infoData_=new BV,t.infoSyncTree_=new kw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Ah(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),n_(t,"connected",!1),t.serverSyncTree_=new kw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);ur(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function G4(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function t_(t){return k4({timestamp:G4(t)})}function Rw(t,e,n,r,i){t.dataUpdateCount++;const s=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=oc(n,c=>tt(c));o=C4(t.serverSyncTree_,s,u,i)}else{const u=tt(n);o=S4(t.serverSyncTree_,s,u,i)}else if(r){const u=oc(n,c=>tt(c));o=I4(t.serverSyncTree_,s,u)}else{const u=tt(n);o=Ah(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=bh(t,s)),ur(t.eventQueue_,a,o)}function Aw(t,e){n_(t,"connected",e),e===!1&&Y4(t)}function K4(t,e){Jt(e,(n,r)=>{n_(t,n,r)})}function n_(t,e,n){const r=new Ce("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=Ah(t.infoSyncTree_,r,i);ur(t.eventQueue_,r,s)}function Gk(t){return t.nextWriteId_++}function Q4(t,e,n,r,i){r_(t,"set",{path:e.toString(),value:n,priority:r});const s=t_(t),o=tt(n,r),a=Kg(t.serverSyncTree_,e),u=Uk(o,a,s),c=Gk(t),d=Dk(t.serverSyncTree_,e,u,c,!0);qk(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(m,E)=>{const k=m==="ok";k||bt("set at "+e+" failed: "+m);const A=Di(t.serverSyncTree_,c,!k);ur(t.eventQueue_,e,A),J4(t,i,m,E)});const f=Jk(t,e);bh(t,f),ur(t.eventQueue_,f,[])}function Y4(t){r_(t,"onDisconnectEvents");const e=t_(t),n=Nc();xp(t.onDisconnect_,pe(),(i,s)=>{const o=A4(i,s,t.serverSyncTree_,e);yk(n,i,o)});let r=[];xp(n,pe(),(i,s)=>{r=r.concat(Ah(t.serverSyncTree_,i,s));const o=Jk(t,i);bh(t,o)}),t.onDisconnect_=Nc(),ur(t.eventQueue_,pe(),r)}function X4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(z4)}function r_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function J4(t,e,n,r){e&&vo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Kk(t,e,n){return Kg(t.serverSyncTree_,e,n)||he.EMPTY_NODE}function i_(t,e=t.transactionQueueTree_){if(e||Dh(t,e),wo(e)){const n=Yk(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Z4(t,El(e),n)}else Bk(e)&&Ph(e,n=>{i_(t,n)})}function Z4(t,e,n){const r=n.map(c=>c.currentWriteId),i=Kk(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];z(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Gt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{r_(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(Di(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Dh(t,Zg(t.transactionQueueTree_,e)),i_(t,t.transactionQueueTree_),ur(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)vo(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{bt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}bh(t,e)}},o)}function bh(t,e){const n=Qk(t,e),r=El(n),i=Yk(t,n);return eF(t,i,r),r}function eF(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Gt(n,u.path);let d=!1,f;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(Di(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=W4)d=!0,f="maxretry",i=i.concat(Di(t.serverSyncTree_,u.currentWriteId,!0));else{const m=Kk(t,u.path,o);u.currentInputSnapshot=m;const E=e[a].update(m.val());if(E!==void 0){e_("transaction failed: Data returned ",E,u.path);let k=tt(E);typeof E=="object"&&E!=null&&dr(E,".priority")||(k=k.updatePriority(m.getPriority()));const P=u.currentWriteId,S=t_(t),v=Uk(k,m,S);u.currentOutputSnapshotRaw=k,u.currentOutputSnapshotResolved=v,u.currentWriteId=Gk(t),o.splice(o.indexOf(P),1),i=i.concat(Dk(t.serverSyncTree_,u.path,v,u.currentWriteId,u.applyLocally)),i=i.concat(Di(t.serverSyncTree_,P,!0))}else d=!0,f="nodata",i=i.concat(Di(t.serverSyncTree_,u.currentWriteId,!0))}ur(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Dh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)vo(r[a]);i_(t,t.transactionQueueTree_)}function Qk(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&wo(r)===void 0;)r=Zg(r,n),e=Te(e),n=se(e);return r}function Yk(t,e){const n=[];return Xk(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Xk(t,e,n){const r=wo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ph(e,i=>{Xk(t,i,n)})}function Dh(t,e){const n=wo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,jk(e,n.length>0?n:void 0)}Ph(e,r=>{Dh(t,r)})}function Jk(t,e){const n=El(Qk(t,e)),r=Zg(t.transactionQueueTree_,e);return P4(r,i=>{Gd(t,i)}),Gd(t,r),$k(r,i=>{Gd(t,i)}),n}function Gd(t,e){const n=wo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?jk(e,void 0):n.length=s+1,ur(t.eventQueue_,El(e),i);for(let o=0;o<r.length;o++)vo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Nw=function(t,e){const n=rF(t),r=n.namespace;n.domain==="firebase.com"&&lr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ZC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ce(n.pathString)}},rF=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=tF(t.substring(d,f)));const m=nF(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const E=e.slice(0,c);if(E.toLowerCase()==="localhost")n="localhost";else if(E.split(".").length<=2)n=E;else{const k=e.indexOf(".");r=e.substring(0,k).toLowerCase(),n=e.substring(k+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return oe(this._path)?null:lk(this._path)}get ref(){return new is(this._repo,this._path)}get _queryIdentifier(){const e=mw(this._queryParams),n=Lg(e);return n==="{}"?"default":n}get _queryObject(){return mw(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof s_))return!1;const n=this._repo===e._repo,r=hk(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gV(this._path)}}class is extends s_{constructor(e,n){super(e,n,new $g,!1)}get parent(){const e=ck(this._path);return e===null?null:new is(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Pw(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?iF(t._root,e):t._root}function iF(t,e){return t=Ge(t),se(t._path)===null?V4("child","path",e):Hk("child","path",e),new is(t._repo,We(t._path,e))}function bw(t,e){t=Ge(t),F4("set",t._path),L4("set",e,t._path);const n=new nh;return Q4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}E4(is);T4(is);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF="FIREBASE_DATABASE_EMULATOR_HOST",Mp={};let oF=!1;function aF(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=fi(s);t.repoInfo_=new ZC(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function lF(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Nw(s,i),a=o.repoInfo,u;typeof process<"u"&&Y0&&(u=Y0[sF]),u?(s=`http://${u}?ns=${a.namespace}`,o=Nw(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new WL(t.name,t.options,e);U4("Invalid Firebase Database URL",o),oe(o.path)||lr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=cF(a,t,c,new zL(t,n));return new hF(d,t)}function uF(t,e){const n=Mp[e];(!n||n[t.key]!==t)&&lr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),X4(t),delete n[t.key]}function cF(t,e,n,r){let i=Mp[e.name];i||(i={},Mp[e.name]=i);let s=i[t.toURLString()];return s&&lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new H4(t,oF,n,r),i[t.toURLString()]=s,s}class hF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(q4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new is(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&lr("Cannot call "+e+" on a deleted database.")}}function dF(t=oh(),e){const n=ll(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Om("database");r&&fF(n,...r)}return n}function fF(t,e,n,r={}){t=Ge(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Jr(r,s.repoInfo_.emulatorOptions))return;lr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&lr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Nu(Nu.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Mm(r.mockUserToken,t.app.options.projectId);o=new Nu(a)}fi(e)&&ih(e),aF(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pF(t){RL(pi),Zr(new nr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return lF(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Qt(X0,J0,t),Qt(X0,J0,"esm2020")}Xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pF();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="firebasestorage.googleapis.com",mF="storageBucket",gF=2*60*1e3,_F=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Fn{constructor(e,n,r=0){super(Kd(e),`Firebase Storage: ${n} (${Kd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function Kd(t){return"storage/"+t}function yF(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Vn.UNKNOWN,t)}function vF(){return new Un(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wF(){return new Un(Vn.CANCELED,"User canceled the upload/download.")}function EF(t){return new Un(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function TF(t){return new Un(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Dw(t){return new Un(Vn.INVALID_ARGUMENT,t)}function ex(){return new Un(Vn.APP_DELETED,"The Firebase app was deleted.")}function IF(t){return new Un(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=cn.makeFromUrl(e,n)}catch{return new cn(e,"")}if(r.path==="")return r;throw TF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),k={bucket:1,path:3},A=n===Zk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",S=new RegExp(`^https?://${A}/${i}/${P}`,"i"),_=[{regex:a,indices:u,postModify:s},{regex:E,indices:k,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<_.length;N++){const L=_[N],U=L.regex.exec(e);if(U){const T=U[L.indices.bucket];let y=U[L.indices.path];y||(y=""),r=new cn(T,y),L.postModify(r);break}}if(r==null)throw EF(e);return r}}class SF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,t(E,u())},P)}function m(){s&&clearTimeout(s)}function E(P,...S){if(c){m();return}if(P){m(),d.call(null,P,...S);return}if(u()||o){m(),d.call(null,P,...S);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,f(_)}let k=!1;function A(P){k||(k=!0,m(),!c&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function kF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t){return t!==void 0}function Ow(t,e,n,r){if(r<e)throw Dw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Dw(`Invalid value for '${t}'. Expected ${n} or less.`)}function RF(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Oc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Oc||(Oc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,A)=>{this.resolve_=k,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Oc.NO_ERROR,u=s.getStatus();if(!a||AF(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Oc.ABORT;r(!1,new su(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new su(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());xF(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=yF();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?ex():wF();o(u)}else{const u=vF();o(u)}};this.canceled_?n(!1,new su(!1,null,!0)):this.backoffId_=CF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class su{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function OF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MF(t,e,n,r,i,s,o=!0,a=!1){const u=RF(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return DF(d,e),PF(d,n),bF(d,s),OF(d,r),new NF(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n){this._service=e,n instanceof cn?this._location=n:this._location=cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Mc(e,n)}get root(){const e=new cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VF(this._location.path)}get storage(){return this._service}get parent(){const e=LF(this._location.path);if(e===null)return null;const n=new cn(this._location.bucket,e);return new Mc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IF(e)}}function Mw(t,e){const n=e==null?void 0:e[mF];return n==null?null:cn.makeFromBucketSpec(n,t)}function FF(t,e,n,r={}){t.host=`${e}:${n}`;const i=fi(e);i&&ih(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Mm(s,t.app.options.projectId))}class UF{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=Zk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gF,this._maxUploadRetryTime=_F,this._requests=new Set,i!=null?this._bucket=cn.makeFromBucketSpec(i,this._host):this._bucket=Mw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cn.makeFromBucketSpec(this._url,e):this._bucket=Mw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ow("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ow("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new SF(ex());{const o=MF(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Lw="@firebase/storage",Vw="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx="storage";function jF(t=oh(),e){t=Ge(t);const r=ll(t,tx).getImmediate({identifier:e}),i=Om("storage");return i&&BF(r,...i),r}function BF(t,e,n,r={}){FF(t,e,n,r)}function $F(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new UF(n,r,i,e,pi)}function zF(){Zr(new nr(tx,$F,"PUBLIC").setMultipleInstances(!0)),Qt(Lw,Vw,""),Qt(Lw,Vw,"esm2020")}zF();const WF={apiKey:"AIzaSyDKW78SpOM7nXhKKvwTTLOigBsvcTc0HWc",authDomain:"mistora-fb941.firebaseapp.com",databaseURL:"https://mistora-fb941-default-rtdb.firebaseio.com",projectId:"mistora-fb941",storageBucket:"mistora-fb941.firebasestorage.app",messagingSenderId:"1030181457819",appId:"1:1030181457819:web:88839619b091c6a2b79b3e"},Oh=SI(WF),HF=kL(Oh),Fw=dF(Oh),Eo=hO(Oh);jF(Oh);cM(HF).catch(()=>{});const In={airTemperature:{min:"24",max:"28"},humidity:{min:"65",max:"80"},waterTemperature:{min:"20",max:"26"},tds:{min:"700",max:"1200"}},Pu=fg(Eo,"settings","thresholds"),cs=t=>({airTemperature:{...t.airTemperature},humidity:{...t.humidity},waterTemperature:{...t.waterTemperature},tds:{...t.tds}}),nx=(t,e=In)=>{var n,r,i,s,o,a,u,c,d,f,m,E;return{airTemperature:{min:String(((n=t==null?void 0:t.airTemperature)==null?void 0:n.min)??((r=t==null?void 0:t.temp)==null?void 0:r.min)??e.airTemperature.min),max:String(((i=t==null?void 0:t.airTemperature)==null?void 0:i.max)??((s=t==null?void 0:t.temp)==null?void 0:s.max)??e.airTemperature.max)},humidity:{min:String(((o=t==null?void 0:t.humidity)==null?void 0:o.min)??e.humidity.min),max:String(((a=t==null?void 0:t.humidity)==null?void 0:a.max)??e.humidity.max)},waterTemperature:{min:String(((u=t==null?void 0:t.waterTemperature)==null?void 0:u.min)??((c=t==null?void 0:t.temp)==null?void 0:c.min)??e.waterTemperature.min),max:String(((d=t==null?void 0:t.waterTemperature)==null?void 0:d.max)??((f=t==null?void 0:t.temp)==null?void 0:f.max)??e.waterTemperature.max)},tds:{min:String(((m=t==null?void 0:t.tds)==null?void 0:m.min)??e.tds.min),max:String(((E=t==null?void 0:t.tds)==null?void 0:E.max)??e.tds.max)}}},rx=M.createContext(null);function qF({children:t}){const[e,n]=M.useState(null),[r,i]=M.useState(In);M.useEffect(()=>wp(Pu,a=>{if(!a.exists()){i(In);return}i(nx(a.data().thresholds))},()=>{i(In)}),[]),M.useEffect(()=>{const o=fg(Eo,"sensor_readings","latest");return wp(o,u=>{if(!u.exists()){n(null);return}n({id:u.id,...u.data()})},()=>{n(null)})},[]);const s=M.useMemo(()=>({latestReading:e,thresholds:r}),[e,r]);return w.jsx(rx.Provider,{value:s,children:t})}function o_(){const t=M.useContext(rx);if(!t)throw new Error("useFirestoreDashboard must be used within a FirestoreDashboardProvider");return t}const GF=[{id:"airTemperature",label:"Air Temperature",unit:"°C"},{id:"humidity",label:"Humidity",unit:"%"},{id:"waterTemperature",label:"Water Temperature",unit:"°C"},{id:"tds",label:"TDS",unit:"ppm"}];function ou(t){if(typeof t=="number"&&Number.isFinite(t))return t;const e=Number(t);return Number.isFinite(e)?e:null}function KF(t,e){return t?ou(e==="airTemperature"||e==="waterTemperature"?t[e]??t.value??t.temperature??t.v:t[e]??t.value??t.v):null}function ix(t){if(!t)return null;if(typeof t.toDate=="function")return t.toDate();if(t instanceof Date)return t;const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function QF(t){const e=ix(t);if(!e)return null;const n=Date.now()-e.getTime();if(!Number.isFinite(n))return null;if(n<30*1e3)return"just now";const i=[{unit:"year",ms:365*24*60*60*1e3},{unit:"month",ms:30*24*60*60*1e3},{unit:"day",ms:24*60*60*1e3},{unit:"hour",ms:60*60*1e3},{unit:"minute",ms:60*1e3}].find(a=>n>=a.ms)||{unit:"minute",ms:60*1e3},s=Math.max(1,Math.round(n/i.ms));return new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}).format(-s,i.unit)}function YF(){const[t,e]=M.useState(null),{latestReading:n,thresholds:r}=o_();M.useEffect(()=>{const o=Tg(wh(Eo,"activity_logs"),kg("createdAt","desc"),Rg(1));let a=!1;return rC(o).then(u=>{if(a)return;const c=u.docs[0];if(!c){e(null);return}const d=c.data();e({id:c.id,title:d.title||"System event",detail:d.detail||"No details available.",type:d.type||"event",severity:d.severity||"info",createdAt:ix(d.createdAt)})}).catch(()=>{a||e(null)}),()=>{a=!0}},[]);const i=M.useMemo(()=>GF.map(o=>({...o,value:KF(n,o.id)??0})),[n]),s=M.useMemo(()=>t!=null&&t.createdAt?QF(t.createdAt):null,[t]);return w.jsxs("section",{className:"space-y-5 lg:space-y-6",children:[w.jsx(Ih,{label:"System snapshot",title:"Live Overview",subtitle:"Key environment metrics at a glance — auto-refreshing cards."}),w.jsxs("div",{className:"grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.9fr)] xl:items-start",children:[w.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:i.map(o=>{const a=o.id,u=r[a]||defaultThresholds[a];return w.jsx(kO,{...o,min:u.min,max:u.max},o.id)})}),w.jsx("article",{className:"dashboard-card group rounded-2xl p-4 backdrop-blur sm:p-5 xl:sticky xl:top-6",children:w.jsxs("div",{className:"flex h-full flex-col",children:[w.jsxs("div",{className:"flex items-start justify-between gap-3",children:[w.jsxs("div",{className:"min-w-0",children:[w.jsx("p",{className:"surface-label transition group-hover:text-slate-700 dark:group-hover:text-slate-200",children:"Latest activity"}),w.jsx("p",{className:"surface-title mt-2 text-2xl font-bold tracking-tight leading-tight sm:text-3xl",children:t?t.title:"No recent activity"})]}),w.jsx("span",{className:"dashboard-chip shrink-0 text-slate-700 dark:text-slate-200",children:t?t.type.replace("_"," "):"Idle"})]}),t?w.jsx("p",{className:"mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400",children:t.detail}):w.jsx("p",{className:"mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400",children:"No recent activity is available yet."}),w.jsx("div",{className:"mt-auto border-t border-slate-200/70 pt-4 dark:border-slate-800/70",children:w.jsxs("div",{className:"flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400",children:[w.jsx("span",{children:t?t.severity:"No data available"}),w.jsx("span",{children:t?`${s||"just now"}`:"—"})]})})]})})]})]})}function Uw(t,e=0){if(typeof t=="number"&&Number.isFinite(t))return t;const n=Number(t);return Number.isFinite(n)?n:e}function Xo(t,e,n=1){return t==null||!Number.isFinite(t)?"—":`${Number(t.toFixed(n))}${e?` ${e}`:""}`}function XF(t){return t==="danger"?"bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-200":t==="warning"?"bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200":t==="stable"?"bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200":"bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}function JF(t){return t==="safe"?"rgba(16,185,129,0.10)":t.includes("warning")?"rgba(245,158,11,0.10)":"rgba(244,63,94,0.08)"}function ZF({data:t=[],title:e="Sensor",unit:n="",height:r=140,colors:i={lineStart:"#06b6d4",lineEnd:"#3b82f6",fill:"#0ea5e9"},thresholds:s,currentValue:o,statusLabel:a,statusTone:u="neutral",subtitle:c}){const E=M.useRef(Math.random().toString(36).slice(2,9)).current,[k,A]=M.useState(null),P=M.useMemo(()=>Math.max(...t,1),[t]),S=M.useMemo(()=>Math.min(...t,0),[t]),v=t[t.length-1]??0,_=o??v,N=M.useMemo(()=>!t||t.length===0?0:Number((t.reduce((G,ce)=>G+ce,0)/t.length).toFixed(2)),[t]),L=Uw(s==null?void 0:s.min,S),U=Uw(s==null?void 0:s.max,P),T=Math.max(P-S,U-L,1),y=Math.max(T*.18,Math.abs(U-L)*.25,.35),I=Math.min(S,L)-y,x=Math.max(P,U)+y,R=G=>12+(1-(G-I)/(x-I||1))*(120-12*2),b=Math.max((U-L)*.25,T*.08,n==="%"?2.5:.2),C=[{key:"critical-low",lower:I,upper:Math.min(L-b,x)},{key:"warning-low",lower:Math.max(I,L-b),upper:L},{key:"safe",lower:L,upper:U},{key:"warning-high",lower:U,upper:Math.min(U+b,x)},{key:"critical-high",lower:Math.max(U+b,I),upper:x}].filter(G=>Number.isFinite(G.lower)&&Number.isFinite(G.upper)&&G.upper>G.lower),Ve=M.useMemo(()=>t.map((G,ce)=>{const ye=12+ce/Math.max(1,t.length-1)*576,Zt=R(G);return{x:ye,y:Zt,v:G}}),[t,R]),Dt=Ve.map(G=>`${G.x},${G.y}`).join(" ");function mi(G){const ce=G.currentTarget.getBoundingClientRect(),ye=G.clientX-ce.left-12,Zt=Math.min(1,Math.max(0,ye/(ce.width-12*2))),St=Math.round(Zt*Math.max(1,t.length-1));A(St)}function gi(){A(null)}const $=k!=null?Ve[k]:null,Y=XF(u);return w.jsxs("div",{className:"dashboard-card-soft flex h-full flex-col bg-white/90 p-3.5 sm:p-5 dark:bg-slate-950/55",children:[w.jsxs("div",{className:"mb-3 flex items-start justify-between gap-4",children:[w.jsxs("div",{children:[w.jsx("p",{className:"uppercase text-xs tracking-wide text-slate-500 dark:text-slate-400",children:e}),c?w.jsx("p",{className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:c}):null]}),w.jsxs("div",{className:"text-right",children:[w.jsx("div",{className:"text-lg font-semibold text-slate-800 dark:text-slate-100",children:Xo(_,n,n==="%"?0:1)}),w.jsx("span",{className:`mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${Y}`,children:a||"Live"})]})]}),w.jsxs("div",{className:"relative flex-1",onMouseMove:mi,onMouseLeave:gi,children:[w.jsxs("svg",{viewBox:"0 0 600 120",width:"100%",height:r,preserveAspectRatio:"none",className:"block",role:"img","aria-label":`${e} trend chart`,children:[w.jsxs("defs",{children:[w.jsxs("linearGradient",{id:`line-${E}`,x1:"0",x2:"1",y1:"0",y2:"0",children:[w.jsx("stop",{offset:"0%",stopColor:i.lineStart}),w.jsx("stop",{offset:"100%",stopColor:i.lineEnd})]}),w.jsxs("linearGradient",{id:`fill-${E}`,x1:"0",x2:"0",y1:"0",y2:"1",children:[w.jsx("stop",{offset:"0%",stopColor:i.fill,stopOpacity:"0.18"}),w.jsx("stop",{offset:"100%",stopColor:i.fill,stopOpacity:"0"})]})]}),w.jsx("line",{x1:"0",y1:108,x2:600,y2:108,stroke:"rgba(148,163,184,0.12)",strokeWidth:"1",className:"dark:opacity-30"}),C.map(G=>w.jsx("rect",{x:"0",y:R(G.upper),width:600,height:Math.max(0,R(G.lower)-R(G.upper)),fill:JF(G.key)},G.key)),w.jsx("path",{d:`M 12 108 ${Dt?`L ${Dt} L 588 108 Z`:""}`,fill:`url(#fill-${E})`}),w.jsx("polyline",{fill:"none",stroke:`url(#line-${E})`,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:Dt}),Number.isFinite(L)&&w.jsx("line",{x1:"0",y1:R(L),x2:600,y2:R(L),stroke:"rgba(148,163,184,0.35)",strokeDasharray:"4 4",strokeWidth:"1"}),Number.isFinite(U)&&w.jsx("line",{x1:"0",y1:R(U),x2:600,y2:R(U),stroke:"rgba(148,163,184,0.35)",strokeDasharray:"4 4",strokeWidth:"1"}),$&&w.jsxs("g",{children:[w.jsx("line",{x1:$.x,y1:12,x2:$.x,y2:108,stroke:"rgba(100,116,139,0.08)",className:"dark:stroke-white/5"}),w.jsx("circle",{cx:$.x,cy:$.y,r:5,fill:"#fff",stroke:i.lineEnd,strokeWidth:2})]})]}),$&&w.jsx("div",{className:"pointer-events-none absolute -translate-x-1/2",style:{left:`${$.x/600*100}%`,top:6},children:w.jsx("div",{className:"rounded-md border border-slate-200/80 bg-white/95 px-3 py-1 text-xs font-medium text-slate-700 shadow-md backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/95 dark:text-slate-100",children:Xo($.v,n,n==="%"?0:1)})})]}),w.jsxs("div",{className:"mt-3 border-t border-slate-200/70 pt-3 text-xs text-slate-500 dark:border-slate-800/70 dark:text-slate-400",children:[w.jsxs("div",{className:"flex flex-wrap gap-2",children:[w.jsxs("div",{className:"rounded-md border border-slate-200/70 bg-white/70 px-2 py-0.5 text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200",children:["Min ",w.jsx("span",{className:"font-semibold",children:Xo(S,n,n==="%"?0:1)})]}),w.jsxs("div",{className:"rounded-md border border-slate-200/70 bg-white/70 px-2 py-0.5 text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200",children:["Avg ",w.jsx("span",{className:"font-semibold",children:Xo(N,n,n==="%"?0:1)})]}),w.jsxs("div",{className:"rounded-md border border-slate-200/70 bg-white/70 px-2 py-0.5 text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200",children:["Max ",w.jsx("span",{className:"font-semibold",children:Xo(P,n,n==="%"?0:1)})]}),s?w.jsxs("div",{className:"rounded-md border border-slate-200/70 bg-white/70 px-2 py-0.5 text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200",children:["Target ",w.jsxs("span",{className:"font-semibold",children:[s.min," - ",s.max,n]})]}):null]}),w.jsx("div",{className:"mt-2 text-xs text-slate-400"})]})]})}const eU={"1h":{summaryPath:["sensor_readings","rollups","fiveMinute"],summaryTimestampField:"bucketStart",summaryPoints:12},"24h":{summaryPath:["sensor_readings","rollups","hourly"],summaryTimestampField:"bucketStart",summaryPoints:24},"7d":{summaryPath:["sensor_readings","rollups","daily"],summaryTimestampField:"bucketStart",summaryPoints:7}};function tU(t){return t.docs.map(e=>({id:e.id,...e.data()}))}function nU(t){return Tg(wh(Eo,...t.summaryPath),kg(t.summaryTimestampField,"desc"),Rg(t.summaryPoints))}async function sx(t){const e=eU[t];if(!e)return[];try{const n=await rC(nU(e));return tU(n).reverse()}catch{return[]}}async function rU(){return sx("24h")}function iU(t,e){if(!t||t.length===0)return[];if(t.length<=e)return t.map(i=>Number(i.toFixed?i.toFixed(2):Number(i)));const n=[],r=t.length/e;for(let i=0;i<e;i+=1){const s=Math.floor(i*r);let o=Math.floor((i+1)*r);o<=s&&(o=s+1);const a=t.slice(s,Math.min(o,t.length)),u=a.reduce((c,d)=>c+d,0)/a.length;n.push(Number(u.toFixed(2)))}return n}function kn(t){if(typeof t=="number"&&Number.isFinite(t))return t;const e=Number(t);return Number.isFinite(e)?e:null}function sU(t,e){const n=[t],r=new Set;for(;n.length>0;){const i=n.shift();if(i!=null){if(typeof i=="number"||typeof i=="string"){const s=kn(i);if(s!=null)return s;continue}if(typeof i=="object"&&!r.has(i)){r.add(i);for(const s of e){if(!Object.prototype.hasOwnProperty.call(i,s))continue;const o=i[s],a=kn(o);if(a!=null)return a;o&&typeof o=="object"&&n.push(o)}}}}return null}function xi(t,e){if(!t)return null;const r=sU(t,e==="airTemperature"||e==="waterTemperature"?[e,"value","temperature","temp","v","reading","data","payload"]:[e,"value","v","reading","data","payload"]);return r??kn(e==="airTemperature"||e==="waterTemperature"?t[e]??t.value??t.temperature??t.v:t[e]??t.value??t.v)}function au(t,e,n){const r=(t||[]).map(i=>xi(i,e)).filter(i=>i!=null);return iU(r,n)}function oU(t,e,n=1){return t==null||!Number.isFinite(t)?"—":`${Number(t.toFixed(n))}${e?` ${e}`:""}`}function aU(t,e,n=1){if(t==null||!Number.isFinite(t))return"—";const r=Number(t.toFixed(n));return`${r>0?"+":""}${r}${e?` ${e}`:""}`}function Qd(t,e,n,r){if(t==null||!Number.isFinite(t))return"No data";const i=kn(e==null?void 0:e.min),s=kn(e==null?void 0:e.max);return i!=null&&t<i?"Below threshold":s!=null&&t>s?"Above threshold":n!=null&&Number.isFinite(n)&&n>r?"Rising":n!=null&&Number.isFinite(n)&&n<-r?"Falling":"Stable"}function Yd(t){return t==="Above threshold"||t==="Below threshold"?"danger":t==="Rising"||t==="Falling"?"warning":t==="Stable"?"stable":"neutral"}function jw(t){return t==="danger"?"bg-rose-50 text-rose-700 ring-1 ring-rose-200/70 dark:bg-rose-500/10 dark:text-rose-200 dark:ring-rose-500/20":t==="warning"?"bg-amber-50 text-amber-700 ring-1 ring-amber-200/70 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20":t==="stable"?"bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/70 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/20":"bg-slate-100 text-slate-600 ring-1 ring-slate-200/70 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700/70"}function lU(t,e,n,r,i,s){if(e==null||!Number.isFinite(e))return`${t} data is not available yet.`;const o=kn(r==null?void 0:r.min),a=kn(r==null?void 0:r.max),u=n==null||!Number.isFinite(n)?"no 24h comparison yet":`${n>0?"up":"down"} ${Math.abs(n).toFixed(i==="%"?0:1)}${i} vs yesterday`;return o!=null&&e<o?`${t} is trending below target by ${(o-e).toFixed(i==="%"?0:1)}${i}. ${u}.`:a!=null&&e>a?`${t} is above the safe band by ${(e-a).toFixed(i==="%"?0:1)}${i}. ${u}.`:n!=null&&Number.isFinite(n)&&Math.abs(n)>s?`${t} is ${n>0?"rising":"falling"} by ${Math.abs(n).toFixed(i==="%"?0:1)}${i} over the last 24h.`:`${t} is holding steady inside the target range. ${u}.`}function uU(){const t=[{key:"live",label:"Live",points:30},{key:"1h",label:"1 hr",points:12},{key:"24h",label:"24 hrs",points:24},{key:"7d",label:"7 days",points:7}],[e,n]=M.useState("live"),[r,i]=M.useState([]),[s,o]=M.useState([]),{latestReading:a,thresholds:u}=o_(),c=t.find(_=>_.key===e)||t[0];M.useEffect(()=>{let _=!1;return rU().then(N=>{_||o(N)}).catch(()=>{_||o([])}),()=>{_=!0}},[]),M.useEffect(()=>{let _=!1;if(e==="live"){const N=Tg(wh(Eo,"sensor_readings","logs","history"),kg("timestamp","desc"),Rg(c.points)),L=wp(N,U=>{if(_)return;const T=U.docs.map(y=>({id:y.id,...y.data()}));i(T.reverse())},()=>{_||i([])});return()=>{_=!0,typeof L=="function"&&L()}}return i([]),sx(e).then(N=>{_||i(N)}).catch(()=>{_||i([])}),()=>{_=!0}},[e,c.points]);const d=M.useMemo(()=>au(r,"airTemperature",c.points),[r,c.points]),f=M.useMemo(()=>au(r,"humidity",c.points),[r,c.points]),m=M.useMemo(()=>au(r,"waterTemperature",c.points),[r,c.points]),E=M.useMemo(()=>au(r,"tds",c.points),[r,c.points]),k=M.useMemo(()=>a||(r.length>0?r[r.length-1]:null),[a,r]),A=M.useMemo(()=>{const _=N=>{const L=s[0]||r[0]||null,U=a||s[s.length-1]||r[r.length-1]||null;if(!L||!U)return null;const T=xi(L,N),y=xi(U,N);return T==null||y==null?null:y-T};return{airTemperature:_("airTemperature"),humidity:_("humidity"),waterTemperature:_("waterTemperature"),tds:_("tds")}},[s,a,r]),P=M.useMemo(()=>[{key:"airTemperature",title:"Air Temperature",unit:"°C",chartData:d,currentValue:xi(k,"airTemperature"),delta24h:A.airTemperature,thresholds:u.airTemperature,stableThreshold:.4,colors:{lineStart:"#fb7185",lineEnd:"#ef4444",fill:"#fb7185"}},{key:"humidity",title:"Humidity",unit:"%",chartData:f,currentValue:xi(k,"humidity"),delta24h:A.humidity,thresholds:u.humidity,stableThreshold:2,colors:{lineStart:"#06b6d4",lineEnd:"#3b82f6",fill:"#06b6d4"}},{key:"waterTemperature",title:"Water Temperature",unit:"°C",chartData:m,currentValue:xi(k,"waterTemperature"),delta24h:A.waterTemperature,thresholds:u.waterTemperature,stableThreshold:.4,colors:{lineStart:"#06b6d4",lineEnd:"#3b82f6",fill:"#06b6d4"}},{key:"tds",title:"TDS",unit:"ppm",chartData:E,currentValue:xi(k,"tds"),delta24h:A.tds,thresholds:u.tds,stableThreshold:5,colors:{lineStart:"#10b981",lineEnd:"#059669",fill:"#10b981"}}],[d,f,m,E,k,A,u]),S=M.useMemo(()=>P.map(_=>{const N=Qd(_.currentValue,_.thresholds,_.delta24h,_.stableThreshold);return{..._,status:N,tone:Yd(N)}}),[P]),v=M.useMemo(()=>P.map(_=>{const N=Qd(_.currentValue,_.thresholds,_.delta24h,_.stableThreshold);return{key:_.key,title:_.title,tone:Yd(N),body:lU(_.title,_.currentValue,_.delta24h,_.thresholds,_.unit,_.stableThreshold)}}),[P]);return w.jsxs("section",{className:"space-y-5 lg:space-y-6",children:[w.jsx(Ih,{label:"Analytics view",title:"Trends & Analytics",subtitle:"Track air and water temperature, humidity, and TDS across live and historical windows with threshold context and automated summaries."}),w.jsxs("div",{className:"dashboard-card-soft rounded-3xl p-4 sm:p-5",children:[w.jsx("div",{className:"flex flex-col gap-3 border-b border-slate-200/70 pb-4 dark:border-slate-800/70 sm:flex-row sm:items-center sm:justify-between",children:w.jsxs("div",{children:[w.jsx("p",{className:"surface-label",children:"Performance snapshot"}),w.jsx("h3",{className:"font-display mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl",children:"Current readings and 24h movement"})]})}),w.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",children:S.map(_=>w.jsxs("article",{className:"rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/40",children:[w.jsxs("div",{className:"flex items-start justify-between gap-3",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400",children:_.title}),w.jsx("div",{className:"mt-2 text-2xl font-bold text-slate-900 dark:text-white",children:oU(_.currentValue,_.unit,_.unit==="%"?0:1)})]}),w.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${jw(_.tone)}`,children:_.status})]}),w.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 text-sm dark:border-slate-800/70",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"24h change"}),w.jsx("p",{className:`font-semibold ${_.delta24h==null?"text-slate-500 dark:text-slate-400":_.delta24h>0?"text-emerald-600 dark:text-emerald-300":_.delta24h<0?"text-sky-600 dark:text-sky-300":"text-slate-600 dark:text-slate-300"}`,children:aU(_.delta24h,_.unit,_.unit==="%"?0:1)})]}),w.jsxs("div",{className:"text-right text-xs text-slate-500 dark:text-slate-400",children:[w.jsx("p",{children:"Target range"}),w.jsxs("p",{className:"font-semibold text-slate-700 dark:text-slate-200",children:[_.thresholds.min," - ",_.thresholds.max,_.unit]})]})]})]},_.key))})]}),w.jsxs("div",{className:"grid gap-4 lg:grid-cols-[minmax(0,1.75fr)_minmax(300px,1fr)]",children:[w.jsxs("div",{className:"space-y-4",children:[w.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",children:[w.jsxs("div",{children:[w.jsx("p",{className:"surface-label",children:"Trend surface"}),w.jsx("h3",{className:"font-display mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl",children:"Charts with threshold bands"})]}),w.jsxs("div",{className:"flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-3",children:[w.jsx("div",{className:"rounded-full bg-slate-100/70 p-1 shadow-sm dark:bg-slate-800/50",children:t.map(_=>w.jsx("button",{onClick:()=>n(_.key),className:`rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:text-sm ${_.key===e?"bg-white text-slate-900 shadow dark:bg-slate-700 dark:text-slate-100":"text-slate-600 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-slate-700/60"}`,"aria-pressed":_.key===e,"aria-label":`Show ${_.label}`,children:_.label},_.key))}),w.jsxs("div",{className:"text-xs text-slate-500 dark:text-slate-400 sm:text-right",children:["Showing: ",w.jsx("span",{className:"font-semibold text-slate-700 dark:text-slate-200",children:c.label})]})]})]}),w.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:"Visual safe, warning, and critical zones"}),w.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:P.map(_=>{const N=Qd(_.currentValue,_.thresholds,_.delta24h,_.stableThreshold);return w.jsx(ZF,{data:_.chartData,title:_.title,unit:_.unit,thresholds:_.thresholds,currentValue:_.currentValue,statusLabel:N,statusTone:Yd(N),subtitle:"Latest trend",colors:_.colors},_.key)})})]}),w.jsxs("aside",{className:"dashboard-card-soft rounded-3xl p-4 sm:p-5 lg:sticky lg:top-6 lg:self-start",children:[w.jsxs("div",{children:[w.jsx("p",{className:"surface-label",children:"Insights"}),w.jsx("h3",{className:"font-display mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl",children:"Automatic summaries"}),w.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300",children:"Quick readouts based on the latest sensor values and the last 24 hours of history."})]}),w.jsx("div",{className:"mt-4 space-y-3",children:v.map(_=>w.jsxs("article",{className:"rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/40",children:[w.jsxs("div",{className:"flex items-center justify-between gap-3",children:[w.jsx("p",{className:"text-sm font-semibold text-slate-900 dark:text-white",children:_.title}),w.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${jw(_.tone)}`,children:_.tone==="stable"?"Stable":_.tone==="warning"?"Trending":_.tone==="danger"?"Alert":"Info"})]}),w.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300",children:_.body})]},_.key))})]})]}),w.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400",children:"Tip: Hover over the charts to inspect exact values. Use the range buttons to switch time windows."})]})}function cU(){return w.jsx("section",{className:"space-y-6",children:w.jsx(uU,{})})}function hU({isAuto:t,onToggleAutoMode:e,onManualMist:n}){const r=M.useRef(null),[i,s]=M.useState(!1),o=t?"Automation is active":"Manual control is active",a=t?"The system will balance mist output using the calibrated threshold ranges.":"Manual overrides will take priority until automation is re-enabled.";M.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]);const u=()=>{s(!0),n(),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{s(!1)},15e3)};return w.jsxs("div",{className:"grid gap-3 lg:grid-cols-2",children:[w.jsxs("div",{className:"dashboard-card-soft p-3 sm:p-4",children:[w.jsxs("div",{className:"flex flex-col gap-3",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400",children:"Auto Mode"}),w.jsx("h3",{className:"font-display mt-1 text-base font-bold text-slate-900 dark:text-white sm:text-lg",children:"Adaptive watering control"})]}),w.jsx("button",{type:"button",onClick:e,className:["inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold tracking-tight transition motion-safe:hover:-translate-y-0.5 sm:w-auto sm:px-5",t?"bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_14px_30px_-18px_rgba(16,185,129,0.85)]":"border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"].join(" "),children:t?"Auto mode enabled":"Enable auto mode"}),w.jsxs("div",{className:`rounded-2xl border px-3 py-2.5 text-sm ${t?"border-emerald-200/80 bg-emerald-50/70 text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200":"border-slate-200/80 bg-slate-50/70 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/60 dark:text-slate-300"}`,children:[w.jsx("p",{className:"font-semibold",children:o}),w.jsx("p",{className:"mt-1 leading-5",children:a})]})]}),w.jsx("p",{className:"mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300",children:"When enabled, the system automatically balances mist output based on live sensor readings and the calibrated thresholds."})]}),w.jsxs("div",{className:"dashboard-card-soft p-3 text-slate-900 dark:text-slate-100 sm:p-4",children:[w.jsxs("div",{className:"flex flex-col gap-3",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400",children:"Manual Override"}),w.jsx("h3",{className:"font-display mt-1 text-base font-bold text-slate-900 dark:text-white sm:text-lg",children:"Trigger a mist cycle"})]}),w.jsx("button",{type:"button",onClick:u,"aria-pressed":i,disabled:i,className:["inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition motion-safe:hover:-translate-y-0.5 sm:w-auto sm:px-5",i?"cursor-not-allowed border border-amber-300 bg-amber-100 text-amber-900 shadow-[0_14px_30px_-18px_rgba(245,158,11,0.22)] dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-100":"bg-cyan-500 text-white shadow-[0_14px_30px_-18px_rgba(6,182,212,0.95)] hover:bg-cyan-400"].join(" "),children:i?"Mist cycle requested":"Mist now"}),w.jsxs("div",{className:`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${i?"border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100":"border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400"}`,children:[w.jsx("span",{className:`h-2 w-2 rounded-full ${i?"bg-amber-500":"bg-slate-400"}`}),i?"Mist running":"Ready to mist"]})]}),w.jsx("p",{className:"mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300",children:"Use this when a quick correction is needed outside the automation window."})]})]})}const dU=[{key:"airTemperature",label:"Air Temperature",unit:"°C",step:"0.1",min:"-20",max:"60"},{key:"humidity",label:"Humidity",unit:"%",step:"1",min:"0",max:"100"},{key:"waterTemperature",label:"Water Temperature",unit:"°C",step:"0.1",min:"-20",max:"60"},{key:"tds",label:"TDS",unit:"ppm",step:"1",min:"0",max:"5000"}];function fU({thresholds:t,onThresholdChange:e,onSave:n,onCancel:r,onReset:i,isLoading:s,isSaving:o,saveState:a,saveError:u}){const c=a==="saved"?"Thresholds saved to Firestore.":a==="error"?"Unable to save. Check your connection and try again.":"Changes are local until you save them.";return w.jsxs("div",{className:"dashboard-card-soft p-3.5 sm:p-4",children:[w.jsxs("div",{className:"flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between",children:[w.jsxs("div",{children:[w.jsx("p",{className:"surface-label",children:"Calibration"}),w.jsx("h3",{className:"font-display mt-1 text-base font-bold text-slate-900 dark:text-white sm:text-lg",children:"Threshold settings"})]}),w.jsx("p",{className:"max-w-lg text-xs leading-5 text-slate-600 dark:text-slate-300 sm:text-right sm:text-sm",children:"Set the operating range for each sensor. These values drive the adaptive watering logic."})]}),w.jsx("div",{className:"mt-4 grid gap-3 lg:grid-cols-3",children:dU.map(d=>w.jsxs("div",{className:"rounded-2xl border border-slate-200/70 bg-slate-50/75 p-3 dark:border-slate-800/70 dark:bg-slate-950/40",children:[w.jsxs("div",{className:"flex items-center justify-between gap-3",children:[w.jsx("p",{className:"text-sm font-semibold text-slate-900 dark:text-white",children:d.label}),w.jsx("span",{className:"text-[11px] font-medium text-slate-500 dark:text-slate-400",children:d.unit})]}),w.jsxs("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[w.jsxs("label",{className:"space-y-1",children:[w.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400",children:"Min"}),w.jsx("input",{type:"number",inputMode:"decimal",step:d.step,min:d.min,max:d.max,value:t[d.key].min,onChange:f=>e(d.key,"min",f.target.value),className:"w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"})]}),w.jsxs("label",{className:"space-y-1",children:[w.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400",children:"Max"}),w.jsx("input",{type:"number",inputMode:"decimal",step:d.step,min:d.min,max:d.max,value:t[d.key].max,onChange:f=>e(d.key,"max",f.target.value),className:"w-full rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"})]})]})]},d.key))}),w.jsxs("div",{className:"mt-4 flex flex-col gap-3 border-t border-slate-200/70 pt-4 dark:border-slate-800/70 sm:flex-row sm:items-center sm:justify-between",children:[w.jsxs("div",{className:"sm:max-w-md",children:[w.jsx("p",{className:"text-xs leading-5 text-slate-500 dark:text-slate-400",children:s?"Loading saved thresholds from Firestore...":c}),u?w.jsx("p",{className:"mt-1 text-xs text-rose-500",children:u}):null]}),w.jsxs("div",{className:"grid gap-2 sm:flex sm:flex-wrap sm:justify-end",children:[w.jsx("button",{type:"button",onClick:r,disabled:s||o,className:"inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800 sm:w-auto",children:"Cancel"}),w.jsx("button",{type:"button",onClick:i,disabled:s||o,className:"inline-flex w-full items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-800 transition hover:border-amber-300 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200 dark:hover:border-amber-500/40 dark:hover:bg-amber-500/15 sm:w-auto",children:"Revert to default"}),w.jsx("button",{type:"button",onClick:n,disabled:s||o,className:"inline-flex w-full items-center justify-center rounded-2xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(6,182,212,0.95)] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",children:o?"Saving...":"Save thresholds"})]})]})]})}const pU=wh(Eo,"activity_logs"),mU=t=>{const e=Number(t);return Number.isFinite(e)?e:null},Bw=t=>{const e=mU(t);return e===null?String(t):`${e}`},gU=(t,e)=>{const n={airTemperature:"Air Temperature",humidity:"Humidity",waterTemperature:"Water Temperature",tds:"TDS"},r={airTemperature:"deg C",humidity:"%",waterTemperature:"deg C",tds:"ppm"},i=[];if(Object.keys(n).forEach(o=>{const a=t[o],u=e[o];!a||!u||["min","max"].forEach(c=>{const d=String(a[c]),f=String(u[c]);d!==f&&i.push({sensorKey:o,sensorLabel:n[o],bound:c,from:d,to:f,unit:r[o]})})}),i.length===0)return null;const s=i.map(o=>`${o.sensorLabel} ${o.bound.toUpperCase()} ${Bw(o.from)} -> ${Bw(o.to)} ${o.unit}`).join(" | ");return{type:"threshold_change",severity:"info",title:i.length===1?"Threshold updated":`Thresholds updated (${i.length})`,detail:s,metadata:{changes:i}}},Xd=async({type:t,title:e,detail:n,severity:r="info",metadata:i={}})=>{!t||!e||!n||await SO(pU,{type:t,title:e,detail:n,severity:r,metadata:i,source:"dashboard",createdAt:vp()})};function _U(){const[t,e]=M.useState(!0),[n,r]=M.useState(In),[i,s]=M.useState(In),[o,a]=M.useState(!0),[u,c]=M.useState(!1),[d,f]=M.useState("idle"),[m,E]=M.useState("");M.useEffect(()=>{let N=!0;return(async()=>{try{const U=await IO(Pu);if(!N)return;if(U.exists()){const T=nx(U.data().thresholds);r(T),s(cs(T))}else await b0(Pu,{thresholds:In,updatedAt:vp()},{merge:!0}),s(cs(In))}catch{s(cs(In))}finally{N&&a(!1)}})(),()=>{N=!1}},[]);const k=(N,L,U)=>{r(T=>({...T,[N]:{...T[N],[L]:U}}))},A=async()=>{c(!0),f("idle");try{if(JSON.stringify(i)===JSON.stringify(n)){f("saved");return}const N=gU(i,n);if(await b0(Pu,{thresholds:n,updatedAt:vp()},{merge:!0}),N)try{await Xd(N)}catch{}s(cs(n)),f("saved")}catch(N){f("error"),E(String((N==null?void 0:N.message)||N))}finally{c(!1)}},P=()=>{r(cs(i)),f("idle"),E("")},S=()=>{r(cs(In)),f("idle"),E("")},v=()=>{const N=!t;e(N),bw(Pw(Fw,"controls/auto_mode"),N?1:0).then(()=>Xd({type:"mode_change",severity:"info",title:N?"Auto mode enabled":"Auto mode disabled",detail:N?"Operator enabled adaptive watering mode from the control panel.":"Operator switched to manual control mode from the control panel.",metadata:{mode:N?"auto":"manual"}}).catch(()=>{})).catch(()=>{e(L=>!L)})},_=()=>{const N=Date.now();bw(Pw(Fw,"controls/mist_now"),N).then(()=>Xd({type:"mist_cycle",severity:"warning",title:"Manual mist cycle",detail:"Operator triggered a 15-second mist cycle from the control panel.",metadata:{durationSeconds:15,modeAtTrigger:t?"auto":"manual",commandValue:N}}).catch(()=>{})).catch(()=>{})};return w.jsxs("section",{className:"space-y-4",children:[w.jsx(Ih,{label:"Device Control",title:"Device Control Center",subtitle:"Toggle devices, adjust setpoints, and schedule actions."}),w.jsxs("div",{className:"grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start",children:[w.jsx(fU,{thresholds:n,onThresholdChange:k,onSave:A,onCancel:P,onReset:S,isLoading:o,isSaving:u,saveState:d,saveError:m}),w.jsx("div",{className:"h-full",children:w.jsx(hU,{isAuto:t,onToggleAutoMode:v,onManualMist:_})})]})]})}const yU=[{name:"Baladad, Kier Nino",role:"Software Development",focus:"System concept, interface direction, and final integration.",photo:"/images/Baladad.jpg"},{name:"Bubos, Cefren Pao",role:"Prototype Development",focus:"Embedded logic, control routines, and sensor updates.",photo:"/images/Bubos.jpg"},{name:"Codilan, Ralph Lorenz",role:"Technical and Documentation",focus:"Embedded logic, control routines, and sensor updates.",photo:"/images/Codilan.png"},{name:"Corcino, Daniel Justine",role:"Technical and Documentation",focus:"Sensor wiring, device reliability, and ESP32 coordination.",photo:"/images/Corcino.png"},{name:"De Mesa, Charisse Anne",role:"Prototype Development",focus:"Layout refinement, visual hierarchy, and screen polish.",photo:"/images/De Mesa.png"},{name:"Gerona, Geonell",role:"Prototype Development",focus:"Trend interpretation, thresholds, and summary reporting.",photo:"/images/Gerona.jpg"},{name:"Lagrimas, Angelo",role:"Software Development",focus:"Firestore structure, persistence, and app data flow.",photo:"/images/Lagrimas.png"},{name:"Lazona, John Karlo",role:"Prototype Development",focus:"Project write-up, presentation support, and references.",photo:"/images/Lazona.jpg"},{name:"Navea, Carl Timothy",role:"Prototype Development",focus:"Background study, proposal framing, and demo preparation.",photo:"/images/Navea.jpg"}];function vU({label:t,accent:e,photo:n}){return w.jsxs("div",{className:`relative flex h-full min-h-[9.5rem] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/25 bg-gradient-to-br ${e} text-white shadow-lg shadow-slate-950/10`,children:[w.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_40%)]"}),w.jsxs("div",{className:"relative flex flex-col items-center gap-2 text-center",children:[n?w.jsx("img",{src:n,alt:t,className:"h-14 w-14 rounded-full border border-white/35 object-cover"}):w.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-white/15 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-sm",children:"Photo"}),w.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.2em] text-white/90",children:t})]})]})}function wU(){return w.jsxs("section",{className:"space-y-5",children:[w.jsx(Ih,{label:"Project Team",title:"About the Group",subtitle:"The creative minds and technical experts behind the system’s success."}),w.jsxs("div",{className:"dashboard-card-soft overflow-hidden p-5 sm:p-6",children:[w.jsxs("div",{className:"mb-5 flex flex-wrap items-center justify-between gap-3",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl",children:"Meet the Team"}),w.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[0.95rem]"})]}),w.jsx("div",{className:"rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/50",children:w.jsxs("div",{className:"flex flex-wrap gap-x-6 gap-y-2 text-sm",children:[w.jsxs("div",{children:[w.jsx("span",{className:"surface-label",children:"School"}),w.jsx("p",{className:"mt-1 font-semibold text-slate-900 dark:text-white",children:"Polytechnic University of the Philippines - Manila"})]}),w.jsxs("div",{children:[w.jsx("span",{className:"surface-label",children:"CYS"}),w.jsx("p",{className:"mt-1 font-semibold text-slate-900 dark:text-white",children:"BSCPE 4-2"})]})]})})]}),w.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:yU.map((t,e)=>w.jsx("article",{className:"group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10 dark:border-slate-800/70 dark:bg-slate-950/45",children:w.jsxs("div",{className:"grid gap-4 sm:grid-cols-[minmax(7.5rem,8.5rem)_1fr]",children:[w.jsx("div",{className:"relative aspect-square overflow-hidden rounded-[1.4rem]",children:w.jsx(vU,{label:`Member ${String(e+1).padStart(2,"0")}`,photo:t.photo,accent:e%3===0?"from-cyan-500 via-sky-500 to-blue-600":e%3===1?"from-emerald-500 via-teal-500 to-cyan-600":"from-slate-700 via-slate-600 to-sky-700"})}),w.jsxs("div",{className:"flex flex-col justify-center",children:[w.jsx("p",{className:"surface-label",children:t.role}),w.jsx("h3",{className:"mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-white",children:t.name})]})]})},t.name))})]})]})}function EU(t){if(!t)return null;if(typeof t.toDate=="function")return t.toDate();if(t instanceof Date)return t;const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function TU(){const t=Ji(),{latestReading:e}=o_(),[n,r]=M.useState(()=>{if(typeof window>"u")return"light";const u=window.localStorage.getItem("mistora-theme");return u==="light"||u==="dark"?u:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),[i,s]=M.useState(!1);M.useEffect(()=>{document.documentElement.classList.toggle("dark",n==="dark"),window.localStorage.setItem("mistora-theme",n)},[n]),M.useEffect(()=>{s(!1)},[t.pathname]);const o=M.useMemo(()=>EU(e==null?void 0:e.timestamp),[e]),a=()=>{r(u=>u==="dark"?"light":"dark")};return w.jsxs("div",{className:"relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 lg:flex",children:[w.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,250,252,1))] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.10),transparent_26%),linear-gradient(180deg,rgba(2,6,23,1),rgba(15,23,42,1))]"}),w.jsx(gN,{isOpen:i,onClose:()=>s(!1)}),i?w.jsx("button",{type:"button","aria-label":"Close sidebar",onClick:()=>s(!1),className:"fixed inset-0 z-30 bg-slate-950/45 backdrop-blur-[2px] lg:hidden"}):null,w.jsxs("div",{className:"relative flex min-h-screen flex-1 flex-col",children:[w.jsx(vN,{theme:n,onToggleTheme:a,onOpenSidebar:()=>s(!0),lastTransmissionAt:o}),w.jsx("main",{className:"animate-soft-rise flex-1 px-4 py-5 pb-8 sm:px-6 sm:py-6 lg:px-8 lg:py-8",children:w.jsxs(eN,{children:[w.jsx(hs,{path:"/",element:w.jsx(J1,{to:"/overview",replace:!0})}),w.jsx(hs,{path:"/overview",element:w.jsx(YF,{})}),w.jsx(hs,{path:"/trends",element:w.jsx(cU,{})}),w.jsx(hs,{path:"/controls",element:w.jsx(_U,{})}),w.jsx(hs,{path:"/about",element:w.jsx(wU,{})})]})})]})]})}const IU=tI(document.getElementById("root"));IU.render(w.jsx(Jw.StrictMode,{children:w.jsx(qF,{children:w.jsx(lN,{children:w.jsx(TU,{})})})}));
