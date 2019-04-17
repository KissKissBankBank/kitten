import React from 'react'
import PropTypes from 'prop-types'

export const GarbageIcon = ({ color, title, ...props }) => (
  <svg
    width="12"
    height="14"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 14"
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M4.3 0h3v2h-3zM0 2h12v1H0zm1 2l1 10h8l1-10H1zm3.5 8h-1V6h1v6zm2 0h-1V6h1v6zm2 0h-1V6h1v6z" />
  </svg>
)

GarbageIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

GarbageIcon.defaultProps = {
  color: '#fff',
  title: 'Garbage',
}
