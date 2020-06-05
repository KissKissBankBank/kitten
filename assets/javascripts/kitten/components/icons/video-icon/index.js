import React from 'react'
import PropTypes from 'prop-types'

export const VideoIcon = ({ color, title, ...props }) => (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M17 0a5 5 0 015 5v6a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5h12zM9 5v6l6-3-6-3z"
      fill={color}
    />
  </svg>
)

VideoIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

VideoIcon.defaultProps = {
  color: '#222',
  title: '',
}
