"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledBackingCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var StyledBackingCard = _styledComponents.default.article.withConfig({
  displayName: "styles__StyledBackingCard",
  componentId: "sc-efeti4-0"
})(["--backingCard--border-width:0;--backingCard--border-radius:0;--backingCard--grid-col:repeat(auto-fit,minmax(", ",1fr));--backingCard--border-color:var(--color-grey-400);position:relative;border:var(--backingCard--border-width) solid var(--backingCard--border-color);border-radius:var(--backingCard--border-radius);display:flex;flex-direction:column;align-items:stretch;transition:border-color 0.2s ease-in-out;&.k-BackingCard--isStretched{height:100%;}&.k-BackingCard--hasBorder{--backingCard--border-width:var(--border-width);--backingCard--border-radius:var(--border-radius-m);}.k-BackingCard__imageWrapper{flex:0 0 auto;}.k-BackingCard__gridWrapper{flex:1 1 auto;padding:", " ", " ", ";display:grid;grid-template-columns:[row-start] var(--backingCard--grid-col) [row-end];grid-gap:", ";align-content:start;overflow:hidden;text-align:left;&:first-child{padding-top:", ";}.k-BackingCard__drawer{grid-column:row-start / span row-end;align-self:start;margin:0;}.k-BackingCard__halfDrawer{margin:", " 0 0;}.k-BackingCard__drawer + .k-BackingCard__halfDrawer{grid-column-start:row-start;margin:", " 0 ", ";}.k-BackingCard__drawer--extensible{align-self:stretch;}}.k-BackingCard__button{margin:0 ", " ", ";flex:0 0 auto;}.k-BackingCard__imageWrapper{max-width:100%;margin:0;border-top-left-radius:calc( var(--backingCard--border-radius) - var(--backingCard--border-width) );border-top-right-radius:calc( var(--backingCard--border-radius) - var(--backingCard--border-width) );position:relative;padding-top:calc((5 / 8) * 100%);overflow:hidden;img,figure,video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center center;transition:transform 0.2s ease-in-out;}}.k-BackingCard__titleWrapper{line-height:", ";height:", ";display:flex;align-items:center;}.k-BackingCard__title{width:100%;white-space:nowrap;}.k-BackingCard__amount__wrapper{margin:0;}.k-BackingCard__amount{position:relative;top:", ";font-size:", ";color:var(--color-primary-500);line-height:0.9em;letter-spacing:-0.015em !important;}.k-BackingCard__amount__suffix{font-size:", ";line-height:", ";color:var(--color-grey-700);}.k-BackingCard__descriptionWrapper{--backingCard-description-fontSize:", ";@media ", "{--backingCard-description-fontSize:", ";}.k-BackingCard__description--truncateText{overflow:hidden;position:relative;max-height:calc( 6 * (var(--backingCard-description-fontSize) + ", ") );&::after{content:'';position:absolute;height:calc( 2 * (var(--backingCard-description-fontSize) + ", ") );left:0;width:100%;bottom:0;background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );}}.k-BackingCard__description__moreButton{margin-top:", ";}.k-BackingCard__description *{", ";font-size:var(--backingCard-description-fontSize);line-height:calc( (var(--backingCard-description-fontSize) + ", ") );}}.k-BackingCard__headingTag{position:absolute;top:", ";left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:", ";color:", ";", " svg,path{color:inherit;&[fill]{fill:currentColor;}&[stroke]{stroke:currentColor;}}}.k-BackingCard__info__legend,.k-BackingCard__info__value{white-space:nowrap;}.k-BackingCard__tagList{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:", ";}&.k-BackingCard--hasHover:hover:not(.k-BackingCard--disabled),button&:hover:not(.k-BackingCard--disabled),a&:hover:not(.k-BackingCard--disabled){--backingCard--border-color:var(--color-grey-500);cursor:pointer;.k-BackingCard__imageWrapper{img,figure,video{transform:scale(1.05);}}.k-BackingCard__button:not(.k-Button--disabled){border-color:", ";background-color:", ";}.k-BackingCard__description__moreButton{color:", ";}}button&:active,a&:active{--backingCard--border-color:var(--color-grey-600);}&.k-BackingCard--disabled{color:var(--color-grey-700);cursor:not-allowed;.k-BackingCard__title,.k-BackingCard__amount,.k-BackingCard__amount__suffix{color:var(--color-grey-900);}.k-Tag:not(.k-BackingCard__headingTag){background-color:var(--color-grey-300);color:var(--color-grey-800);}.k-Tag.k-BackingCard__headingTag{background-color:var(--color-grey-800);color:var(--color-grey-000);}.k-BackingCard__description__moreButton.k-u-color-primary1{color:var(--color-grey-700) !important;}.k-BackingCard__button{display:none !important;}}"], (0, _typography.pxToRem)(120), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(44), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(28), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(12), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.light.fontFamily, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(-12), (0, _typography.pxToRem)(6), _colorsConfig.default.primary1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2);

exports.StyledBackingCard = StyledBackingCard;