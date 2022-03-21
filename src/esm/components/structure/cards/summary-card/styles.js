import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["type"],
    _excluded2 = ["type"];
import React from 'react';
import styled, { css } from 'styled-components';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { mq } from '../../../../constants/screen-config';
/* ****************************************
   Type-specific common styles
   ****************************************/

var ownerContributionStyles = css(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", ";grid-template-areas:'title amount contribution availability last-stretch';}&.k-SummaryCard-Wrapper--tablet{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--small,&.k-SummaryCard-Wrapper--mobile{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", ";grid-template-areas:'title amount contribution last-stretch';& > [class*='__availability']{display:none;}}}}"], mq.tabletAndDesktop, pxToRem(140), pxToRem(90), pxToRem(100), pxToRem(90), pxToRem(20), pxToRem(120), pxToRem(90), pxToRem(90), pxToRem(20));
var ownerSubscriptionStyles = css(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", " ", ";grid-template-areas:'title amount frequency subscription availability last-stretch';}&.k-SummaryCard-Wrapper--tablet{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", " ", ";}}}&.k-SummaryCard-Wrapper--small{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", ";grid-template-areas:'title amount subscription last-stretch';& > [class*='__frequency'],& > [class*='__availability']{display:none;}}}}"], mq.tabletAndDesktop, pxToRem(80), pxToRem(80), pxToRem(80), pxToRem(90), pxToRem(110), pxToRem(20), pxToRem(80), pxToRem(60), pxToRem(80), pxToRem(80), pxToRem(90), pxToRem(20), pxToRem(60), pxToRem(90), pxToRem(90), pxToRem(20));
var contributorContributionStyles = css(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) minmax(", ",1fr) ", " ", " ", " ", ";grid-template-areas:'title description amount payment shipping last';}&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--tablet,&.k-SummaryCard-Wrapper--small,&.k-SummaryCard-Wrapper--mobile{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) minmax(", ",1fr) ", " ", " ", ";grid-template-areas:'title description amount payment last';& > [class*='__shipping']{display:none;}}}}"], mq.tabletAndDesktop, pxToRem(80), pxToRem(80), pxToRem(80), pxToRem(80), pxToRem(120), pxToRem(50), pxToRem(80), pxToRem(80), pxToRem(70), pxToRem(70), pxToRem(50));
var contributorSubscriptionStyles = css(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",3fr) minmax(", ",2fr) ", " ", " ", " ", " ", ";grid-template-areas:'title description amount payment status shipping last';}&.k-SummaryCard-Wrapper--large,&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",3fr) minmax(", ",2fr) ", " ", " ", " ", " ", ";grid-template-areas:'title description amount payment status shipping last';}}&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--tablet,&.k-SummaryCard-Wrapper--small,&.k-SummaryCard-Wrapper--mobile{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", " ", ";grid-template-areas:'title description amount payment status last';& > [class*='__shipping']{display:none;}}}}"], mq.tabletAndDesktop, pxToRem(100), pxToRem(80), pxToRem(120), pxToRem(110), pxToRem(80), pxToRem(110), pxToRem(40), pxToRem(100), pxToRem(80), pxToRem(100), pxToRem(80), pxToRem(70), pxToRem(100), pxToRem(40), pxToRem(80), pxToRem(80), pxToRem(70), pxToRem(60), pxToRem(70), pxToRem(40));
var typeStyle = {
  ownerContribution: ownerContributionStyles,
  ownerSubscription: ownerSubscriptionStyles,
  contributorContribution: contributorContributionStyles,
  contributorSubscription: contributorSubscriptionStyles
};
/* ****************************************
   Common styles
   ****************************************/

var commonStyles = css(["@media ", "{display:flex;align-items:center;.k-SummaryCard-Wrapper__imageWrapper{align-self:stretch;flex:0 0 ", ";}.k-SummaryCard-Wrapper__gridWrapper{display:grid;align-items:center;align-content:flex-start;width:100%;padding-left:", ";padding-right:", ";grid-gap:", " ", ";grid-template-rows:1fr;& > .k-SummaryCard__cell{grid-area:var(--summaryCardCell-name);}}}"], mq.tabletAndDesktop, pxToRem(160), pxToRem(30), pxToRem(30), pxToRem(10), pxToRem(20));
/* ****************************************
   Card styles
   ****************************************/

export var StyledSummaryCard = styled(function (_ref) {
  var type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", props);
}).withConfig({
  displayName: "styles__StyledSummaryCard",
  componentId: "sc-5q7xxr-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);transition:background-color 0.2s ease,border-color 0.2s ease;border:var(--border);border-radius:var(--border-radius-m);&.k-SummaryCard--hasAction{&:hover{background-color:var(--color-grey-100);border-color:var(--color-grey-500);}&:active{background-color:var(--color-grey-200);border-color:var(--color-grey-600);}}@media ", "{min-height:", ";}.k-SummaryCard__action{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;border-radius:var(--border-radius-m);cursor:pointer;z-index:1;:focus-visible{outline:auto;}}.k-SummaryCard__imageWrapper{position:relative;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:center;@media ", "{padding-top:calc(5 / 8 * 100%);}img,figure{display:block;position:absolute;object-fit:cover;object-position:center center;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border-top-left-radius:calc(var(--border-radius-m) - ", ");border-top-right-radius:calc(var(--border-radius-m) - ", ");@media ", "{border-top-left-radius:calc(var(--border-radius-m) - ", ");border-bottom-left-radius:calc(var(--border-radius-m) - ", ");border-top-right-radius:0;}}svg{width:80%;@media ", "{width:100%;}}}.k-SummaryCard__gridWrapper{padding:", " ", ";display:grid;align-items:center;align-content:flex-start;grid-gap:", " 0;grid-template-columns:1fr auto;grid-template-rows:1fr auto;@media ", "{& >:not([class*='__last']){grid-column:1 / span 1;}& > [class*='__last']{grid-column:2 / span 1;}}}.k-SummaryCard__titleTag{display:flex;align-items:center;width:fit-content;max-width:100%;gap:", ";color:var(--color-primary-500);", " span{overflow:hidden;text-overflow:ellipsis;}svg,path{color:inherit;flex:0 0 auto;&[fill]{fill:currentColor;}&[stroke]{stroke:currentColor;}}}.k-SummaryCard__cell[class*='__last-stretch']{place-self:stretch flex-end;}.k-SummaryCard__cell[class*='__last-stretch']{z-index:2;display:flex;align-items:stretch;justify-content:stretch;margin:", " ", ";.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;padding:0 ", ";&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}", " ", ""], mq.tabletAndDesktop, pxToRem(100), mq.mobile, pxToRem(2), pxToRem(2), mq.tabletAndDesktop, pxToRem(2), pxToRem(2), mq.tabletAndDesktop, pxToRem(15), pxToRem(20), pxToRem(10), mq.mobile, pxToRem(10), TYPOGRAPHY.fontStyles.regular, pxToRem(-20), pxToRem(-30), pxToRem(30), pxToRem(-2), commonStyles, function (_ref2) {
  var type = _ref2.type;
  return typeStyle[type];
});
/* ****************************************
   Title styles
   ****************************************/

export var StyledSummaryTitles = styled(function (_ref3) {
  var type = _ref3.type,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded2);

  return /*#__PURE__*/React.createElement("div", props);
}).withConfig({
  displayName: "styles__StyledSummaryTitles",
  componentId: "sc-5q7xxr-1"
})(["", " ", ""], commonStyles, function (_ref4) {
  var type = _ref4.type;
  return typeStyle[type];
});