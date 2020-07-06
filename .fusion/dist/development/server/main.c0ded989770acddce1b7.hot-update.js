
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



class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/todosData.js":
/*!*************************************!*\
  !*** ./src/components/todosData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const todosData = [{
  id: 1,
  text: "Take out the trash",
  completed: true
}, {
  id: 2,
  text: "Grocery shopping",
  completed: false
}, {
  id: 3,
  text: "Clean gecko tank",
  completed: false
}, {
  id: 4,
  text: "Mow lawn",
  completed: true
}, {
  id: 5,
  text: "Catch up on Arrested Development",
  completed: false
}];
/* harmony default export */ __webpack_exports__["default"] = (todosData);

/***/ })

};
//# sourceMappingURL=main.c0ded989770acddce1b7.hot-update.js.map