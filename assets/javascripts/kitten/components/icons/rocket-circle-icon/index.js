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
  width: ${({ circleWidthMobile }) => pxToRem(circleWidthMobile)};
  height: ${({ circleWidthMobile }) => pxToRem(circleWidthMobile)};
  border-radius: ${pxToRem(100)};
  background-color: ${({ circleColor }) => circleColor};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${({ circleWidth }) => pxToRem(circleWidth)};
    height: ${({ circleWidth }) => pxToRem(circleWidth)};
  }
`
const StyledRocketIcon = styled(RocketIcon)`
  width: ${({ rocketWidthMobile }) => pxToRem(rocketWidthMobile)};
  height: ${({ rocketHeightMobile }) => pxToRem(rocketHeightMobile)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${({ rocketWidth }) => pxToRem(rocketWidth)};
    height: ${({ rocketHeight }) => pxToRem(rocketHeight)};
  }
`

export const RocketCircleIcon = ({
  circleColor,
  circleWidth,
  circleWidthMobile,
  rocketWidth,
  rocketWidthMobile,
  rocketHeight,
  rocketHeightMobile,
  rocketColor,
  ...others
}) => (
  <StyledRocketCircle
    circleWidth={circleWidth}
    circleWidthMobile={circleWidthMobile}
    circleColor={circleColor}
    {...others}
  >
    <StyledRocketIcon
      rocketWidth={rocketWidth}
      rocketHeight={rocketHeight}
      rocketHeightMobile={rocketHeightMobile}
      rocketWidthMobile={rocketWidthMobile}
      rocketColor={rocketColor}
    />
  </StyledRocketCircle>
)

RocketCircleIcon.defaultProps = {
  circleWidth: 24,
  circleWidthMobile: 20,
  circleColor: COLORS.valid,
  rocketWidth: 12,
  rocketHeight: 15,
  rocketWidthMobile: 10,
  rocketHeightMobile: 12,
}

RocketCircleIcon.propTypes = {
  circlewidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circlewidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circleColor: PropTypes.string,
  rocketWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketWidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeightMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
