"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormAmountAndCurrency = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInputAndSelect = require("kitten/components/form/text-input-and-select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormAmountAndCurrency = function FormAmountAndCurrency(props) {
  var currencyOptions = props.currencyOptions,
      currencyName = props.currencyName,
      currencyValue = props.currencyValue,
      textInputAndSelectProps = _objectWithoutProperties(props, ["currencyOptions", "currencyName", "currencyValue"]);

  return _react.default.createElement(_textInputAndSelect.TextInputAndSelect, _extends({
    selectOptions: currencyOptions,
    selectName: currencyName,
    selectValue: currencyValue,
    key: currencyName,
    type: "number"
  }, textInputAndSelectProps));
};

exports.FormAmountAndCurrency = FormAmountAndCurrency;
FormAmountAndCurrency.defaultProps = {
  tiny: false,
  disabled: false,
  currencyOptions: [{
    value: 'eur',
    label: 'EUR'
  }],
  currencyName: null,
  currencyValue: null,
  digits: null // 2 or 12 for now

};