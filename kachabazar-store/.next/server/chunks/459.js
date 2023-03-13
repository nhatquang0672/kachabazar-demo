"use strict";
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



const OrderHistory = ({ order  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-5 py-3 leading-6 whitespace-nowrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "uppercase text-sm font-medium",
                    children: order._id.substring(20, 24)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-5 py-3 leading-6 text-center whitespace-nowrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-sm",
                    children: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(order.createdAt).format("MMMM D, YYYY")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-5 py-3 leading-6 text-center whitespace-nowrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-sm",
                    children: order.paymentMethod
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                className: "px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm",
                children: [
                    order.status === "Delivered" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-emerald-500",
                        children: order.status
                    }),
                    order.status === "Pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-orange-500",
                        children: order.status
                    }),
                    order.status === "Cancel" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-red-500",
                        children: order.status
                    }),
                    order.status === "Processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-indigo-500",
                        children: order.status
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "px-5 py-3 leading-6 text-center whitespace-nowrap",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "text-sm font-bold",
                    children: [
                        "$",
                        Math.round(order?.total),
                        ".00"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderHistory);


/***/ }),

/***/ 1459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9700);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7053);
/* harmony import */ var _component_preloader_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4031);
/* harmony import */ var _component_order_OrderHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9927);





//internal import


const RecentOrder = ({ data , loading , error  })=>{
    const { handleChangePage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_4__/* .SidebarContext */ .l);
    const pageCount = Math.ceil(data?.totalDoc / 8);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-screen-2xl mx-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-md font-serif",
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_preloader_Loading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    loading: loading
                }) : error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-xl text-center my-10 mx-auto w-11/12 text-red-400",
                    children: error
                }) : data?.orders?.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "flex justify-center my-30 pt-16 text-emerald-500 font-semibold text-6xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoBagHandle, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-medium text-md my-4 text-gray-600",
                            children: "You Have no order Yet!"
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-lg font-serif font-medium mb-5",
                            children: "Recent Order"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                            className: "table-auto min-w-full border border-gray-100 divide-y divide-gray-200",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                    className: "bg-gray-50",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "bg-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                scope: "col",
                                                                className: "text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",
                                                                children: "ID"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                scope: "col",
                                                                className: "text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",
                                                                children: "OrderTime"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                scope: "col",
                                                                className: "text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",
                                                                children: "Method"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                scope: "col",
                                                                className: "text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",
                                                                children: "Status"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                scope: "col",
                                                                className: "text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",
                                                                children: "Total"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                    className: "bg-white divide-y divide-gray-200",
                                                    children: data?.orders?.map((order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_order_OrderHistory__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                order: order
                                                            })
                                                        }, order._id))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "paginationOrder",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_paginate__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                breakLabel: "...",
                                                nextLabel: "Next",
                                                onPageChange: (e)=>handleChangePage(e.selected + 1),
                                                pageRangeDisplayed: 3,
                                                pageCount: pageCount,
                                                previousLabel: "Previous",
                                                renderOnZeroPageCount: null,
                                                pageClassName: "page--item",
                                                pageLinkClassName: "page--link",
                                                previousClassName: "page-item",
                                                previousLinkClassName: "page-previous-link",
                                                nextClassName: "page-item",
                                                nextLinkClassName: "page-next-link",
                                                breakClassName: "page--item",
                                                breakLinkClassName: "page--link",
                                                containerClassName: "pagination",
                                                activeClassName: "activePagination"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentOrder);


/***/ })

};
;