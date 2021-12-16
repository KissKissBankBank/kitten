import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["valid", "onChange", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInputWithUnit } from '../../../../form/text-input-with-unit';
import { Context } from '../context';
export var Input = function Input(_ref) {
  var valid = _ref.valid,
      _onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var setEmptyInput = _ref2.setEmptyInput;
    return /*#__PURE__*/React.createElement(TextInputWithUnit, _extends({
      wrapperProps: {
        className: 'k-ContributionCard__inputWrapper'
      },
      valid: valid,
      className: classNames('k-ContributionCard__input', className),
      onChange: function onChange(event) {
        var _event$target, _event$target$value;

        setEmptyInput(((_event$target = event.target) == null ? void 0 : (_event$target$value = _event$target.value) == null ? void 0 : _event$target$value.length) === 0);

        _onChange(event);
      }
    }, props));
  });
};
Input.propTypes = {
  valid: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};
Input.defaultProps = {
  onChange: function onChange() {
    return null;
  }
};