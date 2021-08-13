function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,l;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function u(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(e,t,n,r){if(e){const i=d(e,t,n,r);return e[0](i)}}function d(e,n,r,i){return e[1]&&i?t(r.ctx.slice(),e[1](i(n))):r.ctx}function p(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function f(e,t,n,r,i,o){if(i){const s=d(t,n,r,o);e.p(s,i)}}function g(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function m(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function v(e){return null==e?"":e}function y(e,t){e.appendChild(t)}function w(e,t,n){const r=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t.host)return t;return document}(e);if(!r.getElementById(t)){const e=x("style");e.id=t,e.textContent=n,function(e,t){y(e.head||e,t)}(r,e)}}function _(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function k(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function C(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function T(){return I(" ")}function S(){return I("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}class P{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=x(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}function j(e){l=e}function q(e){(function(){if(!l)throw new Error("Function called outside component initialization");return l})().$$.on_mount.push(e)}const O=[],A=[],D=[],L=[],M=Promise.resolve();let z=!1;function F(e){D.push(e)}let U=!1;const W=new Set;function V(){if(!U){U=!0;do{for(let e=0;e<O.length;e+=1){const t=O[e];j(t),H(t.$$)}for(j(null),O.length=0;A.length;)A.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];W.has(t)||(W.add(t),t())}D.length=0}while(O.length);for(;L.length;)L.pop()();z=!1,U=!1,W.clear()}}function H(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const B=new Set;let G;function K(){G={r:0,c:[],p:G}}function Y(){G.r||i(G.c),G=G.p}function J(e,t){e&&e.i&&(B.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),G.c.push((()=>{B.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function X(e,t){e.d(1),t.delete(e.key)}function ee(e,t){Q(e,1,1,(()=>{t.delete(e.key)}))}function te(e,t,n,r,i,o,s,a,l,c,u,h){let d=e.length,p=o.length,f=d;const g={};for(;f--;)g[e[f].key]=f;const m=[],v=new Map,y=new Map;for(f=p;f--;){const e=h(i,o,f),a=n(e);let l=s.get(a);l?r&&l.p(e,t):(l=c(a,e),l.c()),v.set(a,m[f]=l),a in g&&y.set(a,Math.abs(f-g[a]))}const w=new Set,_=new Set;function b(e){J(e,1),e.m(a,u),s.set(e.key,e),u=e.first,p--}for(;d&&p;){const t=m[p-1],n=e[d-1],r=t.key,i=n.key;t===n?(u=t.first,d--,p--):v.has(i)?!s.has(r)||w.has(r)?b(t):_.has(i)?d--:y.get(r)>y.get(i)?(_.add(r),b(t)):(w.add(i),d--):(l(n,s),d--)}for(;d--;){const t=e[d];v.has(t.key)||l(t,s)}for(;p;)b(m[p-1]);return m}function ne(e,t){const n={},r={},i={$$scope:1};let o=e.length;for(;o--;){const s=e[o],a=t[o];if(a){for(const e in s)e in a||(r[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[o]=a}else for(const e in s)i[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function re(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function oe(e,t,r,s){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=e.$$;a&&a.m(t,r),s||F((()=>{const t=l.map(n).filter(o);c?c.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(F)}function se(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){-1===e.$$.dirty[0]&&(O.push(e),z||(z=!0,M.then(V)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(t,n,o,s,a,c,u,h=[-1]){const d=l;j(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};u&&u(p.root);let f=!1;if(p.ctx=o?o(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),f&&ae(t,e)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(b)}else p.fragment&&p.fragment.c();n.intro&&J(t.$$.fragment),oe(t,n.target,n.anchor,n.customElement),V()}j(d)}class ce{$destroy(){se(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ue=function(e,t){return(ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function he(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function de(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function pe(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function fe(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ge(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function me(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||t)}
/**
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
 */var ve=!1,ye="${JSCORE_VERSION}",we=function(e,t){if(!e)throw _e(t)},_e=function(e){return new Error("Firebase Database ("+ye+") INTERNAL ASSERT FAILED: "+e)},be=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ke={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=o>>2,h=(3&o)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,s||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(be(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var s=((7&i)<<18|(63&(o=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{o=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==s||null==a||null==l)throw Error();var c=o<<2|s>>4;if(r.push(c),64!==a){var u=s<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},xe=function(e){try{return ke.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function Ce(e){return Ie(void 0,e)}function Ie(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ie(e[n],t[n]));return e}
/**
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
 */
var Te=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
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
 */function Se(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ee(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function $e(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ne(){return!0===ve}
/**
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
 */var Re=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,Pe.prototype.create),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ue(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Pe=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?je(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",l=new Re(i,a,r);return l},e}();function je(e,t){return e.replace(qe,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var qe=/\{\$([^}]+)}/g;
/**
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
 */function Oe(e){return JSON.parse(e)}function Ae(e){return JSON.stringify(e)}
/**
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
 */var De=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=Oe(xe(o[0])||""),n=Oe(xe(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};
/**
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
 */
function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Me(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ze(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fe(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}
/**
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
 */function Ue(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r];n(o[0],o[1])}return t.length?"&"+t.join("&"):""}
/**
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
 */var We=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=u^l&(c^u),s=1518500249):(o=l^c^u,s=1859775393):r<60?(o=l&c|u&(l|c),s=2400959708):(o=l^c^u,s=3395469782);i=(a<<5|a>>>27)+o+h+s+n[r]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();var Ve=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=He),void 0===r.error&&(r.error=He),void 0===r.complete&&(r.complete=He);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function He(){}function Be(e,t){return e+" failed: "+t+" argument "}
/**
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
 */var Ge=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function Ke(e){return e&&e._delegate?e._delegate:e}var Ye=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Je=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Te;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}try{for(var r=fe(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=ge(i.value,2),s=o[0],a=o[1],l=this.normalizeInstanceIdentifier(s);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return de(this,void 0,void 0,(function(){var e;return pe(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(me(me([],ge(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),ge(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var a=fe(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=ge(l.value,2),u=c[0],h=c[1];o===this.normalizeInstanceIdentifier(u)&&h.resolve(s)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return s},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=fe(i),s=o.next();!s.done;s=o.next()){var a=s.value;try{a(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,o),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
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
 */var Qe,Ze,Xe=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Je(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function et(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
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
 */!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ze||(Ze={}));var tt={debug:Ze.DEBUG,verbose:Ze.VERBOSE,info:Ze.INFO,warn:Ze.WARN,error:Ze.ERROR,silent:Ze.SILENT},nt=Ze.INFO,rt=((Qe={})[Ze.DEBUG]="log",Qe[Ze.VERBOSE]="log",Qe[Ze.INFO]="info",Qe[Ze.WARN]="warn",Qe[Ze.ERROR]="error",Qe),it=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=rt[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,et(["["+i+"]  "+e.name+":"],n))}},ot=function(){function e(e){this.name=e,this._logLevel=nt,this._logHandler=it,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Ze))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?tt[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.DEBUG],e)),this._logHandler.apply(this,et([this,Ze.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.VERBOSE],e)),this._logHandler.apply(this,et([this,Ze.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.INFO],e)),this._logHandler.apply(this,et([this,Ze.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.WARN],e)),this._logHandler.apply(this,et([this,Ze.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.ERROR],e)),this._logHandler.apply(this,et([this,Ze.ERROR],e))},e}();
/**
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
 */
class st{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const at=new ot("@firebase/app"),lt={"@firebase/app-exp":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check-exp":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},ct=new Map,ut=new Map;function ht(e,t){try{e.container.addComponent(t)}catch(n){at.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dt(e){const t=e.name;if(ut.has(t))return at.debug(`There were multiple attempts to register component ${t}.`),!1;ut.set(t,e);for(const t of ct.values())ht(t,e);return!0}function pt(e,t){return e.container.getProvider(t)}
/**
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
 */const ft=new Pe("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
 */
class gt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ye("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
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
 */function mt(e="[DEFAULT]"){const t=ct.get(e);if(!t)throw ft.create("no-app",{appName:e});return t}function vt(e,t,n){var r;let i=null!==(r=lt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void at.warn(e.join(" "))}dt(new Ye(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */var yt;dt(new Ye("platform-logger",(e=>new st(e)),"PRIVATE")),vt("@firebase/app-exp","0.0.900-exp.6ef484a04",yt),vt("fire-js","");const wt=new Pe("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),_t=new ot("@firebase/auth-exp");
/**
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
 */function bt(e,...t){_t.logLevel<=Ze.ERROR&&_t.error(`Auth (9.0.0-beta.7): ${e}`,...t)}
/**
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
 */function kt(e,...t){throw Ct(e,...t)}function xt(e,...t){return Ct(e,...t)}function Ct(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return wt.create(e,...t)}function It(e,t,...n){if(!e)throw Ct(t,...n)}function Tt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bt(t),new Error(t)}function St(e,t){e||Tt(t)}
/**
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
 */const Et=new Map;function $t(e){St(e instanceof Function,"Expected a class definition");let t=Et.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Et.set(e,t),t)}
/**
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
 */
/**
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
 */
function Nt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Rt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function Pt(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Rt()&&"https:"!==Rt()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
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
 */
class jt{constructor(e,t){this.shortDelay=e,this.longDelay=t,St(t>e,"Short delay should be less than long delay!"),this.isMobile=Ee()||$e()}get(){return Pt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function qt(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class Ot{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const At={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Dt=new jt(3e4,6e4);
/**
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
 */async function Lt(e,t,n,r,i={}){return Mt(e,i,(()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=Ue(Object.assign({key:e.config.apiKey},o)).slice(1),a=new(Ot.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Ot.fetch()(zt(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Mt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},At),t);try{const t=new Ft(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ut(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=(i.ok?o.errorMessage:o.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Ut(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===t)throw Ut(e,"email-already-in-use",o);kt(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(t){if(t instanceof Re)throw t;kt(e,"network-request-failed")}}function zt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?qt(e.config,i):`${e.config.apiScheme}://${i}`}class Ft{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(xt(this.auth,"timeout"))),Dt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ut(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function Wt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Vt(e){return 1e3*Number(e)}function Ht(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return bt("JWT malformed, contained fewer than 3 sections"),null;try{const e=xe(n);return e?JSON.parse(e):(bt("Failed to decode base64 JWT payload"),null)}catch(e){return bt("Caught error parsing JWT payload as JSON",e),null}}
/**
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
 */
async function Bt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Re&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Gt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Kt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Yt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Bt(e,async function(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));It(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=he(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Kt(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
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
 */
class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){It(e.idToken,"internal-error"),It(void 0!==e.idToken,"internal-error"),It(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ht(e);return It(t,"internal-error"),It(void 0!==t.exp,"internal-error"),It(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return It(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
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
 */
async function(e,t){const n=await Mt(e,{},(()=>{const n=Ue({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=zt(e,r,"/v1/token",`key=${i}`);return Ot.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Jt;return n&&(It("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(It("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(It("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return Tt("not implemented")}}
/**
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
 */function Qt(e,t){It("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Zt{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=he(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Gt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Kt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Bt(this,this.stsTokenManager.getToken(this.auth,e));return It(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ke(e),r=await n.getIdToken(t),i=Ht(r);It(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Wt(Vt(i.auth_time)),issuedAtTime:Wt(Vt(i.iat)),expirationTime:Wt(Vt(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ke(e);await Yt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(It(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){It(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Yt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bt(this,async function(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:k}=t;It(y&&k,e,"internal-error");const x=Jt.fromJSON(this.name,k);It("string"==typeof y,e,"internal-error"),Qt(u,e.name),Qt(h,e.name),It("boolean"==typeof w,e,"internal-error"),It("boolean"==typeof _,e,"internal-error"),Qt(d,e.name),Qt(p,e.name),Qt(f,e.name),Qt(g,e.name),Qt(m,e.name),Qt(v,e.name);const C=new Zt({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:x,createdAt:m,lastLoginAt:v});return b&&Array.isArray(b)&&(C.providerData=b.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new Jt;r.updateFromServerResponse(t);const i=new Zt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Yt(i),i}}
/**
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
 */class Xt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xt.type="NONE";const en=Xt;
/**
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
 */function tn(e,t,n){return`firebase:${e}:${t}:${n}`}class nn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=tn(this.userKey,r.apiKey,i),this.fullPersistenceKey=tn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new nn($t(en),e,n);let r=$t(en);for(const e of t)if(await e._isAvailable()){r=e;break}let i=null;const o=tn(n,e.config.apiKey,e.name);for(const n of t)try{const t=await n._get(o);if(t){const o=Zt._fromJSON(e,t);n!==r&&(i=o);break}}catch(e){}return i&&await r._set(o,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new nn(r,e,n)}}
/**
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
 */function rn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ln(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(on(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(un(t))return"Blackberry";if(hn(t))return"Webos";if(sn(t))return"Safari";if((t.includes("chrome/")||an(t))&&!t.includes("edge/"))return"Chrome";if(cn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function on(e=Se()){return/firefox\//i.test(e)}function sn(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function an(e=Se()){return/crios\//i.test(e)}function ln(e=Se()){return/iemobile/i.test(e)}function cn(e=Se()){return/android/i.test(e)}function un(e=Se()){return/blackberry/i.test(e)}function hn(e=Se()){return/webos/i.test(e)}function dn(e=Se()){return/iphone|ipad|ipod/i.test(e)}function pn(){return((e=Se()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function fn(e=Se()){return dn(e)||cn(e)||hn(e)||un(e)||/windows phone/i.test(e)||ln(e)}
/**
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
 */
function gn(e,t=[]){let n;switch(e){case"Browser":n=rn(Se());break;case"Worker":n=`${rn(Se())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0-beta.7/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
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
 */class mn{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yn(this),this.idTokenSubscription=new yn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await nn.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null==o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(It(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){this.redirectInitializerError=e,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yt(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ke(e):null;return t&&It(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&It(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence($t(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pe("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;It(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return It(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return It(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function vn(e){return Ke(e)}class yn{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Ve((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return It(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */class wn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,t){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}
/**
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
 */async function _n(e,t){return async function(e,t,n,r,i={}){const o=await Lt(e,t,n,r,i);return"mfaPendingCredential"in o&&kt(e,"multi-factor-auth-required",{serverResponse:o}),o}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
/**
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
 */class bn extends wn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=he(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new bn(n,r);return Object.assign(o,i),o}_getIdTokenResponse(e){return _n(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_n(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_n(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ue(t)}return e}}
/**
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
 */class kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class xn extends kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class Cn extends xn{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch(e){return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Cn.PROVIDER_ID="facebook.com";
/**
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
 */
class In extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return In.credential(t,n)}catch(e){return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com",In.PROVIDER_ID="google.com";
/**
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
 */
class Tn extends xn{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch(e){return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com",Tn.PROVIDER_ID="github.com";
/**
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
 */
class Sn extends xn{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Sn.credential(t,n)}catch(e){return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com",Sn.PROVIDER_ID="twitter.com";
/**
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
 */
class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Zt._fromIdTokenResponse(e,n,r),o=$n(n);return new En({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=$n(n);return new En({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function $n(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class Nn extends Re{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Nn.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Nn(e,t,n,r)}}function Rn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Nn._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */
async function Pn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Ke(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Bt(r,
/**
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
 */
async function(e,t){return Lt(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const s=r.providerData.find((({providerId:e})=>"password"===e));s&&(s.displayName=r.displayName,s.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}
/**
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
 */
class jn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){It(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
class qn{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
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
 */class On extends qn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Se();return sn(e)||dn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=fn(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);pn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}On.type="LOCAL";const An=On;
/**
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
 */
/**
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
 */
class Dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Dn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Ln(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Dn.receivers=[];class Mn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=Ln("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
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
 */function zn(){return window}
/**
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
 */
function Fn(){return void 0!==zn().WorkerGlobalScope&&"function"==typeof zn().importScripts}
/**
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
 */
const Un="firebaseLocalStorageDb";class Wn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Vn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Hn(){const e=indexedDB.open(Un,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Un);return new Wn(e).toPromise()}(),t(await Hn()))}))}))}async function Bn(e,t,n){const r=Vn(e,!0).put({fbase_key:t,value:n});return new Wn(r).toPromise()}function Gn(e,t){const n=Vn(e,!0).delete(t);return new Wn(n).toPromise()}class Kn{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Hn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance(Fn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hn();return await Bn(e,"__sak","1"),await Gn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Bn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Vn(e,!1).get(t),r=await new Wn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Gn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Vn(e,!1).getAll();return new Wn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Kn.type="LOCAL";const Yn=Kn;
/**
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
 */class Jn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zn(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Zn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}saveEventToCache(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}function Qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Zn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,er=/^https?/;async function tr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Lt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(nr(e))return}catch(e){}kt(e,"unauthorized-domain")}function nr(e){const t=Nt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!er.test(n))return!1;if(Xn.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */function rr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=xt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}
/**
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
 */
const ir=new jt(3e4,6e4);function or(){const e=zn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function sr(e){return new Promise(((t,n)=>{var r,i,o;function s(){or(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{or(),n(xt(e,"network-request-failed"))},timeout:ir.get()})}if(null===(i=null===(r=zn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=zn().gapi)||void 0===o?void 0:o.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return zn()[t]=()=>{gapi.load?s():n(xt(e,"network-request-failed"))},rr(`https://apis.google.com/js/api.js?onload=${t}`)}s()}})).catch((e=>{throw ar=null,e}))}let ar=null;
/**
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
 */
const lr=new jt(5e3,15e3),cr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hr(e){const t=e.config;It(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0-beta.7"},i=ur.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ue(r).slice(1)}`}async function dr(e){const t=await function(e){return ar=ar||sr(e),ar}(e),n=zn().gapi;return It(n,e,"internal-error"),t.open({where:document.body,url:hr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=xt(e,"network-request-failed"),o=zn().setTimeout((()=>{r(i)}),lr.get());function s(){zn().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
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
 */class pr extends qn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pr.type="SESSION";const fr=pr,gr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
/**
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
 */class mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function vr(e,t,n,r=500,i=600){const o=Math.min((window.screen.availHeight-i)/2,0).toString(),s=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gr),{width:r.toString(),height:i.toString(),top:o,left:s}),c=Se().toLowerCase();n&&(a=an(c)?"_blank":n),on(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Se()){var t;return dn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new mr(null);const h=window.open(t||"",a,u);It(h,e,"popup-blocked");try{h.focus()}catch(e){}return new mr(h)}function yr(e,t){return t?$t(t):(It(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */class wr extends wn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _r(e){
/**
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
 */
return async function(e,t,n=!1){const r="signIn",i=await Rn(e,r,t),o=await En._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}(e.auth,new wr(e),e.bypassAuthState)}function br(e){const{auth:t,user:n}=e;return It(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Bt(e,Rn(r,i,t,e),n);It(o.idToken,r,"internal-error");const s=Ht(o.idToken);It(s,r,"internal-error");const{sub:a}=s;return It(e.uid===a,r,"user-mismatch"),En._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&kt(r,"user-mismatch"),e}}(n,new wr(e),e.bypassAuthState)}async function kr(e){const{auth:t,user:n}=e;return It(n,t,"internal-error"),async function(e,t,n=!1){const r=await Bt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return En._forOperation(e,"link",r)}(n,new wr(e),e.bypassAuthState)}
/**
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
 */class xr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _r;case"linkViaPopup":case"linkViaRedirect":return kr;case"reauthViaPopup":case"reauthViaRedirect":return br;default:kt(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Cr=new Map;class Ir extends xr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return tn("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await Tr(e)._get(n);return await Tr(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Cr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Tr(e){return $t(e._redirectPersistence)}async function Sr(e,t,n=!1){const r=vn(e),i=yr(r,t),o=new Ir(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
 */function Er(e,t,n,r,i,o){It(e.config.authDomain,e,"auth-domain-config-required"),It(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0-beta.7",eventId:i};if(t instanceof kn){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ze(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof xn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return qt(e,"emulator/auth/handler")}
/**
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
 */(e)}?${Ue(a).slice(1)}`}const $r=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fr,this._completeRedirectFn=Sr}async _openPopup(e,t,n,r){var i;St(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return vr(e,Er(e,t,n,Nt(),r),Ln())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Er(e,t,n,Nt(),r),zn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(St(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await dr(e),n=new Jn(e);return t.register("authEvent",(t=>{It(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),kt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fn()||sn()||dn()}};new jt(3e4,6e4);
/**
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
 */
const Nr=new jt(2e3,1e4);class Rr extends xr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return It(e,this.auth,"internal-error"),e}async onExecution(){St(1===this.filter.length,"Popup operations only handle one event");const e=Ln();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(xt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Nr.get())};e()}}function Pr(e=mt()){const t=pt(e,"auth-exp");return t.isInitialized()?t.getImmediate():function(e,t){const n=pt(e,"auth-exp");n.isInitialized()&&kt(n.getImmediate(),"already-initialized");return n.initialize({options:t})}(e,{popupRedirectResolver:$r,persistence:[Yn,An]})}var jr;Rr.currentPopupAction=null,jr="Browser",dt(new Ye("auth-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{It(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),It(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:jr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gn(jr)},o=new mn(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),dt(new Ye("auth-internal",(e=>(e=>new jn(e))(vn(e.getProvider("auth-exp").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),vt("@firebase/auth-exp","0.0.900-exp.6ef484a04",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(jr));
/**
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
 */
let qr="";
/**
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
 */
class Or{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Oe(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class Ar{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const Dr=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Or(t)}}catch(e){}return new Ar},Lr=Dr("localStorage"),Mr=Dr("sessionStorage"),zr=new ot("@firebase/database"),Fr=function(){let e=1;return function(){return e++}}(),Ur=function(e){const t=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,we(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new We;n.update(t);const r=n.digest();return ke.encodeByteArray(r)},Wr=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Wr.apply(null,r):t+="object"==typeof r?Ae(r):r,t+=" "}return t};let Vr=null,Hr=!0;const Br=function(...e){var t,n;if(!0===Hr&&(Hr=!1,null===Vr&&!0===Mr.get("logging_enabled")&&(t=!0,we(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(zr.logLevel=Ze.VERBOSE,Vr=zr.log.bind(zr),n&&Mr.set("logging_enabled",!0)):"function"==typeof t?Vr=t:(Vr=null,Mr.remove("logging_enabled")))),Vr){const t=Wr.apply(null,e);Vr(t)}},Gr=function(e){return function(...t){Br(e,...t)}},Kr=function(...e){const t="FIREBASE INTERNAL ERROR: "+Wr(...e);zr.error(t)},Yr=function(...e){const t=`FIREBASE FATAL ERROR: ${Wr(...e)}`;throw zr.error(t),new Error(t)},Jr=function(...e){const t="FIREBASE WARNING: "+Wr(...e);zr.warn(t)},Qr=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Zr="[MIN_NAME]",Xr="[MAX_NAME]",ei=function(e,t){if(e===t)return 0;if(e===Zr||t===Xr)return-1;if(t===Zr||e===Xr)return 1;{const n=li(e),r=li(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},ti=function(e,t){return e===t?0:e<t?-1:1},ni=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ae(t))},ri=function(e){if("object"!=typeof e||null===e)return Ae(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Ae(t[r]),n+=":",n+=ri(e[t[r]]);return n+="}",n},ii=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function oi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const si=function(e){we(!Qr(e),"Invalid JSON number");const t=1023;let n,r,i,o,s;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=o+t,i=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const ai=new RegExp("^-?(0*)\\d{1,10}$"),li=function(e){if(ai.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},ci=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Jr("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ui=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class hi{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Jr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class di{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Br("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jr(e)}}class pi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pi.OWNER="owner";
/**
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
 */
const fi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
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
 */
class gi{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lr.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function mi(e,t,n){let r;if(we("string"==typeof t,"typeof type must == string"),we("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return oi(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */class vi{constructor(){this.counters_={}}incrementCounter(e,t=1){Le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ce(this.counters_)}}
/**
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
 */const yi={},wi={};function _i(e){const t=e.toString();return yi[t]||(yi[t]=new vi),yi[t]}
/**
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
 */
class bi{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ci((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */class ki{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gr(e),this.stats_=_i(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),mi(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new bi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new xi(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&fi.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ki.forceAllow_=!0}static forceDisallow(){ki.forceDisallow_=!0}static isAvailable(){return!!ki.forceAllow_||!(ki.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(r=be(t),ke.encodeByteArray(r,!0));var r;const i=ii(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ae(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class xi{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fr(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=xi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){Br("frame writing exception"),e.stack&&Br(e.stack),Br(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Br("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Br("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
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
 */let Ci=null;"undefined"!=typeof MozWebSocket?Ci=MozWebSocket:"undefined"!=typeof WebSocket&&(Ci=WebSocket);class Ii{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gr(this.connId),this.stats_=_i(t),this.connURL=Ii.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&fi.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),mi(e,"websocket",i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lr.set("previous_websocket_failure",!0);try{if(Ne());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ci(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ii.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ci&&!Ii.forceDisallow_}static previouslyFailed(){return Lr.isInMemoryStorage||!0===Lr.get("previous_websocket_failure")}markConnectionHealthy(){Lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Oe(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(we(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ii(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ii.responsesRequiredToBeHealthy=2,Ii.healthyTimeout=3e4;
/**
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
 */
class Ti{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ki,Ii]}initTransports_(e){const t=Ii&&Ii.isAvailable();let n=t&&!Ii.previouslyFailed();if(e.webSocketOnly&&(t||Jr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ii];else{const e=this.transports_=[];for(const t of Ti.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
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
 */class Si{constructor(e,t,n,r,i,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gr("c:"+this.id+":"),this.transportManager_=new Ti(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ui((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ni("t",e),n=ni("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ni("t",e),n=ni("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ni("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Kr("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Jr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ui((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ui((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class Ei{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class $i{constructor(e){this.allowedEvents_=e,this.listeners_={},we(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){we(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class Ni extends $i{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ee()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Ni}getInitialEvent(e){return we("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */class Ri{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Pi(){return new Ri("")}function ji(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function qi(e){return e.pieces_.length-e.pieceNum_}function Oi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ri(e.pieces_,t)}function Ai(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Di(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Li(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ri(t,0)}function Mi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Ri)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ri(n,0)}function zi(e){return e.pieceNum_>=e.pieces_.length}function Fi(e,t){const n=ji(e),r=ji(t);if(null===n)return t;if(n===r)return Fi(Oi(e),Oi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ui(e,t){const n=Di(e,0),r=Di(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=ei(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function Wi(e,t){if(qi(e)!==qi(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Vi(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(qi(e)>qi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Hi{constructor(e,t){this.errorPrefix_=t,this.parts_=Di(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ge(this.parts_[e]);Bi(this)}}function Bi(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Gi(e))}function Gi(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class Ki extends $i{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ki}getInitialEvent(e){return we("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */class Yi extends Ei{constructor(e,t,n,r,i,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Yi.nextPersistentConnectionId_++,this.log_=Gr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ne())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ki.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Ni.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Ae(i)),we(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Te,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),we(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),we(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const o=i.d,s=i.s;Yi.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Le(e,"w")){const n=Me(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Jr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=De(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=De(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),we(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Kr("Unrecognized action received from server: "+Ae(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){we(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Yi.nextConnectionId_++,i=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},l=function(e){we(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Br("getToken() completed but was canceled"):(Br("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new Si(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Jr(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Jr(e),a())}}}interrupt(e){Br("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Br("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ze(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>ri(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Ri(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Br("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Br("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+qr.replace(/\./g,"-")]=1,Ee()?e["framework.cordova"]=1:$e()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ni.getInstance().currentlyOnline();return ze(this.interruptReasons_)&&e}}Yi.nextPersistentConnectionId_=0,Yi.nextConnectionId_=0;
/**
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
 */
class Ji{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ji(e,t)}}
/**
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
 */class Qi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ji(Zr,e),r=new Ji(Zr,t);return 0!==this.compare(n,r)}minPost(){return Ji.MIN}}
/**
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
 */let Zi;class Xi extends Qi{static get __EMPTY_NODE(){return Zi}static set __EMPTY_NODE(e){Zi=e}compare(e,t){return ei(e.name,t.name)}isDefinedOn(e){throw _e("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ji.MIN}maxPost(){return new Ji(Xr,Zi)}makePost(e,t){return we("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ji(e,Zi)}toString(){return".key"}}const eo=new Xi;
/**
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
 */class to{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class no{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:no.RED,this.left=null!=r?r:ro.EMPTY_NODE,this.right=null!=i?i:ro.EMPTY_NODE}copy(e,t,n,r,i){return new no(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ro.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ro.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,no.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,no.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}no.RED=!0,no.BLACK=!1;class ro{constructor(e,t=ro.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ro(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,no.BLACK,null,null))}remove(e){return new ro(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,no.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new to(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new to(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new to(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new to(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function io(e,t){return ei(e.name,t.name)}function oo(e,t){return ei(e,t)}
/**
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
 */let so;ro.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new no(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ao=function(e){return"number"==typeof e?"number:"+si(e):"string:"+e},lo=function(e){if(e.isLeafNode()){const t=e.val();we("string"==typeof t||"number"==typeof t||"object"==typeof t&&Le(t,".sv"),"Priority must be a string or number.")}else we(e===so||e.isEmpty(),"priority of unexpected type.");we(e===so||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let co,uo,ho;class po{constructor(e,t=po.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,we(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),lo(this.priorityNode_)}static set __childrenNodeConstructor(e){co=e}static get __childrenNodeConstructor(){return co}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new po(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:po.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return zi(e)?this:".priority"===ji(e)?this.priorityNode_:po.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:po.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ji(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(we(".priority"!==n||1===qi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,po.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ao(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?si(this.value_):this.value_,this.lazyHash_=Ur(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===po.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof po.__childrenNodeConstructor?-1:(we(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=po.VALUE_TYPE_ORDER.indexOf(t),i=po.VALUE_TYPE_ORDER.indexOf(n);return we(r>=0,"Unknown leaf type: "+t),we(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}po.VALUE_TYPE_ORDER=["object","boolean","number","string"];const fo=new class extends Qi{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?ei(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ji.MIN}maxPost(){return new Ji(Xr,new po("[PRIORITY-POST]",ho))}makePost(e,t){const n=uo(e);return new Ji(t,new po("[PRIORITY-POST]",n))}toString(){return".priority"}},go=Math.log(2);
/**
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
 */class mo{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/go,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vo=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new no(a,s.node,no.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=i(t,l),u=i(l+1,r);return s=e[l],a=n?n(s):s,new no(a,s.node,no.BLACK,c,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const c=i(o+1,a),u=e[o],h=n?n(u):u;l(new no(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,no.BLACK):(a(r,no.BLACK),a(r,no.RED))}return o}(new mo(e.length));return new ro(r||t,o)};
/**
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
 */let yo;const wo={};class _o{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return we(wo&&fo,"ChildrenNode.ts has not been loaded"),yo=yo||new _o({".priority":wo},{".priority":fo}),yo}get(e){const t=Me(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ro?t:null}hasIndex(e){return Le(this.indexSet_,e.toString())}addIndex(e,t){we(e!==eo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ji.Wrap);let o,s=i.getNext();for(;s;)r=r||e.isDefinedOn(s.node),n.push(s),s=i.getNext();o=r?vo(n,e.getCompare()):wo;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=o,new _o(c,l)}addToIndexes(e,t){const n=Fe(this.indexes_,((n,r)=>{const i=Me(this.indexSet_,r);if(we(i,"Missing index implementation for "+r),n===wo){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ji.Wrap);let o=r.getNext();for(;o;)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),vo(n,i.getCompare())}return wo}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ji(e.name,r))),i.insert(e,e.node)}}));return new _o(n,this.indexSet_)}removeFromIndexes(e,t){const n=Fe(this.indexes_,(n=>{if(n===wo)return n;{const r=t.get(e.name);return r?n.remove(new Ji(e.name,r)):n}}));return new _o(n,this.indexSet_)}}
/**
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
 */let bo;class ko{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&lo(this.priorityNode_),this.children_.isEmpty()&&we(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bo||(bo=new ko(new ro(oo),null,_o.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bo}updatePriority(e){return this.children_.isEmpty()?this:new ko(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?bo:t}}getChild(e){const t=ji(e);return null===t?this:this.getImmediateChild(t).getChild(Oi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(we(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ji(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?bo:this.priorityNode_;return new ko(r,o,i)}}updateChild(e,t){const n=ji(e);if(null===n)return t;{we(".priority"!==ji(e)||1===qi(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Oi(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(fo,((o,s)=>{t[o]=s.val(e),n++,i&&ko.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ao(this.getPriority().val())+":"),this.forEachChild(fo,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Ur(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ji(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ji(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ji(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Ji.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Ji.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xo?-1:0}withIndex(e){if(e===eo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ko(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===eo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(fo),n=t.getIterator(fo);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===eo?null:this.indexMap_.get(e.toString())}}ko.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const xo=new class extends ko{constructor(){super(new ro(oo),ko.EMPTY_NODE,_o.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ko.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Ji,{MIN:{value:new Ji(Zr,ko.EMPTY_NODE)},MAX:{value:new Ji(Xr,xo)}}),Xi.__EMPTY_NODE=ko.EMPTY_NODE,po.__childrenNodeConstructor=ko,so=xo,function(e){ho=e}(xo);function Co(e,t=null){if(null===e)return ko.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),we(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new po(e,Co(t))}if(e instanceof Array){let n=ko.EMPTY_NODE;return oi(e,((t,r)=>{if(Le(e,t)&&"."!==t.substring(0,1)){const e=Co(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Co(t))}{const n=[];let r=!1;if(oi(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Co(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ji(e,i)))}})),0===n.length)return ko.EMPTY_NODE;const i=vo(n,io,(e=>e.name),oo);if(r){const e=vo(n,fo.getCompare());return new ko(i,Co(t),new _o({".priority":e},{".priority":fo}))}return new ko(i,Co(t),_o.Default)}}!function(e){uo=e}(Co);
/**
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
 */
class Io extends Qi{constructor(e){super(),this.indexPath_=e,we(!zi(e)&&".priority"!==ji(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?ei(e.name,t.name):i}makePost(e,t){const n=Co(e),r=ko.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ji(t,r)}maxPost(){const e=ko.EMPTY_NODE.updateChild(this.indexPath_,xo);return new Ji(Xr,e)}toString(){return Di(this.indexPath_,0).join("/")}}
/**
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
 */const To=new class extends Qi{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?ei(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ji.MIN}maxPost(){return Ji.MAX}makePost(e,t){const n=Co(e);return new Ji(t,n)}toString(){return".value"}},So="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Eo=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=So.charAt(n%64),n=Math.floor(n/64);we(0===n,"Cannot push at time == 0");let s=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)s+=So.charAt(t[i]);return we(20===s.length,"nextPushId: Length should be 20."),s}}();
/**
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
 */
/**
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
 */
function $o(e){return{type:"value",snapshotNode:e}}function No(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ro(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Po(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
class jo{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){we(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(t);return s.getChild(r).equals(n.getChild(r))&&s.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Ro(t,s)):we(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(No(t,n)):o.trackChildChange(Po(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(fo,((e,r)=>{t.hasChild(e)||n.trackChildChange(Ro(e,r))})),t.isLeafNode()||t.forEachChild(fo,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Po(t,r,i))}else n.trackChildChange(No(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ko.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class qo{constructor(e){this.indexedFilter_=new jo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qo.getStartPost_(e),this.endPost_=qo.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Ji(t,n))||(n=ko.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ko.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(ko.EMPTY_NODE);const i=this;return t.forEachChild(fo,((e,t)=>{i.matches(new Ji(e,t))||(r=r.updateImmediateChild(e,ko.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Oo{constructor(e){this.rangedFilter_=new qo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ji(t,n))||(n=ko.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=ko.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=ko.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(ko.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;for(;o.hasNext();){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);a&&s<this.limit_&&i(t,n)<=0?s++:r=r.updateImmediateChild(t.name,ko.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const s=e;we(s.numChildren()===this.limit_,"");const a=new Ji(t,n),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(s.hasChild(t)){const e=s.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||s.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:o(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Po(t,n,e)),s.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Ro(t,e));const n=s.updateImmediateChild(t,ko.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(No(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&o(l,a)>=0?(null!=i&&(i.trackChildChange(Ro(l.name,l.node)),i.trackChildChange(No(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(l.name,ko.EMPTY_NODE)):e}}
/**
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
 */class Ao{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fo}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return we(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return we(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zr}hasEnd(){return this.endSet_}getIndexEndValue(){return we(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return we(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return we(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fo}copy(){const e=new Ao;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Do(e){const t={};if(e.isDefault())return t;let n;return e.index_===fo?n="$priority":e.index_===To?n="$value":e.index_===eo?n="$key":(we(e.index_ instanceof Io,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ae(n),e.startSet_&&(t.startAt=Ae(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Ae(e.indexStartName_))),e.endSet_&&(t.endAt=Ae(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Ae(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Lo(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==fo&&(t.i=e.index_.toString()),t}
/**
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
 */class Mo extends Ei{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Gr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(we(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Mo.getListenId_(e,n),s={};this.listens_[o]=s;const a=Do(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Me(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Mo.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Do(e._queryParams),n=e._path.toString(),r=new Te;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ue(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=Oe(s.responseText)}catch(e){Jr("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&Jr("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}}
/**
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
 */class zo{constructor(){this.rootNode_=ko.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Fo(){return{value:null,children:new Map}}function Uo(e,t,n){if(zi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ji(t);e.children.has(r)||e.children.set(r,Fo());Uo(e.children.get(r),t=Oi(t),n)}}function Wo(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */(e,((e,r)=>{Wo(r,new Ri(t.toString()+"/"+e),n)}))}class Vo{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&oi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */class Ho{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vo(e);const n=1e4+2e4*Math.random();ui(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;oi(e,((e,r)=>{r>0&&Le(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),ui(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
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
 */var Bo;function Go(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Bo||(Bo={}));class Ko{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Bo.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(zi(this.path)){if(null!=this.affectedTree.value)return we(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ri(e));return new Ko(Pi(),t,this.revert)}}return we(ji(this.path)===e,"operationForChild called for unrelated child."),new Ko(Oi(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Yo{constructor(e,t){this.source=e,this.path=t,this.type=Bo.LISTEN_COMPLETE}operationForChild(e){return zi(this.path)?new Yo(this.source,Pi()):new Yo(this.source,Oi(this.path))}}
/**
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
 */class Jo{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Bo.OVERWRITE}operationForChild(e){return zi(this.path)?new Jo(this.source,Pi(),this.snap.getImmediateChild(e)):new Jo(this.source,Oi(this.path),this.snap)}}
/**
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
 */class Qo{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Bo.MERGE}operationForChild(e){if(zi(this.path)){const t=this.children.subtree(new Ri(e));return t.isEmpty()?null:t.value?new Jo(this.source,Pi(),t.value):new Qo(this.source,Pi(),t)}return we(ji(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qo(this.source,Oi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Zo{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(zi(e))return this.isFullyInitialized()&&!this.filtered_;const t=ji(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class Xo{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function es(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw _e("Should only compare child_ events.");const r=new Ji(t.childName,t.snapshotNode),i=new Ji(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n))),s.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function ts(e,t){return{eventCache:e,serverCache:t}}function ns(e,t,n,r){return ts(new Zo(t,n,r),e.serverCache)}function rs(e,t,n,r){return ts(e.eventCache,new Zo(t,n,r))}function is(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function os(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let ss;class as{constructor(e,t=(()=>(ss||(ss=new ro(ti)),ss))()){this.value=e,this.children=t}static fromObject(e){let t=new as(null);return oi(e,((e,n)=>{t=t.set(new Ri(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Pi(),value:this.value};if(zi(e))return null;{const n=ji(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Oi(e),t);if(null!=i){return{path:Mi(new Ri(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(zi(e))return this;{const t=ji(e),n=this.children.get(t);return null!==n?n.subtree(Oi(e)):new as(null)}}set(e,t){if(zi(e))return new as(t,this.children);{const n=ji(e),r=(this.children.get(n)||new as(null)).set(Oi(e),t),i=this.children.insert(n,r);return new as(this.value,i)}}remove(e){if(zi(e))return this.children.isEmpty()?new as(null):new as(null,this.children);{const t=ji(e),n=this.children.get(t);if(n){const r=n.remove(Oi(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new as(null):new as(this.value,i)}return this}}get(e){if(zi(e))return this.value;{const t=ji(e),n=this.children.get(t);return n?n.get(Oi(e)):null}}setTree(e,t){if(zi(e))return t;{const n=ji(e),r=(this.children.get(n)||new as(null)).setTree(Oi(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new as(this.value,i)}}fold(e){return this.fold_(Pi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Mi(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Pi(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(zi(e))return null;{const r=ji(e),i=this.children.get(r);return i?i.findOnPath_(Oi(e),Mi(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Pi(),t)}foreachOnPath_(e,t,n){if(zi(e))return this;{this.value&&n(t,this.value);const r=ji(e),i=this.children.get(r);return i?i.foreachOnPath_(Oi(e),Mi(t,r),n):new as(null)}}foreach(e){this.foreach_(Pi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Mi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class ls{constructor(e){this.writeTree_=e}static empty(){return new ls(new as(null))}}function cs(e,t,n){if(zi(t))return new ls(new as(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=Fi(i,t);return o=o.updateChild(s,n),new ls(e.writeTree_.set(i,o))}{const r=new as(n),i=e.writeTree_.setTree(t,r);return new ls(i)}}}function us(e,t,n){let r=e;return oi(n,((e,n)=>{r=cs(r,Mi(t,e),n)})),r}function hs(e,t){if(zi(t))return ls.empty();{const n=e.writeTree_.setTree(t,new as(null));return new ls(n)}}function ds(e,t){return null!=ps(e,t)}function ps(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Fi(n.path,t)):null}function fs(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(fo,((e,n)=>{t.push(new Ji(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Ji(e,n.value))})),t}function gs(e,t){if(zi(t))return e;{const n=ps(e,t);return new ls(null!=n?new as(n):e.writeTree_.subtree(t))}}function ms(e){return e.writeTree_.isEmpty()}function vs(e,t){return ys(Pi(),e.writeTree_,t)}function ys(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(we(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=ys(Mi(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Mi(e,".priority"),r)),n}}
/**
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
 */function ws(e,t){return Ps(t,e)}function _s(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));we(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&bs(t,r.path)?i=!1:Vi(r.path,t.path)&&(o=!0)),s--}if(i){if(o)return function(e){e.visibleWrites=xs(e.allWrites,ks,Pi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=hs(e.visibleWrites,r.path);else{oi(r.children,(t=>{e.visibleWrites=hs(e.visibleWrites,Mi(r.path,t))}))}return!0}return!1}function bs(e,t){if(e.snap)return Vi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Vi(Mi(e.path,n),t))return!0;return!1}function ks(e){return e.visible}function xs(e,t,n){let r=ls.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)Vi(n,e)?(t=Fi(n,e),r=cs(r,t,o.snap)):Vi(e,n)&&(t=Fi(e,n),r=cs(r,Pi(),o.snap.getChild(t)));else{if(!o.children)throw _e("WriteRecord should have .snap or .children");if(Vi(n,e))t=Fi(n,e),r=us(r,t,o.children);else if(Vi(e,n))if(t=Fi(e,n),zi(t))r=us(r,Pi(),o.children);else{const e=Me(o.children,ji(t));if(e){const n=e.getChild(Oi(t));r=cs(r,Pi(),n)}}}}}return r}function Cs(e,t,n,r,i){if(r||i){const o=gs(e.visibleWrites,t);if(!i&&ms(o))return n;if(i||null!=n||ds(o,Pi())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Vi(e.path,t)||Vi(t,e.path))};return vs(xs(e.allWrites,o,t),n||ko.EMPTY_NODE)}return null}{const r=ps(e.visibleWrites,t);if(null!=r)return r;{const r=gs(e.visibleWrites,t);if(ms(r))return n;if(null!=n||ds(r,Pi())){return vs(r,n||ko.EMPTY_NODE)}return null}}}function Is(e,t,n,r){return Cs(e.writeTree,e.treePath,t,n,r)}function Ts(e,t){return function(e,t,n){let r=ko.EMPTY_NODE;const i=ps(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(fo,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=gs(e.visibleWrites,t);return n.forEachChild(fo,((e,t)=>{const n=vs(gs(i,new Ri(e)),t);r=r.updateImmediateChild(e,n)})),fs(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return fs(gs(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Ss(e,t,n,r){return function(e,t,n,r,i){we(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=Mi(t,n);if(ds(e.visibleWrites,o))return null;{const t=gs(e.visibleWrites,o);return ms(t)?i.getChild(n):vs(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Es(e,t){return function(e,t){return ps(e.visibleWrites,t)}(e.writeTree,Mi(e.treePath,t))}function $s(e,t,n,r,i,o){return function(e,t,n,r,i,o,s){let a;const l=gs(e.visibleWrites,t),c=ps(l,Pi());if(null!=c)a=c;else{if(null==n)return[];a=vs(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,o)}function Ns(e,t,n){return function(e,t,n,r){const i=Mi(t,n),o=ps(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n))return vs(gs(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Rs(e,t){return Ps(Mi(e.treePath,t),e.writeTree)}function Ps(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class js{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;we("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),we(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Po(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ro(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,No(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw _e("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Po(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */const qs=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Os{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Zo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ns(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:os(this.viewCache_),i=$s(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function As(e,t,n,r,i){const o=new js;let s,a;if(n.type===Bo.OVERWRITE){const l=n;l.source.fromUser?s=Ms(e,t,l.path,l.snap,r,i,o):(we(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!zi(l.path),s=Ls(e,t,l.path,l.snap,r,i,a,o))}else if(n.type===Bo.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,l)=>{const c=Mi(n,r);zs(t,ji(c))&&(a=Ms(e,a,c,l,i,o,s))})),r.foreach(((r,l)=>{const c=Mi(n,r);zs(t,ji(c))||(a=Ms(e,a,c,l,i,o,s))})),a}(e,t,l.path,l.children,r,i,o):(we(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=Us(e,t,l.path,l.children,r,i,a,o))}else if(n.type===Bo.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,r,i,o){let s;if(null!=Es(r,n))return t;{const a=new Os(r,t,i),l=t.eventCache.getNode();let c;if(zi(n)||".priority"===ji(n)){let n;if(t.serverCache.isFullyInitialized())n=Is(r,os(t));else{const e=t.serverCache.getNode();we(e instanceof ko,"serverChildren would be complete if leaf node"),n=Ts(r,e)}n=n,c=e.filter.updateFullNode(l,n,o)}else{const i=ji(n);let u=Ns(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Oi(n),a,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,ko.EMPTY_NODE,Oi(n),a,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Is(r,os(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=Es(r,Pi()),ns(t,c,s,e.filter.filtersNodes())}}
/**
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
 */(e,t,a.path,r,i,o):function(e,t,n,r,i,o,s){if(null!=Es(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(zi(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ls(e,t,n,l.getNode().getChild(n),i,o,a,s);if(zi(n)){let r=new as(null);return l.getNode().forEachChild(eo,((e,t)=>{r=r.set(new Ri(e),t)})),Us(e,t,n,r,i,o,a,s)}return t}{let c=new as(null);return r.foreach(((e,t)=>{const r=Mi(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Us(e,t,n,c,i,o,a,s)}}(e,t,a.path,a.affectedTree,r,i,o)}else{if(n.type!==Bo.LISTEN_COMPLETE)throw _e("Unknown operation type: "+n.type);s=function(e,t,n,r,i){const o=t.serverCache,s=rs(t,o.getNode(),o.isFullyInitialized()||zi(n),o.isFiltered());return Ds(e,s,n,r,qs,i)}(e,t,n.path,r,o)}const l=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=is(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push($o(is(t)))}}(t,s,l),{viewCache:s,changes:l}}function Ds(e,t,n,r,i,o){const s=t.eventCache;if(null!=Es(r,n))return t;{let a,l;if(zi(n))if(we(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=os(t),i=Ts(r,n instanceof ko?n:ko.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=Is(r,os(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=ji(n);if(".priority"===c){we(1===qi(n),"Can't have a priority with additional path components");const i=s.getNode();l=t.serverCache.getNode();const o=Ss(r,n,i,l);a=null!=o?e.filter.updatePriority(i,o):s.getNode()}else{const u=Oi(n);let h;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Ss(r,n,s.getNode(),l);h=null!=e?s.getNode().getImmediateChild(c).updateChild(u,e):s.getNode().getImmediateChild(c)}else h=Ns(r,c,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),c,h,u,i,o):s.getNode()}}return ns(t,a,s.isFullyInitialized()||zi(n),e.filter.filtersNodes())}}function Ls(e,t,n,r,i,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(zi(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ji(n);if(!l.isCompleteForPath(n)&&qi(n)>1)return t;const i=Oi(n),o=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,i,qs,null)}const h=rs(t,c,l.isFullyInitialized()||zi(n),u.filtersNodes());return Ds(e,h,n,i,new Os(i,h,o),a)}function Ms(e,t,n,r,i,o,s){const a=t.eventCache;let l,c;const u=new Os(i,t,o);if(zi(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=ns(t,c,!0,e.filter.filtersNodes());else{const i=ji(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=ns(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=Oi(n),c=a.getNode().getImmediateChild(i);let h;if(zi(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Ai(o)&&e.getChild(Li(o)).isEmpty()?e:e.updateChild(o,r):ko.EMPTY_NODE}if(c.equals(h))l=t;else{l=ns(t,e.filter.updateChild(a.getNode(),i,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function zs(e,t){return e.eventCache.isCompleteForChild(t)}function Fs(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Us(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=zi(n)?r:new as(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Fs(0,t.serverCache.getNode().getImmediateChild(n),r);c=Ls(e,c,new Ri(n),l,i,o,s,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=Fs(0,t.serverCache.getNode().getImmediateChild(n),r);c=Ls(e,c,new Ri(n),l,i,o,s,a)}})),c}class Ws{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new jo(n.getIndex()),i=(o=n).loadsAllData()?new jo(o.getIndex()):o.hasLimit()?new Oo(o):new qo(o);var o;this.processor_=function(e){return{filter:e}}(i);const s=t.serverCache,a=t.eventCache,l=r.updateFullNode(ko.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(ko.EMPTY_NODE,a.getNode(),null),u=new Zo(l,s.isFullyInitialized(),r.filtersNodes()),h=new Zo(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ts(h,u),this.eventGenerator_=new Xo(this.query_)}get query(){return this.query_}}function Vs(e,t){const n=os(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!zi(t)&&!n.getImmediateChild(ji(t)).isEmpty())?n.getChild(t):null}function Hs(e){return 0===e.eventRegistrations_.length}function Bs(e,t,n){const r=[];if(n){we(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Gs(e,t,n,r){t.type===Bo.MERGE&&null!==t.source.queryId&&(we(os(e.viewCache_),"We should always have a full cache before handling merges"),we(is(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=As(e.processor_,i,t,n,r);var s,a;return s=e.processor_,a=o.viewCache,we(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),we(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),we(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Ks(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Ks(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],o=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),es(e,i,"child_removed",t,r,n),es(e,i,"child_added",t,r,n),es(e,i,"child_moved",o,r,n),es(e,i,"child_changed",t,r,n),es(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */let Ys,Js;class Qs{constructor(){this.views=new Map}}function Zs(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return we(null!=o,"SyncTree gave us an op for an invalid query."),Gs(o,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Gs(o,t,n,r));return i}}function Xs(e,t,n,r,i,o){const s=function(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=Is(n,i?r:null),o=!1;e?o=!0:r instanceof ko?(e=Ts(n,r),o=!1):(e=ko.EMPTY_NODE,o=!1);const s=ts(new Zo(e,o,!1),new Zo(r,i,!1));return new Ws(t,s)}return s}(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(fo,((e,t)=>{r.push(No(e,t))}));return n.isFullyInitialized()&&r.push($o(n.getNode())),Ks(e,r,n.getNode(),t)}(s,n)}function ea(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=oa(e);if("default"===i)for(const[t,i]of e.views.entries())s=s.concat(Bs(i,n,r)),Hs(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||o.push(i.query));else{const t=e.views.get(i);t&&(s=s.concat(Bs(t,n,r)),Hs(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!oa(e)&&o.push(new(we(Ys,"Reference.ts has not been loaded"),Ys)(t._repo,t._path)),{removed:o,events:s}}function ta(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function na(e,t){let n=null;for(const r of e.views.values())n=n||Vs(r,t);return n}function ra(e,t){if(t._queryParams.loadsAllData())return sa(e);{const n=t._queryIdentifier;return e.views.get(n)}}function ia(e,t){return null!=ra(e,t)}function oa(e){return null!=sa(e)}function sa(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */let aa=1;class la{constructor(e){this.listenProvider_=e,this.syncPointTree_=new as(null),this.pendingWriteTree_={visibleWrites:ls.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ca(e,t,n,r,i){return function(e,t,n,r,i){we(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=cs(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?ma(e,new Jo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ua(e,t,n,r){!function(e,t,n,r){we(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=us(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=as.fromObject(n);return ma(e,new Qo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function ha(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(_s(e.pendingWriteTree_,t)){let t=new as(null);return null!=r.snap?t=t.set(Pi(),!0):oi(r.children,(e=>{t=t.set(new Ri(e),!0)})),ma(e,new Ko(r.path,t,n))}return[]}function da(e,t,n){return ma(e,new Jo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function pa(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let s=[];if(o&&("default"===t._queryIdentifier||ia(o,t))){const a=ea(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;s=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>oa(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&oa(t)){return[sa(t)]}{let e=[];return t&&(e=ta(t)),oi(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=wa(e,r);e.listenProvider_.startListening(Ia(i),_a(e,i),o.hashFn,o.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(Ia(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(ba(t));e.listenProvider_.stopListening(Ia(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=ba(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return s}function fa(e,t,n){const r=t._path;let i=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Fi(e,r);i=i||na(t,n),o=o||oa(t)}));let s,a=e.syncPointTree_.get(r);if(a?(o=o||oa(a),i=i||na(a,Pi())):(a=new Qs,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)s=!0;else{s=!1,i=ko.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=na(t,Pi());n&&(i=i.updateImmediateChild(e,n))}))}const l=ia(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=ba(t);we(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=aa++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let c=Xs(a,t,n,ws(e.pendingWriteTree_,r),i,s);if(!l&&!o){const n=ra(a,t);c=c.concat(function(e,t,n){const r=t._path,i=_a(e,t),o=wa(e,n),s=e.listenProvider_.startListening(Ia(t),i,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(r);if(i)we(!oa(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!zi(e)&&t&&oa(t))return[sa(t).query];{let e=[];return t&&(e=e.concat(ta(t).map((e=>e.query)))),oi(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Ia(r),_a(e,r))}}return s}
/**
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
 */(e,t,n))}return c}function ga(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=na(n,Fi(e,t));if(r)return r}));return Cs(r,t,i,n,!0)}function ma(e,t){return va(t,e.syncPointTree_,null,ws(e.pendingWriteTree_,Pi()))}function va(e,t,n,r){if(zi(e.path))return ya(e,t,n,r);{const i=t.get(Pi());null==n&&null!=i&&(n=na(i,Pi()));let o=[];const s=ji(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=Rs(r,s);o=o.concat(va(a,l,e,t))}return i&&(o=o.concat(Zs(i,e,r,n))),o}}function ya(e,t,n,r){const i=t.get(Pi());null==n&&null!=i&&(n=na(i,Pi()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Rs(r,t),l=e.operationForChild(t);l&&(o=o.concat(ya(l,i,s,a)))})),i&&(o=o.concat(Zs(i,e,r,n))),o}function wa(e,t){const n=t.query,r=_a(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||ko.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=ka(e,n);if(r){const n=xa(r),i=n.path,o=n.queryId,s=Fi(i,t);return Ca(e,i,new Yo(Go(o),s))}return[]}(e,n._path,r):function(e,t){return ma(e,new Yo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return pa(e,n,null,r)}}}}function _a(e,t){const n=ba(t);return e.queryToTagMap.get(n)}function ba(e){return e._path.toString()+"$"+e._queryIdentifier}function ka(e,t){return e.tagToQueryMap.get(t)}function xa(e){const t=e.indexOf("$");return we(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ri(e.substr(0,t))}}function Ca(e,t,n){const r=e.syncPointTree_.get(t);we(r,"Missing sync point for query tag that we're tracking");return Zs(r,n,ws(e.pendingWriteTree_,t),null)}function Ia(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(we(Js,"Reference.ts has not been loaded"),Js)(e._repo,e._path):e}class Ta{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ta(t)}node(){return this.node_}}class Sa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Mi(this.path_,e);return new Sa(this.syncTree_,t)}node(){return ga(this.syncTree_,this.path_)}}const Ea=function(e,t,n){return e&&"object"==typeof e?(we(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?$a(e[".sv"],t,n):"object"==typeof e[".sv"]?Na(e[".sv"],t):void we(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},$a=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:we(!1,"Unexpected server value: "+e)}},Na=function(e,t,n){e.hasOwnProperty("increment")||we(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&we(!1,"Unexpected increment value: "+r);const i=t.node();if(we(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return"number"!=typeof o?r:o+r},Ra=function(e,t,n,r){return ja(t,new Sa(n,e),r)},Pa=function(e,t,n){return ja(e,new Ta(t),n)};function ja(e,t,n){const r=e.getPriority().val(),i=Ea(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Ea(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new po(o,Co(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new po(i))),r.forEachChild(fo,((e,r)=>{const i=ja(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
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
 */class qa{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Oa(e,t){let n=t instanceof Ri?t:new Ri(t),r=e,i=ji(n);for(;null!==i;){const e=Me(r.node.children,i)||{children:{},childCount:0};r=new qa(i,r,e),n=Oi(n),i=ji(n)}return r}function Aa(e){return e.node.value}function Da(e,t){e.node.value=t,Ua(e)}function La(e){return e.node.childCount>0}function Ma(e,t){oi(e.node.children,((n,r)=>{t(new qa(n,e,r))}))}function za(e,t,n,r){n&&!r&&t(e),Ma(e,(e=>{za(e,t,!0,r)})),n&&r&&t(e)}function Fa(e){return new Ri(null===e.parent?e.name:Fa(e.parent)+"/"+e.name)}function Ua(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Aa(e)&&!La(e)}(n),i=Le(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ua(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ua(e))}
/**
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
 */(e.parent,e.name,e)}const Wa=/[\[\].#$\/\u0000-\u001F\u007F]/,Va=/[\[\].#$\u0000-\u001F\u007F]/,Ha=function(e){return"string"==typeof e&&0!==e.length&&!Wa.test(e)},Ba=function(e){return"string"==typeof e&&0!==e.length&&!Va.test(e)},Ga=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Qr(e)||e&&"object"==typeof e&&Le(e,".sv")},Ka=function(e,t,n,r){r&&void 0===t||Ya(Be(e,"value"),t,n)},Ya=function(e,t,n){const r=n instanceof Ri?new Hi(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Gi(r));if("function"==typeof t)throw new Error(e+"contains a function "+Gi(r)+" with contents = "+t.toString());if(Qr(t))throw new Error(e+"contains "+t.toString()+" "+Gi(r));if("string"==typeof t&&t.length>10485760/3&&Ge(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Gi(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(oi(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Ha(t)))throw new Error(e+" contains an invalid key ("+t+") "+Gi(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ge(t),Bi(e)}(r,t),Ya(e,o,r),function(e){const t=e.parts_.pop();e.byteLength_-=Ge(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Gi(r)+" in addition to actual children.")}},Ja=function(e,t,n,r){if(r&&void 0===t)return;const i=Be(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];oi(t,((e,t)=>{const r=new Ri(e);if(Ya(i,t,Mi(n,r)),".priority"===Ai(r)&&!Ga(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=Di(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Ha(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ui);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&Vi(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,o)},Qa=function(e,t,n,r){if(!(r&&void 0===n||Ba(n)))throw new Error(Be(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Za=function(e,t){if(".info"===ji(t))throw new Error(e+" failed = Can't modify data under /.info/")},Xa=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ha(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ba(e)}(n))throw new Error(Be(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class el{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tl(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Wi(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function nl(e,t,n){tl(e,n),il(e,(e=>Wi(e,t)))}function rl(e,t,n){tl(e,n),il(e,(e=>Vi(e,t)||Vi(t,e)))}function il(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(ol(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ol(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Vr&&Br("event: "+n.toString()),ci(r)}}}
/**
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
 */class sl{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new el,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fo(),this.transactionQueueTree_=new qa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function al(e,t,n){if(e.stats_=_i(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Mo(e.repoInfo_,((t,n,r,i)=>{ul(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>hl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Yi(e.repoInfo_,t,((t,n,r,i)=>{ul(e,t,n,r,i)}),(t=>{hl(e,t)}),(t=>{!function(e,t){oi(t,((t,n)=>{dl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return wi[n]||(wi[n]=t()),wi[n]}(e.repoInfo_,(()=>new Ho(e.stats_,e.server_))),e.infoData_=new zo,e.infoSyncTree_=new la({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=da(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),dl(e,"connected",!1),e.serverSyncTree_=new la({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);rl(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ll(e){const t=e.infoData_.getNode(new Ri(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function cl(e){return(t=(t={timestamp:ll(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function ul(e,t,n,r,i){e.dataUpdateCount++;const o=new Ri(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const t=Fe(n,(e=>Co(e)));s=function(e,t,n,r){const i=ka(e,r);if(i){const r=xa(i),o=r.path,s=r.queryId,a=Fi(o,t),l=as.fromObject(n);return Ca(e,o,new Qo(Go(s),a,l))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=Co(n);s=function(e,t,n,r){const i=ka(e,r);if(null!=i){const r=xa(i),o=r.path,s=r.queryId,a=Fi(o,t);return Ca(e,o,new Jo(Go(s),a,n))}return[]}(e.serverSyncTree_,o,t,i)}else if(r){const t=Fe(n,(e=>Co(e)));s=function(e,t,n){const r=as.fromObject(n);return ma(e,new Qo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=Co(n);s=da(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=wl(e,o)),rl(e.eventQueue_,a,s)}function hl(e,t){dl(e,"connected",t),!1===t&&function(e){gl(e,"onDisconnectEvents");const t=cl(e),n=Fo();Wo(e.onDisconnect_,Pi(),((r,i)=>{const o=Ra(r,i,e.serverSyncTree_,t);Uo(n,r,o)}));let r=[];Wo(n,Pi(),((t,n)=>{r=r.concat(da(e.serverSyncTree_,t,n));const i=Cl(e,t);wl(e,i)})),e.onDisconnect_=Fo(),rl(e.eventQueue_,Pi(),r)}(e)}function dl(e,t,n){const r=new Ri("/.info/"+t),i=Co(n);e.infoData_.updateSnapshot(r,i);const o=da(e.infoSyncTree_,r,i);rl(e.eventQueue_,r,o)}function pl(e){return e.nextWriteId_++}function fl(e,t,n){let r;r=".info"===ji(t._path)?pa(e.infoSyncTree_,t,n):pa(e.serverSyncTree_,t,n),nl(e.eventQueue_,t._path,r)}function gl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Br(n,...t)}function ml(e,t,n,r){t&&ci((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function vl(e,t,n){return ga(e.serverSyncTree_,t,n)||ko.EMPTY_NODE}function yl(e,t=e.transactionQueueTree_){if(t||xl(e,t),Aa(t)){const n=bl(e,t);we(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=vl(e,t,r);let o=i;const s=i.hash();for(let e=0;e<n.length;e++){const r=n[e];we(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Fi(t,r.path);o=o.updateChild(i,r.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{gl(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(ha(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();xl(e,Oa(e.transactionQueueTree_,t)),yl(e,e.transactionQueueTree_),rl(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)ci(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Jr("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}wl(e,t)}}),s)}(e,Fa(t),n)}else La(t)&&Ma(t,(t=>{yl(e,t)}))}function wl(e,t){const n=_l(e,t),r=Fa(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Fi(n,l.path);let u,h=!1;if(we(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(ha(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat(ha(e.serverSyncTree_,l.currentWriteId,!0));else{const n=vl(e,l.path,o);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Ya("transaction failed: Data returned ",r,l.path);let t=Co(r);"object"==typeof r&&null!=r&&Le(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=cl(e),c=Pa(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=pl(e),o.splice(o.indexOf(s),1),i=i.concat(ca(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(ha(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",i=i.concat(ha(e.serverSyncTree_,l.currentWriteId,!0))}rl(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var s;xl(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)ci(r[e]);yl(e,e.transactionQueueTree_)}(e,bl(e,n),r),r}function _l(e,t){let n,r=e.transactionQueueTree_;for(n=ji(t);null!==n&&void 0===Aa(r);)r=Oa(r,n),n=ji(t=Oi(t));return r}function bl(e,t){const n=[];return kl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function kl(e,t,n){const r=Aa(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Ma(t,(t=>{kl(e,t,n)}))}function xl(e,t){const n=Aa(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Da(t,n.length>0?n:void 0)}Ma(t,(t=>{xl(e,t)}))}function Cl(e,t){const n=Fa(_l(e,t)),r=Oa(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Il(e,t)})),Il(e,r),za(r,(t=>{Il(e,t)})),n}function Il(e,t){const n=Aa(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(we(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(we(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(ha(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Da(t,void 0):n.length=o+1,rl(e.eventQueue_,Fa(t),i);for(let e=0;e<r.length;e++)ci(r[e])}}
/**
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
 */const Tl=function(e,t){const n=Sl(e),r=n.namespace;"firebase.com"===n.domain&&Yr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Jr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new gi(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new Ri(n.pathString)}},Sl=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Jr(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
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
 */
class El{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class $l{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Nl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return we(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */class Rl{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return zi(this._path)?null:Ai(this._path)}get ref(){return new Pl(this._repo,this._path)}get _queryIdentifier(){const e=Lo(this._queryParams),t=ri(e);return"{}"===t?"default":t}get _queryObject(){return Lo(this._queryParams)}isEqual(e){if(!((e=Ke(e))instanceof Rl))return!1;const t=this._repo===e._repo,n=Wi(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Pl extends Rl{constructor(e,t){super(e,t,new Ao,!1)}get parent(){const e=Li(this._path);return null===e?null:new Pl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class jl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ri(e),n=Ol(this.ref,e);return new jl(this._node.getChild(t),n,fo)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new jl(n,Ol(this.ref,t),fo))))}hasChild(e){const t=new Ri(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ql(e,t){return(e=Ke(e))._checkNotDeleted("ref"),void 0!==t?Ol(e._root,t):e._root}function Ol(e,t){var n,r,i,o;return null===ji((e=Ke(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Qa(n,r,i,o)):Qa("child","path",t,!1),new Pl(e._repo,Mi(e._path,t))}function Al(e,t){e=Ke(e),Za("set",e._path),Ka("set",t,e._path,!1);const n=new Te;return function(e,t,n,r,i){gl(e,"set",{path:t.toString(),value:n,priority:r});const o=cl(e),s=Co(n,r),a=ga(e.serverSyncTree_,t),l=Pa(s,a,o),c=pl(e),u=ca(e.serverSyncTree_,t,l,c,!0);tl(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||Jr("set at "+t+" failed: "+n);const s=ha(e.serverSyncTree_,c,!o);rl(e.eventQueue_,t,s),ml(0,i,n,r)}));const h=Cl(e,t);wl(e,h),rl(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Dl(e,t){Ja("update",t,e._path,!1);const n=new Te;return function(e,t,n,r){gl(e,"update",{path:t.toString(),value:n});let i=!0;const o=cl(e),s={};if(oi(n,((n,r)=>{i=!1,s[n]=Ra(Mi(t,n),Co(r),e.serverSyncTree_,o)})),i)Br("update() called with empty data.  Don't do anything."),ml(0,r,"ok",void 0);else{const i=pl(e),o=ua(e.serverSyncTree_,t,s,i);tl(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||Jr("update at "+t+" failed: "+n);const a=ha(e.serverSyncTree_,i,!s),l=a.length>0?wl(e,t):t;rl(e.eventQueue_,l,a),ml(0,r,n,o)})),oi(n,(n=>{const r=Cl(e,Mi(t,n));wl(e,r)})),rl(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Ll{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new El("value",this,new jl(e.snapshotNode,new Pl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $l(this,e,t):null}matches(e){return e instanceof Ll&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ml{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $l(this,e,t):null}createEvent(e,t){we(null!=e.childName,"Child events should have a childName.");const n=Ol(new Pl(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new El(e.type,this,new jl(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ml&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function zl(e,t,n,r,i){let o;if("object"==typeof r&&(o=void 0,i=r),"function"==typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{fl(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Nl(n,o||void 0),a="value"===t?new Ll(s):new Ml(t,s);return function(e,t,n){let r;r=".info"===ji(t._path)?fa(e.infoSyncTree_,t,n):fa(e.serverSyncTree_,t,n),nl(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>fl(e._repo,e,a)}function Fl(e,t,n,r){return zl(e,"value",t,n,r)}class Ul extends class{}{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new Ri(this._path);if(zi(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Io(t),r=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return function(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===eo){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==Zr)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==Xr)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===fo){if(null!=t&&!Ga(t)||null!=n&&!Ga(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(we(e.getIndex()instanceof Io||e.getIndex()===To,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}(r),new Rl(e._repo,e._path,r,!0)}}!function(e){we(!Ys,"__referenceConstructor has already been defined"),Ys=e}(Pl),function(e){we(!Js,"__referenceConstructor has already been defined"),Js=e}(Pl);
/**
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
 */
const Wl={};function Vl(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||Yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Br("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=Tl(o,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${c.namespace}`,l=Tl(o,i),c=l.repoInfo):s=!l.repoInfo.secure;const u=i&&s?new pi(pi.OWNER):new di(e.name,e.options,t);Xa("Invalid Firebase Database URL",l),zi(l.path)||Yr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=Wl[t.name];i||(i={},Wl[t.name]=i);let o=i[e.toURLString()];o&&Yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new sl(e,false,n,r),i[e.toURLString()]=o,o}(c,e,u,new hi(e.name,n));return new Hl(h,e)}class Hl{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(al(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pl(this._repo,Pi())),this._rootInternal}_delete(){return this._checkNotDeleted("delete"),function(e,t){const n=Wl[t];n&&n[e.key]===e||Yr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null,Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Yr("Cannot call "+e+" on a deleted database.")}}function Bl(e=mt(),t){return pt(e,"database-exp").getImmediate({identifier:t})}
/**
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
 */
/**
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
 */
const Gl={".sv":"timestamp"};function Kl(e){return{".sv":{increment:e}}}!function(e){!function(e){qr=e}("9.0.0-beta.7"),dt(new Ye("database-exp",((e,{instanceIdentifier:t})=>Vl(e.getProvider("app-exp").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),vt("@firebase/database","0.0.900-exp.6ef484a04",e)}();const Yl=[];function Jl(t,n=e){let r;const i=new Set;function o(e){if(s(t,e)&&(t=e,r)){const e=!Yl.length;for(const e of i)e[1](),Yl.push(e,t);if(e){for(let e=0;e<Yl.length;e+=2)Yl[e][0](Yl[e+1]);Yl.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const l=[s,a];return i.add(l),1===i.size&&(r=n(o)||e),s(t),()=>{i.delete(l),0===i.size&&(r(),r=null)}}}}const Ql=()=>{const e=Pr();return{authStore:{subscribe:Jl({user:null,loading:!0},(t=>function(e,t,n,r){return Ke(e).onAuthStateChanged(t,n,r)}(e,(async e=>{t(e?{user:e,loading:!1}:{user:null,loading:!1})})))).subscribe},loginWithGoogle:()=>{const t=new In;return async function(e,t,n){const r=vn(e);It(t instanceof kn,e,"argument-error");const i=yr(r,n);return new Rr(r,"signInViaPopup",t,i).executeNotNull()}(e,t).then((async e=>{const{user:t}=e;if(t&&t.metadata.creationTime==t.metadata.lastSignInTime){const e=ql(Bl(),`users/info/${t.uid}`);await Al(e,{name:t.displayName.split(" ")[0],photo:t.photoURL}),await Pn(t,{displayName:t.displayName.split(" ")[0]})}}))},logout:()=>function(e){return Ke(e).signOut()}(e)}};function Zl(e){w(e,"svelte-qnzuq7",".h-4.svelte-qnzuq7{height:1rem}.w-4.svelte-qnzuq7{width:1rem}")}function Xl(t){let n,r,i,o;return{c(){n=C("svg"),r=C("path"),i=C("polyline"),o=C("line"),$(r,"d","M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"),$(i,"points","16 17 21 12 16 7"),$(o,"x1","21"),$(o,"y1","12"),$(o,"x2","9"),$(o,"y2","12"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width","24"),$(n,"height","24"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","h-4 w-4 svelte-qnzuq7")},m(e,t){_(e,n,t),y(n,r),y(n,i),y(n,o)},p:e,i:e,o:e,d(e){e&&b(n)}}}
/**
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
 */
vt("firebase-exp","9.0.0-beta.7","app");class ec extends ce{constructor(e){super(),le(this,e,null,Xl,s,{},Zl)}}var tc=function(e){var t=e.map((function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})),n={},r={};e.forEach((function(e,i){n[e]=t[i],r[t[i]]=e}));var i=new RegExp("["+(e.join("").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+"]"),"g"),o=new RegExp(t.join("|"),"g");return{encode:function(e){return e.replace(i,(function(e){return n[e]}))},decode:function(e){return e.replace(o,(function(e){return r[e]}))}}},nc=tc(".$[]#/%".split("")),rc=nc.encode;nc.decode;var ic=tc(".$[]#%".split(""));ic.encode,ic.decode;var oc=rc;function sc(e){w(e,"svelte-1ie2yeq",'.svelte-1ie2yeq.svelte-1ie2yeq,.svelte-1ie2yeq.svelte-1ie2yeq::before,.svelte-1ie2yeq.svelte-1ie2yeq::after{box-sizing:border-box}button.svelte-1ie2yeq.svelte-1ie2yeq{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1ie2yeq.svelte-1ie2yeq{text-transform:none}button.svelte-1ie2yeq.svelte-1ie2yeq,[type=\'button\'].svelte-1ie2yeq.svelte-1ie2yeq{-webkit-appearance:button}.svelte-1ie2yeq.svelte-1ie2yeq::-moz-focus-inner{border-style:none;padding:0}.svelte-1ie2yeq.svelte-1ie2yeq:-moz-focusring{outline:1px dotted ButtonText}.svelte-1ie2yeq.svelte-1ie2yeq:-moz-ui-invalid{box-shadow:none}.svelte-1ie2yeq.svelte-1ie2yeq::-webkit-inner-spin-button,.svelte-1ie2yeq.svelte-1ie2yeq::-webkit-outer-spin-button{height:auto}.svelte-1ie2yeq.svelte-1ie2yeq::-webkit-search-decoration{-webkit-appearance:none}.svelte-1ie2yeq.svelte-1ie2yeq::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}button.svelte-1ie2yeq.svelte-1ie2yeq{background-color:transparent;background-image:none}.svelte-1ie2yeq.svelte-1ie2yeq,.svelte-1ie2yeq.svelte-1ie2yeq::before,.svelte-1ie2yeq.svelte-1ie2yeq::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1ie2yeq.svelte-1ie2yeq{cursor:pointer}button.svelte-1ie2yeq.svelte-1ie2yeq{padding:0;line-height:inherit;color:inherit}.svelte-1ie2yeq.svelte-1ie2yeq,.svelte-1ie2yeq.svelte-1ie2yeq::before,.svelte-1ie2yeq.svelte-1ie2yeq::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.form-input.svelte-1ie2yeq.svelte-1ie2yeq,.form-textarea.svelte-1ie2yeq.svelte-1ie2yeq,.form-select.svelte-1ie2yeq.svelte-1ie2yeq,.form-multiselect.svelte-1ie2yeq.svelte-1ie2yeq{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}.form-input.svelte-1ie2yeq.svelte-1ie2yeq:focus,.form-textarea.svelte-1ie2yeq.svelte-1ie2yeq:focus,.form-select.svelte-1ie2yeq.svelte-1ie2yeq:focus,.form-multiselect.svelte-1ie2yeq.svelte-1ie2yeq:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}.form-input.svelte-1ie2yeq.svelte-1ie2yeq::-moz-placeholder,.form-textarea.svelte-1ie2yeq.svelte-1ie2yeq::-moz-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1ie2yeq.svelte-1ie2yeq:-ms-input-placeholder,.form-textarea.svelte-1ie2yeq.svelte-1ie2yeq:-ms-input-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1ie2yeq.svelte-1ie2yeq::placeholder,.form-textarea.svelte-1ie2yeq.svelte-1ie2yeq::placeholder{color:#6b7280;opacity:1}.prose.svelte-1ie2yeq.svelte-1ie2yeq{color:#374151;max-width:65ch}.prose.svelte-1ie2yeq.svelte-1ie2yeq{font-size:1rem;line-height:1.75}.prose.svelte-1ie2yeq>.svelte-1ie2yeq:first-child{margin-top:0}.prose.svelte-1ie2yeq>.svelte-1ie2yeq:last-child{margin-bottom:0}.fixed.svelte-1ie2yeq.svelte-1ie2yeq{position:fixed}.top-6.svelte-1ie2yeq.svelte-1ie2yeq{top:1.5rem}.right-6.svelte-1ie2yeq.svelte-1ie2yeq{right:1.5rem}.mx-auto.svelte-1ie2yeq.svelte-1ie2yeq{margin-left:auto;margin-right:auto}.my-16.svelte-1ie2yeq.svelte-1ie2yeq{margin-top:4rem;margin-bottom:4rem}.mx-4.svelte-1ie2yeq.svelte-1ie2yeq{margin-left:1rem;margin-right:1rem}.mt-4.svelte-1ie2yeq.svelte-1ie2yeq{margin-top:1rem}.mt-16.svelte-1ie2yeq.svelte-1ie2yeq{margin-top:4rem}.mb-2.svelte-1ie2yeq.svelte-1ie2yeq{margin-bottom:0.5rem}.mt-8.svelte-1ie2yeq.svelte-1ie2yeq{margin-top:2rem}.mr-2.svelte-1ie2yeq.svelte-1ie2yeq{margin-right:0.5rem}.flex.svelte-1ie2yeq.svelte-1ie2yeq{display:flex}.hidden.svelte-1ie2yeq.svelte-1ie2yeq{display:none}.h-9.svelte-1ie2yeq.svelte-1ie2yeq{height:2.25rem}.h-28.svelte-1ie2yeq.svelte-1ie2yeq{height:7rem}.h-12.svelte-1ie2yeq.svelte-1ie2yeq{height:3rem}.h-6.svelte-1ie2yeq.svelte-1ie2yeq{height:1.5rem}.h-4.svelte-1ie2yeq.svelte-1ie2yeq{height:1rem}.w-full.svelte-1ie2yeq.svelte-1ie2yeq{width:100%}.w-12.svelte-1ie2yeq.svelte-1ie2yeq{width:3rem}.w-6.svelte-1ie2yeq.svelte-1ie2yeq{width:1.5rem}.w-4.svelte-1ie2yeq.svelte-1ie2yeq{width:1rem}.max-w-none.svelte-1ie2yeq.svelte-1ie2yeq{max-width:none}.flex-grow.svelte-1ie2yeq.svelte-1ie2yeq{flex-grow:1}.flex-col.svelte-1ie2yeq.svelte-1ie2yeq{flex-direction:column}.items-center.svelte-1ie2yeq.svelte-1ie2yeq{align-items:center}.justify-end.svelte-1ie2yeq.svelte-1ie2yeq{justify-content:flex-end}.gap-10.svelte-1ie2yeq.svelte-1ie2yeq{gap:2.5rem}.gap-2.svelte-1ie2yeq.svelte-1ie2yeq{gap:0.5rem}.gap-4.svelte-1ie2yeq.svelte-1ie2yeq{gap:1rem}.self-end.svelte-1ie2yeq.svelte-1ie2yeq{align-self:flex-end}.rounded-md.svelte-1ie2yeq.svelte-1ie2yeq{border-radius:0.375rem}.rounded-full.svelte-1ie2yeq.svelte-1ie2yeq{border-radius:9999px}.\\!rounded-lg.svelte-1ie2yeq.svelte-1ie2yeq{border-radius:0.5rem !important}.border-gray-300.svelte-1ie2yeq.svelte-1ie2yeq{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.bg-gray-100.svelte-1ie2yeq.svelte-1ie2yeq{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-primary-100.svelte-1ie2yeq.svelte-1ie2yeq{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.bg-primary-50.svelte-1ie2yeq.svelte-1ie2yeq{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.bg-primary-200.svelte-1ie2yeq.svelte-1ie2yeq{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.bg-white.svelte-1ie2yeq.svelte-1ie2yeq{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-gradient-to-r.svelte-1ie2yeq.svelte-1ie2yeq{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-primary-100.svelte-1ie2yeq.svelte-1ie2yeq{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.via-blue-100.svelte-1ie2yeq.svelte-1ie2yeq{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.to-purple-100.svelte-1ie2yeq.svelte-1ie2yeq{--tw-gradient-to:#ede9fe}.py-1.svelte-1ie2yeq.svelte-1ie2yeq{padding-top:0.25rem;padding-bottom:0.25rem}.px-6.svelte-1ie2yeq.svelte-1ie2yeq{padding-left:1.5rem;padding-right:1.5rem}.py-4.svelte-1ie2yeq.svelte-1ie2yeq{padding-top:1rem;padding-bottom:1rem}.px-4.svelte-1ie2yeq.svelte-1ie2yeq{padding-left:1rem;padding-right:1rem}.px-2.svelte-1ie2yeq.svelte-1ie2yeq{padding-left:0.5rem;padding-right:0.5rem}.py-2.svelte-1ie2yeq.svelte-1ie2yeq{padding-top:0.5rem;padding-bottom:0.5rem}.\\!px-3.svelte-1ie2yeq.svelte-1ie2yeq{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!py-1\\.5.svelte-1ie2yeq.svelte-1ie2yeq{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!py-1.svelte-1ie2yeq.svelte-1ie2yeq{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.font-sans.svelte-1ie2yeq.svelte-1ie2yeq{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-3xl.svelte-1ie2yeq.svelte-1ie2yeq{font-size:1.875rem;line-height:2.25rem}.text-2xl.svelte-1ie2yeq.svelte-1ie2yeq{font-size:1.5rem;line-height:2rem}.text-base.svelte-1ie2yeq.svelte-1ie2yeq{font-size:1rem;line-height:1.5rem}.text-lg.svelte-1ie2yeq.svelte-1ie2yeq{font-size:1.125rem;line-height:1.75rem}.font-bold.svelte-1ie2yeq.svelte-1ie2yeq{font-weight:700}.font-medium.svelte-1ie2yeq.svelte-1ie2yeq{font-weight:500}.font-normal.svelte-1ie2yeq.svelte-1ie2yeq{font-weight:400}.font-semibold.svelte-1ie2yeq.svelte-1ie2yeq{font-weight:600}.text-white.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.text-black.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.text-primary-600.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.text-gray-700.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.text-primary-900.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.text-gray-600.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-primary-800.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.text-primary-500.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.text-gray-400.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-red-600.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.text-pink-600.svelte-1ie2yeq.svelte-1ie2yeq{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!ring-1.svelte-1ie2yeq.svelte-1ie2yeq{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!ring-primary-500.svelte-1ie2yeq.svelte-1ie2yeq{--tw-ring-opacity:1 !important;--tw-ring-color:rgba(14, 165, 233, var(--tw-ring-opacity)) !important}.filter.svelte-1ie2yeq.svelte-1ie2yeq{filter:var(--tw-filter)}.hover\\:bg-primary-100.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.hover\\:bg-primary-200.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:bg-red-100\\/60.svelte-1ie2yeq.svelte-1ie2yeq:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:bg-pink-100\\/60.svelte-1ie2yeq.svelte-1ie2yeq:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:bg-primary-50.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.hover\\:from-primary-200.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0))}.hover\\:via-blue-200.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0))}.hover\\:to-purple-200.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-gradient-to:#ddd6fe}.hover\\:underline.svelte-1ie2yeq.svelte-1ie2yeq:hover{text-decoration:underline}.hover\\:\\!shadow-md.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!ring-2.svelte-1ie2yeq.svelte-1ie2yeq:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:cursor-not-allowed.svelte-1ie2yeq.svelte-1ie2yeq:disabled{cursor:not-allowed}.disabled\\:bg-gray-100.svelte-1ie2yeq.svelte-1ie2yeq:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:text-gray-600.svelte-1ie2yeq.svelte-1ie2yeq:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:opacity-70.svelte-1ie2yeq.svelte-1ie2yeq:disabled{opacity:0.7}.disabled\\:hover\\:bg-gray-100.svelte-1ie2yeq.svelte-1ie2yeq:disabled:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:hover\\:from-primary-100.svelte-1ie2yeq.svelte-1ie2yeq:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.disabled\\:hover\\:via-blue-100.svelte-1ie2yeq.svelte-1ie2yeq:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}')}function ac(e,t,n){const r=e.slice();return r[17]=t[n],r[19]=n,r}function lc(e,t){let n,r,i,o,s,a,l,c,u,h=t[17]+"",d=(t[4]?"-":t[3][t[17]])+"";function p(){return t[8](t[17])}return{key:e,first:null,c(){n=x("button"),r=x("span"),i=I(h),o=T(),s=I(d),a=T(),$(r,"class","mr-2 svelte-1ie2yeq"),$(n,"type","button"),$(n,"class",l=v((t[2].includes(t[17])?"bg-primary-200 hover:bg-primary-100 dark:!bg-primary-800 dark:hover:!bg-primary-600":"bg-white dark:!bg-gray-700 hover:bg-primary-50 dark:hover:!bg-primary-600")+" !px-3 !py-1.5 !rounded-lg !ring-1 !ring-primary-500 hover:!ring-2 hover:!shadow-md")+" svelte-1ie2yeq"),this.first=n},m(e,t){_(e,n,t),y(n,r),y(r,i),y(n,o),y(n,s),y(n,a),c||(u=E(n,"click",p),c=!0)},p(e,r){t=e,1&r&&h!==(h=t[17]+"")&&N(i,h),25&r&&d!==(d=(t[4]?"-":t[3][t[17]])+"")&&N(s,d),5&r&&l!==(l=v((t[2].includes(t[17])?"bg-primary-200 hover:bg-primary-100 dark:!bg-primary-800 dark:hover:!bg-primary-600":"bg-white dark:!bg-gray-700 hover:bg-primary-50 dark:hover:!bg-primary-600")+" !px-3 !py-1.5 !rounded-lg !ring-1 !ring-primary-500 hover:!ring-2 hover:!shadow-md")+" svelte-1ie2yeq")&&$(n,"class",l)},d(e){e&&b(n),c=!1,u()}}}function cc(t){let n,r=[],i=new Map,o=t[0];const s=e=>e[19];for(let e=0;e<o.length;e+=1){let n=ac(t,o,e),a=s(n);i.set(a,r[e]=lc(a,n))}return{c(){n=x("div");for(let e=0;e<r.length;e+=1)r[e].c();$(n,"class","flex gap-4 text-2xl mt-8 svelte-1ie2yeq")},m(e,t){_(e,n,t);for(let e=0;e<r.length;e+=1)r[e].m(n,null)},p(e,[t]){61&t&&(o=e[0],r=te(r,t,s,1,e,o,i,n,X,lc,null,ac))},i:e,o:e,d(e){e&&b(n);for(let e=0;e<r.length;e+=1)r[e].d()}}}function uc(t,n,r){let i,o=e;t.$$.on_destroy.push((()=>o()));let s,a,l,{reactions:c=["😭","😕","😀","🤩"]}=n,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=Ql();s=e.authStore,o(),o=u(s,(e=>r(7,i=e))),a=e.loginWithGoogle,l=e.logout}catch(e){throw e}const d=Bl();let p=[],f={};c.forEach((e=>r(3,f[e]=0,f)));let g=!0,m=!0;const v=e=>{!i.user||m||g||(p.includes(e)?(async e=>{r(2,p=p.filter((t=>t!==e))),r(3,f[e]--,f),r(3,f={...f});const t=`posts/${oc(h)}/reactions`,n=`users/activity/${i.user.uid}/${oc(h)}/reactions`,o={};o[`${t}/count/${e}`]=Kl(-1),o[`${t}/users/${e}/${i.user.uid}`]=null,o[`${n}/${e}`]=null,Dl(ql(d),o)})(e):(async e=>{r(2,p=[...p,e]),r(3,f[e]++,f),r(3,f={...f});const t=`posts/${oc(h)}/reactions`,n=`users/activity/${i.user.uid}/${oc(h)}/reactions`,o={};o[`${t}/count/${e}`]=Kl(1),o[`${t}/users/${e}/${i.user.uid}`]=!0,o[`${n}/${e}`]=!0,Dl(ql(d),o)})(e))};return t.$$set=e=>{"reactions"in e&&r(0,c=e.reactions),"page"in e&&r(6,h=e.page)},t.$$.update=()=>{192&t.$$.dirty&&(Fl(ql(d,`posts/${oc(h)}/reactions/count`),(e=>{var t;t=e.val()??{},Object.entries(t??{}).forEach((([e,t])=>{r(3,f[e]=t,f)})),r(4,m=!1)}),{onlyOnce:!0}),i.user?Fl(ql(d,`users/activity/${i.user.uid}/${oc(h)}/reactions`),(e=>{var t;t=e.val()??{},r(2,p=Object.keys(t)),g=!1}),{onlyOnce:!0}):r(2,p=[]))},[c,s,p,f,m,v,h,i,e=>v(e)]}class hc extends ce{constructor(e){super(),le(this,e,uc,cc,s,{reactions:0,page:6},sc)}}var dc="en",pc={},fc={};function gc(){return dc}function mc(e){return pc[e]?e:fc[e.toLowerCase()]?fc[e.toLowerCase()]:void 0}function vc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.localeMatcher||"lookup";switch(n){case"lookup":case"best fit":return yc(e);default:throw new RangeError('Invalid "localeMatcher" option: '.concat(n))}}function yc(e){var t=mc(e);if(t)return t;for(var n=e.split("-");e.length>1;){n.pop();var r=mc(e=n.join("-"));if(r)return r}}var wc={af:function(e){return 1==e?"one":"other"},am:function(e){return e>=0&&e<=1?"one":"other"},ar:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 0==e?"zero":1==e?"one":2==e?"two":n>=3&&n<=10?"few":n>=11&&n<=99?"many":"other"},ast:function(e){var t=!String(e).split(".")[1];return 1==e&&t?"one":"other"},be:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2);return 1==r&&11!=i?"one":r>=2&&r<=4&&(i<12||i>14)?"few":n&&0==r||r>=5&&r<=9||i>=11&&i<=14?"many":"other"},br:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2),o=n&&t[0].slice(-6);return 1==r&&11!=i&&71!=i&&91!=i?"one":2==r&&12!=i&&72!=i&&92!=i?"two":(3==r||4==r||9==r)&&(i<10||i>19)&&(i<70||i>79)&&(i<90||i>99)?"few":0!=e&&n&&0==o?"many":"other"},bs:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],o=n.slice(-1),s=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==o&&11!=s||1==a&&11!=l?"one":i&&o>=2&&o<=4&&(s<12||s>14)||a>=2&&a<=4&&(l<12||l>14)?"few":"other"},cs:function(e){var t=String(e).split("."),n=t[0],r=!t[1];return 1==e&&r?"one":n>=2&&n<=4&&r?"few":r?"other":"many"},cy:function(e){return 0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},da:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e;return 1!=e&&(r||0!=n&&1!=n)?"other":"one"},dsb:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],o=n.slice(-2),s=r.slice(-2);return i&&1==o||1==s?"one":i&&2==o||2==s?"two":i&&(3==o||4==o)||3==s||4==s?"few":"other"},dz:function(e){return"other"},fil:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],o=n.slice(-1),s=r.slice(-1);return i&&(1==n||2==n||3==n)||i&&4!=o&&6!=o&&9!=o||!i&&4!=s&&6!=s&&9!=s?"one":"other"},fr:function(e){return e>=0&&e<2?"one":"other"},ga:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e?"one":2==e?"two":n&&e>=3&&e<=6?"few":n&&e>=7&&e<=10?"many":"other"},gd:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e||11==e?"one":2==e||12==e?"two":n&&e>=3&&e<=10||n&&e>=13&&e<=19?"few":"other"},he:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=Number(t[0])==e,o=i&&t[0].slice(-1);return 1==e&&r?"one":2==n&&r?"two":r&&(e<0||e>10)&&i&&0==o?"many":"other"},is:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e,i=n.slice(-1),o=n.slice(-2);return r&&1==i&&11!=o||!r?"one":"other"},ksh:function(e){return 0==e?"zero":1==e?"one":"other"},lt:function(e){var t=String(e).split("."),n=t[1]||"",r=Number(t[0])==e,i=r&&t[0].slice(-1),o=r&&t[0].slice(-2);return 1==i&&(o<11||o>19)?"one":i>=2&&i<=9&&(o<11||o>19)?"few":0!=n?"many":"other"},lv:function(e){var t=String(e).split("."),n=t[1]||"",r=n.length,i=Number(t[0])==e,o=i&&t[0].slice(-1),s=i&&t[0].slice(-2),a=n.slice(-2),l=n.slice(-1);return i&&0==o||s>=11&&s<=19||2==r&&a>=11&&a<=19?"zero":1==o&&11!=s||2==r&&1==l&&11!=a||2!=r&&1==l?"one":"other"},mk:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],o=n.slice(-1),s=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==o&&11!=s||1==a&&11!=l?"one":"other"},mt:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 1==e?"one":0==e||n>=2&&n<=10?"few":n>=11&&n<=19?"many":"other"},pa:function(e){return 0==e||1==e?"one":"other"},pl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),o=n.slice(-2);return 1==e&&r?"one":r&&i>=2&&i<=4&&(o<12||o>14)?"few":r&&1!=n&&(0==i||1==i)||r&&i>=5&&i<=9||r&&o>=12&&o<=14?"many":"other"},pt:function(e){var t=String(e).split(".")[0];return 0==t||1==t?"one":"other"},ro:function(e){var t=String(e).split("."),n=!t[1],r=Number(t[0])==e&&t[0].slice(-2);return 1==e&&n?"one":!n||0==e||1!=e&&r>=1&&r<=19?"few":"other"},ru:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),o=n.slice(-2);return r&&1==i&&11!=o?"one":r&&i>=2&&i<=4&&(o<12||o>14)?"few":r&&0==i||r&&i>=5&&i<=9||r&&o>=11&&o<=14?"many":"other"},se:function(e){return 1==e?"one":2==e?"two":"other"},si:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"";return 0==e||1==e||0==n&&1==r?"one":"other"},sl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-2);return r&&1==i?"one":r&&2==i?"two":r&&(3==i||4==i)||!r?"few":"other"}};wc.as=wc.am,wc.az=wc.af,wc.bg=wc.af,wc.bn=wc.am,wc.ca=wc.ast,wc.ce=wc.af,wc.chr=wc.af,wc.de=wc.ast,wc.ee=wc.af,wc.el=wc.af,wc.en=wc.ast,wc.es=wc.af,wc.et=wc.ast,wc.eu=wc.af,wc.fa=wc.am,wc.fi=wc.ast,wc.fo=wc.af,wc.fur=wc.af,wc.fy=wc.ast,wc.gl=wc.ast,wc.gu=wc.am,wc.hi=wc.am,wc.hr=wc.bs,wc.hsb=wc.dsb,wc.hu=wc.af,wc.hy=wc.fr,wc.ia=wc.ast,wc.id=wc.dz,wc.it=wc.ast,wc.ja=wc.dz,wc.jgo=wc.af,wc.jv=wc.dz,wc.ka=wc.af,wc.kea=wc.dz,wc.kk=wc.af,wc.kl=wc.af,wc.km=wc.dz,wc.kn=wc.am,wc.ko=wc.dz,wc.ku=wc.af,wc.ky=wc.af,wc.lb=wc.af,wc.lkt=wc.dz,wc.lo=wc.dz,wc.ml=wc.af,wc.mn=wc.af,wc.mr=wc.am,wc.ms=wc.dz,wc.my=wc.dz,wc.nb=wc.af,wc.ne=wc.af,wc.nl=wc.ast,wc.nn=wc.af,wc.or=wc.af,wc.ps=wc.af,wc["pt-PT"]=wc.ast,wc.sah=wc.dz,wc.sd=wc.af,wc.sk=wc.cs,wc.so=wc.af,wc.sq=wc.af,wc.sr=wc.bs,wc.sv=wc.ast,wc.sw=wc.ast,wc.ta=wc.af,wc.te=wc.af,wc.th=wc.dz,wc.ti=wc.pa,wc.tk=wc.af,wc.to=wc.dz,wc.tr=wc.af,wc.ug=wc.af,wc.uk=wc.ru,wc.ur=wc.ast,wc.uz=wc.af,wc.vi=wc.dz,wc.wae=wc.af,wc.yi=wc.ast,wc.yue=wc.dz,wc.zh=wc.dz,wc.zu=wc.am;var _c=wc;function bc(e){return"pt-PT"===e?e:function(e){var t=e.match(kc);if(!t)throw new TypeError("Invalid locale: ".concat(e));return t[1]}(e)}var kc=/^([a-z0-9]+)/i;function xc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Cc=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=e.supportedLocalesOf(t);if(0===r.length)throw new RangeError("Unsupported locale: "+t);if(n&&"cardinal"!==n.type)throw new RangeError('Only "cardinal" "type" is supported');this.$=_c[bc(r[0])]}var t,n,r;return t=e,r=[{key:"supportedLocalesOf",value:function(e){return"string"==typeof e&&(e=[e]),e.filter((function(e){return _c[bc(e)]}))}}],(n=[{key:"select",value:function(e){return this.$(e)}}])&&xc(t.prototype,n),r&&xc(t,r),e}();function Ic(e){return(Ic="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Tc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Nc(e,t,n[t])}))}return e}function Sc(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Ec(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Rc=["second","minute","hour","day","week","month","quarter","year"],Pc=["auto","always"],jc=["long","short","narrow"],qc=["lookup","best fit"],Oc=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Ec(this,e),Nc(this,"numeric","always"),Nc(this,"style","long"),Nc(this,"localeMatcher","lookup");var r=n.numeric,i=n.style,o=n.localeMatcher;if(void 0!==r){if(Pc.indexOf(r)<0)throw new RangeError('Invalid "numeric" option: '.concat(r));this.numeric=r}if(void 0!==i){if(jc.indexOf(i)<0)throw new RangeError('Invalid "style" option: '.concat(i));this.style=i}if(void 0!==o){if(qc.indexOf(o)<0)throw new RangeError('Invalid "localeMatcher" option: '.concat(o));this.localeMatcher=o}if("string"==typeof t&&(t=[t]),t.push(gc()),this.locale=e.supportedLocalesOf(t,{localeMatcher:this.localeMatcher})[0],!this.locale)throw new Error("No supported locale was found");Cc.supportedLocalesOf(this.locale).length>0?this.pluralRules=new Cc(this.locale):console.warn('"'.concat(this.locale,'" locale is not supported')),"undefined"!=typeof Intl&&Intl.NumberFormat?(this.numberFormat=new Intl.NumberFormat(this.locale),this.numberingSystem=this.numberFormat.resolvedOptions().numberingSystem):this.numberingSystem="latn",this.locale=vc(this.locale,{localeMatcher:this.localeMatcher})}var t,n,r;return t=e,(n=[{key:"format",value:function(){var e=Mc(arguments),t=Sc(e,2),n=t[0],r=t[1];return this.getRule(n,r).replace("{0}",this.formatNumber(Math.abs(n)))}},{key:"formatToParts",value:function(){var e=Mc(arguments),t=Sc(e,2),n=t[0],r=t[1],i=this.getRule(n,r),o=i.indexOf("{0}");if(o<0)return[{type:"literal",value:i}];var s=[];return o>0&&s.push({type:"literal",value:i.slice(0,o)}),s=s.concat(this.formatNumberToParts(Math.abs(n)).map((function(e){return Tc({},e,{unit:r})}))),o+"{0}".length<i.length-1&&s.push({type:"literal",value:i.slice(o+"{0}".length)}),s}},{key:"getRule",value:function(e,t){var n=function(e){return pc[e]}(this.locale)[this.style][t];if("auto"===this.numeric)if(-2===e||-1===e){var r=n["previous".concat(-1===e?"":"-"+Math.abs(e))];if(r)return r}else if(1===e||2===e){var i=n["next".concat(1===e?"":"-"+Math.abs(e))];if(i)return i}else if(0===e&&n.current)return n.current;var o,s=n[(o=e,o<0||0===o&&function(e){return 1/e==-1/0}(o)?"past":"future")];return"string"==typeof s?s:s[this.pluralRules&&this.pluralRules.select(Math.abs(e))||"other"]||s.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"formatNumberToParts",value:function(e){return this.numberFormat&&this.numberFormat.formatToParts?this.numberFormat.formatToParts(e):[{type:"integer",value:this.formatNumber(e)}]}},{key:"resolvedOptions",value:function(){return{locale:this.locale,style:this.style,numeric:this.numeric,numberingSystem:this.numberingSystem}}}])&&$c(t.prototype,n),r&&$c(t,r),e}();Oc.supportedLocalesOf=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e)e=[e];else if(!Array.isArray(e))throw new TypeError('Invalid "locales" argument');return e.filter((function(e){return vc(e,t)}))},Oc.addLocale=function(e){if(!e)throw new Error("No locale data passed");pc[e.locale]=e,fc[e.locale.toLowerCase()]=e.locale},Oc.setDefaultLocale=function(e){dc=e},Oc.getDefaultLocale=gc,Oc.PluralRules=Cc;var Ac='Invalid "unit" argument';function Dc(e){if("symbol"===Ic(e))throw new TypeError(Ac);if("string"!=typeof e)throw new RangeError("".concat(Ac,": ").concat(e));if("s"===e[e.length-1]&&(e=e.slice(0,e.length-1)),Rc.indexOf(e)<0)throw new RangeError("".concat(Ac,": ").concat(e));return e}function Lc(e){if(e=Number(e),Number.isFinite&&!Number.isFinite(e))throw new RangeError("".concat('Invalid "number" argument',": ").concat(e));return e}function Mc(e){if(e.length<2)throw new TypeError('"unit" argument is required');return[Lc(e[0]),Dc(e[1])]}function zc(e){return(zc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Uc=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r={},(n="cache")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,r;return t=e,(n=[{key:"get",value:function(){for(var e=this.cache,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i=0;i<n.length;i++){var o=n[i];if("object"!==zc(e))return;e=e[o]}return e}},{key:"put",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.pop(),i=t.pop(),o=this.cache,s=0;s<t.length;s++){var a=t[s];"object"!==zc(o[a])&&(o[a]={}),o=o[a]}return o[i]=r}}])&&Fc(t.prototype,n),r&&Fc(t,r),e}();function Wc(e){return(Wc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Vc(e,t){var n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var s=o;if(t(s))return s;for(var a=s.split("-");a.length>1;)if(a.pop(),t(s=a.join("-")))return s}throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")))}var Hc=86400;function Bc(e){switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return Hc;case"week":return 604800;case"month":return 2630016;case"year":return 31556952}}function Gc(e){return void 0!==e.factor?e.factor:Bc(e.unit||e.formatAs)||1}function Kc(e){switch(e){case"floor":return Math.floor;default:return Math.round}}function Yc(e){switch(e){case"floor":return 1;default:return.5}}function Jc(e){return(Jc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qc(e,t){var n,r=t.prevStep,i=t.timestamp,o=t.now,s=t.future,a=t.round;return r&&(r.id||r.unit)&&(n=e["threshold_for_".concat(r.id||r.unit)]),void 0===n&&void 0!==e.threshold&&"function"==typeof(n=e.threshold)&&(n=n(o,s)),void 0===n&&(n=e.minTime),"object"===Jc(n)&&(n=r&&r.id&&void 0!==n[r.id]?n[r.id]:n.default),"function"==typeof n&&(n=n(i,{future:s,getMinTimeForUnit:function(e,t){return Zc(e,t||r&&r.formatAs,{round:a})}})),void 0===n&&e.test&&(n=e.test(i,{now:o,future:s})?0:9007199254740991),void 0===n&&(r?e.formatAs&&r.formatAs&&(n=Zc(e.formatAs,r.formatAs,{round:a})):n=0),void 0===n&&console.warn("[javascript-time-ago] A step should specify `minTime`:\n"+JSON.stringify(e,null,2)),n}function Zc(e,t,n){var r,i=n.round,o=Bc(e);if(r=Bc("now"===t?e:t),void 0!==o&&void 0!==r)return o-r*(1-Yc(i))}function Xc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){eu(e,t,n[t])}))}return e}function eu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tu(e,t,n){var r=n.now,i=n.future,o=n.round,s=n.units,a=n.getNextStep,l=function(e,t,n){var r=n.now,i=n.future,o=n.round;if(0===e.length)return;var s=nu(e,t,{now:r,future:i||t<0,round:o});if(-1===s)return;var a=e[s];if(a.granularity){if(0===Kc(o)(Math.abs(t)/Gc(a)/a.granularity)*a.granularity&&s>0)return e[s-1]}return a}(e=function(e,t){return e.filter((function(e){var n=e.unit,r=e.formatAs;return!(n=n||r)||t.indexOf(n)>=0}))}(e,s),t,{now:r,future:i,round:o});return a?l?[e[e.indexOf(l)-1],l,e[e.indexOf(l)+1]]:[void 0,void 0,e[0]]:l}function nu(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=Qc(e[r],Xc({prevStep:e[r-1],timestamp:n.now-1e3*t},n));return void 0===i||Math.abs(t)<i?r-1:r===e.length-1?r:nu(e,t,n,r+1)}function ru(e,t,n){var r=n.now,i=n.round;if(Bc(e)){var o=1e3*Bc(e),s=t>r,a=Math.abs(t-r),l=Kc(i)(a/o)*o;return s?l>0?a-l+function(e,t){return(1-Yc(e))*t+1}(i,o):a-l+1:-(a-l)+function(e,t){return Yc(e)*t}(i,o)}}function iu(e,t,n){var r=n.prevStep,i=n.nextStep,o=n.now,s=n.future,a=n.round,l=e.getTime?e.getTime():e,c=function(e){return ru(e,l,{now:o,round:a})},u=function(e,t,n){var r=n.now,i=n.future,o=n.round,s=n.prevStep;if(e){var a=function(e,t,n){var r=n.now,i=n.future,o=n.round,s=n.prevStep,a=Qc(e,{timestamp:t,now:r,future:i,round:o,prevStep:s});if(void 0===a)return;return i?t-1e3*a+1:0===a&&t===r?31536e9:t+1e3*a}(e,t,{now:r,future:i,round:o,prevStep:s});if(void 0===a)return;return a-r}return i?t-r+1:31536e9}(s?t:i,l,{future:s,now:o,round:a,prevStep:s?r:t});if(void 0!==u){var h;if(t&&(t.getTimeToNextUpdate&&(h=t.getTimeToNextUpdate(l,{getTimeToNextUpdateForUnit:c,getRoundFunction:Kc,now:o,future:s,round:a})),void 0===h)){var d=t.unit||t.formatAs;d&&(h=c(d))}return void 0===h?u:Math.min(h,u)}}var ou={};function su(e){return ou[e]}function au(e){if(!e)throw new Error("[javascript-time-ago] No locale data passed.");ou[e.locale]=e}var lu={steps:[{formatAs:"now"},{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"}],labels:"long"};function cu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var uu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){cu(e,t,n[t])}))}return e}({},lu,{steps:lu.steps.filter((function(e){return"second"!==e.formatAs}))}),hu=[{factor:1,unit:"now"},{threshold:1,threshold_for_now:45.5,factor:1,unit:"second"},{threshold:45.5,factor:60,unit:"minute"},{threshold:150,granularity:5,factor:60,unit:"minute"},{threshold:1350,factor:1800,unit:"half-hour"},{threshold:2550,threshold_for_minute:3150,factor:3600,unit:"hour"},{threshold:73800,factor:Hc,unit:"day"},{threshold:475200,factor:604800,unit:"week"},{threshold:2116800,factor:2630016,unit:"month"},{threshold:27615168,factor:31556952,unit:"year"}],du={gradation:hu,flavour:"long",units:["now","minute","hour","day","week","month","year"]},pu={gradation:hu,flavour:"long-time",units:["now","minute","hour","day","week","month","year"]};function fu(e){return e instanceof Date?e:new Date(e)}var gu=[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"}],mu={},vu={minTime:function(e,t){return t.future,(0,t.getMinTimeForUnit)("day")},format:function(e,t){return mu[t]||(mu[t]={}),mu[t].dayMonth||(mu[t].dayMonth=new Intl.DateTimeFormat(t,{month:"short",day:"numeric"})),mu[t].dayMonth.format(fu(e))}},yu={minTime:function(e,t){return t.future?(e-(new Date(new Date(e).getFullYear(),0).getTime()-1))/1e3:(new Date(new Date(e).getFullYear()+1,0).getTime()-e)/1e3},format:function(e,t){return mu[t]||(mu[t]={}),mu[t].dayMonthYear||(mu[t].dayMonthYear=new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric"})),mu[t].dayMonthYear.format(fu(e))}};"object"===("undefined"==typeof Intl?"undefined":Wc(Intl))&&"function"==typeof Intl.DateTimeFormat?gu.push(vu,yu):gu.push({formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"});var wu={steps:gu,labels:["mini","short-time","narrow","short"]};function _u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var bu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_u(e,t,n[t])}))}return e}({},wu,{steps:[{formatAs:"now"}].concat(wu.steps)});function ku(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ku(e,t,n[t])}))}return e}({},wu,{steps:wu.steps.filter((function(e){return"second"!==e.formatAs}))});function Cu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Iu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Cu(e,t,n[t])}))}return e}({},xu,{steps:[{formatAs:"now"}].concat(xu.steps)});function Tu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Su(e,t,n[t])}))}return e}function Su(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Eu=Tu({},wu,{steps:wu.steps.filter((function(e){return"second"!==e.formatAs})).map((function(e){return"minute"===e.formatAs?Tu({},e,{minTime:60}):e}))}),$u={steps:[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"month"},{formatAs:"year"}],labels:["mini","short-time","narrow","short"]};function Nu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ru=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Nu(e,t,n[t])}))}return e}({},$u,{steps:[{formatAs:"now"}].concat($u.steps)});function Pu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ju=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Pu(e,t,n[t])}))}return e}({},$u,{steps:$u.steps.filter((function(e){return"second"!==e.formatAs}))});function qu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ou=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){qu(e,t,n[t])}))}return e}({},ju,{steps:[{formatAs:"now"}].concat(ju.steps)});function Au(e){switch(e){case"default":case"round":return lu;case"round-minute":return uu;case"approximate":return du;case"time":case"approximate-time":return pu;case"mini":return $u;case"mini-now":return Ru;case"mini-minute":return ju;case"mini-minute-now":return Ou;case"twitter":return wu;case"twitter-now":return bu;case"twitter-minute":return xu;case"twitter-minute-now":return Iu;case"twitter-first-minute":return Eu;default:return du}}function Du(e){return(Du="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Lu(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Mu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Fu,Uu=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.polyfill;Mu(this,e),"string"==typeof t&&(t=[t]),this.locale=Vc(t.concat(e.getDefaultLocale()),su),"undefined"!=typeof Intl&&Intl.NumberFormat&&(this.numberFormat=new Intl.NumberFormat(this.locale)),!1===r?(this.IntlRelativeTimeFormat=Intl.RelativeTimeFormat,this.IntlPluralRules=Intl.PluralRules):(this.IntlRelativeTimeFormat=Oc,this.IntlPluralRules=Oc.PluralRules),this.relativeTimeFormatCache=new Uc,this.pluralRulesCache=new Uc}var t,n,r;return t=e,(n=[{key:"format",value:function(e,t,n){var r,i;n||(!t||"string"==typeof(r=t)||function(e){return void 0!==Du(e)&&null!==e&&e.constructor===Vu}(i=r)&&(Array.isArray(i.steps)||Array.isArray(i.gradation)||Array.isArray(i.flavour)||"string"==typeof i.flavour||Array.isArray(i.labels)||"string"==typeof i.labels||Array.isArray(i.units)||"function"==typeof i.custom)?n={}:(n=t,t=void 0)),t||(t=uu),"string"==typeof t&&(t=Au(t));var o,s=function(e){if(e.constructor===Date||function(e){return"object"===Du(e)&&"function"==typeof e.getTime}(e))return e.getTime();if("number"==typeof e)return e;throw new Error("Unsupported relative time formatter input: ".concat(Du(e),", ").concat(e))}(e),a=this.getLabels(t.flavour||t.labels),l=a.labels,c=a.labelsType;void 0!==t.now&&(o=t.now),void 0===o&&void 0!==n.now&&(o=n.now),void 0===o&&(o=Date.now());var u=(o-s)/1e3,h=n.future||u<0,d=function(e,t,n,r){var i=e.now||t&&t.now;return i?"string"==typeof i?i:r?i.future:i.past:n&&n.second&&n.second.current?n.second.current:void 0}(l,su(this.locale).now,su(this.locale).long,h);if(t.custom){var p=t.custom({now:o,date:new Date(s),time:s,elapsed:u,locale:this.locale});if(void 0!==p)return p}var f=function(e,t,n){var r=Object.keys(t);return n&&r.push("now"),e&&(r=e.filter((function(e){return"now"===e||r.indexOf(e)>=0}))),r}(t.units,l,d),g=n.round||t.round,m=Lu(tu(t.gradation||t.steps||uu.steps,u,{now:o,units:f,round:g,future:h,getNextStep:!0}),3),v=m[0],y=m[1],w=m[2],_=this.formatDateForStep(s,y,u,{labels:l,labelsType:c,nowLabel:d,now:o,future:h,round:g})||"";return n.getTimeToNextUpdate?[_,iu(s,y,{nextStep:w,prevStep:v,now:o,future:h,round:g})]:_}},{key:"formatDateForStep",value:function(e,t,n,r){var i=this,o=r.labels,s=r.labelsType,a=r.nowLabel,l=r.now,c=r.future,u=r.round;if(t){if(t.format)return t.format(e,this.locale,{formatAs:function(e,t){return i.formatValue(t,e,{labels:o,future:c})},now:l,future:c});var h=t.unit||t.formatAs;if(!h)throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(t)));if("now"===h)return a;var d=Math.abs(n)/Gc(t);t.granularity&&(d=Kc(u)(d/t.granularity)*t.granularity);var p=-1*Math.sign(n)*Kc(u)(d);switch(0===p&&(p=c?0:-0),s){case"long":case"short":case"narrow":return this.getFormatter(s).format(p,h);default:return this.formatValue(p,h,{labels:o,future:c})}}}},{key:"formatValue",value:function(e,t,n){var r=n.labels,i=n.future;return this.getFormattingRule(r,t,e,{future:i}).replace("{0}",this.formatNumber(Math.abs(e)))}},{key:"getFormattingRule",value:function(e,t,n,r){var i=r.future;if(this.locale,"string"==typeof(e=e[t]))return e;var o=e[0===n?i?"future":"past":n<0?"past":"future"]||e;return"string"==typeof o?o:o[this.getPluralRules().select(Math.abs(n))]||o.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"getFormatter",value:function(e){return this.relativeTimeFormatCache.get(this.locale,e)||this.relativeTimeFormatCache.put(this.locale,e,new this.IntlRelativeTimeFormat(this.locale,{style:e}))}},{key:"getPluralRules",value:function(){return this.pluralRulesCache.get(this.locale)||this.pluralRulesCache.put(this.locale,new this.IntlPluralRules(this.locale))}},{key:"getLabels",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"string"==typeof e&&(e=[e]),e=(e=e.map((function(e){switch(e){case"tiny":case"mini-time":return"mini";default:return e}}))).concat("long");var t=su(this.locale),n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var s=o;if(t[s])return{labelsType:s,labels:t[s]}}}}])&&zu(t.prototype,n),r&&zu(t,r),e}(),Wu="en";Uu.getDefaultLocale=function(){return Wu},Uu.setDefaultLocale=function(e){return Wu=e},Uu.addDefaultLocale=function(e){if(Fu)return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");Fu=!0,Uu.setDefaultLocale(e.locale),Uu.addLocale(e)},Uu.addLocale=function(e){au(e),Oc.addLocale(e)},Uu.locale=Uu.addLocale,Uu.addLabels=function(e,t,n){var r=su(e);r||(au({locale:e}),r=su(e)),r[t]=n};var Vu={}.constructor;var Hu={locale:"en",long:{year:{previous:"last year",current:"this year",next:"next year",past:{one:"{0} year ago",other:"{0} years ago"},future:{one:"in {0} year",other:"in {0} years"}},quarter:{previous:"last quarter",current:"this quarter",next:"next quarter",past:{one:"{0} quarter ago",other:"{0} quarters ago"},future:{one:"in {0} quarter",other:"in {0} quarters"}},month:{previous:"last month",current:"this month",next:"next month",past:{one:"{0} month ago",other:"{0} months ago"},future:{one:"in {0} month",other:"in {0} months"}},week:{previous:"last week",current:"this week",next:"next week",past:{one:"{0} week ago",other:"{0} weeks ago"},future:{one:"in {0} week",other:"in {0} weeks"}},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:{one:"{0} hour ago",other:"{0} hours ago"},future:{one:"in {0} hour",other:"in {0} hours"}},minute:{current:"this minute",past:{one:"{0} minute ago",other:"{0} minutes ago"},future:{one:"in {0} minute",other:"in {0} minutes"}},second:{current:"now",past:{one:"{0} second ago",other:"{0} seconds ago"},future:{one:"in {0} second",other:"in {0} seconds"}}},short:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},narrow:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},now:{now:{current:"now",future:"in a moment",past:"just now"}},mini:{year:"{0}yr",month:"{0}mo",week:"{0}wk",day:"{0}d",hour:"{0}h",minute:"{0}m",second:"{0}s",now:"now"},"short-time":{year:"{0} yr.",month:"{0} mo.",week:"{0} wk.",day:{one:"{0} day",other:"{0} days"},hour:"{0} hr.",minute:"{0} min.",second:"{0} sec."},"long-time":{year:{one:"{0} year",other:"{0} years"},month:{one:"{0} month",other:"{0} months"},week:{one:"{0} week",other:"{0} weeks"},day:{one:"{0} day",other:"{0} days"},hour:{one:"{0} hour",other:"{0} hours"},minute:{one:"{0} minute",other:"{0} minutes"},second:{one:"{0} second",other:"{0} seconds"}}};function Bu(e,t,n){const r=e.slice();return r[15]=t[n],r}function Gu(e,t,n){const r=e.slice();return r[15]=t[n],r}function Ku(e,t,n){const r=e.slice();return r[8]=t[n],r}function Yu(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function Ju(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function Qu(e,t,n){const r=e.slice();return r[5]=t[n],r}function Zu(e){let t,n,r,i;const o=[nh,th,eh],s=[];function a(e,t){return"table"===e[0]?0:"list"===e[0]?1:2}return t=a(e),n=s[t]=o[t](e),{c(){n.c(),r=S()},m(e,n){s[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?s[t].p(e,i):(K(),Q(s[l],1,1,(()=>{s[l]=null})),Y(),n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){s[t].d(e),e&&b(r)}}}function Xu(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=Ch(Qu(e,r,t));const o=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(10&n){let s;for(r=e[1],s=0;s<r.length;s+=1){const o=Qu(e,r,s);i[s]?(i[s].p(o,n),J(i[s],1)):(i[s]=Ch(o),i[s].c(),J(i[s],1),i[s].m(t.parentNode,t))}for(K(),s=r.length;s<i.length;s+=1)o(s);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&b(t)}}}function eh(e){let n,r,i;const o=[e[4]];var s=e[3][e[0]];function a(e){let n={$$slots:{default:[oh]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return s&&(n=new s(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&oe(n,e,t),_(e,r,t),i=!0},p(e,t){const i=16&t?ne(o,[re(e[4])]):{};if(1048602&t&&(i.$$scope={dirty:t,ctx:e}),s!==(s=e[3][e[0]])){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}s?(n=new s(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),oe(n,r.parentNode,r)):n=null}else s&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function th(e){let t,n,r,i;const o=[ah,sh],s=[];function a(e,t){return e[2]?0:1}return t=a(e),n=s[t]=o[t](e),{c(){n.c(),r=S()},m(e,n){s[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?s[t].p(e,i):(K(),Q(s[l],1,1,(()=>{s[l]=null})),Y(),n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){s[t].d(e),e&&b(r)}}}function nh(e){let t,n,r;var i=e[3].table;function o(e){return{props:{$$slots:{default:[xh]},$$scope:{ctx:e}}}}return i&&(t=new i(o(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&oe(t,e,i),_(e,n,i),r=!0},p(e,r){const s={};if(1048602&r&&(s.$$scope={dirty:r,ctx:e}),i!==(i=e[3].table)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(o(e)),ie(t.$$.fragment),J(t.$$.fragment,1),oe(t,n.parentNode,n)):t=null}else i&&t.$set(s)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function rh(t){let n,r=t[4].raw+"";return{c(){n=I(r)},m(e,t){_(e,n,t)},p(e,t){16&t&&r!==(r=e[4].raw+"")&&N(n,r)},i:e,o:e,d(e){e&&b(n)}}}function ih(e){let t,n;return t=new Sh({props:{tokens:e[1],renderers:e[3]}}),{c(){ie(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.tokens=e[1]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function oh(e){let t,n,r,i;const o=[ih,rh],s=[];function a(e,t){return e[1]?0:1}return t=a(e),n=s[t]=o[t](e),{c(){n.c(),r=S()},m(e,n){s[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?s[t].p(e,i):(K(),Q(s[l],1,1,(()=>{s[l]=null})),Y(),n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){s[t].d(e),e&&b(r)}}}function sh(e){let n,r,i;const o=[{ordered:e[2]},e[4]];var s=e[3].list;function a(e){let n={$$slots:{default:[uh]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return s&&(n=new s(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&oe(n,e,t),_(e,r,t),i=!0},p(e,t){const i=20&t?ne(o,[4&t&&{ordered:e[2]},16&t&&re(e[4])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),s!==(s=e[3].list)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}s?(n=new s(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),oe(n,r.parentNode,r)):n=null}else s&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function ah(e){let n,r,i;const o=[{ordered:e[2]},e[4]];var s=e[3].list;function a(e){let n={$$slots:{default:[ph]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return s&&(n=new s(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&oe(n,e,t),_(e,r,t),i=!0},p(e,t){const i=20&t?ne(o,[4&t&&{ordered:e[2]},16&t&&re(e[4])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),s!==(s=e[3].list)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}s?(n=new s(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),oe(n,r.parentNode,r)):n=null}else s&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function lh(e){let t,n,r;return t=new Sh({props:{tokens:e[15].tokens,renderers:e[3]}}),{c(){ie(t.$$.fragment),n=T()},m(e,i){oe(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};16&n&&(r.tokens=e[15].tokens),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){se(t,e),e&&b(n)}}}function ch(e){let n,r,i;const o=[e[15]];var s=e[3].unorderedlistitem||e[3].listitem;function a(e){let n={$$slots:{default:[lh]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return s&&(n=new s(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&oe(n,e,t),_(e,r,t),i=!0},p(e,t){const i=16&t?ne(o,[re(e[15])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),s!==(s=e[3].unorderedlistitem||e[3].listitem)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}s?(n=new s(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),oe(n,r.parentNode,r)):n=null}else s&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function uh(e){let t,n,r=e[4].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=ch(Bu(e,r,t));const o=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(24&n){let s;for(r=e[4].items,s=0;s<r.length;s+=1){const o=Bu(e,r,s);i[s]?(i[s].p(o,n),J(i[s],1)):(i[s]=ch(o),i[s].c(),J(i[s],1),i[s].m(t.parentNode,t))}for(K(),s=r.length;s<i.length;s+=1)o(s);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&b(t)}}}function hh(e){let t,n,r;return t=new Sh({props:{tokens:e[15].tokens,renderers:e[3]}}),{c(){ie(t.$$.fragment),n=T()},m(e,i){oe(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};16&n&&(r.tokens=e[15].tokens),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){se(t,e),e&&b(n)}}}function dh(e){let n,r,i;const o=[e[15]];var s=e[3].orderedlistitem||e[3].listitem;function a(e){let n={$$slots:{default:[hh]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return s&&(n=new s(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&oe(n,e,t),_(e,r,t),i=!0},p(e,t){const i=16&t?ne(o,[re(e[15])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),s!==(s=e[3].orderedlistitem||e[3].listitem)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}s?(n=new s(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),oe(n,r.parentNode,r)):n=null}else s&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function ph(e){let t,n,r=e[4].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=dh(Gu(e,r,t));const o=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(24&n){let s;for(r=e[4].items,s=0;s<r.length;s+=1){const o=Gu(e,r,s);i[s]?(i[s].p(o,n),J(i[s],1)):(i[s]=dh(o),i[s].c(),J(i[s],1),i[s].m(t.parentNode,t))}for(K(),s=r.length;s<i.length;s+=1)o(s);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&b(t)}}}function fh(e){let t,n,r;return t=new Sh({props:{tokens:e[11],renderers:e[3]}}),{c(){ie(t.$$.fragment),n=T()},m(e,i){oe(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};2&n&&(r.tokens=e[11]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){se(t,e),e&&b(n)}}}function gh(e){let t,n,r;var i=e[3].tablecell;function o(e){return{props:{header:!0,align:e[4].align[e[13]]||"center",$$slots:{default:[fh]},$$scope:{ctx:e}}}}return i&&(t=new i(o(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&oe(t,e,i),_(e,n,i),r=!0},p(e,r){const s={};if(16&r&&(s.align=e[4].align[e[13]]||"center"),1048586&r&&(s.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablecell)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(o(e)),ie(t.$$.fragment),J(t.$$.fragment,1),oe(t,n.parentNode,n)):t=null}else i&&t.$set(s)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function mh(e){let t,n,r=e[1].header,i=[];for(let t=0;t<r.length;t+=1)i[t]=gh(Ju(e,r,t));const o=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(26&n){let s;for(r=e[1].header,s=0;s<r.length;s+=1){const o=Ju(e,r,s);i[s]?(i[s].p(o,n),J(i[s],1)):(i[s]=gh(o),i[s].c(),J(i[s],1),i[s].m(t.parentNode,t))}for(K(),s=r.length;s<i.length;s+=1)o(s);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&b(t)}}}function vh(e){let t,n,r;var i=e[3].tablerow;function o(e){return{props:{$$slots:{default:[mh]},$$scope:{ctx:e}}}}return i&&(t=new i(o(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&oe(t,e,i),_(e,n,i),r=!0},p(e,r){const s={};if(1048602&r&&(s.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablerow)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(o(e)),ie(t.$$.fragment),J(t.$$.fragment,1),oe(t,n.parentNode,n)):t=null}else i&&t.$set(s)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function yh(e){let t,n;return t=new Sh({props:{tokens:e[11],renderers:e[3]}}),{c(){ie(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.tokens=e[11]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function wh(e){let t,n,r;var i=e[3].tablecell;function o(e){return{props:{header:!1,align:e[4].align[e[13]]||"center",$$slots:{default:[yh]},$$scope:{ctx:e}}}}return i&&(t=new i(o(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&oe(t,e,i),_(e,n,i),r=!0},p(e,r){const s={};if(16&r&&(s.align=e[4].align[e[13]]||"center"),1048586&r&&(s.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablecell)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(o(e)),ie(t.$$.fragment),J(t.$$.fragment,1),oe(t,n.parentNode,n)):t=null}else i&&t.$set(s)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function _h(e){let t,n,r=e[8],i=[];for(let t=0;t<r.length;t+=1)i[t]=wh(Yu(e,r,t));const o=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(26&n){let s;for(r=e[8],s=0;s<r.length;s+=1){const o=Yu(e,r,s);i[s]?(i[s].p(o,n),J(i[s],1)):(i[s]=wh(o),i[s].c(),J(i[s],1),i[s].m(t.parentNode,t))}for(K(),s=r.length;s<i.length;s+=1)o(s);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&b(t)}}}function bh(e){let t,n,r;var i=e[3].tablerow;function o(e){return{props:{$$slots:{default:[_h]},$$scope:{ctx:e}}}}return i&&(t=new i(o(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&oe(t,e,i),_(e,n,i),r=!0},p(e,r){const s={};if(1048602&r&&(s.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablerow)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(o(e)),ie(t.$$.fragment),J(t.$$.fragment,1),oe(t,n.parentNode,n)):t=null}else i&&t.$set(s)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function kh(e){let t,n,r=e[1].cells,i=[];for(let t=0;t<r.length;t+=1)i[t]=bh(Ku(e,r,t));const o=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(26&n){let s;for(r=e[1].cells,s=0;s<r.length;s+=1){const o=Ku(e,r,s);i[s]?(i[s].p(o,n),J(i[s],1)):(i[s]=bh(o),i[s].c(),J(i[s],1),i[s].m(t.parentNode,t))}for(K(),s=r.length;s<i.length;s+=1)o(s);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&b(t)}}}function xh(e){let t,n,r,i,o;var s=e[3].tablehead;function a(e){return{props:{$$slots:{default:[vh]},$$scope:{ctx:e}}}}s&&(t=new s(a(e)));var l=e[3].tablebody;function c(e){return{props:{$$slots:{default:[kh]},$$scope:{ctx:e}}}}return l&&(r=new l(c(e))),{c(){t&&ie(t.$$.fragment),n=T(),r&&ie(r.$$.fragment),i=S()},m(e,s){t&&oe(t,e,s),_(e,n,s),r&&oe(r,e,s),_(e,i,s),o=!0},p(e,o){const u={};if(1048602&o&&(u.$$scope={dirty:o,ctx:e}),s!==(s=e[3].tablehead)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}s?(t=new s(a(e)),ie(t.$$.fragment),J(t.$$.fragment,1),oe(t,n.parentNode,n)):t=null}else s&&t.$set(u);const h={};if(1048602&o&&(h.$$scope={dirty:o,ctx:e}),l!==(l=e[3].tablebody)){if(r){K();const e=r;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}l?(r=new l(c(e)),ie(r.$$.fragment),J(r.$$.fragment,1),oe(r,i.parentNode,i)):r=null}else l&&r.$set(h)},i(e){o||(t&&J(t.$$.fragment,e),r&&J(r.$$.fragment,e),o=!0)},o(e){t&&Q(t.$$.fragment,e),r&&Q(r.$$.fragment,e),o=!1},d(e){t&&se(t,e),e&&b(n),e&&b(i),r&&se(r,e)}}}function Ch(e){let n,r;const i=[e[5],{renderers:e[3]}];let o={};for(let e=0;e<i.length;e+=1)o=t(o,i[e]);return n=new Sh({props:o}),{c(){ie(n.$$.fragment)},m(e,t){oe(n,e,t),r=!0},p(e,t){const r=10&t?ne(i,[2&t&&re(e[5]),8&t&&{renderers:e[3]}]):{};n.$set(r)},i(e){r||(J(n.$$.fragment,e),r=!0)},o(e){Q(n.$$.fragment,e),r=!1},d(e){se(n,e)}}}function Ih(e){let t,n,r,i;const o=[Xu,Zu],s=[];function a(e,t){return e[0]?e[3][e[0]]?1:-1:0}return~(t=a(e))&&(n=s[t]=o[t](e)),{c(){n&&n.c(),r=S()},m(e,n){~t&&s[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?~t&&s[t].p(e,i):(n&&(K(),Q(s[l],1,1,(()=>{s[l]=null})),Y()),~t?(n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),J(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){~t&&s[t].d(e),e&&b(r)}}}function Th(e,n,r){const i=["type","tokens","ordered","renderers"];let o=m(n,i),{type:s}=n,{tokens:a}=n,{ordered:l=!1}=n,{renderers:c}=n;return e.$$set=e=>{n=t(t({},n),function(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}(e)),r(4,o=m(n,i)),"type"in e&&r(0,s=e.type),"tokens"in e&&r(1,a=e.tokens),"ordered"in e&&r(2,l=e.ordered),"renderers"in e&&r(3,c=e.renderers)},[s,a,l,c,o]}class Sh extends ce{constructor(e){super(),le(this,e,Th,Ih,s,{type:0,tokens:1,ordered:2,renderers:3})}}function Eh(t){let n;return{c(){n=I(t[1])},m(e,t){_(e,n,t)},p(e,t){2&t&&N(n,e[1])},i:e,o:e,d(e){e&&b(n)}}}function $h(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h6"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Nh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h5"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Rh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h4"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Ph(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h3"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function jh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h2"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function qh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h1"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Oh(e){let t,n,r,i;const o=[qh,jh,Ph,Rh,Nh,$h,Eh],s=[];function a(e,t){return 1===e[0]?0:2===e[0]?1:3===e[0]?2:4===e[0]?3:5===e[0]?4:6===e[0]?5:6}return t=a(e),n=s[t]=o[t](e),{c(){n.c(),r=S()},m(e,n){s[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?s[t].p(e,i):(K(),Q(s[l],1,1,(()=>{s[l]=null})),Y(),n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){s[t].d(e),e&&b(r)}}}function Ah(e,t,n){let{$$slots:r={},$$scope:i}=t,{depth:o}=t,{raw:s}=t;return e.$$set=e=>{"depth"in e&&n(0,o=e.depth),"raw"in e&&n(1,s=e.raw),"$$scope"in e&&n(2,i=e.$$scope)},[o,s,i,r]}function Dh(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("p"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Lh(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Mh(e){let t;const n=e[1].default,r=h(n,e,e[0],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[i]){r&&r.p&&(!t||1&i)&&f(r,n,e,e[0],t?p(n,e[0],i,null):g(e[0]),null)},i(e){t||(J(r,e),t=!0)},o(e){Q(r,e),t=!1},d(e){r&&r.d(e)}}}function zh(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Fh(t){let n,r;return{c(){n=x("img"),c(n.src,r=t[0])||$(n,"src",r),$(n,"title",t[1]),$(n,"alt",t[2])},m(e,t){_(e,n,t)},p(e,[t]){1&t&&!c(n.src,r=e[0])&&$(n,"src",r),2&t&&$(n,"title",e[1]),4&t&&$(n,"alt",e[2])},i:e,o:e,d(e){e&&b(n)}}}function Uh(e,t,n){let{href:r=""}=t,{title:i}=t,{text:o=""}=t;return e.$$set=e=>{"href"in e&&n(0,r=e.href),"title"in e&&n(1,i=e.title),"text"in e&&n(2,o=e.text)},[r,i,o]}function Wh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("a"),i&&i.c(),$(t,"href",e[0]),$(t,"title",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[o]){i&&i.p&&(!n||4&o)&&f(i,r,e,e[2],n?p(r,e[2],o,null):g(e[2]),null),(!n||1&o)&&$(t,"href",e[0]),(!n||2&o)&&$(t,"title",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Vh(e,t,n){let{$$slots:r={},$$scope:i}=t,{href:o=""}=t,{title:s}=t;return e.$$set=e=>{"href"in e&&n(0,o=e.href),"title"in e&&n(1,s=e.title),"$$scope"in e&&n(2,i=e.$$scope)},[o,s,i,r]}function Hh(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("em"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Bh(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Gh(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("del"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Kh(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Yh(t){let n,r,i=t[0].replace(/`/g,"")+"";return{c(){n=x("code"),r=I(i)},m(e,t){_(e,n,t),y(n,r)},p(e,[t]){1&t&&i!==(i=e[0].replace(/`/g,"")+"")&&N(r,i)},i:e,o:e,d(e){e&&b(n)}}}function Jh(e,t,n){let{raw:r}=t;return e.$$set=e=>{"raw"in e&&n(0,r=e.raw)},[r]}function Qh(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("strong"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Zh(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Xh(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("table"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function ed(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function td(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("thead"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function nd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function rd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("tbody"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function id(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function od(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("tr"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function sd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function ad(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("td"),i&&i.c(),$(t,"align",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,o){i&&i.p&&(!n||4&o)&&f(i,r,e,e[2],n?p(r,e[2],o,null):g(e[2]),null),(!n||2&o)&&$(t,"align",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function ld(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("th"),i&&i.c(),$(t,"align",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,o){i&&i.p&&(!n||4&o)&&f(i,r,e,e[2],n?p(r,e[2],o,null):g(e[2]),null),(!n||2&o)&&$(t,"align",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function cd(e){let t,n,r,i;const o=[ld,ad],s=[];function a(e,t){return e[0]?0:1}return t=a(e),n=s[t]=o[t](e),{c(){n.c(),r=S()},m(e,n){s[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?s[t].p(e,i):(K(),Q(s[l],1,1,(()=>{s[l]=null})),Y(),n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){s[t].d(e),e&&b(r)}}}function ud(e,t,n){let{$$slots:r={},$$scope:i}=t,{header:o}=t,{align:s}=t;return e.$$set=e=>{"header"in e&&n(0,o=e.header),"align"in e&&n(1,s=e.align),"$$scope"in e&&n(2,i=e.$$scope)},[o,s,i,r]}function hd(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("ul"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function dd(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("ol"),i&&i.c(),$(t,"start",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,o){i&&i.p&&(!n||4&o)&&f(i,r,e,e[2],n?p(r,e[2],o,null):g(e[2]),null),(!n||2&o)&&$(t,"start",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function pd(e){let t,n,r,i;const o=[dd,hd],s=[];function a(e,t){return e[0]?0:1}return t=a(e),n=s[t]=o[t](e),{c(){n.c(),r=S()},m(e,n){s[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?s[t].p(e,i):(K(),Q(s[l],1,1,(()=>{s[l]=null})),Y(),n=s[t],n?n.p(e,i):(n=s[t]=o[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){s[t].d(e),e&&b(r)}}}function fd(e,t,n){let{$$slots:r={},$$scope:i}=t,{ordered:o}=t,{start:s}=t;return e.$$set=e=>{"ordered"in e&&n(0,o=e.ordered),"start"in e&&n(1,s=e.start),"$$scope"in e&&n(2,i=e.$$scope)},[o,s,i,r]}function gd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("li"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function md(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function vd(t){let n;return{c(){n=x("hr")},m(e,t){_(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function yd(t){let n,r;return{c(){n=new P,r=S(),n.a=r},m(e,i){n.m(t[0],e,i),_(e,r,i)},p(e,[t]){1&t&&n.p(e[0])},i:e,o:e,d(e){e&&b(r),e&&n.d()}}}function wd(e,t,n){let{text:r}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text)},[r]}function _d(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("blockquote"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function bd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function kd(e){let t,n,r;const i=e[2].default,o=h(i,e,e[1],null);return{c(){t=x("pre"),n=x("code"),o&&o.c(),$(t,"class",e[0])},m(e,i){_(e,t,i),y(t,n),o&&o.m(n,null),r=!0},p(e,[n]){o&&o.p&&(!r||2&n)&&f(o,i,e,e[1],r?p(i,e[1],n,null):g(e[1]),null),(!r||1&n)&&$(t,"class",e[0])},i(e){r||(J(o,e),r=!0)},o(e){Q(o,e),r=!1},d(e){e&&b(t),o&&o.d(e)}}}function xd(e,t,n){let{$$slots:r={},$$scope:i}=t,{lang:o}=t;return e.$$set=e=>{"lang"in e&&n(0,o=e.lang),"$$scope"in e&&n(1,i=e.$$scope)},[o,i,r]}var Cd,Id=(function(e){function t(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}(Cd={exports:{}},Cd.exports),Cd.exports);const Td=/[&<>"']/,Sd=/[&<>"']/g,Ed=/[<>"']|&(?!#?\w+;)/,$d=/[<>"']|&(?!#?\w+;)/g,Nd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Rd=e=>Nd[e];const Pd=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function jd(e){return e.replace(Pd,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const qd=/(^|[^\[])\^/g;const Od=/[^\w:]/g,Ad=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const Dd={},Ld=/^[^:]+:\/*[^/]*$/,Md=/^([^:]+:)[\s\S]*$/,zd=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Fd(e,t){Dd[" "+e]||(Ld.test(e)?Dd[" "+e]=e+"/":Dd[" "+e]=Ud(e,"/",!0));const n=-1===(e=Dd[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(Md,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(zd,"$1")+t:e+t}function Ud(e,t,n){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const o=e.charAt(r-i-1);if(o!==t||n){if(o===t||!n)break;i++}else i++}return e.substr(0,r-i)}var Wd={escape:function(e,t){if(t){if(Td.test(e))return e.replace(Sd,Rd)}else if(Ed.test(e))return e.replace($d,Rd);return e},unescape:jd,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(qd,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(jd(n)).replace(Od,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Ad.test(n)&&(n=Fd(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:Fd,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:Ud,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}};const{defaults:Vd}=Id,{rtrim:Hd,splitCells:Bd,escape:Gd,findClosingBracket:Kd}=Wd;function Yd(e,t,n){const r=t.href,i=t.title?Gd(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:o}:{type:"image",raw:n,href:r,title:i,text:Gd(o)}}const{noopTest:Jd,edit:Qd,merge:Zd}=Wd,Xd={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:Jd,table:Jd,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Xd.def=Qd(Xd.def).replace("label",Xd._label).replace("title",Xd._title).getRegex(),Xd.bullet=/(?:[*+-]|\d{1,9}[.)])/,Xd.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,Xd.item=Qd(Xd.item,"gm").replace(/bull/g,Xd.bullet).getRegex(),Xd.listItemStart=Qd(/^( *)(bull) */).replace("bull",Xd.bullet).getRegex(),Xd.list=Qd(Xd.list).replace(/bull/g,Xd.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Xd.def.source+")").getRegex(),Xd._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Xd._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Xd.html=Qd(Xd.html,"i").replace("comment",Xd._comment).replace("tag",Xd._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Xd.paragraph=Qd(Xd._paragraph).replace("hr",Xd.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xd._tag).getRegex(),Xd.blockquote=Qd(Xd.blockquote).replace("paragraph",Xd.paragraph).getRegex(),Xd.normal=Zd({},Xd),Xd.gfm=Zd({},Xd.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Xd.gfm.nptable=Qd(Xd.gfm.nptable).replace("hr",Xd.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xd._tag).getRegex(),Xd.gfm.table=Qd(Xd.gfm.table).replace("hr",Xd.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xd._tag).getRegex(),Xd.pedantic=Zd({},Xd.normal,{html:Qd("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Xd._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Jd,paragraph:Qd(Xd.normal._paragraph).replace("hr",Xd.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Xd.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const ep={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Jd,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Jd,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};ep.punctuation=Qd(ep.punctuation).replace(/punctuation/g,ep._punctuation).getRegex(),ep.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,ep.escapedEmSt=/\\\*|\\_/g,ep._comment=Qd(Xd._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),ep.emStrong.lDelim=Qd(ep.emStrong.lDelim).replace(/punct/g,ep._punctuation).getRegex(),ep.emStrong.rDelimAst=Qd(ep.emStrong.rDelimAst,"g").replace(/punct/g,ep._punctuation).getRegex(),ep.emStrong.rDelimUnd=Qd(ep.emStrong.rDelimUnd,"g").replace(/punct/g,ep._punctuation).getRegex(),ep._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,ep._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,ep._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,ep.autolink=Qd(ep.autolink).replace("scheme",ep._scheme).replace("email",ep._email).getRegex(),ep._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,ep.tag=Qd(ep.tag).replace("comment",ep._comment).replace("attribute",ep._attribute).getRegex(),ep._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ep._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,ep._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,ep.link=Qd(ep.link).replace("label",ep._label).replace("href",ep._href).replace("title",ep._title).getRegex(),ep.reflink=Qd(ep.reflink).replace("label",ep._label).getRegex(),ep.reflinkSearch=Qd(ep.reflinkSearch,"g").replace("reflink",ep.reflink).replace("nolink",ep.nolink).getRegex(),ep.normal=Zd({},ep),ep.pedantic=Zd({},ep.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Qd(/^!?\[(label)\]\((.*?)\)/).replace("label",ep._label).getRegex(),reflink:Qd(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ep._label).getRegex()}),ep.gfm=Zd({},ep.normal,{escape:Qd(ep.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),ep.gfm.url=Qd(ep.gfm.url,"i").replace("email",ep.gfm._extended_email).getRegex(),ep.breaks=Zd({},ep.gfm,{br:Qd(ep.br).replace("{2,}","*").getRegex(),text:Qd(ep.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var tp={block:Xd,inline:ep};const{defaults:np}=Id,{block:rp,inline:ip}=tp,{repeatString:op}=Wd;function sp(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ap(e){let t,n,r="";const i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}var lp=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||np,this.options.tokenizer=this.options.tokenizer||new class{constructor(e){this.options=e||Vd}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Hd(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=Hd(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e}}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:Bd(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,n=e.align.length;for(t=0;t<n;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(n=e.cells.length,t=0;t<n;t++)e.cells[t]=Bd(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const n=t[2],r=n.length>1,i={type:"list",raw:e,ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]},o=t[0].match(this.rules.block.item);let s,a,l,c,u,h,d,p,f,g=!1,m=o.length;l=this.rules.block.listItemStart.exec(o[0]);for(let t=0;t<m;t++){if(s=o[t],e=s,this.options.pedantic||(f=s.match(new RegExp("\\n\\s*\\n {0,"+(l[0].length-1)+"}\\S")),f&&(u=s.length-f.index+o.slice(t+1).join("\n").length,i.raw=i.raw.substring(0,i.raw.length-u),s=s.substring(0,f.index),e=s,m=t+1)),t!==m-1){if(c=this.rules.block.listItemStart.exec(o[t+1]),this.options.pedantic?c[1].length>l[1].length:c[1].length>=l[0].length||c[1].length>3){o.splice(t,2,o[t]+(!this.options.pedantic&&c[1].length<l[0].length&&!o[t].match(/\n$/)?"":"\n")+o[t+1]),t--,m--;continue}(!this.options.pedantic||this.options.smartLists?c[2][c[2].length-1]!==n[n.length-1]:r===(1===c[2].length))&&(u=o.slice(t+1).join("\n").length,i.raw=i.raw.substring(0,i.raw.length-u),t=m-1),l=c}a=s.length,s=s.replace(/^ *([*+-]|\d+[.)]) ?/,""),~s.indexOf("\n ")&&(a-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+a+"}","gm"),"")),s=Hd(s,"\n"),t!==m-1&&(e+="\n"),h=g||/\n\n(?!\s*$)/.test(e),t!==m-1&&(g="\n\n"===e.slice(-2),h||(h=g)),h&&(i.loose=!0),this.options.gfm&&(d=/^\[[ xX]\] /.test(s),p=void 0,d&&(p=" "!==s[1],s=s.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:e,task:d,checked:p,loose:h,text:s})}return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Gd(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:Bd(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r=e.align.length;for(n=0;n<r;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(r=e.cells.length,n=0;n<r;n++)e.cells[n]=Bd(e.cells[n].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Gd(t[1])}}tag(e,t,n){const r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Gd(r[0]):r[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=Hd(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=Kd(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),Yd(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0])}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return Yd(n,e,n[0])}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let i,o,s=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));)if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],i)if(o=i.length,r[3]||r[4])s+=o;else if(!((r[5]||r[6])&&n%3)||(n+o)%3){if(s-=o,!(s>0))return o=Math.min(o,o+s+a),Math.min(n,o)%2?{type:"em",raw:e.slice(0,n+r.index+o+1),text:e.slice(1,n+r.index+o)}:{type:"strong",raw:e.slice(0,n+r.index+o+1),text:e.slice(2,n+r.index+o-1)}}else a+=o}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=Gd(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=Gd(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=Gd(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=Gd(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=Gd(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,n){const r=this.rules.inline.text.exec(e);if(r){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Gd(r[0]):r[0]:Gd(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}},this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:rp.normal,inline:ip.normal};this.options.pedantic?(t.block=rp.pedantic,t.inline=ip.pedantic):this.options.gfm&&(t.block=rp.gfm,this.options.breaks?t.inline=ip.breaks:t.inline=ip.gfm),this.tokenizer.rules=t}static get rules(){return{block:rp,inline:ip}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],n=!0){let r,i,o,s,a,l;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(r=n.call(this,e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),s=t[t.length-1],s&&"paragraph"===s.type?(s.raw+="\n"+r.raw,s.text+="\n"+r.text):t.push(r);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),o=r.items.length,i=0;i<o;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(a=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call(this,n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(n&&(r=this.tokenizer.paragraph(a)))s=t[t.length-1],l&&"paragraph"===s.type?(s.raw+="\n"+r.raw,s.text+="\n"+r.text):t.push(r),l=a.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),s=t[t.length-1],s&&"text"===s.type?(s.raw+="\n"+r.raw,s.text+="\n"+r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}inline(e){let t,n,r,i,o,s;const a=e.length;for(t=0;t<a;t++)switch(s=e[t],s.type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},i=s.header.length,n=0;n<i;n++)s.tokens.header[n]=[],this.inlineTokens(s.header[n],s.tokens.header[n]);for(i=s.cells.length,n=0;n<i;n++)for(o=s.cells[n],s.tokens.cells[n]=[],r=0;r<o.length;r++)s.tokens.cells[n][r]=[],this.inlineTokens(o[r],s.tokens.cells[n][r]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(i=s.items.length,n=0;n<i;n++)this.inline(s.items[n].tokens)}return e}inlineTokens(e,t=[],n=!1,r=!1){let i,o,s,a,l,c,u=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(u));)e.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,a.index)+"["+op("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(u));)u=u.slice(0,a.index)+"["+op("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(u));)u=u.slice(0,a.index)+"++"+u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(i=n.call(this,e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,o=t[t.length-1],o&&"text"===i.type&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),o=t[t.length-1],"link"===i.type?(i.tokens=this.inlineTokens(i.text,[],!0,r),t.push(i)):o&&"text"===i.type&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(i=this.tokenizer.emStrong(e,u,c))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,ap))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,ap))){if(s=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call(this,n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(s,r,sp))e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(c=i.raw.slice(-1)),l=!0,o=t[t.length-1],o&&"text"===o.type?(o.raw+=i.raw,o.text+=i.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(i.raw.length),t.push(i);return t}};const cp={heading:class extends ce{constructor(e){super(),le(this,e,Ah,Oh,s,{depth:0,raw:1})}},paragraph:class extends ce{constructor(e){super(),le(this,e,Lh,Dh,s,{})}},text:class extends ce{constructor(e){super(),le(this,e,zh,Mh,s,{})}},image:class extends ce{constructor(e){super(),le(this,e,Uh,Fh,s,{href:0,title:1,text:2})}},link:class extends ce{constructor(e){super(),le(this,e,Vh,Wh,s,{href:0,title:1})}},em:class extends ce{constructor(e){super(),le(this,e,Bh,Hh,s,{})}},strong:class extends ce{constructor(e){super(),le(this,e,Zh,Qh,s,{})}},codespan:class extends ce{constructor(e){super(),le(this,e,Jh,Yh,s,{raw:0})}},del:class extends ce{constructor(e){super(),le(this,e,Kh,Gh,s,{})}},table:class extends ce{constructor(e){super(),le(this,e,ed,Xh,s,{})}},tablehead:class extends ce{constructor(e){super(),le(this,e,nd,td,s,{})}},tablebody:class extends ce{constructor(e){super(),le(this,e,id,rd,s,{})}},tablerow:class extends ce{constructor(e){super(),le(this,e,sd,od,s,{})}},tablecell:class extends ce{constructor(e){super(),le(this,e,ud,cd,s,{header:0,align:1})}},list:class extends ce{constructor(e){super(),le(this,e,fd,pd,s,{ordered:0,start:1})}},orderedlistitem:null,unorderedlistitem:null,listitem:class extends ce{constructor(e){super(),le(this,e,md,gd,s,{})}},hr:class extends ce{constructor(e){super(),le(this,e,null,vd,s,{})}},html:class extends ce{constructor(e){super(),le(this,e,wd,yd,s,{text:0})}},blockquote:class extends ce{constructor(e){super(),le(this,e,bd,_d,s,{})}},code:class extends ce{constructor(e){super(),le(this,e,xd,kd,s,{lang:0})}}},up={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function hp(e){let t,n;return t=new Sh({props:{tokens:e[0],renderers:e[1]}}),{c(){ie(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.tokens=e[0]),2&n&&(r.renderers=e[1]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function dp(e,t,n){let r,i,o,{source:s=""}=t,{renderers:a={}}=t,{options:l={}}=t;return e.$$set=e=>{"source"in e&&n(2,s=e.source),"renderers"in e&&n(3,a=e.renderers),"options"in e&&n(4,l=e.options)},e.$$.update=()=>{52&e.$$.dirty&&(n(5,i=new lp({...up,...l})),n(0,o=i.lex(s))),8&e.$$.dirty&&n(1,r={...cp,...a})},[o,r,s,a,l,i]}class pp extends ce{constructor(e){super(),le(this,e,dp,hp,s,{source:2,renderers:3,options:4})}}function fp(e){w(e,"svelte-1d9ejew",'.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::before,.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::after{box-sizing:border-box}button.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{text-transform:none}button.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,[type=\'button\'].svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{-webkit-appearance:button}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::-moz-focus-inner{border-style:none;padding:0}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:-moz-focusring{outline:1px dotted ButtonText}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:-moz-ui-invalid{box-shadow:none}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::-webkit-inner-spin-button,.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::-webkit-outer-spin-button{height:auto}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::-webkit-search-decoration{-webkit-appearance:none}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h4.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,p.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{margin:0}button.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{background-color:transparent;background-image:none}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::before,.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}img.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{border-style:solid}textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{resize:vertical}textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::-moz-placeholder{opacity:1;color:#9ca3af}textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::placeholder{opacity:1;color:#9ca3af}button.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{cursor:pointer}h4.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-size:inherit;font-weight:inherit}a.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{color:inherit;text-decoration:inherit}button.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{padding:0;line-height:inherit;color:inherit}img.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,svg.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{display:block;vertical-align:middle}img.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{max-width:100%;height:auto}.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew,.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::before,.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.form-textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}.form-textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}.form-textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::-moz-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:-ms-input-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew::placeholder{color:#6b7280;opacity:1}.prose.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{color:#374151;max-width:65ch}.prose.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-size:1rem;line-height:1.75}.mx-4.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{margin-left:1rem;margin-right:1rem}.mt-4.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{margin-top:1rem}.mt-16.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{margin-top:4rem}.mb-2.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{margin-bottom:0.5rem}.flex.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{display:flex}.h-28.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{height:7rem}.h-12.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{height:3rem}.h-6.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{height:1.5rem}.w-full.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{width:100%}.w-12.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{width:3rem}.w-6.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{width:1.5rem}.max-w-none.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{max-width:none}.flex-grow.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{flex-grow:1}.flex-col.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{flex-direction:column}.items-center.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{align-items:center}.justify-end.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{justify-content:flex-end}.gap-2.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{gap:0.5rem}.gap-4.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{gap:1rem}.space-x-4.svelte-1d9ejew>.svelte-1d9ejew:not([hidden])~.svelte-1d9ejew:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-8.svelte-1d9ejew>.svelte-1d9ejew:not([hidden])~.svelte-1d9ejew:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.self-end.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{align-self:flex-end}.rounded-md.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{border-radius:0.375rem}.rounded-full.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{border-radius:9999px}.border-gray-300.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.bg-gray-100.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-primary-100.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.bg-primary-50.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.py-1.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{padding-top:0.25rem;padding-bottom:0.25rem}.px-6.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{padding-left:1.5rem;padding-right:1.5rem}.py-4.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{padding-top:1rem;padding-bottom:1rem}.px-4.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{padding-left:1rem;padding-right:1rem}.px-2.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{padding-left:0.5rem;padding-right:0.5rem}.py-2.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{padding-top:0.5rem;padding-bottom:0.5rem}.font-sans.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-base.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-size:1rem;line-height:1.5rem}.text-lg.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-size:1.125rem;line-height:1.75rem}.font-medium.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-weight:500}.font-normal.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-weight:400}.font-semibold.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{font-weight:600}.text-gray-600.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-primary-800.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.text-primary-500.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.text-gray-400.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-red-600.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.text-pink-600.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.primary-btn.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe;--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.primary-btn.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity));--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0));--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0));--tw-gradient-to:#ddd6fe}.primary-btn.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:disabled{cursor:not-allowed;opacity:0.7}.primary-btn.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe}.hover\\:bg-primary-200.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:bg-red-100\\/60.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:bg-pink-100\\/60.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:underline.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:hover{text-decoration:underline}.disabled\\:cursor-not-allowed.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:disabled{cursor:not-allowed}.disabled\\:bg-gray-100.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:text-gray-600.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:hover\\:bg-gray-100.svelte-1d9ejew.svelte-1d9ejew.svelte-1d9ejew:disabled:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}')}function gp(e,t,n){const r=e.slice();return r[26]=t[n],r}function mp(t){let n,r,i,o,s,a,l,c;return{c(){n=x("label"),r=x("p"),r.textContent="Add a comment (markdown is supported)",i=T(),o=x("textarea"),$(r,"class","text-gray-600 dark:!text-gray-200 svelte-1d9ejew"),$(o,"class","border-gray-300 dark:!border-gray-600 dark:!bg-gray-800 rounded-md w-full form-textarea font-sans h-28 disabled:cursor-not-allowed svelte-1d9ejew"),$(o,"placeholder",s=t[0].user?"Write your thoughts...":"Login to leave a comment"),o.disabled=a=!t[0].user,$(n,"class","svelte-1d9ejew")},m(e,s){_(e,n,s),y(n,r),y(n,i),y(n,o),R(o,t[4]),l||(c=E(o,"input",t[14]),l=!0)},p(e,t){1&t&&s!==(s=e[0].user?"Write your thoughts...":"Login to leave a comment")&&$(o,"placeholder",s),1&t&&a!==(a=!e[0].user)&&(o.disabled=a),16&t&&R(o,e[4])},i:e,o:e,d(e){e&&b(n),l=!1,c()}}}function vp(e){let t,n,r,i,o;return i=new pp({props:{source:e[4]||"Nothing to preview"}}),{c(){t=x("p"),t.textContent="Add a comment (markdown is supported)",n=T(),r=x("p"),ie(i.$$.fragment),$(t,"class","text-gray-600 dark:!text-gray-200 svelte-1d9ejew"),$(r,"class","text-base prose dark:!prose-dark max-w-none dark:!text-white bg-gray-100 dark:!bg-gray-700 px-6 py-4 svelte-1d9ejew")},m(e,s){_(e,t,s),_(e,n,s),_(e,r,s),oe(i,r,null),o=!0},p(e,t){const n={};16&t&&(n.source=e[4]||"Nothing to preview"),i.$set(n)},i(e){o||(J(i.$$.fragment,e),o=!0)},o(e){Q(i.$$.fragment,e),o=!1},d(e){e&&b(t),e&&b(n),e&&b(r),se(i)}}}function yp(e){let t,n,r,i,o,s,a,l,c,u,h,d,p=(e[3]?e[2].length:"-")+"",f=e[3]&&1==e[2].length?"comment":"comments",g=[],m=new Map,v=e[2];const w=e=>e[26].id;for(let t=0;t<v.length;t+=1){let n=gp(e,v,t),r=w(n);m.set(r,g[t]=kp(r,n))}return{c(){t=x("div"),n=I(p),r=I(" "),i=T(),o=I(f),s=T(),a=x("span"),a.textContent="|",l=T(),c=x("em"),c.innerHTML='Powered by\n        <a href="https://github.com/maggie-j-liu/reactive" rel="noreferrer" target="_blank" class="text-primary-500 font-medium hover:underline svelte-1d9ejew">Reactive</a>',u=T(),h=x("div");for(let e=0;e<g.length;e+=1)g[e].c();$(a,"class","mx-4 text-lg svelte-1d9ejew"),$(c,"class","text-gray-600 dark:!text-gray-300 svelte-1d9ejew"),$(t,"class","mt-4 svelte-1d9ejew"),$(h,"class","space-y-8 svelte-1d9ejew")},m(e,p){_(e,t,p),y(t,n),y(t,r),y(t,i),y(t,o),y(t,s),y(t,a),y(t,l),y(t,c),_(e,u,p),_(e,h,p);for(let e=0;e<g.length;e+=1)g[e].m(h,null);d=!0},p(e,t){(!d||12&t)&&p!==(p=(e[3]?e[2].length:"-")+"")&&N(n,p),(!d||12&t)&&f!==(f=e[3]&&1==e[2].length?"comment":"comments")&&N(o,f),6949&t&&(v=e[2],K(),g=te(g,t,w,1,e,v,m,h,ee,kp,null,gp),Y())},i(e){if(!d){for(let e=0;e<v.length;e+=1)J(g[e]);d=!0}},o(e){for(let e=0;e<g.length;e+=1)Q(g[e]);d=!1},d(e){e&&b(t),e&&b(u),e&&b(h);for(let e=0;e<g.length;e+=1)g[e].d()}}}function wp(e){let t,n,r;function i(){return e[17](e[26])}return{c(){t=x("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" h-6 w-6 text-red-600 dark:!text-red-500 svelte-1d9ejew"><polyline points="3 6 5 6 21 6" class="svelte-1d9ejew"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" class="svelte-1d9ejew"></path><line x1="10" y1="11" x2="10" y2="17" class="svelte-1d9ejew"></line><line x1="14" y1="11" x2="14" y2="17" class="svelte-1d9ejew"></line></svg>',$(t,"class","hover:bg-red-100/60 dark:hover:!bg-red-500/25 px-2 py-2 rounded-full svelte-1d9ejew")},m(e,o){_(e,t,o),n||(r=E(t,"click",i),n=!0)},p(t,n){e=t},d(e){e&&b(t),n=!1,r()}}}function _p(e){let t,n,r,i,o,s=(e[26].likes??0)+"";return{c(){t=x("div"),n=C("svg"),r=C("path"),i=T(),o=I(s),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-1d9ejew"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","h-6 w-6 text-pink-600 svelte-1d9ejew"),$(t,"class","px-2 py-2 flex text-pink-600 font-semibold gap-2 items-center svelte-1d9ejew")},m(e,s){_(e,t,s),y(t,n),y(n,r),y(t,i),y(t,o)},p(e,t){4&t&&s!==(s=(e[26].likes??0)+"")&&N(o,s)},d(e){e&&b(t)}}}function bp(e){let t,n,r,i,o,s,a,l,c=(e[26].likes??0)+"";function u(){return e[18](e[26])}return{c(){t=x("button"),n=C("svg"),r=C("path"),o=T(),s=I(c),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-1d9ejew"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill",i=e[8].includes(e[26].id)?"currentColor":"none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","h-6 w-6 text-pink-600 dark:!text-pink-400 svelte-1d9ejew"),$(t,"class","px-2 py-2 rounded-full hover:bg-pink-100/60 dark:hover:!bg-pink-400/20 flex text-pink-600 dark:!text-pink-400 font-semibold gap-2 items-center svelte-1d9ejew")},m(e,i){_(e,t,i),y(t,n),y(n,r),y(t,o),y(t,s),a||(l=E(t,"click",u),a=!0)},p(t,r){e=t,260&r&&i!==(i=e[8].includes(e[26].id)?"currentColor":"none")&&$(n,"fill",i),4&r&&c!==(c=(e[26].likes??0)+"")&&N(s,c)},d(e){e&&b(t),a=!1,l()}}}function kp(e,t){let n,r,i,o,s,a,l,u,h,d,p,f,g,m,v,w,k,C,S,E,R=t[5][t[26].user].name+"",P=t[9].format(t[26].timestamp)+"";v=new pp({props:{source:t[26].text}});let j=t[0].user&&t[26].user==t[0].user.uid&&wp(t);function q(e,t){return e[0].user?bp:_p}let O=q(t),A=O(t);return{key:e,first:null,c(){n=x("div"),r=x("img"),s=T(),a=x("div"),l=x("h4"),u=I(R),h=T(),d=x("span"),p=I("commented "),f=I(P),g=T(),m=x("p"),ie(v.$$.fragment),w=T(),k=x("div"),j&&j.c(),C=T(),A.c(),S=T(),c(r.src,i=t[5][t[26].user].photo)||$(r,"src",i),$(r,"alt",o=t[5][t[26].user].name+"'s profile picture"),$(r,"class","h-12 w-12 rounded-full svelte-1d9ejew"),$(d,"class","text-base text-gray-400 font-normal svelte-1d9ejew"),$(l,"class","text-lg text-primary-800 dark:!text-primary-300 mb-2 font-medium svelte-1d9ejew"),$(m,"class","text-base prose dark:!prose-dark max-w-none dark:!text-white svelte-1d9ejew"),$(k,"class","w-full flex justify-end items-center gap-2 svelte-1d9ejew"),$(a,"class","bg-primary-50 dark:!bg-gray-700 flex-grow px-6 py-4 svelte-1d9ejew"),$(n,"class","flex gap-4 svelte-1d9ejew"),this.first=n},m(e,t){_(e,n,t),y(n,r),y(n,s),y(n,a),y(a,l),y(l,u),y(l,h),y(l,d),y(d,p),y(d,f),y(a,g),y(a,m),oe(v,m,null),y(a,w),y(a,k),j&&j.m(k,null),y(k,C),A.m(k,null),y(n,S),E=!0},p(e,n){t=e,(!E||36&n&&!c(r.src,i=t[5][t[26].user].photo))&&$(r,"src",i),(!E||36&n&&o!==(o=t[5][t[26].user].name+"'s profile picture"))&&$(r,"alt",o),(!E||36&n)&&R!==(R=t[5][t[26].user].name+"")&&N(u,R),(!E||4&n)&&P!==(P=t[9].format(t[26].timestamp)+"")&&N(f,P);const s={};4&n&&(s.source=t[26].text),v.$set(s),t[0].user&&t[26].user==t[0].user.uid?j?j.p(t,n):(j=wp(t),j.c(),j.m(k,C)):j&&(j.d(1),j=null),O===(O=q(t))&&A?A.p(t,n):(A.d(1),A=O(t),A&&(A.c(),A.m(k,null)))},i(e){E||(J(v.$$.fragment,e),E=!0)},o(e){Q(v.$$.fragment,e),E=!1},d(e){e&&b(n),se(v),j&&j.d(),A.d()}}}function xp(e){let t,n,r,o,s,a,l,c,u,h,d,p,f,g,m,v,w=e[7]?"Edit":"Preview";const k=[vp,mp],C=[];function S(e,t){return e[7]?0:1}n=S(e),r=C[n]=k[n](e);let R=e[6]&&yp(e);return{c(){t=x("div"),r.c(),o=T(),s=x("div"),a=x("button"),l=I(w),u=T(),h=x("button"),d=I("Submit"),f=T(),R&&R.c(),$(a,"class","dark:!bg-primary-600 dark:hover:!bg-primary-500 dark:disabled:!bg-gray-500 dark:!text-white dark:disabled:!text-gray-300 text-lg bg-primary-100 hover:bg-primary-200 text-primary-800 px-4 py-1 rounded-md disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-600 svelte-1d9ejew"),a.disabled=c=!e[0].user||!e[4],$(h,"type","button"),$(h,"class","dark:!from-primary-600 dark:hover:!from-primary-500 dark:disabled:hover:!from-primary-600 dark:!via-blue-500 dark:hover:!via-blue-400 dark:disabled:hover:!via-blue-500 dark:!to-purple-600 dark:hover:!to-purple-500 dark:disabled:hover:!to-purple-600 dark:!text-white text-lg primary-btn px-4 py-1 svelte-1d9ejew"),h.disabled=p=!e[0].user||!e[4],$(s,"class","self-end space-x-4 svelte-1d9ejew"),$(t,"class","flex flex-col gap-4 mt-16 text-base w-full svelte-1d9ejew")},m(r,i){_(r,t,i),C[n].m(t,null),y(t,o),y(t,s),y(s,a),y(a,l),y(s,u),y(s,h),y(h,d),y(t,f),R&&R.m(t,null),g=!0,m||(v=[E(a,"click",e[15]),E(h,"click",e[16])],m=!0)},p(e,[i]){let s=n;n=S(e),n===s?C[n].p(e,i):(K(),Q(C[s],1,1,(()=>{C[s]=null})),Y(),r=C[n],r?r.p(e,i):(r=C[n]=k[n](e),r.c()),J(r,1),r.m(t,o)),(!g||128&i)&&w!==(w=e[7]?"Edit":"Preview")&&N(l,w),(!g||17&i&&c!==(c=!e[0].user||!e[4]))&&(a.disabled=c),(!g||17&i&&p!==(p=!e[0].user||!e[4]))&&(h.disabled=p),e[6]?R?(R.p(e,i),64&i&&J(R,1)):(R=yp(e),R.c(),J(R,1),R.m(t,null)):R&&(K(),Q(R,1,1,(()=>{R=null})),Y())},i(e){g||(J(r),J(R),g=!0)},o(e){Q(r),Q(R),g=!1},d(e){e&&b(t),C[n].d(),R&&R.d(),m=!1,i(v)}}}function Cp(t,n,r){let i,o=e;t.$$.on_destroy.push((()=>o())),Uu.addDefaultLocale(Hu);const s=new Uu("en-US");let a,l,c,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=Ql();a=e.authStore,o(),o=u(a,(e=>r(0,i=e))),l=e.loginWithGoogle,c=e.logout}catch(e){throw e}const d=Bl();let p=[],f=!1,g="",m={},v=!1,y=!1,w=[];q((()=>{Fl(ql(d,"users/info"),(e=>{r(5,m=e.val()??{}),r(6,v=!0)}),{onlyOnce:!0})}));const _=()=>{if(!i.user||!g)return;const e=`posts/${oc(h)}/comments`,t=function(e,t){e=Ke(e),Za("push",e._path),Ka("push",t,e._path,!0);const n=ll(e._repo),r=Eo(n),i=Ol(e,r),o=Ol(e,r);let s;return s=null!=t?Al(o,t).then((()=>o)):Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}(ql(d,e),{user:i.user.uid,text:g,timestamp:Gl,likes:0}).key;r(2,p=[{id:t,user:i.user.uid,text:g,timestamp:Date.now(),likes:0},...p]),r(4,g=""),r(7,y=!1)},b=async e=>{i.user&&e.user==i.user.uid&&(await Al(ql(d,`posts/${oc(h)}/comments/${e.id}`),null),r(2,p=p.filter((t=>t.id!==e.id))))},k=async e=>{w.includes(e.id)?(async e=>{if(!i.user)return;const t={};t[`posts/${oc(h)}/comments/${e.id}/likes`]=Kl(-1),t[`users/activity/${i.user.uid}/${oc(h)}/commentLikes/${e.id}`]=null,await Dl(ql(d),t),e.likes--,r(2,p=[...p]),r(8,w=w.filter((t=>t!==e.id)))})(e):(async e=>{if(!i.user)return;const t={};t[`posts/${oc(h)}/comments/${e.id}/likes`]=Kl(1),t[`users/activity/${i.user.uid}/${oc(h)}/commentLikes/${e.id}`]=!0,await Dl(ql(d),t),e.likes++,r(2,p=[...p]),r(8,w=[...w,e.id])})(e)};return t.$$set=e=>{"page"in e&&r(13,h=e.page)},t.$$.update=()=>{if(8193&t.$$.dirty){Fl(function(e,...t){let n=Ke(e);for(const e of t)n=e._apply(n);return n}(ql(d,`posts/${oc(h)}/comments`),function(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Qa("orderByChild","path",e,!1),new Ul(e)}("timestamp")),(e=>{var t;t=Object.entries(e.val()??{}).map((([e,t])=>({id:e,...t}))).reverse(),r(2,p=t),r(3,f=!0)}),{onlyOnce:!0}),i.user?Fl(ql(d,`users/activity/${i.user.uid}/${oc(h)}/commentLikes`),(e=>{var t;t=e.val()??{},r(8,w=Object.keys(t))}),{onlyOnce:!0}):r(8,w=[])}},[i,a,p,f,g,m,v,y,w,s,_,b,k,h,function(){g=this.value,r(4,g)},()=>{r(7,y=!y)},()=>_(),e=>b(e),e=>k(e)]}class Ip extends ce{constructor(e){super(),le(this,e,Cp,xp,s,{page:13},fp)}}function Tp(e){w(e,"svelte-4h4i2m",'.fixed{position:fixed}.top-6{top:1.5rem}.right-6{right:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-16{margin-top:4rem;margin-bottom:4rem}.mx-4{margin-left:1rem;margin-right:1rem}.mt-4{margin-top:1rem}.mt-16{margin-top:4rem}.mb-2{margin-bottom:0.5rem}.mt-8{margin-top:2rem}.mr-2{margin-right:0.5rem}.flex{display:flex}.hidden{display:none}.h-9{height:2.25rem}.h-28{height:7rem}.h-12{height:3rem}.h-6{height:1.5rem}.h-4{height:1rem}.w-full{width:100%}.w-12{width:3rem}.w-6{width:1.5rem}.w-4{width:1rem}.max-w-none{max-width:none}.flex-grow{flex-grow:1}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.gap-10{gap:2.5rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.self-end{align-self:flex-end}.rounded-md{border-radius:0.375rem}.rounded-full{border-radius:9999px}.\\!rounded-lg{border-radius:0.5rem !important}.border-gray-300{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-primary-100{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.bg-primary-50{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.bg-primary-200{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-primary-100{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.via-blue-100{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.to-purple-100{--tw-gradient-to:#ede9fe}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.\\!px-3{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!py-1\\.5{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!py-1{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.font-sans{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.text-primary-600{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.text-primary-900{--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-primary-800{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.text-primary-500{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-red-600{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.text-pink-600{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!ring-primary-500{--tw-ring-opacity:1 !important;--tw-ring-color:rgba(14, 165, 233, var(--tw-ring-opacity)) !important}.filter{filter:var(--tw-filter)}.prose{color:#374151;max-width:65ch}.prose [class~="lead"]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#111827;text-decoration:underline;font-weight:500}.prose strong{color:#111827;font-weight:600}.prose ol[type="A"]{--list-counter-style:upper-alpha}.prose ol[type="a"]{--list-counter-style:lower-alpha}.prose ol[type="A" s]{--list-counter-style:upper-alpha}.prose ol[type="a" s]{--list-counter-style:lower-alpha}.prose ol[type="I"]{--list-counter-style:upper-roman}.prose ol[type="i"]{--list-counter-style:lower-roman}.prose ol[type="I" s]{--list-counter-style:upper-roman}.prose ol[type="i" s]{--list-counter-style:lower-roman}.prose ol[type="1"]{--list-counter-style:decimal}.prose ol>li{position:relative;padding-left:1.75em}.prose ol>li::before{content:counter(list-item, var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#6b7280;left:0}.prose ul>li{position:relative;padding-left:1.75em}.prose ul>li::before{content:"";position:absolute;background-color:#d1d5db;border-radius:50%;width:0.375em;height:0.375em;top:calc(0.875em - 0.1875em);left:0.25em}.prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose blockquote{font-weight:500;font-style:italic;color:#111827;border-left-width:0.25rem;border-left-color:#e5e7eb;quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.prose blockquote p:first-of-type::before{content:open-quote}.prose blockquote p:last-of-type::after{content:close-quote}.prose h1{color:#111827;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111}.prose h2{color:#111827;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h3{color:#111827;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6}.prose h4{color:#111827;font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5}.prose figure figcaption{color:#6b7280;font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em}.prose code{color:#111827;font-weight:600;font-size:0.875em}.prose code::before{content:"`"}.prose code::after{content:"`"}.prose a code{color:#111827}.prose pre{color:#e5e7eb;background-color:#1f2937;overflow-x:auto;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em}.prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose pre code::before{content:none}.prose pre code::after{content:none}.prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857}.prose thead{color:#111827;font-weight:600;border-bottom-width:1px;border-bottom-color:#d1d5db}.prose thead th{vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.prose tbody tr:last-child{border-bottom-width:0}.prose tbody td{vertical-align:top;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25em;margin-bottom:1.25em}.prose img{margin-top:2em;margin-bottom:2em}.prose video{margin-top:2em;margin-bottom:2em}.prose figure{margin-top:2em;margin-bottom:2em}.prose figure>*{margin-top:0;margin-bottom:0}.prose h2 code{font-size:0.875em}.prose h3 code{font-size:0.9em}.prose ol{margin-top:1.25em;margin-bottom:1.25em}.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:0.5em;margin-bottom:0.5em}.prose>ul>li p{margin-top:0.75em;margin-bottom:0.75em}.prose>ul>li>*:first-child{margin-top:1.25em}.prose>ul>li>*:last-child{margin-bottom:1.25em}.prose>ol>li>*:first-child{margin-top:1.25em}.prose>ol>li>*:last-child{margin-bottom:1.25em}.prose ul ul,.prose ul ol,.prose ol ul,.prose ol ol{margin-top:0.75em;margin-bottom:0.75em}.prose hr+*{margin-top:0}.prose h2+*{margin-top:0}.prose h3+*{margin-top:0}.prose h4+*{margin-top:0}.prose thead th:first-child{padding-left:0}.prose thead th:last-child{padding-right:0}.prose tbody td:first-child{padding-left:0}.prose tbody td:last-child{padding-right:0}.prose>:first-child{margin-top:0}.prose>:last-child{margin-bottom:0}.hover\\:bg-primary-100:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.hover\\:bg-primary-200:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:bg-red-100\\/60:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:bg-pink-100\\/60:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:bg-primary-50:hover{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.hover\\:from-primary-200:hover{--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0))}.hover\\:via-blue-200:hover{--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0))}.hover\\:to-purple-200:hover{--tw-gradient-to:#ddd6fe}.hover\\:underline:hover{text-decoration:underline}.hover\\:\\!shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!ring-2:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:text-gray-600:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:opacity-70:disabled{opacity:0.7}.disabled\\:hover\\:bg-gray-100:disabled:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:hover\\:from-primary-100:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.disabled\\:hover\\:via-blue-100:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.dark .dark\\:\\!prose-dark{color:#fff !important}.dark .dark\\:\\!prose-dark h1{color:inherit !important}.dark .dark\\:\\!prose-dark h2{color:inherit !important}.dark .dark\\:\\!prose-dark h3{color:inherit !important}.dark .dark\\:\\!prose-dark h4{color:inherit !important}.dark .dark\\:\\!prose-dark h5{color:inherit !important}.dark .dark\\:\\!prose-dark h6{color:inherit !important}.dark .dark\\:\\!prose-dark a{color:#7dd3fc !important}.dark .dark\\:\\!prose-dark blockquote{color:inherit !important}.dark .dark\\:\\!prose-dark strong{color:inherit !important}.dark .dark\\:\\!prose-dark code{font-weight:inherit !important}.dark .dark\\:\\!border-gray-600{--tw-border-opacity:1 !important;border-color:rgba(75, 85, 99, var(--tw-border-opacity)) !important}.dark .dark\\:\\!bg-gray-700{--tw-bg-opacity:1 !important;background-color:rgba(55, 65, 81, var(--tw-bg-opacity)) !important}.dark .dark\\:\\!bg-gray-800{--tw-bg-opacity:1 !important;background-color:rgba(31, 41, 55, var(--tw-bg-opacity)) !important}.dark .dark\\:\\!bg-primary-600{--tw-bg-opacity:1 !important;background-color:rgba(2, 132, 199, var(--tw-bg-opacity)) !important}.dark .dark\\:\\!bg-primary-800{--tw-bg-opacity:1 !important;background-color:rgba(7, 89, 133, var(--tw-bg-opacity)) !important}.dark .dark\\:from-primary-600{--tw-gradient-from:#0284c7;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0))}.dark .dark\\:\\!from-primary-600{--tw-gradient-from:#0284c7 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0)) !important}.dark .dark\\:via-blue-500{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0))}.dark .dark\\:\\!via-blue-500{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0)) !important}.dark .dark\\:to-purple-600{--tw-gradient-to:#7c3aed}.dark .dark\\:\\!to-purple-600{--tw-gradient-to:#7c3aed !important}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.dark .dark\\:text-primary-400{--tw-text-opacity:1;color:rgba(56, 189, 248, var(--tw-text-opacity))}.dark .dark\\:\\!text-gray-200{--tw-text-opacity:1 !important;color:rgba(229, 231, 235, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-white{--tw-text-opacity:1 !important;color:rgba(255, 255, 255, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-gray-300{--tw-text-opacity:1 !important;color:rgba(209, 213, 219, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-primary-300{--tw-text-opacity:1 !important;color:rgba(125, 211, 252, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-red-500{--tw-text-opacity:1 !important;color:rgba(239, 68, 68, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-pink-400{--tw-text-opacity:1 !important;color:rgba(244, 114, 182, var(--tw-text-opacity)) !important}.dark .dark\\:hover\\:\\!bg-primary-500:hover{--tw-bg-opacity:1 !important;background-color:rgba(14, 165, 233, var(--tw-bg-opacity)) !important}.dark .dark\\:hover\\:\\!bg-red-500\\/25:hover{background-color:rgba(239, 68, 68, 0.25) !important}.dark .dark\\:hover\\:\\!bg-pink-400\\/20:hover{background-color:rgba(244, 114, 182, 0.2) !important}.dark .dark\\:hover\\:\\!bg-primary-600:hover{--tw-bg-opacity:1 !important;background-color:rgba(2, 132, 199, var(--tw-bg-opacity)) !important}.dark .dark\\:hover\\:from-primary-500:hover{--tw-gradient-from:#0ea5e9;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 165, 233, 0))}.dark .dark\\:hover\\:\\!from-primary-500:hover{--tw-gradient-from:#0ea5e9 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 165, 233, 0)) !important}.dark .dark\\:hover\\:via-blue-400:hover{--tw-gradient-stops:var(--tw-gradient-from), #60a5fa, var(--tw-gradient-to, rgba(96, 165, 250, 0))}.dark .dark\\:hover\\:\\!via-blue-400:hover{--tw-gradient-stops:var(--tw-gradient-from), #60a5fa, var(--tw-gradient-to, rgba(96, 165, 250, 0)) !important}.dark .dark\\:hover\\:to-purple-500:hover{--tw-gradient-to:#8b5cf6}.dark .dark\\:hover\\:\\!to-purple-500:hover{--tw-gradient-to:#8b5cf6 !important}.dark .dark\\:disabled\\:\\!bg-gray-500:disabled{--tw-bg-opacity:1 !important;background-color:rgba(107, 114, 128, var(--tw-bg-opacity)) !important}.dark .dark\\:disabled\\:\\!text-gray-300:disabled{--tw-text-opacity:1 !important;color:rgba(209, 213, 219, var(--tw-text-opacity)) !important}.dark .dark\\:disabled\\:hover\\:\\!from-primary-600:disabled:hover{--tw-gradient-from:#0284c7 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0)) !important}.dark .dark\\:disabled\\:hover\\:\\!via-blue-500:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0)) !important}.dark .dark\\:disabled\\:hover\\:\\!to-purple-600:disabled:hover{--tw-gradient-to:#7c3aed !important}')}class Sp extends ce{constructor(e){super(),le(this,e,null,null,s,{},Tp)}}const{document:Ep}=Z;function $p(e){w(e,"svelte-1ybquzl",'.svelte-1ybquzl,.svelte-1ybquzl::before,.svelte-1ybquzl::after{box-sizing:border-box}button.svelte-1ybquzl{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1ybquzl{text-transform:none}button.svelte-1ybquzl,[type=\'button\'].svelte-1ybquzl{-webkit-appearance:button}.svelte-1ybquzl::-moz-focus-inner{border-style:none;padding:0}.svelte-1ybquzl:-moz-focusring{outline:1px dotted ButtonText}.svelte-1ybquzl:-moz-ui-invalid{box-shadow:none}.svelte-1ybquzl::-webkit-inner-spin-button,.svelte-1ybquzl::-webkit-outer-spin-button{height:auto}.svelte-1ybquzl::-webkit-search-decoration{-webkit-appearance:none}.svelte-1ybquzl::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h2.svelte-1ybquzl,h3.svelte-1ybquzl{margin:0}button.svelte-1ybquzl{background-color:transparent;background-image:none}.svelte-1ybquzl,.svelte-1ybquzl::before,.svelte-1ybquzl::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1ybquzl{cursor:pointer}h2.svelte-1ybquzl,h3.svelte-1ybquzl{font-size:inherit;font-weight:inherit}button.svelte-1ybquzl{padding:0;line-height:inherit;color:inherit}.svelte-1ybquzl,.svelte-1ybquzl::before,.svelte-1ybquzl::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}main.svelte-1ybquzl{margin:0;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n        "Noto Color Emoji";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-text-size-adjust:100%}.mx-auto.svelte-1ybquzl{margin-left:auto;margin-right:auto}.my-16.svelte-1ybquzl{margin-top:4rem;margin-bottom:4rem}.mt-4.svelte-1ybquzl{margin-top:1rem}.flex.svelte-1ybquzl{display:flex}.hidden.svelte-1ybquzl{display:none}.h-9.svelte-1ybquzl{height:2.25rem}.w-full.svelte-1ybquzl{width:100%}.flex-col.svelte-1ybquzl{flex-direction:column}.items-center.svelte-1ybquzl{align-items:center}.gap-10.svelte-1ybquzl{gap:2.5rem}.gap-2.svelte-1ybquzl{gap:0.5rem}.text-3xl.svelte-1ybquzl{font-size:1.875rem;line-height:2.25rem}.text-2xl.svelte-1ybquzl{font-size:1.5rem;line-height:2rem}.font-bold.svelte-1ybquzl{font-weight:700}.font-medium.svelte-1ybquzl{font-weight:500}.text-primary-600.svelte-1ybquzl{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.text-gray-700.svelte-1ybquzl{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.primary-btn.svelte-1ybquzl{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.primary-btn.svelte-1ybquzl:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity));--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0));--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0));--tw-gradient-to:#ddd6fe}')}function Np(t){let n;return{c(){n=x("div"),$(n,"class","h-9 svelte-1ybquzl")},m(e,t){_(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function Rp(t){let n,r,i,s,a;return{c(){n=x("div"),r=x("button"),r.textContent="Login",i=I("\n      to add reactions and comments."),$(r,"type","button"),$(r,"class","primary-btn text-md dark:from-primary-600 dark:hover:from-primary-500 dark:via-blue-500 dark:hover:via-blue-400 dark:to-purple-600 dark:hover:to-purple-500 dark:text-white svelte-1ybquzl"),$(n,"class","svelte-1ybquzl")},m(e,l){_(e,n,l),y(n,r),y(n,i),s||(a=E(r,"click",(function(){o(t[5])&&t[5].apply(this,arguments)})),s=!0)},p(e,n){t=e},i:e,o:e,d(e){e&&b(n),s=!1,a()}}}function Pp(e){let t,n,r,i,s,a,l,c,u,h,d,p,f,g=e[7].user.displayName+"";return u=new ec({}),{c(){t=x("div"),n=x("h2"),r=I("Hi "),i=x("span"),s=I(g),a=I(" 👋!"),l=T(),c=x("button"),ie(u.$$.fragment),h=I("\n        Logout"),$(i,"class","text-primary-600 dark:text-primary-400 svelte-1ybquzl"),$(n,"class","text-3xl font-bold svelte-1ybquzl"),$(c,"type","button"),$(c,"class","flex items-center gap-2 text-md primary-btn dark:from-primary-600 dark:hover:from-primary-500 dark:via-blue-500 dark:hover:via-blue-400 dark:to-purple-600 dark:hover:to-purple-500 dark:text-white svelte-1ybquzl"),$(t,"class","flex gap-10 items-center svelte-1ybquzl")},m(g,m){_(g,t,m),y(t,n),y(n,r),y(n,i),y(i,s),y(n,a),y(t,l),y(t,c),oe(u,c,null),y(c,h),d=!0,p||(f=E(c,"click",(function(){o(e[6])&&e[6].apply(this,arguments)})),p=!0)},p(t,n){e=t,(!d||128&n)&&g!==(g=e[7].user.displayName+"")&&N(s,g)},i(e){d||(J(u.$$.fragment,e),d=!0)},o(e){Q(u.$$.fragment,e),d=!1},d(e){e&&b(t),se(u),p=!1,f()}}}function jp(e){let t,n,r,i,o,s,a,l,c,u,h,d,p,f,g,m,v;const w=[Pp,Rp,Np],k=[];function C(e,t){return e[7].user?0:e[7].loading?2:1}return i=C(e),o=k[i]=w[i](e),d=new hc({props:{page:e[1],reactions:e[0]}}),f=new Ip({props:{page:e[1]}}),m=new Sp({}),{c(){t=x("meta"),n=T(),r=x("main"),o.c(),s=T(),a=x("div"),a.textContent="Thanks for using Webmonetization to support this site.",l=T(),c=x("h3"),u=I(e[2]),h=T(),ie(d.$$.fragment),p=T(),ie(f.$$.fragment),g=T(),ie(m.$$.fragment),$(t,"name","monetization"),$(t,"content",e[3]),$(t,"class","svelte-1ybquzl"),$(a,"class","hidden dark:text-white text-gray-700 svelte-1ybquzl"),$(a,"id","exclusive"),$(c,"class","text-2xl mt-4 font-medium svelte-1ybquzl"),$(r,"class","w-full mx-auto flex flex-col items-center my-16 dark:text-white svelte-1ybquzl")},m(e,o){y(Ep.head,t),_(e,n,o),_(e,r,o),k[i].m(r,null),y(r,s),y(r,a),y(r,l),y(r,c),y(c,u),y(r,h),oe(d,r,null),y(r,p),oe(f,r,null),_(e,g,o),oe(m,e,o),v=!0},p(e,[n]){(!v||8&n)&&$(t,"content",e[3]);let a=i;i=C(e),i===a?k[i].p(e,n):(K(),Q(k[a],1,1,(()=>{k[a]=null})),Y(),o=k[i],o?o.p(e,n):(o=k[i]=w[i](e),o.c()),J(o,1),o.m(r,s)),(!v||4&n)&&N(u,e[2]);const l={};2&n&&(l.page=e[1]),1&n&&(l.reactions=e[0]),d.$set(l);const c={};2&n&&(c.page=e[1]),f.$set(c)},i(e){v||(J(o),J(d.$$.fragment,e),J(f.$$.fragment,e),J(m.$$.fragment,e),v=!0)},o(e){Q(o),Q(d.$$.fragment,e),Q(f.$$.fragment,e),Q(m.$$.fragment,e),v=!1},d(e){b(t),e&&b(n),e&&b(r),k[i].d(),se(d),se(f),e&&b(g),se(m,e)}}}function qp(t,n,r){let i,o=e;t.$$.on_destroy.push((()=>o()));let s,a,l,{firebaseConfig:c}=n,{reactions:h=["😭","😕","😀","🤩"]}=n,{page:d=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n,{reactionText:p="Did you enjoy this post? Leave your reactions below!"}=n,{paymentPointer:f="$ilp.uphold.com/LJmbPn7WD4JB"}=n;if(!c)throw new Error("No firebaseConfig was provided");Array.from(ct.values()).length||function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw ft.create("bad-app-name",{appName:String(r)});if(ct.has(r))throw ft.create("duplicate-app",{appName:r});const i=new Xe(r);for(const e of ut.values())i.addComponent(e);const o=new gt(e,n,i);ct.set(r,o)}(c);try{const e=Ql();s=e.authStore,o(),o=u(s,(e=>r(7,i=e))),a=e.loginWithGoogle,l=e.logout}catch(e){throw e}return document.monetization&&document.monetization.addEventListener("monetizationstart",(()=>{console.log("started"),document.getElementById("exclusive").classList.remove("hidden")})),t.$$set=e=>{"firebaseConfig"in e&&r(8,c=e.firebaseConfig),"reactions"in e&&r(0,h=e.reactions),"page"in e&&r(1,d=e.page),"reactionText"in e&&r(2,p=e.reactionText),"paymentPointer"in e&&r(3,f=e.paymentPointer)},[h,d,p,f,s,a,l,i,c]}class Op extends ce{constructor(e){super(),le(this,e,qp,jp,s,{firebaseConfig:8,reactions:0,page:1,reactionText:2,paymentPointer:3},$p)}}const Ap={install:({firebaseConfig:e,reactions:t,page:n,reactionText:r,paymentPointer:i})=>{const o=document.getElementById("reactive_widget");new Op({target:o,props:{firebaseConfig:e,page:n,reactions:t,reactionText:r,paymentPointer:i}})}};export{Ap as default};
