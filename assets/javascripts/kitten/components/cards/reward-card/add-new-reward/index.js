import React, { PureComponent, CreateRef } from 'react'
import styled from 'styled-components'
import { GarbageIcon } from '../../components/icons/garbage-icon'
import { ButtonIcon } from '../../components/buttons/button-icon'

const StyledContainerCard = styled.div``

const StyledBanner = styled.div``

export class AddNewReward extends PureComponent {
  renderGarbageButton() {
    const { modifier, size, isDisabled } = this.props

    return (
      <ButtonIcon
        type="button"
        title="Garbage Button"
        aria-label="Garbage Button"
        modifier={modifier}
        size={size}
        disabled={isDisabled}
      >
        <GarbageIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>
    )
  }

  render() {
    return (
      <StyledContainerCard>
        <StyledBanner>{this.renderGarbageButton()}</StyledBanner>
      </StyledContainerCard>
    )
  }
}
