import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _TextInputAndSelect$d;

import React from 'react';
import classNames from 'classnames';
import { SelectWithState } from '../../components/form/select-with-state';
import { TextInput } from '../../components/form/text-input';
export var TextInputAndSelect = function TextInputAndSelect(props) {
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


  var inputWrapperClassName = classNames('k-FormComposer__element', {
    'k-FormComposer__element--main': !props.digits
  }, className); // TODO: handle key without currencyName prop

  var renderTextInputWrapper = function renderTextInputWrapper() {
    return /*#__PURE__*/React.createElement("div", {
      className: inputWrapperClassName,
      key: "".concat(props.currencyName, "1")
    }, /*#__PURE__*/React.createElement(TextInput, _extends({
      tiny: tiny,
      disabled: disabled
    }, textInputProps)));
  };

  var renderSelectWrapper = function renderSelectWrapper() {
    return /*#__PURE__*/React.createElement("div", {
      className: "k-FormComposer__element",
      key: "".concat(props.currencyName, "2")
    }, /*#__PURE__*/React.createElement(SelectWithState, {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "k-FormComposer"
  }, renderTextInputAndSelect());
};
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