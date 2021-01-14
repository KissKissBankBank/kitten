import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import classNames from 'classnames'

const StyledTagButton = styled.button`
  min-height: ${pxToRem(40)};
  min-width: ${pxToRem(60)};
  padding: 0 ${pxToRem(20)};
  font-size: ${stepToRem(-2)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    height: ${pxToRem(40)};
    width: ${pxToRem(60)};
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${pxToRem(4)};
  border-width: ${pxToRem(2)};
  border-style: solid;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  box-sizing: border-box;
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-2)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;
  appareance: none;
  cursor: pointer;

  &:focus {
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }

  &.k-Buttons__tagButton--orion {
    border-radius: ${pxToRem(8)};
  }

  :disabled {
    cursor: not-allowed;
  }

  > :nth-child(n) {
    margin-right: ${pxToRem(10)};
    text-align: left;
  }
  &.k-Buttons__tagButton--icon {
    color: ${COLORS.font1};
    border-color: ${COLORS.line1};
    background-color: ${COLORS.background1};

    &:hover,
    &:focus {
      color: ${COLORS.background1};
      border-color: ${COLORS.primary2};
      background-color: ${COLORS.primary2};
    }

    &:active {
      color: ${COLORS.primary2};
      border-color: ${COLORS.primary2};
      background-color: ${COLORS.background1};
    }
  }
  &.k-Buttons__tagButton--tiny {
    min-height: ${pxToRem(30)};
    min-width: ${pxToRem(60)};
    padding: 0 ${pxToRem(20)};
    font-size: ${stepToRem(-2)};
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      height: ${pxToRem(40)};
      width: ${pxToRem(60)};
    }
  }
  &.k-Buttons__tagButton--big {
    min-height: ${pxToRem(50)};
    min-width: ${pxToRem(80)};
    padding: 0 ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      height: ${pxToRem(50)};
      width: ${pxToRem(80)};
    }
  }
  &.k-Buttons__tagButton--huge {
    min-height: ${pxToRem(60)};
    min-width: ${pxToRem(80)};
    padding: 0 ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      height: ${pxToRem(60)};
      width: ${pxToRem(80)};
    }
  }
  &.k-Buttons__tagButton--helium,
  &.k-Buttons__tagButton--hydrogen {
    color: ${COLORS.font1};
    border-color: ${COLORS.line1};
    background-color: ${COLORS.background1};

    &:hover,
    &:focus {
      color: ${COLORS.background1};
      border-color: ${COLORS.primary2};
      background-color: ${COLORS.primary2};
    }

    &:active {
      color: ${COLORS.primary2};
      border-color: ${COLORS.primary2};
      background-color: ${COLORS.background1};
    }
  }
  &.k-Buttons__tagButton--carbon {
    color: ${COLORS.font1};
    border-color: ${COLORS.background1};
    background-color: ${COLORS.background1};
    &:hover,
    &:focus {
      color: ${COLORS.primary1};
      border-color: ${COLORS.background1};
      background-color: ${COLORS.background1};
    }
    &:active {
      color: ${COLORS.primary1};
      border-color: ${COLORS.background1};
      background-color: ${COLORS.background1};
    }
  }
  &.k-Buttons__tagButton--selected {
    color: ${COLORS.background1};
    border-color: ${COLORS.primary1};
    background-color: ${COLORS.primary1};
  }
`

export const TagButton = ({
  children,
  modifier,
  selected,
  tiny,
  big,
  huge,
  icon,
  className,
  variant,
  ...others
}) => {
  return (
    <StyledTagButton
      className={classNames(
        'k-Buttons__tagButton',
        className,
        `k-Buttons__tagButton--${modifier}`,
        `k-Buttons__tagButton--${variant}`,
        {
          'k-Buttons__tagButton--tiny': tiny,
          'k-Buttons__tagButton--big': big,
          'k-Buttons__tagButton--huge': huge,
          'k-Buttons__tagButton--selected': selected,
          'k-Buttons__tagButton--icon': icon,
        },
      )}
      {...others}
    >
      {children}
    </StyledTagButton>
  )
}

TagButton.propTypes = {
  modifier: PropTypes.oneOf(['helium', 'hydrogen', 'carbon']),
  tiny: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool,
  icon: PropTypes.bool,
  selected: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  tiny: false,
  big: false,
  huge: false,
  selected: false,
  variant: 'andromeda',
}
