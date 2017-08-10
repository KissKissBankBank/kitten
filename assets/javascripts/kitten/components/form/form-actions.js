import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export class FormActions extends Component {
  render() {
    const { className, children, spreadOutAt, ...others } = this.props
    const formActionsClassName = classNames(
      'k-FormActions',
      className,
      {
        [`k-FormActions--spreadOut@${spreadOutAt}`]: spreadOutAt,
      },
    )

    return (
      <div className={ formActionsClassName } { ...others }>
        { children }
      </div>
    )
  }
}

FormActions.propTypes = {
  spreadOutAt: PropTypes.oneOf(['s-up']),
}

FormActions.defaultProps = {
  spreadOutAt: 's-up',
}
