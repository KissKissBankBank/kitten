"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRewardCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledRewardCard = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledRewardCard",
  componentId: "sc-1svjs2y-0"
})(["background-color:", ";width:100%;box-sizing:border-box;border:", " solid ", ";.k-RewardCard__diamondBadge,.k-RewardCard__starredBadge{display:flex;line-height:1rem;align-items:center;margin-bottom:", ";& > * + *{margin-left:", ";}&.k-RewardCard__diamondBadge--disabled,&.k-RewardCard__starredBadge--disabled{color:", ";cursor:not-allowed;}}.k-RewardCard__diamondBadge__content,.k-RewardCard__starredBadge__content{display:flex;flex-direction:column;}.k-RewardCard__diamondBadge__diamondIcon{height:", ";width:", ";}.k-RewardCard__starredBadge__starredIcon{height:", ";width:", ";}.k-RewardCard__title{&.k-RewardCard__title--disabled{color:", ";cursor:not-allowed;}}.k-RewardCard__image{width:100%;&.k-RewardCard__image--disabled{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}}.k-RewardCard__video{width:100%;&.k-RewardCard__video--disabled{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}}.k-RewardCard__infos{display:block;line-height:", ";&.k-RewardCard__infos--hasBottomMargin{margin-bottom:", ";}&.k-RewardCard__infos--disabled{color:", ";cursor:not-allowed;}}.k-RewardCard__cardRow{display:flex;flex-wrap:wrap;padding:0 ", ";}.k-RewardCard__rowContent{flex-grow:9999;flex-basis:", ";margin:", ";max-width:calc(100% - ", ");}.k-RewardCard__rowSide{flex-grow:1;flex-basis:", ";margin-left:", ";margin-right:", ";&.k-RewardCard__rowSide--hasMargins{margin-top:", ";margin-bottom:", ";}}.k-RewardCard__checkedSection{display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;padding:0 ", ";margin-top:", ";margin-bottom:", ";}.k-RewardCard__checkedIconLine{border-top:", " ", " solid;margin-top:", ";display:flex;justify-content:center;}.k-RewardCard__iconBadge{margin-top:", ";}&.k-rewardCard--withoutBorder{border:none;}&.k-RewardCard--isDisabled{.k-RewardCard__diamondBadge,.k-RewardCard__starredBadge{cursor:not-allowed;color:", ";}.k-RewardCard__title{color:", ";cursor:not-allowed;}.k-RewardCard__image,.k-RewardCard__video{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}.k-RewardCard__infos{color:", ";cursor:not-allowed;}}"], _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.font2, (0, _typography.pxToRem)(28), (0, _typography.pxToRem)(19), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), _colorsConfig.default.font2, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.font2, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(275), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(190), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(-15), _colorsConfig.default.font2, _colorsConfig.default.font2, _colorsConfig.default.font2);

exports.StyledRewardCard = StyledRewardCard;