import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../../components/buttons/button/button'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const borderRadius = pxToRem(4)

const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledButton = styled(Button)`
  flex: 1;
  z-index: 0;

  &:not(:last-child) {
    margin-right: -${pxToRem(2)};
  }

  &:first-child {
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  }

  &:last-child {
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }

  :active,
  :hover,
  :focus {
    border-radius: ${borderRadius};
    z-index: 1;
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
