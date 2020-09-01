import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { computeFromRatio } from '../../../helpers/utils/ratio'

const DEFAULT_WIDTH = 8
const DEFAULT_HEIGHT = 8

export const CrossIcon = ({ color, title, width, height, ...props }) => {
  const computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height,
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      width={computed.width}
      height={computed.height}
      fill={color}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M.464 6.12L6.12.465 7.537 1.88 1.88 7.535z" />
      <path d="M1.88.464L7.535 6.12 6.12 7.537.465 1.88z" />
    </svg>
  )
}

CrossIcon.prototype = {
  color: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

CrossIcon.defaultProps = {
  color: COLORS.font1,
}
