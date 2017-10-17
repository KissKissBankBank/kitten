import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'

export class KarlColors extends Component {
  renderColor(color) {
    const hexaStyles = {
      backgroundColor: color.hexa,
    }

    const colorNameStyles = {
      color: color.colorName,
    }

    return() {
      <div
        className="karl-Colors__container"
        style={ hexaStyles }
      >
        <div
          className="k-u-margin-bottom-triple
                     k-u-margin-left-double"
          style={ colorNameStyles }
        >
         <p class="k-u-size-default
                    k-u-weight-bold
                    k-u-margin-none">
            { color.name }
          </p>
          <p class="k-u-size-micro
                    k-u-weight-bold
                    k-u-margin-none">
            { color.hexa }
          </p>
        </div>
      </div>
    }
  }

  render() {
    return (
      <div class="k-Grid">
        <div class="k-Grid__col k-Grid__col--12">
          { this.props.colors.forEach(color => this.renderColor(color)) }
        </div>
      </div>
    )
  }
}
