import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Item = ({ children, href, isSelected, className, ...props }) => {
  const itemClassNames = classNames(
    'k-HeaderNav-nav__item',
    { 'is-selected': isSelected },
    className,
  )

  return (
    <li className="k-HeaderNav-nav__element" role="menuitem">
      <a
        {...props}
        href={href}
        className={itemClassNames}
        aria-current={isSelected ? 'page' : null}
      >
        {children}
      </a>
    </li>
  )
}

Item.proptypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
}

export const Nav = ({ children, className, ...props }) => (
  <ul
    {...props}
    role="menubar"
    className={classNames('k-HeaderNav-nav', className)}
  >
    {children}
  </ul>
)

Nav.Item = Item
