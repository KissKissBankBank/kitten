import React from 'react'
import PropTypes from 'prop-types'

export const BankCardIconNext = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="21"
    viewBox="0 0 24 21"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill={color} fill-rule="evenodd" d="M19 2.7H5a2.7 2.7 0 00-2.7 2.7v10A2.7 2.7 0 005 18.1h14a2.7 2.7 0 002.7-2.7v-10A2.7 2.7 0 0019 2.7zM5 .4a5 5 0 00-5 5v10a5 5 0 005 5h14a5 5 0 005-5v-10a5 5 0 00-5-5H5z" clip-rule="evenodd"/>
    <path fill={color} fill-rule="evenodd" d="M23.077 7.821H.923v-2.3h22.154v2.3z" clip-rule="evenodd"/>
    <path fill={color} d="M8 13a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>
)

BankCardIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

BankCardIconNext.defaultProps = {
  color: '#222',
  title: null,
}
