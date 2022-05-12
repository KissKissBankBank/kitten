import React from 'react'
import PropTypes from 'prop-types'

export const UsersFilledIconNext = ({ color, title, ...props }) => (
  <svg
    width="28"
    height="27"
    viewBox="0 0 28 27"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M16.39 13.15c.86-.1 1.74-.16 2.61-.15 7 0 8.75 2.8 8.75 6.25 0 2.88-3.06 4.44-6.62 4.87.25-.76.37-1.57.37-2.37v-.2a9 9 0 0 0 2.4-.74c.72-.37 1.35-.8 1.35-1.56 0-.81-.1-1.58-.56-2.18-.81-1.08-2.45-1.53-5.24-1.57a8.6 8.6 0 0 0-3.06-2.35Zm-1-11.12a5 5 0 1 1 2.07 8.23 8.8 8.8 0 0 0 .28-2.6 2.5 2.5 0 1 0-.86-3.48 8.78 8.78 0 0 0-1.48-2.15ZM9 15.5c7 0 8.75 2.8 8.75 6.25s-4.38 5-8.75 5c-4.38 0-8.75-1.55-8.75-5S2 15.5 9 15.5ZM9 18c3.06 0 4.84.44 5.7 1.57.45.6.55 1.37.55 2.18 0 .76-.63 1.2-1.35 1.56-1.34.66-3.12.94-4.9.94-1.78 0-3.57-.28-4.9-.94-.72-.37-1.35-.8-1.35-1.56 0-.81.1-1.58.56-2.18C4.16 18.44 5.94 18 9 18ZM9 3a5 5 0 1 1 0 10A5 5 0 0 1 9 3Zm0 2.5a2.5 2.5 0 1 1 .11 5 2.5 2.5 0 0 1-.11-5Z"
      fill={color}
    />
  </svg>
)

UsersFilledIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

UsersFilledIconNext.defaultProps = {
  color: '#222',
  title: null,
}
