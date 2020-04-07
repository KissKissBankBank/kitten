import { css } from 'styled-components'
import { stepToRem, pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const modifierStyles = modifier => {
  let fontStepOnMobile
  let fontStepOnTablet
  let fontStepOnDesktop

  switch(modifier) {
    case 'primary':
      fontStepOnMobile = 7
      fontStepOnTablet = 9
      fontStepOnDesktop = 12
      break

    case 'secondary' :
      fontStepOnMobile = 6
      fontStepOnTablet = 7
      fontStepOnDesktop = 9
      break

    case 'tertiary' :
      fontStepOnMobile = 5
      fontStepOnTablet = 6
      fontStepOnDesktop = 7
      break

    case 'quaternary' :
      fontStepOnMobile = 4
      fontStepOnTablet = 5
      fontStepOnDesktop = 6
      break

    case 'quinary' :
      fontStepOnMobile = 2
      fontStepOnTablet = 4
      fontStepOnDesktop = 5
      break

    case 'senary' :
      fontStepOnMobile = 1
      fontStepOnTablet = 2
      fontStepOnDesktop = 4
      break

    case 'septenary' :
      fontStepOnMobile = 0
      fontStepOnTablet = 1
      fontStepOnDesktop = 2
      break
  }

  return css`
    font-size: ${stepToRem(fontStepOnMobile)};
    line-height: 1.2;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(fontStepOnTablet)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      font-size: ${stepToRem(fontStepOnDesktop)};
    }
  `
}
