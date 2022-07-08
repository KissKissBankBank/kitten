import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import { FieldLabel } from './components/label';
import { FieldInput } from './components/input';
import { FieldError } from './components/error';
import { FieldHelp } from './components/help';
import { FieldRadioSet } from './components/radio-set';
import { FieldRadioButtonSet } from './components/radio-button-set';
import { FieldCheckbox } from './components/checkbox';
import { FieldPassword } from './components/password';
import { FieldAutocomplete } from './components/autocomplete';
export var Field = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Field, _React$Component);

  function Field() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.render = function () {
      var _this$props = _this.props,
          tag = _this$props.tag,
          children = _this$props.children;
      var Component = tag;

      if (!!tag) {
        return /*#__PURE__*/React.createElement(Component, null, children);
      }

      return children;
    };

    return _this;
  }

  return Field;
}(React.Component);
Field.Label = FieldLabel;
Field.Input = FieldInput;
Field.RadioSet = FieldRadioSet;
Field.RadioButtonSet = FieldRadioButtonSet;
Field.Checkbox = FieldCheckbox;
Field.ErrorMessage = FieldError;
Field.Help = FieldHelp;
Field.Password = FieldPassword;
Field.Autocomplete = FieldAutocomplete;