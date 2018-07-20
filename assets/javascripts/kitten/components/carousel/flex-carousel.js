import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid as GridBase, GridCol } from 'kitten/components/grid/grid'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { Button } from 'kitten/components/buttons/button'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Title } from 'kitten/components/typography/title'
import COLORS from 'kitten/constants/colors-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { Carousel } from 'kitten/components/carousel/carousel'
import { parseHtml } from 'kitten/helpers/utils/parser'
import { Paragraph } from 'kitten/components/typography/paragraph'

const Grid = Radium(GridBase)

class FlexCarouselComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 1,
      intervalId: null,
    }
  }

  componentDidMount() {
    const intervalId = setInterval(this.goNext, 15 * 1000)

    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  handleClick = index => () => {
    this.setState({ activeIndex: index })
    clearInterval(this.state.intervalId)
  }

  selectors() {
    const { viewportIsMobile, slideContent } = this.props

    return (
      <Marger
        bottom={viewportIsMobile ? 5 : 10}
        style={styles.selectorsContainer}
      >
        {slideContent.map(content => {
          const activeStyle =
            content.index === this.state.activeIndex
              ? styles.selector.active
              : null

          return (
            <div
              key={`slider-${content.index}`}
              style={{ ...styles.selector, ...activeStyle }}
              onClick={this.handleClick(content.index)}
            />
          )
        })}
      </Marger>
    )
  }

  slider = content => {
    const { viewportIsMobile } = this.props
    const cssDisplay =
      this.state.activeIndex === content.index
        ? styles.slide.show
        : styles.slide.hide
    const sliderStyle = { ...styles.slide.base, ...cssDisplay }
    const titleMargin = viewportIsMobile ? 5 : 10
    const breakline = viewportIsMobile ? ' ' : <br />
    const titleSize = viewportIsMobile ? 'senary' : 'quinary'

    return (
      <div key={content.index} style={sliderStyle}>
        <Marger top={titleMargin}>
          <Title
            modifier={titleSize}
            tag="h3"
            margin={false}
            style={styles.title}
          >
            {content.title.part1}
            {breakline}
            {parseHtml(content.title.part2)}
          </Title>
        </Marger>

        <Marger top="2" bottom="3">
          <HorizontalStroke size="big" style={styles.stroke} />
        </Marger>

        <Marger top="3" bottom="3">
          <Paragraph modifier="quaternary" margin={false}>
            {content.text.part1}
            {breakline}
            {content.text.part2}
          </Paragraph>
        </Marger>

        <Marger top="3" bottom="4">
          <Button
            tag="a"
            modifier={content.buttonProps.modifier}
            href={content.buttonProps.url}
            target={content.buttonProps.target}
            rel={content.buttonProps.rel}
          >
            {content.buttonProps.text}
          </Button>
        </Marger>
      </div>
    )
  }

  goPrev = () => {
    const { slideContent } = this.props

    this.state.activeIndex === 1
      ? this.setState({ activeIndex: slideContent.length })
      : this.setState({ activeIndex: --this.state.activeIndex })
  }

  goNext = () => {
    const { slideContent } = this.props

    this.state.activeIndex === slideContent.length
      ? this.setState({ activeIndex: 1 })
      : this.setState({ activeIndex: ++this.state.activeIndex })
  }

  render() {
    const { slideContent } = this.props

    return (
      <StyleRoot>
        <div style={styles.container}>
          <Container>
            <Grid>
              <GridCol col-l="6" offset-l="3" className="k-u-align-center">
                <div style={styles.slide.grid}>
                  {slideContent.map(this.slider)}
                </div>
                {this.selectors()}
              </GridCol>
            </Grid>
          </Container>
        </div>
      </StyleRoot>
    )
  }
}

const transitionDuration = '.8s'

const styles = {
  slide: {
    grid: {
      display: 'grid',
      gridGap: 0,
    },
    base: {
      transition: `all ${transitionDuration} ease-in-out`,
      gridColumn: 1,
      gridRow: 1,
    },
    show: {
      visibility: 'visible',
      opacity: 1,
    },
    hide: {
      visibility: 'hidden',
      opacity: 0,
      pointerEvents: 'none',
    },
  },
  selectorsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  selector: {
    width: '6px',
    height: '6px',
    background: '#fff',
    marginRight: '5px',
    cursor: 'pointer',
    active: {
      transition: `background ${transitionDuration} ease-in-out`,
      background: '#c98c1f',
    },
  },
  container: {
    background: '#222222',
    color: COLORS.background1,
  },
  stroke: {
    background: `${COLORS.background1}`,
    margin: '0 auto',
  },
  title: {
    color: `${COLORS.background1}`,
  },
}

export const FlexCarouselComponent = mediaQueries(Radium(FlexCarousel), {
  viewportIsMobile: true,
})
