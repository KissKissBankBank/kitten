import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import "core-js/modules/es.array.concat.js";
import { Component } from 'react';
import { FieldLabel } from './components/label';
import { FieldInput } from './components/input';
import { FieldError } from './components/error';
import { FieldRadioButtonSet } from './components/radio-button-set';
import { FieldCheckbox } from './components/checkbox';
import { FieldPassword } from './components/password';
import { FieldAutocomplete } from './components/autocomplete';
export var Field = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Field, _Component);

  function Field() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.render = function () {
      return _this.props.children;
    };

    return _this;
  }

  return Field;
}(Component);
Field.Label = FieldLabel;
Field.Input = FieldInput;
Field.RadioButtonSet = FieldRadioButtonSet;
Field.Checkbox = FieldCheckbox;
Field.ErrorMessage = FieldError;
Field.Password = FieldPassword;
Field.Autocomplete = FieldAutocomplete;