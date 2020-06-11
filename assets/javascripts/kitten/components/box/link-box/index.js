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
]

export const LinkBox = ({
  className,
  href,
  isExternal,
  linkProps,
  ...props
}) => {
  if (hasDeprecatedProps(deprecatedKeys)(props)) {
    return (
      <DeprecatedLinkBox
        href={href}
        isExternal={isExternal}
        linkProps={linkProps}
        className={classNames(className, linkProps.className)}
        {...props}
      />
    )
  }

  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <StyledLinkBox
      {...linkProps}
      {...target}
      href={href}
      className={classNames(className, linkProps.className)}
    >
      <div className="LinkBox__link">
        {props.children}

        <div className="LinkBox__arrow">
          <ArrowIcon className="k-ButtonIcon__svg" />
        </div>
      </div>
    </StyledLinkBox>
  )
}

LinkBox.Icon = ({ children, className, ...props }) => (
  <div {...props} className={classNames('LinkBox__icon', className)}>
    {children}
  </div>
)

LinkBox.Text = ({ children, className, ...props }) => (
  <div
    {...props}
    className={classNames(
      'k-u-margin-top-double',
      'k-u-margin-bottom-double',
      'LinkBox__textContainer',
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
  linkProps: {},
}

// DEPRECATED: do not use default export.
export default LinkBox
