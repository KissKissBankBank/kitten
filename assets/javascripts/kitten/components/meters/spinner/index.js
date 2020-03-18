import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const valueMin = 0
const valueMax = 360

const rotate = keyframes`
  from {
    transform: rotate(${valueMin}deg);
  }
  to {
    transform: rotate(${valueMax}deg);
  }
`

const StyledSpinner = styled.div`
  max-width: 100%;
`

const StyledLoad = styled(
  ({ spinnerColor, sliderColor, progressValue, ...props }) => (
    <div {...props} />
  ),
)`
  position: relative;
  border: ${pxToRem(5)} solid #f3f3f3;
  border-radius: 50%;
  height: ${pxToRem(60)};
  width: ${pxToRem(60)};
  background-color: ${COLORS.background1};
  animation: ${rotate} 2s linear infinite;
  border-top: ${pxToRem(5)} solid ;

  // &::after {
  //   content: '';
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   position: absolute;
  //   max-width:${({ progressValue }) => progressValue};
  // }
`

export const Spinner = ({ color, value, rampProps, ...others }) => {
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
    <StyledSpinner
      {...others}
      role="progressbar"
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
      aria-valuenow={progressValue}
    >
      <StyledLoad
        {...rampProps}
        spinnerColor={color}
        progressValue={`${progressValue}%`}
      />
    </StyledSpinner>
  )
}

Spinner.defaultProps = {
  color: COLORS.primary1,
  value: 50,
  rampProps: {},
}

Spinner.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rampProps: PropTypes.object,
}
