import React from 'react'
import PropTypes from 'prop-types'

export const EditIcon = ({ color, title, ...props }) => (
  <svg
    width="11"
    height="16"
    viewBox="0 0 11 16"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M8.482 6.469l-4.909 8.503-2.823.89-.641-2.89 4.909-8.503 3.464 2zm2.5-4.33l-1.5 2.598-3.464-2 1.5-2.598 3.464 2z" />
  </svg>
)

EditIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

EditIcon.defaultProps = {
  color: '#fff',
  title: 'Email',
}
