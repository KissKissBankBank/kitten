"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Cvc = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _ = require("../");

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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