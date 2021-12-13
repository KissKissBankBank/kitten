import React from 'react'
import { 
  Text,
  HorizontalStroke,
} from 'kitten'

const ListItem = props => (
  <li>
    <a className="k-Footer__linkList--item" {...props} />
  </li>
)

export const ListItems = props => {
  return (
    <div className="k-Footer__listWrapper" {...props}>
    {/* 1 */}
      <div>
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          Financer un projet
        </Text>
        <HorizontalStroke className="k-Footer__stroke" />
        <ul className="k-Footer__linkList">
          <ListItem>
            Réussir sa collecte
          </ListItem>
          <ListItem>
            Nos fonctionnalités
          </ListItem>
          <ListItem>
            Le financement participatif
          </ListItem>
          <li>
            <ul className="k-Footer__linkList k-Footer__linkSecondList">
              <ListItem>
                Don contre don
              </ListItem>
              <ListItem>
                Précommande
              </ListItem>
              <ListItem>
                Don libre
              </ListItem>
            </ul>
          </li>
          <ListItem>
            Le kit com
          </ListItem>
          <ListItem>
            Le blog
          </ListItem>
          <ListItem>
            Le studio
          </ListItem>
          <ListItem>
            Vos questions fréquentes
          </ListItem>
        </ul>
      </div>

      {/* 2 */}
      <div>
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          Partenariats
        </Text>
        <HorizontalStroke className="k-Footer__stroke"
        />
        <ul className="k-Footer__linkList">
          <ListItem>
            Devenons partenaires
          </ListItem>
          <ListItem>
            Bons plans partenaires
          </ListItem>
          <ListItem>
            Acteurs publics
          </ListItem>
          <ListItem>
            Mentorat de projets
          </ListItem>
          <ListItem>
            Maison de Crowdfunding
          </ListItem>
          <ListItem>
            La Banque Postale
          </ListItem>
        </ul>
      </div>

      {/* 3 */}
      <div>
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          À propos
        </Text>
        <HorizontalStroke className="k-Footer__stroke" />
        <ul className="k-Footer__linkList">
          <ListItem>
            Nos valeurs
          </ListItem>
          <ListItem>
            Nos statistiques
          </ListItem>
          <ListItem>
            Notre présence sur le territoire
          </ListItem>
          <ListItem>
            Nos collectes record
          </ListItem>
          <ListItem>
            L'équipe
          </ListItem>
          <ListItem>
            Recrutements 
          </ListItem>
          <ListItem>
            Presse
          </ListItem>
        </ul>
      </div>

      {/* 4 */}
      <div>
        <Text
          size="big"
          weight="bold"
          cssColor="var(--color-grey-000)"
        >
          Nos engagements
        </Text>
        <HorizontalStroke className="k-Footer__stroke" />
        <ul className="k-Footer__linkList">
          <ListItem>
            Santé et Handicap
          </ListItem>
          <ListItem>
            Autoproduction culturelle
          </ListItem>
          <ListItem>
            Bio
          </ListItem>
        </ul>
      </div>
    </div>
  )
}
