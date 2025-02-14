import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const getDashLength = radius => 2 * Math.PI * radius

const getDashOffset = ({ r, progressValue }) =>
  (getDashLength(r) * (100 - progressValue)) / 100

const rotateAnimate = ({ r, progressValue }) => keyframes`
  from {
    stroke-dashoffset: ${getDashLength(r)};
  }
  to {
    stroke-dashoffset: ${getDashOffset({ r, progressValue })};
  }
`

const StyledMeterCircle = styled.circle`
  stroke-linecap: butt;
  stroke-linecap: round;
  stroke-dasharray: ${({ r }) => getDashLength(r)};
  stroke-dashoffset: ${({ r, progressValue }) =>
    getDashOffset({ r, progressValue })};
  transform: rotate(-90deg);
  transform-origin: ${({ cx, cy }) => `${pxToRem(cx)} ${pxToRem(cy)}`};
  animation: ${rotateAnimate} ${({ animationSpeed }) => animationSpeed}s
    ease-out;
`

export const ProgressRing = ({
  color,
  value,
  width,
  strokeWidth,
  className,
  animationSpeed,
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
      <circle
        cx={circleX}
        cy={circleY}
        r={radius}
        strokeWidth={strokeWidth}
        fill="transparent"
        stroke={COLORS.line1}
      />
      <StyledMeterCircle
        cx={circleX}
        cy={circleY}
        r={radius}
        strokeWidth={strokeWidth}
        animationSpeed={animationSpeed}
        fill="transparent"
        stroke={color}
        progressValue={progressValue}
        className={classNames('k-Meters__ProgressRing', className)}
      />
    </svg>
  )
}

ProgressRing.defaultProps = {
  color: COLORS.primary1,
  value: 0,
  width: 50,
  strokeWidth: 5,
  animationSpeed: 1.4,
}

ProgressRing.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animationSpeed: PropTypes.number,
}
