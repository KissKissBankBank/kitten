import React from 'react'
import PropTypes from 'prop-types'

export const ClockIcon = ({ color, bgColor, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 11"
    width="10"
    height="10"
    {...props}
  >
    {title && <title>{title}</title>}
    <circle cx="5.5" cy="5.5" r="5" fill={bgColor} stroke={color} />
    <path d="M6 5h1.5v1H5V2.5h1z" fill={color} />
  </svg>
)

ClockIcon.defaultProps = {
  bgColor: '#fff',
  color: '#333',
  title: '',
}

ClockIcon.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}
