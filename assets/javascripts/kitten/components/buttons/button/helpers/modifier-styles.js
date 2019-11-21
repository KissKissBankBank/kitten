import { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'

export const modifierStyles = modifier => {
  let borderColor
  let borderStyle = 'solid'
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
      borderColor = COLORS.line1
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
      borderColor = COLORS.font1
      backgroundColor = COLORS.font1
      color = COLORS.background1
      break

    case 'carbon':
      borderColor = COLORS.background1
      backgroundColor = COLORS.background1
      color = COLORS.font1
      break

    case 'oxygen':
      borderColor = COLORS.primary4
      borderStyle = 'dashed'
      backgroundColor = COLORS.background1
      color = COLORS.primary1
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
  }

  return css`
    border: ${pxToRem(2)} ${borderStyle} ${borderColor};
    background-color: ${backgroundColor};
    color: ${color};

    svg {
      fill: ${color};
    }

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    ${modifier !== 'checked' &&
      css`
        :hover,
        :focus {
          border-color: ${hoverBorderColor};
          background-color: ${hoverBgColor};
          color: ${hoverColor};

          svg {
            fill: ${hoverColor};
          }
        }

        :active {
          border-color: ${activeBorderColor};
          background-color: ${activeBgColor};
          color: ${activeColor};

          svg {
            fill: ${activeColor};
          }
        }
      `}

    :disabled {
      border-color: ${COLORS.line2};
      background-color: ${COLORS.line2};
      color: ${COLORS.background1};

      svg {
        fill: ${COLORS.background1};
      }
    }
  `
}
