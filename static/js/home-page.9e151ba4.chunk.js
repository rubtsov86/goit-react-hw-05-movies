"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{4560:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(1523),a="RenderMovieList_item__vSc4s",i=n(184),o=function(e){var t=e.arrayOfMovies,n=e.onClick;return(0,i.jsx)("ul",{children:t.map((function(e){var t=e.id,o=e.title;return(0,i.jsx)("li",{className:a,children:(0,i.jsx)(r.rU,{onClick:n,to:"/movies/".concat(t),children:o})},t)}))})}},2296:function(e,t,n){n.r(t);var r=n(2982),a=n(5861),i=n(885),o=n(7757),c=n.n(o),u=n(2791),s=n(4569),f=n.n(s),l=n(9271),d=n(4560),h=n(184);t.default=function(e){var t=e.setPathToGoBack,n=(0,u.useState)([]),o=(0,i.Z)(n,2),s=o[0],v=o[1],m=(0,l.TH)();(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day?api_key=81b3ecea3e846c75ec6e45ca643cbb3c",f().get();case 2:t=e.sent,n=t.data.results.map((function(e){return{title:e.title,id:e.id}})),v((0,r.Z)(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Trending today"}),0!==s.length&&(0,h.jsx)(d.Z,{arrayOfMovies:s,onClick:function(){t("".concat(m.pathname))}})]})}},2982:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(907);var a=n(181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=home-page.9e151ba4.chunk.js.map