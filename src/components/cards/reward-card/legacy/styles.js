"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLegacyRewardCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var StyledLegacyRewardCard = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledLegacyRewardCard",
  componentId: "oie3dy-0"
})(["border-width:", ";border-style:solid;border-color:", ";.k-LegacyRewardCard__element--disabled{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}.k-LegacyRewardCard__row{padding-left:", ";padding-right:", ";}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__row{@media (min-width:", "){padding-left:", ";padding-right:", ";}@media (min-width:", "){padding-left:", ";padding-right:0;}@media (min-width:", "){padding-left:", ";padding-right:0;}}.LegacyRewardCard__col_image{@media (min-width:", "){padding-right:", ";}}&.k-LegacyRewardCard--tinyVersion .LegacyRewardCard__col_image{padding-right:", ";}.k-LegacyRewardCard__list{font-size:", ";margin-right:0;}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__list{@media (min-width:", "){font-size:", ";margin-right:", ";}}.k-LegacyRewardCard__choiceButton{padding-left:", ";padding-right:", ";}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__choiceButton{@media (min-width:", "){padding-left:", ";padding-right:", ";}}.k-LegacyRewardCard__button{width:100%;position:relative;box-sizing:border-box;}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__button{@media (min-width:", "){display:flex;align-items:center;justify-content:center;line-height:1.3rem;padding:", " ", ";}}.k-LegacyRewardCard__myContribution{display:flex;align-items:center;}.k-LegacyRewardCard__myContribution__text{display:flex;line-height:normal;}.k-LegacyRewardCard__iconBadge{margin-right:", ";}.k-LegacyRewardCard__image{width:100%;display:block;}"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(115), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(10));

exports.StyledLegacyRewardCard = StyledLegacyRewardCard;