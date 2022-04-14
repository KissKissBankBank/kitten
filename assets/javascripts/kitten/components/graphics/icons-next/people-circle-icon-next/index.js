import React from 'react'
import PropTypes from 'prop-types'

export const PeopleCircleIconNext = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="2"/>
    <path stroke={color} strokeLinecap="round" strokeWidth="2" d="M5 20c1.615-2.4 2.692-4 7-4s5.923 2.4 7 4"/>
    <circle cx="12" cy="9.5" r="3.5" stroke={color} strokeWidth="2"/>
  </svg>
)

PeopleCircleIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

PeopleCircleIconNext.defaultProps = {
  color: '#222',
  title: null,
}
