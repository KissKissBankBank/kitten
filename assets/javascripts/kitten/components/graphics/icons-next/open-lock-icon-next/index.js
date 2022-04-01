import React from 'react'
import PropTypes from 'prop-types'

export const OpenLockIconNext = ({ color, title, ...props }) => (
  <svg
    width="22"
    height="28"
    fill="none"
    viewBox="0 0 22 28"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path 
      fill={color}
      fillRule="evenodd"
      d="M10.898 1.158a6.516 6.516 0 015.002.68 6.516 6.516 0 013.002 4.059 6.767 6.767 0 01-.756 5.06l-.83 1.4a4.258 4.258 0 014.136 4.256v6.194a4.258 4.258 0 01-4.259 4.258H4.806a4.258 4.258 0 01-4.258-4.258v-6.194a4.258 4.258 0 014.258-4.258h7.81l-5.575-3.3 5.575 3.3h1.644l1.622-2.74a4.06 4.06 0 00.454-3.035 3.91 3.91 0 00-1.801-2.435 3.91 3.91 0 00-3.002-.408A4.06 4.06 0 009.09 5.594l-2.049 3.46-.36-.214c-1.904-1.126-.994-2.662.13-4.562l.015-.024a6.767 6.767 0 014.072-3.096zm6.296 13.52a1.936 1.936 0 011.935 1.935v6.194a1.935 1.935 0 01-1.936 1.935H4.806a1.936 1.936 0 01-1.935-1.935v-6.194a1.936 1.936 0 011.935-1.935h12.387zM11 16.665c-.642 0-1.162.52-1.162 1.161v3.94a1.16 1.16 0 102.323-.001v-3.939c0-.641-.52-1.161-1.161-1.161z"
      clipRule="evenodd"
    />
  </svg>
)

OpenLockIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

OpenLockIconNext.defaultProps = {
  color: '#222',
  title: null,
}
