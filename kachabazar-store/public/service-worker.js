if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),d={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-IH1r_u7mk4Mck9T07Eiz7.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/IH1r_u7mk4Mck9T07Eiz7/_buildManifest.js",revision:"6f2341704d0f79977ebb505af2c477c2"},{url:"/_next/static/IH1r_u7mk4Mck9T07Eiz7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1b8dab7b-95543819a2a516ce.js",revision:"95543819a2a516ce"},{url:"/_next/static/chunks/228771e0-6168b942055b9409.js",revision:"6168b942055b9409"},{url:"/_next/static/chunks/230-dfa7f8eb5bcbc4cb.js",revision:"dfa7f8eb5bcbc4cb"},{url:"/_next/static/chunks/275-004446eb7ef5580b.js",revision:"004446eb7ef5580b"},{url:"/_next/static/chunks/31664189-1bd78146b243b1a7.js",revision:"1bd78146b243b1a7"},{url:"/_next/static/chunks/388-0e087f943d478536.js",revision:"0e087f943d478536"},{url:"/_next/static/chunks/421-67a9072a60b2d394.js",revision:"67a9072a60b2d394"},{url:"/_next/static/chunks/512-d0c192f57be3c375.js",revision:"d0c192f57be3c375"},{url:"/_next/static/chunks/530-ffbfadbf32a51d12.js",revision:"ffbfadbf32a51d12"},{url:"/_next/static/chunks/553-418766cdbac0af95.js",revision:"418766cdbac0af95"},{url:"/_next/static/chunks/61-87c628f5fbca32a2.js",revision:"87c628f5fbca32a2"},{url:"/_next/static/chunks/65291039-0d5870b810ab805f.js",revision:"0d5870b810ab805f"},{url:"/_next/static/chunks/663-67eb3b93137e403a.js",revision:"67eb3b93137e403a"},{url:"/_next/static/chunks/68-870b28599d242d02.js",revision:"870b28599d242d02"},{url:"/_next/static/chunks/682-4e697163a06421a3.js",revision:"4e697163a06421a3"},{url:"/_next/static/chunks/737-3313522aa68a5795.js",revision:"3313522aa68a5795"},{url:"/_next/static/chunks/742-8b671295b69d8f10.js",revision:"8b671295b69d8f10"},{url:"/_next/static/chunks/74fdba35-06bb37ef1acb0b76.js",revision:"06bb37ef1acb0b76"},{url:"/_next/static/chunks/91eb3b05-956b5efcb71a0c32.js",revision:"956b5efcb71a0c32"},{url:"/_next/static/chunks/963-168e3f9ce95af38d.js",revision:"168e3f9ce95af38d"},{url:"/_next/static/chunks/ae51ba48-8f1aca792dbbf3ba.js",revision:"8f1aca792dbbf3ba"},{url:"/_next/static/chunks/c9184924-a3918f6be04c4b14.js",revision:"a3918f6be04c4b14"},{url:"/_next/static/chunks/d64684d8-0a1477e605561e09.js",revision:"0a1477e605561e09"},{url:"/_next/static/chunks/framework-84f2ad681109ba1f.js",revision:"84f2ad681109ba1f"},{url:"/_next/static/chunks/main-bad1695cdf41a310.js",revision:"bad1695cdf41a310"},{url:"/_next/static/chunks/pages/404-4ed1124b43d8fbbe.js",revision:"4ed1124b43d8fbbe"},{url:"/_next/static/chunks/pages/_app-8fb16e8969bd1d00.js",revision:"8fb16e8969bd1d00"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/_offline-c799ff522fa5a1d7.js",revision:"c799ff522fa5a1d7"},{url:"/_next/static/chunks/pages/about-us-ebdb64ddabec7bf9.js",revision:"ebdb64ddabec7bf9"},{url:"/_next/static/chunks/pages/checkout-48afada269165c25.js",revision:"48afada269165c25"},{url:"/_next/static/chunks/pages/contact-us-2db7edd6b69303ae.js",revision:"2db7edd6b69303ae"},{url:"/_next/static/chunks/pages/faq-f93a38c27d89e425.js",revision:"f93a38c27d89e425"},{url:"/_next/static/chunks/pages/index-3799bd0a628d8f1c.js",revision:"3799bd0a628d8f1c"},{url:"/_next/static/chunks/pages/offer-abc2b9fcb00ac90f.js",revision:"abc2b9fcb00ac90f"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-d92ff08f9d4a9be3.js",revision:"d92ff08f9d4a9be3"},{url:"/_next/static/chunks/pages/privacy-policy-ceb319cdae16d95d.js",revision:"ceb319cdae16d95d"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-940798bffd8b8fcd.js",revision:"940798bffd8b8fcd"},{url:"/_next/static/chunks/pages/search-105bc7dc524de14a.js",revision:"105bc7dc524de14a"},{url:"/_next/static/chunks/pages/terms-and-conditions-93157d76e0b005e2.js",revision:"93157d76e0b005e2"},{url:"/_next/static/chunks/pages/user/change-password-5203d6bcaa2746dc.js",revision:"5203d6bcaa2746dc"},{url:"/_next/static/chunks/pages/user/dashboard-01767880fb2e0b2d.js",revision:"01767880fb2e0b2d"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-2c2f95da60f7f608.js",revision:"2c2f95da60f7f608"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-1be7c6a7139f113c.js",revision:"1be7c6a7139f113c"},{url:"/_next/static/chunks/pages/user/my-orders-cb6d0ba7210e6c73.js",revision:"cb6d0ba7210e6c73"},{url:"/_next/static/chunks/pages/user/recent-order-cf807170527769a5.js",revision:"cf807170527769a5"},{url:"/_next/static/chunks/pages/user/update-profile-9ac768e41e95bea8.js",revision:"9ac768e41e95bea8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-df4cf1c8d23aa877.js",revision:"df4cf1c8d23aa877"},{url:"/_next/static/css/5f4cbc35bcd71b8c.css",revision:"5f4cbc35bcd71b8c"},{url:"/_next/static/css/a3b11bfcf7084465.css",revision:"a3b11bfcf7084465"},{url:"/_next/static/css/c2c4e2b9bf1b95af.css",revision:"c2c4e2b9bf1b95af"},{url:"/_next/static/media/logo-color.d0ef4d61.png",revision:"5935965ef93ee2a9eab4a1240699bc5f"},{url:"/_offline",revision:"IH1r_u7mk4Mck9T07Eiz7"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.png",revision:"5935965ef93ee2a9eab4a1240699bc5f"},{url:"/logo/logo-color.svg",revision:"9cdfd2a1723ebe5d6fbfeb2a3a07765d"},{url:"/logo/logo-dark-2.svg",revision:"990e13afb1b79734e26b71f2fcc062d9"},{url:"/logo/logo-dark.svg",revision:"3d5619a9dd2312d20ee908259e95a635"},{url:"/logo/logo-light-2.svg",revision:"8e9e97fd3acd9a7aa3525e2c5eb93811"},{url:"/logo/logo-light.svg",revision:"a295f016c697789c084b023006b33ac5"},{url:"/manifest.json",revision:"1bdc898597594f46bcd9b0ae76e7c991"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/spinner.gif",revision:"9317b1364997865cda53478fb9302977"},{url:"/sw.js",revision:"3babca1d969f2ec8e3f712ae338713de"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
