
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

/***/ "./src/components/Form/FormContainer.js":
/*!**********************************************!*\
  !*** ./src/components/Form/FormContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent */ "./src/components/Form/FormComponent.js");
var _jsxFileName = "C:\\Users\\diego\\OneDrive\\Documentos\\fusionjs\\fusion-tutorial\\src\\components\\Form\\FormContainer.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComponent__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      handleChange: this.handleChange
    }, this.state, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }));
  }

}

/***/ })

};
//# sourceMappingURL=main.f7d59def7964f4e6c1a3.hot-update.js.map