"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDashboard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gridConfig = require("../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var ALL_COLS = "(100vw - ".concat((0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING + (_gridConfig.NUM_COLUMNS - 1) * _gridConfig.GUTTER), ")");
var ONE_COL = "(".concat(ALL_COLS, " / ").concat(_gridConfig.NUM_COLUMNS, ")");
var SIX_COLS = "(".concat(ALL_COLS, " / 2 + ").concat((0, _typography.pxToRem)(5 * _gridConfig.GUTTER + _gridConfig.CONTAINER_PADDING), ")");

var StyledDashboard = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledDashboard",
  componentId: "sc-1cjtn5x-0"
})(["--dashboardLayout-siteHeaderHeight:0px;position:relative;overscroll-behavior:none;*{box-sizing:border-box;}.k-DashboardLayout__siteHeader{&,& ~ .k-DashboardLayout__quickAccessLink{display:none;}}@media (min-width:", "){.k-DashboardLayout__siteHeader{&,& ~ .k-DashboardLayout{--dashboardLayout-siteHeaderHeight:", ";}}.k-DashboardLayout__siteHeader{display:block;height:var(--dashboardLayout-siteHeaderHeight);background:", ";& ~ .k-DashboardLayout .k-DashboardLayout__backLink{display:none;}}}.k-DashboardLayout{min-height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));min-height:-webkit-fill-available;display:grid;background-color:", ";.k-DashboardLayout__sideWrapper{background-color:", ";}}.k-DashboardLayout__backLink:focus{outline:", " solid ", ";outline-offset:", ";}.k-DashboardLayout__backLink:focus:not(:focus-visible){outline-color:transparent;}.k-DashboardLayout__backLink:focus-visible{outline-color:", ";}@media (max-width:", "){overflow:hidden;position:relative;.k-DashboardLayout{--DashboardLayout-main-margin:calc( ", " + ", " );width:calc(", " + 100vw);grid-template-columns:calc(", ") calc(100vw + ", ");transform:translateX(calc(-1 * ", " - ", "));transition:transform 0.3s ease-in-out;.k-DashboardLayout__heading__button__text{clip:rect(0 0 0 0);clip-path:inset(100%);height:", ";overflow:hidden;position:absolute;white-space:nowrap;width:", ";}&.k-DashboardLayout--isOpen{position:fixed;transform:none;transition:transform 0.3s ease-in-out;.k-DashboardLayout__mainWrapper .k-DashboardLayout__main::before{opacity:0.8;background-color:", ";pointer-events:all;}}.k-DashboardLayout__sideWrapper{height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));overflow-y:scroll;padding:", ";display:flex;flex-direction:column;& >:not(:last-child){margin-bottom:", ";}.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{background-color:", ";width:calc(100vw + ", ");display:flex;align-items:stretch;flex-direction:column;.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";height:", ";flex:0 0 ", ";display:flex;align-items:center;background-color:", ";border-left:", " solid ", ";> *{align-self:initial;}}.k-DashboardLayout__heading__buttonWrapper{flex:0 0 ", ";margin-left:", ";margin-right:", ";}.k-DashboardLayout__heading__button{padding:", ";}.k-DashboardLayout__main{position:relative;margin-left:", ";flex:1 0 auto;&::before{content:'';position:absolute;top:0;left:", ";right:0;bottom:0;background-color:", ";opacity:0;pointer-events:none;z-index:100;transition:background-color 0.2s ease-in-out,opacity 0.2s ease-in-out;}&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-left:var(--DashboardLayout-main-margin);margin-right:var(--DashboardLayout-main-margin);}}}}}@media (max-width:", "){.k-DashboardLayout{--DashboardLayout-main-margin:", ";width:calc(200vw - ", ");grid-template-columns:calc(100vw - ", ") calc( 100vw + ", " );transform:translateX(calc(-100vw + ", "));.k-DashboardLayout__sideWrapper{padding:", ";}.k-DashboardLayout__mainWrapper{.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}}}}}@media (min-width:", "){.k-DashboardLayout{--DashboardLayout-main-margin:7.5vw;grid-template-columns:25vw 1fr;.k-DashboardLayout__sideWrapper{display:flex;flex-direction:column;height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));position:sticky;top:var(--dashboardLayout-siteHeaderHeight);overflow:scroll;padding:", ";& >:not(:last-child){margin-bottom:", ";}.k-DashboardLayout__heading{flex:0 1 auto;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{background-color:", ";.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-left:var(--DashboardLayout-main-margin);margin-right:var(--DashboardLayout-main-margin);}}}}}@media (min-width:", "){.k-DashboardLayout{grid-template-columns:", " 1fr;}}.k-DashboardLayout__sideWrapper,.k-DashboardLayout__mainWrapper{&:focus{outline:", " solid ", ";}}.k-DashboardLayout__quickAccessLink{position:absolute;top:0;left:-100%;z-index:110;padding:", " ", ";color:", ";background-color:", ";", " line-height:1;font-size:", ";text-decoration:none;transition:opacity 0.2s ease,left 0.2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,0.2s;outline:", " solid ", ";}}.k-DashboardLayout__backLink{flex:0 0 ", ";align-self:start;height:", ";padding:0 ", ";background-color:", ";border-radius:", ";display:flex;align-items:center;color:", ";transition:color 0.2s ease,background-color 0.2s ease;", " font-size:", ";line-height:1.2;text-decoration:none;svg{fill:currentColor;}&:hover{color:", ";}.k-DashboardLayout__backLink__text{margin-left:", ";}}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(65), _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), ONE_COL, (0, _typography.pxToRem)(_gridConfig.GUTTER + _gridConfig.CONTAINER_PADDING), SIX_COLS, SIX_COLS, (0, _typography.pxToRem)(2), SIX_COLS, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.font1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(65), (0, _typography.pxToRem)(65), _colorsConfig.default.font1, (0, _typography.pxToRem)(2), _colorsConfig.default.line3, (0, _typography.pxToRem)(12 + 12 * 2), (0, _typography.pxToRem)(-12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-2), _colorsConfig.default.background1, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(50 + 2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(50 - 2), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _colorsConfig.default.background1, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(385), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), _colorsConfig.default.background1, _colorsConfig.default.font1, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(1), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(15), _colorsConfig.default.line3, (0, _typography.pxToRem)(6), _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.primary1, (0, _typography.pxToRem)(15));

exports.StyledDashboard = StyledDashboard;