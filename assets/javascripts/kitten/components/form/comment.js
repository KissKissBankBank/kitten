import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { CommentAvatar } from 'kitten/components/form/comment-avatar'
import { Text } from 'kitten/components/typography/text'
import { ScreenConfig } from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'

const Marger = Radium(MargerBase)

export class Comment extends Component {
  static PropTypes = {
    text: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    avatarImgProps: PropTypes.object.isRequired,
    commentDate: PropTypes.string.isRequired,
  }

  render() {
    const { avatarProps, commentDate } = this.props

    return (
      <StyleRoot>
        <div style={styles.grid}>
          <CommentAvatar
            avatarImgProps={avatarProps}
            commentDate={commentDate}
          />
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
