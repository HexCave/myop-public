import{_ as v}from"./DMxEeacr.js";import{_ as k}from"./DXBKCHes.js";import{f as g,s as h,g as y,o as t,c as s,a as m,h as d,t as x,b as w,n as b,r as q,i as C,j,k as $,F as N,l as S,m as B}from"./DYkRqgEj.js";import"./Lb_s1xLr.js";const I=["src"],M={class:"flex flex-col gap-3 justify-between w-full dark:text-white"},P={class:"font-semibold"},T={class:"text-[12px] md:text-sm font-semibold"},F={__name:"product-card",props:{product:{type:Object,required:!0}},setup(e){const l=g(),{defaiultImage:a}=h(l),n=e,r=y();function p(){b({path:"/product-details",query:{id:n.product.Code,...r.query}})}return(f,o)=>{var u,i;const c=k;return t(),s("div",{class:"flex flex-col xxs:flex-row gap-3 xs:gap-5 p-3 bg-white dark:bg-darkCard rounded-xl w-full max-w-[400px] md:max-w-none h-full cursor-pointer active:scale-105 duration-200",onClick:o[0]||(o[0]=_=>p())},[m("img",{src:((i=(u=e.product)==null?void 0:u.Images[0])==null?void 0:i.Url)||d(a),alt:"",class:"xxs:h-full w-auto xxs:max-w-[128px] rounded-lg"},null,8,I),m("div",M,[m("h1",P,x(e.product.Name),1),m("p",T,x(e.product.Sub_Category)+" | "+x(e.product.Gender)+" | "+x(e.product.Mode),1),w(c,{to:"/product-details",query:{id:e.product.Code,...d(r).query},text:"Learn Now","text-size":"text-sm leading-[200%]"},null,8,["query"])])])}}},L={class:"duration-500 w-full px-5 sm:px-10 py-5 min-h-[100vh]"},R={key:0,class:"w-full h-screen"},V={key:0,class:"text-center w-full"},z={key:1,class:"text-center w-full flex justify-center"},D={key:1,class:"flex flex-col md:flex-row md:flex-wrap gap-5 justify-center md:justify-between items-center md:grid md:grid-cols-2 xl:grid-cols-3"},A={__name:"index",setup(e){const l=g(),{loading:a}=h(l),n=y(),r=q([]),p=C(()=>n.query.isCosmo==="true");j(()=>{a.value=!0,f(n.query.category),$([()=>n.query.category,()=>p.value],([o,c])=>{f(o)})});function f(o="all"){a.value=!0,l.getProducts(o).then(c=>{r.value=c,a.value=!1})}return(o,c)=>{const u=v,i=F;return t(),s("div",L,[d(r).length==0?(t(),s("div",R,[d(a)?(t(),s("div",z,[w(u)])):(t(),s("div",V,"No data loaded."))])):(t(),s("div",D,[(t(!0),s(N,null,S(d(r),_=>(t(),B(i,{key:_.id,product:_,class:"shadow-lg"},null,8,["product"]))),128))]))])}}};export{A as default};