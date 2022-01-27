import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { computeFromRatio } from '../../../../helpers/utils/ratio'
import deprecated from 'prop-types-extra/lib/deprecated'
import classNames from 'classnames'

const DEFAULT_WIDTH = 20
const DEFAULT_HEIGHT = 20

export const CrossCircleIcon = ({
  color,
  bgColor,
  circleColor,
  crossColor,
  width,
  height,
  title,
  className,
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
      className={classNames('k-ColorSvg', className)}
      {...props}
    >
      {title && <title>{title}</title>}
      <circle fill={bgColor || circleColor} cx="10" cy="10" r="10" />
      <path
        fill={color || crossColor}
        d="M11.414 10l2.122-2.12-1.415-1.416L10 8.586 7.88 6.464 6.463 7.88 8.586 10l-2.122 2.12 1.415 1.416L10 11.414l2.12 2.122 1.416-1.415L11.414 10z"
      />
    </svg>
  )
}

CrossCircleIcon.prototype = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  circleColor: deprecated(
    PropTypes.string,
    '`circleColor` is deprecated. Please use `bgColor` instead.',
  ),
  crossColor: deprecated(
    PropTypes.string,
    '`crossColor` is deprecated. Please use `color` instead.',
  ),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

CrossCircleIcon.defaultProps = {
  bgColor: COLORS.background1,
  color: COLORS.font1,
}
