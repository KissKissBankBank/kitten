import React from 'react'

export const ClockCircleIcon = ({ circleColor, clockColor, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <title>Clock circle</title>
      <circle fill={circleColor} cx="10" cy="10" r="10" />
      <path fill={clockColor} d="M11 9h3v2H9V4h2v5z" />
    </svg>
  )
}

ClockCircleIcon.defaultProps = {
  circleColor: '#fff',
  clockColor: '#333',
}
