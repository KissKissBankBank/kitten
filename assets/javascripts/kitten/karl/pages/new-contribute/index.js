import React from 'react'
import styled from 'styled-components'
import Selection from './components/selection'
import LittleMore from './components/little-more'
import Summary from './components/summary'
import { pxToRem } from '../../../helpers/utils/typography'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Title } from '../../../components/typography/title'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledPage = styled((props) => <div as="section" {...props} />)`
  margin-bottom: ${pxToRem(50)};
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(80)};
    margin-bottom: ${pxToRem(80)};
  }
`

const NewContributePage = () => {
  return (
    <StyledPage className="k-NewContributuinPage">
      <Grid>
        <GridCol col-l="8">
          <Title color="font1" modifier="quinary">
            Votre sélection
          </Title>
          <Selection />
          <LittleMore />
          <Title color="font1" modifier="quinary">
            Récapitulatif
          </Title>
          <Summary />
        </GridCol>

        <GridCol col-l="4">

        </GridCol>
      </Grid>
    </StyledPage>
  )
}

export default NewContributePage
