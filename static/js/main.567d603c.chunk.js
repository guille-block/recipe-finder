(this["webpackJsonplaboratorio-react"]=this["webpackJsonplaboratorio-react"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),s=c.n(r),i=(c(11),c(4)),o=c.n(i),l=c(6),u=c(2),j=(c(13),c(14),c(0)),b=function(e){var t=e.titulo,c=e.calorias,n=e.imagen,a=e.ingredientes;return Object(j.jsxs)("div",{className:"recipe",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsxs)("p",{children:["Calorias: ",Math.round(c)]}),Object(j.jsx)("ol",{children:a.map((function(e){return Object(j.jsx)("li",{className:"li-ingredientes",children:e.text})}))}),Object(j.jsx)("img",{className:"img",src:n,alt:""})]})},d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],d=s[1],f=Object(n.useState)("chicken"),h=Object(u.a)(f,2),p=h[0],m=h[1],O="https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("efb55bfe","&app_key=").concat("0f0da95af8102dfeffc5224c0dd3fcc5");Object(n.useEffect)((function(){console.log("Effect is running"),x(),console.log(c)}),[p]);var x=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.hits),a(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"titulo",children:"Buscador de recetas:"}),Object(j.jsx)("p",{children:Object(j.jsx)("i",{children:"by Guille"})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(i),d("")},className:"search-form",children:[Object(j.jsx)("input",{className:"search-bar",type:"text",value:i,onChange:function(e){d(e.target.value)}}),Object(j.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(j.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(j.jsx)(b,{titulo:e.recipe.label,calorias:e.recipe.calories,imagen:e.recipe.image,ingredientes:e.recipe.ingredients},e.recipe.label)}))})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.567d603c.chunk.js.map