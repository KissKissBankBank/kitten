"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DefaultExample = exports.CustomExample = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _field = require("../field");

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DefaultExample = function DefaultExample() {
  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm, null, /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Number, null), /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Expiry, null), /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Cvc, null));
};

exports.DefaultExample = DefaultExample;

var CustomExample = function CustomExample() {
  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm, null, /*#__PURE__*/_react.default.createElement(Number, null), /*#__PURE__*/_react.default.createElement(Expiry, null), /*#__PURE__*/_react.default.createElement(Cvc, null));
};

exports.CustomExample = CustomExample;

var Number = function Number() {
  var _useState = (0, _react.useState)(false),
      error = _useState[0],
      setError = _useState[1];

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
          props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
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
  var _useState2 = (0, _react.useState)(false),
      error = _useState2[0],
      setError = _useState2[1];

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
          props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
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
  var _useState3 = (0, _react.useState)(false),
      error = _useState3[0],
      setError = _useState3[1];

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
          props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
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