import React from 'react'
import styled from 'styled-components'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledNumber = styled(({ number, unit, legend, ...props }) => (
  <GridCol {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${pxToRem(20)};

  &:last-child,
  &:nth-last-child(2) {
    margin-bottom: 0;
  }

  .Number__title {
    position: relative;
  }
  .Number__unit {
    position: absolute;
    left: calc(100% + ${pxToRem(5)});
    top: 0;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    font-size: ${stepToRem(-2)};
  }
  .Number__legend {
    line-height: 1.1;
    text-align: center;
    font-size: ${stepToRem(-2)};
    margin: 0;
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    .Number__unit {
      font-size: ${stepToRem(1)};
    }
    .Number__legend {
      font-size: ${stepToRem(-2)};
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin-bottom: 0;

    .Number__unit {
      font-size: ${stepToRem(0)};
    }
    .Number__legend {
      font-size: ${stepToRem(-1)};
    }
  }
`

const Number = ({ number, unit, legend }) => (
  <StyledNumber col="6" col-s="4" col-l="2">
    <Title tag="p" className="Number__title" modifier="senary" margin={false}>
      {number}
      {unit && <span className="Number__unit">{unit}</span>}
    </Title>
    <Text tag="p" className="Number__legend" margin={false}>
      {legend}
    </Text>
  </StyledNumber>
)

const HeadNumbers = () => (
  <>
    <Grid>
      <GridCol col-m="10" offset-m="1">
        <Grid>
          <Number number="54 323" unit="€" legend="Montant collecté" />
          <Number number="217" unit="%" legend="Pourcentage collecté" />
          <Number number="512" legend="Nombre de contributeurs" />
          <Number number="11 322" legend="Nombre de visites" />
          <Number number="256" unit="€" legend="Panier moyen" />
          <Number number="4,57" unit="%" legend="Taux de conversion" />
        </Grid>
      </GridCol>
    </Grid>
  </>
)

export default HeadNumbers
