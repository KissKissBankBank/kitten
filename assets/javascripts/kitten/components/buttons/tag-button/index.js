import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import classNames from 'classnames'

const StyledTagButton = styled(
  ({ selected, icon, tiny, big, modifier, ...others }) => (
    <button {...others} />
  ),
)`

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
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  box-sizing: border-box;

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-2)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;
  appareance: none;
  outline: none;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }

  > :nth-child(n) {
    margin-right: ${pxToRem(10)};
    text-align: left;
  }

  &.k-Buttons--TagButton__icon {
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

  &.k-Buttons--TagButton__tiny {
    min-height: ${pxToRem(30)};
    min-width: ${pxToRem(60)};
    padding: 0 ${pxToRem(20)};
    font-size: ${stepToRem(-2)};
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      height: ${pxToRem(40)};
      width: ${pxToRem(60)};
    }
  }

  &.k-Buttons--TagButton__big {
    min-height: ${pxToRem(50)};
    min-width: ${pxToRem(80)};
    padding: 0 ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      height: ${pxToRem(50)};
      width: ${pxToRem(80)};
    }
  }

  &.k-Buttons--TagButton__huge {
    min-height: ${pxToRem(60)};
    min-width: ${pxToRem(80)};
    padding: 0 ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      height: ${pxToRem(60)};
      width: ${pxToRem(80)};
    }
  }

  &.k-Buttons--TagButton__helium,
  &.k-Buttons--TagButton__hydrogen {
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

  &.k-Buttons--TagButton__carbon {
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

  &.k-Buttons--TagButton__selected {
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
  ...others
}) => {

  return (
    <StyledTagButton
      className={classNames(
        'k-Buttons--TagButton',
        `k-Buttons--TagButton__${modifier}`,
        {
          'k-Buttons--TagButton__tiny': tiny,
          'k-Buttons--TagButton__big': big,
          'k-Buttons--TagButton__huge': huge,
          'k-Buttons--TagButton__selected': selected,
          'k-Buttons--tagButton__icon': icon,
        }
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
  icon: PropTypes.bool,
  selected: PropTypes.bool,
}

TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  tiny: false,
  big: false,
  selected: false,
}