import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import ShippingAddress from './components/shipping_address'
import { Marger } from '../../../../components/layout/marger'

storiesOf('Pages/Contribute', module)
  .addDecorator(withKnobs)
  .add('ShippingAddress', () => {
    return (
      <Marger top="10" bottom="10">
        <ShippingAddress
          title="Vos informations <br/>de livraison"
          gender={{
            label: 'Civilité',
          }}
          firstname={{
            label: 'Prénom',
          }}
          lastname={{
            label: 'Nom',
          }}
          company={{
            label: 'Entreprise (optionnel)',
          }}
          phone={{
            label: 'Numéro de téléphone (optionnel)',
          }}
          address1={{
            label: 'Adresse',
          }}
          address2={{
            label: "Complément d'adresse (optionnel)",
          }}
          postalCode={{
            label: 'Code postal',
          }}
          city={{
            label: 'Ville',
          }}
          country={{
            label: 'Pays',
          }}
          button={'Valider mon total de 20 €'}
        />
      </Marger>
    )
  })
