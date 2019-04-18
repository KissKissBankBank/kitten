import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledCard = styled.div`
  width: 100%;
  height: ${pxToRem(150)};
  border-width: ${borderWidth};
  border-style: solid;
  border-color: ${borderColor};
`

export class Footer extends PureComponent {
  render() {
    return (
      <>
        <StyledCard />
      </>
    )
  }
}
