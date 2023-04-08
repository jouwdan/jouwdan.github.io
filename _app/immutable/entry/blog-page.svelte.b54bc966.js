import{S as ne,i as fe,s as he,k as i,q as R,a as y,l as n,m as u,r as k,h as o,c as I,n as r,b as J,F as a,X as ce,a7 as de,$ as W,u as Y}from"../chunks/index.dfa3183f.js";function oe(v,t,_){const c=v.slice();return c[1]=t[_],c}function ie(v){let t,_,c,f,g,l,e,h=v[1].meta.title+"",s,p,q,A,B=v[1].meta.excerpt+"",V,T,H,F,U,E,w,b,Z,X,x,j,$,z,D,K,O=v[1].meta.date+"",G,N,L;return{c(){t=i("a"),_=i("header"),c=i("img"),g=y(),l=i("div"),e=i("h4"),s=R(h),p=y(),q=i("article"),A=i("p"),V=R(B),T=y(),H=i("footer"),F=i("hr"),U=y(),E=i("div"),w=i("figure"),b=i("img"),X=y(),x=i("div"),j=i("h6"),$=R("By Jordan Harrison"),z=y(),D=i("small"),K=R("On "),G=R(O),N=y(),this.h()},l(m){t=n(m,"A",{class:!0,href:!0});var d=u(t);_=n(d,"HEADER",{});var ee=u(_);c=n(ee,"IMG",{src:!0,class:!0,alt:!0}),ee.forEach(o),g=I(d),l=n(d,"DIV",{class:!0});var M=u(l);e=n(M,"H4",{"data-toc-ignore":!0,class:!0});var te=u(e);s=k(te,h),te.forEach(o),p=I(M),q=n(M,"ARTICLE",{});var ae=u(q);A=n(ae,"P",{});var le=u(A);V=k(le,B),le.forEach(o),ae.forEach(o),M.forEach(o),T=I(d),H=n(d,"FOOTER",{});var P=u(H);F=n(P,"HR",{class:!0}),U=I(P),E=n(P,"DIV",{class:!0});var S=u(E);w=n(S,"FIGURE",{class:!0,"data-testid":!0});var se=u(w);b=n(se,"IMG",{class:!0,src:!0,alt:!0,style:!0}),se.forEach(o),X=I(S),x=n(S,"DIV",{class:!0});var C=u(x);j=n(C,"H6",{class:!0});var re=u(j);$=k(re,"By Jordan Harrison"),re.forEach(o),z=I(C),D=n(C,"SMALL",{});var Q=u(D);K=k(Q,"On "),G=k(Q,O),Q.forEach(o),C.forEach(o),S.forEach(o),P.forEach(o),N=I(d),d.forEach(o),this.h()},h(){W(c.src,f=v[1].meta.cover)||r(c,"src",f),r(c,"class","h-48 w-full object-cover"),r(c,"alt","Post"),r(e,"data-toc-ignore",""),r(e,"class","font-bold"),r(l,"class","p-4 space-y-4"),r(F,"class","opacity-50"),r(b,"class","avatar-image w-full h-full object-cover"),W(b.src,Z="/images/avatar-thumb.png")||r(b,"src",Z),r(b,"alt",""),r(b,"style",""),r(w,"class","avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"),r(w,"data-testid","avatar"),r(j,"class","font-bold"),r(x,"class","flex-auto flex justify-between items-center align"),r(E,"class","p-4 flex justify-end items-center space-x-4"),r(t,"class","card bg-initial card-hover overflow-hidden mx-auto lg:mx-4 my-4"),r(t,"href",L=v[1].path)},m(m,d){J(m,t,d),a(t,_),a(_,c),a(t,g),a(t,l),a(l,e),a(e,s),a(l,p),a(l,q),a(q,A),a(A,V),a(t,T),a(t,H),a(H,F),a(H,U),a(H,E),a(E,w),a(w,b),a(E,X),a(E,x),a(x,j),a(j,$),a(x,z),a(x,D),a(D,K),a(D,G),a(t,N)},p(m,d){d&1&&!W(c.src,f=m[1].meta.cover)&&r(c,"src",f),d&1&&h!==(h=m[1].meta.title+"")&&Y(s,h),d&1&&B!==(B=m[1].meta.excerpt+"")&&Y(V,B),d&1&&O!==(O=m[1].meta.date+"")&&Y(G,O),d&1&&L!==(L=m[1].path)&&r(t,"href",L)},d(m){m&&o(t)}}}function ue(v){let t,_,c,f,g=v[0].posts,l=[];for(let e=0;e<g.length;e+=1)l[e]=ie(oe(v,g,e));return{c(){t=i("h1"),_=R("Blog"),c=y(),f=i("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=n(e,"H1",{class:!0});var h=u(t);_=k(h,"Blog"),h.forEach(o),c=I(e),f=n(e,"DIV",{class:!0});var s=u(f);for(let p=0;p<l.length;p+=1)l[p].l(s);s.forEach(o),this.h()},h(){r(t,"class","font-bold pt-4 pb-8"),r(f,"class","grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4")},m(e,h){J(e,t,h),a(t,_),J(e,c,h),J(e,f,h);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(f,null)},p(e,[h]){if(h&1){g=e[0].posts;let s;for(s=0;s<g.length;s+=1){const p=oe(e,g,s);l[s]?l[s].p(p,h):(l[s]=ie(p),l[s].c(),l[s].m(f,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=g.length}},i:ce,o:ce,d(e){e&&o(t),e&&o(c),e&&o(f),de(l,e)}}}function ve(v,t,_){let{data:c}=t;return v.$$set=f=>{"data"in f&&_(0,c=f.data)},[c]}class me extends ne{constructor(t){super(),fe(this,t,ve,ue,he,{data:0})}}export{me as default};
