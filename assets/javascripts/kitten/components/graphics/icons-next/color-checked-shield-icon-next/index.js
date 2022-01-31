import React from 'react'
import PropTypes from 'prop-types'

export const ColorCheckedShieldIconNext = ({
  color,
  secondaryColor,
  title,
  ...props
}) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      fillRule="evenodd"
      d="m25.97 23.07.06-.1a12.64 12.64 0 0 0 2.13-7.03V4.54L15.48.32 2.8 4.54v11.4c0 2.5.74 4.95 2.13 7.04l.06.1a12.64 12.64 0 0 0 5.61 4.56l4.88 2.04 4.87-2.04a12.64 12.64 0 0 0 5.62-4.57Zm-6.5 2.46c1.9-.78 3.52-2.12 4.66-3.82l.05-.08a10.4 10.4 0 0 0 1.7-5.69V6.19l-10.4-3.47L5.08 6.2v9.75c0 2.05.6 4.06 1.75 5.77l.05.08a10.36 10.36 0 0 0 4.6 3.74l4 1.67 4-1.67Z"
    />
    <path
      fill={secondaryColor}
      d="m10 15.74 4 4 7-7a1.41 1.41 0 0 0-2-2l-5 5-2-2a1.41 1.41 0 0 0-2 2Z"
    />
  </svg>
)

ColorCheckedShieldIconNext.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  title: PropTypes.string,
}

ColorCheckedShieldIconNext.defaultProps = {
  color: '#222',
  secondaryColor: '#006cff',
  title: null,
}
