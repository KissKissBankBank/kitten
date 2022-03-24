import React from 'react'
import PropTypes from 'prop-types'

export const EmbedIconNext = ({ color, title, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      d="M10.17 3.6c.15-.53-.09-1.05-.51-1.16-.43-.12-.89.21-1.03.74l-2.8 10.46c-.15.53.09 1.05.51 1.16.43.11.89-.22 1.03-.74l2.8-10.47Zm1.26 8.38a.8.8 0 0 1 0-1.13l1.84-1.83-1.84-1.84a.8.8 0 1 1 1.14-1.13l2.96 2.97-2.96 2.96a.8.8 0 0 1-1.14 0ZM4.57 6.05a.8.8 0 0 1 0 1.13L2.73 9.02l1.84 1.83a.8.8 0 0 1-1.14 1.13L.47 9.02l2.96-2.97a.8.8 0 0 1 1.14 0Z"
    />
  </svg>
)

EmbedIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

EmbedIconNext.defaultProps = {
  color: '#222',
  title: '',
}
