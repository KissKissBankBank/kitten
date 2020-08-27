import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from '../../../components/grid/container';
import { Grid, GridCol } from '../../../components/grid/grid';
import { ScreenConfig } from '../../../constants/screen-config';
import { NUM_COLUMNS, CONTAINER_PADDING, CONTAINER_PADDING_MOBILE } from '../../../constants/grid-config';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var StyledHero = styled(function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      backgroundImage = _ref.backgroundImage,
      props = _objectWithoutProperties(_ref, ["backgroundColor", "color", "backgroundImage"]);

  return /*#__PURE__*/React.createElement(Container, props);
}).withConfig({
  displayName: "hero__StyledHero",
  componentId: "sc-308z42-0"
})([".k-Hero__contentGridCol{position:relative;z-index:1;padding-top:", ";margin-left:", ";}.k-Hero__content{background-color:", ";color:", ";padding:", " ", ";@media (max-width:", "){padding:", " ", ";}@media (max-width:", "){padding:", " ", ";}}.k-Hero__imageGridCol{margin-left:-", ";padding-bottom:", ";}.k-Hero__image{width:calc(100% + ", ");height:100%;background-image:url(", ");background-color:", ";background-size:cover;background-repeat:no-repeat;background-position:50% 50%;@media (max-width:", "){width:calc(100% + ", ");height:100vw;margin-left:", ";}@media (max-width:", "){width:calc(100% + ", ");margin-left:", ";}}&.k-Hero--direction-left{.k-Hero__contentGridCol{@media (max-width:", "){padding-top:", ";margin-left:0;}}.k-Hero__content{@media (max-width:", "){margin-left:", ";}}.k-Hero__imageGridCol{@media (max-width:", "){margin-left:-", ";padding-bottom:0;}@media (max-width:", "){margin-left:-100%;}}}&.k-Hero--direction-right{.k-Hero__contentGridCol{margin-left:", ";@media (max-width:", "){padding-top:", ";margin-left:", ";}@media (max-width:", "){margin-left:0;}}.k-Hero__content{@media (max-width:", "){margin-right:", ";}}.k-Hero__imageGridCol{margin-left:-", ";@media (max-width:", "){margin-left:-", ";}@media (max-width:", "){margin-left:-100%;}}.k-Hero__image{margin-left:", ";}}&.k-Hero--tiny{@media (min-width:", "){.k-Hero__contentGridCol{padding-bottom:", ";}.k-Hero__imageGridCol{padding-bottom:0;}}}"], 1 / NUM_COLUMNS * 100 + 'vw', 1 / NUM_COLUMNS * 100 + '%', function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, pxToRem(100), pxToRem(115), pxToRem(ScreenConfig.M.max), pxToRem(100), pxToRem(85), pxToRem(ScreenConfig.XS.max), pxToRem(50), pxToRem(20), 2 / NUM_COLUMNS * 100 + '%', 1 / 2 / NUM_COLUMNS * 100 + 'vw', pxToRem(CONTAINER_PADDING), function (_ref4) {
  var backgroundImage = _ref4.backgroundImage;
  return backgroundImage;
}, function (_ref5) {
  var backgroundColor = _ref5.backgroundColor;
  return backgroundColor;
}, pxToRem(ScreenConfig.M.max), pxToRem(CONTAINER_PADDING * 2), pxToRem(-CONTAINER_PADDING), pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_MOBILE * 2), pxToRem(-CONTAINER_PADDING_MOBILE), pxToRem(ScreenConfig.M.max), 8 / NUM_COLUMNS * 100 + 'vw', pxToRem(ScreenConfig.XS.max), pxToRem(-CONTAINER_PADDING_MOBILE), pxToRem(ScreenConfig.M.max), 10 / NUM_COLUMNS * 100 + '%', pxToRem(ScreenConfig.XS.max), 5 / NUM_COLUMNS * 100 + '%', pxToRem(ScreenConfig.M.max), 8 / NUM_COLUMNS * 100 + 'vw', 2 / NUM_COLUMNS * 100 + '%', pxToRem(ScreenConfig.XS.max), pxToRem(ScreenConfig.XS.max), pxToRem(-CONTAINER_PADDING_MOBILE), 11 / NUM_COLUMNS * 100 + '%', pxToRem(ScreenConfig.M.max), 12 / NUM_COLUMNS * 100 + '%', pxToRem(ScreenConfig.XS.max), pxToRem(-CONTAINER_PADDING / 2), pxToRem(ScreenConfig.L.min), 1 / 2 / NUM_COLUMNS * 100 + 'vw');
export var Hero = function Hero(_ref6) {
  var direction = _ref6.direction,
      tiny = _ref6.tiny,
      imageSrc = _ref6.imageSrc,
      contentBackgroundColor = _ref6.contentBackgroundColor,
      contentColor = _ref6.contentColor,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["direction", "tiny", "imageSrc", "contentBackgroundColor", "contentColor", "children"]);

  return /*#__PURE__*/React.createElement(StyledHero, _extends({}, props, {
    className: classNames('k-Hero', props.className, "k-Hero--direction-".concat(direction), {
      'k-Hero--tiny': tiny
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
  tiny: PropTypes.bool,
  imageSrc: PropTypes.string,
  contentBackgroundColor: PropTypes.string,
  contentColor: PropTypes.string
};
Hero.defaultProps = {
  direction: 'left',
  tiny: false,
  imageSrc: '',
  contentBackgroundColor: COLORS.font1,
  contentColor: COLORS.background1
};