"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Radio = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _deprecated = require("../../../helpers/utils/deprecated");

var _deprecated2 = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

const StyledRadio = _styledComponents.default.div.withConfig({
  displayName: "radio__StyledRadio",
  componentId: "sc-11sl6i-0"
})([".k-Form-Radio__label{display:flex;align-items:flex-start;align-self:flex-start;flex-wrap:wrap;cursor:pointer;transition:color var(--transition);}.k-Form-Radio__label::before{box-sizing:border-box;display:block;flex-shrink:0;width:", ";height:", ";margin:", " ", " 0 0;content:'';background-position:center;background-repeat:no-repeat;background-color:var(--color-grey-000);border:var(--border);border-radius:var(--border-radius-rounded);transition:border var(--transition),background var(--transition);}.k-Form-Radio__input{position:absolute;opacity:0;cursor:pointer;}.k-Form-Radio__input:focus + .k-Form-Radio__label::before{border-color:var(--color-primary-500);outline-style:auto;}.k-Form-Radio__input:focus:not(:focus-visible) + .k-Form-Radio__label::before{outline-color:transparent;}.k-Form-Radio__input:focus-visible + .k-Form-Radio__label::before{outline-style:auto;}.k-Form-Radio__input:checked + .k-Form-Radio__label::before{border:", " solid var(--color-primary-500);}.k-Form-Radio__labelText{flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:1.5;&.k-Form-Radio__labelText--normal,&.k-Form-Radio__labelText--500{", ";}&.k-Form-Radio__labelText--light &.k-Form-Radio__labelText--400{", ";}&.k-Form-Radio__labelText--bold,&.k-Form-Radio__labelText--700{", ";}}.k-Form-Radio__input:active + .k-Form-Radio__labelText{color:var(--color-primary-500);}.k-Form-Radio__labelText--withContents{", "}.k-Form-Radio__labelContents{margin-top:", ";margin-left:", ";flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:", ";&:empty{display:none;}}@media ", "{.k-Form-Radio__labelContents{margin-top:", ";font-size:", ";line-height:", ";}}&.k-Form-Radio--check{.k-Form-Radio__input:checked + .k-Form-Radio__label::before{border-width:", ";background-color:var(--color-primary-500);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E\");}&.k-Form-Radio--error .k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{background-color:var(--color-danger-500);}.k-Form-Radio__input:disabled + .k-Form-Radio__label::before{background-color:var(--color-grey-500);}}&:hover{.k-Form-Radio__label::before{border-color:var(--color-primary-300);}.k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{border-color:var(--color-primary-500);}}&:active,&:focus{.k-Form-Radio__label::before{border-color:var(--color-primary-500);}.k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{border-color:var(--color-primary-500);}}&.k-Form-Radio--error{.k-Form-Radio__label::before{border-color:var(--color-danger-300);}.k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before{border-color:var(--color-danger-500);}}.k-Form-Radio__input:disabled{cursor:not-allowed;& + .k-Form-Radio__label{color:var(--color-grey-600);cursor:not-allowed;}& + .k-Form-Radio__label::before{background-color:var(--color-grey-000);border-color:var(--color-grey-400);}&:checked + .k-Form-Radio__label::before{background-color:var(--color-grey-000);border-color:var(--color-grey-500);}}"], (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(16 + 10), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(14), _typographyConfig.default.fontStyles['500'], _typographyConfig.default.fontStyles['400'], _typographyConfig.default.fontStyles['700'], _typographyConfig.default.fontStyles['500'], (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(16 + 10), (0, _typography.pxToRem)(16 + 10 + 10), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(19), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(2));

const Radio = _ref => {
  let {
    className,
    id,
    children,
    inputClassName,
    text,
    error,
    disabled,
    design,
    fontWeight,
    // Deprecated
    weight,
    ...inputProps
  } = _ref;
  (0, _deprecated.checkDeprecatedWeights)(weight);
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
    className: (0, _classnames.default)('k-Form-Radio__labelText', "k-Form-Radio__labelText--" + (fontWeight || weight), {
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
  fontWeight: (0, _deprecated2.default)(_propTypes.default.string, 'Prefere use `weight` prop instead'),
  weight: _propTypes.default.oneOf(['400', '500', '700'])
};
Radio.defaultProps = {
  error: false,
  disabled: false,
  design: 'disc',
  weight: '500'
};