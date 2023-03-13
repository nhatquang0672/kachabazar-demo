"use strict";
exports.id = 828;
exports.ids = [828];
exports.modules = {

/***/ 6765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _httpServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_httpServices__WEBPACK_IMPORTED_MODULE_0__]);
_httpServices__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const UserServices = {
    userLogin (body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/user/login", body);
    },
    verifyEmailAddress (body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/user/verify-email", body);
    },
    userRegister (token, body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/user/register/${token}`, body);
    },
    signUpWithProvider (body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/user/signup", body);
    },
    forgetPassword (body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put("/user/forget-password", body);
    },
    resetPassword (body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put("/user/reset-password", body);
    },
    changePassword (body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/user/change-password", body);
    },
    updateUser (id, body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/user/${id}`, body);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: `${"http://43.207.196.87:5055/api"}`,
    timeout: 500000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
// Add a request interceptor
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    let userInfo;
    if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("userInfo")) {
        userInfo = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("userInfo"));
    }
    return {
        ...config,
        headers: {
            authorization: userInfo ? `Bearer ${userInfo.token}` : null
        }
    };
});
// console.log(process.env.API_BASE_URL);
const responseBody = (response)=>response.data;
const requests = {
    get: (url, body)=>instance.get(url, body).then(responseBody),
    post: (url, body, headers)=>instance.post(url, body, headers).then(responseBody),
    put: (url, body)=>instance.put(url, body).then(responseBody)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requests);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cB": () => (/* binding */ notifyError),
/* harmony export */   "t5": () => (/* binding */ notifySuccess)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);



const notifySuccess = (message)=>react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
const notifyError = (message)=>react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
});



/***/ })

};
;