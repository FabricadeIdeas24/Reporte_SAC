import{X as h,n as u}from"./index.esm-b3ee4bca.js";import{o,e as n,r as a,f as d,a as i,K as f,c as _}from"./app-f6caa0b8.js";import{s as $}from"./button.esm-1a340f37.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";var l={name:"Card"};const y={class:"p-card p-component"},C={key:0,class:"p-card-header"},k={class:"p-card-body"},B={key:0,class:"p-card-title"},b={key:1,class:"p-card-subtitle"},N={class:"p-card-content"},g={key:2,class:"p-card-footer"};function E(e,r,c,s,t,p){return o(),n("div",y,[e.$slots.header?(o(),n("div",C,[a(e.$slots,"header")])):d("",!0),i("div",k,[e.$slots.title?(o(),n("div",B,[a(e.$slots,"title")])):d("",!0),e.$slots.subtitle?(o(),n("div",b,[a(e.$slots,"subtitle")])):d("",!0),i("div",N,[a(e.$slots,"content")]),e.$slots.footer?(o(),n("div",g,[a(e.$slots,"footer")])):d("",!0)])])}function H(e,r){r===void 0&&(r={});var c=r.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",c==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var S=`
.p-card-header img {
    width: 100%;
}
`;H(S);l.render=E;const T={components:{Head:h,Link:u,Card:l,Button:$},props:{},data(){return{}},methods:{}};function A(e,r,c,s,t,p){const m=f("Head");return o(),_(m,{title:"Welcome"})}const z=v(T,[["render",A]]);export{z as default};
