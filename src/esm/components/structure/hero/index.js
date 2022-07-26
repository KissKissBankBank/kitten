import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from '../../layout/container';
import { Grid, GridCol } from '../../layout/grid';
import { mq } from '../../../constants/screen-config';
import { NUM_COLUMNS, CONTAINER_PADDING, CONTAINER_PADDING_THIN } from '../../../constants/grid-config';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
const StyledHero = styled(_ref => {
  let {
    backgroundColor,
    color,
    backgroundImage,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Container, props);
}).withConfig({
  displayName: "hero__StyledHero",
  componentId: "sc-1fnbzje-0"
})([".k-Hero__contentGridCol{position:relative;z-index:1;padding-top:", ";margin-left:", ";}.k-Hero__content{background-color:", ";color:", ";padding:", " ", ";@media ", "{padding:", " ", ";}@media ", "{padding:", " ", ";}}.k-Hero__imageGridCol{margin-left:-", ";padding-bottom:", ";}.k-Hero__image{width:calc(100% + ", ");height:100%;background-image:url(", ");background-color:", ";background-size:cover;background-repeat:no-repeat;background-position:50% 50%;@media ", "{width:calc(100% + ", ");height:100vw;margin-left:", ";}@media ", "{width:calc(100% + ", ");margin-left:", ";}}&.k-Hero--direction-left{.k-Hero__contentGridCol{@media ", "{padding-top:", ";margin-left:0;}}.k-Hero__content{@media ", "{margin-left:", ";}}.k-Hero__imageGridCol{@media ", "{margin-left:-", ";padding-bottom:0;}@media ", "{margin-left:-100%;}}}&.k-Hero--direction-right{.k-Hero__contentGridCol{margin-left:", ";@media ", "{padding-top:", ";margin-left:", ";}@media ", "{margin-left:0;}}.k-Hero__content{@media ", "{margin-right:", ";}}.k-Hero__imageGridCol{margin-left:-", ";@media ", "{margin-left:-", ";}@media ", "{margin-left:-100%;}}.k-Hero__image{margin-left:", ";}}&.k-Hero--small{@media ", "{.k-Hero__contentGridCol{padding-bottom:", ";}.k-Hero__imageGridCol{padding-bottom:0;}}}"], 1 / NUM_COLUMNS * 100 + 'vw', 1 / NUM_COLUMNS * 100 + '%', _ref2 => {
  let {
    backgroundColor
  } = _ref2;
  return backgroundColor;
}, _ref3 => {
  let {
    color
  } = _ref3;
  return color;
}, pxToRem(100), pxToRem(115), mq.mobileAndTablet, pxToRem(100), pxToRem(85), mq.mobile, pxToRem(50), pxToRem(20), 2 / NUM_COLUMNS * 100 + '%', 1 / 2 / NUM_COLUMNS * 100 + 'vw', pxToRem(CONTAINER_PADDING), _ref4 => {
  let {
    backgroundImage
  } = _ref4;
  return backgroundImage;
}, _ref5 => {
  let {
    backgroundColor
  } = _ref5;
  return backgroundColor;
}, mq.mobileAndTablet, pxToRem(CONTAINER_PADDING * 2), pxToRem(-CONTAINER_PADDING), mq.mobile, pxToRem(CONTAINER_PADDING_THIN * 2), pxToRem(-CONTAINER_PADDING_THIN), mq.mobileAndTablet, 8 / NUM_COLUMNS * 100 + 'vw', mq.mobile, pxToRem(-CONTAINER_PADDING_THIN), mq.mobileAndTablet, 10 / NUM_COLUMNS * 100 + '%', mq.mobile, 5 / NUM_COLUMNS * 100 + '%', mq.mobileAndTablet, 8 / NUM_COLUMNS * 100 + 'vw', 2 / NUM_COLUMNS * 100 + '%', mq.mobile, mq.mobile, pxToRem(-CONTAINER_PADDING_THIN), 11 / NUM_COLUMNS * 100 + '%', mq.mobileAndTablet, 12 / NUM_COLUMNS * 100 + '%', mq.mobile, pxToRem(-CONTAINER_PADDING / 2), mq.desktop, 1 / 2 / NUM_COLUMNS * 100 + 'vw');
export const Hero = _ref6 => {
  let {
    direction,
    small,
    imageSrc,
    contentBackgroundColor,
    contentColor,
    children,
    ...props
  } = _ref6;
  return /*#__PURE__*/React.createElement(StyledHero, _extends({}, props, {
    className: classNames('k-Hero', props.className, "k-Hero--direction-" + direction, {
      'k-Hero--small': small
    }),
    backgroundColor: contentBackgroundColor,
    color: contentColor,
    backgroundImage: imageSrc
  }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
    col: "12",
    "col-s": "10",
    "col-l": "6",
    className: "k-Hero__contentGridCol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Hero__content"
  }, children)), /*#__PURE__*/React.createElement(GridCol, {
    col: "12",
    "col-l": "7",
    className: "k-Hero__imageGridCol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Hero__image"
  }))));
};
Hero.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  small: PropTypes.bool,
  imageSrc: PropTypes.string,
  contentBackgroundColor: PropTypes.string,
  contentColor: PropTypes.string
};
Hero.defaultProps = {
  direction: 'left',
  small: false,
  imageSrc: '',
  contentBackgroundColor: COLORS.font1,
  contentColor: COLORS.background1
};