import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInputWithUnit } from '../../../../form/text-input-with-unit';
import { Context } from '../context';
export var Input = function Input(_ref) {
  var valid = _ref.valid,
      _onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["valid", "onChange", "className"]);

  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var setEmptyInput = _ref2.setEmptyInput;
    return /*#__PURE__*/React.createElement(TextInputWithUnit, _extends({
      wrapperProps: {
        className: 'k-ContributionCard__inputWrapper'
      },
      variant: "orion",
      valid: valid,
      className: classNames('k-ContributionCard__input', className),
      onChange: function onChange(event) {
        var _event$target, _event$target$value;

        setEmptyInput(((_event$target = event.target) === null || _event$target === void 0 ? void 0 : (_event$target$value = _event$target.value) === null || _event$target$value === void 0 ? void 0 : _event$target$value.length) === 0);

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