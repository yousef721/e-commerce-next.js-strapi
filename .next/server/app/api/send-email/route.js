"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_ecommerce_next_js_strapi_tailwind_frontEnd_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-email/route.js */ \"(rsc)/./app/api/send-email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\api\\\\send-email\\\\route.js\",\n    nextConfigOutput,\n    userland: E_ecommerce_next_js_strapi_tailwind_frontEnd_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDZWNvbW1lcmNlLW5leHQuanMtc3RyYXBpJTVDdGFpbHdpbmQtZnJvbnRFbmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNlY29tbWVyY2UtbmV4dC5qcy1zdHJhcGklNUN0YWlsd2luZC1mcm9udEVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMrQjtBQUM1RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8/YTc5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxlY29tbWVyY2UtbmV4dC5qcy1zdHJhcGlcXFxcdGFpbHdpbmQtZnJvbnRFbmRcXFxcYXBwXFxcXGFwaVxcXFxzZW5kLWVtYWlsXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZC1lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXGVjb21tZXJjZS1uZXh0LmpzLXN0cmFwaVxcXFx0YWlsd2luZC1mcm9udEVuZFxcXFxhcHBcXFxcYXBpXFxcXHNlbmQtZW1haWxcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/_components/email-template.jsx":
/*!********************************************!*\
  !*** ./app/_components/email-template.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailTemplate: () => (/* binding */ EmailTemplate)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/html/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/head/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/preview/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/body/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/container/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/img/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/text/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/section/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/button/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/./node_modules/@react-email/hr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst EmailTemplate = ({ body })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_3__.Head, {}, void 0, false, {\n                fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_4__.Preview, {\n                children: \"The Ecommerce Platform For Yout Digital Products search now for your future\"\n            }, void 0, false, {\n                fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                lineNumber: 21,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_5__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    style: container,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                            src: \"https://res.cloudinary.com/dltufnocd/image/upload/v1710791095/Biohazard_04e4d02ab1.png\",\n                            width: \"420\",\n                            height: \"300\",\n                            alt: \"Koala\",\n                            style: logo\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: paragraph,\n                            children: [\n                                \"Hi \",\n                                body.fullName,\n                                \",\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: paragraph,\n                            children: \"Thank you purchasing on Sleem Tech Ecommerce. Click on Below download button to download the all digital content\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_9__.Section, {\n                            style: btnContainer,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                pX: 12,\n                                pY: 12,\n                                style: {\n                                    padding: 5,\n                                    paddingLeft: 10,\n                                    paddingRight: 10\n                                },\n                                href: \"https://res.cloudinary.com/ddfzikgiz/image/upload/v1704313420/Nextpreview_564bd5e6fd.png\",\n                                children: \"Download\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: paragraph,\n                            children: [\n                                \"Best,\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 6\n                                }, undefined),\n                                \"The Sleem Tech team\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Hr, {\n                            style: hr\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            style: footer,\n                            children: \"Subscribe to Ali Sleem\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 4\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n                lineNumber: 24,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\ecommerce-next.js-strapi\\\\tailwind-frontEnd\\\\app\\\\_components\\\\email-template.jsx\",\n        lineNumber: 19,\n        columnNumber: 2\n    }, undefined);\nconst main = {\n    backgroundColor: \"#ffffff\",\n    fontFamily: '-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif'\n};\nconst container = {\n    margin: \"0 auto\",\n    padding: \"20px 0 48px\"\n};\nconst logo = {\n    margin: \"0 auto\"\n};\nconst paragraph = {\n    fontSize: \"16px\",\n    lineHeight: \"26px\"\n};\nconst btnContainer = {\n    textAlign: \"center\"\n};\nconst button = {\n    backgroundColor: \"#5F51E8\",\n    borderRadius: \"3px\",\n    color: \"#fff\",\n    fontSize: \"16px\",\n    textDecoration: \"none\",\n    textAlign: \"center\",\n    display: \"block\"\n};\nconst hr = {\n    borderColor: \"#cccccc\",\n    margin: \"20px 0\"\n};\nconst footer = {\n    color: \"#8898aa\",\n    fontSize: \"12px\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvX2NvbXBvbmVudHMvZW1haWwtdGVtcGxhdGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaUM7QUFDRjtBQUd4QixNQUFNVyxnQkFBZ0IsQ0FBQyxFQUM3QkMsSUFBSSxFQUNKLGlCQUNBLDhEQUFDUCx5REFBSUE7OzBCQUNKLDhEQUFDRix5REFBSUE7Ozs7OzBCQUNMLDhEQUFDSSw0REFBT0E7MEJBQUM7Ozs7OzswQkFHVCw4REFBQ1AseURBQUlBO2dCQUFDYSxPQUFPQzswQkFDWiw0RUFBQ1osOERBQVNBO29CQUFDVyxPQUFPRTs7c0NBQ2pCLDhEQUFDVCx3REFBR0E7NEJBQ0hVLEtBQUk7NEJBQ0pDLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLEtBQUk7NEJBQ0pOLE9BQU9POzs7Ozs7c0NBRVIsOERBQUNYLHlEQUFJQTs0QkFBQ0ksT0FBT1E7O2dDQUFXO2dDQUFJVCxLQUFLVSxRQUFRO2dDQUFDOzs7Ozs7O3NDQUMxQyw4REFBQ2IseURBQUlBOzRCQUFDSSxPQUFPUTtzQ0FBVzs7Ozs7O3NDQUd4Qiw4REFBQ2IsNERBQU9BOzRCQUFDSyxPQUFPVTtzQ0FDZiw0RUFBQ3RCLDREQUFNQTtnQ0FBQ3VCLElBQUk7Z0NBQUlDLElBQUk7Z0NBQ25CWixPQUFPO29DQUNOYSxTQUFTO29DQUNUQyxhQUFhO29DQUNiQyxjQUFjO2dDQUdmO2dDQUNBQyxNQUFLOzBDQUEyRjs7Ozs7Ozs7Ozs7c0NBSWxHLDhEQUFDcEIseURBQUlBOzRCQUFDSSxPQUFPUTs7Z0NBQVc7OENBRXZCLDhEQUFDUzs7Ozs7Z0NBQUs7Ozs7Ozs7c0NBR1AsOERBQUMxQix3REFBRUE7NEJBQUNTLE9BQU9rQjs7Ozs7O3NDQUNYLDhEQUFDdEIseURBQUlBOzRCQUFDSSxPQUFPbUI7c0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBSXZCO0FBR0YsTUFBTWxCLE9BQU87SUFDWm1CLGlCQUFpQjtJQUNqQkMsWUFDQztBQUNGO0FBRUEsTUFBTW5CLFlBQVk7SUFDakJvQixRQUFRO0lBQ1JULFNBQVM7QUFDVjtBQUVBLE1BQU1OLE9BQU87SUFDWmUsUUFBUTtBQUNUO0FBRUEsTUFBTWQsWUFBWTtJQUNqQmUsVUFBVTtJQUNWQyxZQUFZO0FBQ2I7QUFFQSxNQUFNZCxlQUFlO0lBQ3BCZSxXQUFXO0FBQ1o7QUFFQSxNQUFNQyxTQUFTO0lBQ2ROLGlCQUFpQjtJQUNqQk8sY0FBYztJQUNkQyxPQUFPO0lBQ1BMLFVBQVU7SUFDVk0sZ0JBQWdCO0lBQ2hCSixXQUFXO0lBQ1hLLFNBQVM7QUFDVjtBQUVBLE1BQU1aLEtBQUs7SUFDVmEsYUFBYTtJQUNiVCxRQUFRO0FBQ1Q7QUFFQSxNQUFNSCxTQUFTO0lBQ2RTLE9BQU87SUFDUEwsVUFBVTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vYXBwL19jb21wb25lbnRzL2VtYWlsLXRlbXBsYXRlLmpzeD81ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEJvZHksXG5cdEJ1dHRvbixcblx0Q29udGFpbmVyLFxuXHRIZWFkLFxuXHRIcixcblx0SHRtbCxcblx0SW1nLFxuXHRQcmV2aWV3LFxuXHRTZWN0aW9uLFxuXHRUZXh0LFxufSBmcm9tICdAcmVhY3QtZW1haWwvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IEVtYWlsVGVtcGxhdGUgPSAoe1xuXHRib2R5LFxufSkgPT4gKFxuXHQ8SHRtbD5cblx0XHQ8SGVhZCAvPlxuXHRcdDxQcmV2aWV3PlxuXHRcdFx0VGhlIEVjb21tZXJjZSBQbGF0Zm9ybSBGb3IgWW91dCBEaWdpdGFsIFByb2R1Y3RzIHNlYXJjaCBub3cgZm9yIHlvdXIgZnV0dXJlXG5cdFx0PC9QcmV2aWV3PlxuXHRcdDxCb2R5IHN0eWxlPXttYWlufT5cblx0XHRcdDxDb250YWluZXIgc3R5bGU9e2NvbnRhaW5lcn0+XG5cdFx0XHRcdDxJbWdcblx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RsdHVmbm9jZC9pbWFnZS91cGxvYWQvdjE3MTA3OTEwOTUvQmlvaGF6YXJkXzA0ZTRkMDJhYjEucG5nJ1xuXHRcdFx0XHRcdHdpZHRoPVwiNDIwXCJcblx0XHRcdFx0XHRoZWlnaHQ9XCIzMDBcIlxuXHRcdFx0XHRcdGFsdD1cIktvYWxhXCJcblx0XHRcdFx0XHRzdHlsZT17bG9nb31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRleHQgc3R5bGU9e3BhcmFncmFwaH0+SGkge2JvZHkuZnVsbE5hbWV9LDwvVGV4dD5cblx0XHRcdFx0PFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XG5cdFx0XHRcdFx0VGhhbmsgeW91IHB1cmNoYXNpbmcgb24gU2xlZW0gVGVjaCBFY29tbWVyY2UuIENsaWNrIG9uIEJlbG93IGRvd25sb2FkIGJ1dHRvbiB0byBkb3dubG9hZCB0aGUgYWxsIGRpZ2l0YWwgY29udGVudFxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDxTZWN0aW9uIHN0eWxlPXtidG5Db250YWluZXJ9PlxuXHRcdFx0XHRcdDxCdXR0b24gcFg9ezEyfSBwWT17MTJ9XG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1LFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nTGVmdDogMTAsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdSaWdodDogMTAsXG5cblxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZGZ6aWtnaXovaW1hZ2UvdXBsb2FkL3YxNzA0MzEzNDIwL05leHRwcmV2aWV3XzU2NGJkNWU2ZmQucG5nXCI+XG5cdFx0XHRcdFx0XHREb3dubG9hZFxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L1NlY3Rpb24+XG5cdFx0XHRcdDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxuXHRcdFx0XHRcdEJlc3QsXG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0VGhlIFNsZWVtIFRlY2ggdGVhbVxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdDxIciBzdHlsZT17aHJ9IC8+XG5cdFx0XHRcdDxUZXh0IHN0eWxlPXtmb290ZXJ9PlN1YnNjcmliZSB0byBBbGkgU2xlZW08L1RleHQ+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8L0JvZHk+XG5cdDwvSHRtbD5cbik7XG5cblxuY29uc3QgbWFpbiA9IHtcblx0YmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG5cdGZvbnRGYW1pbHk6XG5cdFx0Jy1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZicsXG59O1xuXG5jb25zdCBjb250YWluZXIgPSB7XG5cdG1hcmdpbjogJzAgYXV0bycsXG5cdHBhZGRpbmc6ICcyMHB4IDAgNDhweCcsXG59O1xuXG5jb25zdCBsb2dvID0ge1xuXHRtYXJnaW46ICcwIGF1dG8nLFxufTtcblxuY29uc3QgcGFyYWdyYXBoID0ge1xuXHRmb250U2l6ZTogJzE2cHgnLFxuXHRsaW5lSGVpZ2h0OiAnMjZweCcsXG59O1xuXG5jb25zdCBidG5Db250YWluZXIgPSB7XG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG59O1xuXG5jb25zdCBidXR0b24gPSB7XG5cdGJhY2tncm91bmRDb2xvcjogJyM1RjUxRTgnLFxuXHRib3JkZXJSYWRpdXM6ICczcHgnLFxuXHRjb2xvcjogJyNmZmYnLFxuXHRmb250U2l6ZTogJzE2cHgnLFxuXHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRkaXNwbGF5OiAnYmxvY2snLFxufTtcblxuY29uc3QgaHIgPSB7XG5cdGJvcmRlckNvbG9yOiAnI2NjY2NjYycsXG5cdG1hcmdpbjogJzIwcHggMCcsXG59O1xuXG5jb25zdCBmb290ZXIgPSB7XG5cdGNvbG9yOiAnIzg4OThhYScsXG5cdGZvbnRTaXplOiAnMTJweCcsXG59O1xuIl0sIm5hbWVzIjpbIkJvZHkiLCJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkIiwiSHIiLCJIdG1sIiwiSW1nIiwiUHJldmlldyIsIlNlY3Rpb24iLCJUZXh0IiwiUmVhY3QiLCJFbWFpbFRlbXBsYXRlIiwiYm9keSIsInN0eWxlIiwibWFpbiIsImNvbnRhaW5lciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibG9nbyIsInBhcmFncmFwaCIsImZ1bGxOYW1lIiwiYnRuQ29udGFpbmVyIiwicFgiLCJwWSIsInBhZGRpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImhyZWYiLCJiciIsImhyIiwiZm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJkaXNwbGF5IiwiYm9yZGVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/_components/email-template.jsx\n");

/***/ }),

/***/ "(rsc)/./app/api/send-email/route.js":
/*!*************************************!*\
  !*** ./app/api/send-email/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* harmony import */ var _components_email_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_components/email-template */ \"(rsc)/./app/_components/email-template.jsx\");\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nasync function POST(req) {\n    const body = await req.json();\n    try {\n        const data = await resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: [\n                body.email\n            ],\n            subject: \"Orders From Sleem Tech\",\n            react: (0,_components_email_template__WEBPACK_IMPORTED_MODULE_1__.EmailTemplate)({\n                body\n            })\n        });\n        return Response.json(data);\n    } catch (error) {\n        return Response.json({\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2lDO0FBRWpFLE1BQU1FLFNBQVMsSUFBSUYsMENBQU1BLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUU3QyxlQUFlQyxLQUFLQyxHQUFHO0lBQzVCLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUUzQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNUixPQUFPUyxNQUFNLENBQUNDLElBQUksQ0FBQztZQUNwQ0MsTUFBTTtZQUNOQyxJQUFJO2dCQUFDTixLQUFLTyxLQUFLO2FBQUM7WUFDaEJDLFNBQVM7WUFDVEMsT0FBT2hCLHlFQUFhQSxDQUFDO2dCQUFFTztZQUFLO1FBQzlCO1FBRUEsT0FBT1UsU0FBU1QsSUFBSSxDQUFDQztJQUN2QixFQUFFLE9BQU9TLE9BQU87UUFDZCxPQUFPRCxTQUFTVCxJQUFJLENBQUM7WUFBRVU7UUFBTTtJQUMvQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLmpzPzNlZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSBcInJlc2VuZFwiO1xuaW1wb3J0IHsgRW1haWxUZW1wbGF0ZSB9IGZyb20gXCIuLi8uLi9fY29tcG9uZW50cy9lbWFpbC10ZW1wbGF0ZVwiO1xuXG5jb25zdCByZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICBmcm9tOiBcIm9uYm9hcmRpbmdAcmVzZW5kLmRldlwiLFxuICAgICAgdG86IFtib2R5LmVtYWlsXSxcbiAgICAgIHN1YmplY3Q6IFwiT3JkZXJzIEZyb20gU2xlZW0gVGVjaFwiLFxuICAgICAgcmVhY3Q6IEVtYWlsVGVtcGxhdGUoeyBib2R5IH0pLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvciB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlc2VuZCIsIkVtYWlsVGVtcGxhdGUiLCJyZXNlbmQiLCJwcm9jZXNzIiwiZW52IiwiUkVTRU5EX0FQSV9LRVkiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJkYXRhIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsImVtYWlsIiwic3ViamVjdCIsInJlYWN0IiwiUmVzcG9uc2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-email/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@react-email","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/js-beautify","vendor-chunks/htmlparser2","vendor-chunks/peberminta","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/html-to-text","vendor-chunks/selderee","vendor-chunks/resend","vendor-chunks/parseley","vendor-chunks/leac","vendor-chunks/domelementtype","vendor-chunks/@selderee"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cecommerce-next.js-strapi%5Ctailwind-frontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();