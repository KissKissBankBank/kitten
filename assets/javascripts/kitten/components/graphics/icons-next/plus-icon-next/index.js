import React from 'react'
import PropTypes from 'prop-types'

export const PlusIconNext = ({ color, title, ...props }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M5 1v10a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0Z" fill={color}/>
    <path d="M11 4.75H1a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" fill={color}/>
  </svg>
)

PlusIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

PlusIconNext.defaultProps = {
  color: '#222',
  title: null,
}
