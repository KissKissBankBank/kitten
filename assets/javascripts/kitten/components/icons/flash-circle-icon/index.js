import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { computeFromRatio } from '../../../helpers/utils/ratio'
import deprecated from 'prop-types-extra/lib/deprecated'

const DEFAULT_WIDTH = 20
const DEFAULT_HEIGHT = 20

export const FlashCircleIcon = ({
  bgColor,
  color,
  circleColor,
  flashColor,
  width,
  height,
  title,
  ...props
}) => {
  const computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height,
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={computed.width}
      height={computed.height}
      {...props}
    >
      {title && <title>{title}</title>}
      <circle fill={circleColor || bgColor} cx="10" cy="10" r="10" />
      <path
        d="m6 10 6-6-1.25 6h3.25l-6 6 1.25-6z"
        fill={flashColor || color}
        fillRule="evenodd"
      />
    </svg>
  )
}

FlashCircleIcon.prototype = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  circleColor: deprecated(
    PropTypes.string,
    '`circleColor` is deprecated. Please use `bgColor` instead.',
  ),
  flashColor: deprecated(
    PropTypes.string,
    '`flashColor` is deprecated. Please use `color` instead.',
  ),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

FlashCircleIcon.defaultProps = {
  bgColor: COLORS.background1,
  color: COLORS.font1,
}
