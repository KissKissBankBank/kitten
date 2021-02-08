"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "styles__StyledList",
  componentId: "sc-1npdhb6-0"
})(["--headerMenu-background-colors-hover:", ";margin:0;padding:0;list-style:none;.k-HeaderMenu__item__link{display:block;position:relative;height:", ";box-sizing:border-box;padding:", " ", " ", ";background-color:", ";", " color:", ";line-height:1;font-size:", ";text-decoration:none;&:focus{outline-offset:", ";}&:hover,&:focus{color:", ";background-color:var(--headerMenu-background-colors-hover);transition:color 0.2s,background-color 0.4s;}}.k-HeaderMenu__item--external .k-HeaderMenu__item__link{display:flex;height:", ";padding:", " ", " ", " ", ";align-items:center;align-self:flex-start;justify-content:space-between;background-color:", ";.k-HeaderMenu__item__arrow{margin-left:", ";position:relative;left:0;transition:left 0.2s;}svg,img{max-height:", ";width:auto;}:focus,:hover{color:", ";.k-HeaderMenu__item__arrow{left:", ";}}&::before{display:none;}}.k-HeaderMenu__item--hasButton{padding:", ";background-color:", ";}&.k-HeaderMenu--hasBorderOnSide .k-HeaderMenu__item__link{&::before{content:'';position:absolute;top:", ";bottom:0;width:", ";background-color:transparent;transition:background-color 0.2s,width 0.2s;}&:hover::before,&:focus::before{background-color:", ";transition:width 0.2s;}}&.k-HeaderMenu--hasBorderOnSide-left .k-HeaderMenu__item__link::before{left:", ";}&.k-HeaderMenu--hasBorderOnSide-right .k-HeaderMenu__item__link::before{right:", ";}&.k-HeaderMenu--hasBorderOnSideOnHover .k-HeaderMenu__item__link{&:hover,&:focus{color:", ";&::before{width:", ";background-color:", ";transition:width 0.2s;}}}&.k-HeaderMenu--hasBigItems{.k-HeaderMenu__item .k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}.k-HeaderMenu__item--external .k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}}.k-HeaderMenu__item--tiny{.k-HeaderMenu__item__link{height:auto;padding-top:0;padding-bottom:", ";", "}& + .k-HeaderMenu__item--tiny .k-HeaderMenu__item__link{padding-top:", ";}}.k-HeaderMenu__item--big{.k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}&.k-HeaderMenu__item--external .k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}}.k-HeaderMenu__item--light{color:", ";}.k-HeaderMenu__item--isSelected .k-HeaderMenu__item__link{color:", ";}&.k-HeaderMenu--hasBorderOnSide .k-HeaderMenu__item--isSelected .k-HeaderMenu__item__link::before{width:", ";background-color:", ";}&.k-HeaderMenu--hasBorders{border-left:", " solid ", ";border-right:", " solid ", ";.k-HeaderMenu__item__link{border-bottom:", " solid ", ";}}"], _colorsConfig.default.background1, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(18), _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(-3), _colorsConfig.default.primary1, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(23), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(30), _colorsConfig.default.background3, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(24), _colorsConfig.default.font1, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(20), _colorsConfig.default.background1, (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(0), _colorsConfig.default.primary1, (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(-1), _colorsConfig.default.primary1, (0, _typography.pxToRem)(4), _colorsConfig.default.primary1, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(28), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(28), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(23), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(28), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(28), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(23), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(40), _colorsConfig.default.font2, _colorsConfig.default.primary1, (0, _typography.pxToRem)(4), _colorsConfig.default.primary1, (0, _typography.pxToRem)(1), _colorsConfig.default.line1, (0, _typography.pxToRem)(1), _colorsConfig.default.line1, (0, _typography.pxToRem)(1), _colorsConfig.default.line1);

exports.StyledList = StyledList;