import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'

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
  ${TYPOGRAPHY.fontStyles['500']};
  font-size: ${stepToRem(-2)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;
  appareance: none;
  cursor: pointer;

  &.k-TagButton--rounded {
    border-radius: var(--border-radius-rounded);
  }

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

  &.k-TagButton--small {
    min-height: ${pxToRem(30)};
    min-width: ${pxToRem(60)};
    padding: 0 ${pxToRem(20)};
    font-size: ${stepToRem(-2)};
  }

  &.k-TagButton--large {
    min-height: ${pxToRem(50)};
    min-width: ${pxToRem(80)};
    padding: 0 ${pxToRem(30)};
    font-size: ${stepToRem(-1)};
  }

  &.k-TagButton--huge {
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

  &.k-TagButton--active {
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
  className,
  children,
  rounded,
  active,
  size,
  tag,
  as,
  ...props
}) => {
  const others = (({ modifier, icon, ...rest }) => rest)(props)

  return (
    <StyledTagButton
      type={!tag && !as ? 'button' : null}
      className={classNames('k-TagButton', className, `k-TagButton--${size}`, {
        'k-TagButton--active': active,
        'k-TagButton--rounded': rounded,
      })}
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
  rounded: PropTypes.bool,
}

TagButton.defaultProps = {
  children: 'Tag',
  size: 'medium',
  active: false,
  rounded: false,
}
