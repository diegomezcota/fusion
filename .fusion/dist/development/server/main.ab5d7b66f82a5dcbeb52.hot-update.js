
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
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\App.js";


class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "firstName",
      value: this.state.firstName,
      placeholder: "FirstName",
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "lastName",
      value: this.state.lastName,
      placeholder: "LastName",
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, this.state.firstName, " ", this.state.lastName));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\root.js";
// import React, {useState, useEffect} from 'react';
// import {Helmet} from 'fusion-plugin-react-helmet-async';
// import fetch from 'isomorphic-fetch';
// const Root = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputText, setInputText] = useState('');
//   useEffect(() => {
//     fetch('/api/todos')
//       .then(async res => await res.json())
//       .then(res => setTodos(res));
//   }, []);
//   const handleOnKeydown = (e) => {
//     if (e.key === 'Enter') {
//       setInputText('');
//       setTodos([
//         ...todos,
//         inputText
//       ]);
//       fetch('/api/todos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({value: inputText}),
//       });
//     }
//   };
//   const handleOnChange = (e) => {
//     setInputText(e.currentTarget.value);
//   };
//   return (
//     <React.Fragment>
//         <Helmet>
//       <style>
//       {`
//         body {
//           background-color: #f5f5f5;
//           font: 24px 'Helvetica Neue', Helvetica, Arial, sans-serif;
//         }
//         h1 {
//           color: rgba(175, 47, 47, 0.15);
//           font-size: 100px;
//           font-weight: 100;
//           text-align: center;
//         }
//         .container {
//           background: #ffffff;
//           border: 1px solid #ededed;
//           margin: 0 auto;
//           width: 550px;
//         }
//         input {
//           border: none;
//           font-size: 24px;
//           font-weight: 300;
//           padding: 15px;
//           width: 520px;
//         }
//         input::placeholder {
//           color: #e6e6e6;
//           font-style: italic;
//           font-weight: 100;
//         }
//         .todo {
//           border-top: 1px solid #ededed;
//           padding: 15px;
//         }
//         .todo-text {
//           font-weight: 300;
//         }
//       `}
//       </style>
//     </Helmet>
//       <h1>todos</h1>
//       <div className="container">
//         <input
//           onChange={handleOnChange}
//           onKeyDown={handleOnKeydown}
//           placeholder="What needs to be done?"
//           value={inputText}
//           type="text"
//         />
//         {todos.map(todo => (
//           <div className="todo">
//             <div className="todo-text">{todo}</div>
//           </div>
//         ))}
//       </div>
//     </React.Fragment>
//   );
// }



function Root() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 16
  }
}));

/***/ }),

/***/ "isomorphic-fetch":
false

};
//# sourceMappingURL=main.ab5d7b66f82a5dcbeb52.hot-update.js.map