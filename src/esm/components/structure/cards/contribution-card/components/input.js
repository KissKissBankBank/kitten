import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInputWithUnit } from '../../../../form/input/text-input-with-unit';
import { Context } from '../context';
export const Input = _ref => {
  let {
    valid,
    onChange,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Context.Consumer, null, _ref2 => {
    let {
      setEmptyInput
    } = _ref2;
    return /*#__PURE__*/React.createElement(TextInputWithUnit, _extends({
      wrapperProps: {
        className: 'k-ContributionCard__inputWrapper'
      },
      valid: valid,
      className: classNames('k-ContributionCard__input', className),
      onChange: event => {
        var _event$target, _event$target$value;

        setEmptyInput(((_event$target = event.target) == null ? void 0 : (_event$target$value = _event$target.value) == null ? void 0 : _event$target$value.length) === 0);
        onChange(event);
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
  onChange: () => null
};