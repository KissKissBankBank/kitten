import React from 'react'

export const SearchIcon = props => (
  <svg viewBox="-0.7 -0.7 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Search</title>
    <circle
      className="k-SearchInput__submit__svgCircle"
      cx="7"
      cy="7"
      r="7"
      stroke="#333"
      strokeWidth="1.1"
      fill="none"
    />
    <path
      className="k-SearchInput__submit__svgPath"
      fill="#333"
      d="M13 11 L17 15 L15.5 16.5 L11.5 12.7z"
    />
  </svg>
)
