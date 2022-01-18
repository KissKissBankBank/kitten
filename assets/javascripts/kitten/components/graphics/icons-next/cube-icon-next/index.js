import React from 'react'
import PropTypes from 'prop-types'

export const CubeIconNext = ({ color, title, ...props }) => (
  <svg
    width="24"
    height="33"
    viewBox="0 0 24 33"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill={color} fillRule="evenodd" d="M12.536 8.07a1.09 1.09 0 00-.976 0L.68 13.51a1.091 1.091 0 00-.632.99v12c0 .429.252.818.644.994l10.909 4.91c.284.127.61.127.895 0l10.91-4.91a1.09 1.09 0 00.642-.995V14.503v-.023c-.007-.43-.264-.8-.631-.97l-10.88-5.44zM2.23 16.186v9.607l8.727 3.927v-9.607L2.23 16.187zm10.91 3.927v9.607l8.726-3.927v-9.607l-8.727 3.927zm-1.092-1.902l-8.366-3.764 8.366-4.183 8.366 4.183-8.366 3.764zM12.048 0a1.2 1.2 0 011.2 1.2V5a1.2 1.2 0 11-2.4 0V1.2a1.2 1.2 0 011.2-1.2zM20.188 2.6a1.2 1.2 0 01.439 1.64l-1.9 3.29a1.2 1.2 0 01-2.079-1.2l1.9-3.29a1.2 1.2 0 011.64-.44zM4.088 2.6a1.2 1.2 0 011.639.44l1.9 3.29a1.2 1.2 0 01-2.079 1.2l-1.9-3.29a1.2 1.2 0 01.44-1.64z" clipRule="evenodd"/>
  </svg>
)

CubeIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

CubeIconNext.defaultProps = {
  color: '#222',
  title: null,
}
