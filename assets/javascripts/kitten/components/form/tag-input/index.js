import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { CrossIcon } from '../../../components/icons/cross-icon'

const StyledWrapper = styled.div`
  font-size: ${stepToRem(-1)};
  line-height: 1em;
  box-sizing: border-box;
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-radius: 0;
  width: 100%;
  border-color: ${COLORS.line1};
  padding: ${pxToRem(5)};

  .k-Form-TagList__list {
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(5)};
    list-style: none;
    padding: 0;
    margin: 0;

  }
  .k-Form-TagList__item {
    padding: 0;
    margin: 0;
    order: 1;
  }
  .k-Form-TagList__inputItem {
    flex: 1 0 auto;
    order: 2;
  }
  .k-Form-TagList__input {
    width: 100%;
    height: 100%;
    ${TYPOGRAPHY.fontStyles.light};
    appearance: none;
    border: 0;
    background-color: ${COLORS.background1};
    color: ${COLORS.font1};

    ::placeholder {
      color: ${COLORS.font2};
    }

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }

  .k-Form-TagList__tagItem {
    display: flex;
    color: ${COLORS.background1};
    background-color: ${COLORS.primary1};
    border-radius: ${pxToRem(2)};
  }

  .k-Form-TagList__tag {
    ${TYPOGRAPHY.fontStyles.regular};
    padding: 0 0 0 ${pxToRem(5)};
    line-height: 1.7;
  }

  .k-Form-TagList__button {
    ${TYPOGRAPHY.fontStyles.bold};
    border: 0;
    padding: 0;
    background-color: transparent;
    color: ${COLORS.background1};
    padding: 0 ${pxToRem(8)};
    display: flex;
    align-items: center;

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }
`

export const TagInput = ({ onChange, className, id, addEventKeys, removeEventKeys, initialItemsList }) => {
  const [itemsList, setItemList] = useState([...initialItemsList])
  const [lastRemoved, setLastRemoved] = useState(null)
  const inputEl = useRef(null)

  const focusInputEl = () => inputEl?.current?.focus()

  const addValueToList = value => {
    setItemList(currentList => ([...currentList, value]))
  }

  const removeLastValueFromList = value => {
    setLastRemoved(itemsList[itemsList.length - 1])
    setItemList(currentList => (currentList.slice(0, -1)))
  }

  const removeValueFromList = value => {
    setLastRemoved(value)
    setItemList(currentList => currentList.filter((item) => item !== value))
  }

  const undoRemove = () => {
    lastRemoved && addValueToList(lastRemoved)
    setLastRemoved(null)
  }

  useEffect(() => {
    onChange(itemsList)
  }, [itemsList])

  const onKeyDown = (event) => {
    if (addEventKeys.includes(event.key)) {
      event.preventDefault()
      const val = event.target.value.trim()

      if (val.length === 0) return
      if (itemsList.includes(val)) return

      addValueToList(val)
      event.target.value = ''
    }

    if (removeEventKeys.includes(event.key) && event.target.value.length === 0) {
      event.preventDefault()
      removeLastValueFromList()
    }

    if (event.key === "z" && (event.ctrlKey || event.metaKey)) {
      undoRemove()
    }

    if(event.key.length === 1 || event.key === 'Backspace') {
      event.target.size = event.target.value.length + 1
    }
  }

  return(
    <StyledWrapper
      className={classNames(
        'k-Form-TagList',
        className,
      )}
      onClick={focusInputEl}
    >
      <p
        className="k-u-a11y-visuallyHidden"
        id={`${id}-legend`}
      >
        Pressez les touches Entrée ou Virgule après avoir écrit le nom d'un élément pour l'ajouter à la liste.
      </p>
      <ul className="k-Form-TagList__list" aria-live="polite" aria-relevant="additions removals">
        <li className="k-Form-TagList__item k-Form-TagList__inputItem">
          <input
            ref={inputEl}
            type="text"
            aria-describedby={`${id}-legend`}
            onKeyDown={onKeyDown}
            id={id}
            className="k-Form-TagList__input"
            size="1"
          />
        </li>
        {itemsList.map(item => {
          return (
            <li
              key={item}
              className="k-Form-TagList__item k-Form-TagList__tagItem"
            >
              <span className="k-Form-TagList__tag">{item}</span>
              <button
                className="k-Form-TagList__button"
                type="button"
                onClick={() => removeValueFromList(item)}
              >
                <span
                  className="k-u-a11y-visuallyHidden"
                >
                  Retirer {item} de la liste.
                </span>
                <CrossIcon color={COLORS.background1} />
              </button>
            </li>
          )
        })}
      </ul>
    </StyledWrapper>
  )
}

TagInput.defaultProps = {
  initialItemsList: [],
  addEventKeys: ['Enter', ','],
  removeEventKeys: ['Backspace'],
}
