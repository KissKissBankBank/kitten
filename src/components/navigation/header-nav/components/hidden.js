"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Hidden = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

const Hidden = _ref => {
  let {
    min,
    max,
    children
  } = _ref;
  const hiddenMin = min ? "k-u-hidden@" + min + "-up" : '';
  const hiddenMax = max ? "k-u-hidden@" + max + "-down" : '';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, child => /*#__PURE__*/_react.default.cloneElement(child, {
    className: (0, _classnames.default)(hiddenMin, hiddenMax)
  })));
};

exports.Hidden = Hidden;