import React from 'react'
import PropTypes from 'prop-types'

export const DownloadIcon = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 12.586V4h-2v8.586l-2.293-2.293-1.414 1.414L12 16.414l4.707-4.707-1.414-1.414L13 12.586ZM2 19v-4h2v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z"
      fill="#222"
    />
  </svg>
)

DownloadIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

DownloadIcon.defaultProps = {
  color: '#fff',
  title: '',
}
