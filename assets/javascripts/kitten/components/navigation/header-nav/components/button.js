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

const StyledLink = styled.a`
  ${TYPOGRAPHY.fontStyles.regular}
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(25)} ${pxToRem(30)};
  height: 100%;
  font-size: ${stepToRem(-1)};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-decoration: none;

  @media (min-width: ${ScreenConfig.S.min}px) {
    padding: ${pxToRem(30)} ${pxToRem(40)};
  }

  ${({ textShownFromMediaQuery }) => {
    if (!textShownFromMediaQuery)
      return css`
        width: inherit;
      `

    const defaultWidthForLowerScreenSize =
      textShownFromMediaQuery.min &&
      css`
        @media (${textShownFromMediaQuery.min}) {
          width: inherit;
        }
      `

    const defaultWidthForUpperScreenSize =
      textShownFromMediaQuery.max &&
      css`
        @media (${textShownFromMediaQuery.max}) {
          width: inherit;
        }
      `
    return css`
      width: ${MOBILE_HEADER_HEIGHT} @media (min-width: ${ScreenConfig.S.min}px) {
        width: ${TABLET_HEADER_HEIGHT};
      }

      @media (min-width: ${ScreenConfig.L.min}px) {
        width: ${DESKTOP_HEADER_HEIGHT};
      }

      ${defaultWidthForLowerScreenSize}
      ${defaultWidthForUpperScreenSize}
    `
  }}

  &:hover {
    background-color: ${({ backgroundColorHover }) => backgroundColorHover};
  }
`

const IconContainer = styled.span`
  svg {
    display: flex;
    fill: ${({ color }) => color};
  }
`

export const Button = ({
  icon,
  backgroundColor,
  backgroundColorHover,
  color,
  text,
  href,
  hiddenText: { min, max } = {},
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
  const classNameText = `${hiddenMin} ${hiddenMax}`.trim()
  const classNameIcon = `${marginLeftMin} ${marginLeftMax}`.trim()
  const mediaQuery = (min || max) && {
    min: min && `max-width: ${ScreenConfig[previousScreenSize].max}px`,
    max: max && `min-width: ${ScreenConfig[nextScreenSize].min}px`,
  }

  return (
    <StyledLink
      href={href}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      textShownFromMediaQuery={mediaQuery}
    >
      {icon && (
        <IconContainer className={classNameIcon}>
          {React.cloneElement(icon, { width: 14, height: 14, color })}
        </IconContainer>
      )}
      <span className={classNameText}>{text}</span>
    </StyledLink>
  )
}

Button.propTypes = {
  icon: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.node,
  href: PropTypes.string,
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
  text: 'Button',
  href: '#',
}
