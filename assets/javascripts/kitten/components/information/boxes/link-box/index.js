import React from 'react'
import PropTypes from 'prop-types'
import { StyledLinkBox } from './styles'
import classNames from 'classnames'
import { ArrowIcon } from '../../../graphics/icons/arrow-icon'
import COLORS from '../../../../constants/colors-config'

export const LinkBox = ({
  className,
  href,
  isExternal,
  variant,
  backgroundColor,
  textColor,
  style,
  isSmall,
  ...props
}) => {
  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <StyledLinkBox {...props} {...target} href={href} className={className}>
      <span
        className={classNames(
          'k-LinkBox__link',
          className,
          `k-LinkBox__link--${variant}`,
          {
            'k-LinkBox__link--size-small': isSmall,
          },
        )}
        style={{
          ...style,
          '--LinkBox-background-color': backgroundColor,
          '--LinkBox-text-color': textColor,
        }}
      >
        {props.children}

        <span className="k-LinkBox__arrow">
          <ArrowIcon height="10" width="10" />
        </span>
      </span>
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
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  isSmall: PropTypes.bool,
}

LinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  variant: 'orion',
  backgroundColor: COLORS.background1,
  textColor: null,
  isSmall: false,
}
