webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/reducers/common.js":
/*!**********************************!*\
  !*** ./store/reducers/common.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return common; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./store/actions/actionTypes.js");

var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};
function common() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.67ae78f4e2301ad1436b.hot-update.js.map