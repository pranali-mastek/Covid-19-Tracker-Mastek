(this["webpackJsonpcovid-19_tracker"]=this["webpackJsonpcovid-19_tracker"]||[]).push([[0],{27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},33:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=(a(32),a(10)),i=(a(33),a(5)),s=a(25),u=(a(34),a(8)),d=a.n(u),m=a(26),g=a(9);var h=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),u=Object(c.a)(o,2),h=u[0],f=u[1],E=Object(n.useState)(""),v=Object(c.a)(E,2),p=v[0],y=v[1];Object(n.useEffect)((function(){d.a.all([d.a.get("https://corona.lmao.ninja/v2/all"),d.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){console.log(e[0].data),console.log(e[1].data),l(e[0].data),f(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var w=new Date(parseInt(a.updated)).toString(),x=h.filter((function(e){return""!==p?e.country.toLowerCase().includes(p):e})).map((function(e,t){return r.a.createElement(i.a,{key:t,bg:"light",text:"dark",className:"text-center",style:{margin:"10px"}},r.a.createElement(i.a.Img,{variant:"top",src:e.countryInfo.flag,style:{height:"200px"}}),r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,null,e.country),r.a.createElement(i.a.Text,null,"Cases ",e.cases),r.a.createElement(i.a.Text,null,"Deaths ",e.deaths),r.a.createElement(i.a.Text,null,"Recovered ",e.recovered),r.a.createElement(i.a.Text,null,"Today's cases ",e.todayCases),r.a.createElement(i.a.Text,null,"Today's deaths ",e.todayDeaths),r.a.createElement(i.a.Text,null,"Active ",e.active),r.a.createElement(i.a.Text,null,"Critical ",e.critical)))}));return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h2",{style:{textAlign:"center",color:"white"}},"Covid-19 Live Status "),r.a.createElement("br",null),r.a.createElement(s.a,{style:{margin:"10px"}},r.a.createElement(i.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,null,"Cases"),r.a.createElement(i.a.Text,null,a.cases)),r.a.createElement(i.a.Footer,null,r.a.createElement("small",null,"Last updated ",w))),r.a.createElement(i.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,null,"Deaths"),r.a.createElement(i.a.Text,null,a.deaths)),r.a.createElement(i.a.Footer,null,r.a.createElement("small",null,"Last updated 3 mins ago"))),r.a.createElement(i.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,null,"Recovered"),r.a.createElement(i.a.Text,null,a.recovered)),r.a.createElement(i.a.Footer,null,r.a.createElement("small",null,"Last updated 3 mins ago")))),r.a.createElement("br",null),r.a.createElement(g.a,{style:{margin:"10px"}},r.a.createElement(g.a.Group,{controlId:"formGroupSearch"},r.a.createElement(g.a.Control,{type:"email",placeholder:"Search Country",onChange:function(e){return y(e.target.value)}}))),r.a.createElement(m.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},x))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){navigator.serviceWorker.register("/serviceWorker.js").then((function(e){console.log("Registration succeeded. Scope is "+e.scope)})).catch((function(e){console.log("SW registration failed: ",e)}));var t="".concat("","/serviceWorker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.3b817a39.chunk.js.map