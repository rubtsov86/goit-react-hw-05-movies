"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{7419:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(5861),a=n(885),s=n(7757),c=n.n(s),i=n(9271),o=n(4569),l=n.n(o),d=n(2791),h=n(1523),u="RenderMovieCard_container__Zxrf2",v="RenderMovieCard_button__fpafE",p="RenderMovieCard_icon__mI2LO",j="RenderMovieCard_imgPoster__EjzrK",x="RenderMovieCard_descriptionWrapper__7jFkI";var f=n.p+"static/media/arrow-left2.aab4f4cb76b5866cac53aba872eaf928.svg",m=n(184),_=function(e){var r=e.onClickGoBack,n=e.poster_path,t=e.title,a=e.vote_average,s=e.overview,c=e.genres,i=e.url;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:u,children:[(0,m.jsxs)("div",{className:"poster-wrapper",children:[(0,m.jsxs)("button",{type:"button",className:v,onClick:r,children:[(0,m.jsx)("img",{src:f,width:"15",className:p,alt:"left-arrow"}),"Go back"]}),(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t,className:j})]}),(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("h2",{children:t}),(0,m.jsxs)("p",{children:["User Score: ",10*a,"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:s}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:c.map((function(e){return e.name})).join(", ")})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(h.OL,{to:"".concat(i,"/Cast"),children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(h.OL,{to:"".concat(i,"/Reviews"),children:"Reviews"})})]})]})]})},b=(0,d.lazy)((function(){return n.e(709).then(n.bind(n,855))})),w=(0,d.lazy)((function(){return n.e(753).then(n.bind(n,7919))})),g=function(e){var r=e.data,n=(0,d.useState)({}),s=(0,a.Z)(n,2),o=s[0],h=s[1],u=(0,i.UO)().movieId,v=(0,i.$B)().url,p=(0,i.k6)();(0,d.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(u,"?api_key=81b3ecea3e846c75ec6e45ca643cbb3c"),l().get();case 2:r=e.sent,n=r.data,h(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[u]);var j=o.poster_path,x=o.title,f=o.vote_average,g=o.overview,k=o.genres;return x&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{onClickGoBack:function(){console.log(r),r?p.push(r):p.push("/")},poster_path:j,title:x,vote_average:f,overview:g,genres:k,url:v}),(0,m.jsx)(d.Suspense,{fallback:(0,m.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),children:(0,m.jsxs)(i.rs,{children:[(0,m.jsx)(i.AW,{path:"".concat(v,"/Cast"),children:(0,m.jsx)(b,{movieId:u})}),(0,m.jsx)(i.AW,{path:"".concat(v,"/Reviews"),children:(0,m.jsx)(w,{movieId:u})})]})})]})}}}]);
//# sourceMappingURL=MoviesCard.b8b75063.chunk.js.map