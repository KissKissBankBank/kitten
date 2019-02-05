import { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'

export const modifierStyles = modifier => {
  let borderColor
  let borderStyle = 'solid'
  let backgroundColor
  let color
  let selectorsBorderColor
  let selectorsBackgroundColor
  let selectorsColor

  switch (modifier) {
    case 'hydrogen':
      borderColor = COLORS.line1
      backgroundColor = COLORS.background1
      color = COLORS.font1
      selectorsBorderColor = COLORS.primary3
      selectorsBackgroundColor = COLORS.primary3
      selectorsColor = COLORS.background1
      break

    case 'helium':
      borderColor = COLORS.primary1
      backgroundColor = COLORS.primary1
      color = COLORS.background1
      selectorsBorderColor = COLORS.primary3
      selectorsBackgroundColor = COLORS.primary3
      selectorsColor = COLORS.background1
      break

    case 'lithium':
      borderColor = COLORS.primary4
      backgroundColor = COLORS.background1
      color = COLORS.primary1
      selectorsBorderColor = COLORS.primary3
      selectorsBackgroundColor = COLORS.primary3
      selectorsColor = COLORS.background1
      break

    case 'beryllium':
      borderColor = COLORS.font1
      backgroundColor = COLORS.font1
      color = COLORS.background1
      selectorsBorderColor = COLORS.primary3
      selectorsBackgroundColor = COLORS.primary3
      selectorsColor = COLORS.background1
      break

    case 'carbon':
      borderColor = COLORS.background1
      backgroundColor = COLORS.background1
      color = COLORS.font1
      selectorsBorderColor = COLORS.primary3
      selectorsBackgroundColor = COLORS.primary3
      selectorsColor = COLORS.background1
      break

    case 'azote':
      borderColor = COLORS.line1
      backgroundColor = COLORS.background1
      color = COLORS.font1
      selectorsBorderColor = COLORS.primary4
      selectorsBackgroundColor = COLORS.background1
      selectorsColor = COLORS.primary1
      break

    case 'oxygen':
      borderColor = COLORS.primary4
      borderStyle = 'dashed'
      backgroundColor = COLORS.background1
      color = COLORS.primary1
      selectorsBorderColor = COLORS.primary3
      selectorsBackgroundColor = COLORS.primary3
      selectorsColor = COLORS.background1
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

    :hover,
    :focus,
    :active {
      border-color: ${selectorsBorderColor};
      background-color: ${selectorsBackgroundColor};
      color: ${selectorsColor};

      svg {
        fill: ${selectorsColor};
      }
    }

    :disabled {
      background-color: ${COLORS.line2};
    }
  `
}
