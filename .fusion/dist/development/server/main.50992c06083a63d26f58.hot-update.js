
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
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);

 // styling


async function start() {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0___default.a(_components_root__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return app;
}

/***/ }),

/***/ "fusion-plugin-react-helmet-async":
/*!*************************************************************************************************************************************************************!*\
  !*** external "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\node_modules\\fusion-plugin-react-helmet-async\\dist-node-cjs\\index.js" ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\node_modules\\fusion-plugin-react-helmet-async\\dist-node-cjs\\index.js");

/***/ })

};
//# sourceMappingURL=main.50992c06083a63d26f58.hot-update.js.map