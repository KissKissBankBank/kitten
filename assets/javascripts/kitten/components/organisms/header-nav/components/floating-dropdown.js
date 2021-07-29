import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const FloatingDropdown = ({ children, className, visible }) => (
  <div className={classNames('k-HeaderNav__floatingDropdown', className, {
    'k-HeaderNav__floatingDropdown--visible': visible,
  })}>{children}</div>
)

FloatingDropdown.propTypes = {
  visible: PropTypes.bool,
}

FloatingDropdown.defaultProps = {
  visible: false,
}
