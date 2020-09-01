"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormAmountAndCurrency = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _textInputAndSelect = require("../../../components/form/text-input-and-select");

var FormAmountAndCurrency = function FormAmountAndCurrency(props) {
  var currencyOptions = props.currencyOptions,
      currencyName = props.currencyName,
      currencyValue = props.currencyValue,
      textInputAndSelectProps = (0, _objectWithoutProperties2.default)(props, ["currencyOptions", "currencyName", "currencyValue"]);
  return /*#__PURE__*/_react.default.createElement(_textInputAndSelect.TextInputAndSelect, (0, _extends2.default)({
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