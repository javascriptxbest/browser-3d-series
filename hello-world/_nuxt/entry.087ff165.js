function ua(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Gf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vf=ua(Gf);function Wc(n){return!!n||n===""}function Ss(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=at(i)?Xf(i):Ss(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(at(n))return n;if($e(n))return n}}const Wf=/;(?![^(]*\))/g,qf=/:(.+)/;function Xf(n){const e={};return n.split(Wf).forEach(t=>{if(t){const i=t.split(qf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ws(n){let e="";if(at(n))e=n;else if(Re(n))for(let t=0;t<n.length;t++){const i=ws(n[t]);i&&(e+=i+" ")}else if($e(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function ay(n){if(!n)return null;let{class:e,style:t}=n;return e&&!at(e)&&(n.class=ws(e)),t&&(n.style=Ss(t)),n}const ly=n=>at(n)?n:n==null?"":Re(n)||$e(n)&&(n.toString===$c||!Ae(n.toString))?JSON.stringify(n,qc,2):String(n),qc=(n,e)=>e&&e.__v_isRef?qc(n,e.value):Ii(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Xc(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!Re(e)&&!Yc(e)?String(e):e,qe={},Di=[],jt=()=>{},jf=()=>!1,$f=/^on[^a-z]/,Sr=n=>$f.test(n),fa=n=>n.startsWith("onUpdate:"),mt=Object.assign,ha=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Yf=Object.prototype.hasOwnProperty,Ue=(n,e)=>Yf.call(n,e),Re=Array.isArray,Ii=n=>Es(n)==="[object Map]",Xc=n=>Es(n)==="[object Set]",Ae=n=>typeof n=="function",at=n=>typeof n=="string",da=n=>typeof n=="symbol",$e=n=>n!==null&&typeof n=="object",jc=n=>$e(n)&&Ae(n.then)&&Ae(n.catch),$c=Object.prototype.toString,Es=n=>$c.call(n),Kf=n=>Es(n).slice(8,-1),Yc=n=>Es(n)==="[object Object]",pa=n=>at(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ur=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ts=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zf=/-(\w)/g,rn=Ts(n=>n.replace(Zf,(e,t)=>t?t.toUpperCase():"")),Jf=/\B([A-Z])/g,Ki=Ts(n=>n.replace(Jf,"-$1").toLowerCase()),As=Ts(n=>n.charAt(0).toUpperCase()+n.slice(1)),qs=Ts(n=>n?`on${As(n)}`:""),_r=(n,e)=>!Object.is(n,e),Xs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},us=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Kc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ha;const Qf=()=>Ha||(Ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Zt;class eh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Zt&&(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function th(n,e=Zt){e&&e.active&&e.effects.push(n)}const ma=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Zc=n=>(n.w&Un)>0,Jc=n=>(n.n&Un)>0,nh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Un},ih=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Zc(r)&&!Jc(r)?r.delete(n):e[t++]=r,r.w&=~Un,r.n&=~Un}e.length=t}},Oo=new WeakMap;let ar=0,Un=1;const zo=30;let Wt;const ei=Symbol(""),Bo=Symbol("");class ga{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,th(this,i)}run(){if(!this.active)return this.fn();let e=Wt,t=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wt,Wt=this,In=!0,Un=1<<++ar,ar<=zo?nh(this):Ga(this),this.fn()}finally{ar<=zo&&ih(this),Un=1<<--ar,Wt=this.parent,In=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(Ga(this),this.onStop&&this.onStop(),this.active=!1)}}function Ga(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let In=!0;const Qc=[];function Zi(){Qc.push(In),In=!1}function Ji(){const n=Qc.pop();In=n===void 0?!0:n}function Tt(n,e,t){if(In&&Wt){let i=Oo.get(n);i||Oo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=ma()),eu(r)}}function eu(n,e){let t=!1;ar<=zo?Jc(n)||(n.n|=Un,t=!Zc(n)):t=!n.has(Wt),t&&(n.add(Wt),Wt.deps.push(n))}function gn(n,e,t,i,r,s){const a=Oo.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Re(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Re(n)?pa(t)&&o.push(a.get("length")):(o.push(a.get(ei)),Ii(n)&&o.push(a.get(Bo)));break;case"delete":Re(n)||(o.push(a.get(ei)),Ii(n)&&o.push(a.get(Bo)));break;case"set":Ii(n)&&o.push(a.get(ei));break}if(o.length===1)o[0]&&ko(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ko(ma(l))}}function ko(n,e){const t=Re(n)?n:[...n];for(const i of t)i.computed&&Va(i);for(const i of t)i.computed||Va(i)}function Va(n,e){(n!==Wt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const rh=ua("__proto__,__v_isRef,__isVue"),tu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(da)),sh=_a(),oh=_a(!1,!0),ah=_a(!0),Wa=lh();function lh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ve(this);for(let s=0,a=this.length;s<a;s++)Tt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Zi();const i=Ve(this)[e].apply(this,t);return Ji(),i}}),n}function _a(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?wh:ou:e?su:ru).get(i))return i;const a=Re(i);if(!n&&a&&Ue(Wa,r))return Reflect.get(Wa,r,s);const o=Reflect.get(i,r,s);return(da(r)?tu.has(r):rh(r))||(n||Tt(i,"get",r),e)?o:ot(o)?a&&pa(r)?o:o.value:$e(o)?n?au(o):oi(o):o}}const ch=nu(),uh=nu(!0);function nu(n=!1){return function(t,i,r,s){let a=t[i];if(Bi(a)&&ot(a)&&!ot(r))return!1;if(!n&&(!fs(r)&&!Bi(r)&&(a=Ve(a),r=Ve(r)),!Re(t)&&ot(a)&&!ot(r)))return a.value=r,!0;const o=Re(t)&&pa(i)?Number(i)<t.length:Ue(t,i),l=Reflect.set(t,i,r,s);return t===Ve(s)&&(o?_r(r,a)&&gn(t,"set",i,r):gn(t,"add",i,r)),l}}function fh(n,e){const t=Ue(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&gn(n,"delete",e,void 0),i}function hh(n,e){const t=Reflect.has(n,e);return(!da(e)||!tu.has(e))&&Tt(n,"has",e),t}function dh(n){return Tt(n,"iterate",Re(n)?"length":ei),Reflect.ownKeys(n)}const iu={get:sh,set:ch,deleteProperty:fh,has:hh,ownKeys:dh},ph={get:ah,set(n,e){return!0},deleteProperty(n,e){return!0}},mh=mt({},iu,{get:oh,set:uh}),xa=n=>n,Cs=n=>Reflect.getPrototypeOf(n);function Lr(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ve(n),s=Ve(e);t||(e!==s&&Tt(r,"get",e),Tt(r,"get",s));const{has:a}=Cs(r),o=i?xa:t?ba:xr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Rr(n,e=!1){const t=this.__v_raw,i=Ve(t),r=Ve(n);return e||(n!==r&&Tt(i,"has",n),Tt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Pr(n,e=!1){return n=n.__v_raw,!e&&Tt(Ve(n),"iterate",ei),Reflect.get(n,"size",n)}function qa(n){n=Ve(n);const e=Ve(this);return Cs(e).has.call(e,n)||(e.add(n),gn(e,"add",n,n)),this}function Xa(n,e){e=Ve(e);const t=Ve(this),{has:i,get:r}=Cs(t);let s=i.call(t,n);s||(n=Ve(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?_r(e,a)&&gn(t,"set",n,e):gn(t,"add",n,e),this}function ja(n){const e=Ve(this),{has:t,get:i}=Cs(e);let r=t.call(e,n);r||(n=Ve(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&gn(e,"delete",n,void 0),s}function $a(){const n=Ve(this),e=n.size!==0,t=n.clear();return e&&gn(n,"clear",void 0,void 0),t}function Dr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Ve(a),l=e?xa:n?ba:xr;return!n&&Tt(o,"iterate",ei),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ir(n,e,t){return function(...i){const r=this.__v_raw,s=Ve(r),a=Ii(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?xa:e?ba:xr;return!e&&Tt(s,"iterate",l?Bo:ei),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function yn(n){return function(...e){return n==="delete"?!1:this}}function gh(){const n={get(s){return Lr(this,s)},get size(){return Pr(this)},has:Rr,add:qa,set:Xa,delete:ja,clear:$a,forEach:Dr(!1,!1)},e={get(s){return Lr(this,s,!1,!0)},get size(){return Pr(this)},has:Rr,add:qa,set:Xa,delete:ja,clear:$a,forEach:Dr(!1,!0)},t={get(s){return Lr(this,s,!0)},get size(){return Pr(this,!0)},has(s){return Rr.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Dr(!0,!1)},i={get(s){return Lr(this,s,!0,!0)},get size(){return Pr(this,!0)},has(s){return Rr.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ir(s,!1,!1),t[s]=Ir(s,!0,!1),e[s]=Ir(s,!1,!0),i[s]=Ir(s,!0,!0)}),[n,t,e,i]}const[_h,xh,vh,Mh]=gh();function va(n,e){const t=e?n?Mh:vh:n?xh:_h;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ue(t,r)&&r in i?t:i,r,s)}const yh={get:va(!1,!1)},bh={get:va(!1,!0)},Sh={get:va(!0,!1)},ru=new WeakMap,su=new WeakMap,ou=new WeakMap,wh=new WeakMap;function Eh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Th(n){return n.__v_skip||!Object.isExtensible(n)?0:Eh(Kf(n))}function oi(n){return Bi(n)?n:Ma(n,!1,iu,yh,ru)}function Ah(n){return Ma(n,!1,mh,bh,su)}function au(n){return Ma(n,!0,ph,Sh,ou)}function Ma(n,e,t,i,r){if(!$e(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Th(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Fi(n){return Bi(n)?Fi(n.__v_raw):!!(n&&n.__v_isReactive)}function Bi(n){return!!(n&&n.__v_isReadonly)}function fs(n){return!!(n&&n.__v_isShallow)}function lu(n){return Fi(n)||Bi(n)}function Ve(n){const e=n&&n.__v_raw;return e?Ve(e):n}function ya(n){return us(n,"__v_skip",!0),n}const xr=n=>$e(n)?oi(n):n,ba=n=>$e(n)?au(n):n;function cu(n){In&&Wt&&(n=Ve(n),eu(n.dep||(n.dep=ma())))}function uu(n,e){n=Ve(n),n.dep&&ko(n.dep)}function ot(n){return!!(n&&n.__v_isRef===!0)}function fr(n){return fu(n,!1)}function Ch(n){return fu(n,!0)}function fu(n,e){return ot(n)?n:new Lh(n,e)}class Lh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ve(e),this._value=t?e:xr(e)}get value(){return cu(this),this._value}set value(e){const t=this.__v_isShallow||fs(e)||Bi(e);e=t?e:Ve(e),_r(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xr(e),uu(this))}}function ti(n){return ot(n)?n.value:n}const Rh={get:(n,e,t)=>ti(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return ot(r)&&!ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function hu(n){return Fi(n)?n:new Proxy(n,Rh)}class Ph{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function du(n,e,t){const i=n[e];return ot(i)?i:new Ph(n,e,t)}var pu;class Dh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[pu]=!1,this._dirty=!0,this.effect=new ga(e,()=>{this._dirty||(this._dirty=!0,uu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ve(this);return cu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}pu="__v_isReadonly";function Ih(n,e,t=!1){let i,r;const s=Ae(n);return s?(i=n,r=jt):(i=n.get,r=n.set),new Dh(i,r,s||!r,t)}function Fn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Qi(s,e,t)}return r}function $t(n,e,t,i){if(Ae(n)){const s=Fn(n,e,t,i);return s&&jc(s)&&s.catch(a=>{Qi(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push($t(n[s],e,t,i));return r}function Qi(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Fn(l,null,10,[n,a,o]);return}}Fh(n,t,r,i)}function Fh(n,e,t,i=!0){console.error(n)}let hs=!1,Ho=!1;const ht=[];let en=0;const Ni=[];let fn=null,$n=0;const mu=Promise.resolve();let Sa=null;function gu(n){const e=Sa||mu;return n?e.then(this?n.bind(this):n):e}function Nh(n){let e=en+1,t=ht.length;for(;e<t;){const i=e+t>>>1;vr(ht[i])<n?e=i+1:t=i}return e}function Ls(n){(!ht.length||!ht.includes(n,hs&&n.allowRecurse?en+1:en))&&(n.id==null?ht.push(n):ht.splice(Nh(n.id),0,n),_u())}function _u(){!hs&&!Ho&&(Ho=!0,Sa=mu.then(vu))}function Uh(n){const e=ht.indexOf(n);e>en&&ht.splice(e,1)}function xu(n){Re(n)?Ni.push(...n):(!fn||!fn.includes(n,n.allowRecurse?$n+1:$n))&&Ni.push(n),_u()}function Ya(n,e=en){for(;e<ht.length;e++){const t=ht[e];t&&t.pre&&(ht.splice(e,1),e--,t())}}function ds(n){if(Ni.length){const e=[...new Set(Ni)];if(Ni.length=0,fn){fn.push(...e);return}for(fn=e,fn.sort((t,i)=>vr(t)-vr(i)),$n=0;$n<fn.length;$n++)fn[$n]();fn=null,$n=0}}const vr=n=>n.id==null?1/0:n.id,Oh=(n,e)=>{const t=vr(n)-vr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function vu(n){Ho=!1,hs=!0,ht.sort(Oh);const e=jt;try{for(en=0;en<ht.length;en++){const t=ht[en];t&&t.active!==!1&&Fn(t,null,14)}}finally{en=0,ht.length=0,ds(),hs=!1,Sa=null,(ht.length||Ni.length)&&vu()}}function zh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||qe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||qe;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(Kc))}let o,l=i[o=qs(e)]||i[o=qs(rn(e))];!l&&s&&(l=i[o=qs(Ki(e))]),l&&$t(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,$t(c,n,6,r)}}function Mu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ae(n)){const l=c=>{const u=Mu(c,e,!0);u&&(o=!0,mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?($e(n)&&i.set(n,null),null):(Re(s)?s.forEach(l=>a[l]=null):mt(a,s),$e(n)&&i.set(n,a),a)}function Rs(n,e){return!n||!Sr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(n,e[0].toLowerCase()+e.slice(1))||Ue(n,Ki(e))||Ue(n,e))}let Xt=null,Ps=null;function ps(n){const e=Xt;return Xt=n,Ps=n&&n.type.__scopeId||null,e}function cy(n){Ps=n}function uy(){Ps=null}function yu(n,e=Xt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&al(-1);const s=ps(e),a=n(...r);return ps(s),i._d&&al(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function js(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let d,_;const x=ps(n);try{if(t.shapeFlag&4){const b=r||i;d=Dt(u.call(b,b,f,s,m,h,g)),_=l}else{const b=e;d=Dt(b.length>1?b(s,{attrs:l,slots:o,emit:c}):b(s,null)),_=e.props?l:kh(l)}}catch(b){dr.length=0,Qi(b,n,1),d=it(On)}let E=d;if(_&&p!==!1){const b=Object.keys(_),{shapeFlag:T}=E;b.length&&T&7&&(a&&b.some(fa)&&(_=Hh(_,a)),E=Hi(E,_))}return t.dirs&&(E=Hi(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),d=E,ps(x),d}function Bh(n){let e;for(let t=0;t<n.length;t++){const i=n[t];if(xs(i)){if(i.type!==On||i.children==="v-if"){if(e)return;e=i}}else return}return e}const kh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Sr(t))&&((e||(e={}))[t]=n[t]);return e},Hh=(n,e)=>{const t={};for(const i in n)(!fa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Gh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ka(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Rs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ka(i,a,c):!0:!!a;return!1}function Ka(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Rs(t,s))return!0}return!1}function wa({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Vh=n=>n.__isSuspense,Wh={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,a,o,l,c){n==null?Xh(e,t,i,r,s,a,o,l,c):jh(n,e,t,i,r,a,o,l,c)},hydrate:$h,create:Ea,normalize:Yh},qh=Wh;function Mr(n,e){const t=n.props&&n.props[e];Ae(t)&&t()}function Xh(n,e,t,i,r,s,a,o,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=n.suspense=Ea(n,r,i,e,f,t,s,a,o,l);c(null,h.pendingBranch=n.ssContent,f,null,i,h,s,a),h.deps>0?(Mr(n,"onPending"),Mr(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,s,a),Ui(h,n.ssFallback)):h.resolve()}function jh(n,e,t,i,r,s,a,o,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const h=e.ssContent,m=e.ssFallback,{activeBranch:g,pendingBranch:p,isInFallback:d,isHydrating:_}=f;if(p)f.pendingBranch=h,Pn(h,p)?(l(p,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():d&&(l(g,m,t,i,r,null,s,a,o),Ui(f,m))):(f.pendingId++,_?(f.isHydrating=!1,f.activeBranch=p):c(p,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),d?(l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():(l(g,m,t,i,r,null,s,a,o),Ui(f,m))):g&&Pn(h,g)?(l(g,h,t,i,r,f,s,a,o),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0&&f.resolve()));else if(g&&Pn(h,g))l(g,h,t,i,r,f,s,a,o),Ui(f,h);else if(Mr(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0)f.resolve();else{const{timeout:x,pendingId:E}=f;x>0?setTimeout(()=>{f.pendingId===E&&f.fallback(m)},x):x===0&&f.fallback(m)}}function Ea(n,e,t,i,r,s,a,o,l,c,u=!1){const{p:f,m:h,um:m,n:g,o:{parentNode:p,remove:d}}=c,_=Kc(n.props&&n.props.timeout),x={vnode:n,parent:e,parentComponent:t,isSVG:a,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:b,activeBranch:T,pendingBranch:C,pendingId:F,effects:y,parentComponent:A,container:I}=x;if(x.isHydrating)x.isHydrating=!1;else if(!E){const W=T&&C.transition&&C.transition.mode==="out-in";W&&(T.transition.afterLeave=()=>{F===x.pendingId&&h(C,I,R,0)});let{anchor:R}=x;T&&(R=g(T),m(T,A,x,!0)),W||h(C,I,R,0)}Ui(x,C),x.pendingBranch=null,x.isInFallback=!1;let j=x.parent,le=!1;for(;j;){if(j.pendingBranch){j.effects.push(...y),le=!0;break}j=j.parent}le||xu(y),x.effects=[],Mr(b,"onResolve")},fallback(E){if(!x.pendingBranch)return;const{vnode:b,activeBranch:T,parentComponent:C,container:F,isSVG:y}=x;Mr(b,"onFallback");const A=g(T),I=()=>{!x.isInFallback||(f(null,E,F,A,C,null,y,o,l),Ui(x,E))},j=E.transition&&E.transition.mode==="out-in";j&&(T.transition.afterLeave=I),x.isInFallback=!0,m(T,C,null,!0),j||I()},move(E,b,T){x.activeBranch&&h(x.activeBranch,E,b,T),x.container=E},next(){return x.activeBranch&&g(x.activeBranch)},registerDep(E,b){const T=!!x.pendingBranch;T&&x.deps++;const C=E.vnode.el;E.asyncDep.catch(F=>{Qi(F,E,0)}).then(F=>{if(E.isUnmounted||x.isUnmounted||x.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:y}=E;Xo(E,F,!1),C&&(y.el=C);const A=!C&&E.subTree.el;b(E,y,p(C||E.subTree.el),C?null:g(E.subTree),x,a,l),A&&d(A),wa(E,y.el),T&&--x.deps===0&&x.resolve()})},unmount(E,b){x.isUnmounted=!0,x.activeBranch&&m(x.activeBranch,t,E,b),x.pendingBranch&&m(x.pendingBranch,t,E,b)}};return x}function $h(n,e,t,i,r,s,a,o,l){const c=e.suspense=Ea(e,i,t,n.parentNode,document.createElement("div"),null,r,s,a,o,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,s,a);return c.deps===0&&c.resolve(),u}function Yh(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=Za(i?t.default:t),n.ssFallback=i?Za(t.fallback):it(On)}function Za(n){let e;if(Ae(n)){const t=ki&&n._c;t&&(n._d=!1,pr()),n=n(),t&&(n._d=!0,e=Nt,Gu())}return Re(n)&&(n=Bh(n)),n=Dt(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function bu(n,e){e&&e.pendingBranch?Re(n)?e.effects.push(...n):e.effects.push(n):xu(n)}function Ui(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n,r=t.el=e.el;i&&i.subTree===t&&(i.vnode.el=r,wa(i,r))}function Su(n,e){if(nt){let t=nt.provides;const i=nt.parent&&nt.parent.provides;i===t&&(t=nt.provides=Object.create(i)),t[n]=e}}function ss(n,e,t=!1){const i=nt||Xt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ae(e)?e.call(i.proxy):e}}function Ja(n,e){return Ta(n,null,e)}const Qa={};function $s(n,e,t){return Ta(n,e,t)}function Ta(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=qe){const o=nt;let l,c=!1,u=!1;if(ot(n)?(l=()=>n.value,c=fs(n)):Fi(n)?(l=()=>n,i=!0):Re(n)?(u=!0,c=n.some(_=>Fi(_)||fs(_)),l=()=>n.map(_=>{if(ot(_))return _.value;if(Fi(_))return Ri(_);if(Ae(_))return Fn(_,o,2)})):Ae(n)?e?l=()=>Fn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),$t(n,o,3,[h])}:l=jt,e&&i){const _=l;l=()=>Ri(_())}let f,h=_=>{f=d.onStop=()=>{Fn(_,o,4)}};if(Vi)return h=jt,e?t&&$t(e,o,3,[l(),u?[]:void 0,h]):l(),jt;let m=u?[]:Qa;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((x,E)=>_r(x,m[E])):_r(_,m)))&&(f&&f(),$t(e,o,3,[_,m===Qa?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>xt(g,o&&o.suspense):(g.pre=!0,o&&(g.id=o.uid),p=()=>Ls(g));const d=new ga(l,p);return e?t?g():m=d.run():r==="post"?xt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&ha(o.scope.effects,d)}}function Kh(n,e,t){const i=this.proxy,r=at(n)?n.includes(".")?wu(i,n):()=>i[n]:n.bind(i,i);let s;Ae(e)?s=e:(s=e.handler,t=e);const a=nt;Gi(this);const o=Ta(r,s.bind(i),t);return a?Gi(a):ni(),o}function wu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ri(n,e){if(!$e(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),ot(n))Ri(n.value,e);else if(Re(n))for(let t=0;t<n.length;t++)Ri(n[t],e);else if(Xc(n)||Ii(n))n.forEach(t=>{Ri(t,e)});else if(Yc(n))for(const t in n)Ri(n[t],e);return n}function At(n){return Ae(n)?{setup:n,name:n.name}:n}const hr=n=>!!n.type.__asyncLoader;function Zh(n){Ae(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,timeout:s,suspensible:a=!0,onError:o}=n;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let m;return l||(m=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),o)return new Promise((p,d)=>{o(g,()=>p(f()),()=>d(g),u+1)});throw g}).then(g=>m!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return At({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const m=nt;if(c)return()=>Ys(c,m);const g=x=>{l=null,Qi(x,m,13,!i)};if(a&&m.suspense||Vi)return h().then(x=>()=>Ys(x,m)).catch(x=>(g(x),()=>i?it(i,{error:x}):null));const p=fr(!1),d=fr(),_=fr(!!r);return r&&setTimeout(()=>{_.value=!1},r),s!=null&&setTimeout(()=>{if(!p.value&&!d.value){const x=new Error(`Async component timed out after ${s}ms.`);g(x),d.value=x}},s),h().then(()=>{p.value=!0,m.parent&&Aa(m.parent.vnode)&&Ls(m.parent.update)}).catch(x=>{g(x),d.value=x}),()=>{if(p.value&&c)return Ys(c,m);if(d.value&&i)return it(i,{error:d.value});if(t&&!_.value)return it(t)}}})}function Ys(n,{vnode:{ref:e,props:t,children:i,shapeFlag:r},parent:s}){const a=it(n,t,i);return a.ref=e,a}const Aa=n=>n.type.__isKeepAlive;function Jh(n,e){Eu(n,"a",e)}function Qh(n,e){Eu(n,"da",e)}function Eu(n,e,t=nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ds(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Aa(r.parent.vnode)&&ed(i,e,t,r),r=r.parent}}function ed(n,e,t,i){const r=Ds(e,n,i,!0);Cu(()=>{ha(i[e],r)},t)}function Ds(n,e,t=nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Zi(),Gi(t);const o=$t(e,t,n,a);return ni(),Ji(),o});return i?r.unshift(s):r.push(s),s}}const _n=n=>(e,t=nt)=>(!Vi||n==="sp")&&Ds(n,e,t),td=_n("bm"),Tu=_n("m"),nd=_n("bu"),id=_n("u"),Au=_n("bum"),Cu=_n("um"),rd=_n("sp"),sd=_n("rtg"),od=_n("rtc");function Lu(n,e=nt){Ds("ec",n,e)}function Jt(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Zi(),$t(l,t,8,[n.el,o,n,e]),Ji())}}const Ru="components";function Pu(n,e){return ld(Ru,n,!0,e)||n}const ad=Symbol();function ld(n,e,t=!0,i=!1){const r=Xt||nt;if(r){const s=r.type;if(n===Ru){const o=zd(s,!1);if(o&&(o===e||o===rn(e)||o===As(rn(e))))return s}const a=el(r[n]||s[n],e)||el(r.appContext[n],e);return!a&&i?s:a}}function el(n,e){return n&&(n[e]||n[rn(e)]||n[As(rn(e))])}const Go=n=>n?ju(n)?Ra(n)||n.proxy:Go(n.parent):null,ms=mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Go(n.parent),$root:n=>Go(n.root),$emit:n=>n.emit,$options:n=>Iu(n),$forceUpdate:n=>n.f||(n.f=()=>Ls(n.update)),$nextTick:n=>n.n||(n.n=gu.bind(n.proxy)),$watch:n=>Kh.bind(n)}),cd={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==qe&&Ue(i,e))return a[e]=1,i[e];if(r!==qe&&Ue(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ue(c,e))return a[e]=3,s[e];if(t!==qe&&Ue(t,e))return a[e]=4,t[e];Vo&&(a[e]=0)}}const u=ms[e];let f,h;if(u)return e==="$attrs"&&Tt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==qe&&Ue(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ue(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==qe&&Ue(r,e)?(r[e]=t,!0):i!==qe&&Ue(i,e)?(i[e]=t,!0):Ue(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==qe&&Ue(n,a)||e!==qe&&Ue(e,a)||(o=s[0])&&Ue(o,a)||Ue(i,a)||Ue(ms,a)||Ue(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ue(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Vo=!0;function ud(n){const e=Iu(n),t=n.proxy,i=n.ctx;Vo=!1,e.beforeCreate&&tl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:x,destroyed:E,unmounted:b,render:T,renderTracked:C,renderTriggered:F,errorCaptured:y,serverPrefetch:A,expose:I,inheritAttrs:j,components:le,directives:W,filters:R}=e;if(c&&fd(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const te in a){const V=a[te];Ae(V)&&(i[te]=V.bind(t))}if(r){const te=r.call(t,t);$e(te)&&(n.data=oi(te))}if(Vo=!0,s)for(const te in s){const V=s[te],N=Ae(V)?V.bind(t,t):Ae(V.get)?V.get.bind(t,t):jt,B=!Ae(V)&&Ae(V.set)?V.set.bind(t):jt,ue=Wi({get:N,set:B});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>ue.value,set:re=>ue.value=re})}if(o)for(const te in o)Du(o[te],i,t,te);if(l){const te=Ae(l)?l.call(t):l;Reflect.ownKeys(te).forEach(V=>{Su(V,te[V])})}u&&tl(u,n,"c");function K(te,V){Re(V)?V.forEach(N=>te(N.bind(t))):V&&te(V.bind(t))}if(K(td,f),K(Tu,h),K(nd,m),K(id,g),K(Jh,p),K(Qh,d),K(Lu,y),K(od,C),K(sd,F),K(Au,x),K(Cu,b),K(rd,A),Re(I))if(I.length){const te=n.exposed||(n.exposed={});I.forEach(V=>{Object.defineProperty(te,V,{get:()=>t[V],set:N=>t[V]=N})})}else n.exposed||(n.exposed={});T&&n.render===jt&&(n.render=T),j!=null&&(n.inheritAttrs=j),le&&(n.components=le),W&&(n.directives=W)}function fd(n,e,t=jt,i=!1){Re(n)&&(n=Wo(n));for(const r in n){const s=n[r];let a;$e(s)?"default"in s?a=ss(s.from||r,s.default,!0):a=ss(s.from||r):a=ss(s),ot(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function tl(n,e,t){$t(Re(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Du(n,e,t,i){const r=i.includes(".")?wu(t,i):()=>t[i];if(at(n)){const s=e[n];Ae(s)&&$s(r,s)}else if(Ae(n))$s(r,n.bind(t));else if($e(n))if(Re(n))n.forEach(s=>Du(s,e,t,i));else{const s=Ae(n.handler)?n.handler.bind(t):e[n.handler];Ae(s)&&$s(r,s,n)}}function Iu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>gs(l,c,a,!0)),gs(l,e,a)),$e(e)&&s.set(e,l),l}function gs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&gs(n,s,t,!0),r&&r.forEach(a=>gs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=hd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const hd={data:nl,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:qn,directives:qn,watch:pd,provide:nl,inject:dd};function nl(n,e){return e?n?function(){return mt(Ae(n)?n.call(this,this):n,Ae(e)?e.call(this,this):e)}:e:n}function dd(n,e){return qn(Wo(n),Wo(e))}function Wo(n){if(Re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function qn(n,e){return n?mt(mt(Object.create(null),n),e):e}function pd(n,e){if(!n)return e;if(!e)return n;const t=mt(Object.create(null),n);for(const i in e)t[i]=pt(n[i],e[i]);return t}function md(n,e,t,i=!1){const r={},s={};us(s,Is,1),n.propsDefaults=Object.create(null),Fu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Ah(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function gd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ve(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Rs(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ue(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=rn(h);r[g]=qo(l,o,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Fu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ue(e,f)&&((u=Ki(f))===f||!Ue(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=qo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ue(e,f)&&!0)&&(delete s[f],c=!0)}c&&gn(n,"set","$attrs")}function Fu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ur(l))continue;const c=e[l];let u;r&&Ue(r,u=rn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Rs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ve(t),c=o||qe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=qo(r,l,f,c[f],n,!Ue(c,f))}}return a}function qo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ue(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ae(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Gi(r),i=c[t]=l.call(null,e),ni())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ki(t))&&(i=!0))}return i}function Nu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ae(n)){const u=f=>{l=!0;const[h,m]=Nu(f,e,!0);mt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return $e(n)&&i.set(n,Di),Di;if(Re(s))for(let u=0;u<s.length;u++){const f=rn(s[u]);il(f)&&(a[f]=qe)}else if(s)for(const u in s){const f=rn(u);if(il(f)){const h=s[u],m=a[f]=Re(h)||Ae(h)?{type:h}:h;if(m){const g=ol(Boolean,m.type),p=ol(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ue(m,"default"))&&o.push(f)}}}const c=[a,o];return $e(n)&&i.set(n,c),c}function il(n){return n[0]!=="$"}function rl(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function sl(n,e){return rl(n)===rl(e)}function ol(n,e){return Re(e)?e.findIndex(t=>sl(t,n)):Ae(e)&&sl(e,n)?0:-1}const Uu=n=>n[0]==="_"||n==="$stable",Ca=n=>Re(n)?n.map(Dt):[Dt(n)],_d=(n,e,t)=>{if(e._n)return e;const i=yu((...r)=>Ca(e(...r)),t);return i._c=!1,i},Ou=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Uu(r))continue;const s=n[r];if(Ae(s))e[r]=_d(r,s,i);else if(s!=null){const a=Ca(s);e[r]=()=>a}}},zu=(n,e)=>{const t=Ca(e);n.slots.default=()=>t},xd=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ve(e),us(e,"_",t)):Ou(e,n.slots={})}else n.slots={},e&&zu(n,e);us(n.slots,Is,1)},vd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(mt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Ou(e,r)),a=e}else e&&(zu(n,e),a={default:1});if(s)for(const o in r)!Uu(o)&&!(o in a)&&delete r[o]};function Bu(){return{app:null,config:{isNativeTag:jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Md=0;function yd(n,e){return function(i,r=null){Ae(i)||(i=Object.assign({},i)),r!=null&&!$e(r)&&(r=null);const s=Bu(),a=new Set;let o=!1;const l=s.app={_uid:Md++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ae(c.install)?(a.add(c),c.install(l,...u)):Ae(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=it(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Ra(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function _s(n,e,t,i,r=!1){if(Re(n)){n.forEach((h,m)=>_s(h,e&&(Re(e)?e[m]:e),t,i,r));return}if(hr(i)&&!r)return;const s=i.shapeFlag&4?Ra(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===qe?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(at(c)?(u[c]=null,Ue(f,c)&&(f[c]=null)):ot(c)&&(c.value=null)),Ae(l))Fn(l,o,12,[a,u]);else{const h=at(l),m=ot(l);if(h||m){const g=()=>{if(n.f){const p=h?u[l]:l.value;r?Re(p)&&ha(p,s):Re(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ue(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Ue(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,xt(g,t)):g()}}}let bn=!1;const Fr=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",Nr=n=>n.nodeType===8;function bd(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:a,remove:o,insert:l,createComment:c}}=n,u=(_,x)=>{if(!x.hasChildNodes()){t(null,_,x),ds(),x._vnode=_;return}bn=!1,f(x.firstChild,_,null,null,null),ds(),x._vnode=_,bn&&console.error("Hydration completed but contains mismatches.")},f=(_,x,E,b,T,C=!1)=>{const F=Nr(_)&&_.data==="[",y=()=>p(_,x,E,b,T,F),{type:A,ref:I,shapeFlag:j,patchFlag:le}=x,W=_.nodeType;x.el=_,le===-2&&(C=!1,x.dynamicChildren=null);let R=null;switch(A){case yr:W!==3?x.children===""?(l(x.el=r(""),a(_),_),R=_):R=y():(_.data!==x.children&&(bn=!0,_.data=x.children),R=s(_));break;case On:W!==8||F?R=y():R=s(_);break;case os:if(W!==1&&W!==3)R=y();else{R=_;const Y=!x.children.length;for(let K=0;K<x.staticCount;K++)Y&&(x.children+=R.nodeType===1?R.outerHTML:R.data),K===x.staticCount-1&&(x.anchor=R),R=s(R);return R}break;case Vt:F?R=g(_,x,E,b,T,C):R=y();break;default:if(j&1)W!==1||x.type.toLowerCase()!==_.tagName.toLowerCase()?R=y():R=h(_,x,E,b,T,C);else if(j&6){x.slotScopeIds=T;const Y=a(_);if(e(x,Y,null,E,b,Fr(Y),C),R=F?d(_):s(_),R&&Nr(R)&&R.data==="teleport end"&&(R=s(R)),hr(x)){let K;F?(K=it(Vt),K.anchor=R?R.previousSibling:Y.lastChild):K=_.nodeType===3?Xu(""):it("div"),K.el=_,x.component.subTree=K}}else j&64?W!==8?R=y():R=x.type.hydrate(_,x,E,b,T,C,n,m):j&128&&(R=x.type.hydrate(_,x,E,b,Fr(a(_)),T,C,n,f))}return I!=null&&_s(I,null,b,x),R},h=(_,x,E,b,T,C)=>{C=C||!!x.dynamicChildren;const{type:F,props:y,patchFlag:A,shapeFlag:I,dirs:j}=x,le=F==="input"&&j||F==="option";if(le||A!==-1){if(j&&Jt(x,null,E,"created"),y)if(le||!C||A&48)for(const R in y)(le&&R.endsWith("value")||Sr(R)&&!ur(R))&&i(_,R,null,y[R],!1,void 0,E);else y.onClick&&i(_,"onClick",null,y.onClick,!1,void 0,E);let W;if((W=y&&y.onVnodeBeforeMount)&&Pt(W,E,x),j&&Jt(x,null,E,"beforeMount"),((W=y&&y.onVnodeMounted)||j)&&bu(()=>{W&&Pt(W,E,x),j&&Jt(x,null,E,"mounted")},b),I&16&&!(y&&(y.innerHTML||y.textContent))){let R=m(_.firstChild,x,_,E,b,T,C);for(;R;){bn=!0;const Y=R;R=R.nextSibling,o(Y)}}else I&8&&_.textContent!==x.children&&(bn=!0,_.textContent=x.children)}return _.nextSibling},m=(_,x,E,b,T,C,F)=>{F=F||!!x.dynamicChildren;const y=x.children,A=y.length;for(let I=0;I<A;I++){const j=F?y[I]:y[I]=Dt(y[I]);if(_)_=f(_,j,b,T,C,F);else{if(j.type===yr&&!j.children)continue;bn=!0,t(null,j,E,null,b,T,Fr(E),C)}}return _},g=(_,x,E,b,T,C)=>{const{slotScopeIds:F}=x;F&&(T=T?T.concat(F):F);const y=a(_),A=m(s(_),x,y,E,b,T,C);return A&&Nr(A)&&A.data==="]"?s(x.anchor=A):(bn=!0,l(x.anchor=c("]"),y,A),A)},p=(_,x,E,b,T,C)=>{if(bn=!0,x.el=null,C){const A=d(_);for(;;){const I=s(_);if(I&&I!==A)o(I);else break}}const F=s(_),y=a(_);return o(_),t(null,x,y,F,E,b,Fr(y),T),F},d=_=>{let x=0;for(;_;)if(_=s(_),_&&Nr(_)&&(_.data==="["&&x++,_.data==="]")){if(x===0)return s(_);x--}return _};return[u,f]}const xt=bu;function Sd(n){return ku(n)}function wd(n){return ku(n,bd)}function ku(n,e){const t=Qf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=jt,cloneNode:g,insertStaticContent:p}=n,d=(w,L,G,Z=null,Q=null,ie=null,se=!1,oe=null,ae=!!L.dynamicChildren)=>{if(w===L)return;w&&!Pn(w,L)&&(Z=Se(w),ce(w,Q,ie,!0),w=null),L.patchFlag===-2&&(ae=!1,L.dynamicChildren=null);const{type:M,ref:v,shapeFlag:D}=L;switch(M){case yr:_(w,L,G,Z);break;case On:x(w,L,G,Z);break;case os:w==null&&E(L,G,Z,se);break;case Vt:W(w,L,G,Z,Q,ie,se,oe,ae);break;default:D&1?C(w,L,G,Z,Q,ie,se,oe,ae):D&6?R(w,L,G,Z,Q,ie,se,oe,ae):(D&64||D&128)&&M.process(w,L,G,Z,Q,ie,se,oe,ae,_e)}v!=null&&Q&&_s(v,w&&w.ref,ie,L||w,!L)},_=(w,L,G,Z)=>{if(w==null)i(L.el=o(L.children),G,Z);else{const Q=L.el=w.el;L.children!==w.children&&c(Q,L.children)}},x=(w,L,G,Z)=>{w==null?i(L.el=l(L.children||""),G,Z):L.el=w.el},E=(w,L,G,Z)=>{[w.el,w.anchor]=p(w.children,L,G,Z,w.el,w.anchor)},b=({el:w,anchor:L},G,Z)=>{let Q;for(;w&&w!==L;)Q=h(w),i(w,G,Z),w=Q;i(L,G,Z)},T=({el:w,anchor:L})=>{let G;for(;w&&w!==L;)G=h(w),r(w),w=G;r(L)},C=(w,L,G,Z,Q,ie,se,oe,ae)=>{se=se||L.type==="svg",w==null?F(L,G,Z,Q,ie,se,oe,ae):I(w,L,Q,ie,se,oe,ae)},F=(w,L,G,Z,Q,ie,se,oe)=>{let ae,M;const{type:v,props:D,shapeFlag:H,transition:q,patchFlag:ne,dirs:pe}=w;if(w.el&&g!==void 0&&ne===-1)ae=w.el=g(w.el);else{if(ae=w.el=a(w.type,ie,D&&D.is,D),H&8?u(ae,w.children):H&16&&A(w.children,ae,null,Z,Q,ie&&v!=="foreignObject",se,oe),pe&&Jt(w,null,Z,"created"),D){for(const fe in D)fe!=="value"&&!ur(fe)&&s(ae,fe,null,D[fe],ie,w.children,Z,Q,De);"value"in D&&s(ae,"value",null,D.value),(M=D.onVnodeBeforeMount)&&Pt(M,Z,w)}y(ae,w,w.scopeId,se,Z)}pe&&Jt(w,null,Z,"beforeMount");const O=(!Q||Q&&!Q.pendingBranch)&&q&&!q.persisted;O&&q.beforeEnter(ae),i(ae,L,G),((M=D&&D.onVnodeMounted)||O||pe)&&xt(()=>{M&&Pt(M,Z,w),O&&q.enter(ae),pe&&Jt(w,null,Z,"mounted")},Q)},y=(w,L,G,Z,Q)=>{if(G&&m(w,G),Z)for(let ie=0;ie<Z.length;ie++)m(w,Z[ie]);if(Q){let ie=Q.subTree;if(L===ie){const se=Q.vnode;y(w,se,se.scopeId,se.slotScopeIds,Q.parent)}}},A=(w,L,G,Z,Q,ie,se,oe,ae=0)=>{for(let M=ae;M<w.length;M++){const v=w[M]=oe?Rn(w[M]):Dt(w[M]);d(null,v,L,G,Z,Q,ie,se,oe)}},I=(w,L,G,Z,Q,ie,se)=>{const oe=L.el=w.el;let{patchFlag:ae,dynamicChildren:M,dirs:v}=L;ae|=w.patchFlag&16;const D=w.props||qe,H=L.props||qe;let q;G&&Hn(G,!1),(q=H.onVnodeBeforeUpdate)&&Pt(q,G,L,w),v&&Jt(L,w,G,"beforeUpdate"),G&&Hn(G,!0);const ne=Q&&L.type!=="foreignObject";if(M?j(w.dynamicChildren,M,oe,G,Z,ne,ie):se||N(w,L,oe,null,G,Z,ne,ie,!1),ae>0){if(ae&16)le(oe,L,D,H,G,Z,Q);else if(ae&2&&D.class!==H.class&&s(oe,"class",null,H.class,Q),ae&4&&s(oe,"style",D.style,H.style,Q),ae&8){const pe=L.dynamicProps;for(let O=0;O<pe.length;O++){const fe=pe[O],de=D[fe],ye=H[fe];(ye!==de||fe==="value")&&s(oe,fe,de,ye,Q,w.children,G,Z,De)}}ae&1&&w.children!==L.children&&u(oe,L.children)}else!se&&M==null&&le(oe,L,D,H,G,Z,Q);((q=H.onVnodeUpdated)||v)&&xt(()=>{q&&Pt(q,G,L,w),v&&Jt(L,w,G,"updated")},Z)},j=(w,L,G,Z,Q,ie,se)=>{for(let oe=0;oe<L.length;oe++){const ae=w[oe],M=L[oe],v=ae.el&&(ae.type===Vt||!Pn(ae,M)||ae.shapeFlag&70)?f(ae.el):G;d(ae,M,v,null,Z,Q,ie,se,!0)}},le=(w,L,G,Z,Q,ie,se)=>{if(G!==Z){for(const oe in Z){if(ur(oe))continue;const ae=Z[oe],M=G[oe];ae!==M&&oe!=="value"&&s(w,oe,M,ae,se,L.children,Q,ie,De)}if(G!==qe)for(const oe in G)!ur(oe)&&!(oe in Z)&&s(w,oe,G[oe],null,se,L.children,Q,ie,De);"value"in Z&&s(w,"value",G.value,Z.value)}},W=(w,L,G,Z,Q,ie,se,oe,ae)=>{const M=L.el=w?w.el:o(""),v=L.anchor=w?w.anchor:o("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:q}=L;q&&(oe=oe?oe.concat(q):q),w==null?(i(M,G,Z),i(v,G,Z),A(L.children,G,v,Q,ie,se,oe,ae)):D>0&&D&64&&H&&w.dynamicChildren?(j(w.dynamicChildren,H,G,Q,ie,se,oe),(L.key!=null||Q&&L===Q.subTree)&&Hu(w,L,!0)):N(w,L,G,v,Q,ie,se,oe,ae)},R=(w,L,G,Z,Q,ie,se,oe,ae)=>{L.slotScopeIds=oe,w==null?L.shapeFlag&512?Q.ctx.activate(L,G,Z,se,ae):Y(L,G,Z,Q,ie,se,ae):K(w,L,ae)},Y=(w,L,G,Z,Q,ie,se)=>{const oe=w.component=Id(w,Z,Q);if(Aa(w)&&(oe.ctx.renderer=_e),Fd(oe),oe.asyncDep){if(Q&&Q.registerDep(oe,te),!w.el){const ae=oe.subTree=it(On);x(null,ae,L,G)}return}te(oe,w,L,G,Q,ie,se)},K=(w,L,G)=>{const Z=L.component=w.component;if(Gh(w,L,G))if(Z.asyncDep&&!Z.asyncResolved){V(Z,L,G);return}else Z.next=L,Uh(Z.update),Z.update();else L.el=w.el,Z.vnode=L},te=(w,L,G,Z,Q,ie,se)=>{const oe=()=>{if(w.isMounted){let{next:v,bu:D,u:H,parent:q,vnode:ne}=w,pe=v,O;Hn(w,!1),v?(v.el=ne.el,V(w,v,se)):v=ne,D&&Xs(D),(O=v.props&&v.props.onVnodeBeforeUpdate)&&Pt(O,q,v,ne),Hn(w,!0);const fe=js(w),de=w.subTree;w.subTree=fe,d(de,fe,f(de.el),Se(de),w,Q,ie),v.el=fe.el,pe===null&&wa(w,fe.el),H&&xt(H,Q),(O=v.props&&v.props.onVnodeUpdated)&&xt(()=>Pt(O,q,v,ne),Q)}else{let v;const{el:D,props:H}=L,{bm:q,m:ne,parent:pe}=w,O=hr(L);if(Hn(w,!1),q&&Xs(q),!O&&(v=H&&H.onVnodeBeforeMount)&&Pt(v,pe,L),Hn(w,!0),D&&Pe){const fe=()=>{w.subTree=js(w),Pe(D,w.subTree,w,Q,null)};O?L.type.__asyncLoader().then(()=>!w.isUnmounted&&fe()):fe()}else{const fe=w.subTree=js(w);d(null,fe,G,Z,w,Q,ie),L.el=fe.el}if(ne&&xt(ne,Q),!O&&(v=H&&H.onVnodeMounted)){const fe=L;xt(()=>Pt(v,pe,fe),Q)}(L.shapeFlag&256||pe&&hr(pe.vnode)&&pe.vnode.shapeFlag&256)&&w.a&&xt(w.a,Q),w.isMounted=!0,L=G=Z=null}},ae=w.effect=new ga(oe,()=>Ls(M),w.scope),M=w.update=()=>ae.run();M.id=w.uid,Hn(w,!0),M()},V=(w,L,G)=>{L.component=w;const Z=w.vnode.props;w.vnode=L,w.next=null,gd(w,L.props,Z,G),vd(w,L.children,G),Zi(),Ya(),Ji()},N=(w,L,G,Z,Q,ie,se,oe,ae=!1)=>{const M=w&&w.children,v=w?w.shapeFlag:0,D=L.children,{patchFlag:H,shapeFlag:q}=L;if(H>0){if(H&128){ue(M,D,G,Z,Q,ie,se,oe,ae);return}else if(H&256){B(M,D,G,Z,Q,ie,se,oe,ae);return}}q&8?(v&16&&De(M,Q,ie),D!==M&&u(G,D)):v&16?q&16?ue(M,D,G,Z,Q,ie,se,oe,ae):De(M,Q,ie,!0):(v&8&&u(G,""),q&16&&A(D,G,Z,Q,ie,se,oe,ae))},B=(w,L,G,Z,Q,ie,se,oe,ae)=>{w=w||Di,L=L||Di;const M=w.length,v=L.length,D=Math.min(M,v);let H;for(H=0;H<D;H++){const q=L[H]=ae?Rn(L[H]):Dt(L[H]);d(w[H],q,G,null,Q,ie,se,oe,ae)}M>v?De(w,Q,ie,!0,!1,D):A(L,G,Z,Q,ie,se,oe,ae,D)},ue=(w,L,G,Z,Q,ie,se,oe,ae)=>{let M=0;const v=L.length;let D=w.length-1,H=v-1;for(;M<=D&&M<=H;){const q=w[M],ne=L[M]=ae?Rn(L[M]):Dt(L[M]);if(Pn(q,ne))d(q,ne,G,null,Q,ie,se,oe,ae);else break;M++}for(;M<=D&&M<=H;){const q=w[D],ne=L[H]=ae?Rn(L[H]):Dt(L[H]);if(Pn(q,ne))d(q,ne,G,null,Q,ie,se,oe,ae);else break;D--,H--}if(M>D){if(M<=H){const q=H+1,ne=q<v?L[q].el:Z;for(;M<=H;)d(null,L[M]=ae?Rn(L[M]):Dt(L[M]),G,ne,Q,ie,se,oe,ae),M++}}else if(M>H)for(;M<=D;)ce(w[M],Q,ie,!0),M++;else{const q=M,ne=M,pe=new Map;for(M=ne;M<=H;M++){const Ne=L[M]=ae?Rn(L[M]):Dt(L[M]);Ne.key!=null&&pe.set(Ne.key,M)}let O,fe=0;const de=H-ne+1;let ye=!1,ve=0;const Ee=new Array(de);for(M=0;M<de;M++)Ee[M]=0;for(M=q;M<=D;M++){const Ne=w[M];if(fe>=de){ce(Ne,Q,ie,!0);continue}let P;if(Ne.key!=null)P=pe.get(Ne.key);else for(O=ne;O<=H;O++)if(Ee[O-ne]===0&&Pn(Ne,L[O])){P=O;break}P===void 0?ce(Ne,Q,ie,!0):(Ee[P-ne]=M+1,P>=ve?ve=P:ye=!0,d(Ne,L[P],G,null,Q,ie,se,oe,ae),fe++)}const Oe=ye?Ed(Ee):Di;for(O=Oe.length-1,M=de-1;M>=0;M--){const Ne=ne+M,P=L[Ne],me=Ne+1<v?L[Ne+1].el:Z;Ee[M]===0?d(null,P,G,me,Q,ie,se,oe,ae):ye&&(O<0||M!==Oe[O]?re(P,G,me,2):O--)}}},re=(w,L,G,Z,Q=null)=>{const{el:ie,type:se,transition:oe,children:ae,shapeFlag:M}=w;if(M&6){re(w.component.subTree,L,G,Z);return}if(M&128){w.suspense.move(L,G,Z);return}if(M&64){se.move(w,L,G,_e);return}if(se===Vt){i(ie,L,G);for(let D=0;D<ae.length;D++)re(ae[D],L,G,Z);i(w.anchor,L,G);return}if(se===os){b(w,L,G);return}if(Z!==2&&M&1&&oe)if(Z===0)oe.beforeEnter(ie),i(ie,L,G),xt(()=>oe.enter(ie),Q);else{const{leave:D,delayLeave:H,afterLeave:q}=oe,ne=()=>i(ie,L,G),pe=()=>{D(ie,()=>{ne(),q&&q()})};H?H(ie,ne,pe):pe()}else i(ie,L,G)},ce=(w,L,G,Z=!1,Q=!1)=>{const{type:ie,props:se,ref:oe,children:ae,dynamicChildren:M,shapeFlag:v,patchFlag:D,dirs:H}=w;if(oe!=null&&_s(oe,null,G,w,!0),v&256){L.ctx.deactivate(w);return}const q=v&1&&H,ne=!hr(w);let pe;if(ne&&(pe=se&&se.onVnodeBeforeUnmount)&&Pt(pe,L,w),v&6)ee(w.component,G,Z);else{if(v&128){w.suspense.unmount(G,Z);return}q&&Jt(w,null,L,"beforeUnmount"),v&64?w.type.remove(w,L,G,Q,_e,Z):M&&(ie!==Vt||D>0&&D&64)?De(M,L,G,!1,!0):(ie===Vt&&D&384||!Q&&v&16)&&De(ae,L,G),Z&&Me(w)}(ne&&(pe=se&&se.onVnodeUnmounted)||q)&&xt(()=>{pe&&Pt(pe,L,w),q&&Jt(w,null,L,"unmounted")},G)},Me=w=>{const{type:L,el:G,anchor:Z,transition:Q}=w;if(L===Vt){Te(G,Z);return}if(L===os){T(w);return}const ie=()=>{r(G),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(w.shapeFlag&1&&Q&&!Q.persisted){const{leave:se,delayLeave:oe}=Q,ae=()=>se(G,ie);oe?oe(w.el,ie,ae):ae()}else ie()},Te=(w,L)=>{let G;for(;w!==L;)G=h(w),r(w),w=G;r(L)},ee=(w,L,G)=>{const{bum:Z,scope:Q,update:ie,subTree:se,um:oe}=w;Z&&Xs(Z),Q.stop(),ie&&(ie.active=!1,ce(se,w,L,G)),oe&&xt(oe,L),xt(()=>{w.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},De=(w,L,G,Z=!1,Q=!1,ie=0)=>{for(let se=ie;se<w.length;se++)ce(w[se],L,G,Z,Q)},Se=w=>w.shapeFlag&6?Se(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),we=(w,L,G)=>{w==null?L._vnode&&ce(L._vnode,null,null,!0):d(L._vnode||null,w,L,null,null,null,G),Ya(),ds(),L._vnode=w},_e={p:d,um:ce,m:re,r:Me,mt:Y,mc:A,pc:N,pbc:j,n:Se,o:n};let He,Pe;return e&&([He,Pe]=e(_e)),{render:we,hydrate:He,createApp:yd(we,He)}}function Hn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Hu(n,e,t=!1){const i=n.children,r=e.children;if(Re(i)&&Re(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Rn(r[s]),o.el=a.el),t||Hu(a,o))}}function Ed(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Td=n=>n.__isTeleport,Vt=Symbol(void 0),yr=Symbol(void 0),On=Symbol(void 0),os=Symbol(void 0),dr=[];let Nt=null;function pr(n=!1){dr.push(Nt=n?null:[])}function Gu(){dr.pop(),Nt=dr[dr.length-1]||null}let ki=1;function al(n){ki+=n}function Vu(n){return n.dynamicChildren=ki>0?Nt||Di:null,Gu(),ki>0&&Nt&&Nt.push(n),n}function Ad(n,e,t,i,r,s){return Vu(qu(n,e,t,i,r,s,!0))}function Ks(n,e,t,i,r){return Vu(it(n,e,t,i,r,!0))}function xs(n){return n?n.__v_isVNode===!0:!1}function Pn(n,e){return n.type===e.type&&n.key===e.key}const Is="__vInternal",Wu=({key:n})=>n!=null?n:null,as=({ref:n,ref_key:e,ref_for:t})=>n!=null?at(n)||ot(n)||Ae(n)?{i:Xt,r:n,k:e,f:!!t}:n:null;function qu(n,e=null,t=null,i=0,r=null,s=n===Vt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wu(e),ref:e&&as(e),scopeId:Ps,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(La(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=at(t)?8:16),ki>0&&!a&&Nt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Nt.push(l),l}const it=Cd;function Cd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ad)&&(n=On),xs(n)){const o=Hi(n,e,!0);return t&&La(o,t),ki>0&&!s&&Nt&&(o.shapeFlag&6?Nt[Nt.indexOf(n)]=o:Nt.push(o)),o.patchFlag|=-2,o}if(Bd(n)&&(n=n.__vccOpts),e){e=Ld(e);let{class:o,style:l}=e;o&&!at(o)&&(e.class=ws(o)),$e(l)&&(lu(l)&&!Re(l)&&(l=mt({},l)),e.style=Ss(l))}const a=at(n)?1:Vh(n)?128:Td(n)?64:$e(n)?4:Ae(n)?2:0;return qu(n,e,t,i,r,a,s,!0)}function Ld(n){return n?lu(n)||Is in n?mt({},n):n:null}function Hi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Rd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Wu(o),ref:e&&e.ref?t&&r?Re(r)?r.concat(as(e)):[r,as(e)]:as(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hi(n.ssContent),ssFallback:n.ssFallback&&Hi(n.ssFallback),el:n.el,anchor:n.anchor}}function Xu(n=" ",e=0){return it(yr,null,n,e)}function Dt(n){return n==null||typeof n=="boolean"?it(On):Re(n)?it(Vt,null,n.slice()):typeof n=="object"?Rn(n):it(yr,null,String(n))}function Rn(n){return n.el===null||n.memo?n:Hi(n)}function La(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Re(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),La(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Is in e)?e._ctx=Xt:r===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ae(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),i&64?(t=16,e=[Xu(e)]):t=8);n.children=e,n.shapeFlag|=t}function Rd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ws([e.class,i.class]));else if(r==="style")e.style=Ss([e.style,i.style]);else if(Sr(r)){const s=e[r],a=i[r];a&&s!==a&&!(Re(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Pt(n,e,t,i=null){$t(n,e,7,[t,i])}const Pd=Bu();let Dd=0;function Id(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Pd,s={uid:Dd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nu(i,r),emitsOptions:Mu(i,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:i.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zh.bind(null,s),n.ce&&n.ce(s),s}let nt=null;const Fs=()=>nt||Xt,Gi=n=>{nt=n,n.scope.on()},ni=()=>{nt&&nt.scope.off(),nt=null};function ju(n){return n.vnode.shapeFlag&4}let Vi=!1;function Fd(n,e=!1){Vi=e;const{props:t,children:i}=n.vnode,r=ju(n);md(n,t,r,e),xd(n,i);const s=r?Nd(n,e):void 0;return Vi=!1,s}function Nd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ya(new Proxy(n.ctx,cd));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Od(n):null;Gi(n),Zi();const s=Fn(i,n,0,[n.props,r]);if(Ji(),ni(),jc(s)){if(s.then(ni,ni),e)return s.then(a=>{Xo(n,a,e)}).catch(a=>{Qi(a,n,0)});n.asyncDep=s}else Xo(n,s,e)}else $u(n,e)}function Xo(n,e,t){Ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:$e(e)&&(n.setupState=hu(e)),$u(n,t)}let ll;function $u(n,e,t){const i=n.type;if(!n.render){if(!e&&ll&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=mt(mt({isCustomElement:s,delimiters:o},a),l);i.render=ll(r,c)}}n.render=i.render||jt}Gi(n),Zi(),ud(n),Ji(),ni()}function Ud(n){return new Proxy(n.attrs,{get(e,t){return Tt(n,"get","$attrs"),e[t]}})}function Od(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Ud(n))},slots:n.slots,emit:n.emit,expose:e}}function Ra(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(hu(ya(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ms)return ms[t](n)}}))}function zd(n,e=!0){return Ae(n)?n.displayName||n.name:n.name||e&&n.__name}function Bd(n){return Ae(n)&&"__vccOpts"in n}const Wi=(n,e)=>Ih(n,e,Vi);function jo(n,e,t){const i=arguments.length;return i===2?$e(e)&&!Re(e)?xs(e)?it(n,null,[e]):it(n,e):it(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&xs(t)&&(t=[t]),it(n,e,t))}const kd="3.2.38",Hd="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,cl=Yn&&Yn.createElement("template"),Gd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Yn.createElementNS(Hd,n):Yn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{cl.innerHTML=i?`<svg>${n}</svg>`:n;const o=cl.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Vd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Wd(n,e,t){const i=n.style,r=at(t);if(t&&!r){for(const s in t)$o(i,s,t[s]);if(e&&!at(e))for(const s in e)t[s]==null&&$o(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const ul=/\s*!important$/;function $o(n,e,t){if(Re(t))t.forEach(i=>$o(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=qd(n,e);ul.test(t)?n.setProperty(Ki(i),t.replace(ul,""),"important"):n[i]=t}}const fl=["Webkit","Moz","ms"],Zs={};function qd(n,e){const t=Zs[e];if(t)return t;let i=rn(e);if(i!=="filter"&&i in n)return Zs[e]=i;i=As(i);for(let r=0;r<fl.length;r++){const s=fl[r]+i;if(s in n)return Zs[e]=s}return e}const hl="http://www.w3.org/1999/xlink";function Xd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(hl,e.slice(6,e.length)):n.setAttributeNS(hl,e,t);else{const s=Vf(e);t==null||s&&!Wc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function jd(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Wc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[Yu,$d]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Yo=0;const Yd=Promise.resolve(),Kd=()=>{Yo=0},Zd=()=>Yo||(Yd.then(Kd),Yo=Yu());function Jd(n,e,t,i){n.addEventListener(e,t,i)}function Qd(n,e,t,i){n.removeEventListener(e,t,i)}function ep(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=tp(e);if(i){const c=s[e]=np(i,r);Jd(n,o,c,l)}else a&&(Qd(n,o,a,l),s[e]=void 0)}}const dl=/(?:Once|Passive|Capture)$/;function tp(n){let e;if(dl.test(n)){e={};let i;for(;i=n.match(dl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ki(n.slice(2)),e]}function np(n,e){const t=i=>{const r=i.timeStamp||Yu();($d||r>=t.attached-1)&&$t(ip(i,t.value),e,5,[i])};return t.value=n,t.attached=Zd(),t}function ip(n,e){if(Re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const pl=/^on[a-z]/,rp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Vd(n,i,r):e==="style"?Wd(n,t,i):Sr(e)?fa(e)||ep(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sp(n,e,i,r))?jd(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xd(n,e,i,r))};function sp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&pl.test(e)&&Ae(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||pl.test(e)&&at(t)?!1:e in n}const Ku=mt({patchProp:rp},Gd);let mr,ml=!1;function op(){return mr||(mr=Sd(Ku))}function ap(){return mr=ml?mr:wd(Ku),ml=!0,mr}const lp=(...n)=>{const e=op().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Zu(i);if(!r)return;const s=e._component;!Ae(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e},cp=(...n)=>{const e=ap().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Zu(i);if(r)return t(r,!0,r instanceof SVGElement)},e};function Zu(n){return at(n)?document.querySelector(n):n}const up=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,fp=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,hp=/^["{[]|^-?[0-9][0-9.]{0,14}$/;function dp(n,e){if(!(n==="__proto__"||n==="constructor"))return e}function pp(n){if(typeof n!="string")return n;const e=n.toLowerCase();if(e==="true")return!0;if(e==="false")return!1;if(e==="null")return null;if(e==="nan")return NaN;if(e==="infinity")return 1/0;if(e!=="undefined"){if(!hp.test(n))return n;try{return up.test(n)||fp.test(n)?JSON.parse(n,dp):JSON.parse(n)}catch{return n}}}const mp=/#/g,gp=/&/g,_p=/=/g,Ju=/\+/g,xp=/%5B/gi,vp=/%5D/gi,Mp=/%5E/gi,yp=/%60/gi,bp=/%7B/gi,Sp=/%7C/gi,wp=/%7D/gi,Ep=/%20/gi;function Tp(n){return encodeURI(""+n).replace(Sp,"|").replace(xp,"[").replace(vp,"]")}function Ko(n){return Tp(n).replace(Ju,"%2B").replace(Ep,"+").replace(mp,"%23").replace(gp,"%26").replace(yp,"`").replace(bp,"{").replace(wp,"}").replace(Mp,"^")}function Js(n){return Ko(n).replace(_p,"%3D")}function vs(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function Ap(n){return vs(n.replace(Ju," "))}function Qu(n=""){const e={};n[0]==="?"&&(n=n.substr(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=vs(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=Ap(i[2]||"");e[r]?Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]:e[r]=s}return e}function Cp(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${Js(n)}=${Ko(t)}`).join("&"):`${Js(n)}=${Ko(e)}`:Js(n)}function ef(n){return Object.keys(n).map(e=>Cp(e,n[e])).join("&")}const Lp=/^\w+:(\/\/)?/,Rp=/^\/\/[^/]+/;function Pa(n,e=!1){return Lp.test(n)||e&&Rp.test(n)}const Pp=/\/$|\/\?/;function Zo(n="",e=!1){return e?Pp.test(n):n.endsWith("/")}function tf(n="",e=!1){if(!e)return(Zo(n)?n.slice(0,-1):n)||"/";if(!Zo(n,!0))return n||"/";const[t,...i]=n.split("?");return(t.slice(0,-1)||"/")+(i.length?`?${i.join("?")}`:"")}function Jo(n="",e=!1){if(!e)return n.endsWith("/")?n:n+"/";if(Zo(n,!0))return n||"/";const[t,...i]=n.split("?");return t+"/"+(i.length?`?${i.join("?")}`:"")}function nf(n=""){return n.startsWith("/")}function Dp(n=""){return(nf(n)?n.substr(1):n)||"/"}function gl(n=""){return nf(n)?n:"/"+n}function Ip(n,e){if(rf(e))return n;const t=tf(e);return n.startsWith(t)?n:Ns(t,n)}function Fp(n,e){if(rf(e))return n;const t=tf(e);if(!n.startsWith(t))return n;const i=n.substring(t.length);return i[0]==="/"?i:"/"+i}function Np(n,e){const t=Us(n),i={...Qu(t.search),...e};return t.search=ef(i),sf(t)}function rf(n){return!n||n==="/"}function Up(n){return n&&n!=="/"}function Ns(n,...e){let t=n||"";for(const i of e.filter(Up))t=t?Jo(t)+Dp(i):i;return t}function Op(n,e,t={}){return t.trailingSlash||(n=Jo(n),e=Jo(e)),t.leadingSlash||(n=gl(n),e=gl(e)),t.encoding||(n=vs(n),e=vs(e)),n===e}function Us(n="",e){if(!Pa(n,!0))return e?Us(e+n):_l(n);const[t="",i,r=""]=(n.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",a=""]=(r.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:o,search:l,hash:c}=_l(a);return{protocol:t,auth:i?i.substr(0,i.length-1):"",host:s,pathname:o,search:l,hash:c}}function _l(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function sf(n){const e=n.pathname+(n.search?(n.search.startsWith("?")?"":"?")+n.search:"")+n.hash;return n.protocol?n.protocol+"//"+(n.auth?n.auth+"@":"")+n.host+e:e}class zp extends Error{constructor(){super(...arguments),this.name="FetchError"}}function Bp(n,e,t){let i="";n&&t&&(i=`${t.status} ${t.statusText} (${n.toString()})`),e&&(i=`${e.message} (${i})`);const r=new zp(i);return Object.defineProperty(r,"request",{get(){return n}}),Object.defineProperty(r,"response",{get(){return t}}),Object.defineProperty(r,"data",{get(){return t&&t._data}}),r}const kp=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function xl(n="GET"){return kp.has(n.toUpperCase())}function Hp(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const Gp=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Vp=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function Wp(n=""){if(!n)return"json";const e=n.split(";").shift();return Vp.test(e)?"json":Gp.has(e)||e.startsWith("text/")?"text":"blob"}const qp=new Set([408,409,425,429,500,502,503,504]);function of(n){const{fetch:e,Headers:t}=n;function i(a){if(a.options.retry!==!1){const l=typeof a.options.retry=="number"?a.options.retry:xl(a.options.method)?0:1,c=a.response&&a.response.status||500;if(l>0&&qp.has(c))return r(a.request,{...a.options,retry:l-1})}const o=Bp(a.request,a.error,a.response);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}const r=async function(o,l={}){const c={request:o,options:{...n.defaults,...l},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=Ip(c.request,c.options.baseURL)),c.options.params&&(c.request=Np(c.request,c.options.params)),c.options.body&&xl(c.options.method)&&Hp(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new t(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await e(c.request,c.options).catch(async f=>(c.error=f,c.options.onRequestError&&await c.options.onRequestError(c),i(c)));const u=(c.options.parseResponse?"json":c.options.responseType)||Wp(c.response.headers.get("content-type")||"");if(u==="json"){const f=await c.response.text(),h=c.options.parseResponse||pp;c.response._data=h(f)}else c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),c.response.ok||c.options.onResponseError&&await c.options.onResponseError(c),c.response.ok?c.response:i(c)},s=function(o,l){return r(o,l).then(c=>c._data)};return s.raw=r,s.create=(a={})=>of({...n,defaults:{...n.defaults,...a}}),s}const af=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Xp=af.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),jp=af.Headers,$p=of({fetch:Xp,Headers:jp}),Yp=()=>{var n;return((n=window==null?void 0:window.__NUXT__)==null?void 0:n.config)||{}},Ms=Yp().app,Kp=()=>Ms.baseURL,Zp=()=>Ms.buildAssetsDir,Jp=(...n)=>Ns(lf(),Zp(),...n),lf=(...n)=>{const e=Ms.cdnURL||Ms.baseURL;return n.length?Ns(e,...n):e};globalThis.__buildAssetsURL=Jp;globalThis.__publicAssetsURL=lf;function Qo(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?Qo(r,e,s):typeof r=="function"&&(e[s]=r)}return e}function Qp(n,e){return n.reduce((t,i)=>t.then(()=>i.apply(void 0,e)),Promise.resolve(null))}function em(n,e){return Promise.all(n.map(t=>t.apply(void 0,e)))}function Qs(n,e){for(const t of n)t(e)}class tm{constructor(){this._hooks={},this._before=null,this._after=null,this._deprecatedMessages=null,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,i={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let a=s.message;a||(a=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=null)}}hookOnce(e,t){let i,r=(...s)=>(i(),i=null,r=null,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const i=this._hooks[e]||[];this._hooks[e]=void 0;for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=Qo(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{i.splice(0,i.length).forEach(r=>r())}}removeHooks(e){const t=Qo(e);for(const i in t)this.removeHook(i,t[i])}callHook(e,...t){return this.callHookWith(Qp,e,...t)}callHookParallel(e,...t){return this.callHookWith(em,e,...t)}callHookWith(e,t,...i){const r=this._before||this._after?{name:t,args:i,context:{}}:void 0;this._before&&Qs(this._before,r);const s=e(this._hooks[t]||[],i);return s instanceof Promise?s.finally(()=>{this._after&&Qs(this._after,r)}):(this._after&&Qs(this._after,r),s)}beforeEach(e){this._before=this._before||[],this._before.push(e)}afterEach(e){this._after=this._after||[],this._after.push(e)}}function nm(){return new tm}function im(){let n=null,e=!1;const t=i=>{if(n&&n!==i)throw new Error("Context conflict")};return{use:()=>{if(n==null)throw new Error("Context is not available");return n},tryUse:()=>n,set:(i,r)=>{r||t(i),n=i,e=!0},unset:()=>{n=null,e=!1},call:(i,r)=>{t(i),n=i;try{return r()}finally{e||(n=null)}},async callAsync(i,r){n=i;const s=()=>{n=i},a=()=>n===i?s:void 0;yl.add(a);try{const o=r();return e||(n=null),await o}finally{yl.delete(a)}}}}function rm(){const n={};return{get(e){return n[e]||(n[e]=im()),n[e],n[e]}}}const ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},vl="__unctx__",sm=ys[vl]||(ys[vl]=rm()),om=n=>sm.get(n),Ml="__unctx_async_handlers__",yl=ys[Ml]||(ys[Ml]=new Set),cf=om("nuxt-app"),am="__nuxt_plugin";function lm(n){const e={provide:void 0,globalName:"nuxt",payload:oi({data:{},state:{},_errors:{},...window.__NUXT__}),isHydrating:!0,_asyncDataPromises:{},_asyncData:{},...n};e.hooks=nm(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(r,s)=>{const a="$"+r;Ur(e,a,s),Ur(e.vueApp.config.globalProperties,a,s)},Ur(e.vueApp,"$nuxt",e),Ur(e.vueApp.config.globalProperties,"$nuxt",e);const t=oi(e.payload.config),i=new Proxy(t,{get(r,s){var a;return s==="public"?r.public:(a=r[s])!=null?a:r.public[s]},set(r,s,a){return s==="public"||s==="app"?!1:(r[s]=a,r.public[s]=a,!0)}});return e.provide("config",i),e}async function cm(n,e){if(typeof e!="function")return;const{provide:t}=await gr(n,e,[n])||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}async function um(n,e){for(const t of e)await cm(n,t)}function fm(n){return n.map(t=>typeof t!="function"?null:t.length>1?i=>t(i,i.provide):t).filter(Boolean)}function Os(n){return n[am]=!0,n}function gr(n,e,t){const i=()=>t?e(...t):e();return cf.set(n),i()}function zt(){const n=cf.tryUse();if(!n){const e=Fs();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return n}function bl(){return zt().$config}function Ur(n,e,t){Object.defineProperty(n,e,{get:()=>t})}function hm(...n){const e=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(e);const[t,i]=n;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+t);if(i!==void 0&&typeof i!="function")throw new Error("[nuxt] [useState] init must be a function: "+i);const r="$s"+t,s=zt(),a=du(s.payload.state,r);if(a.value===void 0&&i){const o=i();if(ot(o))return s.payload.state[r]=o,o;a.value=o}return a}class ea extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage="Internal Server Error"}}ea.__h3_error__=!0;function dm(n){var t;if(typeof n=="string")return new ea(n);if(pm(n))return n;const e=new ea((t=n.message)!=null?t:n.statusMessage,n.cause?{cause:n.cause}:void 0);if("stack"in n)try{Object.defineProperty(e,"stack",{get(){return n.stack}})}catch{try{e.stack=n.stack}catch{}}return n.statusCode&&(e.statusCode=n.statusCode),n.statusMessage&&(e.statusMessage=n.statusMessage),n.data&&(e.data=n.data),n.fatal!==void 0&&(e.fatal=n.fatal),n.unhandled!==void 0&&(e.unhandled=n.unhandled),e}function pm(n){var e;return((e=n==null?void 0:n.constructor)==null?void 0:e.__h3_error__)===!0}const Da=()=>du(zt().payload,"error"),mm=n=>{const e=xm(n);try{zt().callHook("app:error",e);const i=Da();i.value=i.value||e}catch{throw e}return e},gm=async(n={})=>{const e=zt(),t=Da();e.callHook("app:error:cleared",n),n.redirect&&await e.$router.replace(n.redirect),t.value=null},_m=n=>!!(n&&typeof n=="object"&&"__nuxt_error"in n),xm=n=>{const e=dm(n);return e.__nuxt_error=!0,e},uf=()=>{var n;return(n=zt())==null?void 0:n.$router},vm=()=>Fs()?ss("_route",zt()._route):zt()._route,Mm=()=>{try{if(zt()._processingMiddleware)return!0}catch{return!0}return!1},ff=(n,e={})=>{n||(n="/");const t=typeof n=="string"?n:n.path||"/",i=Pa(t,!0);if(i&&!e.external)throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(i&&Us(t).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!i&&Mm())return n;const r=uf();return i?(e.replace?location.replace(t):location.href=t,Promise.resolve()):e.replace?r.replace(n):r.push(n)},ym=(...n)=>n.find(e=>e!==void 0),bm="noopener noreferrer";function Sm(n){const e=n.componentName||"NuxtLink";return At({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:i}){const r=uf(),s=Wi(()=>t.to||t.href||""),a=Wi(()=>t.external||t.target&&t.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||Pa(s.value,!0));return()=>{var f,h,m;if(!a.value)return jo(Pu("RouterLink"),{to:s.value,activeClass:t.activeClass||n.activeClass,exactActiveClass:t.exactActiveClass||n.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom},i.default);const o=typeof s.value=="object"?(h=(f=r.resolve(s.value))==null?void 0:f.href)!=null?h:null:s.value||null,l=t.target||null,c=t.noRel?null:ym(t.rel,n.externalRelAttribute,o?bm:"")||null,u=()=>ff(o,{replace:t.replace});return t.custom?i.default?i.default({href:o,navigate:u,route:r.resolve(o),rel:c,target:l,isActive:!1,isExactActive:!1}):null:jo("a",{href:o,rel:c,target:l},(m=i.default)==null?void 0:m.call(i))}}})}const fy=Sm({componentName:"NuxtLink"});function eo(n){return n!==null&&typeof n=="object"}function ta(n,e,t=".",i){if(!eo(e))return ta(n,{},t,i);const r=Object.assign({},e);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const a=n[s];a!=null&&(i&&i(r,s,a,t)||(Array.isArray(a)&&Array.isArray(r[s])?r[s]=a.concat(r[s]):eo(a)&&eo(r[s])?r[s]=ta(a,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=a))}return r}function hf(n){return(...e)=>e.reduce((t,i)=>ta(t,i,"",n),{})}const wm=hf(),Em=hf((n,e,t,i)=>{if(typeof n[e]<"u"&&typeof t=="function")return n[e]=t(n[e]),!0}),Tm={};Em(Tm);function Ia(n){const e=Ae(n)?Wi(n):n;zt()._useHead(e)}const to={},Am=Os(n=>{for(const e in to)n.vueApp.component(e,to[e]),n.vueApp.component("Lazy"+e,to[e])});var Cm=Object.defineProperty,Sl=Object.getOwnPropertySymbols,Lm=Object.prototype.hasOwnProperty,Rm=Object.prototype.propertyIsEnumerable,wl=(n,e,t)=>e in n?Cm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pm=(n,e)=>{for(var t in e||(e={}))Lm.call(e,t)&&wl(n,t,e[t]);if(Sl)for(var t of Sl(e))Rm.call(e,t)&&wl(n,t,e[t]);return n},Dm="usehead",El="head:count",no="data-head-attrs",df="data-meta-body",Im=(n,e,t)=>{const i=t.createElement(n);for(const r of Object.keys(e))if(r==="body"&&e.body===!0)i.setAttribute(df,"true");else{let s=e[r];if(r==="key"||s===!1)continue;r==="children"?i.textContent=s:i.setAttribute(r,s)}return i};function Tl(n,e){if(n instanceof HTMLElement&&e instanceof HTMLElement){const t=e.getAttribute("nonce");if(t&&!n.getAttribute("nonce")){const i=e.cloneNode(!0);return i.setAttribute("nonce",""),i.nonce=t,t===n.nonce&&n.isEqualNode(i)}}return n.isEqualNode(e)}var Fm=n=>{const e=["key","id","name","property"];for(const t of e){const i=typeof n.getAttribute=="function"?n.hasAttribute(t)?n.getAttribute(t):void 0:n[t];if(i!==void 0)return{name:t,value:i}}},Nm=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Um=(n,e)=>n==null?"":typeof n=="string"?n.replace("%s",e!=null?e:""):n(ti(e)),Om=n=>{const e=[],t=Object.keys(n);for(const i of t)if(n[i]!=null)switch(i){case"title":e.push({tag:i,props:{children:n[i]}});break;case"titleTemplate":break;case"base":e.push({tag:i,props:Pm({key:"default"},n[i])});break;default:if(Nm.includes(i)){const r=n[i];Array.isArray(r)?r.forEach(s=>{e.push({tag:i,props:s})}):r&&e.push({tag:i,props:r})}break}return e},Al=(n,e)=>{const t=n.getAttribute(no);if(t)for(const r of t.split(","))r in e||n.removeAttribute(r);const i=[];for(const r in e){const s=e[r];s!=null&&(s===!1?n.removeAttribute(r):n.setAttribute(r,s),i.push(r))}i.length?n.setAttribute(no,i.join(",")):n.removeAttribute(no)},zm=(n=window.document,e,t)=>{var i,r;const s=n.head,a=n.body;let o=s.querySelector(`meta[name="${El}"]`),l=a.querySelectorAll(`[${df}]`);const c=o?Number(o.getAttribute("content")):0,u=[],f=[];if(l)for(let m=0;m<l.length;m++)l[m]&&((i=l[m].tagName)==null?void 0:i.toLowerCase())===e&&f.push(l[m]);if(o)for(let m=0,g=o.previousElementSibling;m<c;m++,g=(g==null?void 0:g.previousElementSibling)||null)((r=g==null?void 0:g.tagName)==null?void 0:r.toLowerCase())===e&&u.push(g);else o=n.createElement("meta"),o.setAttribute("name",El),o.setAttribute("content","0"),s.append(o);let h=t.map(m=>{var g;return{element:Im(m.tag,m.props,n),body:(g=m.props.body)!=null?g:!1}});h=h.filter(m=>{for(let g=0;g<u.length;g++){const p=u[g];if(Tl(p,m.element))return u.splice(g,1),!1}for(let g=0;g<f.length;g++){const p=f[g];if(Tl(p,m.element))return f.splice(g,1),!1}return!0}),f.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),u.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),h.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):s.insertBefore(m.element,o)}),o.setAttribute("content",""+(c-u.length+h.filter(m=>!m.body).length))},Bm=n=>{let e=[],t=new Set;n&&e.push(Ch(n));const i={install(r){r.config.globalProperties.$head=i,r.provide(Dm,i)},get headTags(){const r=[],s=e.map(a=>ti(a).titleTemplate).reverse().find(a=>a!=null);return e.forEach(a=>{Om(ti(a)).forEach(l=>{if(l.tag==="meta"||l.tag==="base"||l.tag==="script"){const c=Fm(l.props);if(c){let u=-1;for(let f=0;f<r.length;f++){const h=r[f],m=h.props[c.name],g=l.props[c.name];if(h.tag===l.tag&&m===g){u=f;break}}u!==-1&&r.splice(u,1)}}s&&l.tag==="title"&&(l.props.children=Um(s,l.props.children)),r.push(l)})}),r},addHeadObjs(r){e.push(r)},removeHeadObjs(r){e=e.filter(s=>s!==r)},updateDOM(r=window.document){let s,a={},o={};const l={};for(const u of i.headTags){if(u.tag==="title"){s=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(a,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(o,u.props);continue}l[u.tag]=l[u.tag]||[],l[u.tag].push(u)}s!==void 0&&(r.title=s),Al(r.documentElement,a),Al(r.body,o);const c=new Set([...Object.keys(l),...t]);for(const u of c)zm(r,u,l[u]||[]);t.clear(),Object.keys(l).forEach(u=>t.add(u))}};return i};const km=Os(n=>{const e=Bm();n.vueApp.use(e);let t=!1;n.hooks.hookOnce("app:mounted",()=>{Ja(()=>{e.updateDOM()}),t=!0}),n._useHead=i=>{const r=fr(i),s=Wi(()=>{const o={meta:[]};return r.value.charset&&o.meta.push({key:"charset",charset:r.value.charset}),r.value.viewport&&o.meta.push({name:"viewport",content:r.value.viewport}),wm(o,r.value)});e.addHeadObjs(s),t&&Ja(()=>{e.updateDOM()}),Fs()&&Au(()=>{e.removeHeadObjs(s),e.updateDOM()})}}),Hm=n=>Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0)),xn=(n,e)=>(t,i)=>(Ia(()=>n({...Hm(t),...i.attrs},i)),()=>{var r,s;return e?(s=(r=i.slots).default)==null?void 0:s.call(r):null}),zn={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},Gm=At({name:"Script",inheritAttrs:!1,props:{...zn,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String},setup:xn(n=>({script:[n]}))}),Vm=At({name:"NoScript",inheritAttrs:!1,props:{...zn,title:String},setup:xn((n,{slots:e})=>{var r;const t={...n},i=(((r=e.default)==null?void 0:r.call(e))||[]).filter(({children:s})=>s).map(({children:s})=>s).join("");return i&&(t.children=i),{noscript:[t]}})}),Wm=At({name:"Link",inheritAttrs:!1,props:{...zn,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String},setup:xn(n=>({link:[n]}))}),qm=At({name:"Base",inheritAttrs:!1,props:{...zn,href:String,target:String},setup:xn(n=>({base:n}))}),Xm=At({name:"Title",inheritAttrs:!1,setup:xn((n,{slots:e})=>{var i,r,s;return{title:((s=(r=(i=e.default)==null?void 0:i.call(e))==null?void 0:r[0])==null?void 0:s.children)||null}})}),jm=At({name:"Meta",inheritAttrs:!1,props:{...zn,charset:String,content:String,httpEquiv:String,name:String},setup:xn(n=>({meta:[n]}))}),$m=At({name:"Style",inheritAttrs:!1,props:{...zn,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0}},setup:xn((n,{slots:e})=>{var r,s,a;const t={...n},i=(a=(s=(r=e.default)==null?void 0:r.call(e))==null?void 0:s[0])==null?void 0:a.children;return i&&(t.children=i),{style:[t]}})}),Ym=At({name:"Head",inheritAttrs:!1,setup:(n,e)=>()=>{var t,i;return(i=(t=e.slots).default)==null?void 0:i.call(t)}}),Km=At({name:"Html",inheritAttrs:!1,props:{...zn,manifest:String,version:String,xmlns:String},setup:xn(n=>({htmlAttrs:n}),!0)}),Zm=At({name:"Body",inheritAttrs:!1,props:zn,setup:xn(n=>({bodyAttrs:n}),!0)}),Cl=Object.freeze(Object.defineProperty({__proto__:null,Script:Gm,NoScript:Vm,Link:Wm,Base:qm,Title:Xm,Meta:jm,Style:$m,Head:Ym,Html:Km,Body:Zm},Symbol.toStringTag,{value:"Module"})),Jm={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},Qm={created(){const n=Fs();if(!n)return;const e=n.type;if(!e||!("head"in e))return;const t=zt(),i=typeof e.head=="function"?Wi(()=>e.head(t)):e.head;Ia(i)}},eg=Os(n=>{Ia(ya({title:"",...Jm})),n.vueApp.mixin(Qm);for(const e in Cl)n.vueApp.component(e,Cl[e])}),tg=[];function io(n){typeof n=="object"&&(n=sf({pathname:n.path||"",search:ef(n.query||{}),hash:n.hash||""}));const e=Us(n.toString());return{path:e.pathname,fullPath:n,query:Qu(e.search),hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}}const ng=Os(n=>{const e=Fp(window.location.pathname,bl().app.baseURL)+window.location.search+window.location.hash,t=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(u,f)=>(i[u].push(f),()=>i[u].splice(i[u].indexOf(f),1)),s=bl().app.baseURL,a=oi(io(e));async function o(u,f){try{const h=io(u);for(const m of i["navigate:before"]){const g=await m(h,a);if(g===!1||g instanceof Error)return;if(g)return o(g,!0)}for(const m of i["resolve:before"])await m(h,a);Object.assign(a,h),window.history[f?"replaceState":"pushState"]({},"",Ns(s,h.fullPath)),n.isHydrating||await gr(n,gm);for(const m of i["navigate:after"])await m(h,a)}catch(h){for(const m of i.error)await m(h)}}const l={currentRoute:a,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:u=>o(u,!1),replace:u=>o(u,!0),back:()=>window.history.go(-1),go:u=>window.history.go(u),forward:()=>window.history.go(1),beforeResolve:u=>r("resolve:before",u),beforeEach:u=>r("navigate:before",u),afterEach:u=>r("navigate:after",u),onError:u=>r("error",u),resolve:io,addRoute:(u,f)=>{t.push(f)},getRoutes:()=>t,hasRoute:u=>t.some(f=>f.name===u),removeRoute:u=>{const f=t.findIndex(h=>h.name===u);f!==-1&&t.splice(f,1)}};n.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(u,{slots:f})=>{const h=()=>o(u.to,u.replace);return()=>{var g;const m=l.resolve(u.to);return u.custom?(g=f.default)==null?void 0:g.call(f,{href:u.to,navigate:h,route:m}):jo("a",{href:u.to,onClick:p=>(p.preventDefault(),h())},f)}}}),window.addEventListener("popstate",u=>{const f=u.target.location;l.replace(f.href.replace(f.origin,""))}),n._route=a,n._middleware=n._middleware||{global:[],named:{}};const c=hm("_layout","$C8Q9L4P7Yk");return n.hooks.hookOnce("app:created",async()=>{l.beforeEach(async(u,f)=>{var m;u.meta=oi(u.meta||{}),n.isHydrating&&(u.meta.layout=(m=c.value)!=null?m:u.meta.layout),n._processingMiddleware=!0;const h=new Set([...tg,...n._middleware.global]);for(const g of h){const p=await gr(n,g,[u,f]);if(p||p===!1)return p}}),l.afterEach(()=>{delete n._processingMiddleware}),await l.replace(e),Op(a.fullPath,e)||await gr(n,ff,[a.fullPath])}),{provide:{route:a,router:l}}}),ig=[Am,km,eg,ng],rg="modulepreload",sg=function(n,e){return new URL(n,e).href},Ll={},og=function(e,t,i){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=sg(r,i),r in Ll)return;Ll[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":rg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Rl={__name:"nuxt-root",setup(n){const e=Zh(()=>og(()=>import("./error-component.40d081d4.js"),[],import.meta.url)),t=zt(),i=()=>t.callHook("app:suspense:resolve");Su("_route",vm()),t.hooks.callHookWith(s=>s.map(a=>a()),"vue:setup");const r=Da();return Lu((s,a,o)=>{t.hooks.callHook("vue:error",s,a,o).catch(l=>console.error("[nuxt] Error in `vue:error` hook",l)),_m(s)&&(s.fatal||s.unhandled)&&gr(t,mm,[s])}),(s,a)=>{const o=Pu("App");return pr(),Ks(qh,{onResolve:i},{default:yu(()=>[ti(r)?(pr(),Ks(ti(e),{key:0,error:ti(r)},null,8,["error"])):(pr(),Ks(o,{key:1}))]),_:1})}}};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="144",ag=0,Pl=1,lg=2,pf=1,cg=2,lr=3,qi=0,Ot=1,Dn=2,Nn=0,Oi=1,Dl=2,Il=3,Fl=4,ug=5,Li=100,fg=101,hg=102,Nl=103,Ul=104,dg=200,pg=201,mg=202,gg=203,mf=204,gf=205,_g=206,xg=207,vg=208,Mg=209,yg=210,bg=0,Sg=1,wg=2,na=3,Eg=4,Tg=5,Ag=6,Cg=7,_f=0,Lg=1,Rg=2,mn=0,Pg=1,Dg=2,Ig=3,Fg=4,Ng=5,xf=300,Xi=301,ji=302,ia=303,ra=304,zs=306,sa=1e3,qt=1001,oa=1002,vt=1003,Ol=1004,zl=1005,It=1006,Ug=1007,Bs=1008,ai=1009,Og=1010,zg=1011,vf=1012,Bg=1013,Zn=1014,Jn=1015,br=1016,kg=1017,Hg=1018,zi=1020,Gg=1021,Vg=1022,tn=1023,Wg=1024,qg=1025,ii=1026,$i=1027,Xg=1028,jg=1029,$g=1030,Yg=1031,Kg=1033,ro=33776,so=33777,oo=33778,ao=33779,Bl=35840,kl=35841,Hl=35842,Gl=35843,Zg=36196,Vl=37492,Wl=37496,ql=37808,Xl=37809,jl=37810,$l=37811,Yl=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,sc=36492,li=3e3,Ze=3001,Jg=3200,Qg=3201,e_=0,t_=1,hn="srgb",Qn="srgb-linear",lo=7680,n_=519,oc=35044,ac="300 es",aa=1035;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,lc=180/Math.PI;function wr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function i_(n,e){return(n%e+e)%e}function uo(n,e,t){return(1-t)*n+t*e}function cc(n){return(n&n-1)===0&&n!==0}function la(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Or(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],x=r[1],E=r[4],b=r[7],T=r[2],C=r[5],F=r[8];return s[0]=a*p+o*x+l*T,s[3]=a*d+o*E+l*C,s[6]=a*_+o*b+l*F,s[1]=c*p+u*x+f*T,s[4]=c*d+u*E+f*C,s[7]=c*_+u*b+f*F,s[2]=h*p+m*x+g*T,s[5]=h*d+m*E+g*C,s[8]=h*_+m*b+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Mf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const fo={[hn]:{[Qn]:ri},[Qn]:{[hn]:ls}},Bt={legacyMode:!0,get workingColorSpace(){return Qn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(fo[e]&&fo[e][t]!==void 0){const i=fo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},kt={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Br(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qn){return this.r=e,this.g=t,this.b=i,Bt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qn){if(e=i_(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ho(a,s,e+1/3),this.g=ho(a,s,e),this.b=ho(a,s,e-1/3)}return Bt.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=hn){const i=yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Bt.fromWorkingColorSpace(Br(this,tt),e),wt(tt.r*255,0,255)<<16^wt(tt.g*255,0,255)<<8^wt(tt.b*255,0,255)<<0}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn){Bt.fromWorkingColorSpace(Br(this,tt),t);const i=tt.r,r=tt.g,s=tt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qn){return Bt.fromWorkingColorSpace(Br(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=hn){return Bt.fromWorkingColorSpace(Br(this,tt),e),e!==hn?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=i,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(zr);const i=uo(kt.h,zr.h,t),r=uo(kt.s,zr.s,t),s=uo(kt.l,zr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=yf;let mi;class bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=bs("canvas")),mi.width=e.width,mi.height=e.height;const i=mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ri(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ri(t[i]/255)*255):t[i]=ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Sf{constructor(e=null){this.isSource=!0,this.uuid=wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(po(r[a].image)):s.push(po(r[a]))}else s=po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r_=0;class Yt extends er{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=qt,r=qt,s=It,a=Bs,o=tn,l=ai,c=1,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=wr(),this.name="",this.source=new Sf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=xf;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(m+1)/2,T=(_+1)/2,C=(u+h)/4,F=(f+p)/4,y=(g+d)/4;return E>b&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=F/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=C/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=F/s,r=y/s),this.set(i,r,s,t),this}let x=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(f-p)/x,this.z=(h-u)/x,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends er{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:It,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wf extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class s_ extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const _=l*h+c*m+u*g+f*p,x=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const T=Math.sqrt(E),C=Math.atan2(T,_*x);d=Math.sin(d*C)/T,o=Math.sin(o*C)/T}const b=o*x;if(l=l*d+h*b,c=c*d+m*b,u=u*d+g*b,f=f*d+p*b,d===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new k,uc=new Er;class Tr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox),go.applyMatrix4(e.matrixWorld),this.union(go);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),kr.subVectors(this.max,rr),gi.subVectors(e.a,rr),_i.subVectors(e.b,rr),xi.subVectors(e.c,rr),Sn.subVectors(_i,gi),wn.subVectors(xi,_i),Vn.subVectors(gi,xi);let t=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-Vn.z,Vn.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,Vn.z,0,-Vn.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-Vn.y,Vn.x,0];return!_o(t,gi,_i,xi,kr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,gi,_i,xi,kr))?!1:(Hr.crossVectors(Sn,wn),t=[Hr.x,Hr.y,Hr.z],_o(t,gi,_i,xi,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new k,new k,new k,new k,new k,new k,new k,new k],Gn=new k,go=new Tr,gi=new k,_i=new k,xi=new k,Sn=new k,wn=new k,Vn=new k,rr=new k,kr=new k,Hr=new k,Wn=new k;function _o(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wn.fromArray(n,s);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=i.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const o_=new Tr,fc=new k,Gr=new k,xo=new k;class Na{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):o_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){xo.subVectors(e,this.center);const t=xo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(xo.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Gr.set(0,0,1).multiplyScalar(e.radius):Gr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(fc.copy(e.center).add(Gr)),this.expandByPoint(fc.copy(e.center).sub(Gr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new k,vo=new k,Vr=new k,En=new k,Mo=new k,Wr=new k,yo=new k;class a_{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.direction).multiplyScalar(t).add(this.origin),an.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vo.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=En.dot(this.direction),l=-En.dot(Vr),c=En.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Vr).multiplyScalar(h).add(vo),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const i=an.dot(this.direction),r=an.dot(an)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,i,r,s){Mo.subVectors(t,e),Wr.subVectors(i,e),yo.crossVectors(Mo,Wr);let a=this.direction.dot(yo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(Wr.crossVectors(En,Wr));if(l<0)return null;const c=o*this.direction.dot(Mo.cross(En));if(c<0||l+c>a)return null;const u=-o*En.dot(yo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l_,e,c_)}lookAt(e,t,i){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),Tn.crossVectors(i,bt),Tn.lengthSq()===0&&(Math.abs(i.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),Tn.crossVectors(i,bt)),Tn.normalize(),qr.crossVectors(bt,Tn),r[0]=Tn.x,r[4]=qr.x,r[8]=bt.x,r[1]=Tn.y,r[5]=qr.y,r[9]=bt.y,r[2]=Tn.z,r[6]=qr.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],x=i[3],E=i[7],b=i[11],T=i[15],C=r[0],F=r[4],y=r[8],A=r[12],I=r[1],j=r[5],le=r[9],W=r[13],R=r[2],Y=r[6],K=r[10],te=r[14],V=r[3],N=r[7],B=r[11],ue=r[15];return s[0]=a*C+o*I+l*R+c*V,s[4]=a*F+o*j+l*Y+c*N,s[8]=a*y+o*le+l*K+c*B,s[12]=a*A+o*W+l*te+c*ue,s[1]=u*C+f*I+h*R+m*V,s[5]=u*F+f*j+h*Y+m*N,s[9]=u*y+f*le+h*K+m*B,s[13]=u*A+f*W+h*te+m*ue,s[2]=g*C+p*I+d*R+_*V,s[6]=g*F+p*j+d*Y+_*N,s[10]=g*y+p*le+d*K+_*B,s[14]=g*A+p*W+d*te+_*ue,s[3]=x*C+E*I+b*R+T*V,s[7]=x*F+E*j+b*Y+T*N,s[11]=x*y+E*le+b*K+T*B,s[15]=x*A+E*W+b*te+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],x=f*d*c-p*h*c+p*l*m-o*d*m-f*l*_+o*h*_,E=g*h*c-u*d*c-g*l*m+a*d*m+u*l*_-a*h*_,b=u*p*c-g*f*c+g*o*m-a*p*m-u*o*_+a*f*_,T=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,C=t*x+i*E+r*b+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=x*F,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*F,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*_+i*l*_)*F,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*F,e[4]=E*F,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*F,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*_-t*l*_)*F,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*F,e[8]=b*F,e[9]=(g*f*s-u*p*s-g*i*m+t*p*m+u*i*_-t*f*_)*F,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*_+t*o*_)*F,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*F,e[12]=T*F,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*d+t*f*d)*F,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*d-t*o*d)*F,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,p=a*u,d=a*f,_=o*f,x=l*c,E=l*u,b=l*f,T=i.x,C=i.y,F=i.z;return r[0]=(1-(p+_))*T,r[1]=(m+b)*T,r[2]=(g-E)*T,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(h+_))*C,r[6]=(d+x)*C,r[7]=0,r[8]=(g+E)*F,r[9]=(d-x)*F,r[10]=(1-(h+p))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=vi.set(r[0],r[1],r[2]).length();const a=vi.set(r[4],r[5],r[6]).length(),o=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const c=1/s,u=1/a,f=1/o;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vi=new k,Ht=new ct,l_=new k(0,0,0),c_=new k(1,1,1),Tn=new k,qr=new k,bt=new k,hc=new ct,dc=new Er;class Ar{constructor(e=0,t=0,i=0,r=Ar.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ar.DefaultOrder="XYZ";Ar.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ef{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u_=0;const pc=new k,Mi=new Er,ln=new ct,Xr=new k,sr=new k,f_=new k,h_=new Er,mc=new k(1,0,0),gc=new k(0,1,0),_c=new k(0,0,1),d_={type:"added"},xc={type:"removed"};class Et extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DefaultUp.clone();const e=new k,t=new Ar,i=new Er,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ut}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DefaultMatrixWorldAutoUpdate,this.layers=new Ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(sr,Xr,this.up):ln.lookAt(Xr,sr,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(ln),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(d_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,h_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DefaultUp=new k(0,1,0);Et.DefaultMatrixAutoUpdate=!0;Et.DefaultMatrixWorldAutoUpdate=!0;const Gt=new k,cn=new k,bo=new k,un=new k,yi=new k,bi=new k,vc=new k,So=new k,wo=new k,Eo=new k;class dn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gt.subVectors(r,t),cn.subVectors(i,t),bo.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(cn),l=Gt.dot(bo),c=cn.dot(cn),u=cn.dot(bo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,un),l.set(0,0),l.addScaledVector(s,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),cn.subVectors(e,t),Gt.cross(cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Gt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return dn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;yi.subVectors(r,i),bi.subVectors(s,i),So.subVectors(e,i);const l=yi.dot(So),c=bi.dot(So);if(l<=0&&c<=0)return t.copy(i);wo.subVectors(e,r);const u=yi.dot(wo),f=bi.dot(wo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(yi,a);Eo.subVectors(e,s);const m=yi.dot(Eo),g=bi.dot(Eo);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(bi,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return vc.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(vc,o);const _=1/(d+p+h);return a=p*_,o=h*_,t.copy(i).addScaledVector(yi,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let p_=0;class ks extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=Oi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ua extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new k,jr=new Xe;class nn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=oc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Tf extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Af extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class si extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let m_=0;const Rt=new ct,To=new Et,Si=new k,St=new Tr,or=new Tr,st=new k;class fi extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?Af:Tf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,i){return Rt.makeTranslation(e,t,i),this.applyMatrix4(Rt),this}scale(e,t,i){return Rt.makeScale(e,t,i),this.applyMatrix4(Rt),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];St.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(st.addVectors(St.min,or.min),St.expandByPoint(st),st.addVectors(St.max,or.max),St.expandByPoint(st)):(St.expandByPoint(or.min),St.expandByPoint(or.max))}St.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)st.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(st));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)st.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),st.add(Si)),r=Math.max(r,i.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new k,u[I]=new k;const f=new k,h=new k,m=new k,g=new Xe,p=new Xe,d=new Xe,_=new k,x=new k;function E(I,j,le){f.fromArray(r,I*3),h.fromArray(r,j*3),m.fromArray(r,le*3),g.fromArray(a,I*2),p.fromArray(a,j*2),d.fromArray(a,le*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const W=1/(p.x*d.y-d.x*p.y);!isFinite(W)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(W),x.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(W),c[I].add(_),c[j].add(_),c[le].add(_),u[I].add(x),u[j].add(x),u[le].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let I=0,j=b.length;I<j;++I){const le=b[I],W=le.start,R=le.count;for(let Y=W,K=W+R;Y<K;Y+=3)E(i[Y+0],i[Y+1],i[Y+2])}const T=new k,C=new k,F=new k,y=new k;function A(I){F.fromArray(s,I*3),y.copy(F);const j=c[I];T.copy(j),T.sub(F.multiplyScalar(F.dot(j))).normalize(),C.crossVectors(y,j);const W=C.dot(u[I])<0?-1:1;l[I*4]=T.x,l[I*4+1]=T.y,l[I*4+2]=T.z,l[I*4+3]=W}for(let I=0,j=b.length;I<j;++I){const le=b[I],W=le.start,R=le.count;for(let Y=W,K=W+R;Y<K;Y+=3)A(i[Y+0]),A(i[Y+1]),A(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new ct,wi=new a_,Ao=new Na,An=new k,Cn=new k,Ln=new k,Co=new k,Lo=new k,Ro=new k,$r=new k,Yr=new k,Kr=new k,Zr=new Xe,Jr=new Xe,Qr=new Xe,Po=new k,es=new k;class pn extends Et{constructor(e=new fi,t=new Ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),e.ray.intersectsSphere(Ao)===!1)||(Mc.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Mc),i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],x=r[_.materialIndex],E=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let T=E,C=b;T<C;T+=3){const F=o.getX(T),y=o.getX(T+1),A=o.getX(T+2);a=ts(this,x,e,wi,l,c,u,f,h,F,y,A),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,x=d;_<x;_+=3){const E=o.getX(_),b=o.getX(_+1),T=o.getX(_+2);a=ts(this,r,e,wi,l,c,u,f,h,E,b,T),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],x=r[_.materialIndex],E=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let T=E,C=b;T<C;T+=3){const F=T,y=T+1,A=T+2;a=ts(this,x,e,wi,l,c,u,f,h,F,y,A),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,x=d;_<x;_+=3){const E=_,b=_+1,T=_+2;a=ts(this,r,e,wi,l,c,u,f,h,E,b,T),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function g_(n,e,t,i,r,s,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==Dn,o),l===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,a,o,l,c,u,f){An.fromBufferAttribute(r,c),Cn.fromBufferAttribute(r,u),Ln.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){$r.set(0,0,0),Yr.set(0,0,0),Kr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(Co.fromBufferAttribute(_,c),Lo.fromBufferAttribute(_,u),Ro.fromBufferAttribute(_,f),a?($r.addScaledVector(Co,d),Yr.addScaledVector(Lo,d),Kr.addScaledVector(Ro,d)):($r.addScaledVector(Co.sub(An),d),Yr.addScaledVector(Lo.sub(Cn),d),Kr.addScaledVector(Ro.sub(Ln),d)))}An.add($r),Cn.add(Yr),Ln.add(Kr)}n.isSkinnedMesh&&(n.boneTransform(c,An),n.boneTransform(u,Cn),n.boneTransform(f,Ln));const m=g_(n,e,t,i,An,Cn,Ln,Po);if(m){o&&(Zr.fromBufferAttribute(o,c),Jr.fromBufferAttribute(o,u),Qr.fromBufferAttribute(o,f),m.uv=dn.getUV(Po,An,Cn,Ln,Zr,Jr,Qr,new Xe)),l&&(Zr.fromBufferAttribute(l,c),Jr.fromBufferAttribute(l,u),Qr.fromBufferAttribute(l,f),m.uv2=dn.getUV(Po,An,Cn,Ln,Zr,Jr,Qr,new Xe));const g={a:c,b:u,c:f,normal:new k,materialIndex:0};dn.getNormal(An,Cn,Ln,g.normal),m.face=g}return m}class tr extends fi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(f,2));function g(p,d,_,x,E,b,T,C,F,y,A){const I=b/F,j=T/y,le=b/2,W=T/2,R=C/2,Y=F+1,K=y+1;let te=0,V=0;const N=new k;for(let B=0;B<K;B++){const ue=B*j-W;for(let re=0;re<Y;re++){const ce=re*I-le;N[p]=ce*x,N[d]=ue*E,N[_]=R,c.push(N.x,N.y,N.z),N[p]=0,N[d]=0,N[_]=C>0?1:-1,u.push(N.x,N.y,N.z),f.push(re/F),f.push(1-B/y),te+=1}}for(let B=0;B<y;B++)for(let ue=0;ue<F;ue++){const re=h+ue+Y*B,ce=h+ue+Y*(B+1),Me=h+(ue+1)+Y*(B+1),Te=h+(ue+1)+Y*B;l.push(re,ce,Te),l.push(ce,Me,Te),V+=6}o.addGroup(m,V,A),m+=V,h+=te}}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ft(n){const e={};for(let t=0;t<n.length;t++){const i=Yi(n[t]);for(const r in i)e[r]=i[r]}return e}function __(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const x_={clone:Yi,merge:ft};var v_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cf extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends Cf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lc*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=90,Ti=1;class y_ extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ft(Ei,Ti,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new k(1,0,0)),this.add(r);const s=new Ft(Ei,Ti,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new k(-1,0,0)),this.add(s);const a=new Ft(Ei,Ti,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new k(0,1,0)),this.add(a);const o=new Ft(Ei,Ti,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new k(0,-1,0)),this.add(o);const l=new Ft(Ei,Ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const c=new Ft(Ei,Ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new k(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Lf extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends ci{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tr(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Nn});s.uniforms.tEquirect.value=t;const a=new pn(r,s),o=t.minFilter;return t.minFilter===Bs&&(t.minFilter=It),new y_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Do=new k,S_=new k,w_=new Ut;class Xn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Do.subVectors(i,t).cross(S_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Do),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||w_.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Na,ns=new k;class Rf{constructor(e=new Xn,t=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],x=i[14],E=i[15];return t[0].setComponents(o-r,f-l,p-h,E-d).normalize(),t[1].setComponents(o+r,f+l,p+h,E+d).normalize(),t[2].setComponents(o+s,f+c,p+m,E+_).normalize(),t[3].setComponents(o-s,f-c,p-m,E-_).normalize(),t[4].setComponents(o-a,f-u,p-g,E-x).normalize(),t[5].setComponents(o+a,f+u,p+g,E+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ns.x=r.normal.x>0?e.max.x:e.min.x,ns.y=r.normal.y>0?e.max.y:e.min.y,ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function E_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Oa extends fi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const x=_*h-a;for(let E=0;E<c;E++){const b=E*f-s;g.push(b,-x,0),p.push(0,0,1),d.push(E/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<o;x++){const E=x+c*_,b=x+c*(_+1),T=x+1+c*(_+1),C=x+1+c*_;m.push(E,b,C),m.push(b,T,C)}this.setIndex(m),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(p,3)),this.setAttribute("uv",new si(d,2))}static fromJSON(e){return new Oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_="vec3 transformed = vec3( position );",I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,N_=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,U_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,q_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ex=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,mx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,bx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,kx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,o0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,g0=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,x0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,v0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,M0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,y0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,b0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,R0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,P0=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,F0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,B0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,H0=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,q0=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:C_,alphatest_pars_fragment:L_,aomap_fragment:R_,aomap_pars_fragment:P_,begin_vertex:D_,beginnormal_vertex:I_,bsdfs:F_,iridescence_fragment:N_,bumpmap_pars_fragment:U_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:k_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:V_,color_vertex:W_,common:q_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:j_,displacementmap_pars_vertex:$_,displacementmap_vertex:Y_,emissivemap_fragment:K_,emissivemap_pars_fragment:Z_,encodings_fragment:J_,encodings_pars_fragment:Q_,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:xx,lights_phong_pars_fragment:vx,lights_physical_fragment:Mx,lights_physical_pars_fragment:yx,lights_fragment_begin:bx,lights_fragment_maps:Sx,lights_fragment_end:wx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Lx,map_pars_fragment:Rx,map_particle_fragment:Px,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Fx,morphcolor_vertex:Nx,morphnormal_vertex:Ux,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:kx,normal_pars_fragment:Hx,normal_pars_vertex:Gx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:$x,output_fragment:Yx,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Qx,dithering_pars_fragment:e0,roughnessmap_fragment:t0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:r0,shadowmap_vertex:s0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:u0,specularmap_fragment:f0,specularmap_pars_fragment:h0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:_0,uv_pars_vertex:x0,uv_vertex:v0,uv2_pars_fragment:M0,uv2_pars_vertex:y0,uv2_vertex:b0,worldpos_vertex:S0,background_vert:w0,background_frag:E0,cube_vert:T0,cube_frag:A0,depth_vert:C0,depth_frag:L0,distanceRGBA_vert:R0,distanceRGBA_frag:P0,equirect_vert:D0,equirect_frag:I0,linedashed_vert:F0,linedashed_frag:N0,meshbasic_vert:U0,meshbasic_frag:O0,meshlambert_vert:z0,meshlambert_frag:B0,meshmatcap_vert:k0,meshmatcap_frag:H0,meshnormal_vert:G0,meshnormal_frag:V0,meshphong_vert:W0,meshphong_frag:q0,meshphysical_vert:X0,meshphysical_frag:j0,meshtoon_vert:$0,meshtoon_frag:Y0,points_vert:K0,points_frag:Z0,shadow_vert:J0,shadow_frag:Q0,sprite_vert:ev,sprite_frag:tv},he={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},Qt={basic:{uniforms:ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:ft([he.points,he.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:ft([he.common,he.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:ft([he.sprite,he.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:ft([he.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:ft([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:ft([he.lights,he.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Qt.physical={uniforms:ft([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function nv(n,e,t,i,r,s){const a=new je(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const E=n.xr,b=E.getSession&&E.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?g(a,o):x&&x.isColor&&(g(x,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===zs)?(c===void 0&&(c=new pn(new tr(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Yi(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||f!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pn(new Oa(2,2),new ui({name:"BackgroundMaterial",uniforms:Yi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function iv(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(R,Y,K,te,V){let N=!1;if(a){const B=p(te,K,Y);c!==B&&(c=B,m(c.object)),N=_(R,te,K,V),N&&x(R,te,K,V)}else{const B=Y.wireframe===!0;(c.geometry!==te.id||c.program!==K.id||c.wireframe!==B)&&(c.geometry=te.id,c.program=K.id,c.wireframe=B,N=!0)}V!==null&&t.update(V,34963),(N||u)&&(u=!1,y(R,Y,K,te),V!==null&&n.bindBuffer(34963,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,Y,K){const te=K.wireframe===!0;let V=o[R.id];V===void 0&&(V={},o[R.id]=V);let N=V[Y.id];N===void 0&&(N={},V[Y.id]=N);let B=N[te];return B===void 0&&(B=d(h()),N[te]=B),B}function d(R){const Y=[],K=[],te=[];for(let V=0;V<r;V++)Y[V]=0,K[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:te,object:R,attributes:{},index:null}}function _(R,Y,K,te){const V=c.attributes,N=Y.attributes;let B=0;const ue=K.getAttributes();for(const re in ue)if(ue[re].location>=0){const Me=V[re];let Te=N[re];if(Te===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Te=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Te=R.instanceColor)),Me===void 0||Me.attribute!==Te||Te&&Me.data!==Te.data)return!0;B++}return c.attributesNum!==B||c.index!==te}function x(R,Y,K,te){const V={},N=Y.attributes;let B=0;const ue=K.getAttributes();for(const re in ue)if(ue[re].location>=0){let Me=N[re];Me===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor));const Te={};Te.attribute=Me,Me&&Me.data&&(Te.data=Me.data),V[re]=Te,B++}c.attributes=V,c.attributesNum=B,c.index=te}function E(){const R=c.newAttributes;for(let Y=0,K=R.length;Y<K;Y++)R[Y]=0}function b(R){T(R,0)}function T(R,Y){const K=c.newAttributes,te=c.enabledAttributes,V=c.attributeDivisors;K[R]=1,te[R]===0&&(n.enableVertexAttribArray(R),te[R]=1),V[R]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,Y),V[R]=Y)}function C(){const R=c.newAttributes,Y=c.enabledAttributes;for(let K=0,te=Y.length;K<te;K++)Y[K]!==R[K]&&(n.disableVertexAttribArray(K),Y[K]=0)}function F(R,Y,K,te,V,N){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(R,Y,K,V,N):n.vertexAttribPointer(R,Y,K,te,V,N)}function y(R,Y,K,te){if(i.isWebGL2===!1&&(R.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const V=te.attributes,N=K.getAttributes(),B=Y.defaultAttributeValues;for(const ue in N){const re=N[ue];if(re.location>=0){let ce=V[ue];if(ce===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const Me=ce.normalized,Te=ce.itemSize,ee=t.get(ce);if(ee===void 0)continue;const De=ee.buffer,Se=ee.type,we=ee.bytesPerElement;if(ce.isInterleavedBufferAttribute){const _e=ce.data,He=_e.stride,Pe=ce.offset;if(_e.isInstancedInterleavedBuffer){for(let w=0;w<re.locationSize;w++)T(re.location+w,_e.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let w=0;w<re.locationSize;w++)b(re.location+w);n.bindBuffer(34962,De);for(let w=0;w<re.locationSize;w++)F(re.location+w,Te/re.locationSize,Se,Me,He*we,(Pe+Te/re.locationSize*w)*we)}else{if(ce.isInstancedBufferAttribute){for(let _e=0;_e<re.locationSize;_e++)T(re.location+_e,ce.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<re.locationSize;_e++)b(re.location+_e);n.bindBuffer(34962,De);for(let _e=0;_e<re.locationSize;_e++)F(re.location+_e,Te/re.locationSize,Se,Me,Te*we,Te/re.locationSize*_e*we)}}else if(B!==void 0){const Me=B[ue];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(re.location,Me);break;case 3:n.vertexAttrib3fv(re.location,Me);break;case 4:n.vertexAttrib4fv(re.location,Me);break;default:n.vertexAttrib1fv(re.location,Me)}}}}C()}function A(){le();for(const R in o){const Y=o[R];for(const K in Y){const te=Y[K];for(const V in te)g(te[V].object),delete te[V];delete Y[K]}delete o[R]}}function I(R){if(o[R.id]===void 0)return;const Y=o[R.id];for(const K in Y){const te=Y[K];for(const V in te)g(te[V].object),delete te[V];delete Y[K]}delete o[R.id]}function j(R){for(const Y in o){const K=o[Y];if(K[R.id]===void 0)continue;const te=K[R.id];for(const V in te)g(te[V].object),delete te[V];delete K[R.id]}}function le(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:le,resetDefaultState:W,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:j,initAttributes:E,enableAttribute:b,disableUnusedAttributes:C}}function rv(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function sv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),x=n.getParameter(36349),E=h>0,b=a||e.has("OES_texture_float"),T=E&&b,C=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:C}}function ov(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const x=s?0:i,E=x*4;let b=_.clippingState||null;l.value=b,b=u(g,h,E,m);for(let T=0;T!==E;++T)b[T]=t[T];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<_)&&(d=new Float32Array(_));for(let E=0,b=m;E!==p;++E,b+=4)a.copy(f[E]).applyMatrix4(x,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function av(n){let e=new WeakMap;function t(a,o){return o===ia?a.mapping=Xi:o===ra&&(a.mapping=ji),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ia||o===ra)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new b_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lv extends Cf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pi=4,yc=[.125,.215,.35,.446,.526,.582],Kn=20,Io=new lv,bc=new je;let Fo=null;const jn=(1+Math.sqrt(5))/2,Ci=1/jn,Sc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,jn,Ci),new k(0,jn,-Ci),new k(Ci,0,jn),new k(-Ci,0,jn),new k(jn,Ci,0),new k(-jn,Ci,0)];class wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:br,format:tn,encoding:li,depthBuffer:!1},r=Ec(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cv(s)),this._blurMaterial=uv(s,e,t)}return r}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,i,r){const o=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(bc),u.toneMapping=mn,u.autoClear=!1;const m=new Ua({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new pn(new tr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(bc),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):x===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const E=this._cubeSize;is(r,x*E,_>2?E:0,E,E),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xi||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Io)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sc[(r-1)%Sc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Kn;d>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Kn}`);const _=[];let x=0;for(let F=0;F<Kn;++F){const y=F/p,A=Math.exp(-y*y/2);_.push(A),F===0?x+=A:F<d&&(x+=2*A)}for(let F=0;F<_.length;F++)_[F]=_[F]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const b=this._sizeLods[r],T=3*b*(r>E-Pi?r-E+Pi:0),C=4*(this._cubeSize-b);is(t,T,C,3*b,2*b),l.setRenderTarget(t),l.render(f,Io)}}function cv(n){const e=[],t=[],i=[];let r=n;const s=n-Pi+1+yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Pi?l=yc[a-n+Pi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,x=new Float32Array(p*g*m),E=new Float32Array(d*g*m),b=new Float32Array(_*g*m);for(let C=0;C<m;C++){const F=C%3*2/3-1,y=C>2?0:-1,A=[F,y,0,F+2/3,y,0,F+2/3,y+1,0,F,y,0,F+2/3,y+1,0,F,y+1,0];x.set(A,p*g*C),E.set(h,d*g*C);const I=[C,C,C,C,C,C];b.set(I,_*g*C)}const T=new fi;T.setAttribute("position",new nn(x,p)),T.setAttribute("uv",new nn(E,d)),T.setAttribute("faceIndex",new nn(b,_)),e.push(T),r>Pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ec(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uv(n,e,t){const i=new Float32Array(Kn),r=new k(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:za(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Tc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ac(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function za(){return`

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
	`}function fv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===ra,u=l===Xi||l===ji;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new wc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new wc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function hv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dv(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const x=m.array;p=m.version;for(let E=0,b=x.length;E<b;E+=3){const T=x[E+0],C=x[E+1],F=x[E+2];h.push(T,C,C,F,F,T)}}else{const x=g.array;p=g.version;for(let E=0,b=x.length/3-1;E<b;E+=3){const T=E+0,C=E+1,F=E+2;h.push(T,C,C,F,F,T)}}const d=new(Mf(h)?Af:Tf)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function pv(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function mv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gv(n,e){return n[0]-e[0]}function _v(n,e){return Math.abs(e[1])-Math.abs(n[1])}function xv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let Y=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let A=0;E===!0&&(A=1),b===!0&&(A=2),T===!0&&(A=3);let I=u.attributes.position.count*A,j=1;I>e.maxTextureSize&&(j=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const le=new Float32Array(I*j*4*p),W=new wf(le,I,j,p);W.type=Jn,W.needsUpdate=!0;const R=A*4;for(let K=0;K<p;K++){const te=C[K],V=F[K],N=y[K],B=I*j*4*K;for(let ue=0;ue<te.count;ue++){const re=ue*R;E===!0&&(a.fromBufferAttribute(te,ue),le[B+re+0]=a.x,le[B+re+1]=a.y,le[B+re+2]=a.z,le[B+re+3]=0),b===!0&&(a.fromBufferAttribute(V,ue),le[B+re+4]=a.x,le[B+re+5]=a.y,le[B+re+6]=a.z,le[B+re+7]=0),T===!0&&(a.fromBufferAttribute(N,ue),le[B+re+8]=a.x,le[B+re+9]=a.y,le[B+re+10]=a.z,le[B+re+11]=N.itemSize===4?a.w:1)}}d={count:p,texture:W,size:new Xe(I,j)},s.set(u,d),u.addEventListener("dispose",Y)}let _=0;for(let E=0;E<m.length;E++)_+=m[E];const x=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];i[u.id]=p}for(let b=0;b<g;b++){const T=p[b];T[0]=b,T[1]=m[b]}p.sort(_v);for(let b=0;b<8;b++)b<g&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(gv);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const T=o[b],C=T[0],F=T[1];C!==Number.MAX_SAFE_INTEGER&&F?(d&&u.getAttribute("morphTarget"+b)!==d[C]&&u.setAttribute("morphTarget"+b,d[C]),_&&u.getAttribute("morphNormal"+b)!==_[C]&&u.setAttribute("morphNormal"+b,_[C]),r[b]=F,x+=F):(d&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const E=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function vv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Df=new Yt,If=new wf,Ff=new s_,Nf=new Lf,Cc=[],Lc=[],Rc=new Float32Array(16),Pc=new Float32Array(9),Dc=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cc[r];if(s===void 0&&(s=new Float32Array(r),Cc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hs(n,e){let t=Lc[e];t===void 0&&(t=new Int32Array(e),Lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Dc.set(i),n.uniformMatrix2fv(this.addr,!1,Dc),_t(t,i)}}function Ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Pc.set(i),n.uniformMatrix3fv(this.addr,!1,Pc),_t(t,i)}}function Tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Rc.set(i),n.uniformMatrix4fv(this.addr,!1,Rc),_t(t,i)}}function Av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cv(n,e){const t=this.cache;gt(t,e)||(n.uniform2iv(this.addr,e),_t(t,e))}function Lv(n,e){const t=this.cache;gt(t,e)||(n.uniform3iv(this.addr,e),_t(t,e))}function Rv(n,e){const t=this.cache;gt(t,e)||(n.uniform4iv(this.addr,e),_t(t,e))}function Pv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dv(n,e){const t=this.cache;gt(t,e)||(n.uniform2uiv(this.addr,e),_t(t,e))}function Iv(n,e){const t=this.cache;gt(t,e)||(n.uniform3uiv(this.addr,e),_t(t,e))}function Fv(n,e){const t=this.cache;gt(t,e)||(n.uniform4uiv(this.addr,e),_t(t,e))}function Nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Df,r)}function Uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ff,r)}function Ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nf,r)}function zv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||If,r)}function Bv(n){switch(n){case 5126:return Mv;case 35664:return yv;case 35665:return bv;case 35666:return Sv;case 35674:return wv;case 35675:return Ev;case 35676:return Tv;case 5124:case 35670:return Av;case 35667:case 35671:return Cv;case 35668:case 35672:return Lv;case 35669:case 35673:return Rv;case 5125:return Pv;case 36294:return Dv;case 36295:return Iv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return zv}}function kv(n,e){n.uniform1fv(this.addr,e)}function Hv(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Gv(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function Vv(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Wv(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qv(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xv(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jv(n,e){n.uniform1iv(this.addr,e)}function $v(n,e){n.uniform2iv(this.addr,e)}function Yv(n,e){n.uniform3iv(this.addr,e)}function Kv(n,e){n.uniform4iv(this.addr,e)}function Zv(n,e){n.uniform1uiv(this.addr,e)}function Jv(n,e){n.uniform2uiv(this.addr,e)}function Qv(n,e){n.uniform3uiv(this.addr,e)}function eM(n,e){n.uniform4uiv(this.addr,e)}function tM(n,e,t){const i=e.length,r=Hs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Df,r[s])}function nM(n,e,t){const i=e.length,r=Hs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Ff,r[s])}function iM(n,e,t){const i=e.length,r=Hs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Nf,r[s])}function rM(n,e,t){const i=e.length,r=Hs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||If,r[s])}function sM(n){switch(n){case 5126:return kv;case 35664:return Hv;case 35665:return Gv;case 35666:return Vv;case 35674:return Wv;case 35675:return qv;case 35676:return Xv;case 5124:case 35670:return jv;case 35667:case 35671:return $v;case 35668:case 35672:return Yv;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}class oM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bv(t.type)}}class aM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=sM(t.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const No=/(\w+)(\])?(\[|\.)?/g;function Ic(n,e){n.seq.push(e),n.map[e.id]=e}function cM(n,e,t){const i=n.name,r=i.length;for(No.lastIndex=0;;){const s=No.exec(i),a=No.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ic(t,c===void 0?new oM(o,n,e):new aM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new lM(o),Ic(t,f)),t=f}}}class cs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);cM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let uM=0;function fM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function hM(n){switch(n){case li:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Nc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fM(n.getShaderSource(e),a)}else return r}function dM(n,e){const t=hM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function pM(n,e){let t;switch(e){case Pg:t="Linear";break;case Dg:t="Reinhard";break;case Ig:t="OptimizedCineon";break;case Fg:t="ACESFilmic";break;case Ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function gM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _M(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function cr(n){return n!==""}function Uc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(n){return n.replace(xM,vM)}function vM(n,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ca(t)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(n){return n.replace(MM,yM)}function yM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function SM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case ji:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _f:e="ENVMAP_BLENDING_MULTIPLY";break;case Lg:e="ENVMAP_BLENDING_MIX";break;case Rg:e="ENVMAP_BLENDING_ADD";break}return e}function TM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bM(t),c=SM(t),u=wM(t),f=EM(t),h=TM(t),m=t.isWebGL2?"":mM(t),g=gM(s),p=r.createProgram();let d,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(cr).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(cr).join(`
`),_.length>0&&(_+=`
`)):(d=[Bc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),_=[m,Bc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==mn?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,dM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=ca(a),a=Uc(a,t),a=Oc(a,t),o=ca(o),o=Uc(o,t),o=Oc(o,t),a=zc(a),o=zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=x+d+a,b=x+_+o,T=Fc(r,35633,E),C=Fc(r,35632,b);if(r.attachShader(p,T),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(T).trim(),j=r.getShaderInfoLog(C).trim();let le=!0,W=!0;if(r.getProgramParameter(p,35714)===!1){le=!1;const R=Nc(r,T,"vertex"),Y=Nc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+R+`
`+Y)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||j==="")&&(W=!1);W&&(this.diagnostics={runnable:le,programLog:A,vertexShader:{log:I,prefix:d},fragmentShader:{log:j,prefix:_}})}r.deleteShader(T),r.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new cs(r,p)),F};let y;return this.getAttributes=function(){return y===void 0&&(y=_M(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=C,this}let CM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RM(e),t.set(e,i)),i}}class RM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function PM(n,e,t,i,r,s,a){const o=new Ef,l=new LM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,A,I,j,le){const W=j.fog,R=le.geometry,Y=y.isMeshStandardMaterial?j.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),te=!!K&&K.mapping===zs?K.image.height:null,V=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const N=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,B=N!==void 0?N.length:0;let ue=0;R.morphAttributes.position!==void 0&&(ue=1),R.morphAttributes.normal!==void 0&&(ue=2),R.morphAttributes.color!==void 0&&(ue=3);let re,ce,Me,Te;if(V){const He=Qt[V];re=He.vertexShader,ce=He.fragmentShader}else re=y.vertexShader,ce=y.fragmentShader,l.update(y),Me=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const ee=n.getRenderTarget(),De=y.alphaTest>0,Se=y.clearcoat>0,we=y.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:y.type,vertexShader:re,fragmentShader:ce,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ee===null?n.outputEncoding:ee.isXRRenderTarget===!0?ee.texture.encoding:li,map:!!y.map,matcap:!!y.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:te,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===t_,tangentSpaceNormalMap:y.normalMapType===e_,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ze,clearcoat:Se,clearcoatMap:Se&&!!y.clearcoatMap,clearcoatRoughnessMap:Se&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!y.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!y.iridescenceMap,iridescenceThicknessMap:we&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Oi,alphaMap:!!y.alphaMap,alphaTest:De,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!W,useFog:y.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:le.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:mn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===Ot,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(_(A,y),x(A,y),A.push(n.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function _(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),y.push(o.mask)}function E(y){const A=g[y.type];let I;if(A){const j=Qt[A];I=x_.clone(j.uniforms)}else I=y.uniforms;return I}function b(y,A){let I;for(let j=0,le=c.length;j<le;j++){const W=c[j];if(W.cacheKey===A){I=W,++I.usedTimes;break}}return I===void 0&&(I=new AM(n,A,y,s),c.push(I)),I}function T(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:F}}function DM(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function IM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,g,p,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||IM),i.length>1&&i.sort(h||kc),r.length>1&&r.sort(h||kc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function FM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Hc,n.set(i,[a])):r>=s.length?(a=new Hc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function NM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function UM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OM=0;function zM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BM(n,e){const t=new NM,i=UM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,a=new ct,o=new ct;function l(u,f){let h=0,m=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let p=0,d=0,_=0,x=0,E=0,b=0,T=0,C=0,F=0,y=0;u.sort(zM);const A=f!==!0?Math.PI:1;for(let j=0,le=u.length;j<le;j++){const W=u[j],R=W.color,Y=W.intensity,K=W.distance,te=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)h+=R.r*Y*A,m+=R.g*Y*A,g+=R.b*Y*A;else if(W.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(W.sh.coefficients[V],Y);else if(W.isDirectionalLight){const V=t.get(W);if(V.color.copy(W.color).multiplyScalar(W.intensity*A),W.castShadow){const N=W.shadow,B=i.get(W);B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,r.directionalShadow[p]=B,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=W.shadow.matrix,b++}r.directional[p]=V,p++}else if(W.isSpotLight){const V=t.get(W);V.position.setFromMatrixPosition(W.matrixWorld),V.color.copy(R).multiplyScalar(Y*A),V.distance=K,V.coneCos=Math.cos(W.angle),V.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),V.decay=W.decay,r.spot[_]=V;const N=W.shadow;if(W.map&&(r.spotLightMap[F]=W.map,F++,N.updateMatrices(W),W.castShadow&&y++),r.spotLightMatrix[_]=N.matrix,W.castShadow){const B=i.get(W);B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,r.spotShadow[_]=B,r.spotShadowMap[_]=te,C++}_++}else if(W.isRectAreaLight){const V=t.get(W);V.color.copy(R).multiplyScalar(Y),V.halfWidth.set(W.width*.5,0,0),V.halfHeight.set(0,W.height*.5,0),r.rectArea[x]=V,x++}else if(W.isPointLight){const V=t.get(W);if(V.color.copy(W.color).multiplyScalar(W.intensity*A),V.distance=W.distance,V.decay=W.decay,W.castShadow){const N=W.shadow,B=i.get(W);B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,B.shadowCameraNear=N.camera.near,B.shadowCameraFar=N.camera.far,r.pointShadow[d]=B,r.pointShadowMap[d]=te,r.pointShadowMatrix[d]=W.shadow.matrix,T++}r.point[d]=V,d++}else if(W.isHemisphereLight){const V=t.get(W);V.skyColor.copy(W.color).multiplyScalar(Y*A),V.groundColor.copy(W.groundColor).multiplyScalar(Y*A),r.hemi[E]=V,E++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==E||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==C||I.numSpotMaps!==F)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=x,r.point.length=d,r.hemi.length=E,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+F-y,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=y,I.directionalLength=p,I.pointLength=d,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=E,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=C,I.numSpotMaps=F,r.version=OM++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let x=0,E=u.length;x<E;x++){const b=u[x];if(b.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),h++}else if(b.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const T=r.rectArea[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),o.identity(),a.copy(b.matrixWorld),a.premultiply(_),o.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const T=r.hemi[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Gc(n,e){const t=new BM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function kM(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Gc(n,e),t.set(s,[l])):a>=o.length?(l=new Gc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class HM extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
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
}`;function qM(n,e,t){let i=new Rf;const r=new Xe,s=new Xe,a=new lt,o=new HM({depthPacking:Qg}),l=new GM,c={},u=t.maxTextureSize,f={0:Ot,1:qi,2:Dn},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:VM,fragmentShader:WM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf,this.render=function(b,T,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const F=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Nn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let j=0,le=b.length;j<le;j++){const W=b[j],R=W.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const Y=R.getFrameExtents();if(r.multiply(Y),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,R.mapSize.y=s.y)),R.map===null){const te=this.type!==lr?{minFilter:vt,magFilter:vt}:{};R.map=new ci(r.x,r.y,te),R.map.texture.name=W.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const K=R.getViewportCount();for(let te=0;te<K;te++){const V=R.getViewport(te);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),I.viewport(a),R.updateMatrices(W,te),i=R.getFrustum(),E(T,C,R.camera,W,this.type)}R.isPointLightShadow!==!0&&this.type===lr&&_(R,C),R.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(F,y,A)};function _(b,T){const C=e.update(p);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ci(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,C,h,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,C,m,p,null)}function x(b,T,C,F,y,A){let I=null;const j=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(j!==void 0?I=j:I=C.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const le=I.uuid,W=T.uuid;let R=c[le];R===void 0&&(R={},c[le]=R);let Y=R[W];Y===void 0&&(Y=I.clone(),R[W]=Y),I=Y}return I.visible=T.visible,I.wireframe=T.wireframe,A===lr?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:f[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaTest,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=F,I.farDistance=y),I}function E(b,T,C,F,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===lr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const j=e.update(b),le=b.material;if(Array.isArray(le)){const W=j.groups;for(let R=0,Y=W.length;R<Y;R++){const K=W[R],te=le[K.materialIndex];if(te&&te.visible){const V=x(b,te,F,C.near,C.far,y);n.renderBufferDirect(C,null,j,V,b,K)}}}else if(le.visible){const W=x(b,le,F,C.near,C.far,y);n.renderBufferDirect(C,null,j,W,b,null)}}const I=b.children;for(let j=0,le=I.length;j<le;j++)E(I[j],T,C,F,y)}}function XM(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const me=new lt;let X=null;const xe=new lt(0,0,0,0);return{setMask:function(ge){X!==ge&&!P&&(n.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){P=ge},setClear:function(ge,ke,rt,Je,vn){vn===!0&&(ge*=Je,ke*=Je,rt*=Je),me.set(ge,ke,rt,Je),xe.equals(me)===!1&&(n.clearColor(ge,ke,rt,Je),xe.copy(me))},reset:function(){P=!1,X=null,xe.set(-1,0,0,0)}}}function s(){let P=!1,me=null,X=null,xe=null;return{setTest:function(ge){ge?De(2929):Se(2929)},setMask:function(ge){me!==ge&&!P&&(n.depthMask(ge),me=ge)},setFunc:function(ge){if(X!==ge){if(ge)switch(ge){case bg:n.depthFunc(512);break;case Sg:n.depthFunc(519);break;case wg:n.depthFunc(513);break;case na:n.depthFunc(515);break;case Eg:n.depthFunc(514);break;case Tg:n.depthFunc(518);break;case Ag:n.depthFunc(516);break;case Cg:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);X=ge}},setLocked:function(ge){P=ge},setClear:function(ge){xe!==ge&&(n.clearDepth(ge),xe=ge)},reset:function(){P=!1,me=null,X=null,xe=null}}}function a(){let P=!1,me=null,X=null,xe=null,ge=null,ke=null,rt=null,Je=null,vn=null;return{setTest:function(Ye){P||(Ye?De(2960):Se(2960))},setMask:function(Ye){me!==Ye&&!P&&(n.stencilMask(Ye),me=Ye)},setFunc:function(Ye,sn,Ct){(X!==Ye||xe!==sn||ge!==Ct)&&(n.stencilFunc(Ye,sn,Ct),X=Ye,xe=sn,ge=Ct)},setOp:function(Ye,sn,Ct){(ke!==Ye||rt!==sn||Je!==Ct)&&(n.stencilOp(Ye,sn,Ct),ke=Ye,rt=sn,Je=Ct)},setLocked:function(Ye){P=Ye},setClear:function(Ye){vn!==Ye&&(n.clearStencil(Ye),vn=Ye)},reset:function(){P=!1,me=null,X=null,xe=null,ge=null,ke=null,rt=null,Je=null,vn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,x=null,E=null,b=null,T=null,C=null,F=null,y=null,A=!1,I=null,j=null,le=null,W=null,R=null;const Y=n.getParameter(35661);let K=!1,te=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=te>=2);let N=null,B={};const ue=n.getParameter(3088),re=n.getParameter(2978),ce=new lt().fromArray(ue),Me=new lt().fromArray(re);function Te(P,me,X){const xe=new Uint8Array(4),ge=n.createTexture();n.bindTexture(P,ge),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let ke=0;ke<X;ke++)n.texImage2D(me+ke,0,6408,1,1,0,6408,5121,xe);return ge}const ee={};ee[3553]=Te(3553,3553,1),ee[34067]=Te(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(na),Z(!1),Q(Pl),De(2884),L(Nn);function De(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Se(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function we(P,me){return m[P]!==me?(n.bindFramebuffer(P,me),m[P]=me,i&&(P===36009&&(m[36160]=me),P===36160&&(m[36009]=me)),!0):!1}function _e(P,me){let X=p,xe=!1;if(P)if(X=g.get(me),X===void 0&&(X=[],g.set(me,X)),P.isWebGLMultipleRenderTargets){const ge=P.texture;if(X.length!==ge.length||X[0]!==36064){for(let ke=0,rt=ge.length;ke<rt;ke++)X[ke]=36064+ke;X.length=ge.length,xe=!0}}else X[0]!==36064&&(X[0]=36064,xe=!0);else X[0]!==1029&&(X[0]=1029,xe=!0);xe&&(t.isWebGL2?n.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function He(P){return d!==P?(n.useProgram(P),d=P,!0):!1}const Pe={[Li]:32774,[fg]:32778,[hg]:32779};if(i)Pe[Nl]=32775,Pe[Ul]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Pe[Nl]=P.MIN_EXT,Pe[Ul]=P.MAX_EXT)}const w={[dg]:0,[pg]:1,[mg]:768,[mf]:770,[yg]:776,[vg]:774,[_g]:772,[gg]:769,[gf]:771,[Mg]:775,[xg]:773};function L(P,me,X,xe,ge,ke,rt,Je){if(P===Nn){_===!0&&(Se(3042),_=!1);return}if(_===!1&&(De(3042),_=!0),P!==ug){if(P!==x||Je!==A){if((E!==Li||C!==Li)&&(n.blendEquation(32774),E=Li,C=Li),Je)switch(P){case Oi:n.blendFuncSeparate(1,771,1,771);break;case Dl:n.blendFunc(1,1);break;case Il:n.blendFuncSeparate(0,769,0,1);break;case Fl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Oi:n.blendFuncSeparate(770,771,1,771);break;case Dl:n.blendFunc(770,1);break;case Il:n.blendFuncSeparate(0,769,0,1);break;case Fl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,F=null,y=null,x=P,A=Je}return}ge=ge||me,ke=ke||X,rt=rt||xe,(me!==E||ge!==C)&&(n.blendEquationSeparate(Pe[me],Pe[ge]),E=me,C=ge),(X!==b||xe!==T||ke!==F||rt!==y)&&(n.blendFuncSeparate(w[X],w[xe],w[ke],w[rt]),b=X,T=xe,F=ke,y=rt),x=P,A=null}function G(P,me){P.side===Dn?Se(2884):De(2884);let X=P.side===Ot;me&&(X=!X),Z(X),P.blending===Oi&&P.transparent===!1?L(Nn):L(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const xe=P.stencilWrite;c.setTest(xe),xe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(32926):Se(32926)}function Z(P){I!==P&&(P?n.frontFace(2304):n.frontFace(2305),I=P)}function Q(P){P!==ag?(De(2884),P!==j&&(P===Pl?n.cullFace(1029):P===lg?n.cullFace(1028):n.cullFace(1032))):Se(2884),j=P}function ie(P){P!==le&&(K&&n.lineWidth(P),le=P)}function se(P,me,X){P?(De(32823),(W!==me||R!==X)&&(n.polygonOffset(me,X),W=me,R=X)):Se(32823)}function oe(P){P?De(3089):Se(3089)}function ae(P){P===void 0&&(P=33984+Y-1),N!==P&&(n.activeTexture(P),N=P)}function M(P,me){N===null&&ae();let X=B[N];X===void 0&&(X={type:void 0,texture:void 0},B[N]=X),(X.type!==P||X.texture!==me)&&(n.bindTexture(P,me||ee[P]),X.type=P,X.texture=me)}function v(){const P=B[N];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){ce.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function ve(P){Me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function Ee(P,me){let X=f.get(me);X===void 0&&(X=new WeakMap,f.set(me,X));let xe=X.get(P);xe===void 0&&(xe=n.getUniformBlockIndex(me,P.name),X.set(P,xe))}function Oe(P,me){const xe=f.get(me).get(P);u.get(P)!==xe&&(n.uniformBlockBinding(me,xe,P.__bindingPointIndex),u.set(P,xe))}function Ne(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},N=null,B={},m={},g=new WeakMap,p=[],d=null,_=!1,x=null,E=null,b=null,T=null,C=null,F=null,y=null,A=!1,I=null,j=null,le=null,W=null,R=null,ce.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:De,disable:Se,bindFramebuffer:we,drawBuffers:_e,useProgram:He,setBlending:L,setMaterial:G,setFlipSided:Z,setCullFace:Q,setLineWidth:ie,setPolygonOffset:se,setScissorTest:oe,activeTexture:ae,bindTexture:M,unbindTexture:v,compressedTexImage2D:D,texImage2D:fe,texImage3D:de,updateUBOMapping:Ee,uniformBlockBinding:Oe,texStorage2D:pe,texStorage3D:O,texSubImage2D:H,texSubImage3D:q,compressedTexSubImage2D:ne,scissor:ye,viewport:ve,reset:Ne}}function jM(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,v){return _?new OffscreenCanvas(M,v):bs("canvas")}function E(M,v,D,H){let q=1;if((M.width>H||M.height>H)&&(q=H/Math.max(M.width,M.height)),q<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ne=v?la:Math.floor,pe=ne(q*M.width),O=ne(q*M.height);p===void 0&&(p=x(pe,O));const fe=D?x(pe,O):p;return fe.width=pe,fe.height=O,fe.getContext("2d").drawImage(M,0,0,pe,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+pe+"x"+O+")."),fe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return cc(M.width)&&cc(M.height)}function T(M){return o?!1:M.wrapS!==qt||M.wrapT!==qt||M.minFilter!==vt&&M.minFilter!==It}function C(M,v){return M.generateMipmaps&&v&&M.minFilter!==vt&&M.minFilter!==It}function F(M){n.generateMipmap(M)}function y(M,v,D,H,q=!1){if(o===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ne=v;return v===6403&&(D===5126&&(ne=33326),D===5131&&(ne=33325),D===5121&&(ne=33321)),v===33319&&(D===5126&&(ne=33328),D===5131&&(ne=33327),D===5121&&(ne=33323)),v===6408&&(D===5126&&(ne=34836),D===5131&&(ne=34842),D===5121&&(ne=H===Ze&&q===!1?35907:32856),D===32819&&(ne=32854),D===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function A(M,v,D){return C(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==vt&&M.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function I(M){return M===vt||M===Ol||M===zl?9728:9729}function j(M){const v=M.target;v.removeEventListener("dispose",j),W(v),v.isVideoTexture&&g.delete(v)}function le(M){const v=M.target;v.removeEventListener("dispose",le),Y(v)}function W(M){const v=i.get(M);if(v.__webglInit===void 0)return;const D=M.source,H=d.get(D);if(H){const q=H[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(M),Object.keys(H).length===0&&d.delete(D)}i.remove(M)}function R(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const D=M.source,H=d.get(D);delete H[v.__cacheKey],a.memory.textures--}function Y(M){const v=M.texture,D=i.get(M),H=i.get(v);if(H.__webglTexture!==void 0&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++)n.deleteFramebuffer(D.__webglFramebuffer[q]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[q]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let q=0;q<D.__webglColorRenderbuffer.length;q++)D.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[q]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let q=0,ne=v.length;q<ne;q++){const pe=i.get(v[q]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(v[q])}i.remove(v),i.remove(M)}let K=0;function te(){K=0}function V(){const M=K;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),K+=1,M}function N(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.encoding),v.join()}function B(M,v){const D=i.get(M);if(M.isVideoTexture&&oe(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const H=M.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(D,M,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,D.__webglTexture)}function ue(M,v){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Se(D,M,v);return}t.activeTexture(33984+v),t.bindTexture(35866,D.__webglTexture)}function re(M,v){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Se(D,M,v);return}t.activeTexture(33984+v),t.bindTexture(32879,D.__webglTexture)}function ce(M,v){const D=i.get(M);if(M.version>0&&D.__version!==M.version){we(D,M,v);return}t.activeTexture(33984+v),t.bindTexture(34067,D.__webglTexture)}const Me={[sa]:10497,[qt]:33071,[oa]:33648},Te={[vt]:9728,[Ol]:9984,[zl]:9986,[It]:9729,[Ug]:9985,[Bs]:9987};function ee(M,v,D){if(D?(n.texParameteri(M,10242,Me[v.wrapS]),n.texParameteri(M,10243,Me[v.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,Me[v.wrapR]),n.texParameteri(M,10240,Te[v.magFilter]),n.texParameteri(M,10241,Te[v.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(v.wrapS!==qt||v.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,I(v.magFilter)),n.texParameteri(M,10241,I(v.minFilter)),v.minFilter!==vt&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(v.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function De(M,v){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",j));const H=v.source;let q=d.get(H);q===void 0&&(q={},d.set(H,q));const ne=N(v);if(ne!==M.__cacheKey){q[ne]===void 0&&(q[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),q[ne].usedTimes++;const pe=q[M.__cacheKey];pe!==void 0&&(q[M.__cacheKey].usedTimes--,pe.usedTimes===0&&R(v)),M.__cacheKey=ne,M.__webglTexture=q[ne].texture}return D}function Se(M,v,D){let H=3553;v.isDataArrayTexture&&(H=35866),v.isData3DTexture&&(H=32879);const q=De(M,v),ne=v.source;if(t.activeTexture(33984+D),t.bindTexture(H,M.__webglTexture),ne.version!==ne.__currentVersion||q===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const pe=T(v)&&b(v.image)===!1;let O=E(v.image,pe,!1,u);O=ae(v,O);const fe=b(O)||o,de=s.convert(v.format,v.encoding);let ye=s.convert(v.type),ve=y(v.internalFormat,de,ye,v.encoding,v.isVideoTexture);ee(H,v,fe);let Ee;const Oe=v.mipmaps,Ne=o&&v.isVideoTexture!==!0,P=ne.__currentVersion===void 0||q===!0,me=A(v,O,fe);if(v.isDepthTexture)ve=6402,o?v.type===Jn?ve=36012:v.type===Zn?ve=33190:v.type===zi?ve=35056:ve=33189:v.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ii&&ve===6402&&v.type!==vf&&v.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Zn,ye=s.convert(v.type)),v.format===$i&&ve===6402&&(ve=34041,v.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=zi,ye=s.convert(v.type))),P&&(Ne?t.texStorage2D(3553,1,ve,O.width,O.height):t.texImage2D(3553,0,ve,O.width,O.height,0,de,ye,null));else if(v.isDataTexture)if(Oe.length>0&&fe){Ne&&P&&t.texStorage2D(3553,me,ve,Oe[0].width,Oe[0].height);for(let X=0,xe=Oe.length;X<xe;X++)Ee=Oe[X],Ne?t.texSubImage2D(3553,X,0,0,Ee.width,Ee.height,de,ye,Ee.data):t.texImage2D(3553,X,ve,Ee.width,Ee.height,0,de,ye,Ee.data);v.generateMipmaps=!1}else Ne?(P&&t.texStorage2D(3553,me,ve,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,de,ye,O.data)):t.texImage2D(3553,0,ve,O.width,O.height,0,de,ye,O.data);else if(v.isCompressedTexture){Ne&&P&&t.texStorage2D(3553,me,ve,Oe[0].width,Oe[0].height);for(let X=0,xe=Oe.length;X<xe;X++)Ee=Oe[X],v.format!==tn?de!==null?Ne?t.compressedTexSubImage2D(3553,X,0,0,Ee.width,Ee.height,de,Ee.data):t.compressedTexImage2D(3553,X,ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,X,0,0,Ee.width,Ee.height,de,ye,Ee.data):t.texImage2D(3553,X,ve,Ee.width,Ee.height,0,de,ye,Ee.data)}else if(v.isDataArrayTexture)Ne?(P&&t.texStorage3D(35866,me,ve,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,de,ye,O.data)):t.texImage3D(35866,0,ve,O.width,O.height,O.depth,0,de,ye,O.data);else if(v.isData3DTexture)Ne?(P&&t.texStorage3D(32879,me,ve,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,de,ye,O.data)):t.texImage3D(32879,0,ve,O.width,O.height,O.depth,0,de,ye,O.data);else if(v.isFramebufferTexture){if(P)if(Ne)t.texStorage2D(3553,me,ve,O.width,O.height);else{let X=O.width,xe=O.height;for(let ge=0;ge<me;ge++)t.texImage2D(3553,ge,ve,X,xe,0,de,ye,null),X>>=1,xe>>=1}}else if(Oe.length>0&&fe){Ne&&P&&t.texStorage2D(3553,me,ve,Oe[0].width,Oe[0].height);for(let X=0,xe=Oe.length;X<xe;X++)Ee=Oe[X],Ne?t.texSubImage2D(3553,X,0,0,de,ye,Ee):t.texImage2D(3553,X,ve,de,ye,Ee);v.generateMipmaps=!1}else Ne?(P&&t.texStorage2D(3553,me,ve,O.width,O.height),t.texSubImage2D(3553,0,0,0,de,ye,O)):t.texImage2D(3553,0,ve,de,ye,O);C(v,fe)&&F(H),ne.__currentVersion=ne.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function we(M,v,D){if(v.image.length!==6)return;const H=De(M,v),q=v.source;if(t.activeTexture(33984+D),t.bindTexture(34067,M.__webglTexture),q.version!==q.__currentVersion||H===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const ne=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,O=[];for(let X=0;X<6;X++)!ne&&!pe?O[X]=E(v.image[X],!1,!0,c):O[X]=pe?v.image[X].image:v.image[X],O[X]=ae(v,O[X]);const fe=O[0],de=b(fe)||o,ye=s.convert(v.format,v.encoding),ve=s.convert(v.type),Ee=y(v.internalFormat,ye,ve,v.encoding),Oe=o&&v.isVideoTexture!==!0,Ne=q.__currentVersion===void 0||H===!0;let P=A(v,fe,de);ee(34067,v,de);let me;if(ne){Oe&&Ne&&t.texStorage2D(34067,P,Ee,fe.width,fe.height);for(let X=0;X<6;X++){me=O[X].mipmaps;for(let xe=0;xe<me.length;xe++){const ge=me[xe];v.format!==tn?ye!==null?Oe?t.compressedTexSubImage2D(34069+X,xe,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(34069+X,xe,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+X,xe,0,0,ge.width,ge.height,ye,ve,ge.data):t.texImage2D(34069+X,xe,Ee,ge.width,ge.height,0,ye,ve,ge.data)}}}else{me=v.mipmaps,Oe&&Ne&&(me.length>0&&P++,t.texStorage2D(34067,P,Ee,O[0].width,O[0].height));for(let X=0;X<6;X++)if(pe){Oe?t.texSubImage2D(34069+X,0,0,0,O[X].width,O[X].height,ye,ve,O[X].data):t.texImage2D(34069+X,0,Ee,O[X].width,O[X].height,0,ye,ve,O[X].data);for(let xe=0;xe<me.length;xe++){const ke=me[xe].image[X].image;Oe?t.texSubImage2D(34069+X,xe+1,0,0,ke.width,ke.height,ye,ve,ke.data):t.texImage2D(34069+X,xe+1,Ee,ke.width,ke.height,0,ye,ve,ke.data)}}else{Oe?t.texSubImage2D(34069+X,0,0,0,ye,ve,O[X]):t.texImage2D(34069+X,0,Ee,ye,ve,O[X]);for(let xe=0;xe<me.length;xe++){const ge=me[xe];Oe?t.texSubImage2D(34069+X,xe+1,0,0,ye,ve,ge.image[X]):t.texImage2D(34069+X,xe+1,Ee,ye,ve,ge.image[X])}}}C(v,de)&&F(34067),q.__currentVersion=q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function _e(M,v,D,H,q){const ne=s.convert(D.format,D.encoding),pe=s.convert(D.type),O=y(D.internalFormat,ne,pe,D.encoding);i.get(v).__hasExternalTextures||(q===32879||q===35866?t.texImage3D(q,0,O,v.width,v.height,v.depth,0,ne,pe,null):t.texImage2D(q,0,O,v.width,v.height,0,ne,pe,null)),t.bindFramebuffer(36160,M),se(v)?h.framebufferTexture2DMultisampleEXT(36160,H,q,i.get(D).__webglTexture,0,ie(v)):n.framebufferTexture2D(36160,H,q,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(M,v,D){if(n.bindRenderbuffer(36161,M),v.depthBuffer&&!v.stencilBuffer){let H=33189;if(D||se(v)){const q=v.depthTexture;q&&q.isDepthTexture&&(q.type===Jn?H=36012:q.type===Zn&&(H=33190));const ne=ie(v);se(v)?h.renderbufferStorageMultisampleEXT(36161,ne,H,v.width,v.height):n.renderbufferStorageMultisample(36161,ne,H,v.width,v.height)}else n.renderbufferStorage(36161,H,v.width,v.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(v.depthBuffer&&v.stencilBuffer){const H=ie(v);D&&se(v)===!1?n.renderbufferStorageMultisample(36161,H,35056,v.width,v.height):se(v)?h.renderbufferStorageMultisampleEXT(36161,H,35056,v.width,v.height):n.renderbufferStorage(36161,34041,v.width,v.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const H=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0;q<H.length;q++){const ne=H[q],pe=s.convert(ne.format,ne.encoding),O=s.convert(ne.type),fe=y(ne.internalFormat,pe,O,ne.encoding),de=ie(v);D&&se(v)===!1?n.renderbufferStorageMultisample(36161,de,fe,v.width,v.height):se(v)?h.renderbufferStorageMultisampleEXT(36161,de,fe,v.width,v.height):n.renderbufferStorage(36161,fe,v.width,v.height)}}n.bindRenderbuffer(36161,null)}function Pe(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);const H=i.get(v.depthTexture).__webglTexture,q=ie(v);if(v.depthTexture.format===ii)se(v)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,q):n.framebufferTexture2D(36160,36096,3553,H,0);else if(v.depthTexture.format===$i)se(v)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,q):n.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function w(M){const v=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Pe(v.__webglFramebuffer,M)}else if(D){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]=n.createRenderbuffer(),He(v.__webglDepthbuffer[H],M,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),He(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function L(M,v,D){const H=i.get(M);v!==void 0&&_e(H.__webglFramebuffer,M,M.texture,36064,3553),D!==void 0&&w(M)}function G(M){const v=M.texture,D=i.get(M),H=i.get(v);M.addEventListener("dispose",le),M.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,a.memory.textures++);const q=M.isWebGLCubeRenderTarget===!0,ne=M.isWebGLMultipleRenderTargets===!0,pe=b(M)||o;if(q){D.__webglFramebuffer=[];for(let O=0;O<6;O++)D.__webglFramebuffer[O]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),ne)if(r.drawBuffers){const O=M.texture;for(let fe=0,de=O.length;fe<de;fe++){const ye=i.get(O[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&se(M)===!1){const O=ne?v:[v];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let fe=0;fe<O.length;fe++){const de=O[fe];D.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[fe]);const ye=s.convert(de.format,de.encoding),ve=s.convert(de.type),Ee=y(de.internalFormat,ye,ve,de.encoding),Oe=ie(M);n.renderbufferStorageMultisample(36161,Oe,Ee,M.width,M.height),n.framebufferRenderbuffer(36160,36064+fe,36161,D.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),He(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(q){t.bindTexture(34067,H.__webglTexture),ee(34067,v,pe);for(let O=0;O<6;O++)_e(D.__webglFramebuffer[O],M,v,36064,34069+O);C(v,pe)&&F(34067),t.unbindTexture()}else if(ne){const O=M.texture;for(let fe=0,de=O.length;fe<de;fe++){const ye=O[fe],ve=i.get(ye);t.bindTexture(3553,ve.__webglTexture),ee(3553,ye,pe),_e(D.__webglFramebuffer,M,ye,36064+fe,3553),C(ye,pe)&&F(3553)}t.unbindTexture()}else{let O=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?O=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(O,H.__webglTexture),ee(O,v,pe),_e(D.__webglFramebuffer,M,v,36064,O),C(v,pe)&&F(O),t.unbindTexture()}M.depthBuffer&&w(M)}function Z(M){const v=b(M)||o,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let H=0,q=D.length;H<q;H++){const ne=D[H];if(C(ne,v)){const pe=M.isWebGLCubeRenderTarget?34067:3553,O=i.get(ne).__webglTexture;t.bindTexture(pe,O),F(pe),t.unbindTexture()}}}function Q(M){if(o&&M.samples>0&&se(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,H=M.height;let q=16384;const ne=[],pe=M.stencilBuffer?33306:36096,O=i.get(M),fe=M.isWebGLMultipleRenderTargets===!0;if(fe)for(let de=0;de<v.length;de++)t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,O.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,O.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,O.__webglFramebuffer);for(let de=0;de<v.length;de++){ne.push(36064+de),M.depthBuffer&&ne.push(pe);const ye=O.__ignoreDepthValues!==void 0?O.__ignoreDepthValues:!1;if(ye===!1&&(M.depthBuffer&&(q|=256),M.stencilBuffer&&(q|=1024)),fe&&n.framebufferRenderbuffer(36008,36064,36161,O.__webglColorRenderbuffer[de]),ye===!0&&(n.invalidateFramebuffer(36008,[pe]),n.invalidateFramebuffer(36009,[pe])),fe){const ve=i.get(v[de]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ve,0)}n.blitFramebuffer(0,0,D,H,0,0,D,H,q,9728),m&&n.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),fe)for(let de=0;de<v.length;de++){t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,O.__webglColorRenderbuffer[de]);const ye=i.get(v[de]).__webglTexture;t.bindFramebuffer(36160,O.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,ye,0)}t.bindFramebuffer(36009,O.__webglMultisampledFramebuffer)}}function ie(M){return Math.min(f,M.samples)}function se(M){const v=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function oe(M){const v=a.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function ae(M,v){const D=M.encoding,H=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===aa||D!==li&&(D===Ze?o===!1?e.has("EXT_sRGB")===!0&&H===tn?(M.format=aa,M.minFilter=It,M.generateMipmaps=!1):v=bf.sRGBToLinear(v):(H!==tn||q!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),v}this.allocateTextureUnit=V,this.resetTextureUnits=te,this.setTexture2D=B,this.setTexture2DArray=ue,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=L,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=se}function $M(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===ai)return 5121;if(s===kg)return 32819;if(s===Hg)return 32820;if(s===Og)return 5120;if(s===zg)return 5122;if(s===vf)return 5123;if(s===Bg)return 5124;if(s===Zn)return 5125;if(s===Jn)return 5126;if(s===br)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Gg)return 6406;if(s===tn)return 6408;if(s===Wg)return 6409;if(s===qg)return 6410;if(s===ii)return 6402;if(s===$i)return 34041;if(s===Xg)return 6403;if(s===Vg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===aa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jg)return 36244;if(s===$g)return 33319;if(s===Yg)return 33320;if(s===Kg)return 36249;if(s===ro||s===so||s===oo||s===ao)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===so)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===so)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bl||s===kl||s===Hl||s===Gl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vl||s===Wl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Vl)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ql||s===Xl||s===jl||s===$l||s===Yl||s===Kl||s===Zl||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ql)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$l)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ql)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ec)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ic)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rc)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===sc)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===zi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YM extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const x=new rs;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[p.jointName]=x,c.add(x)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class ZM extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ii&&(i=Zn),i===void 0&&u===$i&&(i=zi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}class JM extends er{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],x=[],E=new Ft;E.layers.enable(1),E.viewport=new lt;const b=new Ft;b.layers.enable(2),b.viewport=new lt;const T=[E,b],C=new YM;C.layers.enable(1),C.layers.enable(2);let F=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let B=_[N];return B===void 0&&(B=new Uo,_[N]=B),B.getTargetRaySpace()},this.getControllerGrip=function(N){let B=_[N];return B===void 0&&(B=new Uo,_[N]=B),B.getGripSpace()},this.getHand=function(N){let B=_[N];return B===void 0&&(B=new Uo,_[N]=B),B.getHandSpace()};function A(N){const B=x.indexOf(N.inputSource);if(B===-1)return;const ue=_[B];ue!==void 0&&ue.dispatchEvent({type:N.type,data:N.inputSource})}function I(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",j);for(let N=0;N<_.length;N++){const B=x[N];B!==null&&(x[N]=null,_[N].disconnect(B))}F=null,y=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",I),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:h}),d=new ci(h.framebufferWidth,h.framebufferHeight,{format:tn,type:ai,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,ue=null,re=null;g.depth&&(re=g.stencil?35056:33190,B=g.stencil?$i:ii,ue=g.stencil?zi:Zn);const ce={colorFormat:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),d=new ci(f.textureWidth,f.textureHeight,{format:tn,type:ai,depthTexture:new ZM(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(N){for(let B=0;B<N.removed.length;B++){const ue=N.removed[B],re=x.indexOf(ue);re>=0&&(x[re]=null,_[re].dispatchEvent({type:"disconnected",data:ue}))}for(let B=0;B<N.added.length;B++){const ue=N.added[B];let re=x.indexOf(ue);if(re===-1){for(let Me=0;Me<_.length;Me++)if(Me>=x.length){x.push(ue),re=Me;break}else if(x[Me]===null){x[Me]=ue,re=Me;break}if(re===-1)break}const ce=_[re];ce&&ce.dispatchEvent({type:"connected",data:ue})}}const le=new k,W=new k;function R(N,B,ue){le.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const re=le.distanceTo(W),ce=B.projectionMatrix.elements,Me=ue.projectionMatrix.elements,Te=ce[14]/(ce[10]-1),ee=ce[14]/(ce[10]+1),De=(ce[9]+1)/ce[5],Se=(ce[9]-1)/ce[5],we=(ce[8]-1)/ce[0],_e=(Me[8]+1)/Me[0],He=Te*we,Pe=Te*_e,w=re/(-we+_e),L=w*-we;B.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(L),N.translateZ(w),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const G=Te+w,Z=ee+w,Q=He-L,ie=Pe+(re-L),se=De*ee/Z*G,oe=Se*ee/Z*G;N.projectionMatrix.makePerspective(Q,ie,se,oe,G,Z)}function Y(N,B){B===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(B.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=b.near=E.near=N.near,C.far=b.far=E.far=N.far,(F!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,y=C.far);const B=N.parent,ue=C.cameras;Y(C,B);for(let ce=0;ce<ue.length;ce++)Y(ue[ce],B);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),N.matrix.copy(C.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const re=N.children;for(let ce=0,Me=re.length;ce<Me;ce++)re[ce].updateMatrixWorld(!0);ue.length===2?R(C,E,b):C.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let K=null;function te(N,B){if(c=B.getViewerPose(l||a),m=B,c!==null){const ue=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let re=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,re=!0);for(let ce=0;ce<ue.length;ce++){const Me=ue[ce];let Te=null;if(h!==null)Te=h.getViewport(Me);else{const De=u.getViewSubImage(f,Me);Te=De.viewport,ce===0&&(e.setRenderTargetTextures(d,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let ee=T[ce];ee===void 0&&(ee=new Ft,ee.layers.enable(ce),ee.viewport=new lt,T[ce]=ee),ee.matrix.fromArray(Me.transform.matrix),ee.projectionMatrix.fromArray(Me.projectionMatrix),ee.viewport.set(Te.x,Te.y,Te.width,Te.height),ce===0&&C.matrix.copy(ee.matrix),re===!0&&C.cameras.push(ee)}}for(let ue=0;ue<_.length;ue++){const re=x[ue],ce=_[ue];re!==null&&ce!==void 0&&ce.update(re,B,l||a)}K&&K(N,B),m=null}const V=new Pf;V.setAnimationLoop(te),this.setAnimationLoop=function(N){K=N},this.dispose=function(){}}}function QM(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,x):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ot&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ot&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let E;d.aoMap?E=d.aoMap:d.lightMap&&(E=d.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=x*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E;d.map?E=d.map:d.alphaMap&&(E=d.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ot&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function ey(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(x,E){const b=E.program;i.uniformBlockBinding(x,b)}function c(x,E){let b=r[x.id];b===void 0&&(g(x),b=u(x),r[x.id]=b,x.addEventListener("dispose",d));const T=E.program;i.updateUBOMapping(x,T);const C=e.render.frame;s[x.id]!==C&&(h(x),s[x.id]=C)}function u(x){const E=f();x.__bindingPointIndex=E;const b=n.createBuffer(),T=x.__size,C=x.usage;return n.bindBuffer(35345,b),n.bufferData(35345,T,C),n.bindBuffer(35345,null),n.bindBufferBase(35345,E,b),b}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const E=r[x.id],b=x.uniforms,T=x.__cache;n.bindBuffer(35345,E);for(let C=0,F=b.length;C<F;C++){const y=b[C];if(m(y,C,T)===!0){const A=y.value,I=y.__offset;typeof A=="number"?(y.__data[0]=A,n.bufferSubData(35345,I,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):A.toArray(y.__data),n.bufferSubData(35345,I,y.__data))}}n.bindBuffer(35345,null)}function m(x,E,b){const T=x.value;if(b[E]===void 0)return typeof T=="number"?b[E]=T:b[E]=T.clone(),!0;if(typeof T=="number"){if(b[E]!==T)return b[E]=T,!0}else{const C=b[E];if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(x){const E=x.uniforms;let b=0;const T=16;let C=0;for(let F=0,y=E.length;F<y;F++){const A=E[F],I=p(A);if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,F>0){C=b%T;const j=T-C;C!==0&&j-I.boundary<0&&(b+=T-C,A.__offset=b)}b+=I.storage}return C=b%T,C>0&&(b+=T-C),x.__size=b,x.__cache={},this}function p(x){const E=x.value,b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function d(x){const E=x.target;E.removeEventListener("dispose",d);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function _(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function ty(){const n=bs("canvas");return n.style.display="block",n}function Uf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:ty(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=li,this.physicallyCorrectLights=!1,this.toneMapping=mn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,x=0,E=null,b=-1,T=null;const C=new lt,F=new lt;let y=null,A=e.width,I=e.height,j=1,le=null,W=null;const R=new lt(0,0,A,I),Y=new lt(0,0,A,I);let K=!1;const te=new Rf;let V=!1,N=!1,B=null;const ue=new ct,re=new Xe,ce=new k,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return E===null?j:1}let ee=t;function De(S,z){for(let $=0;$<S.length;$++){const U=S[$],J=e.getContext(U,z);if(J!==null)return J}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fa}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Oe,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),ee===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),ee=De(z,S),ee===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Se,we,_e,He,Pe,w,L,G,Z,Q,ie,se,oe,ae,M,v,D,H,q,ne,pe,O,fe,de;function ye(){Se=new hv(ee),we=new sv(ee,Se,n),Se.init(we),O=new $M(ee,Se,we),_e=new XM(ee,Se,we),He=new mv,Pe=new DM,w=new jM(ee,Se,_e,Pe,we,O,He),L=new av(p),G=new fv(p),Z=new E_(ee,we),fe=new iv(ee,Se,Z,we),Q=new dv(ee,Z,He,fe),ie=new vv(ee,Q,Z,He),q=new xv(ee,we,w),v=new ov(Pe),se=new PM(p,L,G,Se,we,fe,v),oe=new QM(p,Pe),ae=new FM,M=new kM(Se,we),H=new nv(p,L,_e,ie,u,a),D=new qM(p,ie,we),de=new ey(ee,He,we,_e),ne=new rv(ee,Se,He,we),pe=new pv(ee,Se,He,we),He.programs=se.programs,p.capabilities=we,p.extensions=Se,p.properties=Pe,p.renderLists=ae,p.shadowMap=D,p.state=_e,p.info=He}ye();const ve=new JM(p,ee);this.xr=ve,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(A,I,!1))},this.getSize=function(S){return S.set(A,I)},this.setSize=function(S,z,$){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,I=z,e.width=Math.floor(S*j),e.height=Math.floor(z*j),$!==!1&&(e.style.width=S+"px",e.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(A*j,I*j).floor()},this.setDrawingBufferSize=function(S,z,$){A=S,I=z,j=$,e.width=Math.floor(S*$),e.height=Math.floor(z*$),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(R)},this.setViewport=function(S,z,$,U){S.isVector4?R.set(S.x,S.y,S.z,S.w):R.set(S,z,$,U),_e.viewport(C.copy(R).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,z,$,U){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,z,$,U),_e.scissor(F.copy(Y).multiplyScalar(j).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){_e.setScissorTest(K=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(S=!0,z=!0,$=!0){let U=0;S&&(U|=16384),z&&(U|=256),$&&(U|=1024),ee.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Oe,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),ae.dispose(),M.dispose(),Pe.dispose(),L.dispose(),G.dispose(),ie.dispose(),fe.dispose(),de.dispose(),se.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",ke),ve.removeEventListener("sessionend",rt),B&&(B.dispose(),B=null),Je.stop()};function Ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const S=He.autoReset,z=D.enabled,$=D.autoUpdate,U=D.needsUpdate,J=D.type;ye(),He.autoReset=S,D.enabled=z,D.autoUpdate=$,D.needsUpdate=U,D.type=J}function Ne(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function P(S){const z=S.target;z.removeEventListener("dispose",P),me(z)}function me(S){X(S),Pe.remove(S)}function X(S){const z=Pe.get(S).programs;z!==void 0&&(z.forEach(function($){se.releaseProgram($)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,$,U,J,be){z===null&&(z=Me);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Ie=zf(S,z,$,U,J);_e.setMaterial(U,Ce);let Le=$.index;const We=$.attributes.position;if(Le===null){if(We===void 0||We.count===0)return}else if(Le.count===0)return;let ze=1;U.wireframe===!0&&(Le=Q.getWireframeAttribute($),ze=2),fe.setup(J,U,Ie,$,Le);let Be,Ke=ne;Le!==null&&(Be=Z.get(Le),Ke=pe,Ke.setIndex(Be));const Bn=Le!==null?Le.count:We.count,hi=$.drawRange.start*ze,di=$.drawRange.count*ze,Kt=be!==null?be.start*ze:0,Ge=be!==null?be.count*ze:1/0,pi=Math.max(hi,Kt),Qe=Math.min(Bn,hi+di,Kt+Ge)-1,Lt=Math.max(0,Qe-pi+1);if(Lt!==0){if(J.isMesh)U.wireframe===!0?(_e.setLineWidth(U.wireframeLinewidth*Te()),Ke.setMode(1)):Ke.setMode(4);else if(J.isLine){let Mn=U.linewidth;Mn===void 0&&(Mn=1),_e.setLineWidth(Mn*Te()),J.isLineSegments?Ke.setMode(1):J.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else J.isPoints?Ke.setMode(0):J.isSprite&&Ke.setMode(4);if(J.isInstancedMesh)Ke.renderInstances(pi,Lt,J.count);else if($.isInstancedBufferGeometry){const Mn=Math.min($.instanceCount,$._maxInstanceCount);Ke.renderInstances(pi,Lt,Mn)}else Ke.render(pi,Lt)}},this.compile=function(S,z){function $(U,J,be){U.transparent===!0&&U.side===Dn?(U.side=Ot,U.needsUpdate=!0,Cr(U,J,be),U.side=qi,U.needsUpdate=!0,Cr(U,J,be),U.side=Dn):Cr(U,J,be)}h=M.get(S),h.init(),g.push(h),S.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights(p.physicallyCorrectLights),S.traverse(function(U){const J=U.material;if(J)if(Array.isArray(J))for(let be=0;be<J.length;be++){const Ce=J[be];$(Ce,S,U)}else $(J,S,U)}),g.pop(),h=null};let xe=null;function ge(S){xe&&xe(S)}function ke(){Je.stop()}function rt(){Je.start()}const Je=new Pf;Je.setAnimationLoop(ge),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(S){xe=S,ve.setAnimationLoop(S),S===null?Je.stop():Je.start()},ve.addEventListener("sessionstart",ke),ve.addEventListener("sessionend",rt),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(z),z=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,z,E),h=M.get(S,g.length),h.init(),g.push(h),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(ue),N=this.localClippingEnabled,V=v.init(this.clippingPlanes,N,z),f=ae.get(S,m.length),f.init(),m.push(f),vn(S,z,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(le,W),V===!0&&v.beginShadows();const $=h.state.shadowsArray;if(D.render($,S,z),V===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(f,S),h.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const U=z.cameras;for(let J=0,be=U.length;J<be;J++){const Ce=U[J];Ye(f,S,Ce,Ce.viewport)}}else Ye(f,S,z);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(p,S,z),fe.resetDefaultState(),b=-1,T=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function vn(S,z,$,U){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){U&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ue);const Ce=ie.update(S),Ie=S.material;Ie.visible&&f.push(S,Ce,Ie,$,ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==He.render.frame&&(S.skeleton.update(),S.skeleton.frame=He.render.frame),!S.frustumCulled||te.intersectsObject(S))){U&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ue);const Ce=ie.update(S),Ie=S.material;if(Array.isArray(Ie)){const Le=Ce.groups;for(let We=0,ze=Le.length;We<ze;We++){const Be=Le[We],Ke=Ie[Be.materialIndex];Ke&&Ke.visible&&f.push(S,Ce,Ke,$,ce.z,Be)}}else Ie.visible&&f.push(S,Ce,Ie,$,ce.z,null)}}const be=S.children;for(let Ce=0,Ie=be.length;Ce<Ie;Ce++)vn(be[Ce],z,$,U)}function Ye(S,z,$,U){const J=S.opaque,be=S.transmissive,Ce=S.transparent;h.setupLightsView($),be.length>0&&sn(J,z,$),U&&_e.viewport(C.copy(U)),J.length>0&&Ct(J,z,$),be.length>0&&Ct(be,z,$),Ce.length>0&&Ct(Ce,z,$),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function sn(S,z,$){const U=we.isWebGL2;B===null&&(B=new ci(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?br:ai,minFilter:Bs,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(re),U?B.setSize(re.x,re.y):B.setSize(la(re.x),la(re.y));const J=p.getRenderTarget();p.setRenderTarget(B),p.clear();const be=p.toneMapping;p.toneMapping=mn,Ct(S,z,$),p.toneMapping=be,w.updateMultisampleRenderTarget(B),w.updateRenderTargetMipmap(B),p.setRenderTarget(J)}function Ct(S,z,$){const U=z.isScene===!0?z.overrideMaterial:null;for(let J=0,be=S.length;J<be;J++){const Ce=S[J],Ie=Ce.object,Le=Ce.geometry,We=U===null?Ce.material:U,ze=Ce.group;Ie.layers.test($.layers)&&Of(Ie,z,$,Le,We,ze)}}function Of(S,z,$,U,J,be){S.onBeforeRender(p,z,$,U,J,be),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),J.onBeforeRender(p,z,$,U,S,be),J.transparent===!0&&J.side===Dn?(J.side=Ot,J.needsUpdate=!0,p.renderBufferDirect($,z,U,J,S,be),J.side=qi,J.needsUpdate=!0,p.renderBufferDirect($,z,U,J,S,be),J.side=Dn):p.renderBufferDirect($,z,U,J,S,be),S.onAfterRender(p,z,$,U,J,be)}function Cr(S,z,$){z.isScene!==!0&&(z=Me);const U=Pe.get(S),J=h.state.lights,be=h.state.shadowsArray,Ce=J.state.version,Ie=se.getParameters(S,J.state,be,z,$),Le=se.getProgramCacheKey(Ie);let We=U.programs;U.environment=S.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(S.isMeshStandardMaterial?G:L).get(S.envMap||U.environment),We===void 0&&(S.addEventListener("dispose",P),We=new Map,U.programs=We);let ze=We.get(Le);if(ze!==void 0){if(U.currentProgram===ze&&U.lightsStateVersion===Ce)return Ba(S,Ie),ze}else Ie.uniforms=se.getUniforms(S),S.onBuild($,Ie,p),S.onBeforeCompile(Ie,p),ze=se.acquireProgram(Ie,Le),We.set(Le,ze),U.uniforms=Ie.uniforms;const Be=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=v.uniform),Ba(S,Ie),U.needsLights=kf(S),U.lightsStateVersion=Ce,U.needsLights&&(Be.ambientLightColor.value=J.state.ambient,Be.lightProbe.value=J.state.probe,Be.directionalLights.value=J.state.directional,Be.directionalLightShadows.value=J.state.directionalShadow,Be.spotLights.value=J.state.spot,Be.spotLightShadows.value=J.state.spotShadow,Be.rectAreaLights.value=J.state.rectArea,Be.ltc_1.value=J.state.rectAreaLTC1,Be.ltc_2.value=J.state.rectAreaLTC2,Be.pointLights.value=J.state.point,Be.pointLightShadows.value=J.state.pointShadow,Be.hemisphereLights.value=J.state.hemi,Be.directionalShadowMap.value=J.state.directionalShadowMap,Be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Be.spotShadowMap.value=J.state.spotShadowMap,Be.spotLightMatrix.value=J.state.spotLightMatrix,Be.spotLightMap.value=J.state.spotLightMap,Be.pointShadowMap.value=J.state.pointShadowMap,Be.pointShadowMatrix.value=J.state.pointShadowMatrix);const Ke=ze.getUniforms(),Bn=cs.seqWithValue(Ke.seq,Be);return U.currentProgram=ze,U.uniformsList=Bn,ze}function Ba(S,z){const $=Pe.get(S);$.outputEncoding=z.outputEncoding,$.instancing=z.instancing,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function zf(S,z,$,U,J){z.isScene!==!0&&(z=Me),w.resetTextureUnits();const be=z.fog,Ce=U.isMeshStandardMaterial?z.environment:null,Ie=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:li,Le=(U.isMeshStandardMaterial?G:L).get(U.envMap||Ce),We=U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!U.normalMap&&!!$.attributes.tangent,Be=!!$.morphAttributes.position,Ke=!!$.morphAttributes.normal,Bn=!!$.morphAttributes.color,hi=U.toneMapped?p.toneMapping:mn,di=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Kt=di!==void 0?di.length:0,Ge=Pe.get(U),pi=h.state.lights;if(V===!0&&(N===!0||S!==T)){const Mt=S===T&&U.id===b;v.setState(U,S,Mt)}let Qe=!1;U.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==pi.state.version||Ge.outputEncoding!==Ie||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Le||U.fog===!0&&Ge.fog!==be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==v.numPlanes||Ge.numIntersection!==v.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==ze||Ge.morphTargets!==Be||Ge.morphNormals!==Ke||Ge.morphColors!==Bn||Ge.toneMapping!==hi||we.isWebGL2===!0&&Ge.morphTargetsCount!==Kt)&&(Qe=!0):(Qe=!0,Ge.__version=U.version);let Lt=Ge.currentProgram;Qe===!0&&(Lt=Cr(U,z,J));let Mn=!1,ir=!1,Gs=!1;const dt=Lt.getUniforms(),kn=Ge.uniforms;if(_e.useProgram(Lt.program)&&(Mn=!0,ir=!0,Gs=!0),U.id!==b&&(b=U.id,ir=!0),Mn||T!==S){if(dt.setValue(ee,"projectionMatrix",S.projectionMatrix),we.logarithmicDepthBuffer&&dt.setValue(ee,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),T!==S&&(T=S,ir=!0,Gs=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Mt=dt.map.cameraPosition;Mt!==void 0&&Mt.setValue(ee,ce.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&dt.setValue(ee,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||J.isSkinnedMesh)&&dt.setValue(ee,"viewMatrix",S.matrixWorldInverse)}if(J.isSkinnedMesh){dt.setOptional(ee,J,"bindMatrix"),dt.setOptional(ee,J,"bindMatrixInverse");const Mt=J.skeleton;Mt&&(we.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),dt.setValue(ee,"boneTexture",Mt.boneTexture,w),dt.setValue(ee,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vs=$.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0&&we.isWebGL2===!0)&&q.update(J,$,U,Lt),(ir||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,dt.setValue(ee,"receiveShadow",J.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(kn.envMap.value=Le,kn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ir&&(dt.setValue(ee,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&Bf(kn,Gs),be&&U.fog===!0&&oe.refreshFogUniforms(kn,be),oe.refreshMaterialUniforms(kn,U,j,I,B),cs.upload(ee,Ge.uniformsList,kn,w)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(cs.upload(ee,Ge.uniformsList,kn,w),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&dt.setValue(ee,"center",J.center),dt.setValue(ee,"modelViewMatrix",J.modelViewMatrix),dt.setValue(ee,"normalMatrix",J.normalMatrix),dt.setValue(ee,"modelMatrix",J.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Mt=U.uniformsGroups;for(let Ws=0,Hf=Mt.length;Ws<Hf;Ws++)if(we.isWebGL2){const ka=Mt[Ws];de.update(ka,Lt),de.bind(ka,Lt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lt}function Bf(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function kf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,z,$){Pe.get(S.texture).__webglTexture=z,Pe.get(S.depthTexture).__webglTexture=$;const U=Pe.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=$===void 0,U.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,z){const $=Pe.get(S);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,$=0){E=S,_=z,x=$;let U=!0;if(S){const Le=Pe.get(S);Le.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),U=!1):Le.__webglFramebuffer===void 0?w.setupRenderTarget(S):Le.__hasExternalTextures&&w.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture)}let J=null,be=!1,Ce=!1;if(S){const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture)&&(Ce=!0);const We=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(J=We[z],be=!0):we.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?J=Pe.get(S).__webglMultisampledFramebuffer:J=We,C.copy(S.viewport),F.copy(S.scissor),y=S.scissorTest}else C.copy(R).multiplyScalar(j).floor(),F.copy(Y).multiplyScalar(j).floor(),y=K;if(_e.bindFramebuffer(36160,J)&&we.drawBuffers&&U&&_e.drawBuffers(S,J),_e.viewport(C),_e.scissor(F),_e.setScissorTest(y),be){const Le=Pe.get(S.texture);ee.framebufferTexture2D(36160,36064,34069+z,Le.__webglTexture,$)}else if(Ce){const Le=Pe.get(S.texture),We=z||0;ee.framebufferTextureLayer(36160,36064,Le.__webglTexture,$||0,We)}b=-1},this.readRenderTargetPixels=function(S,z,$,U,J,be,Ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){_e.bindFramebuffer(36160,Ie);try{const Le=S.texture,We=Le.format,ze=Le.type;if(We!==tn&&O.convert(We)!==ee.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===br&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ze!==ai&&O.convert(ze)!==ee.getParameter(35738)&&!(ze===Jn&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-U&&$>=0&&$<=S.height-J&&ee.readPixels(z,$,U,J,O.convert(We),O.convert(ze),be)}finally{const Le=E!==null?Pe.get(E).__webglFramebuffer:null;_e.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(S,z,$=0){const U=Math.pow(2,-$),J=Math.floor(z.image.width*U),be=Math.floor(z.image.height*U);w.setTexture2D(z,0),ee.copyTexSubImage2D(3553,$,0,0,S.x,S.y,J,be),_e.unbindTexture()},this.copyTextureToTexture=function(S,z,$,U=0){const J=z.image.width,be=z.image.height,Ce=O.convert($.format),Ie=O.convert($.type);w.setTexture2D($,0),ee.pixelStorei(37440,$.flipY),ee.pixelStorei(37441,$.premultiplyAlpha),ee.pixelStorei(3317,$.unpackAlignment),z.isDataTexture?ee.texSubImage2D(3553,U,S.x,S.y,J,be,Ce,Ie,z.image.data):z.isCompressedTexture?ee.compressedTexSubImage2D(3553,U,S.x,S.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):ee.texSubImage2D(3553,U,S.x,S.y,Ce,Ie,z.image),U===0&&$.generateMipmaps&&ee.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(S,z,$,U,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=S.max.x-S.min.x+1,Ce=S.max.y-S.min.y+1,Ie=S.max.z-S.min.z+1,Le=O.convert(U.format),We=O.convert(U.type);let ze;if(U.isData3DTexture)w.setTexture3D(U,0),ze=32879;else if(U.isDataArrayTexture)w.setTexture2DArray(U,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(37440,U.flipY),ee.pixelStorei(37441,U.premultiplyAlpha),ee.pixelStorei(3317,U.unpackAlignment);const Be=ee.getParameter(3314),Ke=ee.getParameter(32878),Bn=ee.getParameter(3316),hi=ee.getParameter(3315),di=ee.getParameter(32877),Kt=$.isCompressedTexture?$.mipmaps[0]:$.image;ee.pixelStorei(3314,Kt.width),ee.pixelStorei(32878,Kt.height),ee.pixelStorei(3316,S.min.x),ee.pixelStorei(3315,S.min.y),ee.pixelStorei(32877,S.min.z),$.isDataTexture||$.isData3DTexture?ee.texSubImage3D(ze,J,z.x,z.y,z.z,be,Ce,Ie,Le,We,Kt.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(ze,J,z.x,z.y,z.z,be,Ce,Ie,Le,Kt.data)):ee.texSubImage3D(ze,J,z.x,z.y,z.z,be,Ce,Ie,Le,We,Kt),ee.pixelStorei(3314,Be),ee.pixelStorei(32878,Ke),ee.pixelStorei(3316,Bn),ee.pixelStorei(3315,hi),ee.pixelStorei(32877,di),J===0&&U.generateMipmaps&&ee.generateMipmap(ze),_e.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){_=0,x=0,E=null,_e.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ny extends Uf{}ny.prototype.isWebGL1Renderer=!0;class iy extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);const ry=n=>{const{width:e,height:t}=n.getBoundingClientRect(),i=e*.25,r=t*.25,s=i/r,a=new iy,o=new Ft(75,s,.1,1e3),l=new Uf;l.setSize(i,r),n.appendChild(l.domElement);const c=new tr(1,1,1),u=new Ua({color:65280}),f=new pn(c,u);a.add(f),o.position.z=5;const h=()=>{requestAnimationFrame(h),f.rotation.x+=.01,f.rotation.y+=.01,l.render(a,o)};h()},sy=At({__name:"app",setup(n){const e=fr(null);return Tu(()=>{const i=e.value;if(!i||!(i instanceof HTMLDivElement))throw Error("No container");ry(i)}),(i,r)=>(pr(),Ad("div",{ref_key:"container",ref:e,class:"canvas-wrap"},null,512))}});globalThis.$fetch||(globalThis.$fetch=$p.create({baseURL:Kp()}));let Vc;const oy=fm(ig);Vc=async function(){var r;const t=Boolean((r=window.__NUXT__)==null?void 0:r.serverRendered)?cp(Rl):lp(Rl);t.component("App",sy);const i=lm({vueApp:t});i.hooks.hookOnce("app:suspense:resolve",()=>{i.isHydrating=!1});try{await um(i,oy)}catch(s){await i.callHook("app:error",s),i.payload.error=i.payload.error||s}try{await i.hooks.callHook("app:created",t),await i.hooks.callHook("app:beforeMount",t),t.mount("#__nuxt"),await i.hooks.callHook("app:mounted",t),await gu()}catch(s){await i.callHook("app:error",s),i.payload.error=i.payload.error||s}},Vc().catch(n=>{console.error("Error while mounting app:",n)});export{og as _,Ia as a,Ad as b,Ks as c,Zh as d,qu as e,it as f,Ld as g,Xu as h,fy as i,uy as j,ay as n,pr as o,cy as p,ly as t,ti as u,yu as w};
