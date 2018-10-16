import React, { Component } from 'react'

export class Deprecated extends Component {
  componentWillMount() {
    if (process.env.NODE_ENV === 'development') {
      const componentName = React.Children.only(this.props.children)._owner.type
        .name

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
