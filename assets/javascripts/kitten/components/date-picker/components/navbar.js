import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

const StyledArrowIcon = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;
  position: absolute;
  top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ left }) =>
    left &&
    css`
      left: -2px;
    `}
  ${({ right }) =>
    right &&
    css`
      right: -2px;
    `}
`

export class Navbar extends Component {
  render() {
    const { onPreviousClick, onNextClick, className } = this.props

    return (
      <div className={className}>
        <StyledArrowIcon onClick={() => onPreviousClick()} left>
          <ArrowIcon version="solid" fill="#fff" direction="left" />
        </StyledArrowIcon>
        <StyledArrowIcon onClick={() => onNextClick()} right>
          <ArrowIcon version="solid" fill="#fff" />
        </StyledArrowIcon>
      </div>
    )
  }
}
