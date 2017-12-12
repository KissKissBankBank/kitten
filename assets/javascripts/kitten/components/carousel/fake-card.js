import React from 'react'

//const MAX_WIDTH = 350
const MIN_WIDTH = 280
const MARGIN_BETWEEN = 30

const RATIO_WIDTH = 4
const RATIO_HEIGHT = 3

export default class FakeCard extends React.Component {

  //static MAX_WIDTH = MAX_WIDTH
  static MIN_WIDTH = MIN_WIDTH
  static MARGIN_BETWEEN = MARGIN_BETWEEN

  render() {
    const {style, title} = this.props
    return (
      <div style={{ ...styles.card, ...style }}>
        <div style={styles.cardRatio} />

        <div style={styles.cardInner}>
          <div>MIN_WIDTH : {MIN_WIDTH}</div>
          <div style={styles.title}>{title}</div>
        </div>
      </div>
    )
  }
}

const styles = {
  card: {
    flexGrow: 1,
    flexShrink: 1,
    //flexBasis: MAX_WIDTH,
    //maxWidth: MAX_WIDTH,
    minWidth: MIN_WIDTH,
    position: 'relative',

    backgroundColor: 'pink',
  },
  cardInner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  cardRatio: {
    width: 'auto',
    paddingBottom: `${RATIO_HEIGHT / RATIO_WIDTH * 100}%`,
  },
  title: {
    fontSize: 34,
  },
}
