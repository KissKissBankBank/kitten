import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { RocketIcon } from '../rocket-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledRocketCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${pxToRem(50)};
  background-color: ${({ circleColor }) => circleColor};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }
`
const StyledRocketIcon = styled(RocketIcon)`
  width: ${pxToRem(10)};
  height: ${pxToRem(12)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${pxToRem(12)};
    height: ${pxToRem(15)};
  }
`

export const RocketCircleIcon = ({
  circleColor,
  circleWidth,
  rocketWidth,
  rocketHeight,
  rocketColor,
  ...others
}) => (
  <StyledRocketCircle
    circleWidth={circleWidth}
    circleColor={circleColor}
    {...others}
  >
    <RocketIcon
      rocketWidth={rocketWidth}
      rocketHeight={rocketHeight}
      rocketColor={rocketColor}
    />
  </StyledRocketCircle>
)

RocketCircleIcon.defaultProps = {
  circlewidth: 20,
  circleColor: COLORS.valid,
  iconWidth: 12,
  iconHeight: 15,
}

RocketCircleIcon.propTypes = {
  circlewidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circleColor: PropTypes.string,
  iconWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
