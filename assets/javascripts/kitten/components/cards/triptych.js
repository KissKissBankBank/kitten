import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol as GridColBase } from 'kitten/components/grid/grid'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { VerticalStroke } from 'kitten/components/layout/vertical-stroke'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { debounce } from 'kitten/helpers/utils/debounce'
import { GUTTER } from 'kitten/constants/grid-config'

const Marger = Radium(MargerBase)
const GridCol = Radium(GridColBase)
const width = 349
const height = 465

class FakeCard extends Component {
  render() {
    const {
      index,
      viewportIsTabletOrLess,
      viewportIsSOrLess,
      ...others
    } = this.props

    const picUrl = `https://picsum.photos/${width}/${height}?${index}`

    return (
      <div {...others}>
        <img
          src={picUrl}
          style={{
            width: '100%',
            height: 0,
            paddingBottom: `${height / width * 100}%`,
            background: `transparent url(${picUrl}) no-repeat`,
            backgroundSize: 'cover',
          }}
          alt={`picture ${index}`}
        />
        <h3>{index} / title goes here</h3>
        <p>some lorem ipsum</p>
      </div>
    )
  }
}

class TriptychBase extends Component {
  constructor(props) {
    super(props)

    this.state = { addEvenMargin: 0 }
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

  render() {
    const { viewportIsTabletOrLess, viewportIsSOrLess } = this.props
    const isTablet = viewportIsTabletOrLess && !viewportIsSOrLess
    let gutter

    if (viewportIsTabletOrLess) {
      // Tablet
      if (isTablet) {
        gutter = 50 / 2 - GUTTER / 2
        styles.gutter = {
          firstItem: { marginLeft: gutter },
          secondItem: { marginRight: gutter },
          thirdItem: { marginLeft: gutter },
        }
        // Mobile
      } else {
        styles.gutter = {
          firstItem: null,
          secondItem: null,
          thirdItem: null,
        }
      }
      // Desktop
    } else {
      gutter = 40 / 2 - GUTTER / 2
      styles.gutter = {
        firstItem: { marginRight: gutter },
        secondItem: { marginRight: gutter, marginLeft: gutter },
        thirdItem: { marginLeft: gutter },
      }
    }

    return (
      <StyleRoot>
        <Grid className="k-u-align-center">
          <GridCol
            col-l="6"
            offset-l="3"
            col-m="6"
            offset-m="0"
            col-s="12"
            offset-s="0"
          >
            <div ref={this.setRef('title')}>
              <Marger bottom="2">
                <Title tag="h2" modifier="secondary" margin={false}>
                  Main title goes here
                </Title>
              </Marger>

              <Marger bottom="2">
                <VerticalStroke size="huge" style={styles.verticalStroke} />
              </Marger>
            </div>
          </GridCol>

          <GridCol col-l="4" col-m="6" col-s="12" style={styles.oddMargin}>
            <Marger style={styles.gutter.firstItem}>
              <div ref={this.setRef('card')}>
                <FakeCard index={1} />
              </div>
            </Marger>
          </GridCol>

          <GridCol col-l="4" col-m="6" col-s="12">
            <Marger
              style={{ ...styles.secondCard, ...styles.gutter.secondItem }}
              top={this.state.addEvenMargin / 10}
            >
              <FakeCard index={2} />
            </Marger>
          </GridCol>

          <GridCol col-l="4" col-m="6" col-s="12" style={styles.oddMargin}>
            <Marger style={styles.gutter.thirdItem}>
              <FakeCard index={3} />
            </Marger>
          </GridCol>
        </Grid>
      </StyleRoot>
    )
  }
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
