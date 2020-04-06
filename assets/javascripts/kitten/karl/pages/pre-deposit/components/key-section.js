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
import { pxToRem } from '../../../../helpers/utils/typography'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'

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
    const { viewportIsXSOrLess } = this.props

    return (
      <Grid>
        <GridCol col-l="9" offset-l="1">
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
    const imgKeyStyle = [imgBackground(), styles.image]

    return (
      <GridCol offset-l="1" col-s="5" offset-s="1">
        <div style={imgKeyStyle} />
      </GridCol>
    )
  }

  renderBulletList() {
    const { viewportIsXSOrLess } = this.props

    return (
      <Grid>
        {viewportIsXSOrLess && this.renderImage()}
        <GridCol col-l="4" offset-l="1" col-s="6" offset-s="0">
          <Marger top={viewportIsXSOrLess ? 3 : null}>
            <BulletList
              style={styles.bulletList}
              items={[
                {
                  key: '1',
                  className: 'k-u-margin-bottom-double',
                  item: (
                    <Text size={viewportIsXSOrLess ? 'tiny' : 'default'}>
                      Un coach pour vous conseiller sur la mise en forme de
                      votre page projet, votre stratégie de communication durant
                      la collecte et l'envoi de vos contreparties.
                    </Text>
                  ),
                },
                {
                  key: '2',
                  className: 'k-u-margin-bottom-double',
                  item: (
                    <Text size={viewportIsXSOrLess ? 'tiny' : 'default'}>
                      Une équipe d’experts pour chaque secteur d’activité,
                      proche de vos besoins et de vos problématiques.
                    </Text>
                  ),
                },
                {
                  key: '3',
                  item: (
                    <Text size={viewportIsXSOrLess ? 'tiny' : 'default'}>
                      <span style={{ color: '#19b4fa' }}>Un blog</span> et{' '}
                      <span style={{ color: '#19b4fa' }}>des vidéos tutos</span>{' '}
                      pour devenir un pro du financement participatif !
                    </Text>
                  ),
                },
              ]}
            />
          </Marger>
          <Marger top="4" style={styles.button}>
            {this.renderButton()}
          </Marger>
        </GridCol>

        {!viewportIsXSOrLess && this.renderImage()}
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

const imgBackground = () => ({
  backgroundColor: '#caf4fe',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  paddingBottom: (imgHeight / imgWidth) * 100 + '%',
})

const styles = {
  text: {
    color: COLORS.font1,
    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      textAlign: 'center',
    },
  },
  horizontalStroke: {
    width: pxToRem(50),
    color: COLORS.font1,
    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      margin: 'auto',
      width: pxToRem(40),
    },
  },
  image: {
    [`@media (min-width: ${ScreenConfig.S.min}px) and
      (max-width: ${ScreenConfig.M.max}px)`]: {
      marginRight: -`${CONTAINER_PADDING}`,
      width: `calc(100% + ${CONTAINER_PADDING}px)`,
    },
  },
  bulletList: {
    lineHeight: 1.6,
    color: COLORS.font1,
  },
  button: {
    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      textAlign: 'center',
    },
  },
}

export default withMediaQueries({
  viewportIsXSOrLess: true,
})(Radium(KeySection))
