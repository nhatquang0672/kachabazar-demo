"use strict";
(() => {
var exports = {};
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ invoice_Invoice)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/component/order/OrderTable.js


const OrderTable = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        className: "bg-white divide-y divide-gray-100 text-serif text-sm",
        children: data?.cart?.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                        className: "px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left",
                        children: [
                            i + 1,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                        className: "px-6 py-1 whitespace-nowrap font-normal text-gray-500",
                        children: item.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                        className: "px-6 py-1 whitespace-nowrap font-bold text-center",
                        children: [
                            item.quantity,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                        className: "px-6 py-1 whitespace-nowrap font-bold text-center font-DejaVu",
                        children: [
                            "$",
                            item.price,
                            ".00",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                        className: "px-6 py-1 whitespace-nowrap text-right font-bold font-DejaVu k-grid text-red-500",
                        children: [
                            "$",
                            item.itemTotal,
                            ".00"
                        ]
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const order_OrderTable = (OrderTable);

;// CONCATENATED MODULE: ./src/component/invoice/Invoice.js





//internal import

const Invoice = ({ data , printRef  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: printRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-indigo-50 p-8 rounded-t-xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "font-bold font-serif text-2xl uppercase",
                                children: "Invoice"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:text-right text-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-lg font-serif font-semibold mt-4 lg:mt-0 md:mt-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    width: 110,
                                                    height: 40,
                                                    src: "/logo/logo-color.svg",
                                                    alt: "logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "Cecilia Chapman, 561-4535 Nulla LA, ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " United States 96522",
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex lg:flex-row md:flex-row flex-col justify-between pt-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-3 md:mb-0 lg:mb-0 flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-bold font-serif text-sm uppercase text-gray-600 block",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-sm text-gray-500 block",
                                        children: data.createdAt !== undefined && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: external_dayjs_default()(data?.createdAt).format("MMMM D, YYYY")
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-3 md:mb-0 lg:mb-0 flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-bold font-serif text-sm uppercase text-gray-600 block",
                                        children: "Invoice No."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-sm text-gray-500 block",
                                        children: [
                                            "#",
                                            data?.invoice
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col lg:text-right text-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-bold font-serif text-sm uppercase text-gray-600 block",
                                        children: "Invoice To."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-sm text-gray-500 block",
                                        children: [
                                            data?.name,
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            data?.address,
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            data?.city,
                                            ", ",
                                            data?.country,
                                            ", ",
                                            data?.zipCode
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "s",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-hidden lg:overflow-visible px-8 my-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "-my-2 overflow-x-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            className: "table-auto min-w-full border border-gray-100 divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "text-xs bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                scope: "col",
                                                className: "font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left",
                                                children: "Sr."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                scope: "col",
                                                className: "font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left",
                                                children: "Product Name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                scope: "col",
                                                className: "font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center",
                                                children: "Quantity"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                scope: "col",
                                                className: "font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center",
                                                children: "Item Price"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                scope: "col",
                                                className: "font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-right",
                                                children: "Amount"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(order_OrderTable, {
                                    data: data
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-b border-gray-100 p-10 bg-emerald-50",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex lg:flex-row md:flex-row flex-col justify-between pt-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mb-1 font-bold font-serif text-sm uppercase text-gray-600 block",
                                    children: "Payment Method"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-sm text-gray-500 font-semibold font-serif block",
                                    children: data?.paymentMethod
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mb-1 font-bold font-serif text-sm uppercase text-gray-600 block",
                                    children: "Shipping Cost"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-sm text-gray-500 font-semibold font-serif block",
                                    children: [
                                        "$",
                                        Math.round(data.shippingCost),
                                        ".00"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-3 md:mb-0 lg:mb-0 flex flex-col sm:flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mb-1 font-bold font-serif text-sm uppercase text-gray-600 block",
                                    children: "Discount"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-sm text-gray-500 font-semibold font-serif block",
                                    children: [
                                        "$",
                                        Math.round(data.discount),
                                        ".00"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col sm:flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mb-1 font-bold font-serif text-sm uppercase text-gray-600 block",
                                    children: "Total Amount"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-2xl font-serif font-bold text-red-500 block",
                                    children: [
                                        "$",
                                        Math.round(data.total),
                                        ".00"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const invoice_Invoice = (Invoice);


/***/ }),

/***/ 662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ invoice_InvoiceForDownload)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@react-pdf/renderer"
var renderer_ = __webpack_require__(3260);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./public/logo/logo-color.png
/* harmony default export */ const logo_color = ({"src":"/_next/static/media/logo-color.d0ef4d61.png","height":25,"width":87,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nGMU2NEw/xcr8xXt5DM3/yqzKTL8Y2Bg+M/wmYGRgZ/x//+PIAX//jExnlKrvFj4n5eJ7T8T41+ggp9AVWyMDAzcAHiuGTg3pg2HAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/component/invoice/InvoiceForDownload.js




renderer_.Font.register({
    family: "Open Sans",
    fonts: [
        {
            src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf"
        },
        {
            src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
            fontWeight: 600
        }, 
    ]
});
renderer_.Font.register({
    family: "DejaVu Sans",
    fonts: [
        {
            src: "https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf"
        },
        {
            src: "https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Bold.ttf"
        }, 
    ]
});
const styles = renderer_.StyleSheet.create({
    page: {
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 10,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 60,
        lineHeight: 1.5
    },
    table: {
        display: "table",
        width: "auto",
        borderColor: "#d1d5db",
        color: "#4b5563"
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "15%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: "#d1d5db"
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10
    },
    invoiceFirst: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 20,
        borderBottom: 0.5
    },
    invoiceSecond: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20
    },
    invoiceThird: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 50,
        paddingBottom: 20
    },
    logo: {
        width: 64,
        height: 20,
        bottom: 5
    },
    title: {
        color: "#111827",
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: 13
    },
    info: {
        fontSize: 10,
        color: "#374151"
    },
    amount: {
        fontSize: 10,
        color: "#ef4444"
    },
    status: {
        color: "#10b981"
    },
    quantity: {
        color: "#1f2937"
    },
    header: {
        color: "#111827",
        fontSize: 11,
        fontFamily: "Open Sans",
        fontWeight: "bold"
    },
    thanks: {
        color: "#22c55e"
    }
});
const InvoiceForDownload = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Document, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Page, {
                size: "A4",
                style: styles.page,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                        style: styles.invoiceFirst,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: {
                                            fontFamily: "Open Sans",
                                            fontWeight: "bold"
                                        },
                                        children: "INVOICE"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.info,
                                        children: [
                                            "Status :",
                                            " ",
                                            data.status === "Pending" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#eab308"
                                                },
                                                children: data.status
                                            }),
                                            data.status === "Processing" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#14b8a6"
                                                },
                                                children: data.status
                                            }),
                                            data.status === "Delivered" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#22c55e"
                                                },
                                                children: data.status
                                            }),
                                            data.status === "Cancel" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#f43f5e"
                                                },
                                                children: data.status
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Image, {
                                        style: styles.logo,
                                        src: logo_color
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.info,
                                        children: "Cecilia Chapman, 561-4535 Nulla LA,"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.info,
                                        children: " United States 96522"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                        style: styles.invoiceSecond,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.title,
                                        children: "DATE"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.info,
                                        children: data.createdAt !== undefined && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: external_dayjs_default()(data?.createdAt).format("MMMM D, YYYY")
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.title,
                                        children: "INVOICE NO"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.info,
                                        children: [
                                            "#",
                                            data.invoice
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.title,
                                        children: "INVOICE TO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.info,
                                        children: data.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.info,
                                        children: [
                                            " ",
                                            data.address.substring(0, 25)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.info,
                                        children: [
                                            data.city,
                                            ", ",
                                            data.country,
                                            ", ",
                                            data.zipCode
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                        style: styles.table,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                style: styles.tableRow,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                        style: styles.tableCol,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                            style: styles.tableCell,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: styles.header,
                                                children: "Sr."
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                        style: styles.tableCol,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                            style: styles.tableCell,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: styles.header,
                                                children: "Product Name"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                        style: styles.tableCol,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                            style: styles.tableCell,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: styles.header,
                                                children: "Quantity"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                        style: styles.tableCol,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                            style: styles.tableCell,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: styles.header,
                                                children: "Item Price"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                        style: styles.tableCol,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                            style: styles.tableCell,
                                            children: [
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: styles.header,
                                                    children: "Amount"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            data?.cart?.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                    style: styles.tableRow,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                            style: styles.tableCol,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                                style: styles.tableCell,
                                                children: [
                                                    i + 1,
                                                    " "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                            style: styles.tableCol,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                                style: styles.tableCell,
                                                children: [
                                                    item.title,
                                                    " "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                            style: styles.tableCol,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                                style: styles.tableCell,
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: styles.quantity,
                                                        children: item.quantity
                                                    }),
                                                    " "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                            style: styles.tableCol,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                                style: styles.tableCell,
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        style: styles.quantity,
                                                        children: [
                                                            "$",
                                                            item.price,
                                                            ".00"
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                                            style: styles.tableCol,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                                style: styles.tableCell,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        style: styles.amount,
                                                        children: [
                                                            "$",
                                                            item.itemTotal,
                                                            ".00"
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    ]
                                }, i))
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                        style: styles.invoiceThird,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.title,
                                        children: " Payment Method"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.info,
                                        children: [
                                            " ",
                                            data.paymentMethod,
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.title,
                                        children: "Shipping Cost"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.info,
                                        children: [
                                            "$",
                                            Math.round(data.shippingCost),
                                            ".00"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.title,
                                        children: "Discount"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.info,
                                        children: [
                                            " $",
                                            Math.round(data.discount),
                                            ".00"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.View, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.Text, {
                                        style: styles.title,
                                        children: "Total Amount"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                                        style: styles.amount,
                                        children: [
                                            "$",
                                            Math.round(data.total),
                                            ".00"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(renderer_.View, {
                        style: {
                            textAlign: "center",
                            fontSize: 12,
                            paddingBottom: 50,
                            paddingTop: 50
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(renderer_.Text, {
                            children: [
                                "Thank you ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    style: styles.thanks,
                                    children: [
                                        data.name,
                                        ","
                                    ]
                                }),
                                " Your order have been received !"
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const invoice_InvoiceForDownload = (InvoiceForDownload);


/***/ }),

/***/ 8477:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3260);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9608);
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3794);
/* harmony import */ var _component_invoice_Invoice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3890);
/* harmony import */ var _component_preloader_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4031);
/* harmony import */ var _services_OrderServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3768);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6896);
/* harmony import */ var _component_invoice_InvoiceForDownload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Layout__WEBPACK_IMPORTED_MODULE_7__, _services_OrderServices__WEBPACK_IMPORTED_MODULE_11__, _context_UserContext__WEBPACK_IMPORTED_MODULE_12__]);
([_layout_Layout__WEBPACK_IMPORTED_MODULE_7__, _services_OrderServices__WEBPACK_IMPORTED_MODULE_11__, _context_UserContext__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







//internal import







const Order = ({ params  })=>{
    const printRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const orderId = params.id;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { state: { userInfo  } ,  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_12__/* .UserContext */ .S);
    const { data , loading  } = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(()=>_services_OrderServices__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getOrderById */ .Z.getOrderById(orderId));
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!userInfo) {
            router.push("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        title: "Invoice",
        description: "order confirmation page",
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_preloader_Loading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            loading: loading
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-screen-2xl mx-auto py-10 px-3 sm:px-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-emerald-100 rounded-md mb-5 px-4 py-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Thank you",
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "font-bold text-emerald-600",
                                children: [
                                    data.name,
                                    ","
                                ]
                            }),
                            " ",
                            "Your order have been received !"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white rounded-lg shadow-sm",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_invoice_Invoice__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            data: data,
                            printRef: printRef
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-white p-8 rounded-b-xl",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_5__.PDFDownloadLink, {
                                        document: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_invoice_InvoiceForDownload__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            data: data
                                        }),
                                        fileName: "Invoice",
                                        children: ({ blob , url , loading , error  })=>loading ? "Loading..." : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md",
                                                children: [
                                                    "Download Invoice",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ml-2 text-base",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoCloudDownloadOutline, {})
                                                    })
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_to_print__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        trigger: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md",
                                                children: [
                                                    "Print Invoice",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ml-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoPrintOutline, {})
                                                    })
                                                ]
                                            }),
                                        content: ()=>printRef.current,
                                        documentTitle: "Invoice"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
// export const getServerSideProps = ({ params }) => {
//   return {
//     props: { params },
//   };
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(Order), {
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

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 3260:
/***/ ((module) => {

module.exports = require("@react-pdf/renderer");

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

/***/ 53:
/***/ ((module) => {

module.exports = require("react-to-print");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,849,278,828,53,263,608], () => (__webpack_exec__(8477)));
module.exports = __webpack_exports__;

})();