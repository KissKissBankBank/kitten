import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'

import { Badge as BadgeComponent } from '../../../components/atoms/badge'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { getReactElementsByType } from '../../../helpers/react/react-elements'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: 0;
  border: none;
  background: none;

  .k-Avatar {
    margin-right: ${pxToRem(10)};
    position: relative;
    padding: 0;
  }

  .k-Avatar__imageWrapper {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    border: 0;
    padding: 0;

    /* IE11 defaults */
    color: ${COLORS.background1};
    background-color: ${COLORS.primary3};
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

    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-2)};
    line-height: 1;
  }

  .k-Avatar__badge {
    position: absolute;
    top: ${pxToRem(-4)};
    right: ${pxToRem(-8)};
    border: ${pxToRem(2)} solid white;
  }

  .k-Avatar__text {
    padding: pxToRem(10);
    padding-right: 0;
    margin: 0;
    text-align: left;

    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
    line-height: 1.2;
  }

  .k-Avatar__text--hasEllipsis {
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .k-Avatar--big {
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

  a&, button&,
  &.k-Avatar__wrapper--isHoverable {
    cursor: pointer;

    .k-Avatar {
      opacity: 1;
      transition: opacity .2s;
    }

    &:hover .k-Avatar,
    &:focus .k-Avatar {
      opacity: .8;
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
          <img className="k-Avatar__image" src={src} alt={alt} />
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
  size: PropTypes.oneOf(['regular', 'big']),
}

Image.defaultProps = {
  src: null,
  textColor: COLORS.background1,
  backgroundColor: COLORS.primary3,
  alt: null,
  size: 'regular',
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

const Text = ({ textClassName, className, withEllipsisOverflow, ...props }) => {
  return (
    <span
      className={classNames('k-Avatar__text', textClassName, className, {
        'k-Avatar__text--hasEllipsis': withEllipsisOverflow,
      })}
      {...props}
    />
  )
}

Text.propTypes = {
  withEllipsisOverflow: PropTypes.bool,
  textClassName: deprecated(
    PropTypes.string,
    'Please use standard `className` prop.',
  ),
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
