"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICON_GIANT = exports.ICON_HUGE = exports.ICON_BIG = exports.ICON_TINY = exports.ICON_MICRO = exports.ICON_NANO = exports.ICON = exports.GIANT = exports.HUGE = exports.BIG = exports.TINY = exports.MICRO = exports.NANO = exports.DEFAULT = exports.ROUNDED = exports.FLUID = void 0;

var _styledComponents = require("styled-components");

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var FLUID = (0, _styledComponents.css)(["--Button-min-width:initial;min-width:initial;width:100%;"]);
exports.FLUID = FLUID;
var ROUNDED = (0, _styledComponents.css)(["border-radius:50%;"]);
exports.ROUNDED = ROUNDED;
var DEFAULT = (0, _styledComponents.css)(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1));
exports.DEFAULT = DEFAULT;
var NANO = (0, _styledComponents.css)(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";"], (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(6), (0, _typography.stepToRem)(-2));
exports.NANO = NANO;
var MICRO = (0, _styledComponents.css)(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], (0, _typography.pxToRem)(130), (0, _typography.pxToRem)(130), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-2));
exports.MICRO = MICRO;
var TINY = (0, _styledComponents.css)(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-1));
exports.TINY = TINY;
var BIG = (0, _styledComponents.css)(["@media (min-width:", "){--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0));
exports.BIG = BIG;
var HUGE = (0, _styledComponents.css)(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){--Button-min-width:", ";min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}"], (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40));
exports.HUGE = HUGE;
var GIANT = (0, _styledComponents.css)(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){--Button-min-width:", ";min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}"], (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40));
exports.GIANT = GIANT;
var ICON = (0, _styledComponents.css)(["--Button-min-width:initial;min-width:initial;min-height:initial;width:", ";height:", ";padding:0;"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50));
exports.ICON = ICON;
var ICON_NANO = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20));
exports.ICON_NANO = ICON_NANO;
var ICON_MICRO = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30));
exports.ICON_MICRO = ICON_MICRO;
var ICON_TINY = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40));
exports.ICON_TINY = ICON_TINY;
var ICON_BIG = (0, _styledComponents.css)(["@media (min-width:", "){--Button-min-width:0;min-width:0;min-height:0;padding:0;width:", ";height:", ";}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70));
exports.ICON_BIG = ICON_BIG;
var ICON_HUGE = (0, _styledComponents.css)(["--Button-min-width:initial;min-width:initial;width:", ";height:", ";@media (min-width:", "){--Button-min-width:initial;min-width:initial;width:", ";height:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80));
exports.ICON_HUGE = ICON_HUGE;
var ICON_GIANT = (0, _styledComponents.css)(["--Button-min-width:initial;min-width:initial;width:", ";height:", ";@media (min-width:", "){--Button-min-width:initial;min-width:initial;width:", ";height:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(90));
exports.ICON_GIANT = ICON_GIANT;