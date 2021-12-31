"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledCard",
  componentId: "sc-16fkhym-0"
})(["display:flex;flex-direction:column;box-sizing:border-box;border:var(--border);border-radius:var(--border-radius-m);overflow:hidden;color:var(--color-grey-900);text-decoration:none;transition:border var(--transition);&[href]:active,&[href]:hover{border:var(--border-hover);}&[href]:focus-visible{outline:var(--outline);}&.k-ProjectCard--normal{--projectCard-statusColor:var(--color-primary-500);}&.k-ProjectCard--danger{--projectCard-statusColor:var(--color-danger-500);}&.k-ProjectCard--warning{--projectCard-statusColor:var(--color-warning-500);}&.k-ProjectCard--success{--projectCard-statusColor:var(--color-success-500);}&.k-ProjectCard--disabled{--projectCard-statusColor:var(--color-grey-500);}.k-ProjectCard__image{overflow:hidden;flex:0 0 auto;.k-ProjectCard__image__image{display:block;width:100%;aspect-ratio:16 / 10;object-fit:cover;object-position:center;}}.k-ProjectCard__content{flex:1 0 auto;position:relative;padding:", " ", " ", ";display:flex;flex-direction:column;gap:", ";}.k-ProjectCard__sticker{position:absolute;height:", ";box-sizing:border-box;top:", ";left:", ";max-width:calc(100% - ", ");line-height:", ";background-color:var(--projectCard-statusColor);border-radius:var(--border-radius-rounded);padding:", " ", " ", ";color:var(--color-grey-000);", " font-size:", ";}.k-ProjectCard__title,.k-ProjectCard__line,.k-ProjectCard__itemsLine,.k-ProjectCard__progress{flex:0 0 auto;}.k-ProjectCard__itemsLine{display:flex;gap:", ";flex:1 0 auto;margin-top:", ";align-items:end;}.k-ProjectCard__item{--projectCard-itemWidth:calc((100% - (2 * ", ")) / 3);flex:0 0 var(--projectCard-itemWidth);width:var(--projectCard-itemWidth);> *{line-height:", ";display:block;}}.k-ProjectCard__progress{display:flex;align-items:center;gap:", ";.k-Meters-Progress{flex:1 0 auto;.k-Meters-Progress__ramp{--progress-color:var(--projectCard-statusColor);height:", ";}}}&.k-ProjectCard--isStretched{height:100%;}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(-11), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2 * (10 + 15)), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(4));

exports.StyledCard = StyledCard;