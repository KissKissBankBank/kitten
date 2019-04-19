import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../../components/buttons/button/button'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledButtonGroup = styled.div`
  border-radius: ${pxToRem(4)};
  border-style: solid;
  border-width: ${borderWidth};
  border-color: ${borderColor};
`

const StyledButton = styled(Button)`
  &:first-child {
    border-right-style: solid;
    border-right-width: ${borderWidth};
    border-right-color: ${borderColor};
  }

  &:last-child {
    border-left-style: solid;
    border-left-width: ${borderWidth};
    border-left-color: ${borderColor};
  }
`

export class ButtonGroup extends Component {
  render() {
    return (
      <StyledButtonGroup role="group">
        <StyledButton>Button1</StyledButton>
        <StyledButton>Button2</StyledButton>
        <StyledButton>Button3</StyledButton>
      </StyledButtonGroup>
    )
  }
}
