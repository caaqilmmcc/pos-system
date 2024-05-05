var pe=Object.defineProperty;var L=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var q=(a,t,s)=>t in a?pe(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,E=(a,t)=>{for(var s in t||(t={}))N.call(t,s)&&q(a,s,t[s]);if(L)for(var s of L(t))U.call(t,s)&&q(a,s,t[s]);return a};var h=(a,t)=>{var s={};for(var o in a)N.call(a,o)&&t.indexOf(o)<0&&(s[o]=a[o]);if(a!=null&&L)for(var o of L(a))t.indexOf(o)<0&&U.call(a,o)&&(s[o]=a[o]);return s};var V=(a,t,s)=>new Promise((o,n)=>{var c=p=>{try{g(s.next(p))}catch(P){n(P)}},d=p=>{try{g(s.throw(p))}catch(P){n(P)}},g=p=>p.done?o(p.value):Promise.resolve(p.value).then(c,d);g((s=s.apply(a,t)).next())});import{c as A,r as fe,a as y,b as me,d as _e,e as i,_ as I,o as u,f as m,w as r,n as w,g as x,u as e,v as ge,h as f,i as T,m as he,t as ye,j as be,k as C,l as $,p as S,q as b,N as ve,z as we,S as H,s as l,L as K,V as W,X as G,x as B,y as v,A as xe,B as $e,C as Pe,D as Y,F as Be,E as Ce,G as Se,H as Fe,I as De,J as Ie,M as Oe,K as ke,O as Le,P as Ee,Q as ze,R as Ve,T as Ae,U as J,W as Te,$ as je,Y as Me,Z as Re,a0 as Ne,a1 as Ue,a2 as qe,a3 as X,a4 as He,a5 as Ke,a6 as We,a7 as Ge,a8 as Ye,a9 as Je,aa as Xe,ab as Qe,ac as Ze,ad as Q,ae as et,af as tt,ag as st,ah as Z,ai as at,aj as ot,ak as nt,al as rt,am as lt,an as ct,ao as dt,ap as it}from"./vendor.f3d812bb.js";const ut=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}};ut();const pt="modulepreload",ee={},ft="/assets/posawesome/posapp/",te=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${ft}${o}`,o in ee)return;ee[o]=!0;const n=o.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":pt,n||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),n)return new Promise((g,p)=>{d.addEventListener("load",g),d.addEventListener("error",p)})})).then(()=>t())},j=A({url:"frappe.auth.get_logged_user",cache:"User",onError(a){a&&a.exc_type==="AuthenticationError"&&k.push({name:"LoginPage"})}});function M(){let t=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return t==="Guest"&&(t=null),t}const O=fe({login:A({url:"login",makeParams({email:a,password:t}){return{usr:a,pwd:t}},onSuccess(a){j.reload(),O.user=M(),O.login.reset(),k.replace(a.default_route||"/")}}),logout:A({url:"logout",onSuccess(){j.reset(),O.user=M(),k.replace({name:"Login"})}}),user:M(),isLoggedIn:y(()=>!!O.user)}),mt=[{path:"/",name:"Home",component:()=>te(()=>import("./Home.dbfa59b6.js"),["assets/Home.dbfa59b6.js","assets/vendor.f3d812bb.js","assets/vendor.dc87475e.css"])},{name:"Login",path:"/account/login",component:()=>te(()=>import("./Login.d61dc3bd.js"),["assets/Login.d61dc3bd.js","assets/vendor.f3d812bb.js","assets/vendor.dc87475e.css"])}];let k=me({history:_e("/posapp"),routes:mt});k.beforeEach((a,t,s)=>V(void 0,null,function*(){let o=O.isLoggedIn;try{yield j.promise}catch(n){o=!1}a.name==="Login"&&o?s({name:"Home"}):a.name!=="Login"&&!o?s({name:"Login"}):s()}));const _t=i({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(a,{emit:t}){const n=I(a,t);return(c,d)=>(u(),m(e(ge),w(x(e(n))),{default:r(()=>[f(c.$slots,"default")]),_:3},16))}});i({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(a){const t=a;return(s,o)=>(u(),m(e(T),w(x(t)),{default:r(()=>[f(s.$slots,"default")]),_:3},16))}});const gt=i({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(a){const t=a;return(s,o)=>(u(),m(e(he),w(x(t)),{default:r(()=>[f(s.$slots,"default")]),_:3},16))}});function _(...a){return ye(be(a))}const ht=i({__name:"DialogHeader",props:{class:{}},setup(a){const t=a;return(s,o)=>(u(),C("div",{class:$(e(_)("flex flex-col gap-y-1.5 text-center sm:text-left",t.class))},[f(s.$slots,"default")],2))}}),yt=i({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const d=t,{class:n}=d;return h(d,["class"])}),o=S(s);return(n,c)=>(u(),m(e(ve),b(e(o),{class:e(_)("text-lg font-semibold leading-none tracking-tight",t.class)}),{default:r(()=>[f(n.$slots,"default")]),_:3},16,["class"]))}});i({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const d=t,{class:n}=d;return h(d,["class"])}),o=S(s);return(n,c)=>(u(),m(e(we),b(e(o),{class:e(_)("text-sm text-muted-foreground",t.class)}),{default:r(()=>[f(n.$slots,"default")]),_:3},16,["class"]))}});const bt=B("span",{class:"sr-only"},"Close",-1),vt=i({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(a,{emit:t}){const s=a,o=t,n=y(()=>{const p=s,{class:d}=p;return h(p,["class"])}),c=I(n,o);return(d,g)=>(u(),m(e(H),null,{default:r(()=>[l(e(K),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),l(e(W),b(e(c),{class:e(_)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s.class)}),{default:r(()=>[f(d.$slots,"default"),l(e(T),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:r(()=>[l(e(G),{class:"w-4 h-4"}),bt]),_:1})]),_:3},16,["class"])]),_:3}))}}),wt=B("span",{class:"sr-only"},"Close",-1);i({__name:"DialogScrollContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(a,{emit:t}){const s=a,o=t,n=y(()=>{const p=s,{class:d}=p;return h(p,["class"])}),c=I(n,o);return(d,g)=>(u(),m(e(H),null,{default:r(()=>[l(e(K),{class:"fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"},{default:r(()=>[l(e(W),b({class:e(_)("relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",s.class)},e(c),{onPointerDownOutside:g[0]||(g[0]=p=>{const P=p.detail.originalEvent,R=P.target;(P.offsetX>R.clientWidth||P.offsetY>R.clientHeight)&&p.preventDefault()})}),{default:r(()=>[f(d.$slots,"default"),l(e(T),{class:"absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-secondary"},{default:r(()=>[l(e(G),{class:"w-4 h-4"}),wt]),_:1})]),_:3},16,["class"])]),_:3})]),_:3}))}});const xt=i({__name:"DialogFooter",props:{class:{}},setup(a){const t=a;return(s,o)=>(u(),C("div",{class:$(e(_)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",t.class))},[f(s.$slots,"default")],2))}}),$t=i({__name:"modal",props:{title:{},open:{type:Boolean},onClose:{type:Function}},setup(a){const t=a,s=()=>{console.log("close","\u{1F680}")};return(o,n)=>(u(),m(e(_t),{open:o.open,"onUpdate:open":s},{default:r(()=>[l(e(gt),null,{default:r(()=>[v(" Edit Profile ")]),_:1}),l(e(vt),null,{default:r(()=>[l(e(ht),null,{default:r(()=>[l(e(yt),null,{default:r(()=>[v(xe(t.title),1)]),_:1})]),_:1}),l(e(xt),null,{default:r(()=>[f(o.$slots,"default")]),_:3})]),_:3})]),_:3},8,["open"]))}}),se=Symbol(),ae=i({__name:"FormItem",props:{class:{}},setup(a){const t=a,s=$e();return Pe(se,s),(o,n)=>(u(),C("div",{class:$(e(_)("space-y-2",t.class))},[f(o.$slots,"default")],2))}});function z(){const a=Y(Be),t=Y(se),s={valid:Ce(),isDirty:Se(),isTouched:Fe(),error:De()};if(!a)throw new Error("useFormField should be used within <FormField>");const{name:o}=a,n=t;return E({id:n,name:o,formItemId:`${n}-form-item`,formDescriptionId:`${n}-form-item-description`,formMessageId:`${n}-form-item-message`},s)}const Pt=i({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const c=t,{class:o}=c;return h(c,["class"])});return(o,n)=>(u(),m(e(Ie),b(s.value,{class:e(_)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",t.class)}),{default:r(()=>[f(o.$slots,"default")]),_:3},16,["class"]))}}),oe=i({__name:"FormLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,{error:s,formItemId:o}=z();return(n,c)=>(u(),m(e(Pt),{class:$(e(_)(e(s)&&"text-destructive",t.class)),for:e(o)},{default:r(()=>[f(n.$slots,"default")]),_:3},8,["class","for"]))}}),ne=i({__name:"FormControl",setup(a){const{error:t,formItemId:s,formDescriptionId:o,formMessageId:n}=z();return(c,d)=>(u(),m(e(Oe),{id:e(s),"aria-describedby":e(t)?`${e(o)} ${e(n)}`:`${e(o)}`,"aria-invalid":!!e(t)},{default:r(()=>[f(c.$slots,"default")]),_:3},8,["id","aria-describedby","aria-invalid"]))}}),re=i({__name:"FormMessage",setup(a){const{name:t,formMessageId:s}=z();return(o,n)=>(u(),m(e(Le),{id:e(s),as:"p",name:ke(e(t)),class:"text-sm font-medium text-destructive"},null,8,["id","name"]))}}),Bt=["id"];i({__name:"FormDescription",props:{class:{}},setup(a){const t=a,{formDescriptionId:s}=z();return(o,n)=>(u(),C("p",{id:e(s),class:$(e(_)("text-sm text-muted-foreground",t.class))},[f(o.$slots,"default")],10,Bt))}});const le=i({__name:"Select",props:{open:{type:Boolean},defaultOpen:{type:Boolean},defaultValue:{},modelValue:{},dir:{},name:{},autocomplete:{},disabled:{type:Boolean},required:{type:Boolean}},emits:["update:modelValue","update:open"],setup(a,{emit:t}){const n=I(a,t);return(c,d)=>(u(),m(e(Ee),w(x(e(n))),{default:r(()=>[f(c.$slots,"default")]),_:3},16))}}),ce=i({__name:"SelectValue",props:{placeholder:{},asChild:{type:Boolean},as:{}},setup(a){const t=a;return(s,o)=>(u(),m(e(ze),w(x(t)),{default:r(()=>[f(s.$slots,"default")]),_:3},16))}}),de=i({__name:"SelectTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const d=t,{class:n}=d;return h(d,["class"])}),o=S(s);return(n,c)=>(u(),m(e(Ve),b(e(o),{class:e(_)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t.class)}),{default:r(()=>[f(n.$slots,"default"),l(e(Ae),{"as-child":""},{default:r(()=>[l(e(J),{class:"w-4 h-4 opacity-50"})]),_:1})]),_:3},16,["class"]))}}),ie=i({inheritAttrs:!1,__name:"SelectContent",props:{forceMount:{type:Boolean},position:{default:"popper"},bodyLock:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["closeAutoFocus","escapeKeyDown","pointerDownOutside"],setup(a,{emit:t}){const s=a,o=t,n=y(()=>{const p=s,{class:d}=p;return h(p,["class"])}),c=I(n,o);return(d,g)=>(u(),m(e(Te),null,{default:r(()=>[l(e(je),b(E(E({},e(c)),d.$attrs),{class:e(_)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",d.position==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s.class)}),{default:r(()=>[l(e(St)),l(e(Me),{class:$(e(_)("p-1",d.position==="popper"&&"h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"))},{default:r(()=>[f(d.$slots,"default")]),_:3},8,["class"]),l(e(Ft))]),_:3},16,["class"])]),_:3}))}}),ue=i({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const c=t,{class:o}=c;return h(c,["class"])});return(o,n)=>(u(),m(e(Re),b({class:e(_)("p-1 w-full",t.class)},s.value),{default:r(()=>[f(o.$slots,"default")]),_:3},16,["class"]))}}),Ct={class:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},F=i({__name:"SelectItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const d=t,{class:n}=d;return h(d,["class"])}),o=S(s);return(n,c)=>(u(),m(e(Ne),b(e(o),{class:e(_)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t.class)}),{default:r(()=>[B("span",Ct,[l(e(qe),null,{default:r(()=>[l(e(Ue),{class:"h-4 w-4"})]),_:1})]),l(e(X),null,{default:r(()=>[f(n.$slots,"default")]),_:3})]),_:3},16,["class"]))}});i({__name:"SelectItemText",props:{asChild:{type:Boolean},as:{}},setup(a){const t=a;return(s,o)=>(u(),m(e(X),w(x(t)),{default:r(()=>[f(s.$slots,"default")]),_:3},16))}});i({__name:"SelectLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a;return(s,o)=>(u(),m(e(He),{class:$(e(_)("py-1.5 pl-8 pr-2 text-sm font-semibold",t.class))},{default:r(()=>[f(s.$slots,"default")]),_:3},8,["class"]))}});i({__name:"SelectSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const c=t,{class:o}=c;return h(c,["class"])});return(o,n)=>(u(),m(e(Ke),b(s.value,{class:e(_)("-mx-1 my-1 h-px bg-muted",t.class)}),null,16,["class"]))}});const St=i({__name:"SelectScrollUpButton",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const d=t,{class:n}=d;return h(d,["class"])}),o=S(s);return(n,c)=>(u(),m(e(We),b(e(o),{class:e(_)("flex cursor-default items-center justify-center py-1",t.class)}),{default:r(()=>[f(n.$slots,"default",{},()=>[l(e(Ge),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),Ft=i({__name:"SelectScrollDownButton",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=y(()=>{const d=t,{class:n}=d;return h(d,["class"])}),o=S(s);return(n,c)=>(u(),m(e(Ye),b(e(o),{class:e(_)("flex cursor-default items-center justify-center py-1",t.class)}),{default:r(()=>[f(n.$slots,"default",{},()=>[l(e(J),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),Dt=i({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(a){const t=a;return(s,o)=>(u(),m(e(Je),{as:s.as,"as-child":s.asChild,class:$(e(_)(e(It)({variant:s.variant,size:s.size}),t.class))},{default:r(()=>[f(s.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),It=Xe("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ot={class:"text-right"},kt=i({__name:"open-shift-modal",setup(a){const t=Qe(Ze({company:Q({required_error:"Please select an company."}).min(1),POSProfile:Q({required_error:"Please select an Pos Profile."}).min(1)})),s=et({validationSchema:t}),o=tt([]),n=()=>V(this,null,function*(){const d=yield st.get("posawesome.posawesome.api.posapp.get_opening_dialog_data");o.value=d.data});n(),console.log(n,"\u{1F4AF}");const c=s.handleSubmit(d=>{console.log("Form submitted!",d)});return(d,g)=>(u(),C("div",null,[l($t,{open:!0,title:"Create POS Opening Shift"},{default:r(()=>[B("form",{onSubmit:g[0]||(g[0]=(...p)=>e(c)&&e(c)(...p)),class:"w-full space-y-3"},[l(e(Z),{name:"company"},{default:r(({componentField:p})=>[l(e(ae),null,{default:r(()=>[l(e(oe),null,{default:r(()=>[v("Company")]),_:1}),l(e(le),w(x(p)),{default:r(()=>[l(e(ne),null,{default:r(()=>[l(e(de),null,{default:r(()=>[l(e(ce),{placeholder:"Select a verified company"})]),_:1})]),_:1}),l(e(ie),{class:"max-w-full w-[462px]"},{default:r(()=>[l(e(ue),null,{default:r(()=>[l(e(F),{value:"m@example.com"},{default:r(()=>[v(" m@example.com ")]),_:1}),l(e(F),{value:"m@google.com"},{default:r(()=>[v(" m@google.com ")]),_:1}),l(e(F),{value:"m@support.com"},{default:r(()=>[v(" m@support.com ")]),_:1})]),_:1})]),_:1})]),_:2},1040),l(e(re))]),_:2},1024)]),_:1}),l(e(Z),{name:"POSProfile"},{default:r(({componentField:p})=>[l(e(ae),null,{default:r(()=>[l(e(oe),null,{default:r(()=>[v("POS Profile")]),_:1}),l(e(le),w(x(p)),{default:r(()=>[l(e(ne),null,{default:r(()=>[l(e(de),null,{default:r(()=>[l(e(ce),{placeholder:"Select a verified pos profile"})]),_:1})]),_:1}),l(e(ie),{class:"max-w-full w-[462px]"},{default:r(()=>[l(e(ue),null,{default:r(()=>[l(e(F),{value:"m@example.com"},{default:r(()=>[v(" m@example.com ")]),_:1}),l(e(F),{value:"m@google.com"},{default:r(()=>[v(" m@google.com ")]),_:1}),l(e(F),{value:"m@support.com"},{default:r(()=>[v(" m@support.com ")]),_:1})]),_:1})]),_:1})]),_:2},1040),l(e(re))]),_:2},1024)]),_:1}),B("div",Ot,[l(e(Dt),{type:"submit"},{default:r(()=>[v(" Submit ")]),_:1})])],32)]),_:1})]))}}),Lt=i({__name:"provider",setup(a){return(t,s)=>(u(),m(kt))}}),Et=i({__name:"App",setup(a){return(t,s)=>{const o=at("router-view");return u(),C("div",null,[B("div",null,[l(Lt)]),B("main",null,[l(o)])])}}});let D=ot(Et);nt("resourceFetcher",it);D.use(k);D.use(rt);D.component("Button",lt);D.component("Card",ct);D.component("Input",dt);D.mount("#app");export{Dt as _,vt as a,_t as b,_ as c,O as s};
