import React, { memo, Fragment } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { Button, FLUID } from '../../../../components/buttons/button/button'
import { Triptych as KittenTriptych } from '../../../../components/cards/triptych'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledButton = styled(props => <Button as="a" {...props} />)`
  @media (max-width: ${ScreenConfig.XS.max}px) {
    ${FLUID}
  }
`

const Card = () => (
  <Fragment>
    <Marger bottom="3">
      <div style={{ background: '#404040', height: 300 }} />
    </Marger>

    <Marger bottom="3">
      <Text color="font1" size="huge" weight="bold">
        La Social Cup, la Coupe de France des jeunes entrepreneurs sociaux
      </Text>
    </Marger>

    <StyledButton href="#">En savoir plus</StyledButton>
  </Fragment>
)

const Triptych = () => (
  <Marger top={{ default: 8, fromS: 10 }} bottom={{ default: 8, fromS: 10 }}>
    <Container>
      <Grid>
        <GridCol col-xs="10" offset-xs="1">
          <KittenTriptych
            title={
              <Title tag="h2" modifier="secondary" margin={false}>
                La Banque Postale, un exemple de partenariat riche de sens
              </Title>
            }
            item1={<Card />}
            item2={<Card />}
            item3={<Card />}
          />
        </GridCol>
      </Grid>
    </Container>
  </Marger>
)

export default memo(Triptych)
