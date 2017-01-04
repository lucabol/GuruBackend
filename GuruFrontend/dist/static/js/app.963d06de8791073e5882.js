webpackJsonp([1,0],[function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var n=r(18),i=o(n),s=r(17),u=o(s),a=r(9),c=o(a);i.default.use(u.default),new i.default({el:"#app",template:"<App/>",components:{App:c.default}})},function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(10),i=o(n),s=r(12),u=o(s),a=r(11),c=o(a);e.default={name:"app",components:{Gurus:i.default,Portfolio:u.default,HyperPortfolio:c.default},data:function(){return{collection:"lucabol",keyPart:"?code=laenjSgq19DtzaypN/46w9OzDBabPHt6PMGfvf1a/BLba1VUgZUATg==",dname:"",ddate:{},showPort:!0,guruList:[],trades:[],hyperTradeCols:["Name","ClassTitle","Cusip","PutCall","PercOfPortfolio","NumberGurusOwning","NumberGurusBuying","NumberGurusSelling"],tradeCols:["Name","ClassTitle","Cusip","Value","Shares","PutCall","Change","PercOfPortfolio","IsNew","IsSold","Price","Discretion"],hyperTrades:[]}},computed:{baseUri:function(){return"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"/api/portfolios":"https://gurufollower.azurewebsites.net/api/portfolios"},hyperUri:function(){return this.baseUri+"/"+this.collection+this.keyPart},collectionUri:function(){return this.baseUri+"/"+this.collection+"/"}},methods:{guruClicked:function(t,e,r){this.loadPositions(t),this.dname=e,this.ddate=r},removeGuru:function(t){var e=this;this.$http.post(this.baseUri+this.keyPart,{collection:this.collection,groups:[],cik:t,remove:!0}).then(function(r){var o=10,n=250,i=e.$http,s=e.loadGurus,u=e.collectionUri+t+e.keypart,a=function e(){i.get(u).then(function(r){o>0?(o-=1,window.setTimeout(e,n)):window.alert("Error removing guru with cik = "+t+". It was still in the database after the allotted removal time")},function(t){s()})};window.setTimeout(a,n)})},addGuru:function(t){var e=this;this.$http.post(this.baseUri+this.keyPart,{collection:this.collection,groups:[],cik:t,remove:!1}).then(function(r){var o=10,n=250,i=e.$http,s=e.loadGurus,u=e.collectionUri+t+e.keyPart,a=function e(){i.get(u).then(function(t){s()},function(r){o>0?(o-=1,window.setTimeout(e,n)):window.alert("Error adding guru with cik = "+t+" Error:"+r.toString())})};window.setTimeout(a,n)})},hyperClicked:function(){this.loadHyperPositions()},formatTrades:function(t){return t.forEach(function(t){try{t.Change=(100*t.Change).toFixed(1)+"%",t.PercOfPortfolio=(100*t.PercOfPortfolio).toFixed(1)+"%",t.IsNew=t.IsNew?"X":"",t.IsSold=t.IsSold?"X":"",t.Price=t.Price.toFixed(2),t.Shares=t.Shares.toLocaleString(),t.Value=t.Value.toLocaleString()}catch(t){window.alert("Guru with no positions? "+t.toString())}}),t},loadPositions:function(t){var e=this;this.showPort=!0,t&&this.$http.get(this.collectionUri+t+this.keyPart).then(function(t){var r=t.body;e.trades=e.formatTrades(r.Positions)})},formatHyperTrades:function(t){return t.forEach(function(t){t.PercOfPortfolio=(100*t.PercOfPortfolio).toFixed(1)+"%"}),t},loadHyperPositions:function(){var t=this;this.showPort=!1,this.$http.get(this.hyperUri).then(function(e){var r=e.body;t.hyperTrades=t.formatHyperTrades(r.Positions)})},loadGurus:function(){var t=this;this.$http.get(this.collectionUri+"gurus"+this.keyPart).then(function(e){t.guruList=e.body,t.loadHyperPositions()})}},created:function(){this.trades=[],this.guruList=[],this.loadGurus()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"gurus",props:["guruList"],data:function(){return{guruid:""}},methods:{guruClicked:function(t,e,r){this.$emit("guruClicked",t,e,r)},hyperClicked:function(){this.$emit("hyperClicked")},addGuru:function(t){this.$emit("addGuru",t)},removeGuru:function(t){this.$emit("removeGuru",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hyperPortfolio",props:{data:Array,columns:Array},data:function(){return{sortKey:"",sortOrders:{}}},computed:{filteredData:function(){var t=this.sortKey,e=this.sortOrders[t]||1,r=this.data;return t&&(r=r.slice().sort(function(r,o){var n=r[t],i=o[t];if(n&&i){var s=n.toString().replace(/,/g,""),u=i.toString().replace(/,/g,""),a=isNaN(parseFloat(s))?n:parseFloat(s),c=isNaN(parseFloat(u))?i:parseFloat(u);return(a===c?0:a>c?1:-1)*e}return n?1*e:i?-1*e:0})),r}},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=this.sortOrders[t]*-1}},created:function(){var t={};this.columns.forEach(function(e){t[e]=1}),this.sortOrders=t}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"portfolio",props:{data:Array,columns:Array},data:function(){return{sortKey:"",sortOrders:{}}},computed:{filteredData:function(){var t=this.sortKey,e=this.sortOrders[t]||1,r=this.data;return t&&(r=r.slice().sort(function(r,o){var n=r[t],i=o[t];if(n&&i){var s=n.toString().replace(/,/g,""),u=i.toString().replace(/,/g,""),a=isNaN(parseFloat(s))?n:parseFloat(s),c=isNaN(parseFloat(u))?i:parseFloat(u);return(a===c?0:a>c?1:-1)*e}return n?1*e:i?-1*e:0})),r}},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=this.sortOrders[t]*-1}},created:function(){var t={};this.columns.forEach(function(e){t[e]=1}),this.sortOrders=t}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,r){var o,n;r(6),o=r(1);var i=r(14);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,r){var o,n;r(7),o=r(2);var i=r(15);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-444d9895",t.exports=o},function(t,e,r){var o,n;r(5),o=r(3);var i=r(13);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-024fbb19",t.exports=o},function(t,e,r){var o,n;r(8),o=r(4);var i=r(16);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-a009d30a",t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("table",[e("thead",[e("tr",t._l(t.columns,function(r){return e("th",{class:{active:t.sortKey==r},on:{click:function(e){t.sortBy(r)}}},[t._v("\n        "+t._s(t._f("capitalize")(r))+"\n        "),e("span",{staticClass:"arrow",class:t.sortOrders[r]>0?"asc":"dsc"})])}))]),t._v(" "),e("tbody",t._l(t.filteredData,function(r){return e("tr",t._l(t.columns,function(o){return e("td",[t._v("\n        "+t._s(r[o])+"\n      ")])}))}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[t.showPort?e("h1",[t._v(t._s(t.dname))]):e("h1",[t._v("Hyper Portfolio")]),t._v(" "),t._v(" "),e("div",{staticClass:"flex-container",attrs:{id:"app"}},[e("gurus",{attrs:{guruList:t.guruList},on:{guruClicked:t.guruClicked,addGuru:t.addGuru,removeGuru:t.removeGuru,hyperClicked:t.hyperClicked}}),t._v(" "),t.showPort?e("portfolio",{attrs:{data:t.trades,columns:t.tradeCols}}):e("hyperPortfolio",{attrs:{data:t.hyperTrades,columns:t.hyperTradeCols}}),t._v(" ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"gurus"},[e("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),e("li",{on:{click:t.hyperClicked}},[e("em",[t._v("Hyper Portfolio")])]),t._v(" "),t._m(2),t._v(" "),0===t.guruList.length?e("li",[e("b",[t._v("No Gurus yet !!")])]):t._e(),t._v(" "),t._l(t.guruList,function(r){return e("li",{on:{click:function(e){t.guruClicked(r.id,r.DisplayName,r.EndQuarterDate)}}},[t._v(t._s(r.id+"/"+r.EndQuarterDate.substring(0,10)+"/"+r.DisplayName.substring(0,20).toLowerCase().replace(/\b\w/g,function(t){return t.toUpperCase()})))])}),t._v(" "),e("li",[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.guruid,expression:"guruid",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"Guru cik"},domProps:{value:t._s(t.guruid)},on:{input:function(e){e.target.composing||(t.guruid=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),e("li",[e("button",{on:{click:function(e){t.addGuru(t.guruid)}}},[t._v("Add")]),e("button",{on:{click:function(e){t.removeGuru(t.guruid)}}},[t._v("Remove")])])],!0)])},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("li",[e("b",[t._v("Gurus")])])},function(){var t=this,e=(t.$createElement,t._c);return e("li",[e("br")])},function(){var t=this,e=(t.$createElement,t._c);return e("li",[e("br")])}]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("table",[e("thead",[e("tr",t._l(t.columns,function(r){return e("th",{class:{active:t.sortKey==r},on:{click:function(e){t.sortBy(r)}}},[t._v("\n        "+t._s(t._f("capitalize")(r))+"\n        "),e("span",{staticClass:"arrow",class:t.sortOrders[r]>0?"asc":"dsc"})])}))]),t._v(" "),e("tbody",t._l(t.filteredData,function(r){return e("tr",t._l(t.columns,function(o){return e("td",[t._v("\n        "+t._s(r[o])+"\n      ")])}))}))])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.963d06de8791073e5882.js.map