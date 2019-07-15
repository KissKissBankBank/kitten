import React from 'react'

export const PasswordIcon = ({ color, title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 12"
      fill={color}
      width="18"
      {...props}
    >
      <title>{title}</title>
      <path
        d="M9 0C4 0 0 4 0 6s4 6 9 6 9-4 9-6-4-6-9-6zm0 10c-2.2
        0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
      />
      <circle cx="9" cy="6" r="2" />
    </svg>
  )
}

PasswordIcon.defaultProps = {
  color: '#222',
  title: '',
}
