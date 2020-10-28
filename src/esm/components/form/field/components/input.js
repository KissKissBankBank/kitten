import React from 'react';
import PropTypes from 'prop-types';
import { Marger } from '../../../layout/marger';
import { TextInput } from '../../../form/text-input';
import { TextInputWithLimit } from '../../../form/text-input-with-limit';
import { TextInputWithUnit } from '../../../form/text-input-with-unit';
export var FieldInput = function FieldInput(props) {
  var Input = TextInput;

  if (props.limit) {
    Input = TextInputWithLimit;
  }

  if (props.unit) {
    Input = TextInputWithUnit;
  }

  return /*#__PURE__*/React.createElement(Marger, {
    top: "1"
  }, /*#__PURE__*/React.createElement(Input, props));
};
FieldInput.propTypes = {
  limit: PropTypes.number,
  unit: PropTypes.string
};
FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined
};