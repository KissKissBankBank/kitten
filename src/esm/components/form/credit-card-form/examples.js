import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";
var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children"];
import React, { useState } from 'react';
import { CreditCardForm } from './index';
import { Field } from '../field';
import isEmpty from 'lodash/fp/isEmpty';
export var DefaultExample = function DefaultExample() {
  return /*#__PURE__*/React.createElement(CreditCardForm, null, /*#__PURE__*/React.createElement(CreditCardForm.Number, null), /*#__PURE__*/React.createElement(CreditCardForm.Expiry, null), /*#__PURE__*/React.createElement(CreditCardForm.Cvc, null));
};
export var CustomExample = function CustomExample() {
  return /*#__PURE__*/React.createElement(CreditCardForm, null, /*#__PURE__*/React.createElement(Number, null), /*#__PURE__*/React.createElement(Expiry, null), /*#__PURE__*/React.createElement(Cvc, null));
};

var Number = function Number() {
  var _useState = useState(false),
      error = _useState[0],
      setError = _useState[1];

  var handleBlur = function handleBlur(e) {
    setError(isEmpty(e.target.value));
  };

  return /*#__PURE__*/React.createElement(CreditCardForm.Number, {
    label: "Num\xE9ro de carte",
    fieldComponent: function fieldComponent(props) {
      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        className: "k-u-margin-bottom-triple"
      }));
    },
    labelComponent: function labelComponent(_ref) {
      var children = _ref.children,
          props = _objectWithoutPropertiesLoose(_ref, _excluded);

      return /*#__PURE__*/React.createElement(Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: function inputComponent(props) {
      return /*#__PURE__*/React.createElement(Field.Input, _extends({}, props, {
        error: error,
        onBlur: handleBlur
      }));
    },
    errorComponent: function errorComponent() {
      if (!error) return null;
      return /*#__PURE__*/React.createElement(Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

var Expiry = function Expiry() {
  var _useState2 = useState(false),
      error = _useState2[0],
      setError = _useState2[1];

  var handleBlur = function handleBlur(e) {
    setError(isEmpty(e.target.value));
  };

  return /*#__PURE__*/React.createElement(CreditCardForm.Expiry, {
    label: "Date de validit\xE9",
    fieldComponent: function fieldComponent(props) {
      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        className: "k-u-margin-bottom-triple"
      }));
    },
    labelComponent: function labelComponent(_ref2) {
      var children = _ref2.children,
          props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

      return /*#__PURE__*/React.createElement(Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: function inputComponent(props) {
      return /*#__PURE__*/React.createElement(Field.Input, _extends({}, props, {
        placeholder: "MM/AA",
        digits: 6,
        error: error,
        onBlur: handleBlur
      }));
    },
    errorComponent: function errorComponent() {
      if (!error) return null;
      return /*#__PURE__*/React.createElement(Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

var Cvc = function Cvc() {
  var _useState3 = useState(false),
      error = _useState3[0],
      setError = _useState3[1];

  var handleBlur = function handleBlur(e) {
    setError(isEmpty(e.target.value));
  };

  return /*#__PURE__*/React.createElement(CreditCardForm.Cvc, {
    label: "Cryptogramme visuel",
    fieldComponent: function fieldComponent(props) {
      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        className: "k-u-margin-bottom-triple"
      }));
    },
    labelComponent: function labelComponent(_ref3) {
      var children = _ref3.children,
          props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

      return /*#__PURE__*/React.createElement(Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: function inputComponent(props) {
      return /*#__PURE__*/React.createElement(Field.Input, _extends({}, props, {
        digits: 6,
        error: error,
        onBlur: handleBlur
      }));
    },
    errorComponent: function errorComponent() {
      if (!error) return null;
      return /*#__PURE__*/React.createElement(Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};