import React from 'react'
import PropTypes from 'prop-types'

export const GrabberIcon = ({ color, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="32"
    height="32"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M0 0 v100 h20 v-100 z" />
    <path d="M40 0 v100 h20 v-100 z" />
    <path d="M80 0 v100 h20 v-100 z" />
  </svg>
)

GrabberIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

GrabberIcon.defaultProps = {
  color: '#222',
  title: '',
}

// DEPRECATED: do not use default export.
export default GrabberIcon
