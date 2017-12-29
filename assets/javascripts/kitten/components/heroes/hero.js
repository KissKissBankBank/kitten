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
import COLORS from 'kitten/constants/colors-config'

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
      styles.content.grid,
      this.props.direction == 'left' && styles.content.grid.left,
      this.props.direction == 'right' && styles.content.grid.right,
      this.props.tiny && styles.content.grid.tiny,
    ]

    const contentStyles = [
      styles.content,
      this.props.direction == 'left' && styles.content.left,
      this.props.direction == 'right' && styles.content.right,
    ]

    return (
      <GridCol
        col="12"
        col-s="10"
        col-l="6"
        style={ gridStyles }
      >
        <div style={ contentStyles }>
          { this.props.children }
        </div>
      </GridCol>
    )
  }

  renderImage() {
    const gridStyles = [
      styles.image.grid,
      this.props.direction == 'left' && styles.image.grid.left,
      this.props.direction == 'right' && styles.image.grid.right,
      this.props.tiny && styles.image.grid.tiny,
    ]

    const imageStyles = [
      styles.image,
      this.props.direction == 'right' && styles.image.right,
      { backgroundImage: `url(${ this.props.imageSrc })` },
    ]

    return (
      <GridCol
        col="12"
        col-l="7"
        style={ gridStyles }
      >
        <div style={ imageStyles } />
      </GridCol>
    )
  }
}

const styles = {
  content: {
    padding: '100px 115px',
    backgroundColor: COLORS.font1,
    color: COLORS.background1,

    [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
      padding: '100px 85px',
    },

    [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
      padding: '50px 20px',
    },

    left: {
      [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
        marginLeft: `-${CONTAINER_PADDING_MOBILE}px`,
      },
    },

    right: {
      [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
        marginRight: `-${CONTAINER_PADDING_MOBILE}px`,
      },
    },

    grid: {
      position: 'relative',
      zIndex: 1,
      paddingTop: `${1 / NUM_COLUMNS * 100}vw`,
      marginLeft: `${1 / NUM_COLUMNS * 100}%`,

      left: {
        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          paddingTop: `${8 / NUM_COLUMNS * 100}vw`,
          marginLeft: 0,
        },
      },

      right: {
        marginLeft: `${5 / NUM_COLUMNS * 100}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          paddingTop: `${8 / NUM_COLUMNS * 100}vw`,
          marginLeft: `${2 / NUM_COLUMNS * 100}%`,
        },

        [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
          marginLeft: 0,
        },
      },

      tiny: {
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          paddingBottom: `${1 / 2 / NUM_COLUMNS * 100}vw`,
        },
      },
    },
  },

  image: {
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

    right: {
      marginLeft: `-${CONTAINER_PADDING}px`,
    },

    grid: {
      marginLeft: `-${2 / NUM_COLUMNS * 100}%`,
      paddingBottom: `${1 / 2 / NUM_COLUMNS * 100}vw`,

      left: {
        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: `-${10 / NUM_COLUMNS * 100}%`,
          paddingBottom: 0,
        },

        [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
          marginLeft: `-100%`,
        },
      },

      right: {
        marginLeft: `-${11 / NUM_COLUMNS * 100}%`,

        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginLeft: `-${12 / NUM_COLUMNS * 100}%`,
        },

        [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
          marginLeft: `-100%`,
        },
      },

      tiny: {
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          paddingBottom: 0,
        },
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
  imageSrc: 'https://placehold.it/40x40/'
    + `${COLORS.primary1.replace('#', '')}/`
    + `${COLORS.primary1.replace('#', '')}`,
}

export const Hero = Radium(HeroBase)
