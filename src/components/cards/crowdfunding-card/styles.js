"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCrowdfundingCard = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);
var loadingKeyframes = (0, _styledComponents.keyframes)(["from{transform:translateX(-100%)}to{transform:translateX(100%)}"]);
var mobileStyles = (0, _styledComponents.css)(["position:relative;padding-bottom:", ";overflow:hidden;display:block;&[href]:focus{outline:", " solid ", ";outline-offset:", ";}.k-CrowdfundingCard__paddedContainer{padding:0 ", ";}.k-CrowdfundingCard__noWrap{white-space:nowrap;}.k-CrowdfundingCard__image__imageContainer{overflow:hidden;position:relative;& > .k-CrowdfundingCard__image__image{display:block;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;text-align:center;}}.k-CrowdfundingCard__image__avatar{margin-left:", ";background-color:", ";}.k-CrowdfundingCard__image__owner{margin-left:", ";margin-right:calc(2 * ", ");line-height:1.2;}.k-CrowdfundingCard__image__ownerContainer{display:none;position:relative;top:0;margin-top:", ";background-color:", ";}.k-CrowdfundingCard__title{flex:1;padding:0;line-height:1;margin-top:", ";}.k-CrowdfundingCard__title__title{font-size:", ";}.k-CrowdfundingCard__title__loadingElement{display:block;background-color:", ";border-bottom:", " solid ", ";height:", ";&:last-of-type{width:70%;border-top:", " solid ", ";border-bottom:0;}}.k-CrowdfundingCard__subtitle__container{display:none;}.k-CrowdfundingCard__subtitle__subtitleText{line-height:1.2;flex:1;&.k-CrowdfundingCard__subtitle__subtitleText--truncated{white-space:nowrap;overflow:hidden;}}.k-CrowdfundingCard__additionalInfo{line-height:1;white-space:nowrap;overflow:hidden;display:flex;margin-top:", ";> *{overflow:hidden;text-overflow:ellipsis;}}.k-CrowdfundingCard__subtitle__horizontalStroke{flex-shrink:0;margin:", " ", " ", " 0;}.k-CrowdfundingCard__subtitle__loadingElement{display:block;background-color:", ";width:", ";height:", ";}.k-CrowdfundingCard__informations{margin-top:", ";display:flex;flex-wrap:wrap;padding:0;line-height:1;}.k-CrowdfundingCard__informations__infoContainer{margin-right:", ";margin-bottom:", ";&:last-child{margin-right:0;}}.k-CrowdfundingCard__informations__info{font-size:", ";}.k-CrowdfundingCard__informations__loadingElement{display:block;background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";&:last-of-type{width:", ";border-top:", " solid ", ";border-bottom:0;}}.k-CrowdfundingCard__progressBar{display:flex;flex-direction:row;align-items:center;padding:0;margin-top:", ";margin-bottom:", ";}.k-CrowdfundingCard__progressBar__progress{flex:1;}.k-CrowdfundingCard__progressBar__percent{display:none;flex-shrink:0;margin-left:calc(2 * ", ");}.k-CrowdfundingCard__loading{position:absolute;top:0;bottom:0;left:0;right:0;transform:translateX(-100%);background:linear-gradient( 90deg,rgba(0,0,0,0),rgba(255,255,255,0.3),rgba(0,0,0,0) );animation:x 1s linear infinite;animation-name:", ";}&.k-CrowdfundingCardWidget{.k-CrowdfundingCard__titleAndDesc{margin-top:", ";}.k-CrowdfundingCard__titleWrapper{display:flex;}.k-CrowdfundingCard__title__dayCounter{line-height:1;margin-left:calc(2 * ", ");margin-top:", ";}}&.k-CrowdfundingCard--isLoading{.k-CrowdfundingCard__image__imageContainer{overflow:hidden;background-color:", ";}.k-CrowdfundingCard__image__title{background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";}.k-CrowdfundingCard__subtitle__horizontalStroke{background-color:", ";}.k-CrowdfundingCard__image__description{background-color:", ";border-top:", " solid ", ";width:", ";height:", ";}.k-CrowdfundingCard__progressBar__loadingPercent{display:block;background-color:", ";border-bottom:", " solid ", ";width:", ";height:", ";}.k-CrowdfundingCard__cardButton__loadingButton{background-color:", ";border-color:", ";}}&.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc{min-height:", ";}&.k-CrowdfundingCard--isStretched{height:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;.k-CrowdfundingCard__titleAndDesc{flex-grow:1;flex-shrink:0;}}.k-CrowdfundingCard__state{position:absolute;top:0;right:0;display:none;background-color:", ";padding:", ";line-height:1;}.k-CrowdfundingCard__widgetState{display:flex;position:absolute;background:", ";border-radius:", ";margin:", " ", " 0 0;right:0;top:0;padding:", " ", ";}"], (0, _typography.pxToRem)(5), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), COMPONENT_GUTTER, COMPONENT_GUTTER, _colorsConfig.default.line2, COMPONENT_GUTTER, COMPONENT_GUTTER, (0, _typography.pxToRem)(-30), _colorsConfig.default.background1, (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-1), _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), COMPONENT_GUTTER, (0, _typography.pxToRem)(5), _colorsConfig.default.line2, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(12), _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(65), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), COMPONENT_GUTTER, loadingKeyframes, (0, _typography.pxToRem)(5), COMPONENT_GUTTER, (0, _typography.pxToRem)(10), _colorsConfig.default.line2, _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(14), _colorsConfig.default.line2, _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(14), _colorsConfig.default.line2, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(16), _colorsConfig.default.line2, _colorsConfig.default.line2, (0, _typography.pxToRem)(50), _colorsConfig.default.background1, COMPONENT_GUTTER, _colorsConfig.default.font1, (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));
var tabletStyles = (0, _styledComponents.css)([".k-CrowdfundingCard__image__ownerContainer{display:inline-flex;align-items:center;}.k-CrowdfundingCard__title{padding:0 ", ";}.k-CrowdfundingCard__title__title{font-size:", ";}.k-CrowdfundingCard__subtitle__container{display:flex;align-items:center;line-height:1;padding:0 ", ";margin-top:", ";}.k-CrowdfundingCard__additionalInfo{padding:0 ", ";}.k-CrowdfundingCard__informations{margin-top:", ";padding:0 ", ";}.k-CrowdfundingCard__informations__infoContainer{margin-right:", ";&:last-child{margin-right:0;}}.k-CrowdfundingCard__progressBar{padding:0 ", ";margin-bottom:", ";}.k-CrowdfundingCard__progressBar__percent{display:inherit;}&.k-CrowdfundingCardWidget{.k-CrowdfundingCard__title{padding:0 ", " 0 0;}}&.k-CrowdfundingCard--titlesMinHeight .k-CrowdfundingCard__titleAndDesc{min-height:", ";}.k-CrowdfundingCard__state{display:inline-flex;align-items:center;}"], COMPONENT_GUTTER, (0, _typography.stepToRem)(2), COMPONENT_GUTTER, (0, _typography.pxToRem)(10), COMPONENT_GUTTER, (0, _typography.pxToRem)(20), COMPONENT_GUTTER, (0, _typography.pxToRem)(20), COMPONENT_GUTTER, (0, _typography.pxToRem)(20), COMPONENT_GUTTER, (0, _typography.pxToRem)(75));
var desktopStyles = (0, _styledComponents.css)([""]);
var StyledCrowdfundingCard = (0, _styledComponents.default)(function (_ref) {
  var imageContainerRatio = _ref.imageContainerRatio,
      forceVersion = _ref.forceVersion,
      props = (0, _objectWithoutProperties2.default)(_ref, ["imageContainerRatio", "forceVersion"]);
  return /*#__PURE__*/React.createElement("div", props);
}).withConfig({
  displayName: "styles__StyledCrowdfundingCard",
  componentId: "sc-1dxuhb7-0"
})(["", " .k-CrowdfundingCard__image__imageContainer{padding-top:calc( (", ") * 100% );}"], function (_ref2) {
  var forceVersion = _ref2.forceVersion;
  return function () {
    switch (forceVersion) {
      case 'desktop':
        return (0, _styledComponents.css)(["", ";", ";", ";"], mobileStyles, tabletStyles, desktopStyles);

      case 'tablet':
        return (0, _styledComponents.css)(["", ";", ";"], mobileStyles, tabletStyles);

      case 'mobile':
        return (0, _styledComponents.css)(["", ";"], mobileStyles);

      default:
        return (0, _styledComponents.css)(["", ";@media (min-width:", "){", ";}@media (min-width:", "){", ";}"], mobileStyles, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), tabletStyles, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), desktopStyles);
    }
  }();
}, function (_ref3) {
  var imageContainerRatio = _ref3.imageContainerRatio;
  return imageContainerRatio;
});
exports.StyledCrowdfundingCard = StyledCrowdfundingCard;