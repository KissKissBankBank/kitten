import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Item = ({ children, href, className, ...props }) => (
  <li className="k-HeaderNav-nav__element" role="menuitem">
    <a
      {...props}
      href={href}
      className={classNames('k-HeaderNav-nav__item', className)}
    >
      {children}
    </a>
  </li>
)

Item.proptypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
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
