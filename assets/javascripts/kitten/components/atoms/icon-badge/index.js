import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import deprecated from 'prop-types-extra/lib/deprecated'

import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledBadge = styled.span`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-width: ${pxToRem(30)};
  min-height: ${pxToRem(30)};
  background-color: ${COLORS.primary1};
  border-radius: ${pxToRem(30)};

  &.k-IconBadge--empty {
    border: ${pxToRem(2)} solid ${COLORS.line1};
    background-color: ${COLORS.background1};
  }

  &.k-IconBadge--valid {
    background-color: ${COLORS.valid};
  }

  &.k-IconBadge--disabled {
    background-color: ${COLORS.line2};
  }

  &.k-IconBadge--tiny {
    min-width: ${pxToRem(20)};
    min-height: ${pxToRem(20)};
    border-radius: ${pxToRem(20)};

    .k-IconBadge__content {
      font-size: ${stepToRem(-1)};

      &,
      & svg {
        max-width: ${pxToRem(14)};
      }
    }
  }

  &.k-IconBadge--big {
    min-width: ${pxToRem(40)};
    min-height: ${pxToRem(40)};
    border-radius: ${pxToRem(40)};

    .k-IconBadge__content {
      font-size: ${stepToRem(-1)};
    }
  }

  &.k-IconBadge--huge {
    min-width: ${pxToRem(50)};
    min-height: ${pxToRem(50)};
    border-radius: ${pxToRem(50)};

    .k-IconBadge__content {
      font-size: ${stepToRem(-1)};
    }
  }

  .k-IconBadge__content {
    flex-basis: ${pxToRem(11)};
    color: ${COLORS.background1};
    text-align: center;
    font-weight: bold;
    font-size: ${stepToRem(-2)};
    line-height: 0;
  }

  svg {
    fill: ${COLORS.background1};
  }

  &.k-IconBadge--hasBorderStyles {
    border-width: var(--border-width, 0);
    border-color: var(--border-color);
    border-style: var(--border-style);
  }
`

export const IconBadge = ({
  className,
  children,
  disabled,
  valid,
  empty,
  big,
  huge,
  size,
  border,
  ...others
}) => (
  <StyledBadge
    className={classNames('k-IconBadge', className, `k-IconBadge--${size}`, {
      'k-IconBadge--disabled': disabled,
      'k-IconBadge--valid': valid,
      'k-IconBadge--empty': empty,
      'k-IconBadge--big': big,
      'k-IconBadge--huge': huge,
    })}
    style={{
      '--border-width': pxToRem(border?.width),
      '--border-style': border?.style,
      '--border-color': border?.color,
    }}
    {...others}
  >
    <span className="k-IconBadge__content">{children}</span>
  </StyledBadge>
)

IconBadge.defaultProps = {
  disabled: false,
  valid: false,
  empty: false,
  size: 'normal',
  borderWidth: null,
  borderColor: null,
  borderStyle: null,
}

IconBadge.propTypes = {
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  empty: PropTypes.bool,
  big: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  huge: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge']),
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
}
