import styled from 'styled-components';
import { NUM_COLUMNS, GUTTER, CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../constants/grid-config';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
var ALL_COLS = "(100vw - ".concat(pxToRem(2 * CONTAINER_PADDING + (NUM_COLUMNS - 1) * GUTTER), ")");
var ONE_COL = "(".concat(ALL_COLS, " / ").concat(NUM_COLUMNS, ")");
var SIX_COLS = "(".concat(ALL_COLS, " / 2 + ").concat(pxToRem(5 * GUTTER + CONTAINER_PADDING), ")");
export var StyledDashboard = styled.div.withConfig({
  displayName: "styles__StyledDashboard",
  componentId: "sc-1cjtn5x-0"
})(["--dashboardLayout-siteHeaderHeight:0px;position:relative;overscroll-behavior:none;*{box-sizing:border-box;}.k-DashboardLayout__siteHeader{&,& ~ .k-DashboardLayout__quickAccessLink{display:none;}}.k-DashboardLayout__mainWrapper:focus{outline-offset:", ";}@media (min-width:", "){.k-DashboardLayout__siteHeader{&,& ~ .k-DashboardLayout{--dashboardLayout-siteHeaderHeight:", ";}}.k-DashboardLayout__siteHeader{display:block;height:var(--dashboardLayout-siteHeaderHeight);background:", ";& ~ .k-DashboardLayout .k-DashboardLayout__backLink{display:none;}}}.k-DashboardLayout{min-height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));min-height:-webkit-fill-available;display:grid;background-color:", ";& > *{min-width:0;}.k-DashboardLayout__sideWrapper{background-color:", ";}}.k-DashboardLayout__toaster__wrapper{position:fixed;right:0;left:0;bottom:", ";padding:", " ", " ", ";background:", ";opacity:0;transition:opacity 0.4s cubic-bezier(0.34,1.56,0.64,1),bottom 0.4s cubic-bezier(0.34,1.56,0.64,1),left 0.3s ease-in-out;& + .k-DashboardLayout__toaster__spacer{max-height:0;height:", ";transition:max-height 0.4s ease;}&.k-DashboardLayout__toaster--isOpen{bottom:", ";opacity:1;& + .k-DashboardLayout__toaster__spacer{max-height:", ";}}&::before{content:'';position:absolute;left:0;width:100%;top:", ";height:", ";background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );}}@media (max-width:", "){position:relative;.k-DashboardLayout{--DashboardLayout-main-margin:calc( ", " + ", " );--DashboardLayout-side-width:calc(", ");width:calc(", " + 100vw);grid-template-columns:var(--DashboardLayout-side-width) calc( 100vw + ", " );left:calc(-1 * ", " - ", ");position:absolute;transition:left 0.3s ease-in-out;.k-DashboardLayout__heading__button__text{clip:rect(0 0 0 0);clip-path:inset(100%);height:", ";overflow:hidden;position:absolute;white-space:nowrap;width:", ";}&.k-DashboardLayout--isOpen{position:fixed;left:0;transition:left 0.3s ease-in-out;.k-DashboardLayout__mainWrapper .k-DashboardLayout__main::before{opacity:0.8;background-color:", ";pointer-events:all;}.k-DashboardLayout__toaster__wrapper{left:calc(", " - ", ");}}.k-DashboardLayout__sideWrapper{height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));overflow-y:scroll;padding:", " ", " ", ";display:flex;flex-direction:column;gap:", ";.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{background-color:", ";width:calc(100vw + ", ");display:flex;align-items:stretch;flex-direction:column;.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";height:", ";flex:0 0 ", ";display:flex;align-items:center;background-color:", ";border-left:", " solid ", ";> *{align-self:initial;min-width:0;}}.k-DashboardLayout__heading__buttonWrapper{flex:0 0 ", ";margin-left:", ";margin-right:", ";}.k-DashboardLayout__heading__button{padding:", ";}.k-DashboardLayout__main{position:relative;margin-left:", ";flex:1 0 auto;&::before{content:'';position:absolute;top:0;left:", ";right:0;bottom:0;background-color:", ";opacity:0;pointer-events:none;z-index:var(--DashboardLayout-overlay-zindex,100);transition:background-color 0.2s ease-in-out,opacity 0.2s ease-in-out;}&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-left:var(--DashboardLayout-main-margin);margin-right:var(--DashboardLayout-main-margin);}}}.k-DashboardLayout__toaster__wrapper{right:", ";width:100vw;}}}@media (max-width:", "){.k-DashboardLayout{--DashboardLayout-main-margin:", ";--DashboardLayout-side-width:calc(100vw - ", ");width:calc(200vw - ", ");grid-template-columns:var(--DashboardLayout-side-width) calc( 100vw + ", " );left:calc(-100vw + ", ");&.k-DashboardLayout--isOpen{.k-DashboardLayout__toaster__wrapper{left:calc(100vw - ", ");}}.k-DashboardLayout__sideWrapper{padding:", " ", " ", ";}.k-DashboardLayout__mainWrapper{.k-DashboardLayout__heading{padding-left:", ";padding-right:", ";}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}}}}}@media (min-width:", "){.k-DashboardLayout__toaster{background-color:", ";color:", ";border-radius:var(--border-radius-s);padding:", ";}}@media (min-width:", "){.k-DashboardLayout{--DashboardLayout-main-margin:7.5vw;--DashboardLayout-side-width:min(", ",25vw);grid-template-columns:var(--DashboardLayout-side-width) 1fr;.k-DashboardLayout__sideWrapper{display:flex;flex-direction:column;height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));position:sticky;top:var(--dashboardLayout-siteHeaderHeight);overflow:scroll;padding:", " ", " ", ";gap:", ";.k-DashboardLayout__heading{flex:0 1 auto;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{background-color:", ";.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-top:", ";padding-bottom:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-left:var(--DashboardLayout-main-margin);margin-right:var(--DashboardLayout-main-margin);}}}}.k-DashboardLayout__toaster__wrapper{width:calc(100% - var(--DashboardLayout-side-width));left:initial;}}.k-DashboardLayout__quickAccessLink{position:absolute;top:0;left:-100%;z-index:110;padding:", " ", ";color:", ";background-color:", ";", " line-height:1;font-size:", ";text-decoration:none;transition:opacity 0.2s ease,left 0.2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,0.2s;border:", " solid ", ";}}.k-DashboardLayout__backLink{flex:0 0 ", ";align-self:start;gap:", ";height:", ";padding:0 ", ";background-color:", ";border-radius:var(--border-radius-s);display:flex;align-items:center;color:", ";transition:color 0.2s ease,background-color 0.2s ease;", " font-size:", ";line-height:1.2;text-decoration:none;svg{fill:currentColor;}&:hover{color:", ";}}"], pxToRem(2), pxToRem(ScreenConfig.L.min), pxToRem(65), COLORS.background1, COLORS.background1, COLORS.font1, pxToRem(-120), pxToRem(20), pxToRem(20), pxToRem(40), COLORS.background1, pxToRem(100), pxToRem(-20), pxToRem(100), pxToRem(-20), pxToRem(20), pxToRem(ScreenConfig.M.max), ONE_COL, pxToRem(GUTTER + CONTAINER_PADDING), SIX_COLS, SIX_COLS, pxToRem(2), SIX_COLS, pxToRem(2), pxToRem(1), pxToRem(1), COLORS.font1, SIX_COLS, pxToRem(2), pxToRem(20), pxToRem(30), pxToRem(30), pxToRem(10), COLORS.background1, pxToRem(2), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(65), pxToRem(65), COLORS.font1, pxToRem(2), COLORS.line3, pxToRem(12 + 12 * 2), pxToRem(-12), pxToRem(12), pxToRem(12), pxToRem(2), pxToRem(-2), COLORS.background1, pxToRem(80), pxToRem(80), pxToRem(-2), pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), pxToRem(50 + 2), pxToRem(2), pxToRem(50 - 2), pxToRem(50 - 2), pxToRem(10), pxToRem(20), pxToRem(20), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), pxToRem(50), pxToRem(ScreenConfig.S.min), COLORS.font1, COLORS.background1, pxToRem(20), pxToRem(ScreenConfig.L.min), pxToRem(384), pxToRem(20), pxToRem(30), pxToRem(30), pxToRem(10), COLORS.background1, pxToRem(80), pxToRem(80), pxToRem(20), pxToRem(30), COLORS.background1, COLORS.font1, TYPOGRAPHY.fontStyles.regular, stepToRem(1), pxToRem(2), COLORS.primary4, pxToRem(40), pxToRem(15), pxToRem(40), pxToRem(15), COLORS.line3, COLORS.background1, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.primary1);