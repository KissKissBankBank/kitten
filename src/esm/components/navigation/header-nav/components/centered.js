import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export const Centered = _ref => {
  let {
    children,
    className,
    display,
    ...props
  } = _ref;
  const classNameProps = classNames('k-HeaderNav__centered', {
    'k-HeaderNav__column': display === 'column'
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNameProps
  }), children);
};
Centered.propTypes = {
  display: PropTypes.oneOf(['column'])
};
Centered.defaultProps = {
  display: null
};