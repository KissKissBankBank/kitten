import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledClickableCard = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.k-ClickableCard--fluid {
    width: 100%;
  }

  ${({ size }) =>
    size &&
    css`
      width: ${pxToRem(size)};
    `}

  .k-ClickableCard__image {
    display: block;
    margin-bottom: ${pxToRem(20)};
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;

    transition: box-shadow 0.15s ease;

    & > * {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-position: center;
      object-fit: none;
      z-index: -1;
      ${({ backgroundColor }) => css`
        background-color: ${backgroundColor};
      `}
    }
  }

  .k-ClickableCard__image--contain > * {
    object-fit: contain;
  }

  .k-ClickableCard__image--cover > * {
    object-fit: cover;
  }

  .k-ClickableCard__image--circle {
    border-radius: 50%;
  }

  .k-ClickableCard__content {
    display: block;

    & * {
      transition: color 0.15s ease;
    }
  }

  &:hover,
  &:focus {
    ${({ borderColor }) => css`
      .k-ClickableCard__image {
        box-shadow: inset 0 0 0 ${pxToRem(2)} ${borderColor};
      }
    `}
  }

  &[aria-checked='true'] {
    ${({ borderColor }) => css`
      .k-ClickableCard__image {
        box-shadow: inset 0 0 0 ${pxToRem(2)} ${borderColor},
          inset 0 0 0 ${pxToRem(10)} ${COLORS.background1};
      }
      .k-ClickableCard__content * {
        color: ${borderColor};
      }
    `}
  }
`

export const ClickableCard = ({
  backgroundColor,
  borderColor,
  children,
  disabled,
  fluid,
  size,
  ...props
}) => {
  return (
    <StyledClickableCard
      {...props}
      className={classNames(
        'k-ClickableCard',
        'k-u-reset-button',
        props.className,
        { 'k-ClickableCard--fluid': fluid },
      )}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      size={size}
      disabled={disabled}
    >
      {children}
    </StyledClickableCard>
  )
}

const ClickableCardImage = ({ children, fit, shape, ...props }) => (
  <span
    {...props}
    className={classNames(
      'k-ClickableCard__image',
      props.className,
      `k-ClickableCard__image--${shape}`,
      `k-ClickableCard__image--${fit}`,
    )}
  >
    {children}
  </span>
)

const ClickableCardContent = ({ children, ...props }) => (
  <span
    {...props}
    className={classNames('k-ClickableCard__content', props.className)}
  >
    {children}
  </span>
)

ClickableCard.Image = ClickableCardImage

ClickableCard.Content = ClickableCardContent

ClickableCard.defaultProps = {
  backgroundColor: COLORS.primary6,
  borderColor: COLORS.primary1,
  disabled: false,
  fluid: false,
}

ClickableCard.propTypes = {
  /**
    Image background color (as a CSS color string)
  */
  backgroundColor: PropTypes.string,
  /**
    Image border and text hover color (as a CSS color string)
  */
  borderColor: PropTypes.string,
  /**
    Is card disabled?
  */
  disabled: PropTypes.bool,
  /**
    Card width, in pixels, without unit
  */
  size: PropTypes.number,
}

ClickableCardImage.defaultProps = {
  fit: 'cover',
  shape: 'square',
}

ClickableCardImage.propTypes = {
  /**
    Image fit in the zone
  */
  fit: PropTypes.oneOf(['cover', 'contain', 'none']),
  /**
    Shape of the image zones
  */
  shape: PropTypes.oneOf(['circle', 'square']),
}
