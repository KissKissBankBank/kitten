import React from 'react'
import PropTypes from 'prop-types'

export const ExportIcon = ({ color, title, ...props }) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M8 4.207v5.414H6V4.207L4.172 6.036 2.757 4.62 7 .38l1.414 1.414 2.829 2.828-1.415 1.415L8 4.207zm4 11.414H0v-6h2v4h10v-4h2v6h-2z"
      fill={color}
    />
  </svg>
)

ExportIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

ExportIcon.defaultProps = {
  color: '#fff',
  title: 'Export',
}
