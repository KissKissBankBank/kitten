"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledDashboardMenu = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const zoomInAndOpacity = (0, _styledComponents.keyframes)(["0%{transform:scaleY(.80);opacity:0;}to{transform:scaleY(1);opacity:1;}"]);
const opacity = (0, _styledComponents.keyframes)(["0%{opacity:0;}to{opacity:1;}"]);

const StyledDashboardMenu = _styledComponents.default.nav.withConfig({
  displayName: "styles__StyledDashboardMenu",
  componentId: "sc-1clyijd-0"
})(["color:", ";.k-DashboardMenu__expandable__title,.k-DashboardMenu__item{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color 0.2s ease,background-color 0.2s ease;}&:focus,&:hover{background-color:", " !important;}&:focus{z-index:1;position:relative;}&:focus-visible{outline:auto;}}summary.k-DashboardMenu__selectorSummary,a.k-DashboardMenu__selectorButton{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color 0.2s ease,background-color 0.2s ease;}&[aria-current='page'],&:hover{background-color:", " !important;}&:focus{z-index:1;position:relative;}&:focus-visible{outline:auto;}}.k-DashboardMenu__list,.k-DashboardMenu__expandable__list{margin:0;padding:0;list-style:none;transition:opacity 0.2s ease;}.k-DashboardMenu__list--subList{margin-left:", ";@media ", "{margin-left:", ";margin-right:", ";}}.k-DashboardMenu__expandable summary{list-style:none;&:focus-visible{outline:auto;}&::-webkit-details-marker{display:none;}}.k-DashboardMenu__selectorButton__text,.k-DashboardMenu__item .k-DashboardMenu__item__text,.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text{flex:1 0 0;line-height:1.4;&,*{white-space:nowrap;overflow-x:hidden;overflow-y:visible;text-overflow:ellipsis;}}.k-DashboardMenu__expandable{border-radius:var(--border-radius-s);background-color:", ";.k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";display:flex;flex-direction:column;gap:", ";}&.k-DashboardMenu__expandable--small .k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";}}.k-DashboardMenu__list{display:flex;flex-direction:column;gap:", ";}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item,.k-DashboardMenu__selectorButton{display:flex;height:", ";align-items:center;gap:", ";padding:0 ", ";border-radius:var(--border-radius-xs);}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable--small .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item--small{height:", ";}.k-DashboardMenu__selectorButton{height:", ";flex:0 0 ", ";}.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item{", " background-color:", ";cursor:pointer;}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current='page']{color:", ";background-color:", ";}.k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item{", " line-height:", ";max-width:100%;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&:hover,&:focus,&[aria-current='page']{", " color:", ";}}.k-DashboardMenu__selectorSummary{.k-DashboardMenu__selectorButton__arrow{color:", ";transition:color 0.2s ease;}&:hover,&:focus{.k-DashboardMenu__selectorButton__arrow{color:", ";}}}.k-DashboardMenu__iconWrapper{display:inline-flex;align-items:center;justify-content:center;flex:0 0 ", ";width:", ";height:", ";svg{max-width:", ";max-height:", ";&[fill],d[fill]{transition:fill 0.2s ease-in-out;}}}.k-DashboardMenu__expandable__title__arrow{flex:0 0 auto;padding:", ";svg{display:block;fill:currentColor;transition:transform 0.2s ease-in-out;}}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title__arrow svg{transform:rotate(360deg) !important;}.k-DashboardMenu__separator{margin-top:", ";margin-bottom:", ";hr{border:0;border-top:", " solid rgba(151,151,151,0.2);margin-bottom:", ";}}.k-DashboardMenu__selectorWrapper{position:relative;margin:", " 0 ", ";&[open] .k-DashboardMenu__selectorList{animation:0.16s ease-out ", ";}&::before{display:block;content:'';position:absolute;top:", ";left:", ";right:", ";bottom:", ";border-top-left-radius:var(--border-radius-m);border-top-right-radius:var(--border-radius-m);border:", " solid ", ";border-bottom:0;opacity:0;}&[open]::before{animation:0.16s ease-out ", ";opacity:1;}&[open] + .k-DashboardMenu__list--hideable{opacity:0.5;pointer-events:none;}}.k-DashboardMenu__selectorSummary{position:relative;z-index:1;list-style:none;touch-callout:none;user-select:none;cursor:pointer;padding:0 ", ";height:", ";border-radius:var(--border-radius-xs);::-webkit-details-marker{display:none;}.k-DashboardMenu__selectorSummary__flex{height:100%;align-items:center;}}.k-DashboardMenu__selectorList{position:absolute;z-index:5;display:flex;align-items:stretch;flex-direction:column;gap:", ";top:", ";left:", ";right:", ";max-height:", ";padding:0 ", " ", ";overflow-x:hidden;overflow-y:scroll;overscroll-behavior:contain;box-sizing:border-box;background:", ";transform-origin:top left;border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);border:", " solid ", ";border-top:0;}"], _colorsConfig.default.font2, _colorsConfig.default.font2, (0, _typography.stepToRem)(-1), _colorsConfig.default.line3, _colorsConfig.default.background1, (0, _typography.stepToRem)(-1), _colorsConfig.default.line3, (0, _typography.pxToRem)(25), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(35), (0, _typography.pxToRem)(40), _colorsConfig.default.line3, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), _typographyConfig.default.fontStyles['500'], _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.line3, _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(18), _typographyConfig.default.fontStyles['500'], _colorsConfig.default.background1, _colorsConfig.default.font2, _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), zoomInAndOpacity, (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(2), _colorsConfig.default.grey1, opacity, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(70 + 2), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(4 * 70 + 3 * 2 + 2 + 3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), _colorsConfig.default.font1, (0, _typography.pxToRem)(2), _colorsConfig.default.grey1);

exports.StyledDashboardMenu = StyledDashboardMenu;