import{s as x,n as _,c as S}from"../chunks/scheduler.K6Z9mYfZ.js";import{S as q,i as k,e as d,p as f,s as y,a as g,b as h,q as v,h as l,d as C,k as m,l as $,x as E}from"../chunks/index.CVV3iqrd.js";import{s as H}from"../chunks/entry.fljWJh5z.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=d("h1"),o=f(r),n=y(),i=d("p"),u=f(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(l),n=C(e),i=g(e,"P",{});var p=h(i);u=v(p,c),p.forEach(l)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:_,o:_,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return S(s,j,n=>r(0,o=n)),[o]}let F=class extends q{constructor(t){super(),k(this,t,z,w,x,{})}};export{F as component};
