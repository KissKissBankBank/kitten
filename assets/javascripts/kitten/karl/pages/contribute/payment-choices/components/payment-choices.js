import React, { Component, Fragment } from 'react'
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
import { RadioButton } from '../../../../..//components/form/radio-button'

class PaymentChoices extends Component {
  render() {
    const { onlyPayPal } = this.props

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

            {!onlyPayPal && (
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
            )}

            <Marger top={onlyPayPal ? 4 : 1.5}>
              {onlyPayPal && (
                <Button modifier="azote" size="big">
                  Payer 120 € avec{' '}
                  <PayPalIcon style={{ position: 'relative', top: '2px' }} />
                </Button>
              )}

              {!onlyPayPal && (
                <Accordeon>
                  <Accordeon.Item>
                    <Accordeon.Header>
                      <RadioButton
                        text="Payer par carte bancaire"
                        style={{ margin: 0 }}
                      />
                      <VisaIcon />
                    </Accordeon.Header>

                    <Accordeon.Content />
                  </Accordeon.Item>

                  <Accordeon.Item>
                    <Accordeon.Header>
                      <RadioButton
                        text="Payer avec Paypal"
                        style={{ margin: 0 }}
                      />
                    </Accordeon.Header>

                    <Accordeon.Content />
                  </Accordeon.Item>

                  <Accordeon.Item>
                    <Accordeon.Header>
                      <RadioButton
                        text="Autre moyen de paiement"
                        style={{ margin: 0 }}
                      />
                    </Accordeon.Header>

                    <Accordeon.Content />
                  </Accordeon.Item>
                </Accordeon>
              )}
            </Marger>
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
