webpackHotUpdate_N_E(1,{

/***/ "./src/containers/Hydra.tsx":
/*!**********************************!*\
  !*** ./src/containers/Hydra.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/styles/stitches.config */ \"./src/styles/stitches.config.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/marsa/Documentos/Github/portfolio/src/containers/Hydra.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar HydraEngine = __webpack_require__(/*! hydra-synth */ \"./node_modules/hydra-synth/index.js\");\n\nvar StyledCanvas = Object(_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"canvas\", {\n  width: \"100%\"\n});\n_c = StyledCanvas;\n\nvar Hydra = function Hydra(_ref) {\n  _s();\n\n  var _ref$height = _ref.height,\n      height = _ref$height === void 0 ? \"400\" : _ref$height,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? \"400\" : _ref$width;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var canvas = document.getElementById(\"hydra-canvas\");\n    var hydra = new HydraEngine({\n      canvas: document.getElementById(\"hydra-canvas\"),\n      detectAudio: false\n    }); // by default, hydra makes everything global.\n    // see options to change parameters\n\n    shape(1, 1).mult(voronoi(1000, 2).blend(o0).luma()).add(shape(3, 0.225).rotate(1, 1).mult(voronoi(1000, 1).luma()).rotate(1.5)).scrollX([0.1, -0.0625, 0.005, 0.00001], 0).scrollY([0.1, -0.0625, 0.005, 0.00001], 0).out(o0);\n    s1.initImage(\"/marsa6.jpg\");\n    src(s1).out(o1);\n    src(o0).contrast(0.6).brightness().luma(1.3, 0.2).mult(o1).saturate().thresh(0.2, 0.1).out(o2);\n    render(o2);\n  });\n  return __jsx(StyledCanvas, {\n    id: \"hydra-canvas\",\n    width: \"1000\",\n    height: \"562\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(Hydra, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c2 = Hydra;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hydra);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledCanvas\");\n$RefreshReg$(_c2, \"Hydra\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSHlkcmEudHN4PzMyNGEiXSwibmFtZXMiOlsiSHlkcmFFbmdpbmUiLCJyZXF1aXJlIiwiU3R5bGVkQ2FudmFzIiwic3R5bGVkIiwid2lkdGgiLCJIeWRyYSIsImhlaWdodCIsInVzZUVmZmVjdCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoeWRyYSIsImRldGVjdEF1ZGlvIiwic2hhcGUiLCJtdWx0Iiwidm9yb25vaSIsImJsZW5kIiwibzAiLCJsdW1hIiwiYWRkIiwicm90YXRlIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJvdXQiLCJzMSIsImluaXRJbWFnZSIsInNyYyIsIm8xIiwiY29udHJhc3QiLCJicmlnaHRuZXNzIiwic2F0dXJhdGUiLCJ0aHJlc2giLCJvMiIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQTNCOztBQUVBLElBQU1DLFlBQVksR0FBR0Msc0VBQU0sQ0FBQyxRQUFELEVBQVc7QUFDcENDLE9BQUssRUFBRTtBQUQ2QixDQUFYLENBQTNCO0tBQU1GLFk7O0FBSU4sSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBdUM7QUFBQTs7QUFBQSx5QkFBcENDLE1BQW9DO0FBQUEsTUFBcENBLE1BQW9DLDRCQUEzQixLQUEyQjtBQUFBLHdCQUFwQkYsS0FBb0I7QUFBQSxNQUFwQkEsS0FBb0IsMkJBQVosS0FBWTtBQUNuREcseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBZjtBQUNBLFFBQU1DLEtBQUssR0FBRyxJQUFJWCxXQUFKLENBQWdCO0FBQzVCUSxZQUFNLEVBQUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQURvQjtBQUU1QkUsaUJBQVcsRUFBRTtBQUZlLEtBQWhCLENBQWQsQ0FGYyxDQU9kO0FBQ0E7O0FBQ0FDLFNBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFMLENBQ0dDLElBREgsQ0FDUUMsT0FBTyxDQUFDLElBQUQsRUFBTyxDQUFQLENBQVAsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQUF2QixFQUEyQkMsSUFBM0IsRUFEUixFQUVHQyxHQUZILENBR0lOLEtBQUssQ0FBQyxDQUFELEVBQUksS0FBSixDQUFMLENBQWdCTyxNQUFoQixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2Qk4sSUFBN0IsQ0FBa0NDLE9BQU8sQ0FBQyxJQUFELEVBQU8sQ0FBUCxDQUFQLENBQWlCRyxJQUFqQixFQUFsQyxFQUEyREUsTUFBM0QsQ0FBa0UsR0FBbEUsQ0FISixFQUtHQyxPQUxILENBS1csQ0FBQyxHQUFELEVBQU0sQ0FBQyxNQUFQLEVBQWUsS0FBZixFQUFzQixPQUF0QixDQUxYLEVBSzJDLENBTDNDLEVBTUdDLE9BTkgsQ0FNVyxDQUFDLEdBQUQsRUFBTSxDQUFDLE1BQVAsRUFBZSxLQUFmLEVBQXNCLE9BQXRCLENBTlgsRUFNMkMsQ0FOM0MsRUFPR0MsR0FQSCxDQU9PTixFQVBQO0FBUUFPLE1BQUUsQ0FBQ0MsU0FBSCxDQUFhLGFBQWI7QUFDQUMsT0FBRyxDQUFDRixFQUFELENBQUgsQ0FBUUQsR0FBUixDQUFZSSxFQUFaO0FBRUFELE9BQUcsQ0FBQ1QsRUFBRCxDQUFILENBQ0dXLFFBREgsQ0FDWSxHQURaLEVBRUdDLFVBRkgsR0FHR1gsSUFISCxDQUdRLEdBSFIsRUFHYSxHQUhiLEVBSUdKLElBSkgsQ0FJUWEsRUFKUixFQUtHRyxRQUxILEdBTUdDLE1BTkgsQ0FNVSxHQU5WLEVBTWUsR0FOZixFQU9HUixHQVBILENBT09TLEVBUFA7QUFRQUMsVUFBTSxDQUFDRCxFQUFELENBQU47QUFDRCxHQTdCUSxDQUFUO0FBK0JBLFNBQ0UsTUFBQyxZQUFEO0FBQWMsTUFBRSxFQUFDLGNBQWpCO0FBQWdDLFNBQUssRUFBQyxNQUF0QztBQUE2QyxVQUFNLEVBQUMsS0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBR0QsQ0FuQ0Q7O0dBQU0zQixLOztNQUFBQSxLO0FBcUNTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9jb250YWluZXJzL0h5ZHJhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIn4vc3R5bGVzL3N0aXRjaGVzLmNvbmZpZ1wiO1xuY29uc3QgSHlkcmFFbmdpbmUgPSByZXF1aXJlKFwiaHlkcmEtc3ludGhcIik7XG5cbmNvbnN0IFN0eWxlZENhbnZhcyA9IHN0eWxlZChcImNhbnZhc1wiLCB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbn0pO1xuXG5jb25zdCBIeWRyYSA9ICh7IGhlaWdodCA9IFwiNDAwXCIsIHdpZHRoID0gXCI0MDBcIiB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoeWRyYS1jYW52YXNcIik7XG4gICAgY29uc3QgaHlkcmEgPSBuZXcgSHlkcmFFbmdpbmUoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh5ZHJhLWNhbnZhc1wiKSxcbiAgICAgIGRldGVjdEF1ZGlvOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIC8vIGJ5IGRlZmF1bHQsIGh5ZHJhIG1ha2VzIGV2ZXJ5dGhpbmcgZ2xvYmFsLlxuICAgIC8vIHNlZSBvcHRpb25zIHRvIGNoYW5nZSBwYXJhbWV0ZXJzXG4gICAgc2hhcGUoMSwgMSlcbiAgICAgIC5tdWx0KHZvcm9ub2koMTAwMCwgMikuYmxlbmQobzApLmx1bWEoKSlcbiAgICAgIC5hZGQoXG4gICAgICAgIHNoYXBlKDMsIDAuMjI1KS5yb3RhdGUoMSwgMSkubXVsdCh2b3Jvbm9pKDEwMDAsIDEpLmx1bWEoKSkucm90YXRlKDEuNSlcbiAgICAgIClcbiAgICAgIC5zY3JvbGxYKFswLjEsIC0wLjA2MjUsIDAuMDA1LCAwLjAwMDAxXSwgMClcbiAgICAgIC5zY3JvbGxZKFswLjEsIC0wLjA2MjUsIDAuMDA1LCAwLjAwMDAxXSwgMClcbiAgICAgIC5vdXQobzApO1xuICAgIHMxLmluaXRJbWFnZShcIi9tYXJzYTYuanBnXCIpO1xuICAgIHNyYyhzMSkub3V0KG8xKTtcblxuICAgIHNyYyhvMClcbiAgICAgIC5jb250cmFzdCgwLjYpXG4gICAgICAuYnJpZ2h0bmVzcygpXG4gICAgICAubHVtYSgxLjMsIDAuMilcbiAgICAgIC5tdWx0KG8xKVxuICAgICAgLnNhdHVyYXRlKClcbiAgICAgIC50aHJlc2goMC4yLCAwLjEpXG4gICAgICAub3V0KG8yKTtcbiAgICByZW5kZXIobzIpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDYW52YXMgaWQ9XCJoeWRyYS1jYW52YXNcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI1NjJcIj48L1N0eWxlZENhbnZhcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEh5ZHJhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/Hydra.tsx\n");

/***/ })

})