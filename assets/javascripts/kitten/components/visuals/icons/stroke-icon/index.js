import React from 'react'
import PropTypes from 'prop-types'

export const StrokeIcon = ({ color, title, ...props }) => (
  <svg
    width="8"
    height="2"
    viewBox="0 0 8 2"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill={color} d="M0 0h8v2H0z" />
  </svg>
)

StrokeIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

StrokeIcon.defaultProps = {
  color: '#fff',
  title: '',
}
