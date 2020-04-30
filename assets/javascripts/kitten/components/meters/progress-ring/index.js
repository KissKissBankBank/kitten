import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const getDashLength = radius => 2 * Math.PI * radius

const getDashOffset = ({ r, progressValue }) => (
  getDashLength(r) * (100 - progressValue) / 100
)

const rotateAnimate = ({ r, progressValue }) => keyframes`
  from {
    stroke-dashoffset: ${getDashLength(r)};
  }
  to {
    stroke-dashoffset: ${getDashOffset({ r, progressValue })};
  }
`

const StyledCircleBackground = styled.circle`
  fill: transparent;
  stroke: ${COLORS.line1};
  stroke-width: ${({ strokeWidth }) => pxToRem(strokeWidth)};
`

const StyledCircle = styled.circle`
  fill: transparent;
  stroke-width: ${({ strokeWidth }) => pxToRem(strokeWidth)};
  stroke-linecap: butt;
  stroke-dasharray: ${({ r }) => getDashLength(r)};
  stroke-dashoffset: ${({ r, progressValue }) =>
    getDashOffset({ r, progressValue })};
  stroke: ${({ progressColor }) => progressColor};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${rotateAnimate} 1.4s ease-out;
`

export const ProgressRing = ({
  color,
  value,
  width,
  strokeWidth,
  ...others
}) => {
  const circleX = width / 2
  const circleY = width / 2

  const radius = circleX - strokeWidth

  const viewBox = `0 0 ${width} ${width}`

  const progressValue = value < 100 ? value : 100

  return (
    <svg
      {...others}
      width={width}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircleBackground
        cx={circleX}
        cy={circleY}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <StyledCircle
        progressColor={color}
        progressValue={progressValue}
        cx={circleX}
        cy={circleY}
        r={radius}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

ProgressRing.defaultProps = {
  color: COLORS.primary1,
  value: '',
  width: 50,
  radius: null,
  strokeWidth: 5,
}

ProgressRing.propTypes = {
  /**
    ProgressRing color
  */
  color: PropTypes.string,
  /**
    Percentage of progress %
  */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
    Width of ProgressRing
  */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
    Radius value of ProgressRing
  */
  radius: PropTypes.number,
   /**
    Width of circle (stroke)
  */
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
