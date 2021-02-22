import React from 'react'
import PropTypes from 'prop-types'
import { StyledLinkBox } from './styles'
import { hasDeprecatedProps } from '../../../helpers/utils/deprecated'
import { DeprecatedLinkBox } from './deprecated'
import classNames from 'classnames'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

const deprecatedKeys = [
  'displayIcon',
  'text',
  'textTag',
  'titleTag',
  'viewportIsMobile',
  'linkProps',
]

export const LinkBox = ({ className, href, isExternal, ...props }) => {
  if (hasDeprecatedProps(deprecatedKeys)(props)) {
    return (
      <DeprecatedLinkBox
        href={href}
        isExternal={isExternal}
        className={classNames(className, (props.linkProps || {}).className)}
        {...props}
      />
    )
  }

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
  <div
    {...props}
    className={classNames(
      'k-u-margin-top-double',
      'k-u-margin-bottom-double',
      'k-LinkBox__textContainer',
      className,
    )}
  >
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

// DEPRECATED: do not use default export.
export default LinkBox
