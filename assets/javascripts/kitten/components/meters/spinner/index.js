import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const circleRadius = 20
const dashLength = `calc(2 * 3.141592 * ${pxToRem(circleRadius)})`

const rotateAnimate = keyframes`
  from {
    stroke-dashoffset: ${dashLength};
  }
  to {
    stroke-dashoffset: calc(${dashLength} * ${({ progressValue }) =>
  100 - progressValue} / 100);
  }
`

const StyledCircle = styled(({ progressColor, progressValue, ...props }) => (
  <circle {...props} />
))`
  fill: transparent;
  stroke-width: ${pxToRem(4)};
  stroke-linecap: square;
  stroke-dasharray: ${dashLength};
  stroke-dashoffset: calc(
    ${dashLength} * ${({ progressValue }) => 100 - progressValue} / 100
  );
  stroke: ${({ progressColor }) => progressColor};

  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${rotateAnimate} 1.4s ease-out;
`

const StyledCircleBackground = styled.circle`
  fill: transparent;
  stroke: ${COLORS.line1};
  stroke-width: ${pxToRem(4)};
`

export const SpinnerProgress = ({
  color,
  value,
  width,
  height,
  rampProps,
  ...others
}) => {
  const circleX = `calc( ${width} / 2 )`
  const circleY = `calc( ${height} / 2 )`
  const circleRadius = `calc( ${circleX} - 5)`

  const viewBox = `0 0 ${width} ${height}`

  return (
    <svg
      {...rampProps}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircleBackground cx={circleX} cy={circleY} r={circleRadius} />
      <StyledCircle
        progressColor={color}
        progressValue={value}
        cx={circleX}
        cy={circleY}
        r={circleRadius}
      />
    </svg>
  )
}

SpinnerProgress.defaultProps = {
  color: COLORS.primary1,
  value: '',
  rampProps: {},
  width: 50,
  height: 50,
}

SpinnerProgress.PropTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rampProps: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
}
