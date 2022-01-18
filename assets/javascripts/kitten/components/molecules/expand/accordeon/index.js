import React, { useState, cloneElement, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import isArray from 'lodash/fp/isArray'
import remove from 'lodash/fp/remove'
import { Item } from './components/item'
import { Header } from './components/header'
import { Content } from './components/content'
import { Context } from './components/context'
import { getReactElementsByType } from '../../../../helpers/react/react-elements'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import classNames from 'classnames'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { useDebounce } from '../../../../helpers/utils/debounce'
import { domElementHelper } from '../../../../helpers/dom/element-helper'

const StyledAccordeon = styled.div`
  .k-Accordeon__item {
    border-radius: var(--border-radius-m);
  }

  .k-Accordeon__item ~ .k-Accordeon__item {
    margin-top: ${pxToRem(15)};
  }

  .k-Accordeon__item:hover {
    .k-Accordeon__header,
    .k-Accordeon__content {
      border-color: var(--color-grey-500);
    }
  }

  .k-Accordeon__item.k-Accordeon__item--expanded {
    .k-Accordeon__header,
    .k-Accordeon__content {
      border-color: var(--color-grey-900);
    }
  }

  .k-Accordeon__header {
    display: block;
    position: relative;

    min-height: ${pxToRem(50)};
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    overflow: visible;
    padding: ${pxToRem(25)} ${pxToRem(30 + 10 + 10)} ${pxToRem(25)}
      ${pxToRem(30)};

    background: transparent;
    border: var(--border);
    border-radius: var(--border-radius-m);

    ${TYPOGRAPHY.fontStyles.regular}
    color: inherit;
    cursor: pointer;
    text-align: left;

    @media (min-width: ${ScreenConfig.S.min}px) {
      min-height: ${pxToRem(70)};
    }

    &[aria-expanded='true'] {
      border-bottom-color: ${COLORS.background1};
    }

    .k-Accordeon__header__arrow {
      position: absolute;
      top: 0;
      bottom: 0;
      right: ${pxToRem(20)};
      display: flex;
      align-items: center;
    }

    &:hover:active {
      border-color: var(--color-grey-900);
    }
  }

  .k-Accordeon__content {
    ${TYPOGRAPHY.fontStyles.light}
    box-sizing: border-box;
    visibility: visible;
    overflow: visible;
    height: auto;
    padding: ${pxToRem(0.1)} ${pxToRem(30)};

    background-color: ${COLORS.background1};
    border-bottom-left-radius: var(--border-radius-m);
    border-bottom-right-radius: var(--border-radius-m);
    border: var(--border);
    border-top: 0;

    visibility: visible;
    opacity: 1;
    max-height: var(--accordeon-content-max-height, unset);

    &[aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      --accordeon-content-max-height: 0 !important;
    }

    .k-Accordeon__content_marger {
      padding-bottom: ${pxToRem(30)};
    }
  }

  &.k-Accordeon--isAnimated .k-Accordeon__header {
    transition: border 0.4s ease, border-radius 0.4s ease;
    transition-delay: 0s;

    &[aria-hidden='true'] {
      transition-delay: 0.4s;
    }
  }
  &.k-Accordeon--isAnimated .k-Accordeon__content {
    overflow: hidden;
    transition: visibility 0s ease, all 0.4s ease;
    transition-delay: 0s, 0s, 0s;

    &[aria-hidden='true'] {
      transition-delay: 0.4s, 0s, 0s;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    &.k-Accordeon--isAnimated {
      .k-Accordeon__header,
      .k-Accordeon__content {
        transition: none !important;
      }
    }
  }

  .k-Accordeon__header[aria-expanded='true'] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const Accordeon = ({
  closeOnClick,
  children,
  selectedItem,
  isAnimated,
  id,
  onChange,
  className,
  multiple,
  ...props
}) => {
  const items = getReactElementsByType({ children, type: Accordeon.Item })
  const [internalSelectedItem, setSelectedItem] = useState(
    isArray(selectedItem) ? selectedItem : [selectedItem],
  )
  const [accordeonWidth, setAccordeonWidth] = useState(0)
  const debouncedAccordeonWidth = useDebounce(accordeonWidth, 200)
  const accordeonElement = useRef(null)

  const fakeResizeObserver = { observe: () => {}, disconnect: () => {} }
  const accordeonSizeObserver =
    domElementHelper.canUseDom() && 'ResizeObserver' in window
      ? new ResizeObserver(entries => {
          entries.forEach(entry => {
            setAccordeonWidth(entry.contentRect.width)
          })
        })
      : fakeResizeObserver

  useEffect(() => {
    accordeonSizeObserver.observe(accordeonElement?.current || null)

    return () => accordeonSizeObserver.disconnect()
  }, [accordeonElement])

  const updateSelectedItem = newSelectedItem => {
    let newItem
    let ids
    if (multiple) {
      newItem = internalSelectedItem.includes(newSelectedItem)
        ? remove(el => el === newSelectedItem)(internalSelectedItem)
        : [...internalSelectedItem, newSelectedItem]
      ids = items
        .filter((_, index) => newItem.includes(index))
        .map(item => item.props?.id)
    } else {
      newItem =
        closeOnClick && internalSelectedItem.includes(newSelectedItem)
          ? []
          : [newSelectedItem]
      ids = items[newItem[0]]?.props?.id || `${id}-${newItem}`
    }
    setSelectedItem(newItem)
    onChange(ids)
  }

  const context = {
    updateSelectedItem,
    selectedItem: internalSelectedItem,
    componentId: id,
    closeOnClick,
    accordeonWidth: debouncedAccordeonWidth,
  }

  return (
    <StyledAccordeon
      className={classNames(
        'k-Accordeon',
        className,
        {
          'k-Accordeon--isAnimated': isAnimated,
        },
      )}
      ref={accordeonElement}
      {...props}
    >
      <Context.Provider value={context}>
        {items.map((item, index) => {
          const elementId = item.props.id || `${id}-${index}`

          return cloneElement(item, { key: elementId, id: elementId, index })
        })}
      </Context.Provider>
    </StyledAccordeon>
  )
}

Accordeon.Item = Item
Accordeon.Header = Header
Accordeon.Content = Content

Accordeon.propTypes = {
  selectedItem: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  onChange: PropTypes.func,
  isAnimated: PropTypes.bool,
  id: PropTypes.string,
  closeOnClick: PropTypes.bool,
  multiple: PropTypes.bool,
}

Accordeon.defaultProps = {
  selectedItem: null,
  onChange: () => {},
  isAnimated: true,
  id: 'accordeon',
  closeOnClick: false,
  multiple: false,
}
