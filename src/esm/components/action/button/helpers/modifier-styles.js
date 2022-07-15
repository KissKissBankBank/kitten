import { css } from 'styled-components';
import COLORS from '../../../../constants/colors-config';
export var modifierStyles = function modifierStyles(modifier) {
  var borderColor;
  var borderStyle = 'solid';
  var borderSize = 'var(--border-width)';
  var backgroundColor;
  var color;
  var hoverBorderColor = COLORS.primary2;
  var hoverBgColor = COLORS.primary2;
  var hoverColor = COLORS.background1;
  var activeBorderColor = COLORS.primary3;
  var activeBgColor = COLORS.primary3;
  var activeColor = COLORS.background1;
  var disabledBorderColor = 'var(--color-grey-200)';
  var disabledBgColor = 'var(--color-grey-200)';
  var disabledColor = 'var(--color-grey-600)';

  switch (modifier) {
    case 'hydrogen':
      borderColor = 'var(--color-grey-700)';
      backgroundColor = COLORS.background1;
      color = COLORS.font1;
      hoverBorderColor = 'var(--color-primary-500)';
      hoverBgColor = COLORS.background1;
      hoverColor = COLORS.font1;
      activeBorderColor = 'var(--color-primary-700)';
      activeBgColor = COLORS.background1;
      activeColor = COLORS.font1;
      disabledBorderColor = 'var(--color-grey-400)';
      disabledBgColor = 'var(--color-grey-000)';
      break;

    case 'helium':
      borderColor = COLORS.primary1;
      backgroundColor = COLORS.primary1;
      color = COLORS.background1;
      break;

    case 'lithium':
    case 'checked':
      borderColor = 'var(--color-primary-500)';
      backgroundColor = 'var(--color-primary-100)';
      color = COLORS.font1;
      hoverBorderColor = 'var(--color-primary-700)';
      hoverBgColor = 'var(--color-primary-300)';
      hoverColor = COLORS.font1;
      activeBorderColor = 'var(--color-primary-900)';
      activeBgColor = 'var(--color-primary-300)';
      activeColor = COLORS.font1;
      disabledBorderColor = 'var(--color-grey-600)';
      disabledBgColor = 'var(--color-grey-300)';
      break;

    case 'beryllium':
      borderColor = COLORS.font1;
      backgroundColor = COLORS.font1;
      color = COLORS.background1;
      break;

    case 'copper':
      borderColor = 'var(--color-danger-300)';
      backgroundColor = COLORS.background1;
      color = 'var(--color-danger-500)';
      hoverBorderColor = 'var(--color-danger-500)';
      hoverBgColor = COLORS.background1;
      hoverColor = 'var(--color-danger-500)';
      activeBorderColor = 'var(--color-danger-700)';
      activeBgColor = COLORS.background1;
      activeColor = 'var(--color-danger-700)';
      disabledBorderColor = 'var(--color-grey-400)';
      disabledBgColor = 'var(--color-grey-000)';
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

    case 'scandium':
      borderColor = COLORS.font1;
      backgroundColor = COLORS.font1;
      color = COLORS.font3;
      hoverBorderColor = COLORS.line3;
      hoverBgColor = COLORS.line3;
      hoverColor = COLORS.background1;
      activeBorderColor = COLORS.grey1;
      activeBgColor = COLORS.grey1;
      activeColor = COLORS.background1;
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

    case 'iron':
      borderColor = 'var(--color-danger-500)';
      backgroundColor = 'var(--color-danger-500)';
      color = COLORS.background1;
      hoverBorderColor = 'var(--color-danger-700)';
      hoverBgColor = 'var(--color-danger-700)';
      hoverColor = COLORS.background1;
      activeBorderColor = 'var(--color-danger-900)';
      activeBgColor = 'var(--color-danger-900)';
      activeColor = COLORS.background1;
      break;

    case 'krypton':
      borderColor = 'var(--color-success-500)';
      backgroundColor = 'var(--color-success-500)';
      color = COLORS.background1;
      hoverBorderColor = 'var(--color-success-700)';
      hoverBgColor = 'var(--color-success-700)';
      hoverColor = COLORS.background1;
      activeBorderColor = 'var(--color-success-900)';
      activeBgColor = 'var(--color-success-900)';
      activeColor = COLORS.background1;
      break;
  }

  return css(["border:", " ", " ", ";background-color:", ";color:", ";svg:not(.k-ColorSvg){&,path{fill:currentColor;transition:fill var(--transition);}}transition:background-color var(--transition),color var(--transition),border-color var(--transition);", " &:disabled,&.k-Button--disabled{border:var(--border-width) solid ", ";background-color:", ";color:", ";}"], borderSize, borderStyle, borderColor, backgroundColor, color, modifier !== 'checked' && css(["&:hover{border-color:", ";background-color:", ";color:", ";}&:focus{border-color:", ";background-color:", ";color:", ";}&:active{border-color:", ";background-color:", ";color:", ";}"], hoverBorderColor, hoverBgColor, hoverColor, hoverBorderColor, backgroundColor, color, activeBorderColor, activeBgColor, activeColor), disabledBorderColor, disabledBgColor, disabledColor);
};