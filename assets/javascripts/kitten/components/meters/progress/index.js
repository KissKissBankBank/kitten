import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledProgress = styled.div`
  max-width: 100%;
`

const StyledRamp = styled(({ style, sliderColor, progressValue, ...props }) => (
  <div {...props} />
))`
  position: relative;
  height: ${pxToRem(2)};
  background: ${COLORS.line1};
  ${({ style }) => style}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: ${({ progressValue }) => progressValue};
    transition: max-width 1s cubic-bezier(0, 0.5, 0.3, 1);
    background: ${({ sliderColor }) => sliderColor};

    ${StyledProgress}.is-disabled & {
      background: ${COLORS.line2};
    }
  }
`

export const Progress = ({ color, value, rampProps, ...others }) => {
  const valueMax = 100
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    setProgressValue(value > valueMax ? valueMax : value)
  }, [])

  return (
    <StyledProgress
      {...others}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={valueMax}
      aria-valuenow={progressValue}
    >
      <StyledRamp
        {...rampProps}
        sliderColor={color}
        progressValue={`${progressValue}%`}
      />
    </StyledProgress>
  )
}

Progress.defaultProps = {
  color: COLORS.primary1,
  value: 50,
  rampProps: {},
}

Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number,
  rampProps: PropTypes.object,
}
