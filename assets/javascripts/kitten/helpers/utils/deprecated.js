import React, { Component } from 'react'

export class Deprecated extends Component {
  UNSAFE_componentWillMount() {
    if (process.env.NODE_ENV === 'development') {
      const owner = React.Children.only(this.props.children)._owner

      if (!owner) return

      const componentName = owner.type.name

      console.warn(
        `Warning: ${componentName} is deprecated.`,
        this.props.warningMessage,
      )
    }
  }

  render() {
    return this.props.children
  }
}
