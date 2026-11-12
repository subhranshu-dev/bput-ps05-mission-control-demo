(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var sv={exports:{}},ru={},ov={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),Cy=Symbol.for("react.portal"),Ry=Symbol.for("react.fragment"),by=Symbol.for("react.strict_mode"),Py=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),Dy=Symbol.for("react.forward_ref"),Uy=Symbol.for("react.suspense"),Iy=Symbol.for("react.memo"),Oy=Symbol.for("react.lazy"),_m=Symbol.iterator;function Fy(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lv=Object.assign,cv={};function Lo(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||av}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uv(){}uv.prototype=Lo.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||av}var Bf=zf.prototype=new uv;Bf.constructor=zf;lv(Bf,Lo.prototype);Bf.isPureReactComponent=!0;var xm=Array.isArray,dv=Object.prototype.hasOwnProperty,Hf={current:null},hv={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dv.call(e,i)&&!hv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xa,type:t,key:s,ref:o,props:r,_owner:Hf.current}}function ky(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function zy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ym=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zy(""+t.key):e.toString(36)}function oc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case Cy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nu(o,0):i,xm(r)?(n="",t!=null&&(n=t.replace(ym,"$&/")+"/"),oc(r,e,n,"",function(c){return c})):r!=null&&(Vf(r)&&(r=ky(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ym,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nu(s,a);o+=oc(s,e,n,l,r)}else if(l=Fy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nu(s,a++),o+=oc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var i=[],r=0;return oc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function By(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var En={current:null},ac={transition:null},Hy={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:ac,ReactCurrentOwner:Hf};function pv(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!Vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=Lo;tt.Fragment=Ry;tt.Profiler=Py;tt.PureComponent=zf;tt.StrictMode=by;tt.Suspense=Uy;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;tt.act=pv;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=lv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dv.call(e,l)&&!hv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:Ny,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ly,_context:t},t.Consumer=t};tt.createElement=fv;tt.createFactory=function(t){var e=fv.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:Dy,render:t}};tt.isValidElement=Vf;tt.lazy=function(t){return{$$typeof:Oy,_payload:{_status:-1,_result:t},_init:By}};tt.memo=function(t,e){return{$$typeof:Iy,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=ac.transition;ac.transition={};try{t()}finally{ac.transition=e}};tt.unstable_act=pv;tt.useCallback=function(t,e){return En.current.useCallback(t,e)};tt.useContext=function(t){return En.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return En.current.useDeferredValue(t)};tt.useEffect=function(t,e){return En.current.useEffect(t,e)};tt.useId=function(){return En.current.useId()};tt.useImperativeHandle=function(t,e,n){return En.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return En.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return En.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return En.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return En.current.useReducer(t,e,n)};tt.useRef=function(t){return En.current.useRef(t)};tt.useState=function(t){return En.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return En.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return En.current.useTransition()};tt.version="18.3.1";ov.exports=tt;var ze=ov.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=ze,Gy=Symbol.for("react.element"),Wy=Symbol.for("react.fragment"),jy=Object.prototype.hasOwnProperty,Xy=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$y={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jy.call(e,i)&&!$y.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gy,type:t,key:s,ref:o,props:r,_owner:Xy.current}}ru.Fragment=Wy;ru.jsx=mv;ru.jsxs=mv;sv.exports=ru;var T=sv.exports,gv={exports:{}},Wn={},vv={exports:{}},_v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var Y=D.length;D.push(K);e:for(;0<Y;){var ae=Y-1>>>1,Te=D[ae];if(0<r(Te,K))D[ae]=K,D[Y]=Te,Y=ae;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],Y=D.pop();if(Y!==K){D[0]=Y;e:for(var ae=0,Te=D.length,Ge=Te>>>1;ae<Ge;){var $=2*(ae+1)-1,q=D[$],ue=$+1,me=D[ue];if(0>r(q,Y))ue<Te&&0>r(me,q)?(D[ae]=me,D[ue]=Y,ae=ue):(D[ae]=q,D[$]=Y,ae=$);else if(ue<Te&&0>r(me,Y))D[ae]=me,D[ue]=Y,ae=ue;else break e}}return K}function r(D,K){var Y=D.sortIndex-K.sortIndex;return Y!==0?Y:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=D)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(D){if(y=!1,_(D),!g)if(n(l)!==null)g=!0,W(L);else{var K=n(c);K!==null&&J(S,K.startTime-D)}}function L(D,K){g=!1,y&&(y=!1,h(P),P=-1),p=!0;var Y=f;try{for(_(K),d=n(l);d!==null&&(!(d.expirationTime>K)||D&&!E());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var Te=ae(d.expirationTime<=K);K=t.unstable_now(),typeof Te=="function"?d.callback=Te:d===n(l)&&i(l),_(K)}else i(l);d=n(l)}if(d!==null)var Ge=!0;else{var $=n(c);$!==null&&J(S,$.startTime-K),Ge=!1}return Ge}finally{d=null,f=Y,p=!1}}var C=!1,w=null,P=-1,F=5,x=-1;function E(){return!(t.unstable_now()-x<F)}function I(){if(w!==null){var D=t.unstable_now();x=D;var K=!0;try{K=w(!0,D)}finally{K?z():(C=!1,w=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(I)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,X=V.port2;V.port1.onmessage=I,z=function(){X.postMessage(null)}}else z=function(){m(I,0)};function W(D){w=D,C||(C=!0,z())}function J(D,K){P=m(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,W(L))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var Y=f;f=K;try{return D()}finally{f=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=f;f=D;try{return K()}finally{f=Y}},t.unstable_scheduleCallback=function(D,K,Y){var ae=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Y+Te,D={id:u++,callback:K,priorityLevel:D,startTime:Y,expirationTime:Te,sortIndex:-1},Y>ae?(D.sortIndex=Y,e(c,D),n(l)===null&&D===n(c)&&(y?(h(P),P=-1):y=!0,J(S,Y-ae))):(D.sortIndex=Te,e(l,D),g||p||(g=!0,W(L))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var K=f;return function(){var Y=f;f=K;try{return D.apply(this,arguments)}finally{f=Y}}}})(_v);vv.exports=_v;var Yy=vv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=ze,Gn=Yy;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xv=new Set,wa={};function _s(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(wa[t]=e,t=0;t<e.length;t++)xv.add(e[t])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,Ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sm={},Mm={};function Zy(t){return Zd.call(Mm,t)?!0:Zd.call(Sm,t)?!1:Ky.test(t)?Mm[t]=!0:(Sm[t]=!0,!1)}function Qy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jy(t,e,n,i){if(e===null||typeof e>"u"||Qy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Wf);sn[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Wf);sn[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Wf);sn[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function jf(t,e,n,i){var r=sn.hasOwnProperty(e)?sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jy(e,n,r,i)&&(n=null),i||r===null?Zy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var tr=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),Sv=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),eh=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Mv=Symbol.for("react.offscreen"),Em=Symbol.iterator;function Wo(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var Ut=Object.assign,Du;function la(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Uu=!1;function Iu(t,e){if(!t||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function eS(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Ws:return"Portal";case Qd:return"Profiler";case Xf:return"StrictMode";case Jd:return"Suspense";case eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sv:return(t.displayName||"Context")+".Consumer";case yv:return(t._context.displayName||"Context")+".Provider";case $f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yf:return e=t.displayName||null,e!==null?e:th(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return th(t(e))}catch{}}return null}function tS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return th(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nS(t){var e=Ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=nS(t))}function wv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ev(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nh(t,e){var n=e.checked;return Ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tv(t,e){e=e.checked,e!=null&&jf(t,"checked",e,!1)}function ih(t,e){Tv(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&rh(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rh(t,e,n){(e!=="number"||Tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function so(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ca(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function Av(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iS=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){iS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function bv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function Pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rS=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ah(t,e){if(e){if(rS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uh=null,oo=null,ao=null;function Rm(t){if(t=qa(t)){if(typeof uh!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=cu(e),uh(t.stateNode,t.type,e))}}function Lv(t){oo?ao?ao.push(t):ao=[t]:oo=t}function Nv(){if(oo){var t=oo,e=ao;if(ao=oo=null,Rm(t),e)for(t=0;t<e.length;t++)Rm(e[t])}}function Dv(t,e){return t(e)}function Uv(){}var Ou=!1;function Iv(t,e,n){if(Ou)return t(e,n);Ou=!0;try{return Dv(t,e,n)}finally{Ou=!1,(oo!==null||ao!==null)&&(Uv(),Nv())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var dh=!1;if(Ki)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){dh=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{dh=!1}function sS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var pa=!1,Ac=null,Cc=!1,hh=null,oS={onError:function(t){pa=!0,Ac=t}};function aS(t,e,n,i,r,s,o,a,l){pa=!1,Ac=null,sS.apply(oS,arguments)}function lS(t,e,n,i,r,s,o,a,l){if(aS.apply(this,arguments),pa){if(pa){var c=Ac;pa=!1,Ac=null}else throw Error(ce(198));Cc||(Cc=!0,hh=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bm(t){if(xs(t)!==t)throw Error(ce(188))}function cS(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bm(r),t;if(s===i)return bm(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Fv(t){return t=cS(t),t!==null?kv(t):null}function kv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kv(t);if(e!==null)return e;t=t.sibling}return null}var zv=Gn.unstable_scheduleCallback,Pm=Gn.unstable_cancelCallback,uS=Gn.unstable_shouldYield,dS=Gn.unstable_requestPaint,Ft=Gn.unstable_now,hS=Gn.unstable_getCurrentPriorityLevel,Kf=Gn.unstable_ImmediatePriority,Bv=Gn.unstable_UserBlockingPriority,Rc=Gn.unstable_NormalPriority,fS=Gn.unstable_LowPriority,Hv=Gn.unstable_IdlePriority,su=null,Ri=null;function pS(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:vS,mS=Math.log,gS=Math.LN2;function vS(t){return t>>>=0,t===0?32:31-(mS(t)/gS|0)|0}var al=64,ll=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ua(a):(s&=o,s!==0&&(i=ua(s)))}else o=n&~r,o!==0?i=ua(o):s!==0&&(i=ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function _S(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_S(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vv(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function yS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function Gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wv,Qf,jv,Xv,$v,ph=!1,cl=[],xr=null,yr=null,Sr=null,Ca=new Map,Ra=new Map,pr=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lm(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function Xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qa(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function MS(t,e,n,i,r){switch(e){case"focusin":return xr=Xo(xr,t,e,n,i,r),!0;case"dragenter":return yr=Xo(yr,t,e,n,i,r),!0;case"mouseover":return Sr=Xo(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,Xo(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,Xo(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function Yv(t){var e=es(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,$v(t.priority,function(){jv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ch=i,n.target.dispatchEvent(i),ch=null}else return e=qa(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function Nm(t,e,n){lc(t)&&n.delete(e)}function ES(){ph=!1,xr!==null&&lc(xr)&&(xr=null),yr!==null&&lc(yr)&&(yr=null),Sr!==null&&lc(Sr)&&(Sr=null),Ca.forEach(Nm),Ra.forEach(Nm)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,ph||(ph=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,ES)))}function ba(t){function e(r){return $o(r,t)}if(0<cl.length){$o(cl[0],t);for(var n=1;n<cl.length;n++){var i=cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xr!==null&&$o(xr,t),yr!==null&&$o(yr,t),Sr!==null&&$o(Sr,t),Ca.forEach(e),Ra.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)Yv(n),n.blockedOn===null&&pr.shift()}var lo=tr.ReactCurrentBatchConfig,Pc=!0;function wS(t,e,n,i){var r=gt,s=lo.transition;lo.transition=null;try{gt=1,Jf(t,e,n,i)}finally{gt=r,lo.transition=s}}function TS(t,e,n,i){var r=gt,s=lo.transition;lo.transition=null;try{gt=4,Jf(t,e,n,i)}finally{gt=r,lo.transition=s}}function Jf(t,e,n,i){if(Pc){var r=mh(t,e,n,i);if(r===null)$u(t,e,i,Lc,n),Lm(t,i);else if(MS(r,t,e,n,i))i.stopPropagation();else if(Lm(t,i),e&4&&-1<SS.indexOf(t)){for(;r!==null;){var s=qa(r);if(s!==null&&Wv(s),s=mh(t,e,n,i),s===null&&$u(t,e,i,Lc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $u(t,e,i,null,n)}}var Lc=null;function mh(t,e,n,i){if(Lc=null,t=qf(i),t=es(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lc=t,null}function qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hS()){case Kf:return 1;case Bv:return 4;case Rc:case fS:return 16;case Hv:return 536870912;default:return 16}default:return 16}}var vr=null,ep=null,cc=null;function Kv(){if(cc)return cc;var t,e=ep,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return cc=r.slice(t,1<i?1-i:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Dm(){return!1}function jn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Dm,this.isPropagationStopped=Dm,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=jn(No),Ya=Ut({},No,{view:0,detail:0}),AS=jn(Ya),ku,zu,Yo,ou=Ut({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(ku=t.screenX-Yo.screenX,zu=t.screenY-Yo.screenY):zu=ku=0,Yo=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Um=jn(ou),CS=Ut({},ou,{dataTransfer:0}),RS=jn(CS),bS=Ut({},Ya,{relatedTarget:0}),Bu=jn(bS),PS=Ut({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),LS=jn(PS),NS=Ut({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DS=jn(NS),US=Ut({},No,{data:0}),Im=jn(US),IS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FS[t])?!!e[t]:!1}function np(){return kS}var zS=Ut({},Ya,{key:function(t){if(t.key){var e=IS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BS=jn(zS),HS=Ut({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=jn(HS),VS=Ut({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),GS=jn(VS),WS=Ut({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),jS=jn(WS),XS=Ut({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$S=jn(XS),YS=[9,13,27,32],ip=Ki&&"CompositionEvent"in window,ma=null;Ki&&"documentMode"in document&&(ma=document.documentMode);var qS=Ki&&"TextEvent"in window&&!ma,Zv=Ki&&(!ip||ma&&8<ma&&11>=ma),Fm=" ",km=!1;function Qv(t,e){switch(t){case"keyup":return YS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function KS(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(km=!0,Fm);case"textInput":return t=e.data,t===Fm&&km?null:t;default:return null}}function ZS(t,e){if(Xs)return t==="compositionend"||!ip&&Qv(t,e)?(t=Kv(),cc=ep=vr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zv&&e.locale!=="ko"?null:e.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QS[t.type]:e==="textarea"}function e_(t,e,n,i){Lv(i),e=Nc(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Pa=null;function JS(t){d_(t,0)}function au(t){var e=qs(t);if(wv(e))return t}function eM(t,e){if(t==="change")return e}var t_=!1;if(Ki){var Hu;if(Ki){var Vu="oninput"in document;if(!Vu){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),Vu=typeof Bm.oninput=="function"}Hu=Vu}else Hu=!1;t_=Hu&&(!document.documentMode||9<document.documentMode)}function Hm(){ga&&(ga.detachEvent("onpropertychange",n_),Pa=ga=null)}function n_(t){if(t.propertyName==="value"&&au(Pa)){var e=[];e_(e,Pa,t,qf(t)),Iv(JS,e)}}function tM(t,e,n){t==="focusin"?(Hm(),ga=e,Pa=n,ga.attachEvent("onpropertychange",n_)):t==="focusout"&&Hm()}function nM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(Pa)}function iM(t,e){if(t==="click")return au(e)}function rM(t,e){if(t==="input"||t==="change")return au(e)}function sM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:sM;function La(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zd.call(e,r)||!_i(t[r],e[r]))return!1}return!0}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Vm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vm(n)}}function i_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r_(){for(var t=window,e=Tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tc(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oM(t){var e=r_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i_(n.ownerDocument.documentElement,n)){if(i!==null&&rp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gm(n,s);var o=Gm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aM=Ki&&"documentMode"in document&&11>=document.documentMode,$s=null,gh=null,va=null,vh=!1;function Wm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vh||$s==null||$s!==Tc(i)||(i=$s,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),va&&La(va,i)||(va=i,i=Nc(gh,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$s)))}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},Gu={},s_={};Ki&&(s_=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function lu(t){if(Gu[t])return Gu[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in s_)return Gu[t]=e[n];return t}var o_=lu("animationend"),a_=lu("animationiteration"),l_=lu("animationstart"),c_=lu("transitionend"),u_=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){u_.set(t,e),_s(e,[t])}for(var Wu=0;Wu<jm.length;Wu++){var ju=jm[Wu],lM=ju.toLowerCase(),cM=ju[0].toUpperCase()+ju.slice(1);Lr(lM,"on"+cM)}Lr(o_,"onAnimationEnd");Lr(a_,"onAnimationIteration");Lr(l_,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(c_,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uM=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Xm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lS(i,e,void 0,t),t.currentTarget=null}function d_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xm(r,a,c),s=l}}}if(Cc)throw t=hh,Cc=!1,hh=null,t}function Et(t,e){var n=e[Mh];n===void 0&&(n=e[Mh]=new Set);var i=t+"__bubble";n.has(i)||(h_(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),h_(n,t,i,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[hl]){t[hl]=!0,xv.forEach(function(n){n!=="selectionchange"&&(uM.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Xu("selectionchange",!1,e))}}function h_(t,e,n,i){switch(qv(e)){case 1:var r=wS;break;case 4:r=TS;break;default:r=Jf}n=r.bind(null,e,n,t),r=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $u(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Iv(function(){var c=s,u=qf(n),d=[];e:{var f=u_.get(t);if(f!==void 0){var p=tp,g=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":p=BS;break;case"focusin":g="focus",p=Bu;break;case"focusout":g="blur",p=Bu;break;case"beforeblur":case"afterblur":p=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=RS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GS;break;case o_:case a_:case l_:p=LS;break;case c_:p=jS;break;case"scroll":p=AS;break;case"wheel":p=$S;break;case"copy":case"cut":case"paste":p=DS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Om}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=Aa(v,h),S!=null&&y.push(Da(v,S,_)))),m)break;v=v.return}0<y.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==ch&&(g=n.relatedTarget||n.fromElement)&&(es(g)||g[Zi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?es(g):null,g!==null&&(m=xs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Um,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Om,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:qs(p),_=g==null?f:qs(g),f=new y(S,v+"leave",p,n,u),f.target=m,f.relatedTarget=_,S=null,es(u)===c&&(y=new y(h,v+"enter",g,n,u),y.target=_,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,h=g,v=0,_=y;_;_=ws(_))v++;for(_=0,S=h;S;S=ws(S))_++;for(;0<v-_;)y=ws(y),v--;for(;0<_-v;)h=ws(h),_--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=ws(y),h=ws(h)}y=null}else y=null;p!==null&&$m(d,f,p,y,!1),g!==null&&m!==null&&$m(d,m,g,y,!0)}}e:{if(f=c?qs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var L=eM;else if(zm(f))if(t_)L=rM;else{L=nM;var C=tM}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=iM);if(L&&(L=L(t,c))){e_(d,L,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&rh(f,"number",f.value)}switch(C=c?qs(c):window,t){case"focusin":(zm(C)||C.contentEditable==="true")&&($s=C,gh=c,va=null);break;case"focusout":va=gh=$s=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,Wm(d,n,u);break;case"selectionchange":if(aM)break;case"keydown":case"keyup":Wm(d,n,u)}var w;if(ip)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xs?Qv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Zv&&n.locale!=="ko"&&(Xs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xs&&(w=Kv()):(vr=u,ep="value"in vr?vr.value:vr.textContent,Xs=!0)),C=Nc(c,P),0<C.length&&(P=new Im(P,t,null,n,u),d.push({event:P,listeners:C}),w?P.data=w:(w=Jv(n),w!==null&&(P.data=w)))),(w=qS?KS(t,n):ZS(t,n))&&(c=Nc(c,"onBeforeInput"),0<c.length&&(u=new Im("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=w))}d_(d,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Da(t,s,r)),s=Aa(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $m(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,s),l!=null&&o.unshift(Da(n,l,a))):r||(l=Aa(n,s),l!=null&&o.push(Da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dM=/\r\n?/g,hM=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(dM,`
`).replace(hM,"")}function fl(t,e,n){if(e=Ym(e),Ym(t)!==e&&n)throw Error(ce(425))}function Dc(){}var _h=null,xh=null;function yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,pM=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(mM)}:Sh;function mM(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),wi="__reactFiber$"+Do,Ua="__reactProps$"+Do,Zi="__reactContainer$"+Do,Mh="__reactEvents$"+Do,gM="__reactListeners$"+Do,vM="__reactHandles$"+Do;function es(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zi]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Km(t);t!==null;){if(n=t[wi])return n;t=Km(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[wi]||t[Zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function cu(t){return t[Ua]||null}var Eh=[],Ks=-1;function Nr(t){return{current:t}}function At(t){0>Ks||(t.current=Eh[Ks],Eh[Ks]=null,Ks--)}function yt(t,e){Ks++,Eh[Ks]=t.current,t.current=e}var br={},pn=Nr(br),Rn=Nr(!1),ds=br;function vo(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Uc(){At(Rn),At(pn)}function Zm(t,e,n){if(pn.current!==br)throw Error(ce(168));yt(pn,e),yt(Rn,n)}function f_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,tS(t)||"Unknown",r));return Ut({},n,i)}function Ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,ds=pn.current,yt(pn,t),yt(Rn,Rn.current),!0}function Qm(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=f_(t,e,ds),i.__reactInternalMemoizedMergedChildContext=t,At(Rn),At(pn),yt(pn,t)):At(Rn),yt(Rn,n)}var Bi=null,uu=!1,qu=!1;function p_(t){Bi===null?Bi=[t]:Bi.push(t)}function _M(t){uu=!0,p_(t)}function Dr(){if(!qu&&Bi!==null){qu=!0;var t=0,e=gt;try{var n=Bi;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Bi=null,uu=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(t+1)),zv(Kf,Dr),r}finally{gt=e,qu=!1}}return null}var Zs=[],Qs=0,Oc=null,Fc=0,$n=[],Yn=0,hs=null,Hi=1,Vi="";function Yr(t,e){Zs[Qs++]=Fc,Zs[Qs++]=Oc,Oc=t,Fc=e}function m_(t,e,n){$n[Yn++]=Hi,$n[Yn++]=Vi,$n[Yn++]=hs,hs=t;var i=Hi;t=Vi;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-mi(e)+r|n<<r|i,Vi=s+t}else Hi=1<<s|n<<r|i,Vi=t}function sp(t){t.return!==null&&(Yr(t,1),m_(t,1,0))}function op(t){for(;t===Oc;)Oc=Zs[--Qs],Zs[Qs]=null,Fc=Zs[--Qs],Zs[Qs]=null;for(;t===hs;)hs=$n[--Yn],$n[Yn]=null,Vi=$n[--Yn],$n[Yn]=null,Hi=$n[--Yn],$n[Yn]=null}var Vn=null,Hn=null,Rt=!1,ci=null;function g_(t,e){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vn=t,Hn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vn=t,Hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:Hi,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vn=t,Hn=null,!0):!1;default:return!1}}function wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Th(t){if(Rt){var e=Hn;if(e){var n=e;if(!Jm(t,e)){if(wh(t))throw Error(ce(418));e=Mr(n.nextSibling);var i=Vn;e&&Jm(t,e)?g_(i,n):(t.flags=t.flags&-4097|2,Rt=!1,Vn=t)}}else{if(wh(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Rt=!1,Vn=t}}}function eg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function pl(t){if(t!==Vn)return!1;if(!Rt)return eg(t),Rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yh(t.type,t.memoizedProps)),e&&(e=Hn)){if(wh(t))throw v_(),Error(ce(418));for(;e;)g_(t,e),e=Mr(e.nextSibling)}if(eg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Hn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Hn=null}}else Hn=Vn?Mr(t.stateNode.nextSibling):null;return!0}function v_(){for(var t=Hn;t;)t=Mr(t.nextSibling)}function _o(){Hn=Vn=null,Rt=!1}function ap(t){ci===null?ci=[t]:ci.push(t)}var xM=tr.ReactCurrentBatchConfig;function qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tg(t){var e=t._init;return e(t._payload)}function __(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ar(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,S){return v===null||v.tag!==6?(v=nd(_,h.mode,S),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,S){var L=_.type;return L===js?u(h,v,_.props.children,S,_.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hr&&tg(L)===v.type)?(S=r(v,_.props),S.ref=qo(h,v,_),S.return=h,S):(S=vc(_.type,_.key,_.props,null,h.mode,S),S.ref=qo(h,v,_),S.return=h,S)}function c(h,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=id(_,h.mode,S),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function u(h,v,_,S,L){return v===null||v.tag!==7?(v=os(_,h.mode,S,L),v.return=h,v):(v=r(v,_),v.return=h,v)}function d(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nd(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rl:return _=vc(v.type,v.key,v.props,null,h.mode,_),_.ref=qo(h,null,v),_.return=h,_;case Ws:return v=id(v,h.mode,_),v.return=h,v;case hr:var S=v._init;return d(h,S(v._payload),_)}if(ca(v)||Wo(v))return v=os(v,h.mode,_,null),v.return=h,v;ml(h,v)}return null}function f(h,v,_,S){var L=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:a(h,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:return _.key===L?l(h,v,_,S):null;case Ws:return _.key===L?c(h,v,_,S):null;case hr:return L=_._init,f(h,v,L(_._payload),S)}if(ca(_)||Wo(_))return L!==null?null:u(h,v,_,S,null);ml(h,_)}return null}function p(h,v,_,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(v,h,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case rl:return h=h.get(S.key===null?_:S.key)||null,l(v,h,S,L);case Ws:return h=h.get(S.key===null?_:S.key)||null,c(v,h,S,L);case hr:var C=S._init;return p(h,v,_,C(S._payload),L)}if(ca(S)||Wo(S))return h=h.get(_)||null,u(v,h,S,L,null);ml(v,S)}return null}function g(h,v,_,S){for(var L=null,C=null,w=v,P=v=0,F=null;w!==null&&P<_.length;P++){w.index>P?(F=w,w=null):F=w.sibling;var x=f(h,w,_[P],S);if(x===null){w===null&&(w=F);break}t&&w&&x.alternate===null&&e(h,w),v=s(x,v,P),C===null?L=x:C.sibling=x,C=x,w=F}if(P===_.length)return n(h,w),Rt&&Yr(h,P),L;if(w===null){for(;P<_.length;P++)w=d(h,_[P],S),w!==null&&(v=s(w,v,P),C===null?L=w:C.sibling=w,C=w);return Rt&&Yr(h,P),L}for(w=i(h,w);P<_.length;P++)F=p(w,h,P,_[P],S),F!==null&&(t&&F.alternate!==null&&w.delete(F.key===null?P:F.key),v=s(F,v,P),C===null?L=F:C.sibling=F,C=F);return t&&w.forEach(function(E){return e(h,E)}),Rt&&Yr(h,P),L}function y(h,v,_,S){var L=Wo(_);if(typeof L!="function")throw Error(ce(150));if(_=L.call(_),_==null)throw Error(ce(151));for(var C=L=null,w=v,P=v=0,F=null,x=_.next();w!==null&&!x.done;P++,x=_.next()){w.index>P?(F=w,w=null):F=w.sibling;var E=f(h,w,x.value,S);if(E===null){w===null&&(w=F);break}t&&w&&E.alternate===null&&e(h,w),v=s(E,v,P),C===null?L=E:C.sibling=E,C=E,w=F}if(x.done)return n(h,w),Rt&&Yr(h,P),L;if(w===null){for(;!x.done;P++,x=_.next())x=d(h,x.value,S),x!==null&&(v=s(x,v,P),C===null?L=x:C.sibling=x,C=x);return Rt&&Yr(h,P),L}for(w=i(h,w);!x.done;P++,x=_.next())x=p(w,h,P,x.value,S),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?P:x.key),v=s(x,v,P),C===null?L=x:C.sibling=x,C=x);return t&&w.forEach(function(I){return e(h,I)}),Rt&&Yr(h,P),L}function m(h,v,_,S){if(typeof _=="object"&&_!==null&&_.type===js&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case rl:e:{for(var L=_.key,C=v;C!==null;){if(C.key===L){if(L=_.type,L===js){if(C.tag===7){n(h,C.sibling),v=r(C,_.props.children),v.return=h,h=v;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hr&&tg(L)===C.type){n(h,C.sibling),v=r(C,_.props),v.ref=qo(h,C,_),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}_.type===js?(v=os(_.props.children,h.mode,S,_.key),v.return=h,h=v):(S=vc(_.type,_.key,_.props,null,h.mode,S),S.ref=qo(h,v,_),S.return=h,h=S)}return o(h);case Ws:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=id(_,h.mode,S),v.return=h,h=v}return o(h);case hr:return C=_._init,m(h,v,C(_._payload),S)}if(ca(_))return g(h,v,_,S);if(Wo(_))return y(h,v,_,S);ml(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=nd(_,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return m}var xo=__(!0),x_=__(!1),kc=Nr(null),zc=null,Js=null,lp=null;function cp(){lp=Js=zc=null}function up(t){var e=kc.current;At(kc),t._currentValue=e}function Ah(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function co(t,e){zc=t,lp=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function Jn(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(zc===null)throw Error(ce(308));Js=t,zc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var ts=null;function dp(t){ts===null?ts=[t]:ts.push(t)}function y_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Qi(t,i)}function Qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(t,n)}return r=i.interleaved,r===null?(e.next=e,dp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(t,n)}function dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zf(t,n)}}function ng(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bc(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Ut({},d,f);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=d}}function ig(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Ka={},bi=Nr(Ka),Ia=Nr(Ka),Oa=Nr(Ka);function ns(t){if(t===Ka)throw Error(ce(174));return t}function fp(t,e){switch(yt(Oa,e),yt(Ia,t),yt(bi,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oh(e,t)}At(bi),yt(bi,e)}function yo(){At(bi),At(Ia),At(Oa)}function M_(t){ns(Oa.current);var e=ns(bi.current),n=oh(e,t.type);e!==n&&(yt(Ia,t),yt(bi,n))}function pp(t){Ia.current===t&&(At(bi),At(Ia))}var Lt=Nr(0);function Hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function mp(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var hc=tr.ReactCurrentDispatcher,Zu=tr.ReactCurrentBatchConfig,fs=0,Dt=null,Gt=null,Zt=null,Vc=!1,_a=!1,Fa=0,yM=0;function ln(){throw Error(ce(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function vp(t,e,n,i,r,s){if(fs=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hc.current=t===null||t.memoizedState===null?wM:TM,t=n(i,r),_a){s=0;do{if(_a=!1,Fa=0,25<=s)throw Error(ce(301));s+=1,Zt=Gt=null,e.updateQueue=null,hc.current=AM,t=n(i,r)}while(_a)}if(hc.current=Gc,e=Gt!==null&&Gt.next!==null,fs=0,Zt=Gt=Dt=null,Vc=!1,e)throw Error(ce(300));return t}function _p(){var t=Fa!==0;return Fa=0,t}function Mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Dt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function ei(){if(Gt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=Zt===null?Dt.memoizedState:Zt.next;if(e!==null)Zt=e,Gt=t;else{if(t===null)throw Error(ce(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Zt===null?Dt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function ka(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=ei(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((fs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Dt.lanes|=u,ps|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,_i(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Dt.lanes|=s,ps|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=ei(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);_i(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function E_(){}function w_(t,e){var n=Dt,i=ei(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,Cn=!0),i=i.queue,xp(C_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,za(9,A_.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(ce(349));fs&30||T_(n,e,r)}return r}function T_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A_(t,e,n,i){e.value=n,e.getSnapshot=i,R_(e)&&b_(t)}function C_(t,e,n){return n(function(){R_(e)&&b_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function b_(t){var e=Qi(t,1);e!==null&&gi(e,t,1,-1)}function rg(t){var e=Mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=EM.bind(null,Dt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function P_(){return ei().memoizedState}function fc(t,e,n,i){var r=Mi();Dt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function du(t,e,n,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var o=Gt.memoizedState;if(s=o.destroy,i!==null&&gp(i,o.deps)){r.memoizedState=za(e,n,s,i);return}}Dt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function sg(t,e){return fc(8390656,8,t,e)}function xp(t,e){return du(2048,8,t,e)}function L_(t,e){return du(4,2,t,e)}function N_(t,e){return du(4,4,t,e)}function D_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,D_.bind(null,e,t),n)}function yp(){}function I_(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F_(t,e,n){return fs&21?(_i(n,e)||(n=Vv(),Dt.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function SM(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=Zu.transition;Zu.transition={};try{t(!1),e()}finally{gt=n,Zu.transition=i}}function k_(){return ei().memoizedState}function MM(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},z_(t))B_(e,n);else if(n=y_(t,e,n,i),n!==null){var r=yn();gi(n,t,i,r),H_(n,e,i)}}function EM(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(z_(t))B_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,_i(a,o)){var l=e.interleaved;l===null?(r.next=r,dp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=y_(t,e,r,i),n!==null&&(r=yn(),gi(n,t,i,r),H_(n,e,i))}}function z_(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function B_(t,e){_a=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function H_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zf(t,n)}}var Gc={readContext:Jn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},wM={readContext:Jn,useCallback:function(t,e){return Mi().memoizedState=[t,e===void 0?null:e],t},useContext:Jn,useEffect:sg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4194308,4,D_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=Mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=MM.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=Mi();return t={current:t},e.memoizedState=t},useState:rg,useDebugValue:yp,useDeferredValue:function(t){return Mi().memoizedState=t},useTransition:function(){var t=rg(!1),e=t[0];return t=SM.bind(null,t[1]),Mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,r=Mi();if(Rt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Qt===null)throw Error(ce(349));fs&30||T_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sg(C_.bind(null,i,s,t),[t]),i.flags|=2048,za(9,A_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Mi(),e=Qt.identifierPrefix;if(Rt){var n=Vi,i=Hi;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TM={readContext:Jn,useCallback:I_,useContext:Jn,useEffect:xp,useImperativeHandle:U_,useInsertionEffect:L_,useLayoutEffect:N_,useMemo:O_,useReducer:Qu,useRef:P_,useState:function(){return Qu(ka)},useDebugValue:yp,useDeferredValue:function(t){var e=ei();return F_(e,Gt.memoizedState,t)},useTransition:function(){var t=Qu(ka)[0],e=ei().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:w_,useId:k_,unstable_isNewReconciler:!1},AM={readContext:Jn,useCallback:I_,useContext:Jn,useEffect:xp,useImperativeHandle:U_,useInsertionEffect:L_,useLayoutEffect:N_,useMemo:O_,useReducer:Ju,useRef:P_,useState:function(){return Ju(ka)},useDebugValue:yp,useDeferredValue:function(t){var e=ei();return Gt===null?e.memoizedState=t:F_(e,Gt.memoizedState,t)},useTransition:function(){var t=Ju(ka)[0],e=ei().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:w_,useId:k_,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=Ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ch(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Tr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(gi(e,t,r,i),dc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=Tr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(gi(e,t,r,i),dc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=Tr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(gi(e,t,i,n),dc(e,t,i))}};function og(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function V_(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=bn(e)?ds:pn.current,i=e.contextTypes,s=(i=i!=null)?vo(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ag(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=bn(e)?ds:pn.current,r.context=vo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ch(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hu.enqueueReplaceState(r,r.state,null),Bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",i=e;do n+=eS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CM=typeof WeakMap=="function"?WeakMap:Map;function G_(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jc||(jc=!0,zh=i),bh(t,e)},n}function W_(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bh(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new CM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=HM.bind(null,t,e,n),e.then(t,t))}function cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ug(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var RM=tr.ReactCurrentOwner,Cn=!1;function vn(t,e,n,i){e.child=t===null?x_(e,null,n,i):xo(e,t.child,n,i)}function dg(t,e,n,i,r){n=n.render;var s=e.ref;return co(e,r),i=vp(t,e,n,i,s,r),n=_p(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(Rt&&n&&sp(e),e.flags|=1,vn(t,e,i,r),e.child)}function hg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j_(t,e,s,i,r)):(t=vc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=Ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function j_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return Ph(t,e,n,i,r)}function X_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(to,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(to,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(to,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(to,Fn),Fn|=i;return vn(t,e,r,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ph(t,e,n,i,r){var s=bn(n)?ds:pn.current;return s=vo(e,s),co(e,r),n=vp(t,e,n,i,s,r),i=_p(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(Rt&&i&&sp(e),e.flags|=1,vn(t,e,n,r),e.child)}function fg(t,e,n,i,r){if(bn(n)){var s=!0;Ic(e)}else s=!1;if(co(e,r),e.stateNode===null)pc(t,e),V_(e,n,i),Rh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=bn(n)?ds:pn.current,c=vo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ag(e,o,i,c),fr=!1;var f=e.memoizedState;o.state=f,Bc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Rn.current||fr?(typeof u=="function"&&(Ch(e,n,u,i),l=e.memoizedState),(a=fr||og(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,S_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=bn(n)?ds:pn.current,l=vo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ag(e,o,i,l),fr=!1,f=e.memoizedState,o.state=f,Bc(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Rn.current||fr?(typeof p=="function"&&(Ch(e,n,p,i),g=e.memoizedState),(c=fr||og(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Lh(t,e,n,i,s,r)}function Lh(t,e,n,i,r,s){$_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qm(e,n,!1),Ji(t,e,s);i=e.stateNode,RM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=xo(e,t.child,null,s),e.child=xo(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Qm(e,n,!0),e.child}function Y_(t){var e=t.stateNode;e.pendingContext?Zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zm(t,e.context,!1),fp(t,e.containerInfo)}function pg(t,e,n,i,r){return _o(),ap(r),e.flags|=256,vn(t,e,n,i),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function q_(t,e,n){var i=e.pendingProps,r=Lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Lt,r&1),t===null)return Th(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dh(n),e.memoizedState=Nh,t):Sp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nh,i}return s=t.child,t=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sp(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,i){return i!==null&&ap(i),xo(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ed(Error(ce(422))),gl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mu({mode:"visible",children:i.children},r,0,null),s=os(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xo(e,t.child,null,o),e.child.memoizedState=Dh(o),e.memoizedState=Nh,s);if(!(e.mode&1))return gl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=ed(s,i,void 0),gl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Cn||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(t,r),gi(i,t,r,-1))}return Cp(),i=ed(Error(ce(421))),gl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=VM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Hn=Mr(r.nextSibling),Vn=e,Rt=!0,ci=null,t!==null&&($n[Yn++]=Hi,$n[Yn++]=Vi,$n[Yn++]=hs,Hi=t.id,Vi=t.overflow,hs=e),e=Sp(e,i.children),e.flags|=4096,e)}function mg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ah(t.return,e,n)}function td(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function K_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mg(t,n,e);else if(t.tag===19)mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),td(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}td(e,!0,n,null,s);break;case"together":td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PM(t,e,n){switch(e.tag){case 3:Y_(e),_o();break;case 5:M_(e);break;case 1:bn(e.type)&&Ic(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Lt,Lt.current&1),e.flags|=128,null):n&e.child.childLanes?q_(t,e,n):(yt(Lt,Lt.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);yt(Lt,Lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return K_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Lt,Lt.current),i)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n)}return Ji(t,e,n)}var Z_,Uh,Q_,J_;Z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uh=function(){};Q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ns(bi.current);var s=null;switch(n){case"input":r=nh(t,r),i=nh(t,i),s=[];break;case"select":r=Ut({},r,{value:void 0}),i=Ut({},i,{value:void 0}),s=[];break;case"textarea":r=sh(t,r),i=sh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Dc)}ah(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};J_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ko(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function LM(t,e,n){var i=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return bn(e.type)&&Uc(),cn(e),null;case 3:return i=e.stateNode,yo(),At(Rn),At(pn),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Vh(ci),ci=null))),Uh(t,e),cn(e),null;case 5:pp(e);var r=ns(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)Q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return cn(e),null}if(t=ns(bi.current),pl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[Ua]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)Et(da[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":wm(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":Am(i,s),Et("invalid",i)}ah(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",""+a]):wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":sl(i),Tm(i,s,!0);break;case"textarea":sl(i),Cm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[wi]=e,t[Ua]=i,Z_(t,e,!1,!1),e.stateNode=t;e:{switch(o=lh(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)Et(da[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":wm(t,i),r=nh(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ut({},i,{value:void 0}),Et("invalid",t);break;case"textarea":Am(t,i),r=sh(t,i),Et("invalid",t);break;default:r=i}ah(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&jf(t,s,l,o))}switch(n){case"input":sl(t),Tm(t,i,!1);break;case"textarea":sl(t),Cm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?so(t,!!i.multiple,s,!1):i.defaultValue!=null&&so(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Dc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)J_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=ns(Oa.current),ns(bi.current),pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==n)&&(t=Vn,t!==null))switch(t.tag){case 3:fl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return cn(e),null;case 13:if(At(Lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&Hn!==null&&e.mode&1&&!(e.flags&128))v_(),_o(),e.flags|=98560,s=!1;else if(s=pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[wi]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else ci!==null&&(Vh(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Lt.current&1?jt===0&&(jt=3):Cp())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return yo(),Uh(t,e),t===null&&Na(e.stateNode.containerInfo),cn(e),null;case 10:return up(e.type._context),cn(e),null;case 17:return bn(e.type)&&Uc(),cn(e),null;case 19:if(At(Lt),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ko(s,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hc(t),o!==null){for(e.flags|=128,Ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Lt,Lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>Mo&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Rt)return cn(e),null}else 2*Ft()-s.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Lt.current,yt(Lt,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return Ap(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function NM(t,e){switch(op(e),e.tag){case 1:return bn(e.type)&&Uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yo(),At(Rn),At(pn),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(At(Lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));_o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return At(Lt),null;case 4:return yo(),null;case 10:return up(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var vl=!1,fn=!1,DM=typeof WeakSet=="function"?WeakSet:Set,we=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ot(t,e,i)}else n.current=null}function Ih(t,e,n){try{n()}catch(i){Ot(t,e,i)}}var gg=!1;function UM(t,e){if(_h=Pc,t=r_(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},Pc=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ai(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Ot(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return g=gg,gg=!1,g}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ih(e,n,s)}r=r.next}while(r!==i)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ex(t){var e=t.alternate;e!==null&&(t.alternate=null,ex(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[Ua],delete e[Mh],delete e[gM],delete e[vM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tx(t){return t.tag===5||t.tag===3||t.tag===4}function vg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dc));else if(i!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function kh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}var tn=null,li=!1;function ir(t,e,n){for(n=n.child;n!==null;)nx(t,e,n),n=n.sibling}function nx(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:fn||eo(n,e);case 6:var i=tn,r=li;tn=null,ir(t,e,n),tn=i,li=r,tn!==null&&(li?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(li?(t=tn,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),ba(t)):Yu(tn,n.stateNode));break;case 4:i=tn,r=li,tn=n.stateNode.containerInfo,li=!0,ir(t,e,n),tn=i,li=r;break;case 0:case 11:case 14:case 15:if(!fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!fn&&(eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ot(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(fn=(i=fn)||n.memoizedState!==null,ir(t,e,n),fn=i):ir(t,e,n);break;default:ir(t,e,n)}}function _g(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DM),e.forEach(function(i){var r=GM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,li=!1;break e;case 3:tn=a.stateNode.containerInfo,li=!0;break e;case 4:tn=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(tn===null)throw Error(ce(160));nx(s,o,r),tn=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ot(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ix(e,t),e=e.sibling}function ix(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),xi(t),i&4){try{xa(3,t,t.return),fu(3,t)}catch(y){Ot(t,t.return,y)}try{xa(5,t,t.return)}catch(y){Ot(t,t.return,y)}}break;case 1:ni(e,t),xi(t),i&512&&n!==null&&eo(n,n.return);break;case 5:if(ni(e,t),xi(t),i&512&&n!==null&&eo(n,n.return),t.flags&32){var r=t.stateNode;try{Ta(r,"")}catch(y){Ot(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tv(r,s),lh(a,o);var c=lh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Pv(r,d):u==="dangerouslySetInnerHTML"?Rv(r,d):u==="children"?Ta(r,d):jf(r,u,d,c)}switch(a){case"input":ih(r,s);break;case"textarea":Av(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?so(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?so(r,!!s.multiple,s.defaultValue,!0):so(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ua]=s}catch(y){Ot(t,t.return,y)}}break;case 6:if(ni(e,t),xi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ot(t,t.return,y)}}break;case 3:if(ni(e,t),xi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(y){Ot(t,t.return,y)}break;case 4:ni(e,t),xi(t);break;case 13:ni(e,t),xi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wp=Ft())),i&4&&_g(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(fn=(c=fn)||u,ni(e,t),fn=c):ni(e,t),xi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(we=t,u=t.child;u!==null;){for(d=we=u;we!==null;){switch(f=we,p=f.child,f.tag){case 0:case 11:case 14:case 15:xa(4,f,f.return);break;case 1:eo(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ot(i,n,y)}}break;case 5:eo(f,f.return);break;case 22:if(f.memoizedState!==null){yg(d);continue}}p!==null?(p.return=f,we=p):yg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bv("display",o))}catch(y){Ot(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Ot(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ni(e,t),xi(t),i&4&&_g(t);break;case 21:break;default:ni(e,t),xi(t)}}function xi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tx(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ta(r,""),i.flags&=-33);var s=vg(t);kh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vg(t);Fh(t,a,o);break;default:throw Error(ce(161))}}catch(l){Ot(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IM(t,e,n){we=t,rx(t)}function rx(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||vl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||fn;a=vl;var c=fn;if(vl=o,(fn=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?Sg(r):l!==null?(l.return=o,we=l):Sg(r);for(;s!==null;)we=s,rx(s),s=s.sibling;we=r,vl=a,fn=c}xg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):xg(t)}}function xg(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:fn||fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!fn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ig(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ig(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ba(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}fn||e.flags&512&&Oh(e)}catch(f){Ot(e,e.return,f)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function yg(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Sg(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(l){Ot(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ot(e,r,l)}}var s=e.return;try{Oh(e)}catch(l){Ot(e,s,l)}break;case 5:var o=e.return;try{Oh(e)}catch(l){Ot(e,o,l)}}}catch(l){Ot(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var OM=Math.ceil,Wc=tr.ReactCurrentDispatcher,Mp=tr.ReactCurrentOwner,Qn=tr.ReactCurrentBatchConfig,ct=0,Qt=null,Vt=null,rn=0,Fn=0,to=Nr(0),jt=0,Ba=null,ps=0,pu=0,Ep=0,ya=null,Tn=null,wp=0,Mo=1/0,zi=null,jc=!1,zh=null,wr=null,_l=!1,_r=null,Xc=0,Sa=0,Bh=null,mc=-1,gc=0;function yn(){return ct&6?Ft():mc!==-1?mc:mc=Ft()}function Tr(t){return t.mode&1?ct&2&&rn!==0?rn&-rn:xM.transition!==null?(gc===0&&(gc=Vv()),gc):(t=gt,t!==0||(t=window.event,t=t===void 0?16:qv(t.type)),t):1}function gi(t,e,n,i){if(50<Sa)throw Sa=0,Bh=null,Error(ce(185));$a(t,n,i),(!(ct&2)||t!==Qt)&&(t===Qt&&(!(ct&2)&&(pu|=n),jt===4&&mr(t,rn)),Pn(t,i),n===1&&ct===0&&!(e.mode&1)&&(Mo=Ft()+500,uu&&Dr()))}function Pn(t,e){var n=t.callbackNode;xS(t,e);var i=bc(t,t===Qt?rn:0);if(i===0)n!==null&&Pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pm(n),e===1)t.tag===0?_M(Mg.bind(null,t)):p_(Mg.bind(null,t)),pM(function(){!(ct&6)&&Dr()}),n=null;else{switch(Gv(i)){case 1:n=Kf;break;case 4:n=Bv;break;case 16:n=Rc;break;case 536870912:n=Hv;break;default:n=Rc}n=hx(n,sx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sx(t,e){if(mc=-1,gc=0,ct&6)throw Error(ce(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var i=bc(t,t===Qt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$c(t,i);else{e=i;var r=ct;ct|=2;var s=ax();(Qt!==t||rn!==e)&&(zi=null,Mo=Ft()+500,ss(t,e));do try{zM();break}catch(a){ox(t,a)}while(!0);cp(),Wc.current=s,ct=r,Vt!==null?e=0:(Qt=null,rn=0,e=jt)}if(e!==0){if(e===2&&(r=fh(t),r!==0&&(i=r,e=Hh(t,r))),e===1)throw n=Ba,ss(t,0),mr(t,i),Pn(t,Ft()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!FM(r)&&(e=$c(t,i),e===2&&(s=fh(t),s!==0&&(i=s,e=Hh(t,s))),e===1))throw n=Ba,ss(t,0),mr(t,i),Pn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:qr(t,Tn,zi);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=wp+500-Ft(),10<e)){if(bc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sh(qr.bind(null,t,Tn,zi),e);break}qr(t,Tn,zi);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*OM(i/1960))-i,10<i){t.timeoutHandle=Sh(qr.bind(null,t,Tn,zi),i);break}qr(t,Tn,zi);break;case 5:qr(t,Tn,zi);break;default:throw Error(ce(329))}}}return Pn(t,Ft()),t.callbackNode===n?sx.bind(null,t):null}function Hh(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=$c(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&Vh(e)),t}function Vh(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function FM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Ep,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function Mg(t){if(ct&6)throw Error(ce(327));uo();var e=bc(t,0);if(!(e&1))return Pn(t,Ft()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var i=fh(t);i!==0&&(e=i,n=Hh(t,i))}if(n===1)throw n=Ba,ss(t,0),mr(t,e),Pn(t,Ft()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,Tn,zi),Pn(t,Ft()),null}function Tp(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(Mo=Ft()+500,uu&&Dr())}}function ms(t){_r!==null&&_r.tag===0&&!(ct&6)&&uo();var e=ct;ct|=1;var n=Qn.transition,i=gt;try{if(Qn.transition=null,gt=1,t)return t()}finally{gt=i,Qn.transition=n,ct=e,!(ct&6)&&Dr()}}function Ap(){Fn=to.current,At(to)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fM(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(op(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:yo(),At(Rn),At(pn),mp();break;case 5:pp(i);break;case 4:yo();break;case 13:At(Lt);break;case 19:At(Lt);break;case 10:up(i.type._context);break;case 22:case 23:Ap()}n=n.return}if(Qt=t,Vt=t=Ar(t.current,null),rn=Fn=e,jt=0,Ba=null,Ep=pu=ps=0,Tn=ya=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ts=null}return t}function ox(t,e){do{var n=Vt;try{if(cp(),hc.current=Gc,Vc){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vc=!1}if(fs=0,Zt=Gt=Dt=null,_a=!1,Fa=0,Mp.current=null,n===null||n.return===null){jt=1,Ba=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=cg(o);if(p!==null){p.flags&=-257,ug(p,o,a,s,e),p.mode&1&&lg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){lg(s,c,e),Cp();break e}l=Error(ce(426))}}else if(Rt&&a.mode&1){var m=cg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ug(m,o,a,s,e),ap(So(l,a));break e}}s=l=So(l,a),jt!==4&&(jt=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=G_(s,l,e);ng(s,h);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(wr===null||!wr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=W_(s,a,e);ng(s,S);break e}}s=s.return}while(s!==null)}cx(n)}catch(L){e=L,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function ax(){var t=Wc.current;return Wc.current=Gc,t===null?Gc:t}function Cp(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||!(ps&268435455)&&!(pu&268435455)||mr(Qt,rn)}function $c(t,e){var n=ct;ct|=2;var i=ax();(Qt!==t||rn!==e)&&(zi=null,ss(t,e));do try{kM();break}catch(r){ox(t,r)}while(!0);if(cp(),ct=n,Wc.current=i,Vt!==null)throw Error(ce(261));return Qt=null,rn=0,jt}function kM(){for(;Vt!==null;)lx(Vt)}function zM(){for(;Vt!==null&&!uS();)lx(Vt)}function lx(t){var e=dx(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?cx(t):Vt=e,Mp.current=null}function cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NM(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Vt=null;return}}else if(n=LM(n,e,Fn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);jt===0&&(jt=5)}function qr(t,e,n){var i=gt,r=Qn.transition;try{Qn.transition=null,gt=1,BM(t,e,n,i)}finally{Qn.transition=r,gt=i}return null}function BM(t,e,n,i){do uo();while(_r!==null);if(ct&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yS(t,s),t===Qt&&(Vt=Qt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,hx(Rc,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=gt;gt=1;var a=ct;ct|=4,Mp.current=null,UM(t,n),ix(n,t),oM(xh),Pc=!!_h,xh=_h=null,t.current=n,IM(n),dS(),ct=a,gt=o,Qn.transition=s}else t.current=n;if(_l&&(_l=!1,_r=t,Xc=r),s=t.pendingLanes,s===0&&(wr=null),pS(n.stateNode),Pn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jc)throw jc=!1,t=zh,zh=null,t;return Xc&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===Bh?Sa++:(Sa=0,Bh=t):Sa=0,Dr(),null}function uo(){if(_r!==null){var t=Gv(Xc),e=Qn.transition,n=gt;try{if(Qn.transition=null,gt=16>t?16:t,_r===null)var i=!1;else{if(t=_r,_r=null,Xc=0,ct&6)throw Error(ce(331));var r=ct;for(ct|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:xa(8,u,s)}var d=u.child;if(d!==null)d.return=u,we=d;else for(;we!==null;){u=we;var f=u.sibling,p=u.return;if(ex(u),u===c){we=null;break}if(f!==null){f.return=p,we=f;break}we=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,we=h;break e}we=s.return}}var v=t.current;for(we=v;we!==null;){o=we;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,we=_;else e:for(o=v;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fu(9,a)}}catch(L){Ot(a,a.return,L)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if(ct=r,Dr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(su,t)}catch{}i=!0}return i}finally{gt=n,Qn.transition=e}}return!1}function Eg(t,e,n){e=So(n,e),e=G_(t,e,1),t=Er(t,e,1),e=yn(),t!==null&&($a(t,1,e),Pn(t,e))}function Ot(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=So(n,t),t=W_(e,t,1),e=Er(e,t,1),t=yn(),e!==null&&($a(e,1,t),Pn(e,t));break}}e=e.return}}function HM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(rn&n)===n&&(jt===4||jt===3&&(rn&130023424)===rn&&500>Ft()-wp?ss(t,0):Ep|=n),Pn(t,e)}function ux(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=yn();t=Qi(t,e),t!==null&&($a(t,e,n),Pn(t,n))}function VM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ux(t,n)}function GM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),ux(t,n)}var dx;dx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,PM(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,Rt&&e.flags&1048576&&m_(e,Fc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pc(t,e),t=e.pendingProps;var r=vo(e,pn.current);co(e,n),r=vp(null,e,i,t,r,n);var s=_p();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hp(e),r.updater=hu,e.stateNode=r,r._reactInternals=e,Rh(e,i,t,n),e=Lh(null,e,i,!0,s,n)):(e.tag=0,Rt&&s&&sp(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jM(i),t=ai(i,t),r){case 0:e=Ph(null,e,i,t,n);break e;case 1:e=fg(null,e,i,t,n);break e;case 11:e=dg(null,e,i,t,n);break e;case 14:e=hg(null,e,i,ai(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Ph(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),fg(t,e,i,r,n);case 3:e:{if(Y_(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,S_(t,e),Bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=So(Error(ce(423)),e),e=pg(t,e,i,n,r);break e}else if(i!==r){r=So(Error(ce(424)),e),e=pg(t,e,i,n,r);break e}else for(Hn=Mr(e.stateNode.containerInfo.firstChild),Vn=e,Rt=!0,ci=null,n=x_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_o(),i===r){e=Ji(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return M_(e),t===null&&Th(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yh(i,r)?o=null:s!==null&&yh(i,s)&&(e.flags|=32),$_(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&Th(e),null;case 13:return q_(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xo(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),dg(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(kc,i._currentValue),i._currentValue=o,s!==null)if(_i(s.value,o)){if(s.children===r.children&&!Rn.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ah(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,co(e,n),r=Jn(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),hg(t,e,i,r,n);case 15:return j_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),pc(t,e),e.tag=1,bn(i)?(t=!0,Ic(e)):t=!1,co(e,n),V_(e,i,r),Rh(e,i,r,n),Lh(null,e,i,!0,t,n);case 19:return K_(t,e,n);case 22:return X_(t,e,n)}throw Error(ce(156,e.tag))};function hx(t,e){return zv(t,e)}function WM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,e,n,i){return new WM(t,e,n,i)}function Rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jM(t){if(typeof t=="function")return Rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$f)return 11;if(t===Yf)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return os(n.children,r,s,e);case Xf:o=8,r|=8;break;case Qd:return t=Kn(12,n,e,r|2),t.elementType=Qd,t.lanes=s,t;case Jd:return t=Kn(13,n,e,r),t.elementType=Jd,t.lanes=s,t;case eh:return t=Kn(19,n,e,r),t.elementType=eh,t.lanes=s,t;case Mv:return mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yv:o=10;break e;case Sv:o=9;break e;case $f:o=11;break e;case Yf:o=14;break e;case hr:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Kn(7,t,i,e),t.lanes=n,t}function mu(t,e,n,i){return t=Kn(22,t,i,e),t.elementType=Mv,t.lanes=n,t.stateNode={isHidden:!1},t}function nd(t,e,n){return t=Kn(6,t,null,e),t.lanes=n,t}function id(t,e,n){return e=Kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,i,r,s,o,a,l){return t=new XM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(s),t}function $M(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fx(t){if(!t)return br;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(bn(n))return f_(t,n,e)}return e}function px(t,e,n,i,r,s,o,a,l){return t=bp(n,i,!0,t,r,s,o,a,l),t.context=fx(null),n=t.current,i=yn(),r=Tr(n),s=Xi(i,r),s.callback=e??null,Er(n,s,r),t.current.lanes=r,$a(t,r,i),Pn(t,i),t}function gu(t,e,n,i){var r=e.current,s=yn(),o=Tr(r);return n=fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,o),t!==null&&(gi(t,r,o,s),dc(t,r,o)),o}function Yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pp(t,e){wg(t,e),(t=t.alternate)&&wg(t,e)}function YM(){return null}var mx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lp(t){this._internalRoot=t}vu.prototype.render=Lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));gu(t,e,null,null)};vu.prototype.unmount=Lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){gu(null,t,null,null)}),e[Zi]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&Yv(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tg(){}function qM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yc(o);s.call(c)}}var o=px(e,i,t,0,null,!1,!1,"",Tg);return t._reactRootContainer=o,t[Zi]=o.current,Na(t.nodeType===8?t.parentNode:t),ms(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yc(l);a.call(c)}}var l=bp(t,0,!1,null,null,!1,!1,"",Tg);return t._reactRootContainer=l,t[Zi]=l.current,Na(t.nodeType===8?t.parentNode:t),ms(function(){gu(e,l,n,i)}),l}function xu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yc(o);a.call(l)}}gu(e,o,t,r)}else o=qM(n,e,t,r,i);return Yc(o)}Wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(Zf(e,n|1),Pn(e,Ft()),!(ct&6)&&(Mo=Ft()+500,Dr()))}break;case 13:ms(function(){var i=Qi(t,1);if(i!==null){var r=yn();gi(i,t,1,r)}}),Pp(t,1)}};Qf=function(t){if(t.tag===13){var e=Qi(t,134217728);if(e!==null){var n=yn();gi(e,t,134217728,n)}Pp(t,134217728)}};jv=function(t){if(t.tag===13){var e=Tr(t),n=Qi(t,e);if(n!==null){var i=yn();gi(n,t,e,i)}Pp(t,e)}};Xv=function(){return gt};$v=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};uh=function(t,e,n){switch(e){case"input":if(ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cu(i);if(!r)throw Error(ce(90));wv(i),ih(i,r)}}}break;case"textarea":Av(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};Dv=Tp;Uv=ms;var KM={usingClientEntryPoint:!1,Events:[qa,qs,cu,Lv,Nv,Tp]},Zo={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZM={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fv(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||YM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{su=xl.inject(ZM),Ri=xl}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KM;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(ce(200));return $M(t,e,null,n)};Wn.createRoot=function(t,e){if(!Np(t))throw Error(ce(299));var n=!1,i="",r=mx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,i,r),t[Zi]=e.current,Na(t.nodeType===8?t.parentNode:t),new Lp(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Fv(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return ms(t)};Wn.hydrate=function(t,e,n){if(!_u(e))throw Error(ce(200));return xu(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=mx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=px(e,null,t,1,n??null,r,!1,s,o),t[Zi]=e.current,Na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vu(e)};Wn.render=function(t,e,n){if(!_u(e))throw Error(ce(200));return xu(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!_u(t))throw Error(ce(40));return t._reactRootContainer?(ms(function(){xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Zi]=null})}),!0):!1};Wn.unstable_batchedUpdates=Tp;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_u(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return xu(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx)}catch(t){console.error(t)}}gx(),gv.exports=Wn;var QM=gv.exports,vx,Ag=QM;vx=Ag.createRoot,Ag.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_x=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var e1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=ze.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ze.createElement("svg",{ref:l,...e1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:_x("lucide",r),...a},[...o.map(([c,u])=>ze.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(t,e)=>{const n=ze.forwardRef(({className:i,...r},s)=>ze.createElement(t1,{ref:s,iconNode:e,className:_x(`lucide-${JM(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Je("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=Je("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Je("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Je("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=Je("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=Je("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=Je("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=Je("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=Je("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=Je("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Je("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=Je("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=Je("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=Je("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=Je("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=Je("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=Je("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Je("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=Je("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Je("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Je("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Je("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Je("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=Je("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=Je("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Je("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=Je("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Je("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=Je("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Je("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Je("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Je("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Je("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Je("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Je("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Je("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Je("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="169",P1=0,Lg=1,L1=2,Sx=1,Mx=2,ki=3,Pr=0,Sn=1,Bn=2,$i=0,ho=1,Ei=2,Ng=3,Dg=4,N1=5,Qr=100,D1=101,U1=102,I1=103,O1=104,F1=200,k1=201,z1=202,B1=203,Gh=204,Wh=205,H1=206,V1=207,G1=208,W1=209,j1=210,X1=211,$1=212,Y1=213,q1=214,jh=0,Xh=1,$h=2,Eo=3,Yh=4,qh=5,Kh=6,Zh=7,Ex=0,K1=1,Z1=2,Cr=0,wx=1,Tx=2,Ax=3,Ip=4,Q1=5,Cx=6,Rx=7,bx=300,wo=301,To=302,Qh=303,Jh=304,yu=306,ef=1e3,is=1001,tf=1002,Zn=1003,J1=1004,Sl=1005,di=1006,od=1007,rs=1008,er=1009,Px=1010,Lx=1011,Ha=1012,Op=1013,gs=1014,Gi=1015,Yi=1016,Fp=1017,kp=1018,Ao=1020,Nx=35902,Dx=1021,Ux=1022,fi=1023,Ix=1024,Ox=1025,fo=1026,Co=1027,Fx=1028,zp=1029,kx=1030,Bp=1031,Hp=1033,_c=33776,xc=33777,yc=33778,Sc=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,cf=37496,uf=37808,df=37809,hf=37810,ff=37811,pf=37812,mf=37813,gf=37814,vf=37815,_f=37816,xf=37817,yf=37818,Sf=37819,Mf=37820,Ef=37821,Mc=36492,wf=36494,Tf=36495,zx=36283,Af=36284,Cf=36285,Rf=36286,eE=3200,tE=3201,Bx=0,nE=1,gr="",kn="srgb",Ur="srgb-linear",Vp="display-p3",Su="display-p3-linear",qc="linear",_t="srgb",Kc="rec709",Zc="p3",Ts=7680,Ug=519,iE=512,rE=513,sE=514,Hx=515,oE=516,aE=517,lE=518,cE=519,bf=35044,Ig="300 es",Wi=2e3,Qc=2001;class Uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Og=1234567;const Ma=Math.PI/180,Va=180/Math.PI;function qi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function Gp(t,e){return(t%e+e)%e}function uE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function dE(t,e,n){return t!==e?(n-t)/(e-t):0}function Ea(t,e,n){return(1-n)*t+n*e}function hE(t,e,n,i){return Ea(t,e,1-Math.exp(-n*i))}function fE(t,e=1){return e-Math.abs(Gp(t,e*2)-e)}function pE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function mE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function gE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function vE(t,e){return t+Math.random()*(e-t)}function _E(t){return t*(.5-Math.random())}function xE(t){t!==void 0&&(Og=t);let e=Og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yE(t){return t*Ma}function SE(t){return t*Va}function ME(t){return(t&t-1)===0&&t!==0}function EE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function wE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function TE(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xt={DEG2RAD:Ma,RAD2DEG:Va,generateUUID:qi,clamp:Wt,euclideanModulo:Gp,mapLinear:uE,inverseLerp:dE,lerp:Ea,damp:hE,pingpong:fE,smoothstep:pE,smootherstep:mE,randInt:gE,randFloat:vE,randFloatSpread:_E,seededRandom:xE,degToRad:yE,radToDeg:SE,isPowerOfTwo:ME,ceilPowerOfTwo:EE,floorPowerOfTwo:wE,setQuaternionFromProperEuler:TE,normalize:mt,denormalize:hi};class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],v=r[1],_=r[4],S=r[7],L=r[2],C=r[5],w=r[8];return s[0]=o*y+a*v+l*L,s[3]=o*m+a*_+l*C,s[6]=o*h+a*S+l*w,s[1]=c*y+u*v+d*L,s[4]=c*m+u*_+d*C,s[7]=c*h+u*S+d*w,s[2]=f*y+p*v+g*L,s[5]=f*m+p*_+g*C,s[8]=f*h+p*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ad.makeScale(e,n)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,n){return this.premultiply(ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new Ze;function Vx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AE(){const t=Jc("canvas");return t.style.display="block",t}const Fg={};function Ec(t){t in Fg||(Fg[t]=!0,console.warn(t))}function CE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function RE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kg=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zg=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qo={[Ur]:{transfer:qc,primaries:Kc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[kn]:{transfer:_t,primaries:Kc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Su]:{transfer:qc,primaries:Zc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(zg),fromReference:t=>t.applyMatrix3(kg)},[Vp]:{transfer:_t,primaries:Zc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(zg),fromReference:t=>t.applyMatrix3(kg).convertLinearToSRGB()}},PE=new Set([Ur,Su]),ft={enabled:!0,_workingColorSpace:Ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!PE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qo[e].toReference,r=Qo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qo[t].primaries},getTransfer:function(t){return t===gr?qc:Qo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Qo[e].luminanceCoefficients)}};function po(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ld(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let As;class LE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Jc("canvas")),As.width=e.width,As.height=e.height;const i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=po(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(po(n[i]/255)*255):n[i]=po(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class Gx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cd(r[o].image)):s.push(cd(r[o]))}else s=cd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?LE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DE=0;class Mn extends Uo{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=is,r=is,s=di,o=rs,a=fi,l=er,c=Mn.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=qi(),this.name="",this.source=new Gx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=bx;Mn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,L=(h+1)/2,C=(u+f)/4,w=(d+y)/4,P=(g+m)/4;return _>S&&_>L?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=w/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=P/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=w/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UE extends Uo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Gx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends UE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Wx extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IE extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(d!==y||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*y,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const L=Math.sqrt(_),C=Math.atan2(L,h*v);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const S=a*v;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,d=d*m+y*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new R,Bg=new Io;class Li{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),El.subVectors(this.max,Jo),Cs.subVectors(e.a,Jo),Rs.subVectors(e.b,Jo),bs.subVectors(e.c,Jo),rr.subVectors(Rs,Cs),sr.subVectors(bs,Rs),Hr.subVectors(Cs,bs);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Hr.z,Hr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Hr.z,0,-Hr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Hr.y,Hr.x,0];return!dd(n,Cs,Rs,bs,El)||(n=[1,0,0,0,1,0,0,0,1],!dd(n,Cs,Rs,bs,El))?!1:(wl.crossVectors(rr,sr),n=[wl.x,wl.y,wl.z],dd(n,Cs,Rs,bs,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new R,new R,new R,new R,new R,new R,new R,new R],ii=new R,Ml=new Li,Cs=new R,Rs=new R,bs=new R,rr=new R,sr=new R,Hr=new R,Jo=new R,El=new R,wl=new R,Vr=new R;function dd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vr.fromArray(t,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const OE=new Li,ea=new R,hd=new R;class ys{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):OE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(hd)),this.expandByPoint(ea.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new R,fd=new R,Tl=new R,or=new R,pd=new R,Al=new R,md=new R;class Mu{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fd.copy(e).add(n).multiplyScalar(.5),Tl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(fd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Tl),a=or.dot(this.direction),l=-or.dot(Tl),c=or.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fd).addScaledVector(Tl,f),p}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,r,s){pd.subVectors(n,e),Al.subVectors(i,e),md.crossVectors(pd,Al);let o=this.direction.dot(md),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(or,Al));if(l<0)return null;const c=a*this.direction.dot(pd.cross(or));if(c<0||l+c>o)return null;const u=-a*or.dot(md);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,kE)}lookAt(e,n,i){const r=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ar.crossVectors(i,Un),ar.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ar.crossVectors(i,Un)),ar.normalize(),Cl.crossVectors(Un,ar),r[0]=ar.x,r[4]=Cl.x,r[8]=Un.x,r[1]=ar.y,r[5]=Cl.y,r[9]=Un.y,r[2]=ar.z,r[6]=Cl.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],v=i[3],_=i[7],S=i[11],L=i[15],C=r[0],w=r[4],P=r[8],F=r[12],x=r[1],E=r[5],I=r[9],z=r[13],V=r[2],X=r[6],W=r[10],J=r[14],D=r[3],K=r[7],Y=r[11],ae=r[15];return s[0]=o*C+a*x+l*V+c*D,s[4]=o*w+a*E+l*X+c*K,s[8]=o*P+a*I+l*W+c*Y,s[12]=o*F+a*z+l*J+c*ae,s[1]=u*C+d*x+f*V+p*D,s[5]=u*w+d*E+f*X+p*K,s[9]=u*P+d*I+f*W+p*Y,s[13]=u*F+d*z+f*J+p*ae,s[2]=g*C+y*x+m*V+h*D,s[6]=g*w+y*E+m*X+h*K,s[10]=g*P+y*I+m*W+h*Y,s[14]=g*F+y*z+m*J+h*ae,s[3]=v*C+_*x+S*V+L*D,s[7]=v*w+_*E+S*X+L*K,s[11]=v*P+_*I+S*W+L*Y,s[15]=v*F+_*z+S*J+L*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],v=d*m*c-y*f*c+y*l*p-a*m*p-d*l*h+a*f*h,_=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,S=u*y*c-g*d*c+g*a*p-o*y*p-u*a*h+o*d*h,L=g*d*l-u*y*l-g*a*f+o*y*f+u*a*m-o*d*m,C=n*v+i*_+r*S+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=v*w,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*w,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*w,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*w,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*w,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*w,e[8]=S*w,e[9]=(g*d*s-u*y*s-g*i*p+n*y*p+u*i*h-n*d*h)*w,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*h+n*a*h)*w,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*w,e[12]=L*w,e[13]=(u*y*r-g*d*r+g*i*f-n*y*f-u*i*m+n*d*m)*w,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,y=o*u,m=o*d,h=a*d,v=l*c,_=l*u,S=l*d,L=i.x,C=i.y,w=i.z;return r[0]=(1-(y+h))*L,r[1]=(p+S)*L,r[2]=(g-_)*L,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(f+h))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+_)*w,r[9]=(m-v)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ps.set(r[0],r[1],r[2]).length();const o=Ps.set(r[4],r[5],r[6]).length(),a=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,u=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Wi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===Wi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Qc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Wi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,y;if(a===Wi)g=(o+s)*d,y=-2*d;else if(a===Qc)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ps=new R,ri=new ut,FE=new R(0,0,0),kE=new R(1,1,1),ar=new R,Cl=new R,Un=new R,Hg=new ut,Vg=new Io;class Pi{constructor(e=0,n=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const Gg=new R,Ls=new Io,Ii=new ut,Rl=new R,ta=new R,BE=new R,HE=new Io,Wg=new R(1,0,0),jg=new R(0,1,0),Xg=new R(0,0,1),$g={type:"added"},VE={type:"removed"},Ns={type:"childadded",child:null},gd={type:"childremoved",child:null};class kt extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new R,n=new Pi,i=new Io,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ze}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis(Xg,e)}translateOnAxis(e,n){return Gg.copy(e).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis(Xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rl.copy(e):Rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ta,Rl,this.up):Ii.lookAt(Rl,ta,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($g),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(VE),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($g),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new R(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new R,Oi=new R,vd=new R,Fi=new R,Ds=new R,Us=new R,Yg=new R,_d=new R,xd=new R,yd=new R,Sd=new lt,Md=new lt,Ed=new lt;class qn{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Oi.subVectors(i,n),vd.subVectors(e,n);const o=si.dot(si),a=si.dot(Oi),l=si.dot(vd),c=Oi.dot(Oi),u=Oi.dot(vd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,i),Ed.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sd,s.x),o.addScaledVector(Md,s.y),o.addScaledVector(Ed,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Oi.subVectors(e,n),si.cross(Oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),si.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Us.subVectors(s,i),_d.subVectors(e,i);const l=Ds.dot(_d),c=Us.dot(_d);if(l<=0&&c<=0)return n.copy(i);xd.subVectors(e,r);const u=Ds.dot(xd),d=Us.dot(xd);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ds,o);yd.subVectors(e,s);const p=Ds.dot(yd),g=Us.dot(yd);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Us,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Yg.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(Yg,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},bl={h:0,s:0,l:0};function wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=Gp(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wd(o,s,e+1/3),this.g=wd(o,s,e),this.b=wd(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=ld(e.r),this.g=ld(e.g),this.b=ld(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return ft.fromWorkingColorSpace(dn.copy(this),e),Math.round(Wt(dn.r*255,0,255))*65536+Math.round(Wt(dn.g*255,0,255))*256+Math.round(Wt(dn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.fromWorkingColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ft.workingColorSpace){return ft.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=kn){ft.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(bl);const i=Ea(lr.h,bl.h,n),r=Ea(lr.s,bl.s,n),s=Ea(lr.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Fe;Fe.NAMES=jx;let GE=0;class nr extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=ho,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Wh,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gh&&(i.blendSrc=this.blendSrc),this.blendDst!==Wh&&(i.blendDst=this.blendDst),this.blendEquation!==Qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class as extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new R,Pl=new Pe;class Ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bf,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pl.fromBufferAttribute(this,n),Pl.applyMatrix3(e),this.setXY(n,Pl.x,Pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hi(n,this.array)),n}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hi(n,this.array)),n}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hi(n,this.array)),n}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bf&&(e.usage=this.usage),e}}class Xx extends Ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $x extends Ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ot extends Ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let WE=0;const Xn=new ut,Td=new kt,Is=new R,In=new Li,na=new Li,qt=new R;class Tt extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?$x:Xx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(In.min,na.min),In.expandByPoint(qt),qt.addVectors(In.max,na.max),In.expandByPoint(qt)):(In.expandByPoint(na.min),In.expandByPoint(na.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),qt.add(Is)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new R,l[P]=new R;const c=new R,u=new R,d=new R,f=new Pe,p=new Pe,g=new Pe,y=new R,m=new R;function h(P,F,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,F),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,F),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),a[P].add(y),a[F].add(y),a[x].add(y),l[P].add(m),l[F].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,F=v.length;P<F;++P){const x=v[P],E=x.start,I=x.count;for(let z=E,V=E+I;z<V;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new R,S=new R,L=new R,C=new R;function w(P){L.fromBufferAttribute(r,P),C.copy(L);const F=a[P];_.copy(F),_.sub(L.multiplyScalar(L.dot(F))).normalize(),S.crossVectors(C,F);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,E)}for(let P=0,F=v.length;P<F;++P){const x=v[P],E=x.start,I=x.count;for(let z=E,V=E+I;z<V;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Ln(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qg=new ut,Gr=new Mu,Ll=new ys,Kg=new R,Nl=new R,Dl=new R,Ul=new R,Ad=new R,Il=new R,Zg=new R,Ol=new R;class wt extends kt{constructor(e=new Tt,n=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ad.fromBufferAttribute(d,e),o?Il.addScaledVector(Ad,u):Il.addScaledVector(Ad.sub(n),u))}n.add(Il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(Ll.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Ll,Kg)===null||Gr.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&(qg.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(qg),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,L=_;S<L;S+=3){const C=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=Fl(this,h,e,i,c,u,d,C,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Fl(this,o,e,i,c,u,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,L=_;S<L;S+=3){const C=S,w=S+1,P=S+2;r=Fl(this,h,e,i,c,u,d,C,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=m,_=m+1,S=m+2;r=Fl(this,o,e,i,c,u,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function jE(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pr,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function Fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Nl),t.getVertexPosition(l,Dl),t.getVertexPosition(c,Ul);const u=jE(t,e,n,i,Nl,Dl,Ul,Zg);if(u){const d=new R;qn.getBarycoord(Zg,Nl,Dl,Ul,d),r&&(u.uv=qn.getInterpolatedAttribute(r,a,l,c,d,new Pe)),s&&(u.uv1=qn.getInterpolatedAttribute(s,a,l,c,d,new Pe)),o&&(u.normal=qn.getInterpolatedAttribute(o,a,l,c,d,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};qn.getNormal(Nl,Dl,Ul,f.normal),u.face=f,u.barycoord=d}return u}class hn extends Tt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(d,2));function g(y,m,h,v,_,S,L,C,w,P,F){const x=S/w,E=L/P,I=S/2,z=L/2,V=C/2,X=w+1,W=P+1;let J=0,D=0;const K=new R;for(let Y=0;Y<W;Y++){const ae=Y*E-z;for(let Te=0;Te<X;Te++){const Ge=Te*x-I;K[y]=Ge*v,K[m]=ae*_,K[h]=V,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[h]=C>0?1:-1,u.push(K.x,K.y,K.z),d.push(Te/w),d.push(1-Y/P),J+=1}}for(let Y=0;Y<P;Y++)for(let ae=0;ae<w;ae++){const Te=f+ae+X*Y,Ge=f+ae+X*(Y+1),$=f+(ae+1)+X*(Y+1),q=f+(ae+1)+X*Y;l.push(Te,Ge,q),l.push(Ge,$,q),D+=6}a.addGroup(p,D,F),p+=D,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=Ro(t[n]);for(const r in i)e[r]=i[r]}return e}function XE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const vs={clone:Ro,merge:gn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=YE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=XE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qx extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new R,Qg=new Pe,Jg=new Pe;class zn extends qx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,Qg,Jg),n.subVectors(Jg,Qg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,Fs=1;class qE extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Os,Fs,e,n);r.layers=this.layers,this.add(r);const s=new zn(Os,Fs,e,n);s.layers=this.layers,this.add(s);const o=new zn(Os,Fs,e,n);o.layers=this.layers,this.add(o);const a=new zn(Os,Fs,e,n);a.layers=this.layers,this.add(a);const l=new zn(Os,Fs,e,n);l.layers=this.layers,this.add(l);const c=new zn(Os,Fs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kx extends Mn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:wo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KE extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:di}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hn(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:$i});s.uniforms.tEquirect.value=n;const o=new wt(r,s),a=n.minFilter;return n.minFilter===rs&&(n.minFilter=di),new qE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Cd=new R,ZE=new R,QE=new Ze;class Kr{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cd.subVectors(i,n).cross(ZE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QE.getNormalMatrix(e),r=this.coplanarPoint(Cd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new ys,kl=new R;class jp{constructor(e=new Kr,n=new Kr,i=new Kr,r=new Kr,s=new Kr,o=new Kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+g,S+v).normalize(),i[3].setComponents(l-o,f-u,m-g,S-v).normalize(),i[4].setComponents(l-a,f-d,m-y,S-_).normalize(),n===Wi)i[5].setComponents(l+a,f+d,m+y,S+_).normalize();else if(n===Qc)i[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ls extends Tt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let _=0;_<c;_++){const S=_*d-s;g.push(S,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const _=v+c*h,S=v+c*(h+1),L=v+1+c*(h+1),C=v+1+c*h;p.push(_,S,C),p.push(S,L,C)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var ew=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tw=`#ifdef USE_ALPHAHASH
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
#endif`,nw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ow=`#ifdef USE_AOMAP
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
#endif`,aw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lw=`#ifdef USE_BATCHING
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
#endif`,cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fw=`#ifdef USE_IRIDESCENCE
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
#endif`,pw=`#ifdef USE_BUMPMAP
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
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ew=`#define PI 3.141592653589793
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
} // validated`,ww=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tw=`vec3 transformedNormal = objectNormal;
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
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lw=`
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
}`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uw=`#ifdef USE_ENVMAP
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
#endif`,Iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
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
#endif`,Fw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hw=`#ifdef USE_GRADIENTMAP
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
}`,Vw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jw=`uniform bool receiveShadow;
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
#endif`,Xw=`#ifdef USE_ENVMAP
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
#endif`,$w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zw=`PhysicalMaterial material;
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
#endif`,Qw=`struct PhysicalMaterial {
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
}`,Jw=`
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
#endif`,eT=`#if defined( RE_IndirectDiffuse )
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
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cT=`#if defined( USE_POINTS_UV )
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
#endif`,uT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`#ifdef USE_MORPHTARGETS
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
#endif`,gT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MT=`#ifdef USE_NORMALMAP
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
#endif`,ET=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kT=`float getShadowMask() {
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
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,HT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,GT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$T=`#ifdef USE_TRANSMISSION
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
#endif`,YT=`#ifdef USE_TRANSMISSION
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
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,aA=`#define DISTANCE
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
}`,lA=`#define DISTANCE
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
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`uniform float scale;
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
}`,hA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define LAMBERT
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
}`,vA=`#define MATCAP
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
}`,_A=`#define MATCAP
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
}`,xA=`#define NORMAL
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
}`,yA=`#define NORMAL
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
}`,SA=`#define PHONG
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
}`,MA=`#define PHONG
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
}`,EA=`#define STANDARD
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
}`,wA=`#define STANDARD
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
}`,TA=`#define TOON
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
}`,AA=`#define TOON
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
}`,CA=`uniform float size;
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
}`,RA=`uniform vec3 diffuse;
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
}`,bA=`#include <common>
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
}`,PA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
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
}`,NA=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:ew,alphahash_pars_fragment:tw,alphamap_fragment:nw,alphamap_pars_fragment:iw,alphatest_fragment:rw,alphatest_pars_fragment:sw,aomap_fragment:ow,aomap_pars_fragment:aw,batching_pars_vertex:lw,batching_vertex:cw,begin_vertex:uw,beginnormal_vertex:dw,bsdfs:hw,iridescence_fragment:fw,bumpmap_pars_fragment:pw,clipping_planes_fragment:mw,clipping_planes_pars_fragment:gw,clipping_planes_pars_vertex:vw,clipping_planes_vertex:_w,color_fragment:xw,color_pars_fragment:yw,color_pars_vertex:Sw,color_vertex:Mw,common:Ew,cube_uv_reflection_fragment:ww,defaultnormal_vertex:Tw,displacementmap_pars_vertex:Aw,displacementmap_vertex:Cw,emissivemap_fragment:Rw,emissivemap_pars_fragment:bw,colorspace_fragment:Pw,colorspace_pars_fragment:Lw,envmap_fragment:Nw,envmap_common_pars_fragment:Dw,envmap_pars_fragment:Uw,envmap_pars_vertex:Iw,envmap_physical_pars_fragment:Xw,envmap_vertex:Ow,fog_vertex:Fw,fog_pars_vertex:kw,fog_fragment:zw,fog_pars_fragment:Bw,gradientmap_pars_fragment:Hw,lightmap_pars_fragment:Vw,lights_lambert_fragment:Gw,lights_lambert_pars_fragment:Ww,lights_pars_begin:jw,lights_toon_fragment:$w,lights_toon_pars_fragment:Yw,lights_phong_fragment:qw,lights_phong_pars_fragment:Kw,lights_physical_fragment:Zw,lights_physical_pars_fragment:Qw,lights_fragment_begin:Jw,lights_fragment_maps:eT,lights_fragment_end:tT,logdepthbuf_fragment:nT,logdepthbuf_pars_fragment:iT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:sT,map_fragment:oT,map_pars_fragment:aT,map_particle_fragment:lT,map_particle_pars_fragment:cT,metalnessmap_fragment:uT,metalnessmap_pars_fragment:dT,morphinstance_vertex:hT,morphcolor_vertex:fT,morphnormal_vertex:pT,morphtarget_pars_vertex:mT,morphtarget_vertex:gT,normal_fragment_begin:vT,normal_fragment_maps:_T,normal_pars_fragment:xT,normal_pars_vertex:yT,normal_vertex:ST,normalmap_pars_fragment:MT,clearcoat_normal_fragment_begin:ET,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:TT,iridescence_pars_fragment:AT,opaque_fragment:CT,packing:RT,premultiplied_alpha_fragment:bT,project_vertex:PT,dithering_fragment:LT,dithering_pars_fragment:NT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:OT,shadowmap_vertex:FT,shadowmask_pars_fragment:kT,skinbase_vertex:zT,skinning_pars_vertex:BT,skinning_vertex:HT,skinnormal_vertex:VT,specularmap_fragment:GT,specularmap_pars_fragment:WT,tonemapping_fragment:jT,tonemapping_pars_fragment:XT,transmission_fragment:$T,transmission_pars_fragment:YT,uv_pars_fragment:qT,uv_pars_vertex:KT,uv_vertex:ZT,worldpos_vertex:QT,background_vert:JT,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:rA,depth_vert:sA,depth_frag:oA,distanceRGBA_vert:aA,distanceRGBA_frag:lA,equirect_vert:cA,equirect_frag:uA,linedashed_vert:dA,linedashed_frag:hA,meshbasic_vert:fA,meshbasic_frag:pA,meshlambert_vert:mA,meshlambert_frag:gA,meshmatcap_vert:vA,meshmatcap_frag:_A,meshnormal_vert:xA,meshnormal_frag:yA,meshphong_vert:SA,meshphong_frag:MA,meshphysical_vert:EA,meshphysical_frag:wA,meshtoon_vert:TA,meshtoon_frag:AA,points_vert:CA,points_frag:RA,shadow_vert:bA,shadow_frag:PA,sprite_vert:LA,sprite_frag:NA},ge={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},An={basic:{uniforms:gn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:gn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:gn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:gn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:gn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:gn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:gn([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:gn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:gn([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:gn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:gn([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:gn([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:gn([ge.lights,ge.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};An.physical={uniforms:gn([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const zl={r:0,b:0,g:0},jr=new Pi,DA=new ut;function UA(t,e,n,i,r,s,o){const a=new Fe(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const S=g(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),_=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===yu)?(u===void 0&&(u=new wt(new hn(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Ro(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),jr.copy(_.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(jr)),u.material.toneMapped=ft.getTransfer(S.colorSpace)!==_t,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new wt(new ls(2,2),new Nt({name:"BackgroundMaterial",uniforms:Ro(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,_){v.getRGB(zl,Yx(t)),i.buffers.color.setClear(zl.r,zl.g,zl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:y,addToRenderList:m}}function IA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,E,I,z,V){let X=!1;const W=d(z,I,E);s!==W&&(s=W,c(s.object)),X=p(x,z,I,V),X&&g(x,z,I,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(x,E,I,z),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function d(x,E,I){const z=I.wireframe===!0;let V=i[x.id];V===void 0&&(V={},i[x.id]=V);let X=V[E.id];X===void 0&&(X={},V[E.id]=X);let W=X[z];return W===void 0&&(W=f(l()),X[z]=W),W}function f(x){const E=[],I=[],z=[];for(let V=0;V<n;V++)E[V]=0,I[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,E,I,z){const V=s.attributes,X=E.attributes;let W=0;const J=I.getAttributes();for(const D in J)if(J[D].location>=0){const Y=V[D];let ae=X[D];if(ae===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(x,E,I,z){const V={},X=E.attributes;let W=0;const J=I.getAttributes();for(const D in J)if(J[D].location>=0){let Y=X[D];Y===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor));const ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),V[D]=ae,W++}s.attributes=V,s.attributesNum=W,s.index=z}function y(){const x=s.newAttributes;for(let E=0,I=x.length;E<I;E++)x[E]=0}function m(x){h(x,0)}function h(x,E){const I=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;I[x]=1,z[x]===0&&(t.enableVertexAttribArray(x),z[x]=1),V[x]!==E&&(t.vertexAttribDivisor(x,E),V[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let I=0,z=E.length;I<z;I++)E[I]!==x[I]&&(t.disableVertexAttribArray(I),E[I]=0)}function _(x,E,I,z,V,X,W){W===!0?t.vertexAttribIPointer(x,E,I,V,X):t.vertexAttribPointer(x,E,I,z,V,X)}function S(x,E,I,z){y();const V=z.attributes,X=I.getAttributes(),W=E.defaultAttributeValues;for(const J in X){const D=X[J];if(D.location>=0){let K=V[J];if(K===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const Y=K.normalized,ae=K.itemSize,Te=e.get(K);if(Te===void 0)continue;const Ge=Te.buffer,$=Te.type,q=Te.bytesPerElement,ue=$===t.INT||$===t.UNSIGNED_INT||K.gpuType===Op;if(K.isInterleavedBufferAttribute){const me=K.data,Ue=me.stride,De=K.offset;if(me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<D.locationSize;Ye++)h(D.location+Ye,me.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ye=0;Ye<D.locationSize;Ye++)m(D.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Ye=0;Ye<D.locationSize;Ye++)_(D.location+Ye,ae/D.locationSize,$,Y,Ue*q,(De+ae/D.locationSize*Ye)*q,ue)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<D.locationSize;me++)h(D.location+me,K.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<D.locationSize;me++)m(D.location+me);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let me=0;me<D.locationSize;me++)_(D.location+me,ae/D.locationSize,$,Y,ae*q,ae/D.locationSize*me*q,ue)}}else if(W!==void 0){const Y=W[J];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(D.location,Y);break;case 3:t.vertexAttrib3fv(D.location,Y);break;case 4:t.vertexAttrib4fv(D.location,Y);break;default:t.vertexAttrib1fv(D.location,Y)}}}}v()}function L(){P();for(const x in i){const E=i[x];for(const I in E){const z=E[I];for(const V in z)u(z[V].object),delete z[V];delete E[I]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const I in E){const z=E[I];for(const V in z)u(z[V].object),delete z[V];delete E[I]}delete i[x.id]}function w(x){for(const E in i){const I=i[E];if(I[x.id]===void 0)continue;const z=I[x.id];for(const V in z)u(z[V].object),delete z[V];delete I[x.id]}}function P(){F(),o=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function OA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];for(let y=0;y<f.length;y++)n.update(g,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==fi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==er&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gi&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:L,maxSamples:C}}function kA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Kr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let S=h.clippingState||null;l.value=S,S=u(g,f,_,p);for(let L=0;L!==_;++L)S[L]=n[L];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const h=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function zA(t){let e=new WeakMap;function n(o,a){return a===Qh?o.mapping=wo:a===Jh&&(o.mapping=To),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qh||a===Jh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new KE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Xp extends qx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const no=4,e0=[.125,.215,.35,.446,.526,.582],Jr=20,Rd=new Xp,t0=new Fe;let bd=null,Pd=0,Ld=0,Nd=!1;const Zr=(1+Math.sqrt(5))/2,ks=1/Zr,n0=[new R(-Zr,ks,0),new R(Zr,ks,0),new R(-ks,0,Zr),new R(ks,0,Zr),new R(0,Zr,-ks),new R(0,Zr,ks),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class i0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Pd,Ld),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===wo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:Yi,format:fi,colorSpace:Ur,depthBuffer:!1},r=r0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(s)),this._blurMaterial=HA(s,e,n)}return r}_compileMaterial(e){const n=new wt(this._lodPlanes[0],e);this._renderer.compile(n,Rd)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(t0),u.toneMapping=Cr,u.autoClear=!1;const p=new as({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new wt(new hn,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(t0),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;Bl(r,v*_,h>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===wo||e.mapping===To;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Rd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=n0[(r-s-1)%n0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new wt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Jr;m>Jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);const h=[];let v=0;for(let w=0;w<Jr;++w){const P=w/y,F=Math.exp(-P*P/2);h.push(F),w===0?v+=F:w<m&&(v+=2*F)}for(let w=0;w<h.length;w++)h[w]=h[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const S=this._sizeLods[r],L=3*S*(r>_-no?r-_+no:0),C=4*(this._cubeSize-S);Bl(n,L,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Rd)}}function BA(t){const e=[],n=[],i=[];let r=t;const s=t-no+1+e0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-no?l=e0[o-t+no-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,h=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,P=C>2?0:-1,F=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(F,y*g*C),_.set(f,m*g*C);const x=[C,C,C,C,C,C];S.set(x,h*g*C)}const L=new Tt;L.setAttribute("position",new Ln(v,y)),L.setAttribute("uv",new Ln(_,m)),L.setAttribute("faceIndex",new Ln(S,h)),e.push(L),r>no&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function r0(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function HA(t,e,n){const i=new Float32Array(Jr),r=new R(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$p(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function s0(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function o0(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function $p(){return`

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
	`}function VA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qh||l===Jh,u=l===wo||l===To;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new i0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new i0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function GA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ec("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WA(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,S=v.length;_<S;_+=3){const L=v[_+0],C=v[_+1],w=v[_+2];f.push(L,C,C,w,w,L)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const L=_+0,C=_+1,w=_+2;f.push(L,C,C,w,w,L)}}else return;const m=new(Vx(f)?$x:Xx)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function jA(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<y.length;v++)n.update(h,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function XA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $A(t,e,n){const i=new WeakMap,r=new lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*C*4*d),P=new Wx(w,L,C,d);P.type=Gi,P.needsUpdate=!0;const F=S*4;for(let E=0;E<d;E++){const I=h[E],z=v[E],V=_[E],X=L*C*4*E;for(let W=0;W<I.count;W++){const J=W*F;g===!0&&(r.fromBufferAttribute(I,W),w[X+J+0]=r.x,w[X+J+1]=r.y,w[X+J+2]=r.z,w[X+J+3]=0),y===!0&&(r.fromBufferAttribute(z,W),w[X+J+4]=r.x,w[X+J+5]=r.y,w[X+J+6]=r.z,w[X+J+7]=0),m===!0&&(r.fromBufferAttribute(V,W),w[X+J+8]=r.x,w[X+J+9]=r.y,w[X+J+10]=r.z,w[X+J+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Pe(L,C)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function YA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Qx extends Mn{constructor(e,n,i,r,s,o,a,l,c,u=fo){if(u!==fo&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fo&&(i=gs),i===void 0&&u===Co&&(i=Ao),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zn,this.minFilter=l!==void 0?l:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jx=new Mn,a0=new Qx(1,1),ey=new Wx,ty=new IE,ny=new Kx,l0=[],c0=[],u0=new Float32Array(16),d0=new Float32Array(9),h0=new Float32Array(4);function Oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=l0[r];if(s===void 0&&(s=new Float32Array(r),l0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Eu(t,e){let n=c0[e];n===void 0&&(n=new Int32Array(e),c0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function QA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function JA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;h0.set(i),t.uniformMatrix2fv(this.addr,!1,h0),$t(n,i)}}function e2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;d0.set(i),t.uniformMatrix3fv(this.addr,!1,d0),$t(n,i)}}function t2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;u0.set(i),t.uniformMatrix4fv(this.addr,!1,u0),$t(n,i)}}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function o2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(a0.compareFunction=Hx,s=a0):s=Jx,n.setTexture2D(e||s,r)}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ty,r)}function h2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ny,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ey,r)}function p2(t){switch(t){case 5126:return qA;case 35664:return KA;case 35665:return ZA;case 35666:return QA;case 35674:return JA;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return o2;case 36294:return a2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return f2}}function m2(t,e){t.uniform1fv(this.addr,e)}function g2(t,e){const n=Oo(e,this.size,2);t.uniform2fv(this.addr,n)}function v2(t,e){const n=Oo(e,this.size,3);t.uniform3fv(this.addr,n)}function _2(t,e){const n=Oo(e,this.size,4);t.uniform4fv(this.addr,n)}function x2(t,e){const n=Oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function y2(t,e){const n=Oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function S2(t,e){const n=Oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function M2(t,e){t.uniform1iv(this.addr,e)}function E2(t,e){t.uniform2iv(this.addr,e)}function w2(t,e){t.uniform3iv(this.addr,e)}function T2(t,e){t.uniform4iv(this.addr,e)}function A2(t,e){t.uniform1uiv(this.addr,e)}function C2(t,e){t.uniform2uiv(this.addr,e)}function R2(t,e){t.uniform3uiv(this.addr,e)}function b2(t,e){t.uniform4uiv(this.addr,e)}function P2(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Jx,s[o])}function L2(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ty,s[o])}function N2(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ny,s[o])}function D2(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ey,s[o])}function U2(t){switch(t){case 5126:return m2;case 35664:return g2;case 35665:return v2;case 35666:return _2;case 35674:return x2;case 35675:return y2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return E2;case 35668:case 35672:return w2;case 35669:case 35673:return T2;case 5125:return A2;case 36294:return C2;case 36295:return R2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return D2}}class I2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p2(n.type)}}class O2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U2(n.type)}}class F2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function f0(t,e){t.seq.push(e),t.map[e.id]=e}function k2(t,e,n){const i=t.name,r=i.length;for(Dd.lastIndex=0;;){const s=Dd.exec(i),o=Dd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){f0(n,c===void 0?new I2(a,t,e):new O2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new F2(a),f0(n,d)),n=d}}}class wc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);k2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function p0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const z2=37297;let B2=0;function H2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function V2(t){const e=ft.getPrimaries(ft.workingColorSpace),n=ft.getPrimaries(t);let i;switch(e===n?i="":e===Zc&&n===Kc?i="LinearDisplayP3ToLinearSRGB":e===Kc&&n===Zc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ur:case Su:return[i,"LinearTransferOETF"];case kn:case Vp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function m0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+H2(t.getShaderSource(e),o)}else return r}function G2(t,e){const n=V2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function W2(t,e){let n;switch(e){case wx:n="Linear";break;case Tx:n="Reinhard";break;case Ax:n="Cineon";break;case Ip:n="ACESFilmic";break;case Cx:n="AgX";break;case Rx:n="Neutral";break;case Q1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hl=new R;function j2(){ft.getLuminanceCoefficients(Hl);const t=Hl.x.toFixed(4),e=Hl.y.toFixed(4),n=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function $2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Y2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ha(t){return t!==""}function g0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(q2,Z2)}const K2=new Map;function Z2(t,e){let n=Ke[e];if(n===void 0){const i=K2.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(n)}const Q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(t){return t.replace(Q2,J2)}function J2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function eC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function tC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case wo:case To:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function iC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ex:e="ENVMAP_BLENDING_MULTIPLY";break;case K1:e="ENVMAP_BLENDING_MIX";break;case Z1:e="ENVMAP_BLENDING_ADD";break}return e}function rC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=eC(n),c=tC(n),u=nC(n),d=iC(n),f=rC(n),p=X2(n),g=$2(s),y=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),h.length>0&&(h+=`
`)):(m=[x0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),h=[x0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cr?"#define TONE_MAPPING":"",n.toneMapping!==Cr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Cr?W2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,G2("linearToOutputTexel",n.outputColorSpace),j2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),o=Pf(o),o=g0(o,n),o=v0(o,n),a=Pf(a),a=g0(a,n),a=v0(a,n),o=_0(o),a=_0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+m+o,S=v+h+a,L=p0(r,r.VERTEX_SHADER,_),C=p0(r,r.FRAGMENT_SHADER,S);r.attachShader(y,L),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(E){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(L).trim(),V=r.getShaderInfoLog(C).trim();let X=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,L,C);else{const J=m0(r,L,"vertex"),D=m0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+J+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||V==="")&&(W=!1);W&&(E.diagnostics={runnable:X,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(L),r.deleteShader(C),P=new wc(r,y),F=Y2(r,y)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let F;this.getAttributes=function(){return F===void 0&&w(this),F};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,z2)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=C,this}let oC=0;class aC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lC(e),n.set(e,i)),i}}class lC{constructor(e){this.id=oC++,this.code=e,this.usedTimes=0}}function cC(t,e,n,i,r,s,o){const a=new Wp,l=new aC,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function h(x,E,I,z,V){const X=z.fog,W=V.geometry,J=x.isMeshStandardMaterial?z.environment:null,D=(x.isMeshStandardMaterial?n:e).get(x.envMap||J),K=D&&D.mapping===yu?D.image.height:null,Y=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Te=ae!==void 0?ae.length:0;let Ge=0;W.morphAttributes.position!==void 0&&(Ge=1),W.morphAttributes.normal!==void 0&&(Ge=2),W.morphAttributes.color!==void 0&&(Ge=3);let $,q,ue,me;if(Y){const on=An[Y];$=on.vertexShader,q=on.fragmentShader}else $=x.vertexShader,q=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);const Ue=t.getRenderTarget(),De=V.isInstancedMesh===!0,Ye=V.isBatchedMesh===!0,qe=!!x.map,Xe=!!x.matcap,U=!!D,St=!!x.aoMap,$e=!!x.lightMap,ne=!!x.bumpMap,ie=!!x.normalMap,je=!!x.displacementMap,Ce=!!x.emissiveMap,b=!!x.metalnessMap,M=!!x.roughnessMap,H=x.anisotropy>0,ee=x.clearcoat>0,le=x.dispersion>0,te=x.iridescence>0,Re=x.sheen>0,fe=x.transmission>0,ye=H&&!!x.anisotropyMap,rt=ee&&!!x.clearcoatMap,de=ee&&!!x.clearcoatNormalMap,Me=ee&&!!x.clearcoatRoughnessMap,Oe=te&&!!x.iridescenceMap,Be=te&&!!x.iridescenceThicknessMap,Ee=Re&&!!x.sheenColorMap,Qe=Re&&!!x.sheenRoughnessMap,We=!!x.specularMap,pt=!!x.specularColorMap,N=!!x.specularIntensityMap,ve=fe&&!!x.transmissionMap,Z=fe&&!!x.thicknessMap,se=!!x.gradientMap,_e=!!x.alphaMap,Se=x.alphaTest>0,nt=!!x.alphaHash,It=!!x.extensions;let bt=Cr;x.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(bt=t.toneMapping);const at={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:q,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ur,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:Xe,envMap:U,envMapMode:U&&D.mapping,envMapCubeUVHeight:K,aoMap:St,lightMap:$e,bumpMap:ne,normalMap:ie,displacementMap:p&&je,emissiveMap:Ce,normalMapObjectSpace:ie&&x.normalMapType===nE,normalMapTangentSpace:ie&&x.normalMapType===Bx,metalnessMap:b,roughnessMap:M,anisotropy:H,anisotropyMap:ye,clearcoat:ee,clearcoatMap:rt,clearcoatNormalMap:de,clearcoatRoughnessMap:Me,dispersion:le,iridescence:te,iridescenceMap:Oe,iridescenceThicknessMap:Be,sheen:Re,sheenColorMap:Ee,sheenRoughnessMap:Qe,specularMap:We,specularColorMap:pt,specularIntensityMap:N,transmission:fe,transmissionMap:ve,thicknessMap:Z,gradientMap:se,opaque:x.transparent===!1&&x.blending===ho&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:Se,alphaHash:nt,combine:x.combine,mapUv:qe&&m(x.map.channel),aoMapUv:St&&m(x.aoMap.channel),lightMapUv:$e&&m(x.lightMap.channel),bumpMapUv:ne&&m(x.bumpMap.channel),normalMapUv:ie&&m(x.normalMap.channel),displacementMapUv:je&&m(x.displacementMap.channel),emissiveMapUv:Ce&&m(x.emissiveMap.channel),metalnessMapUv:b&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:ye&&m(x.anisotropyMap.channel),clearcoatMapUv:rt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&m(x.sheenRoughnessMap.channel),specularMapUv:We&&m(x.specularMap.channel),specularColorMapUv:pt&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:ve&&m(x.transmissionMap.channel),thicknessMapUv:Z&&m(x.thicknessMap.channel),alphaMapUv:_e&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ie||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(qe||_e),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:bt,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:It&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&x.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function L(x){const E=y[x.type];let I;if(E){const z=An[E];I=vs.clone(z.uniforms)}else I=x.uniforms;return I}function C(x,E){let I;for(let z=0,V=u.length;z<V;z++){const X=u[z];if(X.cacheKey===E){I=X,++I.usedTimes;break}}return I===void 0&&(I=new sC(t,E,x,s),u.push(I)),I}function w(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function F(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:L,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:F}}function uC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function dC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function y0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function S0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,y,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,g,y,m){const h=o(d,f,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,y,m){const h=o(d,f,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||dC),i.length>1&&i.sort(f||y0),r.length>1&&r.sort(f||y0)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function hC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new S0,t.set(i,[o])):r>=s.length?(o=new S0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new Fe};break;case"SpotLight":n={position:new R,direction:new R,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function pC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mC=0;function gC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vC(t){const e=new fC,n=pC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const r=new R,s=new ut,o=new ut;function a(c){let u=0,d=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,y=0,m=0,h=0,v=0,_=0,S=0,L=0,C=0,w=0;c.sort(gC);for(let F=0,x=c.length;F<x;F++){const E=c[F],I=E.color,z=E.intensity,V=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*z,d+=I.g*z,f+=I.b*z;else if(E.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(E.sh.coefficients[W],z);w++}else if(E.isDirectionalLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,D=n.get(E);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=W,p++}else if(E.isSpotLight){const W=e.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(I).multiplyScalar(z),W.distance=V,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,i.spot[y]=W;const J=E.shadow;if(E.map&&(i.spotLightMap[L]=E.map,L++,J.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=J.matrix,E.castShadow){const D=n.get(E);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=X,S++}y++}else if(E.isRectAreaLight){const W=e.get(E);W.color.copy(I).multiplyScalar(z),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=W,m++}else if(E.isPointLight){const W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){const J=E.shadow,D=n.get(E);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,D.shadowCameraNear=J.camera.near,D.shadowCameraFar=J.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=E.shadow.matrix,_++}i.point[g]=W,g++}else if(E.isHemisphereLight){const W=e.get(E);W.skyColor.copy(E.color).multiplyScalar(z),W.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[h]=W,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==L||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=L,P.numLightProbes=w,i.version=mC++)}function l(c,u){let d=0,f=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const _=c[h];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function M0(t){const e=new vC(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _C(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new M0(t),e.set(r,[a])):s>=o.length?(a=new M0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class xC extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yC extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MC=`uniform sampler2D shadow_pass;
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
}`;function EC(t,e,n){let i=new jp;const r=new Pe,s=new Pe,o=new lt,a=new xC({depthPacking:tE}),l=new yC,c={},u=n.maxTextureSize,d={[Pr]:Sn,[Sn]:Pr,[Bn]:Bn},f=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:SC,fragmentShader:MC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let h=this.type;this.render=function(C,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const F=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),I=t.state;I.setBlending($i),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=h!==ki&&this.type===ki,V=h===ki&&this.type!==ki;for(let X=0,W=C.length;X<W;X++){const J=C[X],D=J.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||z===!0||V===!0){const ae=this.type!==ki?{minFilter:Zn,magFilter:Zn}:{};D.map!==null&&D.map.dispose(),D.map=new vi(r.x,r.y,ae),D.map.texture.name=J.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Y=D.getViewportCount();for(let ae=0;ae<Y;ae++){const Te=D.getViewport(ae);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),I.viewport(o),D.updateMatrices(J,ae),i=D.getFrustum(),S(w,P,D.camera,J,this.type)}D.isPointLightShadow!==!0&&this.type===ki&&v(D,P),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(F,x,E)};function v(C,w){const P=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,P,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,P,p,y,null)}function _(C,w,P,F){let x=null;const E=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=x.uuid,z=w.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let X=V[z];X===void 0&&(X=x.clone(),V[z]=X,w.addEventListener("dispose",L)),x=X}if(x.visible=w.visible,x.wireframe=w.wireframe,F===ki?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=t.properties.get(x);I.light=P}return x}function S(C,w,P,F,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ki)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const z=e.update(C),V=C.material;if(Array.isArray(V)){const X=z.groups;for(let W=0,J=X.length;W<J;W++){const D=X[W],K=V[D.materialIndex];if(K&&K.visible){const Y=_(C,K,F,x);C.onBeforeShadow(t,C,w,P,z,Y,D),t.renderBufferDirect(P,null,z,Y,C,D),C.onAfterShadow(t,C,w,P,z,Y,D)}}}else if(V.visible){const X=_(C,V,F,x);C.onBeforeShadow(t,C,w,P,z,X,null),t.renderBufferDirect(P,null,z,X,C,null),C.onAfterShadow(t,C,w,P,z,X,null)}}const I=C.children;for(let z=0,V=I.length;z<V;z++)S(I[z],w,P,F,x)}function L(C){C.target.removeEventListener("dispose",L);for(const P in c){const F=c[P],x=C.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}const wC={[jh]:Xh,[$h]:Kh,[Yh]:Zh,[Eo]:qh,[Xh]:jh,[Kh]:$h,[Zh]:Yh,[qh]:Eo};function TC(t){function e(){let N=!1;const ve=new lt;let Z=null;const se=new lt(0,0,0,0);return{setMask:function(_e){Z!==_e&&!N&&(t.colorMask(_e,_e,_e,_e),Z=_e)},setLocked:function(_e){N=_e},setClear:function(_e,Se,nt,It,bt){bt===!0&&(_e*=It,Se*=It,nt*=It),ve.set(_e,Se,nt,It),se.equals(ve)===!1&&(t.clearColor(_e,Se,nt,It),se.copy(ve))},reset:function(){N=!1,Z=null,se.set(-1,0,0,0)}}}function n(){let N=!1,ve=!1,Z=null,se=null,_e=null;return{setReversed:function(Se){ve=Se},setTest:function(Se){Se?ue(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(Se){Z!==Se&&!N&&(t.depthMask(Se),Z=Se)},setFunc:function(Se){if(ve&&(Se=wC[Se]),se!==Se){switch(Se){case jh:t.depthFunc(t.NEVER);break;case Xh:t.depthFunc(t.ALWAYS);break;case $h:t.depthFunc(t.LESS);break;case Eo:t.depthFunc(t.LEQUAL);break;case Yh:t.depthFunc(t.EQUAL);break;case qh:t.depthFunc(t.GEQUAL);break;case Kh:t.depthFunc(t.GREATER);break;case Zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=Se}},setLocked:function(Se){N=Se},setClear:function(Se){_e!==Se&&(t.clearDepth(Se),_e=Se)},reset:function(){N=!1,Z=null,se=null,_e=null}}}function i(){let N=!1,ve=null,Z=null,se=null,_e=null,Se=null,nt=null,It=null,bt=null;return{setTest:function(at){N||(at?ue(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(at){ve!==at&&!N&&(t.stencilMask(at),ve=at)},setFunc:function(at,on,vt){(Z!==at||se!==on||_e!==vt)&&(t.stencilFunc(at,on,vt),Z=at,se=on,_e=vt)},setOp:function(at,on,vt){(Se!==at||nt!==on||It!==vt)&&(t.stencilOp(at,on,vt),Se=at,nt=on,It=vt)},setLocked:function(at){N=at},setClear:function(at){bt!==at&&(t.clearStencil(at),bt=at)},reset:function(){N=!1,ve=null,Z=null,se=null,_e=null,Se=null,nt=null,It=null,bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,g=!1,y=null,m=null,h=null,v=null,_=null,S=null,L=null,C=new Fe(0,0,0),w=0,P=!1,F=null,x=null,E=null,I=null,z=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let D=null,K={};const Y=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Te=new lt().fromArray(Y),Ge=new lt().fromArray(ae);function $(N,ve,Z,se){const _e=new Uint8Array(4),Se=t.createTexture();t.bindTexture(N,Se),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<Z;nt++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ve+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return Se}const q={};q[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Eo),$e(!1),ne(Lg),ue(t.CULL_FACE),U($i);function ue(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function me(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ue(N,ve){return u[N]!==ve?(t.bindFramebuffer(N,ve),u[N]=ve,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ve),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function De(N,ve){let Z=f,se=!1;if(N){Z=d.get(ve),Z===void 0&&(Z=[],d.set(ve,Z));const _e=N.textures;if(Z.length!==_e.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,nt=_e.length;Se<nt;Se++)Z[Se]=t.COLOR_ATTACHMENT0+Se;Z.length=_e.length,se=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,se=!0);se&&t.drawBuffers(Z)}function Ye(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const qe={[Qr]:t.FUNC_ADD,[D1]:t.FUNC_SUBTRACT,[U1]:t.FUNC_REVERSE_SUBTRACT};qe[I1]=t.MIN,qe[O1]=t.MAX;const Xe={[F1]:t.ZERO,[k1]:t.ONE,[z1]:t.SRC_COLOR,[Gh]:t.SRC_ALPHA,[j1]:t.SRC_ALPHA_SATURATE,[G1]:t.DST_COLOR,[H1]:t.DST_ALPHA,[B1]:t.ONE_MINUS_SRC_COLOR,[Wh]:t.ONE_MINUS_SRC_ALPHA,[W1]:t.ONE_MINUS_DST_COLOR,[V1]:t.ONE_MINUS_DST_ALPHA,[X1]:t.CONSTANT_COLOR,[$1]:t.ONE_MINUS_CONSTANT_COLOR,[Y1]:t.CONSTANT_ALPHA,[q1]:t.ONE_MINUS_CONSTANT_ALPHA};function U(N,ve,Z,se,_e,Se,nt,It,bt,at){if(N===$i){g===!0&&(me(t.BLEND),g=!1);return}if(g===!1&&(ue(t.BLEND),g=!0),N!==N1){if(N!==y||at!==P){if((m!==Qr||_!==Qr)&&(t.blendEquation(t.FUNC_ADD),m=Qr,_=Qr),at)switch(N){case ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ei:t.blendFunc(t.ONE,t.ONE);break;case Ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ei:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,v=null,S=null,L=null,C.set(0,0,0),w=0,y=N,P=at}return}_e=_e||ve,Se=Se||Z,nt=nt||se,(ve!==m||_e!==_)&&(t.blendEquationSeparate(qe[ve],qe[_e]),m=ve,_=_e),(Z!==h||se!==v||Se!==S||nt!==L)&&(t.blendFuncSeparate(Xe[Z],Xe[se],Xe[Se],Xe[nt]),h=Z,v=se,S=Se,L=nt),(It.equals(C)===!1||bt!==w)&&(t.blendColor(It.r,It.g,It.b,bt),C.copy(It),w=bt),y=N,P=!1}function St(N,ve){N.side===Bn?me(t.CULL_FACE):ue(t.CULL_FACE);let Z=N.side===Sn;ve&&(Z=!Z),$e(Z),N.blending===ho&&N.transparent===!1?U($i):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const se=N.stencilWrite;o.setTest(se),se&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),je(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(N){F!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),F=N)}function ne(N){N!==P1?(ue(t.CULL_FACE),N!==x&&(N===Lg?t.cullFace(t.BACK):N===L1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),x=N}function ie(N){N!==E&&(X&&t.lineWidth(N),E=N)}function je(N,ve,Z){N?(ue(t.POLYGON_OFFSET_FILL),(I!==ve||z!==Z)&&(t.polygonOffset(ve,Z),I=ve,z=Z)):me(t.POLYGON_OFFSET_FILL)}function Ce(N){N?ue(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function b(N){N===void 0&&(N=t.TEXTURE0+V-1),D!==N&&(t.activeTexture(N),D=N)}function M(N,ve,Z){Z===void 0&&(D===null?Z=t.TEXTURE0+V-1:Z=D);let se=K[Z];se===void 0&&(se={type:void 0,texture:void 0},K[Z]=se),(se.type!==N||se.texture!==ve)&&(D!==Z&&(t.activeTexture(Z),D=Z),t.bindTexture(N,ve||q[N]),se.type=N,se.texture=ve)}function H(){const N=K[D];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(N){Te.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Te.copy(N))}function Ee(N){Ge.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ge.copy(N))}function Qe(N,ve){let Z=l.get(ve);Z===void 0&&(Z=new WeakMap,l.set(ve,Z));let se=Z.get(N);se===void 0&&(se=t.getUniformBlockIndex(ve,N.name),Z.set(N,se))}function We(N,ve){const se=l.get(ve).get(N);a.get(ve)!==se&&(t.uniformBlockBinding(ve,se,N.__bindingPointIndex),a.set(ve,se))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,K={},u={},d=new WeakMap,f=[],p=null,g=!1,y=null,m=null,h=null,v=null,_=null,S=null,L=null,C=new Fe(0,0,0),w=0,P=!1,F=null,x=null,E=null,I=null,z=null,Te.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:me,bindFramebuffer:Ue,drawBuffers:De,useProgram:Ye,setBlending:U,setMaterial:St,setFlipSided:$e,setCullFace:ne,setLineWidth:ie,setPolygonOffset:je,setScissorTest:Ce,activeTexture:b,bindTexture:M,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:le,texImage2D:Me,texImage3D:Oe,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:rt,texStorage3D:de,texSubImage2D:te,texSubImage3D:Re,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Be,viewport:Ee,reset:pt}}function E0(t,e,n,i){const r=AC(i);switch(n){case Dx:return t*e;case Ix:return t*e;case Ox:return t*e*2;case Fx:return t*e/r.components*r.byteLength;case zp:return t*e/r.components*r.byteLength;case kx:return t*e*2/r.components*r.byteLength;case Bp:return t*e*2/r.components*r.byteLength;case Ux:return t*e*3/r.components*r.byteLength;case fi:return t*e*4/r.components*r.byteLength;case Hp:return t*e*4/r.components*r.byteLength;case _c:case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yc:case Sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(t,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(t,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mc:case wf:case Tf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zx:case Af:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cf:case Rf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function AC(t){switch(t){case er:case Px:return{byteLength:1,components:1};case Ha:case Lx:case Yi:return{byteLength:2,components:1};case Fp:case kp:return{byteLength:2,components:4};case gs:case Op:case Gi:return{byteLength:4,components:1};case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function CC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):Jc("canvas")}function y(b,M,H){let ee=1;const le=Ce(b);if((le.width>H||le.height>H)&&(ee=H/Math.max(le.width,le.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const te=Math.floor(ee*le.width),Re=Math.floor(ee*le.height);d===void 0&&(d=g(te,Re));const fe=M?g(te,Re):d;return fe.width=te,fe.height=Re,fe.getContext("2d").drawImage(b,0,0,te,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+te+"x"+Re+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Zn&&b.minFilter!==di}function h(b){t.generateMipmap(b)}function v(b,M,H,ee,le=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=M;if(M===t.RED&&(H===t.FLOAT&&(te=t.R32F),H===t.HALF_FLOAT&&(te=t.R16F),H===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.R8UI),H===t.UNSIGNED_SHORT&&(te=t.R16UI),H===t.UNSIGNED_INT&&(te=t.R32UI),H===t.BYTE&&(te=t.R8I),H===t.SHORT&&(te=t.R16I),H===t.INT&&(te=t.R32I)),M===t.RG&&(H===t.FLOAT&&(te=t.RG32F),H===t.HALF_FLOAT&&(te=t.RG16F),H===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RG8UI),H===t.UNSIGNED_SHORT&&(te=t.RG16UI),H===t.UNSIGNED_INT&&(te=t.RG32UI),H===t.BYTE&&(te=t.RG8I),H===t.SHORT&&(te=t.RG16I),H===t.INT&&(te=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RGB8UI),H===t.UNSIGNED_SHORT&&(te=t.RGB16UI),H===t.UNSIGNED_INT&&(te=t.RGB32UI),H===t.BYTE&&(te=t.RGB8I),H===t.SHORT&&(te=t.RGB16I),H===t.INT&&(te=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),H===t.UNSIGNED_INT&&(te=t.RGBA32UI),H===t.BYTE&&(te=t.RGBA8I),H===t.SHORT&&(te=t.RGBA16I),H===t.INT&&(te=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),M===t.RGBA){const Re=le?qc:ft.getTransfer(ee);H===t.FLOAT&&(te=t.RGBA32F),H===t.HALF_FLOAT&&(te=t.RGBA16F),H===t.UNSIGNED_BYTE&&(te=Re===_t?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(b,M){let H;return b?M===null||M===gs||M===Ao?H=t.DEPTH24_STENCIL8:M===Gi?H=t.DEPTH32F_STENCIL8:M===Ha&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===gs||M===Ao?H=t.DEPTH_COMPONENT24:M===Gi?H=t.DEPTH_COMPONENT32F:M===Ha&&(H=t.DEPTH_COMPONENT16),H}function S(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Zn&&b.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function L(b){const M=b.target;M.removeEventListener("dispose",L),w(M),M.isVideoTexture&&u.delete(M)}function C(b){const M=b.target;M.removeEventListener("dispose",C),F(M)}function w(b){const M=i.get(b);if(M.__webglInit===void 0)return;const H=b.source,ee=f.get(H);if(ee){const le=ee[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&P(b),Object.keys(ee).length===0&&f.delete(H)}i.remove(b)}function P(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const H=b.source,ee=f.get(H);delete ee[M.__cacheKey],o.memory.textures--}function F(b){const M=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let le=0;le<M.__webglFramebuffer[ee].length;le++)t.deleteFramebuffer(M.__webglFramebuffer[ee][le]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=b.textures;for(let ee=0,le=H.length;ee<le;ee++){const te=i.get(H[ee]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(H[ee])}i.remove(b)}let x=0;function E(){x=0}function I(){const b=x;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),x+=1,b}function z(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function V(b,M){const H=i.get(b);if(b.isVideoTexture&&ie(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(H,b,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function X(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ge(H,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function W(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ge(H,b,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function J(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){$(H,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const D={[ef]:t.REPEAT,[is]:t.CLAMP_TO_EDGE,[tf]:t.MIRRORED_REPEAT},K={[Zn]:t.NEAREST,[J1]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[di]:t.LINEAR,[od]:t.LINEAR_MIPMAP_NEAREST,[rs]:t.LINEAR_MIPMAP_LINEAR},Y={[iE]:t.NEVER,[cE]:t.ALWAYS,[rE]:t.LESS,[Hx]:t.LEQUAL,[sE]:t.EQUAL,[lE]:t.GEQUAL,[oE]:t.GREATER,[aE]:t.NOTEQUAL};function ae(b,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===od||M.magFilter===Sl||M.magFilter===rs||M.minFilter===di||M.minFilter===od||M.minFilter===Sl||M.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,D[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zn||M.minFilter!==Sl&&M.minFilter!==rs||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Te(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",L));const ee=M.source;let le=f.get(ee);le===void 0&&(le={},f.set(ee,le));const te=z(M);if(te!==b.__cacheKey){le[te]===void 0&&(le[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[te].usedTimes++;const Re=le[b.__cacheKey];Re!==void 0&&(le[b.__cacheKey].usedTimes--,Re.usedTimes===0&&P(M)),b.__cacheKey=te,b.__webglTexture=le[te].texture}return H}function Ge(b,M,H){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const le=Te(b,M),te=M.source;n.bindTexture(ee,b.__webglTexture,t.TEXTURE0+H);const Re=i.get(te);if(te.version!==Re.__version||le===!0){n.activeTexture(t.TEXTURE0+H);const fe=ft.getPrimaries(ft.workingColorSpace),ye=M.colorSpace===gr?null:ft.getPrimaries(M.colorSpace),rt=M.colorSpace===gr||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let de=y(M.image,!1,r.maxTextureSize);de=je(M,de);const Me=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type);let Be=v(M.internalFormat,Me,Oe,M.colorSpace,M.isVideoTexture);ae(ee,M);let Ee;const Qe=M.mipmaps,We=M.isVideoTexture!==!0,pt=Re.__version===void 0||le===!0,N=te.dataReady,ve=S(M,de);if(M.isDepthTexture)Be=_(M.format===Co,M.type),pt&&(We?n.texStorage2D(t.TEXTURE_2D,1,Be,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Be,de.width,de.height,0,Me,Oe,null));else if(M.isDataTexture)if(Qe.length>0){We&&pt&&n.texStorage2D(t.TEXTURE_2D,ve,Be,Qe[0].width,Qe[0].height);for(let Z=0,se=Qe.length;Z<se;Z++)Ee=Qe[Z],We?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,Z,Be,Ee.width,Ee.height,0,Me,Oe,Ee.data);M.generateMipmaps=!1}else We?(pt&&n.texStorage2D(t.TEXTURE_2D,ve,Be,de.width,de.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,Me,Oe,de.data)):n.texImage2D(t.TEXTURE_2D,0,Be,de.width,de.height,0,Me,Oe,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Be,Qe[0].width,Qe[0].height,de.depth);for(let Z=0,se=Qe.length;Z<se;Z++)if(Ee=Qe[Z],M.format!==fi)if(Me!==null)if(We){if(N)if(M.layerUpdates.size>0){const _e=E0(Ee.width,Ee.height,M.format,M.type);for(const Se of M.layerUpdates){const nt=Ee.data.subarray(Se*_e/Ee.data.BYTES_PER_ELEMENT,(Se+1)*_e/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Se,Ee.width,Ee.height,1,Me,nt,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,de.depth,Me,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Be,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,de.depth,Me,Oe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Be,Ee.width,Ee.height,de.depth,0,Me,Oe,Ee.data)}else{We&&pt&&n.texStorage2D(t.TEXTURE_2D,ve,Be,Qe[0].width,Qe[0].height);for(let Z=0,se=Qe.length;Z<se;Z++)Ee=Qe[Z],M.format!==fi?Me!==null?We?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,Me,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,Z,Be,Ee.width,Ee.height,0,Me,Oe,Ee.data)}else if(M.isDataArrayTexture)if(We){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Be,de.width,de.height,de.depth),N)if(M.layerUpdates.size>0){const Z=E0(de.width,de.height,M.format,M.type);for(const se of M.layerUpdates){const _e=de.data.subarray(se*Z/de.data.BYTES_PER_ELEMENT,(se+1)*Z/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,de.width,de.height,1,Me,Oe,_e)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Oe,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,de.width,de.height,de.depth,0,Me,Oe,de.data);else if(M.isData3DTexture)We?(pt&&n.texStorage3D(t.TEXTURE_3D,ve,Be,de.width,de.height,de.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Oe,de.data)):n.texImage3D(t.TEXTURE_3D,0,Be,de.width,de.height,de.depth,0,Me,Oe,de.data);else if(M.isFramebufferTexture){if(pt)if(We)n.texStorage2D(t.TEXTURE_2D,ve,Be,de.width,de.height);else{let Z=de.width,se=de.height;for(let _e=0;_e<ve;_e++)n.texImage2D(t.TEXTURE_2D,_e,Be,Z,se,0,Me,Oe,null),Z>>=1,se>>=1}}else if(Qe.length>0){if(We&&pt){const Z=Ce(Qe[0]);n.texStorage2D(t.TEXTURE_2D,ve,Be,Z.width,Z.height)}for(let Z=0,se=Qe.length;Z<se;Z++)Ee=Qe[Z],We?N&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me,Oe,Ee):n.texImage2D(t.TEXTURE_2D,Z,Be,Me,Oe,Ee);M.generateMipmaps=!1}else if(We){if(pt){const Z=Ce(de);n.texStorage2D(t.TEXTURE_2D,ve,Be,Z.width,Z.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Oe,de)}else n.texImage2D(t.TEXTURE_2D,0,Be,Me,Oe,de);m(M)&&h(ee),Re.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function $(b,M,H){if(M.image.length!==6)return;const ee=Te(b,M),le=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+H);const te=i.get(le);if(le.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const Re=ft.getPrimaries(ft.workingColorSpace),fe=M.colorSpace===gr?null:ft.getPrimaries(M.colorSpace),ye=M.colorSpace===gr||Re===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const rt=M.isCompressedTexture||M.image[0].isCompressedTexture,de=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let se=0;se<6;se++)!rt&&!de?Me[se]=y(M.image[se],!0,r.maxCubemapSize):Me[se]=de?M.image[se].image:M.image[se],Me[se]=je(M,Me[se]);const Oe=Me[0],Be=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),Qe=v(M.internalFormat,Be,Ee,M.colorSpace),We=M.isVideoTexture!==!0,pt=te.__version===void 0||ee===!0,N=le.dataReady;let ve=S(M,Oe);ae(t.TEXTURE_CUBE_MAP,M);let Z;if(rt){We&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Qe,Oe.width,Oe.height);for(let se=0;se<6;se++){Z=Me[se].mipmaps;for(let _e=0;_e<Z.length;_e++){const Se=Z[_e];M.format!==fi?Be!==null?We?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Se.width,Se.height,Be,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,Qe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Se.width,Se.height,Be,Ee,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,Qe,Se.width,Se.height,0,Be,Ee,Se.data)}}}else{if(Z=M.mipmaps,We&&pt){Z.length>0&&ve++;const se=Ce(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(de){We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me[se].width,Me[se].height,Be,Ee,Me[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Me[se].width,Me[se].height,0,Be,Ee,Me[se].data);for(let _e=0;_e<Z.length;_e++){const nt=Z[_e].image[se].image;We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,nt.width,nt.height,Be,Ee,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,Qe,nt.width,nt.height,0,Be,Ee,nt.data)}}else{We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,Ee,Me[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Be,Ee,Me[se]);for(let _e=0;_e<Z.length;_e++){const Se=Z[_e];We?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,Be,Ee,Se.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,Qe,Be,Ee,Se.image[se])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),te.__version=le.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function q(b,M,H,ee,le,te){const Re=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),ye=v(H.internalFormat,Re,fe,H.colorSpace);if(!i.get(M).__hasExternalTextures){const de=Math.max(1,M.width>>te),Me=Math.max(1,M.height>>te);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,te,ye,de,Me,M.depth,0,Re,fe,null):n.texImage2D(le,te,ye,de,Me,0,Re,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),ne(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,le,i.get(H).__webglTexture,0,$e(M)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,le,i.get(H).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(b,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer){const ee=M.depthTexture,le=ee&&ee.isDepthTexture?ee.type:null,te=_(M.stencilBuffer,le),Re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(M);ne(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,te,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,b)}else{const ee=M.textures;for(let le=0;le<ee.length;le++){const te=ee[le],Re=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),ye=v(te.internalFormat,Re,fe,te.colorSpace),rt=$e(M);H&&ne(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,rt,ye,M.width,M.height):ne(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,rt,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,le=$e(M);if(M.depthTexture.format===fo)ne(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Co)ne(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const M=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const ee=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",le)};ee.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=ee}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),ue(M.__webglDepthbuffer[ee],b,!1);else{const le=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,te)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ue(M.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,le)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(b,M,H){const ee=i.get(b);M!==void 0&&q(ee.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ue(b)}function Ye(b){const M=b.texture,H=i.get(b),ee=i.get(M);b.addEventListener("dispose",C);const le=b.textures,te=b.isWebGLCubeRenderTarget===!0,Re=le.length>1;if(Re||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let ye=0;ye<M.mipmaps.length;ye++)H.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else H.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)H.__webglFramebuffer[fe]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Re)for(let fe=0,ye=le.length;fe<ye;fe++){const rt=i.get(le[fe]);rt.__webglTexture===void 0&&(rt.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&ne(b)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const ye=le[fe];H.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const rt=s.convert(ye.format,ye.colorSpace),de=s.convert(ye.type),Me=v(ye.internalFormat,rt,de,ye.colorSpace,b.isXRRenderTarget===!0),Oe=$e(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)q(H.__webglFramebuffer[fe][ye],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else q(H.__webglFramebuffer[fe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let fe=0,ye=le.length;fe<ye;fe++){const rt=le[fe],de=i.get(rt);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),ae(t.TEXTURE_2D,rt),q(H.__webglFramebuffer,b,rt,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(rt)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),ae(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)q(H.__webglFramebuffer[ye],b,M,t.COLOR_ATTACHMENT0,fe,ye);else q(H.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&h(fe),n.unbindTexture()}b.depthBuffer&&Ue(b)}function qe(b){const M=b.textures;for(let H=0,ee=M.length;H<ee;H++){const le=M[H];if(m(le)){const te=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(le).__webglTexture;n.bindTexture(te,Re),h(te),n.unbindTexture()}}}const Xe=[],U=[];function St(b){if(b.samples>0){if(ne(b)===!1){const M=b.textures,H=b.width,ee=b.height;let le=t.COLOR_BUFFER_BIT;const te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(b),fe=M.length>1;if(fe)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const rt=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,rt,0)}t.blitFramebuffer(0,0,H,ee,0,0,H,ee,le,t.NEAREST),l===!0&&(Xe.length=0,U.length=0,Xe.push(t.COLOR_ATTACHMENT0+ye),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Xe.push(te),U.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const rt=i.get(M[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,rt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function $e(b){return Math.min(r.maxSamples,b.samples)}function ne(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function je(b,M){const H=b.colorSpace,ee=b.format,le=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==Ur&&H!==gr&&(ft.getTransfer(H)===_t?(ee!==fi||le!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=De,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ne}function RC(t,e){function n(i,r=gr){let s;const o=ft.getTransfer(r);if(i===er)return t.UNSIGNED_BYTE;if(i===Fp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Px)return t.BYTE;if(i===Lx)return t.SHORT;if(i===Ha)return t.UNSIGNED_SHORT;if(i===Op)return t.INT;if(i===gs)return t.UNSIGNED_INT;if(i===Gi)return t.FLOAT;if(i===Yi)return t.HALF_FLOAT;if(i===Dx)return t.ALPHA;if(i===Ux)return t.RGB;if(i===fi)return t.RGBA;if(i===Ix)return t.LUMINANCE;if(i===Ox)return t.LUMINANCE_ALPHA;if(i===fo)return t.DEPTH_COMPONENT;if(i===Co)return t.DEPTH_STENCIL;if(i===Fx)return t.RED;if(i===zp)return t.RED_INTEGER;if(i===kx)return t.RG;if(i===Bp)return t.RG_INTEGER;if(i===Hp)return t.RGBA_INTEGER;if(i===_c||i===xc||i===yc||i===Sc)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nf||i===rf||i===sf||i===of)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===af||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===af||i===lf)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uf||i===df||i===hf||i===ff||i===pf||i===mf||i===gf||i===vf||i===_f||i===xf||i===yf||i===Sf||i===Mf||i===Ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===df)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ff)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_f)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ef)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===wf||i===Tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mc)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zx||i===Af||i===Cf||i===Rf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Af)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class bC extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PC={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const LC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NC=`
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

}`;class DC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Nt({vertexShader:LC,fragmentShader:NC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wt(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UC extends Uo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const y=new DC,m=n.getContextAttributes();let h=null,v=null;const _=[],S=[],L=new Pe;let C=null;const w=new zn;w.layers.enable(1),w.viewport=new lt;const P=new zn;P.layers.enable(2),P.viewport=new lt;const F=[w,P],x=new bC;x.layers.enable(1),x.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let q=_[$];return q===void 0&&(q=new Ud,_[$]=q),q.getTargetRaySpace()},this.getControllerGrip=function($){let q=_[$];return q===void 0&&(q=new Ud,_[$]=q),q.getGripSpace()},this.getHand=function($){let q=_[$];return q===void 0&&(q=new Ud,_[$]=q),q.getHandSpace()};function z($){const q=S.indexOf($.inputSource);if(q===-1)return;const ue=_[q];ue!==void 0&&(ue.update($.inputSource,$.frame,c||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",X);for(let $=0;$<_.length;$++){const q=S[$];q!==null&&(S[$]=null,_[$].disconnect(q))}E=null,I=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new vi(p.framebufferWidth,p.framebufferHeight,{format:fi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,ue=null,me=null;m.depth&&(me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=m.stencil?Co:fo,ue=m.stencil?Ao:gs);const Ue={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new vi(f.textureWidth,f.textureHeight,{format:fi,type:er,depthTexture:new Qx(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X($){for(let q=0;q<$.removed.length;q++){const ue=$.removed[q],me=S.indexOf(ue);me>=0&&(S[me]=null,_[me].disconnect(ue))}for(let q=0;q<$.added.length;q++){const ue=$.added[q];let me=S.indexOf(ue);if(me===-1){for(let De=0;De<_.length;De++)if(De>=S.length){S.push(ue),me=De;break}else if(S[De]===null){S[De]=ue,me=De;break}if(me===-1)break}const Ue=_[me];Ue&&Ue.connect(ue)}}const W=new R,J=new R;function D($,q,ue){W.setFromMatrixPosition(q.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const me=W.distanceTo(J),Ue=q.projectionMatrix.elements,De=ue.projectionMatrix.elements,Ye=Ue[14]/(Ue[10]-1),qe=Ue[14]/(Ue[10]+1),Xe=(Ue[9]+1)/Ue[5],U=(Ue[9]-1)/Ue[5],St=(Ue[8]-1)/Ue[0],$e=(De[8]+1)/De[0],ne=Ye*St,ie=Ye*$e,je=me/(-St+$e),Ce=je*-St;if(q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const b=Ye+je,M=qe+je,H=ne-Ce,ee=ie+(me-Ce),le=Xe*qe/M*b,te=U*qe/M*b;$.projectionMatrix.makePerspective(H,ee,le,te,b,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,q){q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let q=$.near,ue=$.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),x.near=P.near=w.near=q,x.far=P.far=w.far=ue,(E!==x.near||I!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,I=x.far);const me=$.parent,Ue=x.cameras;K(x,me);for(let De=0;De<Ue.length;De++)K(Ue[De],me);Ue.length===2?D(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),Y($,x,me)};function Y($,q,ue){ue===null?$.matrix.copy(q.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Va*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ae=null;function Te($,q){if(u=q.getViewerPose(c||o),g=q,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let me=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let De=0;De<ue.length;De++){const Ye=ue[De];let qe=null;if(p!==null)qe=p.getViewport(Ye);else{const U=d.getViewSubImage(f,Ye);qe=U.viewport,De===0&&(e.setRenderTargetTextures(v,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(v))}let Xe=F[De];Xe===void 0&&(Xe=new zn,Xe.layers.enable(De),Xe.viewport=new lt,F[De]=Xe),Xe.matrix.fromArray(Ye.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ye.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(qe.x,qe.y,qe.width,qe.height),De===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(Xe)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const De=d.getDepthInformation(ue[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let ue=0;ue<_.length;ue++){const me=S[ue],Ue=_[ue];me!==null&&Ue!==void 0&&Ue.update(me,q,c||o)}ae&&ae($,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const Ge=new Zx;Ge.setAnimationLoop(Te),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}}const Xr=new Pi,IC=new ut;function OC(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Yx(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,Xr.copy(S),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(IC.makeRotationFromEuler(Xr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const L=_.program;i.updateUBOMapping(v,L);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function u(v){const _=d();v.__bindingPointIndex=_;const S=t.createBuffer(),L=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],S=v.uniforms,L=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,w=S.length;C<w;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let F=0,x=P.length;F<x;F++){const E=P[F];if(p(E,C,F,L)===!0){const I=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let V=0;for(let X=0;X<z.length;X++){const W=z[X],J=y(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,I+V,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,L){const C=v.value,w=_+"_"+S;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{const P=L[w];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return L[w]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(v){const _=v.uniforms;let S=0;const L=16;for(let w=0,P=_.length;w<P;w++){const F=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,E=F.length;x<E;x++){const I=F[x],z=Array.isArray(I.value)?I.value:[I.value];for(let V=0,X=z.length;V<X;V++){const W=z[V],J=y(W),D=S%L,K=D%J.boundary,Y=D+K;S+=K,Y!==0&&L-Y<J.storage&&(S+=L-Y),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=J.storage}}}const C=S%L;return C>0&&(S+=L-C),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class kC{constructor(e={}){const{canvas:n=AE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Cr,this.toneMappingExposure=1;const _=this;let S=!1,L=0,C=0,w=null,P=-1,F=null;const x=new lt,E=new lt;let I=null;const z=new Fe(0);let V=0,X=n.width,W=n.height,J=1,D=null,K=null;const Y=new lt(0,0,X,W),ae=new lt(0,0,X,W);let Te=!1;const Ge=new jp;let $=!1,q=!1;const ue=new ut,me=new ut,Ue=new R,De=new lt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Xe(){return w===null?J:1}let U=i;function St(A,O){return n.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Up}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",Se,!1),U===null){const O="webgl2";if(U=St(O,A),U===null)throw St(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $e,ne,ie,je,Ce,b,M,H,ee,le,te,Re,fe,ye,rt,de,Me,Oe,Be,Ee,Qe,We,pt,N;function ve(){$e=new GA(U),$e.init(),We=new RC(U,$e),ne=new FA(U,$e,e,We),ie=new TC(U),ne.reverseDepthBuffer&&ie.buffers.depth.setReversed(!0),je=new XA(U),Ce=new uC,b=new CC(U,$e,ie,Ce,ne,We,je),M=new zA(_),H=new VA(_),ee=new JE(U),pt=new IA(U,ee),le=new WA(U,ee,je,pt),te=new YA(U,le,ee,je),Be=new $A(U,ne,b),de=new kA(Ce),Re=new cC(_,M,H,$e,ne,pt,de),fe=new OC(_,Ce),ye=new hC,rt=new _C($e),Oe=new UA(_,M,H,ie,te,f,l),Me=new EC(_,te,ne),N=new FC(U,je,ne,ie),Ee=new OA(U,$e,je),Qe=new jA(U,$e,je),je.programs=Re.programs,_.capabilities=ne,_.extensions=$e,_.properties=Ce,_.renderLists=ye,_.shadowMap=Me,_.state=ie,_.info=je}ve();const Z=new UC(_,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=$e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(X,W,!1))},this.getSize=function(A){return A.set(X,W)},this.setSize=function(A,O,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,W=O,n.width=Math.floor(A*J),n.height=Math.floor(O*J),G===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*J,W*J).floor()},this.setDrawingBufferSize=function(A,O,G){X=A,W=O,J=G,n.width=Math.floor(A*G),n.height=Math.floor(O*G),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,O,G,j){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,O,G,j),ie.viewport(x.copy(Y).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,O,G,j){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,O,G,j),ie.scissor(E.copy(ae).multiplyScalar(J).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){ie.setScissorTest(Te=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,O=!0,G=!0){let j=0;if(A){let k=!1;if(w!==null){const he=w.texture.format;k=he===Hp||he===Bp||he===zp}if(k){const he=w.texture.type,xe=he===er||he===gs||he===Ha||he===Ao||he===Fp||he===kp,Ae=Oe.getClearColor(),be=Oe.getClearAlpha(),He=Ae.r,Ve=Ae.g,Le=Ae.b;xe?(p[0]=He,p[1]=Ve,p[2]=Le,p[3]=be,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=He,g[1]=Ve,g[2]=Le,g[3]=be,U.clearBufferiv(U.COLOR,0,g))}else j|=U.COLOR_BUFFER_BIT}O&&(j|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),ye.dispose(),rt.dispose(),Ce.dispose(),M.dispose(),H.dispose(),te.dispose(),pt.dispose(),N.dispose(),Re.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ko),Z.removeEventListener("sessionend",zo),an.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=je.autoReset,O=Me.enabled,G=Me.autoUpdate,j=Me.needsUpdate,k=Me.type;ve(),je.autoReset=A,Me.enabled=O,Me.autoUpdate=G,Me.needsUpdate=j,Me.type=k}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){const O=A.target;O.removeEventListener("dispose",nt),It(O)}function It(A){bt(A),Ce.remove(A)}function bt(A){const O=Ce.get(A).programs;O!==void 0&&(O.forEach(function(G){Re.releaseProgram(G)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,G,j,k,he){O===null&&(O=Ye);const xe=k.isMesh&&k.matrixWorld.determinant()<0,Ae=Ms(A,O,G,j,k);ie.setMaterial(j,xe);let be=G.index,He=1;if(j.wireframe===!0){if(be=le.getWireframeAttribute(G),be===void 0)return;He=2}const Ve=G.drawRange,Le=G.attributes.position;let dt=Ve.start*He,B=(Ve.start+Ve.count)*He;he!==null&&(dt=Math.max(dt,he.start*He),B=Math.min(B,(he.start+he.count)*He)),be!==null?(dt=Math.max(dt,0),B=Math.min(B,be.count)):Le!=null&&(dt=Math.max(dt,0),B=Math.min(B,Le.count));const Q=B-dt;if(Q<0||Q===1/0)return;pt.setup(k,j,Ae,G,be);let re,pe=Ee;if(be!==null&&(re=ee.get(be),pe=Qe,pe.setIndex(re)),k.isMesh)j.wireframe===!0?(ie.setLineWidth(j.wireframeLinewidth*Xe()),pe.setMode(U.LINES)):pe.setMode(U.TRIANGLES);else if(k.isLine){let oe=j.linewidth;oe===void 0&&(oe=1),ie.setLineWidth(oe*Xe()),k.isLineSegments?pe.setMode(U.LINES):k.isLineLoop?pe.setMode(U.LINE_LOOP):pe.setMode(U.LINE_STRIP)}else k.isPoints?pe.setMode(U.POINTS):k.isSprite&&pe.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)pe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))pe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const oe=k._multiDrawStarts,Ie=k._multiDrawCounts,Ne=k._multiDrawCount,ke=be?ee.get(be).bytesPerElement:1,et=Ce.get(j).currentProgram.getUniforms();for(let ht=0;ht<Ne;ht++)et.setValue(U,"_gl_DrawID",ht),pe.render(oe[ht]/ke,Ie[ht])}else if(k.isInstancedMesh)pe.renderInstances(dt,Q,k.count);else if(G.isInstancedBufferGeometry){const oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ie=Math.min(G.instanceCount,oe);pe.renderInstances(dt,Q,Ie)}else pe.render(dt,Q)};function at(A,O,G){A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,Or(A,O,G),A.side=Pr,A.needsUpdate=!0,Or(A,O,G),A.side=Bn):Or(A,O,G)}this.compile=function(A,O,G=null){G===null&&(G=A),m=rt.get(G),m.init(O),v.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const j=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ae=he[xe];at(Ae,G,k),j.add(Ae)}else at(he,G,k),j.add(he)}),v.pop(),m=null,j},this.compileAsync=function(A,O,G=null){const j=this.compile(A,O,G);return new Promise(k=>{function he(){if(j.forEach(function(xe){Ce.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){k(A);return}setTimeout(he,10)}$e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let on=null;function vt(A){on&&on(A)}function ko(){an.stop()}function zo(){an.start()}const an=new Zx;an.setAnimationLoop(vt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(A){on=A,Z.setAnimationLoop(A),A===null?an.stop():an.start()},Z.addEventListener("sessionstart",ko),Z.addEventListener("sessionend",zo),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,O,w),m=rt.get(A,v.length),m.init(O),v.push(m),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ge.setFromProjectionMatrix(me),q=this.localClippingEnabled,$=de.init(this.clippingPlanes,q),y=ye.get(A,h.length),y.init(),h.push(y),Z.enabled===!0&&Z.isPresenting===!0){const he=_.xr.getDepthSensingMesh();he!==null&&ti(he,O,-1/0,_.sortObjects)}ti(A,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(D,K),qe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,qe&&Oe.addToRenderList(y,A),this.info.render.frame++,$===!0&&de.beginShadows();const G=m.state.shadowsArray;Me.render(G,A,O),$===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,k=y.transmissive;if(m.setupLights(),O.isArrayCamera){const he=O.cameras;if(k.length>0)for(let xe=0,Ae=he.length;xe<Ae;xe++){const be=he[xe];Bo(j,k,A,be)}qe&&Oe.render(A);for(let xe=0,Ae=he.length;xe<Ae;xe++){const be=he[xe];Ss(y,A,be,be.viewport)}}else k.length>0&&Bo(j,k,A,O),qe&&Oe.render(A),Ss(y,A,O);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,O),pt.resetDefaultState(),P=-1,F=null,v.pop(),v.length>0?(m=v[v.length-1],$===!0&&de.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ti(A,O,G,j){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){j&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const xe=te.update(A),Ae=A.material;Ae.visible&&y.push(A,xe,Ae,G,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const xe=te.update(A),Ae=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){const be=xe.groups;for(let He=0,Ve=be.length;He<Ve;He++){const Le=be[He],dt=Ae[Le.materialIndex];dt&&dt.visible&&y.push(A,xe,dt,G,De.z,Le)}}else Ae.visible&&y.push(A,xe,Ae,G,De.z,null)}}const he=A.children;for(let xe=0,Ae=he.length;xe<Ae;xe++)ti(he[xe],O,G,j)}function Ss(A,O,G,j){const k=A.opaque,he=A.transmissive,xe=A.transparent;m.setupLightsView(G),$===!0&&de.setGlobalState(_.clippingPlanes,G),j&&ie.viewport(x.copy(j)),k.length>0&&Ir(k,O,G),he.length>0&&Ir(he,O,G),xe.length>0&&Ir(xe,O,G),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Bo(A,O,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new vi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Yi:er,minFilter:rs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const he=m.state.transmissionRenderTarget[j.id],xe=j.viewport||x;he.setSize(xe.z,xe.w);const Ae=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(z),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),qe&&Oe.render(G);const be=_.toneMapping;_.toneMapping=Cr;const He=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),$===!0&&de.setGlobalState(_.clippingPlanes,j),Ir(A,G,j),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Le=0,dt=O.length;Le<dt;Le++){const B=O[Le],Q=B.object,re=B.geometry,pe=B.material,oe=B.group;if(pe.side===Bn&&Q.layers.test(j.layers)){const Ie=pe.side;pe.side=Sn,pe.needsUpdate=!0,Ho(Q,G,j,re,pe,oe),pe.side=Ie,pe.needsUpdate=!0,Ve=!0}}Ve===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he))}_.setRenderTarget(Ae),_.setClearColor(z,V),He!==void 0&&(j.viewport=He),_.toneMapping=be}function Ir(A,O,G){const j=O.isScene===!0?O.overrideMaterial:null;for(let k=0,he=A.length;k<he;k++){const xe=A[k],Ae=xe.object,be=xe.geometry,He=j===null?xe.material:j,Ve=xe.group;Ae.layers.test(G.layers)&&Ho(Ae,O,G,be,He,Ve)}}function Ho(A,O,G,j,k,he){A.onBeforeRender(_,O,G,j,k,he),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(_,O,G,j,A,he),k.transparent===!0&&k.side===Bn&&k.forceSinglePass===!1?(k.side=Sn,k.needsUpdate=!0,_.renderBufferDirect(G,O,j,k,A,he),k.side=Pr,k.needsUpdate=!0,_.renderBufferDirect(G,O,j,k,A,he),k.side=Bn):_.renderBufferDirect(G,O,j,k,A,he),A.onAfterRender(_,O,G,j,k,he)}function Or(A,O,G){O.isScene!==!0&&(O=Ye);const j=Ce.get(A),k=m.state.lights,he=m.state.shadowsArray,xe=k.state.version,Ae=Re.getParameters(A,k.state,he,O,G),be=Re.getProgramCacheKey(Ae);let He=j.programs;j.environment=A.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",nt),He=new Map,j.programs=He);let Ve=He.get(be);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===xe)return Go(A,Ae),Ve}else Ae.uniforms=Re.getUniforms(A),A.onBeforeCompile(Ae,_),Ve=Re.acquireProgram(Ae,be),He.set(be,Ve),j.uniforms=Ae.uniforms;const Le=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=de.uniform),Go(A,Ae),j.needsLights=Ja(A),j.lightsStateVersion=xe,j.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function Vo(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=wc.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Go(A,O){const G=Ce.get(A);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Ms(A,O,G,j,k){O.isScene!==!0&&(O=Ye),b.resetTextureUnits();const he=O.fog,xe=j.isMeshStandardMaterial?O.environment:null,Ae=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ur,be=(j.isMeshStandardMaterial?H:M).get(j.envMap||xe),He=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,B=!!G.morphAttributes.color;let Q=Cr;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Q=_.toneMapping);const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=re!==void 0?re.length:0,oe=Ce.get(j),Ie=m.state.lights;if($===!0&&(q===!0||A!==F)){const Pt=A===F&&j.id===P;de.setState(j,A,Pt)}let Ne=!1;j.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==Ie.state.version||oe.outputColorSpace!==Ae||k.isBatchedMesh&&oe.batching===!1||!k.isBatchedMesh&&oe.batching===!0||k.isBatchedMesh&&oe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&oe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&oe.instancing===!1||!k.isInstancedMesh&&oe.instancing===!0||k.isSkinnedMesh&&oe.skinning===!1||!k.isSkinnedMesh&&oe.skinning===!0||k.isInstancedMesh&&oe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&oe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&oe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&oe.instancingMorph===!1&&k.morphTexture!==null||oe.envMap!==be||j.fog===!0&&oe.fog!==he||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==de.numPlanes||oe.numIntersection!==de.numIntersection)||oe.vertexAlphas!==He||oe.vertexTangents!==Ve||oe.morphTargets!==Le||oe.morphNormals!==dt||oe.morphColors!==B||oe.toneMapping!==Q||oe.morphTargetsCount!==pe)&&(Ne=!0):(Ne=!0,oe.__version=j.version);let ke=oe.currentProgram;Ne===!0&&(ke=Or(j,O,k));let et=!1,ht=!1,Mt=!1;const st=ke.getUniforms(),zt=oe.uniforms;if(ie.useProgram(ke.program)&&(et=!0,ht=!0,Mt=!0),j.id!==P&&(P=j.id,ht=!0),et||F!==A){ne.reverseDepthBuffer?(ue.copy(A.projectionMatrix),RE(ue),bE(ue),st.setValue(U,"projectionMatrix",ue)):st.setValue(U,"projectionMatrix",A.projectionMatrix),st.setValue(U,"viewMatrix",A.matrixWorldInverse);const Pt=st.map.cameraPosition;Pt!==void 0&&Pt.setValue(U,Ue.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&st.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,ht=!0,Mt=!0)}if(k.isSkinnedMesh){st.setOptional(U,k,"bindMatrix"),st.setOptional(U,k,"bindMatrixInverse");const Pt=k.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),st.setValue(U,"boneTexture",Pt.boneTexture,b))}k.isBatchedMesh&&(st.setOptional(U,k,"batchingTexture"),st.setValue(U,"batchingTexture",k._matricesTexture,b),st.setOptional(U,k,"batchingIdTexture"),st.setValue(U,"batchingIdTexture",k._indirectTexture,b),st.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&st.setValue(U,"batchingColorTexture",k._colorsTexture,b));const Nn=G.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Be.update(k,G,ke),(ht||oe.receiveShadow!==k.receiveShadow)&&(oe.receiveShadow=k.receiveShadow,st.setValue(U,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(zt.envMap.value=be,zt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(zt.envMapIntensity.value=O.environmentIntensity),ht&&(st.setValue(U,"toneMappingExposure",_.toneMappingExposure),oe.needsLights&&Qa(zt,Mt),he&&j.fog===!0&&fe.refreshFogUniforms(zt,he),fe.refreshMaterialUniforms(zt,j,J,W,m.state.transmissionRenderTarget[A.id]),wc.upload(U,Vo(oe),zt,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(wc.upload(U,Vo(oe),zt,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&st.setValue(U,"center",k.center),st.setValue(U,"modelViewMatrix",k.modelViewMatrix),st.setValue(U,"normalMatrix",k.normalMatrix),st.setValue(U,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Pt=j.uniformsGroups;for(let Dn=0,Fr=Pt.length;Dn<Fr;Dn++){const kr=Pt[Dn];N.update(kr,ke),N.bind(kr,ke)}}return ke}function Qa(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Ja(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,G){Ce.get(A.texture).__webglTexture=O,Ce.get(A.depthTexture).__webglTexture=G;const j=Ce.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=G===void 0,j.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const G=Ce.get(A);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,G=0){w=A,L=O,C=G;let j=!0,k=null,he=!1,xe=!1;if(A){const be=Ce.get(A);if(be.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(be.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(be.__hasExternalTextures)b.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Le=A.depthTexture;if(be.__boundDepthTexture!==Le){if(Le!==null&&Ce.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(xe=!0);const Ve=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?k=Ve[O][G]:k=Ve[O],he=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?k=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[G]:k=Ve,x.copy(A.viewport),E.copy(A.scissor),I=A.scissorTest}else x.copy(Y).multiplyScalar(J).floor(),E.copy(ae).multiplyScalar(J).floor(),I=Te;if(ie.bindFramebuffer(U.FRAMEBUFFER,k)&&j&&ie.drawBuffers(A,k),ie.viewport(x),ie.scissor(E),ie.setScissorTest(I),he){const be=Ce.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,G)}else if(xe){const be=Ce.get(A.texture),He=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,G||0,He)}P=-1},this.readRenderTargetPixels=function(A,O,G,j,k,he,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){ie.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const be=A.texture,He=be.format,Ve=be.type;if(!ne.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-j&&G>=0&&G<=A.height-k&&U.readPixels(O,G,j,k,We.convert(He),We.convert(Ve),he)}finally{const be=w!==null?Ce.get(w).__webglFramebuffer:null;ie.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(A,O,G,j,k,he,xe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){const be=A.texture,He=be.format,Ve=be.type;if(!ne.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-j&&G>=0&&G<=A.height-k){ie.bindFramebuffer(U.FRAMEBUFFER,Ae);const Le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(O,G,j,k,We.convert(He),We.convert(Ve),0);const dt=w!==null?Ce.get(w).__webglFramebuffer:null;ie.bindFramebuffer(U.FRAMEBUFFER,dt);const B=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await CE(U,B,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.deleteBuffer(Le),U.deleteSync(B),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,G=0){A.isTexture!==!0&&(Ec("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-G),k=Math.floor(A.image.width*j),he=Math.floor(A.image.height*j),xe=O!==null?O.x:0,Ae=O!==null?O.y:0;b.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,xe,Ae,k,he),ie.unbindTexture()},this.copyTextureToTexture=function(A,O,G=null,j=null,k=0){A.isTexture!==!0&&(Ec("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],O=arguments[2],k=arguments[3]||0,G=null);let he,xe,Ae,be,He,Ve;G!==null?(he=G.max.x-G.min.x,xe=G.max.y-G.min.y,Ae=G.min.x,be=G.min.y):(he=A.image.width,xe=A.image.height,Ae=0,be=0),j!==null?(He=j.x,Ve=j.y):(He=0,Ve=0);const Le=We.convert(O.format),dt=We.convert(O.type);b.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const B=U.getParameter(U.UNPACK_ROW_LENGTH),Q=U.getParameter(U.UNPACK_IMAGE_HEIGHT),re=U.getParameter(U.UNPACK_SKIP_PIXELS),pe=U.getParameter(U.UNPACK_SKIP_ROWS),oe=U.getParameter(U.UNPACK_SKIP_IMAGES),Ie=A.isCompressedTexture?A.mipmaps[k]:A.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,be),A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,He,Ve,he,xe,Le,dt,Ie.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,He,Ve,Ie.width,Ie.height,Le,Ie.data):U.texSubImage2D(U.TEXTURE_2D,k,He,Ve,he,xe,Le,dt,Ie),U.pixelStorei(U.UNPACK_ROW_LENGTH,B),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Q),U.pixelStorei(U.UNPACK_SKIP_PIXELS,re),U.pixelStorei(U.UNPACK_SKIP_ROWS,pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,oe),k===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,O,G=null,j=null,k=0){A.isTexture!==!0&&(Ec("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,j=arguments[1]||null,A=arguments[2],O=arguments[3],k=arguments[4]||0);let he,xe,Ae,be,He,Ve,Le,dt,B;const Q=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(he=G.max.x-G.min.x,xe=G.max.y-G.min.y,Ae=G.max.z-G.min.z,be=G.min.x,He=G.min.y,Ve=G.min.z):(he=Q.width,xe=Q.height,Ae=Q.depth,be=0,He=0,Ve=0),j!==null?(Le=j.x,dt=j.y,B=j.z):(Le=0,dt=0,B=0);const re=We.convert(O.format),pe=We.convert(O.type);let oe;if(O.isData3DTexture)b.setTexture3D(O,0),oe=U.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)b.setTexture2DArray(O,0),oe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),Ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ke=U.getParameter(U.UNPACK_SKIP_PIXELS),et=U.getParameter(U.UNPACK_SKIP_ROWS),ht=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Q.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Q.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,be),U.pixelStorei(U.UNPACK_SKIP_ROWS,He),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve),A.isDataTexture||A.isData3DTexture?U.texSubImage3D(oe,k,Le,dt,B,he,xe,Ae,re,pe,Q.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(oe,k,Le,dt,B,he,xe,Ae,re,Q.data):U.texSubImage3D(oe,k,Le,dt,B,he,xe,Ae,re,pe,Q),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ht),k===0&&O.generateMipmaps&&U.generateMipmap(oe),ie.unbindTexture()},this.initRenderTarget=function(A){Ce.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){L=0,C=0,w=null,ie.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vp?"display-p3":"srgb",n.unpackColorSpace=ft.workingColorSpace===Su?"display-p3":"srgb"}}class zC extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class iy{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=bf,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new R;class Ci{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=hi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=hi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=hi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=hi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ln(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ci(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ry extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zs;const ia=new R,Bs=new R,Hs=new R,Vs=new Pe,ra=new Pe,sy=new ut,Vl=new R,sa=new R,Gl=new R,w0=new Pe,Id=new Pe,T0=new Pe;class BC extends kt{constructor(e=new ry){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Tt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new iy(n,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Ci(i,3,0,!1)),zs.setAttribute("uv",new Ci(i,2,3,!1))}this.geometry=zs,this.material=e,this.center=new Pe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),sy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-Hs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Wl(Vl.set(-.5,-.5,0),Hs,o,Bs,r,s),Wl(sa.set(.5,-.5,0),Hs,o,Bs,r,s),Wl(Gl.set(.5,.5,0),Hs,o,Bs,r,s),w0.set(0,0),Id.set(1,0),T0.set(1,1);let a=e.ray.intersectTriangle(Vl,sa,Gl,!1,ia);if(a===null&&(Wl(sa.set(-.5,.5,0),Hs,o,Bs,r,s),Id.set(0,1),a=e.ray.intersectTriangle(Vl,Gl,sa,!1,ia),a===null))return;const l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||n.push({distance:l,point:ia.clone(),uv:qn.getInterpolation(ia,Vl,sa,Gl,w0,Id,T0,new Pe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wl(t,e,n,i,r,s){Vs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ra.x=s*Vs.x-r*Vs.y,ra.y=r*Vs.x+s*Vs.y):ra.copy(Vs),t.copy(e),t.x+=ra.x,t.y+=ra.y,t.applyMatrix4(sy)}class eu extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tu=new R,nu=new R,A0=new ut,oa=new Mu,jl=new ys,Od=new R,C0=new R;class Yp extends kt{constructor(e=new Tt,n=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)tu.fromBufferAttribute(n,r-1),nu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=tu.distanceTo(nu);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(r),jl.radius+=s,e.ray.intersectsSphere(jl)===!1)return;A0.copy(r).invert(),oa.copy(e.ray).applyMatrix4(A0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const h=u.getX(y),v=u.getX(y+1),_=Xl(this,e,oa,l,h,v);_&&n.push(_)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(p),h=Xl(this,e,oa,l,y,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const h=Xl(this,e,oa,l,y,y+1);h&&n.push(h)}if(this.isLineLoop){const y=Xl(this,e,oa,l,g-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(tu.fromBufferAttribute(o,r),nu.fromBufferAttribute(o,s),n.distanceSqToSegment(tu,nu,Od,C0)>i)return;Od.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Od);if(!(l<e.near||l>e.far))return{distance:l,point:C0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const R0=new R,b0=new R;class HC extends Yp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)R0.fromBufferAttribute(n,r),b0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+R0.distanceTo(b0);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VC extends Yp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class oy extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P0=new ut,Lf=new Mu,$l=new ys,Yl=new R;class Fd extends kt{constructor(e=new Tt,n=new oy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;P0.copy(r).invert(),Lf.copy(e.ray).applyMatrix4(P0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,y=p;g<y;g++){const m=c.getX(g);Yl.fromBufferAttribute(d,m),L0(Yl,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,y=p;g<y;g++)Yl.fromBufferAttribute(d,g),L0(Yl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function L0(t,e,n,i,r,s,o){const a=Lf.distanceSqToPoint(t);if(a<n){const l=new R;Lf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Nf extends Mn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class GC{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Pe:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new R,r=[],s=[],o=[],a=new R,l=new ut;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Wt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Wt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function qp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ql=new R,kd=new qp,zd=new qp,Bd=new qp;class WC extends GC{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new R){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ql.subVectors(r[0],r[1]).add(r[0]),c=ql);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ql.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ql),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),kd.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,y,m),zd.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,y,m),Bd.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(kd.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),zd.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Bd.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(kd.calc(l),zd.calc(l),Bd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Ga extends Tt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new R,u=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ui extends Tt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const y=[],m=i/2;let h=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function v(){const S=new R,L=new R;let C=0;const w=(n-e)/i;for(let P=0;P<=s;P++){const F=[],x=P/s,E=x*(n-e)+e;for(let I=0;I<=r;I++){const z=I/r,V=z*l+a,X=Math.sin(V),W=Math.cos(V);L.x=E*X,L.y=-x*i+m,L.z=E*W,d.push(L.x,L.y,L.z),S.set(X,w,W).normalize(),f.push(S.x,S.y,S.z),p.push(z,1-x),F.push(g++)}y.push(F)}for(let P=0;P<r;P++)for(let F=0;F<s;F++){const x=y[F][P],E=y[F+1][P],I=y[F+1][P+1],z=y[F][P+1];e>0&&(u.push(x,E,z),C+=3),n>0&&(u.push(E,I,z),C+=3)}c.addGroup(h,C,0),h+=C}function _(S){const L=g,C=new Pe,w=new R;let P=0;const F=S===!0?e:n,x=S===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const E=g;for(let I=0;I<=r;I++){const V=I/r*l+a,X=Math.cos(V),W=Math.sin(V);w.x=F*W,w.y=m*x,w.z=F*X,d.push(w.x,w.y,w.z),f.push(0,x,0),C.x=X*.5+.5,C.y=W*.5*x+.5,p.push(C.x,C.y),g++}for(let I=0;I<r;I++){const z=L+I,V=E+I;S===!0?u.push(V,V+1,z):u.push(V+1,V,z),P+=3}c.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kp extends Tt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(s.slice(),3)),this.setAttribute("uv",new ot(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new R,S=new R,L=new R;for(let C=0;C<n.length;C+=3)p(n[C+0],_),p(n[C+1],S),p(n[C+2],L),l(_,S,L,v)}function l(v,_,S,L){const C=L+1,w=[];for(let P=0;P<=C;P++){w[P]=[];const F=v.clone().lerp(S,P/C),x=_.clone().lerp(S,P/C),E=C-P;for(let I=0;I<=E;I++)I===0&&P===C?w[P][I]=F:w[P][I]=F.clone().lerp(x,I/E)}for(let P=0;P<C;P++)for(let F=0;F<2*(C-P)-1;F++){const x=Math.floor(F/2);F%2===0?(f(w[P][x+1]),f(w[P+1][x]),f(w[P][x])):(f(w[P][x+1]),f(w[P+1][x+1]),f(w[P+1][x]))}}function c(v){const _=new R;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(v),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function u(){const v=new R;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const S=m(v)/2/Math.PI+.5,L=h(v)/Math.PI+.5;o.push(S,1-L)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const _=o[v+0],S=o[v+2],L=o[v+4],C=Math.max(_,S,L),w=Math.min(_,S,L);C>.9&&w<.1&&(_<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,_){const S=v*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function g(){const v=new R,_=new R,S=new R,L=new R,C=new Pe,w=new Pe,P=new Pe;for(let F=0,x=0;F<s.length;F+=9,x+=6){v.set(s[F+0],s[F+1],s[F+2]),_.set(s[F+3],s[F+4],s[F+5]),S.set(s[F+6],s[F+7],s[F+8]),C.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),L.copy(v).add(_).add(S).divideScalar(3);const E=m(L);y(C,x+0,v,E),y(w,x+2,_,E),y(P,x+4,S,E)}}function y(v,_,S,L){L<0&&v.x===1&&(o[_]=v.x-1),S.x===0&&S.z===0&&(o[_]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.vertices,e.indices,e.radius,e.details)}}class Zp extends Kp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zp(e.radius,e.detail)}}class Qp extends Tt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new R,g=new Pe;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}d+=f}for(let y=0;y<r;y++){const m=y*(i+1);for(let h=0;h<i;h++){const v=h+m,_=v,S=v+i+1,L=v+i+2,C=v+1;a.push(_,S,C),a.push(S,L,C)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ti extends Tt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new R,f=new R,p=[],g=[],y=[],m=[];for(let h=0;h<=i;h++){const v=[],_=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let L=0;L<=n;L++){const C=L/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(C+S,1-_),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const _=u[h][v+1],S=u[h][v],L=u[h+1][v],C=u[h+1][v+1];(h!==0||o>0)&&p.push(_,S,C),(h!==i-1||l<Math.PI)&&p.push(S,L,C)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jp extends Tt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new R,d=new R,f=new R;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(y,m,v),o.push(m,h,v)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jC extends Tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new R,s=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],f=d.start,p=d.count;for(let g=f,y=f+p;g<y;g+=3)for(let m=0;m<3;m++){const h=a.getX(g+m),v=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,v),N0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),N0(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new ot(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function N0(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class XC extends nr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $C extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dr extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bx,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kl extends dr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class YC extends eu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class em extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class qC extends em{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Hd=new ut,D0=new R,U0=new R;class ay{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;D0.setFromMatrixPosition(e.matrixWorld),n.position.copy(D0),U0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(U0),n.updateMatrixWorld(),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const I0=new ut,aa=new R,Vd=new R;class KC extends ay{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(aa),Vd.copy(i.position),Vd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Vd),i.updateMatrixWorld(),r.makeTranslation(-aa.x,-aa.y,-aa.z),I0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(I0)}}class ZC extends em{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new KC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class QC extends ay{constructor(){super(new Xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zl extends em{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new QC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class JC extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class eR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=O0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=O0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function O0(){return performance.now()}class Df extends iy{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const F0=new ut;class tR{constructor(e,n,i=0,r=1/0){this.ray=new Mu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return F0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(F0),this}intersectObject(e,n=!0,i=[]){return Uf(e,this,i,n),i.sort(k0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Uf(e[r],this,i,n);return i.sort(k0),i}}function k0(t,e){return t.distance-e.distance}function Uf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Uf(s[o],e,n,!0)}}const z0=new R,Ql=new R;class nR{constructor(e=new R,n=new R){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){z0.subVectors(e,this.start),Ql.subVectors(this.end,this.start);const i=Ql.dot(Ql);let s=Ql.dot(z0)/i;return n&&(s=Wt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);class iR extends kt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Pe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Gs=new R,B0=new ut,H0=new ut,V0=new R,G0=new R;class rR{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(g,y){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B0.copy(y.matrixWorldInverse),H0.multiplyMatrices(y.projectionMatrix,B0),u(g,g,y),p(g)},this.setSize=function(g,y){i=g,r=y,s=i/2,o=r/2,l.style.width=g+"px",l.style.height=y+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let y=0,m=g.children.length;y<m;y++)c(g.children[y])}function u(g,y,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Gs.setFromMatrixPosition(g.matrixWorld),Gs.applyMatrix4(H0);const h=Gs.z>=-1&&Gs.z<=1&&g.layers.test(m.layers)===!0,v=g.element;v.style.display=h===!0?"":"none",h===!0&&(g.onBeforeRender(n,y,m),v.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Gs.x*s+s)+"px,"+(-Gs.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),g.onAfterRender(n,y,m));const _={distanceToCameraSquared:d(m,g)};a.objects.set(g,_)}for(let h=0,v=g.children.length;h<v;h++)u(g.children[h],y,m)}function d(g,y){return V0.setFromMatrixPosition(g.matrixWorld),G0.setFromMatrixPosition(y.matrixWorld),V0.distanceToSquared(G0)}function f(g){const y=[];return g.traverseVisible(function(m){m.isCSS2DObject&&y.push(m)}),y}function p(g){const y=f(g).sort(function(h,v){if(h.renderOrder!==v.renderOrder)return v.renderOrder-h.renderOrder;const _=a.objects.get(h).distanceToCameraSquared,S=a.objects.get(v).distanceToCameraSquared;return _-S}),m=y.length;for(let h=0,v=y.length;h<v;h++)y[h].element.style.zIndex=m-h}}}const ly={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sR=new Xp(-1,1,1,-1,0,1);class oR extends Tt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const aR=new oR;class tm{constructor(e){this._mesh=new wt(aR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lR extends Fo{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vs.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tm(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class W0 extends Fo{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class cR extends Fo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uR{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Pe);this._width=i.width,this._height=i.height,n=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lR(ly),this.copyPass.material.blending=$i,this.clock=new eR}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}W0!==void 0&&(o instanceof W0?i=!0:o instanceof cR&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dR extends Fo{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const hR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class bo extends Fo{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vi(s,o,{type:Yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new vi(s,o,{type:Yi});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new vi(s,o,{type:Yi});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=hR;this.highPassUniforms=vs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Pe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ly;this.copyUniforms=vs.clone(u.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Fe,this.oldClearAlpha=1,this.basic=new as,this.fsQuad=new tm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Pe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=bo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=bo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}bo.BlurDirectionX=new Pe(1,0);bo.BlurDirectionY=new Pe(0,1);const fR={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class pR extends Fo{constructor(){super();const e=fR;this.uniforms=vs.clone(e.uniforms),this.material=new $C({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new tm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ax?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ip?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rx&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const j0=new Li,Jl=new R;class cy extends JC{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ot(e,3)),this.setAttribute("uv",new ot(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Df(n,6,1);return this.setAttribute("instanceStart",new Ci(i,3,0)),this.setAttribute("instanceEnd",new Ci(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Df(n,6,1);return this.setAttribute("instanceColorStart",new Ci(i,3,0)),this.setAttribute("instanceColorEnd",new Ci(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new jC(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),j0.setFromBufferAttribute(n),this.boundingBox.union(j0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jl.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jl)),Jl.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(Jl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};An.line={uniforms:vs.merge([ge.common,ge.fog,ge.line]),vertexShader:`
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
		`};class nm extends Nt{constructor(e){super({type:"LineMaterial",uniforms:vs.clone(An.line.uniforms),vertexShader:An.line.vertexShader,fragmentShader:An.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Gd=new lt,X0=new R,$0=new R,Jt=new lt,en=new lt,yi=new lt,Wd=new R,jd=new ut,nn=new nR,Y0=new R,ec=new Li,tc=new ys,Si=new lt;let Ai,cs;function q0(t,e,n){return Si.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),Si.multiplyScalar(1/Si.w),Si.x=cs/n.width,Si.y=cs/n.height,Si.applyMatrix4(t.projectionMatrixInverse),Si.multiplyScalar(1/Si.w),Math.abs(Math.max(Si.x,Si.y))}function mR(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){nn.start.fromBufferAttribute(r,a),nn.end.fromBufferAttribute(s,a),nn.applyMatrix4(n);const c=new R,u=new R;Ai.distanceSqToSegment(nn.start,nn.end,u,c),u.distanceTo(c)<cs*.5&&e.push({point:u,pointOnLine:c,distance:Ai.origin.distanceTo(u),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function gR(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),d=-e.near;Ai.at(1,yi),yi.w=1,yi.applyMatrix4(e.matrixWorldInverse),yi.applyMatrix4(i),yi.multiplyScalar(1/yi.w),yi.x*=s.x/2,yi.y*=s.y/2,yi.z=0,Wd.copy(yi),jd.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(Jt.fromBufferAttribute(l,f),en.fromBufferAttribute(c,f),Jt.w=1,en.w=1,Jt.applyMatrix4(jd),en.applyMatrix4(jd),Jt.z>d&&en.z>d)continue;if(Jt.z>d){const _=Jt.z-en.z,S=(Jt.z-d)/_;Jt.lerp(en,S)}else if(en.z>d){const _=en.z-Jt.z,S=(en.z-d)/_;en.lerp(Jt,S)}Jt.applyMatrix4(i),en.applyMatrix4(i),Jt.multiplyScalar(1/Jt.w),en.multiplyScalar(1/en.w),Jt.x*=s.x/2,Jt.y*=s.y/2,en.x*=s.x/2,en.y*=s.y/2,nn.start.copy(Jt),nn.start.z=0,nn.end.copy(en),nn.end.z=0;const y=nn.closestPointToPointParameter(Wd,!0);nn.at(y,Y0);const m=xt.lerp(Jt.z,en.z,y),h=m>=-1&&m<=1,v=Wd.distanceTo(Y0)<cs*.5;if(h&&v){nn.start.fromBufferAttribute(l,f),nn.end.fromBufferAttribute(c,f),nn.start.applyMatrix4(o),nn.end.applyMatrix4(o);const _=new R,S=new R;Ai.distanceSqToSegment(nn.start,nn.end,S,_),n.push({point:S,pointOnLine:_,distance:Ai.origin.distanceTo(S),object:t,face:null,faceIndex:f,uv:null,uv1:null})}}}class vR extends wt{constructor(e=new cy,n=new nm({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)X0.fromBufferAttribute(n,o),$0.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+X0.distanceTo($0);const s=new Df(r,2,1);return e.setAttribute("instanceDistanceStart",new Ci(s,1,0)),e.setAttribute("instanceDistanceEnd",new Ci(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ai=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;cs=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),tc.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=cs*.5;else{const d=Math.max(r.near,tc.distanceToPoint(Ai.origin));c=q0(r,d,l.resolution)}if(tc.radius+=c,Ai.intersectsSphere(tc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ec.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=cs*.5;else{const d=Math.max(r.near,ec.distanceToPoint(Ai.origin));u=q0(r,d,l.resolution)}ec.expandByScalar(u),Ai.intersectsBox(ec)!==!1&&(i?mR(this,n):gR(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(Gd),this.material.uniforms.resolution.value.set(Gd.z,Gd.w))}}class uy extends cy{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}}class _R extends vR{constructor(e=new uy,n=new nm({color:Math.random()*16777215})){super(e,n),this.isLine2=!0,this.type="Line2"}}const _n={name:"Simulation field",p1p2DistanceM:24.2,distanceIsEstimate:!1,distanceM:24.2,targetAltitudeM:12,climbRateMps:1.5,droneDisplayScale:1.2,holdScaleBoost:.28,launchOffsetM:{x:-1.1,z:.15},quality:"auto",start:{x:0,z:0},goal:{x:0,z:-24.2},bounds:{minX:-10,maxX:10,minZ:-24.2-6,maxZ:6}},$r=2.4,If=[0,0,0],xR=[0,0,-_n.p1p2DistanceM],yR=[If[0]+_n.launchOffsetM.x,0,If[2]+_n.launchOffsetM.z];function SR(t=2205){return{seed:t,obstacles:[],cloud:{positions:new Float32Array(0),intensity:new Float32Array(0),count:0}}}function MR(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,8,64,64,64);n.addColorStop(0,"rgba(255,255,255,0.0)"),n.addColorStop(.18,"rgba(255,255,255,0.35)"),n.addColorStop(.85,"rgba(255,255,255,0.22)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const i=new Nf(t);return i.colorSpace=kn,i}function ER(t=1){const e=[],n=Y=>(e.push(Y),Y),i=new ji,r=new ji;i.add(r);const s=n(new Kl({color:"#16181c",roughness:.38,metalness:.35,clearcoat:.6,clearcoatRoughness:.25})),o=n(new Kl({color:"#1f232a",roughness:.5,metalness:.2,clearcoat:.3})),a=n(new dr({color:"#8a929c",roughness:.28,metalness:.9})),l=n(new dr({color:"#0d0f12",roughness:.6,metalness:.2})),c=n(new Kl({color:"#20262f",roughness:.18,metalness:.1,clearcoat:1,clearcoatRoughness:.08})),u=n(new dr({color:"#38d6f5",emissive:"#38d6f5",emissiveIntensity:.6,roughness:.4})),d=n(new dr({color:"#f2f4f6",roughness:.45,metalness:.05})),f=n(MR()),p=n(new as({map:f,color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1,side:Bn})),g=n(new Kl({color:"#0a0d12",roughness:.05,metalness:.2,clearcoat:1})),y=(Y,ae)=>{n(Y);const Te=new wt(Y,ae);return Te.castShadow=!0,Te},m=y(new hn(.17,.012,.22),o);m.position.y=-.01,r.add(m);const h=y(new hn(.15,.01,.2),o);h.position.y=.035,r.add(h);const v=y(new hn(.075,.035,.15),l);v.position.set(0,.06,.01),r.add(v);const _=y(new hn(.08,.037,.012),u);_.position.set(0,.06,.03),r.add(_);const S=y(new Ti(.075,24,14,0,Math.PI*2,0,Math.PI/2),c);S.scale.set(1,.55,1.35),S.position.set(0,.04,-.05),r.add(S);for(const Y of[-.06,.06])for(const ae of[-.08,.08]){const Te=y(new ui(.004,.004,.045,6),a);Te.position.set(Y,.012,ae),r.add(Te)}const L=[],C=.26,w=[],P=[],F=[];[[1,-1],[-1,-1],[1,1],[-1,1]].forEach(([Y,ae],Te)=>{const Ge=Math.atan2(Y,ae),$=y(new hn(.026,.014,C),s);$.position.set(Y*C/2*Math.SQRT1_2,.012,ae*C/2*Math.SQRT1_2),$.rotation.y=Ge,r.add($);const q=Y*C*Math.SQRT1_2,ue=ae*C*Math.SQRT1_2,me=y(new ui(.019,.021,.022,20),l);me.position.set(q,.03,ue),r.add(me);const Ue=y(new ui(.02,.02,.016,24),a);Ue.position.set(q,.048,ue),r.add(Ue);const De=y(new ui(.006,.006,.012,10),a);De.position.set(q,.062,ue),r.add(De);const Ye=new ji;Ye.position.set(q,.062,ue);for(const ie of[0,Math.PI]){const je=y(new hn(.115,.004,.022),d);je.position.x=Math.cos(ie)*.062,je.rotation.y=ie,je.rotation.x=.12*(ie?-1:1),Ye.add(je)}r.add(Ye);const qe=new wt(n(new Ga(.13,40)),p);qe.rotation.x=-Math.PI/2,qe.position.set(q,.064,ue),r.add(qe),L.push({blades:Ye,disc:qe,dir:Te%3===0?1:-1});const Xe=Y<0,U=n(new dr({color:Xe?"#ff2a3a":"#22ff7a",emissive:Xe?"#ff2a3a":"#22ff7a",emissiveIntensity:2.2}));F.push(U);const St=new wt(n(new Ti(.009,10,8)),U);St.position.set(q,.012,ue),r.add(St),(Xe?w:P).push(St);const $e=y(new ui(.004,.004,.09,6),s);$e.position.set(q*.82,-.035,ue*.82),$e.rotation.z=Y*.12,$e.rotation.x=-ae*.12,r.add($e);const ne=y(new Ti(.008,10,8),l);ne.position.set(q*.86,-.08,ue*.86),r.add(ne)});const x=y(new hn(.014,.03,.014),l);x.position.set(0,-.03,-.11),r.add(x);const E=y(new Ti(.022,20,14),a);E.position.set(0,-.052,-.115),r.add(E);const I=y(new ui(.011,.011,.012,16),g);I.rotation.x=Math.PI/2,I.position.set(0,-.052,-.135),r.add(I);const z=n(new dr({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:0}));F.push(z);const V=new wt(n(new Ti(.011,12,10)),z);V.position.set(0,.088,.04),r.add(V);const X=new ZC("#ffffff",0,3.5,2);X.position.copy(V.position),r.add(X);const W=n(new dr({color:"#38d6f5",emissive:"#38d6f5",emissiveIntensity:1.6}));F.push(W);const J=new wt(n(new Jp(.05,.004,8,40)),W);J.rotation.x=Math.PI/2,J.position.y=-.018,r.add(J),i.scale.setScalar(t);const D=new Li(new R(-.32,-.09,-.32),new R(.32,.1,.32));let K=0;return{group:i,body:r,props:L,strobe:V,strobeLight:X,navRed:w,navGreen:P,ring:J,ledMats:F,bounds:D,update(Y,ae,Te,Ge){for(const ue of L)ue.blades.rotation.y+=ue.dir*Y*(6+ae*160);const $=xt.smoothstep(ae,.35,.8);p.opacity=.55*$;for(const ue of L)ue.blades.children.forEach(me=>{me.material.opacity=1,me.visible=$<.85});K=Ge.strobe?(K+Y)%1.2:0;const q=Ge.strobe&&(K<.05||K>.16&&K<.21);z.emissiveIntensity=q?8*Ge.ledGain:.05,X.intensity=q?4*Ge.ledGain:0;for(const ue of F)ue!==z&&(ue.emissiveIntensity=(ue===W?1.4+.4*Math.sin(Te*3):2.2)*Ge.ledGain)},dispose(){e.forEach(Y=>Y.dispose())}}}const Ht={ready:!1,quality:"high",qualityAuto:!0,fps:0,fpsHigh:0,droneBox:null,p2Box:null,labels:{},preset:"AUTO",mode:"night",env:{gridPoints:0,beacons:{}},hover:!1,focus:!1,cost:{renderMs:0}},Xd=t=>new R(t[0],t[1],t[2]),wR=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1,nc=(t,e)=>({x0:t.x0-e,y0:t.y0-e,x1:t.x1+e,y1:t.y1+e}),On=xt.clamp;function TR(t){const e=ze.useRef(null),n=ze.useRef(t);n.current=t;const i=ze.useRef({preset:t.preset,token:t.presetToken});return ze.useEffect(()=>{const r=e.current;let s=!1;const o=[],a=B=>(o.push(B),B);let l;try{l=new kC({antialias:!0,powerPreference:"high-performance"})}catch{r.innerHTML='<div class="webgl-fail">WebGL is unavailable. Enable hardware acceleration to view the 3D site.</div>';return}l.outputColorSpace=kn,l.toneMapping=Ip,l.toneMappingExposure=1,l.shadowMap.type=Mx,l.setClearColor("#03060c"),r.appendChild(l.domElement);const c=new rR;c.domElement.className="labels3d",r.appendChild(c.domElement);const u=new zC,d=new zn(50,1,.05,2e3);d.rotation.order="YXZ";const f=Xd(If),p=Xd(xR),g=Xd(yR),y=new R(p.x-g.x,0,p.z-g.z).normalize(),m=new R(-y.z,0,y.x),h=g.clone().add(new R(.55,0,1).normalize().multiplyScalar(7)).setY(2.2),v={night:{top:"#02050b",hor:"#0a1730"},day:{top:"#0b2246",hor:"#1d4a80"}},_=a(new Nt({uniforms:{top:{value:new Fe(v.night.top)},horizon:{value:new Fe(v.night.hor)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(vP.y * 1.5, 0.0, 1.0); gl_FragColor = vec4(mix(horizon, top, sqrt(h)), 1.0); 
#include <colorspace_fragment>
 }`,side:Sn,depthWrite:!1,toneMapped:!1})),S=new wt(a(new Ti(1500,32,16)),_);u.add(S);const L=a(new Tt);{const Q=new Float32Array(4200),re=new Float32Array(1400);let pe=7;const oe=()=>(pe=pe*16807%2147483647,pe/2147483647);for(let Ie=0;Ie<1400;Ie++){const Ne=oe()*Math.PI*2,ke=Math.asin(.04+oe()*.96),et=1200;Q.set([Math.cos(Ne)*Math.cos(ke)*et,Math.sin(ke)*et,Math.sin(Ne)*Math.cos(ke)*et],Ie*3),re[Ie]=.6+oe()*oe()*2.2}L.setAttribute("position",new Ln(Q,3)),L.setAttribute("size",new Ln(re,1))}const C=a(new Nt({uniforms:{opacity:{value:.75},pr:{value:1}},vertexShader:"attribute float size; uniform float pr; void main(){ gl_PointSize = size * pr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float opacity; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; gl_FragColor = vec4(vec3(0.82,0.9,1.0), opacity * (1.0 - d * 2.0)); }",transparent:!0,depthWrite:!1,toneMapped:!1})),w=new Fd(L,C);w.frustumCulled=!1,u.add(w);const P=a(new Nt({uniforms:{color:{value:new Fe("#38d6f5")},opacity:{value:.85},center:{value:new Pe(g.x,g.z)},radius:{value:60},pr:{value:1},horizon:{value:70}},vertexShader:`attribute float major; uniform vec2 center; uniform float radius; uniform float pr; uniform float horizon;
        varying float vA; varying float vMajor;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float dist = -mv.z;
          float edge = 1.0 - smoothstep(radius * 0.55, radius, length(position.xz - center));   // fade at the field edge
          float hor = 1.0 - smoothstep(horizon * 0.35, horizon, dist);                            // fade toward the horizon
          vA = edge * hor; vMajor = major;
          gl_PointSize = clamp((major > 0.5 ? 3.2 : 2.1) * pr * 14.0 / max(dist, 0.5), 1.0, (major > 0.5 ? 4.5 : 3.2) * pr);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform vec3 color; uniform float opacity; varying float vA; varying float vMajor;
        void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5 || vA < 0.01) discard;
          float a = opacity * vA * (1.0 - smoothstep(0.25, 0.5, d)) * (vMajor > 0.5 ? 1.0 : 0.62);
          gl_FragColor = vec4(color * (vMajor > 0.5 ? 1.25 : 1.0), a); }`,transparent:!0,depthWrite:!1,toneMapped:!1,blending:Ei}));let F=null;const x=(B,Q)=>{F&&(u.remove(F),F.geometry.dispose());const re=[],pe=[],oe=Math.floor(Q/B);for(let Ne=-oe;Ne<=oe;Ne++)for(let ke=-oe;ke<=oe;ke++){const et=Ne*B,ht=ke*B;et*et+ht*ht>Q*Q||(re.push(g.x+et,0,g.z+ht),pe.push(Math.abs(Math.round(et/5)*5-et)<.001&&Math.abs(Math.round(ht/5)*5-ht)<.001?1:0))}const Ie=new Tt;Ie.setAttribute("position",new ot(re,3)),Ie.setAttribute("major",new ot(pe,1)),F=new Fd(Ie,P),F.frustumCulled=!1,F.renderOrder=0,P.uniforms.radius.value=Q,u.add(F),Ht.env.gridPoints=pe.length},E=new ji;E.position.set(g.x,.012,g.z),u.add(E);const I=a(new eu({color:"#38d6f5",transparent:!0,opacity:.32,depthWrite:!1,toneMapped:!1})),z=a(new eu({color:"#38d6f5",transparent:!0,opacity:.14,depthWrite:!1,toneMapped:!1}));for(const B of[5,10,15]){const Q=[];for(let re=0;re<=128;re++){const pe=re/128*Math.PI*2;Q.push(new R(Math.cos(pe)*B,0,Math.sin(pe)*B))}E.add(new VC(a(new Tt().setFromPoints(Q)),I))}{const B=[];for(let Q=0;Q<12;Q++){const re=Q/12*Math.PI*2,pe=Math.cos(re),oe=Math.sin(re);B.push(new R(pe*1.2,0,oe*1.2),new R(pe*15,0,oe*15))}E.add(new HC(a(new Tt().setFromPoints(B)),z))}const V=a(new Nt({uniforms:{color:{value:new Fe("#38d6f5")},opacity:{value:.16}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 color; uniform float opacity; varying vec2 vUv; void main(){ vec2 p = vUv * 2.0 - 1.0; float t = clamp(atan(p.y, p.x) / 0.55, 0.0, 1.0); float r = length(p); gl_FragColor = vec4(color, opacity * t * t * smoothstep(0.08, 0.3, r) * (1.0 - smoothstep(0.85, 1.0, r))); }",transparent:!0,side:Bn,depthWrite:!1,blending:Ei,toneMapped:!1})),X=new wt(a(new Ga(15,48,0,.55)),V);X.rotation.x=-Math.PI/2,E.add(X);const W=new qC("#7f95c8","#0a1424",.75);u.add(W);const J=new Zl("#dbe7ff",1.8);J.position.set(g.x+8,22,g.z+6),J.target.position.set(g.x,0,g.z),J.castShadow=!0,J.shadow.mapSize.set(1024,1024);const D=J.shadow.camera;D.left=-5,D.right=5,D.top=5,D.bottom=-5,D.near=1,D.far=60,J.shadow.bias=-5e-4,u.add(J,J.target);const K=new Zl("#7fe8ff",2.4);u.add(K,K.target);const Y=new Zl("#ffd6a8",.5);Y.position.set(g.x-20,10,g.z-10),u.add(Y);const ae=(B,Q)=>{const re=new ji;re.position.set(B.x,0,B.z);const pe=new wt(a(new Qp(.55,.72,48)),a(new as({color:Q,transparent:!0,opacity:.95,side:Bn,depthWrite:!1,toneMapped:!1})));pe.rotation.x=-Math.PI/2,pe.position.y=.02,re.add(pe);const oe=new wt(a(new Ga(1.6,48)),a(new Nt({uniforms:{color:{value:new Fe(Q)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 color; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; gl_FragColor = vec4(color, 0.38 * (1.0 - smoothstep(0.0, 1.0, d))); }",transparent:!0,depthWrite:!1,blending:Ei,toneMapped:!1})));oe.rotation.x=-Math.PI/2,oe.position.y=.015,re.add(oe);const Ie=a(new Nt({uniforms:{color:{value:new Fe(Q)}},vertexShader:"varying float vH; void main(){ vH = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 color; varying float vH; void main(){ gl_FragColor = vec4(color * 1.3, 0.9 * pow(1.0 - vH, 1.6) + 0.06); }",transparent:!0,depthWrite:!1,blending:Ei,toneMapped:!1,side:Bn})),Ne=new wt(a(new ui(.045,.06,$r,12,1,!0)),Ie);Ne.position.y=$r/2,re.add(Ne);const ke=new wt(a(new Ti(.09,16,12)),a(new as({color:Q,toneMapped:!1})));return ke.position.y=$r,re.add(ke),u.add(re),re};ae(f,"#38d6f5"),ae(p,"#fbbf24");const Te=[],Ge=[];for(let B=0;B<=40;B++){const Q=B/40;Ge.push(f.x+(p.x-f.x)*Q,.04,f.z+(p.z-f.z)*Q)}const $=(B,Q,re,pe)=>{const oe=a(new uy);oe.setPositions(Ge);const Ie=a(new nm({color:new Fe(Q).getHex(),linewidth:B,transparent:!0,opacity:re,dashed:pe,dashSize:.9,gapSize:.6,depthWrite:!1}));Ie.toneMapped=!1,Te.push(Ie);const Ne=new _R(oe,Ie);return Ne.computeLineDistances(),Ne.renderOrder=2,u.add(Ne),Ne};$(9,"#38d6f5",.16,!1),$(2.5,"#7fe8ff",.95,!0);const q=ER(_n.droneDisplayScale);u.add(q.group);const ue=a((()=>{const B=document.createElement("canvas");B.width=B.height=128;const Q=B.getContext("2d"),re=Q.createRadialGradient(64,64,0,64,64,64);re.addColorStop(0,"rgba(160,236,255,0.55)"),re.addColorStop(.35,"rgba(56,214,245,0.22)"),re.addColorStop(1,"rgba(56,214,245,0)"),Q.fillStyle=re,Q.fillRect(0,0,128,128);const pe=new Nf(B);return pe.colorSpace=kn,pe})()),me=a(new ry({map:ue,transparent:!0,depthWrite:!1,blending:Ei,sizeAttenuation:!1,toneMapped:!1})),Ue=new BC(me);Ue.renderOrder=-1,u.add(Ue);const De=new Zl("#cfe6ff",.9);u.add(De,De.target);const Ye=(()=>{const B=document.createElement("canvas");B.width=B.height=128;const Q=B.getContext("2d"),re=Q.createRadialGradient(64,64,0,64,64,64);return re.addColorStop(0,"rgba(0,0,0,0.85)"),re.addColorStop(.5,"rgba(0,0,0,0.45)"),re.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=re,Q.fillRect(0,0,128,128),a(new Nf(B))})(),qe=new wt(a(new ls(1,1)),a(new as({map:Ye,transparent:!0,depthWrite:!1})));qe.rotation.x=-Math.PI/2,qe.renderOrder=1,u.add(qe);const Xe=new wt(a(new ls(14,14)),a(new XC({opacity:.45})));Xe.rotation.x=-Math.PI/2,Xe.position.set(g.x,.012,g.z),Xe.receiveShadow=!0,u.add(Xe);const U=a(new Nt({uniforms:{color:{value:new Fe("#38d6f5")},strength:{value:.5}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 color; uniform float strength; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; gl_FragColor = vec4(color, strength * (1.0 - smoothstep(0.2, 1.0, d)) * smoothstep(0.0, 0.25, d)); }",transparent:!0,depthWrite:!1,blending:Ei,toneMapped:!1})),St=new wt(a(new ls(1,1)),U);St.rotation.x=-Math.PI/2,St.position.set(g.x,.018,g.z),u.add(St);const $e=a(new Tt().setFromPoints([new R,new R])),ne=new Yp($e,a(new YC({color:"#e8f6ff",dashSize:.18,gapSize:.12,transparent:!0,opacity:.85,toneMapped:!1})));ne.frustumCulled=!1,u.add(ne);const ie=70,je=new Float32Array(ie*3),Ce=new Float32Array(ie*3),b=a(new Tt);b.setAttribute("position",new Ln(je,3));const M=a(new oy({color:"#9fdcff",size:.05,transparent:!0,opacity:0,depthWrite:!1,blending:Ei})),H=new Fd(b,M);H.frustumCulled=!1,u.add(H);let ee=-1;const le=()=>{ee=0;for(let B=0;B<ie;B++){const Q=Math.random()*Math.PI*2,re=.8+Math.random()*1.6;je.set([g.x+Math.cos(Q)*.25,.03+Math.random()*.05,g.z+Math.sin(Q)*.25],B*3),Ce.set([Math.cos(Q)*re,.15+Math.random()*.35,Math.sin(Q)*re],B*3)}b.attributes.position.needsUpdate=!0},te=new uR(l);te.addPass(new dR(u,d));const Re=new bo(new Pe(512,512),.9,.4,.62);te.addPass(Re),te.addPass(new pR);const fe={},ye=(B,Q,re)=>{const pe=document.createElement("div");pe.className="l3-wrap";const oe=document.createElementNS("http://www.w3.org/2000/svg","svg");oe.setAttribute("class","l3-leader");const Ie=document.createElementNS("http://www.w3.org/2000/svg","line");oe.appendChild(Ie);const Ne=document.createElement("div");Ne.className=`l3 ${Q}`,Ne.dataset.ov=`label-${B}`,pe.append(oe,Ne);const ke=new iR(pe);return u.add(ke),fe[B]={id:B,obj:ke,box:Ne,svg:oe,line:Ie,w:0,h:0,text:"",cands:re,anchor:new R,visible:!0},fe[B]},rt=(B,Q,re)=>[[Q,-64],[-B-Q,-64],[Q,18],[-B-Q,18],[Q,-118],[-B-Q,-118],[-B/2,-110],[-B/2,40],[re,-64],[-B-re,-64],[re,18],[-B-re,18],[-B/2,-170],[-B/2,96],[re,-150],[-B-re,-150]];ye("p2","l3-p2",rt(220,24,120)),ye("p1","l3-p1",rt(210,28,140)),ye("drone","l3-drone",[[-262,-30],[36,-30],[-262,-84],[36,-84],[-262,28],[36,28],[-120,-110],[-120,54]]),ye("alt","l3-alt",[[12,-11],[-76,-11],[12,14],[-76,14]]),ye("route","l3-route",[[-100,14],[-100,-40],[20,14],[-220,14],[20,-40],[-100,60],[-100,-86],[60,50],[-320,14]]);const de=ye("callout","l3-callout",[[40,-120],[-300,-120],[40,20],[-300,20]]);de.visible=!1;const Me=(B,Q)=>{B.text!==Q&&(B.box.innerHTML=Q,B.text=Q,B.w=B.box.offsetWidth,B.h=B.box.offsetHeight)};let Oe=n.current.qualityPref==="low"?"low":"high",Be=n.current.qualityPref==="auto";const Ee=new R,Qe=new R;let We=50,pt=!1;const N={yaw:0,pitch:0,zoom:1,dragging:!1,moved:0,lastX:0,lastY:0,idleUntil:0,focus:!1};let ve=performance.now();const Z=(B,Q,re,pe)=>{let oe=0;for(const Ne of B)oe=Math.max(oe,Ne.distanceTo(Q));const Ie=2*Math.atan(Math.tan(re*Math.PI/360)*pe);return(oe+.6)/Math.sin(Math.min(re*Math.PI/180,Ie)/2)},se=Math.atan2(h.x-g.x,h.z-g.z),_e=(B,Q,re,pe,oe=1)=>{const Ie=new R;B.forEach(Mt=>Ie.add(Mt)),Ie.multiplyScalar(1/B.length);const Ne=se+xt.degToRad(Q+N.yaw),ke=xt.degToRad(On(re+N.pitch,0,70)),et=new R(Math.sin(Ne)*Math.cos(ke),Math.sin(ke),Math.cos(Ne)*Math.cos(ke)),ht=Z(B,Ie,pe,d.aspect)*oe*N.zoom;return{pos:Ie.clone().addScaledVector(et,ht),tgt:Ie,fov:pe}},Se=(B,Q,re)=>({pos:B.pos.clone().lerp(Q.pos,re),tgt:B.tgt.clone().lerp(Q.tgt,re),fov:B.fov+(Q.fov-B.fov)*re}),nt=new R(h.x-g.x,0,h.z-g.z),It=5.5;nt.normalize();const bt=(B,Q,re,pe=0,oe=!1)=>{const Ie=r.clientHeight||600,Ne=Math.max(.45,1-160/Ie),ke=h.y+.4,et=Math.max(1.8,B+1),ht=2*Math.atan(Math.tan(xt.degToRad(re)/2)*Ne)*.94;let Mt=It;for(;Mt<60&&!(Math.atan((et-ke)/Mt)-Math.atan(-ke/Mt)<=ht);Mt+=.25);Mt+=pe;const st=xt.degToRad(Q+N.yaw),zt=nt.clone().applyAxisAngle(new R(0,1,0),st),Nn=g.clone().addScaledVector(zt,Mt*N.zoom);Nn.y=ke+N.pitch*.15;const Pt=(Math.atan((et-Nn.y)/Mt)+Math.atan(-Nn.y/Mt))/2;let Dn=zt.clone().negate();if(oe){const kr=new R(p.x-Nn.x,0,p.z-Nn.z).normalize();Dn=Dn.add(kr).normalize()}const Fr=Nn.clone().addScaledVector(Dn,Math.cos(Pt)*10).add(new R(0,Math.sin(Pt)*10,0));return{pos:Nn,tgt:Fr,fov:re}},at=(B,Q,re,pe)=>{const oe=n.current.preset,Ie=B.clone().add(new R(0,.2,0)),Ne=g.clone(),ke=g.clone().add(new R(0,Math.max(1.8,Q+.7),0));if(N.focus)return _e([Ie.clone().add(new R(0,.5,0)),Ie.clone().add(new R(0,-.5,0))],-8,6,40,1.4);if(oe==="WIDE")return bt(Q,-8,70,4,!0);if(oe==="TACTICAL")return _e([Ne,ke,p,f],-10,52,56);if(oe==="FOLLOW")return bt(Q,-4,62,0,!0);if(oe==="ORBIT"){const zt=Math.sin((pe-ve)/1e3*.12)*24;return bt(Q,zt,66,1,!0)}const et=(pe-ve)/1e3,ht=bt(0,-6,52,1.5,!0);if(re==="STANDBY")return Se(bt(0,-10,56,7,!0),ht,Math.min(1,et/16));if(re==="COUNTDOWN")return Se(ht,bt(0,-4,48,0,!0),Math.min(1,et/5));const Mt=bt(Q,-4,62,0,!0);if(re==="TAKEOFF")return Se(ht,Mt,xt.smoothstep(Q,.3,4));const st=Math.sin(et*.1)*18;return bt(Q,st,62,.5,!0)},on=B=>(B.x=On(B.x,-45,45),B.y=On(B.y,.8,60),B.z=On(B.z,-60,60),B),vt=l.domElement,ko=new tR,zo=new Pe,an=new Li;let ti=!1,Ss=!1;const Bo=B=>{N.dragging=!0,N.moved=0,N.lastX=B.clientX,N.lastY=B.clientY,vt.setPointerCapture(B.pointerId)},Ir=B=>{const Q=vt.getBoundingClientRect();if(N.dragging){const re=B.clientX-N.lastX,pe=B.clientY-N.lastY;N.lastX=B.clientX,N.lastY=B.clientY,N.moved+=Math.abs(re)+Math.abs(pe),N.moved>4&&(N.yaw=On(N.yaw-re*.15,-38,38),N.pitch=On(N.pitch+pe*.12,-10,30),N.idleUntil=performance.now()+8e3)}zo.set((B.clientX-Q.left)/Q.width*2-1,-((B.clientY-Q.top)/Q.height)*2+1),Ss=!0},Ho=()=>{Ss=!1,ti=!1},Or=B=>{N.dragging=!1;try{vt.releasePointerCapture(B.pointerId)}catch{}N.moved<=4&&ti&&(N.focus=!0,N.idleUntil=performance.now()+8e3)},Vo=B=>{B.preventDefault(),N.zoom=On(N.zoom*(B.deltaY>0?1.08:1/1.08),.6,1.5),N.idleUntil=performance.now()+8e3},Go=()=>{var B,Q;N.yaw=0,N.pitch=0,N.zoom=1,N.focus=!1,N.idleUntil=0,(Q=(B=n.current).onPreset)==null||Q.call(B,"AUTO"),ve=performance.now()};vt.addEventListener("pointerdown",Bo),vt.addEventListener("pointermove",Ir),vt.addEventListener("pointerup",Or),vt.addEventListener("wheel",Vo,{passive:!1}),vt.addEventListener("dblclick",Go),vt.addEventListener("pointerleave",Ho);const Ms=B=>{var re,pe;Oe=B,l.shadowMap.enabled=B==="high",J.castShadow=B==="high",Xe.visible=B==="high",q.group.traverse(oe=>{oe.castShadow=B==="high"}),l.setPixelRatio(Math.min(window.devicePixelRatio,B==="high"?1.75:1)),x(B==="high"?1:1.5,B==="high"?60:45);const Q=Math.min(window.devicePixelRatio,B==="high"?1.75:1);P.uniforms.pr.value=Q,C.uniforms.pr.value=Q,w.visible=!0,Qa(),Ht.quality=B,Ht.qualityAuto=Be,(pe=(re=n.current).onQuality)==null||pe.call(re,B,Be),l.shadowMap.needsUpdate=!0,u.traverse(oe=>{const Ie=oe.material;Ie&&(Ie.needsUpdate=!0)})},Qa=()=>{const B=r.clientWidth||1,Q=r.clientHeight||1;l.setSize(B,Q),c.setSize(B,Q),te.setSize(B,Q);const re=B>1400?.6:1;Re.setSize(Math.round(B*re),Math.round(Q*re)),d.aspect=B/Q,d.updateProjectionMatrix(),Te.forEach(pe=>pe.resolution.set(B,Q))},Ja=new ResizeObserver(Qa);Ja.observe(r),Ms(Oe),Ht.ready=!0;let A=n.current.mode==="day"?1:0,O=0,G=0,j=performance.now(),k=0,he=0,xe="",Ae=0;const be=new R,He=new R,Ve=B=>{He.copy(B).project(d);const Q=r.clientWidth,re=r.clientHeight;return{x:(He.x*.5+.5)*Q,y:(-He.y*.5+.5)*re,z:He.z}},Le=B=>{const Q=B.map(Ve);return{x0:Math.min(...Q.map(re=>re.x)),y0:Math.min(...Q.map(re=>re.y)),x1:Math.max(...Q.map(re=>re.x)),y1:Math.max(...Q.map(re=>re.y))}},dt=n.current.engine.onFrame(B=>{var pm;if(s||document.hidden)return;const Q=Math.min(B,.1),{engine:re,snap:pe,mode:oe}=n.current,Ie=performance.now();(i.current.token!==n.current.presetToken||i.current.preset!==n.current.preset)&&(i.current={token:n.current.presetToken,preset:n.current.preset},N.yaw=0,N.pitch=0,N.zoom=1,N.focus=!1,N.idleUntil=0,ve=Ie),n.current.qualityPref!=="auto"&&n.current.qualityPref!==Oe&&(Be=!1,Ms(n.current.qualityPref)),n.current.qualityPref==="auto"&&!Be&&(Be=!0,k=0,he=0,j=Ie,O=0,G=0,Oe!=="high"&&Ms("high")),A+=On((oe==="day"?1:0)-A,-Q,Q);const ke=A;_.uniforms.top.value.set(v.night.top).lerp(new Fe(v.day.top),ke),_.uniforms.horizon.value.set(v.night.hor).lerp(new Fe(v.day.hor),ke),C.uniforms.opacity.value=xt.lerp(.75,.18,ke),P.uniforms.color.value.set("#38d6f5").lerp(new Fe("#2fa8d8"),ke),P.uniforms.opacity.value=xt.lerp(.85,.7,ke),I.opacity=xt.lerp(.32,.26,ke),z.opacity=xt.lerp(.14,.11,ke),W.intensity=xt.lerp(.75,1.15,ke),J.intensity=xt.lerp(1.8,2.6,ke),K.intensity=xt.lerp(2.4,1.6,ke),Re.strength=xt.lerp(.95,.4,ke),r.dataset.mode=ke>.5?"day":"night",Ht.mode=ke>.5?"day":"night";const et=re.state==="PAUSED"?re.resumeTo??"STANDBY":re.state,ht=re.pos,Mt=ht.y,st=be.copy(g).addScaledVector(y,-ht.z).addScaledVector(m,ht.x);st.y=Mt;const zt=Mt>.02,Nn=re.state==="MANUAL_HOLD";et==="TAKEOFF"&&xe!=="TAKEOFF"&&Oe==="high"&&le(),xe=et,re.state!=="PAUSED"&&(Ae+=Q);const Pt=Ae,Dn=_n.droneDisplayScale*(1+_n.holdScaleBoost*xt.smoothstep(Mt,1,10));q.group.scale.setScalar(Dn),q.group.position.copy(st).add(new R(0,.09*Dn,0)),q.group.rotation.set(0,Math.atan2(-y.x,-y.z)-(re.heading||0),0);const Fr=zt?.02:0;q.body.position.set(Math.sin(Pt*.7)*Fr*.6/Dn,Math.sin(Pt*1.3)*Fr/Dn,Math.cos(Pt*.9)*Fr*.6/Dn);const kr=et==="TAKEOFF"?-.05*On(re.vel.y/1.5,0,1):0;q.body.rotation.set(kr+(zt?Math.sin(Pt*1.7)*.012:0),0,zt?Math.sin(Pt*1.3+1)*.012:0);const yy=et==="STANDBY"?.12:et==="COUNTDOWN"?.25+.5*(1-re.countdown/5):zt?Nn?.9:1:.12,Sy=re.state==="PAUSED"?0:yy;q.update(re.state==="PAUSED"?0:Q,Sy,Pt,{strobe:et!=="STANDBY"&&et!=="WELCOME",ledGain:xt.lerp(1.5,.9,ke)}),K.position.copy(st).addScaledVector(d.getWorldDirection(new R),6).add(new R(0,3,0)),K.target.position.copy(st),X.rotation.z=-Pt*.8,q.group.updateMatrixWorld(),an.copy(q.bounds).applyMatrix4(q.group.matrixWorld);const el=On(1-Mt/16,.25,1);if(qe.position.set(g.x,.015,g.z),qe.scale.setScalar(.95*_n.droneDisplayScale*(.6+.4*el)*.6),qe.material.opacity=(.25+.6*el)*(Oe==="high"?.8:1),St.scale.setScalar(_n.droneDisplayScale*(1.2+1.4*(1-el))),U.uniforms.strength.value=(.55*el+.12)*(1-.35*ke),ne.visible=zt,$e.setFromPoints([new R(g.x,.02,g.z),new R(st.x,Math.max(.02,Mt-.05),st.z)]),ne.computeLineDistances(),ee>=0){ee+=Q;for(let Yt=0;Yt<ie;Yt++){for(let it=0;it<3;it++)je[Yt*3+it]+=Ce[Yt*3+it]*Q;Ce[Yt*3+1]-=.4*Q,Ce[Yt*3]*=.97,Ce[Yt*3+2]*=.97}b.attributes.position.needsUpdate=!0,M.opacity=On(.7*(1-ee/2.2),0,.7),ee>2.3&&(ee=-1,M.opacity=0)}re.state==="STANDBY"&&ee>=0&&(ee=-1,M.opacity=0),N.idleUntil&&Ie>N.idleUntil&&!N.dragging&&(N.idleUntil=0,N.focus=!1),!N.idleUntil&&!N.dragging&&(N.yaw*=1-Math.min(1,Q*.8),N.pitch*=1-Math.min(1,Q*.8),N.zoom+=(1-N.zoom)*Math.min(1,Q*.8));const zr=at(st,Mt,et,Ie);on(zr.pos),pt||(Ee.copy(zr.pos),Qe.copy(zr.tgt),We=zr.fov,pt=!0);const Tu=1-Math.exp(-Q*1.6);Ee.lerp(zr.pos,Tu),Qe.lerp(zr.tgt,Tu),We+=(zr.fov-We)*Tu,d.position.copy(Ee),d.lookAt(Qe),De.position.copy(Ee).add(new R(0,2,0)),De.target.position.copy(q.group.position),Ue.position.copy(q.group.position),Ue.scale.setScalar(xt.lerp(.13,.09,ke)*(re.pos.y>.3?1:.7)),me.opacity=xt.lerp(.95,.6,ke),Math.abs(d.fov-We)>.01&&(d.fov=We,d.updateProjectionMatrix()),d.updateMatrixWorld(),Ss?(ko.setFromCamera(zo,d),ti=ko.ray.intersectsBox(an),vt.style.cursor=ti?"pointer":N.dragging?"grabbing":"grab"):ti=!1;const am=_n.distanceIsEstimate?" <em>est.</em>":"",lm=et==="MANUAL_HOLD"?"POSITION HOLD":et==="STANDBY"?"ON PAD":et.replace("_"," ");Me(fe.p1,"<b>POINT 1 — START</b><span>Launch position · AEGIS-1</span>"),Me(fe.p2,`<b>POINT 2 — DESTINATION</b><span>${_n.distanceM.toFixed(1)} m from P1${am}</span>`),Me(fe.drone,`<b>AEGIS-1 · ${lm}</b><span>ALT ${pe.pos.z.toFixed(1)} m · HDG ${String(pe.heading).padStart(3,"0")}° · GS ${pe.groundSpeed.toFixed(1)} m/s</span>`),Me(fe.alt,`${pe.pos.z.toFixed(1)} m`),Me(fe.route,`Planned route · route not flown · ${_n.distanceM.toFixed(1)} m${am}`),Me(de,`<b>AEGIS-1 · X-frame quad</b><span>ALT ${pe.pos.z.toFixed(1)} m · HDG ${String(pe.heading).padStart(3,"0")}°</span><span>Battery 92 % <em>synthetic</em> · ${lm}</span>`),fe.p1.anchor.set(f.x,$r+.15,f.z),fe.p2.anchor.set(p.x,$r+.15,p.z),fe.drone.anchor.copy(st).add(new R(0,.2,0)),fe.alt.anchor.set(g.x,Mt*.5,g.z),fe.alt.visible=zt&&Mt>1,fe.route.anchor.set(f.x+(p.x-f.x)*.55,.05,f.z+(p.z-f.z)*.55),de.anchor.copy(st),de.visible=ti||N.focus;const cm=r.clientWidth,um=r.clientHeight,dm=nc(Le([0,1,2,3,4,5,6,7].map(Yt=>new R(Yt&1?an.max.x:an.min.x,Yt&2?an.max.y:an.min.y,Yt&4?an.max.z:an.min.z))),4),hm=nc(Le([p.clone(),p.clone().add(new R(0,$r,0)),p.clone().add(new R(.7,0,0)),p.clone().add(new R(-.7,0,0))]),6),My=nc(Le([f.clone(),f.clone().add(new R(0,$r,0)),f.clone().add(new R(.7,0,0)),f.clone().add(new R(-.7,0,0))]),6),tl=r.getBoundingClientRect(),Ey=[...((pm=r.parentElement)==null?void 0:pm.querySelectorAll(".vp-cams, .vp-tag, .hold-chip, .alt-tape, .vp-hud"))??[]].map(Yt=>{const it=Yt.getBoundingClientRect();return{x0:it.left-tl.left,y0:it.top-tl.top,x1:it.right-tl.left,y1:it.bottom-tl.top}}),wy=[dm,hm,My,...Ey],fm=[],nl={};for(const Yt of["callout","alt","drone","p2","p1","route"]){const it=fe[Yt],Ni=Ve(it.anchor),mm=it.visible&&Ni.z<1&&Ni.x>-40&&Ni.x<cm+40&&Ni.y>-40&&Ni.y<um+40;if(it.obj.position.copy(it.anchor),it.obj.visible=mm,!mm)continue;it.box.isConnected&&it.obj.element.style.display!=="none"&&(it.w=it.box.offsetWidth||it.w,it.h=it.box.offsetHeight||it.h),it.w||(it.w=220,it.h=40);let Cu=null,Ru=1/0,Br=[0,0];for(const[bu,Pu]of it.cands){const Es={x0:Ni.x+bu,y0:Ni.y+Pu,x1:Ni.x+bu+it.w,y1:Ni.y+Pu+it.h},Lu=(Es.x0>=4&&Es.y0>=4&&Es.x1<=cm-4&&Es.y1<=um-4?0:50)+[...wy,...fm].filter(Ay=>wR(nc(Es,3),Ay)).length*100;if(Lu<Ru&&(Cu=Es,Ru=Lu,Br=[bu,Pu]),Lu===0)break}if(Ru>=100&&(Yt==="route"||Yt==="alt")){it.obj.visible=!1;continue}fm.push(Cu),nl[Yt]=Cu,it.box.style.transform=`translate(${Br[0]}px, ${Br[1]}px)`;const gm=On(0,Br[0],Br[0]+it.w),vm=On(0,Br[1],Br[1]+it.h);it.line.setAttribute("x2",String(gm)),it.line.setAttribute("y2",String(vm)),it.svg.style.display=Math.hypot(gm,vm)>10?"":"none"}Ht.hover=ti,Ht.focus=N.focus,Ht.env.beacons={p1:!!nl.p1,p2:!!nl.p2},Ht.droneBox=dm,Ht.p2Box=hm,Ht.labels=nl,Ht.preset=n.current.preset;const Ty=performance.now();Oe==="high"&&Re.strength>.01?te.render():l.render(u,d),c.render(u,d);const Au=l.info.render;Ht.cost={calls:Au.calls,triangles:Au.triangles,points:Au.points,renderMs:Ht.cost.renderMs*.95+(performance.now()-Ty)*.05},O+=B,G++,Ie-j>2e3&&(Ht.fps=Math.round(G/O),Oe==="high"&&(Ht.fpsHigh=Ht.fps),k++,he=Ht.fps<45?he+1:0,Be&&Oe==="high"&&k>2&&he>=2&&Ms("low"),O=0,G=0,j=Ie)});return()=>{s=!0,dt(),Ja.disconnect(),vt.removeEventListener("pointerdown",Bo),vt.removeEventListener("pointermove",Ir),vt.removeEventListener("pointerup",Or),vt.removeEventListener("wheel",Vo),vt.removeEventListener("dblclick",Go),vt.removeEventListener("pointerleave",Ho),Object.values(fe).forEach(B=>{u.remove(B.obj),B.obj.element.remove()}),F&&F.geometry.dispose(),q.dispose(),o.forEach(B=>B.dispose()),te.dispose(),Re.dispose(),l.dispose(),r.innerHTML="",Ht.ready=!1}},[]),T.jsx("div",{ref:e,className:"scene3d"})}function AR(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const xn=60,io={x:-46,z:46},ro={x:46,z:-46},Of=8,Ff=3.4,Za=2;function Wa(t,e,n){const i=e-t.x,r=n-t.z;if(t.shape==="circle")return Math.max(0,Math.hypot(i,r)-t.r);const s=Math.cos(t.rot),o=Math.sin(t.rot),a=s*i-o*r,l=o*i+s*r,c=Math.max(0,Math.abs(a)-t.hw),u=Math.max(0,Math.abs(l)-t.hd);return Math.hypot(c,u)}function $d(t,e){const n=Wa(t,e.x,e.z),i=Math.max(0,e.y-t.h);return Math.hypot(n,i)}function CR(t){return t.shape==="circle"?t.r:Math.hypot(t.hw,t.hd)}function ur(t,e,n,i,r,s=1,o=1,a=1){const l=new ut().compose(new R(e,n,i),new Io().setFromAxisAngle(new R(0,1,0),r),new R(s,o,a));return t.applyMatrix4(l),t.computeVertexNormals(),t}function K0(t,e,n,i,r,s){const a={id:`OB-${String(s+1).padStart(2,"0")}`,kind:t,x:e,z:n,rot:i,hw:0,hd:0,r:0,h:0,parts:[]},l=(c,u)=>c+(u-c)*r();switch(t){case"BLOCK":{const c=l(6,12),u=l(6,12),d=l(5,13);return{...a,shape:"rect",hw:c/2,hd:u/2,h:d,parts:[ur(new hn(c,d,u),e,d/2,n,i)]}}case"TOWER":{const c=l(5,8),u=l(5,8),d=l(12,20),f=l(3,7);return{...a,shape:"rect",hw:c/2,hd:u/2,h:d+f,parts:[ur(new hn(c,d,u),e,d/2,n,i),ur(new hn(c*.6,f,u*.6),e,d+f/2,n,i)]}}case"WALL":{const c=l(18,26),u=1.2,d=l(6,10);return{...a,shape:"rect",hw:c/2,hd:u/2,h:d,parts:[ur(new hn(c,d,u),e,d/2,n,i)]}}case"PILLAR":{const c=l(.9,1.6),u=l(9,18);return{...a,shape:"circle",r:c,h:u,parts:[ur(new ui(c,c,u,16,1),e,u/2,n,0)]}}case"TANK":{const c=l(3,5.2),u=l(5,9);return{...a,shape:"circle",r:c,h:u,parts:[ur(new ui(c,c,u,28,1),e,u/2,n,0)]}}case"SPHERE":{const c=l(2.6,4.6);return{...a,shape:"circle",r:c,h:2*c,parts:[ur(new Ti(c,24,16),e,c,n,0)]}}case"ROCK":{const c=l(2.5,4.5),u=l(.9,1.6),d=new Zp(c,1),f=d.attributes.position,p=new Map;for(let m=0;m<f.count;m++){const h=`${f.getX(m).toFixed(3)},${f.getY(m).toFixed(3)},${f.getZ(m).toFixed(3)}`;let v=p.get(h);v===void 0&&(v=.75+r()*.45,p.set(h,v)),f.setXYZ(m,f.getX(m)*v,f.getY(m)*v,f.getZ(m)*v)}ur(d,e,c*u*.45,n,i,1,u,1),d.computeBoundingBox();const g=d.boundingBox,y=Math.max(g.max.x-e,e-g.min.x,g.max.z-n,n-g.min.z);return{...a,shape:"circle",r:y,h:g.max.y,parts:[d]}}}}function RR(t,e,n,i,r){const o=(t.index?t.toNonIndexed():t).attributes.position,a=[],l=[];let c=0;const u=new R,d=new R,f=new R;for(let y=0;y<o.count;y+=3){const m=new R().fromBufferAttribute(o,y),h=new R().fromBufferAttribute(o,y+1),v=new R().fromBufferAttribute(o,y+2);u.subVectors(h,m),d.subVectors(v,m),f.crossVectors(u,d);const _=f.length()/2;_<1e-6||(f.normalize(),!(f.y<-.85)&&(a.push({a:m,b:h,c:v,ny:f.y}),c+=_,l.push(c)))}const p=Math.min(i,Math.round(c*n)),g=new R;for(let y=0;y<p;y++){const m=e()*c;let h=0,v=l.length-1;for(;h<v;){const w=h+v>>1;l[w]<m?h=w+1:v=w}const _=a[h];let S=e(),L=e();S+L>1&&(S=1-S,L=1-L),g.copy(_.a).addScaledVector(u.subVectors(_.b,_.a),S).addScaledVector(d.subVectors(_.c,_.a),L);let C=g.y;Math.abs(_.ny)<.75&&(C=Math.round(C/.55)*.55),!(C<.05)&&r.push(g.x+(e()-.5)*.06,C,g.z+(e()-.5)*.06,1)}}function bR(t){const e=AR(t),n=[],i=["BLOCK","BLOCK","TOWER","TOWER","PILLAR","PILLAR","TANK","SPHERE","ROCK","ROCK"],r=[[-14,14],[16,-16]];for(const[u,d]of r){const f=(e()-.5)*18,p=u+f*Math.SQRT1_2,g=d+f*Math.SQRT1_2;n.push(K0("WALL",p,g,-Math.PI/4+(e()-.5)*.5,e,n.length))}let s=0;for(;n.length<28&&s<3e3;){s++;const u=i[Math.floor(e()*i.length)],d=(e()*2-1)*52,f=(e()*2-1)*52;if(Math.hypot(d-io.x,f-io.z)<14||Math.hypot(d-ro.x,f-ro.z)<14)continue;const p=K0(u,d,f,e()*Math.PI,e,n.length),g=CR(p);if(Math.abs(d)+g>56||Math.abs(f)+g>56)continue;let y=!0;for(const m of n)if(Wa(m,d,f)-g<7.5){y=!1;break}y&&n.push(p)}const o=[];for(const u of n)for(const d of u.parts)RR(d,e,1.7,2600,o);for(let u=-xn;u<=xn;u+=1.7)for(let d=-xn;d<=xn;d+=1.7)o.push(u+(e()-.5)*1.1,.02,d+(e()-.5)*1.1,.32);const a=o.length/4,l=new Float32Array(a*3),c=new Float32Array(a);for(let u=0;u<a;u++)l[u*3]=o[u*4],l[u*3+1]=o[u*4+1],l[u*3+2]=o[u*4+2],c[u]=o[u*4+3];return{seed:t,obstacles:n,cloud:{positions:l,intensity:c,count:a}}}const Ct=Math.ceil(xn*2/Za),ic=t=>Math.min(Ct-1,Math.max(0,Math.floor((t+xn)/Za))),rc=t=>-xn+(t+.5)*Za;function dy(t,e,n,i){if(Math.abs(e)>xn-2||Math.abs(n)>xn-2)return!0;for(const r of t)if(Wa(r,e,n)<i)return!0;return!1}function PR(t,e,n,i,r,s){const o=Math.hypot(i-e,r-n),a=Math.max(1,Math.ceil(o/.5));for(let l=0;l<=a;l++){const c=l/a;if(dy(t,e+(i-e)*c,n+(r-n)*c,s))return!1}return!0}function Z0(t,e,n,i,r){const s=new Uint8Array(Ct*Ct);for(let w=0;w<Ct;w++)for(let P=0;P<Ct;P++)s[w*Ct+P]=dy(t,rc(w),rc(P),Ff)?1:0;const o=ic(e),a=ic(n),l=ic(i),c=ic(r);s[l*Ct+c]=0;const u=new Float32Array(Ct*Ct).fill(1/0),d=new Int32Array(Ct*Ct).fill(-1),f=new Uint8Array(Ct*Ct),p=[],g=(w,P)=>{p.push([w,P]);let F=p.length-1;for(;F>0;){const x=F-1>>1;if(p[x][0]<=p[F][0])break;[p[x],p[F]]=[p[F],p[x]],F=x}},y=()=>{const w=p[0],P=p.pop();if(p.length){p[0]=P;let F=0;for(;;){const x=2*F+1,E=x+1;let I=F;if(x<p.length&&p[x][0]<p[I][0]&&(I=x),E<p.length&&p[E][0]<p[I][0]&&(I=E),I===F)break;[p[I],p[F]]=[p[F],p[I]],F=I}}return w},m=(w,P)=>{const F=Math.abs(w-l),x=Math.abs(P-c);return Math.max(F,x)+(Math.SQRT2-1)*Math.min(F,x)},h=o*Ct+a,v=l*Ct+c;u[h]=0,g(m(o,a),h);let _=0;for(;p.length;){const[,w]=y();if(f[w])continue;if(f[w]=1,_++,w===v)break;const P=Math.floor(w/Ct),F=w%Ct,x=s[w];for(let E=-1;E<=1;E++)for(let I=-1;I<=1;I++){if(!E&&!I)continue;const z=P+E,V=F+I;if(z<0||V<0||z>=Ct||V>=Ct)continue;const X=z*Ct+V;if(s[X]&&!x||E&&I&&!x&&(s[P*Ct+V]||s[z*Ct+F]))continue;const W=u[w]+(E&&I?Math.SQRT2:1)+(s[X]?20:0);W<u[X]&&(u[X]=W,d[X]=w,g(W+m(z,V),X))}}if(!f[v])return null;const S=[];for(let w=v;w!==-1;w=d[w])S.push({x:rc(Math.floor(w/Ct)),z:rc(w%Ct)});S.reverse(),S[0]={x:e,z:n},S[S.length-1]={x:i,z:r};const L=[S[0]];let C=0;for(;C<S.length-1;){let w=S.length-1;for(;w>C+1&&!PR(t,S[C].x,S[C].z,S[w].x,S[w].z,Ff-.4);)w--;L.push(S[w]),C=w}return{points:L,expanded:_}}const ja=["COUNTDOWN","TAKEOFF","AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED","LANDING"],Q0={INITIALIZE:{from:["WELCOME"],to:"INITIALIZING",by:"user"},INIT_COMPLETE:{from:["INITIALIZING"],to:"READY",by:"auto"},CONTINUE:{from:["READY"],to:"BRIEFING",by:"user"},PROCEED:{from:["BRIEFING"],to:"STANDBY",by:"user"},START:{from:["STANDBY"],to:"COUNTDOWN",by:"user"},COUNTDOWN_ELAPSED:{from:["COUNTDOWN"],to:"TAKEOFF",by:"auto"},CRUISE_REACHED:{from:["TAKEOFF"],to:"MANUAL_HOLD",by:"auto"},HOLD:{from:["AUTONOMOUS_TRANSIT","ROUTE_BLOCKED"],to:"MANUAL_HOLD",by:"user"},DENY_HOLD:{from:["TAKEOFF","AUTONOMOUS_TRANSIT","ROUTE_BLOCKED","LANDING","PAUSED"],to:"MANUAL_HOLD",by:"auto"},RESUME_AUTONOMY:{from:["MANUAL_HOLD"],to:"AUTONOMOUS_TRANSIT",by:"user"},BLOCK:{from:["AUTONOMOUS_TRANSIT","MANUAL_HOLD"],to:"ROUTE_BLOCKED",by:"auto"},REROUTE:{from:["ROUTE_BLOCKED"],to:"AUTONOMOUS_TRANSIT",by:"user"},ROUTE_COMPLETE:{from:["AUTONOMOUS_TRANSIT"],to:"LANDING",by:"auto"},TOUCHDOWN:{from:["LANDING"],to:"COMPLETE",by:"auto"},PAUSE:{from:ja,to:"PAUSED",by:"user"},RESUME:{from:["PAUSED"],to:"PREVIOUS",by:"user"},RESET:{from:[...ja,"PAUSED","COMPLETE"],to:"STANDBY",by:"user"}},LR={START:["STANDBY"],PAUSE:ja,RESUME:["PAUSED"],HOLD:["AUTONOMOUS_TRANSIT","ROUTE_BLOCKED"],RESUME_AUTO:["MANUAL_HOLD"],RECALCULATE:["STANDBY","AUTONOMOUS_TRANSIT","ROUTE_BLOCKED"],NEW_ENV:["STANDBY"],RESET:[...ja,"PAUSED","COMPLETE"],RESTRICTED_CMD:["TAKEOFF","AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED","LANDING","PAUSED"]},NR=["STANDBY",...ja,"PAUSED","COMPLETE"],DR=["FORWARD","BACKWARD","LEFT","RIGHT","YAW LEFT","YAW RIGHT","ASCEND","DESCEND"],UR=["RESUME AUTO","PAUSE"],IR=["TAKEOFF","AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED","LANDING"],us=28,iu=10,im=7,rm=6,J0=2.5,kf=20,ev=2,OR=2.9,FR=8,kR=1.5,zR=1.4,Yd=1/120,sm=6,hy=.35,fy=.55,BR=hy+sm*fy+.25,qd=sm,sc=60,py=240;function HR(t,e){const n=e*py,i=[];for(let s=0;s<=n;s++)i.push(t.getPoint(s/n));const r=new Float64Array(n+1);for(let s=1;s<=n;s++)r[s]=r[s-1]+i[s].distanceTo(i[s-1]);return{samples:i,cum:r}}function VR(t,e){const n=[["centripetal",.5],["catmullrom",.35],["catmullrom",.15],["catmullrom",0]],i=Math.min(...e.map(o=>Wa(o,t[0].x,t[0].z))),r=Math.min(OR,i-.05);let s=null;for(const[o,a]of n){const l=new WC(t,!1,o,a);l.arcLengthDivisions=800;const c=HR(l,t.length-1);let u=1/0;for(let d=0;d<c.samples.length;d+=2){const f=c.samples[d];for(const p of e)u=Math.min(u,Wa(p,f.x,f.z))}if((!s||u>s.min)&&(s={curve:l,min:u,...c}),u>=r)return{curve:l,min:u,...c}}return s}class GR{constructor(e=2205){this.worldVersion=0,this.routeIds=0,this.basePlan=[],this.baseExpanded=0,this.state="WELCOME",this.resumeTo=null,this.initT=0,this.countdown=0,this.pos=new R,this.vel=new R,this.acc=new R,this.heading=0,this.speed=0,this.s=0,this.routeFlown=0,this.traveled=0,this.missionTime=0,this.holdTime=0,this.minClearance=1/0,this.currentWp=1,this.yawRate=0,this.deniedCount=0,this.blocked=null,this.inRange=[],this.detected=new Set,this.warned=new Set,this.pointsInRange=0,this.pointsMapped=0,this.scans=0,this.lidarVersion=0,this.scanAcc=0,this.log=[],this.logId=0,this.listeners=new Set,this.frames=new Set,this.raf=0,this.last=0,this.accT=0,this.animTime=0,this.steps=0,this.site=null,this.climbV=0,this.startPt={x:io.x,z:io.z},this.goalPt={x:ro.x,z:ro.z},typeof e=="number"?this.load(e,!0):(this.site=e,this.startPt={...e.start},this.goalPt={...e.goal},this.loadSite(!0))}get cruiseAlt(){return this.site?this.site.targetAltitudeM:Of}plan(e,n){return this.world.obstacles.length===0?{points:[{x:e,z:n},{x:this.goalPt.x,z:this.goalPt.z}],expanded:0}:Z0(this.world.obstacles,e,n,this.goalPt.x,this.goalPt.z)}loadSite(e=!1){this.world=SR(),this.mapped=new Uint8Array(0),this.inRangeMask=new Uint8Array(0),this.basePlan=[{x:this.startPt.x,z:this.startPt.z},{x:this.goalPt.x,z:this.goalPt.z}],this.baseExpanded=0,this.worldVersion++,this.resetFlight(),e||this.emit("reset")}get waypoints(){return this.route.waypoints}get curve(){return this.route.curve}get planLength(){return this.route.length}get wpArc(){return this.route.wpArc}get planVersion(){return this.route.id}start(){if(this.raf)return;this.last=performance.now();const e=n=>{this.raf=requestAnimationFrame(e);const i=Math.min(.25,Math.max(0,(n-this.last)/1e3));this.last=n,this.advance(i),this.state!=="PAUSED"&&this.state!=="MANUAL_HOLD"&&(this.animTime+=i),this.frames.forEach(r=>r(i,this.animTime))};this.raf=requestAnimationFrame(e)}stop(){cancelAnimationFrame(this.raf),this.raf=0}get running(){return this.raf!==0}advance(e){for(this.accT+=e;this.accT>=Yd;)this.step(Yd),this.accT-=Yd}onFrame(e){return this.frames.add(e),()=>{this.frames.delete(e)}}on(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}emit(e,n){this.listeners.forEach(i=>i({type:e,level:n}))}addLog(e,n){const i=new Date().toTimeString().slice(0,8);this.log.unshift({id:++this.logId,t:i,level:e,msg:n}),this.log.length>120&&this.log.pop(),this.emit("log",e)}allowed(e){return e==="NEW_ENV"&&this.site||this.site&&this.state==="MANUAL_HOLD"&&(e==="RESUME_AUTO"||e==="PAUSE")?!1:LR[e].includes(this.state)}can(e){return Q0[e].from.includes(this.state)}dispatch(e){var s;const n=Q0[e];if(this.site&&this.state==="MANUAL_HOLD"&&(e==="RESUME_AUTONOMY"||e==="PAUSE")||!n.from.includes(this.state))return!1;const i=this.state,r=n.to==="PREVIOUS"?this.resumeTo??"STANDBY":n.to;switch(e){case"INITIALIZE":this.initT=0;break;case"START":this.countdown=5,this.addLog("info","Mission start · T−5 countdown");break;case"COUNTDOWN_ELAPSED":this.addLog("ok",`Liftoff · climbing to ${this.route.cruiseAlt.toFixed(1)} m AGL`);break;case"CRUISE_REACHED":this.pos.y=this.waypoints[0].y,this.stopAt(this.pos),this.blocked=null,this.holdTime=0,this.scan(),this.addLog("ok",`Takeoff complete at ${this.pos.y.toFixed(1)} m AGL · position hold engaged`);break;case"HOLD":this.stopAt(this.pos),this.blocked=null,this.holdTime=0,this.scan(),this.addLog("warn","Manual hold · aircraft stationary · press RESUME AUTO to continue");break;case"DENY_HOLD":this.stopAt(this.pos),this.blocked=null,this.resumeTo=null,this.holdTime=0,this.addLog("alert","Manual hold enforced · aircraft frozen · press RESUME AUTO to continue");break;case"RESUME_AUTONOMY":if(!this.replanFromHere())return this.setBlocked(null,"No feasible route from the current position"),this.dispatch("BLOCK");this.addLog("ok",`Autonomy resumed on route R${this.route.rev}`);break;case"BLOCK":this.stopAt(this.pos),this.holdTime=0,this.scan(),this.addLog("alert",`Route blocked · ${((s=this.blocked)==null?void 0:s.reason)??"unknown"} · RECALCULATE to recover`);break;case"REROUTE":this.blocked=null,this.addLog("ok",`Recovered · autonomous tracking on route R${this.route.rev}`);break;case"ROUTE_COMPLETE":this.addLog("ok","Route complete · autonomous descent");break;case"TOUCHDOWN":this.addLog("ok",`Touchdown · mission complete · ${this.traveled.toFixed(1)} m flown`);break;case"PAUSE":this.resumeTo=i,this.vel.set(0,0,0),this.acc.set(0,0,0),this.addLog("warn","Paused · simulation frozen");break;case"RESUME":this.resumeTo=null,this.addLog("info","Resumed");break;case"RESET":this.resetFlight();break}return this.state=r,this.emit("state"),e==="COUNTDOWN_ELAPSED"&&this.emit("liftoff"),e==="TOUCHDOWN"&&this.emit("complete"),e==="START"&&this.emit("countdown"),e==="BLOCK"&&this.emit("blocked"),e==="RESET"&&this.emit("reset"),(e==="DENY_HOLD"||e==="HOLD"||e==="CRUISE_REACHED")&&this.emit("hold"),!0}stopAt(e){this.speed=0,this.vel.set(0,0,0),this.acc.set(0,0,0),this.yawRate=0}setBlocked(e,n,i=null){var s;const r=e??((s=this.inRange[0])==null?void 0:s.o)??null;this.blocked={id:(r==null?void 0:r.id)??null,kind:(r==null?void 0:r.kind)??null,dist:i??(r?$d(r,this.pos):null),reason:n}}load(e,n=!1){for(let i=0;i<12;i++){const r=bR(e+i),s=Z0(r.obstacles,io.x,io.z,ro.x,ro.z);if(s){this.world=r,this.mapped=new Uint8Array(r.cloud.count),this.inRangeMask=new Uint8Array(r.cloud.count),this.basePlan=s.points,this.baseExpanded=s.expanded,this.worldVersion++,this.resetFlight(),n||this.emit("reset");return}}throw new Error("Unable to generate a plannable environment")}newEnvironment(e=1e3+Math.floor(Math.random()*9e3)){return this.allowed("NEW_ENV")?(this.load(e),this.emit("state"),!0):!1}setRoute(e,n,i,r,s,o){const a=e.map((g,y)=>new R(g.x,y===0?i:r,g.z)),{curve:l,min:c,samples:u,cum:d}=VR(a,this.world.obstacles),f=a.length,p=a.map((g,y)=>d[y*py]);this.route={id:++this.routeIds,rev:o,origin:s,waypoints:a,curve:l,length:d[d.length-1],wpArc:p,samples:u,cum:d,cruiseAlt:r,minClearance:c,expanded:n},this.s=0,this.currentWp=Math.min(1,f-1)}recalculate(){if(!this.allowed("RECALCULATE"))return!1;if(this.state==="STANDBY"){const n=this.plan(this.startPt.x,this.startPt.z);return n?(this.setRoute(n.points,n.expanded,this.cruiseAlt,this.cruiseAlt,"RECALCULATED",this.route.rev+1),this.addLog("ok",`Route R${this.route.rev} · ${this.waypoints.length-1} waypoints · ${this.planLength.toFixed(1)} m`),this.emit("route"),!0):!1}const e=this.waypoints.length-1;return this.replanFromHere()?(this.addLog("ok",`Route R${this.route.rev} replaces previous route (${e} → ${this.waypoints.length-1} waypoints)`),this.state==="ROUTE_BLOCKED"&&this.dispatch("REROUTE"),this.emit("route"),!0):(this.state==="AUTONOMOUS_TRANSIT"?(this.setBlocked(null,"No feasible route from the current position"),this.dispatch("BLOCK")):this.addLog("alert","Recalculation failed · still blocked · HOLD to reposition manually"),!1)}replanFromHere(){const e=this.plan(this.pos.x,this.pos.z);if(!e)return!1;const n=xt.clamp(this.pos.y,this.cruiseAlt,kf),i=this.state==="AUTONOMOUS_TRANSIT"?this.speed:0;return this.setRoute(e.points,e.expanded,this.pos.y,n,"RECALCULATED",this.route.rev+1),this.speed=i,!0}resetFlight(){this.setRoute(this.basePlan,this.baseExpanded,this.cruiseAlt,this.cruiseAlt,"INITIAL",1),this.climbV=0,this.resumeTo=null,this.countdown=0,this.pos.set(this.startPt.x,0,this.startPt.z),this.vel.set(0,0,0),this.acc.set(0,0,0),this.speed=0,this.routeFlown=0,this.traveled=0,this.missionTime=0,this.holdTime=0,this.minClearance=1/0,this.blocked=null;const e=this.waypoints[1];this.heading=Kd(Math.atan2(e.x-this.startPt.x,-(e.z-this.startPt.z))),this.yawRate=0,this.deniedCount=0,this.inRange=[],this.detected.clear(),this.warned.clear(),this.mapped.fill(0),this.inRangeMask.fill(0),this.pointsInRange=0,this.pointsMapped=0,this.scans=0,this.scanAcc=0,this.accT=0,this.log=[];const n=this.world;this.site?(this.addLog("ok",`Site ready · SIMULATION GRID · SYNTHETIC TELEMETRY · Point 1 (start) → Point 2 (destination) · ${this.planLength.toFixed(1)} m${this.site.distanceIsEstimate?" (estimate)":""}`),this.addLog("info",`Route R1 · direct · takeoff to ${this.cruiseAlt.toFixed(1)} m · then position hold`)):(this.addLog("ok",`Environment ready · seed ${n.seed} · ${n.obstacles.length} obstacles · ${n.cloud.count.toLocaleString()} LiDAR points`),this.addLog("info",`Route R1 · ${this.waypoints.length-1} waypoints · ${this.planLength.toFixed(1)} m · cruise ${Of.toFixed(1)} m`)),this.updatePerception(!1),this.scan()}restrictedAvailable(){return this.allowed("RESTRICTED_CMD")?this.state!=="PAUSED"||IR.includes(this.resumeTo??"STANDBY"):!1}handleRestrictedFlightCommand(e){const n=[...DR,...UR].includes(e);return this.restrictedAvailable()&&this.state!=="MANUAL_HOLD"&&this.dispatch("DENY_HOLD"),this.state==="MANUAL_HOLD"&&this.stopAt(this.pos),this.deniedCount++,this.addLog("alert",`COMMAND DENIED · ${n?e:"UNKNOWN"} · control authorization failure · manual flight commands are restricted`),this.emit("denied"),{denied:!0,state:this.state,known:n}}step(e){this.steps++;const n=this.state;if(n==="INITIALIZING"){this.initT+=e,this.initT>=BR&&this.dispatch("INIT_COMPLETE");return}if(n==="COUNTDOWN"){const o=Math.ceil(this.countdown);this.countdown=Math.max(0,this.countdown-e),Math.ceil(this.countdown)!==o&&this.countdown>0&&this.emit("tick"),this.countdown<=0&&this.dispatch("COUNTDOWN_ELAPSED");return}if(n==="MANUAL_HOLD"){this.holdTime+=e,this.missionTime+=e,Math.floor(this.holdTime/sc)!==Math.floor((this.holdTime-e)/sc)&&this.addLog("info",`Position hold · ${Math.round(this.holdTime)} s · aircraft stationary`);return}if(n!=="TAKEOFF"&&n!=="AUTONOMOUS_TRANSIT"&&n!=="ROUTE_BLOCKED"&&n!=="LANDING")return;const i=this.pos.clone(),r=this.vel.clone(),s=this.heading;if(this.missionTime+=e,n==="TAKEOFF"){const o=this.waypoints[0].y;let a;if(this.site){const c=Math.max(0,o-this.pos.y),u=Math.min(this.site.climbRateMps,Math.sqrt(2*1*c));this.climbV+=xt.clamp(u-this.climbV,-2*1*e,1*e),a=c<.003?c/e:Math.max(.03,this.climbV)}else a=Math.min(J0,Math.max(.4,(o-this.pos.y)*1.2));this.pos.y=Math.min(o,this.pos.y+a*e)}else if(n==="AUTONOMOUS_TRANSIT"){const o=this.planLength,a=o-this.s,l=Math.sqrt(2*zR*Math.max(0,a))+.3,c=Math.min(rm,l);this.speed+=xt.clamp(c-this.speed,-3*e,kR*e);const u=Math.min(this.speed*e,o-this.s);this.s+=u,this.routeFlown+=u;const d=this.pathPoint(this.s,this.pos);for(this.turnTowards(Math.atan2(d.x,-d.z),e,3);this.currentWp<this.waypoints.length-1&&this.s>=this.wpArc[this.currentWp];)this.addLog("ok",`${my(this.currentWp,this.waypoints.length)} reached`),this.currentWp++}else if(n==="LANDING"){const o=Math.min(J0,Math.max(.4,this.pos.y*.6));this.pos.y=Math.max(0,this.pos.y-o*e)}if(n==="ROUTE_BLOCKED"&&(this.holdTime+=e,Math.floor(this.holdTime/sc)!==Math.floor((this.holdTime-e)/sc)&&this.addLog("warn",`Blocked ${Math.round(this.holdTime)} s · press RECALCULATE to recover`)),this.vel.copy(this.pos).sub(i).divideScalar(e),this.acc.copy(this.vel).sub(r).divideScalar(e),this.yawRate=tv(this.heading,s)/e,this.traveled+=this.pos.distanceTo(i),this.updatePerception(),this.scanAcc+=e,this.scanAcc>=1/iu&&(this.scanAcc-=1/iu,this.scan()),n==="TAKEOFF"&&this.pos.y>=this.waypoints[0].y-1e-6)this.dispatch("CRUISE_REACHED");else if(n==="AUTONOMOUS_TRANSIT")if(this.s>=this.planLength-1e-6)this.currentWp=this.waypoints.length-1,this.speed=0,this.dispatch("ROUTE_COMPLETE");else{const o=this.lookAhead();o&&(this.setBlocked(o.o,`${o.o.id} (${o.o.kind}) within ${ev} m of route ahead`,o.d),this.dispatch("BLOCK"))}else n==="LANDING"&&this.pos.y<=0&&(this.vel.set(0,0,0),this.dispatch("TOUCHDOWN"))}pathIndexAt(e){const{cum:n}=this.route;let i=0,r=n.length-1;if(e>=n[r])return r;for(;r-i>1;){const s=i+r>>1;n[s]<=e?i=s:r=s}return i}pathPoint(e,n){const{cum:i,samples:r}=this.route,s=i.length-1,o=Math.max(0,Math.min(i[s],e));let a=0,l=s;for(;l-a>1;){const d=a+l>>1;i[d]<=o?a=d:l=d}const c=i[l]-i[a],u=c>1e-12?(o-i[a])/c:0;return n.lerpVectors(r[a],r[l],u),new R().subVectors(r[l],r[a]).normalize()}lookAhead(){const e=this.planLength,n=new R;for(let i=1;i<=FR;i+=1){const r=Math.min(e,this.s+i);this.pathPoint(r,n);for(const s of this.world.obstacles){const o=$d(s,n);if(o<ev)return{o:s,d:o}}if(r>=e)break}return null}turnTowards(e,n,i,r=Math.PI){const s=tv(e,this.heading),o=xt.clamp(s*(1-Math.exp(-n*i)),-r*n,r*n);this.heading=Math.abs(s)<1e-4?Kd(e):Kd(this.heading+o)}updatePerception(e=!0){this.inRange=[];const n=this.state!=="TAKEOFF"&&this.state!=="LANDING"&&this.pos.y>1;for(const i of this.world.obstacles){const r=$d(i,this.pos);n&&(this.minClearance=Math.min(this.minClearance,r)),!(r>=us)&&(this.inRange.push({o:i,d:r}),e&&(this.detected.has(i.id)||(this.detected.add(i.id),this.addLog("info",`${i.id} (${i.kind}) detected at ${r.toFixed(1)} m`)),r<im&&!this.warned.has(i.id)&&(this.warned.add(i.id),this.addLog("warn",`Proximity advisory · ${i.id} at ${r.toFixed(1)} m`),this.emit("proximity"))))}this.inRange.sort((i,r)=>i.d-r.d)}scan(){const{positions:e,count:n}=this.world.cloud,i=this.pos,r=us*us;let s=0,o=0;for(let a=0;a<n;a++){const l=e[a*3]-i.x,c=e[a*3+1]-i.y,u=e[a*3+2]-i.z,d=l*l+c*c+u*u<r?1:0;this.inRangeMask[a]=d,d&&(s++,this.mapped[a]=1),o+=this.mapped[a]}this.pointsInRange=s,this.pointsMapped=o,this.scans++,this.lidarVersion++}get effectiveState(){return this.state==="PAUSED"?this.resumeTo??"STANDBY":this.state}remainingDistance(){const e=this.effectiveState;if(e==="LANDING"||e==="COMPLETE")return 0;const n=new R;this.pathPoint(this.s,n);const i=e==="MANUAL_HOLD"||e==="ROUTE_BLOCKED"?n.distanceTo(this.pos):0;return Math.max(0,this.planLength-this.s)+i}snapshot(){const e=this.effectiveState,n=this.remainingDistance(),i=e==="LANDING"||e==="COMPLETE"?1:this.routeFlown+n>0?this.routeFlown/(this.routeFlown+n):0,r=this.inRange[0],s=this.state==="PAUSED",o=["TAKEOFF","AUTONOMOUS_TRANSIT","LANDING"].includes(this.state),a=s?"FROZEN":o?"SCANNING":this.state==="MANUAL_HOLD"?"HOLD":this.state==="ROUTE_BLOCKED"?"STATIONARY":"IDLE",l=this.route;return{state:this.state,resumeTo:this.resumeTo,initStep:Math.max(0,Math.min(sm+1,Math.floor((this.initT-hy)/fy)+1)),countdown:this.countdown,seed:this.world.seed,pos:{x:this.pos.x+0,y:-this.pos.z+0,z:this.pos.y+0},groundSpeed:Math.hypot(this.vel.x,this.vel.z),vz:this.vel.y,yawRate:xt.radToDeg(this.yawRate),accel:this.acc.length(),heading:Math.round(xt.radToDeg(this.heading))%360,progress:i,routeFlown:this.routeFlown,remaining:n,planLength:l.length,traveled:this.traveled,route:{id:l.id,rev:l.rev,origin:l.origin,waypointCount:l.waypoints.length-1,cruiseAlt:l.cruiseAlt,minClearance:l.minClearance},waypointCount:l.waypoints.length-1,currentWp:this.currentWp,obstacleCount:this.world.obstacles.length,obstaclesInRange:this.inRange.length,nearest:r?{id:r.o.id,kind:r.o.kind,dist:r.d}:null,minClearance:this.minClearance,pointsInRange:this.pointsInRange,pointsMapped:this.pointsMapped,totalPoints:this.world.cloud.count,scans:this.scans,sensor:a,missionTime:this.missionTime,holdTime:this.holdTime,blocked:this.blocked,deniedCount:this.deniedCount,site:this.site?{distanceM:this.site.distanceM,estimated:this.site.distanceIsEstimate}:null,distToGoal:Math.hypot(this.goalPt.x-this.pos.x,this.goalPt.z-this.pos.z)}}}function Kd(t){const e=Math.PI*2;return(t%e+e)%e}function tv(t,e){const n=t-e;return Math.atan2(Math.sin(n),Math.cos(n))}function my(t,e){return t>=e-1?"TGT":`WP-${String(t).padStart(2,"0")}`}function WR({engine:t}){const e=ze.useRef(null);return ze.useEffect(()=>{const n=e.current,i=n.getContext("2d");if(!i)return;const r=[];let s={x:1e9,z:0};const o=t.on(u=>{u.type==="reset"&&(r.length=0,s={x:1e9,z:0})});let a=1;const l=()=>{const u=Math.min(2,window.devicePixelRatio||1),d=n.clientWidth,f=n.clientHeight;(n.width!==d*u||n.height!==f*u)&&(n.width=d*u,n.height=f*u),i.setTransform(u,0,0,u,0,0);const p=t.site?t.site.bounds:{minX:-xn,maxX:xn,minZ:-xn,maxZ:xn},g=p.maxX-p.minX,y=p.maxZ-p.minZ,m=Math.min(d/(g+4),f/(y+4)),h=d/2-(p.minX+p.maxX)/2*m,v=f/2-(p.minZ+p.maxZ)/2*m,_=x=>h+x*m,S=x=>v+x*m;i.clearRect(0,0,d,f);const L=t.site?5:20;i.strokeStyle="rgba(47,212,255,0.07)",i.lineWidth=1;for(let x=Math.ceil(p.minX/L)*L;x<=p.maxX;x+=L)i.beginPath(),i.moveTo(_(x),S(p.minZ)),i.lineTo(_(x),S(p.maxZ)),i.stroke();for(let x=Math.ceil(p.minZ/L)*L;x<=p.maxZ;x+=L)i.beginPath(),i.moveTo(_(p.minX),S(x)),i.lineTo(_(p.maxX),S(x)),i.stroke();i.strokeStyle="rgba(47,212,255,0.35)",i.strokeRect(_(p.minX),S(p.minZ),g*m,y*m);const C=t.pos;t.site||(i.fillStyle="rgba(47,212,255,0.06)",i.beginPath(),i.arc(_(C.x),S(C.z),us*m,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(47,212,255,0.25)",i.stroke());const w=new Map(t.inRange.map(x=>[x.o.id,x.d]));for(const x of t.world.obstacles){const E=w.get(x.id),I=t.detected.has(x.id);i.fillStyle=E!==void 0?E<7?"rgba(255,77,94,0.55)":"rgba(255,181,71,0.35)":I?"rgba(47,140,200,0.35)":"rgba(120,150,180,0.13)",i.strokeStyle=E!==void 0?"rgba(255,181,71,0.8)":"rgba(47,212,255,0.25)",i.save(),i.translate(_(x.x),S(x.z)),x.shape==="circle"?(i.beginPath(),i.arc(0,0,x.r*m,0,Math.PI*2),i.fill(),i.stroke()):(i.rotate(-x.rot),i.fillRect(-x.hw*m,-x.hd*m,x.hw*2*m,x.hd*2*m),i.strokeRect(-x.hw*m,-x.hd*m,x.hw*2*m,x.hd*2*m)),i.restore()}if(t.route){const x=t.route.samples,E=Math.max(1,Math.floor(x.length/200)),I=x.filter((V,X)=>X%E===0||X===x.length-1),z=Math.floor(t.pathIndexAt(t.s)/E);i.lineWidth=1.6,i.strokeStyle="rgba(56,214,245,0.9)",i.setLineDash([4,3]),i.beginPath(),I.slice(z).forEach((V,X)=>X?i.lineTo(_(V.x),S(V.z)):i.moveTo(_(V.x),S(V.z))),i.stroke(),i.setLineDash([]),z>0&&(i.strokeStyle="#34d399",i.lineWidth=2.2,i.beginPath(),I.slice(0,z+1).forEach((V,X)=>X?i.lineTo(_(V.x),S(V.z)):i.moveTo(_(V.x),S(V.z))),i.stroke()),t.waypoints.forEach((V,X)=>{if(!X)return;const W=X<t.currentWp||t.state==="COMPLETE"||t.state==="LANDING";i.fillStyle=W?"#34d399":X===t.currentWp?"#ffffff":"#38d6f5",i.beginPath(),i.arc(_(V.x),S(V.z),2.6,0,Math.PI*2),i.fill()})}C.y>.2&&Math.hypot(C.x-s.x,C.z-s.z)>.8&&(r.push([C.x,C.z]),s={x:C.x,z:C.z}),r.length>1&&(i.strokeStyle="rgba(167,243,208,0.55)",i.lineWidth=1,i.beginPath(),r.forEach(([x,E],I)=>I?i.lineTo(_(x),S(E)):i.moveTo(_(x),S(E))),i.stroke());const P=t.startPt,F=t.goalPt;i.lineWidth=1.6,i.strokeStyle="#38d6f5",i.beginPath(),i.arc(_(P.x),S(P.z),6,0,Math.PI*2),i.stroke(),i.strokeStyle="#fbbf24",i.beginPath(),i.arc(_(F.x),S(F.z),6,0,Math.PI*2),i.stroke(),t.site&&(i.font='600 10.5px "JetBrains Mono", monospace',i.fillStyle="#38d6f5",i.fillText("P1 START",_(P.x)+10,S(P.z)+4),i.fillStyle="#fbbf24",i.fillText("P2 DEST",_(F.x)+10,S(F.z)+4),i.fillStyle="rgba(180,195,210,0.7)",i.fillText(`${t.site.distanceM.toFixed(1)} m${t.site.distanceIsEstimate?" est.":""}`,_(0)-70,S((P.z+F.z)/2))),i.save(),i.translate(_(C.x),S(C.z)),i.rotate(t.heading),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(0,-7),i.lineTo(4.5,5),i.lineTo(0,2.5),i.lineTo(-4.5,5),i.closePath(),i.fill(),i.restore(),i.fillStyle="rgba(200,220,240,0.6)",i.font='600 11px "JetBrains Mono", monospace',i.fillText(t.site?"↑ P2":"N ↑",d-34,15)};l();const c=t.onFrame(u=>{a+=u,a>=1/15&&(a=0,l())});return()=>{c(),o()}},[t]),T.jsx("canvas",{ref:e,className:"minimap"})}class jR{constructor(){this.ctx=null,this.muted=!1}get ac(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}tone(e,n=.12,i="sine",r=.06,s=0){if(!this.muted)try{const o=this.ac;if(!o)return;const a=o.currentTime+s,l=o.createOscillator(),c=o.createGain();l.type=i,l.frequency.setValueAtTime(e,a),c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(r,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c).connect(o.destination),l.start(a),l.stop(a+n+.02)}catch{}}click(){this.tone(1400,.05,"sine",.03)}tick(){this.tone(880,.15,"sine",.07)}go(){this.tone(660,.2,"triangle",.07),this.tone(990,.35,"triangle",.07,.12)}ok(){this.tone(1046,.12,"sine",.04),this.tone(1318,.18,"sine",.04,.08)}warn(){this.tone(520,.18,"square",.025)}deny(){this.tone(220,.22,"sawtooth",.05),this.tone(180,.3,"sawtooth",.05,.2)}}const oi=new jR;function Kt({onPress:t,variant:e="default",size:n="md",pointerOnly:i,silent:r,className:s="",children:o,...a}){return T.jsx("button",{type:"button",...a,className:`btn ${e} ${n} ${s}`,onClick:l=>{const c=l.detail>0;c&&l.currentTarget.blur(),!(i&&!c)&&(r||oi.click(),t())},children:o})}function wu({title:t,icon:e,aside:n,children:i,className:r=""}){return T.jsxs("section",{className:`panel ${r}`,children:[T.jsxs("header",{className:"panel-h",children:[T.jsx("span",{className:"panel-ic",children:e}),T.jsx("h3",{className:"panel-t",title:t,children:t}),n&&T.jsx("span",{className:"panel-aside",children:n})]}),T.jsx("div",{className:"panel-b",children:i})]})}function pi({label:t,value:e,unit:n,tone:i,big:r}){return T.jsxs("div",{className:`metric ${r?"big":""}`,children:[T.jsx("div",{className:"metric-l",children:t}),T.jsxs("div",{className:`metric-v ${i??""}`,children:[e,n&&T.jsx("span",{className:"metric-u",children:n})]})]})}function mo({k:t,v:e,tone:n}){return T.jsxs("div",{className:"row",children:[T.jsx("span",{className:"row-k",children:t}),T.jsx("span",{className:`row-v ${n??""}`,children:e})]})}function gy({size:t=26}){return T.jsxs("svg",{viewBox:"0 0 32 32",width:t,height:t,"aria-hidden":"true",children:[T.jsx("path",{d:"M16 3 L29 27 L16 21 L3 27 Z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),T.jsx("path",{d:"M16 10 L21.5 22 L16 19.5 L10.5 22 Z",fill:"currentColor",opacity:".35"})]})}const om=t=>{const e=Math.floor(t/60),n=Math.floor(t%60);return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`},Po=t=>Number.isFinite(t)?t.toFixed(1):"—",vy=t=>`AEG-${String(t).padStart(4,"0")}`;function XR({onInitialize:t}){return T.jsxs("div",{className:"screen welcome",children:[T.jsx("div",{className:"welcome-horizon","aria-hidden":"true"}),T.jsxs("div",{className:"welcome-inner",children:[T.jsx("div",{className:"welcome-logo",children:T.jsx(gy,{size:56})}),T.jsx("h1",{className:"welcome-title",children:"AEGIS"}),T.jsx("p",{className:"welcome-sub",children:"AUTONOMOUS NAVIGATION & MISSION INTELLIGENCE"}),T.jsx(Kt,{variant:"primary",size:"lg",onPress:t,pointerOnly:!0,className:"welcome-btn",children:"INITIALIZE"})]}),T.jsx("div",{className:"welcome-foot",children:"Virtual environment · synthetic data"})]})}function $R({snap:t,onContinue:e}){const n=ze.useMemo(()=>{try{const o=document.createElement("canvas");return!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{return!1}},[]),i=t.site?[["Simulation field","procedural dot-grid · synthetic"],["Grid + beacons",`P1 / P2 · ${_n.p1p2DistanceM.toFixed(1)} m apart`],["Flight model",`takeoff ${_n.climbRateMps} m/s · hold`],["Route planner","direct P1 → P2"],["Telemetry","10 Hz"],["Renderer",n?"WebGL 3D":"WebGL unavailable"]]:[["Environment generator",`seed ${t.seed}`],["LiDAR model",`${us} m · ${iu} Hz`],["Flight model",`${rm} m/s cruise`],["Route planner",`A* · ${Za} m grid`],["Telemetry","10 Hz"],["Renderer",n?"WebGL":"WebGL unavailable"]],r=t.state==="READY",s=r?qd:Math.max(0,t.initStep-1);return T.jsx("div",{className:"screen centered",children:T.jsxs("div",{className:"card init",children:[T.jsxs("div",{className:"card-head",children:[T.jsxs("div",{children:[T.jsx("div",{className:"eyebrow",children:"SYSTEM INITIALIZATION"}),T.jsx("h2",{className:"card-title",children:r?"All systems ready":"Initializing…"})]}),T.jsxs("div",{className:"init-count mono",children:[s,"/",qd]})]}),T.jsx("div",{className:"init-progress",children:T.jsx("span",{style:{width:`${s/qd*100}%`}})}),T.jsx("ul",{className:"checks",children:i.map(([o,a],l)=>{const c=r||t.initStep>l+1?"ok":t.initStep===l+1?"run":"wait";return T.jsxs("li",{className:`check ${c}`,children:[T.jsx("span",{className:"check-ic",children:c==="ok"?T.jsx(o1,{size:13,strokeWidth:3}):null}),T.jsx("span",{className:"check-n",children:o}),T.jsx("span",{className:"check-m mono",children:a}),T.jsx("span",{className:"check-s",children:c==="ok"?"Ready":c==="run"?"Checking":"Pending"})]},o)})}),T.jsxs("div",{className:"card-foot",children:[T.jsx("span",{className:"muted",children:t.site?`Simulation grid · Point 1 → Point 2 ${t.site.distanceM.toFixed(1)} m`:`${t.obstacleCount} obstacles · ${t.totalPoints.toLocaleString()} LiDAR points generated`}),T.jsxs(Kt,{variant:"primary",onPress:e,disabled:!r,pointerOnly:!0,children:["CONTINUE ",T.jsx(Dp,{size:15})]})]})]})})}function YR({snap:t,onProceed:e}){var r;const n=(r=t.site)!=null&&r.estimated?" (estimate)":"",i=t.site?[["Objective",`Autonomous takeoff at Point 1 to ${t.route.cruiseAlt.toFixed(1)} m AGL, then automatic position hold. Point 2 is the navigation reference; the aircraft does not travel there automatically.`],["Environment","Synthetic simulation field — procedural dot-grid with two beacons; virtual environment, not a live feed or real imagery"],["Start","Point 1 — cyan beacon (launch position)"],["Destination",`Point 2 — amber beacon · ${t.site.distanceM.toFixed(1)} m from Point 1${n}`],["Route",`${t.waypointCount} waypoint${t.waypointCount===1?"":"s"} · direct · ${Po(t.planLength)} m`],["Altitude",`Takeoff to ${t.route.cruiseAlt.toFixed(1)} m AGL at ${_n.climbRateMps} m/s · ceiling ${kf} m`],["Manual flight","Restricted · commands are denied and the aircraft is held"],["Navigation","GPS denied · local frame, 000° = bearing Point 1 → Point 2"],["Telemetry","Virtual aircraft (synthetic) — no live hardware or sensor data"]]:[["Objective","Fly autonomously from LAUNCH to TARGET without GPS, avoiding all obstacles, then land."],["Environment",`${xn*2} × ${xn*2} m arena · ${t.obstacleCount} obstacles · seed ${t.seed}`],["Perception",`360° LiDAR · ${us} m range · ${iu} Hz · ${t.totalPoints.toLocaleString()} surface points`],["Route",`${t.waypointCount} waypoints · ${Po(t.planLength)} m`],["Planner",`A* on ${Za} m occupancy grid with line-of-sight smoothing`],["Obstacle clearance",`${Ff.toFixed(1)} m planned · 2.0 m route guard`],["Altitude",`Cruise ${Of.toFixed(1)} m AGL · ceiling ${kf} m`],["Manual flight","Restricted · commands are denied and the aircraft is held"],["Speed",`${rm.toFixed(1)} m/s cruise`],["Navigation","GPS denied · local frame (East / North / Altitude) centred on the arena"]];return T.jsx("div",{className:"screen centered",children:T.jsxs("div",{className:"card brief",children:[T.jsx("div",{className:"card-head",children:T.jsxs("div",{children:[T.jsx("div",{className:"eyebrow",children:"MISSION BRIEFING"}),T.jsx("h2",{className:"card-title mono",children:vy(t.seed)})]})}),T.jsx("dl",{className:"brief-list",children:i.map(([s,o])=>T.jsxs("div",{className:"brief-row",children:[T.jsx("dt",{children:s}),T.jsx("dd",{children:o})]},s))}),T.jsx("div",{className:"card-foot end",children:T.jsxs(Kt,{variant:"primary",size:"lg",onPress:e,pointerOnly:!0,children:["PROCEED ",T.jsx(Dp,{size:16})]})})]})})}const _y={WELCOME:"OFFLINE",INITIALIZING:"INITIALIZING",READY:"READY",BRIEFING:"BRIEFING",STANDBY:"STANDBY",COUNTDOWN:"COUNTDOWN",TAKEOFF:"TAKEOFF",AUTONOMOUS_TRANSIT:"AUTONOMOUS",MANUAL_HOLD:"MANUAL HOLD",ROUTE_BLOCKED:"ROUTE BLOCKED",LANDING:"LANDING",COMPLETE:"COMPLETE",PAUSED:"PAUSED"},xy={WELCOME:"muted",INITIALIZING:"cyan",READY:"green",BRIEFING:"cyan",STANDBY:"green",COUNTDOWN:"amber",TAKEOFF:"cyan",AUTONOMOUS_TRANSIT:"cyan",MANUAL_HOLD:"amber",ROUTE_BLOCKED:"red",LANDING:"cyan",COMPLETE:"green",PAUSED:"amber"};function qR({heading:t}){const e=[],n=Math.round(t/10)*10;for(let i=n-60;i<=n+60;i+=10){const r=i-t;if(Math.abs(r)>58)continue;const s=(i%360+360)%360,o=s===0?"N":s===90?"E":s===180?"S":s===270?"W":s%30===0?String(s):"";e.push(T.jsx("div",{className:`ht-m ${o?"maj":""}`,style:{left:`${50+r*.85}%`},children:o&&T.jsx("span",{children:o})},i))}return T.jsxs("div",{className:"htape","aria-label":`Heading ${t} degrees`,children:[T.jsx("div",{className:"ht-c"}),e]})}function KR({snap:t}){return T.jsxs(wu,{title:"Flight",icon:T.jsx(yx,{size:15}),aside:T.jsxs("span",{className:"mono muted",children:["T+",om(t.missionTime)]}),children:[T.jsxs("div",{className:"pos-grid",children:[T.jsxs("div",{className:"pos",children:[T.jsx("span",{children:"EAST"}),T.jsx("b",{className:"mono",children:t.pos.x.toFixed(1)})]}),T.jsxs("div",{className:"pos",children:[T.jsx("span",{children:"NORTH"}),T.jsx("b",{className:"mono",children:t.pos.y.toFixed(1)})]}),T.jsxs("div",{className:"pos alt",children:[T.jsx("span",{children:"ALT AGL"}),T.jsx("b",{className:"mono",children:t.pos.z.toFixed(1)})]})]}),T.jsxs("div",{className:"metric-grid",children:[T.jsx(pi,{label:"Ground speed",value:t.groundSpeed.toFixed(1),unit:"m/s",tone:"cyan"}),T.jsx(pi,{label:"Vertical speed",value:(t.vz>.05?"+":t.vz<-.05?"−":"")+Math.abs(t.vz).toFixed(1),unit:"m/s"})]}),T.jsxs("div",{className:"hdg-row",children:[T.jsx(pi,{label:"Heading",value:String(t.heading).padStart(3,"0"),unit:"°"}),T.jsx(qR,{heading:t.heading})]})]})}function ZR({snap:t}){const e=t.state==="PAUSED"?t.resumeTo??"STANDBY":t.state,n=t.waypointCount,i=e==="LANDING"||e==="COMPLETE",r=t.site?i?"Point 2 reached":`Point 2 · ${t.currentWp} of ${n}`:i?"Target reached":`${my(t.currentWp,n+1)} · ${t.currentWp} of ${n}`,s=e==="ROUTE_BLOCKED"?["Blocked","red"]:e==="MANUAL_HOLD"?["Position hold","amber"]:e==="AUTONOMOUS_TRANSIT"?["Tracking route","cyan"]:i?["Route complete","green"]:["Route ready","green"],o=t.route;return T.jsxs(wu,{title:"Navigation",icon:T.jsx(u1,{size:15}),aside:T.jsx("span",{className:"tag-gps",children:"GPS DENIED"}),children:[T.jsxs("div",{className:"route-prog",children:[T.jsxs("div",{className:"route-top",children:[T.jsx("span",{children:"Route progress"}),T.jsxs("b",{className:"mono",children:[Math.round(t.progress*100),"%"]})]}),T.jsx("div",{className:"bar",children:T.jsx("span",{style:{width:`${t.progress*100}%`}})}),T.jsxs("div",{className:"route-bot mono",children:[T.jsxs("span",{children:[Po(t.routeFlown)," m flown"]}),T.jsxs("span",{children:[Po(t.remaining)," m left"]})]})]}),T.jsx(mo,{k:"Status",v:s[0],tone:s[1]}),T.jsx(mo,{k:"Waypoint",v:r}),T.jsx(mo,{k:"Route",v:`R${o.rev} · ${o.origin==="INITIAL"?"planned":"recalculated"} · ${o.waypointCount} WP`})]})}const QR={IDLE:["Standby scan","muted"],HOLD:["Held · frozen","amber"],SCANNING:["Scanning · 10 Hz","cyan"],STATIONARY:["Scanning · stationary","amber"],FROZEN:["Frozen (paused)","amber"]};function JR({snap:t}){const e=t.site;return e?T.jsxs(wu,{title:"Test site",icon:T.jsx(h1,{size:15}),aside:T.jsx("span",{className:"mono muted",children:"simulation grid"}),children:[T.jsxs("div",{className:"metric-grid",children:[T.jsx(pi,{label:"Point 1 → Point 2",value:e.distanceM.toFixed(1),unit:"m",tone:"cyan"}),T.jsx(pi,{label:"To destination",value:t.distToGoal.toFixed(1),unit:"m"})]}),T.jsxs("div",{className:"site-extra",children:[T.jsx(mo,{k:"Start",v:"Point 1 · cyan beacon"}),T.jsx(mo,{k:"Destination",v:"Point 2 · amber beacon"})]}),T.jsx(mo,{k:"Distance source",v:e.estimated?"Estimate":"Configured",tone:e.estimated?"amber":void 0})]}):T.jsx(eb,{snap:t})}function eb({snap:t}){const e=t.totalPoints?t.pointsMapped/t.totalPoints:0,n=t.nearest&&t.nearest.dist<im,[i,r]=QR[t.sensor];return T.jsxs(wu,{title:"LiDAR",icon:T.jsx(x1,{size:15}),aside:T.jsx("span",{className:`mono ${r}`,children:i}),children:[T.jsxs("div",{className:"metric-grid",children:[T.jsx(pi,{label:"Returns in range",value:t.pointsInRange.toLocaleString(),tone:"cyan"}),T.jsx(pi,{label:"Map coverage",value:(e*100).toFixed(0),unit:"%"})]}),T.jsxs("div",{className:`nearest ${n?"warn":""}`,children:[T.jsx(xx,{size:14}),t.nearest?T.jsxs("span",{children:["Nearest ",T.jsx("b",{children:t.nearest.id})," · ",t.nearest.kind.toLowerCase()]}):T.jsxs("span",{children:["Clear within ",us," m"]}),t.nearest&&T.jsxs("b",{className:"mono nearest-d",children:[t.nearest.dist.toFixed(1)," m"]})]})]})}const nv=[{key:["STANDBY"],name:"Standby"},{key:["COUNTDOWN"],name:"Countdown"},{key:["TAKEOFF"],name:"Takeoff"},{key:["AUTONOMOUS_TRANSIT","MANUAL_HOLD","ROUTE_BLOCKED"],name:"Transit"},{key:["LANDING"],name:"Landing"},{key:["COMPLETE"],name:"Complete"}];function tb({snap:t}){const e=t.state==="PAUSED"?t.resumeTo??"STANDBY":t.state,n=nv.findIndex(i=>i.key.includes(e));return T.jsx("ol",{className:"timeline",children:nv.map((i,r)=>{const s=r<n||e==="COMPLETE",o=r===n&&e!=="COMPLETE";let a="";o&&e==="MANUAL_HOLD"?a="hold":o&&e==="ROUTE_BLOCKED"?a="blocked":o&&e==="AUTONOMOUS_TRANSIT"?a=`WP ${t.currentWp}/${t.waypointCount} · R${t.route.rev}`:o&&t.state==="PAUSED"&&(a="paused");const l=r===3&&e==="MANUAL_HOLD"&&t.routeFlown===0?"Position hold":i.name;return l==="Position hold"&&(a=""),T.jsxs("li",{className:`tl ${s?"done":""} ${o?"cur":""}`,children:[T.jsx("span",{className:"tl-dot"}),T.jsx("span",{className:"tl-n",children:l}),a&&T.jsx("span",{className:"tl-note mono",children:a})]},i.name)})})}function nb({log:t}){return T.jsx("div",{className:"log",role:"log","aria-live":"polite",children:t.map(e=>T.jsxs("div",{className:`log-r ${e.level}`,children:[T.jsx("span",{className:"log-t mono",children:e.t}),T.jsx("span",{className:"log-m",children:e.msg})]},e.id))})}function ib(t){const[e,n]=ze.useState(()=>t.snapshot()),[i,r]=ze.useState(()=>t.log.slice(0,80));return ze.useEffect(()=>{const s=()=>{n(t.snapshot()),r(t.log.slice(0,80))},o=window.setInterval(s,50),a=t.on(l=>{(l.type==="state"||l.type==="reset")&&s()});return()=>{clearInterval(o),a()}},[t]),{snap:e,log:i}}function rb(){const[t,e]=ze.useState(()=>new Date);return ze.useEffect(()=>{const n=window.setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),t}function sb({snap:t,fs:e,onFs:n,muted:i,onMute:r,mode:s,onMode:o,quality:a,onQuality:l}){const c=rb(),u=xy[t.state];return T.jsxs("header",{className:"header",children:[T.jsxs("div",{className:"brand",children:[T.jsx("span",{className:"brand-mark",children:T.jsx(gy,{size:24})}),T.jsx("span",{className:"brand-name",children:"AEGIS"}),T.jsx("span",{className:"brand-div"}),T.jsx("span",{className:"brand-sub",children:"Autonomous Navigation & Mission Intelligence"})]}),T.jsxs("div",{className:"header-right",children:[T.jsxs("div",{className:"hd-item",children:[T.jsx("span",{className:"hd-k",children:"Mission"}),T.jsx("span",{className:"hd-v mono",children:vy(t.seed)})]}),T.jsxs("div",{className:`state-chip ${u}`,"data-testid":"state-chip",children:[T.jsx("span",{className:"dot"}),_y[t.state]]}),T.jsxs("div",{className:"hd-item time",children:[T.jsx(c1,{size:14}),T.jsx("span",{className:"mono",children:c.toLocaleTimeString([],{hour12:!1})})]}),T.jsx("span",{className:"disclosure",title:"All data on this console is generated in the browser. There is no vehicle link.",children:"SYNTHETIC DATA"}),T.jsx("button",{type:"button",className:"icon-btn mode-btn","data-testid":"mode-toggle",onClick:d=>{d.detail&&d.currentTarget.blur(),o()},title:s==="night"?"Switch to DAY view":"Switch to NIGHT view","aria-label":"Toggle day / night",children:s==="night"?T.jsx(g1,{size:16}):T.jsx(w1,{size:16})}),T.jsxs("button",{type:"button",className:"icon-btn q-btn","data-testid":"quality-toggle",onClick:d=>{d.detail&&d.currentTarget.blur(),l()},title:`Render quality: ${a} (click to change)`,"aria-label":"Render quality",children:[T.jsx(yx,{size:14}),T.jsx("span",{children:a})]}),T.jsx("button",{type:"button",className:"icon-btn",onClick:d=>{d.detail&&d.currentTarget.blur(),r()},title:i?"Unmute sounds (M)":"Mute sounds (M)","aria-label":i?"Unmute":"Mute",children:i?T.jsx(R1,{size:16}):T.jsx(C1,{size:16})}),T.jsx("button",{type:"button",className:"icon-btn",onClick:d=>{d.detail&&d.currentTarget.blur(),n()},title:e?"Exit fullscreen (Esc)":"Enter fullscreen","aria-label":"Toggle fullscreen",children:e?T.jsx(m1,{size:16}):T.jsx(p1,{size:16})})]})]})}function ob({value:t,paused:e}){const n=Math.max(1,Math.ceil(t)),i=t-Math.floor(t)||1;return T.jsxs("div",{className:"overlay countdown","aria-live":"assertive",children:[T.jsxs("div",{className:"cd-ring",children:[T.jsxs("svg",{viewBox:"0 0 200 200",children:[T.jsx("circle",{cx:"100",cy:"100",r:"90",className:"cd-track"}),T.jsx("circle",{cx:"100",cy:"100",r:"90",className:"cd-prog",style:{strokeDashoffset:565.5*(1-i)}})]}),T.jsx("div",{className:`cd-num mono ${e?"":"anim"}`,children:n},n)]}),T.jsx("div",{className:"cd-label",children:e?"COUNTDOWN PAUSED":"LAUNCH SEQUENCE"})]})}function ab({cmd:t,onClose:e}){const n=ze.useRef(null);return ze.useEffect(()=>{var i;(i=n.current)==null||i.focus()},[]),T.jsx("div",{className:"modal-backdrop",onMouseDown:e,children:T.jsxs("div",{className:"denied",role:"alertdialog","aria-modal":"true","aria-labelledby":"denied-t",onMouseDown:i=>i.stopPropagation(),children:[T.jsx("div",{className:"denied-scan","aria-hidden":"true"}),T.jsxs("div",{className:"denied-head",children:[T.jsx(M1,{size:20}),T.jsx("span",{id:"denied-t",children:"COMMAND DENIED"})]}),T.jsxs("div",{className:"denied-body",children:[T.jsx("div",{className:"denied-cmd mono",children:t}),T.jsx("p",{children:"This command is not available in the virtual environment. The console controls a virtual aircraft only, and nothing was transmitted."})]}),T.jsx("div",{className:"denied-foot",children:T.jsx("button",{ref:n,type:"button",className:"btn danger md",onClick:e,children:"DISMISS"})})]})})}function lb({snap:t,onClose:e}){return T.jsxs("div",{className:"complete-card",role:"status",children:[T.jsxs("div",{className:"complete-head",children:[T.jsx(T1,{size:16}),"Mission complete",T.jsx("button",{type:"button",className:"icon-btn sm",onClick:e,"aria-label":"Close summary",children:T.jsx(b1,{size:14})})]}),T.jsxs("div",{className:"complete-grid",children:[T.jsx(pi,{label:"Flight time",value:om(t.missionTime)}),T.jsx(pi,{label:"Distance flown",value:Po(t.traveled),unit:"m"}),T.jsx(pi,{label:"Min clearance",value:Po(t.minClearance),unit:"m",tone:"green"}),T.jsx(pi,{label:"Map coverage",value:`${Math.round(t.pointsMapped/Math.max(1,t.totalPoints)*100)}`,unit:"%"})]}),T.jsx("p",{className:"complete-hint",children:"Press RESET to prepare a new mission."})]})}function cb({alt:t,target:e,vz:n}){const r=s=>`${100-Math.min(20,Math.max(0,s))/20*100}%`;return T.jsxs("div",{className:"alt-tape","aria-label":`Altitude ${t.toFixed(1)} metres`,children:[T.jsx("div",{className:"alt-h",children:"ALT"}),T.jsxs("div",{className:"alt-scale",children:[[0,5,10,15,20].map(s=>T.jsx("div",{className:"alt-tick",style:{top:r(s)},children:T.jsx("span",{children:s})},s)),T.jsx("div",{className:"alt-target",style:{top:r(e)},title:`Target ${e.toFixed(1)} m`}),T.jsx("div",{className:"alt-fill",style:{top:r(t)}}),T.jsx("div",{className:"alt-ptr",style:{top:r(t)},children:T.jsx("b",{className:"mono",children:t.toFixed(1)})})]}),T.jsxs("div",{className:"alt-f mono",children:[n>.05?"▲":n<-.05?"▼":"■"," ",Math.abs(n).toFixed(1)]})]})}function ub({cmd:t,leaving:e,count:n,side:i}){return T.jsxs("div",{className:`rx-alert rx-toast ${i} ${e?"out":""}`,role:"alert","aria-live":"assertive","data-testid":"restricted-alert",children:[T.jsx("div",{className:"rx-scan","aria-hidden":"true"}),T.jsx("div",{className:"rx-icon",children:T.jsx(v1,{size:24,strokeWidth:1.8})}),T.jsxs("div",{className:"rx-text",children:[T.jsx("div",{className:"rx-l1",children:"COMMAND DENIED"}),T.jsx("div",{className:"rx-l2",children:"CONTROL AUTHORIZATION FAILURE"}),T.jsx("div",{className:"rx-l3",children:"MANUAL FLIGHT COMMANDS ARE RESTRICTED"}),T.jsxs("div",{className:"rx-cmd mono",children:[t,n>1?` ×${n}`:""," · aircraft held"]})]})]})}const iv={w:"FORWARD",s:"BACKWARD",q:"LEFT",e:"RIGHT",a:"YAW LEFT",d:"YAW RIGHT",r:"ASCEND",f:"DESCEND"},rv=3e3,db=350;function hb(){var U,St,$e;const t=ze.useMemo(()=>new GR(_n),[]);ze.useEffect(()=>(t.start(),()=>t.stop()),[t]);const{snap:e,log:n}=ib(t),[i,r]=ze.useState(!1),[s,o]=ze.useState(!1),[a,l]=ze.useState("AUTO"),c={get:ne=>{try{return window.localStorage.getItem(ne)}catch{return null}},set:(ne,ie)=>{try{window.localStorage.setItem(ne,ie)}catch{}}},[u,d]=ze.useState(()=>c.get("aegis.mode")==="day"?"day":"night"),[f,p]=ze.useState(()=>{const ne=c.get("aegis.quality");return ne==="high"||ne==="low"?ne:"auto"}),[g,y]=ze.useState({q:"high",auto:!0}),m=ze.useRef(null),h=ze.useCallback(()=>d(ne=>{const ie=ne==="night"?"day":"night";return c.set("aegis.mode",ie),ie}),[]),v=ze.useCallback(()=>p(ne=>{const ie=ne==="auto"?"high":ne==="high"?"low":"auto";return c.set("aegis.quality",ie),ie}),[]),[_,S]=ze.useState(0),[L,C]=ze.useState(null),[w,P]=ze.useState(!1),[F,x]=ze.useState(null),E=ze.useRef(0),[I,z]=ze.useState(null),V=ze.useRef([]),X=ze.useCallback((ne,ie="cyan")=>{x({msg:ne,tone:ie}),window.clearTimeout(E.current),E.current=window.setTimeout(()=>x(null),1800)},[]);ze.useEffect(()=>()=>{window.clearTimeout(E.current),V.current.forEach(clearTimeout)},[]),ze.useEffect(()=>t.on(ne=>{switch(ne.type){case"countdown":case"tick":oi.tick();break;case"liftoff":oi.go();break;case"proximity":oi.warn();break;case"guard":oi.deny();break;case"blocked":oi.warn();break;case"complete":oi.ok();break;case"reset":V.current.forEach(clearTimeout),z(null),C(null),x(null),P(!1),S(ie=>ie+1);break}}),[t]),ze.useEffect(()=>{const ne=()=>r(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",ne),()=>document.removeEventListener("fullscreenchange",ne)},[]);const W=ze.useCallback(()=>{var ie,je;const ne=document.fullscreenElement?document.exitFullscreen():(je=(ie=document.documentElement).requestFullscreen)==null?void 0:je.call(ie);ne==null||ne.catch(()=>X("Fullscreen is not available in this browser","amber"))},[X]),J=ze.useCallback(()=>{const ne=!oi.muted;oi.muted=ne,o(ne)},[]),D=e.state==="WELCOME"?"welcome":e.state==="INITIALIZING"||e.state==="READY"?"init":e.state==="BRIEFING"?"brief":"console";ze.useEffect(()=>{var ne,ie;(ie=(ne=document.activeElement)==null?void 0:ne.blur)==null||ie.call(ne)},[D]);const K=ze.useCallback(ne=>t.dispatch(ne),[t]),Y=ze.useCallback(ne=>{t.restrictedAvailable()&&(t.handleRestrictedFlightCommand(ne),oi.deny(),V.current.forEach(clearTimeout),z(ie=>({cmd:ne,n:ie&&ie.cmd===ne&&!ie.leaving?ie.n+1:1,leaving:!1})),V.current=[window.setTimeout(()=>z(ie=>ie&&{...ie,leaving:!0}),rv-db),window.setTimeout(()=>z(null),rv)])},[t]),ae=ze.useCallback(()=>{t.recalculate()?X(`Route R${t.route.rev} · ${t.waypoints.length-1} waypoints`):X("No feasible route from this position","red")},[t,X]),Te=ze.useCallback(()=>{t.newEnvironment()&&X("New environment generated")},[t,X]),Ge=ze.useCallback(ne=>{oi.deny(),t.addLog("alert",`Command denied · ${ne} · not available in the virtual environment`),C(ne)},[t]),$=ze.useRef({state:e.state,denied:L});$.current={state:e.state,denied:L},ze.useEffect(()=>{const ne=ie=>{const{state:je,denied:Ce}=$.current;if(ie.key==="Escape"){Ce&&(ie.preventDefault(),C(null));return}if(Ce||ie.repeat||ie.ctrlKey||ie.metaKey||ie.altKey)return;const b=ie.target,M=b==null?void 0:b.tagName;if(M==="INPUT"||M==="TEXTAREA"||M==="SELECT"||b!=null&&b.isContentEditable||!NR.includes(je))return;const H=ie.key.toLowerCase();if(H===" "){if(M==="BUTTON"||M==="A")return;ie.preventDefault(),t.site&&t.state==="MANUAL_HOLD"?Y("PAUSE"):t.allowed("RESUME")?t.dispatch("RESUME"):t.allowed("PAUSE")&&t.dispatch("PAUSE");return}if(iv[H]){ie.preventDefault(),Y(iv[H]);return}H==="c"&&(l("AUTO"),S(ee=>ee+1)),H==="m"&&J()};return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},[t,Y,J]);const q=e.state,ue=q==="PAUSED"?e.resumeTo??"STANDBY":q,me=()=>{var b;const ne=((b=m.current)==null?void 0:b.clientWidth)??1200,ie=Ht.droneBox;if(!ie)return"right";const je=ne<=1e3?Math.min(300,ne-28):window.innerWidth<=1600?300:390,Ce={x0:ne-14-je,y0:50,x1:ne-14,y1:170};return ie.x0<Ce.x1&&Ce.x0<ie.x1&&ie.y0<Ce.y1&&Ce.y0<ie.y1?"left":"right"},Ue=ne=>t.allowed(ne),De=q==="MANUAL_HOLD",Ye=t.restrictedAvailable(),qe=ne=>Ye?`Restricted (${ne}) — command will be denied and the aircraft held`:"Restricted — available in flight only (always denied)",Xe=e.nearest&&e.nearest.dist<im&&["AUTONOMOUS_TRANSIT","TAKEOFF","LANDING"].includes(q);return T.jsxs("div",{className:`app stage-${D}`,"data-state":q,children:[D!=="welcome"&&T.jsx(sb,{snap:e,fs:i,onFs:W,muted:s,onMute:J,mode:u,onMode:h,quality:f==="auto"?`AUTO·${g.q.toUpperCase()}`:f.toUpperCase(),onQuality:v}),D==="welcome"&&T.jsx(XR,{onInitialize:()=>K("INITIALIZE")}),D==="init"&&T.jsx($R,{snap:e,onContinue:()=>K("CONTINUE")}),D==="brief"&&T.jsx(YR,{snap:e,onProceed:()=>K("PROCEED")}),D==="console"&&T.jsxs("main",{className:"console",children:[T.jsxs("aside",{className:"col left","aria-label":"Flight data",children:[T.jsx(KR,{snap:e}),T.jsx(ZR,{snap:e}),T.jsx(JR,{snap:e})]}),T.jsxs("section",{className:"center","aria-label":"3D environment",children:[T.jsxs("div",{className:"viewport",ref:m,"data-mode":u,children:[T.jsx(TR,{engine:t,snap:e,mode:u,preset:a,presetToken:_,qualityPref:f,onQuality:(ne,ie)=>y({q:ne,auto:ie}),onPreset:ne=>{l(ne),S(ie=>ie+1)}}),De?T.jsxs("div",{className:"hold-chip",role:"status","data-testid":"hold-chip",children:[T.jsx("span",{className:"dot"}),T.jsx("b",{children:"MANUAL HOLD"}),T.jsx("span",{children:"AUTONOMY SUSPENDED · AIRCRAFT STATIONARY"})]}):T.jsxs("div",{className:"vp-tag",children:[T.jsx("span",{className:"dot"}),"SIMULATION GRID · SYNTHETIC TELEMETRY"]}),T.jsxs("div",{className:"vp-cams",role:"group","aria-label":"Camera",children:[[["WIDE",d1],["FOLLOW",A1],["ORBIT",_1],["TACTICAL",xx]].map(([ne,ie])=>T.jsxs("button",{type:"button",className:`seg ${a===ne?"on":""}`,"aria-pressed":a===ne,"data-preset":ne,title:`${ne} camera`,onClick:je=>{je.detail&&je.currentTarget.blur(),l(ne),S(Ce=>Ce+1)},children:[T.jsx(ie,{size:14}),ne]},ne)),T.jsxs("button",{type:"button",className:`seg ${a==="AUTO"?"on":""}`,"data-preset":"RESET",title:"Reset to the automatic cinematic camera (C / double-click)",onClick:ne=>{ne.detail&&ne.currentTarget.blur(),l("AUTO"),S(ie=>ie+1)},children:[T.jsx(sd,{size:14}),a==="AUTO"?"AUTO":"RESET"]})]}),T.jsx(cb,{alt:e.pos.z,target:e.route.cruiseAlt,vz:e.vz}),T.jsxs("div",{className:"vp-hud",children:[T.jsx("div",{className:`hud-state ${xy[q]}`,children:_y[q]}),T.jsxs("div",{className:"hud-clock mono",children:["T+",om(e.missionTime)]}),T.jsx("div",{className:"hud-bar",children:T.jsx("span",{style:{width:`${e.progress*100}%`}})}),T.jsxs("div",{className:"hud-pct mono",children:[Math.round(e.progress*100),"%"]}),T.jsx("div",{className:"hud-disc",title:"Synthetic simulation grid — virtual environment, not a live feed. All telemetry is synthetic.",children:"SIMULATION GRID · SYNTHETIC TELEMETRY"})]}),ue==="COUNTDOWN"&&T.jsx(ob,{value:e.countdown,paused:q==="PAUSED"}),q==="PAUSED"&&ue!=="COUNTDOWN"&&T.jsxs("div",{className:"paused-badge",children:[T.jsx(rd,{size:14}),"PAUSED"]}),q==="COMPLETE"&&!w&&T.jsx(lb,{snap:e,onClose:()=>P(!0)}),q==="ROUTE_BLOCKED"&&T.jsxs("div",{className:"vp-banner red",role:"alert","data-testid":"blocked-banner",children:[T.jsxs("div",{className:"vb-text",children:[T.jsxs("b",{children:["ROUTE BLOCKED",(U=e.blocked)!=null&&U.id?` · ${e.blocked.id}`:"",((St=e.blocked)==null?void 0:St.dist)!=null?` · ${e.blocked.dist.toFixed(1)} m`:""]}),T.jsx("span",{children:($e=e.blocked)==null?void 0:$e.reason})]}),T.jsxs(Kt,{variant:"primary",onPress:ae,children:[T.jsx(Pg,{size:15}),"RECALCULATE"]}),T.jsxs(Kt,{onPress:()=>K("HOLD"),children:[T.jsx(Cg,{size:15}),"HOLD"]})]}),Xe&&T.jsxs("div",{className:"prox-banner",role:"status",children:["Proximity advisory · ",e.nearest.id," · ",e.nearest.dist.toFixed(1)," m"]}),F&&T.jsx("div",{className:`toast ${F.tone}`,role:"status",children:F.msg}),I&&T.jsx(ub,{cmd:I.cmd,leaving:I.leaving,count:I.n,side:me()})]}),T.jsxs("div",{className:"dock",children:[T.jsxs("div",{className:"dock-g mission",children:[T.jsx("div",{className:"dock-h",children:"Mission"}),T.jsxs("div",{className:"dock-grid",children:[T.jsxs(Kt,{variant:"primary",pointerOnly:!0,disabled:!Ue("START"),onPress:()=>K("START"),title:"Start the mission countdown (mouse click only)",children:[T.jsx(bg,{size:15}),"START MISSION"]}),q==="PAUSED"?T.jsxs(Kt,{onPress:()=>K("RESUME"),title:"Resume (Space)",children:[T.jsx(bg,{size:15}),"RESUME"]}):De&&t.site?T.jsxs(Kt,{onPress:()=>Y("PAUSE"),title:"Denied while the aircraft is in MANUAL HOLD","data-cmd":"PAUSE",className:"rx-btn",children:[T.jsx(rd,{size:15}),"PAUSE"]}):T.jsxs(Kt,{disabled:!Ue("PAUSE"),onPress:()=>K("PAUSE"),title:"Pause the simulation (Space)",children:[T.jsx(rd,{size:15}),"PAUSE"]}),T.jsxs(Kt,{disabled:!Ue("RESET"),onPress:()=>K("RESET"),title:"Return to launch pad and clear the mission",children:[T.jsx(sd,{size:15}),"RESET"]}),De?t.site?T.jsxs(Kt,{onPress:()=>Y("RESUME AUTO"),title:"Denied while the aircraft is in MANUAL HOLD","data-cmd":"RESUME AUTO",className:"rx-btn",children:[T.jsx(Rg,{size:15}),"RESUME AUTO"]}):T.jsxs(Kt,{disabled:!Ue("RESUME_AUTO"),onPress:()=>K("RESUME_AUTONOMY"),title:"Recalculate from here and continue autonomously",children:[T.jsx(Rg,{size:15}),"RESUME AUTO"]}):T.jsxs(Kt,{disabled:!Ue("HOLD"),onPress:()=>K("HOLD"),title:"Stop and hold position",children:[T.jsx(Cg,{size:15}),"HOLD"]}),T.jsxs(Kt,{disabled:!Ue("RECALCULATE"),onPress:ae,title:De?"In hold, RESUME AUTO recalculates the route":"Recalculate the route (standby, transit or blocked)",children:[T.jsx(Pg,{size:15}),"RECALCULATE"]}),T.jsxs(Kt,{disabled:!Ue("NEW_ENV"),onPress:Te,title:"Generate a new environment (standby only)",children:[T.jsx(E1,{size:15}),"NEW ",T.jsx("span",{className:"lbl-wide",children:"ENVIRONMENT"}),T.jsx("span",{className:"lbl-narrow",children:"ENV"})]})]})]}),T.jsxs("div",{className:"dock-g flight",children:[T.jsxs("div",{className:"dock-h",children:["Manual control ",T.jsxs("span",{className:"dock-note red",children:[T.jsx(yl,{size:11}),"restricted"]})]}),T.jsx("div",{className:"dock-grid four",children:[["YAW LEFT","YAW L",sd,"A"],["FORWARD","FORWARD",s1,"W"],["YAW RIGHT","YAW R",y1,"D"],["ASCEND","ASCEND",l1,"R"],["LEFT","LEFT",r1,"Q"],["BACKWARD","BACKWARD",i1,"S"],["RIGHT","RIGHT",Dp,"E"],["DESCEND","DESCEND",a1,"F"]].map(([ne,ie,je,Ce])=>T.jsxs(Kt,{className:"rx-btn",disabled:!Ye,silent:!0,"data-cmd":ne,onPress:()=>Y(ne),title:qe(Ce),children:[T.jsx(je,{size:15}),ie,T.jsx("kbd",{children:Ce})]},ne))})]}),T.jsxs("div",{className:"dock-g link",children:[T.jsxs("div",{className:"dock-h",title:"Hardware commands are not available in the virtual environment",children:[T.jsx("span",{className:"lbl-wide",children:"Vehicle "}),"link ",T.jsxs("span",{className:"dock-note lbl-long",children:[T.jsx(yl,{size:11}),"not available"]})]}),T.jsxs("div",{className:"dock-grid one",children:[T.jsxs(Kt,{variant:"locked",silent:!0,onPress:()=>Ge("HARDWARE UPLINK"),title:"Not available in the virtual environment",children:[T.jsx(yl,{size:13}),T.jsx("span",{className:"lbl-long",children:"HARDWARE "}),"UPLINK"]}),T.jsxs(Kt,{variant:"locked",silent:!0,onPress:()=>Ge("GEOFENCE OVERRIDE"),title:"Not available in the virtual environment",children:[T.jsx(yl,{size:13}),"GEOFENCE",T.jsx("span",{className:"lbl-long",children:" OVERRIDE"})]})]})]})]})]}),T.jsxs("aside",{className:"col right","aria-label":"Mission overview",children:[T.jsxs("section",{className:"panel map-panel",children:[T.jsxs("header",{className:"panel-h",children:[T.jsx("span",{className:"panel-ic",children:T.jsx(f1,{size:15})}),T.jsx("h3",{className:"panel-t",children:"Map"}),T.jsx("span",{className:"panel-aside mono muted",children:e.site?`P1 → P2 ${e.site.distanceM.toFixed(1)} m${e.site.estimated?" est.":""}`:"120 × 120 m"})]}),T.jsx("div",{className:"panel-b",children:T.jsx(WR,{engine:t})})]}),T.jsxs("section",{className:"panel",children:[T.jsxs("header",{className:"panel-h",children:[T.jsx("span",{className:"panel-ic",children:T.jsx(n1,{size:15})}),T.jsx("h3",{className:"panel-t",children:"Timeline"})]}),T.jsx("div",{className:"panel-b",children:T.jsx(tb,{snap:e})})]}),T.jsxs("section",{className:"panel log-panel",children:[T.jsxs("header",{className:"panel-h",children:[T.jsx("span",{className:"panel-ic",children:T.jsx(S1,{size:15})}),T.jsx("h3",{className:"panel-t",children:"Event log"})]}),T.jsx("div",{className:"panel-b",children:T.jsx(nb,{log:n})})]})]})]}),L&&T.jsx(ab,{cmd:L,onClose:()=>C(null)})]})}vx(document.getElementById("root")).render(T.jsx(hb,{}));
