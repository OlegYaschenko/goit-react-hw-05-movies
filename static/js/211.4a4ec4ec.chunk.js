"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[211],{725:function(t,n,r){r.d(n,{s:function(){return c}});var e=r(6871),a=r(501),u=r(184);function c(t){var n=t.movies,r=(0,e.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){var n=t.id,e=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:e})},n)}))})})}},5211:function(t,n,r){r.r(n),r.d(n,{default:function(){return f}});var e=r(885),a=r(2791),u=r(501),c=r(184);function i(){var t=(0,u.lr)(),n=(0,e.Z)(t,2)[1];return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault(),n({query:t.target.search.value}),t.target.reset()},children:[(0,c.jsx)("input",{type:"text",name:"search"}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})})}var o=r(4390),s=r(725),f=function(){var t=(0,a.useState)(null),n=(0,e.Z)(t,2),r=n[0],f=n[1],p=(0,u.lr)(),d=(0,e.Z)(p,1)[0];return(0,a.useEffect)((function(){var t=d.get("query");t&&o.XT(t).then((function(t){return f(t)}))}),[d]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{}),r&&(0,c.jsx)(s.s,{movies:r}),0===(null===r||void 0===r?void 0:r.length)&&(0,c.jsx)("p",{children:"Nothing is found"})]})}},4390:function(t,n,r){r.d(n,{Df:function(){return s},IQ:function(){return p},Jh:function(){return d},XT:function(){return v},rs:function(){return f}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=82c1ce3c1871a305a32604bda0daa5b4",s=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n).concat(o,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits").concat(o,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews").concat(o,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie/".concat(o,"&query=").concat(n,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=211.4a4ec4ec.chunk.js.map