import React from 'react'
import PropTypes from 'prop-types'

export const GlobeIcon = ({ color, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M8 0c4.4183 0 8 3.5817 8 8s-3.5817 8-8 8-8-3.5817-8-8 3.5817-8 8-8zm0 1.2C4.2445 1.2 1.2 4.2445 1.2 8c0 3.7555 3.0445 6.8 6.8 6.8 3.7555 0 6.8-3.0445 6.8-6.8 0-3.7555-3.0445-6.8-6.8-6.8z" />
    <path d="M8 0c2.4853 0 4.5 3.5817 4.5 8s-2.0147 8-4.5 8-4.5-3.5817-4.5-8S5.5147 0 8 0zm0 1.2C6.363 1.2 4.7 4.1564 4.7 8s1.663 6.8 3.3 6.8c1.637 0 3.3-2.9564 3.3-6.8S9.637 1.2 8 1.2z" />
    <path d="M0 7.4h16v1.2H0z" />
    <path d="M8.6 0v16H7.4V0z" />
  </svg>
)

GlobeIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

GlobeIcon.defaultProps = {
  color: '#222',
  title: '',
}
