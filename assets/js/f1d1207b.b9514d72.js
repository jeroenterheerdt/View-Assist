"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7812],{990:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(4848),a=i(8453);const s={},r="View Camera",o={id:"extend-functionality/sentences/view-camera",title:"View Camera",description:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",source:"@site/docs/extend-functionality/sentences/view-camera.md",sourceDirName:"extend-functionality/sentences",slug:"/extend-functionality/sentences/view-camera",permalink:"/View-Assist/docs/extend-functionality/sentences/view-camera",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extend-functionality/sentences/view-camera.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Travel Times by Waze",permalink:"/View-Assist/docs/extend-functionality/sentences/travel-times-by-waze"},next:{title:"What Time is it?",permalink:"/View-Assist/docs/extend-functionality/sentences/what-time-is-it"}},c={},l=[{value:"To do",id:"to-do",level:2},{value:"Change Log",id:"change-log",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"view-camera",children:"View Camera"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fdinki%2FView-Assist%2Fmain%2FView+Assist+custom+sentences%2FView+Camera%2Fblueprint-viewcamera.yaml",children:(0,n.jsx)(t.img,{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled."})})}),"\n",(0,n.jsx)(t.p,{children:"This blueprint allows the user to display any camera listed in the configuration by asking assist to 'show {cameraname} camera'.  The trickiest part of the install is defining the dictionary option though it is not hard once you understand it:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:' {"front":"camera.front_camera","doorbell":"camera.mydoorbellcamera"}\n'})}),"\n",(0,n.jsx)(t.p,{children:'This is a dictionary.  The format is "what you want to call the camera by voice":"the Home Assistant camera. device" .  Additional cameras are separated by commas.  You can have as many or as little as you like but you must have at least one.  You can reuse the same camera with multiple ways to call it.  For example:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:' {"front":"camera.front_camera","driveway":"camera.front_camera","doorbell":"camera.mydoorbellcamera"}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Here the user could say 'show front camera' or 'show driveway camera' and camera.front_camera would be shown for both sentences.  Note that double quotes are required for defining these dictionaries as single quotes will cause errors."}),"\n",(0,n.jsx)(t.p,{children:"Requirements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://raw.githubusercontent.com/dinki/View-Assist/main/View%20Assist%20dashboard%20and%20views/views/camera/camera.yaml",children:"camera view"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"to-do",children:"To do"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only set hold mode if device called is valid and device is video capable"}),"\n",(0,n.jsx)(t.li,{children:"Set default message for not found cameras"}),"\n",(0,n.jsx)(t.li,{children:"Add multicamera view when Frigate card dev changes released to main"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"change-log",children:"Change Log"}),"\n",(0,n.jsx)(t.p,{children:"v 1.0.0 Initial release"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(6540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);