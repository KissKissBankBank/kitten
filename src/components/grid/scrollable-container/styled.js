"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledScrollableContainer = exports.scrollableContainerStyle = exports.StyledContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _container = require("../../../components/grid/container");

var _polished = require("polished");

var gradientWidth = 20;
var StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "styled__StyledContainer",
  componentId: "d41exg-0"
})(["position:relative;padding-left:0;padding-right:0;"]);
exports.StyledContainer = StyledContainer;

var scrollableContainerStyle = function scrollableContainerStyle(_ref) {
  var backgroundColor = _ref.backgroundColor,
      shadowColor = _ref.shadowColor;
  return (0, _styledComponents.css)(["display:flex;white-space:nowrap;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}background-image:linear-gradient( to right,", " 30%,", " ),linear-gradient( to left,", " 30%,", " ),radial-gradient( farthest-side at 0 50%,", ",", " ),radial-gradient( farthest-side at 100% 50%,", ",", " );background-repeat:no-repeat;background-size:", " 100%,", " 100%,", " 100%,", " 100%;background-position:0,100%,0,100%;background-attachment:local,local,scroll,scroll;"], (0, _polished.rgba)(backgroundColor, 1), (0, _polished.rgba)(backgroundColor, 0), (0, _polished.rgba)(backgroundColor, 1), (0, _polished.rgba)(backgroundColor, 0), (0, _polished.rgba)(shadowColor, 0.3), (0, _polished.rgba)(shadowColor, 0), (0, _polished.rgba)(shadowColor, 0.3), (0, _polished.rgba)(shadowColor, 0), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20));
};

exports.scrollableContainerStyle = scrollableContainerStyle;

var StyledScrollableContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__StyledScrollableContainer",
  componentId: "d41exg-1"
})(["", ""], function (props) {
  return scrollableContainerStyle(props);
});

exports.StyledScrollableContainer = StyledScrollableContainer;