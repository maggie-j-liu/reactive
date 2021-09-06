var reactive=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,l;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function u(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(e,t,n,r){if(e){const i=d(e,t,n,r);return e[0](i)}}function d(e,n,r,i){return e[1]&&i?t(r.ctx.slice(),e[1](i(n))):r.ctx}function p(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function f(e,t,n,r,i,s){if(i){const o=d(t,n,r,s);e.p(o,i)}}function g(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function m(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function v(e){return null==e?"":e}function b(e,t){e.appendChild(t)}function y(e,t,n){const r=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t.host)return t;return document}(e);if(!r.getElementById(t)){const e=x("style");e.id=t,e.textContent=n,function(e,t){b(e.head||e,t)}(r,e)}}function _(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode.removeChild(e)}function k(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function C(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function T(){return I(" ")}function S(){return I("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}class P{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=x(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}function O(e){l=e}function A(e){(function(){if(!l)throw new Error("Function called outside component initialization");return l})().$$.on_mount.push(e)}const j=[],D=[],L=[],M=[],F=Promise.resolve();let z=!1;function U(e){L.push(e)}let q=!1;const W=new Set;function V(){if(!q){q=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];O(t),H(t.$$)}for(O(null),j.length=0;D.length;)D.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];W.has(t)||(W.add(t),t())}L.length=0}while(j.length);for(;M.length;)M.pop()();z=!1,q=!1,W.clear()}}function H(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}const B=new Set;let G;function K(){G={r:0,c:[],p:G}}function Y(){G.r||i(G.c),G=G.p}function J(e,t){e&&e.i&&(B.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),G.c.push((()=>{B.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function X(e,t){e.d(1),t.delete(e.key)}function ee(e,t){Q(e,1,1,(()=>{t.delete(e.key)}))}function te(e,t,n,r,i,s,o,a,l,c,u,h){let d=e.length,p=s.length,f=d;const g={};for(;f--;)g[e[f].key]=f;const m=[],v=new Map,b=new Map;for(f=p;f--;){const e=h(i,s,f),a=n(e);let l=o.get(a);l?r&&l.p(e,t):(l=c(a,e),l.c()),v.set(a,m[f]=l),a in g&&b.set(a,Math.abs(f-g[a]))}const y=new Set,_=new Set;function w(e){J(e,1),e.m(a,u),o.set(e.key,e),u=e.first,p--}for(;d&&p;){const t=m[p-1],n=e[d-1],r=t.key,i=n.key;t===n?(u=t.first,d--,p--):v.has(i)?!o.has(r)||y.has(r)?w(t):_.has(i)?d--:b.get(r)>b.get(i)?(_.add(r),w(t)):(y.add(i),d--):(l(n,o),d--)}for(;d--;){const t=e[d];v.has(t.key)||l(t,o)}for(;p;)w(m[p-1]);return m}function ne(e,t){const n={},r={},i={$$scope:1};let s=e.length;for(;s--;){const o=e[s],a=t[s];if(a){for(const e in o)e in a||(r[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[s]=a}else for(const e in o)i[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function re(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function se(e,t,r,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=e.$$;a&&a.m(t,r),o||U((()=>{const t=l.map(n).filter(s);c?c.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(U)}function oe(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){-1===e.$$.dirty[0]&&(j.push(e),z||(z=!0,F.then(V)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(t,n,s,o,a,c,u,h=[-1]){const d=l;O(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};u&&u(p.root);let f=!1;if(p.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),f&&ae(t,e)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(w)}else p.fragment&&p.fragment.c();n.intro&&J(t.$$.fragment),se(t,n.target,n.anchor,n.customElement),V()}O(d)}class ce{$destroy(){oe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
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
    ***************************************************************************** */var ue=function(e,t){return(ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function he(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function de(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function pe(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function fe(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ge(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function me(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||t)}
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
     */var ve=!1,be="${JSCORE_VERSION}",ye=function(e,t){if(!e)throw _e(t)},_e=function(e){return new Error("Firebase Database ("+be+") INTERNAL ASSERT FAILED: "+e)},we=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ke={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(we(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(r.push(c),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},xe=function(e){try{return ke.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
     */var Re=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Pe.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ue(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Pe=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?Oe(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",l=new Re(i,a,r);return l},e}();function Oe(e,t){return e.replace(Ae,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var Ae=/\{\$([^}]+)}/g;
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
     */function je(e){return JSON.parse(e)}function De(e){return JSON.stringify(e)}
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
     */var Le=function(e){var t={},n={},r={},i="";try{var s=e.split(".");t=je(xe(s[0])||""),n=je(xe(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};
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
function Me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Fe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ze(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ue(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}
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
     */function qe(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}
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
     */var We=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):r<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();var Ve=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=He),void 0===r.error&&(r.error=He),void 0===r.complete&&(r.complete=He);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function He(){}function Be(e,t){return e+" failed: "+t+" argument "}
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
function Ke(e){return e&&e._delegate?e._delegate:e}var Ye=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Je="[DEFAULT]",Qe=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Te;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Je})}catch(e){}try{for(var r=fe(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=ge(i.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=Je),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return de(this,void 0,void 0,(function(){var e;return pe(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(me(me([],ge(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),ge(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=Je),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=fe(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=ge(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=fe(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Je?void 0:t),options:i}),this.instances.set(n,s),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(e){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=Je),this.component?this.component.multipleInstances?e:Je:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
     */var Ze,Xe,et=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Qe(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
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
    ***************************************************************************** */function tt(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
     */!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Xe||(Xe={}));var nt={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},rt=Xe.INFO,it=((Ze={})[Xe.DEBUG]="log",Ze[Xe.VERBOSE]="log",Ze[Xe.INFO]="info",Ze[Xe.WARN]="warn",Ze[Xe.ERROR]="error",Ze),st=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=it[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,tt(["["+i+"]  "+e.name+":"],n))}},ot=function(){function e(e){this.name=e,this._logLevel=rt,this._logHandler=st,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Xe))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?nt[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,Xe.DEBUG],e)),this._logHandler.apply(this,tt([this,Xe.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,Xe.VERBOSE],e)),this._logHandler.apply(this,tt([this,Xe.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,Xe.INFO],e)),this._logHandler.apply(this,tt([this,Xe.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,Xe.WARN],e)),this._logHandler.apply(this,tt([this,Xe.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,Xe.ERROR],e)),this._logHandler.apply(this,tt([this,Xe.ERROR],e))},e}();
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
class at{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const lt="@firebase/app-exp",ct=new ot("@firebase/app"),ut="[DEFAULT]",ht={[lt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check-exp":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},dt=new Map,pt=new Map;function ft(e,t){try{e.container.addComponent(t)}catch(n){ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gt(e){const t=e.name;if(pt.has(t))return ct.debug(`There were multiple attempts to register component ${t}.`),!1;pt.set(t,e);for(const t of dt.values())ft(t,e);return!0}function mt(e,t){return e.container.getProvider(t)}
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
     */const vt=new Pe("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class bt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ye("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}
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
     */const yt="9.0.0-beta.7";function _t(e="[DEFAULT]"){const t=dt.get(e);if(!t)throw vt.create("no-app",{appName:e});return t}function wt(e,t,n){var r;let i=null!==(r=ht[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ct.warn(e.join(" "))}gt(new Ye(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var kt;gt(new Ye("platform-logger",(e=>new at(e)),"PRIVATE")),wt(lt,"0.0.900-exp.6ef484a04",kt),wt("fire-js","");const xt=new Pe("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ct=new ot("@firebase/auth-exp");
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
     */function It(e,...t){Ct.logLevel<=Xe.ERROR&&Ct.error(`Auth (9.0.0-beta.7): ${e}`,...t)}
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
     */function Tt(e,...t){throw Et(e,...t)}function St(e,...t){return Et(e,...t)}function Et(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xt.create(e,...t)}function $t(e,t,...n){if(!e)throw Et(t,...n)}function Nt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw It(t),new Error(t)}function Rt(e,t){e||Nt(t)}
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
     */const Pt=new Map;function Ot(e){Rt(e instanceof Function,"Expected a class definition");let t=Pt.get(e);return t?(Rt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pt.set(e,t),t)}
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
function At(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function jt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
     */function Dt(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==jt()&&"https:"!==jt()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
class Lt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ee()||$e()}get(){return Dt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function Mt(e,t){Rt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
     */class Ft{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const zt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Ut=new Lt(3e4,6e4);
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
     */async function qt(e,t,n,r,i={}){return Wt(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=qe(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Ft.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Ft.fetch()(Vt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Wt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},zt),t);try{const t=new Ht(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Bt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Bt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Bt(e,"email-already-in-use",s);Tt(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(t){if(t instanceof Re)throw t;Tt(e,"network-request-failed")}}function Vt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Mt(e.config,i):`${e.config.apiScheme}://${i}`}class Ht{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(St(this.auth,"timeout"))),Ut.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(e,t,r);return i.customData._tokenResponse=n,i}
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
function Gt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Kt(e){return 1e3*Number(e)}function Yt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return It("JWT malformed, contained fewer than 3 sections"),null;try{const e=xe(n);return e?JSON.parse(e):(It("Failed to decode base64 JWT payload"),null)}catch(e){return It("Caught error parsing JWT payload as JSON",e),null}}
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
async function Jt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Re&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Qt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
     */class Zt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gt(this.lastLoginAt),this.creationTime=Gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function Xt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jt(e,async function(e,t){return qt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));$t(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=he(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$t(e.idToken,"internal-error"),$t(void 0!==e.idToken,"internal-error"),$t(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Yt(e);return $t(t,"internal-error"),$t(void 0!==t.exp,"internal-error"),$t(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $t(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Wt(e,{},(()=>{const n=qe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Vt(e,r,"/v1/token",`key=${i}`);return Ft.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new en;return n&&($t("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&($t("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&($t("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return Nt("not implemented")}}
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
     */function tn(e,t){$t("string"==typeof e||void 0===e,"internal-error",{appName:t})}class nn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=he(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Qt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Zt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jt(this,this.stsTokenManager.getToken(this.auth,e));return $t(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ke(e),r=await n.getIdToken(t),i=Yt(r);$t(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gt(Kt(i.auth_time)),issuedAtTime:Gt(Kt(i.iat)),expirationTime:Gt(Kt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ke(e);await Xt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&($t(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Xt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jt(this,async function(e,t){return qt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:y,isAnonymous:_,providerData:w,stsTokenManager:k}=t;$t(b&&k,e,"internal-error");const x=en.fromJSON(this.name,k);$t("string"==typeof b,e,"internal-error"),tn(u,e.name),tn(h,e.name),$t("boolean"==typeof y,e,"internal-error"),$t("boolean"==typeof _,e,"internal-error"),tn(d,e.name),tn(p,e.name),tn(f,e.name),tn(g,e.name),tn(m,e.name),tn(v,e.name);const C=new nn({uid:b,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:x,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new en;r.updateFromServerResponse(t);const i=new nn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Xt(i),i}}
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
     */class rn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rn.type="NONE";const sn=rn;
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
     */function on(e,t,n){return`firebase:${e}:${t}:${n}`}class an{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=on(this.userKey,r.apiKey,i),this.fullPersistenceKey=on("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new an(Ot(sn),e,n);let r=Ot(sn);for(const e of t)if(await e._isAvailable()){r=e;break}let i=null;const s=on(n,e.config.apiKey,e.name);for(const n of t)try{const t=await n._get(s);if(t){const s=nn._fromJSON(e,t);n!==r&&(i=s);break}}catch(e){}return i&&await r._set(s,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new an(r,e,n)}}
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
     */function ln(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fn(t))return"Blackberry";if(gn(t))return"Webos";if(un(t))return"Safari";if((t.includes("chrome/")||hn(t))&&!t.includes("edge/"))return"Chrome";if(pn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function cn(e=Se()){return/firefox\//i.test(e)}function un(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hn(e=Se()){return/crios\//i.test(e)}function dn(e=Se()){return/iemobile/i.test(e)}function pn(e=Se()){return/android/i.test(e)}function fn(e=Se()){return/blackberry/i.test(e)}function gn(e=Se()){return/webos/i.test(e)}function mn(e=Se()){return/iphone|ipad|ipod/i.test(e)}function vn(){return((e=Se()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function bn(e=Se()){return mn(e)||pn(e)||gn(e)||fn(e)||/windows phone/i.test(e)||dn(e)}
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
function yn(e,t=[]){let n;switch(e){case"Browser":n=ln(Se());break;case"Worker":n=`${ln(Se())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0-beta.7/${t.length?t.join(","):"FirebaseCore-web"}`}
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
     */class _n{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kn(this),this.idTokenSubscription=new kn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await an.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?($t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){this.redirectInitializerError=e,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xt(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ke(e):null;return t&&$t(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&$t(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ot(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pe("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;$t(t,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return $t(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function wn(e){return Ke(e)}class kn{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Ve((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return $t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */class xn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}
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
     */async function Cn(e,t){return async function(e,t,n,r,i={}){const s=await qt(e,t,n,r,i);return"mfaPendingCredential"in s&&Tt(e,"multi-factor-auth-required",{serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
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
     */class In extends xn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=he(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new In(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return Cn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Cn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qe(t)}return e}}
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
     */class Tn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class Sn extends Tn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
     */class En extends Sn{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch(e){return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com",En.PROVIDER_ID="facebook.com";
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
class $n extends Sn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return In._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $n.credential(t,n)}catch(e){return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com",$n.PROVIDER_ID="google.com";
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
class Nn extends Sn{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch(e){return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com",Nn.PROVIDER_ID="github.com";
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
class Rn extends Sn{constructor(){super("twitter.com")}static credential(e,t){return In._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Rn.credential(t,n)}catch(e){return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com",Rn.PROVIDER_ID="twitter.com";
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
class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await nn._fromIdTokenResponse(e,n,r),s=On(n);return new Pn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=On(n);return new Pn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function On(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
     */class An extends Re{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,An.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new An(e,t,n,r)}}function jn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw An._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function Dn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Ke(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Jt(r,
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
async function(e,t){return qt(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}
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
class Ln{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
     */const Mn="__sak";
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
     */class Fn{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mn,"1"),this.storage.removeItem(Mn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
     */class zn extends Fn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Se();return un(e)||mn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=bn(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);vn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zn.type="LOCAL";const Un=zn;
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
class qn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Wn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */qn.receivers=[];class Vn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Wn("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
     */function Hn(){return window}
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
function Bn(){return void 0!==Hn().WorkerGlobalScope&&"function"==typeof Hn().importScripts}
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
const Gn="firebaseLocalStorageDb",Kn="firebaseLocalStorage",Yn="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Qn(e,t){return e.transaction([Kn],t?"readwrite":"readonly").objectStore(Kn)}function Zn(){const e=indexedDB.open(Gn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Kn,{keyPath:Yn})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Kn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Gn);return new Jn(e).toPromise()}(),t(await Zn()))}))}))}async function Xn(e,t,n){const r=Qn(e,!0).put({[Yn]:t,value:n});return new Jn(r).toPromise()}function er(e,t){const n=Qn(e,!0).delete(t);return new Jn(n).toPromise()}class tr{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Zn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qn._getInstance(Bn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Vn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zn();return await Xn(e,Mn,"1"),await er(e,Mn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Qn(e,!1).get(t),r=await new Jn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>er(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Qn(e,!1).getAll();return new Jn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tr.type="LOCAL";const nr=tr;
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
     */class rr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sr(e);default:return!1}}
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!sr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(St(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ir(e))}saveEventToCache(e){this.cachedEventUids.add(ir(e)),this.lastProcessedEventTime=Date.now()}}function ir(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function sr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const or=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ar=/^https?/;async function lr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return qt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(cr(e))return}catch(e){}Tt(e,"unauthorized-domain")}function cr(e){const t=At(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ar.test(n))return!1;if(or.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */function ur(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=St("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}
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
const hr=new Lt(3e4,6e4);function dr(){const e=Hn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function pr(e){return new Promise(((t,n)=>{var r,i,s;function o(){dr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dr(),n(St(e,"network-request-failed"))},timeout:hr.get()})}if(null===(i=null===(r=Hn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Hn().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Hn()[t]=()=>{gapi.load?o():n(St(e,"network-request-failed"))},ur(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw fr=null,e}))}let fr=null;
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
const gr=new Lt(5e3,15e3),mr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},vr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function br(e){const t=e.config;$t(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Mt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:yt},i=vr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qe(r).slice(1)}`}async function yr(e){const t=await function(e){return fr=fr||pr(e),fr}(e),n=Hn().gapi;return $t(n,e,"internal-error"),t.open({where:document.body,url:br(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=St(e,"network-request-failed"),s=Hn().setTimeout((()=>{r(i)}),gr.get());function o(){Hn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */class _r extends Fn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_r.type="SESSION";const wr=_r,kr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
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
     */class xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Cr(e,t,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kr),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Se().toLowerCase();n&&(a=hn(c)?"_blank":n),cn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Se()){var t;return mn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new xr(null);const h=window.open(t||"",a,u);$t(h,e,"popup-blocked");try{h.focus()}catch(e){}return new xr(h)}function Ir(e,t){return t?Ot(t):($t(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
     */class Tr extends xn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sr(e){
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
return async function(e,t,n=!1){const r="signIn",i=await jn(e,r,t),s=await Pn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new Tr(e),e.bypassAuthState)}function Er(e){const{auth:t,user:n}=e;return $t(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Jt(e,jn(r,i,t,e),n);$t(s.idToken,r,"internal-error");const o=Yt(s.idToken);$t(o,r,"internal-error");const{sub:a}=o;return $t(e.uid===a,r,"user-mismatch"),Pn._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Tt(r,"user-mismatch"),e}}(n,new Tr(e),e.bypassAuthState)}async function $r(e){const{auth:t,user:n}=e;return $t(n,t,"internal-error"),async function(e,t,n=!1){const r=await Jt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pn._forOperation(e,"link",r)}(n,new Tr(e),e.bypassAuthState)}
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
     */class Nr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sr;case"linkViaPopup":case"linkViaRedirect":return $r;case"reauthViaPopup":case"reauthViaRedirect":return Er;default:Tt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Rr="pendingRedirect",Pr=new Map;class Or extends Nr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Pr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return on(Rr,e.config.apiKey,e.name)}(t),r="true"===await Ar(e)._get(n);return await Ar(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Pr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ar(e){return Ot(e._redirectPersistence)}async function jr(e,t,n=!1){const r=wn(e),i=Ir(r,t),s=new Or(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
     */const Dr="__/auth/handler",Lr="emulator/auth/handler";function Mr(e,t,n,r,i,s){$t(e.config.authDomain,e,"auth-domain-config-required"),$t(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:yt,eventId:i};if(t instanceof Tn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ze(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Sn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Dr}`;return Mt(e,Lr)}
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
     */(e)}?${qe(a).slice(1)}`}const Fr="webStorageSupport";const zr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wr,this._completeRedirectFn=jr}async _openPopup(e,t,n,r){var i;Rt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Cr(e,Mr(e,t,n,At(),r),Wn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Mr(e,t,n,At(),r),Hn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Rt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await yr(e),n=new rr(e);return t.register("authEvent",(t=>{$t(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fr,{type:Fr},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Tt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bn()||un()||mn()}};new Lt(3e4,6e4);
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
const Ur=new Lt(2e3,1e4);class qr extends Nr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $t(e,this.auth,"internal-error"),e}async onExecution(){Rt(1===this.filter.length,"Popup operations only handle one event");const e=Wn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(St(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ur.get())};e()}}function Wr(e=_t()){const t=mt(e,"auth-exp");return t.isInitialized()?t.getImmediate():function(e,t){const n=mt(e,"auth-exp");n.isInitialized()&&Tt(n.getImmediate(),"already-initialized");return n.initialize({options:t})}(e,{popupRedirectResolver:zr,persistence:[nr,Un]})}var Vr;qr.currentPopupAction=null,Vr="Browser",gt(new Ye("auth-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{$t(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),$t(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Vr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yn(Vr)},s=new _n(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),gt(new Ye("auth-internal",(e=>(e=>new Ln(e))(wn(e.getProvider("auth-exp").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),wt("@firebase/auth-exp","0.0.900-exp.6ef484a04",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Vr));
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
let Hr="";
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
class Br{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:je(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
     */class Gr{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
     */const Kr=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Br(t)}}catch(e){}return new Gr},Yr=Kr("localStorage"),Jr=Kr("sessionStorage"),Qr=new ot("@firebase/database"),Zr=function(){let e=1;return function(){return e++}}(),Xr=function(e){const t=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var s=i-55296;r++,ye(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(s<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new We;n.update(t);const r=n.digest();return ke.encodeByteArray(r)},ei=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=ei.apply(null,r):t+="object"==typeof r?De(r):r,t+=" "}return t};let ti=null,ni=!0;const ri=function(...e){var t,n;if(!0===ni&&(ni=!1,null===ti&&!0===Jr.get("logging_enabled")&&(t=!0,ye(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Qr.logLevel=Xe.VERBOSE,ti=Qr.log.bind(Qr),n&&Jr.set("logging_enabled",!0)):"function"==typeof t?ti=t:(ti=null,Jr.remove("logging_enabled")))),ti){const t=ei.apply(null,e);ti(t)}},ii=function(e){return function(...t){ri(e,...t)}},si=function(...e){const t="FIREBASE INTERNAL ERROR: "+ei(...e);Qr.error(t)},oi=function(...e){const t=`FIREBASE FATAL ERROR: ${ei(...e)}`;throw Qr.error(t),new Error(t)},ai=function(...e){const t="FIREBASE WARNING: "+ei(...e);Qr.warn(t)},li=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ci="[MIN_NAME]",ui="[MAX_NAME]",hi=function(e,t){if(e===t)return 0;if(e===ci||t===ui)return-1;if(t===ci||e===ui)return 1;{const n=yi(e),r=yi(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},di=function(e,t){return e===t?0:e<t?-1:1},pi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+De(t))},fi=function(e){if("object"!=typeof e||null===e)return De(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=De(t[r]),n+=":",n+=fi(e[t[r]]);return n+="}",n},gi=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function mi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const vi=function(e){ye(!li(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const bi=new RegExp("^-?(0*)\\d{1,10}$"),yi=function(e){if(bi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},_i=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw ai("Exception was thrown by user callback.",t),e}),Math.floor(0))}},wi=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class ki{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){ai(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
     */class xi{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(ri("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ai(e)}}class Ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ci.OWNER="owner";
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
const Ii=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ti="websocket",Si="long_polling";
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
class Ei{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yr.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $i(e,t,n){let r;if(ye("string"==typeof t,"typeof type must == string"),ye("object"==typeof n,"typeof params must == object"),t===Ti)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Si)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return mi(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
     */class Ni{constructor(){this.counters_={}}incrementCounter(e,t=1){Me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ce(this.counters_)}}
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
     */const Ri={},Pi={};function Oi(e){const t=e.toString();return Ri[t]||(Ri[t]=new Ni),Ri[t]}
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
class Ai{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&_i((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
     */const ji="start";class Di{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ii(e),this.stats_=Oi(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),$i(t,Si,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ai(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Li(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ji)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ii.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Di.forceAllow_=!0}static forceDisallow(){Di.forceDisallow_=!0}static isAvailable(){return!!Di.forceAllow_||!(Di.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=De(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(r=we(t),ke.encodeByteArray(r,!0));var r;const i=gi(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=De(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Li{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zr(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Li.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){ri("frame writing exception"),e.stack&&ri(e.stack),ri(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||ri("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ri("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
     */let Mi=null;"undefined"!=typeof MozWebSocket?Mi=MozWebSocket:"undefined"!=typeof WebSocket&&(Mi=WebSocket);class Fi{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ii(this.connId),this.stats_=Oi(t),this.connURL=Fi.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&Ii.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),$i(e,Ti,i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yr.set("previous_websocket_failure",!0);try{if(Ne());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Mi(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Fi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Mi&&!Fi.forceDisallow_}static previouslyFailed(){return Yr.isInMemoryStorage||!0===Yr.get("previous_websocket_failure")}markConnectionHealthy(){Yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=je(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ye(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=De(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=gi(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fi.responsesRequiredToBeHealthy=2,Fi.healthyTimeout=3e4;
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
class zi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Di,Fi]}initTransports_(e){const t=Fi&&Fi.isAvailable();let n=t&&!Fi.previouslyFailed();if(e.webSocketOnly&&(t||ai("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Fi];else{const e=this.transports_=[];for(const t of zi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
     */class Ui{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ii("c:"+this.id+":"),this.transportManager_=new zi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=wi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=pi("t",e),n=pi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=pi("t",e),n=pi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=pi("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?si("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):si("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&ai("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),wi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
     */class qi{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
     */class Wi{constructor(e){this.allowedEvents_=e,this.listeners_={},ye(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){ye(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
     */class Vi extends Wi{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ee()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Vi}getInitialEvent(e){return ye("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
     */class Hi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Bi(){return new Hi("")}function Gi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ki(e){return e.pieces_.length-e.pieceNum_}function Yi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Hi(e.pieces_,t)}function Ji(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Qi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Zi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Hi(t,0)}function Xi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Hi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Hi(n,0)}function es(e){return e.pieceNum_>=e.pieces_.length}function ts(e,t){const n=Gi(e),r=Gi(t);if(null===n)return t;if(n===r)return ts(Yi(e),Yi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ns(e,t){const n=Qi(e,0),r=Qi(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=hi(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function rs(e,t){if(Ki(e)!==Ki(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function is(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Ki(e)>Ki(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ss{constructor(e,t){this.errorPrefix_=t,this.parts_=Qi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ge(this.parts_[e]);os(this)}}function os(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+as(e))}function as(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
     */class ls extends Wi{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new ls}getInitialEvent(e){return ye("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
     */const cs=1e3;class us extends qi{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=us.nextPersistentConnectionId_++,this.log_=ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cs,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ne())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ls.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Vi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(De(i)),ye(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Te,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),ye(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ye(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;us.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Me(e,"w")){const n=Fe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();ai(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=Le(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=Le(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),ye(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):si("Unrecognized action received from server: "+De(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ye(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=cs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+us.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){ye(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?ri("getToken() completed but was canceled"):(ri("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Ui(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{ai(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&ai(e),a())}}}interrupt(e){ri("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ri("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ze(this.interruptReasons_)&&(this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>fi(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Hi(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){ri("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ri("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Hr.replace(/\./g,"-")]=1,Ee()?e["framework.cordova"]=1:$e()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vi.getInstance().currentlyOnline();return ze(this.interruptReasons_)&&e}}us.nextPersistentConnectionId_=0,us.nextConnectionId_=0;
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
class hs{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new hs(e,t)}}
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
     */class ds{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new hs(ci,e),r=new hs(ci,t);return 0!==this.compare(n,r)}minPost(){return hs.MIN}}
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
     */let ps;class fs extends ds{static get __EMPTY_NODE(){return ps}static set __EMPTY_NODE(e){ps=e}compare(e,t){return hi(e.name,t.name)}isDefinedOn(e){throw _e("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return hs.MIN}maxPost(){return new hs(ui,ps)}makePost(e,t){return ye("string"==typeof e,"KeyIndex indexValue must always be a string."),new hs(e,ps)}toString(){return".key"}}const gs=new fs;
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
     */class ms{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class vs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:vs.RED,this.left=null!=r?r:bs.EMPTY_NODE,this.right=null!=i?i:bs.EMPTY_NODE}copy(e,t,n,r,i){return new vs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return bs.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return bs.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}vs.RED=!0,vs.BLACK=!1;class bs{constructor(e,t=bs.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new bs(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,vs.BLACK,null,null))}remove(e){return new bs(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ms(this.root_,null,this.comparator_,!0,e)}}
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
function ys(e,t){return hi(e.name,t.name)}function _s(e,t){return hi(e,t)}
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
     */let ws;bs.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new vs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ks=function(e){return"number"==typeof e?"number:"+vi(e):"string:"+e},xs=function(e){if(e.isLeafNode()){const t=e.val();ye("string"==typeof t||"number"==typeof t||"object"==typeof t&&Me(t,".sv"),"Priority must be a string or number.")}else ye(e===ws||e.isEmpty(),"priority of unexpected type.");ye(e===ws||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Cs,Is,Ts;class Ss{constructor(e,t=Ss.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ye(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),xs(this.priorityNode_)}static set __childrenNodeConstructor(e){Cs=e}static get __childrenNodeConstructor(){return Cs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ss(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ss.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return es(e)?this:".priority"===Gi(e)?this.priorityNode_:Ss.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ss.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Gi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(ye(".priority"!==n||1===Ki(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ss.__childrenNodeConstructor.EMPTY_NODE.updateChild(Yi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ks(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?vi(this.value_):this.value_,this.lazyHash_=Xr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ss.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ss.__childrenNodeConstructor?-1:(ye(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Ss.VALUE_TYPE_ORDER.indexOf(t),i=Ss.VALUE_TYPE_ORDER.indexOf(n);return ye(r>=0,"Unknown leaf type: "+t),ye(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ss.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Es=new class extends ds{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?hi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return hs.MIN}maxPost(){return new hs(ui,new Ss("[PRIORITY-POST]",Ts))}makePost(e,t){const n=Is(e);return new hs(t,new Ss("[PRIORITY-POST]",n))}toString(){return".priority"}},$s=Math.log(2);
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
     */class Ns{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/$s,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rs=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new vs(a,o.node,vs.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new vs(a,o.node,vs.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new vs(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,vs.BLACK):(a(r,vs.BLACK),a(r,vs.RED))}return s}(new Ns(e.length));return new bs(r||t,s)};
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
     */let Ps;const Os={};class As{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ye(Os&&Es,"ChildrenNode.ts has not been loaded"),Ps=Ps||new As({".priority":Os},{".priority":Es}),Ps}get(e){const t=Fe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof bs?t:null}hasIndex(e){return Me(this.indexSet_,e.toString())}addIndex(e,t){ye(e!==gs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(hs.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Rs(n,e.getCompare()):Os;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new As(c,l)}addToIndexes(e,t){const n=Ue(this.indexes_,((n,r)=>{const i=Fe(this.indexSet_,r);if(ye(i,"Missing index implementation for "+r),n===Os){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(hs.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Rs(n,i.getCompare())}return Os}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new hs(e.name,r))),i.insert(e,e.node)}}));return new As(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ue(this.indexes_,(n=>{if(n===Os)return n;{const r=t.get(e.name);return r?n.remove(new hs(e.name,r)):n}}));return new As(n,this.indexSet_)}}
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
     */let js;class Ds{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&xs(this.priorityNode_),this.children_.isEmpty()&&ye(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return js||(js=new Ds(new bs(_s),null,As.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||js}updatePriority(e){return this.children_.isEmpty()?this:new Ds(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?js:t}}getChild(e){const t=Gi(e);return null===t?this:this.getImmediateChild(t).getChild(Yi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(ye(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new hs(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?js:this.priorityNode_;return new Ds(r,s,i)}}updateChild(e,t){const n=Gi(e);if(null===n)return t;{ye(".priority"!==Gi(e)||1===Ki(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Yi(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Es,((s,o)=>{t[s]=o.val(e),n++,i&&Ds.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ks(this.getPriority().val())+":"),this.forEachChild(Es,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Xr(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new hs(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new hs(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new hs(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,hs.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,hs.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ls?-1:0}withIndex(e){if(e===gs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ds(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===gs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Es),n=t.getIterator(Es);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===gs?null:this.indexMap_.get(e.toString())}}Ds.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ls=new class extends Ds{constructor(){super(new bs(_s),Ds.EMPTY_NODE,As.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ds.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(hs,{MIN:{value:new hs(ci,Ds.EMPTY_NODE)},MAX:{value:new hs(ui,Ls)}}),fs.__EMPTY_NODE=Ds.EMPTY_NODE,Ss.__childrenNodeConstructor=Ds,ws=Ls,function(e){Ts=e}(Ls);function Ms(e,t=null){if(null===e)return Ds.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),ye(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ss(e,Ms(t))}if(e instanceof Array){let n=Ds.EMPTY_NODE;return mi(e,((t,r)=>{if(Me(e,t)&&"."!==t.substring(0,1)){const e=Ms(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Ms(t))}{const n=[];let r=!1;if(mi(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Ms(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new hs(e,i)))}})),0===n.length)return Ds.EMPTY_NODE;const i=Rs(n,ys,(e=>e.name),_s);if(r){const e=Rs(n,Es.getCompare());return new Ds(i,Ms(t),new As({".priority":e},{".priority":Es}))}return new Ds(i,Ms(t),As.Default)}}!function(e){Is=e}(Ms);
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
class Fs extends ds{constructor(e){super(),this.indexPath_=e,ye(!es(e)&&".priority"!==Gi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?hi(e.name,t.name):i}makePost(e,t){const n=Ms(e),r=Ds.EMPTY_NODE.updateChild(this.indexPath_,n);return new hs(t,r)}maxPost(){const e=Ds.EMPTY_NODE.updateChild(this.indexPath_,Ls);return new hs(ui,e)}toString(){return Qi(this.indexPath_,0).join("/")}}
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
     */const zs=new class extends ds{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?hi(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return hs.MIN}maxPost(){return hs.MAX}makePost(e,t){const n=Ms(e);return new hs(t,n)}toString(){return".value"}},Us="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qs=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Us.charAt(n%64),n=Math.floor(n/64);ye(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=Us.charAt(t[i]);return ye(20===o.length,"nextPushId: Length should be 20."),o}}();
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
function Ws(e){return{type:"value",snapshotNode:e}}function Vs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Hs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Bs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Gs{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){ye(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Hs(t,o)):ye(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Vs(t,n)):s.trackChildChange(Bs(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Es,((e,r)=>{t.hasChild(e)||n.trackChildChange(Hs(e,r))})),t.isLeafNode()||t.forEachChild(Es,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Bs(t,r,i))}else n.trackChildChange(Vs(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ds.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
     */class Ks{constructor(e){this.indexedFilter_=new Gs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ks.getStartPost_(e),this.endPost_=Ks.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new hs(t,n))||(n=Ds.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Ds.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Ds.EMPTY_NODE);const i=this;return t.forEachChild(Es,((e,t)=>{i.matches(new hs(e,t))||(r=r.updateImmediateChild(e,Ds.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
     */class Ys{constructor(e){this.rangedFilter_=new Ks(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new hs(t,n))||(n=Ds.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Ds.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Ds.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(Ds.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,Ds.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;ye(o.numChildren()===this.limit_,"");const a=new hs(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Bs(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Hs(t,e));const n=o.updateImmediateChild(t,Ds.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Vs(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Hs(l.name,l.node)),i.trackChildChange(Vs(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Ds.EMPTY_NODE)):e}}
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
     */class Js{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Es}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return ye(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ye(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return ye(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ye(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return ye(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Es}copy(){const e=new Js;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qs(e){const t={};if(e.isDefault())return t;let n;return e.index_===Es?n="$priority":e.index_===zs?n="$value":e.index_===gs?n="$key":(ye(e.index_ instanceof Fs,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=De(n),e.startSet_&&(t.startAt=De(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+De(e.indexStartName_))),e.endSet_&&(t.endAt=De(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+De(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Zs(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Es&&(t.i=e.index_.toString()),t}
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
     */class Xs extends qi{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=ii("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(ye(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Xs.getListenId_(e,n),o={};this.listens_[s]=o;const a=Qs(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Fe(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Xs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Qs(e._queryParams),n=e._path.toString(),r=new Te;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qe(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=je(o.responseText)}catch(e){ai("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&ai("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
     */class eo{constructor(){this.rootNode_=Ds.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
     */function to(){return{value:null,children:new Map}}function no(e,t,n){if(es(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Gi(t);e.children.has(r)||e.children.set(r,to());no(e.children.get(r),t=Yi(t),n)}}function ro(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
     */(e,((e,r)=>{ro(r,new Hi(t.toString()+"/"+e),n)}))}class io{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
     */class so{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new io(e);const n=1e4+2e4*Math.random();wi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;mi(e,((e,r)=>{r>0&&Me(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),wi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
     */var oo;function ao(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(oo||(oo={}));class lo{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=oo.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(es(this.path)){if(null!=this.affectedTree.value)return ye(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Hi(e));return new lo(Bi(),t,this.revert)}}return ye(Gi(this.path)===e,"operationForChild called for unrelated child."),new lo(Yi(this.path),this.affectedTree,this.revert)}}
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
     */class co{constructor(e,t){this.source=e,this.path=t,this.type=oo.LISTEN_COMPLETE}operationForChild(e){return es(this.path)?new co(this.source,Bi()):new co(this.source,Yi(this.path))}}
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
     */class uo{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=oo.OVERWRITE}operationForChild(e){return es(this.path)?new uo(this.source,Bi(),this.snap.getImmediateChild(e)):new uo(this.source,Yi(this.path),this.snap)}}
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
     */class ho{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=oo.MERGE}operationForChild(e){if(es(this.path)){const t=this.children.subtree(new Hi(e));return t.isEmpty()?null:t.value?new uo(this.source,Bi(),t.value):new ho(this.source,Bi(),t)}return ye(Gi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ho(this.source,Yi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
     */class po{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(es(e))return this.isFullyInitialized()&&!this.filtered_;const t=Gi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
     */class fo{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function go(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw _e("Should only compare child_ events.");const r=new hs(t.childName,t.snapshotNode),i=new hs(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
     */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function mo(e,t){return{eventCache:e,serverCache:t}}function vo(e,t,n,r){return mo(new po(t,n,r),e.serverCache)}function bo(e,t,n,r){return mo(e.eventCache,new po(t,n,r))}function yo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _o(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
     */let wo;class ko{constructor(e,t=(()=>(wo||(wo=new bs(di)),wo))()){this.value=e,this.children=t}static fromObject(e){let t=new ko(null);return mi(e,((e,n)=>{t=t.set(new Hi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Bi(),value:this.value};if(es(e))return null;{const n=Gi(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Yi(e),t);if(null!=i){return{path:Xi(new Hi(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(es(e))return this;{const t=Gi(e),n=this.children.get(t);return null!==n?n.subtree(Yi(e)):new ko(null)}}set(e,t){if(es(e))return new ko(t,this.children);{const n=Gi(e),r=(this.children.get(n)||new ko(null)).set(Yi(e),t),i=this.children.insert(n,r);return new ko(this.value,i)}}remove(e){if(es(e))return this.children.isEmpty()?new ko(null):new ko(null,this.children);{const t=Gi(e),n=this.children.get(t);if(n){const r=n.remove(Yi(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new ko(null):new ko(this.value,i)}return this}}get(e){if(es(e))return this.value;{const t=Gi(e),n=this.children.get(t);return n?n.get(Yi(e)):null}}setTree(e,t){if(es(e))return t;{const n=Gi(e),r=(this.children.get(n)||new ko(null)).setTree(Yi(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new ko(this.value,i)}}fold(e){return this.fold_(Bi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Xi(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Bi(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(es(e))return null;{const r=Gi(e),i=this.children.get(r);return i?i.findOnPath_(Yi(e),Xi(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Bi(),t)}foreachOnPath_(e,t,n){if(es(e))return this;{this.value&&n(t,this.value);const r=Gi(e),i=this.children.get(r);return i?i.foreachOnPath_(Yi(e),Xi(t,r),n):new ko(null)}}foreach(e){this.foreach_(Bi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Xi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
     */class xo{constructor(e){this.writeTree_=e}static empty(){return new xo(new ko(null))}}function Co(e,t,n){if(es(t))return new xo(new ko(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=ts(i,t);return s=s.updateChild(o,n),new xo(e.writeTree_.set(i,s))}{const r=new ko(n),i=e.writeTree_.setTree(t,r);return new xo(i)}}}function Io(e,t,n){let r=e;return mi(n,((e,n)=>{r=Co(r,Xi(t,e),n)})),r}function To(e,t){if(es(t))return xo.empty();{const n=e.writeTree_.setTree(t,new ko(null));return new xo(n)}}function So(e,t){return null!=Eo(e,t)}function Eo(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ts(n.path,t)):null}function $o(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Es,((e,n)=>{t.push(new hs(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new hs(e,n.value))})),t}function No(e,t){if(es(t))return e;{const n=Eo(e,t);return new xo(null!=n?new ko(n):e.writeTree_.subtree(t))}}function Ro(e){return e.writeTree_.isEmpty()}function Po(e,t){return Oo(Bi(),e.writeTree_,t)}function Oo(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(ye(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Oo(Xi(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Xi(e,".priority"),r)),n}}
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
     */function Ao(e,t){return Go(t,e)}function jo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));ye(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Do(t,r.path)?i=!1:is(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=Mo(e.allWrites,Lo,Bi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=To(e.visibleWrites,r.path);else{mi(r.children,(t=>{e.visibleWrites=To(e.visibleWrites,Xi(r.path,t))}))}return!0}return!1}function Do(e,t){if(e.snap)return is(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&is(Xi(e.path,n),t))return!0;return!1}function Lo(e){return e.visible}function Mo(e,t,n){let r=xo.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)is(n,e)?(t=ts(n,e),r=Co(r,t,s.snap)):is(e,n)&&(t=ts(e,n),r=Co(r,Bi(),s.snap.getChild(t)));else{if(!s.children)throw _e("WriteRecord should have .snap or .children");if(is(n,e))t=ts(n,e),r=Io(r,t,s.children);else if(is(e,n))if(t=ts(e,n),es(t))r=Io(r,Bi(),s.children);else{const e=Fe(s.children,Gi(t));if(e){const n=e.getChild(Yi(t));r=Co(r,Bi(),n)}}}}}return r}function Fo(e,t,n,r,i){if(r||i){const s=No(e.visibleWrites,t);if(!i&&Ro(s))return n;if(i||null!=n||So(s,Bi())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(is(e.path,t)||is(t,e.path))};return Po(Mo(e.allWrites,s,t),n||Ds.EMPTY_NODE)}return null}{const r=Eo(e.visibleWrites,t);if(null!=r)return r;{const r=No(e.visibleWrites,t);if(Ro(r))return n;if(null!=n||So(r,Bi())){return Po(r,n||Ds.EMPTY_NODE)}return null}}}function zo(e,t,n,r){return Fo(e.writeTree,e.treePath,t,n,r)}function Uo(e,t){return function(e,t,n){let r=Ds.EMPTY_NODE;const i=Eo(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Es,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=No(e.visibleWrites,t);return n.forEachChild(Es,((e,t)=>{const n=Po(No(i,new Hi(e)),t);r=r.updateImmediateChild(e,n)})),$o(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return $o(No(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function qo(e,t,n,r){return function(e,t,n,r,i){ye(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Xi(t,n);if(So(e.visibleWrites,s))return null;{const t=No(e.visibleWrites,s);return Ro(t)?i.getChild(n):Po(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Wo(e,t){return function(e,t){return Eo(e.visibleWrites,t)}(e.writeTree,Xi(e.treePath,t))}function Vo(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=No(e.visibleWrites,t),c=Eo(l,Bi());if(null!=c)a=c;else{if(null==n)return[];a=Po(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Ho(e,t,n){return function(e,t,n,r){const i=Xi(t,n),s=Eo(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Po(No(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Bo(e,t){return Go(Xi(e.treePath,t),e.writeTree)}function Go(e,t){return{treePath:e,writeTree:t}}
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
     */class Ko{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;ye("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),ye(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Bs(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Hs(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Vs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw _e("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Bs(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
     */const Yo=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Jo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new po(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ho(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:_o(this.viewCache_),i=Vo(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
     */function Qo(e,t,n,r,i){const s=new Ko;let o,a;if(n.type===oo.OVERWRITE){const l=n;l.source.fromUser?o=ea(e,t,l.path,l.snap,r,i,s):(ye(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!es(l.path),o=Xo(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===oo.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Xi(n,r);ta(t,Gi(c))&&(a=ea(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Xi(n,r);ta(t,Gi(c))||(a=ea(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(ye(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=ra(e,t,l.path,l.children,r,i,a,s))}else if(n.type===oo.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Wo(r,n))return t;{const a=new Jo(r,t,i),l=t.eventCache.getNode();let c;if(es(n)||".priority"===Gi(n)){let n;if(t.serverCache.isFullyInitialized())n=zo(r,_o(t));else{const e=t.serverCache.getNode();ye(e instanceof Ds,"serverChildren would be complete if leaf node"),n=Uo(r,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const i=Gi(n);let u=Ho(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Yi(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Ds.EMPTY_NODE,Yi(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=zo(r,_o(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Wo(r,Bi()),vo(t,c,o,e.filter.filtersNodes())}}
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
     */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Wo(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(es(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xo(e,t,n,l.getNode().getChild(n),i,s,a,o);if(es(n)){let r=new ko(null);return l.getNode().forEachChild(gs,((e,t)=>{r=r.set(new Hi(e),t)})),ra(e,t,n,r,i,s,a,o)}return t}{let c=new ko(null);return r.foreach(((e,t)=>{const r=Xi(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),ra(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==oo.LISTEN_COMPLETE)throw _e("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=bo(t,s.getNode(),s.isFullyInitialized()||es(n),s.isFiltered());return Zo(e,o,n,r,Yo,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yo(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ws(yo(t)))}}(t,o,l),{viewCache:o,changes:l}}function Zo(e,t,n,r,i,s){const o=t.eventCache;if(null!=Wo(r,n))return t;{let a,l;if(es(n))if(ye(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=_o(t),i=Uo(r,n instanceof Ds?n:Ds.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=zo(r,_o(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Gi(n);if(".priority"===c){ye(1===Ki(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=qo(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=Yi(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=qo(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Ho(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return vo(t,a,o.isFullyInitialized()||es(n),e.filter.filtersNodes())}}function Xo(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(es(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Gi(n);if(!l.isCompleteForPath(n)&&Ki(n)>1)return t;const i=Yi(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Yo,null)}const h=bo(t,c,l.isFullyInitialized()||es(n),u.filtersNodes());return Zo(e,h,n,i,new Jo(i,h,s),a)}function ea(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Jo(i,t,s);if(es(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=vo(t,c,!0,e.filter.filtersNodes());else{const i=Gi(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=vo(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Yi(n),c=a.getNode().getImmediateChild(i);let h;if(es(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Ji(s)&&e.getChild(Zi(s)).isEmpty()?e:e.updateChild(s,r):Ds.EMPTY_NODE}if(c.equals(h))l=t;else{l=vo(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function ta(e,t){return e.eventCache.isCompleteForChild(t)}function na(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ra(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=es(n)?r:new ko(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=na(0,t.serverCache.getNode().getImmediateChild(n),r);c=Xo(e,c,new Hi(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=na(0,t.serverCache.getNode().getImmediateChild(n),r);c=Xo(e,c,new Hi(n),l,i,s,o,a)}})),c}class ia{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Gs(n.getIndex()),i=(s=n).loadsAllData()?new Gs(s.getIndex()):s.hasLimit()?new Ys(s):new Ks(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(Ds.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Ds.EMPTY_NODE,a.getNode(),null),u=new po(l,o.isFullyInitialized(),r.filtersNodes()),h=new po(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=mo(h,u),this.eventGenerator_=new fo(this.query_)}get query(){return this.query_}}function sa(e,t){const n=_o(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!es(t)&&!n.getImmediateChild(Gi(t)).isEmpty())?n.getChild(t):null}function oa(e){return 0===e.eventRegistrations_.length}function aa(e,t,n){const r=[];if(n){ye(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function la(e,t,n,r){t.type===oo.MERGE&&null!==t.source.queryId&&(ye(_o(e.viewCache_),"We should always have a full cache before handling merges"),ye(yo(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Qo(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,ye(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),ye(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),ye(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ca(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ca(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),go(e,i,"child_removed",t,r,n),go(e,i,"child_added",t,r,n),go(e,i,"child_moved",s,r,n),go(e,i,"child_changed",t,r,n),go(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
     */let ua,ha;class da{constructor(){this.views=new Map}}function pa(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return ye(null!=s,"SyncTree gave us an op for an invalid query."),la(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(la(s,t,n,r));return i}}function fa(e,t,n,r,i,s){const o=function(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=zo(n,i?r:null),s=!1;e?s=!0:r instanceof Ds?(e=Uo(n,r),s=!1):(e=Ds.EMPTY_NODE,s=!1);const o=mo(new po(e,s,!1),new po(r,i,!1));return new ia(t,o)}return o}(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Es,((e,t)=>{r.push(Vs(e,t))}));return n.isFullyInitialized()&&r.push(Ws(n.getNode())),ca(e,r,n.getNode(),t)}(o,n)}function ga(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=_a(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(aa(i,n,r)),oa(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(aa(t,n,r)),oa(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!_a(e)&&s.push(new(ye(ua,"Reference.ts has not been loaded"),ua)(t._repo,t._path)),{removed:s,events:o}}function ma(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function va(e,t){let n=null;for(const r of e.views.values())n=n||sa(r,t);return n}function ba(e,t){if(t._queryParams.loadsAllData())return wa(e);{const n=t._queryIdentifier;return e.views.get(n)}}function ya(e,t){return null!=ba(e,t)}function _a(e){return null!=wa(e)}function wa(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
     */let ka=1;class xa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ko(null),this.pendingWriteTree_={visibleWrites:xo.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ca(e,t,n,r,i){return function(e,t,n,r,i){ye(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Co(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Ra(e,new uo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ia(e,t,n,r){!function(e,t,n,r){ye(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Io(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=ko.fromObject(n);return Ra(e,new ho({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function Ta(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(jo(e.pendingWriteTree_,t)){let t=new ko(null);return null!=r.snap?t=t.set(Bi(),!0):mi(r.children,(e=>{t=t.set(new Hi(e),!0)})),Ra(e,new lo(r.path,t,n))}return[]}function Sa(e,t,n){return Ra(e,new uo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ea(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||ya(s,t))){const a=ga(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>_a(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&_a(t)){return[wa(t)]}{let e=[];return t&&(e=ma(t)),mi(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=Aa(e,r);e.listenProvider_.startListening(za(i),ja(e,i),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(za(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Da(t));e.listenProvider_.stopListening(za(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Da(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function $a(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=ts(e,r);i=i||va(t,n),s=s||_a(t)}));let o,a=e.syncPointTree_.get(r);if(a?(s=s||_a(a),i=i||va(a,Bi())):(a=new da,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)o=!0;else{o=!1,i=Ds.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=va(t,Bi());n&&(i=i.updateImmediateChild(e,n))}))}const l=ya(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=Da(t);ye(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ka++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let c=fa(a,t,n,Ao(e.pendingWriteTree_,r),i,o);if(!l&&!s){const n=ba(a,t);c=c.concat(function(e,t,n){const r=t._path,i=ja(e,t),s=Aa(e,n),o=e.listenProvider_.startListening(za(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)ye(!_a(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!es(e)&&t&&_a(t))return[wa(t).query];{let e=[];return t&&(e=e.concat(ma(t).map((e=>e.query)))),mi(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(za(r),ja(e,r))}}return o}
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
     */(e,t,n))}return c}function Na(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=va(n,ts(e,t));if(r)return r}));return Fo(r,t,i,n,!0)}function Ra(e,t){return Pa(t,e.syncPointTree_,null,Ao(e.pendingWriteTree_,Bi()))}function Pa(e,t,n,r){if(es(e.path))return Oa(e,t,n,r);{const i=t.get(Bi());null==n&&null!=i&&(n=va(i,Bi()));let s=[];const o=Gi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Bo(r,o);s=s.concat(Pa(a,l,e,t))}return i&&(s=s.concat(pa(i,e,r,n))),s}}function Oa(e,t,n,r){const i=t.get(Bi());null==n&&null!=i&&(n=va(i,Bi()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Bo(r,t),l=e.operationForChild(t);l&&(s=s.concat(Oa(l,i,o,a)))})),i&&(s=s.concat(pa(i,e,r,n))),s}function Aa(e,t){const n=t.query,r=ja(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Ds.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=La(e,n);if(r){const n=Ma(r),i=n.path,s=n.queryId,o=ts(i,t);return Fa(e,i,new co(ao(s),o))}return[]}(e,n._path,r):function(e,t){return Ra(e,new co({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Ea(e,n,null,r)}}}}function ja(e,t){const n=Da(t);return e.queryToTagMap.get(n)}function Da(e){return e._path.toString()+"$"+e._queryIdentifier}function La(e,t){return e.tagToQueryMap.get(t)}function Ma(e){const t=e.indexOf("$");return ye(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Hi(e.substr(0,t))}}function Fa(e,t,n){const r=e.syncPointTree_.get(t);ye(r,"Missing sync point for query tag that we're tracking");return pa(r,n,Ao(e.pendingWriteTree_,t),null)}function za(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ye(ha,"Reference.ts has not been loaded"),ha)(e._repo,e._path):e}class Ua{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ua(t)}node(){return this.node_}}class qa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xi(this.path_,e);return new qa(this.syncTree_,t)}node(){return Na(this.syncTree_,this.path_)}}const Wa=function(e,t,n){return e&&"object"==typeof e?(ye(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Va(e[".sv"],t,n):"object"==typeof e[".sv"]?Ha(e[".sv"],t):void ye(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Va=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:ye(!1,"Unexpected server value: "+e)}},Ha=function(e,t,n){e.hasOwnProperty("increment")||ye(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&ye(!1,"Unexpected increment value: "+r);const i=t.node();if(ye(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Ba=function(e,t,n,r){return Ka(t,new qa(n,e),r)},Ga=function(e,t,n){return Ka(e,new Ua(t),n)};function Ka(e,t,n){const r=e.getPriority().val(),i=Wa(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Wa(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Ss(s,Ms(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Ss(i))),r.forEachChild(Es,((e,r)=>{const i=Ka(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
     */class Ya{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ja(e,t){let n=t instanceof Hi?t:new Hi(t),r=e,i=Gi(n);for(;null!==i;){const e=Fe(r.node.children,i)||{children:{},childCount:0};r=new Ya(i,r,e),n=Yi(n),i=Gi(n)}return r}function Qa(e){return e.node.value}function Za(e,t){e.node.value=t,rl(e)}function Xa(e){return e.node.childCount>0}function el(e,t){mi(e.node.children,((n,r)=>{t(new Ya(n,e,r))}))}function tl(e,t,n,r){n&&!r&&t(e),el(e,(e=>{tl(e,t,!0,r)})),n&&r&&t(e)}function nl(e){return new Hi(null===e.parent?e.name:nl(e.parent)+"/"+e.name)}function rl(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Qa(e)&&!Xa(e)}(n),i=Me(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,rl(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,rl(e))}
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
     */(e.parent,e.name,e)}const il=/[\[\].#$\/\u0000-\u001F\u007F]/,sl=/[\[\].#$\u0000-\u001F\u007F]/,ol=10485760,al=function(e){return"string"==typeof e&&0!==e.length&&!il.test(e)},ll=function(e){return"string"==typeof e&&0!==e.length&&!sl.test(e)},cl=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!li(e)||e&&"object"==typeof e&&Me(e,".sv")},ul=function(e,t,n,r){r&&void 0===t||hl(Be(e,"value"),t,n)},hl=function(e,t,n){const r=n instanceof Hi?new ss(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+as(r));if("function"==typeof t)throw new Error(e+"contains a function "+as(r)+" with contents = "+t.toString());if(li(t))throw new Error(e+"contains "+t.toString()+" "+as(r));if("string"==typeof t&&t.length>ol/3&&Ge(t)>ol)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+as(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(mi(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!al(t)))throw new Error(e+" contains an invalid key ("+t+") "+as(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ge(t),os(e)}(r,t),hl(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Ge(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+as(r)+" in addition to actual children.")}},dl=function(e,t,n,r){if(r&&void 0===t)return;const i=Be(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];mi(t,((e,t)=>{const r=new Hi(e);if(hl(i,t,Xi(n,r)),".priority"===Ji(r)&&!cl(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=Qi(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!al(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ns);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&is(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},pl=function(e,t,n,r){if(!(r&&void 0===n||ll(n)))throw new Error(Be(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},fl=function(e,t){if(".info"===Gi(t))throw new Error(e+" failed = Can't modify data under /.info/")},gl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!al(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ll(e)}(n))throw new Error(Be(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class ml{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vl(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||rs(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function bl(e,t,n){vl(e,n),_l(e,(e=>rs(e,t)))}function yl(e,t,n){vl(e,n),_l(e,(e=>is(e,t)||is(t,e)))}function _l(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(wl(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function wl(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();ti&&ri("event: "+n.toString()),_i(r)}}}
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
     */class kl{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ml,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=to(),this.transactionQueueTree_=new Ya,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xl(e,t,n){if(e.stats_=Oi(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Xs(e.repoInfo_,((t,n,r,i)=>{Tl(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Sl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new us(e.repoInfo_,t,((t,n,r,i)=>{Tl(e,t,n,r,i)}),(t=>{Sl(e,t)}),(t=>{!function(e,t){mi(t,((t,n)=>{El(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Pi[n]||(Pi[n]=t()),Pi[n]}(e.repoInfo_,(()=>new so(e.stats_,e.server_))),e.infoData_=new eo,e.infoSyncTree_=new xa({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Sa(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),El(e,"connected",!1),e.serverSyncTree_=new xa({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);yl(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Cl(e){const t=e.infoData_.getNode(new Hi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Il(e){return(t=(t={timestamp:Cl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Tl(e,t,n,r,i){e.dataUpdateCount++;const s=new Hi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=Ue(n,(e=>Ms(e)));o=function(e,t,n,r){const i=La(e,r);if(i){const r=Ma(i),s=r.path,o=r.queryId,a=ts(s,t),l=ko.fromObject(n);return Fa(e,s,new ho(ao(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Ms(n);o=function(e,t,n,r){const i=La(e,r);if(null!=i){const r=Ma(i),s=r.path,o=r.queryId,a=ts(s,t);return Fa(e,s,new uo(ao(o),a,n))}return[]}(e.serverSyncTree_,s,t,i)}else if(r){const t=Ue(n,(e=>Ms(e)));o=function(e,t,n){const r=ko.fromObject(n);return Ra(e,new ho({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Ms(n);o=Sa(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=jl(e,s)),yl(e.eventQueue_,a,o)}function Sl(e,t){El(e,"connected",t),!1===t&&function(e){Rl(e,"onDisconnectEvents");const t=Il(e),n=to();ro(e.onDisconnect_,Bi(),((r,i)=>{const s=Ba(r,i,e.serverSyncTree_,t);no(n,r,s)}));let r=[];ro(n,Bi(),((t,n)=>{r=r.concat(Sa(e.serverSyncTree_,t,n));const i=zl(e,t);jl(e,i)})),e.onDisconnect_=to(),yl(e.eventQueue_,Bi(),r)}(e)}function El(e,t,n){const r=new Hi("/.info/"+t),i=Ms(n);e.infoData_.updateSnapshot(r,i);const s=Sa(e.infoSyncTree_,r,i);yl(e.eventQueue_,r,s)}function $l(e){return e.nextWriteId_++}function Nl(e,t,n){let r;r=".info"===Gi(t._path)?Ea(e.infoSyncTree_,t,n):Ea(e.serverSyncTree_,t,n),bl(e.eventQueue_,t._path,r)}function Rl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ri(n,...t)}function Pl(e,t,n,r){t&&_i((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Ol(e,t,n){return Na(e.serverSyncTree_,t,n)||Ds.EMPTY_NODE}function Al(e,t=e.transactionQueueTree_){if(t||Fl(e,t),Qa(t)){const n=Ll(e,t);ye(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Ol(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];ye(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=ts(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{Rl(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ta(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Fl(e,Ja(e.transactionQueueTree_,t)),Al(e,e.transactionQueueTree_),yl(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)_i(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{ai("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}jl(e,t)}}),o)}(e,nl(t),n)}else Xa(t)&&el(t,(t=>{Al(e,t)}))}function jl(e,t){const n=Dl(e,t),r=nl(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=ts(n,l.path);let u,h=!1;if(ye(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(Ta(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat(Ta(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Ol(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){hl("transaction failed: Data returned ",r,l.path);let t=Ms(r);"object"==typeof r&&null!=r&&Me(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Il(e),c=Ga(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=$l(e),s.splice(s.indexOf(o),1),i=i.concat(Ca(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(Ta(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(Ta(e.serverSyncTree_,l.currentWriteId,!0))}yl(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Fl(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)_i(r[e]);Al(e,e.transactionQueueTree_)}(e,Ll(e,n),r),r}function Dl(e,t){let n,r=e.transactionQueueTree_;for(n=Gi(t);null!==n&&void 0===Qa(r);)r=Ja(r,n),n=Gi(t=Yi(t));return r}function Ll(e,t){const n=[];return Ml(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ml(e,t,n){const r=Qa(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);el(t,(t=>{Ml(e,t,n)}))}function Fl(e,t){const n=Qa(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Za(t,n.length>0?n:void 0)}el(t,(t=>{Fl(e,t)}))}function zl(e,t){const n=nl(Dl(e,t)),r=Ja(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Ul(e,t)})),Ul(e,r),tl(r,(t=>{Ul(e,t)})),n}function Ul(e,t){const n=Qa(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(ye(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(ye(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ta(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Za(t,void 0):n.length=s+1,yl(e.eventQueue_,nl(t),i);for(let e=0;e<r.length;e++)_i(r[e])}}
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
     */const ql=function(e,t){const n=Wl(e),r=n.namespace;"firebase.com"===n.domain&&oi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||oi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ai("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ei(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new Hi(n.pathString)}},Wl=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ai(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Vl{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class Hl{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
     */class Bl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ye(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
     */class Gl{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return es(this._path)?null:Ji(this._path)}get ref(){return new Kl(this._repo,this._path)}get _queryIdentifier(){const e=Zs(this._queryParams),t=fi(e);return"{}"===t?"default":t}get _queryObject(){return Zs(this._queryParams)}isEqual(e){if(!((e=Ke(e))instanceof Gl))return!1;const t=this._repo===e._repo,n=rs(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Kl extends Gl{constructor(e,t){super(e,t,new Js,!1)}get parent(){const e=Zi(this._path);return null===e?null:new Kl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Yl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Hi(e),n=Ql(this.ref,e);return new Yl(this._node.getChild(t),n,Es)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Yl(n,Ql(this.ref,t),Es))))}hasChild(e){const t=new Hi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jl(e,t){return(e=Ke(e))._checkNotDeleted("ref"),void 0!==t?Ql(e._root,t):e._root}function Ql(e,t){var n,r,i,s;return null===Gi((e=Ke(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),pl(n,r,i,s)):pl("child","path",t,!1),new Kl(e._repo,Xi(e._path,t))}function Zl(e,t){e=Ke(e),fl("set",e._path),ul("set",t,e._path,!1);const n=new Te;return function(e,t,n,r,i){Rl(e,"set",{path:t.toString(),value:n,priority:r});const s=Il(e),o=Ms(n,r),a=Na(e.serverSyncTree_,t),l=Ga(o,a,s),c=$l(e),u=Ca(e.serverSyncTree_,t,l,c,!0);vl(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||ai("set at "+t+" failed: "+n);const o=Ta(e.serverSyncTree_,c,!s);yl(e.eventQueue_,t,o),Pl(0,i,n,r)}));const h=zl(e,t);jl(e,h),yl(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Xl(e,t){dl("update",t,e._path,!1);const n=new Te;return function(e,t,n,r){Rl(e,"update",{path:t.toString(),value:n});let i=!0;const s=Il(e),o={};if(mi(n,((n,r)=>{i=!1,o[n]=Ba(Xi(t,n),Ms(r),e.serverSyncTree_,s)})),i)ri("update() called with empty data.  Don't do anything."),Pl(0,r,"ok",void 0);else{const i=$l(e),s=Ia(e.serverSyncTree_,t,o,i);vl(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||ai("update at "+t+" failed: "+n);const a=Ta(e.serverSyncTree_,i,!o),l=a.length>0?jl(e,t):t;yl(e.eventQueue_,l,a),Pl(0,r,n,s)})),mi(n,(n=>{const r=zl(e,Xi(t,n));jl(e,r)})),yl(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class ec{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Vl("value",this,new Yl(e.snapshotNode,new Kl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hl(this,e,t):null}matches(e){return e instanceof ec&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class tc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Hl(this,e,t):null}createEvent(e,t){ye(null!=e.childName,"Child events should have a childName.");const n=Ql(new Kl(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Vl(e.type,this,new Yl(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof tc&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function nc(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Nl(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Bl(n,s||void 0),a="value"===t?new ec(o):new tc(t,o);return function(e,t,n){let r;r=".info"===Gi(t._path)?$a(e.infoSyncTree_,t,n):$a(e.serverSyncTree_,t,n),bl(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Nl(e._repo,e,a)}function rc(e,t,n,r){return nc(e,"value",t,n,r)}class ic extends class{}{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new Hi(this._path);if(es(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Fs(t),r=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return function(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===gs){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==ci)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==ui)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Es){if(null!=t&&!cl(t)||null!=n&&!cl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(ye(e.getIndex()instanceof Fs||e.getIndex()===zs,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}(r),new Gl(e._repo,e._path,r,!0)}}!function(e){ye(!ua,"__referenceConstructor has already been defined"),ua=e}(Kl),function(e){ye(!ha,"__referenceConstructor has already been defined"),ha=e}(Kl);
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
const sc={};function oc(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||oi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ri("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=ql(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=ql(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new Ci(Ci.OWNER):new xi(e.name,e.options,t);gl("Invalid Firebase Database URL",l),es(l.path)||oi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=sc[t.name];i||(i={},sc[t.name]=i);let s=i[e.toURLString()];s&&oi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new kl(e,false,n,r),i[e.toURLString()]=s,s}(c,e,u,new ki(e.name,n));return new ac(h,e)}class ac{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kl(this._repo,Bi())),this._rootInternal}_delete(){return this._checkNotDeleted("delete"),function(e,t){const n=sc[t];n&&n[e.key]===e||oi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null,Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&oi("Cannot call "+e+" on a deleted database.")}}function lc(e=_t(),t){return mt(e,"database-exp").getImmediate({identifier:t})}
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
const cc={".sv":"timestamp"};function uc(e){return{".sv":{increment:e}}}!function(e){!function(e){Hr=e}(yt),gt(new Ye("database-exp",((e,{instanceIdentifier:t})=>oc(e.getProvider("app-exp").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),wt("@firebase/database","0.0.900-exp.6ef484a04",e)}();const hc=[];function dc(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!hc.length;for(const e of i)e[1](),hc.push(e,t);if(e){for(let e=0;e<hc.length;e+=2)hc[e][0](hc[e+1]);hc.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const l=[o,a];return i.add(l),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(l),0===i.size&&(r(),r=null)}}}}const pc=()=>{const e=Wr();return{authStore:{subscribe:dc({user:null,loading:!0},(t=>function(e,t,n,r){return Ke(e).onAuthStateChanged(t,n,r)}(e,(async e=>{t(e?{user:e,loading:!1}:{user:null,loading:!1})})))).subscribe},loginWithGoogle:()=>{const t=new $n;return async function(e,t,n){const r=wn(e);$t(t instanceof Tn,e,"argument-error");const i=Ir(r,n);return new qr(r,"signInViaPopup",t,i).executeNotNull()}(e,t).then((async e=>{const{user:t}=e;if(t&&t.metadata.creationTime==t.metadata.lastSignInTime){const e=Jl(lc(),`users/info/${t.uid}`);await Zl(e,{name:t.displayName.split(" ")[0],photo:t.photoURL}),await Dn(t,{displayName:t.displayName.split(" ")[0]})}}))},logout:()=>function(e){return Ke(e).signOut()}(e)}};function fc(e){y(e,"svelte-w3gddz",".r-h-4.svelte-w3gddz{height:1rem}.r-w-4.svelte-w3gddz{width:1rem}")}function gc(t){let n,r,i,s;return{c(){n=C("svg"),r=C("path"),i=C("polyline"),s=C("line"),$(r,"d","M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"),$(i,"points","16 17 21 12 16 7"),$(s,"x1","21"),$(s,"y1","12"),$(s,"x2","9"),$(s,"y2","12"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"width","24"),$(n,"height","24"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","r-h-4 r-w-4 svelte-w3gddz")},m(e,t){_(e,n,t),b(n,r),b(n,i),b(n,s)},p:e,i:e,o:e,d(e){e&&w(n)}}}
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
wt("firebase-exp","9.0.0-beta.7","app");class mc extends ce{constructor(e){super(),le(this,e,null,gc,o,{},fc)}}var vc=function(e){var t=e.map((function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})),n={},r={};e.forEach((function(e,i){n[e]=t[i],r[t[i]]=e}));var i=new RegExp("["+(e.join("").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+"]"),"g"),s=new RegExp(t.join("|"),"g");return{encode:function(e){return e.replace(i,(function(e){return n[e]}))},decode:function(e){return e.replace(s,(function(e){return r[e]}))}}},bc=vc(".$[]#/%".split("")),yc=bc.encode;bc.decode;var _c=vc(".$[]#%".split(""));_c.encode,_c.decode;var wc=yc;function kc(e){y(e,"svelte-1aj0ubb",'.svelte-1aj0ubb.svelte-1aj0ubb,.svelte-1aj0ubb.svelte-1aj0ubb::before,.svelte-1aj0ubb.svelte-1aj0ubb::after{box-sizing:border-box}button.svelte-1aj0ubb.svelte-1aj0ubb{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1aj0ubb.svelte-1aj0ubb{text-transform:none}button.svelte-1aj0ubb.svelte-1aj0ubb,[type=\'button\'].svelte-1aj0ubb.svelte-1aj0ubb{-webkit-appearance:button}.svelte-1aj0ubb.svelte-1aj0ubb::-moz-focus-inner{border-style:none;padding:0}.svelte-1aj0ubb.svelte-1aj0ubb:-moz-focusring{outline:1px dotted ButtonText}.svelte-1aj0ubb.svelte-1aj0ubb:-moz-ui-invalid{box-shadow:none}.svelte-1aj0ubb.svelte-1aj0ubb::-webkit-inner-spin-button,.svelte-1aj0ubb.svelte-1aj0ubb::-webkit-outer-spin-button{height:auto}.svelte-1aj0ubb.svelte-1aj0ubb::-webkit-search-decoration{-webkit-appearance:none}.svelte-1aj0ubb.svelte-1aj0ubb::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}button.svelte-1aj0ubb.svelte-1aj0ubb{background-color:transparent;background-image:none}.svelte-1aj0ubb.svelte-1aj0ubb,.svelte-1aj0ubb.svelte-1aj0ubb::before,.svelte-1aj0ubb.svelte-1aj0ubb::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1aj0ubb.svelte-1aj0ubb{cursor:pointer}button.svelte-1aj0ubb.svelte-1aj0ubb{padding:0;line-height:inherit;color:inherit}.svelte-1aj0ubb.svelte-1aj0ubb,.svelte-1aj0ubb.svelte-1aj0ubb::before,.svelte-1aj0ubb.svelte-1aj0ubb::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}.form-input.svelte-1aj0ubb.svelte-1aj0ubb,.form-textarea.svelte-1aj0ubb.svelte-1aj0ubb,.form-select.svelte-1aj0ubb.svelte-1aj0ubb,.form-multiselect.svelte-1aj0ubb.svelte-1aj0ubb{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}.form-input.svelte-1aj0ubb.svelte-1aj0ubb:focus,.form-textarea.svelte-1aj0ubb.svelte-1aj0ubb:focus,.form-select.svelte-1aj0ubb.svelte-1aj0ubb:focus,.form-multiselect.svelte-1aj0ubb.svelte-1aj0ubb:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}.form-input.svelte-1aj0ubb.svelte-1aj0ubb::-moz-placeholder,.form-textarea.svelte-1aj0ubb.svelte-1aj0ubb::-moz-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1aj0ubb.svelte-1aj0ubb:-ms-input-placeholder,.form-textarea.svelte-1aj0ubb.svelte-1aj0ubb:-ms-input-placeholder{color:#6b7280;opacity:1}.form-input.svelte-1aj0ubb.svelte-1aj0ubb::placeholder,.form-textarea.svelte-1aj0ubb.svelte-1aj0ubb::placeholder{color:#6b7280;opacity:1}.r-prose.svelte-1aj0ubb.svelte-1aj0ubb{color:#374151;max-width:65ch}.r-prose.svelte-1aj0ubb.svelte-1aj0ubb{font-size:1rem;line-height:1.75}.r-prose.svelte-1aj0ubb>.svelte-1aj0ubb:first-child{margin-top:0}.r-prose.svelte-1aj0ubb>.svelte-1aj0ubb:last-child{margin-bottom:0}.r-fixed.svelte-1aj0ubb.svelte-1aj0ubb{position:fixed}.r-top-6.svelte-1aj0ubb.svelte-1aj0ubb{top:1.5rem}.r-right-6.svelte-1aj0ubb.svelte-1aj0ubb{right:1.5rem}.r-mx-auto.svelte-1aj0ubb.svelte-1aj0ubb{margin-left:auto;margin-right:auto}.r-my-16.svelte-1aj0ubb.svelte-1aj0ubb{margin-top:4rem;margin-bottom:4rem}.r-mx-4.svelte-1aj0ubb.svelte-1aj0ubb{margin-left:1rem;margin-right:1rem}.r-mt-4.svelte-1aj0ubb.svelte-1aj0ubb{margin-top:1rem}.r-mt-16.svelte-1aj0ubb.svelte-1aj0ubb{margin-top:4rem}.r-mb-2.svelte-1aj0ubb.svelte-1aj0ubb{margin-bottom:0.5rem}.r-mt-8.svelte-1aj0ubb.svelte-1aj0ubb{margin-top:2rem}.r-mr-2.svelte-1aj0ubb.svelte-1aj0ubb{margin-right:0.5rem}.r-flex.svelte-1aj0ubb.svelte-1aj0ubb{display:flex}.r-hidden.svelte-1aj0ubb.svelte-1aj0ubb{display:none}.r-h-9.svelte-1aj0ubb.svelte-1aj0ubb{height:2.25rem}.r-h-28.svelte-1aj0ubb.svelte-1aj0ubb{height:7rem}.r-h-12.svelte-1aj0ubb.svelte-1aj0ubb{height:3rem}.r-h-6.svelte-1aj0ubb.svelte-1aj0ubb{height:1.5rem}.r-h-4.svelte-1aj0ubb.svelte-1aj0ubb{height:1rem}.r-max-h-96.svelte-1aj0ubb.svelte-1aj0ubb{max-height:24rem}.r-w-full.svelte-1aj0ubb.svelte-1aj0ubb{width:100%}.r-w-12.svelte-1aj0ubb.svelte-1aj0ubb{width:3rem}.r-w-6.svelte-1aj0ubb.svelte-1aj0ubb{width:1.5rem}.r-w-4.svelte-1aj0ubb.svelte-1aj0ubb{width:1rem}.r-max-w-none.svelte-1aj0ubb.svelte-1aj0ubb{max-width:none}.r-max-w-full.svelte-1aj0ubb.svelte-1aj0ubb{max-width:100%}.r-flex-grow.svelte-1aj0ubb.svelte-1aj0ubb{flex-grow:1}.r-flex-col.svelte-1aj0ubb.svelte-1aj0ubb{flex-direction:column}.r-items-center.svelte-1aj0ubb.svelte-1aj0ubb{align-items:center}.r-justify-end.svelte-1aj0ubb.svelte-1aj0ubb{justify-content:flex-end}.r-gap-10.svelte-1aj0ubb.svelte-1aj0ubb{gap:2.5rem}.r-gap-2.svelte-1aj0ubb.svelte-1aj0ubb{gap:0.5rem}.r-gap-4.svelte-1aj0ubb.svelte-1aj0ubb{gap:1rem}.r-self-end.svelte-1aj0ubb.svelte-1aj0ubb{align-self:flex-end}.r-overflow-scroll.svelte-1aj0ubb.svelte-1aj0ubb{overflow:scroll}.r-break-words.svelte-1aj0ubb.svelte-1aj0ubb{overflow-wrap:break-word}.r-rounded-md.svelte-1aj0ubb.svelte-1aj0ubb{border-radius:0.375rem}.r-rounded-full.svelte-1aj0ubb.svelte-1aj0ubb{border-radius:9999px}.\\!r-rounded-lg.svelte-1aj0ubb.svelte-1aj0ubb{border-radius:0.5rem !important}.r-border-gray-300.svelte-1aj0ubb.svelte-1aj0ubb{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.r-bg-gray-100.svelte-1aj0ubb.svelte-1aj0ubb{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.r-bg-primary-100.svelte-1aj0ubb.svelte-1aj0ubb{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.r-bg-primary-50.svelte-1aj0ubb.svelte-1aj0ubb{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.r-bg-primary-200.svelte-1aj0ubb.svelte-1aj0ubb{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.r-bg-white.svelte-1aj0ubb.svelte-1aj0ubb{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.r-bg-gradient-to-r.svelte-1aj0ubb.svelte-1aj0ubb{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.r-from-primary-100.svelte-1aj0ubb.svelte-1aj0ubb{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.r-via-blue-100.svelte-1aj0ubb.svelte-1aj0ubb{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.r-to-purple-100.svelte-1aj0ubb.svelte-1aj0ubb{--tw-gradient-to:#ede9fe}.r-py-1.svelte-1aj0ubb.svelte-1aj0ubb{padding-top:0.25rem;padding-bottom:0.25rem}.r-px-6.svelte-1aj0ubb.svelte-1aj0ubb{padding-left:1.5rem;padding-right:1.5rem}.r-py-4.svelte-1aj0ubb.svelte-1aj0ubb{padding-top:1rem;padding-bottom:1rem}.r-px-4.svelte-1aj0ubb.svelte-1aj0ubb{padding-left:1rem;padding-right:1rem}.r-px-2.svelte-1aj0ubb.svelte-1aj0ubb{padding-left:0.5rem;padding-right:0.5rem}.r-py-2.svelte-1aj0ubb.svelte-1aj0ubb{padding-top:0.5rem;padding-bottom:0.5rem}.\\!r-px-3.svelte-1aj0ubb.svelte-1aj0ubb{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!r-py-1\\.5.svelte-1aj0ubb.svelte-1aj0ubb{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!r-py-1.svelte-1aj0ubb.svelte-1aj0ubb{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.r-font-sans.svelte-1aj0ubb.svelte-1aj0ubb{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.r-text-3xl.svelte-1aj0ubb.svelte-1aj0ubb{font-size:1.875rem;line-height:2.25rem}.r-text-2xl.svelte-1aj0ubb.svelte-1aj0ubb{font-size:1.5rem;line-height:2rem}.r-text-base.svelte-1aj0ubb.svelte-1aj0ubb{font-size:1rem;line-height:1.5rem}.r-text-lg.svelte-1aj0ubb.svelte-1aj0ubb{font-size:1.125rem;line-height:1.75rem}.r-font-bold.svelte-1aj0ubb.svelte-1aj0ubb{font-weight:700}.r-font-medium.svelte-1aj0ubb.svelte-1aj0ubb{font-weight:500}.r-font-normal.svelte-1aj0ubb.svelte-1aj0ubb{font-weight:400}.r-font-semibold.svelte-1aj0ubb.svelte-1aj0ubb{font-weight:600}.r-text-white.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.r-text-black.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.r-text-primary-600.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.r-text-gray-700.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.r-text-primary-900.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.r-text-gray-600.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.r-text-primary-800.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.r-text-primary-500.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.r-text-gray-400.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.r-text-red-600.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.r-text-pink-600.svelte-1aj0ubb.svelte-1aj0ubb{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!r-ring-1.svelte-1aj0ubb.svelte-1aj0ubb{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!r-ring-primary-500.svelte-1aj0ubb.svelte-1aj0ubb{--tw-ring-opacity:1 !important;--tw-ring-color:rgba(14, 165, 233, var(--tw-ring-opacity)) !important}.hover\\:r-bg-primary-100.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.hover\\:r-bg-primary-200.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:r-bg-red-100\\/60.svelte-1aj0ubb.svelte-1aj0ubb:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:r-bg-pink-100\\/60.svelte-1aj0ubb.svelte-1aj0ubb:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:r-bg-primary-50.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.hover\\:r-from-primary-200.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0))}.hover\\:r-via-blue-200.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0))}.hover\\:r-to-purple-200.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-gradient-to:#ddd6fe}.hover\\:\\!r-shadow-md.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!r-ring-2.svelte-1aj0ubb.svelte-1aj0ubb:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:r-cursor-not-allowed.svelte-1aj0ubb.svelte-1aj0ubb:disabled{cursor:not-allowed}.disabled\\:r-bg-gray-100.svelte-1aj0ubb.svelte-1aj0ubb:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:r-text-gray-600.svelte-1aj0ubb.svelte-1aj0ubb:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:r-opacity-70.svelte-1aj0ubb.svelte-1aj0ubb:disabled{opacity:0.7}.disabled\\:hover\\:r-from-primary-100.svelte-1aj0ubb.svelte-1aj0ubb:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.disabled\\:hover\\:r-via-blue-100.svelte-1aj0ubb.svelte-1aj0ubb:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}')}function xc(e,t,n){const r=e.slice();return r[17]=t[n],r[19]=n,r}function Cc(e,t){let n,r,i,s,o,a,l,c,u,h=t[17]+"",d=(t[4]?"-":t[3][t[17]])+"";function p(){return t[8](t[17])}return{key:e,first:null,c(){n=x("button"),r=x("span"),i=I(h),s=T(),o=I(d),a=T(),$(r,"class","r-mr-2 svelte-1aj0ubb"),$(n,"type","button"),$(n,"class",l=v((t[2].includes(t[17])?"r-bg-primary-200 hover:r-bg-primary-100 dark:!r-bg-primary-800 dark:hover:!r-bg-primary-600":"r-bg-white dark:!r-bg-gray-700 hover:r-bg-primary-50 dark:hover:!r-bg-primary-600")+" !r-px-3 !r-py-1.5 !r-rounded-lg !r-ring-1 !r-ring-primary-500 hover:!r-ring-2 hover:!r-shadow-md")+" svelte-1aj0ubb"),this.first=n},m(e,t){_(e,n,t),b(n,r),b(r,i),b(n,s),b(n,o),b(n,a),c||(u=E(n,"click",p),c=!0)},p(e,r){t=e,1&r&&h!==(h=t[17]+"")&&N(i,h),25&r&&d!==(d=(t[4]?"-":t[3][t[17]])+"")&&N(o,d),5&r&&l!==(l=v((t[2].includes(t[17])?"r-bg-primary-200 hover:r-bg-primary-100 dark:!r-bg-primary-800 dark:hover:!r-bg-primary-600":"r-bg-white dark:!r-bg-gray-700 hover:r-bg-primary-50 dark:hover:!r-bg-primary-600")+" !r-px-3 !r-py-1.5 !r-rounded-lg !r-ring-1 !r-ring-primary-500 hover:!r-ring-2 hover:!r-shadow-md")+" svelte-1aj0ubb")&&$(n,"class",l)},d(e){e&&w(n),c=!1,u()}}}function Ic(t){let n,r=[],i=new Map,s=t[0];const o=e=>e[19];for(let e=0;e<s.length;e+=1){let n=xc(t,s,e),a=o(n);i.set(a,r[e]=Cc(a,n))}return{c(){n=x("div");for(let e=0;e<r.length;e+=1)r[e].c();$(n,"class","r-flex r-gap-4 r-text-2xl r-mt-8 svelte-1aj0ubb")},m(e,t){_(e,n,t);for(let e=0;e<r.length;e+=1)r[e].m(n,null)},p(e,[t]){61&t&&(s=e[0],r=te(r,t,o,1,e,s,i,n,X,Cc,null,xc))},i:e,o:e,d(e){e&&w(n);for(let e=0;e<r.length;e+=1)r[e].d()}}}function Tc(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s()));let o,a,l,{reactions:c=["😭","😕","😀","🤩"]}=n,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=pc();o=e.authStore,s(),s=u(o,(e=>r(7,i=e))),a=e.loginWithGoogle,l=e.logout}catch(e){throw e}const d=lc();let p=[],f={};c.forEach((e=>r(3,f[e]=0,f)));let g=!0,m=!0;const v=e=>{!i.user||m||g||(p.includes(e)?(async e=>{r(2,p=p.filter((t=>t!==e))),r(3,f[e]--,f),r(3,f={...f});const t=`posts/${wc(h)}/reactions`,n=`users/activity/${i.user.uid}/${wc(h)}/reactions`,s={};s[`${t}/count/${e}`]=uc(-1),s[`${t}/users/${e}/${i.user.uid}`]=null,s[`${n}/${e}`]=null,Xl(Jl(d),s)})(e):(async e=>{r(2,p=[...p,e]),r(3,f[e]++,f),r(3,f={...f});const t=`posts/${wc(h)}/reactions`,n=`users/activity/${i.user.uid}/${wc(h)}/reactions`,s={};s[`${t}/count/${e}`]=uc(1),s[`${t}/users/${e}/${i.user.uid}`]=!0,s[`${n}/${e}`]=!0,Xl(Jl(d),s)})(e))};return t.$$set=e=>{"reactions"in e&&r(0,c=e.reactions),"page"in e&&r(6,h=e.page)},t.$$.update=()=>{192&t.$$.dirty&&(rc(Jl(d,`posts/${wc(h)}/reactions/count`),(e=>{var t;t=e.val()??{},Object.entries(t??{}).forEach((([e,t])=>{r(3,f[e]=t,f)})),r(4,m=!1)}),{onlyOnce:!0}),i.user?rc(Jl(d,`users/activity/${i.user.uid}/${wc(h)}/reactions`),(e=>{var t;t=e.val()??{},r(2,p=Object.keys(t)),g=!1}),{onlyOnce:!0}):r(2,p=[]))},[c,o,p,f,m,v,h,i,e=>v(e)]}class Sc extends ce{constructor(e){super(),le(this,e,Tc,Ic,o,{reactions:0,page:6},kc)}}var Ec="en",$c={},Nc={};function Rc(){return Ec}function Pc(e){return $c[e]?e:Nc[e.toLowerCase()]?Nc[e.toLowerCase()]:void 0}function Oc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.localeMatcher||"lookup";switch(n){case"lookup":case"best fit":return Ac(e);default:throw new RangeError('Invalid "localeMatcher" option: '.concat(n))}}function Ac(e){var t=Pc(e);if(t)return t;for(var n=e.split("-");e.length>1;){n.pop();var r=Pc(e=n.join("-"));if(r)return r}}var jc={af:function(e){return 1==e?"one":"other"},am:function(e){return e>=0&&e<=1?"one":"other"},ar:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 0==e?"zero":1==e?"one":2==e?"two":n>=3&&n<=10?"few":n>=11&&n<=99?"many":"other"},ast:function(e){var t=!String(e).split(".")[1];return 1==e&&t?"one":"other"},be:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2);return 1==r&&11!=i?"one":r>=2&&r<=4&&(i<12||i>14)?"few":n&&0==r||r>=5&&r<=9||i>=11&&i<=14?"many":"other"},br:function(e){var t=String(e).split("."),n=Number(t[0])==e,r=n&&t[0].slice(-1),i=n&&t[0].slice(-2),s=n&&t[0].slice(-6);return 1==r&&11!=i&&71!=i&&91!=i?"one":2==r&&12!=i&&72!=i&&92!=i?"two":(3==r||4==r||9==r)&&(i<10||i>19)&&(i<70||i>79)&&(i<90||i>99)?"few":0!=e&&n&&0==s?"many":"other"},bs:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==s&&11!=o||1==a&&11!=l?"one":i&&s>=2&&s<=4&&(o<12||o>14)||a>=2&&a<=4&&(l<12||l>14)?"few":"other"},cs:function(e){var t=String(e).split("."),n=t[0],r=!t[1];return 1==e&&r?"one":n>=2&&n<=4&&r?"few":r?"other":"many"},cy:function(e){return 0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},da:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e;return 1!=e&&(r||0!=n&&1!=n)?"other":"one"},dsb:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-2),o=r.slice(-2);return i&&1==s||1==o?"one":i&&2==s||2==o?"two":i&&(3==s||4==s)||3==o||4==o?"few":"other"},dz:function(e){return"other"},fil:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=r.slice(-1);return i&&(1==n||2==n||3==n)||i&&4!=s&&6!=s&&9!=s||!i&&4!=o&&6!=o&&9!=o?"one":"other"},fr:function(e){return e>=0&&e<2?"one":"other"},ga:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e?"one":2==e?"two":n&&e>=3&&e<=6?"few":n&&e>=7&&e<=10?"many":"other"},gd:function(e){var t=String(e).split("."),n=Number(t[0])==e;return 1==e||11==e?"one":2==e||12==e?"two":n&&e>=3&&e<=10||n&&e>=13&&e<=19?"few":"other"},he:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=Number(t[0])==e,s=i&&t[0].slice(-1);return 1==e&&r?"one":2==n&&r?"two":r&&(e<0||e>10)&&i&&0==s?"many":"other"},is:function(e){var t=String(e).split("."),n=t[0],r=Number(t[0])==e,i=n.slice(-1),s=n.slice(-2);return r&&1==i&&11!=s||!r?"one":"other"},ksh:function(e){return 0==e?"zero":1==e?"one":"other"},lt:function(e){var t=String(e).split("."),n=t[1]||"",r=Number(t[0])==e,i=r&&t[0].slice(-1),s=r&&t[0].slice(-2);return 1==i&&(s<11||s>19)?"one":i>=2&&i<=9&&(s<11||s>19)?"few":0!=n?"many":"other"},lv:function(e){var t=String(e).split("."),n=t[1]||"",r=n.length,i=Number(t[0])==e,s=i&&t[0].slice(-1),o=i&&t[0].slice(-2),a=n.slice(-2),l=n.slice(-1);return i&&0==s||o>=11&&o<=19||2==r&&a>=11&&a<=19?"zero":1==s&&11!=o||2==r&&1==l&&11!=a||2!=r&&1==l?"one":"other"},mk:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"",i=!t[1],s=n.slice(-1),o=n.slice(-2),a=r.slice(-1),l=r.slice(-2);return i&&1==s&&11!=o||1==a&&11!=l?"one":"other"},mt:function(e){var t=String(e).split("."),n=Number(t[0])==e&&t[0].slice(-2);return 1==e?"one":0==e||n>=2&&n<=10?"few":n>=11&&n<=19?"many":"other"},pa:function(e){return 0==e||1==e?"one":"other"},pl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),s=n.slice(-2);return 1==e&&r?"one":r&&i>=2&&i<=4&&(s<12||s>14)?"few":r&&1!=n&&(0==i||1==i)||r&&i>=5&&i<=9||r&&s>=12&&s<=14?"many":"other"},pt:function(e){var t=String(e).split(".")[0];return 0==t||1==t?"one":"other"},ro:function(e){var t=String(e).split("."),n=!t[1],r=Number(t[0])==e&&t[0].slice(-2);return 1==e&&n?"one":!n||0==e||1!=e&&r>=1&&r<=19?"few":"other"},ru:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-1),s=n.slice(-2);return r&&1==i&&11!=s?"one":r&&i>=2&&i<=4&&(s<12||s>14)?"few":r&&0==i||r&&i>=5&&i<=9||r&&s>=11&&s<=14?"many":"other"},se:function(e){return 1==e?"one":2==e?"two":"other"},si:function(e){var t=String(e).split("."),n=t[0],r=t[1]||"";return 0==e||1==e||0==n&&1==r?"one":"other"},sl:function(e){var t=String(e).split("."),n=t[0],r=!t[1],i=n.slice(-2);return r&&1==i?"one":r&&2==i?"two":r&&(3==i||4==i)||!r?"few":"other"}};jc.as=jc.am,jc.az=jc.af,jc.bg=jc.af,jc.bn=jc.am,jc.ca=jc.ast,jc.ce=jc.af,jc.chr=jc.af,jc.de=jc.ast,jc.ee=jc.af,jc.el=jc.af,jc.en=jc.ast,jc.es=jc.af,jc.et=jc.ast,jc.eu=jc.af,jc.fa=jc.am,jc.fi=jc.ast,jc.fo=jc.af,jc.fur=jc.af,jc.fy=jc.ast,jc.gl=jc.ast,jc.gu=jc.am,jc.hi=jc.am,jc.hr=jc.bs,jc.hsb=jc.dsb,jc.hu=jc.af,jc.hy=jc.fr,jc.ia=jc.ast,jc.id=jc.dz,jc.it=jc.ast,jc.ja=jc.dz,jc.jgo=jc.af,jc.jv=jc.dz,jc.ka=jc.af,jc.kea=jc.dz,jc.kk=jc.af,jc.kl=jc.af,jc.km=jc.dz,jc.kn=jc.am,jc.ko=jc.dz,jc.ku=jc.af,jc.ky=jc.af,jc.lb=jc.af,jc.lkt=jc.dz,jc.lo=jc.dz,jc.ml=jc.af,jc.mn=jc.af,jc.mr=jc.am,jc.ms=jc.dz,jc.my=jc.dz,jc.nb=jc.af,jc.ne=jc.af,jc.nl=jc.ast,jc.nn=jc.af,jc.or=jc.af,jc.ps=jc.af,jc["pt-PT"]=jc.ast,jc.sah=jc.dz,jc.sd=jc.af,jc.sk=jc.cs,jc.so=jc.af,jc.sq=jc.af,jc.sr=jc.bs,jc.sv=jc.ast,jc.sw=jc.ast,jc.ta=jc.af,jc.te=jc.af,jc.th=jc.dz,jc.ti=jc.pa,jc.tk=jc.af,jc.to=jc.dz,jc.tr=jc.af,jc.ug=jc.af,jc.uk=jc.ru,jc.ur=jc.ast,jc.uz=jc.af,jc.vi=jc.dz,jc.wae=jc.af,jc.yi=jc.ast,jc.yue=jc.dz,jc.zh=jc.dz,jc.zu=jc.am;var Dc=jc;function Lc(e){return"pt-PT"===e?e:function(e){var t=e.match(Mc);if(!t)throw new TypeError("Invalid locale: ".concat(e));return t[1]}(e)}var Mc=/^([a-z0-9]+)/i;function Fc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var zc=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=e.supportedLocalesOf(t);if(0===r.length)throw new RangeError("Unsupported locale: "+t);if(n&&"cardinal"!==n.type)throw new RangeError('Only "cardinal" "type" is supported');this.$=Dc[Lc(r[0])]}var t,n,r;return t=e,r=[{key:"supportedLocalesOf",value:function(e){return"string"==typeof e&&(e=[e]),e.filter((function(e){return Dc[Lc(e)]}))}}],(n=[{key:"select",value:function(e){return this.$(e)}}])&&Fc(t.prototype,n),r&&Fc(t,r),e}();function Uc(e){return(Uc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function qc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Bc(e,t,n[t])}))}return e}function Wc(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Vc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Bc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gc=["second","minute","hour","day","week","month","quarter","year"],Kc=["auto","always"],Yc=["long","short","narrow"],Jc=["lookup","best fit"],Qc=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Vc(this,e),Bc(this,"numeric","always"),Bc(this,"style","long"),Bc(this,"localeMatcher","lookup");var r=n.numeric,i=n.style,s=n.localeMatcher;if(void 0!==r){if(Kc.indexOf(r)<0)throw new RangeError('Invalid "numeric" option: '.concat(r));this.numeric=r}if(void 0!==i){if(Yc.indexOf(i)<0)throw new RangeError('Invalid "style" option: '.concat(i));this.style=i}if(void 0!==s){if(Jc.indexOf(s)<0)throw new RangeError('Invalid "localeMatcher" option: '.concat(s));this.localeMatcher=s}if("string"==typeof t&&(t=[t]),t.push(Rc()),this.locale=e.supportedLocalesOf(t,{localeMatcher:this.localeMatcher})[0],!this.locale)throw new Error("No supported locale was found");zc.supportedLocalesOf(this.locale).length>0?this.pluralRules=new zc(this.locale):console.warn('"'.concat(this.locale,'" locale is not supported')),"undefined"!=typeof Intl&&Intl.NumberFormat?(this.numberFormat=new Intl.NumberFormat(this.locale),this.numberingSystem=this.numberFormat.resolvedOptions().numberingSystem):this.numberingSystem="latn",this.locale=Oc(this.locale,{localeMatcher:this.localeMatcher})}var t,n,r;return t=e,(n=[{key:"format",value:function(){var e=tu(arguments),t=Wc(e,2),n=t[0],r=t[1];return this.getRule(n,r).replace("{0}",this.formatNumber(Math.abs(n)))}},{key:"formatToParts",value:function(){var e=tu(arguments),t=Wc(e,2),n=t[0],r=t[1],i=this.getRule(n,r),s=i.indexOf("{0}");if(s<0)return[{type:"literal",value:i}];var o=[];return s>0&&o.push({type:"literal",value:i.slice(0,s)}),o=o.concat(this.formatNumberToParts(Math.abs(n)).map((function(e){return qc({},e,{unit:r})}))),s+"{0}".length<i.length-1&&o.push({type:"literal",value:i.slice(s+"{0}".length)}),o}},{key:"getRule",value:function(e,t){var n=function(e){return $c[e]}(this.locale)[this.style][t];if("auto"===this.numeric)if(-2===e||-1===e){var r=n["previous".concat(-1===e?"":"-"+Math.abs(e))];if(r)return r}else if(1===e||2===e){var i=n["next".concat(1===e?"":"-"+Math.abs(e))];if(i)return i}else if(0===e&&n.current)return n.current;var s,o=n[(s=e,s<0||0===s&&function(e){return 1/e==-1/0}(s)?"past":"future")];return"string"==typeof o?o:o[this.pluralRules&&this.pluralRules.select(Math.abs(e))||"other"]||o.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"formatNumberToParts",value:function(e){return this.numberFormat&&this.numberFormat.formatToParts?this.numberFormat.formatToParts(e):[{type:"integer",value:this.formatNumber(e)}]}},{key:"resolvedOptions",value:function(){return{locale:this.locale,style:this.style,numeric:this.numeric,numberingSystem:this.numberingSystem}}}])&&Hc(t.prototype,n),r&&Hc(t,r),e}();Qc.supportedLocalesOf=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e)e=[e];else if(!Array.isArray(e))throw new TypeError('Invalid "locales" argument');return e.filter((function(e){return Oc(e,t)}))},Qc.addLocale=function(e){if(!e)throw new Error("No locale data passed");$c[e.locale]=e,Nc[e.locale.toLowerCase()]=e.locale},Qc.setDefaultLocale=function(e){Ec=e},Qc.getDefaultLocale=Rc,Qc.PluralRules=zc;var Zc='Invalid "unit" argument';function Xc(e){if("symbol"===Uc(e))throw new TypeError(Zc);if("string"!=typeof e)throw new RangeError("".concat(Zc,": ").concat(e));if("s"===e[e.length-1]&&(e=e.slice(0,e.length-1)),Gc.indexOf(e)<0)throw new RangeError("".concat(Zc,": ").concat(e));return e}function eu(e){if(e=Number(e),Number.isFinite&&!Number.isFinite(e))throw new RangeError("".concat('Invalid "number" argument',": ").concat(e));return e}function tu(e){if(e.length<2)throw new TypeError('"unit" argument is required');return[eu(e[0]),Xc(e[1])]}function nu(e){return(nu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ru(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var iu=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r={},(n="cache")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,r;return t=e,(n=[{key:"get",value:function(){for(var e=this.cache,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i=0;i<n.length;i++){var s=n[i];if("object"!==nu(e))return;e=e[s]}return e}},{key:"put",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.pop(),i=t.pop(),s=this.cache,o=0;o<t.length;o++){var a=t[o];"object"!==nu(s[a])&&(s[a]={}),s=s[a]}return s[i]=r}}])&&ru(t.prototype,n),r&&ru(t,r),e}();function su(e){return(su="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ou(e,t){var n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if((i=n.next()).done)break;s=i.value}var o=s;if(t(o))return o;for(var a=o.split("-");a.length>1;)if(a.pop(),t(o=a.join("-")))return o}throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")))}var au=60,lu=3600,cu=86400,uu=7*cu,hu=2630016,du=31556952;function pu(e){switch(e){case"second":return 1;case"minute":return au;case"hour":return lu;case"day":return cu;case"week":return uu;case"month":return hu;case"year":return du}}function fu(e){return void 0!==e.factor?e.factor:pu(e.unit||e.formatAs)||1}function gu(e){switch(e){case"floor":return Math.floor;default:return Math.round}}function mu(e){switch(e){case"floor":return 1;default:return.5}}function vu(e){return(vu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function bu(e,t){var n,r=t.prevStep,i=t.timestamp,s=t.now,o=t.future,a=t.round;return r&&(r.id||r.unit)&&(n=e["threshold_for_".concat(r.id||r.unit)]),void 0===n&&void 0!==e.threshold&&"function"==typeof(n=e.threshold)&&(n=n(s,o)),void 0===n&&(n=e.minTime),"object"===vu(n)&&(n=r&&r.id&&void 0!==n[r.id]?n[r.id]:n.default),"function"==typeof n&&(n=n(i,{future:o,getMinTimeForUnit:function(e,t){return yu(e,t||r&&r.formatAs,{round:a})}})),void 0===n&&e.test&&(n=e.test(i,{now:s,future:o})?0:9007199254740991),void 0===n&&(r?e.formatAs&&r.formatAs&&(n=yu(e.formatAs,r.formatAs,{round:a})):n=0),void 0===n&&console.warn("[javascript-time-ago] A step should specify `minTime`:\n"+JSON.stringify(e,null,2)),n}function yu(e,t,n){var r,i=n.round,s=pu(e);if(r=pu("now"===t?e:t),void 0!==s&&void 0!==r)return s-r*(1-mu(i))}function _u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){wu(e,t,n[t])}))}return e}function wu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ku(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.units,a=n.getNextStep,l=function(e,t,n){var r=n.now,i=n.future,s=n.round;if(0===e.length)return;var o=xu(e,t,{now:r,future:i||t<0,round:s});if(-1===o)return;var a=e[o];if(a.granularity){if(0===gu(s)(Math.abs(t)/fu(a)/a.granularity)*a.granularity&&o>0)return e[o-1]}return a}(e=function(e,t){return e.filter((function(e){var n=e.unit,r=e.formatAs;return!(n=n||r)||t.indexOf(n)>=0}))}(e,o),t,{now:r,future:i,round:s});return a?l?[e[e.indexOf(l)-1],l,e[e.indexOf(l)+1]]:[void 0,void 0,e[0]]:l}function xu(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=bu(e[r],_u({prevStep:e[r-1],timestamp:n.now-1e3*t},n));return void 0===i||Math.abs(t)<i?r-1:r===e.length-1?r:xu(e,t,n,r+1)}function Cu(e,t,n){var r=n.now,i=n.round;if(pu(e)){var s=1e3*pu(e),o=t>r,a=Math.abs(t-r),l=gu(i)(a/s)*s;return o?l>0?a-l+function(e,t){return(1-mu(e))*t+1}(i,s):a-l+1:-(a-l)+function(e,t){return mu(e)*t}(i,s)}}var Iu=31536e9;function Tu(e,t,n){var r=n.prevStep,i=n.nextStep,s=n.now,o=n.future,a=n.round,l=e.getTime?e.getTime():e,c=function(e){return Cu(e,l,{now:s,round:a})},u=function(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.prevStep;if(e){var a=function(e,t,n){var r=n.now,i=n.future,s=n.round,o=n.prevStep,a=bu(e,{timestamp:t,now:r,future:i,round:s,prevStep:o});if(void 0===a)return;return i?t-1e3*a+1:0===a&&t===r?Iu:t+1e3*a}(e,t,{now:r,future:i,round:s,prevStep:o});if(void 0===a)return;return a-r}return i?t-r+1:Iu}(o?t:i,l,{future:o,now:s,round:a,prevStep:o?r:t});if(void 0!==u){var h;if(t&&(t.getTimeToNextUpdate&&(h=t.getTimeToNextUpdate(l,{getTimeToNextUpdateForUnit:c,getRoundFunction:gu,now:s,future:o,round:a})),void 0===h)){var d=t.unit||t.formatAs;d&&(h=c(d))}return void 0===h?u:Math.min(h,u)}}var Su={};function Eu(e){return Su[e]}function $u(e){if(!e)throw new Error("[javascript-time-ago] No locale data passed.");Su[e.locale]=e}var Nu={steps:[{formatAs:"now"},{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"}],labels:"long"};function Ru(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ru(e,t,n[t])}))}return e}({},Nu,{steps:Nu.steps.filter((function(e){return"second"!==e.formatAs}))}),Ou=[{factor:1,unit:"now"},{threshold:1,threshold_for_now:45.5,factor:1,unit:"second"},{threshold:45.5,factor:au,unit:"minute"},{threshold:150,granularity:5,factor:au,unit:"minute"},{threshold:1350,factor:1800,unit:"half-hour"},{threshold:2550,threshold_for_minute:3150,factor:lu,unit:"hour"},{threshold:73800,factor:cu,unit:"day"},{threshold:475200,factor:uu,unit:"week"},{threshold:2116800,factor:hu,unit:"month"},{threshold:27615168,factor:du,unit:"year"}],Au={gradation:Ou,flavour:"long",units:["now","minute","hour","day","week","month","year"]},ju={gradation:Ou,flavour:"long-time",units:["now","minute","hour","day","week","month","year"]};function Du(e){return e instanceof Date?e:new Date(e)}var Lu=[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"}],Mu={},Fu={minTime:function(e,t){return t.future,(0,t.getMinTimeForUnit)("day")},format:function(e,t){return Mu[t]||(Mu[t]={}),Mu[t].dayMonth||(Mu[t].dayMonth=new Intl.DateTimeFormat(t,{month:"short",day:"numeric"})),Mu[t].dayMonth.format(Du(e))}},zu={minTime:function(e,t){return t.future?(e-(new Date(new Date(e).getFullYear(),0).getTime()-1))/1e3:(new Date(new Date(e).getFullYear()+1,0).getTime()-e)/1e3},format:function(e,t){return Mu[t]||(Mu[t]={}),Mu[t].dayMonthYear||(Mu[t].dayMonthYear=new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric"})),Mu[t].dayMonthYear.format(Du(e))}};"object"===("undefined"==typeof Intl?"undefined":su(Intl))&&"function"==typeof Intl.DateTimeFormat?Lu.push(Fu,zu):Lu.push({formatAs:"day"},{formatAs:"week"},{formatAs:"month"},{formatAs:"year"});var Uu={steps:Lu,labels:["mini","short-time","narrow","short"]};function qu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Wu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){qu(e,t,n[t])}))}return e}({},Uu,{steps:[{formatAs:"now"}].concat(Uu.steps)});function Vu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Hu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Vu(e,t,n[t])}))}return e}({},Uu,{steps:Uu.steps.filter((function(e){return"second"!==e.formatAs}))});function Bu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Bu(e,t,n[t])}))}return e}({},Hu,{steps:[{formatAs:"now"}].concat(Hu.steps)});function Ku(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Yu(e,t,n[t])}))}return e}function Yu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ju=Ku({},Uu,{steps:Uu.steps.filter((function(e){return"second"!==e.formatAs})).map((function(e){return"minute"===e.formatAs?Ku({},e,{minTime:au}):e}))}),Qu={steps:[{formatAs:"second"},{formatAs:"minute"},{formatAs:"hour"},{formatAs:"day"},{formatAs:"month"},{formatAs:"year"}],labels:["mini","short-time","narrow","short"]};function Zu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xu=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Zu(e,t,n[t])}))}return e}({},Qu,{steps:[{formatAs:"now"}].concat(Qu.steps)});function eh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var th=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){eh(e,t,n[t])}))}return e}({},Qu,{steps:Qu.steps.filter((function(e){return"second"!==e.formatAs}))});function nh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var rh=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){nh(e,t,n[t])}))}return e}({},th,{steps:[{formatAs:"now"}].concat(th.steps)});function ih(e){switch(e){case"default":case"round":return Nu;case"round-minute":return Pu;case"approximate":return Au;case"time":case"approximate-time":return ju;case"mini":return Qu;case"mini-now":return Xu;case"mini-minute":return th;case"mini-minute-now":return rh;case"twitter":return Uu;case"twitter-now":return Wu;case"twitter-minute":return Hu;case"twitter-minute-now":return Gu;case"twitter-first-minute":return Ju;default:return Au}}function sh(e){return(sh="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oh(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ah(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ch,uh=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.polyfill;ah(this,e),"string"==typeof t&&(t=[t]),this.locale=ou(t.concat(e.getDefaultLocale()),Eu),"undefined"!=typeof Intl&&Intl.NumberFormat&&(this.numberFormat=new Intl.NumberFormat(this.locale)),!1===r?(this.IntlRelativeTimeFormat=Intl.RelativeTimeFormat,this.IntlPluralRules=Intl.PluralRules):(this.IntlRelativeTimeFormat=Qc,this.IntlPluralRules=Qc.PluralRules),this.relativeTimeFormatCache=new iu,this.pluralRulesCache=new iu}var t,n,r;return t=e,(n=[{key:"format",value:function(e,t,n){var r,i;n||(!t||"string"==typeof(r=t)||function(e){return void 0!==sh(e)&&null!==e&&e.constructor===dh}(i=r)&&(Array.isArray(i.steps)||Array.isArray(i.gradation)||Array.isArray(i.flavour)||"string"==typeof i.flavour||Array.isArray(i.labels)||"string"==typeof i.labels||Array.isArray(i.units)||"function"==typeof i.custom)?n={}:(n=t,t=void 0)),t||(t=Pu),"string"==typeof t&&(t=ih(t));var s,o=function(e){if(e.constructor===Date||function(e){return"object"===sh(e)&&"function"==typeof e.getTime}(e))return e.getTime();if("number"==typeof e)return e;throw new Error("Unsupported relative time formatter input: ".concat(sh(e),", ").concat(e))}(e),a=this.getLabels(t.flavour||t.labels),l=a.labels,c=a.labelsType;void 0!==t.now&&(s=t.now),void 0===s&&void 0!==n.now&&(s=n.now),void 0===s&&(s=Date.now());var u=(s-o)/1e3,h=n.future||u<0,d=function(e,t,n,r){var i=e.now||t&&t.now;return i?"string"==typeof i?i:r?i.future:i.past:n&&n.second&&n.second.current?n.second.current:void 0}(l,Eu(this.locale).now,Eu(this.locale).long,h);if(t.custom){var p=t.custom({now:s,date:new Date(o),time:o,elapsed:u,locale:this.locale});if(void 0!==p)return p}var f=function(e,t,n){var r=Object.keys(t);return n&&r.push("now"),e&&(r=e.filter((function(e){return"now"===e||r.indexOf(e)>=0}))),r}(t.units,l,d),g=n.round||t.round,m=oh(ku(t.gradation||t.steps||Pu.steps,u,{now:s,units:f,round:g,future:h,getNextStep:!0}),3),v=m[0],b=m[1],y=m[2],_=this.formatDateForStep(o,b,u,{labels:l,labelsType:c,nowLabel:d,now:s,future:h,round:g})||"";return n.getTimeToNextUpdate?[_,Tu(o,b,{nextStep:y,prevStep:v,now:s,future:h,round:g})]:_}},{key:"formatDateForStep",value:function(e,t,n,r){var i=this,s=r.labels,o=r.labelsType,a=r.nowLabel,l=r.now,c=r.future,u=r.round;if(t){if(t.format)return t.format(e,this.locale,{formatAs:function(e,t){return i.formatValue(t,e,{labels:s,future:c})},now:l,future:c});var h=t.unit||t.formatAs;if(!h)throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(t)));if("now"===h)return a;var d=Math.abs(n)/fu(t);t.granularity&&(d=gu(u)(d/t.granularity)*t.granularity);var p=-1*Math.sign(n)*gu(u)(d);switch(0===p&&(p=c?0:-0),o){case"long":case"short":case"narrow":return this.getFormatter(o).format(p,h);default:return this.formatValue(p,h,{labels:s,future:c})}}}},{key:"formatValue",value:function(e,t,n){var r=n.labels,i=n.future;return this.getFormattingRule(r,t,e,{future:i}).replace("{0}",this.formatNumber(Math.abs(e)))}},{key:"getFormattingRule",value:function(e,t,n,r){var i=r.future;if(this.locale,"string"==typeof(e=e[t]))return e;var s=e[0===n?i?"future":"past":n<0?"past":"future"]||e;return"string"==typeof s?s:s[this.getPluralRules().select(Math.abs(n))]||s.other}},{key:"formatNumber",value:function(e){return this.numberFormat?this.numberFormat.format(e):String(e)}},{key:"getFormatter",value:function(e){return this.relativeTimeFormatCache.get(this.locale,e)||this.relativeTimeFormatCache.put(this.locale,e,new this.IntlRelativeTimeFormat(this.locale,{style:e}))}},{key:"getPluralRules",value:function(){return this.pluralRulesCache.get(this.locale)||this.pluralRulesCache.put(this.locale,new this.IntlPluralRules(this.locale))}},{key:"getLabels",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"string"==typeof e&&(e=[e]),e=(e=e.map((function(e){switch(e){case"tiny":case"mini-time":return"mini";default:return e}}))).concat("long");var t=Eu(this.locale),n=e,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var s;if(r){if(i>=n.length)break;s=n[i++]}else{if((i=n.next()).done)break;s=i.value}var o=s;if(t[o])return{labelsType:o,labels:t[o]}}}}])&&lh(t.prototype,n),r&&lh(t,r),e}(),hh="en";uh.getDefaultLocale=function(){return hh},uh.setDefaultLocale=function(e){return hh=e},uh.addDefaultLocale=function(e){if(ch)return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");ch=!0,uh.setDefaultLocale(e.locale),uh.addLocale(e)},uh.addLocale=function(e){$u(e),Qc.addLocale(e)},uh.locale=uh.addLocale,uh.addLabels=function(e,t,n){var r=Eu(e);r||($u({locale:e}),r=Eu(e)),r[t]=n};var dh={}.constructor;var ph={locale:"en",long:{year:{previous:"last year",current:"this year",next:"next year",past:{one:"{0} year ago",other:"{0} years ago"},future:{one:"in {0} year",other:"in {0} years"}},quarter:{previous:"last quarter",current:"this quarter",next:"next quarter",past:{one:"{0} quarter ago",other:"{0} quarters ago"},future:{one:"in {0} quarter",other:"in {0} quarters"}},month:{previous:"last month",current:"this month",next:"next month",past:{one:"{0} month ago",other:"{0} months ago"},future:{one:"in {0} month",other:"in {0} months"}},week:{previous:"last week",current:"this week",next:"next week",past:{one:"{0} week ago",other:"{0} weeks ago"},future:{one:"in {0} week",other:"in {0} weeks"}},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:{one:"{0} hour ago",other:"{0} hours ago"},future:{one:"in {0} hour",other:"in {0} hours"}},minute:{current:"this minute",past:{one:"{0} minute ago",other:"{0} minutes ago"},future:{one:"in {0} minute",other:"in {0} minutes"}},second:{current:"now",past:{one:"{0} second ago",other:"{0} seconds ago"},future:{one:"in {0} second",other:"in {0} seconds"}}},short:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},narrow:{year:{previous:"last yr.",current:"this yr.",next:"next yr.",past:"{0} yr. ago",future:"in {0} yr."},quarter:{previous:"last qtr.",current:"this qtr.",next:"next qtr.",past:{one:"{0} qtr. ago",other:"{0} qtrs. ago"},future:{one:"in {0} qtr.",other:"in {0} qtrs."}},month:{previous:"last mo.",current:"this mo.",next:"next mo.",past:"{0} mo. ago",future:"in {0} mo."},week:{previous:"last wk.",current:"this wk.",next:"next wk.",past:"{0} wk. ago",future:"in {0} wk."},day:{previous:"yesterday",current:"today",next:"tomorrow",past:{one:"{0} day ago",other:"{0} days ago"},future:{one:"in {0} day",other:"in {0} days"}},hour:{current:"this hour",past:"{0} hr. ago",future:"in {0} hr."},minute:{current:"this minute",past:"{0} min. ago",future:"in {0} min."},second:{current:"now",past:"{0} sec. ago",future:"in {0} sec."}},now:{now:{current:"now",future:"in a moment",past:"just now"}},mini:{year:"{0}yr",month:"{0}mo",week:"{0}wk",day:"{0}d",hour:"{0}h",minute:"{0}m",second:"{0}s",now:"now"},"short-time":{year:"{0} yr.",month:"{0} mo.",week:"{0} wk.",day:{one:"{0} day",other:"{0} days"},hour:"{0} hr.",minute:"{0} min.",second:"{0} sec."},"long-time":{year:{one:"{0} year",other:"{0} years"},month:{one:"{0} month",other:"{0} months"},week:{one:"{0} week",other:"{0} weeks"},day:{one:"{0} day",other:"{0} days"},hour:{one:"{0} hour",other:"{0} hours"},minute:{one:"{0} minute",other:"{0} minutes"},second:{one:"{0} second",other:"{0} seconds"}}};function fh(e,t,n){const r=e.slice();return r[15]=t[n],r}function gh(e,t,n){const r=e.slice();return r[15]=t[n],r}function mh(e,t,n){const r=e.slice();return r[8]=t[n],r}function vh(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function bh(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function yh(e,t,n){const r=e.slice();return r[5]=t[n],r}function _h(e){let t,n,r,i;const s=[Ch,xh,kh],o=[];function a(e,t){return"table"===e[0]?0:"list"===e[0]?1:2}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&w(r)}}}function wh(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=Bh(yh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(10&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=yh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Bh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&w(t)}}}function kh(e){let n,r,i;const s=[e[4]];var o=e[3][e[0]];function a(e){let n={$$slots:{default:[Sh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&se(n,e,t),_(e,r,t),i=!0},p(e,t){const i=16&t?ne(s,[re(e[4])]):{};if(1048602&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3][e[0]])){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}o?(n=new o(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),se(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&w(r),n&&oe(n,e)}}}function xh(e){let t,n,r,i;const s=[$h,Eh],o=[];function a(e,t){return e[2]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&w(r)}}}function Ch(e){let t,n,r;var i=e[3].table;function s(e){return{props:{$$slots:{default:[Hh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&se(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(1048602&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].table)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}i?(t=new i(s(e)),ie(t.$$.fragment),J(t.$$.fragment,1),se(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&w(n),t&&oe(t,e)}}}function Ih(t){let n,r=t[4].raw+"";return{c(){n=I(r)},m(e,t){_(e,n,t)},p(e,t){16&t&&r!==(r=e[4].raw+"")&&N(n,r)},i:e,o:e,d(e){e&&w(n)}}}function Th(e){let t,n;return t=new Yh({props:{tokens:e[1],renderers:e[3]}}),{c(){ie(t.$$.fragment)},m(e,r){se(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.tokens=e[1]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function Sh(e){let t,n,r,i;const s=[Th,Ih],o=[];function a(e,t){return e[1]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,i){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&w(r)}}}function Eh(e){let n,r,i;const s=[{ordered:e[2]},e[4]];var o=e[3].list;function a(e){let n={$$slots:{default:[Ph]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&se(n,e,t),_(e,r,t),i=!0},p(e,t){const i=20&t?ne(s,[4&t&&{ordered:e[2]},16&t&&re(e[4])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].list)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}o?(n=new o(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),se(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&w(r),n&&oe(n,e)}}}function $h(e){let n,r,i;const s=[{ordered:e[2]},e[4]];var o=e[3].list;function a(e){let n={$$slots:{default:[jh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&se(n,e,t),_(e,r,t),i=!0},p(e,t){const i=20&t?ne(s,[4&t&&{ordered:e[2]},16&t&&re(e[4])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].list)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}o?(n=new o(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),se(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&w(r),n&&oe(n,e)}}}function Nh(e){let t,n,r;return t=new Yh({props:{tokens:e[15].tokens,renderers:e[3]}}),{c(){ie(t.$$.fragment),n=T()},m(e,i){se(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};16&n&&(r.tokens=e[15].tokens),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){oe(t,e),e&&w(n)}}}function Rh(e){let n,r,i;const s=[e[15]];var o=e[3].unorderedlistitem||e[3].listitem;function a(e){let n={$$slots:{default:[Nh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&se(n,e,t),_(e,r,t),i=!0},p(e,t){const i=16&t?ne(s,[re(e[15])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].unorderedlistitem||e[3].listitem)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}o?(n=new o(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),se(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&w(r),n&&oe(n,e)}}}function Ph(e){let t,n,r=e[4].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=Rh(fh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(24&n){let o;for(r=e[4].items,o=0;o<r.length;o+=1){const s=fh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Rh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&w(t)}}}function Oh(e){let t,n,r;return t=new Yh({props:{tokens:e[15].tokens,renderers:e[3]}}),{c(){ie(t.$$.fragment),n=T()},m(e,i){se(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};16&n&&(r.tokens=e[15].tokens),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){oe(t,e),e&&w(n)}}}function Ah(e){let n,r,i;const s=[e[15]];var o=e[3].orderedlistitem||e[3].listitem;function a(e){let n={$$slots:{default:[Oh]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a(e))),{c(){n&&ie(n.$$.fragment),r=S()},m(e,t){n&&se(n,e,t),_(e,r,t),i=!0},p(e,t){const i=16&t?ne(s,[re(e[15])]):{};if(1048600&t&&(i.$$scope={dirty:t,ctx:e}),o!==(o=e[3].orderedlistitem||e[3].listitem)){if(n){K();const e=n;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}o?(n=new o(a(e)),ie(n.$$.fragment),J(n.$$.fragment,1),se(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&J(n.$$.fragment,e),i=!0)},o(e){n&&Q(n.$$.fragment,e),i=!1},d(e){e&&w(r),n&&oe(n,e)}}}function jh(e){let t,n,r=e[4].items,i=[];for(let t=0;t<r.length;t+=1)i[t]=Ah(gh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(24&n){let o;for(r=e[4].items,o=0;o<r.length;o+=1){const s=gh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Ah(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&w(t)}}}function Dh(e){let t,n,r;return t=new Yh({props:{tokens:e[11],renderers:e[3]}}),{c(){ie(t.$$.fragment),n=T()},m(e,i){se(t,e,i),_(e,n,i),r=!0},p(e,n){const r={};2&n&&(r.tokens=e[11]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){r||(J(t.$$.fragment,e),r=!0)},o(e){Q(t.$$.fragment,e),r=!1},d(e){oe(t,e),e&&w(n)}}}function Lh(e){let t,n,r;var i=e[3].tablecell;function s(e){return{props:{header:!0,align:e[4].align[e[13]]||"center",$$slots:{default:[Dh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&se(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(16&r&&(o.align=e[4].align[e[13]]||"center"),1048586&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablecell)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}i?(t=new i(s(e)),ie(t.$$.fragment),J(t.$$.fragment,1),se(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&w(n),t&&oe(t,e)}}}function Mh(e){let t,n,r=e[1].header,i=[];for(let t=0;t<r.length;t+=1)i[t]=Lh(bh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(26&n){let o;for(r=e[1].header,o=0;o<r.length;o+=1){const s=bh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Lh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&w(t)}}}function Fh(e){let t,n,r;var i=e[3].tablerow;function s(e){return{props:{$$slots:{default:[Mh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&se(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(1048602&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablerow)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}i?(t=new i(s(e)),ie(t.$$.fragment),J(t.$$.fragment,1),se(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&w(n),t&&oe(t,e)}}}function zh(e){let t,n;return t=new Yh({props:{tokens:e[11],renderers:e[3]}}),{c(){ie(t.$$.fragment)},m(e,r){se(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.tokens=e[11]),8&n&&(r.renderers=e[3]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function Uh(e){let t,n,r;var i=e[3].tablecell;function s(e){return{props:{header:!1,align:e[4].align[e[13]]||"center",$$slots:{default:[zh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&se(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(16&r&&(o.align=e[4].align[e[13]]||"center"),1048586&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablecell)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}i?(t=new i(s(e)),ie(t.$$.fragment),J(t.$$.fragment,1),se(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&w(n),t&&oe(t,e)}}}function qh(e){let t,n,r=e[8],i=[];for(let t=0;t<r.length;t+=1)i[t]=Uh(vh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(26&n){let o;for(r=e[8],o=0;o<r.length;o+=1){const s=vh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Uh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&w(t)}}}function Wh(e){let t,n,r;var i=e[3].tablerow;function s(e){return{props:{$$slots:{default:[qh]},$$scope:{ctx:e}}}}return i&&(t=new i(s(e))),{c(){t&&ie(t.$$.fragment),n=S()},m(e,i){t&&se(t,e,i),_(e,n,i),r=!0},p(e,r){const o={};if(1048602&r&&(o.$$scope={dirty:r,ctx:e}),i!==(i=e[3].tablerow)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}i?(t=new i(s(e)),ie(t.$$.fragment),J(t.$$.fragment,1),se(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&J(t.$$.fragment,e),r=!0)},o(e){t&&Q(t.$$.fragment,e),r=!1},d(e){e&&w(n),t&&oe(t,e)}}}function Vh(e){let t,n,r=e[1].cells,i=[];for(let t=0;t<r.length;t+=1)i[t]=Wh(mh(e,r,t));const s=e=>Q(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=S()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);_(e,t,r),n=!0},p(e,n){if(26&n){let o;for(r=e[1].cells,o=0;o<r.length;o+=1){const s=mh(e,r,o);i[o]?(i[o].p(s,n),J(i[o],1)):(i[o]=Wh(s),i[o].c(),J(i[o],1),i[o].m(t.parentNode,t))}for(K(),o=r.length;o<i.length;o+=1)s(o);Y()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)J(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)Q(i[e]);n=!1},d(e){k(i,e),e&&w(t)}}}function Hh(e){let t,n,r,i,s;var o=e[3].tablehead;function a(e){return{props:{$$slots:{default:[Fh]},$$scope:{ctx:e}}}}o&&(t=new o(a(e)));var l=e[3].tablebody;function c(e){return{props:{$$slots:{default:[Vh]},$$scope:{ctx:e}}}}return l&&(r=new l(c(e))),{c(){t&&ie(t.$$.fragment),n=T(),r&&ie(r.$$.fragment),i=S()},m(e,o){t&&se(t,e,o),_(e,n,o),r&&se(r,e,o),_(e,i,o),s=!0},p(e,s){const u={};if(1048602&s&&(u.$$scope={dirty:s,ctx:e}),o!==(o=e[3].tablehead)){if(t){K();const e=t;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}o?(t=new o(a(e)),ie(t.$$.fragment),J(t.$$.fragment,1),se(t,n.parentNode,n)):t=null}else o&&t.$set(u);const h={};if(1048602&s&&(h.$$scope={dirty:s,ctx:e}),l!==(l=e[3].tablebody)){if(r){K();const e=r;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),Y()}l?(r=new l(c(e)),ie(r.$$.fragment),J(r.$$.fragment,1),se(r,i.parentNode,i)):r=null}else l&&r.$set(h)},i(e){s||(t&&J(t.$$.fragment,e),r&&J(r.$$.fragment,e),s=!0)},o(e){t&&Q(t.$$.fragment,e),r&&Q(r.$$.fragment,e),s=!1},d(e){t&&oe(t,e),e&&w(n),e&&w(i),r&&oe(r,e)}}}function Bh(e){let n,r;const i=[e[5],{renderers:e[3]}];let s={};for(let e=0;e<i.length;e+=1)s=t(s,i[e]);return n=new Yh({props:s}),{c(){ie(n.$$.fragment)},m(e,t){se(n,e,t),r=!0},p(e,t){const r=10&t?ne(i,[2&t&&re(e[5]),8&t&&{renderers:e[3]}]):{};n.$set(r)},i(e){r||(J(n.$$.fragment,e),r=!0)},o(e){Q(n.$$.fragment,e),r=!1},d(e){oe(n,e)}}}function Gh(e){let t,n,r,i;const s=[wh,_h],o=[];function a(e,t){return e[0]?e[3][e[0]]?1:-1:0}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=S()},m(e,n){~t&&o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?~t&&o[t].p(e,i):(n&&(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){~t&&o[t].d(e),e&&w(r)}}}function Kh(e,n,r){const i=["type","tokens","ordered","renderers"];let s=m(n,i),{type:o}=n,{tokens:a}=n,{ordered:l=!1}=n,{renderers:c}=n;return e.$$set=e=>{n=t(t({},n),function(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}(e)),r(4,s=m(n,i)),"type"in e&&r(0,o=e.type),"tokens"in e&&r(1,a=e.tokens),"ordered"in e&&r(2,l=e.ordered),"renderers"in e&&r(3,c=e.renderers)},[o,a,l,c,s]}class Yh extends ce{constructor(e){super(),le(this,e,Kh,Gh,o,{type:0,tokens:1,ordered:2,renderers:3})}}function Jh(t){let n;return{c(){n=I(t[1])},m(e,t){_(e,n,t)},p(e,t){2&t&&N(n,e[1])},i:e,o:e,d(e){e&&w(n)}}}function Qh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h6"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Zh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h5"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Xh(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h4"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function ed(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h3"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function td(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h2"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function nd(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("h1"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function rd(e){let t,n,r,i;const s=[nd,td,ed,Xh,Zh,Qh,Jh],o=[];function a(e,t){return 1===e[0]?0:2===e[0]?1:3===e[0]?2:4===e[0]?3:5===e[0]?4:6===e[0]?5:6}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&w(r)}}}function id(e,t,n){let{$$slots:r={},$$scope:i}=t,{depth:s}=t,{raw:o}=t;return e.$$set=e=>{"depth"in e&&n(0,s=e.depth),"raw"in e&&n(1,o=e.raw),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function sd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("p"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function od(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function ad(e){let t;const n=e[1].default,r=h(n,e,e[0],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[i]){r&&r.p&&(!t||1&i)&&f(r,n,e,e[0],t?p(n,e[0],i,null):g(e[0]),null)},i(e){t||(J(r,e),t=!0)},o(e){Q(r,e),t=!1},d(e){r&&r.d(e)}}}function ld(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function cd(t){let n,r;return{c(){n=x("img"),c(n.src,r=t[0])||$(n,"src",r),$(n,"title",t[1]),$(n,"alt",t[2])},m(e,t){_(e,n,t)},p(e,[t]){1&t&&!c(n.src,r=e[0])&&$(n,"src",r),2&t&&$(n,"title",e[1]),4&t&&$(n,"alt",e[2])},i:e,o:e,d(e){e&&w(n)}}}function ud(e,t,n){let{href:r=""}=t,{title:i}=t,{text:s=""}=t;return e.$$set=e=>{"href"in e&&n(0,r=e.href),"title"in e&&n(1,i=e.title),"text"in e&&n(2,s=e.text)},[r,i,s]}function hd(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("a"),i&&i.c(),$(t,"href",e[0]),$(t,"title",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[s]){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||1&s)&&$(t,"href",e[0]),(!n||2&s)&&$(t,"title",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function dd(e,t,n){let{$$slots:r={},$$scope:i}=t,{href:s=""}=t,{title:o}=t;return e.$$set=e=>{"href"in e&&n(0,s=e.href),"title"in e&&n(1,o=e.title),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function pd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("em"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function fd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function gd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("del"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function md(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function vd(t){let n,r,i=t[0].replace(/`/g,"")+"";return{c(){n=x("code"),r=I(i)},m(e,t){_(e,n,t),b(n,r)},p(e,[t]){1&t&&i!==(i=e[0].replace(/`/g,"")+"")&&N(r,i)},i:e,o:e,d(e){e&&w(n)}}}function bd(e,t,n){let{raw:r}=t;return e.$$set=e=>{"raw"in e&&n(0,r=e.raw)},[r]}function yd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("strong"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function _d(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function wd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("table"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function kd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function xd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("thead"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Cd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Id(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("tbody"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Td(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Sd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("tr"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Ed(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function $d(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("td"),i&&i.c(),$(t,"align",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||2&s)&&$(t,"align",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Nd(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("th"),i&&i.c(),$(t,"align",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||2&s)&&$(t,"align",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Rd(e){let t,n,r,i;const s=[Nd,$d],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&w(r)}}}function Pd(e,t,n){let{$$slots:r={},$$scope:i}=t,{header:s}=t,{align:o}=t;return e.$$set=e=>{"header"in e&&n(0,s=e.header),"align"in e&&n(1,o=e.align),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function Od(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("ul"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||4&t)&&f(i,r,e,e[2],n?p(r,e[2],t,null):g(e[2]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Ad(e){let t,n;const r=e[3].default,i=h(r,e,e[2],null);return{c(){t=x("ol"),i&&i.c(),$(t,"start",e[1])},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,s){i&&i.p&&(!n||4&s)&&f(i,r,e,e[2],n?p(r,e[2],s,null):g(e[2]),null),(!n||2&s)&&$(t,"start",e[1])},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function jd(e){let t,n,r,i;const s=[Ad,Od],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=S()},m(e,n){o[t].m(e,n),_(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(K(),Q(o[l],1,1,(()=>{o[l]=null})),Y(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),J(n,1),n.m(r.parentNode,r))},i(e){i||(J(n),i=!0)},o(e){Q(n),i=!1},d(e){o[t].d(e),e&&w(r)}}}function Dd(e,t,n){let{$$slots:r={},$$scope:i}=t,{ordered:s}=t,{start:o}=t;return e.$$set=e=>{"ordered"in e&&n(0,s=e.ordered),"start"in e&&n(1,o=e.start),"$$scope"in e&&n(2,i=e.$$scope)},[s,o,i,r]}function Ld(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("li"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Md(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Fd(t){let n;return{c(){n=x("hr")},m(e,t){_(e,n,t)},p:e,i:e,o:e,d(e){e&&w(n)}}}function zd(t){let n,r;return{c(){n=new P,r=S(),n.a=r},m(e,i){n.m(t[0],e,i),_(e,r,i)},p(e,[t]){1&t&&n.p(e[0])},i:e,o:e,d(e){e&&w(r),e&&n.d()}}}function Ud(e,t,n){let{text:r}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text)},[r]}function qd(e){let t,n;const r=e[1].default,i=h(r,e,e[0],null);return{c(){t=x("blockquote"),i&&i.c()},m(e,r){_(e,t,r),i&&i.m(t,null),n=!0},p(e,[t]){i&&i.p&&(!n||1&t)&&f(i,r,e,e[0],n?p(r,e[0],t,null):g(e[0]),null)},i(e){n||(J(i,e),n=!0)},o(e){Q(i,e),n=!1},d(e){e&&w(t),i&&i.d(e)}}}function Wd(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}function Vd(e){let t,n,r;const i=e[2].default,s=h(i,e,e[1],null);return{c(){t=x("pre"),n=x("code"),s&&s.c(),$(t,"class",e[0])},m(e,i){_(e,t,i),b(t,n),s&&s.m(n,null),r=!0},p(e,[n]){s&&s.p&&(!r||2&n)&&f(s,i,e,e[1],r?p(i,e[1],n,null):g(e[1]),null),(!r||1&n)&&$(t,"class",e[0])},i(e){r||(J(s,e),r=!0)},o(e){Q(s,e),r=!1},d(e){e&&w(t),s&&s.d(e)}}}function Hd(e,t,n){let{$$slots:r={},$$scope:i}=t,{lang:s}=t;return e.$$set=e=>{"lang"in e&&n(0,s=e.lang),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}var Bd,Gd=(function(e){function t(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}(Bd={exports:{}},Bd.exports),Bd.exports);const Kd=/[&<>"']/,Yd=/[&<>"']/g,Jd=/[<>"']|&(?!#?\w+;)/,Qd=/[<>"']|&(?!#?\w+;)/g,Zd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xd=e=>Zd[e];const ep=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function tp(e){return e.replace(ep,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const np=/(^|[^\[])\^/g;const rp=/[^\w:]/g,ip=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const sp={},op=/^[^:]+:\/*[^/]*$/,ap=/^([^:]+:)[\s\S]*$/,lp=/^([^:]+:\/*[^/]*)[\s\S]*$/;function cp(e,t){sp[" "+e]||(op.test(e)?sp[" "+e]=e+"/":sp[" "+e]=up(e,"/",!0));const n=-1===(e=sp[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(ap,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(lp,"$1")+t:e+t}function up(e,t,n){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var hp={escape:function(e,t){if(t){if(Kd.test(e))return e.replace(Yd,Xd)}else if(Jd.test(e))return e.replace(Qd,Xd);return e},unescape:tp,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(np,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(tp(n)).replace(rp,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!ip.test(n)&&(n=cp(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:cp,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:up,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}};const{defaults:dp}=Gd,{rtrim:pp,splitCells:fp,escape:gp,findClosingBracket:mp}=hp;function vp(e,t,n){const r=t.href,i=t.title?gp(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:s}:{type:"image",raw:n,href:r,title:i,text:gp(s)}}const{noopTest:bp,edit:yp,merge:_p}=hp,wp={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:bp,table:bp,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};wp.def=yp(wp.def).replace("label",wp._label).replace("title",wp._title).getRegex(),wp.bullet=/(?:[*+-]|\d{1,9}[.)])/,wp.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,wp.item=yp(wp.item,"gm").replace(/bull/g,wp.bullet).getRegex(),wp.listItemStart=yp(/^( *)(bull) */).replace("bull",wp.bullet).getRegex(),wp.list=yp(wp.list).replace(/bull/g,wp.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+wp.def.source+")").getRegex(),wp._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",wp._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,wp.html=yp(wp.html,"i").replace("comment",wp._comment).replace("tag",wp._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wp.paragraph=yp(wp._paragraph).replace("hr",wp.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wp._tag).getRegex(),wp.blockquote=yp(wp.blockquote).replace("paragraph",wp.paragraph).getRegex(),wp.normal=_p({},wp),wp.gfm=_p({},wp.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),wp.gfm.nptable=yp(wp.gfm.nptable).replace("hr",wp.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wp._tag).getRegex(),wp.gfm.table=yp(wp.gfm.table).replace("hr",wp.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",wp._tag).getRegex(),wp.pedantic=_p({},wp.normal,{html:yp("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",wp._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:bp,paragraph:yp(wp.normal._paragraph).replace("hr",wp.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",wp.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const kp={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:bp,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:bp,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};kp.punctuation=yp(kp.punctuation).replace(/punctuation/g,kp._punctuation).getRegex(),kp.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,kp.escapedEmSt=/\\\*|\\_/g,kp._comment=yp(wp._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),kp.emStrong.lDelim=yp(kp.emStrong.lDelim).replace(/punct/g,kp._punctuation).getRegex(),kp.emStrong.rDelimAst=yp(kp.emStrong.rDelimAst,"g").replace(/punct/g,kp._punctuation).getRegex(),kp.emStrong.rDelimUnd=yp(kp.emStrong.rDelimUnd,"g").replace(/punct/g,kp._punctuation).getRegex(),kp._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,kp._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,kp._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,kp.autolink=yp(kp.autolink).replace("scheme",kp._scheme).replace("email",kp._email).getRegex(),kp._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,kp.tag=yp(kp.tag).replace("comment",kp._comment).replace("attribute",kp._attribute).getRegex(),kp._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,kp._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,kp._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,kp.link=yp(kp.link).replace("label",kp._label).replace("href",kp._href).replace("title",kp._title).getRegex(),kp.reflink=yp(kp.reflink).replace("label",kp._label).getRegex(),kp.reflinkSearch=yp(kp.reflinkSearch,"g").replace("reflink",kp.reflink).replace("nolink",kp.nolink).getRegex(),kp.normal=_p({},kp),kp.pedantic=_p({},kp.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:yp(/^!?\[(label)\]\((.*?)\)/).replace("label",kp._label).getRegex(),reflink:yp(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",kp._label).getRegex()}),kp.gfm=_p({},kp.normal,{escape:yp(kp.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),kp.gfm.url=yp(kp.gfm.url,"i").replace("email",kp.gfm._extended_email).getRegex(),kp.breaks=_p({},kp.gfm,{br:yp(kp.br).replace("{2,}","*").getRegex(),text:yp(kp.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var xp={block:wp,inline:kp};const{defaults:Cp}=Gd,{block:Ip,inline:Tp}=xp,{repeatString:Sp}=hp;function Ep(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function $p(e){let t,n,r="";const i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}var Np=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Cp,this.options.tokenizer=this.options.tokenizer||new class{constructor(e){this.options=e||dp}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:pp(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=pp(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e}}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:fp(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,n=e.align.length;for(t=0;t<n;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(n=e.cells.length,t=0;t<n;t++)e.cells[t]=fp(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const n=t[2],r=n.length>1,i={type:"list",raw:e,ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]},s=t[0].match(this.rules.block.item);let o,a,l,c,u,h,d,p,f,g=!1,m=s.length;l=this.rules.block.listItemStart.exec(s[0]);for(let t=0;t<m;t++){if(o=s[t],e=o,this.options.pedantic||(f=o.match(new RegExp("\\n\\s*\\n {0,"+(l[0].length-1)+"}\\S")),f&&(u=o.length-f.index+s.slice(t+1).join("\n").length,i.raw=i.raw.substring(0,i.raw.length-u),o=o.substring(0,f.index),e=o,m=t+1)),t!==m-1){if(c=this.rules.block.listItemStart.exec(s[t+1]),this.options.pedantic?c[1].length>l[1].length:c[1].length>=l[0].length||c[1].length>3){s.splice(t,2,s[t]+(!this.options.pedantic&&c[1].length<l[0].length&&!s[t].match(/\n$/)?"":"\n")+s[t+1]),t--,m--;continue}(!this.options.pedantic||this.options.smartLists?c[2][c[2].length-1]!==n[n.length-1]:r===(1===c[2].length))&&(u=s.slice(t+1).join("\n").length,i.raw=i.raw.substring(0,i.raw.length-u),t=m-1),l=c}a=o.length,o=o.replace(/^ *([*+-]|\d+[.)]) ?/,""),~o.indexOf("\n ")&&(a-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+a+"}","gm"),"")),o=pp(o,"\n"),t!==m-1&&(e+="\n"),h=g||/\n\n(?!\s*$)/.test(e),t!==m-1&&(g="\n\n"===e.slice(-2),h||(h=g)),h&&(i.loose=!0),this.options.gfm&&(d=/^\[[ xX]\] /.test(o),p=void 0,d&&(p=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:e,task:d,checked:p,loose:h,text:o})}return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):gp(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:fp(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r=e.align.length;for(n=0;n<r;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(r=e.cells.length,n=0;n<r;n++)e.cells[n]=fp(e.cells[n].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:gp(t[1])}}tag(e,t,n){const r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):gp(r[0]):r[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=pp(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=mp(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),vp(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0])}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return vp(n,e,n[0])}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let i,s,o=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));)if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],i)if(s=i.length,r[3]||r[4])o+=s;else if(!((r[5]||r[6])&&n%3)||(n+s)%3){if(o-=s,!(o>0))return s=Math.min(s,s+o+a),Math.min(n,s)%2?{type:"em",raw:e.slice(0,n+r.index+s+1),text:e.slice(1,n+r.index+s)}:{type:"strong",raw:e.slice(0,n+r.index+s+1),text:e.slice(2,n+r.index+s-1)}}else a+=s}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=gp(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=gp(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=gp(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=gp(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=gp(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,n){const r=this.rules.inline.text.exec(e);if(r){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):gp(r[0]):r[0]:gp(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}},this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:Ip.normal,inline:Tp.normal};this.options.pedantic?(t.block=Ip.pedantic,t.inline=Tp.pedantic):this.options.gfm&&(t.block=Ip.gfm,this.options.breaks?t.inline=Tp.breaks:t.inline=Tp.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ip,inline:Tp}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],n=!0){let r,i,s,o,a,l;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(r=n.call(this,e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),o=t[t.length-1],o&&"paragraph"===o.type?(o.raw+="\n"+r.raw,o.text+="\n"+r.text):t.push(r);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(a=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call(this,n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(n&&(r=this.tokenizer.paragraph(a)))o=t[t.length-1],l&&"paragraph"===o.type?(o.raw+="\n"+r.raw,o.text+="\n"+r.text):t.push(r),l=a.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),o=t[t.length-1],o&&"text"===o.type?(o.raw+="\n"+r.raw,o.text+="\n"+r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}inline(e){let t,n,r,i,s,o;const a=e.length;for(t=0;t<a;t++)switch(o=e[t],o.type){case"paragraph":case"text":case"heading":o.tokens=[],this.inlineTokens(o.text,o.tokens);break;case"table":for(o.tokens={header:[],cells:[]},i=o.header.length,n=0;n<i;n++)o.tokens.header[n]=[],this.inlineTokens(o.header[n],o.tokens.header[n]);for(i=o.cells.length,n=0;n<i;n++)for(s=o.cells[n],o.tokens.cells[n]=[],r=0;r<s.length;r++)o.tokens.cells[n][r]=[],this.inlineTokens(s[r],o.tokens.cells[n][r]);break;case"blockquote":this.inline(o.tokens);break;case"list":for(i=o.items.length,n=0;n<i;n++)this.inline(o.items[n].tokens)}return e}inlineTokens(e,t=[],n=!1,r=!1){let i,s,o,a,l,c,u=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(u));)e.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,a.index)+"["+Sp("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(u));)u=u.slice(0,a.index)+"["+Sp("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(u));)u=u.slice(0,a.index)+"++"+u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(i=n.call(this,e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,s=t[t.length-1],s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),s=t[t.length-1],"link"===i.type?(i.tokens=this.inlineTokens(i.text,[],!0,r),t.push(i)):s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(i=this.tokenizer.emStrong(e,u,c))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,$p))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,$p))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call(this,n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(o,r,Ep))e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(c=i.raw.slice(-1)),l=!0,s=t[t.length-1],s&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(i.raw.length),t.push(i);return t}};const Rp={heading:class extends ce{constructor(e){super(),le(this,e,id,rd,o,{depth:0,raw:1})}},paragraph:class extends ce{constructor(e){super(),le(this,e,od,sd,o,{})}},text:class extends ce{constructor(e){super(),le(this,e,ld,ad,o,{})}},image:class extends ce{constructor(e){super(),le(this,e,ud,cd,o,{href:0,title:1,text:2})}},link:class extends ce{constructor(e){super(),le(this,e,dd,hd,o,{href:0,title:1})}},em:class extends ce{constructor(e){super(),le(this,e,fd,pd,o,{})}},strong:class extends ce{constructor(e){super(),le(this,e,_d,yd,o,{})}},codespan:class extends ce{constructor(e){super(),le(this,e,bd,vd,o,{raw:0})}},del:class extends ce{constructor(e){super(),le(this,e,md,gd,o,{})}},table:class extends ce{constructor(e){super(),le(this,e,kd,wd,o,{})}},tablehead:class extends ce{constructor(e){super(),le(this,e,Cd,xd,o,{})}},tablebody:class extends ce{constructor(e){super(),le(this,e,Td,Id,o,{})}},tablerow:class extends ce{constructor(e){super(),le(this,e,Ed,Sd,o,{})}},tablecell:class extends ce{constructor(e){super(),le(this,e,Pd,Rd,o,{header:0,align:1})}},list:class extends ce{constructor(e){super(),le(this,e,Dd,jd,o,{ordered:0,start:1})}},orderedlistitem:null,unorderedlistitem:null,listitem:class extends ce{constructor(e){super(),le(this,e,Md,Ld,o,{})}},hr:class extends ce{constructor(e){super(),le(this,e,null,Fd,o,{})}},html:class extends ce{constructor(e){super(),le(this,e,Ud,zd,o,{text:0})}},blockquote:class extends ce{constructor(e){super(),le(this,e,Wd,qd,o,{})}},code:class extends ce{constructor(e){super(),le(this,e,Hd,Vd,o,{lang:0})}}},Pp={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function Op(e){let t,n;return t=new Yh({props:{tokens:e[0],renderers:e[1]}}),{c(){ie(t.$$.fragment)},m(e,r){se(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.tokens=e[0]),2&n&&(r.renderers=e[1]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function Ap(e,t,n){let r,i,s,{source:o=""}=t,{renderers:a={}}=t,{options:l={}}=t;return e.$$set=e=>{"source"in e&&n(2,o=e.source),"renderers"in e&&n(3,a=e.renderers),"options"in e&&n(4,l=e.options)},e.$$.update=()=>{52&e.$$.dirty&&(n(5,i=new Np({...Pp,...l})),n(0,s=i.lex(o))),8&e.$$.dirty&&n(1,r={...Rp,...a})},[s,r,o,a,l,i]}class jp extends ce{constructor(e){super(),le(this,e,Ap,Op,o,{source:2,renderers:3,options:4})}}function Dp(e){y(e,"svelte-1ghs2sb",'.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::before,.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::after{box-sizing:border-box}button.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{text-transform:none}button.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,[type=\'button\'].svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{-webkit-appearance:button}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::-moz-focus-inner{border-style:none;padding:0}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:-moz-focusring{outline:1px dotted ButtonText}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:-moz-ui-invalid{box-shadow:none}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::-webkit-inner-spin-button,.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::-webkit-outer-spin-button{height:auto}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::-webkit-search-decoration{-webkit-appearance:none}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h4.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,p.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{margin:0}button.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{background-color:transparent;background-image:none}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::before,.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}img.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{border-style:solid}textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{resize:vertical}textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::-moz-placeholder{opacity:1;color:#9ca3af}textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::placeholder{opacity:1;color:#9ca3af}button.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{cursor:pointer}h4.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-size:inherit;font-weight:inherit}a.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{color:inherit;text-decoration:inherit}button.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{padding:0;line-height:inherit;color:inherit}img.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,svg.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{display:block;vertical-align:middle}img.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{max-width:100%;height:auto}.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb,.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::before,.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}.form-textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}.form-textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}.form-textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::-moz-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:-ms-input-placeholder{color:#6b7280;opacity:1}.form-textarea.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb::placeholder{color:#6b7280;opacity:1}.r-prose.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{color:#374151;max-width:65ch}.r-prose.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-size:1rem;line-height:1.75}.r-mx-4.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{margin-left:1rem;margin-right:1rem}.r-mt-4.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{margin-top:1rem}.r-mt-16.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{margin-top:4rem}.r-mb-2.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{margin-bottom:0.5rem}.r-flex.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{display:flex}.r-h-28.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{height:7rem}.r-h-12.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{height:3rem}.r-h-6.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{height:1.5rem}.r-max-h-96.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{max-height:24rem}.r-w-full.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{width:100%}.r-w-12.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{width:3rem}.r-w-6.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{width:1.5rem}.r-max-w-none.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{max-width:none}.r-max-w-full.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{max-width:100%}.r-flex-grow.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{flex-grow:1}.r-flex-col.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{flex-direction:column}.r-items-center.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{align-items:center}.r-justify-end.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{justify-content:flex-end}.r-gap-2.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{gap:0.5rem}.r-gap-4.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{gap:1rem}.r-space-x-4.svelte-1ghs2sb>.svelte-1ghs2sb:not([hidden])~.svelte-1ghs2sb:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.r-space-y-8.svelte-1ghs2sb>.svelte-1ghs2sb:not([hidden])~.svelte-1ghs2sb:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.r-self-end.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{align-self:flex-end}.r-overflow-scroll.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{overflow:scroll}.r-break-words.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{overflow-wrap:break-word}.r-rounded-md.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{border-radius:0.375rem}.r-rounded-full.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{border-radius:9999px}.r-border-gray-300.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.r-bg-gray-100.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.r-bg-primary-100.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.r-bg-primary-50.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.r-py-1.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{padding-top:0.25rem;padding-bottom:0.25rem}.r-px-6.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{padding-left:1.5rem;padding-right:1.5rem}.r-py-4.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{padding-top:1rem;padding-bottom:1rem}.r-px-4.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{padding-left:1rem;padding-right:1rem}.r-px-2.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{padding-left:0.5rem;padding-right:0.5rem}.r-py-2.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{padding-top:0.5rem;padding-bottom:0.5rem}.r-font-sans.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.r-text-base.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-size:1rem;line-height:1.5rem}.r-text-lg.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-size:1.125rem;line-height:1.75rem}.r-font-medium.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-weight:500}.r-font-normal.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-weight:400}.r-font-semibold.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{font-weight:600}.r-text-gray-600.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.r-text-primary-800.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.r-text-primary-500.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.r-text-gray-400.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.r-text-red-600.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.r-text-pink-600.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.r-primary-btn.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe;--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.r-primary-btn.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity));--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0));--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0));--tw-gradient-to:#ddd6fe}.r-primary-btn.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:disabled{cursor:not-allowed;opacity:0.7}.r-primary-btn.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe}.hover\\:r-bg-primary-200.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:r-bg-red-100\\/60.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:r-bg-pink-100\\/60.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:hover{background-color:rgba(252, 231, 243, 0.6)}.disabled\\:r-cursor-not-allowed.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:disabled{cursor:not-allowed}.disabled\\:r-bg-gray-100.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:r-text-gray-600.svelte-1ghs2sb.svelte-1ghs2sb.svelte-1ghs2sb:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}')}function Lp(e,t,n){const r=e.slice();return r[26]=t[n],r}function Mp(t){let n,r,i,s,o,a,l,c;return{c(){n=x("label"),r=x("p"),r.textContent="Add a comment (markdown is supported)",i=T(),s=x("textarea"),$(r,"class","r-text-gray-600 dark:!r-text-gray-200 svelte-1ghs2sb"),$(s,"class","r-border-gray-300 dark:!r-border-gray-600 dark:!r-bg-gray-800 r-rounded-md r-w-full form-textarea r-font-sans r-h-28 disabled:r-cursor-not-allowed svelte-1ghs2sb"),$(s,"placeholder",o=t[0].user?"Write your thoughts...":"Login to leave a comment"),s.disabled=a=!t[0].user,$(n,"class","svelte-1ghs2sb")},m(e,o){_(e,n,o),b(n,r),b(n,i),b(n,s),R(s,t[4]),l||(c=E(s,"input",t[14]),l=!0)},p(e,t){1&t&&o!==(o=e[0].user?"Write your thoughts...":"Login to leave a comment")&&$(s,"placeholder",o),1&t&&a!==(a=!e[0].user)&&(s.disabled=a),16&t&&R(s,e[4])},i:e,o:e,d(e){e&&w(n),l=!1,c()}}}function Fp(e){let t,n,r,i,s;return i=new jp({props:{source:e[4]||"Nothing to preview"}}),{c(){t=x("p"),t.textContent="Add a comment (markdown is supported)",n=T(),r=x("div"),ie(i.$$.fragment),$(t,"class","r-text-gray-600 dark:!r-text-gray-200 svelte-1ghs2sb"),$(r,"class","r-max-h-96 r-overflow-scroll r-text-base r-prose dark:!r-prose-dark r-max-w-none dark:!r-text-white r-bg-gray-100 dark:!r-bg-gray-700 r-px-6 r-py-4 svelte-1ghs2sb")},m(e,o){_(e,t,o),_(e,n,o),_(e,r,o),se(i,r,null),s=!0},p(e,t){const n={};16&t&&(n.source=e[4]||"Nothing to preview"),i.$set(n)},i(e){s||(J(i.$$.fragment,e),s=!0)},o(e){Q(i.$$.fragment,e),s=!1},d(e){e&&w(t),e&&w(n),e&&w(r),oe(i)}}}function zp(e){let t,n,r,i,s,o,a,l,c,u,h,d,p=(e[3]?e[2].length:"-")+"",f=e[3]&&1==e[2].length?"comment":"comments",g=[],m=new Map,v=e[2];const y=e=>e[26].id;for(let t=0;t<v.length;t+=1){let n=Lp(e,v,t),r=y(n);m.set(r,g[t]=Vp(r,n))}return{c(){t=x("div"),n=I(p),r=I(" "),i=T(),s=I(f),o=T(),a=x("span"),a.textContent="|",l=T(),c=x("em"),c.innerHTML='Powered by\n        <a href="https://github.com/maggie-j-liu/reactive" rel="noreferrer" target="_blank" class="r-text-primary-500 r-font-medium r-hover:underline svelte-1ghs2sb">Reactive</a>',u=T(),h=x("div");for(let e=0;e<g.length;e+=1)g[e].c();$(a,"class","r-mx-4 r-text-lg svelte-1ghs2sb"),$(c,"class","text-gray-600 dark:!text-gray-300 svelte-1ghs2sb"),$(t,"class","r-mt-4 svelte-1ghs2sb"),$(h,"class","r-space-y-8 svelte-1ghs2sb")},m(e,p){_(e,t,p),b(t,n),b(t,r),b(t,i),b(t,s),b(t,o),b(t,a),b(t,l),b(t,c),_(e,u,p),_(e,h,p);for(let e=0;e<g.length;e+=1)g[e].m(h,null);d=!0},p(e,t){(!d||12&t)&&p!==(p=(e[3]?e[2].length:"-")+"")&&N(n,p),(!d||12&t)&&f!==(f=e[3]&&1==e[2].length?"comment":"comments")&&N(s,f),6949&t&&(v=e[2],K(),g=te(g,t,y,1,e,v,m,h,ee,Vp,null,Lp),Y())},i(e){if(!d){for(let e=0;e<v.length;e+=1)J(g[e]);d=!0}},o(e){for(let e=0;e<g.length;e+=1)Q(g[e]);d=!1},d(e){e&&w(t),e&&w(u),e&&w(h);for(let e=0;e<g.length;e+=1)g[e].d()}}}function Up(e){let t,n,r;function i(){return e[17](e[26])}return{c(){t=x("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="r-h-6 r-w-6 r-text-red-600 dark:!r-text-red-500 svelte-1ghs2sb"><polyline points="3 6 5 6 21 6" class="svelte-1ghs2sb"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" class="svelte-1ghs2sb"></path><line x1="10" y1="11" x2="10" y2="17" class="svelte-1ghs2sb"></line><line x1="14" y1="11" x2="14" y2="17" class="svelte-1ghs2sb"></line></svg>',$(t,"class","hover:r-bg-red-100/60 dark:hover:!r-bg-red-500/25 r-px-2 r-py-2 r-rounded-full svelte-1ghs2sb")},m(e,s){_(e,t,s),n||(r=E(t,"click",i),n=!0)},p(t,n){e=t},d(e){e&&w(t),n=!1,r()}}}function qp(e){let t,n,r,i,s,o=(e[26].likes??0)+"";return{c(){t=x("div"),n=C("svg"),r=C("path"),i=T(),s=I(o),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-1ghs2sb"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill","none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","r-h-6 r-w-6 r-text-pink-600 svelte-1ghs2sb"),$(t,"class","r-px-2 r-py-2 r-flex r-text-pink-600 r-font-semibold r-gap-2 r-items-center svelte-1ghs2sb")},m(e,o){_(e,t,o),b(t,n),b(n,r),b(t,i),b(t,s)},p(e,t){4&t&&o!==(o=(e[26].likes??0)+"")&&N(s,o)},d(e){e&&w(t)}}}function Wp(e){let t,n,r,i,s,o,a,l,c=(e[26].likes??0)+"";function u(){return e[18](e[26])}return{c(){t=x("button"),n=C("svg"),r=C("path"),s=T(),o=I(c),$(r,"d","M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"),$(r,"class","svelte-1ghs2sb"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"viewBox","0 0 24 24"),$(n,"fill",i=e[8].includes(e[26].id)?"currentColor":"none"),$(n,"stroke","currentColor"),$(n,"stroke-width","2"),$(n,"stroke-linecap","round"),$(n,"stroke-linejoin","round"),$(n,"class","r-h-6 r-w-6 r-text-pink-600 dark:!r-text-pink-400 svelte-1ghs2sb"),$(t,"class","r-px-2 r-py-2 r-rounded-full hover:r-bg-pink-100/60 dark:hover:!r-bg-pink-400/20 r-flex r-text-pink-600 dark:!r-text-pink-400 r-font-semibold r-gap-2 r-items-center svelte-1ghs2sb")},m(e,i){_(e,t,i),b(t,n),b(n,r),b(t,s),b(t,o),a||(l=E(t,"click",u),a=!0)},p(t,r){e=t,260&r&&i!==(i=e[8].includes(e[26].id)?"currentColor":"none")&&$(n,"fill",i),4&r&&c!==(c=(e[26].likes??0)+"")&&N(o,c)},d(e){e&&w(t),a=!1,l()}}}function Vp(e,t){let n,r,i,s,o,a,l,u,h,d,p,f,g,m,v,y,k,C,S,E,R=t[5][t[26].user].name+"",P=t[9].format(t[26].timestamp)+"";v=new jp({props:{source:t[26].text}});let O=t[0].user&&t[26].user==t[0].user.uid&&Up(t);function A(e,t){return e[0].user?Wp:qp}let j=A(t),D=j(t);return{key:e,first:null,c(){n=x("div"),r=x("img"),o=T(),a=x("div"),l=x("h4"),u=I(R),h=T(),d=x("span"),p=I("commented "),f=I(P),g=T(),m=x("div"),ie(v.$$.fragment),y=T(),k=x("div"),O&&O.c(),C=T(),D.c(),S=T(),c(r.src,i=t[5][t[26].user].photo)||$(r,"src",i),$(r,"alt",s=t[5][t[26].user].name+"'s profile picture"),$(r,"class","r-h-12 r-w-12 r-rounded-full svelte-1ghs2sb"),$(d,"class","r-text-base r-text-gray-400 r-font-normal svelte-1ghs2sb"),$(l,"class","r-text-lg r-text-primary-800 dark:!r-text-primary-300 r-mb-2 r-font-medium svelte-1ghs2sb"),$(m,"class","r-max-h-96 r-break-words r-text-base r-prose dark:!r-prose-dark r-max-w-none dark:!r-text-white svelte-1ghs2sb"),$(k,"class","r-w-full r-flex r-justify-end r-items-center r-gap-2 svelte-1ghs2sb"),$(a,"class","r-bg-primary-50 dark:!r-bg-gray-700 r-flex-grow r-px-6 r-py-4 r-max-w-full r-break-words svelte-1ghs2sb"),$(n,"class","r-flex r-gap-4 svelte-1ghs2sb"),this.first=n},m(e,t){_(e,n,t),b(n,r),b(n,o),b(n,a),b(a,l),b(l,u),b(l,h),b(l,d),b(d,p),b(d,f),b(a,g),b(a,m),se(v,m,null),b(a,y),b(a,k),O&&O.m(k,null),b(k,C),D.m(k,null),b(n,S),E=!0},p(e,n){t=e,(!E||36&n&&!c(r.src,i=t[5][t[26].user].photo))&&$(r,"src",i),(!E||36&n&&s!==(s=t[5][t[26].user].name+"'s profile picture"))&&$(r,"alt",s),(!E||36&n)&&R!==(R=t[5][t[26].user].name+"")&&N(u,R),(!E||4&n)&&P!==(P=t[9].format(t[26].timestamp)+"")&&N(f,P);const o={};4&n&&(o.source=t[26].text),v.$set(o),t[0].user&&t[26].user==t[0].user.uid?O?O.p(t,n):(O=Up(t),O.c(),O.m(k,C)):O&&(O.d(1),O=null),j===(j=A(t))&&D?D.p(t,n):(D.d(1),D=j(t),D&&(D.c(),D.m(k,null)))},i(e){E||(J(v.$$.fragment,e),E=!0)},o(e){Q(v.$$.fragment,e),E=!1},d(e){e&&w(n),oe(v),O&&O.d(),D.d()}}}function Hp(e){let t,n,r,s,o,a,l,c,u,h,d,p,f,g,m,v,y=e[7]?"Edit":"Preview";const k=[Fp,Mp],C=[];function S(e,t){return e[7]?0:1}n=S(e),r=C[n]=k[n](e);let R=e[6]&&zp(e);return{c(){t=x("div"),r.c(),s=T(),o=x("div"),a=x("button"),l=I(y),u=T(),h=x("button"),d=I("Submit"),f=T(),R&&R.c(),$(a,"class","dark:!r-bg-primary-600 dark:hover:!r-bg-primary-500 dark:disabled:!r-bg-gray-500 dark:!r-text-white dark:disabled:!r-text-gray-300 r-text-lg r-bg-primary-100 hover:r-bg-primary-200 r-text-primary-800 r-px-4 r-py-1 r-rounded-md disabled:r-bg-gray-100 disabled:r-hover:bg-gray-100 disabled:r-cursor-not-allowed disabled:r-text-gray-600 svelte-1ghs2sb"),a.disabled=c=!e[0].user||!e[4],$(h,"type","button"),$(h,"class","dark:!r-from-primary-600 dark:hover:!r-from-primary-500 dark:disabled:hover:!r-from-primary-600 dark:!r-via-blue-500 dark:hover:!r-via-blue-400 dark:disabled:hover:!r-via-blue-500 dark:!r-to-purple-600 dark:hover:!r-to-purple-500 dark:disabled:hover:!r-to-purple-600 dark:!r-text-white r-text-lg r-primary-btn r-px-4 r-py-1 svelte-1ghs2sb"),h.disabled=p=!e[0].user||!e[4],$(o,"class","r-self-end r-space-x-4 svelte-1ghs2sb"),$(t,"class","r-flex r-flex-col r-gap-4 r-mt-16 r-text-base r-w-full svelte-1ghs2sb")},m(r,i){_(r,t,i),C[n].m(t,null),b(t,s),b(t,o),b(o,a),b(a,l),b(o,u),b(o,h),b(h,d),b(t,f),R&&R.m(t,null),g=!0,m||(v=[E(a,"click",e[15]),E(h,"click",e[16])],m=!0)},p(e,[i]){let o=n;n=S(e),n===o?C[n].p(e,i):(K(),Q(C[o],1,1,(()=>{C[o]=null})),Y(),r=C[n],r?r.p(e,i):(r=C[n]=k[n](e),r.c()),J(r,1),r.m(t,s)),(!g||128&i)&&y!==(y=e[7]?"Edit":"Preview")&&N(l,y),(!g||17&i&&c!==(c=!e[0].user||!e[4]))&&(a.disabled=c),(!g||17&i&&p!==(p=!e[0].user||!e[4]))&&(h.disabled=p),e[6]?R?(R.p(e,i),64&i&&J(R,1)):(R=zp(e),R.c(),J(R,1),R.m(t,null)):R&&(K(),Q(R,1,1,(()=>{R=null})),Y())},i(e){g||(J(r),J(R),g=!0)},o(e){Q(r),Q(R),g=!1},d(e){e&&w(t),C[n].d(),R&&R.d(),m=!1,i(v)}}}function Bp(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s())),uh.addDefaultLocale(ph);const o=new uh("en-US");let a,l,c,{page:h=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n;try{const e=pc();a=e.authStore,s(),s=u(a,(e=>r(0,i=e))),l=e.loginWithGoogle,c=e.logout}catch(e){throw e}const d=lc();let p=[],f=!1,g="",m={},v=!1,b=!1,y=[];A((()=>{rc(Jl(d,"users/info"),(e=>{r(5,m=e.val()??{}),r(6,v=!0)}),{onlyOnce:!0})}));const _=()=>{if(!i.user||!g)return;const e=`posts/${wc(h)}/comments`,t=function(e,t){e=Ke(e),fl("push",e._path),ul("push",t,e._path,!0);const n=Cl(e._repo),r=qs(n),i=Ql(e,r),s=Ql(e,r);let o;return o=null!=t?Zl(s,t).then((()=>s)):Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}(Jl(d,e),{user:i.user.uid,text:g,timestamp:cc,likes:0}).key;r(2,p=[{id:t,user:i.user.uid,text:g,timestamp:Date.now(),likes:0},...p]),r(4,g=""),r(7,b=!1)},w=async e=>{i.user&&e.user==i.user.uid&&(await Zl(Jl(d,`posts/${wc(h)}/comments/${e.id}`),null),r(2,p=p.filter((t=>t.id!==e.id))))},k=async e=>{y.includes(e.id)?(async e=>{if(!i.user)return;const t={};t[`posts/${wc(h)}/comments/${e.id}/likes`]=uc(-1),t[`users/activity/${i.user.uid}/${wc(h)}/commentLikes/${e.id}`]=null,await Xl(Jl(d),t),e.likes--,r(2,p=[...p]),r(8,y=y.filter((t=>t!==e.id)))})(e):(async e=>{if(!i.user)return;const t={};t[`posts/${wc(h)}/comments/${e.id}/likes`]=uc(1),t[`users/activity/${i.user.uid}/${wc(h)}/commentLikes/${e.id}`]=!0,await Xl(Jl(d),t),e.likes++,r(2,p=[...p]),r(8,y=[...y,e.id])})(e)};return t.$$set=e=>{"page"in e&&r(13,h=e.page)},t.$$.update=()=>{if(8193&t.$$.dirty){rc(function(e,...t){let n=Ke(e);for(const e of t)n=e._apply(n);return n}(Jl(d,`posts/${wc(h)}/comments`),function(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return pl("orderByChild","path",e,!1),new ic(e)}("timestamp")),(e=>{var t;t=Object.entries(e.val()??{}).map((([e,t])=>({id:e,...t}))).reverse(),r(2,p=t),r(3,f=!0)}),{onlyOnce:!0}),i.user?rc(Jl(d,`users/activity/${i.user.uid}/${wc(h)}/commentLikes`),(e=>{var t;t=e.val()??{},r(8,y=Object.keys(t))}),{onlyOnce:!0}):r(8,y=[])}},[i,a,p,f,g,m,v,b,y,o,_,w,k,h,function(){g=this.value,r(4,g)},()=>{r(7,b=!b)},()=>_(),e=>w(e),e=>k(e)]}class Gp extends ce{constructor(e){super(),le(this,e,Bp,Hp,o,{page:13},Dp)}}function Kp(e){y(e,"svelte-plz1re",'.r-fixed{position:fixed}.r-top-6{top:1.5rem}.r-right-6{right:1.5rem}.r-mx-auto{margin-left:auto;margin-right:auto}.r-my-16{margin-top:4rem;margin-bottom:4rem}.r-mx-4{margin-left:1rem;margin-right:1rem}.r-mt-4{margin-top:1rem}.r-mt-16{margin-top:4rem}.r-mb-2{margin-bottom:0.5rem}.r-mt-8{margin-top:2rem}.r-mr-2{margin-right:0.5rem}.r-flex{display:flex}.r-hidden{display:none}.r-h-9{height:2.25rem}.r-h-28{height:7rem}.r-h-12{height:3rem}.r-h-6{height:1.5rem}.r-h-4{height:1rem}.r-max-h-96{max-height:24rem}.r-w-full{width:100%}.r-w-12{width:3rem}.r-w-6{width:1.5rem}.r-w-4{width:1rem}.r-max-w-none{max-width:none}.r-max-w-full{max-width:100%}.r-flex-grow{flex-grow:1}.r-flex-col{flex-direction:column}.r-items-center{align-items:center}.r-justify-end{justify-content:flex-end}.r-gap-10{gap:2.5rem}.r-gap-2{gap:0.5rem}.r-gap-4{gap:1rem}.r-space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.r-space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.r-self-end{align-self:flex-end}.r-overflow-scroll{overflow:scroll}.r-break-words{overflow-wrap:break-word}.r-rounded-md{border-radius:0.375rem}.r-rounded-full{border-radius:9999px}.\\!r-rounded-lg{border-radius:0.5rem !important}.r-border-gray-300{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.r-bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.r-bg-primary-100{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.r-bg-primary-50{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.r-bg-primary-200{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.r-bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.r-bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.r-from-primary-100{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.r-via-blue-100{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.r-to-purple-100{--tw-gradient-to:#ede9fe}.r-py-1{padding-top:0.25rem;padding-bottom:0.25rem}.r-px-6{padding-left:1.5rem;padding-right:1.5rem}.r-py-4{padding-top:1rem;padding-bottom:1rem}.r-px-4{padding-left:1rem;padding-right:1rem}.r-px-2{padding-left:0.5rem;padding-right:0.5rem}.r-py-2{padding-top:0.5rem;padding-bottom:0.5rem}.\\!r-px-3{padding-left:0.75rem !important;padding-right:0.75rem !important}.\\!r-py-1\\.5{padding-top:0.375rem !important;padding-bottom:0.375rem !important}.\\!r-py-1{padding-top:0.25rem !important;padding-bottom:0.25rem !important}.r-font-sans{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.r-text-3xl{font-size:1.875rem;line-height:2.25rem}.r-text-2xl{font-size:1.5rem;line-height:2rem}.r-text-base{font-size:1rem;line-height:1.5rem}.r-text-lg{font-size:1.125rem;line-height:1.75rem}.r-font-bold{font-weight:700}.r-font-medium{font-weight:500}.r-font-normal{font-weight:400}.r-font-semibold{font-weight:600}.r-text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.r-text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.r-text-primary-600{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.r-text-gray-700{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.r-text-primary-900{--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.r-text-gray-600{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.r-text-primary-800{--tw-text-opacity:1;color:rgba(7, 89, 133, var(--tw-text-opacity))}.r-text-primary-500{--tw-text-opacity:1;color:rgba(14, 165, 233, var(--tw-text-opacity))}.r-text-gray-400{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.r-text-red-600{--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}.r-text-pink-600{--tw-text-opacity:1;color:rgba(219, 39, 119, var(--tw-text-opacity))}.\\!r-ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.\\!r-ring-primary-500{--tw-ring-opacity:1 !important;--tw-ring-color:rgba(14, 165, 233, var(--tw-ring-opacity)) !important}.r-prose{color:#374151;max-width:65ch}.r-prose [class~="lead"]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.r-prose a{color:#111827;text-decoration:underline;font-weight:500}.r-prose strong{color:#111827;font-weight:600}.r-prose ol[type="A"]{--list-counter-style:upper-alpha}.r-prose ol[type="a"]{--list-counter-style:lower-alpha}.r-prose ol[type="A" s]{--list-counter-style:upper-alpha}.r-prose ol[type="a" s]{--list-counter-style:lower-alpha}.r-prose ol[type="I"]{--list-counter-style:upper-roman}.r-prose ol[type="i"]{--list-counter-style:lower-roman}.r-prose ol[type="I" s]{--list-counter-style:upper-roman}.r-prose ol[type="i" s]{--list-counter-style:lower-roman}.r-prose ol[type="1"]{--list-counter-style:decimal}.r-prose ol>li{position:relative;padding-left:1.75em}.r-prose ol>li::before{content:counter(list-item, var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#6b7280;left:0}.r-prose ul>li{position:relative;padding-left:1.75em}.r-prose ul>li::before{content:"";position:absolute;background-color:#d1d5db;border-radius:50%;width:0.375em;height:0.375em;top:calc(0.875em - 0.1875em);left:0.25em}.r-prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.r-prose blockquote{font-weight:500;font-style:italic;color:#111827;border-left-width:0.25rem;border-left-color:#e5e7eb;quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.r-prose blockquote p:first-of-type::before{content:open-quote}.r-prose blockquote p:last-of-type::after{content:close-quote}.r-prose h1{color:#111827;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111}.r-prose h2{color:#111827;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.r-prose h3{color:#111827;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6}.r-prose h4{color:#111827;font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5}.r-prose figure figcaption{color:#6b7280;font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em}.r-prose code{color:#111827;font-weight:600;font-size:0.875em}.r-prose code::before{content:"`"}.r-prose code::after{content:"`"}.r-prose a code{color:#111827}.r-prose pre{color:#e5e7eb;background-color:#1f2937;overflow-x:auto;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em}.r-prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.r-prose pre code::before{content:none}.r-prose pre code::after{content:none}.r-prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857}.r-prose thead{color:#111827;font-weight:600;border-bottom-width:1px;border-bottom-color:#d1d5db}.r-prose thead th{vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.r-prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.r-prose tbody tr:last-child{border-bottom-width:0}.r-prose tbody td{vertical-align:top;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}.r-prose{font-size:1rem;line-height:1.75}.r-prose p{margin-top:1.25em;margin-bottom:1.25em}.r-prose img{margin-top:2em;margin-bottom:2em}.r-prose video{margin-top:2em;margin-bottom:2em}.r-prose figure{margin-top:2em;margin-bottom:2em}.r-prose figure>*{margin-top:0;margin-bottom:0}.r-prose h2 code{font-size:0.875em}.r-prose h3 code{font-size:0.9em}.r-prose ol{margin-top:1.25em;margin-bottom:1.25em}.r-prose ul{margin-top:1.25em;margin-bottom:1.25em}.r-prose li{margin-top:0.5em;margin-bottom:0.5em}.r-prose>ul>li p{margin-top:0.75em;margin-bottom:0.75em}.r-prose>ul>li>*:first-child{margin-top:1.25em}.r-prose>ul>li>*:last-child{margin-bottom:1.25em}.r-prose>ol>li>*:first-child{margin-top:1.25em}.r-prose>ol>li>*:last-child{margin-bottom:1.25em}.r-prose ul ul,.r-prose ul ol,.r-prose ol ul,.r-prose ol ol{margin-top:0.75em;margin-bottom:0.75em;margin-top:0.75em;margin-bottom:0.75em;margin-top:0.75em;margin-bottom:0.75em;margin-top:0.75em;margin-bottom:0.75em}.r-prose hr+*{margin-top:0}.r-prose h2+*{margin-top:0}.r-prose h3+*{margin-top:0}.r-prose h4+*{margin-top:0}.r-prose thead th:first-child{padding-left:0}.r-prose thead th:last-child{padding-right:0}.r-prose tbody td:first-child{padding-left:0}.r-prose tbody td:last-child{padding-right:0}.r-prose>:first-child{margin-top:0}.r-prose>:last-child{margin-bottom:0}.hover\\:r-bg-primary-100:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity))}.hover\\:r-bg-primary-200:hover{--tw-bg-opacity:1;background-color:rgba(186, 230, 253, var(--tw-bg-opacity))}.hover\\:r-bg-red-100\\/60:hover{background-color:rgba(254, 226, 226, 0.6)}.hover\\:r-bg-pink-100\\/60:hover{background-color:rgba(252, 231, 243, 0.6)}.hover\\:r-bg-primary-50:hover{--tw-bg-opacity:1;background-color:rgba(240, 249, 255, var(--tw-bg-opacity))}.hover\\:r-from-primary-200:hover{--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0))}.hover\\:r-via-blue-200:hover{--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0))}.hover\\:r-to-purple-200:hover{--tw-gradient-to:#ddd6fe}.hover\\:\\!r-shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important}.hover\\:\\!r-ring-2:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important}.disabled\\:r-cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:r-bg-gray-100:disabled{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.disabled\\:r-text-gray-600:disabled{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.disabled\\:r-opacity-70:disabled{opacity:0.7}.disabled\\:hover\\:r-from-primary-100:disabled:hover{--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0))}.disabled\\:hover\\:r-via-blue-100:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0))}.r-dark .dark\\:\\!r-prose-dark{color:#fff !important}.r-dark .dark\\:\\!r-prose-dark h1{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h2{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h3{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h4{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h5{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark h6{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark a{color:#7dd3fc !important}.r-dark .dark\\:\\!r-prose-dark blockquote{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark strong{color:inherit !important}.r-dark .dark\\:\\!r-prose-dark code{font-weight:inherit !important}.r-dark .dark\\:\\!r-border-gray-600{--tw-border-opacity:1 !important;border-color:rgba(75, 85, 99, var(--tw-border-opacity)) !important}.r-dark .dark\\:\\!r-bg-gray-700{--tw-bg-opacity:1 !important;background-color:rgba(55, 65, 81, var(--tw-bg-opacity)) !important}.r-dark .dark\\:\\!r-bg-gray-800{--tw-bg-opacity:1 !important;background-color:rgba(31, 41, 55, var(--tw-bg-opacity)) !important}.r-dark .dark\\:\\!r-bg-primary-600{--tw-bg-opacity:1 !important;background-color:rgba(2, 132, 199, var(--tw-bg-opacity)) !important}.r-dark .dark\\:\\!r-bg-primary-800{--tw-bg-opacity:1 !important;background-color:rgba(7, 89, 133, var(--tw-bg-opacity)) !important}.r-dark .dark\\:r-from-primary-600{--tw-gradient-from:#0284c7;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0))}.r-dark .dark\\:\\!r-from-primary-600{--tw-gradient-from:#0284c7 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0)) !important}.r-dark .dark\\:r-via-blue-500{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0))}.r-dark .dark\\:\\!r-via-blue-500{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0)) !important}.r-dark .dark\\:r-to-purple-600{--tw-gradient-to:#7c3aed}.r-dark .dark\\:\\!r-to-purple-600{--tw-gradient-to:#7c3aed !important}.r-dark .dark\\:r-text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.r-dark .dark\\:r-text-primary-400{--tw-text-opacity:1;color:rgba(56, 189, 248, var(--tw-text-opacity))}.r-dark .dark\\:\\!r-text-gray-200{--tw-text-opacity:1 !important;color:rgba(229, 231, 235, var(--tw-text-opacity)) !important}.r-dark .dark\\:\\!r-text-white{--tw-text-opacity:1 !important;color:rgba(255, 255, 255, var(--tw-text-opacity)) !important}.r-dark .dark\\:\\!r-text-primary-300{--tw-text-opacity:1 !important;color:rgba(125, 211, 252, var(--tw-text-opacity)) !important}.r-dark .dark\\:\\!r-text-red-500{--tw-text-opacity:1 !important;color:rgba(239, 68, 68, var(--tw-text-opacity)) !important}.r-dark .dark\\:\\!r-text-pink-400{--tw-text-opacity:1 !important;color:rgba(244, 114, 182, var(--tw-text-opacity)) !important}.r-dark .dark\\:hover\\:\\!r-bg-primary-500:hover{--tw-bg-opacity:1 !important;background-color:rgba(14, 165, 233, var(--tw-bg-opacity)) !important}.r-dark .dark\\:hover\\:\\!r-bg-red-500\\/25:hover{background-color:rgba(239, 68, 68, 0.25) !important}.r-dark .dark\\:hover\\:\\!r-bg-pink-400\\/20:hover{background-color:rgba(244, 114, 182, 0.2) !important}.r-dark .dark\\:hover\\:\\!r-bg-primary-600:hover{--tw-bg-opacity:1 !important;background-color:rgba(2, 132, 199, var(--tw-bg-opacity)) !important}.r-dark .dark\\:hover\\:r-from-primary-500:hover{--tw-gradient-from:#0ea5e9;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 165, 233, 0))}.r-dark .dark\\:hover\\:\\!r-from-primary-500:hover{--tw-gradient-from:#0ea5e9 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 165, 233, 0)) !important}.r-dark .dark\\:hover\\:r-via-blue-400:hover{--tw-gradient-stops:var(--tw-gradient-from), #60a5fa, var(--tw-gradient-to, rgba(96, 165, 250, 0))}.r-dark .dark\\:hover\\:\\!r-via-blue-400:hover{--tw-gradient-stops:var(--tw-gradient-from), #60a5fa, var(--tw-gradient-to, rgba(96, 165, 250, 0)) !important}.r-dark .dark\\:hover\\:r-to-purple-500:hover{--tw-gradient-to:#8b5cf6}.r-dark .dark\\:hover\\:\\!r-to-purple-500:hover{--tw-gradient-to:#8b5cf6 !important}.r-dark .dark\\:disabled\\:\\!r-bg-gray-500:disabled{--tw-bg-opacity:1 !important;background-color:rgba(107, 114, 128, var(--tw-bg-opacity)) !important}.r-dark .dark\\:disabled\\:\\!r-text-gray-300:disabled{--tw-text-opacity:1 !important;color:rgba(209, 213, 219, var(--tw-text-opacity)) !important}.r-dark .dark\\:disabled\\:hover\\:\\!r-from-primary-600:disabled:hover{--tw-gradient-from:#0284c7 !important;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(2, 132, 199, 0)) !important}.r-dark .dark\\:disabled\\:hover\\:\\!r-via-blue-500:disabled:hover{--tw-gradient-stops:var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to, rgba(59, 130, 246, 0)) !important}.r-dark .dark\\:disabled\\:hover\\:\\!r-to-purple-600:disabled:hover{--tw-gradient-to:#7c3aed !important}')}class Yp extends ce{constructor(e){super(),le(this,e,null,null,o,{},Kp)}}const{document:Jp}=Z;function Qp(e){y(e,"svelte-1rf0muc",'.svelte-1rf0muc,.svelte-1rf0muc::before,.svelte-1rf0muc::after{box-sizing:border-box}button.svelte-1rf0muc{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.svelte-1rf0muc{text-transform:none}button.svelte-1rf0muc,[type=\'button\'].svelte-1rf0muc{-webkit-appearance:button}.svelte-1rf0muc::-moz-focus-inner{border-style:none;padding:0}.svelte-1rf0muc:-moz-focusring{outline:1px dotted ButtonText}.svelte-1rf0muc:-moz-ui-invalid{box-shadow:none}.svelte-1rf0muc::-webkit-inner-spin-button,.svelte-1rf0muc::-webkit-outer-spin-button{height:auto}.svelte-1rf0muc::-webkit-search-decoration{-webkit-appearance:none}.svelte-1rf0muc::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h2.svelte-1rf0muc,h3.svelte-1rf0muc{margin:0}button.svelte-1rf0muc{background-color:transparent;background-image:none}.svelte-1rf0muc,.svelte-1rf0muc::before,.svelte-1rf0muc::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}button.svelte-1rf0muc{cursor:pointer}h2.svelte-1rf0muc,h3.svelte-1rf0muc{font-size:inherit;font-weight:inherit}button.svelte-1rf0muc{padding:0;line-height:inherit;color:inherit}.svelte-1rf0muc,.svelte-1rf0muc::before,.svelte-1rf0muc::after{--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}main.svelte-1rf0muc{margin:0;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n        "Noto Color Emoji";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-text-size-adjust:100%}.r-mx-auto.svelte-1rf0muc{margin-left:auto;margin-right:auto}.r-my-16.svelte-1rf0muc{margin-top:4rem;margin-bottom:4rem}.r-mt-4.svelte-1rf0muc{margin-top:1rem}.r-flex.svelte-1rf0muc{display:flex}.r-hidden.svelte-1rf0muc{display:none}.r-h-9.svelte-1rf0muc{height:2.25rem}.r-w-full.svelte-1rf0muc{width:100%}.r-flex-col.svelte-1rf0muc{flex-direction:column}.r-items-center.svelte-1rf0muc{align-items:center}.r-gap-10.svelte-1rf0muc{gap:2.5rem}.r-gap-2.svelte-1rf0muc{gap:0.5rem}.r-text-3xl.svelte-1rf0muc{font-size:1.875rem;line-height:2.25rem}.r-text-2xl.svelte-1rf0muc{font-size:1.5rem;line-height:2rem}.r-font-bold.svelte-1rf0muc{font-weight:700}.r-font-medium.svelte-1rf0muc{font-weight:500}.r-text-primary-600.svelte-1rf0muc{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.r-text-gray-700.svelte-1rf0muc{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.r-primary-btn.svelte-1rf0muc{border-radius:0.375rem;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#e0f2fe;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(224, 242, 254, 0));--tw-gradient-stops:var(--tw-gradient-from), #dbeafe, var(--tw-gradient-to, rgba(219, 234, 254, 0));--tw-gradient-to:#ede9fe;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;--tw-text-opacity:1;color:rgba(12, 74, 110, var(--tw-text-opacity))}.r-primary-btn.svelte-1rf0muc:hover{--tw-bg-opacity:1;background-color:rgba(224, 242, 254, var(--tw-bg-opacity));--tw-gradient-from:#bae6fd;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(186, 230, 253, 0));--tw-gradient-stops:var(--tw-gradient-from), #bfdbfe, var(--tw-gradient-to, rgba(191, 219, 254, 0));--tw-gradient-to:#ddd6fe}')}function Zp(t){let n;return{c(){n=x("div"),$(n,"class","r-h-9 svelte-1rf0muc")},m(e,t){_(e,n,t)},p:e,i:e,o:e,d(e){e&&w(n)}}}function Xp(t){let n,r,i,o,a;return{c(){n=x("div"),r=x("button"),r.textContent="Login",i=I("\n      to add reactions and comments."),$(r,"type","button"),$(r,"class","r-primary-btn r-text-md dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-via-blue-500 dark:hover:r-via-blue-400 dark:r-to-purple-600 dark:hover:r-to-purple-500 dark:r-text-white svelte-1rf0muc"),$(n,"class","svelte-1rf0muc")},m(e,l){_(e,n,l),b(n,r),b(n,i),o||(a=E(r,"click",(function(){s(t[5])&&t[5].apply(this,arguments)})),o=!0)},p(e,n){t=e},i:e,o:e,d(e){e&&w(n),o=!1,a()}}}function ef(e){let t,n,r,i,o,a,l,c,u,h,d,p,f,g=e[7].user.displayName+"";return u=new mc({}),{c(){t=x("div"),n=x("h2"),r=I("Hi "),i=x("span"),o=I(g),a=I(" 👋!"),l=T(),c=x("button"),ie(u.$$.fragment),h=I("\n        Logout"),$(i,"class","r-text-primary-600 dark:r-text-primary-400 svelte-1rf0muc"),$(n,"class","r-text-3xl r-font-bold svelte-1rf0muc"),$(c,"type","button"),$(c,"class","r-flex r-items-center r-gap-2 r-text-md r-primary-btn dark:r-from-primary-600 dark:hover:r-from-primary-500 dark:r-via-blue-500 dark:hover:r-via-blue-400 dark:r-to-purple-600 dark:hover:r-to-purple-500 dark:r-text-white svelte-1rf0muc"),$(t,"class","r-flex r-gap-10 r-items-center svelte-1rf0muc")},m(g,m){_(g,t,m),b(t,n),b(n,r),b(n,i),b(i,o),b(n,a),b(t,l),b(t,c),se(u,c,null),b(c,h),d=!0,p||(f=E(c,"click",(function(){s(e[6])&&e[6].apply(this,arguments)})),p=!0)},p(t,n){e=t,(!d||128&n)&&g!==(g=e[7].user.displayName+"")&&N(o,g)},i(e){d||(J(u.$$.fragment,e),d=!0)},o(e){Q(u.$$.fragment,e),d=!1},d(e){e&&w(t),oe(u),p=!1,f()}}}function tf(e){let t,n;return{c(){t=x("h3"),n=I(e[2]),$(t,"class","r-text-2xl r-mt-4 r-font-medium svelte-1rf0muc")},m(e,r){_(e,t,r),b(t,n)},p(e,t){4&t&&N(n,e[2])},d(e){e&&w(t)}}}function nf(e){let t,n;return t=new Sc({props:{page:e[1],reactions:e[0]}}),{c(){ie(t.$$.fragment)},m(e,r){se(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.page=e[1]),1&n&&(r.reactions=e[0]),t.$set(r)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function rf(e){let t,n,r,i,s,o,a,l,c,u,h,d,p,f;const g=[ef,Xp,Zp],m=[];function v(e,t){return e[7].user?0:e[7].loading?2:1}i=v(e),s=m[i]=g[i](e);let y=e[2].length>0&&tf(e),k=e[0].length>0&&nf(e);return h=new Gp({props:{page:e[1]}}),p=new Yp({}),{c(){t=x("meta"),n=T(),r=x("main"),s.c(),o=T(),a=x("div"),a.textContent="Thanks for using Webmonetization to support this site.",l=T(),y&&y.c(),c=T(),k&&k.c(),u=T(),ie(h.$$.fragment),d=T(),ie(p.$$.fragment),$(t,"name","monetization"),$(t,"content",e[3]),$(t,"class","svelte-1rf0muc"),$(a,"class","r-hidden dark:r-text-white r-text-gray-700 svelte-1rf0muc"),$(a,"id","exclusive"),$(r,"class","r-w-full r-mx-auto r-flex r-flex-col r-items-center r-my-16 dark:r-text-white svelte-1rf0muc")},m(e,s){b(Jp.head,t),_(e,n,s),_(e,r,s),m[i].m(r,null),b(r,o),b(r,a),b(r,l),y&&y.m(r,null),b(r,c),k&&k.m(r,null),b(r,u),se(h,r,null),_(e,d,s),se(p,e,s),f=!0},p(e,[n]){(!f||8&n)&&$(t,"content",e[3]);let a=i;i=v(e),i===a?m[i].p(e,n):(K(),Q(m[a],1,1,(()=>{m[a]=null})),Y(),s=m[i],s?s.p(e,n):(s=m[i]=g[i](e),s.c()),J(s,1),s.m(r,o)),e[2].length>0?y?y.p(e,n):(y=tf(e),y.c(),y.m(r,c)):y&&(y.d(1),y=null),e[0].length>0?k?(k.p(e,n),1&n&&J(k,1)):(k=nf(e),k.c(),J(k,1),k.m(r,u)):k&&(K(),Q(k,1,1,(()=>{k=null})),Y());const l={};2&n&&(l.page=e[1]),h.$set(l)},i(e){f||(J(s),J(k),J(h.$$.fragment,e),J(p.$$.fragment,e),f=!0)},o(e){Q(s),Q(k),Q(h.$$.fragment,e),Q(p.$$.fragment,e),f=!1},d(e){w(t),e&&w(n),e&&w(r),m[i].d(),y&&y.d(),k&&k.d(),oe(h),e&&w(d),oe(p,e)}}}function sf(t,n,r){let i,s=e;t.$$.on_destroy.push((()=>s()));let o,a,l,{firebaseConfig:c}=n,{reactions:h=["😭","😕","😀","🤩"]}=n,{page:d=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/")}=n,{reactionText:p="Did you enjoy this post? Leave your reactions below!"}=n,{paymentPointer:f="$ilp.uphold.com/LJmbPn7WD4JB"}=n;if(!c)throw new Error("No firebaseConfig was provided");Array.from(dt.values()).length||function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:ut,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw vt.create("bad-app-name",{appName:String(r)});if(dt.has(r))throw vt.create("duplicate-app",{appName:r});const i=new et(r);for(const e of pt.values())i.addComponent(e);const s=new bt(e,n,i);dt.set(r,s)}(c);try{const e=pc();o=e.authStore,s(),s=u(o,(e=>r(7,i=e))),a=e.loginWithGoogle,l=e.logout}catch(e){throw e}return document.monetization&&document.monetization.addEventListener("monetizationstart",(()=>{console.log("started"),document.getElementById("exclusive").classList.remove("hidden")})),t.$$set=e=>{"firebaseConfig"in e&&r(8,c=e.firebaseConfig),"reactions"in e&&r(0,h=e.reactions),"page"in e&&r(1,d=e.page),"reactionText"in e&&r(2,p=e.reactionText),"paymentPointer"in e&&r(3,f=e.paymentPointer)},[h,d,p,f,o,a,l,i,c]}class of extends ce{constructor(e){super(),le(this,e,sf,rf,o,{firebaseConfig:8,reactions:0,page:1,reactionText:2,paymentPointer:3},Qp)}}const af={install:({firebaseConfig:e,reactions:t,page:n,reactionText:r,paymentPointer:i})=>{const s=document.getElementById("reactive_widget");new of({target:s,props:{firebaseConfig:e,page:n,reactions:t,reactionText:r,paymentPointer:i}})}};return af}();
