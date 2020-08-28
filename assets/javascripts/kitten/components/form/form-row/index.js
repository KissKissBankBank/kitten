import React from 'react'
import classNames from 'classnames'

export class FormRow extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={classNames('k-FormRow', this.props.className)}
      />
    )
  }
}

FormRow.defaultProps = {
  className: null,
  children: null,
}
