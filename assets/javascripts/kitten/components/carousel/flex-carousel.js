import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import COLORS from 'kitten/constants/colors-config'
import { Grid as GridBase, GridCol } from 'kitten/components/grid/grid'
import { Container } from 'kitten/components/grid/container'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { FlexCarouselInner } from 'kitten/components/carousel/flex-carousel-inner'

const Grid = Radium(GridBase)

class FlexCarouselComponent extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     activeIndex: 1,
  //     intervalId: null,
  //   }
  // }

  // componentDidMount() {
  //   const intervalId = setInterval(this.goNext, 15 * 1000)

  //   this.setState({ intervalId: intervalId })
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.intervalId)
  // }

  // handleClick = index => () => {
  //   this.setState({ activeIndex: index })
  //   clearInterval(this.state.intervalId)
  // }

  render() {
    const {
      slideContent,
      title,
      titleLineBreak,
      paragraph,
      paragraphLineBreak,
      button,
    } = this.props

    return (
      <StyleRoot>
        <div style={styles.container}>
          <Container>
            <Grid>
              <GridCol col-l="6" offset-l="3" className="k-u-align-center">
                <FlexCarouselInner
                  title={title}
                  titleLineBreak={titleLineBreak}
                  paragraph={paragraph}
                  paragraphLineBreak={paragraphLineBreak}
                  button={button}
                />
              </GridCol>
            </Grid>
          </Container>
        </div>
      </StyleRoot>
    )
  }
}

const styles = {
  container: {
    background: COLORS.font1,
    color: COLORS.background1,
  },
}

export const FlexCarousel = mediaQueries(Radium(FlexCarouselComponent), {
  viewportIsMobile: true,
})
