(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var h0={exports:{}},Tc={},d0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),Ex=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Ax=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),bx=Symbol.for("react.forward_ref"),Px=Symbol.for("react.suspense"),Lx=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),Ep=Symbol.iterator;function Dx(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,m0={};function fo(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||f0}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g0(){}g0.prototype=fo.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||f0}var qd=Kd.prototype=new g0;qd.constructor=Kd;p0(qd,fo.prototype);qd.isPureReactComponent=!0;var Tp=Array.isArray,_0=Object.prototype.hasOwnProperty,Zd={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_0.call(e,i)&&!v0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ga,type:t,key:s,ref:o,props:r,_owner:Zd.current}}function Ix(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function Ux(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wp=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ux(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ga:case Ex:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kc(o,0):i,Tp(r)?(n="",t!=null&&(n=t.replace(wp,"$&/")+"/"),Rl(r,e,n,"",function(c){return c})):r!=null&&(Qd(r)&&(r=Ix(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Kc(s,a);o+=Rl(s,e,n,l,r)}else if(l=Dx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Kc(s,a++),o+=Rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ox(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Cl={transition:null},Fx={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Zd};function y0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!Qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=fo;$e.Fragment=Tx;$e.Profiler=Ax;$e.PureComponent=Kd;$e.StrictMode=wx;$e.Suspense=Px;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;$e.act=y0;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=p0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_0.call(e,l)&&!v0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ga,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:Cx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Rx,_context:t},t.Consumer=t};$e.createElement=x0;$e.createFactory=function(t){var e=x0.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:bx,render:t}};$e.isValidElement=Qd;$e.lazy=function(t){return{$$typeof:Nx,_payload:{_status:-1,_result:t},_init:Ox}};$e.memo=function(t,e){return{$$typeof:Lx,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};$e.unstable_act=y0;$e.useCallback=function(t,e){return un.current.useCallback(t,e)};$e.useContext=function(t){return un.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return un.current.useDeferredValue(t)};$e.useEffect=function(t,e){return un.current.useEffect(t,e)};$e.useId=function(){return un.current.useId()};$e.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return un.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};$e.useRef=function(t){return un.current.useRef(t)};$e.useState=function(t){return un.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return un.current.useTransition()};$e.version="18.3.1";d0.exports=$e;var Ne=d0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=Ne,zx=Symbol.for("react.element"),Bx=Symbol.for("react.fragment"),Hx=Object.prototype.hasOwnProperty,Vx=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gx={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hx.call(e,i)&&!Gx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zx,type:t,key:s,ref:o,props:r,_owner:Vx.current}}Tc.Fragment=Bx;Tc.jsx=S0;Tc.jsxs=S0;h0.exports=Tc;var A=h0.exports,M0={exports:{}},Nn={},E0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,ee){var Q=I.length;I.push(ee);e:for(;0<Q;){var ae=Q-1>>>1,Te=I[ae];if(0<r(Te,ee))I[ae]=ee,I[Q]=Te,Q=ae;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var ee=I[0],Q=I.pop();if(Q!==ee){I[0]=Q;e:for(var ae=0,Te=I.length,ke=Te>>>1;ae<ke;){var Z=2*(ae+1)-1,j=I[Z],ne=Z+1,he=I[ne];if(0>r(j,Q))ne<Te&&0>r(he,j)?(I[ae]=he,I[ne]=Q,ae=ne):(I[ae]=j,I[Z]=Q,ae=Z);else if(ne<Te&&0>r(he,Q))I[ae]=he,I[ne]=Q,ae=ne;else break e}}return ee}function r(I,ee){var Q=I.sortIndex-ee.sortIndex;return Q!==0?Q:I.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=I)i(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function S(I){if(x=!1,v(I),!_)if(n(l)!==null)_=!0,G(P);else{var ee=n(c);ee!==null&&J(S,ee.startTime-I)}}function P(I,ee){_=!1,x&&(x=!1,h(C),C=-1),p=!0;var Q=f;try{for(v(ee),d=n(l);d!==null&&(!(d.expirationTime>ee)||I&&!T());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var Te=ae(d.expirationTime<=ee);ee=t.unstable_now(),typeof Te=="function"?d.callback=Te:d===n(l)&&i(l),v(ee)}else i(l);d=n(l)}if(d!==null)var ke=!0;else{var Z=n(c);Z!==null&&J(S,Z.startTime-ee),ke=!1}return ke}finally{d=null,f=Q,p=!1}}var R=!1,M=null,C=-1,U=5,y=-1;function T(){return!(t.unstable_now()-y<U)}function k(){if(M!==null){var I=t.unstable_now();y=I;var ee=!0;try{ee=M(!0,I)}finally{ee?z():(R=!1,M=null)}}else R=!1}var z;if(typeof g=="function")z=function(){g(k)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,q=$.port2;$.port1.onmessage=k,z=function(){q.postMessage(null)}}else z=function(){m(k,0)};function G(I){M=I,R||(R=!0,z())}function J(I,ee){C=m(function(){I(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var ee=3;break;default:ee=f}var Q=f;f=ee;try{return I()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,ee){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=f;f=I;try{return ee()}finally{f=Q}},t.unstable_scheduleCallback=function(I,ee,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,I){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Q+Te,I={id:u++,callback:ee,priorityLevel:I,startTime:Q,expirationTime:Te,sortIndex:-1},Q>ae?(I.sortIndex=Q,e(c,I),n(l)===null&&I===n(c)&&(x?(h(C),C=-1):x=!0,J(S,Q-ae))):(I.sortIndex=Te,e(l,I),_||p||(_=!0,G(P))),I},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(I){var ee=f;return function(){var Q=f;f=ee;try{return I.apply(this,arguments)}finally{f=Q}}}})(T0);E0.exports=T0;var Wx=E0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx=Ne,Ln=Wx;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w0=new Set,$o={};function ns(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for($o[t]=e,t=0;t<e.length;t++)w0.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=Object.prototype.hasOwnProperty,Xx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},Rp={};function Yx(t){return dh.call(Rp,t)?!0:dh.call(Ap,t)?!1:Xx.test(t)?Rp[t]=!0:(Ap[t]=!0,!1)}function $x(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kx(t,e,n,i){if(e===null||typeof e>"u"||$x(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jd=/[\-:]([a-z])/g;function ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jd,ef);$t[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jd,ef);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jd,ef);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function tf(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kx(e,n,r,i)&&(n=null),i||r===null?Yx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),A0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),mh=Symbol.for("react.suspense_list"),sf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),C0=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,qc;function Do(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Zc=!1;function Qc(t,e){if(!t||Zc)return"";Zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function qx(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=Qc(t.type,!1),t;case 11:return t=Qc(t.type.render,!1),t;case 1:return t=Qc(t.type,!0),t;default:return""}}function gh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case Ts:return"Portal";case fh:return"Profiler";case nf:return"StrictMode";case ph:return"Suspense";case mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R0:return(t.displayName||"Context")+".Consumer";case A0:return(t._context.displayName||"Context")+".Provider";case rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sf:return e=t.displayName||null,e!==null?e:gh(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return gh(t(e))}catch{}}return null}function Zx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gh(e);case 8:return e===nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qx(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=Qx(t))}function P0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=b0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _h(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L0(t,e){e=e.checked,e!=null&&tf(t,"checked",e,!1)}function vh(t,e){L0(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&xh(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xh(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Io=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Io(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function N0(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ba,I0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ba=ba||document.createElement("div"),ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jx=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){Jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function U0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function O0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=U0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ey=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(t,e){if(e){if(ey[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wh=null,Bs=null,Hs=null;function Dp(t){if(t=xa(t)){if(typeof wh!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=bc(e),wh(t.stateNode,t.type,e))}}function F0(t){Bs?Hs?Hs.push(t):Hs=[t]:Bs=t}function k0(){if(Bs){var t=Bs,e=Hs;if(Hs=Bs=null,Dp(t),e)for(t=0;t<e.length;t++)Dp(e[t])}}function z0(t,e){return t(e)}function B0(){}var Jc=!1;function H0(t,e,n){if(Jc)return t(e,n);Jc=!0;try{return z0(t,e,n)}finally{Jc=!1,(Bs!==null||Hs!==null)&&(B0(),k0())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var i=bc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ah=!1;if(Fi)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Ah=!1}function ty(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var zo=!1,Yl=null,$l=!1,Rh=null,ny={onError:function(t){zo=!0,Yl=t}};function iy(t,e,n,i,r,s,o,a,l){zo=!1,Yl=null,ty.apply(ny,arguments)}function ry(t,e,n,i,r,s,o,a,l){if(iy.apply(this,arguments),zo){if(zo){var c=Yl;zo=!1,Yl=null}else throw Error(oe(198));$l||($l=!0,Rh=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ip(t){if(is(t)!==t)throw Error(oe(188))}function sy(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ip(r),t;if(s===i)return Ip(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function G0(t){return t=sy(t),t!==null?W0(t):null}function W0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W0(t);if(e!==null)return e;t=t.sibling}return null}var j0=Ln.unstable_scheduleCallback,Up=Ln.unstable_cancelCallback,oy=Ln.unstable_shouldYield,ay=Ln.unstable_requestPaint,At=Ln.unstable_now,ly=Ln.unstable_getCurrentPriorityLevel,af=Ln.unstable_ImmediatePriority,X0=Ln.unstable_UserBlockingPriority,Kl=Ln.unstable_NormalPriority,cy=Ln.unstable_LowPriority,Y0=Ln.unstable_IdlePriority,wc=null,gi=null;function uy(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:fy,hy=Math.log,dy=Math.LN2;function fy(t){return t>>>=0,t===0?32:31-(hy(t)/dy|0)|0}var Pa=64,La=4194304;function Uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Uo(a):(s&=o,s!==0&&(i=Uo(s)))}else o=n&~r,o!==0?i=Uo(o):s!==0&&(i=Uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function py(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=py(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ch(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $0(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function gy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function K0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q0,cf,Z0,Q0,J0,bh=!1,Na=[],lr=null,cr=null,ur=null,Zo=new Map,Qo=new Map,nr=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&cf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vy(t,e,n,i,r){switch(e){case"focusin":return lr=xo(lr,t,e,n,i,r),!0;case"dragenter":return cr=xo(cr,t,e,n,i,r),!0;case"mouseover":return ur=xo(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Zo.set(s,xo(Zo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qo.set(s,xo(Qo.get(s)||null,t,e,n,i,r)),!0}return!1}function e_(t){var e=Hr(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=V0(n),e!==null){t.blockedOn=e,J0(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Th=i,n.target.dispatchEvent(i),Th=null}else return e=xa(n),e!==null&&cf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fp(t,e,n){bl(t)&&n.delete(e)}function xy(){bh=!1,lr!==null&&bl(lr)&&(lr=null),cr!==null&&bl(cr)&&(cr=null),ur!==null&&bl(ur)&&(ur=null),Zo.forEach(Fp),Qo.forEach(Fp)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,xy)))}function Jo(t){function e(r){return yo(r,t)}if(0<Na.length){yo(Na[0],t);for(var n=1;n<Na.length;n++){var i=Na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&yo(lr,t),cr!==null&&yo(cr,t),ur!==null&&yo(ur,t),Zo.forEach(e),Qo.forEach(e),n=0;n<nr.length;n++)i=nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)e_(n),n.blockedOn===null&&nr.shift()}var Vs=Gi.ReactCurrentBatchConfig,Zl=!0;function yy(t,e,n,i){var r=st,s=Vs.transition;Vs.transition=null;try{st=1,uf(t,e,n,i)}finally{st=r,Vs.transition=s}}function Sy(t,e,n,i){var r=st,s=Vs.transition;Vs.transition=null;try{st=4,uf(t,e,n,i)}finally{st=r,Vs.transition=s}}function uf(t,e,n,i){if(Zl){var r=Ph(t,e,n,i);if(r===null)uu(t,e,i,Ql,n),Op(t,i);else if(vy(r,t,e,n,i))i.stopPropagation();else if(Op(t,i),e&4&&-1<_y.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&q0(s),s=Ph(t,e,n,i),s===null&&uu(t,e,i,Ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(t,e,i,null,n)}}var Ql=null;function Ph(t,e,n,i){if(Ql=null,t=of(i),t=Hr(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function t_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ly()){case af:return 1;case X0:return 4;case Kl:case cy:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var sr=null,hf=null,Pl=null;function n_(){if(Pl)return Pl;var t,e=hf,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function kp(){return!1}function Dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:kp,this.isPropagationStopped=kp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Dn(po),va=Mt({},po,{view:0,detail:0}),My=Dn(va),tu,nu,So,Ac=Mt({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(tu=t.screenX-So.screenX,nu=t.screenY-So.screenY):nu=tu=0,So=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),zp=Dn(Ac),Ey=Mt({},Ac,{dataTransfer:0}),Ty=Dn(Ey),wy=Mt({},va,{relatedTarget:0}),iu=Dn(wy),Ay=Mt({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=Dn(Ay),Cy=Mt({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),by=Dn(Cy),Py=Mt({},po,{data:0}),Bp=Dn(Py),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dy[t])?!!e[t]:!1}function ff(){return Iy}var Uy=Mt({},va,{key:function(t){if(t.key){var e=Ly[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oy=Dn(Uy),Fy=Mt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Dn(Fy),ky=Mt({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),zy=Dn(ky),By=Mt({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Dn(By),Vy=Mt({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=Dn(Vy),Wy=[9,13,27,32],pf=Fi&&"CompositionEvent"in window,Bo=null;Fi&&"documentMode"in document&&(Bo=document.documentMode);var jy=Fi&&"TextEvent"in window&&!Bo,i_=Fi&&(!pf||Bo&&8<Bo&&11>=Bo),Vp=" ",Gp=!1;function r_(t,e){switch(t){case"keyup":return Wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function Xy(t,e){switch(t){case"compositionend":return s_(e);case"keypress":return e.which!==32?null:(Gp=!0,Vp);case"textInput":return t=e.data,t===Vp&&Gp?null:t;default:return null}}function Yy(t,e){if(As)return t==="compositionend"||!pf&&r_(t,e)?(t=n_(),Pl=hf=sr=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return i_&&e.locale!=="ko"?null:e.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$y[t.type]:e==="textarea"}function o_(t,e,n,i){F0(i),e=Jl(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ho=null,ea=null;function Ky(t){__(t,0)}function Rc(t){var e=bs(t);if(P0(e))return t}function qy(t,e){if(t==="change")return e}var a_=!1;if(Fi){var ru;if(Fi){var su="oninput"in document;if(!su){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),su=typeof jp.oninput=="function"}ru=su}else ru=!1;a_=ru&&(!document.documentMode||9<document.documentMode)}function Xp(){Ho&&(Ho.detachEvent("onpropertychange",l_),ea=Ho=null)}function l_(t){if(t.propertyName==="value"&&Rc(ea)){var e=[];o_(e,ea,t,of(t)),H0(Ky,e)}}function Zy(t,e,n){t==="focusin"?(Xp(),Ho=e,ea=n,Ho.attachEvent("onpropertychange",l_)):t==="focusout"&&Xp()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(ea)}function Jy(t,e){if(t==="click")return Rc(e)}function eS(t,e){if(t==="input"||t==="change")return Rc(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:tS;function ta(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!dh.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=Yp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yp(n)}}function c_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?c_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u_(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=u_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&c_(n.ownerDocument.documentElement,n)){if(i!==null&&mf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$p(n,s);var o=$p(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=Fi&&"documentMode"in document&&11>=document.documentMode,Rs=null,Lh=null,Vo=null,Nh=!1;function Kp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nh||Rs==null||Rs!==Xl(i)||(i=Rs,"selectionStart"in i&&mf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&ta(Vo,i)||(Vo=i,i=Jl(Lh,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},ou={},h_={};Fi&&(h_=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Cc(t){if(ou[t])return ou[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h_)return ou[t]=e[n];return t}var d_=Cc("animationend"),f_=Cc("animationiteration"),p_=Cc("animationstart"),m_=Cc("transitionend"),g_=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){g_.set(t,e),ns(e,[t])}for(var au=0;au<qp.length;au++){var lu=qp[au],rS=lu.toLowerCase(),sS=lu[0].toUpperCase()+lu.slice(1);Mr(rS,"on"+sS)}Mr(d_,"onAnimationEnd");Mr(f_,"onAnimationIteration");Mr(p_,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(m_,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Zp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ry(i,e,void 0,t),t.currentTarget=null}function __(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,a,c),s=l}}}if($l)throw t=Rh,$l=!1,Rh=null,t}function pt(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var i=t+"__bubble";n.has(i)||(v_(e,t,2,!1),n.add(i))}function cu(t,e,n){var i=0;e&&(i|=4),v_(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Ua]){t[Ua]=!0,w0.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||cu(n,!1,t),cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,cu("selectionchange",!1,e))}}function v_(t,e,n,i){switch(t_(e)){case 1:var r=yy;break;case 4:r=Sy;break;default:r=uf}n=r.bind(null,e,n,t),r=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}H0(function(){var c=s,u=of(n),d=[];e:{var f=g_.get(t);if(f!==void 0){var p=df,_=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=Oy;break;case"focusin":_="focus",p=iu;break;case"focusout":_="blur",p=iu;break;case"beforeblur":case"afterblur":p=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zy;break;case d_:case f_:case p_:p=Ry;break;case m_:p=Hy;break;case"scroll":p=My;break;case"wheel":p=Gy;break;case"copy":case"cut":case"paste":p=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hp}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=qo(g,h),S!=null&&x.push(ia(g,S,v)))),m)break;g=g.return}0<x.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Th&&(_=n.relatedTarget||n.fromElement)&&(Hr(_)||_[ki]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Hr(_):null,_!==null&&(m=is(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=zp,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hp,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:bs(p),v=_==null?f:bs(_),f=new x(S,g+"leave",p,n,u),f.target=m,f.relatedTarget=v,S=null,Hr(u)===c&&(x=new x(h,g+"enter",_,n,u),x.target=v,x.relatedTarget=m,S=x),m=S,p&&_)t:{for(x=p,h=_,g=0,v=x;v;v=ls(v))g++;for(v=0,S=h;S;S=ls(S))v++;for(;0<g-v;)x=ls(x),g--;for(;0<v-g;)h=ls(h),v--;for(;g--;){if(x===h||h!==null&&x===h.alternate)break t;x=ls(x),h=ls(h)}x=null}else x=null;p!==null&&Qp(d,f,p,x,!1),_!==null&&m!==null&&Qp(d,m,_,x,!0)}}e:{if(f=c?bs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=qy;else if(Wp(f))if(a_)P=eS;else{P=Qy;var R=Zy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Jy);if(P&&(P=P(t,c))){o_(d,P,n,u);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&xh(f,"number",f.value)}switch(R=c?bs(c):window,t){case"focusin":(Wp(R)||R.contentEditable==="true")&&(Rs=R,Lh=c,Vo=null);break;case"focusout":Vo=Lh=Rs=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,Kp(d,n,u);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":Kp(d,n,u)}var M;if(pf)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else As?r_(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(i_&&n.locale!=="ko"&&(As||C!=="onCompositionStart"?C==="onCompositionEnd"&&As&&(M=n_()):(sr=u,hf="value"in sr?sr.value:sr.textContent,As=!0)),R=Jl(c,C),0<R.length&&(C=new Bp(C,t,null,n,u),d.push({event:C,listeners:R}),M?C.data=M:(M=s_(n),M!==null&&(C.data=M)))),(M=jy?Xy(t,n):Yy(t,n))&&(c=Jl(c,"onBeforeInput"),0<c.length&&(u=new Bp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=M))}__(d,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qo(t,n),s!=null&&i.unshift(ia(t,s,r)),s=qo(t,e),s!=null&&i.push(ia(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=qo(n,s),l!=null&&o.unshift(ia(n,l,a))):r||(l=qo(n,s),l!=null&&o.push(ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Jp(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function Oa(t,e,n){if(e=Jp(e),Jp(t)!==e&&n)throw Error(oe(425))}function ec(){}var Dh=null,Ih=null;function Uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(hS)}:Oh;function hS(t){setTimeout(function(){throw t})}function hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Jo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),pi="__reactFiber$"+mo,ra="__reactProps$"+mo,ki="__reactContainer$"+mo,Fh="__reactEvents$"+mo,dS="__reactListeners$"+mo,fS="__reactHandles$"+mo;function Hr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[pi])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[pi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function bc(t){return t[ra]||null}var kh=[],Ps=-1;function Er(t){return{current:t}}function gt(t){0>Ps||(t.current=kh[Ps],kh[Ps]=null,Ps--)}function dt(t,e){Ps++,kh[Ps]=t.current,t.current=e}var xr={},tn=Er(xr),vn=Er(!1),Kr=xr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return xr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function tc(){gt(vn),gt(tn)}function nm(t,e,n){if(tn.current!==xr)throw Error(oe(168));dt(tn,e),dt(vn,n)}function x_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Zx(t)||"Unknown",r));return Mt({},n,i)}function nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,Kr=tn.current,dt(tn,t),dt(vn,vn.current),!0}function im(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=x_(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,gt(vn),gt(tn),dt(tn,t)):gt(vn),dt(vn,n)}var Ai=null,Pc=!1,du=!1;function y_(t){Ai===null?Ai=[t]:Ai.push(t)}function pS(t){Pc=!0,y_(t)}function Tr(){if(!du&&Ai!==null){du=!0;var t=0,e=st;try{var n=Ai;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,Pc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),j0(af,Tr),r}finally{st=e,du=!1}}return null}var Ls=[],Ns=0,ic=null,rc=0,On=[],Fn=0,qr=null,Pi=1,Li="";function Ir(t,e){Ls[Ns++]=rc,Ls[Ns++]=ic,ic=t,rc=e}function S_(t,e,n){On[Fn++]=Pi,On[Fn++]=Li,On[Fn++]=qr,qr=t;var i=Pi;t=Li;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pi=1<<32-ai(e)+r|n<<r|i,Li=s+t}else Pi=1<<s|n<<r|i,Li=t}function gf(t){t.return!==null&&(Ir(t,1),S_(t,1,0))}function _f(t){for(;t===ic;)ic=Ls[--Ns],Ls[Ns]=null,rc=Ls[--Ns],Ls[Ns]=null;for(;t===qr;)qr=On[--Fn],On[Fn]=null,Li=On[--Fn],On[Fn]=null,Pi=On[--Fn],On[Fn]=null}var Pn=null,bn=null,vt=!1,ii=null;function M_(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,bn=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Pi,overflow:Li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,bn=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(vt){var e=bn;if(e){var n=e;if(!rm(t,e)){if(zh(t))throw Error(oe(418));e=hr(n.nextSibling);var i=Pn;e&&rm(t,e)?M_(i,n):(t.flags=t.flags&-4097|2,vt=!1,Pn=t)}}else{if(zh(t))throw Error(oe(418));t.flags=t.flags&-4097|2,vt=!1,Pn=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Fa(t){if(t!==Pn)return!1;if(!vt)return sm(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uh(t.type,t.memoizedProps)),e&&(e=bn)){if(zh(t))throw E_(),Error(oe(418));for(;e;)M_(t,e),e=hr(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Pn?hr(t.stateNode.nextSibling):null;return!0}function E_(){for(var t=bn;t;)t=hr(t.nextSibling)}function Js(){bn=Pn=null,vt=!1}function vf(t){ii===null?ii=[t]:ii.push(t)}var mS=Gi.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function T_(t){function e(h,g){if(t){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=mr(h,g),h.index=0,h.sibling=null,h}function s(h,g,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,v,S){return g===null||g.tag!==6?(g=xu(v,h.mode,S),g.return=h,g):(g=r(g,v),g.return=h,g)}function l(h,g,v,S){var P=v.type;return P===ws?u(h,g,v.props.children,S,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ji&&om(P)===g.type)?(S=r(g,v.props),S.ref=Mo(h,g,v),S.return=h,S):(S=kl(v.type,v.key,v.props,null,h.mode,S),S.ref=Mo(h,g,v),S.return=h,S)}function c(h,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=yu(v,h.mode,S),g.return=h,g):(g=r(g,v.children||[]),g.return=h,g)}function u(h,g,v,S,P){return g===null||g.tag!==7?(g=Yr(v,h.mode,S,P),g.return=h,g):(g=r(g,v),g.return=h,g)}function d(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xu(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ra:return v=kl(g.type,g.key,g.props,null,h.mode,v),v.ref=Mo(h,null,g),v.return=h,v;case Ts:return g=yu(g,h.mode,v),g.return=h,g;case Ji:var S=g._init;return d(h,S(g._payload),v)}if(Io(g)||_o(g))return g=Yr(g,h.mode,v,null),g.return=h,g;ka(h,g)}return null}function f(h,g,v,S){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(h,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ra:return v.key===P?l(h,g,v,S):null;case Ts:return v.key===P?c(h,g,v,S):null;case Ji:return P=v._init,f(h,g,P(v._payload),S)}if(Io(v)||_o(v))return P!==null?null:u(h,g,v,S,null);ka(h,v)}return null}function p(h,g,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(g,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ra:return h=h.get(S.key===null?v:S.key)||null,l(g,h,S,P);case Ts:return h=h.get(S.key===null?v:S.key)||null,c(g,h,S,P);case Ji:var R=S._init;return p(h,g,v,R(S._payload),P)}if(Io(S)||_o(S))return h=h.get(v)||null,u(g,h,S,P,null);ka(g,S)}return null}function _(h,g,v,S){for(var P=null,R=null,M=g,C=g=0,U=null;M!==null&&C<v.length;C++){M.index>C?(U=M,M=null):U=M.sibling;var y=f(h,M,v[C],S);if(y===null){M===null&&(M=U);break}t&&M&&y.alternate===null&&e(h,M),g=s(y,g,C),R===null?P=y:R.sibling=y,R=y,M=U}if(C===v.length)return n(h,M),vt&&Ir(h,C),P;if(M===null){for(;C<v.length;C++)M=d(h,v[C],S),M!==null&&(g=s(M,g,C),R===null?P=M:R.sibling=M,R=M);return vt&&Ir(h,C),P}for(M=i(h,M);C<v.length;C++)U=p(M,h,C,v[C],S),U!==null&&(t&&U.alternate!==null&&M.delete(U.key===null?C:U.key),g=s(U,g,C),R===null?P=U:R.sibling=U,R=U);return t&&M.forEach(function(T){return e(h,T)}),vt&&Ir(h,C),P}function x(h,g,v,S){var P=_o(v);if(typeof P!="function")throw Error(oe(150));if(v=P.call(v),v==null)throw Error(oe(151));for(var R=P=null,M=g,C=g=0,U=null,y=v.next();M!==null&&!y.done;C++,y=v.next()){M.index>C?(U=M,M=null):U=M.sibling;var T=f(h,M,y.value,S);if(T===null){M===null&&(M=U);break}t&&M&&T.alternate===null&&e(h,M),g=s(T,g,C),R===null?P=T:R.sibling=T,R=T,M=U}if(y.done)return n(h,M),vt&&Ir(h,C),P;if(M===null){for(;!y.done;C++,y=v.next())y=d(h,y.value,S),y!==null&&(g=s(y,g,C),R===null?P=y:R.sibling=y,R=y);return vt&&Ir(h,C),P}for(M=i(h,M);!y.done;C++,y=v.next())y=p(M,h,C,y.value,S),y!==null&&(t&&y.alternate!==null&&M.delete(y.key===null?C:y.key),g=s(y,g,C),R===null?P=y:R.sibling=y,R=y);return t&&M.forEach(function(k){return e(h,k)}),vt&&Ir(h,C),P}function m(h,g,v,S){if(typeof v=="object"&&v!==null&&v.type===ws&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ra:e:{for(var P=v.key,R=g;R!==null;){if(R.key===P){if(P=v.type,P===ws){if(R.tag===7){n(h,R.sibling),g=r(R,v.props.children),g.return=h,h=g;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ji&&om(P)===R.type){n(h,R.sibling),g=r(R,v.props),g.ref=Mo(h,R,v),g.return=h,h=g;break e}n(h,R);break}else e(h,R);R=R.sibling}v.type===ws?(g=Yr(v.props.children,h.mode,S,v.key),g.return=h,h=g):(S=kl(v.type,v.key,v.props,null,h.mode,S),S.ref=Mo(h,g,v),S.return=h,h=S)}return o(h);case Ts:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),g=r(g,v.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=yu(v,h.mode,S),g.return=h,h=g}return o(h);case Ji:return R=v._init,m(h,g,R(v._payload),S)}if(Io(v))return _(h,g,v,S);if(_o(v))return x(h,g,v,S);ka(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,v),g.return=h,h=g):(n(h,g),g=xu(v,h.mode,S),g.return=h,h=g),o(h)):n(h,g)}return m}var eo=T_(!0),w_=T_(!1),sc=Er(null),oc=null,Ds=null,xf=null;function yf(){xf=Ds=oc=null}function Sf(t){var e=sc.current;gt(sc),t._currentValue=e}function Hh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){oc=t,xf=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(xf!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(oc===null)throw Error(oe(308));Ds=t,oc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Vr=null;function Mf(t){Vr===null?Vr=[t]:Vr.push(t)}function A_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lf(t,n)}}function am(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(f=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Mt({},d,f);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=d}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var ya={},_i=Er(ya),sa=Er(ya),oa=Er(ya);function Gr(t){if(t===ya)throw Error(oe(174));return t}function Tf(t,e){switch(dt(oa,e),dt(sa,t),dt(_i,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sh(e,t)}gt(_i),dt(_i,e)}function to(){gt(_i),gt(sa),gt(oa)}function C_(t){Gr(oa.current);var e=Gr(_i.current),n=Sh(e,t.type);e!==n&&(dt(sa,t),dt(_i,n))}function wf(t){sa.current===t&&(gt(_i),gt(sa))}var yt=Er(0);function lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Af(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Dl=Gi.ReactCurrentDispatcher,pu=Gi.ReactCurrentBatchConfig,Zr=0,St=null,Lt=null,Ft=null,cc=!1,Go=!1,aa=0,gS=0;function Kt(){throw Error(oe(321))}function Rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Cf(t,e,n,i,r,s){if(Zr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?yS:SS,t=n(i,r),Go){s=0;do{if(Go=!1,aa=0,25<=s)throw Error(oe(301));s+=1,Ft=Lt=null,e.updateQueue=null,Dl.current=MS,t=n(i,r)}while(Go)}if(Dl.current=uc,e=Lt!==null&&Lt.next!==null,Zr=0,Ft=Lt=St=null,cc=!1,e)throw Error(oe(300));return t}function bf(){var t=aa!==0;return aa=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Yn(){if(Lt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ft===null?St.memoizedState:Ft.next;if(e!==null)Ft=e,Lt=t;else{if(t===null)throw Error(oe(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function la(t,e){return typeof e=="function"?e(t):e}function mu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,St.lanes|=u,Qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function b_(){}function P_(t,e){var n=St,i=Yn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Pf(D_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,ca(9,N_.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(oe(349));Zr&30||L_(n,e,r)}return r}function L_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function N_(t,e,n,i){e.value=n,e.getSnapshot=i,I_(e)&&U_(t)}function D_(t,e,n){return n(function(){I_(e)&&U_(t)})}function I_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function U_(t){var e=zi(t,1);e!==null&&li(e,t,1,-1)}function cm(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=xS.bind(null,St,t),[e.memoizedState,t]}function ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function O_(){return Yn().memoizedState}function Il(t,e,n,i){var r=fi();St.flags|=t,r.memoizedState=ca(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Rf(i,o.deps)){r.memoizedState=ca(e,n,s,i);return}}St.flags|=t,r.memoizedState=ca(1|e,n,s,i)}function um(t,e){return Il(8390656,8,t,e)}function Pf(t,e){return Lc(2048,8,t,e)}function F_(t,e){return Lc(4,2,t,e)}function k_(t,e){return Lc(4,4,t,e)}function z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B_(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,z_.bind(null,e,t),n)}function Lf(){}function H_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function V_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function G_(t,e,n){return Zr&21?(ci(n,e)||(n=$0(),St.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function _S(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=pu.transition;pu.transition={};try{t(!1),e()}finally{st=n,pu.transition=i}}function W_(){return Yn().memoizedState}function vS(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},j_(t))X_(e,n);else if(n=A_(t,e,n,i),n!==null){var r=ln();li(n,t,i,r),Y_(n,e,i)}}function xS(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(j_(t))X_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,Mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=A_(t,e,r,i),n!==null&&(r=ln(),li(n,t,i,r),Y_(n,e,i))}}function j_(t){var e=t.alternate;return t===St||e!==null&&e===St}function X_(t,e){Go=cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lf(t,n)}}var uc={readContext:Xn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},yS={readContext:Xn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vS.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:cm,useDebugValue:Lf,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=cm(!1),e=t[0];return t=_S.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=fi();if(vt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),kt===null)throw Error(oe(349));Zr&30||L_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,um(D_.bind(null,i,s,t),[t]),i.flags|=2048,ca(9,N_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=kt.identifierPrefix;if(vt){var n=Li,i=Pi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:Xn,useCallback:H_,useContext:Xn,useEffect:Pf,useImperativeHandle:B_,useInsertionEffect:F_,useLayoutEffect:k_,useMemo:V_,useReducer:mu,useRef:O_,useState:function(){return mu(la)},useDebugValue:Lf,useDeferredValue:function(t){var e=Yn();return G_(e,Lt.memoizedState,t)},useTransition:function(){var t=mu(la)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:P_,useId:W_,unstable_isNewReconciler:!1},MS={readContext:Xn,useCallback:H_,useContext:Xn,useEffect:Pf,useImperativeHandle:B_,useInsertionEffect:F_,useLayoutEffect:k_,useMemo:V_,useReducer:gu,useRef:O_,useState:function(){return gu(la)},useDebugValue:Lf,useDeferredValue:function(t){var e=Yn();return Lt===null?e.memoizedState=t:G_(e,Lt.memoizedState,t)},useTransition:function(){var t=gu(la)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:P_,useId:W_,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=pr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(li(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=pr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(li(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=pr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(li(e,t,i,n),Nl(e,t,i))}};function hm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,s):!0}function $_(t,e,n){var i=!1,r=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=xn(e)?Kr:tn.current,i=e.contextTypes,s=(i=i!=null)?Qs(t,r):xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Gh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ef(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=xn(e)?Kr:tn.current,r.context=Qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var n="",i=e;do n+=qx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function K_(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,ed=i),Wh(t,e)},n}function q_(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wh(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ES;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var TS=Gi.ReactCurrentOwner,_n=!1;function on(t,e,n,i){e.child=t===null?w_(e,null,n,i):eo(e,t.child,n,i)}function gm(t,e,n,i,r){n=n.render;var s=e.ref;return Gs(e,r),i=Cf(t,e,n,i,s,r),n=bf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(vt&&n&&gf(e),e.flags|=1,on(t,e,i,r),e.child)}function _m(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Z_(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Z_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ta(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return jh(t,e,n,i,r)}function Q_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Us,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Us,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Us,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Us,Cn),Cn|=i;return on(t,e,r,n),e.child}function J_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jh(t,e,n,i,r){var s=xn(n)?Kr:tn.current;return s=Qs(e,s),Gs(e,r),n=Cf(t,e,n,i,s,r),i=bf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(vt&&i&&gf(e),e.flags|=1,on(t,e,n,r),e.child)}function vm(t,e,n,i,r){if(xn(n)){var s=!0;nc(e)}else s=!1;if(Gs(e,r),e.stateNode===null)Ul(t,e),$_(e,n,i),Gh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=xn(n)?Kr:tn.current,c=Qs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&dm(e,o,i,c),er=!1;var f=e.memoizedState;o.state=f,ac(e,i,o,r),l=e.memoizedState,a!==i||f!==l||vn.current||er?(typeof u=="function"&&(Vh(e,n,u,i),l=e.memoizedState),(a=er||hm(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,R_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=xn(n)?Kr:tn.current,l=Qs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&dm(e,o,i,l),er=!1,f=e.memoizedState,o.state=f,ac(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||vn.current||er?(typeof p=="function"&&(Vh(e,n,p,i),_=e.memoizedState),(c=er||hm(e,n,c,i,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Xh(t,e,n,i,s,r)}function Xh(t,e,n,i,r,s){J_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&im(e,n,!1),Bi(t,e,s);i=e.stateNode,TS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&im(e,n,!0),e.child}function ev(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),Tf(t,e.containerInfo)}function xm(t,e,n,i,r){return Js(),vf(r),e.flags|=256,on(t,e,n,i),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function $h(t){return{baseLanes:t,cachePool:null,transitions:null}}function tv(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,i,0,null),t=Yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$h(n),e.memoizedState=Yh,t):Nf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?$h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yh,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nf(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,i){return i!==null&&vf(i),eo(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=_u(Error(oe(422))),za(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=$h(o),e.memoizedState=Yh,s);if(!(e.mode&1))return za(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=_u(s,i,void 0),za(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),li(i,t,r,-1))}return kf(),i=_u(Error(oe(421))),za(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=hr(r.nextSibling),Pn=e,vt=!0,ii=null,t!==null&&(On[Fn++]=Pi,On[Fn++]=Li,On[Fn++]=qr,Pi=t.id,Li=t.overflow,qr=e),e=Nf(e,i.children),e.flags|=4096,e)}function ym(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hh(t.return,e,n)}function vu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function nv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,n,e);else if(t.tag===19)ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&lc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&lc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:ev(e),Js();break;case 5:C_(e);break;case 1:xn(e.type)&&nc(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?tv(t,e,n):(dt(yt,yt.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return nv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Q_(t,e,n)}return Bi(t,e,n)}var iv,Kh,rv,sv;iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kh=function(){};rv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(_i.current);var s=null;switch(n){case"input":r=_h(t,r),i=_h(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=yh(t,r),i=yh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ec)}Mh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RS(t,e,n){var i=e.pendingProps;switch(_f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return xn(e.type)&&tc(),qt(e),null;case 3:return i=e.stateNode,to(),gt(vn),gt(tn),Af(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(id(ii),ii=null))),Kh(t,e),qt(e),null;case 5:wf(e);var r=Gr(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)rv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return qt(e),null}if(t=Gr(_i.current),Fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[ra]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)pt(Oo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":bp(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Lp(i,s),pt("invalid",i)}Mh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,t),r=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":Ca(i),Pp(i,s,!0);break;case"textarea":Ca(i),Np(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ec)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[ra]=i,iv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)pt(Oo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":bp(t,i),r=_h(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Lp(t,i),r=yh(t,i),pt("invalid",t);break;default:r=i}Mh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?O0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&I0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&tf(t,s,l,o))}switch(n){case"input":Ca(t),Pp(t,i,!1);break;case"textarea":Ca(t),Np(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ec)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Gr(oa.current),Gr(_i.current),Fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Oa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return qt(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&bn!==null&&e.mode&1&&!(e.flags&128))E_(),Js(),e.flags|=98560,s=!1;else if(s=Fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[pi]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else ii!==null&&(id(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Dt===0&&(Dt=3):kf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return to(),Kh(t,e),t===null&&na(e.stateNode.containerInfo),qt(e),null;case 10:return Sf(e.type._context),qt(e),null;case 17:return xn(e.type)&&tc(),qt(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lc(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>io&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=lc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return qt(e),null}else 2*At()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function CS(t,e){switch(_f(e),e.tag){case 1:return xn(e.type)&&tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),gt(vn),gt(tn),Af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return to(),null;case 10:return Sf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var Ba=!1,en=!1,bS=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function qh(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Sm=!1;function PS(t,e){if(Dh=Zl,t=u_(),mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ih={focusedElem:t,selectionRange:n},Zl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:ei(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=Sm,Sm=!1,_}function Wo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qh(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ov(t){var e=t.alternate;e!==null&&(t.alternate=null,ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[ra],delete e[Fh],delete e[dS],delete e[fS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function av(t){return t.tag===5||t.tag===3||t.tag===4}function Mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ec));else if(i!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function Jh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}var jt=null,ti=!1;function ji(t,e,n){for(n=n.child;n!==null;)lv(t,e,n),n=n.sibling}function lv(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:en||Is(n,e);case 6:var i=jt,r=ti;jt=null,ji(t,e,n),jt=i,ti=r,jt!==null&&(ti?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ti?(t=jt,n=n.stateNode,t.nodeType===8?hu(t.parentNode,n):t.nodeType===1&&hu(t,n),Jo(t)):hu(jt,n.stateNode));break;case 4:i=jt,r=ti,jt=n.stateNode.containerInfo,ti=!0,ji(t,e,n),jt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qh(n,e,o),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!en&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,ji(t,e,n),en=i):ji(t,e,n);break;default:ji(t,e,n)}}function Em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(i){var r=zS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ti=!1;break e;case 3:jt=a.stateNode.containerInfo,ti=!0;break e;case 4:jt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(jt===null)throw Error(oe(160));lv(s,o,r),jt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cv(e,t),e=e.sibling}function cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),ui(t),i&4){try{Wo(3,t,t.return),Dc(3,t)}catch(x){Tt(t,t.return,x)}try{Wo(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Kn(e,t),ui(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(Kn(e,t),ui(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{Ko(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L0(r,s),Eh(a,o);var c=Eh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?O0(r,d):u==="dangerouslySetInnerHTML"?I0(r,d):u==="children"?Ko(r,d):tf(r,u,d,c)}switch(a){case"input":vh(r,s);break;case"textarea":N0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ra]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Kn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Kn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Kn(e,t),ui(t);break;case 13:Kn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uf=At())),i&4&&Em(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,Kn(e,t),en=c):Kn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(d=xe=u;xe!==null;){switch(f=xe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Wo(4,f,f.return);break;case 1:Is(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:Is(f,f.return);break;case 22:if(f.memoizedState!==null){wm(d);continue}}p!==null?(p.return=f,xe=p):wm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=U0("display",o))}catch(x){Tt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),ui(t),i&4&&Em(t);break;case 21:break;default:Kn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(av(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ko(r,""),i.flags&=-33);var s=Mm(t);Jh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mm(t);Qh(t,a,o);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){xe=t,uv(t)}function uv(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ba;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Ba;var c=en;if(Ba=o,(en=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Am(r):l!==null?(l.return=o,xe=l):Am(r);for(;s!==null;)xe=s,uv(s),s=s.sibling;xe=r,Ba=a,en=c}Tm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Tm(t)}}function Tm(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}en||e.flags&512&&Zh(e)}catch(f){Tt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function wm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Am(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Zh(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Zh(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var NS=Math.ceil,hc=Gi.ReactCurrentDispatcher,Df=Gi.ReactCurrentOwner,jn=Gi.ReactCurrentBatchConfig,Ze=0,kt=null,Ct=null,Yt=0,Cn=0,Us=Er(0),Dt=0,ua=null,Qr=0,Ic=0,If=0,jo=null,pn=null,Uf=0,io=1/0,wi=null,dc=!1,ed=null,fr=null,Ha=!1,or=null,fc=0,Xo=0,td=null,Ol=-1,Fl=0;function ln(){return Ze&6?At():Ol!==-1?Ol:Ol=At()}function pr(t){return t.mode&1?Ze&2&&Yt!==0?Yt&-Yt:mS.transition!==null?(Fl===0&&(Fl=$0()),Fl):(t=st,t!==0||(t=window.event,t=t===void 0?16:t_(t.type)),t):1}function li(t,e,n,i){if(50<Xo)throw Xo=0,td=null,Error(oe(185));_a(t,n,i),(!(Ze&2)||t!==kt)&&(t===kt&&(!(Ze&2)&&(Ic|=n),Dt===4&&ir(t,Yt)),yn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(io=At()+500,Pc&&Tr()))}function yn(t,e){var n=t.callbackNode;my(t,e);var i=ql(t,t===kt?Yt:0);if(i===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?pS(Rm.bind(null,t)):y_(Rm.bind(null,t)),uS(function(){!(Ze&6)&&Tr()}),n=null;else{switch(K0(i)){case 1:n=af;break;case 4:n=X0;break;case 16:n=Kl;break;case 536870912:n=Y0;break;default:n=Kl}n=vv(n,hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hv(t,e){if(Ol=-1,Fl=0,Ze&6)throw Error(oe(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var i=ql(t,t===kt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pc(t,i);else{e=i;var r=Ze;Ze|=2;var s=fv();(kt!==t||Yt!==e)&&(wi=null,io=At()+500,Xr(t,e));do try{US();break}catch(a){dv(t,a)}while(!0);yf(),hc.current=s,Ze=r,Ct!==null?e=0:(kt=null,Yt=0,e=Dt)}if(e!==0){if(e===2&&(r=Ch(t),r!==0&&(i=r,e=nd(t,r))),e===1)throw n=ua,Xr(t,0),ir(t,i),yn(t,At()),n;if(e===6)ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!DS(r)&&(e=pc(t,i),e===2&&(s=Ch(t),s!==0&&(i=s,e=nd(t,s))),e===1))throw n=ua,Xr(t,0),ir(t,i),yn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Ur(t,pn,wi);break;case 3:if(ir(t,i),(i&130023424)===i&&(e=Uf+500-At(),10<e)){if(ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Oh(Ur.bind(null,t,pn,wi),e);break}Ur(t,pn,wi);break;case 4:if(ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NS(i/1960))-i,10<i){t.timeoutHandle=Oh(Ur.bind(null,t,pn,wi),i);break}Ur(t,pn,wi);break;case 5:Ur(t,pn,wi);break;default:throw Error(oe(329))}}}return yn(t,At()),t.callbackNode===n?hv.bind(null,t):null}function nd(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=pc(t,e),t!==2&&(e=pn,pn=n,e!==null&&id(e)),t}function id(t){pn===null?pn=t:pn.push.apply(pn,t)}function DS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~If,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function Rm(t){if(Ze&6)throw Error(oe(327));Ws();var e=ql(t,0);if(!(e&1))return yn(t,At()),null;var n=pc(t,e);if(t.tag!==0&&n===2){var i=Ch(t);i!==0&&(e=i,n=nd(t,i))}if(n===1)throw n=ua,Xr(t,0),ir(t,e),yn(t,At()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,pn,wi),yn(t,At()),null}function Of(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(io=At()+500,Pc&&Tr())}}function Jr(t){or!==null&&or.tag===0&&!(Ze&6)&&Ws();var e=Ze;Ze|=1;var n=jn.transition,i=st;try{if(jn.transition=null,st=1,t)return t()}finally{st=i,jn.transition=n,Ze=e,!(Ze&6)&&Tr()}}function Ff(){Cn=Us.current,gt(Us)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(_f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tc();break;case 3:to(),gt(vn),gt(tn),Af();break;case 5:wf(i);break;case 4:to();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:Sf(i.type._context);break;case 22:case 23:Ff()}n=n.return}if(kt=t,Ct=t=mr(t.current,null),Yt=Cn=e,Dt=0,ua=null,If=Ic=Qr=0,pn=jo=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function dv(t,e){do{var n=Ct;try{if(yf(),Dl.current=uc,cc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cc=!1}if(Zr=0,Ft=Lt=St=null,Go=!1,aa=0,Df.current=null,n===null||n.return===null){Dt=1,ua=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=pm(o);if(p!==null){p.flags&=-257,mm(p,o,a,s,e),p.mode&1&&fm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){fm(s,c,e),kf();break e}l=Error(oe(426))}}else if(vt&&a.mode&1){var m=pm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mm(m,o,a,s,e),vf(no(l,a));break e}}s=l=no(l,a),Dt!==4&&(Dt=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=K_(s,l,e);am(s,h);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fr===null||!fr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=q_(s,a,e);am(s,S);break e}}s=s.return}while(s!==null)}mv(n)}catch(P){e=P,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function fv(){var t=hc.current;return hc.current=uc,t===null?uc:t}function kf(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),kt===null||!(Qr&268435455)&&!(Ic&268435455)||ir(kt,Yt)}function pc(t,e){var n=Ze;Ze|=2;var i=fv();(kt!==t||Yt!==e)&&(wi=null,Xr(t,e));do try{IS();break}catch(r){dv(t,r)}while(!0);if(yf(),Ze=n,hc.current=i,Ct!==null)throw Error(oe(261));return kt=null,Yt=0,Dt}function IS(){for(;Ct!==null;)pv(Ct)}function US(){for(;Ct!==null&&!oy();)pv(Ct)}function pv(t){var e=_v(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?mv(t):Ct=e,Df.current=null}function mv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CS(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Ct=null;return}}else if(n=RS(n,e,Cn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Dt===0&&(Dt=5)}function Ur(t,e,n){var i=st,r=jn.transition;try{jn.transition=null,st=1,OS(t,e,n,i)}finally{jn.transition=r,st=i}return null}function OS(t,e,n,i){do Ws();while(or!==null);if(Ze&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gy(t,s),t===kt&&(Ct=kt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,vv(Kl,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=st;st=1;var a=Ze;Ze|=4,Df.current=null,PS(t,n),cv(n,t),nS(Ih),Zl=!!Dh,Ih=Dh=null,t.current=n,LS(n),ay(),Ze=a,st=o,jn.transition=s}else t.current=n;if(Ha&&(Ha=!1,or=t,fc=r),s=t.pendingLanes,s===0&&(fr=null),uy(n.stateNode),yn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=ed,ed=null,t;return fc&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===td?Xo++:(Xo=0,td=t):Xo=0,Tr(),null}function Ws(){if(or!==null){var t=K0(fc),e=jn.transition,n=st;try{if(jn.transition=null,st=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,fc=0,Ze&6)throw Error(oe(331));var r=Ze;for(Ze|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:Wo(8,u,s)}var d=u.child;if(d!==null)d.return=u,xe=d;else for(;xe!==null;){u=xe;var f=u.sibling,p=u.return;if(ov(u),u===c){xe=null;break}if(f!==null){f.return=p,xe=f;break}xe=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,xe=h;break e}xe=s.return}}var g=t.current;for(xe=g;xe!==null;){o=xe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,xe=v;else e:for(o=g;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(P){Tt(a,a.return,P)}if(a===o){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if(Ze=r,Tr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(wc,t)}catch{}i=!0}return i}finally{st=n,jn.transition=e}}return!1}function Cm(t,e,n){e=no(n,e),e=K_(t,e,1),t=dr(t,e,1),e=ln(),t!==null&&(_a(t,1,e),yn(t,e))}function Tt(t,e,n){if(t.tag===3)Cm(t,t,n);else for(;e!==null;){if(e.tag===3){Cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=no(n,t),t=q_(e,t,1),e=dr(e,t,1),t=ln(),e!==null&&(_a(e,1,t),yn(e,t));break}}e=e.return}}function FS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Yt&n)===n&&(Dt===4||Dt===3&&(Yt&130023424)===Yt&&500>At()-Uf?Xr(t,0):If|=n),yn(t,e)}function gv(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=ln();t=zi(t,e),t!==null&&(_a(t,e,n),yn(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gv(t,n)}function zS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),gv(t,n)}var _v;_v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,AS(t,e,n);_n=!!(t.flags&131072)}else _n=!1,vt&&e.flags&1048576&&S_(e,rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Qs(e,tn.current);Gs(e,n),r=Cf(null,e,i,t,r,n);var s=bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,nc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ef(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,Gh(e,i,t,n),e=Xh(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&gf(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),t=ei(i,t),r){case 0:e=jh(null,e,i,t,n);break e;case 1:e=vm(null,e,i,t,n);break e;case 11:e=gm(null,e,i,t,n);break e;case 14:e=_m(null,e,i,ei(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),jh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),vm(t,e,i,r,n);case 3:e:{if(ev(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,R_(t,e),ac(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(oe(423)),e),e=xm(t,e,i,n,r);break e}else if(i!==r){r=no(Error(oe(424)),e),e=xm(t,e,i,n,r);break e}else for(bn=hr(e.stateNode.containerInfo.firstChild),Pn=e,vt=!0,ii=null,n=w_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=Bi(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return C_(e),t===null&&Bh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Uh(i,r)?o=null:s!==null&&Uh(i,s)&&(e.flags|=32),J_(t,e),on(t,e,o,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return tv(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=eo(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),gm(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(sc,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!vn.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,n),r=Xn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),_m(t,e,i,r,n);case 15:return Z_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Ul(t,e),e.tag=1,xn(i)?(t=!0,nc(e)):t=!1,Gs(e,n),$_(e,i,r),Gh(e,i,r,n),Xh(null,e,i,!0,t,n);case 19:return nv(t,e,n);case 22:return Q_(t,e,n)}throw Error(oe(156,e.tag))};function vv(t,e){return j0(t,e)}function BS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new BS(t,e,n,i)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HS(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rf)return 11;if(t===sf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Yr(n.children,r,s,e);case nf:o=8,r|=8;break;case fh:return t=Gn(12,n,e,r|2),t.elementType=fh,t.lanes=s,t;case ph:return t=Gn(13,n,e,r),t.elementType=ph,t.lanes=s,t;case mh:return t=Gn(19,n,e,r),t.elementType=mh,t.lanes=s,t;case C0:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A0:o=10;break e;case R0:o=9;break e;case rf:o=11;break e;case sf:o=14;break e;case Ji:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=C0,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,i,r,s,o,a,l){return t=new VS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ef(s),t}function GS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xv(t){if(!t)return xr;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(xn(n))return x_(t,n,e)}return e}function yv(t,e,n,i,r,s,o,a,l){return t=Bf(n,i,!0,t,r,s,o,a,l),t.context=xv(null),n=t.current,i=ln(),r=pr(n),s=Ui(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,_a(t,r,i),yn(t,i),t}function Oc(t,e,n,i){var r=e.current,s=ln(),o=pr(r);return n=xv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,o),t!==null&&(li(t,r,o,s),Nl(t,r,o)),o}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hf(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function WS(){return null}var Sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Fc.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Oc(t,e,null,null)};Fc.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){Oc(null,t,null,null)}),e[ki]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&e_(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function jS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=mc(o);s.call(c)}}var o=yv(e,i,t,0,null,!1,!1,"",Pm);return t._reactRootContainer=o,t[ki]=o.current,na(t.nodeType===8?t.parentNode:t),Jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=mc(l);a.call(c)}}var l=Bf(t,0,!1,null,null,!1,!1,"",Pm);return t._reactRootContainer=l,t[ki]=l.current,na(t.nodeType===8?t.parentNode:t),Jr(function(){Oc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=mc(o);a.call(l)}}Oc(e,o,t,r)}else o=jS(n,e,t,r,i);return mc(o)}q0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Uo(e.pendingLanes);n!==0&&(lf(e,n|1),yn(e,At()),!(Ze&6)&&(io=At()+500,Tr()))}break;case 13:Jr(function(){var i=zi(t,1);if(i!==null){var r=ln();li(i,t,1,r)}}),Hf(t,1)}};cf=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=ln();li(e,t,134217728,n)}Hf(t,134217728)}};Z0=function(t){if(t.tag===13){var e=pr(t),n=zi(t,e);if(n!==null){var i=ln();li(n,t,e,i)}Hf(t,e)}};Q0=function(){return st};J0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};wh=function(t,e,n){switch(e){case"input":if(vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=bc(i);if(!r)throw Error(oe(90));P0(i),vh(i,r)}}}break;case"textarea":N0(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};z0=Of;B0=Jr;var XS={usingClientEntryPoint:!1,Events:[xa,bs,bc,F0,k0,Of]},To={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YS={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G0(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{wc=Va.inject(YS),gi=Va}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(oe(200));return GS(t,e,null,n)};Nn.createRoot=function(t,e){if(!Gf(t))throw Error(oe(299));var n=!1,i="",r=Sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,na(t.nodeType===8?t.parentNode:t),new Vf(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=G0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Jr(t)};Nn.hydrate=function(t,e,n){if(!kc(e))throw Error(oe(200));return zc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Sv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yv(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fc(e)};Nn.render=function(t,e,n){if(!kc(e))throw Error(oe(200));return zc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!kc(t))throw Error(oe(40));return t._reactRootContainer?(Jr(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Nn.unstable_batchedUpdates=Of;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return zc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(t){console.error(t)}}Mv(),M0.exports=Nn;var $S=M0.exports,Ev,Lm=$S;Ev=Lm.createRoot,Lm.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tv=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=Ne.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Ne.createElement("svg",{ref:l,...qS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Tv("lucide",r),...a},[...o.map(([c,u])=>Ne.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(t,e)=>{const n=Ne.forwardRef(({className:i,...r},s)=>Ne.createElement(ZS,{ref:s,iconNode:e,className:Tv(`lucide-${KS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=Ke("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=Ke("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=Ke("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=Ke("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=Ke("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=Ke("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=Ke("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=Ke("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=Ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=Ke("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=Ke("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=Ke("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=Ke("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=Ke("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=Ke("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=Ke("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=Ke("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=Ke("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=Ke("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=Ke("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Ke("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Ke("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=Ke("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Ke("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=Ke("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=Ke("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=Ke("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=Ke("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=Ke("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Ke("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Ke("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=Ke("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Ke("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Ke("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=Ke("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=Ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="169",js={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AM=0,km=1,RM=2,wv=1,CM=2,Ti=3,yr=0,Sn=1,an=2,gr=0,Xs=1,zm=2,Bm=3,Hm=4,bM=5,kr=100,PM=101,LM=102,NM=103,DM=104,IM=200,UM=201,OM=202,FM=203,rd=204,sd=205,kM=206,zM=207,BM=208,HM=209,VM=210,GM=211,WM=212,jM=213,XM=214,od=0,ad=1,ld=2,ro=3,cd=4,ud=5,hd=6,dd=7,Av=0,YM=1,$M=2,_r=0,KM=1,qM=2,ZM=3,QM=4,JM=5,eE=6,tE=7,Rv=300,so=301,oo=302,fd=303,pd=304,Bc=306,md=1e3,Wr=1001,gd=1002,Wn=1003,nE=1004,Wa=1005,ri=1006,Su=1007,jr=1008,Hi=1009,Cv=1010,bv=1011,ha=1012,Xf=1013,es=1014,Ni=1015,Sa=1016,Yf=1017,$f=1018,ao=1020,Pv=35902,Lv=1021,Nv=1022,oi=1023,Dv=1024,Iv=1025,Ys=1026,lo=1027,Uv=1028,Kf=1029,Ov=1030,qf=1031,Zf=1033,zl=33776,Bl=33777,Hl=33778,Vl=33779,_d=35840,vd=35841,xd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,Td=37808,wd=37809,Ad=37810,Rd=37811,Cd=37812,bd=37813,Pd=37814,Ld=37815,Nd=37816,Dd=37817,Id=37818,Ud=37819,Od=37820,Fd=37821,Gl=36492,kd=36494,zd=36495,Fv=36283,Bd=36284,Hd=36285,Vd=36286,iE=3200,rE=3201,kv=0,sE=1,rr="",ni="srgb",wr="srgb-linear",Qf="display-p3",Hc="display-p3-linear",gc="linear",mt="srgb",_c="rec709",vc="p3",cs=7680,Vm=519,oE=512,aE=513,lE=514,zv=515,cE=516,uE=517,hE=518,dE=519,Gd=35044,Gm="300 es",Di=2e3,xc=2001;class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wm=1234567;const $s=Math.PI/180,da=180/Math.PI;function Oi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function Jf(t,e){return(t%e+e)%e}function fE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function pE(t,e,n){return t!==e?(n-t)/(e-t):0}function Yo(t,e,n){return(1-n)*t+n*e}function mE(t,e,n,i){return Yo(t,e,1-Math.exp(-n*i))}function gE(t,e=1){return e-Math.abs(Jf(t,e*2)-e)}function _E(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function vE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function xE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yE(t,e){return t+Math.random()*(e-t)}function SE(t){return t*(.5-Math.random())}function ME(t){t!==void 0&&(Wm=t);let e=Wm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EE(t){return t*$s}function TE(t){return t*da}function wE(t){return(t&t-1)===0&&t!==0}function AE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function RE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function CE(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:$s,RAD2DEG:da,generateUUID:Oi,clamp:Nt,euclideanModulo:Jf,mapLinear:fE,inverseLerp:pE,lerp:Yo,damp:mE,pingpong:gE,smoothstep:_E,smootherstep:vE,randInt:xE,randFloat:yE,randFloatSpread:SE,seededRandom:ME,degToRad:EE,radToDeg:TE,isPowerOfTwo:wE,ceilPowerOfTwo:AE,floorPowerOfTwo:RE,setQuaternionFromProperEuler:CE,normalize:rt,denormalize:si};class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],x=r[0],m=r[3],h=r[6],g=r[1],v=r[4],S=r[7],P=r[2],R=r[5],M=r[8];return s[0]=o*x+a*g+l*P,s[3]=o*m+a*v+l*R,s[6]=o*h+a*S+l*M,s[1]=c*x+u*g+d*P,s[4]=c*m+u*v+d*R,s[7]=c*h+u*S+d*M,s[2]=f*x+p*g+_*P,s[5]=f*m+p*v+_*R,s[8]=f*h+p*S+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new Ge;function Bv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bE(){const t=yc("canvas");return t.style.display="block",t}const jm={};function Wl(t){t in jm||(jm[t]=!0,console.warn(t))}function PE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function LE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ym=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[wr]:{transfer:gc,primaries:_c,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ni]:{transfer:mt,primaries:_c,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hc]:{transfer:gc,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ym),fromReference:t=>t.applyMatrix3(Xm)},[Qf]:{transfer:mt,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ym),fromReference:t=>t.applyMatrix3(Xm).convertLinearToSRGB()}},DE=new Set([wr,Hc]),nt={enabled:!0,_workingColorSpace:wr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===rr?gc:wo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(wo[e].luminanceCoefficients)}};function Ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class IE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=yc("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=us}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ks(n[i]/255)*255):n[i]=Ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UE=0;class Hv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tu(r[o].image)):s.push(Tu(r[o]))}else s=Tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OE=0;class cn extends rs{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Wr,r=Wr,s=ri,o=jr,a=oi,l=Hi,c=cn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Oi(),this.name="",this.source=new Hv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Rv;cn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,P=(h+1)/2,R=(u+f)/4,M=(d+x)/4,C=(_+m)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=M/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=M/s,r=C/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-x)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FE extends rs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Hv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends FE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vv extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*x,g=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,h*g);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const S=a*g;if(l=l*m+f*S,c=c*m+p*S,u=u*m+_*S,d=d*m+x*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*p-c*f,e[n+1]=l*_+u*f+c*d-a*p,e[n+2]=c*_+u*p+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($m.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new L,$m=new Sr;class Ar{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Xa.subVectors(this.max,Ao),hs.subVectors(e.a,Ao),ds.subVectors(e.b,Ao),fs.subVectors(e.c,Ao),Xi.subVectors(ds,hs),Yi.subVectors(fs,ds),Cr.subVectors(hs,fs);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Cr.z,Cr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Cr.z,0,-Cr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Cr.y,Cr.x,0];return!Au(n,hs,ds,fs,Xa)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,hs,ds,fs,Xa))?!1:(Ya.crossVectors(Xi,Yi),n=[Ya.x,Ya.y,Ya.z],Au(n,hs,ds,fs,Xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,ja=new Ar,hs=new L,ds=new L,fs=new L,Xi=new L,Yi=new L,Cr=new L,Ao=new L,Xa=new L,Ya=new L,br=new L;function Au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zE=new Ar,Ro=new L,Ru=new L;class ss{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ru)),this.expandByPoint(Ro.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new L,Cu=new L,$a=new L,$i=new L,bu=new L,Ka=new L,Pu=new L;class Vc{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Cu);const s=e.distanceTo(n)*.5,o=-this.direction.dot($a),a=$i.dot(this.direction),l=-$i.dot($a),c=$i.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cu).addScaledVector($a,f),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),Ka.subVectors(i,e),Pu.crossVectors(bu,Ka);let o=this.direction.dot(Pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors($i,Ka));if(l<0)return null;const c=a*this.direction.dot(bu.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Pu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,_,x,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,x=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-f*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,HE)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Ki.crossVectors(i,An),Ki.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ki.crossVectors(i,An)),Ki.normalize(),qa.crossVectors(An,Ki),r[0]=Ki.x,r[4]=qa.x,r[8]=An.x,r[1]=Ki.y,r[5]=qa.y,r[9]=An.y,r[2]=Ki.z,r[6]=qa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],g=i[3],v=i[7],S=i[11],P=i[15],R=r[0],M=r[4],C=r[8],U=r[12],y=r[1],T=r[5],k=r[9],z=r[13],$=r[2],q=r[6],G=r[10],J=r[14],I=r[3],ee=r[7],Q=r[11],ae=r[15];return s[0]=o*R+a*y+l*$+c*I,s[4]=o*M+a*T+l*q+c*ee,s[8]=o*C+a*k+l*G+c*Q,s[12]=o*U+a*z+l*J+c*ae,s[1]=u*R+d*y+f*$+p*I,s[5]=u*M+d*T+f*q+p*ee,s[9]=u*C+d*k+f*G+p*Q,s[13]=u*U+d*z+f*J+p*ae,s[2]=_*R+x*y+m*$+h*I,s[6]=_*M+x*T+m*q+h*ee,s[10]=_*C+x*k+m*G+h*Q,s[14]=_*U+x*z+m*J+h*ae,s[3]=g*R+v*y+S*$+P*I,s[7]=g*M+v*T+S*q+P*ee,s[11]=g*C+v*k+S*G+P*Q,s[15]=g*U+v*z+S*J+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],g=d*m*c-x*f*c+x*l*p-a*m*p-d*l*h+a*f*h,v=_*f*c-u*m*c-_*l*p+o*m*p+u*l*h-o*f*h,S=u*x*c-_*d*c+_*a*p-o*x*p-u*a*h+o*d*h,P=_*d*l-u*x*l-_*a*f+o*x*f+u*a*m-o*d*m,R=n*g+i*v+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/R;return e[0]=g*M,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(u*m*s-_*f*s+_*r*p-n*m*p-u*r*h+n*f*h)*M,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*h-n*l*h)*M,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*M,e[8]=S*M,e[9]=(_*d*s-u*x*s-_*i*p+n*x*p+u*i*h-n*d*h)*M,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*h+n*a*h)*M,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*M,e[12]=P*M,e[13]=(u*x*r-_*d*r+_*i*f-n*x*f-u*i*m+n*d*m)*M,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*M,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,_=s*d,x=o*u,m=o*d,h=a*d,g=l*c,v=l*u,S=l*d,P=i.x,R=i.y,M=i.z;return r[0]=(1-(x+h))*P,r[1]=(p+S)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(f+h))*R,r[6]=(m+g)*R,r[7]=0,r[8]=(_+v)*M,r[9]=(m-g)*M,r[10]=(1-(f+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,u=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Di){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Di)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Di){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let _,x;if(a===Di)_=(o+s)*d,x=-2*d;else if(a===xc)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new L,Zn=new ot,BE=new L(0,0,0),HE=new L(1,1,1),Ki=new L,qa=new L,An=new L,Km=new ot,qm=new Sr;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VE=0;const Zm=new L,ms=new Sr,Si=new ot,Za=new L,Co=new L,GE=new L,WE=new Sr,Qm=new L(1,0,0),Jm=new L(0,1,0),eg=new L(0,0,1),tg={type:"added"},jE={type:"removed"},gs={type:"childadded",child:null},Lu={type:"childremoved",child:null};class bt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,n=new vi,i=new Sr,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ge}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,n){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Za.copy(e):Za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Co,Za,this.up):Si.lookAt(Za,Co,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Si),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jE),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,WE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new L,Mi=new L,Nu=new L,Ei=new L,_s=new L,vs=new L,ng=new L,Du=new L,Iu=new L,Uu=new L,Ou=new ut,Fu=new ut,ku=new ut;class Hn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Mi.subVectors(i,n),Nu.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Mi),l=Qn.dot(Nu),c=Mi.dot(Mi),u=Mi.dot(Nu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ou.setScalar(0),Fu.setScalar(0),ku.setScalar(0),Ou.fromBufferAttribute(e,n),Fu.fromBufferAttribute(e,i),ku.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ou,s.x),o.addScaledVector(Fu,s.y),o.addScaledVector(ku,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Mi.subVectors(e,n),Qn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Qn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),vs.subVectors(s,i),Du.subVectors(e,i);const l=_s.dot(Du),c=vs.dot(Du);if(l<=0&&c<=0)return n.copy(i);Iu.subVectors(e,r);const u=_s.dot(Iu),d=vs.dot(Iu);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(_s,o);Uu.subVectors(e,s);const p=_s.dot(Uu),_=vs.dot(Uu);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(vs,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return ng.subVectors(s,r),a=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(ng,a);const h=1/(m+x+f);return o=x*h,a=f*h,n.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Jf(e,1),n=Nt(n,0,1),i=Nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const i=Wv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return nt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Nt(Qt.r*255,0,255))*65536+Math.round(Nt(Qt.g*255,0,255))*256+Math.round(Nt(Qt.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ni){nt.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Qa);const i=Yo(qi.h,Qa.h,n),r=Yo(qi.s,Qa.s,n),s=Yo(qi.l,Qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Be;Be.NAMES=Wv;let XE=0;class os extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Xs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rd&&(i.blendSrc=this.blendSrc),this.blendDst!==sd&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jt extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new L,Ja=new be;class Mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gd,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=si(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=si(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=si(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=si(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gd&&(e.usage=this.usage),e}}class jv extends Mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Xv extends Mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qe extends Mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let YE=0;const Un=new ot,Bu=new bt,xs=new L,Rn=new Ar,bo=new Ar,Ot=new L;class ht extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bv(e)?Xv:jv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qe(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Rn.min,bo.min),Rn.expandByPoint(Ot),Ot.addVectors(Rn.max,bo.max),Rn.expandByPoint(Ot)):(Rn.expandByPoint(bo.min),Rn.expandByPoint(bo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Ot.add(xs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new L,l[C]=new L;const c=new L,u=new L,d=new L,f=new be,p=new be,_=new be,x=new L,m=new L;function h(C,U,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,U),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,U),_.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(T),a[C].add(x),a[U].add(x),a[y].add(x),l[C].add(m),l[U].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,U=g.length;C<U;++C){const y=g[C],T=y.start,k=y.count;for(let z=T,$=T+k;z<$;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new L,S=new L,P=new L,R=new L;function M(C){P.fromBufferAttribute(r,C),R.copy(P);const U=a[C];v.copy(U),v.sub(P.multiplyScalar(P.dot(U))).normalize(),S.crossVectors(R,U);const T=S.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,T)}for(let C=0,U=g.length;C<U;++C){const y=g[C],T=y.start,k=y.count;for(let z=T,$=T+k;z<$;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new Mn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ht,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new ot,Pr=new Vc,el=new ss,rg=new L,tl=new L,nl=new L,il=new L,Hu=new L,rl=new L,sg=new L,sl=new L;class Je extends bt{constructor(e=new ht,n=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Hu.fromBufferAttribute(d,e),o?rl.addScaledVector(Hu,u):rl.addScaledVector(Hu.sub(n),u))}n.add(rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(el.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(el,rg)===null||Pr.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(ig),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=v;S<P;S+=3){const R=a.getX(S),M=a.getX(S+1),C=a.getX(S+2);r=ol(this,h,e,i,c,u,d,R,M,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const g=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=ol(this,o,e,i,c,u,d,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,P=v;S<P;S+=3){const R=S,M=S+1,C=S+2;r=ol(this,h,e,i,c,u,d,R,M,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const g=m,v=m+1,S=m+2;r=ol(this,o,e,i,c,u,d,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $E(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yr,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sl);return c<n.near||c>n.far?null:{distance:c,point:sl.clone(),object:t}}function ol(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,tl),t.getVertexPosition(l,nl),t.getVertexPosition(c,il);const u=$E(t,e,n,i,tl,nl,il,sg);if(u){const d=new L;Hn.getBarycoord(sg,tl,nl,il,d),r&&(u.uv=Hn.getInterpolatedAttribute(r,a,l,c,d,new be)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,a,l,c,d,new be)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};Hn.getNormal(tl,nl,il,f.normal),u.face=f,u.barycoord=d}return u}class gn extends ht{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function _(x,m,h,g,v,S,P,R,M,C,U){const y=S/M,T=P/C,k=S/2,z=P/2,$=R/2,q=M+1,G=C+1;let J=0,I=0;const ee=new L;for(let Q=0;Q<G;Q++){const ae=Q*T-z;for(let Te=0;Te<q;Te++){const ke=Te*y-k;ee[x]=ke*g,ee[m]=ae*v,ee[h]=$,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[h]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Te/M),d.push(1-Q/C),J+=1}}for(let Q=0;Q<C;Q++)for(let ae=0;ae<M;ae++){const Te=f+ae+q*Q,ke=f+ae+q*(Q+1),Z=f+(ae+1)+q*(Q+1),j=f+(ae+1)+q*Q;l.push(Te,ke,j),l.push(ke,Z,j),I+=6}a.addGroup(p,I,U),p+=I,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=co(t[n]);for(const r in i)e[r]=i[r]}return e}function KE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const ep={clone:co,merge:sn};var qE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=KE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $v extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new L,og=new be,ag=new be;class kn extends $v{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,og,ag),n.subVectors(ag,og)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,Ss=1;class QE extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(ys,Ss,e,n);r.layers=this.layers,this.add(r);const s=new kn(ys,Ss,e,n);s.layers=this.layers,this.add(s);const o=new kn(ys,Ss,e,n);o.layers=this.layers,this.add(o);const a=new kn(ys,Ss,e,n);a.layers=this.layers,this.add(a);const l=new kn(ys,Ss,e,n);l.layers=this.layers,this.add(l);const c=new kn(ys,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Kv extends cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:so,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JE extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gn(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:gr});s.uniforms.tEquirect.value=n;const o=new Je(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=ri),new QE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Vu=new L,e1=new L,t1=new Ge;class tr{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vu.subVectors(i,n).cross(e1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||t1.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ss,al=new L;class tp{constructor(e=new tr,n=new tr,i=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],x=r[10],m=r[11],h=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+_,S+g).normalize(),i[3].setComponents(l-o,f-u,m-_,S-g).normalize(),i[4].setComponents(l-a,f-d,m-x,S-v).normalize(),n===Di)i[5].setComponents(l+a,f+d,m+x,S+v).normalize();else if(n===xc)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function n1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],x=d[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class uo extends ht{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const g=h*f-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const v=g+c*h,S=g+c*(h+1),P=g+1+c*(h+1),R=g+1+c*h;p.push(v,S,R),p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var i1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D1="gl_FragColor = linearToOutputTexel( gl_FragColor );",I1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ST=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ew=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ww=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:i1,alphahash_pars_fragment:r1,alphamap_fragment:s1,alphamap_pars_fragment:o1,alphatest_fragment:a1,alphatest_pars_fragment:l1,aomap_fragment:c1,aomap_pars_fragment:u1,batching_pars_vertex:h1,batching_vertex:d1,begin_vertex:f1,beginnormal_vertex:p1,bsdfs:m1,iridescence_fragment:g1,bumpmap_pars_fragment:_1,clipping_planes_fragment:v1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:y1,clipping_planes_vertex:S1,color_fragment:M1,color_pars_fragment:E1,color_pars_vertex:T1,color_vertex:w1,common:A1,cube_uv_reflection_fragment:R1,defaultnormal_vertex:C1,displacementmap_pars_vertex:b1,displacementmap_vertex:P1,emissivemap_fragment:L1,emissivemap_pars_fragment:N1,colorspace_fragment:D1,colorspace_pars_fragment:I1,envmap_fragment:U1,envmap_common_pars_fragment:O1,envmap_pars_fragment:F1,envmap_pars_vertex:k1,envmap_physical_pars_fragment:K1,envmap_vertex:z1,fog_vertex:B1,fog_pars_vertex:H1,fog_fragment:V1,fog_pars_fragment:G1,gradientmap_pars_fragment:W1,lightmap_pars_fragment:j1,lights_lambert_fragment:X1,lights_lambert_pars_fragment:Y1,lights_pars_begin:$1,lights_toon_fragment:q1,lights_toon_pars_fragment:Z1,lights_phong_fragment:Q1,lights_phong_pars_fragment:J1,lights_physical_fragment:eT,lights_physical_pars_fragment:tT,lights_fragment_begin:nT,lights_fragment_maps:iT,lights_fragment_end:rT,logdepthbuf_fragment:sT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:aT,logdepthbuf_vertex:lT,map_fragment:cT,map_pars_fragment:uT,map_particle_fragment:hT,map_particle_pars_fragment:dT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:pT,morphinstance_vertex:mT,morphcolor_vertex:gT,morphnormal_vertex:_T,morphtarget_pars_vertex:vT,morphtarget_vertex:xT,normal_fragment_begin:yT,normal_fragment_maps:ST,normal_pars_fragment:MT,normal_pars_vertex:ET,normal_vertex:TT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:AT,clearcoat_normal_fragment_maps:RT,clearcoat_pars_fragment:CT,iridescence_pars_fragment:bT,opaque_fragment:PT,packing:LT,premultiplied_alpha_fragment:NT,project_vertex:DT,dithering_fragment:IT,dithering_pars_fragment:UT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:zT,shadowmap_vertex:BT,shadowmask_pars_fragment:HT,skinbase_vertex:VT,skinning_pars_vertex:GT,skinning_vertex:WT,skinnormal_vertex:jT,specularmap_fragment:XT,specularmap_pars_fragment:YT,tonemapping_fragment:$T,tonemapping_pars_fragment:KT,transmission_fragment:qT,transmission_pars_fragment:ZT,uv_pars_fragment:QT,uv_pars_vertex:JT,uv_vertex:ew,worldpos_vertex:tw,background_vert:nw,background_frag:iw,backgroundCube_vert:rw,backgroundCube_frag:sw,cube_vert:ow,cube_frag:aw,depth_vert:lw,depth_frag:cw,distanceRGBA_vert:uw,distanceRGBA_frag:hw,equirect_vert:dw,equirect_frag:fw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:_w,meshlambert_vert:vw,meshlambert_frag:xw,meshmatcap_vert:yw,meshmatcap_frag:Sw,meshnormal_vert:Mw,meshnormal_frag:Ew,meshphong_vert:Tw,meshphong_frag:ww,meshphysical_vert:Aw,meshphysical_frag:Rw,meshtoon_vert:Cw,meshtoon_frag:bw,points_vert:Pw,points_frag:Lw,shadow_vert:Nw,shadow_frag:Dw,sprite_vert:Iw,sprite_frag:Uw},de={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:sn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:sn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:sn([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:sn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:sn([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:sn([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:sn([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:sn([de.lights,de.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mn.physical={uniforms:sn([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ll={r:0,b:0,g:0},Nr=new vi,Ow=new ot;function Fw(t,e,n,i,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const S=_(g);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===Bc)?(u===void 0&&(u=new Je(new gn(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:co(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Nr.copy(v.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ow.makeRotationFromEuler(Nr)),u.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Je(new uo(2,2),new Vi({name:"BackgroundMaterial",uniforms:co(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function h(g,v){g.getRGB(ll,Yv(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(a,l)},render:x,addToRenderList:m}}function kw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,T,k,z,$){let q=!1;const G=d(z,k,T);s!==G&&(s=G,c(s.object)),q=p(y,z,k,$),q&&_(y,z,k,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(y,T,k,z),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,T,k){const z=k.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let q=$[T.id];q===void 0&&(q={},$[T.id]=q);let G=q[z];return G===void 0&&(G=f(l()),q[z]=G),G}function f(y){const T=[],k=[],z=[];for(let $=0;$<n;$++)T[$]=0,k[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,T,k,z){const $=s.attributes,q=T.attributes;let G=0;const J=k.getAttributes();for(const I in J)if(J[I].location>=0){const Q=$[I];let ae=q[I];if(ae===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(y,T,k,z){const $={},q=T.attributes;let G=0;const J=k.getAttributes();for(const I in J)if(J[I].location>=0){let Q=q[I];Q===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),$[I]=ae,G++}s.attributes=$,s.attributesNum=G,s.index=z}function x(){const y=s.newAttributes;for(let T=0,k=y.length;T<k;T++)y[T]=0}function m(y){h(y,0)}function h(y,T){const k=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;k[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),$[y]!==T&&(t.vertexAttribDivisor(y,T),$[y]=T)}function g(){const y=s.newAttributes,T=s.enabledAttributes;for(let k=0,z=T.length;k<z;k++)T[k]!==y[k]&&(t.disableVertexAttribArray(k),T[k]=0)}function v(y,T,k,z,$,q,G){G===!0?t.vertexAttribIPointer(y,T,k,$,q):t.vertexAttribPointer(y,T,k,z,$,q)}function S(y,T,k,z){x();const $=z.attributes,q=k.getAttributes(),G=T.defaultAttributeValues;for(const J in q){const I=q[J];if(I.location>=0){let ee=$[J];if(ee===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){const Q=ee.normalized,ae=ee.itemSize,Te=e.get(ee);if(Te===void 0)continue;const ke=Te.buffer,Z=Te.type,j=Te.bytesPerElement,ne=Z===t.INT||Z===t.UNSIGNED_INT||ee.gpuType===Xf;if(ee.isInterleavedBufferAttribute){const he=ee.data,Re=he.stride,Ee=ee.offset;if(he.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)h(I.location+ze,he.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ze=0;ze<I.locationSize;ze++)m(I.location+ze);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let ze=0;ze<I.locationSize;ze++)v(I.location+ze,ae/I.locationSize,Z,Q,Re*j,(Ee+ae/I.locationSize*ze)*j,ne)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<I.locationSize;he++)h(I.location+he,ee.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<I.locationSize;he++)m(I.location+he);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let he=0;he<I.locationSize;he++)v(I.location+he,ae/I.locationSize,Z,Q,ae*j,ae/I.locationSize*he*j,ne)}}else if(G!==void 0){const Q=G[J];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(I.location,Q);break;case 3:t.vertexAttrib3fv(I.location,Q);break;case 4:t.vertexAttrib4fv(I.location,Q);break;default:t.vertexAttrib1fv(I.location,Q)}}}}g()}function P(){C();for(const y in i){const T=i[y];for(const k in T){const z=T[k];for(const $ in z)u(z[$].object),delete z[$];delete T[k]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const k in T){const z=T[k];for(const $ in z)u(z[$].object),delete z[$];delete T[k]}delete i[y.id]}function M(y){for(const T in i){const k=i[T];if(k[y.id]===void 0)continue;const z=k[y.id];for(const $ in z)u(z[$].object),delete z[$];delete k[y.id]}}function C(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function zw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];for(let x=0;x<f.length;x++)n.update(_,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==oi&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const C=M===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Hi&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Ni&&!C)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function Hw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new tr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let S=h.clippingState||null;l.value=S,S=u(_,f,v,p);for(let P=0;P!==v;++P)S[P]=n[P];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Vw(t){let e=new WeakMap;function n(o,a){return a===fd?o.mapping=so:a===pd&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fd||a===pd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new JE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Zv extends $v{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,lg=[.125,.215,.35,.446,.526,.582],zr=20,Gu=new Zv,cg=new Be;let Wu=null,ju=0,Xu=0,Yu=!1;const Or=(1+Math.sqrt(5))/2,Ms=1/Or,ug=[new L(-Or,Ms,0),new L(Or,Ms,0),new L(-Ms,0,Or),new L(Ms,0,Or),new L(0,Or,-Ms),new L(0,Or,Ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,ju,Xu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Sa,format:oi,colorSpace:wr,depthBuffer:!1},r=dg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gw(s)),this._blurMaterial=Ww(s,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,Gu)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(cg),u.toneMapping=_r,u.autoClear=!1;const p=new Jt({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new Je(new gn,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(cg),x=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;cl(r,g*v,h>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ug[(r-s-1)%ug.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Je(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zr-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const h=[];let g=0;for(let M=0;M<zr;++M){const C=M/x,U=Math.exp(-C*C/2);h.push(U),M===0?g+=U:M<m&&(g+=2*U)}for(let M=0;M<h.length;M++)h[M]=h[M]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Fs?r-v+Fs:0),R=4*(this._cubeSize-S);cl(n,P,R,3*S,2*S),l.setRenderTarget(n),l.render(d,Gu)}}function Gw(t){const e=[],n=[],i=[];let r=t;const s=t-Fs+1+lg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fs?l=lg[o-t+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,x=3,m=2,h=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let R=0;R<p;R++){const M=R%3*2/3-1,C=R>2?0:-1,U=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];g.set(U,x*_*R),v.set(f,m*_*R);const y=[R,R,R,R,R,R];S.set(y,h*_*R)}const P=new ht;P.setAttribute("position",new Mn(g,x)),P.setAttribute("uv",new Mn(v,m)),P.setAttribute("faceIndex",new Mn(S,h)),e.push(P),r>Fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dg(t,e,n){const i=new ts(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ww(t,e,n){const i=new Float32Array(zr),r=new L(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function fg(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function pg(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fd||l===pd,u=l===so||l===oo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new hg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new hg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Xw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Wl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Yw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let v=0,S=g.length;v<S;v+=3){const P=g[v+0],R=g[v+1],M=g[v+2];f.push(P,R,R,M,M,P)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const P=v+0,R=v+1,M=v+2;f.push(P,R,R,M,M,P)}}else return;const m=new(Bv(f)?Xv:jv)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function $w(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function d(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g];for(let g=0;g<x.length;g++)n.update(h,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Kw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qw(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const M=new Float32Array(P*R*4*d),C=new Vv(M,P,R,d);C.type=Ni,C.needsUpdate=!0;const U=S*4;for(let T=0;T<d;T++){const k=h[T],z=g[T],$=v[T],q=P*R*4*T;for(let G=0;G<k.count;G++){const J=G*U;_===!0&&(r.fromBufferAttribute(k,G),M[q+J+0]=r.x,M[q+J+1]=r.y,M[q+J+2]=r.z,M[q+J+3]=0),x===!0&&(r.fromBufferAttribute(z,G),M[q+J+4]=r.x,M[q+J+5]=r.y,M[q+J+6]=r.z,M[q+J+7]=0),m===!0&&(r.fromBufferAttribute($,G),M[q+J+8]=r.x,M[q+J+9]=r.y,M[q+J+10]=r.z,M[q+J+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new be(P,R)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Zw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Qv extends cn{constructor(e,n,i,r,s,o,a,l,c,u=Ys){if(u!==Ys&&u!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ys&&(i=es),i===void 0&&u===lo&&(i=ao),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jv=new cn,mg=new Qv(1,1),ex=new Vv,tx=new kE,nx=new Kv,gg=[],_g=[],vg=new Float32Array(16),xg=new Float32Array(9),yg=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gg[r];if(s===void 0&&(s=new Float32Array(r),gg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gc(t,e){let n=_g[e];n===void 0&&(n=new Int32Array(e),_g[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function nA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;yg.set(i),t.uniformMatrix2fv(this.addr,!1,yg),Ut(n,i)}}function iA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;xg.set(i),t.uniformMatrix3fv(this.addr,!1,xg),Ut(n,i)}}function rA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;vg.set(i),t.uniformMatrix4fv(this.addr,!1,vg),Ut(n,i)}}function sA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function cA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function fA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mg.compareFunction=zv,s=mg):s=Jv,n.setTexture2D(e||s,r)}function pA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tx,r)}function mA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||nx,r)}function gA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ex,r)}function _A(t){switch(t){case 5126:return Qw;case 35664:return Jw;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return aA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return hA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function vA(t,e){t.uniform1fv(this.addr,e)}function xA(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function yA(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function SA(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function MA(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function EA(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TA(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wA(t,e){t.uniform1iv(this.addr,e)}function AA(t,e){t.uniform2iv(this.addr,e)}function RA(t,e){t.uniform3iv(this.addr,e)}function CA(t,e){t.uniform4iv(this.addr,e)}function bA(t,e){t.uniform1uiv(this.addr,e)}function PA(t,e){t.uniform2uiv(this.addr,e)}function LA(t,e){t.uniform3uiv(this.addr,e)}function NA(t,e){t.uniform4uiv(this.addr,e)}function DA(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Jv,s[o])}function IA(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||tx,s[o])}function UA(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||nx,s[o])}function OA(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ex,s[o])}function FA(t){switch(t){case 5126:return vA;case 35664:return xA;case 35665:return yA;case 35666:return SA;case 35674:return MA;case 35675:return EA;case 35676:return TA;case 5124:case 35670:return wA;case 35667:case 35671:return AA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return bA;case 36294:return PA;case 36295:return LA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return OA}}class kA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_A(n.type)}}class zA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FA(n.type)}}class BA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Sg(t,e){t.seq.push(e),t.map[e.id]=e}function HA(t,e,n){const i=t.name,r=i.length;for($u.lastIndex=0;;){const s=$u.exec(i),o=$u.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sg(n,c===void 0?new kA(a,t,e):new zA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new BA(a),Sg(n,d)),n=d}}}class jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);HA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const VA=37297;let GA=0;function WA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function jA(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===vc&&n===_c?i="LinearDisplayP3ToLinearSRGB":e===_c&&n===vc&&(i="LinearSRGBToLinearDisplayP3"),t){case wr:case Hc:return[i,"LinearTransferOETF"];case ni:case Qf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Eg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+WA(t.getShaderSource(e),o)}else return r}function XA(t,e){const n=jA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YA(t,e){let n;switch(e){case KM:n="Linear";break;case qM:n="Reinhard";break;case ZM:n="Cineon";break;case QM:n="ACESFilmic";break;case eE:n="AgX";break;case tE:n="Neutral";break;case JM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new L;function $A(){nt.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function qA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fo(t){return t!==""}function Tg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(t){return t.replace(QA,eR)}const JA=new Map;function eR(t,e){let n=Ve[e];if(n===void 0){const i=JA.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wd(n)}const tR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(t){return t.replace(tR,nR)}function nR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===CM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function rR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function oR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Av:e="ENVMAP_BLENDING_MULTIPLY";break;case YM:e="ENVMAP_BLENDING_MIX";break;case $M:e="ENVMAP_BLENDING_ADD";break}return e}function aR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=iR(n),c=rR(n),u=sR(n),d=oR(n),f=aR(n),p=KA(n),_=qA(s),x=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fo).join(`
`),h.length>0&&(h+=`
`)):(m=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),h=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?Ve.tonemapping_pars_fragment:"",n.toneMapping!==_r?YA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,XA("linearToOutputTexel",n.outputColorSpace),$A(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Wd(o),o=Tg(o,n),o=wg(o,n),a=Wd(a),a=Tg(a,n),a=wg(a,n),o=Ag(o),a=Ag(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=g+m+o,S=g+h+a,P=Mg(r,r.VERTEX_SHADER,v),R=Mg(r,r.FRAGMENT_SHADER,S);r.attachShader(x,P),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function M(T){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(R).trim();let q=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,R);else{const J=Eg(r,P,"vertex"),I=Eg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+J+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||$==="")&&(G=!1);G&&(T.diagnostics={runnable:q,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:h}})}r.deleteShader(P),r.deleteShader(R),C=new jl(r,x),U=ZA(r,x)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let U;this.getAttributes=function(){return U===void 0&&M(this),U};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,VA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}let cR=0;class uR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hR(e),n.set(e,i)),i}}class hR{constructor(e){this.id=cR++,this.code=e,this.usedTimes=0}}function dR(t,e,n,i,r,s,o){const a=new Gv,l=new uR,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,T,k,z,$){const q=z.fog,G=$.geometry,J=y.isMeshStandardMaterial?z.environment:null,I=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),ee=I&&I.mapping===Bc?I.image.height:null,Q=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=ae!==void 0?ae.length:0;let ke=0;G.morphAttributes.position!==void 0&&(ke=1),G.morphAttributes.normal!==void 0&&(ke=2),G.morphAttributes.color!==void 0&&(ke=3);let Z,j,ne,he;if(Q){const nn=mn[Q];Z=nn.vertexShader,j=nn.fragmentShader}else Z=y.vertexShader,j=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const Re=t.getRenderTarget(),Ee=$.isInstancedMesh===!0,ze=$.isBatchedMesh===!0,We=!!y.map,He=!!y.matcap,N=!!I,zt=!!y.aoMap,je=!!y.lightMap,Xe=!!y.bumpMap,Pe=!!y.normalMap,at=!!y.displacementMap,Ue=!!y.emissiveMap,b=!!y.metalnessMap,E=!!y.roughnessMap,B=y.anisotropy>0,H=y.clearcoat>0,K=y.dispersion>0,Y=y.iridescence>0,ie=y.sheen>0,re=y.transmission>0,ce=B&&!!y.anisotropyMap,ue=H&&!!y.clearcoatMap,se=H&&!!y.clearcoatNormalMap,ge=H&&!!y.clearcoatRoughnessMap,De=Y&&!!y.iridescenceMap,Le=Y&&!!y.iridescenceThicknessMap,ye=ie&&!!y.sheenColorMap,ve=ie&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Fe=!!y.specularColorMap,D=!!y.specularIntensityMap,fe=re&&!!y.transmissionMap,X=re&&!!y.thicknessMap,te=!!y.gradientMap,pe=!!y.alphaMap,me=y.alphaTest>0,Ye=!!y.alphaHash,xt=!!y.extensions;let Bt=_r;y.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Bt=t.toneMapping);const qe={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:j,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:ze,batchingColor:ze&&$._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&$.instanceColor!==null,instancingMorph:Ee&&$.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:wr,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:He,envMap:N,envMapMode:N&&I.mapping,envMapCubeUVHeight:ee,aoMap:zt,lightMap:je,bumpMap:Xe,normalMap:Pe,displacementMap:p&&at,emissiveMap:Ue,normalMapObjectSpace:Pe&&y.normalMapType===sE,normalMapTangentSpace:Pe&&y.normalMapType===kv,metalnessMap:b,roughnessMap:E,anisotropy:B,anisotropyMap:ce,clearcoat:H,clearcoatMap:ue,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,dispersion:K,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:Le,sheen:ie,sheenColorMap:ye,sheenRoughnessMap:ve,specularMap:Ce,specularColorMap:Fe,specularIntensityMap:D,transmission:re,transmissionMap:fe,thicknessMap:X,gradientMap:te,opaque:y.transparent===!1&&y.blending===Xs&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:me,alphaHash:Ye,combine:y.combine,mapUv:We&&m(y.map.channel),aoMapUv:zt&&m(y.aoMap.channel),lightMapUv:je&&m(y.lightMap.channel),bumpMapUv:Xe&&m(y.bumpMap.channel),normalMapUv:Pe&&m(y.normalMap.channel),displacementMapUv:at&&m(y.displacementMap.channel),emissiveMapUv:Ue&&m(y.emissiveMap.channel),metalnessMapUv:b&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:ce&&m(y.anisotropyMap.channel),clearcoatMapUv:ue&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(y.sheenRoughnessMap.channel),specularMapUv:Ce&&m(y.specularMap.channel),specularColorMapUv:Fe&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:fe&&m(y.transmissionMap.channel),thicknessMapUv:X&&m(y.thicknessMap.channel),alphaMapUv:pe&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pe||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(We||pe),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Bt,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function g(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)T.push(k),T.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(v(T,y),S(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const T=x[y.type];let k;if(T){const z=mn[T];k=ep.clone(z.uniforms)}else k=y.uniforms;return k}function R(y,T){let k;for(let z=0,$=u.length;z<$;z++){const q=u[z];if(q.cacheKey===T){k=q,++k.usedTimes;break}}return k===void 0&&(k=new lR(t,T,y,s),u.push(k)),k}function M(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function U(){l.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:P,acquireProgram:R,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:U}}function fR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,_,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function a(d,f,p,_,x,m){const h=o(d,f,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,_,x,m){const h=o(d,f,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||pR),i.length>1&&i.sort(f||Cg),r.length>1&&r.sort(f||Cg)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function mR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new bg,t.set(i,[o])):r>=s.length?(o=new bg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Be};break;case"SpotLight":n={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function _R(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vR=0;function xR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yR(t){const e=new gR,n=_R(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new ot,o=new ot;function a(c){let u=0,d=0,f=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,g=0,v=0,S=0,P=0,R=0,M=0;c.sort(xR);for(let U=0,y=c.length;U<y;U++){const T=c[U],k=T.color,z=T.intensity,$=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=k.r*z,d+=k.g*z,f+=k.b*z;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],z);M++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const J=T.shadow,I=n.get(T);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=T.shadow.matrix,g++}i.directional[p]=G,p++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(k).multiplyScalar(z),G.distance=$,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[x]=G;const J=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,J.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[x]=J.matrix,T.castShadow){const I=n.get(T);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=q,S++}x++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(k).multiplyScalar(z),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=G,m++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const J=T.shadow,I=n.get(T);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,I.shadowCameraNear=J.camera.near,I.shadowCameraFar=J.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=T.shadow.matrix,v++}i.point[_]=G,_++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(z),G.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==g||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==P||C.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=M,C.directionalLength=p,C.pointLength=_,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=g,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=P,C.numLightProbes=M,i.version=vR++)}function l(c,u){let d=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Pg(t){const e=new yR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function SR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pg(t),e.set(r,[a])):s>=o.length?(a=new Pg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class MR extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ER extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AR(t,e,n){let i=new tp;const r=new be,s=new be,o=new ut,a=new MR({depthPacking:rE}),l=new ER,c={},u=n.maxTextureSize,d={[yr]:Sn,[Sn]:yr,[an]:an},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:TR,fragmentShader:wR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ht;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Je(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wv;let h=this.type;this.render=function(R,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const U=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),k=t.state;k.setBlending(gr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=h!==Ti&&this.type===Ti,$=h===Ti&&this.type!==Ti;for(let q=0,G=R.length;q<G;q++){const J=R[q],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const ee=I.getFrameExtents();if(r.multiply(ee),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,I.mapSize.y=s.y)),I.map===null||z===!0||$===!0){const ae=this.type!==Ti?{minFilter:Wn,magFilter:Wn}:{};I.map!==null&&I.map.dispose(),I.map=new ts(r.x,r.y,ae),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Q=I.getViewportCount();for(let ae=0;ae<Q;ae++){const Te=I.getViewport(ae);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),k.viewport(o),I.updateMatrices(J,ae),i=I.getFrustum(),S(M,C,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===Ti&&g(I,C),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(U,y,T)};function g(R,M){const C=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ts(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(M,null,C,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(M,null,C,p,x,null)}function v(R,M,C,U){let y=null;const T=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)y=T;else if(y=C.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=y.uuid,z=M.uuid;let $=c[k];$===void 0&&($={},c[k]=$);let q=$[z];q===void 0&&(q=y.clone(),$[z]=q,M.addEventListener("dispose",P)),y=q}if(y.visible=M.visible,y.wireframe=M.wireframe,U===Ti?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:d[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=C}return y}function S(R,M,C,U,y){if(R.visible===!1)return;if(R.layers.test(M.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Ti)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const z=e.update(R),$=R.material;if(Array.isArray($)){const q=z.groups;for(let G=0,J=q.length;G<J;G++){const I=q[G],ee=$[I.materialIndex];if(ee&&ee.visible){const Q=v(R,ee,U,y);R.onBeforeShadow(t,R,M,C,z,Q,I),t.renderBufferDirect(C,null,z,Q,R,I),R.onAfterShadow(t,R,M,C,z,Q,I)}}}else if($.visible){const q=v(R,$,U,y);R.onBeforeShadow(t,R,M,C,z,q,null),t.renderBufferDirect(C,null,z,q,R,null),R.onAfterShadow(t,R,M,C,z,q,null)}}const k=R.children;for(let z=0,$=k.length;z<$;z++)S(k[z],M,C,U,y)}function P(R){R.target.removeEventListener("dispose",P);for(const C in c){const U=c[C],y=R.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}const RR={[od]:ad,[ld]:hd,[cd]:dd,[ro]:ud,[ad]:od,[hd]:ld,[dd]:cd,[ud]:ro};function CR(t){function e(){let D=!1;const fe=new ut;let X=null;const te=new ut(0,0,0,0);return{setMask:function(pe){X!==pe&&!D&&(t.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){D=pe},setClear:function(pe,me,Ye,xt,Bt){Bt===!0&&(pe*=xt,me*=xt,Ye*=xt),fe.set(pe,me,Ye,xt),te.equals(fe)===!1&&(t.clearColor(pe,me,Ye,xt),te.copy(fe))},reset:function(){D=!1,X=null,te.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,X=null,te=null,pe=null;return{setReversed:function(me){fe=me},setTest:function(me){me?ne(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(me){X!==me&&!D&&(t.depthMask(me),X=me)},setFunc:function(me){if(fe&&(me=RR[me]),te!==me){switch(me){case od:t.depthFunc(t.NEVER);break;case ad:t.depthFunc(t.ALWAYS);break;case ld:t.depthFunc(t.LESS);break;case ro:t.depthFunc(t.LEQUAL);break;case cd:t.depthFunc(t.EQUAL);break;case ud:t.depthFunc(t.GEQUAL);break;case hd:t.depthFunc(t.GREATER);break;case dd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=me}},setLocked:function(me){D=me},setClear:function(me){pe!==me&&(t.clearDepth(me),pe=me)},reset:function(){D=!1,X=null,te=null,pe=null}}}function i(){let D=!1,fe=null,X=null,te=null,pe=null,me=null,Ye=null,xt=null,Bt=null;return{setTest:function(qe){D||(qe?ne(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(qe){fe!==qe&&!D&&(t.stencilMask(qe),fe=qe)},setFunc:function(qe,nn,En){(X!==qe||te!==nn||pe!==En)&&(t.stencilFunc(qe,nn,En),X=qe,te=nn,pe=En)},setOp:function(qe,nn,En){(me!==qe||Ye!==nn||xt!==En)&&(t.stencilOp(qe,nn,En),me=qe,Ye=nn,xt=En)},setLocked:function(qe){D=qe},setClear:function(qe){Bt!==qe&&(t.clearStencil(qe),Bt=qe)},reset:function(){D=!1,fe=null,X=null,te=null,pe=null,me=null,Ye=null,xt=null,Bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,h=null,g=null,v=null,S=null,P=null,R=new Be(0,0,0),M=0,C=!1,U=null,y=null,T=null,k=null,z=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=G>=2);let I=null,ee={};const Q=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Te=new ut().fromArray(Q),ke=new ut().fromArray(ae);function Z(D,fe,X,te){const pe=new Uint8Array(4),me=t.createTexture();t.bindTexture(D,me),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<X;Ye++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return me}const j={};j[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),j[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),j[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),s.setFunc(ro),je(!1),Xe(km),ne(t.CULL_FACE),N(gr);function ne(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function he(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Re(D,fe){return u[D]!==fe?(t.bindFramebuffer(D,fe),u[D]=fe,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ee(D,fe){let X=f,te=!1;if(D){X=d.get(fe),X===void 0&&(X=[],d.set(fe,X));const pe=D.textures;if(X.length!==pe.length||X[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ye=pe.length;me<Ye;me++)X[me]=t.COLOR_ATTACHMENT0+me;X.length=pe.length,te=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,te=!0);te&&t.drawBuffers(X)}function ze(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const We={[kr]:t.FUNC_ADD,[PM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};We[NM]=t.MIN,We[DM]=t.MAX;const He={[IM]:t.ZERO,[UM]:t.ONE,[OM]:t.SRC_COLOR,[rd]:t.SRC_ALPHA,[VM]:t.SRC_ALPHA_SATURATE,[BM]:t.DST_COLOR,[kM]:t.DST_ALPHA,[FM]:t.ONE_MINUS_SRC_COLOR,[sd]:t.ONE_MINUS_SRC_ALPHA,[HM]:t.ONE_MINUS_DST_COLOR,[zM]:t.ONE_MINUS_DST_ALPHA,[GM]:t.CONSTANT_COLOR,[WM]:t.ONE_MINUS_CONSTANT_COLOR,[jM]:t.CONSTANT_ALPHA,[XM]:t.ONE_MINUS_CONSTANT_ALPHA};function N(D,fe,X,te,pe,me,Ye,xt,Bt,qe){if(D===gr){_===!0&&(he(t.BLEND),_=!1);return}if(_===!1&&(ne(t.BLEND),_=!0),D!==bM){if(D!==x||qe!==C){if((m!==kr||v!==kr)&&(t.blendEquation(t.FUNC_ADD),m=kr,v=kr),qe)switch(D){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zm:t.blendFunc(t.ONE,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,g=null,S=null,P=null,R.set(0,0,0),M=0,x=D,C=qe}return}pe=pe||fe,me=me||X,Ye=Ye||te,(fe!==m||pe!==v)&&(t.blendEquationSeparate(We[fe],We[pe]),m=fe,v=pe),(X!==h||te!==g||me!==S||Ye!==P)&&(t.blendFuncSeparate(He[X],He[te],He[me],He[Ye]),h=X,g=te,S=me,P=Ye),(xt.equals(R)===!1||Bt!==M)&&(t.blendColor(xt.r,xt.g,xt.b,Bt),R.copy(xt),M=Bt),x=D,C=!1}function zt(D,fe){D.side===an?he(t.CULL_FACE):ne(t.CULL_FACE);let X=D.side===Sn;fe&&(X=!X),je(X),D.blending===Xs&&D.transparent===!1?N(gr):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const te=D.stencilWrite;o.setTest(te),te&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){U!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),U=D)}function Xe(D){D!==AM?(ne(t.CULL_FACE),D!==y&&(D===km?t.cullFace(t.BACK):D===RM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),y=D}function Pe(D){D!==T&&(q&&t.lineWidth(D),T=D)}function at(D,fe,X){D?(ne(t.POLYGON_OFFSET_FILL),(k!==fe||z!==X)&&(t.polygonOffset(fe,X),k=fe,z=X)):he(t.POLYGON_OFFSET_FILL)}function Ue(D){D?ne(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function b(D){D===void 0&&(D=t.TEXTURE0+$-1),I!==D&&(t.activeTexture(D),I=D)}function E(D,fe,X){X===void 0&&(I===null?X=t.TEXTURE0+$-1:X=I);let te=ee[X];te===void 0&&(te={type:void 0,texture:void 0},ee[X]=te),(te.type!==D||te.texture!==fe)&&(I!==X&&(t.activeTexture(X),I=X),t.bindTexture(D,fe||j[D]),te.type=D,te.texture=fe)}function B(){const D=ee[I];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){Te.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function ye(D){ke.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function ve(D,fe){let X=l.get(fe);X===void 0&&(X=new WeakMap,l.set(fe,X));let te=X.get(D);te===void 0&&(te=t.getUniformBlockIndex(fe,D.name),X.set(D,te))}function Ce(D,fe){const te=l.get(fe).get(D);a.get(fe)!==te&&(t.uniformBlockBinding(fe,te,D.__bindingPointIndex),a.set(fe,te))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,ee={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,h=null,g=null,v=null,S=null,P=null,R=new Be(0,0,0),M=0,C=!1,U=null,y=null,T=null,k=null,z=null,Te.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ne,disable:he,bindFramebuffer:Re,drawBuffers:Ee,useProgram:ze,setBlending:N,setMaterial:zt,setFlipSided:je,setCullFace:Xe,setLineWidth:Pe,setPolygonOffset:at,setScissorTest:Ue,activeTexture:b,bindTexture:E,unbindTexture:B,compressedTexImage2D:H,compressedTexImage3D:K,texImage2D:ge,texImage3D:De,updateUBOMapping:ve,uniformBlockBinding:Ce,texStorage2D:ue,texStorage3D:se,texSubImage2D:Y,texSubImage3D:ie,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:Le,viewport:ye,reset:Fe}}function Lg(t,e,n,i){const r=bR(i);switch(n){case Lv:return t*e;case Dv:return t*e;case Iv:return t*e*2;case Uv:return t*e/r.components*r.byteLength;case Kf:return t*e/r.components*r.byteLength;case Ov:return t*e*2/r.components*r.byteLength;case qf:return t*e*2/r.components*r.byteLength;case Nv:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Zf:return t*e*4/r.components*r.byteLength;case zl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:case yd:return Math.max(t,16)*Math.max(e,8)/4;case _d:case xd:return Math.max(t,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gl:case kd:case zd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Fv:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bR(t){switch(t){case Hi:case Cv:return{byteLength:1,components:1};case ha:case bv:case Sa:return{byteLength:2,components:1};case Yf:case $f:return{byteLength:2,components:4};case es:case Xf:case Ni:return{byteLength:4,components:1};case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function PR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,E){return p?new OffscreenCanvas(b,E):yc("canvas")}function x(b,E,B){let H=1;const K=Ue(b);if((K.width>B||K.height>B)&&(H=B/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(H*K.width),ie=Math.floor(H*K.height);d===void 0&&(d=_(Y,ie));const re=E?_(Y,ie):d;return re.width=Y,re.height=ie,re.getContext("2d").drawImage(b,0,0,Y,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+ie+")."),re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Wn&&b.minFilter!==ri}function h(b){t.generateMipmap(b)}function g(b,E,B,H,K=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=E;if(E===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),E===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8)),E===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),E===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),E===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),E===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),E===t.RGBA){const ie=K?gc:nt.getTransfer(H);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=ie===mt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(b,E){let B;return b?E===null||E===es||E===ao?B=t.DEPTH24_STENCIL8:E===Ni?B=t.DEPTH32F_STENCIL8:E===ha&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===es||E===ao?B=t.DEPTH_COMPONENT24:E===Ni?B=t.DEPTH_COMPONENT32F:E===ha&&(B=t.DEPTH_COMPONENT16),B}function S(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Wn&&b.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function P(b){const E=b.target;E.removeEventListener("dispose",P),M(E),E.isVideoTexture&&u.delete(E)}function R(b){const E=b.target;E.removeEventListener("dispose",R),U(E)}function M(b){const E=i.get(b);if(E.__webglInit===void 0)return;const B=b.source,H=f.get(B);if(H){const K=H[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(b),Object.keys(H).length===0&&f.delete(B)}i.remove(b)}function C(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const B=b.source,H=f.get(B);delete H[E.__cacheKey],o.memory.textures--}function U(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(E.__webglFramebuffer[H]))for(let K=0;K<E.__webglFramebuffer[H].length;K++)t.deleteFramebuffer(E.__webglFramebuffer[H][K]);else t.deleteFramebuffer(E.__webglFramebuffer[H]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[H])}else{if(Array.isArray(E.__webglFramebuffer))for(let H=0;H<E.__webglFramebuffer.length;H++)t.deleteFramebuffer(E.__webglFramebuffer[H]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let H=0;H<E.__webglColorRenderbuffer.length;H++)E.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[H]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=b.textures;for(let H=0,K=B.length;H<K;H++){const Y=i.get(B[H]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[H])}i.remove(b)}let y=0;function T(){y=0}function k(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function z(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function $(b,E){const B=i.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(B,b,E);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function q(b,E){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ke(B,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function G(b,E){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ke(B,b,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function J(b,E){const B=i.get(b);if(b.version>0&&B.__version!==b.version){Z(B,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const I={[md]:t.REPEAT,[Wr]:t.CLAMP_TO_EDGE,[gd]:t.MIRRORED_REPEAT},ee={[Wn]:t.NEAREST,[nE]:t.NEAREST_MIPMAP_NEAREST,[Wa]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Su]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},Q={[oE]:t.NEVER,[dE]:t.ALWAYS,[aE]:t.LESS,[zv]:t.LEQUAL,[lE]:t.EQUAL,[hE]:t.GEQUAL,[cE]:t.GREATER,[uE]:t.NOTEQUAL};function ae(b,E){if(E.type===Ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===Su||E.magFilter===Wa||E.magFilter===jr||E.minFilter===ri||E.minFilter===Su||E.minFilter===Wa||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,I[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ee[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wn||E.minFilter!==Wa&&E.minFilter!==jr||E.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Te(b,E){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",P));const H=E.source;let K=f.get(H);K===void 0&&(K={},f.set(H,K));const Y=z(E);if(Y!==b.__cacheKey){K[Y]===void 0&&(K[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[Y].usedTimes++;const ie=K[b.__cacheKey];ie!==void 0&&(K[b.__cacheKey].usedTimes--,ie.usedTimes===0&&C(E)),b.__cacheKey=Y,b.__webglTexture=K[Y].texture}return B}function ke(b,E,B){let H=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(H=t.TEXTURE_3D);const K=Te(b,E),Y=E.source;n.bindTexture(H,b.__webglTexture,t.TEXTURE0+B);const ie=i.get(Y);if(Y.version!==ie.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const re=nt.getPrimaries(nt.workingColorSpace),ce=E.colorSpace===rr?null:nt.getPrimaries(E.colorSpace),ue=E.colorSpace===rr||re===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let se=x(E.image,!1,r.maxTextureSize);se=at(E,se);const ge=s.convert(E.format,E.colorSpace),De=s.convert(E.type);let Le=g(E.internalFormat,ge,De,E.colorSpace,E.isVideoTexture);ae(H,E);let ye;const ve=E.mipmaps,Ce=E.isVideoTexture!==!0,Fe=ie.__version===void 0||K===!0,D=Y.dataReady,fe=S(E,se);if(E.isDepthTexture)Le=v(E.format===lo,E.type),Fe&&(Ce?n.texStorage2D(t.TEXTURE_2D,1,Le,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ge,De,null));else if(E.isDataTexture)if(ve.length>0){Ce&&Fe&&n.texStorage2D(t.TEXTURE_2D,fe,Le,ve[0].width,ve[0].height);for(let X=0,te=ve.length;X<te;X++)ye=ve[X],Ce?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,ge,De,ye.data):n.texImage2D(t.TEXTURE_2D,X,Le,ye.width,ye.height,0,ge,De,ye.data);E.generateMipmaps=!1}else Ce?(Fe&&n.texStorage2D(t.TEXTURE_2D,fe,Le,se.width,se.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ge,De,se.data)):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ge,De,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ce&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,ve[0].width,ve[0].height,se.depth);for(let X=0,te=ve.length;X<te;X++)if(ye=ve[X],E.format!==oi)if(ge!==null)if(Ce){if(D)if(E.layerUpdates.size>0){const pe=Lg(ye.width,ye.height,E.format,E.type);for(const me of E.layerUpdates){const Ye=ye.data.subarray(me*pe/ye.data.BYTES_PER_ELEMENT,(me+1)*pe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,me,ye.width,ye.height,1,ge,Ye,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,ge,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Le,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,ge,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Le,ye.width,ye.height,se.depth,0,ge,De,ye.data)}else{Ce&&Fe&&n.texStorage2D(t.TEXTURE_2D,fe,Le,ve[0].width,ve[0].height);for(let X=0,te=ve.length;X<te;X++)ye=ve[X],E.format!==oi?ge!==null?Ce?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,ge,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,ge,De,ye.data):n.texImage2D(t.TEXTURE_2D,X,Le,ye.width,ye.height,0,ge,De,ye.data)}else if(E.isDataArrayTexture)if(Ce){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Le,se.width,se.height,se.depth),D)if(E.layerUpdates.size>0){const X=Lg(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const pe=se.data.subarray(te*X/se.data.BYTES_PER_ELEMENT,(te+1)*X/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,ge,De,pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,De,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ge,De,se.data);else if(E.isData3DTexture)Ce?(Fe&&n.texStorage3D(t.TEXTURE_3D,fe,Le,se.width,se.height,se.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,De,se.data)):n.texImage3D(t.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ge,De,se.data);else if(E.isFramebufferTexture){if(Fe)if(Ce)n.texStorage2D(t.TEXTURE_2D,fe,Le,se.width,se.height);else{let X=se.width,te=se.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,Le,X,te,0,ge,De,null),X>>=1,te>>=1}}else if(ve.length>0){if(Ce&&Fe){const X=Ue(ve[0]);n.texStorage2D(t.TEXTURE_2D,fe,Le,X.width,X.height)}for(let X=0,te=ve.length;X<te;X++)ye=ve[X],Ce?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge,De,ye):n.texImage2D(t.TEXTURE_2D,X,Le,ge,De,ye);E.generateMipmaps=!1}else if(Ce){if(Fe){const X=Ue(se);n.texStorage2D(t.TEXTURE_2D,fe,Le,X.width,X.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,De,se)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,De,se);m(E)&&h(H),ie.__version=Y.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Z(b,E,B){if(E.image.length!==6)return;const H=Te(b,E),K=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const Y=i.get(K);if(K.version!==Y.__version||H===!0){n.activeTexture(t.TEXTURE0+B);const ie=nt.getPrimaries(nt.workingColorSpace),re=E.colorSpace===rr?null:nt.getPrimaries(E.colorSpace),ce=E.colorSpace===rr||ie===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ue=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!ue&&!se?ge[te]=x(E.image[te],!0,r.maxCubemapSize):ge[te]=se?E.image[te].image:E.image[te],ge[te]=at(E,ge[te]);const De=ge[0],Le=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),ve=g(E.internalFormat,Le,ye,E.colorSpace),Ce=E.isVideoTexture!==!0,Fe=Y.__version===void 0||H===!0,D=K.dataReady;let fe=S(E,De);ae(t.TEXTURE_CUBE_MAP,E);let X;if(ue){Ce&&Fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ve,De.width,De.height);for(let te=0;te<6;te++){X=ge[te].mipmaps;for(let pe=0;pe<X.length;pe++){const me=X[pe];E.format!==oi?Le!==null?Ce?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,me.width,me.height,Le,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,me.width,me.height,Le,ye,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,ve,me.width,me.height,0,Le,ye,me.data)}}}else{if(X=E.mipmaps,Ce&&Fe){X.length>0&&fe++;const te=Ue(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ve,te.width,te.height)}for(let te=0;te<6;te++)if(se){Ce?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,Le,ye,ge[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ve,ge[te].width,ge[te].height,0,Le,ye,ge[te].data);for(let pe=0;pe<X.length;pe++){const Ye=X[pe].image[te].image;Ce?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ye.width,Ye.height,Le,ye,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,ve,Ye.width,Ye.height,0,Le,ye,Ye.data)}}else{Ce?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,ye,ge[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ve,Le,ye,ge[te]);for(let pe=0;pe<X.length;pe++){const me=X[pe];Ce?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Le,ye,me.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,ve,Le,ye,me.image[te])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),Y.__version=K.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function j(b,E,B,H,K,Y){const ie=s.convert(B.format,B.colorSpace),re=s.convert(B.type),ce=g(B.internalFormat,ie,re,B.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Y),ge=Math.max(1,E.height>>Y);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,Y,ce,se,ge,E.depth,0,ie,re,null):n.texImage2D(K,Y,ce,se,ge,0,ie,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,K,i.get(B).__webglTexture,0,je(E)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,K,i.get(B).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(b,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const H=E.depthTexture,K=H&&H.isDepthTexture?H.type:null,Y=v(E.stencilBuffer,K),ie=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=je(E);Xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,Y,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,b)}else{const H=E.textures;for(let K=0;K<H.length;K++){const Y=H[K],ie=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),ce=g(Y.internalFormat,ie,re,Y.colorSpace),ue=je(E);B&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ce,E.width,E.height):Xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const H=i.get(E.depthTexture).__webglTexture,K=je(E);if(E.depthTexture.format===Ys)Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,H,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,H,0);else if(E.depthTexture.format===lo)Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,H,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Re(b){const E=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const H=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),H){const K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=H}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(E.__webglFramebuffer,b)}else if(B){E.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[H]),E.__webglDepthbuffer[H]===void 0)E.__webglDepthbuffer[H]=t.createRenderbuffer(),ne(E.__webglDepthbuffer[H],b,!1);else{const K=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ne(E.__webglDepthbuffer,b,!1);else{const H=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,K)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(b,E,B){const H=i.get(b);E!==void 0&&j(H.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Re(b)}function ze(b){const E=b.texture,B=i.get(b),H=i.get(E);b.addEventListener("dispose",R);const K=b.textures,Y=b.isWebGLCubeRenderTarget===!0,ie=K.length>1;if(ie||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=E.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let ce=0;ce<E.mipmaps.length;ce++)B.__webglFramebuffer[re][ce]=t.createFramebuffer()}else B.__webglFramebuffer[re]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)B.__webglFramebuffer[re]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ie)for(let re=0,ce=K.length;re<ce;re++){const ue=i.get(K[re]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ce=K[re];B.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const ue=s.convert(ce.format,ce.colorSpace),se=s.convert(ce.type),ge=g(ce.internalFormat,ue,se,ce.colorSpace,b.isXRRenderTarget===!0),De=je(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,B.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),ae(t.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)j(B.__webglFramebuffer[re][ce],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else j(B.__webglFramebuffer[re],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){for(let re=0,ce=K.length;re<ce;re++){const ue=K[re],se=i.get(ue);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ae(t.TEXTURE_2D,ue),j(B.__webglFramebuffer,b,ue,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),m(ue)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,H.__webglTexture),ae(re,E),E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)j(B.__webglFramebuffer[ce],b,E,t.COLOR_ATTACHMENT0,re,ce);else j(B.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,re,0);m(E)&&h(re),n.unbindTexture()}b.depthBuffer&&Re(b)}function We(b){const E=b.textures;for(let B=0,H=E.length;B<H;B++){const K=E[B];if(m(K)){const Y=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=i.get(K).__webglTexture;n.bindTexture(Y,ie),h(Y),n.unbindTexture()}}}const He=[],N=[];function zt(b){if(b.samples>0){if(Xe(b)===!1){const E=b.textures,B=b.width,H=b.height;let K=t.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(b),re=E.length>1;if(re)for(let ce=0;ce<E.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ce]);const ue=i.get(E[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,B,H,0,0,B,H,K,t.NEAREST),l===!0&&(He.length=0,N.length=0,He.push(t.COLOR_ATTACHMENT0+ce),b.depthBuffer&&b.resolveDepthBuffer===!1&&(He.push(Y),N.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<E.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ce]);const ue=i.get(E[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function je(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(b){const E=o.render.frame;u.get(b)!==E&&(u.set(b,E),b.update())}function at(b,E){const B=b.colorSpace,H=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==wr&&B!==rr&&(nt.getTransfer(B)===mt?(H!==oi||K!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=T,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Ee,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Xe}function LR(t,e){function n(i,r=rr){let s;const o=nt.getTransfer(r);if(i===Hi)return t.UNSIGNED_BYTE;if(i===Yf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$f)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Cv)return t.BYTE;if(i===bv)return t.SHORT;if(i===ha)return t.UNSIGNED_SHORT;if(i===Xf)return t.INT;if(i===es)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===Sa)return t.HALF_FLOAT;if(i===Lv)return t.ALPHA;if(i===Nv)return t.RGB;if(i===oi)return t.RGBA;if(i===Dv)return t.LUMINANCE;if(i===Iv)return t.LUMINANCE_ALPHA;if(i===Ys)return t.DEPTH_COMPONENT;if(i===lo)return t.DEPTH_STENCIL;if(i===Uv)return t.RED;if(i===Kf)return t.RED_INTEGER;if(i===Ov)return t.RG;if(i===qf)return t.RG_INTEGER;if(i===Zf)return t.RGBA_INTEGER;if(i===zl||i===Bl||i===Hl||i===Vl)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_d||i===vd||i===xd||i===yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===Md||i===Ed)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sd||i===Md)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ed)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Td||i===wd||i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld||i===Nd||i===Dd||i===Id||i===Ud||i===Od||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Td)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ad)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Id)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ud)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===kd||i===zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gl)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fv||i===Bd||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class NR extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DR={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const IR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vi({vertexShader:IR,fragmentShader:UR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Je(new uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FR extends rs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const x=new OR,m=n.getContextAttributes();let h=null,g=null;const v=[],S=[],P=new be;let R=null;const M=new kn;M.layers.enable(1),M.viewport=new ut;const C=new kn;C.layers.enable(2),C.viewport=new ut;const U=[M,C],y=new NR;y.layers.enable(1),y.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=v[Z];return j===void 0&&(j=new Ku,v[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=v[Z];return j===void 0&&(j=new Ku,v[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=v[Z];return j===void 0&&(j=new Ku,v[Z]=j),j.getHandSpace()};function z(Z){const j=S.indexOf(Z.inputSource);if(j===-1)return;const ne=v[j];ne!==void 0&&(ne.update(Z.inputSource,Z.frame,c||o),ne.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let Z=0;Z<v.length;Z++){const j=S[Z];j!==null&&(S[Z]=null,v[Z].disconnect(j))}T=null,k=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,g=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ts(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ne=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=m.stencil?lo:Ys,ne=m.stencil?ao:es);const Re={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new ts(f.textureWidth,f.textureHeight,{format:oi,type:Hi,depthTexture:new Qv(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(Z){for(let j=0;j<Z.removed.length;j++){const ne=Z.removed[j],he=S.indexOf(ne);he>=0&&(S[he]=null,v[he].disconnect(ne))}for(let j=0;j<Z.added.length;j++){const ne=Z.added[j];let he=S.indexOf(ne);if(he===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=S.length){S.push(ne),he=Ee;break}else if(S[Ee]===null){S[Ee]=ne,he=Ee;break}if(he===-1)break}const Re=v[he];Re&&Re.connect(ne)}}const G=new L,J=new L;function I(Z,j,ne){G.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(ne.matrixWorld);const he=G.distanceTo(J),Re=j.projectionMatrix.elements,Ee=ne.projectionMatrix.elements,ze=Re[14]/(Re[10]-1),We=Re[14]/(Re[10]+1),He=(Re[9]+1)/Re[5],N=(Re[9]-1)/Re[5],zt=(Re[8]-1)/Re[0],je=(Ee[8]+1)/Ee[0],Xe=ze*zt,Pe=ze*je,at=he/(-zt+je),Ue=at*-zt;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const b=ze+at,E=We+at,B=Xe-Ue,H=Pe+(he-Ue),K=He*We/E*b,Y=N*We/E*b;Z.projectionMatrix.makePerspective(B,H,K,Y,b,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ee(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let j=Z.near,ne=Z.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ne=x.depthFar)),y.near=C.near=M.near=j,y.far=C.far=M.far=ne,(T!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,k=y.far);const he=Z.parent,Re=y.cameras;ee(y,he);for(let Ee=0;Ee<Re.length;Ee++)ee(Re[Ee],he);Re.length===2?I(y,M,C):y.projectionMatrix.copy(M.projectionMatrix),Q(Z,y,he)};function Q(Z,j,ne){ne===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ne.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=da*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ae=null;function Te(Z,j){if(u=j.getViewerPose(c||o),_=j,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let he=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let Ee=0;Ee<ne.length;Ee++){const ze=ne[Ee];let We=null;if(p!==null)We=p.getViewport(ze);else{const N=d.getViewSubImage(f,ze);We=N.viewport,Ee===0&&(e.setRenderTargetTextures(g,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(g))}let He=U[Ee];He===void 0&&(He=new kn,He.layers.enable(Ee),He.viewport=new ut,U[Ee]=He),He.matrix.fromArray(ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(We.x,We.y,We.width,We.height),Ee===0&&(y.matrix.copy(He.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(He)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ee=d.getDepthInformation(ne[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,r.renderState)}}for(let ne=0;ne<v.length;ne++){const he=S[ne],Re=v[ne];he!==null&&Re!==void 0&&Re.update(he,j,c||o)}ae&&ae(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const ke=new qv;ke.setAnimationLoop(Te),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}const Dr=new vi,kR=new ot;function zR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Yv(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,Dr.copy(S),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(kR.makeRotationFromEuler(Dr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=r[g.id];S===void 0&&(_(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(g,P);const R=e.render.frame;s[g.id]!==R&&(f(g),s[g.id]=R)}function u(g){const v=d();g.__bindingPointIndex=v;const S=t.createBuffer(),P=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],S=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,M=S.length;R<M;R++){const C=Array.isArray(S[R])?S[R]:[S[R]];for(let U=0,y=C.length;U<y;U++){const T=C[U];if(p(T,R,U,P)===!0){const k=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let $=0;for(let q=0;q<z.length;q++){const G=z[q],J=x(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,k+$,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,S,P){const R=g.value,M=v+"_"+S;if(P[M]===void 0)return typeof R=="number"||typeof R=="boolean"?P[M]=R:P[M]=R.clone(),!0;{const C=P[M];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[M]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function _(g){const v=g.uniforms;let S=0;const P=16;for(let M=0,C=v.length;M<C;M++){const U=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,T=U.length;y<T;y++){const k=U[y],z=Array.isArray(k.value)?k.value:[k.value];for(let $=0,q=z.length;$<q;$++){const G=z[$],J=x(G),I=S%P,ee=I%J.boundary,Q=I+ee;S+=ee,Q!==0&&P-Q<J.storage&&(S+=P-Q),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=J.storage}}}const R=S%P;return R>0&&(S+=P-R),g.__size=S,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class HR{constructor(e={}){const{canvas:n=bE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=_r,this.toneMappingExposure=1;const v=this;let S=!1,P=0,R=0,M=null,C=-1,U=null;const y=new ut,T=new ut;let k=null;const z=new Be(0);let $=0,q=n.width,G=n.height,J=1,I=null,ee=null;const Q=new ut(0,0,q,G),ae=new ut(0,0,q,G);let Te=!1;const ke=new tp;let Z=!1,j=!1;const ne=new ot,he=new ot,Re=new L,Ee=new ut,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function He(){return M===null?J:1}let N=i;function zt(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",me,!1),N===null){const O="webgl2";if(N=zt(O,w),N===null)throw zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,Xe,Pe,at,Ue,b,E,B,H,K,Y,ie,re,ce,ue,se,ge,De,Le,ye,ve,Ce,Fe,D;function fe(){je=new Xw(N),je.init(),Ce=new LR(N,je),Xe=new Bw(N,je,e,Ce),Pe=new CR(N),Xe.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),at=new Kw(N),Ue=new fR,b=new PR(N,je,Pe,Ue,Xe,Ce,at),E=new Vw(v),B=new jw(v),H=new n1(N),Fe=new kw(N,H),K=new Yw(N,H,at,Fe),Y=new Zw(N,K,H,at),Le=new qw(N,Xe,b),se=new Hw(Ue),ie=new dR(v,E,B,je,Xe,Fe,se),re=new zR(v,Ue),ce=new mR,ue=new SR(je),De=new Fw(v,E,B,Pe,Y,f,l),ge=new AR(v,Y,Xe),D=new BR(N,at,Xe,Pe),ye=new zw(N,je,at),ve=new $w(N,je,at),at.programs=ie.programs,v.capabilities=Xe,v.extensions=je,v.properties=Ue,v.renderLists=ce,v.shadowMap=ge,v.state=Pe,v.info=at}fe();const X=new FR(v,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(q,G,!1))},this.getSize=function(w){return w.set(q,G)},this.setSize=function(w,O,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,G=O,n.width=Math.floor(w*J),n.height=Math.floor(O*J),V===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(q*J,G*J).floor()},this.setDrawingBufferSize=function(w,O,V){q=w,G=O,J=V,n.width=Math.floor(w*V),n.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,O,V,W){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,O,V,W),Pe.viewport(y.copy(Q).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,O,V,W){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,O,V,W),Pe.scissor(T.copy(ae).multiplyScalar(J).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){Pe.setScissorTest(Te=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,O=!0,V=!0){let W=0;if(w){let F=!1;if(M!==null){const le=M.texture.format;F=le===Zf||le===qf||le===Kf}if(F){const le=M.texture.type,_e=le===Hi||le===es||le===ha||le===ao||le===Yf||le===$f,Se=De.getClearColor(),Me=De.getClearAlpha(),Ie=Se.r,Oe=Se.g,we=Se.b;_e?(p[0]=Ie,p[1]=Oe,p[2]=we,p[3]=Me,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Ie,_[1]=Oe,_[2]=we,_[3]=Me,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}O&&(W|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ce.dispose(),ue.dispose(),Ue.dispose(),E.dispose(),B.dispose(),Y.dispose(),Fe.dispose(),D.dispose(),ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",mp),X.removeEventListener("sessionend",gp),Rr.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=at.autoReset,O=ge.enabled,V=ge.autoUpdate,W=ge.needsUpdate,F=ge.type;fe(),at.autoReset=w,ge.enabled=O,ge.autoUpdate=V,ge.needsUpdate=W,ge.type=F}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ye(w){const O=w.target;O.removeEventListener("dispose",Ye),xt(O)}function xt(w){Bt(w),Ue.remove(w)}function Bt(w){const O=Ue.get(w).programs;O!==void 0&&(O.forEach(function(V){ie.releaseProgram(V)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,W,F,le){O===null&&(O=ze);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Se=xx(w,O,V,W,F);Pe.setMaterial(W,_e);let Me=V.index,Ie=1;if(W.wireframe===!0){if(Me=K.getWireframeAttribute(V),Me===void 0)return;Ie=2}const Oe=V.drawRange,we=V.attributes.position;let it=Oe.start*Ie,ft=(Oe.start+Oe.count)*Ie;le!==null&&(it=Math.max(it,le.start*Ie),ft=Math.min(ft,(le.start+le.count)*Ie)),Me!==null?(it=Math.max(it,0),ft=Math.min(ft,Me.count)):we!=null&&(it=Math.max(it,0),ft=Math.min(ft,we.count));const Et=ft-it;if(Et<0||Et===1/0)return;Fe.setup(F,W,Se,V,Me);let Tn,et=ye;if(Me!==null&&(Tn=H.get(Me),et=ve,et.setIndex(Tn)),F.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*He()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(F.isLine){let Ae=W.linewidth;Ae===void 0&&(Ae=1),Pe.setLineWidth(Ae*He()),F.isLineSegments?et.setMode(N.LINES):F.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else F.isPoints?et.setMode(N.POINTS):F.isSprite&&et.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,Ht=F._multiDrawCounts,tt=F._multiDrawCount,$n=Me?H.get(Me).bytesPerElement:1,as=Ue.get(W).currentProgram.getUniforms();for(let wn=0;wn<tt;wn++)as.setValue(N,"_gl_DrawID",wn),et.render(Ae[wn]/$n,Ht[wn])}else if(F.isInstancedMesh)et.renderInstances(it,Et,F.count);else if(V.isInstancedBufferGeometry){const Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ht=Math.min(V.instanceCount,Ae);et.renderInstances(it,Et,Ht)}else et.render(it,Et)};function qe(w,O,V){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,wa(w,O,V),w.side=yr,w.needsUpdate=!0,wa(w,O,V),w.side=an):wa(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),m=ue.get(V),m.init(O),g.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Se=le[_e];qe(Se,V,F),W.add(Se)}else qe(le,V,F),W.add(le)}),g.pop(),m=null,W},this.compileAsync=function(w,O,V=null){const W=this.compile(w,O,V);return new Promise(F=>{function le(){if(W.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){F(w);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let nn=null;function En(w){nn&&nn(w)}function mp(){Rr.stop()}function gp(){Rr.start()}const Rr=new qv;Rr.setAnimationLoop(En),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(w){nn=w,X.setAnimationLoop(w),w===null?Rr.stop():Rr.start()},X.addEventListener("sessionstart",mp),X.addEventListener("sessionend",gp),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,M),m=ue.get(w,g.length),m.init(O),g.push(m),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ke.setFromProjectionMatrix(he),j=this.localClippingEnabled,Z=se.init(this.clippingPlanes,j),x=ce.get(w,h.length),x.init(),h.push(x),X.enabled===!0&&X.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&jc(le,O,-1/0,v.sortObjects)}jc(w,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,ee),We=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,We&&De.addToRenderList(x,w),this.info.render.frame++,Z===!0&&se.beginShadows();const V=m.state.shadowsArray;ge.render(V,w,O),Z===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,F=x.transmissive;if(m.setupLights(),O.isArrayCamera){const le=O.cameras;if(F.length>0)for(let _e=0,Se=le.length;_e<Se;_e++){const Me=le[_e];vp(W,F,w,Me)}We&&De.render(w);for(let _e=0,Se=le.length;_e<Se;_e++){const Me=le[_e];_p(x,w,Me,Me.viewport)}}else F.length>0&&vp(W,F,w,O),We&&De.render(w),_p(x,w,O);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(v,w,O),Fe.resetDefaultState(),C=-1,U=null,g.pop(),g.length>0?(m=g[g.length-1],Z===!0&&se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function jc(w,O,V,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){W&&Ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const _e=Y.update(w),Se=w.material;Se.visible&&x.push(w,_e,Se,V,Ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const _e=Y.update(w),Se=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ee.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ee.copy(_e.boundingSphere.center)),Ee.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Se)){const Me=_e.groups;for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){const we=Me[Ie],it=Se[we.materialIndex];it&&it.visible&&x.push(w,_e,it,V,Ee.z,we)}}else Se.visible&&x.push(w,_e,Se,V,Ee.z,null)}}const le=w.children;for(let _e=0,Se=le.length;_e<Se;_e++)jc(le[_e],O,V,W)}function _p(w,O,V,W){const F=w.opaque,le=w.transmissive,_e=w.transparent;m.setupLightsView(V),Z===!0&&se.setGlobalState(v.clippingPlanes,V),W&&Pe.viewport(y.copy(W)),F.length>0&&Ta(F,O,V),le.length>0&&Ta(le,O,V),_e.length>0&&Ta(_e,O,V),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function vp(w,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ts(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Sa:Hi,minFilter:jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const le=m.state.transmissionRenderTarget[W.id],_e=W.viewport||y;le.setSize(_e.z,_e.w);const Se=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(z),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),We&&De.render(V);const Me=v.toneMapping;v.toneMapping=_r;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Z===!0&&se.setGlobalState(v.clippingPlanes,W),Ta(w,V,W),b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le),je.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let we=0,it=O.length;we<it;we++){const ft=O[we],Et=ft.object,Tn=ft.geometry,et=ft.material,Ae=ft.group;if(et.side===an&&Et.layers.test(W.layers)){const Ht=et.side;et.side=Sn,et.needsUpdate=!0,xp(Et,V,W,Tn,et,Ae),et.side=Ht,et.needsUpdate=!0,Oe=!0}}Oe===!0&&(b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le))}v.setRenderTarget(Se),v.setClearColor(z,$),Ie!==void 0&&(W.viewport=Ie),v.toneMapping=Me}function Ta(w,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let F=0,le=w.length;F<le;F++){const _e=w[F],Se=_e.object,Me=_e.geometry,Ie=W===null?_e.material:W,Oe=_e.group;Se.layers.test(V.layers)&&xp(Se,O,V,Me,Ie,Oe)}}function xp(w,O,V,W,F,le){w.onBeforeRender(v,O,V,W,F,le),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,O,V,W,w,le),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=Sn,F.needsUpdate=!0,v.renderBufferDirect(V,O,W,F,w,le),F.side=yr,F.needsUpdate=!0,v.renderBufferDirect(V,O,W,F,w,le),F.side=an):v.renderBufferDirect(V,O,W,F,w,le),w.onAfterRender(v,O,V,W,F,le)}function wa(w,O,V){O.isScene!==!0&&(O=ze);const W=Ue.get(w),F=m.state.lights,le=m.state.shadowsArray,_e=F.state.version,Se=ie.getParameters(w,F.state,le,O,V),Me=ie.getProgramCacheKey(Se);let Ie=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?B:E).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Ye),Ie=new Map,W.programs=Ie);let Oe=Ie.get(Me);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===_e)return Sp(w,Se),Oe}else Se.uniforms=ie.getUniforms(w),w.onBeforeCompile(Se,v),Oe=ie.acquireProgram(Se,Me),Ie.set(Me,Oe),W.uniforms=Se.uniforms;const we=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=se.uniform),Sp(w,Se),W.needsLights=Sx(w),W.lightsStateVersion=_e,W.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function yp(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=jl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Sp(w,O){const V=Ue.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function xx(w,O,V,W,F){O.isScene!==!0&&(O=ze),b.resetTextureUnits();const le=O.fog,_e=W.isMeshStandardMaterial?O.environment:null,Se=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:wr,Me=(W.isMeshStandardMaterial?B:E).get(W.envMap||_e),Ie=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,ft=!!V.morphAttributes.color;let Et=_r;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Et=v.toneMapping);const Tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=Tn!==void 0?Tn.length:0,Ae=Ue.get(W),Ht=m.state.lights;if(Z===!0&&(j===!0||w!==U)){const In=w===U&&W.id===C;se.setState(W,w,In)}let tt=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ht.state.version||Ae.outputColorSpace!==Se||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==Me||W.fog===!0&&Ae.fog!==le||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==Oe||Ae.morphTargets!==we||Ae.morphNormals!==it||Ae.morphColors!==ft||Ae.toneMapping!==Et||Ae.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ae.__version=W.version);let $n=Ae.currentProgram;tt===!0&&($n=wa(W,O,F));let as=!1,wn=!1,Xc=!1;const wt=$n.getUniforms(),Wi=Ae.uniforms;if(Pe.useProgram($n.program)&&(as=!0,wn=!0,Xc=!0),W.id!==C&&(C=W.id,wn=!0),as||U!==w){Xe.reverseDepthBuffer?(ne.copy(w.projectionMatrix),LE(ne),NE(ne),wt.setValue(N,"projectionMatrix",ne)):wt.setValue(N,"projectionMatrix",w.projectionMatrix),wt.setValue(N,"viewMatrix",w.matrixWorldInverse);const In=wt.map.cameraPosition;In!==void 0&&In.setValue(N,Re.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&wt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,wn=!0,Xc=!0)}if(F.isSkinnedMesh){wt.setOptional(N,F,"bindMatrix"),wt.setOptional(N,F,"bindMatrixInverse");const In=F.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),wt.setValue(N,"boneTexture",In.boneTexture,b))}F.isBatchedMesh&&(wt.setOptional(N,F,"batchingTexture"),wt.setValue(N,"batchingTexture",F._matricesTexture,b),wt.setOptional(N,F,"batchingIdTexture"),wt.setValue(N,"batchingIdTexture",F._indirectTexture,b),wt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&wt.setValue(N,"batchingColorTexture",F._colorsTexture,b));const Yc=V.morphAttributes;if((Yc.position!==void 0||Yc.normal!==void 0||Yc.color!==void 0)&&Le.update(F,V,$n),(wn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,wt.setValue(N,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wi.envMap.value=Me,Wi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Wi.envMapIntensity.value=O.environmentIntensity),wn&&(wt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&yx(Wi,Xc),le&&W.fog===!0&&re.refreshFogUniforms(Wi,le),re.refreshMaterialUniforms(Wi,W,J,G,m.state.transmissionRenderTarget[w.id]),jl.upload(N,yp(Ae),Wi,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(jl.upload(N,yp(Ae),Wi,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(N,"center",F.center),wt.setValue(N,"modelViewMatrix",F.modelViewMatrix),wt.setValue(N,"normalMatrix",F.normalMatrix),wt.setValue(N,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const In=W.uniformsGroups;for(let $c=0,Mx=In.length;$c<Mx;$c++){const Mp=In[$c];D.update(Mp,$n),D.bind(Mp,$n)}}return $n}function yx(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Sx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,O,V){Ue.get(w.texture).__webglTexture=O,Ue.get(w.depthTexture).__webglTexture=V;const W=Ue.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const V=Ue.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){M=w,P=O,R=V;let W=!0,F=null,le=!1,_e=!1;if(w){const Me=Ue.get(w);if(Me.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Me.__hasExternalTextures)b.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const we=w.depthTexture;if(Me.__boundDepthTexture!==we){if(we!==null&&Ue.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(_e=!0);const Oe=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?F=Oe[O][V]:F=Oe[O],le=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?F=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[V]:F=Oe,y.copy(w.viewport),T.copy(w.scissor),k=w.scissorTest}else y.copy(Q).multiplyScalar(J).floor(),T.copy(ae).multiplyScalar(J).floor(),k=Te;if(Pe.bindFramebuffer(N.FRAMEBUFFER,F)&&W&&Pe.drawBuffers(w,F),Pe.viewport(y),Pe.scissor(T),Pe.setScissorTest(k),le){const Me=Ue.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,V)}else if(_e){const Me=Ue.get(w.texture),Ie=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Ie)}C=-1},this.readRenderTargetPixels=function(w,O,V,W,F,le,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){Pe.bindFramebuffer(N.FRAMEBUFFER,Se);try{const Me=w.texture,Ie=Me.format,Oe=Me.type;if(!Xe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&V>=0&&V<=w.height-F&&N.readPixels(O,V,W,F,Ce.convert(Ie),Ce.convert(Oe),le)}finally{const Me=M!==null?Ue.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,O,V,W,F,le,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){const Me=w.texture,Ie=Me.format,Oe=Me.type;if(!Xe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-W&&V>=0&&V<=w.height-F){Pe.bindFramebuffer(N.FRAMEBUFFER,Se);const we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),N.readPixels(O,V,W,F,Ce.convert(Ie),Ce.convert(Oe),0);const it=M!==null?Ue.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,it);const ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await PE(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(we),N.deleteSync(ft),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,V=0){w.isTexture!==!0&&(Wl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(w.image.width*W),le=Math.floor(w.image.height*W),_e=O!==null?O.x:0,Se=O!==null?O.y:0;b.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,_e,Se,F,le),Pe.unbindTexture()},this.copyTextureToTexture=function(w,O,V=null,W=null,F=0){w.isTexture!==!0&&(Wl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let le,_e,Se,Me,Ie,Oe;V!==null?(le=V.max.x-V.min.x,_e=V.max.y-V.min.y,Se=V.min.x,Me=V.min.y):(le=w.image.width,_e=w.image.height,Se=0,Me=0),W!==null?(Ie=W.x,Oe=W.y):(Ie=0,Oe=0);const we=Ce.convert(O.format),it=Ce.convert(O.type);b.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const ft=N.getParameter(N.UNPACK_ROW_LENGTH),Et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=N.getParameter(N.UNPACK_SKIP_PIXELS),et=N.getParameter(N.UNPACK_SKIP_ROWS),Ae=N.getParameter(N.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[F]:w.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Me),w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Ie,Oe,le,_e,we,it,Ht.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Ie,Oe,Ht.width,Ht.height,we,Ht.data):N.texSubImage2D(N.TEXTURE_2D,F,Ie,Oe,le,_e,we,it,Ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,ft),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ae),F===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V=null,W=null,F=0){w.isTexture!==!0&&(Wl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0);let le,_e,Se,Me,Ie,Oe,we,it,ft;const Et=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(le=V.max.x-V.min.x,_e=V.max.y-V.min.y,Se=V.max.z-V.min.z,Me=V.min.x,Ie=V.min.y,Oe=V.min.z):(le=Et.width,_e=Et.height,Se=Et.depth,Me=0,Ie=0,Oe=0),W!==null?(we=W.x,it=W.y,ft=W.z):(we=0,it=0,ft=0);const Tn=Ce.convert(O.format),et=Ce.convert(O.type);let Ae;if(O.isData3DTexture)b.setTexture3D(O,0),Ae=N.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)b.setTexture2DArray(O,0),Ae=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Ht=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$n=N.getParameter(N.UNPACK_SKIP_PIXELS),as=N.getParameter(N.UNPACK_SKIP_ROWS),wn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ae,F,we,it,ft,le,_e,Se,Tn,et,Et.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,F,we,it,ft,le,_e,Se,Tn,Et.data):N.texSubImage3D(Ae,F,we,it,ft,le,_e,Se,Tn,et,Et),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$n),N.pixelStorei(N.UNPACK_SKIP_ROWS,as),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wn),F===0&&O.generateMipmaps&&N.generateMipmap(Ae),Pe.unbindTexture()},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){P=0,R=0,M=null,Pe.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Qf?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Hc?"display-p3":"srgb"}}class ip{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=n,this.far=i}clone(){return new ip(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let VR=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};class GR{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Gd,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new L;class ar{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=si(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=si(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=si(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=si(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Mn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ri extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new L,Mc=new L,Ng=new ot,Po=new Vc,hl=new ss,qu=new L,Dg=new L;class Br extends bt{constructor(e=new ht,n=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Sc.fromBufferAttribute(n,r-1),Mc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Ng.copy(r).invert(),Po.copy(e.ray).applyMatrix4(Ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=u.getX(x),g=u.getX(x+1),v=dl(this,e,Po,l,h,g);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),h=dl(this,e,Po,l,x,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=dl(this,e,Po,l,x,x+1);h&&n.push(h)}if(this.isLineLoop){const x=dl(this,e,Po,l,_-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function dl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Sc.fromBufferAttribute(o,r),Mc.fromBufferAttribute(o,s),n.distanceSqToSegment(Sc,Mc,qu,Dg)>i)return;qu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(qu);if(!(l<e.near||l>e.far))return{distance:l,point:Dg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Ig=new L,Ug=new L;class ix extends Br{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ig.fromBufferAttribute(n,r),Ug.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ig.distanceTo(Ug);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class WR extends Br{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class rx extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Og=new ot,jd=new Vc,fl=new ss,pl=new L;class jR extends bt{constructor(e=new ht,n=new rx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Og.copy(r).invert(),jd.copy(e.ray).applyMatrix4(Og);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);pl.fromBufferAttribute(d,m),Fg(pl,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,x=p;_<x;_++)pl.fromBufferAttribute(d,_),Fg(pl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fg(t,e,n,i,r,s,o){const a=jd.distanceSqToPoint(t);if(a<n){const l=new L;jd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class XR extends cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class YR{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new be:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new L,r=[],s=[],o=[],a=new L,l=new ot;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Nt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Nt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function rp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ml=new L,Zu=new rp,Qu=new rp,Ju=new rp;class $R extends YR{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ml.subVectors(r[0],r[1]).add(r[0]),c=ml);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ml.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ml),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Zu.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,x,m),Qu.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,x,m),Ju.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Zu.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Qu.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Ju.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Zu.calc(l),Qu.calc(l),Ju.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class qs extends ht{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new L,u=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ho extends ht{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let _=0;const x=[],m=i/2;let h=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(p,2));function g(){const S=new L,P=new L;let R=0;const M=(n-e)/i;for(let C=0;C<=s;C++){const U=[],y=C/s,T=y*(n-e)+e;for(let k=0;k<=r;k++){const z=k/r,$=z*l+a,q=Math.sin($),G=Math.cos($);P.x=T*q,P.y=-y*i+m,P.z=T*G,d.push(P.x,P.y,P.z),S.set(q,M,G).normalize(),f.push(S.x,S.y,S.z),p.push(z,1-y),U.push(_++)}x.push(U)}for(let C=0;C<r;C++)for(let U=0;U<s;U++){const y=x[U][C],T=x[U+1][C],k=x[U+1][C+1],z=x[U][C+1];e>0&&(u.push(y,T,z),R+=3),n>0&&(u.push(T,k,z),R+=3)}c.addGroup(h,R,0),h+=R}function v(S){const P=_,R=new be,M=new L;let C=0;const U=S===!0?e:n,y=S===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),_++;const T=_;for(let k=0;k<=r;k++){const $=k/r*l+a,q=Math.cos($),G=Math.sin($);M.x=U*G,M.y=m*y,M.z=U*q,d.push(M.x,M.y,M.z),f.push(0,y,0),R.x=q*.5+.5,R.y=G*.5*y+.5,p.push(R.x,R.y),_++}for(let k=0;k<r;k++){const z=P+k,$=T+k;S===!0?u.push($,$+1,z):u.push($+1,$,z),C+=3}c.addGroup(h,C,S===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wc extends ht{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new L,S=new L,P=new L;for(let R=0;R<n.length;R+=3)p(n[R+0],v),p(n[R+1],S),p(n[R+2],P),l(v,S,P,g)}function l(g,v,S,P){const R=P+1,M=[];for(let C=0;C<=R;C++){M[C]=[];const U=g.clone().lerp(S,C/R),y=v.clone().lerp(S,C/R),T=R-C;for(let k=0;k<=T;k++)k===0&&C===R?M[C][k]=U:M[C][k]=U.clone().lerp(y,k/T)}for(let C=0;C<R;C++)for(let U=0;U<2*(R-C)-1;U++){const y=Math.floor(U/2);U%2===0?(f(M[C][y+1]),f(M[C+1][y]),f(M[C][y])):(f(M[C][y+1]),f(M[C+1][y+1]),f(M[C+1][y]))}}function c(g){const v=new L;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(g),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const g=new L;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const S=m(g)/2/Math.PI+.5,P=h(g)/Math.PI+.5;o.push(S,1-P)}_(),d()}function d(){for(let g=0;g<o.length;g+=6){const v=o[g+0],S=o[g+2],P=o[g+4],R=Math.max(v,S,P),M=Math.min(v,S,P);R>.9&&M<.1&&(v<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,v){const S=g*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const g=new L,v=new L,S=new L,P=new L,R=new be,M=new be,C=new be;for(let U=0,y=0;U<s.length;U+=9,y+=6){g.set(s[U+0],s[U+1],s[U+2]),v.set(s[U+3],s[U+4],s[U+5]),S.set(s[U+6],s[U+7],s[U+8]),R.set(o[y+0],o[y+1]),M.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),P.copy(g).add(v).add(S).divideScalar(3);const T=m(P);x(R,y+0,g,T),x(M,y+2,v,T),x(C,y+4,S,T)}}function x(g,v,S,P){P<0&&g.x===1&&(o[v]=g.x-1),S.x===0&&S.z===0&&(o[v]=P/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.vertices,e.indices,e.radius,e.details)}}const gl=new L,_l=new L,eh=new L,vl=new Hn;class KR extends ht{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos($s*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:m,c:h}=vl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),vl.getNormal(eh),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const v=(g+1)%3,S=d[g],P=d[v],R=vl[u[g]],M=vl[u[v]],C=`${S}_${P}`,U=`${P}_${S}`;U in f&&f[U]?(eh.dot(f[U].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(M.x,M.y,M.z)),f[U]=null):C in f||(f[C]={index0:c[g],index1:c[v],normal:eh.clone()})}}for(const _ in f)if(f[_]){const{index0:x,index1:m}=f[_];gl.fromBufferAttribute(a,x),_l.fromBufferAttribute(a,m),p.push(gl.x,gl.y,gl.z),p.push(_l.x,_l.y,_l.z)}this.setAttribute("position",new Qe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class sp extends Wc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new sp(e.radius,e.detail)}}class op extends Wc{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new op(e.radius,e.detail)}}class ks extends ht{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new L,_=new be;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,u.push(_.x,_.y)}d+=f}for(let x=0;x<r;x++){const m=x*(i+1);for(let h=0;h<i;h++){const g=h+m,v=g,S=g+i+1,P=g+i+2,R=g+1;a.push(v,S,R),a.push(S,P,R)}}this.setIndex(a),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ma extends ht{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new L,f=new L,p=[],_=[],x=[],m=[];for(let h=0;h<=i;h++){const g=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const R=P/n;d.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+S,1-v),g.push(c++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const v=u[h][g+1],S=u[h][g],P=u[h+1][g],R=u[h+1][g+1];(h!==0||o>0)&&p.push(v,S,R),(h!==i-1||l<Math.PI)&&p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ap extends ht{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new L,d=new L,f=new L;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,g=(r+1)*p+_;o.push(x,m,g),o.push(m,h,g)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qR extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new L,s=new L;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],f=d.start,p=d.count;for(let _=f,x=f+p;_<x;_+=3)for(let m=0;m<3;m++){const h=a.getX(_+m),g=a.getX(_+(m+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,g),kg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),kg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Qe(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function kg(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class Xd extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kv,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZR extends Ri{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class sx extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class QR extends sx{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const th=new ot,zg=new L,Bg=new L;class JR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;zg.setFromMatrixPosition(e.matrixWorld),n.position.copy(zg),Bg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bg),n.updateMatrixWorld(),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e2 extends JR{constructor(){super(new Zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hg extends sx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new e2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t2 extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Yd extends GR{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class Vg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gg=new L,xl=new L;class n2{constructor(e=new L,n=new L){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Gg.subVectors(e,this.start),xl.subVectors(this.end,this.start);const i=xl.dot(xl);let s=xl.dot(Gg)/i;return n&&(s=Nt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Wg extends ix{constructor(e=10,n=10,i=4473924,r=8947848){i=new Be(i),r=new Be(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=n;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=f===s?i:r;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const u=new ht;u.setAttribute("position",new Qe(l,3)),u.setAttribute("color",new Qe(c,3));const d=new Ri({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class i2 extends rs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);const jg={type:"change"},lp={type:"start"},ox={type:"end"},yl=new Vc,Xg=new tr,r2=Math.cos(70*Ci.DEG2RAD),Pt=new L,dn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nh=1e-6;class s2 extends i2{constructor(e,n=null){super(e,n),this.state=ct.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Sr,this._lastTargetPosition=new L,this._quat=new Sr().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vg,this._sphericalDelta=new Vg,this._scale=1,this._panOffset=new L,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new L,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a2.bind(this),this._onPointerDown=o2.bind(this),this._onPointerUp=l2.bind(this),this._onContextMenu=m2.bind(this),this._onMouseWheel=h2.bind(this),this._onKeyDown=d2.bind(this),this._onTouchStart=f2.bind(this),this._onTouchMove=p2.bind(this),this._onMouseDown=c2.bind(this),this._onMouseMove=u2.bind(this),this._interceptControlDown=g2.bind(this),this._interceptControlUp=_2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jg),this.update(),this.state=ct.NONE}update(e=null){const n=this.object.position;Pt.copy(n).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),r<-Math.PI?r+=dn:r>Math.PI&&(r-=dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(yl.origin.copy(this.object.position),yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yl.direction))<r2?this.object.lookAt(this.target):(Xg.setFromNormalAndCoplanarPoint(this.object.up,this.target),yl.intersectPlane(Xg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nh||this._lastTargetPosition.distanceToSquared(this.target)>nh?(this.dispatchEvent(jg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Pt.setFromMatrixColumn(n,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,n){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(n,1):(Pt.setFromMatrixColumn(n,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pt.copy(r).sub(this.target);let s=Pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function o2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function a2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function l2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ox),this.state=ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function c2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ct.DOLLY;break;case js.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}break;case js.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(lp)}function u2(t){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function h2(t){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(t.preventDefault(),this.dispatchEvent(lp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(ox))}function d2(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function f2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ct.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ct.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(lp)}function p2(t){switch(this._trackPointer(t),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ct.NONE}}function m2(t){this.enabled!==!1&&t.preventDefault()}function g2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ax extends bt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new be(.5,.5),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Es=new L,Yg=new ot,$g=new ot,Kg=new L,qg=new L;class v2{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(_,x){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Yg.copy(x.matrixWorldInverse),$g.multiplyMatrices(x.projectionMatrix,Yg),u(_,_,x),p(_)},this.setSize=function(_,x){i=_,r=x,s=i/2,o=r/2,l.style.width=_+"px",l.style.height=x+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let x=0,m=_.children.length;x<m;x++)c(_.children[x])}function u(_,x,m){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){Es.setFromMatrixPosition(_.matrixWorld),Es.applyMatrix4($g);const h=Es.z>=-1&&Es.z<=1&&_.layers.test(m.layers)===!0,g=_.element;g.style.display=h===!0?"":"none",h===!0&&(_.onBeforeRender(n,x,m),g.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(Es.x*s+s)+"px,"+(-Es.y*o+o)+"px)",g.parentNode!==l&&l.appendChild(g),_.onAfterRender(n,x,m));const v={distanceToCameraSquared:d(m,_)};a.objects.set(_,v)}for(let h=0,g=_.children.length;h<g;h++)u(_.children[h],x,m)}function d(_,x){return Kg.setFromMatrixPosition(_.matrixWorld),qg.setFromMatrixPosition(x.matrixWorld),Kg.distanceToSquared(qg)}function f(_){const x=[];return _.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function p(_){const x=f(_).sort(function(h,g){if(h.renderOrder!==g.renderOrder)return g.renderOrder-h.renderOrder;const v=a.objects.get(h).distanceToCameraSquared,S=a.objects.get(g).distanceToCameraSquared;return v-S}),m=x.length;for(let h=0,g=x.length;h<g;h++)x[h].element.style.zIndex=m-h}}}const Zg=new Ar,Sl=new L;class lx extends t2{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Qe(e,3)),this.setAttribute("uv",new Qe(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Yd(n,6,1);return this.setAttribute("instanceStart",new ar(i,3,0)),this.setAttribute("instanceEnd",new ar(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Yd(n,6,1);return this.setAttribute("instanceColorStart",new ar(i,3,0)),this.setAttribute("instanceColorEnd",new ar(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new qR(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Zg.setFromBufferAttribute(n),this.boundingBox.union(Zg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Sl.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Sl)),Sl.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(Sl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}de.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};mn.line={uniforms:ep.merge([de.common,de.fog,de.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class cp extends Vi{constructor(e){super({type:"LineMaterial",uniforms:ep.clone(mn.line.uniforms),vertexShader:mn.line.vertexShader,fragmentShader:mn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ih=new ut,Qg=new L,Jg=new L,Vt=new ut,Gt=new ut,hi=new ut,rh=new L,sh=new ot,Xt=new n2,e0=new L,Ml=new Ar,El=new ss,di=new ut;let mi,$r;function t0(t,e,n){return di.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),di.multiplyScalar(1/di.w),di.x=$r/n.width,di.y=$r/n.height,di.applyMatrix4(t.projectionMatrixInverse),di.multiplyScalar(1/di.w),Math.abs(Math.max(di.x,di.y))}function x2(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Xt.start.fromBufferAttribute(r,a),Xt.end.fromBufferAttribute(s,a),Xt.applyMatrix4(n);const c=new L,u=new L;mi.distanceSqToSegment(Xt.start,Xt.end,u,c),u.distanceTo(c)<$r*.5&&e.push({point:u,pointOnLine:c,distance:mi.origin.distanceTo(u),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function y2(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),d=-e.near;mi.at(1,hi),hi.w=1,hi.applyMatrix4(e.matrixWorldInverse),hi.applyMatrix4(i),hi.multiplyScalar(1/hi.w),hi.x*=s.x/2,hi.y*=s.y/2,hi.z=0,rh.copy(hi),sh.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(Vt.fromBufferAttribute(l,f),Gt.fromBufferAttribute(c,f),Vt.w=1,Gt.w=1,Vt.applyMatrix4(sh),Gt.applyMatrix4(sh),Vt.z>d&&Gt.z>d)continue;if(Vt.z>d){const v=Vt.z-Gt.z,S=(Vt.z-d)/v;Vt.lerp(Gt,S)}else if(Gt.z>d){const v=Gt.z-Vt.z,S=(Gt.z-d)/v;Gt.lerp(Vt,S)}Vt.applyMatrix4(i),Gt.applyMatrix4(i),Vt.multiplyScalar(1/Vt.w),Gt.multiplyScalar(1/Gt.w),Vt.x*=s.x/2,Vt.y*=s.y/2,Gt.x*=s.x/2,Gt.y*=s.y/2,Xt.start.copy(Vt),Xt.start.z=0,Xt.end.copy(Gt),Xt.end.z=0;const x=Xt.closestPointToPointParameter(rh,!0);Xt.at(x,e0);const m=Ci.lerp(Vt.z,Gt.z,x),h=m>=-1&&m<=1,g=rh.distanceTo(e0)<$r*.5;if(h&&g){Xt.start.fromBufferAttribute(l,f),Xt.end.fromBufferAttribute(c,f),Xt.start.applyMatrix4(o),Xt.end.applyMatrix4(o);const v=new L,S=new L;mi.distanceSqToSegment(Xt.start,Xt.end,S,v),n.push({point:S,pointOnLine:v,distance:mi.origin.distanceTo(S),object:t,face:null,faceIndex:f,uv:null,uv1:null})}}}class S2 extends Je{constructor(e=new lx,n=new cp({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)Qg.fromBufferAttribute(n,o),Jg.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Qg.distanceTo(Jg);const s=new Yd(r,2,1);return e.setAttribute("instanceDistanceStart",new ar(s,1,0)),e.setAttribute("instanceDistanceEnd",new ar(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;mi=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;$r=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),El.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=$r*.5;else{const d=Math.max(r.near,El.distanceToPoint(mi.origin));c=t0(r,d,l.resolution)}if(El.radius+=c,mi.intersectsSphere(El)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ml.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=$r*.5;else{const d=Math.max(r.near,Ml.distanceToPoint(mi.origin));u=t0(r,d,l.resolution)}Ml.expandByScalar(u),mi.intersectsBox(Ml)!==!1&&(i?x2(this,n):y2(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(ih),this.material.uniforms.resolution.value.set(ih.z,ih.w))}}class cx extends lx{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}}class M2 extends S2{constructor(e=new cx,n=new cp({color:Math.random()*16777215})){super(e,n),this.isLine2=!0,this.type="Line2"}}function E2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const lt=60,fn={x:-46,z:46},Bn={x:46,z:-46},Fr=8,$d=3.4,Ea=2;function fa(t,e,n){const i=e-t.x,r=n-t.z;if(t.shape==="circle")return Math.max(0,Math.hypot(i,r)-t.r);const s=Math.cos(t.rot),o=Math.sin(t.rot),a=s*i-o*r,l=o*i+s*r,c=Math.max(0,Math.abs(a)-t.hw),u=Math.max(0,Math.abs(l)-t.hd);return Math.hypot(c,u)}function T2(t,e,n){const i=Math.min(Math.max(e.y,0),t.h);if(t.shape==="circle"){const u=e.x-t.x,d=e.z-t.z,f=Math.hypot(u,d)||1,p=Math.min(1,t.r/f);return n.set(t.x+u*p,i,t.z+d*p)}const r=Math.cos(t.rot),s=Math.sin(t.rot),o=e.x-t.x,a=e.z-t.z,l=Ci.clamp(r*o-s*a,-t.hw,t.hw),c=Ci.clamp(s*o+r*a,-t.hd,t.hd);return n.set(t.x+r*l+s*c,i,t.z-s*l+r*c)}function oh(t,e){const n=fa(t,e.x,e.z),i=Math.max(0,e.y-t.h);return Math.hypot(n,i)}function w2(t){return t.shape==="circle"?t.r:Math.hypot(t.hw,t.hd)}function Qi(t,e,n,i,r,s=1,o=1,a=1){const l=new ot().compose(new L(e,n,i),new Sr().setFromAxisAngle(new L(0,1,0),r),new L(s,o,a));return t.applyMatrix4(l),t.computeVertexNormals(),t}function n0(t,e,n,i,r,s){const a={id:`OB-${String(s+1).padStart(2,"0")}`,kind:t,x:e,z:n,rot:i,hw:0,hd:0,r:0,h:0,parts:[]},l=(c,u)=>c+(u-c)*r();switch(t){case"BLOCK":{const c=l(6,12),u=l(6,12),d=l(5,13);return{...a,shape:"rect",hw:c/2,hd:u/2,h:d,parts:[Qi(new gn(c,d,u),e,d/2,n,i)]}}case"TOWER":{const c=l(5,8),u=l(5,8),d=l(12,20),f=l(3,7);return{...a,shape:"rect",hw:c/2,hd:u/2,h:d+f,parts:[Qi(new gn(c,d,u),e,d/2,n,i),Qi(new gn(c*.6,f,u*.6),e,d+f/2,n,i)]}}case"WALL":{const c=l(18,26),u=1.2,d=l(6,10);return{...a,shape:"rect",hw:c/2,hd:u/2,h:d,parts:[Qi(new gn(c,d,u),e,d/2,n,i)]}}case"PILLAR":{const c=l(.9,1.6),u=l(9,18);return{...a,shape:"circle",r:c,h:u,parts:[Qi(new ho(c,c,u,16,1),e,u/2,n,0)]}}case"TANK":{const c=l(3,5.2),u=l(5,9);return{...a,shape:"circle",r:c,h:u,parts:[Qi(new ho(c,c,u,28,1),e,u/2,n,0)]}}case"SPHERE":{const c=l(2.6,4.6);return{...a,shape:"circle",r:c,h:2*c,parts:[Qi(new Ma(c,24,16),e,c,n,0)]}}case"ROCK":{const c=l(2.5,4.5),u=l(.9,1.6),d=new sp(c,1),f=d.attributes.position,p=new Map;for(let m=0;m<f.count;m++){const h=`${f.getX(m).toFixed(3)},${f.getY(m).toFixed(3)},${f.getZ(m).toFixed(3)}`;let g=p.get(h);g===void 0&&(g=.75+r()*.45,p.set(h,g)),f.setXYZ(m,f.getX(m)*g,f.getY(m)*g,f.getZ(m)*g)}Qi(d,e,c*u*.45,n,i,1,u,1),d.computeBoundingBox();const _=d.boundingBox,x=Math.max(_.max.x-e,e-_.min.x,_.max.z-n,n-_.min.z);return{...a,shape:"circle",r:x,h:_.max.y,parts:[d]}}}}function A2(t,e,n,i,r){const o=(t.index?t.toNonIndexed():t).attributes.position,a=[],l=[];let c=0;const u=new L,d=new L,f=new L;for(let x=0;x<o.count;x+=3){const m=new L().fromBufferAttribute(o,x),h=new L().fromBufferAttribute(o,x+1),g=new L().fromBufferAttribute(o,x+2);u.subVectors(h,m),d.subVectors(g,m),f.crossVectors(u,d);const v=f.length()/2;v<1e-6||(f.normalize(),!(f.y<-.85)&&(a.push({a:m,b:h,c:g,ny:f.y}),c+=v,l.push(c)))}const p=Math.min(i,Math.round(c*n)),_=new L;for(let x=0;x<p;x++){const m=e()*c;let h=0,g=l.length-1;for(;h<g;){const M=h+g>>1;l[M]<m?h=M+1:g=M}const v=a[h];let S=e(),P=e();S+P>1&&(S=1-S,P=1-P),_.copy(v.a).addScaledVector(u.subVectors(v.b,v.a),S).addScaledVector(d.subVectors(v.c,v.a),P);let R=_.y;Math.abs(v.ny)<.75&&(R=Math.round(R/.55)*.55),!(R<.05)&&r.push(_.x+(e()-.5)*.06,R,_.z+(e()-.5)*.06,1)}}function R2(t){const e=E2(t),n=[],i=["BLOCK","BLOCK","TOWER","TOWER","PILLAR","PILLAR","TANK","SPHERE","ROCK","ROCK"],r=[[-14,14],[16,-16]];for(const[u,d]of r){const f=(e()-.5)*18,p=u+f*Math.SQRT1_2,_=d+f*Math.SQRT1_2;n.push(n0("WALL",p,_,-Math.PI/4+(e()-.5)*.5,e,n.length))}let s=0;for(;n.length<28&&s<3e3;){s++;const u=i[Math.floor(e()*i.length)],d=(e()*2-1)*52,f=(e()*2-1)*52;if(Math.hypot(d-fn.x,f-fn.z)<14||Math.hypot(d-Bn.x,f-Bn.z)<14)continue;const p=n0(u,d,f,e()*Math.PI,e,n.length),_=w2(p);if(Math.abs(d)+_>56||Math.abs(f)+_>56)continue;let x=!0;for(const m of n)if(fa(m,d,f)-_<7.5){x=!1;break}x&&n.push(p)}const o=[];for(const u of n)for(const d of u.parts)A2(d,e,1.7,2600,o);for(let u=-lt;u<=lt;u+=1.7)for(let d=-lt;d<=lt;d+=1.7)o.push(u+(e()-.5)*1.1,.02,d+(e()-.5)*1.1,.32);const a=o.length/4,l=new Float32Array(a*3),c=new Float32Array(a);for(let u=0;u<a;u++)l[u*3]=o[u*4],l[u*3+1]=o[u*4+1],l[u*3+2]=o[u*4+2],c[u]=o[u*4+3];return{seed:t,obstacles:n,cloud:{positions:l,intensity:c,count:a}}}const _t=Math.ceil(lt*2/Ea),Tl=t=>Math.min(_t-1,Math.max(0,Math.floor((t+lt)/Ea))),wl=t=>-lt+(t+.5)*Ea;function ux(t,e,n,i){if(Math.abs(e)>lt-2||Math.abs(n)>lt-2)return!0;for(const r of t)if(fa(r,e,n)<i)return!0;return!1}function C2(t,e,n,i,r,s){const o=Math.hypot(i-e,r-n),a=Math.max(1,Math.ceil(o/.5));for(let l=0;l<=a;l++){const c=l/a;if(ux(t,e+(i-e)*c,n+(r-n)*c,s))return!1}return!0}function ah(t,e,n,i,r){const s=new Uint8Array(_t*_t);for(let M=0;M<_t;M++)for(let C=0;C<_t;C++)s[M*_t+C]=ux(t,wl(M),wl(C),$d)?1:0;const o=Tl(e),a=Tl(n),l=Tl(i),c=Tl(r);s[l*_t+c]=0;const u=new Float32Array(_t*_t).fill(1/0),d=new Int32Array(_t*_t).fill(-1),f=new Uint8Array(_t*_t),p=[],_=(M,C)=>{p.push([M,C]);let U=p.length-1;for(;U>0;){const y=U-1>>1;if(p[y][0]<=p[U][0])break;[p[y],p[U]]=[p[U],p[y]],U=y}},x=()=>{const M=p[0],C=p.pop();if(p.length){p[0]=C;let U=0;for(;;){const y=2*U+1,T=y+1;let k=U;if(y<p.length&&p[y][0]<p[k][0]&&(k=y),T<p.length&&p[T][0]<p[k][0]&&(k=T),k===U)break;[p[k],p[U]]=[p[U],p[k]],U=k}}return M},m=(M,C)=>{const U=Math.abs(M-l),y=Math.abs(C-c);return Math.max(U,y)+(Math.SQRT2-1)*Math.min(U,y)},h=o*_t+a,g=l*_t+c;u[h]=0,_(m(o,a),h);let v=0;for(;p.length;){const[,M]=x();if(f[M])continue;if(f[M]=1,v++,M===g)break;const C=Math.floor(M/_t),U=M%_t,y=s[M];for(let T=-1;T<=1;T++)for(let k=-1;k<=1;k++){if(!T&&!k)continue;const z=C+T,$=U+k;if(z<0||$<0||z>=_t||$>=_t)continue;const q=z*_t+$;if(s[q]&&!y||T&&k&&!y&&(s[C*_t+$]||s[z*_t+U]))continue;const G=u[M]+(T&&k?Math.SQRT2:1)+(s[q]?20:0);G<u[q]&&(u[q]=G,d[q]=M,_(G+m(z,$),q))}}if(!f[g])return null;const S=[];for(let M=g;M!==-1;M=d[M])S.push({x:wl(Math.floor(M/_t)),z:wl(M%_t)});S.reverse(),S[0]={x:e,z:n},S[S.length-1]={x:i,z:r};const P=[S[0]];let R=0;for(;R<S.length-1;){let M=S.length-1;for(;M>R+1&&!C2(t,S[R].x,S[R].z,S[M].x,S[M].z,$d-.4);)M--;P.push(S[M]),R=M}return{points:P,expanded:v}}const pa=["COUNTDOWN","TAKEOFF","AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED","LANDING"],i0={INITIALIZE:{from:["WELCOME"],to:"INITIALIZING",by:"user"},INIT_COMPLETE:{from:["INITIALIZING"],to:"READY",by:"auto"},CONTINUE:{from:["READY"],to:"BRIEFING",by:"user"},PROCEED:{from:["BRIEFING"],to:"STANDBY",by:"user"},START:{from:["STANDBY"],to:"COUNTDOWN",by:"user"},COUNTDOWN_ELAPSED:{from:["COUNTDOWN"],to:"TAKEOFF",by:"auto"},CRUISE_REACHED:{from:["TAKEOFF"],to:"MANUAL_HOLD",by:"auto"},HOLD:{from:["AUTONOMOUS_TRANSIT","ROUTE_BLOCKED"],to:"MANUAL_HOLD",by:"user"},DENY_HOLD:{from:["TAKEOFF","AUTONOMOUS_TRANSIT","ROUTE_BLOCKED","LANDING","PAUSED"],to:"MANUAL_HOLD",by:"auto"},RESUME_AUTONOMY:{from:["MANUAL_HOLD"],to:"AUTONOMOUS_TRANSIT",by:"user"},BLOCK:{from:["AUTONOMOUS_TRANSIT","MANUAL_HOLD"],to:"ROUTE_BLOCKED",by:"auto"},REROUTE:{from:["ROUTE_BLOCKED"],to:"AUTONOMOUS_TRANSIT",by:"user"},ROUTE_COMPLETE:{from:["AUTONOMOUS_TRANSIT"],to:"LANDING",by:"auto"},TOUCHDOWN:{from:["LANDING"],to:"COMPLETE",by:"auto"},PAUSE:{from:pa,to:"PAUSED",by:"user"},RESUME:{from:["PAUSED"],to:"PREVIOUS",by:"user"},RESET:{from:[...pa,"PAUSED","COMPLETE"],to:"STANDBY",by:"user"}},b2={START:["STANDBY"],PAUSE:pa,RESUME:["PAUSED"],HOLD:["AUTONOMOUS_TRANSIT","ROUTE_BLOCKED"],RESUME_AUTO:["MANUAL_HOLD"],RECALCULATE:["STANDBY","AUTONOMOUS_TRANSIT","ROUTE_BLOCKED"],NEW_ENV:["STANDBY"],RESET:[...pa,"PAUSED","COMPLETE"],RESTRICTED_CMD:["TAKEOFF","AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED","LANDING","PAUSED"]},P2=["STANDBY",...pa,"PAUSED","COMPLETE"],L2=["FORWARD","BACKWARD","LEFT","RIGHT","YAW LEFT","YAW RIGHT","ASCEND","DESCEND"],N2=["TAKEOFF","AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED","LANDING"],Vn=28,Ec=10,bi=7,up=6,r0=2.5,hx=20,s0=2,D2=2.9,I2=8,U2=1.5,O2=1.4,lh=1/120,hp=6,dx=.35,fx=.55,F2=dx+hp*fx+.25,ch=hp,Al=60,px=240;function k2(t,e){const n=e*px,i=[];for(let s=0;s<=n;s++)i.push(t.getPoint(s/n));const r=new Float64Array(n+1);for(let s=1;s<=n;s++)r[s]=r[s-1]+i[s].distanceTo(i[s-1]);return{samples:i,cum:r}}function z2(t,e){const n=[["centripetal",.5],["catmullrom",.35],["catmullrom",.15],["catmullrom",0]],i=Math.min(...e.map(o=>fa(o,t[0].x,t[0].z))),r=Math.min(D2,i-.05);let s=null;for(const[o,a]of n){const l=new $R(t,!1,o,a);l.arcLengthDivisions=800;const c=k2(l,t.length-1);let u=1/0;for(let d=0;d<c.samples.length;d+=2){const f=c.samples[d];for(const p of e)u=Math.min(u,fa(p,f.x,f.z))}if((!s||u>s.min)&&(s={curve:l,min:u,...c}),u>=r)return{curve:l,min:u,...c}}return s}class B2{constructor(e=2205){this.worldVersion=0,this.routeIds=0,this.basePlan=[],this.baseExpanded=0,this.state="WELCOME",this.resumeTo=null,this.initT=0,this.countdown=0,this.pos=new L,this.vel=new L,this.acc=new L,this.heading=0,this.speed=0,this.s=0,this.routeFlown=0,this.traveled=0,this.missionTime=0,this.holdTime=0,this.minClearance=1/0,this.currentWp=1,this.yawRate=0,this.deniedCount=0,this.blocked=null,this.inRange=[],this.detected=new Set,this.warned=new Set,this.pointsInRange=0,this.pointsMapped=0,this.scans=0,this.lidarVersion=0,this.scanAcc=0,this.log=[],this.logId=0,this.listeners=new Set,this.frames=new Set,this.raf=0,this.last=0,this.accT=0,this.animTime=0,this.steps=0,this.load(e,!0)}get waypoints(){return this.route.waypoints}get curve(){return this.route.curve}get planLength(){return this.route.length}get wpArc(){return this.route.wpArc}get planVersion(){return this.route.id}start(){if(this.raf)return;this.last=performance.now();const e=n=>{this.raf=requestAnimationFrame(e);const i=Math.min(.25,Math.max(0,(n-this.last)/1e3));this.last=n,this.advance(i),this.state!=="PAUSED"&&this.state!=="MANUAL_HOLD"&&(this.animTime+=i),this.frames.forEach(r=>r(i,this.animTime))};this.raf=requestAnimationFrame(e)}stop(){cancelAnimationFrame(this.raf),this.raf=0}get running(){return this.raf!==0}advance(e){for(this.accT+=e;this.accT>=lh;)this.step(lh),this.accT-=lh}onFrame(e){return this.frames.add(e),()=>{this.frames.delete(e)}}on(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}emit(e,n){this.listeners.forEach(i=>i({type:e,level:n}))}addLog(e,n){const i=new Date().toTimeString().slice(0,8);this.log.unshift({id:++this.logId,t:i,level:e,msg:n}),this.log.length>120&&this.log.pop(),this.emit("log",e)}allowed(e){return b2[e].includes(this.state)}can(e){return i0[e].from.includes(this.state)}dispatch(e){var s;const n=i0[e];if(!n.from.includes(this.state))return!1;const i=this.state,r=n.to==="PREVIOUS"?this.resumeTo??"STANDBY":n.to;switch(e){case"INITIALIZE":this.initT=0;break;case"START":this.countdown=5,this.addLog("info","Mission start · T−5 countdown");break;case"COUNTDOWN_ELAPSED":this.addLog("ok",`Liftoff · climbing to ${this.route.cruiseAlt.toFixed(1)} m AGL`);break;case"CRUISE_REACHED":this.pos.y=this.waypoints[0].y,this.stopAt(this.pos),this.blocked=null,this.holdTime=0,this.scan(),this.addLog("ok",`Takeoff complete at ${this.pos.y.toFixed(1)} m AGL · position hold engaged`);break;case"HOLD":this.stopAt(this.pos),this.blocked=null,this.holdTime=0,this.scan(),this.addLog("warn","Manual hold · aircraft stationary · press RESUME AUTO to continue");break;case"DENY_HOLD":this.stopAt(this.pos),this.blocked=null,this.resumeTo=null,this.holdTime=0,this.addLog("alert","Manual hold enforced · aircraft frozen · press RESUME AUTO to continue");break;case"RESUME_AUTONOMY":if(!this.replanFromHere())return this.setBlocked(null,"No feasible route from the current position"),this.dispatch("BLOCK");this.addLog("ok",`Autonomy resumed on route R${this.route.rev}`);break;case"BLOCK":this.stopAt(this.pos),this.holdTime=0,this.scan(),this.addLog("alert",`Route blocked · ${((s=this.blocked)==null?void 0:s.reason)??"unknown"} · RECALCULATE to recover`);break;case"REROUTE":this.blocked=null,this.addLog("ok",`Recovered · autonomous tracking on route R${this.route.rev}`);break;case"ROUTE_COMPLETE":this.addLog("ok","Route complete · autonomous descent");break;case"TOUCHDOWN":this.addLog("ok",`Touchdown · mission complete · ${this.traveled.toFixed(1)} m flown`);break;case"PAUSE":this.resumeTo=i,this.vel.set(0,0,0),this.acc.set(0,0,0),this.addLog("warn","Paused · simulation frozen");break;case"RESUME":this.resumeTo=null,this.addLog("info","Resumed");break;case"RESET":this.resetFlight();break}return this.state=r,this.emit("state"),e==="COUNTDOWN_ELAPSED"&&this.emit("liftoff"),e==="TOUCHDOWN"&&this.emit("complete"),e==="START"&&this.emit("countdown"),e==="BLOCK"&&this.emit("blocked"),e==="RESET"&&this.emit("reset"),(e==="DENY_HOLD"||e==="HOLD"||e==="CRUISE_REACHED")&&this.emit("hold"),!0}stopAt(e){this.speed=0,this.vel.set(0,0,0),this.acc.set(0,0,0),this.yawRate=0}setBlocked(e,n,i=null){var s;const r=e??((s=this.inRange[0])==null?void 0:s.o)??null;this.blocked={id:(r==null?void 0:r.id)??null,kind:(r==null?void 0:r.kind)??null,dist:i??(r?oh(r,this.pos):null),reason:n}}load(e,n=!1){for(let i=0;i<12;i++){const r=R2(e+i),s=ah(r.obstacles,fn.x,fn.z,Bn.x,Bn.z);if(s){this.world=r,this.mapped=new Uint8Array(r.cloud.count),this.inRangeMask=new Uint8Array(r.cloud.count),this.basePlan=s.points,this.baseExpanded=s.expanded,this.worldVersion++,this.resetFlight(),n||this.emit("reset");return}}throw new Error("Unable to generate a plannable environment")}newEnvironment(e=1e3+Math.floor(Math.random()*9e3)){return this.allowed("NEW_ENV")?(this.load(e),this.emit("state"),!0):!1}setRoute(e,n,i,r,s,o){const a=e.map((_,x)=>new L(_.x,x===0?i:r,_.z)),{curve:l,min:c,samples:u,cum:d}=z2(a,this.world.obstacles),f=a.length,p=a.map((_,x)=>d[x*px]);this.route={id:++this.routeIds,rev:o,origin:s,waypoints:a,curve:l,length:d[d.length-1],wpArc:p,samples:u,cum:d,cruiseAlt:r,minClearance:c,expanded:n},this.s=0,this.currentWp=Math.min(1,f-1)}recalculate(){if(!this.allowed("RECALCULATE"))return!1;if(this.state==="STANDBY"){const n=ah(this.world.obstacles,fn.x,fn.z,Bn.x,Bn.z);return n?(this.setRoute(n.points,n.expanded,Fr,Fr,"RECALCULATED",this.route.rev+1),this.addLog("ok",`Route R${this.route.rev} · ${this.waypoints.length-1} waypoints · ${this.planLength.toFixed(1)} m`),this.emit("route"),!0):!1}const e=this.waypoints.length-1;return this.replanFromHere()?(this.addLog("ok",`Route R${this.route.rev} replaces previous route (${e} → ${this.waypoints.length-1} waypoints)`),this.state==="ROUTE_BLOCKED"&&this.dispatch("REROUTE"),this.emit("route"),!0):(this.state==="AUTONOMOUS_TRANSIT"?(this.setBlocked(null,"No feasible route from the current position"),this.dispatch("BLOCK")):this.addLog("alert","Recalculation failed · still blocked · HOLD to reposition manually"),!1)}replanFromHere(){const e=ah(this.world.obstacles,this.pos.x,this.pos.z,Bn.x,Bn.z);if(!e)return!1;const n=Ci.clamp(this.pos.y,Fr,hx),i=this.state==="AUTONOMOUS_TRANSIT"?this.speed:0;return this.setRoute(e.points,e.expanded,this.pos.y,n,"RECALCULATED",this.route.rev+1),this.speed=i,!0}resetFlight(){this.setRoute(this.basePlan,this.baseExpanded,Fr,Fr,"INITIAL",1),this.resumeTo=null,this.countdown=0,this.pos.set(fn.x,0,fn.z),this.vel.set(0,0,0),this.acc.set(0,0,0),this.speed=0,this.routeFlown=0,this.traveled=0,this.missionTime=0,this.holdTime=0,this.minClearance=1/0,this.blocked=null;const e=this.waypoints[1];this.heading=uh(Math.atan2(e.x-fn.x,-(e.z-fn.z))),this.yawRate=0,this.deniedCount=0,this.inRange=[],this.detected.clear(),this.warned.clear(),this.mapped.fill(0),this.inRangeMask.fill(0),this.pointsInRange=0,this.pointsMapped=0,this.scans=0,this.scanAcc=0,this.accT=0,this.log=[];const n=this.world;this.addLog("ok",`Environment ready · seed ${n.seed} · ${n.obstacles.length} obstacles · ${n.cloud.count.toLocaleString()} LiDAR points`),this.addLog("info",`Route R1 · ${this.waypoints.length-1} waypoints · ${this.planLength.toFixed(1)} m · cruise ${Fr.toFixed(1)} m`),this.updatePerception(!1),this.scan()}restrictedAvailable(){return this.allowed("RESTRICTED_CMD")?this.state!=="PAUSED"||N2.includes(this.resumeTo??"STANDBY"):!1}handleRestrictedFlightCommand(e){const n=L2.includes(e);return this.restrictedAvailable()&&this.state!=="MANUAL_HOLD"&&this.dispatch("DENY_HOLD"),this.state==="MANUAL_HOLD"&&this.stopAt(this.pos),this.deniedCount++,this.addLog("alert",`COMMAND DENIED · ${n?e:"UNKNOWN"} · control authorization failure · manual flight commands are restricted`),this.emit("denied"),{denied:!0,state:this.state,known:n}}step(e){this.steps++;const n=this.state;if(n==="INITIALIZING"){this.initT+=e,this.initT>=F2&&this.dispatch("INIT_COMPLETE");return}if(n==="COUNTDOWN"){const o=Math.ceil(this.countdown);this.countdown=Math.max(0,this.countdown-e),Math.ceil(this.countdown)!==o&&this.countdown>0&&this.emit("tick"),this.countdown<=0&&this.dispatch("COUNTDOWN_ELAPSED");return}if(n==="MANUAL_HOLD"){this.holdTime+=e,Math.floor(this.holdTime/Al)!==Math.floor((this.holdTime-e)/Al)&&this.addLog("info",`Position hold · ${Math.round(this.holdTime)} s · aircraft stationary`);return}if(n!=="TAKEOFF"&&n!=="AUTONOMOUS_TRANSIT"&&n!=="ROUTE_BLOCKED"&&n!=="LANDING")return;const i=this.pos.clone(),r=this.vel.clone(),s=this.heading;if(this.missionTime+=e,n==="TAKEOFF"){const o=this.waypoints[0].y,a=Math.min(r0,Math.max(.4,(o-this.pos.y)*1.2));this.pos.y=Math.min(o,this.pos.y+a*e)}else if(n==="AUTONOMOUS_TRANSIT"){const o=this.planLength,a=o-this.s,l=Math.sqrt(2*O2*Math.max(0,a))+.3,c=Math.min(up,l);this.speed+=Ci.clamp(c-this.speed,-3*e,U2*e);const u=Math.min(this.speed*e,o-this.s);this.s+=u,this.routeFlown+=u;const d=this.pathPoint(this.s,this.pos);for(this.turnTowards(Math.atan2(d.x,-d.z),e,3);this.currentWp<this.waypoints.length-1&&this.s>=this.wpArc[this.currentWp];)this.addLog("ok",`${dp(this.currentWp,this.waypoints.length)} reached`),this.currentWp++}else if(n==="LANDING"){const o=Math.min(r0,Math.max(.4,this.pos.y*.6));this.pos.y=Math.max(0,this.pos.y-o*e)}if(n==="ROUTE_BLOCKED"&&(this.holdTime+=e,Math.floor(this.holdTime/Al)!==Math.floor((this.holdTime-e)/Al)&&this.addLog("warn",`Blocked ${Math.round(this.holdTime)} s · press RECALCULATE to recover`)),this.vel.copy(this.pos).sub(i).divideScalar(e),this.acc.copy(this.vel).sub(r).divideScalar(e),this.yawRate=o0(this.heading,s)/e,this.traveled+=this.pos.distanceTo(i),this.updatePerception(),this.scanAcc+=e,this.scanAcc>=1/Ec&&(this.scanAcc-=1/Ec,this.scan()),n==="TAKEOFF"&&this.pos.y>=this.waypoints[0].y-1e-6)this.dispatch("CRUISE_REACHED");else if(n==="AUTONOMOUS_TRANSIT")if(this.s>=this.planLength-1e-6)this.currentWp=this.waypoints.length-1,this.speed=0,this.dispatch("ROUTE_COMPLETE");else{const o=this.lookAhead();o&&(this.setBlocked(o.o,`${o.o.id} (${o.o.kind}) within ${s0} m of route ahead`,o.d),this.dispatch("BLOCK"))}else n==="LANDING"&&this.pos.y<=0&&(this.vel.set(0,0,0),this.dispatch("TOUCHDOWN"))}pathIndexAt(e){const{cum:n}=this.route;let i=0,r=n.length-1;if(e>=n[r])return r;for(;r-i>1;){const s=i+r>>1;n[s]<=e?i=s:r=s}return i}pathPoint(e,n){const{cum:i,samples:r}=this.route,s=i.length-1,o=Math.max(0,Math.min(i[s],e));let a=0,l=s;for(;l-a>1;){const d=a+l>>1;i[d]<=o?a=d:l=d}const c=i[l]-i[a],u=c>1e-12?(o-i[a])/c:0;return n.lerpVectors(r[a],r[l],u),new L().subVectors(r[l],r[a]).normalize()}lookAhead(){const e=this.planLength,n=new L;for(let i=1;i<=I2;i+=1){const r=Math.min(e,this.s+i);this.pathPoint(r,n);for(const s of this.world.obstacles){const o=oh(s,n);if(o<s0)return{o:s,d:o}}if(r>=e)break}return null}turnTowards(e,n,i,r=Math.PI){const s=o0(e,this.heading),o=Ci.clamp(s*(1-Math.exp(-n*i)),-r*n,r*n);this.heading=Math.abs(s)<1e-4?uh(e):uh(this.heading+o)}updatePerception(e=!0){this.inRange=[];const n=this.state!=="TAKEOFF"&&this.state!=="LANDING"&&this.pos.y>1;for(const i of this.world.obstacles){const r=oh(i,this.pos);n&&(this.minClearance=Math.min(this.minClearance,r)),!(r>=Vn)&&(this.inRange.push({o:i,d:r}),e&&(this.detected.has(i.id)||(this.detected.add(i.id),this.addLog("info",`${i.id} (${i.kind}) detected at ${r.toFixed(1)} m`)),r<bi&&!this.warned.has(i.id)&&(this.warned.add(i.id),this.addLog("warn",`Proximity advisory · ${i.id} at ${r.toFixed(1)} m`),this.emit("proximity"))))}this.inRange.sort((i,r)=>i.d-r.d)}scan(){const{positions:e,count:n}=this.world.cloud,i=this.pos,r=Vn*Vn;let s=0,o=0;for(let a=0;a<n;a++){const l=e[a*3]-i.x,c=e[a*3+1]-i.y,u=e[a*3+2]-i.z,d=l*l+c*c+u*u<r?1:0;this.inRangeMask[a]=d,d&&(s++,this.mapped[a]=1),o+=this.mapped[a]}this.pointsInRange=s,this.pointsMapped=o,this.scans++,this.lidarVersion++}get effectiveState(){return this.state==="PAUSED"?this.resumeTo??"STANDBY":this.state}remainingDistance(){const e=this.effectiveState;if(e==="LANDING"||e==="COMPLETE")return 0;const n=new L;this.pathPoint(this.s,n);const i=e==="MANUAL_HOLD"||e==="ROUTE_BLOCKED"?n.distanceTo(this.pos):0;return Math.max(0,this.planLength-this.s)+i}snapshot(){const e=this.effectiveState,n=this.remainingDistance(),i=e==="LANDING"||e==="COMPLETE"?1:this.routeFlown+n>0?this.routeFlown/(this.routeFlown+n):0,r=this.inRange[0],s=this.state==="PAUSED",o=["TAKEOFF","AUTONOMOUS_TRANSIT","LANDING"].includes(this.state),a=s?"FROZEN":o?"SCANNING":this.state==="MANUAL_HOLD"?"HOLD":this.state==="ROUTE_BLOCKED"?"STATIONARY":"IDLE",l=this.route;return{state:this.state,resumeTo:this.resumeTo,initStep:Math.max(0,Math.min(hp+1,Math.floor((this.initT-dx)/fx)+1)),countdown:this.countdown,seed:this.world.seed,pos:{x:this.pos.x,y:-this.pos.z,z:this.pos.y},groundSpeed:Math.hypot(this.vel.x,this.vel.z),vz:this.vel.y,yawRate:Ci.radToDeg(this.yawRate),accel:this.acc.length(),heading:Math.round(Ci.radToDeg(this.heading))%360,progress:i,routeFlown:this.routeFlown,remaining:n,planLength:l.length,traveled:this.traveled,route:{id:l.id,rev:l.rev,origin:l.origin,waypointCount:l.waypoints.length-1,cruiseAlt:l.cruiseAlt,minClearance:l.minClearance},waypointCount:l.waypoints.length-1,currentWp:this.currentWp,obstacleCount:this.world.obstacles.length,obstaclesInRange:this.inRange.length,nearest:r?{id:r.o.id,kind:r.o.kind,dist:r.d}:null,minClearance:this.minClearance,pointsInRange:this.pointsInRange,pointsMapped:this.pointsMapped,totalPoints:this.world.cloud.count,scans:this.scans,sensor:a,missionTime:this.missionTime,holdTime:this.holdTime,blocked:this.blocked,deniedCount:this.deniedCount}}}function uh(t){const e=Math.PI*2;return(t%e+e)%e}function o0(t,e){const n=t-e;return Math.atan2(Math.sin(n),Math.cos(n))}function dp(t,e){return t>=e-1?"TGT":`WP-${String(t).padStart(2,"0")}`}const Lo={cyan:new Be("#38d6f5"),amber:new Be("#fbbf24"),red:new Be("#f87171")},H2={BLOCK:{fill:"#1b2b40",edge:"#5aa9e6"},TOWER:{fill:"#1b2b40",edge:"#5aa9e6"},WALL:{fill:"#2a2640",edge:"#9d8cf0"},PILLAR:{fill:"#163338",edge:"#4fd1c5"},TANK:{fill:"#163338",edge:"#4fd1c5"},SPHERE:{fill:"#2b2a33",edge:"#a3b1c6"},ROCK:{fill:"#2b2a33",edge:"#a3b1c6"}};function No(t,e="tag"){const n=document.createElement("div");return n.className=e,n.textContent=t,new ax(n)}function V2(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.85)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const i=new XR(t);return i.colorSpace=ni,i}function G2(){const t=new zn,e=new Xd({color:"#d7e1ec",metalness:.35,roughness:.35}),n=new Xd({color:"#202a36",metalness:.6,roughness:.4}),i=new Jt({color:"#38d6f5"});t.add(new Je(new gn(.8,.26,1.25),e));const r=new Je(new gn(.55,.14,.8),n);r.position.set(0,.2,.05),t.add(r);const s=new Je(new ho(.16,.16,.14,20),n);s.position.set(0,.34,.05),t.add(s);const o=new Je(new ap(.16,.025,6,24),i);o.rotation.x=Math.PI/2,o.position.set(0,.34,.05),t.add(o);const a=new Je(new gn(.46,.06,.05),i);a.position.set(0,.02,-.64),t.add(a);const l=[],c=[],u=new Jt({color:"#9fdcff",transparent:!0,opacity:0,side:an,depthWrite:!1});for(const[d,f]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const p=new Je(new gn(.1,.07,1.3),n);p.position.set(d*.46,0,f*.46),p.rotation.y=Math.atan2(d,f),t.add(p);const _=new Je(new ho(.12,.12,.2,14),n);_.position.set(d*.92,.06,f*.92),t.add(_);const x=new zn;x.position.set(d*.92,.19,f*.92),x.add(new Je(new gn(1,.015,.09),e)),t.add(x),l.push(x);const m=new Je(new qs(.52,28),u);m.rotation.x=-Math.PI/2,m.position.set(d*.92,.2,f*.92),t.add(m);const h=new Je(new Ma(.06,10,8),new Jt({color:f<0?"#34d399":"#f87171"}));h.position.set(d*.92,-.06,f*.92),t.add(h),c.push(h)}return t.scale.setScalar(2.6),{group:t,props:l,discMat:u,strobes:c}}function W2(t){const e=[];if(t.shape==="circle"){const n=t.r+.6;for(let i=0;i<=48;i++){const r=i/48*Math.PI*2;e.push(new L(t.x+Math.cos(r)*n,.06,t.z+Math.sin(r)*n))}}else{const n=Math.cos(t.rot),i=Math.sin(t.rot),r=t.hw+.6,s=t.hd+.6;for(const[o,a]of[[-r,-s],[r,-s],[r,s],[-r,s],[-r,-s]])e.push(new L(t.x+n*o+i*a,.06,t.z-i*o+n*a))}return new ht().setFromPoints(e)}const a0=new Set(["TAKEOFF","AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED","LANDING"]);function j2({engine:t,camMode:e,camResetToken:n}){const i=Ne.useRef(null),r=Ne.useRef(e);r.current=e;const s=Ne.useRef(()=>{});return Ne.useEffect(()=>{s.current()},[n,e]),Ne.useEffect(()=>{const o=i.current;let a;try{a=new HR({antialias:!0,powerPreference:"high-performance"})}catch{o.innerHTML='<div class="webgl-fail">WebGL is unavailable. Enable hardware acceleration in the browser to view the 3D environment.</div>';return}a.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),a.setClearColor("#070c14"),o.appendChild(a.domElement);const l=new v2;l.domElement.className="labels-layer",o.appendChild(l.domElement);const c=new VR;c.fog=new ip("#070c14",110,300);const u=new kn(48,1,.1,800),d=new s2(u,a.domElement);d.enableDamping=!0,d.dampingFactor=.08,d.maxPolarAngle=Math.PI*.48,d.minDistance=8,d.maxDistance=240,d.autoRotateSpeed=.5,d.addEventListener("start",()=>{d.autoRotate=!1}),c.add(new QR("#8fb7e0","#0b1220",1.1));const f=new Hg("#ffffff",1.4);f.position.set(40,90,30),c.add(f);const p=new Hg("#38d6f5",.35);p.position.set(-60,30,-60),c.add(p);const _=new Je(new uo(900,900),new Jt({color:"#0a111c"}));_.rotation.x=-Math.PI/2,_.position.y=-.05,c.add(_);const x=new Je(new uo(lt*2,lt*2),new Jt({color:"#0d1724"}));x.rotation.x=-Math.PI/2,x.position.y=-.03,c.add(x),c.add(new Wg(lt*2,60,"#1a3049","#142538"));const m=new Wg(lt*2,6,"#28507a","#28507a");m.position.y=.01,c.add(m),c.add(new WR(new ht().setFromPoints([[-1,-1],[1,-1],[1,1],[-1,1]].map(([H,K])=>new L(H*lt,.04,K*lt))),new Ri({color:"#38d6f5",transparent:!0,opacity:.4})));const h=(H,K,Y,ie)=>{const re=new zn,ce=new Je(new qs(3.4,48),new Jt({color:Y,transparent:!0,opacity:.08}));ce.rotation.x=-Math.PI/2,re.add(ce);const ue=new Je(new ks(3.25,3.45,64),new Jt({color:Y,transparent:!0,opacity:.9,side:an}));ue.rotation.x=-Math.PI/2,re.add(ue);const se=No(ie,"tag tag-pad");se.position.set(0,.3,4.8),re.add(se),re.position.set(H,.05,K),c.add(re)};h(fn.x,fn.z,"#34d399","LAUNCH"),h(Bn.x,Bn.z,"#fbbf24","TARGET");const g=G2();c.add(g.group);const v=No("","tag tag-drone");v.position.set(0,1.5,0),g.group.add(v);const S=new Je(new qs(1.8,32),new Jt({color:"#000000",transparent:!0,opacity:.45,depthWrite:!1}));S.rotation.x=-Math.PI/2,c.add(S);const P=new ht().setFromPoints([new L,new L]),R=new Br(P,new ZR({color:"#38d6f5",dashSize:.5,gapSize:.5,transparent:!0,opacity:.45}));R.frustumCulled=!1,c.add(R);const M=new Je(new ks(.97,1,128),new Jt({color:"#38d6f5",transparent:!0,opacity:.4,side:an,depthWrite:!1}));M.rotation.x=-Math.PI/2,c.add(M);const C=new Je(new ks(Vn-.2,Vn,160),new Jt({color:"#38d6f5",transparent:!0,opacity:.18,side:an,depthWrite:!1}));C.rotation.x=-Math.PI/2,c.add(C);const U=new Je(new qs(Vn,48,0,.5),new Jt({color:"#38d6f5",transparent:!0,opacity:.06,side:an,depthWrite:!1}));U.rotation.x=-Math.PI/2;const y=new zn;y.add(U),c.add(y);const T=6e3,k=new Float32Array(T*3),z=new ht;z.setAttribute("position",new Mn(k,3)),z.setDrawRange(0,0);const $=new Br(z,new Ri({color:"#a7f3d0",transparent:!0,opacity:.55}));$.frustumCulled=!1,c.add($);let q=0;const G=new L(1e9,0,0),J=()=>{q=0,z.setDrawRange(0,0),G.set(1e9,0,0)},I=Array.from({length:3},()=>{const H=new ht().setFromPoints([new L,new L]),K=new Br(H,new Ri({color:"#fbbf24",transparent:!0,opacity:.95}));K.frustumCulled=!1;const Y=No("","tag tag-dist"),ie=new Je(new Ma(.3,12,8),new Jt({color:"#fbbf24"}));return c.add(K,Y,ie),{line:K,geo:H,tag:Y,dot:ie}}),ee=V2();let Q=new zn,ae=new zn,Te=new Map,ke=null,Z=new Float32Array(0),j=[],ne=null;const he=[];let Re=-1,Ee=-1,ze=-1,We=1;const He=H=>{H.traverse(K=>{const Y=K;Y.geometry&&Y.geometry.dispose();const ie=Y.material;Array.isArray(ie)?ie.forEach(re=>re.dispose()):ie==null||ie.dispose(),K instanceof ax&&K.element.remove()}),H.removeFromParent()},N=()=>{He(Q),Q=new zn,Te=new Map;const H=t.world,K=new Map;for(const ie of H.obstacles){let re=K.get(ie.kind);if(!re){const se=H2[ie.kind];re={solid:new Xd({color:se.fill,metalness:.25,roughness:.7,transparent:!0,opacity:.82,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),edge:new Ri({color:se.edge,transparent:!0,opacity:.55})},K.set(ie.kind,re)}for(const se of ie.parts)Q.add(new Je(se,re.solid)),Q.add(new ix(new KR(se,25),re.edge));const ce=new Ri({color:"#38d6f5",transparent:!0,opacity:0}),ue=No(`${ie.id} · ${ie.kind}`,"tag tag-ob");ue.position.set(ie.x,ie.h+1.4,ie.z),ue.visible=!1,Q.add(new Br(W2(ie),ce),ue),Te.set(ie.id,{mat:ce,tag:ue})}const Y=new ht;Y.setAttribute("position",new Mn(H.cloud.positions,3)),Z=new Float32Array(H.cloud.count*3),Y.setAttribute("color",new Mn(Z,3)),ke=new jR(Y,new rx({size:.42,map:ee,alphaTest:.05,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0})),ke.frustumCulled=!1,Q.add(ke),c.add(Q),Re=t.worldVersion,ze=-1},zt=(H,K,Y,ie=1)=>{const re=new cx;re.setPositions(H.flatMap(ue=>[ue.x,ue.y,ue.z]));const ce=new cp({color:new Be(K).getHex(),linewidth:Y,transparent:ie<1,opacity:ie});return ce.resolution.set(o.clientWidth||1,o.clientHeight||1),he.push(ce),new M2(re,ce)},je=()=>{He(ae),he.length=0,ae=new zn,j=[];const H=t.route.samples;We=Math.max(1,Math.floor(H.length/700));const K=H.filter((ie,re)=>re%We===0||re===H.length-1);ae.add(zt(K,"#38d6f5",3,.95)),ne=zt(K.map(ie=>ie.clone().add(new L(0,.03,0))),"#34d399",4.5),ne.geometry.instanceCount=0,ae.add(ne),ae.add(zt(K.map(ie=>new L(ie.x,.08,ie.z)),"#38d6f5",1.5,.25));const Y=t.waypoints.length;t.waypoints.forEach((ie,re)=>{if(re===0)return;const ce=new Je(new op(.75),new Jt({color:"#38d6f5",wireframe:!0}));ce.position.copy(ie);const ue=new Je(new ks(1.1,1.35,40),new Jt({color:"#38d6f5",transparent:!0,opacity:.55,side:an}));ue.rotation.x=-Math.PI/2,ue.position.set(ie.x,.07,ie.z);const se=new Br(new ht().setFromPoints([new L(ie.x,0,ie.z),ie.clone()]),new Ri({color:"#38d6f5",transparent:!0,opacity:.35})),ge=No(dp(re,Y),"tag tag-wp");ge.position.set(ie.x,ie.y+1.8,ie.z),ae.add(ce,ue,se,ge),j.push({mesh:ce,ring:ue,tag:ge})}),c.add(ae),Ee=t.planVersion},Xe=()=>{const H=t.pos,K=r.current;if(d.autoRotate=!1,d.enableRotate=!0,K==="top")u.position.set(0,175,.01),d.target.set(0,0,0),d.enableRotate=!1;else if(K==="follow"){const Y=new L(-Math.sin(t.heading),0,Math.cos(t.heading));d.target.set(H.x,H.y+1,H.z),u.position.set(H.x+Y.x*26,H.y+14,H.z+Y.z*26)}else u.position.set(-78,62,88),d.target.set(0,4,0),d.autoRotate=!0;d.update()};s.current=Xe;const Pe=()=>{const H=o.clientWidth,K=o.clientHeight;!H||!K||(a.setSize(H,K),l.setSize(H,K),u.aspect=H/K,u.updateProjectionMatrix(),he.forEach(Y=>Y.resolution.set(H,K)))},at=new ResizeObserver(Pe);at.observe(o),Pe(),N(),je(),Xe();const Ue=t.on(H=>{H.type==="reset"&&(J(),Xe()),H.type==="liftoff"&&r.current==="follow"&&Xe()}),b=new L,E=new L,B=t.onFrame((H,K)=>{Re!==t.worldVersion&&(N(),je(),J(),Xe()),Ee!==t.planVersion&&je();const Y=t.state,ie=Y==="PAUSED"?t.resumeTo??"STANDBY":Y,re=a0.has(ie),ce=a0.has(Y),ue=t.pos;g.group.position.set(ue.x,ue.y+.45,ue.z),g.group.rotation.set(0,-t.heading,0);const se=ce?Math.hypot(t.vel.x,t.vel.z):0;g.group.rotateX(-Math.min(.22,se*.03));const ge=ce&&Y!=="MANUAL_HOLD"?1:Y==="COUNTDOWN"?.25:0;g.props.forEach((ve,Ce)=>{ve.rotation.y+=(Ce%2?1:-1)*ge*1.1,ve.visible=ge<.6}),g.discMat.opacity=ge>.6?.28:0;const De=!ce||Math.sin(K*9)>-.6;g.strobes.forEach(ve=>{ve.visible=De}),v.element.textContent=`AEGIS-1 · ${ue.y.toFixed(1)} m`,S.position.set(ue.x,.06,ue.z),S.scale.setScalar(1+ue.y*.03),S.material.opacity=Math.max(.12,.45-ue.y*.015),P.setFromPoints([new L(ue.x,.1,ue.z),ue.clone()]),R.computeLineDistances(),R.visible=ue.y>.5;const Le=K%1.8/1.8;if(M.visible=re,M.position.set(ue.x,.09,ue.z),M.scale.setScalar(.5+Le*Vn),M.material.opacity=.4*(1-Le),C.position.set(ue.x,.08,ue.z),y.visible=re,y.position.set(ue.x,Math.max(.1,ue.y),ue.z),y.rotation.y=-K*2.4,ce&&ue.distanceTo(G)>.5&&q<T&&(k.set([ue.x,ue.y,ue.z],q*3),q++,G.copy(ue),z.setDrawRange(0,q),z.attributes.position.needsUpdate=!0),ne&&(ne.geometry.instanceCount=Math.floor(t.pathIndexAt(t.s)/We)),ke&&ze!==t.lidarVersion){ze=t.lidarVersion;const{positions:ve,intensity:Ce,count:Fe}=t.world.cloud,D=t.inRangeMask,fe=t.mapped;for(let X=0;X<Fe;X++){const te=Ce[X];let pe,me,Ye;if(D[X]){const xt=ve[X*3]-ue.x,Bt=ve[X*3+1]-ue.y,qe=ve[X*3+2]-ue.z,En=(.45+.55*(1-Math.sqrt(xt*xt+Bt*Bt+qe*qe)/Vn))*te;pe=.22*En,me=.84*En,Ye=.96*En}else fe[X]?(pe=.1*te,me=.32*te,Ye=.55*te):(pe=.05*te,me=.09*te,Ye=.14*te);Z[X*3]=pe,Z[X*3+1]=me,Z[X*3+2]=Ye}ke.geometry.attributes.color.needsUpdate=!0}Te.forEach((ve,Ce)=>{const Fe=t.inRange.find(D=>D.o.id===Ce);if(Fe&&re){const D=Fe.d<bi?Lo.red:Fe.d<14?Lo.amber:Lo.cyan;ve.mat.color.copy(D),ve.mat.opacity=Fe.d<bi?.65+.35*Math.sin(K*6):.75,ve.tag.visible=Fe.d<16,ve.tag.element.classList.toggle("warn",Fe.d<bi)}else ve.mat.opacity=t.detected.has(Ce)?.2:0,ve.tag.visible=!1}),I.forEach((ve,Ce)=>{const Fe=t.inRange[Ce],D=!!Fe&&Fe.d<16&&re;if(ve.line.visible=ve.dot.visible=ve.tag.visible=D,!D)return;T2(Fe.o,ue,b),ve.geo.setFromPoints([ue.clone(),b.clone()]),ve.dot.position.copy(b),ve.tag.position.copy(b).lerp(ue,.5),ve.tag.element.textContent=`${Fe.d.toFixed(1)} m`;const fe=Fe.d<bi?Lo.red:Lo.amber;ve.line.material.color.copy(fe),ve.dot.material.color.copy(fe),ve.tag.element.classList.toggle("warn",Fe.d<bi)});const ye=Y==="COMPLETE"||ie==="LANDING";j.forEach((ve,Ce)=>{const Fe=Ce+1,D=ye||Fe<t.currentWp,fe=!D&&Fe===t.currentWp,X=D?"#34d399":fe?"#ffffff":"#38d6f5";ve.mesh.material.color.set(X),ve.ring.material.color.set(X),ve.mesh.rotation.y=K*(fe?1.8:.5),ve.mesh.scale.setScalar(fe?1.3+.12*Math.sin(K*4):1),ve.tag.element.classList.toggle("cur",fe),ve.tag.element.classList.toggle("done",D)}),r.current==="follow"&&(E.copy(d.target),d.target.lerp(b.set(ue.x,ue.y+1,ue.z),1-Math.exp(-H*3)),u.position.add(b.copy(d.target).sub(E))),d.update(),a.render(c,u),l.render(c,u)});return()=>{B(),Ue(),at.disconnect(),d.dispose(),He(Q),He(ae),ee.dispose(),a.dispose(),o.innerHTML=""}},[t]),A.jsx("div",{ref:i,className:"scene-host"})}function X2({engine:t}){const e=Ne.useRef(null);return Ne.useEffect(()=>{const n=e.current,i=n.getContext("2d");if(!i)return;const r=[];let s={x:1e9,z:0};const o=t.on(u=>{u.type==="reset"&&(r.length=0,s={x:1e9,z:0})});let a=1;const l=()=>{const u=Math.min(2,window.devicePixelRatio||1),d=n.clientWidth,f=n.clientHeight;(n.width!==d*u||n.height!==f*u)&&(n.width=d*u,n.height=f*u),i.setTransform(u,0,0,u,0,0);const p=Math.min(d,f)/(lt*2+8),_=d/2,x=f/2,m=S=>_+S*p,h=S=>x+S*p;i.clearRect(0,0,d,f),i.strokeStyle="rgba(47,212,255,0.07)",i.lineWidth=1;for(let S=-lt;S<=lt;S+=20)i.beginPath(),i.moveTo(m(S),h(-lt)),i.lineTo(m(S),h(lt)),i.stroke(),i.beginPath(),i.moveTo(m(-lt),h(S)),i.lineTo(m(lt),h(S)),i.stroke();i.strokeStyle="rgba(47,212,255,0.35)",i.strokeRect(m(-lt),h(-lt),lt*2*p,lt*2*p);const g=t.pos;i.fillStyle="rgba(47,212,255,0.06)",i.beginPath(),i.arc(m(g.x),h(g.z),Vn*p,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(47,212,255,0.25)",i.stroke();const v=new Map(t.inRange.map(S=>[S.o.id,S.d]));for(const S of t.world.obstacles){const P=v.get(S.id),R=t.detected.has(S.id);i.fillStyle=P!==void 0?P<7?"rgba(255,77,94,0.55)":"rgba(255,181,71,0.35)":R?"rgba(47,140,200,0.35)":"rgba(120,150,180,0.13)",i.strokeStyle=P!==void 0?"rgba(255,181,71,0.8)":"rgba(47,212,255,0.25)",i.save(),i.translate(m(S.x),h(S.z)),S.shape==="circle"?(i.beginPath(),i.arc(0,0,S.r*p,0,Math.PI*2),i.fill(),i.stroke()):(i.rotate(-S.rot),i.fillRect(-S.hw*p,-S.hd*p,S.hw*2*p,S.hd*2*p),i.strokeRect(-S.hw*p,-S.hd*p,S.hw*2*p,S.hd*2*p)),i.restore()}if(t.route){const S=t.route.samples,P=Math.max(1,Math.floor(S.length/200)),R=S.filter((C,U)=>U%P===0||U===S.length-1),M=Math.floor(t.pathIndexAt(t.s)/P);i.lineWidth=1.6,i.strokeStyle="rgba(56,214,245,0.9)",i.setLineDash([4,3]),i.beginPath(),R.slice(M).forEach((C,U)=>U?i.lineTo(m(C.x),h(C.z)):i.moveTo(m(C.x),h(C.z))),i.stroke(),i.setLineDash([]),M>0&&(i.strokeStyle="#34d399",i.lineWidth=2.2,i.beginPath(),R.slice(0,M+1).forEach((C,U)=>U?i.lineTo(m(C.x),h(C.z)):i.moveTo(m(C.x),h(C.z))),i.stroke()),t.waypoints.forEach((C,U)=>{if(!U)return;const y=U<t.currentWp||t.state==="COMPLETE"||t.state==="LANDING";i.fillStyle=y?"#34d399":U===t.currentWp?"#ffffff":"#38d6f5",i.beginPath(),i.arc(m(C.x),h(C.z),2.6,0,Math.PI*2),i.fill()})}g.y>.2&&Math.hypot(g.x-s.x,g.z-s.z)>.8&&(r.push([g.x,g.z]),s={x:g.x,z:g.z}),r.length>1&&(i.strokeStyle="rgba(167,243,208,0.55)",i.lineWidth=1,i.beginPath(),r.forEach(([S,P],R)=>R?i.lineTo(m(S),h(P)):i.moveTo(m(S),h(P))),i.stroke()),i.strokeStyle="#3ee08f",i.beginPath(),i.arc(m(fn.x),h(fn.z),4,0,Math.PI*2),i.stroke(),i.strokeStyle="#ffb547",i.beginPath(),i.arc(m(Bn.x),h(Bn.z),4,0,Math.PI*2),i.stroke(),i.save(),i.translate(m(g.x),h(g.z)),i.rotate(t.heading),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(0,-7),i.lineTo(4.5,5),i.lineTo(0,2.5),i.lineTo(-4.5,5),i.closePath(),i.fill(),i.restore(),i.fillStyle="rgba(200,220,240,0.6)",i.font='600 11px "JetBrains Mono", monospace',i.fillText("N ↑",d-26,15)};l();const c=t.onFrame(u=>{a+=u,a>=1/15&&(a=0,l())});return()=>{c(),o()}},[t]),A.jsx("canvas",{ref:e,className:"minimap"})}class Y2{constructor(){this.ctx=null,this.muted=!1}get ac(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}tone(e,n=.12,i="sine",r=.06,s=0){if(!this.muted)try{const o=this.ac;if(!o)return;const a=o.currentTime+s,l=o.createOscillator(),c=o.createGain();l.type=i,l.frequency.setValueAtTime(e,a),c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(r,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c).connect(o.destination),l.start(a),l.stop(a+n+.02)}catch{}}click(){this.tone(1400,.05,"sine",.03)}tick(){this.tone(880,.15,"sine",.07)}go(){this.tone(660,.2,"triangle",.07),this.tone(990,.35,"triangle",.07,.12)}ok(){this.tone(1046,.12,"sine",.04),this.tone(1318,.18,"sine",.04,.08)}warn(){this.tone(520,.18,"square",.025)}deny(){this.tone(220,.22,"sawtooth",.05),this.tone(180,.3,"sawtooth",.05,.2)}}const Jn=new Y2;function Wt({onPress:t,variant:e="default",size:n="md",pointerOnly:i,silent:r,className:s="",children:o,...a}){return A.jsx("button",{type:"button",...a,className:`btn ${e} ${n} ${s}`,onClick:l=>{const c=l.detail>0;c&&l.currentTarget.blur(),!(i&&!c)&&(r||Jn.click(),t())},children:o})}function fp({title:t,icon:e,aside:n,children:i,className:r=""}){return A.jsxs("section",{className:`panel ${r}`,children:[A.jsxs("header",{className:"panel-h",children:[A.jsx("span",{className:"panel-ic",children:e}),A.jsx("h3",{className:"panel-t",children:t}),n&&A.jsx("span",{className:"panel-aside",children:n})]}),A.jsx("div",{className:"panel-b",children:i})]})}function Ii({label:t,value:e,unit:n,tone:i,big:r}){return A.jsxs("div",{className:`metric ${r?"big":""}`,children:[A.jsx("div",{className:"metric-l",children:t}),A.jsxs("div",{className:`metric-v ${i??""}`,children:[e,n&&A.jsx("span",{className:"metric-u",children:n})]})]})}function hh({k:t,v:e,tone:n}){return A.jsxs("div",{className:"row",children:[A.jsx("span",{className:"row-k",children:t}),A.jsx("span",{className:`row-v ${n??""}`,children:e})]})}function mx({size:t=26}){return A.jsxs("svg",{viewBox:"0 0 32 32",width:t,height:t,"aria-hidden":"true",children:[A.jsx("path",{d:"M16 3 L29 27 L16 21 L3 27 Z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),A.jsx("path",{d:"M16 10 L21.5 22 L16 19.5 L10.5 22 Z",fill:"currentColor",opacity:".35"})]})}const pp=t=>{const e=Math.floor(t/60),n=Math.floor(t%60);return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`},ma=t=>Number.isFinite(t)?t.toFixed(1):"—",gx=t=>`AEG-${String(t).padStart(4,"0")}`;function $2({onInitialize:t}){return A.jsxs("div",{className:"screen welcome",children:[A.jsx("div",{className:"welcome-horizon","aria-hidden":"true"}),A.jsxs("div",{className:"welcome-inner",children:[A.jsx("div",{className:"welcome-logo",children:A.jsx(mx,{size:56})}),A.jsx("h1",{className:"welcome-title",children:"AEGIS"}),A.jsx("p",{className:"welcome-sub",children:"AUTONOMOUS NAVIGATION & MISSION INTELLIGENCE"}),A.jsx(Wt,{variant:"primary",size:"lg",onPress:t,pointerOnly:!0,className:"welcome-btn",children:"INITIALIZE"})]}),A.jsx("div",{className:"welcome-foot",children:"Virtual environment · synthetic data"})]})}function K2({snap:t,onContinue:e}){const n=Ne.useMemo(()=>{try{const o=document.createElement("canvas");return!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{return!1}},[]),i=[["Environment generator",`seed ${t.seed}`],["LiDAR model",`${Vn} m · ${Ec} Hz`],["Flight model",`${up} m/s cruise`],["Route planner",`A* · ${Ea} m grid`],["Telemetry","10 Hz"],["Renderer",n?"WebGL":"WebGL unavailable"]],r=t.state==="READY",s=r?ch:Math.max(0,t.initStep-1);return A.jsx("div",{className:"screen centered",children:A.jsxs("div",{className:"card init",children:[A.jsxs("div",{className:"card-head",children:[A.jsxs("div",{children:[A.jsx("div",{className:"eyebrow",children:"SYSTEM INITIALIZATION"}),A.jsx("h2",{className:"card-title",children:r?"All systems ready":"Initializing…"})]}),A.jsxs("div",{className:"init-count mono",children:[s,"/",ch]})]}),A.jsx("div",{className:"init-progress",children:A.jsx("span",{style:{width:`${s/ch*100}%`}})}),A.jsx("ul",{className:"checks",children:i.map(([o,a],l)=>{const c=r||t.initStep>l+1?"ok":t.initStep===l+1?"run":"wait";return A.jsxs("li",{className:`check ${c}`,children:[A.jsx("span",{className:"check-ic",children:c==="ok"?A.jsx(nM,{size:13,strokeWidth:3}):null}),A.jsx("span",{className:"check-n",children:o}),A.jsx("span",{className:"check-m mono",children:a}),A.jsx("span",{className:"check-s",children:c==="ok"?"Ready":c==="run"?"Checking":"Pending"})]},o)})}),A.jsxs("div",{className:"card-foot",children:[A.jsxs("span",{className:"muted",children:[t.obstacleCount," obstacles · ",t.totalPoints.toLocaleString()," LiDAR points generated"]}),A.jsxs(Wt,{variant:"primary",onPress:e,disabled:!r,pointerOnly:!0,children:["CONTINUE ",A.jsx(Wf,{size:15})]})]})]})})}function q2({snap:t,onProceed:e}){const n=[["Objective","Fly autonomously from LAUNCH to TARGET without GPS, avoiding all obstacles, then land."],["Environment",`${lt*2} × ${lt*2} m arena · ${t.obstacleCount} obstacles · seed ${t.seed}`],["Perception",`360° LiDAR · ${Vn} m range · ${Ec} Hz · ${t.totalPoints.toLocaleString()} surface points`],["Route",`${t.waypointCount} waypoints · ${ma(t.planLength)} m`],["Planner",`A* on ${Ea} m occupancy grid with line-of-sight smoothing`],["Obstacle clearance",`${$d.toFixed(1)} m planned · 2.0 m route guard`],["Altitude",`Cruise ${Fr.toFixed(1)} m AGL · ceiling ${hx} m`],["Manual flight","Restricted · commands are denied and the aircraft is held"],["Speed",`${up.toFixed(1)} m/s cruise`],["Navigation","GPS denied · local frame (East / North / Altitude) centred on the arena"]];return A.jsx("div",{className:"screen centered",children:A.jsxs("div",{className:"card brief",children:[A.jsx("div",{className:"card-head",children:A.jsxs("div",{children:[A.jsx("div",{className:"eyebrow",children:"MISSION BRIEFING"}),A.jsx("h2",{className:"card-title mono",children:gx(t.seed)})]})}),A.jsx("dl",{className:"brief-list",children:n.map(([i,r])=>A.jsxs("div",{className:"brief-row",children:[A.jsx("dt",{children:i}),A.jsx("dd",{children:r})]},i))}),A.jsx("div",{className:"card-foot end",children:A.jsxs(Wt,{variant:"primary",size:"lg",onPress:e,pointerOnly:!0,children:["PROCEED ",A.jsx(Wf,{size:16})]})})]})})}const _x={WELCOME:"OFFLINE",INITIALIZING:"INITIALIZING",READY:"READY",BRIEFING:"BRIEFING",STANDBY:"STANDBY",COUNTDOWN:"COUNTDOWN",TAKEOFF:"TAKEOFF",AUTONOMOUS_TRANSIT:"AUTONOMOUS",MANUAL_HOLD:"MANUAL HOLD",ROUTE_BLOCKED:"ROUTE BLOCKED",LANDING:"LANDING",COMPLETE:"COMPLETE",PAUSED:"PAUSED"},vx={WELCOME:"muted",INITIALIZING:"cyan",READY:"green",BRIEFING:"cyan",STANDBY:"green",COUNTDOWN:"amber",TAKEOFF:"cyan",AUTONOMOUS_TRANSIT:"cyan",MANUAL_HOLD:"amber",ROUTE_BLOCKED:"red",LANDING:"cyan",COMPLETE:"green",PAUSED:"amber"};function Z2({heading:t}){const e=[],n=Math.round(t/10)*10;for(let i=n-60;i<=n+60;i+=10){const r=i-t;if(Math.abs(r)>58)continue;const s=(i%360+360)%360,o=s===0?"N":s===90?"E":s===180?"S":s===270?"W":s%30===0?String(s):"";e.push(A.jsx("div",{className:`ht-m ${o?"maj":""}`,style:{left:`${50+r*.85}%`},children:o&&A.jsx("span",{children:o})},i))}return A.jsxs("div",{className:"htape","aria-label":`Heading ${t} degrees`,children:[A.jsx("div",{className:"ht-c"}),e]})}function Q2({snap:t}){return A.jsxs(fp,{title:"Flight",icon:A.jsx(cM,{size:15}),aside:A.jsxs("span",{className:"mono muted",children:["T+",pp(t.missionTime)]}),children:[A.jsxs("div",{className:"pos-grid",children:[A.jsxs("div",{className:"pos",children:[A.jsx("span",{children:"EAST"}),A.jsx("b",{className:"mono",children:t.pos.x.toFixed(1)})]}),A.jsxs("div",{className:"pos",children:[A.jsx("span",{children:"NORTH"}),A.jsx("b",{className:"mono",children:t.pos.y.toFixed(1)})]}),A.jsxs("div",{className:"pos alt",children:[A.jsx("span",{children:"ALT AGL"}),A.jsx("b",{className:"mono",children:t.pos.z.toFixed(1)})]})]}),A.jsxs("div",{className:"metric-grid",children:[A.jsx(Ii,{label:"Ground speed",value:t.groundSpeed.toFixed(1),unit:"m/s",tone:"cyan"}),A.jsx(Ii,{label:"Vertical speed",value:(t.vz>.05?"+":t.vz<-.05?"−":"")+Math.abs(t.vz).toFixed(1),unit:"m/s"})]}),A.jsxs("div",{className:"hdg-row",children:[A.jsx(Ii,{label:"Heading",value:String(t.heading).padStart(3,"0"),unit:"°"}),A.jsx(Z2,{heading:t.heading})]})]})}function J2({snap:t}){const e=t.state==="PAUSED"?t.resumeTo??"STANDBY":t.state,n=t.waypointCount,i=e==="LANDING"||e==="COMPLETE",r=i?"Target reached":`${dp(t.currentWp,n+1)} · ${t.currentWp} of ${n}`,s=e==="ROUTE_BLOCKED"?["Blocked","red"]:e==="MANUAL_HOLD"?["Holding · autonomy suspended","amber"]:e==="AUTONOMOUS_TRANSIT"?["Tracking route","cyan"]:i?["Route complete","green"]:["Route ready","green"],o=t.route;return A.jsxs(fp,{title:"Navigation",icon:A.jsx(oM,{size:15}),aside:A.jsx("span",{className:"tag-gps",children:"GPS DENIED"}),children:[A.jsxs("div",{className:"route-prog",children:[A.jsxs("div",{className:"route-top",children:[A.jsx("span",{children:"Route progress"}),A.jsxs("b",{className:"mono",children:[Math.round(t.progress*100),"%"]})]}),A.jsx("div",{className:"bar",children:A.jsx("span",{style:{width:`${t.progress*100}%`}})}),A.jsxs("div",{className:"route-bot mono",children:[A.jsxs("span",{children:[ma(t.routeFlown)," m flown"]}),A.jsxs("span",{children:[ma(t.remaining)," m left"]})]})]}),A.jsx(hh,{k:"Status",v:s[0],tone:s[1]}),A.jsx(hh,{k:"Waypoint",v:r}),A.jsx(hh,{k:"Route",v:`R${o.rev} · ${o.origin==="INITIAL"?"planned":"recalculated"} · ${o.waypointCount} WP`})]})}const eC={IDLE:["Standby scan","muted"],HOLD:["Held · frozen","amber"],SCANNING:["Scanning · 10 Hz","cyan"],STATIONARY:["Scanning · stationary","amber"],FROZEN:["Frozen (paused)","amber"]};function tC({snap:t}){const e=t.totalPoints?t.pointsMapped/t.totalPoints:0,n=t.nearest&&t.nearest.dist<bi,[i,r]=eC[t.sensor];return A.jsxs(fp,{title:"LiDAR",icon:A.jsx(gM,{size:15}),aside:A.jsx("span",{className:`mono ${r}`,children:i}),children:[A.jsxs("div",{className:"metric-grid",children:[A.jsx(Ii,{label:"Returns in range",value:t.pointsInRange.toLocaleString(),tone:"cyan"}),A.jsx(Ii,{label:"Map coverage",value:(e*100).toFixed(0),unit:"%"})]}),A.jsxs("div",{className:`nearest ${n?"warn":""}`,children:[A.jsx(aM,{size:14}),t.nearest?A.jsxs("span",{children:["Nearest ",A.jsx("b",{children:t.nearest.id})," · ",t.nearest.kind.toLowerCase()]}):A.jsxs("span",{children:["Clear within ",Vn," m"]}),t.nearest&&A.jsxs("b",{className:"mono nearest-d",children:[t.nearest.dist.toFixed(1)," m"]})]})]})}const l0=[{key:["STANDBY"],name:"Standby"},{key:["COUNTDOWN"],name:"Countdown"},{key:["TAKEOFF"],name:"Takeoff"},{key:["AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED"],name:"Transit"},{key:["LANDING"],name:"Landing"},{key:["COMPLETE"],name:"Complete"}];function nC({snap:t}){const e=t.state==="PAUSED"?t.resumeTo??"STANDBY":t.state,n=l0.findIndex(i=>i.key.includes(e));return A.jsx("ol",{className:"timeline",children:l0.map((i,r)=>{const s=r<n||e==="COMPLETE",o=r===n&&e!=="COMPLETE";let a="";return o&&e==="MANUAL_HOLD"?a="hold":o&&e==="ROUTE_BLOCKED"?a="blocked":o&&e==="AUTONOMOUS_TRANSIT"?a=`WP ${t.currentWp}/${t.waypointCount} · R${t.route.rev}`:o&&t.state==="PAUSED"&&(a="paused"),A.jsxs("li",{className:`tl ${s?"done":""} ${o?"cur":""}`,children:[A.jsx("span",{className:"tl-dot"}),A.jsx("span",{className:"tl-n",children:i.name}),a&&A.jsx("span",{className:"tl-note mono",children:a})]},i.name)})})}function iC({log:t}){return A.jsx("div",{className:"log",role:"log","aria-live":"polite",children:t.map(e=>A.jsxs("div",{className:`log-r ${e.level}`,children:[A.jsx("span",{className:"log-t mono",children:e.t}),A.jsx("span",{className:"log-m",children:e.msg})]},e.id))})}function rC(t){const[e,n]=Ne.useState(()=>t.snapshot()),[i,r]=Ne.useState(()=>t.log.slice(0,80));return Ne.useEffect(()=>{const s=()=>{n(t.snapshot()),r(t.log.slice(0,80))},o=window.setInterval(s,100),a=t.on(l=>{(l.type==="state"||l.type==="reset")&&s()});return()=>{clearInterval(o),a()}},[t]),{snap:e,log:i}}function sC(){const[t,e]=Ne.useState(()=>new Date);return Ne.useEffect(()=>{const n=window.setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),t}function oC({snap:t,fs:e,onFs:n,muted:i,onMute:r}){const s=sC(),o=vx[t.state];return A.jsxs("header",{className:"header",children:[A.jsxs("div",{className:"brand",children:[A.jsx("span",{className:"brand-mark",children:A.jsx(mx,{size:24})}),A.jsx("span",{className:"brand-name",children:"AEGIS"}),A.jsx("span",{className:"brand-div"}),A.jsx("span",{className:"brand-sub",children:"Autonomous Navigation & Mission Intelligence"})]}),A.jsxs("div",{className:"header-right",children:[A.jsxs("div",{className:"hd-item",children:[A.jsx("span",{className:"hd-k",children:"Mission"}),A.jsx("span",{className:"hd-v mono",children:gx(t.seed)})]}),A.jsxs("div",{className:`state-chip ${o}`,"data-testid":"state-chip",children:[A.jsx("span",{className:"dot"}),_x[t.state]]}),A.jsxs("div",{className:"hd-item time",children:[A.jsx(sM,{size:14}),A.jsx("span",{className:"mono",children:s.toLocaleTimeString([],{hour12:!1})})]}),A.jsx("span",{className:"disclosure",title:"All data on this console is generated in the browser. There is no vehicle link.",children:"SYNTHETIC DATA"}),A.jsx("button",{type:"button",className:"icon-btn",onClick:a=>{a.detail&&a.currentTarget.blur(),r()},title:i?"Unmute sounds (M)":"Mute sounds (M)","aria-label":i?"Unmute":"Mute",children:i?A.jsx(TM,{size:16}):A.jsx(EM,{size:16})}),A.jsx("button",{type:"button",className:"icon-btn",onClick:a=>{a.detail&&a.currentTarget.blur(),n()},title:e?"Exit fullscreen (Esc)":"Enter fullscreen","aria-label":"Toggle fullscreen",children:e?A.jsx(fM,{size:16}):A.jsx(dM,{size:16})})]})]})}function aC({value:t,paused:e}){const n=Math.max(1,Math.ceil(t)),i=t-Math.floor(t)||1;return A.jsxs("div",{className:"overlay countdown","aria-live":"assertive",children:[A.jsxs("div",{className:"cd-ring",children:[A.jsxs("svg",{viewBox:"0 0 200 200",children:[A.jsx("circle",{cx:"100",cy:"100",r:"90",className:"cd-track"}),A.jsx("circle",{cx:"100",cy:"100",r:"90",className:"cd-prog",style:{strokeDashoffset:565.5*(1-i)}})]}),A.jsx("div",{className:`cd-num mono ${e?"":"anim"}`,children:n},n)]}),A.jsx("div",{className:"cd-label",children:e?"COUNTDOWN PAUSED":"LAUNCH SEQUENCE"})]})}function lC({cmd:t,onClose:e}){const n=Ne.useRef(null);return Ne.useEffect(()=>{var i;(i=n.current)==null||i.focus()},[]),A.jsx("div",{className:"modal-backdrop",onMouseDown:e,children:A.jsxs("div",{className:"denied",role:"alertdialog","aria-modal":"true","aria-labelledby":"denied-t",onMouseDown:i=>i.stopPropagation(),children:[A.jsx("div",{className:"denied-scan","aria-hidden":"true"}),A.jsxs("div",{className:"denied-head",children:[A.jsx(xM,{size:20}),A.jsx("span",{id:"denied-t",children:"COMMAND DENIED"})]}),A.jsxs("div",{className:"denied-body",children:[A.jsx("div",{className:"denied-cmd mono",children:t}),A.jsx("p",{children:"This command is not available in the virtual environment. The console controls a virtual aircraft only, and nothing was transmitted."})]}),A.jsx("div",{className:"denied-foot",children:A.jsx("button",{ref:n,type:"button",className:"btn danger md",onClick:e,children:"DISMISS"})})]})})}function cC({snap:t,onClose:e}){return A.jsxs("div",{className:"complete-card",role:"status",children:[A.jsxs("div",{className:"complete-head",children:[A.jsx(SM,{size:16}),"Mission complete",A.jsx("button",{type:"button",className:"icon-btn sm",onClick:e,"aria-label":"Close summary",children:A.jsx(wM,{size:14})})]}),A.jsxs("div",{className:"complete-grid",children:[A.jsx(Ii,{label:"Flight time",value:pp(t.missionTime)}),A.jsx(Ii,{label:"Distance flown",value:ma(t.traveled),unit:"m"}),A.jsx(Ii,{label:"Min clearance",value:ma(t.minClearance),unit:"m",tone:"green"}),A.jsx(Ii,{label:"Map coverage",value:`${Math.round(t.pointsMapped/Math.max(1,t.totalPoints)*100)}`,unit:"%"})]}),A.jsx("p",{className:"complete-hint",children:"Press RESET to prepare a new mission."})]})}function uC({cmd:t,leaving:e,count:n}){return A.jsxs("div",{className:`rx-alert ${e?"out":""}`,role:"alert","aria-live":"assertive","data-testid":"restricted-alert",children:[A.jsx("div",{className:"rx-scan","aria-hidden":"true"}),A.jsx("div",{className:"rx-icon",children:A.jsx(pM,{size:34,strokeWidth:1.8})}),A.jsxs("div",{className:"rx-text",children:[A.jsx("div",{className:"rx-l1",children:"COMMAND DENIED"}),A.jsx("div",{className:"rx-l2",children:"CONTROL AUTHORIZATION FAILURE"}),A.jsx("div",{className:"rx-l3",children:"MANUAL FLIGHT COMMANDS ARE RESTRICTED"}),A.jsxs("div",{className:"rx-cmd mono",children:[t,n>1?` ×${n}`:""," · aircraft held"]})]})]})}const c0={w:"FORWARD",s:"BACKWARD",q:"LEFT",e:"RIGHT",a:"YAW LEFT",d:"YAW RIGHT",r:"ASCEND",f:"DESCEND"},u0=3e3,hC=350;function dC(){var Te,ke,Z;const t=Ne.useMemo(()=>new B2(2205),[]);Ne.useEffect(()=>(t.start(),()=>t.stop()),[t]);const{snap:e,log:n}=rC(t),[i,r]=Ne.useState(!1),[s,o]=Ne.useState(!1),[a,l]=Ne.useState("follow"),[c,u]=Ne.useState(0),[d,f]=Ne.useState(null),[p,_]=Ne.useState(!1),[x,m]=Ne.useState(null),h=Ne.useRef(0),[g,v]=Ne.useState(null),S=Ne.useRef([]),P=Ne.useCallback((j,ne="cyan")=>{m({msg:j,tone:ne}),window.clearTimeout(h.current),h.current=window.setTimeout(()=>m(null),1800)},[]);Ne.useEffect(()=>()=>{window.clearTimeout(h.current),S.current.forEach(clearTimeout)},[]),Ne.useEffect(()=>t.on(j=>{switch(j.type){case"countdown":case"tick":Jn.tick();break;case"liftoff":Jn.go();break;case"proximity":Jn.warn();break;case"guard":Jn.deny();break;case"blocked":Jn.warn();break;case"complete":Jn.ok();break;case"reset":S.current.forEach(clearTimeout),v(null),f(null),m(null),_(!1),u(ne=>ne+1);break}}),[t]),Ne.useEffect(()=>{const j=()=>r(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",j),()=>document.removeEventListener("fullscreenchange",j)},[]);const R=Ne.useCallback(()=>{var ne,he;const j=document.fullscreenElement?document.exitFullscreen():(he=(ne=document.documentElement).requestFullscreen)==null?void 0:he.call(ne);j==null||j.catch(()=>P("Fullscreen is not available in this browser","amber"))},[P]),M=Ne.useCallback(()=>{const j=!Jn.muted;Jn.muted=j,o(j)},[]),C=e.state==="WELCOME"?"welcome":e.state==="INITIALIZING"||e.state==="READY"?"init":e.state==="BRIEFING"?"brief":"console";Ne.useEffect(()=>{var j,ne;(ne=(j=document.activeElement)==null?void 0:j.blur)==null||ne.call(j)},[C]);const U=Ne.useCallback(j=>t.dispatch(j),[t]),y=Ne.useCallback(j=>{t.restrictedAvailable()&&(t.handleRestrictedFlightCommand(j),Jn.deny(),S.current.forEach(clearTimeout),v(ne=>({cmd:j,n:ne&&ne.cmd===j&&!ne.leaving?ne.n+1:1,leaving:!1})),S.current=[window.setTimeout(()=>v(ne=>ne&&{...ne,leaving:!0}),u0-hC),window.setTimeout(()=>v(null),u0)])},[t]),T=Ne.useCallback(()=>{t.recalculate()?P(`Route R${t.route.rev} · ${t.waypoints.length-1} waypoints`):P("No feasible route from this position","red")},[t,P]),k=Ne.useCallback(()=>{t.newEnvironment()&&P("New environment generated")},[t,P]),z=Ne.useCallback(j=>{Jn.deny(),t.addLog("alert",`Command denied · ${j} · not available in the virtual environment`),f(j)},[t]),$=Ne.useRef({state:e.state,denied:d});$.current={state:e.state,denied:d},Ne.useEffect(()=>{const j=ne=>{const{state:he,denied:Re}=$.current;if(ne.key==="Escape"){Re&&(ne.preventDefault(),f(null));return}if(Re||ne.repeat||ne.ctrlKey||ne.metaKey||ne.altKey)return;const Ee=ne.target,ze=Ee==null?void 0:Ee.tagName;if(ze==="INPUT"||ze==="TEXTAREA"||ze==="SELECT"||Ee!=null&&Ee.isContentEditable||!P2.includes(he))return;const We=ne.key.toLowerCase();if(We===" "){if(ze==="BUTTON"||ze==="A")return;ne.preventDefault(),t.allowed("RESUME")?t.dispatch("RESUME"):t.allowed("PAUSE")&&t.dispatch("PAUSE");return}if(c0[We]){ne.preventDefault(),y(c0[We]);return}We==="c"&&u(He=>He+1),We==="m"&&M()};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[t,y,M]);const q=e.state,G=q==="PAUSED"?e.resumeTo??"STANDBY":q,J=j=>t.allowed(j),I=q==="MANUAL_HOLD",ee=t.restrictedAvailable(),Q=j=>ee?`Restricted (${j}) — command will be denied and the aircraft held`:"Restricted — available in flight only (always denied)",ae=e.nearest&&e.nearest.dist<bi&&["AUTONOMOUS_TRANSIT","TAKEOFF","LANDING"].includes(q);return A.jsxs("div",{className:`app stage-${C}`,"data-state":q,children:[C!=="welcome"&&A.jsx(oC,{snap:e,fs:i,onFs:R,muted:s,onMute:M}),C==="welcome"&&A.jsx($2,{onInitialize:()=>U("INITIALIZE")}),C==="init"&&A.jsx(K2,{snap:e,onContinue:()=>U("CONTINUE")}),C==="brief"&&A.jsx(q2,{snap:e,onProceed:()=>U("PROCEED")}),C==="console"&&A.jsxs("main",{className:"console",children:[A.jsxs("aside",{className:"col left","aria-label":"Flight data",children:[A.jsx(Q2,{snap:e}),A.jsx(J2,{snap:e}),A.jsx(tC,{snap:e})]}),A.jsxs("section",{className:"center","aria-label":"3D environment",children:[A.jsxs("div",{className:"viewport",children:[A.jsx(j2,{engine:t,camMode:a,camResetToken:c}),A.jsxs("div",{className:"vp-tag",children:[A.jsx("span",{className:"dot"}),"SYNTHETIC LiDAR · VIRTUAL ENVIRONMENT"]}),A.jsxs("div",{className:"vp-cams",role:"group","aria-label":"Camera",children:[[["follow","Follow",MM],["orbit","Orbit",mM],["top","Top",uM]].map(([j,ne,he])=>A.jsxs("button",{type:"button",className:`seg ${a===j?"on":""}`,"aria-pressed":a===j,title:`${ne} camera`,onClick:Re=>{Re.detail&&Re.currentTarget.blur(),l(j),u(Ee=>Ee+1)},children:[A.jsx(he,{size:14}),ne]},j)),A.jsxs("button",{type:"button",className:"seg",title:"Reset camera (C)",onClick:j=>{j.detail&&j.currentTarget.blur(),u(ne=>ne+1)},children:[A.jsx(lM,{size:14}),"Reset"]})]}),A.jsxs("div",{className:"vp-hud",children:[A.jsx("div",{className:`hud-state ${vx[q]}`,children:_x[q]}),A.jsxs("div",{className:"hud-clock mono",children:["T+",pp(e.missionTime)]}),A.jsx("div",{className:"hud-bar",children:A.jsx("span",{style:{width:`${e.progress*100}%`}})}),A.jsxs("div",{className:"hud-pct mono",children:[Math.round(e.progress*100),"%"]})]}),A.jsxs("div",{className:"vp-legend","aria-hidden":"true",children:[A.jsxs("span",{children:[A.jsx("i",{className:"lgd cyan"}),"Planned"]}),A.jsxs("span",{children:[A.jsx("i",{className:"lgd green"}),"Completed"]}),A.jsxs("span",{children:[A.jsx("i",{className:"lgd white"}),"Current WP"]}),A.jsxs("span",{children:[A.jsx("i",{className:"lgd amber"}),"In range"]}),A.jsxs("span",{children:[A.jsx("i",{className:"lgd red"}),"< ",bi," m"]})]}),G==="COUNTDOWN"&&A.jsx(aC,{value:e.countdown,paused:q==="PAUSED"}),q==="PAUSED"&&G!=="COUNTDOWN"&&A.jsxs("div",{className:"paused-badge",children:[A.jsx(Im,{size:14}),"PAUSED"]}),q==="COMPLETE"&&!p&&A.jsx(cC,{snap:e,onClose:()=>_(!0)}),I&&A.jsxs("div",{className:"vp-banner amber",role:"status","data-testid":"hold-banner",children:[A.jsxs("div",{className:"vb-text",children:[A.jsx("b",{children:"MANUAL HOLD"}),A.jsx("span",{children:"Aircraft frozen. Autonomous navigation is suspended until you press RESUME AUTO."})]}),A.jsxs(Wt,{variant:"accent",onPress:()=>U("RESUME_AUTONOMY"),children:[A.jsx(Dm,{size:15}),"RESUME AUTO"]})]}),q==="ROUTE_BLOCKED"&&A.jsxs("div",{className:"vp-banner red",role:"alert","data-testid":"blocked-banner",children:[A.jsxs("div",{className:"vb-text",children:[A.jsxs("b",{children:["ROUTE BLOCKED",(Te=e.blocked)!=null&&Te.id?` · ${e.blocked.id}`:"",((ke=e.blocked)==null?void 0:ke.dist)!=null?` · ${e.blocked.dist.toFixed(1)} m`:""]}),A.jsx("span",{children:(Z=e.blocked)==null?void 0:Z.reason})]}),A.jsxs(Wt,{variant:"primary",onPress:T,children:[A.jsx(Fm,{size:15}),"RECALCULATE"]}),A.jsxs(Wt,{onPress:()=>U("HOLD"),children:[A.jsx(Nm,{size:15}),"HOLD"]})]}),ae&&A.jsxs("div",{className:"prox-banner",role:"status",children:["Proximity advisory · ",e.nearest.id," · ",e.nearest.dist.toFixed(1)," m"]}),x&&A.jsx("div",{className:`toast ${x.tone}`,role:"status",children:x.msg}),g&&A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"rx-flash","aria-hidden":"true"},`f${g.n}${g.cmd}`),A.jsx(uC,{cmd:g.cmd,leaving:g.leaving,count:g.n})]})]}),A.jsxs("div",{className:"dock",children:[A.jsxs("div",{className:"dock-g mission",children:[A.jsx("div",{className:"dock-h",children:"Mission"}),A.jsxs("div",{className:"dock-grid",children:[A.jsxs(Wt,{variant:"primary",pointerOnly:!0,disabled:!J("START"),onPress:()=>U("START"),title:"Start the mission countdown (mouse click only)",children:[A.jsx(Um,{size:15}),"START MISSION"]}),q==="PAUSED"?A.jsxs(Wt,{onPress:()=>U("RESUME"),title:"Resume (Space)",children:[A.jsx(Um,{size:15}),"RESUME"]}):A.jsxs(Wt,{disabled:!J("PAUSE"),onPress:()=>U("PAUSE"),title:"Pause the simulation (Space)",children:[A.jsx(Im,{size:15}),"PAUSE"]}),A.jsxs(Wt,{disabled:!J("RESET"),onPress:()=>U("RESET"),title:"Return to launch pad and clear the mission",children:[A.jsx(Om,{size:15}),"RESET"]}),I?A.jsxs(Wt,{variant:"accent",disabled:!J("RESUME_AUTO"),onPress:()=>U("RESUME_AUTONOMY"),title:"Recalculate from here and continue autonomously",children:[A.jsx(Dm,{size:15}),"RESUME AUTO"]}):A.jsxs(Wt,{disabled:!J("HOLD"),onPress:()=>U("HOLD"),title:"Stop and hold position",children:[A.jsx(Nm,{size:15}),"HOLD"]}),A.jsxs(Wt,{disabled:!J("RECALCULATE"),onPress:T,title:I?"In hold, RESUME AUTO recalculates the route":"Recalculate the route (standby, transit or blocked)",children:[A.jsx(Fm,{size:15}),"RECALCULATE"]}),A.jsxs(Wt,{disabled:!J("NEW_ENV"),onPress:k,title:"Generate a new environment (standby only)",children:[A.jsx(yM,{size:15}),"NEW ENVIRONMENT"]})]})]}),A.jsxs("div",{className:"dock-g flight",children:[A.jsxs("div",{className:"dock-h",children:["Manual control ",A.jsxs("span",{className:"dock-note red",children:[A.jsx(Ga,{size:11}),"restricted"]})]}),A.jsx("div",{className:"dock-grid four",children:[["YAW LEFT","YAW L",Om,"A"],["FORWARD","FORWARD",tM,"W"],["YAW RIGHT","YAW R",_M,"D"],["ASCEND","ASCEND",rM,"R"],["LEFT","LEFT",eM,"Q"],["BACKWARD","BACKWARD",JS,"S"],["RIGHT","RIGHT",Wf,"E"],["DESCEND","DESCEND",iM,"F"]].map(([j,ne,he,Re])=>A.jsxs(Wt,{className:"rx-btn",disabled:!ee,silent:!0,"data-cmd":j,onPress:()=>y(j),title:Q(Re),children:[A.jsx(he,{size:15}),ne,A.jsx("kbd",{children:Re})]},j))})]}),A.jsxs("div",{className:"dock-g link",children:[A.jsxs("div",{className:"dock-h",title:"Hardware commands are not available in the virtual environment",children:["Vehicle link ",A.jsxs("span",{className:"dock-note lbl-long",children:[A.jsx(Ga,{size:11}),"not available"]})]}),A.jsxs("div",{className:"dock-grid one",children:[A.jsxs(Wt,{variant:"locked",silent:!0,onPress:()=>z("HARDWARE UPLINK"),title:"Not available in the virtual environment",children:[A.jsx(Ga,{size:13}),A.jsx("span",{className:"lbl-long",children:"HARDWARE "}),"UPLINK"]}),A.jsxs(Wt,{variant:"locked",silent:!0,onPress:()=>z("GEOFENCE OVERRIDE"),title:"Not available in the virtual environment",children:[A.jsx(Ga,{size:13}),"GEOFENCE",A.jsx("span",{className:"lbl-long",children:" OVERRIDE"})]})]})]})]})]}),A.jsxs("aside",{className:"col right","aria-label":"Mission overview",children:[A.jsxs("section",{className:"panel map-panel",children:[A.jsxs("header",{className:"panel-h",children:[A.jsx("span",{className:"panel-ic",children:A.jsx(hM,{size:15})}),A.jsx("h3",{className:"panel-t",children:"Map"}),A.jsx("span",{className:"panel-aside mono muted",children:"120 × 120 m"})]}),A.jsx("div",{className:"panel-b",children:A.jsx(X2,{engine:t})})]}),A.jsxs("section",{className:"panel",children:[A.jsxs("header",{className:"panel-h",children:[A.jsx("span",{className:"panel-ic",children:A.jsx(QS,{size:15})}),A.jsx("h3",{className:"panel-t",children:"Timeline"})]}),A.jsx("div",{className:"panel-b",children:A.jsx(nC,{snap:e})})]}),A.jsxs("section",{className:"panel log-panel",children:[A.jsxs("header",{className:"panel-h",children:[A.jsx("span",{className:"panel-ic",children:A.jsx(vM,{size:15})}),A.jsx("h3",{className:"panel-t",children:"Event log"})]}),A.jsx("div",{className:"panel-b",children:A.jsx(iC,{log:n})})]})]})]}),d&&A.jsx(lC,{cmd:d,onClose:()=>f(null)})]})}Ev(document.getElementById("root")).render(A.jsx(dC,{}));
