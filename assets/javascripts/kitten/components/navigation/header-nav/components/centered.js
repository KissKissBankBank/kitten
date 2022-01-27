import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Centered = ({ children, className, display, ...props }) => {
  const classNameProps = classNames(
    'k-HeaderNav__centered',
    { 'k-HeaderNav__column': display === 'column' },
    className,
  )

  return (
    <div {...props} className={classNameProps}>
      {children}
    </div>
  )
}

Centered.propTypes = {
  display: PropTypes.oneOf(['column']),
}

Centered.defaultProps = {
  display: null,
}
