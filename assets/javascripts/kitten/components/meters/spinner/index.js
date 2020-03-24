import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const valueMin = 0
const valueMax = 100

const rotateAnimate = keyframes`
  from {
    stroke-dashoffset: calc(283 * ${({ progressValue }) =>
      progressValue} / 100);
  }
  to {
    stroke-dashoffset: ${({ progressValue }) => progressValue};
  }
`

const StyledCircle = styled(({ progressColor, progressValue, ...props }) => (
  <circle {...props} />
))`
  fill: none;
  stroke-width: ${pxToRem(4)};
  stroke-linecap: square;
  stroke-dasharray: calc(283 * ${({ progressValue }) => progressValue} / 100);
  stroke-dashoffset: ${({ progressValue }) => progressValue};
  stroke: ${({ progressColor }) => progressColor};

  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${rotateAnimate} 3s ease-in-out;
`

const StyledCircleBackground = styled.circle`
  fill: none;
  stroke: ${COLORS.line1};
  stroke-width: ${pxToRem(4)};
`

export const SpinnerProgress = ({ color, value, rampProps, ...others }) => {
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    let progress = 0
    let valueAsNumber = parseInt(value, 10)

    if (valueAsNumber < valueMin) progress = valueMin
    else if (valueAsNumber > valueMax) progress = valueMax
    else progress = valueAsNumber

    setProgressValue(progress)
  }, [value])

  return (
    <div
      {...others}
      role="progressbar"
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
      aria-valuenow={progressValue}
    >
      <svg
        {...rampProps}
        width="70"
        height="70"
        viewBox="0 0 70 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledCircleBackground cx="35" cy="35" r="30" />
        <StyledCircle
          progressColor={color}
          progressValue={progressValue}
          cx="35"
          cy="35"
          r="30"
        />
      </svg>
    </div>
  )
}

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
