import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Button,
  ArrowContainer,
  COLORS,
  pxToRem,
  Text
} from '../../../..'
import classNames from 'classnames'

const zoomInAndOpacity = keyframes`
  from {
    transform: translateX(-50%) translateY(0) scale(.66);
    opacity: 0;
  }
  to
  {
    transform: translateX(-50%) translateY(${pxToRem(7)}) scale(1);
    opacity: 1;
  }
`

const zoomOutAndOpacity = keyframes`
  from {
    transform: translateX(-50%) translateY(${pxToRem(7)}) scale(1);
    opacity: 1;
  }
  to
  {
    transform: translateX(-50%) translateY(0) scale(.66);
    opacity: 0;
  }
`

const StyledButtonWithTooltip = styled.div`
  display: inline-block;
  position: relative;

  .k-ButtonWithTooltip__container {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(0) scale(0.66);
      transform-origin: 50% ${pxToRem(7)};

      width: max-content;
      max-width: ${pxToRem(250)};

      display: block;

      animation: 0.16s ease ${zoomOutAndOpacity};
      opacity: 0;
  }

  .k-ButtonWithTooltip__button {
    &:hover + .k-ButtonWithTooltip__container,
    &:focus + .k-ButtonWithTooltip__container {
      animation: 0.16s ease ${zoomInAndOpacity};
      transform: translateX(-50%) translateY(${pxToRem(7)}) scale(1);
      opacity: 1;
    }
  }
`

export const ButtonWithTooltip = ({
  className,
  children,
  iconTitle,
  buttonProps,
  tooltipProps,
  ...props
}) => {

  return (
    <StyledButtonWithTooltip {...props}>
      <Button
        className={classNames(
          'k-ButtonWithTooltip__button',
          className,
        )}  
        aria-label={iconTitle}
        {...buttonProps}
      >
        {children}
      </Button>

      <ArrowContainer
        className={classNames(
          'k-ButtonWithTooltip__container'
        )}
        color={COLORS.line1}
        size={7}
        padding={8}
        borderRadius={4}
        position="top"
        aria-hidden
        centered
        {...tooltipProps}
      >
        <Text size="tiny" color="font1" weight="regular">
          {iconTitle}
        </Text>
      </ArrowContainer>
    </StyledButtonWithTooltip>
  )
}

ButtonWithTooltip.protoTypes = {
  iconTitle: PropTypes.string,
  children: PropTypes.node,
}

ButtonWithTooltip.defaultProps = {
  iconTitle: "Carte cadeau",
}
