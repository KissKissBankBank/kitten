import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/fp/isFunction'
import isEmpty from 'lodash/fp/isEmpty'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import classNames from 'classnames'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import { VisuallyHidden } from '../../../accessibility/visually-hidden'
import { Loader } from '../../../graphics/animations/loader'

export const maxVisibleSuggestions = 3

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
    border: var(--border-width) solid var(--color-grey-400);
    padding: 0 ${pxToRem(15)};

    ${TYPOGRAPHY.fontStyles['400']};
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

export const StyledSuggestionsList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + ${pxToRem(5)});
  left: ${pxToRem(-1)};
  right: ${pxToRem(-1)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(2)};
  overflow-y: auto;
  margin: 0;
  padding: ${pxToRem(1)};

  background: var(--color-grey-000);
  border: var(--border-width) solid var(--color-grey-400);
  border-radius: var(--border-radius-m);

  list-style: none;

  max-height: calc(
    ${pxToRem(4 + 34 * maxVisibleSuggestions)} +
      (min(2, (var(--Autocomplete-suggestions) - 1)) * ${pxToRem(2)})
  );

  .k-Form-Autocomplete__suggestion__item {
    box-sizing: border-box;
    height: ${pxToRem(34)};
    padding: ${pxToRem(8)} ${pxToRem(13)};
    border-radius: var(--border-radius-s);

    ${TYPOGRAPHY.fontStyles['400']};
    font-size: ${stepToRem(-1)};

    line-height: ${pxToRem(18)};
    color: var(--color-grey-900);

    &.k-Form-Autocomplete__suggestion__item--noresult {
      font-style: italic;
    }
    &:not(.k-Form-Autocomplete__suggestion__item--noresult) {
      cursor: pointer;
      transition: background-color var(--transition);

      :hover,
      :focus,
      :active {
        background-color: var(--color-grey-200);
      }

      &[aria-selected='true'] {
        background-color: var(--color-grey-300);
      }
    }
  }
`

export const Autocomplete = ({
  className,
  items: defaultItems,
  label,
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
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputEl = useRef(null)
  const suggestionsEl = useRef(null)

  const showNoResultMessage = isFunction(shouldShowNoResultMessage)
    ? shouldShowNoResultMessage({ items, value })
    : shouldShowNoResultMessage

  useEffect(() => {
    updateSuggestions()
  }, [value])

  useEffect(() => {
    suggestionsEl?.current?.children[selectedSuggestionIndex]?.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }, [selectedSuggestionIndex])

  const handleChange = e => {
    setShowSuggestions(!isEmpty(value))
    setValue(e.target.value)
    onChange(e)
  }

  const handleBlur = e => {
    onBlur(e)
    setTimeout(() => {
      setShowSuggestions(false)
    }, 200)
  }

  const handleKeyDown = e => {
    if (showSuggestions) {
      if (e.key === 'Escape') setShowSuggestions(false)

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        prevSelectedItem()
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        nextSelectedItem()
      }

      if (e.key === 'Enter') {
        e.preventDefault()

        const selectedValue = items[selectedSuggestionIndex]
        handleClickItem(selectedValue)
        setShowSuggestions(false)
      }
    }

    onKeyDown(e)
  }

  const handleClickItem = value => {
    if (!value) return

    const selectedValue = value[label] || value
    inputEl.current.value = selectedValue
    inputEl.current.focus()

    onSelect(value)
    setValue(selectedValue)
    setShowSuggestions(false)
  }

  const updateSuggestions = () => {
    const search = `${value}`.toLowerCase()

    const newItems = updateSuggestionsStrategy
      ? updateSuggestionsStrategy({ items: items, value })
      : defaultItems.filter(item => {
          if (typeof item === 'string') {
            return item.toLowerCase().includes(search) && item !== value
          }
          return (
            item[label].toLowerCase().includes(search) && item[label] !== value
          )
        })
    setItems(newItems)
    resetSelectedItem()
  }

  const prevSelectedItem = () => {
    const newIndex = selectedSuggestionIndex - 1
    setSelectedSuggestionIndex(newIndex < 0 ? 0 : newIndex)
  }

  const nextSelectedItem = () => {
    const newIndex = selectedSuggestionIndex + 1
    const itemsLength = items.length - 1
    setSelectedSuggestionIndex(newIndex >= itemsLength ? itemsLength : newIndex)
  }

  const resetSelectedItem = () => setSelectedSuggestionIndex(-1)

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
          items[selectedSuggestionIndex]
            ? slugify(
                `${items[selectedSuggestionIndex]}-${selectedSuggestionIndex}`,
              )
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
          <StyledSuggestionsList
            ref={suggestionsEl}
            id={`${props.name}-results`}
            role="listbox"
            tabIndex="-1"
            style={{ '--Autocomplete-suggestions': 1 }}
            className="k-Form-Autocomplete__suggestions"
          >
            <li
              className="k-Form-Autocomplete__suggestion__item k-Form-Autocomplete__suggestion__item--noresult"
              role="option"
              tabIndex="-1"
            >
              {noResultMessage}
            </li>
          </StyledSuggestionsList>
        )}

      {showSuggestions && items.length > 0 && (
        <>
          <StyledSuggestionsList
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
                onClick={() => handleClickItem(item)}
                role="option"
                aria-selected={selectedSuggestionIndex === index}
                tabIndex="-1"
                className="k-Form-Autocomplete__suggestion__item"
              >
                {item[label] || item}
              </li>
            ))}
          </StyledSuggestionsList>

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
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
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
