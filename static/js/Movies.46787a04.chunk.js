"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[249],{4560:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(3504),o="RenderMovieList_item__vSc4s",i=e(184),a=function(n){var t=n.arrayOfMovies,e=n.onClick;return(0,i.jsx)("ul",{children:t.map((function(n){var t=n.id,a=n.title;return(0,i.jsx)("li",{className:o,children:(0,i.jsx)(r.rU,{onClick:e,to:"/movies/".concat(t),children:a})},t)}))})}},6610:function(n,t,e){e.r(t),e.d(t,{default:function(){return Mn}});var r=e(2982),o=e(5861),i=e(885),a=e(7757),u=e.n(a),s=e(2791),c=e(4569),f=e.n(c),l=e(6871),d=e(4560),p="Searchbar_container__tv3qG",m="Searchbar_input__19umw",v="Searchbar_button__nkcjk",h=e(184),y=function(n){var t=n.onSubmit,e=n.query,r=n.onChange;return(0,h.jsx)("div",{className:p,children:(0,h.jsxs)("form",{onSubmit:t,children:[(0,h.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:e,onChange:r}),(0,h.jsx)("button",{type:"submit",className:v,children:"Search"})]})})};var b={data:""},g=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||b},x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,T=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,A=function n(t,e){var r="",o="",i="",a=function(a){var s=t[a];"@"==a[0]?"i"==a[1]?r=a+" "+s+";":o+="f"==a[1]?n(s,a):a+"{"+n(s,"k"==a[1]?"":e)+"}":"object"==typeof s?o+=n(s,e?e.replace(/([^,])+/g,(function(n){return a.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):a):null!=s&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(a,s):a+":"+s+";"),u=a};for(var u in t)a(u);return r+(e&&i?e+"{"+i+"}":i)+o},E={},w=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},_=function(n,t,e,r,o){var i,a,u,s=w(n),c=E[s]||(E[s]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(s));if(!E[c]){var f=s!==n?n:function(n){for(var t,e,r=[{}];t=x.exec(n.replace(T,""));)t[4]?r.shift():t[3]?(e=t[3].replace(S," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(S," ").trim();return r[0]}(n);E[c]=A(o?(u=f,(a="@keyframes "+c)in(i={})?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,i):f,e?"":"."+c)}return function(n,t,e){-1==t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(E[c],t,r),c},O=function(n,t,e){return n.reduce((function(n,r,o){var i=t[o];if(i&&i.call){var a=i(e),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=u?"."+u:a&&"object"==typeof a?a.props?"":A(a,""):!1===a?"":a}return n+r+(null==i?"":i)}),"")};function j(n){var t=this||{},e=n.call?n(t.p):n;return _(e.unshift?e.raw?O(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,g(t.target),t.g,t.o,t.k)}j.bind({g:1});var D,k,P,U=j.bind({k:1});function C(n,t){var e=this||{};return function(){var r=arguments;function o(i,a){var u=Object.assign({},i),s=u.className||o.className;e.p=Object.assign({theme:k&&k()},u),e.o=/ *go\d+/.test(s),u.className=j.apply(e,r)+(s?" "+s:""),t&&(u.ref=a);var c=n;return n[0]&&(c=u.as||n,delete u.as),P&&c[0]&&P(u),D(c,u)}return t?t(o):o}}function I(){return I=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},I.apply(this,arguments)}function M(n,t){return t||(t=n.slice(0)),n.raw=t,n}var N,R=function(n,t){return function(n){return"function"===typeof n}(n)?n(t):n},Z=function(){var n=0;return function(){return(++n).toString()}}(),z=function(){var n=void 0;return function(){if(void 0===n&&"undefined"!==typeof window){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}();!function(n){n[n.ADD_TOAST=0]="ADD_TOAST",n[n.UPDATE_TOAST=1]="UPDATE_TOAST",n[n.UPSERT_TOAST=2]="UPSERT_TOAST",n[n.DISMISS_TOAST=3]="DISMISS_TOAST",n[n.REMOVE_TOAST=4]="REMOVE_TOAST",n[n.START_PAUSE=5]="START_PAUSE",n[n.END_PAUSE=6]="END_PAUSE"}(N||(N={}));var q=new Map,F=function(n){if(!q.has(n)){var t=setTimeout((function(){q.delete(n),B({type:N.REMOVE_TOAST,toastId:n})}),1e3);q.set(n,t)}},L=function n(t,e){switch(e.type){case N.ADD_TOAST:return I({},t,{toasts:[e.toast].concat(t.toasts).slice(0,20)});case N.UPDATE_TOAST:return e.toast.id&&function(n){var t=q.get(n);t&&clearTimeout(t)}(e.toast.id),I({},t,{toasts:t.toasts.map((function(n){return n.id===e.toast.id?I({},n,e.toast):n}))});case N.UPSERT_TOAST:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:N.UPDATE_TOAST,toast:r}):n(t,{type:N.ADD_TOAST,toast:r});case N.DISMISS_TOAST:var o=e.toastId;return o?F(o):t.toasts.forEach((function(n){F(n.id)})),I({},t,{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?I({},n,{visible:!1}):n}))});case N.REMOVE_TOAST:return void 0===e.toastId?I({},t,{toasts:[]}):I({},t,{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case N.START_PAUSE:return I({},t,{pausedAt:e.time});case N.END_PAUSE:var i=e.time-(t.pausedAt||0);return I({},t,{pausedAt:void 0,toasts:t.toasts.map((function(n){return I({},n,{pauseDuration:n.pauseDuration+i})}))})}},V=[],H={toasts:[],pausedAt:void 0},B=function(n){H=L(H,n),V.forEach((function(n){n(H)}))},G={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Y=function(n){return function(t,e){var r=function(n,t,e){return void 0===t&&(t="blank"),I({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e,{id:(null==e?void 0:e.id)||Z()})}(t,n,e);return B({type:N.UPSERT_TOAST,toast:r}),r.id}},$=function(n,t){return Y("blank")(n,t)};$.error=Y("error"),$.success=Y("success"),$.loading=Y("loading"),$.custom=Y("custom"),$.dismiss=function(n){B({type:N.DISMISS_TOAST,toastId:n})},$.remove=function(n){return B({type:N.REMOVE_TOAST,toastId:n})},$.promise=function(n,t,e){var r=$.loading(t.loading,I({},e,null==e?void 0:e.loading));return n.then((function(n){return $.success(R(t.success,n),I({id:r},e,null==e?void 0:e.success)),n})).catch((function(n){$.error(R(t.error,n),I({id:r},e,null==e?void 0:e.error))})),n};var J=function(n){var t=function(n){void 0===n&&(n={});var t=(0,s.useState)(H),e=t[0],r=t[1];(0,s.useEffect)((function(){return V.push(r),function(){var n=V.indexOf(r);n>-1&&V.splice(n,1)}}),[e]);var o=e.toasts.map((function(t){var e,r,o;return I({},n,n[t.type],t,{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==(r=n)?void 0:r.duration)||G[t.type],style:I({},n.style,null==(o=n[t.type])?void 0:o.style,t.style)})}));return I({},e,{toasts:o})}(n),e=t.toasts,r=t.pausedAt;(0,s.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return $.dismiss(t.id)}),e);t.visible&&$.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var o=(0,s.useMemo)((function(){return{startPause:function(){B({type:N.START_PAUSE,time:Date.now()})},endPause:function(){r&&B({type:N.END_PAUSE,time:Date.now()})},updateHeight:function(n,t){return B({type:N.UPDATE_TOAST,toast:{id:n,height:t}})},calculateOffset:function(n,t){var r,o=t||{},i=o.reverseOrder,a=void 0!==i&&i,u=o.gutter,s=void 0===u?8:u,c=o.defaultPosition,f=e.filter((function(t){return(t.position||c)===(n.position||c)&&t.height})),l=f.findIndex((function(t){return t.id===n.id})),d=f.filter((function(n,t){return t<l&&n.visible})).length,p=(r=f.filter((function(n){return n.visible}))).slice.apply(r,a?[d+1]:[0,d]).reduce((function(n,t){return n+(t.height||0)+s}),0);return p}}}),[e,r]);return{toasts:e,handlers:o}};function K(){var n=M(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return K=function(){return n},n}function Q(){var n=M(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return Q=function(){return n},n}function W(){var n=M(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return W=function(){return n},n}function X(){var n=M(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return X=function(){return n},n}var nn=U(X()),tn=U(W()),en=U(Q()),rn=C("div")(K(),(function(n){return n.primary||"#ff4b4b"}),nn,tn,(function(n){return n.secondary||"#fff"}),en);function on(){var n=M(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return on=function(){return n},n}function an(){var n=M(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return an=function(){return n},n}var un=U(an()),sn=C("div")(on(),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),un);function cn(){var n=M(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return cn=function(){return n},n}function fn(){var n=M(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return fn=function(){return n},n}function ln(){var n=M(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return ln=function(){return n},n}var dn=U(ln()),pn=U(fn()),mn=C("div")(cn(),(function(n){return n.primary||"#61d345"}),dn,pn,(function(n){return n.secondary||"#fff"}));function vn(){var n=M(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return vn=function(){return n},n}function hn(){var n=M(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return hn=function(){return n},n}function yn(){var n=M(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return yn=function(){return n},n}function bn(){var n=M(["\n  position: absolute;\n"]);return bn=function(){return n},n}var gn=C("div")(bn()),xn=C("div")(yn()),Tn=U(hn()),Sn=C("div")(vn(),Tn),An=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"===typeof e?(0,s.createElement)(Sn,null,e):e:"blank"===r?null:(0,s.createElement)(xn,null,(0,s.createElement)(sn,Object.assign({},o)),"loading"!==r&&(0,s.createElement)(gn,null,"error"===r?(0,s.createElement)(rn,Object.assign({},o)):(0,s.createElement)(mn,Object.assign({},o))))};function En(){var n=M(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return En=function(){return n},n}function wn(){var n=M(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return wn=function(){return n},n}var _n=function(n){return"\n0% {transform: translate3d(0,"+-200*n+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},On=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*n+"%,-1px) scale(.6); opacity:0;}\n"},jn=C("div",s.forwardRef)(wn()),Dn=C("div")(En()),kn=(0,s.memo)((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,i=null!=t&&t.height?function(n,t){var e=n.includes("top")?1:-1,r=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[_n(e),On(e)],o=r[1];return{animation:t?U(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":U(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(t.position||e||"top-center",t.visible):{opacity:0},a=(0,s.createElement)(An,{toast:t}),u=(0,s.createElement)(Dn,Object.assign({},t.ariaProps),R(t.message,t));return(0,s.createElement)(jn,{className:t.className,style:I({},i,r,t.style)},"function"===typeof o?o({icon:a,message:u}):(0,s.createElement)(s.Fragment,null,a,u))}));function Pn(){var n=M(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return Pn=function(){return n},n}!function(n,t,e,r){A.p=t,D=n,k=e,P=r}(s.createElement);var Un=j(Pn()),Cn=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,i=n.gutter,a=n.children,u=n.containerStyle,c=n.containerClassName,f=J(o),l=f.toasts,d=f.handlers;return(0,s.createElement)("div",{style:I({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map((function(n){var e,o=n.position||r,u=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return I({left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+t*(e?1:-1)+"px)"},r,o)}(o,d.calculateOffset(n,{reverseOrder:t,gutter:i,defaultPosition:r})),c=n.height?void 0:(e=function(t){d.updateHeight(n.id,t.height)},function(n){n&&setTimeout((function(){var t=n.getBoundingClientRect();e(t)}))});return(0,s.createElement)("div",{ref:c,className:n.visible?Un:"",key:n.id,style:u},"custom"===n.type?R(n.message,n):a?a(n):(0,s.createElement)(kn,{toast:n,position:o}))})))},In=$,Mn=function(n){var t=n.setPathToGoBack,e=(0,s.useState)(""),a=(0,i.Z)(e,2),c=a[0],p=a[1],m=(0,s.useState)([]),v=(0,i.Z)(m,2),b=v[0],g=v[1],x=(0,l.s0)(),T=(0,l.TH)(),S=(0,s.useState)(!1),A=(0,i.Z)(S,2),E=A[0],w=A[1],_=(0,s.useCallback)((function(){return T.search.slice(7,T.search.length)}),[T.search]);(0,s.useEffect)((function(){var n=_();if(console.log(n),n){p(n);var t=O(n);j(t)}}),[_]);var O=function(n){return f().defaults.baseURL="https://api.themoviedb.org/3/search/movie?api_key=81b3ecea3e846c75ec6e45ca643cbb3c&query=".concat(n),f().get()},j=function(){var n=(0,o.Z)(u().mark((function n(t){var e,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t;case 2:if(0!==(e=n.sent).data.results.length){n.next=7;break}return p(""),w(!0),n.abrupt("return");case 7:o=e.data.results.map((function(n){return{title:n.title,id:n.id}})),g((0,r.Z)(o));case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[(0,h.jsx)(y,{onSubmit:function(n){if(w(!1),n.preventDefault(),g([]),c){var t=O(c);j(t),x("".concat(T.pathname,"?query=").concat(c)),p("")}else In.error("nothing to show, fill input",{duration:1500,position:"top-left"})},query:c,onChange:function(n){p(n.currentTarget.value)}}),E&&(0,h.jsx)("h2",{children:"no movies found, try something else"}),b&&(0,h.jsx)(d.Z,{arrayOfMovies:b,onClick:function(){t("".concat(T.pathname).concat(T.search))}}),(0,h.jsx)(Cn,{})]})}},2982:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(907);var o=e(181);function i(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,o.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=Movies.46787a04.chunk.js.map