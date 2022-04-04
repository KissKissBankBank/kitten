import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import find from 'lodash/fp/find'

import { ArrowIcon } from '../../graphics/icons/arrow-icon'
import { DoubleArrowIcon } from '../../graphics/icons/double-arrow-icon'
import { FlexWrapper } from '../../layout/flex-wrapper'
import { StyledDashboardMenu } from './styles'

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
      {!!icon && (
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

const Expandable = ({
  className,
  children,
  icon,
  title,
  size = 'default',
  ...props
}) => {
  return (
    <li className="k-DashboardMenu__expandableWrapper">
      <details
        className={classNames(
          'k-DashboardMenu__expandable',
          className,
          `k-DashboardMenu__expandable--${size}`,
        )}
        {...props}
      >
        <summary>
          <div className="k-DashboardMenu__expandable__title">
            {!!icon && (
              <span className="k-DashboardMenu__iconWrapper">
                {typeof icon === 'function' ? icon() : icon}
              </span>
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
    if (
      detailsElement?.current &&
      !detailsElement.current.contains(event.target)
    ) {
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
          'k-u-margin-top-single',
          'k-u-margin-bottom-noneHalf',
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

  const activeItem = find(item => item.isActive)(data)
  const {
    className: activeClassName,
    icon: activeIcon,
    children: activeChildren,
  } = activeItem || {}

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
          gap={15}
          direction="row"
          className="k-DashboardMenu__selectorSummary__flex"
        >
          {!!activeIcon && (
            <span className="k-DashboardMenu__iconWrapper">{activeIcon}</span>
          )}
          <span className="k-DashboardMenu__selectorButton__text">
            {activeChildren}
          </span>
          <span className="k-DashboardMenu__iconWrapper k-DashboardMenu__selectorButton__arrow">
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
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
}

Expandable.proptypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  title: PropTypes.node,
  size: PropTypes.oneOf(['default', 'small']),
}

Selector.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node,
      isActive: PropTypes.bool,
      icon: PropTypes.node,
    }),
  ),
}

DashboardMenu.List = List
DashboardMenu.Item = Item
DashboardMenu.Expandable = Expandable
DashboardMenu.Separator = Separator
DashboardMenu.Selector = Selector
