import React, { PureComponent } from 'react'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Header } from './components/header'
import { Content } from './components/content'
import { Footer } from './components/footer'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  border-width: ${borderWidth};
  border-style: solid;
  border-color: ${borderColor};
`

export class RewardEdition extends PureComponent {
  static Header = Header
  static Content = Content
  static Footer = Footer

  render() {
    return <StyledContainer>{this.props.children}</StyledContainer>
  }
}
