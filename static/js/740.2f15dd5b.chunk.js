"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{383:function(e,t,n){n.d(t,{N:function(){return c}});var r=n(861),u=n(757),a=n.n(u),o=n(243),c=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/".concat(t),{method:"get",params:{api_key:"f5a68a81db900311929f7e0e465c0c04",query:n}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},740:function(e,t,n){n.r(t);var r=n(439),u=n(383),a=n(791),o=n(689),c=n(87),i=n(184);t.default=function(){var e,t=(0,o.TH)(),n=(0,a.useState)([]),s=(0,r.Z)(n,2),l=s[0],f=s[1],h=(0,c.lr)(),p=(0,r.Z)(h,2),m=p[0],d=p[1],v=null!==(e=m.get("query"))&&void 0!==e?e:" ";(0,a.useEffect)((function(){v&&(0,u.N)("/search/movie",v).then((function(e){return 0===e.results.length?"Sorry, but nothing was found":f(e.results)})).catch((function(e){return console.log(e)}))}),[v]);return console.log(t),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("input",{name:"search",type:"text",value:v,onChange:function(e){var t=e.target.value.trim();if(console.log(t),""===t)return d({});d({query:t})}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]}),(0,i.jsx)("ul",{children:l.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=740.2f15dd5b.chunk.js.map