"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditCardForm = exports.useFormContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

var _number = require("./components/number");

var _expiry = require("./components/expiry");

var _cvc = require("./components/cvc");

var defaultProps = {
  values: {
    number: '',
    expiry: '',
    cvc: ''
  },
  onChange: function onChange(_values) {}
};
var FormContext = (0, _react.createContext)(defaultProps);

var useFormContext = function useFormContext() {
  return (0, _react.useContext)(FormContext);
};

exports.useFormContext = useFormContext;

var CreditCardForm = function CreditCardForm(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useState = (0, _react.useState)((0, _merge.default)(defaultProps.values)(props.values)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputValues = _useState2[0],
      updateInputValues = _useState2[1];

  var contextValues = (0, _merge.default)(defaultProps)((0, _extends2.default)({}, props, {
    values: inputValues,
    setInputValues: function setInputValues(v) {
      updateInputValues((0, _merge.default)(inputValues)(v));
    }
  }));
  (0, _react.useEffect)(function () {
    contextValues.onChange(inputValues);
  }, [inputValues]);
  return /*#__PURE__*/_react.default.createElement(FormContext.Provider, {
    value: contextValues
  }, children);
};

exports.CreditCardForm = CreditCardForm;
CreditCardForm.Number = _number.Number;
CreditCardForm.Expiry = _expiry.Expiry;
CreditCardForm.Cvc = _cvc.Cvc;