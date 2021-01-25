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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _text = require("../../../components/typography/text");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var StyledCheckbox = _styledComponents.default.div.withConfig({
  displayName: "checkbox__StyledCheckbox",
  componentId: "sc-1fornr-0"
})(["", " font-size:", ";line-height:1.5;display:flex;align-items:flex-start;flex-wrap:wrap;margin:", " 0;&.k-Form-Checkbox--disabled input,&.k-Form-Checkbox--disabled label{cursor:not-allowed;}.k-Form-Checkbox__label{flex-basis:calc(100% - ", ");cursor:pointer;transition:color .2s;", " &:active{color:", ";}}.k-Form-Checkbox__input{appearance:none;box-sizing:border-box;display:inline-block;flex-shrink:0;width:", ";height:", ";margin:0 ", " 0 0;background-color:", ";border:", " solid ", ";cursor:pointer;transition:border-color .2s,background-color .2s;&:focus{border-color:", ";outline:", " solid ", ";outline-offset:", ";}&:checked,&:indeterminate{background-color:", ";background-repeat:no-repeat;background-position:center;border-color:", ";}&:checked{background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}&:indeterminate{background-image:url(\"data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A\");}&:disabled{background-color:", ";border-color:", ";}&:disabled:checked{background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23b8b8b8'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}}&.k-Form-Checkbox--error .k-Form-Checkbox__input{border-color:", ";&:checked{background-color:", ";border-color:", ";&:focus{box-shadow:0 0 ", " ", ";}}}&.k-Form-Checkbox--orion .k-Form-Checkbox__input{border-radius:", ";}.k-Form-Checkbox__link,label a{", " color:", ";text-decoration:none;transition:color .2s;&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Form-Checkbox__content{flex:1 0 100%;margin:", " 0 0 ", ";}"], _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20 + 10), _typographyConfig.default.fontStyles.light, _colorsConfig.default.primary3, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.primary1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.line1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.error3, _colorsConfig.default.error, _colorsConfig.default.error, (0, _typography.pxToRem)(3), _colorsConfig.default.error, (0, _typography.pxToRem)(4), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.primary1, _colorsConfig.default.primary3, _colorsConfig.default.primary3, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(20 + 10));

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      error = _ref.error,
      disabled = _ref.disabled,
      textProps = _ref.textProps,
      onLabelClick = _ref.onLabelClick,
      indeterminate = _ref.indeterminate,
      label = _ref.label,
      variant = _ref.variant,
      inputProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "id", "children", "inputClassName", "error", "disabled", "textProps", "onLabelClick", "indeterminate", "label", "variant"]);
  var inputElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/_react.default.createElement(StyledCheckbox, {
    className: (0, _classnames.default)('k-Form-Checkbox', "k-Form-Checkbox--".concat(variant), {
      'k-Form-Checkbox--error': error,
      'k-Form-Checkbox--disabled': disabled
    }, className)
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: inputElement,
    id: id,
    type: "checkbox",
    className: (0, _classnames.default)('k-Form-Checkbox__input', inputClassName),
    disabled: disabled
  }, inputProps)), !label && children && /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "label",
    htmlFor: id,
    className: "k-Form-Checkbox__label",
    onClick: onLabelClick
  }, textProps), children), label && !children && /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "label",
    htmlFor: id,
    className: "k-Form-Checkbox__label",
    onClick: onLabelClick
  }, textProps), label), label && children && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "label",
    htmlFor: id,
    className: "k-Form-Checkbox__label",
    onClick: onLabelClick,
    weight: "regular"
  }, label), /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    className: "k-Form-Checkbox__content",
    onClick: onLabelClick
  }, textProps), children)));
};

exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  id: 'checkbox',
  textProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  variant: 'andromeda'
};
Checkbox.propTypes = {
  textProps: _propTypes.default.object,
  indeterminate: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  label: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};