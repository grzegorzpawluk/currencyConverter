(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),u=n.n(a),o=(n(12),n(13),n(7)),s=n(2),i=n(0);function j(e){var t=e.currencyOptions,n=e.selectedCurrency,c=e.onChangeCurrency,r=e.onChangeAmount,a=e.amount;return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"number",value:a,onChange:r}),Object(i.jsx)("select",{value:n,onChange:c,children:t.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})]})}function b(e){var t,n,r=e.BASE_CURRENCY_URL,a=Object(c.useState)([]),u=Object(s.a)(a,2),b=u[0],f=u[1],h=Object(c.useState)(),O=Object(s.a)(h,2),l=O[0],d=O[1],C=Object(c.useState)(),g=Object(s.a)(C,2),v=g[0],p=g[1],y=Object(c.useState)(),m=Object(s.a)(y,2),x=m[0],S=m[1],E=Object(c.useState)(1),_=Object(s.a)(E,2),R=_[0],k=_[1],A=Object(c.useState)(!0),F=Object(s.a)(A,2),B=F[0],L=F[1];B?(t=R,n=R*x):(n=R,t=R/x),Object(c.useEffect)((function(){fetch(r).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[117];f([e.base].concat(Object(o.a)(Object.keys(e.rates)))),d(t),p(e.base),S(e.rates[t])})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){null!=l&&null!=v&&fetch("https://free.currconv.com/api/v7/convert?q=".concat(l,"_").concat(v,"&compact=ultra&apiKey=5cebdc7d204e872a7b27")).then((function(e){return e.json()})).then((function(e){return S(e["".concat(l,"_").concat(v)])})).catch((function(e){return console.log(e)}))}),[l,v]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Currency Converter"}),Object(i.jsx)(j,{currencyOptions:b,selectedCurrency:l,onChangeCurrency:function(e){return d(e.target.value)},onChangeAmount:function(e){k(e.target.value),L(!0)},amount:t}),"=",Object(i.jsx)(j,{currencyOptions:b,selectedCurrency:v,onChangeCurrency:function(e){return p(e.target.value)},onChangeAmount:function(e){k(e.target.value),L(!1)},amount:n})]})}var f="http://api.exchangeratesapi.io/v1/latest?access_key=".concat("dd8b9c2acf0a67c4256acdd01dfd21ad");var h=function(){return Object(i.jsx)(b,{BASE_CURRENCY_URL:f})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),a(e),u(e)}))};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.ff38cb6a.chunk.js.map