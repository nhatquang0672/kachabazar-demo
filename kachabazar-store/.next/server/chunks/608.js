"use strict";
exports.id = 608;
exports.ids = [608];
exports.modules = {

/***/ 8927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9878);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_cart_CartItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8551);
/* harmony import */ var _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9440);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6896);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_7__, _context_UserContext__WEBPACK_IMPORTED_MODULE_8__]);
([_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_7__, _context_UserContext__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






//internal import




const Cart = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { isEmpty , items , cartTotal  } = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_4__.useCart)();
    const { toggleCartDrawer , closeCartDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_9__/* .SidebarContext */ .l);
    const { state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_8__/* .UserContext */ .S);
    const handleOpenLogin = ()=>{
        if (router.push("/?redirect=/checkout")) {
            toggleCartDrawer();
            setModalOpen(!modalOpen);
        }
    };
    const checkoutClass = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: closeCartDrawer,
        className: "w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "align-middle font-medium font-serif",
                children: "Proceed To Checkout"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "rounded-lg font-bold font-serif py-2 px-3 bg-white text-emerald-600",
                children: [
                    "$",
                    cartTotal.toFixed(2)
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                modalOpen: modalOpen,
                setModalOpen: setModalOpen
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "font-semibold font-serif text-lg m-0 text-heading flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl mr-2 mb-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoBagCheckOutline, {})
                                    }),
                                    "Shopping Cart"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: closeCartDrawer,
                                className: "inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity hover:text-red-400",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoClose, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-sens text-sm text-gray-500 hover:text-red-400 ml-1",
                                        children: "Close"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full",
                        children: [
                            isEmpty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col h-full justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-emerald-600 text-4xl block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoBagHandle, {})
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "font-serif font-semibold text-gray-700 text-lg pt-5",
                                            children: "Your cart is empty"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "px-12 text-center text-sm text-gray-500 pt-2",
                                            children: "No items added in your cart. Please add product to your cart list."
                                        })
                                    ]
                                })
                            }),
                            items.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cart_CartItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    item: item
                                }, i + 1))
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-5 my-3",
                        children: items.length <= 0 ? checkoutClass : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: !userInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleOpenLogin,
                                children: checkoutClass
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/checkout",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: checkoutClass
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9878);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useAddToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5090);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7053);





//internal import


const CartItem = ({ item  })=>{
    const { updateItemQuantity , removeItem  } = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_3__.useCart)();
    const { closeCartDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_6__/* .SidebarContext */ .l);
    const { handleIncreaseQuantity  } = (0,_hooks_useAddToCart__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: item.image,
                    width: 40,
                    height: 40,
                    alt: item.title
                }, item.id)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/product/${item.slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: closeCartDrawer,
                            className: "truncate text-sm font-medium text-gray-700 text-heading line-clamp-1",
                            children: item.title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-xs text-gray-400 mb-1",
                        children: [
                            "Item Price $",
                            item.price
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-bold text-sm md:text-base text-heading leading-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "$",
                                        (item.price * item.quantity).toFixed(2)
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>updateItemQuantity(item.id, item.quantity - 1),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-dark text-base",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiMinus, {})
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm font-semibold text-dark px-1",
                                        children: item.quantity
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>handleIncreaseQuantity(item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-dark text-base",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiPlus, {})
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>removeItem(item.id),
                                className: "hover:text-red-600 text-red-400 text-lg cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiTrash2, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);


/***/ }),

/***/ 4941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3214);
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3794);
/* harmony import */ var _component_preloader_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4031);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7053);
/* harmony import */ var _services_CategoryServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4578);
/* harmony import */ var _component_category_CategoryCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_CategoryServices__WEBPACK_IMPORTED_MODULE_9__]);
_services_CategoryServices__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





//internal import






const Category = ()=>{
    const { categoryDrawerOpen , closeCategoryDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_8__/* .SidebarContext */ .l);
    const { data , loading , error  } = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(()=>_services_CategoryServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getShowingCategory */ .Z.getShowingCategory());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide",
        children: [
            categoryDrawerOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex justify-between items-center h-16 px-6 py-4 bg-emerald-500 text-white border-b border-gray-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-semibold font-serif text-lg m-0 text-heading flex align-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "mr-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    width: 100,
                                    height: 38,
                                    src: "/logo/logo-light.svg",
                                    alt: "logo"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: closeCategoryDrawer,
                        className: "flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600",
                        "aria-label": "close",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoClose, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "overflow-y-scroll scrollbar-hide w-full max-h-full",
                children: [
                    categoryDrawerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3",
                        children: "All Categories"
                    }),
                    error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "flex justify-center align-middle items-center m-auto text-xl text-red-500",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                " ",
                                error
                            ]
                        })
                    }) : data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_preloader_Loading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        loading: loading
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative grid gap-2 p-6",
                        children: data?.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_category_CategoryCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                title: category.parent,
                                icon: category.icon,
                                nested: category.children
                            }, category._id))
                    }),
                    categoryDrawerOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative grid gap-2 mt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3",
                                children: "Pages"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative grid gap-1 p-6",
                                children: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .pages.map */ .L1.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: item.href,
                                        className: "p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                className: "flex-shrink-0 h-4 w-4",
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600",
                                                children: item.title
                                            })
                                        ]
                                    }, item.title))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7053);





//internal import

const CategoryCard = ({ title , icon , nested  })=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showCategory = ()=>setShow(!show);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { closeCategoryDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_5__/* .SidebarContext */ .l);
    const handleSubCategory = (children)=>{
        router.push(`/search?category=${children.toLowerCase().replace("&", "").split(" ").join("-")}`);
        closeCategoryDrawer();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                onClick: showCategory,
                className: "p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600",
                role: "button",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: icon,
                        width: 18,
                        height: 18,
                        alt: title,
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600",
                        children: [
                            title,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400",
                                children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoChevronDownOutline, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoChevronForwardOutline, {})
                            })
                        ]
                    })
                ]
            }),
            show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "pl-6 pb-3 pt-1 -mt-1",
                children: nested.map((children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            onClick: ()=>handleSubCategory(children),
                            className: "flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-gray-500 pr-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoRemoveSharp, {})
                                }),
                                children
                            ]
                        })
                    }, children))
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryCard);


/***/ }),

/***/ 6211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5307);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_cart_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8927);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_cart_Cart__WEBPACK_IMPORTED_MODULE_4__]);
_component_cart_Cart__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




//internal import


const CartDrawer = ()=>{
    const { cartDrawerOpen , closeCartDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_5__/* .SidebarContext */ .l);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_drawer__WEBPACK_IMPORTED_MODULE_3___default()), {
        open: cartDrawerOpen,
        onClose: closeCartDrawer,
        parent: null,
        level: null,
        placement: "right",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cart_Cart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(CartDrawer), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5307);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_category_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4941);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_category_Category__WEBPACK_IMPORTED_MODULE_4__]);
_component_category_Category__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CategoryDrawer = ()=>{
    const { categoryDrawerOpen , closeCategoryDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_5__/* .SidebarContext */ .l);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_drawer__WEBPACK_IMPORTED_MODULE_3___default()), {
        open: categoryDrawerOpen,
        onClose: closeCategoryDrawer,
        parent: null,
        level: null,
        placement: "left",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_category_Category__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(CategoryDrawer), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3214);



const FeatureCard = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto",
        children: _utils_data__WEBPACK_IMPORTED_MODULE_2__/* .featurePromo.map */ .kk.map((promo)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " border-r border-gray-200 py-1 flex items-center justify-center bg-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mr-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(promo.icon, {
                            className: "flex-shrink-0 h-4 w-4 text-emerald-600",
                            "aria-hidden": "true"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "block font-serif text-sm font-medium leading-5",
                            children: [
                                promo.title,
                                " ",
                                promo.info
                            ]
                        })
                    })
                ]
            }, promo.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureCard);


/***/ }),

/***/ 286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5231);
/* harmony import */ var _component_login_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5564);
/* harmony import */ var _component_login_ResetPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8787);
/* harmony import */ var _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_login_Login__WEBPACK_IMPORTED_MODULE_3__, _component_login_Register__WEBPACK_IMPORTED_MODULE_4__, _component_login_ResetPassword__WEBPACK_IMPORTED_MODULE_5__, _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__]);
([_component_login_Login__WEBPACK_IMPORTED_MODULE_3__, _component_login_Register__WEBPACK_IMPORTED_MODULE_4__, _component_login_ResetPassword__WEBPACK_IMPORTED_MODULE_5__, _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//internal import




const Common = ({ setModalOpen  })=>{
    const { 0: showRegister , 1: setShowRegister  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showResetPassword , 1: setShowResetPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { handleGoogleSignIn , GoogleLogin  } = (0,_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(setModalOpen);
    const handleModal = ()=>{
        setShowRegister(!showRegister);
        setShowResetPassword(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "overflow-hidden bg-white mx-auto",
            children: [
                showResetPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_login_ResetPassword__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    setShowResetPassword: setShowResetPassword,
                    setModalOpen: setModalOpen
                }) : showRegister ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_login_Register__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    setShowResetPassword: setShowResetPassword,
                    setModalOpen: setModalOpen
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_login_Login__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    setShowResetPassword: setShowResetPassword,
                    setModalOpen: setModalOpen
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-8 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium",
                    children: "OR"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between flex-col lg:flex-row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImFacebook, {}),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "ml-2",
                                    children: "Login With Facebook"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GoogleLogin, {
                            clientId: `${"your google client id"}`,
                            render: (renderProps)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full",
                                    onClick: renderProps.onClick,
                                    disabled: renderProps.disabled,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__.ImGoogle, {}),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "ml-2",
                                            children: "Login With Google"
                                        })
                                    ]
                                }),
                            onSuccess: handleGoogleSignIn,
                            onFailure: handleGoogleSignIn,
                            cookiePolicy: "single_host_origin"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center text-sm text-gray-900 mt-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-gray-500 mt-2.5",
                        children: [
                            showRegister ? "Already have a account ?" : "Not have a account ?",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleModal,
                                className: "text-gray-800 hover:text-emerald-500 font-bold mx-2",
                                children: showRegister ? "Login" : "Register"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Common);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_form_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1691);
/* harmony import */ var _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(534);
/* harmony import */ var _component_form_InputArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//internal  import



const Login = ({ setShowResetPassword , setModalOpen  })=>{
    const { handleSubmit , submitHandler , register , errors , loading  } = (0,_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(setModalOpen);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl font-bold font-serif",
                        children: "Login"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10",
                        children: "Login with your email and password"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(submitHandler),
                className: "flex flex-col justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 gap-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    register: register,
                                    defaultValue: "justin@gmail.com",
                                    label: "Email",
                                    name: "registerEmail",
                                    type: "email",
                                    placeholder: "Email",
                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiMail
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    errorName: errors.registerEmail
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    register: register,
                                    defaultValue: "12345678",
                                    label: "Password",
                                    name: "password",
                                    type: "password",
                                    placeholder: "Password",
                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiLock
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    errorName: errors.password
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex ms-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowResetPassword(true),
                                    className: "text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none",
                                    children: "Forgot password?"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: loading,
                            type: "submit",
                            className: "w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1",
                            children: "Login"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_form_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1691);
/* harmony import */ var _component_form_InputArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//internal import



const Register = ({ setShowResetPassword , setModalOpen  })=>{
    const { handleSubmit , submitHandler , register , errors , loading  } = (0,_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(setModalOpen);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl font-bold font-serif",
                        children: "Signing Up"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10",
                        children: "Create an account with email"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(submitHandler),
                className: "flex flex-col justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 gap-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    register: register,
                                    label: "Name",
                                    name: "name",
                                    type: "text",
                                    placeholder: "Full Name",
                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiUser
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    errorName: errors.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    register: register,
                                    label: "Email",
                                    name: "email",
                                    type: "email",
                                    placeholder: "Email",
                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiMail
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    errorName: errors.email
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    register: register,
                                    label: "Password",
                                    name: "password",
                                    type: "password",
                                    placeholder: "Password",
                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiLock
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    errorName: errors.password
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex ms-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowResetPassword(true),
                                    className: "text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none",
                                    children: "Forgot password?"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: loading,
                            type: "submit",
                            className: "w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1",
                            children: "Register"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_form_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1691);
/* harmony import */ var _component_form_InputArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97);
/* harmony import */ var _hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




//internal import



const ResetPassword = ({ setShowResetPassword , setModalOpen  })=>{
    const { handleSubmit , submitHandler , register , errors , loading  } = (0,_hooks_useLoginSubmit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(setModalOpen);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-3xl font-bold font-serif",
                            children: "Forget Password"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10",
                        children: "Reset Your Password"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(submitHandler),
                className: "flex flex-col justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 gap-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    register: register,
                                    label: "Email",
                                    name: "verifyEmail",
                                    type: "email",
                                    placeholder: "Your Register Email",
                                    Icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiMail
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    errorName: errors.verifyEmail
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex ms-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setShowResetPassword(true),
                                    className: "text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none",
                                    children: "Forgot password?"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: loading,
                            type: "submit",
                            className: "w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1",
                            children: "Recover password"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_login_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(286);
/* harmony import */ var _component_modal_MainModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6364);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_login_Common__WEBPACK_IMPORTED_MODULE_2__, _component_modal_MainModal__WEBPACK_IMPORTED_MODULE_3__]);
([_component_login_Common__WEBPACK_IMPORTED_MODULE_2__, _component_modal_MainModal__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//internal import


const LoginModal = ({ modalOpen , setModalOpen  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_modal_MainModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        modalOpen: modalOpen,
        setModalOpen: setModalOpen,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "inline-block w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_login_Common__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                setModalOpen: setModalOpen
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(LoginModal));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MainModal = ({ modalOpen , setModalOpen , children  })=>{
    const cancelButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
            appear: true,
            show: modalOpen,
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                as: "div",
                className: "fixed inset-0 z-30 overflow-y-auto text-center",
                onClose: ()=>setModalOpen(false),
                initialFocus: cancelButtonRef,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-h-screen px-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {
                                className: "fixed inset-0 bg-black opacity-60"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: children
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute right-5 top-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setModalOpen(false),
                                type: "button",
                                className: "inline-flex justify-center px-2 py-2 text-base font-medium text-red-500 bg-white border border-transparent rounded-full hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoClose, {})
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(MainModal));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_ScaleLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2633);
/* harmony import */ var react_spinners_ScaleLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ScaleLoader__WEBPACK_IMPORTED_MODULE_2__);



const Loading = ({ loading  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-lg text-center py-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ScaleLoader__WEBPACK_IMPORTED_MODULE_2___default()), {
            color: "#34D399",
            loading: loading,
            height: 30,
            width: 3,
            radius: 3,
            margin: 2
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 5090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9878);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8965);



const useAddToCart = ()=>{
    const { 0: item , 1: setItem  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { addItem , items , updateItemQuantity  } = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_1__.useCart)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const products = sessionStorage.getItem("products");
        setProducts(JSON.parse(products));
    }, []);
    const handleAddItem = (product)=>{
        const result = items.find((i)=>i.id === product._id);
        if (result !== undefined) {
            if (result?.quantity < product?.quantity) {
                const newItem = {
                    ...product,
                    id: product._id
                };
                addItem(newItem, item);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* .notifySuccess */ .t5)(`${item} ${product.title} added to cart!`);
            } else {
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)("No more quantity available for this product!");
            }
        } else {
            const newItem1 = {
                ...product,
                id: product._id
            };
            addItem(newItem1, item);
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* .notifySuccess */ .t5)(`${item} ${product.title} added to cart!`);
        }
    };
    const handleIncreaseQuantity = (item)=>{
        const result = products?.find((p)=>p._id === item.id);
        if (result) {
            if (item?.quantity < result?.quantity) {
                updateItemQuantity(item.id, item.quantity + 1);
            } else {
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)("No more quantity available for this product!");
            }
        }
    };
    return {
        handleAddItem,
        setItem,
        item,
        handleIncreaseQuantity
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAddToCart);


/***/ }),

/***/ 3794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useAsync = (asyncFunction)=>{
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([] || 0);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: errCode , 1: setErrCode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let unmounted = false;
        let source = axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken.source();
        asyncFunction({
            cancelToken: source.token
        }).then((res)=>{
            if (!unmounted) {
                setData(res);
                setError("");
                setLoading(false);
            }
        }).catch((err)=>{
            setErrCode(err?.response?.status);
            if (!unmounted) {
                console.log(err.message);
                setError(err.message);
                if (axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(err)) {
                    setError(err.message);
                    setLoading(false);
                    setData({});
                } else {
                    // console.log('another error happened:' + err.message);
                    setError(err.message);
                    setLoading(false);
                    setData({});
                }
            }
        });
        return ()=>{
            unmounted = true, source.cancel("Cancelled in cleanup");
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (errCode === 401) {
            Cookies.remove("userInfo");
            console.log("status 401", errCode);
            window.location.replace(`${process.env.NEXT_PUBLIC_STORE_DOMAIN}`);
        }
    }, [
        errCode
    ]);
    return {
        data,
        error,
        loading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAsync);


/***/ }),

/***/ 534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_UserServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6765);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6896);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _services_UserServices__WEBPACK_IMPORTED_MODULE_5__, _context_UserContext__WEBPACK_IMPORTED_MODULE_6__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _services_UserServices__WEBPACK_IMPORTED_MODULE_5__, _context_UserContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//internal import



const useLoginSubmit = (setModalOpen)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { redirect  } = router.query;
    const { dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__/* .UserContext */ .S);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { register , handleSubmit , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const submitHandler = ({ name , email , registerEmail , verifyEmail , password ,  })=>{
        setLoading(true);
        const cookieTimeOut1 = 0.5;
        if (registerEmail && password) {
            _services_UserServices__WEBPACK_IMPORTED_MODULE_5__/* ["default"].userLogin */ .Z.userLogin({
                registerEmail,
                password
            }).then((res)=>{
                setLoading(false);
                setModalOpen(false);
                router.push(redirect || "/");
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifySuccess */ .t5)("Login Success!");
                dispatch({
                    type: "USER_LOGIN",
                    payload: res
                });
                js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("userInfo", JSON.stringify(res), {
                    expires: cookieTimeOut1
                });
            }).catch((err)=>{
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(err ? err.response.data.message : err.message);
                setLoading(false);
            });
        }
        if (name && email && password) {
            _services_UserServices__WEBPACK_IMPORTED_MODULE_5__/* ["default"].verifyEmailAddress */ .Z.verifyEmailAddress({
                name,
                email,
                password
            }).then((res)=>{
                setLoading(false);
                setModalOpen(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifySuccess */ .t5)(res.message);
            }).catch((err)=>{
                setLoading(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(err.response.data.message);
            });
        }
        if (verifyEmail) {
            _services_UserServices__WEBPACK_IMPORTED_MODULE_5__/* ["default"].forgetPassword */ .Z.forgetPassword({
                verifyEmail
            }).then((res)=>{
                setLoading(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifySuccess */ .t5)(res.message);
                setValue("verifyEmail");
            }).catch((err)=>{
                setLoading(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(err ? err.response.data.message : err.message);
            });
        }
    };
    const handleGoogleSignIn = (user)=>{
        console.log("google sign in", user);
        if (user.profileObj.name) {
            _services_UserServices__WEBPACK_IMPORTED_MODULE_5__/* ["default"].signUpWithProvider */ .Z.signUpWithProvider({
                name: user.profileObj.name,
                email: user.profileObj.email,
                image: user.profileObj.imageUrl
            }).then((res)=>{
                setModalOpen(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifySuccess */ .t5)("Login success!");
                router.push(redirect || "/");
                dispatch({
                    type: "USER_LOGIN",
                    payload: res
                });
                js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("userInfo", JSON.stringify(res), {
                    expires: cookieTimeOut
                });
            }).catch((err)=>{
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(err.message);
                setModalOpen(false);
            });
        }
    };
    return {
        handleSubmit,
        submitHandler,
        handleGoogleSignIn,
        register,
        errors,
        GoogleLogin: react_google_login__WEBPACK_IMPORTED_MODULE_4__.GoogleLogin,
        loading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoginSubmit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var _layout_footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7724);
/* harmony import */ var _layout_footer_FooterTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2098);
/* harmony import */ var _layout_footer_MobileFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7761);
/* harmony import */ var _component_feature_card_FeatureCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7735);
/* harmony import */ var _navbar_NavBarTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6968);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _layout_footer_Footer__WEBPACK_IMPORTED_MODULE_4__, _layout_footer_MobileFooter__WEBPACK_IMPORTED_MODULE_6__, _navbar_NavBarTop__WEBPACK_IMPORTED_MODULE_8__]);
([_layout_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _layout_footer_Footer__WEBPACK_IMPORTED_MODULE_4__, _layout_footer_MobileFooter__WEBPACK_IMPORTED_MODULE_6__, _navbar_NavBarTop__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//internal import






const Layout = ({ title , description , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "font-sans",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: title ? `KachaBazar | ${title}` : "KachaBazar - React Grocery & Organic Food Store e-commerce Template"
                            }),
                            description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                ref: "icon",
                                href: "/favicon.png"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_NavBarTop__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-gray-50",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_MobileFooter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_FooterTop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_feature_card_FeatureCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "hr-line"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border-t border-gray-100 w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserContext__WEBPACK_IMPORTED_MODULE_6__]);
_context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






//internal import

const Footer = ()=>{
    const { state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__/* .UserContext */ .S);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pb-16 lg:pb-0 xl:pb-0 bg-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-screen-2xl px-4 sm:px-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "text-sm flex flex-col space-y-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/about-us",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "About Us"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/contact-us",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Contact us"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Careers"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Latest news"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5",
                                        children: "Top Category"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "text-sm lg:text-15px flex flex-col space-y-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/search?Category=fish--meat",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Fish & Meat"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/search?Category=drinks",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Soft Drinks"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "search?Category=baby-care",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Baby Care"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "search?Category=beauty--health",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Beauty & Health"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5",
                                        children: "My Account"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "text-sm lg:text-15px flex flex-col space-y-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `${userInfo?.email ? "/user/dashboard" : "#"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Dashboard"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `${userInfo?.email ? "/user/my-orders" : "#"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "My Orders"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `${userInfo?.email ? "/user/dashboard" : "#"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Recent Orders"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-baseline",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `${userInfo?.email ? "/user/update-profile" : "#"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "text-gray-600 inline-block w-full hover:text-emerald-500",
                                                        children: "Updated Profile"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "mr-3 lg:mr-12 xl:mr-12",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 110,
                                                height: 40,
                                                src: "/logo/logo-color.svg",
                                                alt: "logo"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "leading-7 font-sans text-sm text-gray-600 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "987 Andre Plain Suite High Street 838, ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " Lake Hestertown, USA"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Tell: 02.356.1666"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Email: ccruidk@test.com"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "hr-line"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-base leading-7 font-medium block mb-2 pb-0.5",
                                            children: "Follow Us"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "text-sm flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex items-center mr-3 transition ease-in-out duration-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "https://www.facebook.com",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "aria-label": "Social Link",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "block text-center mx-auto text-gray-500 hover:text-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookIcon, {
                                                                size: 34,
                                                                round: true
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex items-center mr-3 transition ease-in-out duration-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "https://twitter.com",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "aria-label": "Social Link",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "block text-center mx-auto text-gray-500 hover:text-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {
                                                                size: 34,
                                                                round: true
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex items-center mr-3 transition ease-in-out duration-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "https://www.pinterest.com",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "aria-label": "Social Link",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "block text-center mx-auto text-gray-500 hover:text-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {
                                                                size: 34,
                                                                round: true
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex items-center mr-3 transition ease-in-out duration-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "https://www.linkedin.com",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "aria-label": "Social Link",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "block text-center mx-auto text-gray-500 hover:text-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_5__.LinkedinIcon, {
                                                                size: 34,
                                                                round: true
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex items-center mr-3 transition ease-in-out duration-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "https://www.whatsapp.com",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "aria-label": "Social Link",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "block text-center mx-auto text-gray-500 hover:text-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappIcon, {
                                                                size: 34,
                                                                round: true
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-1 text-center hidden lg:block md:block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-base leading-7 font-medium block",
                                            children: "Call Us Today!"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "text-2xl font-bold text-emerald-500 leading-7",
                                            children: "+012345-67900"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-span-1 hidden lg:block md:block",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "lg:text-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 274,
                                                height: 85,
                                                className: "w-full",
                                                src: "/payment-method/payment-logo.png",
                                                alt: "payment method"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-sm text-gray-500 leading-6",
                    children: [
                        "Copyright 2022 @",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "https://themeforest.net/user/htmllover",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-emerald-500",
                                children: "HtmlLover"
                            })
                        }),
                        ", All rights reserved."
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.resolve(Footer), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const FooterTop = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "downloadApp",
        className: "bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-screen-2xl mx-auto px-4 sm:px-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: "/app-download-img-left.png",
                            alt: "app download",
                            width: 500,
                            height: 394,
                            className: "block w-auto"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3",
                                children: "Get Your Daily Needs From Our KachaBazar Store"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-base opacity-90 leading-7",
                                children: "There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "https://www.apple.com/app-store/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "mx-2",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 170,
                                                height: 50,
                                                className: "mr-2 rounded",
                                                src: "/app/app-store.svg",
                                                alt: "app store"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "https://play.google.com/store/apps",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 170,
                                                height: 50,
                                                className: "rounded",
                                                src: "/app/play-store.svg",
                                                alt: "app store"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:hidden lg:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-grow hidden lg:flex md:flex lg:justify-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/app-download-img.png",
                                width: 500,
                                height: 394,
                                alt: "app download",
                                className: "block w-auto"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterTop);


/***/ }),

/***/ 7761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9878);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6896);
/* harmony import */ var _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9440);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7053);
/* harmony import */ var _component_drawer_CategoryDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserContext__WEBPACK_IMPORTED_MODULE_7__, _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_8__, _component_drawer_CategoryDrawer__WEBPACK_IMPORTED_MODULE_10__]);
([_context_UserContext__WEBPACK_IMPORTED_MODULE_7__, _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_8__, _component_drawer_CategoryDrawer__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MobileFooter = ()=>{
    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { toggleCartDrawer , toggleCategoryDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_9__/* .SidebarContext */ .l);
    const { totalItems  } = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_5__.useCart)();
    const { state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_7__/* .UserContext */ .S);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                modalOpen: modalOpen,
                setModalOpen: setModalOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_drawer_CategoryDrawer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    className: "w-6 h-6 drop-shadow-xl"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "lg:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "Bar",
                        onClick: toggleCategoryDrawer,
                        className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-xl text-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiAlignLeft, {
                                className: "w-6 h-6 drop-shadow-xl"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "text-xl text-white",
                            rel: "noreferrer",
                            "aria-label": "Home",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiHome, {
                                    className: "w-6 h-6 drop-shadow-xl"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: toggleCartDrawer,
                        className: "h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full",
                                children: totalItems
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiShoppingCart, {
                                className: "w-6 h-6 drop-shadow-xl"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "User",
                        type: "button",
                        className: "text-xl text-white indicator justify-center",
                        children: userInfo?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/user/dashboard",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "relative top-1 w-6 h-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    width: 29,
                                    height: 29,
                                    src: userInfo.image,
                                    alt: "user",
                                    className: "rounded-full"
                                })
                            })
                        }) : userInfo?.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/user/dashboard",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "leading-none font-bold font-serif block",
                                children: userInfo?.name[0]
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>setModalOpen(!modalOpen),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiUser, {
                                className: "w-6 h-6 drop-shadow-xl"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.resolve(MobileFooter), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9440);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_5__, _context_UserContext__WEBPACK_IMPORTED_MODULE_6__]);
([_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_5__, _context_UserContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//internal import


const NavBarTop = ()=>{
    const { state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__/* .UserContext */ .S);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleModal = ()=>{
        if (userInfo?.email) {
            router.push("/user/dashboard");
        } else {
            setModalOpen(!modalOpen);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                modalOpen: modalOpen,
                setModalOpen: setModalOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:block bg-gray-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-screen-2xl mx-auto px-3 sm:px-10",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiPhoneCall, {
                                        className: "mr-2"
                                    }),
                                    "We are available 24/7, Need help? Call Us:",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "tel:+012345609",
                                        className: "font-bold text-emerald-500 ml-1",
                                        children: "+01234560352"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:text-right flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/about-us",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium hover:text-emerald-600",
                                            children: "About Us"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "mx-2",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/contact-us",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium hover:text-emerald-600",
                                            children: "Contact Us"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "mx-2",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleModal,
                                        className: "font-medium hover:text-emerald-600",
                                        children: "My account"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "mx-2",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: ()=>setModalOpen(!modalOpen),
                                        className: "flex items-center font-medium hover:text-emerald-600",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiUser, {})
                                            }),
                                            "Login"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBarTop);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9878);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layout_navbar_NavbarPromo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5125);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6896);
/* harmony import */ var _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9440);
/* harmony import */ var _component_drawer_CartDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6211);
/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _layout_navbar_NavbarPromo__WEBPACK_IMPORTED_MODULE_10__, _context_UserContext__WEBPACK_IMPORTED_MODULE_11__, _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_12__, _component_drawer_CartDrawer__WEBPACK_IMPORTED_MODULE_13__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _layout_navbar_NavbarPromo__WEBPACK_IMPORTED_MODULE_10__, _context_UserContext__WEBPACK_IMPORTED_MODULE_11__, _component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_12__, _component_drawer_CartDrawer__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










//internal import





const Navbar = ()=>{
    const { 0: imageUrl , 1: setImageUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: modalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { toggleCartDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_14__/* .SidebarContext */ .l);
    const { totalItems  } = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_7__.useCart)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_11__/* .UserContext */ .S);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (searchText) {
            router.push(`/search?query=${searchText}`, null, {
                scroll: false
            });
            setSearchText("");
        } else {
            router.push(`/ `, null, {
                scroll: false
            });
            setSearchText("");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("userInfo")) {
            const user = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("userInfo"));
            setImageUrl(user.image);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_drawer_CartDrawer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
            modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_modal_LoginModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                modalOpen: modalOpen,
                setModalOpen: setModalOpen
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-emerald-500 sticky top-0 z-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-screen-2xl mx-auto px-3 sm:px-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            width: 110,
                                            height: 40,
                                            src: "/logo/logo-light.svg",
                                            alt: "logo"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full flex flex-col justify-center flex-shrink-0 relative z-30",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col mx-auto w-full",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                onSubmit: handleSubmit,
                                                className: "relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "flex items-center py-0.5",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            onChange: (e)=>setSearchText(e.target.value),
                                                            value: searchText,
                                                            className: "form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75",
                                                            placeholder: "Search for products (e.g. fish, apple, oil)"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        "aria-label": "Search",
                                                        type: "submit",
                                                        className: "outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__.IoSearchOutline, {})
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "pr-5 text-white text-2xl font-bold",
                                            "aria-label": "Alert",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiBell, {
                                                className: "w-6 h-6 drop-shadow-xl"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            "aria-label": "Total",
                                            onClick: toggleCartDrawer,
                                            className: "relative px-5 text-white text-2xl font-bold",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full",
                                                    children: totalItems
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiShoppingCart, {
                                                    className: "w-6 h-6 drop-shadow-xl"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "pl-5 text-white text-2xl font-bold",
                                            "aria-label": "Login",
                                            children: imageUrl || userInfo?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/user/dashboard",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "relative top-1 w-6 h-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        width: 29,
                                                        height: 29,
                                                        src: imageUrl || userInfo?.image,
                                                        alt: "user",
                                                        className: "bg-white rounded-full"
                                                    })
                                                })
                                            }) : userInfo?.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/user/dashboard",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "leading-none font-bold font-serif block",
                                                    children: userInfo?.name[0]
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                onClick: ()=>setModalOpen(!modalOpen),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiUser, {
                                                    className: "w-6 h-6 drop-shadow-xl"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_navbar_NavbarPromo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.resolve(Navbar), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3214);
/* harmony import */ var _component_category_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _component_category_Category__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _component_category_Category__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//internal import


const NavbarPromo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hidden lg:block xl:block bg-white border-b",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-flex",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {
                            className: "relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "max-w-7xl mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-between items-center md:justify-start md:space-x-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Group, {
                                        as: "nav",
                                        className: "md:flex space-x-10 items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {
                                                className: "relative font-serif",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
                                                        className: "group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-serif text-sm font-medium",
                                                                children: "Categories"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {
                                                                className: "ml-1 h-3 w-3 group-hover:text-emerald-600",
                                                                "aria-hidden": "true"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                        enter: "transition ease-out duration-200",
                                                        enterFrom: "opacity-0 translate-y-1",
                                                        enterTo: "opacity-100 translate-y-0",
                                                        leave: "transition ease-in duration-150",
                                                        leaveFrom: "opacity-100 translate-y-0",
                                                        leaveTo: "opacity-0 translate-y-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {
                                                            className: "absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_category_Category__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/about-us",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600",
                                                    children: "About Us"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/contact-us",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600",
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {
                                                className: "relative font-serif",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
                                                        className: "group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Pages"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {
                                                                className: "ml-1 h-3 w-3 group-hover:text-emerald-600",
                                                                "aria-hidden": "true"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                        enter: "transition ease-out duration-200",
                                                        enterFrom: "opacity-0 translate-y-1",
                                                        enterTo: "opacity-100 translate-y-0",
                                                        leave: "transition ease-in duration-150",
                                                        leaveFrom: "opacity-100 translate-y-0",
                                                        leaveTo: "opacity-0 translate-y-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {
                                                            className: "absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "relative grid gap-2 px-6 py-6",
                                                                    children: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .pages.map */ .L1.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                                                    className: "flex-shrink-0 h-4 w-4",
                                                                                    "aria-hidden": "true"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                    href: item.href,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        className: "inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600",
                                                                                        children: item.title
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }, item.title))
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/offer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "relative inline-flex items-center h-6 bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600",
                                                    children: [
                                                        "Offers",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "absolute flex w-2 h-2 left-auto -right-1 -top-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "relative inline-flex rounded-full h-2 w-2 bg-red-500"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/privacy-policy",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600",
                                    children: "Privacy Policy"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/terms-and-conditions",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600",
                                    children: "Terms & Conditions"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarPromo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _httpServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_httpServices__WEBPACK_IMPORTED_MODULE_0__]);
_httpServices__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CategoryServices = {
    getShowingCategory () {
        return _httpServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/category/show");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L1": () => (/* binding */ pages),
/* harmony export */   "Yf": () => (/* binding */ contactData),
/* harmony export */   "Zr": () => (/* binding */ sliderData),
/* harmony export */   "kR": () => (/* binding */ userSidebar),
/* harmony export */   "kk": () => (/* binding */ featurePromo),
/* harmony export */   "sW": () => (/* binding */ ctaCardData)
/* harmony export */ });
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__);



const pages = [
    // {
    //   title: 'User',
    //   href: '/user/dashboard',
    //   icon: FiUser,
    // },
    {
        title: "Offer",
        href: "/offer",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiGift
    },
    {
        title: "Checkout",
        href: "/checkout",
        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoBagCheckOutline
    },
    {
        title: "FAQ",
        href: "/faq",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiHelpCircle
    },
    {
        title: "About Us",
        href: "/about-us",
        icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineUserGroup
    },
    {
        title: "Contact Us",
        href: "/contact-us",
        icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlinePhoneIncoming
    },
    {
        title: "Privacy Policy",
        href: "/privacy-policy",
        icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineShieldCheck
    },
    {
        title: "Terms & Conditions",
        href: "/terms-and-conditions",
        icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineDocumentText
    },
    {
        title: "404",
        href: "/404",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiAlertCircle
    }, 
];
const userSidebar = [
    {
        title: "Dashboard",
        href: "/user/dashboard",
        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoGridOutline
    },
    {
        title: "My Orders",
        href: "/user/my-orders",
        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoListOutline
    },
    {
        title: "Update Profile",
        href: "/user/update-profile",
        icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoSettingsOutline
    },
    {
        title: "Change Password",
        href: "/user/change-password",
        icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineDocumentText
    }, 
];
const sliderData = [
    {
        id: 1,
        title: "The Best Quality Products Guaranteed!",
        info: "Dramatically facilitate effective total linkage for go forward processes...",
        url: "/search?Category=biscuits--cakes",
        image: "/slider/slider-1.jpg"
    },
    {
        id: 2,
        title: "Best Different Type of Grocery Store",
        info: "Quickly aggregate empowered networks after emerging products...",
        url: "/search?Category=fish--meat",
        image: "/slider/slider-2.jpg"
    },
    {
        id: 3,
        title: "Quality Freshness Guaranteed!",
        info: "Intrinsicly fashion performance based products rather than accurate benefits...",
        url: "/search?category=fresh-vegetable",
        image: "/slider/slider-3.jpg"
    }, 
];
const ctaCardData = [
    {
        id: 1,
        title: "Taste of",
        subTitle: "Fresh & Natural",
        image: "/cta/cta-bg-1.jpg",
        url: "/search?category=fresh-vegetable"
    },
    {
        id: 2,
        title: "Taste of",
        subTitle: "Fish & Meat",
        image: "/cta/cta-bg-2.jpg",
        url: "/search?Category=fish--meat"
    },
    {
        id: 3,
        title: "Taste of",
        subTitle: "Bread & Bakery",
        image: "/cta/cta-bg-3.jpg",
        url: "/search?Category=biscuits--cakes"
    }, 
];
const featurePromo = [
    {
        id: 1,
        title: "Free Shipping",
        info: "From $500.00",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiTruck
    },
    {
        id: 2,
        title: "Support 24/7",
        info: "At Anytime",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiPhoneCall
    },
    {
        id: 3,
        title: "Secure Payment",
        info: "Totally Safe",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiCreditCard
    },
    {
        id: 4,
        title: "Latest Offer",
        info: "Upto 20% Off",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiGift
    }, 
];
const contactData = [
    {
        id: 1,
        title: "Email Us",
        info: "Interactively grow empowered for process-centric total linkage.",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiMail,
        contact: "kachabazar@gmail.com",
        className: "bg-emerald-100"
    },
    {
        id: 2,
        title: "Call Us",
        info: "Distinctively disseminate focused solutions clicks-and-mortar ministate.",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiPhoneCall,
        contact: "029-00124667",
        className: "bg-yellow-100"
    },
    {
        id: 3,
        title: "Location",
        info: "Cecilia Chapman, 561-4535 Nulla LA, United States 96522",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_0__.FiMapPin,
        contact: "",
        className: "bg-indigo-100"
    }, 
];



/***/ })

};
;