import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const valueMin = 0
const valueMax = 100

const StyledProgress = styled.div`
  max-width: 100%;

  .k-Meters-Progress__ramp {
    position: relative;
    height: ${pxToRem(2)};
    background: ${COLORS.line1};

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
    }
  }

  &.k-Meters-Progress--disabled,
  &.is-disabled {
    .k-Meters-Progress__ramp::after {
      background: ${COLORS.line2};
    }
  }

  &.k-Meters-Progress--orion .k-Meters-Progress__ramp {
    &,
    &::after {
      border-radius: ${pxToRem(3)};
    }
  }
`

export const Progress = ({
  color,
  className,
  value,
  rampProps,
  variant,
  disabled,
  ...others
}) => {
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
    <StyledProgress
      {...others}
      role="progressbar"
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
      aria-valuenow={progressValue}
      className={classNames(
        'k-Meters-Progress',
        className,
        `k-Meters-Progress--${variant}`,
        {
          'k-Meters-Progress--disabled': disabled,
        },
      )}
      sliderColor={color}
      progressValue={`${progressValue}%`}
    >
      <div
        {...rampProps}
        className={classNames('k-Meters-Progress__ramp', rampProps.className)}
      />
    </StyledProgress>
  )
}

Progress.defaultProps = {
  color: COLORS.primary1,
  value: 50,
  rampProps: {},
  variant: 'andromeda',
}

Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rampProps: PropTypes.object,
  variant: PropTypes.string,
}
