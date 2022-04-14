import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/fp/isFunction'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import slugify from 'slugify'
import { Loader } from '../../graphics/animations/loader'
import classNames from 'classnames'

const itemHeight = 38
const maxItemsVisibled = 3
const borderSize = 'var(--border-width)'

const Wrapper = styled.div`
  display: flex;
  position: relative;

  .k-Form-Autocomplete__input {
    display: block;
    width: 100%;
    height: ${pxToRem(50)};
    box-sizing: border-box;
    border-radius: var(--border-radius-s);

    background: ${COLORS.background1};
    border: ${borderSize} solid var(--color-grey-400);
    padding: 0 ${pxToRem(15)};

    ${TYPOGRAPHY.fontStyles.light};
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    color: ${COLORS.font1};

    transition: border-color 0.4s;

    ::placeholder {
      color: ${COLORS.font2};
    }

    ::-moz-placeholder {
      color: ${COLORS.font2};
    }

    &:focus {
      border-color: var(--color-grey-500);
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }
  }
  &.k-Form-Autocomplete--error .k-Form-Autocomplete__input {
    border: var(--border-danger);
    color: ${COLORS.error3};

    :focus {
      border-color: var(--color-grey-500);
      color: ${COLORS.font1};
    }
  }

  .k-Form-Autocomplete__loader {
    display: flex;
    position: absolute;
    align-self: center;
    padding: 0 ${pxToRem(18)};
    z-index: 1;
    right: 0;
  }

  .k-Form-Autocomplete__icon {
    display: flex;
    position: absolute;
    align-self: center;
    padding: 0 ${pxToRem(18)};
    z-index: 1;
  }

  .k-Form-Autocomplete__suggestions {
    position: absolute;
    top: ${pxToRem(60)};
    left: 0;
    right: 0;
    overflow-y: auto;
    margin: 0;
    padding: 0;

    background: ${COLORS.background1};
    border: ${borderSize} solid var(--color-grey-400);
    border-radius: var(--border-radius-s);

    list-style: none;

    height: calc(${pxToRem(itemHeight)} * var(--Autocomplete-suggestions, 1));
    max-height: ${pxToRem(itemHeight * maxItemsVisibled)};
  }

  .k-Form-Autocomplete__suggestion__item {
    padding: ${pxToRem(10)} ${pxToRem(15)};

    ${TYPOGRAPHY.fontStyles.light};
    font-size: ${stepToRem(-1)};

    line-height: 1.3;
    color: ${COLORS.font1};

    &.k-Form-Autocomplete__suggestion__item--noresult {
      font-style: italic;
    }
    &:not(.k-Form-Autocomplete__suggestion__item--noresult) {
      cursor: pointer;
      transition: background-color 0.2s;

      :hover,
      :focus,
      :active {
        background-color: ${COLORS.background3};
      }

      &[aria-selected='true'] {
        background-color: ${COLORS.line1};
      }
    }
  }

  /* STATES */

  &.k-Form-Autocomplete--hasIcon-left {
    .k-Form-Autocomplete__input {
      padding-left: ${pxToRem(45)};
    }
    .k-Form-Autocomplete__icon {
      left: 0;
    }
  }

  &.k-Form-Autocomplete--hasIcon-right {
    .k-Form-Autocomplete__input {
      padding-right: ${pxToRem(45)};
    }
    .k-Form-Autocomplete__loader {
      padding-right: ${pxToRem(45)};
    }
    .k-Form-Autocomplete__icon {
      right: 0;
    }
  }

  &.k-Form-Autocomplete--disabled {
    .k-Form-Autocomplete__input {
      border: var(--color-grey-300);
      background-color: var(--color-grey-200);
      color: var(--color-grey-600);
    }

    .k-Form-Autocomplete__icon {
      & > svg [stroke]:not([stroke='none']) {
        stroke: ${COLORS.font2};
      }
      & > svg [fill]:not([fill='none']) {
        fill: ${COLORS.font2};
      }
    }
  }
`

export const Autocomplete = ({
  className,
  items: defaultItems,
  error,
  onChange,
  onBlur,
  onKeyDown,
  onSelect,
  icon,
  iconPosition,
  updateSuggestionsStrategy,
  isLoading,
  noResultMessage,
  shouldShowNoResultMessage,
  ...props
}) => {
  const [items, setItems] = useState(defaultItems)
  const [value, setValue] = useState(props.defaultValue)
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputEl = useRef(null)
  const suggestionsEl = useRef(null)
  const showNoResultMessage = isFunction(shouldShowNoResultMessage)
    ? shouldShowNoResultMessage({ items, value })
    : shouldShowNoResultMessage

  useEffect(() => {
    updateSuggestions()
    setShowSuggestions(!!value)
  }, [value, defaultItems])

  const handleChange = e => {
    setValue(e.target.value)

    onChange(e)
  }

  const handleBlur = e => {
    setTimeout(() => {
      setShowSuggestions(false)
    }, 100)

    onBlur(e)
  }

  const handleKeyDown = e => {
    const enterKeyCode = 13
    const escKeyCode = 27
    const arrowUpKeyCode = 38
    const arrowDownKeyCode = 40

    if (e.keyCode === escKeyCode) setShowSuggestions(false)

    if (showSuggestions) {
      if (e.keyCode === arrowUpKeyCode) {
        e.preventDefault()
        prevSelectedItem()
      }

      if (e.keyCode === arrowDownKeyCode) {
        e.preventDefault()
        nextSelectedItem()
      }

      if (e.keyCode === enterKeyCode) {
        e.preventDefault()

        const selectedValue = items[selectedItemIndex]
        handleClickItem(selectedValue)()
      }
    }

    onKeyDown(e)
  }

  const handleClickItem = value => () => {
    if (!value) return

    inputEl.current.value = value
    inputEl.current.focus()

    setValue(value)
    setShowSuggestions(false)
    onSelect(value)
  }

  const updateSuggestions = () => {
    const search = `${value}`.toLowerCase()

    const newItems = updateSuggestionsStrategy
      ? updateSuggestionsStrategy({ items: defaultItems, value })
      : defaultItems.filter(
          item => item.toLowerCase().includes(search) && item !== value,
        )

    setItems(newItems)
    resetSelectedItem()
  }

  const prevSelectedItem = () => {
    const newIndex = selectedItemIndex - 1

    suggestionsScrollTop(newIndex)
    setSelectedItemIndex(newIndex < 0 ? 0 : newIndex)

    const scrollTop = newIndex * itemHeight
    suggestionsScrollTop(scrollTop)
  }

  const nextSelectedItem = () => {
    const newIndex = selectedItemIndex + 1
    const itemsLength = items.length - 1

    suggestionsScrollTop(newIndex)
    setSelectedItemIndex(newIndex >= itemsLength ? itemsLength : newIndex)

    const scrollTop = (newIndex - maxItemsVisibled + 1) * itemHeight
    suggestionsScrollTop(scrollTop)
  }

  const resetSelectedItem = () => setSelectedItemIndex(-1)

  const suggestionsScrollTop = value => {
    suggestionsEl.current.scrollTop = value > 0 ? value : 0
  }

  return (
    <Wrapper
      className={classNames('k-Form-Autocomplete', className, {
        [`k-Form-Autocomplete--hasIcon-${iconPosition}`]: !!icon,
        'k-Form-Autocomplete--disabled': props.disabled,
        'k-Form-Autocomplete--error': error,
      })}
    >
      <input
        {...props}
        ref={inputEl}
        type="text"
        role="combobox"
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        aria-owns={`${props.name}-results`}
        aria-expanded={showSuggestions ? items.length > 0 : null}
        aria-autocomplete="both"
        aria-activedescendant={
          items[selectedItemIndex]
            ? slugify(`${items[selectedItemIndex]}-${selectedItemIndex}`)
            : ''
        }
        className="k-Form-Autocomplete__input"
      />
      {isLoading && (
        <>
          <Loader
            className="k-Form-Autocomplete__loader"
            color={COLORS.font2}
          />
          <VisuallyHidden lang="en">loading</VisuallyHidden>
        </>
      )}
      {icon && (
        <span className="k-Form-Autocomplete__icon" aria-hidden="true">
          {React.cloneElement(icon, { width: 15, height: 15 })}
        </span>
      )}

      {showSuggestions &&
        items.length === 0 &&
        noResultMessage &&
        showNoResultMessage && (
          <ul
            ref={suggestionsEl}
            id={`${props.name}-results`}
            role="listbox"
            tabIndex="-1"
            style={{ '--Autocomplete-suggestions': '1' }}
            className="k-Form-Autocomplete__suggestions"
          >
            <li
              className="k-Form-Autocomplete__suggestion__item k-Form-Autocomplete__suggestion__item--noresult"
              role="option"
              tabIndex="-1"
            >
              {noResultMessage}
            </li>
          </ul>
        )}

      {showSuggestions && items.length > 0 && (
        <>
          <ul
            ref={suggestionsEl}
            id={`${props.name}-results`}
            role="listbox"
            tabIndex="-1"
            style={{ '--Autocomplete-suggestions': items.length }}
            className="k-Form-Autocomplete__suggestions"
          >
            {items.map((item, index) => (
              <li
                key={item + index}
                id={slugify(`${item}-${index}`)}
                onClick={handleClickItem(item)}
                role="option"
                aria-selected={selectedItemIndex === index}
                tabIndex="-1"
                className="k-Form-Autocomplete__suggestion__item"
              >
                {item}
              </li>
            ))}
          </ul>

          <VisuallyHidden lang="en" aria-live="assertive">
            {items.length} results are available.
          </VisuallyHidden>
        </>
      )}
    </Wrapper>
  )
}

Autocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.bool,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  updateSuggestionsStrategy: PropTypes.func,
  noResultMessage: PropTypes.string,
  shouldShowNoResultMessage: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  isLoading: PropTypes.bool,
}

Autocomplete.defaultProps = {
  error: false,
  shouldShowNoResultMessage: true,
  iconPosition: 'left',
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onSelect: () => {},
  isLoading: false,
}
