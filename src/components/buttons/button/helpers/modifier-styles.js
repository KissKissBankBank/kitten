"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifierStyles = void 0;

var _styledComponents = require("styled-components");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var modifierStyles = function modifierStyles(modifier) {
  var borderColor;
  var borderStyle = 'solid';
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
      borderColor = _colorsConfig.default.line1;
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

    case 'social_pinterest':
      borderColor = '#bd081c';
      backgroundColor = '#bd081c';
      color = _colorsConfig.default.background1;
      hoverBorderColor = '#ae000d';
      hoverBgColor = '#ae000d';
      activeBorderColor = '#9f0000';
      activeBgColor = '#9f0000';
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

  return (0, _styledComponents.css)(["border:", " ", " ", ";background-color:", ";color:", ";svg,path{fill:currentColor;transition:fill 0.2s;}transition:background-color 0.2s,color 0.2s,border-color 0.2s;", " ", ":disabled{border-color:", ";background-color:", ";color:", ";}"], (0, _typography.pxToRem)(2), borderStyle, borderColor, backgroundColor, color, modifier === 'social_instagram' && (0, _styledComponents.css)(["transition:background 0.2s,color 0.2s;border:0 !important;background-repeat:no-repeat;background-image:radial-gradient( farthest-side at 32% 100%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82% ),linear-gradient(135deg,#234bd7 12%,#c33cbe 58%);background-size:160% 100%;background-position:center;&:hover,&:focus{background-image:radial-gradient( farthest-side at 32% 100%,#f0d26e 0%,#f0be5a 10%,#eb8228 28%,#dc3232 42%,transparent 82% ),linear-gradient(135deg,#143cc8 12%,#b42daf 58%);}&:active{background-image:radial-gradient( farthest-side at 32% 100%,#e1c35f 0%,#e1af4b 10%,#dc7319 28%,#cd2323 42%,transparent 82% ),linear-gradient(135deg,#052db9 12%,#a51ea0 58%);}"]), modifier !== 'checked' && (0, _styledComponents.css)([":hover,:focus{border-color:", ";background-color:", ";color:", ";}:active{border-color:", ";background-color:", ";color:", ";}"], hoverBorderColor, hoverBgColor, hoverColor, activeBorderColor, activeBgColor, activeColor), _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1);
};

exports.modifierStyles = modifierStyles;