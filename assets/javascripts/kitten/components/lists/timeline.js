import React, { Component } from 'react'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import Radium, { StyleRoot } from 'radium'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'
import pathOr from 'ramda/src/pathOr'

const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

export class Timeline extends Component {
  render() {
    const { children } = this.props
    const arrayOfChildren = React.Children.toArray(children)

    return (
      <StyleRoot style={styles.timelineContainer}>
        <span style={styles.verticalDashedLine} />

        <ol style={styles.customList}>
          {React.Children.map(arrayOfChildren, (child, index) => {
            return (
              <li style={styles.list}>
                <Text size="tiny" style={styles.circle}>
                  {++index}
                </Text>
                <Marger top="2.5" bottom="2.5" style={styles.textList}>
                  {pathOr(child, ['props', 'children'], child)}
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
    backgroundImage: `linear-gradient(${COLORS.line1} 50%,
      rgba(255,255,255,0) 0%)`,
    backgroundPosition: 'right',
    backgroundSize: '2px 8px',
    backgroundRepeat: 'repeat-y',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: -1,
    width: 2,
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
    margin: `80px 40px 80px ${-circleSize / 2}px`,
    lineHeight: 0,
    flex: `0 0 ${circleSize}px`,
    position: 'relative',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginRight: 20,
    },

    [`@media (min-width: ${ScreenConfig.S.min}px) and
      (max-width: ${ScreenConfig.M.max}px)`]: {
      margin: `60px 40px 60px ${-circleSize / 2}px`,
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
