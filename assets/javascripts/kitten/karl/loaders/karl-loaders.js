import React, { Component } from 'react'
import { Loader } from 'kitten/components/loaders/loader'
import { Button } from 'kitten/components/buttons/button'
import { Marger } from 'kitten/components/layout/marger'

export class KarlLoaderInButton extends Component {
  render() {
    const isDisabled = this.props.disabled
    const isModifier = this.props.modifier

    return (
      <Marger
        top="1"
        bottom="1"
      >
        <Button
          icon
          iconWithMinWidth
          disabled={ isDisabled }
          modifier={ isModifier }
          aria-label="Loader button"
          title="Loader button"
        >
          <Loader className="k-Button__icon" />
        </Button>
      </Marger>
    )
  }
}
