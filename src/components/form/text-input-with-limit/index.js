"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithLimit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var errorColor = (0, _styledComponents.css)(["", ""], function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.error);
});
var FocusTextInput = (0, _styledComponents.default)(_textInput.TextInput).withConfig({
  displayName: "text-input-with-limit__FocusTextInput",
  componentId: "ufrmmb-0"
})([":focus + div{color:", ";", "}"], _colorsConfig.default.font1, errorColor);

var StyledTextInputWithLimit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-limit__StyledTextInputWithLimit",
  componentId: "ufrmmb-1"
})(["position:relative;display:block;"]);

var StyledCounter = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-limit__StyledCounter",
  componentId: "ufrmmb-2"
})(["", ";font-size:", ";line-height:1.3;position:absolute;right:0;top:0;margin-top:", ";margin-right:", ";color:", ";text-shadow:", " 0 0 ", ",-", " 0 0 ", ",0 ", " 0 ", ",0 -", " 0 ", ",", " ", " ", ",-", " -", " 0 ", ",", " -", " 0 ", ",-", " ", " 0 ", ";pointer-events:none;", " ", ""], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), _colorsConfig.default.font2, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, errorColor, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(["text-shadow:none;"]);
});

var TextInputWithLimit = function TextInputWithLimit(_ref3) {
  var tiny = _ref3.tiny,
      limit = _ref3.limit,
      _onChange = _ref3.onChange,
      disabled = _ref3.disabled,
      value = _ref3.value,
      defaultValue = _ref3.defaultValue,
      others = (0, _objectWithoutProperties2.default)(_ref3, ["tiny", "limit", "onChange", "disabled", "value", "defaultValue"]);

  var _useState = (0, _react.useState)(value || defaultValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      textValue = _useState2[0];

  var _useState3 = (0, _react.useState)(textValue.length),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      length = _useState4[0],
      setLength = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithLimit, null, /*#__PURE__*/_react.default.createElement(FocusTextInput, (0, _extends2.default)({
    onChange: function onChange(e) {
      var value = e.target.value;
      setLength(value.length);

      _onChange(e);
    },
    disabled: disabled,
    tiny: tiny,
    defaultValue: textValue
  }, others)), /*#__PURE__*/_react.default.createElement(StyledCounter, {
    error: length > limit,
    disabled: disabled
  }, limit - length));
};

exports.TextInputWithLimit = TextInputWithLimit;
TextInputWithLimit.propTypes = {
  limit: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  error: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  defaultValue: _propTypes.default.string
};
TextInputWithLimit.defaultProps = {
  limit: 80,
  disabled: false,
  tiny: false,
  error: false,
  defaultValue: '',
  onChange: function onChange() {}
};