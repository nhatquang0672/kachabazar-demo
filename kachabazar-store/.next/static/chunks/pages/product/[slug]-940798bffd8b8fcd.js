(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{7607:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[slug]",function(){return r(1107)}])},1107:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return $},default:function(){return J}});var n=r(5893),s=r(5675),i=r.n(s),a=r(1664),o=r.n(a),l=r(1163),c=r(6893),d=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),u=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return d(t,e),t}(Error);function h(e,t){if(!e)throw new u(t)}function x(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],r=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(r)))}));return t.length>0?"?".concat(t.join("&")):""}var m=r(7294),f=r(4184),p=r.n(f),w=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},g.apply(this,arguments)},y=function(e,t,r,n){return new(r||(r=Promise))((function(s,i){function a(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}l((n=n.apply(e,t||[])).next())}))},j=function(e,t){var r,n,s,i,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(s=(s=a.trys).length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){a.label=i[1];break}if(6===i[0]&&a.label<s[1]){a.label=s[1],s=i;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(i);break}s[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(o){i=[6,o],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r},v=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},N=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},k=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function O(e,t,r){var n=t.height,s=t.width,i=b(t,["height","width"]),a=g({height:n,width:s,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),o=window.open(e,"",Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join(", "));if(r)var l=window.setInterval((function(){try{(null===o||o.closed)&&(window.clearInterval(l),r(o))}catch(e){console.error(e)}}),1e3);return o}var C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,s=r.windowHeight,i=void 0===s?400:s,a=r.windowPosition,o=void 0===a?"windowCenter":a,l=r.windowWidth,c=void 0===l?550:l;O(e,g({height:i,width:c},"windowCenter"===o?N(c,i):k(c,i)),n)},t.handleClick=function(e){return y(t,void 0,void 0,(function(){var t,r,n,s,i,a,o,l,c,d;return j(this,(function(u){switch(u.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,s=t.networkLink,i=t.onClick,a=t.url,o=t.openShareDialogOnClick,l=t.opts,c=s(a,l),n?[2]:(e.preventDefault(),r?(d=r(),v(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return o&&this.openShareDialog(c),i&&i(e,c),[2]}}))}))},t}return w(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,s=e.disabledStyle,i=e.forwardedRef,a=(e.networkLink,e.networkName),o=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,c=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,b(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=p()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),u=g(g(o?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),n&&s);return m.createElement("button",g({},c,{"aria-label":c["aria-label"]||a,className:d,onClick:this.handleClick,ref:i,style:u}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(m.Component),_=C,S=function(){return S=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},S.apply(this,arguments)};var P=function(e,t,r,n){function s(s,i){var a=r(s),o=S({},s);return Object.keys(a).forEach((function(e){delete o[e]})),m.createElement(_,S({},n,o,{forwardedRef:i,networkName:e,networkLink:t,opts:r(s)}))}return s.displayName="ShareButton-".concat(e),(0,m.forwardRef)(s)};var q=P("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return h(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+x({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),E=r(1020);var z=P("twitter",(function(e,t){var r=t.title,n=t.via,s=t.hashtags,i=void 0===s?[]:s,a=t.related,o=void 0===a?[]:a;return h(e,"twitter.url"),h(Array.isArray(i),"twitter.hashtags is not an array"),h(Array.isArray(o),"twitter.related is not an array"),"https://twitter.com/share"+x({url:e,text:r,via:n,hashtags:i.length>0?i.join(","):void 0,related:o.length>0?o.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),A=r(7385);var H=P("reddit",(function(e,t){var r=t.title;return h(e,"reddit.url"),"https://www.reddit.com/submit"+x({url:e,title:r})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),W=(0,r(7267).Z)({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var Z=P("whatsapp",(function(e,t){var r=t.title,n=t.separator;return h(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+x({text:r?r+n+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),B=r(9275);var D=P("linkedin",(function(e,t){var r=t.title,n=t.summary,s=t.source;return h(e,"linkedin.url"),"https://linkedin.com/shareArticle"+x({url:e,mini:"true",title:r,summary:n,source:s})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),L=r(7332),R=r(1388),T=r(9088),I=r(912),K=r(1589),F=function(){return(0,n.jsxs)("ul",{className:"my-0",children:[(0,n.jsxs)("li",{className:"flex items-center py-3",children:[(0,n.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,n.jsx)(c.C4B,{})}),(0,n.jsxs)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:["Free shipping apply to all orders over shipping"," ",(0,n.jsx)("span",{className:"font-semibold",children:"$100"})]})]}),(0,n.jsxs)("li",{className:"flex items-center py-3",children:[(0,n.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,n.jsx)(c.m6D,{})}),(0,n.jsxs)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:["Home Delivery within ",(0,n.jsx)("span",{className:"font-semibold",children:"1 Hour"})]})]}),(0,n.jsxs)("li",{className:"flex items-center py-3",children:[(0,n.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,n.jsx)(c.oQC,{})}),(0,n.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:"Cash on Delivery Available"})]}),(0,n.jsxs)("li",{className:"flex items-center py-3",children:[(0,n.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,n.jsx)(c.ERY,{})}),(0,n.jsxs)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:[(0,n.jsx)("span",{className:"font-semibold",children:"7"})," Days returns money back guarantee"]})]}),(0,n.jsxs)("li",{className:"flex items-center py-3",children:[(0,n.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,n.jsx)(c.OH,{})}),(0,n.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:"Warranty not available this item"})]}),(0,n.jsxs)("li",{className:"flex items-center py-3",children:[(0,n.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,n.jsx)(c.kXG,{})}),(0,n.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:"Guaranteed 100% organic from natural products."})]}),(0,n.jsxs)("li",{className:"flex items-center py-3",children:[(0,n.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,n.jsx)(c.i63,{})}),(0,n.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:"Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA, United States 96522"})]})]})},G=r(5090),U=r(4305),X=r(3742),Y=r(7053),Q=r(4031),$=!0,J=function(e){var t=e.product,r=e.relatedProduct,s=(0,l.useRouter)(),a=(0,m.useContext)(Y.l),d=a.isLoading,u=a.setIsLoading,h=(0,G.Z)(),x=h.handleAddItem,f=h.setItem,p=h.item;return(0,m.useEffect)((function(){u(!1)}),[t]),s.isFallback?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsx)(n.Fragment,{children:d?(0,n.jsx)(Q.Z,{loading:d}):(0,n.jsx)(R.Z,{title:t.title,description:t.description,children:(0,n.jsx)("div",{className:"px-0 py-10 lg:py-10",children:(0,n.jsxs)("div",{className:"mx-auto px-3 lg:px-10 max-w-screen-2xl",children:[(0,n.jsx)("div",{className:"flex items-center pb-4",children:(0,n.jsxs)("ol",{className:"flex items-center w-full overflow-hidden font-serif",children:[(0,n.jsx)("li",{className:"text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold",children:(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("a",{children:"Home"})})}),(0,n.jsxs)("li",{className:"text-sm mt-[1px]",children:[" ",(0,n.jsx)(c.Tfp,{})," "]}),(0,n.jsx)("li",{className:"text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold ",children:(0,n.jsx)(o(),{href:"/search?category=".concat(t.children.toLowerCase().replace("&","").split(" ").join("-")),children:(0,n.jsx)("a",{children:t.children})})}),(0,n.jsxs)("li",{className:"text-sm mt-[1px]",children:[" ",(0,n.jsx)(c.Tfp,{})," "]}),(0,n.jsx)("li",{className:"text-sm px-1 transition duration-200 ease-in ",children:t.title})]})}),(0,n.jsx)("div",{className:"w-full rounded-lg p-3 lg:p-12 bg-white",children:(0,n.jsxs)("div",{className:"flex flex-col xl:flex-row",children:[(0,n.jsxs)("div",{className:"flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12",children:[(0,n.jsx)(U.Z,{product:t,slug:!0}),(0,n.jsx)(i(),{src:t.image,alt:t.title,layout:"responsive",width:650,height:650,priority:!0})]}),(0,n.jsx)("div",{className:"w-full",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row",children:[(0,n.jsxs)("div",{className:"w-full md:w-7/12 md:pr-4 lg:pr-4 xl:pr-12",children:[(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("h1",{className:"leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800",children:t.title}),(0,n.jsxs)("p",{className:"uppercase font-serif font-medium text-gray-500 text-sm",children:["SKU :"," ",(0,n.jsx)("span",{className:"font-bold text-gray-600",children:t.sku?t.sku:t._id.substring(18,24)})]})]}),(0,n.jsx)(K.Z,{product:t}),(0,n.jsx)("div",{className:"mb-4 md:mb-5 block",children:(0,n.jsx)(I.Z,{product:t})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-sm leading-6 text-gray-500 md:leading-7",children:t.description}),(0,n.jsx)("div",{className:"flex items-center mt-4",children:(0,n.jsxs)("div",{className:"flex items-center justify-between space-s-3 sm:space-s-4 w-full",children:[(0,n.jsxs)("div",{className:"group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300",children:[(0,n.jsx)("button",{onClick:function(){return f(p-1)},disabled:1===p,className:"flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500",children:(0,n.jsx)("span",{className:"text-dark text-base",children:(0,n.jsx)(c.ego,{})})}),(0,n.jsx)("p",{className:"font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8 md:w-20 xl:w-24",children:p}),(0,n.jsx)("button",{onClick:function(){return f(p+1)},disabled:t.quantity<p||t.quantity===p,className:"flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500",children:(0,n.jsx)("span",{className:"text-dark text-base",children:(0,n.jsx)(c.OvN,{})})})]}),(0,n.jsx)("button",{onClick:function(){return x(t)},disabled:t.quantity<1,className:"text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12",children:"Add To Cart"})]})}),(0,n.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,n.jsxs)("span",{className:"font-serif font-semibold py-1 text-sm d-block",children:[(0,n.jsx)("span",{className:"text-gray-700",children:"Category:"})," ",(0,n.jsx)("span",{className:"text-gray-500",children:t.children})]}),(0,n.jsx)(T.Z,{product:t})]}),(0,n.jsxs)("div",{className:"mt-8",children:[(0,n.jsx)("h3",{className:"text-base font-semibold mb-1 font-serif",children:"Share your social network"}),(0,n.jsx)("p",{className:"font-sans text-sm text-gray-500",children:"For get lots of traffic from social network share this product"}),(0,n.jsxs)("ul",{className:"flex mt-4",children:[(0,n.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500",children:(0,n.jsx)(q,{url:"https://supermarket-plum.vercel.app/product/".concat(s.query.slug),quote:"KachaBazar",children:(0,n.jsx)(E.Z,{size:32,round:!0})})}),(0,n.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500",children:(0,n.jsx)(z,{url:"https://supermarket-plum.vercel.app/product/".concat(s.query.slug),quote:"KachaBazar",children:(0,n.jsx)(A.Z,{size:32,round:!0})})}),(0,n.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500",children:(0,n.jsx)(H,{url:"https://supermarket-plum.vercel.app/product/".concat(s.query.slug),quote:"KachaBazar",children:(0,n.jsx)(W,{size:32,round:!0})})}),(0,n.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500",children:(0,n.jsx)(Z,{url:"https://supermarket-plum.vercel.app/product/".concat(s.query.slug),quote:"KachaBazar",children:(0,n.jsx)(B.Z,{size:32,round:!0})})}),(0,n.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500",children:(0,n.jsx)(D,{url:"https://supermarket-plum.vercel.app/product/".concat(s.query.slug),quote:"KachaBazar",children:(0,n.jsx)(L.Z,{size:32,round:!0})})})]})]})]})]}),(0,n.jsx)("div",{className:"w-full xl:w-5/12 lg:w-6/12 md:w-5/12",children:(0,n.jsx)("div",{className:"mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 lg:p-8 rounded-lg",children:(0,n.jsx)(F,{})})})]})})]})}),(0,n.jsxs)("div",{className:"pt-10 lg:pt-20 lg:pb-10",children:[(0,n.jsx)("h3",{className:"leading-7 text-lg lg:text-xl mb-3 font-semibold font-serif hover:text-gray-600",children:"Related Products"}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3",children:null===r||void 0===r?void 0:r.slice(1,13).map((function(e,t){return(0,n.jsx)(X.Z,{product:e},t+1)}))})})})]})]})})})})}}},function(e){e.O(0,[260,609,556,230,530,275,61,68,388,742,774,888,179],(function(){return t=7607,e(e.s=t);var t}));var t=e.O();_N_E=t}]);