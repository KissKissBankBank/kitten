import React, { useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const DropdownButton = forwardRef(
  ({ id, className, isExpanded, ...rest }, dropdownButtonRef) => {
    const buttonClassName = classNames('k-Dropdown__button', className)

    return (
      <button
        ref={dropdownButtonRef}
        id={id}
        type="button"
        className={buttonClassName}
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

// DEPRECATED: do not use default export.
export default DropdownButton
