import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { CreditCardForm } from './index';
import { Field } from '../field';
import isEmpty from 'lodash/fp/isEmpty';
export var DefaultExample = function DefaultExample() {
  return /*#__PURE__*/React.createElement(CreditCardForm, null, /*#__PURE__*/React.createElement(CreditCardForm.Number, null), /*#__PURE__*/React.createElement(CreditCardForm.Expiry, null), /*#__PURE__*/React.createElement(CreditCardForm.Cvc, null));
};
export var CustomExample = function CustomExample() {
  var handleChange = function handleChange(values) {
    console.warn('Values:', values);
  };

  return /*#__PURE__*/React.createElement(CreditCardForm, {
    onChange: handleChange
  }, /*#__PURE__*/React.createElement(Number, null), /*#__PURE__*/React.createElement(Expiry, null), /*#__PURE__*/React.createElement(Cvc, null));
};

var Number = function Number() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

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
          props = _objectWithoutProperties(_ref, ["children"]);

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
  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

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
          props = _objectWithoutProperties(_ref2, ["children"]);

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
  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

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
          props = _objectWithoutProperties(_ref3, ["children"]);

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