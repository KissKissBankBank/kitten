import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ButtonImage as ButtonImageBase } from 'kitten/components/buttons/button-image'
import { Text as TextBase } from 'kitten/components/typography/text'

const ButtonImage = Radium(ButtonImageBase)
const Text = Radium(TextBase)

class ButtonImageWithTextComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    micro: PropTypes.bool,
    largeGutter: PropTypes.bool,
  }

  static defaultProps = {
    avatarProps: {
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
      alt: '',
    },
    title: '',
    description: '',
  }

  render() {
    return (
      <div style={styles}>
        {this.renderButtonImage()}
        {this.renderDescription()}
      </div>
    )
  }

  renderButtonImage() {
    return (
      <ButtonImage
        tag="span"
        img={this.props.avatarProps}
        withoutPointerEvents
      />
    )
  }

  renderDescription() {
    const { title, description, micro, tag, largeGutter } = this.props

    const size = micro ? 'micro' : 'tiny'

    const Tag = tag

    const tagStyle = [styles, tag == 'p' && styles.paragraph]

    const textStyle = [styles.text, largeGutter && styles.text.largeGutter]

    return (
      <div style={textStyle}>
        <Text tag={Tag} size={size} weight="regular" style={tagStyle}>
          {title}
        </Text>

        <Text tag={Tag} size={size} style={tagStyle}>
          {description}
        </Text>
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'center',
  flex: '1',

  text: {
    marginLeft: '10px',
    lineHeight: '1.2',

    largeGutter: {
      marginLeft: '15px',
    },
  },

  paragraph: {
    margin: 0,
  },
}

export const ButtonImageWithText = Radium(ButtonImageWithTextComponent)
