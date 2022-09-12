(function(){"use strict";var t={4771:function(t,e,n){var o=n(9242),a=n(3396);const s=(0,a.Uk)("Home"),i=(0,a.Uk)(" | "),r=(0,a.Uk)("About"),l=(0,a.Uk)(" | "),c=(0,a.Uk)("News");function u(t,e){const n=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[s])),_:1}),i,(0,a.Wm)(n,{to:"/about"},{default:(0,a.w5)((()=>[r])),_:1}),l,(0,a.Wm)(n,{to:"/news"},{default:(0,a.w5)((()=>[c])),_:1})]),(0,a.Wm)(o)],64)}var d=n(89);const p={},m=(0,d.Z)(p,[["render",u]]);var g=m,f=n(2483),h=n(7139);const w={class:"container"},v={class:"div"},k={class:"form-control"},y=(0,a.Uk)("Add"),b={class:"m-4"},_={key:0},C=(0,a._)("hr",{class:"m-4"},null,-1);function P(t,e,n,s,i,r){const l=(0,a.up)("H1Component"),c=(0,a.up)("MyInput"),u=(0,a.up)("MyButtons"),d=(0,a.up)("ArrayNotes"),p=(0,a.up)("TotalCount");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",v,[(0,a.Wm)(l,{style:(0,h.j5)({color:i.inputValue.length<10?"green":"gray",fontSize:i.inputValue.length<6?"2rem":"1.7rem"})},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(i.title),1)])),_:1},8,["style"]),(0,a._)("div",k,[(0,a.Wm)(c,{modelValue:i.inputValue,"onUpdate:modelValue":e[0]||(e[0]=t=>i.inputValue=t),placeholder:i.placeholder,size:"form-control-sm",onKeyup:e[1]||(e[1]=(0,o.D2)((t=>r.addNote()),["enter"]))},null,8,["modelValue","placeholder"]),(0,a.Wm)(u,{color:"btn-outline-success",size:"btn-sm",onClick:e[2]||(e[2]=t=>r.addNote())},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.notes,((t,n)=>((0,a.wg)(),(0,a.j4)(d,{key:n,"is-editing":i.editingNote===n,onClick:t=>r.deleteNote(n),onEdit:t=>r.onEdit(n),onSaved:e[4]||(e[4]=t=>r.onSave())},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(n)+" , "+(0,h.zw)(i.editingNote)+" ",1),i.editingNote!=n?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,h.C_)(t.length>5?"success":"dt")},(0,h.zw)(r.toUpperCaseFirstLetter(t)),3)):((0,a.wg)(),(0,a.j4)(c,{key:1,modelValue:i.notes[n],"onUpdate:modelValue":t=>i.notes[n]=t,onKeyup:e[3]||(e[3]=(0,o.D2)((t=>r.onSave()),["enter"]))},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["is-editing","onClick","onEdit"])))),128))]),0===i.notes.length?((0,a.wg)(),(0,a.iD)("div",_,"No notes")):(0,a.kq)("",!0),C,(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Total count notes: "+(0,h.zw)(i.notes.length),1)])),_:1})])])}function V(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("h1",null,[(0,a.WI)(t.$slots,"default")])}var U={name:"H1Component"};const z=(0,d.Z)(U,[["render",V]]);var D=z;function j(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("button",{type:"button",class:(0,h.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:e[0]||(e[0]=e=>t.$emit("click"))},[(0,a.WI)(t.$slots,"default")],2)}var W={name:"MuButtons",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"}},emits:["click"]};const x=(0,d.Z)(W,[["render",j]]);var B=x;const I=["value"];function M(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("input",{type:"text",class:(0,h.C_)(["m-2",n.size]),value:n.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t))},null,42,I)}var S={name:"MyInput",props:{modelValue:{type:String,default:""},size:{type:String,default:"form-control"}},emits:["update:modelValue"],methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const N=(0,d.Z)(S,[["render",M]]);var O=N;const $={class:"p-2 d-flex align-items-center"},H={class:"me-3 flex-grow-1"},A={class:"d-flex justify-content-center"},Z=(0,a.Uk)("Edit"),F=(0,a.Uk)("Save"),T=(0,a.Uk)("Delete");function q(t,e,n,o,s,i){const r=(0,a.up)("MyButtons");return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",H,[(0,a.WI)(t.$slots,"default")]),(0,a._)("div",A,[n.isEditing?((0,a.wg)(),(0,a.j4)(r,{key:1,color:"btn-outline-success",size:"btn-sm",onClick:e[1]||(e[1]=e=>t.$emit("saved"))},{default:(0,a.w5)((()=>[F])),_:1})):((0,a.wg)(),(0,a.j4)(r,{key:0,color:"btn-outline-success",size:"btn-sm",onClick:e[0]||(e[0]=e=>t.$emit("edit"))},{default:(0,a.w5)((()=>[Z])),_:1})),(0,a.Wm)(r,{color:"btn-outline-danger",size:"btn-sm",onClick:e[2]||(e[2]=e=>t.$emit("click"))},{default:(0,a.w5)((()=>[T])),_:1})])])}var E={name:"ArrayNotes",components:{MyButtons:B},props:{isEditing:{type:Boolean,default:!1}},emits:["click","edit","saved"],data(){return{}}};const L=(0,d.Z)(E,[["render",q]]);var K=L;const R={class:"m-4"};function Y(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("h4",R,[(0,a.WI)(t.$slots,"default")])}var X={name:"TotalCounter"};const G=(0,d.Z)(X,[["render",Y]]);var J=G,Q={name:"HomeView",components:{MyButtons:B,MyInput:O,ArrayNotes:K,TotalCount:J,H1Component:D},data(){return{title:"List notes",placeholder:"Enter the note...",inputValue:"",notes:["note 1","note 2","note 3"],editingNote:null}},watch:{inputValue(t){t.length>20&&(this.inputValue="")}},methods:{addNote(){""!==this.inputValue&&(this.notes.push(this.inputValue),this.inputValue="")},countMinus(){0===this.count?this.count:this.count--},deleteNote(t){this.notes.splice(t,1)},onEdit(t){this.editingNote=t},onSave(){this.editingNote=null},toUpperCaseFirstLetter(t){return t[0].toUpperCase()+t.slice(1)}}};const tt=(0,d.Z)(Q,[["render",P]]);var et=tt;const nt={class:"container"},ot={class:"form-control"},at={class:"d-flex justify-content-between p-4"},st={class:"p-4 d-flex justify-content-start"},it={key:0},rt=(0,a.Uk)("Back"),lt=(0,a.Uk)("Forward"),ct=(0,a.Uk)("Finish"),ut=(0,a.Uk)("Start over");function dt(t,e,n,s,i,r){const l=(0,a.up)("H1Component"),c=(0,a.up)("DescriptionVue"),u=(0,a.up)("StepPagination"),d=(0,a.up)("MyButtons");return(0,a.wg)(),(0,a.iD)("div",nt,[(0,a.Wm)(l,{style:{color:"green",textDecoration:"underline"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(i.titleAbout),1)])),_:1}),(0,a.Uk)(" "+(0,h.zw)(i.activeChapter)+" ",1),(0,a._)("div",ot,[(0,a.Wm)(c,{class:(0,h.C_)({active:i.activeChapter===t.index})},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(i.arrayDescriprtion[i.activeChapter]),1)])),_:1},8,["class"]),(0,a._)("div",at,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.arraySteps,((t,e)=>((0,a.wg)(),(0,a.j4)(u,{key:e,color:i.activeChapter>=e?"sucsses":"grey",title:t,onClick:t=>r.changePage(e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(e+1),1)])),_:2},1032,["color","title","onClick"])))),128))]),(0,a._)("div",st,[i.switchForButton?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",it,[(0,a.Wm)(d,{size:"sm",color:"light",class:(0,h.C_)(["btn-outline-success",{disabled:0===i.activeChapter}]),onClick:e[0]||(e[0]=t=>i.activeChapter--)},{default:(0,a.w5)((()=>[rt])),_:1},8,["class"]),i.activeChapter!=i.arrayDescriprtion.length-1?((0,a.wg)(),(0,a.j4)(d,{key:0,size:"sm",color:"light",class:"btn-outline-success",onClick:e[1]||(e[1]=t=>i.activeChapter++)},{default:(0,a.w5)((()=>[lt])),_:1})):(0,a.kq)("",!0),i.activeChapter===i.arrayDescriprtion.length-1?((0,a.wg)(),(0,a.j4)(d,{key:1,size:"sm",color:"light",class:"btn-outline-warning",onClick:e[2]||(e[2]=t=>r.switchButton())},{default:(0,a.w5)((()=>[ct])),_:1})):(0,a.kq)("",!0)])),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(d,{size:"lg",color:"light",class:"btn-outline-success",onClick:e[3]||(e[3]=t=>r.startOver())},{default:(0,a.w5)((()=>[ut])),_:1})],512),[[o.F8,i.switchForButton]])])])])}const pt={class:"p-3"},mt={class:"m-0"};function gt(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("div",pt,[(0,a._)("h5",mt,[(0,a.WI)(t.$slots,"default")])])}var ft={name:"DescriptionVue",data(){return{}}};const ht=(0,d.Z)(ft,[["render",gt]]);var wt=ht;const vt={class:"p-2 d-flex align-items-center justify-content-center"};function kt(t,e,n,o,s,i){const r=(0,a.up)("DescriptionVue");return(0,a.wg)(),(0,a.iD)("div",vt,[(0,a._)("button",{type:"button",class:(0,h.C_)(["btn-success btn d-flex align-items-center justify-content-center rounded-circle border border-4",n.color]),onClick:e[0]||(e[0]=(...t)=>i.pageClick&&i.pageClick(...t))},[(0,a.WI)(t.$slots,"default")],2),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(n.title),1)])),_:1})])}var yt={name:"StepPagination",components:{DescriptionVue:wt},props:{color:{type:String,default:"secondary"},title:{type:String,default:""}},emits:["click"],data(){return{}},methods:{pageClick(){this.$emit("click")}}};const bt=(0,d.Z)(yt,[["render",kt]]);var _t=bt,Ct={components:{H1Component:D,DescriptionVue:wt,StepPagination:_t,MyButtons:B},data(){return{arraySteps:["Basics","Components","Router","Vuex","Composition"],titleAbout:"Vue 3 study plan",arrayDescriprtion:["Vue is a framework and ecosystem that covers most of the common\n\t\t\t\tfeatures needed in frontend development. But the web is extremely\n\t\t\t\tdiverse - the things we build on the web may vary drastically in form\n\t\t\t\tand scale. With that in mind, Vue is designed to be flexible and\n\t\t\t\tincrementally adoptable.","Vue components are written as a combination of JavaScript objects that \n        manage the app's data and an HTML-based template syntax that maps to the \n        underlying DOM structure.","Vue Router helps link between the browser's URL/History and Vue's \n        components allowing for certain paths to render whatever view is associated with it.","Vuex is a state management pattern + library for Vue.js applications. It serves as a \n        centralized store for all the components in an application, with rules ensuring that \n        the state can only be mutated in a predictable fashion.","Composition API is a set of APIs that allows us to author Vue \n        components using imported functions instead of declaring options.\n         It is an umbrella term that covers the following APIs: Reactivity API,\n          e.g. ref() and reactive() , that allows us to directly create reactive\n           state, computed state, and watchers."],activeChapter:0,switchForButton:!1,startOverClick:!1}},methods:{changePage(t){this.activeChapter=t},switchButton(){this.switchForButton=!0},startOver(){this.switchForButton=!1,this.activeChapter=0}}};const Pt=(0,d.Z)(Ct,[["render",dt]]);var Vt=Pt;const Ut={class:"container"},zt=(0,a.Uk)("Actual news"),Dt={class:"d-flex justify-content-end align-items-center mt-5 p-2"},jt=(0,a.Uk)("First"),Wt=(0,a.Uk)("Back"),xt=(0,a.Uk)("Next"),Bt=(0,a.Uk)("Last");function It(t,e,n,o,s,i){const r=(0,a.up)("H1Component"),l=(0,a.up)("NewsBox"),c=(0,a.up)("PaginationPages"),u=(0,a.up)("LabelPages");return(0,a.wg)(),(0,a.iD)("div",Ut,[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[zt])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.articles,(t=>((0,a.wg)(),(0,a.j4)(l,{key:t,article:t},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(t),1)])),_:2},1032,["article"])))),128)),(0,a._)("div",Dt,[1!=s.startPage?((0,a.wg)(),(0,a.j4)(c,{key:0,onClick:e[0]||(e[0]=t=>i.setPage(1))},{default:(0,a.w5)((()=>[jt])),_:1})):(0,a.kq)("",!0),s.startPage>1?((0,a.wg)(),(0,a.j4)(c,{key:1,onClick:e[1]||(e[1]=t=>i.setPage(s.startPage-1))},{default:(0,a.w5)((()=>[Wt])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(s.startPage)+" of "+(0,h.zw)(s.totalPages),1)])),_:1}),s.startPage!=s.totalPages?((0,a.wg)(),(0,a.j4)(c,{key:2,onClick:e[2]||(e[2]=t=>i.setPage(s.startPage+1))},{default:(0,a.w5)((()=>[xt])),_:1})):(0,a.kq)("",!0),s.startPage!=s.totalPages?((0,a.wg)(),(0,a.j4)(c,{key:3,onClick:e[3]||(e[3]=t=>i.setPage(s.totalPages))},{default:(0,a.w5)((()=>[Bt])),_:1})):(0,a.kq)("",!0)])])}var Mt=n(6265),St=n.n(Mt);const Nt=t=>((0,a.dD)("data-v-90cb4038"),t=t(),(0,a.Cn)(),t),Ot={class:"form-control mb-4 p-4"},$t={class:"me-2"},Ht=Nt((()=>(0,a._)("strong",null,"Topic: ",-1))),At={class:"success"},Zt={key:0},Ft={class:"mb-3"},Tt={class:"d-flex justify-content-end"},qt={class:"me-3"},Et=Nt((()=>(0,a._)("strong",null,"Country: ",-1))),Lt={class:"me-3"},Kt=Nt((()=>(0,a._)("strong",null,"Author:",-1))),Rt={class:"me-3 text-end"},Yt=Nt((()=>(0,a._)("strong",null,"Published date: ",-1)));function Xt(t,e,n,o,s,i){const r=(0,a.up)("DescriptionVue"),l=(0,a.up)("MyButton");return(0,a.wg)(),(0,a.iD)("div",Ot,[(0,a._)("p",$t,[Ht,(0,a._)("span",At,(0,h.zw)(n.article.topic),1)]),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(n.article.title),1)])),_:1}),(0,a.Wm)(l,{size:"lg",class:"success btn-outline-light mb-4 border-none",color:"btn-light",onClick:e[0]||(e[0]=t=>i.toggleMoreInfo())},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(s.isVisible?"Hide":"More info"),1)])),_:1}),s.isVisible?((0,a.wg)(),(0,a.iD)("div",Zt,[(0,a._)("p",Ft,(0,h.zw)(n.article.summary),1),(0,a._)("div",Tt,[(0,a._)("p",qt,[Et,(0,a.Uk)(" "+(0,h.zw)(n.article.country),1)]),(0,a._)("p",Lt,[Kt,(0,a.Uk)(" "+(0,h.zw)(n.article.author),1)])])])):(0,a.kq)("",!0),(0,a._)("div",Rt,[Yt,(0,a.Uk)(" "+(0,h.zw)(n.article.published_date),1)])])}var Gt={name:"NewsBox",components:{DescriptionVue:wt,MyButton:B},props:{article:{type:Object,default:null}},data(){return{isVisible:!1}},methods:{toggleMoreInfo(){this.isVisible=!this.isVisible}}};const Jt=(0,d.Z)(Gt,[["render",Xt],["__scopeId","data-v-90cb4038"]]);var Qt=Jt;function te(t,e,n,o,s,i){const r=(0,a.up)("MyButtons");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{color:"transperent",class:"btn-outline-info",size:"less",onClick:i.pageClick},{default:(0,a.w5)((()=>[(0,a.WI)(t.$slots,"default")])),_:3},8,["onClick"])])}var ee={name:"PaginationPages",components:{MyButtons:B},emits:["click"],methods:{pageClick(){this.$emit("click")}}};const ne=(0,d.Z)(ee,[["render",te]]);var oe=ne;const ae={for:"wallet",class:"m-3"};function se(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("label",ae,[(0,a.WI)(t.$slots,"default")])}var ie={name:"LabelPages"};const re=(0,d.Z)(ie,[["render",se]]);var le=re,ce={components:{H1Component:D,NewsBox:Qt,PaginationPages:oe,LabelPages:le},data(){return{articles:[],startPage:1,limit:10,totalPages:0}},async created(){await this.fetchNews()},methods:{async fetchNews(){try{const t={method:"GET",url:"https://free-news.p.rapidapi.com/v1/search",params:{q:"Elon Musk",lang:"en",page:this.startPage,page_size:this.limit,totalPages:this.total_pages},headers:{"X-RapidAPI-Key":"fd01ee7db5msh409c3081e30276ap159a59jsn4002e35539f7","X-RapidAPI-Host":"free-news.p.rapidapi.com"}},e=await St().request(t);this.articles=e.data.articles,this.totalPages=e.data.total_pages}catch(t){this.open()}},open(){this.$toast.open({message:"Something went wrong",type:"error",duration:5e3,dismissible:!0,position:"top-right"})},setPage(t){this.startPage=t,this.fetchNews()}}};const ue=(0,d.Z)(ce,[["render",It]]);var de=ue;const pe=[{path:"/",name:"home",component:et},{path:"/about",name:"about",component:Vt},{path:"/news",name:"news",component:de}],me=(0,f.p7)({history:(0,f.PO)("/project/"),routes:pe});var ge=me,fe=n(65),he=(0,fe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),we=n(6215),ve=n.n(we);(0,o.ri)(g).use(he).use(ge).use(ve()).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,s){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],s=t[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(r=!1,s<i&&(i=s));if(r){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,i=o[0],r=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var u=l(n)}for(e&&e(o);c<i.length;c++)s=i[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunkbig_project"]=self["webpackChunkbig_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4771)}));o=n.O(o)})();
//# sourceMappingURL=app.38bb74ea.js.map