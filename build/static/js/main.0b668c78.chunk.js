(this.webpackJsonpworldranking=this.webpackJsonpworldranking||[]).push([[0],{126:function(e,t,c){"use strict";c.r(t);var n=c(38),a=c(3),r=c.n(a),s=c(10),i=c(2),o=c(1),j=(c(124),c(0)),l=function(){return Object(j.jsx)("section",{className:"hero is-fluid is-info is-small",children:Object(j.jsx)("div",{className:"hero-body",children:Object(j.jsx)("div",{className:"container has-text-centered s-divider",children:Object(j.jsx)("h1",{className:"title",children:"World Ranking Top 20"})})})})},u=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"content has-text-centered",children:[Object(j.jsxs)("p",{children:["\u30c7\u30fc\u30bf\u306f",Object(j.jsx)("a",{href:"https://www.globalnote.jp/",children:"GLOBAL NOTE-\u56fd\u969b\u7d71\u8a08\u30fb\u56fd\u5225\u7d71\u8a08\u5c02\u9580\u30b5\u30a4\u30c8"}),"\u304b\u3089\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u3002"]}),Object(j.jsx)("p",{children:"moriya"})]})})},d=c(6),b=c(39);c(37);function O(e){var t=e.show,c=e.clientX,n=e.clientY,a=e.country,r=e.value;return console.log(n),Object(j.jsx)("div",{children:t&&Object(j.jsxs)("div",{id:"tooltip",style:{top:"".concat(n-150,"px"),left:"".concat(c+20,"px")},children:[a,Object(j.jsx)("br",{}),r]})})}function x(e){var t=e.features,c=e.data,n=Object(o.useState)([]),a=Object(i.a)(n,2),l=a[0],u=a[1];Object(o.useEffect)((function(){Object(s.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/worldCapital.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,u(c);case 7:case"end":return e.stop()}}),e)})))()}),[]);var b=[],x=0;c.map((function(e){l.map((function(t){t.country_code===e.ISO&&(b[x]=t,b[x].value=e.value,x++)}))}));var h=0,f=0,v=630-f-0,p=330-h-0,m=d.a().center([0,0]).translate([v/2,p/2+30]).scale(100),g=d.b().projection(m),y=Object(o.useState)(0),w=Object(i.a)(y,2),S=w[0],k=w[1],N=Object(o.useState)(0),M=Object(i.a)(N,2),X=M[0],Y=M[1],A=Object(o.useState)(!1),B=Object(i.a)(A,2),P=B[0],C=B[1],G=Object(o.useState)(),I=Object(i.a)(G,2),D=I[0],E=I[1],L=Object(o.useState)(0),T=Object(i.a)(L,2),z=T[0],_=T[1],J=function(e){var t=0;return c.map((function(n){n.ISO===e&&(t=25*(n.value-c[c.length-1].value)/(c[0].value-c[c.length-1].value)+5)})),t};return Object(j.jsxs)("div",{select:"#map-container",children:[Object(j.jsx)("svg",{viewBox:"".concat(-f," ").concat(-h," ").concat(v," ").concat(p),children:Object(j.jsxs)("g",{children:[t.map((function(e){return Object(j.jsx)("path",{d:g(e),fill:"white",stroke:"black",strokeWidth:"1",strokeOpacity:"0.5"})})),Object(j.jsx)("g",{children:b.map((function(e){var t=0;return e.lat>40?t=-10:e.lat<-40&&(t=10),e.lat>60?t=-35:e.lat<-60&&(t=35),Object(j.jsx)("g",{transform:"translate(".concat(v/2,",").concat(p/2+30,")"),children:Object(j.jsx)("circle",{cx:e.lon*v/2/180,cy:-e.lat*p/2/90+t,r:J(e.country_code),fill:"red",opacity:"0.5",onMouseOver:function(t){return function(e,t){console.log(e),C(!0),k(e.clientX),Y(e.clientY),E(t.country_code),_(t.value)}(t,e)},onMouseMove:function(e){return function(e){k(e.clientX),Y(e.clientY)}(e)},onMouseOut:function(e){C(!1)}})})}))})]})}),Object(j.jsx)(O,{show:P,clientX:S,clientY:X,country:D,value:z})]})}var h=function(e){var t=e.data,c=Object(o.useState)([]),n=Object(i.a)(c,2),a=n[0],l=n[1];return Object(o.useEffect)((function(){Object(s.a)(r.a.mark((function e(){var t,c,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/worldmap.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=b.a(c,c.objects.worldmap),a=n.features,l(a);case 8:case"end":return e.stop()}}),e)})))()}),[]),null==a?Object(j.jsx)("p",{children:"loading"}):Object(j.jsx)(x,{features:a,data:t})};function f(e){var t=e.scale,c=e.countries,n=t.range(),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(j.jsxs)("g",{children:[Object(j.jsx)("line",{x1:30,y1:r,x2:30,y2:s-15,stroke:"black"}),Object(j.jsx)("g",{children:c.map((function(e,t){return Object(j.jsxs)("g",{children:[Object(j.jsx)("line",{x1:25,y1:12.5+10*t,x2:30,y2:12.5+10*t,stroke:"black"}),Object(j.jsx)("text",{x:15,y:12.5+10*t,textAnchor:"middle",dominantBaseline:"central",fontSize:"8",children:e})]})}))})]})}function v(e){var t=e.scale,c=e.type,n=e.unit,a=210,r=t.range(),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(j.jsxs)("g",{children:[Object(j.jsx)("line",{x1:o,y1:a,x2:l,y2:a,stroke:"black"}),Object(j.jsxs)("g",{children:[t.ticks().map((function(e){return Object(j.jsxs)("g",{transform:"translate(".concat(t(e),",").concat(a,")"),children:[Object(j.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"5",stroke:"black"}),Object(j.jsx)("text",{x:"0",y:"13",textAnchor:"middle",dominantBaseline:"central",fontSize:"8",children:e})]})})),Object(j.jsxs)("text",{x:l+20,y:a,textAnchor:"middle",dominantBaseline:"central",fontSize:"8",children:["(",n[c],")"]})]})]})}function p(e){var t=e.show,c=e.clientX,n=e.clientY,a=e.country,r=e.value;return console.log(n),Object(j.jsx)("div",{children:t&&Object(j.jsxs)("div",{id:"tooltip",style:{top:"".concat(n-150,"px"),left:"".concat(c+20,"px")},children:[a,Object(j.jsx)("br",{}),r]})})}var m=function(e){for(var t=e.data,c=e.type,n=[],a=0;a<t.length;a++)n[a]=t[a].ISO;var r=800-40-20,s=280-20-30,l=Object(o.useState)(0),u=Object(i.a)(l,2),b=u[0],O=u[1],x=Object(o.useState)(0),h=Object(i.a)(x,2),m=h[0],g=h[1],y=Object(o.useState)(!1),w=Object(i.a)(y,2),S=w[0],k=w[1],N=Object(o.useState)(),M=Object(i.a)(N,2),X=M[0],Y=M[1],A=Object(o.useState)(0),B=Object(i.a)(A,2),P=B[0],C=B[1],G=d.f().domain([d.d(t,(function(e){return e.value})),d.c(t,(function(e){return e.value}))]).range([30,r-50]).nice(),I=d.e().padding(.1).domain(n).range([0,s]);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("svg",{viewBox:"0 0 ".concat(r," ").concat(s),children:[Object(j.jsx)(f,{scale:I,countries:n}),Object(j.jsx)(v,{scale:G,type:c,unit:{Aging:"%",CO2:"\u767e\u4e07\u30c8\u30f3",GDP:"\u767e\u4e07US$",Income:"US$",Lifespan:"\u6b73",Population:"\u5343\u4eba",Tax:"%"}}),Object(j.jsx)("g",{children:t.map((function(e,t){return Object(j.jsx)("g",{children:Object(j.jsx)("rect",{x:"30",y:10+10*t,width:G(e.value)-50,height:5,fill:"red",onMouseOver:function(t){return function(e,t){k(!0),O(e.clientX),g(e.clientY),Y(t.country),C(t.value)}(t,e)},onMouseMove:function(e){return function(e){O(e.clientX),g(e.clientY)}(e)},onMouseOut:function(e){k(!1)}})})}))})]}),Object(j.jsx)(p,{show:S,clientX:b,clientY:m,country:X,value:P})]})};var g=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)("GDP"),d=Object(i.a)(a,2),b=d[0],O=d[1],x=Object(o.useState)("2019"),f=Object(i.a)(x,2),v=f[0],p=f[1];return Object(o.useEffect)((function(){Object(s.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/".concat(b,"/").concat(v,".json"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})))()}),[b,v]),Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{class:"select is-primary is-large",style:{margin:"10px"},children:Object(j.jsxs)("select",{name:"type",value:b,onChange:function(e){O(e.target.value)},children:[Object(j.jsx)("option",{value:"GDP",children:"GDP"}),Object(j.jsx)("option",{value:"Population",children:"\u4eba\u53e3"}),Object(j.jsx)("option",{value:"Aging",children:"\u9ad8\u9f62\u5316\u7387"}),Object(j.jsx)("option",{value:"CO2",children:"\u4e8c\u9178\u5316\u70ad\u7d20\u6392\u51fa\u91cf"}),Object(j.jsx)("option",{value:"Income",children:"\u5e73\u5747\u5e74\u53ce"}),Object(j.jsx)("option",{value:"Lifespan",children:"\u5e73\u5747\u5bff\u547d"}),Object(j.jsx)("option",{value:"Tax",children:"\u6d88\u8cbb\u7a0e"})]})}),Object(j.jsx)("div",{class:"select is-primary is-large",style:{margin:"10px"},children:Object(j.jsxs)("select",{name:"year",value:v,onChange:function(e){p(e.target.value)},children:[Object(j.jsx)("option",{children:"2000"}),Object(j.jsx)("option",{children:"2005"}),Object(j.jsx)("option",{children:"2010"}),Object(j.jsx)("option",{children:"2015"}),Object(j.jsx)("option",{children:"2019"})]})}),Object(j.jsx)("div",{className:"card",style:{width:"97%",margin:"20px"},children:Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)(h,{data:c})})})}),Object(j.jsx)("div",{className:"card",style:{width:"97%",margin:"20px"},children:Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)(m,{data:c,type:b})})})}),Object(j.jsx)(u,{})]})};Object(n.render)(Object(j.jsx)(g,{}),document.querySelector("#content"))},37:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.0b668c78.chunk.js.map