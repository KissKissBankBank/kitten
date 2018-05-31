import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Text as TextBase } from 'kitten/components/typography/text'
import { mediaQueries } from 'kitten/hoc/media-queries'
import COLORS from 'kitten/constants/colors-config'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class CommentComponent extends Component {
  render() {
    return <span style={styles.input} />
  }
}

const styles = {
  input: {
    position: 'relative',
    display: 'flex',

    textarea: {
      width: '100%',
      borderWidth: '2px',
      backgroundColor: COLORS.background3,
      borderColor: COLORS.background3,

      color: COLORS.font1,
      padding: '30px',
      fontSize: '16px',
    },
  },
}
