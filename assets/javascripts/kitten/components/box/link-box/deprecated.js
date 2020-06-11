import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { Marger } from '../../../components/layout/marger'
import { StyledLinkBox } from './styles'
import deprecated from 'prop-types-extra/lib/deprecated'
import classNames from 'classnames'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

export const DeprecatedLinkBox = ({
  children,
  className,
  displayIcon,
  href,
  isExternal,
  linkProps,
  text,
  textTag,
  title,
  titleTag,
  viewportIsMobile,
}) => {
  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <StyledLinkBox {...linkProps} href={href} {...target} className={className}>
      <div className="LinkBox__link LinkBox__link--deprecated">
        {!!displayIcon && (
          <div
            className={classNames(
              'LinkBox__icon',
              'LinkBox__icon--deprecated',
              'k-u-hidden@xs-down--important',
            )}
          >
            {children}
          </div>
        )}
        <div
          className={classNames(
            'LinkBox__textContainer',
            'LinkBox__textContainer--deprecated',
            'k-u-margin-top-double',
            'k-u-margin-bottom-double',
          )}
        >
          <Marger bottom={text ? 0.5 : 0}>
            <Text
              tag={titleTag}
              weight="regular"
              size={viewportIsMobile ? 'tiny' : 'default'}
              color="font1"
              style={{ lineHeight: 1 }}
            >
              {title}
            </Text>
          </Marger>

          {text && (
            <Text
              tag={textTag}
              weight="light"
              size="tiny"
              color="font1"
              style={{ lineHeight: 1.3 }}
            >
              {text}
            </Text>
          )}
        </div>

        <div className="LinkBox__arrow">
          <ArrowIcon className="k-ButtonIcon__svg" />
        </div>
      </div>
    </StyledLinkBox>
  )
}

DeprecatedLinkBox.propTypes = {
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  linkProps: PropTypes.object,
  // deprecated
  displayIcon: deprecated(
    PropTypes.bool,
    'Use `Linkbox.Icon` component instead',
  ),
  text: deprecated(PropTypes.string, 'Use `Linkbox.Text` component instead'),
  textTag: deprecated(PropTypes.string, 'Use `Linkbox.Text` component instead'),
  title: deprecated(
    PropTypes.string.isRequired,
    'Use `Linkbox.Text` component instead',
  ),
  titleTag: deprecated(
    PropTypes.string,
    'Use `Linkbox.Text` component instead',
  ),
  viewportIsMobile: deprecated(
    PropTypes.bool,
    'Use media query style in <Linkbox.Text /> component or child instead',
  ),
}

DeprecatedLinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  linkProps: {},
  // deprecated
  displayIcon: false,
  text: '',
  textTag: 'span',
  titleTag: 'span',
  viewportIsMobile: false,
}
