(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{8900:function(e,t,n){Promise.resolve().then(n.t.bind(n,16340,23)),Promise.resolve().then(n.bind(n,87860)),Promise.resolve().then(n.bind(n,54795)),Promise.resolve().then(n.bind(n,77406)),Promise.resolve().then(n.bind(n,36486)),Promise.resolve().then(n.bind(n,64730))},94084:function(e,t,n){"use strict";var r,a,l=n(7653),i=n(15761);n(69940),n(62147),n(63074);var o=l&&"object"==typeof l&&"default"in l?l:{default:l};let s=o.default.forwardRef(function(e,t){let{children:n,size:l=16,...s}=e;return o.default.createElement(i,{width:l,height:l,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...s},r||(r=o.default.createElement("path",{d:"M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"})),a||(a=o.default.createElement("path",{d:"M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"})),n)});e.exports=s},36441:function(e){var t=Math.ceil,n=Math.max;e.exports=function(e,r,a,l){for(var i=-1,o=n(t((r-e)/(a||1)),0),s=Array(o);o--;)s[l?o:++i]=e,e+=a;return s}},84521:function(e,t,n){var r=n(36441),a=n(64091),l=n(77615);e.exports=function(e){return function(t,n,i){return i&&"number"!=typeof i&&a(t,n,i)&&(n=i=void 0),t=l(t),void 0===n?(n=t,t=0):n=l(n),i=void 0===i?t<n?1:-1:l(i),r(t,n,i,e)}}},64091:function(e,t,n){var r=n(30207),a=n(15206),l=n(24923),i=n(88873);e.exports=function(e,t,n){if(!i(n))return!1;var o=typeof t;return("number"==o?!!(a(n)&&l(t,n.length)):"string"==o&&t in n)&&r(n[t],e)}},60297:function(e,t,n){var r=n(84521)();e.exports=r},87860:function(e,t,n){"use strict";n.d(t,{DefinitionTooltip:function(){return l}});var r=n(27573),a=n(75078);function l(e){return(0,r.jsx)(a.I,{openOnHover:!0,...e})}},54795:function(e,t,n){"use strict";n.d(t,{Image:function(){return i},ImageLink:function(){return s},InlineImage:function(){return o}});var r=n(27573),a=n(50294),l=n(10607);function i(e){let{className:t,title:n,...a}=e;return n?(0,r.jsxs)("figure",{className:"flex flex-col gap-4",children:[(0,r.jsx)(u,{className:(0,l.Z)(t,"border-none max-w-full h-auto cursor-pointer"),title:n,display:"block",...a}),(0,r.jsx)("figcaption",{className:"text-left text-label-01 text-text-helper",children:n})]}):(0,r.jsx)(u,{className:(0,l.Z)(t,"border-none max-w-full h-auto"),display:"block",...a})}function o(e){let{className:t,...n}=e;return(0,r.jsx)(u,{display:"inline",className:(0,l.Z)(t,"border-none max-w-full h-auto"),...n})}function s(e){let{href:t,alt:n,...a}=e;return(0,r.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("span",{className:"sr-only",children:"(opens in a new tab)"}),(0,r.jsx)(i,{className:"w-full",alt:n,...a})]})}function u(e){let{alt:t="",src:n,srcDark:i,display:o,className:s,...u}=e;if(i){let e=(0,l.Z)({block:"block"===o,inline:"inline"===o},"dark:hidden",s),c=(0,l.Z)("hidden",{"dark:block":"block"===o,"dark:inline":"inline"===o},s);return n.startsWith("/")?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{alt:t,src:n,className:e,...u}),(0,r.jsx)(a.default,{alt:t,src:i,className:c,...u})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{alt:t,src:n,className:e,...u}),(0,r.jsx)("img",{alt:t,src:i,className:c,...u})]})}let c=(0,l.Z)({block:"block"===o,inline:"inline"===o},s);return n.startsWith("/")?(0,r.jsx)(a.default,{alt:t,src:n,className:c,...u}):(0,r.jsx)("img",{alt:t,src:n,className:c,...u})}},6721:function(e,t,n){"use strict";n.d(t,{OL:function(){return u},rU:function(){return s}});var r=n(27573),a=n(7653),l=n(88146),i=n(10607),o=n(88166);function s(e){let{innerRef:t,href:n,className:a,iconClassName:s,iconWidth:u=16,...d}=e,f=n?new o.RH(n):void 0,p=(0,i.Z)(c,"inline",a);return(null==f?void 0:f.type)==="absolute"?(0,r.jsx)(l.default,{...d,href:n,className:p,ref:t}):(null==f?void 0:f.type)==="external"||(null==f?void 0:f.type)==="external-quantum"?(0,r.jsxs)("a",{...d,href:n,className:p,ref:t,...f.linkProps,children:[e.children,f.maybeGetIcon({className:(0,i.Z)("inline ml-2",s),width:u})]}):(0,r.jsx)("a",{...d,href:n,className:p})}let u=(0,a.forwardRef)(function(e,t){let{className:n,iconClassName:a,...l}=e,o={innerRef:t,className:(0,i.Z)(n,"hover:no-underline"),iconClassName:(0,i.Z)(a,"mt-[1%]"),...l};return(0,r.jsx)(s,{...o})}),c="text-link-primary no-underline hover:underline"},77406:function(e,t,n){"use strict";n.d(t,{MdTabItem:function(){return f},MdTabs:function(){return c},MdTabsGroupContextProvider:function(){return m},OperatingSystemMdTabs:function(){return d}});var r=n(27573),a=n(4093),l=n.n(a),i=n(7653),o=n(2022);let s=o.td,u=o.nP;function c(e){var t;let{defaultValue:n,group:a}=e,c=(t=e.children,i.Children.toArray(t).filter(e=>null!=e&&"\n"!==e).map(e=>{if((0,i.isValidElement)(e)&&l()(e.props,"value"))return e;throw Error("Bad <Tabs> child")})),d=c.map(e=>e.props.value),[f,p]=h(a),m=(0,i.useRef)(null),[x,v]=(0,i.useState)(()=>void 0!==n&&d.includes(n)?n:d[0]),b=(0,i.useMemo)(()=>a&&f&&d.includes(f)?f:x,[a,f,x,d]),g=function(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{let e=()=>{t(window.location.hash)};return e(),window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),e}();return(0,i.useEffect)(()=>{if(m.current&&g){let t=m.current.querySelector('[id="'.concat(g.slice(1),'"]'));if(t){var e;let n=null===(e=t.closest("[data-tab-value]"))||void 0===e?void 0:e.getAttribute("data-tab-value");n&&(v(n),p(n))}}},[g,p]),(0,i.useEffect)(()=>{a&&!f&&p(x)},[a,f,x,p]),(0,r.jsx)("div",{ref:m,children:(0,r.jsxs)(o.mQ,{selectedIndex:d.indexOf(b),onChange:e=>{let{selectedIndex:t}=e,n=d[t];v(n),p(n)},children:[(0,r.jsx)(s,{"aria-label":"List of tabs",children:c.map(e=>(0,r.jsx)(o.OK,{children:e.props.label},e.props.value))}),(0,r.jsx)(u,{children:c})]})})}function d(e){let t="operating-system",[n,a]=(0,i.useState)(),[l,o]=h(t);return(0,i.useEffect)(()=>{let e=function(){if(navigator.platform){if(navigator.platform.startsWith("Mac"))return"mac";if(navigator.platform.startsWith("Win"))return"win";if(navigator.platform.startsWith("Linux"))return"linux"}}();e&&(a(e),o(e))},[o]),(0,r.jsx)(c,{...e,group:t,defaultValue:n},n)}function f(e){let{children:t}=e;return(0,r.jsx)(o.x4,{"data-tab-value":e.value,children:t})}let p=(0,i.createContext)(void 0);function m(e){let[t,n]=(0,i.useState)({}),a=(0,i.useCallback)((e,t)=>{n(n=>({...n,[e]:t}))},[]),l=(0,i.useMemo)(()=>({valuesByGroup:t,setValue:a}),[a,t]);return(0,r.jsx)(p.Provider,{value:l,children:e.children})}function h(e){let t=(0,i.useContext)(p);if(void 0===t)throw Error("Missing MdTabsGroupContextProvider");let n=t.setValue,r=(0,i.useCallback)(t=>{e&&n(e,t)},[e,n]);return void 0===e?[void 0,r]:[t.valuesByGroup[e],r]}},36486:function(e,t,n){"use strict";n.d(t,{PageToc:function(){return f}});var r=n(27573),a=n(10607),l=n(60297),i=n.n(l),o=n(7653),s=n(81695),u=n(6721);function c(e){let{compiled:t,components:n}=e,a=Object.assign({opts:{...r,useMDXComponents:{}}}),l=Object.keys(a),i=Object.values(a),o=Reflect.construct(Function,l.concat(t)),s=o.apply(o,i).default;return(0,r.jsx)(s,{components:n})}var d=n(89848);function f(e){let{headings:t,minHeadingLevel:n,maxHeadingLevel:l,className:u}=e,c=(0,o.useMemo)(()=>t.filter(e=>e.depth>=n&&e.depth<=l),[t,l,n]),{activeId:f}=function(e){let[t,n]=(0,o.useState)(),r=(0,s.usePathname)();return(0,o.useEffect)(()=>{let t=Array.from(document.querySelectorAll(e)).filter(e=>!e.classList.contains("sr-only")),r=new Map;t.forEach(e=>r.set(e.id,!1));let a=new IntersectionObserver(e=>{for(let[t,a]of(e.forEach(e=>{r.set(e.target.id,e.isIntersecting)}),r))if(!0===a){n(t);break}},{rootMargin:"-48px 0px -20% 0px"});return t.forEach(e=>a.observe(e)),()=>a.disconnect()},[e,r]),{activeId:t}}(i()(n,l+1).map(e=>"main h".concat(e)).join(", ")),{containerRef:m}=(0,d.F)({elementId:"PageTocItem--".concat(f,"__active")});return 0===c.length?null:(0,r.jsxs)("div",{ref:m,className:(0,a.Z)(["text-label-01 bg-background md:bg-inherit overflow-y-auto scrollbar scrollbar-variant",u]),children:[(0,r.jsx)("p",{className:"text-text-helper font-600",children:"On this page"}),(0,r.jsx)("ul",{className:"border-border-subtle border-l",children:c.map(e=>(0,r.jsx)(p,{minHeadingLevel:n,heading:e,activeId:f},e.id))})]})}function p(e){let{heading:t,minHeadingLevel:n,activeId:l}=e,i={paddingLeft:(t.depth-n)*16},o=l===t.id;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{id:o?"PageTocItem--".concat(t.id,"__active"):void 0,className:(0,a.Z)(["relative pl-16 my-[12px]",{"before:block before:absolute before:w-[1px] before:h-full before:-left-[1px] before:bg-layer-selected-inverse":o}]),children:(0,r.jsx)(u.rU,{style:i,className:(0,a.Z)(["!block transition-colors ease-in-out duration-200 hover:no-underline [&>:first-child]:break-words",{"text-text-helper hover:text-text-primary":!o},{"text-text-primary":o}]),href:"#".concat(t.id),"aria-label":"Navigate to the ".concat(t.value," section"),children:t.compiledValue?(0,r.jsx)(c,{compiled:t.compiledValue,components:m}):(0,r.jsx)("div",{children:t.value})})},t.id)})}let m={code:function(e){return(0,r.jsx)("code",{...e,className:(0,a.Z)(["text-code-02 inline whitespace-nowrap px-4 bg-background border border-transparent dark:border-border-subtle-00","group-[.pre-el]:text-code-02 group-[.pre-el]:inline-block group-[.pre-el]:whitespace-pre group-[.pre-el]:p-12 group-[.pre-el]:pr-[50px] group-[.pre-el]:bg-inherit dark:group-[.pre-el]:border-transparent","group-[.paragraph-el]:whitespace-normal"])})}}},64730:function(e,t,n){"use strict";n.r(t),n.d(t,{Pre:function(){return p}});var r=n(27573),a=n(7653),l=n(62997),i=n(89556),o=n(8828);let s=(0,a.forwardRef)((e,t)=>{let{kind:n="secondary",size:a="default",type:l="button",className:s,asChild:u,...c}=e,d=u?o.g7:"button";return(0,r.jsx)(d,{ref:t,className:(0,i.W)("Button",s),type:l,"data-kind":n,"data-size":a,...c})});s.displayName="Button",(0,a.forwardRef)((e,t)=>{let{className:n,children:a}=e;return(0,r.jsx)("span",{ref:t,className:(0,i.W)("ButtonIcon",n),children:a})}).displayName="ButtonIcon";let u=(0,n(53772).B)(s,"IconButton");var c=n(94084),d=n.n(c),f=n(10607);function p(e){let{maxHeight:t,className:n,trackCopy:i,...o}=e,s=(0,a.useRef)(null),[c,p]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(c){let e=setTimeout(()=>{p(!1)},3e3);return()=>{clearTimeout(e)}}},[c]);let m=void 0!==t;return(0,r.jsxs)("div",{className:(0,f.Z)(["snippet relative bg-[var(--shiki-color-background)]",{"overflow-hidden":!m},n]),children:[(0,r.jsx)("div",{className:(0,f.Z)(["text-end absolute top-0",{"right-0":!m},{"right-12":m}]),children:(0,r.jsxs)(l.u,{open:c||void 0,children:[(0,r.jsx)(l.aJ,{asChild:!0,children:(0,r.jsx)(u,{size:"small",kind:"ghost",className:"data-[kind='ghost']:bg-[var(--shiki-color-background)]",onClick:function(){if(s.current){let e=s.current.textContent;e&&(navigator.clipboard.writeText(e),p(!0))}i&&i()},"aria-label":"Copy code",children:(0,r.jsx)(d(),{})})}),(0,r.jsx)(l.NM,{children:(0,r.jsxs)(l._v,{children:[c?"Copied!":"Copy code",(0,r.jsx)(l.Ce,{})]})})]})}),(0,r.jsx)("pre",{ref:s,className:(0,f.Z)(["group pre-el text-code-02 max-w-full overflow-auto scrollbar scrollbar-variant"]),style:{maxHeight:t},...o})]})}},89848:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var r=n(7653);function a(e){let{elementId:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=document.getElementById(t);if(e&&n.current){let t=n.current.offsetTop,r=t+n.current.offsetHeight,a=e.offsetTop,l=a+e.offsetHeight;(a<t||l>r)&&(n.current.scrollTop=a-t)}},[t]),{containerRef:n}}},88166:function(e,t,n){"use strict";n.d(t,{RH:function(){return u},sb:function(){return d}});var r=n(27573),a=n(41018);n(73509);var l=n(96817),i=n.n(l),o=n(35600),s=n.n(o);class u{maybeGetIcon(e){var t,n,a,l,o;return"external"===this.type||"external-quantum"===this.type?(null!==(a=e[n="aria-label"])&&void 0!==a||(e[n]="(opens in a new tab)"),(0,r.jsx)(i(),{...e})):"pdf"===(null===(t=this.value.split(/[#?]/)[0].split(".").pop())||void 0===t?void 0:t.trim())?(null!==(o=e[l="aria-label"])&&void 0!==o||(e[l]="(PDF document)"),(0,r.jsx)(s(),{...e})):null}constructor(e){this.value=e,this.type=c(e),this.linkProps=function(e){if(!e)return{};let t=c(e);return"external"===t?{target:"_blank",rel:"noopener noreferrer nofollow"}:"external-quantum"===t?{target:"_blank"}:{}}(e)}}function c(e){return(0,a.Z)(e)?!function(e){let{hostname:t}=new URL(e);return"quantum-computing.ibm.com"===t||t.endsWith(".quantum-computing.ibm.com")||"quantum.ibm.com"===t||t.endsWith(".quantum.ibm.com")}(e)?"external":"external-quantum":e.startsWith("/")?"absolute":"relative"}function d(){return"/documentation/pr-2565"}}},function(e){e.O(0,[705,340,436,294,989,997,293,528,744],function(){return e(e.s=8900)}),_N_E=e.O()}]);