import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container as ContainerBase } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { Paragraph as ParagraphBase } from '../../../../components/typography/paragraph'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../../components/layout/horizontal-stroke'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'

const Paragraph = Radium(ParagraphBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)
const Container = Radium(ContainerBase)

class TipsSection extends Component {
  render() {
    const { viewportIsXSOrLess, viewportIsMOrLess } = this.props

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
    const imgKeyStyle = [imgBackground('FFF'), styles.image]

    return (
      <GridCol offset-l="1" col-s="5" offset-s="0" col-xs="10" offset-xs="1">
        <div style={imgKeyStyle} />
      </GridCol>
    )
  }

  renderText() {
    const { viewportIsMOrLess } = this.props

    return (
      <GridCol col-l="4" col-s="6" offset-s="1" col-xs="10" offset-xs="1">
        <div style={styles.tipsMarger}>
          <Marger bottom="1.5">
            <Title modifier="quinary" margin={false}>
              Astuce n° 1 <br />
              Choisissez un objectif minimum
            </Title>
          </Marger>

          <Marger top="1.5" bottom="3">
            <HorizontalStroke style={styles.horizontalStroke} />
          </Marger>

          <Marger top="3">
            <Paragraph modifier="quinary" style={styles.text} margin={false}>
              Si vous n’atteignez pas votre objectif dans le temps imparti, vous
              ne touchez rien et vos contributeurs sont remboursés. Fixez
              l’objectif minimum pour amorcer votre projet.
            </Paragraph>
          </Marger>
        </div>
      </GridCol>
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
  image: {
    [`@media (min-width: ${ScreenConfig.S.min}px) and
      (max-width: ${ScreenConfig.M.max}px)`]: {
      marginLeft: -`${CONTAINER_PADDING}`,
      width: `calc(100% + ${CONTAINER_PADDING}px)`,
    },
  },
  tipsMarger: {
    marginTop: 100,
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      marginTop: 0,
    },
    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginTop: 30,
    },
  },
  horizontalStroke: {
    width: 40,
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      backgroundColor: COLORS.background1,
      textAlign: 'center',
      margin: '0 auto',
    },
  },
}

export default withMediaQueries({
  viewportIsMOrLess: true,
  viewportIsXSOrLess: true,
})(Radium(TipsSection))
