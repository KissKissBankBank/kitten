"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Centered = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var Centered = function Centered(_ref) {
  var children = _ref.children,
      className = _ref.className,
      display = _ref.display,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "display"]);
  var classNameProps = (0, _classnames.default)('k-HeaderNav--centered', {
    'k-HeaderNav--column': display === 'column'
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