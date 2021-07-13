import React from 'react'
import PropTypes from 'prop-types'

export const CheckedIcon = ({ color, title, ...other }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 8"
    width="11"
    height="8"
    fill={color}
    {...other}
  >
    {title && <title>{title}</title>}
    <path d="M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z" />
  </svg>
)

CheckedIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

CheckedIcon.defaultProps = {
  color: '#fff',
  title: '',
}
