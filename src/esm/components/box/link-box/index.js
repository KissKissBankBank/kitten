import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { StyledLinkBox } from './styles';
import classNames from 'classnames';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
export var LinkBox = function LinkBox(_ref) {
  var className = _ref.className,
      href = _ref.href,
      isExternal = _ref.isExternal,
      props = _objectWithoutProperties(_ref, ["className", "href", "isExternal"]);

  var target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/React.createElement(StyledLinkBox, _extends({}, props, target, {
    href: href,
    className: className
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-LinkBox__link"
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
      props = _objectWithoutProperties(_ref2, ["children", "className"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-LinkBox__icon', className)
  }), children);
};

LinkBox.Text = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      props = _objectWithoutProperties(_ref3, ["children", "className"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-LinkBox__textContainer', className)
  }), children);
};

LinkBox.propTypes = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  linkProps: PropTypes.object
};
LinkBox.defaultProps = {
  href: '#',
  isExternal: false
};