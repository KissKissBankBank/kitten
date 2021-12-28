import React from 'react'
import PropTypes from 'prop-types'

export const EnvelopeIconNext = ({ color, title, ...props }) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fill={color}
      fillRule="nonzero"
      d="M16.65.45H3.35a2.8 2.8 0 0 0-2.02.87A3 3 0 0 0 .5 3.4v11.18c0 .78.3 1.54.83 2.1a2.8 2.8 0 0 0 2.02.86h13.3a2.76 2.76 0 0 0 2.02-.87 2.95 2.95 0 0 0 .83-2.09V3.41a3.06 3.06 0 0 0-.84-2.1 2.83 2.83 0 0 0-2.01-.86ZM3.35 2.42h13.3c.25 0 .5.1.67.3a1 1 0 0 1 .28.69v1.18l-5.86 4.16a2.93 2.93 0 0 1-3.5 0L2.4 4.59V3.4a1 1 0 0 1 .28-.7.93.93 0 0 1 .67-.29Zm13.3 13.16H3.35c-.25 0-.5-.1-.67-.3a1 1 0 0 1-.28-.69V6.98l4.75 3.37a4.78 4.78 0 0 0 5.68 0l4.77-3.37v7.61a1 1 0 0 1-.28.7.93.93 0 0 1-.67.29Z"
    />
  </svg>
)

EnvelopeIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

EnvelopeIconNext.defaultProps = {
  color: '#222',
  title: null,
}
