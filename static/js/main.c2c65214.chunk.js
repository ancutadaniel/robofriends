(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),o=n.n(s),i=(n(13),n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),a=n(3),h=n(0),l=function(e){var t=e.id,n=e.name,r=(e.username,e.email);return Object(h.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(t,"?200X200}"),alt:"robots"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:n}),Object(h.jsx)("p",{children:r})]})]})},j=function(e){return e.robots.map((function(e){return Object(h.jsx)(l,{id:e.id,name:e.name,username:e.username,email:e.email},e.id)}))},b=function(e){var t=e.search;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},u=function(e){return Object(h.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"},children:e.children})},d=n(5),O=n(6),f=n(8),p=n(7),m=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),console.log(e),console.log(t)}},{key:"render",value:function(){return Object(h.jsx)("div",{children:this.props.hasError?Object(h.jsx)("h1",{children:"Opps. There is an error"}):this.props.children})}}]),n}(r.Component),x=(n(16),function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),o=Object(a.a)(s,2),i=o[0],l=o[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]);var d=i.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsx)("div",{children:i.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(h.jsx)(b,{search:function(e){c(e.target.value)}}),Object(h.jsx)(u,{children:Object(h.jsx)(m,{children:Object(h.jsx)(j,{robots:d})})})]}):Object(h.jsx)("h1",{children:"Loading..."})})});o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),i()}},[[17,1,2]]]);
//# sourceMappingURL=main.c2c65214.chunk.js.map