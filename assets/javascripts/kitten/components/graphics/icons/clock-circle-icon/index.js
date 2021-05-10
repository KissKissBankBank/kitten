import React from 'react'
import deprecated from 'prop-types-extra/lib/deprecated'
import PropTypes from 'prop-types'

export const ClockCircleIcon = ({
  color,
  bgColor,
  circleColor,
  clockColor,
  title,
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      {title && <title>{title}</title>}
      <circle fill={circleColor || bgColor} cx="10" cy="10" r="10" />
      <path fill={clockColor || color} d="M11 9h3v2H9V4h2v5z" />
    </svg>
  )
}

ClockCircleIcon.defaultProps = {
  bgColor: '#fff',
  color: '#333',
  title: '',
}

ClockCircleIcon.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  circleColor: deprecated(
    PropTypes.string,
    '`circleColor` is deprecated. Please use `bgColor` instead.',
  ),
  clockColor: deprecated(
    PropTypes.string,
    '`clockColor` is deprecated. Please use `color` instead.',
  ),
}
