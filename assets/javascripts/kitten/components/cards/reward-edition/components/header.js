import React, { PureComponent } from 'react'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { Button } from '../../../../components/buttons/button/button'
import { GarbageIcon } from '../../../../components/icons/garbage-icon'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const garbageButtonKeyframes = () =>
  keyframes`
    '0%': { opacity: 1 };
    '100%': { opacity: 0, height: 0 };
`

const StyledContainerCard = styled.div`
  width: 100%;
  height: 100%;
  border-width: ${borderWidth};
  border-style: solid;
  border-color: ${borderColor};

  &[aria-hidden='true'] {
    animation: x 0.4s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
    animation-name: ${garbageButtonKeyframes};
    pointer-events: none;
    opacity: 1;
  }
`

const StyledBanner = styled.div`
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

  renderBanner() {
    return (
      <StyledBanner>
        <StyledRewardAmount weight="regular" size="default">
          Contrepartie pour _€
        </StyledRewardAmount>
        {this.renderGarbageButton()}
      </StyledBanner>
    )
  }

  render() {
    return <StyledContainerCard>{this.renderBanner()}</StyledContainerCard>
  }
}
