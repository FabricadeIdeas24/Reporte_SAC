import{d as r,G as Re,y as Fe,z as Oe,J as Te,K as $e,o as H,c as K,w as c,b as o,u as t,a as l,f as Q,k as Be,B as Le,t as W,e as He,H as f,I as te,L as ze,M as Ge}from"./app-f6caa0b8.js";import{s as Y,h as Xe}from"./calendar.esm-a9cbb87e.js";import{_ as qe}from"./AppLayout-c50c8568.js";import{s as Je,a as Ke,c as v,d as m,f as y,g as x,b as Qe,e as se}from"./toast.esm-7e3cf0c6.js";import{s as g}from"./button.esm-1a340f37.js";import{s as w}from"./textarea.esm-56b0f05e.js";import{s as We}from"./chart.esm-f817c050.js";import Ye from"./graficaHM-8033a143.js";import{_ as Ze}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.esm-b3ee4bca.js";const u=V=>(ze("data-v-e595bde0"),V=V(),Ge(),V),ea=u(()=>l("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Ing. en Tecnologías de Manufactura ",-1)),aa={class:"max-w-[99.9%] m-auto p-2"},la={class:"contenedorGraficaTabla"},oa={id:"contenedorGraficas",class:"w-full flex items-center flex-col gap-0.2 mt-15 mb-20"},ta={class:"w-full"},sa={id:"graficas",class:"flex justify-center items-center w-full mb-20"},ia={id:"chartCategorias",class:"w-full"},na={id:"chartEstatus",class:"w-full"},ua={class:"w-full flex gap-5 mt-500"},da={class:"group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-1/3"},ra={class:"text-3xl font-bold text-indigo-600 sm:text-3xl"},ca=u(()=>l("div",{class:"mt-2 border-t-2 border-gray-100 pt-4"},[l("p",{class:"text-sm font-medium uppercase text-gray-500"}," En Proceso ")],-1)),pa={class:"group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-1/3"},ma={class:"text-3xl font-bold text-indigo-600 sm:text-3xl"},va=u(()=>l("div",{class:"mt-2 border-t-2 border-gray-100 pt-4"},[l("p",{class:"text-sm font-medium uppercase text-gray-500"}," Concluidos ")],-1)),fa={class:"group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-1/3"},ha={class:"text-3xl font-bold text-indigo-600 sm:text-3xl"},ba=u(()=>l("div",{class:"mt-2 border-t-2 border-gray-100 pt-4"},[l("p",{class:"text-sm font-medium uppercase text-gray-500"}," Cancelados ")],-1)),ga={class:"contendorTabla"},_a={class:"cc"},Va={class:"flex flex-wrap align-items-center justify-between gap-4"},ya={class:"text-xl text-900 font-bold"},xa={class:"p-input-icon-left",style:{"margin-right":"10px"}},wa=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ca={key:0,id:"miDiv",class:"flex flex-wrap justify-center gap-4 items-center"},Ma={class:"p-input-icon-left"},Ua=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ia={class:"p-input-icon-left"},Pa=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ea={class:"p-input-icon-left"},Sa=u(()=>l("i",{class:"pi pi-search"},null,-1)),Na={class:"p-input-icon-left"},Da=u(()=>l("i",{class:"pi pi-search"},null,-1)),ja={class:"p-input-icon-left"},Aa=u(()=>l("i",{class:"pi pi-search"},null,-1)),ka={class:"p-input-icon-left"},Ra=u(()=>l("i",{class:"pi pi-search"},null,-1)),Fa={class:"p-input-icon-left"},Oa=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ta={class:"p-input-icon-left"},$a=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ba={class:"p-input-icon-left"},La=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ha={class:"p-input-icon-left"},za=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ga={class:"p-input-icon-left"},Xa=u(()=>l("i",{class:"pi pi-search"},null,-1)),qa={class:"p-input-icon-left"},Ja=u(()=>l("i",{class:"pi pi-search"},null,-1)),Ka=u(()=>l("template",null,null,-1)),Qa=u(()=>l("div",{class:"flex justify-center align-middle text-xl"},[l("h2",null,"No se encontraron datos")],-1)),Wa=u(()=>l("label",{for:"carrera",class:"mb-3"},"Programa Educativo",-1)),Ya=u(()=>l("label",{for:"minmax"},"Proyecto / Actividad",-1)),Za={class:"mt-7 flex gap-5 justify-center"},el={class:"w-full"},al={class:"p-float-label"},ll=u(()=>l("label",null,"Descripción",-1)),ol={class:"w-full"},tl={class:"p-float-label"},sl=u(()=>l("label",null,"Beneficios / Impacto",-1)),il={class:"w-full mt-6"},nl={class:"p-float-label"},ul=u(()=>l("label",null,"Responsable",-1)),dl={class:"w-full mt-6"},rl={class:"p-float-label"},cl=u(()=>l("label",null,"Involucrados",-1)),pl=u(()=>l("label",{for:"pdi"},"PDI",-1)),ml={class:"flex items-center gap-5 mt-2 justify-center"},vl={class:"w-full"},fl=u(()=>l("label",{for:"fecha_inicio"},"Fecha Inicio",-1)),hl={class:"w-full"},bl=u(()=>l("label",{for:"fecha_fin"},"Fecha Término",-1)),gl={class:"flex items-center justify-center gap-4 mt-3 text-center m-auto w-2/3"},_l=u(()=>l("label",{for:"unidad1",class:"mb-3"},"Unidad",-1)),Vl=u(()=>l("label",{for:"hombres1"},"H",-1)),yl=u(()=>l("label",{for:"mujeres1"},"M",-1)),xl={class:"flex items-center justify-center m-auto gap-4 mt-3 text-center w-2/3"},wl=u(()=>l("label",{for:"unidad2",class:"mb-3"},"Unidad",-1)),Cl=u(()=>l("label",{for:"hombres2"},"H",-1)),Ml=u(()=>l("label",{for:"mujeres2"},"M",-1)),Ul={class:"text-center w-2/6 m-auto mt-3"},Il=u(()=>l("label",{for:"cantidad"},"Cantidad",-1)),Pl={class:"flex items-center gap-3 text-center mt-4"},El={class:"w-1/2"},Sl=u(()=>l("label",{for:"estatus",class:"mb-3"},"Estatus",-1)),Nl={class:"w-1/2"},Dl=u(()=>l("label",{for:"categoria",class:"mb-3"},"Categoria",-1)),jl={class:"w-full mt-6"},Al={class:"p-float-label"},kl=u(()=>l("label",null,"Especificar",-1)),Rl=u(()=>l("div",{class:"confirmation-content flex justify-center items-center"},[l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),l("span",null,"¿Esta seguro de eliminar los registro(s) seleccionado(s)?")],-1)),Fl={__name:"Manufactura",props:{registrosManufactura:{type:Array,required:!0},enProcesoCount:{type:Number},concluidoCount:{type:Number},canceladoCount:{type:Number},acreditacionCount:{type:Number},capacitacionCount:{type:Number},CertificaciónCompetenciasCount:{type:Number},eventoCount:{type:Number},investigacionCount:{type:Number},materialEducativoCount:{type:Number},planDeEstudioCount:{type:Number},proyectoCount:{type:Number},otroCount:{type:Number},countEstatus:{type:Array}},setup(V){const h=V,n=r({global:{value:null,matchMode:f.CONTAINS},programa_educativo:{value:null,matchMode:f.CONTAINS},proyecto_actividad:{value:null,matchMode:f.CONTAINS},descripcion:{value:null,matchMode:f.CONTAINS},beneficios_impacto:{value:null,matchMode:f.CONTAINS},responsable:{value:null,matchMode:f.CONTAINS},involucrados:{value:null,matchMode:f.CONTAINS},PDI:{value:null,matchMode:f.CONTAINS},especificar:{value:null,matchMode:f.CONTAINS},categoria:{value:null,matchMode:f.CONTAINS},estatus:{value:null,matchMode:f.CONTAINS},fecha_inicio:{value:null,matchMode:f.CONTAINS},fecha_fin:{value:null,matchMode:f.CONTAINS}}),b=r(),ie=r([]),ne=r(),$=r(!1),B=r(!1),z=Re(),me="No se encontraron datos",N=r(null),D=r(null),j=r(null),A=r(null),Z=r(),ee=r(),G=r(!1),k=r(null),C=r(),M=r(),R=r(),U=r(0),I=r(0),F=r(),P=r(0),E=r(0),S=r(0),O=r(),T=r(),X=r(),ue=r([{nombre:"Ing. en Tecnologías de Manufactura",value:"Ing. en Tecnologías de Manufactura"}]),q=r([{nombre:"Asignatura",value:"Asignatura"},{nombre:"Convenio",value:"Convenio"},{nombre:"Docentes",value:"Docentes"},{nombre:"Empresas",value:"Empresas"},{nombre:"Estudiantes",value:"Estudiantes"},{nombre:"Programa",value:"Programa"},{nombre:"Proyecto",value:"Proyecto"},{nombre:"Publicaciones",value:"Publicaciones"},{nombre:"Reglamento",value:"Reglamento"},{nombre:"Otro",value:"Otro"},{nombre:"No aplica",value:"No aplica"}]),de=r([{nombre:"En proceso",value:"En proceso"},{nombre:"Concluido",value:"Concluido"},{nombre:"Cancelado",value:"Cancelado"}]),re=r([{nombre:"Acreditación",value:"Acreditación"},{nombre:"Capacitación",value:"Capacitación"},{nombre:"Certificación-Competencias",value:"Certificación-Competencias"},{nombre:"Evento",value:"Evento"},{nombre:"Investigación",value:"Investigación"},{nombre:"Material educativo",value:"Material educativo"},{nombre:"Plan de estudio",value:"Plan de estudio"},{nombre:"Proyecto",value:"Proyecto"},{nombre:"Otro",value:"Otro"}]),ve=i=>{const e=i.data;console.log(e)},fe=i=>{},he=()=>{G.value=!0},be=()=>{G.value=!1},ge=()=>{$.value=!0},_e=()=>{$.value=!1};function Ve(){S.value=I.value+U.value+E.value+P.value}Fe([I,U,E,P],()=>{Ve()});const ye=()=>{B.value=!0},xe=()=>{const i={id:b.value.map(e=>e.id)};te.Inertia.post("/eliminar-manufactura",i,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{B.value=!1,b.value=null,L.value=J(),z.add({severity:"success",summary:"Exito",detail:"Eliminado exitosamente",life:3e3})}})},we=()=>{if(N.value==null||N.value<0||D.value==null||D.value<0||j.value==null||j.value<0||A.value==null||A.value<0||k.value==null||k.value<0||C.value==null||C.value<0||M.value==null||M.value<0||S.value==null||S.value<0||R.value==null||R.value<0||U.value==null||U.value<0||I.value==null||I.value<0||F.value==null||F.value<0||P.value==null||P.value<0||E.value==null||E.value<0||O.value==null||O.value<0||T.value==null||T.value<0){z.add({severity:"error",summary:"Campos faltantes",detail:"Por favor, llena todos los campos del formulario",life:3e3});return}else{const i={programaEducativo:N.value,proyecto_actividad:D.value,descripcion:j.value,beneficios_impacto:A.value,responsable:Z.value,involucrados:ee.value,pdi:k.value,fecha_inicio:C.value,fecha_fin:M.value,cantidad:S.value,unidad1:R.value,mujeres1:U.value,hombres1:I.value,unidad2:F.value,mujeres2:P.value,hombres2:E.value,estatusModel:O.value,categoria:T.value,especificar:X.value};te.Inertia.post("/registro-manufactura",i,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{$.value=!1,N.value=null,D.value=null,j.value=null,A.value=null,k.value=null,C.value=null,M.value=null,R.value=null,U.value=0,I.value=0,F.value=null,P.value=0,E.value=0,S.value=0,O.value=null,T.value=null,X.value=null,L.value=J(),z.add({severity:"success",summary:"Exito",detail:"Registro exitoso",life:3e3})}})}},Ce=()=>{const i=M.value,e={year:"numeric",month:"2-digit",day:"2-digit"},p=i.toLocaleDateString("es-MX",e);M.value=p},ae=()=>{const i=C.value,e={year:"numeric",month:"2-digit",day:"2-digit"},p=i.toLocaleDateString("es-MX",e);C.value=p},Me=i=>{let{newData:e}=i;const p={id:e.id,programaEducativo:e.programa_educativo,proyecto_actividad:e.proyecto_actividad,descripcion:e.descripcion,beneficios_impacto:e.beneficios_impacto,pdi:e.PDI,fecha_inicio:e.fecha_inicio,fecha_fin:e.fecha_fin,cantidad:e.cantidad,cantidad:e.cantidad,unidad1:e.unidad,hombres1:e.hombres1,mujeres1:e.mujeres1,unidad2:e.unidad2,hombres2:e.hombres2,mujeres2:e.mujeres2,estatusModel:e.estatus,categoria:e.categoria,especificar:e.especificar};te.Inertia.post(`/editar-manufactura/${e.id}`,p,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{L.value=J(),z.add({severity:"success",summary:"Exito",detail:"Editado correctamente",life:3e3})}})},Ue=()=>{ne.value.exportCSV()},L=r(),ce=r(),J=()=>{const i=getComputedStyle(document.documentElement),e=h.registrosManufactura.reduce((a,s)=>a+s.hombres1+s.hombres2,0),p=h.registrosManufactura.reduce((a,s)=>a+s.mujeres1+s.mujeres2,0);return{labels:["Cantidad"],datasets:[{label:"Hombres",backgroundColor:i.getPropertyValue("--blue-500"),borderColor:i.getPropertyValue("--blue-500"),data:[e]},{label:"Mujeres",backgroundColor:i.getPropertyValue("--pink-500"),borderColor:i.getPropertyValue("--pink-500"),data:[p]}]}},Ie=()=>{const i=getComputedStyle(document.documentElement),e=i.getPropertyValue("--text-color"),p=i.getPropertyValue("--text-color-secondary"),a=i.getPropertyValue("--surface-border");return{indexAxis:"y",maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:p,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:p},grid:{color:a,drawBorder:!1}}}}};Oe(()=>{L.value=J(),ce.value=Ie()});const Pe=()=>{const i=document.createElement("div");i.innerHTML=`
            <div id="heading" class="flex justify-between"> 
                 <div id="img1">
                     <img  src="images/UPQLOGOREDONDO.png" alt="Logo-UTVT-1"  width="100px !import">
                </div>
                <div id="img2">
                    <img  src="images/RSAC-logos_transparent.png" alt="Logo-UTVT-1"  width="100px">
                </div>
            </div>
                <div>
                    <div>
                        <h3 class="text-xl font-bold text-indigo-600 sm:text-3xl m-5">
                            RSAC - Reporte de Proyectos y Actividades
                        </h3>
                     </div>
                     <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead class="ltr:text-left rtl:text-right">
                            <tr class='text-left'>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Programa Educativo</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Proyecto/Actividad</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Responsable</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Estatus</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Categoria</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">PDI</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha Inicio</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha Fin</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Unidades</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Hombres</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mujeres</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            ${b.value.map(p=>`
                                    <tr class="odd:bg-gray-50">
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.programa_educativo}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.proyecto_actividad}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.responsable}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.estatus}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.categoria}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.PDI}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.fecha_inicio}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.fecha_fin}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.unidad+" - "+p.unidad2}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.hombres1+p.hombres2}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${p.mujeres1+p.mujeres2}</td>
                                    </tr>
                                `).join("")}
                        </tbody>
                    </table>
                </div
            </div>
            
        `;const e={margin:0,filename:"reporte.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"landscape",format:[14,20]}};Xe().from(i).set(e).save()},_=r("Título inicial"),pe=()=>{let i;const e=h.countEstatus;return _.value==="Acreditación"?i=[e[0],e[1],e[2]]:_.value==="Capacitación"?i=[e[3],e[4],e[5]]:_.value==="Certificación-Competencias"?i=[e[6],e[7],e[8]]:_.value==="Evento"?i=[e[9],e[10],e[11]]:_.value==="Investigación"?i=[e[12],e[13],e[14]]:_.value==="Material educativo"?i=[e[15],e[16],e[17]]:_.value==="Plan de estudio"?i=[e[18],e[19],e[20]]:_.value==="Proyecto"?i=[e[21],e[22],e[23]]:_.value==="Otro"?i=[e[24],e[25],e[26]]:i=[0,0,0],i},Ee=()=>({chart:{id:"char-estatus",type:"pie"},labels:["En proceso","Concluido","Cancelado"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"top"}}}],colors:["#008FFB","#00E396","#900C3F"],dataLabels:{enabled:!0,dropShadow:{enabled:!1},style:{fontSize:"14px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:"bold",colors:["#fff"]}},chart:{toolbar:{show:!0}},title:{text:_.value,align:"bottom",style:{fontSize:"16px",color:"#666"}}}),Se={chart:{type:"bar",height:390},plotOptions:{bar:{barHeight:"100%",distributed:!0,horizontal:!0,dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,textAnchor:"start",style:{colors:["#fff"]},formatter:function(i,e){return e.w.globals.labels[e.dataPointIndex]+":  "+i},offsetX:0,dropShadow:{enabled:!0}},stroke:{width:1,colors:["#fff"]},xaxis:{categories:["Acreditación","Capacitación","Certificación-Competencias","Evento","Investigación","Material educativo","Plan de estudio","Proyecto","Otro"]},yaxis:{labels:{show:!1}},colors:["#008FFB","#00E396","#900C3F","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8","#FF8F00"],title:{text:"Categorias",align:"bottom",style:{fontSize:"16px",color:"#666"}},tooltip:{theme:"dark",x:{show:!1},y:{title:{formatter:function(){return""}}}}},Ne=[{data:[h.acreditacionCount,h.capacitacionCount,h.CertificaciónCompetenciasCount,h.eventoCount,h.investigacionCount,h.materialEducativoCount,h.planDeEstudioCount,h.proyectoCount,h.otroCount]}],le=r(!0),De=()=>{le.value=!le.value},je=()=>{n.value.responsable.value=null,n.value.involucrados.value=null,n.value.PDI.value=null,n.value.programa_educativo.value=null,n.value.beneficios_impacto.value=null,n.value.proyecto_actividad.value=null,n.value.descripcion.value=null,n.value.global.value=null,n.value.fecha_inicio.value=null,n.value.fecha_fin.value=null,n.value.categoria.value=null,n.value.especificar.value=null,n.value.estatus.value=null},oe=r(!1);function Ae(i,e,p){if(p.dataPointIndex!=-1){const a=e.w.globals.labels[p.dataPointIndex];_.value=a,ke()}else oe.value=!1}function ke(){oe.value=!0}return Te(()=>{pe(),window.dispatchEvent(new Event("resize"))}),(i,e)=>{const p=$e("apexchart");return H(),K(qe,{title:"Manufactura"},{header:c(()=>[ea,o(t(Je))]),default:c(()=>[l("div",aa,[o(t(Ke),{class:"mb-4"},{start:c(()=>[i.is("Manufactura-registrar || Administrador || SecretarioAcademico")?(H(),K(t(g),{key:0,label:"Registrar",icon:"pi pi-plus",severity:"success",class:"!mr-3",onClick:ge})):Q("",!0),i.is("Manufactura-eliminar || Administrador || SecretarioAcademico")?(H(),K(t(g),{key:1,label:"Eliminar",icon:"pi pi-trash",severity:"danger",onClick:ye,disabled:!b.value||!b.value.length},null,8,["disabled"])):Q("",!0),o(t(g),{label:"Grafica",icon:"pi pi-chart-bar",class:"!ml-3",onClick:he,disabled:!b.value||!b.value.length},null,8,["disabled"]),o(t(g),{label:"PDF",icon:"pi pi-file-excel",class:"!ml-3",onClick:Pe,disabled:!b.value||!b.value.length},null,8,["disabled"])]),end:c(()=>[o(t(g),{label:"Excel",icon:"pi pi-upload",severity:"help",onClick:e[0]||(e[0]=a=>Ue(a))})]),_:1}),l("div",la,[l("div",oa,[l("div",ta,[o(t(We),{type:"bar",data:L.value,options:ce.value,class:"h-30rem"},null,8,["data","options"])]),l("div",sa,[l("div",ia,[o(p,{type:"bar",height:"430",width:"99%",options:Se,series:Ne,onClick:Ae})]),Be(l("div",na,[o(p,{type:"pie",height:"250",options:Ee(),series:pe(),ref:"pieChart"},null,8,["options","series"])],512),[[Le,oe.value]])]),l("div",ua,[l("div",da,[l("div",null,[l("h3",ra,W(V.enProcesoCount),1),ca])]),l("div",pa,[l("div",null,[l("h3",ma,W(V.concluidoCount),1),va])]),l("div",fa,[l("div",null,[l("h3",ha,W(V.canceladoCount),1),ba])])])]),l("div",ga,[o(t(Qe),{value:V.registrosManufactura,ref_key:"dt",ref:ne,class:"p-datatable-sm",showGridlines:"",stripedRows:"",paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],selection:b.value,"onUpdate:selection":e[14]||(e[14]=a=>b.value=a),onRowSelect:ve,onRowUnselect:fe,filters:n.value,emptyMessage:me,editingRows:ie.value,"onUpdate:editingRows":e[15]||(e[15]=a=>ie.value=a),editMode:"row",onRowEditSave:Me},{header:c(()=>[l("div",_a,[l("div",Va,[l("span",ya,[o(t(g),{label:"Filtros",severity:"help",onClick:De})]),l("span",xa,[wa,o(t(v),{modelValue:n.value.global.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value.global.value=a),placeholder:"buscador"},null,8,["modelValue"])]),o(t(g),{label:"limpiar",icon:"pi pi-trash",severity:"!ml-3",onClick:je}),l("span",null," Total Proyectos Registrados: "+W(V.registrosManufactura.length),1),le.value?Q("",!0):(H(),He("div",Ca,[l("span",Ma,[Ua,o(t(v),{modelValue:n.value.programa_educativo.value,"onUpdate:modelValue":e[2]||(e[2]=a=>n.value.programa_educativo.value=a),placeholder:"Programa Educativo"},null,8,["modelValue"])]),l("span",Ia,[Pa,o(t(v),{modelValue:n.value.proyecto_actividad.value,"onUpdate:modelValue":e[3]||(e[3]=a=>n.value.proyecto_actividad.value=a),placeholder:"Proyecto/Actividad"},null,8,["modelValue"])]),l("span",Ea,[Sa,o(t(v),{modelValue:n.value.descripcion.value,"onUpdate:modelValue":e[4]||(e[4]=a=>n.value.descripcion.value=a),placeholder:"Descripcion"},null,8,["modelValue"])]),l("span",Na,[Da,o(t(v),{modelValue:n.value.beneficios_impacto.value,"onUpdate:modelValue":e[5]||(e[5]=a=>n.value.beneficios_impacto.value=a),placeholder:"Beneficios/Impacto"},null,8,["modelValue"])]),l("span",ja,[Aa,o(t(v),{modelValue:n.value.responsable.value,"onUpdate:modelValue":e[6]||(e[6]=a=>n.value.responsable.value=a),placeholder:"Responsable"},null,8,["modelValue"])]),l("span",ka,[Ra,o(t(v),{modelValue:n.value.involucrados.value,"onUpdate:modelValue":e[7]||(e[7]=a=>n.value.involucrados.value=a),placeholder:"Involucrados"},null,8,["modelValue"])]),l("span",Fa,[Oa,o(t(v),{modelValue:n.value.PDI.value,"onUpdate:modelValue":e[8]||(e[8]=a=>n.value.PDI.value=a),placeholder:"PDI"},null,8,["modelValue"])]),l("span",Ta,[$a,o(t(v),{modelValue:n.value.fecha_inicio.value,"onUpdate:modelValue":e[9]||(e[9]=a=>n.value.fecha_inicio.value=a),placeholder:"fecha_inicio"},null,8,["modelValue"])]),l("span",Ba,[La,o(t(v),{modelValue:n.value.fecha_fin.value,"onUpdate:modelValue":e[10]||(e[10]=a=>n.value.fecha_fin.value=a),placeholder:"fecha_fin"},null,8,["modelValue"])]),l("span",Ha,[za,o(t(v),{modelValue:n.value.categoria.value,"onUpdate:modelValue":e[11]||(e[11]=a=>n.value.categoria.value=a),placeholder:"categoria"},null,8,["modelValue"])]),l("span",Ga,[Xa,o(t(v),{modelValue:n.value.estatus.value,"onUpdate:modelValue":e[12]||(e[12]=a=>n.value.estatus.value=a),placeholder:"Estatus"},null,8,["modelValue"])]),l("span",qa,[Ja,o(t(v),{modelValue:n.value.especificar.value,"onUpdate:modelValue":e[13]||(e[13]=a=>n.value.especificar.value=a),placeholder:"Especificar"},null,8,["modelValue"])])])),Ka])])]),empty:c(()=>[Qa]),default:c(()=>[o(t(m),{selectionMode:"multiple",headerStyle:"width: 3rem"}),o(t(m),{field:"id",header:"ID",hidden:""}),o(t(m),{field:"programa_educativo",header:"Programa Educativo",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(y),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,options:ue.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(m),{field:"proyecto_actividad",header:"Proyecto/Actividad",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(w),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"descripcion",header:"Descripción",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(w),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"beneficios_impacto",header:"Beneficios/Impacto",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(w),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"responsable",header:"Responsable",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(v),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"involucrados",header:"Involucrados",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(v),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"PDI",header:"PDI",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(w),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"fecha_inicio",header:"Fecha Inicio",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(Y),{id:"fecha_inicio",modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:ae},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"fecha_fin",header:"Fecha Fin",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(Y),{id:"fecha_inicio",modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:ae},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"cantidad",header:"Cantidad",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(x),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"unidad",header:"Unidad",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(y),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,options:q.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(m),{field:"hombres1",header:"Hombres",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(x),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"mujeres1",header:"Mujeres",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(x),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"unidad2",header:"Unidad",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(y),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,options:q.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(m),{field:"hombres2",header:"Hombres",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(x),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"mujeres2",header:"Mujeres",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(x),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(m),{field:"estatus",header:"Estatus",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(y),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,options:de.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(m),{field:"categoria",header:"Categoria",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(y),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,options:re.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(m),{field:"especificar",header:"Especificar",filter:!0,filterMatchMode:"in"},{editor:c(({data:a,field:s})=>[o(t(w),{modelValue:a[s],"onUpdate:modelValue":d=>a[s]=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i.is("Manufactura-editar || Administrador || SecretarioAcademico")?(H(),K(t(m),{key:0,rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"})):Q("",!0)]),_:1},8,["value","selection","filters","editingRows"])])]),o(t(se),{visible:$.value,"onUpdate:visible":e[35]||(e[35]=a=>$.value=a),style:{width:"650px"},header:"Registro nuevo",modal:!0,class:"p-fluid"},{footer:c(()=>[o(t(g),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:_e}),o(t(g),{label:"Registrar",icon:"pi pi-check",text:"",onClick:we})]),default:c(()=>[Wa,o(t(y),{id:"carrera",modelValue:N.value,"onUpdate:modelValue":e[16]||(e[16]=a=>N.value=a),options:ue.value,optionLabel:"nombre",optionValue:"value",placeholder:"Programa Educativo"},null,8,["modelValue","options"]),Ya,o(t(v),{inputId:"proyecto_actividad",modelValue:D.value,"onUpdate:modelValue":e[17]||(e[17]=a=>D.value=a)},null,8,["modelValue"]),l("div",Za,[l("div",el,[l("span",al,[o(t(w),{modelValue:j.value,"onUpdate:modelValue":e[18]||(e[18]=a=>j.value=a),rows:"5",cols:"30"},null,8,["modelValue"]),ll])]),l("div",ol,[l("span",tl,[o(t(w),{modelValue:A.value,"onUpdate:modelValue":e[19]||(e[19]=a=>A.value=a),rows:"5",cols:"30"},null,8,["modelValue"]),sl])])]),l("div",il,[l("span",nl,[o(t(w),{modelValue:Z.value,"onUpdate:modelValue":e[20]||(e[20]=a=>Z.value=a),rows:"5",cols:"30"},null,8,["modelValue"]),ul])]),l("div",dl,[l("span",rl,[o(t(w),{modelValue:ee.value,"onUpdate:modelValue":e[21]||(e[21]=a=>ee.value=a),rows:"5",cols:"30"},null,8,["modelValue"]),cl])]),pl,o(t(v),{inputId:"pdi",modelValue:k.value,"onUpdate:modelValue":e[22]||(e[22]=a=>k.value=a)},null,8,["modelValue"]),l("div",ml,[l("div",vl,[fl,o(t(Y),{id:"fecha_inicio",modelValue:C.value,"onUpdate:modelValue":e[23]||(e[23]=a=>C.value=a),dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:ae},null,8,["modelValue"])]),l("div",hl,[bl,o(t(Y),{id:"fecha_fin",modelValue:M.value,"onUpdate:modelValue":e[24]||(e[24]=a=>M.value=a),dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:Ce},null,8,["modelValue"])])]),l("div",gl,[l("div",null,[_l,o(t(y),{id:"unidad1",modelValue:R.value,"onUpdate:modelValue":e[25]||(e[25]=a=>R.value=a),options:q.value,optionLabel:"nombre",optionValue:"value",placeholder:"Unidad"},null,8,["modelValue","options"])]),l("div",null,[Vl,o(t(x),{inputId:"hombres1",modelValue:I.value,"onUpdate:modelValue":e[26]||(e[26]=a=>I.value=a),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])]),l("div",null,[yl,o(t(x),{inputId:"mujeres1",modelValue:U.value,"onUpdate:modelValue":e[27]||(e[27]=a=>U.value=a),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])])]),l("div",xl,[l("div",null,[wl,o(t(y),{id:"unidad2",modelValue:F.value,"onUpdate:modelValue":e[28]||(e[28]=a=>F.value=a),options:q.value,optionLabel:"nombre",optionValue:"value",placeholder:"Unidad"},null,8,["modelValue","options"])]),l("div",null,[Cl,o(t(x),{inputId:"hombres2",modelValue:E.value,"onUpdate:modelValue":e[29]||(e[29]=a=>E.value=a),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])]),l("div",null,[Ml,o(t(x),{inputId:"mujeres2",modelValue:P.value,"onUpdate:modelValue":e[30]||(e[30]=a=>P.value=a),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])])]),l("div",Ul,[Il,o(t(x),{inputId:"cantidad",modelValue:S.value,"onUpdate:modelValue":e[31]||(e[31]=a=>S.value=a),disabled:"",mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])]),l("div",Pl,[l("div",El,[Sl,o(t(y),{modelValue:O.value,"onUpdate:modelValue":e[32]||(e[32]=a=>O.value=a),options:de.value,optionLabel:"nombre",optionValue:"value",placeholder:"Estatus"},null,8,["modelValue","options"])]),l("div",Nl,[Dl,o(t(y),{modelValue:T.value,"onUpdate:modelValue":e[33]||(e[33]=a=>T.value=a),options:re.value,optionLabel:"nombre",optionValue:"value",placeholder:"Categoría"},null,8,["modelValue","options"])])]),l("div",jl,[l("span",Al,[o(t(w),{modelValue:X.value,"onUpdate:modelValue":e[34]||(e[34]=a=>X.value=a),rows:"5",cols:"30"},null,8,["modelValue"]),kl])])]),_:1},8,["visible"]),o(t(se),{visible:B.value,"onUpdate:visible":e[37]||(e[37]=a=>B.value=a),style:{width:"400px"},header:"Confirmar",modal:!0},{footer:c(()=>[o(t(g),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:e[36]||(e[36]=a=>B.value=!1)}),o(t(g),{label:"Eliminar",icon:"pi pi-check",text:"",onClick:xe})]),default:c(()=>[Rl]),_:1},8,["visible"]),o(t(se),{header:" ",visible:G.value,"onUpdate:visible":e[38]||(e[38]=a=>G.value=a),breakpoints:{"960px":"75vw","75vw":"90vw"},style:{width:"70vw"}},{footer:c(()=>[o(t(g),{label:"Cerrar",icon:"pi pi-check",onClick:be,autofocus:""})]),default:c(()=>[o(Ye,{class:"m-auto",datos:b.value},null,8,["datos"])]),_:1},8,["visible"])])]),_:1})}}},Jl=Ze(Fl,[["__scopeId","data-v-e595bde0"]]);export{Jl as default};
