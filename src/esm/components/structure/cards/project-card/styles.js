import styled, { keyframes } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
const loadingKeyframes = keyframes(["from{transform:translateX(-100%)}to{transform:translateX(100%)}"]);
export const StyledCard = styled.div.withConfig({
  displayName: "styles__StyledCard",
  componentId: "sc-1qqqlzm-0"
})(["--projectCard-background-color:var(--color-grey-000);--projectCard-text-color:var(--color-grey-900);--projectCard-hover-text-color:var(--color-primary-500);&.k-ProjectCard--colorMode-dark{--projectCard-background-color:var(--color-grey-800);--projectCard-text-color:var(--color-grey-000);--projectCard-hover-text-color:var(--color-primary-300);}position:relative;display:flex;flex-direction:column;box-sizing:border-box;border-radius:var(--border-radius-m);color:var(--projectCard-text-color);text-decoration:none;transition:box-shadow var(--transition);box-shadow:var(--box-shadow-m);background-color:var(--projectCard-background-color);&[href]:active,&[href]:hover{box-shadow:var(--box-shadow-hover-m);.k-ProjectCard__image__overlay{opacity:1;}&.k-ProjectCard--hoverableTitle .k-ProjectCard__title{color:var(--projectCard-hover-text-color);}}&[href]:focus-visible{outline:var(--outline);}&.k-ProjectCard--normal{--projectCard-statusColor:var(--color-primary-500);}&.k-ProjectCard--danger{--projectCard-statusColor:var(--color-danger-500);}&.k-ProjectCard--warning{--projectCard-statusColor:var(--color-warning-500);}&.k-ProjectCard--success{--projectCard-statusColor:var(--color-success-500);}&.k-ProjectCard--disabled{--projectCard-statusColor:var(--color-grey-500);}.k-ProjectCard__image{position:relative;overflow:hidden;flex:0 0 auto;border-top-left-radius:calc(var(--border-radius-m) - 1px);border-top-right-radius:calc(var(--border-radius-m) - 1px);.k-ProjectCard__image__image{display:block;width:100%;object-fit:cover;object-position:center;@supports (aspect-ratio:16 / 10){aspect-ratio:16 / 10;}}@supports not (aspect-ratio:16 / 10){height:0;padding-bottom:calc((10 / 16) * 100%);.k-ProjectCard__image__image{position:absolute;width:100%;height:100%;}}.k-ProjectCard__image__overlay{top:0;left:0;opacity:0;width:100%;height:100%;display:flex;position:absolute;text-align:center;align-items:center;box-sizing:border-box;justify-content:center;padding:", ";font-size:", ";color:var(--color-grey-000);", ";transition:opacity var(--transition);background-color:rgba(34,34,34,0.8);}}.k-ProjectCard__topLine{position:absolute;top:0;left:", ";right:", ";transform:translateY(-50%);display:flex;align-items:center;&.k-ProjectCard__topLine--left{justify-content:flex-start;}&.k-ProjectCard__topLine--center{justify-content:center;}&.k-ProjectCard__topLine--right{justify-content:flex-end;}}.k-ProjectCard__title{color:var(--projectCard-text-color);transition:color var(--transition);}.k-ProjectCard__content{flex:1 0 auto;position:relative;padding:", " ", " ", ";display:flex;flex-direction:column;gap:", ";}.k-ProjectCard__sticker{position:absolute;height:", ";box-sizing:border-box;top:", ";left:", ";max-width:calc(100% - ", ");line-height:", ";background-color:var(--projectCard-statusColor);border-radius:var(--border-radius-rounded);padding:", " ", ";color:var(--color-grey-000);", " font-size:", ";}.k-ProjectCard__avatar{position:absolute;height:", ";width:", ";box-sizing:border-box;top:", ";left:", ";background-color:var(--color-grey-000);border-radius:var(--border-radius-m);border:var(--border-width) solid var(--color-grey-300);padding:", ";box-shadow:0px 0px ", " rgba(0,0,0,0.1);img{width:100%;height:100%;object-fit:contain;object-position:center;}}.k-ProjectCard__avatar + .k-ProjectCard__title{margin-top:", ";}.k-ProjectCard__title,.k-ProjectCard__line,.k-ProjectCard__itemsLine,.k-ProjectCard__progress{flex:0 0 auto;}.k-ProjectCard__line--lastLine{flex-grow:1;}.k-ProjectCard__itemsLine{display:grid;grid-template-columns:repeat(auto-fit,minmax(50px,1fr));gap:", ";flex:1 0 auto;align-items:end;&:not(.k-ProjectCard__itemsLine--noMargin){margin-top:", ";}}.k-ProjectCard__item > *{line-height:", ";display:block;}.k-ProjectCard__progress{display:flex;align-items:center;gap:", ";.k-Meters-Progress{flex:1 0 auto;.k-Meters-Progress__ramp{--progress-color:var(--projectCard-statusColor);height:", ";}}}&.k-ProjectCard--isStretched{height:100%;}&.k-ProjectCard--isLoading{--projectCard-statusColor:var(--color-grey-400);position:relative;border-color:var(--color-grey-300);&::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transform:translateX(-100%);background:linear-gradient( 90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 25%,rgba(255,255,255,0) 50% );animation:x 2s linear infinite;animation-name:", ";}.k-ProjectCard__image{background-color:var(--color-grey-300);}.k-ProjectCard__image__image{opacity:0;}.k-ProjectCard__title{min-height:", ";}.k-ProjectCard__line{min-height:", ";}.k-ProjectCard__item{min-width:", ";min-height:", ";}.k-ProjectCard__sticker{display:none;}.k-ProjectCard__title,.k-ProjectCard__line,.k-ProjectCard__item,.k-ProjectCard__progress__text{color:var(--color-grey-300);background-color:var(--color-grey-300);}}"], pxToRem(20), pxToRem(14), TYPOGRAPHY.fontStyles['700'], pxToRem(15), pxToRem(15), pxToRem(30), pxToRem(15), pxToRem(10), pxToRem(10), pxToRem(22), pxToRem(-11), pxToRem(15), pxToRem(2 * (10 + 15)), pxToRem(22), pxToRem(0), pxToRem(10), TYPOGRAPHY.fontStyles['500'], pxToRem(12), pxToRem(75), pxToRem(75), pxToRem(-50), pxToRem(15), pxToRem(10), pxToRem(20), pxToRem(10), pxToRem(10), pxToRem(20), pxToRem(16), pxToRem(20), pxToRem(4), loadingKeyframes, pxToRem(20), pxToRem(16), pxToRem(50), pxToRem(16));