import React, { Component } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../components/buttons/button'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Field } from '../../../../components/form/field'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { CheckedCircleIcon } from '../../../../components/icons/checked-circle-icon'

const StyledImage = styled.div`
  height: ${pxToRem(800)};
  margin-left: -${pxToRem(CONTAINER_PADDING)};
  background: #404040;
`

const StyledTitle = styled(Title)`
  text-align: left;

  @media (min-width: ${ScreenConfig.S.min}px) {
    text-align: center;
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    text-align: left;
  }
`

const StyledHorizontalStroke = styled(HorizontalStroke)`
  margin: 0;

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin: 0 auto;
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    margin: 0;
  }
`

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${pxToRem(20)};
  padding: ${pxToRem(20)} ${pxToRem(15)};
  background-color: ${COLORS.tertiary1};

  svg {
    flex-shrink: 0;
  }
`

class FormWithImage extends Component {
  render() {
    return (
      <Marger
        top={{ default: 8, fromS: 10 }}
        bottom={{ default: 8, fromS: 10 }}
      >
        <Container>
          <Grid>
            <GridCol col-l="6" className="k-u-hidden@m-down">
              <StyledImage />
            </GridCol>

            <GridCol col-xs="10" offset-xs="1" col-l="4" offset-l="1">
              <Marger bottom="1.5">
                <StyledTitle tag="h3" modifier="quaternary" margin={false}>
                  Contactez nous et rejoignez la famille des partenaires de
                  KissKissBankBank
                </StyledTitle>
              </Marger>

              <Marger bottom="3">
                <StyledHorizontalStroke customSize={{ width: 40 }} />
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
                    name="mentor"
                    placeholder="Sélectionner le type de partenariat"
                    options={[
                      { value: '1', label: 'Mentors #1' },
                      { value: '2', label: 'Mentors #2' },
                      { value: '3', label: 'Mentors #3' },
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
                <Field>
                  <Field.Checkbox id="optin">
                    Je souhaite recevoir le best-of des projets KissKissBankBank
                  </Field.Checkbox>
                </Field>
              </Marger>

              <Button big fluid modifier="helium">
                Envoyer
              </Button>

              <SuccessMessage>
                <CheckedCircleIcon
                  circleColor={COLORS.valid}
                  checkedColor={COLORS.background1}
                  style={{ width: 25 }}
                  className="k-u-margin-right-single"
                />

                <Text
                  tag="p"
                  size="micro"
                  lineHeight="normal"
                  weight="light"
                  color="font1"
                  style={{ margin: 0 }}
                >
                  Merci d'avoir pensé à KissKissBankBank. Nous avons bien reçu
                  votre demande et nous vous re-contactons dans les 72 heures.
                </Text>
              </SuccessMessage>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  }
}

export default FormWithImage
