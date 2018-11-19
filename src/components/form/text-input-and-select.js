"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputAndSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _selectWithState = require("kitten/components/form/select-with-state");

var _textInput = require("kitten/components/form/text-input");

var _TextInputAndSelect$d;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInputAndSelect = function TextInputAndSelect(props) {
  var className = props.className,
      tiny = props.tiny,
      disabled = props.disabled,
      selectOptions = props.selectOptions,
      selectName = props.selectName,
      selectValue = props.selectValue,
      onSelectChange = props.onSelectChange,
      errorOnSelect = props.errorOnSelect,
      validOnSelect = props.validOnSelect,
      appendSelect = props.appendSelect,
      textInputProps = _objectWithoutProperties(props, ["className", "tiny", "disabled", "selectOptions", "selectName", "selectValue", "onSelectChange", "errorOnSelect", "validOnSelect", "appendSelect"]); // TODO: use another prop that digits to handle
  // `k-FormComposer__element--main` class.


  var inputWrapperClassName = (0, _classnames.default)('k-FormComposer__element', {
    'k-FormComposer__element--main': !props.digits
  }, className); // TODO: handle key without currencyName prop

  var renderTextInputWrapper = function renderTextInputWrapper() {
    return _react.default.createElement("div", {
      className: inputWrapperClassName,
      key: "".concat(props.currencyName, "1")
    }, _react.default.createElement(_textInput.TextInput, _extends({
      tiny: tiny,
      disabled: disabled
    }, textInputProps)));
  };

  var renderSelectWrapper = function renderSelectWrapper() {
    return _react.default.createElement("div", {
      className: "k-FormComposer__element",
      key: "".concat(props.currencyName, "2")
    }, _react.default.createElement(_selectWithState.SelectWithState, {
      name: selectName,
      options: selectOptions,
      value: selectValue,
      tiny: tiny,
      onInputChange: onSelectChange,
      error: errorOnSelect,
      valid: validOnSelect,
      disabled: disabled
    }));
  };

  var renderTextInputAndSelect = function renderTextInputAndSelect() {
    if (appendSelect) {
      return [renderSelectWrapper(), renderTextInputWrapper()];
    }

    return [renderTextInputWrapper(), renderSelectWrapper()];
  };

  return _react.default.createElement("div", {
    className: "k-FormComposer"
  }, renderTextInputAndSelect());
};

exports.TextInputAndSelect = TextInputAndSelect;
TextInputAndSelect.defaultProps = (_TextInputAndSelect$d = {
  tiny: false,
  disabled: false,
  selectOptions: [{
    value: 'myValue',
    label: 'My label'
  }],
  selectName: null,
  selectValue: null,
  onSelectChange: function onSelectChange() {},
  errorOnSelect: false,
  validOnSelect: false
}, _defineProperty(_TextInputAndSelect$d, "disabled", false), _defineProperty(_TextInputAndSelect$d, "digits", null), _defineProperty(_TextInputAndSelect$d, "appendSelect", false), _TextInputAndSelect$d);