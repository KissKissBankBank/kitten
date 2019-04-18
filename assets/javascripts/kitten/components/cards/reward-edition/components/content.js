import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledCard = styled.div`
  width: 100%;
  height: ${pxToRem(500)};
  border-right-width: ${borderWidth};
  border-left-width: ${borderWidth};
  border-right-style: solid;
  border-left-style: solid;
  border-right-color: ${borderColor};
  border-left-color: ${borderColor};
`

export class Content extends PureComponent {
  render() {
    return (
      <>
        <StyledCard />
      </>
    )
  }
}
