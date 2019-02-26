import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledArrowIcon = styled.div`
  width: ${pxToRem(70)};
  height: ${pxToRem(70)};
  cursor: pointer;
  position: absolute;
  top: -${pxToRem(2)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  ${({ left }) =>
    left &&
    css`
      left: -${pxToRem(2)};

      &:hover {
        transform: translate(-${pxToRem(8)});
      }
    `}
  ${({ right }) =>
    right &&
    css`
      right: -${pxToRem(2)};

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
