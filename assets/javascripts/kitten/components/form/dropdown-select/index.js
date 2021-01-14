import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelect } from 'downshift'
import { Label } from '../../../components/form/label'
import classNames from 'classnames'
import { WarningCircleIcon } from '../../../components/icons/warning-circle-icon'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import find from 'lodash/fp/find'
import { DropdownCombobox } from './combobox'
import { StyledDropdown } from './styles'
import COLORS from '../../../constants/colors-config'

export const DropdownSelect = ({ combobox, ...props }) => {
  if (combobox) return <DropdownCombobox {...props} />

  const {
    labelText,
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
    menuZIndex,
  } = props

  const getA11ySelectionMessage = ({ itemToString, selectedItem }) => {
    return a11ySelectionMessageDisplayer(itemToString(selectedItem))
  }

  const itemToString = item => (item ? String(item.label) : '')

  const initialSelectedItem = find(['value', defaultSelectedValue])(options)

  const onSelectedItemChange = changes => {
    onChange(changes.selectedItem)
    onInputChange({ value: changes.selectedItem })
  }

  // Turns a hierarchy of options with `children` into a flat array
  // of options with a `level` of 1, 2 or null.
  const flattenedOptions = () => {
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

    return flatOptions
  }

  const onIsOpenChange = changes => {
    if (changes.isOpen) return onMenuOpen({ changes })

    return onMenuClose({ changes })
  }

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    id: `${id}_element`,
    toggleButtonId: id,
    items: flattenedOptions(),
    getA11ySelectionMessage,
    itemToString,
    initialSelectedItem,
    onSelectedItemChange,
    onIsOpenChange,
    initialIsOpen: openOnLoad,
  })

  useEffect(() => {
    getLabelProps && labelPropsGetter(getLabelProps)
  }, [getLabelProps])

  return (
    <StyledDropdown
      className={classNames(
        'k-Form-Dropdown',
        `k-Form-Dropdown--${variant}`,
        `k-Form-Dropdown--${size}`,
        {
          'k-Form-Dropdown--isOpen': isOpen,
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
      <button
        className="k-Form-DropdownSelect__button"
        type="button"
        disabled={disabled}
        value={selectedItem ? selectedItem.value : null}
        {...getToggleButtonProps()}
      >
        {selectedItem ? (
          <span className="k-Form-DropdownSelect__content">
            {selectedItem.label}
          </span>
        ) : (
          <span className="k-Form-DropdownSelect__content k-Form-DropdownSelect__placeholder">
            {placeholder}
          </span>
        )}
        <span className="k-Form-DropdownSelect__button__arrowBox" aria-hidden>
          <ArrowIcon direction={isOpen ? 'top' : 'bottom'} />
        </span>
        <span className="k-Form-DropdownSelect__button__statusBadges">
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
      </button>
      <ul className="k-Form-Dropdown__list" {...getMenuProps()}>
        {isOpen &&
          flattenedOptions().map((item, index) => (
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
          ))}
      </ul>
    </StyledDropdown>
  )
}

DropdownSelect.defaultProps = {
  combobox: false,
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
  uniqLabelOnSearch: false,
  menuZIndex: 1000,
}

DropdownSelect.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  combobox: PropTypes.bool,
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
  uniqLabelOnSearch: PropTypes.bool,
  menuZIndex: PropTypes.number,
}
