import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'

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
    role="img"
    aria-label={iconTitle || title}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-0.7 -0.7 18 18"
    width={width}
    height={height}
    {...props}
  >
    {(iconTitle || title) && <title>{iconTitle || title}</title>}
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
  iconTitle: deprecated(PropTypes.string, 'Prefere use `title` prop instead'),
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
