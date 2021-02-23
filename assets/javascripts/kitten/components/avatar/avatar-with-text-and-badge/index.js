import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Text as KittenText } from '../../../components/typography/text'
import { Badge as KittenBadge } from '../../../components/atoms/badge'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { getReactElementsByType } from '../../../helpers/react/react-elements'

const WithoutAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const Image = ({
  src,
  height,
  width,
  textColor,
  backgroundColor,
  alt,
  children,
  text,
}) => {
  const badgeElement = getReactElementsByType({
    children,
    type: AvatarWithTextAndBadge.Badge,
  })

  const badge = badgeElement && badgeElement[0]

  return (
    <span className="k-ButtonWithBadge">
      <span className="k-ButtonImage">
        {src ? (
          <img
            className="k-ButtonImage__img"
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        ) : (
          <WithoutAvatar
            color={textColor}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
          >
            <KittenText size="micro" weight="regular">
              {text}
            </KittenText>
          </WithoutAvatar>
        )}
      </span>
      {badge}
    </span>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  alt: PropTypes.string,
}

Image.defaultProps = {
  src: null,
  height: pxToRem(40),
  width: pxToRem(40),
  textColor: COLORS.background1,
  backgroundColor: COLORS.primary3,
  alt: null,
}

const Badge = ({ backgroundColor, children, a11yText }) => (
  <KittenBadge
    className="k-ButtonWithBadge__badge"
    color={backgroundColor}
    a11yText={a11yText}
  >
    {children}
  </KittenBadge>
)

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string,
}

Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)',
}

const Text = ({ textClassName, withEllipsisOverflow, children }) => {
  const textClassNames = classNames(
    textClassName,
    'k-ButtonImageWithText__text',
    'k-ButtonImageWithText__text--withoutPaddingRight',
    'always-visible',
    { 'text--withEllipsis': withEllipsisOverflow },
  )

  return <span className={textClassNames}>{children}</span>
}

Text.propTypes = {
  withEllipsisOverflow: PropTypes.bool,
}

Text.defaultProps = {
  withEllipsisOverflow: false,
}

export const AvatarWithTextAndBadge = ({ children, className, ...props }) => {
  const componentClassNames = classNames(
    className,
    'k-ButtonImageWithText',
    'k-u-avoid-click',
  )

  return (
    <div className={componentClassNames} {...props}>
      {children}
    </div>
  )
}

AvatarWithTextAndBadge.Image = Image
AvatarWithTextAndBadge.Badge = Badge
AvatarWithTextAndBadge.Text = Text
