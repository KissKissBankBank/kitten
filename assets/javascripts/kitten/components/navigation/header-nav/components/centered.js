import React from 'react'
import PropTypes from 'prop-types'

export const Centered = ({ children, className, display, ...props }) => {
  const classNameProps = [
    className,
    display === 'column' ? 'k-HeaderNav--column' : null,
    'k-HeaderNav--centered',
  ].join(' ')

  return (
    <div {...props} className={classNameProps}>
      {children}
    </div>
  )
}

Centered.propTypes = {
  display: PropTypes.oneOf['column'],
}

Centered.defaultProps = {
  display: null,
}
