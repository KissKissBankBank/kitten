import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { Button } from 'kitten/components/buttons/button'

export class VerticalCardWithAction extends Component {
  static propTypes = {
    titleDescription: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    textDescription: PropTypes.string,
    textTag: PropTypes.string,
    button: PropTypes.string.isRequired,
    buttonModifier: PropTypes.string.isRequired,
  }

  static defaultProps = {
    imageProps: {
      src: '',
      alt: '',
    },
    titleTag: 'h1',
    textDescription: '',
    textTag: 'p',
  }

  render() {
    const {
      imageProps,
      titleDescription,
      titleTag,
      textDescription,
      textTag,
      button,
      buttonModifier,
      ...others
    } = this.props

    return (
      <StyleRoot {...others}>
        <Marger bottom="3">{this.renderImage()}</Marger>
        <Marger top="3" bottom="3">
          {this.renderDescription()}
        </Marger>
        <Marger top="3" style={styles.button}>
          {this.renderAction()}
        </Marger>
      </StyleRoot>
    )
  }

  renderImage() {
    if (!this.props.imageProps.src) return

    return (
      <div>
        <img {...this.props.imageProps} style={styles.image} />
      </div>
    )
  }

  renderDescription() {
    const { titleDescription, titleTag, textDescription, textTag } = this.props

    return (
      <Fragment>
        <Title
          color="font1"
          modifier="senary"
          tag={titleTag}
          style={styles.textCenter}
        >
          {titleDescription}
        </Title>
        {textDescription && (
          <Marger top="1.5">
            <Text
              color="font1"
              size="tiny"
              tag={textTag}
              style={styles.textCenter}
            >
              {textDescription}
            </Text>
          </Marger>
        )}
      </Fragment>
    )
  }

  renderAction() {
    const { button, buttonModifier } = this.props

    return (
      <Button modifier={buttonModifier} type="button" aria-label={button}>
        {button}
      </Button>
    )
  }
}

const styles = {
  image: {
    width: '100%',
    height: 450,
  },

  textCenter: {
    textAlign: 'center',
  },

  button: {
    textAlign: 'center',
  },
}
