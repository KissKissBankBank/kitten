import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Text as TextBase } from 'kitten/components/typography/text'
import COLORS from 'kitten/constants/colors-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

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
    const { avatarImgProps, commentDate, viewportIsMobile } = this.props

    return (
      <div style={styles.avatar}>
        <Marger bottom="1">
          <ButtonImage
            tag="span"
            huge={!viewportIsMobile}
            big={viewportIsMobile}
            withoutPointerEvents
            img={avatarImgProps}
          />
        </Marger>

        <Text size="nano" weight="light" color="font1">
          {commentDate}
        </Text>
      </div>
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

export const CommentAvatar = mediaQueries(Radium(CommentAvatarComponent), {
  viewportIsMobile: true,
})
