import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const Right = ({ children, className, padded }) => (
  <div className={classNames('k-HeaderNav__right', className, {
    'k-HeaderNav__right--padded': padded,
  })}>{children}</div>
)

Right.propTypes = {
  padded: PropTypes.bool,
}

Right.defaultProps = {
  padded: false,
}
