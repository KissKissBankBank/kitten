"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Field = void 0;

var _react = _interopRequireDefault(require("react"));

var _label = require("./components/label");

var _input = require("./components/input");

var _error = require("./components/error");

var _help = require("./components/help");

var _radioSet = require("./components/radio-set");

var _radioButtonSet = require("./components/radio-button-set");

var _checkbox = require("./components/checkbox");

var _password = require("./components/password");

var _autocomplete = require("./components/autocomplete");

class Field extends _react.default.Component {
  constructor() {
    super(...arguments);

    this.render = () => {
      const {
        tag,
        children
      } = this.props;
      const Component = tag;

      if (!!tag) {
        return /*#__PURE__*/_react.default.createElement(Component, null, children);
      }

      return children;
    };
  }

}

exports.Field = Field;
Field.Label = _label.FieldLabel;
Field.Input = _input.FieldInput;
Field.RadioSet = _radioSet.FieldRadioSet;
Field.RadioButtonSet = _radioButtonSet.FieldRadioButtonSet;
Field.Checkbox = _checkbox.FieldCheckbox;
Field.ErrorMessage = _error.FieldError;
Field.Help = _help.FieldHelp;
Field.Password = _password.FieldPassword;
Field.Autocomplete = _autocomplete.FieldAutocomplete;