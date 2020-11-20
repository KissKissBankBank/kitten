import React from 'react'
import PropTypes from 'prop-types'

export const DotIcon = ({ color, title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 6"
      width="6"
      height="6"
      {...props}
    >
      {title && <title>{title}</title>}
      <circle cx="3" cy="3" r="3" fill={color}/>
    </svg>
  )
}

DotIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

DotIcon.defaultProps = {
  color: '#fff',
  title: '',
}
