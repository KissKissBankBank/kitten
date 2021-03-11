import React from 'react'
import PropTypes from 'prop-types'

export const StatsIcon = ({ color, title, ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M18 16v2H0v-2h18zM3 8v6H0V8h3zm5-8v14H5V0h3zm5 5v9h-3V5h3zm5 5v4h-3v-4h3z"
      fill={color}
    />
  </svg>
)

StatsIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

StatsIcon.defaultProps = {
  color: '#222',
  title: '',
}
