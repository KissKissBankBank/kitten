import React from 'react'
import PropTypes from 'prop-types'

export const FacebookIconNext = ({ color, title, ...props }) => (
  <svg
    width="13"
    height="26"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 26"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M8.445 26V14.16h3.85l.573-4.636H8.445V6.57c0-1.338.36-2.254 2.21-2.254H13V.184A29.988 29.988 0 0 0 9.565 0c-3.403 0-5.74 2.156-5.74 6.113v3.402H0v4.636h3.833V26h4.612Z"
      fill={color}
    />
  </svg>
)

FacebookIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

FacebookIconNext.defaultProps = {
  color: '#fff',
  title: null,
}
