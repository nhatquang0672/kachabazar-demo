(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{8681:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/recent-order",function(){return t(1459)}])},9927:function(e,s,t){"use strict";var a=t(5893),n=(t(7294),t(7484)),r=t.n(n);s.Z=function(e){var s=e.order;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{className:"px-5 py-3 leading-6 whitespace-nowrap",children:(0,a.jsx)("span",{className:"uppercase text-sm font-medium",children:s._id.substring(20,24)})}),(0,a.jsx)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:(0,a.jsx)("span",{className:"text-sm",children:r()(s.createdAt).format("MMMM D, YYYY")})}),(0,a.jsx)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:(0,a.jsx)("span",{className:"text-sm",children:s.paymentMethod})}),(0,a.jsxs)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm",children:["Delivered"===s.status&&(0,a.jsx)("span",{className:"text-emerald-500",children:s.status}),"Pending"===s.status&&(0,a.jsx)("span",{className:"text-orange-500",children:s.status}),"Cancel"===s.status&&(0,a.jsx)("span",{className:"text-red-500",children:s.status}),"Processing"===s.status&&(0,a.jsx)("span",{className:"text-indigo-500",children:s.status})]}),(0,a.jsx)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:(0,a.jsxs)("span",{className:"text-sm font-bold",children:["$",Math.round(null===s||void 0===s?void 0:s.total),".00"]})})]})}},4031:function(e,s,t){"use strict";var a=t(5893),n=(t(7294),t(5779)),r=t.n(n);s.Z=function(e){var s=e.loading;return(0,a.jsx)("div",{className:"text-lg text-center py-6",children:(0,a.jsx)(r(),{color:"#34D399",loading:s,height:30,width:3,radius:3,margin:2})})}},1459:function(e,s,t){"use strict";t.r(s);var a=t(5893),n=t(7294),r=t(155),i=t(1358),l=t.n(i),d=t(7053),c=t(4031),o=t(9927);s.default=function(e){var s,t,i=e.data,x=e.loading,m=e.error,p=(0,n.useContext)(d.l).handleChangePage,u=Math.ceil((null===i||void 0===i?void 0:i.totalDoc)/8);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"max-w-screen-2xl mx-auto",children:(0,a.jsx)("div",{className:"rounded-md font-serif",children:x?(0,a.jsx)(c.Z,{loading:x}):m?(0,a.jsx)("h2",{className:"text-xl text-center my-10 mx-auto w-11/12 text-red-400",children:m}):0===(null===i||void 0===i||null===(s=i.orders)||void 0===s?void 0:s.length)?(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("span",{className:"flex justify-center my-30 pt-16 text-emerald-500 font-semibold text-6xl",children:(0,a.jsx)(r.c77,{})}),(0,a.jsx)("h2",{className:"font-medium text-md my-4 text-gray-600",children:"You Have no order Yet!"})]}):(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("h3",{className:"text-lg font-serif font-medium mb-5",children:"Recent Order"}),(0,a.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,a.jsx)("div",{className:"align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md",children:[(0,a.jsxs)("table",{className:"table-auto min-w-full border border-gray-100 divide-y divide-gray-200",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{className:"bg-gray-100",children:[(0,a.jsx)("th",{scope:"col",className:"text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"ID"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"OrderTime"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Method"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Status"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Total"})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===i||void 0===i||null===(t=i.orders)||void 0===t?void 0:t.map((function(e){return(0,a.jsx)("tr",{children:(0,a.jsx)(o.Z,{order:e})},e._id)}))})]}),(0,a.jsx)("div",{className:"paginationOrder",children:(0,a.jsx)(l(),{breakLabel:"...",nextLabel:"Next",onPageChange:function(e){return p(e.selected+1)},pageRangeDisplayed:3,pageCount:u,previousLabel:"Previous",renderOnZeroPageCount:null,pageClassName:"page--item",pageLinkClassName:"page--link",previousClassName:"page-item",previousLinkClassName:"page-previous-link",nextClassName:"page-item",nextLinkClassName:"page-next-link",breakClassName:"page--item",breakLinkClassName:"page--link",containerClassName:"pagination",activeClassName:"activePagination"})})]})})})]})})})})}}},function(e){e.O(0,[260,230,421,774,888,179],(function(){return s=8681,e(e.s=s);var s}));var s=e.O();_N_E=s}]);