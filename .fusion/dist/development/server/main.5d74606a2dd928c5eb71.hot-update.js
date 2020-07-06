
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

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
// export default <Root />;

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
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/root */ "./src/components/root.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_root__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/todos */ "./src/plugins/todos.js");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__);


 // styling


async function start() {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0___default.a(_components_root__WEBPACK_IMPORTED_MODULE_1___default.a);

  if (true) {
    app.middleware(__webpack_require__(/*! koa-bodyparser */ "koa-bodyparser")());
    app.middleware(_plugins_todos__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  app.register(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default.a);
  return app;
}

/***/ }),

/***/ "isomorphic-fetch":
false,

/***/ "react":
false

};
//# sourceMappingURL=main.5d74606a2dd928c5eb71.hot-update.js.map