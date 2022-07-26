import React from 'react'
import PropTypes from 'prop-types'

export const SearchIcon = ({
  iconTitle,
  title,
  color,
  circleProps,
  pathProps,
  width,
  height,
  ...props
}) => (
  <svg
    aria-label={title}
    width={width}
    height={height}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      d="M14.7 13.3l-3.5-3.5a1 1 0 00-1.4 1.4l3.5 3.5a1 1 0 001.4-1.4z"
      {...pathProps}
    />
    <path
      fill={color}
      d="M6.3 0a6.3 6.3 0 100 12.6A6.3 6.3 0 006.3 0zm0 2a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6z"
      {...circleProps}
    />
  </svg>
)

SearchIcon.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  circleProps: PropTypes.object,
  pathProps: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

SearchIcon.defaultProps = {
  title: null,
  color: '#333',
  circleProps: {},
  pathProps: {},
  width: 14,
  height: 14,
}
