import React, { Component } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../components/buttons/button/button'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Field } from '../../../../components/form/field'

const StyledImage = styled.div`
  height: 800px;
  margin-left: -${pxToRem(CONTAINER_PADDING)};
  background: #404040;
`

class FormWithImage extends Component {
  render() {
    return (
      <Marger top="10" bottom="10">
        <Container>
          <Grid>
            <GridCol col-l="6">
              <StyledImage />
            </GridCol>

            <GridCol col-l="4" offset-l="1">
              <Marger bottom="1.5">
                <Title tag="h3" modifier="quaternary" margin={false}>
                  Contactez nous et rejoignez la famille des partenaires de
                  KissKissBankBank
                </Title>
              </Marger>

              <Marger bottom="3">
                <HorizontalStroke />
              </Marger>

              <Marger bottom="4">
                <Field>
                  <Field.Label>Votre prénom</Field.Label>

                  <Field.Input placeholder="Entrer votre prénom" />
                </Field>
              </Marger>

              <Marger bottom="4">
                <Field>
                  <Field.Label>Votre nom</Field.Label>

                  <Field.Input placeholder="Entrer votre nom" />
                </Field>
              </Marger>

              <Marger bottom="4">
                <Field>
                  <Field.Label>Votre adresse email</Field.Label>

                  <Field.Input placeholder="Entrer votre adresse email" />
                </Field>
              </Marger>

              <Marger bottom="4">
                <Field>
                  <Field.Label>Votre numéro de téléphone</Field.Label>

                  <Field.Input placeholder="Entrer votre numéro de téléphone" />
                </Field>
              </Marger>

              <Marger bottom="4">
                <Field>
                  <Field.Label>Vous représentez</Field.Label>

                  <Field.Input placeholder="Votre entreprise, votre association ou fondation." />
                </Field>
              </Marger>

              <Marger bottom="4">
                <Field>
                  <Field.Label>
                    À quel type de partenariat pensez-vous ?
                  </Field.Label>

                  <Field.Select
                    options={[
                      { value: 'mentors', label: 'Mentors' },
                      { value: 'mentors', label: 'Mentors' },
                      { value: 'mentors', label: 'Mentors' },
                    ]}
                  />
                </Field>
              </Marger>

              <Marger bottom="4">
                <Field>
                  <Field.Label>
                    Dites nous en plus si vous souhaitez
                  </Field.Label>

                  <Field.Input
                    tag="textarea"
                    placeholder="Je souhaite organiser un concours, repérer des créateurs, former mes collaborateurs au crowdfunding…"
                    rows="4"
                  />
                </Field>
              </Marger>

              <Marger bottom="4">
                <Field>CHECKBOX</Field>
              </Marger>

              <Button big fluid modifier="helium">
                Envoyer
              </Button>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  }
}

export default FormWithImage
