webpackHotUpdate("main",{

/***/ "./src/components/TodoItem.js":
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\TodoItem.js";


class TodoItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "todo-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      checked: props.item.completed,
      onChange: () => props.handleChange(props.item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, props.item.text));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TodoItem);

/***/ })

})
//# sourceMappingURL=main.fafd095e29f60214e3ef.hot-update.js.map