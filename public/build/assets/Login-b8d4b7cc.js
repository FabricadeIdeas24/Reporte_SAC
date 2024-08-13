import{o as i,e as n,b as r,u as t,t as f,f as g,a as e,i as p,F as b}from"./app-f6caa0b8.js";import{v as _,X as x}from"./index.esm-b3ee4bca.js";import{_ as h}from"./Checkbox-c6ae94f5.js";import{_ as d}from"./InputError-0fa34647.js";import{_ as c}from"./TextInput-91047b5f.js";const w={key:0,class:"mb-4 font-medium text-sm text-green-600"},y={className:"grid grid-cols-1 lg:grid-cols-2 min-h-screen"},v={id:"ladoIzq",className:"flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4"},N=e("div",{className:"my-1"},[e("img",{src:"images/logoUPQ.png",alt:"Logo reportes SAC",width:"200",height:"200"})],-1),V=e("div",{className:"flex flex-col items-center gap-8"},[e("h1",{className:"text-4xl font-bold text-gray-900"},"Bienvenido")],-1),k=e("div",{className:"my-8"},[e("p",{className:"text-center relative text-gray-500 bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]"}," Ingresa con tu correo ")],-1),S={className:"w-1/2 mb-8"},j=["onSubmit"],B={class:"col-span-6"},C={class:"col-span-6"},I={className:"w-full max-w-md mx-auto flex items-center justify-between text-gray-500 mb-8"},L={className:"flex items-center gap-2"},U={class:"flex items-center"},q=e("span",{class:"ml-2 text-sm text-gray-600"},"Recuérdame",-1),F=e("div",{className:"w-full max-w-md mx-auto"},[e("button",{type:"submit",className:"w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors"}," Iniciar sesión ")],-1),R=e("div",{className:"hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg"},[e("img",{src:"images/backgroundLoginRegister.jpg",className:" object-cover h-full"})],-1),E={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const s=_({email:"",password:"",remember:!1}),u=()=>{s.transform(m=>({...m,remember:s.remember?"on":""})).post(route("login"),{onFinish:()=>s.reset("password")})};return(m,o)=>(i(),n(b,null,[r(t(x),{title:"Iniciar Sesión"}),l.status?(i(),n("div",w,f(l.status),1)):g("",!0),e("div",y,[e("div",v,[N,V,k,e("div",S,[e("form",{onSubmit:p(u,["prevent"])},[e("div",B,[e("div",null,[r(c,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":o[0]||(o[0]=a=>t(s).email=a),type:"email",class:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",required:"",autofocus:"",placeholder:"Correo"},null,8,["modelValue"]),r(d,{class:"mt-2",message:t(s).errors.email},null,8,["message"])])]),e("div",C,[r(c,{id:"password",modelValue:t(s).password,"onUpdate:modelValue":o[1]||(o[1]=a=>t(s).password=a),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",placeholder:"Contraseña"},null,8,["modelValue"]),r(d,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),e("div",I,[e("div",L,[e("label",U,[r(h,{checked:t(s).remember,"onUpdate:checked":o[2]||(o[2]=a=>t(s).remember=a),name:"remember"},null,8,["checked"]),q])])]),F],40,j)])]),R])],64))}};export{E as default};