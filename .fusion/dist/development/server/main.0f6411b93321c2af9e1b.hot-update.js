
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

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todosData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosData */ "./src/components/todosData.js");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./src/components/TodoItem.js");
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\App.js";




class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      todos: _todosData__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
      return {};
    });
  }

  componentDidMount() {}

  render() {
    const todoItems = this.state.todos.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TodoItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 56
      }
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};
//# sourceMappingURL=main.0f6411b93321c2af9e1b.hot-update.js.map