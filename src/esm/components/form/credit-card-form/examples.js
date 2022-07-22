import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import { CreditCardForm } from './index';
import { Field } from '../field';
import isEmpty from 'lodash/fp/isEmpty';
export const DefaultExample = () => {
  return /*#__PURE__*/React.createElement(CreditCardForm, null, /*#__PURE__*/React.createElement(CreditCardForm.Number, null), /*#__PURE__*/React.createElement(CreditCardForm.Expiry, null), /*#__PURE__*/React.createElement(CreditCardForm.Cvc, null));
};
export const CustomExample = () => {
  return /*#__PURE__*/React.createElement(CreditCardForm, null, /*#__PURE__*/React.createElement(Number, null), /*#__PURE__*/React.createElement(Expiry, null), /*#__PURE__*/React.createElement(Cvc, null));
};

const Number = () => {
  const [error, setError] = useState(false);

  const handleBlur = e => {
    setError(isEmpty(e.target.value));
  };

  return /*#__PURE__*/React.createElement(CreditCardForm.Number, {
    label: "Num\xE9ro de carte",
    fieldComponent: props => /*#__PURE__*/React.createElement("div", _extends({}, props, {
      className: "k-u-margin-bottom-triple"
    })),
    labelComponent: _ref => {
      let {
        children,
        ...props
      } = _ref;
      return /*#__PURE__*/React.createElement(Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: props => /*#__PURE__*/React.createElement(Field.Input, _extends({}, props, {
      error: error,
      onBlur: handleBlur
    })),
    errorComponent: () => {
      if (!error) return null;
      return /*#__PURE__*/React.createElement(Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

const Expiry = () => {
  const [error, setError] = useState(false);

  const handleBlur = e => {
    setError(isEmpty(e.target.value));
  };

  return /*#__PURE__*/React.createElement(CreditCardForm.Expiry, {
    label: "Date de validit\xE9",
    fieldComponent: props => /*#__PURE__*/React.createElement("div", _extends({}, props, {
      className: "k-u-margin-bottom-triple"
    })),
    labelComponent: _ref2 => {
      let {
        children,
        ...props
      } = _ref2;
      return /*#__PURE__*/React.createElement(Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: props => /*#__PURE__*/React.createElement(Field.Input, _extends({}, props, {
      placeholder: "MM/AA",
      digits: 6,
      error: error,
      onBlur: handleBlur
    })),
    errorComponent: () => {
      if (!error) return null;
      return /*#__PURE__*/React.createElement(Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};

const Cvc = () => {
  const [error, setError] = useState(false);

  const handleBlur = e => {
    setError(isEmpty(e.target.value));
  };

  return /*#__PURE__*/React.createElement(CreditCardForm.Cvc, {
    label: "Cryptogramme visuel",
    fieldComponent: props => /*#__PURE__*/React.createElement("div", _extends({}, props, {
      className: "k-u-margin-bottom-triple"
    })),
    labelComponent: _ref3 => {
      let {
        children,
        ...props
      } = _ref3;
      return /*#__PURE__*/React.createElement(Field.Label, {
        labelProps: props,
        children: children
      });
    },
    inputComponent: props => /*#__PURE__*/React.createElement(Field.Input, _extends({}, props, {
      digits: 6,
      error: error,
      onBlur: handleBlur
    })),
    errorComponent: () => {
      if (!error) return null;
      return /*#__PURE__*/React.createElement(Field.ErrorMessage, null, "Le champ est requis.");
    }
  });
};