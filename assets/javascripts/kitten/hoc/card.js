import React from 'react'
import classNames from 'classnames'

export const card = (WrappedComponent, wrappedProps) => {
  const defaultProps = {
    className: null,
    light: false,
    padded: false,
    rounded: false,
    translateOnHover: false,
    withBorder: false,
    withShadow: false,
    withVerticalPadding: false,
  }

  const Card = props => {
    const {
      className,
      light,
      padded,
      rounded,
      translateOnHover,
      withBorder,
      withShadow,
      withVerticalPadding,
      ...others,
    } = { ...defaultProps, ...wrappedProps, ...props }

    const cardClassName = classNames(
      'k-Card',
      {
        'k-Card--light': light,
        'k-Card--padded': padded,
        'k-Card--rounded': rounded,
        'k-Card--translateOnHover': translateOnHover,
        'k-Card--withBorder': withBorder,
        'k-Card--withShadow': withShadow,
        'k-Card--withVerticalPadding': withVerticalPadding,
      },
      className,
    )

    return (
      <WrappedComponent className={ cardClassName } { ...others } />
    )
  }

  return Card
}
