(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={index:0},i=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1:function(e,t){},1384:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-2"},[s("div",{},[s("span",{staticClass:"text-2xl"},[e._v("Accueil")])])])}],i={data:function(){return{}}},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,null,null);t["default"]=l.exports},"393f":function(e,t,s){},"3bd8":function(e,t,s){},4360:function(e,t,s){"use strict";s.r(t);var a=s("2f62"),n=new a["default"].Store({state:{user:{},status_connect:!1},getters:{getUser:function(e){return e.user}},mutations:{setUser:function(e,t){e.user=t,e.status_connect=!0}}});t["default"]=n},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col justify-center items-center bg-gray-200 h-screen w-screen",attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[e.data_loaded?s("div",{},[e.$store.state.status_connect?s("div",{staticClass:"w-screen h-screen max-h-screen"},[s("contents")],1):s("div",{staticClass:"w-screen"},[s("login")],1)]):e._e()])],1)},n=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex h-screen w-screen"},[s("sidebar"),s("div",{staticClass:"h-screen max-h-screen overflow-auto bg-gray-100 w-screen border-l border-blue-200"},[s("router-view")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-screen max-h-screen flex flex-col overflow-auto",style:e.sidebar_style},[e._m(0),s("div",{staticClass:"p-2"},[s("router-link",{staticClass:"menu_sidebar",attrs:{to:{name:"home"}}},[s("span",{staticClass:"material-icons"},[e._v(" home ")]),s("span",{staticClass:"ml-5"},[e._v(" Accueil ")])]),s("router-link",{staticClass:"menu_sidebar",attrs:{to:{name:"emplacement"}}},[s("span",{staticClass:"material-icons"},[e._v(" place ")]),s("span",{staticClass:"ml-5"},[e._v(" Emplacement ")])]),s("router-link",{staticClass:"menu_sidebar",attrs:{to:{name:"user"}}},[s("span",{staticClass:"material-icons"},[e._v(" face ")]),s("span",{staticClass:"ml-5"},[e._v(" Utilisateur ")])]),s("router-link",{staticClass:"menu_sidebar",attrs:{to:{name:"settings"}}},[s("span",{staticClass:"material-icons"},[e._v(" settings ")]),s("span",{staticClass:"ml-5"},[e._v(" Paramètres ")])])],1)])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-2 border-b  border-gray-300 text-gray-700"},[s("span",{staticClass:"text-3xl"},[e._v(" Solarpro ")]),e._v(" "),s("span",{staticClass:"text-xl"},[e._v("Admin")])])}],c={data:function(){return{sidebar_style:{minWidth:"250px"}}}},u=c,d=s("2877"),p=Object(d["a"])(u,r,l,!1,null,null,null),m=p.exports,f={components:{sidebar:m},data:function(){return{}},created:function(){console.log(this.$route)}},_=f,v=Object(d["a"])(_,i,o,!1,null,null,null),g=v.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex w-full "},[s("div",{staticClass:"flex flex-col justify-center bg-green-400 items-center h-screen pl-5 duration-300",class:{"w-full":"about"==e.state,hidden:"login"==e.state},on:{click:function(t){return e.change_state("about")}}},[s("span",{staticClass:"font-bold text-gray-700 text-7xl"},[e._v("Solarpro")]),s("span",{staticClass:"font-bold text-gray-600 pl-5 text-5xl"},[e._v("Admin")]),"about"==e.state?s("button",{staticClass:"bt rounded-full animate-bounce mt-5",on:{click:function(t){return e.change_state("login")}}},[e._v("Connexion")]):e._e()]),s("div",{staticClass:"duration-300 h-screen w-1/2 flex flex-col justify-center items-center bg-gray-100 border-l border-blue-200",class:{"w-full":"login"==e.state,"hidden opacity-50":"about"==e.state},on:{click:function(t){return e.change_state("login")}}},[s("form",{staticClass:"flex flex-col justify-center items-center",attrs:{action:"/",method:"post"},on:{submit:function(t){return t.preventDefault(),e.connect.apply(null,arguments)}}},[e._m(0),s("div",{staticClass:"duration-300 h-2 z-0",class:{"h-14":e.msg_info.active}},[s("transition",{attrs:{name:"fade"}},[e.msg_info.active?s("div",{staticClass:" p-2 rounded border",class:{"bg-red-500":!e.msg_info.success,"bg-green-500":e.msg_info.success}},[s("span",[e._v(" "+e._s(e.msg_info.message)+" ")])]):e._e()])],1),s("div",{staticClass:"my-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.login,expression:"user.login"}],staticClass:"input",attrs:{id:"u_login",type:"text",placeholder:"Identifiant"},domProps:{value:e.user.login},on:{input:function(t){t.target.composing||e.$set(e.user,"login",t.target.value)}}})]),s("div",{staticClass:"my-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.pass,expression:"user.pass"}],staticClass:"input",attrs:{id:"u_pass",type:"password",placeholder:"Mot de passe ..."},domProps:{value:e.user.pass},on:{input:function(t){t.target.composing||e.$set(e.user,"pass",t.target.value)}}})]),e._m(1)])])])},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"border-b pb-3 mb-2 "},[s("span",{staticClass:"text-3xl"},[e._v(" Solarpro ")]),e._v(" "),s("span",{staticClass:"text-xl"},[e._v("Admin")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-2 justify-center flex"},[s("button",{staticClass:"bt rounded-full duration-300"},[e._v("Connexion")])])}],x={data:function(){return{user:{login:"",pass:""},error_login:{isOn:!1,message:""},msg_info:{active:!1,success:!1,message:""},id_time_out:-1,state:"login"}},methods:{connect:function(){var e=this;this.$http.post("p/auth",this.user).then((function(t){t.body.status?(e.show_msg_info(t.body.message,!0),e.$store.commit("setUser",t.body.user),setTimeout((function(){}),1e3)):(document.querySelector("#u_login").focus(),e.show_msg_info(t.body.message))}),(function(e){}))},show_msg_info:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.msg_info.active=!0,this.msg_info.message=e,this.msg_info.success=t;var s=this;-1!=this.id_time_out&&clearTimeout(this.id_time_out),this.id_time_out=setTimeout((function(){s.msg_info.active=!1,s.msg_info.message="",s.id_time_out=-1}),2e3)},change_state:function(e){"login"==e&&"login"!=this.state&&document.querySelector("#u_login").focus(),this.state=e}}},y=x,C=(s("a968"),Object(d["a"])(y,h,b,!1,null,"f83e795a",null)),w=C.exports,j={data:function(){return{d:"",data_loaded:!1}},name:"App",components:{login:w,contents:g},methods:{test_recup_data:function(){this.$http.get("p/test").then((function(e){console.log(e)}),(function(e){}))},check_connect:function(){var e=this;this.$http.get("a/check_connect").then((function(t){t.body.status&&e.$store.commit("setUser",t.body.user),e.data_loaded=!0}),(function(e){}))}},created:function(){this.check_connect()}},$=j,k=(s("f6d0"),Object(d["a"])($,a,n,!1,null,"e7f4d0b0",null)),O=k.exports,T=s("1157"),L=s.n(T),M=s("8c4f"),P=(s("845f"),s("755e")),E=s("2b0e").default,N=s("28dd").default,I=s("2f62").default,A=s("e26c").default;E.use(N),E.use(I),E.use(M["a"]),window.$=L.a,E.use(P,{load:{key:"AIzaSyBUADJkgRWIVtbeUlZlJ2oqEX_SU9xaQo4",libraries:"places"}}),E.config.productionTip=!1,E.http.options.root="/api",E.http.headers.common["Authorization"]="Basic YXBpOnBhc3N3b3Jk";var S=s("4360").default;new E({store:S,router:A,render:function(e){return e(O)}}).$mount("#app")},"56d9":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},n=[],i={data:function(){return{}}},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,null,null);t["default"]=l.exports},"6fb8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-2"},[s("div",{},[s("div",{staticClass:"border-b mb-3 flex justify-center items-center pb-2"},[s("span",{staticClass:"text-xl text-gray-700 flex-grow"},[e._v(" Liste des emplacements - ")]),s("button",{staticClass:"ml-2 bt rounded-full flex justify-center items-center",on:{click:function(t){return e.show_add_place(!0)}}},[s("span",{staticClass:"material-icons"},[e._v(" add ")]),s("span",[e._v(" Ajouter ")])])]),s("div",{},[0!=e.places.list.length?s("ctable",{attrs:{_head:e.places.head,_list:e.places.list,_key:"id"},on:{on_delete:e.delete_place,on_view:e.view_place}}):s("div",{staticClass:"w-full flex justify-center items-center"},[s("span",{staticClass:"text-xl text-gray-600"},[e._v(" Aucun emplacement à afficher. ")])])],1)]),e.on_add_place?s("div",{staticClass:"fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80"},[s("div",{staticClass:"bg-gray-100 border flex flex-col border-green-400 rounded shadow-lg",style:{minWidth:"400px",width:"900px",height:"500px"}},[s("div",{staticClass:"border-b p-2 bg-green-400 flex"},[s("span",{staticClass:"flex-grow text-2xl text-gray-700 font-bold"},[e._v("Ajout d'un emplacement")]),s("button",{staticClass:"w-8 h-8 rounded-full flex justify-center items-center text-gray-600\n                 hover:text-gray-800 duration-300",on:{click:function(t){return e.show_add_place(!1)}}},[s("span",{staticClass:"material-icons"},[e._v("clear")])])]),s("div",{staticClass:"flex w-full"},[s("div",{staticClass:"flex-grow",staticStyle:{width:"100%"}},[s("LeafletMap",{attrs:{places:e.places.list,radius:e.places.model.radius},on:{position:e.position,place_name:e.place_name}})],1),s("div",{key:"",staticClass:"flex flex-col justify-center items-center "},[s("div",{staticClass:"duration-300 h-0 flex justify-center items-center",class:e.info.isOn?"h-14":"h-0"},[e.info.isOn?s("div",{staticClass:"rounded p-2 ",class:e.info.success?"bg-green-400":"bg-red-400"},[s("span",[e._v(" "+e._s(e.info.message)+" ")])]):e._e()]),s("form",{staticClass:"flex flex-col ",attrs:{action:"/",method:"post"},on:{submit:function(t){return t.preventDefault(),e.post_add_place.apply(null,arguments)}}},[s("div",{staticClass:"mt-2 p-2 flex flex-col justify-end"},[s("div",{staticClass:"flex flex-col pr-2"},[s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Latitude et Longitude ... ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.places.model.latlng,expression:"places.model.latlng",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"@exemple  -14.545454545, 48.15465445646546 ..."},domProps:{value:e.places.model.latlng},on:{input:function(t){t.target.composing||e.$set(e.places.model,"latlng",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Rayon (en mètre) ... ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.places.model.radius,expression:"places.model.radius",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"number",placeholder:"@exemple 50 ..."},domProps:{value:e.places.model.radius},on:{input:function(t){t.target.composing||e.$set(e.places.model,"radius",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Libellé ... ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.places.model.label,expression:"places.model.label",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"@exemple Analakely ..."},domProps:{value:e.places.model.label},on:{input:function(t){t.target.composing||e.$set(e.places.model,"label",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])]),e._m(0)])])])])]):e._e()])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-2 border-t flex justify-end"},[s("button",{staticClass:"bt-w rounded"},[e._v(" Créer ")])])}],i=s("ae38"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"map"}})},r=[],l=s("4f96"),c=s("1da1"),u=(s("96cf"),s("d81d"),s("ac1f"),s("1276"),s("b0c0"),s("fb6a"),s("99af"),s("d3b7"),s("159b"),s("e11e")),d=s.n(u),p=(s("6cc5"),s("e192"),s("885b"),s("5c7a"),s("067d"),{props:["radius","places"],watch:{radius:function(e){this.circle_l.setRadius(e)}},components:{},data:function(){return{_radius:50,accessToken:"pk.eyJ1IjoiYW5nZWxvMTQyNyIsImEiOiJja3c0aGExMTIwNmp0Mm9udnY2bGNsZnRoIn0.PiJCKKLMoWzmULCaFs2CqA",circle_l:null,features_circle:null,origin_view:[-18.929670491513264,47.52685546875001],mymap:{}}},methods:{initmap:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e,e.mymap=d.a.map("map").setView(e.origin_view,16),d.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiYW5nZWxvMTQyNyIsImEiOiJja3c0aGExMTIwNmp0Mm9udnY2bGNsZnRoIn0.PiJCKKLMoWzmULCaFs2CqA"}).addTo(e.mymap),e.mymap.dragging.enable(),e.features_circle=d.a.featureGroup().addTo(e.mymap),d.a.Control.geocoder({defaultMarkGeocode:!1}).addTo(e.mymap).on("markgeocode",(function(t){console.log(t.geocode),s.features_circle.clearLayers(),s.circle_l=d.a.circle(t.geocode.center,{color:"red",fillColor:"#f03",fillOpacity:.5,draggable:!0,radius:s.radius}).addTo(e.features_circle),e.mymap.setView(t.geocode.center,16),s.$emit("position",t.geocode.center);var a=t.geocode.name.split(","),n=Object(l["a"])(a),i=n[0],o=n[1];n.slice(2);e.location=i+","+o,e.$emit("place_name",e.location)})),e.mymap.on("click",(function(t){s.features_circle.clearLayers(),s.circle_l=d.a.circle(t.latlng,{color:"red",fillColor:"#f03",fillOpacity:.5,radius:s.radius}).addTo(e.features_circle),s.$emit("position",t.latlng),s.getLocation(t.latlng)}));case 7:case"end":return t.stop()}}),t)})))()},getLocation:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a,n,i,o,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,t.$http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e.lng,",").concat(e.lat,".json?access_token=").concat(t.accessToken));case 3:a=s.sent,n=a.data.features[0].place_name.split(","),i=Object(l["a"])(n),o=i[1],r=i[2],i.slice(3),t.location=o+","+r,t.$emit("place_name",t.location),s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](0),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,9]])})))()},display_all_place:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=d.a.featureGroup().addTo(e.mymap),a={},n={},e.places.forEach((function(e){a=d.a.circle([e.lat,e.lng],{color:"green",fillColor:"green",fillOpacity:.5,radius:e.radius}).addTo(s),n=new d.a.Popup({autoClose:!1,closeOnClick:!1}).setContent(e.label).setLatLng([e.lat,e.lng]),a.bindPopup(n),a.openPopup(n)}));case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.initmap(),this.display_all_place()}}),m=p,f=(s("ffad"),s("2877")),_=Object(f["a"])(m,o,r,!1,null,"b8e64600",null),v=_.exports,g={components:{ctable:i["a"],LeafletMap:v},data:function(){return{places:{head:[{code:"lat",label:"Latitude"},{code:"lng",label:"Longitude"},{code:"radius",label:"Rayon (en mètre)"},{code:"label",label:"Libellé"}],list:[],model:{latlng:"",radius:50,label:""}},info:{success:"",message:"",isOn:!1,idTimeout:-1},on_add_place:!1,position_on_carte:[],current_position:[],current_place_name:""}},methods:{show_add_place:function(e){this.on_add_place=e},recup_place_list:function(){var e=this;this.$http.get("a/places").then((function(t){t.body.status&&(e.places.list=t.body.places)}),(function(e){}))},show_info:function(e,t,s){var a=this;this.info.message=t,this.info.isOn=!0,this.info.success=e,-1!=this.info.idTimeout&&clearTimeout(this.info.idTimeout),this.info.idTimeout=setTimeout((function(){a.info.isOn=!1,void 0!=s&&s()}),2e3)},post_add_place:function(){var e=this;this.$http.post("a/places",this.places.model).then((function(t){t.body.status?(e.show_info(t.body.status,t.body.message,(function(){e.show_add_place(!1)})),e.recup_place_list(),e.places.model={latlng:"",radius:50,label:""}):e.show_info(t.body.status,t.body.message)}),(function(e){}))},position:function(e){this.places.model.latlng=e.lat+","+e.lng},place_name:function(e){this.places.model.label=e},delete_place:function(e){var t=this,s=confirm("Voulez vous vraiment supprimer l'emplacement +"+this.places.list[e].label+" !!?");s&&this.$http.delete("a/places/"+this.places.list[e].id).then((function(e){e.body.status?(alert(e.body.message),t.recup_place_list()):alert(e.body.message)}),(function(e){}))},view_place:function(e){var t=this.places.list[e].id;this.$router.push({name:"vue_emplacement",params:{id:t}})}},created:function(){this.recup_place_list()}},h=g,b=Object(f["a"])(h,a,n,!1,null,null,null);t["default"]=b.exports},"845f":function(e,t,s){},"84eb":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-2"},[s("div",{},[s("div",{staticClass:"border-b mb-3 flex items-center pb-2"},[s("span",{staticClass:"text-xl text-gray-700 flex-grow "},[e._v(" Liste des utilisateurs - ")]),s("button",{staticClass:"ml-2 bt rounded-full flex justify-center items-center",on:{click:function(t){return e.show_add_user(!0)}}},[s("span",{staticClass:"material-icons"},[e._v(" add ")]),s("span",[e._v(" Ajouter ")])])]),s("div",{},[0!=e.users.list.length?s("ctable",{attrs:{_head:e.users.head,_list:e.users.list,_key:"login"},on:{on_view:e.view_user,on_delete:e.delete_user}}):s("div",{staticClass:"w-full flex justify-center items-center"},[s("span",{staticClass:"text-xl text-gray-600"},[e._v(" Aucun utiisateur à afficher. ")])])],1)]),e.on_add_user?s("div",{staticClass:"fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80"},[s("div",{staticClass:"bg-gray-100 border flex flex-col border-green-400 rounded shadow-lg",style:{minWidth:"400px"}},[s("div",{staticClass:"border-b p-2 bg-green-400 flex"},[s("span",{staticClass:"flex-grow text-2xl text-gray-700 font-bold"},[e._v("Ajout d'un utilisateur")]),s("button",{staticClass:"w-8 h-8 rounded-full flex justify-center items-center text-gray-600\n                 hover:text-gray-800 duration-300",on:{click:function(t){return e.show_add_user(!1)}}},[s("span",{staticClass:"material-icons"},[e._v("clear")])])]),s("div",{staticClass:"duration-300 h-0 flex justify-center items-center",class:e.info.isOn?"h-14":"h-0"},[e.info.isOn?s("div",{staticClass:"rounded p-2 ",class:e.info.success?"bg-green-400":"bg-red-400"},[s("span",[e._v(" "+e._s(e.info.message)+" ")])]):e._e()]),s("form",{attrs:{action:"/",method:"post"},on:{submit:function(t){return t.preventDefault(),e.post_add_user.apply(null,arguments)}}},[s("div",{staticClass:"mt-2 p-2 flex"},[s("div",{staticClass:"flex flex-col pr-2"},[s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Nom ... ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.users.model.nom,expression:"users.model.nom",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Nom ..."},domProps:{value:e.users.model.nom},on:{input:function(t){t.target.composing||e.$set(e.users.model,"nom",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Prénom ... ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.users.model.prenom,expression:"users.model.prenom",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Prénom ..."},domProps:{value:e.users.model.prenom},on:{input:function(t){t.target.composing||e.$set(e.users.model,"prenom",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Login ... ")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.users.model.login,expression:"users.model.login",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Login ..."},domProps:{value:e.users.model.login},on:{input:function(t){t.target.composing||e.$set(e.users.model,"login",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),s("div",{staticClass:"pl-2 flex flex-col"},[s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Type ... ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.users.model.type,expression:"users.model.type"}],staticClass:"input",attrs:{name:"",id:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.users.model,"type",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"admin"}},[e._v("Admin")]),s("option",{attrs:{value:"personel"}},[e._v("Personel")])])]),s("div",{staticClass:"mt-1 flex flex-col"},[s("span",{staticClass:"text-sm text-gray-600"},[e._v(" Mot de passe ... ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.users.model.pass,expression:"users.model.pass"}],staticClass:"input",attrs:{type:"text",placeholder:"Mot de passe ..."},domProps:{value:e.users.model.pass},on:{input:function(t){t.target.composing||e.$set(e.users.model,"pass",t.target.value)}}})])])]),e._m(0)])])]):e._e()])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-2 border-t flex justify-end"},[s("button",{staticClass:"bt-w rounded"},[e._v(" Créer ")])])}],i=s("ae38"),o={components:{ctable:i["a"]},data:function(){return{test_message:"",users:{head:[{code:"login",label:"Login"},{code:"prenom",label:"Prénom"},{code:"nom",label:"Nom"},{code:"type",label:"Type"}],list:[],model:{login:"",prenom:"",nom:"",pass:"",type:"personel"}},info:{success:"",message:"",isOn:!1,idTimeout:-1},on_add_user:!1}},methods:{init:function(){this.test_message="SAlut test de message",this.recup_user_list()},recup_user_list:function(){var e=this;this.$http.get("a/users").then((function(t){console.log(t.body),t.body.status&&(e.users.list=t.body.users)}),(function(e){}))},show_add_user:function(e){this.on_add_user=e},post_add_user:function(){var e=this;this.$http.post("a/users",e.users.model).then((function(t){t.body.status?(e.show_info(t.body.status,t.body.message,(function(){e.show_add_user(!1)})),e.recup_user_list()):e.show_info(t.body.status,t.body.message)}))},show_info:function(e,t,s){var a=this;this.info.message=t,this.info.isOn=!0,this.info.success=e,-1!=this.info.idTimeout&&clearTimeout(this.info.idTimeout),this.info.idTimeout=setTimeout((function(){a.info.isOn=!1,void 0!=s&&s()}),2e3)},view_user:function(e){},delete_user:function(e){var t=this.users.list[e],s=confirm("Voulez-vous vraiment supprimer l'utilisateur ayant l'identifiant "+t.login);if(s){var a=this;this.$http.delete("a/users/"+t.id).then((function(e){e.body.status?(a.recup_user_list(),alert(e.body.message)):alert(e.body.message)}),(function(e){}))}}},created:function(){this.init()}},r=o,l=s("2877"),c=Object(l["a"])(r,a,n,!1,null,null,null);t["default"]=c.exports},"9efe":function(e,t,s){"use strict";s("dbbf")},a73a:function(e,t,s){},a968:function(e,t,s){"use strict";s("393f")},ae38:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"w-full text-gray-700 rounded"},[s("thead",{staticClass:"rounded"},[s("tr",{staticClass:"text-left border-b bg-green-400 rounded-t"},[e._l(e._head,(function(t){return s("th",{key:t.label},[e._v(" "+e._s(t.label)+" ")])})),s("th")],2)]),s("tbody",e._l(e._list,(function(t,a){return s("tr",{key:t[e._key],staticClass:"cursor-pointer duration-300 hover:bg-blue-200 hover:bg-opacity-20 text-left bg-gray-300 bg-opacity-5 rounded-t",on:{click:function(t){return e.click_ligne(a)}}},[e._l(e._head,(function(a){return s("td",{key:a.label},[e._v(" "+e._s(t[a.code])+" ")])})),s("td",{staticClass:"flex justify-end items-center"},[s("button",{staticClass:"bt-icon mr-2",on:{click:function(t){return e.on_delete(a)}}},[s("span",{staticClass:"material-icons"},[e._v(" delete ")])]),s("button",{staticClass:"bt-icon mr-2",on:{click:function(t){return e.on_view(a)}}},[s("span",{staticClass:"material-icons"},[e._v(" open_in_full ")])])])],2)})),0)])},n=[],i={props:["_head","_list","_key"],data:function(){return{}},methods:{click_ligne:function(e){this.$emit("on_click",e)},on_delete:function(e){this.$emit("on_delete",e)},on_view:function(e){this.$emit("on_view",e)}}},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,null,null);t["a"]=l.exports},dbbf:function(e,t,s){},e26c:function(e,t,s){"use strict";s.r(t);var a=s("8c4f"),n=[{path:"/",component:s("1384").default,name:"home"},{path:"/parametres",component:s("56d9").default,name:"settings"},{path:"/utilisateur",component:s("84eb").default,name:"user"},{path:"/emplacement",component:s("6fb8").default,name:"emplacement"},{path:"/emplacement/:id",component:s("f0fa").default,name:"vue_emplacement"}];t["default"]=new a["a"]({routes:n})},f0fa:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{attrs:{id:"map"}}),s("div",{staticClass:"p-2 flex"},[s("div",{staticClass:"p-2"},[s("div",{staticClass:"p-2 mb-2 border bg-green-300 bg-opacity-10  rounded"},[s("span",[e._v("Latitude : ")]),e._v(" "),s("span",{staticClass:"font-bold"},[e._v(" "+e._s(e.place.lat)+" ")])]),s("div",{staticClass:"p-2 border bg-green-300 bg-opacity-10 rounded"},[s("span",[e._v("Logitude : ")]),e._v(" "),s("span",{staticClass:"font-bold"},[e._v(" "+e._s(e.place.lng)+" ")])])]),s("div",{staticClass:"p-2"},[s("div",{staticClass:"p-2 border bg-green-300 bg-opacity-10 rounded"},[s("span",[e._v(" Rayon (en mètre) : ")]),e._v(" "),s("span",{staticClass:"font-bold"},[e._v(" "+e._s(e.place.radius)+" ")])])]),s("div",{staticClass:"p-2"},[s("div",{staticClass:"p-2 border bg-green-300 bg-opacity-10 rounded"},[s("span",{},[e._v(" Libellé : ")]),e._v(" "),s("span",{staticClass:"font-bold"},[e._v(" "+e._s(e.place.label)+" ")])])])])])},n=[],i=s("1da1"),o=(s("96cf"),s("d81d"),{data:function(){return{radius:50,accessToken:"pk.eyJ1IjoiYW5nZWxvMTQyNyIsImEiOiJja3c0aGExMTIwNmp0Mm9udnY2bGNsZnRoIn0.PiJCKKLMoWzmULCaFs2CqA",circle_l:null,features_circle:null,origin_view:[0,0],mymap:{},place:{}}},methods:{initmap:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e,e.mymap=L.map("map").setView(e.origin_view,18),L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiYW5nZWxvMTQyNyIsImEiOiJja3c0aGExMTIwNmp0Mm9udnY2bGNsZnRoIn0.PiJCKKLMoWzmULCaFs2CqA"}).addTo(e.mymap),e.features_circle=L.featureGroup().addTo(e.mymap),s.features_circle.clearLayers(),s.circle_l=L.circle(e.origin_view,{color:"red",fillColor:"#f03",fillOpacity:.5,radius:e.radius}).bindPopup(e.place.label).addTo(e.features_circle),s.circle_l.openPopup(e.origin_view);case 7:case"end":return t.stop()}}),t)})))()},recup_emplacement:function(){var e=this;this.$http.get("a/places/"+this.$route.params.id).then((function(t){t.body.status?(e.place=t.body.place,e.origin_view=[e.place.lat,e.place.lng],e.radius=e.place.radius,e.initmap()):e.$router.push({name:"emplacement"})}),(function(e){alert("Erreur de Réseau")}))}},mounted:function(){this.recup_emplacement()}}),r=o,l=(s("9efe"),s("2877")),c=Object(l["a"])(r,a,n,!1,null,"0d2bd354",null);t["default"]=c.exports},f6d0:function(e,t,s){"use strict";s("a73a")},ffad:function(e,t,s){"use strict";s("3bd8")}});
//# sourceMappingURL=index.1f447945.js.map