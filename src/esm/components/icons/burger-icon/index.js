import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import deprecated from 'prop-types-extra/lib/deprecated';
var StyledItem = styled.svg.withConfig({
  displayName: "burger-icon__StyledItem",
  componentId: "sc-2o2fz7-0"
})(["overflow:visible;fill:", ";:hover,button:hover &{fill:", ";}rect{transition:transform 0.2s ease-out,fill 0.15s;}", " ", ""], function (_ref) {
  var mainColor = _ref.mainColor;
  return mainColor;
}, function (_ref2) {
  var hoverColor = _ref2.hoverColor;
  return hoverColor;
}, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && css([".k-BurgerIcon__bun{transform:translateX(2px);}.k-BurgerIcon__patty{transform:translateX(-2px);}"]);
}, function (_ref4) {
  var isAnimatedOnHover = _ref4.isAnimatedOnHover;
  return isAnimatedOnHover && css(["&:hover,button:hover &,&:focus,button:focus &{.k-BurgerIcon__bun{transform:translateX(2px);}.k-BurgerIcon__patty{transform:translateX(-2px);}}"]);
});
export var BurgerIcon = function BurgerIcon(_ref5) {
  var mainColor = _ref5.mainColor,
      hoverColor = _ref5.hoverColor,
      isActive = _ref5.isActive,
      iconTitle = _ref5.iconTitle,
      title = _ref5.title,
      width = _ref5.width,
      height = _ref5.height,
      isAnimatedOnHover = _ref5.isAnimatedOnHover,
      props = _objectWithoutProperties(_ref5, ["mainColor", "hoverColor", "isActive", "iconTitle", "title", "width", "height", "isAnimatedOnHover"]);

  return /*#__PURE__*/React.createElement(StyledItem, _extends({
    role: "img",
    "aria-label": iconTitle || title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 10",
    width: width,
    height: height,
    isActive: isActive,
    mainColor: mainColor,
    hoverColor: hoverColor,
    isAnimatedOnHover: isAnimatedOnHover
  }, props), (iconTitle || title) && /*#__PURE__*/React.createElement("title", null, iconTitle || title), /*#__PURE__*/React.createElement("rect", {
    y: "0",
    width: "12",
    height: "2",
    className: "k-BurgerIcon__bun"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "4",
    width: "12",
    height: "2",
    className: "k-BurgerIcon__patty"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "8",
    width: "12",
    height: "2",
    className: "k-BurgerIcon__bun"
  }));
};
BurgerIcon.propTypes = {
  mainColor: PropTypes.string,
  hoverColor: PropTypes.string,
  isActive: PropTypes.bool,
  iconTitle: deprecated(PropTypes.string, 'Prefere use `title` prop instead'),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
BurgerIcon.defaultProps = {
  mainColor: COLORS.font1,
  hoverColor: COLORS.primary1,
  isActive: false,
  title: null,
  width: 12,
  height: 10,
  isAnimatedOnHover: false
};