import React from 'react'
import PropTypes from 'prop-types'

export const WindowEditIconNext = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M17.667 0H4.333C3.45 0 2.601.356 1.976.989A3.397 3.397 0 0 0 1 3.375v14.25a3.4 3.4 0 0 0 .976 2.387A3.313 3.313 0 0 0 4.333 21h4.445v-2.25H4.333c-.294 0-.577-.119-.785-.33a1.132 1.132 0 0 1-.326-.795V8.25H21V3.375c0-.895-.351-1.754-.976-2.386A3.313 3.313 0 0 0 17.667 0ZM3.222 3.375c0-.298.117-.585.326-.796.208-.21.49-.329.785-.329H9.89V6H3.222V3.375ZM12.112 6V2.25h5.555c.294 0 .577.119.785.33.209.21.326.497.326.795V6H12.11Z"
      fill={color}
    />
    <path
      d="m16.973 11.002-5.855 5.856a3.79 3.79 0 0 0-1.118 2.7V23h3.442a3.793 3.793 0 0 0 2.7-1.117l5.856-5.856a3.553 3.553 0 0 0-5.025-5.025Zm3.829 2.515c0 .342-.134.67-.373.916l-5.87 5.87a1.583 1.583 0 0 1-1.117.462h-1.207v-1.207c0-.419.166-.82.462-1.117l5.87-5.87a1.318 1.318 0 0 1 2.235.93v.016Z"
      fill={color}
    />
  </svg>
)

WindowEditIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

WindowEditIconNext.defaultProps = {
  color: '#222',
  title: null,
}
