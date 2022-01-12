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
    <rect width="21.7" height="17.7" x="1.15" y="1.55" stroke={color} stroke-width="2.3" rx="3.85"/>
    <path stroke={color} stroke-width="2.3" d="M.923 6.671h22.154"/>
    <ellipse cx="6.462" cy="13.032" fill={color} stroke={color} stroke-width="2.3" rx=".923" ry="1.053"/>
  </svg>
)

BankCardIconNext.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  title: PropTypes.string,
}

BankCardIconNext.defaultProps = {
  color: '#222',
  title: null,
}
