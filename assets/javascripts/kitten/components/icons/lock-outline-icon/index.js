import React from 'react'
import PropTypes from 'prop-types'

export const LockOutlineIcon = ({ color, title, ...props }) => (
  <svg
    width="21"
    height="24"
    viewBox="0 0 21 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path 
      d="M10.452 17.806a1.161 1.161 0 100-2.322 1.161 1.161 0 000 2.322z"
      fill={color}
    />
    <path 
      d="M10.452 0a5.806 5.806 0 00-5.807 5.806V9.29h-.387A4.258 4.258 0 000 13.548v6.194A4.258 4.258 0 004.258 24h12.387a4.258 4.258 0 004.258-4.258v-6.194a4.258 4.258 0 00-4.258-4.258h-.387V5.806A5.807 5.807 0 0010.452 0zM6.968 5.806a3.484 3.484 0 016.967 0V9.29H6.968V5.806zm9.677 5.807a1.935 1.935 0 011.936 1.935v6.194a1.935 1.935 0 01-1.936 1.935H4.258a1.935 1.935 0 01-1.935-1.935v-6.194a1.936 1.936 0 011.935-1.935h12.387z" 
      fill={color}
    />
  </svg>
)

LockOutlineIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

LockOutlineIcon.defaultProps = {
  color: '#949494',
  title: '',
}
