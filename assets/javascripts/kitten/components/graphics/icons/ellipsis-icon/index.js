import React from 'react'
import PropTypes from 'prop-types'

export const EllipsisIcon = ({ color, title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 4"
      width="16"
      height="4"
      fill="none"
      {...props}
    >
      {title && <title>{title}</title>}
      <circle cx="2" cy="2" r="2" fill={color} />
      <circle cx="8" cy="2" r="2" fill={color} />
      <circle cx="14" cy="2" r="2" fill={color} />
    </svg>
  )
}

EllipsisIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

EllipsisIcon.defaultProps = {
  color: '#222',
  title: '',
}
