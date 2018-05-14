import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ButtonImage as ButtonImageBase } from 'kitten/components/buttons/button-image'
import { Text as TextBase } from 'kitten/components/typography/text'
import { parseHtml } from 'kitten/helpers/utils/parser'

const ButtonImage = Radium(ButtonImageBase)
const Text = Radium(TextBase)

class ButtonImageWithTextComponent extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isNormal: PropTypes.bool,
    outsideCard: PropTypes.bool,
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
      <StyleRoot style={styles}>
        {this.renderButtonImage()}
        {this.renderDescription()}
      </StyleRoot>
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
    const { title, description, isNormal, outsideCard } = this.props

    const size = isNormal ? 'tiny' : 'micro'

    const styleText = [styles.text, outsideCard && styles.text.outsideCard]

    return (
      <div style={styleText} outsideCard>
        <Text tag="div" size={size} weight="regular">
          {parseHtml(title)}
        </Text>

        <Text tag="div" size={size}>
          {parseHtml(description)}
        </Text>
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'center',

  text: {
    marginLeft: '10px',
    lineHeight: '1.2',

    outsideCard: {
      marginLeft: '15px',
    },
  },
}

export const ButtonImageWithText = Radium(ButtonImageWithTextComponent)
