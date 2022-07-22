"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DefaultExample = exports.CustomExample = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _field = require("../field");

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DefaultExample = () => {
  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm, null, /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Number, null), /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Expiry, null), /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Cvc, null));
};

exports.DefaultExample = DefaultExample;

const CustomExample = () => {
  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm, null, /*#__PURE__*/_react.default.createElement(Number, null), /*#__PURE__*/_react.default.createElement(Expiry, null), /*#__PURE__*/_react.default.createElement(Cvc, null));
};

exports.CustomExample = CustomExample;

const Number = () => {
  const [error, setError] = (0, _react.useState)(false);

  const handleBlur = e => {
    setError((0, _isEmpty.default)(e.target.value));
  };

  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Number, {
    label: "Num\xE9ro de carte",
    fieldComponent: props => /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: "k-u-margin-bottom-triple"
    })),
    labelComponent: _ref => {
      let {
        children,
        ...props
      } = _ref;
      return /*#__PURE__*/_react.default.createElement(_field.Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: props => /*#__PURE__*/_react.default.createElement(_field.Field.Input, (0, _extends2.default)({}, props, {
      error: error,
      onBlur: handleBlur
    })),
    errorComponent: () => {
      if (!error) return null;
      return /*#__PURE__*/_react.default.createElement(_field.Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

const Expiry = () => {
  const [error, setError] = (0, _react.useState)(false);

  const handleBlur = e => {
    setError((0, _isEmpty.default)(e.target.value));
  };

  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Expiry, {
    label: "Date de validit\xE9",
    fieldComponent: props => /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: "k-u-margin-bottom-triple"
    })),
    labelComponent: _ref2 => {
      let {
        children,
        ...props
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_field.Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: props => /*#__PURE__*/_react.default.createElement(_field.Field.Input, (0, _extends2.default)({}, props, {
      placeholder: "MM/AA",
      digits: 6,
      error: error,
      onBlur: handleBlur
    })),
    errorComponent: () => {
      if (!error) return null;
      return /*#__PURE__*/_react.default.createElement(_field.Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

const Cvc = () => {
  const [error, setError] = (0, _react.useState)(false);

  const handleBlur = e => {
    setError((0, _isEmpty.default)(e.target.value));
  };

  return /*#__PURE__*/_react.default.createElement(_index.CreditCardForm.Cvc, {
    label: "Cryptogramme visuel",
    fieldComponent: props => /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: "k-u-margin-bottom-triple"
    })),
    labelComponent: _ref3 => {
      let {
        children,
        ...props
      } = _ref3;
      return /*#__PURE__*/_react.default.createElement(_field.Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: props => /*#__PURE__*/_react.default.createElement(_field.Field.Input, (0, _extends2.default)({}, props, {
      digits: 6,
      error: error,
      onBlur: handleBlur
    })),
    errorComponent: () => {
      if (!error) return null;
      return /*#__PURE__*/_react.default.createElement(_field.Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};