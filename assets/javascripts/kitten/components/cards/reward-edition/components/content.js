import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { Button } from '../../../../components/buttons/button/button'
import { ExpandBoard } from '../../../../components/expandable/expand-board'
import { ScreenConfig } from '../../../../constants/screen-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledContainerContent = styled.div`
  height: ${pxToRem(500)};
  padding: ${pxToRem(40)};
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButtonGroup = styled.div`
  @media (max-width: ${ScreenConfig.S.max}px) {
    display: none;
  }
`

const StyledExpandBoard = styled.div`
  @media (min-width: ${ScreenConfig.M.min}px) {
    display: none;
  }
`

export class Content extends PureComponent {
  renderButtonGroup() {
    return <Button>{this.props.children}</Button>
  }

  renderExpandBoard() {
    const { expandedButtonText } = this.props

    return (
      <ExpandBoard withAnimation>
        <ExpandBoard.Button expandChildren={expandedButtonText}>
          {buttonText}
        </ExpandBoard.Button>
        <ExpandBoard.Content>{this.props.children}</ExpandBoard.Content>
      </ExpandBoard>
    )
  }

  render() {
    return (
      <StyledContainerContent>
        <StyledButton>
          <StyledButtonGroup>{this.renderButtonGroup()}</StyledButtonGroup>
          <StyledExpandBoard>{this.renderExpandBoard()}</StyledExpandBoard>
        </StyledButton>
      </StyledContainerContent>
    )
  }

  static defaultProps = {
    children: 'Button 1',
  }
}
