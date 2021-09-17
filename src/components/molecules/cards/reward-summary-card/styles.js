"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledRewardSummaryTitles = exports.StyledRewardSummaryCard = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var commonStyles = (0, _styledComponents.css)(["@media (min-width:", "px){display:flex;align-items:center;}.k-RewardSummaryCard-Wrapper__imageWrapper{@media (min-width:", "px){align-self:stretch;flex:0 0 ", ";}}.k-RewardSummaryCard-Wrapper__gridWrapper{@media (min-width:", "px){display:grid;align-items:center;align-content:flex-start;width:100%;padding-left:", ";padding-right:", ";grid-template-columns:minmax(", ",1fr) ", " ", " ", " ", ";grid-template-rows:1fr;grid-template-areas:'info amount contribution availability options';}& > [class*='__info']{grid-area:info;}& > [class*='__amount']{@media (min-width:", "px){grid-area:amount;}}& > [class*='__contribution']{grid-area:contribution;}& > [class*='__availability']{grid-area:availability;}& > [class*='__options']{grid-area:options;}}@media (min-width:", "px){&.k-RewardSummaryCard-Wrapper--tablet{.k-RewardSummaryCard-Wrapper__imageWrapper{display:none;}}&.k-RewardSummaryCard-Wrapper--small,&.k-RewardSummaryCard-Wrapper--mobile{.k-RewardSummaryCard-Wrapper__imageWrapper{display:none;}.k-RewardSummaryCard-Wrapper__gridWrapper{grid-template-columns:minmax(", ",1fr) ", " ", " ", ";grid-template-areas:'info amount contribution options';& > [class*='__availability']{display:none;}}}}"], _screenConfig.ScreenConfig.S.min, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(160), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(250), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(120), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(20));

var StyledRewardSummaryCard = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledRewardSummaryCard",
  componentId: "sc-idn93w-0"
})(["--rewardSummaryCard--border-width:", ";--rewardSummaryCard--border-radius:", ";max-width:100%;position:relative;display:block;box-sizing:border-box;text-decoration:none;background-color:", ";transition:background-color 0.2s ease,border-color 0.2s ease;&:hover{background-color:", ";}&:active{background-color:", ";}border-width:var(--rewardSummaryCard--border-width);border-style:solid;border-color:", ";border-radius:var(--rewardSummaryCard--border-radius);@media (min-width:", "px){min-height:", ";}.k-RewardSummaryCard__action{position:absolute;left:0;right:0;top:0;bottom:0;border-radius:var(--rewardSummaryCard--border-radius);cursor:pointer;z-index:1;&:focus{outline:", " solid ", ";outline-offset:0;}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}.k-RewardSummaryCard__imageWrapper{position:relative;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:center;@media (max-width:", "px){padding-top:calc(5 / 8 * 100%);}img,figure{display:block;position:absolute;object-fit:cover;object-position:center center;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border-top-left-radius:calc( var(--rewardSummaryCard--border-radius) - ", " );border-top-right-radius:calc( var(--rewardSummaryCard--border-radius) - ", " );@media (min-width:", "px){border-top-left-radius:calc( var(--rewardSummaryCard--border-radius) - ", " );border-bottom-left-radius:calc( var(--rewardSummaryCard--border-radius) - ", " );border-top-right-radius:0;}}svg{width:80%;@media (min-width:", "px){width:100%;}}}.k-RewardSummaryCard__gridWrapper{padding:", " ", ";display:grid;align-items:center;align-content:flex-start;grid-gap:", " 0;grid-template-columns:1fr auto;grid-template-rows:1fr auto;}.k-RewardSummaryCard__title{-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden;max-height:4.5rem;grid-column:1 / span 2;grid-row:1;padding-right:", ";font-size:", ";line-height:", ";place-self:center start;@media (min-width:", "px){grid-column:1;font-size:", ";margin-top:0;}}.k-RewardSummaryCard__titleTag{justify-self:start;display:flex;align-items:center;gap:", ";color:", ";", " svg,path{color:inherit;&[fill]{fill:currentColor;}&[stroke]{stroke:currentColor;}}}.k-RewardSummaryCard__amount{margin-right:", ";margin-top:0;place-self:center flex-start;}.k-RewardSummaryCard__contribution{margin-right:", ";margin-top:0;place-self:center flex-start;}.k-RewardSummaryCard__availability{margin-right:", ";margin-top:0;place-self:center flex-start;}.k-RewardSummaryCard__options{z-index:2;place-self:stretch flex-end;display:flex;align-items:stretch;justify-content:stretch;margin:", " ", ";.k-DropdownMenu .k-DropdownMenu__button{box-sizing:border-box;padding:0 ", ";&:focus{outline:", " solid ", ";outline-offset:0;}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}}", ""], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8), _colorsConfig.default.background1, _colorsConfig.default.background2, _colorsConfig.default.background3, _colorsConfig.default.line1, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(100), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _screenConfig.ScreenConfig.XS.max, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(16), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), _colorsConfig.default.primary1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(-30), (0, _typography.pxToRem)(30), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, commonStyles);

exports.StyledRewardSummaryCard = StyledRewardSummaryCard;

var StyledRewardSummaryTitles = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledRewardSummaryTitles",
  componentId: "sc-idn93w-1"
})(["", ""], commonStyles);

exports.StyledRewardSummaryTitles = StyledRewardSummaryTitles;