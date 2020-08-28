import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'

export const DoubleArrowIcon = ({ color, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.48 15"
      height="15"
      width="8.48"
      {...props}
    >
      <path
        fill={color}
        d="M0 4.24 L4.24 0 L8.48 4.24 L7.08 5.60 L4.24 2.77 L1.4 5.6 z"
      />
      <path
        fill={color}
        d="M0 10.76 L4.24 15 L8.48 10.76 L7.08 9.4 L4.24 12.33 L1.4 9.4 z"
      />
    </svg>
  )
}

DoubleArrowIcon.defaultProps = {
  color: COLORS.font1,
}

DoubleArrowIcon.propTypes = {
  color: PropTypes.string,
}
