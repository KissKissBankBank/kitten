import React, { Component } from 'react'
import { Grid, GridCol } from '../../../../../components/structure/grid'
import { Marger } from '../../../../../components/structure/marger'
import { Button } from '../../../../../components/buttons/button'
import { Field } from '../../../../../components/form/field'

class Form extends Component {
  render() {
    const { error } = this.props

    return (
      <Grid>
        <GridCol col-s="6">
          <Marger bottom="4">
            <Field>
              <Field.Label labelProps={{ htmlFor: 'gender-madame' }}>
                Civilité
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
                error={error}
              />

              {error && (
                <Field.ErrorMessage>
                  Veuillez indiquer la civilité du destinataire.
                </Field.ErrorMessage>
              )}
            </Field>
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'firstname' }}>
              Prénom
            </Field.Label>

            <Field.Input
              id="firstname"
              name="firstname"
              placeholder="Le prénom du destinaire"
              error={error}
            />

            {error && (
              <Field.ErrorMessage>
                Veuillez indiquer le prénom du destinataire.
              </Field.ErrorMessage>
            )}
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'lastname' }}>Nom</Field.Label>

            <Field.Input
              id="lastname"
              name="lastname"
              placeholder="Le nom du destinaire"
              error={error}
            />

            {error && (
              <Field.ErrorMessage>
                Veuillez indiquer le nom du destinataire.
              </Field.ErrorMessage>
            )}
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'company' }}>
              Entreprise (optionnel)
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
              Numéro de téléphone
            </Field.Label>

            <Field.Input
              id="phone"
              name="phone"
              placeholder="06 XX XX XX XX"
              error={error}
            />

            {error && (
              <Field.ErrorMessage>
                Veuillez indiquer le numéro de téléphone.
              </Field.ErrorMessage>
            )}
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'address1' }}>
              Adresse
            </Field.Label>

            <Field.Input
              id="address1"
              name="address1"
              placeholder="Adresse du destinataire"
              error={error}
            />

            {error && (
              <Field.ErrorMessage>
                Veuillez indiquer l'adresse.
              </Field.ErrorMessage>
            )}
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'address2' }}>
              Complément d'adresse (optionnel)
            </Field.Label>

            <Field.Input
              id="address2"
              name="address2"
              placeholder="N° de bâtiment, étage…"
            />
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'postal-code' }}>
              Code postal
            </Field.Label>

            <Field.Input
              id="postal-code"
              name="postalCode"
              placeholder="Code postal"
              digits={6}
              error={error}
            />

            {error && (
              <Field.ErrorMessage>
                Veuillez indiquer le code postal.
              </Field.ErrorMessage>
            )}
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'city' }}>Ville</Field.Label>

            <Field.Input
              id="city"
              name="city"
              placeholder="Ville du destinataire"
              error={error}
            />

            {error && (
              <Field.ErrorMessage>
                Veuillez indiquer la ville du destinataire.
              </Field.ErrorMessage>
            )}
          </Marger>

          <Marger top="4" bottom="4">
            <Field.Label labelProps={{ htmlFor: 'country' }}>Pays</Field.Label>

            <Field.Select
              id="country"
              name="country"
              placeholder="Pays du destinataire"
              options={[
                { value: 'fr', label: 'France' },
                { value: 'gr', label: 'Greece' },
              ]}
              error={error}
            />

            {error && (
              <Field.ErrorMessage>
                Veuillez sélectionner un pays.
              </Field.ErrorMessage>
            )}
          </Marger>

          <Marger top="5">
            <Button modifier="helium" size="big">
              Valider
            </Button>
          </Marger>
        </GridCol>
      </Grid>
    )
  }
}

export default Form
