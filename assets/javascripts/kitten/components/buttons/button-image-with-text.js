import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ButtonImage as ButtonImageBase } from 'kitten/components/buttons/button-image'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { Text as TextBase } from 'kitten/components/typography/text'
import { parseHtml } from 'kitten/helpers/utils/parser'

const ButtonImage = Radium(ButtonImageBase)
const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class ButtonImageWithTextComponent extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  static defaultProps = {
    avatarProps: {
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
      alt: '',
    },
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
    const { title, description, isNormal } = this.props

    const size = isNormal ? 'tiny' : 'micro'

    return (
      <div style={styles.description}>
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

  description: {
    marginLeft: '10px',
    lineHeight: '1.2',
  },
}

export const ButtonImageWithText = Radium(ButtonImageWithTextComponent)
