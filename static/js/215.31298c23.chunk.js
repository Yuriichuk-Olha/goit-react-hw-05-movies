"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{383:function(e,t,n){n.d(t,{N:function(){return u}});var r=n(861),a=n(757),c=n.n(a),o=n(243),u=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/".concat(t),{method:"get",params:{api_key:"f5a68a81db900311929f7e0e465c0c04",query:n}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},215:function(e,t,n){n.r(t);var r=n(439),a=n(383),c=n(791),o=n(689),u=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],s=(0,o.UO)().movieId;return(0,c.useEffect)((function(){s&&(0,a.N)("/movie/".concat(s,"/reviews")).then((function(e){return i(e.results)})).catch((function(e){return console.log(e)}))}),[s]),(0,u.jsx)(u.Fragment,{children:n?n.map((function(e){var t=e.author,n=e.id,r=e.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h2",{children:["Author: ",t]}),(0,u.jsxs)("p",{children:["Content: ",r]})]},n)})):(0,u.jsx)("h3",{children:"We do not have any reviews for this movie."})})}}}]);
//# sourceMappingURL=215.31298c23.chunk.js.map