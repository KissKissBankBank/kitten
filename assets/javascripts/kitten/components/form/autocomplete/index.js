import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'

const itemHeight = 38
const maxItemsVisibled = 3
const borderSize = 2

const Container = styled.div`
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
  font-size: 14px;
  line-height: 1.3;
  color: ${COLORS.font1};

  transition: border-color 0.4s;

  :focus {
    border-color: ${COLORS.line2};
  }
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
  font-size: 14px;
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
  onChange,
  onBlur,
  onKeyDown,
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
  }, [value])

  const handleChange = e => {
    setShowSuggestions(!!e.target.value)
    setValue(e.target.value)

    onChange()
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false)
    }, 100)

    onBlur()
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

    onKeyDown()
  }

  const handleClickItem = value => () => {
    if (!value) return

    inputEl.current.value = value
    inputEl.current.focus()

    setValue(value)
    setShowSuggestions(false)
  }

  const updateSuggestions = () => {
    const regex = new RegExp(`^${value}`, 'gi')
    const newItems = defaultItems.filter(
      item => item.match(regex) && item !== value,
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
        ref={inputEl}
        type="text"
        autoComplete="false"
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />

      {showSuggestions && items.length > 0 && (
        <Suggestions
          ref={suggestionsEl}
          role="listbox"
          tabIndex="-1"
          itemsLength={items.length}
        >
          {items.map((item, index) => (
            <Item
              key={item + index}
              onClick={handleClickItem(item)}
              role="option"
              aria-selected={selectedItemIndex === index}
              tabIndex="-1"
            >
              {item}
            </Item>
          ))}
        </Suggestions>
      )}
    </Container>
  )
}

Autocomplete.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
}

Autocomplete.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
}
