import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { RocketIcon } from '../rocket-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledRocketCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ circleWidthMobile }) => pxToRem(circleWidthMobile)};
  height: ${({ circleWidthMobile }) => pxToRem(circleWidthMobile)};
  border-radius: 100%;
  background-color: ${({ bgColor }) => bgColor};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${({ circleWidth }) => pxToRem(circleWidth)};
    height: ${({ circleWidth }) => pxToRem(circleWidth)};
  }

  .k-RocketCircleIcon__rocketIcon {
    padding-right: ${pxToRem(2)};
    padding-top: ${pxToRem(1)};
    width: ${({ rocketWidthMobile }) => pxToRem(rocketWidthMobile)};
    height: ${({ rocketHeightMobile }) => pxToRem(rocketHeightMobile)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: ${({ rocketWidth }) => pxToRem(rocketWidth)};
      height: ${({ rocketHeight }) => pxToRem(rocketHeight)};
    }
  }
`

export const RocketCircleIcon = ({
  color,
  bgColor,
  circleColor,
  circleWidth,
  circleWidthMobile,
  rocketWidth,
  rocketWidthMobile,
  rocketHeight,
  rocketHeightMobile,
  rocketColor,
  rocketTitle,
  ...others
}) => (
  <StyledRocketCircle
    circleWidth={circleWidth}
    circleWidthMobile={circleWidthMobile}
    bgColor={circleColor || bgColor}
    rocketWidth={rocketWidth}
    rocketHeight={rocketHeight}
    rocketHeightMobile={rocketHeightMobile}
    rocketWidthMobile={rocketWidthMobile}
    {...others}
  >
    <RocketIcon
      color={color}
      title={rocketTitle}
      className="k-RocketCircleIcon__rocketIcon"
    />
  </StyledRocketCircle>
)

RocketCircleIcon.defaultProps = {
  bgColor: COLORS.valid,
  circleWidth: 24,
  circleWidthMobile: 20,
  color: COLORS.background1,
  rocketHeight: 15,
  rocketHeightMobile: 12,
  rocketTitle: '',
  rocketWidth: 12,
  rocketWidthMobile: 10,
}

RocketCircleIcon.propTypes = {
  circlewidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circlewidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circleColor: deprecated(
    PropTypes.string,
    '`circleColor` is deprecated. Please use `bgColor` instead.',
  ),
  bgColor: PropTypes.string,
  rocketWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketWidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeightMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketTitle: PropTypes.string,
  rocketColor: deprecated(
    PropTypes.string,
    '`rocketColor` is deprecated. Please use `color` instead.',
  ),
  color: PropTypes.string,
}
