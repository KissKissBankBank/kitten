"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBackingCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var StyledBackingCard = _styledComponents.default.article.withConfig({
  displayName: "styles__StyledBackingCard",
  componentId: "t1fiky-0"
})(["--backingCard--border-width:0;--backingCard--border-radius:0;--backingCard--grid-col:repeat(auto-fit,minmax(", ",1fr));--backingCard--border-color:", ";border:var(--backingCard--border-width) solid var(--backingCard--border-color);border-radius:var(--backingCard--border-radius);display:flex;flex-direction:column;align-items:stretch;transition:border-color 0.2s ease-in-out;&.k-BackingCard--hasBorder{--backingCard--border-width:", ";--backingCard--border-radius:", ";}.k-BackingCard__imageWrapper{flex:0 0 auto;}.k-BackingCard__gridWrapper{flex:1 1 auto;padding:", ";display:grid;grid-template-columns:[row-start] var(--backingCard--grid-col) [row-end];grid-gap:", ";align-content:start;overflow:hidden;text-align:left;.k-BackingCard__drawer{grid-column:row-start / span row-end;align-self:start;margin:0;}.k-BackingCard__halfDrawer{margin:", " 0 0;}.k-BackingCard__drawer + .k-BackingCard__halfDrawer{grid-column-start:row-start;margin:", " 0 ", ";}.k-BackingCard__drawer--extensible{align-self:stretch;}}.k-BackingCard__button{flex:0 0 auto;}.k-BackingCard__imageWrapper{max-width:100%;margin:0;border-top-left-radius:calc( var(--backingCard--border-radius) - var(--backingCard--border-width) );border-top-right-radius:calc( var(--backingCard--border-radius) - var(--backingCard--border-width) );position:relative;padding-top:calc((5 / 8) * 100%);overflow:hidden;img,figure,video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center center;transition:transform 0.2s ease-in-out;}}.k-BackingCard__amount{font-size:", ";}.k-BackingCard__button{margin:0 ", " ", ";}.k-BackingCard__descriptionWrapper{overflow:hidden;position:relative;&.k-BackingCard__descriptionWrapper--truncateText{max-height:calc(3 * 1.5 * ", ");.k-BackingCard__description__moreButton{position:absolute;top:calc(2 * 1.5 * ", ");right:0;padding-left:", ";line-height:1.5;background:linear-gradient( to right,rgba(255,255,255,0) 0%,rgba(255,255,255,1) ", " );}}.k-BackingCard__description *{", ";font-size:", ";line-height:calc(1.5 * ", ");}}.k-BackingCard__headingTag{justify-self:start;display:flex;align-items:center;gap:", ";color:", ";", " svg,path{color:inherit;&[fill]{fill:currentColor;}&[stroke]{stroke:currentColor;}}}.k-BackingCard__info__legend,.k-BackingCard__info__value{white-space:nowrap;}.k-BackingCard__tagList{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:", ";}&.k-BackingCard--disabled{color:", ";cursor:not-allowed;.k-BackingCard__imageWrapper{img,figure,video{filter:grayscale(1) opacity(0.4);}}.k-Tag{color:", ";background-color:", ";}.k-BackingCard__description__moreButton{color:", ";}}&.k-BackingCard--hasHover:hover,button&:hover,a&:hover{--backingCard--border-color:", ";cursor:pointer;.k-BackingCard__imageWrapper{img,figure,video{transform:scale(1.05);}}.k-BackingCard__button{border-color:", ";background-color:", ";}.k-BackingCard__description__moreButton{color:", ";}}"], (0, _typography.pxToRem)(120), _colorsConfig.default.line1, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(-10), (0, _typography.stepToRem)(5), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-2), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.light.fontFamily, (0, _typography.stepToRem)(-2), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(10), _colorsConfig.default.primary1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), _colorsConfig.default.font2, _colorsConfig.default.font2, _colorsConfig.default.line1, _colorsConfig.default.font2, _colorsConfig.default.line2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2);

exports.StyledBackingCard = StyledBackingCard;