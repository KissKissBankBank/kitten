import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "href", "isExternal", "variant", "backgroundColor", "textColor", "style"],
    _excluded2 = ["children", "className"],
    _excluded3 = ["children", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import { StyledLinkBox } from './styles';
import classNames from 'classnames';
import { ArrowIcon } from '../../../../components/graphics/icons/arrow-icon';
import COLORS from '../../../../constants/colors-config';
export var LinkBox = function LinkBox(_ref) {
  var className = _ref.className,
      href = _ref.href,
      isExternal = _ref.isExternal,
      variant = _ref.variant,
      backgroundColor = _ref.backgroundColor,
      textColor = _ref.textColor,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  var target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/React.createElement(StyledLinkBox, _extends({}, props, target, {
    href: href,
    className: className
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-LinkBox__link', className, "k-LinkBox__link--".concat(variant)),
    style: _extends({}, style, {
      '--LinkBox-background-color': backgroundColor,
      '--LinkBox-text-color': textColor
    })
  }, props.children, /*#__PURE__*/React.createElement("div", {
    className: "k-LinkBox__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    height: "10",
    width: "10"
  }))));
};

LinkBox.Icon = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-LinkBox__icon', className)
  }), children);
};

LinkBox.Text = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-LinkBox__textContainer', className)
  }), children);
};

LinkBox.propTypes = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  linkProps: PropTypes.object,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string
};
LinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  variant: 'andromeda',
  backgroundColor: COLORS.background1,
  textColor: null
};