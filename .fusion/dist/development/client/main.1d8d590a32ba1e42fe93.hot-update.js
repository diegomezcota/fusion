webpackHotUpdate("main",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
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
  }, "\n        body {\n          background-color: #f5f5f5;\n          font: 24px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        }\n        h1 {\n          color: rgba(175, 47, 47, 0.15);\n          font-size: 100px;\n          font-weight: 100;\n          text-align: center;\n        }\n        .container {\n          background: #ffffff;\n          border: 1px solid #ededed;\n          margin: 0 auto;\n          width: 550px;\n        }\n        input {\n          border: none;\n          font-size: 24px;\n          font-weight: 300;\n          padding: 15px;\n          width: 520px;\n        }\n        input::placeholder {\n          color: #e6e6e6;\n          font-style: italic;\n          font-weight: 100;\n        }\n        .todo {\n          border-top: 1px solid #ededed;\n          padding: 15px;\n        }\n        .todo-text {\n          font-weight: 300;\n        }\n      ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
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
    key: todo,
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

/***/ })

})
//# sourceMappingURL=main.1d8d590a32ba1e42fe93.hot-update.js.map