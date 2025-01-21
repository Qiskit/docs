(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{65287:function(e,t,n){"use strict";n.d(t,{C:function(){return c},Z:function(){return s}});var r=n(77974),o=n(63074),i=n.n(o),u=n(7653),a=n(80893);let s=(0,u.forwardRef)(function(e,t){var n;let{element:o,as:i,isSideNavExpanded:a,...s}=e,c=null!==(n=null!=i?i:o)&&void 0!==n?n:"a";return u.createElement(c,(0,r.gY)({ref:t},s))}),c={as:i().elementType,element:(0,a.Z)(i().elementType,"The `element` prop for `Link` has been deprecated. Please use `as` instead. This will be removed in the next major release."),isSideNavExpanded:i().bool};s.displayName="Link",s.propTypes=c},48149:function(e,t,n){"use strict";n.d(t,{h4i:function(){return d},nho:function(){return v},GDX:function(){return b},LDp:function(){return m},yTF:function(){return T},xRb:function(){return C},zl5:function(){return h}}),n(14849).TS({"enable-css-custom-properties":!0,"enable-css-grid":!0,"enable-v11-release":!0,"enable-experimental-tile-contrast":!1,"enable-v12-tile-radio-icons":!1,"enable-v12-structured-list-visible-icons":!1,"enable-v12-dynamic-floating-styles":!1});var r,o=n(77974),i=n(45254),u=n.n(i),a=n(63074),s=n.n(a),c=n(7653);let l=function(e){let t=Object.keys(e),n=e=>function(t,n,r){for(var o=arguments.length,i=Array(o>3?o-3:0),u=3;u<o;u++)i[u-3]=arguments[u];return e(t,n,r,...i)};return t.reduce((t,r)=>({...t,[r]:n(e[r])}),{})}({"aria-label":s().string,"aria-labelledby":s().string});var f=n(57692);let d=e=>{let{className:t,children:n,...r}=e,i=(0,f.A)(),a=u()("".concat(i,"--header"),t);return c.createElement("header",(0,o.gY)({},r,{className:a}),n)};d.propTypes={...l,className:s().string};var p=n(65287);function v(e){let{children:t,className:n,prefix:r="IBM",...i}=e,a=(0,f.A)(),s=u()("".concat(a,"--header__name"),n);return c.createElement(p.Z,(0,o.gY)({},i,{className:s}),r&&c.createElement(c.Fragment,null,c.createElement("span",{className:"".concat(a,"--header__name--prefix")},r),"\xa0"),t)}function h(e){let{children:t="Skip to main content",className:n,href:r="#main-content",tabIndex:i=0,...a}=e,s=(0,f.A)(),l=u()("".concat(s,"--skip-to-content"),n);return c.createElement("a",(0,o.gY)({},a,{className:l,href:r,tabIndex:i}),t)}v.propTypes={...p.C,children:s().node.isRequired,className:s().string,href:s().string,prefix:s().string},h.propTypes={children:s().string,className:s().string,href:s().string,tabIndex:s().string};let b=e=>{let{className:t}=e,n=(0,f.A)(),o=u()("".concat(n,"--side-nav__divider"),t);return c.createElement("li",{className:o},r||(r=c.createElement("hr",null)))};b.propTypes={className:s().string};let y=["SideNavFooter","SideNavHeader","SideNavItems","SideNavMenu","SideNavLink"],m=e=>{let{className:t,children:n,isSideNavExpanded:r}=e,o=(0,f.A)(),i=u()(["".concat(o,"--side-nav__items")],t),a=c.Children.map(n,e=>{if(c.isValidElement(e)){var t;let n=null===(t=e.type)||void 0===t?void 0:t.displayName;return c.cloneElement(e,{...y.includes(n)?{isSideNavExpanded:r}:{}})}});return c.createElement("ul",{className:i},a)};m.displayName="SideNavItems",m.propTypes={children:s().node.isRequired,className:s().string,isSideNavExpanded:s().bool};let g=e=>{let{children:t,className:n,small:r=!1}=e,o=(0,f.A)(),i=u()({["".concat(o,"--side-nav__icon")]:!0,["".concat(o,"--side-nav__icon--small")]:r,[n]:!!n});return c.createElement("div",{className:i},t)};g.propTypes={children:s().node.isRequired,className:s().string,small:s().bool};let _=e=>{let{className:t,children:n,large:r=!1}=e,o=(0,f.A)(),i=u()({["".concat(o,"--side-nav__item")]:!0,["".concat(o,"--side-nav__item--large")]:r,[t]:!!t});return c.createElement("li",{className:i},n)};function x(e){let{className:t,children:n,...r}=e,i=(0,f.A)(),a=u()("".concat(i,"--side-nav__link-text"),t);return c.createElement("span",(0,o.gY)({},r,{className:a}),n)}_.propTypes={children:s().node.isRequired,className:s().string,large:s().bool},x.propTypes={children:s().node.isRequired,className:s().string};var w=n(87762),j=n(89608),E=n(89758),N=n(81580),O=n(3949),A=n(19103),S=n(6305);let k=(0,c.createContext)({}),L=c.forwardRef(function(e,t){let{expanded:n,defaultExpanded:r=!1,isChildOfHeader:i=!0,"aria-label":a,"aria-labelledby":s,children:l,onToggle:d,className:p,href:v,isFixedNav:h=!1,isRail:b,isPersistent:m=!0,addFocusListeners:g=!0,addMouseListeners:_=!0,onOverlayClick:x,onSideNavBlur:L,enterDelayMs:T=100,...C}=e,F=(0,f.A)(),{current:P}=(0,c.useRef)(void 0!==n),[R,M]=(0,E.F)(r),[q,D]=(0,E.F)(r),I=P?n:R,z=(0,c.useRef)(null),K=(0,w.r)([z,t]),B=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!I;P||M(t,T),d&&d(e,t),(P||b)&&D(t,T)},V=u()(p,{["".concat(F,"--side-nav")]:!0,["".concat(F,"--side-nav--expanded")]:I||q,["".concat(F,"--side-nav--collapsed")]:!I&&h,["".concat(F,"--side-nav--rail")]:b,["".concat(F,"--side-nav--ux")]:i,["".concat(F,"--side-nav--hidden")]:!m}),U=u()({["".concat(F,"--side-nav__overlay")]:!0,["".concat(F,"--side-nav__overlay-active")]:I||q}),Y=l;Y=c.Children.map(l,e=>{let t=P&&q||I;if((0,c.isValidElement)(e)){var n,r,o;return c.cloneElement(e,{...y.includes(null!==(o=null===(n=e.type)||void 0===n?void 0:n.displayName)&&void 0!==o?o:null===(r=e.type)||void 0===r?void 0:r.name)?{isSideNavExpanded:t}:{}})}return e});let Z={};g&&(Z.onFocus=e=>{!e.currentTarget.contains(e.relatedTarget)&&b&&B(e,!0)},Z.onBlur=e=>{e.currentTarget.contains(e.relatedTarget)||B(e,!1),!e.currentTarget.contains(e.relatedTarget)&&I&&!h&&L&&L()},Z.onKeyDown=e=>{(0,A.E)(e,S.L1)&&(B(e,!1),v&&(window.location.href=v))}),_&&b&&(Z.onMouseEnter=()=>{B(!0,!0)},Z.onMouseLeave=()=>{M(!1),D(!1),B(!1,!1)},Z.onClick=()=>{M(!0),D(!0),B(!0,!0)}),(0,j.s)("keydown",e=>{let t=document.activeElement;(0,A.E)(e,S.OK)&&I&&!h&&z.current&&(null==t?void 0:t.classList.contains("".concat(F,"--header__menu-toggle")))&&!t.closest("nav")&&z.current.focus()});let H="(min-width: ".concat(N.AV.lg.width,")"),Q=(0,O.a)(H);return c.createElement(k.Provider,{value:{isRail:b}},h?null:c.createElement("div",{className:U,onClick:x}),c.createElement("nav",(0,o.gY)({tabIndex:-1,ref:K,className:"".concat(F,"--side-nav__navigation ").concat(V),inert:b?void 0:I||Q?void 0:-1},{"aria-label":a,"aria-labelledby":s},Z,C),Y))});L.displayName="SideNav",L.propTypes={...l,addFocusListeners:s().bool,addMouseListeners:s().bool,className:s().string,defaultExpanded:s().bool,enterDelayMs:s().number,expanded:s().bool,href:s().string,isChildOfHeader:s().bool,isFixedNav:s().bool,isPersistent:s().bool,isRail:s().bool,onOverlayClick:s().func,onSideNavBlur:s().func,onToggle:s().func};let T=(0,c.forwardRef)(function(e,t){let{children:n,className:r,renderIcon:i,isActive:a,isSideNavExpanded:s,large:l=!1,tabIndex:d,...v}=e,h=(0,c.useContext)(k),b=(0,f.A)(),y=u()({["".concat(b,"--side-nav__link")]:!0,["".concat(b,"--side-nav__link--current")]:a,[r]:!!r});return c.createElement(_,{large:l},c.createElement(p.Z,(0,o.gY)({},v,{className:y,ref:t,tabIndex:void 0===d?s||h?0:-1:d}),i&&c.createElement(g,{small:!0},c.createElement(i,null)),c.createElement(x,null,n)))});T.displayName="SideNavLink",T.propTypes={...p.C,children:s().node.isRequired,className:s().string,isActive:s().bool,isSideNavExpanded:s().bool,large:s().bool,renderIcon:s().oneOfType([s().func,s().object]),tabIndex:s().number};let C=c.forwardRef(function(e,t){let n=(0,f.A)(),{children:r,className:i,as:a=p.Z,isActive:s,...l}=e,d=u()("".concat(n,"--side-nav__menu-item"),i),v=u()({["".concat(n,"--side-nav__link")]:!0,["".concat(n,"--side-nav__link--current")]:s});return c.createElement("li",{className:d},c.createElement(a,(0,o.gY)({},l,{className:v,ref:t}),c.createElement(x,null,r)))});C.displayName="SideNavMenuItem",C.propTypes={children:s().node,className:s().string,href:s().string,isActive:s().bool,as:s().elementType}},8234:function(e,t,n){"use strict";function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{W:function(){return r}})},48361:function(e,t,n){var r=n(64620)(n(3642),"DataView");e.exports=r},7737:function(e,t,n){var r=n(64620)(n(3642),"Promise");e.exports=r},64637:function(e,t,n){var r=n(64620)(n(3642),"Set");e.exports=r},44643:function(e,t,n){var r=n(41223),o=n(76882),i=n(80786);function u(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}u.prototype.add=u.prototype.push=o,u.prototype.has=i,e.exports=u},15450:function(e,t,n){var r=n(92960),o=n(99669),i=n(62881),u=n(99024),a=n(44701),s=n(75694);function c(e){var t=this.__data__=new r(e);this.size=t.size}c.prototype.clear=o,c.prototype.delete=i,c.prototype.get=u,c.prototype.has=a,c.prototype.set=s,e.exports=c},8129:function(e,t,n){var r=n(3642).Uint8Array;e.exports=r},28345:function(e,t,n){var r=n(64620)(n(3642),"WeakMap");e.exports=r},92010:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var u=e[n];t(u,n,e)&&(i[o++]=u)}return i}},99207:function(e,t,n){var r=n(83090),o=n(41080),i=n(73509),u=n(91485),a=n(24923),s=n(23329),c=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=i(e),l=!n&&o(e),f=!n&&!l&&u(e),d=!n&&!l&&!f&&s(e),p=n||l||f||d,v=p?r(e.length,String):[],h=v.length;for(var b in e)(t||c.call(e,b))&&!(p&&("length"==b||f&&("offset"==b||"parent"==b)||d&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||a(b,h)))&&v.push(b);return v}},73056:function(e){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},14803:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},19716:function(e,t,n){var r=n(1746),o=n(4593);e.exports=function(e,t){t=r(t,e);for(var n=0,i=t.length;null!=e&&n<i;)e=e[o(t[n++])];return n&&n==i?e:void 0}},42600:function(e,t,n){var r=n(73056),o=n(73509);e.exports=function(e,t,n){var i=t(e);return o(e)?i:r(i,n(e))}},19144:function(e){e.exports=function(e,t){return null!=e&&t in Object(e)}},62579:function(e,t,n){var r=n(44748),o=n(62743);e.exports=function e(t,n,i,u,a){return t===n||(null!=t&&null!=n&&(o(t)||o(n))?r(t,n,i,u,e,a):t!=t&&n!=n)}},44748:function(e,t,n){var r=n(15450),o=n(91491),i=n(13989),u=n(86002),a=n(17121),s=n(73509),c=n(91485),l=n(23329),f="[object Arguments]",d="[object Array]",p="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,h,b,y){var m=s(e),g=s(t),_=m?d:a(e),x=g?d:a(t);_=_==f?p:_,x=x==f?p:x;var w=_==p,j=x==p,E=_==x;if(E&&c(e)){if(!c(t))return!1;m=!0,w=!1}if(E&&!w)return y||(y=new r),m||l(e)?o(e,t,n,h,b,y):i(e,t,_,n,h,b,y);if(!(1&n)){var N=w&&v.call(e,"__wrapped__"),O=j&&v.call(t,"__wrapped__");if(N||O){var A=N?e.value():e,S=O?t.value():t;return y||(y=new r),b(A,S,n,h,y)}}return!!E&&(y||(y=new r),u(e,t,n,h,b,y))}},90234:function(e,t,n){var r=n(15450),o=n(62579);e.exports=function(e,t,n,i){var u=n.length,a=u,s=!i;if(null==e)return!a;for(e=Object(e);u--;){var c=n[u];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++u<a;){var l=(c=n[u])[0],f=e[l],d=c[1];if(s&&c[2]){if(void 0===f&&!(l in e))return!1}else{var p=new r;if(i)var v=i(f,d,l,e,t,p);if(!(void 0===v?o(d,f,3,i,p):v))return!1}}return!0}},58980:function(e,t,n){var r=n(606),o=n(63831),i=n(62743),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&o(e.length)&&!!u[r(e)]}},60876:function(e,t,n){var r=n(2837),o=n(95224),i=n(65778),u=n(73509),a=n(4924);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?u(e)?o(e[0],e[1]):r(e):a(e)}},50419:function(e,t,n){var r=n(99166),o=n(10369),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))i.call(e,n)&&"constructor"!=n&&t.push(n);return t}},2837:function(e,t,n){var r=n(90234),o=n(99367),i=n(4733);e.exports=function(e){var t=o(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},95224:function(e,t,n){var r=n(62579),o=n(55854),i=n(83320),u=n(1841),a=n(28162),s=n(4733),c=n(4593);e.exports=function(e,t){return u(e)&&a(t)?s(c(e),t):function(n){var u=o(n,e);return void 0===u&&u===t?i(n,e):r(t,u,3)}}},79339:function(e){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},29101:function(e,t,n){var r=n(19716);e.exports=function(e){return function(t){return r(t,e)}}},83090:function(e){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},19040:function(e){e.exports=function(e){return function(t){return e(t)}}},34675:function(e){e.exports=function(e,t){return e.has(t)}},59907:function(e,t,n){var r=n(64620),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},91491:function(e,t,n){var r=n(44643),o=n(14803),i=n(34675);e.exports=function(e,t,n,u,a,s){var c=1&n,l=e.length,f=t.length;if(l!=f&&!(c&&f>l))return!1;var d=s.get(e),p=s.get(t);if(d&&p)return d==t&&p==e;var v=-1,h=!0,b=2&n?new r:void 0;for(s.set(e,t),s.set(t,e);++v<l;){var y=e[v],m=t[v];if(u)var g=c?u(m,y,v,t,e,s):u(y,m,v,e,t,s);if(void 0!==g){if(g)continue;h=!1;break}if(b){if(!o(t,function(e,t){if(!i(b,t)&&(y===e||a(y,e,n,u,s)))return b.push(t)})){h=!1;break}}else if(!(y===m||a(y,m,n,u,s))){h=!1;break}}return s.delete(e),s.delete(t),h}},13989:function(e,t,n){var r=n(65085),o=n(8129),i=n(30207),u=n(91491),a=n(19143),s=n(22780),c=r?r.prototype:void 0,l=c?c.valueOf:void 0;e.exports=function(e,t,n,r,c,f,d){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!f(new o(e),new o(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var p=a;case"[object Set]":var v=1&r;if(p||(p=s),e.size!=t.size&&!v)break;var h=d.get(e);if(h)return h==t;r|=2,d.set(e,t);var b=u(p(e),p(t),r,c,f,d);return d.delete(e),b;case"[object Symbol]":if(l)return l.call(e)==l.call(t)}return!1}},86002:function(e,t,n){var r=n(24592),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,i,u,a){var s=1&n,c=r(e),l=c.length;if(l!=r(t).length&&!s)return!1;for(var f=l;f--;){var d=c[f];if(!(s?d in t:o.call(t,d)))return!1}var p=a.get(e),v=a.get(t);if(p&&v)return p==t&&v==e;var h=!0;a.set(e,t),a.set(t,e);for(var b=s;++f<l;){var y=e[d=c[f]],m=t[d];if(i)var g=s?i(m,y,d,t,e,a):i(y,m,d,e,t,a);if(!(void 0===g?y===m||u(y,m,n,i,a):g)){h=!1;break}b||(b="constructor"==d)}if(h&&!b){var _=e.constructor,x=t.constructor;_!=x&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof x&&x instanceof x)&&(h=!1)}return a.delete(e),a.delete(t),h}},24592:function(e,t,n){var r=n(42600),o=n(24729),i=n(35147);e.exports=function(e){return r(e,i,o)}},99367:function(e,t,n){var r=n(28162),o=n(35147);e.exports=function(e){for(var t=o(e),n=t.length;n--;){var i=t[n],u=e[i];t[n]=[i,u,r(u)]}return t}},24729:function(e,t,n){var r=n(92010),o=n(58182),i=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,a=u?function(e){return null==e?[]:r(u(e=Object(e)),function(t){return i.call(e,t)})}:o;e.exports=a},17121:function(e,t,n){var r=n(48361),o=n(3055),i=n(7737),u=n(64637),a=n(28345),s=n(606),c=n(33679),l="[object Map]",f="[object Promise]",d="[object Set]",p="[object WeakMap]",v="[object DataView]",h=c(r),b=c(o),y=c(i),m=c(u),g=c(a),_=s;(r&&_(new r(new ArrayBuffer(1)))!=v||o&&_(new o)!=l||i&&_(i.resolve())!=f||u&&_(new u)!=d||a&&_(new a)!=p)&&(_=function(e){var t=s(e),n="[object Object]"==t?e.constructor:void 0,r=n?c(n):"";if(r)switch(r){case h:return v;case b:return l;case y:return f;case m:return d;case g:return p}return t}),e.exports=_},99166:function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},28162:function(e,t,n){var r=n(88873);e.exports=function(e){return e==e&&!r(e)}},19143:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}},4733:function(e){e.exports=function(e,t){return function(n){return null!=n&&n[e]===t&&(void 0!==t||e in Object(n))}}},10369:function(e,t,n){var r=n(49203)(Object.keys,Object);e.exports=r},44055:function(e,t,n){e=n.nmd(e);var r=n(31357),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,u=i&&i.exports===o&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;if(e)return e;return u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=a},49203:function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},76882:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},80786:function(e){e.exports=function(e){return this.__data__.has(e)}},22780:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}},99669:function(e,t,n){var r=n(92960);e.exports=function(){this.__data__=new r,this.size=0}},62881:function(e){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},99024:function(e){e.exports=function(e){return this.__data__.get(e)}},44701:function(e){e.exports=function(e){return this.__data__.has(e)}},75694:function(e,t,n){var r=n(92960),o=n(3055),i=n(41223);e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var u=n.__data__;if(!o||u.length<199)return u.push([e,t]),this.size=++n.size,this;n=this.__data__=new i(u)}return n.set(e,t),this.size=n.size,this}},55854:function(e,t,n){var r=n(19716);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},83320:function(e,t,n){var r=n(19144),o=n(41166);e.exports=function(e,t){return null!=e&&o(e,t,r)}},65778:function(e){e.exports=function(e){return e}},91485:function(e,t,n){e=n.nmd(e);var r=n(3642),o=n(9183),i=t&&!t.nodeType&&t,u=i&&e&&!e.nodeType&&e,a=u&&u.exports===i?r.Buffer:void 0,s=a?a.isBuffer:void 0;e.exports=s||o},23329:function(e,t,n){var r=n(58980),o=n(19040),i=n(44055),u=i&&i.isTypedArray,a=u?o(u):r;e.exports=a},35147:function(e,t,n){var r=n(99207),o=n(50419),i=n(15206);e.exports=function(e){return i(e)?r(e):o(e)}},4924:function(e,t,n){var r=n(79339),o=n(29101),i=n(1841),u=n(4593);e.exports=function(e){return i(e)?r(u(e)):o(e)}},58182:function(e){e.exports=function(){return[]}},9183:function(e){e.exports=function(){return!1}},66024:function(e,t,n){"use strict";n.d(t,{j:function(){return u}});var r=n(82299),o=n(39952);class i extends r.l{constructor(){super(),this.setup=e=>{if(!o.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let u=new i},19481:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});var r=n(39952);let o=function(){let e=[],t=0,n=e=>{e()},o=e=>{e()},i=o=>{t?e.push(o):(0,r.A4)(()=>{n(o)})},u=()=>{let t=e;e=[],t.length&&(0,r.A4)(()=>{o(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{--t||u()}return n},batchCalls:e=>(...t)=>{i(()=>{e(...t)})},schedule:i,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{o=e}}}()},38228:function(e,t,n){"use strict";n.d(t,{N:function(){return u}});var r=n(82299),o=n(39952);class i extends r.l{constructor(){super(),this.setup=e=>{if(!o.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("online",t,!1),window.addEventListener("offline",t,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach(e=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let u=new i},66832:function(e,t,n){"use strict";n.d(t,{DV:function(){return c},Kw:function(){return a},Mz:function(){return l}});var r=n(66024),o=n(38228),i=n(39952);function u(e){return Math.min(1e3*2**e,3e4)}function a(e){return(null!=e?e:"online")!=="online"||o.N.isOnline()}class s{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function c(e){return e instanceof s}function l(e){let t,n,c,l=!1,f=0,d=!1,p=new Promise((e,t)=>{n=e,c=t}),v=()=>!r.j.isFocused()||"always"!==e.networkMode&&!o.N.isOnline(),h=r=>{d||(d=!0,null==e.onSuccess||e.onSuccess(r),null==t||t(),n(r))},b=n=>{d||(d=!0,null==e.onError||e.onError(n),null==t||t(),c(n))},y=()=>new Promise(n=>{t=e=>{let t=d||!v();return t&&n(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,d||null==e.onContinue||e.onContinue()}),m=()=>{let t;if(!d){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(h).catch(t=>{var n,r;if(d)return;let o=null!=(n=e.retry)?n:3,a=null!=(r=e.retryDelay)?r:u,s="function"==typeof a?a(f,t):a,c=!0===o||"number"==typeof o&&f<o||"function"==typeof o&&o(f,t);if(l||!c){b(t);return}f++,null==e.onFail||e.onFail(f,t),(0,i.Gh)(s).then(()=>{if(v())return y()}).then(()=>{l?b(t):m()})})}};return a(e.networkMode)?m():y().then(m),{promise:p,cancel:t=>{d||(b(new s(t)),null==e.abort||e.abort())},continue:()=>(null==t?void 0:t())?p:Promise.resolve(),cancelRetry:()=>{l=!0},continueRetry:()=>{l=!1}}}},82299:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});class r{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(t=>t!==e),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},39952:function(e,t,n){"use strict";n.d(t,{A4:function(){return w},G9:function(){return j},Gh:function(){return x},I6:function(){return c},Kp:function(){return a},PN:function(){return u},Rm:function(){return d},SE:function(){return i},VS:function(){return b},X7:function(){return f},ZT:function(){return o},_v:function(){return s},_x:function(){return l},oE:function(){return E},sk:function(){return r},to:function(){return v},yF:function(){return p}});let r="undefined"==typeof window||"Deno"in window;function o(){}function i(e,t){return"function"==typeof e?e(t):e}function u(e){return"number"==typeof e&&e>=0&&e!==1/0}function a(e,t){return Math.max(e+(t||0)-Date.now(),0)}function s(e,t,n){return _(e)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function c(e,t,n){return _(e)?[{...t,queryKey:e},n]:[e||{},t]}function l(e,t){let{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:u,stale:a}=e;if(_(u)){if(r){if(t.queryHash!==d(u,t.options))return!1}else{if(!h(t.queryKey,u))return!1}}if("all"!==n){let e=t.isActive();if("active"===n&&!e||"inactive"===n&&e)return!1}return("boolean"!=typeof a||t.isStale()===a)&&(void 0===o||o===t.state.fetchStatus)&&(!i||!!i(t))}function f(e,t){let{exact:n,fetching:r,predicate:o,mutationKey:i}=e;if(_(i)){if(!t.options.mutationKey)return!1;if(n){if(p(t.options.mutationKey)!==p(i))return!1}else{if(!h(t.options.mutationKey,i))return!1}}return("boolean"!=typeof r||"loading"===t.state.status===r)&&(!o||!!o(t))}function d(e,t){return((null==t?void 0:t.queryKeyHashFn)||p)(e)}function p(e){return JSON.stringify(e,(e,t)=>m(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function v(e,t){return h(e,t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(n=>!h(e[n],t[n]))}function b(e,t){if(e&&!t||t&&!e)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function y(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function m(e){if(!g(e))return!1;let t=e.constructor;if(void 0===t)return!0;let n=t.prototype;return!!(g(n)&&n.hasOwnProperty("isPrototypeOf"))}function g(e){return"[object Object]"===Object.prototype.toString.call(e)}function _(e){return Array.isArray(e)}function x(e){return new Promise(t=>{setTimeout(t,e)})}function w(e){x(0).then(e)}function j(){if("function"==typeof AbortController)return new AbortController}function E(e,t,n){return null!=n.isDataEqual&&n.isDataEqual(e,t)?e:"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?function e(t,n){if(t===n)return t;let r=y(t)&&y(n);if(r||m(t)&&m(n)){let o=r?t.length:Object.keys(t).length,i=r?n:Object.keys(n),u=i.length,a=r?[]:{},s=0;for(let o=0;o<u;o++){let u=r?o:i[o];a[u]=e(t[u],n[u]),a[u]===t[u]&&s++}return o===u&&s===o?t:a}return n}(e,t):t}},41179:function(e,t,n){"use strict";n.d(t,{NL:function(){return a},aH:function(){return s}});var r=n(7653);let o=r.createContext(void 0),i=r.createContext(!1);function u(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=o),window.ReactQueryClientContext):o)}let a=({context:e}={})=>{let t=r.useContext(u(e,r.useContext(i)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},s=({client:e,children:t,context:n,contextSharing:o=!1})=>{r.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let a=u(n,o);return r.createElement(i.Provider,{value:!n&&o},r.createElement(a.Provider,{value:e},t))}}}]);