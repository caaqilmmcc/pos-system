import{bo as _,am as v,bs as k,bv as C,ai as r,o as u,k as c,h,n as b,g as x,s as a,w as l,x as w,y as n,A as y,f as B,b8 as f,b1 as U}from"./vendor.f3d812bb.js";const A={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:v,Dialog:k,FileUploader:C},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(i){let o=i.target.files[0];!o||(this.addVideoDialog.file=o)},addVideo(i){this.editor.chain().focus().insertContent(`<video src="${i}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},F={class:"flex items-center space-x-2"},I=["src"];function N(i,o,S,L,e,t){const s=r("Button"),g=r("FileUploader"),p=r("Dialog");return u(),c(U,null,[h(i.$slots,"default",b(x({onClick:t.openDialog}))),a(p,{options:{title:"Add Video"},modelValue:e.addVideoDialog.show,"onUpdate:modelValue":o[2]||(o[2]=d=>e.addVideoDialog.show=d),onAfterLeave:t.reset},{"body-content":l(()=>[a(g,{"file-types":"video/*",onSuccess:o[0]||(o[0]=d=>e.addVideoDialog.url=d.file_url)},{default:l(({file:d,progress:V,uploading:m,openFileSelector:D})=>[w("div",F,[a(s,{onClick:D},{default:l(()=>[n(y(m?`Uploading ${V}%`:e.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),e.addVideoDialog.url?(u(),B(s,{key:0,onClick:()=>{e.addVideoDialog.url=null,e.addVideoDialog.file=null}},{default:l(()=>[n(" Remove ")]),_:2},1032,["onClick"])):f("",!0)])]),_:1}),e.addVideoDialog.url?(u(),c("video",{key:0,src:e.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,I)):f("",!0)]),actions:l(()=>[a(s,{variant:"solid",onClick:o[1]||(o[1]=d=>t.addVideo(e.addVideoDialog.url))},{default:l(()=>[n(" Insert Video ")]),_:1}),a(s,{onClick:t.reset},{default:l(()=>[n("Cancel")]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var R=_(A,[["render",N]]);export{R as default};