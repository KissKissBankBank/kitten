import React from 'react'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

const StyledHeader = styled.header`
  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    padding: ${pxToRem(20)} ${pxToRem(70)};
    border-bottom: ${borderWidth} solid ${borderColor};
  }
`

const StyledTitle = styled.h1`
  ${TYPOGRAPHY.fontStyles.light}
  margin: 0;
  text-align: center;
  font-size: ${stepToRem(-1)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    font-size: ${stepToRem(2)};
  }
`

export const Header = ({ orderId, orderDate }) => {
  return (
    <StyledHeader>
      <StyledTitle>
        <>Contribution </>
        <strong>#{orderId}</strong>
        <> du </>
        <strong>
          {orderDate.getDate()}/{orderDate.getMonth()}/{orderDate.getFullYear()}
        </strong>
      </StyledTitle>
    </StyledHeader>
  )
}
