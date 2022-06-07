import React from 'react'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { ArrowContainer } from '../../information/boxes/arrow-container'
import { Button } from '../../action/button'
import { Text } from '../../typography/text'

const ARROW_SIZE = 7
const ARROW_DISTANCE = 10

const zoomInAndOpacity = keyframes`
  from {
    transform: translateX(var(--ButtonWithTooltip-translate)) translateY(0) scale(.66);
    opacity: 0;
  }
  to
  {
    transform: translateX(var(--ButtonWithTooltip-translate)) translateY(${pxToRem(
      ARROW_SIZE,
    )}) scale(1);
    opacity: 1;
  }
`

const StyledButtonWithTooltip = styled.div`
  --ButtonWithTooltip-translate: -50%;
  --ButtonWithTooltip-origin: 50%;

  display: inline-block;
  position: relative;

  .k-ButtonWithTooltip__tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(var(--ButtonWithTooltip-translate)) translateY(0)
      scale(0.66);
    transform-origin: var(--ButtonWithTooltip-origin) ${pxToRem(ARROW_SIZE)};
    opacity: 0;

    width: max-content;
    max-width: ${pxToRem(250)};

    display: block;
  }

  .k-ButtonWithTooltip__button {
    &:hover + .k-ButtonWithTooltip__tooltip,
    &:focus + .k-ButtonWithTooltip__tooltip {
      animation: 0.16s ease ${zoomInAndOpacity};
      transform: translateX(var(--ButtonWithTooltip-translate))
        translateY(${pxToRem(ARROW_SIZE)}) scale(1);
      opacity: 1;
    }
  }

  &.k-ButtonWithTooltip--left {
    --ButtonWithTooltip-translate: calc(
      -100% + ${pxToRem(ARROW_SIZE + ARROW_DISTANCE)}
    );
    --ButtonWithTooltip-origin: calc(
      100% - ${pxToRem(ARROW_SIZE + ARROW_DISTANCE)}
    );
  }
  &.k-ButtonWithTooltip--right {
    --ButtonWithTooltip-translate: calc(
      0% - ${pxToRem(ARROW_SIZE + ARROW_DISTANCE)}
    );
    --ButtonWithTooltip-origin: ${pxToRem(ARROW_SIZE + ARROW_DISTANCE)};
  }
`

export const ButtonWithTooltip = ({
  className,
  children,
  tooltipText,
  buttonProps,
  tooltipProps,
  position = 'center',
  ...props
}) => {
  return (
    <StyledButtonWithTooltip
      {...props}
      className={classNames(
        'k-ButtonWithTooltip',
        className,
        `k-ButtonWithTooltip--${position}`,
      )}
    >
      <Button
        aria-label={tooltipText}
        {...buttonProps}
        className={classNames(
          'k-ButtonWithTooltip__button',
          buttonProps?.className,
        )}
      >
        {children}
      </Button>

      <ArrowContainer
        color={COLORS.line1}
        size={ARROW_SIZE}
        padding={8}
        borderRadius={4}
        position="top"
        aria-hidden
        centered={position === 'center' || null}
        distance={position !== 'center' ? ARROW_DISTANCE : null}
        distanceIsReverse={position === 'left' || null}
        {...tooltipProps}
        className={classNames(
          'k-ButtonWithTooltip__tooltip',
          tooltipProps?.className,
        )}
      >
        <Text size="small" color="font1" weight="500">
          {tooltipText}
        </Text>
      </ArrowContainer>
    </StyledButtonWithTooltip>
  )
}

ButtonWithTooltip.protoTypes = {
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'center', 'right']),
}
