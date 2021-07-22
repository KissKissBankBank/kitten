import { css } from 'styled-components'
import { stepToRem, pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const titleModifiersNames = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'quinary',
  'senary',
  'septenary',
]

export const titleModifiers = [
  {
    name: 'primary',
    fontStepOnMobile: 7,
    fontStepOnTablet: 9,
    fontStepOnDesktop: 12,
  },

  {
    name: 'secondary',
    fontStepOnMobile: 6,
    fontStepOnTablet: 7,
    fontStepOnDesktop: 9,
  },

  {
    name: 'tertiary',
    fontStepOnMobile: 5,
    fontStepOnTablet: 6,
    fontStepOnDesktop: 7,
  },

  {
    name: 'quaternary',
    fontStepOnMobile: 4,
    fontStepOnTablet: 5,
    fontStepOnDesktop: 6,
  },

  {
    name: 'quinary',
    fontStepOnMobile: 2,
    fontStepOnTablet: 4,
    fontStepOnDesktop: 5,
  },

  {
    name: 'senary',
    fontStepOnMobile: 1,
    fontStepOnTablet: 2,
    fontStepOnDesktop: 4,
  },

  {
    name: 'septenary',
    fontStepOnMobile: 0,
    fontStepOnTablet: 1,
    fontStepOnDesktop: 2,
  },
]

const getLetterSpacingFromStep = step => {
  if (step > 5) return '-0.02em'
  if (step > 3) return '-0.015em'
  return '-0.01em'
}
const getLineHeightFromStep = step => {
  if (step > 8) return '1em'
  if (step > 4) return `calc(1em + ${pxToRem(4)})`
  return `calc(1em + ${pxToRem(2)})`
}

const getStyleFromStep = step => css`
  font-size: ${stepToRem(step)};
  letter-spacing: ${getLetterSpacingFromStep(step)};
  line-height: ${getLineHeightFromStep(step)};
`

export const titleModifierStyles = prefix => css`
  ${titleModifiers.map((key, index) => {
    return css`
      ${`${prefix}--${titleModifiersNames[index]}`} {
        ${getStyleFromStep(key.fontStepOnMobile)};

        @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
          ${getStyleFromStep(key.fontStepOnTablet)};
        }
        @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
          ${getStyleFromStep(key.fontStepOnDesktop)};
        }
      }
    `
  })}
`

export const titleHelperModifierStyles = modifier => {
  const modifierIndex = findIndex(item => modifier === item)(
    titleModifiersNames,
  )
  const modifierDefinitions = titleModifiersNames[modifierIndex]

  return css`
    ${getStyleFromStep(modifierDefinitions.fontStepOnMobile)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      ${getStyleFromStep(modifierDefinitions.fontStepOnTablet)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      ${getStyleFromStep(modifierDefinitions.fontStepOnDesktop)};
    }
  `
}
