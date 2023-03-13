"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 8933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Card = ({ title , Icon , quantity , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center border border-gray-200 w-full rounded-lg p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 ${className}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "leading-none mb-2 text-base font-medium font-serif text-gray-700",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-xl font-bold font-serif leading-none text-gray-800",
                            children: quantity
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 7029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9608);
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3794);
/* harmony import */ var _hooks_useFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(885);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3214);
/* harmony import */ var _component_order_card_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8933);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6896);
/* harmony import */ var _services_OrderServices__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3768);
/* harmony import */ var _pages_user_recent_order__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1459);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7053);
/* harmony import */ var _component_preloader_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _layout_Layout__WEBPACK_IMPORTED_MODULE_8__, _hooks_useFilter__WEBPACK_IMPORTED_MODULE_10__, _context_UserContext__WEBPACK_IMPORTED_MODULE_13__, _services_OrderServices__WEBPACK_IMPORTED_MODULE_14__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _layout_Layout__WEBPACK_IMPORTED_MODULE_8__, _hooks_useFilter__WEBPACK_IMPORTED_MODULE_10__, _context_UserContext__WEBPACK_IMPORTED_MODULE_13__, _services_OrderServices__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








//internal import










const Dashboard = ({ title , description , children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { dispatch , state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_13__/* .UserContext */ .S);
    const { isLoading , setIsLoading , currentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_16__/* .SidebarContext */ .l);
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        _services_OrderServices__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getOrderByUser */ .Z.getOrderByUser({
            page: currentPage,
            limit: 8
        }).then((res)=>{
            setData(res);
            setLoading(false);
        }).catch((err)=>{
            setLoading(false);
            setError(err.message);
        });
    }, [
        currentPage
    ]);
    const handleLogOut = ()=>{
        dispatch({
            type: "USER_LOGOUT"
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("userInfo");
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("couponInfo");
        router.push("/");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setIsLoading(false);
        if (!userInfo) {
            router.push("/");
        }
    }, [
        userInfo
    ]);
    console.log("dashbaord");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_preloader_Loading__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            loading: isLoading
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            title: title ? title : "Dashboard",
            description: description ? description : "This is User Dashboard",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto max-w-screen-2xl px-3 sm:px-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-10 lg:py-12 flex flex-col lg:flex-row w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-shrink-0 w-full lg:w-80 mr-7 lg:mr-10 xl:mr-10 ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32",
                                children: [
                                    _utils_data__WEBPACK_IMPORTED_MODULE_11__/* .userSidebar.map */ .kR.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                    className: "flex-shrink-0 h-4 w-4",
                                                    "aria-hidden": "true"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: item.href,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600",
                                                        children: item.title
                                                    })
                                                })
                                            ]
                                        }, item.title)),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLockOpenOutline, {})
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: handleLogOut,
                                                className: "inline-flex items-center justify-between text-sm font-medium w-full hover:text-emerald-600",
                                                children: "Logout"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden",
                            children: [
                                !children && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "text-xl font-serif font-semibold mb-5",
                                            children: "Dashboard"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_order_card_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    title: "Total Order",
                                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiShoppingCart,
                                                    quantity: data?.totalDoc,
                                                    className: "text-red-600 bg-red-200"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_order_card_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    title: "Pending Order",
                                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiRefreshCw,
                                                    quantity: data?.pending,
                                                    className: "text-orange-600 bg-orange-200"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_order_card_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    title: "Processing Order",
                                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiTruck,
                                                    quantity: data?.processing,
                                                    className: "text-indigo-600 bg-indigo-200"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_order_card_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    title: "Complete Order",
                                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiCheck,
                                                    quantity: data?.delivered,
                                                    className: "text-emerald-600 bg-emerald-200"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_user_recent_order__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                            data: data,
                                            loading: loading,
                                            error: error
                                        })
                                    ]
                                }),
                                children
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(Dashboard), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _httpServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_httpServices__WEBPACK_IMPORTED_MODULE_0__]);
_httpServices__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const OrderServices = {
    addOrder (body, headers) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/order/add", body, headers);
    },
    createPaymentIntent (body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/order/create-payment-intent", body);
    },
    getOrderByUser ({ page =1 , limit =8  }) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/order?limit=${limit}&page=${page}`);
    },
    getOrderById (id, body) {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/order/${id}`, body);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;