import React, { Component } from 'react'
import { ScreenConfig } from '../../constants/screen-config'
import Radium, { StyleRoot } from 'radium'
import { Text as TextBase } from '../../components/typography/text'
import { Marger as MargerBase } from '../../components/layout/marger'
import COLORS from '../../constants/colors-config'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../constants/typography-config'

const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

export class Timeline extends Component {
  render() {
    const { children, itemHeight } = this.props
    const arrayOfChildren = React.Children.toArray(children)
    const bulletStyle = [styles.circle, styles.circleMarger[itemHeight]]

    return (
      <StyleRoot style={styles.timelineContainer}>
        <span style={styles.verticalDashedLine} />

        <ol style={styles.customList}>
          {React.Children.map(arrayOfChildren, (child, index) => (
            <li style={styles.list}>
              <Text size="tiny" style={bulletStyle}>
                {++index}
              </Text>
              <Marger top="2.5" bottom="2.5" style={styles.textList}>
                {child}
              </Marger>
            </li>
          ))}
        </ol>
      </StyleRoot>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  itemHeight: PropTypes.oneOf(['thin', 'large']),
}

Timeline.defaultProps = {
  itemHeight: 'large',
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
      rgba(255, 255, 255, 0) 0%)`,
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
    marginRight: 40,
    marginLeft: -circleSize / 2,
    lineHeight: 0,
    flex: `0 0 ${circleSize}px`,
    position: 'relative',
    ...TYPOGRAPHY.fontStyles.bold,

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginRight: 20,
    },
  },
  circleMarger: {
    large: {
      marginTop: 80,
      marginBottom: 80,

      [`@media (min-width: ${ScreenConfig.S.min}px) and
        (max-width: ${ScreenConfig.M.max}px)`]: {
        marginTop: 60,
        marginBottom: 60,
      },
    },
    thin: {
      marginTop: 40,
      marginBottom: 40,

      [`@media (min-width: ${ScreenConfig.S.min}px) and
        (max-width: ${ScreenConfig.M.max}px)`]: {
        marginTop: 20,
        marginBottom: 20,
      },
    },
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textList: {
    flexGrow: 1,
    alignItems: 'center',
  },
}
