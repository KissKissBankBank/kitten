import React, { Component } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { Step } from './components/step'
import { Title } from './components/title'
import { Link } from './components/link'
import { List } from './components/list'

export const STEP_CLASSNAME = 'VerticalStepper__step'
export const LINK_CLASSNAME = 'VerticalStepper__link'

export class VerticalStepper extends Component {
  static Step = Step
  static Title = Title
  static List = List
  static Link = Link

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
  padding: 1px 0;
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
