import React, { Component } from 'react'
import { SimpleTemplate } from './simple-templates'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { BulletList } from '../../../components/lists/bullet-list'
import { Marger } from '../../../components/layout/marger'
import { withMediaQueries } from '../../../hoc/media-queries'

class SmbsDevelopmentBase extends Component {
  render() {
    const { viewportIsXSOrLess } = this.props

    const listSize = viewportIsXSOrLess ? { big: true } : { huge: true }
    const sectionMargin = viewportIsXSOrLess ? 4 : 5

    const header = {
      background: 'https://placehold.it/350x195/caf4fe/caf4fe',
      title: 'Vous souhaitez financer le développement de votre TPE/PME ?',
    }

    const section2List = [
      {
        key: 1,
        item: 'Toutes sociétés commerciales de plus de 2ans',
      },
      {
        key: 2,
        item: 'Chiffre d’affaires supérieur à 200 000euros',
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
        item: 'Une présentation de l’activité',
      },
      {
        key: 2,
        item: 'Un descriptif du projet et du besoin chiffré',
      },
      {
        key: 3,
        item: 'Les 2 dernières liasses fiscales de la société avec les annexes',
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
            Que vous ayez des investissements matériels à financer : machine,
            véhicule, équipement informatique, etc., ou d’autres projets à
            réaliser : recrutement d’un collaborateur, frais d’études et
            d’honoraires, achat de stocks, frais de marketing et communication,
            travaux d’aménagement, site web et logiciels, etc., LENDOPOLIS peut
            vous accompagner.
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

        <Marger bottom={sectionMargin - 1}>
          <Marger bottom="1">
            <Title tag="h2" modifier="quaternary" margin={false}>
              Les documents demandés
            </Title>
          </Marger>

          <Marger bottom="1">
            <BulletList {...listSize} items={section3List} />
          </Marger>

          <Paragraph modifier="primary" margin={false}>
            Nous vous invitons également à joindre tout autre document utile à
            l’appréciation de votre dossier (plaquette commerciale,
            prévisionnel, devis travaux, etc.).
          </Paragraph>
        </Marger>
      </SimpleTemplate>
    )
  }
}

export const SmbsDevelopment = withMediaQueries({
  viewportIsXSOrLess: true,
})(SmbsDevelopmentBase)
