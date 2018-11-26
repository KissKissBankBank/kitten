import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ButtonImage as ButtonImageBase } from '../../components/buttons/button-image'
import { Text as TextBase } from '../../components/typography/text'

const ButtonImage = Radium(ButtonImageBase)
const Text = Radium(TextBase)

class ButtonImageWithTextComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    micro: PropTypes.bool,
    tag: PropTypes.string,
    largeGutter: PropTypes.bool,
    titleRegular: PropTypes.bool,
    textRegular: PropTypes.bool,
    avatarProps: PropTypes.func,
  }

  static defaultProps = {
    avatarProps: {
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
      alt: '',
    },
    micro: false,
    tag: 'p',
    largeGutter: false,
    titleRegular: false,
    textRegular: false,
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
    const {
      title,
      description,
      micro,
      tag,
      titleRegular,
      textRegular,
      largeGutter,
    } = this.props

    const size = micro ? 'micro' : 'tiny'

    const Tag = tag

    const titleWeight = titleRegular ? 'regular' : 'light'

    const textWeight = textRegular ? 'regular' : 'light'

    const styleTag = [styles, tag == 'p' && styles.paragraph]

    const styleText = [styles.text, largeGutter && styles.text.largeGutter]

    return (
      <div style={styleText}>
        <Text tag={Tag} size={size} weight={titleWeight} style={styleTag}>
          {title}
        </Text>

        <Text tag={Tag} size={size} weight={textWeight} style={styleTag}>
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
