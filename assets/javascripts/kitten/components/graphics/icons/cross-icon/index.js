import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { computeFromRatio } from '../../../../helpers/utils/ratio'

const DEFAULT_WIDTH = 8
const DEFAULT_HEIGHT = 8

export const CrossIcon = ({ color, title, width, height, size, ...props }) => {
  const computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height,
  })

  if (size === 'big') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 7L17 17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 7L7 17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  else if (size === 'big') {
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
  return (
    <svg 
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd" 
        d="M12.693 4.707a1 1 0 0 0-1.415 0L8.485 7.5 5.692 4.707a1 1 0 1 0-1.414 1.414l2.793 2.793-2.864 2.864a1 1 0 1 0 1.414 1.414l2.864-2.864 2.864 2.864a1 1 0 0 0 1.415-1.414L9.9 8.914l2.793-2.793a1 1 0 0 0 0-1.414Z"
      />
      </svg>
  )
}

CrossIcon.prototype = {
  color: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOf(['normal', 'big']),
}

CrossIcon.defaultProps = {
  color: COLORS.font1,
  size: 'normal',
}
