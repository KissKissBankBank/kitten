import React, { useState, useEffect, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TextInputWithButton } from '../../../../components/form/text-input-with-button'
import { SearchIcon } from '../../../../components/graphics/icons/search-icon'
import { CrossIcon } from '../../../../components/graphics/icons/cross-icon'
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
    >
      <TextInputWithButton
        size="tiny"
        rounded
        buttonValue={<SearchIcon />}
        buttonProps={{...searchButtonProps, ref: buttonElement}}
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
      <button
        className="k-u-reset-button k-HeaderNav__searchInput__mobileFold"
        type="button"
        onClick={handleFoldButtonClick}
      >
        {isMobileInvisible ? <SearchIcon /> : <CrossIcon size="big" />}
      </button>

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
}
