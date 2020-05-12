import React from 'react'
import PropTypes from 'prop-types'

export const ExportIconAlternate = ({ color, iconTitle, title, ...props }) => (
  <svg
    role="img"
    aria-label={iconTitle || title}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width="12"
    height="12"
    fill={color}
    {...props}
  >
    {title !== '' && <title>{title}</title>}
    <rect x="0" y="0" width="4" height="2" />
    <rect x="6" y="0" width="6" height="2" />
    <rect x="4" y="3" width="8" height="2" transform="rotate(-45 8 4)" />
    <rect x="0" y="0" width="2" height="12" />
    <rect x="0" y="10" width="12" height="2" />
    <rect x="10" y="8" width="2" height="4" />
    <rect x="10" y="0" width="2" height="6" />
  </svg>
)

ExportIconAlternate.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

ExportIconAlternate.defaultProps = {
  color: '#000',
  title: '',
}
