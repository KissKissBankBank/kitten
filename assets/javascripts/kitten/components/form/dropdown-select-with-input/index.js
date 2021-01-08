import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelect } from 'downshift'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { Label } from '../../../components/form/label'
import classNames from 'classnames'
import { WarningCircleIcon } from '../../../components/icons/warning-circle-icon'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import find from 'lodash/fp/find'

const StyledDropdownSelectWithInput = styled.div`
  position: relative;

  .k-Form-DropdownSelectWithInput__container {
    display: flex;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 0 ${pxToRem(10 + 10)} 0 0;
    margin: 0;
    border: ${pxToRem(2)} solid ${COLORS.line1};
    background-color: ${COLORS.background1};
    font-size: ${stepToRem(-1)};

    height: ${pxToRem(60)};
    border-radius: ${pxToRem(6)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      height: ${pxToRem(70)};
      border-radius: ${pxToRem(8)};
    }
  }


  .k-Form-DropdownSelectWithInput__label--isHidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .k-Form-DropdownSelectWithInput__button {
    appearance: none;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;

    flex: 1 0 100%;
  }

  .k-Form-DropdownSelectWithInput__content {
    display: flex;
    align-items: center;
    ${TYPOGRAPHY.fontStyles.light}
    color: ${COLORS.font1};
    margin: 0 ${pxToRem(15)} 0 ${pxToRem(40)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin-left: ${pxToRem(60)};
    }
  }

  .k-Form-DropdownSelectWithInput__content--selectedItem {
    background: ${COLORS.primary5};
    border-radius: ${pxToRem(4)};
    padding: 0 ${pxToRem(15)};
    height: ${pxToRem(46)};
  }

  .k-Form-DropdownSelectWithInput__placeholder {
    font-size: ${stepToRem(0)};
    color: ${COLORS.font2};
  }

  .k-Form-DropdownSelectWithInput__content__icon {
    margin-right: ${pxToRem(15)};
    display: flex;
    align-items: center;

    svg {
      display: block;
      max-width: ${pxToRem(17)};
      max-height: ${pxToRem(17)};
    }

    svg[fill], svg [fill] {
      fill: currentColor;
    }
    svg[stroke], svg [stroke] {
      stroke: currentColor;
    }
  }

  .k-Form-DropdownSelectWithInput__button__arrowBox {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${pxToRem(20)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      left: ${pxToRem(30)};
    }
  }

  .k-Form-DropdownSelectWithInput__button__statusBadges {
    position: absolute;
    top: 0;
    right: ${pxToRem(40 + 10)};
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;

    right: ${pxToRem(10)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      right: ${pxToRem(20)};
    }

    svg {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
    }
  }

  .k-Form-DropdownSelectWithInput__input {
    display: none;
    ${TYPOGRAPHY.fontStyles.light}
    color: ${COLORS.font1};
    font-size: ${stepToRem(0)};
    appearance: none;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  .k-Form-DropdownSelectWithInput__list {
    box-sizing: border-box;
    position: absolute;
    z-index: 1000;
    z-index: var(--menu-z-index, 1000);
    width: 100%;
    max-height: ${pxToRem(310)};
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    background-color: ${COLORS.background1};
    list-style: none;
    box-shadow: 0 ${pxToRem(5)} ${pxToRem(5)} 0 rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: ${pxToRem(6)};
    border-bottom-right-radius: ${pxToRem(6)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      border-bottom-left-radius: ${pxToRem(8)};
      border-bottom-right-radius: ${pxToRem(8)};
    }

    &:not(:empty) {
      border: ${pxToRem(2)} solid ${COLORS.line1};
      border-top: 0;
    }
    &:focus {
      outline: none;
    }
  }

  .k-Form-DropdownSelectWithInput__item {
    display: flex;
    align-items: center;
    transition: background-color .2s ease;
    box-sizing: border-box;
    padding: ${pxToRem(15)};
    color: ${COLORS.font1};
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};
    user-select: none;
    min-height: ${pxToRem(40)};
    padding-top: ${pxToRem(8)};
    padding-bottom: ${pxToRem(8)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      min-height: ${pxToRem(50)};
    }

    &[aria-selected="true"] {
      background-color: ${COLORS.background3};
    }

    &[disabled] {
      color: ${COLORS.font2};
    }
  }

  .k-Form-DropdownSelectWithInput__item__icon {
    margin-right: ${pxToRem(20)};
    min-width: ${pxToRem(20)};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: block;
      max-width:100%;
    }
  }

  .k-Form-DropdownSelectWithInput__separator {
    height: ${pxToRem(2)};
    background-color: ${COLORS.line1};
  }

  &:focus-within {
    .k-Form-DropdownSelectWithInput__container,
    .k-Form-DropdownSelectWithInput__list {
      border-color: ${COLORS.line2};
    }

    button, input {
      outline: none;
    }
  }

  &.k-Form-DropdownSelectWithInput--error .k-Form-DropdownSelectWithInput__input,
  &.k-Form-DropdownSelectWithInput--valid .k-Form-DropdownSelectWithInput__input {
    padding-right: ${pxToRem(24 + 10)};
  }

  &.k-Form-DropdownSelectWithInput--error {
    .k-Form-DropdownSelectWithInput__container,
    .k-Form-DropdownSelectWithInput__list {
      border-color: ${COLORS.error3};
    }
  }
  &.k-Form-DropdownSelectWithInput--valid {
    .k-Form-DropdownSelectWithInput__container,
    .k-Form-DropdownSelectWithInput__list {
      border-color: ${COLORS.tertiary2};
    }
  }
  &.k-Form-DropdownSelectWithInput--disabled {
    .k-Form-DropdownSelectWithInput__container,
    .k-Form-DropdownSelectWithInput__list {
      background-color: ${COLORS.line1};
      border-color: ${COLORS.line2};
    }
    .k-Form-DropdownSelectWithInput__button__arrowBox svg {
      fill: ${COLORS.font2};
    }
    .k-Form-DropdownSelectWithInput__content,
    .k-Form-DropdownSelectWithInput__input {
      color: ${COLORS.font2};
    }
    .k-Form-DropdownSelectWithInput__content--selectedItem {
      background-color: ${COLORS.line2};
      color: ${COLORS.background1};
    }
  }

  &.k-Form-DropdownSelectWithInput--isOpen {
    .k-Form-DropdownSelectWithInput__container{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.k-Form-DropdownSelectWithInput--hasItemSelected {
    .k-Form-DropdownSelectWithInput__button {
      flex: 0 0 auto;
    }

    .k-Form-DropdownSelectWithInput__input {
      flex: 1 0 auto;
      display: inline-block;
    }
  }

  &.k-Form-DropdownSelectWithInput--noDropdown {
    .k-Form-DropdownSelectWithInput__content {
      margin: 0 ${pxToRem(10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-left: ${pxToRem(10)};
      }
    }
  }
`

export const DropdownSelectWithInput = ({
  labelText,
  options,
  placeholder,
  inputPlaceholder,
  labelPropsGetter,
  error,
  valid,
  disabled,
  hideLabel,
  id,
  a11yStatusError,
  a11yStatusValid,
  a11ySelectionMessageDisplayer,
  defaultSelectedValue,
  onChange,
  onInputChange,
  toggleButtonProps,
  inputProps,
  resetOnBackspace,
  highlightOptionBox,
  openOnLoad,
  deactivateDropdown,
  className,
  menuZIndex,
}) => {
  const getA11ySelectionMessage = ({ itemToString, selectedItem }) => {
    return a11ySelectionMessageDisplayer(itemToString(selectedItem))
  }

  const inputEl = useRef(inputEl)

  const itemToString = item => (item ? String(item.label) : '')

  const onSelectedItemChange = changes => {
    onChange(changes.selectedItem)
    onInputChange({
      selectValue: changes.selectedItem,
      inputValue: inputEl.value,
    })
  }

  const onIsOpenChange = changes => {
    if (!changes.isOpen) {
      inputEl && inputEl.current && inputEl.current.focus()
    }
  }

  const handleInputChange = event => {
    onInputChange({ selectValue: selectedItem, inputValue: event.target.value })
  }

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useSelect({
    id: `${id}_element`,
    toggleButtonId: id,
    items: options,
    getA11ySelectionMessage,
    itemToString,
    onSelectedItemChange,
    onIsOpenChange,
    initialIsOpen: openOnLoad,
  })

  useEffect(() => {
    if (!defaultSelectedValue) return

    const initialSelectedItem = find(['value', defaultSelectedValue])(options)
    selectItem(initialSelectedItem)
  }, [defaultSelectedValue])

  useEffect(() => {
    getLabelProps && labelPropsGetter(getLabelProps)
  }, [getLabelProps])

  const handleInputKeydown = event => {
    if (!resetOnBackspace || deactivateDropdown) return

    if (inputEl.current.value === '' && event.key === 'Backspace') {
      // Prevent history.back()
      event.preventDefault()

      selectItem(null)

      // Because we ca’t access to the ref
      const buttonElement = document.getElementById(id)
      buttonElement.focus()
    }
  }

  return (
    <StyledDropdownSelectWithInput
      className={classNames('k-Form-DropdownSelectWithInput', className, {
        'k-Form-DropdownSelectWithInput--isOpen': isOpen,
        'k-Form-DropdownSelectWithInput--hasItemSelected': !!selectedItem,
        'k-Form-DropdownSelectWithInput--error': error,
        'k-Form-DropdownSelectWithInput--valid': valid,
        'k-Form-DropdownSelectWithInput--disabled': disabled,
        'k-Form-DropdownSelectWithInput--noDropdown': deactivateDropdown,
      })}
      style={{ '--menu-z-index': menuZIndex }}
    >
      <Label
        className={classNames(
          'k-Form-DropdownSelectWithInput__label',
          'k-u-margin-bottom-single',
          {
            'k-Form-DropdownSelectWithInput__label--isHidden': hideLabel,
          },
        )}
        {...getLabelProps()}
      >
        {labelText}
      </Label>
      <div
        className="k-Form-DropdownSelectWithInput__container"
        onKeyDown={handleInputKeydown}
      >
        <button
          className="k-Form-DropdownSelectWithInput__button"
          type="button"
          value={selectedItem ? selectedItem.value : null}
          {...toggleButtonProps}
          {...getToggleButtonProps()}
          disabled={disabled || deactivateDropdown}
        >
          {selectedItem ? (
            <span
              className={classNames('k-Form-DropdownSelectWithInput__content', {
                'k-Form-DropdownSelectWithInput__content--selectedItem': highlightOptionBox,
              })}
            >
              {selectedItem.icon && (
                <span
                  className="k-Form-DropdownSelectWithInput__content__icon"
                  aria-hidden
                >
                  {selectedItem.icon}
                </span>
              )}
              {selectedItem.labelSelected || selectedItem.label}
            </span>
          ) : (
            <span className="k-Form-DropdownSelectWithInput__content k-Form-DropdownSelectWithInput__placeholder">
              {placeholder}
            </span>
          )}
          {!deactivateDropdown && (
            <span
              className="k-Form-DropdownSelectWithInput__button__arrowBox"
              aria-hidden
            >
              <ArrowIcon
                version="solid"
                direction={isOpen ? 'top' : 'bottom'}
              />
            </span>
          )}
          <span className="k-Form-DropdownSelectWithInput__button__statusBadges">
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

        <input
          ref={inputEl}
          type="text"
          className="k-Form-DropdownSelectWithInput__input"
          placeholder={inputPlaceholder}
          disabled={disabled}
          id={`${id}_element-input`}
          aria-labelledby={`${id}_element-label ${id}`}
          onChange={handleInputChange}
          {...inputProps}
        />
      </div>
      <ul className="k-Form-DropdownSelectWithInput__list" {...getMenuProps()}>
        {isOpen &&
          !deactivateDropdown &&
          options.map((item, index) => {
            if (item.separator)
              return (
                <li
                  key={`separator${index}`}
                  className="k-Form-DropdownSelectWithInput__separator"
                  aria-hidden
                  {...getItemProps({ item, index, disabled: true })}
                />
              )

            return (
              <li
                className={classNames('k-Form-DropdownSelectWithInput__item', {
                  'k-Form-DropdownSelectWithInput__item--separator':
                    item.separator,
                  'k-Form-DropdownSelectWithInput__item--higlighted':
                    highlightedIndex === index,
                })}
                key={`${item.value}${index}`}
                disabled={item.disabled}
                {...getItemProps({ item, index, disabled: item.disabled })}
              >
                {item.icon && (
                  <span
                    className="k-Form-DropdownSelectWithInput__item__icon"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                )}
                {item.labelInList || item.label}
              </li>
            )
          })}
      </ul>
    </StyledDropdownSelectWithInput>
  )
}

DropdownSelectWithInput.defaultProps = {
  hideLabel: false,
  options: [],
  placeholder: 'Select',
  inputPlaceholder: 'kisskissbankbank',
  labelPropsGetter: () => {},
  a11yStatusError: 'Error',
  a11yStatusValid: 'Valid',
  a11ySelectionMessageDisplayer: () => {},
  onChange: () => {},
  onInputChange: () => {},
  toggleButtonProps: {},
  inputProps: {},
  resetOnBackspace: false,
  highlightOptionBox: true,
  openOnLoad: false,
  deactivateDropdown: false,
  menuZIndex: 1000,
}

DropdownSelectWithInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  labelPropsGetter: PropTypes.func,
  a11yStatusError: PropTypes.string,
  a11yStatusValid: PropTypes.string,
  a11ySelectionMessageDisplayer: PropTypes.func,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  toggleButtonProps: PropTypes.object,
  inputProps: PropTypes.object,
  resetOnBackspace: PropTypes.bool,
  highlightOptionBox: PropTypes.bool,
  openOnLoad: PropTypes.bool,
  deactivateDropdown: PropTypes.bool,
  menuZIndex: PropTypes.number,
}
