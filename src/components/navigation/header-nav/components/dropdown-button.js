"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DropdownButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["id", "className", "isExpanded"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropdownButton = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, dropdownButtonRef) {
  var id = _ref.id,
      className = _ref.className,
      isExpanded = _ref.isExpanded,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    ref: dropdownButtonRef,
    id: id,
    type: "button",
    className: (0, _classnames.default)('k-Dropdown__button', 'k-HeaderNavDropdown__button', 'k-u-reset-button', className),
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
};