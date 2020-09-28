import React from 'react'
import PropTypes from 'prop-types'

export const AlignCenterIcon = ({ color, title, ...props }) => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M12 8v2H3V8h9zm2-4v2H0V4h14zm-1-4v2H2V0h11z" fill={color} />
  </svg>
)

AlignCenterIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

AlignCenterIcon.defaultProps = {
  color: '#222',
  title: '',
}
