(this["webpackJsonpcovid-19_tracker"]=this["webpackJsonpcovid-19_tracker"]||[]).push([[0],{27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},33:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(23),c=a.n(r),o=(a(32),a(10)),s=(a(33),a(5)),u=a(25),m=(a(34),a(8)),i=a.n(m),d=a(26),E=a(9);var x=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)([]),m=Object(o.a)(c,2),x=m[0],p=m[1],g=Object(l.useState)(""),h=Object(o.a)(g,2),y=h[0],v=h[1];Object(l.useEffect)((function(){i.a.all([i.a.get("https://corona.lmao.ninja/v2/all"),i.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){console.log(e[0].data),console.log(e[1].data),r(e[0].data),p(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var f=new Date(parseInt(a.updated)).toString(),b=x.filter((function(e){return""!==y?e.country.toLowerCase().includes(y):e})).map((function(e,t){return n.a.createElement(s.a,{key:t,bg:"light",text:"dark",className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Img,{variant:"top",src:e.countryInfo.flag,style:{height:"200px"}}),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,e.country),n.a.createElement(s.a.Text,null,"Cases ",e.cases),n.a.createElement(s.a.Text,null,"Deaths ",e.deaths),n.a.createElement(s.a.Text,null,"Recovered ",e.recovered),n.a.createElement(s.a.Text,null,"Today's cases ",e.todayCases),n.a.createElement(s.a.Text,null,"Today's deaths ",e.todayDeaths),n.a.createElement(s.a.Text,null,"Active ",e.active),n.a.createElement(s.a.Text,null,"Critical ",e.critical)))}));return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h2",{style:{textAlign:"center",color:"white"}},"Covid-19 Live Status "),n.a.createElement("br",null),n.a.createElement(u.a,{style:{margin:"10px"}},n.a.createElement(s.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,"Cases"),n.a.createElement(s.a.Text,null,a.cases)),n.a.createElement(s.a.Footer,null,n.a.createElement("small",null,"Last updated ",f))),n.a.createElement(s.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,"Deaths"),n.a.createElement(s.a.Text,null,a.deaths)),n.a.createElement(s.a.Footer,null,n.a.createElement("small",null,"Last updated 3 mins ago"))),n.a.createElement(s.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,"Recovered"),n.a.createElement(s.a.Text,null,a.recovered)),n.a.createElement(s.a.Footer,null,n.a.createElement("small",null,"Last updated 3 mins ago")))),n.a.createElement("br",null),n.a.createElement(E.a,{style:{margin:"10px"}},n.a.createElement(E.a.Group,{controlId:"formGroupSearch"},n.a.createElement(E.a.Control,{type:"email",placeholder:"Search Country",onChange:function(e){return v(e.target.value)}}))),n.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},b))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.1f7e73bf.chunk.js.map