import React, { Component } from 'react'
import { SimpleTemplate } from './simple-templates'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { BulletList } from '../../../components/lists/bullet-list'
import { Marger } from '../../../components/layout/marger'
import { withMediaQueries } from '../../../hoc/media-queries'

class FranchiseCreationBase extends Component {
  render() {
    const { viewportIsXSOrLess } = this.props

    const listSize = viewportIsXSOrLess ? { big: true } : { huge: true }
    const sectionMargin = viewportIsXSOrLess ? 4 : 5

    const header = {
      background: 'https://placehold.it/350x195/caf4fe/caf4fe',
      title:
        'Vous souhaitez financer une création en franchise ou \
            commerce associé ?',
    }

    const section2List = [
      {
        key: 1,
        item:
          'Tête de réseau référencée par nos services (n’hésitez pas à vous \
          renseigner à l’adresse <a href="mailto:franchise@lendopolis.com">\
          franchise@lendopolis.com</a>),',
      },
      {
        key: 2,
        item:
          'Analyse du projet de création sous franchise, licence de marque \
              ou coopérative',
      },
      {
        key: 3,
        item: 'LENDOPOLIS intervient en complément d’un crédit bancaire',
      },
    ]

    const section3List = [
      {
        key: 1,
        item: 'Crédit amortissable mensuellement',
      },
      {
        key: 2,
        item: 'Montant : à partir de 10 000 euros',
      },
      {
        key: 3,
        item: 'Durée : de 24 à 60mois',
      },
      {
        key: 4,
        item: 'Taux d’intérêt fixe: entre 4% et 10,5%',
      },
    ]

    const section4List = [
      {
        key: 1,
        item: 'Un descriptif du projet et le détail du plan de financement',
      },
      {
        key: 2,
        item: 'Un prévisionnel',
      },
      {
        key: 3,
        item: 'Le DIP avec les annexes',
      },
      {
        key: 4,
        item: 'Le contrat de franchise/partenariat le cas échéant',
      },
      {
        key: 5,
        item: 'Le CV du porteur de projet',
      },
    ]

    return (
      <SimpleTemplate header={header}>
        <Marger bottom={sectionMargin}>
          <Marger bottom="1">
            <Title tag="h2" modifier="quaternary" margin={false}>
              Les projets éligibles
            </Title>
          </Marger>

          <Paragraph modifier="primary" margin={false}>
            LENDOPOLIS complète vos apports personnels pour financer les
            investissements matériels liés à votre installation : équipement,
            système de caisse et logiciels, véhicules, etc., ou d’autres besoins
            incorporels : recrutement de vos premiers collaborateurs, frais de
            formation et d’honoraires, dépôt de garantie, achat du stock
            initial, frais de marketing et communication, travaux d’aménagement,
            site web marchand à créer, etc.
          </Paragraph>
        </Marger>

        <Marger bottom={sectionMargin}>
          <Marger bottom="1">
            <Title tag="h2" modifier="quaternary" margin={false}>
              Les critères d’éligibilité
            </Title>
          </Marger>

          <BulletList {...listSize} items={section2List} />
        </Marger>

        <Marger bottom={sectionMargin}>
          <Marger bottom="1">
            <Title tag="h2" modifier="quaternary" margin={false}>
              Nos conditions
            </Title>
          </Marger>

          <BulletList {...listSize} items={section3List} />
        </Marger>

        <Marger bottom={sectionMargin - 1}>
          <Marger bottom="1">
            <Title tag="h2" modifier="quaternary" margin={false}>
              Les documents demandés
            </Title>
          </Marger>

          <Marger bottom="1">
            <BulletList {...listSize} items={section4List} />
          </Marger>

          <Paragraph modifier="primary" margin={false}>
            Nous vous invitons également à joindre tout autre document utile à
            l’appréciation de votre dossier (plaquette, photos, bail commercial,
            etc.).
          </Paragraph>
        </Marger>
      </SimpleTemplate>
    )
  }
}

export const FranchiseCreation = withMediaQueries({
  viewportIsXSOrLess: true,
})(FranchiseCreationBase)
