webpackHotUpdate("main",{

/***/ "./src/components/Form/FormContainer.js":
/*!**********************************************!*\
  !*** ./src/components/Form/FormContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent */ "./src/components/Form/FormComponent.js");
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\Form\\FormContainer.js";


class FormContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      dietaryRestrictions: {
        isVegetarian: false,
        isLactoseIntolerant: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      value,
      name,
      type,
      checked
    } = event.target;
    type === 'checkbox' ? this.setState(prevState => {
      return {
        dietaryRestrictions: { ...prevState.dietaryRestrictions,
          [name]: checked
        }
      };
    }) : this.setState({
      [name]: value
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    });
  }

}

/***/ })

})
//# sourceMappingURL=main.06e9b2847e2cb45eaad0.hot-update.js.map