"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledScrollableContainer = exports.scrollableContainerStyle = exports.StyledContainer = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _container = require("../../../components/layout/container");

var gradientWidth = 20;
var StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "styled__StyledContainer",
  componentId: "ecvjg4-0"
})(["position:relative;padding-left:0;padding-right:0;width:100%;"]);
exports.StyledContainer = StyledContainer;

var scrollableContainerStyle = function scrollableContainerStyle(_ref) {
  (0, _objectDestructuringEmpty2.default)(_ref);
  return (0, _styledComponents.css)(["display:flex;white-space:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}scrollbar-width:none;&:before,&:after{content:'';display:block;position:absolute;top:0;bottom:0;pointer-events:none;touch-action:none;}", " ", ""], function (_ref2) {
    var displayLeftGradient = _ref2.displayLeftGradient,
        shadowColor = _ref2.shadowColor;
    return displayLeftGradient && (0, _styledComponents.css)(["&:before{left:0;width:", ";background-image:linear-gradient( to right,", ",transparent );}"], (0, _typography.pxToRem)(gradientWidth), shadowColor);
  }, function (_ref3) {
    var displayRightGradient = _ref3.displayRightGradient,
        shadowColor = _ref3.shadowColor;
    return displayRightGradient && (0, _styledComponents.css)(["&:after{right:0;width:", ";background-image:linear-gradient(to left,", ",transparent);}"], (0, _typography.pxToRem)(gradientWidth), shadowColor);
  });
};

exports.scrollableContainerStyle = scrollableContainerStyle;

var StyledScrollableContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__StyledScrollableContainer",
  componentId: "ecvjg4-1"
})(["", ""], function (props) {
  return scrollableContainerStyle(props);
});

exports.StyledScrollableContainer = StyledScrollableContainer;