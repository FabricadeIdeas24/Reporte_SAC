import{o as f,e as p,b as r,u as t,a as e,i as m,k as l,m as n,g as c,w as g,F as x}from"./app-f6caa0b8.js";import{v as _,X as b,n as w}from"./index.esm-b3ee4bca.js";import{_ as i}from"./InputError-0fa34647.js";const h=["onSubmit"],y={className:"grid grid-cols-1 lg:grid-cols-2 min-h-screen"},N={id:"ladoIzq",className:"flex flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4"},v=e("div",{className:"my-1"},[e("img",{src:"images/logoUPQ.png",alt:"Logo reportes SAC",width:"200",height:"200"})],-1),j=e("div",{className:"flex flex-col items-center gap-8"},[e("h1",{className:"text-4xl font-bold text-gray-900"},"Registro")],-1),C=e("div",{className:"my-8"},[e("p",{className:"text-center relative text-gray-500 bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]"}," Creación de cuenta ")],-1),V={className:"w-full mb-8"},S=["onSubmit"],q={className:"flex justify-center mb-2"},R={className:"flex justify-center "},U={className:"flex justify-center mb-2"},k={className:"flex justify-center "},B={className:"flex justify-center mb-2"},F={className:"flex justify-center"},I={className:"flex justify-center mb-2"},L={className:"flex justify-center"},M=e("div",{className:"w-full max-w-md mx-auto"},[e("button",{type:"submit",className:"w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors"}," Registrar ")],-1),T={className:"text-gray-500"},z=e("div",{className:"hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg"},[e("img",{src:"images/backgroundLoginRegister.jpg",className:" object-cover h-full"})],-1),Q={__name:"Register",setup(A){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),d=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(u,o)=>(f(),p(x,null,[r(t(b),{title:"Registro"}),e("form",{onSubmit:m(d,["prevent"])},[e("div",y,[e("div",N,[v,j,C,e("div",V,[e("form",{onSubmit:m(d,["prevent"])},[e("div",q,[l(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>t(s).name=a),required:"",autofocus:"",className:"w-full max-w-md py-2 px-4 rounded-lg outline-none",placeholder:"Nombre"},null,512),[[n,t(s).name]])]),e("div",R,[r(i,{class:"",message:t(s).errors.name},null,8,["message"])]),e("div",U,[l(e("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=a=>t(s).email=a),required:"",className:"w-full max-w-md py-2 px-4 rounded-lg outline-none",placeholder:"Correo",autocomplete:"username"},null,512),[[n,t(s).email]])]),e("div",k,[r(i,{class:"",message:t(s).errors.email},null,8,["message"])]),e("div",B,[l(e("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=a=>t(s).password=a),required:"",className:"w-full max-w-md py-2 px-4 rounded-lg outline-none",placeholder:"Contraseña",autocomplete:"new-password"},null,512),[[n,t(s).password]])]),e("div",F,[r(i,{class:"",message:t(s).errors.password},null,8,["message"])]),e("div",I,[l(e("input",{type:"password","onUpdate:modelValue":o[3]||(o[3]=a=>t(s).password_confirmation=a),required:"",className:"w-full max-w-md py-2 px-4 rounded-lg outline-none",placeholder:"Confirmar Contraseña",autocomplete:"new-password"},null,512),[[n,t(s).password_confirmation]])]),e("div",L,[r(i,{class:"",message:t(s).errors.password_confirmation},null,8,["message"])]),M],40,S)]),e("div",null,[e("span",T,[c(" ¿Ya tienes una cuenta? "),r(t(w),{href:u.route("login"),class:"text-gray-700 underline"},{default:g(()=>[c(" Iniciar Sesión ")]),_:1},8,["href"])])])]),z])],40,h)],64))}};export{Q as default};