import React from 'react'
import PropTypes from 'prop-types'

export const DownloadIcon = ({ color, title, ...props }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M7 4V0H5v4L3.172 2.207l-1.415 1.38L6 8.207l4.243-4.62-1.415-1.38L7 4zM0 8h2v5H0V8zm10 0h2v5h-2V8zM0 11h12v2H0v-2z" />
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
