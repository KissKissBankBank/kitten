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
    withBorderDark: false,
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
      withBorderDark,
      withShadow,
      withVerticalPadding,
      ...others,
    } = { ...defaultProps, ...wrappedProps, ...props }

    const cardClassName = classNames(
      'k-Card',
      {
        'k-Card--light': light,
        'k-Card--padded': padded,
        'k-Card--microRounded': rounded == 'micro',
        'k-Card--tinyRounded': rounded == 'tiny',
        'k-Card--rounded': rounded == true,
        'k-Card--translateOnHover': translateOnHover,
        'k-Card--withBorder': withBorder,
        'k-Card--withBorderDark': withBorderDark,
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

card.propTypes = {
  rounded: React.PropTypes.oneOf(['micro', 'tiny']),
}
