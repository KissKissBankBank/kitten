import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styled, { keyframes } from 'styled-components'
import { ArrowContainer } from '../../../../components/molecules/boxes/arrow-container'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'

const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.8);
  }
  to
  {
    opacity: 1;
    transform: scale(1);
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
    list-style: none;
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
    left: ${pxToRem(-15)};
    top: calc(100% + ${pxToRem(10 + 5)});
    width: max-content;

    padding: ${pxToRem(8)} 0 ${pxToRem(10)};

    animation-duration: 0.15s;
    animation-name: ${scaleIn};
    animation-timing-function: ease;
    transform-origin: ${pxToRem(15)} ${pxToRem(-10)};
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
  onToggle = () => {},
  menuProps = {},
  menuPosition = 'left',
  children,
  className,
  ...rest
}) => {
  const [open, setOpen] = useState(openProp)
  const detailsElement = useRef(null)

  useEffect(() => {
    setOpen(openProp)
  }, [openProp])

  const handleToggle = event => {
    setOpen(!open)
    onToggle(event, !open)
  }

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

        setOpen(false)
        event.preventDefault()
        event.stopPropagation()
        break
      case 'ArrowDown':
        if (isSummaryFocused && !open) return setOpen(true)

        getSibling('next')?.focus()

        event.preventDefault()
        break
      case 'ArrowUp':
        if (isSummaryFocused && !open) return setOpen(true)

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
      open={openProp}
      className={classNames('k-DropdownMenu', className)}
      role="menu"
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <summary className="k-DropdownMenu__button">{button({ open })}</summary>
      <ArrowContainer
        color={COLORS.font1}
        size={8}
        padding={0}
        distance={10}
        borderRadius={4}
        position="top"
        {...menuProps}
        className={classNames('k-DropdownMenu__menu', menuProps.className)}
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
