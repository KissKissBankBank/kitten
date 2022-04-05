import { css } from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
export var FLUID = css(["--Button-min-width:initial;min-width:initial;width:100%;"]);
export var ROUNDED = css(["border-radius:var(--border-radius-rounded);"]); // Deprecated

export var DEFAULT = css(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], pxToRem(200), pxToRem(200), pxToRem(50), pxToRem(10), pxToRem(30), stepToRem(-1));
export var MEDIUM = css(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], pxToRem(200), pxToRem(200), pxToRem(50), pxToRem(10), pxToRem(30), stepToRem(-1));
export var NANO = css(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";"], pxToRem(100), pxToRem(100), pxToRem(20), pxToRem(6), stepToRem(-2));
export var MICRO = css(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], pxToRem(130), pxToRem(130), pxToRem(30), pxToRem(5), pxToRem(10), stepToRem(-2)); // Deprecated

export var TINY = css(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], pxToRem(160), pxToRem(160), pxToRem(40), pxToRem(7), pxToRem(20), stepToRem(-1));
export var SMALL = css(["--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";"], pxToRem(160), pxToRem(160), pxToRem(40), pxToRem(7), pxToRem(20), stepToRem(-1)); // Deprecated

export var BIG = css(["@media (min-width:", "){--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(220), pxToRem(70), pxToRem(10), pxToRem(40), stepToRem(0));
export var LARGE = css(["@media (min-width:", "){--Button-min-width:", ";min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(220), pxToRem(70), pxToRem(10), pxToRem(40), stepToRem(0));
export var HUGE = css(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){--Button-min-width:", ";min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}"], pxToRem(70), stepToRem(-1), pxToRem(10), pxToRem(10), ScreenConfig.M.min, pxToRem(220), pxToRem(220), pxToRem(80), stepToRem(0), pxToRem(10), pxToRem(40));
export var GIANT = css(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){--Button-min-width:", ";min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}"], pxToRem(70), stepToRem(-1), pxToRem(10), pxToRem(10), ScreenConfig.M.min, pxToRem(220), pxToRem(220), pxToRem(90), stepToRem(0), pxToRem(10), pxToRem(40));
export var ICON = css(["--Button-min-width:initial;min-width:initial;min-height:initial;width:", ";height:", ";padding:0;"], pxToRem(50), pxToRem(50));
export var ICON_NANO = css(["width:", ";height:", ";"], pxToRem(20), pxToRem(20));
export var ICON_MICRO = css(["width:", ";height:", ";"], pxToRem(30), pxToRem(30)); // Deprecated

export var ICON_TINY = css(["width:", ";height:", ";"], pxToRem(40), pxToRem(40));
export var ICON_SMALL = css(["width:", ";height:", ";"], pxToRem(40), pxToRem(40)); // Deprecated

export var ICON_BIG = css(["@media (min-width:", "){--Button-min-width:0;min-width:0;min-height:0;padding:0;width:", ";height:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(70), pxToRem(70));
export var ICON_LARGE = css(["@media (min-width:", "){--Button-min-width:0;min-width:0;min-height:0;padding:0;width:", ";height:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(70), pxToRem(70));
export var ICON_HUGE = css(["--Button-min-width:initial;min-width:initial;width:", ";height:", ";@media (min-width:", "){--Button-min-width:initial;min-width:initial;width:", ";height:", ";}"], pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.M.min), pxToRem(80), pxToRem(80));
export var ICON_GIANT = css(["--Button-min-width:initial;min-width:initial;width:", ";height:", ";@media (min-width:", "){--Button-min-width:initial;min-width:initial;width:", ";height:", ";}"], pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.M.min), pxToRem(90), pxToRem(90));