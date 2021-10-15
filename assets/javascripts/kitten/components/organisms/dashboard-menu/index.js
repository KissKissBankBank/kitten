import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import find from 'lodash/fp/find'

import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ArrowIcon } from '../../../components/graphics/icons/arrow-icon'
import { DoubleArrowIcon } from '../../../components/graphics/icons/double-arrow-icon'
import { FlexWrapper } from '../../../components/layout/flex-wrapper'
import { mq } from '../../../constants/screen-config'

const zoomInAndOpacity = keyframes`
  0% {
    transform: scaleY(.80);
    opacity: 0;
  }
  to
  {
    transform: scaleY(1);
    opacity: 1;
  }
`
const opacity = keyframes`
  0% {
    opacity: 0;
  }
  to
  {
    opacity: 1;
  }
`

const StyledDashboardMenu = styled.nav`
  color: ${COLORS.font2};

  /* OVERRIDE DEFAULTS */

  .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__item {
    &,
    &:visited,
    &:link {
      color: ${COLORS.font2};
      font-size: ${stepToRem(-1)};
      text-decoration: none;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &:focus,
    &:hover {
      background-color: ${COLORS.line3} !important;
    }
    &:focus {
      z-index: 1;
      position: relative;
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }

  summary.k-DashboardMenu__selectorSummary,
  a.k-DashboardMenu__selectorButton {
    &,
    &:visited,
    &:link {
      color: ${COLORS.background1};
      font-size: ${stepToRem(-1)};
      text-decoration: none;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &[aria-current='page'],
    &:hover {
      background-color: ${COLORS.line3} !important;
    }

    &:focus {
      z-index: 1;
      position: relative;
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: 0;
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }
  }

  .k-DashboardMenu__list,
  .k-DashboardMenu__expandable__list {
    margin: 0;
    padding: 0;
    list-style: none;
    transition: opacity 0.2s ease;
  }

  .k-DashboardMenu__list--subList {
    margin-left: ${pxToRem(25)};

    @media ${mq.tabletAndDesktop} {
      margin-left: ${pxToRem(35)};
      margin-right: ${pxToRem(40)};
    }
  }

  .k-DashboardMenu__expandable summary {
    list-style: none;

    &:focus {
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary3};
    }

    &::-webkit-details-marker {
      display: none;
    }
  }

  /* BLOCK STYLES */

  .k-DashboardMenu__selectorButton__text,
  .k-DashboardMenu__item .k-DashboardMenu__item__text,
  .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text {
    flex: 1 0 0;

    &, * {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }

  .k-DashboardMenu__expandable {
    border-radius: ${pxToRem(6)};
    background-color: ${COLORS.line3};

    .k-DashboardMenu__expandable__list {
      padding: 0 ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(60)};
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(10)};
    }
  }

  .k-DashboardMenu__list {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(2)};
  }

  .k-DashboardMenu__list
    > li
    > .k-DashboardMenu__expandable
    .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item,
  .k-DashboardMenu__selectorButton {
    display: flex;
    height: ${pxToRem(50)};
    align-items: center;
    gap: ${pxToRem(10)};
    padding: 0 ${pxToRem(10)};
    border-radius: ${pxToRem(4)};
  }

  .k-DashboardMenu__list > li > .k-DashboardMenu__item--small {
    height: ${pxToRem(40)};
  }

  .k-DashboardMenu__selectorButton {
    height: ${pxToRem(70)};
    flex: 0 0 ${pxToRem(70)};
  }

  /* TEXT STYLES */
  .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item {
    ${TYPOGRAPHY.fontStyles.regular}
    background-color: ${COLORS.font1};
    cursor: pointer;
  }
  .k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__expandable--hasActiveInside
    .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current='page'] {
    color: ${COLORS.background1};
    background-color: ${COLORS.line3};
  }

  .k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item {
    ${TYPOGRAPHY.fontStyles.light}
    line-height: ${pxToRem(18)};

    &:hover,
    &:focus,
    &[aria-current='page'] {
      ${TYPOGRAPHY.fontStyles.regular}
      color: ${COLORS.background1};
    }
  }

  /* ICON STYLES */

  .k-DashboardMenu__iconWrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 ${pxToRem(25)};
    width: ${pxToRem(25)};
    height: ${pxToRem(25)};

    @media ${mq.tabletAndDesktop} {
      flex: 0 0 ${pxToRem(40)};
      width: ${pxToRem(40)};
      height: ${pxToRem(40)};
    }

    svg {
      max-width: ${pxToRem(25)};
      max-height: ${pxToRem(25)};

      &[fill],
      d[fill] {
        transition: fill 0.2s ease-in-out;
      }
    }
  }

  .k-DashboardMenu__expandable__title__arrow {
    flex: 0 0 auto;
    padding: ${pxToRem(5)};

    svg {
      display: block;
      fill: currentColor;
      transition: transform 0.2s ease-in-out;
    }
  }

  .k-DashboardMenu__expandable[open]
    .k-DashboardMenu__expandable__title__arrow
    svg {
    transform: rotate(360deg) !important;
  }

  .k-DashboardMenu__separator {
    margin-top: ${pxToRem(20)};
    margin-bottom: ${pxToRem(15)};

    hr {
      border: 0;
      border-top: ${pxToRem(1)} solid rgba(151, 151, 151, 0.2);
      margin-bottom: ${pxToRem(15)};
    }
  }

  .k-DashboardMenu__selectorWrapper {
    position: relative;

    &[open] .k-DashboardMenu__selectorList {
      animation: 0.16s ease-out ${zoomInAndOpacity};
    }

    &::before {
      display: block;
      content: '';
      position: absolute;
      top: ${pxToRem(-5)};
      left: ${pxToRem(-5)};
      right: ${pxToRem(-5)};
      bottom: ${pxToRem(-5)};
      border-top-left-radius: ${pxToRem(8)};
      border-top-right-radius: ${pxToRem(8)};
      border: ${pxToRem(2)} solid ${COLORS.grey1};
      border-bottom: 0;
      opacity: 0;
    }
    &[open]::before {
      animation: 0.16s ease-out ${opacity};
      opacity: 1;
    }

    &[open] + .k-DashboardMenu__list--hideable {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .k-DashboardMenu__selectorSummary {
    position: relative;
    z-index: 1;

    list-style: none;
    touch-callout: none;
    user-select: none;
    cursor: pointer;

    padding: 0 ${pxToRem(10)};
    height: ${pxToRem(70)};
    border-radius: ${pxToRem(4)};

    ::-webkit-details-marker {
      display: none;
    }

    .k-DashboardMenu__selectorSummary__flex {
      height: 100%;
      align-items: center;
    }
  }

  .k-DashboardMenu__selectorList {
    position: absolute;
    z-index: 5;

    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: ${pxToRem(2)};

    top: ${pxToRem(70 + 2)};
    left: ${pxToRem(-5)};
    right: ${pxToRem(-5)};
    max-height: ${pxToRem(4 * 70 + 3 * 2 + 2 + 3)};
    padding: 0 ${pxToRem(3)} ${pxToRem(3)};
    overflow-y: scroll;

    box-sizing: border-box;
    background: ${COLORS.font1};

    transform-origin: top left;
    pointer-events: none;

    border-bottom-left-radius: ${pxToRem(8)};
    border-bottom-right-radius: ${pxToRem(8)};
    border: ${pxToRem(2)} solid ${COLORS.grey1};
    border-top: 0;

    .k-DashboardMenu__selectorButton {
      pointer-events: auto;
    }
  }
`

export const DashboardMenu = ({ className, ...props }) => (
  <StyledDashboardMenu
    className={classNames('k-DashboardMenu', className)}
    {...props}
  />
)

const List = ({ className, subList, hideable, ...props }) => (
  <ul
    className={classNames('k-DashboardMenu__list', className, {
      'k-DashboardMenu__list--subList': !!subList,
      'k-DashboardMenu__list--hideable': !!hideable,
    })}
    {...props}
  />
)

const Item = ({
  className,
  icon,
  endIcon,
  isActive,
  children,
  size = 'default',
  ...props
}) => (
  <li className="k-DashboardMenu__itemWrapper">
    <a
      className={classNames(
        'k-DashboardMenu__item',
        className,
        `k-DashboardMenu__item--${size}`,
      )}
      aria-current={isActive ? 'page' : null}
      {...props}
    >
      {icon && (
        <span className="k-DashboardMenu__iconWrapper">
          {typeof icon === 'function' ? icon() : icon}
        </span>
      )}
      <span className="k-DashboardMenu__item__text">{children}</span>
      {endIcon && (
        <span className="k-DashboardMenu__iconWrapper">{endIcon}</span>
      )}
    </a>
  </li>
)

const Expandable = ({ className, children, icon, title, ...props }) => {
  const [hasActiveInside, setActiveInside] = useState(false)

  useEffect(() => {
    setActiveInside(false)
    const hasActiveChild = find(child => child?.props?.isActive)(children)
    setActiveInside(hasActiveChild)
  })

  return (
    <li className="k-DashboardMenu__expandableWrapper">
      <details
        className={classNames('k-DashboardMenu__expandable', className, {
          'k-DashboardMenu__expandable--hasActiveInside': hasActiveInside,
        })}
        open={hasActiveInside ? hasActiveInside : null}
        {...props}
      >
        <summary>
          <div className="k-DashboardMenu__expandable__title">
            {icon && (
              <span className="k-DashboardMenu__iconWrapper">{icon()}</span>
            )}
            <span className="k-DashboardMenu__expandable__title__text">
              {title}
            </span>
            <span className="k-DashboardMenu__expandable__title__arrow">
              <ArrowIcon direction="bottom" />
            </span>
          </div>
        </summary>
        <ul className="k-DashboardMenu__expandable__list">{children}</ul>
      </details>
    </li>
  )
}

const Separator = ({ className, children, ...props }) => (
  <div
    className={classNames('k-DashboardMenu__separator', className)}
    {...props}
  >
    <hr />
    {children}
  </div>
)

const Selector = ({ data, className, ...props }) => {
  const detailsElement = useRef(null)

  useEffect(() => {
    if (!!detailsElement.current) {
      detailsElement.current.addEventListener('toggle', handleDetails)
    }

    return () => {
      if (!!detailsElement.current) {
        detailsElement.current.removeEventListener('toggle', handleDetails)
      }
    }
  }, [detailsElement])

  const handleDetails = event => {
    if (event.target.open) {
      window.addEventListener('keydown', handleEsc)
      window.addEventListener('click', handleClickOutside)
      event.target
        .querySelector('.k-DashboardMenu__selectorButton:first-child')
        .focus()
    } else {
      window.removeEventListener('keydown', handleEsc)
      window.removeEventListener('click', handleClickOutside)
    }
  }

  const handleEsc = event => {
    if (event.key === 'Escape' && detailsElement?.current) {
      detailsElement.current.open = false
    }
  }

  const handleClickOutside = event => {
    if (detailsElement?.current && !detailsElement.current.contains(event.target)) {
      detailsElement.current.open = false
    }
  }

  if (data.length === 1) {
    const { children, icon, isActive, ...dataProps } = data[0]

    return (
      <div
        {...dataProps}
        className={classNames(
          'k-DashboardMenu__selectorButton',
          dataProps.className,
          className,
        )}
      >
        {!!icon && <span className="k-DashboardMenu__iconWrapper">{icon}</span>}
        <span className="k-DashboardMenu__selectorButton__text">
          {children}
        </span>
      </div>
    )
  }

  const activeItem = find(item => item.isActive === true)(data)

  const {
    className: activeClassName,
    icon: activeIcon,
    children: activeChildren,
  } = activeItem

  return (
    <details
      ref={detailsElement}
      className={classNames('k-DashboardMenu__selectorWrapper', className)}
      {...props}
    >
      <summary
        className={classNames(
          'k-DashboardMenu__selectorSummary',
          activeClassName,
        )}
      >
        <FlexWrapper
          gap={10}
          direction="row"
          className="k-DashboardMenu__selectorSummary__flex"
        >
          {!!activeIcon && (
            <span className="k-DashboardMenu__iconWrapper">{activeIcon}</span>
          )}
          <span className="k-DashboardMenu__selectorButton__text">
            {activeChildren}
          </span>
          <span className="k-DashboardMenu__iconWrapper">
            <DoubleArrowIcon color="currentColor" />
          </span>
        </FlexWrapper>
      </summary>

      <div className="k-DashboardMenu__selectorList">
        {data.map(({ icon, children, isActive, ...itemProps }, index) => {
          if (isActive) return
          return (
            <a
              key={children + index}
              {...itemProps}
              className={classNames(
                'k-DashboardMenu__selectorButton',
                itemProps.className,
              )}
            >
              {!!icon && (
                <span className="k-DashboardMenu__iconWrapper">{icon}</span>
              )}
              <span className="k-DashboardMenu__selectorButton__text">
                {children}
              </span>
            </a>
          )
        })}
      </div>
    </details>
  )
}

Item.proptypes = {
  icon: PropTypes.func,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
}

Expandable.proptypes = {
  icon: PropTypes.func,
  title: PropTypes.node,
}

DashboardMenu.List = List
DashboardMenu.Item = Item
DashboardMenu.Expandable = Expandable
DashboardMenu.Separator = Separator
DashboardMenu.Selector = Selector
