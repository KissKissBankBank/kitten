import React from 'react'
import PropTypes from 'prop-types'
import { HorizontalNav } from '../../../../components/navigation/horizontal-nav'
import { pxToRem } from '../../../../helpers/utils/typography'

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

export const Nav = ({ children }) => (
  <nav className="k-HeaderNav-nav">
    <ul role="menubar" className="k-HeaderNav-nav__list">
      {children}
    </ul>
  </nav>
)

Nav.Item = Item
