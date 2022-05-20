"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[946],{4390:function(n,t,e){e.d(t,{Df:function(){return o},IQ:function(){return d},Jh:function(){return p},XT:function(){return f},rs:function(){return l}});var r=e(5861),a=e(7757),i=e.n(a),c=e(4569),s=e.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";var u="?api_key=82c1ce3c1871a305a32604bda0daa5b4",o=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/trending/movie/day".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t).concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t,"/credits").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast.map((function(n){return{name:n.name,character:n.character,profile_path:n.profile_path,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t,"/reviews").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/search/movie".concat(u,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3946:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,i,c,s,u=e(885),o=e(2791),l=e(501),d=e(6871),p=e(4390),f=e(168),h=e(6031),x=h.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid black;\n"]))),v=h.ZP.button(a||(a=(0,f.Z)(["\n  height: 30px;\n  width: 90px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),m=h.ZP.ul(i||(i=(0,f.Z)(["\n  list-style: none;\n"]))),g=h.ZP.li(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100px;\n"]))),j=h.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border-bottom: 1px solid black;\n"]))),b=e(184),w=(0,o.lazy)((function(){return e.e(882).then(e.bind(e,8882))})),Z=(0,o.lazy)((function(){return e.e(567).then(e.bind(e,1567))})),y=function(){var n,t=(0,o.useState)(null),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,o.useState)(null),c=(0,u.Z)(i,2),s=c[0],f=c[1],h=(0,d.UO)().movieId,y=(0,d.s0)(),_=(0,d.TH)();return(0,o.useEffect)((function(){p.rs(h).then((function(n){return a(n)}))}),[h]),(0,o.useEffect)((function(){var n;null!==_&&void 0!==_&&null!==(n=_.state)&&void 0!==n&&n.from&&f(_.state.from)}),[null===_||void 0===_||null===(n=_.state)||void 0===n?void 0:n.from]),r&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{type:"button",onClick:function(){y(s||"/")},children:"Go back"}),(0,b.jsxs)(x,{children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(r.poster_path),alt:""}),(0,b.jsxs)(m,{children:[(0,b.jsxs)(g,{children:[(0,b.jsx)("h2",{children:"".concat(r.title," (").concat(r.release_date.slice(0,4),")")}),(0,b.jsxs)("p",{children:["User Score: ".concat(10*r.vote_average,"%")," "]})]}),(0,b.jsxs)(g,{children:[(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:r.overview})]}),(0,b.jsxs)(g,{children:[(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("p",{children:r.genres.map((function(n){return n.name})).join(" ")})]})]})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)("h3",{children:"Additional information"}),(0,b.jsx)(l.rU,{to:"cast",children:"Cast"}),(0,b.jsx)(l.rU,{to:"reviews",children:"Reviews"})]}),(0,b.jsx)(o.Suspense,{fallback:(0,b.jsx)("p",{children:"Loading..."}),children:(0,b.jsxs)(d.Z5,{children:[(0,b.jsx)(d.AW,{path:"cast",element:(0,b.jsx)(w,{})}),(0,b.jsx)(d.AW,{path:"reviews",element:(0,b.jsx)(Z,{})})]})})]})}}}]);
//# sourceMappingURL=946.6d0a4385.chunk.js.map