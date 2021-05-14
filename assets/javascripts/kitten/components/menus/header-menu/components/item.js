import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { ArrowIcon } from '../../../icons/arrow-icon'
import { Button } from '../../../../components/buttons/button'

export const Item = ({
  children,
  external,
  liProps,
  modifier,
  button,
  size,
  isSelected,
  as,
  ...other
}) => {
  const Component = as

  return (
    <li
      role="menuitem"
      {...liProps}
      className={classNames(
        'k-HeaderMenu__item',
        liProps.className,
        `k-HeaderMenu__item--${size}`,
        {
          'k-HeaderMenu__item--external': external,
          'k-HeaderMenu__item--isSelected': isSelected,
          'k-HeaderMenu__item--hasButton': button,
          'k-HeaderMenu__item--light': modifier === 'light',
        },
      )}
    >
      {button ? (
        <Button
          modifier={modifier}
          fluid
          {...other}
          className={classNames('k-HeaderMenu__item__button', other.className)}
          as={as}
        >
          {children}
        </Button>
      ) : (
        <Component
          {...other}
          className={classNames('k-HeaderMenu__item__link', other.className)}
          aria-current={isSelected ? 'page' : null}
        >
          {children}
          {external && (
            <ArrowIcon
              className="k-HeaderMenu__item__arrow headerMenuArrowIcon"
              direction="right"
            />
          )}
        </Component>
      )}
    </li>
  )
}

Item.propTypes = {
  external: PropTypes.bool,
  button: PropTypes.bool,
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  liProps: PropTypes.object,
  modifier: PropTypes.oneOf([
    null,
    undefined,
    'light',
    'default',
    'hydrogen',
    'helium',
    'lithium',
    'beryllium',
    'carbon',
    'oxygen',
    'copper',
    'checked',
  ]),
  size: PropTypes.oneOf(['normal', 'tiny', 'big']),
  as: PropTypes.string,
}

Item.defaultProps = {
  external: false,
  button: false,
  modifier: null,
  href: null,
  isSelected: false,
  liProps: {},
  size: 'normal',
  as: 'a',
}
