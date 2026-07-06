(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function su(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xt={},Xs=[],Yn=()=>{},dh=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ru=t=>t.startsWith("onUpdate:"),Vt=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zm=Object.prototype.hasOwnProperty,ut=(t,e)=>Zm.call(t,e),We=Array.isArray,qs=t=>Kr(t)==="[object Map]",hh=t=>Kr(t)==="[object Set]",Ju=t=>Kr(t)==="[object Date]",je=t=>typeof t=="function",Pt=t=>typeof t=="string",ei=t=>typeof t=="symbol",mt=t=>t!==null&&typeof t=="object",ph=t=>(mt(t)||je(t))&&je(t.then)&&je(t.catch),mh=Object.prototype.toString,Kr=t=>mh.call(t),Jm=t=>Kr(t).slice(8,-1),gh=t=>Kr(t)==="[object Object]",ma=t=>Pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wr=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qm=/-\w/g,nn=ga(t=>t.replace(Qm,e=>e.slice(1).toUpperCase())),eg=/\B([A-Z])/g,ys=ga(t=>t.replace(eg,"-$1").toLowerCase()),_a=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=ga(t=>t?`on${_a(t)}`:""),Wn=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_h=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},au=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qu;const va=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Pt(i)?sg(i):xs(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(t)||mt(t))return t}const tg=/;(?![^(]*\))/g,ng=/:([^]+)/,ig=/\/\*[^]*?\*\//g;function sg(t){const e={};return t.replace(ig,"").split(tg).forEach(n=>{if(n){const i=n.split(ng);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xa(t){let e="";if(Pt(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=xa(t[n]);i&&(e+=i+" ")}else if(mt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",og=su(rg);function vh(t){return!!t||t===""}function ag(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=lu(t[i],e[i]);return n}function lu(t,e){if(t===e)return!0;let n=Ju(t),i=Ju(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ei(t),i=ei(e),n||i)return t===e;if(n=We(t),i=We(e),n||i)return n&&i?ag(t,e):!1;if(n=mt(t),i=mt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!lu(t[o],e[o]))return!1}}return String(t)===String(e)}const xh=t=>!!(t&&t.__v_isRef===!0),sn=t=>Pt(t)?t:t==null?"":We(t)||mt(t)&&(t.toString===mh||!je(t.toString))?xh(t)?sn(t.value):JSON.stringify(t,Sh,2):String(t),Sh=(t,e)=>xh(e)?Sh(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[qa(i,r)+" =>"]=s,n),{})}:hh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qa(n))}:ei(e)?qa(e):mt(e)&&!We(e)&&!gh(e)?String(e):e,qa=(t,e="")=>{var n;return ei(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class Eh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){this._on>0&&--this._on===0&&(Ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function yh(t){return new Eh(t)}function Mh(){return Ht}function lg(t,e=!1){Ht&&Ht.cleanups.push(t)}let Et;const $a=new WeakSet;class bh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ef(this),Rh(this);const e=Et,n=Pn;Et=this,Pn=!0;try{return this.fn()}finally{wh(this),Et=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fu(e);this.deps=this.depsTail=void 0,ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xl(this)&&this.run()}get dirty(){return Xl(this)}}let Th=0,Cr,Pr;function Ah(t,e=!1){if(t.flags|=8,e){t.next=Pr,Pr=t;return}t.next=Cr,Cr=t}function cu(){Th++}function uu(){if(--Th>0)return;if(Pr){let e=Pr;for(Pr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Cr;){let e=Cr;for(Cr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Rh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wh(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),fu(i),cg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Xl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ch(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ch(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vr)||(t.globalVersion=Vr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Xl(t))))return;t.flags|=2;const e=t.dep,n=Et,i=Pn;Et=t,Pn=!0;try{Rh(t);const s=t.fn(t._value);(e.version===0||Wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=n,Pn=i,wh(t),t.flags&=-3}}function fu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)fu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const Ph=[];function Mi(){Ph.push(Pn),Pn=!1}function bi(){const t=Ph.pop();Pn=t===void 0?!0:t}function ef(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Et;Et=void 0;try{e()}finally{Et=n}}}let Vr=0;class ug{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class du{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Pn||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new ug(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,Dh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(e){this.version++,Vr++,this.notify(e)}notify(e){cu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uu()}}}function Dh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Dh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ea=new WeakMap,ms=Symbol(""),ql=Symbol(""),kr=Symbol("");function Wt(t,e,n){if(Pn&&Et){let i=ea.get(t);i||ea.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new du),s.map=i,s.key=n),s.track()}}function mi(t,e,n,i,s,r){const o=ea.get(t);if(!o){Vr++;return}const a=l=>{l&&l.trigger()};if(cu(),e==="clear")o.forEach(a);else{const l=We(t),c=l&&ma(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===kr||!ei(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(kr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ms)),qs(t)&&a(o.get(ql)));break;case"delete":l||(a(o.get(ms)),qs(t)&&a(o.get(ql)));break;case"set":qs(t)&&a(o.get(ms));break}}uu()}function fg(t,e){const n=ea.get(t);return n&&n.get(e)}function Ts(t){const e=ot(t);return e===t?e:(Wt(e,"iterate",kr),vn(t)?e:e.map(Dn))}function Sa(t){return Wt(t=ot(t),"iterate",kr),t}function kn(t,e){return Ti(t)?Zs(xi(t)?Dn(e):e):Dn(e)}const dg={__proto__:null,[Symbol.iterator](){return ja(this,Symbol.iterator,t=>kn(this,t))},concat(...t){return Ts(this).concat(...t.map(e=>We(e)?Ts(e):e))},entries(){return ja(this,"entries",t=>(t[1]=kn(this,t[1]),t))},every(t,e){return oi(this,"every",t,e,void 0,arguments)},filter(t,e){return oi(this,"filter",t,e,n=>n.map(i=>kn(this,i)),arguments)},find(t,e){return oi(this,"find",t,e,n=>kn(this,n),arguments)},findIndex(t,e){return oi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return oi(this,"findLast",t,e,n=>kn(this,n),arguments)},findLastIndex(t,e){return oi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return oi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ya(this,"includes",t)},indexOf(...t){return Ya(this,"indexOf",t)},join(t){return Ts(this).join(t)},lastIndexOf(...t){return Ya(this,"lastIndexOf",t)},map(t,e){return oi(this,"map",t,e,void 0,arguments)},pop(){return pr(this,"pop")},push(...t){return pr(this,"push",t)},reduce(t,...e){return tf(this,"reduce",t,e)},reduceRight(t,...e){return tf(this,"reduceRight",t,e)},shift(){return pr(this,"shift")},some(t,e){return oi(this,"some",t,e,void 0,arguments)},splice(...t){return pr(this,"splice",t)},toReversed(){return Ts(this).toReversed()},toSorted(t){return Ts(this).toSorted(t)},toSpliced(...t){return Ts(this).toSpliced(...t)},unshift(...t){return pr(this,"unshift",t)},values(){return ja(this,"values",t=>kn(this,t))}};function ja(t,e,n){const i=Sa(t),s=i[e]();return i!==t&&!vn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const hg=Array.prototype;function oi(t,e,n,i,s,r){const o=Sa(t),a=o!==t&&!vn(t),l=o[e];if(l!==hg[e]){const f=l.apply(t,r);return a?Dn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,kn(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function tf(t,e,n,i){const s=Sa(t),r=s!==t&&!vn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=kn(t,c)),n.call(this,c,kn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?kn(t,l):l}function Ya(t,e,n){const i=ot(t);Wt(i,"iterate",kr);const s=i[e](...n);return(s===-1||s===!1)&&Ea(n[0])?(n[0]=ot(n[0]),i[e](...n)):s}function pr(t,e,n=[]){Mi(),cu();const i=ot(t)[e].apply(t,n);return uu(),bi(),i}const pg=su("__proto__,__v_isRef,__isVue"),Ih=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ei));function mg(t){ei(t)||(t=String(t));const e=ot(this);return Wt(e,"has",t),e.hasOwnProperty(t)}class Lh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Tg:Fh:r?Oh:Uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!s){let l;if(o&&(l=dg[n]))return l;if(n==="hasOwnProperty")return mg}const a=Reflect.get(e,n,Tt(e)?e:i);if((ei(n)?Ih.has(n):pg(n))||(s||Wt(e,"get",n),r))return a;if(Tt(a)){const l=o&&ma(n)?a:a.value;return s&&mt(l)?jl(l):l}return mt(a)?s?jl(a):lr(a):a}}class Nh extends Lh{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=We(e)&&ma(n);if(!this._isShallow){const c=Ti(r);if(!vn(i)&&!Ti(i)&&(r=ot(r),i=ot(i)),!o&&Tt(r)&&!Tt(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:ut(e,n),l=Reflect.set(e,n,i,Tt(e)?e:s);return e===ot(s)&&(a?Wn(i,r)&&mi(e,"set",n,i):mi(e,"add",n,i)),l}deleteProperty(e,n){const i=ut(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&mi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ei(n)||!Ih.has(n))&&Wt(e,"has",n),i}ownKeys(e){return Wt(e,"iterate",We(e)?"length":ms),Reflect.ownKeys(e)}}class gg extends Lh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _g=new Nh,vg=new gg,xg=new Nh(!0);const $l=t=>t,ho=t=>Reflect.getPrototypeOf(t);function Sg(t,e,n){return function(...i){const s=this.__v_raw,r=ot(s),o=qs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?$l:e?Zs:Dn;return!e&&Wt(r,"iterate",l?ql:ms),Vt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Eg(t,e){const n={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);t||(Wn(s,a)&&Wt(o,"get",s),Wt(o,"get",a));const{has:l}=ho(o),c=e?$l:t?Zs:Dn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Wt(ot(s),"iterate",ms),s.size},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return t||(Wn(s,a)&&Wt(o,"has",s),Wt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ot(a),c=e?$l:t?Zs:Dn;return!t&&Wt(l,"iterate",ms),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Vt(n,t?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){const r=ot(this),o=ho(r),a=ot(s),l=!e&&!vn(s)&&!Ti(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),mi(r,"add",l,l)),this},set(s,r){!e&&!vn(r)&&!Ti(r)&&(r=ot(r));const o=ot(this),{has:a,get:l}=ho(o);let c=a.call(o,s);c||(s=ot(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Wn(r,u)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=ho(r);let l=o.call(r,s);l||(s=ot(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Sg(s,t,e)}),n}function hu(t,e){const n=Eg(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ut(n,s)&&s in i?n:i,s,r)}const yg={get:hu(!1,!1)},Mg={get:hu(!1,!0)},bg={get:hu(!0,!1)};const Uh=new WeakMap,Oh=new WeakMap,Fh=new WeakMap,Tg=new WeakMap;function Ag(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rg(t){return t.__v_skip||!Object.isExtensible(t)?0:Ag(Jm(t))}function lr(t){return Ti(t)?t:pu(t,!1,_g,yg,Uh)}function Bh(t){return pu(t,!1,xg,Mg,Oh)}function jl(t){return pu(t,!0,vg,bg,Fh)}function pu(t,e,n,i,s){if(!mt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Rg(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function xi(t){return Ti(t)?xi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ti(t){return!!(t&&t.__v_isReadonly)}function vn(t){return!!(t&&t.__v_isShallow)}function Ea(t){return t?!!t.__v_raw:!1}function ot(t){const e=t&&t.__v_raw;return e?ot(e):t}function mu(t){return!ut(t,"__v_skip")&&Object.isExtensible(t)&&_h(t,"__v_skip",!0),t}const Dn=t=>mt(t)?lr(t):t,Zs=t=>mt(t)?jl(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function tt(t){return Vh(t,!1)}function wg(t){return Vh(t,!0)}function Vh(t,e){return Tt(t)?t:new Cg(t,e)}class Cg{constructor(e,n){this.dep=new du,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ot(e),this._value=n?e:Dn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||vn(e)||Ti(e);e=i?e:ot(e),Wn(e,n)&&(this._rawValue=e,this._value=i?e:Dn(e),this.dep.trigger())}}function gs(t){return Tt(t)?t.value:t}const Pg={get:(t,e,n)=>e==="__v_raw"?t:gs(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function kh(t){return xi(t)?t:new Proxy(t,Pg)}function Dg(t){const e=We(t)?new Array(t.length):{};for(const n in t)e[n]=Lg(t,n);return e}class Ig{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ot(e);let s=!0,r=e;if(!We(e)||!ma(String(n)))do s=!Ea(r)||vn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=gs(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Tt(this._raw[this._key])){const n=this._object[this._key];if(Tt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return fg(this._raw,this._key)}}function Lg(t,e,n){return new Ig(t,e,n)}class Ng{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new du(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Ah(this,!0),!0}get value(){const e=this.dep.track();return Ch(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ug(t,e,n=!1){let i,s;return je(t)?i=t:(i=t.get,s=t.set),new Ng(i,s,n)}const mo={},ta=new WeakMap;let os;function Og(t,e=!1,n=os){if(n){let i=ta.get(n);i||ta.set(n,i=[]),i.push(t)}}function Fg(t,e,n=xt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=E=>s?E:vn(E)||s===!1||s===0?gi(E,1):gi(E);let u,f,d,m,g=!1,v=!1;if(Tt(t)?(f=()=>t.value,g=vn(t)):xi(t)?(f=()=>c(t),g=!0):We(t)?(v=!0,g=t.some(E=>xi(E)||vn(E)),f=()=>t.map(E=>{if(Tt(E))return E.value;if(xi(E))return c(E);if(je(E))return l?l(E,2):E()})):je(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Mi();try{d()}finally{bi()}}const E=os;os=u;try{return l?l(t,3,[m]):t(m)}finally{os=E}}:f=Yn,e&&s){const E=f,P=s===!0?1/0:s;f=()=>gi(E(),P)}const h=Mh(),p=()=>{u.stop(),h&&h.active&&ou(h.effects,u)};if(r&&e){const E=e;e=(...P)=>{E(...P),p()}}let S=v?new Array(t.length).fill(mo):mo;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const P=u.run();if(s||g||(v?P.some((D,L)=>Wn(D,S[L])):Wn(P,S))){d&&d();const D=os;os=u;try{const L=[P,S===mo?void 0:v&&S[0]===mo?[]:S,m];S=P,l?l(e,3,L):e(...L)}finally{os=D}}}else u.run()};return a&&a(T),u=new bh(f),u.scheduler=o?()=>o(T,!1):T,m=E=>Og(E,!1,u),d=u.onStop=()=>{const E=ta.get(u);if(E){if(l)l(E,4);else for(const P of E)P();ta.delete(u)}},e?i?T(!0):S=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function gi(t,e=1/0,n){if(e<=0||!mt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))gi(t.value,e,n);else if(We(t))for(let i=0;i<t.length;i++)gi(t[i],e,n);else if(hh(t)||qs(t))t.forEach(i=>{gi(i,e,n)});else if(gh(t)){for(const i in t)gi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&gi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(t,e,n,i){try{return i?t(...i):t()}catch(s){ya(s,e,n)}}function ti(t,e,n,i){if(je(t)){const s=Zr(t,e,n,i);return s&&ph(s)&&s.catch(r=>{ya(r,e,n)}),s}if(We(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ti(t[r],e,n,i));return s}}function ya(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Mi(),Zr(r,null,10,[t,l,c]),bi();return}}Bg(t,n,s,i,o)}function Bg(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const en=[];let Vn=-1;const $s=[];let Gi=null,Gs=0;const zh=Promise.resolve();let na=null;function gu(t){const e=na||zh;return t?e.then(this?t.bind(this):t):e}function Vg(t){let e=Vn+1,n=en.length;for(;e<n;){const i=e+n>>>1,s=en[i],r=zr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function _u(t){if(!(t.flags&1)){const e=zr(t),n=en[en.length-1];!n||!(t.flags&2)&&e>=zr(n)?en.push(t):en.splice(Vg(e),0,t),t.flags|=1,Gh()}}function Gh(){na||(na=zh.then(Wh))}function kg(t){We(t)?$s.push(...t):Gi&&t.id===-1?Gi.splice(Gs+1,0,t):t.flags&1||($s.push(t),t.flags|=1),Gh()}function nf(t,e,n=Vn+1){for(;n<en.length;n++){const i=en[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;en.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Hh(t){if($s.length){const e=[...new Set($s)].sort((n,i)=>zr(n)-zr(i));if($s.length=0,Gi){Gi.push(...e);return}for(Gi=e,Gs=0;Gs<Gi.length;Gs++){const n=Gi[Gs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gi=null,Gs=0}}const zr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wh(t){try{for(Vn=0;Vn<en.length;Vn++){const e=en[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<en.length;Vn++){const e=en[Vn];e&&(e.flags&=-2)}Vn=-1,en.length=0,Hh(),na=null,(en.length||$s.length)&&Wh()}}let gn=null,Xh=null;function ia(t){const e=gn;return gn=t,Xh=t&&t.type.__scopeId||null,e}function Ot(t,e=gn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&oa(-1);const r=ia(e);let o;try{o=t(...s)}finally{ia(r),i._d&&oa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Xn(t,e){if(gn===null)return t;const n=Aa(gn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=xt]=e[s];r&&(je(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ji(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Mi(),ti(l,n,8,[t.el,a,t,e]),bi())}}function zo(t,e){if(Xt){let n=Xt.provides;const i=Xt.parent&&Xt.parent.provides;i===n&&(n=Xt.provides=Object.create(i)),n[t]=e}}function yn(t,e,n=!1){const i=xp();if(i||_s){let s=_s?_s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}function zg(){return!!(xp()||_s)}const Gg=Symbol.for("v-scx"),Hg=()=>yn(Gg);function Dr(t,e,n){return qh(t,e,n)}function qh(t,e,n=xt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Vt({},n),l=e&&i||!e&&r!=="post";let c;if(Hr){if(r==="sync"){const m=Hg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Yn,m.resume=Yn,m.pause=Yn,m}}const u=Xt;a.call=(m,g,v)=>ti(m,u,g,v);let f=!1;r==="post"?a.scheduler=m=>{ln(m,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():_u(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Fg(t,e,a);return Hr&&(c?c.push(d):l&&d()),d}function Wg(t,e,n){const i=this.proxy,s=Pt(t)?t.includes(".")?$h(i,t):()=>i[t]:t.bind(i,i);let r;je(e)?r=e:(r=e.handler,n=e);const o=Qr(this),a=qh(s,r.bind(i),n);return o(),a}function $h(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Xg=Symbol("_vte"),qg=t=>t.__isTeleport,$g=Symbol("_leaveCb");function vu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jh(t,e){return je(t)?Vt({name:t.name},e,{setup:t}):t}function Yh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const sa=new WeakMap;function Ir(t,e,n,i,s=!1){if(We(t)){t.forEach((v,h)=>Ir(v,e&&(We(e)?e[h]:e),n,i,s));return}if(Lr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Aa(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,f=a.setupState,d=ot(f),m=f===xt?dh:v=>sf(u,v)?!1:ut(d,v),g=(v,h)=>!(h&&sf(u,h));if(c!=null&&c!==l){if(rf(e),Pt(c))u[c]=null,m(c)&&(f[c]=null);else if(Tt(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(je(l))Zr(l,a,12,[o,u]);else{const v=Pt(l),h=Tt(l);if(v||h){const p=()=>{if(t.f){const S=v?m(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)We(S)&&ou(S,r);else if(We(S))S.includes(r)||S.push(r);else if(v)u[l]=[r],m(l)&&(f[l]=u[l]);else{const T=[r];g(l,t.k)&&(l.value=T),t.k&&(u[t.k]=T)}}else v?(u[l]=o,m(l)&&(f[l]=o)):h&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const S=()=>{p(),sa.delete(t)};S.id=-1,sa.set(t,S),ln(S,n)}else rf(t),p()}}}function rf(t){const e=sa.get(t);e&&(e.flags|=8,sa.delete(t))}va().requestIdleCallback;va().cancelIdleCallback;const Lr=t=>!!t.type.__asyncLoader,Kh=t=>t.type.__isKeepAlive;function jg(t,e){Zh(t,"a",e)}function Yg(t,e){Zh(t,"da",e)}function Zh(t,e,n=Xt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ma(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Kh(s.parent.vnode)&&Kg(i,e,n,s),s=s.parent}}function Kg(t,e,n,i){const s=Ma(e,t,i,!0);Qh(()=>{ou(i[e],s)},n)}function Ma(t,e,n=Xt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Mi();const a=Qr(n),l=ti(e,n,t,o);return a(),bi(),l});return i?s.unshift(r):s.push(r),r}}const Pi=t=>(e,n=Xt)=>{(!Hr||t==="sp")&&Ma(t,(...i)=>e(...i),n)},Zg=Pi("bm"),Jr=Pi("m"),Jg=Pi("bu"),Qg=Pi("u"),Jh=Pi("bum"),Qh=Pi("um"),e_=Pi("sp"),t_=Pi("rtg"),n_=Pi("rtc");function i_(t,e=Xt){Ma("ec",t,e)}const s_="components";function Yi(t,e){return o_(s_,t,!0,e)||t}const r_=Symbol.for("v-ndc");function o_(t,e,n=!0,i=!1){const s=gn||Xt;if(s){const r=s.type;{const a=q_(r,!1);if(a&&(a===e||a===nn(e)||a===_a(nn(e))))return r}const o=of(s[t]||r[t],e)||of(s.appContext[t],e);return!o&&i?r:o}}function of(t,e){return t&&(t[e]||t[nn(e)]||t[_a(nn(e))])}function a_(t,e,n,i){let s;const r=n,o=We(t);if(o||Pt(t)){const a=o&&xi(t);let l=!1,c=!1;a&&(l=!vn(t),c=Ti(t),t=Sa(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?Zs(Dn(t[u])):Dn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(mt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Yl=t=>t?Sp(t)?Aa(t):Yl(t.parent):null,Nr=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yl(t.parent),$root:t=>Yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>tp(t),$forceUpdate:t=>t.f||(t.f=()=>{_u(t.update)}),$nextTick:t=>t.n||(t.n=gu.bind(t.proxy)),$watch:t=>Wg.bind(t)}),Ka=(t,e)=>t!==xt&&!t.__isScriptSetup&&ut(t,e),l_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ka(i,e))return o[e]=1,i[e];if(s!==xt&&ut(s,e))return o[e]=2,s[e];if(ut(r,e))return o[e]=3,r[e];if(n!==xt&&ut(n,e))return o[e]=4,n[e];Kl&&(o[e]=0)}}const c=Nr[e];let u,f;if(c)return e==="$attrs"&&Wt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==xt&&ut(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ut(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ka(s,e)?(s[e]=n,!0):i!==xt&&ut(i,e)?(i[e]=n,!0):ut(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==xt&&a[0]!=="$"&&ut(t,a)||Ka(e,a)||ut(r,a)||ut(i,a)||ut(Nr,a)||ut(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ut(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function af(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kl=!0;function c_(t){const e=tp(t),n=t.proxy,i=t.ctx;Kl=!1,e.beforeCreate&&lf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:v,deactivated:h,beforeDestroy:p,beforeUnmount:S,destroyed:T,unmounted:E,render:P,renderTracked:D,renderTriggered:L,errorCaptured:x,serverPrefetch:M,expose:V,inheritAttrs:w,components:z,directives:G,filters:Q}=e;if(c&&u_(c,i,null),o)for(const N in o){const ae=o[N];je(ae)&&(i[N]=ae.bind(n))}if(s){const N=s.call(n,n);mt(N)&&(t.data=lr(N))}if(Kl=!0,r)for(const N in r){const ae=r[N],ce=je(ae)?ae.bind(n,n):je(ae.get)?ae.get.bind(n,n):Yn,me=!je(ae)&&je(ae.set)?ae.set.bind(n):Yn,ye=tn({get:ce,set:me});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>ye.value,set:_e=>ye.value=_e})}if(a)for(const N in a)ep(a[N],i,n,N);if(l){const N=je(l)?l.call(n):l;Reflect.ownKeys(N).forEach(ae=>{zo(ae,N[ae])})}u&&lf(u,t,"c");function W(N,ae){We(ae)?ae.forEach(ce=>N(ce.bind(n))):ae&&N(ae.bind(n))}if(W(Zg,f),W(Jr,d),W(Jg,m),W(Qg,g),W(jg,v),W(Yg,h),W(i_,x),W(n_,D),W(t_,L),W(Jh,S),W(Qh,E),W(e_,M),We(V))if(V.length){const N=t.exposed||(t.exposed={});V.forEach(ae=>{Object.defineProperty(N,ae,{get:()=>n[ae],set:ce=>n[ae]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===Yn&&(t.render=P),w!=null&&(t.inheritAttrs=w),z&&(t.components=z),G&&(t.directives=G),M&&Yh(t)}function u_(t,e,n=Yn){We(t)&&(t=Zl(t));for(const i in t){const s=t[i];let r;mt(s)?"default"in s?r=yn(s.from||i,s.default,!0):r=yn(s.from||i):r=yn(s),Tt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function lf(t,e,n){ti(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ep(t,e,n,i){let s=i.includes(".")?$h(n,i):()=>n[i];if(Pt(t)){const r=e[t];je(r)&&Dr(s,r)}else if(je(t))Dr(s,t.bind(n));else if(mt(t))if(We(t))t.forEach(r=>ep(r,e,n,i));else{const r=je(t.handler)?t.handler.bind(n):e[t.handler];je(r)&&Dr(s,r,t)}}function tp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ra(l,c,o,!0)),ra(l,e,o)),mt(e)&&r.set(e,l),l}function ra(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ra(t,r,n,!0),s&&s.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=f_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const f_={data:cf,props:uf,emits:uf,methods:Tr,computed:Tr,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:Tr,directives:Tr,watch:h_,provide:cf,inject:d_};function cf(t,e){return e?t?function(){return Vt(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function d_(t,e){return Tr(Zl(t),Zl(e))}function Zl(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Tr(t,e){return t?Vt(Object.create(null),t,e):e}function uf(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:Vt(Object.create(null),af(t),af(e??{})):e}function h_(t,e){if(!t)return e;if(!e)return t;const n=Vt(Object.create(null),t);for(const i in e)n[i]=Kt(t[i],e[i]);return n}function np(){return{app:null,config:{isNativeTag:dh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p_=0;function m_(t,e){return function(i,s=null){je(i)||(i=Vt({},i)),s!=null&&!mt(s)&&(s=null);const r=np(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:p_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:j_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...f)):je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||lt(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Aa(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ti(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=_s;_s=c;try{return u()}finally{_s=f}}};return c}}let _s=null;const g_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${ys(e)}Modifiers`];function __(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||xt;let s=n;const r=e.startsWith("update:"),o=r&&g_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Pt(u)?u.trim():u)),o.number&&(s=n.map(au)));let a,l=i[a=Xa(e)]||i[a=Xa(nn(e))];!l&&r&&(l=i[a=Xa(ys(e))]),l&&ti(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ti(c,t,6,s)}}const v_=new WeakMap;function ip(t,e,n=!1){const i=n?v_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=ip(c,e,!0);u&&(a=!0,Vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(mt(t)&&i.set(t,null),null):(We(r)?r.forEach(l=>o[l]=null):Vt(o,r),mt(t)&&i.set(t,o),o)}function ba(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(t,e[0].toLowerCase()+e.slice(1))||ut(t,ys(e))||ut(t,e))}function ff(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:v}=t,h=ia(t);let p,S;try{if(n.shapeFlag&4){const E=s||i,P=E;p=Gn(c.call(P,E,u,f,m,d,g)),S=a}else{const E=e;p=Gn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),S=e.props?a:x_(a)}}catch(E){Ur.length=0,ya(E,t,1),p=lt($i)}let T=p;if(S&&v!==!1){const E=Object.keys(S),{shapeFlag:P}=T;E.length&&P&7&&(r&&E.some(ru)&&(S=S_(S,r)),T=Js(T,S,!1,!0))}return n.dirs&&(T=Js(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&vu(T,n.transition),p=T,ia(h),p}const x_=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},S_=(t,e)=>{const n={};for(const i in t)(!ru(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function E_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?df(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(sp(o,i,d)&&!ba(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?df(i,o,c):!0:!!o;return!1}function df(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(sp(e,t,r)&&!ba(n,r))return!0}return!1}function sp(t,e,n){const i=t[n],s=e[n];return n==="style"&&mt(i)&&mt(s)?!lu(i,s):i!==s}function y_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const rp={},op=()=>Object.create(rp),ap=t=>Object.getPrototypeOf(t)===rp;function M_(t,e,n,i=!1){const s={},r=op();t.propsDefaults=Object.create(null),lp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Bh(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function b_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ot(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ba(t.emitsOptions,d))continue;const m=e[d];if(l)if(ut(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=nn(d);s[g]=Jl(l,a,g,m,t,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{lp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!ut(e,f)&&((u=ys(f))===f||!ut(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Jl(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!ut(e,f))&&(delete r[f],c=!0)}c&&mi(t.attrs,"set","")}function lp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(wr(l))continue;const c=e[l];let u;s&&ut(s,u=nn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ba(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ot(n),c=a||xt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Jl(s,l,f,c[f],t,!ut(c,f))}}return o}function Jl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Qr(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ys(n))&&(i=!0))}return i}const T_=new WeakMap;function cp(t,e,n=!1){const i=n?T_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!je(t)){const u=f=>{l=!0;const[d,m]=cp(f,e,!0);Vt(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return mt(t)&&i.set(t,Xs),Xs;if(We(r))for(let u=0;u<r.length;u++){const f=nn(r[u]);hf(f)&&(o[f]=xt)}else if(r)for(const u in r){const f=nn(u);if(hf(f)){const d=r[u],m=o[f]=We(d)||je(d)?{type:d}:Vt({},d),g=m.type;let v=!1,h=!0;if(We(g))for(let p=0;p<g.length;++p){const S=g[p],T=je(S)&&S.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(h=!1)}else v=je(g)&&g.name==="Boolean";m[0]=v,m[1]=h,(v||ut(m,"default"))&&a.push(f)}}const c=[o,a];return mt(t)&&i.set(t,c),c}function hf(t){return t[0]!=="$"&&!wr(t)}const xu=t=>t==="_"||t==="_ctx"||t==="$stable",Su=t=>We(t)?t.map(Gn):[Gn(t)],A_=(t,e,n)=>{if(e._n)return e;const i=Ot((...s)=>Su(e(...s)),n);return i._c=!1,i},up=(t,e,n)=>{const i=t._ctx;for(const s in t){if(xu(s))continue;const r=t[s];if(je(r))e[s]=A_(s,r,i);else if(r!=null){const o=Su(r);e[s]=()=>o}}},fp=(t,e)=>{const n=Su(e);t.slots.default=()=>n},dp=(t,e,n)=>{for(const i in e)(n||!xu(i))&&(t[i]=e[i])},R_=(t,e,n)=>{const i=t.slots=op();if(t.vnode.shapeFlag&32){const s=e._;s?(dp(i,e,n),n&&_h(i,"_",s,!0)):up(e,i)}else e&&fp(t,e)},w_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:dp(s,e,n):(r=!e.$stable,up(e,s)),o=e}else e&&(fp(t,e),o={default:1});if(r)for(const a in s)!xu(a)&&o[a]==null&&delete s[a]},ln=L_;function C_(t){return P_(t)}function P_(t,e){const n=va();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Yn,insertStaticContent:g}=t,v=(R,C,F,ee=null,J=null,ne=null,A=void 0,he=null,ue=!!C.dynamicChildren)=>{if(R===C)return;R&&!mr(R,C)&&(ee=U(R),_e(R,J,ne,!0),R=null),C.patchFlag===-2&&(ue=!1,C.dynamicChildren=null);const{type:oe,ref:fe,shapeFlag:y}=C;switch(oe){case Ta:h(R,C,F,ee);break;case $i:p(R,C,F,ee);break;case Go:R==null&&S(C,F,ee,A);break;case zn:z(R,C,F,ee,J,ne,A,he,ue);break;default:y&1?P(R,C,F,ee,J,ne,A,he,ue):y&6?G(R,C,F,ee,J,ne,A,he,ue):(y&64||y&128)&&oe.process(R,C,F,ee,J,ne,A,he,ue,de)}fe!=null&&J?Ir(fe,R&&R.ref,ne,C||R,!C):fe==null&&R&&R.ref!=null&&Ir(R.ref,null,ne,R,!0)},h=(R,C,F,ee)=>{if(R==null)i(C.el=a(C.children),F,ee);else{const J=C.el=R.el;C.children!==R.children&&c(J,C.children)}},p=(R,C,F,ee)=>{R==null?i(C.el=l(C.children||""),F,ee):C.el=R.el},S=(R,C,F,ee)=>{[R.el,R.anchor]=g(R.children,C,F,ee,R.el,R.anchor)},T=({el:R,anchor:C},F,ee)=>{let J;for(;R&&R!==C;)J=d(R),i(R,F,ee),R=J;i(C,F,ee)},E=({el:R,anchor:C})=>{let F;for(;R&&R!==C;)F=d(R),s(R),R=F;s(C)},P=(R,C,F,ee,J,ne,A,he,ue)=>{if(C.type==="svg"?A="svg":C.type==="math"&&(A="mathml"),R==null)D(C,F,ee,J,ne,A,he,ue);else{const oe=R.el&&R.el._isVueCE?R.el:null;try{oe&&oe._beginPatch(),M(R,C,J,ne,A,he,ue)}finally{oe&&oe._endPatch()}}},D=(R,C,F,ee,J,ne,A,he)=>{let ue,oe;const{props:fe,shapeFlag:y,transition:_,dirs:I}=R;if(ue=R.el=o(R.type,ne,fe&&fe.is,fe),y&8?u(ue,R.children):y&16&&x(R.children,ue,null,ee,J,Za(R,ne),A,he),I&&Ji(R,null,ee,"created"),L(ue,R,R.scopeId,A,ee),fe){for(const se in fe)se!=="value"&&!wr(se)&&r(ue,se,null,fe[se],ne,ee);"value"in fe&&r(ue,"value",null,fe.value,ne),(oe=fe.onVnodeBeforeMount)&&On(oe,ee,R)}I&&Ji(R,null,ee,"beforeMount");const $=D_(J,_);$&&_.beforeEnter(ue),i(ue,C,F),((oe=fe&&fe.onVnodeMounted)||$||I)&&ln(()=>{oe&&On(oe,ee,R),$&&_.enter(ue),I&&Ji(R,null,ee,"mounted")},J)},L=(R,C,F,ee,J)=>{if(F&&m(R,F),ee)for(let ne=0;ne<ee.length;ne++)m(R,ee[ne]);if(J){let ne=J.subTree;if(C===ne||gp(ne.type)&&(ne.ssContent===C||ne.ssFallback===C)){const A=J.vnode;L(R,A,A.scopeId,A.slotScopeIds,J.parent)}}},x=(R,C,F,ee,J,ne,A,he,ue=0)=>{for(let oe=ue;oe<R.length;oe++){const fe=R[oe]=he?pi(R[oe]):Gn(R[oe]);v(null,fe,C,F,ee,J,ne,A,he)}},M=(R,C,F,ee,J,ne,A)=>{const he=C.el=R.el;let{patchFlag:ue,dynamicChildren:oe,dirs:fe}=C;ue|=R.patchFlag&16;const y=R.props||xt,_=C.props||xt;let I;if(F&&Qi(F,!1),(I=_.onVnodeBeforeUpdate)&&On(I,F,C,R),fe&&Ji(C,R,F,"beforeUpdate"),F&&Qi(F,!0),(y.innerHTML&&_.innerHTML==null||y.textContent&&_.textContent==null)&&u(he,""),oe?V(R.dynamicChildren,oe,he,F,ee,Za(C,J),ne):A||ae(R,C,he,null,F,ee,Za(C,J),ne,!1),ue>0){if(ue&16)w(he,y,_,F,J);else if(ue&2&&y.class!==_.class&&r(he,"class",null,_.class,J),ue&4&&r(he,"style",y.style,_.style,J),ue&8){const $=C.dynamicProps;for(let se=0;se<$.length;se++){const j=$[se],be=y[j],ge=_[j];(ge!==be||j==="value")&&r(he,j,be,ge,J,F)}}ue&1&&R.children!==C.children&&u(he,C.children)}else!A&&oe==null&&w(he,y,_,F,J);((I=_.onVnodeUpdated)||fe)&&ln(()=>{I&&On(I,F,C,R),fe&&Ji(C,R,F,"updated")},ee)},V=(R,C,F,ee,J,ne,A)=>{for(let he=0;he<C.length;he++){const ue=R[he],oe=C[he],fe=ue.el&&(ue.type===zn||!mr(ue,oe)||ue.shapeFlag&198)?f(ue.el):F;v(ue,oe,fe,null,ee,J,ne,A,!0)}},w=(R,C,F,ee,J)=>{if(C!==F){if(C!==xt)for(const ne in C)!wr(ne)&&!(ne in F)&&r(R,ne,C[ne],null,J,ee);for(const ne in F){if(wr(ne))continue;const A=F[ne],he=C[ne];A!==he&&ne!=="value"&&r(R,ne,he,A,J,ee)}"value"in F&&r(R,"value",C.value,F.value,J)}},z=(R,C,F,ee,J,ne,A,he,ue)=>{const oe=C.el=R?R.el:a(""),fe=C.anchor=R?R.anchor:a("");let{patchFlag:y,dynamicChildren:_,slotScopeIds:I}=C;I&&(he=he?he.concat(I):I),R==null?(i(oe,F,ee),i(fe,F,ee),x(C.children||[],F,fe,J,ne,A,he,ue)):y>0&&y&64&&_&&R.dynamicChildren&&R.dynamicChildren.length===_.length?(V(R.dynamicChildren,_,F,J,ne,A,he),(C.key!=null||J&&C===J.subTree)&&hp(R,C,!0)):ae(R,C,F,fe,J,ne,A,he,ue)},G=(R,C,F,ee,J,ne,A,he,ue)=>{C.slotScopeIds=he,R==null?C.shapeFlag&512?J.ctx.activate(C,F,ee,A,ue):Q(C,F,ee,J,ne,A,ue):X(R,C,ue)},Q=(R,C,F,ee,J,ne,A)=>{const he=R.component=z_(R,ee,J);if(Kh(R)&&(he.ctx.renderer=de),G_(he,!1,A),he.asyncDep){if(J&&J.registerDep(he,W,A),!R.el){const ue=he.subTree=lt($i);p(null,ue,C,F),R.placeholder=ue.el}}else W(he,R,C,F,J,ne,A)},X=(R,C,F)=>{const ee=C.component=R.component;if(E_(R,C,F))if(ee.asyncDep&&!ee.asyncResolved){N(ee,C,F);return}else ee.next=C,ee.update();else C.el=R.el,ee.vnode=C},W=(R,C,F,ee,J,ne,A)=>{const he=()=>{if(R.isMounted){let{next:y,bu:_,u:I,parent:$,vnode:se}=R;{const Be=pp(R);if(Be){y&&(y.el=se.el,N(R,y,A)),Be.asyncDep.then(()=>{ln(()=>{R.isUnmounted||oe()},J)});return}}let j=y,be;Qi(R,!1),y?(y.el=se.el,N(R,y,A)):y=se,_&&ko(_),(be=y.props&&y.props.onVnodeBeforeUpdate)&&On(be,$,y,se),Qi(R,!0);const ge=ff(R),Le=R.subTree;R.subTree=ge,v(Le,ge,f(Le.el),U(Le),R,J,ne),y.el=ge.el,j===null&&y_(R,ge.el),I&&ln(I,J),(be=y.props&&y.props.onVnodeUpdated)&&ln(()=>On(be,$,y,se),J)}else{let y;const{el:_,props:I}=C,{bm:$,m:se,parent:j,root:be,type:ge}=R,Le=Lr(C);Qi(R,!1),$&&ko($),!Le&&(y=I&&I.onVnodeBeforeMount)&&On(y,j,C),Qi(R,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(ge,R.parent?R.parent.type:void 0);const Be=R.subTree=ff(R);v(null,Be,F,ee,R,J,ne),C.el=Be.el}if(se&&ln(se,J),!Le&&(y=I&&I.onVnodeMounted)){const Be=C;ln(()=>On(y,j,Be),J)}(C.shapeFlag&256||j&&Lr(j.vnode)&&j.vnode.shapeFlag&256)&&R.a&&ln(R.a,J),R.isMounted=!0,C=F=ee=null}};R.scope.on();const ue=R.effect=new bh(he);R.scope.off();const oe=R.update=ue.run.bind(ue),fe=R.job=ue.runIfDirty.bind(ue);fe.i=R,fe.id=R.uid,ue.scheduler=()=>_u(fe),Qi(R,!0),oe()},N=(R,C,F)=>{C.component=R;const ee=R.vnode.props;R.vnode=C,R.next=null,b_(R,C.props,ee,F),w_(R,C.children,F),Mi(),nf(R),bi()},ae=(R,C,F,ee,J,ne,A,he,ue=!1)=>{const oe=R&&R.children,fe=R?R.shapeFlag:0,y=C.children,{patchFlag:_,shapeFlag:I}=C;if(_>0){if(_&128){me(oe,y,F,ee,J,ne,A,he,ue);return}else if(_&256){ce(oe,y,F,ee,J,ne,A,he,ue);return}}I&8?(fe&16&&ie(oe,J,ne),y!==oe&&u(F,y)):fe&16?I&16?me(oe,y,F,ee,J,ne,A,he,ue):ie(oe,J,ne,!0):(fe&8&&u(F,""),I&16&&x(y,F,ee,J,ne,A,he,ue))},ce=(R,C,F,ee,J,ne,A,he,ue)=>{R=R||Xs,C=C||Xs;const oe=R.length,fe=C.length,y=Math.min(oe,fe);let _;for(_=0;_<y;_++){const I=C[_]=ue?pi(C[_]):Gn(C[_]);v(R[_],I,F,null,J,ne,A,he,ue)}oe>fe?ie(R,J,ne,!0,!1,y):x(C,F,ee,J,ne,A,he,ue,y)},me=(R,C,F,ee,J,ne,A,he,ue)=>{let oe=0;const fe=C.length;let y=R.length-1,_=fe-1;for(;oe<=y&&oe<=_;){const I=R[oe],$=C[oe]=ue?pi(C[oe]):Gn(C[oe]);if(mr(I,$))v(I,$,F,null,J,ne,A,he,ue);else break;oe++}for(;oe<=y&&oe<=_;){const I=R[y],$=C[_]=ue?pi(C[_]):Gn(C[_]);if(mr(I,$))v(I,$,F,null,J,ne,A,he,ue);else break;y--,_--}if(oe>y){if(oe<=_){const I=_+1,$=I<fe?C[I].el:ee;for(;oe<=_;)v(null,C[oe]=ue?pi(C[oe]):Gn(C[oe]),F,$,J,ne,A,he,ue),oe++}}else if(oe>_)for(;oe<=y;)_e(R[oe],J,ne,!0),oe++;else{const I=oe,$=oe,se=new Map;for(oe=$;oe<=_;oe++){const Te=C[oe]=ue?pi(C[oe]):Gn(C[oe]);Te.key!=null&&se.set(Te.key,oe)}let j,be=0;const ge=_-$+1;let Le=!1,Be=0;const pe=new Array(ge);for(oe=0;oe<ge;oe++)pe[oe]=0;for(oe=I;oe<=y;oe++){const Te=R[oe];if(be>=ge){_e(Te,J,ne,!0);continue}let Ce;if(Te.key!=null)Ce=se.get(Te.key);else for(j=$;j<=_;j++)if(pe[j-$]===0&&mr(Te,C[j])){Ce=j;break}Ce===void 0?_e(Te,J,ne,!0):(pe[Ce-$]=oe+1,Ce>=Be?Be=Ce:Le=!0,v(Te,C[Ce],F,null,J,ne,A,he,ue),be++)}const xe=Le?I_(pe):Xs;for(j=xe.length-1,oe=ge-1;oe>=0;oe--){const Te=$+oe,Ce=C[Te],Pe=C[Te+1],Ye=Te+1<fe?Pe.el||mp(Pe):ee;pe[oe]===0?v(null,Ce,F,Ye,J,ne,A,he,ue):Le&&(j<0||oe!==xe[j]?ye(Ce,F,Ye,2):j--)}}},ye=(R,C,F,ee,J=null)=>{const{el:ne,type:A,transition:he,children:ue,shapeFlag:oe}=R;if(oe&6){ye(R.component.subTree,C,F,ee);return}if(oe&128){R.suspense.move(C,F,ee);return}if(oe&64){A.move(R,C,F,de);return}if(A===zn){i(ne,C,F);for(let y=0;y<ue.length;y++)ye(ue[y],C,F,ee);i(R.anchor,C,F);return}if(A===Go){T(R,C,F);return}if(ee!==2&&oe&1&&he)if(ee===0)he.beforeEnter(ne),i(ne,C,F),ln(()=>he.enter(ne),J);else{const{leave:y,delayLeave:_,afterLeave:I}=he,$=()=>{R.ctx.isUnmounted?s(ne):i(ne,C,F)},se=()=>{ne._isLeaving&&ne[$g](!0),y(ne,()=>{$(),I&&I()})};_?_(ne,$,se):se()}else i(ne,C,F)},_e=(R,C,F,ee=!1,J=!1)=>{const{type:ne,props:A,ref:he,children:ue,dynamicChildren:oe,shapeFlag:fe,patchFlag:y,dirs:_,cacheIndex:I}=R;if(y===-2&&(J=!1),he!=null&&(Mi(),Ir(he,null,F,R,!0),bi()),I!=null&&(C.renderCache[I]=void 0),fe&256){C.ctx.deactivate(R);return}const $=fe&1&&_,se=!Lr(R);let j;if(se&&(j=A&&A.onVnodeBeforeUnmount)&&On(j,C,R),fe&6)Ge(R.component,F,ee);else{if(fe&128){R.suspense.unmount(F,ee);return}$&&Ji(R,null,C,"beforeUnmount"),fe&64?R.type.remove(R,C,F,de,ee):oe&&!oe.hasOnce&&(ne!==zn||y>0&&y&64)?ie(oe,C,F,!1,!0):(ne===zn&&y&384||!J&&fe&16)&&ie(ue,C,F),ee&&De(R)}(se&&(j=A&&A.onVnodeUnmounted)||$)&&ln(()=>{j&&On(j,C,R),$&&Ji(R,null,C,"unmounted")},F)},De=R=>{const{type:C,el:F,anchor:ee,transition:J}=R;if(C===zn){Xe(F,ee);return}if(C===Go){E(R);return}const ne=()=>{s(F),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(R.shapeFlag&1&&J&&!J.persisted){const{leave:A,delayLeave:he}=J,ue=()=>A(F,ne);he?he(R.el,ne,ue):ue()}else ne()},Xe=(R,C)=>{let F;for(;R!==C;)F=d(R),s(R),R=F;s(C)},Ge=(R,C,F)=>{const{bum:ee,scope:J,job:ne,subTree:A,um:he,m:ue,a:oe}=R;pf(ue),pf(oe),ee&&ko(ee),J.stop(),ne&&(ne.flags|=8,_e(A,R,C,F)),he&&ln(he,C),ln(()=>{R.isUnmounted=!0},C)},ie=(R,C,F,ee=!1,J=!1,ne=0)=>{for(let A=ne;A<R.length;A++)_e(R[A],C,F,ee,J)},U=R=>{if(R.shapeFlag&6)return U(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=d(R.anchor||R.el),F=C&&C[Xg];return F?d(F):C};let H=!1;const le=(R,C,F)=>{let ee;R==null?C._vnode&&(_e(C._vnode,null,null,!0),ee=C._vnode.component):v(C._vnode||null,R,C,null,null,null,F),C._vnode=R,H||(H=!0,nf(ee),Hh(),H=!1)},de={p:v,um:_e,m:ye,r:De,mt:Q,mc:x,pc:ae,pbc:V,n:U,o:t};return{render:le,hydrate:void 0,createApp:m_(le)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function D_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hp(t,e,n=!1){const i=t.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=pi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&hp(o,a)),a.type===Ta&&(a.patchFlag===-1&&(a=s[r]=pi(a)),a.el=o.el),a.type===$i&&!a.el&&(a.el=o.el)}}function I_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}function pf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function mp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?mp(e.subTree):null}const gp=t=>t.__isSuspense;function L_(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):kg(t)}const zn=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Ur=[];let _n=null;function et(t=!1){Ur.push(_n=t?null:[])}function N_(){Ur.pop(),_n=Ur[Ur.length-1]||null}let Gr=1;function oa(t,e=!1){Gr+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function _p(t){return t.dynamicChildren=Gr>0?_n||Xs:null,N_(),Gr>0&&_n&&_n.push(t),t}function nt(t,e,n,i,s,r){return _p(O(t,e,n,i,s,r,!0))}function U_(t,e,n,i,s){return _p(lt(t,e,n,i,s,!0))}function aa(t){return t?t.__v_isVNode===!0:!1}function mr(t,e){return t.type===e.type&&t.key===e.key}const vp=({key:t})=>t??null,Ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pt(t)||Tt(t)||je(t)?{i:gn,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,i=0,s=null,r=t===zn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vp(e),ref:e&&Ho(e),scopeId:Xh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return a?(Eu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pt(n)?8:16),Gr>0&&!o&&_n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_n.push(l),l}const lt=O_;function O_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===r_)&&(t=$i),aa(t)){const a=Js(t,e,!0);return n&&Eu(a,n),Gr>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag=-2,a}if($_(t)&&(t=t.__vccOpts),e){e=F_(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=xa(a)),mt(l)&&(Ea(l)&&!We(l)&&(l=Vt({},l)),e.style=xs(l))}const o=Pt(t)?1:gp(t)?128:qg(t)?64:mt(t)?4:je(t)?2:0;return O(t,e,n,i,s,o,r,!0)}function F_(t){return t?Ea(t)||ap(t)?Vt({},t):t:null}function Js(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?B_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&vp(c),ref:e&&e.ref?n&&r?We(r)?r.concat(Ho(e)):[r,Ho(e)]:Ho(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Js(t.ssContent),ssFallback:t.ssFallback&&Js(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&vu(u,l.clone(u)),u}function He(t=" ",e=0){return lt(Ta,null,t,e)}function Xi(t,e){const n=lt(Go,null,t);return n.staticCount=e,n}function Kn(t="",e=!1){return e?(et(),U_($i,null,t)):lt($i,null,t)}function Gn(t){return t==null||typeof t=="boolean"?lt($i):We(t)?lt(zn,null,t.slice()):aa(t)?pi(t):lt(Ta,null,String(t))}function pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Js(t)}function Eu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Eu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ap(e)?e._ctx=gn:s===3&&gn&&(gn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:gn},n=32):(e=String(e),i&64?(n=16,e=[He(e)]):n=8);t.children=e,t.shapeFlag|=n}function B_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=xa([e.class,i.class]));else if(s==="style")e.style=xs([e.style,i.style]);else if(pa(s)){const r=e[s],o=i[s];o&&r!==o&&!(We(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function On(t,e,n,i=null){ti(t,e,7,[n,i])}const V_=np();let k_=0;function z_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||V_,r={uid:k_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cp(i,s),emitsOptions:ip(i,s),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=__.bind(null,r),t.ce&&t.ce(r),r}let Xt=null;const xp=()=>Xt||gn;let la,Ql;{const t=va(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};la=e("__VUE_INSTANCE_SETTERS__",n=>Xt=n),Ql=e("__VUE_SSR_SETTERS__",n=>Hr=n)}const Qr=t=>{const e=Xt;return la(t),t.scope.on(),()=>{t.scope.off(),la(e)}},mf=()=>{Xt&&Xt.scope.off(),la(null)};function Sp(t){return t.vnode.shapeFlag&4}let Hr=!1;function G_(t,e=!1,n=!1){e&&Ql(e);const{props:i,children:s}=t.vnode,r=Sp(t);M_(t,i,r,e),R_(t,s,n||e);const o=r?H_(t,e):void 0;return e&&Ql(!1),o}function H_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,l_);const{setup:i}=n;if(i){Mi();const s=t.setupContext=i.length>1?X_(t):null,r=Qr(t),o=Zr(i,t,0,[t.props,s]),a=ph(o);if(bi(),r(),(a||t.sp)&&!Lr(t)&&Yh(t),a){if(o.then(mf,mf),e)return o.then(l=>{gf(t,l)}).catch(l=>{ya(l,t,0)});t.asyncDep=o}else gf(t,o)}else Ep(t)}function gf(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:mt(e)&&(t.setupState=kh(e)),Ep(t)}function Ep(t,e,n){const i=t.type;t.render||(t.render=i.render||Yn);{const s=Qr(t);Mi();try{c_(t)}finally{bi(),s()}}}const W_={get(t,e){return Wt(t,"get",""),t[e]}};function X_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,W_),slots:t.slots,emit:t.emit,expose:e}}function Aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kh(mu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Nr)return Nr[n](t)},has(e,n){return n in e||n in Nr}})):t.proxy}function q_(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function $_(t){return je(t)&&"__vccOpts"in t}const tn=(t,e)=>Ug(t,e,Hr);function yp(t,e,n){try{oa(-1);const i=arguments.length;return i===2?mt(e)&&!We(e)?aa(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&aa(n)&&(n=[n]),lt(t,e,n))}finally{oa(1)}}const j_="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ec;const _f=typeof window<"u"&&window.trustedTypes;if(_f)try{ec=_f.createPolicy("vue",{createHTML:t=>t})}catch{}const Mp=ec?t=>ec.createHTML(t):t=>t,Y_="http://www.w3.org/2000/svg",K_="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,vf=hi&&hi.createElement("template"),Z_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?hi.createElementNS(Y_,t):e==="mathml"?hi.createElementNS(K_,t):n?hi.createElement(t,{is:n}):hi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>hi.createTextNode(t),createComment:t=>hi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{vf.innerHTML=Mp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=vf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},J_=Symbol("_vtc");function Q_(t,e,n){const i=t[J_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xf=Symbol("_vod"),e0=Symbol("_vsh"),t0=Symbol(""),n0=/(?:^|;)\s*display\s*:/;function i0(t,e,n){const i=t.style,s=Pt(n);let r=!1;if(n&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Wo(i,a,"")}else for(const o in e)n[o]==null&&Wo(i,o,"");for(const o in n)o==="display"&&(r=!0),Wo(i,o,n[o])}else if(s){if(e!==n){const o=i[t0];o&&(n+=";"+o),i.cssText=n,r=n0.test(n)}}else e&&t.removeAttribute("style");xf in t&&(t[xf]=r?i.display:"",t[e0]&&(i.display="none"))}const Sf=/\s*!important$/;function Wo(t,e,n){if(We(n))n.forEach(i=>Wo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=s0(t,e);Sf.test(n)?t.setProperty(ys(i),n.replace(Sf,""),"important"):t[i]=n}}const Ef=["Webkit","Moz","ms"],Ja={};function s0(t,e){const n=Ja[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return Ja[e]=i;i=_a(i);for(let s=0;s<Ef.length;s++){const r=Ef[s]+i;if(r in t)return Ja[e]=r}return e}const yf="http://www.w3.org/1999/xlink";function Mf(t,e,n,i,s,r=og(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yf,e.slice(6,e.length)):t.setAttributeNS(yf,e,n):n==null||r&&!vh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ei(n)?String(n):n)}function bf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=vh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Hs(t,e,n,i){t.addEventListener(e,n,i)}function r0(t,e,n,i){t.removeEventListener(e,n,i)}const Tf=Symbol("_vei");function o0(t,e,n,i,s=null){const r=t[Tf]||(t[Tf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=a0(e);if(i){const c=r[e]=u0(i,s);Hs(t,a,c,l)}else o&&(r0(t,a,o,l),r[e]=void 0)}}const Af=/(?:Once|Passive|Capture)$/;function a0(t){let e;if(Af.test(t)){e={};let i;for(;i=t.match(Af);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ys(t.slice(2)),e]}let Qa=0;const l0=Promise.resolve(),c0=()=>Qa||(l0.then(()=>Qa=0),Qa=Date.now());function u0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ti(f0(i,n.value),e,5,[i])};return n.value=t,n.attached=c0(),n}function f0(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,d0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Q_(t,i,o):e==="style"?i0(t,n,i):pa(e)?ru(e)||o0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):h0(t,e,i,o))?(bf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mf(t,e,i,o,r,e!=="value")):t._isVueCE&&(p0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Pt(i)))?bf(t,nn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Mf(t,e,i,o))};function h0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rf(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rf(e)&&Pt(n)?!1:e in t}function p0(t,e){const n=t._def.props;if(!n)return!1;const i=nn(e);return Array.isArray(n)?n.some(s=>nn(s)===i):Object.keys(n).some(s=>nn(s)===i)}const wf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return We(e)?n=>ko(e,n):e};function m0(t){t.target.composing=!0}function Cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const el=Symbol("_assign");function Pf(t,e,n){return e&&(t=t.trim()),n&&(t=au(t)),t}const qn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[el]=wf(s);const r=i||s.props&&s.props.type==="number";Hs(t,e?"change":"input",o=>{o.target.composing||t[el](Pf(t.value,n,r))}),(n||r)&&Hs(t,"change",()=>{t.value=Pf(t.value,n,r)}),e||(Hs(t,"compositionstart",m0),Hs(t,"compositionend",Cf),Hs(t,"change",Cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[el]=wf(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?au(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},g0=["ctrl","shift","alt","meta"],_0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>g0.some(n=>t[`${n}Key`]&&!e.includes(n))},Ra=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=_0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},v0=Vt({patchProp:d0},Z_);let Df;function x0(){return Df||(Df=C_(v0))}const S0=(...t)=>{const e=x0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=y0(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,E0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function E0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function y0(t){return Pt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bp;const wa=t=>bp=t,Tp=Symbol();function tc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Or;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Or||(Or={}));function M0(){const t=yh(!0),e=t.run(()=>tt({}));let n=[],i=[];const s=mu({install(r){wa(s),s._a=r,r.provide(Tp,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ap=()=>{};function If(t,e,n,i=Ap){t.add(e);const s=()=>{t.delete(e)&&i()};return!n&&Mh()&&lg(s),s}function As(t,...e){t.forEach(n=>{n(...e)})}const b0=t=>t(),Lf=Symbol(),tl=Symbol();function nc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];tc(s)&&tc(i)&&t.hasOwnProperty(n)&&!Tt(i)&&!xi(i)?t[n]=nc(s,i):t[n]=i}return t}const T0=Symbol();function A0(t){return!tc(t)||!Object.prototype.hasOwnProperty.call(t,T0)}const{assign:zi}=Object;function R0(t){return!!(Tt(t)&&t.effect)}function w0(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=Dg(n.state.value[t]);return zi(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=mu(tn(()=>{wa(n);const m=n._s.get(t);return o[d].call(m,m)})),f),{}))}return l=Rp(t,c,e,n,i,!0),l}function Rp(t,e,n={},i,s,r){let o;const a=zi({actions:{}},n),l={deep:!0};let c,u,f=new Set,d=new Set,m;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={});let v;function h(x){let M;c=u=!1,typeof x=="function"?(x(i.state.value[t]),M={type:Or.patchFunction,storeId:t,events:m}):(nc(i.state.value[t],x),M={type:Or.patchObject,payload:x,storeId:t,events:m});const V=v=Symbol();gu().then(()=>{v===V&&(c=!0)}),u=!0,As(f,M,i.state.value[t])}const p=r?function(){const{state:M}=n,V=M?M():{};this.$patch(w=>{zi(w,V)})}:Ap;function S(){o.stop(),f.clear(),d.clear(),i._s.delete(t)}const T=(x,M="")=>{if(Lf in x)return x[tl]=M,x;const V=function(){wa(i);const w=Array.from(arguments),z=new Set,G=new Set;function Q(N){z.add(N)}function X(N){G.add(N)}As(d,{args:w,name:V[tl],store:P,after:Q,onError:X});let W;try{W=x.apply(this&&this.$id===t?this:P,w)}catch(N){throw As(G,N),N}return W instanceof Promise?W.then(N=>(As(z,N),N)).catch(N=>(As(G,N),Promise.reject(N))):(As(z,W),W)};return V[Lf]=!0,V[tl]=M,V},E={_p:i,$id:t,$onAction:If.bind(null,d),$patch:h,$reset:p,$subscribe(x,M={}){const V=If(f,x,M.detached,()=>w()),w=o.run(()=>Dr(()=>i.state.value[t],z=>{(M.flush==="sync"?u:c)&&x({storeId:t,type:Or.direct,events:m},z)},zi({},l,M)));return V},$dispose:S},P=lr(E);i._s.set(t,P);const L=(i._a&&i._a.runWithContext||b0)(()=>i._e.run(()=>(o=yh()).run(()=>e({action:T}))));for(const x in L){const M=L[x];if(Tt(M)&&!R0(M)||xi(M))r||(g&&A0(M)&&(Tt(M)?M.value=g[x]:nc(M,g[x])),i.state.value[t][x]=M);else if(typeof M=="function"){const V=T(M,x);L[x]=V,a.actions[x]=M}}return zi(P,L),zi(ot(P),L),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:x=>{h(M=>{zi(M,x)})}}),i._p.forEach(x=>{zi(P,o.run(()=>x({store:P,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(P.$state,g),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function C0(t,e,n){let i;const s=typeof e=="function";i=s?n:e;function r(o,a){const l=zg();return o=o||(l?yn(Tp,null):null),o&&wa(o),o=bp,o._s.has(t)||(s?Rp(t,e,i,o):w0(t,i,o)),o._s.get(t)}return r.$id=t,r}let Fr=null;const P0={VITE_APP_PROFILE:"dev",VITE_API_BASE_URL:"",VITE_STAGING_TAILSCALE_IP:"10.128.145.136",VITE_STAGING_LOCAL_IP:"10.128.145.136",VITE_SHOW_GAMING_COMING_SOON:"false",VITE_FF_SERVICE_METRICS:"staging",VITE_FF_SERVICE_GAMELIFT:"dev",VITE_FF_SERVICE_BILLING:"staging",VITE_FF_SERVICE_AUTH:"dev"};function D0(){return P0}async function wp(){const t="/config.json";try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);Fr=await e.json(),console.log("[config] Loaded from config.json")}catch{console.log("[config] config.json unavailable — falling back"),Fr=D0()}return Fr}function Wr(){return Fr||(wp(),console.log("Remote config not loaded yet. Call loadRemoteConfig(1) first.")),Fr}const Ln=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},I0={},L0={id:"cloud-gaming-app"};function N0(t,e){const n=Yi("router-view");return et(),nt("div",L0,[lt(n)])}const U0=Ln(I0,[["render",N0]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ws=typeof document<"u";function Cp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function O0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cp(t.default)}const ct=Object.assign;function nl(t,e){const n={};for(const i in e){const s=e[i];n[i]=In(s)?s.map(t):t(s)}return n}const Br=()=>{},In=Array.isArray;function Nf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Pp=/#/g,F0=/&/g,B0=/\//g,V0=/=/g,k0=/\?/g,Dp=/\+/g,z0=/%5B/g,G0=/%5D/g,Ip=/%5E/g,H0=/%60/g,Lp=/%7B/g,W0=/%7C/g,Np=/%7D/g,X0=/%20/g;function yu(t){return t==null?"":encodeURI(""+t).replace(W0,"|").replace(z0,"[").replace(G0,"]")}function q0(t){return yu(t).replace(Lp,"{").replace(Np,"}").replace(Ip,"^")}function ic(t){return yu(t).replace(Dp,"%2B").replace(X0,"+").replace(Pp,"%23").replace(F0,"%26").replace(H0,"`").replace(Lp,"{").replace(Np,"}").replace(Ip,"^")}function $0(t){return ic(t).replace(V0,"%3D")}function j0(t){return yu(t).replace(Pp,"%23").replace(k0,"%3F")}function Y0(t){return j0(t).replace(B0,"%2F")}function Xr(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const K0=/\/$/,Z0=t=>t.replace(K0,"");function il(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=tv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:Xr(o)}}function J0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Q0(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Qs(e.matched[i],n.matched[s])&&Up(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Up(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!ev(t[n],e[n]))return!1;return!0}function ev(t,e){return In(t)?Of(t,e):In(e)?Of(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Of(t,e){return In(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function tv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let sc=function(t){return t.pop="pop",t.push="push",t}({}),sl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function nv(t){if(!t)if(Ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Z0(t)}const iv=/^[^#]+#/;function sv(t,e){return t.replace(iv,"#")+e}function rv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ca=()=>({left:window.scrollX,top:window.scrollY});function ov(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ff(t,e){return(history.state?history.state.position-e:-1)+t}const rc=new Map;function av(t,e){rc.set(t,e)}function lv(t){const e=rc.get(t);return rc.delete(t),e}function cv(t){return typeof t=="string"||t&&typeof t=="object"}function Op(t){return typeof t=="string"||typeof t=="symbol"}let Mt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Fp=Symbol("");Mt.MATCHER_NOT_FOUND+"",Mt.NAVIGATION_GUARD_REDIRECT+"",Mt.NAVIGATION_ABORTED+"",Mt.NAVIGATION_CANCELLED+"",Mt.NAVIGATION_DUPLICATED+"";function er(t,e){return ct(new Error,{type:t,[Fp]:!0},e)}function ai(t,e){return t instanceof Error&&Fp in t&&(e==null||!!(t.type&e))}const uv=["params","query","hash"];function fv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of uv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function dv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(Dp," "),r=s.indexOf("="),o=Xr(r<0?s:s.slice(0,r)),a=r<0?null:Xr(s.slice(r+1));if(o in e){let l=e[o];In(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Bf(t){let e="";for(let n in t){const i=t[n];if(n=$0(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(In(i)?i.map(s=>s&&ic(s)):[i&&ic(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=In(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const pv=Symbol(""),Vf=Symbol(""),Pa=Symbol(""),Mu=Symbol(""),oc=Symbol("");function gr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(er(Mt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):cv(d)?l(er(Mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function rl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Cp(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Hi(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=O0(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Hi(d,n,i,o,a,s)()}))}}return r}function mv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Qs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Qs(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let gv=()=>location.protocol+"//"+location.host;function Bp(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Uf(a,"")}return Uf(n,t)+i+s}function _v(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const m=Bp(t,location),g=n.value,v=e.value;let h=0;if(d){if(n.value=m,e.value=d,o&&o===g){o=null;return}h=v?d.position-v.position:0}else i(m);s.forEach(p=>{p(n.value,g,{delta:h,type:sc.pop,direction:h?h>0?sl.forward:sl.back:sl.unknown})})};function l(){o=n.value}function c(d){s.push(d);const m=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(ct({},d.state,{scroll:Ca()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function kf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Ca():null}}function vv(t){const{history:e,location:n}=window,i={value:Bp(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:gv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(l,c){r(l,ct({},e.state,kf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ct({},s.value,e.state,{forward:l,scroll:Ca()});r(u.current,u,!0),r(l,ct({},kf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function xv(t){t=nv(t);const e=vv(t),n=_v(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ct({location:"",base:t,go:i,createHref:sv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let fs=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Dt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Dt||{});const Sv={type:fs.Static,value:""},Ev=/[a-zA-Z0-9_]/;function yv(t){if(!t)return[[]];if(t==="/")return[[Sv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=Dt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===Dt.Static?r.push({type:fs.Static,value:c}):n===Dt.Param||n===Dt.ParamRegExp||n===Dt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:fs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Dt.ParamRegExp){i=n,n=Dt.EscapeNext;continue}switch(n){case Dt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Dt.Param):d();break;case Dt.EscapeNext:d(),n=i;break;case Dt.Param:l==="("?n=Dt.ParamRegExp:Ev.test(l)?d():(f(),n=Dt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Dt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Dt.ParamRegExpEnd:u+=l;break;case Dt.ParamRegExpEnd:f(),n=Dt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Dt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const zf="[^/]+?",Mv={sensitive:!1,strict:!1,start:!0,end:!0};var Jt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Jt||{});const bv=/[.+*?^${}()[\]/\\]/g;function Tv(t,e){const n=ct({},Mv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[Jt.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=Jt.Segment+(n.sensitive?Jt.BonusCaseSensitive:0);if(d.type===fs.Static)f||(s+="/"),s+=d.value.replace(bv,"\\$&"),m+=Jt.Static;else if(d.type===fs.Param){const{value:g,repeatable:v,optional:h,regexp:p}=d;r.push({name:g,repeatable:v,optional:h});const S=p||zf;if(S!==zf){m+=Jt.BonusCustomRegExp;try{`${S}`}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+E.message)}}let T=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(T=h&&c.length<2?`(?:/${T})`:"/"+T),h&&(T+="?"),s+=T,m+=Jt.Dynamic,h&&(m+=Jt.BonusOptional),v&&(m+=Jt.BonusRepeatable),S===".*"&&(m+=Jt.BonusWildcard)}u.push(m)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Jt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=r[d-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===fs.Static)u+=m.value;else if(m.type===fs.Param){const{value:g,repeatable:v,optional:h}=m,p=g in c?c[g]:"";if(In(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=In(p)?p.join("/"):p;if(!S)if(h)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Av(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Jt.Static+Jt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Jt.Static+Jt.Segment?1:-1:0}function Vp(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Av(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Gf(i))return 1;if(Gf(s))return-1}return s.length-i.length}function Gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Rv={strict:!1,end:!0,sensitive:!1};function wv(t,e,n){const i=Tv(yv(t.path),n),s=ct(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Cv(t,e){const n=[],i=new Map;e=Nf(Rv,e);function s(f){return i.get(f)}function r(f,d,m){const g=!m,v=Wf(f);v.aliasOf=m&&m.record;const h=Nf(e,f),p=[v];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of E)p.push(Wf(ct({},v,{components:m?m.record.components:v.components,path:P,aliasOf:m?m.record:v})))}let S,T;for(const E of p){const{path:P}=E;if(d&&P[0]!=="/"){const D=d.record.path,L=D[D.length-1]==="/"?"":"/";E.path=d.record.path+(P&&L+P)}if(S=wv(E,d,h),m?m.alias.push(S):(T=T||S,T!==S&&T.alias.push(S),g&&f.name&&!Xf(S)&&o(f.name)),kp(S)&&l(S),v.children){const D=v.children;for(let L=0;L<D.length;L++)r(D[L],S,m&&m.children[L])}m=m||S}return T?()=>{o(T)}:Br}function o(f){if(Op(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=Iv(f,n);n.splice(d,0,f),f.record.name&&!Xf(f)&&i.set(f.record.name,f)}function c(f,d){let m,g={},v,h;if("name"in f&&f.name){if(m=i.get(f.name),!m)throw er(Mt.MATCHER_NOT_FOUND,{location:f});h=m.record.name,g=ct(Hf(d.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Hf(f.params,m.keys.map(T=>T.name))),v=m.stringify(g)}else if(f.path!=null)v=f.path,m=n.find(T=>T.re.test(v)),m&&(g=m.parse(v),h=m.record.name);else{if(m=d.name?i.get(d.name):n.find(T=>T.re.test(d.path)),!m)throw er(Mt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});h=m.record.name,g=ct({},d.params,f.params),v=m.stringify(g)}const p=[];let S=m;for(;S;)p.unshift(S.record),S=S.parent;return{name:h,path:v,params:g,matched:p,meta:Dv(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Hf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Pv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Pv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dv(t){return t.reduce((e,n)=>ct(e,n.meta),{})}function Iv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;Vp(t,e[r])<0?i=r:n=r+1}const s=Lv(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Lv(t){let e=t;for(;e=e.parent;)if(kp(e)&&Vp(t,e)===0)return e}function kp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qf(t){const e=yn(Pa),n=yn(Mu),i=tn(()=>{const l=gs(t.to);return e.resolve(l)}),s=tn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Qs.bind(null,u));if(d>-1)return d;const m=$f(l[c-2]);return c>1&&$f(u)===m&&f[f.length-1].path!==m?f.findIndex(Qs.bind(null,l[c-2])):d}),r=tn(()=>s.value>-1&&Bv(n.params,i.value.params)),o=tn(()=>s.value>-1&&s.value===n.matched.length-1&&Up(n.params,i.value.params));function a(l={}){if(Fv(l)){const c=e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(Br);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:tn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Nv(t){return t.length===1?t[0]:t}const Uv=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:qf,setup(t,{slots:e}){const n=lr(qf(t)),{options:i}=yn(Pa),s=tn(()=>({[jf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Nv(e.default(n));return t.custom?r:yp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Ov=Uv;function Fv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bv(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!In(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function $f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t??e??n,Vv=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=yn(oc),s=tn(()=>t.route||i.value),r=yn(Vf,0),o=tn(()=>{let c=gs(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=tn(()=>s.value.matched[o.value]);zo(Vf,tn(()=>o.value+1)),zo(pv,a),zo(oc,s);const l=tt();return Dr(()=>[l.value,a.value,t.name],([c,u,f],[d,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Qs(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Yf(n.default,{Component:d,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,h=yp(d,ct({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Yf(n.default,{Component:h,route:c})||h}}});function Yf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kv=Vv;function zv(t){const e=Cv(t.routes,t),n=t.parseQuery||dv,i=t.stringifyQuery||Bf,s=t.history,r=gr(),o=gr(),a=gr(),l=wg(Ni);let c=Ni;Ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nl.bind(null,U=>""+U),f=nl.bind(null,Y0),d=nl.bind(null,Xr);function m(U,H){let le,de;return Op(U)?(le=e.getRecordMatcher(U),de=H):de=U,e.addRoute(de,le)}function g(U){const H=e.getRecordMatcher(U);H&&e.removeRoute(H)}function v(){return e.getRoutes().map(U=>U.record)}function h(U){return!!e.getRecordMatcher(U)}function p(U,H){if(H=ct({},H||l.value),typeof U=="string"){const F=il(n,U,H.path),ee=e.resolve({path:F.path},H),J=s.createHref(F.fullPath);return ct(F,ee,{params:d(ee.params),hash:Xr(F.hash),redirectedFrom:void 0,href:J})}let le;if(U.path!=null)le=ct({},U,{path:il(n,U.path,H.path).path});else{const F=ct({},U.params);for(const ee in F)F[ee]==null&&delete F[ee];le=ct({},U,{params:f(F)}),H.params=f(H.params)}const de=e.resolve(le,H),Se=U.hash||"";de.params=u(d(de.params));const R=J0(i,ct({},U,{hash:q0(Se),path:de.path})),C=s.createHref(R);return ct({fullPath:R,hash:Se,query:i===Bf?hv(U.query):U.query||{}},de,{redirectedFrom:void 0,href:C})}function S(U){return typeof U=="string"?il(n,U,l.value.path):ct({},U)}function T(U,H){if(c!==U)return er(Mt.NAVIGATION_CANCELLED,{from:H,to:U})}function E(U){return L(U)}function P(U){return E(ct(S(U),{replace:!0}))}function D(U,H){const le=U.matched[U.matched.length-1];if(le&&le.redirect){const{redirect:de}=le;let Se=typeof de=="function"?de(U,H):de;return typeof Se=="string"&&(Se=Se.includes("?")||Se.includes("#")?Se=S(Se):{path:Se},Se.params={}),ct({query:U.query,hash:U.hash,params:Se.path!=null?{}:U.params},Se)}}function L(U,H){const le=c=p(U),de=l.value,Se=U.state,R=U.force,C=U.replace===!0,F=D(le,de);if(F)return L(ct(S(F),{state:typeof F=="object"?ct({},Se,F.state):Se,force:R,replace:C}),H||le);const ee=le;ee.redirectedFrom=H;let J;return!R&&Q0(i,de,le)&&(J=er(Mt.NAVIGATION_DUPLICATED,{to:ee,from:de}),ye(de,de,!0,!1)),(J?Promise.resolve(J):V(ee,de)).catch(ne=>ai(ne)?ai(ne,Mt.NAVIGATION_GUARD_REDIRECT)?ne:me(ne):ae(ne,ee,de)).then(ne=>{if(ne){if(ai(ne,Mt.NAVIGATION_GUARD_REDIRECT))return L(ct({replace:C},S(ne.to),{state:typeof ne.to=="object"?ct({},Se,ne.to.state):Se,force:R}),H||ee)}else ne=z(ee,de,!0,C,Se);return w(ee,de,ne),ne})}function x(U,H){const le=T(U,H);return le?Promise.reject(le):Promise.resolve()}function M(U){const H=Xe.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(U):U()}function V(U,H){let le;const[de,Se,R]=mv(U,H);le=rl(de.reverse(),"beforeRouteLeave",U,H);for(const F of de)F.leaveGuards.forEach(ee=>{le.push(Hi(ee,U,H))});const C=x.bind(null,U,H);return le.push(C),ie(le).then(()=>{le=[];for(const F of r.list())le.push(Hi(F,U,H));return le.push(C),ie(le)}).then(()=>{le=rl(Se,"beforeRouteUpdate",U,H);for(const F of Se)F.updateGuards.forEach(ee=>{le.push(Hi(ee,U,H))});return le.push(C),ie(le)}).then(()=>{le=[];for(const F of R)if(F.beforeEnter)if(In(F.beforeEnter))for(const ee of F.beforeEnter)le.push(Hi(ee,U,H));else le.push(Hi(F.beforeEnter,U,H));return le.push(C),ie(le)}).then(()=>(U.matched.forEach(F=>F.enterCallbacks={}),le=rl(R,"beforeRouteEnter",U,H,M),le.push(C),ie(le))).then(()=>{le=[];for(const F of o.list())le.push(Hi(F,U,H));return le.push(C),ie(le)}).catch(F=>ai(F,Mt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function w(U,H,le){a.list().forEach(de=>M(()=>de(U,H,le)))}function z(U,H,le,de,Se){const R=T(U,H);if(R)return R;const C=H===Ni,F=Ws?history.state:{};le&&(de||C?s.replace(U.fullPath,ct({scroll:C&&F&&F.scroll},Se)):s.push(U.fullPath,Se)),l.value=U,ye(U,H,le,C),me()}let G;function Q(){G||(G=s.listen((U,H,le)=>{if(!Ge.listening)return;const de=p(U),Se=D(de,Ge.currentRoute.value);if(Se){L(ct(Se,{replace:!0,force:!0}),de).catch(Br);return}c=de;const R=l.value;Ws&&av(Ff(R.fullPath,le.delta),Ca()),V(de,R).catch(C=>ai(C,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_CANCELLED)?C:ai(C,Mt.NAVIGATION_GUARD_REDIRECT)?(L(ct(S(C.to),{force:!0}),de).then(F=>{ai(F,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&!le.delta&&le.type===sc.pop&&s.go(-1,!1)}).catch(Br),Promise.reject()):(le.delta&&s.go(-le.delta,!1),ae(C,de,R))).then(C=>{C=C||z(de,R,!1),C&&(le.delta&&!ai(C,Mt.NAVIGATION_CANCELLED)?s.go(-le.delta,!1):le.type===sc.pop&&ai(C,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),w(de,R,C)}).catch(Br)}))}let X=gr(),W=gr(),N;function ae(U,H,le){me(U);const de=W.list();return de.length?de.forEach(Se=>Se(U,H,le)):console.error(U),Promise.reject(U)}function ce(){return N&&l.value!==Ni?Promise.resolve():new Promise((U,H)=>{X.add([U,H])})}function me(U){return N||(N=!U,Q(),X.list().forEach(([H,le])=>U?le(U):H()),X.reset()),U}function ye(U,H,le,de){const{scrollBehavior:Se}=t;if(!Ws||!Se)return Promise.resolve();const R=!le&&lv(Ff(U.fullPath,0))||(de||!le)&&history.state&&history.state.scroll||null;return gu().then(()=>Se(U,H,R)).then(C=>C&&ov(C)).catch(C=>ae(C,U,H))}const _e=U=>s.go(U);let De;const Xe=new Set,Ge={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:h,getRoutes:v,resolve:p,options:t,push:E,replace:P,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:ce,install(U){U.component("RouterLink",Ov),U.component("RouterView",kv),U.config.globalProperties.$router=Ge,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),Ws&&!De&&l.value===Ni&&(De=!0,E(s.location).catch(de=>{}));const H={};for(const de in Ni)Object.defineProperty(H,de,{get:()=>l.value[de],enumerable:!0});U.provide(Pa,Ge),U.provide(Mu,Bh(H)),U.provide(oc,l);const le=U.unmount;Xe.add(U),U.unmount=function(){Xe.delete(U),Xe.size<1&&(c=Ni,G&&G(),G=null,l.value=Ni,De=!1,N=!1),le()}}};function ie(U){return U.reduce((H,le)=>H.then(()=>M(le)),Promise.resolve())}return Ge}function cr(){return yn(Pa)}function Da(t){return yn(Mu)}function zp(t,e){return function(){return t.apply(e,arguments)}}const{toString:Gv}=Object.prototype,{getPrototypeOf:Ia}=Object,{iterator:La,toStringTag:Gp}=Symbol,Na=(t=>e=>{const n=Gv.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Nn=t=>(t=t.toLowerCase(),e=>Na(e)===t),Ua=t=>e=>typeof e===t,{isArray:ur}=Array,tr=Ua("undefined");function eo(t){return t!==null&&!tr(t)&&t.constructor!==null&&!tr(t.constructor)&&cn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Hp=Nn("ArrayBuffer");function Hv(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Hp(t.buffer),e}const Wv=Ua("string"),cn=Ua("function"),Wp=Ua("number"),to=t=>t!==null&&typeof t=="object",Xv=t=>t===!0||t===!1,Xo=t=>{if(Na(t)!=="object")return!1;const e=Ia(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Gp in t)&&!(La in t)},qv=t=>{if(!to(t)||eo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},$v=Nn("Date"),jv=Nn("File"),Yv=t=>!!(t&&typeof t.uri<"u"),Kv=t=>t&&typeof t.getParts<"u",Zv=Nn("Blob"),Jv=Nn("FileList"),Qv=t=>to(t)&&cn(t.pipe);function ex(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Kf=ex(),Zf=typeof Kf.FormData<"u"?Kf.FormData:void 0,tx=t=>{if(!t)return!1;if(Zf&&t instanceof Zf)return!0;const e=Ia(t);if(!e||e===Object.prototype||!cn(t.append))return!1;const n=Na(t);return n==="formdata"||n==="object"&&cn(t.toString)&&t.toString()==="[object FormData]"},nx=Nn("URLSearchParams"),[ix,sx,rx,ox]=["ReadableStream","Request","Response","Headers"].map(Nn),ax=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function no(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),ur(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(eo(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Xp(t,e){if(eo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qp=t=>!tr(t)&&t!==ds;function ac(...t){const{caseless:e,skipUndefined:n}=qp(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&Xp(i,o)||o,l=lc(i,a)?i[a]:void 0;Xo(l)&&Xo(r)?i[a]=ac(l,r):Xo(r)?i[a]=ac({},r):ur(r)?i[a]=r.slice():(!n||!tr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++)t[r]&&no(t[r],s);return i}const lx=(t,e,n,{allOwnKeys:i}={})=>(no(e,(s,r)=>{n&&cn(s)?Object.defineProperty(t,r,{__proto__:null,value:zp(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),cx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ux=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},fx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ia(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},dx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},hx=t=>{if(!t)return null;if(ur(t))return t;let e=t.length;if(!Wp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},px=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ia(Uint8Array)),mx=(t,e)=>{const i=(t&&t[La]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},gx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},_x=Nn("HTMLFormElement"),vx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),lc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),xx=Nn("RegExp"),$p=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};no(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Sx=t=>{$p(t,(e,n)=>{if(cn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(cn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ex=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return ur(t)?i(t):i(String(t).split(e)),n},yx=()=>{},Mx=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function bx(t){return!!(t&&cn(t.append)&&t[Gp]==="FormData"&&t[La])}const Tx=t=>{const e=new Array(10),n=(i,s)=>{if(to(i)){if(e.indexOf(i)>=0)return;if(eo(i))return i;if(!("toJSON"in i)){e[s]=i;const r=ur(i)?[]:{};return no(i,(o,a)=>{const l=n(o,s+1);!tr(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return n(t,0)},Ax=Nn("AsyncFunction"),Rx=t=>t&&(to(t)||cn(t))&&cn(t.then)&&cn(t.catch),jp=((t,e)=>t?setImmediate:e?((n,i)=>(ds.addEventListener("message",({source:s,data:r})=>{s===ds&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),ds.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",cn(ds.postMessage)),wx=typeof queueMicrotask<"u"?queueMicrotask.bind(ds):typeof process<"u"&&process.nextTick||jp,Cx=t=>t!=null&&cn(t[La]),q={isArray:ur,isArrayBuffer:Hp,isBuffer:eo,isFormData:tx,isArrayBufferView:Hv,isString:Wv,isNumber:Wp,isBoolean:Xv,isObject:to,isPlainObject:Xo,isEmptyObject:qv,isReadableStream:ix,isRequest:sx,isResponse:rx,isHeaders:ox,isUndefined:tr,isDate:$v,isFile:jv,isReactNativeBlob:Yv,isReactNative:Kv,isBlob:Zv,isRegExp:xx,isFunction:cn,isStream:Qv,isURLSearchParams:nx,isTypedArray:px,isFileList:Jv,forEach:no,merge:ac,extend:lx,trim:ax,stripBOM:cx,inherits:ux,toFlatObject:fx,kindOf:Na,kindOfTest:Nn,endsWith:dx,toArray:hx,forEachEntry:mx,matchAll:gx,isHTMLForm:_x,hasOwnProperty:lc,hasOwnProp:lc,reduceDescriptors:$p,freezeMethods:Sx,toObjectSet:Ex,toCamelCase:vx,noop:yx,toFiniteNumber:Mx,findKey:Xp,global:ds,isContextDefined:qp,isSpecCompliantForm:bx,toJSONObject:Tx,isAsyncFn:Ax,isThenable:Rx,setImmediate:jp,asap:wx,isIterable:Cx},Px=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Dx=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&Px[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Jf=Symbol("internals"),Ix=/[^\x09\x20-\x7E\x80-\xFF]/g;function Lx(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function _r(t){return t&&String(t).trim().toLowerCase()}function Nx(t){return Lx(t.replace(Ix,""))}function qo(t){return t===!1||t==null?t:q.isArray(t)?t.map(qo):Nx(String(t))}function Ux(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Ox=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ol(t,e,n,i,s){if(q.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function Fx(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Bx(t,e){const n=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let rn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=_r(l);if(!u)throw new Error("header name must be a non-empty string");const f=q.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=qo(a))}const o=(a,l)=>q.forEach(a,(c,u)=>r(c,u,l));if(q.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(q.isString(e)&&(e=e.trim())&&!Ox(e))o(Dx(e),n);else if(q.isObject(e)&&q.isIterable(e)){let a={},l,c;for(const u of e){if(!q.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?q.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=_r(e),e){const i=q.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return Ux(s);if(q.isFunction(n))return n.call(this,s,i);if(q.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=_r(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ol(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=_r(o),o){const a=q.findKey(i,o);a&&(!n||ol(i,i[a],a,n))&&(delete i[a],s=!0)}}return q.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||ol(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return q.forEach(this,(s,r)=>{const o=q.findKey(i,r);if(o){n[o]=qo(s),delete n[r];return}const a=e?Fx(r):String(r).trim();a!==r&&delete n[r],n[a]=qo(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return q.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&q.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Jf]=this[Jf]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=_r(o);i[a]||(Bx(s,o),i[a]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}};rn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(rn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});q.freezeMethods(rn);const Vx="[REDACTED ****]";function kx(t){if(q.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(q.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function zx(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||q.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof rn&&(r=r.toJSON()),i.push(r);let o;if(q.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);q.isUndefined(c)||(o[l]=c)});else{if(!q.isPlainObject(r)&&kx(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?Vx:s(l);q.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Ue=class Yp extends Error{static from(e,n,i,s,r,o){const a=new Yp(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&q.hasOwnProp(e,"redact")?e.redact:void 0,i=q.isArray(n)&&n.length>0?zx(e,n):q.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ue.ERR_BAD_OPTION="ERR_BAD_OPTION";Ue.ECONNABORTED="ECONNABORTED";Ue.ETIMEDOUT="ETIMEDOUT";Ue.ECONNREFUSED="ECONNREFUSED";Ue.ERR_NETWORK="ERR_NETWORK";Ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ue.ERR_DEPRECATED="ERR_DEPRECATED";Ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ue.ERR_CANCELED="ERR_CANCELED";Ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ue.ERR_INVALID_URL="ERR_INVALID_URL";Ue.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Gx=null;function cc(t){return q.isPlainObject(t)||q.isArray(t)}function Kp(t){return q.endsWith(t,"[]")?t.slice(0,-2):t}function al(t,e,n){return t?t.concat(e).map(function(s,r){return s=Kp(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function Hx(t){return q.isArray(t)&&!t.some(cc)}const Wx=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Oa(t,e,n){if(!q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,p){return!q.isUndefined(p[h])});const i=n.metaTokens,s=n.visitor||f,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?100:n.maxDepth,c=a&&q.isSpecCompliantForm(e);if(!q.isFunction(s))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(q.isDate(v))return v.toISOString();if(q.isBoolean(v))return v.toString();if(!c&&q.isBlob(v))throw new Ue("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(v)||q.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,h,p){let S=v;if(q.isReactNative(e)&&q.isReactNativeBlob(v))return e.append(al(p,h,r),u(v)),!1;if(v&&!p&&typeof v=="object"){if(q.endsWith(h,"{}"))h=i?h:h.slice(0,-2),v=JSON.stringify(v);else if(q.isArray(v)&&Hx(v)||(q.isFileList(v)||q.endsWith(h,"[]"))&&(S=q.toArray(v)))return h=Kp(h),S.forEach(function(E,P){!(q.isUndefined(E)||E===null)&&e.append(o===!0?al([h],P,r):o===null?h:h+"[]",u(E))}),!1}return cc(v)?!0:(e.append(al(p,h,r),u(v)),!1)}const d=[],m=Object.assign(Wx,{defaultVisitor:f,convertValue:u,isVisitable:cc});function g(v,h,p=0){if(!q.isUndefined(v)){if(p>l)throw new Ue("Object is too deeply nested ("+p+" levels). Max depth: "+l,Ue.ERR_FORM_DATA_DEPTH_EXCEEDED);if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(v),q.forEach(v,function(T,E){(!(q.isUndefined(T)||T===null)&&s.call(e,T,q.isString(E)?E.trim():E,h,m))===!0&&g(T,h?h.concat(E):[E],p+1)}),d.pop()}}if(!q.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Qf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function bu(t,e){this._pairs=[],t&&Oa(t,this,e)}const Zp=bu.prototype;Zp.append=function(e,n){this._pairs.push([e,n])};Zp.toString=function(e){const n=e?function(i){return e.call(this,i,Qf)}:Qf;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Xx(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Jp(t,e,n){if(!e)return t;const i=n&&n.encode||Xx,s=q.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=q.isURLSearchParams(e)?e.toString():new bu(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class ed{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Tu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},qx=typeof URLSearchParams<"u"?URLSearchParams:bu,$x=typeof FormData<"u"?FormData:null,jx=typeof Blob<"u"?Blob:null,Yx={isBrowser:!0,classes:{URLSearchParams:qx,FormData:$x,Blob:jx},protocols:["http","https","file","blob","url","data"]},Au=typeof window<"u"&&typeof document<"u",uc=typeof navigator=="object"&&navigator||void 0,Kx=Au&&(!uc||["ReactNative","NativeScript","NS"].indexOf(uc.product)<0),Zx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Jx=Au&&window.location.href||"http://localhost",Qx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Au,hasStandardBrowserEnv:Kx,hasStandardBrowserWebWorkerEnv:Zx,navigator:uc,origin:Jx},Symbol.toStringTag,{value:"Module"})),qt={...Qx,...Yx};function eS(t,e){return Oa(t,new qt.classes.URLSearchParams,{visitor:function(n,i,s,r){return qt.isNode&&q.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function tS(t){return q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function nS(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Qp(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&q.isArray(s)?s.length:o,l?(q.hasOwnProp(s,o)?s[o]=q.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!s[o]||!q.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&q.isArray(s[o])&&(s[o]=nS(s[o])),!a)}if(q.isFormData(t)&&q.isFunction(t.entries)){const n={};return q.forEachEntry(t,(i,s)=>{e(tS(i),s,n,0)}),n}return null}const Rs=(t,e)=>t!=null&&q.hasOwnProp(t,e)?t[e]:void 0;function iS(t,e,n){if(q.isString(t))try{return(e||JSON.parse)(t),q.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const io={transitional:Tu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=q.isObject(e);if(r&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return s?JSON.stringify(Qp(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Rs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return eS(e,l).toString();if((a=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Rs(this,"env"),u=c&&c.FormData;return Oa(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),iS(e)):e}],transformResponse:[function(e){const n=Rs(this,"transitional")||io.transitional,i=n&&n.forcedJSONParsing,s=Rs(this,"responseType"),r=s==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Rs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Ue.from(l,Ue.ERR_BAD_RESPONSE,this,null,Rs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch","query"],t=>{io.headers[t]={}});function ll(t,e){const n=this||io,i=e||n,s=rn.from(i.headers);let r=i.data;return q.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function em(t){return!!(t&&t.__CANCEL__)}let so=class extends Ue{constructor(e,n,i){super(e??"canceled",Ue.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function tm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ue("Request failed with status code "+n.status,n.status>=400&&n.status<500?Ue.ERR_BAD_REQUEST:Ue.ERR_BAD_RESPONSE,n.config,n.request,n))}function sS(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function rS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(d*1e3/m):void 0}}function oS(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const ca=(t,e,n=3)=>{let i=0;const s=rS(50,250);return oS(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},td=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},nd=t=>(...e)=>q.asap(()=>t(...e)),aS=qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(qt.origin),qt.navigator&&/(msie|trident)/i.test(qt.navigator.userAgent)):()=>!0,lS=qt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];q.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),q.isString(i)&&a.push(`path=${i}`),q.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),q.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)return decodeURIComponent(i.slice(s+1))}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function cS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function uS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function nm(t,e,n){let i=!cS(e);return t&&(i||n===!1)?uS(t,e):e}const id=t=>t instanceof rn?{...t}:t;function Ss(t,e){e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(c,u,f,d){return q.isPlainObject(c)&&q.isPlainObject(u)?q.merge.call({caseless:d},c,u):q.isPlainObject(u)?q.merge({},u):q.isArray(u)?u.slice():u}function s(c,u,f,d){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function r(c,u){if(!q.isUndefined(u))return i(void 0,u)}function o(c,u){if(q.isUndefined(u)){if(!q.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(q.hasOwnProp(e,f))return i(c,u);if(q.hasOwnProp(t,f))return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>s(id(c),id(u),f,!0)};return q.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=q.hasOwnProp(l,u)?l[u]:s,d=q.hasOwnProp(t,u)?t[u]:void 0,m=q.hasOwnProp(e,u)?e[u]:void 0,g=f(d,m,u);q.isUndefined(g)&&f!==a||(n[u]=g)}),n}const fS=["content-type","content-length"];function dS(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e).forEach(([i,s])=>{fS.includes(i.toLowerCase())&&t.set(i,s)})}const hS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),im=t=>{const e=Ss({},t),n=d=>q.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=rn.from(a),e.url=Jp(nm(c,f,u),t.params,t.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?hS(l.password):""))),q.isFormData(i)&&(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv?a.setContentType(void 0):q.isFunction(i.getHeaders)&&dS(a,i.getHeaders(),n("formDataHeaderPolicy"))),qt.hasStandardBrowserEnv&&(q.isFunction(s)&&(s=s(e)),s===!0||s==null&&aS(e.url))){const m=r&&o&&lS.read(o);m&&a.set(r,m)}return e},pS=typeof XMLHttpRequest<"u",mS=pS&&function(t){return new Promise(function(n,i){const s=im(t);let r=s.data;const o=rn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,m,g;function v(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function p(){if(!h)return;const T=rn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),P={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:T,config:t,request:h};tm(function(L){n(L),v()},function(L){i(L),v()},P),h=null}"onloadend"in h?h.onloadend=p:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith("file:"))||setTimeout(p)},h.onabort=function(){h&&(i(new Ue("Request aborted",Ue.ECONNABORTED,t,h)),v(),h=null)},h.onerror=function(E){const P=E&&E.message?E.message:"Network Error",D=new Ue(P,Ue.ERR_NETWORK,t,h);D.event=E||null,i(D),v(),h=null},h.ontimeout=function(){let E=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||Tu;s.timeoutErrorMessage&&(E=s.timeoutErrorMessage),i(new Ue(E,P.clarifyTimeoutError?Ue.ETIMEDOUT:Ue.ECONNABORTED,t,h)),v(),h=null},r===void 0&&o.setContentType(null),"setRequestHeader"in h&&q.forEach(o.toJSON(),function(E,P){h.setRequestHeader(P,E)}),q.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),a&&a!=="json"&&(h.responseType=s.responseType),c&&([d,g]=ca(c,!0),h.addEventListener("progress",d)),l&&h.upload&&([f,m]=ca(l),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=T=>{h&&(i(!T||T.type?new so(null,t,h):T),h.abort(),v(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=sS(s.url);if(S&&!qt.protocols.includes(S)){i(new Ue("Unsupported protocol "+S+":",Ue.ERR_BAD_REQUEST,t));return}h.send(r||null)})},gS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ue?u:new so(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Ue(`timeout of ${e}ms exceeded`,Ue.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),t=null)};t.forEach(c=>c.addEventListener("abort",r));const{signal:l}=i;return l.unsubscribe=()=>q.asap(a),l}},_S=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},vS=async function*(t,e){for await(const n of xS(t))yield*_S(n,e)},xS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},sd=(t,e,n,i)=>{const s=vS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})};function SS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let m=0;m<a;m++)if(i.charCodeAt(m)===37&&m+2<a){const g=i.charCodeAt(m+1),v=i.charCodeAt(m+2);(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102)&&(v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102)&&(o-=2,m+=2)}let l=0,c=a-1;const u=m=>m>=2&&i.charCodeAt(m-2)===37&&i.charCodeAt(m-1)===51&&(i.charCodeAt(m)===68||i.charCodeAt(m)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(i,"utf8");let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const Ru="1.16.0",rd=64*1024,{isFunction:go}=q,od=(t,...e)=>{try{return!!t(...e)}catch{return!1}},ES=t=>{const e=q.global??globalThis,{ReadableStream:n,TextEncoder:i}=e;t=q.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?go(s):typeof fetch=="function",l=go(r),c=go(o);if(!a)return!1;const u=a&&go(n),f=a&&(typeof i=="function"?(p=>S=>p.encode(S))(new i):async p=>new Uint8Array(await new r(p).arrayBuffer())),d=l&&u&&od(()=>{let p=!1;const S=new r(qt.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),T=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),p&&!T}),m=c&&u&&od(()=>q.isReadableStream(new o("").body)),g={stream:m&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!g[p]&&(g[p]=(S,T)=>{let E=S&&S[p];if(E)return E.call(S);throw new Ue(`Response type '${p}' is not supported`,Ue.ERR_NOT_SUPPORT,T)})});const v=async p=>{if(p==null)return 0;if(q.isBlob(p))return p.size;if(q.isSpecCompliantForm(p))return(await new r(qt.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(q.isArrayBufferView(p)||q.isArrayBuffer(p))return p.byteLength;if(q.isURLSearchParams(p)&&(p=p+""),q.isString(p))return(await f(p)).byteLength},h=async(p,S)=>{const T=q.toFiniteNumber(p.getContentLength());return T??v(S)};return async p=>{let{url:S,method:T,data:E,signal:P,cancelToken:D,timeout:L,onDownloadProgress:x,onUploadProgress:M,responseType:V,headers:w,withCredentials:z="same-origin",fetchOptions:G,maxContentLength:Q,maxBodyLength:X}=im(p);const W=q.isNumber(Q)&&Q>-1,N=q.isNumber(X)&&X>-1;let ae=s||fetch;V=V?(V+"").toLowerCase():"text";let ce=gS([P,D&&D.toAbortSignal()],L),me=null;const ye=ce&&ce.unsubscribe&&(()=>{ce.unsubscribe()});let _e;try{if(W&&typeof S=="string"&&S.startsWith("data:")&&SS(S)>Q)throw new Ue("maxContentLength size of "+Q+" exceeded",Ue.ERR_BAD_RESPONSE,p,me);if(N&&T!=="get"&&T!=="head"){const H=await h(w,E);if(typeof H=="number"&&isFinite(H)&&H>X)throw new Ue("Request body larger than maxBodyLength limit",Ue.ERR_BAD_REQUEST,p,me)}if(M&&d&&T!=="get"&&T!=="head"&&(_e=await h(w,E))!==0){let H=new r(S,{method:"POST",body:E,duplex:"half"}),le;if(q.isFormData(E)&&(le=H.headers.get("content-type"))&&w.setContentType(le),H.body){const[de,Se]=td(_e,ca(nd(M)));E=sd(H.body,rd,de,Se)}}q.isString(z)||(z=z?"include":"omit");const De=l&&"credentials"in r.prototype;if(q.isFormData(E)){const H=w.getContentType();H&&/^multipart\/form-data/i.test(H)&&!/boundary=/i.test(H)&&w.delete("content-type")}w.set("User-Agent","axios/"+Ru,!1);const Xe={...G,signal:ce,method:T.toUpperCase(),headers:w.normalize().toJSON(),body:E,duplex:"half",credentials:De?z:void 0};me=l&&new r(S,Xe);let Ge=await(l?ae(me,G):ae(S,Xe));if(W){const H=q.toFiniteNumber(Ge.headers.get("content-length"));if(H!=null&&H>Q)throw new Ue("maxContentLength size of "+Q+" exceeded",Ue.ERR_BAD_RESPONSE,p,me)}const ie=m&&(V==="stream"||V==="response");if(m&&Ge.body&&(x||W||ie&&ye)){const H={};["status","statusText","headers"].forEach(F=>{H[F]=Ge[F]});const le=q.toFiniteNumber(Ge.headers.get("content-length")),[de,Se]=x&&td(le,ca(nd(x),!0))||[];let R=0;const C=F=>{if(W&&(R=F,R>Q))throw new Ue("maxContentLength size of "+Q+" exceeded",Ue.ERR_BAD_RESPONSE,p,me);de&&de(F)};Ge=new o(sd(Ge.body,rd,C,()=>{Se&&Se(),ye&&ye()}),H)}V=V||"text";let U=await g[q.findKey(g,V)||"text"](Ge,p);if(W&&!m&&!ie){let H;if(U!=null&&(typeof U.byteLength=="number"?H=U.byteLength:typeof U.size=="number"?H=U.size:typeof U=="string"&&(H=typeof i=="function"?new i().encode(U).byteLength:U.length)),typeof H=="number"&&H>Q)throw new Ue("maxContentLength size of "+Q+" exceeded",Ue.ERR_BAD_RESPONSE,p,me)}return!ie&&ye&&ye(),await new Promise((H,le)=>{tm(H,le,{data:U,headers:rn.from(Ge.headers),status:Ge.status,statusText:Ge.statusText,config:p,request:me})})}catch(De){if(ye&&ye(),ce&&ce.aborted&&ce.reason instanceof Ue){const Xe=ce.reason;throw Xe.config=p,me&&(Xe.request=me),De!==Xe&&(Xe.cause=De),Xe}throw De&&De.name==="TypeError"&&/Load failed|fetch/i.test(De.message)?Object.assign(new Ue("Network Error",Ue.ERR_NETWORK,p,me,De&&De.response),{cause:De.cause||De}):Ue.from(De,De&&De.code,p,me,De&&De.response)}}},yS=new Map,sm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=yS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:ES(e)),u=c;return c};sm();const wu={http:Gx,xhr:mS,fetch:{get:sm}};q.forEach(wu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const ad=t=>`- ${t}`,MS=t=>q.isFunction(t)||t===null||t===!1;function bS(t,e){t=q.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!MS(i)&&(s=wu[(a=String(i)).toLowerCase()],s===void 0))throw new Ue(`Unknown adapter '${a}'`);if(s&&(q.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(ad).join(`
`):" "+ad(o[0]):"as no adapter specified";throw new Ue("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const rm={getAdapter:bS,adapters:wu};function cl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new so(null,t)}function ld(t){return cl(t),t.headers=rn.from(t.headers),t.data=ll.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),rm.getAdapter(t.adapter||io.adapter,t)(t).then(function(i){cl(t),t.response=i;try{i.data=ll.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=rn.from(i.headers),i},function(i){if(!em(i)&&(cl(t),i&&i.response)){t.response=i.response;try{i.response.data=ll.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=rn.from(i.response.headers)}return Promise.reject(i)})}const Fa={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Fa[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const cd={};Fa.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Ru+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ue(s(o," has been removed"+(n?" in "+n:"")),Ue.ERR_DEPRECATED);return n&&!cd[o]&&(cd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Fa.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function TS(t,e,n){if(typeof t!="object")throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Ue("option "+r+" must be "+l,Ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ue("Unknown option "+r,Ue.ERR_BAD_OPTION)}}const $o={assertOptions:TS,validators:Fa},xn=$o.validators;let vs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ed,response:new ed}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ss(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&$o.assertOptions(i,{silentJSONParsing:xn.transitional(xn.boolean),forcedJSONParsing:xn.transitional(xn.boolean),clarifyTimeoutError:xn.transitional(xn.boolean),legacyInterceptorReqResOrdering:xn.transitional(xn.boolean)},!1),s!=null&&(q.isFunction(s)?n.paramsSerializer={serialize:s}:$o.assertOptions(s,{encode:xn.function,serialize:xn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),$o.assertOptions(n,{baseUrl:xn.spelling("baseURL"),withXsrfToken:xn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&q.merge(r.common,r[n.method]);r&&q.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=rn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;l=l&&v.synchronous;const h=n.transitional||Tu;h&&h.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[ld.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let m=n;for(;f<d;){const g=a[f++],v=a[f++];try{m=g(m)}catch(h){v.call(this,h);break}}try{u=ld.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Ss(this.defaults,e);const n=nm(e.baseURL,e.url,e.allowAbsoluteUrls);return Jp(n,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){vs.prototype[e]=function(n,i){return this.request(Ss(i||{},{method:e,url:n,data:(i||{}).data}))}});q.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Ss(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}vs.prototype[e]=n(),e!=="query"&&(vs.prototype[e+"Form"]=n(!0))});let AS=class om{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new so(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new om(function(s){e=s}),cancel:e}}};function RS(t){return function(n){return t.apply(null,n)}}function wS(t){return q.isObject(t)&&t.isAxiosError===!0}const fc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(fc).forEach(([t,e])=>{fc[e]=t});function am(t){const e=new vs(t),n=zp(vs.prototype.request,e);return q.extend(n,vs.prototype,e,{allOwnKeys:!0}),q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return am(Ss(t,s))},n}const wt=am(io);wt.Axios=vs;wt.CanceledError=so;wt.CancelToken=AS;wt.isCancel=em;wt.VERSION=Ru;wt.toFormData=Oa;wt.AxiosError=Ue;wt.Cancel=wt.CanceledError;wt.all=function(e){return Promise.all(e)};wt.spread=RS;wt.isAxiosError=wS;wt.mergeConfig=Ss;wt.AxiosHeaders=rn;wt.formToJSON=t=>Qp(q.isHTMLForm(t)?new FormData(t):t);wt.getAdapter=rm.getAdapter;wt.HttpStatusCode=fc;wt.default=wt;const{Axios:bC,AxiosError:TC,CanceledError:AC,isCancel:RC,CancelToken:wC,VERSION:CC,all:PC,Cancel:DC,isAxiosError:IC,spread:LC,toFormData:NC,AxiosHeaders:UC,HttpStatusCode:OC,formToJSON:FC,getAdapter:BC,mergeConfig:VC,create:kC}=wt;function CS(){var t;return((t=Wr())==null?void 0:t.VITE_APP_PROFILE)??"dev"}const ud=CS(),fd={debug:10,info:20,warn:30,error:40},PS={dev:"debug",staging:"info",prod:"warn"};class Cu{constructor(e={}){this.context=e}child(e){return new Cu({...this.context,...e})}shouldLog(e){const n=PS[ud];return fd[e]>=fd[n]}log(e,n,i){if(!this.shouldLog(e))return;const s={level:e,message:n,timestamp:new Date().toISOString(),env:ud,...this.context,data:i};console[e](s)}debug(e,n){this.log("debug",e,n)}info(e,n){this.log("info",e,n)}warn(e,n){this.log("warn",e,n)}error(e,n){this.log("error",e,n)}}const ro=new Cu,js=ro.child({scope:"featureFlags"}),ua={dev:"http://localhost:8080/api/v1",staging:"http://localhost:8080/api/v1",prod:"http://13.48.129.233:8080/api/v1"},dd=t=>localStorage.getItem(t);let as=null;async function hd(t){try{const e=new AbortController,n=setTimeout(()=>e.abort(),2500);return await fetch(`${t}/gateway/docs`,{signal:e.signal,method:"GET"}),clearTimeout(n),js.info(`[staging] Reachable via Tailscale: ${t}`),!0}catch{return js.error(`[staging] Unreachable via Tailscale: ${t}`),!1}}async function DS(){const t=Wr(),e=t.VITE_APP_PROFILE;if(e==="prod")return ua.prod;if(e==="staging")return ua.staging;if(as)return as;const n=t.VITE_STAGING_TAILSCALE_IP,i=t.VITE_STAGING_LOCAL_IP,s=`http://${n}:8080/api/v1`,r=`http://${i}:8080/api/v1`;return n&&await hd(s)?(js.info("[staging] Reachable via Tailscale:",s),as=s):i&&await hd(r)?(js.info("[staging] Tailscale failed, using local IP:",s),as=r):(js.warn("[staging] Both Tailscale and local unreachable or not configured. Defaulting to Tailscale."),as=s),as}const lm={async getServiceUrl(t){const e=Wr(),n=`VITE_FF_SERVICE_${t.toUpperCase()}`,i=`ff_service_${t.toLowerCase()}`,s=e.VITE_APP_PROFILE,r=dd(i)||e[n],o=(s==="dev"?r||"dev":s)||"dev";let a;return o==="staging"?a=await DS():o==="prod"?a=ua.prod:a=e.VITE_API_BASE_URL||ua.dev,a.replace(/\/$/,"")+"/"},isEnabled(t,e=!1){const n=Wr(),i=`VITE_FF_${t.toUpperCase()}`,s=`ff_${t.toLowerCase()}`,r=dd(s);if(r!==null)return r==="true";const o=n[i];return o!==void 0?o==="true":(js.info(`[${t}] Default value: ${e}`),e)},setOverride(t,e){const n=`ff_${t.toLowerCase()}`;e===null?localStorage.removeItem(n):localStorage.setItem(n,String(e))},resetStagingCache(){as=null}},pd=ro.child({scope:"api-client"}),$t=wt.create({headers:{"Content-Type":"application/json","X-Request-Source":"web-gamelift"}});$t.interceptors.request.use(async t=>{if(t.url&&t.url.startsWith("/")&&!t.url.startsWith("//")){const n=t.url.split("/")[1]||"default";t.baseURL=(await lm.getServiceUrl(n)).replace(/\/$/,"")}const e=nr();return e.token&&(t.headers.Authorization=`Bearer ${e.token}`),t},t=>Promise.reject(t));$t.interceptors.response.use(t=>t,t=>{var e;return((e=t.response)==null?void 0:e.status)===401&&nr().logout(),Promise.reject(t)});$t.stream=async(t,e)=>{const n=t.startsWith("/")?t.split("/")[1]??"default":"default",i=(await lm.getServiceUrl(n)).replace(/\/$/,""),s=nr(),r={"Content-Type":"application/json"};pd.info("this is the authorizationtoken: ",s.token),s.token&&(r.Authorization=`Bearer ${s.token}`,pd.info("this is the authorizationtoken: ",s.token),r["X-Request-Source"]="web-gamelift");const o=await fetch(`${i}${t}`,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0});if(o.status===401)throw nr().logout(),new Error("Unauthorized");if(!o.ok)throw new Error(`HTTP error: ${o.status}`);if(!o.body)throw new Error("ReadableStream not supported in this browser");return o.body.getReader()};const bn=ro.child({scope:"auth"}),nr=C0("auth",()=>{const t=tt(localStorage.getItem("auth_token")),e=tt(localStorage.getItem("auth_email")),n=tt(!1),i=tt(null),s=tt(null),r=tt(!1),o=tn(()=>{var h;return((h=s.value)==null?void 0:h.emailVerified)||!1});async function a(){const h=localStorage.getItem("token");h?(t.value=h,n.value=localStorage.getItem("auth_reg_complete_")==="true",i.value=!0):(i.value=!1,bn.info("No session found."))}function l(){t.value=null,e.value=null,s.value=null,n.value=!1,i.value=!1,localStorage.removeItem("auth_token"),localStorage.removeItem("auth_email")}async function c(h){try{const p=await $t.post("auth/payment/verify",h);return bn.info("Payment verified:",p.data),p.data}catch(p){throw bn.error("Payment verification failed:",p),p}}async function u(h){try{r.value=!0;const p=await $t.get("auth/verify-email",{params:{token:h}});return s.value&&(s.value.emailVerified=!0),bn.info("Email verified:",p.data),p.data}catch(p){throw bn.error("Email verification failed:",p),p}finally{r.value=!1}}async function f(h){const S=(await $t.post("/auth/register",h)).data.data;return d({...S,email:S.email||h.email}),bn.info("User registered:",S),S}function d(h){console.log("Setting session with data:",h),t.value=h.token||h.accessToken||h.auth_token||h.jwt||h.id_token,e.value=h.email,h.registrationComplete!==void 0?n.value=h.registrationComplete:e.value&&(n.value=localStorage.getItem(`auth_reg_complete_${e.value}`)==="true"),localStorage.setItem("auth_token",t.value||""),localStorage.setItem("auth_email",e.value||""),e.value&&n.value&&localStorage.setItem(`auth_reg_complete_${e.value}`,"true"),bn.info("Session set:",h),i.value=!!t.value}function m(){bn.info("Redirecting to Google OAuth...")}async function g(h){try{bn.info("Attempting login for:",h.email);const S=(await $t.post("/auth/login",h)).data.data;return d({...S,email:S.email||h.email}),S}catch(p){throw console.error("Login failed:",p),p}}async function v(h){try{const p=await $t.post("auth/forgot-password",h);return bn.info("Forgot password request sent:",p.data),p.data}catch(p){throw bn.error("Forgot password request failed:",p),p}}return{token:t,email:e,user:s,registrationComplete:n,isAuthenticated:i,loading:r,emailVerified:o,initAuth:a,login:g,forgotPassword:v,register:f,verifyPayment:c,verifyEmail:u,loginWithGoogle:m,logout:l}});function IS(t){var e;return((e=t.data)==null?void 0:e.data)??t.data}async function LS(){const t=await $t.get("/gamelift/games");return IS(t)}const NS={class:"details-page"},US={class:"top-nav overlay-nav"},OS={class:"nav-links"},FS={class:"nav-actions"},BS={class:"details-content"},VS={key:0,class:"dash-state"},kS={key:1,class:"dash-state"},zS={class:"details-container"},GS={class:"poster-sidebar"},HS={class:"hero-content"},WS={class:"hero-title"},XS={__name:"GameDetails",setup(t){const e=Da(),n=cr(),i=e.params.id,s=tt(null),r=tt(!0),o=tt("");async function a(){r.value=!0,o.value="";try{const u=(await LS()).find(f=>f.id===Number(i)||f.id===i);u?s.value=u:o.value="Workload not found or access restricted."}catch{o.value="Failed to fetch game metadata."}finally{r.value=!1}}function l(){n.push(`/game/${i}`)}return Jr(a),(c,u)=>{const f=Yi("router-link");return et(),nt("div",NS,[O("header",US,[u[3]||(u[3]=O("div",{class:"brand"},[O("span",{class:"logo-mark"},"[S]"),He(),O("span",{class:"logo-text"},"Serwin Games")],-1)),O("nav",OS,[lt(f,{to:"/home",class:"nav-item"},{default:Ot(()=>[...u[0]||(u[0]=[He("Library",-1)])]),_:1}),u[1]||(u[1]=O("span",{class:"nav-item active"},"Game Details",-1))]),O("div",FS,[lt(f,{to:"/home",class:"nav-item"},{default:Ot(()=>[...u[2]||(u[2]=[He("← BACK TO LIBRARY",-1)])]),_:1})])]),O("main",BS,[r.value?(et(),nt("div",VS,[...u[4]||(u[4]=[O("div",{class:"loader"},null,-1),O("p",null,"Loading game profile...",-1)])])):o.value?(et(),nt("div",kS,[O("p",null,sn(o.value),1),lt(f,{to:"/home",class:"retry-btn",style:{"text-decoration":"none"}},{default:Ot(()=>[...u[5]||(u[5]=[He("RETURN TO LIBRARY",-1)])]),_:1})])):s.value?(et(),nt("section",{key:2,class:"details-hero",style:xs({backgroundImage:`url(https://picsum.photos/seed/${s.value.id}/1920/1080)`})},[u[10]||(u[10]=O("div",{class:"hero-vignette"},null,-1)),O("div",zS,[O("div",GS,[O("div",{class:"poster",style:xs({backgroundImage:`url(https://picsum.photos/seed/${s.value.id}/600/900)`})},null,4)]),O("div",HS,[O("h1",WS,sn(s.value.game_name),1),u[8]||(u[8]=Xi('<div class="hero-meta" data-v-f62ee74f><span class="meta-tag match" data-v-f62ee74f>98% COMPATIBILITY</span><span class="meta-tag year" data-v-f62ee74f>2026</span><span class="meta-tag rating" data-v-f62ee74f>RESTRICTED</span><span class="meta-tag resolution" data-v-f62ee74f>4K HDR</span></div><p class="hero-desc" data-v-f62ee74f> Dive into a vast open world filled with mysteries. Build your character, forge alliances, and shape the destiny of the realm. Your journey awaits. </p>',2)),O("div",{class:"hero-actions"},[O("button",{class:"btn-primary",onClick:l},[...u[6]||(u[6]=[O("span",{class:"icon"},"▶",-1),He(" PLAY ",-1)])]),u[7]||(u[7]=O("button",{class:"btn-secondary"},[He(" ADD TO WISHLIST "),O("span",{class:"arrow"},"+")],-1))]),u[9]||(u[9]=Xi('<div class="tech-specs" data-v-f62ee74f><div class="spec-col" data-v-f62ee74f><h4 data-v-f62ee74f>TIME PLAYED</h4><p data-v-f62ee74f>45 HOURS</p></div><div class="spec-col" data-v-f62ee74f><h4 data-v-f62ee74f>ACHIEVEMENTS</h4><p data-v-f62ee74f>12 / 50 UNLOCKED</p></div><div class="spec-col" data-v-f62ee74f><h4 data-v-f62ee74f>LAST SAVED</h4><p class="t-green" data-v-f62ee74f>The Shattered Peaks</p></div></div>',1))])])],4)):Kn("",!0)])])}}},qS=Ln(XS,[["__scopeId","data-v-f62ee74f"]]);let Qt=null;function $S(t="ws://localhost:8080/api/v1/ws"){if(t="ws://localhost:8080/api/v1/ws",Qt){try{Qt.close(1e3,"reconnecting")}catch{}Qt=null}console.log("this is the base url: ",t);const n=localStorage.getItem("token"),i=n?`${t}?token=${n}`:t;return Qt=new WebSocket(i),Qt.addEventListener("open",()=>{console.log("[WS] Connected")}),Qt.addEventListener("close",s=>{console.log(`[WS] Disconnected (code: ${s.code}, reason: ${s.reason||"none"})`)}),Qt.addEventListener("error",s=>{console.error("[WS] Error:",s)}),Qt.addEventListener("message",s=>{try{const r=JSON.parse(s.data);switch(r.type){case"game_ready":console.log("[WS] game ready, session:",r.session_id);break;case"game_state":console.log("[GODOT STATE]",r.data);break;case"game_closed":console.warn("[WS] game closed:",r.reason);break}}catch{}}),Qt}function ul(t){Qt&&Qt.readyState===WebSocket.OPEN&&Qt.send(JSON.stringify(t))}function jS(){if(Qt){try{Qt.close(1e3,"user left")}catch{}Qt=null}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="183",YS=0,md=1,KS=2,jo=1,ZS=2,Ar=3,ji=0,un=1,_i=2,Si=0,Ys=1,gd=2,_d=3,vd=4,JS=5,cs=100,QS=101,eE=102,tE=103,nE=104,iE=200,sE=201,rE=202,oE=203,dc=204,hc=205,aE=206,lE=207,cE=208,uE=209,fE=210,dE=211,hE=212,pE=213,mE=214,pc=0,mc=1,gc=2,ir=3,_c=4,vc=5,xc=6,Sc=7,cm=0,gE=1,_E=2,Zn=0,um=1,fm=2,dm=3,hm=4,pm=5,mm=6,gm=7,_m=300,Es=301,sr=302,fl=303,dl=304,Ba=306,Ec=1e3,vi=1001,yc=1002,Bt=1003,vE=1004,_o=1005,jt=1006,hl=1007,hs=1008,mn=1009,vm=1010,xm=1011,qr=1012,Du=1013,ni=1014,$n=1015,Ai=1016,Iu=1017,Lu=1018,$r=1020,Sm=35902,Em=35899,ym=1021,Mm=1022,Cn=1023,Ri=1026,ps=1027,bm=1028,Nu=1029,rr=1030,Uu=1031,Ou=1033,Yo=33776,Ko=33777,Zo=33778,Jo=33779,Mc=35840,bc=35841,Tc=35842,Ac=35843,Rc=36196,wc=37492,Cc=37496,Pc=37488,Dc=37489,Ic=37490,Lc=37491,Nc=37808,Uc=37809,Oc=37810,Fc=37811,Bc=37812,Vc=37813,kc=37814,zc=37815,Gc=37816,Hc=37817,Wc=37818,Xc=37819,qc=37820,$c=37821,jc=36492,Yc=36494,Kc=36495,Zc=36283,Jc=36284,Qc=36285,eu=36286,xE=3200,SE=0,EE=1,Wi="",pn="srgb",or="srgb-linear",fa="linear",pt="srgb",ws=7680,xd=519,yE=512,ME=513,bE=514,Fu=515,TE=516,AE=517,Bu=518,RE=519,Sd=35044,Ed="300 es",jn=2e3,jr=2001;function wE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function da(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CE(){const t=da("canvas");return t.style.display="block",t}const yd={};function Md(...t){const e="THREE."+t.shift();console.log(e,...t)}function Tm(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function $e(...t){t=Tm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=Tm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ha(...t){const e=t.join(" ");e in yd||(yd[e]=!0,$e(...t))}function PE(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const DE={[pc]:mc,[gc]:xc,[_c]:Sc,[ir]:vc,[mc]:pc,[xc]:gc,[Sc]:_c,[vc]:ir};class fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,tu=180/Math.PI;function oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function IE(t,e){return(t%e+e)%e}function ml(t,e,n){return(1-n)*t+n*e}function vr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||l!==d||c!==m||u!==g){let h=l*d+c*m+u*g+f*v;h<0&&(d=-d,m=-m,g=-g,v=-v,h=-h);let p=1-a;if(h<.9995){const S=Math.acos(h),T=Math.sin(S);p=Math.sin(p*S)/T,a=Math.sin(a*S)/T,l=l*p+d*a,c=c*p+m*a,u=u*p+g*a,f=f*p+v*a}else{l=l*p+d*a,c=c*p+m*a,u=u*p+g*a,f=f*p+v*a;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*m-c*d,e[n+1]=l*g+u*d+c*f-a*m,e[n+2]=c*g+u*m+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gl=new Z,bd=new dr;class Ze{constructor(e,n,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],v=s[0],h=s[3],p=s[6],S=s[1],T=s[4],E=s[7],P=s[2],D=s[5],L=s[8];return r[0]=o*v+a*S+l*P,r[3]=o*h+a*T+l*D,r[6]=o*p+a*E+l*L,r[1]=c*v+u*S+f*P,r[4]=c*h+u*T+f*D,r[7]=c*p+u*E+f*L,r[2]=d*v+m*S+g*P,r[5]=d*h+m*T+g*D,r[8]=d*p+m*E+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,m=c*r-o*l,g=n*f+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_l.makeScale(e,n)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,n){return this.premultiply(_l.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new Ze,Td=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LE(){const t={enabled:!0,workingColorSpace:or,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[or]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}const st=LE();function Ei(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cs;class NE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=da("canvas")),Cs.width=e.width,Cs.height=e.height;const s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=da("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ei(n[i]/255)*255):n[i]=Ei(n[i]);return{data:n,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UE=0;class Vu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vl(s[o].image)):r.push(vl(s[o]))}else r=vl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function vl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?NE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let OE=0;const xl=new Z;class on extends fr{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=vi,s=vi,r=jt,o=hs,a=Cn,l=mn,c=on.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=oo(),this.name="",this.source=new Vu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){$e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){$e(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=_m;on.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],v=l[2],h=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,E=(m+1)/2,P=(p+1)/2,D=(u+d)/4,L=(f+v)/4,x=(g+h)/4;return T>E&&T>P?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=D/i,r=L/i):E>P?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=x/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=x/r),this.set(i,s,r,n),this}let S=Math.sqrt((h-g)*(h-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(h-g)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FE extends fr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new on(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Vu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends FE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Am extends on{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends on{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e,n,i,s,r,o,a,l,c,u,f,d,m,g,v,h){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,m,g,v,h)}set(e,n,i,s,r,o,a,l,c,u,f,d,m,g,v,h){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=m,p[7]=g,p[11]=v,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-m,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=m*f-g,n[2]=g*f-m,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VE,e,kE)}lookAt(e,n,i){const s=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ui.crossVectors(i,dn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ui.crossVectors(i,dn)),Ui.normalize(),vo.crossVectors(dn,Ui),s[0]=Ui.x,s[4]=vo.x,s[8]=dn.x,s[1]=Ui.y,s[5]=vo.y,s[9]=dn.y,s[2]=Ui.z,s[6]=vo.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],v=i[6],h=i[10],p=i[14],S=i[3],T=i[7],E=i[11],P=i[15],D=s[0],L=s[4],x=s[8],M=s[12],V=s[1],w=s[5],z=s[9],G=s[13],Q=s[2],X=s[6],W=s[10],N=s[14],ae=s[3],ce=s[7],me=s[11],ye=s[15];return r[0]=o*D+a*V+l*Q+c*ae,r[4]=o*L+a*w+l*X+c*ce,r[8]=o*x+a*z+l*W+c*me,r[12]=o*M+a*G+l*N+c*ye,r[1]=u*D+f*V+d*Q+m*ae,r[5]=u*L+f*w+d*X+m*ce,r[9]=u*x+f*z+d*W+m*me,r[13]=u*M+f*G+d*N+m*ye,r[2]=g*D+v*V+h*Q+p*ae,r[6]=g*L+v*w+h*X+p*ce,r[10]=g*x+v*z+h*W+p*me,r[14]=g*M+v*G+h*N+p*ye,r[3]=S*D+T*V+E*Q+P*ae,r[7]=S*L+T*w+E*X+P*ce,r[11]=S*x+T*z+E*W+P*me,r[15]=S*M+T*G+E*N+P*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],v=e[7],h=e[11],p=e[15],S=l*m-c*d,T=a*m-c*f,E=a*d-l*f,P=o*m-c*u,D=o*d-l*u,L=o*f-a*u;return n*(v*S-h*T+p*E)-i*(g*S-h*P+p*D)+s*(g*T-v*P+p*L)-r*(g*E-v*D+h*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],v=e[13],h=e[14],p=e[15],S=n*a-i*o,T=n*l-s*o,E=n*c-r*o,P=i*l-s*a,D=i*c-r*a,L=s*c-r*l,x=u*v-f*g,M=u*h-d*g,V=u*p-m*g,w=f*h-d*v,z=f*p-m*v,G=d*p-m*h,Q=S*G-T*z+E*w+P*V-D*M+L*x;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/Q;return e[0]=(a*G-l*z+c*w)*X,e[1]=(s*z-i*G-r*w)*X,e[2]=(v*L-h*D+p*P)*X,e[3]=(d*D-f*L-m*P)*X,e[4]=(l*V-o*G-c*M)*X,e[5]=(n*G-s*V+r*M)*X,e[6]=(h*E-g*L-p*T)*X,e[7]=(u*L-d*E+m*T)*X,e[8]=(o*z-a*V+c*x)*X,e[9]=(i*V-n*z-r*x)*X,e[10]=(g*D-v*E+p*S)*X,e[11]=(f*E-u*D-m*S)*X,e[12]=(a*M-o*w-l*x)*X,e[13]=(n*w-i*M+s*x)*X,e[14]=(v*T-g*P-h*S)*X,e[15]=(u*P-f*T+d*S)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,m=r*u,g=r*f,v=o*u,h=o*f,p=a*f,S=l*c,T=l*u,E=l*f,P=i.x,D=i.y,L=i.z;return s[0]=(1-(v+p))*P,s[1]=(m+E)*P,s[2]=(g-T)*P,s[3]=0,s[4]=(m-E)*D,s[5]=(1-(d+p))*D,s[6]=(h+S)*D,s[7]=0,s[8]=(g+T)*L,s[9]=(h-S)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Ps.set(s[0],s[1],s[2]).length();const a=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Tn.copy(this);const c=1/o,u=1/a,f=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,n.setFromRotationMatrix(Tn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),m=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===jn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===jr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),m=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===jn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===jr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ps=new Z,Tn=new At,VE=new Z(0,0,0),kE=new Z(1,1,1),Ui=new Z,vo=new Z,dn=new Z,Rd=new At,wd=new dr;class wi{constructor(e=0,n=0,i=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const Cd=new Z,Ds=new dr,li=new At,xo=new Z,xr=new Z,GE=new Z,HE=new dr,Pd=new Z(1,0,0),Dd=new Z(0,1,0),Id=new Z(0,0,1),Ld={type:"added"},WE={type:"removed"},Is={type:"childadded",child:null},Sl={type:"childremoved",child:null};class Yt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new Z,n=new wi,i=new dr,s=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Ze}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,n){return Cd.copy(e).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xo.copy(e):xo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(xr,xo,this.up):li.lookAt(xo,xr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(li),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),Is.child=e,this.dispatchEvent(Is),Is.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WE),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new Z(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class So extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const h=n.getJointPose(v,i),p=this._getHandJoint(c,v);h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=h.radius),p.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new So;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function yl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=st.workingColorSpace){if(e=IE(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=yl(o,r,e+1/3),this.g=yl(o,r,e),this.b=yl(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,n=pn){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=wm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return st.workingToColorSpace(Gt.copy(this),e),Math.round(it(Gt.r*255,0,255))*65536+Math.round(it(Gt.g*255,0,255))*256+Math.round(it(Gt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Gt.copy(this),n);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=pn){st.workingToColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,s=Gt.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Eo);const i=ml(Oi.h,Eo.h,n),s=ml(Oi.s,Eo.s,n),r=ml(Oi.l,Eo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ft;ft.NAMES=wm;class qE extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const An=new Z,ci=new Z,Ml=new Z,ui=new Z,Ls=new Z,Ns=new Z,Nd=new Z,bl=new Z,Tl=new Z,Al=new Z,Rl=new bt,wl=new bt,Cl=new bt;class wn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),An.subVectors(e,n),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){An.subVectors(s,n),ci.subVectors(i,n),Ml.subVectors(e,n);const o=An.dot(An),a=An.dot(ci),l=An.dot(Ml),c=ci.dot(ci),u=ci.dot(Ml),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Rl.setScalar(0),wl.setScalar(0),Cl.setScalar(0),Rl.fromBufferAttribute(e,n),wl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rl,r.x),o.addScaledVector(wl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(e,n,i,s){return An.subVectors(i,n),ci.subVectors(e,n),An.cross(ci).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),An.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Ns.subVectors(r,i),bl.subVectors(e,i);const l=Ls.dot(bl),c=Ns.dot(bl);if(l<=0&&c<=0)return n.copy(i);Tl.subVectors(e,s);const u=Ls.dot(Tl),f=Ns.dot(Tl);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ls,o);Al.subVectors(e,r);const m=Ls.dot(Al),g=Ns.dot(Al);if(g>=0&&m<=g)return n.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ns,a);const h=u*g-m*f;if(h<=0&&f-u>=0&&m-g>=0)return Nd.subVectors(r,s),a=(f-u)/(f-u+(m-g)),n.copy(s).addScaledVector(Nd,a);const p=1/(h+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(Ls,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Mo.subVectors(this.max,Sr),Us.subVectors(e.a,Sr),Os.subVectors(e.b,Sr),Fs.subVectors(e.c,Sr),Fi.subVectors(Os,Us),Bi.subVectors(Fs,Os),es.subVectors(Us,Fs);let n=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-es.z,es.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,es.z,0,-es.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-es.y,es.x,0];return!Pl(n,Us,Os,Fs,Mo)||(n=[1,0,0,0,1,0,0,0,1],!Pl(n,Us,Os,Fs,Mo))?!1:(bo.crossVectors(Fi,Bi),n=[bo.x,bo.y,bo.z],Pl(n,Us,Os,Fs,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Rn=new Z,yo=new ao,Us=new Z,Os=new Z,Fs=new Z,Fi=new Z,Bi=new Z,es=new Z,Sr=new Z,Mo=new Z,bo=new Z,ts=new Z;function Pl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ts.fromArray(t,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=n.dot(ts),u=i.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ct=new Z,To=new dt;let $E=0;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$E++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sd,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)To.fromBufferAttribute(this,n),To.applyMatrix3(e),this.setXY(n,To.x,To.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vr(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vr(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vr(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sd&&(e.usage=this.usage),e}}class Cm extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pm extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yi extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const jE=new ao,Er=new Z,Dl=new Z;class ku{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const n=Er.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Er,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Dl)),this.expandByPoint(Er.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YE=0;const Sn=new At,Il=new Yt,Bs=new Z,hn=new ao,yr=new ao,Ut=new Z;class Di extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wE(e)?Pm:Cm)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yi(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(hn.min,yr.min),hn.expandByPoint(Ut),Ut.addVectors(hn.max,yr.max),hn.expandByPoint(Ut)):(hn.expandByPoint(yr.min),hn.expandByPoint(yr.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Ut.add(Bs)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new Z,l[x]=new Z;const c=new Z,u=new Z,f=new Z,d=new dt,m=new dt,g=new dt,v=new Z,h=new Z;function p(x,M,V){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,V),d.fromBufferAttribute(r,x),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,V),u.sub(c),f.sub(c),m.sub(d),g.sub(d);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(w),h.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),a[x].add(v),a[M].add(v),a[V].add(v),l[x].add(h),l[M].add(h),l[V].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,M=S.length;x<M;++x){const V=S[x],w=V.start,z=V.count;for(let G=w,Q=w+z;G<Q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new Z,E=new Z,P=new Z,D=new Z;function L(x){P.fromBufferAttribute(s,x),D.copy(P);const M=a[x];T.copy(M),T.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(D,M);const w=E.dot(l[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,w)}for(let x=0,M=S.length;x<M;++x){const V=S[x],w=V.start,z=V.count;for(let G=w,Q=w+z;G<Q;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),h=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,h),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,h=l.length;v<h;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[m++]}return new Qn(d,u,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KE=0;class Va extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Ys,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=hc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){$e(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){$e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const di=new Z,Ll=new Z,Ao=new Z,Vi=new Z,Nl=new Z,Ro=new Z,Ul=new Z;class ZE{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ll.copy(e).add(n).multiplyScalar(.5),Ao.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(Ll);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Ao),a=Vi.dot(this.direction),l=-Vi.dot(Ao),c=Vi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ll).addScaledVector(Ao,d),m}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,s,r){Nl.subVectors(n,e),Ro.subVectors(i,e),Ul.crossVectors(Nl,Ro);let o=this.direction.dot(Ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(Ro.crossVectors(Vi,Ro));if(l<0)return null;const c=a*this.direction.dot(Nl.cross(Vi));if(c<0||l+c>o)return null;const u=-a*Vi.dot(Ul);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dm extends Va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ud=new At,ns=new ZE,wo=new ku,Od=new Z,Co=new Z,Po=new Z,Do=new Z,Ol=new Z,Io=new Z,Fd=new Z,Lo=new Z;class Ci extends Yt{constructor(e=new Di,n=new Dm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Ol.fromBufferAttribute(f,e),o?Io.addScaledVector(Ol,u):Io.addScaledVector(Ol.sub(n),u))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(wo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(wo,Od)===null||ns.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Ud.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Ud),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ns)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const h=d[g],p=o[h.materialIndex],S=Math.max(h.start,m.start),T=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let E=S,P=T;E<P;E+=3){const D=a.getX(E),L=a.getX(E+1),x=a.getX(E+2);s=No(this,p,e,i,c,u,f,D,L,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let h=g,p=v;h<p;h+=3){const S=a.getX(h),T=a.getX(h+1),E=a.getX(h+2);s=No(this,o,e,i,c,u,f,S,T,E),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const h=d[g],p=o[h.materialIndex],S=Math.max(h.start,m.start),T=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let E=S,P=T;E<P;E+=3){const D=E,L=E+1,x=E+2;s=No(this,p,e,i,c,u,f,D,L,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let h=g,p=v;h<p;h+=3){const S=h,T=h+1,E=h+2;s=No(this,o,e,i,c,u,f,S,T,E),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}}}function JE(t,e,n,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lo);return c<n.near||c>n.far?null:{distance:c,point:Lo.clone(),object:t}}function No(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Co),t.getVertexPosition(l,Po),t.getVertexPosition(c,Do);const u=JE(t,e,n,i,Co,Po,Do,Fd);if(u){const f=new Z;wn.getBarycoord(Fd,Co,Po,Do,f),s&&(u.uv=wn.getInterpolatedAttribute(s,a,l,c,f,new dt)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,f,new dt)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Z,materialIndex:0};wn.getNormal(Co,Po,Do,d.normal),u.face=d,u.barycoord=f}return u}class QE extends on{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Bt,u=Bt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=new Z,ey=new Z,ty=new Ze;class ls{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Fl.subVectors(i,n).cross(ey.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ty.getNormalMatrix(e),s=this.coplanarPoint(Fl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new ku,ny=new dt(.5,.5),Uo=new Z;class zu{constructor(e=new ls,n=new ls,i=new ls,s=new ls,r=new ls,o=new ls){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=jn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],m=r[7],g=r[8],v=r[9],h=r[10],p=r[11],S=r[12],T=r[13],E=r[14],P=r[15];if(s[0].setComponents(c-o,m-u,p-g,P-S).normalize(),s[1].setComponents(c+o,m+u,p+g,P+S).normalize(),s[2].setComponents(c+a,m+f,p+v,P+T).normalize(),s[3].setComponents(c-a,m-f,p-v,P-T).normalize(),i)s[4].setComponents(l,d,h,E).normalize(),s[5].setComponents(c-l,m-d,p-h,P-E).normalize();else if(s[4].setComponents(c-l,m-d,p-h,P-E).normalize(),n===jn)s[5].setComponents(c+l,m+d,p+h,P+E).normalize();else if(n===jr)s[5].setComponents(l,d,h,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const n=ny.distanceTo(e.center);return is.radius=.7071067811865476+n,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Uo.x=s.normal.x>0?e.max.x:e.min.x,Uo.y=s.normal.y>0?e.max.y:e.min.y,Uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Im extends on{constructor(e=[],n=Es,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends on{constructor(e,n,i=ni,s,r,o,a=Bt,l=Bt,c,u=Ri,f=1){if(u!==Ri&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class iy extends Yr{constructor(e,n=ni,i=Es,s,r,o=Bt,a=Bt,l,c=Ri){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lm extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends Di{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(f,2));function g(v,h,p,S,T,E,P,D,L,x,M){const V=E/L,w=P/x,z=E/2,G=P/2,Q=D/2,X=L+1,W=x+1;let N=0,ae=0;const ce=new Z;for(let me=0;me<W;me++){const ye=me*w-G;for(let _e=0;_e<X;_e++){const De=_e*V-z;ce[v]=De*S,ce[h]=ye*T,ce[p]=Q,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[h]=0,ce[p]=D>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(_e/L),f.push(1-me/x),N+=1}}for(let me=0;me<x;me++)for(let ye=0;ye<L;ye++){const _e=d+ye+X*me,De=d+ye+X*(me+1),Xe=d+(ye+1)+X*(me+1),Ge=d+(ye+1)+X*me;l.push(_e,De,Ge),l.push(De,Xe,Ge),ae+=6}a.addGroup(m,ae,M),m+=ae,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ka extends Di{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,m=[],g=[],v=[],h=[];for(let p=0;p<u;p++){const S=p*d-o;for(let T=0;T<c;T++){const E=T*f-r;g.push(E,-S,0),v.push(0,0,1),h.push(T/a),h.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const T=S+c*p,E=S+c*(p+1),P=S+1+c*(p+1),D=S+1+c*p;m.push(T,E,D),m.push(E,P,D)}this.setIndex(m),this.setAttribute("position",new yi(g,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}function ar(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=ar(t[n]);for(const s in i)e[s]=i[s]}return e}function sy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Nm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const ry={clone:ar,merge:Zt};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ly extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cy extends Va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uy extends Va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Um extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Bl=new At,Bd=new Z,Vd=new Z;class fy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zu,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bd),Vd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vd),n.updateMatrixWorld(),Bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===jr||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oo=new Z,Fo=new dr,Fn=new Z;class Om extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,Fo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Fo,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Oo,Fo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Fo,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new Z,kd=new dt,zd=new dt;class En extends Om{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tu*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,kd,zd),n.subVectors(zd,kd)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Gu extends Om{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class dy extends fy{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hy extends Um{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new dy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class py extends Um{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,ks=1;class my extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Vs,ks,e,n);s.layers=this.layers,this.add(s);const r=new En(Vs,ks,e,n);r.layers=this.layers,this.add(r);const o=new En(Vs,ks,e,n);o.layers=this.layers,this.add(o);const a=new En(Vs,ks,e,n);a.layers=this.layers,this.add(a);const l=new En(Vs,ks,e,n);l.layers=this.layers,this.add(l);const c=new En(Vs,ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gy extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Gd(t,e,n,i){const s=_y(i);switch(n){case ym:return t*e;case bm:return t*e/s.components*s.byteLength;case Nu:return t*e/s.components*s.byteLength;case rr:return t*e*2/s.components*s.byteLength;case Uu:return t*e*2/s.components*s.byteLength;case Mm:return t*e*3/s.components*s.byteLength;case Cn:return t*e*4/s.components*s.byteLength;case Ou:return t*e*4/s.components*s.byteLength;case Yo:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bc:case Ac:return Math.max(t,16)*Math.max(e,8)/4;case Mc:case Tc:return Math.max(t,8)*Math.max(e,8)/2;case Rc:case wc:case Pc:case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Ic:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jc:case Yc:case Kc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zc:case Jc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _y(t){switch(t){case mn:case vm:return{byteLength:1,components:1};case qr:case xm:case Ai:return{byteLength:2,components:1};case Iu:case Lu:return{byteLength:2,components:4};case ni:case Du:case $n:return{byteLength:4,components:1};case Sm:case Em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fm(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function vy(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
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
#endif`,Ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ty=`#ifdef USE_AOMAP
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
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ly=`#ifdef USE_BUMPMAP
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
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`#define PI 3.141592653589793
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
} // validated`,Hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zy=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
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
}`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uM=`uniform bool receiveShadow;
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
#endif`,fM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,_M=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
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
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ib=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
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
}`,Tb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ab=`#define DISTANCE
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
}`,Rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Nb=`#define LAMBERT
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
}`,Ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ob=`#define MATCAP
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
}`,Fb=`#define MATCAP
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
}`,Bb=`#define NORMAL
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
}`,Vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kb=`#define PHONG
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
}`,zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Gb=`#define STANDARD
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
}`,Hb=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Wb=`#define TOON
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
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,qb=`uniform float size;
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
}`,$b=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Yb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Kb=`uniform float rotation;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:xy,alphahash_pars_fragment:Sy,alphamap_fragment:Ey,alphamap_pars_fragment:yy,alphatest_fragment:My,alphatest_pars_fragment:by,aomap_fragment:Ty,aomap_pars_fragment:Ay,batching_pars_vertex:Ry,batching_vertex:wy,begin_vertex:Cy,beginnormal_vertex:Py,bsdfs:Dy,iridescence_fragment:Iy,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Ny,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:Oy,clipping_planes_vertex:Fy,color_fragment:By,color_pars_fragment:Vy,color_pars_vertex:ky,color_vertex:zy,common:Gy,cube_uv_reflection_fragment:Hy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:Xy,displacementmap_vertex:qy,emissivemap_fragment:$y,emissivemap_pars_fragment:jy,colorspace_fragment:Yy,colorspace_pars_fragment:Ky,envmap_fragment:Zy,envmap_common_pars_fragment:Jy,envmap_pars_fragment:Qy,envmap_pars_vertex:eM,envmap_physical_pars_fragment:fM,envmap_vertex:tM,fog_vertex:nM,fog_pars_vertex:iM,fog_fragment:sM,fog_pars_fragment:rM,gradientmap_pars_fragment:oM,lightmap_pars_fragment:aM,lights_lambert_fragment:lM,lights_lambert_pars_fragment:cM,lights_pars_begin:uM,lights_toon_fragment:dM,lights_toon_pars_fragment:hM,lights_phong_fragment:pM,lights_phong_pars_fragment:mM,lights_physical_fragment:gM,lights_physical_pars_fragment:_M,lights_fragment_begin:vM,lights_fragment_maps:xM,lights_fragment_end:SM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:bM,map_fragment:TM,map_pars_fragment:AM,map_particle_fragment:RM,map_particle_pars_fragment:wM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:PM,morphinstance_vertex:DM,morphcolor_vertex:IM,morphnormal_vertex:LM,morphtarget_pars_vertex:NM,morphtarget_vertex:UM,normal_fragment_begin:OM,normal_fragment_maps:FM,normal_pars_fragment:BM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:XM,opaque_fragment:qM,packing:$M,premultiplied_alpha_fragment:jM,project_vertex:YM,dithering_fragment:KM,dithering_pars_fragment:ZM,roughnessmap_fragment:JM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:sb,skinning_pars_vertex:rb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:ub,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:hb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:vb,background_frag:xb,backgroundCube_vert:Sb,backgroundCube_frag:Eb,cube_vert:yb,cube_frag:Mb,depth_vert:bb,depth_frag:Tb,distance_vert:Ab,distance_frag:Rb,equirect_vert:wb,equirect_frag:Cb,linedashed_vert:Pb,linedashed_frag:Db,meshbasic_vert:Ib,meshbasic_frag:Lb,meshlambert_vert:Nb,meshlambert_frag:Ub,meshmatcap_vert:Ob,meshmatcap_frag:Fb,meshnormal_vert:Bb,meshnormal_frag:Vb,meshphong_vert:kb,meshphong_frag:zb,meshphysical_vert:Gb,meshphysical_frag:Hb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:qb,points_frag:$b,shadow_vert:jb,shadow_frag:Yb,sprite_vert:Kb,sprite_frag:Zb},Ae={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Hn={basic:{uniforms:Zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Zt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Zt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Zt([Ae.points,Ae.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Zt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Zt([Ae.common,Ae.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Zt([Ae.sprite,Ae.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Zt([Ae.common,Ae.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Zt([Ae.lights,Ae.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Hn.physical={uniforms:Zt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Bo={r:0,b:0,g:0},ss=new wi,Jb=new At;function Qb(t,e,n,i,s,r){const o=new ft(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function m(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const E=S.backgroundBlurriness>0;T=e.get(T,E)}return T}function g(S){let T=!1;const E=m(S);E===null?h(o,a):E&&E.isColor&&(h(E,1),T=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(S,T){const E=m(T);E&&(E.isCubeTexture||E.mapping===Ba)?(c===void 0&&(c=new Ci(new lo(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:ar(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ss.copy(T.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(ss)),c.material.toneMapped=st.getTransfer(E.colorSpace)!==pt,(u!==E||f!==E.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ci(new ka(2,2),new ii({name:"BackgroundMaterial",uniforms:ar(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=st.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,T){S.getRGB(Bo,Nm(t)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),a=T,h(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,h(o,a)},render:g,addToRenderList:v,dispose:p}}function eT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(w,z,G,Q,X){let W=!1;const N=f(w,Q,G,z);r!==N&&(r=N,c(r.object)),W=m(w,Q,G,X),W&&g(w,Q,G,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,E(w,z,G,Q),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function f(w,z,G,Q){const X=Q.wireframe===!0;let W=i[z.id];W===void 0&&(W={},i[z.id]=W);const N=w.isInstancedMesh===!0?w.id:0;let ae=W[N];ae===void 0&&(ae={},W[N]=ae);let ce=ae[G.id];ce===void 0&&(ce={},ae[G.id]=ce);let me=ce[X];return me===void 0&&(me=d(l()),ce[X]=me),me}function d(w){const z=[],G=[],Q=[];for(let X=0;X<n;X++)z[X]=0,G[X]=0,Q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:Q,object:w,attributes:{},index:null}}function m(w,z,G,Q){const X=r.attributes,W=z.attributes;let N=0;const ae=G.getAttributes();for(const ce in ae)if(ae[ce].location>=0){const ye=X[ce];let _e=W[ce];if(_e===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),ye===void 0||ye.attribute!==_e||_e&&ye.data!==_e.data)return!0;N++}return r.attributesNum!==N||r.index!==Q}function g(w,z,G,Q){const X={},W=z.attributes;let N=0;const ae=G.getAttributes();for(const ce in ae)if(ae[ce].location>=0){let ye=W[ce];ye===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor));const _e={};_e.attribute=ye,ye&&ye.data&&(_e.data=ye.data),X[ce]=_e,N++}r.attributes=X,r.attributesNum=N,r.index=Q}function v(){const w=r.newAttributes;for(let z=0,G=w.length;z<G;z++)w[z]=0}function h(w){p(w,0)}function p(w,z){const G=r.newAttributes,Q=r.enabledAttributes,X=r.attributeDivisors;G[w]=1,Q[w]===0&&(t.enableVertexAttribArray(w),Q[w]=1),X[w]!==z&&(t.vertexAttribDivisor(w,z),X[w]=z)}function S(){const w=r.newAttributes,z=r.enabledAttributes;for(let G=0,Q=z.length;G<Q;G++)z[G]!==w[G]&&(t.disableVertexAttribArray(G),z[G]=0)}function T(w,z,G,Q,X,W,N){N===!0?t.vertexAttribIPointer(w,z,G,X,W):t.vertexAttribPointer(w,z,G,Q,X,W)}function E(w,z,G,Q){v();const X=Q.attributes,W=G.getAttributes(),N=z.defaultAttributeValues;for(const ae in W){const ce=W[ae];if(ce.location>=0){let me=X[ae];if(me===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(me=w.instanceColor)),me!==void 0){const ye=me.normalized,_e=me.itemSize,De=e.get(me);if(De===void 0)continue;const Xe=De.buffer,Ge=De.type,ie=De.bytesPerElement,U=Ge===t.INT||Ge===t.UNSIGNED_INT||me.gpuType===Du;if(me.isInterleavedBufferAttribute){const H=me.data,le=H.stride,de=me.offset;if(H.isInstancedInterleavedBuffer){for(let Se=0;Se<ce.locationSize;Se++)p(ce.location+Se,H.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Se=0;Se<ce.locationSize;Se++)h(ce.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Se=0;Se<ce.locationSize;Se++)T(ce.location+Se,_e/ce.locationSize,Ge,ye,le*ie,(de+_e/ce.locationSize*Se)*ie,U)}else{if(me.isInstancedBufferAttribute){for(let H=0;H<ce.locationSize;H++)p(ce.location+H,me.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let H=0;H<ce.locationSize;H++)h(ce.location+H);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let H=0;H<ce.locationSize;H++)T(ce.location+H,_e/ce.locationSize,Ge,ye,_e*ie,_e/ce.locationSize*H*ie,U)}}else if(N!==void 0){const ye=N[ae];if(ye!==void 0)switch(ye.length){case 2:t.vertexAttrib2fv(ce.location,ye);break;case 3:t.vertexAttrib3fv(ce.location,ye);break;case 4:t.vertexAttrib4fv(ce.location,ye);break;default:t.vertexAttrib1fv(ce.location,ye)}}}}S()}function P(){M();for(const w in i){const z=i[w];for(const G in z){const Q=z[G];for(const X in Q){const W=Q[X];for(const N in W)u(W[N].object),delete W[N];delete Q[X]}}delete i[w]}}function D(w){if(i[w.id]===void 0)return;const z=i[w.id];for(const G in z){const Q=z[G];for(const X in Q){const W=Q[X];for(const N in W)u(W[N].object),delete W[N];delete Q[X]}}delete i[w.id]}function L(w){for(const z in i){const G=i[z];for(const Q in G){const X=G[Q];if(X[w.id]===void 0)continue;const W=X[w.id];for(const N in W)u(W[N].object),delete W[N];delete X[w.id]}}}function x(w){for(const z in i){const G=i[z],Q=w.isInstancedMesh===!0?w.id:0,X=G[Q];if(X!==void 0){for(const W in X){const N=X[W];for(const ae in N)u(N[ae].object),delete N[ae];delete X[W]}delete G[Q],Object.keys(G).length===0&&delete i[z]}}}function M(){V(),o=!0,r!==s&&(r=s,c(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:h,disableUnusedAttributes:S}}function tT(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];n.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nT(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Cn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const x=L===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==mn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==$n&&!x)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=t.getParameter(t.MAX_SAMPLES),D=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:E,maxSamples:P,samples:D}}function iT(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ls,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,h=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!h)r?u(null):c();else{const S=r?0:i,T=S*4;let E=p.clippingState||null;l.value=E,E=u(g,d,T,m);for(let P=0;P!==T;++P)E[P]=n[P];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const v=f!==null?f.length:0;let h=null;if(v!==0){if(h=l.value,g!==!0||h===null){const p=m+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(h===null||h.length<p)&&(h=new Float32Array(p));for(let T=0,E=m;T!==v;++T,E+=4)o.copy(f[T]).applyMatrix4(S,a),o.normal.toArray(h,E),h[E+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}const qi=4,Hd=[.125,.215,.35,.446,.526,.582],us=20,sT=256,Mr=new Gu,Wd=new ft;let Vl=null,kl=0,zl=0,Gl=!1;const rT=new Z;class Xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=rT}=r;Vl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,kl,zl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Ai,format:Cn,colorSpace:or,depthBuffer:!1},s=qd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oT(r)),this._blurMaterial=lT(r,e,n),this._ggxMaterial=aT(r,e,n)}return s}_compileMaterial(e){const n=new Ci(new Di,e);this._renderer.compile(n,Mr)}_sceneToCubeUV(e,n,i,s,r){const l=new En(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Wd),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new lo,new Dm({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,h=v.material;let p=!1;const S=e.background;S?S.isColor&&(h.color.copy(S),e.background=null,p=!0):(h.color.copy(Wd),p=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const P=this._cubeSize;zs(s,E*P,T>2?P:0,P,P),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Es||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Mr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,m=f*d,{_lodMax:g}=this,v=this._sizeLods[i],h=3*v*(i>g-qi?i-g+qi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,zs(r,h,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,zs(e,h,p,3*v,2*v),s.setRenderTarget(e),s.render(a,Mr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*us-1),v=r/g,h=isFinite(r)?1+Math.floor(u*v):us;h>us&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${us}`);const p=[];let S=0;for(let L=0;L<us;++L){const x=L/v,M=Math.exp(-x*x/2);p.push(M),L===0?S+=M:L<h&&(S+=2*M)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const E=this._sizeLods[s],P=3*E*(s>T-qi?s-T+qi:0),D=4*(this._cubeSize-E);zs(n,P,D,3*E,2*E),l.setRenderTarget(n),l.render(f,Mr)}}function oT(t){const e=[],n=[],i=[];let s=t;const r=t-qi+1+Hd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-qi?l=Hd[o-t+qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,h=2,p=1,S=new Float32Array(v*g*m),T=new Float32Array(h*g*m),E=new Float32Array(p*g*m);for(let D=0;D<m;D++){const L=D%3*2/3-1,x=D>2?0:-1,M=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];S.set(M,v*g*D),T.set(d,h*g*D);const V=[D,D,D,D,D,D];E.set(V,p*g*D)}const P=new Di;P.setAttribute("position",new Qn(S,v)),P.setAttribute("uv",new Qn(T,h)),P.setAttribute("faceIndex",new Qn(E,p)),i.push(new Ci(P,null)),s>qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function qd(t,e,n){const i=new Jn(t,e,n);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function aT(t,e,n){return new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function lT(t,e,n){const i=new Float32Array(us),s=new Z(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:za(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function $d(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function jd(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function za(){return`

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
	`}class Bm extends Jn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Im(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lo(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Si});r.uniforms.tEquirect.value=n;const o=new Ci(s,r),a=n.minFilter;return n.minFilter===hs&&(n.minFilter=jt),new my(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function cT(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===fl||m===dl)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Bm(g.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,g=m===fl||m===dl,v=m===Es||m===sr;if(g||v){let h=n.get(d);const p=h!==void 0?h.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Xd(t)),h=g?i.fromEquirectangular(d,h):i.fromCubemap(d,h),h.texture.pmremVersion=d.pmremVersion,n.set(d,h),h.texture;if(h!==void 0)return h.texture;{const S=d.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Xd(t)),h=g?i.fromEquirectangular(d):i.fromCubemap(d),h.texture.pmremVersion=d.pmremVersion,n.set(d,h),d.addEventListener("dispose",u),h.texture):null}}}return d}function a(d,m){return m===fl?d.mapping=Es:m===dl&&(d.mapping=sr),d}function l(d){let m=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(d){const m=d.target;m.removeEventListener("dispose",u);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function uT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ha("WebGLRenderer: "+i+" extension not supported."),s}}}function fT(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(m!==null){const S=m.array;v=m.version;for(let T=0,E=S.length;T<E;T+=3){const P=S[T+0],D=S[T+1],L=S[T+2];d.push(P,D,D,L,L,P)}}else{const S=g.array;v=g.version;for(let T=0,E=S.length/3-1;T<E;T+=3){const P=T+0,D=T+1,L=T+2;d.push(P,D,D,L,L,P)}}const h=new(g.count>=65535?Pm:Cm)(d,1);h.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,h)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function dT(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,r,d*o),n.update(m,i,1)}function c(d,m,g){g!==0&&(t.drawElementsInstanced(i,m,r,d*o,g),n.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let h=0;for(let p=0;p<g;p++)h+=m[p];n.update(h,i,1)}function f(d,m,g,v){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],v[p]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=m[S]*v[S];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:at("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function pT(t,e,n){const i=new WeakMap,s=new bt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let V=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",V)};var m=V;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),h===!0&&(E=3);let P=a.attributes.position.count*E,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*D*4*f),x=new Am(L,P,D,f);x.type=$n,x.needsUpdate=!0;const M=E*4;for(let w=0;w<f;w++){const z=p[w],G=S[w],Q=T[w],X=P*D*4*w;for(let W=0;W<z.count;W++){const N=W*M;g===!0&&(s.fromBufferAttribute(z,W),L[X+N+0]=s.x,L[X+N+1]=s.y,L[X+N+2]=s.z,L[X+N+3]=0),v===!0&&(s.fromBufferAttribute(G,W),L[X+N+4]=s.x,L[X+N+5]=s.y,L[X+N+6]=s.z,L[X+N+7]=0),h===!0&&(s.fromBufferAttribute(Q,W),L[X+N+8]=s.x,L[X+N+9]=s.y,L[X+N+10]=s.z,L[X+N+11]=Q.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new dt(P,D)},i.set(a,d),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let h=0;h<c.length;h++)g+=c[h];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function mT(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const gT={[um]:"LINEAR_TONE_MAPPING",[fm]:"REINHARD_TONE_MAPPING",[dm]:"CINEON_TONE_MAPPING",[hm]:"ACES_FILMIC_TONE_MAPPING",[mm]:"AGX_TONE_MAPPING",[gm]:"NEUTRAL_TONE_MAPPING",[pm]:"CUSTOM_TONE_MAPPING"};function _T(t,e,n,i,s){const r=new Jn(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new Jn(e,n,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),a=new Di;a.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new yi([0,2,0,0,2,0],2));const l=new ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ci(a,l),u=new Gu(-1,1,1,-1,0,1);let f=null,d=null,m=!1,g,v=null,h=[],p=!1;this.setSize=function(S,T){r.setSize(S,T),o.setSize(S,T);for(let E=0;E<h.length;E++){const P=h[E];P.setSize&&P.setSize(S,T)}},this.setEffects=function(S){h=S,p=h.length>0&&h[0].isRenderPass===!0;const T=r.width,E=r.height;for(let P=0;P<h.length;P++){const D=h[P];D.setSize&&D.setSize(T,E)}},this.begin=function(S,T){if(m||S.toneMapping===Zn&&h.length===0)return!1;if(v=T,T!==null){const E=T.width,P=T.height;(r.width!==E||r.height!==P)&&this.setSize(E,P)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Zn,!0},this.hasRenderPass=function(){return p},this.end=function(S,T){S.toneMapping=g,m=!0;let E=r,P=o;for(let D=0;D<h.length;D++){const L=h[D];if(L.enabled!==!1&&(L.render(S,P,E,T),L.needsSwap!==!1)){const x=E;E=P,P=x}}if(f!==S.outputColorSpace||d!==S.toneMapping){f=S.outputColorSpace,d=S.toneMapping,l.defines={},st.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const D=gT[d];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(v),S.render(c,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Vm=new on,nu=new Yr(1,1),km=new Am,zm=new BE,Gm=new Im,Yd=[],Kd=[],Zd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function hr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Yd[s];if(r===void 0&&(r=new Float32Array(s),Yd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ga(t,e){let n=Kd[e];n===void 0&&(n=new Int32Array(e),Kd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function yT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Qd.set(i),t.uniformMatrix2fv(this.addr,!1,Qd),Lt(n,i)}}function MT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Jd.set(i),t.uniformMatrix3fv(this.addr,!1,Jd),Lt(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Zd.set(i),t.uniformMatrix4fv(this.addr,!1,Zd),Lt(n,i)}}function TT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function LT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(nu.compareFunction=n.isReversedDepthBuffer()?Bu:Fu,r=nu):r=Vm,n.setTexture2D(e||r,s)}function NT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||zm,s)}function UT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Gm,s)}function OT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||km,s)}function FT(t){switch(t){case 5126:return vT;case 35664:return xT;case 35665:return ST;case 35666:return ET;case 35674:return yT;case 35675:return MT;case 35676:return bT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return wT;case 5125:return CT;case 36294:return PT;case 36295:return DT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return OT}}function BT(t,e){t.uniform1fv(this.addr,e)}function VT(t,e){const n=hr(e,this.size,2);t.uniform2fv(this.addr,n)}function kT(t,e){const n=hr(e,this.size,3);t.uniform3fv(this.addr,n)}function zT(t,e){const n=hr(e,this.size,4);t.uniform4fv(this.addr,n)}function GT(t,e){const n=hr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HT(t,e){const n=hr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WT(t,e){const n=hr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XT(t,e){t.uniform1iv(this.addr,e)}function qT(t,e){t.uniform2iv(this.addr,e)}function $T(t,e){t.uniform3iv(this.addr,e)}function jT(t,e){t.uniform4iv(this.addr,e)}function YT(t,e){t.uniform1uiv(this.addr,e)}function KT(t,e){t.uniform2uiv(this.addr,e)}function ZT(t,e){t.uniform3uiv(this.addr,e)}function JT(t,e){t.uniform4uiv(this.addr,e)}function QT(t,e,n){const i=this.cache,s=e.length,r=Ga(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=nu:o=Vm;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function eA(t,e,n){const i=this.cache,s=e.length,r=Ga(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||zm,r[o])}function tA(t,e,n){const i=this.cache,s=e.length,r=Ga(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Gm,r[o])}function nA(t,e,n){const i=this.cache,s=e.length,r=Ga(n,s);It(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||km,r[o])}function iA(t){switch(t){case 5126:return BT;case 35664:return VT;case 35665:return kT;case 35666:return zT;case 35674:return GT;case 35675:return HT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return qT;case 35668:case 35672:return $T;case 35669:case 35673:return jT;case 5125:return YT;case 36294:return KT;case 36295:return ZT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return nA}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FT(n.type)}}class rA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iA(n.type)}}class oA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function eh(t,e){t.seq.push(e),t.map[e.id]=e}function aA(t,e,n){const i=t.name,s=i.length;for(Hl.lastIndex=0;;){const r=Hl.exec(i),o=Hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){eh(n,c===void 0?new sA(a,t,e):new rA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new oA(a),eh(n,f)),n=f}}}class Qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);aA(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function th(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lA=37297;let cA=0;function uA(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const nh=new Ze;function fA(t){st._getMatrix(nh,st.workingColorSpace,t);const e=`mat3( ${nh.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case fa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ih(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+uA(t.getShaderSource(e),a)}else return r}function dA(t,e){const n=fA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hA={[um]:"Linear",[fm]:"Reinhard",[dm]:"Cineon",[hm]:"ACESFilmic",[mm]:"AgX",[gm]:"Neutral",[pm]:"Custom"};function pA(t,e){const n=hA[e];return n===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vo=new Z;function mA(){st.getLuminanceCoefficients(Vo);const t=Vo.x.toFixed(4),e=Vo.y.toFixed(4),n=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function _A(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Rr(t){return t!==""}function sh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xA=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(t){return t.replace(xA,EA)}const SA=new Map;function EA(t,e){let n=Je[e];if(n===void 0){const i=SA.get(e);if(i!==void 0)n=Je[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(n)}const yA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(t){return t.replace(yA,MA)}function MA(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const bA={[jo]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function TA(t){return bA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AA={[Es]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function RA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":AA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const wA={[sr]:"ENVMAP_MODE_REFRACTION"};function CA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":wA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PA={[cm]:"ENVMAP_BLENDING_MULTIPLY",[gE]:"ENVMAP_BLENDING_MIX",[_E]:"ENVMAP_BLENDING_ADD"};function DA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":PA[t.combine]||"ENVMAP_BLENDING_NONE"}function IA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TA(n),c=RA(n),u=CA(n),f=DA(n),d=IA(n),m=gA(n),g=_A(r),v=s.createProgram();let h,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rr).join(`
`),h.length>0&&(h+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(h=[ah(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[ah(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zn?"#define TONE_MAPPING":"",n.toneMapping!==Zn?Je.tonemapping_pars_fragment:"",n.toneMapping!==Zn?pA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,dA("linearToOutputTexel",n.outputColorSpace),mA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rr).join(`
`)),o=iu(o),o=sh(o,n),o=rh(o,n),a=iu(a),a=sh(a,n),a=rh(a,n),o=oh(o),a=oh(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",n.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=S+h+o,E=S+p+a,P=th(s,s.VERTEX_SHADER,T),D=th(s,s.FRAGMENT_SHADER,E);s.attachShader(v,P),s.attachShader(v,D),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(w){if(t.debug.checkShaderErrors){const z=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(P)||"",Q=s.getShaderInfoLog(D)||"",X=z.trim(),W=G.trim(),N=Q.trim();let ae=!0,ce=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,P,D);else{const me=ih(s,P,"vertex"),ye=ih(s,D,"fragment");at("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+me+`
`+ye)}else X!==""?$e("WebGLProgram: Program Info Log:",X):(W===""||N==="")&&(ce=!1);ce&&(w.diagnostics={runnable:ae,programLog:X,vertexShader:{log:W,prefix:h},fragmentShader:{log:N,prefix:p}})}s.deleteShader(P),s.deleteShader(D),x=new Qo(s,v),M=vA(s,v)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(v,lA)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=D,this}let NA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OA(e),n.set(e,i)),i}}class OA{constructor(e){this.id=NA++,this.code=e,this.usedTimes=0}}function FA(t,e,n,i,s,r){const o=new Rm,a=new UA,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,M,V,w,z){const G=w.fog,Q=z.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||X,W),ae=N&&N.mapping===Ba?N.image.height:null,ce=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const me=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=me!==void 0?me.length:0;let _e=0;Q.morphAttributes.position!==void 0&&(_e=1),Q.morphAttributes.normal!==void 0&&(_e=2),Q.morphAttributes.color!==void 0&&(_e=3);let De,Xe,Ge,ie;if(ce){const ht=Hn[ce];De=ht.vertexShader,Xe=ht.fragmentShader}else De=x.vertexShader,Xe=x.fragmentShader,a.update(x),Ge=a.getVertexShaderID(x),ie=a.getFragmentShaderID(x);const U=t.getRenderTarget(),H=t.state.buffers.depth.getReversed(),le=z.isInstancedMesh===!0,de=z.isBatchedMesh===!0,Se=!!x.map,R=!!x.matcap,C=!!N,F=!!x.aoMap,ee=!!x.lightMap,J=!!x.bumpMap,ne=!!x.normalMap,A=!!x.displacementMap,he=!!x.emissiveMap,ue=!!x.metalnessMap,oe=!!x.roughnessMap,fe=x.anisotropy>0,y=x.clearcoat>0,_=x.dispersion>0,I=x.iridescence>0,$=x.sheen>0,se=x.transmission>0,j=fe&&!!x.anisotropyMap,be=y&&!!x.clearcoatMap,ge=y&&!!x.clearcoatNormalMap,Le=y&&!!x.clearcoatRoughnessMap,Be=I&&!!x.iridescenceMap,pe=I&&!!x.iridescenceThicknessMap,xe=$&&!!x.sheenColorMap,Te=$&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,Pe=!!x.specularColorMap,Ye=!!x.specularIntensityMap,B=se&&!!x.transmissionMap,Me=se&&!!x.thicknessMap,Ee=!!x.gradientMap,Ne=!!x.alphaMap,ve=x.alphaTest>0,re=!!x.alphaHash,Oe=!!x.extensions;let qe=Zn;x.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(qe=t.toneMapping);const St={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:Xe,defines:x.defines,customVertexShaderID:Ge,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:de,batchingColor:de&&z._colorsTexture!==null,instancing:le,instancingColor:le&&z.instanceColor!==null,instancingMorph:le&&z.morphTexture!==null,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:or,alphaToCoverage:!!x.alphaToCoverage,map:Se,matcap:R,envMap:C,envMapMode:C&&N.mapping,envMapCubeUVHeight:ae,aoMap:F,lightMap:ee,bumpMap:J,normalMap:ne,displacementMap:A,emissiveMap:he,normalMapObjectSpace:ne&&x.normalMapType===EE,normalMapTangentSpace:ne&&x.normalMapType===SE,metalnessMap:ue,roughnessMap:oe,anisotropy:fe,anisotropyMap:j,clearcoat:y,clearcoatMap:be,clearcoatNormalMap:ge,clearcoatRoughnessMap:Le,dispersion:_,iridescence:I,iridescenceMap:Be,iridescenceThicknessMap:pe,sheen:$,sheenColorMap:xe,sheenRoughnessMap:Te,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:Ye,transmission:se,transmissionMap:B,thicknessMap:Me,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:re,combine:x.combine,mapUv:Se&&g(x.map.channel),aoMapUv:F&&g(x.aoMap.channel),lightMapUv:ee&&g(x.lightMap.channel),bumpMapUv:J&&g(x.bumpMap.channel),normalMapUv:ne&&g(x.normalMap.channel),displacementMapUv:A&&g(x.displacementMap.channel),emissiveMapUv:he&&g(x.emissiveMap.channel),metalnessMapUv:ue&&g(x.metalnessMap.channel),roughnessMapUv:oe&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:be&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(x.sheenRoughnessMap.channel),specularMapUv:Ce&&g(x.specularMap.channel),specularColorMapUv:Pe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ye&&g(x.specularIntensityMap.channel),transmissionMapUv:B&&g(x.transmissionMap.channel),thicknessMapUv:Me&&g(x.thicknessMap.channel),alphaMapUv:Ne&&g(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ne||fe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Se||Ne),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Q.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:H,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:qe,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Oe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&x.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function h(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)M.push(V),M.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(p(M,x),S(M,x),M.push(t.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const M=m[x.type];let V;if(M){const w=Hn[M];V=ry.clone(w.uniforms)}else V=x.uniforms;return V}function E(x,M){let V=u.get(M);return V!==void 0?++V.usedTimes:(V=new LA(t,M,x,s),c.push(V),u.set(M,V)),V}function P(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function D(x){a.remove(x)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:T,acquireProgram:E,releaseProgram:P,releaseShaderCache:D,programs:c,dispose:L}}function BA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function VA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function lh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ch(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,g,v,h,p){let S=t[e];return S===void 0?(S={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:h,group:p},t[e]=S):(S.id=d.id,S.object=d,S.geometry=m,S.material=g,S.materialVariant=o(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=h,S.group=p),e++,S}function l(d,m,g,v,h,p){const S=a(d,m,g,v,h,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):n.push(S)}function c(d,m,g,v,h,p){const S=a(d,m,g,v,h,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):n.unshift(S)}function u(d,m){n.length>1&&n.sort(d||VA),i.length>1&&i.sort(m||lh),s.length>1&&s.sort(m||lh)}function f(){for(let d=e,m=t.length;d<m;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function kA(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new ch,t.set(i,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new ft};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HA=0;function WA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XA(t){const e=new zA,n=GA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const s=new Z,r=new At,o=new At;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,v=0,h=0,p=0,S=0,T=0,E=0,P=0,D=0,L=0;c.sort(WA);for(let M=0,V=c.length;M<V;M++){const w=c[M],z=w.color,G=w.intensity,Q=w.distance;let X=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===rr?X=w.shadow.map.texture:X=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=z.r*G,f+=z.g*G,d+=z.b*G;else if(w.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(w.sh.coefficients[W],G);L++}else if(w.isDirectionalLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const N=w.shadow,ae=n.get(w);ae.shadowIntensity=N.intensity,ae.shadowBias=N.bias,ae.shadowNormalBias=N.normalBias,ae.shadowRadius=N.radius,ae.shadowMapSize=N.mapSize,i.directionalShadow[m]=ae,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=w.shadow.matrix,S++}i.directional[m]=W,m++}else if(w.isSpotLight){const W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=Q,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,i.spot[v]=W;const N=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,N.updateMatrices(w),w.castShadow&&D++),i.spotLightMatrix[v]=N.matrix,w.castShadow){const ae=n.get(w);ae.shadowIntensity=N.intensity,ae.shadowBias=N.bias,ae.shadowNormalBias=N.normalBias,ae.shadowRadius=N.radius,ae.shadowMapSize=N.mapSize,i.spotShadow[v]=ae,i.spotShadowMap[v]=X,E++}v++}else if(w.isRectAreaLight){const W=e.get(w);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),i.rectArea[h]=W,h++}else if(w.isPointLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const N=w.shadow,ae=n.get(w);ae.shadowIntensity=N.intensity,ae.shadowBias=N.bias,ae.shadowNormalBias=N.normalBias,ae.shadowRadius=N.radius,ae.shadowMapSize=N.mapSize,ae.shadowCameraNear=N.camera.near,ae.shadowCameraFar=N.camera.far,i.pointShadow[g]=ae,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=w.shadow.matrix,T++}i.point[g]=W,g++}else if(w.isHemisphereLight){const W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(G),W.groundColor.copy(w.groundColor).multiplyScalar(G),i.hemi[p]=W,p++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==h||x.hemiLength!==p||x.numDirectionalShadows!==S||x.numPointShadows!==T||x.numSpotShadows!==E||x.numSpotMaps!==P||x.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=h,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,x.directionalLength=m,x.pointLength=g,x.spotLength=v,x.rectAreaLength=h,x.hemiLength=p,x.numDirectionalShadows=S,x.numPointShadows=T,x.numSpotShadows=E,x.numSpotMaps=P,x.numLightProbes=L,i.version=HA++)}function l(c,u){let f=0,d=0,m=0,g=0,v=0;const h=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),f++}else if(T.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),m++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(h),o.identity(),r.copy(T.matrixWorld),r.premultiply(h),o.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(h),d++}else if(T.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(h),v++}}}return{setup:a,setupView:l,state:i}}function uh(t){const e=new XA(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qA(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new uh(t),e.set(s,[a])):r>=o.length?(a=new uh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],KA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],fh=new At,br=new Z,Wl=new Z;function ZA(t,e,n){let i=new zu;const s=new dt,r=new dt,o=new bt,a=new cy,l=new uy,c={},u=n.maxTextureSize,f={[ji]:un,[un]:ji,[_i]:_i},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:$A,fragmentShader:jA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Di;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ci(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let p=this.type;this.render=function(D,L,x){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||D.length===0)return;this.type===ZS&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jo);const M=t.getRenderTarget(),V=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=p!==this.type;G&&L.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(X=>X.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,X=D.length;Q<X;Q++){const W=D[Q],N=W.shadow;if(N===void 0){$e("WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const ae=N.getFrameExtents();s.multiply(ae),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,N.mapSize.y=r.y));const ce=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=ce,N.map===null||G===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Ar){if(W.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Jn(s.x,s.y,{format:rr,type:Ai,minFilter:jt,magFilter:jt,generateMipmaps:!1}),N.map.texture.name=W.name+".shadowMap",N.map.depthTexture=new Yr(s.x,s.y,$n),N.map.depthTexture.name=W.name+".shadowMapDepth",N.map.depthTexture.format=Ri,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Bt,N.map.depthTexture.magFilter=Bt}else W.isPointLight?(N.map=new Bm(s.x),N.map.depthTexture=new iy(s.x,ni)):(N.map=new Jn(s.x,s.y),N.map.depthTexture=new Yr(s.x,s.y,ni)),N.map.depthTexture.name=W.name+".shadowMap",N.map.depthTexture.format=Ri,this.type===jo?(N.map.depthTexture.compareFunction=ce?Bu:Fu,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Bt,N.map.depthTexture.magFilter=Bt);N.camera.updateProjectionMatrix()}const me=N.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<me;ye++){if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,ye),t.clear();else{ye===0&&(t.setRenderTarget(N.map),t.clear());const _e=N.getViewport(ye);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),z.viewport(o)}if(W.isPointLight){const _e=N.camera,De=N.matrix,Xe=W.distance||_e.far;Xe!==_e.far&&(_e.far=Xe,_e.updateProjectionMatrix()),br.setFromMatrixPosition(W.matrixWorld),_e.position.copy(br),Wl.copy(_e.position),Wl.add(YA[ye]),_e.up.copy(KA[ye]),_e.lookAt(Wl),_e.updateMatrixWorld(),De.makeTranslation(-br.x,-br.y,-br.z),fh.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),N._frustum.setFromProjectionMatrix(fh,_e.coordinateSystem,_e.reversedDepth)}else N.updateMatrices(W);i=N.getFrustum(),E(L,x,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===Ar&&S(N,x),N.needsUpdate=!1}p=this.type,h.needsUpdate=!1,t.setRenderTarget(M,V,w)};function S(D,L){const x=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Jn(s.x,s.y,{format:rr,type:Ai})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(L,null,x,d,v,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(L,null,x,m,v,null)}function T(D,L,x,M){let V=null;const w=x.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(w!==void 0)V=w;else if(V=x.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const z=V.uuid,G=L.uuid;let Q=c[z];Q===void 0&&(Q={},c[z]=Q);let X=Q[G];X===void 0&&(X=V.clone(),Q[G]=X,L.addEventListener("dispose",P)),V=X}if(V.visible=L.visible,V.wireframe=L.wireframe,M===Ar?V.side=L.shadowSide!==null?L.shadowSide:L.side:V.side=L.shadowSide!==null?L.shadowSide:f[L.side],V.alphaMap=L.alphaMap,V.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,V.map=L.map,V.clipShadows=L.clipShadows,V.clippingPlanes=L.clippingPlanes,V.clipIntersection=L.clipIntersection,V.displacementMap=L.displacementMap,V.displacementScale=L.displacementScale,V.displacementBias=L.displacementBias,V.wireframeLinewidth=L.wireframeLinewidth,V.linewidth=L.linewidth,x.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const z=t.properties.get(V);z.light=x}return V}function E(D,L,x,M,V){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===Ar)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,D.matrixWorld);const G=e.update(D),Q=D.material;if(Array.isArray(Q)){const X=G.groups;for(let W=0,N=X.length;W<N;W++){const ae=X[W],ce=Q[ae.materialIndex];if(ce&&ce.visible){const me=T(D,ce,M,V);D.onBeforeShadow(t,D,L,x,G,me,ae),t.renderBufferDirect(x,null,G,me,D,ae),D.onAfterShadow(t,D,L,x,G,me,ae)}}}else if(Q.visible){const X=T(D,Q,M,V);D.onBeforeShadow(t,D,L,x,G,X,null),t.renderBufferDirect(x,null,G,X,D,null),D.onAfterShadow(t,D,L,x,G,X,null)}}const z=D.children;for(let G=0,Q=z.length;G<Q;G++)E(z[G],L,x,M,V)}function P(D){D.target.removeEventListener("dispose",P);for(const x in c){const M=c[x],V=D.target.uuid;V in M&&(M[V].dispose(),delete M[V])}}}function JA(t,e){function n(){let B=!1;const Me=new bt;let Ee=null;const Ne=new bt(0,0,0,0);return{setMask:function(ve){Ee!==ve&&!B&&(t.colorMask(ve,ve,ve,ve),Ee=ve)},setLocked:function(ve){B=ve},setClear:function(ve,re,Oe,qe,St){St===!0&&(ve*=qe,re*=qe,Oe*=qe),Me.set(ve,re,Oe,qe),Ne.equals(Me)===!1&&(t.clearColor(ve,re,Oe,qe),Ne.copy(Me))},reset:function(){B=!1,Ee=null,Ne.set(-1,0,0,0)}}}function i(){let B=!1,Me=!1,Ee=null,Ne=null,ve=null;return{setReversed:function(re){if(Me!==re){const Oe=e.get("EXT_clip_control");re?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Me=re;const qe=ve;ve=null,this.setClear(qe)}},getReversed:function(){return Me},setTest:function(re){re?U(t.DEPTH_TEST):H(t.DEPTH_TEST)},setMask:function(re){Ee!==re&&!B&&(t.depthMask(re),Ee=re)},setFunc:function(re){if(Me&&(re=DE[re]),Ne!==re){switch(re){case pc:t.depthFunc(t.NEVER);break;case mc:t.depthFunc(t.ALWAYS);break;case gc:t.depthFunc(t.LESS);break;case ir:t.depthFunc(t.LEQUAL);break;case _c:t.depthFunc(t.EQUAL);break;case vc:t.depthFunc(t.GEQUAL);break;case xc:t.depthFunc(t.GREATER);break;case Sc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ne=re}},setLocked:function(re){B=re},setClear:function(re){ve!==re&&(ve=re,Me&&(re=1-re),t.clearDepth(re))},reset:function(){B=!1,Ee=null,Ne=null,ve=null,Me=!1}}}function s(){let B=!1,Me=null,Ee=null,Ne=null,ve=null,re=null,Oe=null,qe=null,St=null;return{setTest:function(ht){B||(ht?U(t.STENCIL_TEST):H(t.STENCIL_TEST))},setMask:function(ht){Me!==ht&&!B&&(t.stencilMask(ht),Me=ht)},setFunc:function(ht,si,ri){(Ee!==ht||Ne!==si||ve!==ri)&&(t.stencilFunc(ht,si,ri),Ee=ht,Ne=si,ve=ri)},setOp:function(ht,si,ri){(re!==ht||Oe!==si||qe!==ri)&&(t.stencilOp(ht,si,ri),re=ht,Oe=si,qe=ri)},setLocked:function(ht){B=ht},setClear:function(ht){St!==ht&&(t.clearStencil(ht),St=ht)},reset:function(){B=!1,Me=null,Ee=null,Ne=null,ve=null,re=null,Oe=null,qe=null,St=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,v=!1,h=null,p=null,S=null,T=null,E=null,P=null,D=null,L=new ft(0,0,0),x=0,M=!1,V=null,w=null,z=null,G=null,Q=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,N=0;const ae=t.getParameter(t.VERSION);ae.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(ae)[1]),W=N>=1):ae.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),W=N>=2);let ce=null,me={};const ye=t.getParameter(t.SCISSOR_BOX),_e=t.getParameter(t.VIEWPORT),De=new bt().fromArray(ye),Xe=new bt().fromArray(_e);function Ge(B,Me,Ee,Ne){const ve=new Uint8Array(4),re=t.createTexture();t.bindTexture(B,re),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<Ee;Oe++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(Me+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return re}const ie={};ie[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(t.DEPTH_TEST),o.setFunc(ir),J(!1),ne(md),U(t.CULL_FACE),F(Si);function U(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function H(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function le(B,Me){return f[B]!==Me?(t.bindFramebuffer(B,Me),f[B]=Me,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Me),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function de(B,Me){let Ee=m,Ne=!1;if(B){Ee=d.get(Me),Ee===void 0&&(Ee=[],d.set(Me,Ee));const ve=B.textures;if(Ee.length!==ve.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Oe=ve.length;re<Oe;re++)Ee[re]=t.COLOR_ATTACHMENT0+re;Ee.length=ve.length,Ne=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Ne=!0);Ne&&t.drawBuffers(Ee)}function Se(B){return g!==B?(t.useProgram(B),g=B,!0):!1}const R={[cs]:t.FUNC_ADD,[QS]:t.FUNC_SUBTRACT,[eE]:t.FUNC_REVERSE_SUBTRACT};R[tE]=t.MIN,R[nE]=t.MAX;const C={[iE]:t.ZERO,[sE]:t.ONE,[rE]:t.SRC_COLOR,[dc]:t.SRC_ALPHA,[fE]:t.SRC_ALPHA_SATURATE,[cE]:t.DST_COLOR,[aE]:t.DST_ALPHA,[oE]:t.ONE_MINUS_SRC_COLOR,[hc]:t.ONE_MINUS_SRC_ALPHA,[uE]:t.ONE_MINUS_DST_COLOR,[lE]:t.ONE_MINUS_DST_ALPHA,[dE]:t.CONSTANT_COLOR,[hE]:t.ONE_MINUS_CONSTANT_COLOR,[pE]:t.CONSTANT_ALPHA,[mE]:t.ONE_MINUS_CONSTANT_ALPHA};function F(B,Me,Ee,Ne,ve,re,Oe,qe,St,ht){if(B===Si){v===!0&&(H(t.BLEND),v=!1);return}if(v===!1&&(U(t.BLEND),v=!0),B!==JS){if(B!==h||ht!==M){if((p!==cs||E!==cs)&&(t.blendEquation(t.FUNC_ADD),p=cs,E=cs),ht)switch(B){case Ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gd:t.blendFunc(t.ONE,t.ONE);break;case _d:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",B);break}else switch(B){case Ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _d:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vd:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",B);break}S=null,T=null,P=null,D=null,L.set(0,0,0),x=0,h=B,M=ht}return}ve=ve||Me,re=re||Ee,Oe=Oe||Ne,(Me!==p||ve!==E)&&(t.blendEquationSeparate(R[Me],R[ve]),p=Me,E=ve),(Ee!==S||Ne!==T||re!==P||Oe!==D)&&(t.blendFuncSeparate(C[Ee],C[Ne],C[re],C[Oe]),S=Ee,T=Ne,P=re,D=Oe),(qe.equals(L)===!1||St!==x)&&(t.blendColor(qe.r,qe.g,qe.b,St),L.copy(qe),x=St),h=B,M=!1}function ee(B,Me){B.side===_i?H(t.CULL_FACE):U(t.CULL_FACE);let Ee=B.side===un;Me&&(Ee=!Ee),J(Ee),B.blending===Ys&&B.transparent===!1?F(Si):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ne=B.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),he(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?U(t.SAMPLE_ALPHA_TO_COVERAGE):H(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){V!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),V=B)}function ne(B){B!==YS?(U(t.CULL_FACE),B!==w&&(B===md?t.cullFace(t.BACK):B===KS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):H(t.CULL_FACE),w=B}function A(B){B!==z&&(W&&t.lineWidth(B),z=B)}function he(B,Me,Ee){B?(U(t.POLYGON_OFFSET_FILL),(G!==Me||Q!==Ee)&&(G=Me,Q=Ee,o.getReversed()&&(Me=-Me),t.polygonOffset(Me,Ee))):H(t.POLYGON_OFFSET_FILL)}function ue(B){B?U(t.SCISSOR_TEST):H(t.SCISSOR_TEST)}function oe(B){B===void 0&&(B=t.TEXTURE0+X-1),ce!==B&&(t.activeTexture(B),ce=B)}function fe(B,Me,Ee){Ee===void 0&&(ce===null?Ee=t.TEXTURE0+X-1:Ee=ce);let Ne=me[Ee];Ne===void 0&&(Ne={type:void 0,texture:void 0},me[Ee]=Ne),(Ne.type!==B||Ne.texture!==Me)&&(ce!==Ee&&(t.activeTexture(Ee),ce=Ee),t.bindTexture(B,Me||ie[B]),Ne.type=B,Ne.texture=Me)}function y(){const B=me[ce];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function $(){try{t.texSubImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function se(){try{t.texSubImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function be(){try{t.compressedTexSubImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function ge(){try{t.texStorage2D(...arguments)}catch(B){at("WebGLState:",B)}}function Le(){try{t.texStorage3D(...arguments)}catch(B){at("WebGLState:",B)}}function Be(){try{t.texImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function pe(){try{t.texImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function xe(B){De.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),De.copy(B))}function Te(B){Xe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function Ce(B,Me){let Ee=c.get(Me);Ee===void 0&&(Ee=new WeakMap,c.set(Me,Ee));let Ne=Ee.get(B);Ne===void 0&&(Ne=t.getUniformBlockIndex(Me,B.name),Ee.set(B,Ne))}function Pe(B,Me){const Ne=c.get(Me).get(B);l.get(Me)!==Ne&&(t.uniformBlockBinding(Me,Ne,B.__bindingPointIndex),l.set(Me,Ne))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ce=null,me={},f={},d=new WeakMap,m=[],g=null,v=!1,h=null,p=null,S=null,T=null,E=null,P=null,D=null,L=new ft(0,0,0),x=0,M=!1,V=null,w=null,z=null,G=null,Q=null,De.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:H,bindFramebuffer:le,drawBuffers:de,useProgram:Se,setBlending:F,setMaterial:ee,setFlipSided:J,setCullFace:ne,setLineWidth:A,setPolygonOffset:he,setScissorTest:ue,activeTexture:oe,bindTexture:fe,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:Be,texImage3D:pe,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:ge,texStorage3D:Le,texSubImage2D:$,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:be,scissor:xe,viewport:Te,reset:Ye}}function QA(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):da("canvas")}function v(y,_,I){let $=1;const se=fe(y);if((se.width>I||se.height>I)&&($=I/Math.max(se.width,se.height)),$<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const j=Math.floor($*se.width),be=Math.floor($*se.height);f===void 0&&(f=g(j,be));const ge=_?g(j,be):f;return ge.width=j,ge.height=be,ge.getContext("2d").drawImage(y,0,0,j,be),$e("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+be+")."),ge}else return"data"in y&&$e("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),y;return y}function h(y){return y.generateMipmaps}function p(y){t.generateMipmap(y)}function S(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(y,_,I,$,se=!1){if(y!==null){if(t[y]!==void 0)return t[y];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let j=_;if(_===t.RED&&(I===t.FLOAT&&(j=t.R32F),I===t.HALF_FLOAT&&(j=t.R16F),I===t.UNSIGNED_BYTE&&(j=t.R8)),_===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.R8UI),I===t.UNSIGNED_SHORT&&(j=t.R16UI),I===t.UNSIGNED_INT&&(j=t.R32UI),I===t.BYTE&&(j=t.R8I),I===t.SHORT&&(j=t.R16I),I===t.INT&&(j=t.R32I)),_===t.RG&&(I===t.FLOAT&&(j=t.RG32F),I===t.HALF_FLOAT&&(j=t.RG16F),I===t.UNSIGNED_BYTE&&(j=t.RG8)),_===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.RG8UI),I===t.UNSIGNED_SHORT&&(j=t.RG16UI),I===t.UNSIGNED_INT&&(j=t.RG32UI),I===t.BYTE&&(j=t.RG8I),I===t.SHORT&&(j=t.RG16I),I===t.INT&&(j=t.RG32I)),_===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.RGB8UI),I===t.UNSIGNED_SHORT&&(j=t.RGB16UI),I===t.UNSIGNED_INT&&(j=t.RGB32UI),I===t.BYTE&&(j=t.RGB8I),I===t.SHORT&&(j=t.RGB16I),I===t.INT&&(j=t.RGB32I)),_===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),I===t.UNSIGNED_INT&&(j=t.RGBA32UI),I===t.BYTE&&(j=t.RGBA8I),I===t.SHORT&&(j=t.RGBA16I),I===t.INT&&(j=t.RGBA32I)),_===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),_===t.RGBA){const be=se?fa:st.getTransfer($);I===t.FLOAT&&(j=t.RGBA32F),I===t.HALF_FLOAT&&(j=t.RGBA16F),I===t.UNSIGNED_BYTE&&(j=be===pt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(y,_){let I;return y?_===null||_===ni||_===$r?I=t.DEPTH24_STENCIL8:_===$n?I=t.DEPTH32F_STENCIL8:_===qr&&(I=t.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ni||_===$r?I=t.DEPTH_COMPONENT24:_===$n?I=t.DEPTH_COMPONENT32F:_===qr&&(I=t.DEPTH_COMPONENT16),I}function P(y,_){return h(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bt&&y.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function D(y){const _=y.target;_.removeEventListener("dispose",D),x(_),_.isVideoTexture&&u.delete(_)}function L(y){const _=y.target;_.removeEventListener("dispose",L),V(_)}function x(y){const _=i.get(y);if(_.__webglInit===void 0)return;const I=y.source,$=d.get(I);if($){const se=$[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(y),Object.keys($).length===0&&d.delete(I)}i.remove(y)}function M(y){const _=i.get(y);t.deleteTexture(_.__webglTexture);const I=y.source,$=d.get(I);delete $[_.__cacheKey],o.memory.textures--}function V(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let se=0;se<_.__webglFramebuffer[$].length;se++)t.deleteFramebuffer(_.__webglFramebuffer[$][se]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=y.textures;for(let $=0,se=I.length;$<se;$++){const j=i.get(I[$]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[$])}i.remove(y)}let w=0;function z(){w=0}function G(){const y=w;return y>=s.maxTextures&&$e("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),w+=1,y}function Q(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function X(y,_){const I=i.get(y);if(y.isVideoTexture&&ue(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&I.__version!==y.version){const $=y.image;if($===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(I,y,_);return}}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+_)}function W(y,_){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){ie(I,y,_);return}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+_)}function N(y,_){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){ie(I,y,_);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+_)}function ae(y,_){const I=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&I.__version!==y.version){U(I,y,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+_)}const ce={[Ec]:t.REPEAT,[vi]:t.CLAMP_TO_EDGE,[yc]:t.MIRRORED_REPEAT},me={[Bt]:t.NEAREST,[vE]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[hl]:t.LINEAR_MIPMAP_NEAREST,[hs]:t.LINEAR_MIPMAP_LINEAR},ye={[yE]:t.NEVER,[RE]:t.ALWAYS,[ME]:t.LESS,[Fu]:t.LEQUAL,[bE]:t.EQUAL,[Bu]:t.GEQUAL,[TE]:t.GREATER,[AE]:t.NOTEQUAL};function _e(y,_){if(_.type===$n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===hl||_.magFilter===_o||_.magFilter===hs||_.minFilter===jt||_.minFilter===hl||_.minFilter===_o||_.minFilter===hs)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,ce[_.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,ce[_.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,ce[_.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,me[_.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==_o&&_.minFilter!==hs||_.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function De(y,_){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",D));const $=_.source;let se=d.get($);se===void 0&&(se={},d.set($,se));const j=Q(_);if(j!==y.__cacheKey){se[j]===void 0&&(se[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),se[j].usedTimes++;const be=se[y.__cacheKey];be!==void 0&&(se[y.__cacheKey].usedTimes--,be.usedTimes===0&&M(_)),y.__cacheKey=j,y.__webglTexture=se[j].texture}return I}function Xe(y,_,I){return Math.floor(Math.floor(y/I)/_)}function Ge(y,_,I,$){const j=y.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,I,$,_.data);else{j.sort((pe,xe)=>pe.start-xe.start);let be=0;for(let pe=1;pe<j.length;pe++){const xe=j[be],Te=j[pe],Ce=xe.start+xe.count,Pe=Xe(Te.start,_.width,4),Ye=Xe(xe.start,_.width,4);Te.start<=Ce+1&&Pe===Ye&&Xe(Te.start+Te.count-1,_.width,4)===Pe?xe.count=Math.max(xe.count,Te.start+Te.count-xe.start):(++be,j[be]=Te)}j.length=be+1;const ge=t.getParameter(t.UNPACK_ROW_LENGTH),Le=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let pe=0,xe=j.length;pe<xe;pe++){const Te=j[pe],Ce=Math.floor(Te.start/4),Pe=Math.ceil(Te.count/4),Ye=Ce%_.width,B=Math.floor(Ce/_.width),Me=Pe,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Ye,B,Me,Ee,I,$,_.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ge),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function ie(y,_,I){let $=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=t.TEXTURE_3D);const se=De(y,_),j=_.source;n.bindTexture($,y.__webglTexture,t.TEXTURE0+I);const be=i.get(j);if(j.version!==be.__version||se===!0){n.activeTexture(t.TEXTURE0+I);const ge=st.getPrimaries(st.workingColorSpace),Le=_.colorSpace===Wi?null:st.getPrimaries(_.colorSpace),Be=_.colorSpace===Wi||ge===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let pe=v(_.image,!1,s.maxTextureSize);pe=oe(_,pe);const xe=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let Ce=T(_.internalFormat,xe,Te,_.colorSpace,_.isVideoTexture);_e($,_);let Pe;const Ye=_.mipmaps,B=_.isVideoTexture!==!0,Me=be.__version===void 0||se===!0,Ee=j.dataReady,Ne=P(_,pe);if(_.isDepthTexture)Ce=E(_.format===ps,_.type),Me&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ce,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Ce,pe.width,pe.height,0,xe,Te,null));else if(_.isDataTexture)if(Ye.length>0){B&&Me&&n.texStorage2D(t.TEXTURE_2D,Ne,Ce,Ye[0].width,Ye[0].height);for(let ve=0,re=Ye.length;ve<re;ve++)Pe=Ye[ve],B?Ee&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,xe,Te,Pe.data):n.texImage2D(t.TEXTURE_2D,ve,Ce,Pe.width,Pe.height,0,xe,Te,Pe.data);_.generateMipmaps=!1}else B?(Me&&n.texStorage2D(t.TEXTURE_2D,Ne,Ce,pe.width,pe.height),Ee&&Ge(_,pe,xe,Te)):n.texImage2D(t.TEXTURE_2D,0,Ce,pe.width,pe.height,0,xe,Te,pe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ne,Ce,Ye[0].width,Ye[0].height,pe.depth);for(let ve=0,re=Ye.length;ve<re;ve++)if(Pe=Ye[ve],_.format!==Cn)if(xe!==null)if(B){if(Ee)if(_.layerUpdates.size>0){const Oe=Gd(Pe.width,Pe.height,_.format,_.type);for(const qe of _.layerUpdates){const St=Pe.data.subarray(qe*Oe/Pe.data.BYTES_PER_ELEMENT,(qe+1)*Oe/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,qe,Pe.width,Pe.height,1,xe,St)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,pe.depth,xe,Pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Ce,Pe.width,Pe.height,pe.depth,0,Pe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,pe.depth,xe,Te,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Ce,Pe.width,Pe.height,pe.depth,0,xe,Te,Pe.data)}else{B&&Me&&n.texStorage2D(t.TEXTURE_2D,Ne,Ce,Ye[0].width,Ye[0].height);for(let ve=0,re=Ye.length;ve<re;ve++)Pe=Ye[ve],_.format!==Cn?xe!==null?B?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,xe,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Ce,Pe.width,Pe.height,0,Pe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Ee&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,xe,Te,Pe.data):n.texImage2D(t.TEXTURE_2D,ve,Ce,Pe.width,Pe.height,0,xe,Te,Pe.data)}else if(_.isDataArrayTexture)if(B){if(Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ne,Ce,pe.width,pe.height,pe.depth),Ee)if(_.layerUpdates.size>0){const ve=Gd(pe.width,pe.height,_.format,_.type);for(const re of _.layerUpdates){const Oe=pe.data.subarray(re*ve/pe.data.BYTES_PER_ELEMENT,(re+1)*ve/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,pe.width,pe.height,1,xe,Te,Oe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,xe,Te,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,pe.width,pe.height,pe.depth,0,xe,Te,pe.data);else if(_.isData3DTexture)B?(Me&&n.texStorage3D(t.TEXTURE_3D,Ne,Ce,pe.width,pe.height,pe.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,xe,Te,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,pe.width,pe.height,pe.depth,0,xe,Te,pe.data);else if(_.isFramebufferTexture){if(Me)if(B)n.texStorage2D(t.TEXTURE_2D,Ne,Ce,pe.width,pe.height);else{let ve=pe.width,re=pe.height;for(let Oe=0;Oe<Ne;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Ce,ve,re,0,xe,Te,null),ve>>=1,re>>=1}}else if(Ye.length>0){if(B&&Me){const ve=fe(Ye[0]);n.texStorage2D(t.TEXTURE_2D,Ne,Ce,ve.width,ve.height)}for(let ve=0,re=Ye.length;ve<re;ve++)Pe=Ye[ve],B?Ee&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,xe,Te,Pe):n.texImage2D(t.TEXTURE_2D,ve,Ce,xe,Te,Pe);_.generateMipmaps=!1}else if(B){if(Me){const ve=fe(pe);n.texStorage2D(t.TEXTURE_2D,Ne,Ce,ve.width,ve.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Te,pe)}else n.texImage2D(t.TEXTURE_2D,0,Ce,xe,Te,pe);h(_)&&p($),be.__version=j.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function U(y,_,I){if(_.image.length!==6)return;const $=De(y,_),se=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+I);const j=i.get(se);if(se.version!==j.__version||$===!0){n.activeTexture(t.TEXTURE0+I);const be=st.getPrimaries(st.workingColorSpace),ge=_.colorSpace===Wi?null:st.getPrimaries(_.colorSpace),Le=_.colorSpace===Wi||be===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=_.isCompressedTexture||_.image[0].isCompressedTexture,pe=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let re=0;re<6;re++)!Be&&!pe?xe[re]=v(_.image[re],!0,s.maxCubemapSize):xe[re]=pe?_.image[re].image:_.image[re],xe[re]=oe(_,xe[re]);const Te=xe[0],Ce=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),Ye=T(_.internalFormat,Ce,Pe,_.colorSpace),B=_.isVideoTexture!==!0,Me=j.__version===void 0||$===!0,Ee=se.dataReady;let Ne=P(_,Te);_e(t.TEXTURE_CUBE_MAP,_);let ve;if(Be){B&&Me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,Ye,Te.width,Te.height);for(let re=0;re<6;re++){ve=xe[re].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){const qe=ve[Oe];_.format!==Cn?Ce!==null?B?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,qe.width,qe.height,Ce,qe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,Ye,qe.width,qe.height,0,qe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,qe.width,qe.height,Ce,Pe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,Ye,qe.width,qe.height,0,Ce,Pe,qe.data)}}}else{if(ve=_.mipmaps,B&&Me){ve.length>0&&Ne++;const re=fe(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,Ye,re.width,re.height)}for(let re=0;re<6;re++)if(pe){B?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,xe[re].width,xe[re].height,Ce,Pe,xe[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,xe[re].width,xe[re].height,0,Ce,Pe,xe[re].data);for(let Oe=0;Oe<ve.length;Oe++){const St=ve[Oe].image[re].image;B?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,St.width,St.height,Ce,Pe,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,Ye,St.width,St.height,0,Ce,Pe,St.data)}}else{B?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,Pe,xe[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,Ce,Pe,xe[re]);for(let Oe=0;Oe<ve.length;Oe++){const qe=ve[Oe];B?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,Ce,Pe,qe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,Ye,Ce,Pe,qe.image[re])}}}h(_)&&p(t.TEXTURE_CUBE_MAP),j.__version=se.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function H(y,_,I,$,se,j){const be=r.convert(I.format,I.colorSpace),ge=r.convert(I.type),Le=T(I.internalFormat,be,ge,I.colorSpace),Be=i.get(_),pe=i.get(I);if(pe.__renderTarget=_,!Be.__hasExternalTextures){const xe=Math.max(1,_.width>>j),Te=Math.max(1,_.height>>j);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,j,Le,xe,Te,_.depth,0,be,ge,null):n.texImage2D(se,j,Le,xe,Te,0,be,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),he(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,se,pe.__webglTexture,0,A(_)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,se,pe.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(y,_,I){if(t.bindRenderbuffer(t.RENDERBUFFER,y),_.depthBuffer){const $=_.depthTexture,se=$&&$.isDepthTexture?$.type:null,j=E(_.stencilBuffer,se),be=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;he(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(_),j,_.width,_.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(_),j,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,j,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,y)}else{const $=_.textures;for(let se=0;se<$.length;se++){const j=$[se],be=r.convert(j.format,j.colorSpace),ge=r.convert(j.type),Le=T(j.internalFormat,be,ge,j.colorSpace);he(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(_),Le,_.width,_.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(_),Le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Le,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(y,_,I){const $=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(_.depthTexture);if(se.__renderTarget=_,(!se.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(se.__webglInit===void 0&&(se.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),_e(t.TEXTURE_CUBE_MAP,_.depthTexture);const Be=r.convert(_.depthTexture.format),pe=r.convert(_.depthTexture.type);let xe;_.depthTexture.format===Ri?xe=t.DEPTH_COMPONENT24:_.depthTexture.format===ps&&(xe=t.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,xe,_.width,_.height,0,Be,pe,null)}}else X(_.depthTexture,0);const j=se.__webglTexture,be=A(_),ge=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,Le=_.depthTexture.format===ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ri)he(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,ge,j,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,Le,ge,j,0);else if(_.depthTexture.format===ps)he(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,ge,j,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,Le,ge,j,0);else throw new Error("Unknown depthTexture format")}function Se(y){const _=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const $=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",se)};$.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=$}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let $=0;$<6;$++)de(_.__webglFramebuffer[$],y,$);else{const $=y.texture.mipmaps;$&&$.length>0?de(_.__webglFramebuffer[0],y,0):de(_.__webglFramebuffer,y,0)}else if(I){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=t.createRenderbuffer(),le(_.__webglDepthbuffer[$],y,!1);else{const se=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,j)}}else{const $=y.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),le(_.__webglDepthbuffer,y,!1);else{const se=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(y,_,I){const $=i.get(y);_!==void 0&&H($.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Se(y)}function C(y){const _=y.texture,I=i.get(y),$=i.get(_);y.addEventListener("dispose",L);const se=y.textures,j=y.isWebGLCubeRenderTarget===!0,be=se.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=_.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ge]=[];for(let Le=0;Le<_.mipmaps.length;Le++)I.__webglFramebuffer[ge][Le]=t.createFramebuffer()}else I.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)I.__webglFramebuffer[ge]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(be)for(let ge=0,Le=se.length;ge<Le;ge++){const Be=i.get(se[ge]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&he(y)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){const Le=se[ge];I.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ge]);const Be=r.convert(Le.format,Le.colorSpace),pe=r.convert(Le.type),xe=T(Le.internalFormat,Be,pe,Le.colorSpace,y.isXRRenderTarget===!0),Te=A(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,xe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,I.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),le(I.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),_e(t.TEXTURE_CUBE_MAP,_);for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)H(I.__webglFramebuffer[ge][Le],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le);else H(I.__webglFramebuffer[ge],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);h(_)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let ge=0,Le=se.length;ge<Le;ge++){const Be=se[ge],pe=i.get(Be);let xe=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(xe=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,pe.__webglTexture),_e(xe,Be),H(I.__webglFramebuffer,y,Be,t.COLOR_ATTACHMENT0+ge,xe,0),h(Be)&&p(xe)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ge=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,$.__webglTexture),_e(ge,_),_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)H(I.__webglFramebuffer[Le],y,_,t.COLOR_ATTACHMENT0,ge,Le);else H(I.__webglFramebuffer,y,_,t.COLOR_ATTACHMENT0,ge,0);h(_)&&p(ge),n.unbindTexture()}y.depthBuffer&&Se(y)}function F(y){const _=y.textures;for(let I=0,$=_.length;I<$;I++){const se=_[I];if(h(se)){const j=S(y),be=i.get(se).__webglTexture;n.bindTexture(j,be),p(j),n.unbindTexture()}}}const ee=[],J=[];function ne(y){if(y.samples>0){if(he(y)===!1){const _=y.textures,I=y.width,$=y.height;let se=t.COLOR_BUFFER_BIT;const j=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(y),ge=_.length>1;if(ge)for(let Be=0;Be<_.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Le=y.texture.mipmaps;Le&&Le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Be=0;Be<_.length;Be++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[Be]);const pe=i.get(_[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,I,$,0,0,I,$,se,t.NEAREST),l===!0&&(ee.length=0,J.length=0,ee.push(t.COLOR_ATTACHMENT0+Be),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ee.push(j),J.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,J)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Be=0;Be<_.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,be.__webglColorRenderbuffer[Be]);const pe=i.get(_[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function A(y){return Math.min(s.maxSamples,y.samples)}function he(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ue(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function oe(y,_){const I=y.colorSpace,$=y.format,se=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==or&&I!==Wi&&(st.getTransfer(I)===pt?($!==Cn||se!==mn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",I)),_}function fe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=N,this.setTextureCube=ae,this.rebindTextures=R,this.setupRenderTarget=C,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=H,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function eR(t,e){function n(i,s=Wi){let r;const o=st.getTransfer(s);if(i===mn)return t.UNSIGNED_BYTE;if(i===Iu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Lu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Sm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Em)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===vm)return t.BYTE;if(i===xm)return t.SHORT;if(i===qr)return t.UNSIGNED_SHORT;if(i===Du)return t.INT;if(i===ni)return t.UNSIGNED_INT;if(i===$n)return t.FLOAT;if(i===Ai)return t.HALF_FLOAT;if(i===ym)return t.ALPHA;if(i===Mm)return t.RGB;if(i===Cn)return t.RGBA;if(i===Ri)return t.DEPTH_COMPONENT;if(i===ps)return t.DEPTH_STENCIL;if(i===bm)return t.RED;if(i===Nu)return t.RED_INTEGER;if(i===rr)return t.RG;if(i===Uu)return t.RG_INTEGER;if(i===Ou)return t.RGBA_INTEGER;if(i===Yo||i===Ko||i===Zo||i===Jo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===bc||i===Tc||i===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===wc||i===Cc||i===Pc||i===Dc||i===Ic||i===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rc||i===wc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pc)return r.COMPRESSED_R11_EAC;if(i===Dc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ic)return r.COMPRESSED_RG11_EAC;if(i===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===Vc||i===kc||i===zc||i===Gc||i===Hc||i===Wc||i===Xc||i===qc||i===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$c)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Yc||i===Kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zc||i===Jc||i===Qc||i===eu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Lm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ii({vertexShader:tR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ci(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sR extends fr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",h=new iR,p={},S=n.getContextAttributes();let T=null,E=null;const P=[],D=[],L=new dt;let x=null;const M=new En;M.viewport=new bt;const V=new En;V.viewport=new bt;const w=[M,V],z=new gy;let G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let U=P[ie];return U===void 0&&(U=new El,P[ie]=U),U.getTargetRaySpace()},this.getControllerGrip=function(ie){let U=P[ie];return U===void 0&&(U=new El,P[ie]=U),U.getGripSpace()},this.getHand=function(ie){let U=P[ie];return U===void 0&&(U=new El,P[ie]=U),U.getHandSpace()};function X(ie){const U=D.indexOf(ie.inputSource);if(U===-1)return;const H=P[U];H!==void 0&&(H.update(ie.inputSource,ie.frame,c||o),H.dispatchEvent({type:ie.type,data:ie.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",N);for(let ie=0;ie<P.length;ie++){const U=D[ie];U!==null&&(D[ie]=null,P[ie].disconnect(U))}G=null,Q=null,h.reset();for(const ie in p)delete p[ie];e.setRenderTarget(T),m=null,d=null,f=null,s=null,E=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,le=null,de=null;S.depth&&(de=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,H=S.stencil?ps:Ri,le=S.stencil?$r:ni);const Se={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Jn(d.textureWidth,d.textureHeight,{format:Cn,type:mn,depthTexture:new Yr(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const H={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,H),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Jn(m.framebufferWidth,m.framebufferHeight,{format:Cn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(ie){for(let U=0;U<ie.removed.length;U++){const H=ie.removed[U],le=D.indexOf(H);le>=0&&(D[le]=null,P[le].disconnect(H))}for(let U=0;U<ie.added.length;U++){const H=ie.added[U];let le=D.indexOf(H);if(le===-1){for(let Se=0;Se<P.length;Se++)if(Se>=D.length){D.push(H),le=Se;break}else if(D[Se]===null){D[Se]=H,le=Se;break}if(le===-1)break}const de=P[le];de&&de.connect(H)}}const ae=new Z,ce=new Z;function me(ie,U,H){ae.setFromMatrixPosition(U.matrixWorld),ce.setFromMatrixPosition(H.matrixWorld);const le=ae.distanceTo(ce),de=U.projectionMatrix.elements,Se=H.projectionMatrix.elements,R=de[14]/(de[10]-1),C=de[14]/(de[10]+1),F=(de[9]+1)/de[5],ee=(de[9]-1)/de[5],J=(de[8]-1)/de[0],ne=(Se[8]+1)/Se[0],A=R*J,he=R*ne,ue=le/(-J+ne),oe=ue*-J;if(U.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(oe),ie.translateZ(ue),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),de[10]===-1)ie.projectionMatrix.copy(U.projectionMatrix),ie.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const fe=R+ue,y=C+ue,_=A-oe,I=he+(le-oe),$=F*C/y*fe,se=ee*C/y*fe;ie.projectionMatrix.makePerspective(_,I,$,se,fe,y),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ye(ie,U){U===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(U.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let U=ie.near,H=ie.far;h.texture!==null&&(h.depthNear>0&&(U=h.depthNear),h.depthFar>0&&(H=h.depthFar)),z.near=V.near=M.near=U,z.far=V.far=M.far=H,(G!==z.near||Q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,Q=z.far),z.layers.mask=ie.layers.mask|6,M.layers.mask=z.layers.mask&-5,V.layers.mask=z.layers.mask&-3;const le=ie.parent,de=z.cameras;ye(z,le);for(let Se=0;Se<de.length;Se++)ye(de[Se],le);de.length===2?me(z,M,V):z.projectionMatrix.copy(M.projectionMatrix),_e(ie,z,le)};function _e(ie,U,H){H===null?ie.matrix.copy(U.matrixWorld):(ie.matrix.copy(H.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(U.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(U.projectionMatrix),ie.projectionMatrixInverse.copy(U.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=tu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ie)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(z)},this.getCameraTexture=function(ie){return p[ie]};let De=null;function Xe(ie,U){if(u=U.getViewerPose(c||o),g=U,u!==null){const H=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let le=!1;H.length!==z.cameras.length&&(z.cameras.length=0,le=!0);for(let C=0;C<H.length;C++){const F=H[C];let ee=null;if(m!==null)ee=m.getViewport(F);else{const ne=f.getViewSubImage(d,F);ee=ne.viewport,C===0&&(e.setRenderTargetTextures(E,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(E))}let J=w[C];J===void 0&&(J=new En,J.layers.enable(C),J.viewport=new bt,w[C]=J),J.matrix.fromArray(F.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(F.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ee.x,ee.y,ee.width,ee.height),C===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),le===!0&&z.cameras.push(J)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const C=f.getDepthInformation(H[0]);C&&C.isValid&&C.texture&&h.init(C,s.renderState)}if(de&&de.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<H.length;C++){const F=H[C].camera;if(F){let ee=p[F];ee||(ee=new Lm,p[F]=ee);const J=f.getCameraImage(F);ee.sourceTexture=J}}}}for(let H=0;H<P.length;H++){const le=D[H],de=P[H];le!==null&&de!==void 0&&de.update(le,U,c||o)}De&&De(ie,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}const Ge=new Fm;Ge.setAnimationLoop(Xe),this.setAnimationLoop=function(ie){De=ie},this.dispose=function(){}}}const rs=new wi,rR=new At;function oR(t,e){function n(h,p){h.matrixAutoUpdate===!0&&h.updateMatrix(),p.value.copy(h.matrix)}function i(h,p){p.color.getRGB(h.fogColor.value,Nm(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function s(h,p,S,T,E){p.isMeshBasicMaterial?r(h,p):p.isMeshLambertMaterial?(r(h,p),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(h,p),f(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&m(h,p,E)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),v(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(o(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?l(h,p,S,T):p.isSpriteMaterial?c(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map,n(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform)),p.bumpMap&&(h.bumpMap.value=p.bumpMap,n(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===un&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,n(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===un&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,n(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,h.emissiveMapTransform)),p.specularMap&&(h.specularMap.value=p.specularMap,n(p.specularMap,h.specularMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const S=e.get(p),T=S.envMap,E=S.envMapRotation;T&&(h.envMap.value=T,rs.copy(E),rs.x*=-1,rs.y*=-1,rs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(rs)),h.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap&&(h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,h.lightMapTransform)),p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,h.aoMapTransform))}function o(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map&&(h.map.value=p.map,n(p.map,h.mapTransform))}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function l(h,p,S,T){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*S,h.scale.value=T*.5,p.map&&(h.map.value=p.map,n(p.map,h.uvTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function c(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map,n(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,n(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function f(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.metalness.value=p.metalness,p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,h.metalnessMapTransform)),h.roughness.value=p.roughness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,h.roughnessMapTransform)),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function m(h,p,S){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,h.sheenColorMapTransform)),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,h.sheenRoughnessMapTransform))),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,h.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(h.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&h.clearcoatNormalScale.value.negate())),p.dispersion>0&&(h.dispersion.value=p.dispersion),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,h.iridescenceMapTransform)),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,h.transmissionMapTransform)),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(h.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,h.specularColorMapTransform)),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function v(h,p){const S=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(S.matrixWorld),h.nearDistance.value=S.shadow.camera.near,h.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const E=T.program;i.uniformBlockBinding(S,E)}function c(S,T){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",h));const P=T.program;i.updateUBOMapping(S,P);const D=e.render.frame;r[S.id]!==D&&(d(S),r[S.id]=D)}function u(S){const T=f();S.__bindingPointIndex=T;const E=t.createBuffer(),P=S.__size,D=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=s[S.id],E=S.uniforms,P=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let D=0,L=E.length;D<L;D++){const x=Array.isArray(E[D])?E[D]:[E[D]];for(let M=0,V=x.length;M<V;M++){const w=x[M];if(m(w,D,M,P)===!0){const z=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let Q=0;for(let X=0;X<G.length;X++){const W=G[X],N=v(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+Q,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,Q),Q+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,T,E,P){const D=S.value,L=T+"_"+E;if(P[L]===void 0)return typeof D=="number"||typeof D=="boolean"?P[L]=D:P[L]=D.clone(),!0;{const x=P[L];if(typeof D=="number"||typeof D=="boolean"){if(x!==D)return P[L]=D,!0}else if(x.equals(D)===!1)return x.copy(D),!0}return!1}function g(S){const T=S.uniforms;let E=0;const P=16;for(let L=0,x=T.length;L<x;L++){const M=Array.isArray(T[L])?T[L]:[T[L]];for(let V=0,w=M.length;V<w;V++){const z=M[V],G=Array.isArray(z.value)?z.value:[z.value];for(let Q=0,X=G.length;Q<X;Q++){const W=G[Q],N=v(W),ae=E%P,ce=ae%N.boundary,me=ae+ce;E+=ce,me!==0&&P-me<N.storage&&(E+=P-me),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=N.storage}}}const D=E%P;return D>0&&(E+=P-D),S.__size=E,S.__cache={},this}function v(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",S),T}function h(S){const T=S.target;T.removeEventListener("dispose",h);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function cR(){return Bn===null&&(Bn=new QE(lR,16,16,rr,Ai),Bn.name="DFG_LUT",Bn.minFilter=jt,Bn.magFilter=jt,Bn.wrapS=vi,Bn.wrapT=vi,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class uR{constructor(e={}){const{canvas:n=CE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=m,h=new Set([Ou,Uu,Nu]),p=new Set([mn,ni,qr,$r,Iu,Lu]),S=new Uint32Array(4),T=new Int32Array(4);let E=null,P=null;const D=[],L=[];let x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let V=!1;this._outputColorSpace=pn;let w=0,z=0,G=null,Q=-1,X=null;const W=new bt,N=new bt;let ae=null;const ce=new ft(0);let me=0,ye=n.width,_e=n.height,De=1,Xe=null,Ge=null;const ie=new bt(0,0,ye,_e),U=new bt(0,0,ye,_e);let H=!1;const le=new zu;let de=!1,Se=!1;const R=new At,C=new Z,F=new bt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ne(){return G===null?De:1}let A=i;function he(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pu}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",qe,!1),n.addEventListener("webglcontextcreationerror",St,!1),A===null){const k="webgl2";if(A=he(k,b),A===null)throw he(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw at("WebGLRenderer: "+b.message),b}let ue,oe,fe,y,_,I,$,se,j,be,ge,Le,Be,pe,xe,Te,Ce,Pe,Ye,B,Me,Ee,Ne;function ve(){ue=new uT(A),ue.init(),Me=new eR(A,ue),oe=new nT(A,ue,e,Me),fe=new JA(A,ue),oe.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),y=new hT(A),_=new BA,I=new QA(A,ue,fe,_,oe,Me,y),$=new cT(M),se=new vy(A),Ee=new eT(A,se),j=new fT(A,se,y,Ee),be=new mT(A,j,se,Ee,y),Pe=new pT(A,oe,I),xe=new iT(_),ge=new FA(M,$,ue,oe,Ee,xe),Le=new oR(M,_),Be=new kA,pe=new qA(ue),Ce=new Qb(M,$,fe,be,g,l),Te=new ZA(M,be,oe),Ne=new aR(A,y,oe,fe),Ye=new tT(A,ue,y),B=new dT(A,ue,y),y.programs=ge.programs,M.capabilities=oe,M.extensions=ue,M.properties=_,M.renderLists=Be,M.shadowMap=Te,M.state=fe,M.info=y}ve(),v!==mn&&(x=new _T(v,n.width,n.height,s,r));const re=new sR(M,A);this.xr=re,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(b){b!==void 0&&(De=b,this.setSize(ye,_e,!1))},this.getSize=function(b){return b.set(ye,_e)},this.setSize=function(b,k,te=!0){if(re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=b,_e=k,n.width=Math.floor(b*De),n.height=Math.floor(k*De),te===!0&&(n.style.width=b+"px",n.style.height=k+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(ye*De,_e*De).floor()},this.setDrawingBufferSize=function(b,k,te){ye=b,_e=k,De=te,n.width=Math.floor(b*te),n.height=Math.floor(k*te),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(v===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(W)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,k,te,K){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,k,te,K),fe.viewport(W.copy(ie).multiplyScalar(De).round())},this.getScissor=function(b){return b.copy(U)},this.setScissor=function(b,k,te,K){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,k,te,K),fe.scissor(N.copy(U).multiplyScalar(De).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(b){fe.setScissorTest(H=b)},this.setOpaqueSort=function(b){Xe=b},this.setTransparentSort=function(b){Ge=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,te=!0){let K=0;if(b){let Y=!1;if(G!==null){const Re=G.texture.format;Y=h.has(Re)}if(Y){const Re=G.texture.type,Ie=p.has(Re),we=Ce.getClearColor(),Fe=Ce.getClearAlpha(),ke=we.r,Ke=we.g,Qe=we.b;Ie?(S[0]=ke,S[1]=Ke,S[2]=Qe,S[3]=Fe,A.clearBufferuiv(A.COLOR,0,S)):(T[0]=ke,T[1]=Ke,T[2]=Qe,T[3]=Fe,A.clearBufferiv(A.COLOR,0,T))}else K|=A.COLOR_BUFFER_BIT}k&&(K|=A.DEPTH_BUFFER_BIT),te&&(K|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&A.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",qe,!1),n.removeEventListener("webglcontextcreationerror",St,!1),Ce.dispose(),Be.dispose(),pe.dispose(),_.dispose(),$.dispose(),be.dispose(),Ee.dispose(),Ne.dispose(),ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",Wu),re.removeEventListener("sessionend",Xu),Ki.stop()};function Oe(b){b.preventDefault(),Md("WebGLRenderer: Context Lost."),V=!0}function qe(){Md("WebGLRenderer: Context Restored."),V=!1;const b=y.autoReset,k=Te.enabled,te=Te.autoUpdate,K=Te.needsUpdate,Y=Te.type;ve(),y.autoReset=b,Te.enabled=k,Te.autoUpdate=te,Te.needsUpdate=K,Te.type=Y}function St(b){at("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const k=b.target;k.removeEventListener("dispose",ht),si(k)}function si(b){ri(b),_.remove(b)}function ri(b){const k=_.get(b).programs;k!==void 0&&(k.forEach(function(te){ge.releaseProgram(te)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,te,K,Y,Re){k===null&&(k=ee);const Ie=Y.isMesh&&Y.matrixWorld.determinant()<0,we=Xm(b,k,te,K,Y);fe.setMaterial(K,Ie);let Fe=te.index,ke=1;if(K.wireframe===!0){if(Fe=j.getWireframeAttribute(te),Fe===void 0)return;ke=2}const Ke=te.drawRange,Qe=te.attributes.position;let ze=Ke.start*ke,gt=(Ke.start+Ke.count)*ke;Re!==null&&(ze=Math.max(ze,Re.start*ke),gt=Math.min(gt,(Re.start+Re.count)*ke)),Fe!==null?(ze=Math.max(ze,0),gt=Math.min(gt,Fe.count)):Qe!=null&&(ze=Math.max(ze,0),gt=Math.min(gt,Qe.count));const Rt=gt-ze;if(Rt<0||Rt===1/0)return;Ee.setup(Y,K,we,te,Fe);let yt,_t=Ye;if(Fe!==null&&(yt=se.get(Fe),_t=B,_t.setIndex(yt)),Y.isMesh)K.wireframe===!0?(fe.setLineWidth(K.wireframeLinewidth*ne()),_t.setMode(A.LINES)):_t.setMode(A.TRIANGLES);else if(Y.isLine){let kt=K.linewidth;kt===void 0&&(kt=1),fe.setLineWidth(kt*ne()),Y.isLineSegments?_t.setMode(A.LINES):Y.isLineLoop?_t.setMode(A.LINE_LOOP):_t.setMode(A.LINE_STRIP)}else Y.isPoints?_t.setMode(A.POINTS):Y.isSprite&&_t.setMode(A.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ha("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const kt=Y._multiDrawStarts,Ve=Y._multiDrawCounts,fn=Y._multiDrawCount,rt=Fe?se.get(Fe).bytesPerElement:1,Mn=_.get(K).currentProgram.getUniforms();for(let Un=0;Un<fn;Un++)Mn.setValue(A,"_gl_DrawID",Un),_t.render(kt[Un]/rt,Ve[Un])}else if(Y.isInstancedMesh)_t.renderInstances(ze,Rt,Y.count);else if(te.isInstancedBufferGeometry){const kt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ve=Math.min(te.instanceCount,kt);_t.renderInstances(ze,Rt,Ve)}else _t.render(ze,Rt)};function Hu(b,k,te){b.transparent===!0&&b.side===_i&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,fo(b,k,te),b.side=ji,b.needsUpdate=!0,fo(b,k,te),b.side=_i):fo(b,k,te)}this.compile=function(b,k,te=null){te===null&&(te=b),P=pe.get(te),P.init(k),L.push(P),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),b!==te&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),P.setupLights();const K=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const we=Re[Ie];Hu(we,te,Y),K.add(we)}else Hu(Re,te,Y),K.add(Re)}),P=L.pop(),K},this.compileAsync=function(b,k,te=null){const K=this.compile(b,k,te);return new Promise(Y=>{function Re(){if(K.forEach(function(Ie){_.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){Y(b);return}setTimeout(Re,10)}ue.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ha=null;function Wm(b){Ha&&Ha(b)}function Wu(){Ki.stop()}function Xu(){Ki.start()}const Ki=new Fm;Ki.setAnimationLoop(Wm),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(b){Ha=b,re.setAnimationLoop(b),b===null?Ki.stop():Ki.start()},re.addEventListener("sessionstart",Wu),re.addEventListener("sessionend",Xu),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const te=re.enabled===!0&&re.isPresenting===!0,K=x!==null&&(G===null||te)&&x.begin(M,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,k,G),P=pe.get(b,L.length),P.init(k),L.push(P),R.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(R,jn,k.reversedDepth),Se=this.localClippingEnabled,de=xe.init(this.clippingPlanes,Se),E=Be.get(b,D.length),E.init(),D.push(E),re.enabled===!0&&re.isPresenting===!0){const Ie=M.xr.getDepthSensingMesh();Ie!==null&&Wa(Ie,k,-1/0,M.sortObjects)}Wa(b,k,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(Xe,Ge),J=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,J&&Ce.addToRenderList(E,b),this.info.render.frame++,de===!0&&xe.beginShadows();const Y=P.state.shadowsArray;if(Te.render(Y,b,k),de===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&x.hasRenderPass())===!1){const Ie=E.opaque,we=E.transmissive;if(P.setupLights(),k.isArrayCamera){const Fe=k.cameras;if(we.length>0)for(let ke=0,Ke=Fe.length;ke<Ke;ke++){const Qe=Fe[ke];$u(Ie,we,b,Qe)}J&&Ce.render(b);for(let ke=0,Ke=Fe.length;ke<Ke;ke++){const Qe=Fe[ke];qu(E,b,Qe,Qe.viewport)}}else we.length>0&&$u(Ie,we,b,k),J&&Ce.render(b),qu(E,b,k)}G!==null&&z===0&&(I.updateMultisampleRenderTarget(G),I.updateRenderTargetMipmap(G)),K&&x.end(M),b.isScene===!0&&b.onAfterRender(M,b,k),Ee.resetDefaultState(),Q=-1,X=null,L.pop(),L.length>0?(P=L[L.length-1],de===!0&&xe.setGlobalState(M.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?E=D[D.length-1]:E=null};function Wa(b,k,te,K){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||le.intersectsSprite(b)){K&&F.setFromMatrixPosition(b.matrixWorld).applyMatrix4(R);const Ie=be.update(b),we=b.material;we.visible&&E.push(b,Ie,we,te,F.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||le.intersectsObject(b))){const Ie=be.update(b),we=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),F.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),F.copy(Ie.boundingSphere.center)),F.applyMatrix4(b.matrixWorld).applyMatrix4(R)),Array.isArray(we)){const Fe=Ie.groups;for(let ke=0,Ke=Fe.length;ke<Ke;ke++){const Qe=Fe[ke],ze=we[Qe.materialIndex];ze&&ze.visible&&E.push(b,Ie,ze,te,F.z,Qe)}}else we.visible&&E.push(b,Ie,we,te,F.z,null)}}const Re=b.children;for(let Ie=0,we=Re.length;Ie<we;Ie++)Wa(Re[Ie],k,te,K)}function qu(b,k,te,K){const{opaque:Y,transmissive:Re,transparent:Ie}=b;P.setupLightsView(te),de===!0&&xe.setGlobalState(M.clippingPlanes,te),K&&fe.viewport(W.copy(K)),Y.length>0&&uo(Y,k,te),Re.length>0&&uo(Re,k,te),Ie.length>0&&uo(Ie,k,te),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function $u(b,k,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[K.id]===void 0){const ze=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[K.id]=new Jn(1,1,{generateMipmaps:!0,type:ze?Ai:mn,minFilter:hs,samples:Math.max(4,oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Re=P.state.transmissionRenderTarget[K.id],Ie=K.viewport||W;Re.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);const we=M.getRenderTarget(),Fe=M.getActiveCubeFace(),ke=M.getActiveMipmapLevel();M.setRenderTarget(Re),M.getClearColor(ce),me=M.getClearAlpha(),me<1&&M.setClearColor(16777215,.5),M.clear(),J&&Ce.render(te);const Ke=M.toneMapping;M.toneMapping=Zn;const Qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),P.setupLightsView(K),de===!0&&xe.setGlobalState(M.clippingPlanes,K),uo(b,te,K),I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let gt=0,Rt=k.length;gt<Rt;gt++){const yt=k[gt],{object:_t,geometry:kt,material:Ve,group:fn}=yt;if(Ve.side===_i&&_t.layers.test(K.layers)){const rt=Ve.side;Ve.side=un,Ve.needsUpdate=!0,ju(_t,te,K,kt,Ve,fn),Ve.side=rt,Ve.needsUpdate=!0,ze=!0}}ze===!0&&(I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re))}M.setRenderTarget(we,Fe,ke),M.setClearColor(ce,me),Qe!==void 0&&(K.viewport=Qe),M.toneMapping=Ke}function uo(b,k,te){const K=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Re=b.length;Y<Re;Y++){const Ie=b[Y],{object:we,geometry:Fe,group:ke}=Ie;let Ke=Ie.material;Ke.allowOverride===!0&&K!==null&&(Ke=K),we.layers.test(te.layers)&&ju(we,k,te,Fe,Ke,ke)}}function ju(b,k,te,K,Y,Re){b.onBeforeRender(M,k,te,K,Y,Re),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(M,k,te,K,b,Re),Y.transparent===!0&&Y.side===_i&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,M.renderBufferDirect(te,k,K,Y,b,Re),Y.side=ji,Y.needsUpdate=!0,M.renderBufferDirect(te,k,K,Y,b,Re),Y.side=_i):M.renderBufferDirect(te,k,K,Y,b,Re),b.onAfterRender(M,k,te,K,Y,Re)}function fo(b,k,te){k.isScene!==!0&&(k=ee);const K=_.get(b),Y=P.state.lights,Re=P.state.shadowsArray,Ie=Y.state.version,we=ge.getParameters(b,Y.state,Re,k,te),Fe=ge.getProgramCacheKey(we);let ke=K.programs;K.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;const Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;K.envMap=$.get(b.envMap||K.environment,Ke),K.envMapRotation=K.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",ht),ke=new Map,K.programs=ke);let Qe=ke.get(Fe);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===Ie)return Ku(b,we),Qe}else we.uniforms=ge.getUniforms(b),b.onBeforeCompile(we,M),Qe=ge.acquireProgram(we,Fe),ke.set(Fe,Qe),K.uniforms=we.uniforms;const ze=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=xe.uniform),Ku(b,we),K.needsLights=$m(b),K.lightsStateVersion=Ie,K.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function Yu(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Qo.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Ku(b,k){const te=_.get(b);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}function Xm(b,k,te,K,Y){k.isScene!==!0&&(k=ee),I.resetTextureUnits();const Re=k.fog,Ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,we=G===null?M.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:or,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,ke=$.get(K.envMap||Ie,Fe),Ke=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Qe=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Rt=!!te.morphAttributes.color;let yt=Zn;K.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(yt=M.toneMapping);const _t=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,kt=_t!==void 0?_t.length:0,Ve=_.get(K),fn=P.state.lights;if(de===!0&&(Se===!0||b!==X)){const Nt=b===X&&K.id===Q;xe.setState(K,b,Nt)}let rt=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==fn.state.version||Ve.outputColorSpace!==we||Y.isBatchedMesh&&Ve.batching===!1||!Y.isBatchedMesh&&Ve.batching===!0||Y.isBatchedMesh&&Ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Y.isInstancedMesh&&Ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ve.instancingMorph===!1&&Y.morphTexture!==null||Ve.envMap!==ke||K.fog===!0&&Ve.fog!==Re||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==xe.numPlanes||Ve.numIntersection!==xe.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==Qe||Ve.morphTargets!==ze||Ve.morphNormals!==gt||Ve.morphColors!==Rt||Ve.toneMapping!==yt||Ve.morphTargetsCount!==kt)&&(rt=!0):(rt=!0,Ve.__version=K.version);let Mn=Ve.currentProgram;rt===!0&&(Mn=fo(K,k,Y));let Un=!1,Zi=!1,Ms=!1;const vt=Mn.getUniforms(),Ft=Ve.uniforms;if(fe.useProgram(Mn.program)&&(Un=!0,Zi=!0,Ms=!0),K.id!==Q&&(Q=K.id,Zi=!0),Un||X!==b){fe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(A,"projectionMatrix",b.projectionMatrix),vt.setValue(A,"viewMatrix",b.matrixWorldInverse);const Li=vt.map.cameraPosition;Li!==void 0&&Li.setValue(A,C.setFromMatrixPosition(b.matrixWorld)),oe.logarithmicDepthBuffer&&vt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),X!==b&&(X=b,Zi=!0,Ms=!0)}if(Ve.needsLights&&(fn.state.directionalShadowMap.length>0&&vt.setValue(A,"directionalShadowMap",fn.state.directionalShadowMap,I),fn.state.spotShadowMap.length>0&&vt.setValue(A,"spotShadowMap",fn.state.spotShadowMap,I),fn.state.pointShadowMap.length>0&&vt.setValue(A,"pointShadowMap",fn.state.pointShadowMap,I)),Y.isSkinnedMesh){vt.setOptional(A,Y,"bindMatrix"),vt.setOptional(A,Y,"bindMatrixInverse");const Nt=Y.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),vt.setValue(A,"boneTexture",Nt.boneTexture,I))}Y.isBatchedMesh&&(vt.setOptional(A,Y,"batchingTexture"),vt.setValue(A,"batchingTexture",Y._matricesTexture,I),vt.setOptional(A,Y,"batchingIdTexture"),vt.setValue(A,"batchingIdTexture",Y._indirectTexture,I),vt.setOptional(A,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(A,"batchingColorTexture",Y._colorsTexture,I));const Ii=te.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&Pe.update(Y,te,Mn),(Zi||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,vt.setValue(A,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(Ft.envMapIntensity.value=k.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=cR()),Zi&&(vt.setValue(A,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&qm(Ft,Ms),Re&&K.fog===!0&&Le.refreshFogUniforms(Ft,Re),Le.refreshMaterialUniforms(Ft,K,De,_e,P.state.transmissionRenderTarget[b.id]),Qo.upload(A,Yu(Ve),Ft,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qo.upload(A,Yu(Ve),Ft,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(A,"center",Y.center),vt.setValue(A,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(A,"normalMatrix",Y.normalMatrix),vt.setValue(A,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Nt=K.uniformsGroups;for(let Li=0,bs=Nt.length;Li<bs;Li++){const Zu=Nt[Li];Ne.update(Zu,Mn),Ne.bind(Zu,Mn)}}return Mn}function qm(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function $m(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,k,te){const K=_.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),_.get(b.texture).__webglTexture=k,_.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const te=_.get(b);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0};const jm=A.createFramebuffer();this.setRenderTarget=function(b,k=0,te=0){G=b,w=k,z=te;let K=null,Y=!1,Re=!1;if(b){const we=_.get(b);if(we.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(A.FRAMEBUFFER,we.__webglFramebuffer),W.copy(b.viewport),N.copy(b.scissor),ae=b.scissorTest,fe.viewport(W),fe.scissor(N),fe.setScissorTest(ae),Q=-1;return}else if(we.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(we.__hasExternalTextures)I.rebindTextures(b,_.get(b.texture).__webglTexture,_.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ke=b.depthTexture;if(we.__boundDepthTexture!==Ke){if(Ke!==null&&_.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Re=!0);const ke=_.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?K=ke[k][te]:K=ke[k],Y=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?K=_.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?K=ke[te]:K=ke,W.copy(b.viewport),N.copy(b.scissor),ae=b.scissorTest}else W.copy(ie).multiplyScalar(De).floor(),N.copy(U).multiplyScalar(De).floor(),ae=H;if(te!==0&&(K=jm),fe.bindFramebuffer(A.FRAMEBUFFER,K)&&fe.drawBuffers(b,K),fe.viewport(W),fe.scissor(N),fe.setScissorTest(ae),Y){const we=_.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,te)}else if(Re){const we=k;for(let Fe=0;Fe<b.textures.length;Fe++){const ke=_.get(b.textures[Fe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,te,we)}}else if(b!==null&&te!==0){const we=_.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,te)}Q=-1},this.readRenderTargetPixels=function(b,k,te,K,Y,Re,Ie,we=0){if(!(b&&b.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){fe.bindFramebuffer(A.FRAMEBUFFER,Fe);try{const ke=b.textures[we],Ke=ke.format,Qe=ke.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),!oe.textureFormatReadable(Ke)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Qe)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-K&&te>=0&&te<=b.height-Y&&A.readPixels(k,te,K,Y,Me.convert(Ke),Me.convert(Qe),Re)}finally{const ke=G!==null?_.get(G).__webglFramebuffer:null;fe.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,k,te,K,Y,Re,Ie,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(k>=0&&k<=b.width-K&&te>=0&&te<=b.height-Y){fe.bindFramebuffer(A.FRAMEBUFFER,Fe);const ke=b.textures[we],Ke=ke.format,Qe=ke.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),!oe.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,Re.byteLength,A.STREAM_READ),A.readPixels(k,te,K,Y,Me.convert(Ke),Me.convert(Qe),0);const gt=G!==null?_.get(G).__webglFramebuffer:null;fe.bindFramebuffer(A.FRAMEBUFFER,gt);const Rt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await PE(A,Rt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Re),A.deleteBuffer(ze),A.deleteSync(Rt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,te=0){const K=Math.pow(2,-te),Y=Math.floor(b.image.width*K),Re=Math.floor(b.image.height*K),Ie=k!==null?k.x:0,we=k!==null?k.y:0;I.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,te,0,0,Ie,we,Y,Re),fe.unbindTexture()};const Ym=A.createFramebuffer(),Km=A.createFramebuffer();this.copyTextureToTexture=function(b,k,te=null,K=null,Y=0,Re=0){let Ie,we,Fe,ke,Ke,Qe,ze,gt,Rt;const yt=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(te!==null)Ie=te.max.x-te.min.x,we=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,Ke=te.min.y,Qe=te.isBox3?te.min.z:0;else{const Ft=Math.pow(2,-Y);Ie=Math.floor(yt.width*Ft),we=Math.floor(yt.height*Ft),b.isDataArrayTexture?Fe=yt.depth:b.isData3DTexture?Fe=Math.floor(yt.depth*Ft):Fe=1,ke=0,Ke=0,Qe=0}K!==null?(ze=K.x,gt=K.y,Rt=K.z):(ze=0,gt=0,Rt=0);const _t=Me.convert(k.format),kt=Me.convert(k.type);let Ve;k.isData3DTexture?(I.setTexture3D(k,0),Ve=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(I.setTexture2DArray(k,0),Ve=A.TEXTURE_2D_ARRAY):(I.setTexture2D(k,0),Ve=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const fn=A.getParameter(A.UNPACK_ROW_LENGTH),rt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Mn=A.getParameter(A.UNPACK_SKIP_PIXELS),Un=A.getParameter(A.UNPACK_SKIP_ROWS),Zi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,yt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,yt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ke),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Qe);const Ms=b.isDataArrayTexture||b.isData3DTexture,vt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Ft=_.get(b),Ii=_.get(k),Nt=_.get(Ft.__renderTarget),Li=_.get(Ii.__renderTarget);fe.bindFramebuffer(A.READ_FRAMEBUFFER,Nt.__webglFramebuffer),fe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let bs=0;bs<Fe;bs++)Ms&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(b).__webglTexture,Y,Qe+bs),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(k).__webglTexture,Re,Rt+bs)),A.blitFramebuffer(ke,Ke,Ie,we,ze,gt,Ie,we,A.DEPTH_BUFFER_BIT,A.NEAREST);fe.bindFramebuffer(A.READ_FRAMEBUFFER,null),fe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||_.has(b)){const Ft=_.get(b),Ii=_.get(k);fe.bindFramebuffer(A.READ_FRAMEBUFFER,Ym),fe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Km);for(let Nt=0;Nt<Fe;Nt++)Ms?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ft.__webglTexture,Y,Qe+Nt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ft.__webglTexture,Y),vt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ii.__webglTexture,Re,Rt+Nt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ii.__webglTexture,Re),Y!==0?A.blitFramebuffer(ke,Ke,Ie,we,ze,gt,Ie,we,A.COLOR_BUFFER_BIT,A.NEAREST):vt?A.copyTexSubImage3D(Ve,Re,ze,gt,Rt+Nt,ke,Ke,Ie,we):A.copyTexSubImage2D(Ve,Re,ze,gt,ke,Ke,Ie,we);fe.bindFramebuffer(A.READ_FRAMEBUFFER,null),fe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Ve,Re,ze,gt,Rt,Ie,we,Fe,_t,kt,yt.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(Ve,Re,ze,gt,Rt,Ie,we,Fe,_t,yt.data):A.texSubImage3D(Ve,Re,ze,gt,Rt,Ie,we,Fe,_t,kt,yt):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Re,ze,gt,Ie,we,_t,kt,yt.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Re,ze,gt,yt.width,yt.height,_t,yt.data):A.texSubImage2D(A.TEXTURE_2D,Re,ze,gt,Ie,we,_t,kt,yt);A.pixelStorei(A.UNPACK_ROW_LENGTH,fn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Un),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Zi),Re===0&&k.generateMipmaps&&A.generateMipmap(Ve),fe.unbindTexture()},this.initRenderTarget=function(b){_.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){w=0,z=0,G=null,fe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const fR={class:"game-topbar"},dR={class:"game-status"},hR={class:"status-label"},pR={class:"game-viewport"},mR={key:0,class:"game-overlay"},gR={__name:"Game",setup(t){const e=ro.child({scope:"game-view"}),n=Da(),i=cr(),s=tt(null),r=tt(!1),o=tt(!0),a=tt(null),l=tt(null);let c,u,f;const d=lr(new Map);function m(){e.info("Initiliazing three.js"),u=new qE,u.background=new ft(328976);const M=s.value.clientWidth||800,V=s.value.clientHeight||600,w=M/V;f=new En(75,w,.1,1e3),c=new uR({antialias:!0,alpha:!1}),c.setSize(M,V),c.setPixelRatio(window.devicePixelRatio),c.outputColorSpace=pn,s.value.appendChild(c.domElement),e.info("Setting up lightingfor three.js three.js"),u.add(new py(16777215,.8));const z=new hy(16777215,1.2);z.position.set(10,20,10),u.add(z),window.addEventListener("resize",g)}function g(){if(e.info("Window size event listener triggered"),!f||!c||!s.value)return;const M=s.value.clientWidth,V=s.value.clientHeight;f.aspect=M/V,f.updateProjectionMatrix(),c.setSize(M,V)}async function v(M){try{console.log("[Game] connecting to agent:",M),l.value=new WebSocket(`${M}/game`),l.value.onopen=()=>{console.log("[Game] agent WS connected:",M),o.value=!1},l.value.onmessage=V=>{console.log("[Game] agent message:",V.data)},l.value.onerror=V=>{console.error("[Game] agent WS error:",V)},l.value.onclose=()=>{console.warn("[Game] agent WS closed")}}catch(V){console.error("[Game] failed to connect to agent:",V)}}function h(){requestAnimationFrame(h),d.forEach((M,V)=>{var G;const{mesh:w,target:z}=M;w.position.x+=(z.x-w.position.x)*.2,w.position.y+=(z.y-w.position.y)*.2,w.position.z+=(z.z-w.position.z)*.2,w.rotation.y+=(z.yaw-w.rotation.y)*.2,V===((G=a.value)==null?void 0:G.player_node)&&(f.rotation.x+=(z.pitch-f.rotation.x)*.2)}),c&&u&&f&&c.render(u,f)}function p(M){var V;try{console.log("[WS][Data Received]",M.data);const w=JSON.parse(M.data),z=w.node||((V=a.value)==null?void 0:V.player_node),G=d.get(z);G&&(typeof w.x=="number"&&(G.target.x=w.x),typeof w.y=="number"&&(G.target.y=w.y),typeof w.z=="number"&&(G.target.z=w.z),typeof w.yaw=="number"&&(G.target.yaw=w.yaw),typeof w.pitch=="number"&&(G.target.pitch=w.pitch))}catch(w){console.warn("[Game] Error parsing server message:",w)}}const S=tt(null),T=M=>{o.value||ul({type:"game_input",session_id:S.value,data:{type:"keydown",key:M.key}})},E=M=>{o.value||ul({type:"game_input",session_id:S.value,data:{type:"keyup",key:M.key}})};function P(){D(),i.push("/home")}function D(){jS(),r.value=!1,c&&(c.dispose(),c.forceContextLoss()),window.removeEventListener("resize",g)}Jr(async()=>{window.addEventListener("beforeunload",D),window.addEventListener("keydown",T),window.addEventListener("keyup",E),m(),h();try{console.log("initGameSession res101");const M=await L();console.log("initGameSession res11",M);const V=$S(M);V.addEventListener("open",()=>{r.value=!0,ul({type:"join",session_id:S.value,data:{gameId:n.params.id}})}),V.addEventListener("close",()=>{r.value=!1}),V.addEventListener("message",p)}catch(M){console.error("[game] session init failed",M)}});async function L(){const M=n.params.id,w=`http://${Wr().VITE_API_BASE_URL}/api/v1`;console.log(`[initGameSession] starting for gameId=${M}`);const z=await $t.post(`/gamelift/games/${M}/session`,{game_id:M,game_image:"string"});console.log("[initGameSession] session response:",z.data);const{AgentWSURL:G,Token:Q,ID:X}=z.data;if(S.value=X,G)return console.log(`[initGameSession] already provisioned, agent_url=${G}`),x(G,Q);console.log(`[initGameSession] pending — opening SSE for instanceId=${X}`);const N=nr().token;return new Promise((ae,ce)=>{const me=new EventSource(`${w}/gamelift/fleet/instances/${X}/events?token=${N}`);console.log(`[SSE] connection opened: ${me.url}`),console.log("[SSE] token being used:",N);let ye=!1;const _e=()=>{clearTimeout(De),me.close()},De=setTimeout(()=>{console.warn(`[SSE] timed out after 5min for instanceId=${X}`),_e(),ce(new Error("Provisioning timed out"))},5*60*1e3);me.onopen=()=>{console.log("[SSE] connection established successfully")},me.onmessage=Xe=>{console.log("[SSE] message received:",Xe.data);let Ge;try{Ge=JSON.parse(Xe.data)}catch(ie){console.error("[SSE] invalid JSON payload",ie),_e(),ce(new Error("Invalid SSE payload"));return}if(Ge.error){console.error("[SSE] provisioning failed:",Ge.error),_e(),ce(new Error(Ge.error));return}if(Ge.agent_url){console.log(`[SSE] agent_url received: ${Ge.agent_url}`),v(Ge.agent_url),ye=!0,_e(),ae(x(Ge.agent_url,Q));return}console.warn("[SSE] unknown event payload",Ge)},me.onerror=Xe=>{if(ye){console.log("[SSE] connection closed after successful resolution");return}console.error(`[SSE] connection error for instanceId=${X}:`,Xe),_e(),ce(new Error("SSE connection lost"))}})}function x(M,V){console.log("initGameSession res11",M);const w=new URL(M);return w.searchParams.set("token",V),w.toString()}return Jh(()=>{D(),window.removeEventListener("beforeunload",D),window.removeEventListener("keydown",T),window.removeEventListener("keyup",E)}),(M,V)=>(et(),nt("div",{class:"game-page",onMousedown:V[0]||(V[0]=(...w)=>M.onMouseDown&&M.onMouseDown(...w)),onMouseup:V[1]||(V[1]=(...w)=>M.onMouseUp&&M.onMouseUp(...w))},[O("div",fR,[O("button",{id:"back-button",class:"back-btn",onClick:P},[...V[2]||(V[2]=[O("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[O("polyline",{points:"15 18 9 12 15 6"})],-1),He(" Back ",-1)])]),O("div",dR,[O("span",{class:xa(["status-dot",{connected:r.value}])},null,2),O("span",hR,sn(r.value?"Connected":"Connecting..."),1)])]),O("div",pR,[O("div",{ref_key:"threeContainer",ref:s,class:"three-container"},null,512),o.value?(et(),nt("div",mR,[...V[3]||(V[3]=[O("div",{class:"overlay-content"},[O("div",{class:"overlay-spinner"}),O("p",null,"WebSocket Debug Mode Active"),O("p",{style:{"font-size":"12px",color:"#a78bfa","margin-top":"10px"}},"[NOTICE] 3D Asset Loading Disabled"),O("p",{style:{"font-size":"10px",color:"#666","margin-top":"5px"}},"Check console for real-time server data")],-1)])])):Kn("",!0)])],32))}},_R=Ln(gR,[["__scopeId","data-v-1f901024"]]),vR=[{path:"/game-details/:id",name:"GameDetails",component:qS},{path:"/game/:id",name:"Game",component:_R}],xR={};function SR(t,e){return null}const ER=Ln(xR,[["render",SR]]),yR=[{path:"/user-profile",name:"UserProfile",component:ER}],MR={},bR={class:"landing-page"},TR={class:"top-nav"},AR={class:"nav-actions"},RR={class:"hero-section"},wR={class:"hero-content"},CR={class:"hero-bottom"},PR={class:"hero-action-area"};function DR(t,e){const n=Yi("router-link");return et(),nt("div",bR,[O("header",TR,[e[2]||(e[2]=Xi('<div class="brand" data-v-efde3d5b><span class="logo-mark" data-v-efde3d5b>[S]</span> <span class="logo-text" data-v-efde3d5b>Serwin Games</span></div><nav class="nav-links" data-v-efde3d5b><span class="nav-item" data-v-efde3d5b>01 MANIFESTO</span><span class="nav-item" data-v-efde3d5b>02 CAPABILITIES</span><span class="nav-item" data-v-efde3d5b>03 PROTOCOLS</span></nav>',2)),O("div",AR,[e[1]||(e[1]=O("span",{class:"status-indicator"},[O("span",{class:"dot"}),He(" NODE - SECURE")],-1)),lt(n,{to:"/login",class:"login-btn"},{default:Ot(()=>[...e[0]||(e[0]=[He("ENTER SYSTEM",-1)])]),_:1})])]),O("main",null,[O("section",RR,[e[7]||(e[7]=O("div",{class:"hero-meta"},[O("span",{class:"coord"},"LAT // 01°17'S • 36°49'E"),O("br"),O("span",{class:"version"},"V.2026.04 — STABLE")],-1)),O("div",wR,[e[6]||(e[6]=Xi('<p class="hero-label" data-v-efde3d5b><span class="dot orange" data-v-efde3d5b></span> PROTOCOL - ALPHA</p><p class="hero-intro" data-v-efde3d5b>A CLOUD-NATIVE INFRASTRUCTURE DELIVERING<br data-v-efde3d5b>RAW HARDWARE ACCELERATION. ESTABLISHED NAIROBI,<br data-v-efde3d5b>OPERATING GLOBALLY.</p><h1 class="hero-title" data-v-efde3d5b> We build<br data-v-efde3d5b><span class="t-orange" data-v-efde3d5b>cloud gaming</span> experiences that refuse<br data-v-efde3d5b> to be ignored. </h1>',3)),O("div",CR,[e[5]||(e[5]=O("p",{class:"hero-desc"},[He(" Serwin Games is a "),O("i",null,"product-grade"),He(" streaming"),O("br"),He(" studio shipping bare-metal VMs, AI systems, and"),O("br"),He(" zero-latency infrastructure for players"),O("br"),He(" that need it to actually work on Monday morning. ")],-1)),O("div",PR,[e[4]||(e[4]=O("div",{class:"stats"},[O("span",{class:"stat-num"},"07"),O("span",{class:"stat-label"},[He("ACTIVE"),O("br"),He("NODES"),O("br"),O("span",{class:"muted"},"Q2 • 2026")])],-1)),lt(n,{to:"/register",class:"cta-button"},{default:Ot(()=>[...e[3]||(e[3]=[He("INITIALIZE ",-1),O("span",{class:"arrow"},"↗",-1)])]),_:1})])])])]),e[8]||(e[8]=Xi('<div class="ticker-banner" data-v-efde3d5b><div class="ticker-content" data-v-efde3d5b><span data-v-efde3d5b><span class="orange-text" data-v-efde3d5b>♦</span> 01 RAW PERFORMANCE</span><span data-v-efde3d5b><span class="orange-text" data-v-efde3d5b>♦</span> 02 ZERO LATENCY</span><span data-v-efde3d5b><span class="orange-text" data-v-efde3d5b>♦</span> 03 BARE METAL</span><span data-v-efde3d5b><span class="orange-text" data-v-efde3d5b>♦</span> 04 NO COMPROMISES</span></div></div><section class="manifesto-section" data-v-efde3d5b><h2 class="section-title" data-v-efde3d5b><span class="section-num" data-v-efde3d5b>§ 01 — MANIFESTO</span> A manifesto, because <i data-v-efde3d5b>every player should have one</i>, and most don&#39;t.</h2><div class="tenets-grid" data-v-efde3d5b><div class="tenet" data-v-efde3d5b><span class="tenet-num" data-v-efde3d5b>TENET 01</span><h3 data-v-efde3d5b>We build <span class="t-orange" data-v-efde3d5b>systems</span>, not promises.</h3><p data-v-efde3d5b>A sleek UI is not a product. We spend 10% of our time on flashy designs, 90% on infrastructure. Frames live in production, not in mockups.</p></div><div class="tenet" data-v-efde3d5b><span class="tenet-num" data-v-efde3d5b>TENET 02</span><h3 data-v-efde3d5b>Latency is <span class="t-orange" data-v-efde3d5b>non-negotiable</span>.</h3><p data-v-efde3d5b>Ping behaves differently in New York than in Nairobi. Latency is a human experience. We design for the network, the hardware, and the actual player.</p></div><div class="tenet" data-v-efde3d5b><span class="tenet-num" data-v-efde3d5b>TENET 03</span><h3 data-v-efde3d5b>Hardware is <span class="t-orange" data-v-efde3d5b>universal</span>.</h3><p data-v-efde3d5b>You don&#39;t need a massive rig to play AAA titles. We provide the computing power heavily optimized through our datacenters, letting you play on any screen.</p></div><div class="tenet" data-v-efde3d5b><span class="tenet-num" data-v-efde3d5b>TENET 04</span><h3 data-v-efde3d5b>No <span class="t-orange" data-v-efde3d5b>walled gardens</span>.</h3><p data-v-efde3d5b>Bring your own libraries, or tap into ours. Open protocols, transparent provisioning, and dedicated compute power designed with the community in mind.</p></div></div></section><section class="hardware-section" data-v-efde3d5b><div class="hardware-container" data-v-efde3d5b><div class="hardware-text" data-v-efde3d5b><p class="hero-label" data-v-efde3d5b><span class="dot orange" data-v-efde3d5b></span> RIG // SPECIFICATIONS</p><h2 class="hardware-title" data-v-efde3d5b>Bare metal, <span class="t-orange" data-v-efde3d5b>unleashed</span>.</h2><p class="hardware-desc" data-v-efde3d5b>Every session runs on isolated, high-tier GPU instances optimized for maximum throughput. We bypass virtualization layers where it counts to deliver frames exactly when you need them.</p></div><div class="hardware-specs" data-v-efde3d5b><div class="spec-item" data-v-efde3d5b><h4 data-v-efde3d5b>GPU ARCHITECTURE</h4><p data-v-efde3d5b>RTX 4080 Equivalent / 16GB VRAM</p></div><div class="spec-item" data-v-efde3d5b><h4 data-v-efde3d5b>COMPUTE THREADS</h4><p data-v-efde3d5b>16-Core Zen 4 Threadrippers</p></div><div class="spec-item" data-v-efde3d5b><h4 data-v-efde3d5b>MEMORY</h4><p data-v-efde3d5b>32GB DDR5-6000</p></div><div class="spec-item" data-v-efde3d5b><h4 data-v-efde3d5b>STORAGE</h4><p data-v-efde3d5b>NVMe PCIe Gen4 x4</p></div></div></div></section>',3))]),e[9]||(e[9]=Xi('<footer class="site-footer" data-v-efde3d5b><div class="footer-grid" data-v-efde3d5b><div class="footer-brand" data-v-efde3d5b><div class="brand" data-v-efde3d5b><span class="logo-mark" data-v-efde3d5b>[S]</span> <span class="logo-text" data-v-efde3d5b>Serwin Games</span></div><p data-v-efde3d5b>An engineering practice. We build cloud gaming infrastructure that works on day one and is still working on day one thousand.</p></div><div class="footer-links" data-v-efde3d5b><h4 data-v-efde3d5b>STUDIO</h4><a href="#" data-v-efde3d5b>Manifesto</a><a href="#" data-v-efde3d5b>Capabilities</a><a href="#" data-v-efde3d5b>Work</a><a href="#" data-v-efde3d5b>About</a></div><div class="footer-links" data-v-efde3d5b><h4 data-v-efde3d5b>CONTACT</h4><a href="#" data-v-efde3d5b>Email</a><a href="#" data-v-efde3d5b>Book a Call</a><a href="#" data-v-efde3d5b>Careers</a></div><div class="footer-extra" data-v-efde3d5b><p data-v-efde3d5b>© 2026 SERWIN GAMES — REGISTERED NBO, KE</p><p class="t-orange" data-v-efde3d5b>BUILT WITH INTENT - NOT TEMPLATES</p></div></div></footer>',1))])}const IR=Ln(MR,[["render",DR],["__scopeId","data-v-efde3d5b"]]),LR=ro.child({scope:"misc-api"});function NR(t){var e;return((e=t.data)==null?void 0:e.data)??t.data}async function UR(){const t=await $t.get("/gamelift/games");return LR.info("Fetching all the games"),NR(t)}const OR={class:"dashboard-page"},FR={class:"dashboard-content"},BR={key:0,class:"dash-state"},VR={key:1,class:"dash-state"},kR={key:2,class:"dash-state"},zR={class:"hero-content"},GR={class:"hero-title"},HR={class:"hero-actions"},WR={class:"posters-container"},XR={class:"posters-carousel"},qR=["onClick"],$R={class:"poster-overlay"},jR={class:"poster-title"},YR={__name:"Home",setup(t){const e=cr(),n=tt([]),i=tt(!0),s=tt("");async function r(){i.value=!0,s.value="";try{const u=await UR();n.value=u||[]}catch{s.value="Failed to sync workloads across nodes."}finally{i.value=!1}}const o=tn(()=>n.value[0]||null),a=tn(()=>n.value);function l(u){e.push(`/game-details/${u}`)}function c(){localStorage.removeItem("token"),e.push("/login")}return Jr(r),(u,f)=>(et(),nt("div",OR,[O("header",{class:"top-nav overlay-nav"},[f[4]||(f[4]=Xi('<div class="brand" data-v-969e916e><span class="logo-mark" data-v-969e916e>[S]</span> <span class="logo-text" data-v-969e916e>Serwin Games</span></div><nav class="nav-links" data-v-969e916e><span class="nav-item active" data-v-969e916e>Discover</span><span class="nav-item" data-v-969e916e>Library</span><span class="nav-item" data-v-969e916e>Community</span></nav>',2)),O("div",{class:"nav-actions"},[f[3]||(f[3]=O("span",{class:"profile-name"},"Player One",-1)),O("button",{id:"logout-button",class:"logout-btn",onClick:c},[...f[2]||(f[2]=[He(" LOGOUT ",-1),O("span",{class:"arrow"},"×",-1)])])])]),O("main",FR,[i.value?(et(),nt("div",BR,[...f[5]||(f[5]=[O("div",{class:"loader"},null,-1),O("p",null,"Syncing your library...",-1)])])):s.value?(et(),nt("div",VR,[O("p",null,sn(s.value),1),O("button",{class:"retry-btn",onClick:r},"RETRY SYNC")])):n.value.length===0?(et(),nt("div",kR,[...f[6]||(f[6]=[O("p",null,"Your library is empty. Discover new worlds.",-1)])])):(et(),nt("section",{key:3,class:"dash-hero",style:xs({backgroundImage:`url(https://picsum.photos/seed/${o.value.id}/1920/1080)`})},[f[10]||(f[10]=O("div",{class:"hero-vignette"},null,-1)),O("div",zR,[O("h1",GR,sn(o.value.game_name),1),f[9]||(f[9]=Xi('<div class="hero-meta" data-v-969e916e><span class="meta-tag rating" data-v-969e916e>★ 9.8/10</span><span class="meta-tag popularity" data-v-969e916e>TOP PICK</span></div><p class="hero-details" data-v-969e916e> Action / Adventure • 2026 • 4K HDR </p><p class="hero-desc" data-v-969e916e> Continue your epic journey. Your last checkpoint was in the Shattered Peaks. The world awaits your return. </p>',3)),O("div",HR,[O("button",{class:"btn-primary",onClick:f[0]||(f[0]=d=>l(o.value.id))},[...f[7]||(f[7]=[O("span",{class:"icon"},"▶",-1),He(" PLAY ",-1)])]),O("button",{class:"btn-secondary",onClick:f[1]||(f[1]=d=>l(o.value.id))},[...f[8]||(f[8]=[O("span",{class:"icon"},"ℹ",-1),He(" DETAILS ",-1)])])])]),O("div",WR,[O("div",XR,[(et(!0),nt(zn,null,a_(a.value,d=>(et(),nt("div",{key:d.id,class:"poster-card",onClick:m=>l(d.id)},[O("div",{class:"poster-image",style:xs({backgroundImage:`url(https://picsum.photos/seed/${d.id}/600/400)`})},null,4),O("div",$R,[O("h3",jR,sn(d.game_name),1)])],8,qR))),128))])])],4))])]))}},KR=Ln(YR,[["__scopeId","data-v-969e916e"]]),ZR=[{path:"/",name:"Landing",component:IR},{path:"/home",name:"Home",component:KR}];function co(t){var e;return((e=t.data)==null?void 0:e.data)??t.data}async function JR(t,e){const n=await $t.post("/auth/login",{email:t,password:e}),i=co(n);return localStorage.setItem("token",i.token),i}async function QR(t){const e=await $t.post("/auth/register",t),n=co(e);return n.token&&localStorage.setItem("token",n.token),n}async function ew(t){const e=await $t.post("/auth/forgot-password",{email:t});return co(e)}async function tw(t,e,n){const i=await $t.post("/auth/reset-password",{token:t,newPassword:e,confirmPassword:n});return co(i)}async function nw(t){const e=await $t.get(`/auth/verify-email?token=${encodeURIComponent(t)}`);return co(e)}const iw={class:"auth-page"},sw={class:"auth-nav"},rw={class:"auth-container"},ow={class:"auth-card"},aw={class:"form-group"},lw={class:"form-group"},cw=["disabled"],uw={key:0,class:"spinner"},fw={key:1},dw={key:0,class:"error-msg"},hw={class:"auth-footer"},pw={__name:"Login",setup(t){const e=cr(),n=tt(""),i=tt(""),s=tt(!1),r=tt("");async function o(){if(!(!n.value.trim()||!i.value)){s.value=!0,r.value="";try{await JR(n.value.trim(),i.value),e.push("/home")}catch{r.value="Authentication failed. Unauthorized node."}finally{s.value=!1}}}return(a,l)=>{const c=Yi("router-link");return et(),nt("div",iw,[O("header",sw,[lt(c,{to:"/",class:"brand"},{default:Ot(()=>[...l[2]||(l[2]=[O("span",{class:"logo-mark"},"[S]",-1),He(),O("span",{class:"logo-text"},"Serwin Games",-1)])]),_:1}),l[3]||(l[3]=O("div",{class:"nav-meta"},"PROTOCOL: AUTH // SECURE",-1))]),O("div",rw,[O("div",ow,[l[10]||(l[10]=O("h1",{class:"auth-title"},[He("Authenticate "),O("span",{class:"t-orange"},"system"),He(".")],-1)),l[11]||(l[11]=O("p",{class:"auth-subtitle"},"Provide your credentials to access the infrastructure.",-1)),O("form",{onSubmit:Ra(o,["prevent"]),class:"auth-form"},[O("div",aw,[l[4]||(l[4]=O("div",{class:"label-row"},[O("label",null,"EMAIL")],-1)),Xn(O("input",{id:"username-input","onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),type:"email",placeholder:"Enter your email address",required:""},null,512),[[qn,n.value]])]),O("div",lw,[l[5]||(l[5]=O("div",{class:"label-row"},[O("label",null,"PASSWORD")],-1)),Xn(O("input",{id:"password-input","onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u),type:"password",placeholder:"Enter your security phrase",required:""},null,512),[[qn,i.value]])]),O("button",{id:"login-button",type:"submit",disabled:s.value,class:"submit-btn"},[s.value?(et(),nt("span",uw)):(et(),nt("span",fw,[...l[6]||(l[6]=[He("AUTHENTICATE ",-1),O("span",{class:"arrow"},"↗",-1)])]))],8,cw),r.value?(et(),nt("p",dw,sn(r.value),1)):Kn("",!0)],32),O("div",hw,[O("p",null,[l[8]||(l[8]=He("No account yet? ",-1)),lt(c,{to:"/register",class:"link"},{default:Ot(()=>[...l[7]||(l[7]=[He("Initialize access.",-1)])]),_:1})]),O("p",null,[lt(c,{to:"/forgot-password",class:"link",style:{"margin-left":"0"}},{default:Ot(()=>[...l[9]||(l[9]=[He("Recover forgotten credentials.",-1)])]),_:1})])])])])])}}},mw=Ln(pw,[["__scopeId","data-v-dce29278"]]),gw={class:"auth-page"},_w={class:"auth-nav"},vw={class:"auth-container"},xw={class:"auth-card"},Sw={class:"form-row"},Ew={class:"form-group half"},yw={class:"form-group half"},Mw={class:"form-group"},bw={class:"form-group"},Tw={class:"form-group"},Aw=["disabled"],Rw={key:0,class:"spinner"},ww={key:1},Cw={key:0,class:"error-msg"},Pw={class:"auth-footer"},Dw={__name:"Register",setup(t){const e=cr(),n=tt({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),i=tt(!1),s=tt("");async function r(){if(n.value.password!==n.value.confirmPassword){s.value="Passwords do not match.";return}i.value=!0,s.value="";try{await QR({...n.value}),e.push("/home")}catch{s.value="Initialization failed. System error."}finally{i.value=!1}}return(o,a)=>{const l=Yi("router-link");return et(),nt("div",gw,[O("header",_w,[lt(l,{to:"/",class:"brand"},{default:Ot(()=>[...a[5]||(a[5]=[O("span",{class:"logo-mark"},"[S]",-1),He(),O("span",{class:"logo-text"},"Serwin Games",-1)])]),_:1}),a[6]||(a[6]=O("div",{class:"nav-meta"},"PROTOCOL: REGISTER_USER // SECURE",-1))]),O("div",vw,[O("div",xw,[a[15]||(a[15]=O("h1",{class:"auth-title"},[He("Initialize new"),O("br"),O("span",{class:"t-orange"},"account"),He(".")],-1)),a[16]||(a[16]=O("p",{class:"auth-subtitle"},"Create your ID to access bare-metal infrastructure.",-1)),O("form",{onSubmit:Ra(r,["prevent"]),class:"auth-form"},[O("div",Sw,[O("div",Ew,[a[7]||(a[7]=O("div",{class:"label-row"},[O("label",null,"FIRST NAME")],-1)),Xn(O("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>n.value.firstName=c),type:"text",placeholder:"John",required:""},null,512),[[qn,n.value.firstName]])]),O("div",yw,[a[8]||(a[8]=O("div",{class:"label-row"},[O("label",null,"LAST NAME")],-1)),Xn(O("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>n.value.lastName=c),type:"text",placeholder:"Doe",required:""},null,512),[[qn,n.value.lastName]])])]),O("div",Mw,[a[9]||(a[9]=O("div",{class:"label-row"},[O("label",null,"EMAIL")],-1)),Xn(O("input",{"onUpdate:modelValue":a[2]||(a[2]=c=>n.value.email=c),type:"email",placeholder:"Enter desired email",required:""},null,512),[[qn,n.value.email]])]),O("div",bw,[a[10]||(a[10]=O("div",{class:"label-row"},[O("label",null,"PASSWORD")],-1)),Xn(O("input",{"onUpdate:modelValue":a[3]||(a[3]=c=>n.value.password=c),type:"password",value:"Verify password",required:""},null,512),[[qn,n.value.password]])]),O("div",Tw,[a[11]||(a[11]=O("div",{class:"label-row"},[O("label",null,"CONFIRM PASSWORD")],-1)),Xn(O("input",{"onUpdate:modelValue":a[4]||(a[4]=c=>n.value.confirmPassword=c),type:"password",value:"Verify password",required:""},null,512),[[qn,n.value.confirmPassword]])]),O("button",{type:"submit",disabled:i.value,class:"submit-btn"},[i.value?(et(),nt("span",Rw)):(et(),nt("span",ww,[...a[12]||(a[12]=[He("REGISTER ",-1),O("span",{class:"arrow"},"↗",-1)])]))],8,Aw),s.value?(et(),nt("p",Cw,sn(s.value),1)):Kn("",!0)],32),O("div",Pw,[O("p",null,[a[14]||(a[14]=He("Already configured? ",-1)),lt(l,{to:"/login",class:"link"},{default:Ot(()=>[...a[13]||(a[13]=[He("Authenticate here.",-1)])]),_:1})])])])])])}}},Iw=Ln(Dw,[["__scopeId","data-v-9dd8a205"]]),Lw={class:"auth-page"},Nw={class:"auth-nav"},Uw={class:"auth-container"},Ow={class:"auth-card"},Fw={class:"form-group"},Bw=["disabled"],Vw={key:0,class:"spinner"},kw={key:1},zw={key:0,class:"success-msg"},Gw={key:1,class:"error-msg"},Hw={class:"auth-footer"},Ww={__name:"ForgotPassword",setup(t){const e=tt(""),n=tt(!1),i=tt(""),s=tt("");async function r(){if(e.value.trim()){n.value=!0,i.value="",s.value="";try{await ew(e.value.trim()),s.value="Recovery instructions dispatched to secure channel."}catch{i.value="Dispatch failed."}finally{n.value=!1}}}return(o,a)=>{const l=Yi("router-link");return et(),nt("div",Lw,[O("header",Nw,[lt(l,{to:"/",class:"brand"},{default:Ot(()=>[...a[1]||(a[1]=[O("span",{class:"logo-mark"},"[S]",-1),He(),O("span",{class:"logo-text"},"Serwin Games",-1)])]),_:1}),a[2]||(a[2]=O("div",{class:"nav-meta"},"PROTOCOL: RECOVER_CREDS // SECURE",-1))]),O("div",Uw,[O("div",Ow,[a[7]||(a[7]=O("h1",{class:"auth-title"},[He("System "),O("span",{class:"t-orange"},"recovery"),He(".")],-1)),a[8]||(a[8]=O("p",{class:"auth-subtitle"},"Verify identity to regain system access.",-1)),O("form",{onSubmit:Ra(r,["prevent"]),class:"auth-form"},[O("div",Fw,[a[3]||(a[3]=O("div",{class:"label-row"},[O("label",null,"EMAIL")],-1)),Xn(O("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),type:"email",placeholder:"Enter your email",required:""},null,512),[[qn,e.value]])]),O("button",{type:"submit",disabled:n.value,class:"submit-btn"},[n.value?(et(),nt("span",Vw)):(et(),nt("span",kw,[...a[4]||(a[4]=[He("SEND RECOVERY CHIP ",-1),O("span",{class:"arrow"},"↗",-1)])]))],8,Bw),s.value?(et(),nt("p",zw,sn(s.value),1)):Kn("",!0),i.value?(et(),nt("p",Gw,sn(i.value),1)):Kn("",!0)],32),O("div",Hw,[O("p",null,[a[6]||(a[6]=He("Remember your keys? ",-1)),lt(l,{to:"/login",class:"link"},{default:Ot(()=>[...a[5]||(a[5]=[He("Authenticate here.",-1)])]),_:1})])])])])])}}},Xw=Ln(Ww,[["__scopeId","data-v-f91ec850"]]),qw={class:"auth-page"},$w={class:"auth-nav"},jw={class:"auth-container"},Yw={class:"auth-card"},Kw={class:"form-group"},Zw={class:"form-group"},Jw=["disabled"],Qw={key:0,class:"spinner"},eC={key:1},tC={key:0,class:"success-msg"},nC={key:1,class:"error-msg"},iC={key:0,class:"auth-footer"},sC={__name:"ResetPassword",setup(t){const e=Da();cr();const n=e.query.token||"",i=tt(""),s=tt(""),r=tt(!1),o=tt(""),a=tt("");async function l(){if(i.value!==s.value){o.value="Passwords do not match.";return}if(!n){o.value="Invalid or missing reset token.";return}r.value=!0,o.value="",a.value="";try{await tw(n,i.value,s.value),a.value="Credentials updated. You may now authenticate.",i.value="",s.value=""}catch{o.value="Reset command rejected."}finally{r.value=!1}}return(c,u)=>{const f=Yi("router-link");return et(),nt("div",qw,[O("header",$w,[lt(f,{to:"/",class:"brand"},{default:Ot(()=>[...u[2]||(u[2]=[O("span",{class:"logo-mark"},"[S]",-1),He(),O("span",{class:"logo-text"},"Serwin Games",-1)])]),_:1}),u[3]||(u[3]=O("div",{class:"nav-meta"},"PROTOCOL: RESET_PASSWORD // SECURE",-1))]),O("div",jw,[O("div",Yw,[u[9]||(u[9]=O("h1",{class:"auth-title"},[He("System "),O("span",{class:"t-orange"},"reset"),He(".")],-1)),u[10]||(u[10]=O("p",{class:"auth-subtitle"},"Initialize your new secure credentials.",-1)),O("form",{onSubmit:Ra(l,["prevent"]),class:"auth-form"},[O("div",Kw,[u[4]||(u[4]=O("div",{class:"label-row"},[O("label",null,"NEW PASSWORD")],-1)),Xn(O("input",{"onUpdate:modelValue":u[0]||(u[0]=d=>i.value=d),type:"password",placeholder:"Enter new secure password",required:""},null,512),[[qn,i.value]])]),O("div",Zw,[u[5]||(u[5]=O("div",{class:"label-row"},[O("label",null,"CONFIRM PASSWORD")],-1)),Xn(O("input",{"onUpdate:modelValue":u[1]||(u[1]=d=>s.value=d),type:"password",placeholder:"Verify new password",required:""},null,512),[[qn,s.value]])]),O("button",{type:"submit",disabled:r.value,class:"submit-btn"},[r.value?(et(),nt("span",Qw)):(et(),nt("span",eC,[...u[6]||(u[6]=[He("CONFIRM RESET ",-1),O("span",{class:"arrow"},"↗",-1)])]))],8,Jw),a.value?(et(),nt("p",tC,sn(a.value),1)):Kn("",!0),o.value?(et(),nt("p",nC,sn(o.value),1)):Kn("",!0)],32),a.value?(et(),nt("div",iC,[O("p",null,[u[8]||(u[8]=He("Reset complete. ",-1)),lt(f,{to:"/login",class:"link"},{default:Ot(()=>[...u[7]||(u[7]=[He("Authenticate here.",-1)])]),_:1})])])):Kn("",!0)])])])}}},rC=Ln(sC,[["__scopeId","data-v-b9e54c3b"]]),oC={class:"auth-page"},aC={class:"auth-nav"},lC={class:"auth-container"},cC={class:"auth-card"},uC={key:0,class:"status-container"},fC={key:1,class:"status-container"},dC={class:"success-msg"},hC={class:"auth-footer",style:{"padding-top":"0",border:"none"}},pC={key:2,class:"status-container"},mC={class:"error-msg"},gC={class:"auth-footer",style:{"padding-top":"0",border:"none"}},_C={__name:"VerifyEmail",setup(t){const n=Da().query.token||"",i=tt(!0),s=tt(""),r=tt("");return Jr(async()=>{if(!n){s.value="Invalid or missing verification payload.",i.value=!1;return}try{await nw(n),r.value="Handshake verified. Node authorized."}catch{s.value="Verification rejected. Token may be expired."}finally{i.value=!1}}),(o,a)=>{const l=Yi("router-link");return et(),nt("div",oC,[O("header",aC,[lt(l,{to:"/",class:"brand"},{default:Ot(()=>[...a[0]||(a[0]=[O("span",{class:"logo-mark"},"[S]",-1),He(),O("span",{class:"logo-text"},"Serwin Games",-1)])]),_:1}),a[1]||(a[1]=O("div",{class:"nav-meta"},"PROTOCOL: VERIFY // SECURE",-1))]),O("div",lC,[O("div",cC,[a[5]||(a[5]=O("h1",{class:"auth-title"},[He("Identity "),O("span",{class:"t-orange"},"verification"),He(".")],-1)),a[6]||(a[6]=O("p",{class:"auth-subtitle"},"Validating terminal handshake...",-1)),i.value?(et(),nt("div",uC,[...a[2]||(a[2]=[O("span",{class:"spinner large"},null,-1),O("p",null,"Processing verification token.",-1)])])):r.value?(et(),nt("div",fC,[O("p",dC,sn(r.value),1),O("div",hC,[lt(l,{to:"/login",class:"submit-btn",style:{"text-decoration":"none"}},{default:Ot(()=>[...a[3]||(a[3]=[He(" PROCEED TO LOGIN ",-1),O("span",{class:"arrow"},"↗",-1)])]),_:1})])])):s.value?(et(),nt("div",pC,[O("p",mC,sn(s.value),1),O("div",gC,[lt(l,{to:"/register",class:"submit-btn",style:{"text-decoration":"none"}},{default:Ot(()=>[...a[4]||(a[4]=[He(" RETRY REGISTRATION ",-1),O("span",{class:"arrow"},"↗",-1)])]),_:1})])])):Kn("",!0)])])])}}},vC=Ln(_C,[["__scopeId","data-v-68e3acb9"]]),xC=[{path:"/login",name:"Login",component:mw},{path:"/register",name:"Register",component:Iw},{path:"/forgot-password",name:"ForgotPassword",component:Xw},{path:"/reset-password",name:"ResetPassword",component:rC},{path:"/verify-email",name:"VerifyEmail",component:vC}],Hm=zv({history:xv("/"),routes:[...xC,...vR,...yR,...ZR]});Hm.beforeEach(async(t,e,n)=>{const i=nr();i.isAuthenticated===null&&await i.initAuth();const s=t.matched.some(o=>o.meta.requiresAuth),r=t.matched.some(o=>o.meta.publicOnly);s&&!i.isAuthenticated?n({name:"login"}):r&&i.isAuthenticated?n({name:"dashboard"}):n()});async function SC(){wp();const t=S0(U0);t.use(M0()),t.use(Hm),t.mount("#app")}SC();
