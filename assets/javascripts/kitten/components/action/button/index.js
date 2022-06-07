import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import styled from 'styled-components'
import { modifierStyles } from './helpers/modifier-styles'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'

export const buttonModifiers = [
  'hydrogen',
  'helium',
  'lithium',
  'beryllium',
  'copper',
  'boron',
  'scandium',
  'neon',
  'iron',
  'krypton',
]

export const buttonFitOptions = ['icon', 'min-width', 'content', 'fluid']

export const buttonMobileFitOptions = [null, ...buttonFitOptions]

export const buttonSizes = [
  'nano',
  'micro',
  'small',
  'medium',
  'large',
  'huge',
  'giant',
]

const StyledButton = styled.button`
  --Button-border-radius: var(--border-radius-s);

  &.k-Button--rounded {
    --Button-border-radius: var(--border-radius-rounded);
  }

  position: relative;
  box-sizing: border-box;
  min-height: var(--Button-dimension);
  padding: var(--Button-padding);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(10)};

  ${TYPOGRAPHY.fontStyles['500']};
  font-size: ${stepToRem(-1)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;

  appearance: none;
  cursor: pointer;

  border-radius: var(--Button-border-radius, 0);
  min-width: 0;

  svg {
    flex: 0 0 auto;
  }

  &:disabled,
  &.k-Button--disabled {
    cursor: not-allowed;
  }

  &:hover {
    text-decoration: none;
  }

  &:focus-visible {
    outline: auto;
  }

  /* SIZES */

  &.k-Button--nano {
    --Button-dimension: ${pxToRem(20)};
    --Button-min-width: ${pxToRem(100)};
    --Button-padding: 0 ${pxToRem(6)};
    font-size: ${stepToRem(-2)};
  }

  &.k-Button--micro {
    --Button-dimension: ${pxToRem(30)};
    --Button-min-width: ${pxToRem(130)};
    --Button-padding: ${pxToRem(5)} ${pxToRem(10)};
    font-size: ${stepToRem(-2)};
  }

  &.k-Button--small {
    --Button-dimension: ${pxToRem(40)};
    --Button-min-width: ${pxToRem(160)};
    --Button-padding: ${pxToRem(7)} ${pxToRem(20)};
  }

  &.k-Button--medium {
    --Button-dimension: ${pxToRem(50)};
    --Button-min-width: ${pxToRem(200)};
    --Button-padding: ${pxToRem(10)} ${pxToRem(30)};
  }

  &.k-Button--large {
    --Button-dimension: ${pxToRem(50)};
    --Button-min-width: ${pxToRem(200)};
    --Button-padding: ${pxToRem(10)} ${pxToRem(30)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      --Button-min-width: ${pxToRem(220)};
      --Button-dimension: ${pxToRem(70)};
      --Button-padding: ${pxToRem(10)} ${pxToRem(40)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Button--huge {
    --Button-dimension: ${pxToRem(70)};
    --Button-min-width: ${pxToRem(200)};
    --Button-padding: ${pxToRem(10)} ${pxToRem(10)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      --Button-min-width: ${pxToRem(220)};
      --Button-dimension: ${pxToRem(80)};
      --Button-padding: ${pxToRem(10)} ${pxToRem(40)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Button--giant {
    --Button-dimension: ${pxToRem(70)};
    --Button-min-width: ${pxToRem(200)};
    --Button-padding: ${pxToRem(10)} ${pxToRem(10)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      --Button-min-width: ${pxToRem(220)};
      --Button-dimension: ${pxToRem(90)};
      --Button-padding: ${pxToRem(10)} ${pxToRem(40)};
      font-size: ${stepToRem(0)};
    }
  }

  /* BESPOKE FIT */

  &.k-Button--fit-min-width {
    min-width: var(--Button-min-width);
  }

  &.k-Button--fit-icon {
    padding: 0;
    overflow: hidden;
    width: var(--Button-dimension);
    height: var(--Button-dimension);
  }

  &.k-Button--fit-fluid {
    width: 100%;
  }

  /* BESPOKE FIT for mobile */

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    &[class*='k-Button--mobile-fit'] {
      min-width: initial !important;
      padding: var(--Button-padding);
      width: initial;
      height: initial;
      width: initial;

      &.k-Button--mobile-fit-min-width {
        min-width: var(--Button-min-width) !important;
      }

      &.k-Button--mobile-fit-icon {
        padding: 0;
        overflow: hidden;
        width: var(--Button-dimension);
        height: var(--Button-dimension);
      }

      &.k-Button--mobile-fit-fluid {
        width: 100%;
      }
    }
  }

  /* BULLET */

  &.k-Button--hasBullet {
    --Button-bullet-radius: ${pxToRem(3 + 4)}; /* border + (width/2) */
    --Math-Cos45: 0.7071; /* Math.cos(45) */
    --Button-radius: var(--Button-border-radius, 0);
    --Button-bullet-distance: calc(
      var(--Button-radius) - (var(--Button-radius) * var(--Math-Cos45)) -
        var(--Button-bullet-radius)
    );

    &::after {
      content: '';
      position: absolute;
      background-color: var(--Button-bullet-color, var(--color-primary-500));
      width: ${pxToRem(8)};
      height: ${pxToRem(8)};
      border-radius: ${pxToRem(8)};
      border: ${pxToRem(3)} solid var(--color-grey-000);
      right: var(--Button-bullet-distance);
      top: var(--Button-bullet-distance);
    }

    &.k-Button--rounded {
      --Button-radius: calc(var(--Button-dimension) / 2);
    }
  }

  /* MODIFIERS */

  ${({ modifier }) => modifierStyles(modifier)}
`

// const ForwardedButtonComponent = forwardRef((props, ref) => {
//   return <button ref={ref} {...props}/>
// })

export const Button = ({
  children,
  modifier,
  size,
  className,
  rounded,
  borderRadius,
  disabled,
  tag,
  as,
  fit,
  mobileFit,
  active,
  style,
  hasBullet,
  bulletColor,
  ...props
}) => {
  const internalModifier = active ? 'lithium' : modifier

  const internalTag = as || tag

  return (
    <StyledButton
      className={classNames(
        'k-Button',
        className,
        `k-Button--${size || 'regular'}`,
        `k-Button--${internalModifier || 'hydrogen'}`,
        `k-Button--fit-${fit || 'min-width'}`,
        {
          [`k-Button--mobile-fit-${mobileFit}`]: !!mobileFit,
          'k-Button--disabled': disabled,
          'k-Button--rounded': rounded,
          'k-Button--hasBullet': hasBullet,
        },
      )}
      modifier={internalModifier}
      style={{
        ...style,
        '--Button-border-radius':
          borderRadius != null ? pxToRem(borderRadius) : null,
        '--Button-bullet-color': hasBullet && bulletColor ? bulletColor : null,
      }}
      type={internalTag === 'button' ? 'button' : null}
      as={internalTag}
      disabled={internalTag === 'button' ? disabled : null}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  tag: PropTypes.string,
  borderRadius: PropTypes.number,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(buttonSizes),
  fit: PropTypes.oneOf(buttonFitOptions),
  mobileFit: PropTypes.oneOf(buttonMobileFitOptions),
  modifier: PropTypes.oneOf(buttonModifiers),
  active: PropTypes.bool,
  hasBullet: PropTypes.bool,
  bulletColor: PropTypes.string,
}

Button.defaultProps = {
  tag: 'button',
  rounded: false,
  borderRadius: null,
  size: 'medium',
  modifier: 'hydrogen',
  fit: 'content',
  mobileFit: null,
  active: false,
  hasBullet: false,
}
