import React from 'react'
import classNames from 'classnames'

export class FormActions extends React.Component {
  render() {
    return (
      <div className={ classNames('k-FormActions', this.props.className) }>
        { this.props.children }
      </div>
    )
  }
}
