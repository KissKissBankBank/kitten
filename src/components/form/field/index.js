"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Field = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

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

var Field = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Field, _React$Component);

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
        return /*#__PURE__*/_react.default.createElement(Component, null, children);
      }

      return children;
    };

    return _this;
  }

  return Field;
}(_react.default.Component);

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