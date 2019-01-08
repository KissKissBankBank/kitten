import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container as ContainerBase } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../components/typography/title'
import { Paragraph as ParagraphBase } from '../../../../components/typography/paragraph'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../../components/layout/horizontal-stroke'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'

const Title = Radium(TitleBase)
const Paragraph = Radium(ParagraphBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)
const Container = Radium(ContainerBase)

class TipsSection extends Component {
  render() {
    const { viewportIsXSOrLess, viewportIsMOrLess } = this.props

    return (
      <Container style={styles.background}>
        <Marger top={viewportIsXSOrLess ? 5 : 10}>
          {!viewportIsMOrLess && (
            <Grid>
              {this.renderImage()}
              {this.renderText()}
            </Grid>
          )}

          {viewportIsMOrLess && (
            <Grid>
              <Marger
                top={viewportIsXSOrLess ? 5 : 10}
                bottom={viewportIsXSOrLess ? 5 : 10}
              >
                {this.renderText()}
              </Marger>
            </Grid>
          )}
        </Marger>
      </Container>
    )
  }

  renderImage() {
    const imgKeyStyle = [imgBackground('FFF')]

    return (
      <GridCol col-l="5" offset-l="1" col-s="10" offset-s="1">
        <img style={imgKeyStyle} />
      </GridCol>
    )
  }

  renderText() {
    const { viewportIsMOrLess } = this.props

    return (
      <GridCol col-l="4" offset-l="1" col-s="10" offset-s="1">
        <Marger top={!viewportIsMOrLess ? 6 : null}>
          <Marger bottom="1.5">
            <Title modifier="quinary" margin={false} style={styles.text}>
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
        </Marger>
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
  background: {
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      backgroundColor: COLORS.font1,
    },
  },
  text: {
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      color: COLORS.background1,
      textAlign: 'center',
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
