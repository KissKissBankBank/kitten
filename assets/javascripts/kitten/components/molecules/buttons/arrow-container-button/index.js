import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Button,
  ArrowContainer,
  GiftIcon,
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

const StyledArrowContainerButton = styled.div`
  display: inline-block;
  position: relative;

  .k-ArrowContainerButton__container {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(0) scale(0.66);
      transform-origin: 50% ${pxToRem(7)};

      width: max-content;
      max-width: ${pxToRem(250)};

      flex-shrink: 0;
      display: block;

      animation: 0.16s ease ${zoomOutAndOpacity};
      opacity: 0;
  }

  .k-ArrowContainerButton__button {
    &:hover + .k-ArrowContainerButton__container,
    &:focus + .k-ArrowContainerButton__container {
      animation: 0.16s ease ${zoomInAndOpacity};
      transform: translateX(-50%) translateY(${pxToRem(7)}) scale(1);
      opacity: 1;
    }
  }
`

export const ArrowContainerButton = ({
  className,
  iconTitle,
  ...props
}) => {

  return (
    <StyledArrowContainerButton>
      <Button
        className={classNames(
          'k-ArrowContainerButton__button',
          className,
        )}
        aria-label={iconTitle}
        icon
        borderRadius={100}
        size="tiny"
        {...props}
      >
        <GiftIcon width={19} height={16} title={iconTitle} />
      </Button>

      <ArrowContainer
        className={classNames(
          'k-ArrowContainerButton__container'
        )}
        color={COLORS.line1}
        size={7}
        padding={8}
        borderRadius={4}
        position="top"
        aria-hidden
        centered
      >
        <Text size="tiny" color="font1" weight="regular">
          {iconTitle}
        </Text>
      </ArrowContainer>
    </StyledArrowContainerButton>
  )
}

ArrowContainerButton.protoTypes = {
  iconTitle: PropTypes.string,
}

ArrowContainerButton.defaultProps = {
  iconTitle: "Carte cadeau",
}
