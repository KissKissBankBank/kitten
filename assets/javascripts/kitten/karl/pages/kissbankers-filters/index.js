import React from 'react'
import styled from 'styled-components'
import Dates from './components/dates'
import Variations from './components/variations'
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
      <li className="k-u-hidden@s-down">
        <Variations />
      </li>
      <li className="k-u-hidden@s-down">
        <Statutes />
      </li>
      <li className="k-u-hidden@s-down">
        <Deliveries />
      </li>
      <li className="k-u-hidden@m-up">
        <MoreFilters />
      </li>
      <li>
        <Result />
      </li>
    </StyledContainer>
    <AnnexeNav />
    <Text
      as="button"
      color="primary1"
      size="tiny"
      weight="regular"
      style={{ border: 'none' }}
    >
      Réinitialiser les résultats
    </Text>
  </nav>
)

export default KissbankersFilters
