var _=(t,r,s)=>new Promise((o,e)=>{var n=a=>{try{u(s.next(a))}catch(m){e(m)}},i=a=>{try{u(s.throw(a))}catch(m){e(m)}},u=a=>a.done?o(a.value):Promise.resolve(a.value).then(n,i);u((s=s.apply(t,r)).next())});import{c as d,r as y,a as v,b as E,d as P,e as k,f as I,o as w,g as C,h as R,i as O,j as b,s as A,k as S,_ as j,C as N,I as $,l as B}from"./vendor.0216106a.js";const H=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};H();const U="modulepreload",h={},V="/assets/posawesome/posapp/",L=function(r,s){return!s||s.length===0?r():Promise.all(s.map(o=>{if(o=`${V}${o}`,o in h)return;h[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":U,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((u,a)=>{i.addEventListener("load",u),i.addEventListener("error",a)})})).then(()=>r())},f=d({url:"frappe.auth.get_logged_user",cache:"User",onError(t){t&&t.exc_type==="AuthenticationError"&&p.push({name:"LoginPage"})}});function g(){let r=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return r==="Guest"&&(r=null),r}const l=y({login:d({url:"login",makeParams({email:t,password:r}){return{usr:t,pwd:r}},onSuccess(t){f.reload(),l.user=g(),l.login.reset(),p.replace(t.default_route||"/")}}),logout:d({url:"logout",onSuccess(){f.reset(),l.user=g(),p.replace({name:"Login"})}}),user:g(),isLoggedIn:v(()=>!!l.user)}),q=[{path:"/",name:"Home",component:()=>L(()=>import("./Home.97a625a0.js"),["assets/Home.97a625a0.js","assets/vendor.0216106a.js","assets/vendor.dc87475e.css"])},{name:"Login",path:"/account/login",component:()=>L(()=>import("./Login.499a397e.js"),["assets/Login.499a397e.js","assets/vendor.0216106a.js","assets/vendor.dc87475e.css"])}];let p=E({history:P("/posapp"),routes:q});p.beforeEach((t,r,s)=>_(void 0,null,function*(){let o=l.isLoggedIn;try{yield f.promise}catch(e){o=!1}t.name==="Login"&&o?s({name:"Home"}):t.name!=="Login"&&!o?s({name:"Login"}):s()}));const x=k({__name:"App",setup(t){return(r,s)=>{const o=I("router-view");return w(),C("div",null,[R("main",null,[O(o)])])}}});let c=b(x);A("resourceFetcher",B);c.use(p);c.use(S);c.component("Button",j);c.component("Card",N);c.component("Input",$);c.mount("#app");export{l as s};
