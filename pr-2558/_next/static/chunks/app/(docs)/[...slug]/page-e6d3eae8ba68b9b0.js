(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{2401:function(e,t,n){Promise.resolve().then(n.t.bind(n,16340,23)),Promise.resolve().then(n.bind(n,87860)),Promise.resolve().then(n.bind(n,54795)),Promise.resolve().then(n.bind(n,77406)),Promise.resolve().then(n.bind(n,36486)),Promise.resolve().then(n.bind(n,64730))},94084:function(e,t,n){"use strict";var r,l,a=n(7653),o=n(15761);n(69940),n(62147),n(63074);var i=a&&"object"==typeof a&&"default"in a?a:{default:a};let s=i.default.forwardRef(function(e,t){let{children:n,size:a=16,...s}=e;return i.default.createElement(o,{width:a,height:a,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...s},r||(r=i.default.createElement("path",{d:"M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"})),l||(l=i.default.createElement("path",{d:"M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"})),n)});e.exports=s},36441:function(e){var t=Math.ceil,n=Math.max;e.exports=function(e,r,l,a){for(var o=-1,i=n(t((r-e)/(l||1)),0),s=Array(i);i--;)s[a?i:++o]=e,e+=l;return s}},84521:function(e,t,n){var r=n(36441),l=n(64091),a=n(77615);e.exports=function(e){return function(t,n,o){return o&&"number"!=typeof o&&l(t,n,o)&&(n=o=void 0),t=a(t),void 0===n?(n=t,t=0):n=a(n),o=void 0===o?t<n?1:-1:a(o),r(t,n,o,e)}}},64091:function(e,t,n){var r=n(30207),l=n(15206),a=n(24923),o=n(88873);e.exports=function(e,t,n){if(!o(n))return!1;var i=typeof t;return("number"==i?!!(l(n)&&a(t,n.length)):"string"==i&&t in n)&&r(n[t],e)}},60297:function(e,t,n){var r=n(84521)();e.exports=r},87860:function(e,t,n){"use strict";n.d(t,{DefinitionTooltip:function(){return a}});var r=n(27573),l=n(75078);function a(e){return(0,r.jsx)(l.I,{openOnHover:!0,...e})}},54795:function(e,t,n){"use strict";n.d(t,{Image:function(){return u},ImageLink:function(){return d},ImageModal:function(){return h},ImageModalProvider:function(){return m},InlineImage:function(){return c}});var r=n(27573),l=n(50294),a=n(10607),o=n(7653),i=n(5091),s=n(34481);function u(e){let{className:t,title:n,modal:l,...i}=e,{setModalImageProps:s}=(0,o.useContext)(p),u=!1!==l?()=>{s({title:n,...i})}:()=>null;return n?(0,r.jsxs)("figure",{className:"flex flex-col gap-4",children:[(0,r.jsx)(f,{className:(0,a.Z)(t,"border-none max-w-full h-auto cursor-pointer"),title:n,display:"block",...i,onClick:u}),(0,r.jsx)("figcaption",{className:"text-left text-label-01 text-text-helper",children:n})]}):(0,r.jsx)(f,{className:(0,a.Z)(t,"border-none max-w-full h-auto cursor-pointer"),display:"block",onClick:u,...i})}function c(e){let{className:t,...n}=e;return(0,r.jsx)(f,{display:"inline",className:(0,a.Z)(t,"border-none max-w-full h-auto"),...n})}function d(e){let{href:t,alt:n,...l}=e;return(0,r.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("span",{className:"sr-only",children:"(opens in a new tab)"}),(0,r.jsx)(u,{className:"w-full",modal:!1,alt:n,...l})]})}function f(e){let{alt:t="",src:n,srcDark:o,display:i,className:s,...u}=e;if(o){let e=(0,a.Z)({block:"block"===i,inline:"inline"===i},"dark:hidden",s),c=(0,a.Z)("hidden",{"dark:block":"block"===i,"dark:inline":"inline"===i},s);return n.startsWith("/")?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{alt:t,src:n,className:e,...u}),(0,r.jsx)(l.default,{alt:t,src:o,className:c,...u})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{alt:t,src:n,className:e,...u}),(0,r.jsx)("img",{alt:t,src:o,className:c,...u})]})}let c=(0,a.Z)({block:"block"===i,inline:"inline"===i},s);return n.startsWith("/")?(0,r.jsx)(l.default,{alt:t,src:n,className:c,...u}):(0,r.jsx)("img",{alt:t,src:n,className:c,...u})}let p=(0,o.createContext)({modalImageProps:null,setModalImageProps:()=>{}});function m(e){let{children:t}=e,[n,l]=(0,o.useState)(null),a=(0,o.useMemo)(()=>({modalImageProps:n,setModalImageProps:l}),[n]);return(0,r.jsx)(p.Provider,{value:a,children:t})}function h(){let{modalImageProps:e,setModalImageProps:t}=(0,o.useContext)(p),[n,l]=(0,o.useState)(e);e&&n!==e&&l(e);let a=null!=e?e:n;return(0,r.jsxs)(i.Z,{open:!!e,onClose:()=>t(null),containerClassName:"w-auto max-w-[98%]",children:[(0,r.jsx)(s.x,{className:"h-48"}),(0,r.jsx)(i.f,{className:"flex items-center justify-center",children:a&&(0,r.jsx)(f,{...a,display:"block",className:"max-h-full"})})]})}},6721:function(e,t,n){"use strict";n.d(t,{OL:function(){return u},rU:function(){return s}});var r=n(27573),l=n(7653),a=n(88146),o=n(10607),i=n(88166);function s(e){let{innerRef:t,href:n,className:l,iconClassName:s,iconWidth:u=16,...d}=e,f=n?new i.RH(n):void 0,p=(0,o.Z)(c,"inline",l);return(null==f?void 0:f.type)==="absolute"?(0,r.jsx)(a.default,{...d,href:n,className:p,ref:t}):(null==f?void 0:f.type)==="external"||(null==f?void 0:f.type)==="external-quantum"?(0,r.jsxs)("a",{...d,href:n,className:p,ref:t,...f.linkProps,children:[e.children,f.maybeGetIcon({className:(0,o.Z)("inline ml-2",s),width:u})]}):(0,r.jsx)("a",{...d,href:n,className:p})}let u=(0,l.forwardRef)(function(e,t){let{className:n,iconClassName:l,...a}=e,i={innerRef:t,className:(0,o.Z)(n,"hover:no-underline"),iconClassName:(0,o.Z)(l,"mt-[1%]"),...a};return(0,r.jsx)(s,{...i})}),c="text-link-primary no-underline hover:underline"},77406:function(e,t,n){"use strict";n.d(t,{MdTabItem:function(){return f},MdTabs:function(){return c},MdTabsGroupContextProvider:function(){return m},OperatingSystemMdTabs:function(){return d}});var r=n(27573),l=n(4093),a=n.n(l),o=n(7653),i=n(24294);let s=i.td,u=i.nP;function c(e){var t;let{defaultValue:n,group:l}=e,c=(t=e.children,o.Children.toArray(t).filter(e=>null!=e&&"\n"!==e).map(e=>{if((0,o.isValidElement)(e)&&a()(e.props,"value"))return e;throw Error("Bad <Tabs> child")})),d=c.map(e=>e.props.value),[f,p]=h(l),m=(0,o.useRef)(null),[x,v]=(0,o.useState)(()=>void 0!==n&&d.includes(n)?n:d[0]),b=(0,o.useMemo)(()=>l&&f&&d.includes(f)?f:x,[l,f,x,d]),g=function(){let[e,t]=(0,o.useState)();return(0,o.useEffect)(()=>{let e=()=>{t(window.location.hash)};return e(),window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),e}();return(0,o.useEffect)(()=>{if(m.current&&g){let t=m.current.querySelector('[id="'.concat(g.slice(1),'"]'));if(t){var e;let n=null===(e=t.closest("[data-tab-value]"))||void 0===e?void 0:e.getAttribute("data-tab-value");n&&(v(n),p(n))}}},[g,p]),(0,o.useEffect)(()=>{l&&!f&&p(x)},[l,f,x,p]),(0,r.jsx)("div",{ref:m,children:(0,r.jsxs)(i.mQ,{selectedIndex:d.indexOf(b),onChange:e=>{let{selectedIndex:t}=e,n=d[t];v(n),p(n)},children:[(0,r.jsx)(s,{"aria-label":"List of tabs",children:c.map(e=>(0,r.jsx)(i.OK,{children:e.props.label},e.props.value))}),(0,r.jsx)(u,{children:c})]})})}function d(e){let t="operating-system",[n,l]=(0,o.useState)(),[a,i]=h(t);return(0,o.useEffect)(()=>{let e=function(){if(navigator.platform){if(navigator.platform.startsWith("Mac"))return"mac";if(navigator.platform.startsWith("Win"))return"win";if(navigator.platform.startsWith("Linux"))return"linux"}}();e&&(l(e),i(e))},[i]),(0,r.jsx)(c,{...e,group:t,defaultValue:n},n)}function f(e){let{children:t}=e;return(0,r.jsx)(i.x4,{"data-tab-value":e.value,children:t})}let p=(0,o.createContext)(void 0);function m(e){let[t,n]=(0,o.useState)({}),l=(0,o.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),a=(0,o.useMemo)(()=>({valuesByGroup:t,setValue:l}),[l,t]);return(0,r.jsx)(p.Provider,{value:a,children:e.children})}function h(e){let t=(0,o.useContext)(p);if(void 0===t)throw Error("Missing MdTabsGroupContextProvider");let n=t.setValue,r=(0,o.useCallback)(t=>{e&&n(e,t)},[e,n]);return void 0===e?[void 0,r]:[t.valuesByGroup[e],r]}},36486:function(e,t,n){"use strict";n.d(t,{PageToc:function(){return f}});var r=n(27573),l=n(10607),a=n(60297),o=n.n(a),i=n(7653),s=n(81695),u=n(6721);function c(e){let{compiled:t,components:n}=e,l=Object.assign({opts:{...r,useMDXComponents:{}}}),a=Object.keys(l),o=Object.values(l),i=Reflect.construct(Function,a.concat(t)),s=i.apply(i,o).default;return(0,r.jsx)(s,{components:n})}var d=n(89848);function f(e){let{headings:t,minHeadingLevel:n,maxHeadingLevel:a,className:u}=e,c=(0,i.useMemo)(()=>t.filter(e=>e.depth>=n&&e.depth<=a),[t,a,n]),{activeId:f}=function(e){let[t,n]=(0,i.useState)(),r=(0,s.usePathname)();return(0,i.useEffect)(()=>{let t=Array.from(document.querySelectorAll(e)).filter(e=>!e.classList.contains("sr-only")),r=new Map;t.forEach(e=>r.set(e.id,!1));let l=new IntersectionObserver(e=>{for(let[t,l]of(e.forEach(e=>{r.set(e.target.id,e.isIntersecting)}),r))if(!0===l){n(t);break}},{rootMargin:"-48px 0px -20% 0px"});return t.forEach(e=>l.observe(e)),()=>l.disconnect()},[e,r]),{activeId:t}}(o()(n,a+1).map(e=>"main h".concat(e)).join(", ")),{containerRef:m}=(0,d.F)({elementId:"PageTocItem--".concat(f,"__active")});return 0===c.length?null:(0,r.jsxs)("div",{ref:m,className:(0,l.Z)(["text-label-01 bg-background md:bg-inherit overflow-y-auto scrollbar scrollbar-variant",u]),children:[(0,r.jsx)("p",{className:"text-text-helper font-600",children:"On this page"}),(0,r.jsx)("ul",{className:"border-border-subtle border-l",children:c.map(e=>(0,r.jsx)(p,{minHeadingLevel:n,heading:e,activeId:f},e.id))})]})}function p(e){let{heading:t,minHeadingLevel:n,activeId:a}=e,o={paddingLeft:(t.depth-n)*16},i=a===t.id;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{id:i?"PageTocItem--".concat(t.id,"__active"):void 0,className:(0,l.Z)(["relative pl-16 my-[12px]",{"before:block before:absolute before:w-[1px] before:h-full before:-left-[1px] before:bg-layer-selected-inverse":i}]),children:(0,r.jsx)(u.rU,{style:o,className:(0,l.Z)(["!block transition-colors ease-in-out duration-200 hover:no-underline [&>:first-child]:break-words",{"text-text-helper hover:text-text-primary":!i},{"text-text-primary":i}]),href:"#".concat(t.id),"aria-label":"Navigate to the ".concat(t.value," section"),children:t.compiledValue?(0,r.jsx)(c,{compiled:t.compiledValue,components:m}):(0,r.jsx)("div",{children:t.value})})},t.id)})}let m={code:function(e){return(0,r.jsx)("code",{...e,className:(0,l.Z)(["text-code-02 inline whitespace-nowrap px-4 bg-background border border-transparent dark:border-border-subtle-00","group-[.pre-el]:text-code-02 group-[.pre-el]:inline-block group-[.pre-el]:whitespace-pre group-[.pre-el]:p-12 group-[.pre-el]:pr-[50px] group-[.pre-el]:bg-inherit dark:group-[.pre-el]:border-transparent","group-[.paragraph-el]:whitespace-normal"])})}}},64730:function(e,t,n){"use strict";n.r(t),n.d(t,{Pre:function(){return p}});var r=n(27573),l=n(7653),a=n(62997),o=n(89556),i=n(8828);let s=(0,l.forwardRef)((e,t)=>{let{kind:n="secondary",size:l="default",type:a="button",className:s,asChild:u,...c}=e,d=u?i.g7:"button";return(0,r.jsx)(d,{ref:t,className:(0,o.W)("Button",s),type:a,"data-kind":n,"data-size":l,...c})});s.displayName="Button",(0,l.forwardRef)((e,t)=>{let{className:n,children:l}=e;return(0,r.jsx)("span",{ref:t,className:(0,o.W)("ButtonIcon",n),children:l})}).displayName="ButtonIcon";let u=(0,n(53772).B)(s,"IconButton");var c=n(94084),d=n.n(c),f=n(10607);function p(e){let{maxHeight:t,className:n,trackCopy:o,...i}=e,s=(0,l.useRef)(null),[c,p]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(c){let e=setTimeout(()=>{p(!1)},3e3);return()=>{clearTimeout(e)}}},[c]);let m=void 0!==t;return(0,r.jsxs)("div",{className:(0,f.Z)(["snippet relative bg-[var(--shiki-color-background)]",{"overflow-hidden":!m},n]),children:[(0,r.jsx)("div",{className:(0,f.Z)(["text-end absolute top-0",{"right-0":!m},{"right-12":m}]),children:(0,r.jsxs)(a.u,{open:c||void 0,children:[(0,r.jsx)(a.aJ,{asChild:!0,children:(0,r.jsx)(u,{size:"small",kind:"ghost",className:"data-[kind='ghost']:bg-[var(--shiki-color-background)]",onClick:function(){if(s.current){let e=s.current.textContent;e&&(navigator.clipboard.writeText(e),p(!0))}o&&o()},"aria-label":"Copy code",children:(0,r.jsx)(d(),{})})}),(0,r.jsx)(a.NM,{children:(0,r.jsxs)(a._v,{children:[c?"Copied!":"Copy code",(0,r.jsx)(a.Ce,{})]})})]})}),(0,r.jsx)("pre",{ref:s,className:(0,f.Z)(["group pre-el text-code-02 max-w-full overflow-auto scrollbar scrollbar-variant"]),style:{maxHeight:t},...i})]})}},89848:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(7653);function l(e){let{elementId:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=document.getElementById(t);if(e&&n.current){let t=n.current.offsetTop,r=t+n.current.offsetHeight,l=e.offsetTop,a=l+e.offsetHeight;(l<t||a>r)&&(n.current.scrollTop=l-t)}},[t]),{containerRef:n}}},88166:function(e,t,n){"use strict";n.d(t,{RH:function(){return u},sb:function(){return d}});var r=n(27573),l=n(41018);n(73509);var a=n(96817),o=n.n(a),i=n(35600),s=n.n(i);class u{maybeGetIcon(e){var t,n,l,a,i;return"external"===this.type||"external-quantum"===this.type?(null!==(l=e[n="aria-label"])&&void 0!==l||(e[n]="(opens in a new tab)"),(0,r.jsx)(o(),{...e})):"pdf"===(null===(t=this.value.split(/[#?]/)[0].split(".").pop())||void 0===t?void 0:t.trim())?(null!==(i=e[a="aria-label"])&&void 0!==i||(e[a]="(PDF document)"),(0,r.jsx)(s(),{...e})):null}constructor(e){this.value=e,this.type=c(e),this.linkProps=function(e){if(!e)return{};let t=c(e);return"external"===t?{target:"_blank",rel:"noopener noreferrer nofollow"}:"external-quantum"===t?{target:"_blank"}:{}}(e)}}function c(e){return(0,l.Z)(e)?!function(e){let{hostname:t}=new URL(e);return"quantum-computing.ibm.com"===t||t.endsWith(".quantum-computing.ibm.com")||"quantum.ibm.com"===t||t.endsWith(".quantum.ibm.com")}(e)?"external":"external-quantum":e.startsWith("/")?"absolute":"relative"}function d(){return"/documentation/pr-2558"}}},function(e){e.O(0,[705,340,294,436,478,997,293,528,744],function(){return e(e.s=2401)}),_N_E=e.O()}]);