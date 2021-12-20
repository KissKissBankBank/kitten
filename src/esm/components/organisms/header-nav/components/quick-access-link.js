import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["text", "href", "zIndex", "style", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var QuickAccessLink = function QuickAccessLink(_ref) {
  var text = _ref.text,
      href = _ref.href,
      zIndex = _ref.zIndex,
      style = _ref.style,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    href: href,
    className: classNames('k-HeaderNav__QuickAccessLink', className),
    style: _extends({}, style, {
      '--HeaderNav_quickAccessLink_zIndex': zIndex
    })
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