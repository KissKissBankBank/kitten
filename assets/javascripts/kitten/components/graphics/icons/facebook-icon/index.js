import React from 'react'
import PropTypes from 'prop-types'

export const FacebookIcon = ({ color, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 15"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M4.785 14.196V7.72H6.96l.324-2.523h-2.5v-1.61c0-.732.204-1.23 1.252-1.23h1.336V.1C7.142.07 6.348 0 5.425 0 3.498 0 2.18 1.176 2.18 3.336v1.86H0v2.525h2.18v6.476h2.605z" />
  </svg>
)

FacebookIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

FacebookIcon.defaultProps = {
  color: '#222',
  title: '',
}
