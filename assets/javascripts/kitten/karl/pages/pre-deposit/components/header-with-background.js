import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol as GridColBase } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Paragraph as ParagraphBase } from '../../../../components/typography/paragraph'
import { Button } from '../../../../components/buttons/button'
import { Title as TitleBase } from '../../../../components/typography/title'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from '../../../../constants/grid-config'
import COLORS from '../../../../constants/colors-config'

const Paragraph = Radium(ParagraphBase)
const Title = Radium(TitleBase)
const GridCol = Radium(GridColBase)

class HeaderWithBackground extends Component {
  render() {
    const { backgroundImage } = this.props

    const headerStyle = [styles.header, { backgroundImage }]

    return (
      <StyleRoot style={headerStyle}>
        <Container>
          <Grid>{this.renderHero()}</Grid>
        </Container>
      </StyleRoot>
    )
  }

  renderHero() {
    const { viewportIsXSOrLess } = this.props

    return (
      <GridCol col-l="8" offset-l="2">
        <div style={styles.header.container}>
          <Marger bottom={viewportIsXSOrLess ? 1 : 2}>
            <Title
              tag="h1"
              margin={false}
              style={{ color: COLORS.font1 }}
              className="k-u-align-center"
              modifier={viewportIsXSOrLess ? 'tertiary' : 'secondary'}
            >
              Ce projet, vous y croyez ? <br /> Nous aussi !
            </Title>
          </Marger>

          <Marger top={viewportIsXSOrLess ? 1 : 2} bottom="4">
            <Paragraph
              margin={false}
              className="k-u-align-center"
              style={{ color: COLORS.font1 }}
              modifier={viewportIsXSOrLess ? 'tertiary' : 'primary'}
            >
              70 % des projets présentés réussissent sur KissKissBankBank.
              N'attendez plus pour démarrer votre campagne.
            </Paragraph>
          </Marger>

          <Marger top="4" className="k-u-align-center">
            <Button
              tag="a"
              size="big"
              modifier="helium"
              href="#"
              target="_blank"
              rel="noopener"
            >
              Lancez-vous
            </Button>
          </Marger>
        </div>
      </GridCol>
    )
  }
}

const styles = {
  header: {
    backgroundSize: 'cover',
    paddingBottom: 50,
    paddingTop: 50,
    marginBottom: 50,
    backgroundColor: '#CBF4FD',

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      paddingTop: 80,
      paddingBottom: 80,
      marginBottom: 80,
    },
    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      paddingTop: 100,
      paddingBottom: 100,
      marginBottom: 100,
    },

    container: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingRight: `${CONTAINER_PADDING}px`,
      paddingLeft: `${CONTAINER_PADDING}px`,
      backgroundColor: COLORS.background1,

      [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingRight: `${CONTAINER_PADDING_MOBILE}px`,
        paddingLeft: `${CONTAINER_PADDING_MOBILE}px`,
      },
    },
  },
}

export default withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
})(Radium(HeaderWithBackground))
