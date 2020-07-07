
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
false,

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\root.js";




const Root = () => {
  const [todos, setTodos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [inputText, setInputText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('/api/todos').then(async res => await res.json()).then(res => setTodos(res));
  }, []);

  const handleOnKeydown = e => {
    if (e.key === 'Enter') {
      setInputText('');
      setTodos([...todos, inputText]);
      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          value: inputText
        })
      });
    }
  };

  const handleOnChange = e => {
    setInputText(e.currentTarget.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, `
        body {
          background-color: #f5f5f5;
          font: 24px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        h1 {
          color: rgba(175, 47, 47, 0.15);
          font-size: 100px;
          font-weight: 100;
          text-align: center;
        }
        .container {
          background: #ffffff;
          border: 1px solid #ededed;
          margin: 0 auto;
          width: 550px;
        }
        input {
          border: none;
          font-size: 24px;
          font-weight: 300;
          padding: 15px;
          width: 520px;
        }
        input::placeholder {
          color: #e6e6e6;
          font-style: italic;
          font-weight: 100;
        }
        .todo {
          border-top: 1px solid #ededed;
          padding: 15px;
        }
        .todo-text {
          font-weight: 300;
        }
      `)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "todos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: handleOnChange,
    onKeyDown: handleOnKeydown,
    placeholder: "What needs to be done?",
    value: inputText,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), todos.map(todo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "todo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "todo-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, todo)))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 16
  }
}));

/***/ }),

/***/ "isomorphic-fetch":
/*!***************************************************************************************************************************************!*\
  !*** external "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\node_modules\\isomorphic-fetch\\fetch-npm-node.js" ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\node_modules\\isomorphic-fetch\\fetch-npm-node.js");

/***/ })

};
//# sourceMappingURL=main.2ff63ce12a3c6385e673.hot-update.js.map