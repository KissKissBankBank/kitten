import React from 'react'
import PropTypes from 'prop-types'

export const SilhouetteIconNext = ({ color, title, ...props }) => (
  <svg
    width="22"
    height="22"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    viewBox="0 0 70 70"
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      d="M22.24 17.68a11.85 11.85 0 1 0 23.7 0 11.85 11.85 0 0 0-23.7 0Zm16.4 0a4.56 4.56 0 1 1-9.1 0 4.56 4.56 0 0 1 9.1 0Z"
    />
    <path
      fill={color}
      d="M60.12 9.48a3.76 3.76 0 0 0-3.25 3.8A21.87 21.87 0 0 1 47 31.42a6.2 6.2 0 0 0-2.88 5.16v20.3h-16.4V39.14a6.88 6.88 0 0 0-11.18-5.39 29.11 29.11 0 0 0-10.7 22.56 3.64 3.64 0 0 0 4.05 3.64 3.76 3.76 0 0 0 3.25-3.79 21.8 21.8 0 0 1 7.29-16.12v16.82a7.3 7.3 0 0 0 7.29 7.3h16.4a7.3 7.3 0 0 0 7.3-7.3V37.22a29.17 29.17 0 0 0 12.76-24.1 3.65 3.65 0 0 0-4.05-3.64Z"
    />
  </svg>
)

SilhouetteIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

SilhouetteIconNext.defaultProps = {
  color: '#222',
  title: '',
}
