import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export const Right = _ref => {
  let {
    children,
    className,
    padded
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-HeaderNav__right', className, {
      'k-HeaderNav__right--padded': padded
    })
  }, children);
};
Right.propTypes = {
  padded: PropTypes.bool
};
Right.defaultProps = {
  padded: false
};