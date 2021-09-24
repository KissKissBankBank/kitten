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
} from '../../../../'
import classNames from 'classnames'

// const zoomInAndOpacity = keyframes`
//   0% {
//     transform: translateX(calc(-1 * var(--Dropdown-transform))) scale(.66);
//     opacity: 0;
//   }
//   to
//   {
//     transform: translateX(calc(-1 * var(--Dropdown-transform))) scale(1);
//     opacity: 1;
//   }
// `

const StyledToggleButton = styled.div`

--Button-tiny-size: ${pxToRem(40)};
--Button-regular-size: ${pxToRem(50)};

  .k-ToggleButton__button {
    width: var(--Button-regular-size) !important;
    display: inline-flex;
  
    &:hover + .k-ToggleButton__container {
      position: absolute;
      flex-shrink: 0;
      display: block;
      animation: 0.16s ease ${zoomInAndOpacity};
      margin-top: ${pxToRem(7)};
      width: max-content;
      height: auto;
      transform: translateX(calc(-50% + var(--Button-regular-size)) / 2);
    }
  }
  
  .k-ToggleButton__container {
    display: none;
  }
`

export const ToggleButton = ({
  className,
  iconTitle,
  ...props
}) => {

  return (
    <StyledToggleButton>
      <Button
        className={classNames(
          'k-ToggleButton__button',
          className,
          {...props}
        )}
        aria-label={iconTitle}
        icon
        borderRadius={100}
      >
        <GiftIcon width={19} height={16} title={iconTitle} />
      </Button>

      <ArrowContainer
        className={classNames(
          'k-ToggleButton__container'
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
    </StyledToggleButton>
  )
}

ToggleButton.protoTypes = {
  iconTitle: PropTypes.string,
}

ToggleButton.defaultProps = {
  iconTitle: "Carte cadeau",
}
