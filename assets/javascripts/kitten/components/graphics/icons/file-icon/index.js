import React from 'react'
import PropTypes from 'prop-types'

export const FileIcon = ({ color, title, ...props }) => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M16 20H0V0h11l5 5v15zM10 2H2v16h12V6h-4V2zm1.5 10.25v1.5h-7v-1.5h7zm0-3v1.5h-7v-1.5h7zm-4-3v1.5h-3v-1.5h3z"
      fill={color}
    />
  </svg>
)

FileIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

FileIcon.defaultProps = {
  color: '#222',
  title: '',
}
