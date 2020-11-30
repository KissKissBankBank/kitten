import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var StyledRewardCard = styled.div.withConfig({
  displayName: "styles__StyledRewardCard",
  componentId: "sc-1svjs2y-0"
})(["background-color:", ";width:100%;box-sizing:border-box;border:", " solid ", ";.k-RewardCard__diamondBadge,.k-RewardCard__starredBadge{display:flex;line-height:1rem;align-items:center;margin-bottom:", ";& > * + *{margin-left:", ";}&.k-RewardCard__diamondBadge--disabled,&.k-RewardCard__starredBadge--disabled{color:", ";cursor:not-allowed;}}.k-RewardCard__diamondBadge__content,.k-RewardCard__starredBadge__content{display:flex;flex-direction:column;}.k-RewardCard__diamondBadge__diamondIcon{height:", ";width:", ";}.k-RewardCard__starredBadge__starredIcon{height:", ";width:", ";}.k-RewardCard__title{&.k-RewardCard__title--disabled{color:", ";cursor:not-allowed;}}.k-RewardCard__image{width:100%;&.k-RewardCard__image--disabled{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}}.k-RewardCard__video{width:100%;&.k-RewardCard__video--disabled{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}}.k-RewardCard__infos{display:block;line-height:", ";&.k-RewardCard__infos--hasBottomMargin{margin-bottom:", ";}&.k-RewardCard__infos--disabled{color:", ";cursor:not-allowed;}}.k-RewardCard__cardRow{display:flex;flex-wrap:wrap;padding:0 ", ";}.k-RewardCard__rowContent{flex-grow:9999;flex-basis:", ";margin:", ";max-width:calc(100% - ", ");}.k-RewardCard__rowSide{flex-grow:1;flex-basis:", ";margin-left:", ";margin-right:", ";&.k-RewardCard__rowSide--hasMargins{margin-top:", ";margin-bottom:", ";}}.k-RewardCard__checkedSection{display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;align-items:center;padding:0 ", ";margin-top:", ";margin-bottom:", ";}.k-RewardCard__checkedIconLine{border-top:", " ", " solid;margin-top:", ";display:flex;justify-content:center;}.k-RewardCard__iconBadge{margin-top:", ";}&.k-rewardCard--withoutBorder{border:none;}&.k-RewardCard--isDisabled{.k-RewardCard__diamondBadge,.k-RewardCard__starredBadge{cursor:not-allowed;color:", ";}.k-RewardCard__title{color:", ";cursor:not-allowed;}.k-RewardCard__image,.k-RewardCard__video{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}.k-RewardCard__infos{color:", ";cursor:not-allowed;}}"], COLORS.background1, pxToRem(2), COLORS.line1, pxToRem(20), pxToRem(10), COLORS.font2, pxToRem(28), pxToRem(19), pxToRem(14), pxToRem(14), COLORS.font2, pxToRem(20), pxToRem(10), COLORS.font2, pxToRem(15), pxToRem(275), pxToRem(30), pxToRem(30), pxToRem(190), pxToRem(15), pxToRem(15), pxToRem(15), pxToRem(15), pxToRem(15), pxToRem(10), pxToRem(5), pxToRem(2), COLORS.line1, pxToRem(20), pxToRem(-15), COLORS.font2, COLORS.font2, COLORS.font2);