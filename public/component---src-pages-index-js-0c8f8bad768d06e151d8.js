(self.webpackChunkprivate_chef_catania=self.webpackChunkprivate_chef_catania||[]).push([[678],{9584:function(e,t,n){var a="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=s||u||Function("return this")(),m=Object.prototype.toString,d=Math.max,p=Math.min,h=function(){return f.Date.now()};function v(e,t,n){var r,i,o,c,l,s,u=0,f=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function b(t){var n=r,a=i;return r=i=void 0,u=t,c=e.apply(a,n)}function E(e){return u=e,l=setTimeout(T,t),f?b(e):c}function w(e){var n=e-s;return void 0===s||n>=t||n<0||m&&e-u>=o}function T(){var e=h();if(w(e))return C(e);l=setTimeout(T,function(e){var n=t-(e-s);return m?p(n,o-(e-u)):n}(e))}function C(e){return l=void 0,v&&r?b(e):(r=i=void 0,c)}function _(){var e=h(),n=w(e);if(r=arguments,i=this,s=e,n){if(void 0===l)return E(s);if(m)return l=setTimeout(T,t),b(s)}return void 0===l&&(l=setTimeout(T,t)),c}return t=g(t)||0,y(n)&&(f=!!n.leading,o=(m="maxWait"in n)?d(g(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),_.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=s=i=l=void 0},_.flush=function(){return void 0===l?c:C(h())},_}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})}},523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(a&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],o[s[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var a,r=n(7294),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return l},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},r}(r.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(f,"canUseDOM",c),f}}},6107:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Le}});var a,r,i,o,c,l=n(7294),s=n(3369),u=n.n(s),f=function(e){var t=e.index;(0,l.useEffect)((function(){a=window.innerHeight/t-.3}));return l.createElement("header",{className:"header w-screen h-screen",style:{opacity:a}},l.createElement("div",{className:"fadecycle"},["basket","battuta","filetto","fire","fusione","gambero","landscape","lemon","location","mozzarella","nebrodi","pitrudda","salmon","squid","tomatoes"].map((function(e){return l.createElement("div",{style:{backgroundImage:"url(/images/"+e+".jpg)"},className:"header__image w-screen h-screen"})}))),l.createElement("div",{className:"header__wrapper w-screen h-screen",style:{overflow:"hidden",position:"fixed"}},l.createElement(u(),{style:{width:"50%",height:"50%",transform:"scale("+(0!==t?.5*t:1)+")"}})))},m={appetizer:[{name:"Il Panaro",image:"basket",description:"Cestino di riso carnaroli allo zafferano, sugo di vitello con carote sedano e piselli, fonduta di provola dolce e pasta kataifa crispy"}],antipasti:[{name:"Pitrudda da Trizza",image:"pitrudda",description:"Crispella di cavolfiore bianco, mousse di sedano rapa con olio all'aglio, acqua di barbabietola e germogli di bieta"},{name:"Autunno nei nebrodi",image:"nebrodi",description:"Carpaccio di wagyu, gel di cetriolo, spinacino al burro, piccadilly confit, salsa al parmiggiano reggiano 48 mesi e tuorlo di quaglia"},{name:"Raw clorofilla",image:"battuta",description:"Battuta di fassona, clorofilla di rucola solida, crackers di mais, pickled cipolla giarratana e nocciole tostate"}],primi:[{name:"Pendici dell'Etna",image:"pendici",description:"Risotto carnaroli all'onda, salsa ai porcini, riduzione di mirtilli rossi e crumble di guanciale Sant'Angelo di Brolo"}],secondi:[{name:"Chocolate horse",image:"filetto",description:"Filetto di cavallo medium rare, chips con frolla di mais salata, coulis di more, scaglie di cioccolato fondente 90% e acqua di ragusano dop stagionato"}]},d="3427326917",p=function(){var e,t=(0,l.useState)(""),n=t[0],a=t[1],r=(0,l.useRef)(null),i=(0,l.useState)(!0),o=i[0],c=i[1];return(0,l.useEffect)((function(){r.current&&r.current.getBoundingClientRect().top<window.innerHeight/2?c(!0):c(!1)}),[null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect().top]),l.createElement("div",{className:"contact-form lg:mt-44 pb-44",ref:r},l.createElement("div",{className:o?"contact-form__animation_in":"contact-form__animation_out"},l.createElement("h1",{className:"contact-form__title mt-20 mb-20"},"Contact"),l.createElement("div",{className:"contact-form__container"},l.createElement("textarea",{id:"contact",placeholder:"Buonasera, gradirei avere maggiori informazioni...",value:n,onChange:function(e){return a(e.target.value)},className:"contact-form__input"}),l.createElement("div",{className:"contact-form__media-container"},l.createElement("a",{href:"https://wa.me/+393427326917/?text="+n,className:"contact-form__whatsapp"},l.createElement("i",{className:"fab fa-whatsapp"})),l.createElement("a",{href:"http://m.me/PrivateChefCatania?text="+n,className:"contact-form__facebook"},l.createElement("i",{className:"fab fa-facebook"})),l.createElement("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=info@privatechefcatania.com&su=Private Chef Info Request&body="+n,className:"contact-form__gmail"},l.createElement("i",{className:"fab fa-google"})),l.createElement("a",{href:"mailto:info@privatechefcatania.com?subject=Private Chef Info Request&body="+n,className:"contact-form__email"},l.createElement("i",{className:"far fa-envelope"}))))))},h=n(3072),v=n.n(h),y=function(){return l.createElement("div",{className:"footer py-10"},l.createElement("div",{className:"footer__columns flex-col xl:flex-row"},l.createElement("div",{className:"footer__column"},l.createElement("a",{href:"3427326917"},l.createElement("i",{className:"fab fa-google"}),l.createElement("p",null,"Google Reviews"))),l.createElement("div",{className:"footer__column"},l.createElement("a",{href:"tel:3427326917"},l.createElement("i",{className:"fas fa-phone"})," ",l.createElement("p",null,d))),l.createElement("div",{className:"footer__column"},l.createElement("a",{href:"https://www.takeachef.com/it-it/chef/fabio-simone"},l.createElement(v(),{style:{backgroundColor:"#fff",padding:"10px",width:"10rem"}}))),l.createElement("div",{className:"footer__column"},l.createElement("a",{href:"https://www.facebook.com/PrivateChefCatania"},l.createElement("i",{className:"fab fa-facebook"}),l.createElement("p",null,"PrivateChefCatania")))),l.createElement("p",{className:"footer__credits mt-10 pt-10"},"WebSite from Mirko Torrisi"))},g=function(e){var t=e.menuItem,n=t.image,a=t.name,r=t.description;e.backgroundImage;return l.createElement("li",{className:"menu-item__container my-5",style:{backgroundImage:"url(/images/"+n+".jpg)"},key:"name"},l.createElement("div",{className:"menu-item__image  "},l.createElement("div",{className:"sliding-container"},l.createElement("h3",{className:"menu-item__name"},a),l.createElement("p",{className:"menu-item__description"},r))))},b=function(e){var t=e.menuItem,n=t.image,a=t.name,r=t.description;return l.createElement("div",{className:"flip-card my-5",style:{transform:"rotateX(180deg)"}},l.createElement("div",{className:"flip-card__inner"},l.createElement("div",{className:"flip-card__front"},l.createElement("p",{className:"flip-card__description"},r)),l.createElement("div",{className:"flip-card__back",style:{backgroundImage:"url(/images/"+n+".jpg)"}},l.createElement("h1",{className:"flip-card__title"},a))))},E=function(e){var t=e.menu,n=["lemon_bg","onion_bg","salmon_bg"],a="undefined"!=typeof window&&window.innerWidth,r=(0,l.useMemo)((function(){return Object.entries(t).map((function(e){var t=e[0],r=e[1];return l.createElement(l.Fragment,null,l.createElement("h2",{className:"menu__section__title"},t),r.map((function(e,t){return a>=720?l.createElement(g,{menuItem:e,backgroundImage:n[t]}):l.createElement(b,{menuItem:e,backgroundImage:n[t]})})))}))}),[a]);return l.createElement("div",{className:"menu__container fade-in-bck"},l.createElement("h1",{className:"menu__title"},"Il mio menu invernale"),l.createElement("ul",{className:"menu"},r))},w=function(){var e,t=(0,l.useRef)(null),n=(0,l.useState)(!0),a=n[0],r=n[1];return(0,l.useEffect)((function(){t.current&&t.current.getBoundingClientRect().top<window.innerHeight/2?r(!0):r(!1)}),[null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().top]),l.createElement("div",{className:"about pb-44",ref:t},l.createElement("div",{className:a?"about__animation_in":"about__animation_out"},l.createElement("h1",{className:"about__title mt-20 mb-20"},"About"),l.createElement("div",{className:"about__container"},l.createElement("p",{className:"about__bio"},l.createElement("img",{src:"../../../images/fusione.png",alt:"fabio simone",className:"about__pic"}),"Sono nato a Catania, fra le pendici dell'Etna e le coste della Sicilia orientale, luogo d'origine di molteplici tradizioni culinarie ispirate dal connubio fra terra e mare. La mia passione nasce tra i fornelli di casa, durante la preparazione di pranzi domenicali in famiglia, utilizzando ingredienti provenienti da ogni parte della Sicilia. Quegli stessi aromi, gradevoli al naso e al palato, continuano ad essere fonte d'ispirazione, sia per ritrovare gli antichi sapori sia per reinventarmi in nuove pietanze. Ho avuto la fortuna di poter ampliare le mie conoscenze anche fuori dal mio paese, tra le migliori cucine francesi e inglesi. Conoscendo gli amati sapori natii e quelli del resto del mondo che mi hanno incuriosito sono riuscito ad inventare menù pronti a soddisfare qualsiasi palato. Il mio obiettivo è soddisfare questi palati, nell'intimità di casa, dando origine per Voi al concetto di \"ristorante\" a domicilio!"))))},T=n(9584),C=n.n(T),_=n(5697),N=n.n(_),A=n(6124),k=n.n(A),O=n(523),S=n.n(O),M=n(4756),j=n.n(M),L="bodyAttributes",x="htmlAttributes",H="titleAttributes",Z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},P=(Object.keys(Z).map((function(e){return Z[e]})),"charset"),I="cssText",z="href",V="http-equiv",R="innerHTML",B="itemprop",q="name",D="property",F="rel",Y="src",U="target",W={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K="defaultTitle",$="defer",G="encodeSpecialCharacters",X="onChangeClientState",Q="titleTemplate",J=Object.keys(W).reduce((function(e,t){return e[W[t]]=t,e}),{}),ee=[Z.NOSCRIPT,Z.SCRIPT,Z.STYLE],te="data-react-helmet",ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},re=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},oe=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},ce=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},le=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},se=function(e){var t=pe(e,Z.TITLE),n=pe(e,Q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=pe(e,K);return t||a||void 0},ue=function(e){return pe(e,X)||function(){}},fe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ie({},e,t)}),{})},me=function(e,t){return t.filter((function(e){return void 0!==e[Z.BASE]})).map((function(e){return e[Z.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var i=a[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},de=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&be("Helmet: "+e+' should be of type "Array". Instead found type "'+ne(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===F&&"canonical"===e[n].toLowerCase()||l===F&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==R&&c!==I&&c!==B||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],l=j()({},a[c],r[c]);a[c]=l}return e}),[]).reverse()},pe=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},he=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){he(e)}),0)}),ve=function(e){return clearTimeout(e)},ye="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||he:n.g.requestAnimationFrame||he,ge="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ve:n.g.cancelAnimationFrame||ve,be=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Ee=null,we=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;_e(Z.BODY,a),_e(Z.HTML,r),Ce(f,m);var d={baseTag:Ne(Z.BASE,n),linkTags:Ne(Z.LINK,i),metaTags:Ne(Z.META,o),noscriptTags:Ne(Z.NOSCRIPT,c),scriptTags:Ne(Z.SCRIPT,s),styleTags:Ne(Z.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,a=t.oldTags;n.length&&(p[e]=n),a.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,p,h)},Te=function(e){return Array.isArray(e)?e.join(""):e},Ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=Te(e)),_e(Z.TITLE,t)},_e=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute(te),r=a?a.split(","):[],i=[].concat(r),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===r.indexOf(l)&&r.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);r.length===i.length?n.removeAttribute(te):n.getAttribute(te)!==o.join(",")&&n.setAttribute(te,o.join(","))}},Ne=function(e,t){var n=document.head||document.querySelector(Z.HEAD),a=n.querySelectorAll(e+"["+"data-react-helmet]"),r=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===R)n.innerHTML=t.innerHTML;else if(a===I)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[a]?"":t[a];n.setAttribute(a,c)}n.setAttribute(te,"true"),r.some((function(e,t){return o=t,n.isEqualNode(e)}))?r.splice(o,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},Ae=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[W[n]||n]=e[n],t}),t)},Oe=function(e,t,n){switch(e){case Z.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[te]=!0,r=ke(n,a),[l.createElement(Z.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=Ae(n),i=Te(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+le(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+le(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case L:case x:return{toComponent:function(){return ke(t)},toString:function(){return Ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})[te]=!0,a);return Object.keys(t).forEach((function(e){var n=W[e]||e;if(n===R||n===I){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),l.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===R||e===I)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+le(a[t],n)+'"';return e?e+" "+r:r}),""),i=a.innerHTML||a.cssText||"",o=-1===ee.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Se=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:Oe(Z.BASE,t,a),bodyAttributes:Oe(L,n,a),htmlAttributes:Oe(x,r,a),link:Oe(Z.LINK,i,a),meta:Oe(Z.META,o,a),noscript:Oe(Z.NOSCRIPT,c,a),script:Oe(Z.SCRIPT,l,a),style:Oe(Z.STYLE,s,a),title:Oe(Z.TITLE,{title:f,titleAttributes:m},a)}},Me=k()((function(e){return{baseTag:me([z,U],e),bodyAttributes:fe(L,e),defer:pe(e,$),encode:pe(e,G),htmlAttributes:fe(x,e),linkTags:de(Z.LINK,[F,z],e),metaTags:de(Z.META,[q,P,V,D,B],e),noscriptTags:de(Z.NOSCRIPT,[R],e),onChangeClientState:ue(e),scriptTags:de(Z.SCRIPT,[Y,R],e),styleTags:de(Z.STYLE,[I],e),title:se(e),titleAttributes:fe(H,e)}}),(function(e){Ee&&ge(Ee),e.defer?Ee=ye((function(){we(e,(function(){Ee=null}))})):(we(e),Ee=null)}),Se)((function(){return null})),je=(i=Me,c=o=function(e){function t(){return ae(this,t),ce(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!S()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Z.SCRIPT:case Z.NOSCRIPT:return{innerHTML:t};case Z.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return ie({},a,((t={})[n.type]=[].concat(a[n.type]||[],[ie({},r,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case Z.TITLE:return ie({},r,((t={})[a.type]=o,t.titleAttributes=ie({},i),t));case Z.BODY:return ie({},r,{bodyAttributes:ie({},i)});case Z.HTML:return ie({},r,{htmlAttributes:ie({},i)})}return ie({},r,((n={})[a.type]=ie({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ie({},t);return Object.keys(e).forEach((function(t){var a;n=ie({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return l.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[J[n]||n]=e[n],t}),t)}(oe(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case Z.LINK:case Z.META:case Z.NOSCRIPT:case Z.SCRIPT:case Z.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=oe(e,["children"]),a=ie({},n);return t&&(a=this.mapChildrenToProps(t,a)),l.createElement(i,a)},re(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(l.Component),o.propTypes={base:N().object,bodyAttributes:N().object,children:N().oneOfType([N().arrayOf(N().node),N().node]),defaultTitle:N().string,defer:N().bool,encodeSpecialCharacters:N().bool,htmlAttributes:N().object,link:N().arrayOf(N().object),meta:N().arrayOf(N().object),noscript:N().arrayOf(N().object),onChangeClientState:N().func,script:N().arrayOf(N().object),style:N().arrayOf(N().object),title:N().string,titleAttributes:N().object,titleTemplate:N().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=Se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);je.renderStatic=je.rewind;var Le=function(){var e=function(e){void 0===e&&(e={});var t=e.throttleMs,n=void 0===t?100:t,a=l.useState(0),r=a[0],i=a[1],o=C()((function(){i(window.pageYOffset)}),n);return l.useEffect((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[o]),r}();return l.createElement("main",{className:"main flex-wrap"},l.createElement("title",null,"Private Chef Catania"),l.createElement(je,null,l.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.4/css/all.css",integrity:"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",crossorigin:"anonymous"})),l.createElement(f,{index:e}),l.createElement("div",{className:"main__container grid"},l.createElement(E,{menu:m}),l.createElement(p,null),l.createElement(w,null),l.createElement(y,null)))}},3369:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("defs",{key:0},a.createElement("style",null,".cls-1{fill:#9b80b9;}.cls-2{fill:#ed7568;}.cls-3{fill:#f4ea6b;}.cls-4{fill:none;stroke-width:0.5px;}.cls-4,.cls-6{stroke:#1d1d1b;stroke-miterlimit:10;}.cls-5,.cls-6{fill:#160f0f;}.cls-6{stroke-width:0.25px;}")),a.createElement("g",{id:"Livello_2","data-name":"Livello 2",key:1},a.createElement("g",{id:"Livello_1-2","data-name":"Livello 1"},[a.createElement("rect",{className:"cls-1",x:"142.38",y:"97.31",width:"83.7",height:"83.7",key:0}),a.createElement("rect",{className:"cls-2",x:"63.9",y:"95.45",width:"53.96",height:"84.92",key:1}),a.createElement("path",{className:"cls-3",d:"M201.93,74l0-1.46a73.22,73.22,0,0,0-146.44,0l0,1.46Z",key:2}),a.createElement("polyline",{className:"cls-4",points:"232.84 85.33 232.84 85.39 232.75 85.39",key:3}),a.createElement("path",{className:"cls-5",d:"M16.07,238.06a.82.82,0,0,1,.75.85.74.74,0,0,1-.8.8H.75A.71.71,0,0,1,0,239a.87.87,0,0,1,.7-.9c2.85-.76,3.05-2.91,3.15-5.41l.7-20.72a3.24,3.24,0,0,0-3-3.55.84.84,0,0,1,.15-1.66H7.81c2.5,0,5.9-.3,10.66-.3,8,0,11,4.56,11,9.66,0,6.31-4.81,12.87-14.92,12.87H11l-.15,4.4C10.81,236.7,12.61,237.65,16.07,238.06Zm6.55-19.62c0-7.26-5.7-9.61-10.11-9.61-.55,0-.85.2-.85.7l-.55,14.61a1.44,1.44,0,0,0,.65,1.35,7.15,7.15,0,0,0,3.3.75C19.92,226.24,22.62,223,22.62,218.44Z",key:4}),a.createElement("path",{className:"cls-5",d:"M43,215.73l-.4,5.46c0,.15,0,.2.1.2s.1,0,.15-.15c1.41-3.1,5-6.46,8-6.46,1.7,0,2,2.91,2,6.41,0,1.3-.4,2.55-1.35,2.55a2.13,2.13,0,0,1-1.35-.5c-.85-.55-2-1.9-3.8-1.9-2.5,0-3.41,2.6-3.51,4.95l-.25,6.41c0,3.5,1.76,4.75,5.61,5.36a.76.76,0,0,1,.65.8.8.8,0,0,1-.8.85H32.83A.75.75,0,0,1,32,239a.87.87,0,0,1,.75-.9c2.91-.71,3.06-2.86,3.16-5.46l.35-9.81c0-1.9-1.15-2.7-3.66-2.7a1.18,1.18,0,0,1-.35-.8,1.21,1.21,0,0,1,1.1-1.15,19,19,0,0,0,5.76-2.21,4,4,0,0,1,2.25-.9A2,2,0,0,1,43,215.73Z",key:5}),a.createElement("path",{className:"cls-5",d:"M60.16,222.54c0-1.9-1.2-2.7-3.7-2.7a1.1,1.1,0,0,1,.7-1.9A16.55,16.55,0,0,0,63,215.63a4.78,4.78,0,0,1,2.25-.85,2.06,2.06,0,0,1,1.7.7l-.6,18c0,2.1.2,4.1,2.8,4.61a.73.73,0,0,1,.65.8.8.8,0,0,1-.8.85H56.51a.7.7,0,0,1-.7-.75.83.83,0,0,1,.65-.9c2.85-.61,3.25-2.56,3.35-5.46Zm7.36-16.12c0,2.61-1.6,4.06-4.15,4.06-2.71,0-3.81-1.4-3.81-3.5,0-2.61,1.55-4.06,4.11-4.06S67.52,204.32,67.52,206.42Z",key:6}),a.createElement("path",{className:"cls-5",d:"M75.13,220.49a4.24,4.24,0,0,0-3.8-3.16.82.82,0,0,1-.66-.9.76.76,0,0,1,.81-.8H84.54a.75.75,0,0,1,.8.85c0,.45-.2.85-.75.85-1.55,0-2.3.66-2.3,1.81a4.42,4.42,0,0,0,.2,1.35L87,235.3h.25l5.91-14.81a3,3,0,0,0,.25-1.2c0-1.55-1.71-1.9-3.51-2a.76.76,0,0,1-.75-.85.78.78,0,0,1,.8-.85H100.5a.8.8,0,0,1,.85.8.84.84,0,0,1-.8.9c-2,.11-2.85,1-3.75,3.16l-8.21,19c-.15.4-1.3.65-3.3.7s-3.15-.25-3.3-.6Z",key:7}),a.createElement("path",{className:"cls-5",d:"M106,224.84c-1.45,0-3.45-1.25-3.45-2.65s1.65-3.15,2.9-4.15a13.88,13.88,0,0,1,8.81-3.11c5.3,0,9.31,2.81,9.31,9.61l-.3,8.51c0,2.45,1,3.9,2.65,3.9h.55c.5,0,.75.05.75.55,0,1.36-3.4,2.51-5.6,2.51-3.16,0-4.66-1.95-4.66-4.51,0-.05,0-.05-.15-.05s-.2,0-.2.05a8.27,8.27,0,0,1-7.66,4.71c-4.25,0-7-3.16-7-7.51a2.44,2.44,0,0,1,1.1-2.25c2.4-1.9,8.06-3.81,13-4.76.65-.1,1-.2,1-1.1,0-4.15-2.7-5.7-5.8-5.7-1.46,0-3.36.25-3.36,1.5C107.86,223.29,107.46,224.84,106,224.84ZM112.12,236c4,0,4.85-4.35,4.85-7v-1.31a.24.24,0,0,0-.25-.25.38.38,0,0,0-.2.05c-2.3.61-8.21,2.51-8.21,4.06C108.31,234,109.76,236,112.12,236Z",key:8}),a.createElement("path",{className:"cls-5",d:"M132.64,219.69c0-.25-.1-.35-.4-.35h-3.36c-.4-.05-.55-.45-.55-1s.15-1,.6-1.1a11.93,11.93,0,0,0,8.26-7.91c.1-.4.7-.6,1.25-.6s1.16.25,1.16.75l-.26,6.2c0,.2.06.35.36.35h7.1c.55.1.75.6.75,1.15s-.3,1.31-.85,1.41l-7.41.75-.4,11.31a5.2,5.2,0,0,0,1,3.7,4.22,4.22,0,0,0,3.1,1.2,5.52,5.52,0,0,0,3.8-1.5,1.19,1.19,0,0,1,.45-.15.71.71,0,0,1,.7.8,1.42,1.42,0,0,1-.2.65,10,10,0,0,1-8.6,4.91,6.76,6.76,0,0,1-5.31-2,8.09,8.09,0,0,1-1.6-5.46Z",key:9}),a.createElement("path",{className:"cls-5",d:"M173,222.09a3.61,3.61,0,0,1-2.6,3.65c-3.06,1.15-10.91,2.06-14,2.06a.27.27,0,0,0-.3.3,10.21,10.21,0,0,0,.9,2.8,8.6,8.6,0,0,0,7.76,4.3,10.21,10.21,0,0,0,7.41-3.15.85.85,0,0,1,.65-.35.67.67,0,0,1,.7.65,1.24,1.24,0,0,1-.05.4,12.76,12.76,0,0,1-11.81,7.51A10.9,10.9,0,0,1,150.41,229c0-7.46,5.75-14.07,13.61-14.07C169.43,214.88,173,218.24,173,222.09Zm-17.27,1.6a11.54,11.54,0,0,0-.15,1.85c0,.2.15.3.4.3,2.25,0,10.86-1.55,10.86-2.4a5.53,5.53,0,0,0-5.35-5.05C158.26,218.39,156.31,220.74,155.71,223.69Z",key:10}),a.createElement("path",{className:"cls-5",d:"M196.9,206.17c6.41,0,8.41,1.86,8.41,6.31,0,1.05-.2,3.25-.2,3.75a1,1,0,0,1-1,1.1c-.5,0-.85-.4-1.15-.9-1.85-4.1-5.41-6.5-9.31-6.5-6.4,0-10.56,5-10.56,11.86,0,7.16,4.2,13,11.76,13,3.26,0,6.61-1.3,8.16-4.35a1.4,1.4,0,0,1,1.1-.8.91.91,0,0,1,.85,1c0,.45-.15,1-.2,1.7a7.09,7.09,0,0,1-2.25,4.55,15,15,0,0,1-10.21,3.41c-8.61,0-15-5.66-15-15.12C177.29,214.48,185.89,206.17,196.9,206.17Z",key:11}),a.createElement("path",{className:"cls-5",d:"M234.74,223.54l-.35,9.56c0,2.85.4,4.4,2.81,5a.79.79,0,0,1,.7.8.78.78,0,0,1-.8.85H224.63a.67.67,0,0,1-.7-.75.83.83,0,0,1,.65-.9c3-.71,3.21-2.66,3.31-5.41l.25-6.81c0-2.85-.55-6.25-4.26-6.25-4.35,0-5.6,4.35-5.7,8.31l-.2,5.6c0,2.55.4,4.05,2.65,4.56.45.15.7.4.7.8a.78.78,0,0,1-.8.85H208.22a.68.68,0,0,1-.75-.75.83.83,0,0,1,.7-.9c2.8-.71,3.1-2.86,3.2-5.41l.7-21.52c0-1.9-1.2-2.75-3.7-2.75a1.12,1.12,0,0,1-.35-.85,1,1,0,0,1,1-1,18.63,18.63,0,0,0,5.9-2.3,4.26,4.26,0,0,1,2.31-.9,1.93,1.93,0,0,1,1.6.7l-.45,12.81a39.21,39.21,0,0,1-.35,4.36c0,.1.05.15.1.15a.11.11,0,0,0,.1-.1c1.7-3.91,5.1-6.36,9-6.36C232.89,214.88,234.74,218.89,234.74,223.54Z",key:12}),a.createElement("path",{className:"cls-5",d:"M263.27,222.09a3.61,3.61,0,0,1-2.6,3.65c-3.05,1.15-10.91,2.06-14,2.06a.27.27,0,0,0-.3.3,10.21,10.21,0,0,0,.9,2.8,8.57,8.57,0,0,0,7.76,4.3,10.18,10.18,0,0,0,7.4-3.15.85.85,0,0,1,.65-.35.67.67,0,0,1,.7.65,1.24,1.24,0,0,1-.05.4A12.75,12.75,0,0,1,252,240.26,10.9,10.9,0,0,1,240.7,229c0-7.46,5.76-14.07,13.61-14.07C259.72,214.88,263.27,218.24,263.27,222.09ZM246,223.69a11.54,11.54,0,0,0-.15,1.85c0,.2.15.3.4.3,2.25,0,10.86-1.55,10.86-2.4a5.53,5.53,0,0,0-5.36-5.05C248.56,218.39,246.61,220.74,246,223.69Z",key:13}),a.createElement("path",{className:"cls-5",d:"M287.5,208.18a6,6,0,0,1-4.81,1.85c-1.15,0-2.35-.25-3.4-.25a2.63,2.63,0,0,0-3,2.85,7.49,7.49,0,0,0,.6,2.55,1.1,1.1,0,0,0,1.15.85h7.61c.6,0,.8.6.8,1.15,0,.71-.35,1.36-.85,1.41l-7.91.75-.45,13.36c0,3.5,2.15,4.85,5.8,5.36a.79.79,0,0,1,.66.8c0,.55-.3.85-.75.85H267.58a.71.71,0,0,1-.75-.75.87.87,0,0,1,.7-.9c2.75-.76,3.1-2.86,3.2-5.41l.45-13a.32.32,0,0,0-.35-.35h-3.45c-.35,0-.6-.5-.6-1.05s.2-1,.65-1.11,3.35-.9,3.9-1.05a12.66,12.66,0,0,1,5.86-9.56,20.5,20.5,0,0,1,11.61-3.25A7.58,7.58,0,0,1,287.5,208.18Z",key:14}),a.createElement("path",{className:"cls-5",d:"M102.59,263.32a7.32,7.32,0,0,1-4,1.17c-4.4,0-7.71-3-7.71-7.4a7.47,7.47,0,0,1,7.73-7.4,6.92,6.92,0,0,1,3.57,1l-.69,1.16a6.07,6.07,0,0,0-2.9-.75,5.85,5.85,0,0,0-6.1,6c0,3.66,2.46,6,6.12,6a5.92,5.92,0,0,0,3.19-.94Z",key:15}),a.createElement("path",{className:"cls-5",d:"M113.55,249.93h1.37l5,14.31h-1.69L117.13,261h-6.3l-1.22,3.25H108Zm-2.2,9.67h5.33l-2.49-7.54h0Z",key:16}),a.createElement("path",{className:"cls-5",d:"M129.22,251.32v12.92H127.7V251.32H124v-1.39h8.92v1.39Z",key:17}),a.createElement("path",{className:"cls-5",d:"M142.53,249.93h1.37l5,14.31h-1.7L146.11,261h-6.3l-1.23,3.25H137Zm-2.21,9.67h5.34l-2.5-7.54h0Z",key:18}),a.createElement("path",{className:"cls-5",d:"M165.45,264.24l-8.53-11.49v11.49h-1.43V249.93h1.13l8.54,11.51V249.93h1.43v14.31Z",key:19}),a.createElement("path",{className:"cls-5",d:"M174.9,264.24V249.93h1.51v14.31Z",key:20}),a.createElement("path",{className:"cls-5",d:"M188.53,249.93h1.37l5,14.31H193.2L192.11,261h-6.3l-1.22,3.25H183Zm-2.2,9.67h5.33l-2.49-7.54h0Z",key:21}),a.createElement("path",{className:"cls-6",d:"M217.28,78.75l0-1.46a73.22,73.22,0,0,0-146.44,0l0,1.46ZM189,34.08a62.39,62.39,0,0,1,17.89,43.21h-61.1ZM144.77,76.26V15.15A62.55,62.55,0,0,1,188,33Zm-1.46,0L100.1,33a62.45,62.45,0,0,1,43.21-17.89ZM99.06,34.08l43.22,43.21H81.17A62.51,62.51,0,0,1,99.06,34.08ZM144,6.24A71.85,71.85,0,0,1,215.8,77.29h-7.43a64.34,64.34,0,0,0-128.67,0H72.28A71.86,71.86,0,0,1,144,6.24Z",key:22}),a.createElement("path",{className:"cls-6",d:"M217.28,86.84H132.11v84.81h85.17V160.73h0V86.84Zm-1.46,1.46V116A28.32,28.32,0,0,1,188,88.3Zm-29.21,0a29.73,29.73,0,0,0,29.21,29.13v13a42.76,42.76,0,0,1-42.2-42.12Zm-14.43,0a44.18,44.18,0,0,0,43.64,43.55v13A57.18,57.18,0,0,1,159.2,88.3Zm-14.42,0a58.62,58.62,0,0,0,58.06,58v13a71.61,71.61,0,0,1-71-71Zm-24.19,81.89V115.86a88,88,0,0,0,53.76,54.33Zm58.44,0A86.45,86.45,0,0,1,133.57,111V88.3h9.77a73.06,73.06,0,0,0,72.48,72.41v9.48Z",key:23}),a.createElement("path",{className:"cls-6",d:"M70.72,171.76H124V86.59H70.72Zm51.85-17.24L106.79,170.3H97l25.59-25.59Zm0-11.87L94.92,170.3H85.09l37.48-37.48Zm0-11.9L83,170.3H73.21l49.36-49.36Zm0-23.75L72.18,157.37v-9.81l50.39-50.39ZM72.18,123.79l35.74-35.74h9.83L72.18,133.6Zm0-2.07V111.9L96,88.05h9.82Zm0-11.89V100L84.09,88.09l0,0H94Zm0,49.61,50.39-50.38v9.81L72.18,169.26Zm36.68,10.86,13.71-13.71V170.3Zm13.71-75.2L72.18,145.5v-9.83l47.63-47.62h2.76Zm-40.5-7-9.89,9.88V88.05Z",key:24})]))])}r.defaultProps={viewBox:"0 0 288.8 264.49"},e.exports=r,r.default=r},3072:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("path",{fill:"none",d:"M30.73 18.07h9.91L35.73 5.62l-5 12.45zm75.41 0h9.91l-4.91-12.45-5 12.45z",key:0}),a.createElement("path",{fill:"#524e4e",d:"M20.12.5a.84.84 0 0 0-.59-.21H.85A.87.87 0 0 0 .24.5a.74.74 0 0 0-.24.57v1.84a.93.93 0 0 0 .22.67.91.91 0 0 0 .61.22h7.58v22.7a.83.83 0 0 0 .26.6.88.88 0 0 0 .59.24h1.84a.8.8 0 0 0 .63-.26.91.91 0 0 0 .27-.58V3.8h7.58a.8.8 0 0 0 .62-.3 1 1 0 0 0 .22-.63v-1.8a.8.8 0 0 0-.3-.57zm27.59 25.82v-.18L37.26.93a1.38 1.38 0 0 0-.08-.2A.83.83 0 0 0 37 .5a.47.47 0 0 0-.26-.19 1 1 0 0 0-.45-.08h-1.15a1.48 1.48 0 0 0-.47.08.8.8 0 0 0-.26.19 1.35 1.35 0 0 0-.14.22 1.85 1.85 0 0 0-.1.2L23.68 26.16v.49c0 .42.27.62.83.62h1.92a1 1 0 0 0 .61-.18 1.09 1.09 0 0 0 .36-.48c.17-.51.43-1.2.77-2.09s.75-1.86 1.18-2.93h12.7l2 5a1.09 1.09 0 0 0 .36.48 1 1 0 0 0 .61.18H47c.54 0 .83-.2.83-.62a.39.39 0 0 0 0-.14 1.33 1.33 0 0 0-.12-.17zm-17-8.24l5-12.46 4.91 12.46zM74 26.57L61.54 11.85c1.78-1.86 3.54-3.7 5.26-5.52S70.24 2.65 72 .79v.06a.55.55 0 0 0 .2-.36c0-.15-.16-.21-.45-.21h-3.63a1.13 1.13 0 0 0-.83.57l-12.58 13.2v-13a.75.75 0 0 0-.26-.55.89.89 0 0 0-.59-.23H52a.76.76 0 0 0-.61.25.8.8 0 0 0-.2.56V26.5a.72.72 0 0 0 .81.8h1.88a.73.73 0 0 0 .83-.8v-7.39l4.45-4.73 10.29 12.37a1 1 0 0 0 .81.56h3.6c.26 0 .4-.06.4-.2a.59.59 0 0 0-.06-.18 1.69 1.69 0 0 0-.2-.36zm21.81-2.81H81.07v-8.94H92.6a.8.8 0 0 0 .61-.26.92.92 0 0 0 .2-.59v-1.86a.8.8 0 0 0-.24-.65.94.94 0 0 0-.57-.18H81.07V3.8h14.66a.85.85 0 0 0 .67-.3 1 1 0 0 0 .2-.61V1.13c0-.58-.26-.87-.83-.87H78.33c-.55 0-.81.27-.81.83V26.5c0 .5.28.76.81.76h17.5a.71.71 0 0 0 .81-.8v-1.85c0-.57-.26-.85-.83-.85z",key:1}),a.createElement("path",{fill:"#fb8842",d:"M123.13 26.32v-.18L112.68.93a1.38 1.38 0 0 0-.08-.2 1.21 1.21 0 0 0-.15-.22.47.47 0 0 0-.26-.19 1 1 0 0 0-.44-.08h-1.2a1.36 1.36 0 0 0-.46.08.8.8 0 0 0-.26.19 1 1 0 0 0-.15.22 1.85 1.85 0 0 0-.1.2L99.07 26.16v.49c0 .42.26.62.83.62h1.92a1 1 0 0 0 .6-.18 1 1 0 0 0 .37-.48c.18-.51.44-1.2.79-2.09s.75-1.86 1.17-2.93h12.78l2 5a1.09 1.09 0 0 0 .36.48 1 1 0 0 0 .61.18h1.92c.55 0 .83-.2.83-.62a.39.39 0 0 0 0-.14c-.1.01-.1-.11-.12-.17zm-17-8.24l5-12.46 4.91 12.46z",key:2}),a.createElement("path",{fill:"#524e4e",d:"M132.43 6.63a11 11 0 0 1 7.76-3.13 11.85 11.85 0 0 1 3.06.58A10.58 10.58 0 0 1 146 5.5a3.61 3.61 0 0 0 .36.2.79.79 0 0 0 .28.06.88.88 0 0 0 .65-.44l1-1.6a.68.68 0 0 0 .14-.44.71.71 0 0 0-.12-.39 1 1 0 0 0-.32-.34 11.6 11.6 0 0 0-4-1.88 13.54 13.54 0 0 0-4.3-.67 13.77 13.77 0 0 0-3.69.5 13.33 13.33 0 0 0-3.32 1.39 14.11 14.11 0 0 0-2.81 2.18 14.44 14.44 0 0 0-2.18 2.83 14.14 14.14 0 0 0-1.4 10.7 14 14 0 0 0 3.56 6.13 14.11 14.11 0 0 0 2.81 2.18 13.33 13.33 0 0 0 3.34 1.4 13.55 13.55 0 0 0 3.7.49 13.7 13.7 0 0 0 4.45-.71 14.12 14.12 0 0 0 3.76-1.94.75.75 0 0 0 .44-.69 1 1 0 0 0-.12-.44l-1-1.72c-.18-.3-.39-.46-.61-.46a1.12 1.12 0 0 0-.56.2 16 16 0 0 1-1.78 1c-.57.26-1.12.48-1.62.67a10.46 10.46 0 0 1-1.52.36 12.43 12.43 0 0 1-1.49.1 10.23 10.23 0 0 1-3.93-.77 9.87 9.87 0 0 1-3.27-2.12 10.65 10.65 0 0 1-2.25-3.26 10.24 10.24 0 0 1-.82-4.1 10 10 0 0 1 .82-4 10.43 10.43 0 0 1 2.23-3.29zM174.58.5a.92.92 0 0 0-.6-.23h-1.84a.72.72 0 0 0-.59.25.82.82 0 0 0-.22.56v10.2H156V1.07a.78.78 0 0 0-.26-.56.81.81 0 0 0-.59-.25h-1.88a.72.72 0 0 0-.58.25.82.82 0 0 0-.22.56V26.5a.71.71 0 0 0 .8.8h1.84c.59 0 .87-.28.87-.8V14.8h15.35v11.7a.71.71 0 0 0 .81.8H174c.58 0 .87-.28.87-.8V1.07a.69.69 0 0 0-.29-.57zm23.96 23.26H183.8v-8.94h11.55a.77.77 0 0 0 .6-.26.87.87 0 0 0 .21-.59v-1.86a.77.77 0 0 0-.25-.65.89.89 0 0 0-.56-.18H183.8V3.8h14.66a.86.86 0 0 0 .67-.26 1 1 0 0 0 .2-.61v-1.8c0-.58-.26-.87-.83-.87h-17.45c-.54 0-.8.27-.8.83V26.5a.7.7 0 0 0 .8.76h17.51a.71.71 0 0 0 .81-.8v-1.85c0-.57-.26-.85-.83-.85zM221.29.26H204.1a.72.72 0 0 0-.81.83V26.5a.71.71 0 0 0 .81.76h1.9c.57 0 .85-.26.85-.76V16.28h11.41a.76.76 0 0 0 .58-.27.89.89 0 0 0 .2-.58v-1.84a.76.76 0 0 0-.8-.85h-11.41V3.8h14.46a.83.83 0 0 0 .6-.26 1 1 0 0 0 .23-.61v-1.8c0-.58-.27-.87-.83-.87z",key:3})])}r.defaultProps={viewBox:"0 0 222.12 27.8"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-js-0c8f8bad768d06e151d8.js.map