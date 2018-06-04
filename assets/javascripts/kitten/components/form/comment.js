import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { CommentAvatar } from 'kitten/components/form/comment-avatar'
import { Text as TextBase } from 'kitten/components/typography/text'
import { ScreenConfig } from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class CommentComponent extends Component {
  static PropTypes = {
    text: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
  }

  render() {
    return (
      <StyleRoot>
        <div style={styles.grid}>
          <CommentAvatar />
          {this.renderComment()}
        </div>
      </StyleRoot>
    )
  }

  renderComment() {
    const { text, ownerName } = this.props

    return (
      <div style={styles.comment}>
        <Marger bottom="1">
          <Text color="font1" size="tiny" weight="regular">
            {ownerName}
          </Text>
        </Marger>
        <Marger top="1">{text}</Marger>
        <span style={styles.comment.arrow} />
      </div>
    )
  }
}

const styles = {
  grid: {
    display: 'flex',
  },
  comment: {
    position: 'relative',
    borderWidth: '2px',
    backgroundColor: COLORS.background3,
    borderColor: COLORS.background3,
    color: COLORS.font1,
    padding: '30px',
    fontSize: '16px',
    marginLeft: 20,

    [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
      marginLeft: 35,
    },

    arrow: {
      position: 'absolute',
      top: '30px',
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: '10px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: COLORS.background3,
      left: '-20px',
    },
  },
}

export const Comment = CommentComponent
