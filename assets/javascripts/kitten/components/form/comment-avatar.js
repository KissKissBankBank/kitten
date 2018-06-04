import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Text as TextBase } from 'kitten/components/typography/text'
import COLORS from 'kitten/constants/colors-config'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class CommentAvatarComponent extends Component {
  static PropTypes = {
    avatarImgProps: PropTypes.object.isRequired,
    commentDate: PropTypes.string,
  }

  static defaultProps = {
    avatarImgProps: { src: 'https://placehold.it/80x80/caf4fe/caf4fe' },
    commentDate: '2 min',
  }

  render() {
    const { avatarImgProps, commentDate } = this.props

    return (
      <StyleRoot style={styles.avatar}>
        <Marger bottom="1">
          <ButtonImage
            tag="span"
            huge
            withoutPointerEvents
            img={avatarImgProps}
          />
        </Marger>

        <Text size="nano" weight="light" color="font1">
          {commentDate}
        </Text>
      </StyleRoot>
    )
  }
}

const styles = {
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export const CommentAvatar = CommentAvatarComponent
