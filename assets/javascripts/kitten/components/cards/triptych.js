import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Grid, GridCol as GridColBase } from '../../components/grid/grid'
import { Marger as MargerBase } from '../../components/layout/marger'
import { VerticalStroke as VerticalStrokeBase } from '../../components/layout/vertical-stroke'
import { ScreenConfig } from '../../constants/screen-config'
import { withMediaQueries } from '../../hoc/media-queries'
import { debounce } from '../../helpers/utils/debounce'
import { GUTTER } from '../../constants/grid-config'

const Marger = Radium(MargerBase)
const GridCol = Radium(GridColBase)
const VerticalStroke = Radium(VerticalStrokeBase)

class TriptychBase extends Component {
  constructor(props) {
    super(props)

    this.state = { secondCardComputedTopMargin: null }
  }

  updateSecondCardMargin = () => {
    this.setState((_state, props) => {
      const { viewportIsMOrLess, viewportIsSOrLess } = props
      const isTablet = viewportIsMOrLess && !viewportIsSOrLess

      if (!isTablet) return { secondCardComputedTopMargin: null }

      const titleHeight = this.title.clientHeight
      const cardHeight = this.firstCard.clientHeight

      return { secondCardComputedTopMargin: -(cardHeight - titleHeight) }
    })
  }

  debounceUpdateMargin = debounce(this.updateSecondCardMargin, 250)

  componentDidMount() {
    this.debounceUpdateMargin()

    window.addEventListener('resize', this.debounceUpdateMargin)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceUpdateMargin)
  }

  setRef = name => node => {
    this[name] = node
  }

  render() {
    const { viewportIsMOrLess, title, item1, item2, item3 } = this.props

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
              <div ref={this.setRef('firstCard')}>
                <Marger bottom={viewportIsMOrLess ? 5 : 0}>{item1}</Marger>
              </div>
            </Marger>
          </GridCol>

          <GridCol col-l="4" col-m="6">
            <Marger
              style={{ ...styles.secondCard, ...styles.gutter.secondItem }}
              top={this.state.secondCardComputedTopMargin / 10}
              bottom={viewportIsMOrLess ? 5 : 0}
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
const tabletGutter = 50 / 2 - GUTTER / 2
const desktopGutter = 40 / 2 - GUTTER / 2

const styles = {
  verticalStroke: {
    height: strokeHeight,
    margin: '0 auto',

    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      height: 50,
    },
  },

  oddMargin: {
    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      marginTop: -((strokeHeight * 2) / 3 + marginStroke * 10),
    },
  },

  gutter: {
    firstItem: {
      marginRight: desktopGutter,

      [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
        marginRight: 'inherit',
        marginLeft: tabletGutter,
      },

      [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
        marginRight: 'inherit',
        marginLeft: 'inherit',
      },
    },
    secondItem: {
      marginRight: desktopGutter,
      marginLeft: desktopGutter,

      [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
        marginRight: tabletGutter,
        marginLeft: 'inherit',
      },

      [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
        marginRight: 'inherit',
        marginLeft: 'inherit',
      },
    },
    thirdItem: {
      marginLeft: desktopGutter,

      [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
        marginLeft: tabletGutter,
      },

      [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
        marginLeft: 'inherit',
      },
    },
  },

  secondCard: { transition: 'margin 500ms' },
}

export const Triptych = withMediaQueries({
  viewportIsSOrLess: true,
  viewportIsMOrLess: true,
})(TriptychBase)
