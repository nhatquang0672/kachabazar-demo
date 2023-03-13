"use strict";
exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 885:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useFilter = (data)=>{
    const { 0: pending , 1: setPending  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: processing , 1: setProcessing  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: delivered , 1: setDelivered  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: sortedField , 1: setSortedField  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const productData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        let services = data;
        //filter user order
        if (router.pathname === "/user/dashboard") {
            const orderPending = services?.filter((statusP)=>statusP.status === "Pending");
            setPending(orderPending);
            const orderProcessing = services?.filter((statusO)=>statusO.status === "Processing");
            setProcessing(orderProcessing);
            const orderDelivered = services?.filter((statusD)=>statusD.status === "Delivered");
            setDelivered(orderDelivered);
        }
        //service sorting with low and high price
        if (sortedField === "Low") {
            services = services?.sort((a, b)=>a.price < b.price && -1);
        }
        if (sortedField === "High") {
            services = services?.sort((a, b)=>a.price > b.price && -1);
        }
        return services;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        sortedField,
        data
    ]);
    return {
        productData,
        pending,
        processing,
        delivered,
        setSortedField
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;