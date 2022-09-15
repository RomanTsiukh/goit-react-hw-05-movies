"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[986],{9055:function(n,e,t){t.d(e,{x:function(){return o}});var r=t(6444),c=t(407),o=(0,r.ZP)("div")(c.$_,c.Dh,c.bK,c.GQ,c.cp,c.Cg,c.FK)},854:function(n,e,t){var r=t(5243),c=t(9055),o=t(184);e.Z=function(){return(0,o.jsx)(c.x,{display:"flex",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(r.g4,{height:"80",width:"80",color:"#ff4d00",ariaLabel:"three-dots-loading"})})}},7986:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,c,o,a,s,i=t(5861),u=t(885),l=t(7757),p=t.n(l),d=t(501),f=t(6871),h=t(2791),x=t(861),v=t(4390),m=t(168),g=t(6444),b=g.ZP.div(r||(r=(0,m.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  padding: ","px;\n  border-bottom: 2px solid black;\n"])),(function(n){return n.theme.space[4]})),j=g.ZP.img(c||(c=(0,m.Z)(["\n  height: 300px;\n"]))),k=g.ZP.h1(o||(o=(0,m.Z)(["\n  font-size: ",";\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.space[3]})),Z=g.ZP.h2(a||(a=(0,m.Z)(["\n  font-size: ",";\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[3]})),w=g.ZP.h2(s||(s=(0,m.Z)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.normal})),y=t(9055),_=t(184),z=function(n){var e=n.movie,t=e.poster_path,r=e.title,c=e.vote_average,o=e.overview,a=e.genres,s=e.release_date;return(0,_.jsxs)(b,{children:[(0,_.jsx)(j,{src:t?"https://image.tmdb.org/t/p/w500/"+t:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",alt:r}),(0,_.jsxs)(y.x,{pl:"4",children:[(0,_.jsxs)(y.x,{pb:"4",children:[(0,_.jsxs)(k,{children:[r," (",s.slice(0,4),")"]}),(0,_.jsxs)("div",{children:["User Score: ",Math.round(c),"%"]})]}),(0,_.jsxs)(y.x,{pb:"4",children:[(0,_.jsx)(Z,{children:"Overview"}),(0,_.jsx)(w,{children:o})]}),(0,_.jsxs)(y.x,{pb:"4",children:[(0,_.jsx)(Z,{children:"Genres"}),(0,_.jsx)(w,{children:a.map((function(n){return n.name})).join(", ")})]})]})]})},P=t(6454),S=t(854),U=function(){var n,e,t=(0,f.UO)().movieId,r=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",c=(0,h.useState)({}),o=(0,u.Z)(c,2),a=o[0],s=o[1],l=(0,h.useState)("idle"),m=(0,u.Z)(l,2),g=m[0],b=m[1];return(0,h.useEffect)((function(){function n(){return(n=(0,i.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b("pending"),n.next=4,(0,v.Pg)(t);case 4:if(e=n.sent,0!==Object.keys(e).length){n.next=8;break}return b("rejected"),n.abrupt("return");case 8:s(e),b("resolved"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0),b("rejected");case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,_.jsxs)(y.x,{as:"div",pt:"4",children:["resolved"===g&&(0,_.jsxs)("div",{children:[(0,_.jsxs)(P.Sp,{to:r,children:[(0,_.jsx)(x._6d,{size:"16px"}),"Go back"]}),(0,_.jsx)(z,{movie:a}),(0,_.jsxs)(P.jp,{children:[(0,_.jsx)(P.Dx,{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(P.zO,{to:"cast",state:r,children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(P.zO,{to:"reviews",state:r,children:"Reviews"})})]})]}),(0,_.jsx)(h.Suspense,{fallback:(0,_.jsx)(S.Z,{}),children:(0,_.jsx)(f.j3,{})})]}),"rejected"===g&&(0,_.jsxs)("div",{children:[(0,_.jsx)(d.rU,{to:"/",children:"Go home"}),(0,_.jsx)("div",{children:"Sorry, there are no details for the movie."})]})]})}},6454:function(n,e,t){t.d(e,{Dx:function(){return d},Sp:function(){return l},jp:function(){return p},zO:function(){return f}});var r,c,o,a,s=t(168),i=t(6444),u=t(501),l=(0,i.ZP)(u.rU)(r||(r=(0,s.Z)(["\n  margin-left: ","px;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  color: ",";\n  gap: ","px;\n  border: 1px solid black;\n  padding: ","px;\n  border-radius: ",";\n\n  :hover,\n  :focus {\n    color: ",";\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.borders.normal})),p=i.ZP.div(c||(c=(0,s.Z)(["\n  border-bottom: 2px solid black;\n  padding: ","px;\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[6]})),d=i.ZP.h2(o||(o=(0,s.Z)(["\n  padding-bottom: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m})),f=(0,i.ZP)(u.rU)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n  color: ",";\n\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.orange}))},4390:function(n,e,t){t.d(e,{Bt:function(){return f},Pg:function(){return p},UN:function(){return h},wr:function(){return l},y:function(){return d}});var r=t(5861),c=t(7757),o=t.n(c),a=t(4569),s=t.n(a),i="6d25a4756e0ff1ccca3eba13a74efa5c",u="movie";s().defaults.baseURL="https://api.themoviedb.org/3/";var l=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("".concat("trending","/").concat(u,"/").concat("day","?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=Number(e),n.next=4,s().get("".concat(u,"/").concat(t,"?api_key=").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("".concat(u,"/").concat(e,"/credits?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("".concat(u,"/").concat(e,"/reviews?api_key=").concat(i));case 3:return t=n.sent,console.log(t.data.results),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("search/movie",{params:{api_key:i,query:e}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=986.a72ea002.chunk.js.map