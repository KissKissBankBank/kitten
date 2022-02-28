"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.modifierStyles = void 0;

var _styledComponents = require("styled-components");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

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
  var disabledBorderColor = 'var(--color-grey-200)';
  var disabledBgColor = 'var(--color-grey-200)';
  var disabledColor = 'var(--color-grey-600)';

  switch (modifier) {
    case 'hydrogen':
    case 'carbon':
    case 'oxygen':
    case 'calcium':
      borderColor = 'var(--color-grey-400)';
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.font1;
      hoverBorderColor = 'var(--color-primary-500)';
      hoverBgColor = _colorsConfig.default.background1;
      hoverColor = _colorsConfig.default.font1;
      activeBorderColor = 'var(--color-primary-700)';
      activeBgColor = _colorsConfig.default.background1;
      activeColor = _colorsConfig.default.font1;
      disabledBorderColor = 'var(--color-grey-400)';
      disabledBgColor = 'var(--color-grey-000)';
      break;

    case 'helium':
      borderColor = _colorsConfig.default.primary1;
      backgroundColor = _colorsConfig.default.primary1;
      color = _colorsConfig.default.background1;
      break;

    case 'lithium':
    case 'checked':
      borderColor = 'var(--color-primary-500)';
      backgroundColor = 'var(--color-primary-100)';
      color = _colorsConfig.default.font1;
      hoverBorderColor = 'var(--color-primary-700)';
      hoverBgColor = 'var(--color-primary-300)';
      hoverColor = _colorsConfig.default.font1;
      activeBorderColor = 'var(--color-primary-900)';
      activeBgColor = 'var(--color-primary-300)';
      activeColor = _colorsConfig.default.font1;
      disabledBorderColor = 'var(--color-grey-600)';
      disabledBgColor = 'var(--color-grey-300)';
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
      borderColor = 'var(--color-danger-300)';
      backgroundColor = _colorsConfig.default.background1;
      color = 'var(--color-danger-500)';
      hoverBorderColor = 'var(--color-danger-500)';
      hoverBgColor = _colorsConfig.default.background1;
      hoverColor = 'var(--color-danger-500)';
      activeBorderColor = 'var(--color-danger-700)';
      activeBgColor = _colorsConfig.default.background1;
      activeColor = 'var(--color-danger-700)';
      disabledBorderColor = 'var(--color-grey-400)';
      disabledBgColor = 'var(--color-grey-000)';
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
      borderColor = 'var(--color-danger-500)';
      backgroundColor = 'var(--color-danger-500)';
      color = _colorsConfig.default.background1;
      hoverBorderColor = 'var(--color-danger-700)';
      hoverBgColor = 'var(--color-danger-700)';
      hoverColor = _colorsConfig.default.background1;
      activeBorderColor = 'var(--color-danger-900)';
      activeBgColor = 'var(--color-danger-900)';
      activeColor = _colorsConfig.default.background1;
      break;

    case 'krypton':
      borderColor = 'var(--color-success-500)';
      backgroundColor = 'var(--color-success-500)';
      color = _colorsConfig.default.background1;
      hoverBorderColor = 'var(--color-success-700)';
      hoverBgColor = 'var(--color-success-700)';
      hoverColor = _colorsConfig.default.background1;
      activeBorderColor = 'var(--color-success-900)';
      activeBgColor = 'var(--color-success-900)';
      activeColor = _colorsConfig.default.background1;
      break;
  }

  return (0, _styledComponents.css)(["border:", " ", " ", ";background-color:", ";color:", ";svg:not(.k-ColorSvg){&,path{fill:currentColor;transition:fill var(--transition);}}transition:background-color var(--transition),color var(--transition),border-color var(--transition);", " &:disabled,&.k-Button--disabled{border:var(--border-width) solid ", ";background-color:", ";color:", ";}"], borderSize, borderStyle, borderColor, backgroundColor, color, modifier !== 'checked' && (0, _styledComponents.css)(["&:hover{border-color:", ";background-color:", ";color:", ";}&:focus{border-color:", ";background-color:", ";color:", ";}&:active{border-color:", ";background-color:", ";color:", ";}"], hoverBorderColor, hoverBgColor, hoverColor, hoverBorderColor, backgroundColor, color, activeBorderColor, activeBgColor, activeColor), disabledBorderColor, disabledBgColor, disabledColor);
};

exports.modifierStyles = modifierStyles;