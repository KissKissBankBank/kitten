import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../../components/typography/paragraph'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { withMediaQueries } from '../../../../hoc/media-queries'

class TipsSection extends Component {
  render() {
    return (
      <StyleRoot>
        <Container>
          <Marger top="10">
            <Grid>
              {this.renderImage()}
              {this.renderTitle()}
            </Grid>
          </Marger>
        </Container>
      </StyleRoot>
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

  renderTitle() {
    const { viewportIsMOrLess } = this.props

    return (
      <GridCol col-l="4" offset-l="1" col-s="10" offset-s="1">
        <Marger top={viewportIsMOrLess ? 10 : 6} bottom="1.5">
          <Title modifier="quinary" margin={false}>
            Astuce n° 1 <br />
            Choisissez un objectif minimum
          </Title>
        </Marger>

        <Marger top="1.5" bottom="3">
          <HorizontalStroke size="big" />
        </Marger>

        <Marger top="3">
          <Paragraph modifier="quinary">
            Si vous n’atteignez pas votre objectif dans le temps imparti, vous
            ne touchez rien et vos contributeurs sont remboursés. Fixez
            l’objectif minimum pour amorcer votre projet.
          </Paragraph>
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

export default withMediaQueries({
  viewportIsMOrLess: true,
})(Radium(TipsSection))
