(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],l=0,m=[];l<o.length;l++)s=o[l],a[s]&&m.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Lesson_Planner/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-layout",[n("v-flex",[n("v-btn",{attrs:{icon:""},on:{mouseenter:function(e){return t.prepareDownload()},click:t.download}},[n("v-icon",[t._v("save")])],1)],1),n("v-flex",[n("topbar",{model:{value:t.week,callback:function(e){t.week=e},expression:"week"}})],1),n("v-spacer")],1)],1),n("v-content",[n("week",{attrs:{week:t.week}})],1)],1)},i=[],s=(n("28a5"),n("7f7f"),n("96cf"),n("3b8d")),o=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.downWeek()}}},[n("v-icon",[t._v("mdi-chevron-left")])],1)],1),n("v-spacer"),n("v-flex",[n("v-toolbar-title",{staticClass:"headline hidden-xs-only"},[n("span",[t._v(t._s(t.expandedWeek))])]),n("v-toolbar-title",{staticClass:"subtilte-2 hidden-sm-and-up"},[n("span",[t._v(t._s(t.expandedWeek))])])],1),n("v-spacer"),n("v-flex",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.upWeek()}}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)}),c=[],u={props:{value:Number},methods:{downWeek:function(){this.value>1&&(localStorage.setItem("selectedWeek",this.value-1),this.$emit("input",this.value-1),this.$bus.$emit("dbUpdate"))},upWeek:function(){this.value<180&&(localStorage.setItem("selectedWeek",this.value+1),this.$emit("input",this.value+1),this.$bus.$emit("dbUpdate"))}},computed:{expandedWeek:function(){var t=["A","B","1","2","3","4"],e=t[Math.floor((this.value-1)/30)],n=(this.value-1)%30+1,r=n>15?n-15:n,a=n>15?2:1;return this.$vuetify.breakpoint.smAndDown?"Chall. ".concat(e,", Week ").concat(r,", Sem. ").concat(a):"Challenge ".concat(e,", Week ").concat(r,", Semester ").concat(a)}}},d=u,l=n("2877"),m=n("6544"),h=n.n(m),p=n("8336"),f=n("0e8f"),v=n("132d"),b=n("a722"),g=n("2fa4"),w=n("2a7f"),y=Object(l["a"])(d,o,c,!1,null,null,null),x=y.exports;h()(y,{VBtn:p["a"],VFlex:f["a"],VIcon:v["a"],VLayout:b["a"],VSpacer:g["a"],VToolbarTitle:w["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{centered:""}},[n("v-spacer"),t.strandsLoaded?[t._l(t.$dayHandler.shownStrands,function(e){return[e.show?n("v-flex",{key:e.strand.id,attrs:{centered:"","mx-1":""}},[n("strand",{attrs:{strand:e.strand,week:t.week}})],1):t._e()]})]:t._e(),t.strandsLoaded?t._e():n("v-flex",{attrs:{"ma-5":"",md12:""}},[n("v-progress-linear",{attrs:{indeterminate:"",height:"10"}})],1),n("v-spacer")],2)},O=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("v-flex",{attrs:{shrink:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.moveStrandLeft()}}},[n("v-icon",[t._v("mdi-chevron-left")])],1)],1),t._v("\n    "+t._s(t.strand.strandName)+"\n    "),n("v-flex",{attrs:{shrink:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.moveStrandRight()}}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1),n("v-flex",{attrs:{shrink:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.createItemDialog=!0}}},[n("v-icon",[t._v("add")])],1)],1)],1),t.totalTime>0?n("v-flex",{attrs:{"mx-1":""}},[n("v-progress-linear",{attrs:{value:t.timeDone/t.totalTime*100,color:t.barColor,height:"25",reactive:"",rounded:""},scopedSlots:t._u([{key:"default",fn:function(e){e.value;return[n("strong",[t._v(t._s(t.timeDone)+"min used "+t._s(t.totalTime-t.timeDone)+"min left")])]}}],null,!1,1242604286)})],1):t._e(),t.itemsLoaded?t._l(t.items,function(e){return n("v-flex",{key:e.id,attrs:{"ma-1":""}},[n("item",{attrs:{item:e,strand:t.strand}})],1)}):t._e(),t.itemsLoaded?t._e():n("v-flex",{attrs:{"ma-5":"",md12:""}},[n("v-progress-linear",{attrs:{indeterminate:"",height:"10"}})],1),n("itemDialog",{attrs:{item:{name:"New Item",time:30,color:"red",strand:t.strand.id,notes:""},create:!0,strand:t.strand},model:{value:t.createItemDialog,callback:function(e){t.createItemDialog=e},expression:"createItemDialog"}})],2)},$=[],j=(n("6762"),n("2fdb"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",outlined:"",color:t.item.color},on:{click:function(e){t.editItemDialog=!0}}},[n("v-card-text",[n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{shrink:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{shrink:""}},[n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.moveItemL()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-chevron-left")])],1)],1),n("v-flex",{attrs:{shrink:""}},[n("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.moveUp()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-chevron-up")])],1)],1),n("v-flex",{attrs:{shrink:""}},[n("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.moveDown()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-chevron-down")])],1)],1),n("v-flex",[n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.moveItemR()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-chevron-right")])],1)],1)],1)],1),n("v-flex",{attrs:{shrink:""}},[n("v-layout",[n("v-flex",{attrs:{shrink:""}},[n("div",{class:"font-weight-bold subtitle-2 "+t.item.color+"--text text--lighten-5"},[t._v("\n              "+t._s(t.item.name)+"\n              "),n("br"),t._v("\n              "+t._s(t.item.time)+" Minutes\n            ")])])],1)],1)],1)],1),n("itemDialog",{attrs:{item:t.item,strand:t.strand,create:!1},model:{value:t.editItemDialog,callback:function(e){t.editItemDialog=e},expression:"editItemDialog"}})],1)}),I=[],_=(n("8e6e"),n("456d"),n("bd86")),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.itemToSave.name))])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.itemToSave.name,callback:function(e){t.$set(t.itemToSave,"name",e)},expression:"itemToSave.name"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Time",suffix:"Minutes",type:"number",required:""},model:{value:t.itemToSave.time,callback:function(e){t.$set(t.itemToSave,"time",e)},expression:"itemToSave.time"}})],1),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-autocomplete",{attrs:{items:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"],label:"Color",color:t.itemToSave.color},model:{value:t.itemToSave.color,callback:function(e){t.$set(t.itemToSave,"color",e)},expression:"itemToSave.color"}})],1),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-textarea",{attrs:{"no-resize":"",label:"Notes",outlined:"",rounded:"",required:"","full-width":"","auto-grow":"",rows:10},model:{value:t.itemToSave.notes,callback:function(e){t.$set(t.itemToSave,"notes",e)},expression:"itemToSave.notes"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),t.create?t._e():n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.removeItem()}}},[t._v("Delete")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.close(!1)}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.close(!0)}}},[t._v("Save")])],1)],1)],1)},R=[];function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach(function(e){Object(_["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var P={props:{value:Boolean,item:Object,strand:Object,create:Boolean},data:function(){return{itemToSave:{}}},methods:{close:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$emit("input",!1),!e){t.next=7;break}return t.next=4,this.$db.putItem(this.itemToSave);case 4:this.$bus.$emit("dbItemUpdate"),this.$bus.$emit("dbStrandUpdate"),this.$bus.$emit("dbUpdate");case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),removeItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return delete this.strand.itemOrder[this.strand.itemOrder.indexOf(this.item.id)],this.strand.itemOrder=this.removeEmpty(this.strand.itemOrder),t.next=4,this.$db.removeItem(this.item);case 4:this.close(!1),this.$bus.$emit("dbStrandUpdate"),this.$bus.$emit("dbItemUpdate");case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),removeEmpty:function(t){return t.filter(function(t){return t})}},watch:{item:{handler:function(){this.itemToSave=V({},this.item)},deep:!0,immediate:!0}}},T=P,U=n("c6a6"),L=n("b0af"),E=n("99d9"),C=n("a523"),F=n("169a"),W=n("8654"),H=n("a844"),M=Object(l["a"])(T,D,R,!1,null,null,null),J=M.exports;h()(M,{VAutocomplete:U["a"],VBtn:p["a"],VCard:L["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VContainer:C["a"],VDialog:F["a"],VFlex:f["a"],VLayout:b["a"],VSpacer:g["a"],VTextField:W["a"],VTextarea:H["a"]});var z=n("94ed");function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(n,!0).forEach(function(e){Object(_["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var G={components:{ItemDialog:J},props:{item:Object,strand:Object},data:function(){return{pencil:z["a"],editItemDialog:!1}},methods:{update:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$db.putItem(e);case 2:this.$bus.$emit("dbItemUpdate");case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),moveItemL:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:delete this.strand.itemOrder[this.strand.itemOrder.indexOf(this.item.id)],this.strand.itemOrder=this.removeEmpty(this.strand.itemOrder),this.$db.putItem(B({},this.item,{strand:this.$dayHandler.getStrandFromName(this.$dayHandler.getNextShownStrandDown(this.strand.strandName)).strand.id})),this.$db.putStrand(this.strand),this.$bus.$emit("dbStrandUpdate"),this.$bus.$emit("dbItemUpdate");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),moveItemR:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:delete this.strand.itemOrder[this.strand.itemOrder.indexOf(this.item.id)],this.strand.itemOrder=this.removeEmpty(this.strand.itemOrder),this.$db.putItem(B({},this.item,{strand:this.$dayHandler.getStrandFromName(this.$dayHandler.getNextShownStrandUp(this.strand.strandName)).strand.id})),this.$db.putStrand(this.strand),this.$bus.$emit("dbStrandUpdate"),this.$bus.$emit("dbItemUpdate");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),moveUp:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.strand.itemOrder.indexOf(this.item.id),delete this.strand.itemOrder[e],0===e?this.strand.itemOrder.push(this.item.id):this.strand.itemOrder.splice(e-1,0,this.item.id),this.strand.itemOrder=this.removeEmpty(this.strand.itemOrder),this.$db.putStrand(this.strand),this.$bus.$emit("dbStrandUpdate");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),moveDown:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.strand.itemOrder.indexOf(this.item.id),delete this.strand.itemOrder[e],e===this.strand.itemOrder.length-1?this.strand.itemOrder.splice(0,0,this.item.id):this.strand.itemOrder.splice(e+2,0,this.item.id),this.strand.itemOrder=this.removeEmpty(this.strand.itemOrder),this.$db.putStrand(this.strand),this.$bus.$emit("dbDayUpdate");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),removeEmpty:function(t){return t.filter(function(t){return t})}}},q=G,K=Object(l["a"])(q,j,I,!1,null,null,null),Q=K.exports;h()(K,{VBtn:p["a"],VCard:L["a"],VCardText:E["b"],VFlex:f["a"],VIcon:v["a"],VLayout:b["a"]});var X={components:{Item:Q,ItemDialog:J},props:{strand:Object,week:Number},created:function(){var t=this;this.getItems(),this.$bus.$on("dbItemUpdate",function(){t.getItems()}),this.$bus.$on("dbUpdate",function(){t.getItems()})},data:function(){return{numToDay:["Logic","Grammer","Reasoning","Exposition","Debate","Research"],itemsLoaded:!1,items:[],createItemDialog:!1,timeDone:0,totalTime:0}},methods:{moveStrandLeft:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$dayHandler.moveShownStrandUp(this.strand.strandName),this.$bus.$emit("localStorageUpdate");case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),moveStrandRight:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$dayHandler.moveShownStrandDown(this.strand.strandName),this.$bus.$emit("localStorageUpdate");case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getItems:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$db.getItems(this.strand);case 2:this.items=t.sent,this.updateItemTotal(),this.updateItemOrder(),this.itemsLoaded=!0;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updateItemTotal:function(){var t=0,e=55;this.items.forEach(function(e){t+=Number(e.time)}),this.timeDone=t,this.totalTime=e},updateItemOrder:function(){var t=this;this.strand.itemOrder||(this.strand.itemOrder=[]),this.items.forEach(function(e){t.strand.itemOrder.includes(e.id)||t.strand.itemOrder.push(e.id)});for(var e=[],n=function(n){e.push(t.items.filter(function(e){return t.strand.itemOrder[n]===e.id})[0])},r=0;r<this.items.length;r++)n(r);this.items=e}},watch:{strand:{handler:function(){this.getItems()},immediate:!0,deep:!0}},computed:{barColor:function(){return this.items[0]?this.items[0].color:"white"}}},Y=X,Z=n("8e36"),tt=Object(l["a"])(Y,k,$,!1,null,null,null),et=tt.exports;h()(tt,{VBtn:p["a"],VCard:L["a"],VCardTitle:E["c"],VFlex:f["a"],VIcon:v["a"],VProgressLinear:Z["a"]});var nt={components:{Strand:et},props:{week:Number},created:function(){var t=this;this.getStrands(),this.$bus.$on("localStorageUpdate",function(){t.$dayHandler.onOptionsUpdate(),t.$forceUpdate()}),this.$bus.$on("dbUpdate",function(){t.$nextTick(function(){t.strandsLoaded=!1,t.getStrands(),t.$forceUpdate()})}),this.$bus.$on("dbStrandUpdate",function(){t.getStrands(),t.$forceUpdate()})},data:function(){return{shownDays:[],shownDaysFiltered:[],strands:[],strandsLoaded:!1}},methods:{getStrands:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$db.getStrands(this.week);case 2:e=t.sent,this.strands=e,this.$dayHandler.addStrands(e),this.$dayHandler.onOptionsUpdate(),this.strandsLoaded=!0;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},watch:{week:{handler:function(){this.$forceUpdate()},immediate:!0,deep:!0}}},rt=nt,at=Object(l["a"])(rt,S,O,!1,null,null,null),it=at.exports;h()(at,{VFlex:f["a"],VLayout:b["a"],VProgressLinear:Z["a"],VSpacer:g["a"]});var st=n("e511"),ot={name:"App",components:{Topbar:x,Week:it},created:function(){this.$dayHandler.addSetCallback(this.$set)},data:function(){return{week:Number(localStorage.getItem("selectedWeek"))||1,options:JSON.parse(localStorage.getItem("options"))||{drawer:!1,startWithCommunityDay:!1,showCommunityDay:!0,showWeekends:!0,communityDay:"Monday"},downloadHref:""}},methods:{prepareDownload:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i,s,o,c,u,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jsp=new st({orientation:"p",unit:"mm",format:"letter",putOnlyUsedFonts:!0}),e=[],t.next=4,this.$db.getStrands(this.week);case 4:n=t.sent,r=0;case 6:if(!(r<n.length)){t.next=16;break}return a=n[r],t.next=10,this.$db.getItems(a);case 10:for(i=t.sent,e.push({text:a.strandName,size:20,type:"bold",indent:0,space:1}),s=0;s<i.length;s++)o=i[s],e.push({text:"".concat(o.name," (").concat(o.time,"min)"),size:15,type:"bold",indent:1,space:1}),e.push({text:"".concat(o.notes),size:15,type:"",indent:1.5,space:1});case 13:r++,t.next=6;break;case 16:for(c=10,u=0;u<e.length;u++)d=e[u].text.split("\n").length>0?e[u].text.split("\n").length*e[u].size:0,c>280-d&&(this.jsp.addPage(),c=10),this.jsp.setFontSize(e[u].size),this.jsp.setFontStyle(e[u].type),this.jsp.text(e[u].text,Math.floor(10+10*e[u].indent),c),d=e[u].text.split("\n").length>0?e[u].text.split("\n").length*e[u].size:0,c+=e[u+1]?e[u+1].space?Math.floor(e[u+1].space/1.5+d):Math.floor(e[u+1].size/1.5+d):10;case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),download:function(){this.jsp.output("save","Challange Lesson Plan.pdf")}}},ct=ot,ut=n("7496"),dt=n("40dc"),lt=n("a75b"),mt=Object(l["a"])(ct,a,i,!1,null,null,null),ht=mt.exports;h()(mt,{VApp:ut["a"],VAppBar:dt["a"],VBtn:p["a"],VContent:lt["a"],VFlex:f["a"],VIcon:v["a"],VLayout:b["a"],VSpacer:g["a"]});var pt=n("f309");r["a"].use(pt["a"]);var ft=new pt["a"]({icons:{iconfont:"fa"}}),vt=n("d225"),bt=n("b0b4"),gt=n("74ce"),wt=function(){function t(){Object(vt["a"])(this,t),this.db=this.initDb(),this.strandName=["Logic","Grammer","Reasoning","Exposition","Debate","Research"]}return Object(bt["a"])(t,[{key:"initDb",value:function(){var t=new gt["a"]("LessonPlannerV2");return t.version(1).stores({strands:"id++, week",items:"id++, strand"}),t}},{key:"getStrands",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.db.strands.where({week:e}).toArray();case 2:if(n=t.sent,r=[],!(n.length<6)){t.next=11;break}for(a=0;a<6;a++)r.push({week:e,strandName:this.strandName[a],itemOrder:[]});return t.next=8,this.db.strands.bulkPut(r);case 8:return t.next=10,this.getStrands(e);case 10:n=t.sent;case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"putStrand",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.db.strands.put(e);case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"putItem",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.db.items.put(e);case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"removeItem",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.db.items.delete(e.id);case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getItems",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.db.items.where({strand:e.id}).toArray();case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),yt=function(){function t(){Object(vt["a"])(this,t),this.strandNames=["Logic","Grammer","Reasoning","Exposition","Debate","Research"],this.times=0}return Object(bt["a"])(t,[{key:"addStrands",value:function(t){this.strands=t,this.shownStrands=this.createShownStrands(),this.applyStrandOrder(JSON.parse(localStorage.getItem("strandOrder"))||["Logic","Grammer","Reasoning","Exposition","Debate","Research"])}},{key:"addSetCallback",value:function(t){this.set=t}},{key:"onOptionsUpdate",value:function(){this.shownStrands=this.createShownStrands(),this.applyStrandOrder(JSON.parse(localStorage.getItem("strandOrder"))||["Logic","Grammer","Reasoning","Exposition","Debate","Research"])}},{key:"createShownStrands",value:function(){for(var t=[],e=0;e<6;e++)t.push({strand:this.getStrandFromNameFromWeek(this.strandNames[e]),show:!0,showMobile:!1});return t}},{key:"getStrandFromNameFromWeek",value:function(t){var e="Can't find ".concat(t," in ").concat(JSON.stringify(this.strands));return this.strands.forEach(function(n){n.strandName===t&&(e=n)}),e}},{key:"getStrandFromName",value:function(t){var e=void 0;return this.shownStrands.forEach(function(n){n.strand.strandName===t&&(e=n)}),e}},{key:"applyStrandOrder",value:function(t){var e=this;localStorage.setItem("strandOrder",JSON.stringify(t));var n=JSON.parse(JSON.stringify(this.shownStrands));this.shownStrands.forEach(function(r,a){n[a]=e.getStrandFromName(t[a])}),this.shownStrands=n}},{key:"show",value:function(t){this.getStrandFromName(t).show=!0}},{key:"hide",value:function(t){this.getStrandFromName(t).show=!1}},{key:"getNextShownStrandUp",value:function(t){var e=0;while(0===e)if(t=this.getNextStrand(t),this.getStrandFromName(t).show)return e=1,t}},{key:"getNextShownStrandDown",value:function(t){var e=0;while(0===e)if(t=this.getPreviousStrand(t),this.getStrandFromName(t).show)return e=1,t}},{key:"getNextStrand",value:function(t){var e=this.shownStrands.indexOf(this.getStrandFromName(t));return e>=5&&(e=-1),this.shownStrands[e+1].strand.strandName}},{key:"getPreviousStrand",value:function(t){var e=this.shownStrands.indexOf(this.getStrandFromName(t));return e<=0&&(e=6),this.shownStrands[e-1].strand.strandName}},{key:"moveShownStrandUp",value:function(t){var e=JSON.parse(localStorage.getItem("strandOrder"))||["Logic","Grammer","Reasoning","Exposition","Debate","Research"],n=e.indexOf(t);delete e[n],0===n?e.push(t):e.splice(n-1,0,t),e=e.filter(function(t){return t}),this.applyStrandOrder(e)}},{key:"moveShownStrandDown",value:function(t){var e=JSON.parse(localStorage.getItem("strandOrder"))||["Logic","Grammer","Reasoning","Exposition","Debate","Research"],n=e.indexOf(t);delete e[n],n===e.length-1?e.splice(0,0,t):e.splice(n+2,0,t),e=e.filter(function(t){return t}),this.applyStrandOrder(e)}}]),t}();r["a"].config.productionTip=!1,r["a"].prototype.$db=new wt,r["a"].prototype.$bus=new r["a"],r["a"].prototype.$dayHandler=new yt,new r["a"]({vuetify:ft,render:function(t){return t(ht)}}).$mount("#app")}});
//# sourceMappingURL=app.1c250379.js.map