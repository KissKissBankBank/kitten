"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _visuallyHidden = require("../../accessibility/visually-hidden");

var _classnames = _interopRequireDefault(require("classnames"));

var StyledTextInputWithIcon = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-icon__StyledTextInputWithIcon",
  componentId: "rvt8kr-0"
})(["position:relative;.k-Form-TextInputWithIcon__input{padding-left:", ";}.k-Form-TextInputWithIcon__icon{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;left:0;top:0;width:", ";height:100%;&.k-Form-TextInputWithIcon__icon--disabled > svg{&[stroke]:not([stroke='none']),& [stroke]:not([stroke='none']){stroke:", ";}&[fill]:not([fill='none']),& [fill]:not([fill='none']){fill:", ";}}}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), _colorsConfig.default.font2, _colorsConfig.default.font2);

var TextInputWithIcon = function TextInputWithIcon(_ref) {
  var disabled = _ref.disabled,
      icon = _ref.icon,
      accessibilityLabel = _ref.accessibilityLabel,
      others = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "icon", "accessibilityLabel"]);
  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithIcon, {
    className: "k-Form-TextInputWithIcon"
  }, accessibilityLabel && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, accessibilityLabel), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-Form-TextInputWithIcon__input', others.className),
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true",
    className: (0, _classnames.default)('k-Form-TextInputWithIcon__icon', {
      'k-Form-TextInputWithIcon__icon--disabled': disabled
    })
  }, icon));
};

exports.TextInputWithIcon = TextInputWithIcon;
TextInputWithIcon.propTypes = {
  disabled: _propTypes.default.bool,
  accessibilityLabel: _propTypes.default.string,
  icon: _propTypes.default.node.isRequired
};
TextInputWithIcon.defaultProps = {
  accessibilityLabel: '',
  disabled: false
};