import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'

const StyledBadge = styled.span`
  --Badge-background-color: ${COLORS.primary1};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: ${pxToRem(2)} ${pxToRem(5)};
  line-height: 1;
  min-height: ${pxToRem(18 + 2)};
  min-width: ${pxToRem(18 + 2)};
  border-radius: ${pxToRem(10)};
  color: ${COLORS.background1};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-4)};
  line-height: 1.2;

  border: ${pxToRem(2)} solid white;

  background-color: var(--Badge-background-color);

  &.k-Badge--spaced {
    margin: 0 ${pxToRem(5)};
  }

  &.k-Badge--no-border {
    min-height: ${pxToRem(18)};
    min-width: ${pxToRem(18)};
    border: 0;
  }

  &.k-Badge--hasIcon {
    position: absolute;
    margin-left: ${pxToRem(-8)};
    margin-top: ${pxToRem(-4)};
  }
`

export const Badge = ({
  className,
  spaced,
  Icon,
  a11yText,
  color,
  withBorder,
  ...others
}) => {
  return (
    <>
      {Icon && <Icon />}
      <StyledBadge
        aria-label={a11yText}
        className={classNames('k-Badge', className, {
          'k-Badge--spaced': spaced,
          'k-Badge--no-border': !withBorder,
          'k-Badge--hasIcon': !!Icon,
        })}
        style={{ '--Badge-background-color': color }}
        {...others}
      />
    </>
  )
}

Badge.propTypes = {
  spaced: PropTypes.bool,
  withBorder: PropTypes.bool,
  color: PropTypes.string,
  Icon: PropTypes.node,
  a11yText: PropTypes.string,
}

Badge.defaultProps = {
  spaced: false,
  withBorder: true,
  Icon: null,
  color: null,
  a11yText: null,
}
