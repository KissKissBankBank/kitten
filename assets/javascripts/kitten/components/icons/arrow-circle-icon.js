import React from 'react'

export const ArrowCircleIcon = ({ circleColor, arrowColor, ...props }) => {
  return (
    <svg
      className={ arrowIconClassNames }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      { ...others }
    >
      <circle fill={ circleColor } cx="10" cy="10" r="10" />
      <path fill={ arrowColor }
            d="M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z" />
      <path fill={ arrowColor }
            d="M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z" />
    </svg>
  )
}

ArrowCircleIcon.defaultProps = {
  circleColor: '#fff',
  checkedColor: '#333',
}
