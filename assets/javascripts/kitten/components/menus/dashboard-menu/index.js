import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

const StyledDashboardMenu = styled.nav`
  color: ${COLORS.font2};

  .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__item {
    &, &:visited, &:link {
      color: ${COLORS.font2};
      font-size: ${stepToRem(-1)};
      text-decoration: none;
    }

    &:focus, &:hover {
      color: ${COLORS.primary1} !important;
    }
    &:focus {
      outline: ${COLORS.primary3} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
  }

  /* BLOCK STYLES */

  .k-DashboardMenu__list,
  .k-DashboardMenu__expandable__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .k-DashboardMenu__expandable__title::-webkit-details-marker {
    display: none;
  }
  .k-DashboardMenu__expandable__title {
    list-style: none;
  }

  .k-DashboardMenu__item .k-DashboardMenu__item__text,
  .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text {
    flex: 1 0 auto;
  }

  .k-DashboardMenu__expandable {
    border-radius: ${pxToRem(6)};
    background-color: ${COLORS.line3};

    .k-DashboardMenu__expandable__list {
      padding: 0 ${pxToRem(40)} ${pxToRem(20)} ${pxToRem(60)};
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(10)};
    }
  }

  .k-DashboardMenu__list > li > .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item {
    display: flex;
    height: ${pxToRem(50)};
    align-items: center;
    gap: ${pxToRem(10)};
    padding: 0 ${pxToRem(10)};
    border-radius: ${pxToRem(6)};
  }


  /* TEXT STYLES */
  .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item {
    ${TYPOGRAPHY.fontStyles.regular}
    background-color: ${COLORS.font1};
    transition: color .2s ease, background-color .2s ease;
    cursor: pointer;
  }
  .k-DashboardMenu__expandable--hasActiveInside .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current="page"] {
    color: ${COLORS.background1};
    background-color: ${COLORS.line3};
  }

  .k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item {
    ${TYPOGRAPHY.fontStyles.light}
    line-height: ${pxToRem(18)};
    transition: color .2s ease;

    &[aria-current="page"] {
      ${TYPOGRAPHY.fontStyles.regular}
      color: ${COLORS.primary1};
    }
  }

  /* ICON STYLES */

  .k-DashboardMenu__iconWrapper {
    display: inline-flex;
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    align-items: center;
    justify-content: center;

    svg {
      max-width: ${pxToRem(25)};
      max-height: ${pxToRem(25)};

      &[fill], d[fill] {
        transition: fill .2s ease-in-out;
      }
    }
  }

  .k-DashboardMenu__expandable__title__arrow {
    flex: 0 0 auto;
    padding: ${pxToRem(5)};

    svg {
      fill: currentColor;
      transition: transform .2s ease-in-out;
    }
  }

  [open] .k-DashboardMenu__expandable__title__arrow svg {
    transform: rotate(0deg) !important;
  }
`

export const DashboardMenu = ({ className, ...props }) => {
  return (
    <StyledDashboardMenu className={classNames('k-DashboardMenu', className)}>
      <ul className="k-DashboardMenu__list" {...props} />
    </StyledDashboardMenu>
  )
}

const Item = ({ className, icon, isActive, children, ...props }) => (
  <li className="k-DashboardMenu__itemWrapper">
    <a
      className={classNames('k-DashboardMenu__item', className)}
      aria-current={isActive ? 'page' : null}
      {...props}
    >
      {icon && (
        <span className="k-DashboardMenu__iconWrapper k-DashboardMenu__item__iconWrapper">
          {icon()}
        </span>
      )}
      <span className="k-DashboardMenu__item__text">{children}</span>
    </a>
  </li>
)

const Expandable = ({ className, children, icon, title, ...props }) => {
  const [hasActiveInside, setActiveInside] = useState(false)

  useEffect(() => {
    setActiveInside(false)

    React.Children.map(children, child => {
      if (child.props?.isActive) {
        setActiveInside(true)
      }
    })
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
        <summary className="k-DashboardMenu__expandable__title">
          {icon && (
            <span className="k-DashboardMenu__iconWrapper k-DashboardMenu__expandable__iconWrapper">
              {icon()}
            </span>
          )}
          <span className="k-DashboardMenu__expandable__title__text">
            {title}
          </span>
          <span className="k-DashboardMenu__expandable__title__arrow">
            <ArrowIcon version="solid" direction="bottom" />
          </span>
        </summary>
        <ul className="k-DashboardMenu__expandable__list">{children}</ul>
      </details>
    </li>
  )
}

DashboardMenu.Item = Item
DashboardMenu.Expandable = Expandable
