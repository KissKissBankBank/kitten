import React from 'react'
import PropTypes from 'prop-types'

export const SunIconNext = ({ color, title, ...props }) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      d="M22.358 8.63l2.389-2.406a1.394 1.394 0 00-1.971-1.971L20.37 6.642a9.757 9.757 0 00-4.467-1.871V1.403a1.403 1.403 0 00-2.806 0V4.79A9.757 9.757 0 008.63 6.66L6.22 4.256a1.39 1.39 0 00-1.965 1.966l2.41 2.409a9.757 9.757 0 00-1.872 4.467h-3.39a1.403 1.403 0 100 2.806H4.79a9.757 9.757 0 001.87 4.467L4.256 22.78a1.39 1.39 0 001.966 1.965l2.409-2.41a9.757 9.757 0 004.467 1.872v3.39a1.403 1.403 0 102.806 0V24.21a9.757 9.757 0 004.467-1.87l2.407 2.403a1.392 1.392 0 001.971-1.966l-2.39-2.407a9.757 9.757 0 001.871-4.467h3.368a1.403 1.403 0 000-2.806H24.21a9.758 9.758 0 00-1.852-4.467zM14.5 21.516a7.016 7.016 0 110-14.033 7.016 7.016 0 010 14.033z"
    />
  </svg>
)

SunIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

SunIconNext.defaultProps = {
  color: '#222',
  title: null,
}
