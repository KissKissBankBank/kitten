import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { Label } from 'kitten/components/form/label'

export class FieldLabel extends Component {
  render() {
    const { children, ...others } = this.props

    return (
      <Marger bottom="1.5">
        <Label {...others} margin={false} size="tiny">
          {children}
        </Label>
      </Marger>
    )
  }
}
