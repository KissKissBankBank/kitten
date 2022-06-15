import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { mq, ScreenConfig } from '../../../constants/screen-config'

const StyledFloatingMenu = styled.nav`
  box-shadow: var(--box-shadow-m);
  border: var(--border-light);
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(30)};
  background-color: var(--color-grey-000);
  overflow: hidden;
  min-width: ${pxToRem(185)};

  .k-FloatingMenu__list {
    margin: 0;
    padding: 0 ${pxToRem(20)};
    list-style: none;
    display: flex;
    gap: ${pxToRem(2)} ${pxToRem(10)};
    justify-content: space-around;
    flex-direction: row;
    overflow-x: auto;

    .k-FloatingMenu__item {
      box-sizing: border-box;
      height: ${pxToRem(50)};
      padding-top: ${pxToRem(4)};
      display: flex;
      align-items: center;
      line-height: ${pxToRem(20)};
      color: var(--color-grey-900);

      ${TYPOGRAPHY.fontStyles['400']}
      font-size: ${pxToRem(16)};
      text-decoration: none;
      transition: border-color var(--transition);
      white-space: nowrap;

      border-color: transparent;
      border-width: 0 0 ${pxToRem(4)};
      border-style: solid;

      @media (max-width: ${ScreenConfig.XXS.max}px) {
        font-size: ${pxToRem(14)};
      }

      &[aria-current] {
        ${TYPOGRAPHY.fontStyles['500']}
        border-color: var(--color-primary-500);
      }

      &:hover,
      &:active {
        ${TYPOGRAPHY.fontStyles['500']}
      }

      &:focus-visible {
        outline-style: auto;
      }
    }
  }

  @media ${mq.desktop} {
    border-radius: none;
    box-shadow: none;

    .k-FloatingMenu__list {
      justify-content: flex-start;
      padding: 0;
      gap: ${pxToRem(2)} ${pxToRem(30)};

      .k-FloatingMenu__item {
        height: ${pxToRem(60)};
      }
    }
  }

  &:not(.k-FloatingMenu--horizontal) {
    @media ${mq.desktop} {
      box-shadow: var(--box-shadow-m);
      border: var(--border-light);
      border-radius: var(--border-radius-m);
      padding: ${pxToRem(10)} 0;

      .k-FloatingMenu__list {
        flex-direction: column;
      }
      .k-FloatingMenu__item {
        padding-top: 0;
        padding-left: ${pxToRem(16)};
        border-width: 0 0 0 ${pxToRem(4)};
        height: ${pxToRem(50)};
      }
    }
  }
`

export const FloatingMenu = ({ className, children, horizontal, ...props }) => {
  return (
    <StyledFloatingMenu
      className={classNames('k-FloatingMenu', className, {
        'k-FloatingMenu--horizontal': horizontal,
      })}
      {...props}
    >
      <ul className="k-FloatingMenu__list">{children}</ul>
    </StyledFloatingMenu>
  )
}

FloatingMenu.defaultProps = {
  horizontal: false,
}
FloatingMenu.proptypes = {
  horizontal: PropTypes.bool,
}

const Item = ({ className, isActive, children, as, ...props }) => {
  const Element = as

  return (
    <li className="k-FloatingMenu__itemWrapper">
      <Element
        className={classNames('k-FloatingMenu__item', className)}
        aria-current={isActive ? 'page' : null}
        {...props}
      >
        {children}
      </Element>
    </li>
  )
}

Item.defaultProps = {
  isActive: false,
  as: 'a',
}
Item.proptypes = {
  isActive: PropTypes.bool,
  as: PropTypes.oneOf(['a', 'button']),
}

FloatingMenu.Item = Item
