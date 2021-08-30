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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var StyledTextInputWithLimit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-limit__StyledTextInputWithLimit",
  componentId: "ufrmmb-0"
})(["position:relative;display:block;.k-Form-TextInputWithLimit__limitNumber{", ";font-size:", ";line-height:1.3;position:absolute;right:", ";top:", ";color:", ";text-shadow:", " 0 0 ", ",-", " 0 0 ", ",0 ", " 0 ", ",0 -", " 0 ", ",", " ", " ", ",-", " -", " 0 ", ",", " -", " 0 ", ",-", " ", " 0 ", ";pointer-events:none;.k-Form-TextInputWithLimit__limitNumber--disabled{text-shadow:none;}}&:focus + .k-Form-TextInputWithLimit__limitNumber,&:focus-within + .k-Form-TextInputWithLimit__limitNumber{color:", ";}.k-Form-TextInputWithLimit__limitNumber--error{color:", " !important;}.k-Form-TextInput__textareaContainer--orion,.k-Form-TextInput--orion{& + .k-Form-TextInputWithLimit__limitNumber{top:initial;bottom:", ";right:", ";}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), _colorsConfig.default.font2, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.error, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15));

var TextInputWithLimit = function TextInputWithLimit(_ref) {
  var limit = _ref.limit,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      others = (0, _objectWithoutProperties2.default)(_ref, ["limit", "onChange", "disabled", "value", "defaultValue"]);

  var _useState = (0, _react.useState)(value || defaultValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      textValue = _useState2[0];

  var _useState3 = (0, _react.useState)(textValue.length),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      length = _useState4[0],
      setLength = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithLimit, {
    className: "k-Form-TextInputWithLimit"
  }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    onChange: function onChange(e) {
      var value = e.target.value;
      setLength(value.length);

      _onChange(e);
    },
    disabled: disabled,
    defaultValue: textValue
  }, others, {
    className: (0, _classnames.default)('k-Form-TextInputWithLimit__input')
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-Form-TextInputWithLimit__limitNumber', {
      'k-Form-TextInputWithLimit__limitNumber--disabled': disabled,
      'k-Form-TextInputWithLimit__limitNumber--error': length > limit
    })
  }, limit - length));
};

exports.TextInputWithLimit = TextInputWithLimit;
TextInputWithLimit.propTypes = {
  limit: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  defaultValue: _propTypes.default.string
};
TextInputWithLimit.defaultProps = {
  limit: 80,
  disabled: false,
  error: false,
  defaultValue: '',
  onChange: function onChange() {}
};