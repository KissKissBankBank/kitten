import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
export var StyledLegacyRewardCard = styled.div.withConfig({
  displayName: "styles__StyledLegacyRewardCard",
  componentId: "oie3dy-0"
})(["border-width:", ";border-style:solid;border-color:", ";.k-LegacyRewardCard__element--disabled{filter:grayscale(1) opacity(0.4);cursor:not-allowed;}.k-LegacyRewardCard__row{padding-left:", ";padding-right:", ";}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__row{@media (min-width:", "){padding-left:", ";padding-right:", ";}@media (min-width:", "){padding-left:", ";padding-right:0;}@media (min-width:", "){padding-left:", ";padding-right:0;}}.LegacyRewardCard__col_image{@media (min-width:", "){padding-right:", ";}}&.k-LegacyRewardCard--tinyVersion .LegacyRewardCard__col_image{padding-right:", ";}.k-LegacyRewardCard__list{font-size:", ";margin-right:0;}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__list{@media (min-width:", "){font-size:", ";margin-right:", ";}}.k-LegacyRewardCard__choiceButton{padding-left:", ";padding-right:", ";}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__choiceButton{@media (min-width:", "){padding-left:", ";padding-right:", ";}}.k-LegacyRewardCard__button{width:100%;position:relative;box-sizing:border-box;}&:not(.k-LegacyRewardCard--tinyVersion) .k-LegacyRewardCard__button{@media (min-width:", "){display:flex;align-items:center;justify-content:center;line-height:1.3rem;padding:", " ", ";}}.k-LegacyRewardCard__myContribution{display:flex;align-items:center;}.k-LegacyRewardCard__myContribution__text{display:flex;line-height:normal;}.k-LegacyRewardCard__iconBadge{margin-right:", ";}.k-LegacyRewardCard__image{width:100%;display:block;}"], pxToRem(2), COLORS.line1, pxToRem(20), pxToRem(20), pxToRem(ScreenConfig.S.min), pxToRem(30), pxToRem(30), pxToRem(ScreenConfig.M.min), pxToRem(40), pxToRem(ScreenConfig.L.min), pxToRem(115), pxToRem(ScreenConfig.M.min), pxToRem(50), pxToRem(10), stepToRem(-1), pxToRem(ScreenConfig.M.min), stepToRem(0), pxToRem(30), pxToRem(20), pxToRem(20), pxToRem(ScreenConfig.S.min), pxToRem(30), pxToRem(30), pxToRem(ScreenConfig.S.min), pxToRem(22), pxToRem(30), pxToRem(10));