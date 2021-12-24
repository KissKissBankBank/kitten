import React from 'react'
import PropTypes from 'prop-types'

export const CircleIconNext = ({ circleColor, crossColor,  title, ...props }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <circle cx="14" cy="14" r="13" stroke={circleColor} stroke-width="2"/>
    <path fill={crossColor} fill-rule="evenodd" d="M19.06 11.06a1.5 1.5 0 00-2.12-2.12L14 11.878l-2.94-2.94a1.5 1.5 0 10-2.12 2.122L11.878 14l-2.94 2.94a1.5 1.5 0 002.122 2.12L14 16.122l2.94 2.94a1.5 1.5 0 002.12-2.122L16.122 14l2.94-2.94z" clip-rule="evenodd"/>
 </svg>
)

CircleIconNext.propTypes = {
  circleColor: PropTypes.string,
  crossColor: PropTypes.string,
  title: PropTypes.string,
}

CircleIconNext.defaultProps = {
  circleColor: '#222',
  crossColor: '#006cff',
  title: null,
}
