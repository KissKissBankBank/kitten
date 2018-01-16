import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const card = (WrappedComponent, wrappedProps) => {
  const defaultProps = {
    className: null,
    light: false,
    padded: false,
    rounded: false,
    translateOnHover: false,
    withBorder: false,
    withDarkBorder: false,
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
      withDarkBorder,
      withShadow,
      withVerticalPadding,
      withoutBoxShadowOnHover,
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
        'k-Card--withDarkBorder': withDarkBorder,
        'k-Card--withShadow': withShadow,
        'k-Card--withVerticalPadding': withVerticalPadding,
        'k-Card--withoutBoxShadowOnHover': withoutBoxShadowOnHover,
      },
      className,
    )

    return (
      <WrappedComponent
        className={ cardClassName }
        { ...others }
      />
    )
  }

  return Card
}

card.propTypes = {
  rounded: PropTypes.oneOf(['micro', 'tiny']),
}
