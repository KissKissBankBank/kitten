import React, { useEffect, useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import domEvents from '../../helpers/dom/events'
import { getFocusableElements } from '../../helpers/dom/a11y'

export const DropdownButton = forwardRef(
  ({ id, className, isExpanded, ...rest }, dropdownButtonRef) => {
    const buttonClassName = classNames('k-Dropdown__button', className)
    const {
      keyboard: { space, enter, down, up },
    } = domEvents

    const a11y = event => {
      const dropdownContent = document.querySelector(
        `[aria-labelledby="${id}"]`,
      )
      // const focusableElements = dropdownContent && getFocusableElements(dropdownContent)

      if (event.keyCode === down) {
        dropdownButtonRef.current.isExpanded = true
      }

      if (event.keyCode === up) {
        dropdownButtonRef.current.isExpanded = false
      }
    }

    useEffect(() => {
      if (!dropdownButtonRef.current) return

      dropdownButtonRef.current.addEventListener('keydown', a11y)

      return () => {
        dropdownButtonRef.current.removeEventListener('keydown', a11y)
      }
    }, [dropdownButtonRef.current])

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
