import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Image = props => {
  let cleanProps = Object.assign({}, props)
  delete cleanProps.__TYPE

  return (
    <div
      {...cleanProps}
      className={classNames('k-BackingCard__imageWrapper', props.className)}
    />
  )
}

Image.propTypes = {
  children: PropTypes.node,
  __TYPE: PropTypes.string,
}

Image.defaultProps = {
  __TYPE: 'Image',
}
