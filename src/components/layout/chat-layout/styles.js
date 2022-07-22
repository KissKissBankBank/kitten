"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledChatLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _config = require("../../../components/navigation/header-nav/config");

const StyledChatLayout = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledChatLayout",
  componentId: "sc-17hgxmk-0"
})(["overflow:hidden;height:calc(100vh - ", ");@media ", "{width:100vw;.k-ChatLayout__grid{height:100%;width:300vw;display:grid;grid-template-columns:repeat(3,100vw);grid-template-rows:100%;gap:", ";transform:translateX(calc(-1px * var(--chatLayoutOffset,0)));transition:transform var(--transition);}.k-ChatLayout__columnHeader{box-sizing:border-box;height:", ";padding:0 ", ";background-color:var(--color-grey-100);display:grid;gap:", ";grid-template-columns:auto 1fr auto;align-items:stretch;}.k-ChatLayout__columnHeader__back,.k-ChatLayout__columnHeader__next{display:flex;align-items:center;}.k-ChatLayout__columnHeader__back{padding-inline:", " ", ";margin-inline:", " ", ";}.k-ChatLayout__columnHeader__next{padding-inline:", " ", ";margin-inline:", " ", ";}.k-ChatLayout__columnHeader__title{align-self:center;padding-block:", ";}.k-ChatLayout__columnHeader.k-ChatLayout__columnHeader--centeredHeader{grid-template-columns:1fr auto 1fr;.k-ChatLayout__columnHeader__back{justify-self:start;}.k-ChatLayout__columnHeader__next{justify-self:end;}.k-ChatLayout__columnHeader__title{justify-self:center;}}.k-ChatLayout__column__title{padding-inline:", ";}.k-ChatLayout__column__content{height:calc(100% - ", ");}.k-ChatLayout__column--isPrimaryColumn .k-ChatLayout__column__content{height:calc(100% - ", ");}.k-ChatLayout__column__content:not(.k-ChatLayout__column__content--fullWidth){padding-inline:", ";}}@media ", "{background-color:var(--color-grey-100);padding:0 ", ";.k-ChatLayout__grid{height:100%;box-sizing:border-box;padding-bottom:", ";display:grid;gap:", ";grid-template-columns:1fr 2fr ", ";grid-template-rows:100%;align-items:stretch;.k-ChatLayout__columnHeader{display:none;}.k-ChatLayout__column__content{height:calc(100% - ", ");}.k-ChatLayout__column:not(.k-ChatLayout__column--isPrimaryColumn){margin-top:", ";}}}.k-ChatLayout__column{height:100% !important;@supports selector(:focus-visible){&:focus{outline-style:auto;}&:focus:not(:focus-visible){outline:transparent;}&:focus-visible{outline-style:auto;}}@supports not (selector(:focus-visible)){&:focus{outline:transparent;}}}.k-ChatLayout__column__title{line-height:", ";margin:0;}"], (0, _typography.pxToRem)(_config.HEADER_HEIGHT), _screenConfig.mq.mobileAndTablet, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(56), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(56), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(20), _screenConfig.mq.desktop, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(240), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(100));

exports.StyledChatLayout = StyledChatLayout;