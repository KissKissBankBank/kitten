"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Right = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const Right = _ref => {
  let {
    children,
    className,
    padded
  } = _ref;
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