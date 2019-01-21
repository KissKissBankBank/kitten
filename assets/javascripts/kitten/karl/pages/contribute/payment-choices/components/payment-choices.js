import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../../../../../components/grid/container'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/typography/title'
import { Paragraph } from '../../../../../components/typography/paragraph'
import { Text } from '../../../../../components/typography/text'
import { HorizontalStroke } from '../../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../../components/buttons/button'
import { VisaIcon } from '../../../../../components/icons/visa-icon'
import { MasterCardIcon } from '../../../../../components/icons/mastercard-icon'
import { MaestroIcon } from '../../../../../components/icons/maestro-icon'
import { BancontactIcon } from '../../../../../components/icons/bancontact-icon'
import { IdealIcon } from '../../../../../components/icons/ideal-icon'
import { SofortIcon } from '../../../../../components/icons/sofort-icon'
import { PayPalIcon } from '../../../../../components/icons/paypal-icon'
import { GiropayIcon } from '../../../../../components/icons/giropay-icon'
import { PaymentButton } from './payment-button'
import Cart from '../../common/cart/cart'
import { pxToRem } from '../../../../../helpers/utils/typography'
import { Accordeon } from '../../../../../components/accordeon'
import { RadioButton } from '../../../../../components/form/radio-button'
import { Field } from '../../../../../components/form/field'

const HeaderDisplayStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class PaymentChoices extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedItem: null,
    }
  }

  handleChange = selectedItem => this.setState({ selectedItem })

  render() {
    const { onlyPayPal, error } = this.props
    const { selectedItem } = this.state

    return (
      <Container>
        <Grid>
          <GridCol col-xs="10" offset-xs="1" col-l="5" offset-l="1">
            <Marger bottom="2">
              <Title modifier="secondary" margin={false}>
                Paiement
              </Title>
            </Marger>

            <Marger top="2" bottom={{ default: 3, fromL: 4 }}>
              <HorizontalStroke size="big" />
            </Marger>

            <Marger top={{ default: 3, fromL: 4 }} bottom="4">
              <Paragraph modifier="tertiary" margin={false}>
                Vous serez débité dès aujourd’hui. En cas d’échec de la
                collecte, le montant de votre contribution vous sera totalement
                remboursé.
              </Paragraph>
            </Marger>

            <Marger top="4" bottom="1.5">
              <Text
                tag="p"
                weight="regular"
                color="font1"
                style={{ margin: 0 }}
              >
                Sélectionnez un type de paiement
              </Text>
            </Marger>

            <Grid>
              <GridCol col-m="8" col-l="10">
                <Accordeon
                  selectedItem={onlyPayPal ? 0 : null}
                  onChange={this.handleChange}
                >
                  {!onlyPayPal && (
                    <Accordeon.Item>
                      <Accordeon.Header>
                        <HeaderDisplayStyled>
                          <RadioButton
                            text={
                              <Text weight="regular" color="font1">
                                Payer par carte bancaire
                              </Text>
                            }
                            checked={selectedItem === 0}
                            style={{ margin: 0 }}
                          />
                          <HeaderDisplayStyled>
                            <VisaIcon style={{ marginRight: 20 }} />
                            <MasterCardIcon />
                          </HeaderDisplayStyled>
                        </HeaderDisplayStyled>
                      </Accordeon.Header>

                      <Accordeon.Content>
                        <form style={{ padding: 0 }}>
                          <Marger bottom="3">
                            <Field>
                              <Field.Label
                                labelProps={{ htmlFor: 'card-number' }}
                              >
                                Numéro de carte
                              </Field.Label>

                              <Field.Input
                                id="card-number"
                                placeholder="XXXX XXXX XXXX XXXX"
                                autoComplete="cc-number"
                                error={error}
                              />

                              {error && (
                                <Field.ErrorMessage>
                                  Le numéro de carte n'est pas valide.
                                </Field.ErrorMessage>
                              )}
                            </Field>
                          </Marger>

                          <Marger bottom="3">
                            <Field>
                              <Field.Label labelProps={{ htmlFor: 'month' }}>
                                Date de fin de validité
                              </Field.Label>

                              <Grid style={{ marginTop: pxToRem(-15) }}>
                                <GridCol col="6">
                                  <Field.Select
                                    id="month"
                                    name="month"
                                    placeholder="Mois"
                                    autoFill="cc-exp-month"
                                    options={[
                                      { value: '01', label: '01' },
                                      { value: '02', label: '02' },
                                      { value: '03', label: '03' },
                                      { value: '04', label: '04' },
                                      { value: '05', label: '05' },
                                      { value: '06', label: '06' },
                                      { value: '07', label: '07' },
                                      { value: '08', label: '08' },
                                      { value: '09', label: '09' },
                                      { value: '10', label: '10' },
                                      { value: '11', label: '11' },
                                      { value: '12', label: '12' },
                                    ]}
                                    error={error}
                                  />
                                </GridCol>

                                <GridCol col="6">
                                  <Field.Select
                                    id="year"
                                    name="year"
                                    placeholder="Année"
                                    autoFill="cc-exp-year"
                                    options={[
                                      { value: 2018, label: '18' },
                                      { value: 2019, label: '19' },
                                      { value: 2020, label: '20' },
                                      { value: 2021, label: '21' },
                                      { value: 2022, label: '22' },
                                      { value: 2023, label: '23' },
                                      { value: 2024, label: '24' },
                                      { value: 2025, label: '25' },
                                    ]}
                                    error={error}
                                  />
                                </GridCol>
                              </Grid>

                              {error && (
                                <Field.ErrorMessage>
                                  Le date de fin de validité n'est pas valide.
                                </Field.ErrorMessage>
                              )}
                            </Field>
                          </Marger>

                          <Marger bottom="4">
                            <Field>
                              <Field.Label labelProps={{ htmlFor: 'cvv' }}>
                                Cryptogramme visuel
                              </Field.Label>

                              <Field.Input
                                id="cvv"
                                placeholder="CVV"
                                digits={6}
                                error={error}
                              />

                              {error && (
                                <Field.ErrorMessage>
                                  Le cryptogramme visuel est requis.
                                </Field.ErrorMessage>
                              )}
                            </Field>
                          </Marger>

                          <Button modifier="helium" size="big" type="button">
                            Payer 120 €
                          </Button>
                        </form>
                      </Accordeon.Content>
                    </Accordeon.Item>
                  )}

                  <Accordeon.Item>
                    <Accordeon.Header>
                      <HeaderDisplayStyled>
                        {onlyPayPal && (
                          <Text
                            weight="regular"
                            color="font1"
                            size="tiny"
                            style={{ marginLeft: pxToRem(10) }}
                          >
                            Payer avec Paypal
                          </Text>
                        )}

                        {!onlyPayPal && (
                          <RadioButton
                            text={
                              <Text weight="regular" color="font1" size="tiny">
                                Payer avec Paypal
                              </Text>
                            }
                            checked={selectedItem === 1}
                            style={{ margin: 0 }}
                          />
                        )}

                        <PayPalIcon />
                      </HeaderDisplayStyled>
                    </Accordeon.Header>

                    <Accordeon.Content>
                      <Marger bottom="3">
                        <Paragraph modifier="tertiary" margin={false}>
                          Après avoir validé votre demande, vous serez
                          automatiquement redirigé vers la page de connexion
                          Paypal
                        </Paragraph>
                      </Marger>

                      <Button modifier="helium" size="big" type="button">
                        Payer 120 €
                      </Button>
                    </Accordeon.Content>
                  </Accordeon.Item>

                  {!onlyPayPal && (
                    <Accordeon.Item>
                      <Accordeon.Header>
                        <RadioButton
                          text={
                            <Text weight="regular" color="font1">
                              Autre moyen de paiement
                            </Text>
                          }
                          checked={selectedItem === 2}
                          style={{ margin: 0 }}
                        />
                      </Accordeon.Header>

                      <Accordeon.Content>
                        <Marger bottom="3">
                          <Paragraph modifier="tertiary" margin={false}>
                            Vous serez automatiquement redirigé vers la page de
                            notre prestataire de paiement.
                          </Paragraph>
                        </Marger>

                        <Text weight="regular" color="font1">
                          Sélectionnez un prestataire de paiement
                        </Text>

                        <div>
                          <PaymentButton tag="a" href="#">
                            <MaestroIcon />
                          </PaymentButton>

                          <PaymentButton tag="a" href="#">
                            <BancontactIcon />
                          </PaymentButton>

                          <PaymentButton tag="a" href="#">
                            <IdealIcon />
                          </PaymentButton>

                          <PaymentButton
                            tag="a"
                            href="#"
                            style={{ padding: pxToRem(10) }}
                          >
                            <SofortIcon />
                          </PaymentButton>

                          <PaymentButton
                            tag="a"
                            href="#"
                            style={{ padding: pxToRem(10) }}
                          >
                            <GiropayIcon />
                          </PaymentButton>
                        </div>
                      </Accordeon.Content>
                    </Accordeon.Item>
                  )}
                </Accordeon>
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol
            col-l="4"
            offset-l="2"
            col-xl="3"
            offset-xl="3"
            className="k-u-hidden@m-down"
          >
            <Cart />
          </GridCol>
        </Grid>
      </Container>
    )
  }
}

export default PaymentChoices
