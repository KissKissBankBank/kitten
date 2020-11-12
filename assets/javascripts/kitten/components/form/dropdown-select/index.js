import React, { useEffect } from 'react'
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

const StyledDropdownSelect = styled.div`
  position: relative;

  .k-Form-DropdownSelect__label--isHidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .k-Form-DropdownSelect__button {
    box-sizing: border-box;
    position: relative;
    appearance: none;
    width: 100%;
    height: ${pxToRem(50)};
    overflow: hidden;
    padding: 0 ${pxToRem(40 + 10)} 0 0;
    margin: 0;

    border: ${pxToRem(2)} solid ${COLORS.line1};
    background-color: ${COLORS.background1};

    font-size: ${stepToRem(-1)};
    text-align: left;
    cursor: default;
    outline: none;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .k-Form-DropdownSelect__content {
    ${TYPOGRAPHY.fontStyles.light}
    padding: 0 ${pxToRem(15)};
    color: ${COLORS.font1};
  }
  .k-Form-DropdownSelect__placeholder {
    color: ${COLORS.font2};
  }

  .k-Form-DropdownSelect__button__arrowBox {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .k-Form-DropdownSelect__button__statusBadges {
    position: absolute;
    top: 0;
    right: ${pxToRem(40 + 10)};
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    svg {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
    }
  }

  .k-Form-DropdownSelect__list {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    max-height: ${pxToRem(250)};
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    background-color: ${COLORS.background1};
    list-style: none;


    &:not(:empty) {
      border: ${pxToRem(2)} solid ${COLORS.line1};
      border-top: 0;
    }
    &:focus {
      outline: none;
    }
  }

  .k-Form-DropdownSelect__item {
    transition: background-color .2s ease;
    box-sizing: border-box;
    padding: ${pxToRem(15)};
    min-height: ${pxToRem(50)};
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};
    user-select: none;

    &[aria-selected="true"] {
      background-color: ${COLORS.background3};
    }

    &[disabled] {
      color: ${COLORS.font2};
    }
  }

  &:focus-within {
    .k-Form-DropdownSelect__button,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-DropdownSelect__list {
      border-color: ${COLORS.line2};
    }
  }

  &.k-Form-DropdownSelect--error {
    .k-Form-DropdownSelect__button {
      padding-right: ${pxToRem(40 + 10 + 24 + 10)};
    }

    .k-Form-DropdownSelect__button,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-DropdownSelect__list {
      border-color: ${COLORS.error3};
    }
  }
  &.k-Form-DropdownSelect--valid {
    .k-Form-DropdownSelect__button {
      padding-right: ${pxToRem(40 + 10 + 24 + 10)};
    }

    .k-Form-DropdownSelect__button,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-DropdownSelect__list {
      border-color: ${COLORS.tertiary2};
    }
  }
  &.k-Form-DropdownSelect--disabled {
    .k-Form-DropdownSelect__button,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-DropdownSelect__list {
      background-color: ${COLORS.line1};
      border-color: ${COLORS.line2};
    }
    .k-Form-DropdownSelect__button__arrowBox svg {
      fill: ${COLORS.font2};
    }
    .k-Form-DropdownSelect__content {
      color: ${COLORS.font2};
    }
  }


  /* SIZES */
  &.k-Form-DropdownSelect--andromeda {

    .k-Form-DropdownSelect__button__arrowBox {
      width: ${pxToRem(40)};
      right: 0;
      border-left: inherit;
    }


    &.k-Form-DropdownSelect--tiny {
      .k-Form-DropdownSelect__button {
        height: ${pxToRem(40)};
        padding-right: ${pxToRem(30 + 10)};
      }

      .k-Form-DropdownSelect__button__arrowBox {
        width: ${pxToRem(30)};
      }

      .k-Form-DropdownSelect__button__statusBadges {
        right: ${pxToRem(30 + 10)};

        svg {
          width: ${pxToRem(20)};
          height: ${pxToRem(20)};
        }
      }

      .k-Form-DropdownSelect__item {
        min-height: ${pxToRem(40)};
        padding-top: ${pxToRem(8)};
        padding-bottom: ${pxToRem(8)};
      }

      &.k-Form-DropdownSelect--error .k-Form-DropdownSelect__button,
      &.k-Form-DropdownSelect--valid .k-Form-DropdownSelect__button {
        padding-right: ${pxToRem(30 + 10 + 20 + 10)};
      }
    }

    &.k-Form-DropdownSelect--big {
      @media (min-width: ${ScreenConfig.S.min}px) {
        .k-Form-DropdownSelect__button {
          height: ${pxToRem(60)};
          padding-right: ${pxToRem(50 + 10)};
        }

        .k-Form-DropdownSelect__button__arrowBox {
            width: ${pxToRem(50)};
        }

        .k-Form-DropdownSelect__button__statusBadges {
          right: ${pxToRem(50 + 10)};
        }
        &.k-Form-DropdownSelect--error .k-Form-DropdownSelect__button,
        &.k-Form-DropdownSelect--valid .k-Form-DropdownSelect__button {
          padding-right: ${pxToRem(50 + 10 + 24 + 10)};
        }
      }
    }

    &.k-Form-DropdownSelect--huge,
    &.k-Form-DropdownSelect--giant {
      .k-Form-DropdownSelect__button {
        height: ${pxToRem(70)};
        padding-right: ${pxToRem(50 + 10)};
      }

      .k-Form-DropdownSelect__button__arrowBox {
          width: ${pxToRem(50)};
      }

      .k-Form-DropdownSelect__button__statusBadges {
        right: ${pxToRem(50 + 10)};
      }
      &.k-Form-DropdownSelect--error .k-Form-DropdownSelect__button,
      &.k-Form-DropdownSelect--valid .k-Form-DropdownSelect__button {
        padding-right: ${pxToRem(50 + 10 + 24 + 10)};
      }

      @media (min-width: ${ScreenConfig.S.min}px) {
        .k-Form-DropdownSelect__button {
          padding-right: ${pxToRem(60 + 10)};
        }

        .k-Form-DropdownSelect__button__arrowBox {
            width: ${pxToRem(60)};
        }

        .k-Form-DropdownSelect__button__statusBadges {
          right: ${pxToRem(60 + 10)};
        }
        &.k-Form-DropdownSelect--error .k-Form-DropdownSelect__button,
        &.k-Form-DropdownSelect--valid .k-Form-DropdownSelect__button {
          padding-right: ${pxToRem(60 + 10 + 24 + 10)};
        }

        &.k-Form-DropdownSelect--huge .k-Form-DropdownSelect__button {
            height: ${pxToRem(80)};
        }
        &.k-Form-DropdownSelect--giant .k-Form-DropdownSelect__button {
            height: ${pxToRem(90)};
        }
      }
    }
  }


  /* ORION */

  &.k-Form-DropdownSelect--orion {
    .k-Form-DropdownSelect__button,
    .k-Form-DropdownSelect__button__arrowBox {
      height: ${pxToRem(60)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        height: ${pxToRem(70)};
      }
    }

    .k-Form-DropdownSelect__button {
      border-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        border-radius: ${pxToRem(8)};
      }

      &[aria-expanded="true"] {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    .k-Form-DropdownSelect__button__arrowBox {
      left: ${pxToRem(20)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        left: ${pxToRem(30)};
      }
    }

    .k-Form-DropdownSelect__content {
      margin-left: ${pxToRem(20 + 10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-left: ${pxToRem(30 + 10)};
      }
    }

    .k-Form-DropdownSelect__button__statusBadges {
      right: ${pxToRem(10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        right: ${pxToRem(20)};
      }
    }

    .k-Form-DropdownSelect__list {
      border-bottom-left-radius: ${pxToRem(6)};
      border-bottom-right-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        border-bottom-left-radius: ${pxToRem(8)};
        border-bottom-right-radius: ${pxToRem(8)};
      }
    }
    .k-Form-DropdownSelect__item {
      min-height: ${pxToRem(40)};
      padding-top: ${pxToRem(8)};
      padding-bottom: ${pxToRem(8)};
    }

    &.k-Form-DropdownSelect--error .k-Form-DropdownSelect__button,
    &.k-Form-DropdownSelect--valid .k-Form-DropdownSelect__button {
      padding-right: ${pxToRem(10 + 10 + 24 + 10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        padding-right: ${pxToRem(20 + 10 + 24 + 10)};
      }
    }
  }
`

export const DropdownSelect = ({
  labelText,
  items,
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
  onValueChange,
}) => {
  const getA11ySelectionMessage = ({ itemToString, selectedItem }) => {
    return a11ySelectionMessageDisplayer(itemToString(selectedItem))
  }

  const itemToString = item => (item ? String(item.label) : '')

  const initialSelectedItem = find(['value', defaultSelectedValue])(items)

  const onSelectedItemChange = changes => {
    onChange(changes.selectedItem)
    onValueChange({ value: changes.selectedItem })
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
    items,
    getA11ySelectionMessage,
    itemToString,
    initialSelectedItem,
    onSelectedItemChange,
  })

  useEffect(() => {
    getLabelProps && labelPropsGetter(getLabelProps)
  }, [getLabelProps])

  return (
    <StyledDropdownSelect
      className={classNames(
        'k-Form-DropdownSelect',
        `k-Form-DropdownSelect--${variant}`,
        `k-Form-DropdownSelect--${size}`,
        {
          'k-Form-DropdownSelect--error': error,
          'k-Form-DropdownSelect--valid': valid,
          'k-Form-DropdownSelect--disabled': disabled,
        },
      )}
    >
      <Label
        className={classNames(
          'k-Form-DropdownSelect__label',
          'k-u-margin-bottom-single',
          {
            'k-Form-DropdownSelect__label--isHidden': hideLabel,
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
      <ul className="k-Form-DropdownSelect__list" {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              className={classNames('k-Form-DropdownSelect__item', {
                'k-Form-DropdownSelect__item--higlighted':
                  highlightedIndex === index,
              })}
              key={`${item.value}${index}`}
              disabled={item.disabled}
              {...getItemProps({ item, index, disabled: item.disabled })}
            >
              {item.label}
            </li>
          ))}
      </ul>
    </StyledDropdownSelect>
  )
}

DropdownSelect.defaultProps = {
  hideLabel: false,
  items: [],
  placeholder: 'Select',
  labelPropsGetter: () => {},
  variant: 'andromeda',
  size: 'normal',
  a11yStatusError: 'Error',
  a11yStatusValid: 'Valid',
  a11ySelectionMessageDisplayer: () => {},
  onChange: () => {},
  onValueChange: () => {},
}

DropdownSelect.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  labelPropsGetter: PropTypes.func,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge', 'giant']),
  a11yStatusError: PropTypes.string,
  a11yStatusValid: PropTypes.string,
  a11ySelectionMessageDisplayer: PropTypes.func,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
}
