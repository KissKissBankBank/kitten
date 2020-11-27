import React, { useState, cloneElement, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Item } from './components/item'
import { Header } from './components/header'
import { Content } from './components/content'
import { Context } from './components/context'
import { getReactElementsByType } from '../../helpers/react/react-elements'
import styled from 'styled-components'
import COLORS from '../../constants/colors-config'
import { pxToRem } from '../../helpers/utils/typography'
import classNames from 'classnames'
import TYPOGRAPHY from '../../constants/typography-config'
import { ScreenConfig } from '../../constants/screen-config'
import { useDebounce } from '../../helpers/utils/debounce'
import { domElementHelper } from '../../helpers/dom/element-helper'

const StyledAccordeon = styled.div`
  .k-Accordeon__item ~ .k-Accordeon__item {
    margin-top: ${pxToRem(15)};
  }

  .k-Accordeon__item:focus-within {
    border-radius: ${pxToRem(3)};
    box-shadow: 0 0 0 ${pxToRem(2)} ${COLORS.background1}, 0 0 0 ${pxToRem(
  4,
)} ${COLORS.primary4};

    .k-Accordeon__header {
      outline: none;
    }
  }

  .k-Accordeon__header {
    display: block;

    margin: 0;
    width: 100%;
    box-sizing: border-box;
    overflow: visible;

    background: transparent;
    border: ${pxToRem(2)} solid ${COLORS.line1};

    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
  }

  .k-Accordeon__content {
    ${TYPOGRAPHY.fontStyles.light}
    box-sizing: border-box;
    visibility: visible;
    overflow: visible;
    height: auto;
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-top: 0;

    visibility: visible;
    opacity: 1;
    max-height: var(--accordeon-content-max-height, unset);

    &[aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      --accordeon-content-max-height: 0 !important;
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
      .k-Accordeon__content{
        transition: none !important;
      }
    }
  }

  &.k-Accordeon--andromeda {
    .k-Accordeon__header {
      ${TYPOGRAPHY.fontStyles.light}
      padding: ${pxToRem(20)};
      min-height: ${pxToRem(30)};
      border-radius: ${pxToRem(3)};

      .k-Accordeon__header__arrow {
        display: none;
      }
    }

    .k-Accordeon__content {
      background-color: ${COLORS.background3};
      border-bottom-left-radius: ${pxToRem(3)};
      border-bottom-right-radius: ${pxToRem(3)};
      padding: ${pxToRem(0.1)} ${pxToRem(30)};
    }

    .k-Accordeon__content_marger {
      padding-top: ${pxToRem(30)};
      padding-bottom: ${pxToRem(30)};
    }
  }

  &.k-Accordeon--orion {
    .k-Accordeon__item {
      border-radius: ${pxToRem(6)};
    }

    .k-Accordeon__header {
      position: relative;
      padding: ${pxToRem(25)} ${pxToRem(30 + 10 + 10)} ${pxToRem(25)} ${pxToRem(
  30,
)};
      ${TYPOGRAPHY.fontStyles.regular}

      min-height: ${pxToRem(50)};
      border-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        min-height: ${pxToRem(70)};
        border-radius: ${pxToRem(8)};
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
    }

    .k-Accordeon__content {
      background-color: ${COLORS.background1};
      border-bottom-left-radius: ${pxToRem(6)};
      border-bottom-right-radius: ${pxToRem(6)};
      padding: ${pxToRem(0.1)} ${pxToRem(30)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        border-bottom-left-radius: ${pxToRem(8)};
        border-bottom-right-radius: ${pxToRem(8)};
      }

      .k-Accordeon__content_marger {
        padding-bottom: ${pxToRem(30)};
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
  variant,
  children,
  selectedItem,
  isAnimated,
  id,
  onChange,
}) => {
  const items = getReactElementsByType({ children, type: Accordeon.Item })
  const [internalSelectedItem, setSelectedItem] = useState(selectedItem)
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
    const newItem =
      closeOnClick && newSelectedItem === internalSelectedItem
        ? null
        : newSelectedItem

    setSelectedItem(newItem)

    onChange(items[newItem].props.id || `${id}-${newItem}`)
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
      className={classNames('k-Accordeon', `k-Accordeon--${variant}`, {
        'k-Accordeon--isAnimated': isAnimated,
      })}
      ref={accordeonElement}
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
  selectedItem: PropTypes.number,
  onChange: PropTypes.func,
  isAnimated: PropTypes.bool,
  id: PropTypes.string,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  closeOnClick: PropTypes.bool,
}

Accordeon.defaultProps = {
  selectedItem: null,
  onChange: () => {},
  isAnimated: true,
  id: 'accordeon',
  variant: 'andromeda',
  closeOnClick: false,
}
