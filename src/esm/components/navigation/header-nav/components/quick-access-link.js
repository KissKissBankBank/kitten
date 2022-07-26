import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export const QuickAccessLink = _ref => {
  let {
    text,
    href,
    zIndex,
    style,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    href: href,
    className: classNames('k-HeaderNav__QuickAccessLink', className),
    style: { ...style,
      '--HeaderNav_quickAccessLink_zIndex': zIndex
    }
  }), text);
};
QuickAccessLink.propTypes = {
  text: PropTypes.node,
  href: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
QuickAccessLink.defaultProps = {
  text: 'Aller au contenu',
  href: '#main',
  zIndex: 2
};