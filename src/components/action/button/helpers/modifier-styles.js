"use strict";

exports.__esModule = true;
exports.modifierStyles = void 0;

var _styledComponents = require("styled-components");

const modifierStyles = modifier => {
  const colors = {
    borderColor: 'var(--color-grey-700)',
    backgroundColor: 'var(--color-grey-000)',
    color: 'var(--color-grey-900)',
    hoverBorderColor: 'var(--color-primary-700)',
    hoverBgColor: 'var(--color-primary-700)',
    hoverColor: 'var(--color-grey-000)',
    activeBorderColor: 'var(--color-primary-900)',
    activeBgColor: 'var(--color-primary-900)',
    activeColor: 'var(--color-grey-000)',
    disabledBorderColor: 'var(--color-grey-200)',
    disabledBgColor: 'var(--color-grey-200)',
    disabledColor: 'var(--color-grey-600)'
  };

  switch (modifier) {
    case 'hydrogen':
      colors.borderColor = 'var(--color-grey-700)';
      colors.backgroundColor = 'var(--color-grey-000)';
      colors.color = 'var(--color-grey-900)';
      colors.hoverBorderColor = 'var(--color-primary-500)';
      colors.hoverBgColor = 'var(--color-grey-000)';
      colors.hoverColor = 'var(--color-grey-900)';
      colors.activeBorderColor = 'var(--color-primary-700)';
      colors.activeBgColor = 'var(--color-grey-000)';
      colors.activeColor = 'var(--color-grey-900)';
      colors.disabledBorderColor = 'var(--color-grey-400)';
      colors.disabledBgColor = 'var(--color-grey-000)';
      break;

    case 'nitrogen':
      colors.borderColor = 'var(--color-grey-400)';
      colors.backgroundColor = 'var(--color-grey-000)';
      colors.color = 'var(--color-grey-900)';
      colors.hoverBorderColor = 'var(--color-primary-500)';
      colors.hoverBgColor = 'var(--color-grey-000)';
      colors.hoverColor = 'var(--color-grey-900)';
      colors.activeBorderColor = 'var(--color-primary-700)';
      colors.activeBgColor = 'var(--color-grey-000)';
      colors.activeColor = 'var(--color-grey-900)';
      colors.disabledBorderColor = 'var(--color-grey-400)';
      colors.disabledBgColor = 'var(--color-grey-000)';
      break;

    case 'helium':
      colors.borderColor = 'var(--color-primary-500)';
      colors.backgroundColor = 'var(--color-primary-500)';
      colors.color = 'var(--color-grey-000)';
      break;

    case 'lithium':
    case 'checked':
      colors.borderColor = 'var(--color-primary-500)';
      colors.backgroundColor = 'var(--color-primary-100)';
      colors.color = 'var(--color-grey-900)';
      colors.hoverBorderColor = 'var(--color-primary-700)';
      colors.hoverBgColor = 'var(--color-primary-300)';
      colors.hoverColor = 'var(--color-grey-900)';
      colors.activeBorderColor = 'var(--color-primary-900)';
      colors.activeBgColor = 'var(--color-primary-300)';
      colors.activeColor = 'var(--color-grey-900)';
      colors.disabledBorderColor = 'var(--color-grey-600)';
      colors.disabledBgColor = 'var(--color-grey-300)';
      break;

    case 'beryllium':
      colors.borderColor = 'var(--color-grey-900)';
      colors.backgroundColor = 'var(--color-grey-900)';
      colors.color = 'var(--color-grey-000)';
      break;

    case 'copper':
      colors.borderColor = 'var(--color-danger-300)';
      colors.backgroundColor = 'var(--color-grey-000)';
      colors.color = 'var(--color-danger-500)';
      colors.hoverBorderColor = 'var(--color-danger-500)';
      colors.hoverBgColor = 'var(--color-grey-000)';
      colors.hoverColor = 'var(--color-danger-500)';
      colors.activeBorderColor = 'var(--color-danger-700)';
      colors.activeBgColor = 'var(--color-grey-000)';
      colors.activeColor = 'var(--color-danger-700)';
      colors.disabledBorderColor = 'var(--color-grey-400)';
      colors.disabledBgColor = 'var(--color-grey-000)';
      break;

    case 'boron':
      colors.borderColor = 'var(--color-grey-700)';
      colors.backgroundColor = 'var(--color-grey-900)';
      colors.color = 'var(--color-grey-000)';
      colors.hoverBorderColor = 'currentColor';
      colors.hoverBgColor = 'var(--color-grey-800)';
      colors.hoverColor = 'var(--color-grey-000)';
      colors.activeBorderColor = 'currentColor';
      colors.activeBgColor = 'var(--color-grey-800)';
      colors.activeColor = 'var(--color-grey-500)';
      break;

    case 'scandium':
      colors.borderColor = 'var(--color-grey-900)';
      colors.backgroundColor = 'var(--color-grey-900)';
      colors.color = 'var(--color-grey-600)';
      colors.hoverBorderColor = 'var(--color-grey-800)';
      colors.hoverBgColor = 'var(--color-grey-800)';
      colors.hoverColor = 'var(--color-grey-000)';
      colors.activeBorderColor = 'var(--color-grey-700)';
      colors.activeBgColor = 'var(--color-grey-700)';
      colors.activeColor = 'var(--color-grey-000)';
      break;

    case 'neon':
      colors.borderColor = 'var(--color-warning-500)';
      colors.backgroundColor = 'var(--color-warning-500)';
      colors.color = 'var(--color-grey-000)';
      colors.hoverBorderColor = 'var(--color-warning-700)';
      colors.hoverBgColor = 'var(--color-warning-700)';
      colors.hoverColor = 'var(--color-grey-000)';
      colors.activeBorderColor = 'var(--color-warning-900)';
      colors.activeBgColor = 'var(--color-warning-900)';
      colors.activeColor = 'var(--color-grey-000)';
      break;

    case 'iron':
      colors.borderColor = 'var(--color-danger-500)';
      colors.backgroundColor = 'var(--color-danger-500)';
      colors.color = 'var(--color-grey-000)';
      colors.hoverBorderColor = 'var(--color-danger-700)';
      colors.hoverBgColor = 'var(--color-danger-700)';
      colors.hoverColor = 'var(--color-grey-000)';
      colors.activeBorderColor = 'var(--color-danger-900)';
      colors.activeBgColor = 'var(--color-danger-900)';
      colors.activeColor = 'var(--color-grey-000)';
      break;

    case 'krypton':
      colors.borderColor = 'var(--color-success-500)';
      colors.backgroundColor = 'var(--color-success-500)';
      colors.color = 'var(--color-grey-000)';
      colors.hoverBorderColor = 'var(--color-success-700)';
      colors.hoverBgColor = 'var(--color-success-700)';
      colors.hoverColor = 'var(--color-grey-000)';
      colors.activeBorderColor = 'var(--color-success-900)';
      colors.activeBgColor = 'var(--color-success-900)';
      colors.activeColor = 'var(--color-grey-000)';
      break;
  }

  return (0, _styledComponents.css)(["border:var(--border-width) solid ", ";background-color:", ";color:", ";svg:not(.k-ColorSvg){&,path{fill:currentColor;transition:fill var(--transition);}}transition:background-color var(--transition),color var(--transition),border-color var(--transition);", " &:disabled,&.k-Button--disabled{border:var(--border-width) solid ", ";background-color:", ";color:", ";}"], colors.borderColor, colors.backgroundColor, colors.color, modifier !== 'checked' && (0, _styledComponents.css)(["&:hover{border-color:", ";background-color:", ";color:", ";}&:focus{border-color:", ";background-color:", ";color:", ";}&:active{border-color:", ";background-color:", ";color:", ";}"], colors.hoverBorderColor, colors.hoverBgColor, colors.hoverColor, colors.hoverBorderColor, colors.backgroundColor, colors.color, colors.activeBorderColor, colors.activeBgColor, colors.activeColor), colors.disabledBorderColor, colors.disabledBgColor, colors.disabledColor);
};

exports.modifierStyles = modifierStyles;