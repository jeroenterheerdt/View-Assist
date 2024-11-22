"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7918],{7328:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),t=n(8453);const r={title:"Alarms Reminders & Timers"},l="Alarms Reminders & Timers",a={id:"extend-functionality/sentences/alarms-reminders-timers",title:"Alarms Reminders & Timers",description:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",source:"@site/docs/extend-functionality/sentences/alarms-reminders-timers.md",sourceDirName:"extend-functionality/sentences",slug:"/extend-functionality/sentences/alarms-reminders-timers",permalink:"/View-Assist/docs/extend-functionality/sentences/alarms-reminders-timers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Alarms Reminders & Timers"},sidebar:"tutorialSidebar",previous:{title:"Sentence Gallery",permalink:"/View-Assist/docs/extend-functionality/sentences/"},next:{title:"Ask AI",permalink:"/View-Assist/docs/extend-functionality/sentences/ask-ai"}},o={},d=[{value:"Description",id:"description",level:3},{value:"Usage",id:"usage",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Unfinished business",id:"unfinished-business",level:3},{value:"Changelog",id:"changelog",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"alarms-reminders--timers",children:"Alarms Reminders & Timers"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fdinki%2FView-Assist%2Frefs%2Fheads%2Fmain%2FView_Assist_custom_sentences%2FAlarms_Reminders_Timers%2Fblueprint-alarmsreminderstimers.yaml",children:(0,s.jsx)(i.img,{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled."})})}),"\n",(0,s.jsx)(i.p,{children:"Detailed install video: Coming Soon!"}),"\n",(0,s.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"This custom sentence allows for an on demand call to create and list alarms, reminders and timers.  While this intial version is fully functional,  I do not take any responsibility if this makes you late for work, forget to buy your wife flowers, or if your eggs get overcooked.  There's your warning and my escape clause!"}),"\n",(0,s.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i.p,{children:"Use your wakeword and say things like:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Set a timer for 2 minutes"}),"\n",(0,s.jsx)(i.li,{children:"Start an egg time for 3 minutes"}),"\n",(0,s.jsx)(i.li,{children:"List my timers"}),"\n",(0,s.jsx)(i.li,{children:"Remind me to wash the dog at 3pm"}),"\n",(0,s.jsx)(i.li,{children:"Set a reminder to take the food out of the over in 30 minutes"}),"\n",(0,s.jsx)(i.li,{children:"Cancel my egg timer"}),"\n",(0,s.jsx)(i.li,{children:"Set an alarm for 4pm"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"View"}),":  ",(0,s.jsx)(i.a,{href:"../views/info",children:"Info view"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Download and install the pyscript file (.py) found in this directory and put it in your pyscript directory.  Need help?  See the pyscript video"}),"\n",(0,s.jsxs)(i.li,{children:["Download and install the view located ",(0,s.jsx)(i.a,{href:"https://raw.githubusercontent.com/dinki/View-Assist/refs/heads/main/View%20Assist%20dashboard%20and%20views/views/alarm/alarm.yaml",children:"here"}),".  Need help?  See the view installation video"]}),"\n",(0,s.jsx)(i.li,{children:"Find and upload a sound to play when the timer expires.  Need help?  See the Stream Assist video where I discuss how to find these and where to upload"}),"\n",(0,s.jsx)(i.li,{children:"Install blueprint using button above and configure options"}),"\n",(0,s.jsxs)(i.li,{children:["Install the ",(0,s.jsx)(i.a,{href:"https://github.com/dinki/View-Assist/tree/main/View_Assist_scripts/Play_Sound_on_Media_Player",children:"play sound on media player"})," script.  Open the blueprint and click 'save script' button at bottom.  Keep all options the same and click 'rename' to make the script available for use"]}),"\n",(0,s.jsxs)(i.li,{children:["Install the ",(0,s.jsx)(i.a,{href:"https://github.com/dinki/View-Assist/tree/main/View_Assist_scripts/Play_Sound_on_Media_Player_Repeat",children:"play sound on media player repeat"})," script.  Open the blueprint and click 'save script' button at bottom.  Keep all options the same and click 'rename' to make the script available for use"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"unfinished-business",children:"Unfinished business"}),"\n",(0,s.jsx)(i.p,{children:"This blueprint is fully functional and it does work well.  You need to know a couple of things:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"This will not survive a restart.  The states are not persistent.  This is a big hole and I have plans to fix it.  Just know that a restart will cancel everything so don't use this for mission critical tasks just yet if you plan to restart before your timer expires"}),"\n",(0,s.jsx)(i.li,{children:"You can only set alarms/reminders by time for today.  I will soon add the ability to add today/tomorrow/Tuesday/etc but it's not in there yet"}),"\n",(0,s.jsx)(i.li,{children:"When you ask to list timers it will list timers, alarms, and reminders.  I will make these individual calls soon"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Version"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"v 1.0.0"}),(0,s.jsx)(i.td,{children:"Initial release"})]})})]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var s=n(6540);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);