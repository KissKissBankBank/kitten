"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.modifierStyles = void 0;

var _styledComponents = require("styled-components");

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var modifierStyles = function modifierStyles(modifier) {
  var borderColor;
  var borderStyle = 'solid';
  var borderSize = 'var(--border-width)';
  var backgroundColor;
  var color;
  var hoverBorderColor = _colorsConfig.default.primary2;
  var hoverBgColor = _colorsConfig.default.primary2;
  var hoverColor = _colorsConfig.default.background1;
  var activeBorderColor = _colorsConfig.default.primary3;
  var activeBgColor = _colorsConfig.default.primary3;
  var activeColor = _colorsConfig.default.background1;

  switch (modifier) {
    case 'hydrogen':
    case 'carbon':
    case 'oxygen':
    case 'calcium':
      borderColor = 'var(--color-grey-400)';
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.font1;
      break;

    case 'helium':
      borderColor = _colorsConfig.default.primary1;
      backgroundColor = _colorsConfig.default.primary1;
      color = _colorsConfig.default.background1;
      break;

    case 'lithium':
    case 'checked':
      borderColor = _colorsConfig.default.primary4;
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.primary1;
      break;

    case 'beryllium':
    case 'social_facebook':
    case 'social_twitter':
    case 'social_linkedin':
    case 'social_instagram':
    case 'social_youtube':
      borderColor = _colorsConfig.default.font1;
      backgroundColor = _colorsConfig.default.font1;
      color = _colorsConfig.default.background1;
      break;

    case 'copper':
      borderColor = _colorsConfig.default.error3;
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.error;
      hoverBorderColor = 'currentColor';
      hoverBgColor = _colorsConfig.default.background1;
      hoverColor = _colorsConfig.default.error;
      activeBorderColor = 'currentColor';
      activeBgColor = _colorsConfig.default.background1;
      activeColor = _colorsConfig.default.error;
      break;

    case 'boron':
      borderColor = _colorsConfig.default.grey1;
      backgroundColor = _colorsConfig.default.font1;
      color = _colorsConfig.default.background1;
      hoverBorderColor = 'currentColor';
      hoverBgColor = _colorsConfig.default.line3;
      hoverColor = _colorsConfig.default.background1;
      activeBorderColor = 'currentColor';
      activeBgColor = _colorsConfig.default.line3;
      activeColor = _colorsConfig.default.font2;
      break;

    case 'scandium':
      borderColor = _colorsConfig.default.font1;
      backgroundColor = _colorsConfig.default.font1;
      color = _colorsConfig.default.font3;
      hoverBorderColor = _colorsConfig.default.line3;
      hoverBgColor = _colorsConfig.default.line3;
      hoverColor = _colorsConfig.default.background1;
      activeBorderColor = _colorsConfig.default.grey1;
      activeBgColor = _colorsConfig.default.grey1;
      activeColor = _colorsConfig.default.background1;
      break;

    case 'neon':
      borderColor = _colorsConfig.default.orange;
      backgroundColor = _colorsConfig.default.orange;
      color = _colorsConfig.default.background1;
      hoverBorderColor = _colorsConfig.default.orange2;
      hoverBgColor = _colorsConfig.default.orange2;
      hoverColor = _colorsConfig.default.background1;
      activeBorderColor = _colorsConfig.default.orange3;
      activeBgColor = _colorsConfig.default.orange3;
      activeColor = _colorsConfig.default.background1;
      break;

    case 'iron':
      borderColor = _colorsConfig.default.error;
      backgroundColor = _colorsConfig.default.error;
      color = _colorsConfig.default.background1;
      hoverBorderColor = _colorsConfig.default.error4;
      hoverBgColor = _colorsConfig.default.error4;
      hoverColor = _colorsConfig.default.background1;
      activeBorderColor = _colorsConfig.default.error5;
      activeBgColor = _colorsConfig.default.error5;
      activeColor = _colorsConfig.default.background1;
      break;
  }

  return (0, _styledComponents.css)(["border:", " ", " ", ";background-color:", ";color:", ";svg:not(.k-ColorSvg){&,path{fill:currentColor;transition:fill 0.2s;}}transition:background-color 0.2s,color 0.2s,border-color 0.2s;", " &:disabled,&.k-Button--disabled{border:var(--border-width) solid ", ";background-color:", ";color:", ";}"], borderSize, borderStyle, borderColor, backgroundColor, color, modifier !== 'checked' && (0, _styledComponents.css)(["&:hover,&:focus{border-color:", ";background-color:", ";color:", ";}&:active{border-color:", ";background-color:", ";color:", ";}"], hoverBorderColor, hoverBgColor, hoverColor, activeBorderColor, activeBgColor, activeColor), _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.font3);
};

exports.modifierStyles = modifierStyles;