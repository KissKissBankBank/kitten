import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { Item } from './components/item'

export class IconList extends PureComponent {
  static Item = Item

  render = () => (
    <StyledNav>
      <StyledList role="tablist">{this.props.children}</StyledList>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: relative;
  padding: ${pxToRem(1)} 0;
`

const StyledList = styled.ul`
  margin: 0;
  padding: ${pxToRem(10)} 0;

  list-style: none;

  :before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${pxToRem(24)};
    z-index: -1;

    content: '';
    border-left: 2px dashed ${COLORS.line1};
  }
`
