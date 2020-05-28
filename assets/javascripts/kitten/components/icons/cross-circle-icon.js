import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../constants/colors-config'
import { computeFromRatio } from '../../helpers/utils/ratio'

export const CrossCircleIcon = ({
  circleColor,
  crossColor,
  width,
  height,
  title,
  ...props
}) => {
  const DEFAULT_WIDTH = 20
  const DEFAULT_HEIGHT = 20

  const computed = computeFromRatio({
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
      <circle fill={circleColor} cx="10" cy="10" r="10" />
      <path
        fill={crossColor}
        d="M11.414 10l2.122-2.12-1.415-1.416L10 8.586 7.88 6.464 6.463 7.88 8.586 10l-2.122 2.12 1.415 1.416L10 11.414l2.12 2.122 1.416-1.415L11.414 10z"
      />
    </svg>
  )
}

CrossCircleIcon.prototype = {
  circleColor: PropTypes.string,
  crossColor: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

CrossCircleIcon.defaultProps = {
  circleColor: COLORS.background1,
  crossColor: COLORS.font1,
}
