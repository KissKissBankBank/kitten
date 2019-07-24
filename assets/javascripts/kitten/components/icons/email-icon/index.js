import React from 'react'
import PropTypes from 'prop-types'

export const EmailIcon = ({ color, title, ...props }) => (
  <svg
    width="19"
    height="12"
    viewBox="0 0 19 12"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M9.5 8l9-6v10H.5V2l9 6zm0-2l-9-6h18l-9 6z" />
  </svg>
)

EmailIcon.PropTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

EmailIcon.defaultProps = {
  color: '#222',
  title: 'Email',
}
