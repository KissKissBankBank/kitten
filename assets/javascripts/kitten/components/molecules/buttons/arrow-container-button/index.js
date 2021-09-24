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
  0% {
    transform: translateY(calc(-1 * 100% scale(.66);
    opacity: 0;
  }
  to
  {
    transform: translateY(calc(-1 * 50% scale(1);
    opacity: 1;
  }
`

const StyledArrowContainerButton = styled.div`

  --Button-tiny-size: ${pxToRem(40)};
  --Button-regular-size: ${pxToRem(50)};

  .k-ArrowContainerButton__button {
    display: inline-flex;
  
    &:hover + .k-ArrowContainerButton__container {
      position: absolute;
      flex-shrink: 0;
      display: block;
      animation: 0.16s ease ${zoomInAndOpacity};
      margin-top: ${pxToRem(7)};
      width: max-content;
      height: auto;
      transform: translateX(calc(-50% + var(--Button-tiny-size) / 2));
    }
  }
  
  .k-ArrowContainerButton__container {
    display: none;
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
          {...props}
        )}
        aria-label={iconTitle}
        icon
        borderRadius={100}
        size="tiny"
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
