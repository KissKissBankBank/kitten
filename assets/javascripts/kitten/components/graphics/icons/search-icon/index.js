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
  <svg aria-label={title} width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {(title) && <title>{title}</title>}
    <path d="M14 14L10.5 10.5" stroke={color} strokeWidth="2" strokeLinecap="round" {...pathProps}/>
    <circle cx="6.3" cy="6.3" r="5.3" stroke={color} strokeWidth="2" {...circleProps}/>
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
