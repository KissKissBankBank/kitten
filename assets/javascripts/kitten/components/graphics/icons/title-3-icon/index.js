import React from 'react'
import PropTypes from 'prop-types'

export const Title3Icon = ({ color, title, ...props }) => (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M11.61 4c1.18 0 2.46.57 2.46 1.94 0 .72-.41 1.25-.77 1.52.51.33.95.87.95 1.65 0 1.38-1.18 2.12-2.69 2.12-1.12 0-2.02-.59-2.56-1.24l1.15-1.15c.44.54.9.8 1.43.8.57 0 .84-.29.84-.64 0-.5-.4-.67-.98-.67h-.69V6.78h.58c.64 0 .92-.22.92-.61 0-.35-.28-.58-.68-.58-.52 0-.9.24-1.28.71L9.17 5.18C9.78 4.47 10.55 4 11.61 4zM9.008 0v2.56h-3.04v8.64H3.04V2.56H0V0h9.008z"
      fill={color}
    />
  </svg>
)

Title3Icon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

Title3Icon.defaultProps = {
  color: '#222',
  title: '',
}
