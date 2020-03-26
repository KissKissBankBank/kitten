import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const circleRadius = 30
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
  animation: ${rotateAnimate} 3s ease-out;
`

const StyledCircleBackground = styled.circle`
  fill: transparent;
  stroke: ${COLORS.line1};
  stroke-width: ${pxToRem(4)};
`

export const SpinnerProgress = ({ color, value, rampProps, ...others }) => (
  <svg
    {...rampProps}
    width="70"
    height="70"
    viewBox="0 0 70 70"
    xmlns="http://www.w3.org/2000/svg"
  >
    <StyledCircleBackground cx="35" cy="35" r={circleRadius} />
    <StyledCircle
      progressColor={color}
      progressValue={value}
      cx="35"
      cy="35"
      r={circleRadius}
    />
  </svg>
)

SpinnerProgress.defaultProps = {
  color: COLORS.primary1,
  value: '',
  rampProps: {},
}

SpinnerProgress.PropTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rampProps: PropTypes.object,
}
