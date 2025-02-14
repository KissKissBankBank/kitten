"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _text = require("../../typography/text");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledCheckbox = _styledComponents.default.div.withConfig({
  displayName: "checkbox__StyledCheckbox",
  componentId: "sc-1fornr-0"
})(["", " font-size:", ";line-height:1.5;display:flex;align-items:flex-start;flex-wrap:wrap;margin:", " 0;&.k-Form-Checkbox--disabled input,&.k-Form-Checkbox--disabled label{cursor:not-allowed;color:var(--color-grey-600);}&.k-Form-Checkbox--disabled input:checked,&.k-Form-Checkbox--disabled input:checked + label{color:var(--color-grey-700);}.k-Form-Checkbox__label{flex-basis:calc(100% - ", ");cursor:pointer;transition:color 0.2s;", "}.k-Form-Checkbox__input{appearance:none;box-sizing:border-box;display:inline-block;flex-shrink:0;width:", ";height:", ";margin:0 ", " 0 0;border-radius:var(--border-radius-s);background-color:", ";border:var(--border);cursor:pointer;transition:border-color 0.2s,background-color 0.2s;&:focus{border:var(--border-active-primary);}&:checked,&:indeterminate{background-color:", ";background-repeat:no-repeat;background-position:center;border:var(--border-active-primary);}&:checked{background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}&:indeterminate{background-image:url(\"data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A\");}&:disabled{background-color:var(--color-grey-200);border:var(--border-disabled);}&:disabled:checked{background-color:var(--color-grey-500);border-color:var(--color-grey-500);}}&.k-Form-Checkbox--error .k-Form-Checkbox__input{border:var(--border-danger);&:checked{background-color:var(--color-danger-500);&:focus{box-shadow:0 0 ", " var(--color-danger-500);}}}.k-Form-Checkbox__link,label a{", " color:", ";text-decoration:none;transition:color 0.2s;&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Form-Checkbox__content{flex:1 0 calc(100% - ", ");margin:", " 0 0 ", ";}"], _typographyConfig.default.fontStyles['400'], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20 + 10), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.background1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(3), _typographyConfig.default.fontStyles['500'], _colorsConfig.default.primary1, _colorsConfig.default.primary3, _colorsConfig.default.primary3, (0, _typography.pxToRem)(20 + 10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(20 + 10));

const Checkbox = _ref => {
  let {
    className,
    id,
    children,
    inputClassName,
    error,
    disabled,
    textProps,
    labelProps,
    onLabelClick,
    indeterminate,
    label,
    ...inputProps
  } = _ref;
  const inputElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/_react.default.createElement(StyledCheckbox, {
    className: (0, _classnames.default)('k-Form-Checkbox', {
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
    onClick: onLabelClick
  }, labelProps, textProps, {
    className: (0, _classnames.default)('k-Form-Checkbox__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), children), label && !children && /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick
  }, labelProps, textProps, {
    className: (0, _classnames.default)('k-Form-Checkbox__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), label), label && children && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick,
    weight: "500"
  }, labelProps, {
    className: (0, _classnames.default)('k-Form-Checkbox__label', labelProps == null ? void 0 : labelProps.className)
  }), label), /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    onClick: onLabelClick
  }, textProps, {
    className: (0, _classnames.default)('k-Form-Checkbox__content', textProps == null ? void 0 : textProps.className)
  }), children)));
};

exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  id: 'checkbox',
  textProps: {},
  labelProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  onLabelClick: () => {}
};
Checkbox.propTypes = {
  textProps: _propTypes.default.object,
  labelProps: _propTypes.default.object,
  indeterminate: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  label: _propTypes.default.string,
  onLabelClick: _propTypes.default.func
};