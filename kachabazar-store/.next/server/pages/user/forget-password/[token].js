(() => {
var exports = {};
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 5611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_form_Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1691);
/* harmony import */ var _component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97);
/* harmony import */ var _services_UserServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6765);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6896);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _services_UserServices__WEBPACK_IMPORTED_MODULE_9__, _context_UserContext__WEBPACK_IMPORTED_MODULE_10__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _services_UserServices__WEBPACK_IMPORTED_MODULE_9__, _context_UserContext__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







//internal import





const ForgetPassword = ()=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showLogin , 1: setShowLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_10__/* .UserContext */ .S);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const password = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)("");
    const { register , handleSubmit , watch , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    password.current = watch("newPassword");
    const submitHandler = ({ registerEmail , password , newPassword  })=>{
        setLoading(true);
        if (newPassword) {
            _services_UserServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"].resetPassword */ .Z.resetPassword({
                newPassword,
                token: router.query?.token
            }).then((res)=>{
                setLoading(false);
                setShowLogin(true);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifySuccess */ .t5)(res.message);
                setValue("newPassword");
            }).catch((err)=>{
                setLoading(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)(err ? err.response.data.message : err.message);
            });
        }
        if (registerEmail && password) {
            _services_UserServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"].userLogin */ .Z.userLogin({
                registerEmail,
                password
            }).then((res)=>{
                setLoading(false);
                router.push("/");
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifySuccess */ .t5)("Login Success!");
                dispatch({
                    type: "USER_LOGIN",
                    payload: res
                });
                js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set("userInfo", JSON.stringify(res));
            }).catch((err)=>{
                setLoading(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)(err ? err.response.data.message : err.message);
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-screen flex items-center justify-center bg-gray-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white rounded-lg shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-2xl font-bold font-serif",
                                    children: showLogin ? "Login" : "Forget Password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10",
                                    children: showLogin ? "Login with your email and new password" : "Reset Your Password"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            onSubmit: handleSubmit(submitHandler),
                            className: "flex flex-col justify-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-1 gap-5",
                                children: [
                                    showLogin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        register: register,
                                                        label: "Email",
                                                        name: "registerEmail",
                                                        type: "email",
                                                        placeholder: "Email",
                                                        Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiMail
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        errorName: errors.registerEmail
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        register: register,
                                                        label: "Password",
                                                        name: "password",
                                                        type: "password",
                                                        placeholder: "Password",
                                                        Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiLock
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        errorName: errors.password
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !showLogin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        name: "newPassword",
                                                        type: "password",
                                                        placeholder: "New password",
                                                        ...register("newPassword", {
                                                            required: "You must specify a password",
                                                            minLength: {
                                                                value: 8,
                                                                message: "Password must have at least 8 characters"
                                                            }
                                                        }),
                                                        className: "py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-100 border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        errorName: errors.newPassword
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        name: "confirm_password",
                                                        type: "password",
                                                        placeholder: "Confirm password",
                                                        ...register("confirm_password", {
                                                            validate: (value)=>value === password.current || "The passwords do not match"
                                                        }),
                                                        className: "py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-100 border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        errorName: errors.confirm_password
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        disabled: loading,
                                        type: "submit",
                                        className: "w-full text-center py-3 rounded bg-emerald-500 font-medium text-sm text-white hover:bg-emerald-600 transition-all focus:outline-none my-1",
                                        children: showLogin ? "Login" : "Reset Password"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
// export const getServerSideProps = async ({ params }) => {
//   return {
//     props: { params },
//   };
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [278,828,263], () => (__webpack_exec__(5611)));
module.exports = __webpack_exports__;

})();