import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Container } from '../../../../../components/grid/container'
import { Marger } from '../../../../../components/layout/marger'
import { withMediaQueries } from '../../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../../constants/screen-config'
import { parseHtml } from '../../../../../helpers/utils/parser'
import { CONTAINER_PADDING } from '../../../../../constants/grid-config'
import { SimpleCarousel } from '../.././../../../components/carousel/simple-carousel'
import { TipSimpleCarousel } from './simple-carousel'
import COLORS from '../../../../../constants/colors-config'

class TipsSection extends Component {
  render() {
    const { viewportIsXSOrLess } = this.props

    return (
      <Container>
        <Marger top={viewportIsXSOrLess ? 5 : 10}>
          <Grid>
            {this.renderImage()}
            {this.renderText()}
          </Grid>
        </Marger>
      </Container>
    )
  }

  renderImage() {
    const imgKeyStyle = [imgBackground(), styles.image]

    return (
      <GridCol offset-l="1" col-s="5" offset-s="0" col-xs="10" offset-xs="1">
        <div style={imgKeyStyle} />
      </GridCol>
    )
  }

  renderText() {
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

    return (
      <GridCol col-l="4" col-s="6" offset-s="1" col-xs="10" offset-xs="1">
        <SimpleCarousel
          paginationColor={COLORS.line2}
          activePaginationColor={COLORS.font1}
          paginationAlign="start"
        >
          {tips.map(item => (
            <TipSimpleCarousel
              key={item.key}
              title={parseHtml(item.title)}
              paragraph={parseHtml(item.paragraph)}
            />
          ))}
        </SimpleCarousel>
      </GridCol>
    )
  }
}

const imgHeight = 416
const imgWidth = 555

const imgBackground = () => ({
  backgroundColor: '#caf4fe',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  paddingBottom: (imgHeight / imgWidth) * 100 + '%',
})

const styles = {
  image: {
    [`@media (min-width: ${ScreenConfig.S.min}px) and
      (max-width: ${ScreenConfig.M.max}px)`]: {
      marginLeft: -`${CONTAINER_PADDING}`,
      width: `calc(100% + ${CONTAINER_PADDING}px)`,
    },
  },
  links: {
    color: '#19b4fa',
    textDecoration: 'none',
  },
}

export default withMediaQueries({
  viewportIsXSOrLess: true,
})(Radium(TipsSection))
