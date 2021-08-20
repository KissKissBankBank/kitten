import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var Right = function Right(_ref) {
  var children = _ref.children,
      className = _ref.className,
      padded = _ref.padded;
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