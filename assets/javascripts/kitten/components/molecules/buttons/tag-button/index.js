import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import deprecated from 'prop-types-extra/lib/deprecated'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'

const StyledTagButton = styled.button`
  min-height: ${pxToRem(40)};
  min-width: ${pxToRem(60)};

  padding: 0 ${pxToRem(20)};
  font-size: ${stepToRem(-2)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: var(--border-radius-s);
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
    &.k-Buttons__tagButton--hydrogen {
      background-color: ${COLORS.background1};
      border: var(--border);
      color: ${COLORS.font1};

      &:hover,
      &:focus {
        border: var(--border-hover-primary);
        background-color: ${COLORS.background1};
        color: ${COLORS.font1};
      }

      &:active {
        background-color: ${COLORS.background1};
        border: var(--border-active-primary);
        color: ${COLORS.font1};
      }

      &:disabled {
        cursor: not-allowed;
        border: var(--border-disabled);
        background-color: ${COLORS.line1};
        color: ${COLORS.font3};
      }

      &.k-Buttons__tagButton--active {
        background-color: ${COLORS.primary5};
        border: var(--border-active-primary);
        color: ${COLORS.font1};

        &:hover,
        &:focus,
        &:active {
          border-color: var(--color-primary-700);
        }
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
  }
  &.k-Buttons__tagButton--big {
    min-height: ${pxToRem(50)};
    min-width: ${pxToRem(80)};
    padding: 0 ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
  }
  &.k-Buttons__tagButton--huge {
    min-height: ${pxToRem(60)};
    min-width: ${pxToRem(80)};
    padding: 0 ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
  }
  &.k-Buttons__tagButton--helium,
  &.k-Buttons__tagButton--hydrogen {
    color: ${COLORS.font1};
    border: var(--border);
    background-color: ${COLORS.background1};
    &:hover,
    &:focus {
      color: ${COLORS.background1};
      border: var(--border-hover-primary);
      background-color: ${COLORS.primary2};
    }
    &:active {
      color: ${COLORS.primary2};
      border: var(--border-active-primary);
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
  &.k-Buttons__tagButton--active {
    color: ${COLORS.background1};
    border: var(--border-active-primary);
    background-color: ${COLORS.primary1};

    &:hover,
    &:focus,
    &:active {
      border-color: var(--color-primary-700);
    }
  }
`

export const TagButton = ({
  children,
  modifier,
  selected,
  active,
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
          'k-Buttons__tagButton--active': active || selected,
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
  active: PropTypes.bool,
  selected: deprecated(PropTypes.bool, 'Please use `active` instead.'),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  size: 'regular',
  active: false,
  variant: 'orion',
}
