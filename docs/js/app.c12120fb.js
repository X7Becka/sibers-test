(function(e){function t(t){for(var c,a,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tests/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0855":function(e,t,n){},"11e8":function(e,t,n){"use strict";n("0855")},1457:function(e,t,n){},"1fbb":function(e,t,n){},"245c":function(e,t,n){},"250e":function(e,t,n){"use strict";n.r(t);var c=n("9523"),r=n.n(c),o=n("7a23");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(o["withScopeId"])("data-v-6e0fe89c");Object(o["pushScopeId"])("data-v-6e0fe89c");var u={class:"contacts-page"};Object(o["popScopeId"])();var d=s((function(e,t,n,c,r,a){var s=Object(o["resolveComponent"])("ContactsList"),d=Object(o["resolveComponent"])("ContactEditor");return Object(o["openBlock"])(),Object(o["createBlock"])("div",u,[Object(o["createVNode"])(s,i({},c.mapStateToProps),null,16),Object(o["createVNode"])(d)])})),l=Object(o["withScopeId"])("data-v-07d82018");Object(o["pushScopeId"])("data-v-07d82018");var p={class:"contacts-list__filters-wrapper"};Object(o["popScopeId"])();var f=l((function(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("CustomInput"),s=Object(o["resolveComponent"])("Contact");return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:[n.className,"contacts-list"]},[Object(o["createVNode"])("div",p,[Object(o["createVNode"])(i,{alt:"Filter by username",placeholder:"Filter by username",modelValue:c.state.inputName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.state.inputName=e}),keyup:c.filterByName,value:c.state.inputName,"class-name":"contacts-list__filter-input"},null,8,["modelValue","keyup","value"]),Object(o["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return c.testing&&c.testing.apply(c,arguments)})},"WQWEQWE")]),Object(o["createVNode"])(o["TransitionGroup"],{tag:"div",css:!1,onBeforeEnter:c.transition.beforeEnter,onEnter:c.transition.onEnter,onLeave:c.transition.onLeave,class:"contacts-list__contacts-wrapper"},{default:l((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.state.filteredContacts,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(s,{"data-index":null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id,"class-name":"contacts-list__contact",contact:e,onClick:function(t){return c.editContact(null===e||void 0===e?void 0:e.id)}},null,8,["data-index","contact","onClick"])})),128))]})),_:1},8,["onBeforeEnter","onEnter","onLeave"])],2)})),b=(n("4de4"),n("c975"),n("a9b3"),n("b0c0"),Object(o["withScopeId"])("data-v-20f67030"));Object(o["pushScopeId"])("data-v-20f67030");var m={class:"contact__layout"},O=Object(o["createVNode"])("div",{class:"contact__avatar-wrapper"},[Object(o["createVNode"])("img",{class:"contact__avatar",src:"https://advanced-television.com/wp-content/uploads/2020/10/Borat.jpg",alt:"borat"})],-1),v={class:"contact__info-wrapper"},j={class:"contact__info-main"},y={class:"contact__name"},g={class:"contact__username"};Object(o["popScopeId"])();var S=b((function(e,t,n,c,r,a){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:[n.className,"contact"]},[Object(o["createVNode"])("div",m,[O,Object(o["createVNode"])("div",v,[Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",y,"Name: "+Object(o["toDisplayString"])(n.contact.name),1),Object(o["createVNode"])("div",g,"Username: "+Object(o["toDisplayString"])(n.contact.username),1)])])])],2)})),_={name:"contact",props:{className:{type:String,default:"",required:!0},contact:{type:Object,default:function(){},required:!0}}};n("3e43");_.render=S,_.__scopeId="data-v-20f67030";var h=_,C=n("4542"),k=n("5502"),T={name:"ContactsList",components:{CustomInput:C["a"],Contact:h},props:{className:{type:String,default:"",required:!0}},setup:function(e){var t=Object(k["c"])(),n=Object(o["reactive"])({contacts:[],filteredContacts:[],inputName:""});Object(o["onMounted"])((function(){c()}));var c=function(){r()},r=function(){t.dispatch("CONTACTS/LOAD_CONTACTS").then((function(){return n.contacts=t.getters["CONTACTS/GET_CONTACTS"]})).then((function(){return i()}))},a=function(){console.log(n,"state")},i=function(){n.filteredContacts=n.contacts.filter((function(e){return-1!==e.username.toLowerCase().indexOf(n.inputName.toLowerCase())}))},s=function(e){t.dispatch("CONTACTS/GET_CONTACT_TO_EDIT",e)},u={beforeEnter:function(e){return e.style.height="0"},onEnter:function(e,t){return Velocity(e,{height:"80px"},{complete:t})},onLeave:function(e,t){return Velocity(e,{height:0},{complete:t})}};return{state:n,filterByName:i,transition:u,testing:a,editContact:s}}};n("ed83");T.render=f,T.__scopeId="data-v-07d82018";var N=T,E=Object(o["withScopeId"])("data-v-3d565ff3");Object(o["pushScopeId"])("data-v-3d565ff3");var w={class:"contact-editor"},I={key:0,class:"contact-editor__editor-field"};Object(o["popScopeId"])();var B=E((function(e,t,n,c,r,a){var i=Object(o["resolveComponent"])("CustomInput");return Object(o["openBlock"])(),Object(o["createBlock"])("div",w,[c.state.editableContact?(Object(o["openBlock"])(),Object(o["createBlock"])("div",I,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.state.newData,(function(e,t,n){return Object(o["openBlock"])(),Object(o["createBlock"])(i,{value:c.state.newData[t],modelValue:c.state.newData[t],"onUpdate:modelValue":function(e){return c.state.newData[t]=e},modelModifiers:{trim:!0},type:c.type[t]||"text",key:n,placeholder:c.state.editableContact[t]},null,8,["value","modelValue","onUpdate:modelValue","type","placeholder"])})),128)),Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return c.testing&&c.testing.apply(c,arguments)})},"TEST")])):Object(o["createCommentVNode"])("",!0)])})),V=(n("4160"),n("b64b"),n("159b"),n("4082")),R=n.n(V),P={name:"ContactEditor",components:{CustomInput:C["a"]},setup:function(){var e=Object(k["c"])(),t=Object(o["reactive"])({editableContact:null,newData:{}});Object(o["onMounted"])((function(){n()}));var n=function(){c()},c=function(){e.subscribe((function(e){if("CONTACTS/SET_CONTACT_TO_EDIT"===e.type)return r(e.payload)}))},r=function(e){t.editableContact=e,t.newData=a(e)},a=function(e){e.id,e.lastEdit;var t=R()(e,["id","lastEdit"]),n={};return Object.keys(t).forEach((function(e){n[e]=null})),n},i={email:"email",password:"password",phone:"tel"},s=function(){console.log(t.newData,"state.newData")},u=function(e){console.log(e,"item")};return{state:t,testing:s,log:u,type:i}}};n("c3f8");P.render=B,P.__scopeId="data-v-3d565ff3";var D=P,A={name:"ContactsPage",components:{ContactEditor:D,ContactsList:N},setup:function(){var e={className:"contacts-page__contacts-block"};return{mapStateToProps:e}}};n("e9ce");A.render=d,A.__scopeId="data-v-6e0fe89c";t["default"]=A},"2bd1":function(e,t,n){"use strict";n("648b")},"30b8":function(e,t,n){e.exports=n.p+"img/flop.c472eb55.png"},"392b":function(e,t,n){"use strict";n("8525")},"3e43":function(e,t,n){"use strict";n("6926")},4542:function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["withScopeId"])("data-v-093502a5"),o=r((function(e,t,n,r,o,a){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])("input",{class:["custom-input",n.className],onKeyup:t[1]||(t[1]=function(){return n.keyup&&n.keyup.apply(n,arguments)}),type:n.type,placeholder:n.placeholder,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.inputValue=e}),alt:n.alt,value:n.value},null,42,["type","placeholder","alt","value"])),[[c["vModelDynamic"],r.inputValue]])})),a=(n("a9e3"),{name:"CustomInput",props:{className:{type:String,default:"",required:!0},type:{type:String,default:"text",required:!1},placeholder:{type:String,default:null,required:!1},value:{type:[String,Number],default:null,required:!1},alt:{type:[String,Number],default:"input",required:!0},keyup:{type:Function,default:function(){return null},required:!1}},setup:function(e){var t=Object(c["ref"])(e.value);return{inputValue:t}}});n("392b");a.render=o,a.__scopeId="data-v-093502a5";t["a"]=a},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=(n("45ec"),Object(c["withScopeId"])("data-v-56d7129f"));Object(c["pushScopeId"])("data-v-56d7129f");var o={class:"main-layout"};Object(c["popScopeId"])();var a=r((function(e,t,n,r,a,i){var s=Object(c["resolveComponent"])("Progressbar"),u=Object(c["resolveComponent"])("RouterLinks"),d=Object(c["resolveComponent"])("RouterView");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])(s),Object(c["createVNode"])(u),Object(c["createVNode"])(d)])})),i=(n("250e"),n("8594"),Object(c["withScopeId"])("data-v-76e8644e"));Object(c["pushScopeId"])("data-v-76e8644e");var s={class:"progressbar"};Object(c["popScopeId"])();var u=i((function(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",s,[Object(c["createVNode"])("div",{class:[r.state,"progressbar__state"]},null,2)])})),d=n("5502"),l={name:"Progressbar",setup:function(){var e=Object(d["c"])(),t=Object(c["ref"])("done");Object(c["onMounted"])((function(){n()}));var n=function(){e.subscribe((function(e){"PROGRESSBAR/SET_PROGRESS_STATUS"===e.type&&(t.value=e.payload)}))};return{state:t}}};n("a983");l.render=u,l.__scopeId="data-v-76e8644e";var p=l,f=(n("912d"),Object(c["withScopeId"])("data-v-23a988dc"));Object(c["pushScopeId"])("data-v-23a988dc");var b={class:"router-links"},m={class:"router-links__wrapper"};Object(c["popScopeId"])();var O=f((function(e,t,n,r,o,a){var i=Object(c["resolveComponent"])("RouterLink");return Object(c["openBlock"])(),Object(c["createBlock"])("div",b,[Object(c["createVNode"])("div",m,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.pages,(function(e,t,n){return Object(c["openBlock"])(),Object(c["createBlock"])(i,{class:"router-links__link",key:n,to:e},{default:f((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t),1)]})),_:2},1032,["to"])})),128))])])})),v={name:"router-links",setup:function(){var e={Memory:"/memory",Contacts:"/contacts"};return{pages:e}}};n("9fff");v.render=O,v.__scopeId="data-v-23a988dc";var j=v,y={name:"MainLayout",components:{RouterLinks:j,Progressbar:p}};n("7c6e");y.render=a,y.__scopeId="data-v-56d7129f";var g=y,S=(n("d3b7"),n("e6cf"),n("6c02")),_=[{path:"/contacts",name:"Contacts",component:function(){return Promise.resolve().then(n.bind(null,"250e"))}},{path:"/memory",name:"Memory",component:function(){return Promise.resolve().then(n.bind(null,"912d"))}}],h=Object(S["a"])({history:Object(S["b"])("/tests/"),routes:_}),C=h,k=n("bc3a"),T=n.n(k),N=function(){return{progress:"done"}},E={HANDLE_PROGRESS_STATUS:function(e,t){var n=e.commit;n("SET_PROGRESS_STATUS",t)}},w={SET_PROGRESS_STATUS:function(e,t){e.progress=t}},I={loading:function(e){return e("PROGRESSBAR/HANDLE_PROGRESS_STATUS","loading",{root:!0})},done:function(e){return e("PROGRESSBAR/HANDLE_PROGRESS_STATUS","done",{root:!0})}},B={namespaced:!0,state:N,actions:E,mutations:w},V=function(){return{contacts:null,editingContact:null}},R="https://5fc7a3fcf3c77600165d89cf.mockapi.io/api/Contact",P={GET_CONTACTS:function(e){return e.contacts},GET_EDITING_CONTACT:function(e){return e.editingContact}},D={LOAD_CONTACTS:function(e){var t=e.commit,n=e.dispatch;return new Promise((function(e){I.loading(n),T.a.get(R).then((function(e){return t("STORE_CONTACTS",e.data)})).then((function(){return I.done(n)})).then(e)}))},GET_CONTACT_TO_EDIT:function(e,t){var n=e.commit,c=e.dispatch;return new Promise((function(e){I.loading(c),T.a.get("".concat(R,"/").concat(t)).then((function(e){return n("SET_CONTACT_TO_EDIT",e.data)})).then((function(){return I.done(c)})).then(e)}))}},A={STORE_CONTACTS:function(e,t){e.contacts=t},SET_CONTACT_TO_EDIT:function(e,t){e.editingContact=t}},L={namespaced:!0,state:V,getters:P,actions:D,mutations:A},M=function(){return{scores:[]}},x="https://5fc7a3fcf3c77600165d89cf.mockapi.io/api/scoreboard",G={GET_SCORES:function(e){return e.scores}},F={SUBMIT_SCORES:function(e,t){var n=e.commit,c=e.dispatch;return new Promise((function(e){I.loading(c),T.a.post(x,t).then((function(e){return n("STORE_SCORES",e.data)})).then((function(){return I.done(c)})).then(e)}))},FETCH_SCORES:function(e){var t=e.commit,n=e.dispatch;return new Promise((function(e){I.loading(n),T.a.get(x).then((function(e){return t("STORE_SCORES",e.data)})).then((function(){return I.done(n)})).then(e)}))}},U={STORE_SCORES:function(e,t){e.scores=t}},q={namespaced:!0,state:M,getters:G,actions:F,mutations:U},Y=!1,H={collapsed:!1,logActions:!1},W=new d["b"].Store({modules:{PROGRESSBAR:B,CONTACTS:L,MEMORY:q},plugins:Y?[Object(d["a"])(H)]:[]});Object(c["createApp"])({render:function(){return Object(c["h"])(g)}}).use(W).use(C).mount("#app")},"648b":function(e,t,n){},6926:function(e,t,n){},"7c6e":function(e,t,n){"use strict";n("b4f5")},8525:function(e,t,n){},8594:function(e,t,n){},"912d":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["withScopeId"])("data-v-16ed92ee");Object(c["pushScopeId"])("data-v-16ed92ee");var o={class:"memory-page"},a={key:0,class:"memory-page__slider-wrapper"},i=Object(c["createVNode"])("div",{class:"memory-page__slider-title"},"Difficulty",-1),s={class:"memory-page__stopwatch-ingame"},u={class:"memory-page__btn-group"},d={key:2,class:"memory-page__enter-nickname-wrapper"},l={class:"memory-page__score"};Object(c["popScopeId"])();var p=r((function(e,t,n,p,f,b){var m=Object(c["resolveComponent"])("MemoryScoreboard"),O=Object(c["resolveComponent"])("CustomSlider"),v=Object(c["resolveComponent"])("MemoryCard"),j=Object(c["resolveComponent"])("CustomInput");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])(m,{data:p.state.scores},null,8,["data"]),p.gameState.isReady?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[i,Object(c["createVNode"])(O,{modelValue:p.state.cells,"onUpdate:modelValue":t[1]||(t[1]=function(e){return p.state.cells=e}),"class-name":"memory-page__slider",adsorb:!0,marks:[36,64,100],min:36,max:100},null,8,["modelValue"])])),p.gameState.isEnd?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:1,style:{width:p.recalculateFieldDimension()+"px",height:p.recalculateFieldDimension()+"px"},class:"memory-page__cards-wrapper"},[Object(c["createVNode"])("div",s,Object(c["toDisplayString"])(p.renderStopwatch),1),Object(c["createVNode"])(c["TransitionGroup"],{css:!1,onBeforeEnter:p.transition.beforeEnter,onEnter:p.transition.enter,onLeave:p.transition.leave},{default:r((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(p.state.shuffledCells,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(v,{onClick:function(n){return p.handleCard(e,t)},class:"memory-page__card","data-index":e,key:t,"is-revealed":p.state.pending[t]===e||p.gameState.isSteady,"is-unlocked":p.state.revealed[t]===e,"images-counter":p.loadingImagesCounter},null,8,["onClick","data-index","is-revealed","is-unlocked","images-counter"])})),128))]})),_:1},8,["onBeforeEnter","onEnter","onLeave"]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("button",{onClickOnce:t[2]||(t[2]=function(){return p.ready&&p.ready.apply(p,arguments)})},"ready",32)])],4)),p.gameState.isEnd?(Object(c["openBlock"])(),Object(c["createBlock"])("div",d,[Object(c["createVNode"])(j,{"class-name":"memory-page__endgame-input",value:p.state.nickName,modelValue:p.state.nickName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.state.nickName=e}),placeholder:"Nickname"},null,8,["value","modelValue"]),Object(c["createVNode"])("div",l,"Your score is: "+Object(c["toDisplayString"])(p.renderStopwatch)+"!",1),Object(c["createVNode"])("button",{onClickOnce:t[4]||(t[4]=function(){return p.submitScores&&p.submitScores.apply(p,arguments)})},"submit",32)])):Object(c["createCommentVNode"])("",!0)])})),f=(n("a623"),n("c975"),n("a9e3"),n("b64b"),n("9523")),b=n.n(f),m=Object(c["withScopeId"])("data-v-5162fa2b");Object(c["pushScopeId"])("data-v-5162fa2b");var O={class:"memory-card__progress-wrapper"};Object(c["popScopeId"])();var v=m((function(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{"data-index":n.dataIndex,class:"memory-card"},[Object(c["createVNode"])("div",{class:["memory-card__wrapper",r.cardCondition()]},[Object(c["createVNode"])("img",{onLoadOnce:t[1]||(t[1]=function(e){return r.handleLoadingState.done()}),src:r.getImage(),class:"memory-card__face"},null,40,["src"]),Object(c["createVNode"])("img",{src:r.Flop,class:"memory-card__flop"},null,8,["src"]),Object(c["createVNode"])("div",O,[Object(c["createVNode"])("div",{class:["memory-card__progress",{"memory-card__progress--loading":r.state.isLoading,"memory-card__progress--done":!r.state.isLoading}]},null,2)])],2)],8,["data-index"])})),j=n("30b8"),y=n.n(j),g={name:"memory-card",props:{dataIndex:Number,isRevealed:Boolean,isUnlocked:Boolean,imagesCounter:Function},setup:function(e){var t=Object(c["reactive"])({isLoading:null}),n=function(){if(e.isRevealed)return null===t.isLoading&&r.loading(),"https://i.pravatar.cc/64?img=".concat(e.dataIndex,"/")},r={loading:function(){return t.isLoading=!0},done:function(){t.isLoading=!1,e.imagesCounter()}},o=function(){return e.isRevealed?"memory-card__wrapper--revealed":e.isUnlocked?"memory-card__wrapper--unlocked":void 0};return{getImage:n,Flop:y.a,cardCondition:o,state:t,handleLoadingState:r}}};n("b297");g.render=v,g.__scopeId="data-v-5162fa2b";var S=g;function _(e,t,n,r,o,a){var i=Object(c["resolveComponent"])("VueSlider");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{class:["custom-slider",n.className],adsorb:n.adsorb,interval:n.interval,data:n.data,marks:n.marks,included:!0,min:n.min,max:n.max},null,8,["class","adsorb","interval","data","marks","min","max"])}var h=n("4971"),C=n.n(h),k={name:"CustomSlider",components:{VueSlider:C.a},props:{className:{type:String,default:"",required:!0},adsorb:{type:Boolean,default:!1},interval:{type:Number,default:1},data:{type:Object,required:!1,default:null},marks:{type:Array},min:{type:Number,default:0},max:{type:Number,default:100}},setup:function(e){var t={value:0};return{state:t}}};n("f910");k.render=_;var T=k,N=(n("a9b3"),n("4542")),E=n("5502"),w=Object(c["withScopeId"])("data-v-e985786e");Object(c["pushScopeId"])("data-v-e985786e");var I={class:"memory-scoreboard"},B={class:"memory-scoreboard__wrapper"},V=Object(c["createVNode"])("div",{class:"memory-scoreboard__title"},"Leaderboard",-1),R={class:"memory-scoreboard__nickname"},P={class:"memory-scoreboard__score"};Object(c["popScopeId"])();var D=w((function(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",I,[Object(c["createVNode"])("div",B,[V,(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.data,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e.id,class:"memory-scoreboard__item"},[Object(c["createVNode"])("span",R,Object(c["toDisplayString"])(e.id)+". "+Object(c["toDisplayString"])(e.nickname)+":",1),Object(c["createVNode"])("span",P,Object(c["toDisplayString"])(r.renderScores(e.score)),1)])})),128))])])})),A={name:"MemoryScoreboard",props:{data:{type:Array,default:function(){return[]}}},setup:function(){var e=function(e){var t=new Date(null);console.log(e,"score"),t.setSeconds(e/1e3);var n=t.toUTCString();return n.substr(n.indexOf(":")-2,8)};return{renderScores:e}}};n("11e8");A.render=D,A.__scopeId="data-v-e985786e";var L=A;function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G={name:"MemoryPage",components:{MemoryScoreboard:L,CustomInput:N["a"],CustomSlider:T,MemoryCard:S},setup:function(){var e=Object(E["c"])(),t=Object(c["reactive"])({cells:36,loadedImages:0,shuffledCells:[],revealed:{},pending:{},stopwatchInstance:null,cardTimerFirst:null,cardTimerSecond:null,stopwatch:0,nickName:null,scores:e.state["MEMORY/scores"]}),n=Object(c["reactive"])({isReady:!1,isSteady:!1,isPlay:!1,isEnd:!1});Object(c["onMounted"])((function(){l()})),Object(c["watch"])((function(){return t.cells}),(function(){return p()})),Object(c["watch"])((function(){return n.isPlay}),(function(){return n.isPlay&&!n.isEnd?r.start():r.stop()})),Object(c["watch"])((function(){return t.loadedImages}),(function(){t.loadedImages===t.cells&&setTimeout((function(){n.isSteady=!1,n.isPlay=!0}),5e3)}));var r={start:function(){return t.stopwatchInstance=setInterval((function(){return t.stopwatch+=1e3}),1e3)},stop:function(){return clearInterval(t.stopwatchInstance)}},o={beforeEnter:function(e){e.style.opacity=0,e.style.height=0},enter:function(e,t){return setTimeout((function(){return Velocity(e,{opacity:1,height:"48px"},{complete:t})}),Number(e.dataset.index))},leave:function(e,t){return setTimeout((function(){return Velocity(e,{opacity:0,height:0},{complete:t})}),Number(e.dataset.index))}},a=function(){return t.loadedImages++},i=function(){return 48*Math.sqrt(t.cells)+4*Math.sqrt(t.cells)},s=function(e,t){v(e,t)||O(e,t)},u=function(){e.dispatch("MEMORY/SUBMIT_SCORES",{nickname:t.nickName,score:t.stopwatch}).then((function(){return b()}))},d=Object(c["computed"])((function(){var e=new Date(null);e.setSeconds(t.stopwatch/1e3);var n=e.toUTCString();return n.substr(n.indexOf(":")-2,8)})),l=function(){f(),b()},p=function(){f(),i()},f=function(){var e=m();e.sort((function(){return Math.random()-.5})),t.shuffledCells=e},b=function(){e.dispatch("MEMORY/FETCH_SCORES").then((function(){return t.scores=e.getters["MEMORY/GET_SCORES"]}))},m=function(){for(var e=[],n=0;n<t.cells/2;n++)e.push(n),e.push(n);return e},O=function(e,n){clearTimeout(t.cardTimerFirst),clearTimeout(t.cardTimerSecond),t.pending[n]=e,Object.keys(t.pending).length>2&&(t.pending={}),t.cardTimerFirst=setTimeout((function(){return delete t.pending[n]}),5e3);var c=Object.keys(t.pending).every((function(n){return t.pending[n]===e}))&&Object.keys(t.pending).length>=2;c?(t.revealed=x(x({},t.pending),t.revealed),t.pending={},Object.keys(t.revealed).length===t.shuffledCells.length&&y()):Object.keys(t.pending).length>=2&&(t.cardTimerSecond=setTimeout((function(){return t.pending={}}),700))},v=function(e,c){return t.revealed[c]===e||t.pending[c]===e||n.isSteady||!n.isReady},j=function(){n.isReady=!0,n.isSteady=!0},y=function(){n.isEnd=!0,n.isPlay=!1};return{gameState:n,handleCard:s,loadingImagesCounter:a,ready:j,recalculateFieldDimension:i,renderStopwatch:d,state:t,submitScores:u,transition:o}}};n("2bd1");G.render=p,G.__scopeId="data-v-16ed92ee";t["default"]=G},"9d33":function(e,t,n){},"9fff":function(e,t,n){"use strict";n("c5e0")},a983:function(e,t,n){"use strict";n("f6cd")},b297:function(e,t,n){"use strict";n("1fbb")},b4f5:function(e,t,n){},c3f8:function(e,t,n){"use strict";n("245c")},c5e0:function(e,t,n){},d096:function(e,t,n){},e9ce:function(e,t,n){"use strict";n("1457")},ed83:function(e,t,n){"use strict";n("d096")},f6cd:function(e,t,n){},f910:function(e,t,n){"use strict";n("9d33")}});
//# sourceMappingURL=app.c12120fb.js.map