import styled from 'styled-components'
import { Button, ICON } from '../../../components/buttons/button'
import { modifierStyles } from '../../../components/buttons/button/helpers/modifier-styles'
import COLORS from '../../../constants/colors-config'

export default styled(Button)`
  ${ICON};
  ${modifierStyles('hydrogen')};

  // Lithium modifier.
  &.is-selected,
  :hover,
  :focus {
    border-color: ${COLORS.primary4};
    background-color: ${COLORS.background1};
    color: ${COLORS.primary1};

    svg,
    path {
      fill: ${COLORS.primary1};
    }
  }

  :disabled {
    border-color: ${COLORS.line2};
    background-color: ${COLORS.line2};
    color: ${COLORS.background1};

    svg,
    path {
      fill: ${COLORS.background1};
    }
  }
`
