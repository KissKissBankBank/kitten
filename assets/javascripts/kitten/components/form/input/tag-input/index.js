import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { CrossIcon } from '../../../graphics/icons/cross-icon'
import { ScreenConfig } from '../../../../constants/screen-config'
import { checkDeprecatedSizes } from '../../../../helpers/utils/deprecated'

export const StyledTagInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${stepToRem(-1)};
  box-sizing: border-box;
  width: 100%;
  border: var(--border);
  transition: border 0.2s ease;
  padding: var(--tagInput-padding-vertical, ${pxToRem(10)})
    var(--tagInput-padding-horizontal, ${pxToRem(10)});
  border-radius: var(--border-radius-s);

  &:focus-within {
    outline: var(--outline-input);
    outline-offset: var(--outline-offset-input);
  }

  &:hover {
    border: var(--border-hover);
  }

  .k-Form-TagInput__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(8)};
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .k-Form-TagInput__item {
    padding: 0;
    margin: 0;
    order: 1;
    max-width: 100%;
    overflow: hidden;
  }
  .k-Form-TagInput__inputItem {
    flex: 1 0 auto;
    order: 2;

    &:last-of-type .k-Form-TagInput__input:empty::before {
      content: attr(aria-placeholder);
    }
  }
  .k-Form-TagInput__input {
    width: 100%;
    height: 100%;
    min-width: ${pxToRem(20)};
    display: block;
    padding: ${pxToRem(7)} 0 ${pxToRem(6)};
    box-sizing: border-box;

    line-height: 1;
    ${TYPOGRAPHY.fontStyles['400']};
    cursor: text;

    &:empty::before {
      color: ${COLORS.font2};
      content: ' ';
    }

    &:focus {
      outline-offset: ${pxToRem(2)};
    }
  }

  .k-Form-TagInput__tagItem {
    display: flex;
    color: ${COLORS.text1};
    background-color: ${COLORS.primary5};
    border-radius: var(--border-radius-s);
    height: var(--tagInput-tag-height, ${pxToRem(30)});
    align-items: center;
    transition: color 0.2s ease, background-color 0.2s ease;
    cursor: default;

    &:hover {
      background-color: ${COLORS.primary4};
    }

    &.k-Form-TagInput__tagItem--disabled {
      color: ${COLORS.font2};
      background-color: ${COLORS.line1};

      .k-Form-TagInput__tag,
      .k-Form-TagInput__button {
        cursor: not-allowed;
      }
    }
  }

  .k-Form-TagInput__tag {
    ${TYPOGRAPHY.fontStyles['500']};
    padding: 0 ${pxToRem(2)} 0.15em ${pxToRem(10)};
    line-height: 1;
  }

  .k-Form-TagInput__button {
    ${TYPOGRAPHY.fontStyles['700']};
    border: 0;
    background-color: transparent;
    color: inherit;
    padding: 0 ${pxToRem(12)} 0 ${pxToRem(10)};
    align-self: stretch;
    display: flex;
    align-items: center;
    cursor: pointer;
    outline-offset: ${pxToRem(-2)};
  }

  &.k-Form-TagInput--disabled {
    cursor: not-allowed;

    .k-Form-TagInput__tagItem {
      color: ${COLORS.font2};
      background-color: ${COLORS.line1};
    }

    .k-Form-TagInput__tag,
    .k-Form-TagInput__button {
      cursor: not-allowed;
    }
  }

  // Sizes

  &.k-Form-TagInput--tiny,
  &.k-Form-TagInput--small {
    --tagInput-padding-vertical: ${pxToRem(5)};
    --tagInput-padding-horizontal: ${pxToRem(8)};
    --tagInput-tag-height: ${pxToRem(26)};
    min-height: ${pxToRem(40)};
  }

  &.k-Form-TagInput--regular,
  &.k-Form-TagInput--medium {
    min-height: ${pxToRem(50)};
  }

  &.k-Form-TagInput--big,
  &.k-Form-TagInput--large {
    min-height: ${pxToRem(60)};
    --tagInput-tag-height: ${pxToRem(32)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      min-height: ${pxToRem(70)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Form-TagInput--huge {
    min-height: ${pxToRem(70)};
    --tagInput-tag-height: ${pxToRem(36)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      min-height: ${pxToRem(80)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Form-TagInput--giant {
    min-height: ${pxToRem(70)};
    --tagInput-tag-height: ${pxToRem(40)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      min-height: ${pxToRem(90)};
      font-size: ${stepToRem(0)};
    }
  }
`

export const TagInput = ({
  placeholder,
  onChange,
  className,
  id,
  addEventKeys,
  removeEventKeys,
  itemsList: itemsListFromProps,
  initialItemsList,
  helpMessage,
  disabled,
  size,
}) => {
  checkDeprecatedSizes(size)

  const [itemsList, setItemsList] = useState(
    Array.from(itemsListFromProps || initialItemsList),
  )
  const [lastRemoved, setLastRemoved] = useState(null)
  const inputEl = useRef(null)

  const focusInputEl = () => !disabled && inputEl?.current?.focus()

  const addValueToList = value => {
    const newList = [...itemsList, value]
    itemsListFromProps ? onChange(newList) : setItemsList(newList)
  }

  const removeLastValueFromList = () => {
    const lastItem = itemsList[itemsList.length - 1]

    if (lastItem.disabled) {
      return
    }

    setLastRemoved(lastItem)
    const newList = Array.from(itemsList.slice(0, -1))
    itemsListFromProps ? onChange(newList) : setItemsList(newList)
  }

  const removeValueFromList = item => {
    const valueToRemove = item?.value || item
    setLastRemoved(valueToRemove)
    const newList = itemsList.filter(item => {
      const itemValue = item?.value || item
      return itemValue !== valueToRemove
    })
    itemsListFromProps ? onChange(Array.from(newList)) : setItemsList(newList)
  }

  const undoRemove = () => {
    lastRemoved && addValueToList(lastRemoved)
    setLastRemoved(null)
  }

  useEffect(() => {
    if (!itemsListFromProps) {
      onChange(itemsList)
    }
  }, [itemsList])

  useEffect(() => {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps)
    }
  }, [itemsListFromProps])

  const onKeyDown = event => {
    if (addEventKeys.includes(event.key)) {
      event.preventDefault()
      const val = event.target.innerText.trim()

      if (val.length === 0) return
      if (itemsList.includes(val)) return

      addValueToList(val)
      event.target.innerText = ''
    }

    if (
      removeEventKeys.includes(event.key) &&
      event.target.innerText.length === 0
    ) {
      event.preventDefault()
      removeLastValueFromList()
    }

    if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
      undoRemove()
    }

    if (event.key.length === 1 || event.key === 'Backspace') {
      event.target.size = event.target.innerText.length + 1
    }
  }

  return (
    <StyledTagInputWrapper
      className={classNames(
        'k-Form-TagInput',
        className,
        `k-Form-TagInput--${size}`,
        {
          'k-Form-TagInput--disabled': disabled,
        },
      )}
      onClick={focusInputEl}
    >
      <p className="k-u-a11y-visuallyHidden" id={`${id}-legend`}>
        {helpMessage}
      </p>
      <ul className="k-Form-TagInput__list">
        {!disabled && (
          <li className="k-Form-TagInput__item k-Form-TagInput__inputItem">
            <span
              ref={inputEl}
              id={id}
              contentEditable
              role="textbox"
              aria-describedby={`${id}-legend`}
              aria-placeholder={placeholder}
              onKeyDown={onKeyDown}
              className="k-Form-TagInput__input"
            />
          </li>
        )}
        {itemsList.map((item, index) => {
          const itemValue = item?.value || item
          const itemDisabled = item?.disabled || false

          return (
            <li
              key={itemValue + index}
              className={classNames(
                'k-Form-TagInput__item k-Form-TagInput__tagItem',
                {
                  'k-Form-TagInput__tagItem--disabled': itemDisabled,
                },
              )}
            >
              <span className="k-Form-TagInput__tag">
                {itemValue}
                {itemDisabled && (
                  <span className="k-u-a11y-visuallyHidden">
                    Élément désactivé.
                  </span>
                )}
              </span>
              <button
                className="k-Form-TagInput__button"
                type="button"
                disabled={itemDisabled || disabled}
                onClick={() => removeValueFromList(item)}
              >
                <span className="k-u-a11y-visuallyHidden">
                  Retirer {itemValue} de la liste.
                </span>
                <CrossIcon color="currentColor" />
              </button>
            </li>
          )
        })}
      </ul>
      <ul
        className="k-u-a11y-visuallyHidden"
        aria-live="polite"
        aria-atomic="true"
        aria-relevant="additions removals"
      >
        {itemsList.map((item, index) => {
          const itemValue = item?.value || item
          return (
            <li key={`visuallyHidden-${itemValue + index}`}>{itemValue}</li>
          )
        })}
      </ul>
    </StyledTagInputWrapper>
  )
}

TagInput.defaultProps = {
  initialItemsList: [],
  itemsList: undefined,
  addEventKeys: ['Enter', ','],
  removeEventKeys: ['Backspace'],
  placeholder: '',
  onChange: () => {},
  disabled: false,
  size: 'medium',
}

TagInput.propTypes = {
  id: PropTypes.string.isRequired,
  initialItemsList: PropTypes.arrayOf(PropTypes.any),
  itemsList: PropTypes.arrayOf(PropTypes.any),
  addEventKeys: PropTypes.arrayOf(PropTypes.string),
  removeEventKeys: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  helpMessage: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
}
