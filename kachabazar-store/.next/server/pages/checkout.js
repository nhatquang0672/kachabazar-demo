"use strict";
(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 5245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InputPayment = ({ register , Icon , name , value , setShowCard  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-3 py-4 card border border-gray-200 bg-white rounded-md",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            className: "cursor-pointer label",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex item-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xl mr-3 text-gray-400",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "font-serif font-medium text-sm text-gray-600",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onClick: ()=>setShowCard(value === "Card" ? true : false),
                        ...register("paymentMethod", {
                            required: "Payment Method is required!"
                        }),
                        type: "radio",
                        value: value,
                        name: "paymentMethod",
                        className: "form-radio outline-none focus:ring-0 text-emerald-500"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputPayment);


/***/ }),

/***/ 2027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);



const InputShipping = ({ register , value , time , cost , handleShippingCost  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "p-3 card border border-gray-200 bg-white rounded-md",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "cursor-pointer label",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-2xl mr-3 text-gray-400",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTruck, {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "font-serif font-medium text-sm text-gray-600",
                                            children: value
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-xs text-gray-500 font-medium",
                                            children: [
                                                "Delivery: ",
                                                time,
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-medium text-gray-600",
                                                    children: [
                                                        "Cost : $",
                                                        cost,
                                                        ".00"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onClick: ()=>handleShippingCost(cost),
                            ...register(`shippingOption`, {
                                required: `Shipping Option is required!`
                            }),
                            name: "shippingOption",
                            type: "radio",
                            value: value,
                            className: "form-radio outline-none focus:ring-0 text-emerald-500"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputShipping);


/***/ }),

/***/ 6187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9878);
/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3794);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6896);
/* harmony import */ var _services_OrderServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3768);
/* harmony import */ var _services_CouponServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1722);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _context_UserContext__WEBPACK_IMPORTED_MODULE_8__, _services_OrderServices__WEBPACK_IMPORTED_MODULE_9__, _services_CouponServices__WEBPACK_IMPORTED_MODULE_10__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _context_UserContext__WEBPACK_IMPORTED_MODULE_8__, _services_OrderServices__WEBPACK_IMPORTED_MODULE_9__, _services_CouponServices__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







//internal import





const useCheckoutSubmit = ()=>{
    const { state: { userInfo , shippingAddress  } , dispatch ,  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_8__/* .UserContext */ .S);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: couponInfo , 1: setCouponInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    const { 0: minimumAmount , 1: setMinimumAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: showCard , 1: setShowCard  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: shippingCost , 1: setShippingCost  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: discountAmount , 1: setDiscountAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: discountPercentage , 1: setDiscountPercentage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: discountProductType , 1: setDiscountProductType  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: isCheckoutSubmit , 1: setIsCheckoutSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useStripe)();
    const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useElements)();
    const couponRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
    const { isEmpty , emptyCart , items , cartTotal  } = (0,react_use_cart__WEBPACK_IMPORTED_MODULE_5__.useCart)();
    const { register , handleSubmit , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    const { data  } = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_services_CouponServices__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getAllCoupons */ .Z.getAllCoupons);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("couponInfo")) {
            const coupon = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("couponInfo"));
            setCouponInfo(coupon);
            setDiscountPercentage(coupon.discountPercentage);
            setMinimumAmount(coupon.minimumAmount);
        }
    }, []);
    //remove coupon if total value less then minimum amount of coupon
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (minimumAmount - discountAmount > total || isEmpty) {
            setDiscountPercentage(0);
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("couponInfo");
        }
    }, [
        minimumAmount,
        total
    ]);
    //calculate total and discount value
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const result = items?.filter((p)=>p.type === discountProductType);
        const discountProductTotal = result?.reduce((preValue, currentValue)=>preValue + currentValue.itemTotal, 0);
        let totalValue = "";
        let subTotal = (cartTotal + shippingCost).toFixed(2);
        let discountAmount = discountProductTotal * (discountPercentage / 100);
        totalValue = subTotal - discountAmount;
        setDiscountAmount(discountAmount);
        setTotal(totalValue);
    }, [
        cartTotal,
        shippingCost,
        discountPercentage
    ]);
    //if not login then push user to home page
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!userInfo) {
            router.push("/");
        }
        setValue("firstName", shippingAddress.firstName);
        setValue("lastName", shippingAddress.lastName);
        setValue("address", shippingAddress.address);
        setValue("contact", shippingAddress.contact);
        setValue("email", shippingAddress.email);
        setValue("city", shippingAddress.city);
        setValue("country", shippingAddress.country);
        setValue("zipCode", shippingAddress.zipCode);
    }, []);
    const submitHandler = async (data)=>{
        dispatch({
            type: "SAVE_SHIPPING_ADDRESS",
            payload: data
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("shippingAddress", JSON.stringify(data));
        setIsCheckoutSubmit(true);
        setError("");
        let orderInfo = {
            name: `${data.firstName} ${data.lastName}`,
            address: data.address,
            contact: data.contact,
            email: data.email,
            city: data.city,
            country: data.country,
            zipCode: data.zipCode,
            shippingOption: data.shippingOption,
            paymentMethod: data.paymentMethod,
            status: "Pending",
            cart: items,
            subTotal: cartTotal,
            shippingCost: shippingCost,
            discount: discountAmount,
            total: total
        };
        if (data.paymentMethod === "Card") {
            if (!stripe || !elements) {
                return;
            }
            const { error , paymentMethod  } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.CardElement)
            });
            console.log("error", error);
            if (error && !paymentMethod) {
                setError(error.message);
                setIsCheckoutSubmit(false);
            } else {
                setError("");
                const orderData = {
                    ...orderInfo,
                    cardInfo: paymentMethod
                };
                handlePaymentWithStripe(orderData);
                // console.log('cardInfo', orderData);
                return;
            }
        }
        if (data.paymentMethod === "COD") {
            _services_OrderServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"].addOrder */ .Z.addOrder(orderInfo).then((res)=>{
                router.push(`/order/${res._id}`);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifySuccess */ .t5)("Your Order Confirmed!");
                js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("couponInfo");
                sessionStorage.removeItem("products");
                emptyCart();
                setIsCheckoutSubmit(false);
            }).catch((err)=>{
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)(err.message);
                setIsCheckoutSubmit(false);
            });
        }
    };
    const handlePaymentWithStripe = async (order)=>{
        try {
            // console.log('try goes here!', order);
            // const updatedOrder = {
            //   ...order,
            //   currency: 'usd',
            // };
            _services_OrderServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"].createPaymentIntent */ .Z.createPaymentIntent(order).then((res)=>{
                stripe.confirmCardPayment(res.client_secret, {
                    payment_method: {
                        card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.CardElement)
                    }
                });
                const orderData = {
                    ...order,
                    cardInfo: res
                };
                _services_OrderServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"].addOrder */ .Z.addOrder(orderData).then((res)=>{
                    router.push(`/order/${res._id}`);
                    (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifySuccess */ .t5)("Your Order Confirmed!");
                    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("couponInfo");
                    emptyCart();
                    sessionStorage.removeItem("products");
                    setIsCheckoutSubmit(false);
                }).catch((err)=>{
                    (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)(err ? err?.response?.data?.message : err.message);
                    setIsCheckoutSubmit(false);
                });
            // console.log('res', res, 'paymentIntent', paymentIntent);
            }).catch((err)=>{
                console.log("err on creating payment intent", err.message);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)(err ? err?.response?.data?.message : err.message);
                setIsCheckoutSubmit(false);
            });
        } catch (err) {
            console.log("err", err?.message);
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)(err ? err?.response?.data?.message : err.message);
            setIsCheckoutSubmit(false);
        }
    };
    const handleShippingCost = (value)=>{
        setShippingCost(value);
    };
    const handleCouponCode = (e)=>{
        e.preventDefault();
        if (!couponRef.current.value) {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)("Please Input a Coupon Code!");
            return;
        }
        const result = data.filter((coupon)=>coupon.couponCode === couponRef.current.value);
        if (result.length < 1) {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)("Please Input a Valid Coupon!");
            return;
        }
        if (dayjs__WEBPACK_IMPORTED_MODULE_1__().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_1__(result[0]?.endTime))) {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)("This coupon is not valid!");
            return;
        }
        if (total < result[0]?.minimumAmount) {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifyError */ .cB)(`Minimum ${result[0].minimumAmount} USD required for Apply this coupon!`);
            return;
        } else {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_11__/* .notifySuccess */ .t5)(`Your Coupon ${result[0].title} is Applied on ${result[0].productType}!`);
            setMinimumAmount(result[0]?.minimumAmount);
            setDiscountProductType(result[0].productType);
            setDiscountPercentage(result[0].discountPercentage);
            dispatch({
                type: "SAVE_COUPON",
                payload: result[0]
            });
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("couponInfo", JSON.stringify(result[0]));
        }
    };
    return {
        handleSubmit,
        submitHandler,
        handleShippingCost,
        register,
        errors,
        showCard,
        setShowCard,
        error,
        stripe,
        couponInfo,
        couponRef,
        handleCouponCode,
        discountPercentage,
        discountAmount,
        shippingCost,
        total,
        isEmpty,
        items,
        cartTotal,
        isCheckoutSubmit
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCheckoutSubmit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2650:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9608);
/* harmony import */ var _component_form_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1473);
/* harmony import */ var _component_form_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1691);
/* harmony import */ var _component_cart_CartItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8551);
/* harmony import */ var _component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97);
/* harmony import */ var _component_form_InputShipping__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2027);
/* harmony import */ var _component_form_InputPayment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5245);
/* harmony import */ var _hooks_useCheckoutSubmit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6187);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_7__, _hooks_useCheckoutSubmit__WEBPACK_IMPORTED_MODULE_14__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_7__, _hooks_useCheckoutSubmit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







//internal import








const Checkout = ()=>{
    const { handleSubmit , submitHandler , handleShippingCost , register , errors , showCard , setShowCard , error , stripe , couponInfo , couponRef , handleCouponCode , discountAmount , shippingCost , total , isEmpty , items , cartTotal , isCheckoutSubmit ,  } = (0,_hooks_useCheckoutSubmit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            title: "Checkout",
            description: "this is checkout page",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto max-w-screen-2xl px-3 sm:px-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-5 md:mt-0 md:col-span-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit(submitHandler),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "font-semibold font-serif text-base text-gray-700 pb-3",
                                                    children: "01. Personal Details"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-6 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "First Name",
                                                                    name: "firstName",
                                                                    type: "text",
                                                                    placeholder: "John"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.firstName
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Last name",
                                                                    name: "lastName",
                                                                    type: "text",
                                                                    placeholder: "Doe"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.lastName
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Email address",
                                                                    name: "email",
                                                                    type: "email",
                                                                    placeholder: "youremail@gmail.com"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.email
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Phone number",
                                                                    name: "contact",
                                                                    type: "tel",
                                                                    placeholder: "+062-6532956"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.contact
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group mt-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "font-semibold font-serif text-base text-gray-700 pb-3",
                                                    children: "02. Shipping Details"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-6 gap-6 mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Street address",
                                                                    name: "address",
                                                                    type: "text",
                                                                    placeholder: "123 Boulevard Rd, Beverley Hills"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.address
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-6 lg:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "City",
                                                                    name: "city",
                                                                    type: "text",
                                                                    placeholder: "Los Angeles"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.city
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3 lg:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Country",
                                                                    name: "country",
                                                                    type: "text",
                                                                    placeholder: "United States"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.country
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3 lg:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "ZIP / Postal",
                                                                    name: "zipCode",
                                                                    type: "text",
                                                                    placeholder: "2345"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.zipCode
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Label__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    label: "Shipping Cost"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-6 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputShipping__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                    handleShippingCost: handleShippingCost,
                                                                    register: register,
                                                                    value: "FedEx",
                                                                    time: "Today",
                                                                    cost: 60
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.shippingOption
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputShipping__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                    handleShippingCost: handleShippingCost,
                                                                    register: register,
                                                                    value: "UPS",
                                                                    time: "7 Days",
                                                                    cost: 20
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.shippingOption
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group mt-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "font-semibold font-serif text-base text-gray-700 pb-3",
                                                    children: "03. Payment Details"
                                                }),
                                                showCard && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-red-400 text-sm mt-1",
                                                            children: error
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-6 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputPayment__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                    setShowCard: setShowCard,
                                                                    register: register,
                                                                    name: "Cash On Delivery",
                                                                    value: "COD",
                                                                    Icon: react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoWalletSharp
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.paymentMethod
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputPayment__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                    setShowCard: setShowCard,
                                                                    register: register,
                                                                    name: "Credit Card",
                                                                    value: "Card",
                                                                    Icon: react_icons_im__WEBPACK_IMPORTED_MODULE_6__.ImCreditCard
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    errorName: errors.paymentMethod
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid grid-cols-6 gap-4 lg:gap-6 mt-10",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-6 sm:col-span-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            className: "bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-xl mr-2",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoReturnUpBackOutline, {})
                                                                }),
                                                                "Continue Shopping"
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-6 sm:col-span-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        disabled: isEmpty || !stripe || isCheckoutSubmit,
                                                        className: "bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full",
                                                        children: isCheckoutSubmit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex justify-center text-center",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/spinner.gif",
                                                                    alt: "Loading",
                                                                    width: 20,
                                                                    height: 10
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "ml-2",
                                                                    children: "Processing"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex justify-center text-center",
                                                            children: [
                                                                " ",
                                                                "Confirm",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "text-xl ml-2",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoArrowForward, {})
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-semibold font-serif text-lg pb-4",
                                        children: "Order Summary"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block",
                                        children: [
                                            items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cart_CartItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    item: item
                                                }, item.id)),
                                            isEmpty && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center py-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex justify-center my-auto text-gray-500 font-semibold text-4xl",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoBagHandle, {})
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "font-medium font-serif text-sm pt-2 text-gray-600",
                                                        children: "No Item Added Yet!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            className: "w-full",
                                            children: couponInfo.couponCode ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "bg-emerald-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-emerald-600",
                                                        children: "Coupon Applied "
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-red-500 text-right",
                                                        children: couponInfo.couponCode
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col sm:flex-row items-start justify-end",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ref: couponRef,
                                                        type: "text",
                                                        placeholder: "Input your coupon code",
                                                        className: "form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-emerald-500 placeholder-gray-500 placeholder-opacity-75"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: handleCouponCode,
                                                        className: "md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto",
                                                        children: "Apply"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0",
                                        children: [
                                            "Subtotal",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "ml-auto flex-shrink-0 text-gray-800 font-bold",
                                                children: [
                                                    "$",
                                                    cartTotal.toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0",
                                        children: [
                                            "Shipping Cost",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "ml-auto flex-shrink-0 text-gray-800 font-bold",
                                                children: [
                                                    "$",
                                                    shippingCost.toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0",
                                        children: [
                                            "Discount",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "ml-auto flex-shrink-0 font-bold text-orange-400",
                                                children: [
                                                    "$",
                                                    discountAmount.toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "border-t mt-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase",
                                            children: [
                                                "Total cost",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-serif font-extrabold text-lg",
                                                    children: [
                                                        " ",
                                                        "$",
                                                        Math.round(total),
                                                        ".00"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(Checkout), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 4515:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5307:
/***/ ((module) => {

module.exports = require("rc-drawer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 67:
/***/ ((module) => {

module.exports = require("react-google-login");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

/***/ }),

/***/ 2633:
/***/ ((module) => {

module.exports = require("react-spinners/ScaleLoader");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 9878:
/***/ ((module) => {

module.exports = require("react-use-cart");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,849,278,828,53,263,608], () => (__webpack_exec__(2650)));
module.exports = __webpack_exports__;

})();