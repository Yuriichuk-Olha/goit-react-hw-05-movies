"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[473],{383:function(e,t,r){r.d(t,{N:function(){return i}});var n=r(861),a=r(757),c=r.n(a),s=r(243),i=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/".concat(t),{method:"get",params:{api_key:"f5a68a81db900311929f7e0e465c0c04",query:r}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},473:function(e,t,r){r.r(t);var n=r(439),a=r(383),c=r(791),s=r(689),i=r(87),o=r(184);t.default=function(){var e=(0,s.TH)(),t=(0,s.UO)().movieId,r=(0,c.useState)(null),l=(0,n.Z)(r,2),u=l[0],h=l[1];if((0,c.useEffect)((function(){(0,a.N)("movie/".concat(t)).then((function(e){h(e)})).catch((function(e){return console.log(e)}))}),[t]),!u)return(0,o.jsx)("div",{children:"Loading..."});var d=u.title,p=u.overview,v=u.popularity,f=u.genres,j=u.release_date,x=u.poster_path,m=u.vote_average;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.rU,{to:e.state,children:"Back"}),(0,o.jsx)("h1",{children:d}),(0,o.jsx)("img",{alt:x,src:"https://image.tmdb.org/t/p/w500/".concat(x),width:"250"}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsxs)("p",{children:[" ",p]}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:f?f.map((function(e){return e.name})).join(", "):" "}),(0,o.jsxs)("p",{children:["Release date: ",j]}),(0,o.jsxs)("p",{children:["Popularity: ",v]}),(0,o.jsxs)("p",{children:["Vote average: ",m]}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(t,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(t,"/reviews"),children:"Reviews"})})]}),(0,o.jsx)(c.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=473.5b622096.chunk.js.map