import React from 'react'
import PropTypes from 'prop-types'

export const WaitingIcon = ({ color, title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 3"
      width="13"
      height="3"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M5 0h3v3H5V0zM0 0h3v3H0V0zm10 0h3v3h-3V0z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  )
}

WaitingIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

WaitingIcon.defaultProps = {
  color: '#fff',
  title: '',
}
