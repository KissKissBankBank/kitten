import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { mq, ScreenConfig } from '../../../constants/screen-config'

const StyledFloatingMenu = styled.nav`
  border: var(--border);
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(30)};
  background-color: var(--color-grey-000);
  overflow: hidden;
  min-width: ${pxToRem(185)};
  border-bottom-left-radius: var(--border-radius-m);
  border-bottom-right-radius: var(--border-radius-m);

  @media ${mq.mobile} {
    border-top: 0;
  }

  @media ${mq.desktop} {
    border-radius: var(--border-radius-m);
    padding: ${pxToRem(10)} 0;
  }

  .k-FloatingMenu__list {
    margin: 0;
    padding: 0 ${pxToRem(10)};
    list-style: none;
    display: flex;
    gap: ${pxToRem(2)} ${pxToRem(10)};
    justify-content: space-around;
    flex-direction: row;
    overflow-x: auto;

    @media ${mq.desktop} {
      padding: 0;
      flex-direction: column;
    }

    .k-FloatingMenu__item {
      height: ${pxToRem(50)};
      padding-bottom: ${pxToRem(4)};
      display: flex;
      align-items: center;
      line-height: ${pxToRem(20)};
      color: var(--color-grey-900);

      ${TYPOGRAPHY.fontStyles.light}
      font-size: ${pxToRem(16)};
      text-decoration: none;
      transition: border-color var(--transition);
      white-space: nowrap;

      border-color: transparent;
      border-width: ${pxToRem(4)} 0 0;
      border-style: solid;

      @media (max-width: ${ScreenConfig.XXS.max}px) {
        font-size: ${pxToRem(14)};
      }

      @media ${mq.desktop} {
        padding-bottom: 0;
        padding-left: ${pxToRem(16)};
        border-width: 0 0 0 ${pxToRem(4)};
      }

      &[aria-current] {
        ${TYPOGRAPHY.fontStyles.bold}
        border-color: var(--color-gray-900);
      }

      &:hover,
      &:active {
        ${TYPOGRAPHY.fontStyles.bold}
      }

      &:focus-visible {
        outline-style: auto;
      }
    }
  }
`

export const FloatingMenu = ({ className, children, ...props }) => {
  return (
    <StyledFloatingMenu
      className={classNames('k-FloatingMenu', className)}
      {...props}
    >
      <ul className="k-FloatingMenu__list">{children}</ul>
    </StyledFloatingMenu>
  )
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
