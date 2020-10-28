"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../components/typography/text");

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      error = _ref.error,
      textProps = _ref.textProps,
      onLabelClick = _ref.onLabelClick,
      indeterminate = _ref.indeterminate,
      inputProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "id", "children", "inputClassName", "error", "textProps", "onLabelClick", "indeterminate"]);
  var inputElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  var checkboxInputClassNames = (0, _classnames.default)('k-Checkbox__input', inputClassName, {
    'is-error': error
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-Checkbox', className)
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: inputElement,
    id: id,
    type: "checkbox",
    className: checkboxInputClassNames
  }, inputProps)), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "k-Checkbox__label",
    onClick: onLabelClick
  }, /*#__PURE__*/_react.default.createElement(_text.Text, textProps, children)));
};

exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  children: 'Filter 1',
  textProps: {},
  indeterminate: false
};