import React from 'react'
import PropTypes from 'prop-types'

export const WarningIcon = ({ color, title, ...props }) => {
  return (
    <svg width="2" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
      {title && <title>{title}</title>}
      <path
        d="M1.82 6.86H.168V0H1.82v6.86zM0 8.96c0-.28.098-.518.294-.714a.972.972 0 0 1 .714-.294c.28 0 .518.098.714.294a.972.972 0 0 1 .294.714c0 .27-.098.504-.294.7a.972.972 0 0 1-.714.294.972.972 0 0 1-.714-.294.956.956 0 0 1-.294-.7z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  )
}

WarningIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

WarningIcon.defaultProps = {
  color: '#fff',
  title: 'Warning',
}
