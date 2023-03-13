"use strict";
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2807);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3794);
/* harmony import */ var _services_CouponServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1722);
/* harmony import */ var _component_coupon_OfferTimer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_CouponServices__WEBPACK_IMPORTED_MODULE_6__]);
_services_CouponServices__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





//internal import



const Coupon = ({ couponInHome  })=>{
    const { 0: copiedCode , 1: setCopiedCode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: copied , 1: setCopied  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data , error  } = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_services_CouponServices__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAllCoupons */ .Z.getAllCoupons);
    const handleCopied = (code)=>{
        setCopiedCode(code);
        setCopied(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "flex justify-center align-middle items-center m-auto text-xl text-red-500",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    " ",
                    error
                ]
            })
        }) : couponInHome ? data?.slice(0, 2).map((coupon)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tengah py-2 px-3 flex items-center justify-items-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: coupon.logo,
                                    alt: coupon.title,
                                    width: 100,
                                    height: 100,
                                    className: "rounded-lg"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center font-serif",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "pl-1 text-base font-medium text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-lg md:text-xl lg:text-xl text-red-500 font-bold",
                                                        children: [
                                                            coupon.discountPercentage,
                                                            "%"
                                                        ]
                                                    }),
                                                    " ",
                                                    "Off"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "ml-2",
                                                children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(coupon.endTime)) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100",
                                                    children: "Inactive"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100",
                                                    children: "Active"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2",
                                        children: coupon.title
                                    }),
                                    dayjs__WEBPACK_IMPORTED_MODULE_3___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(coupon.endTime)) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block mb-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center font-semibold",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",
                                                    children: "00"
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",
                                                    children: "00"
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",
                                                    children: "00"
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",
                                                    children: "00"
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center font-semibold",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_coupon_OfferTimer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                expiryTimestamp: new Date(coupon.endTime),
                                                darkGreen: true
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "info flex items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font-serif border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard, {
                                                text: coupon.couponCode,
                                                onCopy: ()=>handleCopied(coupon.couponCode),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "block w-full",
                                                    children: copied && coupon.couponCode === copiedCode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-emerald-600 text-sm leading-7 font-semibold",
                                                        children: "Copied!"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "uppercase font-serif font-semibold text-sm leading-7 text-emerald-600",
                                                        children: [
                                                            coupon.couponCode,
                                                            " "
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-xs leading-4 text-gray-500 mt-2",
                                        children: [
                                            "* This coupon apply when shopping more then",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "font-bold",
                                                children: [
                                                    " $",
                                                    coupon.minimumAmount
                                                ]
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }, coupon._id)) : data?.map((coupon)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tengah p-6 flex items-center justify-items-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: coupon.logo,
                                    alt: coupon.title,
                                    width: 120,
                                    height: 120,
                                    className: "rounded-lg"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ml-5",
                                children: [
                                    dayjs__WEBPACK_IMPORTED_MODULE_3___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(coupon.endTime)) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block mb-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center font-semibold",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",
                                                    children: "00"
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",
                                                    children: "00"
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",
                                                    children: "00"
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",
                                                    children: "00"
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-block mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center font-semibold",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_coupon_OfferTimer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                expiryTimestamp: new Date(coupon.endTime)
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-serif text-lg leading-6 font-medium mb-3",
                                        children: coupon.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "font-serif font-bold text-xl text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold",
                                                children: [
                                                    coupon.discountPercentage,
                                                    "%"
                                                ]
                                            }),
                                            " ",
                                            "Off"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "info flex lg:my-6 md:my-5 mb-6 items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "font-serif font-medium flex items-center mb-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Coupon"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "ml-2",
                                                        children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(coupon.endTime)) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-red-600 inline-block",
                                                            children: "Inactive"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-emerald-600 inline-block",
                                                            children: "Active"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard, {
                                                    text: coupon.couponCode,
                                                    onCopy: ()=>handleCopied(coupon.couponCode),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "block w-full",
                                                        children: copied && coupon.couponCode === copiedCode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-emerald-600 text-base leading-7 font-semibold",
                                                            children: "Copied!"
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "uppercase font-serif font-semibold text-base leading-7 text-emerald-600",
                                                            children: [
                                                                coupon.couponCode,
                                                                " "
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-xs leading-5 text-gray-500 mt-2",
                                        children: [
                                            "* This coupon code will apply on",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "font-bold text-gray-700",
                                                children: [
                                                    coupon.productType,
                                                    " type products"
                                                ]
                                            }),
                                            " ",
                                            "and when you shopping more then",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "font-bold text-gray-700",
                                                children: [
                                                    "$",
                                                    coupon.minimumAmount
                                                ]
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }, coupon._id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coupon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1305);
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_timer_hook__WEBPACK_IMPORTED_MODULE_2__);



const OfferTimer = ({ expiryTimestamp , darkGreen  })=>{
    const { seconds , minutes , hours , days  } = (0,react_timer_hook__WEBPACK_IMPORTED_MODULE_2__.useTimer)({
        expiryTimestamp
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `flex items-center justify-center ${darkGreen ? "bg-emerald-500 text-white" : "bg-emerald-100"}  text-sm font-serif font-semibold px-2 py-1 rounded mx-1`,
                children: days
            }),
            ":",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `flex items-center justify-center ${darkGreen ? "bg-emerald-500 text-white" : "bg-emerald-100"}  text-sm font-serif font-semibold px-2 py-1 rounded mx-1`,
                children: hours
            }),
            ":",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `flex items-center justify-center ${darkGreen ? "bg-emerald-500 text-white" : "bg-emerald-100"}  text-sm font-serif font-semibold px-2 py-1 rounded mx-1`,
                children: minutes
            }),
            ":",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `flex items-center justify-center ${darkGreen ? "bg-emerald-500 text-white" : "bg-emerald-100"}  text-sm font-serif font-semibold px-2 py-1 rounded mx-1`,
                children: seconds
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(OfferTimer));


/***/ }),

/***/ 1722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _httpServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_httpServices__WEBPACK_IMPORTED_MODULE_0__]);
_httpServices__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CouponServices = {
    getAllCoupons () {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/coupon");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;