import React from 'react'
import PropTypes from 'prop-types'

export const RainbowColorIllustration = ({ title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="304"
      height="154"
      fill="none"
      viewBox="0 0 304 154"
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M302 151.999h-31.86a118.15 118.15 0 0 0-72.933-109.152A118.143 118.143 0 0 0 33.85 151.999H2C2 69.162 69.16 2.003 152.005 2.003S302 69.163 302 152Z" fill="#1F93FF"/><path d="M302 151.999h-31.86a118.15 118.15 0 0 0-72.933-109.152A118.143 118.143 0 0 0 33.85 151.999H2C2 69.162 69.16 2.003 152.005 2.003S302 69.163 302 152Z" stroke="#000" strokeWidth="3" strokeMiterlimit="10"/><path d="M270.141 152.003h-29.649A88.49 88.49 0 0 0 89.518 89.596a88.493 88.493 0 0 0-26.01 62.407H33.852a118.145 118.145 0 1 1 236.29 0" fill="#F60044"/><path d="M270.141 152.003h-29.649A88.49 88.49 0 0 0 89.518 89.596a88.493 88.493 0 0 0-26.01 62.407H33.852a118.145 118.145 0 1 1 236.29 0Z" stroke="#000" strokeWidth="3" strokeMiterlimit="10"/><path d="M240.49 152h-31.994a56.492 56.492 0 0 0-56.495-56.495A56.494 56.494 0 0 0 95.506 152H63.509a88.493 88.493 0 1 1 176.984 0" fill="#FFB8CB"/><path d="M240.49 152h-31.994a56.492 56.492 0 0 0-56.495-56.495A56.494 56.494 0 0 0 95.506 152H63.509a88.493 88.493 0 1 1 176.984 0h-.003Z" stroke="#000" strokeWidth="3" strokeMiterlimit="10"/>
    </svg>
  )
}

RainbowColorIllustration.propTypes = {
  title: PropTypes.string,
}

RainbowColorIllustration.defaultProps = {
  title: null,
}
