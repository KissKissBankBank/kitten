import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Text as KittenText } from '../../../components/typography/text'
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden'
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
  <span
    className="k-ButtonWithBadge__badge k-Badge"
    style={{ backgroundColor }}
    aria-hidden="true"
  >
    {children}
    <VisuallyHidden>{`${children.toString()} ${a11yText}`}</VisuallyHidden>
  </span>
)

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string,
}

Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)',
}

const Text = ({ textClassName, withEllipsisOverflow, children, ...props }) => {
  const textClassNames = [
    textClassName,
    withEllipsisOverflow ? 'text--withEllipsis' : '',
    'k-ButtonImageWithText__text',
    'k-ButtonImageWithText__text--withoutPaddingRight',
    'always-visible',
  ]
    .filter(className => !!className)
    .join(' ')

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
