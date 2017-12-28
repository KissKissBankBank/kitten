import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ScreenConfig } from 'kitten/constants/screen-config'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'

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

const styles = {
  grid: {
    left: {
      content: {
        position: 'relative',
        zIndex: '1',
        marginTop: `${1 / NUM_COLUMNS * 100}%`,
        marginLeft: `${1 / NUM_COLUMNS * 100}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginTop: `${8 / NUM_COLUMNS * 100}%`,
          marginLeft: 0,
        },
      },
      image: {
        marginLeft: `-${2 / NUM_COLUMNS * 100}%`,
        marginBottom: `${1 / 2 / NUM_COLUMNS * 100}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: `-${10 / NUM_COLUMNS * 100}%`,
          marginBottom: '0',
        },

        [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
          marginLeft: `-100%`,
        },
      },
    },
    right: {
      content: {
        position: 'relative',
        zIndex: '1',
        marginTop: `${1 / NUM_COLUMNS * 100}%`,
        marginLeft: `${5 / NUM_COLUMNS * 100}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginTop: `${8 / NUM_COLUMNS * 100}%`,
          marginLeft: 0,
        },
      },
      image: {
        marginLeft: `-${11 / NUM_COLUMNS * 100}%`,
        marginBottom: `${1 / 2 / NUM_COLUMNS * 100}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: `-${10 / NUM_COLUMNS * 100}%`,
          marginBottom: '0',
        },

        [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
          marginLeft: `-100%`,
        },
      },
    },
    tiny: {
      content: {
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          paddingBottom: `${1 / 2 / NUM_COLUMNS * 100}%`,
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
      marginLeft: `-${CONTAINER_PADDING_MOBILE}px`,
    },
  },
  image: {
    left: {
      width: `calc(100% + ${CONTAINER_PADDING}px)`,
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
        width: `calc(100% + ${CONTAINER_PADDING * 2}px)`,
        height: '100vw',
        marginLeft: `-${CONTAINER_PADDING}px`,
      },

      [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
        width: `calc(100% + ${CONTAINER_PADDING_MOBILE * 2}px)`,
        marginLeft: `-${CONTAINER_PADDING_MOBILE}px`,
      },
    },

    right: {
      marginLeft: `-${CONTAINER_PADDING}px`,
      width: `calc(100% + ${CONTAINER_PADDING}px)`,
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
        width: `calc(100% + ${CONTAINER_PADDING * 2}px)`,
        height: '100vw',
        marginLeft: `-${CONTAINER_PADDING}px`,
      },

      [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
        width: `calc(100% + ${CONTAINER_PADDING_MOBILE * 2}px)`,
        marginLeft: `-${CONTAINER_PADDING_MOBILE}px`,
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
