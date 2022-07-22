import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["limit", "unit", "noMargin", "className"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TextInput } from '../../../form/input/text-input';
import { TextInputWithLimit } from '../../../form/input/text-input-with-limit';
import { TextInputWithUnit } from '../../../form/input/text-input-with-unit';
export var FieldInput = function FieldInput(_ref) {
  var _props$wrapperProps;

  var limit = _ref.limit,
      unit = _ref.unit,
      noMargin = _ref.noMargin,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var has = function () {
    switch (true) {
      case !!limit:
        return 'limit';

      case !!unit:
        return 'unit';

      default:
        return undefined;
    }
  }();

  return /*#__PURE__*/React.createElement(TextInput, _extends({
    has: has,
    limit: limit,
    unit: unit
  }, props, {
    wrapperProps: _extends({}, props.wrapperProps, {
      className: classNames('k-FieldInput', 'k-Field__control', className, (_props$wrapperProps = props.wrapperProps) == null ? void 0 : _props$wrapperProps.className, {
        'k-u-margin-top-single': !noMargin
      })
    })
  }));
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