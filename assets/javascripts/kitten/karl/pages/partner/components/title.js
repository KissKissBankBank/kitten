import React, { memo } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../layout/marger'
import { Container } from '../../../../layout/container'
import { Grid, GridCol } from '../../../../layout/grid'
import { Title as KittenTitle } from '../../../../typography/title'
import {
  HorizontalStroke,
  DEFAULT,
  BIG,
} from '../../../../typography/horizontal-stroke'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledHorizontalStroke = styled(HorizontalStroke)`
  ${DEFAULT}
  width: ${pxToRem(40)};
  margin: 0 auto;

  @media (min-width: ${ScreenConfig.S.min}px) {
    ${BIG}
    height: ${pxToRem(6)};
    margin: 0;
  }
`

const StyledTitle = styled(KittenTitle)`
  text-align: center;

  @media (min-width: ${ScreenConfig.S.min}px) {
    text-align: left;
  }
`

const Title = () => (
  <Marger top={{ default: 8, fromS: 10 }} bottom={{ default: 3, fromS: 4 }}>
    <Container>
      <Grid>
        <GridCol col-xs="10" offset-xs="1">
          <Marger bottom="2">
            <StyledTitle tag="h2" modifier="secondary" margin={false}>
              Nous créons avec vous <br />
              des partenariats sur-mesure
            </StyledTitle>
          </Marger>

          <StyledHorizontalStroke />
        </GridCol>
      </Grid>
    </Container>
  </Marger>
)

export default memo(Title)
