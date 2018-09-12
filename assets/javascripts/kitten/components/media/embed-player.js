import React, { Component } from 'react'
import PropTypes from 'prop-types'
import COLORS from 'kitten/constants/colors-config'
import Radium, { StyleRoot } from 'radium'
import { Text } from 'kitten/components/typography/text'
import { ResponsiveIframeContainer } from 'kitten/components/layout/responsive-iframe-container'
import { parseHtml } from 'kitten/helpers/utils/parser'
import { ScreenConfig } from 'kitten/constants/screen-config'
import {
  NUM_COLUMNS,
  GUTTER,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'

const PlayerButton = props => (
  <StyleRoot>
    <div style={styles.playerButton}>
      <Text size="default" weight="regular" aria-label={props.playButtonLabel}>
        ►
      </Text>
    </div>
  </StyleRoot>
)

PlayerButton.propTypes = {
  playButtonLabel: PropTypes.string.isRequired,
}

class EmbedPlayerBase extends Component {
  constructor(props) {
    super(props)

    this.state = { showPlayer: false }
  }

  handleClick = () => {
    this.setState({ showPlayer: true })
    this.previewVideo.blur()
  }

  handleKeyPress = event => {
    event.preventDefault()
    const enterKey = event.key === 'Enter'
    const spaceKey = event.key === ' '

    if (enterKey || spaceKey) this.handleClick()
  }

  handleFocus = event => {
    event.preventDefault()
    this.previewVideo.focus()
    this.handleKeyPress(event)
  }

  a11yOnClickProps = () => {
    if (!this.props.iframeVideo) return

    return {
      onClick: this.handleClick,
      onKeyPress: this.handleKeyPress,
      onFocus: this.handleFocus,
      role: 'button',
      tabIndex: 0,
    }
  }

  render() {
    const {
      ratio,
      previewProps,
      iframeVideo,
      playButtonLabel,
      style: mainStyle = void 0,
      t,
    } = this.props

    const { thumbnail, badgeComponent, style } = previewProps
    const isVideoPlaying = iframeVideo && this.state.showPlayer
    const playerPreviewStyle = [
      styles.projectPlayer.base,
      iframeVideo ? { cursor: 'pointer' } : null,
      isVideoPlaying ? styles.projectPlayer.hide : styles.projectPlayer.show,
    ]

    return (
      <StyleRoot>
        <div
          style={{ ...mainStyle, ...styles.container }}
          ref={node => {
            this.previewVideo = node
          }}
          {...this.a11yOnClickProps()}
        >
          <div style={playerPreviewStyle}>
            {iframeVideo && <PlayerButton playButtonLabel={playButtonLabel} />}

            <img
              style={styles.thumbnail}
              src={thumbnail.src}
              alt={thumbnail.alt}
            />

            {badgeComponent}
          </div>

          {iframeVideo && (
            <div style={styles.embedPlayer}>
              <ResponsiveIframeContainer ratio={ratio}>
                {parseHtml(iframeVideo)}
              </ResponsiveIframeContainer>
            </div>
          )}
        </div>
      </StyleRoot>
    )
  }
}

EmbedPlayerBase.propTypes = {
  previewProps: PropTypes.shape({
    thumbnail: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      style: PropTypes.string,
    }).isRequired,
  }).isRequired,
  badgeComponent: PropTypes.node,
  playButtonLabel: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
  iframeVideo: PropTypes.string,
}

EmbedPlayerBase.defaultProps = {
  previewProps: {
    thumbnail: {
      style: {},
    },
  },
  badgeComponent: null,
  iframeVideo: null,
}

const playerButtonSize = 90
const playerButtonXSSize = playerButtonSize / 2

const styles = {
  container: {
    position: 'relative',
    display: 'block',
    width: '100%',
  },

  thumbnail: {
    display: 'block',
    width: '100%',
  },

  embedPlayer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },

  playerButton: {
    width: `${playerButtonSize}px`,
    height: `${playerButtonSize}px`,
    background: COLORS.background1,
    position: 'absolute',
    top: `calc(50% - ${playerButtonSize / 2}px)`,
    left: `calc(50% - ${playerButtonSize / 2}px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      width: `${playerButtonXSSize}px`,
      height: `${playerButtonXSSize}px`,
      top: `calc(50% - ${playerButtonXSSize / 2}px)`,
      left: `calc(50% - ${playerButtonXSSize / 2}px)`,
    },
  },

  projectPlayer: {
    base: {
      position: 'relative',
      transition: 'opacity ease 600ms, z-index ease 600ms',
      zIndex: 1,
    },
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
      zIndex: 0,
    },
  },
}

export const EmbedPlayer = Radium(EmbedPlayerBase)
