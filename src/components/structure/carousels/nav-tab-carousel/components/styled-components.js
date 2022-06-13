"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledRightArrowContainer = exports.StyledPrevText = exports.StyledNextText = exports.StyledLeftArrowContainer = exports.StyledArrowIcon = exports.RightEmptyContainer = exports.LeftEmptyContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../../../constants/typography-config"));

var _typography = require("../../../../../helpers/utils/typography");

var _arrowIcon = require("../../../../graphics/icons/arrow-icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sharedStyledArrowIcons = (0, _styledComponents.css)(["color:#fff;", ";align-items:center;display:flex;transition:transform 0.3s ease-in-out;line-height:1;width:40%;"], _typographyConfig.default.fontStyles['500']);
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
  componentId: "sc-1qd7yp2-0"
})(["", " flex:1;"], rightContainer);

exports.RightEmptyContainer = RightEmptyContainer;

var LeftEmptyContainer = _styledComponents.default.div.withConfig({
  displayName: "styled-components__LeftEmptyContainer",
  componentId: "sc-1qd7yp2-1"
})(["", " flex:1;"], leftContainer);

exports.LeftEmptyContainer = LeftEmptyContainer;

var StyledRightArrowContainer = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledRightArrowContainer",
  componentId: "sc-1qd7yp2-2"
})(["", " ", " &:focus,&:active,&:hover{transform:translate(", ");", "}"], rightContainer, sharedStyledArrowIcons, (0, _typography.pxToRem)(8), sharedHoverStyledArrowIcons);

exports.StyledRightArrowContainer = StyledRightArrowContainer;

var StyledLeftArrowContainer = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledLeftArrowContainer",
  componentId: "sc-1qd7yp2-3"
})(["", " ", " &:focus,&:active,&:hover{transform:translate(-", ");", "}"], leftContainer, sharedStyledArrowIcons, (0, _typography.pxToRem)(8), sharedHoverStyledArrowIcons);

exports.StyledLeftArrowContainer = StyledLeftArrowContainer;
var StyledArrowIcon = (0, _styledComponents.default)(_arrowIcon.ArrowIcon).withConfig({
  displayName: "styled-components__StyledArrowIcon",
  componentId: "sc-1qd7yp2-4"
})(["min-width:", ";min-height:", ";"], (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(9));
exports.StyledArrowIcon = StyledArrowIcon;

var StyledPrevText = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledPrevText",
  componentId: "sc-1qd7yp2-5"
})(["margin-left:", ";"], (0, _typography.pxToRem)(6));

exports.StyledPrevText = StyledPrevText;

var StyledNextText = _styledComponents.default.div.withConfig({
  displayName: "styled-components__StyledNextText",
  componentId: "sc-1qd7yp2-6"
})(["margin-right:", ";"], (0, _typography.pxToRem)(6));

exports.StyledNextText = StyledNextText;