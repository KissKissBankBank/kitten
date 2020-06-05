"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputAndSelect = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _selectWithState = require("../../components/form/select-with-state");

var _textInput = require("../../components/form/text-input");

var _TextInputAndSelect$d;

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
      textInputProps = (0, _objectWithoutProperties2.default)(props, ["className", "tiny", "disabled", "selectOptions", "selectName", "selectValue", "onSelectChange", "errorOnSelect", "validOnSelect", "appendSelect"]); // TODO: use another prop that digits to handle
  // `k-FormComposer__element--main` class.

  var inputWrapperClassName = (0, _classnames.default)('k-FormComposer__element', {
    'k-FormComposer__element--main': !props.digits
  }, className); // TODO: handle key without currencyName prop

  var renderTextInputWrapper = function renderTextInputWrapper() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: inputWrapperClassName,
      key: "".concat(props.currencyName, "1")
    }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
      tiny: tiny,
      disabled: disabled
    }, textInputProps)));
  };

  var renderSelectWrapper = function renderSelectWrapper() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "k-FormComposer__element",
      key: "".concat(props.currencyName, "2")
    }, /*#__PURE__*/_react.default.createElement(_selectWithState.SelectWithState, {
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

  return /*#__PURE__*/_react.default.createElement("div", {
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
}, (0, _defineProperty2.default)(_TextInputAndSelect$d, "disabled", false), (0, _defineProperty2.default)(_TextInputAndSelect$d, "digits", null), (0, _defineProperty2.default)(_TextInputAndSelect$d, "appendSelect", false), _TextInputAndSelect$d);