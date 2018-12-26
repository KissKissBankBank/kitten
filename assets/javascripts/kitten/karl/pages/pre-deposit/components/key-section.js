import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../components/typography/title'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../../components/layout/horizontal-stroke'
import { BulletList as BulletlistBase } from '../../../../components/lists/bullet-list'
import { Button } from '../../../../components/buttons/button'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { parseHtml } from '../../../../helpers/utils/parser'

const BulletList = Radium(BulletlistBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)
const Title = Radium(TitleBase)

class KeySection extends Component {
  render() {
    return (
      <StyleRoot>
        <Marger bottom="4">{this.renderTitle()}</Marger>
        <Marger top="4">{this.renderBulletList()}</Marger>
      </StyleRoot>
    )
  }

  renderTitle() {
    const { titleKeyImg } = this.props

    return (
      <Grid>
        <GridCol col-l="6" offset="1" col="10">
          <Marger bottom="2">
            <Title modifier="secondary" margin={false} style={styles.textAlign}>
              La clé ? Un accompagnement sur mesure
            </Title>
          </Marger>

          <Marger top="2">
            <HorizontalStroke size="huge" style={styles.HorizontalStroke} />
          </Marger>
        </GridCol>
      </Grid>
    )
  }

  renderImage() {
    const imgKeyStyle = [imgBackground('FFF')]

    return (
      <GridCol col-l="5" offset="1" col="10">
        <img style={imgKeyStyle} />
      </GridCol>
    )
  }

  renderBulletList() {
    const { viewportIsMOrLess } = this.props

    return (
      <Grid>
        {this.renderImage()}
        <GridCol col-l="4" offset="1" col="10">
          <Marger top={viewportIsMOrLess ? 4 : 3}>
            <BulletList
              huge
              style={styles.bulletList}
              items={[
                {
                  key: '1',
                  item:
                    "Un coach pour vous conseiller sur la mise en forme de votre page projet, votre stratégie de communication durant la collecte et l'envoi de vos contreparties.",
                },
                {
                  key: '2',
                  item:
                    'Une équipe d’experts pour chaque secteur d’activité, proche de vos besoins et vos problématiques.',
                },
                {
                  key: '3',
                  item:
                    'Des articles et des vidéos tutos pour devenir un pro du financement participatif !',
                },
              ]}
            />
          </Marger>

          {!viewportIsMOrLess && <Marger top="4">{this.renderButton()}</Marger>}
        </GridCol>
      </Grid>
    )
  }

  renderButton() {
    return (
      <Button modifier="helium" size="big">
        Lancez-vous
      </Button>
    )
  }
}

const imgBackground = image => ({
  backgroundColor: '#CAF4FE',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  paddingBottom: (555 / 416) * 100 + '%',
})

const styles = {
  textAlign: {
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      textAlign: 'center',
    },
  },

  HorizontalStroke: {
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      margin: 'auto',
    },
  },

  bulletList: {
    lineHeight: 32,
    color: COLORS.font1,
  },
}

export default KeySection
