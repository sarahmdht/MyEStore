import './polyfills.server.mjs';
import{$ as Y3,A as H2,Aa as o4,B as Y1,C as b,D as o1,E as r1,Ea as b2,F as f1,Fa as r4,G as o,H as r,Ha as d1,I as g,Ia as E,J as y2,Ja as f4,K as j3,Ka as m4,L as w,M as R,N as q3,O as G3,P as U,Q as m1,R as f,S as p2,T as A,U as W3,V as $3,W as X3,X as u1,Y as S,Z as U2,_ as Q1,a as O3,b as R3,ba as Q3,c as B3,d as H3,e as a1,f as i1,fa as K3,g as Z,h as T2,ha as J3,i as x2,j as $1,ja as Z3,k as v,ka as j2,l as V2,la as e2,m as O,ma as c4,n as N2,na as K1,o as B,oa as e4,p as H,q as X1,qa as l4,r as I2,ra as p1,s as O2,sa as s4,t as U3,ta as t4,u as X,ua as l2,v as z,va as n4,w as L,wa as a4,x as R2,xa as i4,y as B2,z as c2}from"./chunk-S7XTWNKX.mjs";import{a as m,b as h,h as u2}from"./chunk-5XUXGTUW.mjs";var u4=()=>{},h3={},V4={},I4=null,O4={mark:u4,measure:u4};try{typeof window<"u"&&(h3=window),typeof document<"u"&&(V4=document),typeof MutationObserver<"u"&&(I4=MutationObserver),typeof performance<"u"&&(O4=performance)}catch{}var{userAgent:p4=""}=h3.navigator||{},n2=h3,N=V4,d4=I4,z1=O4,I5=!!n2.document,K=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",R4=~p4.indexOf("MSIE")||~p4.indexOf("Trident/"),y="classic",B4="duotone",D="sharp",P="sharp-duotone",e6=[y,B4,D,P],l6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},z4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},s6=["kit"],t6=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,n6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,a6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},i6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},o6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},r6={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},f6={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},m6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},H4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},u6=["solid","regular","light","thin","duotone","brands"],U4=[1,2,3,4,5,6,7,8,9,10],p6=U4.concat([11,12,13,14,15,16,17,18,19,20]),q2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d6=[...Object.keys(r6),...u6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q2.GROUP,q2.SWAP_OPACITY,q2.PRIMARY,q2.SECONDARY].concat(U4.map(e=>"".concat(e,"x"))).concat(p6.map(e=>"w-".concat(e))),z6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},L6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},M6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},L4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Y="___FONT_AWESOME___",s3=16,j4="fa",q4="svg-inline--fa",M2="data-fa-i2svg",t3="data-fa-pseudo-element",h6="data-fa-pseudo-element-pending",C3="data-prefix",g3="data-icon",M4="fontawesome-i2svg",C6="async",g6=["HTML","HEAD","STYLE","SCRIPT"],G4=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),W4=[y,D,P];function Q2(e){return new Proxy(e,{get(c,l){return l in c?c[l]:c[y]}})}var $4=m({},H4);$4[y]=m(m(m({},H4[y]),z4.kit),z4["kit-duotone"]);var z2=Q2($4),n3=m({},m6);n3[y]=m(m(m({},n3[y]),L4.kit),L4["kit-duotone"]);var X2=Q2(n3),a3=m({},f6);a3[y]=m(m({},a3[y]),M6.kit);var L2=Q2(a3),i3=m({},o6);i3[y]=m(m({},i3[y]),L6.kit);var x6=Q2(i3),N6=t6,X4="fa-layers-text",y6=n6,b6=m({},l6),O5=Q2(b6),v6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J1=q2,w2=new Set;Object.keys(X2[y]).map(w2.add.bind(w2));Object.keys(X2[D]).map(w2.add.bind(w2));Object.keys(X2[P]).map(w2.add.bind(w2));var S6=[...s6,...d6],W2=n2.FontAwesomeConfig||{};function w6(e){var c=N.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function A6(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(c=>{let[l,s]=c,t=A6(w6(l));t!=null&&(W2[s]=t)});var Y4={styleDefault:"solid",familyDefault:"classic",cssPrefix:j4,replacementClass:q4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};W2.familyPrefix&&(W2.cssPrefix=W2.familyPrefix);var A2=m(m({},Y4),W2);A2.autoReplaceSvg||(A2.observeMutations=!1);var d={};Object.keys(Y4).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(c){A2[e]=c,$2.forEach(l=>l(d))},get:function(){return A2[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){A2.cssPrefix=e,$2.forEach(c=>c(d))},get:function(){return A2.cssPrefix}});n2.FontAwesomeConfig=d;var $2=[];function k6(e){return $2.push(e),()=>{$2.splice($2.indexOf(e),1)}}var s2=s3,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _6(e){if(!e||!K)return;let c=N.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;let l=N.head.childNodes,s=null;for(let t=l.length-1;t>-1;t--){let n=l[t],a=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(s=n)}return N.head.insertBefore(c,s),e}var D6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y2(){let e=12,c="";for(;e-- >0;)c+=D6[Math.random()*62|0];return c}function k2(e){let c=[];for(let l=(e||[]).length>>>0;l--;)c[l]=e[l];return c}function x3(e){return e.classList?k2(e.classList):(e.getAttribute("class")||"").split(" ").filter(c=>c)}function Q4(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P6(e){return Object.keys(e||{}).reduce((c,l)=>c+"".concat(l,'="').concat(Q4(e[l]),'" '),"").trim()}function g1(e){return Object.keys(e||{}).reduce((c,l)=>c+"".concat(l,": ").concat(e[l].trim(),";"),"")}function N3(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function F6(e){let{transform:c,containerWidth:l,iconWidth:s}=e,t={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),a="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),i="rotate(".concat(c.rotate," 0 0)"),u={transform:"".concat(n," ").concat(a," ").concat(i)},p={transform:"translate(".concat(s/2*-1," -256)")};return{outer:t,inner:u,path:p}}function E6(e){let{transform:c,width:l=s3,height:s=s3,startCentered:t=!1}=e,n="";return t&&R4?n+="translate(".concat(c.x/s2-l/2,"em, ").concat(c.y/s2-s/2,"em) "):t?n+="translate(calc(-50% + ".concat(c.x/s2,"em), calc(-50% + ").concat(c.y/s2,"em)) "):n+="translate(".concat(c.x/s2,"em, ").concat(c.y/s2,"em) "),n+="scale(".concat(c.size/s2*(c.flipX?-1:1),", ").concat(c.size/s2*(c.flipY?-1:1),") "),n+="rotate(".concat(c.rotate,"deg) "),n}var T6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function K4(){let e=j4,c=q4,l=d.cssPrefix,s=d.replacementClass,t=T6;if(l!==e||s!==c){let n=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(c),"g");t=t.replace(n,".".concat(l,"-")).replace(a,"--".concat(l,"-")).replace(i,".".concat(s))}return t}var h4=!1;function Z1(){d.autoAddCss&&!h4&&(_6(K4()),h4=!0)}var V6={mixout(){return{dom:{css:K4,insertCss:Z1}}},hooks(){return{beforeDOMElementCreation(){Z1()},beforeI2svg(){Z1()}}}},Q=n2||{};Q[Y]||(Q[Y]={});Q[Y].styles||(Q[Y].styles={});Q[Y].hooks||(Q[Y].hooks={});Q[Y].shims||(Q[Y].shims=[]);var q=Q[Y],J4=[],Z4=function(){N.removeEventListener("DOMContentLoaded",Z4),h1=1,J4.map(e=>e())},h1=!1;K&&(h1=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),h1||N.addEventListener("DOMContentLoaded",Z4));function I6(e){K&&(h1?setTimeout(e,0):J4.push(e))}function K2(e){let{tag:c,attributes:l={},children:s=[]}=e;return typeof e=="string"?Q4(e):"<".concat(c," ").concat(P6(l),">").concat(s.map(K2).join(""),"</").concat(c,">")}function C4(e,c,l){if(e&&e[c]&&e[c][l])return{prefix:c,iconName:l,icon:e[c][l]}}var O6=function(c,l){return function(s,t,n,a){return c.call(l,s,t,n,a)}},c3=function(c,l,s,t){var n=Object.keys(c),a=n.length,i=t!==void 0?O6(l,t):l,u,p,M;for(s===void 0?(u=1,M=c[n[0]]):(u=0,M=s);u<a;u++)p=n[u],M=i(M,c[p],p,c);return M};function R6(e){let c=[],l=0,s=e.length;for(;l<s;){let t=e.charCodeAt(l++);if(t>=55296&&t<=56319&&l<s){let n=e.charCodeAt(l++);(n&64512)==56320?c.push(((t&1023)<<10)+(n&1023)+65536):(c.push(t),l--)}else c.push(t)}return c}function o3(e){let c=R6(e);return c.length===1?c[0].toString(16):null}function B6(e,c){let l=e.length,s=e.charCodeAt(c),t;return s>=55296&&s<=56319&&l>c+1&&(t=e.charCodeAt(c+1),t>=56320&&t<=57343)?(s-55296)*1024+t-56320+65536:s}function g4(e){return Object.keys(e).reduce((c,l)=>{let s=e[l];return!!s.icon?c[s.iconName]=s.icon:c[l]=s,c},{})}function r3(e,c){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=l,t=g4(c);typeof q.hooks.addPack=="function"&&!s?q.hooks.addPack(e,g4(c)):q.styles[e]=m(m({},q.styles[e]||{}),t),e==="fas"&&r3("fa",c)}var{styles:d2,shims:H6}=q,U6={[y]:Object.values(L2[y]),[D]:Object.values(L2[D]),[P]:Object.values(L2[P])},y3=null,c0={},e0={},l0={},s0={},t0={},j6={[y]:Object.keys(z2[y]),[D]:Object.keys(z2[D]),[P]:Object.keys(z2[P])};function q6(e){return~S6.indexOf(e)}function G6(e,c){let l=c.split("-"),s=l[0],t=l.slice(1).join("-");return s===e&&t!==""&&!q6(t)?t:null}var n0=()=>{let e=s=>c3(d2,(t,n,a)=>(t[a]=c3(n,s,{}),t),{});c0=e((s,t,n)=>(t[3]&&(s[t[3]]=n),t[2]&&t[2].filter(i=>typeof i=="number").forEach(i=>{s[i.toString(16)]=n}),s)),e0=e((s,t,n)=>(s[n]=n,t[2]&&t[2].filter(i=>typeof i=="string").forEach(i=>{s[i]=n}),s)),t0=e((s,t,n)=>{let a=t[2];return s[n]=n,a.forEach(i=>{s[i]=n}),s});let c="far"in d2||d.autoFetchSvg,l=c3(H6,(s,t)=>{let n=t[0],a=t[1],i=t[2];return a==="far"&&!c&&(a="fas"),typeof n=="string"&&(s.names[n]={prefix:a,iconName:i}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:a,iconName:i}),s},{names:{},unicodes:{}});l0=l.names,s0=l.unicodes,y3=x1(d.styleDefault,{family:d.familyDefault})};k6(e=>{y3=x1(e.styleDefault,{family:d.familyDefault})});n0();function b3(e,c){return(c0[e]||{})[c]}function W6(e,c){return(e0[e]||{})[c]}function t2(e,c){return(t0[e]||{})[c]}function a0(e){return l0[e]||{prefix:null,iconName:null}}function $6(e){let c=s0[e],l=b3("fas",e);return c||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function a2(){return y3}var v3=()=>({prefix:null,iconName:null,rest:[]});function x1(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=y}=c,s=z2[l][e],t=X2[l][e]||X2[l][s],n=e in q.styles?e:null;return t||n||null}var X6={[y]:Object.keys(L2[y]),[D]:Object.keys(L2[D]),[P]:Object.keys(L2[P])};function N1(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=c,s={[y]:"".concat(d.cssPrefix,"-").concat(y),[D]:"".concat(d.cssPrefix,"-").concat(D),[P]:"".concat(d.cssPrefix,"-").concat(P)},t=null,n=y,a=e6.filter(u=>u!==B4);a.forEach(u=>{(e.includes(s[u])||e.some(p=>X6[u].includes(p)))&&(n=u)});let i=e.reduce((u,p)=>{let M=G6(d.cssPrefix,p);if(d2[p]?(p=U6[n].includes(p)?x6[n][p]:p,t=p,u.prefix=p):j6[n].indexOf(p)>-1?(t=p,u.prefix=x1(p,{family:n})):M?u.iconName=M:p!==d.replacementClass&&!a.some(x=>p===s[x])&&u.rest.push(p),!l&&u.prefix&&u.iconName){let x=t==="fa"?a0(u.iconName):{},C=t2(u.prefix,u.iconName);x.prefix&&(t=null),u.iconName=x.iconName||C||u.iconName,u.prefix=x.prefix||u.prefix,u.prefix==="far"&&!d2.far&&d2.fas&&!d.autoFetchSvg&&(u.prefix="fas")}return u},v3());return(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===D&&(d2.fass||d.autoFetchSvg)&&(i.prefix="fass",i.iconName=t2(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===P&&(d2.fasds||d.autoFetchSvg)&&(i.prefix="fasds",i.iconName=t2(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||t==="fa")&&(i.prefix=a2()||"fas"),i}var f3=class{constructor(){this.definitions={}}add(){for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];let t=l.reduce(this._pullDefinitions,{});Object.keys(t).forEach(n=>{this.definitions[n]=m(m({},this.definitions[n]||{}),t[n]),r3(n,t[n]);let a=L2[y][n];a&&r3(a,t[n]),n0()})}reset(){this.definitions={}}_pullDefinitions(c,l){let s=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(s).map(t=>{let{prefix:n,iconName:a,icon:i}=s[t],u=i[2];c[n]||(c[n]={}),u.length>0&&u.forEach(p=>{typeof p=="string"&&(c[n][p]=i)}),c[n][a]=i}),c}},x4=[],v2={},S2={},Y6=Object.keys(S2);function Q6(e,c){let{mixoutsTo:l}=c;return x4=e,v2={},Object.keys(S2).forEach(s=>{Y6.indexOf(s)===-1&&delete S2[s]}),x4.forEach(s=>{let t=s.mixout?s.mixout():{};if(Object.keys(t).forEach(n=>{typeof t[n]=="function"&&(l[n]=t[n]),typeof t[n]=="object"&&Object.keys(t[n]).forEach(a=>{l[n]||(l[n]={}),l[n][a]=t[n][a]})}),s.hooks){let n=s.hooks();Object.keys(n).forEach(a=>{v2[a]||(v2[a]=[]),v2[a].push(n[a])})}s.provides&&s.provides(S2)}),l}function m3(e,c){for(var l=arguments.length,s=new Array(l>2?l-2:0),t=2;t<l;t++)s[t-2]=arguments[t];return(v2[e]||[]).forEach(a=>{c=a.apply(null,[c,...s])}),c}function h2(e){for(var c=arguments.length,l=new Array(c>1?c-1:0),s=1;s<c;s++)l[s-1]=arguments[s];(v2[e]||[]).forEach(n=>{n.apply(null,l)})}function i2(){let e=arguments[0],c=Array.prototype.slice.call(arguments,1);return S2[e]?S2[e].apply(null,c):void 0}function u3(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:c}=e,l=e.prefix||a2();if(c)return c=t2(l,c)||c,C4(i0.definitions,l,c)||C4(q.styles,l,c)}var i0=new f3,K6=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,h2("noAuto")},J6={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K?(h2("beforeI2svg",e),i2("pseudoElements2svg",e),i2("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:c}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,I6(()=>{c8({autoReplaceSvgRoot:c}),h2("watch",e)})}},Z6={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:t2(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],l=x1(e[0]);return{prefix:l,iconName:t2(l,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(N6))){let c=N1(e.split(" "),{skipLookups:!0});return{prefix:c.prefix||a2(),iconName:t2(c.prefix,c.iconName)||c.iconName}}if(typeof e=="string"){let c=a2();return{prefix:c,iconName:t2(c,e)||e}}}},F={noAuto:K6,config:d,dom:J6,parse:Z6,library:i0,findIconDefinition:u3,toHtml:K2},c8=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:c=N}=e;(Object.keys(q.styles).length>0||d.autoFetchSvg)&&K&&d.autoReplaceSvg&&F.dom.i2svg({node:c})};function y1(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(l=>K2(l))}}),Object.defineProperty(e,"node",{get:function(){if(!K)return;let l=N.createElement("div");return l.innerHTML=e.html,l.children}}),e}function e8(e){let{children:c,main:l,mask:s,attributes:t,styles:n,transform:a}=e;if(N3(a)&&l.found&&!s.found){let{width:i,height:u}=l,p={x:i/u/2,y:.5};t.style=g1(h(m({},n),{"transform-origin":"".concat(p.x+a.x/16,"em ").concat(p.y+a.y/16,"em")}))}return[{tag:"svg",attributes:t,children:c}]}function l8(e){let{prefix:c,iconName:l,children:s,attributes:t,symbol:n}=e,a=n===!0?"".concat(c,"-").concat(d.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(m({},t),{id:a}),children:s}]}]}function S3(e){let{icons:{main:c,mask:l},prefix:s,iconName:t,transform:n,symbol:a,title:i,maskId:u,titleId:p,extra:M,watchable:x=!1}=e,{width:C,height:k}=l.found?l:c,J=s==="fak",m2=[d.replacementClass,t?"".concat(d.cssPrefix,"-").concat(t):""].filter(g2=>M.classes.indexOf(g2)===-1).filter(g2=>g2!==""||!!g2).concat(M.classes).join(" "),V={children:[],attributes:h(m({},M.attributes),{"data-prefix":s,"data-icon":t,class:m2,role:M.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(k)})},$=J&&!~M.classes.indexOf("fa-fw")?{width:"".concat(C/k*16*.0625,"em")}:{};x&&(V.attributes[M2]=""),i&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(p||Y2())},children:[i]}),delete V.attributes.title);let _=h(m({},V),{prefix:s,iconName:t,main:c,mask:l,maskId:u,transform:n,symbol:a,styles:m(m({},$),M.styles)}),{children:I,attributes:C2}=l.found&&c.found?i2("generateAbstractMask",_)||{children:[],attributes:{}}:i2("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=I,_.attributes=C2,a?l8(_):e8(_)}function N4(e){let{content:c,width:l,height:s,transform:t,title:n,extra:a,watchable:i=!1}=e,u=h(m(m({},a.attributes),n?{title:n}:{}),{class:a.classes.join(" ")});i&&(u[M2]="");let p=m({},a.styles);N3(t)&&(p.transform=E6({transform:t,startCentered:!0,width:l,height:s}),p["-webkit-transform"]=p.transform);let M=g1(p);M.length>0&&(u.style=M);let x=[];return x.push({tag:"span",attributes:u,children:[c]}),n&&x.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),x}function s8(e){let{content:c,title:l,extra:s}=e,t=h(m(m({},s.attributes),l?{title:l}:{}),{class:s.classes.join(" ")}),n=g1(s.styles);n.length>0&&(t.style=n);let a=[];return a.push({tag:"span",attributes:t,children:[c]}),l&&a.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),a}var{styles:e3}=q;function p3(e){let c=e[0],l=e[1],[s]=e.slice(4),t=null;return Array.isArray(s)?t={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(J1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(J1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(J1.PRIMARY),fill:"currentColor",d:s[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:l,icon:t}}var t8={found:!1,width:512,height:512};function n8(e,c){!G4&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function d3(e,c){let l=c;return c==="fa"&&d.styleDefault!==null&&(c=a2()),new Promise((s,t)=>{if(l==="fa"){let n=a0(e)||{};e=n.iconName||e,c=n.prefix||c}if(e&&c&&e3[c]&&e3[c][e]){let n=e3[c][e];return s(p3(n))}n8(e,c),s(h(m({},t8),{icon:d.showMissingIcons&&e?i2("missingIconAbstract")||{}:{}}))})}var y4=()=>{},z3=d.measurePerformance&&z1&&z1.mark&&z1.measure?z1:{mark:y4,measure:y4},G2='FA "6.6.0"',a8=e=>(z3.mark("".concat(G2," ").concat(e," begins")),()=>o0(e)),o0=e=>{z3.mark("".concat(G2," ").concat(e," ends")),z3.measure("".concat(G2," ").concat(e),"".concat(G2," ").concat(e," begins"),"".concat(G2," ").concat(e," ends"))},w3={begin:a8,end:o0},L1=()=>{};function b4(e){return typeof(e.getAttribute?e.getAttribute(M2):null)=="string"}function i8(e){let c=e.getAttribute?e.getAttribute(C3):null,l=e.getAttribute?e.getAttribute(g3):null;return c&&l}function o8(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function r8(){return d.autoReplaceSvg===!0?M1.replace:M1[d.autoReplaceSvg]||M1.replace}function f8(e){return N.createElementNS("http://www.w3.org/2000/svg",e)}function m8(e){return N.createElement(e)}function r0(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=e.tag==="svg"?f8:m8}=c;if(typeof e=="string")return N.createTextNode(e);let s=l(e.tag);return Object.keys(e.attributes||[]).forEach(function(n){s.setAttribute(n,e.attributes[n])}),(e.children||[]).forEach(function(n){s.appendChild(r0(n,{ceFn:l}))}),s}function u8(e){let c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var M1={replace:function(e){let c=e[0];if(c.parentNode)if(e[1].forEach(l=>{c.parentNode.insertBefore(r0(l),c)}),c.getAttribute(M2)===null&&d.keepOriginalSource){let l=N.createComment(u8(c));c.parentNode.replaceChild(l,c)}else c.remove()},nest:function(e){let c=e[0],l=e[1];if(~x3(c).indexOf(d.replacementClass))return M1.replace(e);let s=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((a,i)=>(i===d.replacementClass||i.match(s)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",n.toNode.join(" "))}let t=l.map(n=>K2(n)).join(`
`);c.setAttribute(M2,""),c.innerHTML=t}};function v4(e){e()}function f0(e,c){let l=typeof c=="function"?c:L1;if(e.length===0)l();else{let s=v4;d.mutateApproach===C6&&(s=n2.requestAnimationFrame||v4),s(()=>{let t=r8(),n=w3.begin("mutate");e.map(t),n(),l()})}}var A3=!1;function m0(){A3=!0}function L3(){A3=!1}var C1=null;function S4(e){if(!d4||!d.observeMutations)return;let{treeCallback:c=L1,nodeCallback:l=L1,pseudoElementsCallback:s=L1,observeMutationsRoot:t=N}=e;C1=new d4(n=>{if(A3)return;let a=a2();k2(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!b4(i.addedNodes[0])&&(d.searchPseudoElements&&s(i.target),c(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&s(i.target.parentNode),i.type==="attributes"&&b4(i.target)&&~v6.indexOf(i.attributeName))if(i.attributeName==="class"&&i8(i.target)){let{prefix:u,iconName:p}=N1(x3(i.target));i.target.setAttribute(C3,u||a),p&&i.target.setAttribute(g3,p)}else o8(i.target)&&l(i.target)})}),K&&C1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function p8(){C1&&C1.disconnect()}function d8(e){let c=e.getAttribute("style"),l=[];return c&&(l=c.split(";").reduce((s,t)=>{let n=t.split(":"),a=n[0],i=n.slice(1);return a&&i.length>0&&(s[a]=i.join(":").trim()),s},{})),l}function z8(e){let c=e.getAttribute("data-prefix"),l=e.getAttribute("data-icon"),s=e.innerText!==void 0?e.innerText.trim():"",t=N1(x3(e));return t.prefix||(t.prefix=a2()),c&&l&&(t.prefix=c,t.iconName=l),t.iconName&&t.prefix||(t.prefix&&s.length>0&&(t.iconName=W6(t.prefix,e.innerText)||b3(t.prefix,o3(e.innerText))),!t.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=e.firstChild.data)),t}function L8(e){let c=k2(e.attributes).reduce((t,n)=>(t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t),{}),l=e.getAttribute("title"),s=e.getAttribute("data-fa-title-id");return d.autoA11y&&(l?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(s||Y2()):(c["aria-hidden"]="true",c.focusable="false")),c}function M8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function w4(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:s,rest:t}=z8(e),n=L8(e),a=m3("parseNodeAttributes",{},e),i=c.styleParser?d8(e):[];return m({iconName:l,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:t,styles:i,attributes:n}},a)}var{styles:h8}=q;function u0(e){let c=d.autoReplaceSvg==="nest"?w4(e,{styleParser:!1}):w4(e);return~c.extra.classes.indexOf(X4)?i2("generateLayersText",e,c):i2("generateSvgReplacementMutation",e,c)}var G=new Set;W4.map(e=>{G.add("fa-".concat(e))});Object.keys(z2[y]).map(G.add.bind(G));Object.keys(z2[D]).map(G.add.bind(G));Object.keys(z2[P]).map(G.add.bind(G));G=[...G];function A4(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K)return Promise.resolve();let l=N.documentElement.classList,s=M=>l.add("".concat(M4,"-").concat(M)),t=M=>l.remove("".concat(M4,"-").concat(M)),n=d.autoFetchSvg?G:W4.map(M=>"fa-".concat(M)).concat(Object.keys(h8));n.includes("fa")||n.push("fa");let a=[".".concat(X4,":not([").concat(M2,"])")].concat(n.map(M=>".".concat(M,":not([").concat(M2,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=k2(e.querySelectorAll(a))}catch{}if(i.length>0)s("pending"),t("complete");else return Promise.resolve();let u=w3.begin("onTree"),p=i.reduce((M,x)=>{try{let C=u0(x);C&&M.push(C)}catch(C){G4||C.name==="MissingIcon"&&console.error(C)}return M},[]);return new Promise((M,x)=>{Promise.all(p).then(C=>{f0(C,()=>{s("active"),s("complete"),t("pending"),typeof c=="function"&&c(),u(),M()})}).catch(C=>{u(),x(C)})})}function C8(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;u0(e).then(l=>{l&&f0([l],c)})}function g8(e){return function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(c||{}).icon?c:u3(c||{}),{mask:t}=l;return t&&(t=(t||{}).icon?t:u3(t||{})),e(s,h(m({},l),{mask:t}))}}var x8=function(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=j,symbol:s=!1,mask:t=null,maskId:n=null,title:a=null,titleId:i=null,classes:u=[],attributes:p={},styles:M={}}=c;if(!e)return;let{prefix:x,iconName:C,icon:k}=e;return y1(m({type:"icon"},e),()=>(h2("beforeDOMElementCreation",{iconDefinition:e,params:c}),d.autoA11y&&(a?p["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||Y2()):(p["aria-hidden"]="true",p.focusable="false")),S3({icons:{main:p3(k),mask:t?p3(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:C,transform:m(m({},j),l),symbol:s,title:a,maskId:n,titleId:i,extra:{attributes:p,styles:M,classes:u}})))},N8={mixout(){return{icon:g8(x8)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=A4,e.nodeCallback=C8,e}}},provides(e){e.i2svg=function(c){let{node:l=N,callback:s=()=>{}}=c;return A4(l,s)},e.generateSvgReplacementMutation=function(c,l){let{iconName:s,title:t,titleId:n,prefix:a,transform:i,symbol:u,mask:p,maskId:M,extra:x}=l;return new Promise((C,k)=>{Promise.all([d3(s,a),p.iconName?d3(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(J=>{let[m2,V]=J;C([c,S3({icons:{main:m2,mask:V},prefix:a,iconName:s,transform:i,symbol:u,maskId:M,title:t,titleId:n,extra:x,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(c){let{children:l,attributes:s,main:t,transform:n,styles:a}=c,i=g1(a);i.length>0&&(s.style=i);let u;return N3(n)&&(u=i2("generateAbstractTransformGrouping",{main:t,transform:n,containerWidth:t.width,iconWidth:t.width})),l.push(u||t.icon),{children:l,attributes:s}}}},y8={mixout(){return{layer(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=c;return y1({type:"layer"},()=>{h2("beforeDOMElementCreation",{assembler:e,params:c});let s=[];return e(t=>{Array.isArray(t)?t.map(n=>{s=s.concat(n.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...l].join(" ")},children:s}]})}}}},b8={mixout(){return{counter(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:s=[],attributes:t={},styles:n={}}=c;return y1({type:"counter",content:e},()=>(h2("beforeDOMElementCreation",{content:e,params:c}),s8({content:e.toString(),title:l,extra:{attributes:t,styles:n,classes:["".concat(d.cssPrefix,"-layers-counter"),...s]}})))}}}},v8={mixout(){return{text(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=j,title:s=null,classes:t=[],attributes:n={},styles:a={}}=c;return y1({type:"text",content:e},()=>(h2("beforeDOMElementCreation",{content:e,params:c}),N4({content:e,transform:m(m({},j),l),title:s,extra:{attributes:n,styles:a,classes:["".concat(d.cssPrefix,"-layers-text"),...t]}})))}}},provides(e){e.generateLayersText=function(c,l){let{title:s,transform:t,extra:n}=l,a=null,i=null;if(R4){let u=parseInt(getComputedStyle(c).fontSize,10),p=c.getBoundingClientRect();a=p.width/u,i=p.height/u}return d.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([c,N4({content:c.innerHTML,width:a,height:i,transform:t,title:s,extra:n,watchable:!0})])}}},S8=new RegExp('"',"ug"),k4=[1105920,1112319],_4=m(m(m({FontAwesome:{normal:"fas",400:"fas"}},i6),a6),z6),M3=Object.keys(_4).reduce((e,c)=>(e[c.toLowerCase()]=_4[c],e),{}),w8=Object.keys(M3).reduce((e,c)=>{let l=M3[c];return e[c]=l[900]||[...Object.entries(l)][0][1],e},{});function A8(e){let c=e.replace(S8,""),l=B6(c,0),s=l>=k4[0]&&l<=k4[1],t=c.length===2?c[0]===c[1]:!1;return{value:o3(t?c[0]:c),isSecondary:s||t}}function k8(e,c){let l=e.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(c),t=isNaN(s)?"normal":s;return(M3[l]||{})[t]||w8[l]}function D4(e,c){let l="".concat(h6).concat(c.replace(":","-"));return new Promise((s,t)=>{if(e.getAttribute(l)!==null)return s();let a=k2(e.children).filter(C=>C.getAttribute(t3)===c)[0],i=n2.getComputedStyle(e,c),u=i.getPropertyValue("font-family"),p=u.match(y6),M=i.getPropertyValue("font-weight"),x=i.getPropertyValue("content");if(a&&!p)return e.removeChild(a),s();if(p&&x!=="none"&&x!==""){let C=i.getPropertyValue("content"),k=k8(u,M),{value:J,isSecondary:m2}=A8(C),V=p[0].startsWith("FontAwesome"),$=b3(k,J),_=$;if(V){let I=$6(J);I.iconName&&I.prefix&&($=I.iconName,k=I.prefix)}if($&&!m2&&(!a||a.getAttribute(C3)!==k||a.getAttribute(g3)!==_)){e.setAttribute(l,_),a&&e.removeChild(a);let I=M8(),{extra:C2}=I;C2.attributes[t3]=c,d3($,k).then(g2=>{let Z0=S3(h(m({},I),{icons:{main:g2,mask:v3()},prefix:k,iconName:_,extra:C2,watchable:!0})),W1=N.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(W1,e.firstChild):e.appendChild(W1),W1.outerHTML=Z0.map(c6=>K2(c6)).join(`
`),e.removeAttribute(l),s()}).catch(t)}else s()}else s()})}function _8(e){return Promise.all([D4(e,"::before"),D4(e,"::after")])}function D8(e){return e.parentNode!==document.head&&!~g6.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(t3)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function P4(e){if(K)return new Promise((c,l)=>{let s=k2(e.querySelectorAll("*")).filter(D8).map(_8),t=w3.begin("searchPseudoElements");m0(),Promise.all(s).then(()=>{t(),L3(),c()}).catch(()=>{t(),L3(),l()})})}var P8={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=P4,e}}},provides(e){e.pseudoElements2svg=function(c){let{node:l=N}=c;d.searchPseudoElements&&P4(l)}}},F4=!1,F8={mixout(){return{dom:{unwatch(){m0(),F4=!0}}}},hooks(){return{bootstrap(){S4(m3("mutationObserverCallbacks",{}))},noAuto(){p8()},watch(e){let{observeMutationsRoot:c}=e;F4?L3():S4(m3("mutationObserverCallbacks",{observeMutationsRoot:c}))}}}},E4=e=>{let c={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((l,s)=>{let t=s.toLowerCase().split("-"),n=t[0],a=t.slice(1).join("-");if(n&&a==="h")return l.flipX=!0,l;if(n&&a==="v")return l.flipY=!0,l;if(a=parseFloat(a),isNaN(a))return l;switch(n){case"grow":l.size=l.size+a;break;case"shrink":l.size=l.size-a;break;case"left":l.x=l.x-a;break;case"right":l.x=l.x+a;break;case"up":l.y=l.y-a;break;case"down":l.y=l.y+a;break;case"rotate":l.rotate=l.rotate+a;break}return l},c)},E8={mixout(){return{parse:{transform:e=>E4(e)}}},hooks(){return{parseNodeAttributes(e,c){let l=c.getAttribute("data-fa-transform");return l&&(e.transform=E4(l)),e}}},provides(e){e.generateAbstractTransformGrouping=function(c){let{main:l,transform:s,containerWidth:t,iconWidth:n}=c,a={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),p="rotate(".concat(s.rotate," 0 0)"),M={transform:"".concat(i," ").concat(u," ").concat(p)},x={transform:"translate(".concat(n/2*-1," -256)")},C={outer:a,inner:M,path:x};return{tag:"g",attributes:m({},C.outer),children:[{tag:"g",attributes:m({},C.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:m(m({},l.icon.attributes),C.path)}]}]}}}},l3={x:0,y:0,width:"100%",height:"100%"};function T4(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function T8(e){return e.tag==="g"?e.children:[e]}var V8={hooks(){return{parseNodeAttributes(e,c){let l=c.getAttribute("data-fa-mask"),s=l?N1(l.split(" ").map(t=>t.trim())):v3();return s.prefix||(s.prefix=a2()),e.mask=s,e.maskId=c.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(c){let{children:l,attributes:s,main:t,mask:n,maskId:a,transform:i}=c,{width:u,icon:p}=t,{width:M,icon:x}=n,C=F6({transform:i,containerWidth:M,iconWidth:u}),k={tag:"rect",attributes:h(m({},l3),{fill:"white"})},J=p.children?{children:p.children.map(T4)}:{},m2={tag:"g",attributes:m({},C.inner),children:[T4(m({tag:p.tag,attributes:m(m({},p.attributes),C.path)},J))]},V={tag:"g",attributes:m({},C.outer),children:[m2]},$="mask-".concat(a||Y2()),_="clip-".concat(a||Y2()),I={tag:"mask",attributes:h(m({},l3),{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,V]},C2={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:T8(x)},I]};return l.push(C2,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat($,")")},l3)}),{children:l,attributes:s}}}},I8={provides(e){let c=!1;n2.matchMedia&&(c=n2.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let l=[],s={fill:"currentColor"},t={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:h(m({},s),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=h(m({},t),{attributeName:"opacity"}),a={tag:"circle",attributes:h(m({},s),{cx:"256",cy:"364",r:"28"}),children:[]};return c||a.children.push({tag:"animate",attributes:h(m({},t),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(m({},n),{values:"1;0;1;1;0;1;"})}),l.push(a),l.push({tag:"path",attributes:h(m({},s),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:c?[]:[{tag:"animate",attributes:h(m({},n),{values:"1;0;0;0;0;1;"})}]}),c||l.push({tag:"path",attributes:h(m({},s),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(m({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},O8={hooks(){return{parseNodeAttributes(e,c){let l=c.getAttribute("data-fa-symbol"),s=l===null?!1:l===""?!0:l;return e.symbol=s,e}}}},R8=[V6,N8,y8,b8,v8,P8,F8,E8,V8,I8,O8];Q6(R8,{mixoutsTo:F});var R5=F.noAuto,p0=F.config,B5=F.library,d0=F.dom,z0=F.parse,H5=F.findIconDefinition,U5=F.toHtml,L0=F.icon,j5=F.layer,B8=F.text,H8=F.counter;var U8=["*"],j8=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},q8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},G8=e=>{let c={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(c).map(l=>c[l]?l:null).filter(l=>l)},k3=new WeakSet,M0="fa-auto-css";function W8(e,c){if(!c.autoAddCss||k3.has(e))return;if(e.getElementById(M0)!=null){c.autoAddCss=!1,k3.add(e);return}let l=e.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",M0),l.innerHTML=d0.css();let s=e.head.childNodes,t=null;for(let n=s.length-1;n>-1;n--){let a=s[n],i=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(t=a)}e.head.insertBefore(l,t),c.autoAddCss=!1,k3.add(e)}var $8=e=>e.prefix!==void 0&&e.iconName!==void 0,X8=(e,c)=>$8(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:c,iconName:e},Y8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(s){p0.autoAddCss=s,this._autoAddCss=s}get autoAddCss(){return this._autoAddCss}};c.\u0275fac=function(t){return new(t||c)},c.\u0275prov=Z({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})(),Q8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...s){for(let t of s){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let n of t.icon[2])typeof n=="string"&&(this.definitions[t.prefix][n]=t)}}addIconPacks(...s){for(let t of s){let n=Object.keys(t).map(a=>t[a]);this.addIcons(...n)}}getIconDefinition(s,t){return s in this.definitions&&t in this.definitions[s]?this.definitions[s][t]:null}};c.\u0275fac=function(t){return new(t||c)},c.\u0275prov=Z({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})(),K8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(t){return new(t||c)},c.\u0275dir=O({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[N2]});let e=c;return e})(),J8=(()=>{let c=class c{constructor(s,t){this.renderer=s,this.elementRef=t}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}};c.\u0275fac=function(t){return new(t||c)(L(R2),L(O2))},c.\u0275cmp=v({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[N2,S],ngContentSelectors:U8,decls:1,vars:0,template:function(t,n){t&1&&(q3(),G3(0))},encapsulation:2});let e=c;return e})(),b1=(()=>{let c=class c{constructor(s,t,n,a,i){this.sanitizer=s,this.config=t,this.iconLibrary=n,this.stackItem=a,this.document=$1(e4),i!=null&&a==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null){q8();return}if(s){let t=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(t!=null){let n=this.buildParams();W8(this.document,this.config);let a=L0(t,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(s){let t=X8(s,this.config.defaultPrefix);if("icon"in t)return t;let n=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return n??(j8(t),null)}buildParams(){let s={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},t=typeof this.transform=="string"?z0.transform(this.transform):this.transform;return{title:this.title,transform:t,classes:G8(s),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};c.\u0275fac=function(t){return new(t||c)(L(a4),L(Y8),L(Q8),L(K8,8),L(J8,8))},c.\u0275cmp=v({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,n){t&2&&(j3("innerHTML",n.renderedIconHTML,U3),Y1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[N2,S],decls:0,vars:0,template:function(t,n){},encapsulation:2});let e=c;return e})();var v1=(()=>{let c=class c{};c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=V2({type:c}),c.\u0275inj=T2({});let e=c;return e})();var C0={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]};var g0={prefix:"fas",iconName:"tag",icon:[448,512,[127991],"f02b","M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};var S1={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};var x0={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]};var N0={prefix:"fas",iconName:"store",icon:[576,512,[],"f54e","M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"]};var w1=class{items=[];get totalPrice(){let c=0;return this.items.forEach(l=>{c+=l.totalitem}),parseFloat(c.toFixed(2))}};var J2=class{id;product;constructor(c){this.product=c,this.totalitem,this.price}get price(){return this.product.discount>0&&this.product.discount<this.product.price?this.product.price-this.product.discount:this.product.price}get totalitem(){return this.price*this.product.quantity}};var W=class e{cart=new w1;constructor(){}addToCart(c){let l=this.cart.items.find(s=>s.product.id===c.id);if(l){this.changeQuantity(c.id,l.product.quantity+1);return}this.cart.items.push(new J2(c))}removeFromCart(c){this.cart.items=this.cart.items.filter(l=>l.product.id!=c)}changeQuantity(c,l){let s=this.cart.items.find(t=>t.product.id===c);s&&(s.product.quantity=l)}getCart(){return this.cart}static \u0275fac=function(l){return new(l||e)};static \u0275prov=Z({token:e,factory:e.\u0275fac,providedIn:"root"})};var k1=class e{constructor(c){this.cartService=c;this.setCart()}home=x0;department=N0;deals=g0;cart=S1;account=C0;carttotal;setCart(){this.carttotal=this.cartService.getCart()}static \u0275fac=function(l){return new(l||e)(L(W))};static \u0275cmp=v({type:e,selectors:[["app-header"]],standalone:!0,features:[S],decls:34,vars:7,consts:[[1,"mainHeader"],["routerLink","",1,"logo"],["src","./img/logo.png","alt","myEstore logo","width","50","height","50"],[1,"cartBox"],["routerLink","cart",1,"cartData"],[3,"icon"],[1,"navMenu"],[1,"nav"],["routerLink","","routerLinkActive","active"],["routerLink",""],["routerLink","cart"]],template:function(l,s){l&1&&(o(0,"header")(1,"section",0)(2,"a",1),g(3,"img",2),o(4,"h1"),f(5,"myEstore"),r()(),o(6,"div",3)(7,"a",4),g(8,"fa-icon",5),f(9," - "),o(10,"span"),f(11),r()()()(),o(12,"section",6)(13,"ul",7)(14,"li")(15,"a",8),g(16,"fa-icon",5),f(17," Home"),r()(),o(18,"li")(19,"a",9),g(20,"fa-icon",5),f(21," Departments"),r()(),o(22,"li")(23,"a",9),g(24,"fa-icon",5),f(25," Deals"),r()(),o(26,"li")(27,"a",10),g(28,"fa-icon",5),f(29," Cart"),r()(),o(30,"li")(31,"a",9),g(32,"fa-icon",5),f(33," Account"),r()()()()()),l&2&&(z(8),b("icon",s.cart),z(3),A("$",s.carttotal.totalPrice," "),z(5),b("icon",s.home),z(4),b("icon",s.department),z(4),b("icon",s.deals),z(4),b("icon",s.cart),z(4),b("icon",s.account))},dependencies:[E,f4,v1,b1],styles:["header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:36px 36px 4px;margin:0;border-bottom:4px solid var(--warning-color);background-color:var(--primary-color);color:var(--secondary-color)}.mainHeader[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.logo[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-decoration:none;cursor:pointer}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Merienda,serif;font-weight:800;font-size:40px;color:var(--warning-color);margin:0 0 0 16px}.navMenu[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.nav[_ngcontent-%COMP%]{display:flex;list-style-type:none;font-size:16px;font-weight:700;font-family:Verdana,Tahoma,sans-serif}.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:24px}a[_ngcontent-%COMP%]{color:var(--secondary-color)}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{color:var(--warning-color)}.cartBox[_ngcontent-%COMP%]{background-color:var(--warning-color);padding:16px;width:100px;border-radius:20px;margin:8px}.cartData[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:800}.cartBox[_ngcontent-%COMP%]:hover{background-color:var(--secondary-color)}.cartData[_ngcontent-%COMP%]:hover{color:var(--primary-color)}@media (max-width: 576px){header[_ngcontent-%COMP%]{justify-content:center}.mainHeader[_ngcontent-%COMP%]{justify-content:center}}"]})};var _1=class e{static \u0275fac=function(l){return new(l||e)};static \u0275cmp=v({type:e,selectors:[["app-footer"]],standalone:!0,features:[S],decls:51,vars:0,consts:[["routerLink","",1,"firstCol"],[1,"logoSection"],["src","./img/logo.png","alt","myEstore logo","width","40","height","40"],["routerLink",""],["routerLink","cart"],[1,"lang"],["id","language"],["value","arabic"],["value","english"],["value","french"]],template:function(l,s){l&1&&(o(0,"footer")(1,"div",0)(2,"div",1),g(3,"img",2),o(4,"p"),f(5,"myEstore"),r()()(),o(6,"div")(7,"h3"),f(8,"Shop"),r(),o(9,"ul")(10,"li")(11,"a",3),f(12,"Categories"),r()(),o(13,"li")(14,"a",3),f(15,"Store"),r()(),o(16,"li")(17,"a",4),f(18,"Cart"),r()(),o(19,"li")(20,"a",3),f(21,"Your Account"),r()()()(),o(22,"div")(23,"h3"),f(24,"More"),r(),o(25,"ul")(26,"li")(27,"a",3),f(28,"Privacy Policy"),r()(),o(29,"li")(30,"a",3),f(31,"Terms and Conditions"),r()(),o(32,"li")(33,"a",3),f(34,"About"),r()(),o(35,"li")(36,"a",3),f(37,"Contact Us"),r()()()(),o(38,"div")(39,"div",5)(40,"h3"),f(41,"Language"),r(),o(42,"select",6)(43,"option",7),f(44,"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"),r(),o(45,"option",8),f(46,"English"),r(),o(47,"option",9),f(48,"French"),r()()(),o(49,"p"),f(50,"Copyright \xA9 2024. All rights reserved."),r()()())},dependencies:[E],styles:["footer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:16px;margin:16px 0 0;border-top:4px solid var(--warning-color);background-color:var(--primary-color);color:var(--secondary-color)}.logoSection[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-decoration:none;cursor:pointer;font-family:Merienda,serif;font-weight:800;font-size:20px;color:var(--warning-color)}.logoSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:16px}ul[_ngcontent-%COMP%]{list-style-type:none;font-size:16px;padding:0}a[_ngcontent-%COMP%]{color:var(--secondary-color)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .nave[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{color:var(--warning-color)}.lang[_ngcontent-%COMP%]{display:flex;margin-top:16px}.lang[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;padding-right:4px}@media (max-width: 576px){footer[_ngcontent-%COMP%]{flex-direction:column}}"]})};var D1=class e{title="myEstore";static \u0275fac=function(l){return new(l||e)};static \u0275cmp=v({type:e,selectors:[["app-root"]],standalone:!0,features:[S],decls:3,vars:0,template:function(l,s){l&1&&g(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[l2,r4,k1,_1]})};var _0=(()=>{let c=class c{constructor(s,t){this._renderer=s,this._elementRef=t,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(s,t){this._renderer.setProperty(this._elementRef.nativeElement,s,t)}registerOnTouched(s){this.onTouched=s}registerOnChange(s){this.onChange=s}setDisabledState(s){this.setProperty("disabled",s)}};c.\u0275fac=function(t){return new(t||c)(L(R2),L(O2))},c.\u0275dir=O({type:c});let e=c;return e})(),Z8=(()=>{let c=class c extends _0{};c.\u0275fac=(()=>{let s;return function(n){return(s||(s=X1(c)))(n||c)}})(),c.\u0275dir=O({type:c,features:[c2]});let e=c;return e})(),D0=new x2("");var c5={provide:D0,useExisting:i1(()=>R1),multi:!0};function e5(){let e=K1()?K1().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var l5=new x2(""),R1=(()=>{let c=class c extends _0{constructor(s,t,n){super(s,t),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!e5())}writeValue(s){let t=s??"";this.setProperty("value",t)}_handleInput(s){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(s)}_compositionStart(){this._composing=!0}_compositionEnd(s){this._composing=!1,this._compositionMode&&this.onChange(s)}};c.\u0275fac=function(t){return new(t||c)(L(R2),L(O2),L(l5,8))},c.\u0275dir=O({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,n){t&1&&w("input",function(i){return n._handleInput(i.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(i){return n._compositionEnd(i.target.value)})},features:[u1([c5]),c2]});let e=c;return e})();var P0=new x2(""),F0=new x2("");function E0(e){return e!=null}function T0(e){return Q3(e)?R3(e):e}function V0(e){let c={};return e.forEach(l=>{c=l!=null?m(m({},c),l):c}),Object.keys(c).length===0?null:c}function I0(e,c){return c.map(l=>l(e))}function s5(e){return!e.validate}function O0(e){return e.map(c=>s5(c)?c:l=>c.validate(l))}function t5(e){if(!e)return null;let c=e.filter(E0);return c.length==0?null:function(l){return V0(I0(l,c))}}function D3(e){return e!=null?t5(O0(e)):null}function n5(e){if(!e)return null;let c=e.filter(E0);return c.length==0?null:function(l){let s=I0(l,c).map(T0);return H3(s).pipe(B3(V0))}}function P3(e){return e!=null?n5(O0(e)):null}function y0(e,c){return e===null?[c]:Array.isArray(e)?[...e,c]:[e,c]}function a5(e){return e._rawValidators}function i5(e){return e._rawAsyncValidators}function _3(e){return e?Array.isArray(e)?e:[e]:[]}function F1(e,c){return Array.isArray(e)?e.includes(c):e===c}function b0(e,c){let l=_3(c);return _3(e).forEach(t=>{F1(l,t)||l.push(t)}),l}function v0(e,c){return _3(c).filter(l=>!F1(e,l))}var E1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=D3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=P3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,l){return this.control?this.control.hasError(c,l):!1}getError(c,l){return this.control?this.control.getError(c,l):null}},P2=class extends E1{get formDirective(){return null}get path(){return null}},t1=class extends E1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T1=class{constructor(c){this._cd=c}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},o5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},H7=h(m({},o5),{"[class.ng-submitted]":"isSubmitted"}),R0=(()=>{let c=class c extends T1{constructor(s){super(s)}};c.\u0275fac=function(t){return new(t||c)(L(t1,2))},c.\u0275dir=O({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,n){t&2&&o1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[c2]});let e=c;return e})(),B0=(()=>{let c=class c extends T1{constructor(s){super(s)}};c.\u0275fac=function(t){return new(t||c)(L(P2,10))},c.\u0275dir=O({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,n){t&2&&o1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[c2]});let e=c;return e})();var Z2="VALID",P1="INVALID",_2="PENDING",c1="DISABLED",F2=class{},V1=class extends F2{constructor(c,l){super(),this.value=c,this.source=l}},l1=class extends F2{constructor(c,l){super(),this.pristine=c,this.source=l}},s1=class extends F2{constructor(c,l){super(),this.touched=c,this.source=l}},D2=class extends F2{constructor(c,l){super(),this.status=c,this.source=l}};function H0(e){return(B1(e)?e.validators:e)||null}function r5(e){return Array.isArray(e)?D3(e):e||null}function U0(e,c){return(B1(c)?c.asyncValidators:e)||null}function f5(e){return Array.isArray(e)?P3(e):e||null}function B1(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function m5(e,c,l){let s=e.controls;if(!(c?Object.keys(s):s).length)throw new a1(1e3,"");if(!s[l])throw new a1(1001,"")}function u5(e,c,l){e._forEachChild((s,t)=>{if(l[t]===void 0)throw new a1(1002,"")})}var I1=class{constructor(c,l){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=j2(()=>this.statusReactive()),this.statusReactive=B2(void 0),this._pristine=j2(()=>this.pristineReactive()),this.pristineReactive=B2(!0),this._touched=j2(()=>this.touchedReactive()),this.touchedReactive=B2(!1),this._events=new O3,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(l)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get status(){return e2(this.statusReactive)}set status(c){e2(()=>this.statusReactive.set(c))}get valid(){return this.status===Z2}get invalid(){return this.status===P1}get pending(){return this.status==_2}get disabled(){return this.status===c1}get enabled(){return this.status!==c1}get pristine(){return e2(this.pristineReactive)}set pristine(c){e2(()=>this.pristineReactive.set(c))}get dirty(){return!this.pristine}get touched(){return e2(this.touchedReactive)}set touched(c){e2(()=>this.touchedReactive.set(c))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(b0(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(b0(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(v0(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(v0(c,this._rawAsyncValidators))}hasValidator(c){return F1(this._rawValidators,c)}hasAsyncValidator(c){return F1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){let l=this.touched===!1;this.touched=!0;let s=c.sourceControl??this;this._parent&&!c.onlySelf&&this._parent.markAsTouched(h(m({},c),{sourceControl:s})),l&&c.emitEvent!==!1&&this._events.next(new s1(!0,s))}markAllAsTouched(c={}){this.markAsTouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:this}),this._forEachChild(l=>l.markAllAsTouched(c))}markAsUntouched(c={}){let l=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let s=c.sourceControl??this;this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:s})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c,s),l&&c.emitEvent!==!1&&this._events.next(new s1(!1,s))}markAsDirty(c={}){let l=this.pristine===!0;this.pristine=!1;let s=c.sourceControl??this;this._parent&&!c.onlySelf&&this._parent.markAsDirty(h(m({},c),{sourceControl:s})),l&&c.emitEvent!==!1&&this._events.next(new l1(!1,s))}markAsPristine(c={}){let l=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let s=c.sourceControl??this;this._forEachChild(t=>{t.markAsPristine({onlySelf:!0,emitEvent:c.emitEvent})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c,s),l&&c.emitEvent!==!1&&this._events.next(new l1(!0,s))}markAsPending(c={}){this.status=_2;let l=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new D2(this.status,l)),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.markAsPending(h(m({},c),{sourceControl:l}))}disable(c={}){let l=this._parentMarkedDirty(c.onlySelf);this.status=c1,this.errors=null,this._forEachChild(t=>{t.disable(h(m({},c),{onlySelf:!0}))}),this._updateValue();let s=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new V1(this.value,s)),this._events.next(new D2(this.status,s)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(m({},c),{skipPristineCheck:l}),this),this._onDisabledChange.forEach(t=>t(!0))}enable(c={}){let l=this._parentMarkedDirty(c.onlySelf);this.status=Z2,this._forEachChild(s=>{s.enable(h(m({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(h(m({},c),{skipPristineCheck:l}),this),this._onDisabledChange.forEach(s=>s(!1))}_updateAncestors(c,l){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine({},l),this._parent._updateTouched({},l))}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let s=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Z2||this.status===_2)&&this._runAsyncValidator(s,c.emitEvent)}let l=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new V1(this.value,l)),this._events.next(new D2(this.status,l)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(h(m({},c),{sourceControl:l}))}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(l=>l._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?c1:Z2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c,l){if(this.asyncValidator){this.status=_2,this._hasOwnPendingAsyncValidator={emitEvent:l!==!1};let s=T0(this.asyncValidator(this));this._asyncValidationSubscription=s.subscribe(t=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(t,{emitEvent:l,shouldHaveEmitted:c})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let c=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,c}return!1}setErrors(c,l={}){this.errors=c,this._updateControlsErrors(l.emitEvent!==!1,this,l.shouldHaveEmitted)}get(c){let l=c;return l==null||(Array.isArray(l)||(l=l.split(".")),l.length===0)?null:l.reduce((s,t)=>s&&s._find(t),this)}getError(c,l){let s=l?this.get(l):this;return s&&s.errors?s.errors[c]:null}hasError(c,l){return!!this.getError(c,l)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c,l,s){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),(c||s)&&this._events.next(new D2(this.status,l)),this._parent&&this._parent._updateControlsErrors(c,l,s)}_initObservables(){this.valueChanges=new I2,this.statusChanges=new I2}_calculateStatus(){return this._allControlsDisabled()?c1:this.errors?P1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_2)?_2:this._anyControlsHaveStatus(P1)?P1:Z2}_anyControlsHaveStatus(c){return this._anyControls(l=>l.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c,l){let s=!this._anyControlsDirty(),t=this.pristine!==s;this.pristine=s,this._parent&&!c.onlySelf&&this._parent._updatePristine(c,l),t&&this._events.next(new l1(this.pristine,l))}_updateTouched(c={},l){this.touched=this._anyControlsTouched(),this._events.next(new s1(this.touched,l)),this._parent&&!c.onlySelf&&this._parent._updateTouched(c,l)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){B1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let l=this._parent&&this._parent.dirty;return!c&&!!l&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=r5(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=f5(this._rawAsyncValidators)}},O1=class extends I1{constructor(c,l,s){super(H0(l),U0(s,l)),this.controls=c,this._initObservables(),this._setUpdateStrategy(l),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,l){return this.controls[c]?this.controls[c]:(this.controls[c]=l,l.setParent(this),l._registerOnCollectionChange(this._onCollectionChange),l)}addControl(c,l,s={}){this.registerControl(c,l),this.updateValueAndValidity({emitEvent:s.emitEvent}),this._onCollectionChange()}removeControl(c,l={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:l.emitEvent}),this._onCollectionChange()}setControl(c,l,s={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],l&&this.registerControl(c,l),this.updateValueAndValidity({emitEvent:s.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,l={}){u5(this,!0,c),Object.keys(c).forEach(s=>{m5(this,!0,s),this.controls[s].setValue(c[s],{onlySelf:!0,emitEvent:l.emitEvent})}),this.updateValueAndValidity(l)}patchValue(c,l={}){c!=null&&(Object.keys(c).forEach(s=>{let t=this.controls[s];t&&t.patchValue(c[s],{onlySelf:!0,emitEvent:l.emitEvent})}),this.updateValueAndValidity(l))}reset(c={},l={}){this._forEachChild((s,t)=>{s.reset(c?c[t]:null,{onlySelf:!0,emitEvent:l.emitEvent})}),this._updatePristine(l,this),this._updateTouched(l,this),this.updateValueAndValidity(l)}getRawValue(){return this._reduceChildren({},(c,l,s)=>(c[s]=l.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(l,s)=>s._syncPendingControls()?!0:l);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(l=>{let s=this.controls[l];s&&c(s,l)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[l,s]of Object.entries(this.controls))if(this.contains(l)&&c(s))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(l,s,t)=>((s.enabled||this.disabled)&&(l[t]=s.value),l))}_reduceChildren(c,l){let s=c;return this._forEachChild((t,n)=>{s=l(s,t,n)}),s}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var F3=new x2("CallSetDisabledState",{providedIn:"root",factory:()=>E3}),E3="always";function p5(e,c){return[...c.path,e]}function j0(e,c,l=E3){q0(e,c),c.valueAccessor.writeValue(e.value),(e.disabled||l==="always")&&c.valueAccessor.setDisabledState?.(e.disabled),z5(e,c),M5(e,c),L5(e,c),d5(e,c)}function S0(e,c){e.forEach(l=>{l.registerOnValidatorChange&&l.registerOnValidatorChange(c)})}function d5(e,c){if(c.valueAccessor.setDisabledState){let l=s=>{c.valueAccessor.setDisabledState(s)};e.registerOnDisabledChange(l),c._registerOnDestroy(()=>{e._unregisterOnDisabledChange(l)})}}function q0(e,c){let l=a5(e);c.validator!==null?e.setValidators(y0(l,c.validator)):typeof l=="function"&&e.setValidators([l]);let s=i5(e);c.asyncValidator!==null?e.setAsyncValidators(y0(s,c.asyncValidator)):typeof s=="function"&&e.setAsyncValidators([s]);let t=()=>e.updateValueAndValidity();S0(c._rawValidators,t),S0(c._rawAsyncValidators,t)}function z5(e,c){c.valueAccessor.registerOnChange(l=>{e._pendingValue=l,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&G0(e,c)})}function L5(e,c){c.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&G0(e,c),e.updateOn!=="submit"&&e.markAsTouched()})}function G0(e,c){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function M5(e,c){let l=(s,t)=>{c.valueAccessor.writeValue(s),t&&c.viewToModelUpdate(s)};e.registerOnChange(l),c._registerOnDestroy(()=>{e._unregisterOnChange(l)})}function h5(e,c){e==null,q0(e,c)}function C5(e,c){if(!e.hasOwnProperty("model"))return!1;let l=e.model;return l.isFirstChange()?!0:!Object.is(c,l.currentValue)}function g5(e){return Object.getPrototypeOf(e.constructor)===Z8}function x5(e,c){e._syncPendingControls(),c.forEach(l=>{let s=l.control;s.updateOn==="submit"&&s._pendingChange&&(l.viewToModelUpdate(s._pendingValue),s._pendingChange=!1)})}function N5(e,c){if(!c)return null;Array.isArray(c);let l,s,t;return c.forEach(n=>{n.constructor===R1?l=n:g5(n)?s=n:t=n}),t||s||l||null}var y5={provide:P2,useExisting:i1(()=>T3)},e1=Promise.resolve(),T3=(()=>{let c=class c extends P2{get submitted(){return e2(this.submittedReactive)}constructor(s,t,n){super(),this.callSetDisabledState=n,this._submitted=j2(()=>this.submittedReactive()),this.submittedReactive=B2(!1),this._directives=new Set,this.ngSubmit=new I2,this.form=new O1({},D3(s),P3(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(s){e1.then(()=>{let t=this._findContainer(s.path);s.control=t.registerControl(s.name,s.control),j0(s.control,s,this.callSetDisabledState),s.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(s)})}getControl(s){return this.form.get(s.path)}removeControl(s){e1.then(()=>{let t=this._findContainer(s.path);t&&t.removeControl(s.name),this._directives.delete(s)})}addFormGroup(s){e1.then(()=>{let t=this._findContainer(s.path),n=new O1({});h5(n,s),t.registerControl(s.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(s){e1.then(()=>{let t=this._findContainer(s.path);t&&t.removeControl(s.name)})}getFormGroup(s){return this.form.get(s.path)}updateModel(s,t){e1.then(()=>{this.form.get(s.path).setValue(t)})}setValue(s){this.control.setValue(s)}onSubmit(s){return this.submittedReactive.set(!0),x5(this.form,this._directives),this.ngSubmit.emit(s),s?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(s=void 0){this.form.reset(s),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(s){return s.pop(),s.length?this.form.get(s):this.form}};c.\u0275fac=function(t){return new(t||c)(L(P0,10),L(F0,10),L(F3,8))},c.\u0275dir=O({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){t&1&&w("submit",function(i){return n.onSubmit(i)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[u1([y5]),c2]});let e=c;return e})();function w0(e,c){let l=e.indexOf(c);l>-1&&e.splice(l,1)}function A0(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var b5=class extends I1{constructor(c=null,l,s){super(H0(l),U0(s,l)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(l),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B1(l)&&(l.nonNullable||l.initialValueIsDefault)&&(A0(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,l={}){this.value=this._pendingValue=c,this._onChange.length&&l.emitModelToViewChange!==!1&&this._onChange.forEach(s=>s(this.value,l.emitViewToModelChange!==!1)),this.updateValueAndValidity(l)}patchValue(c,l={}){this.setValue(c,l)}reset(c=this.defaultValue,l={}){this._applyFormState(c),this.markAsPristine(l),this.markAsUntouched(l),this.setValue(this.value,l),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){w0(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){w0(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){A0(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var v5={provide:t1,useExisting:i1(()=>V3)},k0=Promise.resolve(),V3=(()=>{let c=class c extends t1{constructor(s,t,n,a,i,u){super(),this._changeDetectorRef=i,this.callSetDisabledState=u,this.control=new b5,this._registered=!1,this.name="",this.update=new I2,this._parent=s,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=N5(this,a)}ngOnChanges(s){if(this._checkForErrors(),!this._registered||"name"in s){if(this._registered&&(this._checkName(),this.formDirective)){let t=s.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in s&&this._updateDisabled(s),C5(s,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(s){this.viewModel=s,this.update.emit(s)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){j0(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(s){k0.then(()=>{this.control.setValue(s,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(s){let t=s.isDisabled.currentValue,n=t!==0&&Z3(t);k0.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(s){return this._parent?p5(s,this._parent):[s]}};c.\u0275fac=function(t){return new(t||c)(L(P2,9),L(P0,10),L(F0,10),L(D0,10),L(J3,8),L(F3,8))},c.\u0275dir=O({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[u1([v5]),c2,N2]});let e=c;return e})(),W0=(()=>{let c=class c{};c.\u0275fac=function(t){return new(t||c)},c.\u0275dir=O({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let e=c;return e})();var S5=(()=>{let c=class c{};c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=V2({type:c}),c.\u0275inj=T2({});let e=c;return e})();var H1=(()=>{let c=class c{static withConfig(s){return{ngModule:c,providers:[{provide:F3,useValue:s.callSetDisabledState??E3}]}}};c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=V2({type:c}),c.\u0275inj=T2({imports:[S5]});let e=c;return e})();var U1=class e{constructor(c,l){this.route=c;this.router=l;this.route.params.subscribe(s=>{s.searchTerm&&(this.searchTerm=s.searchTerm)})}searchTerm="";search(){this.searchTerm?this.router.navigateByUrl("/search/"+this.searchTerm):this.router.navigateByUrl("")}static \u0275fac=function(l){return new(l||e)(L(b2),L(d1))};static \u0275cmp=v({type:e,selectors:[["app-search"]],standalone:!0,features:[S],decls:4,vars:1,consts:[["type","text","placeholder","Search products..","id","search",3,"ngModelChange","change","ngModel"],[3,"click"]],template:function(l,s){l&1&&(o(0,"div")(1,"input",0),X3("ngModelChange",function(n){return $3(s.searchTerm,n)||(s.searchTerm=n),n}),w("change",function(){return s.search()}),r(),o(2,"button",1),w("click",function(){return s.search()}),f(3,"Search"),r()()),l&2&&(z(),W3("ngModel",s.searchTerm))},dependencies:[H1,R1,R0,V3],styles:["input[type=text][_ngcontent-%COMP%]{padding:6px;font-size:1em;border:2px solid #ccc;border-radius:5px;outline:none;transition:border-color .3s}input[type=text][_ngcontent-%COMP%]:focus{border-color:var(--primary-color)}button[_ngcontent-%COMP%]{padding:8px 16px;margin:4px 0 0;font-size:1em;border:none;background-color:var(--primary-color);color:var(--secondary-color);cursor:pointer;border-radius:5px;transition:background-color .3s}button[_ngcontent-%COMP%]:hover{background-color:var(--warning-color);color:var(--primary-color)}"]})};var n1=class{id;sku;title;price;discount=0;quantity=1;image;description;category;constructor(c){Object.assign(this,c)}};var r2=class e{productsApiUrl="https://fakestoreapi.com/products";constructor(){}getAllCategories(){return u2(this,null,function*(){let l=(yield(yield fetch(this.productsApiUrl)).json())??[],s=new Set;return l.forEach(t=>{t.category&&s.add(t.category)}),Array.from(s).map(t=>({category:t}))})}getAllProductsByCategory(c){return u2(this,null,function*(){return c==="All"?this.getAllProducts():(yield this.getAllProducts()).filter(l=>l.category?.includes(c))})}getAllProducts(){return u2(this,null,function*(){return((yield(yield fetch(this.productsApiUrl)).json())??[]).map(s=>new n1(s))})}getProductById(c){return u2(this,null,function*(){let s=(yield(yield fetch(`${this.productsApiUrl}/${c}`)).json())??{};return new n1(s)})}static \u0275fac=function(l){return new(l||e)};static \u0275prov=Z({token:e,factory:e.\u0275fac,providedIn:"root"})};function w5(e,c){if(e&1&&(o(0,"a",3),f(1),r()),e&2){let l=c.$implicit;U("routerLink","/category/",l.category,""),z(),A(" ",l.category," ")}}function A5(e,c){if(e&1&&(o(0,"div")(1,"a",1),f(2,"All"),r(),H2(3,w5,2,3,"a",2),r()),e&2){let l=R();z(3),b("ngForOf",l.category)}}var j1=class e{constructor(c){this.productService=c;this.productService.getAllCategories().then(l=>{this.category=l})}category=[];static \u0275fac=function(l){return new(l||e)(L(r2))};static \u0275cmp=v({type:e,selectors:[["app-category"]],standalone:!0,features:[S],decls:1,vars:1,consts:[[4,"ngIf"],["routerLink",""],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(l,s){l&1&&H2(0,A5,4,1,"div",0),l&2&&b("ngIf",s.category)},dependencies:[l2,l4,p1,E],styles:["div[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-left:16px}a[_ngcontent-%COMP%]{font-size:24px;line-height:48px}@media (max-width: 992px){div[_ngcontent-%COMP%]{flex-direction:row;gap:24px}}@media (max-width: 576px){div[_ngcontent-%COMP%]{flex-direction:row;gap:24px}}"]})};var f2=class e{static \u0275fac=function(l){return new(l||e)};static \u0275cmp=v({type:e,selectors:[["app-side-bar"]],standalone:!0,features:[S],decls:6,vars:0,template:function(l,s){l&1&&(o(0,"h2"),f(1,"Search Products"),r(),g(2,"app-search"),o(3,"h2"),f(4,"Categories"),r(),g(5,"app-category"))},dependencies:[U1,j1]})};var k5=(e,c)=>c.id;function _5(e,c){if(e&1&&(o(0,"span",14)(1,"del"),f(2),U2(3,"currency"),r()()),e&2){let l=R().$implicit;z(2),p2(Q1(3,1,l.price))}}function D5(e,c){if(e&1){let l=y2();o(0,"div",3)(1,"div",4)(2,"a",5),g(3,"img",6),r()(),o(4,"div",7)(5,"a",5)(6,"h3",8),f(7),r()(),o(8,"div",9)(9,"p",10),f(10),U2(11,"currency"),H2(12,_5,4,3,"span",11),r(),o(13,"a",12),w("click",function(){let t=B(l).$implicit,n=R();return H(n.addCartItem(t))}),g(14,"fa-icon",13),f(15," Add to Cart "),r()()()()}if(e&2){let l=c.$implicit,s=R();z(2),U("routerLink","/products/",l.id,""),z(),b("src",l.image,X),z(2),U("routerLink","/products/",l.id,""),z(2),p2(l.title),z(3),A(" ",l.discount<l.price?l.price-l.discount:Q1(11,9,l.price)," "),z(2),b("ngIf",l.discount<l.price),z(2),b("icon",s.cart)}}var E2=class e{constructor(c,l,s){this.productService=c;this.cartService=l;this.route=s;this.route.params.subscribe(t=>u2(this,null,function*(){t.searchTerm?this.products=(yield this.productService.getAllProducts()).filter(n=>n.title.toLowerCase().includes(t.searchTerm.toLowerCase())):t.category?this.products=yield this.productService.getAllProductsByCategory(t.category):this.productService.getAllProducts().then(n=>{this.products=n})}))}cart=S1;products=[];addCartItem(c){this.cartService.addToCart(c)}static \u0275fac=function(l){return new(l||e)(L(r2),L(W),L(b2))};static \u0275cmp=v({type:e,selectors:[["app-home"]],standalone:!0,features:[S],decls:9,vars:0,consts:[[1,"page"],[1,"main"],[1,"container"],[1,"product-card"],[1,"product-image"],[3,"routerLink"],["alt","",3,"src"],[1,"product-info"],[1,"product-title"],[1,"end"],[1,"product-price"],["class","discount",4,"ngIf"],[1,"buy-now",3,"click"],[3,"icon"],[1,"discount"]],template:function(l,s){l&1&&(o(0,"section",0)(1,"div",1),g(2,"app-side-bar"),o(3,"div")(4,"h2"),f(5,"Latest Products"),r(),o(6,"div",2),r1(7,D5,16,11,"div",3,k5),r()()()()),l&2&&(z(7),f1(s.products))},dependencies:[l2,p1,s4,E,f2,v1,b1],styles:[".page[_ngcontent-%COMP%]{padding:24px}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:24% 24% 24% 24%;gap:20px;margin:16px}.product-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.product-image[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:16px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;object-fit:cover;border-radius:8px}.product-info[_ngcontent-%COMP%]{padding:15px;text-align:center;display:flex;flex-direction:column;align-items:stretch}.product-title[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:10px}.product-price[_ngcontent-%COMP%]{color:var(--primary-color);font-size:1.1em;margin-bottom:15px}@media (max-width: 992px){.container[_ngcontent-%COMP%]{grid-template-columns:auto auto;gap:10px}}@media (max-width: 576px){.container[_ngcontent-%COMP%]{grid-template-columns:auto;gap:5px}}"]})};var P5=(e,c)=>c.id;function F5(e,c){if(e&1){let l=y2();o(0,"tr",14)(1,"td",21)(2,"a",22),w("click",function(){let t=B(l).$implicit,n=R();return H(n.removeFromCart(t))}),f(3,"\xD7"),r()(),o(4,"td",23)(5,"a",24),g(6,"img",25),r()(),o(7,"td",26)(8,"a",24),f(9),U2(10,"slice"),r()(),o(11,"td",27)(12,"span",18),f(13),r()(),o(14,"td",28)(15,"div",29)(16,"input",30),w("click",function(){let t=B(l).$implicit,n=R();return H(n.handleQuantity("minus",t))}),r(),o(17,"input",31,0),w("change",function(){let t=B(l).$implicit,n=m1(18),a=R();return H(a.changeQuantity(t,n.value))}),r(),o(19,"input",32),w("click",function(){let t=B(l).$implicit,n=R();return H(n.handleQuantity("plus",t))}),r()()(),o(20,"td",33)(21,"span",18),f(22),r()()(),o(23,"tr")(24,"td",34)(25,"div",35)(26,"span"),f(27,"Coupon:"),r(),g(28,"input",36)(29,"input",37)(30,"input",38)(31,"input",39),r()()()}if(e&2){let l=c.$implicit;z(5),U("routerLink","/product/",l.product.id,""),z(),b("src",l.product.image,X),z(2),U("routerLink","/product/",l.product.id,""),z(),A("",Y3(10,9,l.product.title,0,13),"..."),z(4),A("\xA3",l.price,""),z(4),b("value",l.product.quantity),z(5),A("\xA3",l.totalitem,"")}}function E5(e,c){e&1&&(o(0,"tr",14),g(1,"td",8)(2,"td",9),o(3,"td",10)(4,"p"),f(5,"No products to show .."),r()(),g(6,"td",11)(7,"td",12)(8,"td",13),r())}var q1=class e{constructor(c){this.cartService=c;this.setCart()}cart;item;product;removeFromCart(c){this.cartService.removeFromCart(c.product.id),this.setCart()}changeQuantity(c,l){let s=parseInt(l);this.cartService.changeQuantity(c.product.id,s),this.setCart()}setCart(){this.cart=this.cartService.getCart()}handleQuantity(c,l){l.product.quantity<100&&c==="plus"?l.product.quantity++:l.product.quantity>1&&c==="minus"&&l.product.quantity--,this.cartService.changeQuantity(l.product.id,l.product.quantity),this.setCart()}static \u0275fac=function(l){return new(l||e)(L(W))};static \u0275cmp=v({type:e,selectors:[["app-cart-page"]],standalone:!0,features:[S],decls:53,vars:3,consts:[["quantitySelect",""],[1,"page"],[1,"main"],[1,"sidebar"],[1,"cart"],["method","post","action","#"],[1,"table-responsive"],[1,"shop_table","cart"],[1,"product-remove"],[1,"product-thumbnail"],[1,"product-name"],[1,"product-price"],[1,"product-quantity"],[1,"product-subtotal"],[1,"cart_item"],[1,"cart_totals"],[1,"totals"],[1,"cart-subtotal"],[1,"amount"],[1,"shipping"],[1,"order-total"],["data-label","Action",1,"product-remove"],["title","Remove this item",1,"remove",3,"click"],["data-label","Product Image",1,"product-thumbnail"],[3,"routerLink"],["width","145","height","145","alt","poster_1_up",1,"shop_thumbnail",3,"src"],["data-label","Name",1,"product-name"],["data-label","Price",1,"product-price"],["data-label","Quantity",1,"product-quantity"],[1,"quantity","buttons_added"],["type","button","name","min","value","-",1,"minus",3,"click"],["type","number","size","4","name","qty","title","Qty","min","0","step","1",1,"input-text","qty","text",3,"change","value"],["type","button","value","+","name","plus",1,"plus",3,"click"],["data-label","Total",1,"product-subtotal"],["colspan","8",1,"actions"],[1,"coupon"],["type","text","placeholder","Coupon code","value","","name","coupon_code","autocomplete","off"],["type","submit","value","Apply Coupon","name","apply_coupon",1,"buy-now"],["type","submit","value","Update Cart","name","update_cart",1,"buy-now"],["type","submit","value","Checkout","name","proceed","routerLink","/checkout",1,"buy-now"]],template:function(l,s){l&1&&(o(0,"section",1)(1,"h2"),f(2,"Shopping Cart"),r(),o(3,"div",2)(4,"div",3),g(5,"app-side-bar"),r(),o(6,"div",4)(7,"h2"),f(8,"Cart Items"),r(),o(9,"form",5)(10,"div",6)(11,"table",7)(12,"thead")(13,"tr")(14,"th",8),f(15,"Action"),r(),o(16,"th",9),f(17,"Product Image"),r(),o(18,"th",10),f(19,"Name"),r(),o(20,"th",11),f(21,"Price"),r(),o(22,"th",12),f(23,"Quantity"),r(),o(24,"th",13),f(25,"Total"),r()()(),o(26,"tbody"),r1(27,F5,32,13,null,null,P5,!1,E5,9,0,"tr",14),r()()()(),o(30,"div",15)(31,"h2"),f(32,"Cart Totals"),r(),o(33,"table",16)(34,"tbody")(35,"tr",17)(36,"th"),f(37,"Cart Subtotal"),r(),o(38,"td")(39,"span",18),f(40),r()()(),o(41,"tr",19)(42,"th"),f(43,"Shipping and Handling"),r(),o(44,"td"),f(45,"Free Shipping"),r()(),o(46,"tr",20)(47,"th"),f(48,"Order Total"),r(),o(49,"td")(50,"strong")(51,"span",18),f(52),r()()()()()()()()()()),l&2&&(z(27),f1(s.cart.items),z(13),A("\xA3",s.cart.totalPrice,""),z(12),A("\xA3",s.cart.totalPrice,""))},dependencies:[l2,t4,f2,H1,W0,B0,T3,E],styles:["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid;border-collapse:collapse;padding:4px 8px}thead[_ngcontent-%COMP%], .totals[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--primary-color);color:var(--secondary-color)}ul[_ngcontent-%COMP%]{list-style-type:none}.remove[_ngcontent-%COMP%]{font-size:24px;font-weight:800;cursor:pointer}.table-responsive[_ngcontent-%COMP%]{width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.coupon[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.coupon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-self:center}@media (max-width: 576px){.shop_table.cart[_ngcontent-%COMP%], .shop_table.cart[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .shop_table.cart[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block;width:100%}.shop_table.cart[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}.shop_table.cart[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px;border-bottom:1px solid #ccc}.shop_table.cart[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:50%;position:relative}.shop_table.cart[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);position:absolute;left:10px;width:45%;padding-right:10px;white-space:nowrap;text-align:left;font-weight:700}.product-remove[_ngcontent-%COMP%]   a.remove[_ngcontent-%COMP%]{font-size:18px;line-height:1}.quantity.buttons_added[_ngcontent-%COMP%]{display:flex;justify-content:center}.coupon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}}"]})};var G1=class e{constructor(c,l,s,t){this.activatedRoute=c;this.productService=l;this.router=s;this.cartService=t;this.activatedRoute.params.subscribe(n=>{this.productId=Number(n.id),this.productService.getProductById(this.productId).then(a=>{this.productDetails=a})}),this.setCart()}productId;productDetails;item;cart;products;activeTab="home";setCart(){this.cart=this.cartService.getCart()}addToCart(){this.productDetails&&(this.cartService.addToCart(this.productDetails),this.router.navigateByUrl("/cart"))}changeQuantity(c){if(this.productDetails){let l=parseInt(c);this.cartService.changeQuantity(this.productDetails.id,l),this.setCart()}}changeTab(c){this.activeTab=c}static \u0275fac=function(l){return new(l||e)(L(b2),L(r2),L(d1),L(W))};static \u0275cmp=v({type:e,selectors:[["app-single-product"]],standalone:!0,features:[S],decls:64,vars:15,consts:[["quantitySelect",""],[1,"page"],[1,"product-breadcroumb"],["routerLink",""],["routerLink","/shop"],[3,"routerLink"],[1,"main"],[1,"sidebar"],[1,"info"],[1,"product-images"],[1,"product-main-img"],["width","250","height","250",3,"src","alt"],[1,"product-gallery"],[3,"src","alt"],[1,"product-inner"],[1,"product-name"],[1,"product-inner-price"],[1,"discount"],["action","",1,"cart"],[1,"quantity"],["type","number","size","4","id","qty","title","Qty","min","0","step","1","value","0",1,"input-text","qty","text",3,"change"],["type","button",1,"add_to_cart_button",3,"click"],[1,"product-inner-category"],["href",""],[1,"product-description"]],template:function(l,s){if(l&1){let t=y2();o(0,"section",1)(1,"h2"),f(2,"Shop"),r(),o(3,"div",2)(4,"a",3),f(5,"Home /"),r(),o(6,"a",4),f(7,"Category Name /"),r(),o(8,"a",5),f(9),r()(),o(10,"div",6)(11,"div",7),g(12,"app-side-bar"),r(),o(13,"div")(14,"div",8)(15,"div")(16,"div",9)(17,"div",10),g(18,"img",11),r(),o(19,"div",12),g(20,"img",13)(21,"img",13)(22,"img",13),r()()(),o(23,"div")(24,"div",14)(25,"h2",15),f(26),r(),o(27,"div",16)(28,"ins"),f(29),r(),o(30,"span",17)(31,"del"),f(32),r()()(),o(33,"form",18)(34,"div",19)(35,"input",20,0),w("change",function(){B(t);let a=m1(36);return H(s.changeQuantity(a.value))}),r()(),o(37,"button",21),w("click",function(){return B(t),H(s.addToCart())}),f(38,"Add to cart"),r()(),o(39,"div",22)(40,"p"),f(41,"Category: "),o(42,"a",23),f(43,"Summer"),r(),f(44,"."),r(),o(45,"p"),f(46," Tags: "),o(47,"a",23),f(48,"awesome"),r(),f(49,", "),o(50,"a",23),f(51,"best"),r(),f(52,", "),o(53,"a",23),f(54,"sale"),r(),f(55,", "),o(56,"a",23),f(57,"shoes"),r(),f(58,". "),r()(),o(59,"div",24)(60,"h3"),f(61,"Description:"),r(),o(62,"p"),f(63),r()()()()()()()()}l&2&&(z(8),U("routerLink","/product/",s.productId,""),z(),p2(s.productDetails==null?null:s.productDetails.title),z(9),b("src",s.productDetails==null?null:s.productDetails.image,X)("alt",s.productDetails==null?null:s.productDetails.title),z(2),b("src",s.productDetails==null?null:s.productDetails.image,X)("alt",s.productDetails==null?null:s.productDetails.title),z(),b("src",s.productDetails==null?null:s.productDetails.image,X)("alt",s.productDetails==null?null:s.productDetails.title),z(),b("src",s.productDetails==null?null:s.productDetails.image,X)("alt",s.productDetails==null?null:s.productDetails.title),z(4),p2(s.productDetails==null?null:s.productDetails.title),z(3),A("$",s.productDetails==null?null:s.productDetails.price,""),z(3),A("$",s.productDetails==null?null:s.productDetails.price,""),z(31),p2(s.productDetails==null?null:s.productDetails.description))},dependencies:[f2,E],styles:[".info[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;margin-top:8px}.input-text[_ngcontent-%COMP%]{padding:4px;font-size:1em;border:2px solid #ccc;border-radius:5px 0 0 5px;outline:none;transition:border-color .3s}img[_ngcontent-%COMP%]{margin:16px 16px 0 0}h3[_ngcontent-%COMP%]{margin-top:0}.product-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}@media (max-width: 992px){.product-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column}}@media (max-width: 576px){.product-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.info[_ngcontent-%COMP%]{display:flex;flex-direction:column}}"]})};var Q0=[{path:"",component:E2},{path:"cart",component:q1},{path:"products/:id",component:G1},{path:"search/:searchTerm",component:E2},{path:"category/:category",component:E2}];var K0={providers:[K3({eventCoalescing:!0}),m4(Q0),i4()]};var T5={providers:[o4()]},J0=c4(K0,T5);var V5=()=>n4(D1,J0),Vc=V5;export{Vc as a};
