import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const getDashLength = radius => `calc(2 * ${Math.PI} * ${pxToRem(radius)})`

const rotateAnimate = ({ r }) => keyframes`
  from {
    stroke-dashoffset: ${getDashLength(r)};
  }
  to {
    stroke-dashoffset: calc(${getDashLength(r)} * ${({ progressValue }) =>
  100 - progressValue} / 100);
  }
`

const StyledCircle = styled(({ progressColor, progressValue, ...props }) => (
  <circle {...props} />
))`
  fill: transparent;
  stroke-width: ${({ strokeWidth }) => pxToRem(strokeWidth)};
  stroke-linecap: butt;
  stroke-dasharray: ${({ r }) => getDashLength(r)};
  stroke-dashoffset: calc(
    ${({ r }) => getDashLength(r)} *
      ${({ progressValue }) => 100 - progressValue} / 100
  );
  stroke: ${({ progressColor }) => progressColor};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${rotateAnimate} 1.4s ease-out;
`

const StyledCircleBackground = styled.circle`
  fill: transparent;
  stroke: ${COLORS.line1};
  stroke-width: ${({ strokeWidth }) => pxToRem(strokeWidth)};
`

export const Spinner = ({
  color,
  value,
  width,
  strokeWidth,
  svgProps,
  ...others
}) => {
  const circleX = width / 2
  const circleY = width / 2

  const radius = circleX - 5

  const viewBox = `0 0 ${width} ${width}`

  return (
    <svg
      {...svgProps}
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
        progressValue={value}
        cx={circleX}
        cy={circleY}
        r={radius}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

Spinner.defaultProps = {
  color: COLORS.primary1,
  value: '',
  svgProps: {},
  width: 50,
  radius: null,
  strokeWidth: 5,
}

Spinner.PropTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  svgProps: PropTypes.object,
  width: PropTypes.number,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
}
