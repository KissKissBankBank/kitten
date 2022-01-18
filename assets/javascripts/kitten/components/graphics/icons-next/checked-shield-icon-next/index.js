import React from 'react'
import PropTypes from 'prop-types'

export const CheckedShieldIconNext = ({ color, title, ...props }) => (
  <svg
    width="21"
    height="25"
    viewBox="0 0 21 25"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      d="M20.814 3.86L10.431.4.048 3.86v9.292a10.356 10.356 0 006.392 9.583L10.43 24.4l3.992-1.665a10.356 10.356 0 006.391-9.583V3.86zm-2.307 9.292a8.053 8.053 0 01-4.969 7.452L10.431 21.9l-3.107-1.296a8.053 8.053 0 01-4.968-7.452v-7.63L10.43 2.83l8.076 2.692v7.63z"
    />
    <path
      fill={color}
      d="M7.832 11.23A1.153 1.153 0 106.2 12.86l2.646 2.645c.216.217.51.338.815.339a1.155 1.155 0 00.823-.365l4.98-5.312a1.152 1.152 0 10-1.684-1.575l-4.146 4.44-1.803-1.803z"
    />
  </svg>
)

CheckedShieldIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

CheckedShieldIconNext.defaultProps = {
  color: '#222',
  title: null,
}
