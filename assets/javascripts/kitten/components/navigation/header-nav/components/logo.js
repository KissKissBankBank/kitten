import React from 'react'
import { pxToRem } from '../../../../helpers/utils/typography'

export const Logo = ({ className, children, ...props }) => (
  <a className={`k-HeaderNav-Logo ${className}`} {...props}>
    {children}
  </a>
)
