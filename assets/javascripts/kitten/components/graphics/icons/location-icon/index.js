import React from 'react'
import PropTypes from 'prop-types'

export const LocationIcon = ({ color, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 15"
    fill="#222"
    width="12"
    height="15"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M6 0C2.686 0 0 2.72 0 6.033 0 7.69.672 9.186 1.758 10.31L6 14.313l4.282-4.094v-.008A6.003 6.003 0 0 0 6 0zm.04 8.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z" />
  </svg>
)

LocationIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

LocationIcon.defaultProps = {
  color: '#222',
  title: '',
}
