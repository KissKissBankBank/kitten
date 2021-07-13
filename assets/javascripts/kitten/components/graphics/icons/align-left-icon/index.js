import React from 'react'
import PropTypes from 'prop-types'

export const AlignLeftIcon = ({ color, title, ...props }) => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}>
    <path d="M9 8v2H0V8h9zm5-4v2H0V4h14zm-3-4v2H0V0h11z" fill={color} />
  </svg>
)

AlignLeftIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

AlignLeftIcon.defaultProps = {
  color: '#222',
  title: '',
}
