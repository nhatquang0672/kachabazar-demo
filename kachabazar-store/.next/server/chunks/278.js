"use strict";
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 6896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserContext),
/* harmony export */   "d": () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const initialState = {
    userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("userInfo") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("userInfo")) : null,
    shippingAddress: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("shippingAddress") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("shippingAddress")) : {},
    couponInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("couponInfo") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("couponInfo")) : {}
};
function reducer(state, action) {
    switch(action.type){
        case "USER_LOGIN":
            return {
                ...state,
                userInfo: action.payload
            };
        case "USER_LOGOUT":
            return {
                ...state,
                userInfo: null
            };
        case "SAVE_SHIPPING_ADDRESS":
            return {
                ...state,
                shippingAddress: action.payload
            };
        case "SAVE_COUPON":
            return {
                ...state,
                couponInfo: action.payload
            };
    }
}
const UserProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: value,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;