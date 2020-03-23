import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const rotateAnimate = keyframes`
  from {
    stroke-dashoffset: 157;
  }
  to {
    stroke-dashoffset: 100;
  }
`

const StyleSvg = styled.svg`
  width: 70px;
  height: 70px;
`

const StyledCircle = styled.circle`
  fill: none;
  stroke-width: 4px;
  stroke-linecap: square;
  stroke-dasharray: 157;
  stroke-dashoffset: 100;
  stroke: #19b4fa;

  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${rotateAnimate} 3s ease-in-out;
`

const StyledCircleBackground = styled.circle`
  fill: none;
  stroke: #eee;
  stroke-width: 4px;
`

export const SpinnerLoader = ({ percentage }) => {
  return (
    <div>
      <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <StyledCircleBackground cx="35" cy="35" r="30" />
        <StyledCircle cx="35" cy="35" r="30" />
      </svg>
    </div>
  )
}
