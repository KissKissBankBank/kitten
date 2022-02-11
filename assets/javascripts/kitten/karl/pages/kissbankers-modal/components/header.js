import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  pxToRem,
  stepToRem,
  TYPOGRAPHY,
  ScreenConfig,
  COLORS,
} from 'kitten'

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

Header.propTypes = {
  orderId: PropTypes.string.isRequired,
  orderDate: PropTypes.instanceOf(Date).isRequired,
}
