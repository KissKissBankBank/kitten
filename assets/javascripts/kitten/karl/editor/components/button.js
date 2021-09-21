import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../components/molecules/buttons/button'
import { ICON } from '../../../components/molecules/buttons/button/standalone-styles'
import { modifierStyles } from '../../../components/molecules/buttons/button/helpers/modifier-styles'
import COLORS from '../../../constants/colors-config'

export default styled(({ tag, ...props }) => <Button fit="icon" as={tag} {...props} />)`
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
