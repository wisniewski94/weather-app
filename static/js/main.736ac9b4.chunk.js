(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a(84)},52:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(37),c=a.n(i),o=a(7),s=a(8),u=a(10),l=a(4),m=a(11),f=a(38),h=a.n(f),p=a(18),d=(a(52),function(){return r.a.createElement(p.b,{to:"/",id:"logo"},"W.W.WeatherApp")}),b=(a(55),function(){return r.a.createElement("header",null,r.a.createElement(d,null))}),v=a(19),y=function(e){var t=e.className,a=e.children,n=Object(v.a)(e,["className","children"]);return r.a.createElement("h1",Object.assign({},n,{className:"".concat(t||"")}),a)},g=(a(56),function(e){var t=e.className,a=e.children,n=Object(v.a)(e,["className","children"]);return r.a.createElement("article",Object.assign({},n,{className:"".concat(t||""," tab")}),a)}),E=a(3),O=a.n(E),j=a(20),w=a(14),x=a(42),k=a(21),P=a.n(k),N=a(24),M=a(15),C=a.n(M);var D={log:function(e){console.error(e)}};C.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app"}).REACT_APP_API_URL,C.a.defaults.params={},C.a.defaults.params.APPID=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app"}).REACT_APP_API_KEY,C.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||D.log(e),Promise.reject(e)}));var S={get:C.a.get,post:C.a.post,put:C.a.put,delete:C.a.delete},T=a(1),A=a.n(T),R=function(){function e(t,a){var n=this;if(Object(o.a)(this,e),this.tracker=[],!1===A.a.isString(t)||!1===A.a.isString(a))throw new Error("Invalid parameters");if(this.location=t,this.dayTime=a,this.times=A.a.chain([[0,5,"night"],[6,12,"morning"],[13,18,"afternoon"],[18,23,"evening"],[0,23,"day"]]).filter((function(e){return e.filter((function(e){return e===n.dayTime})).length>0})).flatten().filter(A.a.isNumber).value(),this.times.length<1)throw new Error("Please provide correct day time")}return Object(s.a)(e,[{key:"insert",value:function(){var e=Object(w.a)(O.a.mark((function e(){var t,a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{q:this.location,cnt:5,units:"metric"}},e.next=3,S.get("/forecast",t);case 3:return a=e.sent,n=a.data,this.tracker=A.a.union(this.tracker,Object(N.a)(n.list)),e.abrupt("return",{temp:this.tracker,city:n.city});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"unixTodayRange",value:function(){var e=Object(w.a)(O.a.mark((function e(){var t,a,n,r,i,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.tracker.length<1)){e.next=3;break}return e.next=3,this.insert();case 3:return t=new Date,a=t.getFullYear(),n=t.getMonth(),r=t.getDate(),i=[Date.UTC(a,n,r,this.times[0])/1e3,Date.UTC(a,n,r,this.times[1])/1e3],c=A.a.chain(this.tracker).filter((function(e){return A.a.inRange(e.dt,i[0],i[1])})).value(),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showMin",value:function(){var e=Object(w.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.unixTodayRange();case 2:if(0!==(a=e.sent).length){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.abrupt("return",A.a.chain(a).minBy((function(e){return e.main[t]})).find(t).pick(t).toArray().toNumber().value());case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"showMax",value:function(){var e=Object(w.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.unixTodayRange();case 2:if(0!==(a=e.sent).length){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.abrupt("return",A.a.chain(a).maxBy((function(e){return e.main[t]})).find(t).pick(t).toArray().toNumber().value());case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"showMean",value:function(){var e=Object(w.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.unixTodayRange();case 2:if(0!==(a=e.sent).length){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.abrupt("return",A.a.meanBy(a,(function(e){return e.main[t]})));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"showMode",value:function(){var e=Object(w.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.unixTodayRange();case 2:if(0!==(a=e.sent).length){e.next=5;break}return e.abrupt("return",void 0);case 5:return n=A.a.chain(a).map((function(e){return e.main[t]})).value(),e.abrupt("return",A.a.chain(n).countBy().invertBy().toPairs().max(A.a.head).last().map((function(e){return A.a.toNumber(e)})).value());case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=(a(76),a(23)),F=function(e){var t=e.name,a=e.label,n=e.desc,i=e.error,c=e.className,o=e.disabled,s=e.onMouseEnter,u=Object(v.a)(e,["name","label","desc","error","className","disabled","onMouseEnter"]);return r.a.createElement("div",{onMouseEnter:s,className:"input transparent "+c},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("div",null,n),r.a.createElement("input",Object.assign({},u,{disabled:o,name:t})),i&&r.a.createElement("p",{className:"errorMsg"},i))};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={data:{city:""},disabled:{city:!1},errors:{}},a.config={city:P.a.string().required().regex(/^[a-zA-Z\s]+$/).label("City name")},a.schema=P.a.object(a.config),a.doSubmit=Object(w.a)(O.a.mark((function e(){var t,n,r,i,c,o,s,u,l,m,f;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.data.city,n=new R(t,"day"),r=new R(t,"afternoon"),i=new R(t,"night"),c=new R(t,"morning"),e.prev=5,e.next=8,n.insert();case 8:return o=e.sent,e.next=11,r.showMax("temp");case 11:return s=e.sent,e.next=14,i.showMin("temp");case 14:return u=e.sent,e.next=17,c.showMean("temp");case 17:return l=e.sent,e.next=20,n.showMode("humidity");case 20:m=e.sent,o.day=s,o.night=u,o.morning=l,o.humidity=m,e.next=32;break;case 27:e.prev=27,e.t0=e.catch(5),f=L({},a.state.errors),e.t0?f.city=e.t0.message:delete f.city,a.setState({errors:f});case 32:a.props.forecast(o);case 33:case"end":return e.stop()}}),e,null,[[5,27]])}))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onMouseOver",value:function(e){Object(x.a)(Object(l.a)(t.prototype),"onMouseOver",this).call(this,e)}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("city","City","Enter city name to view forecast."),this.renderButton("View"))}}]),t}(function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.validate();if(a.setState({errors:t||{}}),!t){a.doSubmit();var n=I({},a.state.data),r=A.a.chain(n).mapValues((function(e){return""})).value();a.setState({data:r})}},a.handleChange=function(e){var t=e.currentTarget,n=I({},a.state.errors),r=a.validateProperty(t);r?n[t.name]=r:delete n[t.name];var i=I({},a.state.data);i[t.name]=t.value,a.setState({data:i,errors:n})},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(j.a)({},t,n),i=Object(j.a)({},t,a.config[t]),c=P.a.validate(r,i).error;return c?c.details[0].message:null},a.validate=function(){var e=P.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t={},n=!0,r=!1,i=void 0;try{for(var c,o=function(){var e=c.value;t[e.path[0]]=e.message,0===e.path.length&&e.context.peers.forEach((function(a){t[a]=e.message}))},s=e.details[Symbol.iterator]();!(n=(c=s.next()).done);n=!0)o()}catch(u){r=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t},a.renderInput=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"text",c=a.state,o=c.errors,s=c.data,u=c.disabled;return r.a.createElement(F,{className:(u[e],o[e]?"error":""),disabled:!!u[e],label:t,name:e,desc:n,type:i,value:s[e],onChange:a.handleChange,onMouseEnter:a.onMouseEnter,error:o[e]})},a.renderButton=function(e){return r.a.createElement("button",{className:"ui blue"},e)},a.state={data:{},errors:{}},a.onMouseEnter=a.onMouseEnter.bind(Object(U.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onMouseEnter",value:function(e){var t=I({},this.state.data),a=this.state.disabled;if(A.a.isEmpty(t)){var n=e.currentTarget.childNodes,r=Object(N.a)(n).find((function(e){return void 0!==e.name})),i=I({},a);i[r.name]=!1,this.setState({disabled:i})}}}]),t}(n.PureComponent)),H=a(41),V=a.n(H),q=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(l.a)(t).call(this,e));var n=A.a.chain(e.forecast).map((function(e){var t=new Date(1e3*e.dt);return("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+" "+("0"+t.getUTCHours()).slice(-2)+":"+("0"+t.getUTCMinutes()).slice(-2)})).value(),r=A.a.chain(e.forecast).map((function(e){return e.main.temp})).value(),i=A.a.chain(e.forecast).map((function(e){return e.main.humidity})).value();return a.state={options:{xaxis:{categories:n},stroke:{curve:"smooth"},colors:["#056cff","#ffc82e"]},series:[{name:"Temperature",data:r},{name:"Humidity",data:i}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(V.a,{options:this.state.options,series:this.state.series,type:"line",width:"100%",height:"400px"})}}]),t}(n.Component),J=(a(80),function(e){var t,a,n,i,c,o,s=e.info,u=e.temp;if(void 0!==u){var l=new Date(1e3*u.dt);t=("0"+l.getDate()).slice(-2),a=("0"+(l.getMonth()+1)).slice(-2),n=("0"+l.getUTCHours()).slice(-2),i=("0"+l.getUTCMinutes()).slice(-2)}return r.a.createElement("div",null,s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("h2",null,s.city.name),", ",r.a.createElement("h3",null,s.city.country)),r.a.createElement("div",{className:"task"},"Max day temperature:",r.a.createElement("b",null,void 0!==s.day?" "+s.day.toFixed(0):" - -","\u2103"),r.a.createElement("br",null),"Min night temperature:",r.a.createElement("b",null,void 0!==s.night?" "+s.night.toFixed(0):" - -"),"\u2103",r.a.createElement("br",null),"Average morning temperature:",r.a.createElement("b",null,void 0!==s.morning?" "+s.morning.toFixed(0):" - -","\u2103"),r.a.createElement("br",null),"Average humidity temperature:",r.a.createElement("b",null,void 0!==s.humidity?" "+(o=s.humidity).reduce((function(e,t){return e+t}),0)/o.length+"%":" - -"))),u&&r.a.createElement("div",{className:"tempInfo"},r.a.createElement("b",null,t+"."+a+" "+n+":"+i),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Temperature:",r.a.createElement("b",null," "+u.main.temp.toFixed(0),"\u2103")," "),r.a.createElement("p",null,"Humidity:",r.a.createElement("b",null," "+u.main.humidity+"%")),r.a.createElement("p",null,r.a.createElement("i",null,"string"!==typeof(c=u.weather[0].description)?"":c.charAt(0).toUpperCase()+c.slice(1)))))}),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={forecast:[]},a.handleSubmit=function(e){void 0===e&&(e=[]);var t=e,n=t.city,r=t.day,i=t.night,c=t.morning,o=t.humidity;a.setState({forecast:e.temp,city:n,day:r,night:i,morning:c,humidity:o})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.forecast,t=!1;return void 0!==e&&e.length>0&&(t=this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{forecast:this.handleSubmit}),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{className:"heading"},"Forecast"),r.a.createElement("div",{className:"grid"},r.a.createElement(g,null,r.a.createElement(J,{temp:t.forecast[0],info:t})),r.a.createElement(g,null,r.a.createElement(J,{temp:t.forecast[1]})),r.a.createElement(g,null,r.a.createElement(J,{temp:t.forecast[2]})),r.a.createElement(g,null,r.a.createElement(J,{temp:t.forecast[3]})),r.a.createElement(g,null,r.a.createElement(J,{temp:t.forecast[4]})))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{className:"heading"},"Statistics"),r.a.createElement(q,{forecast:this.state.forecast})))}}]),t}(n.Component),Y=(a(81),a(16)),$=(a(82),a(83),function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"notFound"},r.a.createElement("h1",null,"404"),"The page you are looking for doesn't exist. Please go back to the",r.a.createElement(p.b,{to:"/"},"homepage.")))}),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={fontConfig:{google:{families:["Playfair Display: 900","Playfair Display: 500","Noto Sans KR"]}}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{config:this.state.fontConfig},r.a.createElement("div",{id:"content"},r.a.createElement(b,null),r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/home",component:K}),r.a.createElement(Y.a,{from:"/",exact:!0,to:"/home"}),r.a.createElement(Y.b,{component:$}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p.a,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.736ac9b4.chunk.js.map