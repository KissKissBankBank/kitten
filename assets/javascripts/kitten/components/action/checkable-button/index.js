import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../action/button'
import styled from 'styled-components'
import { checkedCircleIconAsString } from '../../graphics/icons/checked-circle-icon'
import { encodeSvgString } from '../../../helpers/utils/encode-svg'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const getCircleIcon = color =>
  encodeSvgString(
    checkedCircleIconAsString({
      circleColor: color,
      checkedColor: COLORS.background1,
    }),
  )

const StyledCheckableButton = styled(Button)`
  gap: 0;

  &::after {
    flex-shrink: 0;
    content: '';
    box-sizing: border-box;
    border-radius: var(--border-radius-rounded);

    width: var(--CheckableButton-dimension);
    height: var(--CheckableButton-dimension);

    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: var(--CheckableButton-dimension)
      var(--CheckableButton-dimension);
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
      background-image: url(${getCircleIcon(COLORS.font3)});
    }
  }

  &.k-CheckableButton--bottom {
    &::after {
      position: absolute;
      bottom: -${pxToRem(20 / 2 + 1)};
      bottom: calc((var(--CheckableButton-dimension) / 2 + ${pxToRem(1)}) * -1);
      opacity: 0;
      transform-origin: 50% 50%;
      transition: opacity var(--transition),
        transform var(--transition-duration) cubic-bezier(0.3, -0.5, 0.8, 1);
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
      border: var(--border);
      background-color: ${COLORS.background1};

      transition: border-color var(--transition),
        background-color var(--transition);
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
  &.k-Button--tiny,
  &.k-Button--small {
    --CheckableButton-dimension: ${pxToRem(15)};
    --CheckableButton-checkMargin: ${pxToRem(10)};
  }

  &.k-Button--regular,
  &.k-Button--medium {
    --CheckableButton-dimension: ${pxToRem(20)};
    --CheckableButton-checkMargin: ${pxToRem(15)};
  }

  &.k-Button--big,
  &.k-Button--large,
  &.k-Button--huge,
  &.k-Button--giant {
    --CheckableButton-dimension: ${pxToRem(24)};
    --CheckableButton-checkMargin: ${pxToRem(20)};
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
      role="checkbox"
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
