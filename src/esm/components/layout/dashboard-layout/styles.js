import styled from 'styled-components';
import { NUM_COLUMNS, GUTTER, CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../constants/grid-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { mq } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
const ALL_COLS = "(100vw - " + pxToRem(2 * CONTAINER_PADDING + (NUM_COLUMNS - 1) * GUTTER) + ")";
const ONE_COL = "(" + ALL_COLS + " / " + NUM_COLUMNS + ")";
const SIX_COLS = "(" + ALL_COLS + " / 2 + " + pxToRem(5 * GUTTER + CONTAINER_PADDING) + ")";
export const StyledDashboard = styled.div.withConfig({
  displayName: "styles__StyledDashboard",
  componentId: "sc-1cjtn5x-0"
})(["--dashboardLayout-siteHeaderHeight:0px;position:relative;overscroll-behavior:none;*{box-sizing:border-box;}.k-DashboardLayout__siteHeader{&,& ~ .k-DashboardLayout__quickAccessLink{display:none;}}.k-DashboardLayout__mainWrapper:focus-visible{outline:1px dotted;}@media ", "{.k-DashboardLayout__siteHeader{&,& ~ .k-DashboardLayout{--dashboardLayout-siteHeaderHeight:", ";}}.k-DashboardLayout__siteHeader{display:block;height:var(--dashboardLayout-siteHeaderHeight);background:var(--color-grey-000);& ~ .k-DashboardLayout .k-DashboardLayout__backLink{display:none;}}}.k-DashboardLayout{min-height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));min-height:-webkit-fill-available;display:grid;background-color:var(--color-grey-000);& > *{min-width:0;}.k-DashboardLayout__sideWrapper{background-color:var(--color-grey-900);}}.k-DashboardLayout__toaster__wrapper{position:fixed;right:0;left:0;bottom:", ";padding:", " ", " ", ";background:var(--color-grey-000);opacity:0;transition:opacity 0.4s cubic-bezier(0.34,1.56,0.64,1),bottom 0.4s cubic-bezier(0.34,1.56,0.64,1),left 0.3s ease-in-out;z-index:2;& + .k-DashboardLayout__toaster__spacer{max-height:0;height:", ";transition:max-height 0.4s ease;}&.k-DashboardLayout__toaster--isOpen{bottom:", ";opacity:1;& + .k-DashboardLayout__toaster__spacer{max-height:", ";}}&::before{content:'';position:absolute;left:0;width:100%;top:", ";height:", ";background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );}}@media ", "{position:relative;.k-DashboardLayout{--DashboardLayout-main-margin:calc( ", " + ", " );--DashboardLayout-side-width:calc(", ");width:calc(", " + 100vw);grid-template-columns:var(--DashboardLayout-side-width) calc( 100vw + ", " );left:calc(-1 * ", " - ", ");position:absolute;transition:left 0.3s ease-in-out;.k-DashboardLayout__heading__button__text{clip:rect(0 0 0 0);clip-path:inset(100%);height:", ";overflow:hidden;position:absolute;white-space:nowrap;width:", ";}&.k-DashboardLayout--isOpen{position:fixed;left:0;transition:left 0.3s ease-in-out;.k-DashboardLayout__mainWrapper{.k-DashboardLayout__main,.k-DashboardLayout__alerts{&::before{opacity:0.8;background-color:var(--color-grey-900);pointer-events:all;}}}.k-DashboardLayout__toaster__wrapper{left:calc(", " - ", ");}}.k-DashboardLayout__sideWrapper{height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));overflow-y:scroll;padding:", " ", " ", ";display:flex;flex-direction:column;gap:", ";.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{background-color:var(--color-grey-000);width:calc(100vw + ", ");display:flex;align-items:stretch;flex-direction:column;position:relative;.k-DashboardLayout__heading{padding-inline:", ";height:", ";flex:0 0 ", ";display:flex;align-items:center;background-color:var(--color-grey-900);border-left:", " solid var(--color-grey-800);> *{align-self:initial;min-width:0;}}.k-DashboardLayout__heading__buttonWrapper{flex:0 0 ", ";margin-left:", ";margin-right:", ";}.k-DashboardLayout__heading__button{padding:", ";}.k-DashboardLayout__alerts,.k-DashboardLayout__main{position:relative;&::before{content:'';position:absolute;top:0;left:", ";right:0;bottom:0;background-color:var(--color-grey-000);opacity:0;pointer-events:none;z-index:var(--DashboardLayout-overlay-zindex,100);transition:background-color 0.2s ease-in-out,opacity 0.2s ease-in-out;}}.k-DashboardLayout__main{margin-left:", ";flex:1 0 auto;&:not(.k-DashboardLayout__main--fullHeight){padding-block:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-inline:var(--DashboardLayout-main-margin);}}}.k-DashboardLayout__toaster__wrapper{right:", ";width:100vw;}}}@media ", "{.k-DashboardLayout{--DashboardLayout-main-margin:", ";--DashboardLayout-side-width:calc(100vw - ", ");width:calc(200vw - ", ");grid-template-columns:var(--DashboardLayout-side-width) calc( 100vw + ", " );left:calc(-100vw + ", ");&.k-DashboardLayout--isOpen{.k-DashboardLayout__toaster__wrapper{left:calc(100vw - ", ");}}.k-DashboardLayout__sideWrapper{padding:", " ", " ", ";}.k-DashboardLayout__mainWrapper{.k-DashboardLayout__heading{padding-inline:", ";}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-block:", ";}}}}}@media ", "{.k-DashboardLayout__toaster{border-radius:var(--border-radius-s);padding:", ";}.k-DashboardLayout__toaster:not(.k-DashboardLayout__toaster--fullSize){margin-inline:calc(var(--DashboardLayout-main-margin) - ", ");}.k-DashboardLayout__toaster--dark{background-color:var(--color-grey-900);color:var(--color-grey-000);}.k-DashboardLayout__toaster--light{background-color:var(--color-grey-200);color:var(--color-grey-900);}}@media ", "{.k-DashboardLayout{--DashboardLayout-main-margin:7.5vw;--DashboardLayout-side-width:min(", ",25vw);grid-template-columns:var(--DashboardLayout-side-width) 1fr;.k-DashboardLayout__sideWrapper{display:flex;flex-direction:column;height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));position:sticky;top:var(--dashboardLayout-siteHeaderHeight);overflow:scroll;padding:", " ", " ", ";gap:", ";.k-DashboardLayout__heading{flex:0 1 auto;}.k-DashboardLayout__navigation{flex:1 1 100%;}.k-DashboardLayout__footer{flex:0 1 auto;}}.k-DashboardLayout__mainWrapper{position:relative;background-color:var(--color-grey-000);&.k-DashboardLayout__mainWrapper--darkBg{&,.k-DashboardLayout__flow__nav,.k-DashboardLayout__flow__content{background-color:var(--color-grey-100);}.k-DashboardLayout__flow__nav::before{background:linear-gradient( to bottom,rgba(251,251,251,0),rgba(251,251,251,1) );}}.k-DashboardLayout__heading{display:none;}.k-DashboardLayout__main{&:not(.k-DashboardLayout__main--fullHeight){padding-block:", ";}> *:not(.k-DashboardLayout__fullWidth){margin-inline:var(--DashboardLayout-main-margin);}}}}.k-DashboardLayout__toaster__wrapper{width:calc(100% - var(--DashboardLayout-side-width));left:initial;}}.k-DashboardLayout__quickAccessLink{position:absolute;top:0;left:-100%;z-index:110;padding:", " ", ";color:var(--color-grey-000);background-color:var(--color-grey-900);", " line-height:1;font-size:", ";text-decoration:none;transition:opacity 0.2s ease,left 0.2s ease;transition-delay:0,0;opacity:0;&:focus-visible,&:active{left:0;opacity:1;transition-delay:0,0.2s;border:", " solid var(--color-primary-300);}}.k-DashboardLayout__backLink{flex:0 0 ", ";align-self:start;gap:", ";height:", ";padding:0 ", ";background-color:var(--color-grey-800);border-radius:var(--border-radius-s);display:flex;align-items:center;color:var(--color-grey-000);transition:color 0.2s ease,background-color 0.2s ease;", " font-size:", ";line-height:1.2;text-decoration:none;svg{fill:currentColor;}&:hover{color:var(--color-primary-500);}}"], mq.desktop, pxToRem(65), pxToRem(-120), pxToRem(20), pxToRem(20), pxToRem(40), pxToRem(100), pxToRem(-20), pxToRem(100), pxToRem(-20), pxToRem(20), mq.mobileAndTablet, ONE_COL, pxToRem(GUTTER + CONTAINER_PADDING), SIX_COLS, SIX_COLS, pxToRem(2), SIX_COLS, pxToRem(2), pxToRem(1), pxToRem(1), SIX_COLS, pxToRem(2), pxToRem(20), pxToRem(30), pxToRem(30), pxToRem(10), pxToRem(2), pxToRem(CONTAINER_PADDING), pxToRem(65), pxToRem(65), pxToRem(2), pxToRem(12 + 12 * 2), pxToRem(-12), pxToRem(12), pxToRem(12), pxToRem(-2), pxToRem(2), pxToRem(80), pxToRem(-2), mq.mobile, pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), pxToRem(50 + 2), pxToRem(2), pxToRem(50 - 2), pxToRem(50 - 2), pxToRem(10), pxToRem(20), pxToRem(20), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), mq.tabletAndDesktop, pxToRem(20), pxToRem(20), mq.desktop, pxToRem(359), pxToRem(20), pxToRem(30), pxToRem(30), pxToRem(10), pxToRem(80), pxToRem(20), pxToRem(30), TYPOGRAPHY.fontStyles['500'], stepToRem(1), pxToRem(2), pxToRem(40), pxToRem(15), pxToRem(40), pxToRem(15), TYPOGRAPHY.fontStyles['500'], stepToRem(-1));