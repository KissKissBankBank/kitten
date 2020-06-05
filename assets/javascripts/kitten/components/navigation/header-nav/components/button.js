import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import {
  MOBILE_HEADER_HEIGHT,
  TABLET_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from '../config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { getScreenSizeFrom } from '../../../../helpers/utils/media-queries'
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden'

const horizontalPadding = css`
  padding-left: ${pxToRem(30)};
  padding-right: ${pxToRem(30)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    padding-left: ${pxToRem(40)};
    padding-right: ${pxToRem(40)};
  }
`

const StyledLink = styled.a`
  ${TYPOGRAPHY.fontStyles.regular}
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${stepToRem(-1)};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-decoration: none;

  ${({ textShownFromMediaQuery, icon, text }) => {
    if (icon && !text) {
      return css`
        width: ${pxToRem(MOBILE_HEADER_HEIGHT)};
        height: ${pxToRem(MOBILE_HEADER_HEIGHT)};

        @media (min-width: ${ScreenConfig.S.min}px) {
          width: ${pxToRem(TABLET_HEADER_HEIGHT)};
          height: ${pxToRem(TABLET_HEADER_HEIGHT)};
        }

        @media (min-width: ${ScreenConfig.L.min}px) {
          width: ${pxToRem(DESKTOP_HEADER_HEIGHT)};
          height: ${pxToRem(DESKTOP_HEADER_HEIGHT)};
        }
      `
    }

    if (!textShownFromMediaQuery)
      return css`
        width: inherit;
        ${horizontalPadding}

        @media (min-width: ${ScreenConfig.L.min}px) {
          min-width: ${pxToRem(200)};
        }
      `

    const defaultWidthForLowerScreenSize =
      textShownFromMediaQuery.min &&
      css`
        @media (${textShownFromMediaQuery.min}) {
          ${horizontalPadding}
          width: inherit;
        }

        @media (min-width: ${ScreenConfig.L.min}px) {
          min-width: ${pxToRem(200)};
        }
      `

    const defaultWidthForUpperScreenSize =
      textShownFromMediaQuery.max &&
      css`
        @media (${textShownFromMediaQuery.max}) {
          ${horizontalPadding}
          width: inherit;
        }

        @media (min-width: ${ScreenConfig.L.min}px) {
          min-width: ${pxToRem(200)};
        }
      `
    return css`
      padding: 0;
      width: ${pxToRem(MOBILE_HEADER_HEIGHT)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        width: ${pxToRem(TABLET_HEADER_HEIGHT)};
      }

      @media (min-width: ${ScreenConfig.L.min}px) {
        width: ${pxToRem(DESKTOP_HEADER_HEIGHT)};
      }

      ${defaultWidthForLowerScreenSize}
      ${defaultWidthForUpperScreenSize}
    `
  }}

  &:hover, &:focus {
    color: ${({ colorHover, color }) => colorHover || color};
    background-color: ${({ backgroundColorHover }) => backgroundColorHover};
  }
`

export const Button = ({
  a11yText,
  icon,
  backgroundColor,
  backgroundColorHover,
  color,
  colorHover,
  text,
  href,
  type,
  hiddenText: { min, max } = {},
  as,
  ...others
}) => {
  const previousScreenSize = min && getScreenSizeFrom('previous')(min)
  const nextScreenSize = max && getScreenSizeFrom('next')(max)
  const hiddenMin = min ? `k-u-hidden@${min}-up--important` : ''
  const hiddenMax = max ? `k-u-hidden@${max}-down--important` : ''
  const singleRightMargin = 'k-u-margin-right-single'
  const marginLeftMin = min
    ? `${singleRightMargin}@${previousScreenSize.toLowerCase()}-down--important`
    : ''
  const marginLeftMax = max
    ? `${singleRightMargin}@${nextScreenSize.toLowerCase()}-up--important`
    : ''
  const textClassName = `${hiddenMin} ${hiddenMax}`.trim()
  const iconClassName = `${marginLeftMin} ${marginLeftMax}`.trim()
  const mediaQuery = (min || max) && {
    min: min && `max-width: ${ScreenConfig[previousScreenSize].max}px`,
    max: max && `min-width: ${ScreenConfig[nextScreenSize].min}px`,
  }

  const buttonProps = as
    ? { as }
    : type === 'button'
    ? { as: 'button', type }
    : { href }

  return (
    <StyledLink
      {...others}
      {...buttonProps}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      colorHover={colorHover}
      textShownFromMediaQuery={mediaQuery}
      icon={icon}
      text={text}
    >
      {icon &&
        React.cloneElement(icon, {
          className: iconClassName,
          'aria-hidden': true,
        })}

      {text && textClassName ? (
        <span className={textClassName}>{text}</span>
      ) : (
        text
      )}

      {a11yText && <VisuallyHidden>{a11yText}</VisuallyHidden>}
    </StyledLink>
  )
}

Button.propTypes = {
  icon: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  text: PropTypes.node,
  href: PropTypes.string,
  a11yText: PropTypes.string,
  type: PropTypes.oneOf(['button']),
  hiddenText: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string,
  }),
}

Button.defaultProps = {
  icon: null,
  backgroundColor: COLORS.line1,
  backgroundColorHover: COLORS.line2,
  color: COLORS.font1,
  colorHover: null,
  text: null,
}
