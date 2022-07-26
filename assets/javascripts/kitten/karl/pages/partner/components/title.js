import React, { memo } from 'react'
import styled from 'styled-components'
import {
  Marger,
  Container,
  Grid,
  GridCol,
  Title as KittenTitle,
  ScreenConfig,
  pxToRem,
} from 'kitten'
import {
  HorizontalStroke,
  MEDIUM,
  LARGE,
} from '../../../../components/typography/horizontal-stroke'

const StyledHorizontalStroke = styled(HorizontalStroke)`
  ${MEDIUM}
  width: ${pxToRem(40)};
  margin: 0 auto;

  @media (min-width: ${ScreenConfig.S.min}px) {
    ${LARGE}
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
