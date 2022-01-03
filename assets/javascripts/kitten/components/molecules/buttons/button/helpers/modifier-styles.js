import { css } from 'styled-components'
import COLORS from '../../../../../constants/colors-config'

export const modifierStyles = modifier => {
  let borderColor
  let borderStyle = 'solid'
  let borderSize = 'var(--border-width)'
  let backgroundColor
  let color

  let hoverBorderColor = COLORS.primary2
  let hoverBgColor = COLORS.primary2
  let hoverColor = COLORS.background1
  let activeBorderColor = COLORS.primary3
  let activeBgColor = COLORS.primary3
  let activeColor = COLORS.background1

  switch (modifier) {
    case 'hydrogen':
    case 'carbon':
    case 'oxygen':
    case 'calcium':
      borderColor = 'var(--color-grey-400)'
      backgroundColor = COLORS.background1
      color = COLORS.font1
      break

    case 'helium':
      borderColor = COLORS.primary1
      backgroundColor = COLORS.primary1
      color = COLORS.background1
      break

    case 'lithium':
    case 'checked':
      borderColor = COLORS.primary4
      backgroundColor = COLORS.background1
      color = COLORS.primary1
      break

    case 'beryllium':
    case 'social_facebook':
    case 'social_twitter':
    case 'social_linkedin':
    case 'social_instagram':
    case 'social_youtube':
      borderColor = COLORS.font1
      backgroundColor = COLORS.font1
      color = COLORS.background1
      break

    case 'copper':
      borderColor = COLORS.error3
      backgroundColor = COLORS.background1
      color = COLORS.error
      hoverBorderColor = 'currentColor'
      hoverBgColor = COLORS.background1
      hoverColor = COLORS.error
      activeBorderColor = 'currentColor'
      activeBgColor = COLORS.background1
      activeColor = COLORS.error
      break

    case 'boron':
      borderColor = COLORS.grey1
      backgroundColor = COLORS.font1
      color = COLORS.background1
      hoverBorderColor = 'currentColor'
      hoverBgColor = COLORS.line3
      hoverColor = COLORS.background1
      activeBorderColor = 'currentColor'
      activeBgColor = COLORS.line3
      activeColor = COLORS.font2
      break

    case 'scandium':
      borderColor = COLORS.font1
      backgroundColor = COLORS.font1
      color = COLORS.font3
      hoverBorderColor = COLORS.line3
      hoverBgColor = COLORS.line3
      hoverColor = COLORS.background1
      activeBorderColor = COLORS.grey1
      activeBgColor = COLORS.grey1
      activeColor = COLORS.background1
      break

    case 'neon':
      borderColor = COLORS.orange
      backgroundColor = COLORS.orange
      color = COLORS.background1
      hoverBorderColor = COLORS.orange2
      hoverBgColor = COLORS.orange2
      hoverColor = COLORS.background1
      activeBorderColor = COLORS.orange3
      activeBgColor = COLORS.orange3
      activeColor = COLORS.background1
      break

    case 'iron':
      borderColor = COLORS.error
      backgroundColor = COLORS.error
      color = COLORS.background1
      hoverBorderColor = COLORS.error4
      hoverBgColor = COLORS.error4
      hoverColor = COLORS.background1
      activeBorderColor = COLORS.error5
      activeBgColor = COLORS.error5
      activeColor = COLORS.background1
      break
  }

  return css`
    border: ${borderSize} ${borderStyle} ${borderColor};
    background-color: ${backgroundColor};
    color: ${color};

    svg:not(.k-ColorSvg) {
      &,
      path {
        fill: currentColor;
        transition: fill 0.2s;
      }
    }

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    ${modifier !== 'checked' &&
    css`
      &:hover,
      &:focus {
        border-color: ${hoverBorderColor};
        background-color: ${hoverBgColor};
        color: ${hoverColor};
      }

      &:active {
        border-color: ${activeBorderColor};
        background-color: ${activeBgColor};
        color: ${activeColor};
      }
    `}

    &:disabled,
    &.k-Button--disabled {
      border: var(--border-width) solid ${COLORS.background3};
      background-color: ${COLORS.background3};
      color: ${COLORS.font3};
    }
  `
}
