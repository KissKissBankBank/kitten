import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'

export class Hero extends Component {
  render() {
    return (
      <Container>
        <Grid>
          { this.props.direction == 'right'
            ? [this.renderImage(), this.renderContent()]
            : [this.renderContent(), this.renderImage()]
          }
        </Grid>
      </Container>
    )
  }

  renderContent() {
    return (
      <GridCol
        key="hero-content"
        col="6"
        style={ styles.grid[this.props.direction].content }
      >
        <div style={ styles.content }>
          { this.props.children }
        </div>
      </GridCol>
    )
  }

  renderImage() {
    return (
      <GridCol
        key="hero-image"
        col="7"
        style={ {
          ...styles.grid[this.props.direction].image,
          ...styles.image,
          backgroundImage: `url(${ this.props.imageSrc })`,
        } }
      />
    )
  }
}

const COLUMN_WIDTH_PERCENT = 1/12 * 100
const TWO_COLUMNS_WIDTH_PERCENT = 2/12 * 100
const SEMI_COLUMN_WIDTH_PERCENT = COLUMN_WIDTH_PERCENT / 2

const styles = {
  grid: {
    left: {
      content: {
        position: 'relative',
        zIndex: '5',
        marginTop: `${COLUMN_WIDTH_PERCENT}%`,
        marginLeft: `${COLUMN_WIDTH_PERCENT}%`,
      },
      image: {
        position: 'relative',
        left: '10px',
        marginLeft: `-${TWO_COLUMNS_WIDTH_PERCENT}%`,
        marginBottom: `${SEMI_COLUMN_WIDTH_PERCENT}%`,
      },
    },
    right: {
      content: {
        position: 'relative',
        zIndex: '5',
        marginTop: `${COLUMN_WIDTH_PERCENT}%`,
        marginLeft: `-${TWO_COLUMNS_WIDTH_PERCENT}%`,
      },
      image: {
        position: 'relative',
        right: '10px',
        marginBottom: `${SEMI_COLUMN_WIDTH_PERCENT}%`,
      },
    },
  },
  content: {
    padding: '100px 115px',
    backgroundColor: '#333', // TODO: Use configuration.
    color: '#fff',
  },
  image: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}

Hero.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
}

Hero.defaultProps = {
  direction: 'left',
  imageSrc: 'https://placeimg.com/640/480/any',
}
