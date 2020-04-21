import React from 'react'
import PropTypes from 'prop-types'

export const CheckedIcon = ({ color, title, ...other }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 8"
    fill={color}
    {...other}
  >
    {title && <title>{title}</title>}
    <path d="M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z" />
    <path d="M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z" />
  </svg>
)

CheckedIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

CheckedIcon.defaultProps = {
  color: '#fff',
  title: '',
}
