import { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const strokeModifiers = [
  {
    name: 'primary',
    mobile: {
      width: 40,
      height: 6,
      top: 20,
      bottom: 40,
    },
    tablet: {
      width: 50,
      height: 6,
      top: 20,
      bottom: 40,
    },
    desktop: {
      width: 50,
      height: 6,
      top: 20,
      bottom: 40,
    },
  },

  {
    name: 'secondary',
    mobile: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
    tablet: {
      width: 40,
      height: 6,
      top: 20,
      bottom: 40,
    },
    desktop: {
      width: 50,
      height: 6,
      top: 20,
      bottom: 40,
    },
  },

  {
    name: 'tertiary',
    mobile: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
    tablet: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
    desktop: {
      width: 40,
      height: 6,
      top: 20,
      bottom: 40,
    },
  },

  {
    name: 'quaternary',
    mobile: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
    tablet: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
    desktop: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
  },

  {
    name: 'quinary',
    mobile: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
    tablet: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
    desktop: {
      width: 0,
      height: 0,
      top: 0,
      bottom: 10,
    },
  },

  {
    name: 'senary',
    mobile: {
      width: 0,
      height: 0,
      top: 0,
      bottom: 10,
    },
    tablet: {
      width: 0,
      height: 0,
      top: 0,
      bottom: 10,
    },
    desktop: {
      width: 30,
      height: 4,
      top: 15,
      bottom: 30,
    },
  },

  {
    name: 'septenary',
    mobile: {
      width: 0,
      height: 0,
      top: 0,
      bottom: 5,
    },
    tablet: {
      width: 0,
      height: 0,
      top: 0,
      bottom: 10,
    },
    desktop: {
      width: 0,
      height: 0,
      top: 0,
      bottom: 10,
    },
  },
]

export const strokeModifierStyles = prefix => {
  return strokeModifiers.map(key => {
    return css`
      ${`.${prefix}--${key.name}`} {
        width: ${pxToRem(key.mobile.width)};
        height: ${pxToRem(key.mobile.height)};
        margin-top: ${pxToRem(key.mobile.top)};
        margin-bottom: ${pxToRem(key.mobile.bottom)};

        @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
          width: ${pxToRem(key.tablet.width)};
          height: ${pxToRem(key.tablet.height)};
          margin-top: ${pxToRem(key.tablet.top)};
          margin-bottom: ${pxToRem(key.tablet.bottom)};
        }

        @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
          width: ${pxToRem(key.desktop.width)};
          height: ${pxToRem(key.desktop.height)};
          margin-top: ${pxToRem(key.desktop.top)};
          margin-bottom: ${pxToRem(key.desktop.bottom)};
        }
      }
    `
  })
}
