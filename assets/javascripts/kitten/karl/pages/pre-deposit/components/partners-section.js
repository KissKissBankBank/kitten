import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'

const Title = Radium(TitleBase)

class PartnersSection extends Component {
  render() {
    return (
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
    )
  }

  renderTitle() {
    const { viewportIsXSOrLess } = this.props

    return (
      <Marger bottom={viewportIsXSOrLess ? 4 : 5}>
        <Title modifier="quinary" margin={false} style={styles.title}>
          Nous prenons soin de vos projet et de vos données personnelles aussi
        </Title>
      </Marger>
    )
  }

  renderLogos() {
    return (
      <Grid>
        <GridCol col-m="4" className="k-u-align-center">
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img src="http://via.placeholder.com/70x50/caf4fe/caf4fe" />
            </div>
            <figcaption style={{ color: COLORS.font1 }}>
              Protection de vos données
            </figcaption>
          </figure>
        </GridCol>

        <GridCol col-m="4" className="k-u-align-center">
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img src="http://via.placeholder.com/100x80/caf4fe/caf4fe" />
            </div>
            <figcaption style={{ color: COLORS.font1 }}>
              KissKissBankBank est filiale de La Banque Postale
            </figcaption>
          </figure>
        </GridCol>

        <GridCol col-m="4" className="k-u-align-center">
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img src="http://via.placeholder.com/50x50/caf4fe/caf4fe" />
            </div>
            <figcaption style={{ color: COLORS.font1 }}>
              Sécurisation de vos transactions financières
            </figcaption>
          </figure>
        </GridCol>
      </Grid>
    )
  }
}

const styles = {
  title: {
    color: COLORS.font1,
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
  viewportIsXSOrLess: true,
})(Radium(PartnersSection))
