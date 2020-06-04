"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = require("../../../components/grid/container");

var _grid = require("../../../components/grid/grid");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var StyledHero = (0, _styledComponents.default)(function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      backgroundImage = _ref.backgroundImage,
      props = (0, _objectWithoutProperties2.default)(_ref, ["backgroundColor", "color", "backgroundImage"]);
  return /*#__PURE__*/_react.default.createElement(_container.Container, props);
}).withConfig({
  displayName: "hero__StyledHero",
  componentId: "sc-308z42-0"
})([".k-Hero__contentGridCol{position:relative;z-index:1;padding-top:", ";margin-left:", ";}.k-Hero__content{background-color:", ";color:", ";padding:", " ", ";@media (max-width:", "){padding:", " ", ";}@media (max-width:", "){padding:", " ", ";}}.k-Hero__imageGridCol{margin-left:-", ";padding-bottom:", ";}.k-Hero__image{width:calc(100% + ", ");height:100%;background-image:url(", ");background-color:", ";background-size:cover;background-repeat:no-repeat;background-position:50% 50%;@media (max-width:", "){width:calc(100% + ", ");height:100vw;margin-left:", ";}@media (max-width:", "){width:calc(100% + ", ");margin-left:", ";}}&.k-Hero--direction-left{.k-Hero__contentGridCol{@media (max-width:", "){padding-top:", ";margin-left:0;}}.k-Hero__content{@media (max-width:", "){margin-left:", ";}}.k-Hero__imageGridCol{@media (max-width:", "){margin-left:-", ";padding-bottom:0;}@media (max-width:", "){margin-left:-100%;}}}&.k-Hero--direction-right{.k-Hero__contentGridCol{margin-left:", ";@media (max-width:", "){padding-top:", ";margin-left:", ";}@media (max-width:", "){margin-left:0;}}.k-Hero__content{@media (max-width:", "){margin-right:", ";}}.k-Hero__imageGridCol{margin-left:-", ";@media (max-width:", "){margin-left:-", ";}@media (max-width:", "){margin-left:-100%;}}.k-Hero__image{margin-left:", ";}}&.k-Hero--tiny{@media (min-width:", "){.k-Hero__contentGridCol{padding-bottom:", ";}.k-Hero__imageGridCol{padding-bottom:0;}}}"], 1 / _gridConfig.NUM_COLUMNS * 100 + 'vw', 1 / _gridConfig.NUM_COLUMNS * 100 + '%', function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(115), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(85), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(20), 2 / _gridConfig.NUM_COLUMNS * 100 + '%', 1 / 2 / _gridConfig.NUM_COLUMNS * 100 + 'vw', (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), function (_ref4) {
  var backgroundImage = _ref4.backgroundImage;
  return backgroundImage;
}, function (_ref5) {
  var backgroundColor = _ref5.backgroundColor;
  return backgroundColor;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING * 2), (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE * 2), (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), 8 / _gridConfig.NUM_COLUMNS * 100 + 'vw', (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), 10 / _gridConfig.NUM_COLUMNS * 100 + '%', (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), 5 / _gridConfig.NUM_COLUMNS * 100 + '%', (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), 8 / _gridConfig.NUM_COLUMNS * 100 + 'vw', 2 / _gridConfig.NUM_COLUMNS * 100 + '%', (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING_MOBILE), 11 / _gridConfig.NUM_COLUMNS * 100 + '%', (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), 12 / _gridConfig.NUM_COLUMNS * 100 + '%', (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(-_gridConfig.CONTAINER_PADDING / 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), 1 / 2 / _gridConfig.NUM_COLUMNS * 100 + 'vw');

var Hero = function Hero(_ref6) {
  var direction = _ref6.direction,
      tiny = _ref6.tiny,
      imageSrc = _ref6.imageSrc,
      contentBackgroundColor = _ref6.contentBackgroundColor,
      contentColor = _ref6.contentColor,
      children = _ref6.children,
      props = (0, _objectWithoutProperties2.default)(_ref6, ["direction", "tiny", "imageSrc", "contentBackgroundColor", "contentColor", "children"]);
  return /*#__PURE__*/_react.default.createElement(StyledHero, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-Hero', props.className, "k-Hero--direction-".concat(direction), {
      'k-Hero--tiny': tiny
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
  tiny: _propTypes.default.bool,
  imageSrc: _propTypes.default.string,
  contentBackgroundColor: _propTypes.default.string,
  contentColor: _propTypes.default.string
};
Hero.defaultProps = {
  direction: 'left',
  tiny: false,
  imageSrc: '',
  contentBackgroundColor: _colorsConfig.default.font1,
  contentColor: _colorsConfig.default.background1
};