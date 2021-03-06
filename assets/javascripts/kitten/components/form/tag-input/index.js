import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { CrossIcon } from '../../../components/icons/cross-icon'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${stepToRem(-1)};
  box-sizing: border-box;
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-radius: 0;
  width: 100%;
  border-color: ${COLORS.line1};
  padding: var(--tagInput-padding-vertical, ${pxToRem(10)})
    var(--tagInput-padding-horizontal, ${pxToRem(10)});

  .k-Form-TagList__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(8)};
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .k-Form-TagList__item {
    padding: 0;
    margin: 0;
    order: 1;
    max-width: 100%;
    overflow: hidden;
  }
  .k-Form-TagList__inputItem {
    flex: 1 0 auto;
    order: 2;

    &:last-of-type .k-Form-TagList__input:empty::before {
      content: attr(aria-placeholder);
    }
  }
  .k-Form-TagList__input {
    width: 100%;
    height: 100%;
    min-width: ${pxToRem(20)};
    display: block;
    line-height: 1;
    padding: ${pxToRem(7)} 0 ${pxToRem(6)};
    ${TYPOGRAPHY.fontStyles.light};
    cursor: text;

    &:empty::before {
      color: ${COLORS.font2};
      content: ' ';
    }

    :focus {
      outline-color: transparent;
    }
  }

  .k-Form-TagList__tagItem {
    display: flex;
    color: ${COLORS.text1};
    background-color: ${COLORS.primary5};
    border-radius: ${pxToRem(4)};
    height: var(--tagInput-tag-height, ${pxToRem(30)});
    align-items: center;
    transition: color 0.2s ease, background-color 0.2s ease;
    cursor: default;

    &:hover {
      background-color: ${COLORS.primary4};
    }
  }

  .k-Form-TagList__tag {
    ${TYPOGRAPHY.fontStyles.regular};
    padding: 0 ${pxToRem(2)} 0.15em ${pxToRem(10)};
    line-height: 1;
  }

  .k-Form-TagList__button {
    ${TYPOGRAPHY.fontStyles.bold};
    border: 0;
    padding: 0;
    background-color: transparent;
    color: inherit;
    padding: 0 ${pxToRem(12)} 0 ${pxToRem(10)};
    align-self: stretch;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(-2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }

  &:focus-within {
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }

  &.k-Form-TagList--disabled {
    cursor: not-allowed;

    .k-Form-TagList__tagItem {
      color: ${COLORS.font2};
      background-color: ${COLORS.line1};
    }

    .k-Form-TagList__tag {
      padding-right: ${pxToRem(8)};
    }
  }

  // Sizes

  &.k-Form-TagList--tiny {
    --tagInput-padding-vertical: ${pxToRem(4)};
    --tagInput-tag-height: ${pxToRem(24)};
    min-height: ${pxToRem(40)};
  }

  &.k-Form-TagList--regular {
    --tagInput-padding-vertical: ${pxToRem(5)};
    min-height: ${pxToRem(50)};
  }

  &.k-Form-TagList--big {
    min-height: ${pxToRem(60)};
    --tagInput-tag-height: ${pxToRem(32)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      min-height: ${pxToRem(70)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Form-TagList--huge {
    min-height: ${pxToRem(70)};
    --tagInput-tag-height: ${pxToRem(36)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      min-height: ${pxToRem(80)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Form-TagList--giant {
    min-height: ${pxToRem(70)};
    --tagInput-tag-height: ${pxToRem(40)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      min-height: ${pxToRem(90)};
      font-size: ${stepToRem(0)};
    }
  }

  // VARIANTS

  &.k-Form-TagList--orion {
    &.k-Form-TagList--tiny,
    &.k-Form-TagList--regular {
      border-radius: ${pxToRem(4)};
    }

    &.k-Form-TagList--big,
    &.k-Form-TagList--huge,
    &.k-Form-TagList--giant {
      border-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        --tagInput-padding-horizontal: ${pxToRem(30)};
        border-radius: ${pxToRem(8)};
        font-size: ${stepToRem(0)};
      }
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
  initialItemsList,
  helpMessage,
  disabled,
  size,
  variant,
}) => {
  const [itemsList, setItemList] = useState([...initialItemsList])
  const [lastRemoved, setLastRemoved] = useState(null)
  const inputEl = useRef(null)

  const focusInputEl = () => !disabled && inputEl?.current?.focus()

  const addValueToList = value => {
    setItemList(currentList => [...currentList, value])
  }

  const removeLastValueFromList = () => {
    setLastRemoved(itemsList[itemsList.length - 1])
    setItemList(currentList => currentList.slice(0, -1))
  }

  const removeValueFromList = value => {
    setLastRemoved(value)
    setItemList(currentList => currentList.filter(item => item !== value))
  }

  const undoRemove = () => {
    lastRemoved && addValueToList(lastRemoved)
    setLastRemoved(null)
  }

  useEffect(() => {
    onChange(itemsList)
  }, [itemsList])

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
    <StyledWrapper
      className={classNames(
        'k-Form-TagList',
        className,
        `k-Form-TagList--${size}`,
        `k-Form-TagList--${variant}`,
        {
          'k-Form-TagList--disabled': disabled,
        },
      )}
      onClick={focusInputEl}
    >
      <p className="k-u-a11y-visuallyHidden" id={`${id}-legend`}>
        {helpMessage}
      </p>
      <ul className="k-Form-TagList__list">
        {!disabled && (
          <li className="k-Form-TagList__item k-Form-TagList__inputItem">
            <span
              ref={inputEl}
              id={id}
              contentEditable
              role="textbox"
              aria-describedby={`${id}-legend`}
              aria-placeholder={placeholder}
              onKeyDown={onKeyDown}
              className="k-Form-TagList__input"
            />
          </li>
        )}
        {itemsList.map(item => {
          return (
            <li
              key={item}
              className="k-Form-TagList__item k-Form-TagList__tagItem"
            >
              <span className="k-Form-TagList__tag">{item}</span>
              {!disabled && (
                <button
                  className="k-Form-TagList__button"
                  type="button"
                  onClick={() => removeValueFromList(item)}
                >
                  <span className="k-u-a11y-visuallyHidden">
                    Retirer {item} de la liste.
                  </span>
                  <CrossIcon color="currentColor" />
                </button>
              )}
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
        {itemsList.map(item => {
          return <li key={`visuallyHidden-${item}`}>{item}</li>
        })}
      </ul>
    </StyledWrapper>
  )
}

TagInput.defaultProps = {
  initialItemsList: [],
  addEventKeys: ['Enter', ','],
  removeEventKeys: ['Backspace'],
  placeholder: '',
  onChange: () => {},
  disabled: false,
  size: 'regular',
  variant: 'andromeda',
}

TagInput.propTypes = {
  id: PropTypes.string.isRequired,
  initialItemsList: PropTypes.arrayOf(PropTypes.string),
  addEventKeys: PropTypes.arrayOf(PropTypes.string),
  removeEventKeys: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  helpMessage: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}
