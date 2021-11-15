"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledNextText = exports.StyledPrevText = exports.StyledArrowIcon = exports.StyledLeftArrowContainer = exports.StyledRightArrowContainer = exports.LeftEmptyContainer = exports.RightEmptyContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var _typography = require("../../../../../helpers/utils/typography");

var _arrowIcon = require("../../../../graphics/icons/arrow-icon");

var sharedStyledArrowIcons = (0, _styledComponents.css)(["color:#fff;", ";align-items:center;display:flex;transition:transform 0.3s ease-in-out;line-height:1;width:40%;"], _typographyConfig.default.fontStyles.regular);
var sharedHoverStyledArrowIcons = (0, _styledComponents.css)(["cursor:pointer;color:", ";svg{fill:", ";}"], function (_ref) {
  var hoverColor = _ref.hoverColor;
  return hoverColor;
}, function (_ref2) {
  var hoverColor = _ref2.hoverColor;
  return hoverColor;
});
var rightContainer = (0, _styledComponents.css)(["justify-content:flex-end;text-align:right;"]);
var leftContainer = (0, _styledComponents.css)(["justify-content:flex-start;"]);

var RightEmptyContainer = _styledComponents.default.div.withConfig({
  displayName: "styled-components__RightEmptyContainer",
  componentId: "sc-1i0ijq1-0"
})(["", " flex:1;"], rightContainer);

exports.RightEmptyContainer = RightEmptyContainer;

var LeftEmptyContainer = _styledComponents.default.div.withConfig({
  displayName: "styled-components__LeftEmptyContainer",
  componentId: "sc-1i0ijq1-1"
})(["", " flex:1;"], leftContainer);

exports.LeftEmptyContainer = LeftEmptyContainer;

var StyledRightArrowContainer = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledRightArrowContainer",
  componentId: "sc-1i0ijq1-2"
})(["", " ", " &:focus,&:active,&:hover{transform:translate(", ");", "}"], rightContainer, sharedStyledArrowIcons, (0, _typography.pxToRem)(8), sharedHoverStyledArrowIcons);

exports.StyledRightArrowContainer = StyledRightArrowContainer;

var StyledLeftArrowContainer = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledLeftArrowContainer",
  componentId: "sc-1i0ijq1-3"
})(["", " ", " &:focus,&:active,&:hover{transform:translate(-", ");", "}"], leftContainer, sharedStyledArrowIcons, (0, _typography.pxToRem)(8), sharedHoverStyledArrowIcons);

exports.StyledLeftArrowContainer = StyledLeftArrowContainer;
var StyledArrowIcon = (0, _styledComponents.default)(_arrowIcon.ArrowIcon).withConfig({
  displayName: "styled-components__StyledArrowIcon",
  componentId: "sc-1i0ijq1-4"
})(["min-width:", ";min-height:", ";"], (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(9));
exports.StyledArrowIcon = StyledArrowIcon;

var StyledPrevText = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledPrevText",
  componentId: "sc-1i0ijq1-5"
})(["margin-left:", ";"], (0, _typography.pxToRem)(6));

exports.StyledPrevText = StyledPrevText;

var StyledNextText = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledNextText",
  componentId: "sc-1i0ijq1-6"
})(["margin-right:", ";"], (0, _typography.pxToRem)(6));

exports.StyledNextText = StyledNextText;