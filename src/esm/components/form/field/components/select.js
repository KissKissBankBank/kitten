import React from 'react';
import { Marger } from '../../../layout/marger';
import { SelectWithState } from '../../../form/select-with-state';
export var FieldSelect = function FieldSelect(props) {
  return /*#__PURE__*/React.createElement(Marger, {
    top: "1"
  }, /*#__PURE__*/React.createElement(SelectWithState, props));
};