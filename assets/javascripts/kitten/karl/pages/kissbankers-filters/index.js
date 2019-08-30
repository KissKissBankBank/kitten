import React from 'react'
import styled from 'styled-components'
import Dates from './components/dates'
import Variations from './components/variations'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledContainer = styled.ul`
  display: flex;
  margin-top: ${pxToRem(10)};
  margin-bottom: ${pxToRem(40)};
  list-style-type: none;

  & li {
    margin-right: ${pxToRem(15)};
  }

  & li:last-child {
    margin-right: 0;
  }
`

const KissbankersFilters = props => (
  <>
    <StyledContainer>
      <li>
        <Dates />
      </li>
      <li>
        <Variations />
      </li>
    </StyledContainer>
  </>
)

export default KissbankersFilters
