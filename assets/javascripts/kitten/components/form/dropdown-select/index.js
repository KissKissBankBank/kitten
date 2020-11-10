import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelect } from 'downshift'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
//import { ScreenConfig } from '../../../constants/screen-config'
import { Label } from '../../../components/form/label'
import classNames from 'classnames'
import { WarningCircleIcon } from '../../../components/icons/warning-circle-icon'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

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
    width: ${pxToRem(40)};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-left: ${pxToRem(2)} solid ${COLORS.line1};
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
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items })

  useEffect(() => {
    getLabelProps && labelPropsGetter(getLabelProps)
  }, [getLabelProps])

  return (
    <StyledDropdownSelect
      className={classNames('k-Form-DropdownSelect', {
        'k-Form-DropdownSelect--error': error,
        'k-Form-DropdownSelect--valid': valid,
        'k-Form-DropdownSelect--disabled': disabled,
      })}
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
        <span className="k-Form-DropdownSelect__button__arrowBox">
          <ArrowIcon direction={isOpen ? 'top' : 'bottom'} />
        </span>
        <span className="k-Form-DropdownSelect__button__statusBadges">
          {error && (
            <WarningCircleIcon
              color={COLORS.background1}
              bgColor={COLORS.error}
              width="24"
              height="24"
            />
          )}
          {valid && (
            <CheckedCircleIcon
              color={COLORS.background1}
              bgColor={COLORS.valid}
              width="24"
              height="24"
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
  labelText: 'Label',
  hideLabel: false,
  items: [],
  placeholder: 'Select',
  labelPropsGetter: () => {},
}

DropdownSelect.propTypes = {
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  labelPropsGetter: PropTypes.func,
}
