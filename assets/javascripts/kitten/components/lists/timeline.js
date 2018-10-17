import React, { Component } from 'react'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import Radium from 'radium'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { withMediaQueries } from 'kitten/hoc/media-queries'
import { Marger as MargerBase } from 'kitten/components/layout/marger'

const Marger = Radium(MargerBase)

class TimelineBase extends Component {
  render() {
    const { viewportIsTabletOrLess, viewportIsMobile } = this.props

    const marginTop = viewportIsTabletOrLess ? (viewportIsMobile ? 4 : 3) : 10

    const marginBottom = viewportIsTabletOrLess
      ? viewportIsMobile ? 4 : 5
      : 10

    const lastBulletMarginTop = viewportIsTabletOrLess
      ? viewportIsMobile ? 6 : 7
      : 8

    const textSize = viewportIsMobile ? 'quaternary' : 'tertiary'

    console.warn(this.props)
    return (
      <div style={styles.parent}>
        <span style={styles.verticalLine} />

        {this.props.children.map(({ props }, index) => {
          console.warn('props', props)
          console.warn('index', index)
          return (
            <ol style={styles.customList}>
              <Marger bottom={viewportIsTabletOrLess ? 4 : 5}>
                <li>
                  <Paragraph
                    margin={false}
                    modifier="quaternary"
                    style={{ ...styles.circle, ...styles.noLigneHeight }}
                  >
                    {++index}
                  </Paragraph>
                  <Paragraph margin={false} modifier={textSize}>
                    {props.children}
                  </Paragraph>
                </li>
              </Marger>
            </ol>
          )
        })}
      </div>
    )
  }
}

const styles = {
  parent: {
    position: 'relative',
    padding: '40px 0',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginLeft: 20,
    },
  },
  verticalLine: {
    border: '1px dashed #EEE',
    backgroundColor: '#FFF',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
  },
  customList: {
    listStyleType: 'none',
    paddingLeft: 60,

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      paddingLeft: 40,
    },
  },
  circle: {
    height: 50,
    width: 50,
    border: '2px solid #EEE',
    backgroundColor: '#FFF',
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: -25,
    fontWeight: 'bold',
  },
  noLigneHeight: {
    lineHeight: 0,
  },
}

export const Timeline = withMediaQueries({
  viewportIsTabletOrLess: true,
  viewportIsMobile: true,
})(TimelineBase)
