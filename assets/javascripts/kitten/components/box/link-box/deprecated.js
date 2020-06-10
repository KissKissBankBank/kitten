import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { Marger } from '../../../components/layout/marger'
import {
  Link,
  DeprecatedTextContainer,
  DeprecatedIcon,
  Arrow,
  DeprecatedContainer,
} from './styles'
import deprecated from 'prop-types-extra/lib/deprecated'

export const DeprecatedLinkBox = ({
  title,
  titleTag,
  isExternal,
  href,
  text,
  textTag,
  linkProps,
  viewportIsMobile,
  displayIcon,
  children,
}) => {
  const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <Link {...linkProps} href={href} {...target}>
      <DeprecatedContainer>
        {!!displayIcon && (
          <DeprecatedIcon className="k-u-hidden@xs-down--important">
            {children}
          </DeprecatedIcon>
        )}
        <DeprecatedTextContainer className="k-u-margin-top-double k-u-margin-bottom-double">
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
        </DeprecatedTextContainer>

        <Arrow />
      </DeprecatedContainer>
    </Link>
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
