import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Image from './components/image'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledContainer = styled.div`
  position: relative;
  padding-bottom: ${pxToRem(5)};
`

export class CrowdfundingCard extends PureComponent {
  removeCurrentFocus = () => {
    document.activeElement.blur()
  }

  render() {
    const { href, ...others } = this.props

    return (
      <StyledContainer
        as={href ? 'a' : 'div'}
        onClick={this.removeCurrentFocus}
        {...others}
      >
        <Image />
      </StyledContainer>
    )
  }
}
