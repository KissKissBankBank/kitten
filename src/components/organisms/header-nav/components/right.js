"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Right = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Right = function Right(_ref) {
  var children = _ref.children,
      className = _ref.className,
      padded = _ref.padded;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-HeaderNav__right', className, {
      'k-HeaderNav__right--padded': padded
    })
  }, children);
};

exports.Right = Right;
Right.propTypes = {
  padded: _propTypes.default.bool
};
Right.defaultProps = {
  padded: false
};