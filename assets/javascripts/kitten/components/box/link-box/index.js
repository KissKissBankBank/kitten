import React from 'react'
import PropTypes from 'prop-types'
import { StyledLinkBox } from './styles'
import classNames from 'classnames'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

export const LinkBox = ({ className, href, isExternal, ...props }) => {
  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <StyledLinkBox {...props} {...target} href={href} className={className}>
      <div className="k-LinkBox__link">
        {props.children}

        <div className="k-LinkBox__arrow">
          <ArrowIcon height="10" width="10" />
        </div>
      </div>
    </StyledLinkBox>
  )
}

LinkBox.Icon = ({ children, className, ...props }) => (
  <div {...props} className={classNames('k-LinkBox__icon', className)}>
    {children}
  </div>
)

LinkBox.Text = ({ children, className, ...props }) => (
  <div {...props} className={classNames('k-LinkBox__textContainer', className)}>
    {children}
  </div>
)

LinkBox.propTypes = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  linkProps: PropTypes.object,
}

LinkBox.defaultProps = {
  href: '#',
  isExternal: false,
}
