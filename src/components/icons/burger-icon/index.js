"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var StyledItem = _styledComponents.default.svg.withConfig({
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
  return isActive && (0, _styledComponents.css)([".item-buns{transform:translateX(2px);}.item-patty{transform:translateX(-2px);}"]);
}, function (_ref4) {
  var isAnimatedOnHover = _ref4.isAnimatedOnHover;
  return isAnimatedOnHover && (0, _styledComponents.css)(["&:hover,button:hover &,&:focus,button:focus &{.item-buns{transform:translateX(2px);}.item-patty{transform:translateX(-2px);}}"]);
});

var BurgerIcon = function BurgerIcon(_ref5) {
  var mainColor = _ref5.mainColor,
      hoverColor = _ref5.hoverColor,
      isActive = _ref5.isActive,
      iconTitle = _ref5.iconTitle,
      title = _ref5.title,
      width = _ref5.width,
      height = _ref5.height,
      isAnimatedOnHover = _ref5.isAnimatedOnHover,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["mainColor", "hoverColor", "isActive", "iconTitle", "title", "width", "height", "isAnimatedOnHover"]);
  return /*#__PURE__*/_react.default.createElement(StyledItem, (0, _extends2.default)({
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
  }, props), (iconTitle || title) && /*#__PURE__*/_react.default.createElement("title", null, iconTitle || title), /*#__PURE__*/_react.default.createElement("rect", {
    y: "0",
    width: "12",
    height: "2",
    className: "item-buns"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    y: "4",
    width: "12",
    height: "2",
    className: "item-patty"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    y: "8",
    width: "12",
    height: "2",
    className: "item-buns"
  }));
};

exports.BurgerIcon = BurgerIcon;
BurgerIcon.propTypes = {
  mainColor: _propTypes.default.string,
  hoverColor: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  iconTitle: (0, _deprecated.default)(_propTypes.default.string, 'Prefere use `title` prop instead'),
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
BurgerIcon.defaultProps = {
  mainColor: _colorsConfig.default.font1,
  hoverColor: _colorsConfig.default.primary1,
  isActive: false,
  title: null,
  width: 12,
  height: 10,
  isAnimatedOnHover: false
};