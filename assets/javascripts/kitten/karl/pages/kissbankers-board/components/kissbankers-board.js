import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderBoard from './header-board'

const StyledContainer = styled.div`
  display: block;
  margin: 2em auto;
  flex: 1;
`

export class KissbankersBoard extends PureComponent {
  render() {
    return (
      <StyledContainer role="table" aria-label="">
        <HeaderBoard />
      </StyledContainer>
    )
  }
}
