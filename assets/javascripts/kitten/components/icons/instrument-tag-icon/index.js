import React from 'react'
import PropTypes from 'prop-types'

export const InstrumentTagIcon = ({ color, title, ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 9 11"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <polygon points="9,11 0,11 0,0 5,0 5,4 9,4" />
    <polygon points="9,3 6,3 6,0" />
  </svg>
)

InstrumentTagIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

InstrumentTagIcon.defaultProps = {
  color: '#333',
  title: '',
}
