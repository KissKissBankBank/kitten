import React from 'react'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ArrowContainer } from '../../../../components/molecules/boxes/arrow-container'
import { Button } from '../../../../components/molecules/buttons/button'
import { Text } from '../../../../components/atoms/typography/text'

const ARROW_SIZE = 7

const zoomInAndOpacity = keyframes`
  from {
    transform: translateX(-50%) translateY(0) scale(.66);
    opacity: 0;
  }
  to
  {
    transform: translateX(-50%) translateY(${pxToRem(ARROW_SIZE)}) scale(1);
    opacity: 1;
  }
`

const zoomOutAndOpacity = keyframes`
  from {
    transform: translateX(-50%) translateY(${pxToRem(ARROW_SIZE)}) scale(1);
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
    transform-origin: 50% ${pxToRem(ARROW_SIZE)};

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
      transform: translateX(-50%) translateY(${pxToRem(ARROW_SIZE)}) scale(1);
      opacity: 1;
    }
  }
`

export const ButtonWithTooltip = ({
  className,
  children,
  tooltipText,
  buttonProps,
  tooltipProps,
  ...props
}) => {
  return (
    <StyledButtonWithTooltip
      {...props}
      className={classNames(
        'k-ButtonWithTooltip',
        className,
      )}
    >
      <Button
        {...buttonProps}
        className={classNames(
          buttonProps?.className,
          'k-ButtonWithTooltip__button',
        )}
        aria-label={tooltipText}
      >
        {children}
      </Button>

      <ArrowContainer
        className={classNames('k-ButtonWithTooltip__container')}
        color={COLORS.line1}
        size={ARROW_SIZE}
        padding={8}
        borderRadius={4}
        position="top"
        aria-hidden
        centered
        {...tooltipProps}
      >
        <Text size="tiny" color="font1" weight="regular">
          {tooltipText}
        </Text>
      </ArrowContainer>
    </StyledButtonWithTooltip>
  )
}

ButtonWithTooltip.protoTypes = {
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.node,
}
