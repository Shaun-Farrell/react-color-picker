(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(6),i=n.n(o),u=(n(12),n(2)),s=n(3),l=function(t,e,n,a){var c=(t-e)/n,r=Math.round(255*c);return a?255-r:r},d=function(t){var e=t.toString(16);return 1===e.length?"0"+e:e},f=function(t,e,n){return d(t)+d(e)+d(n)},j=function(t,e,n,a,c,r){var o,i=t,u=(i=i<0?0:i>r?r:i)/r,s=(o=u)>=.75||o<=.15?255:o>.6&&o<.75?l(o,.6,.15,!1):o>.15&&o<=.3?l(o,.15,.15,!0):0,d=function(t){return t>.3&&t<=.45?l(t,.3,.15,!1):t>.75&&t<=1?l(t,.75,.25,!0):t<=.3?0:255}(u),j=function(t){return t>=0&&t<.15?l(t,0,.15,!1):t>.45&&t<.6?l(t,.45,.15,!0):t>.6?0:255}(u);e([s,d,j]),a({y:i-10}),c(),n("#".concat(f(s,d,j)))},v=function(t,e,n,a,c,r){var o=t.x,i=t.y;i=i<0?0:i>c?c:i;var u=function(t,e){var n=[t[0],t[1],t[2]];return[t[0]-Math.round(n[0]*e),t[1]-Math.round(n[1]*e),t[2]-Math.round(n[2]*e)]}(function(t,e){var n=[255-t[0],255-t[1],255-t[2]];return[255-Math.round(n[0]*e),255-Math.round(n[1]*e),255-Math.round(n[2]*e)]}(a,(o=o<0?0:o>r?r:o)/r),i/c);e("#".concat(f(u[0],u[1],u[2]))),n({x:o-10,y:i-10})},b=function(t,e,n,a){var c=t.createLinearGradient(0,0,0,t.canvas.height),r=a/255*e,o=255-n[0]*(r/255),i=255-n[1]*(r/255),u=255-n[2]*(r/255);c.addColorStop(0,"rgb(".concat(Math.round(o),", ").concat(Math.round(i),", ").concat(Math.round(u),")")),c.addColorStop(1,"rgb(0, 0, 0)"),t.fillStyle=c,t.fillRect(e,0,1,t.canvas.height)},O=(n(5),350);function h(){var t=Object(c.useRef)(null),e=Object(c.useRef)(null),n=Object(c.useState)("#FF0000"),r=Object(s.a)(n,2),o=r[0],i=r[1],l=Object(c.useState)({main:!1,panel:!1}),d=Object(s.a)(l,2),f=d[0],h=d[1],p=Object(c.useState)([255,0,0]),x=Object(s.a)(p,2),g=x[0],M=x[1],m=Object(c.useState)({x:340,y:-10}),S=Object(s.a)(m,2),y=S[0],C=S[1],N=Object(c.useState)({y:-10}),E=Object(s.a)(N,2),F=E[0],k=E[1],w=function(){return C({x:340,y:-10})};return Object(c.useEffect)((function(){for(var n=t.current,a=null===n||void 0===n?void 0:n.getContext("2d"),c=[255,255,255],r=[c[0]-g[0],c[1]-g[1],c[2]-g[2]],o=a.canvas.width,i=0;i<=o;i++)b(a,i,r,o);var u=e.current,s=null===u||void 0===u?void 0:u.getContext("2d"),l=a.createLinearGradient(0,0,0,s.canvas.height);l.addColorStop(0,"rgb(255, 0, 0)"),l.addColorStop(.15,"rgb(255, 0, 255)"),l.addColorStop(.3,"rgb(0, 0, 255)"),l.addColorStop(.45,"rgb(0, 255, 255)"),l.addColorStop(.6,"rgb(0, 255, 0)"),l.addColorStop(.75,"rgb(255, 255, 0)"),l.addColorStop(1,"rgb(255, 0, 0)"),s.fillStyle=l,s.fillRect(0,0,s.canvas.width,s.canvas.height)}),[g]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"relative-container",children:[Object(a.jsx)("canvas",{onMouseDown:function(t){t.preventDefault();var e=t.nativeEvent.offsetX,n=t.nativeEvent.offsetY;h((function(t){return Object(u.a)(Object(u.a)({},t),{},{main:!0})})),v({x:e,y:n},i,C,g,O,O)},onMouseUp:function(){return h((function(t){return Object(u.a)(Object(u.a)({},t),{},{main:!1})}))},onMouseOut:function(){return h((function(t){return Object(u.a)(Object(u.a)({},t),{},{main:!1})}))},onMouseMove:function(t){f.main&&v({x:t.nativeEvent.offsetX,y:t.nativeEvent.offsetY},i,C,g,O,O)},className:"canvas","data-testid":"canvas",ref:t}),Object(a.jsx)("div",{className:"circle",style:{top:y.y,left:y.x}})]}),Object(a.jsxs)("div",{className:"relative-container",children:[Object(a.jsx)("canvas",{onMouseDown:function(t){t.preventDefault(),h((function(t){return Object(u.a)(Object(u.a)({},t),{},{panel:!0})})),j(t.nativeEvent.offsetY,M,i,k,w,O)},onMouseUp:function(){return h((function(t){return Object(u.a)(Object(u.a)({},t),{},{panel:!1})}))},onMouseOut:function(){return h((function(t){return Object(u.a)(Object(u.a)({},t),{},{panel:!1})}))},onMouseMove:function(t){f.panel&&j(t.nativeEvent.offsetY,M,i,k,w,O)},className:"canvasPanel","data-testid":"canvasPanel",ref:e}),Object(a.jsx)("div",{className:"circle",style:{top:F.y,left:30}})]})]}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"label",children:"HEX: "}),Object(a.jsx)("div",{className:"hex",children:o}),Object(a.jsx)("div",{className:"current",style:{backgroundColor:o}})]})]})}var p=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Colour Picker"}),Object(a.jsx)(h,{})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()},5:function(t,e,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.3e63255b.chunk.js.map