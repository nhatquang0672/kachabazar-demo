(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6664:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return c(e)||p(e,t)||u(e,t)||s()}function c(e){if(Array.isArray(e))return e}function p(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(p){c=!0,o=p}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}function u(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function m(){}function h(){}h.resetWarningCache=m;var y=function(){function e(e,t,n,r,o,a){if(a!==f){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h,resetWarningCache:m};return n.PropTypes=n,n},g=d((function(e){e.exports=y()})),v=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},E=function(e){return null!==e&&"object"===o(e)},b=function(e){return E(e)&&"function"===typeof e.then},w=function(e){return E(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},k="[object Object]",O=function e(t,n){if(!E(t)||!E(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===k;if(o!==(Object.prototype.toString.call(n)===k))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var c={},p=0;p<a.length;p+=1)c[a[p]]=!0;for(var u=0;u<i.length;u+=1)c[i[u]]=!0;var l=Object.keys(c);if(l.length!==a.length)return!1;var s=t,d=n,f=function(t){return e(s[t],d[t])};return l.every(f)},G=function(e,t,n){return E(e)?Object.keys(e).reduce((function(o,i){var c=!E(t)||!O(e[i],t[i]);return n.includes(i)?(c&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):c?r(r({},o||{}),{},a({},i,e[i])):o}),null):null},S="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",T=function(e){if(null===e||w(e))return e;throw new Error(S)},C=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(T)};var t=T(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},_=t.createContext(null);_.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},I=t.createContext(null);I.displayName="CartElementContext";var P=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},j=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return C(n)}),[n]),c=i(t.useState(null),2),p=c[0],u=c[1],l=i(t.useState(null),2),s=l[0],d=l[1],f=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),m=f[0],h=f[1];t.useEffect((function(){var e=!0,t=function(e){h((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||m.stripe?"sync"!==a.tag||m.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,m,r]);var y=v(n);t.useEffect((function(){null!==y&&y!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,n]);var g=v(r);return t.useEffect((function(){if(m.elements){var e=G(r,g,["clientSecret","fonts"]);e&&m.elements.update(e)}}),[r,g,m.elements]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[m.stripe]),t.createElement(_.Provider,{value:m},t.createElement(I.Provider,{value:{cart:p,setCart:u,cartState:s,setCartState:d}},o))};j.propTypes={stripe:g.any,options:g.object};var x=function(e){var n=t.useContext(_);return A(n,e)},M=function(e){var n=t.useContext(I);return P(n,e)},D=function(){return x("calls useElements()").elements},R=function(){return x("calls useStripe()").stripe},N=function(){return M("calls useCartElement()").cart},L=function(){return M("calls useCartElementState()").cartState},U=function(e){return(0,e.children)(x("mounts <ElementsConsumer>"))};U.propTypes={children:g.func.isRequired};var W=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},B=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Z=function(e,n){var r="".concat(B(e),"Element"),o=n?function(e){x("mounts <".concat(r,">")),M("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,c=n.className,p=n.options,u=void 0===p?{}:p,l=n.onBlur,s=n.onFocus,d=n.onReady,f=n.onChange,m=n.onEscape,h=n.onClick,y=n.onLoadError,g=n.onLoaderStart,E=n.onNetworksChange,b=n.onCheckout,w=n.onLineItemClick,k=n.onConfirm,O=n.onCancel,S=n.onShippingAddressChange,T=n.onShippingRateChange,C=x("mounts <".concat(r,">")).elements,_=i(t.useState(null),2),A=_[0],I=_[1],P=t.useRef(null),j=t.useRef(null),D=M("mounts <".concat(r,">")),R=D.setCart,N=D.setCartState;W(A,"blur",l),W(A,"focus",s),W(A,"escape",m),W(A,"click",h),W(A,"loaderror",y),W(A,"loaderstart",g),W(A,"networkschange",E),W(A,"lineitemclick",w),W(A,"confirm",k),W(A,"cancel",O),W(A,"shippingaddresschange",S),W(A,"shippingratechange",T),"cart"===e?o=function(e){N(e),d&&d(e)}:d&&(o="payButton"===e?d:function(){d(A)}),W(A,"ready",o),W(A,"change","cart"===e?function(e){N(e),f&&f(e)}:f),W(A,"checkout","cart"===e?function(e){N(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===P.current&&C&&null!==j.current){var t=C.create(e,u);"cart"===e&&R&&R(t),P.current=t,I(t),t.mount(j.current)}}),[C,u,R]);var L=v(u);return t.useEffect((function(){if(P.current){var e=G(u,L,["paymentRequest"]);e&&P.current.update(e)}}),[u,L]),t.useLayoutEffect((function(){return function(){P.current&&(P.current.destroy(),P.current=null)}}),[]),t.createElement("div",{id:a,className:c,ref:j})};return o.propTypes={id:g.string,className:g.string,onChange:g.func,onBlur:g.func,onFocus:g.func,onReady:g.func,onEscape:g.func,onClick:g.func,onLoadError:g.func,onLoaderStart:g.func,onNetworksChange:g.func,onCheckout:g.func,onLineItemClick:g.func,onConfirm:g.func,onCancel:g.func,onShippingAddressChange:g.func,onShippingRateChange:g.func,options:g.object},o.displayName=r,o.__elementType=e,o},H="undefined"===typeof window,V=Z("auBankAccount",H),q=Z("card",H),F=Z("cardNumber",H),Y=Z("cardExpiry",H),J=Z("cardCvc",H),z=Z("fpxBank",H),K=Z("iban",H),X=Z("idealBank",H),$=Z("p24Bank",H),Q=Z("epsBank",H),ee=Z("payment",H),te=Z("payButton",H),ne=Z("paymentRequestButton",H),re=Z("linkAuthentication",H),oe=Z("address",H),ae=Z("shippingAddress",H),ie=Z("cart",H),ce=Z("paymentMethodMessaging",H),pe=Z("affirmMessage",H),ue=Z("afterpayClearpayMessage",H);e.AddressElement=oe,e.AffirmMessageElement=pe,e.AfterpayClearpayMessageElement=ue,e.AuBankAccountElement=V,e.CardCvcElement=J,e.CardElement=q,e.CardExpiryElement=Y,e.CardNumberElement=F,e.CartElement=ie,e.Elements=j,e.ElementsConsumer=U,e.EpsBankElement=Q,e.FpxBankElement=z,e.IbanElement=K,e.IdealBankElement=X,e.LinkAuthenticationElement=re,e.P24BankElement=$,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=ce,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=N,e.useCartElementState=L,e.useElements=D,e.useStripe=R,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7692)}])},7053:function(e,t,n){"use strict";n.d(t,{H:function(){return i},l:function(){return a}});var r=n(5893),o=n(7294),a=(0,o.createContext)(),i=function(e){var t=e.children,n=(0,o.useState)(!1),i=n[0],c=n[1],p=(0,o.useState)(!1),u=p[0],l=p[1],s=(0,o.useState)(!1),d=s[0],f=s[1],m=(0,o.useState)(1),h=m[0],y=m[1],g=(0,o.useState)(!1),v=g[0],E=g[1],b=function(){return c(!i)},w=function(){return c(!1)},k=function(){return l(!u)},O=function(){return l(!1)},G=function(){return f(!d)},S=function(){return f(!1)},T=function(e){y(e)},C=(0,o.useMemo)((function(){return{cartDrawerOpen:i,toggleCartDrawer:b,closeCartDrawer:w,setCartDrawerOpen:c,categoryDrawerOpen:u,toggleCategoryDrawer:k,closeCategoryDrawer:O,isModalOpen:d,toggleModal:G,closeModal:S,currentPage:h,setCurrentPage:y,handleChangePage:T,isLoading:v,setIsLoading:E}}),[i,u,d,h,v]);return(0,r.jsx)(a.Provider,{value:C,children:t})}},6896:function(e,t,n){"use strict";n.d(t,{S:function(){return p},d:function(){return s}});var r=n(6042),o=n(9396),a=n(5893),i=n(1955),c=n(7294),p=(0,c.createContext)(),u={userInfo:i.Z.get("userInfo")?JSON.parse(i.Z.get("userInfo")):null,shippingAddress:i.Z.get("shippingAddress")?JSON.parse(i.Z.get("shippingAddress")):{},couponInfo:i.Z.get("couponInfo")?JSON.parse(i.Z.get("couponInfo")):{}};function l(e,t){switch(t.type){case"USER_LOGIN":return(0,o.Z)((0,r.Z)({},e),{userInfo:t.payload});case"USER_LOGOUT":return(0,o.Z)((0,r.Z)({},e),{userInfo:null});case"SAVE_SHIPPING_ADDRESS":return(0,o.Z)((0,r.Z)({},e),{shippingAddress:t.payload});case"SAVE_COUPON":return(0,o.Z)((0,r.Z)({},e),{couponInfo:t.payload})}}var s=function(e){var t=e.children,n=(0,c.useReducer)(l,u),r={state:n[0],dispatch:n[1]};return(0,a.jsx)(p.Provider,{value:r,children:t})}},7692:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(6042),o=n(5893),a=(n(1553),n(870)),i=n(6664),c="https://js.stripe.com/v3",p=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,s=function(e){return null!==l||(l=new Promise((function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(u),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(c,'"]')),t=0;t<e.length;t++){var n=e[t];if(p.test(n.src))return n}return null}();r&&e?console.warn(u):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(c).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))),l},d=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.48.0",startTime:t})}(r,n),r},f=Promise.resolve().then((function(){return s(null)})),m=!1;f.catch((function(e){m||console.warn(e)}));var h,y=function(){return h||(h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m=!0;var r=Date.now();return f.then((function(e){return d(e,t,r)}))}("".concat("your Publishable key")||0)),h},g=n(6896),v=n(7294),E=n(9008),b=n.n(E);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function k(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var O={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},G=function(e,t,n){void 0===t&&(t=[]);var r=void 0===n?{}:n,o=r.defaultWidth,a=r.defaultHeight;return t.reduce((function(t,n,r){return t.push(v.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:n.url})),n.alt&&t.push(v.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(v.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(v.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(v.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.width.toString()})):o&&t.push(v.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:o.toString()})),n.height?t.push(v.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:n.height.toString()})):a&&t.push(v.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:a.toString()})),t}),[])},S=function(e){var t,n,r,o=[];e.titleTemplate&&(O.templateTitle=e.titleTemplate);var a="";e.title?(a=e.title,O.templateTitle&&(a=O.templateTitle.replace(/%s/g,(function(){return a})))):e.defaultTitle&&(a=e.defaultTitle),a&&o.push(v.createElement("title",{key:"title"},a));var i,c,p=e.noindex||O.noindex||e.dangerouslySetAllPagesToNoIndex,u=e.nofollow||O.nofollow||e.dangerouslySetAllPagesToNoFollow,l=e.disableGooglebot||O.disableGooglebot||e.dangerouslyDisableGooglebot,s="";if(e.robotsProps){var d=e.robotsProps,f=d.nosnippet,m=d.maxSnippet,h=d.maxImagePreview,y=d.maxVideoPreview,g=d.noarchive,E=d.noimageindex,b=d.notranslate,k=d.unavailableAfter;s=(f?",nosnippet":"")+(m?",max-snippet:"+m:"")+(h?",max-image-preview:"+h:"")+(g?",noarchive":"")+(k?",unavailable_after:"+k:"")+(E?",noimageindex":"")+(y?",max-video-preview:"+y:"")+(b?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(O.disableGooglebot=!0),p||u?(e.dangerouslySetAllPagesToNoIndex&&(O.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(O.nofollow=!0),o.push(v.createElement("meta",{key:"robots",name:"robots",content:(p?"noindex":"index")+","+(u?"nofollow":"follow")+s})),l||o.push(v.createElement("meta",{key:"googlebot",name:"googlebot",content:(p?"noindex":"index")+","+(u?"nofollow":"follow")+s}))):(o.push(v.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+s})),l||o.push(v.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+s}))),e.description&&o.push(v.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&o.push(v.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){o.push(v.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&o.push(v.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&o.push(v.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&o.push(v.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&o.push(v.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&o.push(v.createElement("meta",{key:"og:title",property:"og:title",content:(null==(i=e.openGraph)?void 0:i.title)||a}));(null!=(n=e.openGraph)&&n.description||e.description)&&o.push(v.createElement("meta",{key:"og:description",property:"og:description",content:(null==(c=e.openGraph)?void 0:c.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&o.push(v.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var S=e.openGraph.type.toLowerCase();o.push(v.createElement("meta",{key:"og:type",property:"og:type",content:S})),"profile"===S&&e.openGraph.profile?(e.openGraph.profile.firstName&&o.push(v.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&o.push(v.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&o.push(v.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&o.push(v.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===S&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){o.push(v.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&o.push(v.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&o.push(v.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){o.push(v.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===S&&e.openGraph.article?(e.openGraph.article.publishedTime&&o.push(v.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&o.push(v.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&o.push(v.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){o.push(v.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&o.push(v.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){o.push(v.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==S&&"video.episode"!==S&&"video.tv_show"!==S&&"video.other"!==S||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&o.push(v.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&o.push(v.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){o.push(v.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){o.push(v.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&o.push(v.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&o.push(v.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){o.push(v.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&o.push(v.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(O.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(O.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&o.push.apply(o,G("image",e.openGraph.images,{defaultWidth:O.defaultOpenGraphImageWidth,defaultHeight:O.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(O.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(O.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&o.push.apply(o,G("video",e.openGraph.videos,{defaultWidth:O.defaultOpenGraphVideoWidth,defaultHeight:O.defaultOpenGraphVideoHeight})),e.openGraph.locale&&o.push(v.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&o.push(v.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&o.push(v.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,r;o.push(v.createElement("meta",w({key:"meta:"+(null!=(t=null!=(n=null!=(r=e.keyOverride)?r:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach((function(e){var t;o.push(v.createElement("link",w({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),o},T=function(e){function t(){return e.apply(this,arguments)||this}return k(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,r=e.defaultTitle,o=e.dangerouslyDisableGooglebot,a=void 0!==o&&o,i=e.dangerouslySetAllPagesToNoIndex,c=void 0!==i&&i,p=e.dangerouslySetAllPagesToNoFollow,u=void 0!==p&&p,l=e.description,s=e.canonical,d=e.facebook,f=e.openGraph,m=e.additionalMetaTags,h=e.twitter,y=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,E=e.defaultOpenGraphVideoWidth,w=e.defaultOpenGraphVideoHeight,k=e.mobileAlternate,O=e.languageAlternates,G=e.additionalLinkTags;return v.createElement(b(),null,S({title:t,titleTemplate:n,defaultTitle:r,dangerouslySetAllPagesToNoIndex:c,dangerouslySetAllPagesToNoFollow:u,description:l,canonical:s,facebook:d,openGraph:f,additionalMetaTags:m,twitter:h,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:E,defaultOpenGraphVideoHeight:w,mobileAlternate:k,languageAlternates:O,additionalLinkTags:G,dangerouslyDisableGooglebot:a}))},t}(v.Component),C=(v.Component,function(){return(0,o.jsx)(T,{title:"KachaBazar - React Grocery & Organic Food Store e-commerce Template",openGraph:{type:"website",locale:"en_IE",url:"https://kachabazar-store.vercel.app/",site_name:"KachaBazar - React Grocery & Organic Food Store e-commerce Template"},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"},additionalMetaTags:[{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"theme-color",content:"#ffffff"}],additionalLinkTags:[{rel:"apple-touch-icon",href:"/icon-192x192.png"},{rel:"manifest",href:"/manifest.json"}]})}),_=n(7053),A=y();var I=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(g.d,{children:(0,o.jsx)(_.H,{children:(0,o.jsx)(i.Elements,{stripe:A,children:(0,o.jsxs)(a.Zl,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(t,(0,r.Z)({},n))]})})})})})}},1553:function(){},9008:function(e,t,n){e.exports=n(5443)},870:function(e,t,n){"use strict";n.d(t,{Zl:function(){return h},jD:function(){return p}});var r=n(7294);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=(0,r.useState)((function(){try{var n="undefined"!==typeof window&&window.localStorage.getItem(e);return n||t}catch(r){return t}})),o=n[0],a=n[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;a(n),window.localStorage.setItem(e,n)}catch(r){console.log(r)}}]}var i={items:[],isEmpty:!0,totalItems:0,totalUniqueItems:0,cartTotal:0,metadata:{}},c=(0,r.createContext)(i),p=function(){var e=(0,r.useContext)(c);if(!e)throw new Error("Expected to be wrapped in a CartProvider");return e};function u(e,t){switch(t.type){case"SET_ITEMS":return l(e,t.payload);case"ADD_ITEM":var n=[].concat(e.items,[t.payload]);return l(e,n);case"UPDATE_ITEM":var r=e.items.map((function(e){return e.id!==t.id?e:o({},e,t.payload)}));return l(e,r);case"REMOVE_ITEM":var a=e.items.filter((function(e){return e.id!==t.id}));return l(e,a);case"EMPTY_CART":return i;case"CLEAR_CART_META":return o({},e,{metadata:{}});case"SET_CART_META":return o({},e,{metadata:o({},t.payload)});case"UPDATE_CART_META":return o({},e,{metadata:o({},e.metadata,t.payload)});default:throw new Error("No action specified")}}var l=function(e,t){void 0===e&&(e=i);var n=m(t),r=0===n;return o({},i,e,{items:s(t),totalItems:f(t),totalUniqueItems:n,cartTotal:d(t),isEmpty:r})},s=function(e){return e.map((function(e){return o({},e,{itemTotal:e.price*e.quantity})}))},d=function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)},f=function(e){return e.reduce((function(e,t){return e+t.quantity}),0)},m=function(e){return e.length},h=function(e){var t,n=e.children,p=e.id,l=e.defaultItems,s=void 0===l?[]:l,d=e.onSetItems,f=e.onItemAdd,m=e.onItemUpdate,h=e.onItemRemove,y=e.storage,g=void 0===y?a:y,v=e.metadata,E=p||(void 0===t&&(t=12),[].concat(Array(t)).map((function(){return(~~(36*Math.random())).toString(36)})).join("")),b=g(p?"react-use-cart-"+E:"react-use-cart",JSON.stringify(o({id:E},i,{items:s,metadata:v}))),w=b[0],k=b[1],O=(0,r.useReducer)(u,JSON.parse(w)),G=O[0],S=O[1];(0,r.useEffect)((function(){k(JSON.stringify(G))}),[G,k]);return(0,r.createElement)(c.Provider,{value:o({},G,{getItem:function(e){return G.items.find((function(t){return t.id===e}))},inCart:function(e){return G.items.some((function(t){return t.id===e}))},setItems:function(e){S({type:"SET_ITEMS",payload:e.map((function(e){return o({},e,{quantity:e.quantity||1})}))}),d&&d(e)},addItem:function(e,t){if(void 0===t&&(t=1),!e.id)throw new Error("You must provide an `id` for items");if(!(t<=0)){var n=G.items.find((function(t){return t.id===e.id}));if(!n&&!e.hasOwnProperty("price"))throw new Error("You must pass a `price` for new items");if(!n){var r=o({},e,{quantity:t});return S({type:"ADD_ITEM",payload:r}),void(f&&f(r))}var a=o({},e,{quantity:n.quantity+t});S({type:"UPDATE_ITEM",id:e.id,payload:a}),m&&m(a)}},updateItem:function(e,t){e&&t&&(S({type:"UPDATE_ITEM",id:e,payload:t}),m&&m(t))},updateItemQuantity:function(e,t){if(t<=0)return h&&h(e),void S({type:"REMOVE_ITEM",id:e});var n=G.items.find((function(t){return t.id===e}));if(!n)throw new Error("No such item to update");var r=o({},n,{quantity:t});S({type:"UPDATE_ITEM",id:e,payload:r}),m&&m(r)},removeItem:function(e){e&&(S({type:"REMOVE_ITEM",id:e}),h&&h(e))},emptyCart:function(){return S({type:"EMPTY_CART"})},clearCartMetadata:function(){S({type:"CLEAR_CART_META"})},setCartMetadata:function(e){e&&S({type:"SET_CART_META",payload:e})},updateCartMetadata:function(e){e&&S({type:"UPDATE_CART_META",payload:e})}})},n)}},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4924);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){(0,r.Z)(e,t,n[t])}))}return e}},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},1955:function(e,t){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var r=function e(t,r){function o(e,o,a){if("undefined"!==typeof document){"number"===typeof(a=n({},r,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in a)a[c]&&(i+="; "+c,!0!==a[c]&&(i+="="+a[c].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+i}}return Object.create({set:o,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var a=n[o].split("="),i=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(r[c]=t.read(i,c),e===c)break}catch(p){}}return e?r[e]:r}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=r}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);