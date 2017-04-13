import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'

const KarlCardComponent = ({ className, ...props }) => {
   const cardClassName = classNames(
      'karl-SizeCard',
      className,
    )

   const styles = { height: '100px' }

  return (
    <div className={ cardClassName } styles={ styles } { ...props } />
  )
}

export const KarlCard = card(KarlCardComponent, {
  light: true,
})
