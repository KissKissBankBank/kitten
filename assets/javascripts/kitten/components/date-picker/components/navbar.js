import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledArrowIcon = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;
  position: absolute;
  top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  ${({ left }) =>
    left &&
    css`
      left: -2px;

      &:hover {
        transform: translate(-${pxToRem(8)});
      }
    `}
  ${({ right }) =>
    right &&
    css`
      right: -2px;

      &:hover {
        transform: translate(${pxToRem(8)});
      }
    `}
`

export class Navbar extends Component {
  render() {
    const { onPreviousClick, onNextClick, className, iconColor } = this.props

    return (
      <div className={className}>
        <StyledArrowIcon onClick={() => onPreviousClick()} left>
          <ArrowIcon version="solid" fill={iconColor} direction="left" />
        </StyledArrowIcon>
        <StyledArrowIcon onClick={() => onNextClick()} right>
          <ArrowIcon version="solid" fill={iconColor} />
        </StyledArrowIcon>
      </div>
    )
  }
}
