import React from 'react'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph/next'
import { Button } from '../../../../components/buttons/button'
import { Timeline } from '../../../../components/lists/timeline'
import COLORS from '../../../../constants/colors-config'

const ButtonComponent = () => (
  <div className="k-u-margin-top-quadruple">
    <Button modifier="helium" size="big">
      Je lance mon projet
    </Button>
  </div>
)

const TimelineSection = ({ paragraphProps }) => (
  <Container>
    <Grid className="k-u-margin-top-quintuple k-u-margin-top-septuple@s-up">
      <GridCol col-l="4" offset-l="1" style={{ alignSelf: 'center' }}>
        <Title
          modifier="secondary"
          margin={false}
          className="PreDeposit__timeline__title"
        >
          Quelles étapes pour lancer ma collecte de crowdfunding ?
        </Title>

        <div className="k-u-hidden@m-down">
          <ButtonComponent />
        </div>
      </GridCol>

      <GridCol col-l="5" offset-l="1" col-s="10" offset-s="1">
        <Timeline itemHeight="thin" color="#19b4fa">
          <Paragraph
            {...paragraphProps}
            modifier="secondary"
            style={{ color: COLORS.font1 }}
          >
            Je fixe le montant que je souhaite collecter et la durée que
            j'estime nécessaire pour l'atteindre (60 jours maximum).
          </Paragraph>
          <Paragraph
            {...paragraphProps}
            modifier="secondary"
            style={{ color: COLORS.font1 }}
          >
            Je complète la page de présentation de mon projet.
          </Paragraph>
          <Paragraph
            {...paragraphProps}
            modifier="secondary"
            style={{ color: COLORS.font1 }}
          >
            Je reçois les conseils d’un coach pour booster ma collecte et mes
            chances de réussite.
          </Paragraph>
          <Paragraph
            {...paragraphProps}
            modifier="secondary"
            style={{ color: COLORS.font1 }}
          >
            Quand je suis prêt·e, je lance ma collecte et mobilise mes
            communautés autour du projet.
          </Paragraph>
        </Timeline>
      </GridCol>

      <GridCol className="k-u-hidden@l-up k-u-align-center">
        <ButtonComponent />
      </GridCol>
    </Grid>
  </Container>
)

export default TimelineSection
