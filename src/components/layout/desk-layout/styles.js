"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _config = require("../../navigation/header-nav/config");

const StyledLayout = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledLayout",
  componentId: "sc-zmvlwc-0"
})(["--deskLayout-menu-width:", ";--deskLayout-gutter:", ";--deskLayout-offset:calc( var(--deskLayout-menu-width) + var(--deskLayout-gutter) );height:100%;min-height:calc(100vh - ", ");box-sizing:border-box;margin:0;background-color:var(--color-grey-100);padding:", " ", ";@media ", "{padding:", " ", ";}@media ", "{padding:", " ", ";}.k-DeskLayout{display:flex;flex-direction:column;gap:", " var(--deskLayout-gutter);max-width:", ";margin:0 auto;@media ", "{max-width:", ";}@media ", "{flex-direction:row;}}.k-DeskLayout__menu{&:empty{display:none;}@media ", "{width:var(--deskLayout-menu-width);flex:0 0 var(--deskLayout-menu-width);position:relative;.k-DeskLayout__menu__inside{position:sticky;top:", ";bottom:", ";transition:top var(--transition);}}}@media ", "{.k-DeskLayout__content{max-width:", ";flex:1 1 ", ";margin-top:", ";}.k-DeskLayout__content--fullWidth{max-width:calc(100% - var(--deskLayout-offset));flex:1 1 calc(100% - var(--deskLayout-offset));}}.k-DeskLayout__loading{align-self:stretch;display:flex;align-items:center;justify-content:center;@media ", "{max-width:calc(100% - (2 * var(--deskLayout-offset)));flex:1 1 calc(100% - (2 * var(--deskLayout-offset)));}}"], (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_config.HEADER_HEIGHT), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), _screenConfig.mq.desktop, (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH - 2 * _gridConfig.CONTAINER_PADDING_THIN), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH - 2 * _gridConfig.CONTAINER_PADDING), _screenConfig.mq.desktop, _screenConfig.mq.desktop, (0, _typography.pxToRem)(_config.HEADER_HEIGHT + 20), (0, _typography.pxToRem)(20), _screenConfig.mq.desktop, (0, _typography.pxToRem)(670), (0, _typography.pxToRem)(670), (0, _typography.pxToRem)(35), _screenConfig.mq.desktop);

exports.StyledLayout = StyledLayout;