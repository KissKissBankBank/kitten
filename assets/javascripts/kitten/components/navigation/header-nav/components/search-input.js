import React, { useState, useEffect, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TextInputWithButton } from '../../../form/input/text-input-with-button'
import { SearchIcon } from '../../../graphics/icons/search-icon'
import { CrossIcon } from '../../../graphics/icons/cross-icon'
import { Button } from '../../../action/button'
import { Context } from './context'
import { useDropdown } from '../hooks/use-dropdown'

const namespace = 'kkbbAndCo'
const CLOSE_EVENT = `${namespace}:searchMenu:close`

export const SearchInput = ({
  children,
  className,
  searchInputProps = {},
  searchButtonProps = {},
  onMenuToggle = () => {},
  closeEvents = [],
  a11yMobileOpen = 'Ouvrir la recherche',
  a11yMobileClose = 'Fermer la recherche',
  ...props
}) => {
  const { id, callOnToggle } = useContext(Context)
  const [isMobileInvisible, setMobileInvibility] = useState(true)
  const buttonElement = useRef(null)

  const {
    dropdownProps,
    menuProps,
    inputProps,
    isDropdownExpanded,
    openDropdown,
    closeDropdown,
  } = useDropdown({
    callOnToggle,
    dropdownClass: 'k-HeaderNav__searchInputDropdown',
    closeEvents: [CLOSE_EVENT, ...closeEvents],
    inputId: `${id}__SearchMenu__Input`,
    menuId: `${id}__SearchMenu__Menu`,
  })

  const handleFoldButtonClick = () => {
    setMobileInvibility(current => {
      return !current
    })
  }

  useEffect(() => {
    if (isMobileInvisible) {
      closeDropdown()
    } else {
      // Wait 5ms for the input to appear
      setTimeout(() => {
        dropdownProps?.ref.current?.querySelector('input').focus()
      }, 5)
    }
  }, [isMobileInvisible])

  useEffect(() => {
    buttonElement.current.disabled = !isDropdownExpanded

    if (isDropdownExpanded) {
      dropdownProps?.ref?.current?.querySelector('input').focus()
    } else {
      dropdownProps?.ref?.current?.addEventListener('focusin', handleFocusIn)
    }

    return () => {
      dropdownProps?.ref?.current?.removeEventListener('focusin', handleFocusIn)
    }
  }, [isDropdownExpanded])

  const handleFocusIn = () => {
    if (dropdownProps?.ref.current?.querySelector('input').value.length > 0) {
      openDropdown()
    }
  }

  useEffect(() => {
    onMenuToggle({ isDropdownExpanded })
  }, [isDropdownExpanded])

  const handleInputChange = event => {
    inputProps.onChange(event)
    searchInputProps.onChange(event)
  }

  const handleKeyDown = event => {
    if (!isDropdownExpanded) return
    const arrowKeys = ['ArrowDown', 'ArrowUp']
    if (!arrowKeys.includes(event.key)) return

    const wrapper = event.target.closest('form.k-HeaderNav__searchInput')
    const focusableElements = Array.from(
      wrapper.querySelectorAll(
        '.k-HeaderNav__floatingDropdown button, .k-HeaderNav__floatingDropdown a, input',
      ),
    )
    const focusedElementIndex = focusableElements.findIndex(
      el => el === document.activeElement,
    )

    let destination = 0

    if (
      event.key === 'ArrowDown' &&
      focusedElementIndex < focusableElements.length - 1
    ) {
      destination = focusedElementIndex + 1
    }

    if (event.key === 'ArrowUp' && focusedElementIndex > 0) {
      destination = focusedElementIndex - 1
    }

    event.preventDefault()
    focusableElements[destination].focus()
  }

  return (
    <form
      {...props}
      {...dropdownProps}
      className={classNames(
        'k-HeaderNav__searchInput',
        className,
        dropdownProps.className,
        {
          'k-HeaderNav__searchInput--mobileInvisible': isMobileInvisible,
        },
      )}
      onKeyDown={handleKeyDown}
    >
      <TextInputWithButton
        size="small"
        rounded
        buttonValue={<SearchIcon />}
        buttonProps={{ ...searchButtonProps, ref: buttonElement }}
        autoComplete="off"
        inset
        {...searchInputProps}
        {...inputProps}
        onChange={handleInputChange}
        className={classNames(
          'k-HeaderNav__searchInput__input',
          searchInputProps.className,
        )}
      />
      {isMobileInvisible ? (
        <Button
          fit="icon"
          size="small"
          rounded
          onClick={handleFoldButtonClick}
          className="k-u-hidden@m-up"
        >
          <SearchIcon />
          <span className="k-u-a11y-visuallyHidden">{a11yMobileOpen}</span>
        </Button>
      ) : (
        <button
          className="k-u-reset-button k-HeaderNav__searchInput__mobileFold"
          onClick={handleFoldButtonClick}
        >
          <CrossIcon size="large" />
          <span className="k-u-a11y-visuallyHidden">{a11yMobileClose}</span>
        </button>
      )}

      <div
        {...menuProps}
        className={classNames(
          'k-HeaderNav__floatingDropdown',
          menuProps.className,
          {
            'k-HeaderNav__floatingDropdown--isExpanded': isDropdownExpanded,
          },
        )}
      >
        {isDropdownExpanded && children}
      </div>
    </form>
  )
}

SearchInput.propTypes = {
  searchInputProps: PropTypes.object,
  searchButtonProps: PropTypes.object,
  onMenuToggle: PropTypes.func,
  closeEvents: PropTypes.array,
  a11yMobileOpen: PropTypes.node,
  a11yMobileClose: PropTypes.node,
}
