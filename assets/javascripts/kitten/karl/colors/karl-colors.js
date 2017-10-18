import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { Text } from 'kitten/components/typography/text'

export class KarlColors extends Component {
  constructor() {
    super()

    this.renderColor = this.renderColor.bind(this)
  }

  renderColors() {
    return this.props.colors.map(this.renderColor)
  }

  renderColor(color) {
    const { name, hexa, colorName } = color

    const hexaStyles = {
      backgroundColor: hexa,
    }

    const colorNameStyles = {
      color: colorName,
    }

    return (
      <div
        className="karl-Colors__container"
        style={ hexaStyles }
      >
        <Marger
          bottom="3"
          className="k-u-margin-left-double"
          style={ colorNameStyles }
        >
          <Text
            tag="p"
            size="default"
            weight="bold"
            className="k-u-margin-none">
            { name }
          </Text>
          <Text
            tag="p"
            size="micro"
            weight="bold"
            className="k-u-margin-none">
            { hexa }
          </Text>
        </Marger>
      </div>
    )
  }

  render() {
    return (
      <div className="k-Grid">
        <div className="k-Grid__col k-Grid__col--12">
          <div className="karl-Colors">
            { this.renderColors() }
          </div>
        </div>
      </div>
    )
  }
}
