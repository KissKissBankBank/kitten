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
  stroke-dasharray: ${({ r }) => getDashLength(r)};
  stroke-dashoffset: ${({ r, progressValue }) =>
    getDashOffset({ r, progressValue })};
  transform: rotate(-90deg);
  transform-origin: ${({ cx, cy }) => `${pxToRem(cx)} ${pxToRem(cy)}`};
  animation: ${rotateAnimate} ${({ animationSpeed }) => animationSpeed}s ease-out;
  
  &.k-Meters__ProgressRing--orion {
    stroke-linecap: round;
  }  
`

export const ProgressRing = ({
  color,
  value,
  width,
  strokeWidth,
  variant,
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
        className={classNames(
          'k-Meters__ProgressRing',
          className,
          `k-Meters__ProgressRing--${variant}`,
        )}
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
  variant: 'andromeda',
  animationSpeed: 1.4,
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
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  animationSpeed: PropTypes.number,
}
