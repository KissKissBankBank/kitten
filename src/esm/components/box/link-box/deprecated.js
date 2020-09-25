import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

var _DeprecatedLinkBox$pr;

import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../components/typography/text';
import { Marger } from '../../../components/layout/marger';
import { StyledLinkBox } from './styles';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
export var DeprecatedLinkBox = function DeprecatedLinkBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      displayIcon = _ref.displayIcon,
      href = _ref.href,
      isExternal = _ref.isExternal,
      linkProps = _ref.linkProps,
      text = _ref.text,
      textTag = _ref.textTag,
      title = _ref.title,
      titleTag = _ref.titleTag,
      viewportIsMobile = _ref.viewportIsMobile;
  var target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/React.createElement(StyledLinkBox, _extends({}, linkProps, {
    href: href
  }, target, {
    className: className
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-LinkBox__link k-LinkBox__link--deprecated"
  }, !!displayIcon && /*#__PURE__*/React.createElement("div", {
    className: classNames('k-LinkBox__icon', 'k-LinkBox__icon--deprecated', 'k-u-hidden@xs-down--important')
  }, children), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-LinkBox__textContainer', 'k-LinkBox__textContainer--deprecated', 'k-u-margin-top-double', 'k-u-margin-bottom-double')
  }, /*#__PURE__*/React.createElement(Marger, {
    bottom: text ? 0.5 : 0
  }, /*#__PURE__*/React.createElement(Text, {
    tag: titleTag,
    weight: "regular",
    size: viewportIsMobile ? 'tiny' : 'default',
    color: "font1",
    className: "k-u-line-height-1"
  }, title)), text && /*#__PURE__*/React.createElement(Text, {
    tag: textTag,
    weight: "light",
    size: "tiny",
    color: "font1",
    className: "k-u-line-height-1-3"
  }, text)), /*#__PURE__*/React.createElement("div", {
    className: "k-LinkBox__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    className: "k-ButtonIcon__svg"
  }))));
};
DeprecatedLinkBox.propTypes = (_DeprecatedLinkBox$pr = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  linkProps: PropTypes.object,
  // deprecated
  displayIcon: deprecated(PropTypes.bool, 'Use `<Linkbox.Icon />` component instead'),
  text: deprecated(PropTypes.string, 'Use `<Linkbox.Text />` component instead')
}, _defineProperty(_DeprecatedLinkBox$pr, "linkProps", deprecated(PropTypes.node, 'Use direct props instead')), _defineProperty(_DeprecatedLinkBox$pr, "textTag", deprecated(PropTypes.string, 'Use `<Linkbox.Text />` component instead')), _defineProperty(_DeprecatedLinkBox$pr, "title", deprecated(PropTypes.string.isRequired, 'Use `<Linkbox.Text />` component instead')), _defineProperty(_DeprecatedLinkBox$pr, "titleTag", deprecated(PropTypes.string, 'Use `<Linkbox.Text />` component instead')), _defineProperty(_DeprecatedLinkBox$pr, "viewportIsMobile", deprecated(PropTypes.bool, 'Use media query style in <Linkbox.Text /> component or child instead')), _DeprecatedLinkBox$pr);
DeprecatedLinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  linkProps: {},
  // deprecated
  displayIcon: false,
  text: '',
  textTag: 'span',
  titleTag: 'span',
  viewportIsMobile: false
};