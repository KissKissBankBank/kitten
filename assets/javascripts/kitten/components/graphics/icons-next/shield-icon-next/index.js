import React from 'react'
import PropTypes from 'prop-types'

export const ShieldIconNext = ({
  shieldColor,
  checkColor,
  strokeColor,
  title,
  ...props
}) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill={shieldColor} stroke={strokeColor} stroke-width=".3" d="M15.479 27.038l-.058-.024-3.884-1.62a10.215 10.215 0 01-6.303-9.454M15.48 27.038l3.884-1.782a10.066 10.066 0 006.21-9.316h.15v0V6.294l-.102-.034-10.095-3.365-.047-.016-.048.016L5.337 6.26l-.103.034V15.94M15.48 27.038l.057-.024 3.884-1.62-3.941 1.644zM5.234 15.94h.15-.15 0zm-2.584 0v0V4.434L15.479.158l12.828 4.276V15.94a12.795 12.795 0 01-7.896 11.84h0l-4.932 2.057-4.932-2.057h0A12.795 12.795 0 012.65 15.94z"/>
    <path fill={checkColor} d="M11.21 12.517l-2.038 2.038 4.326 4.326c.27.27.637.423 1.02.423a1.443 1.443 0 001.028-.456l7.21-7.692-2.105-1.97-6.168 6.604-3.273-3.273z"/>
  </svg>
)

ShieldIconNext.propTypes = {
  shieldColor: PropTypes.string,
  checkColor: PropTypes.string,
  title: PropTypes.string,
}

ShieldIconNext.defaultProps = {
  shieldColor: '#222',
  checkColor: '#006cff',
  strokeColor: '#eee',
  title: null,
}
