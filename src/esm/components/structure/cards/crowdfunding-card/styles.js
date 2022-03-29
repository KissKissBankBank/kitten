import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["forceVersion"];
import styled, { keyframes, css } from 'styled-components';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import COLORS from '../../../../constants/colors-config';
var COMPONENT_GUTTER = pxToRem(10);
var loadingKeyframes = keyframes(["from{transform:translateX(-100%)}to{transform:translateX(100%)}"]);
var mobileStyles = css(["position:relative;padding-bottom:", ";overflow:hidden;display:block;background:", ";color:", ";&[href]{text-decoration:inherit;color:inherit;.k-CrowdfundingCard__image__image{transition:transform 0.4s ease-in-out;}.k-CrowdfundingCard__title__title{transition:color 0.4s ease-in-out;}&:hover,&:focus{.k-CrowdfundingCard__image__image{transform:scale(1.07);}.k-CrowdfundingCard__title__title{color:", ";}}}.k-CrowdfundingCard__paddedContainer{padding:0 ", ";}.k-CrowdfundingCard__noWrap{white-space:nowrap;}.k-CrowdfundingCard__image__imageContainer{overflow:hidden;position:relative;padding-top:calc(var(--Image-container-ratio) * 100%);& > .k-CrowdfundingCard__image__image{display:block;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;text-align:center;}}.k-CrowdfundingCard__image__avatar{margin-left:", ";background-color:", ";}.k-CrowdfundingCard__image__owner{margin-left:", ";margin-right:calc(2 * ", ");line-height:1.2;}.k-CrowdfundingCard__image__ownerContainer{display:none;position:relative;top:0;margin-top:", ";background-color:", ";}.k-CrowdfundingCard__title{flex:1;padding:0;line-height:1;margin-top:", ";}.k-CrowdfundingCard__title__title{--line-clamp:2;font-size:", ";}.k-CrowdfundingCard__title__loadingElement{display:block;background-color:", ";border-bottom:", " solid ", ";height:", ";&:last-of-type{width:70%;border-top:", " solid ", ";border-bottom:0;}}.k-CrowdfundingCard__subtitle__container{display:none;}.k-CrowdfundingCard__subtitle__subtitleText{line-height:1.2;flex:1;&.k-CrowdfundingCard__subtitle__subtitleText--truncated{white-space:nowrap;overflow:hidden;}}.k-CrowdfundingCard__additionalInfo{line-height:1;white-space:nowrap;overflow:hidden;display:flex;margin-top:", ";> *{overflow:hidden;text-overflow:ellipsis;}}.k-CrowdfundingCard__subtitle__horizontalStroke{flex-shrink:0;margin:", " ", " ", " 0;}.k-CrowdfundingCard__subtitle__loadingElement{display:block;background-color:", ";width:", ";height:", ";}.k-CrowdfundingCard__informations{margin-top:", ";display:flex;flex-wrap:wrap;padding:0;line-height:1;}.k-CrowdfundingCard__informations__infoContainer{margin-right:", ";margin-bottom:", ";&:last-child{margin-right:0;}}.k-CrowdfundingCard__informations__info{font-size:", ";}.k-CrowdfundingCard__informations__loadingElement{display:block;background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";&:last-of-type{width:", ";border-top:", " solid ", ";border-bottom:0;}}.k-CrowdfundingCard__progressBar{display:flex;flex-direction:row;align-items:center;padding:0;margin-top:", ";margin-bottom:", ";}.k-CrowdfundingCard__progressBar__progress{flex:1;}.k-CrowdfundingCard__progressBar__percent{display:none;flex-shrink:0;margin-left:calc(2 * ", ");}.k-CrowdfundingCard__loading{position:absolute;top:0;bottom:0;left:0;right:0;transform:translateX(-100%);background:linear-gradient( 90deg,rgba(0,0,0,0),rgba(255,255,255,0.3),rgba(0,0,0,0) );animation:x 1s linear infinite;animation-name:", ";}&.k-CrowdfundingCard--isLoading{.k-CrowdfundingCard__image__imageContainer{overflow:hidden;background-color:", ";}.k-CrowdfundingCard__image__title{background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";}.k-CrowdfundingCard__subtitle__horizontalStroke{background-color:", ";}.k-CrowdfundingCard__image__description{background-color:", ";border-top:", " solid ", ";width:", ";height:", ";}.k-CrowdfundingCard__progressBar__loadingPercent{display:block;background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";}.k-CrowdfundingCard__cardButton__loadingButton{background-color:", ";border-color:", ";}}&.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc{min-height:", ";}&.k-CrowdfundingCard--isStretched{height:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;.k-CrowdfundingCard__titleAndDesc{flex-grow:1;flex-shrink:0;}}.k-CrowdfundingCard__state{position:absolute;top:0;right:0;display:none;background-color:", ";padding:", ";line-height:1;}.k-CrowdfundingCard__widgetState{display:flex;position:absolute;background:", ";border-radius:var(--border-radius-rounded);margin:", " ", " 0 0;right:0;top:0;padding:", " ", ";}"], pxToRem(5), COLORS.background1, COLORS.font1, COLORS.primary1, COMPONENT_GUTTER, COMPONENT_GUTTER, COLORS.line2, COMPONENT_GUTTER, COMPONENT_GUTTER, pxToRem(-30), COLORS.background1, pxToRem(10), stepToRem(-1), COLORS.line2, pxToRem(1), COLORS.background1, pxToRem(24), pxToRem(1), COLORS.background1, pxToRem(10), pxToRem(5), COMPONENT_GUTTER, pxToRem(5), COLORS.line2, pxToRem(80), pxToRem(12), pxToRem(15), pxToRem(15), pxToRem(5), pxToRem(12), COLORS.line2, pxToRem(1), COLORS.background1, pxToRem(40), pxToRem(16), pxToRem(65), pxToRem(1), COLORS.background1, pxToRem(5), pxToRem(10), COMPONENT_GUTTER, loadingKeyframes, COLORS.line2, COLORS.line2, pxToRem(1), COLORS.background1, pxToRem(70), pxToRem(14), COLORS.line2, COLORS.line2, pxToRem(1), COLORS.background1, pxToRem(100), pxToRem(14), COLORS.line2, pxToRem(1), COLORS.background1, pxToRem(40), pxToRem(16), COLORS.line2, COLORS.line2, pxToRem(50), COLORS.background1, COMPONENT_GUTTER, COLORS.font1, pxToRem(10), pxToRem(10), pxToRem(10), pxToRem(20));
var tabletStyles = css([".k-CrowdfundingCard__image__ownerContainer{display:inline-flex;align-items:center;}.k-CrowdfundingCard__title{padding:0 ", ";}.k-CrowdfundingCard__title__title{--line-clamp:3;font-size:", ";}.k-CrowdfundingCard__subtitle__container{display:flex;align-items:center;line-height:1;padding:0 ", ";margin-top:", ";}.k-CrowdfundingCard__additionalInfo{padding:0 ", ";}.k-CrowdfundingCard__informations{margin-top:", ";padding:0 ", ";}.k-CrowdfundingCard__informations__infoContainer{margin-right:", ";&:last-child{margin-right:0;}}.k-CrowdfundingCard__progressBar{padding:0 ", ";margin-bottom:", ";}.k-CrowdfundingCard__progressBar__percent{display:inherit;}&.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc{min-height:", ";}.k-CrowdfundingCard__state{display:inline-flex;align-items:center;}"], COMPONENT_GUTTER, stepToRem(2), COMPONENT_GUTTER, pxToRem(10), COMPONENT_GUTTER, pxToRem(20), COMPONENT_GUTTER, pxToRem(20), COMPONENT_GUTTER, pxToRem(20), pxToRem(75));
var desktopStyles = css([".k-CrowdfundingCard__title__title{--line-clamp:3;}"]);
export var StyledCrowdfundingCard = styled(function (_ref) {
  var forceVersion = _ref.forceVersion,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", props);
}).withConfig({
  displayName: "styles__StyledCrowdfundingCard",
  componentId: "sc-5cvojl-0"
})(["", ""], function (_ref2) {
  var forceVersion = _ref2.forceVersion;
  return function () {
    switch (forceVersion) {
      case 'desktop':
        return css(["", ";", ";", ";"], mobileStyles, tabletStyles, desktopStyles);

      case 'tablet':
        return css(["", ";", ";"], mobileStyles, tabletStyles);

      case 'mobile':
        return css(["", ";"], mobileStyles);

      default:
        return css(["", ";@media (min-width:", "){", ";}@media (min-width:", "){", ";}"], mobileStyles, pxToRem(ScreenConfig.S.min), tabletStyles, pxToRem(ScreenConfig.L.min), desktopStyles);
    }
  }();
});