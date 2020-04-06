import { css } from 'styled-components'
import { stepToRem } from '../../../../helpers/utils/typography'

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
    line-height: 1.2,
  `
}
