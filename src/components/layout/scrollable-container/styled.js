"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.scrollableContainerStyle = exports.StyledScrollableContainer = exports.StyledContainer = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _container = require("../../../components/layout/container");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var gradientWidth = 20;
var StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "styled__StyledContainer",
  componentId: "sc-ecvjg4-0"
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
  componentId: "sc-ecvjg4-1"
})(["", ""], function (props) {
  return scrollableContainerStyle(props);
});

exports.StyledScrollableContainer = StyledScrollableContainer;