import React from 'react'
import PropTypes from 'prop-types'

export const SaveIcon = ({ color, title, ...props }) => {
  return (
    <svg width={16} height={17} {...props}>
      {title && <title>{title}</title>}
      <path
        d="M12 0l4 4v13H0V0h12zM8 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4-6H4v3h8V3z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  )
}

SaveIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

SaveIcon.defaultProps = {
  color: '#222',
  title: '',
}
