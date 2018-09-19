import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Grid, GridCol as GridColBase } from 'kitten/components/grid/grid'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { VerticalStroke } from 'kitten/components/layout/vertical-stroke'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { debounce } from 'kitten/helpers/utils/debounce'
import { GUTTER } from 'kitten/constants/grid-config'

const Marger = Radium(MargerBase)
const GridCol = Radium(GridColBase)
const width = 349
const height = 465

class TriptychBase extends Component {
  constructor(props) {
    super(props)

    this.state = { addEvenMargin: null }
  }

  manageCardPosition = () => {
    this.setState((state, props) => {
      const { viewportIsTabletOrLess, viewportIsSOrLess } = props
      const isTablet = viewportIsTabletOrLess && !viewportIsSOrLess

      if (!isTablet) return { addEvenMargin: null }

      const titleHeight = this.title.clientHeight
      const cardHeight = this.card.clientHeight

      return { addEvenMargin: -(cardHeight - titleHeight) }
    })
  }

  componentDidMount() {
    this.manageCardPosition()

    window.addEventListener('resize', debounce(this.manageCardPosition, 250))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.manageCardPosition, 250))
  }

  setRef = name => node => {
    this[name] = node
  }

  setGutter = () => {
    const { viewportIsTabletOrLess, viewportIsSOrLess } = this.props
    const isTablet = viewportIsTabletOrLess && !viewportIsSOrLess

    if (viewportIsTabletOrLess) {
      if (isTablet) {
        const tabletGutter = 50 / 2 - GUTTER / 2
        styles.gutter = {
          firstItem: { marginLeft: tabletGutter },
          secondItem: { marginRight: tabletGutter },
          thirdItem: { marginLeft: tabletGutter },
        }
      } else {
        styles.gutter = {
          firstItem: null,
          secondItem: null,
          thirdItem: null,
        }
      }
    } else {
      const desktopGutter = 40 / 2 - GUTTER / 2
      styles.gutter = {
        firstItem: { marginRight: desktopGutter },
        secondItem: { marginRight: desktopGutter, marginLeft: desktopGutter },
        thirdItem: { marginLeft: desktopGutter },
      }
    }
  }

  render() {
    const { viewportIsTabletOrLess, title, item1, item2, item3 } = this.props

    this.setGutter()

    return (
      <StyleRoot>
        <Grid className="k-u-align-center">
          <GridCol col-l="6" offset-l="3" col-m="6" offset-m="0">
            <div ref={this.setRef('title')}>
              <Marger bottom="2">{title}</Marger>

              <Marger bottom="2">
                <VerticalStroke size="huge" style={styles.verticalStroke} />
              </Marger>
            </div>
          </GridCol>

          <GridCol col-l="4" col-m="6" style={styles.oddMargin}>
            <Marger style={styles.gutter.firstItem}>
              <div ref={this.setRef('card')}>
                <Marger bottom={viewportIsTabletOrLess ? 5 : 0}>{item1}</Marger>
              </div>
            </Marger>
          </GridCol>

          <GridCol col-l="4" col-m="6">
            <Marger
              style={{ ...styles.secondCard, ...styles.gutter.secondItem }}
              top={this.state.addEvenMargin / 10}
              bottom={viewportIsTabletOrLess ? 5 : 0}
            >
              {item2}
            </Marger>
          </GridCol>

          <GridCol col-l="4" col-m="6" style={styles.oddMargin}>
            <Marger style={styles.gutter.thirdItem}>{item3}</Marger>
          </GridCol>
        </Grid>
      </StyleRoot>
    )
  }
}

TriptychBase.propTypes = {
  title: PropTypes.node.isRequired,
  item1: PropTypes.node.isRequired,
  item2: PropTypes.node.isRequired,
  item3: PropTypes.node.isRequired,
}

const strokeHeight = 80
const marginStroke = 2

const styles = {
  verticalStroke: {
    height: strokeHeight,
    margin: '0 auto',
  },

  oddMargin: {
    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      marginTop: -(strokeHeight * 2 / 3 + marginStroke * 10),
    },
  },

  secondCard: { transition: 'margin 500ms' },
}

export const Triptych = mediaQueries(Radium(TriptychBase), {
  viewportIsTabletOrLess: true,
  viewportIsSOrLess: true,
})
