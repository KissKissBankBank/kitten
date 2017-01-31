import React from 'react'
import classNames from 'classnames'

export class FormRow extends React.Component {
  render() {
    return (
      <div className={ classNames('k-FormRow', this.props.className) }>
        { this.props.children }
      </div>
    )
  }
}
