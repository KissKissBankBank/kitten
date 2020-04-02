import React from 'react'
import PropTypes from 'prop-types'

export const RocketIcon = ({ color, title, ...props }) => (
  <svg
    width="14"
    height="17"
    viewBox="0 0 14 17"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M7.549 13.513c-.333.577-1.266 1.194-2.799 1.848-.2-1.654-.132-2.77.201-3.348l2.598 1.5zm5.286-2.54c.15 1.161.003 2.803-.443 4.922l-.08.368-1.88-2.846.225-.198a21.471 21.471 0 0 0 2.178-2.247zm-8.322-4.81c-.359.967-.664 2.067-.92 3.303L.187 9.263c1.738-1.59 3.18-2.624 4.325-3.1zM13.25.639c.09 3.845-.211 6.366-.902 7.562-.69 1.196-1.813 2.473-3.366 3.83l-3.464-2c.414-2.051.96-3.661 1.634-4.83.675-1.169 2.707-2.69 6.098-4.562zm-2.5 4.33a1.5 1.5 0 1 0-1.5 2.598 1.5 1.5 0 0 0 1.5-2.598z"
      fillRule="evenodd"
    />
  </svg>
)

RocketIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

RocketIcon.defaultProps = {
  color: '#fff',
  title: 'Rocket',
}
