import React from 'react'
import PropTypes from 'prop-types'

export const LockOutlineIcon = ({ color, title, ...props }) => (
  <svg
    width="21"
    height="25"
    viewBox="0 0 21 25"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill={color} d="M10.5 14c-.642 0-1.162.52-1.162 1.161v3.94a1.16 1.16 0 102.323 0v-3.94c0-.641-.52-1.161-1.161-1.161z"/>
    <path fill={color} d="M10.5.4a5.806 5.806 0 00-5.806 5.806V9.69h-.388a4.258 4.258 0 00-4.258 4.258v6.194A4.258 4.258 0 004.306 24.4h12.387a4.258 4.258 0 004.259-4.258v-6.194a4.258 4.258 0 00-4.259-4.258h-.387V6.206A5.806 5.806 0 0010.5.4zM7.016 6.206a3.484 3.484 0 116.968 0V9.69H7.016V6.206zm9.678 5.807a1.935 1.935 0 011.935 1.935v6.194a1.935 1.935 0 01-1.936 1.935H4.306a1.935 1.935 0 01-1.935-1.935v-6.194a1.936 1.936 0 011.935-1.935h12.387z"/>
  </svg>
)

LockOutlineIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

LockOutlineIcon.defaultProps = {
  color: '#222',
  title: '',
}
