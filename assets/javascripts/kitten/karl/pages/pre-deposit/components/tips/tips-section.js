import React from 'react'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Container } from '../../../../../components/grid/container'
import { parseHtml } from '../../../../../helpers/utils/parser'
import { SimpleCarousel } from '../.././../../../components/carousel/simple-carousel'
import { Tip } from './tip'
import COLORS from '../../../../../constants/colors-config'

const tips = [
  {
    key: 1,
    title: 'Astuce n°1 <br /> Choisissez un objectif minimum',
    paragraph:
      "Vous récupérez la somme collectée si vous atteignez votre objectif dans le temps imparti. Dans le cas contraire, vos contributeurs sont remboursés. Augmentez vos chances de réussite en définissant l'objectif minimum dont vous avez besoin pour réaliser votre projet.",
  },
  {
    key: 2,
    title: 'Astuce n°2 <br /> Dépassez les 100 %',
    paragraph:
      'Votre objectif est atteint et il vous reste du temps ? La campagne n’est pas terminée : vous pouvez continuer à collecter !',
  },
  {
    key: 3,
    title: 'Astuce n°3 <br /> Intégrez notre commission à votre objectif',
    paragraph:
      'La commission est de 5 % + 3 % TTC (pour la plateforme et la gestion des flux financiers). Elle n’est prélevée qu’en cas de réussite de la collecte.',
  },
  {
    key: 4,
    title: 'Plus d’astuces ?',
    paragraph:
      'Découvrez tous nos conseils sur notre <a href="https://blog.kisskissbankbank.com/reussir-collecte/" style="color:#19B4FA; text-decoration:none">blog</a> \
        et dans notre chaîne YouTube \
        <a href="https://www.youtube.com/playlist?list=PLBcOcP0O0TuAkYi3SRdsHA8HcaFHVGUjQ" style="color:#19B4FA; text-decoration:none">La KissKiss School</a>\
      .',
  },
]

const TipsSection = () => (
  <Container className="PreDeposit__tips k-u-margin-top-quintuple k-u-margin-top-decuple@l-up">
    <Grid>
      <GridCol offset-l="1" col-s="5" offset-s="0" col-xs="10" offset-xs="1">
        <div className="PreDeposit__tips__image" />
      </GridCol>

      <GridCol col-l="4" col-s="6" offset-s="1" col-xs="10" offset-xs="1">
        <SimpleCarousel
          paginationColor={COLORS.line2}
          activePaginationColor={COLORS.font1}
          paginationAlign="start"
        >
          {tips.map(item => (
            <Tip
              key={item.key}
              title={parseHtml(item.title)}
              paragraph={parseHtml(item.paragraph)}
            />
          ))}
        </SimpleCarousel>
      </GridCol>
    </Grid>
  </Container>
)

export default TipsSection
