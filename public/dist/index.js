!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reactive=t()}(this,(function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,l;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function u(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(e,t,n,r){if(e){const i=d(e,t,n,r);return e[0](i)}}function d(e,n,r,i){return e[1]&&i?t(r.ctx.slice(),e[1](i(n))):r.ctx}function p(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function f(e,t,n,r,i,s){if(i){const o=d(t,n,r,s);e.p(o,i)}}function g(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function m(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function v(e){return null==e?"":e}function y(e,t){e.appendChild(t)}function w(e,t,n){const r=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!r.getElementById(t)){const e=k("style");e.id=t,e.textContent=n,function(e,t){y(e.head||e,t)}(r,e)}}function _(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function x(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function C(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function T(){return I(" ")}function S(){return I("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}class z{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=k(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}function P(e){l=e}function O(){if(!l)throw new Error("Function called outside component initialization");return l}function A(e){O().$$.on_mount.push(e)}function D(){const e=O();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const i=function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(t,n);r.slice().forEach((t=>{t.call(e,i)}))}}}const L=[],M=[],F=[],U=[],j=Promise.resolve();let q=!1;function W(e){F.push(e)}const V=new Set;let B=0;function H(){const e=l;do{for(;B<L.length;){const e=L[B];B++,P(e),G(e.$$)}for(P(null),L.length=0,B=0;M.length;)M.pop()();for(let e=0;e<F.length;e+=1){const t=F[e];V.has(t)||(V.add(t),t())}F.length=0}while(L.length);for(;U.length;)U.pop()();q=!1,V.clear(),P(e)}function G(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}const K=new Set;let Y;function Q(){Y={r:0,c:[],p:Y}}function J(){Y.r||i(Y.c),Y=Y.p}function Z(e,t){e&&e.i&&(K.delete(e),e.i(t))}function X(e,t,n,r){if(e&&e.o){if(K.has(e))return;K.add(e),Y.c.push((()=>{K.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ee="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function te(e,t){e.d(1),t.delete(e.key)}function ne(e,t){X(e,1,1,(()=>{t.delete(e.key)}))}function re(e,t,n,r,i,s,o,a,l,c,u,h){let d=e.length,p=s.length,f=d;const g={};for(;f--;)g[e[f].key]=f;const m=[],v=new Map,y=new Map;for(f=p;f--;){const e=h(i,s,f),a=n(e);let l=o.get(a);l?r&&l.p(e,t):(l=c(a,e),l.c()),v.set(a,m[f]=l),a in g&&y.set(a,Math.abs(f-g[a]))}const w=new Set,_=new Set;function b(e){Z(e,1),e.m(a,u),o.set(e.key,e),u=e.first,p--}for(;d&&p;){const t=m[p-1],n=e[d-1],r=t.key,i=n.key;t===n?(u=t.first,d--,p--):v.has(i)?!o.has(r)||w.has(r)?b(t):_.has(i)?d--:y.get(r)>y.get(i)?(_.add(r),b(t)):(w.add(i),d--):(l(n,o),d--)}for(;d--;){const t=e[d];v.has(t.key)||l(t,o)}for(;p;)b(m[p-1]);return m}function ie(e,t){const n={},r={},i={$$scope:1};let s=e.length;for(;s--;){const o=e[s],a=t[s];if(a){for(const e in o)e in a||(r[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[s]=a}else for(const e in o)i[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function se(e){return"object"==typeof e&&null!==e?e:{}}function oe(e){e&&e.c()}function ae(e,t,r,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=e.$$;a&&a.m(t,r),o||W((()=>{const t=l.map(n).filter(s);c?c.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(W)}function le(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){-1===e.$$.dirty[0]&&(L.push(e),q||(q=!0,j.then(H)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(t,n,s,o,a,c,u,h=[-1]){const d=l;P(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};u&&u(p.root);let f=!1;if(p.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),f&&ce(t,e)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(b)}else p.fragment&&p.fragment.c();n.intro&&Z(t.$$.fragment),ae(t,n.target,n.anchor,n.customElement),H()}P(d)}class he{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
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
    ***************************************************************************** */var de=function(e,t){return(de=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function pe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function fe(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function ge(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function me(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ve(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function ye(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||t)}
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
     */var we=!1,_e="${JSCORE_VERSION}",be=function(e,t){if(!e)throw xe(t)},xe=function(e){return new Error("Firebase Database ("+_e+") INTERNAL ASSERT FAILED: "+e)},ke=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ce={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ke(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(r.push(c),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ie=function(e){try{return Ce.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Te(e){return Se(void 0,e)}function Se(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&Ee(n)&&(e[n]=Se(e[n],t[n]));return e}function Ee(e){return"__proto__"!==e}
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
     */var $e=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
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
     */function Ne(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Re(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function ze(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Pe(){return!0===we}
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
     */var Oe=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Ae.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}de(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Ae=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?De(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",l=new Oe(i,a,r);return l},e}();function De(e,t){return e.replace(Le,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var Le=/\{\$([^}]+)}/g;
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
     */function Me(e){return JSON.parse(e)}function Fe(e){return JSON.stringify(e)}
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
     */var Ue=function(e){var t={},n={},r={},i="";try{var s=e.split(".");t=Me(Ie(s[0])||""),n=Me(Ie(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};
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
function je(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function We(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ve(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}
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
     */function Be(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}
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
     */var He=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):r<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();var Ge=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ke),void 0===r.error&&(r.error=Ke),void 0===r.complete&&(r.complete=Ke);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Ke(){}function Ye(e,t){return e+" failed: "+t+" argument "}
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
     */var Qe=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Je(e){return e&&e._delegate?e._delegate:e}var Ze=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Xe="[DEFAULT]",et=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new $e;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Xe})}catch(e){}try{for(var r=me(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=ve(i.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=Xe),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return fe(this,void 0,void 0,(function(){var e;return ge(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(ye(ye([],ve(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),ve(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=Xe),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=me(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=ve(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=me(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Xe?void 0:t),options:i}),this.instances.set(n,s),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(e){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=Xe),this.component?this.component.multipleInstances?e:Xe:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
     */var tt,nt,rt=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new et(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
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
    ***************************************************************************** */function it(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
     */!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(nt||(nt={}));var st={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},ot=nt.INFO,at=((tt={})[nt.DEBUG]="log",tt[nt.VERBOSE]="log",tt[nt.INFO]="info",tt[nt.WARN]="warn",tt[nt.ERROR]="error",tt),lt=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=at[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,it(["["+i+"]  "+e.name+":"],n))}},ct=function(){function e(e){this.name=e,this._logLevel=ot,this._logHandler=lt,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in nt))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?st[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,it([this,nt.DEBUG],e)),this._logHandler.apply(this,it([this,nt.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,it([this,nt.VERBOSE],e)),this._logHandler.apply(this,it([this,nt.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,it([this,nt.INFO],e)),this._logHandler.apply(this,it([this,nt.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,it([this,nt.WARN],e)),this._logHandler.apply(this,it([this,nt.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,it([this,nt.ERROR],e)),this._logHandler.apply(this,it([this,nt.ERROR],e))},e}();
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
class ut{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ht="@firebase/app-exp",dt=new ct("@firebase/app"),pt="[DEFAULT]",ft={[ht]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check-exp":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},gt=new Map,mt=new Map;function vt(e,t){try{e.container.addComponent(t)}catch(n){dt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yt(e){const t=e.name;if(mt.has(t))return dt.debug(`There were multiple attempts to register component ${t}.`),!1;mt.set(t,e);for(const t of gt.values())vt(t,e);return!0}function wt(e,t){return e.container.getProvider(t)}
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
     */const _t=new Ae("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class bt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ze("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}
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
     */const xt="9.0.0-beta.7";function kt(e="[DEFAULT]"){const t=gt.get(e);if(!t)throw _t.create("no-app",{appName:e});return t}function Ct(e,t,n){var r;let i=null!==(r=ft[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void dt.warn(e.join(" "))}yt(new Ze(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var It;yt(new Ze("platform-logger",(e=>new ut(e)),"PRIVATE")),Ct(ht,"0.0.900-exp.6ef484a04",It),Ct("fire-js","");const Tt=new Ae("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),St=new ct("@firebase/auth-exp");
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
     */function Et(e,...t){St.logLevel<=nt.ERROR&&St.error(`Auth (9.0.0-beta.7): ${e}`,...t)}
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
     */function $t(e,...t){throw Rt(e,...t)}function Nt(e,...t){return Rt(e,...t)}function Rt(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tt.create(e,...t)}function zt(e,t,...n){if(!e)throw Rt(t,...n)}function Pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Et(t),new Error(t)}function Ot(e,t){e||Pt(t)}
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
     */const At=new Map;function Dt(e){Ot(e instanceof Function,"Expected a class definition");let t=At.get(e);return t?(Ot(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,At.set(e,t),t)}
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
function Lt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Mt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
     */function Ft(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Mt()&&"https:"!==Mt()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
class Ut{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Re()||ze()}get(){return Ft()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function jt(e,t){Ot(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
     */class qt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const Wt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Vt=new Ut(3e4,6e4);
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
     */async function Bt(e,t,n,r,i={}){return Ht(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Be(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(qt.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),qt.fetch()(Gt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ht(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wt),t);try{const t=new Kt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Yt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Yt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Yt(e,"email-already-in-use",s);$t(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(t){if(t instanceof Oe)throw t;$t(e,"network-request-failed")}}function Gt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?jt(e.config,i):`${e.config.apiScheme}://${i}`}class Kt{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Nt(this.auth,"timeout"))),Vt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(e,t,r);return i.customData._tokenResponse=n,i}
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
function Qt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Jt(e){return 1e3*Number(e)}function Zt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Et("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ie(n);return e?JSON.parse(e):(Et("Failed to decode base64 JWT payload"),null)}catch(e){return Et("Caught error parsing JWT payload as JSON",e),null}}
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
async function Xt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Oe&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class en{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
     */class tn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function nn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Xt(e,async function(e,t){return Bt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));zt(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=pe(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){zt(e.idToken,"internal-error"),zt(void 0!==e.idToken,"internal-error"),zt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Zt(e);return zt(t,"internal-error"),zt(void 0!==t.exp,"internal-error"),zt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return zt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Ht(e,{},(()=>{const n=Be({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Gt(e,r,"/v1/token",`key=${i}`);return qt.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new rn;return n&&(zt("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(zt("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(zt("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return Pt("not implemented")}}
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
     */function sn(e,t){zt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class on{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=pe(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new en(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new tn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return zt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Je(e),r=await n.getIdToken(t),i=Zt(r);zt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qt(Jt(i.auth_time)),issuedAtTime:Qt(Jt(i.iat)),expirationTime:Qt(Jt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Je(e);await nn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(zt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){zt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await nn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xt(this,async function(e,t){return Bt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:x}=t;zt(y&&x,e,"internal-error");const k=rn.fromJSON(this.name,x);zt("string"==typeof y,e,"internal-error"),sn(u,e.name),sn(h,e.name),zt("boolean"==typeof w,e,"internal-error"),zt("boolean"==typeof _,e,"internal-error"),sn(d,e.name),sn(p,e.name),sn(f,e.name),sn(g,e.name),sn(m,e.name),sn(v,e.name);const C=new on({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:k,createdAt:m,lastLoginAt:v});return b&&Array.isArray(b)&&(C.providerData=b.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new rn;r.updateFromServerResponse(t);const i=new on({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await nn(i),i}}
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
     */class an{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}an.type="NONE";const ln=an;
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
     */function cn(e,t,n){return`firebase:${e}:${t}:${n}`}class un{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=cn(this.userKey,r.apiKey,i),this.fullPersistenceKey=cn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new un(Dt(ln),e,n);let r=Dt(ln);for(const e of t)if(await e._isAvailable()){r=e;break}let i=null;const s=cn(n,e.config.apiKey,e.name);for(const n of t)try{const t=await n._get(s);if(t){const s=on._fromJSON(e,t);n!==r&&(i=s);break}}catch(e){}return i&&await r._set(s,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new un(r,e,n)}}
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
     */function hn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(gn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(dn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vn(t))return"Blackberry";if(yn(t))return"Webos";if(pn(t))return"Safari";if((t.includes("chrome/")||fn(t))&&!t.includes("edge/"))return"Chrome";if(mn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function dn(e=Ne()){return/firefox\//i.test(e)}function pn(e=Ne()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fn(e=Ne()){return/crios\//i.test(e)}function gn(e=Ne()){return/iemobile/i.test(e)}function mn(e=Ne()){return/android/i.test(e)}function vn(e=Ne()){return/blackberry/i.test(e)}function yn(e=Ne()){return/webos/i.test(e)}function wn(e=Ne()){return/iphone|ipad|ipod/i.test(e)}function _n(){return((e=Ne()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function bn(e=Ne()){return wn(e)||mn(e)||yn(e)||vn(e)||/windows phone/i.test(e)||gn(e)}
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
function xn(e,t=[]){let n;switch(e){case"Browser":n=hn(Ne());break;case"Worker":n=`${hn(Ne())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0-beta.7/${t.length?t.join(","):"FirebaseCore-web"}`}
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
     */class kn{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new In(this),this.idTokenSubscription=new In(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await un.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(zt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){this.redirectInitializerError=e,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nn(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Je(e):null;return t&&zt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&zt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Dt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ae("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;zt(t,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return zt(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return zt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Cn(e){return Je(e)}class In{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Ge((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return zt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */class Tn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}
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
     */async function Sn(e,t){return async function(e,t,n,r,i={}){const s=await Bt(e,t,n,r,i);return"mfaPendingCredential"in s&&$t(e,"multi-factor-auth-required",{serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
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
     */class En extends Tn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=pe(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new En(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return Sn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Sn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Be(t)}return e}}
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
     */class $n{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class Nn extends $n{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
     */class Rn extends Nn{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch(e){return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Rn.PROVIDER_ID="facebook.com";
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
class zn extends Nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zn.credential(t,n)}catch(e){return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com",zn.PROVIDER_ID="google.com";
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
class Pn extends Nn{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch(e){return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com",Pn.PROVIDER_ID="github.com";
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
class On extends Nn{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return On.credential(t,n)}catch(e){return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com",On.PROVIDER_ID="twitter.com";
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
class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await on._fromIdTokenResponse(e,n,r),s=Dn(n);return new An({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Dn(n);return new An({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Dn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
     */class Ln extends Oe{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ln.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Ln(e,t,n,r)}}function Mn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ln._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function Fn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Je(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Xt(r,
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
async function(e,t){return Bt(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}
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
class Un{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){zt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
     */const jn="__sak";
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
     */class qn{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jn,"1"),this.storage.removeItem(jn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
     */class Wn extends qn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ne();return pn(e)||wn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=bn(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_n()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wn.type="LOCAL";const Vn=Wn;
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
class Bn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Hn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */Bn.receivers=[];class Gn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Hn("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
     */function Kn(){return window}
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
function Yn(){return void 0!==Kn().WorkerGlobalScope&&"function"==typeof Kn().importScripts}
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
const Qn="firebaseLocalStorageDb",Jn="firebaseLocalStorage",Zn="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function er(e,t){return e.transaction([Jn],t?"readwrite":"readonly").objectStore(Jn)}function tr(){const e=indexedDB.open(Qn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Jn,{keyPath:Zn})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Jn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Qn);return new Xn(e).toPromise()}(),t(await tr()))}))}))}async function nr(e,t,n){const r=er(e,!0).put({[Zn]:t,value:n});return new Xn(r).toPromise()}function rr(e,t){const n=er(e,!0).delete(t);return new Xn(n).toPromise()}class ir{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await tr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bn._getInstance(Yn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tr();return await nr(e,jn,"1"),await rr(e,jn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>nr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=er(e,!1).get(t),r=await new Xn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>rr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=er(e,!1).getAll();return new Xn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const sr=ir;
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
     */class or{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lr(e);default:return!1}}
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!lr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Nt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ar(e))}saveEventToCache(e){this.cachedEventUids.add(ar(e)),this.lastProcessedEventTime=Date.now()}}function ar(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function lr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const cr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ur=/^https?/;async function hr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Bt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(dr(e))return}catch(e){}$t(e,"unauthorized-domain")}function dr(e){const t=Lt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ur.test(n))return!1;if(cr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */function pr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Nt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}
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
const fr=new Ut(3e4,6e4);function gr(){const e=Kn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function mr(e){return new Promise(((t,n)=>{var r,i,s;function o(){gr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gr(),n(Nt(e,"network-request-failed"))},timeout:fr.get()})}if(null===(i=null===(r=Kn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Kn().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Kn()[t]=()=>{gapi.load?o():n(Nt(e,"network-request-failed"))},pr(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw vr=null,e}))}let vr=null;
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
const yr=new Ut(5e3,15e3),wr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},_r=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function br(e){const t=e.config;zt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?jt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:xt},i=_r.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Be(r).slice(1)}`}async function xr(e){const t=await function(e){return vr=vr||mr(e),vr}(e),n=Kn().gapi;return zt(n,e,"internal-error"),t.open({where:document.body,url:br(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Nt(e,"network-request-failed"),s=Kn().setTimeout((()=>{r(i)}),yr.get());function o(){Kn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */class kr extends qn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kr.type="SESSION";const Cr=kr,Ir={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
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
     */class Tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Sr(e,t,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ir),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ne().toLowerCase();n&&(a=fn(c)?"_blank":n),dn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ne()){var t;return wn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new Tr(null);const h=window.open(t||"",a,u);zt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Tr(h)}function Er(e,t){return t?Dt(t):(zt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
     */class $r extends Tn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nr(e){
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
return async function(e,t,n=!1){const r="signIn",i=await Mn(e,r,t),s=await An._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new $r(e),e.bypassAuthState)}function Rr(e){const{auth:t,user:n}=e;return zt(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Xt(e,Mn(r,i,t,e),n);zt(s.idToken,r,"internal-error");const o=Zt(s.idToken);zt(o,r,"internal-error");const{sub:a}=o;return zt(e.uid===a,r,"user-mismatch"),An._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&$t(r,"user-mismatch"),e}}(n,new $r(e),e.bypassAuthState)}async function zr(e){const{auth:t,user:n}=e;return zt(n,t,"internal-error"),async function(e,t,n=!1){const r=await Xt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return An._forOperation(e,"link",r)}(n,new $r(e),e.bypassAuthState)}
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
     */class Pr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nr;case"linkViaPopup":case"linkViaRedirect":return zr;case"reauthViaPopup":case"reauthViaRedirect":return Rr;default:$t(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Or="pendingRedirect",Ar=new Map;class Dr extends Pr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return cn(Or,e.config.apiKey,e.name)}(t),r="true"===await Lr(e)._get(n);return await Lr(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ar.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Lr(e){return Dt(e._redirectPersistence)}async function Mr(e,t,n=!1){const r=Cn(e),i=Er(r,t),s=new Dr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
     */const Fr="__/auth/handler",Ur="emulator/auth/handler";function jr(e,t,n,r,i,s){zt(e.config.authDomain,e,"auth-domain-config-required"),zt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xt,eventId:i};if(t instanceof $n){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",We(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Nn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Fr}`;return jt(e,Ur)}
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
     */(e)}?${Be(a).slice(1)}`}const qr="webStorageSupport";const Wr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cr,this._completeRedirectFn=Mr}async _openPopup(e,t,n,r){var i;Ot(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Sr(e,jr(e,t,n,Lt(),r),Hn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=jr(e,t,n,Lt(),r),Kn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ot(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await xr(e),n=new or(e);return t.register("authEvent",(t=>{zt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qr,{type:qr},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),$t(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bn()||pn()||wn()}};new Ut(3e4,6e4);
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
const Vr=new Ut(2e3,1e4);class Br extends Pr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return zt(e,this.auth,"internal-error"),e}async onExecution(){Ot(1===this.filter.length,"Popup operations only handle one event");const e=Hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Nt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Vr.get())};e()}}function Hr(e=kt()){const t=wt(e,"auth-exp");return t.isInitialized()?t.getImmediate():function(e,t){const n=wt(e,"auth-exp");n.isInitialized()&&$t(n.getImmediate(),"already-initialized");return n.initialize({options:t})}(e,{popupRedirectResolver:Wr,persistence:[sr,Vn]})}var Gr;Br.currentPopupAction=null,Gr="Browser",yt(new Ze("auth-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{zt(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),zt(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Gr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xn(Gr)},s=new kn(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),yt(new Ze("auth-internal",(e=>(e=>new Un(e))(Cn(e.getProvider("auth-exp").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ct("@firebase/auth-exp","0.0.900-exp.6ef484a04",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Gr));
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
let Kr="";
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
class Yr{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Me(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
     */class Qr{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return je(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
     */const Jr=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Yr(t)}}catch(e){}return new Qr},Zr=Jr("localStorage"),Xr=Jr("sessionStorage"),ei=new ct("@firebase/database"),ti=function(){let e=1;return function(){return e++}}(),ni=function(e){const t=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var s=i-55296;r++,be(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(s<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new He;n.update(t);const r=n.digest();return Ce.encodeByteArray(r)},ri=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=ri.apply(null,r):t+="object"==typeof r?Fe(r):r,t+=" "}return t};let ii=null,si=!0;const oi=function(...e){var t,n;if(!0===si&&(si=!1,null===ii&&!0===Xr.get("logging_enabled")&&(t=!0,be(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(ei.logLevel=nt.VERBOSE,ii=ei.log.bind(ei),n&&Xr.set("logging_enabled",!0)):"function"==typeof t?ii=t:(ii=null,Xr.remove("logging_enabled")))),ii){const t=ri.apply(null,e);ii(t)}},ai=function(e){return function(...t){oi(e,...t)}},li=function(...e){const t="FIREBASE INTERNAL ERROR: "+ri(...e);ei.error(t)},ci=function(...e){const t=`FIREBASE FATAL ERROR: ${ri(...e)}`;throw ei.error(t),new Error(t)},ui=function(...e){const t="FIREBASE WARNING: "+ri(...e);ei.warn(t)},hi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},di="[MIN_NAME]",pi="[MAX_NAME]",fi=function(e,t){if(e===t)return 0;if(e===di||t===pi)return-1;if(t===di||e===pi)return 1;{const n=xi(e),r=xi(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},gi=function(e,t){return e===t?0:e<t?-1:1},mi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Fe(t))},vi=function(e){if("object"!=typeof e||null===e)return Fe(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Fe(t[r]),n+=":",n+=vi(e[t[r]]);return n+="}",n},yi=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function wi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const _i=function(e){be(!hi(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const bi=new RegExp("^-?(0*)\\d{1,10}$"),xi=function(e){if(bi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},ki=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw ui("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ci=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class Ii{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){ui(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
     */class Ti{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(oi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ui(e)}}class Si{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Si.OWNER="owner";
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
const Ei=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$i="websocket",Ni="long_polling";
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
class Ri{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zr.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zi(e,t,n){let r;if(be("string"==typeof t,"typeof type must == string"),be("object"==typeof n,"typeof params must == object"),t===$i)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Ni)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return wi(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
     */class Pi{constructor(){this.counters_={}}incrementCounter(e,t=1){je(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Te(this.counters_)}}
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
     */const Oi={},Ai={};function Di(e){const t=e.toString();return Oi[t]||(Oi[t]=new Pi),Oi[t]}
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
class Li{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ki((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
     */const Mi="start";class Fi{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ai(e),this.stats_=Di(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),zi(t,Ni,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Li(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ui(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Mi)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ei.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fi.forceAllow_=!0}static forceDisallow(){Fi.forceDisallow_=!0}static isAvailable(){return!!Fi.forceAllow_||!(Fi.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Fe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(r=ke(t),Ce.encodeByteArray(r,!0));var r;const i=yi(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Fe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ui{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ti(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ui.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){oi("frame writing exception"),e.stack&&oi(e.stack),oi(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||oi("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{oi("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
     */let ji=null;"undefined"!=typeof MozWebSocket?ji=MozWebSocket:"undefined"!=typeof WebSocket&&(ji=WebSocket);class qi{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ai(this.connId),this.stats_=Di(t),this.connURL=qi.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&Ei.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),zi(e,$i,i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zr.set("previous_websocket_failure",!0);try{if(Pe());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new ji(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ji&&!qi.forceDisallow_}static previouslyFailed(){return Zr.isInMemoryStorage||!0===Zr.get("previous_websocket_failure")}markConnectionHealthy(){Zr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Me(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(be(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Fe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=yi(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qi.responsesRequiredToBeHealthy=2,qi.healthyTimeout=3e4;
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
class Wi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fi,qi]}initTransports_(e){const t=qi&&qi.isAvailable();let n=t&&!qi.previouslyFailed();if(e.webSocketOnly&&(t||ui("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qi];else{const e=this.transports_=[];for(const t of Wi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
     */class Vi{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ai("c:"+this.id+":"),this.transportManager_=new Wi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ci((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=mi("t",e),n=mi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=mi("t",e),n=mi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=mi("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?li("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):li("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&ui("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ci((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ci((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
     */class Bi{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
     */class Hi{constructor(e){this.allowedEvents_=e,this.listeners_={},be(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){be(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
     */class Gi extends Hi{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Re()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Gi}getInitialEvent(e){return be("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
     */class Ki{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Yi(){return new Ki("")}function Qi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ji(e){return e.pieces_.length-e.pieceNum_}function Zi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ki(e.pieces_,t)}function Xi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function es(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ts(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ki(t,0)}function ns(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Ki)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ki(n,0)}function rs(e){return e.pieceNum_>=e.pieces_.length}function is(e,t){const n=Qi(e),r=Qi(t);if(null===n)return t;if(n===r)return is(Zi(e),Zi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ss(e,t){const n=es(e,0),r=es(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=fi(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function os(e,t){if(Ji(e)!==Ji(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function as(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Ji(e)>Ji(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ls{constructor(e,t){this.errorPrefix_=t,this.parts_=es(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Qe(this.parts_[e]);cs(this)}}function cs(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+us(e))}function us(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
     */class hs extends Hi{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new hs}getInitialEvent(e){return be("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
     */const ds=1e3;class ps extends Bi{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=ps.nextPersistentConnectionId_++,this.log_=ai("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ds,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Pe())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hs.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Gi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Fe(i)),be(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new $e,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),be(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),be(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;ps.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&je(e,"w")){const n=qe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();ui(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=Ue(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=Ue(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),be(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):li("Unrecognized action received from server: "+Fe(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){be(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ds),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ps.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){be(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?oi("getToken() completed but was canceled"):(oi("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Vi(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{ui(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&ui(e),a())}}}interrupt(e){oi("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){oi("Resuming connection for reason: "+e),delete this.interruptReasons_[e],We(this.interruptReasons_)&&(this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>vi(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Ki(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){oi("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){oi("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Kr.replace(/\./g,"-")]=1,Re()?e["framework.cordova"]=1:ze()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gi.getInstance().currentlyOnline();return We(this.interruptReasons_)&&e}}ps.nextPersistentConnectionId_=0,ps.nextConnectionId_=0;
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
class fs{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new fs(e,t)}}
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
     */class gs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new fs(di,e),r=new fs(di,t);return 0!==this.compare(n,r)}minPost(){return fs.MIN}}
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
     */let ms;class vs extends gs{static get __EMPTY_NODE(){return ms}static set __EMPTY_NODE(e){ms=e}compare(e,t){return fi(e.name,t.name)}isDefinedOn(e){throw xe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return fs.MIN}maxPost(){return new fs(pi,ms)}makePost(e,t){return be("string"==typeof e,"KeyIndex indexValue must always be a string."),new fs(e,ms)}toString(){return".key"}}const ys=new vs;
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
     */class ws{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _s{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:_s.RED,this.left=null!=r?r:bs.EMPTY_NODE,this.right=null!=i?i:bs.EMPTY_NODE}copy(e,t,n,r,i){return new _s(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return bs.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return bs.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_s.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_s.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_s.RED=!0,_s.BLACK=!1;class bs{constructor(e,t=bs.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new bs(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,_s.BLACK,null,null))}remove(e){return new bs(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_s.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ws(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ws(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ws(this.root_,null,this.comparator_,!0,e)}}
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
function xs(e,t){return fi(e.name,t.name)}function ks(e,t){return fi(e,t)}
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
     */let Cs;bs.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new _s(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Is=function(e){return"number"==typeof e?"number:"+_i(e):"string:"+e},Ts=function(e){if(e.isLeafNode()){const t=e.val();be("string"==typeof t||"number"==typeof t||"object"==typeof t&&je(t,".sv"),"Priority must be a string or number.")}else be(e===Cs||e.isEmpty(),"priority of unexpected type.");be(e===Cs||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Ss,Es,$s;class Ns{constructor(e,t=Ns.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,be(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ts(this.priorityNode_)}static set __childrenNodeConstructor(e){Ss=e}static get __childrenNodeConstructor(){return Ss}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ns(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ns.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return rs(e)?this:".priority"===Qi(e)?this.priorityNode_:Ns.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ns.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Qi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(be(".priority"!==n||1===Ji(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ns.__childrenNodeConstructor.EMPTY_NODE.updateChild(Zi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Is(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?_i(this.value_):this.value_,this.lazyHash_=ni(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ns.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ns.__childrenNodeConstructor?-1:(be(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Ns.VALUE_TYPE_ORDER.indexOf(t),i=Ns.VALUE_TYPE_ORDER.indexOf(n);return be(r>=0,"Unknown leaf type: "+t),be(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ns.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Rs=new class extends gs{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?fi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return fs.MIN}maxPost(){return new fs(pi,new Ns("[PRIORITY-POST]",$s))}makePost(e,t){const n=Es(e);return new fs(t,new Ns("[PRIORITY-POST]",n))}toString(){return".priority"}},zs=Math.log(2);
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
     */class Ps{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/zs,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Os=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new _s(a,o.node,_s.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new _s(a,o.node,_s.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new _s(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,_s.BLACK):(a(r,_s.BLACK),a(r,_s.RED))}return s}(new Ps(e.length));return new bs(r||t,s)};
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
     */let As;const Ds={};class Ls{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return be(Ds&&Rs,"ChildrenNode.ts has not been loaded"),As=As||new Ls({".priority":Ds},{".priority":Rs}),As}get(e){const t=qe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof bs?t:null}hasIndex(e){return je(this.indexSet_,e.toString())}addIndex(e,t){be(e!==ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(fs.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Os(n,e.getCompare()):Ds;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new Ls(c,l)}addToIndexes(e,t){const n=Ve(this.indexes_,((n,r)=>{const i=qe(this.indexSet_,r);if(be(i,"Missing index implementation for "+r),n===Ds){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(fs.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Os(n,i.getCompare())}return Ds}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new fs(e.name,r))),i.insert(e,e.node)}}));return new Ls(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ve(this.indexes_,(n=>{if(n===Ds)return n;{const r=t.get(e.name);return r?n.remove(new fs(e.name,r)):n}}));return new Ls(n,this.indexSet_)}}
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
     */let Ms;class Fs{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ts(this.priorityNode_),this.children_.isEmpty()&&be(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ms||(Ms=new Fs(new bs(ks),null,Ls.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ms}updatePriority(e){return this.children_.isEmpty()?this:new Fs(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ms:t}}getChild(e){const t=Qi(e);return null===t?this:this.getImmediateChild(t).getChild(Zi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(be(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new fs(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Ms:this.priorityNode_;return new Fs(r,s,i)}}updateChild(e,t){const n=Qi(e);if(null===n)return t;{be(".priority"!==Qi(e)||1===Ji(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Zi(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Rs,((s,o)=>{t[s]=o.val(e),n++,i&&Fs.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Is(this.getPriority().val())+":"),this.forEachChild(Rs,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ni(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new fs(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new fs(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new fs(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,fs.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,fs.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===ys||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Fs(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Rs),n=t.getIterator(Rs);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===ys?null:this.indexMap_.get(e.toString())}}Fs.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Us=new class extends Fs{constructor(){super(new bs(ks),Fs.EMPTY_NODE,Ls.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Fs.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(fs,{MIN:{value:new fs(di,Fs.EMPTY_NODE)},MAX:{value:new fs(pi,Us)}}),vs.__EMPTY_NODE=Fs.EMPTY_NODE,Ns.__childrenNodeConstructor=Fs,Cs=Us,function(e){$s=e}(Us);function js(e,t=null){if(null===e)return Fs.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),be(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ns(e,js(t))}if(e instanceof Array){let n=Fs.EMPTY_NODE;return wi(e,((t,r)=>{if(je(e,t)&&"."!==t.substring(0,1)){const e=js(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(js(t))}{const n=[];let r=!1;if(wi(e,((e,t)=>{if("."!==e.substring(0,1)){const i=js(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new fs(e,i)))}})),0===n.length)return Fs.EMPTY_NODE;const i=Os(n,xs,(e=>e.name),ks);if(r){const e=Os(n,Rs.getCompare());return new Fs(i,js(t),new Ls({".priority":e},{".priority":Rs}))}return new Fs(i,js(t),Ls.Default)}}!function(e){Es=e}(js);
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
class qs extends gs{constructor(e){super(),this.indexPath_=e,be(!rs(e)&&".priority"!==Qi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?fi(e.name,t.name):i}makePost(e,t){const n=js(e),r=Fs.EMPTY_NODE.updateChild(this.indexPath_,n);return new fs(t,r)}maxPost(){const e=Fs.EMPTY_NODE.updateChild(this.indexPath_,Us);return new fs(pi,e)}toString(){return es(this.indexPath_,0).join("/")}}
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
     */const Ws=new class extends gs{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?fi(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return fs.MIN}maxPost(){return fs.MAX}makePost(e,t){const n=js(e);return new fs(t,n)}toString(){return".value"}},Vs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Bs=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Vs.charAt(n%64),n=Math.floor(n/64);be(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=Vs.charAt(t[i]);return be(20===o.length,"nextPushId: Length should be 20."),o}}();
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
function Hs(e){return{type:"value",snapshotNode:e}}function Gs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ks(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ys(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Qs{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){be(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Ks(t,o)):be(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Gs(t,n)):s.trackChildChange(Ys(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Rs,((e,r)=>{t.hasChild(e)||n.trackChildChange(Ks(e,r))})),t.isLeafNode()||t.forEachChild(Rs,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Ys(t,r,i))}else n.trackChildChange(Gs(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Fs.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
     */class Js{constructor(e){this.indexedFilter_=new Qs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Js.getStartPost_(e),this.endPost_=Js.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new fs(t,n))||(n=Fs.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Fs.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Fs.EMPTY_NODE);const i=this;return t.forEachChild(Rs,((e,t)=>{i.matches(new fs(e,t))||(r=r.updateImmediateChild(e,Fs.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
     */class Zs{constructor(e){this.rangedFilter_=new Js(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new fs(t,n))||(n=Fs.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Fs.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Fs.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(Fs.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,Fs.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;be(o.numChildren()===this.limit_,"");const a=new fs(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Ys(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Ks(t,e));const n=o.updateImmediateChild(t,Fs.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Gs(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Ks(l.name,l.node)),i.trackChildChange(Gs(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Fs.EMPTY_NODE)):e}}
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
     */class Xs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Rs}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return be(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return be(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:di}hasEnd(){return this.endSet_}getIndexEndValue(){return be(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return be(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return be(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Rs}copy(){const e=new Xs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eo(e){const t={};if(e.isDefault())return t;let n;return e.index_===Rs?n="$priority":e.index_===Ws?n="$value":e.index_===ys?n="$key":(be(e.index_ instanceof qs,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Fe(n),e.startSet_&&(t.startAt=Fe(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Fe(e.indexStartName_))),e.endSet_&&(t.endAt=Fe(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Fe(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function to(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Rs&&(t.i=e.index_.toString()),t}
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
     */class no extends Bi{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=ai("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(be(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=no.getListenId_(e,n),o={};this.listens_[s]=o;const a=eo(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),qe(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=no.getListenId_(e,t);delete this.listens_[n]}get(e){const t=eo(e._queryParams),n=e._path.toString(),r=new $e;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Be(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Me(o.responseText)}catch(e){ui("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&ui("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
     */class ro{constructor(){this.rootNode_=Fs.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
     */function io(){return{value:null,children:new Map}}function so(e,t,n){if(rs(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Qi(t);e.children.has(r)||e.children.set(r,io());so(e.children.get(r),t=Zi(t),n)}}function oo(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
     */(e,((e,r)=>{oo(r,new Ki(t.toString()+"/"+e),n)}))}class ao{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
     */class lo{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ao(e);const n=1e4+2e4*Math.random();Ci(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;wi(e,((e,r)=>{r>0&&je(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Ci(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
     */var co;function uo(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(co||(co={}));class ho{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=co.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(rs(this.path)){if(null!=this.affectedTree.value)return be(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ki(e));return new ho(Yi(),t,this.revert)}}return be(Qi(this.path)===e,"operationForChild called for unrelated child."),new ho(Zi(this.path),this.affectedTree,this.revert)}}
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
     */class po{constructor(e,t){this.source=e,this.path=t,this.type=co.LISTEN_COMPLETE}operationForChild(e){return rs(this.path)?new po(this.source,Yi()):new po(this.source,Zi(this.path))}}
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
     */class fo{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=co.OVERWRITE}operationForChild(e){return rs(this.path)?new fo(this.source,Yi(),this.snap.getImmediateChild(e)):new fo(this.source,Zi(this.path),this.snap)}}
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
     */class go{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=co.MERGE}operationForChild(e){if(rs(this.path)){const t=this.children.subtree(new Ki(e));return t.isEmpty()?null:t.value?new fo(this.source,Yi(),t.value):new go(this.source,Yi(),t)}return be(Qi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new go(this.source,Zi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
     */class mo{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(rs(e))return this.isFullyInitialized()&&!this.filtered_;const t=Qi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
     */class vo{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yo(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw xe("Should only compare child_ events.");const r=new fs(t.childName,t.snapshotNode),i=new fs(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
     */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function wo(e,t){return{eventCache:e,serverCache:t}}function _o(e,t,n,r){return wo(new mo(t,n,r),e.serverCache)}function bo(e,t,n,r){return wo(e.eventCache,new mo(t,n,r))}function xo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ko(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
     */let Co;class Io{constructor(e,t=(()=>(Co||(Co=new bs(gi)),Co))()){this.value=e,this.children=t}static fromObject(e){let t=new Io(null);return wi(e,((e,n)=>{t=t.set(new Ki(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Yi(),value:this.value};if(rs(e))return null;{const n=Qi(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Zi(e),t);if(null!=i){return{path:ns(new Ki(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(rs(e))return this;{const t=Qi(e),n=this.children.get(t);return null!==n?n.subtree(Zi(e)):new Io(null)}}set(e,t){if(rs(e))return new Io(t,this.children);{const n=Qi(e),r=(this.children.get(n)||new Io(null)).set(Zi(e),t),i=this.children.insert(n,r);return new Io(this.value,i)}}remove(e){if(rs(e))return this.children.isEmpty()?new Io(null):new Io(null,this.children);{const t=Qi(e),n=this.children.get(t);if(n){const r=n.remove(Zi(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Io(null):new Io(this.value,i)}return this}}get(e){if(rs(e))return this.value;{const t=Qi(e),n=this.children.get(t);return n?n.get(Zi(e)):null}}setTree(e,t){if(rs(e))return t;{const n=Qi(e),r=(this.children.get(n)||new Io(null)).setTree(Zi(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Io(this.value,i)}}fold(e){return this.fold_(Yi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(ns(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Yi(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(rs(e))return null;{const r=Qi(e),i=this.children.get(r);return i?i.findOnPath_(Zi(e),ns(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Yi(),t)}foreachOnPath_(e,t,n){if(rs(e))return this;{this.value&&n(t,this.value);const r=Qi(e),i=this.children.get(r);return i?i.foreachOnPath_(Zi(e),ns(t,r),n):new Io(null)}}foreach(e){this.foreach_(Yi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(ns(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
     */class To{constructor(e){this.writeTree_=e}static empty(){return new To(new Io(null))}}function So(e,t,n){if(rs(t))return new To(new Io(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=is(i,t);return s=s.updateChild(o,n),new To(e.writeTree_.set(i,s))}{const r=new Io(n),i=e.writeTree_.setTree(t,r);return new To(i)}}}function Eo(e,t,n){let r=e;return wi(n,((e,n)=>{r=So(r,ns(t,e),n)})),r}function $o(e,t){if(rs(t))return To.empty();{const n=e.writeTree_.setTree(t,new Io(null));return new To(n)}}function No(e,t){return null!=Ro(e,t)}function Ro(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(is(n.path,t)):null}function zo(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Rs,((e,n)=>{t.push(new fs(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new fs(e,n.value))})),t}function Po(e,t){if(rs(t))return e;{const n=Ro(e,t);return new To(null!=n?new Io(n):e.writeTree_.subtree(t))}}function Oo(e){return e.writeTree_.isEmpty()}function Ao(e,t){return Do(Yi(),e.writeTree_,t)}function Do(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(be(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Do(ns(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(ns(e,".priority"),r)),n}}
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
     */function Lo(e,t){return Qo(t,e)}function Mo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));be(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Fo(t,r.path)?i=!1:as(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=jo(e.allWrites,Uo,Yi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=$o(e.visibleWrites,r.path);else{wi(r.children,(t=>{e.visibleWrites=$o(e.visibleWrites,ns(r.path,t))}))}return!0}return!1}function Fo(e,t){if(e.snap)return as(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&as(ns(e.path,n),t))return!0;return!1}function Uo(e){return e.visible}function jo(e,t,n){let r=To.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)as(n,e)?(t=is(n,e),r=So(r,t,s.snap)):as(e,n)&&(t=is(e,n),r=So(r,Yi(),s.snap.getChild(t)));else{if(!s.children)throw xe("WriteRecord should have .snap or .children");if(as(n,e))t=is(n,e),r=Eo(r,t,s.children);else if(as(e,n))if(t=is(e,n),rs(t))r=Eo(r,Yi(),s.children);else{const e=qe(s.children,Qi(t));if(e){const n=e.getChild(Zi(t));r=So(r,Yi(),n)}}}}}return r}function qo(e,t,n,r,i){if(r||i){const s=Po(e.visibleWrites,t);if(!i&&Oo(s))return n;if(i||null!=n||No(s,Yi())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(as(e.path,t)||as(t,e.path))};return Ao(jo(e.allWrites,s,t),n||Fs.EMPTY_NODE)}return null}{const r=Ro(e.visibleWrites,t);if(null!=r)return r;{const r=Po(e.visibleWrites,t);if(Oo(r))return n;if(null!=n||No(r,Yi())){return Ao(r,n||Fs.EMPTY_NODE)}return null}}}function Wo(e,t,n,r){return qo(e.writeTree,e.treePath,t,n,r)}function Vo(e,t){return function(e,t,n){let r=Fs.EMPTY_NODE;const i=Ro(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Rs,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Po(e.visibleWrites,t);return n.forEachChild(Rs,((e,t)=>{const n=Ao(Po(i,new Ki(e)),t);r=r.updateImmediateChild(e,n)})),zo(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return zo(Po(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Bo(e,t,n,r){return function(e,t,n,r,i){be(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ns(t,n);if(No(e.visibleWrites,s))return null;{const t=Po(e.visibleWrites,s);return Oo(t)?i.getChild(n):Ao(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Ho(e,t){return function(e,t){return Ro(e.visibleWrites,t)}(e.writeTree,ns(e.treePath,t))}function Go(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=Po(e.visibleWrites,t),c=Ro(l,Yi());if(null!=c)a=c;else{if(null==n)return[];a=Ao(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Ko(e,t,n){return function(e,t,n,r){const i=ns(t,n),s=Ro(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Ao(Po(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Yo(e,t){return Qo(ns(e.treePath,t),e.writeTree)}function Qo(e,t){return{treePath:e,writeTree:t}}
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
     */class Jo{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;be("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),be(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Ys(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ks(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Gs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw xe("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Ys(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
     */const Zo=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Xo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new mo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ko(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ko(this.viewCache_),i=Go(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
     */function ea(e,t,n,r,i){const s=new Jo;let o,a;if(n.type===co.OVERWRITE){const l=n;l.source.fromUser?o=ra(e,t,l.path,l.snap,r,i,s):(be(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!rs(l.path),o=na(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===co.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=ns(n,r);ia(t,Qi(c))&&(a=ra(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=ns(n,r);ia(t,Qi(c))||(a=ra(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(be(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=oa(e,t,l.path,l.children,r,i,a,s))}else if(n.type===co.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Ho(r,n))return t;{const a=new Xo(r,t,i),l=t.eventCache.getNode();let c;if(rs(n)||".priority"===Qi(n)){let n;if(t.serverCache.isFullyInitialized())n=Wo(r,ko(t));else{const e=t.serverCache.getNode();be(e instanceof Fs,"serverChildren would be complete if leaf node"),n=Vo(r,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const i=Qi(n);let u=Ko(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Zi(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Fs.EMPTY_NODE,Zi(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Wo(r,ko(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Ho(r,Yi()),_o(t,c,o,e.filter.filtersNodes())}}
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
     */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Ho(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(rs(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return na(e,t,n,l.getNode().getChild(n),i,s,a,o);if(rs(n)){let r=new Io(null);return l.getNode().forEachChild(ys,((e,t)=>{r=r.set(new Ki(e),t)})),oa(e,t,n,r,i,s,a,o)}return t}{let c=new Io(null);return r.foreach(((e,t)=>{const r=ns(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),oa(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==co.LISTEN_COMPLETE)throw xe("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=bo(t,s.getNode(),s.isFullyInitialized()||rs(n),s.isFiltered());return ta(e,o,n,r,Zo,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xo(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Hs(xo(t)))}}(t,o,l),{viewCache:o,changes:l}}function ta(e,t,n,r,i,s){const o=t.eventCache;if(null!=Ho(r,n))return t;{let a,l;if(rs(n))if(be(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ko(t),i=Vo(r,n instanceof Fs?n:Fs.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=Wo(r,ko(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Qi(n);if(".priority"===c){be(1===Ji(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=Bo(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=Zi(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Bo(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Ko(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return _o(t,a,o.isFullyInitialized()||rs(n),e.filter.filtersNodes())}}function na(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(rs(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Qi(n);if(!l.isCompleteForPath(n)&&Ji(n)>1)return t;const i=Zi(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Zo,null)}const h=bo(t,c,l.isFullyInitialized()||rs(n),u.filtersNodes());return ta(e,h,n,i,new Xo(i,h,s),a)}function ra(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Xo(i,t,s);if(rs(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=_o(t,c,!0,e.filter.filtersNodes());else{const i=Qi(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=_o(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Zi(n),c=a.getNode().getImmediateChild(i);let h;if(rs(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Xi(s)&&e.getChild(ts(s)).isEmpty()?e:e.updateChild(s,r):Fs.EMPTY_NODE}if(c.equals(h))l=t;else{l=_o(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function ia(e,t){return e.eventCache.isCompleteForChild(t)}function sa(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function oa(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=rs(n)?r:new Io(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=sa(0,t.serverCache.getNode().getImmediateChild(n),r);c=na(e,c,new Ki(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=sa(0,t.serverCache.getNode().getImmediateChild(n),r);c=na(e,c,new Ki(n),l,i,s,o,a)}})),c}class aa{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Qs(n.getIndex()),i=(s=n).loadsAllData()?new Qs(s.getIndex()):s.hasLimit()?new Zs(s):new Js(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(Fs.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Fs.EMPTY_NODE,a.getNode(),null),u=new mo(l,o.isFullyInitialized(),r.filtersNodes()),h=new mo(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=wo(h,u),this.eventGenerator_=new vo(this.query_)}get query(){return this.query_}}function la(e,t){const n=ko(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!rs(t)&&!n.getImmediateChild(Qi(t)).isEmpty())?n.getChild(t):null}function ca(e){return 0===e.eventRegistrations_.length}function ua(e,t,n){const r=[];if(n){be(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function ha(e,t,n,r){t.type===co.MERGE&&null!==t.source.queryId&&(be(ko(e.viewCache_),"We should always have a full cache before handling merges"),be(xo(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ea(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,be(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),be(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),be(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,da(e,s.changes,s.viewCache.eventCache.getNode(),null)}function da(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),yo(e,i,"child_removed",t,r,n),yo(e,i,"child_added",t,r,n),yo(e,i,"child_moved",s,r,n),yo(e,i,"child_changed",t,r,n),yo(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
     */let pa,fa;class ga{constructor(){this.views=new Map}}function ma(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return be(null!=s,"SyncTree gave us an op for an invalid query."),ha(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(ha(s,t,n,r));return i}}function va(e,t,n,r,i,s){const o=function(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Wo(n,i?r:null),s=!1;e?s=!0:r instanceof Fs?(e=Vo(n,r),s=!1):(e=Fs.EMPTY_NODE,s=!1);const o=wo(new mo(e,s,!1),new mo(r,i,!1));return new aa(t,o)}return o}(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Rs,((e,t)=>{r.push(Gs(e,t))}));return n.isFullyInitialized()&&r.push(Hs(n.getNode())),da(e,r,n.getNode(),t)}(o,n)}function ya(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=ka(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(ua(i,n,r)),ca(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(ua(t,n,r)),ca(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!ka(e)&&s.push(new(be(pa,"Reference.ts has not been loaded"),pa)(t._repo,t._path)),{removed:s,events:o}}function wa(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function _a(e,t){let n=null;for(const r of e.views.values())n=n||la(r,t);return n}function ba(e,t){if(t._queryParams.loadsAllData())return Ca(e);{const n=t._queryIdentifier;return e.views.get(n)}}function xa(e,t){return null!=ba(e,t)}function ka(e){return null!=Ca(e)}function Ca(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
     */let Ia=1;class Ta{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Io(null),this.pendingWriteTree_={visibleWrites:To.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Sa(e,t,n,r,i){return function(e,t,n,r,i){be(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=So(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Oa(e,new fo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ea(e,t,n,r){!function(e,t,n,r){be(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Eo(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=Io.fromObject(n);return Oa(e,new go({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function $a(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Mo(e.pendingWriteTree_,t)){let t=new Io(null);return null!=r.snap?t=t.set(Yi(),!0):wi(r.children,(e=>{t=t.set(new Ki(e),!0)})),Oa(e,new ho(r.path,t,n))}return[]}function Na(e,t,n){return Oa(e,new fo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ra(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||xa(s,t))){const a=ya(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>ka(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&ka(t)){return[Ca(t)]}{let e=[];return t&&(e=wa(t)),wi(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=La(e,r);e.listenProvider_.startListening(Wa(i),Ma(e,i),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(Wa(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Fa(t));e.listenProvider_.stopListening(Wa(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Fa(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function za(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=is(e,r);i=i||_a(t,n),s=s||ka(t)}));let o,a=e.syncPointTree_.get(r);if(a?(s=s||ka(a),i=i||_a(a,Yi())):(a=new ga,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)o=!0;else{o=!1,i=Fs.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=_a(t,Yi());n&&(i=i.updateImmediateChild(e,n))}))}const l=xa(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=Fa(t);be(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Ia++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let c=va(a,t,n,Lo(e.pendingWriteTree_,r),i,o);if(!l&&!s){const n=ba(a,t);c=c.concat(function(e,t,n){const r=t._path,i=Ma(e,t),s=La(e,n),o=e.listenProvider_.startListening(Wa(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)be(!ka(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!rs(e)&&t&&ka(t))return[Ca(t).query];{let e=[];return t&&(e=e.concat(wa(t).map((e=>e.query)))),wi(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Wa(r),Ma(e,r))}}return o}
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
     */(e,t,n))}return c}function Pa(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=_a(n,is(e,t));if(r)return r}));return qo(r,t,i,n,!0)}function Oa(e,t){return Aa(t,e.syncPointTree_,null,Lo(e.pendingWriteTree_,Yi()))}function Aa(e,t,n,r){if(rs(e.path))return Da(e,t,n,r);{const i=t.get(Yi());null==n&&null!=i&&(n=_a(i,Yi()));let s=[];const o=Qi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Yo(r,o);s=s.concat(Aa(a,l,e,t))}return i&&(s=s.concat(ma(i,e,r,n))),s}}function Da(e,t,n,r){const i=t.get(Yi());null==n&&null!=i&&(n=_a(i,Yi()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Yo(r,t),l=e.operationForChild(t);l&&(s=s.concat(Da(l,i,o,a)))})),i&&(s=s.concat(ma(i,e,r,n))),s}function La(e,t){const n=t.query,r=Ma(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Fs.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Ua(e,n);if(r){const n=ja(r),i=n.path,s=n.queryId,o=is(i,t);return qa(e,i,new po(uo(s),o))}return[]}(e,n._path,r):function(e,t){return Oa(e,new po({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Ra(e,n,null,r)}}}}function Ma(e,t){const n=Fa(t);return e.queryToTagMap.get(n)}function Fa(e){return e._path.toString()+"$"+e._queryIdentifier}function Ua(e,t){return e.tagToQueryMap.get(t)}function ja(e){const t=e.indexOf("$");return be(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ki(e.substr(0,t))}}function qa(e,t,n){const r=e.syncPointTree_.get(t);be(r,"Missing sync point for query tag that we're tracking");return ma(r,n,Lo(e.pendingWriteTree_,t),null)}function Wa(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(be(fa,"Reference.ts has not been loaded"),fa)(e._repo,e._path):e}class Va{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Va(t)}node(){return this.node_}}class Ba{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ns(this.path_,e);return new Ba(this.syncTree_,t)}node(){return Pa(this.syncTree_,this.path_)}}const Ha=function(e,t,n){return e&&"object"==typeof e?(be(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ga(e[".sv"],t,n):"object"==typeof e[".sv"]?Ka(e[".sv"],t):void be(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ga=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:be(!1,"Unexpected server value: "+e)}},Ka=function(e,t,n){e.hasOwnProperty("increment")||be(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&be(!1,"Unexpected increment value: "+r);const i=t.node();if(be(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Ya=function(e,t,n,r){return Ja(t,new Ba(n,e),r)},Qa=function(e,t,n){return Ja(e,new Va(t),n)};function Ja(e,t,n){const r=e.getPriority().val(),i=Ha(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Ha(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Ns(s,js(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Ns(i))),r.forEachChild(Rs,((e,r)=>{const i=Ja(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
     */class Za{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Xa(e,t){let n=t instanceof Ki?t:new Ki(t),r=e,i=Qi(n);for(;null!==i;){const e=qe(r.node.children,i)||{children:{},childCount:0};r=new Za(i,r,e),n=Zi(n),i=Qi(n)}return r}function el(e){return e.node.value}function tl(e,t){e.node.value=t,ol(e)}function nl(e){return e.node.childCount>0}function rl(e,t){wi(e.node.children,((n,r)=>{t(new Za(n,e,r))}))}function il(e,t,n,r){n&&!r&&t(e),rl(e,(e=>{il(e,t,!0,r)})),n&&r&&t(e)}function sl(e){return new Ki(null===e.parent?e.name:sl(e.parent)+"/"+e.name)}function ol(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===el(e)&&!nl(e)}(n),i=je(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ol(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ol(e))}
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
     */(e.parent,e.name,e)}const al=/[\[\].#$\/\u0000-\u001F\u007F]/,ll=/[\[\].#$\u0000-\u001F\u007F]/,cl=10485760,ul=function(e){return"string"==typeof e&&0!==e.length&&!al.test(e)},hl=function(e){return"string"==typeof e&&0!==e.length&&!ll.test(e)},dl=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!hi(e)||e&&"object"==typeof e&&je(e,".sv")},pl=function(e,t,n,r){r&&void 0===t||fl(Ye(e,"value"),t,n)},fl=function(e,t,n){const r=n instanceof Ki?new ls(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+us(r));if("function"==typeof t)throw new Error(e+"contains a function "+us(r)+" with contents = "+t.toString());if(hi(t))throw new Error(e+"contains "+t.toString()+" "+us(r));if("string"==typeof t&&t.length>cl/3&&Qe(t)>cl)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+us(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(wi(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!ul(t)))throw new Error(e+" contains an invalid key ("+t+") "+us(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Qe(t),cs(e)}(r,t),fl(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Qe(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+us(r)+" in addition to actual children.")}},gl=function(e,t,n,r){if(r&&void 0===t)return;const i=Ye(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];wi(t,((e,t)=>{const r=new Ki(e);if(fl(i,t,ns(n,r)),".priority"===Xi(r)&&!dl(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=es(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!ul(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ss);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&as(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},ml=function(e,t,n,r){if(!(r&&void 0===n||hl(n)))throw new Error(Ye(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},vl=function(e,t){if(".info"===Qi(t))throw new Error(e+" failed = Can't modify data under /.info/")},yl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ul(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),hl(e)}(n))throw new Error(Ye(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class wl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _l(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||os(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function bl(e,t,n){_l(e,n),kl(e,(e=>os(e,t)))}function xl(e,t,n){_l(e,n),kl(e,(e=>as(e,t)||as(t,e)))}function kl(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Cl(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Cl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();ii&&oi("event: "+n.toString()),ki(r)}}}
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
     */class Il{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=io(),this.transactionQueueTree_=new Za,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Tl(e,t,n){if(e.stats_=Di(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new no(e.repoInfo_,((t,n,r,i)=>{$l(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Nl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new ps(e.repoInfo_,t,((t,n,r,i)=>{$l(e,t,n,r,i)}),(t=>{Nl(e,t)}),(t=>{!function(e,t){wi(t,((t,n)=>{Rl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ai[n]||(Ai[n]=t()),Ai[n]}(e.repoInfo_,(()=>new lo(e.stats_,e.server_))),e.infoData_=new ro,e.infoSyncTree_=new Ta({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Na(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Rl(e,"connected",!1),e.serverSyncTree_=new Ta({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);xl(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Sl(e){const t=e.infoData_.getNode(new Ki(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function El(e){return(t=(t={timestamp:Sl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function $l(e,t,n,r,i){e.dataUpdateCount++;const s=new Ki(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=Ve(n,(e=>js(e)));o=function(e,t,n,r){const i=Ua(e,r);if(i){const r=ja(i),s=r.path,o=r.queryId,a=is(s,t),l=Io.fromObject(n);return qa(e,s,new go(uo(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=js(n);o=function(e,t,n,r){const i=Ua(e,r);if(null!=i){const r=ja(i),s=r.path,o=r.queryId,a=is(s,t);return qa(e,s,new fo(uo(o),a,n))}return[]}(e.serverSyncTree_,s,t,i)}else if(r){const t=Ve(n,(e=>js(e)));o=function(e,t,n){const r=Io.fromObject(n);return Oa(e,new go({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=js(n);o=Na(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Ml(e,s)),xl(e.eventQueue_,a,o)}function Nl(e,t){Rl(e,"connected",t),!1===t&&function(e){Ol(e,"onDisconnectEvents");const t=El(e),n=io();oo(e.onDisconnect_,Yi(),((r,i)=>{const s=Ya(r,i,e.serverSyncTree_,t);so(n,r,s)}));let r=[];oo(n,Yi(),((t,n)=>{r=r.concat(Na(e.serverSyncTree_,t,n));const i=Wl(e,t);Ml(e,i)})),e.onDisconnect_=io(),xl(e.eventQueue_,Yi(),r)}(e)}function Rl(e,t,n){const r=new Ki("/.info/"+t),i=js(n);e.infoData_.updateSnapshot(r,i);const s=Na(e.infoSyncTree_,r,i);xl(e.eventQueue_,r,s)}function zl(e){return e.nextWriteId_++}function Pl(e,t,n){let r;r=".info"===Qi(t._path)?Ra(e.infoSyncTree_,t,n):Ra(e.serverSyncTree_,t,n),bl(e.eventQueue_,t._path,r)}function Ol(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),oi(n,...t)}function Al(e,t,n,r){t&&ki((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Dl(e,t,n){return Pa(e.serverSyncTree_,t,n)||Fs.EMPTY_NODE}function Ll(e,t=e.transactionQueueTree_){if(t||ql(e,t),el(t)){const n=Ul(e,t);be(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Dl(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];be(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=is(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{Ol(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat($a(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ql(e,Xa(e.transactionQueueTree_,t)),Ll(e,e.transactionQueueTree_),xl(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)ki(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{ui("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Ml(e,t)}}),o)}(e,sl(t),n)}else nl(t)&&rl(t,(t=>{Ll(e,t)}))}function Ml(e,t){const n=Fl(e,t),r=sl(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=is(n,l.path);let u,h=!1;if(be(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat($a(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat($a(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Dl(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){fl("transaction failed: Data returned ",r,l.path);let t=js(r);"object"==typeof r&&null!=r&&je(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=El(e),c=Qa(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=zl(e),s.splice(s.indexOf(o),1),i=i.concat(Sa(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat($a(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat($a(e.serverSyncTree_,l.currentWriteId,!0))}xl(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;ql(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)ki(r[e]);Ll(e,e.transactionQueueTree_)}(e,Ul(e,n),r),r}function Fl(e,t){let n,r=e.transactionQueueTree_;for(n=Qi(t);null!==n&&void 0===el(r);)r=Xa(r,n),n=Qi(t=Zi(t));return r}function Ul(e,t){const n=[];return jl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function jl(e,t,n){const r=el(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);rl(t,(t=>{jl(e,t,n)}))}function ql(e,t){const n=el(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,tl(t,n.length>0?n:void 0)}rl(t,(t=>{ql(e,t)}))}function Wl(e,t){const n=sl(Fl(e,t)),r=Xa(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Vl(e,t)})),Vl(e,r),il(r,(t=>{Vl(e,t)})),n}function Vl(e,t){const n=el(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(be(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(be(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat($a(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?tl(t,void 0):n.length=s+1,xl(e.eventQueue_,sl(t),i);for(let e=0;e<r.length;e++)ki(r[e])}}
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
     */const Bl=function(e,t){const n=Hl(e),r=n.namespace;"firebase.com"===n.domain&&ci(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ui("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ri(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new Ki(n.pathString)}},Hl=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ui(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Gl{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class Kl{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
     */class Yl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return be(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
     */class Ql{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return rs(this._path)?null:Xi(this._path)}get ref(){return new Jl(this._repo,this._path)}get _queryIdentifier(){const e=to(this._queryParams),t=vi(e);return"{}"===t?"default":t}get _queryObject(){return to(this._queryParams)}isEqual(e){if(!((e=Je(e))instanceof Ql))return!1;const t=this._repo===e._repo,n=os(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Jl extends Ql{constructor(e,t){super(e,t,new Xs,!1)}get parent(){const e=ts(this._path);return null===e?null:new Jl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Zl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ki(e),n=ec(this.ref,e);return new Zl(this._node.getChild(t),n,Rs)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Zl(n,ec(this.ref,t),Rs))))}hasChild(e){const t=new Ki(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xl(e,t){return(e=Je(e))._checkNotDeleted("ref"),void 0!==t?ec(e._root,t):e._root}function ec(e,t){var n,r,i,s;return null===Qi((e=Je(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),ml(n,r,i,s)):ml("child","path",t,!1),new Jl(e._repo,ns(e._path,t))}function tc(e,t){e=Je(e),vl("set",e._path),pl("set",t,e._path,!1);const n=new $e;return function(e,t,n,r,i){Ol(e,"set",{path:t.toString(),value:n,priority:r});const s=El(e),o=js(n,r),a=Pa(e.serverSyncTree_,t),l=Qa(o,a,s),c=zl(e),u=Sa(e.serverSyncTree_,t,l,c,!0);_l(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||ui("set at "+t+" failed: "+n);const o=$a(e.serverSyncTree_,c,!s);xl(e.eventQueue_,t,o),Al(0,i,n,r)}));const h=Wl(e,t);Ml(e,h),xl(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function nc(e,t){gl("update",t,e._path,!1);const n=new $e;return function(e,t,n,r){Ol(e,"update",{path:t.toString(),value:n});let i=!0;const s=El(e),o={};if(wi(n,((n,r)=>{i=!1,o[n]=Ya(ns(t,n),js(r),e.serverSyncTree_,s)})),i)oi("update() called with empty data.  Don't do anything."),Al(0,r,"ok",void 0);else{const i=zl(e),s=Ea(e.serverSyncTree_,t,o,i);_l(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||ui("update at "+t+" failed: "+n);const a=$a(e.serverSyncTree_,i,!o),l=a.length>0?Ml(e,t):t;xl(e.eventQueue_,l,a),Al(0,r,n,s)})),wi(n,(n=>{const r=Wl(e,ns(t,n));Ml(e,r)})),xl(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class rc{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Gl("value",this,new Zl(e.snapshotNode,new Jl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kl(this,e,t):null}matches(e){return e instanceof rc&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ic{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kl(this,e,t):null}createEvent(e,t){be(null!=e.childName,"Child events should have a childName.");const n=ec(new Jl(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Gl(e.type,this,new Zl(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ic&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function sc(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Pl(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Yl(n,s||void 0),a="value"===t?new rc(o):new ic(t,o);return function(e,t,n){let r;r=".info"===Qi(t._path)?za(e.infoSyncTree_,t,n):za(e.serverSyncTree_,t,n),bl(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Pl(e._repo,e,a)}function oc(e,t,n,r){return sc(e,"value",t,n,r)}class ac extends class{}{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new Ki(this._path);if(rs(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new qs(t),r=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return function(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===ys){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==di)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==pi)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Rs){if(null!=t&&!dl(t)||null!=n&&!dl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(be(e.getIndex()instanceof qs||e.getIndex()===Ws,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}(r),new Ql(e._repo,e._path,r,!0)}}!function(e){be(!pa,"__referenceConstructor has already been defined"),pa=e}(Jl),function(e){be(!fa,"__referenceConstructor has already been defined"),fa=e}(Jl);
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
const lc={};function cc(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),oi("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Bl(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Bl(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new Si(Si.OWNER):new Ti(e.name,e.options,t);yl("Invalid Firebase Database URL",l),rs(l.path)||ci("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=lc[t.name];i||(i={},lc[t.name]=i);let s=i[e.toURLString()];s&&ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Il(e,false,n,r),i[e.toURLString()]=s,s}(c,e,u,new Ii(e.name,n));return new uc(h,e)}class uc{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Tl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jl(this._repo,Yi())),this._rootInternal}_delete(){return this._checkNotDeleted("delete"),function(e,t){const n=lc[t];n&&n[e.key]===e||ci(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null,Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ci("Cannot call "+e+" on a deleted database.")}}function hc(e=kt(),t){return wt(e,"database-exp").getImmediate({identifier:t})}
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
const dc={".sv":"timestamp"};function pc(e){return{".sv":{increment:e}}}!function(e){!function(e){Kr=e}(xt),yt(new Ze("database-exp",((e,{instanceIdentifier:t})=>cc(e.getProvider("app-exp").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Ct("@firebase/database","0.0.900-exp.6ef484a04",e)}();const fc=[];function gc(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!fc.length;for(const e of i)e[1](),fc.push(e,t);if(e){for(let e=0;e<fc.length;e+=2)fc[e][0](fc[e+1]);fc.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const l=[o,a];return i.add(l),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(l),0===i.size&&(r(),r=null)}}}}const mc=()=>{const e=Hr();return{authStore:{subscribe:gc({user:null,loading:!0},(t=>function(e,t,n,r){return Je(e).onAuthStateChanged(t,n,r)}(e,(async e=>{t(e?{user:{...e,displayName:e.displayName.split(" ")[0]},loading:!1}:{user:null,loading:!1})})))).subscribe},loginWithGoogle:()=>{const t=new zn;return async function(e,t,n){const r=Cn(e);zt(t instanceof $n,e,"argument-error");const i=Er(r,n);return new Br(r,"signInViaPopup",t,i).executeNotNull()}(e,t).then((async e=>{const{user:t}=e;if(t&&t.metadata.creationTime==t.metadata.lastSignInTime){const e=Xl(hc(),`users/info/${t.uid}`);await tc(e,{name:t.displayName.split(" ")[0],photo:t.photoURL}),await Fn(t,{displayName:t.displayName.split(" ")[0]})}}))},logout:()=>function(e){return Je(e).signOut()}(e)}};function vc(e){w(e,"svelte-1jm7x0p",".r-h-4.svelte-1jm7x0p{height:1rem}.r-w-4.svelte-1jm7x0p{width:1rem}")}function yc(t){let n,r,i,s;return{c(){n=C("svg"),r=C("path"),i=C("polyline"),s=C("line"),$(r,"d","M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"),$(i,"points","16 17 21 12 16 7"),$(s,"x1","21"),$(s,"y1","12"),$(s,"x2","9"),$(s,"y2","12"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width","24"),$(n,"height","24"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","r-h-4 r-w-4 svelte-1jm7x0p")},m(e,t){_(e,n,t),y(n,r),y(n,i),y(n,s)},p:e,i:e,o:e,d(e){e&&b(n)}}}
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
Ct("firebase-exp","9.0.0-beta.7","app");class wc extends he{constructor(e){super(),ue(this,e,null,yc,o,{},vc)}}var _c=function(e){var t=e.map((function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})),n={},r={};e.forEach((function(e,i){n[e]=t[i],r[t[i]]=e}));var i=new RegExp("["+(e.join("").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+"]"),"g"),s=new RegExp(t.join("|"),"g");return{encode:function(e){return e.replace(i,(function(e){return n[e]}))},decode:function(e){return e.replace(s,(function(e){return r[e]}))}}},bc=_c(".$[]#/%".split("")),xc=bc.encode;bc.decode;var kc=_c(".$[]#%".split(""));kc.encode,kc.decode;var Cc=xc;function Ic(e){w(e,"svelte-1wxg76c",'.svelte-1wxg76c.svelte-1wxg76c,.svelte-1wxg76c.svelte-1wxg76c::before,.svelte-1wxg76c.svelte-1wxg76c::after{box-sizing:border-box}button.svelte-1wxg76c.svelte-1wxg76c{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1wxg76c.svelte-1wxg76c{text-transform:none}button.svelte-1wxg76c.svelte-1wxg76c,[type=\'button\'].svelte-1wxg76c.svelte-1wxg76c{-webkit-appearance:button}.svelte-1wxg76c.svelte-1wxg76c::-moz-focus-inner{border-style:none;padding:0}.svelte-1wxg76c.svelte-1wxg76c:-moz-focusring{outline:1px dotted ButtonText}.svelte-1wxg76c.svelte-1wxg76c:-moz-ui-invalid{box-shadow:none}.svelte-1wxg76c.svelte-1wxg76c::-webkit-inner-spin-button,.svelte-1wxg76c.svelte-1wxg76c::-webkit-outer-spin-button{height:auto}.svelte-1wxg76c.svelte-1wxg76c::-webkit-search-decoration{-webkit-appearance:none}.svelte-1wxg76c.svelte-1wxg76c::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}button.svelte-1wxg76c.svelte-1wxg76c{background-color:transparent;background-image:none}.svelte-1wxg76c.svelte-1wxg76c,.svelte-1wxg76c.svelte-1wxg76c::before,.svelte-1wxg76c.svelte-1wxg76c::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1wxg76c.svelte-1wxg76c{cursor:pointer}.svelte-1wxg76c.svelte-1wxg76c:-moz-focusring{outline:auto}button.svelte-1wxg76c.svelte-1wxg76c{padding:0;line-height:inherit;color:inherit}.svelte-1wxg76c.svelte-1wxg76c,.svelte-1wxg76c.svelte-1wxg76c::before,.svelte-1wxg76c.svelte-1wxg76c::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}.form-input.svelte-1wxg76c.svelte-1wxg76c,.form-textarea.svelte-1wxg76c.svelte-1wxg76c,.form-select.svelte-1wxg76c.svelte-1wxg76c,.form-multiselect.svelte-1wxg76c.svelte-1wxg76c{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}.form-input.svelte-1wxg76c.svelte-1wxg76c:focus,.form-textarea.svelte-1wxg76c.svelte-1wxg76c:focus,.form-select.svelte-1wxg76c.svelte-1wxg76c:focus,.form-multiselect.svelte-1wxg76c.svelte-1wxg76c:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#2563eb}.form-input.svelte-1wxg76c.svelte-1wxg76c::-moz-placeholder,.form-textarea.svelte-1wxg76c.svelte-1wxg76c::-moz-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1wxg76c.svelte-1wxg76c:-ms-input-placeholder,.form-textarea.svelte-1wxg76c.svelte-1wxg76c:-ms-input-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1wxg76c.svelte-1wxg76c::placeholder,.form-textarea.svelte-1wxg76c.svelte-1wxg76c::placeholder{color:#6b7280;opacity:1}.r-prose.svelte-1wxg76c.svelte-1wxg76c{color:#374151;max-width:65ch}.r-prose.svelte-1wxg76c.svelte-1wxg76c{font-size:1rem;line-height:1.75}.r-prose.svelte-1wxg76c>.svelte-1wxg76c:first-child{margin-top:0}.r-prose.svelte-1wxg76c>.svelte-1wxg76c:last-child{margin-bottom:0}.r-fixed.svelte-1wxg76c.svelte-1wxg76c{position:fixed}.r-top-6.svelte-1wxg76c.svelte-1wxg76c{top:1.5rem}.r-right-6.svelte-1wxg76c.svelte-1wxg76c{right:1.5rem}.r-mx-auto.svelte-1wxg76c.svelte-1wxg76c{margin-left:auto;margin-right:auto}.r-my-16.svelte-1wxg76c.svelte-1wxg76c{margin-top:4rem;margin-bottom:4rem}.r-mx-4.svelte-1wxg76c.svelte-1wxg76c{margin-left:1rem;margin-right:1rem}.r-mt-4.svelte-1wxg76c.svelte-1wxg76c{margin-top:1rem}.r-mt-16.svelte-1wxg76c.svelte-1wxg76c{margin-top:4rem}.r-mb-2.svelte-1wxg76c.svelte-1wxg76c{margin-bottom:0.5rem}.r-mt-8.svelte-1wxg76c.svelte-1wxg76c{margin-top:2rem}.r-mr-2.svelte-1wxg76c.svelte-1wxg76c{margin-right:0.5rem}.r-flex.svelte-1wxg76c.svelte-1wxg76c{display:flex}.r-hidden.svelte-1wxg76c.svelte-1wxg76c{display:none}.r-h-9.svelte-1wxg76c.svelte-1wxg76c{height:2.25rem}.r-h-28.svelte-1wxg76c.svelte-1wxg76c{height:7rem}.r-h-12.svelte-1wxg76c.svelte-1wxg76c{height:3rem}.r-h-6.svelte-1wxg76c.svelte-1wxg76c{height:1.5rem}.r-h-4.svelte-1wxg76c.svelte-1wxg76c{height:1rem}.r-max-h-96.svelte-1wxg76c.svelte-1wxg76c{max-height:24rem}.r-w-full.svelte-1wxg76c.svelte-1wxg76c{width:100%}.r-w-12.svelte-1wxg76c.svelte-1wxg76c{width:3rem}.r-w-6.svelte-1wxg76c.svelte-1wxg76c{width:1.5rem}.r-w-4.svelte-1wxg76c.svelte-1wxg76c{width:1rem}.r-min-w-0.svelte-1wxg76c.svelte-1wxg76c{min-width:0px}.r-max-w-none.svelte-1wxg76c.svelte-1wxg76c{max-width:none}.r-max-w-full.svelte-1wxg76c.svelte-1wxg76c{max-width:100%}.r-flex-grow.svelte-1wxg76c.svelte-1wxg76c{flex-grow:1}.r-flex-col.svelte-1wxg76c.svelte-1wxg76c{flex-direction:column}.r-items-center.svelte-1wxg76c.svelte-1wxg76c{align-items:center}.r-justify-end.svelte-1wxg76c.svelte-1wxg76c{justify-content:flex-end}.r-gap-10.svelte-1wxg76c.svelte-1wxg76c{gap:2.5rem}.r-gap-2.svelte-1wxg76c.svelte-1wxg76c{gap:0.5rem}.r-gap-4.svelte-1wxg76c.svelte-1wxg76c{gap:1rem}.r-self-end.svelte-1wxg76c.svelte-1wxg76c{align-self:flex-end}.r-overflow-y-auto.svelte-1wxg76c.svelte-1wxg76c{overflow-y:auto}.r-overflow-x-hidden.svelte-1wxg76c.svelte-1wxg76c{overflow-x:hidden}.r-break-words.svelte-1wxg76c.svelte-1wxg76c{overflow-wrap:break-word}.r-rounded-md.svelte-1wxg76c.svelte-1wxg76c{border-radius:0.375rem}.r-rounded-full.svelte-1wxg76c.svelte-1wxg76c{border-radius:9999px}.\\!r-rounded-lg.svelte-1wxg76c.svelte-1wxg76c{border-radius:0.5rem !important}.r-border-gray-300.svelte-1wxg76c.svelte-1wxg76c{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.r-bg-gray-100.svelte-1wxg76c.svelte-1wxg76c{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.r-bg-primary-100.svelte-1wxg76c.svelte-1wxg76c{background-color:var(--reactive-primary-100, #e0f2fe)}.r-bg-primary-50.svelte-1wxg76c.svelte-1wxg76c{background-color:var(--reactive-primary-50, #f0f9ff)}.r-bg-primary-200.svelte-1wxg76c.svelte-1wxg76c{background-color:var(--reactive-primary-200, #bae6fd)}.r-bg-white.svelte-1wxg76c.svelte-1wxg76c{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.r-bg-gradient-to-r.svelte-1wxg76c.svelte-1wxg76c{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.r-from-primary-100.svelte-1wxg76c.svelte-1wxg76c{--tw-gradient-from:var(--reactive-primary-100, #e0f2fe);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.r-to-secondary-100.svelte-1wxg76c.svelte-1wxg76c{--tw-gradient-to:var(--reactive-secondary-100, #f3e8ff)}.r-py-1.svelte-1wxg76c.svelte-1wxg76c{padding-top:0.25rem;padding-bottom:0.25rem}.r-px-6.svelte-1wxg76c.svelte-1wxg76c{padding-left:1.5rem;padding-right:1.5rem}.r-py-4.svelte-1wxg76c.svelte-1wxg76c{padding-top:1rem;padding-bottom:1rem}.r-px-4.svelte-1wxg76c.svelte-1wxg76c{padding-left:1rem;padding-right:1rem}.r-px-2.svelte-1wxg76c.svelte-1wxg76c{padding-left:0.5rem;padding-right:0.5rem}.r-py-2.svelte-1wxg76c.svelte-1wxg76c{padding-top:0.5rem;padding-bottom:0.5rem}.\\!r-px-3.svelte-1wxg76c.svelte-1wxg76c{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!r-py-1\\.5.svelte-1wxg76c.svelte-1wxg76c{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!r-py-1.svelte-1wxg76c.svelte-1wxg76c{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.r-text-center.svelte-1wxg76c.svelte-1wxg76c{text-align:center}.r-font-sans.svelte-1wxg76c.svelte-1wxg76c{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.r-text-3xl.svelte-1wxg76c.svelte-1wxg76c{font-size:1.875rem;line-height:2.25rem}.r-text-2xl.svelte-1wxg76c.svelte-1wxg76c{font-size:1.5rem;line-height:2rem}.r-text-base.svelte-1wxg76c.svelte-1wxg76c{font-size:1rem;line-height:1.5rem}.r-text-lg.svelte-1wxg76c.svelte-1wxg76c{font-size:1.125rem;line-height:1.75rem}.r-font-bold.svelte-1wxg76c.svelte-1wxg76c{font-weight:700}.r-font-medium.svelte-1wxg76c.svelte-1wxg76c{font-weight:500}.r-font-normal.svelte-1wxg76c.svelte-1wxg76c{font-weight:400}.r-font-semibold.svelte-1wxg76c.svelte-1wxg76c{font-weight:600}.r-text-white.svelte-1wxg76c.svelte-1wxg76c{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.r-text-black.svelte-1wxg76c.svelte-1wxg76c{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.r-text-primary-600.svelte-1wxg76c.svelte-1wxg76c{color:var(--reactive-primary-600, #0284c7)}.r-text-gray-700.svelte-1wxg76c.svelte-1wxg76c{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.r-text-primary-900.svelte-1wxg76c.svelte-1wxg76c{color:var(--reactive-primary-900, #0c4a6e)}.r-text-gray-600.svelte-1wxg76c.svelte-1wxg76c{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.r-text-primary-800.svelte-1wxg76c.svelte-1wxg76c{color:var(--reactive-primary-800, #075985)}.r-text-primary-500.svelte-1wxg76c.svelte-1wxg76c{color:var(--reactive-primary-500, #0ea5e9)}.r-text-gray-400.svelte-1wxg76c.svelte-1wxg76c{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.r-text-red-600.svelte-1wxg76c.svelte-1wxg76c{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.r-text-pink-600.svelte-1wxg76c.svelte-1wxg76c{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!r-ring-1.svelte-1wxg76c.svelte-1wxg76c{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!r-ring-primary-500.svelte-1wxg76c.svelte-1wxg76c{--tw-ring-color:var(--reactive-primary-500, #0ea5e9) !important}.hover\\:r-bg-primary-100.svelte-1wxg76c.svelte-1wxg76c:hover{background-color:var(--reactive-primary-100, #e0f2fe)}.hover\\:r-bg-primary-200.svelte-1wxg76c.svelte-1wxg76c:hover{background-color:var(--reactive-primary-200, #bae6fd)}.hover\\:r-bg-red-100\\/60.svelte-1wxg76c.svelte-1wxg76c:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:r-bg-pink-100\\/60.svelte-1wxg76c.svelte-1wxg76c:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:r-bg-primary-50.svelte-1wxg76c.svelte-1wxg76c:hover{background-color:var(--reactive-primary-50, #f0f9ff)}.hover\\:r-from-primary-200.svelte-1wxg76c.svelte-1wxg76c:hover{--tw-gradient-from:var(--reactive-primary-200, #bae6fd);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.hover\\:r-to-secondary-200.svelte-1wxg76c.svelte-1wxg76c:hover{--tw-gradient-to:var(--reactive-secondary-200, #e9d5ff)}.hover\\:\\!r-shadow-md.svelte-1wxg76c.svelte-1wxg76c:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!r-ring-2.svelte-1wxg76c.svelte-1wxg76c:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:r-cursor-not-allowed.svelte-1wxg76c.svelte-1wxg76c:disabled{cursor:not-allowed}.disabled\\:r-bg-gray-100.svelte-1wxg76c.svelte-1wxg76c:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:r-text-gray-600.svelte-1wxg76c.svelte-1wxg76c:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:r-opacity-70.svelte-1wxg76c.svelte-1wxg76c:disabled{opacity:0.7}.disabled\\:hover\\:r-from-primary-100.svelte-1wxg76c.svelte-1wxg76c:disabled:hover{--tw-gradient-from:var(--reactive-primary-100, #e0f2fe);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}')}function Tc(e,t,n){const r=e.slice();return r[17]=t[n],r[19]=n,r}function Sc(e,t){let n,r,i,s,o,a,l,c,u,h=t[17]+"",d=(t[4]?"-":t[3][t[17]])+"";function p(){return t[8](t[17])}return{key:e,first:null,c(){n=k("button"),r=k("span"),i=I(h),s=T(),o=I(d),a=T(),$(r,"class","r-mr-2 svelte-1wxg76c"),$(n,"type","button"),$(n,"class",l=v((t[2].includes(t[17])?"r-bg-primary-200 hover:r-bg-primary-100 dark:!r-bg-primary-800 dark:hover:!r-bg-primary-600":"r-bg-white dark:!r-bg-gray-700 hover:r-bg-primary-50 dark:hover:!r-bg-primary-600")+" !r-px-3 !r-py-1.5 !r-rounded-lg !r-ring-1 !r-ring-primary-500 hover:!r-ring-2 hover:!r-shadow-md")+" svelte-1wxg76c"),this.first=n},m(e,t){_(e,n,t),y(n,r),y(r,i),y(n,s),y(n,o),y(n,a),c||(u=E(n,"click",p),c=!0)},p(e,r){t=e,1&r&&h!==(h=t[17]+"")&&N(i,h),25&r&&d!==(d=(t[4]?"-":t[3][t[17]])+"")&&N(o,d),5&r&&l!==(l=v((t[2].includes(t[17])?"r-bg-primary-200 hover:r-bg-primary-100 dark:!r-bg-primary-800 dark:hover:!r-bg-primary-600":"r-bg-white dark:!r-bg-gray-700 hover:r-bg-primary-50 dark:hover:!r-bg-primary-600")+" !r-px-3 !r-py-1.5 !r-rounded-lg !r-ring-1 !r-ring-primary-500 hover:!r-ring-2 hover:!r-shadow-md")+" svelte-1wxg76c")&&$(n,"class",l)},d(e){e&&b(n),c=!1,u()}}}function Ec(t){let n,r=[],i=new Map,s=t[0];const o=e=>e[19];for(let e=0;e<s.length;e+=1){let n=Tc(t,s,e),a=o(n);i.set(a,r[e]=Sc(a,n))}return{c(){n=k("div");for(let e=0;e<r.length;e+=1)r[e].c();$(n,"class","r-flex r-gap-4 r-text-2xl r-mt-8 svelte-1wxg76c")},m(e,t){_(e,n,t);for(let e=0;e<r.length;e+=1)r[e].m(n,null)},p(e,[t]){61&t&&(s=e[0],r=re(r,t,o,1,e,s,i,n,te,Sc,null,Tc))},i:e,o:e,d(e){e&&b(n);for(let e=0;e<r.length;e+=1)r[e].d()}}}function $c(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s()));let o,a,l,{reactions:c=["😭","😕","😀","🤩"]}=n,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=mc();o=e.authStore,s(),s=u(o,(e=>r(7,i=e))),a=e.loginWithGoogle,l=e.logout}catch(e){throw e}const d=hc();let p=[],f={};c.forEach((e=>r(3,f[e]=0,f)));let g=!0,m=!0;const v=e=>{!i.user||m||g||(p.includes(e)?(async e=>{r(2,p=p.filter((t=>t!==e))),r(3,f[e]--,f),r(3,f={...f});const t=`posts/${Cc(h)}/reactions`,n=`users/activity/${i.user.uid}/${Cc(h)}/reactions`,s={};s[`${t}/count/${e}`]=pc(-1),s[`${t}/users/${e}/${i.user.uid}`]=null,s[`${n}/${e}`]=null,nc(Xl(d),s)})(e):(async e=>{r(2,p=[...p,e]),r(3,f[e]++,f),r(3,f={...f});const t=`posts/${Cc(h)}/reactions`,n=`users/activity/${i.user.uid}/${Cc(h)}/reactions`,s={};s[`${t}/count/${e}`]=pc(1),s[`${t}/users/${e}/${i.user.uid}`]=!0,s[`${n}/${e}`]=!0,nc(Xl(d),s)})(e))};return t.$$set=e=>{"reactions"in e&&r(0,c=e.reactions),"page"in e&&r(6,h=e.page)},t.$$.update=()=>{192&t.$$.dirty&&(oc(Xl(d,`posts/${Cc(h)}/reactions/count`),(e=>{var t;t=e.val()??{},Object.entries(t??{}).forEach((([e,t])=>{r(3,f[e]=t,f)})),r(4,m=!1)}),{onlyOnce:!0}),i.user?oc(Xl(d,`users/activity/${i.user.uid}/${Cc(h)}/reactions`),(e=>{var t;t=e.val()??{},r(2,p=Object.keys(t)),g=!1}),{onlyOnce:!0}):r(2,p=[]))},[c,o,p,f,m,v,h,i,e=>v(e)]}class Nc extends he{constructor(e){super(),ue(this,e,$c,Ec,o,{reactions:0,page:6},Ic)}}var Rc="en",zc={},Pc={};function Oc(){return Rc}function Ac(e){return zc[e]?e:Pc[e.toLowerCase()]?Pc[e.toLowerCase()]:void 0}function Dc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.localeMatcher||"lookup";switch(n){case"lookup":case"best fit":return Lc(e);default:throw new RangeError('Invalid "localeMatcher" option: '.concat(n))}}function Lc(e){var t=Ac(e);if(t)return t;for(var n=e.split("-");e.length>1;){n.pop();var r=Ac(e=n.join("-"));if(r)return r}}var Mc={af:function(e){return 1==e?"one":"other"},am:function(e){return e>=0&&e<=1?"one":"other"},ar:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 0==e?"zero":1==e?"one":2==e?"two":n>=3&&n<=10?"few":n>=11&&n<=99?"many":"other"},ast:function(e){var t=!String(e).split(".")[1];return 1==e&&t?"one":"other"},be:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2);return 1==r&&11!=i?"one":r>=2&&r<=4&&(i<12||i>14)?"few":n&&0==r||r>=5&&r<=9||i>=11&&i<=14?"many":"other"},br:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2),s=n&&t[0].slice(-6);return 1==r&&11!=i&&71!=i&&91!=i?"one":2==r&&12!=i&&72!=i&&92!=i?"two":(3==r||4==r||9==r)&&(i<10||i>19)&&(i<70||i>79)&&(i<90||i>99)?"few":0!=e&&n&&0==s?"many":"other"},bs:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==s&&11!=o||1==a&&11!=l?"one":i&&s>=2&&s<=4&&(o<12||o>14)||a>=2&&a<=4&&(l<12||l>14)?"few":"other"},cs:function(e){var t=String(e).split("."),n=t[0],r=!t[1];return 1==e&&r?"one":n>=2&&n<=4&&r?"few":r?"other":"many"},cy:function(e){return 0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},da:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e;return 1!=e&&(r||0!=n&&1!=n)?"other":"one"},dsb:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-2),o=r.slice(-2);return i&&1==s||1==o?"one":i&&2==s||2==o?"two":i&&(3==s||4==s)||3==o||4==o?"few":"other"},dz:function(e){return"other"},fil:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=r.slice(-1);return i&&(1==n||2==n||3==n)||i&&4!=s&&6!=s&&9!=s||!i&&4!=o&&6!=o&&9!=o?"one":"other"},fr:function(e){return e>=0&&e<2?"one":"other"},ga:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e?"one":2==e?"two":n&&e>=3&&e<=6?"few":n&&e>=7&&e<=10?"many":"other"},gd:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e||11==e?"one":2==e||12==e?"two":n&&e>=3&&e<=10||n&&e>=13&&e<=19?"few":"other"},he:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=Number(t[0])==e,s=i&&t[0].slice(-1);return 1==e&&r?"one":2==n&&r?"two":r&&(e<0||e>10)&&i&&0==s?"many":"other"},is:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e,i=n.slice(-1),s=n.slice(-2);return r&&1==i&&11!=s||!r?"one":"other"},ksh:function(e){return 0==e?"zero":1==e?"one":"other"},lt:function(e){var t=String(e).split("."),n=t[1]||"",r=Number(t[0])==e,i=r&&t[0].slice(-1),s=r&&t[0].slice(-2);return 1==i&&(s<11||s>19)?"one":i>=2&&i<=9&&(s<11||s>19)?"few":0!=n?"many":"other"},lv:function(e){var t=String(e).split("."),n=t[1]||"",r=n.length,i=Number(t[0])==e,s=i&&t[0].slice(-1),o=i&&t[0].slice(-2),a=n.slice(-2),l=n.slice(-1);return i&&0==s||o>=11&&o<=19||2==r&&a>=11&&a<=19?"zero":1==s&&11!=o||2==r&&1==l&&11!=a||2!=r&&1==l?"one":"other"},mk:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==s&&11!=o||1==a&&11!=l?"one":"other"},mt:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 1==e?"one":0==e||n>=2&&n<=10?"few":n>=11&&n<=19?"many":"other"},pa:function(e){return 0==e||1==e?"one":"other"},pl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),s=n.slice(-2);return 1==e&&r?"one":r&&i>=2&&i<=4&&(s<12||s>14)?"few":r&&1!=n&&(0==i||1==i)||r&&i>=5&&i<=9||r&&s>=12&&s<=14?"many":"other"},pt:function(e){var t=String(e).split(".")[0];return 0==t||1==t?"one":"other"},ro:function(e){var t=String(e).split("."),n=!t[1],r=Number(t[0])==e&&t[0].slice(-2);return 1==e&&n?"one":!n||0==e||1!=e&&r>=1&&r<=19?"few":"other"},ru:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),s=n.slice(-2);return r&&1==i&&11!=s?"one":r&&i>=2&&i<=4&&(s<12||s>14)?"few":r&&0==i||r&&i>=5&&i<=9||r&&s>=11&&s<=14?"many":"other"},se:function(e){return 1==e?"one":2==e?"two":"other"},si:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"";return 0==e||1==e||0==n&&1==r?"one":"other"},sl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-2);return r&&1==i?"one":r&&2==i?"two":r&&(3==i||4==i)||!r?"few":"other"}};Mc.as=Mc.am,Mc.az=Mc.af,Mc.bg=Mc.af,Mc.bn=Mc.am,Mc.ca=Mc.ast,Mc.ce=Mc.af,Mc.chr=Mc.af,Mc.de=Mc.ast,Mc.ee=Mc.af,Mc.el=Mc.af,Mc.en=Mc.ast,Mc.es=Mc.af,Mc.et=Mc.ast,Mc.eu=Mc.af,Mc.fa=Mc.am,Mc.fi=Mc.ast,Mc.fo=Mc.af,Mc.fur=Mc.af,Mc.fy=Mc.ast,Mc.gl=Mc.ast,Mc.gu=Mc.am,Mc.hi=Mc.am,Mc.hr=Mc.bs,Mc.hsb=Mc.dsb,Mc.hu=Mc.af,Mc.hy=Mc.fr,Mc.ia=Mc.ast,Mc.id=Mc.dz,Mc.it=Mc.ast,Mc.ja=Mc.dz,Mc.jgo=Mc.af,Mc.jv=Mc.dz,Mc.ka=Mc.af,Mc.kea=Mc.dz,Mc.kk=Mc.af,Mc.kl=Mc.af,Mc.km=Mc.dz,Mc.kn=Mc.am,Mc.ko=Mc.dz,Mc.ku=Mc.af,Mc.ky=Mc.af,Mc.lb=Mc.af,Mc.lkt=Mc.dz,Mc.lo=Mc.dz,Mc.ml=Mc.af,Mc.mn=Mc.af,Mc.mr=Mc.am,Mc.ms=Mc.dz,Mc.my=Mc.dz,Mc.nb=Mc.af,Mc.ne=Mc.af,Mc.nl=Mc.ast,Mc.nn=Mc.af,Mc.or=Mc.af,Mc.ps=Mc.af,Mc["pt-PT"]=Mc.ast,Mc.sah=Mc.dz,Mc.sd=Mc.af,Mc.sk=Mc.cs,Mc.so=Mc.af,Mc.sq=Mc.af,Mc.sr=Mc.bs,Mc.sv=Mc.ast,Mc.sw=Mc.ast,Mc.ta=Mc.af,Mc.te=Mc.af,Mc.th=Mc.dz,Mc.ti=Mc.pa,Mc.tk=Mc.af,Mc.to=Mc.dz,Mc.tr=Mc.af,Mc.ug=Mc.af,Mc.uk=Mc.ru,Mc.ur=Mc.ast,Mc.uz=Mc.af,Mc.vi=Mc.dz,Mc.wae=Mc.af,Mc.yi=Mc.ast,Mc.yue=Mc.dz,Mc.zh=Mc.dz,Mc.zu=Mc.am;var Fc=Mc;function Uc(e){return"pt-PT"===e?e:function(e){var t=e.match(jc);if(!t)throw new TypeError("Invalid locale: ".concat(e));return t[1]}(e)}var jc=/^([a-z0-9]+)/i;function qc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Wc=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=e.supportedLocalesOf(t);if(0===r.length)throw new RangeError("Unsupported locale: "+t);if(n&&"cardinal"!==n.type)throw new RangeError('Only "cardinal" "type" is supported');this.$=Fc[Uc(r[0])]}var t,n,r;return t=e,r=[{key:"supportedLocalesOf",value:function(e){return"string"==typeof e&&(e=[e]),e.filter((function(e){return Fc[Uc(e)]}))}}],(n=[{key:"select",value:function(e){return this.$(e)}}])&&qc(t.prototype,n),r&&qc(t,r),e}();function Vc(e){return(Vc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Bc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Yc(e,t,n[t])}))}return e}function Hc(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Gc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qc=["second","minute","hour","day","week","month","quarter","year"],Jc=["auto","always"],Zc=["long","short","narrow"],Xc=["lookup","best fit"],eu=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Gc(this,e),Yc(this,"numeric","always"),Yc(this,"style","long"),Yc(this,"localeMatcher","lookup");var r=n.numeric,i=n.style,s=n.localeMatcher;if(void 0!==r){if(Jc.indexOf(r)<0)throw new RangeError('Invalid "numeric" option: '.concat(r));this.numeric=r}if(void 0!==i){if(Zc.indexOf(i)<0)throw new RangeError('Invalid "style" option: '.concat(i));this.style=i}if(void 0!==s){if(Xc.indexOf(s)<0)throw new RangeError('Invalid "localeMatcher" option: '.concat(s));this.localeMatcher=s}if("string"==typeof t&&(t=[t]),t.push(Oc()),this.locale=e.supportedLocalesOf(t,{localeMatcher:this.localeMatcher})[0],!this.locale)throw new Error("No supported locale was found");Wc.supportedLocalesOf(this.locale).length>0?this.pluralRules=new Wc(this.locale):console.warn('"'.concat(this.locale,'" locale is not supported')),"undefined"!=typeof Intl&&Intl.NumberFormat?(this.numberFormat=new Intl.NumberFormat(this.locale),this.numberingSystem=this.numberFormat.resolvedOptions().numberingSystem):this.numberingSystem="latn",this.locale=Dc(this.locale,{localeMatcher:this.localeMatcher})}var t,n,r;return t=e,(n=[{key:"format",value:function(){var e=iu(arguments),t=Hc(e,2),n=t[0],r=t[1];return this.getRule(n,r).replace("{0}",this.formatNumber(Math.abs(n)))}},{key:"formatToParts",value:function(){var e=iu(arguments),t=Hc(e,2),n=t[0],r=t[1],i=this.getRule(n,r),s=i.indexOf("{0}");if(s<0)return[{type:"literal",value:i}];var o=[];return s>0&&o.push({type:"literal",value:i.slice(0,s)}),o=o.concat(this.formatNumberToParts(Math.abs(n)).map((function(e){return Bc({},e,{unit:r})}))),s+"{0}".length<i.length-1&&o.push({type:"literal",value:i.slice(s+"{0}".length)}),o}},{key:"getRule",value:function(e,t){var n=function(e){return zc[e]}(this.locale)[this.style][t];if("auto"===this.numeric)if(-2===e||-1===e){var r=n["previous".concat(-1===e?"":"-"+Math.abs(e))];if(r)return r}else if(1===e||2===e){var i=n["next".concat(1===e?"":"-"+Math.abs(e))];if(i)return i}else if(0===e&&n.current)return n.current;var s,o=n[(s=e,s<0||0===s&&function(e){return 1/e==-1/0}(s)?"past":"future")];return"string"==typeof o?o:o[this.pluralRules&&this.pluralRules.select(Math.abs(e))||"other"]||o.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"formatNumberToParts",value:function(e){return this.numberFormat&&this.numberFormat.formatToParts?this.numberFormat.formatToParts(e):[{type:"integer",value:this.formatNumber(e)}]}},{key:"resolvedOptions",value:function(){return{locale:this.locale,style:this.style,numeric:this.numeric,numberingSystem:this.numberingSystem}}}])&&Kc(t.prototype,n),r&&Kc(t,r),e}();eu.supportedLocalesOf=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e)e=[e];else if(!Array.isArray(e))throw new TypeError('Invalid "locales" argument');return e.filter((function(e){return Dc(e,t)}))},eu.addLocale=function(e){if(!e)throw new Error("No locale data passed");zc[e.locale]=e,Pc[e.locale.toLowerCase()]=e.locale},eu.setDefaultLocale=function(e){Rc=e},eu.getDefaultLocale=Oc,eu.PluralRules=Wc;var tu='Invalid "unit" argument';function nu(e){if("symbol"===Vc(e))throw new TypeError(tu);if("string"!=typeof e)throw new RangeError("".concat(tu,": ").concat(e));if("s"===e[e.length-1]&&(e=e.slice(0,e.length-1)),Qc.indexOf(e)<0)throw new RangeError("".concat(tu,": ").concat(e));return e}function ru(e){if(e=Number(e),Number.isFinite&&!Number.isFinite(e))throw new RangeError("".concat('Invalid "number" argument',": ").concat(e));return e}function iu(e){if(e.length<2)throw new TypeError('"unit" argument is required');return[ru(e[0]),nu(e[1])]}function su(e){return(su="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ou(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var au=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"cache",{})}var t,n,r;return t=e,(n=[{key:"get",value:function(){for(var e=this.cache,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i=0;i<n.length;i++){var s=n[i];if("object"!==su(e))return;e=e[s]}return e}},{key:"put",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.pop(),i=t.pop(),s=this.cache,o=0;o<t.length;o++){var a=t[o];"object"!==su(s[a])&&(s[a]={}),s=s[a]}return s[i]=r}}])&&ou(t.prototype,n),r&&ou(t,r),e}();function lu(e){return(lu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function cu(e,t){var n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if((i=n.next()).done)break;s=i.value}var o=s;if(t(o))return o;for(var a=o.split("-");a.length>1;)if(a.pop(),t(o=a.join("-")))return o}throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")))}var uu=60,hu=3600,du=86400,pu=7*du,fu=2630016,gu=31556952;function mu(e){switch(e){case"second":return 1;case"minute":return uu;case"hour":return hu;case"day":return du;case"week":return pu;case"month":return fu;case"year":return gu}}function vu(e){return void 0!==e.factor?e.factor:mu(e.unit||e.formatAs)||1}function yu(e){switch(e){case"floor":return Math.floor;default:return Math.round}}function wu(e){switch(e){case"floor":return 1;default:return.5}}function _u(e){return(_u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function bu(e,t){var n,r=t.prevStep,i=t.timestamp,s=t.now,o=t.future,a=t.round;return r&&(r.id||r.unit)&&(n=e["threshold_for_".concat(r.id||r.unit)]),void 0===n&&void 0!==e.threshold&&"function"==typeof(n=e.threshold)&&(n=n(s,o)),void 0===n&&(n=e.minTime),"object"===_u(n)&&(n=r&&r.id&&void 0!==n[r.id]?n[r.id]:n.default),"function"==typeof n&&(n=n(i,{future:o,getMinTimeForUnit:function(e,t){return xu(e,t||r&&r.formatAs,{round:a})}})),void 0===n&&e.test&&(n=e.test(i,{now:s,future:o})?0:9007199254740991),void 0===n&&(r?e.formatAs&&r.formatAs&&(n=xu(e.formatAs,r.formatAs,{round:a})):n=0),void 0===n&&console.warn("[javascript-time-ago] A step should specify `minTime`:\n"+JSON.stringify(e,null,2)),n}function xu(e,t,n){var r,i=n.round,s=mu(e);if(r=mu("now"===t?e:t),void 0!==s&&void 0!==r)return s-r*(1-wu(i))}function ku(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Cu(e,t,n[t])}))}return e}function Cu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Iu(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.units,a=n.getNextStep,l=function(e,t,n){var r=n.now,i=n.future,s=n.round;if(0===e.length)return;var o=Tu(e,t,{now:r,future:i||t<0,round:s});if(-1===o)return;var a=e[o];if(a.granularity){if(0===yu(s)(Math.abs(t)/vu(a)/a.granularity)*a.granularity&&o>0)return e[o-1]}return a}(e=function(e,t){return e.filter((function(e){var n=e.unit,r=e.formatAs;return!(n=n||r)||t.indexOf(n)>=0}))}(e,o),t,{now:r,future:i,round:s});return a?l?[e[e.indexOf(l)-1],l,e[e.indexOf(l)+1]]:[void 0,void 0,e[0]]:l}function Tu(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=bu(e[r],ku({prevStep:e[r-1],timestamp:n.now-1e3*t},n));return void 0===i||Math.abs(t)<i?r-1:r===e.length-1?r:Tu(e,t,n,r+1)}function Su(e,t,n){var r=n.now,i=n.round;if(mu(e)){var s=1e3*mu(e),o=t>r,a=Math.abs(t-r),l=yu(i)(a/s)*s;return o?l>0?a-l+function(e,t){return(1-wu(e))*t+1}(i,s):a-l+1:-(a-l)+function(e,t){return wu(e)*t}(i,s)}}var Eu=31536e9;function $u(e,t,n){var r=n.prevStep,i=n.nextStep,s=n.now,o=n.future,a=n.round,l=e.getTime?e.getTime():e,c=function(e){return Su(e,l,{now:s,round:a})},u=function(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.prevStep;if(e){var a=function(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.prevStep,a=bu(e,{timestamp:t,now:r,future:i,round:s,prevStep:o});if(void 0===a)return;return i?t-1e3*a+1:0===a&&t===r?Eu:t+1e3*a}(e,t,{now:r,future:i,round:s,prevStep:o});if(void 0===a)return;return a-r}return i?t-r+1:Eu}(o?t:i,l,{future:o,now:s,round:a,prevStep:o?r:t});if(void 0!==u){var h;if(t&&(t.getTimeToNextUpdate&&(h=t.getTimeToNextUpdate(l,{getTimeToNextUpdateForUnit:c,getRoundFunction:yu,now:s,future:o,round:a})),void 0===h)){var d=t.unit||t.formatAs;d&&(h=c(d))}return void 0===h?u:Math.min(h,u)}}var Nu={};function Ru(e){return Nu[e]}function zu(e){if(!e)throw new Error("[javascript-time-ago] No locale data passed.");Nu[e.locale]=e}var Pu={steps:[{formatAs:"now"},{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"}],labels:"long"};function Ou(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Au=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ou(e,t,n[t])}))}return e}({},Pu,{steps:Pu.steps.filter((function(e){return"second"!==e.formatAs}))}),Du=[{factor:1,unit:"now"},{threshold:1,threshold_for_now:45.5,factor:1,unit:"second"},{threshold:45.5,factor:uu,unit:"minute"},{threshold:150,granularity:5,factor:uu,unit:"minute"},{threshold:1350,factor:1800,unit:"half-hour"},{threshold:2550,threshold_for_minute:3150,factor:hu,unit:"hour"},{threshold:73800,factor:du,unit:"day"},{threshold:475200,factor:pu,unit:"week"},{threshold:2116800,factor:fu,unit:"month"},{threshold:27615168,factor:gu,unit:"year"}],Lu={gradation:Du,flavour:"long",units:["now","minute","hour","day","week","month","year"]},Mu={gradation:Du,flavour:"long-time",units:["now","minute","hour","day","week","month","year"]};function Fu(e){return e instanceof Date?e:new Date(e)}var Uu=[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"}],ju={},qu={minTime:function(e,t){return t.future,(0,t.getMinTimeForUnit)("day")},format:function(e,t){return ju[t]||(ju[t]={}),ju[t].dayMonth||(ju[t].dayMonth=new Intl.DateTimeFormat(t,{month:"short",day:"numeric"})),ju[t].dayMonth.format(Fu(e))}},Wu={minTime:function(e,t){return t.future?(e-(new Date(new Date(e).getFullYear(),0).getTime()-1))/1e3:(new Date(new Date(e).getFullYear()+1,0).getTime()-e)/1e3},format:function(e,t){return ju[t]||(ju[t]={}),ju[t].dayMonthYear||(ju[t].dayMonthYear=new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric"})),ju[t].dayMonthYear.format(Fu(e))}};"object"===("undefined"==typeof Intl?"undefined":lu(Intl))&&"function"==typeof Intl.DateTimeFormat?Uu.push(qu,Wu):Uu.push({formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"});var Vu={steps:Uu,labels:["mini","short-time","narrow","short"]};function Bu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Hu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Bu(e,t,n[t])}))}return e}({},Vu,{steps:[{formatAs:"now"}].concat(Vu.steps)});function Gu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ku=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Gu(e,t,n[t])}))}return e}({},Vu,{steps:Vu.steps.filter((function(e){return"second"!==e.formatAs}))});function Yu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Yu(e,t,n[t])}))}return e}({},Ku,{steps:[{formatAs:"now"}].concat(Ku.steps)});function Ju(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Zu(e,t,n[t])}))}return e}function Zu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xu=Ju({},Vu,{steps:Vu.steps.filter((function(e){return"second"!==e.formatAs})).map((function(e){return"minute"===e.formatAs?Ju({},e,{minTime:uu}):e}))}),eh={steps:[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"month"},{formatAs:"year"}],labels:["mini","short-time","narrow","short"]};function th(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var nh=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){th(e,t,n[t])}))}return e}({},eh,{steps:[{formatAs:"now"}].concat(eh.steps)});function rh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ih=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){rh(e,t,n[t])}))}return e}({},eh,{steps:eh.steps.filter((function(e){return"second"!==e.formatAs}))});function sh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oh=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){sh(e,t,n[t])}))}return e}({},ih,{steps:[{formatAs:"now"}].concat(ih.steps)});function ah(e){switch(e){case"default":case"round":return Pu;case"round-minute":return Au;case"approximate":return Lu;case"time":case"approximate-time":return Mu;case"mini":return eh;case"mini-now":return nh;case"mini-minute":return ih;case"mini-minute-now":return oh;case"twitter":return Vu;case"twitter-now":return Hu;case"twitter-minute":return Ku;case"twitter-minute-now":return Qu;case"twitter-first-minute":return Xu;default:return Lu}}function lh(e){return(lh="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ch(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function uh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var dh,ph=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.polyfill;uh(this,e),"string"==typeof t&&(t=[t]),this.locale=cu(t.concat(e.getDefaultLocale()),Ru),"undefined"!=typeof Intl&&Intl.NumberFormat&&(this.numberFormat=new Intl.NumberFormat(this.locale)),!1===r?(this.IntlRelativeTimeFormat=Intl.RelativeTimeFormat,this.IntlPluralRules=Intl.PluralRules):(this.IntlRelativeTimeFormat=eu,this.IntlPluralRules=eu.PluralRules),this.relativeTimeFormatCache=new au,this.pluralRulesCache=new au}var t,n,r;return t=e,(n=[{key:"format",value:function(e,t,n){var r,i;n||(!t||"string"==typeof(r=t)||function(e){return void 0!==lh(e)&&null!==e&&e.constructor===gh}(i=r)&&(Array.isArray(i.steps)||Array.isArray(i.gradation)||Array.isArray(i.flavour)||"string"==typeof i.flavour||Array.isArray(i.labels)||"string"==typeof i.labels||Array.isArray(i.units)||"function"==typeof i.custom)?n={}:(n=t,t=void 0)),t||(t=Au),"string"==typeof t&&(t=ah(t));var s,o=function(e){if(e.constructor===Date||function(e){return"object"===lh(e)&&"function"==typeof e.getTime}(e))return e.getTime();if("number"==typeof e)return e;throw new Error("Unsupported relative time formatter input: ".concat(lh(e),", ").concat(e))}(e),a=this.getLabels(t.flavour||t.labels),l=a.labels,c=a.labelsType;void 0!==t.now&&(s=t.now),void 0===s&&void 0!==n.now&&(s=n.now),void 0===s&&(s=Date.now());var u=(s-o)/1e3,h=n.future||u<0,d=function(e,t,n,r){var i=e.now||t&&t.now;return i?"string"==typeof i?i:r?i.future:i.past:n&&n.second&&n.second.current?n.second.current:void 0}(l,Ru(this.locale).now,Ru(this.locale).long,h);if(t.custom){var p=t.custom({now:s,date:new Date(o),time:o,elapsed:u,locale:this.locale});if(void 0!==p)return p}var f=function(e,t,n){var r=Object.keys(t);return n&&r.push("now"),e&&(r=e.filter((function(e){return"now"===e||r.indexOf(e)>=0}))),r}(t.units,l,d),g=n.round||t.round,m=ch(Iu(t.gradation||t.steps||Au.steps,u,{now:s,units:f,round:g,future:h,getNextStep:!0}),3),v=m[0],y=m[1],w=m[2],_=this.formatDateForStep(o,y,u,{labels:l,labelsType:c,nowLabel:d,now:s,future:h,round:g})||"";return n.getTimeToNextUpdate?[_,$u(o,y,{nextStep:w,prevStep:v,now:s,future:h,round:g})]:_}},{key:"formatDateForStep",value:function(e,t,n,r){var i=this,s=r.labels,o=r.labelsType,a=r.nowLabel,l=r.now,c=r.future,u=r.round;if(t){if(t.format)return t.format(e,this.locale,{formatAs:function(e,t){return i.formatValue(t,e,{labels:s,future:c})},now:l,future:c});var h=t.unit||t.formatAs;if(!h)throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(t)));if("now"===h)return a;var d=Math.abs(n)/vu(t);t.granularity&&(d=yu(u)(d/t.granularity)*t.granularity);var p=-1*Math.sign(n)*yu(u)(d);switch(0===p&&(p=c?0:-0),o){case"long":case"short":case"narrow":return this.getFormatter(o).format(p,h);default:return this.formatValue(p,h,{labels:s,future:c})}}}},{key:"formatValue",value:function(e,t,n){var r=n.labels,i=n.future;return this.getFormattingRule(r,t,e,{future:i}).replace("{0}",this.formatNumber(Math.abs(e)))}},{key:"getFormattingRule",value:function(e,t,n,r){var i=r.future;if(this.locale,"string"==typeof(e=e[t]))return e;var s=e[0===n?i?"future":"past":n<0?"past":"future"]||e;return"string"==typeof s?s:s[this.getPluralRules().select(Math.abs(n))]||s.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"getFormatter",value:function(e){return this.relativeTimeFormatCache.get(this.locale,e)||this.relativeTimeFormatCache.put(this.locale,e,new this.IntlRelativeTimeFormat(this.locale,{style:e}))}},{key:"getPluralRules",value:function(){return this.pluralRulesCache.get(this.locale)||this.pluralRulesCache.put(this.locale,new this.IntlPluralRules(this.locale))}},{key:"getLabels",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"string"==typeof e&&(e=[e]),e=(e=e.map((function(e){switch(e){case"tiny":case"mini-time":return"mini";default:return e}}))).concat("long");var t=Ru(this.locale),n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if((i=n.next()).done)break;s=i.value}var o=s;if(t[o])return{labelsType:o,labels:t[o]}}}}])&&hh(t.prototype,n),r&&hh(t,r),e}(),fh="en";ph.getDefaultLocale=function(){return fh},ph.setDefaultLocale=function(e){return fh=e},ph.addDefaultLocale=function(e){if(dh)return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");dh=!0,ph.setDefaultLocale(e.locale),ph.addLocale(e)},ph.addLocale=function(e){zu(e),eu.addLocale(e)},ph.locale=ph.addLocale,ph.addLabels=function(e,t,n){var r=Ru(e);r||(zu({locale:e}),r=Ru(e)),r[t]=n};var gh={}.constructor;var mh={locale:"en",long:{year:{previous:"last year",current:"this year",next:"next year",past:{one:"{0} year ago",other:"{0} years ago"},future:{one:"in {0} year",other:"in {0} years"}},quarter:{previous:"last quarter",current:"this quarter",next:"next quarter",past:{one:"{0} quarter ago",other:"{0} quarters ago"},future:{one:"in {0} quarter",other:"in {0} quarters"}},month:{previous:"last month",current:"this month",next:"next month",past:{one:"{0} month ago",other:"{0} months ago"},future:{one:"in {0} month",other:"in {0} months"}},week:{previous:"last week",current:"this week",next:"next week",past:{one:"{0} week ago",other:"{0} weeks ago"},future:{one:"in {0} week",other:"in {0} weeks"}},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:{one:"{0} hour ago",other:"{0} hours ago"},future:{one:"in {0} hour",other:"in {0} hours"}},minute:{current:"this minute",past:{one:"{0} minute ago",other:"{0} minutes ago"},future:{one:"in {0} minute",other:"in {0} minutes"}},second:{current:"now",past:{one:"{0} second ago",other:"{0} seconds ago"},future:{one:"in {0} second",other:"in {0} seconds"}}},short:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},narrow:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},now:{now:{current:"now",future:"in a moment",past:"just now"}},mini:{year:"{0}yr",month:"{0}mo",week:"{0}wk",day:"{0}d",hour:"{0}h",minute:"{0}m",second:"{0}s",now:"now"},"short-time":{year:"{0} yr.",month:"{0} mo.",week:"{0} wk.",day:{one:"{0} day",other:"{0} days"},hour:"{0} hr.",minute:"{0} min.",second:"{0} sec."},"long-time":{year:{one:"{0} year",other:"{0} years"},month:{one:"{0} month",other:"{0} months"},week:{one:"{0} week",other:"{0} weeks"},day:{one:"{0} day",other:"{0} days"},hour:{one:"{0} hour",other:"{0} hours"},minute:{one:"{0} minute",other:"{0} minutes"},second:{one:"{0} second",other:"{0} seconds"}}};function vh(e,t,n){const r=e.slice();return r[18]=t[n],r}function yh(e,t,n){const r=e.slice();return r[18]=t[n],r}function wh(e,t,n){const r=e.slice();return r[10]=t[n],r}function _h(e,t,n){const r=e.slice();return r[13]=t[n],r[15]=n,r}function bh(e,t,n){const r=e.slice();return r[16]=t[n],r[15]=n,r}function xh(e,t,n){const r=e.slice();return r[7]=t[n],r}function kh(e){let t,n,r,i;const s=[Sh,Th,Ih],o=[];function a(e,t){return"table"===e[0]?0:"list"===e[0]?1:2}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(Q(),X(o[l],1,1,(()=>{o[l]=null})),J(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),Z(n,1),n.m(r.parentNode,r))},i(e){i||(Z(n),i=!0)},o(e){X(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function Ch(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=Yh(xh(e,r,t));const s=e=>X(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(34&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=xh(e,r,o);i[o]?(i[o].p(s,n),Z(i[o],1)):(i[o]=Yh(s),i[o].c(),Z(i[o],1),i[o].m(t.parentNode,t))}for(Q(),o=r.length;o<i.length;o+=1)s(o);J()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)X(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Ih(e){let n,r,i;const s=[e[6]];var o=e[5][e[0]];function a(e){let n={$$slots:{default:[Nh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&oe(n.$$.fragment),r=S()},m(e,t){n&&ae(n,e,t),_(e,r,t),i=!0},p(e,t){const i=64&t?ie(s,[se(e[6])]):{};if(8388706&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[5][e[0]])){if(n){Q();const e=n;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}o?(n=new o(a(e)),oe(n.$$.fragment),Z(n.$$.fragment,1),ae(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&Z(n.$$.fragment,e),i=!0)},o(e){n&&X(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&le(n,e)}}}function Th(e){let t,n,r,i;const s=[zh,Rh],o=[];function a(e,t){return e[4]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(Q(),X(o[l],1,1,(()=>{o[l]=null})),J(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),Z(n,1),n.m(r.parentNode,r))},i(e){i||(Z(n),i=!0)},o(e){X(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function Sh(e){let t,n,r;var i=e[5].table;function s(e){return{props:{$$slots:{default:[Kh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&oe(t.$$.fragment),n=S()},m(e,i){t&&ae(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(8388716&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[5].table)){if(t){Q();const e=t;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}i?(t=new i(s(e)),oe(t.$$.fragment),Z(t.$$.fragment,1),ae(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&Z(t.$$.fragment,e),r=!0)},o(e){t&&X(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&le(t,e)}}}function Eh(t){let n,r=t[6].raw+"";return{c(){n=I(r)},m(e,t){_(e,n,t)},p(e,t){64&t&&r!==(r=e[6].raw+"")&&N(n,r)},i:e,o:e,d(e){e&&b(n)}}}function $h(e){let t,n;return t=new Zh({props:{tokens:e[1],renderers:e[5]}}),{c(){oe(t.$$.fragment)},m(e,r){ae(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.tokens=e[1]),32&n&&(r.renderers=e[5]),t.$set(r)},i(e){n||(Z(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Nh(e){let t,n,r,i;const s=[$h,Eh],o=[];function a(e,t){return e[1]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(Q(),X(o[l],1,1,(()=>{o[l]=null})),J(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),Z(n,1),n.m(r.parentNode,r))},i(e){i||(Z(n),i=!0)},o(e){X(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function Rh(e){let n,r,i;const s=[{ordered:e[4]},e[6]];var o=e[5].list;function a(e){let n={$$slots:{default:[Ah]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&oe(n.$$.fragment),r=S()},m(e,t){n&&ae(n,e,t),_(e,r,t),i=!0},p(e,t){const i=80&t?ie(s,[16&t&&{ordered:e[4]},64&t&&se(e[6])]):{};if(8388704&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[5].list)){if(n){Q();const e=n;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}o?(n=new o(a(e)),oe(n.$$.fragment),Z(n.$$.fragment,1),ae(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&Z(n.$$.fragment,e),i=!0)},o(e){n&&X(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&le(n,e)}}}function zh(e){let n,r,i;const s=[{ordered:e[4]},e[6]];var o=e[5].list;function a(e){let n={$$slots:{default:[Mh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&oe(n.$$.fragment),r=S()},m(e,t){n&&ae(n,e,t),_(e,r,t),i=!0},p(e,t){const i=80&t?ie(s,[16&t&&{ordered:e[4]},64&t&&se(e[6])]):{};if(8388704&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[5].list)){if(n){Q();const e=n;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}o?(n=new o(a(e)),oe(n.$$.fragment),Z(n.$$.fragment,1),ae(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&Z(n.$$.fragment,e),i=!0)},o(e){n&&X(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&le(n,e)}}}function Ph(e){let t,n,r;return t=new Zh({props:{tokens:e[18].tokens,renderers:e[5]}}),{c(){oe(t.$$.fragment),n=T()},m(e,i){ae(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};64&n&&(r.tokens=e[18].tokens),32&n&&(r.renderers=e[5]),t.$set(r)},i(e){r||(Z(t.$$.fragment,e),r=!0)},o(e){X(t.$$.fragment,e),r=!1},d(e){le(t,e),e&&b(n)}}}function Oh(e){let n,r,i;const s=[e[18]];var o=e[5].unorderedlistitem||e[5].listitem;function a(e){let n={$$slots:{default:[Ph]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&oe(n.$$.fragment),r=S()},m(e,t){n&&ae(n,e,t),_(e,r,t),i=!0},p(e,t){const i=64&t?ie(s,[se(e[18])]):{};if(8388704&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[5].unorderedlistitem||e[5].listitem)){if(n){Q();const e=n;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}o?(n=new o(a(e)),oe(n.$$.fragment),Z(n.$$.fragment,1),ae(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&Z(n.$$.fragment,e),i=!0)},o(e){n&&X(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&le(n,e)}}}function Ah(e){let t,n,r=e[6].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=Oh(vh(e,r,t));const s=e=>X(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(96&n){let o;for(r=e[6].items,o=0;o<r.length;o+=1){const s=vh(e,r,o);i[o]?(i[o].p(s,n),Z(i[o],1)):(i[o]=Oh(s),i[o].c(),Z(i[o],1),i[o].m(t.parentNode,t))}for(Q(),o=r.length;o<i.length;o+=1)s(o);J()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)X(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Dh(e){let t,n,r;return t=new Zh({props:{tokens:e[18].tokens,renderers:e[5]}}),{c(){oe(t.$$.fragment),n=T()},m(e,i){ae(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};64&n&&(r.tokens=e[18].tokens),32&n&&(r.renderers=e[5]),t.$set(r)},i(e){r||(Z(t.$$.fragment,e),r=!0)},o(e){X(t.$$.fragment,e),r=!1},d(e){le(t,e),e&&b(n)}}}function Lh(e){let n,r,i;const s=[e[18]];var o=e[5].orderedlistitem||e[5].listitem;function a(e){let n={$$slots:{default:[Dh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&oe(n.$$.fragment),r=S()},m(e,t){n&&ae(n,e,t),_(e,r,t),i=!0},p(e,t){const i=64&t?ie(s,[se(e[18])]):{};if(8388704&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[5].orderedlistitem||e[5].listitem)){if(n){Q();const e=n;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}o?(n=new o(a(e)),oe(n.$$.fragment),Z(n.$$.fragment,1),ae(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&Z(n.$$.fragment,e),i=!0)},o(e){n&&X(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&le(n,e)}}}function Mh(e){let t,n,r=e[6].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=Lh(yh(e,r,t));const s=e=>X(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(96&n){let o;for(r=e[6].items,o=0;o<r.length;o+=1){const s=yh(e,r,o);i[o]?(i[o].p(s,n),Z(i[o],1)):(i[o]=Lh(s),i[o].c(),Z(i[o],1),i[o].m(t.parentNode,t))}for(Q(),o=r.length;o<i.length;o+=1)s(o);J()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)X(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Fh(e){let t,n,r;return t=new Zh({props:{tokens:e[16].tokens,renderers:e[5]}}),{c(){oe(t.$$.fragment),n=T()},m(e,i){ae(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};4&n&&(r.tokens=e[16].tokens),32&n&&(r.renderers=e[5]),t.$set(r)},i(e){r||(Z(t.$$.fragment,e),r=!0)},o(e){X(t.$$.fragment,e),r=!1},d(e){le(t,e),e&&b(n)}}}function Uh(e){let t,n,r;var i=e[5].tablecell;function s(e){return{props:{header:!0,align:e[6].align[e[15]]||"center",$$slots:{default:[Fh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&oe(t.$$.fragment),n=S()},m(e,i){t&&ae(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(64&r&&(o.align=e[6].align[e[15]]||"center"),8388644&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[5].tablecell)){if(t){Q();const e=t;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}i?(t=new i(s(e)),oe(t.$$.fragment),Z(t.$$.fragment,1),ae(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&Z(t.$$.fragment,e),r=!0)},o(e){t&&X(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&le(t,e)}}}function jh(e){let t,n,r=e[2],i=[];for(let t=0;t<r.length;t+=1)i[t]=Uh(bh(e,r,t));const s=e=>X(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(100&n){let o;for(r=e[2],o=0;o<r.length;o+=1){const s=bh(e,r,o);i[o]?(i[o].p(s,n),Z(i[o],1)):(i[o]=Uh(s),i[o].c(),Z(i[o],1),i[o].m(t.parentNode,t))}for(Q(),o=r.length;o<i.length;o+=1)s(o);J()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)X(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function qh(e){let t,n,r;var i=e[5].tablerow;function s(e){return{props:{$$slots:{default:[jh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&oe(t.$$.fragment),n=S()},m(e,i){t&&ae(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(8388708&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[5].tablerow)){if(t){Q();const e=t;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}i?(t=new i(s(e)),oe(t.$$.fragment),Z(t.$$.fragment,1),ae(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&Z(t.$$.fragment,e),r=!0)},o(e){t&&X(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&le(t,e)}}}function Wh(e){let t,n;return t=new Zh({props:{tokens:e[13].tokens,renderers:e[5]}}),{c(){oe(t.$$.fragment)},m(e,r){ae(t,e,r),n=!0},p(e,n){const r={};8&n&&(r.tokens=e[13].tokens),32&n&&(r.renderers=e[5]),t.$set(r)},i(e){n||(Z(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Vh(e){let t,n,r;var i=e[5].tablecell;function s(e){return{props:{header:!1,align:e[6].align[e[15]]||"center",$$slots:{default:[Wh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&oe(t.$$.fragment),n=S()},m(e,i){t&&ae(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(64&r&&(o.align=e[6].align[e[15]]||"center"),8388648&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[5].tablecell)){if(t){Q();const e=t;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}i?(t=new i(s(e)),oe(t.$$.fragment),Z(t.$$.fragment,1),ae(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&Z(t.$$.fragment,e),r=!0)},o(e){t&&X(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&le(t,e)}}}function Bh(e){let t,n,r=e[10],i=[];for(let t=0;t<r.length;t+=1)i[t]=Vh(_h(e,r,t));const s=e=>X(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(104&n){let o;for(r=e[10],o=0;o<r.length;o+=1){const s=_h(e,r,o);i[o]?(i[o].p(s,n),Z(i[o],1)):(i[o]=Vh(s),i[o].c(),Z(i[o],1),i[o].m(t.parentNode,t))}for(Q(),o=r.length;o<i.length;o+=1)s(o);J()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)X(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Hh(e){let t,n,r;var i=e[5].tablerow;function s(e){return{props:{$$slots:{default:[Bh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&oe(t.$$.fragment),n=S()},m(e,i){t&&ae(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(8388712&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[5].tablerow)){if(t){Q();const e=t;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}i?(t=new i(s(e)),oe(t.$$.fragment),Z(t.$$.fragment,1),ae(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&Z(t.$$.fragment,e),r=!0)},o(e){t&&X(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&le(t,e)}}}function Gh(e){let t,n,r=e[3],i=[];for(let t=0;t<r.length;t+=1)i[t]=Hh(wh(e,r,t));const s=e=>X(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(104&n){let o;for(r=e[3],o=0;o<r.length;o+=1){const s=wh(e,r,o);i[o]?(i[o].p(s,n),Z(i[o],1)):(i[o]=Hh(s),i[o].c(),Z(i[o],1),i[o].m(t.parentNode,t))}for(Q(),o=r.length;o<i.length;o+=1)s(o);J()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)X(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Kh(e){let t,n,r,i,s;var o=e[5].tablehead;function a(e){return{props:{$$slots:{default:[qh]},$$scope:{ctx:e}}}}o&&(t=new o(a(e)));var l=e[5].tablebody;function c(e){return{props:{$$slots:{default:[Gh]},$$scope:{ctx:e}}}}return l&&(r=new l(c(e))),{c(){t&&oe(t.$$.fragment),n=T(),r&&oe(r.$$.fragment),i=S()},m(e,o){t&&ae(t,e,o),_(e,n,o),r&&ae(r,e,o),_(e,i,o),s=!0},p(e,s){const u={};if(8388708&s&&(u.$$scope={dirty:s,ctx:e}),o!==(o=e[5].tablehead)){if(t){Q();const e=t;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}o?(t=new o(a(e)),oe(t.$$.fragment),Z(t.$$.fragment,1),ae(t,n.parentNode,n)):t=null}else o&&t.$set(u);const h={};if(8388712&s&&(h.$$scope={dirty:s,ctx:e}),l!==(l=e[5].tablebody)){if(r){Q();const e=r;X(e.$$.fragment,1,0,(()=>{le(e,1)})),J()}l?(r=new l(c(e)),oe(r.$$.fragment),Z(r.$$.fragment,1),ae(r,i.parentNode,i)):r=null}else l&&r.$set(h)},i(e){s||(t&&Z(t.$$.fragment,e),r&&Z(r.$$.fragment,e),s=!0)},o(e){t&&X(t.$$.fragment,e),r&&X(r.$$.fragment,e),s=!1},d(e){t&&le(t,e),e&&b(n),e&&b(i),r&&le(r,e)}}}function Yh(e){let n,r;const i=[e[7],{renderers:e[5]}];let s={};for(let e=0;e<i.length;e+=1)s=t(s,i[e]);return n=new Zh({props:s}),{c(){oe(n.$$.fragment)},m(e,t){ae(n,e,t),r=!0},p(e,t){const r=34&t?ie(i,[2&t&&se(e[7]),32&t&&{renderers:e[5]}]):{};n.$set(r)},i(e){r||(Z(n.$$.fragment,e),r=!0)},o(e){X(n.$$.fragment,e),r=!1},d(e){le(n,e)}}}function Qh(e){let t,n,r,i;const s=[Ch,kh],o=[];function a(e,t){return e[0]?e[5][e[0]]?1:-1:0}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=S()},m(e,n){~t&&o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?~t&&o[t].p(e,i):(n&&(Q(),X(o[l],1,1,(()=>{o[l]=null})),J()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),Z(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(Z(n),i=!0)},o(e){X(n),i=!1},d(e){~t&&o[t].d(e),e&&b(r)}}}function Jh(e,n,r){const i=["type","tokens","header","rows","ordered","renderers"];let s=m(n,i),{type:o}=n,{tokens:a}=n,{header:l}=n,{rows:c}=n,{ordered:u=!1}=n,{renderers:h}=n;return function(){const e=console.warn;console.warn=t=>{t.includes("unknown prop")||t.includes("unexpected slot")||e(t)},A((()=>{console.warn=e}))}(),e.$$set=e=>{n=t(t({},n),function(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}(e)),r(6,s=m(n,i)),"type"in e&&r(0,o=e.type),"tokens"in e&&r(1,a=e.tokens),"header"in e&&r(2,l=e.header),"rows"in e&&r(3,c=e.rows),"ordered"in e&&r(4,u=e.ordered),"renderers"in e&&r(5,h=e.renderers)},[o,a,l,c,u,h,s]}class Zh extends he{constructor(e){super(),ue(this,e,Jh,Qh,o,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}let Xh={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const ed=/[&<>"']/,td=/[&<>"']/g,nd=/[<>"']|&(?!#?\w+;)/,rd=/[<>"']|&(?!#?\w+;)/g,id={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sd=e=>id[e];function od(e,t){if(t){if(ed.test(e))return e.replace(td,sd)}else if(nd.test(e))return e.replace(rd,sd);return e}const ad=/(^|[^\[])\^/g;function ld(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(ad,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const cd={exec:function(){}};function ud(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function hd(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function dd(e,t,n){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}function pd(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function fd(e,t,n,r){const i=t.href,s=t.title?od(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:i,title:s,text:o,tokens:r.inlineTokens(o,[])};return r.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:s,text:od(o)}}class gd{constructor(e){this.options=e||Xh}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:dd(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=dd(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,i,s,o,a,l,c,u,h,d,p,f=t[1].trim();const g=f.length>1,m={type:"list",raw:"",ordered:g,start:g?+f.slice(0,-1):"",loose:!1,items:[]};f=g?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=g?f:"[*+-]");const v=new RegExp(`^( {0,3}${f})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,t=v.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],u=e.split("\n",1)[0],this.options.pedantic?(s=2,d=c.trimLeft()):(s=t[2].search(/[^ ]/),s=s>4?1:s,d=c.slice(s),s+=t[1].length),a=!1,!c&&/^ *$/.test(u)&&(n+=u+"\n",e=e.substring(u.length+1),p=!0),!p){const t=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(h=e.split("\n",1)[0],c=h,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c));){if(c.search(/[^ ]/)>=s||!c.trim())d+="\n"+c.slice(s);else{if(a)break;d+="\n"+c}a||c.trim()||(a=!0),n+=h+"\n",e=e.substring(h.length+1)}}m.loose||(l?m.loose=!0:/\n *\n *$/.test(n)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(d),r&&(i="[ ] "!==r[0],d=d.replace(/^\[[ xX]\] +/,""))),m.items.push({type:"list_item",raw:n,task:!!r,checked:i,loose:!1,text:d}),m.raw+=n}m.items[m.items.length-1].raw=n.trimRight(),m.items[m.items.length-1].text=d.trimRight(),m.raw=m.raw.trimRight();const y=m.items.length;for(o=0;o<y;o++){this.lexer.state.top=!1,m.items[o].tokens=this.lexer.blockTokens(m.items[o].text,[]);const e=m.items[o].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const e of t)if("\n"===e&&(n+=1),n>1)return!0;return!1}));!m.loose&&e.length&&t&&(m.loose=!0,m.items[o].loose=!0)}return m}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):od(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:hd(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,i,s,o=e.align.length;for(n=0;n<o;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(o=e.rows.length,n=0;n<o;n++)e.rows[n]=hd(e.rows[n],e.header.length).map((e=>({text:e})));for(o=e.header.length,r=0;r<o;r++)e.header[r].tokens=[],this.lexer.inlineTokens(e.header[r].text,e.header[r].tokens);for(o=e.rows.length,r=0;r<o;r++)for(s=e.rows[r],i=0;i<s.length;i++)s[i].tokens=[],this.lexer.inlineTokens(s[i].text,s[i].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:od(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):od(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=dd(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),fd(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return fd(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let i,s,o=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=i.length,r[3]||r[4]){o+=s;continue}if((r[5]||r[6])&&n%3&&!((n+s)%3)){a+=s;continue}if(o-=s,o>0)continue;if(s=Math.min(s,s+o+a),Math.min(n,s)%2){const t=e.slice(1,n+r.index+s);return{type:"em",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,n+r.index+s-1);return{type:"strong",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=od(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=od(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=od(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=od(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=od(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):od(n[0]):n[0]:od(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const md={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:cd,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};md.def=ld(md.def).replace("label",md._label).replace("title",md._title).getRegex(),md.bullet=/(?:[*+-]|\d{1,9}[.)])/,md.listItemStart=ld(/^( *)(bull) */).replace("bull",md.bullet).getRegex(),md.list=ld(md.list).replace(/bull/g,md.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+md.def.source+")").getRegex(),md._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",md._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,md.html=ld(md.html,"i").replace("comment",md._comment).replace("tag",md._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),md.paragraph=ld(md._paragraph).replace("hr",md.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",md._tag).getRegex(),md.blockquote=ld(md.blockquote).replace("paragraph",md.paragraph).getRegex(),md.normal=ud({},md),md.gfm=ud({},md.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),md.gfm.table=ld(md.gfm.table).replace("hr",md.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",md._tag).getRegex(),md.gfm.paragraph=ld(md._paragraph).replace("hr",md.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",md.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",md._tag).getRegex(),md.pedantic=ud({},md.normal,{html:ld("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",md._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:cd,paragraph:ld(md.normal._paragraph).replace("hr",md.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",md.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const vd={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:cd,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:cd,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function yd(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function wd(e){let t,n,r="";const i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}vd._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",vd.punctuation=ld(vd.punctuation).replace(/punctuation/g,vd._punctuation).getRegex(),vd.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,vd.escapedEmSt=/\\\*|\\_/g,vd._comment=ld(md._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),vd.emStrong.lDelim=ld(vd.emStrong.lDelim).replace(/punct/g,vd._punctuation).getRegex(),vd.emStrong.rDelimAst=ld(vd.emStrong.rDelimAst,"g").replace(/punct/g,vd._punctuation).getRegex(),vd.emStrong.rDelimUnd=ld(vd.emStrong.rDelimUnd,"g").replace(/punct/g,vd._punctuation).getRegex(),vd._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,vd._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,vd._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,vd.autolink=ld(vd.autolink).replace("scheme",vd._scheme).replace("email",vd._email).getRegex(),vd._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,vd.tag=ld(vd.tag).replace("comment",vd._comment).replace("attribute",vd._attribute).getRegex(),vd._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,vd._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,vd._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,vd.link=ld(vd.link).replace("label",vd._label).replace("href",vd._href).replace("title",vd._title).getRegex(),vd.reflink=ld(vd.reflink).replace("label",vd._label).replace("ref",md._label).getRegex(),vd.nolink=ld(vd.nolink).replace("ref",md._label).getRegex(),vd.reflinkSearch=ld(vd.reflinkSearch,"g").replace("reflink",vd.reflink).replace("nolink",vd.nolink).getRegex(),vd.normal=ud({},vd),vd.pedantic=ud({},vd.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ld(/^!?\[(label)\]\((.*?)\)/).replace("label",vd._label).getRegex(),reflink:ld(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",vd._label).getRegex()}),vd.gfm=ud({},vd.normal,{escape:ld(vd.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),vd.gfm.url=ld(vd.gfm.url,"i").replace("email",vd.gfm._extended_email).getRegex(),vd.breaks=ud({},vd.gfm,{br:ld(vd.br).replace("{2,}","*").getRegex(),text:ld(vd.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class _d{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Xh,this.options.tokenizer=this.options.tokenizer||new gd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:md.normal,inline:vd.normal};this.options.pedantic?(t.block=md.pedantic,t.inline=vd.pedantic):this.options.gfm&&(t.block=md.gfm,this.options.breaks?t.inline=vd.breaks:t.inline=vd.gfm),this.tokenizer.rules=t}static get rules(){return{block:md,inline:vd}}static lex(e,t){return new _d(t).lex(e)}static lexInline(e,t){return new _d(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,i,s;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i)))r=t[t.length-1],s&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,r,i,s,o,a,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,s.index)+"["+pd("a",s[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,s.index)+"["+pd("a",s[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,s.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,l,a))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,wd))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,wd))){if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(i,yd))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),o=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class bd{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}const xd={};function kd(t){let n;return{c(){n=I(t[1])},m(e,t){_(e,n,t)},p(e,t){2&t&&N(n,e[1])},i:e,o:e,d(e){e&&b(n)}}}function Cd(e){let t,n;const r=e[5].default,i=h(r,e,e[4],null);return{c(){t=k("h6"),i&&i.c(),$(t,"id",e[2])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||16&s)&&f(i,r,e,e[4],n?p(r,e[4],s,null):g(e[4]),null),(!n||4&s)&&$(t,"id",e[2])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Id(e){let t,n;const r=e[5].default,i=h(r,e,e[4],null);return{c(){t=k("h5"),i&&i.c(),$(t,"id",e[2])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||16&s)&&f(i,r,e,e[4],n?p(r,e[4],s,null):g(e[4]),null),(!n||4&s)&&$(t,"id",e[2])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Td(e){let t,n;const r=e[5].default,i=h(r,e,e[4],null);return{c(){t=k("h4"),i&&i.c(),$(t,"id",e[2])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||16&s)&&f(i,r,e,e[4],n?p(r,e[4],s,null):g(e[4]),null),(!n||4&s)&&$(t,"id",e[2])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Sd(e){let t,n;const r=e[5].default,i=h(r,e,e[4],null);return{c(){t=k("h3"),i&&i.c(),$(t,"id",e[2])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||16&s)&&f(i,r,e,e[4],n?p(r,e[4],s,null):g(e[4]),null),(!n||4&s)&&$(t,"id",e[2])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Ed(e){let t,n;const r=e[5].default,i=h(r,e,e[4],null);return{c(){t=k("h2"),i&&i.c(),$(t,"id",e[2])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||16&s)&&f(i,r,e,e[4],n?p(r,e[4],s,null):g(e[4]),null),(!n||4&s)&&$(t,"id",e[2])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function $d(e){let t,n;const r=e[5].default,i=h(r,e,e[4],null);return{c(){t=k("h1"),i&&i.c(),$(t,"id",e[2])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||16&s)&&f(i,r,e,e[4],n?p(r,e[4],s,null):g(e[4]),null),(!n||4&s)&&$(t,"id",e[2])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Nd(e){let t,n,r,i;const s=[$d,Ed,Sd,Td,Id,Cd,kd],o=[];function a(e,t){return 1===e[0]?0:2===e[0]?1:3===e[0]?2:4===e[0]?3:5===e[0]?4:6===e[0]?5:6}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(Q(),X(o[l],1,1,(()=>{o[l]=null})),J(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),Z(n,1),n.m(r.parentNode,r))},i(e){i||(Z(n),i=!0)},o(e){X(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function Rd(e,t,n){let r,{$$slots:i={},$$scope:s}=t,{depth:o}=t,{raw:a}=t,{text:l}=t;const{slug:c,getOptions:u}=function(e){return O().$$.context.get(e)}(xd),h=u();return e.$$set=e=>{"depth"in e&&n(0,o=e.depth),"raw"in e&&n(1,a=e.raw),"text"in e&&n(3,l=e.text),"$$scope"in e&&n(4,s=e.$$scope)},e.$$.update=()=>{8&e.$$.dirty&&n(2,r=h.headerIds?h.headerPrefix+c(l):void 0)},[o,a,r,l,s,i]}function zd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("p"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Pd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Od(e){let t;const n=e[3].default,r=h(n,e,e[2],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[i]){r&&r.p&&(!t||4&i)&&f(r,n,e,e[2],t?p(n,e[2],i,null):g(e[2]),null)},i(e){t||(Z(r,e),t=!0)},o(e){X(r,e),t=!1},d(e){r&&r.d(e)}}}function Ad(e,t,n){let{$$slots:r={},$$scope:i}=t,{text:s}=t,{raw:o}=t;return e.$$set=e=>{"text"in e&&n(0,s=e.text),"raw"in e&&n(1,o=e.raw),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function Dd(t){let n,r;return{c(){n=k("img"),c(n.src,r=t[0])||$(n,"src",r),$(n,"title",t[1]),$(n,"alt",t[2])},m(e,t){_(e,n,t)},p(e,[t]){1&t&&!c(n.src,r=e[0])&&$(n,"src",r),2&t&&$(n,"title",e[1]),4&t&&$(n,"alt",e[2])},i:e,o:e,d(e){e&&b(n)}}}function Ld(e,t,n){let{href:r=""}=t,{title:i}=t,{text:s=""}=t;return e.$$set=e=>{"href"in e&&n(0,r=e.href),"title"in e&&n(1,i=e.title),"text"in e&&n(2,s=e.text)},[r,i,s]}function Md(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("a"),i&&i.c(),$(t,"href",e[0]),$(t,"title",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[s]){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||1&s)&&$(t,"href",e[0]),(!n||2&s)&&$(t,"title",e[1])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Fd(e,t,n){let{$$slots:r={},$$scope:i}=t,{href:s=""}=t,{title:o}=t;return e.$$set=e=>{"href"in e&&n(0,s=e.href),"title"in e&&n(1,o=e.title),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function Ud(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("em"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function jd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function qd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("del"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Wd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Vd(t){let n,r,i=t[0].replace(/`/g,"")+"";return{c(){n=k("code"),r=I(i)},m(e,t){_(e,n,t),y(n,r)},p(e,[t]){1&t&&i!==(i=e[0].replace(/`/g,"")+"")&&N(r,i)},i:e,o:e,d(e){e&&b(n)}}}function Bd(e,t,n){let{raw:r}=t;return e.$$set=e=>{"raw"in e&&n(0,r=e.raw)},[r]}function Hd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("strong"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Gd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Kd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("table"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Yd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Qd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("thead"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Jd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Zd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("tbody"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Xd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function ep(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("tr"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function tp(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function np(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("td"),i&&i.c(),$(t,"align",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||2&s)&&$(t,"align",e[1])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function rp(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("th"),i&&i.c(),$(t,"align",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||2&s)&&$(t,"align",e[1])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function ip(e){let t,n,r,i;const s=[rp,np],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(Q(),X(o[l],1,1,(()=>{o[l]=null})),J(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),Z(n,1),n.m(r.parentNode,r))},i(e){i||(Z(n),i=!0)},o(e){X(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function sp(e,t,n){let{$$slots:r={},$$scope:i}=t,{header:s}=t,{align:o}=t;return e.$$set=e=>{"header"in e&&n(0,s=e.header),"align"in e&&n(1,o=e.align),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function op(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("ul"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function ap(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("ol"),i&&i.c(),$(t,"start",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||2&s)&&$(t,"start",e[1])},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function lp(e){let t,n,r,i;const s=[ap,op],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(Q(),X(o[l],1,1,(()=>{o[l]=null})),J(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),Z(n,1),n.m(r.parentNode,r))},i(e){i||(Z(n),i=!0)},o(e){X(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function cp(e,t,n){let{$$slots:r={},$$scope:i}=t,{ordered:s}=t,{start:o}=t;return e.$$set=e=>{"ordered"in e&&n(0,s=e.ordered),"start"in e&&n(1,o=e.start),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function up(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("li"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function hp(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function dp(t){let n;return{c(){n=k("hr")},m(e,t){_(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function pp(t){let n,r;return{c(){n=new z,r=S(),n.a=r},m(e,i){n.m(t[0],e,i),_(e,r,i)},p(e,[t]){1&t&&n.p(e[0])},i:e,o:e,d(e){e&&b(r),e&&n.d()}}}function fp(e,t,n){let{text:r}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text)},[r]}function gp(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("blockquote"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function mp(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function vp(t){let n,r,i;return{c(){n=k("pre"),r=k("code"),i=I(t[1]),$(n,"class",t[0])},m(e,t){_(e,n,t),y(n,r),y(r,i)},p(e,[t]){2&t&&N(i,e[1]),1&t&&$(n,"class",e[0])},i:e,o:e,d(e){e&&b(n)}}}function yp(e,t,n){let{lang:r}=t,{text:i}=t;return e.$$set=e=>{"lang"in e&&n(0,r=e.lang),"text"in e&&n(1,i=e.text)},[r,i]}function wp(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("br"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(e,r),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(Z(i,e),n=!0)},o(e){X(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function _p(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}const bp={heading:class extends he{constructor(e){super(),ue(this,e,Rd,Nd,o,{depth:0,raw:1,text:3})}},paragraph:class extends he{constructor(e){super(),ue(this,e,Pd,zd,o,{})}},text:class extends he{constructor(e){super(),ue(this,e,Ad,Od,o,{text:0,raw:1})}},image:class extends he{constructor(e){super(),ue(this,e,Ld,Dd,o,{href:0,title:1,text:2})}},link:class extends he{constructor(e){super(),ue(this,e,Fd,Md,o,{href:0,title:1})}},em:class extends he{constructor(e){super(),ue(this,e,jd,Ud,o,{})}},strong:class extends he{constructor(e){super(),ue(this,e,Gd,Hd,o,{})}},codespan:class extends he{constructor(e){super(),ue(this,e,Bd,Vd,o,{raw:0})}},del:class extends he{constructor(e){super(),ue(this,e,Wd,qd,o,{})}},table:class extends he{constructor(e){super(),ue(this,e,Yd,Kd,o,{})}},tablehead:class extends he{constructor(e){super(),ue(this,e,Jd,Qd,o,{})}},tablebody:class extends he{constructor(e){super(),ue(this,e,Xd,Zd,o,{})}},tablerow:class extends he{constructor(e){super(),ue(this,e,tp,ep,o,{})}},tablecell:class extends he{constructor(e){super(),ue(this,e,sp,ip,o,{header:0,align:1})}},list:class extends he{constructor(e){super(),ue(this,e,cp,lp,o,{ordered:0,start:1})}},orderedlistitem:null,unorderedlistitem:null,listitem:class extends he{constructor(e){super(),ue(this,e,hp,up,o,{})}},hr:class extends he{constructor(e){super(),ue(this,e,null,dp,o,{})}},html:class extends he{constructor(e){super(),ue(this,e,fp,pp,o,{text:0})}},blockquote:class extends he{constructor(e){super(),ue(this,e,mp,gp,o,{})}},code:class extends he{constructor(e){super(),ue(this,e,yp,vp,o,{lang:0,text:1})}},br:class extends he{constructor(e){super(),ue(this,e,_p,wp,o,{})}}},xp={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function kp(e){let t,n;return t=new Zh({props:{tokens:e[0],renderers:e[1]}}),{c(){oe(t.$$.fragment)},m(e,r){ae(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.tokens=e[0]),2&n&&(r.renderers=e[1]),t.$set(r)},i(e){n||(Z(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Cp(e,t,n){let r,i,s,{source:o=""}=t,{renderers:a={}}=t,{options:l={}}=t,{isInline:c=!1}=t;const u=D();let h,d,p;return function(e,t){O().$$.context.set(e,t)}(xd,{slug:e=>r?r.slug(e):"",getOptions:()=>i}),A((()=>{n(7,p=!0)})),e.$$set=e=>{"source"in e&&n(2,o=e.source),"renderers"in e&&n(3,a=e.renderers),"options"in e&&n(4,l=e.options),"isInline"in e&&n(5,c=e.isInline)},e.$$.update=()=>{4&e.$$.dirty&&(r=o?new bd:void 0),16&e.$$.dirty&&n(8,i={...xp,...l}),357&e.$$.dirty&&(n(6,d=new _d(i)),n(0,h=c?d.inlineTokens(o):d.lex(o)),u("parsed",{tokens:h})),8&e.$$.dirty&&n(1,s={...bp,...a}),129&e.$$.dirty&&p&&u("parsed",{tokens:h})},[h,s,o,a,l,c,d,p,i]}class Ip extends he{constructor(e){super(),ue(this,e,Cp,kp,o,{source:2,renderers:3,options:4,isInline:5})}}function Tp(t){let n;return{c(){n=I(t[0])},m(e,t){_(e,n,t)},p(e,[t]){1&t&&N(n,e[0])},i:e,o:e,d(e){e&&b(n)}}}function Sp(e,t,n){let{text:r}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text)},[r]}class Ep extends he{constructor(e){super(),ue(this,e,Sp,Tp,o,{text:0})}}function $p(e){w(e,"svelte-v3zbvc",'.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::before,.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::after{box-sizing:border-box}button.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{text-transform:none}button.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,[type=\'button\'].svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{-webkit-appearance:button}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::-moz-focus-inner{border-style:none;padding:0}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:-moz-focusring{outline:1px dotted ButtonText}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:-moz-ui-invalid{box-shadow:none}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::-webkit-inner-spin-button,.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::-webkit-outer-spin-button{height:auto}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::-webkit-search-decoration{-webkit-appearance:none}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h4.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,p.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{margin:0}button.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{background-color:transparent;background-image:none}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::before,.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}img.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{border-style:solid}textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{resize:vertical}textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::-moz-placeholder{opacity:1;color:#9ca3af}textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::placeholder{opacity:1;color:#9ca3af}button.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{cursor:pointer}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:-moz-focusring{outline:auto}h4.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-size:inherit;font-weight:inherit}a.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{color:inherit;text-decoration:inherit}button.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{padding:0;line-height:inherit;color:inherit}img.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,svg.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{display:block;vertical-align:middle}img.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{max-width:100%;height:auto}.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc,.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::before,.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}.form-textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}.form-textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#2563eb}.form-textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::-moz-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:-ms-input-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc::placeholder{color:#6b7280;opacity:1}.r-prose.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{color:#374151;max-width:65ch}.r-prose.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-size:1rem;line-height:1.75}.r-mx-4.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{margin-left:1rem;margin-right:1rem}.r-mt-4.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{margin-top:1rem}.r-mt-16.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{margin-top:4rem}.r-mb-2.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{margin-bottom:0.5rem}.r-flex.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{display:flex}.r-h-28.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{height:7rem}.r-h-12.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{height:3rem}.r-h-6.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{height:1.5rem}.r-max-h-96.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{max-height:24rem}.r-w-full.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{width:100%}.r-w-12.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{width:3rem}.r-w-6.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{width:1.5rem}.r-min-w-0.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{min-width:0px}.r-max-w-none.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{max-width:none}.r-max-w-full.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{max-width:100%}.r-flex-grow.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{flex-grow:1}.r-flex-col.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{flex-direction:column}.r-items-center.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{align-items:center}.r-justify-end.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{justify-content:flex-end}.r-gap-2.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{gap:0.5rem}.r-gap-4.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{gap:1rem}.r-space-x-4.svelte-v3zbvc>.svelte-v3zbvc:not([hidden])~.svelte-v3zbvc:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.r-space-y-8.svelte-v3zbvc>.svelte-v3zbvc:not([hidden])~.svelte-v3zbvc:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.r-self-end.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{align-self:flex-end}.r-overflow-y-auto.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{overflow-y:auto}.r-overflow-x-hidden.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{overflow-x:hidden}.r-break-words.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{overflow-wrap:break-word}.r-rounded-md.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{border-radius:0.375rem}.r-rounded-full.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{border-radius:9999px}.r-border-gray-300.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.r-bg-gray-100.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.r-bg-primary-100.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{background-color:var(--reactive-primary-100, #e0f2fe)}.r-bg-primary-50.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{background-color:var(--reactive-primary-50, #f0f9ff)}.r-py-1.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{padding-top:0.25rem;padding-bottom:0.25rem}.r-px-6.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{padding-left:1.5rem;padding-right:1.5rem}.r-py-4.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{padding-top:1rem;padding-bottom:1rem}.r-px-4.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{padding-left:1rem;padding-right:1rem}.r-px-2.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{padding-left:0.5rem;padding-right:0.5rem}.r-py-2.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{padding-top:0.5rem;padding-bottom:0.5rem}.r-font-sans.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.r-text-base.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-size:1rem;line-height:1.5rem}.r-text-lg.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-size:1.125rem;line-height:1.75rem}.r-font-medium.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-weight:500}.r-font-normal.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-weight:400}.r-font-semibold.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{font-weight:600}.r-text-gray-600.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.r-text-primary-800.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{color:var(--reactive-primary-800, #075985)}.r-text-primary-500.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{color:var(--reactive-primary-500, #0ea5e9)}.r-text-gray-400.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.r-text-red-600.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.r-text-pink-600.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.r-primary-btn.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:var(--reactive-primary-100, #e0f2fe);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));--tw-gradient-to:var(--reactive-secondary-100, #f3e8ff);color:var(--reactive-primary-900, #0c4a6e)}.r-primary-btn.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:hover{background-color:var(--reactive-primary-100, #e0f2fe);--tw-gradient-from:var(--reactive-primary-200, #bae6fd);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));--tw-gradient-to:var(--reactive-secondary-200, #e9d5ff)}.r-primary-btn.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:disabled{cursor:not-allowed;opacity:0.7}.r-primary-btn.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:disabled:hover{--tw-gradient-from:var(--reactive-primary-100, #e0f2fe);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));--tw-gradient-to:var(--reactive-secondary-100, #f3e8ff)}.hover\\:r-bg-primary-200.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:hover{background-color:var(--reactive-primary-200, #bae6fd)}.hover\\:r-bg-red-100\\/60.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:r-bg-pink-100\\/60.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:hover{background-color:rgba(252, 231, 243, 0.6)}.disabled\\:r-cursor-not-allowed.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:disabled{cursor:not-allowed}.disabled\\:r-bg-gray-100.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:r-text-gray-600.svelte-v3zbvc.svelte-v3zbvc.svelte-v3zbvc:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}')}function Np(e,t,n){const r=e.slice();return r[26]=t[n],r}function Rp(t){let n,r,i,s,o,a,l,c;return{c(){n=k("label"),r=k("p"),r.textContent="Add a comment (markdown is supported)",i=T(),s=k("textarea"),$(r,"class","r-text-gray-600 dark:!r-text-gray-200 svelte-v3zbvc"),$(s,"class","r-border-gray-300 dark:!r-border-gray-600 dark:!r-bg-gray-800 r-rounded-md r-w-full form-textarea r-font-sans r-h-28 disabled:r-cursor-not-allowed svelte-v3zbvc"),$(s,"placeholder",o=t[0].user?"Write your thoughts...":"Login to leave a comment"),s.disabled=a=!t[0].user,$(n,"class","svelte-v3zbvc")},m(e,o){_(e,n,o),y(n,r),y(n,i),y(n,s),R(s,t[4]),l||(c=E(s,"input",t[14]),l=!0)},p(e,t){1&t&&o!==(o=e[0].user?"Write your thoughts...":"Login to leave a comment")&&$(s,"placeholder",o),1&t&&a!==(a=!e[0].user)&&(s.disabled=a),16&t&&R(s,e[4])},i:e,o:e,d(e){e&&b(n),l=!1,c()}}}function zp(e){let t,n,r,i,s;return i=new Ip({props:{source:e[4]||"Nothing to preview",renderers:{html:Ep}}}),{c(){t=k("p"),t.textContent="Add a comment (markdown is supported)",n=T(),r=k("div"),oe(i.$$.fragment),$(t,"class","r-text-gray-600 dark:!r-text-gray-200 r-overflow-x-hidden r-break-words svelte-v3zbvc"),$(r,"class","r-max-h-96 r-overflow-x-hidden r-overflow-y-auto r-break-words r-text-base r-prose dark:!r-prose-dark r-max-w-none dark:!r-text-white r-bg-gray-100 dark:!r-bg-gray-700 r-px-6 r-py-4 svelte-v3zbvc")},m(e,o){_(e,t,o),_(e,n,o),_(e,r,o),ae(i,r,null),s=!0},p(e,t){const n={};16&t&&(n.source=e[4]||"Nothing to preview"),i.$set(n)},i(e){s||(Z(i.$$.fragment,e),s=!0)},o(e){X(i.$$.fragment,e),s=!1},d(e){e&&b(t),e&&b(n),e&&b(r),le(i)}}}function Pp(e){let t,n,r,i,s,o,a,l,c,u,h,d,p=(e[3]?e[2].length:"-")+"",f=e[3]&&1==e[2].length?"comment":"comments",g=[],m=new Map,v=e[2];const w=e=>e[26].id;for(let t=0;t<v.length;t+=1){let n=Np(e,v,t),r=w(n);m.set(r,g[t]=Lp(r,n))}return{c(){t=k("div"),n=I(p),r=I(" "),i=T(),s=I(f),o=T(),a=k("span"),a.textContent="|",l=T(),c=k("em"),c.innerHTML='Powered by\n        <a href="https://github.com/maggie-j-liu/reactive" rel="noreferrer" target="_blank" class="r-text-primary-500 r-font-medium r-hover:underline svelte-v3zbvc">Reactive</a>',u=T(),h=k("div");for(let e=0;e<g.length;e+=1)g[e].c();$(a,"class","r-mx-4 r-text-lg svelte-v3zbvc"),$(c,"class","text-gray-600 dark:!text-gray-300 svelte-v3zbvc"),$(t,"class","r-mt-4 svelte-v3zbvc"),$(h,"class","r-space-y-8 svelte-v3zbvc")},m(e,p){_(e,t,p),y(t,n),y(t,r),y(t,i),y(t,s),y(t,o),y(t,a),y(t,l),y(t,c),_(e,u,p),_(e,h,p);for(let e=0;e<g.length;e+=1)g[e].m(h,null);d=!0},p(e,t){(!d||12&t)&&p!==(p=(e[3]?e[2].length:"-")+"")&&N(n,p),(!d||12&t)&&f!==(f=e[3]&&1==e[2].length?"comment":"comments")&&N(s,f),6949&t&&(v=e[2],Q(),g=re(g,t,w,1,e,v,m,h,ne,Lp,null,Np),J())},i(e){if(!d){for(let e=0;e<v.length;e+=1)Z(g[e]);d=!0}},o(e){for(let e=0;e<g.length;e+=1)X(g[e]);d=!1},d(e){e&&b(t),e&&b(u),e&&b(h);for(let e=0;e<g.length;e+=1)g[e].d()}}}function Op(e){let t,n,r;function i(){return e[17](e[26])}return{c(){t=k("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="r-h-6 r-w-6 r-text-red-600 dark:!r-text-red-500 svelte-v3zbvc"><polyline points="3 6 5 6 21 6" class="svelte-v3zbvc"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" class="svelte-v3zbvc"></path><line x1="10" y1="11" x2="10" y2="17" class="svelte-v3zbvc"></line><line x1="14" y1="11" x2="14" y2="17" class="svelte-v3zbvc"></line></svg>',$(t,"class","hover:r-bg-red-100/60 dark:hover:!r-bg-red-500/25 r-px-2 r-py-2 r-rounded-full svelte-v3zbvc")},m(e,s){_(e,t,s),n||(r=E(t,"click",i),n=!0)},p(t,n){e=t},d(e){e&&b(t),n=!1,r()}}}function Ap(e){let t,n,r,i,s,o=(e[26].likes??0)+"";return{c(){t=k("div"),n=C("svg"),r=C("path"),i=T(),s=I(o),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-v3zbvc"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","r-h-6 r-w-6 r-text-pink-600 svelte-v3zbvc"),$(t,"class","r-px-2 r-py-2 r-flex r-text-pink-600 r-font-semibold r-gap-2 r-items-center svelte-v3zbvc")},m(e,o){_(e,t,o),y(t,n),y(n,r),y(t,i),y(t,s)},p(e,t){4&t&&o!==(o=(e[26].likes??0)+"")&&N(s,o)},d(e){e&&b(t)}}}function Dp(e){let t,n,r,i,s,o,a,l,c=(e[26].likes??0)+"";function u(){return e[18](e[26])}return{c(){t=k("button"),n=C("svg"),r=C("path"),s=T(),o=I(c),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-v3zbvc"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill",i=e[8].includes(e[26].id)?"currentColor":"none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","r-h-6 r-w-6 r-text-pink-600 dark:!r-text-pink-400 svelte-v3zbvc"),$(t,"class","r-px-2 r-py-2 r-rounded-full hover:r-bg-pink-100/60 dark:hover:!r-bg-pink-400/20 r-flex r-text-pink-600 dark:!r-text-pink-400 r-font-semibold r-gap-2 r-items-center svelte-v3zbvc")},m(e,i){_(e,t,i),y(t,n),y(n,r),y(t,s),y(t,o),a||(l=E(t,"click",u),a=!0)},p(t,r){e=t,260&r&&i!==(i=e[8].includes(e[26].id)?"currentColor":"none")&&$(n,"fill",i),4&r&&c!==(c=(e[26].likes??0)+"")&&N(o,c)},d(e){e&&b(t),a=!1,l()}}}function Lp(e,t){let n,r,i,s,o,a,l,u,h,d,p,f,g,m,v,w,x,C,S,E,R=t[5][t[26].user].name+"",z=t[9].format(t[26].timestamp)+"";v=new Ip({props:{source:t[26].text,renderers:{html:Ep}}});let P=t[0].user&&t[26].user==t[0].user.uid&&Op(t);function O(e,t){return e[0].user?Dp:Ap}let A=O(t),D=A(t);return{key:e,first:null,c(){n=k("div"),r=k("img"),o=T(),a=k("div"),l=k("h4"),u=I(R),h=T(),d=k("span"),p=I("commented "),f=I(z),g=T(),m=k("div"),oe(v.$$.fragment),w=T(),x=k("div"),P&&P.c(),C=T(),D.c(),S=T(),c(r.src,i=t[5][t[26].user].photo)||$(r,"src",i),$(r,"alt",s=t[5][t[26].user].name+"'s profile picture"),$(r,"class","r-h-12 r-w-12 r-rounded-full svelte-v3zbvc"),$(d,"class","r-text-base r-text-gray-400 r-font-normal svelte-v3zbvc"),$(l,"class","r-text-lg r-text-primary-800 dark:!r-text-primary-300 r-mb-2 r-font-medium svelte-v3zbvc"),$(m,"class","r-max-h-96 r-overflow-y-auto r-overflow-x-hidden r-break-words r-text-base r-prose dark:!r-prose-dark r-max-w-none dark:!r-text-white svelte-v3zbvc"),$(x,"class","r-w-full r-flex r-justify-end r-items-center r-gap-2 svelte-v3zbvc"),$(a,"class","r-bg-primary-50 dark:!r-bg-gray-700 r-flex-grow r-min-w-0 r-px-6 r-py-4 r-max-w-full svelte-v3zbvc"),$(n,"class","r-flex r-gap-4 svelte-v3zbvc"),this.first=n},m(e,t){_(e,n,t),y(n,r),y(n,o),y(n,a),y(a,l),y(l,u),y(l,h),y(l,d),y(d,p),y(d,f),y(a,g),y(a,m),ae(v,m,null),y(a,w),y(a,x),P&&P.m(x,null),y(x,C),D.m(x,null),y(n,S),E=!0},p(e,n){t=e,(!E||36&n&&!c(r.src,i=t[5][t[26].user].photo))&&$(r,"src",i),(!E||36&n&&s!==(s=t[5][t[26].user].name+"'s profile picture"))&&$(r,"alt",s),(!E||36&n)&&R!==(R=t[5][t[26].user].name+"")&&N(u,R),(!E||4&n)&&z!==(z=t[9].format(t[26].timestamp)+"")&&N(f,z);const o={};4&n&&(o.source=t[26].text),v.$set(o),t[0].user&&t[26].user==t[0].user.uid?P?P.p(t,n):(P=Op(t),P.c(),P.m(x,C)):P&&(P.d(1),P=null),A===(A=O(t))&&D?D.p(t,n):(D.d(1),D=A(t),D&&(D.c(),D.m(x,null)))},i(e){E||(Z(v.$$.fragment,e),E=!0)},o(e){X(v.$$.fragment,e),E=!1},d(e){e&&b(n),le(v),P&&P.d(),D.d()}}}function Mp(e){let t,n,r,s,o,a,l,c,u,h,d,p,f,g,m,v,w=e[7]?"Edit":"Preview";const x=[zp,Rp],C=[];function S(e,t){return e[7]?0:1}n=S(e),r=C[n]=x[n](e);let R=e[6]&&Pp(e);return{c(){t=k("div"),r.c(),s=T(),o=k("div"),a=k("button"),l=I(w),u=T(),h=k("button"),d=I("Submit"),f=T(),R&&R.c(),$(a,"class","dark:!r-bg-primary-600 dark:hover:!r-bg-primary-500 dark:disabled:!r-bg-gray-500 dark:!r-text-white dark:disabled:!r-text-gray-300 r-text-lg r-bg-primary-100 hover:r-bg-primary-200 r-text-primary-800 r-px-4 r-py-1 r-rounded-md disabled:r-bg-gray-100 disabled:r-hover:bg-gray-100 disabled:r-cursor-not-allowed disabled:r-text-gray-600 svelte-v3zbvc"),a.disabled=c=!e[0].user||!e[4],$(h,"type","button"),$(h,"class","dark:!r-from-primary-600 dark:hover:!r-from-primary-500 dark:disabled:hover:!r-from-primary-600 dark:!r-to-secondary-600 dark:hover:!r-to-secondary-500 dark:disabled:hover:!r-to-secondary-600 dark:!r-text-white r-text-lg r-primary-btn r-px-4 r-py-1 svelte-v3zbvc"),h.disabled=p=!e[0].user||!e[4],$(o,"class","r-self-end r-space-x-4 svelte-v3zbvc"),$(t,"class","r-flex r-flex-col r-gap-4 r-mt-16 r-text-base r-w-full svelte-v3zbvc")},m(r,i){_(r,t,i),C[n].m(t,null),y(t,s),y(t,o),y(o,a),y(a,l),y(o,u),y(o,h),y(h,d),y(t,f),R&&R.m(t,null),g=!0,m||(v=[E(a,"click",e[15]),E(h,"click",e[16])],m=!0)},p(e,[i]){let o=n;n=S(e),n===o?C[n].p(e,i):(Q(),X(C[o],1,1,(()=>{C[o]=null})),J(),r=C[n],r?r.p(e,i):(r=C[n]=x[n](e),r.c()),Z(r,1),r.m(t,s)),(!g||128&i)&&w!==(w=e[7]?"Edit":"Preview")&&N(l,w),(!g||17&i&&c!==(c=!e[0].user||!e[4]))&&(a.disabled=c),(!g||17&i&&p!==(p=!e[0].user||!e[4]))&&(h.disabled=p),e[6]?R?(R.p(e,i),64&i&&Z(R,1)):(R=Pp(e),R.c(),Z(R,1),R.m(t,null)):R&&(Q(),X(R,1,1,(()=>{R=null})),J())},i(e){g||(Z(r),Z(R),g=!0)},o(e){X(r),X(R),g=!1},d(e){e&&b(t),C[n].d(),R&&R.d(),m=!1,i(v)}}}function Fp(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s())),ph.addLocale(mh),ph.setDefaultLocale(mh.locale);const o=new ph("en-US");let a,l,c,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=mc();a=e.authStore,s(),s=u(a,(e=>r(0,i=e))),l=e.loginWithGoogle,c=e.logout}catch(e){throw e}const d=hc();let p=[],f=!1,g="",m={},v=!1,y=!1,w=[];A((()=>{oc(Xl(d,"users/info"),(e=>{r(5,m=e.val()??{}),r(6,v=!0)}),{onlyOnce:!0})}));const _=()=>{if(!i.user||!g)return;const e=`posts/${Cc(h)}/comments`,t=function(e,t){e=Je(e),vl("push",e._path),pl("push",t,e._path,!0);const n=Sl(e._repo),r=Bs(n),i=ec(e,r),s=ec(e,r);let o;return o=null!=t?tc(s,t).then((()=>s)):Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}(Xl(d,e),{user:i.user.uid,text:g,timestamp:dc,likes:0}).key;m[i.user.uid]||r(5,m={...m,[i.user.uid]:{name:i.user.displayName,photo:i.user.photoURL}}),r(2,p=[{id:t,user:i.user.uid,text:g,timestamp:Date.now(),likes:0},...p]),r(4,g=""),r(7,y=!1)},b=async e=>{i.user&&e.user==i.user.uid&&(await tc(Xl(d,`posts/${Cc(h)}/comments/${e.id}`),null),r(2,p=p.filter((t=>t.id!==e.id))))},x=async e=>{w.includes(e.id)?(async e=>{if(!i.user)return;const t={};t[`posts/${Cc(h)}/comments/${e.id}/likes`]=pc(-1),t[`users/activity/${i.user.uid}/${Cc(h)}/commentLikes/${e.id}`]=null,await nc(Xl(d),t),e.likes--,r(2,p=[...p]),r(8,w=w.filter((t=>t!==e.id)))})(e):(async e=>{if(!i.user)return;const t={};t[`posts/${Cc(h)}/comments/${e.id}/likes`]=pc(1),t[`users/activity/${i.user.uid}/${Cc(h)}/commentLikes/${e.id}`]=!0,await nc(Xl(d),t),e.likes++,r(2,p=[...p]),r(8,w=[...w,e.id])})(e)};return t.$$set=e=>{"page"in e&&r(13,h=e.page)},t.$$.update=()=>{if(8193&t.$$.dirty){oc(function(e,...t){let n=Je(e);for(const e of t)n=e._apply(n);return n}(Xl(d,`posts/${Cc(h)}/comments`),function(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ml("orderByChild","path",e,!1),new ac(e)}("timestamp")),(e=>{var t;t=Object.entries(e.val()??{}).map((([e,t])=>({id:e,...t}))).reverse(),r(2,p=t),r(3,f=!0)}),{onlyOnce:!0}),i.user?oc(Xl(d,`users/activity/${i.user.uid}/${Cc(h)}/commentLikes`),(e=>{var t;t=e.val()??{},r(8,w=Object.keys(t))}),{onlyOnce:!0}):r(8,w=[])}},[i,a,p,f,g,m,v,y,w,o,_,b,x,h,function(){g=this.value,r(4,g)},()=>{r(7,y=!y)},()=>_(),e=>b(e),e=>x(e)]}class Up extends he{constructor(e){super(),ue(this,e,Fp,Mp,o,{page:13},$p)}}function jp(e){w(e,"svelte-q0l5g4",'.r-fixed{position:fixed}.r-top-6{top:1.5rem}.r-right-6{right:1.5rem}.r-mx-auto{margin-left:auto;margin-right:auto}.r-my-16{margin-top:4rem;margin-bottom:4rem}.r-mx-4{margin-left:1rem;margin-right:1rem}.r-mt-4{margin-top:1rem}.r-mt-16{margin-top:4rem}.r-mb-2{margin-bottom:0.5rem}.r-mt-8{margin-top:2rem}.r-mr-2{margin-right:0.5rem}.r-flex{display:flex}.r-hidden{display:none}.r-h-9{height:2.25rem}.r-h-28{height:7rem}.r-h-12{height:3rem}.r-h-6{height:1.5rem}.r-h-4{height:1rem}.r-max-h-96{max-height:24rem}.r-w-full{width:100%}.r-w-12{width:3rem}.r-w-6{width:1.5rem}.r-w-4{width:1rem}.r-min-w-0{min-width:0px}.r-max-w-none{max-width:none}.r-max-w-full{max-width:100%}.r-flex-grow{flex-grow:1}.r-flex-col{flex-direction:column}.r-items-center{align-items:center}.r-justify-end{justify-content:flex-end}.r-gap-10{gap:2.5rem}.r-gap-2{gap:0.5rem}.r-gap-4{gap:1rem}.r-space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.r-space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.r-self-end{align-self:flex-end}.r-overflow-y-auto{overflow-y:auto}.r-overflow-x-hidden{overflow-x:hidden}.r-break-words{overflow-wrap:break-word}.r-rounded-md{border-radius:0.375rem}.r-rounded-full{border-radius:9999px}.\\!r-rounded-lg{border-radius:0.5rem !important}.r-border-gray-300{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.r-bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.r-bg-primary-100{background-color:var(--reactive-primary-100, #e0f2fe)}.r-bg-primary-50{background-color:var(--reactive-primary-50, #f0f9ff)}.r-bg-primary-200{background-color:var(--reactive-primary-200, #bae6fd)}.r-bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.r-bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.r-from-primary-100{--tw-gradient-from:var(--reactive-primary-100, #e0f2fe);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.r-to-secondary-100{--tw-gradient-to:var(--reactive-secondary-100, #f3e8ff)}.r-py-1{padding-top:0.25rem;padding-bottom:0.25rem}.r-px-6{padding-left:1.5rem;padding-right:1.5rem}.r-py-4{padding-top:1rem;padding-bottom:1rem}.r-px-4{padding-left:1rem;padding-right:1rem}.r-px-2{padding-left:0.5rem;padding-right:0.5rem}.r-py-2{padding-top:0.5rem;padding-bottom:0.5rem}.\\!r-px-3{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!r-py-1\\.5{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!r-py-1{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.r-text-center{text-align:center}.r-font-sans{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.r-text-3xl{font-size:1.875rem;line-height:2.25rem}.r-text-2xl{font-size:1.5rem;line-height:2rem}.r-text-base{font-size:1rem;line-height:1.5rem}.r-text-lg{font-size:1.125rem;line-height:1.75rem}.r-font-bold{font-weight:700}.r-font-medium{font-weight:500}.r-font-normal{font-weight:400}.r-font-semibold{font-weight:600}.r-text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.r-text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.r-text-primary-600{color:var(--reactive-primary-600, #0284c7)}.r-text-gray-700{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.r-text-primary-900{color:var(--reactive-primary-900, #0c4a6e)}.r-text-gray-600{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.r-text-primary-800{color:var(--reactive-primary-800, #075985)}.r-text-primary-500{color:var(--reactive-primary-500, #0ea5e9)}.r-text-gray-400{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.r-text-red-600{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.r-text-pink-600{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!r-ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!r-ring-primary-500{--tw-ring-color:var(--reactive-primary-500, #0ea5e9) !important}.r-prose{color:#374151;max-width:65ch}.r-prose [class~="lead"]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.r-prose a{color:#111827;text-decoration:underline;font-weight:500}.r-prose strong{color:#111827;font-weight:600}.r-prose ol[type="A"]{--list-counter-style:upper-alpha}.r-prose ol[type="a"]{--list-counter-style:lower-alpha}.r-prose ol[type="A" s]{--list-counter-style:upper-alpha}.r-prose ol[type="a" s]{--list-counter-style:lower-alpha}.r-prose ol[type="I"]{--list-counter-style:upper-roman}.r-prose ol[type="i"]{--list-counter-style:lower-roman}.r-prose ol[type="I" s]{--list-counter-style:upper-roman}.r-prose ol[type="i" s]{--list-counter-style:lower-roman}.r-prose ol[type="1"]{--list-counter-style:decimal}.r-prose ol>li{position:relative;padding-left:1.75em}.r-prose ol>li::before{content:counter(list-item, var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#6b7280;left:0}.r-prose ul>li{position:relative;padding-left:1.75em}.r-prose ul>li::before{content:"";position:absolute;background-color:#d1d5db;border-radius:50%;width:0.375em;height:0.375em;top:calc(0.875em - 0.1875em);left:0.25em}.r-prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.r-prose blockquote{font-weight:500;font-style:italic;color:#111827;border-left-width:0.25rem;border-left-color:#e5e7eb;quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.r-prose blockquote p:first-of-type::before{content:open-quote}.r-prose blockquote p:last-of-type::after{content:close-quote}.r-prose h1{color:#111827;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111}.r-prose h2{color:#111827;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.r-prose h3{color:#111827;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6}.r-prose h4{color:#111827;font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5}.r-prose figure figcaption{color:#6b7280;font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em}.r-prose code{color:#111827;font-weight:600;font-size:0.875em}.r-prose code::before{content:"`"}.r-prose code::after{content:"`"}.r-prose a code{color:#111827}.r-prose pre{color:#e5e7eb;background-color:#1f2937;overflow-x:auto;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em}.r-prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.r-prose pre code::before{content:none}.r-prose pre code::after{content:none}.r-prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857}.r-prose thead{color:#111827;font-weight:600;border-bottom-width:1px;border-bottom-color:#d1d5db}.r-prose thead th{vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.r-prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.r-prose tbody tr:last-child{border-bottom-width:0}.r-prose tbody td{vertical-align:top;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.r-prose{font-size:1rem;line-height:1.75}.r-prose p{margin-top:1.25em;margin-bottom:1.25em}.r-prose img{margin-top:2em;margin-bottom:2em}.r-prose video{margin-top:2em;margin-bottom:2em}.r-prose figure{margin-top:2em;margin-bottom:2em}.r-prose figure>*{margin-top:0;margin-bottom:0}.r-prose h2 code{font-size:0.875em}.r-prose h3 code{font-size:0.9em}.r-prose ol{margin-top:1.25em;margin-bottom:1.25em}.r-prose ul{margin-top:1.25em;margin-bottom:1.25em}.r-prose li{margin-top:0.5em;margin-bottom:0.5em}.r-prose>ul>li p{margin-top:0.75em;margin-bottom:0.75em}.r-prose>ul>li>*:first-child{margin-top:1.25em}.r-prose>ul>li>*:last-child{margin-bottom:1.25em}.r-prose>ol>li>*:first-child{margin-top:1.25em}.r-prose>ol>li>*:last-child{margin-bottom:1.25em}.r-prose ul ul,.r-prose ul ol,.r-prose ol ul,.r-prose ol ol{margin-top:0.75em;margin-bottom:0.75em;margin-top:0.75em;margin-bottom:0.75em;margin-top:0.75em;margin-bottom:0.75em;margin-top:0.75em;margin-bottom:0.75em}.r-prose hr+*{margin-top:0}.r-prose h2+*{margin-top:0}.r-prose h3+*{margin-top:0}.r-prose h4+*{margin-top:0}.r-prose thead th:first-child{padding-left:0}.r-prose thead th:last-child{padding-right:0}.r-prose tbody td:first-child{padding-left:0}.r-prose tbody td:last-child{padding-right:0}.r-prose>:first-child{margin-top:0}.r-prose>:last-child{margin-bottom:0}.hover\\:r-bg-primary-100:hover{background-color:var(--reactive-primary-100, #e0f2fe)}.hover\\:r-bg-primary-200:hover{background-color:var(--reactive-primary-200, #bae6fd)}.hover\\:r-bg-red-100\\/60:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:r-bg-pink-100\\/60:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:r-bg-primary-50:hover{background-color:var(--reactive-primary-50, #f0f9ff)}.hover\\:r-from-primary-200:hover{--tw-gradient-from:var(--reactive-primary-200, #bae6fd);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.hover\\:r-to-secondary-200:hover{--tw-gradient-to:var(--reactive-secondary-200, #e9d5ff)}.hover\\:\\!r-shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!r-ring-2:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:r-cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:r-bg-gray-100:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:r-text-gray-600:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:r-opacity-70:disabled{opacity:0.7}.disabled\\:hover\\:r-from-primary-100:disabled:hover{--tw-gradient-from:var(--reactive-primary-100, #e0f2fe);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.r-dark .dark\\:\\!r-prose-dark{color:#fff !important}.r-dark .dark\\:\\!r-prose-dark h1{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h2{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h3{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h4{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h5{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h6{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark a{color:var(--reactive-primary-300, #7dd3fc) !important}.r-dark .dark\\:\\!r-prose-dark blockquote{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark strong{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark code{font-weight:inherit !important}.r-dark .dark\\:\\!r-border-gray-600{--tw-border-opacity:1 !important;border-color:rgba(75, 85, 99, var(--tw-border-opacity)) !important}.r-dark .dark\\:\\!r-bg-gray-700{--tw-bg-opacity:1 !important;background-color:rgba(55, 65, 81, var(--tw-bg-opacity)) !important}.r-dark .dark\\:\\!r-bg-gray-800{--tw-bg-opacity:1 !important;background-color:rgba(31, 41, 55, var(--tw-bg-opacity)) !important}.r-dark .dark\\:\\!r-bg-primary-600{background-color:var(--reactive-primary-600, #0284c7) !important}.r-dark .dark\\:\\!r-bg-primary-800{background-color:var(--reactive-primary-800, #075985) !important}.r-dark .dark\\:r-from-primary-600{--tw-gradient-from:var(--reactive-primary-600, #0284c7);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.r-dark .dark\\:\\!r-from-primary-600{--tw-gradient-from:var(--reactive-primary-600, #0284c7) !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0)) !important}.r-dark .dark\\:r-to-secondary-600{--tw-gradient-to:var(--reactive-secondary-600, #9333ea)}.r-dark .dark\\:\\!r-to-secondary-600{--tw-gradient-to:var(--reactive-secondary-600, #9333ea) !important}.r-dark .dark\\:r-text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.r-dark .dark\\:r-text-primary-400{color:var(--reactive-primary-400, #38bdf8)}.r-dark .dark\\:\\!r-text-gray-200{--tw-text-opacity:1 !important;color:rgba(229, 231, 235, var(--tw-text-opacity)) !important}.r-dark .dark\\:\\!r-text-white{--tw-text-opacity:1 !important;color:rgba(255, 255, 255, var(--tw-text-opacity)) !important}.r-dark .dark\\:\\!r-text-primary-300{color:var(--reactive-primary-300, #7dd3fc) !important}.r-dark .dark\\:\\!r-text-red-500{--tw-text-opacity:1 !important;color:rgba(239, 68, 68, var(--tw-text-opacity)) !important}.r-dark .dark\\:\\!r-text-pink-400{--tw-text-opacity:1 !important;color:rgba(244, 114, 182, var(--tw-text-opacity)) !important}.r-dark .dark\\:hover\\:\\!r-bg-primary-500:hover{background-color:var(--reactive-primary-500, #0ea5e9) !important}.r-dark .dark\\:hover\\:\\!r-bg-red-500\\/25:hover{background-color:rgba(239, 68, 68, 0.25) !important}.r-dark .dark\\:hover\\:\\!r-bg-pink-400\\/20:hover{background-color:rgba(244, 114, 182, 0.2) !important}.r-dark .dark\\:hover\\:\\!r-bg-primary-600:hover{background-color:var(--reactive-primary-600, #0284c7) !important}.r-dark .dark\\:hover\\:r-from-primary-500:hover{--tw-gradient-from:var(--reactive-primary-500, #0ea5e9);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.r-dark .dark\\:hover\\:\\!r-from-primary-500:hover{--tw-gradient-from:var(--reactive-primary-500, #0ea5e9) !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0)) !important}.r-dark .dark\\:hover\\:r-to-secondary-500:hover{--tw-gradient-to:var(--reactive-secondary-500, #a855f7)}.r-dark .dark\\:hover\\:\\!r-to-secondary-500:hover{--tw-gradient-to:var(--reactive-secondary-500, #a855f7) !important}.r-dark .dark\\:disabled\\:\\!r-bg-gray-500:disabled{--tw-bg-opacity:1 !important;background-color:rgba(107, 114, 128, var(--tw-bg-opacity)) !important}.r-dark .dark\\:disabled\\:\\!r-text-gray-300:disabled{--tw-text-opacity:1 !important;color:rgba(209, 213, 219, var(--tw-text-opacity)) !important}.r-dark .dark\\:disabled\\:hover\\:\\!r-from-primary-600:disabled:hover{--tw-gradient-from:var(--reactive-primary-600, #0284c7) !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0)) !important}.r-dark .dark\\:disabled\\:hover\\:\\!r-to-secondary-600:disabled:hover{--tw-gradient-to:var(--reactive-secondary-600, #9333ea) !important}')}class qp extends he{constructor(e){super(),ue(this,e,null,null,o,{},jp)}}const{document:Wp}=ee;function Vp(e){w(e,"svelte-1ms28i4",'.svelte-1ms28i4,.svelte-1ms28i4::before,.svelte-1ms28i4::after{box-sizing:border-box}button.svelte-1ms28i4{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1ms28i4{text-transform:none}button.svelte-1ms28i4,[type=\'button\'].svelte-1ms28i4{-webkit-appearance:button}.svelte-1ms28i4::-moz-focus-inner{border-style:none;padding:0}.svelte-1ms28i4:-moz-focusring{outline:1px dotted ButtonText}.svelte-1ms28i4:-moz-ui-invalid{box-shadow:none}.svelte-1ms28i4::-webkit-inner-spin-button,.svelte-1ms28i4::-webkit-outer-spin-button{height:auto}.svelte-1ms28i4::-webkit-search-decoration{-webkit-appearance:none}.svelte-1ms28i4::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h2.svelte-1ms28i4,h3.svelte-1ms28i4{margin:0}button.svelte-1ms28i4{background-color:transparent;background-image:none}.svelte-1ms28i4,.svelte-1ms28i4::before,.svelte-1ms28i4::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1ms28i4{cursor:pointer}.svelte-1ms28i4:-moz-focusring{outline:auto}h2.svelte-1ms28i4,h3.svelte-1ms28i4{font-size:inherit;font-weight:inherit}button.svelte-1ms28i4{padding:0;line-height:inherit;color:inherit}.svelte-1ms28i4,.svelte-1ms28i4::before,.svelte-1ms28i4::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}main.svelte-1ms28i4{margin:0;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n        "Noto Color Emoji";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-text-size-adjust:100%}.r-mx-auto.svelte-1ms28i4{margin-left:auto;margin-right:auto}.r-my-16.svelte-1ms28i4{margin-top:4rem;margin-bottom:4rem}.r-mt-4.svelte-1ms28i4{margin-top:1rem}.r-flex.svelte-1ms28i4{display:flex}.r-hidden.svelte-1ms28i4{display:none}.r-h-9.svelte-1ms28i4{height:2.25rem}.r-w-full.svelte-1ms28i4{width:100%}.r-flex-col.svelte-1ms28i4{flex-direction:column}.r-items-center.svelte-1ms28i4{align-items:center}.r-gap-10.svelte-1ms28i4{gap:2.5rem}.r-gap-2.svelte-1ms28i4{gap:0.5rem}.r-text-center.svelte-1ms28i4{text-align:center}.r-text-3xl.svelte-1ms28i4{font-size:1.875rem;line-height:2.25rem}.r-text-2xl.svelte-1ms28i4{font-size:1.5rem;line-height:2rem}.r-font-bold.svelte-1ms28i4{font-weight:700}.r-font-medium.svelte-1ms28i4{font-weight:500}.r-text-primary-600.svelte-1ms28i4{color:var(--reactive-primary-600, #0284c7)}.r-text-gray-700.svelte-1ms28i4{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.r-primary-btn.svelte-1ms28i4{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:var(--reactive-primary-100, #e0f2fe);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));--tw-gradient-to:var(--reactive-secondary-100, #f3e8ff);padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;color:var(--reactive-primary-900, #0c4a6e)}.r-primary-btn.svelte-1ms28i4:hover{background-color:var(--reactive-primary-100, #e0f2fe);--tw-gradient-from:var(--reactive-primary-200, #bae6fd);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));--tw-gradient-to:var(--reactive-secondary-200, #e9d5ff)}')}function Bp(e){let t;return{c(){t=k("meta"),$(t,"name","monetization"),$(t,"content",e[5]),$(t,"class","svelte-1ms28i4")},m(e,n){_(e,t,n)},p(e,n){32&n&&$(t,"content",e[5])},d(e){e&&b(t)}}}function Hp(t){let n;return{c(){n=k("div"),$(n,"class","r-h-9 svelte-1ms28i4")},m(e,t){_(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function Gp(t){let n,r,i,o,a;return{c(){n=k("div"),r=k("button"),r.textContent="Login",i=I("\n      to add reactions and comments."),$(r,"type","button"),$(r,"class","r-primary-btn r-text-md dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-to-secondary-600 dark:hover:r-to-secondary-500 dark:r-text-white svelte-1ms28i4"),$(n,"class","svelte-1ms28i4")},m(e,l){_(e,n,l),y(n,r),y(n,i),o||(a=E(r,"click",(function(){s(t[7])&&t[7].apply(this,arguments)})),o=!0)},p(e,n){t=e},i:e,o:e,d(e){e&&b(n),o=!1,a()}}}function Kp(e){let t,n,r,i,o,a,l,c,u,h,d,p,f,g=e[9].user.displayName+"";return u=new wc({}),{c(){t=k("div"),n=k("h2"),r=I("Hi "),i=k("span"),o=I(g),a=I(" 👋!"),l=T(),c=k("button"),oe(u.$$.fragment),h=I("\n        Logout"),$(i,"class","r-text-primary-600 dark:r-text-primary-400 svelte-1ms28i4"),$(n,"class","r-text-3xl r-font-bold svelte-1ms28i4"),$(c,"type","button"),$(c,"class","r-flex r-items-center r-gap-2 r-text-md r-primary-btn dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-to-secondary-600 dark:hover:r-to-secondary-500 dark:r-text-white svelte-1ms28i4"),$(t,"class","r-flex r-gap-10 r-items-center svelte-1ms28i4")},m(g,m){_(g,t,m),y(t,n),y(n,r),y(n,i),y(i,o),y(n,a),y(t,l),y(t,c),ae(u,c,null),y(c,h),d=!0,p||(f=E(c,"click",(function(){s(e[8])&&e[8].apply(this,arguments)})),p=!0)},p(t,n){e=t,(!d||512&n)&&g!==(g=e[9].user.displayName+"")&&N(o,g)},i(e){d||(Z(u.$$.fragment,e),d=!0)},o(e){X(u.$$.fragment,e),d=!1},d(e){e&&b(t),le(u),p=!1,f()}}}function Yp(e){let t,n;return{c(){t=k("h3"),n=I(e[4]),$(t,"class","r-text-2xl r-text-center r-mt-4 r-font-medium svelte-1ms28i4")},m(e,r){_(e,t,r),y(t,n)},p(e,t){16&t&&N(n,e[4])},d(e){e&&b(t)}}}function Qp(e){let t,n;return t=new Nc({props:{page:e[3],reactions:e[2]}}),{c(){oe(t.$$.fragment)},m(e,r){ae(t,e,r),n=!0},p(e,n){const r={};8&n&&(r.page=e[3]),4&n&&(r.reactions=e[2]),t.$set(r)},i(e){n||(Z(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Jp(e){let t,n,r,i,s,o,a,l,c,u,h,d,p,f,g,m=e[5]&&Bp(e);const v=[Kp,Gp,Hp],w=[];function x(e,t){return e[9].user?0:e[9].loading?2:1}i=x(e),s=w[i]=v[i](e);let C=e[4].length>0&&Yp(e),I=e[2].length>0&&Qp(e);return h=new Up({props:{page:e[3]}}),f=new qp({}),{c(){m&&m.c(),t=S(),n=T(),r=k("main"),s.c(),o=T(),a=k("div"),a.textContent="Thanks for using Webmonetization to support this site.",l=T(),C&&C.c(),c=T(),I&&I.c(),u=T(),oe(h.$$.fragment),p=T(),oe(f.$$.fragment),$(a,"class","r-hidden dark:r-text-white r-text-gray-700 svelte-1ms28i4"),$(a,"id","exclusive"),$(r,"class","r-w-full r-mx-auto r-flex r-flex-col r-items-center r-my-16 dark:r-text-white svelte-1ms28i4"),$(r,"style",d=`${e[10](e[0],"primary")} ${e[10](e[1],"secondary")}`)},m(e,s){m&&m.m(Wp.head,null),y(Wp.head,t),_(e,n,s),_(e,r,s),w[i].m(r,null),y(r,o),y(r,a),y(r,l),C&&C.m(r,null),y(r,c),I&&I.m(r,null),y(r,u),ae(h,r,null),_(e,p,s),ae(f,e,s),g=!0},p(e,[n]){e[5]?m?m.p(e,n):(m=Bp(e),m.c(),m.m(t.parentNode,t)):m&&(m.d(1),m=null);let a=i;i=x(e),i===a?w[i].p(e,n):(Q(),X(w[a],1,1,(()=>{w[a]=null})),J(),s=w[i],s?s.p(e,n):(s=w[i]=v[i](e),s.c()),Z(s,1),s.m(r,o)),e[4].length>0?C?C.p(e,n):(C=Yp(e),C.c(),C.m(r,c)):C&&(C.d(1),C=null),e[2].length>0?I?(I.p(e,n),4&n&&Z(I,1)):(I=Qp(e),I.c(),Z(I,1),I.m(r,u)):I&&(Q(),X(I,1,1,(()=>{I=null})),J());const l={};8&n&&(l.page=e[3]),h.$set(l),(!g||3&n&&d!==(d=`${e[10](e[0],"primary")} ${e[10](e[1],"secondary")}`))&&$(r,"style",d)},i(e){g||(Z(s),Z(I),Z(h.$$.fragment,e),Z(f.$$.fragment,e),g=!0)},o(e){X(s),X(I),X(h.$$.fragment,e),X(f.$$.fragment,e),g=!1},d(e){m&&m.d(e),b(t),e&&b(n),e&&b(r),w[i].d(),C&&C.d(),I&&I.d(),le(h),e&&b(p),le(f,e)}}}function Zp(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s()));const o=[50,100,200,300,400,500,600,700,800,900];let{primaryColors:a}=n,{secondaryColors:l}=n;const c=e=>{if(e&&e.length&&10!==e.length)throw new Error("Must include exactly 10 colors")};c(a),c(l);let h,d,p,{firebaseConfig:f}=n,{reactions:g=["😭","😕","😀","🤩"]}=n,{page:m=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n,{reactionText:v="Did you enjoy this post? Leave your reactions below!"}=n,{paymentPointer:y=null}=n;if(!f)throw new Error("No firebaseConfig was provided");Array.from(gt.values()).length||function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:pt,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw _t.create("bad-app-name",{appName:String(r)});if(gt.has(r))throw _t.create("duplicate-app",{appName:r});const i=new rt(r);for(const e of mt.values())i.addComponent(e);const s=new bt(e,n,i);gt.set(r,s)}(f);try{const e=mc();h=e.authStore,s(),s=u(h,(e=>r(9,i=e))),d=e.loginWithGoogle,p=e.logout}catch(e){throw e}return null!==y&&document.monetization&&document.monetization.addEventListener("monetizationstart",(()=>{console.log("started"),document.getElementById("exclusive").classList.remove("hidden")})),t.$$set=e=>{"primaryColors"in e&&r(0,a=e.primaryColors),"secondaryColors"in e&&r(1,l=e.secondaryColors),"firebaseConfig"in e&&r(11,f=e.firebaseConfig),"reactions"in e&&r(2,g=e.reactions),"page"in e&&r(3,m=e.page),"reactionText"in e&&r(4,v=e.reactionText),"paymentPointer"in e&&r(5,y=e.paymentPointer)},[a,l,g,m,v,y,h,d,p,i,(e,t)=>e?o.map(((n,r)=>`--reactive-${t}-${n}: ${e[r]};`)).join(" "):"",f]}class Xp extends he{constructor(e){super(),ue(this,e,Zp,Jp,o,{primaryColors:0,secondaryColors:1,firebaseConfig:11,reactions:2,page:3,reactionText:4,paymentPointer:5},Vp)}}const ef={install:({firebaseConfig:e,reactions:t,page:n,reactionText:r,paymentPointer:i,primaryColors:s,secondaryColors:o})=>{const a=document.getElementById("reactive_widget");for(;a.firstChild;)a.removeChild(a.firstChild);new Xp({target:a,props:{firebaseConfig:e,page:n,reactions:t,reactionText:r,paymentPointer:i,primaryColors:s,secondaryColors:o}})}};return ef}));
