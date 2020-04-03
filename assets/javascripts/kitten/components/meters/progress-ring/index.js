import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { RocketIcon } from '../../../components/icons/rocket-icon'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { ScreenConfig } from '../../../constants/screen-config'

const getDashLength = radius => `calc(2 * ${Math.PI} * ${pxToRem(radius)})`

const getDashOffset = ({ r, progressValue }) =>
  `calc(${getDashLength(r)} * ${100 - progressValue} / 100)`

const rotateAnimate = ({ r, progressValue }) => keyframes`
  from {
    stroke-dashoffset: ${getDashLength(r)};
  }
  to {
    stroke-dashoffset: ${getDashOffset({ r, progressValue })};
  }
`

const StyledCircle = styled(({ progressColor, progressValue, ...props }) => (
  <circle {...props} />
))`
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

const StyledCircleBackground = styled.circle`
  fill: transparent;
  stroke: ${COLORS.line1};
  stroke-width: ${({ strokeWidth }) => pxToRem(strokeWidth)};
`
const StyledOvertimeProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${pxToRem(50)};
  background-color: ${COLORS.valid};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }
`

const StyledSvgOvertime = styled(RocketIcon)`
  width: ${pxToRem(10)};
  height: ${pxToRem(12)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${pxToRem(12)};
    height: ${pxToRem(15)};
  }
`

const StyledCheckedCircleIcon = styled(CheckedCircleIcon)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }
`

const OvertimeProgress = () => (
  <StyledOvertimeProgress>
    <StyledSvgOvertime />
  </StyledOvertimeProgress>
)

const SuccessProgress = () => (
  <StyledCheckedCircleIcon
    circleColor={COLORS.valid}
    checkedColor={COLORS.background1}
  />
)

export const ProgressRing = ({
  color,
  value,
  width,
  strokeWidth,
  svgProps,
  overtimeProgress,
  successProgress,
  ...others
}) => {
  const circleX = width / 2
  const circleY = width / 2

  const radius = circleX - strokeWidth

  const viewBox = `0 0 ${width} ${width}`

  const progressValue = value < 100 ? value : 100

  return (
    <>
      {(overtimeProgress && <OvertimeProgress />) ||
        (successProgress && <SuccessProgress />)}

      {!overtimeProgress && !successProgress && (
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
            progressValue={progressValue}
            cx={circleX}
            cy={circleY}
            r={radius}
            strokeWidth={strokeWidth}
          />
        </svg>
      )}
    </>
  )
}

ProgressRing.defaultProps = {
  color: COLORS.primary1,
  value: '',
  svgProps: {},
  width: 50,
  radius: null,
  strokeWidth: 5,
  overtimeProgress: false,
  successProgress: false,
}

ProgressRing.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  svgProps: PropTypes.object,
  width: PropTypes.number,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  overtimeProgress: PropTypes.bool,
  successProgress: PropTypes.bool,
}
