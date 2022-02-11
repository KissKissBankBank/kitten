import React from 'react'
import PropTypes from 'prop-types'

export const ColorGiftIconNext = ({ color, secondaryColor, title, ...props }) => (
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
      d="M3 17.94v9.56c0 1.1.9 2 2 2h20a2 2 0 0 0 2-2v-9.56A2 2 0 0 0 28.5 16v-5.5a2 2 0 0 0-2-2h-23a2 2 0 0 0-2 2V16A2 2 0 0 0 3 17.94ZM25 18v9.5H5V18h20Zm1.5-7.5V16h-23v-5.5h23Z"
    />
    <path
      fill={secondaryColor}
      d="M13.3 8.45 13.33 30h3.4c-.03-5.94-.11-15.61-.11-21.55h1.99c4.36 0 5.3-2.22 5.3-2.22a4.1 4.1 0 0 0-.17-4.18A4.42 4.42 0 0 0 22.1.55 4.72 4.72 0 0 0 19.9 0c-.96 0-1.9.21-2.77.62-.85.4-1.6 1-2.17 1.72A6.1 6.1 0 0 0 12.78.62c-.86-.4-1.8-.62-2.76-.62a4.67 4.67 0 0 0-3.86 2.05A4.12 4.12 0 0 0 6 6.23c.57.96 2.03 2.22 4.83 2.22h2.47Zm6.6-6.11c.54 0 1.06.2 1.45.57.38.36.6.86.6 1.37a1.9 1.9 0 0 1-.6 1.38 2.1 2.1 0 0 1-1.46.57h-3.7v-.39c0-.93.4-1.82 1.08-2.48a3.82 3.82 0 0 1 2.62-1.02ZM7.95 4.28c0-.51.22-1 .6-1.37.4-.37.91-.57 1.46-.57.98 0 1.92.37 2.62 1.02a3.4 3.4 0 0 1 1.08 2.48v.4h-3.7c-.55 0-1.07-.21-1.46-.58a1.9 1.9 0 0 1-.6-1.38Z"
    />
  </svg>
)

ColorGiftIconNext.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  title: PropTypes.string,
}

ColorGiftIconNext.defaultProps = {
  color: '#222',
  secondaryColor: '#006cff',
  title: null,
}
