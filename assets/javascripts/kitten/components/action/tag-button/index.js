import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import deprecated from 'prop-types-extra/lib/deprecated'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated'

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

  &:disabled {
    cursor: not-allowed;
  }

  > :nth-child(n) {
    margin-right: ${pxToRem(10)};
    text-align: left;
  }

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

  &.k-Buttons__tagButton--tiny,
  &.k-Buttons__tagButton--small {
    min-height: ${pxToRem(30)};
    min-width: ${pxToRem(60)};
    padding: 0 ${pxToRem(20)};
    font-size: ${stepToRem(-2)};
  }

  &.k-Buttons__tagButton--big,
  &.k-Buttons__tagButton--large {
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
`

export const TagButton = ({
  children,
  selected,
  active,
  className,
  size,
  tag,
  as,
  ...props
}) => {
  const others = (({ modifier, icon, ...rest }) => rest)(props)

  checkDeprecatedSizes(size)

  return (
    <StyledTagButton
      type={!tag && !as ? 'button' : null}
      className={classNames(
        'k-Buttons__tagButton',
        className,
        `k-Buttons__tagButton--${size}`,
        {
          'k-Buttons__tagButton--active': active || selected,
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  active: PropTypes.bool,
  icon: deprecated(PropTypes.bool, 'Icon is not implemented anymore.'),
  modifier: deprecated(
    PropTypes.string,
    'Modifiers are not implemented anymore.',
  ),
  selected: deprecated(PropTypes.bool, 'Please use `active` instead'),
}

TagButton.defaultProps = {
  children: 'Tag',
  size: 'medium',
  active: false,
}
