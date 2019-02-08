import React from 'react'
import PropTypes from 'prop-types'

export const WarningIcon = ({ color, title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={color}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M9.034 7.088l-.07-1.862h2.072l-.07 1.862-.294 4.284H9.328l-.294-4.284zm-.28 6.398c0-.373.12-.684.357-.93.24-.248.535-.372.89-.372s.65.124.89.37c.237.248.356.56.356.932 0 .364-.12.67-.357.917-.24.247-.535.37-.89.37s-.65-.123-.89-.37c-.237-.247-.356-.553-.356-.917z" />
    </svg>
  )
}

WarningIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

WarningIcon.defaultProps = {
  color: '#fff',
  title: 'Warning',
}
