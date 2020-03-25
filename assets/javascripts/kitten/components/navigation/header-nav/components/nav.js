import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Item = ({ children, href, className, ...others }) => (
  <li className="k-HeaderNav-nav__element" role="menuitem">
    <a href={href} className={`k-HeaderNav-nav__item ${className}`} {...others}>
      {children}
    </a>
  </li>
)

Item.proptypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const Nav = ({ children, className }) => (
  <ul role="menubar" className={classNames('k-HeaderNav-nav', className)}>
    {children}
  </ul>
)

Nav.Item = Item
