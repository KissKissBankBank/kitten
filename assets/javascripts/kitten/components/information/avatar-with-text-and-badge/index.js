import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Badge as BadgeComponent } from '../../information/badge'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { getReactElementsByType } from '../../../helpers/react/get-react-elements'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  text-decoration: none;
  gap: ${pxToRem(10)};

  .k-Avatar {
    position: relative;
    padding: 0;
  }

  .k-Avatar__imageWrapper {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    border-radius: var(--border-radius-rounded);
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    border: var(--border-width) solid var(--color-grey-300);
    padding: 0;

    color: var(--k-Avatar-color);
    background-color: var(--k-Avatar-background-color);
  }

  .k-Avatar__image {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
  }

  .k-Avatar__noImage {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    ${TYPOGRAPHY.fontStyles['500']}
    font-size: ${stepToRem(-2)};
    line-height: 1;
  }

  .k-Avatar__badge {
    position: absolute;
    top: ${pxToRem(-4)};
    right: ${pxToRem(-8)};
    border: var(--border-width) solid white;
  }

  .k-Avatar__text {
    padding: pxToRem(10);
    padding-right: 0;
    text-align: left;
    color: ${COLORS.font1};
    text-decoration: none;

    ${TYPOGRAPHY.fontStyles['500']}
    font-size: ${stepToRem(-1)};
    line-height: 1.2;
  }

  .k-Avatar__text--hasEllipsis {
    &,
    & * {
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .k-Avatar--small {
    .k-Avatar__imageWrapper {
      width: ${pxToRem(30)};
      height: ${pxToRem(30)};
    }

    .k-Avatar__noImage {
      font-size: ${stepToRem(-2)};
    }

    & + .k-Avatar__text {
      font-size: ${stepToRem(-2)};
    }
  }

  .k-Avatar--large {
    margin-right: ${pxToRem(15)};

    .k-Avatar__imageWrapper {
      width: ${pxToRem(60)};
      height: ${pxToRem(60)};
    }
    .k-Avatar__noImage {
      font-size: ${stepToRem(-1)};
    }

    & + .k-Avatar__text {
      font-size: ${stepToRem(0)};
    }
  }

  .k-Avatar--customSize {
    width: var(--Avatar-width);
    height: var(--Avatar-height);
  }

  a&,
  button&,
  &.k-Avatar__wrapper--isHoverable {
    cursor: pointer;

    .k-Avatar {
      opacity: 1;
      transition: opacity 0.2s;
    }

    &:hover .k-Avatar,
    &:focus .k-Avatar {
      opacity: 0.8;
      border: var(--border-hover);
    }
  }
`

const Image = ({
  alt,
  backgroundColor,
  children,
  className,
  height,
  size,
  src,
  style,
  text,
  textColor,
  width,
  ...props
}) => {
  const badgeElement = getReactElementsByType({
    children,
    type: AvatarWithTextAndBadge.Badge,
  })

  const badge = badgeElement && badgeElement[0]

  return (
    <div
      className={classNames('k-Avatar', className, `k-Avatar--${size}`, {
        'k-Avatar--customSize': width && height,
      })}
      style={{
        ...style,
        '--k-Avatar-color': textColor,
        '--k-Avatar-background-color': backgroundColor,
        '--Avatar-width': width,
        '--Avatar-height': height,
      }}
    >
      <span className="k-Avatar__imageWrapper">
        {src ? (
          <img className="k-Avatar__image" src={src} alt={alt} {...props} />
        ) : (
          <span className="k-Avatar__noImage">{text}</span>
        )}
      </span>
      {badge}
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Image.defaultProps = {
  src: null,
  textColor: COLORS.background1,
  backgroundColor: COLORS.primary3,
  alt: '',
  size: 'medium',
}

const Badge = ({ backgroundColor, className, a11yText, ...props }) => (
  <BadgeComponent
    className={classNames('k-Avatar__badge', className)}
    color={backgroundColor}
    a11yText={a11yText}
    {...props}
  />
)

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string,
}

Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)',
}

const Text = ({ className, withEllipsisOverflow, ...props }) => {
  return (
    <span
      className={classNames('k-Avatar__text', className, {
        'k-Avatar__text--hasEllipsis': withEllipsisOverflow,
      })}
      {...props}
    />
  )
}

Text.propTypes = {
  withEllipsisOverflow: PropTypes.bool,
}

Text.defaultProps = {
  withEllipsisOverflow: false,
}

export const AvatarWithTextAndBadge = ({ className, hoverable, ...props }) => {
  return (
    <StyledWrapper
      className={classNames('k-Avatar__wrapper', className, {
        'k-Avatar__wrapper--isHoverable': hoverable,
      })}
      {...props}
    />
  )
}

AvatarWithTextAndBadge.propTypes = {
  hoverable: PropTypes.bool,
}

AvatarWithTextAndBadge.defaultProps = {
  hoverable: false,
}

AvatarWithTextAndBadge.Image = Image
AvatarWithTextAndBadge.Badge = Badge
AvatarWithTextAndBadge.Text = Text
