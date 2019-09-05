import React from 'react'
import styled from 'styled-components'
import Dates from './components/dates'
import Variations from './components/variations'
import Messages from './components/messages'
import Statutes from './components/statutes'
import Deliveries from './components/deliveries'
import MoreFilters from './components/more-filters'
import Result from './components/result'
import AnnexeNav from './components/annexe-nav'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledContainer = styled.ul`
  display: flex;
  margin-top: ${pxToRem(10)};
  margin-bottom: ${pxToRem(40)};
  list-style-type: none;
  position: relative;
  padding-inline-start: 0;

  li {
    margin-right: ${pxToRem(15)};
  }

  li:last-child {
    flex: 1;
    align-self: center;
    margin-right: 0;
    text-align: end;
  }

  li:nth-child(2) {
    @media (max-width: ${ScreenConfig.S.max}px) {
      display: none;
    }
  }

  li:nth-child(3) {
    @media (max-width: ${ScreenConfig.M.max}px) {
      display: none;
    }
  }

  li:nth-child(4) {
    @media (max-width: ${ScreenConfig.S.max}px) {
      display: none;
    }
  }

  li:nth-child(5) {
    @media (max-width: ${ScreenConfig.M.max}px) {
      display: none;
    }
  }

  li:nth-child(6) {
    @media (min-width: ${ScreenConfig.L.min}px) {
      display: none;
    }
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
      <li>
        <MoreFilters />
      </li>
      <li>
        <Result />
      </li>
    </StyledContainer>
    <AnnexeNav />
  </nav>
)

export default KissbankersFilters
