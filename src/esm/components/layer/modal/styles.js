import { pxToRem } from '../../../helpers/utils/typography';
import { mq } from '../../../constants/screen-config';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle(["body.k-Modal__body--open{overflow:hidden;}.k-Modal__wrapper{--modal-width:", ";--modal-contentMargin:", ";flex:1 0 auto;position:relative;background-color:var(--color-grey-000);border-radius:var(--border-radius-l);box-sizing:border-box;transform:scale(0.94);margin:auto;width:calc(100vw - (2 * var(--modal-contentMargin) ));max-width:var(--modal-width);padding-top:0;padding-left:0;padding-right:0;@media ", "{--modal-contentMargin:", "}@media ", "{&.k-Modal__wrapper--small{--modal-width:", ";}&.k-Modal__wrapper--large{--modal-width:", ";}&.k-Modal__wrapper--huge{--modal-width:", ";}}}.k-Modal__main{display:flex;flex-direction:column;gap:", ";margin:", " ", ";@media ", "{margin:", " ", ";}@media ", "{margin:", " ", ";}}.k-Modal__header{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:", ";margin:", " ", " ", ";padding:", ";@media ", "{margin:", " ", " ", ";padding:", ";}@media ", "{margin:", " ", " ", ";padding:", ";}.k-Modal__header_left{grid-column:1 / 2;grid-row:1 / 2;justify-self:start;}.k-Modal__title{grid-column:2 / 3;grid-row:1 / 2;justify-self:stretch;}.k-Modal__header_right{grid-column:3 / 4;grid-row:1 / 2;justify-self:end;}}.k-Modal__title{font-size:var(--font-size-6) !important;@media ", "{font-size:var(--font-size-10) !important;}}.k-Modal__actions{display:flex;justify-content:center;gap:", ";@media ", "{flex-direction:column;}}.k-Modal__content{display:grid;gap:", ";}.k-Modal__content--noMargin{margin-inline:", ";@media ", "{margin-inline:", ";}@media ", "{margin-inline:", ";}}.k-Modal__form{display:grid;}.k-Modal__form--twoColumns{@media ", "{grid-template-columns:50% 50%;gap:", ";}}.k-Modal__closeButton{position:absolute;right:0;top:0;border-top-right-radius:var(--border-radius-s);border-right:none;border-top:none;z-index:1;}.k-Modal__overlay{position:fixed;overflow:scroll;display:flex;flex-direction:column;top:0;left:0;right:0;bottom:0;opacity:0;background-color:rgba(34,34,34,.8);z-index:var(--modal-zIndex,110);&::before,&::after{content:'';flex:1 1 33%;min-height:", ";@media ", "{min-height:", ";}}}.k-Modal__overlay--afterOpen{transition:opacity .3s ease;opacity:1;}.k-Modal--afterOpen{transition:opacity .3s ease,transform .3s ease;transform:scale(1);opacity:1;}.k-Modal__overlay--beforeClose{opacity:0;}.k-Modal--beforeClose{transition:opacity .3s ease,transform .5s ease;transform:scale(1.06);opacity:0;}"], pxToRem(600), pxToRem(40), mq.mobile, pxToRem(20), mq.tabletAndDesktop, pxToRem(300), pxToRem(900), pxToRem(1200), pxToRem(30), pxToRem(50), pxToRem(20), mq.tablet, pxToRem(50), pxToRem(30), mq.desktop, pxToRem(50), pxToRem(40), pxToRem(10), pxToRem(-50), pxToRem(-20), pxToRem(-30), pxToRem(10), mq.tablet, pxToRem(-50), pxToRem(-30), pxToRem(-30), pxToRem(20), mq.desktop, pxToRem(-50), pxToRem(-40), pxToRem(-30), pxToRem(30), mq.desktop, pxToRem(10), mq.mobile, pxToRem(30), pxToRem(-20), mq.tablet, pxToRem(-30), mq.desktop, pxToRem(-40), mq.tabletAndDesktop, pxToRem(10), pxToRem(50), mq.tabletAndDesktop, pxToRem(80));