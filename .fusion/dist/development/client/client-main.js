(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\App.js";

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "Hello World");
}

/***/ }),

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\root.js";

/**
 * Create the boilerplate to get React to render something on the screen
 * Render an <App /> component, which you'll need to create separately
 */



class Root extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 16
  }
}));

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return start; });
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "./node_modules/fusion-react/dist-browser-esm/index.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/root */ "./src/components/root.js");
/* harmony import */ var _plugins_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/todos */ "./src/plugins/todos.js");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "./node_modules/fusion-plugin-react-helmet-async/dist-browser-esm/index.js");


 // styling


async function start() {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0__["default"](_components_root__WEBPACK_IMPORTED_MODULE_1__["default"]);

  if (false) {}

  app.register(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return app;
}

/***/ }),

/***/ "./src/plugins/todos.js":
/*!******************************!*\
  !*** ./src/plugins/todos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const todos = ['Buy milk', 'Walk dog'];
/* harmony default export */ __webpack_exports__["default"] = (async (ctx, next) => {
  if (ctx.path === '/api/todos') {
    if (ctx.method === 'GET') {
      ctx.response.body = todos;
    } else if (ctx.method === 'POST') {
      const {
        value
      } = ctx.request.body;
      todos.push(value);
      ctx.response.status = 201;
    }
  }

  await next();
});

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/client-public-path.js (webpack)-hot-middleware/client.js?name=client ./node_modules/fusion-cli/entries/client-entry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\diego\OneDrive\Documentos\fusionjs\fusion-tutorial\node_modules\fusion-cli\entries\client-public-path.js */"./node_modules/fusion-cli/entries/client-public-path.js");
__webpack_require__(/*! C:\Users\diego\OneDrive\Documentos\fusionjs\fusion-tutorial\node_modules\webpack-hot-middleware\client.js?name=client */"./node_modules/webpack-hot-middleware/client.js?name=client");
module.exports = __webpack_require__(/*! C:\Users\diego\OneDrive\Documentos\fusionjs\fusion-tutorial\node_modules\fusion-cli\entries\client-entry.js */"./node_modules/fusion-cli/entries/client-entry.js");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=client-main.js.map