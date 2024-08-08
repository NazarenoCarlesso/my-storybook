import{j as v}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const C=({label:f,size:g="normal",allCaps:x,color:z,fontColor:h})=>v.jsx("span",{className:`label ${g} ${z}`,style:{textTransform:x?"uppercase":"initial",color:h},children:f});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h3' | 'h2' | 'h1'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h1'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters"},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const q={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label",size:"normal",allCaps:!1,color:"text-primary",fontColor:"#000000"}},a={args:{label:"AllCaps label",size:"normal",allCaps:!0}},r={args:{label:"Secondary label",size:"normal",color:"text-secondary"}},l={args:{label:"CustomColor label",size:"normal",fontColor:"crimson"}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Basic label",
    size: "normal",
    allCaps: false,
    color: "text-primary",
    fontColor: "#000000"
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "AllCaps label",
    size: "normal",
    allCaps: true
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    size: "normal",
    color: "text-secondary"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,y,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "CustomColor label",
    size: "normal",
    fontColor: "crimson"
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const L=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,L as __namedExportsOrder,q as default};
