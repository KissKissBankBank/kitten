import React, { Component } from 'react'
import { Marger } from '../../components/layout/marger'
import { Text } from '../../components/typography/text'
import { Grid, GridCol } from '../../components/grid/grid'

export class KarlColors extends Component {
  constructor() {
    super()

    this.renderColor = this.renderColor.bind(this)
  }

  renderColors() {
    return this.props.colors.map(this.renderColor)
  }

  renderColor(color) {
    const { name, backgroundHexa, nameHexa } = color

    const backgroundHexaStyles = {
      backgroundColor: backgroundHexa,
    }

    const nameHexaStyles = {
      color: nameHexa,
    }

    return (
      <div
        className="karl-Colors__container"
        style={backgroundHexaStyles}
        key={name}
      >
        <Marger
          bottom="3"
          className="k-u-margin-left-double"
          style={nameHexaStyles}
        >
          <Text
            tag="p"
            size="default"
            weight="bold"
            className="k-u-margin-none"
          >
            {name}
          </Text>

          <Text tag="p" size="micro" weight="bold" className="k-u-margin-none">
            {backgroundHexa}
          </Text>
        </Marger>
      </div>
    )
  }

  render() {
    return (
      <Grid>
        <GridCol>
          <div className="karl-Colors">{this.renderColors()}</div>
        </GridCol>
      </Grid>
    )
  }
}
