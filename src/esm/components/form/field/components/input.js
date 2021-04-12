import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TextInput } from '../../../form/text-input';
import { TextInputWithLimit } from '../../../form/text-input-with-limit';
import { TextInputWithUnit } from '../../../form/text-input-with-unit';
export var FieldInput = function FieldInput(_ref) {
  var limit = _ref.limit,
      unit = _ref.unit,
      noMargin = _ref.noMargin,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["limit", "unit", "noMargin", "className"]);

  var Input = TextInput;

  if (limit) {
    Input = TextInputWithLimit;
  }

  if (unit) {
    Input = TextInputWithUnit;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-FieldInput', className, {
      'k-u-margin-top-single': !noMargin
    })
  }, /*#__PURE__*/React.createElement(Input, _extends({
    limit: limit,
    unit: unit
  }, props)));
};
FieldInput.propTypes = {
  limit: PropTypes.number,
  unit: PropTypes.string,
  noMargin: PropTypes.bool
};
FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined,
  noMargin: false
};