var reactive=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,l;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function u(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(e,t,n,r){if(e){const i=d(e,t,n,r);return e[0](i)}}function d(e,n,r,i){return e[1]&&i?t(r.ctx.slice(),e[1](i(n))):r.ctx}function p(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function f(e,t,n,r,i,s){if(i){const o=d(t,n,r,s);e.p(o,i)}}function m(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function g(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function v(e){return null==e?"":e}function y(e,t){e.appendChild(t)}function _(e,t,n){const r=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t.host)return t;return document}(e);if(!r.getElementById(t)){const e=k("style");e.id=t,e.textContent=n,function(e,t){y(e.head||e,t)}(r,e)}}function w(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function x(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function C(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function T(){return I(" ")}function S(){return I("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}class q{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=k(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)w(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}function P(e){l=e}function O(e){(function(){if(!l)throw new Error("Function called outside component initialization");return l})().$$.on_mount.push(e)}const A=[],D=[],L=[],M=[],F=Promise.resolve();let z=!1;function U(e){L.push(e)}let j=!1;const W=new Set;function V(){if(!j){j=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];P(t),H(t.$$)}for(P(null),A.length=0;D.length;)D.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];W.has(t)||(W.add(t),t())}L.length=0}while(A.length);for(;M.length;)M.pop()();z=!1,j=!1,W.clear()}}function H(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}const B=new Set;let G;function K(){G={r:0,c:[],p:G}}function Y(){G.r||i(G.c),G=G.p}function J(e,t){e&&e.i&&(B.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),G.c.push((()=>{B.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function Z(e,t){e.d(1),t.delete(e.key)}function X(e,t){Q(e,1,1,(()=>{t.delete(e.key)}))}function ee(e,t,n,r,i,s,o,a,l,c,u,h){let d=e.length,p=s.length,f=d;const m={};for(;f--;)m[e[f].key]=f;const g=[],v=new Map,y=new Map;for(f=p;f--;){const e=h(i,s,f),a=n(e);let l=o.get(a);l?r&&l.p(e,t):(l=c(a,e),l.c()),v.set(a,g[f]=l),a in m&&y.set(a,Math.abs(f-m[a]))}const _=new Set,w=new Set;function b(e){J(e,1),e.m(a,u),o.set(e.key,e),u=e.first,p--}for(;d&&p;){const t=g[p-1],n=e[d-1],r=t.key,i=n.key;t===n?(u=t.first,d--,p--):v.has(i)?!o.has(r)||_.has(r)?b(t):w.has(i)?d--:y.get(r)>y.get(i)?(w.add(r),b(t)):(_.add(i),d--):(l(n,o),d--)}for(;d--;){const t=e[d];v.has(t.key)||l(t,o)}for(;p;)b(g[p-1]);return g}function te(e,t){const n={},r={},i={$$scope:1};let s=e.length;for(;s--;){const o=e[s],a=t[s];if(a){for(const e in o)e in a||(r[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[s]=a}else for(const e in o)i[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ne(e){return"object"==typeof e&&null!==e?e:{}}function re(e){e&&e.c()}function ie(e,t,r,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=e.$$;a&&a.m(t,r),o||U((()=>{const t=l.map(n).filter(s);c?c.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(U)}function se(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){-1===e.$$.dirty[0]&&(A.push(e),z||(z=!0,F.then(V)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(t,n,s,o,a,c,u,h=[-1]){const d=l;P(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};u&&u(p.root);let f=!1;if(p.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),f&&oe(t,e)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(b)}else p.fragment&&p.fragment.c();n.intro&&J(t.$$.fragment),ie(t,n.target,n.anchor,n.customElement),V()}P(d)}class le{$destroy(){se(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
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
    ***************************************************************************** */var ce=function(e,t){return(ce=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function ue(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function he(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function de(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function pe(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function fe(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function me(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||t)}
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
     */var ge=!1,ve="${JSCORE_VERSION}",ye=function(e,t){if(!e)throw _e(t)},_e=function(e){return new Error("Firebase Database ("+ve+") INTERNAL ASSERT FAILED: "+e)},we=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},be={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(we(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(r.push(c),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},xe=function(e){try{return be.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function ke(e){return Ce(void 0,e)}function Ce(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ce(e[n],t[n]));return e}
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
var Ie=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
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
     */function Te(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Se(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Ee(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function $e(){return!0===ge}
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
     */var Ne=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Re.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ce(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Re=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?qe(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",l=new Ne(i,a,r);return l},e}();function qe(e,t){return e.replace(Pe,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var Pe=/\{\$([^}]+)}/g;
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
     */var De=function(e){var t={},n={},r={},i="";try{var s=e.split(".");t=Oe(xe(s[0])||""),n=Oe(xe(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};
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
function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Me(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Fe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ze(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}
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
     */function Ue(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}
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
     */var je=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):r<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();var We=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ve),void 0===r.error&&(r.error=Ve),void 0===r.complete&&(r.complete=Ve);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Ve(){}function He(e,t){return e+" failed: "+t+" argument "}
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
     */var Be=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Ge(e){return e&&e._delegate?e._delegate:e}var Ke=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Ye="[DEFAULT]",Je=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Ie;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch(e){}try{for(var r=pe(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=fe(i.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=Ye),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return he(this,void 0,void 0,(function(){var e;return de(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(me(me([],fe(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),fe(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=Ye),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=pe(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=fe(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=pe(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ye?void 0:t),options:i}),this.instances.set(n,s),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(e){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=Ye),this.component?this.component.multipleInstances?e:Ye:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
    ***************************************************************************** */function et(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
     */!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ze||(Ze={}));var tt={debug:Ze.DEBUG,verbose:Ze.VERBOSE,info:Ze.INFO,warn:Ze.WARN,error:Ze.ERROR,silent:Ze.SILENT},nt=Ze.INFO,rt=((Qe={})[Ze.DEBUG]="log",Qe[Ze.VERBOSE]="log",Qe[Ze.INFO]="info",Qe[Ze.WARN]="warn",Qe[Ze.ERROR]="error",Qe),it=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=rt[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,et(["["+i+"]  "+e.name+":"],n))}},st=function(){function e(e){this.name=e,this._logLevel=nt,this._logHandler=it,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Ze))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?tt[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.DEBUG],e)),this._logHandler.apply(this,et([this,Ze.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.VERBOSE],e)),this._logHandler.apply(this,et([this,Ze.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.INFO],e)),this._logHandler.apply(this,et([this,Ze.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.WARN],e)),this._logHandler.apply(this,et([this,Ze.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,et([this,Ze.ERROR],e)),this._logHandler.apply(this,et([this,Ze.ERROR],e))},e}();
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
class ot{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const at="@firebase/app-exp",lt=new st("@firebase/app"),ct="[DEFAULT]",ut={[at]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check-exp":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},ht=new Map,dt=new Map;function pt(e,t){try{e.container.addComponent(t)}catch(n){lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(dt.has(t))return lt.debug(`There were multiple attempts to register component ${t}.`),!1;dt.set(t,e);for(const t of ht.values())pt(t,e);return!0}function mt(e,t){return e.container.getProvider(t)}
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
     */const gt=new Re("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class vt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ke("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}
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
     */const yt="9.0.0-beta.7";function _t(e="[DEFAULT]"){const t=ht.get(e);if(!t)throw gt.create("no-app",{appName:e});return t}function wt(e,t,n){var r;let i=null!==(r=ut[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void lt.warn(e.join(" "))}ft(new Ke(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var bt;ft(new Ke("platform-logger",(e=>new ot(e)),"PRIVATE")),wt(at,"0.0.900-exp.6ef484a04",bt),wt("fire-js","");const xt=new Re("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),kt=new st("@firebase/auth-exp");
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
     */function Ct(e,...t){kt.logLevel<=Ze.ERROR&&kt.error(`Auth (9.0.0-beta.7): ${e}`,...t)}
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
     */function It(e,...t){throw St(e,...t)}function Tt(e,...t){return St(e,...t)}function St(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xt.create(e,...t)}function Et(e,t,...n){if(!e)throw St(t,...n)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ct(t),new Error(t)}function Nt(e,t){e||$t(t)}
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
     */const Rt=new Map;function qt(e){Nt(e instanceof Function,"Expected a class definition");let t=Rt.get(e);return t?(Nt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Rt.set(e,t),t)}
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
function Pt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ot(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
     */function At(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Ot()&&"https:"!==Ot()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
class Dt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Se()||Ee()}get(){return At()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function Lt(e,t){Nt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
     */class Mt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void $t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void $t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void $t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const Ft={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},zt=new Dt(3e4,6e4);
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
     */async function Ut(e,t,n,r,i={}){return jt(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Ue(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Mt.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Mt.fetch()(Wt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function jt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ft),t);try{const t=new Vt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ht(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Ht(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Ht(e,"email-already-in-use",s);It(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(t){if(t instanceof Ne)throw t;It(e,"network-request-failed")}}function Wt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Lt(e.config,i):`${e.config.apiScheme}://${i}`}class Vt{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Tt(this.auth,"timeout"))),zt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ht(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(e,t,r);return i.customData._tokenResponse=n,i}
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
function Bt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Gt(e){return 1e3*Number(e)}function Kt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ct("JWT malformed, contained fewer than 3 sections"),null;try{const e=xe(n);return e?JSON.parse(e):(Ct("Failed to decode base64 JWT payload"),null)}catch(e){return Ct("Caught error parsing JWT payload as JSON",e),null}}
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
async function Yt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ne&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Jt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
     */class Qt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bt(this.lastLoginAt),this.creationTime=Bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function Zt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Yt(e,async function(e,t){return Ut(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Et(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ue(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class Xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Et(e.idToken,"internal-error"),Et(void 0!==e.idToken,"internal-error"),Et(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Kt(e);return Et(t,"internal-error"),Et(void 0!==t.exp,"internal-error"),Et(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Et(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await jt(e,{},(()=>{const n=Ue({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Wt(e,r,"/v1/token",`key=${i}`);return Mt.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Xt;return n&&(Et("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Et("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Et("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return $t("not implemented")}}
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
     */function en(e,t){Et("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ue(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Jt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Qt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Yt(this,this.stsTokenManager.getToken(this.auth,e));return Et(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ge(e),r=await n.getIdToken(t),i=Kt(r);Et(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bt(Gt(i.auth_time)),issuedAtTime:Bt(Gt(i.iat)),expirationTime:Bt(Gt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ge(e);await Zt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Et(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Et(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Zt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yt(this,async function(e,t){return Ut(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:x}=t;Et(y&&x,e,"internal-error");const k=Xt.fromJSON(this.name,x);Et("string"==typeof y,e,"internal-error"),en(u,e.name),en(h,e.name),Et("boolean"==typeof _,e,"internal-error"),Et("boolean"==typeof w,e,"internal-error"),en(d,e.name),en(p,e.name),en(f,e.name),en(m,e.name),en(g,e.name),en(v,e.name);const C=new tn({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:k,createdAt:g,lastLoginAt:v});return b&&Array.isArray(b)&&(C.providerData=b.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new Xt;r.updateFromServerResponse(t);const i=new tn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Zt(i),i}}
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
     */class nn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nn.type="NONE";const rn=nn;
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
     */function sn(e,t,n){return`firebase:${e}:${t}:${n}`}class on{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=sn(this.userKey,r.apiKey,i),this.fullPersistenceKey=sn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new on(qt(rn),e,n);let r=qt(rn);for(const e of t)if(await e._isAvailable()){r=e;break}let i=null;const s=sn(n,e.config.apiKey,e.name);for(const n of t)try{const t=await n._get(s);if(t){const s=tn._fromJSON(e,t);n!==r&&(i=s);break}}catch(e){}return i&&await r._set(s,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new on(r,e,n)}}
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
     */function an(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ln(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pn(t))return"Blackberry";if(fn(t))return"Webos";if(cn(t))return"Safari";if((t.includes("chrome/")||un(t))&&!t.includes("edge/"))return"Chrome";if(dn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ln(e=Te()){return/firefox\//i.test(e)}function cn(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function un(e=Te()){return/crios\//i.test(e)}function hn(e=Te()){return/iemobile/i.test(e)}function dn(e=Te()){return/android/i.test(e)}function pn(e=Te()){return/blackberry/i.test(e)}function fn(e=Te()){return/webos/i.test(e)}function mn(e=Te()){return/iphone|ipad|ipod/i.test(e)}function gn(){return((e=Te()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function vn(e=Te()){return mn(e)||dn(e)||fn(e)||pn(e)||/windows phone/i.test(e)||hn(e)}
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
function yn(e,t=[]){let n;switch(e){case"Browser":n=an(Te());break;case"Worker":n=`${an(Te())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0-beta.7/${t.length?t.join(","):"FirebaseCore-web"}`}
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
     */class _n{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bn(this),this.idTokenSubscription=new bn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qt(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await on.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Et(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){this.redirectInitializerError=e,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zt(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ge(e):null;return t&&Et(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Et(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(qt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Re("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qt(e)||this._popupRedirectResolver;Et(t,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Et(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Et(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function wn(e){return Ge(e)}class bn{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new We((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return Et(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */class xn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,t){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}
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
     */async function kn(e,t){return async function(e,t,n,r,i={}){const s=await Ut(e,t,n,r,i);return"mfaPendingCredential"in s&&It(e,"multi-factor-auth-required",{serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
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
     */class Cn extends xn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ue(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Cn(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return kn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ue(t)}return e}}
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
     */class In{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class Tn extends In{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
     */class Sn extends Tn{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch(e){return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Sn.PROVIDER_ID="facebook.com";
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
class En extends Tn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return En.credential(t,n)}catch(e){return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com",En.PROVIDER_ID="google.com";
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
class $n extends Tn{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch(e){return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com",$n.PROVIDER_ID="github.com";
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
class Nn extends Tn{constructor(){super("twitter.com")}static credential(e,t){return Cn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Nn.credential(t,n)}catch(e){return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com",Nn.PROVIDER_ID="twitter.com";
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
class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await tn._fromIdTokenResponse(e,n,r),s=qn(n);return new Rn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=qn(n);return new Rn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function qn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
     */class Pn extends Ne{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Pn.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Pn(e,t,n,r)}}function On(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function An(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Ge(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Yt(r,
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
async function(e,t){return Ut(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}
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
class Dn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Et(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
     */const Ln="__sak";
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
     */class Mn{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ln,"1"),this.storage.removeItem(Ln),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
     */class Fn extends Mn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Te();return cn(e)||mn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=vn(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);gn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fn.type="LOCAL";const zn=Fn;
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
class Un{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Un(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function jn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */Un.receivers=[];class Wn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=jn("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
     */function Vn(){return window}
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
function Hn(){return void 0!==Vn().WorkerGlobalScope&&"function"==typeof Vn().importScripts}
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
const Bn="firebaseLocalStorageDb",Gn="firebaseLocalStorage",Kn="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jn(e,t){return e.transaction([Gn],t?"readwrite":"readonly").objectStore(Gn)}function Qn(){const e=indexedDB.open(Bn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Gn,{keyPath:Kn})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Gn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Bn);return new Yn(e).toPromise()}(),t(await Qn()))}))}))}async function Zn(e,t,n){const r=Jn(e,!0).put({[Kn]:t,value:n});return new Yn(r).toPromise()}function Xn(e,t){const n=Jn(e,!0).delete(t);return new Yn(n).toPromise()}class er{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Un._getInstance(Hn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Wn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Zn(e,Ln,"1"),await Xn(e,Ln),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Jn(e,!1).get(t),r=await new Yn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Xn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jn(e,!1).getAll();return new Yn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}er.type="LOCAL";const tr=er;
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
     */class nr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ir(e);default:return!1}}
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ir(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Tt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rr(e))}saveEventToCache(e){this.cachedEventUids.add(rr(e)),this.lastProcessedEventTime=Date.now()}}function rr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ir({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const sr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,or=/^https?/;async function ar(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ut(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(lr(e))return}catch(e){}It(e,"unauthorized-domain")}function lr(e){const t=Pt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!or.test(n))return!1;if(sr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */function cr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Tt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}
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
const ur=new Dt(3e4,6e4);function hr(){const e=Vn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function dr(e){return new Promise(((t,n)=>{var r,i,s;function o(){hr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hr(),n(Tt(e,"network-request-failed"))},timeout:ur.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Vn()[t]=()=>{gapi.load?o():n(Tt(e,"network-request-failed"))},cr(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw pr=null,e}))}let pr=null;
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
const fr=new Dt(5e3,15e3),mr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},gr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vr(e){const t=e.config;Et(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Lt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:yt},i=gr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ue(r).slice(1)}`}async function yr(e){const t=await function(e){return pr=pr||dr(e),pr}(e),n=Vn().gapi;return Et(n,e,"internal-error"),t.open({where:document.body,url:vr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Tt(e,"network-request-failed"),s=Vn().setTimeout((()=>{r(i)}),fr.get());function o(){Vn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */class _r extends Mn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_r.type="SESSION";const wr=_r,br={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
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
     */class xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function kr(e,t,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},br),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Te().toLowerCase();n&&(a=un(c)?"_blank":n),ln(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Te()){var t;return mn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new xr(null);const h=window.open(t||"",a,u);Et(h,e,"popup-blocked");try{h.focus()}catch(e){}return new xr(h)}function Cr(e,t){return t?qt(t):(Et(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
     */class Ir extends xn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tr(e){
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
return async function(e,t,n=!1){const r="signIn",i=await On(e,r,t),s=await Rn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new Ir(e),e.bypassAuthState)}function Sr(e){const{auth:t,user:n}=e;return Et(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Yt(e,On(r,i,t,e),n);Et(s.idToken,r,"internal-error");const o=Kt(s.idToken);Et(o,r,"internal-error");const{sub:a}=o;return Et(e.uid===a,r,"user-mismatch"),Rn._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&It(r,"user-mismatch"),e}}(n,new Ir(e),e.bypassAuthState)}async function Er(e){const{auth:t,user:n}=e;return Et(n,t,"internal-error"),async function(e,t,n=!1){const r=await Yt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rn._forOperation(e,"link",r)}(n,new Ir(e),e.bypassAuthState)}
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
     */class $r{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tr;case"linkViaPopup":case"linkViaRedirect":return Er;case"reauthViaPopup":case"reauthViaRedirect":return Sr;default:It(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Nr="pendingRedirect",Rr=new Map;class qr extends $r{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return sn(Nr,e.config.apiKey,e.name)}(t),r="true"===await Pr(e)._get(n);return await Pr(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Rr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Pr(e){return qt(e._redirectPersistence)}async function Or(e,t,n=!1){const r=wn(e),i=Cr(r,t),s=new qr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
     */const Ar="__/auth/handler",Dr="emulator/auth/handler";function Lr(e,t,n,r,i,s){Et(e.config.authDomain,e,"auth-domain-config-required"),Et(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:yt,eventId:i};if(t instanceof In){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Fe(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Tn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ar}`;return Lt(e,Dr)}
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
     */(e)}?${Ue(a).slice(1)}`}const Mr="webStorageSupport";const Fr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wr,this._completeRedirectFn=Or}async _openPopup(e,t,n,r){var i;Nt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return kr(e,Lr(e,t,n,Pt(),r),jn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Lr(e,t,n,Pt(),r),Vn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Nt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await yr(e),n=new nr(e);return t.register("authEvent",(t=>{Et(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mr,{type:Mr},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),It(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ar(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vn()||cn()||mn()}};new Dt(3e4,6e4);
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
const zr=new Dt(2e3,1e4);class Ur extends $r{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Et(e,this.auth,"internal-error"),e}async onExecution(){Nt(1===this.filter.length,"Popup operations only handle one event");const e=jn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Tt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,zr.get())};e()}}function jr(e=_t()){const t=mt(e,"auth-exp");return t.isInitialized()?t.getImmediate():function(e,t){const n=mt(e,"auth-exp");n.isInitialized()&&It(n.getImmediate(),"already-initialized");return n.initialize({options:t})}(e,{popupRedirectResolver:Fr,persistence:[tr,zn]})}var Wr;Ur.currentPopupAction=null,Wr="Browser",ft(new Ke("auth-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Et(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Et(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Wr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yn(Wr)},s=new _n(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ft(new Ke("auth-internal",(e=>(e=>new Dn(e))(wn(e.getProvider("auth-exp").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),wt("@firebase/auth-exp","0.0.900-exp.6ef484a04",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wr));
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
let Vr="";
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
class Hr{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Oe(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
     */class Br{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
     */const Gr=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Hr(t)}}catch(e){}return new Br},Kr=Gr("localStorage"),Yr=Gr("sessionStorage"),Jr=new st("@firebase/database"),Qr=function(){let e=1;return function(){return e++}}(),Zr=function(e){const t=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var s=i-55296;r++,ye(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(s<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new je;n.update(t);const r=n.digest();return be.encodeByteArray(r)},Xr=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Xr.apply(null,r):t+="object"==typeof r?Ae(r):r,t+=" "}return t};let ei=null,ti=!0;const ni=function(...e){var t,n;if(!0===ti&&(ti=!1,null===ei&&!0===Yr.get("logging_enabled")&&(t=!0,ye(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Jr.logLevel=Ze.VERBOSE,ei=Jr.log.bind(Jr),n&&Yr.set("logging_enabled",!0)):"function"==typeof t?ei=t:(ei=null,Yr.remove("logging_enabled")))),ei){const t=Xr.apply(null,e);ei(t)}},ri=function(e){return function(...t){ni(e,...t)}},ii=function(...e){const t="FIREBASE INTERNAL ERROR: "+Xr(...e);Jr.error(t)},si=function(...e){const t=`FIREBASE FATAL ERROR: ${Xr(...e)}`;throw Jr.error(t),new Error(t)},oi=function(...e){const t="FIREBASE WARNING: "+Xr(...e);Jr.warn(t)},ai=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},li="[MIN_NAME]",ci="[MAX_NAME]",ui=function(e,t){if(e===t)return 0;if(e===li||t===ci)return-1;if(t===li||e===ci)return 1;{const n=yi(e),r=yi(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},hi=function(e,t){return e===t?0:e<t?-1:1},di=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ae(t))},pi=function(e){if("object"!=typeof e||null===e)return Ae(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Ae(t[r]),n+=":",n+=pi(e[t[r]]);return n+="}",n},fi=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function mi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const gi=function(e){ye(!ai(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const vi=new RegExp("^-?(0*)\\d{1,10}$"),yi=function(e){if(vi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},_i=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw oi("Exception was thrown by user callback.",t),e}),Math.floor(0))}},wi=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class bi{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){oi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
     */class xi{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(ni("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',oi(e)}}class ki{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ki.OWNER="owner";
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
const Ci=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ii="websocket",Ti="long_polling";
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
class Si{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kr.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ei(e,t,n){let r;if(ye("string"==typeof t,"typeof type must == string"),ye("object"==typeof n,"typeof params must == object"),t===Ii)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Ti)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return mi(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
     */class $i{constructor(){this.counters_={}}incrementCounter(e,t=1){Le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ke(this.counters_)}}
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
     */const Ni={},Ri={};function qi(e){const t=e.toString();return Ni[t]||(Ni[t]=new $i),Ni[t]}
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
class Pi{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&_i((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
     */const Oi="start";class Ai{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ri(e),this.stats_=qi(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Ei(t,Ti,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Pi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Di(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Oi)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ci.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ai.forceAllow_=!0}static forceDisallow(){Ai.forceDisallow_=!0}static isAvailable(){return!!Ai.forceAllow_||!(Ai.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(r=we(t),be.encodeByteArray(r,!0));var r;const i=fi(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ae(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Di{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qr(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Di.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){ni("frame writing exception"),e.stack&&ni(e.stack),ni(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||ni("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ni("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
     */let Li=null;"undefined"!=typeof MozWebSocket?Li=MozWebSocket:"undefined"!=typeof WebSocket&&(Li=WebSocket);class Mi{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ri(this.connId),this.stats_=qi(t),this.connURL=Mi.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&Ci.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),Ei(e,Ii,i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kr.set("previous_websocket_failure",!0);try{if($e());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Li(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Mi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Li&&!Mi.forceDisallow_}static previouslyFailed(){return Kr.isInMemoryStorage||!0===Kr.get("previous_websocket_failure")}markConnectionHealthy(){Kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Oe(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ye(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=fi(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mi.responsesRequiredToBeHealthy=2,Mi.healthyTimeout=3e4;
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
class Fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ai,Mi]}initTransports_(e){const t=Mi&&Mi.isAvailable();let n=t&&!Mi.previouslyFailed();if(e.webSocketOnly&&(t||oi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Mi];else{const e=this.transports_=[];for(const t of Fi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
     */class zi{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ri("c:"+this.id+":"),this.transportManager_=new Fi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=wi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=di("t",e),n=di("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=di("t",e),n=di("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=di("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ii("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ii("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&oi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),wi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
     */class Ui{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
     */class ji{constructor(e){this.allowedEvents_=e,this.listeners_={},ye(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){ye(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
     */class Wi extends ji{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Se()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Wi}getInitialEvent(e){return ye("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
     */class Vi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Hi(){return new Vi("")}function Bi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Gi(e){return e.pieces_.length-e.pieceNum_}function Ki(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Vi(e.pieces_,t)}function Yi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ji(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Qi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Vi(t,0)}function Zi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Vi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Vi(n,0)}function Xi(e){return e.pieceNum_>=e.pieces_.length}function es(e,t){const n=Bi(e),r=Bi(t);if(null===n)return t;if(n===r)return es(Ki(e),Ki(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ts(e,t){const n=Ji(e,0),r=Ji(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=ui(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function ns(e,t){if(Gi(e)!==Gi(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function rs(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Gi(e)>Gi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class is{constructor(e,t){this.errorPrefix_=t,this.parts_=Ji(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Be(this.parts_[e]);ss(this)}}function ss(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+os(e))}function os(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
     */class as extends ji{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new as}getInitialEvent(e){return ye("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
     */const ls=1e3;class cs extends Ui{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=cs.nextPersistentConnectionId_++,this.log_=ri("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ls,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$e())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");as.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Wi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Ae(i)),ye(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Ie,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),ye(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ye(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;cs.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Le(e,"w")){const n=Me(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();oi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=De(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=De(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),ye(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ii("Unrecognized action received from server: "+Ae(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ye(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ls),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+cs.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){ye(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?ni("getToken() completed but was canceled"):(ni("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new zi(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{oi(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&oi(e),a())}}}interrupt(e){ni("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ni("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fe(this.interruptReasons_)&&(this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>pi(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Vi(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){ni("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ni("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Vr.replace(/\./g,"-")]=1,Se()?e["framework.cordova"]=1:Ee()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wi.getInstance().currentlyOnline();return Fe(this.interruptReasons_)&&e}}cs.nextPersistentConnectionId_=0,cs.nextConnectionId_=0;
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
class us{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new us(e,t)}}
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
     */class hs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new us(li,e),r=new us(li,t);return 0!==this.compare(n,r)}minPost(){return us.MIN}}
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
     */let ds;class ps extends hs{static get __EMPTY_NODE(){return ds}static set __EMPTY_NODE(e){ds=e}compare(e,t){return ui(e.name,t.name)}isDefinedOn(e){throw _e("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return us.MIN}maxPost(){return new us(ci,ds)}makePost(e,t){return ye("string"==typeof e,"KeyIndex indexValue must always be a string."),new us(e,ds)}toString(){return".key"}}const fs=new ps;
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
     */class ms{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class gs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:gs.RED,this.left=null!=r?r:vs.EMPTY_NODE,this.right=null!=i?i:vs.EMPTY_NODE}copy(e,t,n,r,i){return new gs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return vs.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return vs.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}gs.RED=!0,gs.BLACK=!1;class vs{constructor(e,t=vs.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vs(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,gs.BLACK,null,null))}remove(e){return new vs(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ms(this.root_,null,this.comparator_,!0,e)}}
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
function ys(e,t){return ui(e.name,t.name)}function _s(e,t){return ui(e,t)}
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
     */let ws;vs.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new gs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const bs=function(e){return"number"==typeof e?"number:"+gi(e):"string:"+e},xs=function(e){if(e.isLeafNode()){const t=e.val();ye("string"==typeof t||"number"==typeof t||"object"==typeof t&&Le(t,".sv"),"Priority must be a string or number.")}else ye(e===ws||e.isEmpty(),"priority of unexpected type.");ye(e===ws||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let ks,Cs,Is;class Ts{constructor(e,t=Ts.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ye(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),xs(this.priorityNode_)}static set __childrenNodeConstructor(e){ks=e}static get __childrenNodeConstructor(){return ks}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ts(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ts.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Xi(e)?this:".priority"===Bi(e)?this.priorityNode_:Ts.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ts.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Bi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(ye(".priority"!==n||1===Gi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ts.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ki(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?gi(this.value_):this.value_,this.lazyHash_=Zr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ts.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ts.__childrenNodeConstructor?-1:(ye(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Ts.VALUE_TYPE_ORDER.indexOf(t),i=Ts.VALUE_TYPE_ORDER.indexOf(n);return ye(r>=0,"Unknown leaf type: "+t),ye(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ts.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ss=new class extends hs{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?ui(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return us.MIN}maxPost(){return new us(ci,new Ts("[PRIORITY-POST]",Is))}makePost(e,t){const n=Cs(e);return new us(t,new Ts("[PRIORITY-POST]",n))}toString(){return".priority"}},Es=Math.log(2);
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
     */class $s{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Es,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new gs(a,o.node,gs.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new gs(a,o.node,gs.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new gs(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,gs.BLACK):(a(r,gs.BLACK),a(r,gs.RED))}return s}(new $s(e.length));return new vs(r||t,s)};
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
     */let Rs;const qs={};class Ps{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ye(qs&&Ss,"ChildrenNode.ts has not been loaded"),Rs=Rs||new Ps({".priority":qs},{".priority":Ss}),Rs}get(e){const t=Me(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vs?t:null}hasIndex(e){return Le(this.indexSet_,e.toString())}addIndex(e,t){ye(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(us.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Ns(n,e.getCompare()):qs;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new Ps(c,l)}addToIndexes(e,t){const n=ze(this.indexes_,((n,r)=>{const i=Me(this.indexSet_,r);if(ye(i,"Missing index implementation for "+r),n===qs){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(us.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Ns(n,i.getCompare())}return qs}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new us(e.name,r))),i.insert(e,e.node)}}));return new Ps(n,this.indexSet_)}removeFromIndexes(e,t){const n=ze(this.indexes_,(n=>{if(n===qs)return n;{const r=t.get(e.name);return r?n.remove(new us(e.name,r)):n}}));return new Ps(n,this.indexSet_)}}
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
     */let Os;class As{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&xs(this.priorityNode_),this.children_.isEmpty()&&ye(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Os||(Os=new As(new vs(_s),null,Ps.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Os}updatePriority(e){return this.children_.isEmpty()?this:new As(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Os:t}}getChild(e){const t=Bi(e);return null===t?this:this.getImmediateChild(t).getChild(Ki(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(ye(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new us(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Os:this.priorityNode_;return new As(r,s,i)}}updateChild(e,t){const n=Bi(e);if(null===n)return t;{ye(".priority"!==Bi(e)||1===Gi(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Ki(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Ss,((s,o)=>{t[s]=o.val(e),n++,i&&As.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+bs(this.getPriority().val())+":"),this.forEachChild(Ss,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Zr(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new us(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new us(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new us(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,us.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,us.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new As(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ss),n=t.getIterator(Ss);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}As.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ds=new class extends As{constructor(){super(new vs(_s),As.EMPTY_NODE,Ps.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return As.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(us,{MIN:{value:new us(li,As.EMPTY_NODE)},MAX:{value:new us(ci,Ds)}}),ps.__EMPTY_NODE=As.EMPTY_NODE,Ts.__childrenNodeConstructor=As,ws=Ds,function(e){Is=e}(Ds);function Ls(e,t=null){if(null===e)return As.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),ye(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ts(e,Ls(t))}if(e instanceof Array){let n=As.EMPTY_NODE;return mi(e,((t,r)=>{if(Le(e,t)&&"."!==t.substring(0,1)){const e=Ls(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Ls(t))}{const n=[];let r=!1;if(mi(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Ls(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new us(e,i)))}})),0===n.length)return As.EMPTY_NODE;const i=Ns(n,ys,(e=>e.name),_s);if(r){const e=Ns(n,Ss.getCompare());return new As(i,Ls(t),new Ps({".priority":e},{".priority":Ss}))}return new As(i,Ls(t),Ps.Default)}}!function(e){Cs=e}(Ls);
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
class Ms extends hs{constructor(e){super(),this.indexPath_=e,ye(!Xi(e)&&".priority"!==Bi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?ui(e.name,t.name):i}makePost(e,t){const n=Ls(e),r=As.EMPTY_NODE.updateChild(this.indexPath_,n);return new us(t,r)}maxPost(){const e=As.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new us(ci,e)}toString(){return Ji(this.indexPath_,0).join("/")}}
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
     */const Fs=new class extends hs{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?ui(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return us.MIN}maxPost(){return us.MAX}makePost(e,t){const n=Ls(e);return new us(t,n)}toString(){return".value"}},zs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Us=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=zs.charAt(n%64),n=Math.floor(n/64);ye(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=zs.charAt(t[i]);return ye(20===o.length,"nextPushId: Length should be 20."),o}}();
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
function js(e){return{type:"value",snapshotNode:e}}function Ws(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Vs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Hs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Bs{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){ye(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Vs(t,o)):ye(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Ws(t,n)):s.trackChildChange(Hs(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ss,((e,r)=>{t.hasChild(e)||n.trackChildChange(Vs(e,r))})),t.isLeafNode()||t.forEachChild(Ss,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Hs(t,r,i))}else n.trackChildChange(Ws(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?As.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
     */class Gs{constructor(e){this.indexedFilter_=new Bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gs.getStartPost_(e),this.endPost_=Gs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new us(t,n))||(n=As.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=As.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(As.EMPTY_NODE);const i=this;return t.forEachChild(Ss,((e,t)=>{i.matches(new us(e,t))||(r=r.updateImmediateChild(e,As.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
     */class Ks{constructor(e){this.rangedFilter_=new Gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new us(t,n))||(n=As.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=As.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=As.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(As.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,As.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;ye(o.numChildren()===this.limit_,"");const a=new us(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Hs(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Vs(t,e));const n=o.updateImmediateChild(t,As.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Ws(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Vs(l.name,l.node)),i.trackChildChange(Ws(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,As.EMPTY_NODE)):e}}
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
     */class Ys{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ss}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return ye(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ye(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return ye(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ye(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return ye(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ss}copy(){const e=new Ys;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Js(e){const t={};if(e.isDefault())return t;let n;return e.index_===Ss?n="$priority":e.index_===Fs?n="$value":e.index_===fs?n="$key":(ye(e.index_ instanceof Ms,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ae(n),e.startSet_&&(t.startAt=Ae(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Ae(e.indexStartName_))),e.endSet_&&(t.endAt=Ae(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Ae(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Qs(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ss&&(t.i=e.index_.toString()),t}
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
     */class Zs extends Ui{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=ri("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(ye(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Zs.getListenId_(e,n),o={};this.listens_[s]=o;const a=Js(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Me(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Zs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Js(e._queryParams),n=e._path.toString(),r=new Ie;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ue(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Oe(o.responseText)}catch(e){oi("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&oi("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
     */class Xs{constructor(){this.rootNode_=As.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
     */function eo(){return{value:null,children:new Map}}function to(e,t,n){if(Xi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Bi(t);e.children.has(r)||e.children.set(r,eo());to(e.children.get(r),t=Ki(t),n)}}function no(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
     */(e,((e,r)=>{no(r,new Vi(t.toString()+"/"+e),n)}))}class ro{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
     */class io{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ro(e);const n=1e4+2e4*Math.random();wi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;mi(e,((e,r)=>{r>0&&Le(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),wi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
     */var so;function oo(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(so||(so={}));class ao{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=so.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Xi(this.path)){if(null!=this.affectedTree.value)return ye(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Vi(e));return new ao(Hi(),t,this.revert)}}return ye(Bi(this.path)===e,"operationForChild called for unrelated child."),new ao(Ki(this.path),this.affectedTree,this.revert)}}
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
     */class lo{constructor(e,t){this.source=e,this.path=t,this.type=so.LISTEN_COMPLETE}operationForChild(e){return Xi(this.path)?new lo(this.source,Hi()):new lo(this.source,Ki(this.path))}}
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
     */class co{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=so.OVERWRITE}operationForChild(e){return Xi(this.path)?new co(this.source,Hi(),this.snap.getImmediateChild(e)):new co(this.source,Ki(this.path),this.snap)}}
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
     */class uo{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=so.MERGE}operationForChild(e){if(Xi(this.path)){const t=this.children.subtree(new Vi(e));return t.isEmpty()?null:t.value?new co(this.source,Hi(),t.value):new uo(this.source,Hi(),t)}return ye(Bi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new uo(this.source,Ki(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
     */class ho{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Xi(e))return this.isFullyInitialized()&&!this.filtered_;const t=Bi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
     */class po{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fo(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw _e("Should only compare child_ events.");const r=new us(t.childName,t.snapshotNode),i=new us(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
     */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function mo(e,t){return{eventCache:e,serverCache:t}}function go(e,t,n,r){return mo(new ho(t,n,r),e.serverCache)}function vo(e,t,n,r){return mo(e.eventCache,new ho(t,n,r))}function yo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _o(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
     */let wo;class bo{constructor(e,t=(()=>(wo||(wo=new vs(hi)),wo))()){this.value=e,this.children=t}static fromObject(e){let t=new bo(null);return mi(e,((e,n)=>{t=t.set(new Vi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Hi(),value:this.value};if(Xi(e))return null;{const n=Bi(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Ki(e),t);if(null!=i){return{path:Zi(new Vi(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Xi(e))return this;{const t=Bi(e),n=this.children.get(t);return null!==n?n.subtree(Ki(e)):new bo(null)}}set(e,t){if(Xi(e))return new bo(t,this.children);{const n=Bi(e),r=(this.children.get(n)||new bo(null)).set(Ki(e),t),i=this.children.insert(n,r);return new bo(this.value,i)}}remove(e){if(Xi(e))return this.children.isEmpty()?new bo(null):new bo(null,this.children);{const t=Bi(e),n=this.children.get(t);if(n){const r=n.remove(Ki(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new bo(null):new bo(this.value,i)}return this}}get(e){if(Xi(e))return this.value;{const t=Bi(e),n=this.children.get(t);return n?n.get(Ki(e)):null}}setTree(e,t){if(Xi(e))return t;{const n=Bi(e),r=(this.children.get(n)||new bo(null)).setTree(Ki(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new bo(this.value,i)}}fold(e){return this.fold_(Hi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Zi(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Hi(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Xi(e))return null;{const r=Bi(e),i=this.children.get(r);return i?i.findOnPath_(Ki(e),Zi(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Hi(),t)}foreachOnPath_(e,t,n){if(Xi(e))return this;{this.value&&n(t,this.value);const r=Bi(e),i=this.children.get(r);return i?i.foreachOnPath_(Ki(e),Zi(t,r),n):new bo(null)}}foreach(e){this.foreach_(Hi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Zi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
     */class xo{constructor(e){this.writeTree_=e}static empty(){return new xo(new bo(null))}}function ko(e,t,n){if(Xi(t))return new xo(new bo(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=es(i,t);return s=s.updateChild(o,n),new xo(e.writeTree_.set(i,s))}{const r=new bo(n),i=e.writeTree_.setTree(t,r);return new xo(i)}}}function Co(e,t,n){let r=e;return mi(n,((e,n)=>{r=ko(r,Zi(t,e),n)})),r}function Io(e,t){if(Xi(t))return xo.empty();{const n=e.writeTree_.setTree(t,new bo(null));return new xo(n)}}function To(e,t){return null!=So(e,t)}function So(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(es(n.path,t)):null}function Eo(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ss,((e,n)=>{t.push(new us(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new us(e,n.value))})),t}function $o(e,t){if(Xi(t))return e;{const n=So(e,t);return new xo(null!=n?new bo(n):e.writeTree_.subtree(t))}}function No(e){return e.writeTree_.isEmpty()}function Ro(e,t){return qo(Hi(),e.writeTree_,t)}function qo(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(ye(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=qo(Zi(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Zi(e,".priority"),r)),n}}
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
     */function Po(e,t){return Bo(t,e)}function Oo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));ye(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ao(t,r.path)?i=!1:rs(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=Lo(e.allWrites,Do,Hi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Io(e.visibleWrites,r.path);else{mi(r.children,(t=>{e.visibleWrites=Io(e.visibleWrites,Zi(r.path,t))}))}return!0}return!1}function Ao(e,t){if(e.snap)return rs(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&rs(Zi(e.path,n),t))return!0;return!1}function Do(e){return e.visible}function Lo(e,t,n){let r=xo.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)rs(n,e)?(t=es(n,e),r=ko(r,t,s.snap)):rs(e,n)&&(t=es(e,n),r=ko(r,Hi(),s.snap.getChild(t)));else{if(!s.children)throw _e("WriteRecord should have .snap or .children");if(rs(n,e))t=es(n,e),r=Co(r,t,s.children);else if(rs(e,n))if(t=es(e,n),Xi(t))r=Co(r,Hi(),s.children);else{const e=Me(s.children,Bi(t));if(e){const n=e.getChild(Ki(t));r=ko(r,Hi(),n)}}}}}return r}function Mo(e,t,n,r,i){if(r||i){const s=$o(e.visibleWrites,t);if(!i&&No(s))return n;if(i||null!=n||To(s,Hi())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(rs(e.path,t)||rs(t,e.path))};return Ro(Lo(e.allWrites,s,t),n||As.EMPTY_NODE)}return null}{const r=So(e.visibleWrites,t);if(null!=r)return r;{const r=$o(e.visibleWrites,t);if(No(r))return n;if(null!=n||To(r,Hi())){return Ro(r,n||As.EMPTY_NODE)}return null}}}function Fo(e,t,n,r){return Mo(e.writeTree,e.treePath,t,n,r)}function zo(e,t){return function(e,t,n){let r=As.EMPTY_NODE;const i=So(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ss,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=$o(e.visibleWrites,t);return n.forEachChild(Ss,((e,t)=>{const n=Ro($o(i,new Vi(e)),t);r=r.updateImmediateChild(e,n)})),Eo(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Eo($o(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Uo(e,t,n,r){return function(e,t,n,r,i){ye(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Zi(t,n);if(To(e.visibleWrites,s))return null;{const t=$o(e.visibleWrites,s);return No(t)?i.getChild(n):Ro(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function jo(e,t){return function(e,t){return So(e.visibleWrites,t)}(e.writeTree,Zi(e.treePath,t))}function Wo(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=$o(e.visibleWrites,t),c=So(l,Hi());if(null!=c)a=c;else{if(null==n)return[];a=Ro(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Vo(e,t,n){return function(e,t,n,r){const i=Zi(t,n),s=So(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Ro($o(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ho(e,t){return Bo(Zi(e.treePath,t),e.writeTree)}function Bo(e,t){return{treePath:e,writeTree:t}}
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
     */class Go{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;ye("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),ye(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Hs(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Vs(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Ws(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw _e("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Hs(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
     */const Ko=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Yo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ho(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vo(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:_o(this.viewCache_),i=Wo(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
     */function Jo(e,t,n,r,i){const s=new Go;let o,a;if(n.type===so.OVERWRITE){const l=n;l.source.fromUser?o=Xo(e,t,l.path,l.snap,r,i,s):(ye(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Xi(l.path),o=Zo(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===so.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Zi(n,r);ea(t,Bi(c))&&(a=Xo(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Zi(n,r);ea(t,Bi(c))||(a=Xo(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(ye(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=na(e,t,l.path,l.children,r,i,a,s))}else if(n.type===so.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=jo(r,n))return t;{const a=new Yo(r,t,i),l=t.eventCache.getNode();let c;if(Xi(n)||".priority"===Bi(n)){let n;if(t.serverCache.isFullyInitialized())n=Fo(r,_o(t));else{const e=t.serverCache.getNode();ye(e instanceof As,"serverChildren would be complete if leaf node"),n=zo(r,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const i=Bi(n);let u=Vo(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Ki(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,As.EMPTY_NODE,Ki(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Fo(r,_o(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=jo(r,Hi()),go(t,c,o,e.filter.filtersNodes())}}
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
     */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=jo(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(Xi(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Zo(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Xi(n)){let r=new bo(null);return l.getNode().forEachChild(fs,((e,t)=>{r=r.set(new Vi(e),t)})),na(e,t,n,r,i,s,a,o)}return t}{let c=new bo(null);return r.foreach(((e,t)=>{const r=Zi(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),na(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==so.LISTEN_COMPLETE)throw _e("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=vo(t,s.getNode(),s.isFullyInitialized()||Xi(n),s.isFiltered());return Qo(e,o,n,r,Ko,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yo(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(js(yo(t)))}}(t,o,l),{viewCache:o,changes:l}}function Qo(e,t,n,r,i,s){const o=t.eventCache;if(null!=jo(r,n))return t;{let a,l;if(Xi(n))if(ye(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=_o(t),i=zo(r,n instanceof As?n:As.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=Fo(r,_o(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Bi(n);if(".priority"===c){ye(1===Gi(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=Uo(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=Ki(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Uo(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Vo(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return go(t,a,o.isFullyInitialized()||Xi(n),e.filter.filtersNodes())}}function Zo(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Xi(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Bi(n);if(!l.isCompleteForPath(n)&&Gi(n)>1)return t;const i=Ki(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Ko,null)}const h=vo(t,c,l.isFullyInitialized()||Xi(n),u.filtersNodes());return Qo(e,h,n,i,new Yo(i,h,s),a)}function Xo(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Yo(i,t,s);if(Xi(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=go(t,c,!0,e.filter.filtersNodes());else{const i=Bi(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=go(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Ki(n),c=a.getNode().getImmediateChild(i);let h;if(Xi(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Yi(s)&&e.getChild(Qi(s)).isEmpty()?e:e.updateChild(s,r):As.EMPTY_NODE}if(c.equals(h))l=t;else{l=go(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function ea(e,t){return e.eventCache.isCompleteForChild(t)}function ta(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function na(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Xi(n)?r:new bo(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=ta(0,t.serverCache.getNode().getImmediateChild(n),r);c=Zo(e,c,new Vi(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=ta(0,t.serverCache.getNode().getImmediateChild(n),r);c=Zo(e,c,new Vi(n),l,i,s,o,a)}})),c}class ra{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Bs(n.getIndex()),i=(s=n).loadsAllData()?new Bs(s.getIndex()):s.hasLimit()?new Ks(s):new Gs(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(As.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(As.EMPTY_NODE,a.getNode(),null),u=new ho(l,o.isFullyInitialized(),r.filtersNodes()),h=new ho(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=mo(h,u),this.eventGenerator_=new po(this.query_)}get query(){return this.query_}}function ia(e,t){const n=_o(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Xi(t)&&!n.getImmediateChild(Bi(t)).isEmpty())?n.getChild(t):null}function sa(e){return 0===e.eventRegistrations_.length}function oa(e,t,n){const r=[];if(n){ye(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function aa(e,t,n,r){t.type===so.MERGE&&null!==t.source.queryId&&(ye(_o(e.viewCache_),"We should always have a full cache before handling merges"),ye(yo(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Jo(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,ye(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),ye(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),ye(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,la(e,s.changes,s.viewCache.eventCache.getNode(),null)}function la(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),fo(e,i,"child_removed",t,r,n),fo(e,i,"child_added",t,r,n),fo(e,i,"child_moved",s,r,n),fo(e,i,"child_changed",t,r,n),fo(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
     */let ca,ua;class ha{constructor(){this.views=new Map}}function da(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return ye(null!=s,"SyncTree gave us an op for an invalid query."),aa(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(aa(s,t,n,r));return i}}function pa(e,t,n,r,i,s){const o=function(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Fo(n,i?r:null),s=!1;e?s=!0:r instanceof As?(e=zo(n,r),s=!1):(e=As.EMPTY_NODE,s=!1);const o=mo(new ho(e,s,!1),new ho(r,i,!1));return new ra(t,o)}return o}(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Ss,((e,t)=>{r.push(Ws(e,t))}));return n.isFullyInitialized()&&r.push(js(n.getNode())),la(e,r,n.getNode(),t)}(o,n)}function fa(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=_a(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(oa(i,n,r)),sa(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(oa(t,n,r)),sa(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!_a(e)&&s.push(new(ye(ca,"Reference.ts has not been loaded"),ca)(t._repo,t._path)),{removed:s,events:o}}function ma(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ga(e,t){let n=null;for(const r of e.views.values())n=n||ia(r,t);return n}function va(e,t){if(t._queryParams.loadsAllData())return wa(e);{const n=t._queryIdentifier;return e.views.get(n)}}function ya(e,t){return null!=va(e,t)}function _a(e){return null!=wa(e)}function wa(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
     */let ba=1;class xa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new bo(null),this.pendingWriteTree_={visibleWrites:xo.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ka(e,t,n,r,i){return function(e,t,n,r,i){ye(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ko(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Na(e,new co({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ca(e,t,n,r){!function(e,t,n,r){ye(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Co(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=bo.fromObject(n);return Na(e,new uo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function Ia(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Oo(e.pendingWriteTree_,t)){let t=new bo(null);return null!=r.snap?t=t.set(Hi(),!0):mi(r.children,(e=>{t=t.set(new Vi(e),!0)})),Na(e,new ao(r.path,t,n))}return[]}function Ta(e,t,n){return Na(e,new co({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Sa(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||ya(s,t))){const a=fa(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>_a(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&_a(t)){return[wa(t)]}{let e=[];return t&&(e=ma(t)),mi(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=Pa(e,r);e.listenProvider_.startListening(Fa(i),Oa(e,i),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(Fa(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Aa(t));e.listenProvider_.stopListening(Fa(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Aa(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function Ea(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=es(e,r);i=i||ga(t,n),s=s||_a(t)}));let o,a=e.syncPointTree_.get(r);if(a?(s=s||_a(a),i=i||ga(a,Hi())):(a=new ha,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)o=!0;else{o=!1,i=As.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=ga(t,Hi());n&&(i=i.updateImmediateChild(e,n))}))}const l=ya(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=Aa(t);ye(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ba++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let c=pa(a,t,n,Po(e.pendingWriteTree_,r),i,o);if(!l&&!s){const n=va(a,t);c=c.concat(function(e,t,n){const r=t._path,i=Oa(e,t),s=Pa(e,n),o=e.listenProvider_.startListening(Fa(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)ye(!_a(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Xi(e)&&t&&_a(t))return[wa(t).query];{let e=[];return t&&(e=e.concat(ma(t).map((e=>e.query)))),mi(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Fa(r),Oa(e,r))}}return o}
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
     */(e,t,n))}return c}function $a(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=ga(n,es(e,t));if(r)return r}));return Mo(r,t,i,n,!0)}function Na(e,t){return Ra(t,e.syncPointTree_,null,Po(e.pendingWriteTree_,Hi()))}function Ra(e,t,n,r){if(Xi(e.path))return qa(e,t,n,r);{const i=t.get(Hi());null==n&&null!=i&&(n=ga(i,Hi()));let s=[];const o=Bi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Ho(r,o);s=s.concat(Ra(a,l,e,t))}return i&&(s=s.concat(da(i,e,r,n))),s}}function qa(e,t,n,r){const i=t.get(Hi());null==n&&null!=i&&(n=ga(i,Hi()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Ho(r,t),l=e.operationForChild(t);l&&(s=s.concat(qa(l,i,o,a)))})),i&&(s=s.concat(da(i,e,r,n))),s}function Pa(e,t){const n=t.query,r=Oa(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||As.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Da(e,n);if(r){const n=La(r),i=n.path,s=n.queryId,o=es(i,t);return Ma(e,i,new lo(oo(s),o))}return[]}(e,n._path,r):function(e,t){return Na(e,new lo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Sa(e,n,null,r)}}}}function Oa(e,t){const n=Aa(t);return e.queryToTagMap.get(n)}function Aa(e){return e._path.toString()+"$"+e._queryIdentifier}function Da(e,t){return e.tagToQueryMap.get(t)}function La(e){const t=e.indexOf("$");return ye(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Vi(e.substr(0,t))}}function Ma(e,t,n){const r=e.syncPointTree_.get(t);ye(r,"Missing sync point for query tag that we're tracking");return da(r,n,Po(e.pendingWriteTree_,t),null)}function Fa(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ye(ua,"Reference.ts has not been loaded"),ua)(e._repo,e._path):e}class za{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new za(t)}node(){return this.node_}}class Ua{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Zi(this.path_,e);return new Ua(this.syncTree_,t)}node(){return $a(this.syncTree_,this.path_)}}const ja=function(e,t,n){return e&&"object"==typeof e?(ye(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Wa(e[".sv"],t,n):"object"==typeof e[".sv"]?Va(e[".sv"],t):void ye(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Wa=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:ye(!1,"Unexpected server value: "+e)}},Va=function(e,t,n){e.hasOwnProperty("increment")||ye(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&ye(!1,"Unexpected increment value: "+r);const i=t.node();if(ye(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Ha=function(e,t,n,r){return Ga(t,new Ua(n,e),r)},Ba=function(e,t,n){return Ga(e,new za(t),n)};function Ga(e,t,n){const r=e.getPriority().val(),i=ja(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=ja(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Ts(s,Ls(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Ts(i))),r.forEachChild(Ss,((e,r)=>{const i=Ga(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
     */class Ka{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ya(e,t){let n=t instanceof Vi?t:new Vi(t),r=e,i=Bi(n);for(;null!==i;){const e=Me(r.node.children,i)||{children:{},childCount:0};r=new Ka(i,r,e),n=Ki(n),i=Bi(n)}return r}function Ja(e){return e.node.value}function Qa(e,t){e.node.value=t,nl(e)}function Za(e){return e.node.childCount>0}function Xa(e,t){mi(e.node.children,((n,r)=>{t(new Ka(n,e,r))}))}function el(e,t,n,r){n&&!r&&t(e),Xa(e,(e=>{el(e,t,!0,r)})),n&&r&&t(e)}function tl(e){return new Vi(null===e.parent?e.name:tl(e.parent)+"/"+e.name)}function nl(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Ja(e)&&!Za(e)}(n),i=Le(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,nl(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,nl(e))}
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
     */(e.parent,e.name,e)}const rl=/[\[\].#$\/\u0000-\u001F\u007F]/,il=/[\[\].#$\u0000-\u001F\u007F]/,sl=10485760,ol=function(e){return"string"==typeof e&&0!==e.length&&!rl.test(e)},al=function(e){return"string"==typeof e&&0!==e.length&&!il.test(e)},ll=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!ai(e)||e&&"object"==typeof e&&Le(e,".sv")},cl=function(e,t,n,r){r&&void 0===t||ul(He(e,"value"),t,n)},ul=function(e,t,n){const r=n instanceof Vi?new is(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+os(r));if("function"==typeof t)throw new Error(e+"contains a function "+os(r)+" with contents = "+t.toString());if(ai(t))throw new Error(e+"contains "+t.toString()+" "+os(r));if("string"==typeof t&&t.length>sl/3&&Be(t)>sl)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+os(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(mi(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!ol(t)))throw new Error(e+" contains an invalid key ("+t+") "+os(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Be(t),ss(e)}(r,t),ul(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Be(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+os(r)+" in addition to actual children.")}},hl=function(e,t,n,r){if(r&&void 0===t)return;const i=He(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];mi(t,((e,t)=>{const r=new Vi(e);if(ul(i,t,Zi(n,r)),".priority"===Yi(r)&&!ll(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=Ji(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!ol(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ts);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&rs(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},dl=function(e,t,n,r){if(!(r&&void 0===n||al(n)))throw new Error(He(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},pl=function(e,t){if(".info"===Bi(t))throw new Error(e+" failed = Can't modify data under /.info/")},fl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ol(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),al(e)}(n))throw new Error(He(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class ml{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gl(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||ns(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function vl(e,t,n){gl(e,n),_l(e,(e=>ns(e,t)))}function yl(e,t,n){gl(e,n),_l(e,(e=>rs(e,t)||rs(t,e)))}function _l(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(wl(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function wl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();ei&&ni("event: "+n.toString()),_i(r)}}}
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
     */class bl{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ml,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=eo(),this.transactionQueueTree_=new Ka,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xl(e,t,n){if(e.stats_=qi(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Zs(e.repoInfo_,((t,n,r,i)=>{Il(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Tl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new cs(e.repoInfo_,t,((t,n,r,i)=>{Il(e,t,n,r,i)}),(t=>{Tl(e,t)}),(t=>{!function(e,t){mi(t,((t,n)=>{Sl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ri[n]||(Ri[n]=t()),Ri[n]}(e.repoInfo_,(()=>new io(e.stats_,e.server_))),e.infoData_=new Xs,e.infoSyncTree_=new xa({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ta(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Sl(e,"connected",!1),e.serverSyncTree_=new xa({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);yl(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function kl(e){const t=e.infoData_.getNode(new Vi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Cl(e){return(t=(t={timestamp:kl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Il(e,t,n,r,i){e.dataUpdateCount++;const s=new Vi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=ze(n,(e=>Ls(e)));o=function(e,t,n,r){const i=Da(e,r);if(i){const r=La(i),s=r.path,o=r.queryId,a=es(s,t),l=bo.fromObject(n);return Ma(e,s,new uo(oo(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Ls(n);o=function(e,t,n,r){const i=Da(e,r);if(null!=i){const r=La(i),s=r.path,o=r.queryId,a=es(s,t);return Ma(e,s,new co(oo(o),a,n))}return[]}(e.serverSyncTree_,s,t,i)}else if(r){const t=ze(n,(e=>Ls(e)));o=function(e,t,n){const r=bo.fromObject(n);return Na(e,new uo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Ls(n);o=Ta(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Ol(e,s)),yl(e.eventQueue_,a,o)}function Tl(e,t){Sl(e,"connected",t),!1===t&&function(e){Nl(e,"onDisconnectEvents");const t=Cl(e),n=eo();no(e.onDisconnect_,Hi(),((r,i)=>{const s=Ha(r,i,e.serverSyncTree_,t);to(n,r,s)}));let r=[];no(n,Hi(),((t,n)=>{r=r.concat(Ta(e.serverSyncTree_,t,n));const i=Fl(e,t);Ol(e,i)})),e.onDisconnect_=eo(),yl(e.eventQueue_,Hi(),r)}(e)}function Sl(e,t,n){const r=new Vi("/.info/"+t),i=Ls(n);e.infoData_.updateSnapshot(r,i);const s=Ta(e.infoSyncTree_,r,i);yl(e.eventQueue_,r,s)}function El(e){return e.nextWriteId_++}function $l(e,t,n){let r;r=".info"===Bi(t._path)?Sa(e.infoSyncTree_,t,n):Sa(e.serverSyncTree_,t,n),vl(e.eventQueue_,t._path,r)}function Nl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ni(n,...t)}function Rl(e,t,n,r){t&&_i((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function ql(e,t,n){return $a(e.serverSyncTree_,t,n)||As.EMPTY_NODE}function Pl(e,t=e.transactionQueueTree_){if(t||Ml(e,t),Ja(t)){const n=Dl(e,t);ye(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=ql(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];ye(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=es(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{Nl(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ia(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ml(e,Ya(e.transactionQueueTree_,t)),Pl(e,e.transactionQueueTree_),yl(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)_i(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{oi("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Ol(e,t)}}),o)}(e,tl(t),n)}else Za(t)&&Xa(t,(t=>{Pl(e,t)}))}function Ol(e,t){const n=Al(e,t),r=tl(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=es(n,l.path);let u,h=!1;if(ye(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(Ia(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat(Ia(e.serverSyncTree_,l.currentWriteId,!0));else{const n=ql(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){ul("transaction failed: Data returned ",r,l.path);let t=Ls(r);"object"==typeof r&&null!=r&&Le(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Cl(e),c=Ba(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=El(e),s.splice(s.indexOf(o),1),i=i.concat(ka(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(Ia(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(Ia(e.serverSyncTree_,l.currentWriteId,!0))}yl(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Ml(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)_i(r[e]);Pl(e,e.transactionQueueTree_)}(e,Dl(e,n),r),r}function Al(e,t){let n,r=e.transactionQueueTree_;for(n=Bi(t);null!==n&&void 0===Ja(r);)r=Ya(r,n),n=Bi(t=Ki(t));return r}function Dl(e,t){const n=[];return Ll(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ll(e,t,n){const r=Ja(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Xa(t,(t=>{Ll(e,t,n)}))}function Ml(e,t){const n=Ja(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Qa(t,n.length>0?n:void 0)}Xa(t,(t=>{Ml(e,t)}))}function Fl(e,t){const n=tl(Al(e,t)),r=Ya(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{zl(e,t)})),zl(e,r),el(r,(t=>{zl(e,t)})),n}function zl(e,t){const n=Ja(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(ye(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(ye(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ia(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Qa(t,void 0):n.length=s+1,yl(e.eventQueue_,tl(t),i);for(let e=0;e<r.length;e++)_i(r[e])}}
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
     */const Ul=function(e,t){const n=jl(e),r=n.namespace;"firebase.com"===n.domain&&si(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||si("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&oi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Si(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new Vi(n.pathString)}},jl=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):oi(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Wl{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class Vl{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
     */class Hl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ye(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
     */class Bl{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Xi(this._path)?null:Yi(this._path)}get ref(){return new Gl(this._repo,this._path)}get _queryIdentifier(){const e=Qs(this._queryParams),t=pi(e);return"{}"===t?"default":t}get _queryObject(){return Qs(this._queryParams)}isEqual(e){if(!((e=Ge(e))instanceof Bl))return!1;const t=this._repo===e._repo,n=ns(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Gl extends Bl{constructor(e,t){super(e,t,new Ys,!1)}get parent(){const e=Qi(this._path);return null===e?null:new Gl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Kl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Vi(e),n=Jl(this.ref,e);return new Kl(this._node.getChild(t),n,Ss)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Kl(n,Jl(this.ref,t),Ss))))}hasChild(e){const t=new Vi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Yl(e,t){return(e=Ge(e))._checkNotDeleted("ref"),void 0!==t?Jl(e._root,t):e._root}function Jl(e,t){var n,r,i,s;return null===Bi((e=Ge(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),dl(n,r,i,s)):dl("child","path",t,!1),new Gl(e._repo,Zi(e._path,t))}function Ql(e,t){e=Ge(e),pl("set",e._path),cl("set",t,e._path,!1);const n=new Ie;return function(e,t,n,r,i){Nl(e,"set",{path:t.toString(),value:n,priority:r});const s=Cl(e),o=Ls(n,r),a=$a(e.serverSyncTree_,t),l=Ba(o,a,s),c=El(e),u=ka(e.serverSyncTree_,t,l,c,!0);gl(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||oi("set at "+t+" failed: "+n);const o=Ia(e.serverSyncTree_,c,!s);yl(e.eventQueue_,t,o),Rl(0,i,n,r)}));const h=Fl(e,t);Ol(e,h),yl(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Zl(e,t){hl("update",t,e._path,!1);const n=new Ie;return function(e,t,n,r){Nl(e,"update",{path:t.toString(),value:n});let i=!0;const s=Cl(e),o={};if(mi(n,((n,r)=>{i=!1,o[n]=Ha(Zi(t,n),Ls(r),e.serverSyncTree_,s)})),i)ni("update() called with empty data.  Don't do anything."),Rl(0,r,"ok",void 0);else{const i=El(e),s=Ca(e.serverSyncTree_,t,o,i);gl(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||oi("update at "+t+" failed: "+n);const a=Ia(e.serverSyncTree_,i,!o),l=a.length>0?Ol(e,t):t;yl(e.eventQueue_,l,a),Rl(0,r,n,s)})),mi(n,(n=>{const r=Fl(e,Zi(t,n));Ol(e,r)})),yl(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Xl{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Wl("value",this,new Kl(e.snapshotNode,new Gl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vl(this,e,t):null}matches(e){return e instanceof Xl&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ec{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vl(this,e,t):null}createEvent(e,t){ye(null!=e.childName,"Child events should have a childName.");const n=Jl(new Gl(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Wl(e.type,this,new Kl(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ec&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function tc(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{$l(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Hl(n,s||void 0),a="value"===t?new Xl(o):new ec(t,o);return function(e,t,n){let r;r=".info"===Bi(t._path)?Ea(e.infoSyncTree_,t,n):Ea(e.serverSyncTree_,t,n),vl(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>$l(e._repo,e,a)}function nc(e,t,n,r){return tc(e,"value",t,n,r)}class rc extends class{}{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new Vi(this._path);if(Xi(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Ms(t),r=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return function(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===fs){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==li)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==ci)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Ss){if(null!=t&&!ll(t)||null!=n&&!ll(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(ye(e.getIndex()instanceof Ms||e.getIndex()===Fs,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}(r),new Bl(e._repo,e._path,r,!0)}}!function(e){ye(!ca,"__referenceConstructor has already been defined"),ca=e}(Gl),function(e){ye(!ua,"__referenceConstructor has already been defined"),ua=e}(Gl);
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
const ic={};function sc(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||si("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ni("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Ul(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Ul(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new ki(ki.OWNER):new xi(e.name,e.options,t);fl("Invalid Firebase Database URL",l),Xi(l.path)||si("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=ic[t.name];i||(i={},ic[t.name]=i);let s=i[e.toURLString()];s&&si("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new bl(e,false,n,r),i[e.toURLString()]=s,s}(c,e,u,new bi(e.name,n));return new oc(h,e)}class oc{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gl(this._repo,Hi())),this._rootInternal}_delete(){return this._checkNotDeleted("delete"),function(e,t){const n=ic[t];n&&n[e.key]===e||si(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null,Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&si("Cannot call "+e+" on a deleted database.")}}function ac(e=_t(),t){return mt(e,"database-exp").getImmediate({identifier:t})}
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
const lc={".sv":"timestamp"};function cc(e){return{".sv":{increment:e}}}!function(e){!function(e){Vr=e}(yt),ft(new Ke("database-exp",((e,{instanceIdentifier:t})=>sc(e.getProvider("app-exp").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),wt("@firebase/database","0.0.900-exp.6ef484a04",e)}();const uc=[];function hc(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!uc.length;for(const e of i)e[1](),uc.push(e,t);if(e){for(let e=0;e<uc.length;e+=2)uc[e][0](uc[e+1]);uc.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const l=[o,a];return i.add(l),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(l),0===i.size&&(r(),r=null)}}}}const dc=()=>{const e=jr();return{authStore:{subscribe:hc({user:null,loading:!0},(t=>function(e,t,n,r){return Ge(e).onAuthStateChanged(t,n,r)}(e,(async e=>{t(e?{user:e,loading:!1}:{user:null,loading:!1})})))).subscribe},loginWithGoogle:()=>{const t=new En;return async function(e,t,n){const r=wn(e);Et(t instanceof In,e,"argument-error");const i=Cr(r,n);return new Ur(r,"signInViaPopup",t,i).executeNotNull()}(e,t).then((async e=>{const{user:t}=e;if(t&&t.metadata.creationTime==t.metadata.lastSignInTime){const e=Yl(ac(),`users/info/${t.uid}`);await Ql(e,{name:t.displayName.split(" ")[0],photo:t.photoURL}),await An(t,{displayName:t.displayName.split(" ")[0]})}}))},logout:()=>function(e){return Ge(e).signOut()}(e)}};function pc(e){_(e,"svelte-12mqik8",".h-4.svelte-12mqik8{height:1rem}.w-4.svelte-12mqik8{width:1rem}")}function fc(t){let n,r,i,s;return{c(){n=C("svg"),r=C("path"),i=C("polyline"),s=C("line"),$(r,"d","M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"),$(i,"points","16 17 21 12 16 7"),$(s,"x1","21"),$(s,"y1","12"),$(s,"x2","9"),$(s,"y2","12"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width","24"),$(n,"height","24"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","h-4 w-4 svelte-12mqik8")},m(e,t){w(e,n,t),y(n,r),y(n,i),y(n,s)},p:e,i:e,o:e,d(e){e&&b(n)}}}
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
wt("firebase-exp","9.0.0-beta.7","app");class mc extends le{constructor(e){super(),ae(this,e,null,fc,o,{},pc)}}var gc=function(e){var t=e.map((function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})),n={},r={};e.forEach((function(e,i){n[e]=t[i],r[t[i]]=e}));var i=new RegExp("["+(e.join("").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+"]"),"g"),s=new RegExp(t.join("|"),"g");return{encode:function(e){return e.replace(i,(function(e){return n[e]}))},decode:function(e){return e.replace(s,(function(e){return r[e]}))}}},vc=gc(".$[]#/%".split("")),yc=vc.encode;vc.decode;var _c=gc(".$[]#%".split(""));_c.encode,_c.decode;var wc=yc;function bc(e){_(e,"svelte-1pm1lx3",'.svelte-1pm1lx3.svelte-1pm1lx3,.svelte-1pm1lx3.svelte-1pm1lx3::before,.svelte-1pm1lx3.svelte-1pm1lx3::after{box-sizing:border-box}button.svelte-1pm1lx3.svelte-1pm1lx3{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1pm1lx3.svelte-1pm1lx3{text-transform:none}button.svelte-1pm1lx3.svelte-1pm1lx3,[type=\'button\'].svelte-1pm1lx3.svelte-1pm1lx3{-webkit-appearance:button}.svelte-1pm1lx3.svelte-1pm1lx3::-moz-focus-inner{border-style:none;padding:0}.svelte-1pm1lx3.svelte-1pm1lx3:-moz-focusring{outline:1px dotted ButtonText}.svelte-1pm1lx3.svelte-1pm1lx3:-moz-ui-invalid{box-shadow:none}.svelte-1pm1lx3.svelte-1pm1lx3::-webkit-inner-spin-button,.svelte-1pm1lx3.svelte-1pm1lx3::-webkit-outer-spin-button{height:auto}.svelte-1pm1lx3.svelte-1pm1lx3::-webkit-search-decoration{-webkit-appearance:none}.svelte-1pm1lx3.svelte-1pm1lx3::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}button.svelte-1pm1lx3.svelte-1pm1lx3{background-color:transparent;background-image:none}.svelte-1pm1lx3.svelte-1pm1lx3,.svelte-1pm1lx3.svelte-1pm1lx3::before,.svelte-1pm1lx3.svelte-1pm1lx3::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1pm1lx3.svelte-1pm1lx3{cursor:pointer}button.svelte-1pm1lx3.svelte-1pm1lx3{padding:0;line-height:inherit;color:inherit}.svelte-1pm1lx3.svelte-1pm1lx3,.svelte-1pm1lx3.svelte-1pm1lx3::before,.svelte-1pm1lx3.svelte-1pm1lx3::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.form-input.svelte-1pm1lx3.svelte-1pm1lx3,.form-textarea.svelte-1pm1lx3.svelte-1pm1lx3,.form-select.svelte-1pm1lx3.svelte-1pm1lx3,.form-multiselect.svelte-1pm1lx3.svelte-1pm1lx3{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}.form-input.svelte-1pm1lx3.svelte-1pm1lx3:focus,.form-textarea.svelte-1pm1lx3.svelte-1pm1lx3:focus,.form-select.svelte-1pm1lx3.svelte-1pm1lx3:focus,.form-multiselect.svelte-1pm1lx3.svelte-1pm1lx3:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}.form-input.svelte-1pm1lx3.svelte-1pm1lx3::-moz-placeholder,.form-textarea.svelte-1pm1lx3.svelte-1pm1lx3::-moz-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1pm1lx3.svelte-1pm1lx3:-ms-input-placeholder,.form-textarea.svelte-1pm1lx3.svelte-1pm1lx3:-ms-input-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1pm1lx3.svelte-1pm1lx3::placeholder,.form-textarea.svelte-1pm1lx3.svelte-1pm1lx3::placeholder{color:#6b7280;opacity:1}.prose.svelte-1pm1lx3.svelte-1pm1lx3{color:#374151;max-width:65ch}.prose.svelte-1pm1lx3.svelte-1pm1lx3{font-size:1rem;line-height:1.75}.prose.svelte-1pm1lx3>.svelte-1pm1lx3:first-child{margin-top:0}.prose.svelte-1pm1lx3>.svelte-1pm1lx3:last-child{margin-bottom:0}.fixed.svelte-1pm1lx3.svelte-1pm1lx3{position:fixed}.top-6.svelte-1pm1lx3.svelte-1pm1lx3{top:1.5rem}.right-6.svelte-1pm1lx3.svelte-1pm1lx3{right:1.5rem}.mx-auto.svelte-1pm1lx3.svelte-1pm1lx3{margin-left:auto;margin-right:auto}.my-16.svelte-1pm1lx3.svelte-1pm1lx3{margin-top:4rem;margin-bottom:4rem}.mx-4.svelte-1pm1lx3.svelte-1pm1lx3{margin-left:1rem;margin-right:1rem}.mt-4.svelte-1pm1lx3.svelte-1pm1lx3{margin-top:1rem}.mt-16.svelte-1pm1lx3.svelte-1pm1lx3{margin-top:4rem}.mb-2.svelte-1pm1lx3.svelte-1pm1lx3{margin-bottom:0.5rem}.mt-8.svelte-1pm1lx3.svelte-1pm1lx3{margin-top:2rem}.mr-2.svelte-1pm1lx3.svelte-1pm1lx3{margin-right:0.5rem}.flex.svelte-1pm1lx3.svelte-1pm1lx3{display:flex}.h-9.svelte-1pm1lx3.svelte-1pm1lx3{height:2.25rem}.h-28.svelte-1pm1lx3.svelte-1pm1lx3{height:7rem}.h-12.svelte-1pm1lx3.svelte-1pm1lx3{height:3rem}.h-6.svelte-1pm1lx3.svelte-1pm1lx3{height:1.5rem}.h-4.svelte-1pm1lx3.svelte-1pm1lx3{height:1rem}.w-full.svelte-1pm1lx3.svelte-1pm1lx3{width:100%}.w-12.svelte-1pm1lx3.svelte-1pm1lx3{width:3rem}.w-6.svelte-1pm1lx3.svelte-1pm1lx3{width:1.5rem}.w-4.svelte-1pm1lx3.svelte-1pm1lx3{width:1rem}.max-w-none.svelte-1pm1lx3.svelte-1pm1lx3{max-width:none}.flex-grow.svelte-1pm1lx3.svelte-1pm1lx3{flex-grow:1}.flex-col.svelte-1pm1lx3.svelte-1pm1lx3{flex-direction:column}.items-center.svelte-1pm1lx3.svelte-1pm1lx3{align-items:center}.justify-end.svelte-1pm1lx3.svelte-1pm1lx3{justify-content:flex-end}.gap-10.svelte-1pm1lx3.svelte-1pm1lx3{gap:2.5rem}.gap-2.svelte-1pm1lx3.svelte-1pm1lx3{gap:0.5rem}.gap-4.svelte-1pm1lx3.svelte-1pm1lx3{gap:1rem}.self-end.svelte-1pm1lx3.svelte-1pm1lx3{align-self:flex-end}.rounded-md.svelte-1pm1lx3.svelte-1pm1lx3{border-radius:0.375rem}.rounded-full.svelte-1pm1lx3.svelte-1pm1lx3{border-radius:9999px}.\\!rounded-lg.svelte-1pm1lx3.svelte-1pm1lx3{border-radius:0.5rem !important}.border-gray-300.svelte-1pm1lx3.svelte-1pm1lx3{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.bg-gray-100.svelte-1pm1lx3.svelte-1pm1lx3{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-primary-100.svelte-1pm1lx3.svelte-1pm1lx3{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.bg-primary-50.svelte-1pm1lx3.svelte-1pm1lx3{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.bg-primary-200.svelte-1pm1lx3.svelte-1pm1lx3{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.bg-white.svelte-1pm1lx3.svelte-1pm1lx3{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-gradient-to-r.svelte-1pm1lx3.svelte-1pm1lx3{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-primary-100.svelte-1pm1lx3.svelte-1pm1lx3{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.via-blue-100.svelte-1pm1lx3.svelte-1pm1lx3{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.to-purple-100.svelte-1pm1lx3.svelte-1pm1lx3{--tw-gradient-to:#ede9fe}.py-1.svelte-1pm1lx3.svelte-1pm1lx3{padding-top:0.25rem;padding-bottom:0.25rem}.px-6.svelte-1pm1lx3.svelte-1pm1lx3{padding-left:1.5rem;padding-right:1.5rem}.py-4.svelte-1pm1lx3.svelte-1pm1lx3{padding-top:1rem;padding-bottom:1rem}.px-4.svelte-1pm1lx3.svelte-1pm1lx3{padding-left:1rem;padding-right:1rem}.px-2.svelte-1pm1lx3.svelte-1pm1lx3{padding-left:0.5rem;padding-right:0.5rem}.py-2.svelte-1pm1lx3.svelte-1pm1lx3{padding-top:0.5rem;padding-bottom:0.5rem}.\\!px-3.svelte-1pm1lx3.svelte-1pm1lx3{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!py-1\\.5.svelte-1pm1lx3.svelte-1pm1lx3{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!py-1.svelte-1pm1lx3.svelte-1pm1lx3{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.font-sans.svelte-1pm1lx3.svelte-1pm1lx3{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-3xl.svelte-1pm1lx3.svelte-1pm1lx3{font-size:1.875rem;line-height:2.25rem}.text-2xl.svelte-1pm1lx3.svelte-1pm1lx3{font-size:1.5rem;line-height:2rem}.text-base.svelte-1pm1lx3.svelte-1pm1lx3{font-size:1rem;line-height:1.5rem}.text-lg.svelte-1pm1lx3.svelte-1pm1lx3{font-size:1.125rem;line-height:1.75rem}.font-bold.svelte-1pm1lx3.svelte-1pm1lx3{font-weight:700}.font-medium.svelte-1pm1lx3.svelte-1pm1lx3{font-weight:500}.font-normal.svelte-1pm1lx3.svelte-1pm1lx3{font-weight:400}.font-semibold.svelte-1pm1lx3.svelte-1pm1lx3{font-weight:600}.text-white.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.text-black.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.text-primary-600.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.text-primary-900.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.text-gray-600.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-primary-800.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.text-primary-500.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.text-gray-400.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-red-600.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.text-pink-600.svelte-1pm1lx3.svelte-1pm1lx3{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!ring-1.svelte-1pm1lx3.svelte-1pm1lx3{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!ring-primary-500.svelte-1pm1lx3.svelte-1pm1lx3{--tw-ring-opacity:1 !important;--tw-ring-color:rgba(14, 165, 233, var(--tw-ring-opacity)) !important}.filter.svelte-1pm1lx3.svelte-1pm1lx3{filter:var(--tw-filter)}.hover\\:bg-primary-100.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.hover\\:bg-primary-200.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:bg-red-100\\/60.svelte-1pm1lx3.svelte-1pm1lx3:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:bg-pink-100\\/60.svelte-1pm1lx3.svelte-1pm1lx3:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:bg-primary-50.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.hover\\:from-primary-200.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0))}.hover\\:via-blue-200.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0))}.hover\\:to-purple-200.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-gradient-to:#ddd6fe}.hover\\:underline.svelte-1pm1lx3.svelte-1pm1lx3:hover{text-decoration:underline}.hover\\:\\!shadow-md.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!ring-2.svelte-1pm1lx3.svelte-1pm1lx3:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:cursor-not-allowed.svelte-1pm1lx3.svelte-1pm1lx3:disabled{cursor:not-allowed}.disabled\\:bg-gray-100.svelte-1pm1lx3.svelte-1pm1lx3:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:text-gray-600.svelte-1pm1lx3.svelte-1pm1lx3:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:opacity-70.svelte-1pm1lx3.svelte-1pm1lx3:disabled{opacity:0.7}.disabled\\:hover\\:bg-gray-100.svelte-1pm1lx3.svelte-1pm1lx3:disabled:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:hover\\:from-primary-100.svelte-1pm1lx3.svelte-1pm1lx3:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.disabled\\:hover\\:via-blue-100.svelte-1pm1lx3.svelte-1pm1lx3:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}')}function xc(e,t,n){const r=e.slice();return r[17]=t[n],r[19]=n,r}function kc(e,t){let n,r,i,s,o,a,l,c,u,h=t[17]+"",d=(t[4]?"-":t[3][t[17]])+"";function p(){return t[8](t[17])}return{key:e,first:null,c(){n=k("button"),r=k("span"),i=I(h),s=T(),o=I(d),a=T(),$(r,"class","mr-2 svelte-1pm1lx3"),$(n,"type","button"),$(n,"class",l=v((t[2].includes(t[17])?"bg-primary-200 hover:bg-primary-100 dark:!bg-primary-800 dark:hover:!bg-primary-600":"bg-white dark:!bg-gray-700 hover:bg-primary-50 dark:hover:!bg-primary-600")+" !px-3 !py-1.5 !rounded-lg !ring-1 !ring-primary-500 hover:!ring-2 hover:!shadow-md")+" svelte-1pm1lx3"),this.first=n},m(e,t){w(e,n,t),y(n,r),y(r,i),y(n,s),y(n,o),y(n,a),c||(u=E(n,"click",p),c=!0)},p(e,r){t=e,1&r&&h!==(h=t[17]+"")&&N(i,h),25&r&&d!==(d=(t[4]?"-":t[3][t[17]])+"")&&N(o,d),5&r&&l!==(l=v((t[2].includes(t[17])?"bg-primary-200 hover:bg-primary-100 dark:!bg-primary-800 dark:hover:!bg-primary-600":"bg-white dark:!bg-gray-700 hover:bg-primary-50 dark:hover:!bg-primary-600")+" !px-3 !py-1.5 !rounded-lg !ring-1 !ring-primary-500 hover:!ring-2 hover:!shadow-md")+" svelte-1pm1lx3")&&$(n,"class",l)},d(e){e&&b(n),c=!1,u()}}}function Cc(t){let n,r=[],i=new Map,s=t[0];const o=e=>e[19];for(let e=0;e<s.length;e+=1){let n=xc(t,s,e),a=o(n);i.set(a,r[e]=kc(a,n))}return{c(){n=k("div");for(let e=0;e<r.length;e+=1)r[e].c();$(n,"class","flex gap-4 text-2xl mt-8 svelte-1pm1lx3")},m(e,t){w(e,n,t);for(let e=0;e<r.length;e+=1)r[e].m(n,null)},p(e,[t]){61&t&&(s=e[0],r=ee(r,t,o,1,e,s,i,n,Z,kc,null,xc))},i:e,o:e,d(e){e&&b(n);for(let e=0;e<r.length;e+=1)r[e].d()}}}function Ic(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s()));let o,a,l,{reactions:c=["😭","😕","😀","🤩"]}=n,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=dc();o=e.authStore,s(),s=u(o,(e=>r(7,i=e))),a=e.loginWithGoogle,l=e.logout}catch(e){throw e}const d=ac();let p=[],f={};c.forEach((e=>r(3,f[e]=0,f)));let m=!0,g=!0;const v=e=>{!i.user||g||m||(p.includes(e)?(async e=>{r(2,p=p.filter((t=>t!==e))),r(3,f[e]--,f),r(3,f={...f});const t=`posts/${wc(h)}/reactions`,n=`users/activity/${i.user.uid}/${wc(h)}/reactions`,s={};s[`${t}/count/${e}`]=cc(-1),s[`${t}/users/${e}/${i.user.uid}`]=null,s[`${n}/${e}`]=null,Zl(Yl(d),s)})(e):(async e=>{r(2,p=[...p,e]),r(3,f[e]++,f),r(3,f={...f});const t=`posts/${wc(h)}/reactions`,n=`users/activity/${i.user.uid}/${wc(h)}/reactions`,s={};s[`${t}/count/${e}`]=cc(1),s[`${t}/users/${e}/${i.user.uid}`]=!0,s[`${n}/${e}`]=!0,Zl(Yl(d),s)})(e))};return t.$$set=e=>{"reactions"in e&&r(0,c=e.reactions),"page"in e&&r(6,h=e.page)},t.$$.update=()=>{192&t.$$.dirty&&(nc(Yl(d,`posts/${wc(h)}/reactions/count`),(e=>{var t;t=e.val()??{},Object.entries(t??{}).forEach((([e,t])=>{r(3,f[e]=t,f)})),r(4,g=!1)}),{onlyOnce:!0}),i.user?nc(Yl(d,`users/activity/${i.user.uid}/${wc(h)}/reactions`),(e=>{var t;t=e.val()??{},r(2,p=Object.keys(t)),m=!1}),{onlyOnce:!0}):r(2,p=[]))},[c,o,p,f,g,v,h,i,e=>v(e)]}class Tc extends le{constructor(e){super(),ae(this,e,Ic,Cc,o,{reactions:0,page:6},bc)}}var Sc="en",Ec={},$c={};function Nc(){return Sc}function Rc(e){return Ec[e]?e:$c[e.toLowerCase()]?$c[e.toLowerCase()]:void 0}function qc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.localeMatcher||"lookup";switch(n){case"lookup":case"best fit":return Pc(e);default:throw new RangeError('Invalid "localeMatcher" option: '.concat(n))}}function Pc(e){var t=Rc(e);if(t)return t;for(var n=e.split("-");e.length>1;){n.pop();var r=Rc(e=n.join("-"));if(r)return r}}var Oc={af:function(e){return 1==e?"one":"other"},am:function(e){return e>=0&&e<=1?"one":"other"},ar:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 0==e?"zero":1==e?"one":2==e?"two":n>=3&&n<=10?"few":n>=11&&n<=99?"many":"other"},ast:function(e){var t=!String(e).split(".")[1];return 1==e&&t?"one":"other"},be:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2);return 1==r&&11!=i?"one":r>=2&&r<=4&&(i<12||i>14)?"few":n&&0==r||r>=5&&r<=9||i>=11&&i<=14?"many":"other"},br:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2),s=n&&t[0].slice(-6);return 1==r&&11!=i&&71!=i&&91!=i?"one":2==r&&12!=i&&72!=i&&92!=i?"two":(3==r||4==r||9==r)&&(i<10||i>19)&&(i<70||i>79)&&(i<90||i>99)?"few":0!=e&&n&&0==s?"many":"other"},bs:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==s&&11!=o||1==a&&11!=l?"one":i&&s>=2&&s<=4&&(o<12||o>14)||a>=2&&a<=4&&(l<12||l>14)?"few":"other"},cs:function(e){var t=String(e).split("."),n=t[0],r=!t[1];return 1==e&&r?"one":n>=2&&n<=4&&r?"few":r?"other":"many"},cy:function(e){return 0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},da:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e;return 1!=e&&(r||0!=n&&1!=n)?"other":"one"},dsb:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-2),o=r.slice(-2);return i&&1==s||1==o?"one":i&&2==s||2==o?"two":i&&(3==s||4==s)||3==o||4==o?"few":"other"},dz:function(e){return"other"},fil:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=r.slice(-1);return i&&(1==n||2==n||3==n)||i&&4!=s&&6!=s&&9!=s||!i&&4!=o&&6!=o&&9!=o?"one":"other"},fr:function(e){return e>=0&&e<2?"one":"other"},ga:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e?"one":2==e?"two":n&&e>=3&&e<=6?"few":n&&e>=7&&e<=10?"many":"other"},gd:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e||11==e?"one":2==e||12==e?"two":n&&e>=3&&e<=10||n&&e>=13&&e<=19?"few":"other"},he:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=Number(t[0])==e,s=i&&t[0].slice(-1);return 1==e&&r?"one":2==n&&r?"two":r&&(e<0||e>10)&&i&&0==s?"many":"other"},is:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e,i=n.slice(-1),s=n.slice(-2);return r&&1==i&&11!=s||!r?"one":"other"},ksh:function(e){return 0==e?"zero":1==e?"one":"other"},lt:function(e){var t=String(e).split("."),n=t[1]||"",r=Number(t[0])==e,i=r&&t[0].slice(-1),s=r&&t[0].slice(-2);return 1==i&&(s<11||s>19)?"one":i>=2&&i<=9&&(s<11||s>19)?"few":0!=n?"many":"other"},lv:function(e){var t=String(e).split("."),n=t[1]||"",r=n.length,i=Number(t[0])==e,s=i&&t[0].slice(-1),o=i&&t[0].slice(-2),a=n.slice(-2),l=n.slice(-1);return i&&0==s||o>=11&&o<=19||2==r&&a>=11&&a<=19?"zero":1==s&&11!=o||2==r&&1==l&&11!=a||2!=r&&1==l?"one":"other"},mk:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==s&&11!=o||1==a&&11!=l?"one":"other"},mt:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 1==e?"one":0==e||n>=2&&n<=10?"few":n>=11&&n<=19?"many":"other"},pa:function(e){return 0==e||1==e?"one":"other"},pl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),s=n.slice(-2);return 1==e&&r?"one":r&&i>=2&&i<=4&&(s<12||s>14)?"few":r&&1!=n&&(0==i||1==i)||r&&i>=5&&i<=9||r&&s>=12&&s<=14?"many":"other"},pt:function(e){var t=String(e).split(".")[0];return 0==t||1==t?"one":"other"},ro:function(e){var t=String(e).split("."),n=!t[1],r=Number(t[0])==e&&t[0].slice(-2);return 1==e&&n?"one":!n||0==e||1!=e&&r>=1&&r<=19?"few":"other"},ru:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),s=n.slice(-2);return r&&1==i&&11!=s?"one":r&&i>=2&&i<=4&&(s<12||s>14)?"few":r&&0==i||r&&i>=5&&i<=9||r&&s>=11&&s<=14?"many":"other"},se:function(e){return 1==e?"one":2==e?"two":"other"},si:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"";return 0==e||1==e||0==n&&1==r?"one":"other"},sl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-2);return r&&1==i?"one":r&&2==i?"two":r&&(3==i||4==i)||!r?"few":"other"}};Oc.as=Oc.am,Oc.az=Oc.af,Oc.bg=Oc.af,Oc.bn=Oc.am,Oc.ca=Oc.ast,Oc.ce=Oc.af,Oc.chr=Oc.af,Oc.de=Oc.ast,Oc.ee=Oc.af,Oc.el=Oc.af,Oc.en=Oc.ast,Oc.es=Oc.af,Oc.et=Oc.ast,Oc.eu=Oc.af,Oc.fa=Oc.am,Oc.fi=Oc.ast,Oc.fo=Oc.af,Oc.fur=Oc.af,Oc.fy=Oc.ast,Oc.gl=Oc.ast,Oc.gu=Oc.am,Oc.hi=Oc.am,Oc.hr=Oc.bs,Oc.hsb=Oc.dsb,Oc.hu=Oc.af,Oc.hy=Oc.fr,Oc.ia=Oc.ast,Oc.id=Oc.dz,Oc.it=Oc.ast,Oc.ja=Oc.dz,Oc.jgo=Oc.af,Oc.jv=Oc.dz,Oc.ka=Oc.af,Oc.kea=Oc.dz,Oc.kk=Oc.af,Oc.kl=Oc.af,Oc.km=Oc.dz,Oc.kn=Oc.am,Oc.ko=Oc.dz,Oc.ku=Oc.af,Oc.ky=Oc.af,Oc.lb=Oc.af,Oc.lkt=Oc.dz,Oc.lo=Oc.dz,Oc.ml=Oc.af,Oc.mn=Oc.af,Oc.mr=Oc.am,Oc.ms=Oc.dz,Oc.my=Oc.dz,Oc.nb=Oc.af,Oc.ne=Oc.af,Oc.nl=Oc.ast,Oc.nn=Oc.af,Oc.or=Oc.af,Oc.ps=Oc.af,Oc["pt-PT"]=Oc.ast,Oc.sah=Oc.dz,Oc.sd=Oc.af,Oc.sk=Oc.cs,Oc.so=Oc.af,Oc.sq=Oc.af,Oc.sr=Oc.bs,Oc.sv=Oc.ast,Oc.sw=Oc.ast,Oc.ta=Oc.af,Oc.te=Oc.af,Oc.th=Oc.dz,Oc.ti=Oc.pa,Oc.tk=Oc.af,Oc.to=Oc.dz,Oc.tr=Oc.af,Oc.ug=Oc.af,Oc.uk=Oc.ru,Oc.ur=Oc.ast,Oc.uz=Oc.af,Oc.vi=Oc.dz,Oc.wae=Oc.af,Oc.yi=Oc.ast,Oc.yue=Oc.dz,Oc.zh=Oc.dz,Oc.zu=Oc.am;var Ac=Oc;function Dc(e){return"pt-PT"===e?e:function(e){var t=e.match(Lc);if(!t)throw new TypeError("Invalid locale: ".concat(e));return t[1]}(e)}var Lc=/^([a-z0-9]+)/i;function Mc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Fc=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=e.supportedLocalesOf(t);if(0===r.length)throw new RangeError("Unsupported locale: "+t);if(n&&"cardinal"!==n.type)throw new RangeError('Only "cardinal" "type" is supported');this.$=Ac[Dc(r[0])]}var t,n,r;return t=e,r=[{key:"supportedLocalesOf",value:function(e){return"string"==typeof e&&(e=[e]),e.filter((function(e){return Ac[Dc(e)]}))}}],(n=[{key:"select",value:function(e){return this.$(e)}}])&&Mc(t.prototype,n),r&&Mc(t,r),e}();function zc(e){return(zc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Uc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Hc(e,t,n[t])}))}return e}function jc(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Wc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bc=["second","minute","hour","day","week","month","quarter","year"],Gc=["auto","always"],Kc=["long","short","narrow"],Yc=["lookup","best fit"],Jc=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Wc(this,e),Hc(this,"numeric","always"),Hc(this,"style","long"),Hc(this,"localeMatcher","lookup");var r=n.numeric,i=n.style,s=n.localeMatcher;if(void 0!==r){if(Gc.indexOf(r)<0)throw new RangeError('Invalid "numeric" option: '.concat(r));this.numeric=r}if(void 0!==i){if(Kc.indexOf(i)<0)throw new RangeError('Invalid "style" option: '.concat(i));this.style=i}if(void 0!==s){if(Yc.indexOf(s)<0)throw new RangeError('Invalid "localeMatcher" option: '.concat(s));this.localeMatcher=s}if("string"==typeof t&&(t=[t]),t.push(Nc()),this.locale=e.supportedLocalesOf(t,{localeMatcher:this.localeMatcher})[0],!this.locale)throw new Error("No supported locale was found");Fc.supportedLocalesOf(this.locale).length>0?this.pluralRules=new Fc(this.locale):console.warn('"'.concat(this.locale,'" locale is not supported')),"undefined"!=typeof Intl&&Intl.NumberFormat?(this.numberFormat=new Intl.NumberFormat(this.locale),this.numberingSystem=this.numberFormat.resolvedOptions().numberingSystem):this.numberingSystem="latn",this.locale=qc(this.locale,{localeMatcher:this.localeMatcher})}var t,n,r;return t=e,(n=[{key:"format",value:function(){var e=eu(arguments),t=jc(e,2),n=t[0],r=t[1];return this.getRule(n,r).replace("{0}",this.formatNumber(Math.abs(n)))}},{key:"formatToParts",value:function(){var e=eu(arguments),t=jc(e,2),n=t[0],r=t[1],i=this.getRule(n,r),s=i.indexOf("{0}");if(s<0)return[{type:"literal",value:i}];var o=[];return s>0&&o.push({type:"literal",value:i.slice(0,s)}),o=o.concat(this.formatNumberToParts(Math.abs(n)).map((function(e){return Uc({},e,{unit:r})}))),s+"{0}".length<i.length-1&&o.push({type:"literal",value:i.slice(s+"{0}".length)}),o}},{key:"getRule",value:function(e,t){var n=function(e){return Ec[e]}(this.locale)[this.style][t];if("auto"===this.numeric)if(-2===e||-1===e){var r=n["previous".concat(-1===e?"":"-"+Math.abs(e))];if(r)return r}else if(1===e||2===e){var i=n["next".concat(1===e?"":"-"+Math.abs(e))];if(i)return i}else if(0===e&&n.current)return n.current;var s,o=n[(s=e,s<0||0===s&&function(e){return 1/e==-1/0}(s)?"past":"future")];return"string"==typeof o?o:o[this.pluralRules&&this.pluralRules.select(Math.abs(e))||"other"]||o.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"formatNumberToParts",value:function(e){return this.numberFormat&&this.numberFormat.formatToParts?this.numberFormat.formatToParts(e):[{type:"integer",value:this.formatNumber(e)}]}},{key:"resolvedOptions",value:function(){return{locale:this.locale,style:this.style,numeric:this.numeric,numberingSystem:this.numberingSystem}}}])&&Vc(t.prototype,n),r&&Vc(t,r),e}();Jc.supportedLocalesOf=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e)e=[e];else if(!Array.isArray(e))throw new TypeError('Invalid "locales" argument');return e.filter((function(e){return qc(e,t)}))},Jc.addLocale=function(e){if(!e)throw new Error("No locale data passed");Ec[e.locale]=e,$c[e.locale.toLowerCase()]=e.locale},Jc.setDefaultLocale=function(e){Sc=e},Jc.getDefaultLocale=Nc,Jc.PluralRules=Fc;var Qc='Invalid "unit" argument';function Zc(e){if("symbol"===zc(e))throw new TypeError(Qc);if("string"!=typeof e)throw new RangeError("".concat(Qc,": ").concat(e));if("s"===e[e.length-1]&&(e=e.slice(0,e.length-1)),Bc.indexOf(e)<0)throw new RangeError("".concat(Qc,": ").concat(e));return e}function Xc(e){if(e=Number(e),Number.isFinite&&!Number.isFinite(e))throw new RangeError("".concat('Invalid "number" argument',": ").concat(e));return e}function eu(e){if(e.length<2)throw new TypeError('"unit" argument is required');return[Xc(e[0]),Zc(e[1])]}function tu(e){return(tu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function nu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ru=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r={},(n="cache")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,r;return t=e,(n=[{key:"get",value:function(){for(var e=this.cache,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i=0;i<n.length;i++){var s=n[i];if("object"!==tu(e))return;e=e[s]}return e}},{key:"put",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.pop(),i=t.pop(),s=this.cache,o=0;o<t.length;o++){var a=t[o];"object"!==tu(s[a])&&(s[a]={}),s=s[a]}return s[i]=r}}])&&nu(t.prototype,n),r&&nu(t,r),e}();function iu(e){return(iu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function su(e,t){var n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if((i=n.next()).done)break;s=i.value}var o=s;if(t(o))return o;for(var a=o.split("-");a.length>1;)if(a.pop(),t(o=a.join("-")))return o}throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")))}var ou=60,au=3600,lu=86400,cu=7*lu,uu=2630016,hu=31556952;function du(e){switch(e){case"second":return 1;case"minute":return ou;case"hour":return au;case"day":return lu;case"week":return cu;case"month":return uu;case"year":return hu}}function pu(e){return void 0!==e.factor?e.factor:du(e.unit||e.formatAs)||1}function fu(e){switch(e){case"floor":return Math.floor;default:return Math.round}}function mu(e){switch(e){case"floor":return 1;default:return.5}}function gu(e){return(gu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function vu(e,t){var n,r=t.prevStep,i=t.timestamp,s=t.now,o=t.future,a=t.round;return r&&(r.id||r.unit)&&(n=e["threshold_for_".concat(r.id||r.unit)]),void 0===n&&void 0!==e.threshold&&"function"==typeof(n=e.threshold)&&(n=n(s,o)),void 0===n&&(n=e.minTime),"object"===gu(n)&&(n=r&&r.id&&void 0!==n[r.id]?n[r.id]:n.default),"function"==typeof n&&(n=n(i,{future:o,getMinTimeForUnit:function(e,t){return yu(e,t||r&&r.formatAs,{round:a})}})),void 0===n&&e.test&&(n=e.test(i,{now:s,future:o})?0:9007199254740991),void 0===n&&(r?e.formatAs&&r.formatAs&&(n=yu(e.formatAs,r.formatAs,{round:a})):n=0),void 0===n&&console.warn("[javascript-time-ago] A step should specify `minTime`:\n"+JSON.stringify(e,null,2)),n}function yu(e,t,n){var r,i=n.round,s=du(e);if(r=du("now"===t?e:t),void 0!==s&&void 0!==r)return s-r*(1-mu(i))}function _u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){wu(e,t,n[t])}))}return e}function wu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bu(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.units,a=n.getNextStep,l=function(e,t,n){var r=n.now,i=n.future,s=n.round;if(0===e.length)return;var o=xu(e,t,{now:r,future:i||t<0,round:s});if(-1===o)return;var a=e[o];if(a.granularity){if(0===fu(s)(Math.abs(t)/pu(a)/a.granularity)*a.granularity&&o>0)return e[o-1]}return a}(e=function(e,t){return e.filter((function(e){var n=e.unit,r=e.formatAs;return!(n=n||r)||t.indexOf(n)>=0}))}(e,o),t,{now:r,future:i,round:s});return a?l?[e[e.indexOf(l)-1],l,e[e.indexOf(l)+1]]:[void 0,void 0,e[0]]:l}function xu(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=vu(e[r],_u({prevStep:e[r-1],timestamp:n.now-1e3*t},n));return void 0===i||Math.abs(t)<i?r-1:r===e.length-1?r:xu(e,t,n,r+1)}function ku(e,t,n){var r=n.now,i=n.round;if(du(e)){var s=1e3*du(e),o=t>r,a=Math.abs(t-r),l=fu(i)(a/s)*s;return o?l>0?a-l+function(e,t){return(1-mu(e))*t+1}(i,s):a-l+1:-(a-l)+function(e,t){return mu(e)*t}(i,s)}}var Cu=31536e9;function Iu(e,t,n){var r=n.prevStep,i=n.nextStep,s=n.now,o=n.future,a=n.round,l=e.getTime?e.getTime():e,c=function(e){return ku(e,l,{now:s,round:a})},u=function(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.prevStep;if(e){var a=function(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.prevStep,a=vu(e,{timestamp:t,now:r,future:i,round:s,prevStep:o});if(void 0===a)return;return i?t-1e3*a+1:0===a&&t===r?Cu:t+1e3*a}(e,t,{now:r,future:i,round:s,prevStep:o});if(void 0===a)return;return a-r}return i?t-r+1:Cu}(o?t:i,l,{future:o,now:s,round:a,prevStep:o?r:t});if(void 0!==u){var h;if(t&&(t.getTimeToNextUpdate&&(h=t.getTimeToNextUpdate(l,{getTimeToNextUpdateForUnit:c,getRoundFunction:fu,now:s,future:o,round:a})),void 0===h)){var d=t.unit||t.formatAs;d&&(h=c(d))}return void 0===h?u:Math.min(h,u)}}var Tu={};function Su(e){return Tu[e]}function Eu(e){if(!e)throw new Error("[javascript-time-ago] No locale data passed.");Tu[e.locale]=e}var $u={steps:[{formatAs:"now"},{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"}],labels:"long"};function Nu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ru=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Nu(e,t,n[t])}))}return e}({},$u,{steps:$u.steps.filter((function(e){return"second"!==e.formatAs}))}),qu=[{factor:1,unit:"now"},{threshold:1,threshold_for_now:45.5,factor:1,unit:"second"},{threshold:45.5,factor:ou,unit:"minute"},{threshold:150,granularity:5,factor:ou,unit:"minute"},{threshold:1350,factor:1800,unit:"half-hour"},{threshold:2550,threshold_for_minute:3150,factor:au,unit:"hour"},{threshold:73800,factor:lu,unit:"day"},{threshold:475200,factor:cu,unit:"week"},{threshold:2116800,factor:uu,unit:"month"},{threshold:27615168,factor:hu,unit:"year"}],Pu={gradation:qu,flavour:"long",units:["now","minute","hour","day","week","month","year"]},Ou={gradation:qu,flavour:"long-time",units:["now","minute","hour","day","week","month","year"]};function Au(e){return e instanceof Date?e:new Date(e)}var Du=[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"}],Lu={},Mu={minTime:function(e,t){return t.future,(0,t.getMinTimeForUnit)("day")},format:function(e,t){return Lu[t]||(Lu[t]={}),Lu[t].dayMonth||(Lu[t].dayMonth=new Intl.DateTimeFormat(t,{month:"short",day:"numeric"})),Lu[t].dayMonth.format(Au(e))}},Fu={minTime:function(e,t){return t.future?(e-(new Date(new Date(e).getFullYear(),0).getTime()-1))/1e3:(new Date(new Date(e).getFullYear()+1,0).getTime()-e)/1e3},format:function(e,t){return Lu[t]||(Lu[t]={}),Lu[t].dayMonthYear||(Lu[t].dayMonthYear=new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric"})),Lu[t].dayMonthYear.format(Au(e))}};"object"===("undefined"==typeof Intl?"undefined":iu(Intl))&&"function"==typeof Intl.DateTimeFormat?Du.push(Mu,Fu):Du.push({formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"});var zu={steps:Du,labels:["mini","short-time","narrow","short"]};function Uu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ju=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Uu(e,t,n[t])}))}return e}({},zu,{steps:[{formatAs:"now"}].concat(zu.steps)});function Wu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Vu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Wu(e,t,n[t])}))}return e}({},zu,{steps:zu.steps.filter((function(e){return"second"!==e.formatAs}))});function Hu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Hu(e,t,n[t])}))}return e}({},Vu,{steps:[{formatAs:"now"}].concat(Vu.steps)});function Gu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ku(e,t,n[t])}))}return e}function Ku(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Yu=Gu({},zu,{steps:zu.steps.filter((function(e){return"second"!==e.formatAs})).map((function(e){return"minute"===e.formatAs?Gu({},e,{minTime:ou}):e}))}),Ju={steps:[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"month"},{formatAs:"year"}],labels:["mini","short-time","narrow","short"]};function Qu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Qu(e,t,n[t])}))}return e}({},Ju,{steps:[{formatAs:"now"}].concat(Ju.steps)});function Xu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var eh=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Xu(e,t,n[t])}))}return e}({},Ju,{steps:Ju.steps.filter((function(e){return"second"!==e.formatAs}))});function th(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var nh=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){th(e,t,n[t])}))}return e}({},eh,{steps:[{formatAs:"now"}].concat(eh.steps)});function rh(e){switch(e){case"default":case"round":return $u;case"round-minute":return Ru;case"approximate":return Pu;case"time":case"approximate-time":return Ou;case"mini":return Ju;case"mini-now":return Zu;case"mini-minute":return eh;case"mini-minute-now":return nh;case"twitter":return zu;case"twitter-now":return ju;case"twitter-minute":return Vu;case"twitter-minute-now":return Bu;case"twitter-first-minute":return Yu;default:return Pu}}function ih(e){return(ih="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sh(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function oh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ah(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var lh,ch=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.polyfill;oh(this,e),"string"==typeof t&&(t=[t]),this.locale=su(t.concat(e.getDefaultLocale()),Su),"undefined"!=typeof Intl&&Intl.NumberFormat&&(this.numberFormat=new Intl.NumberFormat(this.locale)),!1===r?(this.IntlRelativeTimeFormat=Intl.RelativeTimeFormat,this.IntlPluralRules=Intl.PluralRules):(this.IntlRelativeTimeFormat=Jc,this.IntlPluralRules=Jc.PluralRules),this.relativeTimeFormatCache=new ru,this.pluralRulesCache=new ru}var t,n,r;return t=e,(n=[{key:"format",value:function(e,t,n){var r,i;n||(!t||"string"==typeof(r=t)||function(e){return void 0!==ih(e)&&null!==e&&e.constructor===hh}(i=r)&&(Array.isArray(i.steps)||Array.isArray(i.gradation)||Array.isArray(i.flavour)||"string"==typeof i.flavour||Array.isArray(i.labels)||"string"==typeof i.labels||Array.isArray(i.units)||"function"==typeof i.custom)?n={}:(n=t,t=void 0)),t||(t=Ru),"string"==typeof t&&(t=rh(t));var s,o=function(e){if(e.constructor===Date||function(e){return"object"===ih(e)&&"function"==typeof e.getTime}(e))return e.getTime();if("number"==typeof e)return e;throw new Error("Unsupported relative time formatter input: ".concat(ih(e),", ").concat(e))}(e),a=this.getLabels(t.flavour||t.labels),l=a.labels,c=a.labelsType;void 0!==t.now&&(s=t.now),void 0===s&&void 0!==n.now&&(s=n.now),void 0===s&&(s=Date.now());var u=(s-o)/1e3,h=n.future||u<0,d=function(e,t,n,r){var i=e.now||t&&t.now;return i?"string"==typeof i?i:r?i.future:i.past:n&&n.second&&n.second.current?n.second.current:void 0}(l,Su(this.locale).now,Su(this.locale).long,h);if(t.custom){var p=t.custom({now:s,date:new Date(o),time:o,elapsed:u,locale:this.locale});if(void 0!==p)return p}var f=function(e,t,n){var r=Object.keys(t);return n&&r.push("now"),e&&(r=e.filter((function(e){return"now"===e||r.indexOf(e)>=0}))),r}(t.units,l,d),m=n.round||t.round,g=sh(bu(t.gradation||t.steps||Ru.steps,u,{now:s,units:f,round:m,future:h,getNextStep:!0}),3),v=g[0],y=g[1],_=g[2],w=this.formatDateForStep(o,y,u,{labels:l,labelsType:c,nowLabel:d,now:s,future:h,round:m})||"";return n.getTimeToNextUpdate?[w,Iu(o,y,{nextStep:_,prevStep:v,now:s,future:h,round:m})]:w}},{key:"formatDateForStep",value:function(e,t,n,r){var i=this,s=r.labels,o=r.labelsType,a=r.nowLabel,l=r.now,c=r.future,u=r.round;if(t){if(t.format)return t.format(e,this.locale,{formatAs:function(e,t){return i.formatValue(t,e,{labels:s,future:c})},now:l,future:c});var h=t.unit||t.formatAs;if(!h)throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(t)));if("now"===h)return a;var d=Math.abs(n)/pu(t);t.granularity&&(d=fu(u)(d/t.granularity)*t.granularity);var p=-1*Math.sign(n)*fu(u)(d);switch(0===p&&(p=c?0:-0),o){case"long":case"short":case"narrow":return this.getFormatter(o).format(p,h);default:return this.formatValue(p,h,{labels:s,future:c})}}}},{key:"formatValue",value:function(e,t,n){var r=n.labels,i=n.future;return this.getFormattingRule(r,t,e,{future:i}).replace("{0}",this.formatNumber(Math.abs(e)))}},{key:"getFormattingRule",value:function(e,t,n,r){var i=r.future;if(this.locale,"string"==typeof(e=e[t]))return e;var s=e[0===n?i?"future":"past":n<0?"past":"future"]||e;return"string"==typeof s?s:s[this.getPluralRules().select(Math.abs(n))]||s.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"getFormatter",value:function(e){return this.relativeTimeFormatCache.get(this.locale,e)||this.relativeTimeFormatCache.put(this.locale,e,new this.IntlRelativeTimeFormat(this.locale,{style:e}))}},{key:"getPluralRules",value:function(){return this.pluralRulesCache.get(this.locale)||this.pluralRulesCache.put(this.locale,new this.IntlPluralRules(this.locale))}},{key:"getLabels",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"string"==typeof e&&(e=[e]),e=(e=e.map((function(e){switch(e){case"tiny":case"mini-time":return"mini";default:return e}}))).concat("long");var t=Su(this.locale),n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if((i=n.next()).done)break;s=i.value}var o=s;if(t[o])return{labelsType:o,labels:t[o]}}}}])&&ah(t.prototype,n),r&&ah(t,r),e}(),uh="en";ch.getDefaultLocale=function(){return uh},ch.setDefaultLocale=function(e){return uh=e},ch.addDefaultLocale=function(e){if(lh)return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");lh=!0,ch.setDefaultLocale(e.locale),ch.addLocale(e)},ch.addLocale=function(e){Eu(e),Jc.addLocale(e)},ch.locale=ch.addLocale,ch.addLabels=function(e,t,n){var r=Su(e);r||(Eu({locale:e}),r=Su(e)),r[t]=n};var hh={}.constructor;var dh={locale:"en",long:{year:{previous:"last year",current:"this year",next:"next year",past:{one:"{0} year ago",other:"{0} years ago"},future:{one:"in {0} year",other:"in {0} years"}},quarter:{previous:"last quarter",current:"this quarter",next:"next quarter",past:{one:"{0} quarter ago",other:"{0} quarters ago"},future:{one:"in {0} quarter",other:"in {0} quarters"}},month:{previous:"last month",current:"this month",next:"next month",past:{one:"{0} month ago",other:"{0} months ago"},future:{one:"in {0} month",other:"in {0} months"}},week:{previous:"last week",current:"this week",next:"next week",past:{one:"{0} week ago",other:"{0} weeks ago"},future:{one:"in {0} week",other:"in {0} weeks"}},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:{one:"{0} hour ago",other:"{0} hours ago"},future:{one:"in {0} hour",other:"in {0} hours"}},minute:{current:"this minute",past:{one:"{0} minute ago",other:"{0} minutes ago"},future:{one:"in {0} minute",other:"in {0} minutes"}},second:{current:"now",past:{one:"{0} second ago",other:"{0} seconds ago"},future:{one:"in {0} second",other:"in {0} seconds"}}},short:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},narrow:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},now:{now:{current:"now",future:"in a moment",past:"just now"}},mini:{year:"{0}yr",month:"{0}mo",week:"{0}wk",day:"{0}d",hour:"{0}h",minute:"{0}m",second:"{0}s",now:"now"},"short-time":{year:"{0} yr.",month:"{0} mo.",week:"{0} wk.",day:{one:"{0} day",other:"{0} days"},hour:"{0} hr.",minute:"{0} min.",second:"{0} sec."},"long-time":{year:{one:"{0} year",other:"{0} years"},month:{one:"{0} month",other:"{0} months"},week:{one:"{0} week",other:"{0} weeks"},day:{one:"{0} day",other:"{0} days"},hour:{one:"{0} hour",other:"{0} hours"},minute:{one:"{0} minute",other:"{0} minutes"},second:{one:"{0} second",other:"{0} seconds"}}};function ph(e,t,n){const r=e.slice();return r[15]=t[n],r}function fh(e,t,n){const r=e.slice();return r[15]=t[n],r}function mh(e,t,n){const r=e.slice();return r[8]=t[n],r}function gh(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function vh(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function yh(e,t,n){const r=e.slice();return r[5]=t[n],r}function _h(e){let t,n,r,i;const s=[kh,xh,bh],o=[];function a(e,t){return"table"===e[0]?0:"list"===e[0]?1:2}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),w(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function wh(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=Hh(yh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);w(e,t,r),n=!0},p(e,n){if(10&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=yh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Hh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function bh(e){let n,r,i;const s=[e[4]];var o=e[3][e[0]];function a(e){let n={$$slots:{default:[Th]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&re(n.$$.fragment),r=S()},m(e,t){n&&ie(n,e,t),w(e,r,t),i=!0},p(e,t){const i=16&t?te(s,[ne(e[4])]):{};if(1048602&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3][e[0]])){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}o?(n=new o(a(e)),re(n.$$.fragment),J(n.$$.fragment,1),ie(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function xh(e){let t,n,r,i;const s=[Eh,Sh],o=[];function a(e,t){return e[2]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),w(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function kh(e){let t,n,r;var i=e[3].table;function s(e){return{props:{$$slots:{default:[Vh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&re(t.$$.fragment),n=S()},m(e,i){t&&ie(t,e,i),w(e,n,i),r=!0},p(e,r){const o={};if(1048602&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].table)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(s(e)),re(t.$$.fragment),J(t.$$.fragment,1),ie(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function Ch(t){let n,r=t[4].raw+"";return{c(){n=I(r)},m(e,t){w(e,n,t)},p(e,t){16&t&&r!==(r=e[4].raw+"")&&N(n,r)},i:e,o:e,d(e){e&&b(n)}}}function Ih(e){let t,n;return t=new Kh({props:{tokens:e[1],renderers:e[3]}}),{c(){re(t.$$.fragment)},m(e,r){ie(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.tokens=e[1]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function Th(e){let t,n,r,i;const s=[Ih,Ch],o=[];function a(e,t){return e[1]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),w(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function Sh(e){let n,r,i;const s=[{ordered:e[2]},e[4]];var o=e[3].list;function a(e){let n={$$slots:{default:[Rh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&re(n.$$.fragment),r=S()},m(e,t){n&&ie(n,e,t),w(e,r,t),i=!0},p(e,t){const i=20&t?te(s,[4&t&&{ordered:e[2]},16&t&&ne(e[4])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].list)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}o?(n=new o(a(e)),re(n.$$.fragment),J(n.$$.fragment,1),ie(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function Eh(e){let n,r,i;const s=[{ordered:e[2]},e[4]];var o=e[3].list;function a(e){let n={$$slots:{default:[Oh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&re(n.$$.fragment),r=S()},m(e,t){n&&ie(n,e,t),w(e,r,t),i=!0},p(e,t){const i=20&t?te(s,[4&t&&{ordered:e[2]},16&t&&ne(e[4])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].list)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}o?(n=new o(a(e)),re(n.$$.fragment),J(n.$$.fragment,1),ie(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function $h(e){let t,n,r;return t=new Kh({props:{tokens:e[15].tokens,renderers:e[3]}}),{c(){re(t.$$.fragment),n=T()},m(e,i){ie(t,e,i),w(e,n,i),r=!0},p(e,n){const r={};16&n&&(r.tokens=e[15].tokens),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){se(t,e),e&&b(n)}}}function Nh(e){let n,r,i;const s=[e[15]];var o=e[3].unorderedlistitem||e[3].listitem;function a(e){let n={$$slots:{default:[$h]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&re(n.$$.fragment),r=S()},m(e,t){n&&ie(n,e,t),w(e,r,t),i=!0},p(e,t){const i=16&t?te(s,[ne(e[15])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].unorderedlistitem||e[3].listitem)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}o?(n=new o(a(e)),re(n.$$.fragment),J(n.$$.fragment,1),ie(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function Rh(e){let t,n,r=e[4].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=Nh(ph(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);w(e,t,r),n=!0},p(e,n){if(24&n){let o;for(r=e[4].items,o=0;o<r.length;o+=1){const s=ph(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Nh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function qh(e){let t,n,r;return t=new Kh({props:{tokens:e[15].tokens,renderers:e[3]}}),{c(){re(t.$$.fragment),n=T()},m(e,i){ie(t,e,i),w(e,n,i),r=!0},p(e,n){const r={};16&n&&(r.tokens=e[15].tokens),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){se(t,e),e&&b(n)}}}function Ph(e){let n,r,i;const s=[e[15]];var o=e[3].orderedlistitem||e[3].listitem;function a(e){let n={$$slots:{default:[qh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&re(n.$$.fragment),r=S()},m(e,t){n&&ie(n,e,t),w(e,r,t),i=!0},p(e,t){const i=16&t?te(s,[ne(e[15])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].orderedlistitem||e[3].listitem)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}o?(n=new o(a(e)),re(n.$$.fragment),J(n.$$.fragment,1),ie(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&b(r),n&&se(n,e)}}}function Oh(e){let t,n,r=e[4].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=Ph(fh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);w(e,t,r),n=!0},p(e,n){if(24&n){let o;for(r=e[4].items,o=0;o<r.length;o+=1){const s=fh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Ph(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Ah(e){let t,n,r;return t=new Kh({props:{tokens:e[11],renderers:e[3]}}),{c(){re(t.$$.fragment),n=T()},m(e,i){ie(t,e,i),w(e,n,i),r=!0},p(e,n){const r={};2&n&&(r.tokens=e[11]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){se(t,e),e&&b(n)}}}function Dh(e){let t,n,r;var i=e[3].tablecell;function s(e){return{props:{header:!0,align:e[4].align[e[13]]||"center",$$slots:{default:[Ah]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&re(t.$$.fragment),n=S()},m(e,i){t&&ie(t,e,i),w(e,n,i),r=!0},p(e,r){const o={};if(16&r&&(o.align=e[4].align[e[13]]||"center"),1048586&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablecell)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(s(e)),re(t.$$.fragment),J(t.$$.fragment,1),ie(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function Lh(e){let t,n,r=e[1].header,i=[];for(let t=0;t<r.length;t+=1)i[t]=Dh(vh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);w(e,t,r),n=!0},p(e,n){if(26&n){let o;for(r=e[1].header,o=0;o<r.length;o+=1){const s=vh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Dh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Mh(e){let t,n,r;var i=e[3].tablerow;function s(e){return{props:{$$slots:{default:[Lh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&re(t.$$.fragment),n=S()},m(e,i){t&&ie(t,e,i),w(e,n,i),r=!0},p(e,r){const o={};if(1048602&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablerow)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(s(e)),re(t.$$.fragment),J(t.$$.fragment,1),ie(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function Fh(e){let t,n;return t=new Kh({props:{tokens:e[11],renderers:e[3]}}),{c(){re(t.$$.fragment)},m(e,r){ie(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.tokens=e[11]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function zh(e){let t,n,r;var i=e[3].tablecell;function s(e){return{props:{header:!1,align:e[4].align[e[13]]||"center",$$slots:{default:[Fh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&re(t.$$.fragment),n=S()},m(e,i){t&&ie(t,e,i),w(e,n,i),r=!0},p(e,r){const o={};if(16&r&&(o.align=e[4].align[e[13]]||"center"),1048586&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablecell)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(s(e)),re(t.$$.fragment),J(t.$$.fragment,1),ie(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function Uh(e){let t,n,r=e[8],i=[];for(let t=0;t<r.length;t+=1)i[t]=zh(gh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);w(e,t,r),n=!0},p(e,n){if(26&n){let o;for(r=e[8],o=0;o<r.length;o+=1){const s=gh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=zh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function jh(e){let t,n,r;var i=e[3].tablerow;function s(e){return{props:{$$slots:{default:[Uh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&re(t.$$.fragment),n=S()},m(e,i){t&&ie(t,e,i),w(e,n,i),r=!0},p(e,r){const o={};if(1048602&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablerow)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}i?(t=new i(s(e)),re(t.$$.fragment),J(t.$$.fragment,1),ie(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&b(n),t&&se(t,e)}}}function Wh(e){let t,n,r=e[1].cells,i=[];for(let t=0;t<r.length;t+=1)i[t]=jh(mh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);w(e,t,r),n=!0},p(e,n){if(26&n){let o;for(r=e[1].cells,o=0;o<r.length;o+=1){const s=mh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=jh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){x(i,e),e&&b(t)}}}function Vh(e){let t,n,r,i,s;var o=e[3].tablehead;function a(e){return{props:{$$slots:{default:[Mh]},$$scope:{ctx:e}}}}o&&(t=new o(a(e)));var l=e[3].tablebody;function c(e){return{props:{$$slots:{default:[Wh]},$$scope:{ctx:e}}}}return l&&(r=new l(c(e))),{c(){t&&re(t.$$.fragment),n=T(),r&&re(r.$$.fragment),i=S()},m(e,o){t&&ie(t,e,o),w(e,n,o),r&&ie(r,e,o),w(e,i,o),s=!0},p(e,s){const u={};if(1048602&s&&(u.$$scope={dirty:s,ctx:e}),o!==(o=e[3].tablehead)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}o?(t=new o(a(e)),re(t.$$.fragment),J(t.$$.fragment,1),ie(t,n.parentNode,n)):t=null}else o&&t.$set(u);const h={};if(1048602&s&&(h.$$scope={dirty:s,ctx:e}),l!==(l=e[3].tablebody)){if(r){K();const e=r;Q(e.$$.fragment,1,0,(()=>{se(e,1)})),Y()}l?(r=new l(c(e)),re(r.$$.fragment),J(r.$$.fragment,1),ie(r,i.parentNode,i)):r=null}else l&&r.$set(h)},i(e){s||(t&&J(t.$$.fragment,e),r&&J(r.$$.fragment,e),s=!0)},o(e){t&&Q(t.$$.fragment,e),r&&Q(r.$$.fragment,e),s=!1},d(e){t&&se(t,e),e&&b(n),e&&b(i),r&&se(r,e)}}}function Hh(e){let n,r;const i=[e[5],{renderers:e[3]}];let s={};for(let e=0;e<i.length;e+=1)s=t(s,i[e]);return n=new Kh({props:s}),{c(){re(n.$$.fragment)},m(e,t){ie(n,e,t),r=!0},p(e,t){const r=10&t?te(i,[2&t&&ne(e[5]),8&t&&{renderers:e[3]}]):{};n.$set(r)},i(e){r||(J(n.$$.fragment,e),r=!0)},o(e){Q(n.$$.fragment,e),r=!1},d(e){se(n,e)}}}function Bh(e){let t,n,r,i;const s=[wh,_h],o=[];function a(e,t){return e[0]?e[3][e[0]]?1:-1:0}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=S()},m(e,n){~t&&o[t].m(e,n),w(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?~t&&o[t].p(e,i):(n&&(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){~t&&o[t].d(e),e&&b(r)}}}function Gh(e,n,r){const i=["type","tokens","ordered","renderers"];let s=g(n,i),{type:o}=n,{tokens:a}=n,{ordered:l=!1}=n,{renderers:c}=n;return e.$$set=e=>{n=t(t({},n),function(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}(e)),r(4,s=g(n,i)),"type"in e&&r(0,o=e.type),"tokens"in e&&r(1,a=e.tokens),"ordered"in e&&r(2,l=e.ordered),"renderers"in e&&r(3,c=e.renderers)},[o,a,l,c,s]}class Kh extends le{constructor(e){super(),ae(this,e,Gh,Bh,o,{type:0,tokens:1,ordered:2,renderers:3})}}function Yh(t){let n;return{c(){n=I(t[1])},m(e,t){w(e,n,t)},p(e,t){2&t&&N(n,e[1])},i:e,o:e,d(e){e&&b(n)}}}function Jh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("h6"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):m(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Qh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("h5"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):m(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Zh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("h4"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):m(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Xh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("h3"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):m(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function ed(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("h2"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):m(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function td(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("h1"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):m(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function nd(e){let t,n,r,i;const s=[td,ed,Xh,Zh,Qh,Jh,Yh],o=[];function a(e,t){return 1===e[0]?0:2===e[0]?1:3===e[0]?2:4===e[0]?3:5===e[0]?4:6===e[0]?5:6}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),w(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function rd(e,t,n){let{$$slots:r={},$$scope:i}=t,{depth:s}=t,{raw:o}=t;return e.$$set=e=>{"depth"in e&&n(0,s=e.depth),"raw"in e&&n(1,o=e.raw),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function id(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("p"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function sd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function od(e){let t;const n=e[1].default,r=h(n,e,e[0],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[i]){r&&r.p&&(!t||1&i)&&f(r,n,e,e[0],t?p(n,e[0],i,null):m(e[0]),null)},i(e){t||(J(r,e),t=!0)},o(e){Q(r,e),t=!1},d(e){r&&r.d(e)}}}function ad(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function ld(t){let n,r;return{c(){n=k("img"),c(n.src,r=t[0])||$(n,"src",r),$(n,"title",t[1]),$(n,"alt",t[2])},m(e,t){w(e,n,t)},p(e,[t]){1&t&&!c(n.src,r=e[0])&&$(n,"src",r),2&t&&$(n,"title",e[1]),4&t&&$(n,"alt",e[2])},i:e,o:e,d(e){e&&b(n)}}}function cd(e,t,n){let{href:r=""}=t,{title:i}=t,{text:s=""}=t;return e.$$set=e=>{"href"in e&&n(0,r=e.href),"title"in e&&n(1,i=e.title),"text"in e&&n(2,s=e.text)},[r,i,s]}function ud(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("a"),i&&i.c(),$(t,"href",e[0]),$(t,"title",e[1])},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[s]){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):m(e[2]),null),(!n||1&s)&&$(t,"href",e[0]),(!n||2&s)&&$(t,"title",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function hd(e,t,n){let{$$slots:r={},$$scope:i}=t,{href:s=""}=t,{title:o}=t;return e.$$set=e=>{"href"in e&&n(0,s=e.href),"title"in e&&n(1,o=e.title),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function dd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("em"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function pd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function fd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("del"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function md(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function gd(t){let n,r,i=t[0].replace(/`/g,"")+"";return{c(){n=k("code"),r=I(i)},m(e,t){w(e,n,t),y(n,r)},p(e,[t]){1&t&&i!==(i=e[0].replace(/`/g,"")+"")&&N(r,i)},i:e,o:e,d(e){e&&b(n)}}}function vd(e,t,n){let{raw:r}=t;return e.$$set=e=>{"raw"in e&&n(0,r=e.raw)},[r]}function yd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("strong"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function _d(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function wd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("table"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function bd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function xd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("thead"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function kd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Cd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("tbody"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Id(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Td(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("tr"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Sd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Ed(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("td"),i&&i.c(),$(t,"align",e[1])},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):m(e[2]),null),(!n||2&s)&&$(t,"align",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function $d(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("th"),i&&i.c(),$(t,"align",e[1])},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):m(e[2]),null),(!n||2&s)&&$(t,"align",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Nd(e){let t,n,r,i;const s=[$d,Ed],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),w(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function Rd(e,t,n){let{$$slots:r={},$$scope:i}=t,{header:s}=t,{align:o}=t;return e.$$set=e=>{"header"in e&&n(0,s=e.header),"align"in e&&n(1,o=e.align),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function qd(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("ul"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):m(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Pd(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=k("ol"),i&&i.c(),$(t,"start",e[1])},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):m(e[2]),null),(!n||2&s)&&$(t,"start",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Od(e){let t,n,r,i;const s=[Pd,qd],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),w(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&b(r)}}}function Ad(e,t,n){let{$$slots:r={},$$scope:i}=t,{ordered:s}=t,{start:o}=t;return e.$$set=e=>{"ordered"in e&&n(0,s=e.ordered),"start"in e&&n(1,o=e.start),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function Dd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("li"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function Ld(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Md(t){let n;return{c(){n=k("hr")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function Fd(t){let n,r;return{c(){n=new q,r=S(),n.a=r},m(e,i){n.m(t[0],e,i),w(e,r,i)},p(e,[t]){1&t&&n.p(e[0])},i:e,o:e,d(e){e&&b(r),e&&n.d()}}}function zd(e,t,n){let{text:r}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text)},[r]}function Ud(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=k("blockquote"),i&&i.c()},m(e,r){w(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):m(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&b(t),i&&i.d(e)}}}function jd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Wd(e){let t,n,r;const i=e[2].default,s=h(i,e,e[1],null);return{c(){t=k("pre"),n=k("code"),s&&s.c(),$(t,"class",e[0])},m(e,i){w(e,t,i),y(t,n),s&&s.m(n,null),r=!0},p(e,[n]){s&&s.p&&(!r||2&n)&&f(s,i,e,e[1],r?p(i,e[1],n,null):m(e[1]),null),(!r||1&n)&&$(t,"class",e[0])},i(e){r||(J(s,e),r=!0)},o(e){Q(s,e),r=!1},d(e){e&&b(t),s&&s.d(e)}}}function Vd(e,t,n){let{$$slots:r={},$$scope:i}=t,{lang:s}=t;return e.$$set=e=>{"lang"in e&&n(0,s=e.lang),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}var Hd,Bd=(function(e){function t(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}(Hd={exports:{}},Hd.exports),Hd.exports);const Gd=/[&<>"']/,Kd=/[&<>"']/g,Yd=/[<>"']|&(?!#?\w+;)/,Jd=/[<>"']|&(?!#?\w+;)/g,Qd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zd=e=>Qd[e];const Xd=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function ep(e){return e.replace(Xd,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const tp=/(^|[^\[])\^/g;const np=/[^\w:]/g,rp=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const ip={},sp=/^[^:]+:\/*[^/]*$/,op=/^([^:]+:)[\s\S]*$/,ap=/^([^:]+:\/*[^/]*)[\s\S]*$/;function lp(e,t){ip[" "+e]||(sp.test(e)?ip[" "+e]=e+"/":ip[" "+e]=cp(e,"/",!0));const n=-1===(e=ip[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(op,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(ap,"$1")+t:e+t}function cp(e,t,n){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var up={escape:function(e,t){if(t){if(Gd.test(e))return e.replace(Kd,Zd)}else if(Yd.test(e))return e.replace(Jd,Zd);return e},unescape:ep,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(tp,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(ep(n)).replace(np,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!rp.test(n)&&(n=lp(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:lp,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:cp,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}};const{defaults:hp}=Bd,{rtrim:dp,splitCells:pp,escape:fp,findClosingBracket:mp}=up;function gp(e,t,n){const r=t.href,i=t.title?fp(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:s}:{type:"image",raw:n,href:r,title:i,text:fp(s)}}const{noopTest:vp,edit:yp,merge:_p}=up,wp={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:vp,table:vp,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};wp.def=yp(wp.def).replace("label",wp._label).replace("title",wp._title).getRegex(),wp.bullet=/(?:[*+-]|\d{1,9}[.)])/,wp.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,wp.item=yp(wp.item,"gm").replace(/bull/g,wp.bullet).getRegex(),wp.listItemStart=yp(/^( *)(bull) */).replace("bull",wp.bullet).getRegex(),wp.list=yp(wp.list).replace(/bull/g,wp.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+wp.def.source+")").getRegex(),wp._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",wp._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,wp.html=yp(wp.html,"i").replace("comment",wp._comment).replace("tag",wp._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wp.paragraph=yp(wp._paragraph).replace("hr",wp.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wp._tag).getRegex(),wp.blockquote=yp(wp.blockquote).replace("paragraph",wp.paragraph).getRegex(),wp.normal=_p({},wp),wp.gfm=_p({},wp.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),wp.gfm.nptable=yp(wp.gfm.nptable).replace("hr",wp.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wp._tag).getRegex(),wp.gfm.table=yp(wp.gfm.table).replace("hr",wp.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wp._tag).getRegex(),wp.pedantic=_p({},wp.normal,{html:yp("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",wp._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vp,paragraph:yp(wp.normal._paragraph).replace("hr",wp.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",wp.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const bp={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:vp,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:vp,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};bp.punctuation=yp(bp.punctuation).replace(/punctuation/g,bp._punctuation).getRegex(),bp.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,bp.escapedEmSt=/\\\*|\\_/g,bp._comment=yp(wp._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),bp.emStrong.lDelim=yp(bp.emStrong.lDelim).replace(/punct/g,bp._punctuation).getRegex(),bp.emStrong.rDelimAst=yp(bp.emStrong.rDelimAst,"g").replace(/punct/g,bp._punctuation).getRegex(),bp.emStrong.rDelimUnd=yp(bp.emStrong.rDelimUnd,"g").replace(/punct/g,bp._punctuation).getRegex(),bp._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,bp._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,bp._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,bp.autolink=yp(bp.autolink).replace("scheme",bp._scheme).replace("email",bp._email).getRegex(),bp._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,bp.tag=yp(bp.tag).replace("comment",bp._comment).replace("attribute",bp._attribute).getRegex(),bp._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,bp._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,bp._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,bp.link=yp(bp.link).replace("label",bp._label).replace("href",bp._href).replace("title",bp._title).getRegex(),bp.reflink=yp(bp.reflink).replace("label",bp._label).getRegex(),bp.reflinkSearch=yp(bp.reflinkSearch,"g").replace("reflink",bp.reflink).replace("nolink",bp.nolink).getRegex(),bp.normal=_p({},bp),bp.pedantic=_p({},bp.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:yp(/^!?\[(label)\]\((.*?)\)/).replace("label",bp._label).getRegex(),reflink:yp(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bp._label).getRegex()}),bp.gfm=_p({},bp.normal,{escape:yp(bp.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),bp.gfm.url=yp(bp.gfm.url,"i").replace("email",bp.gfm._extended_email).getRegex(),bp.breaks=_p({},bp.gfm,{br:yp(bp.br).replace("{2,}","*").getRegex(),text:yp(bp.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var xp={block:wp,inline:bp};const{defaults:kp}=Bd,{block:Cp,inline:Ip}=xp,{repeatString:Tp}=up;function Sp(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ep(e){let t,n,r="";const i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}var $p=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||kp,this.options.tokenizer=this.options.tokenizer||new class{constructor(e){this.options=e||hp}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:dp(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=dp(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e}}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:pp(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,n=e.align.length;for(t=0;t<n;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(n=e.cells.length,t=0;t<n;t++)e.cells[t]=pp(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const n=t[2],r=n.length>1,i={type:"list",raw:e,ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]},s=t[0].match(this.rules.block.item);let o,a,l,c,u,h,d,p,f,m=!1,g=s.length;l=this.rules.block.listItemStart.exec(s[0]);for(let t=0;t<g;t++){if(o=s[t],e=o,this.options.pedantic||(f=o.match(new RegExp("\\n\\s*\\n {0,"+(l[0].length-1)+"}\\S")),f&&(u=o.length-f.index+s.slice(t+1).join("\n").length,i.raw=i.raw.substring(0,i.raw.length-u),o=o.substring(0,f.index),e=o,g=t+1)),t!==g-1){if(c=this.rules.block.listItemStart.exec(s[t+1]),this.options.pedantic?c[1].length>l[1].length:c[1].length>=l[0].length||c[1].length>3){s.splice(t,2,s[t]+(!this.options.pedantic&&c[1].length<l[0].length&&!s[t].match(/\n$/)?"":"\n")+s[t+1]),t--,g--;continue}(!this.options.pedantic||this.options.smartLists?c[2][c[2].length-1]!==n[n.length-1]:r===(1===c[2].length))&&(u=s.slice(t+1).join("\n").length,i.raw=i.raw.substring(0,i.raw.length-u),t=g-1),l=c}a=o.length,o=o.replace(/^ *([*+-]|\d+[.)]) ?/,""),~o.indexOf("\n ")&&(a-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+a+"}","gm"),"")),o=dp(o,"\n"),t!==g-1&&(e+="\n"),h=m||/\n\n(?!\s*$)/.test(e),t!==g-1&&(m="\n\n"===e.slice(-2),h||(h=m)),h&&(i.loose=!0),this.options.gfm&&(d=/^\[[ xX]\] /.test(o),p=void 0,d&&(p=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:e,task:d,checked:p,loose:h,text:o})}return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):fp(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:pp(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r=e.align.length;for(n=0;n<r;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(r=e.cells.length,n=0;n<r;n++)e.cells[n]=pp(e.cells[n].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:fp(t[1])}}tag(e,t,n){const r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):fp(r[0]):r[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=dp(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=mp(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),gp(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0])}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return gp(n,e,n[0])}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let i,s,o=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));)if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],i)if(s=i.length,r[3]||r[4])o+=s;else if(!((r[5]||r[6])&&n%3)||(n+s)%3){if(o-=s,!(o>0))return s=Math.min(s,s+o+a),Math.min(n,s)%2?{type:"em",raw:e.slice(0,n+r.index+s+1),text:e.slice(1,n+r.index+s)}:{type:"strong",raw:e.slice(0,n+r.index+s+1),text:e.slice(2,n+r.index+s-1)}}else a+=s}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=fp(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=fp(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=fp(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=fp(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=fp(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,n){const r=this.rules.inline.text.exec(e);if(r){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):fp(r[0]):r[0]:fp(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}},this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:Cp.normal,inline:Ip.normal};this.options.pedantic?(t.block=Cp.pedantic,t.inline=Ip.pedantic):this.options.gfm&&(t.block=Cp.gfm,this.options.breaks?t.inline=Ip.breaks:t.inline=Ip.gfm),this.tokenizer.rules=t}static get rules(){return{block:Cp,inline:Ip}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],n=!0){let r,i,s,o,a,l;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(r=n.call(this,e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),o=t[t.length-1],o&&"paragraph"===o.type?(o.raw+="\n"+r.raw,o.text+="\n"+r.text):t.push(r);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(a=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call(this,n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(n&&(r=this.tokenizer.paragraph(a)))o=t[t.length-1],l&&"paragraph"===o.type?(o.raw+="\n"+r.raw,o.text+="\n"+r.text):t.push(r),l=a.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),o=t[t.length-1],o&&"text"===o.type?(o.raw+="\n"+r.raw,o.text+="\n"+r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}inline(e){let t,n,r,i,s,o;const a=e.length;for(t=0;t<a;t++)switch(o=e[t],o.type){case"paragraph":case"text":case"heading":o.tokens=[],this.inlineTokens(o.text,o.tokens);break;case"table":for(o.tokens={header:[],cells:[]},i=o.header.length,n=0;n<i;n++)o.tokens.header[n]=[],this.inlineTokens(o.header[n],o.tokens.header[n]);for(i=o.cells.length,n=0;n<i;n++)for(s=o.cells[n],o.tokens.cells[n]=[],r=0;r<s.length;r++)o.tokens.cells[n][r]=[],this.inlineTokens(s[r],o.tokens.cells[n][r]);break;case"blockquote":this.inline(o.tokens);break;case"list":for(i=o.items.length,n=0;n<i;n++)this.inline(o.items[n].tokens)}return e}inlineTokens(e,t=[],n=!1,r=!1){let i,s,o,a,l,c,u=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(u));)e.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,a.index)+"["+Tp("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(u));)u=u.slice(0,a.index)+"["+Tp("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(u));)u=u.slice(0,a.index)+"++"+u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(i=n.call(this,e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,s=t[t.length-1],s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),s=t[t.length-1],"link"===i.type?(i.tokens=this.inlineTokens(i.text,[],!0,r),t.push(i)):s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(i=this.tokenizer.emStrong(e,u,c))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,Ep))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,Ep))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call(this,n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(o,r,Sp))e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(c=i.raw.slice(-1)),l=!0,s=t[t.length-1],s&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(i.raw.length),t.push(i);return t}};const Np={heading:class extends le{constructor(e){super(),ae(this,e,rd,nd,o,{depth:0,raw:1})}},paragraph:class extends le{constructor(e){super(),ae(this,e,sd,id,o,{})}},text:class extends le{constructor(e){super(),ae(this,e,ad,od,o,{})}},image:class extends le{constructor(e){super(),ae(this,e,cd,ld,o,{href:0,title:1,text:2})}},link:class extends le{constructor(e){super(),ae(this,e,hd,ud,o,{href:0,title:1})}},em:class extends le{constructor(e){super(),ae(this,e,pd,dd,o,{})}},strong:class extends le{constructor(e){super(),ae(this,e,_d,yd,o,{})}},codespan:class extends le{constructor(e){super(),ae(this,e,vd,gd,o,{raw:0})}},del:class extends le{constructor(e){super(),ae(this,e,md,fd,o,{})}},table:class extends le{constructor(e){super(),ae(this,e,bd,wd,o,{})}},tablehead:class extends le{constructor(e){super(),ae(this,e,kd,xd,o,{})}},tablebody:class extends le{constructor(e){super(),ae(this,e,Id,Cd,o,{})}},tablerow:class extends le{constructor(e){super(),ae(this,e,Sd,Td,o,{})}},tablecell:class extends le{constructor(e){super(),ae(this,e,Rd,Nd,o,{header:0,align:1})}},list:class extends le{constructor(e){super(),ae(this,e,Ad,Od,o,{ordered:0,start:1})}},orderedlistitem:null,unorderedlistitem:null,listitem:class extends le{constructor(e){super(),ae(this,e,Ld,Dd,o,{})}},hr:class extends le{constructor(e){super(),ae(this,e,null,Md,o,{})}},html:class extends le{constructor(e){super(),ae(this,e,zd,Fd,o,{text:0})}},blockquote:class extends le{constructor(e){super(),ae(this,e,jd,Ud,o,{})}},code:class extends le{constructor(e){super(),ae(this,e,Vd,Wd,o,{lang:0})}}},Rp={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function qp(e){let t,n;return t=new Kh({props:{tokens:e[0],renderers:e[1]}}),{c(){re(t.$$.fragment)},m(e,r){ie(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.tokens=e[0]),2&n&&(r.renderers=e[1]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function Pp(e,t,n){let r,i,s,{source:o=""}=t,{renderers:a={}}=t,{options:l={}}=t;return e.$$set=e=>{"source"in e&&n(2,o=e.source),"renderers"in e&&n(3,a=e.renderers),"options"in e&&n(4,l=e.options)},e.$$.update=()=>{52&e.$$.dirty&&(n(5,i=new $p({...Rp,...l})),n(0,s=i.lex(o))),8&e.$$.dirty&&n(1,r={...Np,...a})},[s,r,o,a,l,i]}class Op extends le{constructor(e){super(),ae(this,e,Pp,qp,o,{source:2,renderers:3,options:4})}}function Ap(e){_(e,"svelte-1qhuufr",'.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::before,.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::after{box-sizing:border-box}button.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{text-transform:none}button.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,[type=\'button\'].svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{-webkit-appearance:button}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::-moz-focus-inner{border-style:none;padding:0}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:-moz-focusring{outline:1px dotted ButtonText}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:-moz-ui-invalid{box-shadow:none}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::-webkit-inner-spin-button,.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::-webkit-outer-spin-button{height:auto}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::-webkit-search-decoration{-webkit-appearance:none}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h4.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,p.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{margin:0}button.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{background-color:transparent;background-image:none}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::before,.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}img.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{border-style:solid}textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{resize:vertical}textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::-moz-placeholder{opacity:1;color:#9ca3af}textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::placeholder{opacity:1;color:#9ca3af}button.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{cursor:pointer}h4.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-size:inherit;font-weight:inherit}a.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{color:inherit;text-decoration:inherit}button.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{padding:0;line-height:inherit;color:inherit}img.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,svg.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{display:block;vertical-align:middle}img.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{max-width:100%;height:auto}.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr,.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::before,.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.form-textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}.form-textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}.form-textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::-moz-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:-ms-input-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr::placeholder{color:#6b7280;opacity:1}.prose.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{color:#374151;max-width:65ch}.prose.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-size:1rem;line-height:1.75}.mx-4.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{margin-left:1rem;margin-right:1rem}.mt-4.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{margin-top:1rem}.mt-16.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{margin-top:4rem}.mb-2.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{margin-bottom:0.5rem}.flex.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{display:flex}.h-28.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{height:7rem}.h-12.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{height:3rem}.h-6.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{height:1.5rem}.w-full.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{width:100%}.w-12.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{width:3rem}.w-6.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{width:1.5rem}.max-w-none.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{max-width:none}.flex-grow.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{flex-grow:1}.flex-col.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{flex-direction:column}.items-center.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{align-items:center}.justify-end.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{justify-content:flex-end}.gap-2.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{gap:0.5rem}.gap-4.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{gap:1rem}.space-x-4.svelte-1qhuufr>.svelte-1qhuufr:not([hidden])~.svelte-1qhuufr:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-8.svelte-1qhuufr>.svelte-1qhuufr:not([hidden])~.svelte-1qhuufr:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.self-end.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{align-self:flex-end}.rounded-md.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{border-radius:0.375rem}.rounded-full.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{border-radius:9999px}.border-gray-300.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.bg-gray-100.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-primary-100.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.bg-primary-50.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.py-1.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{padding-top:0.25rem;padding-bottom:0.25rem}.px-6.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{padding-left:1.5rem;padding-right:1.5rem}.py-4.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{padding-top:1rem;padding-bottom:1rem}.px-4.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{padding-left:1rem;padding-right:1rem}.px-2.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{padding-left:0.5rem;padding-right:0.5rem}.py-2.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{padding-top:0.5rem;padding-bottom:0.5rem}.font-sans.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-base.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-size:1rem;line-height:1.5rem}.text-lg.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-size:1.125rem;line-height:1.75rem}.font-medium.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-weight:500}.font-normal.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-weight:400}.font-semibold.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{font-weight:600}.text-gray-600.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-primary-800.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.text-primary-500.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.text-gray-400.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-red-600.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.text-pink-600.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.primary-btn.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe;--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.primary-btn.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity));--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0));--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0));--tw-gradient-to:#ddd6fe}.primary-btn.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:disabled{cursor:not-allowed;opacity:0.7}.primary-btn.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe}.hover\\:bg-primary-200.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:bg-red-100\\/60.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:bg-pink-100\\/60.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:underline.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:hover{text-decoration:underline}.disabled\\:cursor-not-allowed.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:disabled{cursor:not-allowed}.disabled\\:bg-gray-100.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:text-gray-600.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:hover\\:bg-gray-100.svelte-1qhuufr.svelte-1qhuufr.svelte-1qhuufr:disabled:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}')}function Dp(e,t,n){const r=e.slice();return r[26]=t[n],r}function Lp(t){let n,r,i,s,o,a,l,c;return{c(){n=k("label"),r=k("p"),r.textContent="Add a comment (markdown is supported)",i=T(),s=k("textarea"),$(r,"class","text-gray-600 dark:!text-gray-200 svelte-1qhuufr"),$(s,"class","border-gray-300 dark:!border-gray-600 dark:!bg-gray-800 rounded-md w-full form-textarea font-sans h-28 disabled:cursor-not-allowed svelte-1qhuufr"),$(s,"placeholder",o=t[0].user?"Write your thoughts...":"Login to leave a comment"),s.disabled=a=!t[0].user,$(n,"class","svelte-1qhuufr")},m(e,o){w(e,n,o),y(n,r),y(n,i),y(n,s),R(s,t[4]),l||(c=E(s,"input",t[14]),l=!0)},p(e,t){1&t&&o!==(o=e[0].user?"Write your thoughts...":"Login to leave a comment")&&$(s,"placeholder",o),1&t&&a!==(a=!e[0].user)&&(s.disabled=a),16&t&&R(s,e[4])},i:e,o:e,d(e){e&&b(n),l=!1,c()}}}function Mp(e){let t,n,r,i,s;return i=new Op({props:{source:e[4]||"Nothing to preview"}}),{c(){t=k("p"),t.textContent="Add a comment (markdown is supported)",n=T(),r=k("p"),re(i.$$.fragment),$(t,"class","text-gray-600 dark:!text-gray-200 svelte-1qhuufr"),$(r,"class","text-base prose dark:!prose-dark max-w-none dark:!text-white bg-gray-100 dark:!bg-gray-700 px-6 py-4 svelte-1qhuufr")},m(e,o){w(e,t,o),w(e,n,o),w(e,r,o),ie(i,r,null),s=!0},p(e,t){const n={};16&t&&(n.source=e[4]||"Nothing to preview"),i.$set(n)},i(e){s||(J(i.$$.fragment,e),s=!0)},o(e){Q(i.$$.fragment,e),s=!1},d(e){e&&b(t),e&&b(n),e&&b(r),se(i)}}}function Fp(e){let t,n,r,i,s,o,a,l,c,u,h,d,p=(e[3]?e[2].length:"-")+"",f=e[3]&&1==e[2].length?"comment":"comments",m=[],g=new Map,v=e[2];const _=e=>e[26].id;for(let t=0;t<v.length;t+=1){let n=Dp(e,v,t),r=_(n);g.set(r,m[t]=Wp(r,n))}return{c(){t=k("div"),n=I(p),r=I(" "),i=T(),s=I(f),o=T(),a=k("span"),a.textContent="|",l=T(),c=k("em"),c.innerHTML='Powered by\n        <a href="https://github.com/maggie-j-liu/reactive" rel="noreferrer" target="_blank" class="text-primary-500 font-medium hover:underline svelte-1qhuufr">Reactive</a>',u=T(),h=k("div");for(let e=0;e<m.length;e+=1)m[e].c();$(a,"class","mx-4 text-lg svelte-1qhuufr"),$(c,"class","text-gray-600 dark:!text-gray-300 svelte-1qhuufr"),$(t,"class","mt-4 svelte-1qhuufr"),$(h,"class","space-y-8 svelte-1qhuufr")},m(e,p){w(e,t,p),y(t,n),y(t,r),y(t,i),y(t,s),y(t,o),y(t,a),y(t,l),y(t,c),w(e,u,p),w(e,h,p);for(let e=0;e<m.length;e+=1)m[e].m(h,null);d=!0},p(e,t){(!d||12&t)&&p!==(p=(e[3]?e[2].length:"-")+"")&&N(n,p),(!d||12&t)&&f!==(f=e[3]&&1==e[2].length?"comment":"comments")&&N(s,f),6949&t&&(v=e[2],K(),m=ee(m,t,_,1,e,v,g,h,X,Wp,null,Dp),Y())},i(e){if(!d){for(let e=0;e<v.length;e+=1)J(m[e]);d=!0}},o(e){for(let e=0;e<m.length;e+=1)Q(m[e]);d=!1},d(e){e&&b(t),e&&b(u),e&&b(h);for(let e=0;e<m.length;e+=1)m[e].d()}}}function zp(e){let t,n,r;function i(){return e[17](e[26])}return{c(){t=k("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" h-6 w-6 text-red-600 dark:!text-red-500 svelte-1qhuufr"><polyline points="3 6 5 6 21 6" class="svelte-1qhuufr"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" class="svelte-1qhuufr"></path><line x1="10" y1="11" x2="10" y2="17" class="svelte-1qhuufr"></line><line x1="14" y1="11" x2="14" y2="17" class="svelte-1qhuufr"></line></svg>',$(t,"class","hover:bg-red-100/60 dark:hover:!bg-red-500/25 px-2 py-2 rounded-full svelte-1qhuufr")},m(e,s){w(e,t,s),n||(r=E(t,"click",i),n=!0)},p(t,n){e=t},d(e){e&&b(t),n=!1,r()}}}function Up(e){let t,n,r,i,s,o=(e[26].likes??0)+"";return{c(){t=k("div"),n=C("svg"),r=C("path"),i=T(),s=I(o),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-1qhuufr"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","h-6 w-6 text-pink-600 svelte-1qhuufr"),$(t,"class","px-2 py-2 flex text-pink-600 font-semibold gap-2 items-center svelte-1qhuufr")},m(e,o){w(e,t,o),y(t,n),y(n,r),y(t,i),y(t,s)},p(e,t){4&t&&o!==(o=(e[26].likes??0)+"")&&N(s,o)},d(e){e&&b(t)}}}function jp(e){let t,n,r,i,s,o,a,l,c=(e[26].likes??0)+"";function u(){return e[18](e[26])}return{c(){t=k("button"),n=C("svg"),r=C("path"),s=T(),o=I(c),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-1qhuufr"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill",i=e[8].includes(e[26].id)?"currentColor":"none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","h-6 w-6 text-pink-600 dark:!text-pink-400 svelte-1qhuufr"),$(t,"class","px-2 py-2 rounded-full hover:bg-pink-100/60 dark:hover:!bg-pink-400/20 flex text-pink-600 dark:!text-pink-400 font-semibold gap-2 items-center svelte-1qhuufr")},m(e,i){w(e,t,i),y(t,n),y(n,r),y(t,s),y(t,o),a||(l=E(t,"click",u),a=!0)},p(t,r){e=t,260&r&&i!==(i=e[8].includes(e[26].id)?"currentColor":"none")&&$(n,"fill",i),4&r&&c!==(c=(e[26].likes??0)+"")&&N(o,c)},d(e){e&&b(t),a=!1,l()}}}function Wp(e,t){let n,r,i,s,o,a,l,u,h,d,p,f,m,g,v,_,x,C,S,E,R=t[5][t[26].user].name+"",q=t[9].format(t[26].timestamp)+"";v=new Op({props:{source:t[26].text}});let P=t[0].user&&t[26].user==t[0].user.uid&&zp(t);function O(e,t){return e[0].user?jp:Up}let A=O(t),D=A(t);return{key:e,first:null,c(){n=k("div"),r=k("img"),o=T(),a=k("div"),l=k("h4"),u=I(R),h=T(),d=k("span"),p=I("commented "),f=I(q),m=T(),g=k("p"),re(v.$$.fragment),_=T(),x=k("div"),P&&P.c(),C=T(),D.c(),S=T(),c(r.src,i=t[5][t[26].user].photo)||$(r,"src",i),$(r,"alt",s=t[5][t[26].user].name+"'s profile picture"),$(r,"class","h-12 w-12 rounded-full svelte-1qhuufr"),$(d,"class","text-base text-gray-400 font-normal svelte-1qhuufr"),$(l,"class","text-lg text-primary-800 dark:!text-primary-300 mb-2 font-medium svelte-1qhuufr"),$(g,"class","text-base prose dark:!prose-dark max-w-none dark:!text-white svelte-1qhuufr"),$(x,"class","w-full flex justify-end items-center gap-2 svelte-1qhuufr"),$(a,"class","bg-primary-50 dark:!bg-gray-700 flex-grow px-6 py-4 svelte-1qhuufr"),$(n,"class","flex gap-4 svelte-1qhuufr"),this.first=n},m(e,t){w(e,n,t),y(n,r),y(n,o),y(n,a),y(a,l),y(l,u),y(l,h),y(l,d),y(d,p),y(d,f),y(a,m),y(a,g),ie(v,g,null),y(a,_),y(a,x),P&&P.m(x,null),y(x,C),D.m(x,null),y(n,S),E=!0},p(e,n){t=e,(!E||36&n&&!c(r.src,i=t[5][t[26].user].photo))&&$(r,"src",i),(!E||36&n&&s!==(s=t[5][t[26].user].name+"'s profile picture"))&&$(r,"alt",s),(!E||36&n)&&R!==(R=t[5][t[26].user].name+"")&&N(u,R),(!E||4&n)&&q!==(q=t[9].format(t[26].timestamp)+"")&&N(f,q);const o={};4&n&&(o.source=t[26].text),v.$set(o),t[0].user&&t[26].user==t[0].user.uid?P?P.p(t,n):(P=zp(t),P.c(),P.m(x,C)):P&&(P.d(1),P=null),A===(A=O(t))&&D?D.p(t,n):(D.d(1),D=A(t),D&&(D.c(),D.m(x,null)))},i(e){E||(J(v.$$.fragment,e),E=!0)},o(e){Q(v.$$.fragment,e),E=!1},d(e){e&&b(n),se(v),P&&P.d(),D.d()}}}function Vp(e){let t,n,r,s,o,a,l,c,u,h,d,p,f,m,g,v,_=e[7]?"Edit":"Preview";const x=[Mp,Lp],C=[];function S(e,t){return e[7]?0:1}n=S(e),r=C[n]=x[n](e);let R=e[6]&&Fp(e);return{c(){t=k("div"),r.c(),s=T(),o=k("div"),a=k("button"),l=I(_),u=T(),h=k("button"),d=I("Submit"),f=T(),R&&R.c(),$(a,"class","dark:!bg-primary-600 dark:hover:!bg-primary-500 dark:disabled:!bg-gray-500 dark:!text-white dark:disabled:!text-gray-300 text-lg bg-primary-100 hover:bg-primary-200 text-primary-800 px-4 py-1 rounded-md disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-600 svelte-1qhuufr"),a.disabled=c=!e[0].user||!e[4],$(h,"type","button"),$(h,"class","dark:!from-primary-600 dark:hover:!from-primary-500 dark:disabled:hover:!from-primary-600 dark:!via-blue-500 dark:hover:!via-blue-400 dark:disabled:hover:!via-blue-500 dark:!to-purple-600 dark:hover:!to-purple-500 dark:disabled:hover:!to-purple-600 dark:!text-white text-lg primary-btn px-4 py-1 svelte-1qhuufr"),h.disabled=p=!e[0].user||!e[4],$(o,"class","self-end space-x-4 svelte-1qhuufr"),$(t,"class","flex flex-col gap-4 mt-16 text-base w-full svelte-1qhuufr")},m(r,i){w(r,t,i),C[n].m(t,null),y(t,s),y(t,o),y(o,a),y(a,l),y(o,u),y(o,h),y(h,d),y(t,f),R&&R.m(t,null),m=!0,g||(v=[E(a,"click",e[15]),E(h,"click",e[16])],g=!0)},p(e,[i]){let o=n;n=S(e),n===o?C[n].p(e,i):(K(),Q(C[o],1,1,(()=>{C[o]=null})),Y(),r=C[n],r?r.p(e,i):(r=C[n]=x[n](e),r.c()),J(r,1),r.m(t,s)),(!m||128&i)&&_!==(_=e[7]?"Edit":"Preview")&&N(l,_),(!m||17&i&&c!==(c=!e[0].user||!e[4]))&&(a.disabled=c),(!m||17&i&&p!==(p=!e[0].user||!e[4]))&&(h.disabled=p),e[6]?R?(R.p(e,i),64&i&&J(R,1)):(R=Fp(e),R.c(),J(R,1),R.m(t,null)):R&&(K(),Q(R,1,1,(()=>{R=null})),Y())},i(e){m||(J(r),J(R),m=!0)},o(e){Q(r),Q(R),m=!1},d(e){e&&b(t),C[n].d(),R&&R.d(),g=!1,i(v)}}}function Hp(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s())),ch.addDefaultLocale(dh);const o=new ch("en-US");let a,l,c,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=dc();a=e.authStore,s(),s=u(a,(e=>r(0,i=e))),l=e.loginWithGoogle,c=e.logout}catch(e){throw e}const d=ac();let p=[],f=!1,m="",g={},v=!1,y=!1,_=[];O((()=>{nc(Yl(d,"users/info"),(e=>{r(5,g=e.val()??{}),r(6,v=!0)}),{onlyOnce:!0})}));const w=()=>{if(!i.user||!m)return;const e=`posts/${wc(h)}/comments`,t=function(e,t){e=Ge(e),pl("push",e._path),cl("push",t,e._path,!0);const n=kl(e._repo),r=Us(n),i=Jl(e,r),s=Jl(e,r);let o;return o=null!=t?Ql(s,t).then((()=>s)):Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}(Yl(d,e),{user:i.user.uid,text:m,timestamp:lc,likes:0}).key;r(2,p=[{id:t,user:i.user.uid,text:m,timestamp:Date.now(),likes:0},...p]),r(4,m=""),r(7,y=!1)},b=async e=>{i.user&&e.user==i.user.uid&&(await Ql(Yl(d,`posts/${wc(h)}/comments/${e.id}`),null),r(2,p=p.filter((t=>t.id!==e.id))))},x=async e=>{_.includes(e.id)?(async e=>{if(!i.user)return;const t={};t[`posts/${wc(h)}/comments/${e.id}/likes`]=cc(-1),t[`users/activity/${i.user.uid}/${wc(h)}/commentLikes/${e.id}`]=null,await Zl(Yl(d),t),e.likes--,r(2,p=[...p]),r(8,_=_.filter((t=>t!==e.id)))})(e):(async e=>{if(!i.user)return;const t={};t[`posts/${wc(h)}/comments/${e.id}/likes`]=cc(1),t[`users/activity/${i.user.uid}/${wc(h)}/commentLikes/${e.id}`]=!0,await Zl(Yl(d),t),e.likes++,r(2,p=[...p]),r(8,_=[..._,e.id])})(e)};return t.$$set=e=>{"page"in e&&r(13,h=e.page)},t.$$.update=()=>{if(8193&t.$$.dirty){nc(function(e,...t){let n=Ge(e);for(const e of t)n=e._apply(n);return n}(Yl(d,`posts/${wc(h)}/comments`),function(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return dl("orderByChild","path",e,!1),new rc(e)}("timestamp")),(e=>{var t;t=Object.entries(e.val()??{}).map((([e,t])=>({id:e,...t}))).reverse(),r(2,p=t),r(3,f=!0)}),{onlyOnce:!0}),i.user?nc(Yl(d,`users/activity/${i.user.uid}/${wc(h)}/commentLikes`),(e=>{var t;t=e.val()??{},r(8,_=Object.keys(t))}),{onlyOnce:!0}):r(8,_=[])}},[i,a,p,f,m,g,v,y,_,o,w,b,x,h,function(){m=this.value,r(4,m)},()=>{r(7,y=!y)},()=>w(),e=>b(e),e=>x(e)]}class Bp extends le{constructor(e){super(),ae(this,e,Hp,Vp,o,{page:13},Ap)}}function Gp(e){_(e,"svelte-k0vngj",'.fixed{position:fixed}.top-6{top:1.5rem}.right-6{right:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-16{margin-top:4rem;margin-bottom:4rem}.mx-4{margin-left:1rem;margin-right:1rem}.mt-4{margin-top:1rem}.mt-16{margin-top:4rem}.mb-2{margin-bottom:0.5rem}.mt-8{margin-top:2rem}.mr-2{margin-right:0.5rem}.flex{display:flex}.h-9{height:2.25rem}.h-28{height:7rem}.h-12{height:3rem}.h-6{height:1.5rem}.h-4{height:1rem}.w-full{width:100%}.w-12{width:3rem}.w-6{width:1.5rem}.w-4{width:1rem}.max-w-none{max-width:none}.flex-grow{flex-grow:1}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.gap-10{gap:2.5rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.self-end{align-self:flex-end}.rounded-md{border-radius:0.375rem}.rounded-full{border-radius:9999px}.\\!rounded-lg{border-radius:0.5rem !important}.border-gray-300{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-primary-100{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.bg-primary-50{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.bg-primary-200{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-primary-100{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.via-blue-100{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.to-purple-100{--tw-gradient-to:#ede9fe}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.\\!px-3{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!py-1\\.5{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!py-1{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.font-sans{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.text-primary-600{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.text-primary-900{--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-primary-800{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.text-primary-500{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-red-600{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.text-pink-600{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!ring-primary-500{--tw-ring-opacity:1 !important;--tw-ring-color:rgba(14, 165, 233, var(--tw-ring-opacity)) !important}.filter{filter:var(--tw-filter)}.prose{color:#374151;max-width:65ch}.prose [class~="lead"]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#111827;text-decoration:underline;font-weight:500}.prose strong{color:#111827;font-weight:600}.prose ol[type="A"]{--list-counter-style:upper-alpha}.prose ol[type="a"]{--list-counter-style:lower-alpha}.prose ol[type="A" s]{--list-counter-style:upper-alpha}.prose ol[type="a" s]{--list-counter-style:lower-alpha}.prose ol[type="I"]{--list-counter-style:upper-roman}.prose ol[type="i"]{--list-counter-style:lower-roman}.prose ol[type="I" s]{--list-counter-style:upper-roman}.prose ol[type="i" s]{--list-counter-style:lower-roman}.prose ol[type="1"]{--list-counter-style:decimal}.prose ol>li{position:relative;padding-left:1.75em}.prose ol>li::before{content:counter(list-item, var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#6b7280;left:0}.prose ul>li{position:relative;padding-left:1.75em}.prose ul>li::before{content:"";position:absolute;background-color:#d1d5db;border-radius:50%;width:0.375em;height:0.375em;top:calc(0.875em - 0.1875em);left:0.25em}.prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose blockquote{font-weight:500;font-style:italic;color:#111827;border-left-width:0.25rem;border-left-color:#e5e7eb;quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.prose blockquote p:first-of-type::before{content:open-quote}.prose blockquote p:last-of-type::after{content:close-quote}.prose h1{color:#111827;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111}.prose h2{color:#111827;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h3{color:#111827;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6}.prose h4{color:#111827;font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5}.prose figure figcaption{color:#6b7280;font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em}.prose code{color:#111827;font-weight:600;font-size:0.875em}.prose code::before{content:"`"}.prose code::after{content:"`"}.prose a code{color:#111827}.prose pre{color:#e5e7eb;background-color:#1f2937;overflow-x:auto;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em}.prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose pre code::before{content:none}.prose pre code::after{content:none}.prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857}.prose thead{color:#111827;font-weight:600;border-bottom-width:1px;border-bottom-color:#d1d5db}.prose thead th{vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.prose tbody tr:last-child{border-bottom-width:0}.prose tbody td{vertical-align:top;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25em;margin-bottom:1.25em}.prose img{margin-top:2em;margin-bottom:2em}.prose video{margin-top:2em;margin-bottom:2em}.prose figure{margin-top:2em;margin-bottom:2em}.prose figure>*{margin-top:0;margin-bottom:0}.prose h2 code{font-size:0.875em}.prose h3 code{font-size:0.9em}.prose ol{margin-top:1.25em;margin-bottom:1.25em}.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:0.5em;margin-bottom:0.5em}.prose>ul>li p{margin-top:0.75em;margin-bottom:0.75em}.prose>ul>li>*:first-child{margin-top:1.25em}.prose>ul>li>*:last-child{margin-bottom:1.25em}.prose>ol>li>*:first-child{margin-top:1.25em}.prose>ol>li>*:last-child{margin-bottom:1.25em}.prose ul ul,.prose ul ol,.prose ol ul,.prose ol ol{margin-top:0.75em;margin-bottom:0.75em}.prose hr+*{margin-top:0}.prose h2+*{margin-top:0}.prose h3+*{margin-top:0}.prose h4+*{margin-top:0}.prose thead th:first-child{padding-left:0}.prose thead th:last-child{padding-right:0}.prose tbody td:first-child{padding-left:0}.prose tbody td:last-child{padding-right:0}.prose>:first-child{margin-top:0}.prose>:last-child{margin-bottom:0}.hover\\:bg-primary-100:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.hover\\:bg-primary-200:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:bg-red-100\\/60:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:bg-pink-100\\/60:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:bg-primary-50:hover{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.hover\\:from-primary-200:hover{--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0))}.hover\\:via-blue-200:hover{--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0))}.hover\\:to-purple-200:hover{--tw-gradient-to:#ddd6fe}.hover\\:underline:hover{text-decoration:underline}.hover\\:\\!shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!ring-2:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-gray-100:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:text-gray-600:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:opacity-70:disabled{opacity:0.7}.disabled\\:hover\\:bg-gray-100:disabled:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:hover\\:from-primary-100:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.disabled\\:hover\\:via-blue-100:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.dark .dark\\:\\!prose-dark{color:#fff !important}.dark .dark\\:\\!prose-dark blockquote{color:inherit !important}.dark .dark\\:\\!prose-dark strong{color:inherit !important}.dark .dark\\:\\!prose-dark code{font-weight:inherit !important}.dark .dark\\:\\!border-gray-600{--tw-border-opacity:1 !important;border-color:rgba(75, 85, 99, var(--tw-border-opacity)) !important}.dark .dark\\:\\!bg-gray-700{--tw-bg-opacity:1 !important;background-color:rgba(55, 65, 81, var(--tw-bg-opacity)) !important}.dark .dark\\:\\!bg-gray-800{--tw-bg-opacity:1 !important;background-color:rgba(31, 41, 55, var(--tw-bg-opacity)) !important}.dark .dark\\:\\!bg-primary-600{--tw-bg-opacity:1 !important;background-color:rgba(2, 132, 199, var(--tw-bg-opacity)) !important}.dark .dark\\:\\!bg-primary-800{--tw-bg-opacity:1 !important;background-color:rgba(7, 89, 133, var(--tw-bg-opacity)) !important}.dark .dark\\:from-primary-600{--tw-gradient-from:#0284c7;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0))}.dark .dark\\:\\!from-primary-600{--tw-gradient-from:#0284c7 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0)) !important}.dark .dark\\:via-blue-500{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0))}.dark .dark\\:\\!via-blue-500{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0)) !important}.dark .dark\\:to-purple-600{--tw-gradient-to:#7c3aed}.dark .dark\\:\\!to-purple-600{--tw-gradient-to:#7c3aed !important}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.dark .dark\\:text-primary-400{--tw-text-opacity:1;color:rgba(56, 189, 248, var(--tw-text-opacity))}.dark .dark\\:\\!text-gray-200{--tw-text-opacity:1 !important;color:rgba(229, 231, 235, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-white{--tw-text-opacity:1 !important;color:rgba(255, 255, 255, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-gray-300{--tw-text-opacity:1 !important;color:rgba(209, 213, 219, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-primary-300{--tw-text-opacity:1 !important;color:rgba(125, 211, 252, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-red-500{--tw-text-opacity:1 !important;color:rgba(239, 68, 68, var(--tw-text-opacity)) !important}.dark .dark\\:\\!text-pink-400{--tw-text-opacity:1 !important;color:rgba(244, 114, 182, var(--tw-text-opacity)) !important}.dark .dark\\:hover\\:\\!bg-primary-500:hover{--tw-bg-opacity:1 !important;background-color:rgba(14, 165, 233, var(--tw-bg-opacity)) !important}.dark .dark\\:hover\\:\\!bg-red-500\\/25:hover{background-color:rgba(239, 68, 68, 0.25) !important}.dark .dark\\:hover\\:\\!bg-pink-400\\/20:hover{background-color:rgba(244, 114, 182, 0.2) !important}.dark .dark\\:hover\\:\\!bg-primary-600:hover{--tw-bg-opacity:1 !important;background-color:rgba(2, 132, 199, var(--tw-bg-opacity)) !important}.dark .dark\\:hover\\:from-primary-500:hover{--tw-gradient-from:#0ea5e9;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 165, 233, 0))}.dark .dark\\:hover\\:\\!from-primary-500:hover{--tw-gradient-from:#0ea5e9 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 165, 233, 0)) !important}.dark .dark\\:hover\\:via-blue-400:hover{--tw-gradient-stops:var(--tw-gradient-from), #60a5fa, var(--tw-gradient-to, rgba(96, 165, 250, 0))}.dark .dark\\:hover\\:\\!via-blue-400:hover{--tw-gradient-stops:var(--tw-gradient-from), #60a5fa, var(--tw-gradient-to, rgba(96, 165, 250, 0)) !important}.dark .dark\\:hover\\:to-purple-500:hover{--tw-gradient-to:#8b5cf6}.dark .dark\\:hover\\:\\!to-purple-500:hover{--tw-gradient-to:#8b5cf6 !important}.dark .dark\\:disabled\\:\\!bg-gray-500:disabled{--tw-bg-opacity:1 !important;background-color:rgba(107, 114, 128, var(--tw-bg-opacity)) !important}.dark .dark\\:disabled\\:\\!text-gray-300:disabled{--tw-text-opacity:1 !important;color:rgba(209, 213, 219, var(--tw-text-opacity)) !important}.dark .dark\\:disabled\\:hover\\:\\!from-primary-600:disabled:hover{--tw-gradient-from:#0284c7 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0)) !important}.dark .dark\\:disabled\\:hover\\:\\!via-blue-500:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0)) !important}.dark .dark\\:disabled\\:hover\\:\\!to-purple-600:disabled:hover{--tw-gradient-to:#7c3aed !important}')}class Kp extends le{constructor(e){super(),ae(this,e,null,null,o,{},Gp)}}function Yp(e){_(e,"svelte-1q93c8i",'.svelte-1q93c8i,.svelte-1q93c8i::before,.svelte-1q93c8i::after{box-sizing:border-box}button.svelte-1q93c8i{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1q93c8i{text-transform:none}button.svelte-1q93c8i,[type=\'button\'].svelte-1q93c8i{-webkit-appearance:button}.svelte-1q93c8i::-moz-focus-inner{border-style:none;padding:0}.svelte-1q93c8i:-moz-focusring{outline:1px dotted ButtonText}.svelte-1q93c8i:-moz-ui-invalid{box-shadow:none}.svelte-1q93c8i::-webkit-inner-spin-button,.svelte-1q93c8i::-webkit-outer-spin-button{height:auto}.svelte-1q93c8i::-webkit-search-decoration{-webkit-appearance:none}.svelte-1q93c8i::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h2.svelte-1q93c8i,h3.svelte-1q93c8i{margin:0}button.svelte-1q93c8i{background-color:transparent;background-image:none}.svelte-1q93c8i,.svelte-1q93c8i::before,.svelte-1q93c8i::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1q93c8i{cursor:pointer}h2.svelte-1q93c8i,h3.svelte-1q93c8i{font-size:inherit;font-weight:inherit}button.svelte-1q93c8i{padding:0;line-height:inherit;color:inherit}.svelte-1q93c8i,.svelte-1q93c8i::before,.svelte-1q93c8i::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}main.svelte-1q93c8i{margin:0;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n        "Noto Color Emoji";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-text-size-adjust:100%}.mx-auto.svelte-1q93c8i{margin-left:auto;margin-right:auto}.my-16.svelte-1q93c8i{margin-top:4rem;margin-bottom:4rem}.mt-4.svelte-1q93c8i{margin-top:1rem}.flex.svelte-1q93c8i{display:flex}.h-9.svelte-1q93c8i{height:2.25rem}.w-full.svelte-1q93c8i{width:100%}.flex-col.svelte-1q93c8i{flex-direction:column}.items-center.svelte-1q93c8i{align-items:center}.gap-10.svelte-1q93c8i{gap:2.5rem}.gap-2.svelte-1q93c8i{gap:0.5rem}.text-3xl.svelte-1q93c8i{font-size:1.875rem;line-height:2.25rem}.text-2xl.svelte-1q93c8i{font-size:1.5rem;line-height:2rem}.font-bold.svelte-1q93c8i{font-weight:700}.font-medium.svelte-1q93c8i{font-weight:500}.text-primary-600.svelte-1q93c8i{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.primary-btn.svelte-1q93c8i{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.primary-btn.svelte-1q93c8i:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity));--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0));--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0));--tw-gradient-to:#ddd6fe}')}function Jp(t){let n;return{c(){n=k("div"),$(n,"class","h-9 svelte-1q93c8i")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function Qp(t){let n,r,i,o,a;return{c(){n=k("div"),r=k("button"),r.textContent="Login",i=I("\n      to add reactions and comments."),$(r,"type","button"),$(r,"class","primary-btn text-md dark:from-primary-600 dark:hover:from-primary-500 dark:via-blue-500 dark:hover:via-blue-400 dark:to-purple-600 dark:hover:to-purple-500 dark:text-white svelte-1q93c8i"),$(n,"class","svelte-1q93c8i")},m(e,l){w(e,n,l),y(n,r),y(n,i),o||(a=E(r,"click",(function(){s(t[4])&&t[4].apply(this,arguments)})),o=!0)},p(e,n){t=e},i:e,o:e,d(e){e&&b(n),o=!1,a()}}}function Zp(e){let t,n,r,i,o,a,l,c,u,h,d,p,f,m=e[6].user.displayName+"";return u=new mc({}),{c(){t=k("div"),n=k("h2"),r=I("Hi "),i=k("span"),o=I(m),a=I(" 👋!"),l=T(),c=k("button"),re(u.$$.fragment),h=I("\n        Logout"),$(i,"class","text-primary-600 dark:text-primary-400 svelte-1q93c8i"),$(n,"class","text-3xl font-bold svelte-1q93c8i"),$(c,"type","button"),$(c,"class","flex items-center gap-2 text-md primary-btn dark:from-primary-600 dark:hover:from-primary-500 dark:via-blue-500 dark:hover:via-blue-400 dark:to-purple-600 dark:hover:to-purple-500 dark:text-white svelte-1q93c8i"),$(t,"class","flex gap-10 items-center svelte-1q93c8i")},m(m,g){w(m,t,g),y(t,n),y(n,r),y(n,i),y(i,o),y(n,a),y(t,l),y(t,c),ie(u,c,null),y(c,h),d=!0,p||(f=E(c,"click",(function(){s(e[5])&&e[5].apply(this,arguments)})),p=!0)},p(t,n){e=t,(!d||64&n)&&m!==(m=e[6].user.displayName+"")&&N(o,m)},i(e){d||(J(u.$$.fragment,e),d=!0)},o(e){Q(u.$$.fragment,e),d=!1},d(e){e&&b(t),se(u),p=!1,f()}}}function Xp(e){let t,n,r,i,s,o,a,l,c,u,h,d,p;const f=[Zp,Qp,Jp],m=[];function g(e,t){return e[6].user?0:e[6].loading?2:1}return n=g(e),r=m[n]=f[n](e),l=new Tc({props:{page:e[1],reactions:e[0]}}),u=new Bp({props:{page:e[1]}}),d=new Kp({}),{c(){t=k("main"),r.c(),i=T(),s=k("h3"),o=I(e[2]),a=T(),re(l.$$.fragment),c=T(),re(u.$$.fragment),h=T(),re(d.$$.fragment),$(s,"class","text-2xl mt-4 font-medium svelte-1q93c8i"),$(t,"class","w-full mx-auto flex flex-col items-center my-16 dark:text-white svelte-1q93c8i")},m(e,r){w(e,t,r),m[n].m(t,null),y(t,i),y(t,s),y(s,o),y(t,a),ie(l,t,null),y(t,c),ie(u,t,null),w(e,h,r),ie(d,e,r),p=!0},p(e,[s]){let a=n;n=g(e),n===a?m[n].p(e,s):(K(),Q(m[a],1,1,(()=>{m[a]=null})),Y(),r=m[n],r?r.p(e,s):(r=m[n]=f[n](e),r.c()),J(r,1),r.m(t,i)),(!p||4&s)&&N(o,e[2]);const c={};2&s&&(c.page=e[1]),1&s&&(c.reactions=e[0]),l.$set(c);const h={};2&s&&(h.page=e[1]),u.$set(h)},i(e){p||(J(r),J(l.$$.fragment,e),J(u.$$.fragment,e),J(d.$$.fragment,e),p=!0)},o(e){Q(r),Q(l.$$.fragment,e),Q(u.$$.fragment,e),Q(d.$$.fragment,e),p=!1},d(e){e&&b(t),m[n].d(),se(l),se(u),e&&b(h),se(d,e)}}}function ef(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s()));let o,a,l,{firebaseConfig:c}=n,{reactions:h=["😭","😕","😀","🤩"]}=n,{page:d=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n,{reactionText:p="Did you enjoy this post? Leave your reactions below!"}=n;if(!c)throw new Error("No firebaseConfig was provided");Array.from(ht.values()).length||function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:ct,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw gt.create("bad-app-name",{appName:String(r)});if(ht.has(r))throw gt.create("duplicate-app",{appName:r});const i=new Xe(r);for(const e of dt.values())i.addComponent(e);const s=new vt(e,n,i);ht.set(r,s)}(c);try{const e=dc();o=e.authStore,s(),s=u(o,(e=>r(6,i=e))),a=e.loginWithGoogle,l=e.logout}catch(e){throw e}return t.$$set=e=>{"firebaseConfig"in e&&r(7,c=e.firebaseConfig),"reactions"in e&&r(0,h=e.reactions),"page"in e&&r(1,d=e.page),"reactionText"in e&&r(2,p=e.reactionText)},[h,d,p,o,a,l,i,c]}class tf extends le{constructor(e){super(),ae(this,e,ef,Xp,o,{firebaseConfig:7,reactions:0,page:1,reactionText:2},Yp)}}const nf={install:({firebaseConfig:e,reactions:t,page:n,reactionText:r})=>{const i=document.getElementById("reactive_widget");new tf({target:i,props:{firebaseConfig:e,page:n,reactions:t,reactionText:r}})}};return nf}();
