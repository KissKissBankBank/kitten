import { css } from 'styled-components'
import { stepToRem, pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const modifierStyles = modifier => {
  let fontStepOnMobile
  let fontStepOnTablet
  let fontStepOnDesktop

  switch (modifier) {
    case 'primary':
      fontStepOnMobile = 0
      fontStepOnTablet = 1
      fontStepOnDesktop = 2
      break

    case 'secondary':
      fontStepOnMobile = -1
      fontStepOnTablet = 0
      fontStepOnDesktop = 0
      break

    case 'tertiary':
      fontStepOnMobile = -2
      fontStepOnTablet = -1
      fontStepOnDesktop = -1
      break

    case 'quaternary':
      fontStepOnMobile = -2
      fontStepOnTablet = -2
      fontStepOnDesktop = -2
      break
    }

    return css`
      font-size: ${stepToRem(fontStepOnMobile)};
      line-height: 1.6;
  
      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(fontStepOnTablet)};
      }
  
      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        font-size: ${stepToRem(fontStepOnDesktop)};
      }
    `
  }
