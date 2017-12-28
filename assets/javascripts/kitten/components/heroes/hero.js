import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ScreenConfig } from 'kitten/constants/screen-config'

class HeroBase extends Component {
  render() {
    return (
      <StyleRoot>
        <Container>
          <Grid>
            { this.renderContent() }
            { this.renderImage() }
          </Grid>
        </Container>
      </StyleRoot>
    )
  }

  renderContent() {
    const gridStyles = [
      styles.grid[this.props.direction].content,
      this.props.tiny && styles.grid.tiny.content,
    ]

    return (
      <GridCol
        key="hero-content"
        col="12"
        col-s="10"
        col-l="6"
        style={ gridStyles }
      >
        <div style={ styles.content }>
          { this.props.children }
        </div>
      </GridCol>
    )
  }

  renderImage() {
    const gridStyles = [
      styles.grid[this.props.direction].image,
      this.props.tiny && styles.grid.tiny.image,
    ]

    return (
      <GridCol
        key="hero-image"
        col="12"
        col-l="7"
        style={ gridStyles }
      >
        <div style={[
          styles.image[this.props.direction],
          { backgroundImage: `url(${ this.props.imageSrc })` },
        ]} />
      </GridCol>
    )
  }
}

const COLUMN_WIDTH_PERCENT = 1 / 12 * 100
const TWO_COLUMNS_WIDTH_PERCENT = 2 / 12 * 100
const SEMI_COLUMN_WIDTH_PERCENT = COLUMN_WIDTH_PERCENT / 2

const styles = {
  grid: {
    left: {
      content: {
        position: 'relative',
        zIndex: '1',
        marginTop: `${COLUMN_WIDTH_PERCENT}%`,
        marginLeft: `${COLUMN_WIDTH_PERCENT}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: 0,
          marginTop: `${8 / 12 * 100}%`,
        },
      },
      image: {
        marginLeft: `-${TWO_COLUMNS_WIDTH_PERCENT}%`,
        marginBottom: `${SEMI_COLUMN_WIDTH_PERCENT}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: `-${10 / 12 * 100}%`,
          marginBottom: '0',
        },

        [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
          marginLeft: `-${12 / 12 * 100}%`,
        },
      },
    },
    right: {
      content: {
        position: 'relative',
        zIndex: '1',
        marginTop: `${COLUMN_WIDTH_PERCENT}%`,
        marginLeft: `${5 / 12 * 100}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: 0,
          marginTop: `${8 / 12 * 100}%`,
        },
      },
      image: {
        marginLeft: `-${11 / 12 * 100}%`,
        marginBottom: `${SEMI_COLUMN_WIDTH_PERCENT}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: `-${10 / 12 * 100}%`,
          marginBottom: '0',
        },

        [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
          marginLeft: `-${12 / 12 * 100}%`,
        },
      },
    },
    tiny: {
      content: {
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          paddingBottom: `${SEMI_COLUMN_WIDTH_PERCENT}%`,
        },
      },
      image: {
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          marginBottom: '0',
        },
      },
    },
  },
  content: {
    padding: '100px 115px',
    backgroundColor: '#333', // TODO: Use configuration.
    color: '#fff',

    [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
      padding: '100px 85px',
    },

    [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
      padding: '50px 20px',
      marginLeft: '-20px',
    },
  },
  image: {
    left: {
      width: 'calc(100% + 20px)',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
        width: 'calc(100% + 40px)',
        height: '100vw',
        marginLeft: '-20px',
      },
    },

    right: {
      marginLeft: '-20px',
      width: 'calc(100% + 20px)',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
        width: 'calc(100% + 40px)',
        height: '100vw',
        marginLeft: '-20px',
      },
    },
  },
}

HeroBase.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
}

HeroBase.defaultProps = {
  direction: 'left',
  tiny: false,
  imageSrc: 'https://placeimg.com/640/480/any',
}

export const Hero = Radium(HeroBase)
