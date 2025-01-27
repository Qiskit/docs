(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{3632:function(e,t,n){Promise.resolve().then(n.bind(n,50706)),Promise.resolve().then(n.bind(n,77406))},50706:function(e,t,n){"use strict";n.d(t,{DocLeftNav:function(){return J}});var r=n(27573),l=n(7653),a=n(62492),i=n(41270);let s=i.z.literal("cloud").or(i.z.literal("legacy")),o=i.z.lazy(()=>i.z.object({title:i.z.string(),url:i.z.union([i.z.string().startsWith("/",{message:"must start with /"}),i.z.string().url()]).optional(),collapsible:i.z.boolean().default(!0),children:i.z.array(o).optional(),isNew:i.z.boolean().default(!1),platform:s.optional()}));function u(e){return e.url?"".concat(e.url,"-").concat(e.title):e.title}function c(e,t){var n;let r=function(e,t){for(let n of e.children){let e=function e(n,r){if(t(n,r))return{entry:n,parents:r};if(n.children)for(let t of n.children){let l=e(t,[...r,n]);if(l)return l}}(n,[n]);if(e)return e}}(e,e=>e.url===t);return null!==(n=null==r?void 0:r.parents.map(u))&&void 0!==n?n:[]}i.z.object({title:i.z.string(),subtitle:i.z.string().optional(),children:i.z.array(o),collapsed:i.z.boolean().default(!1)});var d=n(6721),f=n(15597),p=n(48149),h=n(13590),m=n.n(h);let v=(0,l.forwardRef)(function(e,t){let{title:n,subtitle:l,children:a}=e;return(0,r.jsxs)("nav",{className:"hidden lg:block sticky max-h-[calc(100vh-var(--app-header-height))] w-[var(--left-toc-menu-width)] bg-background top-[var(--app-header-height)] bottom-0 overflow-y-auto scrollbar scrollbar-variant flex-shrink-0","aria-label":"Side navigation",ref:t,children:[(0,r.jsxs)("div",{className:"my-16",children:[(0,r.jsx)("h2",{className:"text-heading-03 px-16 text-text-primary",children:n}),l&&(0,r.jsx)("p",{className:"text-label-01 px-16 pt-8",children:l})]}),a]})});var x=n(55696);function b(e){let t=(0,l.useRef)();return(0,x.Z)(()=>{t.current=e}),(0,l.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.current)(...n)},[])}var g=n(89848),j=n(81695),y=n(31142),w=n(8946),k=n(64846);function E(e){return e.replace(RegExp("(?<=[0-9])rc"),"-rc")}function N(e,t){return(0,k.compare)(E(e),E(t))}var C=n(87639),_=n.n(C);function z(e){let{activeUrl:t,tocDataItem:n,className:a,onChangeVersion:i}=e,s=(0,j.useRouter)(),o=(0,l.useId)(),u=(0,l.useMemo)(()=>n.package.versions.sort((e,t)=>N(t.version,e.version)),[n]),c=(0,l.useMemo)(()=>[...u.map(e=>e.version)].sort(N).reverse().filter(e=>!(0,k.prerelease)(E(e)))[0],[u]);return(0,r.jsx)(y.Z,{id:o,value:n.package.version,hideLabel:!0,className:a,onFocus:()=>{for(let e of u)s.prefetch(e.path)},onChange:async e=>{var r;let l=e.target.value;null==i||i(l);let a=null===(r=_()(u,e=>e.version===l))||void 0===r?void 0:r.path;if(!a)return;let o=await I(t,n.package.name,a);s.push(o)},children:u.map(e=>{let t=e.version,n=t==c?"v".concat(t," (latest)"):(0,k.prerelease)(E(t))?"v".concat(t.replace("-dev","")," (dev)"):"v".concat(t);return(0,r.jsx)(w.Z,{value:t,text:n},t)})})}async function I(e,t,n){let r=e.split("/").pop();if(!r||r===t||"dev"===r||/^(\d+\.\d+)/.test(r))return n;let l="".concat(n,"/").concat(r);return(await fetch(l,{method:"HEAD"})).ok?l:n}var M=n(10607);function T(e){let t=(0,M.Z)("my-[-4px] relative top-[1px] !ms-auto me-0 self-baseline justify-self-end cursor-pointer shrink-0",e.className);return(0,r.jsx)(a.ZP,{type:"purple",className:t,children:"New"})}function Z(){return(0,r.jsx)("span",{className:"w-0 h-0 relative self-baseline",children:(0,r.jsx)("span",{className:"w-[8px] h-[8px] absolute top-[6px] left-[-16px] bg-purple-60 rounded-[50%]"})})}function S(e){let{tocDataItem:t,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:i,onToggleSection:s,onClickMenuItem:o}=e,{containerRef:u}=(0,g.F)({elementId:"TocTreeElement__active"});return(0,r.jsxs)(v,{title:t.toc.title,subtitle:t.toc.subtitle,ref:u,children:["package"===t.type&&(0,r.jsx)(z,{className:"px-16 mb-24",activeUrl:n,tocDataItem:t}),(0,r.jsx)(L,{toc:t.toc,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:i,onToggleSection:s,onClickMenuItem:o})]})}function L(e){let{toc:t,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:i,onToggleSection:s,onClickMenuItem:o}=e,c=b((e,t)=>{null==s||s(e,t),t?a([...l,e]):a(m()(l,e))});function d(e){null==i||i(e),e.level>1&&(null==o||o(e.title))}let h=t.children.length-1;return(0,r.jsx)(f.LD,{children:t.children.map((e,t)=>{let a=u(e),i=!e.collapsible&&t!=h;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R,{tocEntry:e,activeUrl:n,expandedIds:l,onClickEntry:d,onChangeExpanded:c,level:1},a),i&&(0,r.jsx)(p.GDX,{className:"border-t border-border-subtle-00"})]})})})}function R(e){var t;let{tocEntry:n,activeUrl:l,level:a,parentCollapsible:i=!0,expandedIds:s,onChangeExpanded:o,onClickEntry:u}=e;return(null===(t=n.children)||void 0===t?void 0:t.length)?(0,r.jsx)(q,{tocEntry:n,activeUrl:l,level:a,parentCollapsible:i,expandedIds:s,onChangeExpanded:o,onClickEntry:u}):(0,r.jsx)(P,{tocEntry:n,activeUrl:l,level:a,parentCollapsible:i,onClickEntry:u})}function q(e){var t;let{tocEntry:n,activeUrl:a,level:i,parentCollapsible:s=!0,expandedIds:o,onChangeExpanded:c}=e,d=u(n),p=b(t=>{var n;null===(n=e.onClickEntry)||void 0===n||n.call(e,t)}),h=(0,l.useMemo)(()=>({paddingLeft:W(i),fontWeight:U(i,s)}),[i,s]),m=(0,l.useMemo)(()=>({paddingLeft:W(i)}),[i]),v=(0,l.useMemo)(()=>o.includes(d),[o,d]),x={active:function e(t,n){return Array.isArray(t)?t.some(t=>e(t,n)):t.children?e(t.children,n):t.url===n}(n,a)&&!v,expanded:v,buttonStyle:h,onChangeExpanded:b(e=>c(d,e)),titleElement:n.isNew&&(0,r.jsxs)("span",{className:"w-[90%] flex",children:[i>1&&(0,r.jsx)(Z,{}),(0,r.jsx)("span",{className:"min-w-0 grow break-words",children:n.title}),1===i&&(0,r.jsx)(T,{})]})},g=n.collapsible?f.Fx:f.W6,j=i+(n.collapsible?1:0);return(0,r.jsx)(g,{className:"[&>.cds--side-nav\\\\_\\\\_submenu]:![block-size:auto] [&>.cds--side-nav\\\\_\\\\_submenu]:[min-block-size:2rem] [&>.cds--side-nav\\\\_\\\\_submenu]:flex [&>.cds--side-nav\\\\_\\\\_submenu]:gap-4 [&>.cds--side-nav\\\\_\\\\_submenu]:py-[6px] [&>.cds--side-nav\\\\_\\\\_submenu]:items-start [&>.cds--side-nav\\\\_\\\\_submenu>span]:break-words [&>.cds--side-nav\\\\_\\\\_submenu>span]:!whitespace-normal [&>.cds--side-nav\\\\_\\\\_submenu>.cds--side-nav\\\\_\\\\_icon]:items-baseline",title:n.title,...n.collapsible?x:{titleStyle:m},children:null===(t=n.children)||void 0===t?void 0:t.map(e=>{let t=u(e);return(0,r.jsx)(R,{tocEntry:e,activeUrl:a,level:j,parentCollapsible:n.collapsible,expandedIds:o,onChangeExpanded:c,onClickEntry:p},t)})})}let P=(0,l.memo)(function(e){let{tocEntry:t,activeUrl:n,level:a,parentCollapsible:i=!0}=e,s=t.url===n,o=b(()=>{var n;null===(n=e.onClickEntry)||void 0===n||n.call(e,{...t,level:a})}),u=(0,l.useMemo)(()=>function(e){return(0,r.jsx)(A,{id:s?"TocTreeElement__active":void 0,className:(0,M.Z)(e.className,"![block-size:auto] !py-[6px] [&>span]:break-words [&>span]:!whitespace-normal"),url:t.url,level:a,parentCollapsible:i,onClick:o,isNew:t.isNew,children:e.children})},[s,a,i,o,t.url,t.isNew]);return a>1?(0,r.jsx)(p.xRb,{isActive:s,as:u,children:t.title}):(0,r.jsx)(p.yTF,{isActive:s,as:u,children:t.title})});function W(e){return e<=16?16*e:80+8*(e-5)}function U(e,t){return e>1||!t?"normal":void 0}function A(e){let{id:t,url:n,level:l,parentCollapsible:a=!0,children:i,onClick:s,className:o,isNew:u}=e,c=u&&l>1?(0,r.jsx)(Z,{}):null,f=u&&1===l?(0,r.jsx)(T,{className:"mr-[20px]"}):null,p={paddingLeft:W(l),fontWeight:U(l,a)};return n?(0,r.jsxs)(d.OL,{id:t,href:n,className:o,iconClassName:"ml-8 text-text-placeholder shrink-0",onClick:s,style:p,children:[c,i,f]}):(0,r.jsx)("div",{id:t,style:p,className:o,children:i})}function D(){let e=(0,j.usePathname)();return""===e&&(e="/"),e}var F=n(38278),O=n.n(F),G=n(89846),H=n.n(G),B=n(50629),V=n(97204),K=n(88166);async function Q(e){let t=await fetch("".concat((0,K.sb)(),"/api/toc").concat(e));if(t.ok)return t.json();throw Error("Error loading toc")}var X=n(41603);function J(e){let{tocPaths:t,onToggleSection:n,onClickMenuItem:l}=e,a=function(e,t){let n=new Set(e),r=t.split("/");for(;r.length>0;){let e=r.join("/");if(n.has(e))return e;r.pop()}return n.has("/")?"/":void 0}(t,D()),{status:i,data:s}=(0,V.a)({enabled:!!a,queryKey:["toc",a],queryFn:async e=>{let{queryKey:t}=e;return Q(t[1])}});return a?"loading"===i?(0,r.jsx)(v,{title:"",children:(0,r.jsxs)("div",{className:"px-16",children:[(0,r.jsx)(X.Z,{heading:!0,className:"my-24"}),(0,r.jsx)(X.Z,{}),(0,r.jsx)(X.Z,{})]})}):"error"===i?(0,r.jsx)(v,{title:"",children:(0,r.jsx)(B.Z,{status:"error",description:"There was an unexpected error",className:"px-16"})}):(0,r.jsx)(Y,{tocDataItem:s,onToggleSection:n,onClickMenuItem:l},a):null}function Y(e){let{tocDataItem:t,onToggleSection:n,onClickMenuItem:a}=e,i=D(),{expandedIds:s,setExpandedIds:o}=function(e,t){let[n,r]=(0,l.useState)(()=>{let n=c(e,t);return e.collapsed?n:H()([...n,...(function e(t,n){return t.flatMap(t=>{let r=[];return n(t)&&r.push(t),t.children&&r.push(...e(t.children,n)),r})})(e.children,e=>!O()(e.children)).map(u)])}),a=b(t=>{let n=c(e,t);n&&r(e=>H()([...e,...n]))});return(0,l.useEffect)(()=>{a(t)},[t,a]),{expandedIds:n,setExpandedIds:r}}(t.toc,i);return(0,r.jsx)(S,{tocDataItem:t,activeUrl:i,expandedIds:s,onChangeExpandedIds:o,onToggleSection:n,onClickMenuItem:a})}},6721:function(e,t,n){"use strict";n.d(t,{OL:function(){return u},rU:function(){return o}});var r=n(27573),l=n(7653),a=n(88146),i=n(10607),s=n(88166);function o(e){let{innerRef:t,href:n,className:l,iconClassName:o,iconWidth:u=16,...d}=e,f=n?new s.RH(n):void 0,p=(0,i.Z)(c,"inline",l);return(null==f?void 0:f.type)==="absolute"?(0,r.jsx)(a.default,{...d,href:n,className:p,ref:t}):(null==f?void 0:f.type)==="external"||(null==f?void 0:f.type)==="external-quantum"?(0,r.jsxs)("a",{...d,href:n,className:p,ref:t,...f.linkProps,children:[e.children,f.maybeGetIcon({className:(0,i.Z)("inline ml-2",o),width:u})]}):(0,r.jsx)("a",{...d,href:n,className:p})}let u=(0,l.forwardRef)(function(e,t){let{className:n,iconClassName:l,...a}=e,s={innerRef:t,className:(0,i.Z)(n,"hover:no-underline"),iconClassName:(0,i.Z)(l,"mt-[1%]"),...a};return(0,r.jsx)(o,{...s})}),c="text-link-primary no-underline hover:underline"},77406:function(e,t,n){"use strict";n.d(t,{MdTabItem:function(){return f},MdTabs:function(){return c},MdTabsGroupContextProvider:function(){return h},OperatingSystemMdTabs:function(){return d}});var r=n(27573),l=n(4093),a=n.n(l),i=n(7653),s=n(2022);let o=s.td,u=s.nP;function c(e){var t;let{defaultValue:n,group:l}=e,c=(t=e.children,i.Children.toArray(t).filter(e=>null!=e&&"\n"!==e).map(e=>{if((0,i.isValidElement)(e)&&a()(e.props,"value"))return e;throw Error("Bad <Tabs> child")})),d=c.map(e=>e.props.value),[f,p]=m(l),h=(0,i.useRef)(null),[v,x]=(0,i.useState)(()=>void 0!==n&&d.includes(n)?n:d[0]),b=(0,i.useMemo)(()=>l&&f&&d.includes(f)?f:v,[l,f,v,d]),g=function(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{let e=()=>{t(window.location.hash)};return e(),window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),e}();return(0,i.useEffect)(()=>{if(h.current&&g){let t=h.current.querySelector('[id="'.concat(g.slice(1),'"]'));if(t){var e;let n=null===(e=t.closest("[data-tab-value]"))||void 0===e?void 0:e.getAttribute("data-tab-value");n&&(x(n),p(n))}}},[g,p]),(0,i.useEffect)(()=>{l&&!f&&p(v)},[l,f,v,p]),(0,r.jsx)("div",{ref:h,children:(0,r.jsxs)(s.mQ,{selectedIndex:d.indexOf(b),onChange:e=>{let{selectedIndex:t}=e,n=d[t];x(n),p(n)},children:[(0,r.jsx)(o,{"aria-label":"List of tabs",children:c.map(e=>(0,r.jsx)(s.OK,{children:e.props.label},e.props.value))}),(0,r.jsx)(u,{children:c})]})})}function d(e){let t="operating-system",[n,l]=(0,i.useState)(),[a,s]=m(t);return(0,i.useEffect)(()=>{let e=function(){if(navigator.platform){if(navigator.platform.startsWith("Mac"))return"mac";if(navigator.platform.startsWith("Win"))return"win";if(navigator.platform.startsWith("Linux"))return"linux"}}();e&&(l(e),s(e))},[s]),(0,r.jsx)(c,{...e,group:t,defaultValue:n},n)}function f(e){let{children:t}=e;return(0,r.jsx)(s.x4,{"data-tab-value":e.value,children:t})}let p=(0,i.createContext)(void 0);function h(e){let[t,n]=(0,i.useState)({}),l=(0,i.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),a=(0,i.useMemo)(()=>({valuesByGroup:t,setValue:l}),[l,t]);return(0,r.jsx)(p.Provider,{value:a,children:e.children})}function m(e){let t=(0,i.useContext)(p);if(void 0===t)throw Error("Missing MdTabsGroupContextProvider");let n=t.setValue,r=(0,i.useCallback)(t=>{e&&n(e,t)},[e,n]);return void 0===e?[void 0,r]:[t.valuesByGroup[e],r]}},89848:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(7653);function l(e){let{elementId:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=document.getElementById(t);if(e&&n.current){let t=n.current.offsetTop,r=t+n.current.offsetHeight,l=e.offsetTop,a=l+e.offsetHeight;(l<t||a>r)&&(n.current.scrollTop=l-t)}},[t]),{containerRef:n}}},88166:function(e,t,n){"use strict";n.d(t,{RH:function(){return u},sb:function(){return d}});var r=n(27573),l=n(41018);n(73509);var a=n(96817),i=n.n(a),s=n(35600),o=n.n(s);class u{maybeGetIcon(e){var t,n,l,a,s;return"external"===this.type||"external-quantum"===this.type?(null!==(l=e[n="aria-label"])&&void 0!==l||(e[n]="(opens in a new tab)"),(0,r.jsx)(i(),{...e})):"pdf"===(null===(t=this.value.split(/[#?]/)[0].split(".").pop())||void 0===t?void 0:t.trim())?(null!==(s=e[a="aria-label"])&&void 0!==s||(e[a]="(PDF document)"),(0,r.jsx)(o(),{...e})):null}constructor(e){this.value=e,this.type=c(e),this.linkProps=function(e){if(!e)return{};let t=c(e);return"external"===t?{target:"_blank",rel:"noopener noreferrer nofollow"}:"external-quantum"===t?{target:"_blank"}:{}}(e)}}function c(e){return(0,l.Z)(e)?!function(e){let{hostname:t}=new URL(e);return"quantum-computing.ibm.com"===t||t.endsWith(".quantum-computing.ibm.com")||"quantum.ibm.com"===t||t.endsWith(".quantum.ibm.com")}(e)?"external":"external-quantum":e.startsWith("/")?"absolute":"relative"}function d(){return"/documentation/pr-2592"}}},function(e){e.O(0,[705,340,436,989,646,342,293,528,744],function(){return e(e.s=3632)}),_N_E=e.O()}]);