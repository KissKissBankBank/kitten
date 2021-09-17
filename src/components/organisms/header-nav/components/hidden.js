"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Hidden = void 0;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Hidden = function Hidden(_ref) {
  var min = _ref.min,
      max = _ref.max,
      children = _ref.children;
  var hiddenMin = min ? "k-u-hidden@" + min + "-up" : '';
  var hiddenMax = max ? "k-u-hidden@" + max + "-down" : '';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child) {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      className: (0, _classnames.default)(hiddenMin, hiddenMax)
    });
  }));
};

exports.Hidden = Hidden;