"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_DefaultSeo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./src/component/common/DefaultSeo.js



const DefaultSeo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
        title: "KachaBazar - React Grocery & Organic Food Store e-commerce Template",
        openGraph: {
            type: "website",
            locale: "en_IE",
            url: "https://kachabazar-store.vercel.app/",
            site_name: "KachaBazar - React Grocery & Organic Food Store e-commerce Template"
        },
        twitter: {
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image"
        },
        additionalMetaTags: [
            {
                name: "viewport",
                content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            },
            {
                name: "apple-mobile-web-app-capable",
                content: "yes"
            },
            {
                name: "theme-color",
                content: "#ffffff"
            }, 
        ],
        additionalLinkTags: [
            {
                rel: "apple-touch-icon",
                href: "/icon-192x192.png"
            },
            {
                rel: "manifest",
                href: "/manifest.json"
            }, 
        ]
    });
};
/* harmony default export */ const common_DefaultSeo = (DefaultSeo);


/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9878);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7156);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6896);
/* harmony import */ var _component_common_DefaultSeo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8182);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserContext__WEBPACK_IMPORTED_MODULE_4__]);
_context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




//internal import




const stripePromise = (0,_utils_stripe__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__/* .UserProvider */ .d, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_6__/* .SidebarProvider */ .H, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.Elements, {
                    stripe: stripePromise,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_use_cart__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_common_DefaultSeo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ stripe)
});

;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: ./src/utils/stripe.js

let stripePromise;
const getStripe = ()=>{
    if (!stripePromise) {
        stripePromise = (0,stripe_js_namespaceObject.loadStripe)(`${"your Publishable key"}` || 0);
    }
    return stripePromise;
};
/* harmony default export */ const stripe = (getStripe);


/***/ }),

/***/ 4515:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9878:
/***/ ((module) => {

module.exports = require("react-use-cart");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [278,53], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();