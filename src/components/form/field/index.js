"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = require("react");

var _label = require("./components/label");

var _input = require("./components/input");

var _error = require("./components/error");

var _radioButtonSet = require("./components/radio-button-set");

var _select = require("./components/select");

var _checkbox = require("./components/checkbox");

var _password = require("./components/password");

var _autocomplete = require("./components/autocomplete");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Field = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Field, _Component);

  var _super = _createSuper(Field);

  function Field() {
    var _this;

    (0, _classCallCheck2.default)(this, Field);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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
Field.Select = _select.FieldSelect;
Field.Checkbox = _checkbox.FieldCheckbox;
Field.ErrorMessage = _error.FieldError;
Field.Password = _password.FieldPassword;
Field.Autocomplete = _autocomplete.FieldAutocomplete;