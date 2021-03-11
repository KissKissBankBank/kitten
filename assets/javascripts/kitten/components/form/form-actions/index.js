import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const FormActions = props => {
  const { className, spreadOutAt, ...others } = props
  const formActionsClassName = classNames('k-FormActions', className, {
    [`k-FormActions--spreadOut@${spreadOutAt}`]: spreadOutAt,
  })

  return <div className={formActionsClassName} {...others} />
}

FormActions.Item = props => {
  return (
    <div
      {...props}
      className={classNames('k-FormActions__item', props.className)}
    />
  )
}

FormActions.propTypes = {
  spreadOutAt: PropTypes.oneOf(['s-up']),
}

FormActions.defaultProps = {
  spreadOutAt: 's-up',
  children: null,
}

FormActions.Item.defaultProps = {
  className: null,
  children: null,
}
