import React from 'react'
import HeadNumbers from './numbers'
import EvolutionLineGraph from './evolution-line-graph'
import AnalysisBarGraph from './analysis-bar-graph'
import ReferersTable from './referers-table'
import TopRewardsBarGraph from './top-rewards-bar-graph'
import AllRewardsTable from './all-rewards-table'

import { Container } from '../../../components/grid/container'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledContainer = styled(Container)`
  section.Dashboard__section {
    margin-top: ${pxToRem(100)};

    &:first-child {
      margin-top: ${pxToRem(80)};
    }
    &:last-child {
      margin-bottom: ${pxToRem(80)};
    }
  }
`

const ProjectDashboard = () => (
  <StyledContainer>
    <section className="Dashboard__section">
      <HeadNumbers />
    </section>

    <section className="Dashboard__section">
      <EvolutionLineGraph />
    </section>

    <section className="Dashboard__section">
      <AnalysisBarGraph />
    </section>

    <section className="Dashboard__section">
      <ReferersTable />
    </section>

    <section className="Dashboard__section">
      <TopRewardsBarGraph />
    </section>

    <section className="Dashboard__section">
      <AllRewardsTable />
    </section>
  </StyledContainer>
)

export default ProjectDashboard
