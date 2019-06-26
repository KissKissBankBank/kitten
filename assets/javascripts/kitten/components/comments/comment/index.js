import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { CommentAvatar } from '../../../components/comments/comment-avatar'
import { Text as TextBase } from '../../../components/typography/text'
import { ScreenConfig } from '../../../constants/screen-config'
import { mediaQueries } from '../../../hoc/media-queries'
import COLORS from '../../../constants/colors-config'

const Text = Radium(TextBase)
const CommentContent = ({ text, ownerName, viewportIsMobile, style }) => (
  <StyleRoot style={style}>
    <Marger bottom="1">
      <Text color="font1" size="tiny" weight="regular">
        {ownerName}
      </Text>
    </Marger>
    <Marger top="1">
      <Text
        color="font1"
        size={viewportIsMobile ? 'tiny' : 'default'}
        weight="light"
      >
        {text}
      </Text>
    </Marger>
    <span style={styles.comment.arrow} />
  </StyleRoot>
)

export const CommentComponent = ({
  text,
  ownerName,
  avatarImgProps,
  commentDate,
  viewportIsMobile,
  bottomNotes,
}) => (
  <Fragment>
    <div style={styles.grid}>
      <CommentAvatar
        avatarImgProps={avatarImgProps}
        commentDate={commentDate}
      />
      <StyleRoot style={styles.commentContent}>
        <CommentContent
          style={styles.comment}
          text={text}
          ownerName={ownerName}
          viewportIsMobile={viewportIsMobile}
        />
        {bottomNotes && (
          <Marger top=".5">
            <Text
              style={styles.bottomNotes}
              tag="p"
              color="font1"
              size="micro"
              weight="bold"
            >
              {bottomNotes}
            </Text>
          </Marger>
        )}
      </StyleRoot>
    </div>
  </Fragment>
)

CommentComponent.propTypes = {
  text: PropTypes.node.isRequired,
  ownerName: PropTypes.string.isRequired,
  avatarImgProps: PropTypes.object.isRequired,
  commentDate: PropTypes.string.isRequired,
  viewportIsMobile: PropTypes.bool.isRequired,
  bottomNotes: PropTypes.node,
}

CommentComponent.defaultProps = {
  bottomNotes: '',
}

const styles = {
  grid: {
    display: 'flex',
  },
  commentContent: {
    position: 'relative',
    marginLeft: 20,
    [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
      marginLeft: 35,
    },
  },
  bottomNotes: {
    paddingLeft: 30,
  },
  comment: {
    borderWidth: 2,
    backgroundColor: COLORS.background3,
    borderColor: COLORS.background3,
    color: COLORS.font1,
    padding: 30,
    fontSize: 16,

    arrow: {
      position: 'absolute',
      top: 20,
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: 10,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: COLORS.background3,
      left: -20,
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        top: 35,
      },
    },
  },
}

export const Comment = mediaQueries(Radium(CommentComponent), {
  viewportIsMobile: true,
})
