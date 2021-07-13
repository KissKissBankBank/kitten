import React from 'react'
import PropTypes from 'prop-types'

export const EmbedIcon = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M.457 8.198V6.126l7.042-2.562v2.1l-4.48 1.498 4.48 1.498v2.086L.457 8.198zm10.108 3.696H8.479L13.449.106h2.072l-4.956 11.788zM23.543 6.14v2.072l-7.042 2.548V8.674l4.48-1.498-4.48-1.498v-2.1l7.042 2.562z" />
  </svg>
)

EmbedIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

EmbedIcon.defaultProps = {
  color: '#222',
  title: '',
}
