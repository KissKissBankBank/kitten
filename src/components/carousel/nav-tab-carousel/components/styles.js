"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextTextStyles = exports.PrevTextStyles = exports.ArrowIconStyle = exports.LeftArrowContainerStyles = exports.RightArrowContainerStyles = exports.sharedHoverArrowIconStyles = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("./../../../../constants/typography-config"));

var _typography = require("./../../../../helpers/utils/typography");

var _arrowIcon = require("./../../../icons/arrow-icon");

var sharedArrowIconStyles = (0, _styledComponents.css)(["color:#fff;", ";align-items:center;display:flex;transition:transform 0.3s ease-in-out;line-height:1;width:40%;"], _typographyConfig.default.fontStyles.regular);
var sharedHoverArrowIconStyles = (0, _styledComponents.css)(["cursor:pointer;color:", ";svg{fill:", ";}"], function (_ref) {
  var hoverColor = _ref.hoverColor;
  return hoverColor;
}, function (_ref2) {
  var hoverColor = _ref2.hoverColor;
  return hoverColor;
});
exports.sharedHoverArrowIconStyles = sharedHoverArrowIconStyles;

var RightArrowContainerStyles = _styledComponents.default.div.withConfig({
  displayName: "styles__RightArrowContainerStyles",
  componentId: "td72ue-0"
})(["justify-content:flex-end;text-align:right;", " &:hover{transform:translate(", ");", "}"], sharedArrowIconStyles, (0, _typography.pxToRem)(8), sharedHoverArrowIconStyles);

exports.RightArrowContainerStyles = RightArrowContainerStyles;

var LeftArrowContainerStyles = _styledComponents.default.div.withConfig({
  displayName: "styles__LeftArrowContainerStyles",
  componentId: "td72ue-1"
})(["justify-content:flex-start;", " &:hover{transform:translate(-", ");", "}"], sharedArrowIconStyles, (0, _typography.pxToRem)(8), sharedHoverArrowIconStyles);

exports.LeftArrowContainerStyles = LeftArrowContainerStyles;
var ArrowIconStyle = (0, _styledComponents.default)(_arrowIcon.ArrowIcon).withConfig({
  displayName: "styles__ArrowIconStyle",
  componentId: "td72ue-2"
})(["min-width:9px;min-height:9px;"]);
exports.ArrowIconStyle = ArrowIconStyle;

var PrevTextStyles = _styledComponents.default.div.withConfig({
  displayName: "styles__PrevTextStyles",
  componentId: "td72ue-3"
})(["margin-left:", ";"], (0, _typography.pxToRem)(6));

exports.PrevTextStyles = PrevTextStyles;

var NextTextStyles = _styledComponents.default.div.withConfig({
  displayName: "styles__NextTextStyles",
  componentId: "td72ue-4"
})(["margin-right:", ";"], (0, _typography.pxToRem)(6));

exports.NextTextStyles = NextTextStyles;