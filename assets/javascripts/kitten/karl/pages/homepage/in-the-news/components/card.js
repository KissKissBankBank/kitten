import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../../helpers/utils/typography'
import COLORS from '../../../../../constants/colors-config'
import { Container } from '../../../../../components/grid/container'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Title } from '../../../../../components/typography/title'
import { Text } from '../../../../../components/typography/text'
import { ScreenConfig } from '../../../../../constants/screen-config'

const StyledImage = styled.img`
  margin-bottom: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-bottom: ${pxToRem(30)};
  }
`

const Card = () => {
  return (
    <Container>
      <Grid>
        <GridCol col="6">
          <StyledImage
            alt=""
            style={{ width: '100%', display: 'block' }}
            src="https://via.placeholder.com/150x75"
          />
          <Title modifier="senary">Keep It Silky</Title>
          <Text tag="p">
            Soutenez ma première participation au Salon de la Lingerie de Paris
            et aidez moi à développer mon réseau commercial ainsi que mon image.
          </Text>
        </GridCol>
      </Grid>
    </Container>
  )
}

export default Card
