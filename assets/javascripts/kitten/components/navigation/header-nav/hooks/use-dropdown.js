import React, {
  cloneElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'

import domEvents, {
  TOGGLE_DROPDOWN_EVENT,
  DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
  DROPDOWN_LAST_FOCUS_REACHED_EVENT,
  dispatchEvent,
} from '../../../../helpers/dom/events'

export const useDropdown = ({ dropdownProps, buttonProps, menuProps }) => {
  const dropdownRef = useRef(null)
  const dropdownContentRef = useRef(null)
  const dropdownButtonRef = useRef(null)

  const [isDropdownExpanded, setDropdownExpandedState] = useState(dropdownProps.isExpanded || false)

  const handleButtonClick = () => {
    setDropdownExpandedState((currentValue) => !currentValue)
  }

  const closeDropdown = () => {
    setDropdownExpandedState(false)
  }

  const handleKeydown = e => {
    if (e.key === 'Escape') {
      closeDropdown()
    }

    if (e.key === 'Tab') {
      // Wait 5ms for the activeElement to change
      setTimeout(() => {
        if (dropdownRef.current
          && !dropdownRef.current.contains(document.activeElement)) {
          closeDropdown()
        }}, 5)
    }
  }

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown()
    }
  }

  useEffect(() => {
    dropdownProps.callOnToggle({
      isExpanded: isDropdownExpanded,
      expandBy: isDropdownExpanded ? buttonProps.id : null,
    })

    if (!isDropdownExpanded) return

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeydown)

    if (dropdownProps.closeEvents) {
      dropdownProps.closeEvents.forEach(ev => {
        window.addEventListener(ev, closeDropdown)
      })
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeydown)

      if (dropdownProps.closeEvents) {
        dropdownProps.closeEvents.forEach(ev => {
          window.removeEventListener(ev, closeDropdown)
        })
      }
    }
  }, [isDropdownExpanded])

  const returnedDropdownProps = {
    ref: dropdownRef,
    'aria-live': 'polite',
    className: classNames(
      'k-HeaderNavDropdown',
      {
        'k-HeaderNavDropdown--isExpanded': isDropdownExpanded,
      },
      dropdownProps.className,
    )
  }

  const returnedButtonProps = {
    ...buttonProps,
    ref: dropdownButtonRef,
    id: buttonProps.id,
    'aria-controls': menuProps.id,
    isExpanded: isDropdownExpanded,
    onClick: handleButtonClick,
    className: classNames('k-HeaderNavDropdown__button', buttonProps.className),
  }

  const returnedWidth = dropdownProps.dropdownContentWidth === NaN
    ? null
    : dropdownProps.dropdownContentWidth

  const returnedMenuProps = {
    ...menuProps,
    ref: dropdownContentRef,
    id: menuProps.id,
    className: classNames(
      'k-HeaderNavDropdown__menu',
      menuProps.className,
      `k-HeaderNavDropdown__menu--is-${dropdownProps.side || 'left'}`
    ),
    style: {
      ...menuProps.style,
      width: returnedWidth,
    },
    'aria-hidden': !isDropdownExpanded,
  }

  return {
    dropdownProps: returnedDropdownProps,
    buttonProps: returnedButtonProps,
    menuProps: returnedMenuProps,
    isDropdownExpanded,
  }
}
