function b(){}const I=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function Z(){return Object.create(null)}function E(t){t.forEach(st)}function M(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function It(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function xt(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t){let e;return rt(t,n=>e=n)(),e}function Kt(t,e,n){t.$$.on_destroy.push(rt(e,n))}function Qt(t,e,n,i){if(t){const s=ot(t,e,n,i);return t[0](s)}}function ot(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,l){if(s){const r=ot(e,n,i,l);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function te(t){const e={};for(const n in t)e[n]=!0;return e}function ee(t,e,n){return t.set(n),e}function ne(t){return t&&M(t.destroy)?t.destroy:b}function ie(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const ct=typeof window<"u";let J=ct?()=>window.performance.now():()=>Date.now(),K=ct?t=>requestAnimationFrame(t):b;const k=new Set;function lt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&K(lt)}function Q(t){let e;return k.size===0&&K(lt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function wt(){z=!0}function Et(){z=!1}function vt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:vt(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[_]+1;const u=_+1;n[u]=c,s=Math.max(u,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(r[c],_)}}function kt(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=U("style");return At(at(t),e),e.sheet}function At(t,e){return kt(t.head||t,e),e.sheet}function Mt(t,e){if(z){for(Tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){t.insertBefore(e,n||null)}function Ct(t,e,n){z&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function re(){return V(" ")}function oe(){return V("")}function ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function le(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ft(t,i,e[i])}function ae(t,e){for(const n in e)ft(t,n,e[n])}function Dt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){_t(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ht(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ue(t,e,n){return ht(t,e,n,U)}function fe(t,e,n){return ht(t,e,n,ut)}function Lt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function _e(t){return Lt(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function de(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n);if(n===i)return new et(void 0,e);_t(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(l,e)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ye(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Pt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ut(n.nodeName):this.e=U(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class et extends Pt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}}function ge(t,e){return new t(e)}const O=new Map;let R=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:Nt(e),rules:{}};return O.set(t,n),n}function q(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*l(p);a+=p*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${jt(_)}_${o}`,h=at(t),{stylesheet:f,rules:d}=O.get(h)||Ht(h,t);d[u]||(d[u]=!0,f.insertRule(`@keyframes ${u} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${s}ms 1 both`,R+=1,u}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),R-=s,R||Ot())}function Ot(){K(()=>{R||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),O.clear())})}let P;function D(t){P=t}function F(){if(!P)throw new Error("Function called outside component initialization");return P}function be(t){F().$$.on_mount.push(t)}function $e(t){F().$$.after_update.push(t)}function xe(t){F().$$.on_destroy.push(t)}function we(){const t=F();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=mt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],nt=[];let N=[];const it=[],pt=Promise.resolve();let W=!1;function yt(){W||(W=!0,pt.then(gt))}function ve(){return yt(),pt}function A(t){N.push(t)}const G=new Set;let v=0;function gt(){if(v!==0)return;const t=P;do{try{for(;v<T.length;){const e=T[v];v++,D(e),Rt(e.$$)}}catch(e){throw T.length=0,v=0,e}for(D(null),T.length=0,v=0;nt.length;)nt.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];G.has(n)||(G.add(n),n())}N.length=0}while(T.length);for(;it.length;)it.pop()();W=!1,G.clear(),D(t)}function Rt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function qt(t){const e=[],n=[];N.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),N=e}let C;function X(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function w(t,e,n){t.dispatchEvent(mt(`${e?"intro":"outro"}${n}`))}const H=new Set;let g;function Te(){g={r:0,c:[],p:g}}function ke(){g.r||E(g.c),g=g.p}function Bt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Ne(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),g.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Y={duration:0};function Ae(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,o,c=0;function a(){r&&B(t,r)}function _(){const{delay:h=0,duration:f=300,easing:d=I,tick:m=b,css:p}=s||Y;p&&(r=q(t,0,1,f,h,d,p,c++)),m(0,1);const y=J()+h,S=y+f;o&&o.abort(),l=!0,A(()=>w(t,!0,"start")),o=Q($=>{if(l){if($>=S)return m(1,0),w(t,!0,"end"),a(),l=!1;if($>=y){const x=d(($-y)/f);m(x,1-x)}}return l})}let u=!1;return{start(){u||(u=!0,B(t),M(s)?(s=s(i),X().then(_)):_())},invalidate(){u=!1},end(){l&&(a(),l=!1)}}}function Me(t,e,n){const i={direction:"out"};let s=e(t,n,i),l=!0,r;const o=g;o.r+=1;function c(){const{delay:a=0,duration:_=300,easing:u=I,tick:h=b,css:f}=s||Y;f&&(r=q(t,1,0,_,a,u,f));const d=J()+a,m=d+_;A(()=>w(t,!1,"start")),Q(p=>{if(l){if(p>=m)return h(0,1),w(t,!1,"end"),--o.r||E(o.c),!1;if(p>=d){const y=u((p-d)/_);h(1-y,y)}}return l})}return M(s)?X().then(()=>{s=s(i),c()}):c(),{end(a){a&&s.tick&&s.tick(1,0),l&&(r&&B(t,r),l=!1)}}}function Se(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function _(){a&&B(t,a)}function u(f,d){const m=f.b-r;return d*=Math.abs(m),{a:r,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=I,tick:y=b,css:S}=l||Y,$={start:J()+d,b:f};f||($.group=g,g.r+=1),o||c?c=$:(S&&(_(),a=q(t,r,f,m,d,p,S)),f&&y(0,1),o=u($,m),A(()=>w(t,f,"start")),Q(x=>{if(c&&x>c.start&&(o=u(c,m),c=null,w(t,o.b,"start"),S&&(_(),a=q(t,r,o.b,o.duration,0,p,l.css))),o){if(x>=o.end)y(r=o.b,1-r),w(t,o.b,"end"),c||(o.b?_():--o.group.r||E(o.group.c)),o=null;else if(x>=o.start){const bt=x-o.start;r=o.a+o.d*p(bt/o.duration),y(r,1-r)}}return!!(o||c)}))}return{run(f){M(l)?X().then(()=>{l=l(s),h(f)}):h(f)},end(){_(),o=c=null}}}const Ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function De(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Le(t){t&&t.c()}function Pe(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||A(()=>{const r=t.$$.on_mount.map(st).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),l.forEach(A)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(qt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(T.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,s,l,r,o=[-1]){const c=P;D(t);const a=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const d=f.length?f[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),_&&Gt(t,u)),h}):[],a.update(),_=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){wt();const u=Dt(e.target);a.fragment&&a.fragment.l(u),u.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&Bt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),Et(),gt()}D(c)}class He{$destroy(){Ft(this,1),this.$destroy=b}$on(e,n){if(!M(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{b as $,zt as A,Ft as B,I as C,ie as D,Qt as E,Mt as F,Vt as G,Xt as H,Ut as I,te as J,$t as K,Yt as L,ce as M,Ee as N,Kt as O,we as P,Ce as Q,ne as R,He as S,A as T,Se as U,E as V,et as W,ut as X,ye as Y,de as Z,fe as _,re as a,ee as a0,pe as a1,Ae as a2,Me as a3,It as a4,se as a5,Jt as a6,Zt as a7,le as a8,De as a9,M as aa,xe as ab,ae as ac,Ct as b,_e as c,Ne as d,oe as e,ke as f,Bt as g,L as h,je as i,$e as j,U as k,ue as l,Dt as m,ft as n,be as o,me as p,V as q,Lt as r,Wt as s,ve as t,he as u,Te as v,nt as w,ge as x,Le as y,Pe as z};
