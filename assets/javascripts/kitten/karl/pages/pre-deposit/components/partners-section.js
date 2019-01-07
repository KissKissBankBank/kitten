import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol as GridColBase } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'

const Title = Radium(TitleBase)
const GridCol = Radium(GridColBase)

class PartnersSection extends Component {
  render() {
    const { viewportIsSOrLess } = this.props

    return (
      <StyleRoot>
        <Container>
          <Marger top="10">
            <Grid>
              <GridCol col-m="6" offset-m="3">
                {this.renderTitle()}
              </GridCol>

              <GridCol col-l="6" offset-l="3">
                {this.renderLogos()}
              </GridCol>
            </Grid>
          </Marger>
        </Container>
      </StyleRoot>
    )
  }

  renderTitle() {
    const { viewportIsSOrLess } = this.props

    return (
      <Marger bottom={viewportIsSOrLess ? 4 : 5}>
        <Title modifier="quinary" margin={false} style={styles.textAlign}>
          Nous prenons soin de vos projet et de vos données personnelles aussi
        </Title>
      </Marger>
    )
  }

  renderLogos() {
    const { viewportIsSOrLess } = this.props

    return (
      <Grid>
        <GridCol col-m="4" style={styles.textAlign}>
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img src="http://via.placeholder.com/70x50/caf4fe/caf4fe" />
            </div>
            <figcaption>Protection de vos données</figcaption>
          </figure>
        </GridCol>

        <GridCol col-m="4" style={styles.textAlign}>
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img src="http://via.placeholder.com/100x80/caf4fe/caf4fe" />
            </div>
            <figcaption>
              KissKissBankBank est filiale de La Banque Postale
            </figcaption>
          </figure>
        </GridCol>

        <GridCol col-m="4" style={styles.textAlign}>
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img src="http://via.placeholder.com/50x50/caf4fe/caf4fe" />
            </div>
            <figcaption>
              Sécurisation de vos transactions financières
            </figcaption>
          </figure>
        </GridCol>
      </Grid>
    )
  }
}

const styles = {
  textAlign: {
    textAlign: 'center',
  },
  logosMargin: {
    margin: 0,
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      marginBottom: 40,
    },
  },
  logos: {
    height: 100,
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      height: '100%',
    },
  },
}

export default withMediaQueries({
  viewportIsSOrLess: true,
})(Radium(PartnersSection))
