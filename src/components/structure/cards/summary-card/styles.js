"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledSummaryTitles = exports.StyledSummaryCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* ****************************************
   Type-specific common styles
   ****************************************/
const ownerContributionStyles = (0, _styledComponents.css)(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", ";grid-template-areas:'title amount contribution availability last-stretch';}&.k-SummaryCard-Wrapper--tablet{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--small,&.k-SummaryCard-Wrapper--mobile{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", ";grid-template-areas:'title amount contribution last-stretch';& > [class*='__availability']{display:none;}}}}"], _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(140), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(120), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(20));
const ownerSubscriptionStyles = (0, _styledComponents.css)(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", " ", ";grid-template-areas:'title amount frequency subscription availability last-stretch';}&.k-SummaryCard-Wrapper--tablet{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", " ", ";}}}&.k-SummaryCard-Wrapper--small{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", ";grid-template-areas:'title amount subscription last-stretch';& > [class*='__frequency'],& > [class*='__availability']{display:none;}}}}"], _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(110), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(20));
const contributorContributionStyles = (0, _styledComponents.css)(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) minmax(", ",1fr) ", " ", " ", " ", ";grid-template-areas:'title description amount payment shipping last';}&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--tablet,&.k-SummaryCard-Wrapper--small,&.k-SummaryCard-Wrapper--mobile{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) minmax(", ",1fr) ", " ", " ", ";grid-template-areas:'title description amount payment last';& > [class*='__shipping']{display:none;}}}}"], _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(120), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(50));
const contributorSubscriptionStyles = (0, _styledComponents.css)(["@media ", "{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",3fr) minmax(", ",2fr) ", " ", " ", " ", " ", ";grid-template-areas:'title description amount payment status shipping last';}&.k-SummaryCard-Wrapper--large,&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",3fr) minmax(", ",2fr) ", " ", " ", " ", " ", ";grid-template-areas:'title description amount payment status shipping last';}}&.k-SummaryCard-Wrapper--medium{.k-SummaryCard-Wrapper__imageWrapper{display:none;}}&.k-SummaryCard-Wrapper--tablet,&.k-SummaryCard-Wrapper--small,&.k-SummaryCard-Wrapper--mobile{.k-SummaryCard-Wrapper__imageWrapper{display:none;}.k-SummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", " ", ";grid-template-areas:'title description amount payment status last';& > [class*='__shipping']{display:none;}}}}"], _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(120), (0, _typography.pxToRem)(110), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(110), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(40));
const typeStyle = {
  ownerContribution: ownerContributionStyles,
  ownerSubscription: ownerSubscriptionStyles,
  contributorContribution: contributorContributionStyles,
  contributorSubscription: contributorSubscriptionStyles
};
/* ****************************************
   Common styles
   ****************************************/

const commonStyles = (0, _styledComponents.css)(["@media ", "{display:flex;align-items:center;.k-SummaryCard-Wrapper__imageWrapper{align-self:stretch;flex:0 0 ", ";}.k-SummaryCard-Wrapper__gridWrapper{display:grid;align-items:center;align-content:flex-start;width:100%;padding-left:", ";padding-right:", ";grid-gap:", " ", ";grid-template-rows:1fr;& > .k-SummaryCard__cell{grid-area:var(--summaryCardCell-name);}}}"], _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));
/* ****************************************
   Card styles
   ****************************************/

const StyledSummaryCard = (0, _styledComponents.default)(_ref => {
  let {
    type,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", props);
}).withConfig({
  displayName: "styles__StyledSummaryCard",
  componentId: "sc-5q7xxr-0"
})(["max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:var(--color-grey-000);transition:background-color 0.2s ease,border-color 0.2s ease;box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);&.k-SummaryCard--hasAction{&:hover{background-color:var(--color-grey-100);box-shadow:var(--box-shadow-hover-m);}&:active{background-color:var(--color-grey-200);border-color:var(--color-grey-600);}}@media ", "{min-height:", ";}.k-SummaryCard__action{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;border-radius:var(--border-radius-m);cursor:pointer;z-index:1;:focus-visible{outline:auto;}}.k-SummaryCard__imageWrapper{position:relative;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:center;@media ", "{padding-top:calc(5 / 8 * 100%);}img,figure{display:block;position:absolute;object-fit:cover;object-position:center center;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border-top-left-radius:calc(var(--border-radius-m) - ", ");border-top-right-radius:calc(var(--border-radius-m) - ", ");@media ", "{border-top-left-radius:calc(var(--border-radius-m) - ", ");border-bottom-left-radius:calc(var(--border-radius-m) - ", ");border-top-right-radius:0;}}svg{width:80%;@media ", "{width:100%;}}}.k-SummaryCard__gridWrapper{padding:", " ", ";display:grid;align-items:center;align-content:flex-start;grid-gap:", " 0;grid-template-columns:1fr auto;grid-template-rows:1fr auto;@media ", "{& > :not([class*='__last']){grid-column:1 / span 1;}& > [class*='__last']{grid-column:2 / span 1;}}}.k-SummaryCard__titleTag{display:flex;align-items:center;width:fit-content;max-width:100%;gap:", ";color:var(--color-primary-500);", " span{overflow:hidden;text-overflow:ellipsis;}svg,path{color:inherit;flex:0 0 auto;&[fill]{fill:currentColor;}&[stroke]{stroke:currentColor;}}}.k-SummaryCard__cell[class*='__last-stretch']{place-self:stretch flex-end;}.k-SummaryCard__cell[class*='__last-stretch']{z-index:2;display:flex;align-items:stretch;justify-content:stretch;margin:", " ", ";.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;padding:0 ", ";&:focus-visible .k-DropdownMenu__button__inside{outline:auto;outline-offset:", ";}}}", " ", ""], _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(100), _screenConfig.mq.mobile, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _screenConfig.mq.mobile, (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles['500'], (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(-30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(-2), commonStyles, _ref2 => {
  let {
    type
  } = _ref2;
  return typeStyle[type];
});
/* ****************************************
   Title styles
   ****************************************/

exports.StyledSummaryCard = StyledSummaryCard;
const StyledSummaryTitles = (0, _styledComponents.default)(_ref3 => {
  let {
    type,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", props);
}).withConfig({
  displayName: "styles__StyledSummaryTitles",
  componentId: "sc-5q7xxr-1"
})(["", " ", ""], commonStyles, _ref4 => {
  let {
    type
  } = _ref4;
  return typeStyle[type];
});
exports.StyledSummaryTitles = StyledSummaryTitles;