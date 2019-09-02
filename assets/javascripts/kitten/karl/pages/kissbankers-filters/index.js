import React from 'react'
import styled from 'styled-components'
import Dates from './components/dates'
import Variations from './components/variations'
import Messages from './components/messages'
import Statutes from './components/statutes'
import Deliveries from './components/deliveries'
import AnnexeNav from './components/annexe-nav'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledContainer = styled.ul`
  display: flex;
  margin-top: ${pxToRem(10)};
  margin-bottom: ${pxToRem(40)};
  list-style-type: none;
  position: relative;
  padding-inline-start: 0;

  & li {
    margin-right: ${pxToRem(15)};
  }

  & li:last-child {
    margin-right: 0;
  }
`

const KissbankersFilters = props => (
  <nav>
    <Text weight="regular" size="tiny">
      Filtrer par
    </Text>
    <StyledContainer>
      <li>
        <Dates />
      </li>
      <li>
        <Variations />
      </li>
      <li>
        <Messages />
      </li>
      <li>
        <Statutes />
      </li>
      <li>
        <Deliveries />
      </li>
    </StyledContainer>
    <AnnexeNav />
  </nav>
)

export default KissbankersFilters
