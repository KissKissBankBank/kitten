import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import slugify from 'slugify'
import { Loader } from '../../loaders/loader'

const itemHeight = 38
const maxItemsVisibled = 3
const borderSize = 2

const Container = styled.div`
  display: flex;
  position: relative;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: ${pxToRem(50)};
  box-sizing: border-box;

  background: ${COLORS.background1};
  border: ${pxToRem(borderSize)} solid ${COLORS.line1};
  padding: 0 ${pxToRem(15)};
  outline: none;

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

  :focus {
    border-color: ${COLORS.line2};
  }

  ::-ms-clear {
    display: none;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${COLORS.error3};
      color: ${COLORS.error3};

      :focus {
        border-color: ${COLORS.line2};
        color: ${COLORS.font1};
      }
    `}

  ${({ hasIcon, iconPosition }) => {
    if (!hasIcon) {
      return false
    }
    return iconPosition === 'left'
      ? css`
          padding-left: ${pxToRem(45)};
        `
      : css`
          padding-right: ${pxToRem(45)};
        `
  }}
`

const StyledLoader = styled(({ hasIcon, ...others }) => <Loader {...others} />)`
  display: flex;
  position: absolute;
  align-self: center;
  padding: 0 ${pxToRem(18)};
  z-index: 1;
  right: 0;
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-right: ${pxToRem(45)};
    `}
`

const StyledIcon = styled(({ disabled, ...others }) => <span {...others} />)`
  display: flex;
  position: absolute;
  align-self: center;
  padding: 0 ${pxToRem(18)};
  z-index: 1;
  left: 0;

  ${({ disabled }) =>
    disabled &&
    css`
      & > svg [stroke]:not([stroke='none']) {
        stroke: ${COLORS.font2};
      }
      & > svg [fill]:not([fill='none']) {
        fill: ${COLORS.font2};
      }
    `}

  ${({ iconPosition }) =>
    iconPosition === 'right' &&
    css`
      left: initial;
      right: 0;
    `}
`

const Suggestions = styled.ul`
  position: absolute;
  top: ${pxToRem(50)};
  left: 0;
  right: 0;
  overflow-y: auto;
  margin: 0;
  padding: 0;

  background: ${COLORS.background1};
  border: ${pxToRem(2)} solid ${COLORS.line1};
  border-top: none;

  list-style: none;

  ${({ itemsLength }) =>
    itemsLength > 0 &&
    css`
      height: ${pxToRem(
        itemHeight * (itemsLength > 2 ? maxItemsVisibled : itemsLength),
      )};
    `}
`

const Item = styled.li`
  padding: ${pxToRem(10)} ${pxToRem(15)};

  ${TYPOGRAPHY.fontStyles.light};
  font-size: ${stepToRem(-1)};
  line-height: 1.3;
  color: ${COLORS.font1};

  cursor: pointer;
  transition: background-color 0.2s;

  :hover,
  :focus,
  :active {
    background-color: ${COLORS.background3};
  }

  :focus {
    outline: none;
  }

  &[aria-selected='true'] {
    background-color: ${COLORS.line1};
  }
`

export const Autocomplete = ({
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
  ...props
}) => {
  const [items, setItems] = useState(defaultItems)
  const [value, setValue] = useState(props.defaultValue)
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputEl = useRef(null)
  const suggestionsEl = useRef(null)

  useEffect(() => {
    updateSuggestions()
    setShowSuggestions(!!value)
  }, [value])

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
    <Container>
      <Input
        {...props}
        error={error}
        ref={inputEl}
        type="text"
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        aria-owns={`${props.name}-results`}
        aria-expanded={showSuggestions && items.length > 0}
        aria-autocomplete="both"
        hasIcon={!!icon}
        iconPosition={iconPosition}
        aria-activedescendant={
          items[selectedItemIndex]
            ? slugify(`${items[selectedItemIndex]}-${selectedItemIndex}`)
            : ''
        }
      />
      {isLoading && (
        <>
          <StyledLoader
            color={COLORS.font2}
            hasIcon={icon && iconPosition === 'right'}
          />
          <VisuallyHidden lang="en">loading</VisuallyHidden>
        </>
      )}
      {icon && (
        <StyledIcon
          aria-hidden="true"
          disabled={props.disabled}
          iconPosition={iconPosition}
        >
          {React.cloneElement(icon, { width: 15, height: 15 })}
        </StyledIcon>
      )}

      {showSuggestions && items.length > 0 && (
        <>
          <Suggestions
            ref={suggestionsEl}
            id={`${props.name}-results`}
            role="listbox"
            tabIndex="-1"
            itemsLength={items.length}
          >
            {items.map((item, index) => (
              <Item
                key={item + index}
                id={slugify(`${item}-${index}`)}
                onClick={handleClickItem(item)}
                role="option"
                aria-selected={selectedItemIndex === index}
                tabIndex="-1"
              >
                {item}
              </Item>
            ))}
          </Suggestions>

          <VisuallyHidden lang="en" aria-live="assertive">
            {items.length} results are available.
          </VisuallyHidden>
        </>
      )}
    </Container>
  )
}

Autocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.bool,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  updateSuggestionsStrategy: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  isLoading: PropTypes.bool,
}

Autocomplete.defaultProps = {
  error: false,
  iconPosition: 'left',
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onSelect: () => {},
  isLoading: false,
}
