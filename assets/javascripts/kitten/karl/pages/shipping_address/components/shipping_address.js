import React, { Component } from 'react'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { parseHtml } from '../../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../components/buttons/button'
import { Field } from '../../../../components/form/field'
import { pxToRem } from '../../../../helpers/utils/typography'

class ShippingAddress extends Component {
  render() {
    const {
      title,
      gender,
      firstname,
      lastname,
      company,
      phone,
      address1,
      address2,
      postalCode,
      city,
      country,
      button,
    } = this.props

    return (
      <Container>
        <Grid>
          <GridCol col-l="6" offset-l="1">
            <Marger bottom="2">
              <Title modifier="secondary" margin={false}>
                {parseHtml(title)}
              </Title>
            </Marger>

            <Marger top="2" bottom="4">
              <HorizontalStroke size="big" />
            </Marger>

            <Grid>
              <GridCol col-s="6">
                <Marger bottom="4">
                  <Field>
                    <Field.Label labelProps={{ htmlFor: 'gender-madame' }}>
                      {gender.label}
                    </Field.Label>

                    <Field.RadioButtonSet
                      name="gender"
                      items={[
                        {
                          text: 'Madame',
                          id: 'gender-madame',
                          defaultChecked: true,
                        },
                        {
                          text: 'Monsieur',
                          id: 'gender-monsieur',
                        },
                      ]}
                    />

                    {/* <Field.Error>
                      Veuillez indiquer la civilité du destinataire.
                    </Field.Error> */}
                  </Field>
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'firstname' }}>
                    {firstname.label}
                  </Field.Label>

                  <Field.Input
                    id="firstname"
                    name="firstname"
                    placeholder="Le prénom du destinaire"
                  />

                  {/* <Field.Error>
                    Veuillez indiquer le prénom du destinataire.
                  </Field.Error> */}
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'lastname' }}>
                    {lastname.label}
                  </Field.Label>

                  <Field.Input
                    id="lastname"
                    name="lastname"
                    placeholder="Le nom du destinaire"
                  />

                  {/* <Field.Error>
                    Veuillez indiquer le nom du destinataire.
                  </Field.Error> */}
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'company' }}>
                    {company.label}
                  </Field.Label>

                  <Field.Input
                    id="company"
                    name="company"
                    placeholder="Le nom de l'entreprise du destinataire"
                  />
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label
                    labelProps={{ htmlFor: 'phone' }}
                    tooltipId="phone-tooltip"
                    tooltip="Votre numéro permettra au porteur de projet de vous contacter en cas de problème de livraison."
                  >
                    {phone.label}
                  </Field.Label>

                  <Field.Input
                    id="phone"
                    name="phone"
                    placeholder="06 XX XX XX XX"
                  />
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'address1' }}>
                    {address1.label}
                  </Field.Label>

                  <Field.Input
                    id="address1"
                    name="address1"
                    placeholder="Adresse du destinataire"
                  />
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'address2' }}>
                    {address2.label}
                  </Field.Label>

                  <Field.Input
                    id="address2"
                    name="address2"
                    placeholder="N° de bâtiment, étage…"
                  />
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'postal-code' }}>
                    {postalCode.label}
                  </Field.Label>

                  <Field.Input
                    id="postal-code"
                    name="postalCode"
                    placeholder="Code postal"
                    digits={5}
                  />
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'city' }}>
                    {city.label}
                  </Field.Label>

                  <Field.Input
                    id="city"
                    name="city"
                    placeholder="Ville du destinataire"
                  />
                </Marger>

                <Marger top="4" bottom="4">
                  <Field.Label labelProps={{ htmlFor: 'country' }}>
                    {country.label}
                  </Field.Label>

                  <Field.Select
                    id="country"
                    name="country"
                    placeholder="Pays du destinataire"
                    options={[
                      { value: 'fr', label: 'France' },
                      { value: 'gr', label: 'Greece' },
                    ]}
                  />
                </Marger>

                <Marger top="5">
                  <Button modifier="helium" size="big">
                    {button}
                  </Button>
                </Marger>
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol col="3" offset="2" className="k-u-hidden@m-down">
            <div
              style={{
                backgroundColor: '#222',
                marginRight: -40,
                padding: `${pxToRem(80)} ${pxToRem(40)} ${pxToRem(60)}`,
                color: '#FFF',
              }}
            >
              <Marger bottom="2">
                <Title modifier="senary" margin={false}>
                  Votre sélection
                </Title>
              </Marger>

              <Marger top="2" bottom="3">
                <HorizontalStroke style={{ background: '#FFF' }} />
              </Marger>

              <Marger
                top="2"
                bottom="2"
                style={{
                  padding: `${pxToRem(30)} ${pxToRem(20)}`,
                  background: '#FFF',
                  color: '#222',
                }}
              >
                <Marger bottom="2">
                  <Title
                    modifier="senary"
                    margin={false}
                    className="k-u-style-italic"
                  >
                    Pour 60 €
                  </Title>
                </Marger>

                <Marger top="2" bottom="2">
                  <Text
                    tag="p"
                    size="micro"
                    weight="light"
                    color="font1"
                    lineHeight="normal"
                    style={{ margin: 0 }}
                  >
                    Les contreparties précédentes + 1 place pour le concert
                    Démos à la Philharmonie en juin + 1 laissez-passer Musée de
                    la musique
                  </Text>
                </Marger>

                <Marger top="1">
                  <Text
                    tag="p"
                    size="micro"
                    weight="light"
                    color="font1"
                    lineHeight="normal"
                    style={{ margin: 0 }}
                  >
                    <Text tag="span" weight="regular">
                      Livraison :{' '}
                    </Text>
                    Janvier 2018
                  </Text>
                </Marger>

                <Marger top="1">
                  <Text
                    tag="p"
                    size="micro"
                    weight="light"
                    color="font1"
                    lineHeight="normal"
                    style={{ margin: 0 }}
                  >
                    <Text tag="span" weight="regular">
                      Option :{' '}
                    </Text>
                    Taille XL
                  </Text>
                </Marger>
              </Marger>

              <Marger
                top="2"
                bottom="2"
                style={{
                  padding: `${pxToRem(30)} ${pxToRem(20)}`,
                  background: '#FFF',
                  color: '#222',
                }}
              >
                <Marger bottom="2">
                  <Title
                    modifier="senary"
                    margin={false}
                    className="k-u-style-italic"
                  >
                    Pour 60 €
                  </Title>
                </Marger>

                <Marger top="2" bottom="2">
                  <Text
                    tag="p"
                    size="micro"
                    weight="light"
                    color="font1"
                    lineHeight="normal"
                    style={{ margin: 0 }}
                  >
                    Les contreparties précédentes + 1 place pour le concert
                    Démos à la Philharmonie en juin + 1 laissez-passer Musée de
                    la musique
                  </Text>
                </Marger>

                <Marger top="2">
                  <Text
                    tag="p"
                    size="micro"
                    weight="light"
                    color="font1"
                    lineHeight="normal"
                    style={{ margin: 0 }}
                  >
                    <Text tag="span" weight="regular">
                      Livraison :{' '}
                    </Text>
                    Janvier 2018
                  </Text>
                </Marger>
              </Marger>
            </div>
          </GridCol>
        </Grid>
      </Container>
    )
  }
}

export default ShippingAddress
