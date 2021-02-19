import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button as KittenButton } from '../../../buttons/button/button'

export const Button = props => {
  let cleanProps = Object.assign({}, props)
  delete cleanProps.__TYPE

  return (
    <KittenButton
      borderRadius={4}
      modifier="helium"
      {...cleanProps}
      className={classNames(
        'k-BackingCard__button',
        'k-BackingCard__drawer',
        props.className,
      )}
    />
  )
}

Button.propTypes = {
  children: PropTypes.node,
  __TYPE: PropTypes.string,
}

Button.defaultProps = {
  __TYPE: 'Button',
}
