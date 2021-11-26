import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import deprecated from 'prop-types-extra/lib/deprecated'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledBadge = styled.span`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-width: ${pxToRem(30)};
  min-height: ${pxToRem(30)};
  border-radius: ${pxToRem(30)};
  background-color: var(--iconBadge-background-color, var(--color-primary-500));
  border-color: var(--color-primary-300);

  &.k-IconBadge--empty {
    border-color: var(--color-grey-300);
    background-color: var(--color-grey-000);
  }

  &.k-IconBadge--success,
  &.k-IconBadge--valid {
    background-color: var(--color-success-500);
    border-color: var(--color-success-300);
  }

  &.k-IconBadge--disabled {
    background-color: var(--color-grey-600);
    border-color: var(--color-grey-300);
  }

  &.k-IconBadge--danger {
    background-color: var(--color-danger-500);
    border-color: var(--color-danger-300);
  }

  &.k-IconBadge--warning {
    background-color: var(--color-warning-500);
    border-color: var(--color-warning-300);
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
    color: var(--color-grey-000);
    text-align: center;
    font-weight: bold;
    font-size: ${stepToRem(-2)};
    line-height: 0;
  }

  svg {
    fill: var(--color-grey-000);
  }

  &.k-IconBadge--hasBorder {
    border-width: ${pxToRem(2)};
    border-style: solid;
  }

  &.k-IconBadge--hasBorderStyles {
    border-width: var(--iconBadge-border-width, 0);
    border-color: var(--iconBadge-border-color);
    border-style: var(--iconBadge-border-style);
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
  backgroundColor,
  status,
  hasBorder,
  ...others
}) => (
  <StyledBadge
    className={classNames(
      'k-IconBadge',
      className,
      `k-IconBadge--${size}`,
      `k-IconBadge--${status}`,
      {
        'k-IconBadge--disabled': disabled && status === 'info', // if default prop
        'k-IconBadge--valid': valid && status === 'info', // if default prop
        'k-IconBadge--empty': empty,
        'k-IconBadge--big': big,
        'k-IconBadge--huge': huge,
        'k-IconBadge--hasBorderStyles': border.length > 0,
        'k-IconBadge--hasBorder': hasBorder,
      },
    )}
    style={{
      '--iconBadge-background-color': backgroundColor ?? null,
      '--iconBadge-border-width':
        'width' in border ? pxToRem(border.width) : null,
      '--iconBadge-border-style': border?.style ?? null,
      '--iconBadge-border-color': border?.color ?? null,
    }}
    {...others}
  >
    <span className="k-IconBadge__content">{children}</span>
  </StyledBadge>
)

IconBadge.defaultProps = {
  empty: false,
  size: 'normal',
  border: {},
  backgroundColor: null,
  status: 'info',
  hasBorder: false,
}

IconBadge.propTypes = {
  disabled: deprecated(PropTypes.bool, 'Use status="disabled" instead'),
  valid: deprecated(PropTypes.bool, 'Use status="success" instead'),
  empty: PropTypes.bool,
  big: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  huge: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge']),
  backgroundColor: PropTypes.string,
  border: PropTypes.shape({
    width: PropTypes.number,
    color: PropTypes.node,
    style: PropTypes.string,
  }),
  status: PropTypes.oneOf(['info', 'success', 'danger', 'warning', 'disabled']),
  hasBorder: PropTypes.bool,
}
