import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Title } from '../../../../components/typography/title'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { BulletList as BulletlistBase } from '../../../../components/lists/bullet-list'
import { Button } from '../../../../components/buttons/button'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { parseHtml } from '../../../../helpers/utils/parser'

const BulletList = Radium(BulletlistBase)

class KeySection extends Component {
  render() {
    return (
      <StyleRoot>
        <Container>
          <Marger bottom="4">{this.renderTitle()}</Marger>

          <Marger top="4">{this.renderBulletList()}</Marger>
        </Container>
      </StyleRoot>
    )
  }

  renderTitle() {
    const { titleKeyImg } = this.props

    return (
      <Grid>
        <GridCol col-l="6">
          <Marger bottom="2">
            <Title modifier="secondary" margin={false}>
              La clé ? Un accompagnement sur mesure
            </Title>
          </Marger>

          <Marger top="2">
            <HorizontalStroke size="huge" />
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
    return (
      <Grid>
        {this.renderImage()}

        <GridCol col-m="4" offset-m="1">
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
          <Marger top="4">{this.renderButton()}</Marger>
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
  bulletList: {
    lineHeight: 32,
    color: COLORS.font1,
  },
}

export default KeySection
