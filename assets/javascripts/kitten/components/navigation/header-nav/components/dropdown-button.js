import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const DropdownButton = forwardRef(
  ({ id, className, isExpanded, ...rest }, dropdownButtonRef) => {
    return (
      <button
        ref={dropdownButtonRef}
        id={id}
        type="button"
        className={classNames('k-Dropdown__button', className)}
        aria-haspopup="true"
        aria-expanded={isExpanded}
        {...rest}
      />
    )
  },
)

DropdownButton.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool,
}

DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: () => {},
  isExpanded: false,
}
