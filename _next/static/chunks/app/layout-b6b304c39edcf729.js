(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{258:function(e,r,t){Promise.resolve().then(t.bind(t,3623)),Promise.resolve().then(t.bind(t,3063)),Promise.resolve().then(t.t.bind(t,2941,23)),Promise.resolve().then(t.t.bind(t,3177,23))},3623:function(e,r,t){"use strict";t.r(r),t.d(r,{NavContextProvider:function(){return i},useNavContext:function(){return c}});var o=t(7437),n=t(2265);let s={home:(0,n.createRef)(),about:(0,n.createRef)(),porfolio:(0,n.createRef)()},a=(0,n.createContext)(s),i=e=>(0,o.jsx)(a.Provider,{value:s,children:e.children}),c=()=>(0,n.useContext)(a)},3063:function(e,r,t){"use strict";t.r(r),t.d(r,{Navbar:function(){return d}});var o=t(7437),n=t(6691),s=t.n(n),a=t(2265),i=t(8910),c=t(3623),l=t(2601);let d=()=>{let e=(0,c.useNavContext)(),[r,t]=(0,a.useState)(!1),n=r=>{var t,o;return null==e?void 0:null===(o=e[r])||void 0===o?void 0:null===(t=o.current)||void 0===t?void 0:t.scrollIntoView({behavior:"smooth",block:"start"})},d=()=>{"dark"!==sessionStorage.theme&&("theme"in sessionStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(t(!1),document.documentElement.classList.remove("dark")):(t(!0),document.documentElement.classList.add("dark"))};return(0,a.useEffect)(()=>{d()},[r]),(0,o.jsxs)("nav",{className:" top-0 w-full h-14 fixed flex items-center justify-end bg-white/75 dark:shadow dark:bg-gray-800/75",children:[(0,o.jsx)("div",{onClick:()=>n("home"),className:"cursor-pointer mx-4 sm:mx-6 animate-bounce-xy",children:(0,o.jsx)(s(),{src:"".concat(l.env.exportPath,"/logo192.png"),alt:"Vercel Logo",width:50,height:30,priority:!0})}),(0,o.jsxs)("div",{className:"container flex justify-end p-6 mx-auto text-custom-blue dark:text-gray-300",children:[(0,o.jsx)("div",{onClick:()=>{sessionStorage.theme=r?"light":"dark",t(!r)},className:"text-2xl border-b-2 border-transparent dark:hover:text-gray-200 hover:border-custom-blue hover:cursor-pointer mx-1.5 sm:mx-6 mt-1",children:r?(0,o.jsx)(i.hjx,{}):(0,o.jsx)(i.UFB,{})}),(0,o.jsx)("div",{onClick:()=>n("about"),className:"text-2xl border-b-2 border-transparent dark:hover:text-gray-200 hover:border-custom-blue hover:cursor-pointer mx-1.5 sm:mx-6",children:"About"}),(0,o.jsx)("div",{onClick:()=>n("porfolio"),className:"text-2xl border-b-2 border-transparent dark:hover:text-gray-200 hover:border-custom-blue hover:cursor-pointer mx-1.5 sm:mx-6",children:"Portfolio"})]})]})}},3177:function(){}},function(e){e.O(0,[582,545,971,596,744],function(){return e(e.s=258)}),_N_E=e.O()}]);