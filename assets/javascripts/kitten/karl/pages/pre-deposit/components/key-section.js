import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
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
    const { viewportIsXSOrLess } = this.props

    return (
      <Container>
        <Marger bottom={viewportIsXSOrLess ? 3 : 4}>
          {this.renderTitle()}
        </Marger>
        <Marger top={viewportIsXSOrLess ? 3 : 4}>
          {this.renderBulletList()}
        </Marger>
      </Container>
    )
  }

  renderTitle() {
    const { titleKeyImg, viewportIsXSOrLess } = this.props

    return (
      <Grid>
        <GridCol col-l="6" offset="1" col="10">
          <Marger bottom="2">
            <Title modifier="secondary" margin={false} style={styles.text}>
              La clé ? Un accompagnement sur mesure pour votre financement
            </Title>
          </Marger>

          <Marger top="2">
            <HorizontalStroke
              size={viewportIsXSOrLess ? 'default' : 'huge'}
              style={styles.horizontalStroke}
            />
          </Marger>
        </GridCol>
      </Grid>
    )
  }

  renderImage() {
    const imgKeyStyle = [imgBackground('FFF')]

    return (
      <GridCol col-m="5" offset-m="1" col-s="10" offset-s="1">
        <img style={imgKeyStyle} />
      </GridCol>
    )
  }

  renderBulletList() {
    const { viewportIsMOrLess, viewportIsXSOrLess } = this.props

    return (
      <Grid>
        {this.renderImage()}
        <GridCol col-m="4" offset-m="1" col-s="10" offset-s="1">
          <Marger top={viewportIsMOrLess ? 4 : 3}>
            <BulletList
              default
              style={styles.bulletList}
              items={[
                {
                  key: '1',
                  item: (
                    <Text
                      size={viewportIsXSOrLess ? 'tiny' : 'default'}
                      style={{ lineHeight: 1.5 }}
                      color="font1"
                    >
                      Un coach pour vous conseiller sur la mise en forme de
                      votre page projet, votre stratégie de communication durant
                      la collecte et l'envoi de vos contreparties.
                    </Text>
                  ),
                },
                {
                  key: '2',
                  item: (
                    <Text
                      size={viewportIsXSOrLess ? 'tiny' : 'default'}
                      style={{ lineHeight: 1.5 }}
                      color="font1"
                    >
                      Une équipe d’experts pour chaque secteur d’activité,
                      proche de vos besoins et vos problématiques.
                    </Text>
                  ),
                },
                {
                  key: '3',
                  item: (
                    <Text
                      size={viewportIsXSOrLess ? 'tiny' : 'default'}
                      style={{ lineHeight: 1.5 }}
                      color="font1"
                    >
                      <span style={{ color: '#19B4FA' }}>Un blog</span> et{' '}
                      <span style={{ color: '#19B4FA' }}>des vidéos tutos</span>{' '}
                      pour devenir un pro du financement participatif !
                    </Text>
                  ),
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
        Je lance mon projet
      </Button>
    )
  }
}

const imgHeight = 416
const imgWidth = 555

const imgBackground = image => ({
  backgroundColor: '#CAF4FE',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  paddingBottom: (imgHeight / imgWidth) * 100 + '%',
})

const styles = {
  text: {
    color: COLORS.font1,
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      textAlign: 'center',
    },
  },

  horizontalStroke: {
    width: 50,
    color: COLORS.font1,
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      margin: 'auto',
      width: 40,
    },
  },

  bulletList: {
    lineHeight: '2rem',
    color: COLORS.font1,
  },
}

export default withMediaQueries({
  viewportIsMOrLess: true,
  viewportIsXSOrLess: true,
})(Radium(KeySection))
