"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994,894];
exports.modules = {

/***/ 2745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ image_uploader_Uploader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "react-dropzone"
const external_react_dropzone_namespaceObject = require("react-dropzone");
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/component/image-uploader/Uploader.js





const Uploader = ({ setImageUrl , imageUrl  })=>{
    const { 0: files , 1: setFiles  } = (0,external_react_.useState)([]);
    const uploadUrl = "https://api.cloudinary.com/v1_1/your-Cloud-Name/image/upload";
    const upload_Preset = "dfafsd  //use here your unsigned upload preset";
    const { getRootProps , getInputProps  } = (0,external_react_dropzone_namespaceObject.useDropzone)({
        accept: "image/*",
        multiple: false,
        maxSize: 100000,
        onDrop: (acceptedFiles)=>{
            setFiles(acceptedFiles.map((file)=>Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
        }
    });
    const thumbs = files.map((file)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "inline-flex border-2 border-gray-100 w-24 max-h-24",
                    src: file.preview,
                    alt: file.name
                })
            })
        }, file.name));
    (0,external_react_.useEffect)(()=>{
        const uploadURL = uploadUrl;
        const uploadPreset = upload_Preset;
        if (files) {
            files.forEach((file)=>{
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", uploadPreset);
                external_axios_default()({
                    url: uploadURL,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    data: formData
                }).then((res)=>{
                    setImageUrl(res.data.secure_url);
                }).catch((err)=>console.log(err));
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        files
    ]);
    (0,external_react_.useEffect)(()=>()=>{
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file)=>URL.revokeObjectURL(file.preview));
        }, [
        files
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full text-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer",
                ...getRootProps(),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...getInputProps()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "mx-auto flex justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiUploadCloud, {
                            className: "text-3xl text-emerald-500"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm mt-2",
                        children: "Drag your image here"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                        className: "text-xs text-gray-400",
                        children: "(Only *.jpeg and *.png images will be accepted)"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                className: "flex flex-row flex-wrap mt-4",
                children: imageUrl ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "inline-flex border rounded-md border-gray-100 w-24 max-h-24 p-2",
                    src: imageUrl,
                    alt: "product"
                }) : thumbs
            })
        ]
    });
};
/* harmony default export */ const image_uploader_Uploader = (Uploader);


/***/ }),

/***/ 5707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_form_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1473);
/* harmony import */ var _component_form_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1691);
/* harmony import */ var _pages_user_dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7029);
/* harmony import */ var _component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97);
/* harmony import */ var _services_UserServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6765);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6896);
/* harmony import */ var _component_image_uploader_Uploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2745);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _pages_user_dashboard__WEBPACK_IMPORTED_MODULE_7__, _services_UserServices__WEBPACK_IMPORTED_MODULE_9__, _context_UserContext__WEBPACK_IMPORTED_MODULE_10__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _pages_user_dashboard__WEBPACK_IMPORTED_MODULE_7__, _services_UserServices__WEBPACK_IMPORTED_MODULE_9__, _context_UserContext__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//internal import








const UpdateProfile = ()=>{
    const { 0: imageUrl , 1: setImageUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_10__/* .UserContext */ .S);
    const { register , handleSubmit , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const onSubmit = (data)=>{
        if (!imageUrl) {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_12__/* .notifyError */ .cB)("Image is required!");
            return;
        }
        setLoading(true);
        // notifySuccess('For demo this feature is disable!');
        const userData = {
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            image: imageUrl
        };
        _services_UserServices__WEBPACK_IMPORTED_MODULE_9__/* ["default"].updateUser */ .Z.updateUser(userInfo._id, userData).then((res)=>{
            if (res) {
                setLoading(false);
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_12__/* .notifySuccess */ .t5)("Profile Update Successfully!");
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("userInfo", JSON.stringify(res));
            }
        }).catch((err)=>{
            setLoading(false);
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_12__/* .notifyError */ .cB)(err ? err?.response?.data?.message : err.message);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("userInfo")) {
            const user = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("userInfo"));
            setValue("name", user.name);
            setValue("email", user.email);
            setValue("address", user.address);
            setValue("phone", user.phone);
            setImageUrl(user.image);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_user_dashboard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Update-Profile",
        description: "This is edit profile page",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-screen-2xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:grid md:grid-cols-3 md:gap-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:col-span-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-4 sm:px-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl font-serif font-semibold mb-5",
                                children: "Update Profile"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-5 md:mt-0 md:col-span-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-white space-y-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            label: "Photo"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-1 flex items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_image_uploader_Uploader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                imageUrl: imageUrl,
                                                setImageUrl: setImageUrl
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-10 sm:mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "md:grid-cols-6 md:gap-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-5 md:mt-0 md:col-span-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lg:mt-6 mt-4 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-6 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Full Name",
                                                                    name: "name",
                                                                    type: "text",
                                                                    placeholder: "Full Name"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    errorName: errors.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Your Address",
                                                                    name: "address",
                                                                    type: "text",
                                                                    placeholder: "Your Address"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    errorName: errors.address
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Phone/Mobile",
                                                                    name: "phone",
                                                                    type: "tel",
                                                                    placeholder: "Your Mobile Number"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    errorName: errors.phone
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-6 sm:col-span-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_InputArea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    register: register,
                                                                    label: "Email Address",
                                                                    name: "email",
                                                                    type: "email",
                                                                    placeholder: "Your Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_form_Error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    errorName: errors.email
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-6 sm:col-span-3 mt-5 text-right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        disabled: loading,
                                                        type: "submit",
                                                        className: "md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto",
                                                        children: "Update Profile"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(UpdateProfile), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

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

/***/ 9700:
/***/ ((module) => {

module.exports = require("react-paginate");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,849,278,828,53,263,608,459,885,29], () => (__webpack_exec__(5707)));
module.exports = __webpack_exports__;

})();