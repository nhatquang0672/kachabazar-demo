"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{4305:function(e,t,n){var s=n(5893);n(7294);t.Z=function(e){var t=e.product,n=e.slug;return(0,s.jsx)(s.Fragment,{children:0!==t.discount&&(0,s.jsxs)("span",{className:n?"text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4":" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4",children:[t.discount.toFixed(0),"% Off"]})})}},1589:function(e,t,n){var s=n(5893);n(7294);t.Z=function(e){var t=e.product,n=e.card;return(0,s.jsxs)("div",{className:"font-serif product-price font-bold",children:[t.discount?(0,s.jsxs)("span",{className:n?"inline-block text-lg font-semibold text-gray-800":"inline-block text-2xl",children:["$",t.price]}):(0,s.jsxs)("span",{className:n?"inline-block text-lg font-semibold text-gray-800":"inline-block text-2xl",children:["$",t.originalPrice]}),t.discount?(0,s.jsxs)("del",{className:n?"sm:text-sm font-normal text-base text-gray-400 ml-1":"text-lg font-normal text-gray-400 ml-1",children:["$",t.originalPrice]}):null]})}},912:function(e,t,n){var s=n(5893);n(7294);t.Z=function(e){var t=e.product;return(0,s.jsx)(s.Fragment,{children:t.quantity<=0?(0,s.jsx)("span",{className:"bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2",children:"Stock Out"}):(0,s.jsx)("span",{className:"bg-emerald-100 text-emerald-600 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold mt-2 font-serif",children:"In Stock"})})}},9088:function(e,t,n){var s=n(5893);n(7294);t.Z=function(e){var t=e.product;return(0,s.jsx)(s.Fragment,{children:0!==t.tag.length&&(0,s.jsx)("div",{className:"flex flex-row",children:JSON.parse(null===t||void 0===t?void 0:t.tag).map((function(e,t){return(0,s.jsx)("span",{className:"bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold font-serif mt-2",children:e},t+1)}))})})}},3742:function(e,t,n){n.d(t,{Z:function(){return N}});var s=n(6042),r=n(9396),i=n(5893),l=n(7294),a=n(5675),d=n.n(a),o=n(870),c=n(155),x=n(1589),u=n(4305),m=(n(1664),n(1163)),f=n(6893),h=n(9088),p=n(912),j=n(5090),b=n(6364),g=n(7053),y=function(e){var t=e.modalOpen,n=e.setModalOpen,s=e.product,r=(0,m.useRouter)(),a=(0,l.useContext)(g.l),o=a.setIsLoading,c=a.isLoading,u=(0,j.Z)(),y=u.handleAddItem,v=u.setItem,N=u.item,w=function(e){n(!1),r.push("/product/".concat(e)),o(!c)};return(0,i.jsx)(b.Z,{modalOpen:t,setModalOpen:n,children:(0,i.jsx)("div",{className:"inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden",children:[(0,i.jsx)("div",{onClick:function(){return w(s.slug)},className:"flex-shrink-0 flex items-center justify-center h-auto cursor-pointer",children:(0,i.jsx)(d(),{src:s.image,width:420,height:420,alt:s.title})}),(0,i.jsxs)("div",{className:"w-full flex flex-col p-5 md:p-8 text-left",children:[(0,i.jsxs)("div",{className:"mb-2 md:mb-2.5 block -mt-1.5",children:[(0,i.jsx)("h1",{className:"text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif hover:text-black cursor-pointer",children:s.title}),(0,i.jsx)(p.Z,{product:s})]}),(0,i.jsx)("p",{className:"text-sm leading-6 text-gray-500 md:leading-6",children:s.description}),(0,i.jsx)("div",{className:"flex items-center mt-4",children:(0,i.jsx)(x.Z,{product:s})}),(0,i.jsx)("div",{className:"flex items-center mt-4",children:(0,i.jsxs)("div",{className:"flex items-center justify-between space-s-3 sm:space-s-4 w-full",children:[(0,i.jsxs)("div",{className:"group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300",children:[(0,i.jsx)("button",{onClick:function(){return v(N-1)},disabled:1===N,className:"flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500",children:(0,i.jsx)("span",{className:"text-dark text-base",children:(0,i.jsx)(f.ego,{})})}),(0,i.jsx)("p",{className:"font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8 md:w-20 xl:w-24",children:N}),(0,i.jsx)("button",{onClick:function(){return v(N+1)},disabled:s.quantity<N||s.quantity===N,className:"flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500",children:(0,i.jsx)("span",{className:"text-dark text-base",children:(0,i.jsx)(f.OvN,{})})})]}),(0,i.jsx)("button",{onClick:function(){return y(s)},disabled:s.quantity<1,className:"text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12",children:"Add To Cart"})]})}),(0,i.jsx)("div",{className:"flex flex-col mt-4",children:(0,i.jsxs)("div",{className:"flex items-center justify-between space-s-3 sm:space-s-4 w-full",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("span",{className:"font-serif font-semibold py-1 text-sm d-block",children:[(0,i.jsx)("span",{className:"text-gray-700",children:"Category:"})," ",(0,i.jsx)("span",{className:"text-gray-500",children:s.children})]}),(0,i.jsx)(h.Z,{product:s})]}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:function(){return w(s.slug)},className:"font-sans font-medium text-sm text-orange-500",children:"More Info"})})]})})]})]})})})},v=l.memo(y),N=function(e){var t=e.product,n=(0,l.useState)(!1),a=n[0],m=n[1],f=(0,o.jD)(),h=f.items,p=f.addItem,j=f.updateItemQuantity,b=f.inCart;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{modalOpen:a,setModalOpen:m,product:t}),(0,i.jsxs)("div",{className:"group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative",children:[(0,i.jsxs)("div",{onClick:function(){return m(!a)},className:"relative flex justify-center w-full cursor-pointer",children:[t.quantity<=0&&(0,i.jsx)("span",{className:"absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4",children:"Stock Out"}),(0,i.jsx)(u.Z,{product:t}),(0,i.jsx)(d(),{src:t.image,width:160,height:160,alt:t.title,className:"object-cover transition duration-150 ease-linear transform group-hover:scale-105"})]}),(0,i.jsxs)("div",{className:"w-full px-3 lg:px-4 pb-4 overflow-hidden",children:[(0,i.jsxs)("div",{className:"relative mb-1",children:[(0,i.jsx)("span",{className:"text-gray-400 font-medium text-xs d-block mb-1",children:t.unit}),(0,i.jsx)("h2",{className:"text-heading truncate mb-0 block text-sm font-medium text-gray-600",children:(0,i.jsx)("span",{className:"line-clamp-2",children:t.title})})]}),(0,i.jsxs)("div",{className:"flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl",children:[(0,i.jsx)(x.Z,{product:t,card:!0}),b(t._id)?(0,i.jsxs)("div",{children:[h.map((function(e){return e.id===t._id&&(0,i.jsxs)("div",{className:"h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded",children:[(0,i.jsx)("button",{onClick:function(){return j(e.id,e.quantity-1)},children:(0,i.jsx)("span",{className:"text-dark text-base",children:(0,i.jsx)(c._kz,{})})}),(0,i.jsx)("p",{className:"text-sm text-dark px-1 font-serif font-semibold",children:e.quantity}),(0,i.jsx)("button",{onClick:function(){return j(e.id,e.quantity+1)},disabled:t.quantity===e.quantity,children:(0,i.jsx)("span",{className:"text-dark text-base",children:(0,i.jsx)(c.xcL,{})})})]},e.id)}))," "]}):(0,i.jsxs)("button",{onClick:function(){return function(e){var t=(0,r.Z)((0,s.Z)({},e),{id:e._id});p(t)}(t)},disabled:t.quantity<1,"aria-label":"cart",className:"h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all",children:[" ",(0,i.jsx)("span",{className:"text-xl",children:(0,i.jsx)(c.Crz,{})})," "]})]})]})]})]})}}}]);