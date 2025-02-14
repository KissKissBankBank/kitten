"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Hero = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = require("../../layout/container");

var _grid = require("../../layout/grid");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

const StyledHero = (0, _styledComponents.default)(_ref => {
  let {
    backgroundColor,
    color,
    backgroundImage,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_container.Container, props);
}).withConfig({
  displayName: "hero__StyledHero",
  componentId: "sc-1fnbzje-0"
})([".k-Hero__contentGridCol{position:relative;z-index:1;padding-top:", ";margin-left:", ";}.k-Hero__content{background-color:", ";color:", ";padding:", " ", ";@media ", "{padding:", " ", ";}@media ", "{padding:", " ", ";}}.k-Hero__imageGridCol{margin-left:-", ";padding-bottom:", ";}.k-Hero__image{width:calc(100% + ", ");height:100%;background-image:url(", ");background-color:", ";background-size:cover;background-repeat:no-repeat;background-position:50% 50%;@media ", "{width:calc(100% + ", ");height:100vw;margin-left:", ";}@media ", "{width:calc(100% + ", ");margin-left:", ";}}&.k-Hero--direction-left{.k-Hero__contentGridCol{@media ", "{padding-top:", ";margin-left:0;}}.k-Hero__content{@media ", "{margin-left:", ";}}.k-Hero__imageGridCol{@media ", "{margin-left:-", ";padding-bottom:0;}@media ", "{margin-left:-100%;}}}&.k-Hero--direction-right{.k-Hero__contentGridCol{margin-left:", ";@media ", "{padding-top:", ";margin-left:", ";}@media ", "{margin-left:0;}}.k-Hero__content{@media ", "{margin-right:", ";}}.k-Hero__imageGridCol{margin-left:-", ";@media ", "{margin-left:-", ";}@media ", "{margin-left:-100%;}}.k-Hero__image{margin-left:", ";}}&.k-Hero--small{@media ", "{.k-Hero__contentGridCol{padding-bottom:", ";}.k-Hero__imageGridCol{padding-bottom:0;}}}"], 1 / _gridConfig.NUM_COLUMNS * 100 + 'vw', 1 / _gridConfig.NUM_COLUMNS * 100 + '%', _ref2 => {
  let {
    backgroundColor
  } = _ref2;
  return backgroundColor;
}, _ref3 => {
  let {
    color
  } = _ref3;
  return color;
}, (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(115), _screenConfig.mq.mobileAndTablet, (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(85), _screenConfig.mq.mobile, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(20), 2 / _gridConfig.NUM_COLUMNS * 100 + '%', 1 / 2 / _gridConfig.NUM_COLUMNS * 100 + 'vw', (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), _ref4 => {
  let {
    backgroundImage
  } = _ref4;
  return backgroundImage;
}, _ref5 => {
  let {
    backgroundColor
  } = _ref5;
  return backgroundColor;
}, _screenConfig.mq.mobileAndTablet, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING * 2), (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING), _screenConfig.mq.mobile, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN * 2), (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.mq.mobileAndTablet, 8 / _gridConfig.NUM_COLUMNS * 100 + 'vw', _screenConfig.mq.mobile, (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.mq.mobileAndTablet, 10 / _gridConfig.NUM_COLUMNS * 100 + '%', _screenConfig.mq.mobile, 5 / _gridConfig.NUM_COLUMNS * 100 + '%', _screenConfig.mq.mobileAndTablet, 8 / _gridConfig.NUM_COLUMNS * 100 + 'vw', 2 / _gridConfig.NUM_COLUMNS * 100 + '%', _screenConfig.mq.mobile, _screenConfig.mq.mobile, (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING_THIN), 11 / _gridConfig.NUM_COLUMNS * 100 + '%', _screenConfig.mq.mobileAndTablet, 12 / _gridConfig.NUM_COLUMNS * 100 + '%', _screenConfig.mq.mobile, (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING / 2), _screenConfig.mq.desktop, 1 / 2 / _gridConfig.NUM_COLUMNS * 100 + 'vw');

const Hero = _ref6 => {
  let {
    direction,
    small,
    imageSrc,
    contentBackgroundColor,
    contentColor,
    children,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement(StyledHero, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-Hero', props.className, "k-Hero--direction-" + direction, {
      'k-Hero--small': small
    }),
    backgroundColor: contentBackgroundColor,
    color: contentColor,
    backgroundImage: imageSrc
  }), /*#__PURE__*/_react.default.createElement(_grid.Grid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
    col: "12",
    "col-s": "10",
    "col-l": "6",
    className: "k-Hero__contentGridCol"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Hero__content"
  }, children)), /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
    col: "12",
    "col-l": "7",
    className: "k-Hero__imageGridCol"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Hero__image"
  }))));
};

exports.Hero = Hero;
Hero.propTypes = {
  direction: _propTypes.default.oneOf(['left', 'right']),
  small: _propTypes.default.bool,
  imageSrc: _propTypes.default.string,
  contentBackgroundColor: _propTypes.default.string,
  contentColor: _propTypes.default.string
};
Hero.defaultProps = {
  direction: 'left',
  small: false,
  imageSrc: '',
  contentBackgroundColor: _colorsConfig.default.font1,
  contentColor: _colorsConfig.default.background1
};