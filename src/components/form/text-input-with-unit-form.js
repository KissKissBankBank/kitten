"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithUnitForm = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../components/layout/marger");

var _grid = require("../../components/grid/grid");

var _textInputWithUnit = require("../../components/form/text-input-with-unit");

var _text = require("../../components/typography/text");

var _label = require("../../components/form/label");

var _button2 = require("../../components/buttons/button");

var _screenConfig = require("../../constants/screen-config");

var _button;

var Button = (0, _radium.default)(_button2.Button);
var Grid = (0, _radium.default)(_grid.Grid);
var Marger = (0, _radium.default)(_marger.Marger);

var TextInputWithUnitForm = function TextInputWithUnitForm(_ref) {
  var align = _ref.align,
      formIsDisabled = _ref.formIsDisabled,
      inputId = _ref.inputId,
      inputPlaceholder = _ref.inputPlaceholder,
      inputUnit = _ref.inputUnit,
      inputLabel = _ref.inputLabel,
      inputDefaultValue = _ref.inputDefaultValue,
      inputIsOnError = _ref.inputIsOnError,
      errorMessage = _ref.errorMessage,
      buttonLabel = _ref.buttonLabel,
      onButtonMouseEnter = _ref.onButtonMouseEnter,
      onButtonMouseLeave = _ref.onButtonMouseLeave,
      onFormSubmit = _ref.onFormSubmit,
      onInputBlur = _ref.onInputBlur,
      onInputChange = _ref.onInputChange,
      onInputFocus = _ref.onInputFocus,
      version = _ref.version;
  var formStyle = align === 'center' && styles.form.centered;
  var isTinyVersion = version === 'tiny';
  var gridColProps = isTinyVersion ? {} : {
    'col-xs': 7,
    'col-m': 5
  };
  var buttonStyles = isTinyVersion ? styles.button.tinyVersion : styles.button;
  return _react.default.createElement("form", {
    onSubmit: onFormSubmit,
    style: styles.form.grid
  }, _react.default.createElement(Marger, {
    top: "3",
    bottom: !inputIsOnError ? 3 : 1
  }, _react.default.createElement(Grid, {
    style: formStyle
  }, _react.default.createElement(_grid.GridCol, gridColProps, _react.default.createElement(Marger, {
    bottom: "1.5"
  }, _react.default.createElement(_label.Label, {
    size: "micro",
    htmlFor: inputId
  }, inputLabel)), _react.default.createElement(Marger, {
    top: "1.5",
    bottom: inputIsOnError ? 1 : null
  }, _react.default.createElement(_textInputWithUnit.TextInputWithUnit, {
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
  })), inputIsOnError && _react.default.createElement(Marger, {
    top: "1"
  }, _react.default.createElement(_text.Text, {
    size: "micro",
    color: "error",
    weight: "regular"
  }, errorMessage))))), _react.default.createElement(Marger, {
    style: formStyle
  }, _react.default.createElement(_radium.StyleRoot, {
    style: buttonStyles
  }, _react.default.createElement(Button, {
    size: "big",
    modifier: "helium",
    type: "submit",
    "aria-label": buttonLabel,
    style: buttonStyles,
    onMouseEnter: onButtonMouseEnter,
    onMouseLeave: onButtonMouseLeave,
    disabled: formIsDisabled
  }, buttonLabel))));
};

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
var styles = {
  form: {
    grid: {
      margin: 0,
      padding: 0
    },
    centered: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  button: (_button = {}, (0, _defineProperty2.default)(_button, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    width: '100%'
  }), (0, _defineProperty2.default)(_button, "tinyVersion", {
    width: '100%'
  }), _button)
};