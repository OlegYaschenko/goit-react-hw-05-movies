"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[300],{2300:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),a=e(2791),u=e(6871),c=e(4390),i=e(184);function o(n){var t=n.review,e=t.author,r=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Author: ".concat(e)}),(0,i.jsx)("p",{children:r})]})}var s=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,u.UO)().movieId;return(0,a.useEffect)((function(){c.Jh(f).then((function(n){return s(n)}))}),[f]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return(0,i.jsx)(o,{review:n},n.id)}))}),0===(null===e||void 0===e?void 0:e.length)&&(0,i.jsx)("p",{children:"We don`t have any reviews for this movies"})]})}},4390:function(n,t,e){e.d(t,{Df:function(){return s},IQ:function(){return p},Jh:function(){return d},XT:function(){return l},rs:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=82c1ce3c1871a305a32604bda0daa5b4",s=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t).concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast.map((function(n){return{name:n.name,character:n.character,profile_path:n.profile_path,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie/".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=300.79375d7d.chunk.js.map