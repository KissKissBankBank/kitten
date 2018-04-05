import React from 'react'

export const ClockIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 11"
    width="10"
    height="10"
    {...props}
  >
    <title>Clock</title>
    <circle cx="5.5" cy="5.5" r="5" fill="#fff" stroke="#333" />
    <path d="M6 5h1.5v1H5V2.5h1z" fill="#333" />
  </svg>
)
