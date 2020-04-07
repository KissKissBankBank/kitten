"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hidden = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Hidden = function Hidden(_ref) {
  var min = _ref.min,
      max = _ref.max,
      children = _ref.children;
  var hiddenMin = min ? "k-u-hidden@".concat(min, "-up--important") : '';
  var hiddenMax = max ? "k-u-hidden@".concat(max, "-down--important") : '';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child) {
    return _react.default.cloneElement(child, {
      className: (0, _classnames.default)(hiddenMin, hiddenMax)
    });
  }));
};

exports.Hidden = Hidden;