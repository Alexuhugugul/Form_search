(this["webpackJsonpsearch-form"]=this["webpackJsonpsearch-form"]||[]).push([[0],{33:function(n,e,t){},34:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),c=t(23),i=t.n(c),u=(t(33),t(34),t(2)),a=t(5),s=t(13),d=t(10),f=t.n(d),l=t(24),p=t(25),A=t.n(p);function b(n){return A.a.get(n).then((function(n){return n.data}))}var j,h,g,x,m,O,v,w,S,I,E,B,C,k,Y,Q,J,L=function(n,e){var t=Object(r.useState)(n),o=Object(a.a)(t,2),c=o[0],i=o[1];return Object(r.useEffect)((function(){var t=setTimeout((function(){return i(n)}),e||500);return function(){clearTimeout(t)}}),[n,e]),c},D=function(n,e,t){var o=Object(r.useState)(!1),c=Object(a.a)(o,2),i=c[0],u=c[1],s=Object(r.useState)([]),d=Object(a.a)(s,2),p=d[0],A=d[1];!function(n,e){var t=function(e){"Escape"===e.key&&n(!1)},o=function(t){e.current&&!e.current.contains(t.target)?n(!1):n(!0)};Object(r.useEffect)((function(){return document.addEventListener("keydown",t,!0),document.addEventListener("click",o,!0),function(){document.removeEventListener("keydown",t,!0),document.removeEventListener("click",o,!0)}}))}((function(n){u(n)}),t);var b=L(n,1e3);return Object(r.useEffect)((function(){n.length||(e(),A([]));var t=function(){var t=Object(l.a)(f.a.mark((function t(){var r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(n);case 2:if(!(r=t.sent)){t.next=10;break}return u(!0),t.next=7,R(r);case 7:(o=t.sent)&&e(),A(o);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[b]),{showList:i,listUsers:p}},F=function(n){return b("".concat("https://jsonplaceholder.typicode.com/users")).then((function(e){var t=[];if(n.length)return e.forEach((function(e){-1!==e.name.toUpperCase().indexOf(n.toUpperCase())&&t.push({id:e.id,name:e.name,nickname:e.username})})),t}))},R=function(n){return Promise.all(n.map((function(n){return b("".concat("https://jsonplaceholder.typicode.com/photos","/").concat(n.id)).then((function(e){return Object(s.a)(Object(s.a)({},n),{},{url:e.url})}))})))},q=t(3),N=u.d.div(j||(j=Object(q.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 16px;\n  cursor: pointer;\n  border: 0;\n\n  &:first-child {\n    padding-top: 16px;\n  }\n\n  &:last-child {\n    padding-bottom: 16px;\n  }\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n    border-radius: 0px 0px 8px 8px;\n  }\n"])),(function(n){return n.theme.borderColor})),H=u.d.img(h||(h=Object(q.a)(["\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin-right: 8px;\n  user-select: none;\n"]))),V=u.d.div(g||(g=Object(q.a)([""]))),W=u.d.p(x||(x=Object(q.a)(["\n  font-size: 14px;\n"]))),y=u.d.p(m||(m=Object(q.a)(["\n  font-size: 12px;\n  color: ",";\n"])),(function(n){return n.theme.gray})),U=t(1),z=function(n){var e=n.item,t=n.refInput,o=n.setFullString,c=Object(r.useRef)(null);return Object(U.jsxs)(N,{tabIndex:0,ref:c,onKeyDown:function(n){if("ArrowDown"===n.code){var r,i,u=null===(r=c.current)||void 0===r?void 0:r.nextSibling;if(u)u.focus();else null===(i=t.current)||void 0===i||i.focus()}if("ArrowUp"===n.code){var a,s,d=null===(a=c.current)||void 0===a?void 0:a.previousSibling;if(d)d.focus();else null===(s=t.current)||void 0===s||s.focus()}"Enter"===n.code&&o(e.name)},onClick:function(){o(e.name)},children:[Object(U.jsx)(H,{src:null===e||void 0===e?void 0:e.url,alt:e.name}),Object(U.jsxs)(V,{children:[Object(U.jsx)(W,{children:e.name}),Object(U.jsx)(y,{children:"@".concat(e.nickname)})]})]})},Z=Object(u.e)(O||(O=Object(q.a)(["\n  from {\n    transform: rotate(5deg);\n    }\n\n  to {\n    transform: rotate(360deg);\n    }\n"]))),X=u.d.div(v||(v=Object(q.a)(["\n  background: ",";\n  position: relative;\n  border-radius: 0px 0px 8px 8px;\n  overflow-y: auto;\n  ::-webkit-scrollbar {\n    background: transparent;\n  }\n  opacity: 0;\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.white}),(function(n){return n.isLoading&&Object(u.c)(w||(w=Object(q.a)(['\n      height: 213px;\n      width: 100%;\n      opacity: 1;\n      &::before {\n        content: "";\n        width: 76px;\n        height: 76px;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        background-image: url(',");\n        animation: "," 1.5s infinite;\n      }\n    "])),"data:image/png;base64,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",Z)}),(function(n){return n.showList&&Object(u.c)(S||(S=Object(q.a)(["\n      max-height: 213px;\n      width: 100%;\n      opacity: 1;\n    "])))})),P=function(n){var e=n.searchString,t=n.refDropDown,o=n.refInput,c=n.setFullString,i=n.refContainer,u=Object(r.useState)(!0),s=Object(a.a)(u,2),d=s[0],f=s[1];Object(r.useEffect)((function(){f(!0)}),[e]);var l=D(e,(function(){f(!1)}),i),p=l.showList,A=l.listUsers;return Object(U.jsx)(X,{showList:p,isLoading:d,ref:t,children:!d&&A.map((function(n){return Object(U.jsx)(z,{item:n,refInput:o,setFullString:c},n.id)}))})},T=u.d.div(I||(I=Object(q.a)(["\n  max-width: 400px;\n  margin-top: 15%;\n"]))),G=u.d.input(E||(E=Object(q.a)(["\n  height: 56px;\n  width: 343px;\n  border: none;\n  background: ",";\n  border-bottom: 1px solid ",";\n  border-radius: 6px 6px 0px 0px;\n  padding-left: 56px;\n  font-size: 16px;\n  outline: none;\n"])),(function(n){return n.theme.colorInput}),(function(n){return n.theme.borderColor})),K=u.d.label(B||(B=Object(q.a)([""]))),M=u.d.div(C||(C=Object(q.a)(["\n  position: relative;\n  margin-top: 10px;\n"]))),$=u.d.label(k||(k=Object(q.a)(['\n  &::before {\n    content: "";\n    width: 17px;\n    height: 17px;\n    position: absolute;\n    top: 19px;\n    left: 19px;\n    background-image: url(',");\n  }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF1SURBVHgBlZNNcoJQDMeTaF17g9IbeAQ4iToFZMaF9ASdnkDd8WFn6A28AfYGPYJHcC3DS19AZ5B50JINIQm/989LQGiY67o20WijmG1EnDLzhRBPSpX7w+Fwgh7Du+P7qy0DhN2FvEuS5K0rTw8QrYABP0aEL2kSozzl/RYPfd/fdh7kuoGNxLkUA7CTpulPu8jzvJkuzUHaVaVjapNwxJuKiLA3QcQkzkj7um70bm5NsV05RBn02JigziPMzCAtV5wois59oEZ+agZVdwOwXq+feziwWATWzb2YQYTVvRRFsezhwHgC88ph+DaCuNTjrfK4qadjUqPjrKodYy53pppqIV+91Y4QZHoXWbzrlb6yLDoHQWAppeaKIZRN19VZGsfLTlALZjYN0bIX2jsXV3TkoIfW7s5nGoes0NHij/cB3Jb0KHFRok+Vj62nCeeNy39U9B+rW+Vc/05WW9kgUB+MhoJkMYnQabYp8cGgNmxwS3/ZL6C1vDHNneWMAAAAAElFTkSuQmCC"),_=u.d.div(Y||(Y=Object(q.a)([""]))),nn=function(){var n=Object(r.useState)(""),e=Object(a.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(null),i=Object(r.useRef)(null),u=Object(r.useRef)(null),s=function(n){var e;o(n),null===(e=c.current)||void 0===e||e.focus()};return Object(U.jsxs)(T,{children:[Object(U.jsx)(K,{htmlFor:"searchInput",children:"Search user"}),Object(U.jsxs)(_,{ref:u,children:[Object(U.jsxs)(M,{children:[Object(U.jsx)($,{htmlFor:"searchInput"}),Object(U.jsx)(G,{id:"searchInput",placeholder:"Search",onInput:function(n){o(n.currentTarget.value.toString())},autoComplete:"off",tabIndex:0,onKeyDown:function(n){var e;"ArrowDown"===n.code&&(null===(e=i.current)||void 0===e?void 0:e.children[0]).focus()},ref:c,value:t})]}),Object(U.jsx)(P,{searchString:t,refDropDown:i,refInput:c,setFullString:s,refContainer:u})]})]})},en=u.d.div(Q||(Q=Object(q.a)(["\n  min-height: 100vh;\n  width: 100%;\n  background: ",";\n  display: flex;\n  justify-content: center;\n"])),(function(n){return n.theme.background})),tn=function(n){var e=n.children;return Object(U.jsx)(en,{children:e})},rn={primary:"#36343D",background:"#E5E5E5",white:"#fff",colorInput:"#F9F9F9",borderColor:"#262626",gray:"#98999A"},on=Object(u.b)(J||(J=Object(q.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"])));var cn=function(){return Object(U.jsxs)(u.a,{theme:rn,children:[Object(U.jsx)(on,{}),Object(U.jsx)(tn,{children:Object(U.jsx)(nn,{})})]})};i.a.render(Object(U.jsx)(o.a.StrictMode,{children:Object(U.jsx)(cn,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.f5f2e0ad.chunk.js.map