"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInputWithLimit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../form/input/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["limit", "onChange", "disabled", "value", "defaultValue"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledTextInputWithLimit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-limit__StyledTextInputWithLimit",
  componentId: "sc-1n650p3-0"
})(["position:relative;display:block;.k-Form-TextInputWithLimit__limitNumber{", ";font-size:", ";line-height:1.3;position:absolute;bottom:", ";right:", ";color:var(--color-grey-600);text-shadow:", " 0 0 var(--color-grey-000),-", " 0 0 var(--color-grey-000),0 ", " 0 var(--color-grey-000),0 -", " 0 var(--color-grey-000),", " ", " var(--color-grey-000),-", " -", " 0 var(--color-grey-000),", " -", " 0 var(--color-grey-000),-", " ", " 0 var(--color-grey-000);pointer-events:none;&.k-Form-TextInputWithLimit__limitNumber--disabled{text-shadow:none;}}&:focus + .k-Form-TextInputWithLimit__limitNumber,&:focus-within + .k-Form-TextInputWithLimit__limitNumber{color:var(--color-grey-600);}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1));

var TextInputWithLimit = function TextInputWithLimit(_ref) {
  var limit = _ref.limit,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(value || defaultValue),
      textValue = _useState[0];

  var _useState2 = (0, _react.useState)(textValue.length),
      length = _useState2[0],
      setLength = _useState2[1];

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