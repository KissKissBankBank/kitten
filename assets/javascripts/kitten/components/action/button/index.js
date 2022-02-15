import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import styled from 'styled-components'
import { modifierStyles } from './helpers/modifier-styles'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'

const deprecatedModifiers = [
  'carbon',
  'oxygen',
  'calcium',
  'social_facebook',
  'social_twitter',
  'social_linkedin',
  'social_instagram',
  'social_youtube',
]

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
]

export const buttonFitOptions = ['icon', 'min-width', 'content', 'fluid']

export const buttonMobileFitOptions = [null, ...buttonFitOptions]

export const buttonSizes = [
  'nano',
  'micro',
  'tiny',
  'big',
  'huge',
  'giant',
  'regular',
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

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(0)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;

  appearance: none;
  cursor: pointer;

  border-radius: var(--Button-border-radius, 0);
  min-width: 0;

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

  &.k-Button--tiny {
    --Button-dimension: ${pxToRem(40)};
    --Button-min-width: ${pxToRem(160)};
    --Button-padding: ${pxToRem(7)} ${pxToRem(20)};
    font-size: ${stepToRem(-1)};
  }

  &.k-Button--regular {
    --Button-dimension: ${pxToRem(50)};
    --Button-min-width: ${pxToRem(200)};
    --Button-padding: ${pxToRem(10)} ${pxToRem(30)};
  }

  &.k-Button--big {
    --Button-dimension: ${pxToRem(50)};
    --Button-min-width: ${pxToRem(200)};
    --Button-padding: ${pxToRem(10)} ${pxToRem(30)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      --Button-min-width: ${pxToRem(220)};
      --Button-dimension: ${pxToRem(70)};
      --Button-padding: ${pxToRem(10)} ${pxToRem(40)};
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
  fluid,
  icon,
  borderRadius,
  disabled,
  tag,
  as,
  fit,
  mobileFit,
  active,
  ...props
}) => {
  if (deprecatedModifiers.includes(modifier)) {
    console.warn(
      `The modifier ${modifier} has been deprecated. Please use one for the following: ${buttonModifiers.join(
        ', ',
      )}.`,
    )
  }

  const actualSize = (() => {
    switch (true) {
      case !!size:
        return size
      case props.nano:
        return 'nano'
      case props.micro:
        return 'micro'
      case props.tiny:
        return 'tiny'
      case props.big:
        return 'big'
      case props.huge:
        return 'huge'
      case props.giant:
        return 'giant'
      default:
        return 'regular'
    }
  })()

  const internalModifier = active ? 'lithium' : modifier

  const internalTag = as || tag

  const fitClass = (() => {
    switch (true) {
      case fluid && !icon:
        return 'fluid'
      case icon && !fluid:
        return 'icon'
      default:
        return fit
    }
  })()

  return (
    <StyledButton
      className={classNames(
        'k-Button',
        className,
        `k-Button--${actualSize}`,
        `k-Button--${internalModifier}`,
        `k-Button--fit-${fitClass}`,
        {
          [`k-Button--mobile-fit-${mobileFit}`]: !!mobileFit,
          'k-Button--disabled': disabled,
          'k-Button--rounded': rounded,
        },
      )}
      modifier={internalModifier}
      style={{
        '--Button-border-radius':
          borderRadius != null ? pxToRem(borderRadius) : null,
      }}
      type="button"
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
  nano: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  micro: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  tiny: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  big: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  huge: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  giant: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  fluid: PropTypes.bool,
  icon: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(buttonSizes),
  fit: PropTypes.oneOf(buttonFitOptions),
  mobileFit: PropTypes.oneOf(buttonMobileFitOptions),
  modifier: PropTypes.oneOf([...buttonModifiers, ...deprecatedModifiers]),
  active: PropTypes.bool,
}
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: null,
  size: 'regular',
  modifier: 'hydrogen',
  fit: 'min-width',
  mobileFit: null,
  active: false,
}
