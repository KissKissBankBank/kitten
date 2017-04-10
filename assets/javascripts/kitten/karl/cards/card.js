import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'

const KarlCardComponent = ({ className, ...props }) => {
   const cardClassName = classNames(
      'karl-SizeCard',
      className,
    )

  return (
    <div className={ cardClassName } { ...props } />
  )
}

export const KarlCard = card(KarlCardComponent, {
  light: true,
})
