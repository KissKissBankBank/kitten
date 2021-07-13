import React from 'react'
import PropTypes from 'prop-types'

export const ImageIcon = ({ color, title, ...props }) => (
  <svg
    width="22"
    height="14"
    viewBox="0 0 22 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M22 0v14H0V0h22zM2 11l5.5-6.545 5.036 5.993L15.5 7.455 20 12V2H2v9z"
      fill={color}
    />
  </svg>
)

ImageIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

ImageIcon.defaultProps = {
  color: '#222',
  title: '',
}
