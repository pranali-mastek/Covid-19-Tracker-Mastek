(this["webpackJsonpcovid-19_tracker"]=this["webpackJsonpcovid-19_tracker"]||[]).push([[0],{27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},33:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=(a(32),a(10)),s=(a(33),a(5)),u=a(25),i=(a(34),a(8)),m=a.n(i),d=a(26),E=a(9);var g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),g=i[0],p=i[1],h=Object(n.useState)(""),x=Object(o.a)(h,2),y=x[0],v=x[1];Object(n.useEffect)((function(){m.a.all([m.a.get("https://corona.lmao.ninja/v2/all"),m.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){console.log(e[0].data),console.log(e[1].data),r(e[0].data),p(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var f=new Date(parseInt(a.updated)).toString(),b=g.filter((function(e){return""!==y?e.country.toLowerCase().includes(y):e})).map((function(e,t){return l.a.createElement(s.a,{key:t,bg:"light",text:"dark",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Img,{variant:"top",src:e.countryInfo.flag,style:{height:"200px"}}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,e.country),l.a.createElement(s.a.Text,null,"Cases ",e.cases),l.a.createElement(s.a.Text,null,"Deaths ",e.deaths),l.a.createElement(s.a.Text,null,"Recovered ",e.recovered),l.a.createElement(s.a.Text,null,"Today's cases ",e.todayCases),l.a.createElement(s.a.Text,null,"Today's deaths ",e.todayDeaths),l.a.createElement(s.a.Text,null,"Active ",e.active),l.a.createElement(s.a.Text,null,"Critical ",e.critical)))}));return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h2",{style:{textAlign:"center",color:"white"}},"Covid-19 Live Status "),l.a.createElement("br",null),l.a.createElement(u.a,{style:{margin:"10px"}},l.a.createElement(s.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Cases"),l.a.createElement(s.a.Text,null,a.cases)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",f))),l.a.createElement(s.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Deaths"),l.a.createElement(s.a.Text,null,a.deaths)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated 3 mins ago"))),l.a.createElement(s.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Recovered"),l.a.createElement(s.a.Text,null,a.recovered)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated 3 mins ago")))),l.a.createElement("br",null),l.a.createElement(E.a,{style:{margin:"10px"}},l.a.createElement(E.a.Group,{controlId:"formGroupSearch"},l.a.createElement(E.a.Control,{type:"email",placeholder:"Search Country",onChange:function(e){return v(e.target.value)}}))),l.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},b))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator?window.addEventListener("load",(function(){navigator.serviceWorker.register("worker.js").then((function(e){console.log("Worker registered successful",e.scope)}),(function(e){console.log("Worker registration failed",e)})).catch((function(e){console.log(e)}))})):console.log("Service Worker is not supported by browser.")}},[[27,1,2]]]);
//# sourceMappingURL=main.3055c74b.chunk.js.map