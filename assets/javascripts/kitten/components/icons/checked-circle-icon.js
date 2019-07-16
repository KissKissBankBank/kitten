import React from 'react'

export const CheckedCircleIcon = ({
  circleColor,
  checkedColor,
  title,
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      {title && <title>{title}</title>}
      <circle fill={circleColor} cx="10" cy="10" r="10" />
      <path
        fill={checkedColor}
        d="M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z"
      />
    </svg>
  )
}

CheckedCircleIcon.defaultProps = {
  circleColor: '#fff',
  checkedColor: '#333',
  title: '',
}
