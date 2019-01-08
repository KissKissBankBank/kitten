import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../components/typography/title'
import { Paragraph as ParagraphBase } from '../../../../components/typography/paragraph'
import { Button } from '../../../../components/buttons/button'
import { Timeline } from '../../../../components/lists/timeline'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'

const Title = Radium(TitleBase)
const Paragraph = Radium(ParagraphBase)

class TimelineSection extends Component {
  render() {
    const { viewportIsXSOrLess } = this.props

    return (
      <Container>
        <Marger top={viewportIsXSOrLess ? 8 : 10}>
          <Grid>
            {this.renderTitleAndButton()}
            {this.renderTimeline()}
          </Grid>
        </Marger>
      </Container>
    )
  }

  renderTitleAndButton() {
    const { viewportIsMOrLess } = this.props

    return (
      <GridCol col-l="4" offset-l="1">
        <Marger bottom="4">
          <Title modifier="secondary" margin={false} style={styles.title}>
            Quelles étapes pour lancer ma collecte de crowdfunding ?
          </Title>

          {!viewportIsMOrLess && (
            <Marger top="4">
              <Button modifier="helium" size="big">
                Je lance mon projet
              </Button>
            </Marger>
          )}
        </Marger>
      </GridCol>
    )
  }

  renderTimeline() {
    const { paragraphProps } = this.props

    return (
      <GridCol col-l="5" offset-l="1" col-s="10" offset-s="1">
        <Timeline itemHeight="thin" color="#19B4FA">
          <Paragraph
            {...paragraphProps}
            modifier="tertiary"
            style={{ color: COLORS.font1 }}
          >
            Je fixe le montant que je souhaite collecter et la durée que
            j'estime nécessaire pour l'atteindre (60 jours maximum).
          </Paragraph>
          <Paragraph
            {...paragraphProps}
            modifier="tertiary"
            style={{ color: COLORS.font1 }}
          >
            Je complète la page de présentation de mon projet.
          </Paragraph>
          <Paragraph
            {...paragraphProps}
            modifier="tertiary"
            style={{ color: COLORS.font1 }}
          >
            Je reçois les conseils d’un coach pour booster ma collecte et mes
            chances de réussite
          </Paragraph>
          <Paragraph
            {...paragraphProps}
            modifier="tertiary"
            style={{ color: COLORS.font1 }}
          >
            Quand je suis prêt·e, je lance ma collecte et mobilise mes
            communautés autour du projet.
          </Paragraph>
        </Timeline>
      </GridCol>
    )
  }
}

const styles = {
  title: {
    color: COLORS.font1,
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      textAlign: 'center',
    },
  },
}

export default withMediaQueries({
  viewportIsMOrLess: true,
  viewportIsXSOrLess: true,
})(Radium(TimelineSection))
