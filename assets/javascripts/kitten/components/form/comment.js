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
import { mediaQueries } from 'kitten/hoc/media-queries'
import COLORS from 'kitten/constants/colors-config'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class CommentComponent extends Component {
  static PropTypes = {
    text: PropTypes.string.isRequired,
  }

  static defaultProps = {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
  }

  render() {
    return (
      <StyleRoot>
        <Grid>
          <GridCol col="2">
            <CommentAvatar />
          </GridCol>
          <GridCol col="10">{this.renderComment()}</GridCol>
        </Grid>
      </StyleRoot>
    )
  }

  renderComment() {
    const { text } = this.props

    return (
      <div style={styles.input}>
        {text}
        <span style={styles.input.arrow} />
      </div>
    )
  }
}

const styles = {
  input: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    borderWidth: '2px',
    backgroundColor: COLORS.background3,
    borderColor: COLORS.background3,
    color: COLORS.font1,
    padding: '30px',
    fontSize: '16px',

    arrow: {
      position: 'absolute',
      top: '2rem',
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: '8px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: COLORS.background3,
      left: '-1rem',
    },
  },
}

export const Comment = mediaQueries(Radium(CommentComponent), {
  viewportIsMobile: true,
  viewportIsTabletOrLess: true,
})
