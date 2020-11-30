import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Context } from './context';
import { ArrowIcon } from '../../../icons/arrow-icon';
import { Button } from '../../../../components/buttons/button/button';
var ButtonContainer = styled.div.withConfig({
  displayName: "item__ButtonContainer",
  componentId: "sc-5lownc-0"
})(["padding:", ";background-color:", ";a:focus{outline:", " auto -webkit-focus-ring-color;}"], pxToRem(20), COLORS.background1, pxToRem(5));
var StyledItem = styled.a.withConfig({
  displayName: "item__StyledItem",
  componentId: "sc-5lownc-1"
})(["display:block;position:relative;padding:", ";background-color:", ";border-bottom:", ";", " color:", ";line-height:1;font-size:", ";text-decoration:none;&:focus{outline-offset:", ";}", " ", " ", " ", ""], function (_ref) {
  var largeItem = _ref.largeItem;
  return largeItem ? "".concat(pxToRem(28), " ").concat(pxToRem(21), " ").concat(pxToRem(28), " ").concat(pxToRem(40)) : "".concat(pxToRem(18), " ").concat(pxToRem(30), " ").concat(pxToRem(17));
}, COLORS.background1, function (_ref2) {
  var noBorder = _ref2.noBorder;
  return noBorder ? null : "".concat(pxToRem(1), " solid ").concat(COLORS.line1);
}, TYPOGRAPHY.fontStyles.regular, COLORS.font1, pxToRem(14), pxToRem(-3), function (_ref3) {
  var borderSide = _ref3.borderSide;
  return borderSide ? css(["::before{content:'';position:absolute;top:", ";left:", ";bottom:0;width:", ";background-color:transparent;transition:background-color 0.2s,width 0.2s;}:hover,:focus{color:", ";&::before{width:", ";background-color:", ";transition:width 0.2s;}}"], pxToRem(-1), pxToRem(-1), pxToRem(0), function (_ref4) {
    var borderSideOnHover = _ref4.borderSideOnHover;
    return !borderSideOnHover && COLORS.primary1;
  }, function (_ref5) {
    var borderSideOnHover = _ref5.borderSideOnHover;
    return borderSideOnHover && pxToRem(4);
  }, COLORS.primary1) : css([":hover,:focus{color:", ";background-color:", ";transition:color 0.2s,background-color 0.4s;}"], COLORS.primary1, function (_ref6) {
    var backgroundColors = _ref6.backgroundColors;
    return backgroundColors.hover ? backgroundColors.hover : COLORS.line1;
  });
}, function (_ref7) {
  var isSelected = _ref7.isSelected;
  return isSelected && css(["color:", ";::before{width:", ";background-color:", ";}"], COLORS.primary1, pxToRem(4), COLORS.primary1);
}, function (_ref8) {
  var modifier = _ref8.modifier;
  return modifier === 'light' && css(["color:", ";"], COLORS.font2);
}, function (_ref9) {
  var borderSide = _ref9.borderSide;
  return borderSide === 'right' && css(["::before{left:unset;right:-1px;}"]);
});
var ExternalStyledItem = styled(StyledItem).withConfig({
  displayName: "item__ExternalStyledItem",
  componentId: "sc-5lownc-2"
})(["display:flex;height:", ";padding:", ";align-items:center;align-self:flex-start;justify-content:space-between;background-color:", ";.itemNextToArrowIcon{margin-right:", ";}.headerMenuArrowIcon{position:relative;left:0;transition:left 0.2s;}svg,img{max-height:", ";width:auto;}:focus,:hover{color:", ";.headerMenuArrowIcon{left:", ";}}::before{display:none;}"], pxToRem(70), function (_ref10) {
  var largeItem = _ref10.largeItem;
  return largeItem ? "".concat(pxToRem(23), " ").concat(pxToRem(21), " ").concat(pxToRem(22), " ").concat(pxToRem(40)) : "".concat(pxToRem(23), " ").concat(pxToRem(21), " ").concat(pxToRem(22), " ").concat(pxToRem(30));
}, COLORS.background3, pxToRem(20), pxToRem(24), COLORS.font1, pxToRem(5));
export var Item = function Item(_ref11) {
  var children = _ref11.children,
      href = _ref11.href,
      external = _ref11.external,
      liProps = _ref11.liProps,
      modifier = _ref11.modifier,
      button = _ref11.button,
      isSelected = _ref11.isSelected,
      other = _objectWithoutProperties(_ref11, ["children", "href", "external", "liProps", "modifier", "button", "isSelected"]);

  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref12) {
    var borderSide = _ref12.borderSide,
        borderSideOnHover = _ref12.borderSideOnHover,
        largeItem = _ref12.largeItem,
        noBorder = _ref12.noBorder,
        backgroundColors = _ref12.backgroundColors;
    return /*#__PURE__*/React.createElement("li", _extends({
      role: "menuitem"
    }, liProps), external && /*#__PURE__*/React.createElement(ExternalStyledItem, _extends({}, other, {
      href: href,
      borderSide: borderSide,
      external: external,
      largeItem: largeItem,
      noBorder: noBorder
    }), /*#__PURE__*/React.createElement("span", {
      className: "itemNextToArrowIcon"
    }, children), /*#__PURE__*/React.createElement(ArrowIcon, {
      className: "headerMenuArrowIcon",
      version: "solid",
      direction: "right"
    })), button && /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(Button, _extends({
      as: "a",
      href: href,
      modifier: modifier,
      fluid: true
    }, other), children)), !(external || button) && /*#__PURE__*/React.createElement(StyledItem, _extends({}, other, {
      href: href,
      isSelected: isSelected,
      "aria-current": isSelected ? 'page' : null,
      borderSide: borderSide,
      borderSideOnHover: borderSideOnHover,
      external: external,
      largeItem: largeItem,
      noBorder: noBorder,
      backgroundColors: backgroundColors,
      modifier: modifier
    }), children));
  });
};
Item.propTypes = {
  external: PropTypes.bool,
  button: PropTypes.bool,
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  liProps: PropTypes.object,
  modifier: PropTypes.oneOf([null, undefined, 'light', 'default', 'hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'checked'])
};
Item.defaultProps = {
  external: false,
  button: false,
  modifier: null,
  href: null,
  isSelected: false,
  liProps: {}
};