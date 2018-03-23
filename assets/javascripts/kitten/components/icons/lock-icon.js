import React from 'react'

export const LockIcon = ({ color, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19" {...props}>
      <title>Lock</title>
      <path
        fill={color}
        d="M1 9.01v7.98c0 .56.448 1.01.994 1.01h12.012c.546 0 .994-.45.994-1.01V9.01c0-.56-.448-1.01-.994-1.01H1.994C1.448 8 1 8.45 1 9.01zm-1 0C0 7.9.895 7 1.994 7h12.012C15.106 7 16 7.902 16 9.01v7.98c0 1.11-.895 2.01-1.994 2.01H1.994C.894 19 0 18.098 0 16.99V9.01z"
      />
      <rect fill={color} x="7.5" y="11" width="1" height="4" rx=".5" />
      <circle fill={color} cx="8" cy="12" r="1" />
      <path
        fill={color}
        d="M5 7h6V4c0-1.654-1.345-3-3-3-1.654 0-3 1.345-3 3v3zM4 4c0-2.21
            1.795-4 4-4 2.21 0 4 1.795 4 4v4H4V4z"
      />
    </svg>
  )
}

LockIcon.defaultProps = {
  color: '#333',
}
