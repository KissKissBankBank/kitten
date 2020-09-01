"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormPhoneNumber = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _textInputAndSelect = require("../../../components/form/text-input-and-select");

var FormPhoneNumber = function FormPhoneNumber(props) {
  var areaOptions = props.areaOptions,
      areaName = props.areaName,
      areaValue = props.areaValue,
      textInputAndSelectProps = (0, _objectWithoutProperties2.default)(props, ["areaOptions", "areaName", "areaValue"]);
  return /*#__PURE__*/_react.default.createElement(_textInputAndSelect.TextInputAndSelect, (0, _extends2.default)({
    selectOptions: areaOptions,
    selectName: areaName,
    selectValue: areaValue,
    appendSelect: true,
    type: "tel"
  }, textInputAndSelectProps));
};

exports.FormPhoneNumber = FormPhoneNumber;
FormPhoneNumber.defaultProps = {
  tiny: false,
  disabled: false,
  areaOptions: [{
    value: '+33',
    label: '+33'
  }],
  areaName: null,
  areaValue: null,
  digits: null // 2 or 12 for now

};