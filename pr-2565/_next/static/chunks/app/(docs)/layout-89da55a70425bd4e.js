(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{68158:function(e,t,n){Promise.resolve().then(n.bind(n,65852)),Promise.resolve().then(n.bind(n,54795)),Promise.resolve().then(n.bind(n,77406))},65852:function(e,t,n){"use strict";n.d(t,{DocLeftNav:function(){return X}});var r=n(27573),l=n(7653),a=n(62492),s=n(41270);let i=s.z.lazy(()=>s.z.object({title:s.z.string(),url:s.z.union([s.z.string().startsWith("/",{message:"must start with /"}),s.z.string().url()]).optional(),collapsible:s.z.boolean().default(!0),children:s.z.array(i).optional(),isNew:s.z.boolean().default(!1)}));function o(e){return e.url?"".concat(e.url,"-").concat(e.title):e.title}function c(e,t){var n;let r=function(e,t){for(let n of e.children){let e=function e(n,r){if(t(n,r))return{entry:n,parents:r};if(n.children)for(let t of n.children){let l=e(t,[...r,n]);if(l)return l}}(n,[n]);if(e)return e}}(e,e=>e.url===t);return null!==(n=null==r?void 0:r.parents.map(o))&&void 0!==n?n:[]}s.z.object({title:s.z.string(),subtitle:s.z.string().optional(),children:s.z.array(i),collapsed:s.z.boolean().default(!1)});var u=n(6721),d=n(15597),f=n(48149),m=n(13590),p=n.n(m);let h=(0,l.forwardRef)(function(e,t){let{title:n,subtitle:l,children:a}=e;return(0,r.jsxs)("nav",{className:"hidden lg:block sticky max-h-[calc(100vh-var(--app-header-height))] w-[var(--left-toc-menu-width)] bg-background top-[var(--app-header-height)] bottom-0 overflow-y-auto scrollbar scrollbar-variant flex-shrink-0","aria-label":"Side navigation",ref:t,children:[(0,r.jsxs)("div",{className:"my-16",children:[(0,r.jsx)("h2",{className:"text-heading-03 px-16 text-text-primary",children:n}),l&&(0,r.jsx)("p",{className:"text-label-01 px-16 pt-8",children:l})]}),a]})});var x=n(55696);function v(e){let t=(0,l.useRef)();return(0,x.Z)(()=>{t.current=e}),(0,l.useCallback)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,t.current)(...n)},[])}var b=n(89848),g=n(81695),j=n(22548),y=n(8946),k=n(64846);function N(e){return e.replace(RegExp("(?<=[0-9])rc"),"-rc")}function w(e,t){return(0,k.compare)(N(e),N(t))}var C=n(87639),E=n.n(C);function _(e){let{activeUrl:t,tocDataItem:n,className:a,onChangeVersion:s}=e,i=(0,g.useRouter)(),o=(0,l.useId)(),c=(0,l.useMemo)(()=>n.package.versions.sort((e,t)=>w(t.version,e.version)),[n]),u=(0,l.useMemo)(()=>[...c.map(e=>e.version)].sort(w).reverse().filter(e=>!(0,k.prerelease)(N(e)))[0],[c]);return(0,r.jsx)(j.Z,{id:o,value:n.package.version,hideLabel:!0,className:a,onFocus:()=>{for(let e of c)i.prefetch(e.path)},onChange:async e=>{var r;let l=e.target.value;null==s||s(l);let a=null===(r=E()(c,e=>e.version===l))||void 0===r?void 0:r.path;if(!a)return;let o=await I(t,n.package.name,a);i.push(o)},children:c.map(e=>{let t=e.version,n=t==u?"v".concat(t," (latest)"):(0,k.prerelease)(N(t))?"v".concat(t.replace("-dev","")," (dev)"):"v".concat(t);return(0,r.jsx)(y.Z,{value:t,text:n},t)})})}async function I(e,t,n){let r=e.split("/").pop();if(!r||r===t||"dev"===r||/^(\d+\.\d+)/.test(r))return n;let l="".concat(n,"/").concat(r);return(await fetch(l,{method:"HEAD"})).ok?l:n}var M=n(10607);function Z(e){let t=(0,M.Z)("my-[-4px] relative top-[1px] !ms-auto me-0 self-baseline justify-self-end cursor-pointer shrink-0",e.className);return(0,r.jsx)(a.ZP,{type:"purple",className:t,children:"New"})}function z(){return(0,r.jsx)("span",{className:"w-0 h-0 relative self-baseline",children:(0,r.jsx)("span",{className:"w-[8px] h-[8px] absolute top-[6px] left-[-16px] bg-purple-60 rounded-[50%]"})})}function T(e){let{tocDataItem:t,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:s,onToggleSection:i,onClickMenuItem:o}=e,{containerRef:c}=(0,b.F)({elementId:"TocTreeElement__active"});return(0,r.jsxs)(h,{title:t.toc.title,subtitle:t.toc.subtitle,ref:c,children:["package"===t.type&&(0,r.jsx)(_,{className:"px-16 mb-24",activeUrl:n,tocDataItem:t}),(0,r.jsx)(P,{toc:t.toc,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:s,onToggleSection:i,onClickMenuItem:o})]})}function P(e){let{toc:t,activeUrl:n,expandedIds:l,onChangeExpandedIds:a,onClickEntry:s,onToggleSection:i,onClickMenuItem:c}=e,u=v((e,t)=>{null==i||i(e,t),t?a([...l,e]):a(p()(l,e))});function m(e){null==s||s(e),e.level>1&&(null==c||c(e.title))}let h=t.children.length-1;return(0,r.jsx)(d.LD,{children:t.children.map((e,t)=>{let a=o(e),s=!e.collapsible&&t!=h;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{tocEntry:e,activeUrl:n,expandedIds:l,onClickEntry:m,onChangeExpanded:u,level:1},a),s&&(0,r.jsx)(f.GDX,{className:"border-t border-border-subtle-00"})]})})})}function S(e){var t;let{tocEntry:n,activeUrl:l,level:a,parentCollapsible:s=!0,expandedIds:i,onChangeExpanded:o,onClickEntry:c}=e;return(null===(t=n.children)||void 0===t?void 0:t.length)?(0,r.jsx)(L,{tocEntry:n,activeUrl:l,level:a,parentCollapsible:s,expandedIds:i,onChangeExpanded:o,onClickEntry:c}):(0,r.jsx)(W,{tocEntry:n,activeUrl:l,level:a,parentCollapsible:s,onClickEntry:c})}function L(e){var t;let{tocEntry:n,activeUrl:a,level:s,parentCollapsible:i=!0,expandedIds:c,onChangeExpanded:u}=e,f=o(n),m=v(t=>{var n;null===(n=e.onClickEntry)||void 0===n||n.call(e,t)}),p=(0,l.useMemo)(()=>({paddingLeft:R(s),fontWeight:q(s,i)}),[s,i]),h=(0,l.useMemo)(()=>({paddingLeft:R(s)}),[s]),x=(0,l.useMemo)(()=>c.includes(f),[c,f]),b={active:function e(t,n){return Array.isArray(t)?t.some(t=>e(t,n)):t.children?e(t.children,n):t.url===n}(n,a)&&!x,expanded:x,buttonStyle:p,onChangeExpanded:v(e=>u(f,e)),titleElement:n.isNew&&(0,r.jsxs)("span",{className:"w-[90%] flex",children:[s>1&&(0,r.jsx)(z,{}),(0,r.jsx)("span",{className:"min-w-0 grow break-words",children:n.title}),1===s&&(0,r.jsx)(Z,{})]})},g=n.collapsible?d.Fx:d.W6,j=s+(n.collapsible?1:0);return(0,r.jsx)(g,{className:"[&>.cds--side-nav\\\\_\\\\_submenu]:![block-size:auto] [&>.cds--side-nav\\\\_\\\\_submenu]:[min-block-size:2rem] [&>.cds--side-nav\\\\_\\\\_submenu]:flex [&>.cds--side-nav\\\\_\\\\_submenu]:gap-4 [&>.cds--side-nav\\\\_\\\\_submenu]:py-[6px] [&>.cds--side-nav\\\\_\\\\_submenu]:items-start [&>.cds--side-nav\\\\_\\\\_submenu>span]:break-words [&>.cds--side-nav\\\\_\\\\_submenu>span]:!whitespace-normal [&>.cds--side-nav\\\\_\\\\_submenu>.cds--side-nav\\\\_\\\\_icon]:items-baseline",title:n.title,...n.collapsible?b:{titleStyle:h},children:null===(t=n.children)||void 0===t?void 0:t.map(e=>{let t=o(e);return(0,r.jsx)(S,{tocEntry:e,activeUrl:a,level:j,parentCollapsible:n.collapsible,expandedIds:c,onChangeExpanded:u,onClickEntry:m},t)})})}let W=(0,l.memo)(function(e){let{tocEntry:t,activeUrl:n,level:a,parentCollapsible:s=!0}=e,i=t.url===n,o=v(()=>{var n;null===(n=e.onClickEntry)||void 0===n||n.call(e,{...t,level:a})}),c=(0,l.useMemo)(()=>function(e){return(0,r.jsx)(F,{id:i?"TocTreeElement__active":void 0,className:(0,M.Z)(e.className,"![block-size:auto] !py-[6px] [&>span]:break-words [&>span]:!whitespace-normal"),url:t.url,level:a,parentCollapsible:s,onClick:o,isNew:t.isNew,children:e.children})},[i,a,s,o,t.url,t.isNew]);return a>1?(0,r.jsx)(f.xRb,{isActive:i,as:c,children:t.title}):(0,r.jsx)(f.yTF,{isActive:i,as:c,children:t.title})});function R(e){return e<=16?16*e:80+8*(e-5)}function q(e,t){return e>1||!t?"normal":void 0}function F(e){let{id:t,url:n,level:l,parentCollapsible:a=!0,children:s,onClick:i,className:o,isNew:c}=e,d=c&&l>1?(0,r.jsx)(z,{}):null,f=c&&1===l?(0,r.jsx)(Z,{className:"mr-[20px]"}):null,m={paddingLeft:R(l),fontWeight:q(l,a)};return n?(0,r.jsxs)(u.OL,{id:t,href:n,className:o,iconClassName:"ml-8 text-text-placeholder shrink-0",onClick:i,style:m,children:[d,s,f]}):(0,r.jsx)("div",{id:t,style:m,className:o,children:s})}function U(){let e=(0,g.usePathname)();return""===e&&(e="/"),e}var A=n(38278),D=n.n(A),O=n(89846),G=n.n(O),H=n(50629),B=n(97204),V=n(88166);async function K(e){let t=await fetch("".concat((0,V.sb)(),"/api/toc").concat(e));if(t.ok)return t.json();throw Error("Error loading toc")}var Q=n(41603);function X(e){let{tocPaths:t,onToggleSection:n,onClickMenuItem:l}=e,a=function(e,t){let n=new Set(e),r=t.split("/");for(;r.length>0;){let e=r.join("/");if(n.has(e))return e;r.pop()}return n.has("/")?"/":void 0}(t,U()),{status:s,data:i}=(0,B.a)({enabled:!!a,queryKey:["toc",a],queryFn:async e=>{let{queryKey:t}=e;return K(t[1])}});return a?"loading"===s?(0,r.jsx)(h,{title:"",children:(0,r.jsxs)("div",{className:"px-16",children:[(0,r.jsx)(Q.Z,{heading:!0,className:"my-24"}),(0,r.jsx)(Q.Z,{}),(0,r.jsx)(Q.Z,{})]})}):"error"===s?(0,r.jsx)(h,{title:"",children:(0,r.jsx)(H.Z,{status:"error",description:"There was an unexpected error",className:"px-16"})}):(0,r.jsx)(J,{tocDataItem:i,onToggleSection:n,onClickMenuItem:l},a):null}function J(e){let{tocDataItem:t,onToggleSection:n,onClickMenuItem:a}=e,s=U(),{expandedIds:i,setExpandedIds:u}=function(e,t){let[n,r]=(0,l.useState)(()=>{let n=c(e,t);return e.collapsed?n:G()([...n,...(function e(t,n){return t.flatMap(t=>{let r=[];return n(t)&&r.push(t),t.children&&r.push(...e(t.children,n)),r})})(e.children,e=>!D()(e.children)).map(o)])}),a=v(t=>{let n=c(e,t);n&&r(e=>G()([...e,...n]))});return(0,l.useEffect)(()=>{a(t)},[t,a]),{expandedIds:n,setExpandedIds:r}}(t.toc,s);return(0,r.jsx)(T,{tocDataItem:t,activeUrl:s,expandedIds:i,onChangeExpandedIds:u,onToggleSection:n,onClickMenuItem:a})}},54795:function(e,t,n){"use strict";n.d(t,{Image:function(){return c},ImageLink:function(){return d},ImageModal:function(){return h},ImageModalProvider:function(){return p},InlineImage:function(){return u}});var r=n(27573),l=n(50294),a=n(10607),s=n(7653),i=n(5091),o=n(34481);function c(e){let{className:t,title:n,modal:l,...i}=e,{setModalImageProps:o}=(0,s.useContext)(m),c=!1!==l?()=>{o({title:n,...i})}:()=>null;return n?(0,r.jsxs)("figure",{className:"flex flex-col gap-4",children:[(0,r.jsx)(f,{className:(0,a.Z)(t,"border-none max-w-full h-auto cursor-pointer"),title:n,display:"block",...i,onClick:c}),(0,r.jsx)("figcaption",{className:"text-left text-label-01 text-text-helper",children:n})]}):(0,r.jsx)(f,{className:(0,a.Z)(t,"border-none max-w-full h-auto cursor-pointer"),display:"block",onClick:c,...i})}function u(e){let{className:t,...n}=e;return(0,r.jsx)(f,{display:"inline",className:(0,a.Z)(t,"border-none max-w-full h-auto"),...n})}function d(e){let{href:t,alt:n,...l}=e;return(0,r.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("span",{className:"sr-only",children:"(opens in a new tab)"}),(0,r.jsx)(c,{className:"w-full",modal:!1,alt:n,...l})]})}function f(e){let{alt:t="",src:n,srcDark:s,display:i,className:o,...c}=e;if(s){let e=(0,a.Z)({block:"block"===i,inline:"inline"===i},"dark:hidden",o),u=(0,a.Z)("hidden",{"dark:block":"block"===i,"dark:inline":"inline"===i},o);return n.startsWith("/")?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{alt:t,src:n,className:e,...c}),(0,r.jsx)(l.default,{alt:t,src:s,className:u,...c})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{alt:t,src:n,className:e,...c}),(0,r.jsx)("img",{alt:t,src:s,className:u,...c})]})}let u=(0,a.Z)({block:"block"===i,inline:"inline"===i},o);return n.startsWith("/")?(0,r.jsx)(l.default,{alt:t,src:n,className:u,...c}):(0,r.jsx)("img",{alt:t,src:n,className:u,...c})}let m=(0,s.createContext)({modalImageProps:null,setModalImageProps:()=>{}});function p(e){let{children:t}=e,[n,l]=(0,s.useState)(null),a=(0,s.useMemo)(()=>({modalImageProps:n,setModalImageProps:l}),[n]);return(0,r.jsx)(m.Provider,{value:a,children:t})}function h(){let{modalImageProps:e,setModalImageProps:t}=(0,s.useContext)(m),[n,l]=(0,s.useState)(e);e&&n!==e&&l(e);let a=null!=e?e:n;return(0,r.jsxs)(i.Z,{open:!!e,onClose:()=>t(null),containerClassName:"w-auto max-w-[98%]",children:[(0,r.jsx)(o.x,{className:"h-48"}),(0,r.jsx)(i.f,{className:"flex items-center justify-center",children:a&&(0,r.jsx)(f,{...a,display:"block",className:"max-h-full"})})]})}},6721:function(e,t,n){"use strict";n.d(t,{OL:function(){return c},rU:function(){return o}});var r=n(27573),l=n(7653),a=n(88146),s=n(10607),i=n(88166);function o(e){let{innerRef:t,href:n,className:l,iconClassName:o,iconWidth:c=16,...d}=e,f=n?new i.RH(n):void 0,m=(0,s.Z)(u,"inline",l);return(null==f?void 0:f.type)==="absolute"?(0,r.jsx)(a.default,{...d,href:n,className:m,ref:t}):(null==f?void 0:f.type)==="external"||(null==f?void 0:f.type)==="external-quantum"?(0,r.jsxs)("a",{...d,href:n,className:m,ref:t,...f.linkProps,children:[e.children,f.maybeGetIcon({className:(0,s.Z)("inline ml-2",o),width:c})]}):(0,r.jsx)("a",{...d,href:n,className:m})}let c=(0,l.forwardRef)(function(e,t){let{className:n,iconClassName:l,...a}=e,i={innerRef:t,className:(0,s.Z)(n,"hover:no-underline"),iconClassName:(0,s.Z)(l,"mt-[1%]"),...a};return(0,r.jsx)(o,{...i})}),u="text-link-primary no-underline hover:underline"},77406:function(e,t,n){"use strict";n.d(t,{MdTabItem:function(){return f},MdTabs:function(){return u},MdTabsGroupContextProvider:function(){return p},OperatingSystemMdTabs:function(){return d}});var r=n(27573),l=n(4093),a=n.n(l),s=n(7653),i=n(24294);let o=i.td,c=i.nP;function u(e){var t;let{defaultValue:n,group:l}=e,u=(t=e.children,s.Children.toArray(t).filter(e=>null!=e&&"\n"!==e).map(e=>{if((0,s.isValidElement)(e)&&a()(e.props,"value"))return e;throw Error("Bad <Tabs> child")})),d=u.map(e=>e.props.value),[f,m]=h(l),p=(0,s.useRef)(null),[x,v]=(0,s.useState)(()=>void 0!==n&&d.includes(n)?n:d[0]),b=(0,s.useMemo)(()=>l&&f&&d.includes(f)?f:x,[l,f,x,d]),g=function(){let[e,t]=(0,s.useState)();return(0,s.useEffect)(()=>{let e=()=>{t(window.location.hash)};return e(),window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),e}();return(0,s.useEffect)(()=>{if(p.current&&g){let t=p.current.querySelector('[id="'.concat(g.slice(1),'"]'));if(t){var e;let n=null===(e=t.closest("[data-tab-value]"))||void 0===e?void 0:e.getAttribute("data-tab-value");n&&(v(n),m(n))}}},[g,m]),(0,s.useEffect)(()=>{l&&!f&&m(x)},[l,f,x,m]),(0,r.jsx)("div",{ref:p,children:(0,r.jsxs)(i.mQ,{selectedIndex:d.indexOf(b),onChange:e=>{let{selectedIndex:t}=e,n=d[t];v(n),m(n)},children:[(0,r.jsx)(o,{"aria-label":"List of tabs",children:u.map(e=>(0,r.jsx)(i.OK,{children:e.props.label},e.props.value))}),(0,r.jsx)(c,{children:u})]})})}function d(e){let t="operating-system",[n,l]=(0,s.useState)(),[a,i]=h(t);return(0,s.useEffect)(()=>{let e=function(){if(navigator.platform){if(navigator.platform.startsWith("Mac"))return"mac";if(navigator.platform.startsWith("Win"))return"win";if(navigator.platform.startsWith("Linux"))return"linux"}}();e&&(l(e),i(e))},[i]),(0,r.jsx)(u,{...e,group:t,defaultValue:n},n)}function f(e){let{children:t}=e;return(0,r.jsx)(i.x4,{"data-tab-value":e.value,children:t})}let m=(0,s.createContext)(void 0);function p(e){let[t,n]=(0,s.useState)({}),l=(0,s.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),a=(0,s.useMemo)(()=>({valuesByGroup:t,setValue:l}),[l,t]);return(0,r.jsx)(m.Provider,{value:a,children:e.children})}function h(e){let t=(0,s.useContext)(m);if(void 0===t)throw Error("Missing MdTabsGroupContextProvider");let n=t.setValue,r=(0,s.useCallback)(t=>{e&&n(e,t)},[e,n]);return void 0===e?[void 0,r]:[t.valuesByGroup[e],r]}},89848:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(7653);function l(e){let{elementId:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=document.getElementById(t);if(e&&n.current){let t=n.current.offsetTop,r=t+n.current.offsetHeight,l=e.offsetTop,a=l+e.offsetHeight;(l<t||a>r)&&(n.current.scrollTop=l-t)}},[t]),{containerRef:n}}},88166:function(e,t,n){"use strict";n.d(t,{RH:function(){return c},sb:function(){return d}});var r=n(27573),l=n(41018);n(73509);var a=n(96817),s=n.n(a),i=n(35600),o=n.n(i);class c{maybeGetIcon(e){var t,n,l,a,i;return"external"===this.type||"external-quantum"===this.type?(null!==(l=e[n="aria-label"])&&void 0!==l||(e[n]="(opens in a new tab)"),(0,r.jsx)(s(),{...e})):"pdf"===(null===(t=this.value.split(/[#?]/)[0].split(".").pop())||void 0===t?void 0:t.trim())?(null!==(i=e[a="aria-label"])&&void 0!==i||(e[a]="(PDF document)"),(0,r.jsx)(o(),{...e})):null}constructor(e){this.value=e,this.type=u(e),this.linkProps=function(e){if(!e)return{};let t=u(e);return"external"===t?{target:"_blank",rel:"noopener noreferrer nofollow"}:"external-quantum"===t?{target:"_blank"}:{}}(e)}}function u(e){return(0,l.Z)(e)?!function(e){let{hostname:t}=new URL(e);return"quantum-computing.ibm.com"===t||t.endsWith(".quantum-computing.ibm.com")||"quantum.ibm.com"===t||t.endsWith(".quantum.ibm.com")}(e)?"external":"external-quantum":e.startsWith("/")?"absolute":"relative"}function d(){return"/documentation/pr-2565"}}},function(e){e.O(0,[705,340,294,436,478,646,599,293,528,744],function(){return e(e.s=68158)}),_N_E=e.O()}]);