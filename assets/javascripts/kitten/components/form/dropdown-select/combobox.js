import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useCombobox } from 'downshift'
import COLORS from '../../../constants/colors-config'
import { Label } from '../label'
import classNames from 'classnames'
import { WarningCircleIcon } from '../../icons/warning-circle-icon'
import { CheckedCircleIcon } from '../../icons/checked-circle-icon'
import { ArrowIcon } from '../../icons/arrow-icon'
import find from 'lodash/fp/find'
import flow from 'lodash/fp/flow'
import uniqBy from 'lodash/fp/uniqBy'
import filter from 'lodash/fp/filter'
import isEmpty from 'lodash/isEmpty'
import isObject from 'lodash/fp/isObject'
import { StyledDropdown } from './styles'

const getLabelToFilter = item => {
  if (item.searchableLabel || isObject(item.label)) {
    return item.searchableLabel || ''
  }
  return item.label || ''
}

export const DropdownCombobox = ({
  labelText,
  comboboxButtonLabelText,
  noResultText,
  options,
  placeholder,
  labelPropsGetter,
  error,
  valid,
  disabled,
  hideLabel,
  id,
  variant,
  size,
  a11yStatusError,
  a11yStatusValid,
  a11ySelectionMessageDisplayer,
  defaultSelectedValue,
  onChange,
  onInputChange,
  onMenuClose,
  onMenuOpen,
  openOnLoad,
  uniqLabelOnSearch,
  menuZIndex,
}) => {
  const [flattenedOptions, setFlattenedOptions] = useState([])
  const [filteredOptions, setFilteredOptions] = useState([])

  const getA11ySelectionMessage = ({ itemToString, selectedItem }) => {
    return a11ySelectionMessageDisplayer(itemToString(selectedItem))
  }

  const itemToString = item => (item ? String(item.label) : '')

  const initialSelectedItem = find(['value', defaultSelectedValue])(options)

  const onSelectedItemChange = changes => {
    onChange(changes.selectedItem)
    onInputChange({ value: changes.selectedItem, changes })
  }

  const onInputValueChange = changes => {
    const newItemsList = flow(
      filter(item => {
        const label = getLabelToFilter(item)
        return label.toLowerCase().startsWith(changes.inputValue.toLowerCase())
      }),
      !isEmpty(changes.inputValue) && uniqLabelOnSearch
        ? uniqBy('label')
        : item => item,
    )(flattenedOptions)

    setFilteredOptions(newItemsList)
    onInputChange({ value: changes.inputValue, changes })
  }

  const onIsOpenChange = changes => {
    if (changes.isOpen) {
      flattenedOptions && setFilteredOptions(flattenedOptions)
      return onMenuOpen({ changes })
    }

    return onMenuClose({
      changes,
      hasNoResult: filteredOptions.length === 0,
    })
  }

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getComboboxProps,
    getInputProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    openMenu,
  } = useCombobox({
    id: `${id}_element`,
    inputId: id,
    items: filteredOptions,
    getA11ySelectionMessage,
    itemToString,
    initialSelectedItem,
    onSelectedItemChange,
    onInputValueChange,
    onIsOpenChange,
    initialIsOpen: openOnLoad,
  })

  useEffect(() => {
    getLabelProps && labelPropsGetter(getLabelProps)
  }, [getLabelProps])

  useEffect(() => {
    flattenedOptions && setFilteredOptions(flattenedOptions)
  }, [flattenedOptions])

  useEffect(() => {
    // Turns a hierarchy of options with `children` into a flat array
    // of options with a `level` of 1, 2 or null.
    const flatOptions = []

    options.map(option => {
      if (option.children) {
        option.level = 1
        flatOptions.push(option)

        option.children.map(opt => {
          opt.level = 2
          flatOptions.push(opt)
        })
      } else {
        flatOptions.push(option)
      }
    })
    setFlattenedOptions(flatOptions)
  }, [options])

  return (
    <StyledDropdown
      className={classNames(
        'k-Form-Dropdown',
        `k-Form-Dropdown--${variant}`,
        `k-Form-Dropdown--${size}`,
        {
          'k-Form-Dropdown--isOpen': isOpen > 0,
          'k-Form-Dropdown--error': error,
          'k-Form-Dropdown--valid': valid,
          'k-Form-Dropdown--disabled': disabled,
        },
      )}
      style={{ '--menu-z-index': menuZIndex }}
    >
      <Label
        className={classNames(
          'k-Form-Dropdown__label',
          'k-u-margin-bottom-single',
          {
            'k-Form-Dropdown__label--isHidden': hideLabel,
          },
        )}
        {...getLabelProps()}
      >
        {labelText}
      </Label>
      <div className="k-Form-DropdownCombobox" {...getComboboxProps()}>
        <input
          className="k-Form-DropdownCombobox__input"
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => !isOpen && openMenu()}
          onClick={() => !isOpen && openMenu()}
          {...getInputProps()}
        />
        <button
          className="k-Form-DropdownCombobox__arrowButton"
          type="button"
          aria-label={comboboxButtonLabelText}
          disabled={disabled}
          {...getToggleButtonProps()}
        >
          <span
            className="k-Form-DropdownCombobox__arrowButton__arrowBox"
            aria-hidden
          >
            <ArrowIcon direction={isOpen ? 'top' : 'bottom'} />
          </span>
        </button>
        <span className="k-Form-DropdownCombobox__statusBadges">
          {error && (
            <WarningCircleIcon
              color={COLORS.background1}
              bgColor={COLORS.error}
              aria-label={a11yStatusError}
            />
          )}
          {valid && (
            <CheckedCircleIcon
              color={COLORS.background1}
              bgColor={COLORS.valid}
              aria-label={a11yStatusValid}
            />
          )}
        </span>
      </div>
      <ul className="k-Form-Dropdown__list" {...getMenuProps()}>
        {isOpen &&
          (filteredOptions.length > 0 ? (
            filteredOptions.map((item, index) => (
              <li
                className={classNames(
                  'k-Form-Dropdown__item',
                  `k-Form-Dropdown__item--level_${item.level || 1}`,
                  {
                    'k-Form-Dropdown__item--higlighted':
                      highlightedIndex === index,
                  },
                )}
                key={`${item.value}${index}`}
                disabled={item.disabled}
                {...getItemProps({ item, index, disabled: item.disabled })}
              >
                {item.label}
              </li>
            ))
          ) : (
            <li className="k-Form-Dropdown__item" disabled>
              {noResultText}
            </li>
          ))}
      </ul>
    </StyledDropdown>
  )
}

DropdownCombobox.defaultProps = {
  hideLabel: false,
  options: [],
  placeholder: 'Select',
  labelPropsGetter: () => {},
  variant: 'andromeda',
  size: 'normal',
  a11yStatusError: 'Error',
  a11yStatusValid: 'Valid',
  a11ySelectionMessageDisplayer: item => `${item} is now selected.`,
  onChange: () => {},
  onInputChange: () => {},
  onMenuClose: () => {},
  onMenuOpen: () => {},
  openOnLoad: false,
  menuZIndex: 1000,
}

DropdownCombobox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  comboboxButtonLabelText: PropTypes.string.isRequired,
  noResultText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  labelPropsGetter: PropTypes.func,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge', 'giant']),
  a11yStatusError: PropTypes.string,
  a11yStatusValid: PropTypes.string,
  a11ySelectionMessageDisplayer: PropTypes.func,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  onMenuClose: PropTypes.func,
  onMenuOpen: PropTypes.func,
  openOnLoad: PropTypes.bool,
  menuZIndex: PropTypes.number,
}
