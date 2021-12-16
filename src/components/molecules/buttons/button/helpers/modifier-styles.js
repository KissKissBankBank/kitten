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
      borderColor = _colorsConfig.default.font1;
      backgroundColor = _colorsConfig.default.font1;
      color = _colorsConfig.default.background1;
      break;

    case 'carbon':
      borderColor = _colorsConfig.default.background1;
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.font1;
      break;

    case 'oxygen':
      borderColor = _colorsConfig.default.primary4;
      borderStyle = 'dashed';
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.primary1;
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

    case 'calcium':
      borderColor = 'var(--color-grey-400)';
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.font1;
      hoverBorderColor = _colorsConfig.default.primary4;
      hoverBgColor = _colorsConfig.default.background1;
      hoverColor = _colorsConfig.default.font1;
      activeBorderColor = _colorsConfig.default.primary1;
      activeBgColor = _colorsConfig.default.primary5;
      activeColor = _colorsConfig.default.font1;
      break;

    /* Social modifiers */

    case 'social_facebook':
      borderColor = '#3b5998';
      backgroundColor = '#3b5998';
      color = _colorsConfig.default.background1;
      hoverBorderColor = '#2c4a89';
      hoverBgColor = '#2c4a89';
      activeBorderColor = '#1d3b7a';
      activeBgColor = '#1d3b7a';
      break;

    case 'social_twitter':
      borderColor = '#55acee';
      backgroundColor = '#55acee';
      color = _colorsConfig.default.background1;
      hoverBorderColor = '#469ddf';
      hoverBgColor = '#469ddf';
      activeBorderColor = '#388ed0';
      activeBgColor = '#388ed0';
      break;

    case 'social_linkedin':
      borderColor = '#00669e';
      backgroundColor = '#00669e';
      color = _colorsConfig.default.background1;
      hoverBorderColor = '#00578f';
      hoverBgColor = '#00578f';
      activeBorderColor = '#004880';
      activeBgColor = '#004880';
      break;

    case 'social_instagram':
      borderColor = '#3b5998';
      backgroundColor = '#3b5998';
      color = _colorsConfig.default.background1;
      hoverBorderColor = '#2c4a89';
      hoverBgColor = '#2c4a89';
      activeBorderColor = '#1d3b7a';
      activeBgColor = '#1d3b7a';
      break;

    case 'social_youtube':
      borderColor = '#ff0000';
      backgroundColor = '#ff0000';
      color = _colorsConfig.default.background1;
      hoverBorderColor = '#f00000';
      hoverBgColor = '#f00000';
      activeBorderColor = '#e10000';
      activeBgColor = '#e10000';
      break;
  }

  return (0, _styledComponents.css)(["border:", " ", " ", ";background-color:", ";color:", ";svg:not(.k-ColorSvg){&,path{fill:currentColor;transition:fill 0.2s;}}transition:background-color 0.2s,color 0.2s,border-color 0.2s;", " ", " &:disabled,&.k-Button--disabled{border:var(--border-width) solid ", ";background-color:", ";color:", ";}"], borderSize, borderStyle, borderColor, backgroundColor, color, modifier === 'social_instagram' && (0, _styledComponents.css)(["transition:background 0.2s,color 0.2s;border:0 !important;background-repeat:no-repeat;background-image:radial-gradient( farthest-side at 32% 100%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82% ),linear-gradient(135deg,#234bd7 12%,#c33cbe 58%);background-size:160% 100%;background-position:center;&:hover,&:focus{background-image:radial-gradient( farthest-side at 32% 100%,#f0d26e 0%,#f0be5a 10%,#eb8228 28%,#dc3232 42%,transparent 82% ),linear-gradient(135deg,#143cc8 12%,#b42daf 58%);}&:active{background-image:radial-gradient( farthest-side at 32% 100%,#e1c35f 0%,#e1af4b 10%,#dc7319 28%,#cd2323 42%,transparent 82% ),linear-gradient(135deg,#052db9 12%,#a51ea0 58%);}"]), modifier !== 'checked' && (0, _styledComponents.css)(["&:hover,&:focus{border-color:", ";background-color:", ";color:", ";}&:active{border-color:", ";background-color:", ";color:", ";}"], hoverBorderColor, hoverBgColor, hoverColor, activeBorderColor, activeBgColor, activeColor), _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.font3);
};

exports.modifierStyles = modifierStyles;