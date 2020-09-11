import React from 'react'
import PropTypes from 'prop-types'

export const DocIcon = ({ color, title, ...props }) => {
  return (
    <svg width={14} height={20} {...props}>
      {title && <title>{title}</title>}
      <path
        d="M7 0v7h7v13H0V0h7zm4 14H3v2h8v-2zm0-4H3v2h8v-2zM9 0l5 5H9V0z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  )
}

DocIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

DocIcon.defaultProps = {
  color: '#222',
  title: '',
}
