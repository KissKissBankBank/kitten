import React from 'react'
import PropTypes from 'prop-types'

export const ExportIcon = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15"
      stroke="#222222"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M12 15L11.2929 15.7071L12 16.4142L12.7071 15.7071L12 15ZM7.29289 11.7071L11.2929 15.7071L12.7071 14.2929L8.70711 10.2929L7.29289 11.7071ZM12.7071 15.7071L16.7071 11.7071L15.2929 10.2929L11.2929 14.2929L12.7071 15.7071Z"
      fill="#222222"
    />
    <path d="M12 15L12 4" stroke="#222222" stroke-width="2" />
  </svg>
)

ExportIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

ExportIcon.defaultProps = {
  color: '#fff',
  title: '',
}
