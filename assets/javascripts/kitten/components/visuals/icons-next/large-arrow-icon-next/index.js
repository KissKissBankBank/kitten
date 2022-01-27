import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'

export const LargeArrowIconNext = ({ direction, color, title, ...others }) => {
  const transform = {
    right: 'rotate(90deg)',
    left: 'rotate(-90deg)',
    down: 'rotate(180deg)',
    up: null,
  }

  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 20"
      fill={color}
      style={{ transform: transform[direction] }}
    >
      {title && <title>{title}</title>}
      <path d="m6.3806 0 2.357 2.357 3.536 3.536c.651.65.651 1.706 0 2.357-.651.65-1.706.651-2.357 0l-1.869-1.869v11.952c0 .921-.746 1.667-1.667 1.667-.92 0-1.666-.746-1.666-1.667V6.381L2.8456 8.25c-.651.651-1.706.651-2.357 0-.651-.651-.651-1.707 0-2.357l3.535-3.536L6.3806 0Z" />
    </svg>
  )
}

LargeArrowIconNext.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  title: PropTypes.string,
}

LargeArrowIconNext.defaultProps = {
  direction: 'right',
  className: '',
  width: '13',
  height: '20',
  color: COLORS.font1,
  title: '',
}
