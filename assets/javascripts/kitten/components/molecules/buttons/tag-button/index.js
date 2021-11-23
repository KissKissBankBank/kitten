import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import classNames from 'classnames'

const StyledTagButton = styled.button`
  min-height: ${pxToRem(40)};
  min-width: ${pxToRem(60)};
  /* IE11 */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    height: ${pxToRem(40)};
    width: ${pxToRem(60)};
  }

  padding: 0 ${pxToRem(20)};
  font-size: ${stepToRem(-2)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${pxToRem(4)};
  border-width: var(--border-width);
  border-style: solid;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  box-sizing: border-box;
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-2)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;
  appareance: none;
  cursor: pointer;

  &.k-Buttons__tagButton--orion {
    border-radius: ${pxToRem(8)};

    &.k-Buttons__tagButton--hydrogen {
      background-color: ${COLORS.background1};
      border: var(--border);
      color: ${COLORS.font1};

      &:hover,
      &:focus {
        border: var(--border-hover);
        background-color: ${COLORS.background1};
        color: ${COLORS.font1};
      }

      &:active {
        background-color: ${COLORS.background1};
        border: var(--border-active);
        color: ${COLORS.font1};
      }

      &:disabled {
        cursor: not-allowed;
        border: var(--border-disabled);
        background-color: ${COLORS.line1};
        color: ${COLORS.font3};
      }

      &.k-Buttons__tagButton--selected {
        background-color: ${COLORS.primary5};
        border: var(--border-active);
        color: ${COLORS.font1};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  > :nth-child(n) {
    margin-right: ${pxToRem(10)};
    text-align: left;
  }
  &.k-Buttons__tagButton--icon {
    color: ${COLORS.font1};
    border-color: var(--color-grey-400);
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
    border-color: var(--color-grey-400);
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
    &:disabled {
      background-color: ${COLORS.line2};
      border-color: ${COLORS.line2};
      color: ${COLORS.background1};
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
    &:disabled {
      background-color: ${COLORS.line2};
      border-color: ${COLORS.line2};
      color: ${COLORS.background1};
    }
  }
  &.k-Buttons__tagButton--selected {
    color: ${COLORS.background1};
    border: var(--border-active);
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
  size,
  tag,
  as,
  ...others
}) => {
  return (
    <StyledTagButton
      type={!tag && !as ? 'button' : null}
      className={classNames(
        'k-Buttons__tagButton',
        className,
        `k-Buttons__tagButton--${modifier}`,
        `k-Buttons__tagButton--${variant}`,
        `k-Buttons__tagButton--${size}`,
        {
          'k-Buttons__tagButton--selected': selected,
          'k-Buttons__tagButton--icon': icon,
        },
      )}
      as={tag || as}
      {...others}
    >
      {children}
    </StyledTagButton>
  )
}

TagButton.propTypes = {
  modifier: PropTypes.oneOf(['helium', 'hydrogen', 'carbon']),
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge']),
  icon: PropTypes.bool,
  selected: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  size: 'regular',
  selected: false,
  variant: 'orion',
}
