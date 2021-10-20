import React from 'react'
import PropTypes from 'prop-types'

export const ChronoIconNext = ({ color, title, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M11.399 1.667a.833.833 0 0 0 0-1.667H7.833a.833.833 0 1 0 0 1.667H11.4Zm3.282 16.952a8.915 8.915 0 1 1 .675-14.595l.78-.78a.833.833 0 1 1 1.178 1.179l-.759.758.259.258a8.915 8.915 0 0 1-2.133 13.18Zm-.805-13.464a7.132 7.132 0 1 0-7.925 11.86 7.132 7.132 0 0 0 7.925-11.86Zm-3.961.64c.46 0 .833.373.833.833v4.011a.833.833 0 1 1-1.667 0V6.628c0-.46.374-.833.834-.833Z"
      fill={color}
    />
  </svg>
)

ChronoIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

ChronoIconNext.defaultProps = {
  color: '#222',
  title: null,
}
