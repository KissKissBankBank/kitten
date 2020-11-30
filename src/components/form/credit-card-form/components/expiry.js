"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expiry = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _ = require("../");

var limit = function limit(val, max) {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';
    } else if (val > max) {
      val = max;
    }
  }

  return val;
};

var cardExpiry = function cardExpiry(val) {
  var month = limit(val.substring(0, 2), '12');
  var fullYear = val.substring(2, 6);
  var year = fullYear.length === 4 ? fullYear.substring(2, 4) : fullYear.substring(0, 2);
  return val ? month + '/' + year : '';
};

var Expiry = function Expiry(_ref) {
  var label = _ref.label,
      Field = _ref.fieldComponent,
      Label = _ref.labelComponent,
      Input = _ref.inputComponent,
      Error = _ref.errorComponent;

  var _useFormContext = (0, _.useFormContext)(),
      expiry = _useFormContext.values.expiry,
      setInputValues = _useFormContext.setInputValues;

  var handleChange = function handleChange(_ref2) {
    var value = _ref2.value;
    var month = value.substring(0, 2);
    var year = value.substring(2, 4);
    var formattedValue = value ? month + '/' + year : '';
    setInputValues({
      expiry: formattedValue
    });
  };

  return /*#__PURE__*/_react.default.createElement(Field, null, /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: "frmCCExp"
  }, label), /*#__PURE__*/_react.default.createElement(_reactNumberFormat.default, {
    name: "cc-exp",
    id: "frmCCExp",
    autoComplete: "cc-exp",
    format: cardExpiry,
    inputMode: "numeric",
    placeholder: "MM/YY",
    customInput: Input,
    value: expiry,
    onValueChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(Error, null));
};

exports.Expiry = Expiry;
Expiry.propTypes = {
  label: _propTypes.default.string,
  fieldComponent: _propTypes.default.elementType,
  labelComponent: _propTypes.default.elementType,
  inputComponent: _propTypes.default.elementType,
  errorComponent: _propTypes.default.elementType
};
Expiry.defaultProps = {
  label: 'Card Number',
  fieldComponent: function fieldComponent(props) {
    return /*#__PURE__*/_react.default.createElement("div", props);
  },
  labelComponent: function labelComponent(props) {
    return /*#__PURE__*/_react.default.createElement("label", props);
  },
  inputComponent: function inputComponent(props) {
    return /*#__PURE__*/_react.default.createElement("input", props);
  },
  errorComponent: function errorComponent() {
    return null;
  }
};