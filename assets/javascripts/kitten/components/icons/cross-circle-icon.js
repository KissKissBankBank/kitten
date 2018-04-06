import React from 'react'

export const CrossCircleIcon = ({ circleColor, crossColor, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <title>Cross circle</title>
      <circle fill={circleColor} cx="10" cy="10" r="10" />
      <path
        fill={crossColor}
        d="M11.414 10l2.122-2.12-1.415-1.416L10 8.586 7.88 6.464 6.463 7.88 8.586 10l-2.122 2.12 1.415 1.416L10 11.414l2.12 2.122 1.416-1.415L11.414 10z"
      />
    </svg>
  )
}

CrossCircleIcon.defaultProps = {
  circleColor: '#fff',
  crossColor: '#333',
}
