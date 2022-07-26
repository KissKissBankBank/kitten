"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Expiry = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _ = require("../");

const limit = (val, max) => {
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

const cardExpiry = val => {
  const month = limit(val.substring(0, 2), '12');
  const fullYear = val.substring(2, 6);
  const year = fullYear.length === 4 ? fullYear.substring(2, 4) : fullYear.substring(0, 2);
  return val ? month + '/' + year : '';
};

const Expiry = _ref => {
  let {
    label,
    fieldComponent: Field,
    labelComponent: Label,
    inputComponent: Input,
    errorComponent: Error
  } = _ref;
  const {
    values: {
      expiry
    },
    setInputValues
  } = (0, _.useFormContext)();

  const handleChange = _ref2 => {
    let {
      value
    } = _ref2;
    const month = value.substring(0, 2);
    const year = value.substring(2, 4);
    const formattedValue = value ? month + '/' + year : '';
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
  fieldComponent: props => /*#__PURE__*/_react.default.createElement("div", props),
  labelComponent: props => /*#__PURE__*/_react.default.createElement("label", props),
  inputComponent: props => /*#__PURE__*/_react.default.createElement("input", props),
  errorComponent: () => null
};