"use strict";

exports.__esModule = true;
exports.StyledContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _gridConfig = require("../../../constants/grid-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__StyledContainer",
  componentId: "sc-tuad86-0"
})(["margin-left:auto;margin-right:auto;box-sizing:border-box;max-width:", ";padding-left:", ";padding-right:", ";@media (min-width:", "px){padding-left:", ";padding-right:", ";}", " ", ""], (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), props => props.fullWidthBelowScreenSize && (0, _styledComponents.css)(["@media (max-width:", "px){padding-right:0;padding-left:0;}"], _screenConfig.ScreenConfig[props.fullWidthBelowScreenSize].max), props => props.styles);

exports.StyledContainer = StyledContainer;