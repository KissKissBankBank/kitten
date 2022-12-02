"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RadioButtonSet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radioButton = require("../../form/radio-button");

var _typography = require("../../../helpers/utils/typography");

var _label = require("../../form/label");

var _deprecated = require("../../../helpers/utils/deprecated");

var _deprecated2 = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

const StyledRadioButtonSet = _styledComponents.default.fieldset.withConfig({
  displayName: "radio-button-set__StyledRadioButtonSet",
  componentId: "sc-1bde3vb-0"
})(["margin:0;padding:0;border:0;line-height:1.3rem;& > legend{padding:0;}.k-Form-RadioButtonSet__label{margin-bottom:", ";}.k-Form-RadioButtonSet__radioContainer{display:flex;flex-direction:column;gap:", " 0;.k-Form-RadioButtonSet__radioButton.k-Form-RadioButton{margin:0;}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5));

const RadioButtonSet = _ref => {
  let {
    items,
    disabled,
    className,
    name,
    error,
    design,
    label,
    children,
    size,
    fontWeight,
    // Deprecated
    weight,
    paragraphStyle,
    labelProps,
    ...props
  } = _ref;
  (0, _deprecated.checkDeprecatedWeights)(weight);
  return /*#__PURE__*/_react.default.createElement(StyledRadioButtonSet, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-RadioButtonSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/_react.default.createElement(_label.Label, (0, _extends2.default)({
    tag: "legend"
  }, labelProps, {
    className: (0, _classnames.default)('k-Form-RadioButtonSet__label', labelProps.className)
  }), label), children && !label && /*#__PURE__*/_react.default.createElement("legend", null, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-RadioButtonSet__radioContainer"
  }, items.map(_ref2 => {
    let {
      id,
      className,
      ...itemProps
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_radioButton.RadioButton, (0, _extends2.default)({
      id: id,
      design: design,
      error: error,
      size: size,
      weight: fontWeight || weight,
      paragraphStyle: paragraphStyle,
      name: name,
      key: id
    }, itemProps, {
      className: (0, _classnames.default)('k-Form-RadioButtonSet__radioButton', className)
    }));
  })));
};

exports.RadioButtonSet = RadioButtonSet;
RadioButtonSet.propTypes = {
  name: _propTypes.default.string.isRequired,
  error: _propTypes.default.bool,
  label: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired,
    defaultChecked: _propTypes.default.bool
  })),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  design: _propTypes.default.oneOf(['disc', 'check']),
  disabled: _propTypes.default.bool,
  labelProps: _propTypes.default.object,
  fontWeight: (0, _deprecated2.default)(_propTypes.default.string, 'Prefere use `weight` prop instead'),
  weight: _propTypes.default.oneOf(['400', '500', '600', '700']),
  paragraphStyle: _propTypes.default.bool
};
RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  label: null,
  items: [],
  design: 'disc',
  disabled: false,
  labelProps: {},
  size: 'medium',
  weight: '500',
  paragraphStyle: false
};