import React from 'react'
import PropTypes from 'prop-types'

export const MenuIcon = ({ color, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M0 0 v20 h100 v-20 z" />
    <path d="M0 40 v20 h100 v-20 z" />
    <path d="M0 80 v20 h100 v-20 z" />
  </svg>
)

MenuIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

MenuIcon.defaultProps = {
  color: '#222',
  title: '',
}
