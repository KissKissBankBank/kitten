import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TextInput } from '../../../form/input/text-input';
export const FieldInput = _ref => {
  var _props$wrapperProps;

  let {
    limit,
    unit,
    noMargin,
    className,
    ...props
  } = _ref;

  const has = (() => {
    switch (true) {
      case !!limit:
        return 'limit';

      case !!unit:
        return 'unit';

      default:
        return undefined;
    }
  })();

  return /*#__PURE__*/React.createElement(TextInput, _extends({
    has: has,
    limit: limit,
    unit: unit
  }, props, {
    wrapperProps: { ...props.wrapperProps,
      className: classNames('k-FieldInput', 'k-Field__control', className, (_props$wrapperProps = props.wrapperProps) == null ? void 0 : _props$wrapperProps.className, {
        'k-u-margin-top-single': !noMargin
      })
    }
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