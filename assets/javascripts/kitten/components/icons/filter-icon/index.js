import React from 'react'
import COLORS from '../../../constants/colors-config'

export const FilterIcon = ({
  color,
  duration,
  type,
  name,
  begin,
  animated,
  title,
  ...others
}) => {
  const animationDuration = animated ? duration : 0

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20px"
      height="24px"
      viewBox="0 0 20 24"
      fill={color}
      {...others}
    >
      {title && <title>{title}</title>}
      <rect x="2" width="2" height="10">
        <animate
          attributeType={type}
          attributeName={name}
          values="-4; 0; -4"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </rect>
      <rect x="2" y="14" width="2" height="10">
        <animate
          attributeType={type}
          attributeName={name}
          values="14; 18; 14"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </rect>
      <path d="M4,9v2H2V9H4 M6,7H0v6h6V7L6,7z">
        <animateTransform
          attributeType={type}
          attributeName="transform"
          type="translate"
          values="0 0; 0 4; 0 0"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </path>

      <rect x="9" width="2" height="14">
        <animate
          attributeType={type}
          attributeName={name}
          values="0; -12; 0"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </rect>
      <rect x="9" y="22" width="2" height="14">
        <animate
          attributeType={type}
          attributeName={name}
          values="22; 10; 22"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </rect>
      <path d="M11,17v2H9v-2H11 M13,15H7v6h6V15L13,15z">
        <animateTransform
          attributeType={type}
          attributeName="transform"
          type="translate"
          values="0 0; 0 -12; 0 0"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </path>

      <rect x="16" width="2" height="12">
        <animate
          attributeType={type}
          attributeName={name}
          values="-8; 0; -8"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </rect>
      <rect x="16" y="12" width="2" height="12">
        <animate
          attributeType={type}
          attributeName={name}
          values="12; 20; 12"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </rect>
      <path d="M18,7v2h-2V7H18 M20,5h-6v6h6V5L20,5z">
        <animateTransform
          attributeType={type}
          attributeName="transform"
          type="translate"
          values="0 0; 0 8; 0 0"
          begin={begin}
          dur={animationDuration}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

FilterIcon.defaultProps = {
  color: COLORS.font1,
  duration: '1.5s',
  animated: false,
  type: 'xml',
  name: 'y',
  begin: '0',
  title: '',
}
