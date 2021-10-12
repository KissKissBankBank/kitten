import React from 'react'
import PropTypes from 'prop-types'
import { StyledLinkBox } from './styles'
import classNames from 'classnames'
import { ArrowIcon } from '../../../../components/graphics/icons/arrow-icon'
import COLORS from '../../../../constants/colors-config'

export const LinkBox = ({
  className,
  href,
  isExternal,
  variant,
  backgroundColor,
  textColor,
  style,
  ...props
}) => {
  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <StyledLinkBox {...props} {...target} href={href} className={className}>
      <div
        className={classNames(
          'k-LinkBox__link',
          className,
          `k-LinkBox__link--${variant}`,
        )}
        style={{
          ...style,
          '--LinkBox-background-color': backgroundColor,
          '--LinkBox-text-color': textColor,
        }}
      >
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
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
}

LinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  variant: 'orion',
  backgroundColor: COLORS.background1,
  textColor: null,
}
