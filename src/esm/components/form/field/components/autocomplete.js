import React from 'react';
import { Marger } from '../../../layout/marger';
import { Autocomplete } from '../../../form/autocomplete';
export var FieldAutocomplete = function FieldAutocomplete(props) {
  return /*#__PURE__*/React.createElement(Marger, {
    top: "1"
  }, /*#__PURE__*/React.createElement(Autocomplete, props));
};