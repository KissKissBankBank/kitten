"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Radio = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _excluded = ["className", "id", "children", "inputClassName", "large", "largeContent", "size", "text", "error", "disabled", "design", "fontWeight", "paragraphStyle"];

var StyledRadio = _styledComponents.default.div.withConfig({
  displayName: "radio__StyledRadio",
  componentId: "sc-11sl6i-0"
})([".k-Form-Radio__label{display:flex;align-items:flex-start;align-self:flex-start;flex-wrap:wrap;cursor:pointer;transition:color var(--transition);}.k-Form-Radio__label::before{box-sizing:border-box;display:block;flex-shrink:0;width:", ";height:", ";margin:", " ", " 0 0;content:'';background-position:center;background-repeat:no-repeat;background-color:var(--color-grey-000);border:var(--border);border-radius:var(--border-radius-rounded);transition:border var(--transition),background var(--transition);}.k-Form-Radio__input{position:absolute;opacity:0;cursor:pointer;}.k-Form-Radio__input:focus + .k-Form-Radio__label::before{border-color:var(--color-primary-500);outline-style:auto;}.k-Form-Radio__input:focus:not(:focus-visible) + .k-Form-Radio__label::before{outline-color:transparent;}.k-Form-Radio__input:focus-visible + .k-Form-Radio__label::before{outline-style:auto;}.k-Form-Radio__input:checked + .k-Form-Radio__label::before{border:", " solid var(--color-primary-500);}.k-Form-Radio__labelText{flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:1.5;&.k-Form-Radio__labelText--normal{", ";}&.k-Form-Radio__labelText--light{", ";}&.k-Form-Radio__labelText--bold{", ";}}.k-Form-Radio__input:active + .k-Form-Radio__labelText{color:var(--color-primary-500);}&.k-Form-Radio--largeLabel{.k-Form-Radio__label::before{margin-top:", ";}.k-Form-Radio__labelText{", " font-size:", ";}}.k-Form-Radio__labelText--withContents{", "}.k-Form-Radio__labelContents{margin-top:", ";margin-left:", ";flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:", ";&:empty{display:none;}}&.k-Form-Radio--largeContent .k-Form-Radio__labelContents{font-size:", ";}@media ", "{.k-Form-Radio__labelContents{margin-top:", ";font-size:", ";line-height:", ";}}&.k-Form-Radio--check{.k-Form-Radio__input:checked + .k-Form-Radio__label::before{border-width:", ";background-color:var(--color-primary-500);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E\");}&.k-Form-Radio--error .k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{background-color:", ";}.k-Form-Radio__input:disabled + .k-Form-Radio__label::before{background-color:var(--color-grey-500);}}&:hover{.k-Form-Radio__label::before{border-color:var(--color-primary-300);}.k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{border-color:var(--color-primary-500);}}&:active,&:focus{.k-Form-Radio__label::before{border-color:var(--color-primary-500);}.k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{border-color:var(--color-primary-500);}}&.k-Form-Radio--error{.k-Form-Radio__label::before{border-color:var(--color-danger-300);}.k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{border-color:var(--color-danger-500);}}.k-Form-Radio__input:disabled{cursor:not-allowed;& + .k-Form-Radio__label{color:var(--color-grey-600);cursor:not-allowed;}& + .k-Form-Radio__label::before{background-color:var(--color-grey-000);border-color:var(--color-grey-400);}&:checked + .k-Form-Radio__label::before{background-color:var(--color-grey-000);border-color:var(--color-grey-500);}}"], (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(16 + 10), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.regular, _typographyConfig.default.fontStyles.light, _typographyConfig.default.fontStyles.bold, (0, _typography.pxToRem)(8), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(16 + 10), (0, _typography.pxToRem)(16 + 10 + 10), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(19), (0, _typography.stepToRem)(-1), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(8), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(2), _colorsConfig.default.error);

var Radio = function Radio(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      large = _ref.large,
      largeContent = _ref.largeContent,
      size = _ref.size,
      text = _ref.text,
      error = _ref.error,
      disabled = _ref.disabled,
      design = _ref.design,
      fontWeight = _ref.fontWeight,
      paragraphStyle = _ref.paragraphStyle,
      inputProps = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledRadio, {
    className: (0, _classnames.default)('k-Form-Radio', className, "k-Form-Radio--" + design, {
      'k-Form-Radio--error': error
    })
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    id: id,
    type: "radio",
    className: (0, _classnames.default)('k-Form-Radio__input', inputClassName),
    disabled: disabled
  }, inputProps)), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "k-Form-Radio__label"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-Form-Radio__labelText', "k-Form-Radio__labelText--" + fontWeight, {
      'k-Form-Radio__labelText--withContents': !!children
    })
  }, text), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-Radio__labelContents"
  }, children)));
};

exports.Radio = Radio;
Radio.propTypes = {
  text: _propTypes.default.node.isRequired,
  id: _propTypes.default.string.isRequired,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  design: _propTypes.default.oneOf(['disc', 'check']),
  fontWeight: _propTypes.default.oneOf(['light', 'normal', 'bold'])
};
Radio.defaultProps = {
  error: false,
  disabled: false,
  design: 'disc',
  fontWeight: 'normal'
};