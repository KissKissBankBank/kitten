import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
export var StyledContributionCard = styled.article.withConfig({
  displayName: "styles__StyledContributionCard",
  componentId: "jbz7v4-0"
})(["max-width:100%;position:relative;display:block;overflow:hidden;box-sizing:border-box;border-width:", ";border-style:solid;border-color:", ";border-radius:", ";border-width:var(--contributionCard--border-width);border-style:var(--contributionCard--border-style);border-color:var(--contributionCard--border-color);border-radius:var(--contributionCard--border-radius);@media (min-width:", "px){height:calc(", " + 2 * var(--contributionCard--border-width));display:flex;}.k-ContributionCard__imageWrapper{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;@media (min-width:", "px){flex:0 0 ", ";}@media (max-width:", "px){padding-top:calc(5 / 8 * 100%);}img,figure{display:block;position:absolute;object-fit:cover;object-position:center center;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}svg{width:80%;@media (min-width:", "px){width:100%;}}}.k-ContributionCard__close{position:absolute;right:0;top:0;border-right:none;border-top:none;}.k-ContributionCard__gridWrapper{padding:", ";display:grid;align-items:center;align-content:flex-start;grid-gap:", " ", ";grid-template-columns:1fr 1fr;grid-template-rows:1fr auto;@media (min-width:", "px){width:100%;grid-gap:0 ", ";grid-template-columns:auto ", " ", ";grid-template-rows:1fr;&.k-ContributionCard__gridWrapper--largeInput{grid-template-columns:auto ", " ", ";}}}.k-ContributionCard__title{grid-column:1 / span 2;grid-row:1;font-size:", ";line-height:", ";place-self:center start;@media (min-width:", "px){font-size:", ";margin-top:0;:not(.k-ContributionCard__title--large){grid-column:1;}}}.k-ContributionCard__pillNumber{place-self:center flex-start;}.k-ContributionCard__amount{place-self:center flex-end;@media (min-width:", "px){margin-right:", ";margin-top:0;place-self:center center;}}.k-ContributionCard__input{place-self:flex-start center;@media (min-width:", "px){place-self:center flex-start;}}.k-ContributionCard__action{place-self:flex-start center;min-width:auto;@media (min-width:", "px){margin-right:", ";place-self:center flex-end;}}.k-ContributionCard__description{margin-top:", ";margin-bottom:0;}"], pxToRem(2), COLORS.line1, pxToRem(8), ScreenConfig.M.min, pxToRem(100), ScreenConfig.M.min, pxToRem(160), ScreenConfig.S.max, ScreenConfig.M.min, pxToRem(20), pxToRem(20), pxToRem(10), ScreenConfig.M.min, pxToRem(10), pxToRem(85), pxToRem(150), pxToRem(102), pxToRem(150), stepToRem(-1), pxToRem(16), ScreenConfig.M.min, stepToRem(0), ScreenConfig.M.min, pxToRem(10), ScreenConfig.M.min, ScreenConfig.M.min, pxToRem(10), pxToRem(5));