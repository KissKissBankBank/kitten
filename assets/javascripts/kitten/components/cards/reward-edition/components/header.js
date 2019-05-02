import React, { PureComponent } from 'react'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Button } from '../../../../components/buttons/button/button'
import { GarbageIcon } from '../../../../components/icons/garbage-icon'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledContainerHeader = styled.div`
  border-bottom-width: ${borderWidth};
  border-bottom-style: solid;
  border-bottom-color: ${borderColor};
  padding: ${pxToRem(15)};
  background-color: ${COLORS.background3};
  display: flex;
`

const StyledRewardAmount = styled(Text)`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledGarbageButton = styled(Button)`
  align-item: flex-end;
`

export class Header extends PureComponent {
  renderGarbageButton() {
    return (
      <StyledGarbageButton
        type="button"
        title="Garbage Button"
        aria-label="Garbage Button"
        modifier="beryllium"
        tiny
        icon
      >
        <GarbageIcon />
      </StyledGarbageButton>
    )
  }

  render() {
    return (
      <StyledContainerHeader>
        <StyledRewardAmount>{this.props.children}</StyledRewardAmount>
        {this.renderGarbageButton()}
      </StyledContainerHeader>
    )
  }
}
