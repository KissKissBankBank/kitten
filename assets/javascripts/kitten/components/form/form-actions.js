import React from 'react'
import classNames from 'classnames'

export class FormActions extends React.Component {
  render() {
    const { className, children, ...others } = this.props

    return (
      <div className={ classNames('k-FormActions', className) }>
        { children }
      </div>
    )
  }
}
