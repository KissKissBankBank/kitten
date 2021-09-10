import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import styled, { keyframes } from 'styled-components'
import { ArrowContainer } from '../../../../components/molecules/boxes/arrow-container'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'

const zoomInAndOpacity = keyframes`
  0% {
    transform: translateX(calc(-1 * var(--Dropdown-transform))) scale(.66);
    opacity: 0;
  }
  to
  {
    transform: translateX(calc(-1 * var(--Dropdown-transform))) scale(1);
    opacity: 1;
  }
`

const StyledDropdownMenu = styled.details`
  position: relative;
  display: inline-block;

  .k-DropdownMenu__button {
    list-style: none;
    touch-callout: none;
    user-select: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ::-webkit-details-marker,
    ::before {
      display: none;
    }
  }

  &[open] > .k-DropdownMenu__button::before {
    content: ' ';
    cursor: default;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 120;
  }

  .k-DropdownMenu__menu {
    display: flex;
    flex-direction: column;
    z-index: 150;

    position: absolute;
    top: calc(50% + 1rem + ${pxToRem(8)});
    left: 50%;
    width: max-content;
    max-width: ${pxToRem(300)};
    height: auto;

    padding: ${pxToRem(8)} 0 ${pxToRem(10)};

    transform: translateX(calc(-1 * var(--Dropdown-transform)));
    transform-origin: var(--Dropdown-transform-origin);
  }

  &[open] .k-DropdownMenu__menu {
    animation: 0.16s ease ${zoomInAndOpacity};
  }

  &.k-DropdownMenu--left .k-DropdownMenu__menu {
    --Dropdown-transform: calc(100% - ${pxToRem(10 + 8)});
    --Dropdown-transform-origin: var(--Dropdown-transform) ${pxToRem(-8)};
  }

  &.k-DropdownMenu--center .k-DropdownMenu__menu {
    --Dropdown-transform: 50%;
    --Dropdown-transform-origin: var(--Dropdown-transform) ${pxToRem(-8)};
  }

  &.k-DropdownMenu--right .k-DropdownMenu__menu {
    --Dropdown-transform: ${pxToRem(10 + 8)};
    --Dropdown-transform-origin: var(--Dropdown-transform) ${pxToRem(-8)};
  }

  .k-DropdownMenu__menu__item {
    ${TYPOGRAPHY.fontStyles.regular}
    color: ${COLORS.background1};
    text-decoration: none;
    display: block;
    padding: ${pxToRem(7)} ${pxToRem(15)};
    line-height: 1;
    font-size: ${stepToRem(-1)};
    text-align: left;
    transition: color 0.2s ease;

    &:hover {
      color: ${COLORS.primary1};
    }

    &:active {
      color: ${COLORS.primary4};
    }

    &:focus {
      color: ${COLORS.primary4};
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

  .k-DropdownMenu__menu__separator {
    height: ${pxToRem(2)};
    background: ${COLORS.grey1};
    padding: 0;
    margin: ${pxToRem(5)} 0;
  }
`

export const DropdownMenu = ({
  button = () => {},
  open: openProp,
  onToggle,
  menuProps = {},
  menuPosition = 'left',
  children,
  className,
  ...rest
}) => {
  const detailsElement = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  const onLinkClicked = () => {
    setIsOpen(false)
    setHasClicked(true)
  }

  const handleToggle = () => {
    if (!hasClicked) {
      return setIsOpen(!isOpen)
    }
    return setHasClicked(false)
  }

  const arrowDistanceProps = (() => {
    switch (menuPosition) {
      case 'left':
        return { distance: 10, distanceIsReverse: true }

      case 'center':
        return { centered: true }

      case 'right':
      default:
        return { distance: 10 }
    }
  })()

  const getSibling = direction => {
    const options = [
      ...detailsElement.current.querySelectorAll(
        '[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])',
      ),
    ]

    const index =
      document.activeElement instanceof HTMLElement
        ? options.indexOf(document.activeElement)
        : -1
    const sibling =
      direction === 'next' ? options[index + 1] : options[index - 1]
    const opposite =
      direction === 'next' ? options[0] : options[options.length - 1]

    return sibling || opposite
  }

  const handleKeyDown = event => {
    const isSummaryFocused =
      event.target instanceof Element && event.target.tagName === 'SUMMARY'

    switch (event.key) {
      case 'Escape':
        if (!open) return

        detailsElement.current?.querySelector('summary')?.click()
        event.preventDefault()
        event.stopPropagation()
        break
      case 'ArrowDown':
        if (isSummaryFocused && !open) {
          document.activeElement?.click()
        }

        getSibling('next')?.focus()

        event.preventDefault()
        break
      case 'ArrowUp':
        if (isSummaryFocused && !open) {
          document.activeElement?.click()
        }

        getSibling('prev')?.focus()

        event.preventDefault()
        break
      case ' ':
      case 'Enter': {
        const activeElement = document.activeElement

        if (!activeElement instanceof HTMLElement) return
        if (activeElement.role !== 'menuitem') return
        if (activeElement.closest('details') !== detailsElement.current) return

        event.preventDefault()
        event.stopPropagation()
        activeElement.click()
      }
    }
  }

  return (
    <StyledDropdownMenu
      ref={detailsElement}
      onToggle={handleToggle}
      open={isOpen}
      className={classNames(
        'k-DropdownMenu',
        className,
        `k-DropdownMenu--${menuPosition}`,
      )}
      role="menu"
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <summary className="k-DropdownMenu__button">{button({ open })}</summary>
      <ArrowContainer
        color={COLORS.font1}
        size={8}
        padding={0}
        borderRadius={4}
        position="top"
        {...arrowDistanceProps}
        {...menuProps}
        className={classNames('k-DropdownMenu__menu', menuProps.className)}
        onClick={onLinkClicked}
      >
        {children}
      </ArrowContainer>
    </StyledDropdownMenu>
  )
}

DropdownMenu.Link = ({ href = '', className, ...rest }) => (
  <a
    href={href}
    role="menuitem"
    className={classNames(
      'k-DropdownMenu__menu__item',
      'k-DropdownMenu__menu__link',
      className,
    )}
    {...rest}
  />
)

DropdownMenu.Button = ({ type = 'button', className, ...rest }) => (
  <button
    type={type}
    role="menuitem"
    className={classNames(
      'k-DropdownMenu__menu__item',
      'k-DropdownMenu__menu__button',
      'k-u-reset-button',
      className,
    )}
    {...rest}
  />
)

DropdownMenu.Separator = ({ className, ...rest }) => (
  <div
    className={classNames(
      'k-DropdownMenu__menu__item',
      'k-DropdownMenu__menu__separator',
      className,
    )}
    {...rest}
  />
)
