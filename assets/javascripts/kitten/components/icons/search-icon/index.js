import React from 'react'
import PropTypes from 'prop-types'

export const SearchIcon = ({
  iconTitle,
  color,
  circleProps,
  pathProps,
  ...other
}) => (
  <svg viewBox="-0.7 -0.7 18 18" xmlns="http://www.w3.org/2000/svg" {...other}>
    {iconTitle && <title>{iconTitle}</title>}
    <circle
      cx="7"
      cy="7"
      r="7"
      stroke={color}
      strokeWidth="1.1"
      fill="none"
      {...circleProps}
    />
    <path
      d="M13 11 L17 15 L15.5 16.5 L11.5 12.7z"
      fill={color}
      {...pathProps}
    />
  </svg>
)

SearchIcon.propTypes = {
  iconTitle: PropTypes.string,
  color: PropTypes.string,
  circleProps: PropTypes.object,
  pathProps: PropTypes.object,
}

SearchIcon.defaultProps = {
  iconTitle: 'Search',
  color: '#333',
  circleProps: {},
  pathProps: {},
}
