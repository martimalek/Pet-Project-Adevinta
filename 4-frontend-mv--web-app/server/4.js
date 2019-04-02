exports.ids = [4];
exports.modules = {

/***/ "./pages/Detail/index.js":
/*!*******************************!*\
  !*** ./pages/Detail/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/es/index.js\");\n/* harmony import */ var _3_frontend_mv_lib_movies_src_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../3-frontend-mv--lib-movies/src/index */ \"../../3-frontend-mv--lib-movies/src/index.js\");\n/* harmony import */ var _schibstedspain_sui_atom_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @schibstedspain/sui-atom-badge */ \"../node_modules/@schibstedspain/sui-atom-badge/lib/index.js\");\n/* harmony import */ var _schibstedspain_sui_atom_badge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_schibstedspain_sui_atom_badge__WEBPACK_IMPORTED_MODULE_4__);\nvar DetailPage=function DetailPage(_ref){var movie=_ref.movie;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\",null,movie.Title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\",{width:\"150\",src:movie.Poster}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_schibstedspain_sui_atom_badge__WEBPACK_IMPORTED_MODULE_4___default.a,{size:\"small\",type:\"success\",label:movie.imdbRating}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],{to:\"/\"},\"Go Back\"));};DetailPage.getInitialProps=function(_ref2){var routeInfo=_ref2.routeInfo,context=_ref2.context;var params=routeInfo.params;var id=params.id;return _3_frontend_mv_lib_movies_src_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('detail_movies_use_case').execute({id:id}).then(function(response){return{movie:response};});};/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\n\n//# sourceURL=webpack:///./pages/Detail/index.js?");

/***/ })

};;