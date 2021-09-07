(this["webpackJsonprecipe-venture"]=this["webpackJsonprecipe-venture"]||[]).push([[4],{32:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(35);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(i){c=!0,s=i}finally{try{n||null==a.return||a.return()}finally{if(c)throw s}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},33:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var n=r(0),c=r(32),s=r(13),o=r(1),a=r(2);function i(e){var t=e.links,r=Object(o.g)();return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:"flex justify-between items-center space-x-7",children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:e.href,className:"".concat(e.href===r.pathname?"text-purple-600 font-semibold dark:text-purple-600":"text-gray-900 dark:text-white"," text-base hover:text-purple-500 dark:hover:text-purple-500"),title:e.title,children:e.name})},e.id)}))})})}function l(){return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 8h16M4 16h16"})})}var u=r(7);function d(){return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}function j(e){var t=e.links,r=e.mobileMenu,n=e.setMobileMenu,c=Object(o.g)();return Object(a.jsxs)("div",{className:"z-50",children:[Object(a.jsx)("div",{className:"absolute w-full h-screen top-0 left-0 bg-black opacity-30 dark:bg-black",onClick:function(){return n(!r)}}),Object(a.jsxs)("div",{className:"absolute py-8 top-0 right-0 h-screen w-80 overflow-hidden bg-white dark:bg-gray-700 shadow-2xl",children:[Object(a.jsxs)("div",{className:"flex items-center justify-between px-5 mb-10",children:[Object(a.jsx)("div",{className:"",children:Object(a.jsx)(s.b,{to:u.d,className:"w-40 h-16 block text-gray-900 text-xl dark:text-white rounded focus:outline-none",title:"Recipe Venture",children:Object(a.jsx)("span",{className:"w-full h-full block",children:Object(a.jsx)("img",{src:"logo.png",alt:"logo",className:"w-full h-full"})})})}),Object(a.jsx)("button",{className:"text-gray-900 p-1 cursor-pointer dark:text-gray-200 hover:bg-gray-100 hover:text-gray-600 dark:hover:text-gray-300 dark:hover:bg-gray-600 rounded-full",onClick:function(){return n(!r)},title:"Close",children:Object(a.jsx)(d,{})})]}),Object(a.jsx)("div",{className:"px-5 mb-10",children:Object(a.jsx)("p",{className:"text-base text-gray-800 dark:text-gray-300",children:"Your number one source for all types of recipes. We're dedicated to giving you the varity of best categories."})}),Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:"",children:t.map((function(e){return Object(a.jsx)("li",{className:"",children:Object(a.jsx)(s.b,{to:e.href,className:"".concat(e.href===c.pathname?"text-purple-500 font-semibold dark:text-purple-500":"text-gray-800 dark:text-white"," block text-base px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-purple-500"),title:e.title,children:e.name})},e.id)}))})})]})]})}var b=[{id:1,name:"Home",href:u.d,title:"Home"},{id:2,name:"Recipes",href:u.f,title:"Recipes"},{id:3,name:"Cuisines",href:u.c,title:"Cuisines"},{id:4,name:"About Us",href:u.a,title:"About Us"}];function f(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),r=t[0],o=t[1],d=Object(n.useState)(!1),f=Object(c.a)(d,2),h=f[0],x=f[1];return Object(n.useEffect)((function(){var e=function(e){o(e.target.documentElement.scrollTop)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[r]),Object(n.useEffect)((function(){h?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}),[h]),Object(a.jsx)("header",{className:"sticky inset-x-0 top-0 bg-white dark:bg-gray-800 h-20 z-50 ".concat(r>1?"border-b border-gray-300 dark:border-gray-700 shadow-sm backdrop-filter backdrop-blur-sm backdrop-saturate-150 bg-opacity-80 dark:bg-opacity-80":""),children:Object(a.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:Object(a.jsx)("div",{className:"container mx-auto px-4 opacity-100",children:Object(a.jsxs)("div",{className:"flex justify-between items-center",children:[Object(a.jsx)("div",{className:"",children:Object(a.jsx)(s.b,{to:u.d,className:"w-40 h-16 block text-gray-900 text-xl dark:text-white rounded focus:outline-none",title:"Recipe Venture",children:Object(a.jsx)("span",{className:"w-full h-full block",children:Object(a.jsx)("img",{src:"logo.png",alt:"logo",className:"w-full h-full"})})})}),Object(a.jsxs)("div",{className:"flex justify-between items-center",children:[Object(a.jsx)("div",{className:"hidden sm:block",children:Object(a.jsx)(i,{links:b})}),Object(a.jsxs)("div",{className:"block sm:hidden",children:[h&&Object(a.jsx)("div",{children:Object(a.jsx)(j,{links:b,mobileMenu:h,setMobileMenu:x})}),Object(a.jsx)("button",{className:"h-8 w-8 text-lg cursor-pointer text-gray-900 rounded dark:text-white focus:outline-none focus:ring-2 focus:ring-offest-white dark:focus:ring-offset-gray-800 focus:ring-gray-900 dark:focus:ring-white",onClick:function(){return x(!h)},children:Object(a.jsx)(l,{})})]})]})]})})})})}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=Object.assign({},e);return Object(a.jsx)("svg",g(g({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{},{children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})}))}function p(e){var t=Object.assign({},e);return Object(a.jsx)("svg",g(g({viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision"},t),{},{children:Object(a.jsx)("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}))}function O(e){var t=Object.assign({},e);return Object(a.jsxs)("svg",g(g({viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision"},t),{},{children:[Object(a.jsx)("circle",{cx:"12",cy:"12",r:"5"}),Object(a.jsx)("path",{d:"M12 1v2"}),Object(a.jsx)("path",{d:"M12 21v2"}),Object(a.jsx)("path",{d:"M4.22 4.22l1.42 1.42"}),Object(a.jsx)("path",{d:"M18.36 18.36l1.42 1.42"}),Object(a.jsx)("path",{d:"M1 12h2"}),Object(a.jsx)("path",{d:"M21 12h2"}),Object(a.jsx)("path",{d:"M4.22 19.78l1.42-1.42"}),Object(a.jsx)("path",{d:"M18.36 5.64l1.42-1.42"})]}))}function v(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),r=t[0],s=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("theme")||"light";s(e),document.documentElement.className=e}),[]),Object(n.useEffect)((function(){document.documentElement.className=r,localStorage.setItem("theme",r),document.documentElement.style="dark"===r?"color-scheme: dark":"color-scheme: light"}),[r]);return Object(a.jsxs)("div",{className:"w-28 relative flex items-center text-sm text-gray-900 dark:text-white ",style:{direction:"rtl"},children:[Object(a.jsx)("span",{className:"h-4 w-4 absolute top-1/2 left-2 transform -translate-y-1/2",children:"light"===r?Object(a.jsx)(O,{}):Object(a.jsx)(p,{})}),Object(a.jsxs)("select",{className:"appearance-none w-full py-1 px-8 text-center bg-white cursor-pointer dark:bg-gray-700  font-normal border-2 border-gray-300 dark:border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:ring-offset-gray-200  dark:focus:ring-offset-gray-800",onChange:function(e){s(e.target.value)},value:r,children:[Object(a.jsx)("option",{value:"light",children:"Light"}),Object(a.jsx)("option",{value:"dark",children:"Dark"})]}),Object(a.jsx)("span",{className:"h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2",children:Object(a.jsx)(m,{})})]})}function y(){return Object(a.jsx)("footer",{className:"w-full py-16 bg-gray-200 dark:bg-gray-900",children:Object(a.jsx)("div",{className:"container mx-auto px-4",children:Object(a.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(a.jsx)("div",{className:"max-w-2xl mx-auto w-64 sm:w-96 grid gap-y-2 grid-cols-2 sm:grid-cols-4 text-center mb-6",children:b.map((function(e,t){return Object(a.jsx)(s.b,{to:e.href,className:"inline-block text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 \r focus:ring-offset-gray-200 focus:ring-gray-700 dark:focus:ring-offset-gray-800 rounded dark:focus:ring-gray-300",title:e.title,children:e.name},t)}))}),Object(a.jsx)("div",{className:"mb-6",children:Object(a.jsx)(s.b,{to:u.d,className:"w-40 h-16 block text-gray-900 text-xl dark:text-white rounded focus:outline-none",title:"Recipe Venture",children:Object(a.jsx)("span",{className:"w-full h-full block",children:Object(a.jsx)("img",{src:"logo.png",alt:"logo",className:"w-full h-full"})})})}),Object(a.jsx)("div",{children:Object(a.jsx)(v,{})})]})})})}function w(){return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})}function k(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),r=t[0],s=t[1];Object(n.useEffect)((function(){var e=function(e){s(e.target.documentElement.scrollTop)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[r]);return Object(a.jsxs)("button",{className:"fixed h-10 w-10 bg-indigo-600 z-50 text-white text-base bottom-5 right-4 rounded-full group cursor-pointer shadow-md transform ".concat(r>250?"opacity-100 translate-y-0":"opacity-0 translate-y-full"," transition-all ease-in-out overflow-hidden"),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(a.jsx)("span",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-full group-hover:opacity-0 transition-all",children:Object(a.jsx)(w,{})}),Object(a.jsx)("span",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100 transition-all",children:Object(a.jsx)(w,{})})]})}function N(e){var t=e.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{}),Object(a.jsx)("main",{className:"w-full",children:t}),Object(a.jsx)(k,{})]}),Object(a.jsx)(y,{})]})}},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(0);var n=r(2);function c(){return Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})}},35:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(36);function c(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},36:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},42:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));r(0);var n=r(13),c=r(33),s=r(7),o=r(34),a=r(2);function i(){return Object(a.jsx)(c.a,{children:Object(a.jsx)("section",{className:"py-28",style:{height:"80vh"},children:Object(a.jsx)("div",{className:"container mx-auto px-4",children:Object(a.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(a.jsx)("h2",{className:"text-8xl md:text-8xl text-gray-800 dark:text-white mb-4",children:"404"}),Object(a.jsx)("p",{className:"text-2xl md:text-3xl text-gray-500 dark:text-gary-300 mb-4",children:"The page you are looking for is not found!"}),Object(a.jsxs)(n.b,{to:s.d,className:"inline-flex items-center justify-between text-white text-base px-3 py-1 bg-purple-500 hover:bg-purple-400 dark:hover:bg-purple-400  rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-700 focus:ring-purple-500",children:["Return Home",Object(a.jsx)("span",{className:"ml-1",children:Object(a.jsx)(o.a,{})})]})]})})})})}}}]);
//# sourceMappingURL=4.2c475c15.chunk.js.map