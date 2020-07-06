
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
exports.id = "main";
exports.modules = {

/***/ "./src/components/TodoItem.js":
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\TodoItem.js";

const completedStyle = {
  fontStyle: "italic",
  color: "#cdcdcd",
  textDecoration: "line-through"
};

class TodoItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "todo-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      checked: this.props.item.completed,
      onChange: () => this.props.handleChange(this.props.item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, this.props.item.text));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TodoItem);

/***/ })

};
//# sourceMappingURL=main.d6d8309c29a669887f51.hot-update.js.map