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
  }

  return css(["border:", " ", " ", ";background-color:", ";color:", ";svg,path{fill:", ";transition:fill 0.2s;}transition:background-color 0.2s,color 0.2s,border-color 0.2s;", ":disabled{border-color:", ";background-color:", ";color:", ";svg,path{fill:", ";}}"], pxToRem(2), borderStyle, borderColor, backgroundColor, color, color, modifier !== 'checked' && css([":hover,:focus{border-color:", ";background-color:", ";color:", ";svg,path{fill:", ";}}:active{border-color:", ";background-color:", ";color:", ";svg,path{fill:", ";}}"], hoverBorderColor, hoverBgColor, hoverColor, hoverColor, activeBorderColor, activeBgColor, activeColor, activeColor), COLORS.line2, COLORS.line2, COLORS.background1, COLORS.background1);
};