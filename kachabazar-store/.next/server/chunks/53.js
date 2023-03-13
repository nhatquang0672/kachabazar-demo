"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 7053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SidebarProvider),
/* harmony export */   "l": () => (/* binding */ SidebarContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// create context
const SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SidebarProvider = ({ children  })=>{
    const { 0: cartDrawerOpen , 1: setCartDrawerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: categoryDrawerOpen , 1: setCategoryDrawerOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isModalOpen , 1: setIsModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleCartDrawer = ()=>setCartDrawerOpen(!cartDrawerOpen);
    const closeCartDrawer = ()=>setCartDrawerOpen(false);
    const toggleCategoryDrawer = ()=>setCategoryDrawerOpen(!categoryDrawerOpen);
    const closeCategoryDrawer = ()=>setCategoryDrawerOpen(false);
    const toggleModal = ()=>setIsModalOpen(!isModalOpen);
    const closeModal = ()=>setIsModalOpen(false);
    const handleChangePage = (p)=>{
        setCurrentPage(p);
    };
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            cartDrawerOpen,
            toggleCartDrawer,
            closeCartDrawer,
            setCartDrawerOpen,
            categoryDrawerOpen,
            toggleCategoryDrawer,
            closeCategoryDrawer,
            isModalOpen,
            toggleModal,
            closeModal,
            currentPage,
            setCurrentPage,
            handleChangePage,
            isLoading,
            setIsLoading
        }), [
        cartDrawerOpen,
        categoryDrawerOpen,
        isModalOpen,
        currentPage,
        isLoading
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContext.Provider, {
        value: value,
        children: children
    });
};


/***/ })

};
;