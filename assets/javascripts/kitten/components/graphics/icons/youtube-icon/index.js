import React from 'react'
import PropTypes from 'prop-types'

export const YoutubeIcon = ({ color, title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 176 124"
    fill={color}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M172.3 19.4c-2-7.6-8-13.6-15.6-15.7C143 0 88 0 88 0S33 0 19.2 3.7c-7.6 2-13.5 8-15.6 15.7C0 33.2 0 62 0 62s0 28.8 3.7 42.6c2 7.6 8 13.6 15.6 15.7C33 124 88 124 88 124s55 0 68.8-3.7c7.6-2 13.5-8 15.6-15.7C176 90.8 176 62 176 62s0-28.8-3.7-42.6zM70 88.2V35.8L116 62 70 88.2z" />
  </svg>
)

YoutubeIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

YoutubeIcon.defaultProps = {
  color: '#222',
  title: '',
}
