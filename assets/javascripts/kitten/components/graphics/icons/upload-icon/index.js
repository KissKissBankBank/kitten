import React from 'react'
import PropTypes from 'prop-types'

export const UploadIcon = ({ color, title, ...props }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M7 4.207v4H5v-4L3.172 6 1.757 4.62 6 0 10.243 4.62 8.828 6 7 4.207zM0 8h2v5H0zM10 8h2v5h-2zM0 11h12v2H0z" />
  </svg>
)

UploadIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

UploadIcon.defaultProps = {
  color: '#fff',
  title: '',
}
