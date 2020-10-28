import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { Component } from 'react';
import { FieldLabel } from './components/label';
import { FieldInput } from './components/input';
import { FieldError } from './components/error';
import { FieldRadioButtonSet } from './components/radio-button-set';
import { FieldSelect } from './components/select';
import { FieldCheckbox } from './components/checkbox';
import { FieldPassword } from './components/password';
import { FieldAutocomplete } from './components/autocomplete';
export var Field = /*#__PURE__*/function (_Component) {
  _inherits(Field, _Component);

  var _super = _createSuper(Field);

  function Field() {
    var _this;

    _classCallCheck(this, Field);

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
}(Component);
Field.Label = FieldLabel;
Field.Input = FieldInput;
Field.RadioButtonSet = FieldRadioButtonSet;
Field.Select = FieldSelect;
Field.Checkbox = FieldCheckbox;
Field.ErrorMessage = FieldError;
Field.Password = FieldPassword;
Field.Autocomplete = FieldAutocomplete;