import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/molecules/buttons/button'
import styled from 'styled-components'
import { checkedCircleIconAsString } from '../../../graphics/icons/checked-circle-icon'
import { encodeSvgString } from '../../../../helpers/utils/encode-svg'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import classNames from 'classnames'

const getCircleIcon = color =>
  encodeSvgString(
    checkedCircleIconAsString({
      circleColor: color,
      checkedColor: COLORS.background1,
    }),
  )

const StyledCheckableButton = styled(Button)`
  &::after {
    flex-shrink: 0;
    content: '';
    box-sizing: border-box;
    border-radius: 50%;

    /* IE11 */
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};

    width: var(--CheckableButton-radius);
    height: var(--CheckableButton-radius);

    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: var(--CheckableButton-radius) var(--CheckableButton-radius);
  }

  &.k-CheckableButton--bottom,
  &.k-CheckableButton--left[aria-checked] {
    &::after {
      background-image: url(${getCircleIcon(COLORS.primary1)});
    }
    &.k-Button--copper::after {
      background-image: url(${getCircleIcon(COLORS.error)});
    }
    &:disabled::after {
      background-image: url(${getCircleIcon(COLORS.line2)});
    }
  }

  &.k-CheckableButton--bottom {
    &::after {
      position: absolute;
      bottom: -${pxToRem(20 / 2 + 1)};
      bottom: calc((var(--CheckableButton-radius) / 2 + ${pxToRem(1)}) * -1);
      opacity: 0;
      transform-origin: 50% 50%;
      transition: opacity 0.2s ease,
        transform 0.2s cubic-bezier(0.3, -0.5, 0.8, 1);
      transform: scale(0);
    }
    &[aria-checked]::after {
      opacity: 1;
      transform: scale(1);
      transition-timing-function: ease, cubic-bezier(0.2, 2, 0.7, 1);
    }
  }

  &.k-CheckableButton--left {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding-left: 0;
    text-align: left;

    &::after {
      margin: 0 ${pxToRem(15)};
      margin: 0 var(--CheckableButton-checkMargin);
      border: var(--border-width) solid var(--color-grey-400);
      background-color: ${COLORS.background1};

      transition: border-color 0.2s ease, background 0.2s ease;
    }

    &[aria-checked]::after {
      border-color: ${COLORS.primary1};
      background-color: ${COLORS.primary1};
    }
    &.k-Button--copper::after {
      border-color: ${COLORS.error};
      background-color: ${COLORS.background1};
    }
    &:disabled::after {
      border-color: ${COLORS.background1};
      background-color: ${COLORS.line2};
    }
  }

  &.k-Button--micro,
  &.k-Button--tiny {
    --CheckableButton-radius: ${pxToRem(15)};
    --CheckableButton-checkMargin: ${pxToRem(10)};
  }

  &.k-Button--regular {
    --CheckableButton-radius: ${pxToRem(20)};
    --CheckableButton-checkMargin: ${pxToRem(15)};
  }

  &.k-Button--big,
  &.k-Button--huge,
  &.k-Button--giant {
    --CheckableButton-radius: ${pxToRem(24)};
    --CheckableButton-checkMargin: ${pxToRem(20)};
  }

  &.k-Button--andromeda {
    &.k-Button--lithium,
    &.k-Button--hydrogen {
      &:not(:disabled) {
        &:hover,
        &:focus {
          border-color: ${COLORS.primary4};
          background-color: ${COLORS.background1};
          color: ${COLORS.primary1};

          &:not([aria-checked])::after {
            border-color: ${COLORS.primary4};
          }
        }

        &:active {
          border-color: ${COLORS.primary2};
          background-color: ${COLORS.background1};
          color: ${COLORS.primary2};
        }
      }
    }

    &[aria-checked]:focus {
      border-color: ${COLORS.primary1};
      color: ${COLORS.primary1};
    }
  }

  &.k-Button--orion {
    &.k-Button--lithium,
    &.k-Button--hydrogen {
      &:not(:disabled) {
        &:hover {
          border-color: ${COLORS.primary4};
          background-color: ${COLORS.background1};
          color: ${COLORS.font1};

          &:not([aria-checked])::after {
            border-color: ${COLORS.primary4};
          }
        }

        &:focus {
          border-color: ${COLORS.line1};
          background-color: ${COLORS.background1};
          color: ${COLORS.font1};
        }

        &[aria-checked] {
          border-color: ${COLORS.primary1};
          color: ${COLORS.font1};
        }

        &:active {
          border-color: ${COLORS.primary2};
          background-color: ${COLORS.background1};
        }
      }
    }

    &[aria-checked]:focus {
      border-color: ${COLORS.primary1};
    }
  }
`

export const CheckableButton = ({
  checkPosition,
  isChecked,
  className,
  children,
  error,
  ...props
}) => {
  const checkedModifier = (() => {
    switch (true) {
      case error:
        return 'copper'
      case isChecked:
        return 'lithium'
      default:
        return 'hydrogen'
    }
  })()

  return (
    <StyledCheckableButton
      className={classNames(
        'k-CheckableButton',
        className,
        `k-CheckableButton--${checkPosition}`,
      )}
      {...props}
      aria-checked={isChecked || null}
      modifier={checkedModifier}
    >
      {children}
    </StyledCheckableButton>
  )
}

CheckableButton.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isChecked: PropTypes.bool,
  checkPosition: PropTypes.oneOf(['bottom', 'left']),
}

CheckableButton.defaultProps = {
  disabled: false,
  error: false,
  isChecked: false,
  checkPosition: 'bottom',
}
