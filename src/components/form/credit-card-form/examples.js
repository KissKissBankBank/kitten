"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomExample = exports.DefaultExample = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _field = require("../field");

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var DefaultExample = function DefaultExample() {
  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm, null, /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Number, null), /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Expiry, null), /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Cvc, null));
};

exports.DefaultExample = DefaultExample;

var CustomExample = function CustomExample() {
  var handleChange = function handleChange(values) {
    console.warn('Values:', values);
  };

  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm, {
    onChange: handleChange
  }, /*#__PURE__*/_react.default.createElement(Number, null), /*#__PURE__*/_react.default.createElement(Expiry, null), /*#__PURE__*/_react.default.createElement(Cvc, null));
};

exports.CustomExample = CustomExample;

var Number = function Number() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var handleBlur = function handleBlur(e) {
    setError((0, _isEmpty.default)(e.target.value));
  };

  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Number, {
    label: "Num\xE9ro de carte",
    fieldComponent: function fieldComponent(props) {
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: "k-u-margin-bottom-triple"
      }));
    },
    labelComponent: function labelComponent(_ref) {
      var children = _ref.children,
          props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
      return /*#__PURE__*/_react.default.createElement(_field.Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: function inputComponent(props) {
      return /*#__PURE__*/_react.default.createElement(_field.Field.Input, (0, _extends2.default)({}, props, {
        error: error,
        onBlur: handleBlur
      }));
    },
    errorComponent: function errorComponent() {
      if (!error) return null;
      return /*#__PURE__*/_react.default.createElement(_field.Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

var Expiry = function Expiry() {
  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var handleBlur = function handleBlur(e) {
    setError((0, _isEmpty.default)(e.target.value));
  };

  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Expiry, {
    label: "Date de validit\xE9",
    fieldComponent: function fieldComponent(props) {
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: "k-u-margin-bottom-triple"
      }));
    },
    labelComponent: function labelComponent(_ref2) {
      var children = _ref2.children,
          props = (0, _objectWithoutProperties2.default)(_ref2, ["children"]);
      return /*#__PURE__*/_react.default.createElement(_field.Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: function inputComponent(props) {
      return /*#__PURE__*/_react.default.createElement(_field.Field.Input, (0, _extends2.default)({}, props, {
        placeholder: "MM/AA",
        digits: 6,
        error: error,
        onBlur: handleBlur
      }));
    },
    errorComponent: function errorComponent() {
      if (!error) return null;
      return /*#__PURE__*/_react.default.createElement(_field.Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

var Cvc = function Cvc() {
  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var handleBlur = function handleBlur(e) {
    setError((0, _isEmpty.default)(e.target.value));
  };

  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Cvc, {
    label: "Cryptogramme visuel",
    fieldComponent: function fieldComponent(props) {
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: "k-u-margin-bottom-triple"
      }));
    },
    labelComponent: function labelComponent(_ref3) {
      var children = _ref3.children,
          props = (0, _objectWithoutProperties2.default)(_ref3, ["children"]);
      return /*#__PURE__*/_react.default.createElement(_field.Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: function inputComponent(props) {
      return /*#__PURE__*/_react.default.createElement(_field.Field.Input, (0, _extends2.default)({}, props, {
        digits: 6,
        error: error,
        onBlur: handleBlur
      }));
    },
    errorComponent: function errorComponent() {
      if (!error) return null;
      return /*#__PURE__*/_react.default.createElement(_field.Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};