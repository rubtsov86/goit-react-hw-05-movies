"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{7419:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(5861),a=n(885),s=n(7757),i=n.n(s),c=n(9271),o=n(4569),d=n.n(o),l=n(2791),h=n(1523),v="RenderMovieCard_container__Zxrf2",u="RenderMovieCard_button__fpafE",p="RenderMovieCard_icon__mI2LO",j="RenderMovieCard_imgPoster__EjzrK",x="RenderMovieCard_descriptionWrapper__7jFkI",m="RenderMovieCard_AddContainer__R2MQi";var f=n.p+"static/media/arrow-left2.aab4f4cb76b5866cac53aba872eaf928.svg",_=n(184),b=function(e){var r=e.onClickGoBack,n=e.poster_path,t=e.title,a=e.vote_average,s=e.overview,i=e.genres,c=e.url;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:v,children:[(0,_.jsxs)("div",{className:"poster-wrapper",children:[(0,_.jsxs)("button",{type:"button",className:u,onClick:r,children:[(0,_.jsx)("img",{src:f,width:"15",className:p,alt:"left-arrow"}),"Go back"]}),(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t,className:j})]}),(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)("h2",{children:t}),(0,_.jsxs)("p",{children:["User Score: ",10*a,"%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:s}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:i.map((function(e){return e.name})).join(", ")})]})]}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("h2",{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(h.OL,{to:"".concat(c,"/Cast"),children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(h.OL,{to:"".concat(c,"/Reviews"),children:"Reviews"})})]})]})]})},w=(0,l.lazy)((function(){return n.e(709).then(n.bind(n,855))})),k=(0,l.lazy)((function(){return n.e(753).then(n.bind(n,7919))})),g=function(e){var r=e.pathToGoBack,n=(0,l.useState)({}),s=(0,a.Z)(n,2),o=s[0],h=s[1],v=(0,c.UO)().movieId,u=(0,c.$B)().url,p=(0,c.k6)();(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().defaults.baseURL="https://api.themoviedb.org/3/movie/".concat(v,"?api_key=81b3ecea3e846c75ec6e45ca643cbb3c"),d().get();case 2:r=e.sent,n=r.data,h(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var j=o.poster_path,x=o.title,m=o.vote_average,f=o.overview,g=o.genres;return x&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b,{onClickGoBack:function(){r?p.push(r):p.push("/goit-react-hw-05-movies")},poster_path:j,title:x,vote_average:m,overview:f,genres:g,url:u}),(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),children:(0,_.jsxs)(c.rs,{children:[(0,_.jsx)(c.AW,{path:"".concat(u,"/Cast"),children:(0,_.jsx)(w,{movieId:v})}),(0,_.jsx)(c.AW,{path:"".concat(u,"/Reviews"),children:(0,_.jsx)(k,{movieId:v})})]})})]})}}}]);
//# sourceMappingURL=MoviesCard.645afa0b.chunk.js.map