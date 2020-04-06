import React, { Component } from 'react'
import Radium from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../components/typography/title'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const Title = Radium(TitleBase)

class PartnersSection extends Component {
  render() {
    const { viewportIsXSOrLess } = this.props

    return (
      <Container>
        <Marger top={viewportIsXSOrLess ? 8 : 10}>
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
        <Title
          margin={false}
          style={styles.title}
          modifier={viewportIsXSOrLess ? 'senary' : 'quinary'}
        >
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
              <img
                src="http://via.placeholder.com/70x50/caf4fe/caf4fe"
                alt=""
              />
            </div>
            <figcaption style={styles.text}>
              Protection de vos données
            </figcaption>
          </figure>
        </GridCol>
        <GridCol col-m="4" className="k-u-align-center">
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img
                src="http://via.placeholder.com/100x80/caf4fe/caf4fe"
                alt=""
              />
            </div>
            <figcaption style={styles.text}>
              KissKissBankBank est filiale de La Banque Postale
            </figcaption>
          </figure>
        </GridCol>
        <GridCol col-m="4" className="k-u-align-center">
          <figure style={styles.logosMargin}>
            <div style={styles.logos}>
              <img
                src="http://via.placeholder.com/50x50/caf4fe/caf4fe"
                alt=""
              />
            </div>
            <figcaption style={styles.text}>
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
  text: {
    color: COLORS.font1,
    fontSize: pxToRem(14),
  },
  logosMargin: {
    margin: 0,
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      marginBottom: pxToRem(40),
    },
  },
  logos: {
    height: pxToRem(100),
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      height: '100%',
    },
  },
}

export default withMediaQueries({
  viewportIsXSOrLess: true,
})(Radium(PartnersSection))
