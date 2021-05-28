import { css } from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
export var modifierStyles = function modifierStyles(modifier) {
  var borderColor;
  var borderStyle = 'solid';
  var backgroundColor;
  var color;
  var hoverBorderColor = COLORS.primary2;
  var hoverBgColor = COLORS.primary2;
  var hoverColor = COLORS.background1;
  var activeBorderColor = COLORS.primary3;
  var activeBgColor = COLORS.primary3;
  var activeColor = COLORS.background1;

  switch (modifier) {
    case 'hydrogen':
      borderColor = COLORS.line1;
      backgroundColor = COLORS.background1;
      color = COLORS.font1;
      break;

    case 'helium':
      borderColor = COLORS.primary1;
      backgroundColor = COLORS.primary1;
      color = COLORS.background1;
      break;

    case 'lithium':
    case 'checked':
      borderColor = COLORS.primary4;
      backgroundColor = COLORS.background1;
      color = COLORS.primary1;
      break;

    case 'beryllium':
      borderColor = COLORS.font1;
      backgroundColor = COLORS.font1;
      color = COLORS.background1;
      break;

    case 'carbon':
      borderColor = COLORS.background1;
      backgroundColor = COLORS.background1;
      color = COLORS.font1;
      break;

    case 'oxygen':
      borderColor = COLORS.primary4;
      borderStyle = 'dashed';
      backgroundColor = COLORS.background1;
      color = COLORS.primary1;
      break;

    case 'copper':
      borderColor = COLORS.error3;
      backgroundColor = COLORS.background1;
      color = COLORS.error;
      hoverBorderColor = 'currentColor';
      hoverBgColor = COLORS.background1;
      hoverColor = COLORS.error;
      activeBorderColor = 'currentColor';
      activeBgColor = COLORS.background1;
      activeColor = COLORS.error;
      break;

    case 'boron':
      borderColor = COLORS.grey1;
      backgroundColor = COLORS.font1;
      color = COLORS.background1;
      hoverBorderColor = 'currentColor';
      hoverBgColor = COLORS.line3;
      hoverColor = COLORS.background1;
      activeBorderColor = 'currentColor';
      activeBgColor = COLORS.line3;
      activeColor = COLORS.font2;
      break;

    case 'neon':
      borderColor = COLORS.orange;
      backgroundColor = COLORS.orange;
      color = COLORS.background1;
      hoverBorderColor = COLORS.orange2;
      hoverBgColor = COLORS.orange2;
      hoverColor = COLORS.background1;
      activeBorderColor = COLORS.orange3;
      activeBgColor = COLORS.orange3;
      activeColor = COLORS.background1;
      break;

    /* Social modifiers */

    case 'social_facebook':
      borderColor = '#3b5998';
      backgroundColor = '#3b5998';
      color = COLORS.background1;
      hoverBorderColor = '#2c4a89';
      hoverBgColor = '#2c4a89';
      activeBorderColor = '#1d3b7a';
      activeBgColor = '#1d3b7a';
      break;

    case 'social_twitter':
      borderColor = '#55acee';
      backgroundColor = '#55acee';
      color = COLORS.background1;
      hoverBorderColor = '#469ddf';
      hoverBgColor = '#469ddf';
      activeBorderColor = '#388ed0';
      activeBgColor = '#388ed0';
      break;

    case 'social_linkedin':
      borderColor = '#00669e';
      backgroundColor = '#00669e';
      color = COLORS.background1;
      hoverBorderColor = '#00578f';
      hoverBgColor = '#00578f';
      activeBorderColor = '#004880';
      activeBgColor = '#004880';
      break;

    case 'social_instagram':
      borderColor = '#3b5998';
      backgroundColor = '#3b5998';
      color = COLORS.background1;
      hoverBorderColor = '#2c4a89';
      hoverBgColor = '#2c4a89';
      activeBorderColor = '#1d3b7a';
      activeBgColor = '#1d3b7a';
      break;

    case 'social_pinterest':
      borderColor = '#bd081c';
      backgroundColor = '#bd081c';
      color = COLORS.background1;
      hoverBorderColor = '#ae000d';
      hoverBgColor = '#ae000d';
      activeBorderColor = '#9f0000';
      activeBgColor = '#9f0000';
      break;

    case 'social_youtube':
      borderColor = '#ff0000';
      backgroundColor = '#ff0000';
      color = COLORS.background1;
      hoverBorderColor = '#f00000';
      hoverBgColor = '#f00000';
      activeBorderColor = '#e10000';
      activeBgColor = '#e10000';
      break;
  }

  return css(["border:", " ", " ", ";background-color:", ";color:", ";svg,path{fill:currentColor;transition:fill 0.2s;}transition:background-color 0.2s,color 0.2s,border-color 0.2s;", " ", " &:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&:disabled{border-color:", ";background-color:", ";color:", ";}"], pxToRem(2), borderStyle, borderColor, backgroundColor, color, modifier === 'social_instagram' && css(["transition:background 0.2s,color 0.2s;border:0 !important;background-repeat:no-repeat;background-image:radial-gradient( farthest-side at 32% 100%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82% ),linear-gradient(135deg,#234bd7 12%,#c33cbe 58%);background-size:160% 100%;background-position:center;&:hover,&:focus{background-image:radial-gradient( farthest-side at 32% 100%,#f0d26e 0%,#f0be5a 10%,#eb8228 28%,#dc3232 42%,transparent 82% ),linear-gradient(135deg,#143cc8 12%,#b42daf 58%);}&:active{background-image:radial-gradient( farthest-side at 32% 100%,#e1c35f 0%,#e1af4b 10%,#dc7319 28%,#cd2323 42%,transparent 82% ),linear-gradient(135deg,#052db9 12%,#a51ea0 58%);}"]), modifier !== 'checked' && css(["&:hover,&:focus{border-color:", ";background-color:", ";color:", ";}&:active{border-color:", ";background-color:", ";color:", ";}"], hoverBorderColor, hoverBgColor, hoverColor, activeBorderColor, activeBgColor, activeColor), COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, COLORS.line2, COLORS.line2, COLORS.background1);
};