import{_ as B}from"./AppLayout-c50c8568.js";import I from"./Registros-a0151ed4.js";import E from"./ActsTransversales-7e74e5e9.js";import{R as _}from"./button.esm-1a340f37.js";import{U as P,N as o,O as N,o as l,e as c,a as u,k as f,P as h,f as b,F as m,h as A,t as H,c as x,Q as C,B as D,n as K,r as S,z as L,w as p,b as v,u as w}from"./app-f6caa0b8.js";import"./index.esm-b3ee4bca.js";import"./toast.esm-7e3cf0c6.js";import"./textarea.esm-56b0f05e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./chart.esm-f817c050.js";var k={name:"TabView",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},previousButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},data(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex,isPrevButtonDisabled:!0,isNextButtonDisabled:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},activeIndex(e){this.d_activeIndex=e,this.scrollInView({index:e})}},mounted(){this.id=this.id||P(),this.updateInkBar(),this.scrollable&&this.updateButtonState()},updated(){this.updateInkBar()},methods:{isTabPanel(e){return e.type.name==="TabPanel"},isTabActive(e){return this.d_activeIndex===e},getTabProp(e,t){return e.props?e.props[t]:void 0},getKey(e,t){return this.getTabProp(e,"header")||t},getTabHeaderActionId(e){return`${this.id}_${e}_header_action`},getTabContentId(e){return`${this.id}_${e}_content`},onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick(){const e=this.$refs.content,t=o.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft-t;e.scrollLeft=a<=0?0:a},onNextButtonClick(){const e=this.$refs.content,t=o.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft+t,r=e.scrollWidth-t;e.scrollLeft=a>=r?r:a},onTabClick(e,t,a){this.changeActiveIndex(e,t,a),this.$emit("tab-click",{originalEvent:e,index:a})},onTabKeyDown(e,t,a){switch(e.code){case"ArrowLeft":this.onTabArrowLeftKey(e);break;case"ArrowRight":this.onTabArrowRightKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":this.onTabEnterKey(e,t,a);break}},onTabArrowRightKey(e){const t=this.findNextHeaderAction(e.target.parentElement);t?this.changeFocusedTab(e,t):this.onTabHomeKey(e),e.preventDefault()},onTabArrowLeftKey(e){const t=this.findPrevHeaderAction(e.target.parentElement);t?this.changeFocusedTab(e,t):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey(e){const t=this.findFirstHeaderAction();this.changeFocusedTab(e,t),e.preventDefault()},onTabEndKey(e){const t=this.findLastHeaderAction();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey(e){this.scrollInView({index:this.$refs.nav.children.length-2}),e.preventDefault()},onPageUpKey(e){this.scrollInView({index:0}),e.preventDefault()},onTabEnterKey(e,t,a){this.changeActiveIndex(e,t,a),e.preventDefault()},findNextHeaderAction(e,t=!1){const a=t?e:e.nextElementSibling;return a?o.hasClass(a,"p-disabled")||o.hasClass(a,"p-tabview-ink-bar")?this.findNextHeaderAction(a):o.findSingle(a,".p-tabview-header-action"):null},findPrevHeaderAction(e,t=!1){const a=t?e:e.previousElementSibling;return a?o.hasClass(a,"p-disabled")||o.hasClass(a,"p-tabview-ink-bar")?this.findPrevHeaderAction(a):o.findSingle(a,".p-tabview-header-action"):null},findFirstHeaderAction(){return this.findNextHeaderAction(this.$refs.nav.firstElementChild,!0)},findLastHeaderAction(){return this.findPrevHeaderAction(this.$refs.nav.lastElementChild,!0)},changeActiveIndex(e,t,a){!this.getTabProp(t,"disabled")&&this.d_activeIndex!==a&&(this.d_activeIndex=a,this.$emit("update:activeIndex",a),this.$emit("tab-change",{originalEvent:e,index:a}),this.scrollInView({index:a}))},changeFocusedTab(e,t){if(t&&(o.focus(t),this.scrollInView({element:t}),this.selectOnFocus)){const a=parseInt(t.parentElement.dataset.index,10),r=this.tabs[a];this.changeActiveIndex(e,r,a)}},scrollInView({element:e,index:t=-1}){const a=e||this.$refs.nav.children[t];a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest"})},updateInkBar(){let e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=o.getWidth(e)+"px",this.$refs.inkbar.style.left=o.getOffset(e).left-o.getOffset(this.$refs.nav).left+"px"},updateButtonState(){const e=this.$refs.content,{scrollLeft:t,scrollWidth:a}=e,r=o.getWidth(e);this.isPrevButtonDisabled=t===0,this.isNextButtonDisabled=parseInt(t)===a-r},getVisibleButtonWidths(){const{prevBtn:e,nextBtn:t}=this.$refs;return[e,t].reduce((a,r)=>r?a+o.getWidth(r):a,0)},getTabHeaderClass(e,t){return["p-tabview-header",this.getTabProp(e,"headerClass"),{"p-highlight":this.d_activeIndex===t,"p-disabled":this.getTabProp(e,"disabled")}]},getTabContentClass(e){return["p-tabview-panel",this.getTabProp(e,"contentClass")]}},computed:{contentClasses(){return["p-tabview p-component",{"p-tabview-scrollable":this.scrollable}]},tabs(){return this.$slots.default().reduce((e,t)=>(this.isTabPanel(t)?e.push(t):t.children&&t.children instanceof Array&&t.children.forEach(a=>{this.isTabPanel(a)&&e.push(a)}),e),[])},prevButtonAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},directives:{ripple:_}};const V={class:"p-tabview-nav-container"},R=["tabindex","aria-label"],F=u("span",{class:"pi pi-chevron-left","aria-hidden":"true"},null,-1),W=[F],z={ref:"nav",class:"p-tabview-nav",role:"tablist"},O=["data-index"],M=["id","tabindex","aria-disabled","aria-selected","aria-controls","onClick","onKeydown"],U={key:0,class:"p-tabview-title"},q={ref:"inkbar",class:"p-tabview-ink-bar",role:"presentation","aria-hidden":"true"},j=["tabindex","aria-label"],Q=u("span",{class:"pi pi-chevron-right","aria-hidden":"true"},null,-1),G=[Q],J={class:"p-tabview-panels"},X=["aria-labelledby"];function Y(e,t,a,r,d,n){const g=N("ripple");return l(),c("div",{class:K(n.contentClasses)},[u("div",V,[a.scrollable&&!d.isPrevButtonDisabled?f((l(),c("button",h({key:0,ref:"prevBtn",type:"button",class:"p-tabview-nav-prev p-tabview-nav-btn p-link",tabindex:a.tabindex,"aria-label":n.prevButtonAriaLabel,onClick:t[0]||(t[0]=(...i)=>n.onPrevButtonClick&&n.onPrevButtonClick(...i))},a.previousButtonProps),W,16,R)),[[g]]):b("",!0),u("div",{ref:"content",class:"p-tabview-nav-content",onScroll:t[1]||(t[1]=(...i)=>n.onScroll&&n.onScroll(...i))},[u("ul",z,[(l(!0),c(m,null,A(n.tabs,(i,s)=>(l(),c("li",h({key:n.getKey(i,s),style:n.getTabProp(i,"headerStyle"),class:n.getTabHeaderClass(i,s),role:"presentation","data-index":s},n.getTabProp(i,"headerProps")),[f((l(),c("a",h({id:n.getTabHeaderActionId(s),class:"p-tabview-nav-link p-tabview-header-action",tabindex:n.getTabProp(i,"disabled")||!n.isTabActive(s)?-1:a.tabindex,role:"tab","aria-disabled":n.getTabProp(i,"disabled"),"aria-selected":n.isTabActive(s),"aria-controls":n.getTabContentId(s),onClick:y=>n.onTabClick(y,i,s),onKeydown:y=>n.onTabKeyDown(y,i,s)},n.getTabProp(i,"headerActionProps")),[i.props&&i.props.header?(l(),c("span",U,H(i.props.header),1)):b("",!0),i.children&&i.children.header?(l(),x(C(i.children.header),{key:1})):b("",!0)],16,M)),[[g]])],16,O))),128)),u("li",q,null,512)],512)],544),a.scrollable&&!d.isNextButtonDisabled?f((l(),c("button",h({key:1,ref:"nextBtn",type:"button",class:"p-tabview-nav-next p-tabview-nav-btn p-link",tabindex:a.tabindex,"aria-label":n.nextButtonAriaLabel,onClick:t[2]||(t[2]=(...i)=>n.onNextButtonClick&&n.onNextButtonClick(...i))},a.nextButtonProps),G,16,j)),[[g]]):b("",!0)]),u("div",J,[(l(!0),c(m,null,A(n.tabs,(i,s)=>(l(),c(m,{key:n.getKey(i,s)},[!a.lazy||n.isTabActive(s)?f((l(),c("div",h({key:0,style:n.getTabProp(i,"contentStyle"),class:n.getTabContentClass(i),role:"tabpanel","aria-labelledby":n.getTabHeaderActionId(s)},n.getTabProp(i,"contentProps")),[(l(),x(C(i)))],16,X)),[[D,a.lazy?!0:n.isTabActive(s)]]):b("",!0)],64))),128))])],2)}function Z(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",a==="top"&&r.firstChild?r.insertBefore(d,r.firstChild):r.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}var $=`
.p-tabview-nav-container {
    position: relative;
}
.p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
}
.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}
.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
}
.p-tabview-header-action {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}
.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabview-header-action:focus {
    z-index: 1;
}
.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}
.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-tabview-nav-prev {
    left: 0;
}
.p-tabview-nav-next {
    right: 0;
}
.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}
`;Z($);k.render=Y;var T={name:"TabPanel",props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean}};function ee(e,t,a,r,d,n){return S(e.$slots,"default")}T.render=ee;const te=u("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Resumen ",-1),he={__name:"TabMenu",props:{registrosResumen:{type:Array,required:!0},registrosTransversales:{type:Array,required:!0},totalAcreditacion:{type:Number},totalCapacitacion:{type:Number},totalCertificacion:{type:Number},totalEvento:{type:Number},totalInvestigacion:{type:Number},totalMaterialEducativo:{type:Number},totalPlanEstudios:{type:Number},totalProyecto:{type:Number},totalOtro:{type:Number},totalTodos:{type:Number},totales:{type:Array}},setup(e){return L(()=>{}),(t,a)=>(l(),x(B,{title:"Resúmen"},{header:p(()=>[te]),default:p(()=>[v(w(k),{ref:"tabview1",class:"p-3"},{default:p(()=>[v(w(T),{header:"Registros"},{default:p(()=>[v(I,{registrosTransversales:e.registrosTransversales,registrosResumen:e.registrosResumen,totalAcreditacion:e.totalAcreditacion,totalCapacitacion:e.totalCapacitacion,totalCertificacion:e.totalCertificacion,totalEvento:e.totalEvento,totalInvestigacion:e.totalInvestigacion,totalMaterialEducativo:e.totalMaterialEducativo,totalPlanEstudios:e.totalPlanEstudios,totalProyecto:e.totalProyecto,totalOtro:e.totalOtro,totalTodos:e.totalTodos,totales:e.totales},null,8,["registrosTransversales","registrosResumen","totalAcreditacion","totalCapacitacion","totalCertificacion","totalEvento","totalInvestigacion","totalMaterialEducativo","totalPlanEstudios","totalProyecto","totalOtro","totalTodos","totales"])]),_:1}),v(w(T),{header:"Actividades Transversales"},{default:p(()=>[v(E,{registrosTransversales:e.registrosTransversales},null,8,["registrosTransversales"])]),_:1})]),_:1},512)]),_:1}))}};export{he as default};
