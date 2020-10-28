import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { computeFromRatio } from '../../../helpers/utils/ratio'
import deprecated from 'prop-types-extra/lib/deprecated'

const DEFAULT_WIDTH = 20
const DEFAULT_HEIGHT = 20

export const CheckedCircleIcon = ({
  circleColor,
  checkedColor,
  color,
  bgColor,
  title,
  width,
  height,
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
        fill={checkedColor || color}
        d="M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z"
      />
    </svg>
  )
}

CheckedCircleIcon.prototype = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  circleColor: deprecated(
    PropTypes.string,
    '`circleColor` is deprecated. Please use `bgColor` instead',
  ),
  checkedColor: deprecated(
    PropTypes.string,
    '`checkedColor` is deprecated. Please use `color` instead.',
  ),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

CheckedCircleIcon.defaultProps = {
  bgColor: COLORS.background1,
  color: COLORS.font1,
}

export const checkedCircleIconAsString = ({
  color,
  bgColor,
  circleColor,
  checkedColor,
}) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="${
    circleColor || bgColor
  }" cx="10" cy="10" r="10" /><path fill="${
    checkedColor || color
  }" d="M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z"/></svg>`
}
