import React, { Component } from 'react'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import Radium, { StyleRoot } from 'radium'
import { Text as TextBase } from 'kitten/components/typography/text'
import { withMediaQueries } from 'kitten/hoc/media-queries'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'

const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class TimelineBase extends Component {
  render() {
    return (
      <StyleRoot style={styles.timelineContainer}>
        <span style={styles.verticalDashedLine} />

        <ol style={styles.customList}>
          {this.props.children.map(({ props }, index) => {
            return (
              <li style={styles.list}>
                <Text size="tiny" style={styles.circle}>
                  {++index}
                </Text>
                <Marger bottom="2.5" top="2.5" style={styles.textList}>
                  {props.children}
                </Marger>
              </li>
            )
          })}
        </ol>
      </StyleRoot>
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
    border: `1px dashed ${COLORS.line1}`,
    backgroundColor: COLORS.background1,
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
  },
  customList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  circle: {
    boxSizing: 'border-box',
    height: circleSize,
    width: circleSize,
    border: `2px solid ${COLORS.line1}`,
    backgroundColor: COLORS.background1,
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

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginRight: 20,
    },
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
