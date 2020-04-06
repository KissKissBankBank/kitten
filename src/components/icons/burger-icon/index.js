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

var StyledItem = _styledComponents.default.svg.withConfig({
  displayName: "burger-icon__StyledItem",
  componentId: "sc-2o2fz7-0"
})(["overflow:visible;fill:", ";:hover{fill:", ";}rect{transition:transform 0.2s ease-out,fill 0.15s;}", ""], function (props) {
  return props.mainColor;
}, function (props) {
  return props.hoverColor;
}, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && (0, _styledComponents.css)([".item-buns{transform:translateX(2px);}.item-patty{transform:translateX(-2px);}"]);
});

var BurgerIcon = function BurgerIcon(_ref2) {
  var mainColor = _ref2.mainColor,
      hoverColor = _ref2.hoverColor,
      isActive = _ref2.isActive,
      iconTitle = _ref2.iconTitle,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["mainColor", "hoverColor", "isActive", "iconTitle"]);
  return /*#__PURE__*/_react.default.createElement(StyledItem, (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 10",
    width: "12",
    height: "10",
    isActive: isActive,
    mainColor: mainColor,
    hoverColor: hoverColor
  }, props), iconTitle && /*#__PURE__*/_react.default.createElement("title", null, iconTitle), /*#__PURE__*/_react.default.createElement("rect", {
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
  iconTitle: _propTypes.default.string
};
BurgerIcon.defaultProps = {
  mainColor: _colorsConfig.default.font1,
  hoverColor: _colorsConfig.default.primary1,
  isActive: false,
  iconTitle: 'Menu'
};