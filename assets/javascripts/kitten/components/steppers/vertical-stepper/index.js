import React, { Component } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { Step } from './components/step'

export class VerticalStepper extends Component {
  static Step = Step

  render() {
    const { children } = this.props

    return (
      <StyledNav>
        <StyledList role="tablist">{children}</StyledList>
      </StyledNav>
    )
  }
}

const StyledNav = styled.nav`
  position: relative;
  overflow: auto;
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  :before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${pxToRem(14)};
    z-index: -1;

    content: '';
    border-left: 2px dashed ${COLORS.line1};
  }
`
