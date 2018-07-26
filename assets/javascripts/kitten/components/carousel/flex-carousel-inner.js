import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Button } from 'kitten/components/buttons/button'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Title } from 'kitten/components/typography/title'
import COLORS from 'kitten/constants/colors-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { Paragraph } from 'kitten/components/typography/paragraph'

class FlexCarouselInnerComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    titleLineBreak: PropTypes.string,
    paragraph: PropTypes.string.isRequired,
    paragraphLineBreak: PropTypes.string,
    button: PropTypes.string.isRequired,
  }

  static defaultProps = {
    titleLineBreak: '',
    paragraphLineBreak: '',
  }

  renderSelectors() {
    const { viewportIsMobile, slideContent } = this.props

    const styleSelector = [styles.selector.active]

    return (
      <Marger
        bottom={viewportIsMobile ? 5 : 10}
        style={styles.selectorsContainer}
      >
        <div style={{ ...styles.selector }} />
      </Marger>
    )
  }

  renderSlider() {
    const {
      viewportIsMobile,
      title,
      titleLineBreak,
      paragraph,
      paragraphLineBreak,
      button,
    } = this.props

    const cssDisplay =
      this.state.activeIndex === content.index
        ? styles.slide.show
        : styles.slide.hide
    const sliderStyle = { ...styles.slide.base, ...cssDisplay }
    const titleMargin = viewportIsMobile ? 5 : 10
    const breakline = viewportIsMobile ? ' ' : <br />
    const titleSize = viewportIsMobile ? 'senary' : 'quinary'

    return (
      <div style={sliderStyle}>
        <Marger top={titleMargin}>
          <Title
            modifier={titleSize}
            tag="h3"
            margin={false}
            style={styles.title}
          >
            {title}
            {breakline}
            {titleLineBreak}
          </Title>
        </Marger>

        <Marger top="2" bottom="3">
          <HorizontalStroke size="big" style={styles.stroke} />
        </Marger>

        <Marger top="3" bottom="3">
          <Paragraph modifier="quaternary" margin={false}>
            {paragraph}
            {breakline}
            {paragraphLineBreak}
          </Paragraph>
        </Marger>

        <Marger top="3" bottom="4">
          <Button tag="a" modifier="helium" href="#" aria-label={button}>
            {button}
          </Button>
        </Marger>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <div style={styles.slide.grid}>{this.renderSlider()}</div>
        {this.renderSelectors()}
      </Fragment>
    )
  }

  // goPrev = () => {
  //   const { slideContent } = this.props

  //   this.state.activeIndex === 1
  //     ? this.setState({ activeIndex: slideContent.length })
  //     : this.setState({ activeIndex: --this.state.activeIndex })
  // }

  // goNext = () => {
  //   const { slideContent } = this.props

  //   this.state.activeIndex === slideContent.length
  //     ? this.setState({ activeIndex: 1 })
  //     : this.setState({ activeIndex: ++this.state.activeIndex })
  // }
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
    width: 6,
    height: 6,
    background: COLORS.background1,
    marginRight: 5,
    cursor: 'pointer',
    active: {
      transition: `background ${transitionDuration} ease-in-out`,
      background: '#c98c1f',
    },
  },
  container: {
    background: COLORS.font1,
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

export const FlexCarouselInner = mediaQueries(
  Radium(FlexCarouselInnerComponent),
  {
    viewportIsMobile: true,
  },
)
