"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var DropdownButton = (0, _react.forwardRef)(function (_ref, dropdownButtonRef) {
  var id = _ref.id,
      className = _ref.className,
      isExpanded = _ref.isExpanded,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["id", "className", "isExpanded"]);
  var buttonClassName = (0, _classnames.default)('k-Dropdown__button', className);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    ref: dropdownButtonRef,
    id: id,
    type: "button",
    className: buttonClassName,
    "aria-haspopup": "true",
    "aria-expanded": isExpanded
  }, rest));
});
exports.DropdownButton = DropdownButton;
DropdownButton.propTypes = {
  onClick: _propTypes.default.func,
  isExpanded: _propTypes.default.bool
};
DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: function onClick() {},
  isExpanded: false
}; // DEPRECATED: do not use default export.

var _default = DropdownButton;
exports.default = _default;