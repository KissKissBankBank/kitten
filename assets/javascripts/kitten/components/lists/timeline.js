import React, { Component } from 'react'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import Radium from 'radium'
import { Text as TextBase } from 'kitten/components/typography/text'
import { withMediaQueries } from 'kitten/hoc/media-queries'
import { Marger as MargerBase } from 'kitten/components/layout/marger'

const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class TimelineBase extends Component {
  render() {
    return (
      <div style={styles.timelineContainer}>
        <span style={styles.verticalDashedLine} />

        <ol style={styles.customList}>
          {this.props.children.map(({ props }, index) => {
            return (
              <li style={styles.list}>
                <Text size="tiny" style={styles.circle}>
                  {++index}
                </Text>
                <div style={styles.textList}>{props.children}</div>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

const circleSize = 50

const styles = {
  timelineContainer: {
    position: 'relative',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginLeft: 20,
    },
  },
  verticalDashedLine: {
    border: '1px dashed #EEE',
    backgroundColor: '#FFF',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
  },
  customList: {
    listStyleType: 'none',
    padding: 0,
    // [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
    //   paddingLeft: 40,
    // },
  },
  circle: {
    boxSizing: 'border-box',
    height: circleSize,
    width: circleSize,
    border: `2px solid #EEE`,
    backgroundColor: '#FFF',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    margin: `80px 40px 80px`,
    lineHeight: 0,
    flex: `0 0 ${circleSize}px`,
    marginLeft: -circleSize / 2,
    position: 'relative',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerList: {
    alignItems: 'center',
  },
  textList: {
    flexGrow: 1,
    alignItems: 'center',
  },
}

export const Timeline = withMediaQueries({
  viewportIsTabletOrLess: true,
  viewportIsMobile: true,
})(TimelineBase)
