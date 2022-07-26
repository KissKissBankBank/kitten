"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Centered = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

const Centered = _ref => {
  let {
    children,
    className,
    display,
    ...props
  } = _ref;
  const classNameProps = (0, _classnames.default)('k-HeaderNav__centered', {
    'k-HeaderNav__column': display === 'column'
  }, className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: classNameProps
  }), children);
};

exports.Centered = Centered;
Centered.propTypes = {
  display: _propTypes.default.oneOf(['column'])
};
Centered.defaultProps = {
  display: null
};