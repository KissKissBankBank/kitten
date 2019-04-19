import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { Button } from '../../../../components/buttons/button/button'

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

export class Content extends PureComponent {
  render() {
    return (
      <StyledContainerContent>
        <StyledButton>
          <Button radius={4}>Button1</Button>
          <Button radius={4}>Button2</Button>
          <Button radius={4}>Button3</Button>
        </StyledButton>
      </StyledContainerContent>
    )
  }
}
