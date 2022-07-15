"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckboxButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _text = require("../../typography/text");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _excluded = ["className", "id", "children", "inputClassName", "error", "disabled", "textProps", "labelProps", "onLabelClick", "indeterminate", "label", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledCheckboxButton = _styledComponents.default.div.withConfig({
  displayName: "checkbox-button__StyledCheckboxButton",
  componentId: "sc-g6n0w-0"
})(["font-size:", ";line-height:", ";margin:", " 0;&.k-Form-CheckboxButton--disabled input,&.k-Form-CheckboxButton--disabled label{cursor:not-allowed;}.k-Form-CheckboxButton__label{display:flex;align-items:center;align-self:flex-start;flex-wrap:wrap;cursor:pointer;gap:", " ", ";box-sizing:border-box;border-radius:var(--border-radius-s);border:var(--border);transition:border var(--transition),background var(--transition);}.k-Form-CheckboxButton__label::before{display:block;content:'';box-sizing:border-box;display:inline-block;flex-shrink:0;width:", ";height:", ";border-radius:var(--border-radius-s);background-color:var(--color-grey-000);border:var(--border);cursor:pointer;transition:border-color var(--transition),background-color var(--transition);}.k-Form-CheckboxButton__input:focus  & + .k-Form-CheckboxButton__label{border:var(--border-active-primary);}}.k-Form-CheckboxButton__input:checked + .k-Form-CheckboxButton__label::before,.k-Form-CheckboxButton__input:indeterminate + .k-Form-CheckboxButton__label::before{background-color:var(--color-primary-500);background-repeat:no-repeat;background-position:center;border:var(--border-active-primary);}.k-Form-CheckboxButton__input:checked + .k-Form-CheckboxButton__label::before{background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}.k-Form-CheckboxButton__input:indeterminate + .k-Form-CheckboxButton__label::before{background-image:url(\"data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A\");}.k-Form-CheckboxButton__input{appearance:none;position:absolute;opacity:0;cursor:pointer;}.k-Form-CheckboxButton__input:hover:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-300);::before{border-color:var(--color-primary-300);}}}.k-Form-CheckboxButton__input:focus:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-500);::before{border-color:var(--color-primary-500);}}}.k-Form-CheckboxButton__input:active:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-500);::before{border-color:var(--color-primary-500);}}}.k-Form-CheckboxButton__input:checked:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-500);background-color:var(--color-primary-100);}}.k-Form-CheckboxButton__input:disabled{& + .k-Form-CheckboxButton__label{border-color:var(--color-grey-300);color:var(--color-grey-600);&::before{border-color:var(--color-grey-400);background-color:var(--color-grey-000);}}}.k-Form-CheckboxButton__input:checked:disabled{& + .k-Form-CheckboxButton__label{border-color:var(--color-grey-600);color:var(--color-grey-600);background-color:var(--color-grey-200);&::before{border-color:var(--color-grey-500);background-color:var(--color-grey-500);}}}&.k-Form-CheckboxButton--error{.k-Form-CheckboxButton__input:not(:disabled){& + .k-Form-CheckboxButton__label{background-color:var(--color-grey-000);border-color:var(--color-danger-300);&::before{border-color:var(--color-danger-500);}}&:checked + .k-Form-CheckboxButton__label::before{background-color:var(--color-danger-500);}&:checked:focus + .k-Form-CheckboxButton__label::before{box-shadow:0 0 ", " var(--color-danger-500);}}}&.k-Form-CheckboxButton--small .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}&.k-Form-CheckboxButton--medium .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}&.k-Form-CheckboxButton--large .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}@media ", "{&.k-Form-CheckboxButton--large .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}}.k-Form-CheckboxButton__labelText{flex-basis:calc(100% - ", ");}.k-Form-CheckboxButton__content{flex:1 0 calc(100% - ", ");margin:0 0 0 ", ";}"], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5 + 2), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(10 - 1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20 - 1), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20 - 1), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(60), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(30 - 1), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(20 + 15), (0, _typography.pxToRem)(20 + 15), (0, _typography.pxToRem)(20 + 15));

var CheckboxButton = function CheckboxButton(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      error = _ref.error,
      disabled = _ref.disabled,
      textProps = _ref.textProps,
      labelProps = _ref.labelProps,
      onLabelClick = _ref.onLabelClick,
      indeterminate = _ref.indeterminate,
      label = _ref.label,
      size = _ref.size,
      inputProps = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var inputElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/_react.default.createElement(StyledCheckboxButton, {
    className: (0, _classnames.default)('k-Form-CheckboxButton', "k-Form-CheckboxButton--" + size, {
      'k-Form-CheckboxButton--error': error,
      'k-Form-CheckboxButton--disabled': disabled
    }, className)
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: inputElement,
    id: id,
    type: "checkbox",
    className: (0, _classnames.default)('k-Form-CheckboxButton__input', inputClassName),
    disabled: disabled
  }, inputProps)), !label && children && /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick,
    weight: "500"
  }, labelProps, textProps, {
    className: (0, _classnames.default)('k-Form-CheckboxButton__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-CheckboxButton__labelText"
  }, children)), label && !children && /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick,
    weight: "500"
  }, labelProps, textProps, {
    className: (0, _classnames.default)('k-Form-CheckboxButton__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-CheckboxButton__labelText"
  }, label)), label && children && /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)('k-Form-CheckboxButton__label'),
    htmlFor: id,
    onClick: onLabelClick
  }, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    weight: "500"
  }, labelProps, {
    className: (0, _classnames.default)('k-Form-CheckboxButton__labelText', labelProps == null ? void 0 : labelProps.className)
  }), label), /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({}, textProps, {
    className: (0, _classnames.default)('k-Form-CheckboxButton__content', textProps == null ? void 0 : textProps.className)
  }), children)));
};

exports.CheckboxButton = CheckboxButton;
CheckboxButton.defaultProps = {
  id: 'checkbox',
  textProps: {},
  labelProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  onLabelClick: function onLabelClick() {},
  size: 'medium'
};
CheckboxButton.propTypes = {
  textProps: _propTypes.default.object,
  labelProps: _propTypes.default.object,
  indeterminate: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  label: _propTypes.default.string,
  onLabelClick: _propTypes.default.func,
  size: _propTypes.default.oneOf(['small', 'medium', 'large'])
};