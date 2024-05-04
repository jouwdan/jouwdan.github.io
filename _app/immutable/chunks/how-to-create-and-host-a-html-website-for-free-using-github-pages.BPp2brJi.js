import{s as Ut,n as ft}from"./scheduler.K6Z9mYfZ.js";import{S as Qt,i as Zt,e as l,s as n,H as Kt,a as s,g as a,d as u,b as Jt,w as Xt,h as o,j as $t,k as i}from"./index.CVV3iqrd.js";function te(Bt){let r,bt='<a href="https://pages.github.com" rel="nofollow">GitHub Pages</a> is by far the best tool you can use for hosting a basic HTML website. In just a few minutes, you can turn a basic HTML template into a fully functional website, all for free. Below you can see an example of what we will be creating in this blog post.',j,h,wt='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620994277055/gT8pozKRN.png" alt="A preview of what your website will look like"/>',Y,p,vt='In order to make GitHub Pages as accessible as possible, this guide is based around using the <a href="https://desktop.github.com" rel="nofollow">GitHub Desktop</a> client and <a href="https://code.visualstudio.com" rel="nofollow">Visual Studio Code</a>.',A,d,yt="Getting Started",R,m,gt='So, let’s get cracking. First up, if you haven’t got one already, you’ll need to <a href="https://github.com/join" rel="nofollow">create a GitHub Account</a>.',F,c,xt='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620988477864/an25mCQmc.png" alt="Creating a GitHub Account"/>',z,f,Ct='After creating (and verifying!) your account, you’re going to want to <a href="https://github.com/new" rel="nofollow">create a new repository</a>. Now, for this to work, you’re going to want to name the repository with yourusername.github.io. As an example, my GitHub username is jordharr - so I would create the repository jordharr.github.io. See the screenshot below for a visual guidance. When you are done, click the green Create repository button!',B,b,Ht='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620989022264/ZM9zaCoSw.png" alt="Creating a new repository on GitHub"/>',E,w,_t="Downloading GitHub Desktop and Visual Studio Code",U,v,Tt="We are now going to need to download & install 2 pieces of software in order to create and upload your website to GitHub.",Q,y,qt='First, download and install <a href="https://code.visualstudio.com" rel="nofollow">Visual Studio Code</a>. This is a free code editor made by Microsoft, and has rapidly become an industry standard software for code editing. It is available on all platforms (Windows, Mac OS and Linux) so this will work for everyone!',Z,g,Mt='Next, you’re going to want to install <a href="https://desktop.github.com" rel="nofollow">GitHub Desktop</a>. This is a very simple to use software which is used to save your repository locally, and upload files to a repository. During this installation, you will be asked for your default editor (select Visual Studio Code), and then asked to sign into GitHub, to link your account.',K,x,kt='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620989966630/7QtdxhmHN.png" alt="GitHub Desktop Website"/>',J,C,Lt="Setting up your repository",X,H,Pt="By now you have created an account, set up your website’s repository and installed the required software. Next up, we’re going to want to upload files to this repository to host our website. Once you have opened GitHub Desktop, press file and then Clone a repository… In the interface that pops up, choose the GitHub.com tab at the top, then select the repository we created earlier (yourusername.github.io) and press Clone.",$,_,Gt="Once the repository has been cloned, it will create a new folder as specified above. You can navigate to this folder in Explorer/Finder to verify that it exists. From GitHub Desktop, press “Open in Visual Studio Code” to open this folder directly in Visual Studio Code, which we installed earlier.",tt,T,St='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620993627619/1sRYUDOui.png" alt="Repository view in GitHub Desktop"/>',et,q,Dt="Creating a basic HTML website",ot,M,Wt="Next, we’re going to need to create a basic HTML website to upload to our repository. In the folder that opens in Visual Studio Code, which can be seen in the sidebar on the right, we’re going to want to right click in the empty space and press New File. We’ll call this file “index.html”",it,k,It="Once this file is made, copy and paste the below code into the file.",lt,L,st,Et=`<code class="language-undefined">&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Your Name&#39;s Website&lt;/title&gt;
        &lt;link rel=&quot;stylesheet&quot;
            href=&quot;https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;/head&gt;
&lt;body&gt;
    &lt;section class=&quot;hero is-fullheight is-dark&quot;&gt;
        &lt;div class=&quot;hero-body&quot;&gt;
            &lt;div class=&quot;container&quot;&gt;
            &lt;div class=&quot;columns is-vcentered is-centered&quot;&gt;
                &lt;div class=&quot;column is-6&quot;&gt;
                    &lt;div class=&quot;block&quot;&gt;
                        &lt;h1 class=&quot;title is-2&quot;&gt;Welcome to Your Name&#39;s Website.&lt;/h1&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;block&quot;&gt;
                        &lt;h2 class=&quot;subtitle&quot;&gt;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.&lt;br&gt;
                        &lt;/h2&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;block buttons&quot;&gt;
                        &lt;a href=&quot;https://facebook.com/&quot;&gt;&lt;button class=&quot;button is-white is-outlined&quot;&gt;Visit my Facebook&lt;/button&gt;&lt;/a&gt; &amp;nbsp;
                        &lt;a href=&quot;https://twitter.com/&quot;&gt;&lt;button class=&quot;button is-white is-outlined&quot;&gt;Visit my Twitter&lt;/button&gt;&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;
&lt;/body&gt;
&lt;/html&gt;</code>`,nt,P,Nt="You’re going to want to replace anywhere it says “Your Name” with your actual name, the Lorem Ipsum text with about you, and the button URLs with your social links. Once this is done, press your keyboard shortcut to save the file (CTRL+S for Windows, Command + S for Mac).",at,G,Ot="Pushing to Github & GitHub Pages setup",ut,S,Vt="Now this is done, go back to GitHub Desktop and you will see that your new file is showing in the interface. We now need to “commit” these changes, and “push” them to GitHub. To do this, we press “Commit to main” at the bottom left, then at the top right press “Push origin”.",rt,D,jt="After this, open up your repository in GitHub on your browser. You can do this by clicking “View on GitHub” in the desktop app, or heading to github.com/yourusername/yourusername.github.io. That will bring you to a page similar to below.",ht,W,Yt='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620994663970/GWv9oZCHl.png" alt="Repository view on GitHub in the browser"/>',pt,I,At="From here, go to the Settings tab at the top, and then on the left hand menu choose Pages. Once here, under the “Source” section select main, and then press the save button to the right hand side.",dt,N,Rt='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1620994816448/BaYOBCcAc.png" alt="Selecting the main branch in GitHub"/>',mt,O,Ft="Once you have saved, wait 2 minutes and the URL that displays will be live, and your website will be hosted (free of charge) by GitHub Pages!",ct,V,zt='Cover Photo by <a href="https://unsplash.com/@emilep?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="nofollow">Emile Perron</a> on <a href="https://unsplash.com/s/photos/website?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="nofollow">Unsplash</a>';return{c(){r=l("p"),r.innerHTML=bt,j=n(),h=l("p"),h.innerHTML=wt,Y=n(),p=l("p"),p.innerHTML=vt,A=n(),d=l("h2"),d.textContent=yt,R=n(),m=l("p"),m.innerHTML=gt,F=n(),c=l("p"),c.innerHTML=xt,z=n(),f=l("p"),f.innerHTML=Ct,B=n(),b=l("p"),b.innerHTML=Ht,E=n(),w=l("h2"),w.textContent=_t,U=n(),v=l("p"),v.textContent=Tt,Q=n(),y=l("p"),y.innerHTML=qt,Z=n(),g=l("p"),g.innerHTML=Mt,K=n(),x=l("p"),x.innerHTML=kt,J=n(),C=l("h2"),C.textContent=Lt,X=n(),H=l("p"),H.textContent=Pt,$=n(),_=l("p"),_.textContent=Gt,tt=n(),T=l("p"),T.innerHTML=St,et=n(),q=l("h2"),q.textContent=Dt,ot=n(),M=l("p"),M.textContent=Wt,it=n(),k=l("p"),k.textContent=It,lt=n(),L=l("pre"),st=new Kt(!1),nt=n(),P=l("p"),P.textContent=Nt,at=n(),G=l("h2"),G.textContent=Ot,ut=n(),S=l("p"),S.textContent=Vt,rt=n(),D=l("p"),D.textContent=jt,ht=n(),W=l("p"),W.innerHTML=Yt,pt=n(),I=l("p"),I.textContent=At,dt=n(),N=l("p"),N.innerHTML=Rt,mt=n(),O=l("p"),O.textContent=Ft,ct=n(),V=l("p"),V.innerHTML=zt,this.h()},l(t){r=s(t,"P",{"data-svelte-h":!0}),a(r)!=="svelte-1clu5lw"&&(r.innerHTML=bt),j=u(t),h=s(t,"P",{"data-svelte-h":!0}),a(h)!=="svelte-w3sx5k"&&(h.innerHTML=wt),Y=u(t),p=s(t,"P",{"data-svelte-h":!0}),a(p)!=="svelte-x6wovx"&&(p.innerHTML=vt),A=u(t),d=s(t,"H2",{"data-svelte-h":!0}),a(d)!=="svelte-1ris1ql"&&(d.textContent=yt),R=u(t),m=s(t,"P",{"data-svelte-h":!0}),a(m)!=="svelte-oz59pe"&&(m.innerHTML=gt),F=u(t),c=s(t,"P",{"data-svelte-h":!0}),a(c)!=="svelte-1x9b5vv"&&(c.innerHTML=xt),z=u(t),f=s(t,"P",{"data-svelte-h":!0}),a(f)!=="svelte-pehwcq"&&(f.innerHTML=Ct),B=u(t),b=s(t,"P",{"data-svelte-h":!0}),a(b)!=="svelte-rv4kpm"&&(b.innerHTML=Ht),E=u(t),w=s(t,"H2",{"data-svelte-h":!0}),a(w)!=="svelte-1loe7kx"&&(w.textContent=_t),U=u(t),v=s(t,"P",{"data-svelte-h":!0}),a(v)!=="svelte-s54the"&&(v.textContent=Tt),Q=u(t),y=s(t,"P",{"data-svelte-h":!0}),a(y)!=="svelte-5ahjqa"&&(y.innerHTML=qt),Z=u(t),g=s(t,"P",{"data-svelte-h":!0}),a(g)!=="svelte-hz5bl1"&&(g.innerHTML=Mt),K=u(t),x=s(t,"P",{"data-svelte-h":!0}),a(x)!=="svelte-387lhi"&&(x.innerHTML=kt),J=u(t),C=s(t,"H2",{"data-svelte-h":!0}),a(C)!=="svelte-16we1oe"&&(C.textContent=Lt),X=u(t),H=s(t,"P",{"data-svelte-h":!0}),a(H)!=="svelte-58303a"&&(H.textContent=Pt),$=u(t),_=s(t,"P",{"data-svelte-h":!0}),a(_)!=="svelte-9upn31"&&(_.textContent=Gt),tt=u(t),T=s(t,"P",{"data-svelte-h":!0}),a(T)!=="svelte-165slth"&&(T.innerHTML=St),et=u(t),q=s(t,"H2",{"data-svelte-h":!0}),a(q)!=="svelte-f76z8o"&&(q.textContent=Dt),ot=u(t),M=s(t,"P",{"data-svelte-h":!0}),a(M)!=="svelte-14b6t6w"&&(M.textContent=Wt),it=u(t),k=s(t,"P",{"data-svelte-h":!0}),a(k)!=="svelte-tc4e1n"&&(k.textContent=It),lt=u(t),L=s(t,"PRE",{class:!0});var e=Jt(L);st=Xt(e,!1),e.forEach(o),nt=u(t),P=s(t,"P",{"data-svelte-h":!0}),a(P)!=="svelte-j4blru"&&(P.textContent=Nt),at=u(t),G=s(t,"H2",{"data-svelte-h":!0}),a(G)!=="svelte-1cee9xy"&&(G.textContent=Ot),ut=u(t),S=s(t,"P",{"data-svelte-h":!0}),a(S)!=="svelte-1soo82a"&&(S.textContent=Vt),rt=u(t),D=s(t,"P",{"data-svelte-h":!0}),a(D)!=="svelte-c0492r"&&(D.textContent=jt),ht=u(t),W=s(t,"P",{"data-svelte-h":!0}),a(W)!=="svelte-17xtxim"&&(W.innerHTML=Yt),pt=u(t),I=s(t,"P",{"data-svelte-h":!0}),a(I)!=="svelte-12ctt7m"&&(I.textContent=At),dt=u(t),N=s(t,"P",{"data-svelte-h":!0}),a(N)!=="svelte-qd8y13"&&(N.innerHTML=Rt),mt=u(t),O=s(t,"P",{"data-svelte-h":!0}),a(O)!=="svelte-1xbjy19"&&(O.textContent=Ft),ct=u(t),V=s(t,"P",{"data-svelte-h":!0}),a(V)!=="svelte-q822zg"&&(V.innerHTML=zt),this.h()},h(){st.a=null,$t(L,"class","language-undefined")},m(t,e){i(t,r,e),i(t,j,e),i(t,h,e),i(t,Y,e),i(t,p,e),i(t,A,e),i(t,d,e),i(t,R,e),i(t,m,e),i(t,F,e),i(t,c,e),i(t,z,e),i(t,f,e),i(t,B,e),i(t,b,e),i(t,E,e),i(t,w,e),i(t,U,e),i(t,v,e),i(t,Q,e),i(t,y,e),i(t,Z,e),i(t,g,e),i(t,K,e),i(t,x,e),i(t,J,e),i(t,C,e),i(t,X,e),i(t,H,e),i(t,$,e),i(t,_,e),i(t,tt,e),i(t,T,e),i(t,et,e),i(t,q,e),i(t,ot,e),i(t,M,e),i(t,it,e),i(t,k,e),i(t,lt,e),i(t,L,e),st.m(Et,L),i(t,nt,e),i(t,P,e),i(t,at,e),i(t,G,e),i(t,ut,e),i(t,S,e),i(t,rt,e),i(t,D,e),i(t,ht,e),i(t,W,e),i(t,pt,e),i(t,I,e),i(t,dt,e),i(t,N,e),i(t,mt,e),i(t,O,e),i(t,ct,e),i(t,V,e)},p:ft,i:ft,o:ft,d(t){t&&(o(r),o(j),o(h),o(Y),o(p),o(A),o(d),o(R),o(m),o(F),o(c),o(z),o(f),o(B),o(b),o(E),o(w),o(U),o(v),o(Q),o(y),o(Z),o(g),o(K),o(x),o(J),o(C),o(X),o(H),o($),o(_),o(tt),o(T),o(et),o(q),o(ot),o(M),o(it),o(k),o(lt),o(L),o(nt),o(P),o(at),o(G),o(ut),o(S),o(rt),o(D),o(ht),o(W),o(pt),o(I),o(dt),o(N),o(mt),o(O),o(ct),o(V))}}}const ie={title:"How to create and host a HTML website for free using GitHub Pages",date:"May 14, 2021",cover:"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",excerpt:"In this blog post, I will show you how to create and host a basic HTML website for free using GitHub Pages."};class le extends Qt{constructor(r){super(),Zt(this,r,null,te,Ut,{})}}export{le as default,ie as metadata};
