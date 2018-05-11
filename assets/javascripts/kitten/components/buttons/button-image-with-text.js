import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ButtonImage as ButtonImageBase } from 'kitten/components/buttons/button-image'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { Text as TextBase } from 'kitten/components/typography/text'

const ButtonImage = Radium(ButtonImageBase)
const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class ButtonImageWithTextComponent extends Component {
  // static PropTypes = {
  //   title = PropTypes.string.isRequired,
  //   description = PropTypes.string,
  // }

  static defaultProps = {
    avatarProps: {
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
      alt: '',
    },
    title: '',
    description: '',
    titleProps: {},
    descriptionProps: {},
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
    const { title, description, descriptionProps, titleProps } = this.props

    return (
      <div style={styles.description}>
        <Text tag="div" {...titleProps}>
          {title}
        </Text>

        <Text tag="div" {...descriptionProps}>
          {description}
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
    marginRight: '20px',
    lineHeight: '1.2',
  },
}

export const ButtonImageWithText = Radium(ButtonImageWithTextComponent)
