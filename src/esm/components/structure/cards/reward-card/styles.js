import styled from 'styled-components';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { mq } from '../../../../constants/screen-config';
export var StyledRewardCard = styled.article.withConfig({
  displayName: "styles__StyledRewardCard",
  componentId: "sc-1t7xfa1-0"
})(["--rewardCard--border-width:0;--rewardCard--border-radius:0;--rewardCard--grid-col:repeat(auto-fit,minmax(", ",1fr));--rewardCard--box-shadow:var(--box-shadow-m);position:relative;box-shadow:var(--rewardCard--box-shadow);border-radius:var(--rewardCard--border-radius);display:flex;flex-direction:column;align-items:stretch;transition:border-color 0.2s ease-in-out;&.k-RewardCard--isStretched{height:100%;}&.k-RewardCard--hasBorder{--rewardCard--border-width:var(--border-width);--rewardCard--border-radius:var(--border-radius-m);}.k-RewardCard__imageWrapper{flex:0 0 auto;}.k-RewardCard__gridWrapper{flex:1 1 auto;padding:", " ", " ", ";display:grid;grid-template-columns:[row-start] var(--rewardCard--grid-col) [row-end];grid-gap:", ";align-content:start;overflow:hidden;text-align:left;&:first-child{padding-top:", ";}.k-RewardCard__drawer{grid-column:row-start / span row-end;align-self:start;margin:0;}.k-RewardCard__halfDrawer{margin:", " 0 0;}.k-RewardCard__drawer + .k-RewardCard__halfDrawer{grid-column-start:row-start;margin:", " 0 ", ";}.k-RewardCard__drawer--extensible{align-self:stretch;}}.k-RewardCard__button{margin:0 ", " ", ";flex:0 0 auto;}.k-RewardCard__imageWrapper{max-width:100%;margin:0;border-top-left-radius:calc( var(--rewardCard--border-radius) - var(--rewardCard--border-width) );border-top-right-radius:calc( var(--rewardCard--border-radius) - var(--rewardCard--border-width) );position:relative;padding-top:calc((5 / 8) * 100%);overflow:hidden;img,figure,video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center center;transition:transform 0.2s ease-in-out;}}.k-RewardCard__title{--RewardCardTitle-lineHeight:", ";line-height:var(--RewardCardTitle-lineHeight);}.k-RewardCard__title--truncateText{height:calc(2 * var(--RewardCardTitle-lineHeight));display:flex;align-items:center;.k-RewardCard__title{width:100%;white-space:nowrap;}}.k-RewardCard__amount__wrapper{margin:0;}.k-RewardCard__amount{position:relative;top:", ";font-size:", ";color:var(--color-primary-500);line-height:0.9em;letter-spacing:-0.015em !important;}.k-RewardCard__amount__suffix{font-size:", ";line-height:", ";color:var(--color-grey-700);}.k-RewardCard__descriptionWrapper{--rewardCard-description-fontSize:", ";@media ", "{--rewardCard-description-fontSize:", ";}.k-RewardCard__description--truncateText{overflow:hidden;position:relative;max-height:calc( 6 * (var(--rewardCard-description-fontSize) + ", ") );&.k-RewardCard__description--hasMore::after{content:'';position:absolute;height:calc( 2 * (var(--rewardCard-description-fontSize) + ", ") );left:0;width:100%;bottom:0;background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );}}.k-RewardCard__description__moreButton{margin-top:", ";}.k-RewardCard__description *{", ";font-size:var(--rewardCard-description-fontSize);line-height:calc( (var(--rewardCard-description-fontSize) + ", ") );}}.k-RewardCard__headingTag{position:absolute;top:", ";left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:", ";color:var(--color-primary-500);", " svg,path{color:inherit;&[fill]{fill:currentColor;}&[stroke]{stroke:currentColor;}}}.k-RewardCard__info__legend,.k-RewardCard__info__value{white-space:nowrap;}.k-RewardCard__tagList{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:", ";}&.k-RewardCard--hasHover:hover:not(.k-RewardCard--disabled),button&:hover:not(.k-RewardCard--disabled),a&:hover:not(.k-RewardCard--disabled){--rewardCard--box-shadow:var(--box-shadow-hover-m);cursor:pointer;.k-RewardCard__imageWrapper{img,figure,video{transform:scale(1.05);}}.k-RewardCard__button:not(.k-Button--disabled){border-color:var(--color-primary-700);background-color:var(--color-primary-700);}.k-RewardCard__description__moreButton{color:var(--color-primary-700);}}button&:active,a&:active{--rewardCard--border-color:var(--color-grey-600);}&.k-RewardCard--disabled{color:var(--color-grey-700);cursor:not-allowed;.k-RewardCard__title,.k-RewardCard__amount,.k-RewardCard__amount__suffix{color:var(--color-grey-900);}.k-Tag:not(.k-RewardCard__headingTag){background-color:var(--color-grey-300);color:var(--color-grey-800);}.k-Tag.k-RewardCard__headingTag{background-color:var(--color-grey-800);color:var(--color-grey-000);}.k-RewardCard__description__moreButton.k-u-color-primary1{color:var(--color-grey-700) !important;}.k-RewardCard__button{display:none !important;}}"], pxToRem(120), pxToRem(10), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(-10), pxToRem(-10), pxToRem(-10), pxToRem(20), pxToRem(20), pxToRem(22), pxToRem(-5), pxToRem(28), pxToRem(10), pxToRem(22), pxToRem(12), mq.tabletAndDesktop, pxToRem(14), pxToRem(4), pxToRem(4), pxToRem(10), TYPOGRAPHY.fontStyles.light.fontFamily, pxToRem(4), pxToRem(-12), pxToRem(6), TYPOGRAPHY.fontStyles.regular, pxToRem(10));