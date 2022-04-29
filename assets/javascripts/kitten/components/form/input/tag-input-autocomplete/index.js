import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import slugify from 'slugify'
import { CrossIcon } from '../../../graphics/icons/cross-icon'
import { checkDeprecatedSizes } from '../../../../helpers/utils/deprecated'
import { TagInput, StyledTagInputWrapper } from '../tag-input'
import { StyledSuggestionsList } from '../autocomplete'

export const TagInputAutocomplete = ({
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
  suggestions,
  onKeyDown,
  onBlur,
  suggestionsNumberA11yMessage,
}) => {
  checkDeprecatedSizes(size)

  const inputEl = useRef(null)
  const suggestionsEl = useRef(null)

  const [itemsList, setItemsList] = useState(
    Array.from(itemsListFromProps || initialItemsList),
  )
  const [lastRemoved, setLastRemoved] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestionsList, setSuggestionsList] = useState(suggestions)

  const getSuggestionText = (suggestion) => suggestion.searchableString || suggestion

  const focusInputEl = () => !disabled && inputEl?.current?.focus()

  const addValueToList = value => {
    const newList = [...itemsList, value]
    itemsListFromProps ? onChange(newList) : setItemsList(newList)
  }

  const removeLastValueFromList = () => {
    const lastItem = itemsList[itemsList.length - 1]
    if (!lastItem) return
    if (lastItem.disabled) return
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

  const handleInputKeydown = event => {
    // Suggestions key events
    if (showSuggestions) {
      if (event.key === 'Escape') setShowSuggestions(false)

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        const newIndex = selectedSuggestionIndex - 1

        setSelectedSuggestionIndex(newIndex < 0 ? 0 : newIndex)
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        const newIndex = selectedSuggestionIndex + 1
        const itemsLength = suggestionsList.length - 1

        setSelectedSuggestionIndex(
          newIndex >= itemsLength ? itemsLength : newIndex,
        )
      }
    }

    // Add value to list
    if (addEventKeys.includes(event.key)) {
      event.preventDefault()

      // If a suggestion is selected through keyboard nav
      if (selectedSuggestionIndex > -1) {
        const selectedValue = suggestionsList[selectedSuggestionIndex]
        return handleSelectSuggestion(selectedValue)()
      }

      const value = inputEl?.current?.innerText.trim()

      if (value.length === 0) return
      if (itemsList.includes(value)) return

      return handleAddItem(value)
    }

    // Remove value from list
    if (
      removeEventKeys.includes(event.key) &&
      event.target.innerText.length === 0
    ) {
      event.preventDefault()
      removeLastValueFromList()
    }

    // Undo remove
    if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
      undoRemove()
    }

    // Change input size
    if (event.key.length === 1 || event.key === 'Backspace') {
      event.target.size = event.target.innerText.length + 1
    }

    onKeyDown(event)
  }

  const handleAddItem = value => {
    addValueToList(value)
    focusInputEl()
    inputEl.current.innerText = ''
    setInputValue('')
  }

  const updateSuggestions = () => {
    const search = `${inputValue}`.toLowerCase()

    const newSuggestions = suggestions.filter(item => {
      const suggestionText = getSuggestionText(item)

      return (
        suggestionText.toLowerCase().startsWith(search) &&
        suggestionText !== inputValue &&
        !itemsList.includes(suggestionText)
      )
    })

    setSuggestionsList(newSuggestions)
    resetSelectedSuggestion()
  }

  const handleInputChange = event => {
    setInputValue(event.target?.innerText || '')
  }

  const handleInputBlur = e => {
    // check if focus stays in the component
    const ancestor = e.target.closest('.k-Form-TagInput')
    if (ancestor.matches(':focus-within')) return

    setTimeout(() => {
      setShowSuggestions(false)
    }, 100)

    onBlur(e)
  }

  const handleSelectSuggestion = value => () => {
    console.log(value)
    if (!value) return
    const suggestionText = getSuggestionText(value)

    handleAddItem(suggestionText)
    setShowSuggestions(false)
  }

  useEffect(() => {
    setShowSuggestions(false)
    if (!itemsListFromProps) {
      onChange(itemsList)
    }
  }, [itemsList])

  useEffect(() => {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps)
    }
  }, [itemsListFromProps])

  useEffect(() => {
    updateSuggestions()
    setShowSuggestions(inputValue !== '')
  }, [inputValue])

  useEffect(() => {
    suggestionsEl?.current?.children[selectedSuggestionIndex]?.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }, [selectedSuggestionIndex])

  const resetSelectedSuggestion = () => setSelectedSuggestionIndex(-1)

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
              onKeyDown={handleInputKeydown}
              className="k-Form-TagInput__input"
              onInput={handleInputChange}
              onBlur={handleInputBlur}
              aria-owns={`${id}-results`}
              aria-expanded={
                showSuggestions ? suggestionsList.length > 0 : null
              }
              aria-autocomplete="both"
              aria-activedescendant={
                suggestions[selectedSuggestionIndex]
                  ? slugify(
                      `${suggestionsList[selectedSuggestionIndex]}-${selectedSuggestionIndex}`,
                    )
                  : ''
              }
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

      {showSuggestions && suggestionsList.length > 0 && (
        <>
          <StyledSuggestionsList
            ref={suggestionsEl}
            id={`${id}-results`}
            role="listbox"
            tabIndex="-1"
            style={{ '--Autocomplete-suggestions': suggestionsList.length }}
            className="k-Form-Autocomplete__suggestions"
          >
            {suggestionsList.map((suggestion, index) => {
              const suggestionText = getSuggestionText(suggestion)

              return (
                <li
                  key={suggestionText + index}
                  id={slugify(`${suggestionText}-${index}`)}
                  onClick={handleSelectSuggestion(suggestion)}
                  role="option"
                  aria-selected={selectedSuggestionIndex === index}
                  tabIndex="-1"
                  className="k-Form-Autocomplete__suggestion__item"
                >
                  {suggestion.displayNode || suggestionText}
                </li>
              )
            })}
          </StyledSuggestionsList>

          <div
            className="k-u-a11y-visuallyHidden"
            aria-live="assertive"
            aria-atomic="true"
          >
            ${suggestionsNumberA11yMessage(suggestionsList.length)}
          </div>
        </>
      )}

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

TagInputAutocomplete.defaultProps = {
  ...TagInput.defaultProps,
  suggestions: [],
  onKeyDown: () => {},
  onBlur: () => {},
  suggestionsNumberA11yMessage: number => {
    return `${number} suggestions.`
  },
}

TagInputAutocomplete.propTypes = {
  ...TagInput.propTypes,
  suggestions: PropTypes.array,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  suggestionsNumberA11yMessage: PropTypes.func,
}
