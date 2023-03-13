import React from 'react'
import { Text } from 'kitten'

export const Partners = props => {
  return (
    <div className="k-Footer__partners" {...props}>
      <div className="k-Footer__partners--block">
        <img alt="" width="60" height="60" style={{ borderRadius: '100%' }} />
        <img alt="" width="60" height="60" style={{ borderRadius: '100%' }} />
        <Text
          cssColor="var(--color-grey-400)"
          className="k-Footer__partners--text"
        >
          KissKissBankBank est une plateforme de financement participatif
          régulée par les autorités françaises. 
          Numéro d'immatriculation en tant qu'Intermédiaire en Financement Participatif auprès de l'ORIAS: 14007218.
          Adresse du siège Social : 34, Rue de Paradis 75010 PARIS.
          Adresse mail de contact: contact@kisskissbankbank.com
        </Text>
      </div>

      <div className="k-Footer__partners--block">
        <img alt="" width="140" height="50" />
        <Text
          cssColor="var(--color-grey-400)"
          className="k-Footer__partners--text"
        >
          KissKissBankBank & Co est agent de l’institution financière MANGOPAY
          SA. Paiements sécurisés avec MANGOPAY Payment Services.
        </Text>
      </div>
    </div>
  )
}
