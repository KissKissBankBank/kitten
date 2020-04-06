import React, { Component } from 'react'
import { SimpleTemplate } from './simple-template'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../../components/typography/paragraph'
import { BulletList } from '../../../../components/lists/bullet-list'
import { Marger } from '../../../../components/layout/marger'
import { withMediaQueries } from '../../../../../hoc/media-queries'

class BusinessTakeoverBase extends Component {
  render() {
    const { viewportIsXSOrLess } = this.props

    const listSize = viewportIsXSOrLess ? { big: true } : { huge: true }
    const sectionMargin = viewportIsXSOrLess ? 4 : 5

    const header = [
      {
        background: 'https://placehold.it/350x195/caf4fe/caf4fe',
        title:
          'Vous souhaitez financer une reprise de titres ou de fonds de \
            commerce ?',
      },
    ]

    const section2List = [
      {
        key: 1,
        item:
          'Ancienneté de la société cible (société à reprendre) : 4ans \
        d’activité minimum',
      },
      {
        key: 2,
        item: 'Chiffre d’affaires de la cible supérieur à 200 000euros',
      },
      {
        key: 3,
        item: 'Société rentable (EBE positif)',
      },
      {
        key: 4,
        item: 'Capitaux propres positifs',
      },
      {
        key: 5,
        item: 'Pas de procédure collective en cours',
      },
    ]

    const section3List = [
      {
        key: 1,
        item: 'Crédit amortissable mensuellement',
      },
      {
        key: 2,
        item: 'Montant&nbsp;: à partir de 10 000euros',
      },
      {
        key: 3,
        item: 'Durée&nbsp;: de 24 à 60 mois',
      },
      {
        key: 4,
        item: 'Taux d’intérêt fixe&nbsp;: entre 4% et 10,5%',
      },
      {
        key: 5,
        item: 'LENDOPOLIS intervient en complément d’un crédit bancaire',
      },
    ]

    const section4List = [
      {
        key: 1,
        item: 'Une présentation de l’activité',
      },
      {
        key: 2,
        item:
          'Un descriptif du projet détaillant le montage juridique et \
        financier de l’opération',
      },
      {
        key: 3,
        item: 'Un prévisionnel',
      },
      {
        key: 4,
        item:
          'Les 2 dernières liasses fiscales de la société cible avec les \
        annexes',
      },
      {
        key: 5,
        item:
          'La promesse de vente du fonds de commerce, ou de cession de parts',
      },
      {
        key: 6,
        item: 'Le CV du repreneur',
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
            LENDOPOLIS complète vos apports pour financer les frais
            d’honoraires, les frais d’installation, le BFR initial, les travaux
            d’aménagement, les premiers investissements liés à votre projet de
            reprise, etc.
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
            l’appréciation de votre dossier (plaquette, devis travaux, photos,
            etc.).
          </Paragraph>
        </Marger>
      </SimpleTemplate>
    )
  }
}

export const BusinessTakeover = withMediaQueries({
  viewportIsXSOrLess: true,
})(BusinessTakeoverBase)
