import { css } from 'styled-components'
import { stepToRem, pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const modifierStyles = modifier => {
  let fontStep
  let fontStepOnMedia

  switch(modifier) {
    case 'primary':
      fontStep = 7
      fontStepOnMedia = 9
      break

    case 'secondary' :
      fontStep = 6
      fontStepOnMedia = 9
      break

    case 'tertiary' :
      fontStep = 5
      fontStepOnMedia = 7
      break

    case 'quaternary' :
      fontStep = 4
      fontStepOnMedia = 5
      break

    case 'quinary' :
      fontStep = 2
      fontStepOnMedia = 4
      break

    case 'senary' :
      fontStep = 1
      fontStepOnMedia = 2
      break
  }

  return css`
    font-size: ${stepToRem(fontStepOnMedia)};
    line-height: 1.2;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(fontStep)};
    }
  `
}
