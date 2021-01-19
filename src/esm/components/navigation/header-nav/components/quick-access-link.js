import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
var StyledQuickNav = styled.a.withConfig({
  displayName: "quick-access-link__StyledQuickNav",
  componentId: "sc-88k1zh-0"
})(["position:absolute;display:inline-flex;align-items:center;left:-100%;top:0;z-index:", ";padding:0 ", ";background-color:", ";border-right:", " solid ", ";", " color:", ";line-height:1;font-size:", ";text-decoration:none;transition:all .2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,.2s;outline:", " auto -webkit-focus-ring-color;}"], function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex;
}, pxToRem(30), COLORS.background1, pxToRem(1), COLORS.line1, TYPOGRAPHY.fontStyles.regular, COLORS.font1, pxToRem(16), pxToRem(5));
export var QuickAccessLink = function QuickAccessLink(_ref2) {
  var text = _ref2.text,
      href = _ref2.href,
      zIndex = _ref2.zIndex,
      props = _objectWithoutProperties(_ref2, ["text", "href", "zIndex"]);

  return /*#__PURE__*/React.createElement(StyledQuickNav, _extends({}, props, {
    href: href,
    zIndex: zIndex
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