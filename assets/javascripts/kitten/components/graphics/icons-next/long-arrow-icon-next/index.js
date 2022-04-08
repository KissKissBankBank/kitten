import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'

export const LongArrowIconNext = ({ direction, color, ...others }) => {
  const transform = {
    right: 'rotate(-90deg)',
    left: 'rotate(90deg)',
    down: null,
    up: 'rotate(180deg)',
  }

  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 33"
      fill={color}
      style={{ transform: transform[direction] }}
    >
      <path d="m22.56 23.01-9.55 9.55a1.5 1.5 0 0 1-2.12 0l-9.54-9.55a1.5 1.5 0 1 1 2.12-2.12l6.98 6.99V1.5a1.5 1.5 0 1 1 3 0v26.38l6.99-6.99a1.5 1.5 0 0 1 2.12 2.12Z" />
    </svg>
  )
}

LongArrowIconNext.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
}

LongArrowIconNext.defaultProps = {
  direction: 'right',
  width: '23',
  height: '33',
  color: COLORS.font1,
}
