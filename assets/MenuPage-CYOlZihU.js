import{u as _e,r as q,j as c,g as xn,R as Fe,L as An}from"./index-DRJrKRJX.js";const wn=({id:t,name:e,price:n,image:a,hasSpiceLevel:r=!1})=>{const{addToCart:i}=_e(),[s,o]=q.useState("No Spice"),u=()=>{i(r?`${e} (${s})`:e,n,a)};return c.jsxs("div",{className:"col-md-3 product",children:[c.jsx("img",{src:a,alt:e,width:"130px",height:"130px"}),c.jsxs("h5",{children:[e,c.jsx("br",{}),"฿",n]}),r&&c.jsxs("div",{className:"spice-level-container",children:[c.jsx("p",{children:"ระดับความเผ็ด:"}),c.jsxs("div",{className:"spice-selection",children:[c.jsxs("div",{className:"spice-option",children:[c.jsx("input",{type:"radio",id:`no-spice-${t}`,name:`spice-${t}`,value:"No Spice",checked:s==="No Spice",onChange:()=>o("No Spice")}),c.jsx("label",{htmlFor:`no-spice-${t}`,children:"ไม่เผ็ด"})]}),c.jsxs("div",{className:"spice-option",children:[c.jsx("input",{type:"radio",id:`mild-${t}`,name:`spice-${t}`,value:"Mild_Spicy",checked:s==="Mild_Spicy",onChange:()=>o("Mild_Spicy")}),c.jsxs("label",{htmlFor:`mild-${t}`,children:["เผ็ดน้อย ",c.jsx("img",{src:"product_img/icon/chili-pepper.png",alt:"Chili",className:"chili-icon",width:"20"})]})]}),c.jsxs("div",{className:"spice-option",children:[c.jsx("input",{type:"radio",id:`medium-${t}`,name:`spice-${t}`,value:"Medium_Spicy",checked:s==="Medium_Spicy",onChange:()=>o("Medium_Spicy")}),c.jsxs("label",{htmlFor:`medium-${t}`,children:["เผ็ดปานกลาง",c.jsx("img",{src:"product_img/icon/chili-pepper.png",alt:"Chili",className:"chili-icon",width:"20"}),c.jsx("img",{src:"product_img/icon/chili-pepper.png",alt:"Chili",className:"chili-icon",width:"20"})]})]}),c.jsxs("div",{className:"spice-option",children:[c.jsx("input",{type:"radio",id:`hot-${t}`,name:`spice-${t}`,value:"Hot_Spicy",checked:s==="Hot_Spicy",onChange:()=>o("Hot_Spicy")}),c.jsxs("label",{htmlFor:`hot-${t}`,children:["เผ็ดมาก",c.jsx("img",{src:"product_img/icon/chili-pepper.png",alt:"Chili",className:"chili-icon",width:"20"}),c.jsx("img",{src:"product_img/icon/chili-pepper.png",alt:"Chili",className:"chili-icon",width:"20"}),c.jsx("img",{src:"product_img/icon/chili-pepper.png",alt:"Chili",className:"chili-icon",width:"20"})]})]})]})]}),c.jsx("button",{className:"btn btn-primary add-to-cart",style:r?{backgroundColor:"#561C24",color:"white",borderColor:"#561C24"}:{},"data-product-id":e,"data-price":n,onClick:u,children:"Add to Cart"})]})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function kn(t,e,n){return(e=Sn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?te(Object(n),!0).forEach(function(a){kn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Pn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Sn(t){var e=Pn(t,"string");return typeof e=="symbol"?e:e+""}const ee=()=>{};let $t={},Me={},Le=null,Re={mark:ee,measure:ee};try{typeof window<"u"&&($t=window),typeof document<"u"&&(Me=document),typeof MutationObserver<"u"&&(Le=MutationObserver),typeof performance<"u"&&(Re=performance)}catch{}const{userAgent:ne=""}=$t.navigator||{},R=$t,x=Me,ae=Le,nt=Re;R.document;const F=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",ze=~ne.indexOf("MSIE")||~ne.indexOf("Trident/");var On=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Cn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,De={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Nn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},We=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",ct="duotone",En="sharp",Tn="sharp-duotone",Ye=[k,ct,En,Tn],jn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},In={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},_n=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Fn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Mn=["fak","fa-kit","fakd","fa-kit-duotone"],re={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ln=["kit"],Rn={kit:{"fa-kit":"fak"}},zn=["fak","fakd"],Dn={kit:{fak:"fa-kit"}},ie={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Yn=["fak","fa-kit","fakd","fa-kit-duotone"],Un={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$n={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Hn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Gn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],St=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Wn,...Gn],Xn=["solid","regular","light","thin","duotone","brands"],Ue=[1,2,3,4,5,6,7,8,9,10],Bn=Ue.concat([11,12,13,14,15,16,17,18,19,20]),qn=[...Object.keys(Hn),...Xn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY].concat(Ue.map(t=>"".concat(t,"x"))).concat(Bn.map(t=>"w-".concat(t))),Vn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const I="___FONT_AWESOME___",Ot=16,$e="fa",He="svg-inline--fa",Y="data-fa-i2svg",Ct="data-fa-pseudo-element",Kn="data-fa-pseudo-element-pending",Ht="data-prefix",Gt="data-icon",se="fontawesome-i2svg",Qn="async",Jn=["HTML","HEAD","STYLE","SCRIPT"],Ge=(()=>{try{return!0}catch{return!1}})();function tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[k]}})}const Xe=l({},De);Xe[k]=l(l(l(l({},{"fa-duotone":"duotone"}),De[k]),re.kit),re["kit-duotone"]);const Zn=tt(Xe),Nt=l({},Fn);Nt[k]=l(l(l(l({},{duotone:"fad"}),Nt[k]),ie.kit),ie["kit-duotone"]);const oe=tt(Nt),Et=l({},Pt);Et[k]=l(l({},Et[k]),Dn.kit);const Xt=tt(Et),Tt=l({},$n);Tt[k]=l(l({},Tt[k]),Rn.kit);tt(Tt);const ta=On,Be="fa-layers-text",ea=Cn,na=l({},jn);tt(na);const aa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht=Nn,ra=[...Ln,...qn],K=R.FontAwesomeConfig||{};function ia(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=sa(ia(n));r!=null&&(K[a]=r)});const qe={styleDefault:"solid",familyDefault:k,cssPrefix:$e,replacementClass:He,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);const X=l(l({},qe),K);X.autoReplaceSvg||(X.observeMutations=!1);const m={};Object.keys(qe).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){X[t]=e,Q.forEach(n=>n(m))},get:function(){return X[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,Q.forEach(e=>e(m))},get:function(){return X.cssPrefix}});R.FontAwesomeConfig=m;const Q=[];function oa(t){return Q.push(t),()=>{Q.splice(Q.indexOf(t),1)}}const M=Ot,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function la(t){if(!t||!F)return;const e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=x.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return x.head.insertBefore(e,a),t}const ca="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let t=12,e="";for(;t-- >0;)e+=ca[Math.random()*62|0];return e}function B(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Bt(t){return t.classList?B(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ve(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ve(t[n]),'" '),"").trim()}function ft(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function qt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function ua(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function da(t){let{transform:e,width:n=Ot,height:a=Ot,startCentered:r=!1}=t,i="";return r&&ze?i+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):i+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),i+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ma=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
}`;function Ke(){const t=$e,e=He,n=m.cssPrefix,a=m.replacementClass;let r=ma;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let le=!1;function gt(){m.autoAddCss&&!le&&(la(Ke()),le=!0)}var pa={mixout(){return{dom:{css:Ke,insertCss:gt}}},hooks(){return{beforeDOMElementCreation(){gt()},beforeI2svg(){gt()}}}};const _=R||{};_[I]||(_[I]={});_[I].styles||(_[I].styles={});_[I].hooks||(_[I].hooks={});_[I].shims||(_[I].shims=[]);var T=_[I];const Qe=[],Je=function(){x.removeEventListener("DOMContentLoaded",Je),st=1,Qe.map(t=>t())};let st=!1;F&&(st=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),st||x.addEventListener("DOMContentLoaded",Je));function ha(t){F&&(st?setTimeout(t,0):Qe.push(t))}function et(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ve(t):"<".concat(e," ").concat(fa(n),">").concat(a.map(et).join(""),"</").concat(e,">")}function ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var bt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,u,f,d;for(a===void 0?(u=1,d=e[i[0]]):(u=0,d=a);u<s;u++)f=i[u],d=o(d,e[f],f,e);return d};function ga(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function jt(t){const e=ga(t);return e.length===1?e[0].toString(16):null}function ba(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function It(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=fe(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,fe(e)):T.styles[t]=l(l({},T.styles[t]||{}),r),t==="fas"&&It("fa",e)}const{styles:Z,shims:ya}=T,Ze=Object.keys(Xt),va=Ze.reduce((t,e)=>(t[e]=Object.keys(Xt[e]),t),{});let Vt=null,tn={},en={},nn={},an={},rn={};function xa(t){return~ra.indexOf(t)}function Aa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!xa(r)?r:null}const sn=()=>{const t=a=>bt(Z,(r,i,s)=>(r[s]=bt(i,a,{}),r),{});tn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),en=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),rn=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in Z||m.autoFetchSvg,n=bt(ya,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});nn=n.names,an=n.unicodes,Vt=ut(m.styleDefault,{family:m.familyDefault})};oa(t=>{Vt=ut(t.styleDefault,{family:m.familyDefault})});sn();function Kt(t,e){return(tn[t]||{})[e]}function wa(t,e){return(en[t]||{})[e]}function W(t,e){return(rn[t]||{})[e]}function on(t){return nn[t]||{prefix:null,iconName:null}}function ka(t){const e=an[t],n=Kt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return Vt}const ln=()=>({prefix:null,iconName:null,rest:[]});function Pa(t){let e=k;const n=Ze.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return Ye.forEach(a=>{(t.includes(n[a])||t.some(r=>va[a].includes(r)))&&(e=a)}),e}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=k}=e,a=Zn[n][t];if(n===ct&&!t)return"fad";const r=oe[n][t]||oe[n][a],i=t in T.styles?t:null;return r||i||null}function Sa(t){let e=[],n=null;return t.forEach(a=>{const r=Aa(m.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function ue(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=St.concat(Yn),i=ue(t.filter(g=>r.includes(g))),s=ue(t.filter(g=>!St.includes(g))),o=i.filter(g=>(a=g,!We.includes(g))),[u=null]=o,f=Pa(i),d=l(l({},Sa(s)),{},{prefix:ut(u,{family:f})});return l(l(l({},d),Ea({values:t,family:f,styles:Z,config:m,canonical:d,givenPrefix:a})),Oa(n,a,d))}function Oa(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?on(r):{},s=W(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ca=Ye.filter(t=>t!==k||t!==ct),Na=Object.keys(Pt).filter(t=>t!==k).map(t=>Object.keys(Pt[t])).flat();function Ea(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===ct,u=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ca.includes(n)&&(Object.keys(i).find(p=>Na.includes(p))||s.autoFetchSvg)){const p=_n.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=z()||"fas"),a}class Ta{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),It(i,r[i]);const s=Xt[k][i];s&&It(s,r[i]),sn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],u=o[2];e[i]||(e[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[i][f]=o)}),e[i][s]=o}),e}}let de=[],$={};const G={},ja=Object.keys(G);function Ia(t,e){let{mixoutsTo:n}=e;return de=t,$={},Object.keys(G).forEach(a=>{ja.indexOf(a)===-1&&delete G[a]}),de.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{$[s]||($[s]=[]),$[s].push(i[s])})}a.provides&&a.provides(G)}),n}function _t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];($[t]||[]).forEach(i=>{i.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,e):void 0}function Ft(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||z();if(e)return e=W(n,e)||e,ce(cn.definitions,n,e)||ce(T.styles,n,e)}const cn=new Ta,_a=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,U("noAuto")},Fa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(U("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ha(()=>{La({autoReplaceSvgRoot:e}),U("watch",t)})}},Ma={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ut(t[0]);return{prefix:n,iconName:W(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ta))){const e=dt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||z(),iconName:W(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=z();return{prefix:e,iconName:W(e,t)||t}}}},O={noAuto:_a,config:m,dom:Fa,parse:Ma,library:cn,findIconDefinition:Ft,toHtml:et},La=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=x}=t;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&O.dom.i2svg({node:e})};function mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>et(n))}}),Object.defineProperty(t,"node",{get:function(){if(!F)return;const n=x.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ra(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(qt(s)&&n.found&&!a.found){const{width:o,height:u}=n,f={x:o/u/2,y:.5};r.style=ft(l(l({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function za(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function Qt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:u,titleId:f,extra:d,watchable:g=!1}=t,{width:p,height:b}=n.found?n:e,y=zn.includes(a),S=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(C=>d.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(d.classes).join(" ");let v={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:S,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(b)})};const w=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/b*16*.0625,"em")}:{};g&&(v.attributes[Y]=""),o&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||J())},children:[o]}),delete v.attributes.title);const A=l(l({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:s,styles:l(l({},w),d.styles)}),{children:P,attributes:j}=n.found&&e.found?D("generateAbstractMask",A)||{children:[],attributes:{}}:D("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=P,A.attributes=j,s?za(A):Ra(A)}function me(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,u=l(l(l({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(u[Y]="");const f=l({},s.styles);qt(r)&&(f.transform=da({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=ft(f);d.length>0&&(u.style=d);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Da(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ft(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:yt}=T;function Mt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Wa={found:!1,width:512,height:512};function Ya(t,e){!Ge&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lt(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=z()),new Promise((a,r)=>{if(n==="fa"){const i=on(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&yt[e]&&yt[e][t]){const i=yt[e][t];return a(Mt(i))}Ya(t,e),a(l(l({},Wa),{},{icon:m.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const pe=()=>{},Rt=m.measurePerformance&&nt&&nt.mark&&nt.measure?nt:{mark:pe,measure:pe},V='FA "6.7.2"',Ua=t=>(Rt.mark("".concat(V," ").concat(t," begins")),()=>fn(t)),fn=t=>{Rt.mark("".concat(V," ").concat(t," ends")),Rt.measure("".concat(V," ").concat(t),"".concat(V," ").concat(t," begins"),"".concat(V," ").concat(t," ends"))};var Jt={begin:Ua,end:fn};const rt=()=>{};function he(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function $a(t){const e=t.getAttribute?t.getAttribute(Ht):null,n=t.getAttribute?t.getAttribute(Gt):null;return e&&n}function Ha(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Ga(){return m.autoReplaceSvg===!0?it.replace:it[m.autoReplaceSvg]||it.replace}function Xa(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function Ba(t){return x.createElement(t)}function un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Xa:Ba}=e;if(typeof t=="string")return x.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(un(i,{ceFn:n}))}),a}function qa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const it={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(un(n),e)}),e.getAttribute(Y)===null&&m.keepOriginalSource){let n=x.createComment(qa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Bt(e).indexOf(m.replacementClass))return it.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===m.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>et(i)).join(`
`);e.setAttribute(Y,""),e.innerHTML=r}};function ge(t){t()}function dn(t,e){const n=typeof e=="function"?e:rt;if(t.length===0)n();else{let a=ge;m.mutateApproach===Qn&&(a=R.requestAnimationFrame||ge),a(()=>{const r=Ga(),i=Jt.begin("mutate");t.map(r),i(),n()})}}let Zt=!1;function mn(){Zt=!0}function zt(){Zt=!1}let ot=null;function be(t){if(!ae||!m.observeMutations)return;const{treeCallback:e=rt,nodeCallback:n=rt,pseudoElementsCallback:a=rt,observeMutationsRoot:r=x}=t;ot=new ae(i=>{if(Zt)return;const s=z();B(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!he(o.addedNodes[0])&&(m.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&m.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&he(o.target)&&~aa.indexOf(o.attributeName))if(o.attributeName==="class"&&$a(o.target)){const{prefix:u,iconName:f}=dt(Bt(o.target));o.target.setAttribute(Ht,u||s),f&&o.target.setAttribute(Gt,f)}else Ha(o.target)&&n(o.target)})}),F&&ot.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Va(){ot&&ot.disconnect()}function Ka(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Qa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=dt(Bt(t));return r.prefix||(r.prefix=z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=wa(r.prefix,t.innerText)||Kt(r.prefix,jt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ja(t){const e=B(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||J()):(e["aria-hidden"]="true",e.focusable="false")),e}function Za(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Qa(t),i=Ja(t),s=_t("parseNodeAttributes",{},t);let o=e.styleParser?Ka(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:tr}=T;function pn(t){const e=m.autoReplaceSvg==="nest"?ye(t,{styleParser:!1}):ye(t);return~e.extra.classes.indexOf(Be)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function er(){return[...Mn,...St]}function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=x.documentElement.classList,a=d=>n.add("".concat(se,"-").concat(d)),r=d=>n.remove("".concat(se,"-").concat(d)),i=m.autoFetchSvg?er():We.concat(Object.keys(tr));i.includes("fa")||i.push("fa");const s=[".".concat(Be,":not([").concat(Y,"])")].concat(i.map(d=>".".concat(d,":not([").concat(Y,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=B(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Jt.begin("onTree"),f=o.reduce((d,g)=>{try{const p=pn(g);p&&d.push(p)}catch(p){Ge||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,g)=>{Promise.all(f).then(p=>{dn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(p=>{u(),g(p)})})}function nr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(n=>{n&&dn([n],e)})}function ar(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ft(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ft(r||{})),t(a,l(l({},n),{},{mask:r}))}}const rr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:b}=t;return mt(l({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(o||J()):(f["aria-hidden"]="true",f.focusable="false")),Qt({icons:{main:Mt(b),mask:r?Mt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:l(l({},E),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:f,styles:d,classes:u}})))};var ir={mixout(){return{icon:ar(rr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ve,t.nodeCallback=nr,t}}},provides(t){t.i2svg=function(e){const{node:n=x,callback:a=()=>{}}=e;return ve(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:u,mask:f,maskId:d,extra:g}=n;return new Promise((p,b)=>{Promise.all([Lt(a,s),f.iconName?Lt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[S,v]=y;p([e,Qt({icons:{main:S,mask:v},prefix:s,iconName:a,transform:o,symbol:u,maskId:d,title:r,titleId:i,extra:g,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=ft(s);o.length>0&&(a.style=o);let u;return qt(i)&&(u=D("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},sr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return mt({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},or={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return mt({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Da({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},lr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return mt({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),me({content:t,transform:l(l({},E),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(ze){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,o=f.height/u}return m.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,me({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const cr=new RegExp('"',"ug"),xe=[1105920,1112319],Ae=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),In),Vn),Un),Dt=Object.keys(Ae).reduce((t,e)=>(t[e.toLowerCase()]=Ae[e],t),{}),fr=Object.keys(Dt).reduce((t,e)=>{const n=Dt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ur(t){const e=t.replace(cr,""),n=ba(e,0),a=n>=xe[0]&&n<=xe[1],r=e.length===2?e[0]===e[1]:!1;return{value:jt(r?e[0]:e),isSecondary:a||r}}function dr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Dt[n]||{})[r]||fr[n]}function we(t,e){const n="".concat(Kn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=B(t.children).filter(p=>p.getAttribute(Ct)===e)[0],o=R.getComputedStyle(t,e),u=o.getPropertyValue("font-family"),f=u.match(ea),d=o.getPropertyValue("font-weight"),g=o.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&g!=="none"&&g!==""){const p=o.getPropertyValue("content");let b=dr(u,d);const{value:y,isSecondary:S}=ur(p),v=f[0].startsWith("FontAwesome");let w=Kt(b,y),A=w;if(v){const P=ka(y);P.iconName&&P.prefix&&(w=P.iconName,b=P.prefix)}if(w&&!S&&(!s||s.getAttribute(Ht)!==b||s.getAttribute(Gt)!==A)){t.setAttribute(n,A),s&&t.removeChild(s);const P=Za(),{extra:j}=P;j.attributes[Ct]=e,Lt(w,b).then(C=>{const yn=Qt(l(l({},P),{},{icons:{main:C,mask:ln()},prefix:b,iconName:A,extra:j,watchable:!0})),pt=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(pt,t.firstChild):t.appendChild(pt),pt.outerHTML=yn.map(vn=>et(vn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function mr(t){return Promise.all([we(t,"::before"),we(t,"::after")])}function pr(t){return t.parentNode!==document.head&&!~Jn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ct)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ke(t){if(F)return new Promise((e,n)=>{const a=B(t.querySelectorAll("*")).filter(pr).map(mr),r=Jt.begin("searchPseudoElements");mn(),Promise.all(a).then(()=>{r(),zt(),e()}).catch(()=>{r(),zt(),n()})})}var hr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ke,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=x}=e;m.searchPseudoElements&&ke(n)}}};let Pe=!1;var gr={mixout(){return{dom:{unwatch(){mn(),Pe=!0}}}},hooks(){return{bootstrap(){be(_t("mutationObserverCallbacks",{}))},noAuto(){Va()},watch(t){const{observeMutationsRoot:e}=t;Pe?zt():be(_t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Se=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var br={mixout(){return{parse:{transform:t=>Se(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Se(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(u," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:d,path:g};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const vt={x:0,y:0,width:"100%",height:"100%"};function Oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function yr(t){return t.tag==="g"?t.children:[t]}var vr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?dt(n.split(" ").map(r=>r.trim())):ln();return a.prefix||(a.prefix=z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:u,icon:f}=r,{width:d,icon:g}=i,p=ua({transform:o,containerWidth:d,iconWidth:u}),b={tag:"rect",attributes:l(l({},vt),{},{fill:"white"})},y=f.children?{children:f.children.map(Oe)}:{},S={tag:"g",attributes:l({},p.inner),children:[Oe(l({tag:f.tag,attributes:l(l({},f.attributes),p.path)},y))]},v={tag:"g",attributes:l({},p.outer),children:[S]},w="mask-".concat(s||J()),A="clip-".concat(s||J()),P={tag:"mask",attributes:l(l({},vt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,v]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:yr(g)},P]};return n.push(j,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(w,")")},vt)}),{children:n,attributes:a}}}},xr={provides(t){let e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ar={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},wr=[pa,ir,sr,or,lr,hr,gr,br,vr,xr,Ar];Ia(wr,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;const Wt=O.parse;O.findIconDefinition;O.toHtml;const kr=O.icon;O.layer;O.text;O.counter;var xt={exports:{}},At,Ce;function Pr(){if(Ce)return At;Ce=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return At=t,At}var wt,Ne;function Sr(){if(Ne)return wt;Ne=1;var t=Pr();function e(){}function n(){}return n.resetWarningCache=e,wt=function(){function a(s,o,u,f,d,g){if(g!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},wt}var Ee;function Or(){return Ee||(Ee=1,xt.exports=Sr()()),xt.exports}var Cr=Or();const h=xn(Cr);function Te(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Te(Object(n),!0).forEach(function(a){H(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function lt(t){"@babel/helpers - typeof";return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lt(t)}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Er(t,e){if(t==null)return{};var n=Nr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Yt(t){return Tr(t)||jr(t)||Ir(t)||_r()}function Tr(t){if(Array.isArray(t))return Ut(t)}function jr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ir(t,e){if(t){if(typeof t=="string")return Ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ut(t,e)}}function Ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,u=t.spin,f=t.spinPulse,d=t.spinReverse,g=t.pulse,p=t.fixedWidth,b=t.inverse,y=t.border,S=t.listItem,v=t.flip,w=t.size,A=t.rotation,P=t.pull,j=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":g,"fa-fw":p,"fa-inverse":b,"fa-border":y,"fa-li":S,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},H(e,"fa-".concat(w),typeof w<"u"&&w!==null),H(e,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),H(e,"fa-pull-".concat(P),typeof P<"u"&&P!==null),H(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(j).map(function(C){return j[C]?C:null}).filter(function(C){return C})}function Mr(t){return t=t-0,t===t}function hn(t){return Mr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Lr=["style"];function Rr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function zr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=hn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Rr(r)]=i:e[r]=i,e},{})}function gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return gn(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,f){var d=e.attributes[f];switch(f){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=zr(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=d:u.attrs[hn(f)]=d}return u},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=Er(n,Lr);return r.attrs.style=N(N({},r.attrs.style),s),t.apply(void 0,[e.tag,N(N({},r.attrs),o)].concat(Yt(a)))}var bn=!1;try{bn=!0}catch{}function Dr(){if(!bn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function je(t){if(t&&lt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wt.icon)return Wt.icon(t);if(t===null)return null;if(t&&lt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?H({},t,e):{}}var Ie={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},L=Fe.forwardRef(function(t,e){var n=N(N({},Ie),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,u=n.titleId,f=n.maskId,d=je(a),g=kt("classes",[].concat(Yt(Fr(n)),Yt((s||"").split(" ")))),p=kt("transform",typeof n.transform=="string"?Wt.transform(n.transform):n.transform),b=kt("mask",je(r)),y=kr(d,N(N(N(N({},g),p),b),{},{symbol:i,title:o,titleId:u,maskId:f}));if(!y)return Dr("Could not find icon",d),null;var S=y.abstract,v={ref:e};return Object.keys(n).forEach(function(w){Ie.hasOwnProperty(w)||(v[w]=n[w])}),Wr(S[0],v)});L.displayName="FontAwesomeIcon";L.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var Wr=gn.bind(null,Fe.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Yr={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]},Ur={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},$r=Ur,Hr={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Gr={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Xr=Gr,Br={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},qr={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Vr=()=>{const{cart:t,increaseQuantity:e,decreaseQuantity:n,removeFromCart:a,updateDescription:r,printReceipt:i,calculateTotalPrice:s}=_e(),o=Object.keys(t).length===0,u=s(),f=q.useRef(!1),d=q.useRef(!1),g=q.useCallback((b,y)=>{y&&(y.preventDefault(),y.stopPropagation()),!f.current&&(f.current=!0,n(b),setTimeout(()=>{f.current=!1},300))},[n]),p=q.useCallback((b,y)=>{y&&(y.preventDefault(),y.stopPropagation()),!d.current&&(d.current=!0,e(b),setTimeout(()=>{d.current=!1},300))},[e]);return c.jsxs("div",{className:"card",style:{borderRadius:"15px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:[c.jsx("div",{className:"card-header",style:{backgroundColor:"#561C24",color:"white",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",padding:"15px"},children:c.jsxs("h2",{style:{margin:0,display:"flex",alignItems:"center",fontSize:"22px"},children:[c.jsx(L,{icon:Xr,className:"mr-2"})," Your Order"]})}),c.jsxs("div",{className:"card-body",children:[c.jsx("div",{id:"cart",className:"mt-2",children:o?c.jsx("p",{children:"ยังไม่มีสินค้าในตะกร้า."}):c.jsxs(c.Fragment,{children:[c.jsxs("table",{className:"table table-striped",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Product"}),c.jsx("th",{children:"Quantity"}),c.jsx("th",{children:"Price"}),c.jsx("th",{children:"Total"}),c.jsx("th",{children:"Actions"})]})}),c.jsx("tbody",{children:Object.entries(t).map(([b,y])=>{const S=y.quantity*y.price;return c.jsxs("tr",{children:[c.jsxs("td",{children:[c.jsx("div",{children:b}),y.description?c.jsxs("div",{className:"order-description",style:{fontSize:"0.85em",fontStyle:"italic",color:"#666",marginTop:"4px"},children:[y.description,c.jsx(L,{icon:$r,style:{marginLeft:"5px",cursor:"pointer",color:"#999"},title:"Edit instructions",onClick:()=>r(b)})]}):c.jsx("a",{href:"#",style:{fontSize:"0.85em",color:"#999",display:"block",marginTop:"4px"},onClick:v=>{v.preventDefault(),r(b)},children:"เพิ่มคําอธิบาย"})]}),c.jsx("td",{children:c.jsxs("div",{className:"quantity-controls",style:{display:"flex",alignItems:"center"},children:[c.jsx("button",{className:"btn btn-sm",style:{backgroundColor:"#f8f9fa",border:"1px solid #ddd",width:"25px",height:"25px",padding:0,display:"flex",alignItems:"center",justifyContent:"center"},onClick:v=>g(b,v),children:c.jsx(L,{icon:Hr})}),c.jsx("span",{style:{margin:"0 8px"},children:y.quantity}),c.jsx("button",{className:"btn btn-sm",style:{backgroundColor:"#f8f9fa",border:"1px solid #ddd",width:"25px",height:"25px",padding:0,display:"flex",alignItems:"center",justifyContent:"center"},onClick:v=>p(b,v),children:c.jsx(L,{icon:Br})})]})}),c.jsxs("td",{children:["$",y.price]}),c.jsxs("td",{children:["$",S]}),c.jsx("td",{children:c.jsx("button",{className:"btn btn-danger delete-product",onClick:()=>a(b),children:c.jsx(L,{icon:Yr})})})]},b)})})]}),c.jsxs("p",{children:["Total Price: $",u]})]})}),c.jsxs("button",{className:"btn btn-block mt-3",id:"printCart",style:{backgroundColor:"#561C24",color:"white",fontWeight:600,padding:"12px",borderRadius:"8px"},onClick:i,children:[c.jsx(L,{icon:qr,className:"mr-2"})," Print Order Receipt"]})]})]})},Qr=({title:t,products:e})=>c.jsxs(c.Fragment,{children:[c.jsx("header",{children:c.jsxs("nav",{children:[c.jsx("h1",{children:"TASTY BITES"}),c.jsx("ul",{children:c.jsx("li",{children:c.jsx(An,{to:"/",children:"Home"})})})]})}),c.jsx("div",{className:"container mt-5",children:c.jsxs("div",{className:"row",children:[c.jsxs("div",{className:"col-md-7",children:[c.jsx("div",{className:"logo d-flex justify-content-center",style:{marginBottom:"30px"},children:c.jsx("h1",{children:t})}),c.jsx("div",{id:"products",className:"row",children:e.map((n,a)=>c.jsx(wn,{id:`product-${a}`,name:n.name,price:n.price,image:n.image,hasSpiceLevel:n.hasSpiceLevel},a))})]}),c.jsx("div",{className:"col-md-5",children:c.jsx(Vr,{})})]})})]});export{Qr as M};
