var de=Object.defineProperty;var ue=(e,t,i)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var m=(e,t,i)=>ue(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function W(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function fe(e){var t=Object.prototype.toString.call(e),i=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&i.test(t)&&(e.length===0||W(e[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function I(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(W);if(W(e))return[e];if(fe(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var i=t.querySelectorAll(e);return Array.prototype.slice.call(i)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function Y(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=w();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function he(e,t){for(var i=Y(e),n=Y(t),a=[],r=0;r<4;r++)for(var s=[i[r],i[r+4],i[r+8],i[r+12]],c=0;c<4;c++){var v=c*4,l=[n[v],n[v+1],n[v+2],n[v+3]],f=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];a[r+v]=f}return a}function pe(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var i=t[2].split(", ").map(parseFloat);return Y(i)}}return w()}function ve(e){var t=Math.PI/180*e,i=w();return i[5]=i[10]=Math.cos(t),i[6]=i[9]=Math.sin(t),i[9]*=-1,i}function me(e){var t=Math.PI/180*e,i=w();return i[0]=i[10]=Math.cos(t),i[2]=i[8]=Math.sin(t),i[2]*=-1,i}function ge(e){var t=Math.PI/180*e,i=w();return i[0]=i[5]=Math.cos(t),i[1]=i[4]=Math.sin(t),i[4]*=-1,i}function K(e,t){var i=w();return i[0]=e,i[5]=e,i}function be(e){var t=w();return t[12]=e,t}function ye(e){var t=w();return t[13]=e,t}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var te=function(){var e=Date.now();return function(t){var i=Date.now();i-e>16?(e=i,t(i)):setTimeout(function(){return te(t)},0)}}(),we=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var ie={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function ke(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Se(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var C={success:Se,failure:ke};function R(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function o(e,t){if(R(e)){var i=Object.keys(e);return i.forEach(function(n){return t(e[n],n,e)})}if(e instanceof Array)return e.forEach(function(n,a){return t(n,a,e)});throw new TypeError("Expected either an array or object literal.")}function T(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(this.constructor.debug&&console){var n="%cScrollReveal: "+e;t.forEach(function(a){return n+=`
 — `+a}),console.log(n,"color: #ea654b;")}}function ne(){var e=this,t=function(){return{active:[],stale:[]}},i=t(),n=t(),a=t();try{o(I("[data-sr-id]"),function(r){var s=parseInt(r.getAttribute("data-sr-id"));i.active.push(s)})}catch(r){throw r}o(this.store.elements,function(r){i.active.indexOf(r.id)===-1&&i.stale.push(r.id)}),o(i.stale,function(r){return delete e.store.elements[r]}),o(this.store.elements,function(r){a.active.indexOf(r.containerId)===-1&&a.active.push(r.containerId),r.hasOwnProperty("sequence")&&n.active.indexOf(r.sequence.id)===-1&&n.active.push(r.sequence.id)}),o(this.store.containers,function(r){a.active.indexOf(r.id)===-1&&a.stale.push(r.id)}),o(a.stale,function(r){var s=e.store.containers[r].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[r]}),o(this.store.sequences,function(r){n.active.indexOf(r.id)===-1&&n.stale.push(r.id)}),o(n.stale,function(r){return delete e.store.sequences[r]})}var Q=function(){var e={},t=document.documentElement.style;function i(n,a){if(a===void 0&&(a=t),n&&typeof n=="string"){if(e[n])return e[n];if(typeof a[n]=="string")return e[n]=n;if(typeof a["-webkit-"+n]=="string")return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return i.clearCache=function(){return e={}},i}();function Te(e){var t=window.getComputedStyle(e.node),i=t.position,n=e.config,a={},r=e.node.getAttribute("style")||"",s=r.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];a.computed=s?s.map(function(b){return b.trim()}).join("; ")+";":"",a.generated=s.some(function(b){return b.match(/visibility\s?:\s?visible/i)})?a.computed:s.concat(["visibility: visible"]).map(function(b){return b.trim()}).join("; ")+";";var c=parseFloat(t.opacity),v=isNaN(parseFloat(n.opacity))?parseFloat(t.opacity):parseFloat(n.opacity),l={computed:c!==v?"opacity: "+c+";":"",generated:c!==v?"opacity: "+v+";":""},f=[];if(parseFloat(n.distance)){var d=n.origin==="top"||n.origin==="bottom"?"Y":"X",p=n.distance;(n.origin==="top"||n.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var k=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=k[0],S=k[1];switch(S){case"em":p=parseInt(t.fontSize)*g;break;case"px":p=g;break;case"%":p=d==="Y"?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}d==="Y"?f.push(ye(p)):f.push(be(p))}n.rotate.x&&f.push(ve(n.rotate.x)),n.rotate.y&&f.push(me(n.rotate.y)),n.rotate.z&&f.push(ge(n.rotate.z)),n.scale!==1&&(n.scale===0?f.push(K(2e-4)):f.push(K(n.scale)));var h={};if(f.length){h.property=Q("transform"),h.computed={raw:t[h.property],matrix:pe(t[h.property])},f.unshift(h.computed.matrix);var le=f.reduce(he);h.generated={initial:h.property+": matrix3d("+le.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var u={};if(l.generated||h.generated.initial){u.property=Q("transition"),u.computed=t[u.property],u.fragments=[];var U=n.delay,B=n.duration,x=n.easing;l.generated&&u.fragments.push({delayed:"opacity "+B/1e3+"s "+x+" "+U/1e3+"s",instant:"opacity "+B/1e3+"s "+x+" 0s"}),h.generated.initial&&u.fragments.push({delayed:h.property+" "+B/1e3+"s "+x+" "+U/1e3+"s",instant:h.property+" "+B/1e3+"s "+x+" 0s"});var ce=u.computed&&!u.computed.match(/all 0s|none 0s/);ce&&u.fragments.unshift({delayed:u.computed,instant:u.computed});var V=u.fragments.reduce(function(b,H,X){return b.delayed+=X===0?H.delayed:", "+H.delayed,b.instant+=X===0?H.instant:", "+H.instant,b},{delayed:"",instant:""});u.generated={delayed:u.property+": "+V.delayed+";",instant:u.property+": "+V.instant+";"}}else u.generated={delayed:"",instant:""};return{inline:a,opacity:l,position:i,transform:h,transition:u}}function L(e,t){t.split(";").forEach(function(i){var n=i.split(":"),a=n[0],r=n.slice(1);a&&r&&(e.style[a.trim()]=r.join(":"))})}function J(e){var t=this,i;try{o(I(e),function(n){var a=n.getAttribute("data-sr-id");if(a!==null){i=!0;var r=t.store.elements[a];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),L(r.node,r.styles.inline.generated),n.removeAttribute("data-sr-id"),delete t.store.elements[a]}})}catch(n){return T.call(this,"Clean failed.",n.message)}if(i)try{ne.call(this)}catch(n){return T.call(this,"Clean failed.",n.message)}}function Ee(){var e=this;o(this.store.elements,function(t){L(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),o(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.removeEventListener("scroll",e.delegate),i.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function A(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(R(e))return o(t,function(n){o(n,function(a,r){R(a)?((!e[r]||!R(e[r]))&&(e[r]={}),A(e[r],a)):e[r]=a})}),e;throw new TypeError("Target must be an object literal.")}function P(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var G=function(){var e=0;return function(){return e++}}();function ae(){var e=this;ne.call(this),o(this.store.elements,function(t){var i=[t.styles.inline.generated];t.visible?(i.push(t.styles.opacity.computed),i.push(t.styles.transform.generated.final),t.revealed=!0):(i.push(t.styles.opacity.generated),i.push(t.styles.transform.generated.initial),t.revealed=!1),L(t.node,i.filter(function(n){return n!==""}).join(" "))}),o(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.addEventListener("scroll",e.delegate),i.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function M(e,t){t===void 0&&(t={});var i=t.pristine||this.pristine,n=e.config.useDelay==="always"||e.config.useDelay==="onload"&&i||e.config.useDelay==="once"&&!e.seen,a=e.visible&&!e.revealed,r=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||a)return Le.call(this,e,n);if(t.reset||r)return Ce.call(this,e)}function Le(e,t){var i=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?i.push(e.styles.transition.generated.delayed):i.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,L(e.node,i.filter(function(n){return n!==""}).join(" ")),re.call(this,e,t)}function Ce(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,L(e.node,t.filter(function(i){return i!==""}).join(" ")),re.call(this,e)}function re(e,t){var i=this,n=t?e.config.duration+e.config.delay:e.config.duration,a=e.revealed?e.config.beforeReveal:e.config.beforeReset,r=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),a(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){r(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&J.call(i,e.node)},n-s)}}function se(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return M.call(this,e,{reset:!0});var i=this.store.sequences[e.sequence.id],n=e.sequence.index;if(i){var a=new Z(i,"visible",this.store),r=new Z(i,"revealed",this.store);if(i.models={visible:a,revealed:r},!r.body.length){var s=i.members[a.body[0]],c=this.store.elements[s];if(c)return O.call(this,i,a.body[0],-1,t),O.call(this,i,a.body[0],1,t),M.call(this,c,{reveal:!0,pristine:t})}if(!i.blocked.head&&n===[].concat(r.head).pop()&&n>=[].concat(a.body).shift())return O.call(this,i,n,-1,t),M.call(this,e,{reveal:!0,pristine:t});if(!i.blocked.foot&&n===[].concat(r.foot).shift()&&n<=[].concat(a.body).pop())return O.call(this,i,n,1,t),M.call(this,e,{reveal:!0,pristine:t})}}function Me(e){var t=Math.abs(e);if(!isNaN(t))this.id=G(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function Z(e,t,i){var n=this;this.head=[],this.body=[],this.foot=[],o(e.members,function(a,r){var s=i.elements[a];s&&s[t]&&n.body.push(r)}),this.body.length&&o(e.members,function(a,r){var s=i.elements[a];s&&!s[t]&&(r<n.body[0]?n.head.push(r):n.foot.push(r))})}function O(e,t,i,n){var a=this,r=["head",null,"foot"][1+i],s=e.members[t+i],c=this.store.elements[s];e.blocked[r]=!0,setTimeout(function(){e.blocked[r]=!1,c&&se.call(a,c,n)},e.interval)}function oe(e,t,i){var n=this;t===void 0&&(t={}),i===void 0&&(i=!1);var a=[],r,s=t.interval||ie.interval;try{s&&(r=new Me(s));var c=I(e);if(!c.length)throw new Error("Invalid reveal target.");var v=c.reduce(function(l,f){var d={},p=f.getAttribute("data-sr-id");p?(A(d,n.store.elements[p]),L(d.node,d.styles.inline.computed)):(d.id=G(),d.node=f,d.seen=!1,d.revealed=!1,d.visible=!1);var k=A({},d.config||n.defaults,t);if(!k.mobile&&P()||!k.desktop&&!P())return p&&J.call(n,d),l;var g=I(k.container)[0];if(!g)throw new Error("Invalid container.");if(!g.contains(f))return l;var S;return S=Ie(g,a,n.store.containers),S===null&&(S=G(),a.push({id:S,node:g})),d.config=k,d.containerId=S,d.styles=Te(d),r&&(d.sequence={id:r.id,index:r.members.length},r.members.push(d.id)),l.push(d),l},[]);o(v,function(l){n.store.elements[l.id]=l,l.node.setAttribute("data-sr-id",l.id)})}catch(l){return T.call(this,"Reveal failed.",l.message)}o(a,function(l){n.store.containers[l.id]={id:l.id,node:l.node}}),r&&(this.store.sequences[r.id]=r),i!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(ae.bind(this),0))}function Ie(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var n=null;return o(t,function(a){o(a,function(r){n===null&&r.node===e&&(n=r.id)})}),n}function Ae(){var e=this;o(this.store.history,function(t){oe.call(e,t.target,t.options,!0)}),ae.call(this)}var Be=function(e){return(e>0)-(e<0)||+e},_=Math.sign||Be;function ee(e,t){var i=t?e.node.clientHeight:e.node.offsetHeight,n=t?e.node.clientWidth:e.node.offsetWidth,a=0,r=0,s=e.node;do isNaN(s.offsetTop)||(a+=s.offsetTop),isNaN(s.offsetLeft)||(r+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:a,right:r+n,bottom:a+i,left:r},height:i,width:n}}function xe(e){var t,i;return e.node===document.documentElement?(t=window.pageYOffset,i=window.pageXOffset):(t=e.node.scrollTop,i=e.node.scrollLeft),{top:t,left:i}}function He(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var i=Math.max(0,Math.min(1,e.config.viewFactor)),n=e.config.viewOffset,a={top:e.geometry.bounds.top+e.geometry.height*i,right:e.geometry.bounds.right-e.geometry.width*i,bottom:e.geometry.bounds.bottom-e.geometry.height*i,left:e.geometry.bounds.left+e.geometry.width*i},r={top:t.geometry.bounds.top+t.scroll.top+n.top,right:t.geometry.bounds.right+t.scroll.left-n.right,bottom:t.geometry.bounds.bottom+t.scroll.top-n.bottom,left:t.geometry.bounds.left+t.scroll.left+n.left};return a.top<r.bottom&&a.right>r.left&&a.bottom>r.top&&a.left<r.right||e.styles.position==="fixed"}}function Oe(e,t){var i=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),we(function(){var n=e.type==="init"||e.type==="resize";o(i.store.containers,function(a){n&&(a.geometry=ee.call(i,a,!0));var r=xe.call(i,a);a.scroll&&(a.direction={x:_(r.left-a.scroll.left),y:_(r.top-a.scroll.top)}),a.scroll=r}),o(t,function(a){(n||a.geometry===void 0)&&(a.geometry=ee.call(i,a)),a.visible=He.call(i,a)}),o(t,function(a){a.sequence?se.call(i,a):M.call(i,a)}),i.pristine=!1})}function Re(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Pe(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var je="4.0.9",j,F,q,N,$,y,z,D;function E(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==E.prototype;if(t)return new E(e);if(!E.isSupported())return T.call(this,"Instantiation failed.","This browser is not supported."),C.failure();var i;try{i=y?A({},y,e):A({},ie,e)}catch(a){return T.call(this,"Invalid configuration.",a.message),C.failure()}try{var n=I(i.container)[0];if(!n)throw new Error("Invalid container.")}catch(a){return T.call(this,a.message),C.failure()}return y=i,!y.mobile&&P()||!y.desktop&&!P()?(T.call(this,"This device is disabled.","desktop: "+y.desktop,"mobile: "+y.mobile),C.failure()):(C.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,j=j||Oe.bind(this),F=F||Ee.bind(this),q=q||oe.bind(this),N=N||J.bind(this),$=$||Ae.bind(this),Object.defineProperty(this,"delegate",{get:function(){return j}}),Object.defineProperty(this,"destroy",{get:function(){return F}}),Object.defineProperty(this,"reveal",{get:function(){return q}}),Object.defineProperty(this,"clean",{get:function(){return N}}),Object.defineProperty(this,"sync",{get:function(){return $}}),Object.defineProperty(this,"defaults",{get:function(){return y}}),Object.defineProperty(this,"version",{get:function(){return je}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),D||(D=this))}E.isSupported=function(){return Re()&&Pe()};Object.defineProperty(E,"debug",{get:function(){return z||!1},set:function(e){return z=typeof e=="boolean"?e:z}});E();function Fe(){return new Date().getFullYear()}class qe{constructor(){m(this,"isInitialized",!1);m(this,"headerScrollHandler",()=>{const t=this;if(!t.header){console.warn("Header is absent",t.header);return}window.scrollY>10?t.header.classList.add("sticky"):t.header.classList.remove("sticky")});m(this,"contentScrollHandler",()=>{const t=this;if(!t.sections){console.warn("sections is absent",t.sections);return}const i=window.scrollY;t.sections.forEach(n=>{const a=n.offsetHeight,r=n.offsetTop-100,s=n.id,c=window.document.querySelector(`.nav-item a[href*=${s}]`);c&&(i>r&&i<=r+a?c.classList.add("active"):c.classList.remove("active"))})});m(this,"upButtonScrollHandler",()=>{const t=this;if(!t.upButton){console.warn("upButton is absent",t.upButton);return}t.upButton.classList.toggle("active",window.scrollY>500)});m(this,"upButtonClickHandler",()=>{window.document.body.scrollTop=0,window.document.documentElement.scrollTop=0});m(this,"navMenuButtonClickHandler",()=>{this.navMenuButton.classList.toggle("close"),this.navBar.classList.toggle("active"),this.navMenu.classList.toggle("active")});m(this,"navLinkClickHandler",()=>{this.navMenuButton.classList.remove("close"),this.navBar.classList.remove("active"),this.navMenu.classList.remove("active")});m(this,"handleCloudflareTurnstileError",()=>{console.error("You don't seem to be a human >|")});m(this,"handleCloudlfareTurnstileSuccess",()=>{var t;(t=this.root)==null||t.style.setProperty("--cloudflare-bg-color","transparent"),this.render(),this.addHandlers()})}get header(){return window.document.getElementById("header")}get sections(){return window.document.querySelectorAll("section")}get upButton(){return window.document.getElementById("up-btn")}get themeButton(){return window.document.getElementById("theme-btn")}get navBar(){return window.document.getElementById("nav")}get navLinks(){return window.document.querySelectorAll(".nav-link")}get navMenu(){return window.document.getElementById("nav-menu")}get navMenuButton(){return window.document.getElementById("nav-menu-btn")}get yearLabel(){return window.document.getElementById("year")}get root(){return window.document.getElementById("root")}get savedTheme(){return window.localStorage.getItem("saved-theme")}get currentTheme(){return window.document.body.classList.contains("dark-theme")?"dark":"light"}init(){this.isInitialized||(this.addCloudflareHandlers(),this.loadTheme(),this.isInitialized=!0)}addHandlers(){window.addEventListener("scroll",()=>{this.headerScrollHandler(),this.contentScrollHandler(),this.upButtonScrollHandler()}),this.upButton.addEventListener("click",this.upButtonClickHandler),this.navMenuButton.addEventListener("click",this.navMenuButtonClickHandler),this.navLinks.forEach(t=>{t.addEventListener("click",this.navLinkClickHandler)}),this.handleThemeToggle(),this.handleScrollReveal(),this.handleCopyYear()}handleThemeToggle(){const t=this;this.themeButton.classList[this.savedTheme==="dark"?"add":"remove"]("sun"),t.themeButton.addEventListener("click",()=>{window.document.body.classList.toggle("dark-theme"),t.themeButton.classList.toggle("sun"),this.currentTheme==="dark"?localStorage.setItem("saved-theme",this.currentTheme):localStorage.removeItem("saved-theme")})}loadTheme(){this.savedTheme&&this.savedTheme!==this.currentTheme&&window.document.body.classList[this.savedTheme==="dark"?"add":"remove"]("dark-theme")}handleScrollReveal(){const t=[{selector:".inner-title, .inner-second-title",config:{opacity:0,delay:400}},{selector:".home-info h1, .about-img",config:{delay:200,origin:"left"}},{selector:".home-img, .description",config:{delay:400,origin:"right"}},{selector:".home-info h3, .home-info p",config:{delay:400,origin:"left"}},{selector:".skills-description, .services-description, .portfolio-img-card, .contact-right p, .contact-left h2",config:{delay:300,scale:.5}},{selector:".education",config:{delay:400,origin:"bottom",interval:200}},{selector:".work-exp .experience-card, .services-container, .contact-list li, .first-row, .second-row, .third-row",config:{delay:200,origin:"bottom",interval:200}}];function i(){window.sr=E({reset:!1,distance:"60px",duration:1e3}),t.forEach(({selector:n,config:a})=>{window.sr.reveal(n,a)})}i()}handleCopyYear(){const t=Fe();this.yearLabel.textContent=t??""}addCloudflareHandlers(){window.turnstileErrorCallback=this.handleCloudflareTurnstileError,window.turnstileOkCallback=this.handleCloudlfareTurnstileSuccess}render(){const t=this.getScrollToTopButton(),i=this.getThemeButton(),n=this.getHeader(),a=this.getMain(),r=this.getFooter();this.root.innerHTML="",this.root.append(t),this.root.append(i),this.root.append(n),this.root.append(a),this.root.append(r)}getHeader(){const t=document.createElement("header");return t.id="header",t.className="header",t.innerHTML=`
      <div class="container">
        <div class="header-wrapper">
          <nav id="nav" class="nav">
            <ul id="nav-menu" class="nav-menu">
              <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
              <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
              <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
              <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div id="nav-menu-btn" class="nav-menu-btn"></div>
        </div>
      </div>
    `,t}getThemeButton(){const t=document.createElement("div");return t.id="theme-btn",t.className="theme-btn",t.innerHTML='<i class="fa-solid fa-moon"></i><i class="fa-solid fa-sun"></i>',t}getScrollToTopButton(){const t=document.createElement("button");return t.id="up-btn",t.className="btn scroll-top flex-center",t.innerHTML='<i class="fa-solid fa-arrow-up"></i>',t}getMain(){const t=document.createElement("main");return t.id="main",t.append(this.getHome()),t.append(this.getAbout()),t.append(this.getSkills()),t.append(this.getContact()),t}getHome(){const t=document.createElement("section");return t.id="home",t.className="home",t.innerHTML=`
      <div class="container home-wrapper">
        <div class="media-icons">
          <a href="https://www.linkedin.com/in/webect/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/martinmqz">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="home-info">
          <h1>Hi, I am Martin</h1>
          <h3>Senior Web Engineer</h3>
          <p>
            My passion is to design digital user experiences through
            meaningful interactions.
          </p>
          <p>
            <a href="https://www.linkedin.com/in/webect/"><i class="fa-brands fa-linkedin"></i></a>
            &nbsp;
            <a href="https://github.com/martinmqz"><i class="fa-brands fa-github"></i></a>
          </p>
          <a href="#contact" class="home-info-link inner-info-link">
            Contact me
          </a>
        </div>
        <div class="home-img">
          <img src="src/images/Martin-1.md.jpg" alt="Martin" />
        </div>
      </div>
      <a href="#about" class="scroll-down">Scroll down&nbsp;<i class="fa-solid fa-arrow-down"></i>
      </a>
    `,t}getAbout(){const t=document.createElement("section");return t.id="about",t.className="about section",t.innerHTML=`
      <div class="container flex-center">
        <h2 class="inner-title">About me</h2>
        <h3 class="inner-second-title">About me</h3>
        <div class="about-wrapper">
          <div class="about-img"></div>
          <div class="about-info">
            <div class="description">
              <h3>I'm Martin</h3>
              <h4>
                A <span>Senior</span> Web <span>Engineer</span> based in
                California
              </h4>
              <p>
                A passionate Web Engineer with over 15 years of experience
                in the Web Development Industry. I specialize in crafting
                seamless digital experiences through innovative
                interactions. I thrive on problem-solving and delivering
                solutions that blend aesthetics with functionality. An
                entrepreneurial mindset and a passion for rapid execution
                drive me to turn complex challenges into elegant,
                user-centric designs.                    
              </p>
              <p class="follow-bar">
                <a href="https://www.linkedin.com/in/webect/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a> &nbsp;<a href="https://github.com/martinmqz"><i class="fa-brands fa-github"></i> github.com/martinmqz</a>
              </p>
            </div>
            <ul class="professional-list">
              <li class="list-item"><span class="number">15+</span><span class="text">Years of experience</span></li>
              <li class="list-item"><span class="number">100%</span><span class="text">Happy Clients</span></li>
              <li class="list-item"><span class="number">100%</span><span class="text">Success Projects</span></li>
            </ul>
          </div>
        </div>
      </div>
      `,t}getSkills(){const t=document.createElement("section");return t.id="skills",t.className="skills section",t.innerHTML=`
      <div class="container flex-center">
        <h2 class="inner-title">Skills</h2>
        <h3 class="inner-second-title">Skills</h3>
        <div class="inner-content">
          <div class="skills-description">
            <h3>Education & Skills</h3>
            <p>
              For the past 15 years, I have been successfully navigating the
              evolving landscape of modern web development, mastering
              next-generation programming languages for web and app
              creation.
            </p>
          </div>
          <div class="skills-info education-all">
            <div class="education">
              <h4 class="label">Education</h4>
              <ul class="education-list">
                <li class="item">
                  <span class="year">2012</span>
                  <p>B.S. in Computer Science - SFSU, San Francisco, CA</p>
                </li>
                <li class="item">
                  <span class="year">2008</span>
                  <p>A.S. in Computer Science - CCSF, San Francisco, CA</p>
                </li>
                <li class="item">
                  <span class="year">Since 2000</span>
                  <p>Self-Taught in Web Development and Design</p>
                </li>
              </ul>
            </div>
            <div class="education">
              <h4 class="label">Skills</h4>
              <ul class="bars">
                <li class="bar">
                  <div class="info">
                    <span>Vanilla JavaScript / ES6</span>
                    <span></span>
                  </div>
                  <div class="line 100"></div>
                </li>
                <li class="bar">
                  <div class="info">
                    <span>html & CSS</span>
                    <span></span>
                  </div>
                  <div class="line 100"></div>
                </li>
                <li class="bar">
                  <div class="info">
                    <span>Libraries / Frameworks (React, Storybook, NPM, ...)</span>
                    <span></span>
                  </div>
                  <div class="line 100"></div>
                </li>
                <li class="bar">
                  <div class="info">
                    <span>TypeSCript</span>
                    <span></span>
                  </div>
                  <div class="line 100"></div>
                </li>
                <li class="bar">
                  <div class="info">
                    <span>.NET (C#, VB)</span>
                    <span></span>
                  </div>
                  <div class="line 100"></div>
                </li>
              </ul>
            </div>
            <div class="education">
              <!-- <h4 class="label">Awards</h4><ul class="education-list"><li class="item"><span></span><p><span></span></p></li></ul> -->
            </div>
          </div>
          <div class="work-exp">
            <h3 class="work-exp-title">Work & Experience</h3>
            <div class="skills-info">
              <div class="experience-card">
                <div class="upper">
                  <h3>Sr. Software Engineer</h3>
                  <h5>San Francisco, CA | Remote</h5>
                  <span>2022-2025</span>
                  <div class="hr"></div>
                </div>
                <h4 class="label">
                  <img src="https://www.allspringglobal.com/favicon.ico" alt="Allspring Global Investments - Logo" />
                  Allspring Global Investments
                </h4>
                <p>
                  Led frontend development, driving the rebuild of internal
                  and public-facing platforms using React, modern
                  JavaScript, and Optimizely CMS. Spearheaded the migration
                  from SDL Tridion, introduced Storybook for
                  component-driven development, and implemented GraphQL for
                  streamlined data access. Modernized CI/CD pipelines with
                  GitHub Actions and Jenkins, enhancing code quality and
                  deployment speed. Collaborated across teams, mentored
                  developers, and played a key role in architectural
                  planning and delivery.
                </p>
              </div>
              <div class="experience-card">
                <div class="upper">
                  <h3>Sr. Software Engineer</h3>
                  <h5>San Francisco, CA | Remote</h5>
                  <span>2018-2022</span>
                  <div class="hr"></div>
                </div>
                <h4 class="label">
                  <img src="https://www17.wellsfargomedia.com/assets/images/icons/ico/favicon.ico" alt="Wells Fargo - Logo" />
                  Wells Fargo
                </h4>
                <p>
                  Led frontend development for Asset Management platforms at
                  Wells Fargo, focusing on performance, accessibility, and
                  modernization. Rebuilt key site sections in React and
                  TypeScript, developed headless CMS solutions, and migrated
                  legacy systems to modern stacks. Created internal tools
                  and browser extensions to streamline workflows, while
                  ensuring full compliance with WCAG accessibility and
                  security standards.
                </p>
              </div>
              <div class="experience-card">
                <div class="upper">
                  <h3>Software Engineer</h3>
                  <h5>San Francisco, CA | Hybrid</h5>
                  <span>2014-2018</span>
                  <div class="hr"></div>
                </div>
                <h4 class="label">
                  <img src="https://www17.wellsfargomedia.com/assets/images/icons/ico/favicon.ico" alt="Wells Fargo - Logo" />
                  Wells Fargo
                </h4>
                <p>
                  Led development of RiskRevisionMobile (RRVM), a
                  mobile-first Progressive Web App (PWA) designed for
                  Financial Advisors, delivering a native-like experience
                  with full offline support. Built using advanced,
                  object-oriented JavaScript and modern web APIs including
                  Service Workers, Push API, and Notifications API.
                  Spearheaded key modernization efforts including legacy
                  site decommissioning, refactoring Java/JSP codebases, and
                  migrating platforms to SDL Tridion CMS. Played a central
                  role in Wells Fargo’s digital transformation—contributing
                  to rebranding, new product features, and cross-browser
                  compatibility remediation. Developed internal web tools to
                  streamline team workflows, collaborated with marketing and
                  project managers on campaign assets and A/B testing, and
                  rapidly delivered functional prototypes in an agile
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `,t}getContact(){const t=document.createElement("section");return t.id="contact",t.className="contact section",t.innerHTML=`
      <div class="container flex-center">
        <h2 class="inner-title">Contact Me</h2>
        <h3 class="inner-second-title">Contact Me</h3>
        <div class="contact-wrapper">
          <div class="contact-left">
            <h2>Let's discuss your project</h2>
            <ul class="contact-list">
              <li>
                <h3>
                  <a href="https://www.linkedin.com/in/webect/"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
                  &nbsp;
                  <a href="https://github.com/martinmqz"><i class="fa-brands fa-github"></i>GitHub</a>
                </h3>
              </li>
              <li>
                <h3><i class="fa-solid fa-phone"></i> Phone</h3>
                <span><a href="tel:7308155">***-***-8155</a></span>
              </li>
              <li>
                <h3><i class="fa-solid fa-envelope"></i> Email Adddress</h3>
                <span><a href="mailto:martin@webect.com">martin@******.com</a></span>
              </li>
              <li>
                <h3><i class="fa-solid fa-location-dot"></i>Location</h3>
                <span><a href="">Sacramento, California</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      `,t}getFooter(){const t=document.createElement("footer");return t.id="footer",t.className="footer",t.innerHTML=`
      <div class="container footer-wrapper">
        <div class="about-group">
          <h2>Martin</h2>
          <p>Senior Web Engineer</p>
          <a href="#">About me</a>
        </div>
        <div class="hr"></div>
        <div class="info-group">
          <h3>More</h3>
          <ul>
            <li><a href="#skills">skills</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
        <div class="hr"></div>
        <div class="follow-group">
          <h3>Follow</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/webect/"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/martinmqz"><i class="fa-brands fa-github"></i></a></li>
          </ul>
        </div>
      </div>
      <p class="footer-copyright">
        © <span id="year" class="year">2025</span> by Martin. All rights
        reserved.
      </p>
      `,t}}const Ne=new qe;Ne.init();
