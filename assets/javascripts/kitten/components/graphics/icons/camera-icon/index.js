import React from 'react'
import PropTypes from 'prop-types'

export const CameraIcon = ({ color, title, ...props }) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M13 0l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3l2-3h6zm-3 5.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM16.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 1H8L7 3h6l-1-2z"
      fillRule="evenodd"
    />
  </svg>
)

CameraIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

CameraIcon.defaultProps = {
  color: '#222',
  title: '',
}
