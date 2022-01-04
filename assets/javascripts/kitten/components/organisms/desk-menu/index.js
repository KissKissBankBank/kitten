import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { getReactElementsByType } from '../../../helpers/react/react-elements'

const StyledDeskMenu = styled.nav`
  --deskMenu-padding: ${pxToRem(15)};
  --deskMenu-image-size: ${pxToRem(70)};

  &.k-DeskMenuWrapper--hasImage {
    padding-top: calc(var(--deskMenu-image-size) / 2);
  }

  .k-DeskMenu {
    border: var(--border);
    border-radius: var(--border-radius-m);
    padding: var(--deskMenu-padding);
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(30)};
    background-color: var(--color-grey-000);
  }

  .k-DeskMenu__header {
    .k-DeskMenu__header__image {
      margin-top: calc(
        -1 * (var(--deskMenu-padding) + (var(--deskMenu-image-size) / 2))
      );
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${pxToRem(15)};
      width: var(--deskMenu-image-size);
      height: var(--deskMenu-image-size);
      object-fit: cover;
      object-position: center;
      display: block;
      border-radius: var(--border-radius-rounded);
      border: var(--border-width) solid var(--color-grey-300);
    }

    .k-DeskMenu__header__content {
      text-align: center;
    }
  }

  .k-DeskMenu__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(2)};

    .k-DeskMenu__item {
      ${TYPOGRAPHY.fontStyles.regular}

      font-size: ${pxToRem(14)};
      text-decoration: none;
      transition: background-color var(--transition), color var(--transition);
    }

    .k-DeskMenu__item:not(.k-DeskMenu__item--link) {
      display: block;
      padding: ${pxToRem(15)} ${pxToRem(20)};
      border: 0;
      background-color: var(--color-grey-000);
      border-radius: var(--border-radius-xs);
      text-align: left;

      color: var(--color-grey-900);

      &[aria-current] {
        background-color: var(--color-primary-100);
      }

      &:hover,
      &:active {
        background-color: var(--color-primary-300);
      }

      &:focus-visible {
        outline-style: auto;
      }
    }

    .k-DeskMenu__item.k-DeskMenu__item--link {
      color: var(--color-primary-500);
      display: block;
      text-align: center;
      margin-bottom: ${pxToRem(5)};

      &:hover {
        color: var(--color-primary-700);
      }

      &:active {
        color: var(--color-primary-900);
      }

      &:focus-visible {
        outline-style: auto;
      }
    }
  }
`

export const DeskMenu = ({ className, children, ...props }) => {
  const HeaderChild = getReactElementsByType({ children, type: Header })[0]
  const imageProps = Object.keys(HeaderChild?.props?.imageProps || {}) || []

  return (
    <StyledDeskMenu
      className={classNames('k-DeskMenuWrapper', className, {
        'k-DeskMenuWrapper--hasImage': imageProps.length > 0,
      })}
      {...props}
    >
      <div className="k-DeskMenu">{children}</div>
    </StyledDeskMenu>
  )
}

const Header = ({ children, className, imageProps, ...props }) => (
  <div className={classNames('k-DeskMenu__header', className)} {...props}>
    {Object.keys(imageProps).length > 0 && (
      <img
        alt=""
        {...imageProps}
        className={classNames(
          'k-DeskMenu__header__image',
          imageProps.className,
        )}
      />
    )}
    <div className="k-DeskMenu__header__content">{children}</div>
  </div>
)

const List = ({ className, ...props }) => (
  <ul className={classNames('k-DeskMenu__list', className)} {...props} />
)

const Item = ({ className, isActive, children, as, linkStyle, ...props }) => {
  const Element = as

  return (
    <li className="k-DeskMenu__itemWrapper">
      <Element
        className={classNames('k-DeskMenu__item', className, {
          'k-DeskMenu__item--link': linkStyle,
        })}
        aria-current={isActive ? 'page' : null}
        {...props}
      >
        {children}
      </Element>
    </li>
  )
}

Header.defaultProps = {
  imageProps: {},
}

Header.propTypes = {
  imageProps: PropTypes.object,
}

Item.defaultProps = {
  isActive: false,
  as: 'a',
  linkStyle: false,
}
Item.proptypes = {
  isActive: PropTypes.bool,
  as: PropTypes.oneOf(['a', 'button']),
  linkStyle: PropTypes.bool,
}

DeskMenu.Header = Header
DeskMenu.List = List
DeskMenu.Item = Item
