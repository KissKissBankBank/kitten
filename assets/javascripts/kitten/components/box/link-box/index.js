import React from 'react'
import PropTypes from 'prop-types'
import { Link, TextContainer, Icon, Arrow, Container } from './styles'
import flow from 'lodash/fp/flow'
import keys from 'lodash/fp/keys'
import intersection from 'lodash/fp/intersection'
import { DeprecatedLinkBox } from './deprecated'
import classNames from 'classnames'

const deprecatedKeys = [
  'displayIcon',
  'text',
  'textTag',
  'titleTag',
  'viewportIsMobile',
]

export const LinkBox = ({ href, isExternal, linkProps, ...props }) => {
  const hasDeprecatedProps =
    flow(keys, intersection(deprecatedKeys))(props).length > 0

  if (hasDeprecatedProps) {
    return (
      <DeprecatedLinkBox
        href={href}
        isExternal={isExternal}
        linkProps={linkProps}
        {...props}
      />
    )
  }

  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <Link {...linkProps} href={href} {...target}>
      <Container>
        {props.children}

        <Arrow />
      </Container>
    </Link>
  )
}

LinkBox.Icon = Icon
LinkBox.Text = ({ children, className, ...props }) => (
  <TextContainer
    {...props}
    className={classNames(
      'k-u-margin-top-double',
      'k-u-margin-bottom-double',
      className,
    )}
  >
    {children}
  </TextContainer>
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
