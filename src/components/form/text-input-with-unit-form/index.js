"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithUnitForm = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../components/layout/marger");

var _grid = require("../../../components/grid/grid");

var _textInputWithUnit = require("../../../components/form/text-input-with-unit");

var _text = require("../../../components/typography/text");

var _label = require("../../../components/form/label");

var _button = require("../../../components/buttons/button");

var _screenConfig = require("../../../constants/screen-config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledFormContainer = _styledComponents.default.form.withConfig({
  displayName: "text-input-with-unit-form__StyledFormContainer",
  componentId: "wjoixz-0"
})(["margin:0;padding:0;"]);

var StyledGridPosition = (0, _styledComponents.default)(function (_ref) {
  var align = _ref.align,
      others = (0, _objectWithoutProperties2.default)(_ref, ["align"]);
  return /*#__PURE__*/_react.default.createElement(_grid.Grid, others);
}).withConfig({
  displayName: "text-input-with-unit-form__StyledGridPosition",
  componentId: "wjoixz-1"
})(["", ""], function (_ref2) {
  var align = _ref2.align;
  return align === 'center' && (0, _styledComponents.css)(["display:flex;justify-content:center;"]);
});
var StyledButton = (0, _styledComponents.default)(function (_ref3) {
  var version = _ref3.version,
      others = (0, _objectWithoutProperties2.default)(_ref3, ["version"]);
  return /*#__PURE__*/_react.default.createElement(_button.Button, others);
}).withConfig({
  displayName: "text-input-with-unit-form__StyledButton",
  componentId: "wjoixz-2"
})(["@media (min-width:", "px){width:100%:}", ""], _screenConfig.ScreenConfig.S.min, function (_ref4) {
  var version = _ref4.version;
  return version === 'tiny' && (0, _styledComponents.css)(["width:100%;"]);
});

var TextInputWithUnitForm = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TextInputWithUnitForm, _PureComponent);

  var _super = _createSuper(TextInputWithUnitForm);

  function TextInputWithUnitForm() {
    (0, _classCallCheck2.default)(this, TextInputWithUnitForm);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TextInputWithUnitForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          align = _this$props.align,
          formIsDisabled = _this$props.formIsDisabled,
          inputId = _this$props.inputId,
          inputPlaceholder = _this$props.inputPlaceholder,
          inputUnit = _this$props.inputUnit,
          inputLabel = _this$props.inputLabel,
          inputDefaultValue = _this$props.inputDefaultValue,
          inputIsOnError = _this$props.inputIsOnError,
          errorMessage = _this$props.errorMessage,
          buttonLabel = _this$props.buttonLabel,
          onButtonMouseEnter = _this$props.onButtonMouseEnter,
          onButtonMouseLeave = _this$props.onButtonMouseLeave,
          onFormSubmit = _this$props.onFormSubmit,
          onInputBlur = _this$props.onInputBlur,
          onInputChange = _this$props.onInputChange,
          onInputFocus = _this$props.onInputFocus,
          version = _this$props.version;
      return /*#__PURE__*/_react.default.createElement(StyledFormContainer, {
        onSubmit: onFormSubmit
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "3",
        bottom: !inputIsOnError ? 3 : 1
      }, /*#__PURE__*/_react.default.createElement(StyledGridPosition, {
        align: align
      }, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        "col-m": version === 'tiny' ? 0 : 5,
        "col-xs": version === 'tiny' ? 0 : 7
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: "1.5"
      }, /*#__PURE__*/_react.default.createElement(_label.Label, {
        size: "micro",
        htmlFor: inputId
      }, inputLabel)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: inputIsOnError ? 1 : null
      }, /*#__PURE__*/_react.default.createElement(_textInputWithUnit.TextInputWithUnit, {
        error: inputIsOnError,
        id: inputId,
        type: "number",
        placeholder: inputPlaceholder,
        unit: inputUnit,
        disabled: formIsDisabled,
        onBlur: onInputBlur,
        onChange: onInputChange,
        onFocus: onInputFocus,
        defaultValue: inputDefaultValue,
        autoComplete: "off"
      })), inputIsOnError && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        size: "micro",
        color: "error",
        weight: "regular"
      }, errorMessage))))), /*#__PURE__*/_react.default.createElement(StyledGridPosition, {
        align: align
      }, /*#__PURE__*/_react.default.createElement(StyledButton, {
        size: "big",
        modifier: "helium",
        type: "submit",
        "aria-label": buttonLabel,
        onMouseEnter: onButtonMouseEnter,
        onMouseLeave: onButtonMouseLeave,
        disabled: formIsDisabled,
        version: version
      }, buttonLabel)));
    }
  }]);
  return TextInputWithUnitForm;
}(_react.PureComponent);

exports.TextInputWithUnitForm = TextInputWithUnitForm;
TextInputWithUnitForm.propTypes = {
  inputId: _propTypes.default.string.isRequired,
  inputPlaceholder: _propTypes.default.string,
  inputLabel: _propTypes.default.string.isRequired,
  inputUnit: _propTypes.default.string.isRequired,
  inputDefaultValue: _propTypes.default.string,
  onInputBlur: _propTypes.default.func,
  onInputChange: _propTypes.default.func,
  onInputFocus: _propTypes.default.func,
  inputIsOnError: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  buttonLabel: _propTypes.default.string.isRequired,
  onButtonMouseEnter: _propTypes.default.func,
  onButtonMouseLeave: _propTypes.default.func,
  align: _propTypes.default.string,
  formIsDisabled: _propTypes.default.bool,
  onFormSubmit: _propTypes.default.func,
  version: _propTypes.default.oneOf(['default', 'tiny'])
};
TextInputWithUnitForm.defaultProps = {
  inputId: '',
  inputLabel: '',
  inputUnit: '',
  buttonLabel: '',
  inputPlaceholder: '',
  inputDefaultValue: '',
  onInputBlur: function onInputBlur() {},
  onInputChange: function onInputChange() {},
  onInputFocus: function onInputFocus() {},
  inputIsOnError: false,
  errorMessage: '',
  onButtonMouseEnter: function onButtonMouseEnter() {},
  onButtonMouseLeave: function onButtonMouseLeave() {},
  formIsDisabled: false,
  onFormSubmit: function onFormSubmit() {},
  align: 'center',
  version: 'default'
};