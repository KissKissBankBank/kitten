import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled, { keyframes } from 'styled-components'
import { ArrowContainer } from '../../../information/boxes/arrow-container'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { useFocusTrap } from '../../../../helpers/dom/use-focus-trap'

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

    ::-webkit-details-marker,
    ::before {
      display: none;
    }

    :focus-visible {
      outline-offset: ${pxToRem(-2)};

      &,
      & .k-DropdownMenu__button__inside {
        outline: auto;
      }
    }
  }
  .k-DropdownMenu__button__inside {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    gap: ${pxToRem(1)};
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
    animation: var(--transition) ${zoomInAndOpacity};
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
    color: var(--color-grey-000);
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${pxToRem(10)};
    padding: ${pxToRem(7)} ${pxToRem(15)};
    line-height: ${pxToRem(16)};
    font-size: ${stepToRem(-1)};
    text-align: left;
    transition: color 0.2s ease;

    & svg,
    & svg path {
      fill: currentColor;
    }

    &:hover {
      color: var(--color-primary-100);
    }

    &:active,
    &:focus {
      color: var(--color-primary-300);
    }

    &:focus-visible {
      outline: auto;
    }

    .k-DropdownMenu__menu__item__iconWrapper {
      height: ${pxToRem(16)};
      width: ${pxToRem(16)};
      flex: 0 0 ${pxToRem(16)};

      svg {
        width: ${pxToRem(16)};
        height: ${pxToRem(16)};
      }
    }
  }

  .k-DropdownMenu__menu__separator {
    height: ${pxToRem(2)};
    background: var(--color-grey-700);
    padding: 0;
    margin: ${pxToRem(7)} ${pxToRem(15)};
  }
`

export const DropdownMenu = ({
  button,
  open,
  onToggle,
  menuProps,
  menuPosition,
  positionedButton,
  children,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(open)
  const detailsElement = useFocusTrap({ shouldTrapFocus: isOpen })

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const onLinkClicked = () => {
    setIsOpen(false)
  }

  const handleToggle = event => {
    onToggle(event)

    setIsOpen(event.target.open)
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
        'a:not([hidden]):not([disabled]):not([aria-disabled="true"]), button:not([hidden]):not([disabled]):not([aria-disabled="true"])',
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
        if (!isOpen) break

        detailsElement.current?.querySelector('summary')?.click()
        event.preventDefault()
        event.stopPropagation()
        break
      case 'ArrowDown':
        if (isSummaryFocused && !isOpen) {
          document.activeElement?.click()
        }

        getSibling('next')?.focus()

        event.preventDefault()
        break
      case 'ArrowUp':
        if (!isOpen) break

        getSibling('prev')?.focus()

        event.preventDefault()
        break
      case ' ':
      case 'Enter': {
        const activeElement = document.activeElement

        if (!activeElement instanceof HTMLElement) return
        if (!['A', 'BUTTON'].includes(activeElement.tagName)) return
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
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <summary className="k-DropdownMenu__button">
        {positionedButton ? (
          <span className="k-DropdownMenu__button__inside">
            {button({ open: isOpen })}
          </span>
        ) : (
          button({ open: isOpen })
        )}
      </summary>
      <ArrowContainer
        color="var(--color-grey-900)"
        size={8}
        padding={0}
        borderRadius={8}
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

DropdownMenu.defaultProps = {
  button: () => {},
  open: false,
  onToggle: () => {},
  menuProps: {},
  menuPosition: 'left',
  positionedButton: false,
}

DropdownMenu.Link = ({ href = '', className, icon, children, ...rest }) => (
  <a
    href={href}
    className={classNames(
      'k-DropdownMenu__menu__item',
      'k-DropdownMenu__menu__link',
      className,
    )}
    {...rest}
  >
    <IconWrapper icon={icon} />
    <span>{children}</span>
  </a>
)

DropdownMenu.Button = ({
  type = 'button',
  className,
  icon,
  children,
  ...rest
}) => (
  <button
    type={type}
    className={classNames(
      'k-DropdownMenu__menu__item',
      'k-DropdownMenu__menu__button',
      'k-u-reset-button',
      className,
    )}
    {...rest}
  >
    <IconWrapper icon={icon} />
    <span>{children}</span>
  </button>
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

const IconWrapper = ({ icon }) => {
  if (!icon) return null

  return <span className="k-DropdownMenu__menu__item__iconWrapper">{icon}</span>
}
