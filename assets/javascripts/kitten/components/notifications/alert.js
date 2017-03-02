import React from 'react'
import classNames from 'classnames'

export class Alert extends React.Component {
  render() {
    return (
      <p className="k-Alert">
        { this.props.children }
      </p>
    )
  }
}
