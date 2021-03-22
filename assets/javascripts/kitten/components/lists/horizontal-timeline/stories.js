import React from 'react'
import { HorizontalTimeline } from './index'
import { ScrollableContainer, Container, Text, Grid, GridCol } from '../../..'

export default {
  component: HorizontalTimeline,
  title: 'List/HorizontalTimeline',
  parameters: {
    component: HorizontalTimeline,
  },
}

export const Default = () => (
  <Container>
    <ScrollableContainer>
      <Grid className="k-u-margin-none">
        <GridCol col="10" offset="1">
          <HorizontalTimeline ellipsisColumns={[1]}>
            <HorizontalTimeline.Block year="2014">
              <Text
                tag="p"
                className="k-u-margin-top-none k-u-margin-bottom-noneHalf"
                weight="regular"
                lineHeight="1.3"
              >
                Création de Lendopolis
              </Text>
              <Text
                tag="p"
                className="k-u-margin-none"
                weight="light"
                size="micro"
                lineHeight="1.3"
              >
                Lendopolis est créé en novembre 2014 avec un agrément IFP
                (Intermédiaire en Financement Participatif) et propose de
                financer des petites entreprises (TPE/PME).
              </Text>
            </HorizontalTimeline.Block>
            <HorizontalTimeline.Block year="2017">
              <Text
                tag="p"
                className="k-u-margin-top-none k-u-margin-bottom-noneHalf"
                weight="regular"
                lineHeight="1.3"
              >
                Lancement des projets énergies renouvelables
              </Text>
              <Text
                tag="p"
                className="k-u-margin-none"
                weight="light"
                size="micro"
                lineHeight="1.3"
              >
                Lendopolis obtient l’agrément CIP (Conseiller en Investissements
                Participatifs) et lance des projets dans les énergies
                renouvelables.
              </Text>
            </HorizontalTimeline.Block>
            <HorizontalTimeline.Block year="2018">
              <Text
                tag="p"
                className="k-u-margin-top-none k-u-margin-bottom-noneHalf"
                weight="regular"
                lineHeight="1.3"
              >
                Lancement des projets immobiliers
              </Text>
              <Text
                tag="p"
                className="k-u-margin-none"
                weight="light"
                size="micro"
                lineHeight="1.3"
              >
                Lendopolis élargit son offre en proposant des projets
                immobiliers.
              </Text>
            </HorizontalTimeline.Block>
            <HorizontalTimeline.Block year="2019">
              <Text
                tag="p"
                className="k-u-margin-top-none k-u-margin-bottom-noneHalf"
                weight="regular"
                lineHeight="1.3"
              >
                Arrêt du TPE / PME
              </Text>
              <Text
                tag="p"
                className="k-u-margin-none"
                weight="light"
                size="micro"
                lineHeight="1.3"
              >
                Lendopolis arrête le secteur TPE/PME pour se concentrer sur les
                projets d’énergies renouvelables et d’immobilier.
              </Text>
            </HorizontalTimeline.Block>
            <HorizontalTimeline.Block year="2020">
              <Text
                tag="p"
                className="k-u-margin-top-none k-u-margin-bottom-noneHalf"
                weight="regular"
                lineHeight="1.3"
              >
                Projets financés par actions
              </Text>
              <Text
                tag="p"
                className="k-u-margin-none"
                weight="light"
                size="micro"
                lineHeight="1.3"
              >
                Lendopolis obtient l’agrément de l’AMF pour proposer des projets
                financés par actions, notamment pour les projets d’énergies
                renouvelables. Lendopolis propose pour la première fois une
                campagne de dons en association avec Synergie Solaire.
              </Text>
            </HorizontalTimeline.Block>
            <HorizontalTimeline.Block year="2021">
              <Text
                tag="p"
                className="k-u-margin-top-none k-u-margin-bottom-noneHalf"
                weight="regular"
                lineHeight="1.3"
              >
                Arrêt de l’immobilier
              </Text>
              <Text
                tag="p"
                className="k-u-margin-none"
                weight="light"
                size="micro"
                lineHeight="1.3"
              >
                Lendopolis met fin aux projets d’immobilier pour se concentrer
                sur les projets d’énergies renouvelables et d’autres secteurs à
                impact positif.
              </Text>
            </HorizontalTimeline.Block>
          </HorizontalTimeline>
        </GridCol>
      </Grid>
    </ScrollableContainer>
  </Container>
)
