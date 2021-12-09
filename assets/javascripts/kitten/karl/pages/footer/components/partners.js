import React from 'react'
import { Text } from 'kitten'

export const Partners = ({ className, ...props }) => (  
  <div className="k-Footer__partners" {...props}>
    <div>
      <img
        alt=""
        width="60"
        height="60"
        style={{ backgroundImage: 'red', borderRadius: '100%' }}
      />
      <img
        alt=""
        width="60"
        height="60"
        style={{ backgroundImage: 'red', borderRadius: '100%' }}
      />
      <Text cssColor="var(--color-grey-400)" size="tiny">
        KissKissBankBank est une plateforme de financement participatif régulée par les autorités françaises. Immatriculation : 14007218
      </Text>
    
    </div>

    <div>
      <img
        alt=""
        width="120"
        height="50"
      />
      <Text cssColor="var(--color-grey-400)" size="tiny">
        KissKissBankBank & Co est agent de l’institution financière MANGOPAY SA. Paiements sécurisés avec MANGOPAY Payment Services.
      </Text>
   </div>
  </div>
)
