"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Field = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _label = require("./components/label");

var _input = require("./components/input");

var _error = require("./components/error");

var _radioButtonSet = require("./components/radio-button-set");

var _checkbox = require("./components/checkbox");

var _password = require("./components/password");

var _autocomplete = require("./components/autocomplete");

var Field = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Field, _Component);

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
}(_react.Component);

exports.Field = Field;
Field.Label = _label.FieldLabel;
Field.Input = _input.FieldInput;
Field.RadioButtonSet = _radioButtonSet.FieldRadioButtonSet;
Field.Checkbox = _checkbox.FieldCheckbox;
Field.ErrorMessage = _error.FieldError;
Field.Password = _password.FieldPassword;
Field.Autocomplete = _autocomplete.FieldAutocomplete;