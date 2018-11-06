import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Marger } from 'kitten/components/layout/marger'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { withMediaQueries } from 'kitten/hoc/media-queries'

const Text = Radium(TextBase)
const Title = Radium(TitleBase)

class CounterBlockBase extends Component {
  render() {
    const {
      title,
      titleTag,
      subTitle,
      subTitleTag,
      counter,
      viewportIsMobile,
    } = this.props
    const titleSize = viewportIsMobile ? 'quinary' : 'tertiary'
    const subTitleSize = viewportIsMobile ? 'tiny' : 'huge'
    const margin = viewportIsMobile ? 2 : 4

    return (
      <StyleRoot style={styles.counterBlock}>
        <div style={styles.counterContainer}>
          <Marger bottom={margin}>
            <Title modifier={titleSize} margin={false} tag={titleTag}>
              {title}
            </Title>
          </Marger>
          <div style={styles.flexGrid}>
            <div style={styles.strokeContainer} className="k-u-hidden@m-down">
              <HorizontalStroke style={styles.stroke} size="big" />
            </div>
            <Text
              style={styles.counterText}
              fontStyle="italic"
              weight="bold"
              tag={titleTag}
            >
              {counter}
            </Text>
            <div style={styles.strokeContainer} className="k-u-hidden@m-down">
              <HorizontalStroke style={styles.stroke} size="big" />
            </div>
          </div>
          <Marger top={margin}>
            <Text
              style={styles.subTitle}
              size={subTitleSize}
              tag={subTitleTag}
              fontStyle="italic"
              weight="bold"
              tag="p"
            >
              {subTitle}
            </Text>
          </Marger>
        </div>
      </StyleRoot>
    )
  }
}

CounterBlockBase.defaultProps = {
  title: null,
  titleTag: 'p',
  subTitle: null,
  subTitleTag: 'p',
  counter: '0',
}

const styles = {
  counterBlock: {
    textAlign: 'center',
  },

  flexGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  stroke: {
    width: '100%',
    height: 6,
  },

  strokeContainer: {
    flexGrow: 2,
  },

  counterText: {
    fontSize: '3rem',
    lineHeight: 0.7,
    whiteSpace: 'nowrap',
    display: 'block',
    paddingBottom: 4,
    margin: 0,
    flexGrow: 1,
    textIndent: '-1rem',

    [`@media (min-width: ${ScreenConfig.XS.min}px)`]: {
      fontSize: '4.125rem',
    },

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      fontSize: '6rem',
      paddingBottom: 6,
    },

    [`@media (min-width: ${ScreenConfig.M.min}px)`]: {
      fontSize: '7.3rem',
      paddingBottom: 7,
    },

    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      fontSize: '9.9rem',
      paddingBottom: 10,
    },
  },

  subTitle: {
    margin: 0,
  },
}

export const CounterBlock = withMediaQueries({
  viewportIsMobile: true,
})(CounterBlockBase)
