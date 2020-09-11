import React from 'react'

export const HeartIcon = ({ color, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 12"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M7 2.927C6.71 1.267 5.262.007 3.52.01 1.574.013-.003 1.595 0 3.543 0 4.485.37 5.34.97 5.97l.012.014L7.012 12l5.856-5.88c.698-.646 1.134-1.57 1.132-2.597-.002-1.95-1.582-3.525-3.53-3.523C8.73.002 7.284 1.267 7 2.927z" />
  </svg>
)

HeartIcon.defaultProps = {
  color: '#222',
  title: '',
}
