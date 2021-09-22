import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Button, ArrowContainer, GiftIcon } from '../../../../'
import classNames from 'classnames'

const zoomInAndOpacity = keyframes`
  0% {
    transform: translateX(calc(-1 * var(--Dropdown-transform))) scale(.66);
    opacity: 0;
  }
  to
  {
    transform: translateX(calc(-1 * var(--Dropdown-transform))) scale(1);
    opacity: 1;
  }
`

const StyledToggleButton = styled(Button)`

`

export const ToggleButton = ({
  className,
  ...props
}) => {
  return (
    <StyledToggleButton
      className={classNames(
        'k-ToggleButton',
        className,
        {...props}
      )}
      icon
      borderRadius={100}
    >
      <GiftIcon width={19} height={16} title="Carte cadeau" />
    </StyledToggleButton>
  )
}
