import React, { Component } from 'react'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../components/buttons/button/button'
import { VerticalStepper } from '../../../../components/steppers/vertical-stepper'

class TextWithIconsList extends Component {
  render() {
    return (
      <Marger top="10" bottom="10">
        <Container>
          <Grid>
            <GridCol col-l="4" offset-l="1">
              <Marger bottom="2">
                <Title tag="h1" modifier="secondary" margin={false}>
                  Les bonnes raisons de nous rejoindre
                </Title>
              </Marger>

              <Marger bottom="4">
                <HorizontalStroke size="big" style={{ height: 6 }} />
              </Marger>

              <Marger top="4">
                <Button as="a" href="#" modifier="helium" big>
                  Devenir partenaire
                </Button>
              </Marger>
            </GridCol>

            <GridCol col-l="5" offset-l="1">
              <VerticalStepper>
                <VerticalStepper.Step>
                  <Text color="font1" weight="light">
                    Donnez{' '}
                    <Text weight="regular">de la visibilité et du sens</Text> à
                    votre marque, entreprise, collectivité, association,
                    fondation...
                  </Text>
                </VerticalStepper.Step>
                <VerticalStepper.Step>
                  <Text color="font1" weight="light">
                    <Text weight="regular">Fédérez votre communauté</Text> ou
                    vos collaborateurs en donnant naissance à des projets
                    impactants
                  </Text>
                </VerticalStepper.Step>
                <VerticalStepper.Step>
                  <Text color="font1" weight="light">
                    Touchez de <Text weight="regular">nouveaux publics</Text>
                  </Text>
                </VerticalStepper.Step>
                <VerticalStepper.Step>
                  <Text color="font1" weight="light">
                    Repérez, accompagnez et{' '}
                    <Text weight="regular">révélez les talents</Text> de demain
                    dans les domaines qui vous tiennent à coeur
                  </Text>
                </VerticalStepper.Step>
                <VerticalStepper.Step>
                  <Text color="font1" weight="light">
                    Enrichissez votre image grâce aux{' '}
                    <Text weight="regular">
                      valeurs citoyennes, positives et collaboratives
                    </Text>{' '}
                    du crowdfunding
                  </Text>
                </VerticalStepper.Step>
                <VerticalStepper.Step>
                  <Text color="font1" weight="light">
                    Dynamisez l’économie locale en soutenant{' '}
                    <Text weight="regular">
                      les créateurs et entrepreneurs de votre territoire
                    </Text>
                  </Text>
                </VerticalStepper.Step>
              </VerticalStepper>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  }
}

export default TextWithIconsList
