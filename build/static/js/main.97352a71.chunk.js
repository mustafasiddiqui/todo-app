(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(35)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),c=a(14),r=a.n(c),i=(a(22),a(16)),l=a(11),p=(a(23),function(e){return o.a.createElement("div",{className:"todo"},o.a.createElement("h2",null,e.title))}),s=(a(24),a(15)),u=a.n(s).a.initializeApp({apiKey:"AIzaSyA5Jx7dVziGplCrvLd28mZUNtwGlMJ4hTk",authDomain:"todo-app-8b455.firebaseapp.com",databaseURL:"https://todo-app-8b455.firebaseio.com",projectId:"todo-app-8b455",storageBucket:"todo-app-8b455.appspot.com",messagingSenderId:"250760254302",appId:"1:250760254302:web:ca65ad49ebee279126f5cf"}).firestore();var d=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),d=s[0],m=s[1];return Object(n.useEffect)((function(){console.log("I ran when the component loaded"),u.collection("todos").onSnapshot((function(e){c(e.docs.map((function(e){return e.data().title})))}))}),[]),o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"To-do app made by ","Mustafa"),o.a.createElement("form",null,o.a.createElement("input",{type:"text",value:d,onChange:function(e){return m(e.target.value)}}),o.a.createElement("button",{disabled:!d,type:"submit",onClick:function(e){e.preventDefault(),c([].concat(Object(i.a)(a),[d])),m("")}},"Add Todo")),a.map((function(e,t){return o.a.createElement(p,{title:e,key:t})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.97352a71.chunk.js.map