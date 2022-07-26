import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import deprecated from 'prop-types-extra/lib/deprecated';
const StyledItem = styled.svg.withConfig({
  displayName: "burger-icon__StyledItem",
  componentId: "sc-122wqdc-0"
})(["overflow:visible;fill:var(--burgerIcon-mainColor,", ");:hover,button:hover &{fill:var(--burgerIcon-hoverColor,", ");}rect{transition:transform 0.2s ease-out,fill 0.15s;}&.k-BurgerIcon--isActive{.k-BurgerIcon__bun{transform:translateX(2px);}.k-BurgerIcon__patty{transform:translateX(-2px);}}&.k-BurgerIcon--isAnimatedOnHover{&:hover,button:hover &,&:focus,button:focus &{.k-BurgerIcon__bun{transform:translateX(2px);}.k-BurgerIcon__patty{transform:translateX(-2px);}}}"], COLORS.font1, COLORS.primary1);
export const BurgerIcon = _ref => {
  let {
    mainColor,
    hoverColor,
    isActive,
    iconTitle,
    title,
    width,
    height,
    isAnimatedOnHover,
    style,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledItem, _extends({
    role: "img",
    "aria-label": iconTitle || title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 10",
    width: width,
    height: height,
    style: { ...style,
      '--burgerIcon-mainColor': mainColor,
      '--burgerIcon-hoverColor': hoverColor
    },
    className: classNames('k-BurgerIcon', className, {
      'k-BurgerIcon--isActive': isActive,
      'k-BurgerIcon--isAnimatedOnHover': isAnimatedOnHover
    })
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