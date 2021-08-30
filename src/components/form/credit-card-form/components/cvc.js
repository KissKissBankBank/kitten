"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cvc = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _ = require("../");

var _helpers = require("./helpers");

var Cvc = function Cvc(_ref) {
  var label = _ref.label,
      Field = _ref.fieldComponent,
      Label = _ref.labelComponent,
      Input = _ref.inputComponent,
      Error = _ref.errorComponent;

  var _useFormContext = (0, _.useFormContext)(),
      _useFormContext$value = _useFormContext.values,
      number = _useFormContext$value.number,
      cvc = _useFormContext$value.cvc,
      setInputValues = _useFormContext.setInputValues;

  var withCvc = (0, _helpers.withCode)(number);

  var handleChange = function handleChange(_ref2) {
    var value = _ref2.value;
    setInputValues({
      cvc: value
    });
  };

  (0, _react.useEffect)(function () {
    if (withCvc) return;
    setInputValues({
      cvc: ''
    });
  }, [withCvc]);
  if (!(0, _helpers.withCode)(number)) return null;
  return /*#__PURE__*/_react.default.createElement(Field, null, /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: "frmCCCVC"
  }, label), /*#__PURE__*/_react.default.createElement(_reactNumberFormat.default, {
    name: "cvc",
    id: "frmCCCVC",
    autoComplete: "cc-csc",
    format: (0, _helpers.getCodeFormat)(number),
    inputMode: "numeric",
    placeholder: (0, _helpers.getCodeFormat)(number),
    customInput: Input,
    value: cvc,
    onValueChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(Error, null));
};

exports.Cvc = Cvc;
Cvc.propTypes = {
  label: _propTypes.default.string,
  fieldComponent: _propTypes.default.elementType,
  labelComponent: _propTypes.default.elementType,
  inputComponent: _propTypes.default.elementType,
  errorComponent: _propTypes.default.elementType
};
Cvc.defaultProps = {
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